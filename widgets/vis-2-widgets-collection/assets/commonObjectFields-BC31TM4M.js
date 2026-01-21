import { j, C as a, __tla as __tla_0 } from "./useData-ZqG1ErJr.js";
let g, d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let O, f, h;
  O = async (n, o) => {
    var _a;
    const i = o._id.split(".");
    for (let e = i.length; e > 0; e--) try {
      const r = await n.getObject(i.slice(0, e).join("."));
      if ((_a = r == null ? void 0 : r.common) == null ? void 0 : _a.icon) return r.common.icon;
    } catch {
      continue;
    }
    return null;
  };
  f = (n, o = "oid") => {
    Object.keys(n).forEach((e) => {
      e.startsWith(o) && e.endsWith("Object") && delete n[e];
    });
    const i = [
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
    if (o === "oid") {
      delete n.icon, delete n.write;
      const e = typeof n.values_count == "number" ? n.values_count : 0;
      for (let r = 1; r <= e; r++) i.forEach((l) => {
        delete n[`${l}${r}`];
      });
      n.values_count = 0;
    }
  };
  h = (n, o) => {
    switch (o) {
      case "boolean":
        return n === "true";
      case "number":
        return Number(n);
      case "string":
        return String(n);
      case "mixed":
        return n === "true" ? true : n === "false" ? false : !isNaN(Number(n)) && n !== "" ? Number(n) : String(n);
      default:
        return String(n);
    }
  };
  d = (n, o = "oid") => async (i, e, r, l) => {
    if (!e[o]) {
      f(e, o), setTimeout(() => r(e), 100);
      return;
    }
    try {
      const t = await l.getObject(e[o]);
      if (!t) {
        f(e, o), setTimeout(() => r(e), 100);
        return;
      }
      const u = t.common.type;
      if (!n.includes(u)) return;
      const c = {
        _id: t._id,
        name: t.common.name || "",
        type: u,
        icon: await O(l, t),
        write: t.common.write,
        onlyDisplay: !t.common.write,
        unit: t.common.unit || "",
        minValue: t.common.min || 0,
        maxValue: t.common.max || 100
      };
      if (e[`${o}Object`] = c, e.icon = c.icon, e.write = c.write, e.onlyDisplay = c.onlyDisplay, e.minValue = c.minValue, e.maxValue = c.maxValue, t.common.states) {
        let s = t.common.states;
        if (Array.isArray(s)) {
          const m = {};
          s.forEach((b) => {
            m[b] = b;
          }), s = m;
        }
        e[`${o}Object`].commonStates = s, o === "oid" && (e.values_count = Object.keys(s).length, Object.entries(s).forEach(([m, b], p) => {
          const y = p + 1;
          e[`value${y}`] = h(m, u), e[`alias${y}`] = String(b);
        }));
      } else u === "boolean" && o === "oid" ? (e.values_count = 2, e.value1 = true, e.alias1 = "TRUE", e.value2 = false, e.alias2 = "FALSE") : o === "oid" && (e.values_count = 0);
      setTimeout(() => r(e), 100);
    } catch (t) {
      console.error(`Error handling OID change for ${e[o]}:`, t), f(e, o), setTimeout(() => r(e), 100);
    }
  };
  g = (n) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: d(n)
    },
    {
      label: "",
      type: "custom",
      component: () => j.jsx(a, {}),
      hidden: (o, i) => o.oidObject === void 0
    },
    {
      name: "unit",
      label: "unit",
      type: "text",
      default: "",
      hidden: (o, i) => o.oidObject === void 0,
      onChange: async (o, i, e, r) => {
        i.oidObject && (i.oidObject.unit = i.unit || "", setTimeout(() => e(i), 100));
      }
    },
    {
      label: "",
      type: "custom",
      component: () => j.jsx(a, {}),
      hidden: (o, i) => {
        var _a;
        return ((_a = o.oidObject) == null ? void 0 : _a.type) === "boolean" || o.oidObject === void 0;
      }
    },
    {
      name: "values_count",
      type: "number",
      default: 0,
      label: "values_count",
      hidden: (o, i) => {
        var _a;
        return ((_a = o.oidObject) == null ? void 0 : _a.type) === "boolean" || o.oidObject === void 0;
      }
    }
  ];
});
export {
  __tla,
  g as c,
  d as o
};
