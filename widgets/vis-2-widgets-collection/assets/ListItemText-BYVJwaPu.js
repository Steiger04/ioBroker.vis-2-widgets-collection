import { v as d, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as E, f as W, u as U, ax as I, R as K, Q as Y, j as c, s as M, h as P, i as _, c as Z, ao as tt, p as q, a as k, am as et, X as Q, n as D, T as O, ay as X, __tla as __tla_1 } from "./tinycolor-B_2EitDy.js";
import { g as st, l as F, __tla as __tla_2 } from "./listItemTextClasses-1JwjlcRg.js";
let Ct, It, St;
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
  })()
]).then(async () => {
  function ot(t) {
    return E("MuiListItem", t);
  }
  W("MuiListItem", [
    "root",
    "container",
    "dense",
    "alignItemsFlexStart",
    "divider",
    "gutters",
    "padding",
    "secondaryAction"
  ]);
  function at(t) {
    return E("MuiListItemButton", t);
  }
  let R, nt, rt, it;
  R = W("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]);
  nt = (t, e) => {
    const { ownerState: s } = t;
    return [
      e.root,
      s.dense && e.dense,
      s.alignItems === "flex-start" && e.alignItemsFlexStart,
      s.divider && e.divider,
      !s.disableGutters && e.gutters
    ];
  };
  rt = (t) => {
    const { alignItems: e, classes: s, dense: o, disabled: a, disableGutters: r, divider: n, selected: i } = t, y = _({
      root: [
        "root",
        o && "dense",
        !r && "gutters",
        n && "divider",
        a && "disabled",
        e === "flex-start" && "alignItemsFlexStart",
        i && "selected"
      ]
    }, at, s);
    return {
      ...s,
      ...y
    };
  };
  it = M(Z, {
    shouldForwardProp: (t) => tt(t) || t === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: nt
  })(q(({ theme: t }) => ({
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
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : k(t.palette.primary.main, t.palette.action.selectedOpacity),
      [`&.${R.focusVisible}`]: {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : k(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
      }
    },
    [`&.${R.selected}:hover`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : k(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : k(t.palette.primary.main, t.palette.action.selectedOpacity)
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
  })));
  It = d.forwardRef(function(e, s) {
    const o = U({
      props: e,
      name: "MuiListItemButton"
    }), { alignItems: a = "center", autoFocus: r = false, component: n = "div", children: i, dense: p = false, disableGutters: y = false, divider: C = false, focusVisibleClassName: $, selected: A = false, className: S, ...u } = o, b = d.useContext(I), m = d.useMemo(() => ({
      dense: p || b.dense || false,
      alignItems: a,
      disableGutters: y
    }), [
      a,
      b.dense,
      p,
      y
    ]), l = d.useRef(null);
    K(() => {
      r && l.current && l.current.focus();
    }, [
      r
    ]);
    const g = {
      ...o,
      alignItems: a,
      dense: m.dense,
      disableGutters: y,
      divider: C,
      selected: A
    }, f = rt(g), x = Y(l, s);
    return c.jsx(I.Provider, {
      value: m,
      children: c.jsx(it, {
        ref: x,
        href: u.href || u.to,
        component: (u.href || u.to) && n === "div" ? "button" : n,
        focusVisibleClassName: P(f.focusVisible, $),
        ownerState: g,
        className: P(f.root, S),
        ...u,
        classes: f,
        children: i
      })
    });
  });
  function lt(t) {
    return E("MuiListItemSecondaryAction", t);
  }
  W("MuiListItemSecondaryAction", [
    "root",
    "disableGutters"
  ]);
  const dt = (t) => {
    const { disableGutters: e, classes: s } = t;
    return _({
      root: [
        "root",
        e && "disableGutters"
      ]
    }, lt, s);
  }, ct = M("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: s } = t;
      return [
        e.root,
        s.disableGutters && e.disableGutters
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
  }), J = d.forwardRef(function(e, s) {
    const o = U({
      props: e,
      name: "MuiListItemSecondaryAction"
    }), { className: a, ...r } = o, n = d.useContext(I), i = {
      ...o,
      disableGutters: n.disableGutters
    }, p = dt(i);
    return c.jsx(ct, {
      className: P(p.root, a),
      ownerState: i,
      ref: s,
      ...r
    });
  });
  J.muiName = "ListItemSecondaryAction";
  let pt, ut, mt, yt, gt, ft;
  pt = (t, e) => {
    const { ownerState: s } = t;
    return [
      e.root,
      s.dense && e.dense,
      s.alignItems === "flex-start" && e.alignItemsFlexStart,
      s.divider && e.divider,
      !s.disableGutters && e.gutters,
      !s.disablePadding && e.padding,
      s.hasSecondaryAction && e.secondaryAction
    ];
  };
  ut = (t) => {
    const { alignItems: e, classes: s, dense: o, disableGutters: a, disablePadding: r, divider: n, hasSecondaryAction: i } = t;
    return _({
      root: [
        "root",
        o && "dense",
        !a && "gutters",
        !r && "padding",
        n && "divider",
        e === "flex-start" && "alignItemsFlexStart",
        i && "secondaryAction"
      ],
      container: [
        "container"
      ]
    }, ot, s);
  };
  mt = M("div", {
    name: "MuiListItem",
    slot: "Root",
    overridesResolver: pt
  })(q(({ theme: t }) => ({
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
  })));
  yt = M("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (t, e) => e.container
  })({
    position: "relative"
  });
  Ct = d.forwardRef(function(e, s) {
    const o = U({
      props: e,
      name: "MuiListItem"
    }), { alignItems: a = "center", children: r, className: n, component: i, components: p = {}, componentsProps: y = {}, ContainerComponent: C = "li", ContainerProps: { className: $, ...A } = {}, dense: S = false, disableGutters: u = false, disablePadding: b = false, divider: m = false, secondaryAction: l, slotProps: g = {}, slots: f = {}, ...x } = o, G = d.useContext(I), T = d.useMemo(() => ({
      dense: S || G.dense || false,
      alignItems: a,
      disableGutters: u
    }), [
      a,
      G.dense,
      S,
      u
    ]), V = d.useRef(null), v = d.Children.toArray(r), N = v.length && et(v[v.length - 1], [
      "ListItemSecondaryAction"
    ]), L = {
      ...o,
      alignItems: a,
      dense: T.dense,
      disableGutters: u,
      disablePadding: b,
      divider: m,
      hasSecondaryAction: N
    }, z = ut(L), H = Y(V, s), j = f.root || p.Root || mt, w = g.root || y.root || {}, B = {
      className: P(z.root, w.className, n),
      ...x
    };
    let h = i || "li";
    return N ? (h = !B.component && !i ? "div" : h, C === "li" && (h === "li" ? h = "div" : B.component === "li" && (B.component = "div")), c.jsx(I.Provider, {
      value: T,
      children: c.jsxs(yt, {
        as: C,
        className: P(z.container, $),
        ref: H,
        ownerState: L,
        ...A,
        children: [
          c.jsx(j, {
            ...w,
            ...!Q(j) && {
              as: h,
              ownerState: {
                ...L,
                ...w.ownerState
              }
            },
            ...B,
            children: v
          }),
          v.pop()
        ]
      })
    })) : c.jsx(I.Provider, {
      value: T,
      children: c.jsxs(j, {
        ...w,
        as: h,
        ref: H,
        ...!Q(j) && {
          ownerState: {
            ...L,
            ...w.ownerState
          }
        },
        ...B,
        children: [
          v,
          l && c.jsx(J, {
            children: l
          })
        ]
      })
    });
  });
  gt = (t) => {
    const { classes: e, inset: s, primary: o, secondary: a, dense: r } = t;
    return _({
      root: [
        "root",
        s && "inset",
        r && "dense",
        o && a && "multiline"
      ],
      primary: [
        "primary"
      ],
      secondary: [
        "secondary"
      ]
    }, st, e);
  };
  ft = M("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: s } = t;
      return [
        {
          [`& .${F.primary}`]: e.primary
        },
        {
          [`& .${F.secondary}`]: e.secondary
        },
        e.root,
        s.inset && e.inset,
        s.primary && s.secondary && e.multiline,
        s.dense && e.dense
      ];
    }
  })({
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${X.root}:where(& .${F.primary})`]: {
      display: "block"
    },
    [`.${X.root}:where(& .${F.secondary})`]: {
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
  });
  St = d.forwardRef(function(e, s) {
    const o = U({
      props: e,
      name: "MuiListItemText"
    }), { children: a, className: r, disableTypography: n = false, inset: i = false, primary: p, primaryTypographyProps: y, secondary: C, secondaryTypographyProps: $, slots: A = {}, slotProps: S = {}, ...u } = o, { dense: b } = d.useContext(I);
    let m = p ?? a, l = C;
    const g = {
      ...o,
      disableTypography: n,
      inset: i,
      primary: !!m,
      secondary: !!l,
      dense: b
    }, f = gt(g), x = {
      slots: A,
      slotProps: {
        primary: y,
        secondary: $,
        ...S
      }
    }, [G, T] = D("root", {
      className: P(f.root, r),
      elementType: ft,
      externalForwardedProps: {
        ...x,
        ...u
      },
      ownerState: g,
      ref: s
    }), [V, v] = D("primary", {
      className: f.primary,
      elementType: O,
      externalForwardedProps: x,
      ownerState: g
    }), [N, L] = D("secondary", {
      className: f.secondary,
      elementType: O,
      externalForwardedProps: x,
      ownerState: g
    });
    return m != null && m.type !== O && !n && (m = c.jsx(V, {
      variant: b ? "body2" : "body1",
      component: (v == null ? void 0 : v.variant) ? void 0 : "span",
      ...v,
      children: m
    })), l != null && l.type !== O && !n && (l = c.jsx(N, {
      variant: "body2",
      color: "textSecondary",
      ...L,
      children: l
    })), c.jsxs(G, {
      ...T,
      children: [
        m,
        l
      ]
    });
  });
});
export {
  Ct as L,
  __tla,
  It as a,
  St as b
};
