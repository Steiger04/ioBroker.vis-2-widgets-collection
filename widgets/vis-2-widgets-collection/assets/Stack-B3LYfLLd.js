import { aD as R, az as V, aE as _, aF as D, j as b, d as F, aG as v, aH as u, aI as M, aJ as B, aK as E, e as G, g as N, aL as O, aM as h, s as U, u as $, __tla as __tla_0 } from "./useData-B0iH0GQ1.js";
import { v as p, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
let Z, L;
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
  const A = R();
  L = function(e) {
    const { theme: s, name: o, props: t } = e;
    return !s || !s.components || !s.components[o] || !s.components[o].defaultProps ? t : V(s.components[o].defaultProps, t);
  };
  function z({ props: e, name: s, defaultTheme: o, themeId: t }) {
    let n = _(o);
    return t && (n = n[t] || n), L({
      theme: n,
      name: s,
      props: e
    });
  }
  const H = O(), I = A("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, s) => s.root
  });
  function J(e) {
    return z({
      props: e,
      name: "MuiStack",
      defaultTheme: H
    });
  }
  function K(e, s) {
    const o = p.Children.toArray(e).filter(Boolean);
    return o.reduce((t, n, a) => (t.push(n), a < o.length - 1 && t.push(p.cloneElement(s, {
      key: `separator-${a}`
    })), t), []);
  }
  const W = (e) => ({
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  })[e], q = ({ ownerState: e, theme: s }) => {
    let o = {
      display: "flex",
      flexDirection: "column",
      ...v({
        theme: s
      }, u({
        values: e.direction,
        breakpoints: s.breakpoints.values
      }), (t) => ({
        flexDirection: t
      }))
    };
    if (e.spacing) {
      const t = M(s), n = Object.keys(s.breakpoints.values).reduce((r, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (r[c] = true), r), {}), a = u({
        values: e.direction,
        base: n
      }), m = u({
        values: e.spacing,
        base: n
      });
      typeof a == "object" && Object.keys(a).forEach((r, c, i) => {
        if (!a[r]) {
          const l = c > 0 ? a[i[c - 1]] : "column";
          a[r] = l;
        }
      }), o = B(o, v({
        theme: s
      }, m, (r, c) => e.useFlexGap ? {
        gap: h(t, r)
      } : {
        "& > :not(style):not(style)": {
          margin: 0
        },
        "& > :not(style) ~ :not(style)": {
          [`margin${W(c ? a[c] : e.direction)}`]: h(t, r)
        }
      }));
    }
    return o = E(s.breakpoints, o), o;
  };
  function Q(e = {}) {
    const { createStyledComponent: s = I, useThemeProps: o = J, componentName: t = "MuiStack" } = e, n = () => G({
      root: [
        "root"
      ]
    }, (r) => N(t, r), {}), a = s(q);
    return p.forwardRef(function(r, c) {
      const i = o(r), f = D(i), { component: l = "div", direction: k = "column", spacing: P = 0, divider: y, children: g, className: S, useFlexGap: x = false, ...C } = f, j = {
        direction: k,
        spacing: P,
        useFlexGap: x
      }, T = n();
      return b.jsx(a, {
        as: l,
        ownerState: j,
        ref: c,
        className: F(T.root, S),
        ...C,
        children: y ? K(g, y) : g
      });
    });
  }
  Z = Q({
    createStyledComponent: U("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, s) => s.root
    }),
    useThemeProps: (e) => $({
      props: e,
      name: "MuiStack"
    })
  });
});
export {
  Z as S,
  __tla,
  L as g
};
