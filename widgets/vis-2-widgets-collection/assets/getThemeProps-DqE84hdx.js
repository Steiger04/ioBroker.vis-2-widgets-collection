import { aS as n, a4 as r, __tla as __tla_0 } from "./useData-BxQArd1-.js";
let m, a;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  a = n();
  m = function(t) {
    const { theme: e, name: o, props: s } = t;
    return !e || !e.components || !e.components[o] || !e.components[o].defaultProps ? s : r(e.components[o].defaultProps, s);
  };
});
export {
  __tla,
  m as g,
  a as s
};
