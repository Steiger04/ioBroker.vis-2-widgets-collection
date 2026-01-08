import { a3 as R, Q as V, a4 as _, a5 as b, j as D, d as B, a6 as v, a7 as u, a8 as F, a9 as M, aa as E, e as G, g as N, ab as O, ac as h, s as U, u as $, __tla as __tla_0 } from "./commonFields-DH-obq-U.js";
import { v as p, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
let Z;
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
  function L(e) {
    const { theme: s, name: o, props: t } = e;
    return !s || !s.components || !s.components[o] || !s.components[o].defaultProps ? t : V(s.components[o].defaultProps, t);
  }
  function Q({ props: e, name: s, defaultTheme: o, themeId: t }) {
    let n = _(o);
    return t && (n = n[t] || n), L({
      theme: n,
      name: s,
      props: e
    });
  }
  const W = O(), q = A("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, s) => s.root
  });
  function z(e) {
    return Q({
      props: e,
      name: "MuiStack",
      defaultTheme: W
    });
  }
  function H(e, s) {
    const o = p.Children.toArray(e).filter(Boolean);
    return o.reduce((t, n, a) => (t.push(n), a < o.length - 1 && t.push(p.cloneElement(s, {
      key: `separator-${a}`
    })), t), []);
  }
  const I = (e) => ({
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  })[e], J = ({ ownerState: e, theme: s }) => {
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
          [`margin${I(c ? a[c] : e.direction)}`]: h(t, r)
        }
      }));
    }
    return o = E(s.breakpoints, o), o;
  };
  function K(e = {}) {
    const { createStyledComponent: s = q, useThemeProps: o = z, componentName: t = "MuiStack" } = e, n = () => G({
      root: [
        "root"
      ]
    }, (r) => N(t, r), {}), a = s(J);
    return p.forwardRef(function(r, c) {
      const i = o(r), f = b(i), { component: l = "div", direction: k = "column", spacing: P = 0, divider: y, children: g, className: S, useFlexGap: x = false, ...C } = f, j = {
        direction: k,
        spacing: P,
        useFlexGap: x
      }, T = n();
      return D.jsx(a, {
        as: l,
        ownerState: j,
        ref: c,
        className: B(T.root, S),
        ...C,
        children: y ? H(g, y) : g
      });
    });
  }
  Z = K({
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
  __tla
};
