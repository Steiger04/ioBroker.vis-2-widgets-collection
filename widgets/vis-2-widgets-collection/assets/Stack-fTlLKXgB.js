import { aR as R, aA as V, aS as _, aT as b, j as D, d as B, aU as v, aV as u, aW as F, aX as M, aY as U, e as A, g as E, aZ as G, a_ as h, s as N, u as O, __tla as __tla_0 } from "./useData-CFNDeVWW.js";
import { v as p, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
let Q, W, $;
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
  $ = R();
  W = function(e) {
    const { theme: s, name: o, props: t } = e;
    return !s || !s.components || !s.components[o] || !s.components[o].defaultProps ? t : V(s.components[o].defaultProps, t);
  };
  function L({ props: e, name: s, defaultTheme: o, themeId: t }) {
    let n = _(o);
    return t && (n = n[t] || n), W({
      theme: n,
      name: s,
      props: e
    });
  }
  const X = G(), Y = $("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, s) => s.root
  });
  function Z(e) {
    return L({
      props: e,
      name: "MuiStack",
      defaultTheme: X
    });
  }
  function q(e, s) {
    const o = p.Children.toArray(e).filter(Boolean);
    return o.reduce((t, n, a) => (t.push(n), a < o.length - 1 && t.push(p.cloneElement(s, {
      key: `separator-${a}`
    })), t), []);
  }
  const z = (e) => ({
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  })[e], H = ({ ownerState: e, theme: s }) => {
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
          [`margin${z(c ? a[c] : e.direction)}`]: h(t, r)
        }
      }));
    }
    return o = U(s.breakpoints, o), o;
  };
  function I(e = {}) {
    const { createStyledComponent: s = Y, useThemeProps: o = Z, componentName: t = "MuiStack" } = e, n = () => A({
      root: [
        "root"
      ]
    }, (r) => E(t, r), {}), a = s(H);
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
        children: y ? q(g, y) : g
      });
    });
  }
  Q = I({
    createStyledComponent: N("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, s) => s.root
    }),
    useThemeProps: (e) => O({
      props: e,
      name: "MuiStack"
    })
  });
});
export {
  Q as S,
  __tla,
  W as g,
  $ as s
};
