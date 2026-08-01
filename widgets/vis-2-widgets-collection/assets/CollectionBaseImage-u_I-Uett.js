import { j as a, __tla as __tla_0 } from "./tinycolor-B_2EitDy.js";
import { e as p, C as _, __tla as __tla_1 } from "./useData-90UeUAIS.js";
import { v as h, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
let k, d, T, x, S, C;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  let j, b, O, A;
  j = async (o, t) => {
    var _a;
    const r = t._id.split(".");
    for (let e = r.length; e > 0; e--) try {
      const n = await o.getObject(r.slice(0, e).join("."));
      if ((_a = n == null ? void 0 : n.common) == null ? void 0 : _a.icon) return n.common.icon;
    } catch {
      continue;
    }
    return null;
  };
  b = (o, t = "oid") => {
    var _a;
    Object.keys(o).forEach((e) => {
      e.startsWith(t) && e.endsWith("Object") && delete o[e];
    });
    const r = [
      "iconSmall",
      "icon",
      "iconSize",
      "iconColor",
      "iconHover",
      "iconXOffset",
      "iconYOffset",
      "noHeader",
      "header",
      "headerSize",
      "alias",
      "value",
      "valueSize",
      "noFooter",
      "footer",
      "footerSize",
      "noCard",
      "squaredCorner",
      "textColor",
      "outlined",
      "outlinedFrame",
      "basePadding",
      "baseElevation",
      "square",
      "ellipse",
      "circle",
      "background",
      "backgroundColor",
      "frameBackground",
      "frameBackgroundColor"
    ];
    if (t === "oid") {
      delete o.icon, delete o.write;
      const e = typeof o.values_count == "number" ? o.values_count : 0, n = Object.keys(((_a = o.oidObject) == null ? void 0 : _a.commonStates) || {}).length, i = Math.max(e, n);
      for (let s = 1; s <= i; s++) r.forEach((l) => {
        delete o[`${l}${s}`];
      });
      o.values_count = 0;
    }
  };
  O = (o, t) => {
    switch (t) {
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
  };
  C = (o, t = "oid") => async (r, e, n, i) => {
    if (!e[t]) {
      b(e, t), setTimeout(() => n(e), 100);
      return;
    }
    try {
      const s = await i.getObject(e[t]);
      if (!s) {
        b(e, t), setTimeout(() => n(e), 100);
        return;
      }
      const l = s.common.type;
      if (!o.includes(l)) return;
      const c = {
        _id: s._id,
        name: s.common.name || "",
        type: l,
        icon: await j(i, s),
        write: s.common.write,
        onlyDisplay: s.common.write === false,
        unit: s.common.unit || "",
        minValue: s.common.min || 0,
        maxValue: s.common.max || 100
      };
      if (e[`${t}Object`] = c, e.icon = c.icon, e.write = c.write, e.onlyDisplay = c.onlyDisplay, e.minValue = c.minValue, e.maxValue = c.maxValue, s.common.states) {
        let u = s.common.states;
        if (Array.isArray(u)) {
          const m = {};
          u.forEach((f) => {
            m[f] = f;
          }), u = m;
        }
        e[`${t}Object`].commonStates = u, t === "oid" && (e.values_count = Object.keys(u).length, Object.entries(u).forEach(([m, f], y) => {
          const g = y + 1;
          e[`value${g}`] = O(m, l), e[`alias${g}`] = String(f);
        }));
      } else l === "boolean" && t === "oid" ? (e[`${t}Object`].commonStates = {
        true: "TRUE",
        false: "FALSE"
      }, e.values_count = 2, e.value1 = true, e.alias1 = "TRUE", e.value2 = false, e.alias2 = "FALSE") : t === "oid" && (e.values_count = 0);
      t === "oid" && e.ignoreCommonStates !== false && (e.values_count = 0), setTimeout(() => n(e), 100);
    } catch (s) {
      console.error(`Error handling OID change for ${e[t]}:`, s), b(e, t), setTimeout(() => n(e), 100);
    }
  };
  T = (o, { unit: t = true, valueGroups: r = true } = {}) => {
    const e = [
      {
        name: "oid",
        type: "id",
        label: "oid",
        onChange: C(o)
      }
    ];
    return t && e.push({
      label: "",
      type: "custom",
      component: () => a.jsx(p, {}),
      hidden: (n, i) => n.oidObject === void 0
    }, {
      name: "unit",
      label: "unit",
      type: "text",
      default: "",
      hidden: (n, i) => n.oidObject === void 0,
      onChange: async (n, i, s, l) => {
        i.oidObject && (i.oidObject.unit = i.unit || "", setTimeout(() => s(i), 100));
      }
    }), r && e.push({
      label: "",
      type: "custom",
      component: () => a.jsx(p, {}),
      hidden: (n, i) => n.oidObject === void 0
    }, {
      name: "ignoreCommonStates",
      type: "checkbox",
      default: true,
      label: "ignore_common_states",
      tooltip: "ignore_common_states_tooltip",
      hidden: (n, i) => n.oidObject === void 0,
      onChange: async (n, i, s, l) => {
        var _a, _b;
        if (i.ignoreCommonStates !== false) i.values_count = 0;
        else {
          const c = (_a = i.oidObject) == null ? void 0 : _a.commonStates;
          c ? i.values_count = Object.keys(c).length : ((_b = i.oidObject) == null ? void 0 : _b.type) === "boolean" ? i.values_count = 2 : i.values_count = 0;
        }
        setTimeout(() => s(i), 100);
      }
    }, {
      name: "values_count",
      type: "number",
      default: 0,
      label: "values_count",
      hidden: (n, i) => {
        var _a;
        return ((_a = n.oidObject) == null ? void 0 : _a.type) === "boolean" || n.oidObject === void 0 || n.ignoreCommonStates !== false;
      }
    }), e;
  };
  S = (o) => !o || typeof o != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(o);
  x = (o, t, r) => !r && !S(o) ? {} : !t || t === "" ? {} : {
    color: t,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  };
  A = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  d = ({ src: o, style: t = {}, alt: r = "" }) => {
    const e = o && o !== "undefined" && o !== null ? o : A;
    return a.jsx("img", {
      src: e,
      alt: r,
      style: t,
      onError: (n) => {
        console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
        const i = n.currentTarget;
        i.onerror = null, i.src = A;
      }
    });
  };
  k = ({ data: o, widget: t }) => {
    const e = h.useContext(_).theme, n = o.icon, i = o.iconColor || e.palette.primary.main;
    return !t.data.noHeaderIcon && n ? a.jsx(d, {
      alt: "",
      src: n,
      style: {
        position: "absolute",
        top: `calc(0px - ${o.iconYOffsetCm})`,
        right: `calc(0px - ${o.iconXOffsetCm})`,
        height: o.iconSizeCm,
        ...x(n, i, !!o.forceColorMaskCm)
      }
    }) : null;
  };
});
export {
  k as C,
  d as S,
  __tla,
  T as c,
  x as g,
  S as i,
  C as o
};
