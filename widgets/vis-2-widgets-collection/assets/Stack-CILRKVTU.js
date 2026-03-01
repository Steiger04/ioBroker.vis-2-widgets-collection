import { aB as R, ax as V, aC as _, aD as D, j as b, d as B, aE as v, aF as u, aG as F, aH as M, aI as E, e as G, g as N, aJ as O, aK as h, s as U, u as $, __tla as __tla_0 } from "./useData-CmfZa3AT.js";
import { v as p, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
let Z, H;
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
  H = function(e) {
    const { theme: s, name: o, props: t } = e;
    return !s || !s.components || !s.components[o] || !s.components[o].defaultProps ? t : V(s.components[o].defaultProps, t);
  };
  function I({ props: e, name: s, defaultTheme: o, themeId: t }) {
    let n = _(o);
    return t && (n = n[t] || n), H({
      theme: n,
      name: s,
      props: e
    });
  }
  const J = O(), K = A("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, s) => s.root
  });
  function L(e) {
    return I({
      props: e,
      name: "MuiStack",
      defaultTheme: J
    });
  }
  function W(e, s) {
    const o = p.Children.toArray(e).filter(Boolean);
    return o.reduce((t, n, a) => (t.push(n), a < o.length - 1 && t.push(p.cloneElement(s, {
      key: `separator-${a}`
    })), t), []);
  }
  const q = (e) => ({
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  })[e], z = ({ ownerState: e, theme: s }) => {
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
      const t = F(s), n = Object.keys(s.breakpoints.values).reduce((r, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (r[c] = true), r), {}), a = u({
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
      }), o = M(o, v({
        theme: s
      }, m, (r, c) => e.useFlexGap ? {
        gap: h(t, r)
      } : {
        "& > :not(style):not(style)": {
          margin: 0
        },
        "& > :not(style) ~ :not(style)": {
          [`margin${q(c ? a[c] : e.direction)}`]: h(t, r)
        }
      }));
    }
    return o = E(s.breakpoints, o), o;
  };
  function Q(e = {}) {
    const { createStyledComponent: s = K, useThemeProps: o = L, componentName: t = "MuiStack" } = e, n = () => G({
      root: [
        "root"
      ]
    }, (r) => N(t, r), {}), a = s(z);
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
        className: B(T.root, S),
        ...C,
        children: y ? W(g, y) : g
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
  H as g
};
