import { g as z, a as E, u as F, L, b as ae, c as Z, j as s, s as $, d as R, e as W, B as ie, r as re, m as ee, f as N, i as le, h as q, k as U, T as M, t as K, l as V, n as ce, I as de, P as pe, G as ue, __tla as __tla_0 } from "./usePopoverPositioning-CofXyWxH.js";
import { C as X, a as te, D as me, u as ge, g as ye, b as J, c as xe, d as fe, e as Q, f as ve, w as he, __tla as __tla_1 } from "./useData-BoTWPt4P.js";
import { u as oe, d as be, __tla as __tla_2 } from "./useValueState-BWd4R4y3.js";
import { v as a, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Ce, __tla as __tla_4 } from "./Close-9YkifltS.js";
import { S as Se, __tla as __tla_5 } from "./Slider-enbrXPpK.js";
import { g as Ie, l as G, __tla as __tla_6 } from "./listItemTextClasses-X-Bzt_WG.js";
import { D as je, a as we, b as ke, __tla as __tla_7 } from "./DialogTitle-D-0sI30G.js";
import { S as Pe, __tla as __tla_8 } from "./Stack-BR9CtSSf.js";
import { u as Le, __tla as __tla_9 } from "./useHtmlValue-3ISCcM5X.js";
import { B as Oe, __tla as __tla_10 } from "./Button-B6dAQNhX.js";
import { A as Te, __tla as __tla_11 } from "./Avatar-CajCyz2d.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let ne;
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
  })()
]).then(async () => {
  function Ve(t) {
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
  function Be(t) {
    return z("MuiListItemButton", t);
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
  ]), Re = (t, e) => {
    const { ownerState: o } = t;
    return [
      e.root,
      o.dense && e.dense,
      o.alignItems === "flex-start" && e.alignItemsFlexStart,
      o.divider && e.divider,
      !o.disableGutters && e.gutters
    ];
  }, _e = (t) => {
    const { alignItems: e, classes: o, dense: r, disabled: n, disableGutters: u, divider: i, selected: d } = t, v = W({
      root: [
        "root",
        r && "dense",
        !u && "gutters",
        i && "divider",
        n && "disabled",
        e === "flex-start" && "alignItemsFlexStart",
        d && "selected"
      ]
    }, Be, o);
    return {
      ...o,
      ...v
    };
  }, Ae = $(ie, {
    shouldForwardProp: (t) => re(t) || t === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: Re
  })(ee(({ theme: t }) => ({
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
    [`&.${B.selected}`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : N(t.palette.primary.main, t.palette.action.selectedOpacity),
      [`&.${B.focusVisible}`]: {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : N(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
      }
    },
    [`&.${B.selected}:hover`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : N(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : N(t.palette.primary.main, t.palette.action.selectedOpacity)
      }
    },
    [`&.${B.focusVisible}`]: {
      backgroundColor: (t.vars || t).palette.action.focus
    },
    [`&.${B.disabled}`]: {
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
  }))), Me = a.forwardRef(function(e, o) {
    const r = F({
      props: e,
      name: "MuiListItemButton"
    }), { alignItems: n = "center", autoFocus: u = false, component: i = "div", children: d, dense: p = false, disableGutters: v = false, divider: C = false, focusVisibleClassName: w, selected: h = false, className: S, ...b } = r, k = a.useContext(L), m = a.useMemo(() => ({
      dense: p || k.dense || false,
      alignItems: n,
      disableGutters: v
    }), [
      n,
      k.dense,
      p,
      v
    ]), x = a.useRef(null);
    ae(() => {
      u && x.current && x.current.focus();
    }, [
      u
    ]);
    const I = {
      ...r,
      alignItems: n,
      dense: m.dense,
      disableGutters: v,
      divider: C,
      selected: h
    }, j = _e(I), g = Z(x, o);
    return s.jsx(L.Provider, {
      value: m,
      children: s.jsx(Ae, {
        ref: g,
        href: b.href || b.to,
        component: (b.href || b.to) && i === "div" ? "button" : i,
        focusVisibleClassName: R(j.focusVisible, w),
        ownerState: I,
        className: R(j.root, S),
        ...b,
        classes: j,
        children: d
      })
    });
  });
  function $e(t) {
    return z("MuiListItemSecondaryAction", t);
  }
  E("MuiListItemSecondaryAction", [
    "root",
    "disableGutters"
  ]);
  const De = (t) => {
    const { disableGutters: e, classes: o } = t;
    return W({
      root: [
        "root",
        e && "disableGutters"
      ]
    }, $e, o);
  }, Ne = $("div", {
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
  }), se = a.forwardRef(function(e, o) {
    const r = F({
      props: e,
      name: "MuiListItemSecondaryAction"
    }), { className: n, ...u } = r, i = a.useContext(L), d = {
      ...r,
      disableGutters: i.disableGutters
    }, p = De(d);
    return s.jsx(Ne, {
      className: R(p.root, n),
      ownerState: d,
      ref: o,
      ...u
    });
  });
  se.muiName = "ListItemSecondaryAction";
  const Ge = (t, e) => {
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
  }, Fe = (t) => {
    const { alignItems: e, classes: o, dense: r, disableGutters: n, disablePadding: u, divider: i, hasSecondaryAction: d } = t;
    return W({
      root: [
        "root",
        r && "dense",
        !n && "gutters",
        !u && "padding",
        i && "divider",
        e === "flex-start" && "alignItemsFlexStart",
        d && "secondaryAction"
      ],
      container: [
        "container"
      ]
    }, Ve, o);
  }, We = $("div", {
    name: "MuiListItem",
    slot: "Root",
    overridesResolver: Ge
  })(ee(({ theme: t }) => ({
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
  }))), Ue = $("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (t, e) => e.container
  })({
    position: "relative"
  }), ze = a.forwardRef(function(e, o) {
    const r = F({
      props: e,
      name: "MuiListItem"
    }), { alignItems: n = "center", children: u, className: i, component: d, components: p = {}, componentsProps: v = {}, ContainerComponent: C = "li", ContainerProps: { className: w, ...h } = {}, dense: S = false, disableGutters: b = false, disablePadding: k = false, divider: m = false, secondaryAction: x, slotProps: I = {}, slots: j = {}, ...g } = r, l = a.useContext(L), c = a.useMemo(() => ({
      dense: S || l.dense || false,
      alignItems: n,
      disableGutters: b
    }), [
      n,
      l.dense,
      S,
      b
    ]), y = a.useRef(null), f = a.Children.toArray(u), P = f.length && le(f[f.length - 1], [
      "ListItemSecondaryAction"
    ]), O = {
      ...r,
      alignItems: n,
      dense: c.dense,
      disableGutters: b,
      disablePadding: k,
      divider: m,
      hasSecondaryAction: P
    }, H = Fe(O), Y = Z(y, o), D = j.root || p.Root || We, _ = I.root || v.root || {}, A = {
      className: R(H.root, _.className, i),
      ...g
    };
    let T = d || "li";
    return P ? (T = !A.component && !d ? "div" : T, C === "li" && (T === "li" ? T = "div" : A.component === "li" && (A.component = "div")), s.jsx(L.Provider, {
      value: c,
      children: s.jsxs(Ue, {
        as: C,
        className: R(H.container, w),
        ref: Y,
        ownerState: O,
        ...h,
        children: [
          s.jsx(D, {
            ..._,
            ...!q(D) && {
              as: T,
              ownerState: {
                ...O,
                ..._.ownerState
              }
            },
            ...A,
            children: f
          }),
          f.pop()
        ]
      })
    })) : s.jsx(L.Provider, {
      value: c,
      children: s.jsxs(D, {
        ..._,
        as: T,
        ref: Y,
        ...!q(D) && {
          ownerState: {
            ...O,
            ..._.ownerState
          }
        },
        ...A,
        children: [
          f,
          x && s.jsx(se, {
            children: x
          })
        ]
      })
    });
  }), Ee = (t) => {
    const { classes: e, inset: o, primary: r, secondary: n, dense: u } = t;
    return W({
      root: [
        "root",
        o && "inset",
        u && "dense",
        r && n && "multiline"
      ],
      primary: [
        "primary"
      ],
      secondary: [
        "secondary"
      ]
    }, Ie, e);
  }, He = $("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        {
          [`& .${G.primary}`]: e.primary
        },
        {
          [`& .${G.secondary}`]: e.secondary
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
    [`.${K.root}:where(& .${G.primary})`]: {
      display: "block"
    },
    [`.${K.root}:where(& .${G.secondary})`]: {
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
  }), Ye = a.forwardRef(function(e, o) {
    const r = F({
      props: e,
      name: "MuiListItemText"
    }), { children: n, className: u, disableTypography: i = false, inset: d = false, primary: p, primaryTypographyProps: v, secondary: C, secondaryTypographyProps: w, slots: h = {}, slotProps: S = {}, ...b } = r, { dense: k } = a.useContext(L);
    let m = p ?? n, x = C;
    const I = {
      ...r,
      disableTypography: i,
      inset: d,
      primary: !!m,
      secondary: !!x,
      dense: k
    }, j = Ee(I), g = {
      slots: h,
      slotProps: {
        primary: v,
        secondary: w,
        ...S
      }
    }, [l, c] = U("root", {
      className: R(j.root, u),
      elementType: He,
      externalForwardedProps: {
        ...g,
        ...b
      },
      ownerState: I,
      ref: o
    }), [y, f] = U("primary", {
      className: j.primary,
      elementType: M,
      externalForwardedProps: g,
      ownerState: I
    }), [P, O] = U("secondary", {
      className: j.secondary,
      elementType: M,
      externalForwardedProps: g,
      ownerState: I
    });
    return m != null && m.type !== M && !i && (m = s.jsx(y, {
      variant: k ? "body2" : "body1",
      component: (f == null ? void 0 : f.variant) ? void 0 : "span",
      ...f,
      children: m
    })), x != null && x.type !== M && !i && (x = s.jsx(P, {
      variant: "body2",
      color: "textSecondary",
      ...O,
      children: x
    })), s.jsxs(l, {
      ...c,
      children: [
        m,
        x
      ]
    });
  }), qe = () => [
    {
      type: "custom",
      component: () => s.jsx(X, {})
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
      component: () => s.jsx(X, {}),
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
  ], Ke = ({ widgetStates: t, data: e, open: o, closeHandler: r }) => {
    const { widget: n, getPropertyValue: u } = a.useContext(te), i = n.data.oidObject, d = n.data.onlyStates, [p, v] = a.useState(() => {
      const l = u("oid");
      return typeof l == "number" ? l : 0;
    }), { updateValue: C } = oe("oid"), w = a.useMemo(() => {
      const l = i == null ? void 0 : i.commonStates, c = i == null ? void 0 : i.type, y = i == null ? void 0 : i.name, f = i == null ? void 0 : i.minValue, P = i == null ? void 0 : i.maxValue;
      return {
        commonStates: l,
        oidType: c,
        oidName: y,
        minValue: f,
        maxValue: P
      };
    }, [
      i
    ]), h = a.useCallback((l) => {
      C(l);
    }, [
      C
    ]), S = a.useCallback((l, c) => {
      const y = Array.isArray(c) ? c[0] : c;
      v(y), h(y);
    }, [
      h
    ]), b = a.useCallback((l, c) => {
      (c === "backdropClick" || c === "escapeKeyDown") && r();
    }, [
      r
    ]), k = a.useCallback(() => {
      r();
    }, [
      r
    ]), m = a.useCallback((l) => (c) => {
      c.preventDefault();
      const y = Number(l);
      isNaN(y) || v(y), h(l);
    }, [
      h
    ]), x = a.useMemo(() => {
      const { oidType: l, commonStates: c, minValue: y, maxValue: f } = w;
      return l === "number" && !d && y !== void 0 && f !== void 0 ? s.jsx(V, {
        sx: {
          px: 3
        },
        children: s.jsx(Se, {
          sx: {
            pb: c ? 4 : 3
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
      d,
      p,
      S
    ]), I = a.useMemo(() => !t || !Object.keys(t).length ? null : s.jsx(ce, {
      children: Object.entries(t).map(([l, c]) => s.jsx(ze, {
        disablePadding: true,
        children: s.jsx(Me, {
          onClick: m(l),
          children: s.jsx(Ye, {
            primaryTypographyProps: {
              variant: "body2"
            },
            primary: String(c)
          })
        })
      }, l))
    }), [
      t,
      m
    ]), j = a.useMemo(() => e.header || w.oidName || "Change Value", [
      e.header,
      w.oidName
    ]), g = a.useMemo(() => t && Object.keys(t).length > 0, [
      t
    ]);
    return s.jsxs(je, {
      open: o,
      onClose: b,
      maxWidth: "xs",
      fullWidth: true,
      PaperProps: {
        sx: {
          bgcolor: e.backgroundColor,
          color: e.textColor
        }
      },
      children: [
        s.jsx(we, {
          sx: {
            m: 0,
            p: 2
          },
          id: "customized-dialog-title",
          children: j
        }),
        s.jsx(de, {
          "aria-label": "close",
          onClick: k,
          sx: (l) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: l.palette.grey[500]
          }),
          children: s.jsx(Ce, {})
        }),
        s.jsx(ke, {
          sx: {
            overflow: "unset"
          },
          children: s.jsxs(Pe, {
            divider: g && s.jsx(me, {}),
            spacing: 0,
            component: pe,
            children: [
              x,
              I
            ]
          })
        })
      ]
    });
  };
  function Xe() {
    const t = a.useContext(te), { widget: e, theme: o } = t, r = e.data.oidObject, { data: n, widgetStates: u, states: i } = ge("oid"), { value: d, updateValue: p } = oe("oid"), [v, C] = a.useState(false), w = r == null ? void 0 : r.type, h = e.data.onlyStates, S = Le(d, e, n), b = S != null ? String(S) : "", k = () => {
      const g = e.data.value1;
      h && i.length === 2 && e.data.statePushButton && g !== void 0 && setTimeout(() => p(g), 0);
    }, m = () => {
      const g = e.data.value2;
      h && i.length === 2 && e.data.statePushButton && g !== void 0 && setTimeout(() => p(g), 0);
    }, x = a.useCallback(() => {
      if (!h) {
        C(true);
        return;
      }
      switch (i.length) {
        case 1:
          e.data.value1 !== void 0 && p(e.data.value1);
          break;
        case 2:
          e.data.value1 !== void 0 && e.data.value2 !== void 0 && (!e.data.statePushButton && String(d) === String(e.data.value1) ? p(e.data.value2) : p(e.data.value1));
          break;
        default:
          C(true);
          break;
      }
    }, [
      d,
      h,
      i.length,
      e.data.statePushButton,
      e.data.value1,
      e.data.value2,
      p
    ]), I = s.jsx(Oe, {
      disabled: e.data.onlyDisplay,
      onClick: x,
      onMouseDown: k,
      onMouseUp: m,
      onMouseOut: m,
      onTouchStart: k,
      onTouchEnd: m,
      sx: {
        width: "100%",
        height: "100%",
        color: n.iconColor || n.textColor || "primary.main",
        "&:hover": {
          bgcolor: "transparent"
        }
      },
      children: s.jsxs(V, {
        sx: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: [
          !e.data.noIcon && n.icon && (() => {
            const g = n.icon, l = n.iconColor || o.palette.primary.main, c = n.forceColorMask, y = ye(g, l, c);
            return s.jsx(V, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                width: "100%",
                height: "100%"
              },
              children: s.jsx(Te, {
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
                  width: n.iconSizeOnly,
                  height: n.iconSizeOnly,
                  left: `calc(0px + ${n.iconXOffset})`,
                  top: `calc(0px - ${n.iconYOffset})`
                }
              })
            });
          })(),
          !e.data.noValue && s.jsx(V, {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              width: "100%",
              height: "100%"
            },
            children: s.jsx(M, {
              component: V,
              variant: "body2",
              sx: {
                fontSize: n.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                background: J(n.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: J(n.textColor) ? "transparent" : n.textColor,
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
    return s.jsxs(s.Fragment, {
      children: [
        v && s.jsx(Ke, {
          data: {
            sampleInterval: false,
            sampleIntervalValue: 200,
            delay: 100
          },
          widgetStates: u,
          open: v,
          closeHandler: () => C(false)
        }),
        s.jsxs(xe, {
          isValidType: j,
          data: n,
          oidValue: d,
          children: [
            s.jsx(fe, {
              data: n,
              widget: e
            }),
            s.jsx(V, {
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
  ne = class extends ue {
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
              ...Q()
            ]
          },
          {
            name: "button",
            label: "group_button",
            fields: [
              ...ve([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...be(),
              ...qe()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Q({
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
      return ne.getWidgetInfo();
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, he(this.wrapContent(s.jsx(Xe, {})), o);
    }
  };
});
export {
  __tla,
  ne as default
};
