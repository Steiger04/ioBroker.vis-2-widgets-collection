import { j as y, C as a, v as h, z as _, __tla as __tla_0 } from "./useData-B6ap6FGc.js";
import { v as g, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
let A, d, C;
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
  })()
]).then(async () => {
  let O, b, v;
  O = async (o, n) => {
    var _a;
    const c = n._id.split(".");
    for (let e = c.length; e > 0; e--) try {
      const i = await o.getObject(c.slice(0, e).join("."));
      if ((_a = i == null ? void 0 : i.common) == null ? void 0 : _a.icon) return i.common.icon;
    } catch {
      continue;
    }
    return null;
  };
  b = (o, n = "oid") => {
    Object.keys(o).forEach((e) => {
      e.startsWith(n) && e.endsWith("Object") && delete o[e];
    });
    const c = [
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
    if (n === "oid") {
      delete o.icon, delete o.write;
      const e = typeof o.values_count == "number" ? o.values_count : 0;
      for (let i = 1; i <= e; i++) c.forEach((r) => {
        delete o[`${r}${i}`];
      });
      o.values_count = 0;
    }
  };
  v = (o, n) => {
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
  };
  C = (o, n = "oid") => async (c, e, i, r) => {
    if (!e[n]) {
      b(e, n), setTimeout(() => i(e), 100);
      return;
    }
    try {
      const t = await r.getObject(e[n]);
      if (!t) {
        b(e, n), setTimeout(() => i(e), 100);
        return;
      }
      const u = t.common.type;
      if (!o.includes(u)) return;
      const s = {
        _id: t._id,
        name: t.common.name || "",
        type: u,
        icon: await O(r, t),
        write: t.common.write,
        onlyDisplay: !t.common.write,
        unit: t.common.unit || "",
        minValue: t.common.min || 0,
        maxValue: t.common.max || 100
      };
      if (e[`${n}Object`] = s, e.icon = s.icon, e.write = s.write, e.onlyDisplay = s.onlyDisplay, e.minValue = s.minValue, e.maxValue = s.maxValue, t.common.states) {
        let l = t.common.states;
        if (Array.isArray(l)) {
          const m = {};
          l.forEach((f) => {
            m[f] = f;
          }), l = m;
        }
        e[`${n}Object`].commonStates = l, n === "oid" && (e.values_count = Object.keys(l).length, Object.entries(l).forEach(([m, f], j) => {
          const p = j + 1;
          e[`value${p}`] = v(m, u), e[`alias${p}`] = String(f);
        }));
      } else u === "boolean" && n === "oid" ? (e.values_count = 2, e.value1 = true, e.alias1 = "TRUE", e.value2 = false, e.alias2 = "FALSE") : n === "oid" && (e.values_count = 0);
      setTimeout(() => i(e), 100);
    } catch (t) {
      console.error(`Error handling OID change for ${e[n]}:`, t), b(e, n), setTimeout(() => i(e), 100);
    }
  };
  d = (o) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: C(o)
    },
    {
      label: "",
      type: "custom",
      component: () => y.jsx(a, {}),
      hidden: (n, c) => n.oidObject === void 0
    },
    {
      name: "unit",
      label: "unit",
      type: "text",
      default: "",
      hidden: (n, c) => n.oidObject === void 0,
      onChange: async (n, c, e, i) => {
        c.oidObject && (c.oidObject.unit = c.unit || "", setTimeout(() => e(c), 100));
      }
    },
    {
      label: "",
      type: "custom",
      component: () => y.jsx(a, {}),
      hidden: (n, c) => {
        var _a;
        return ((_a = n.oidObject) == null ? void 0 : _a.type) === "boolean" || n.oidObject === void 0;
      }
    },
    {
      name: "values_count",
      type: "number",
      default: 0,
      label: "values_count",
      hidden: (n, c) => {
        var _a;
        return ((_a = n.oidObject) == null ? void 0 : _a.type) === "boolean" || n.oidObject === void 0;
      }
    }
  ];
  A = ({ data: o, widget: n }) => {
    const e = g.useContext(h).theme, i = (typeof o.icon == "string" ? o.icon : void 0) || (typeof o.iconActive == "string" ? o.iconActive : void 0), r = (typeof o.iconSize == "string" ? o.iconSize : void 0) || (typeof o.iconSizeActive == "string" ? o.iconSizeActive : void 0), t = o.iconColorActive || o.iconColor || e.palette.primary.main;
    return !n.data.noHeaderIcon && i ? y.jsx("img", {
      alt: "",
      src: i,
      style: {
        position: "absolute",
        top: `calc(0px - ${n.data.iconYOffset || 0})`,
        right: `calc(0px - ${n.data.iconXOffset || 0})`,
        height: r,
        ..._(i, t)
      }
    }) : null;
  };
});
export {
  A as C,
  __tla,
  d as c,
  C as o
};
