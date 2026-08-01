import { v as l, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { f as O, g as R, u as T, ax as y, R as V, Q as j, j as C, s as F, h as I, i as P, c as U, ao as G, p as N, a as c, aI as x, __tla as __tla_1 } from "./tinycolor-B_2EitDy.js";
import { l as $, __tla as __tla_2 } from "./listItemTextClasses-1JwjlcRg.js";
let J, A;
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
  A = function(e) {
    return R("MuiListItemIcon", e);
  };
  const M = O("MuiListItemIcon", [
    "root",
    "alignItemsFlexStart"
  ]);
  function D(e) {
    return R("MuiMenuItem", e);
  }
  let n, E, H, z;
  n = O("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]);
  E = (e, t) => {
    const { ownerState: a } = e;
    return [
      t.root,
      a.dense && t.dense,
      a.divider && t.divider,
      !a.disableGutters && t.gutters
    ];
  };
  H = (e) => {
    const { disabled: t, dense: a, divider: s, disableGutters: r, selected: d, classes: o } = e, i = P({
      root: [
        "root",
        a && "dense",
        t && "disabled",
        !r && "gutters",
        s && "divider",
        d && "selected"
      ]
    }, D, o);
    return {
      ...o,
      ...i
    };
  };
  z = F(U, {
    shouldForwardProp: (e) => G(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: E
  })(N(({ theme: e }) => ({
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
    [`&.${n.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : c(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${n.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : c(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    },
    [`&.${n.selected}:hover`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : c(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : c(e.palette.primary.main, e.palette.action.selectedOpacity)
      }
    },
    [`&.${n.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${n.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    [`& + .${x.root}`]: {
      marginTop: e.spacing(1),
      marginBottom: e.spacing(1)
    },
    [`& + .${x.inset}`]: {
      marginLeft: 52
    },
    [`& .${$.root}`]: {
      marginTop: 0,
      marginBottom: 0
    },
    [`& .${$.inset}`]: {
      paddingLeft: 36
    },
    [`& .${M.root}`]: {
      minWidth: 36
    },
    variants: [
      {
        props: ({ ownerState: t }) => !t.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
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
        props: ({ ownerState: t }) => !t.dense,
        style: {
          [e.breakpoints.up("sm")]: {
            minHeight: "auto"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.dense,
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
  J = l.forwardRef(function(t, a) {
    const s = T({
      props: t,
      name: "MuiMenuItem"
    }), { autoFocus: r = false, component: d = "li", dense: o = false, divider: g = false, disableGutters: i = false, focusVisibleClassName: k, role: S = "menuitem", tabIndex: v, className: _, ...w } = s, f = l.useContext(y), b = l.useMemo(() => ({
      dense: o || f.dense || false,
      disableGutters: i
    }), [
      f.dense,
      o,
      i
    ]), p = l.useRef(null);
    V(() => {
      r && p.current && p.current.focus();
    }, [
      r
    ]);
    const B = {
      ...s,
      dense: b.dense,
      divider: g,
      disableGutters: i
    }, u = H(s), L = j(p, a);
    let m;
    return s.disabled || (m = v !== void 0 ? v : -1), C.jsx(y.Provider, {
      value: b,
      children: C.jsx(z, {
        ref: L,
        role: S,
        tabIndex: m,
        component: d,
        focusVisibleClassName: I(u.focusVisible, k),
        className: I(u.root, _),
        ...w,
        ownerState: B,
        classes: u
      })
    });
  });
});
export {
  J as M,
  __tla,
  A as g
};
