import { h as b, j as S } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { e as O } from "./useData-jkOw5Oj_.js";
import { C as d } from "./usePopoverPositioning-C1_MhytU.js";
function x(e) {
  return !!(e == null ? void 0 : e.onlyDisplay) || (e == null ? void 0 : e.write) === false;
}
const _ = "cid", j = (e) => {
  var _a;
  return ((_a = e.cidObject) == null ? void 0 : _a._id) ? { idName: _, object: e.cidObject } : { idName: "oid", object: e.oidObject };
};
function $(e) {
  const { idName: t, object: c } = j(e);
  return { idName: t, readOnly: x({ onlyDisplay: e.onlyDisplay, write: c == null ? void 0 : c.write }) };
}
function g(e) {
  var _a;
  return ((_a = j(e).object) == null ? void 0 : _a.write) === false;
}
function h(e) {
  return e === "oid" ? "main" : e === _ ? "control" : "auxiliary";
}
const v = async (e, t) => {
  var _a;
  const c = t._id.split(".");
  for (let o = c.length; o > 0; o--) try {
    const n = await e.getObject(c.slice(0, o).join("."));
    if ((_a = n == null ? void 0 : n.common) == null ? void 0 : _a.icon) return n.common.icon;
  } catch {
    continue;
  }
  return null;
}, y = (e, t = "oid") => {
  var _a;
  Object.keys(e).forEach((n) => {
    n.startsWith(t) && n.endsWith("Object") && delete e[n];
  });
  const c = h(t);
  c === "control" && (e.onlyDisplay = g(e));
  const o = ["iconSmall", "icon", "iconSize", "iconColor", "iconHover", "iconXOffset", "iconYOffset", "noHeader", "header", "headerSize", "alias", "value", "valueSize", "noFooter", "footer", "footerSize", "noCard", "squaredCorner", "textColor", "outlined", "outlinedFrame", "basePadding", "baseElevation", "square", "ellipse", "circle", "background", "backgroundColor", "frameBackground", "frameBackgroundColor"];
  if (c === "main") {
    delete e.icon, delete e.write;
    const n = typeof e.values_count == "number" ? e.values_count : 0, i = Object.keys(((_a = e.oidObject) == null ? void 0 : _a.commonStates) || {}).length, s = Math.max(n, i);
    for (let r = 1; r <= s; r++) o.forEach((l) => {
      delete e[`${l}${r}`];
    });
    e.values_count = 0;
  }
}, E = (e, t) => {
  switch (t) {
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
}, I = (e, t = "oid") => async (c, o, n, i) => {
  const s = h(t);
  if (!o[t]) {
    y(o, t), setTimeout(() => n(o), 100);
    return;
  }
  try {
    const r = await i.getObject(o[t]);
    if (!r) {
      y(o, t), setTimeout(() => n(o), 100);
      return;
    }
    const l = r.common.type;
    if (!e.includes(l)) return;
    const m = { _id: r._id, name: r.common.name || "", type: l, icon: await v(i, r), write: r.common.write, onlyDisplay: r.common.write === false, unit: r.common.unit || "", minValue: r.common.min || 0, maxValue: r.common.max || 100 };
    if (o[`${t}Object`] = m, s === "main" ? (o.icon = m.icon, o.write = m.write, o.onlyDisplay = g(o), o.minValue = m.minValue, o.maxValue = m.maxValue) : s === "control" && (o.onlyDisplay = g(o)), r.common.states) {
      let u = r.common.states;
      if (Array.isArray(u)) {
        const f = {};
        u.forEach((a) => {
          f[a] = a;
        }), u = f;
      }
      o[`${t}Object`].commonStates = u, s === "main" && (o.values_count = Object.keys(u).length, Object.entries(u).forEach(([f, a], C) => {
        const p = C + 1;
        o[`value${p}`] = E(f, l), o[`alias${p}`] = String(a);
      }));
    } else l === "boolean" && s === "main" ? (o[`${t}Object`].commonStates = { true: "TRUE", false: "FALSE" }, o.values_count = 2, o.value1 = true, o.alias1 = "TRUE", o.value2 = false, o.alias2 = "FALSE") : s === "main" && (o.values_count = 0);
    s === "main" && o.ignoreCommonStates !== false && (o.values_count = 0), setTimeout(() => n(o), 100);
  } catch (r) {
    console.error(`Error handling OID change for ${o[t]}:`, r), y(o, t), setTimeout(() => n(o), 100);
  }
}, w = (e, t) => ({ name: e, type: "id", label: e, onChange: I(t, e), allowedTypes: t }), F = (e, { unit: t = true, valueGroups: c = true } = {}) => {
  const o = [w("oid", e)];
  return t && o.push({ label: "", type: "custom", component: () => b(O, {}), hidden: (n, i) => n.oidObject === void 0 }, { name: "unit", label: "unit", type: "text", default: "", hidden: (n, i) => n.oidObject === void 0, onChange: async (n, i, s, r) => {
    i.oidObject && (i.oidObject.unit = i.unit || "", setTimeout(() => s(i), 100));
  } }), c && o.push({ label: "", type: "custom", component: () => b(O, {}), hidden: (n, i) => n.oidObject === void 0 }, { name: "ignoreCommonStates", type: "checkbox", default: true, label: "ignore_common_states", tooltip: "ignore_common_states_tooltip", hidden: (n, i) => n.oidObject === void 0, onChange: async (n, i, s, r) => {
    var _a, _b;
    if (i.ignoreCommonStates !== false) i.values_count = 0;
    else {
      const l = (_a = i.oidObject) == null ? void 0 : _a.commonStates;
      l ? i.values_count = Object.keys(l).length : ((_b = i.oidObject) == null ? void 0 : _b.type) === "boolean" ? i.values_count = 2 : i.values_count = 0;
    }
    setTimeout(() => s(i), 100);
  } }, { name: "values_count", type: "number", default: 0, label: "values_count", hidden: (n, i) => {
    var _a;
    return ((_a = n.oidObject) == null ? void 0 : _a.type) === "boolean" || n.oidObject === void 0 || n.ignoreCommonStates !== false;
  } }), o;
}, T = (e) => !e || typeof e != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(e), N = (e, t, c) => !c && !T(e) ? {} : !t || t === "" ? {} : { color: t, filter: "drop-shadow(0px 10000px 0)", transform: "translateY(-10000px)" }, A = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", k = ({ src: e, style: t = {}, alt: c = "" }) => b("img", { src: e && e !== "undefined" && e !== null ? e : A, alt: c, style: t, onError: (n) => {
  console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
  const i = n.currentTarget;
  i.onerror = null, i.src = A;
} }), L = ({ data: e, widget: t }) => {
  const o = S(d).theme, n = e.icon, i = e.iconColor || o.palette.primary.main;
  return !t.data.noHeaderIcon && n ? b(k, { alt: "", src: n, style: { position: "absolute", top: `calc(0px - ${e.iconYOffsetCm})`, right: `calc(0px - ${e.iconXOffsetCm})`, height: e.iconSizeCm, ...N(n, i, !!e.forceColorMaskCm) } }) : null;
};
export {
  L as C,
  k as S,
  T as a,
  w as b,
  F as c,
  _ as d,
  N as g,
  x as i,
  I as o,
  $ as r,
  g as w
};
