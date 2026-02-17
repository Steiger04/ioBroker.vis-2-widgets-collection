import { aN as R, K as V, aO as _, aP as b, j as D, d as B, aQ as v, aR as u, aS as F, aT as M, aU as N, e as O, g as U, aV as E, aW as h, s as G, u as $, __tla as __tla_0 } from "./useData-Dh4nd_La.js";
import { v as p, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
let Z, W, A;
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
  A = R();
  W = function(e) {
    const { theme: s, name: o, props: t } = e;
    return !s || !s.components || !s.components[o] || !s.components[o].defaultProps ? t : V(s.components[o].defaultProps, t);
  };
  function K({ props: e, name: s, defaultTheme: o, themeId: t }) {
    let n = _(o);
    return t && (n = n[t] || n), W({
      theme: n,
      name: s,
      props: e
    });
  }
  const L = E(), Q = A("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, s) => s.root
  });
  function q(e) {
    return K({
      props: e,
      name: "MuiStack",
      defaultTheme: L
    });
  }
  function z(e, s) {
    const o = p.Children.toArray(e).filter(Boolean);
    return o.reduce((t, n, a) => (t.push(n), a < o.length - 1 && t.push(p.cloneElement(s, {
      key: `separator-${a}`
    })), t), []);
  }
  const H = (e) => ({
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  })[e], I = ({ ownerState: e, theme: s }) => {
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
          [`margin${H(c ? a[c] : e.direction)}`]: h(t, r)
        }
      }));
    }
    return o = N(s.breakpoints, o), o;
  };
  function J(e = {}) {
    const { createStyledComponent: s = Q, useThemeProps: o = q, componentName: t = "MuiStack" } = e, n = () => O({
      root: [
        "root"
      ]
    }, (r) => U(t, r), {}), a = s(I);
    return p.forwardRef(function(r, c) {
      const i = o(r), f = b(i), { component: l = "div", direction: k = "column", spacing: P = 0, divider: y, children: g, className: S, useFlexGap: x = false, ...C } = f, T = {
        direction: k,
        spacing: P,
        useFlexGap: x
      }, j = n();
      return D.jsx(a, {
        as: l,
        ownerState: T,
        ref: c,
        className: B(j.root, S),
        ...C,
        children: y ? z(g, y) : g
      });
    });
  }
  Z = J({
    createStyledComponent: G("div", {
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
  W as g,
  A as s
};
