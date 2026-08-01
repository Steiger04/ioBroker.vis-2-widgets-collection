import { f as e, g as s, __tla as __tla_0 } from "./tinycolor-B_2EitDy.js";
let a, l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  a = function(t) {
    return s("MuiListItemText", t);
  };
  l = e("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary"
  ]);
});
export {
  __tla,
  a as g,
  l
};
