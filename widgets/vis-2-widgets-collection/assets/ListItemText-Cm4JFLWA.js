import { v as m, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { u as h, aO as B, V as U, U as D, j as b, s as j, h as O, i as F, c as E, aH as W, p as z, a as C, n as R, T as I, aP as w, __tla as __tla_1 } from "./tinycolor-CLG1zgRY.js";
import { g as A, l as x, __tla as __tla_2 } from "./ListItem-BwMEp5il.js";
import { g as H, l as $, __tla as __tla_3 } from "./listItemTextClasses-nVrLWyOL.js";
let st, at;
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
  })()
]).then(async () => {
  let q, J, K, Q, X;
  q = (t, e) => {
    const { ownerState: s } = t;
    return [
      e.root,
      s.dense && e.dense,
      s.alignItems === "flex-start" && e.alignItemsFlexStart,
      s.divider && e.divider,
      !s.disableGutters && e.gutters
    ];
  };
  J = (t) => {
    const { alignItems: e, classes: s, dense: o, disabled: r, disableGutters: l, divider: n, selected: f } = t, c = F({
      root: [
        "root",
        o && "dense",
        !l && "gutters",
        n && "divider",
        r && "disabled",
        e === "flex-start" && "alignItemsFlexStart",
        f && "selected"
      ]
    }, A, s);
    return {
      ...s,
      ...c
    };
  };
  K = j(E, {
    shouldForwardProp: (t) => W(t) || t === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: q
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
    [`&.${x.selected}`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : C(t.palette.primary.main, t.palette.action.selectedOpacity),
      [`&.${x.focusVisible}`]: {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : C(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
      }
    },
    [`&.${x.selected}:hover`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : C(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : C(t.palette.primary.main, t.palette.action.selectedOpacity)
      }
    },
    [`&.${x.focusVisible}`]: {
      backgroundColor: (t.vars || t).palette.action.focus
    },
    [`&.${x.disabled}`]: {
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
  st = m.forwardRef(function(e, s) {
    const o = h({
      props: e,
      name: "MuiListItemButton"
    }), { alignItems: r = "center", autoFocus: l = false, component: n = "div", children: f, dense: u = false, disableGutters: c = false, divider: T = false, focusVisibleClassName: S, selected: P = false, className: L, ...d } = o, v = m.useContext(B), i = m.useMemo(() => ({
      dense: u || v.dense || false,
      alignItems: r,
      disableGutters: c
    }), [
      r,
      v.dense,
      u,
      c
    ]), a = m.useRef(null);
    U(() => {
      l && a.current && a.current.focus();
    }, [
      l
    ]);
    const p = {
      ...o,
      alignItems: r,
      dense: i.dense,
      disableGutters: c,
      divider: T,
      selected: P
    }, y = J(p), g = D(a, s);
    return b.jsx(B.Provider, {
      value: i,
      children: b.jsx(K, {
        ref: g,
        href: d.href || d.to,
        component: (d.href || d.to) && n === "div" ? "button" : n,
        focusVisibleClassName: O(y.focusVisible, S),
        ownerState: p,
        className: O(y.root, L),
        ...d,
        classes: y,
        children: f
      })
    });
  });
  Q = (t) => {
    const { classes: e, inset: s, primary: o, secondary: r, dense: l } = t;
    return F({
      root: [
        "root",
        s && "inset",
        l && "dense",
        o && r && "multiline"
      ],
      primary: [
        "primary"
      ],
      secondary: [
        "secondary"
      ]
    }, H, e);
  };
  X = j("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: s } = t;
      return [
        {
          [`& .${$.primary}`]: e.primary
        },
        {
          [`& .${$.secondary}`]: e.secondary
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
    [`.${w.root}:where(& .${$.primary})`]: {
      display: "block"
    },
    [`.${w.root}:where(& .${$.secondary})`]: {
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
  at = m.forwardRef(function(e, s) {
    const o = h({
      props: e,
      name: "MuiListItemText"
    }), { children: r, className: l, disableTypography: n = false, inset: f = false, primary: u, primaryTypographyProps: c, secondary: T, secondaryTypographyProps: S, slots: P = {}, slotProps: L = {}, ...d } = o, { dense: v } = m.useContext(B);
    let i = u ?? r, a = T;
    const p = {
      ...o,
      disableTypography: n,
      inset: f,
      primary: !!i,
      secondary: !!a,
      dense: v
    }, y = Q(p), g = {
      slots: P,
      slotProps: {
        primary: c,
        secondary: S,
        ...L
      }
    }, [N, _] = R("root", {
      className: O(y.root, l),
      elementType: X,
      externalForwardedProps: {
        ...g,
        ...d
      },
      ownerState: p,
      ref: s
    }), [V, k] = R("primary", {
      className: y.primary,
      elementType: I,
      externalForwardedProps: g,
      ownerState: p
    }), [G, M] = R("secondary", {
      className: y.secondary,
      elementType: I,
      externalForwardedProps: g,
      ownerState: p
    });
    return i != null && i.type !== I && !n && (i = b.jsx(V, {
      variant: v ? "body2" : "body1",
      component: (k == null ? void 0 : k.variant) ? void 0 : "span",
      ...k,
      children: i
    })), a != null && a.type !== I && !n && (a = b.jsx(G, {
      variant: "body2",
      color: "textSecondary",
      ...M,
      children: a
    })), b.jsxs(N, {
      ..._,
      children: [
        i,
        a
      ]
    });
  });
});
export {
  st as L,
  __tla,
  at as a
};
