import { h as l, g as i } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { g as s } from "./useData-uC1Kpd-M.js";
import { T as a } from "./usePopoverPositioning-C1_MhytU.js";
const m = ({ valueSize: t, textColor: r, contentValue: e, wrapperFullWidth: o = false, sx: n }) => l(a, { component: "div", variant: "body2", sx: { fontSize: t, textAlign: "center", bgcolor: "transparent", ...s(r), textTransform: "none", px: 1, pl: 0, pr: 1, width: "100%", height: "100%", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", overflowWrap: "break-word", wordBreak: "break-word", whiteSpace: "normal", hyphens: "auto", "& > div": { textAlign: "left", display: "inline-block" }, ...n }, dangerouslySetInnerHTML: { __html: `<div style="text-align: left; display: inline-block;${o ? " width: 100%;" : ""}">${e || ""}</div>` } }), y = (t, r, e) => i(() => {
  if ((e == null ? void 0 : e.alias) && e.alias !== "") return e.alias;
  if ((e == null ? void 0 : e.value) && e.value !== "") return e.value;
  if (t != null && (typeof t == "string" || typeof t == "number" || typeof t == "boolean")) {
    const n = r == null ? void 0 : r.data.unit;
    return n && n !== "" ? `${t}${n}` : t;
  }
}, [t, r, e]);
export {
  m as C,
  y as u
};
