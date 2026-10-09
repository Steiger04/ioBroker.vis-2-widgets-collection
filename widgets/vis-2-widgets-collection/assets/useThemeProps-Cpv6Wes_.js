import { bc as r, ba as p, x as a } from "./usePopoverPositioning-BUV6laon.js";
const u = r();
function m(n) {
  const { theme: e, name: s, props: o } = n;
  return !e || !e.components || !e.components[s] || !e.components[s].defaultProps ? o : p(e.components[s].defaultProps, o);
}
function f({ props: n, name: e, defaultTheme: s, themeId: o }) {
  let t = a(s);
  return o && (t = t[o] || t), m({ theme: t, name: e, props: n });
}
export {
  m as g,
  u as s,
  f as u
};
