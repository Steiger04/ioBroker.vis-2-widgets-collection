import { v as s, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
let c;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  c = (e, r, t) => s.useMemo(() => {
    if ((t == null ? void 0 : t.alias) && t.alias !== "") return t.alias;
    if ((t == null ? void 0 : t.value) && t.value !== "") return t.value;
    if (e != null && (typeof e == "string" || typeof e == "number" || typeof e == "boolean")) {
      const n = r == null ? void 0 : r.data.unit;
      return n && n !== "" ? `${e}${n}` : e;
    }
  }, [
    e,
    r,
    t
  ]);
});
export {
  __tla,
  c as u
};
