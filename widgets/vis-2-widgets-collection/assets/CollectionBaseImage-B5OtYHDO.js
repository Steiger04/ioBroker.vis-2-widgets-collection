import { i as a, e as _ } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { e as A, C as O } from "./useData-Ogol4QJ_.js";
const h = async (o, n) => {
  var _a;
  const s = n._id.split(".");
  for (let e = s.length; e > 0; e--) try {
    const t = await o.getObject(s.slice(0, e).join("."));
    if ((_a = t == null ? void 0 : t.common) == null ? void 0 : _a.icon) return t.common.icon;
  } catch {
    continue;
  }
  return null;
}, b = (o, n = "oid") => {
  var _a;
  Object.keys(o).forEach((e) => {
    e.startsWith(n) && e.endsWith("Object") && delete o[e];
  });
  const s = ["iconSmall", "icon", "iconSize", "iconColor", "iconHover", "iconXOffset", "iconYOffset", "noHeader", "header", "headerSize", "alias", "value", "valueSize", "noFooter", "footer", "footerSize", "noCard", "squaredCorner", "textColor", "outlined", "outlinedFrame", "basePadding", "baseElevation", "square", "ellipse", "circle", "background", "backgroundColor", "frameBackground", "frameBackgroundColor"];
  if (n === "oid") {
    delete o.icon, delete o.write;
    const e = typeof o.values_count == "number" ? o.values_count : 0, t = Object.keys(((_a = o.oidObject) == null ? void 0 : _a.commonStates) || {}).length, i = Math.max(e, t);
    for (let c = 1; c <= i; c++) s.forEach((l) => {
      delete o[`${l}${c}`];
    });
    o.values_count = 0;
  }
}, j = (o, n) => {
  switch (n) {
    case "boolean":
      return o === "true";
    case "number":
      return Number(o);
    case "string":
      return String(o);
    case "mixed":
      return o === "true" ? true : o === "false" ? false : !isNaN(Number(o)) && o !== "" ? Number(o) : String(o);
    default:
      return String(o);
  }
}, C = (o, n = "oid") => async (s, e, t, i) => {
  if (!e[n]) {
    b(e, n), setTimeout(() => t(e), 100);
    return;
  }
  try {
    const c = await i.getObject(e[n]);
    if (!c) {
      b(e, n), setTimeout(() => t(e), 100);
      return;
    }
    const l = c.common.type;
    if (!o.includes(l)) return;
    const r = { _id: c._id, name: c.common.name || "", type: l, icon: await h(i, c), write: c.common.write, onlyDisplay: c.common.write === false, unit: c.common.unit || "", minValue: c.common.min || 0, maxValue: c.common.max || 100 };
    if (e[`${n}Object`] = r, e.icon = r.icon, e.write = r.write, e.onlyDisplay = r.onlyDisplay, e.minValue = r.minValue, e.maxValue = r.maxValue, c.common.states) {
      let m = c.common.states;
      if (Array.isArray(m)) {
        const u = {};
        m.forEach((f) => {
          u[f] = f;
        }), m = u;
      }
      e[`${n}Object`].commonStates = m, n === "oid" && (e.values_count = Object.keys(m).length, Object.entries(m).forEach(([u, f], y) => {
        const g = y + 1;
        e[`value${g}`] = j(u, l), e[`alias${g}`] = String(f);
      }));
    } else l === "boolean" && n === "oid" ? (e[`${n}Object`].commonStates = { true: "TRUE", false: "FALSE" }, e.values_count = 2, e.value1 = true, e.alias1 = "TRUE", e.value2 = false, e.alias2 = "FALSE") : n === "oid" && (e.values_count = 0);
    n === "oid" && e.ignoreCommonStates !== false && (e.values_count = 0), setTimeout(() => t(e), 100);
  } catch (c) {
    console.error(`Error handling OID change for ${e[n]}:`, c), b(e, n), setTimeout(() => t(e), 100);
  }
}, I = (o, { unit: n = true, valueGroups: s = true } = {}) => {
  const e = [{ name: "oid", type: "id", label: "oid", onChange: C(o) }];
  return n && e.push({ label: "", type: "custom", component: () => a(A, {}), hidden: (t, i) => t.oidObject === void 0 }, { name: "unit", label: "unit", type: "text", default: "", hidden: (t, i) => t.oidObject === void 0, onChange: async (t, i, c, l) => {
    i.oidObject && (i.oidObject.unit = i.unit || "", setTimeout(() => c(i), 100));
  } }), s && e.push({ label: "", type: "custom", component: () => a(A, {}), hidden: (t, i) => t.oidObject === void 0 }, { name: "ignoreCommonStates", type: "checkbox", default: true, label: "ignore_common_states", tooltip: "ignore_common_states_tooltip", hidden: (t, i) => t.oidObject === void 0, onChange: async (t, i, c, l) => {
    var _a, _b;
    if (i.ignoreCommonStates !== false) i.values_count = 0;
    else {
      const r = (_a = i.oidObject) == null ? void 0 : _a.commonStates;
      r ? i.values_count = Object.keys(r).length : ((_b = i.oidObject) == null ? void 0 : _b.type) === "boolean" ? i.values_count = 2 : i.values_count = 0;
    }
    setTimeout(() => c(i), 100);
  } }, { name: "values_count", type: "number", default: 0, label: "values_count", hidden: (t, i) => {
    var _a;
    return ((_a = t.oidObject) == null ? void 0 : _a.type) === "boolean" || t.oidObject === void 0 || t.ignoreCommonStates !== false;
  } }), e;
}, S = (o) => !o || typeof o != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(o), x = (o, n, s) => !s && !S(o) ? {} : !n || n === "" ? {} : { color: n, filter: "drop-shadow(0px 10000px 0)", transform: "translateY(-10000px)" }, p = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", d = ({ src: o, style: n = {}, alt: s = "" }) => a("img", { src: o && o !== "undefined" && o !== null ? o : p, alt: s, style: n, onError: (t) => {
  console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
  const i = t.currentTarget;
  i.onerror = null, i.src = p;
} }), T = ({ data: o, widget: n }) => {
  const e = _(O).theme, t = o.icon, i = o.iconColor || e.palette.primary.main;
  return !n.data.noHeaderIcon && t ? a(d, { alt: "", src: t, style: { position: "absolute", top: `calc(0px - ${o.iconYOffsetCm})`, right: `calc(0px - ${o.iconXOffsetCm})`, height: o.iconSizeCm, ...x(t, i, !!o.forceColorMaskCm) } }) : null;
};
export {
  T as C,
  d as S,
  I as c,
  x as g,
  S as i,
  C as o
};
