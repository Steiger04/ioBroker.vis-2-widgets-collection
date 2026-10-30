import { h as a, j as C } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { e as p } from "./useData-uC1Kpd-M.js";
import { C as S } from "./usePopoverPositioning-C1_MhytU.js";
function d(e) {
  return !!(e == null ? void 0 : e.onlyDisplay) || (e == null ? void 0 : e.write) === false;
}
const A = "cid";
function _(e) {
  return e === A;
}
const j = (e) => {
  var _a;
  return ((_a = e.cidObject) == null ? void 0 : _a._id) ? { idName: A, object: e.cidObject } : { idName: "oid", object: e.oidObject };
};
function R(e) {
  const { idName: n, object: s } = j(e);
  return { idName: n, readOnly: d({ onlyDisplay: e.onlyDisplay, write: s == null ? void 0 : s.write }) };
}
function y(e) {
  var _a;
  return ((_a = j(e).object) == null ? void 0 : _a.write) === false;
}
const v = async (e, n) => {
  var _a;
  const s = n._id.split(".");
  for (let o = s.length; o > 0; o--) try {
    const t = await e.getObject(s.slice(0, o).join("."));
    if ((_a = t == null ? void 0 : t.common) == null ? void 0 : _a.icon) return t.common.icon;
  } catch {
    continue;
  }
  return null;
}, b = (e, n = "oid") => {
  var _a;
  Object.keys(e).forEach((o) => {
    o.startsWith(n) && o.endsWith("Object") && delete e[o];
  }), _(n) && (e.onlyDisplay = y(e));
  const s = ["iconSmall", "icon", "iconSize", "iconColor", "iconHover", "iconXOffset", "iconYOffset", "noHeader", "header", "headerSize", "alias", "value", "valueSize", "noFooter", "footer", "footerSize", "noCard", "squaredCorner", "textColor", "outlined", "outlinedFrame", "basePadding", "baseElevation", "square", "ellipse", "circle", "background", "backgroundColor", "frameBackground", "frameBackgroundColor"];
  if (n === "oid") {
    delete e.icon, delete e.write;
    const o = typeof e.values_count == "number" ? e.values_count : 0, t = Object.keys(((_a = e.oidObject) == null ? void 0 : _a.commonStates) || {}).length, i = Math.max(o, t);
    for (let r = 1; r <= i; r++) s.forEach((l) => {
      delete e[`${l}${r}`];
    });
    e.values_count = 0;
  }
}, x = (e, n) => {
  switch (n) {
    case "boolean":
      return e === "true";
    case "number":
      return Number(e);
    case "string":
      return String(e);
    case "mixed":
      return e === "true" ? true : e === "false" ? false : !isNaN(Number(e)) && e !== "" ? Number(e) : String(e);
    default:
      return String(e);
  }
}, E = (e, n = "oid") => async (s, o, t, i) => {
  if (!o[n]) {
    b(o, n), setTimeout(() => t(o), 100);
    return;
  }
  try {
    const r = await i.getObject(o[n]);
    if (!r) {
      b(o, n), setTimeout(() => t(o), 100);
      return;
    }
    const l = r.common.type;
    if (!e.includes(l)) return;
    const c = { _id: r._id, name: r.common.name || "", type: l, icon: await v(i, r), write: r.common.write, onlyDisplay: r.common.write === false, unit: r.common.unit || "", minValue: r.common.min || 0, maxValue: r.common.max || 100 };
    if (o[`${n}Object`] = c, _(n) ? o.onlyDisplay = y(o) : (o.icon = c.icon, o.write = c.write, o.onlyDisplay = n === "oid" ? y(o) : c.onlyDisplay, o.minValue = c.minValue, o.maxValue = c.maxValue), r.common.states) {
      let u = r.common.states;
      if (Array.isArray(u)) {
        const m = {};
        u.forEach((f) => {
          m[f] = f;
        }), u = m;
      }
      o[`${n}Object`].commonStates = u, n === "oid" && (o.values_count = Object.keys(u).length, Object.entries(u).forEach(([m, f], h) => {
        const g = h + 1;
        o[`value${g}`] = x(m, l), o[`alias${g}`] = String(f);
      }));
    } else l === "boolean" && n === "oid" ? (o[`${n}Object`].commonStates = { true: "TRUE", false: "FALSE" }, o.values_count = 2, o.value1 = true, o.alias1 = "TRUE", o.value2 = false, o.alias2 = "FALSE") : n === "oid" && (o.values_count = 0);
    n === "oid" && o.ignoreCommonStates !== false && (o.values_count = 0), setTimeout(() => t(o), 100);
  } catch (r) {
    console.error(`Error handling OID change for ${o[n]}:`, r), b(o, n), setTimeout(() => t(o), 100);
  }
}, I = (e, n) => ({ name: e, type: "id", label: e, onChange: E(n, e), allowedTypes: n }), F = (e, { unit: n = true, valueGroups: s = true } = {}) => {
  const o = [I("oid", e)];
  return n && o.push({ label: "", type: "custom", component: () => a(p, {}), hidden: (t, i) => t.oidObject === void 0 }, { name: "unit", label: "unit", type: "text", default: "", hidden: (t, i) => t.oidObject === void 0, onChange: async (t, i, r, l) => {
    i.oidObject && (i.oidObject.unit = i.unit || "", setTimeout(() => r(i), 100));
  } }), s && o.push({ label: "", type: "custom", component: () => a(p, {}), hidden: (t, i) => t.oidObject === void 0 }, { name: "ignoreCommonStates", type: "checkbox", default: true, label: "ignore_common_states", tooltip: "ignore_common_states_tooltip", hidden: (t, i) => t.oidObject === void 0, onChange: async (t, i, r, l) => {
    var _a, _b;
    if (i.ignoreCommonStates !== false) i.values_count = 0;
    else {
      const c = (_a = i.oidObject) == null ? void 0 : _a.commonStates;
      c ? i.values_count = Object.keys(c).length : ((_b = i.oidObject) == null ? void 0 : _b.type) === "boolean" ? i.values_count = 2 : i.values_count = 0;
    }
    setTimeout(() => r(i), 100);
  } }, { name: "values_count", type: "number", default: 0, label: "values_count", hidden: (t, i) => {
    var _a;
    return ((_a = t.oidObject) == null ? void 0 : _a.type) === "boolean" || t.oidObject === void 0 || t.ignoreCommonStates !== false;
  } }), o;
}, w = (e) => !e || typeof e != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(e), T = (e, n, s) => !s && !w(e) ? {} : !n || n === "" ? {} : { color: n, filter: "drop-shadow(0px 10000px 0)", transform: "translateY(-10000px)" }, O = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", D = ({ src: e, style: n = {}, alt: s = "" }) => a("img", { src: e && e !== "undefined" && e !== null ? e : O, alt: s, style: n, onError: (t) => {
  console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
  const i = t.currentTarget;
  i.onerror = null, i.src = O;
} }), $ = ({ data: e, widget: n }) => {
  const o = C(S).theme, t = e.icon, i = e.iconColor || o.palette.primary.main;
  return !n.data.noHeaderIcon && t ? a(D, { alt: "", src: t, style: { position: "absolute", top: `calc(0px - ${e.iconYOffsetCm})`, right: `calc(0px - ${e.iconXOffsetCm})`, height: e.iconSizeCm, ...T(t, i, !!e.forceColorMaskCm) } }) : null;
};
export {
  $ as C,
  D as S,
  w as a,
  I as b,
  F as c,
  A as d,
  T as g,
  d as i,
  E as o,
  R as r,
  y as w
};
