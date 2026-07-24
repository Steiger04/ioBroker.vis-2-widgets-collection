import { g as z, a as E, u as W, L, b as at, c as Q, j as a, s as N, d as A, e as _, B as nt, r as it, m as Z, f as G, i as rt, h as q, k as U, T as $, t as K, l as V, n as lt, I as dt, P as ct, G as pt, __tla as __tla_0 } from "./usePopoverPositioning-CABAc1cn.js";
import { C as tt, D as ut, u as mt, g as gt, a as X, b as yt, c as xt, d as J, e as ft, w as vt, __tla as __tla_1 } from "./useData-CnVVm3xV.js";
import { u as et, d as ht, __tla as __tla_2 } from "./useValueState-BG7PYSLA.js";
import { s as bt, __tla as __tla_3 } from "./stateFields-Dq1EHf6B.js";
import { v as n, __tla as __tla_4 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Ct, __tla as __tla_5 } from "./Close-COZIl_jH.js";
import { S as St, __tla as __tla_6 } from "./Slider-DM8yVjny.js";
import { g as It, l as F, __tla as __tla_7 } from "./listItemTextClasses-DxSc_Sk3.js";
import { D as jt, a as wt, b as Pt, __tla as __tla_8 } from "./DialogTitle-BHm_s-MG.js";
import { S as kt, __tla as __tla_9 } from "./Stack-BqJweZgi.js";
import { u as Lt, __tla as __tla_10 } from "./useHtmlValue-3ISCcM5X.js";
import { B as Tt, __tla as __tla_11 } from "./Button-P09M-Ww3.js";
import { A as Rt, __tla as __tla_12 } from "./Avatar-BH9MFjYI.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let st;
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
  })()
]).then(async () => {
  function Vt(e) {
    return z("MuiListItem", e);
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
  function Bt(e) {
    return z("MuiListItemButton", e);
  }
  const B = E("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]), At = (e, t) => {
    const { ownerState: o } = e;
    return [
      t.root,
      o.dense && t.dense,
      o.alignItems === "flex-start" && t.alignItemsFlexStart,
      o.divider && t.divider,
      !o.disableGutters && t.gutters
    ];
  }, Mt = (e) => {
    const { alignItems: t, classes: o, dense: r, disabled: s, disableGutters: u, divider: i, selected: c } = e, v = _({
      root: [
        "root",
        r && "dense",
        !u && "gutters",
        i && "divider",
        s && "disabled",
        t === "flex-start" && "alignItemsFlexStart",
        c && "selected"
      ]
    }, Bt, o);
    return {
      ...o,
      ...v
    };
  }, Ot = N(nt, {
    shouldForwardProp: (e) => it(e) || e === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: At
  })(Z(({ theme: e }) => ({
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
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shortest
    }),
    "&:hover": {
      textDecoration: "none",
      backgroundColor: (e.vars || e).palette.action.hover,
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${B.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : G(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${B.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : G(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    },
    [`&.${B.selected}:hover`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : G(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : G(e.palette.primary.main, e.palette.action.selectedOpacity)
      }
    },
    [`&.${B.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${B.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.divider,
        style: {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
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
        props: ({ ownerState: t }) => !t.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: t }) => t.dense,
        style: {
          paddingTop: 4,
          paddingBottom: 4
        }
      }
    ]
  }))), $t = n.forwardRef(function(t, o) {
    const r = W({
      props: t,
      name: "MuiListItemButton"
    }), { alignItems: s = "center", autoFocus: u = false, component: i = "div", children: c, dense: p = false, disableGutters: v = false, divider: C = false, focusVisibleClassName: w, selected: h = false, className: S, ...b } = r, P = n.useContext(L), m = n.useMemo(() => ({
      dense: p || P.dense || false,
      alignItems: s,
      disableGutters: v
    }), [
      s,
      P.dense,
      p,
      v
    ]), x = n.useRef(null);
    at(() => {
      u && x.current && x.current.focus();
    }, [
      u
    ]);
    const I = {
      ...r,
      alignItems: s,
      dense: m.dense,
      disableGutters: v,
      divider: C,
      selected: h
    }, j = Mt(I), g = Q(x, o);
    return a.jsx(L.Provider, {
      value: m,
      children: a.jsx(Ot, {
        ref: g,
        href: b.href || b.to,
        component: (b.href || b.to) && i === "div" ? "button" : i,
        focusVisibleClassName: A(j.focusVisible, w),
        ownerState: I,
        className: A(j.root, S),
        ...b,
        classes: j,
        children: c
      })
    });
  });
  function Nt(e) {
    return z("MuiListItemSecondaryAction", e);
  }
  E("MuiListItemSecondaryAction", [
    "root",
    "disableGutters"
  ]);
  const Dt = (e) => {
    const { disableGutters: t, classes: o } = e;
    return _({
      root: [
        "root",
        t && "disableGutters"
      ]
    }, Nt, o);
  }, Gt = N("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        o.disableGutters && t.disableGutters
      ];
    }
  })({
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
    variants: [
      {
        props: ({ ownerState: e }) => e.disableGutters,
        style: {
          right: 0
        }
      }
    ]
  }), ot = n.forwardRef(function(t, o) {
    const r = W({
      props: t,
      name: "MuiListItemSecondaryAction"
    }), { className: s, ...u } = r, i = n.useContext(L), c = {
      ...r,
      disableGutters: i.disableGutters
    }, p = Dt(c);
    return a.jsx(Gt, {
      className: A(p.root, s),
      ownerState: c,
      ref: o,
      ...u
    });
  });
  ot.muiName = "ListItemSecondaryAction";
  const Ft = (e, t) => {
    const { ownerState: o } = e;
    return [
      t.root,
      o.dense && t.dense,
      o.alignItems === "flex-start" && t.alignItemsFlexStart,
      o.divider && t.divider,
      !o.disableGutters && t.gutters,
      !o.disablePadding && t.padding,
      o.hasSecondaryAction && t.secondaryAction
    ];
  }, Wt = (e) => {
    const { alignItems: t, classes: o, dense: r, disableGutters: s, disablePadding: u, divider: i, hasSecondaryAction: c } = e;
    return _({
      root: [
        "root",
        r && "dense",
        !s && "gutters",
        !u && "padding",
        i && "divider",
        t === "flex-start" && "alignItemsFlexStart",
        c && "secondaryAction"
      ],
      container: [
        "container"
      ]
    }, Vt, o);
  }, _t = N("div", {
    name: "MuiListItem",
    slot: "Root",
    overridesResolver: Ft
  })(Z(({ theme: e }) => ({
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
        props: ({ ownerState: t }) => !t.disablePadding,
        style: {
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      {
        props: ({ ownerState: t }) => !t.disablePadding && t.dense,
        style: {
          paddingTop: 4,
          paddingBottom: 4
        }
      },
      {
        props: ({ ownerState: t }) => !t.disablePadding && !t.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: t }) => !t.disablePadding && !!t.secondaryAction,
        style: {
          paddingRight: 48
        }
      },
      {
        props: ({ ownerState: t }) => !!t.secondaryAction,
        style: {
          [`& > .${B.root}`]: {
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
        props: ({ ownerState: t }) => t.divider,
        style: {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box"
        }
      },
      {
        props: ({ ownerState: t }) => t.button,
        style: {
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest
          }),
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.hasSecondaryAction,
        style: {
          paddingRight: 48
        }
      }
    ]
  }))), Ut = N("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container
  })({
    position: "relative"
  }), zt = n.forwardRef(function(t, o) {
    const r = W({
      props: t,
      name: "MuiListItem"
    }), { alignItems: s = "center", children: u, className: i, component: c, components: p = {}, componentsProps: v = {}, ContainerComponent: C = "li", ContainerProps: { className: w, ...h } = {}, dense: S = false, disableGutters: b = false, disablePadding: P = false, divider: m = false, secondaryAction: x, slotProps: I = {}, slots: j = {}, ...g } = r, l = n.useContext(L), d = n.useMemo(() => ({
      dense: S || l.dense || false,
      alignItems: s,
      disableGutters: b
    }), [
      s,
      l.dense,
      S,
      b
    ]), y = n.useRef(null), f = n.Children.toArray(u), k = f.length && rt(f[f.length - 1], [
      "ListItemSecondaryAction"
    ]), T = {
      ...r,
      alignItems: s,
      dense: d.dense,
      disableGutters: b,
      disablePadding: P,
      divider: m,
      hasSecondaryAction: k
    }, H = Wt(T), Y = Q(y, o), D = j.root || p.Root || _t, M = I.root || v.root || {}, O = {
      className: A(H.root, M.className, i),
      ...g
    };
    let R = c || "li";
    return k ? (R = !O.component && !c ? "div" : R, C === "li" && (R === "li" ? R = "div" : O.component === "li" && (O.component = "div")), a.jsx(L.Provider, {
      value: d,
      children: a.jsxs(Ut, {
        as: C,
        className: A(H.container, w),
        ref: Y,
        ownerState: T,
        ...h,
        children: [
          a.jsx(D, {
            ...M,
            ...!q(D) && {
              as: R,
              ownerState: {
                ...T,
                ...M.ownerState
              }
            },
            ...O,
            children: f
          }),
          f.pop()
        ]
      })
    })) : a.jsx(L.Provider, {
      value: d,
      children: a.jsxs(D, {
        ...M,
        as: R,
        ref: Y,
        ...!q(D) && {
          ownerState: {
            ...T,
            ...M.ownerState
          }
        },
        ...O,
        children: [
          f,
          x && a.jsx(ot, {
            children: x
          })
        ]
      })
    });
  }), Et = (e) => {
    const { classes: t, inset: o, primary: r, secondary: s, dense: u } = e;
    return _({
      root: [
        "root",
        o && "inset",
        u && "dense",
        r && s && "multiline"
      ],
      primary: [
        "primary"
      ],
      secondary: [
        "secondary"
      ]
    }, It, t);
  }, Ht = N("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        {
          [`& .${F.primary}`]: t.primary
        },
        {
          [`& .${F.secondary}`]: t.secondary
        },
        t.root,
        o.inset && t.inset,
        o.primary && o.secondary && t.multiline,
        o.dense && t.dense
      ];
    }
  })({
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${K.root}:where(& .${F.primary})`]: {
      display: "block"
    },
    [`.${K.root}:where(& .${F.secondary})`]: {
      display: "block"
    },
    variants: [
      {
        props: ({ ownerState: e }) => e.primary && e.secondary,
        style: {
          marginTop: 6,
          marginBottom: 6
        }
      },
      {
        props: ({ ownerState: e }) => e.inset,
        style: {
          paddingLeft: 56
        }
      }
    ]
  }), Yt = n.forwardRef(function(t, o) {
    const r = W({
      props: t,
      name: "MuiListItemText"
    }), { children: s, className: u, disableTypography: i = false, inset: c = false, primary: p, primaryTypographyProps: v, secondary: C, secondaryTypographyProps: w, slots: h = {}, slotProps: S = {}, ...b } = r, { dense: P } = n.useContext(L);
    let m = p ?? s, x = C;
    const I = {
      ...r,
      disableTypography: i,
      inset: c,
      primary: !!m,
      secondary: !!x,
      dense: P
    }, j = Et(I), g = {
      slots: h,
      slotProps: {
        primary: v,
        secondary: w,
        ...S
      }
    }, [l, d] = U("root", {
      className: A(j.root, u),
      elementType: Ht,
      externalForwardedProps: {
        ...g,
        ...b
      },
      ownerState: I,
      ref: o
    }), [y, f] = U("primary", {
      className: j.primary,
      elementType: $,
      externalForwardedProps: g,
      ownerState: I
    }), [k, T] = U("secondary", {
      className: j.secondary,
      elementType: $,
      externalForwardedProps: g,
      ownerState: I
    });
    return m != null && m.type !== $ && !i && (m = a.jsx(y, {
      variant: P ? "body2" : "body1",
      component: (f == null ? void 0 : f.variant) ? void 0 : "span",
      ...f,
      children: m
    })), x != null && x.type !== $ && !i && (x = a.jsx(k, {
      variant: "body2",
      color: "textSecondary",
      ...T,
      children: x
    })), a.jsxs(l, {
      ...d,
      children: [
        m,
        x
      ]
    });
  }), qt = ({ widgetStates: e, data: t, open: o, closeHandler: r }) => {
    const { widget: s, getPropertyValue: u } = n.useContext(tt), i = s.data.oidObject, c = s.data.onlyStates, [p, v] = n.useState(() => {
      const l = u("oid");
      return typeof l == "number" ? l : 0;
    }), { updateValue: C } = et("oid"), w = n.useMemo(() => {
      const l = i == null ? void 0 : i.commonStates, d = i == null ? void 0 : i.type, y = i == null ? void 0 : i.name, f = i == null ? void 0 : i.minValue, k = i == null ? void 0 : i.maxValue;
      return {
        commonStates: l,
        oidType: d,
        oidName: y,
        minValue: f,
        maxValue: k
      };
    }, [
      i
    ]), h = n.useCallback((l) => {
      C(l);
    }, [
      C
    ]), S = n.useCallback((l, d) => {
      const y = Array.isArray(d) ? d[0] : d;
      v(y), h(y);
    }, [
      h
    ]), b = n.useCallback((l, d) => {
      (d === "backdropClick" || d === "escapeKeyDown") && r();
    }, [
      r
    ]), P = n.useCallback(() => {
      r();
    }, [
      r
    ]), m = n.useCallback((l) => (d) => {
      d.preventDefault();
      const y = Number(l);
      isNaN(y) || v(y), h(l);
    }, [
      h
    ]), x = n.useMemo(() => {
      const { oidType: l, commonStates: d, minValue: y, maxValue: f } = w;
      return l === "number" && !c && y !== void 0 && f !== void 0 ? a.jsx(V, {
        sx: {
          px: 3
        },
        children: a.jsx(St, {
          sx: {
            pb: d ? 4 : 3
          },
          size: "small",
          min: y,
          max: f,
          marks: [
            {
              value: y,
              label: String(y)
            },
            {
              value: f,
              label: String(f)
            }
          ],
          valueLabelDisplay: "auto",
          value: p,
          onChange: S
        })
      }) : null;
    }, [
      w,
      c,
      p,
      S
    ]), I = n.useMemo(() => !e || !Object.keys(e).length ? null : a.jsx(lt, {
      children: Object.entries(e).map(([l, d]) => a.jsx(zt, {
        disablePadding: true,
        children: a.jsx($t, {
          onClick: m(l),
          children: a.jsx(Yt, {
            primaryTypographyProps: {
              variant: "body2"
            },
            primary: String(d)
          })
        })
      }, l))
    }), [
      e,
      m
    ]), j = n.useMemo(() => t.header || w.oidName || "Change Value", [
      t.header,
      w.oidName
    ]), g = n.useMemo(() => e && Object.keys(e).length > 0, [
      e
    ]);
    return a.jsxs(jt, {
      open: o,
      onClose: b,
      maxWidth: "xs",
      fullWidth: true,
      PaperProps: {
        sx: {
          bgcolor: t.backgroundColor,
          color: t.textColor
        }
      },
      children: [
        a.jsx(wt, {
          sx: {
            m: 0,
            p: 2
          },
          id: "customized-dialog-title",
          children: j
        }),
        a.jsx(dt, {
          "aria-label": "close",
          onClick: P,
          sx: (l) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: l.palette.grey[500]
          }),
          children: a.jsx(Ct, {})
        }),
        a.jsx(Pt, {
          sx: {
            overflow: "unset"
          },
          children: a.jsxs(kt, {
            divider: g && a.jsx(ut, {}),
            spacing: 0,
            component: ct,
            children: [
              x,
              I
            ]
          })
        })
      ]
    });
  };
  function Kt() {
    const e = n.useContext(tt), { widget: t, theme: o } = e, r = t.data.oidObject, { data: s, widgetStates: u, states: i } = mt("oid"), { value: c, updateValue: p } = et("oid"), [v, C] = n.useState(false), w = r == null ? void 0 : r.type, h = t.data.onlyStates, S = Lt(c, t, s), b = S != null ? String(S) : "", P = () => {
      const g = t.data.value1;
      h && i.length === 2 && t.data.statePushButton && g !== void 0 && setTimeout(() => p(g), 0);
    }, m = () => {
      const g = t.data.value2;
      h && i.length === 2 && t.data.statePushButton && g !== void 0 && setTimeout(() => p(g), 0);
    }, x = n.useCallback(() => {
      if (!h) {
        C(true);
        return;
      }
      switch (i.length) {
        case 1:
          t.data.value1 !== void 0 && p(t.data.value1);
          break;
        case 2:
          t.data.value1 !== void 0 && t.data.value2 !== void 0 && (!t.data.statePushButton && String(c) === String(t.data.value1) ? p(t.data.value2) : p(t.data.value1));
          break;
        default:
          C(true);
          break;
      }
    }, [
      c,
      h,
      i.length,
      t.data.statePushButton,
      t.data.value1,
      t.data.value2,
      p
    ]), I = a.jsx(Tt, {
      disabled: t.data.onlyDisplay,
      onClick: x,
      onMouseDown: P,
      onMouseUp: m,
      onMouseOut: m,
      onTouchStart: P,
      onTouchEnd: m,
      sx: {
        width: "100%",
        height: "100%",
        color: s.iconColor || s.textColor || "primary.main",
        "&:hover": {
          bgcolor: "transparent"
        }
      },
      children: a.jsxs(V, {
        sx: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: [
          !t.data.noIcon && s.icon && (() => {
            const g = s.icon, l = s.iconColor || o.palette.primary.main, d = s.forceColorMask, y = gt(g, l, d);
            return a.jsx(V, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                width: "100%",
                height: "100%"
              },
              children: a.jsx(Rt, {
                variant: "square",
                src: g || void 0,
                slotProps: {
                  img: {
                    style: {
                      objectFit: "contain",
                      ...y
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
          !t.data.noValue && a.jsx(V, {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              width: "100%",
              height: "100%"
            },
            children: a.jsx($, {
              component: V,
              variant: "body2",
              sx: {
                fontSize: s.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                background: X(s.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: X(s.textColor) ? "transparent" : s.textColor,
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
                __html: `<div style="text-align: left; display: inline-block;">${b || ""}</div>`
              }
            })
          })
        ]
      })
    }), j = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(w ?? "");
    return a.jsxs(a.Fragment, {
      children: [
        v && a.jsx(qt, {
          data: {
            sampleInterval: false,
            sampleIntervalValue: 200,
            delay: 100
          },
          widgetStates: u,
          open: v,
          closeHandler: () => C(false)
        }),
        a.jsxs(yt, {
          isValidType: j,
          data: s,
          oidValue: c,
          children: [
            a.jsx(xt, {
              data: s,
              widget: t
            }),
            a.jsx(V, {
              sx: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: I
            })
          ]
        })
      ]
    });
  }
  st = class extends pt {
    static getWidgetInfo() {
      return {
        id: "tplStateCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visSetColor: "#0C0A43",
        visName: "StateCollectionWidget",
        visWidgetLabel: "state_collection_widget",
        visOrder: 4,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...J()
            ]
          },
          {
            name: "button",
            label: "group_button",
            fields: [
              ...ft([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...ht(),
              ...bt()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...J({
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
      return st.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, o) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const o = {
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, vt(this.wrapContent(a.jsx(Kt, {})), o);
    }
  };
});
export {
  __tla,
  st as default
};
