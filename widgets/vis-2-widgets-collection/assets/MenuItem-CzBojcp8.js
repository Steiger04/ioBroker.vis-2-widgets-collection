import { v as l, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { a as O, g as L, u as T, L as y, f as V, h as j, j as C, s as F, d as x, e as P, B as G, r as N, m as U, i as d, ax as $, __tla as __tla_1 } from "./useData-CoMv8b7s.js";
import { l as I, __tla as __tla_2 } from "./listItemTextClasses-CJ06hn_z.js";
let J;
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
  const M = O("MuiListItemIcon", [
    "root",
    "alignItemsFlexStart"
  ]);
  function D(e) {
    return L("MuiMenuItem", e);
  }
  let r, E, H, z;
  r = O("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]);
  E = (e, a) => {
    const { ownerState: t } = e;
    return [
      a.root,
      t.dense && a.dense,
      t.divider && a.divider,
      !t.disableGutters && a.gutters
    ];
  };
  H = (e) => {
    const { disabled: a, dense: t, divider: s, disableGutters: n, selected: c, classes: o } = e, i = P({
      root: [
        "root",
        t && "dense",
        a && "disabled",
        !n && "gutters",
        s && "divider",
        c && "selected"
      ]
    }, D, o);
    return {
      ...o,
      ...i
    };
  };
  z = F(G, {
    shouldForwardProp: (e) => N(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: E
  })(U(({ theme: e }) => ({
    ...e.typography.body1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    minHeight: 48,
    paddingTop: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: (e.vars || e).palette.action.hover,
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${r.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : d(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${r.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : d(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    },
    [`&.${r.selected}:hover`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : d(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : d(e.palette.primary.main, e.palette.action.selectedOpacity)
      }
    },
    [`&.${r.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${r.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    [`& + .${$.root}`]: {
      marginTop: e.spacing(1),
      marginBottom: e.spacing(1)
    },
    [`& + .${$.inset}`]: {
      marginLeft: 52
    },
    [`& .${I.root}`]: {
      marginTop: 0,
      marginBottom: 0
    },
    [`& .${I.inset}`]: {
      paddingLeft: 36
    },
    [`& .${M.root}`]: {
      minWidth: 36
    },
    variants: [
      {
        props: ({ ownerState: a }) => !a.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: a }) => a.divider,
        style: {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box"
        }
      },
      {
        props: ({ ownerState: a }) => !a.dense,
        style: {
          [e.breakpoints.up("sm")]: {
            minHeight: "auto"
          }
        }
      },
      {
        props: ({ ownerState: a }) => a.dense,
        style: {
          minHeight: 32,
          paddingTop: 4,
          paddingBottom: 4,
          ...e.typography.body2,
          [`& .${M.root} svg`]: {
            fontSize: "1.25rem"
          }
        }
      }
    ]
  })));
  J = l.forwardRef(function(a, t) {
    const s = T({
      props: a,
      name: "MuiMenuItem"
    }), { autoFocus: n = false, component: c = "li", dense: o = false, divider: g = false, disableGutters: i = false, focusVisibleClassName: k, role: R = "menuitem", tabIndex: v, className: S, ...B } = s, f = l.useContext(y), b = l.useMemo(() => ({
      dense: o || f.dense || false,
      disableGutters: i
    }), [
      f.dense,
      o,
      i
    ]), p = l.useRef(null);
    V(() => {
      n && p.current && p.current.focus();
    }, [
      n
    ]);
    const _ = {
      ...s,
      dense: b.dense,
      divider: g,
      disableGutters: i
    }, u = H(s), w = j(p, t);
    let m;
    return s.disabled || (m = v !== void 0 ? v : -1), C.jsx(y.Provider, {
      value: b,
      children: C.jsx(z, {
        ref: w,
        role: R,
        tabIndex: m,
        component: c,
        focusVisibleClassName: x(u.focusVisible, k),
        className: x(u.root, S),
        ...B,
        ownerState: _,
        classes: u
      })
    });
  });
});
export {
  J as M,
  __tla
};
