import { E as V, m as T, aX as v, aY as u, aZ as b, aF as j, a_ as D, n as F, i as R, J as B, a$ as g, s as M, k as $ } from "./usePopoverPositioning-C1_MhytU.js";
import { p as G, h as N, v as O, x as U } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { s as A, u as E } from "./useThemeProps-CxKYjV9n.js";
const I = B(), J = A("div", { name: "MuiStack", slot: "Root", overridesResolver: (e, s) => s.root });
function L(e) {
  return E({ props: e, name: "MuiStack", defaultTheme: I });
}
function X(e, s) {
  const n = O.toArray(e).filter(Boolean);
  return n.reduce((a, c, t) => (a.push(c), t < n.length - 1 && a.push(U(s, { key: `separator-${t}` })), a), []);
}
const Y = (e) => ({ row: "Left", "row-reverse": "Right", column: "Top", "column-reverse": "Bottom" })[e], Z = ({ ownerState: e, theme: s }) => {
  let n = { display: "flex", flexDirection: "column", ...v({ theme: s }, u({ values: e.direction, breakpoints: s.breakpoints.values }), (a) => ({ flexDirection: a })) };
  if (e.spacing) {
    const a = b(s), c = Object.keys(s.breakpoints.values).reduce((o, r) => ((typeof e.spacing == "object" && e.spacing[r] != null || typeof e.direction == "object" && e.direction[r] != null) && (o[r] = true), o), {}), t = u({ values: e.direction, base: c }), p = u({ values: e.spacing, base: c });
    typeof t == "object" && Object.keys(t).forEach((o, r, i) => {
      if (!t[o]) {
        const l = r > 0 ? t[i[r - 1]] : "column";
        t[o] = l;
      }
    }), n = j(n, v({ theme: s }, p, (o, r) => e.useFlexGap ? { gap: g(a, o) } : { "& > :not(style):not(style)": { margin: 0 }, "& > :not(style) ~ :not(style)": { [`margin${Y(r ? t[r] : e.direction)}`]: g(a, o) } }));
  }
  return n = D(s.breakpoints, n), n;
};
function q(e = {}) {
  const { createStyledComponent: s = J, useThemeProps: n = L, componentName: a = "MuiStack" } = e, c = () => F({ root: ["root"] }, (o) => R(a, o), {}), t = s(Z);
  return G(function(o, r) {
    const i = n(o), d = V(i), { component: l = "div", direction: k = "column", spacing: h = 0, divider: f, children: y, className: _, useFlexGap: P = false, ...S } = d, x = { direction: k, spacing: h, useFlexGap: P }, C = c();
    return N(t, { as: l, ownerState: x, ref: r, className: T(C.root, _), ...S, children: f ? X(y, f) : y });
  });
}
const Q = q({ createStyledComponent: M("div", { name: "MuiStack", slot: "Root", overridesResolver: (e, s) => s.root }), useThemeProps: (e) => $({ props: e, name: "MuiStack" }) });
export {
  Q as S
};
