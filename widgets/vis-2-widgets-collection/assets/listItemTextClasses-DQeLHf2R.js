import { v as n, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { g as u, a as p, u as b, j as c, s as f, d as C, e as v, __tla as __tla_1 } from "./commonFields-Dc3dYGx-.js";
let y, S, U, j;
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
  y = n.createContext({});
  function _(s) {
    return u("MuiList", s);
  }
  p("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let M, P;
  M = (s) => {
    const { classes: e, disablePadding: t, dense: a, subheader: o } = s;
    return v({
      root: [
        "root",
        !t && "padding",
        a && "dense",
        o && "subheader"
      ]
    }, _, e);
  };
  P = f("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (s, e) => {
      const { ownerState: t } = s;
      return [
        e.root,
        !t.disablePadding && e.padding,
        t.dense && e.dense,
        t.subheader && e.subheader
      ];
    }
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: s }) => !s.disablePadding,
        style: {
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      {
        props: ({ ownerState: s }) => s.subheader,
        style: {
          paddingTop: 0
        }
      }
    ]
  });
  S = n.forwardRef(function(e, t) {
    const a = b({
      props: e,
      name: "MuiList"
    }), { children: o, className: r, component: d = "ul", dense: i = false, disablePadding: m = false, subheader: g, ...h } = a, x = n.useMemo(() => ({
      dense: i
    }), [
      i
    ]), l = {
      ...a,
      component: d,
      dense: i,
      disablePadding: m
    }, L = M(l);
    return c.jsx(y.Provider, {
      value: x,
      children: c.jsxs(P, {
        as: d,
        className: C(L.root, r),
        ref: t,
        ownerState: l,
        ...h,
        children: [
          g,
          o
        ]
      })
    });
  });
  U = function(s) {
    return u("MuiListItemText", s);
  };
  j = p("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary"
  ]);
});
export {
  y as L,
  __tla,
  S as a,
  U as g,
  j as l
};
