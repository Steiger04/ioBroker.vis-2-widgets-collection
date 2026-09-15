import { ac as V, j as _, h as T, ad as v, ae as u, af as b, a9 as D, ag as B, i as F, g as M, ah as E, ai as h, s as G, u as N, __tla as __tla_0 } from "./tinycolor-CLG1zgRY.js";
import { v as p, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { s as O, __tla as __tla_2 } from "./styled-CQDMXjYA.js";
import { u as U, __tla as __tla_3 } from "./useThemeProps-BJ14EHU2.js";
let X;
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
  const $ = E(), A = O("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, s) => s.root
  });
  function I(e) {
    return U({
      props: e,
      name: "MuiStack",
      defaultTheme: $
    });
  }
  function L(e, s) {
    const n = p.Children.toArray(e).filter(Boolean);
    return n.reduce((a, c, t) => (a.push(c), t < n.length - 1 && a.push(p.cloneElement(s, {
      key: `separator-${t}`
    })), a), []);
  }
  const W = (e) => ({
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  })[e], q = ({ ownerState: e, theme: s }) => {
    let n = {
      display: "flex",
      flexDirection: "column",
      ...v({
        theme: s
      }, u({
        values: e.direction,
        breakpoints: s.breakpoints.values
      }), (a) => ({
        flexDirection: a
      }))
    };
    if (e.spacing) {
      const a = b(s), c = Object.keys(s.breakpoints.values).reduce((o, r) => ((typeof e.spacing == "object" && e.spacing[r] != null || typeof e.direction == "object" && e.direction[r] != null) && (o[r] = true), o), {}), t = u({
        values: e.direction,
        base: c
      }), d = u({
        values: e.spacing,
        base: c
      });
      typeof t == "object" && Object.keys(t).forEach((o, r, i) => {
        if (!t[o]) {
          const l = r > 0 ? t[i[r - 1]] : "column";
          t[o] = l;
        }
      }), n = D(n, v({
        theme: s
      }, d, (o, r) => e.useFlexGap ? {
        gap: h(a, o)
      } : {
        "& > :not(style):not(style)": {
          margin: 0
        },
        "& > :not(style) ~ :not(style)": {
          [`margin${W(r ? t[r] : e.direction)}`]: h(a, o)
        }
      }));
    }
    return n = B(s.breakpoints, n), n;
  };
  function z(e = {}) {
    const { createStyledComponent: s = A, useThemeProps: n = I, componentName: a = "MuiStack" } = e, c = () => F({
      root: [
        "root"
      ]
    }, (o) => M(a, o), {}), t = s(q);
    return p.forwardRef(function(o, r) {
      const i = n(o), f = V(i), { component: l = "div", direction: k = "column", spacing: S = 0, divider: y, children: g, className: x, useFlexGap: C = false, ...j } = f, P = {
        direction: k,
        spacing: S,
        useFlexGap: C
      }, R = c();
      return _.jsx(t, {
        as: l,
        ownerState: P,
        ref: r,
        className: T(R.root, x),
        ...j,
        children: y ? L(g, y) : g
      });
    });
  }
  X = z({
    createStyledComponent: G("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, s) => s.root
    }),
    useThemeProps: (e) => N({
      props: e,
      name: "MuiStack"
    })
  });
});
export {
  X as S,
  __tla
};
