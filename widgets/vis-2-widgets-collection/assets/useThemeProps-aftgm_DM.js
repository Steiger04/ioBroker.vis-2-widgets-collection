import { aF as r, aa as a, al as p, __tla as __tla_0 } from "./tinycolor-B_2EitDy.js";
let m, c, f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  c = r();
  m = function(n) {
    const { theme: e, name: s, props: o } = n;
    return !e || !e.components || !e.components[s] || !e.components[s].defaultProps ? o : a(e.components[s].defaultProps, o);
  };
  f = function({ props: n, name: e, defaultTheme: s, themeId: o }) {
    let t = p(s);
    return o && (t = t[o] || t), m({
      theme: t,
      name: e,
      props: n
    });
  };
});
export {
  __tla,
  m as g,
  c as s,
  f as u
};
