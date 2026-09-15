import { v as a, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as C, f as h, u as w, aO as I, j as r, s as L, h as b, i as U, aF as O, U as V, as as N, p as W, __tla as __tla_1 } from "./tinycolor-CLG1zgRY.js";
let it, nt, q;
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
  })()
]).then(async () => {
  function Y(e) {
    return C("MuiListItem", e);
  }
  h("MuiListItem", [
    "root",
    "container",
    "dense",
    "alignItemsFlexStart",
    "divider",
    "gutters",
    "padding",
    "secondaryAction"
  ]);
  nt = function(e) {
    return C("MuiListItemButton", e);
  };
  q = h("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]);
  function J(e) {
    return C("MuiListItemSecondaryAction", e);
  }
  h("MuiListItemSecondaryAction", [
    "root",
    "disableGutters"
  ]);
  const K = (e) => {
    const { disableGutters: t, classes: s } = e;
    return U({
      root: [
        "root",
        t && "disableGutters"
      ]
    }, J, s);
  }, Q = L("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: s } = e;
      return [
        t.root,
        s.disableGutters && t.disableGutters
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
  }), _ = a.forwardRef(function(t, s) {
    const o = w({
      props: t,
      name: "MuiListItemSecondaryAction"
    }), { className: n, ...c } = o, p = a.useContext(I), i = {
      ...o,
      disableGutters: p.disableGutters
    }, g = K(i);
    return r.jsx(Q, {
      className: b(g.root, n),
      ownerState: i,
      ref: s,
      ...c
    });
  });
  _.muiName = "ListItemSecondaryAction";
  let X, Z, tt, et;
  X = (e, t) => {
    const { ownerState: s } = e;
    return [
      t.root,
      s.dense && t.dense,
      s.alignItems === "flex-start" && t.alignItemsFlexStart,
      s.divider && t.divider,
      !s.disableGutters && t.gutters,
      !s.disablePadding && t.padding,
      s.hasSecondaryAction && t.secondaryAction
    ];
  };
  Z = (e) => {
    const { alignItems: t, classes: s, dense: o, disableGutters: n, disablePadding: c, divider: p, hasSecondaryAction: i } = e;
    return U({
      root: [
        "root",
        o && "dense",
        !n && "gutters",
        !c && "padding",
        p && "divider",
        t === "flex-start" && "alignItemsFlexStart",
        i && "secondaryAction"
      ],
      container: [
        "container"
      ]
    }, Y, s);
  };
  tt = L("div", {
    name: "MuiListItem",
    slot: "Root",
    overridesResolver: X
  })(W(({ theme: e }) => ({
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
          [`& > .${q.root}`]: {
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
  })));
  et = L("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container
  })({
    position: "relative"
  });
  it = a.forwardRef(function(t, s) {
    const o = w({
      props: t,
      name: "MuiListItem"
    }), { alignItems: n = "center", children: c, className: p, component: i, components: g = {}, componentsProps: B = {}, ContainerComponent: S = "li", ContainerProps: { className: F, ...k } = {}, dense: A = false, disableGutters: x = false, disablePadding: D = false, divider: T = false, secondaryAction: R, slotProps: $ = {}, slots: E = {}, ...z } = o, P = a.useContext(I), y = a.useMemo(() => ({
      dense: A || P.dense || false,
      alignItems: n,
      disableGutters: x
    }), [
      n,
      P.dense,
      A,
      x
    ]), H = a.useRef(null), d = a.Children.toArray(c), M = d.length && O(d[d.length - 1], [
      "ListItemSecondaryAction"
    ]), f = {
      ...o,
      alignItems: n,
      dense: y.dense,
      disableGutters: x,
      disablePadding: D,
      divider: T,
      hasSecondaryAction: M
    }, G = Z(f), j = V(H, s), v = E.root || g.Root || tt, m = $.root || B.root || {}, u = {
      className: b(G.root, m.className, p),
      ...z
    };
    let l = i || "li";
    return M ? (l = !u.component && !i ? "div" : l, S === "li" && (l === "li" ? l = "div" : u.component === "li" && (u.component = "div")), r.jsx(I.Provider, {
      value: y,
      children: r.jsxs(et, {
        as: S,
        className: b(G.container, F),
        ref: j,
        ownerState: f,
        ...k,
        children: [
          r.jsx(v, {
            ...m,
            ...!N(v) && {
              as: l,
              ownerState: {
                ...f,
                ...m.ownerState
              }
            },
            ...u,
            children: d
          }),
          d.pop()
        ]
      })
    })) : r.jsx(I.Provider, {
      value: y,
      children: r.jsxs(v, {
        ...m,
        as: l,
        ref: j,
        ...!N(v) && {
          ownerState: {
            ...f,
            ...m.ownerState
          }
        },
        ...u,
        children: [
          d,
          R && r.jsx(_, {
            children: R
          })
        ]
      })
    });
  });
});
export {
  it as L,
  __tla,
  nt as g,
  q as l
};
