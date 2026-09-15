import { au as r, aE as p, __tla as __tla_0 } from "./tinycolor-CLG1zgRY.js";
let m, a;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  m = function(t) {
    const { theme: e, name: o, props: s } = t;
    return !e || !e.components || !e.components[o] || !e.components[o].defaultProps ? s : r(e.components[o].defaultProps, s);
  };
  a = function({ props: t, name: e, defaultTheme: o, themeId: s }) {
    let n = p(o);
    return s && (n = n[s] || n), m({
      theme: n,
      name: e,
      props: t
    });
  };
});
export {
  __tla,
  m as g,
  a as u
};
