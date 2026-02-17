import { aa as R, ab as V, j as _, d as b, ac as h, ad as u, ae as D, af as B, ag as F, e as M, g as E, ah as G, ai as v, s as N, u as O, __tla as __tla_0 } from "./useData-BxQArd1-.js";
import { v as p, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as U, s as $, __tla as __tla_2 } from "./getThemeProps-DqE84hdx.js";
let Y;
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
  function A({ props: e, name: s, defaultTheme: t, themeId: o }) {
    let n = R(t);
    return o && (n = n[o] || n), U({
      theme: n,
      name: s,
      props: e
    });
  }
  const L = G(), W = $("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, s) => s.root
  });
  function q(e) {
    return A({
      props: e,
      name: "MuiStack",
      defaultTheme: L
    });
  }
  function z(e, s) {
    const t = p.Children.toArray(e).filter(Boolean);
    return t.reduce((o, n, a) => (o.push(n), a < t.length - 1 && o.push(p.cloneElement(s, {
      key: `separator-${a}`
    })), o), []);
  }
  const H = (e) => ({
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  })[e], I = ({ ownerState: e, theme: s }) => {
    let t = {
      display: "flex",
      flexDirection: "column",
      ...h({
        theme: s
      }, u({
        values: e.direction,
        breakpoints: s.breakpoints.values
      }), (o) => ({
        flexDirection: o
      }))
    };
    if (e.spacing) {
      const o = D(s), n = Object.keys(s.breakpoints.values).reduce((r, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (r[c] = true), r), {}), a = u({
        values: e.direction,
        base: n
      }), d = u({
        values: e.spacing,
        base: n
      });
      typeof a == "object" && Object.keys(a).forEach((r, c, i) => {
        if (!a[r]) {
          const l = c > 0 ? a[i[c - 1]] : "column";
          a[r] = l;
        }
      }), t = B(t, h({
        theme: s
      }, d, (r, c) => e.useFlexGap ? {
        gap: v(o, r)
      } : {
        "& > :not(style):not(style)": {
          margin: 0
        },
        "& > :not(style) ~ :not(style)": {
          [`margin${H(c ? a[c] : e.direction)}`]: v(o, r)
        }
      }));
    }
    return t = F(s.breakpoints, t), t;
  };
  function J(e = {}) {
    const { createStyledComponent: s = W, useThemeProps: t = q, componentName: o = "MuiStack" } = e, n = () => M({
      root: [
        "root"
      ]
    }, (r) => E(o, r), {}), a = s(I);
    return p.forwardRef(function(r, c) {
      const i = t(r), f = V(i), { component: l = "div", direction: k = "column", spacing: S = 0, divider: y, children: g, className: x, useFlexGap: C = false, ...P } = f, j = {
        direction: k,
        spacing: S,
        useFlexGap: C
      }, T = n();
      return _.jsx(a, {
        as: l,
        ownerState: j,
        ref: c,
        className: b(T.root, x),
        ...P,
        children: y ? z(g, y) : g
      });
    });
  }
  Y = J({
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
  Y as S,
  __tla
};
