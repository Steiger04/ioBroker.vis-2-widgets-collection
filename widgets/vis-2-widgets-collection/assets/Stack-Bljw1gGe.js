import { y as x, h as T, aW as g, aX as u, aY as b, aI as j, aZ as D, i as R, g as B, A as F, a_ as v, s as M, u as $ } from "./usePopoverPositioning-BUV6laon.js";
import { o as A, i as G, u as N, w as O } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { s as U, u as I } from "./useThemeProps-Cpv6Wes_.js";
const E = F(), L = U("div", { name: "MuiStack", slot: "Root", overridesResolver: (e, s) => s.root });
function W(e) {
  return I({ props: e, name: "MuiStack", defaultTheme: E });
}
function X(e, s) {
  const n = N.toArray(e).filter(Boolean);
  return n.reduce((a, c, t) => (a.push(c), t < n.length - 1 && a.push(O(s, { key: `separator-${t}` })), a), []);
}
const Y = (e) => ({ row: "Left", "row-reverse": "Right", column: "Top", "column-reverse": "Bottom" })[e], Z = ({ ownerState: e, theme: s }) => {
  let n = { display: "flex", flexDirection: "column", ...g({ theme: s }, u({ values: e.direction, breakpoints: s.breakpoints.values }), (a) => ({ flexDirection: a })) };
  if (e.spacing) {
    const a = b(s), c = Object.keys(s.breakpoints.values).reduce((o, r) => ((typeof e.spacing == "object" && e.spacing[r] != null || typeof e.direction == "object" && e.direction[r] != null) && (o[r] = true), o), {}), t = u({ values: e.direction, base: c }), p = u({ values: e.spacing, base: c });
    typeof t == "object" && Object.keys(t).forEach((o, r, i) => {
      if (!t[o]) {
        const l = r > 0 ? t[i[r - 1]] : "column";
        t[o] = l;
      }
    }), n = j(n, g({ theme: s }, p, (o, r) => e.useFlexGap ? { gap: v(a, o) } : { "& > :not(style):not(style)": { margin: 0 }, "& > :not(style) ~ :not(style)": { [`margin${Y(r ? t[r] : e.direction)}`]: v(a, o) } }));
  }
  return n = D(s.breakpoints, n), n;
};
function q(e = {}) {
  const { createStyledComponent: s = L, useThemeProps: n = W, componentName: a = "MuiStack" } = e, c = () => R({ root: ["root"] }, (o) => B(a, o), {}), t = s(Z);
  return A(function(o, r) {
    const i = n(o), d = x(i), { component: l = "div", direction: k = "column", spacing: h = 0, divider: f, children: y, className: _, useFlexGap: P = false, ...S } = d, C = { direction: k, spacing: h, useFlexGap: P }, V = c();
    return G(t, { as: l, ownerState: C, ref: r, className: T(V.root, _), ...S, children: f ? X(y, f) : y });
  });
}
const K = q({ createStyledComponent: M("div", { name: "MuiStack", slot: "Root", overridesResolver: (e, s) => s.root }), useThemeProps: (e) => $({ props: e, name: "MuiStack" }) });
export {
  K as S
};
