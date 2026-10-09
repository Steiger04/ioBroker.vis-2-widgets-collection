import { g as s } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
const l = (n, e, t) => s(() => {
  if ((t == null ? void 0 : t.alias) && t.alias !== "") return t.alias;
  if ((t == null ? void 0 : t.value) && t.value !== "") return t.value;
  if (n != null && (typeof n == "string" || typeof n == "number" || typeof n == "boolean")) {
    const r = e == null ? void 0 : e.data.unit;
    return r && r !== "" ? `${n}${r}` : n;
  }
}, [n, e, t]);
export {
  l as u
};
