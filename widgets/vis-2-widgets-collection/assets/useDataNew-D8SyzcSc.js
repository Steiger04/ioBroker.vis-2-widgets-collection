import { v as B, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { v as R, ab as P, O as m, ac as j, ad as E, __tla as __tla_1 } from "./useData-ySXy5KMl.js";
let L;
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
  function i(l) {
    for (const f of l) if (f.condition !== false && f.value !== void 0 && f.value !== null && !(typeof f.value == "string" && f.value.trim() === "")) return f.value;
  }
  function W(l) {
    return {
      markerIconSize: l.markerIconSize,
      markerTextColor: l.markerTextColor,
      markerTextSize: l.markerTextSize,
      markerIconColor: l.markerIconColor
    };
  }
  function F(l) {
    return {};
  }
  function K(l) {
    return "markerIconSize" in l || "markerTextColor" in l;
  }
  function q(l) {
    const { value: f, rawValue: _, index: n, rxData: r, oidObject: s, oidValue: p, widgetResolver: c, formatSize: d, getDynamicProperty: z, backgroundStyles: a, theme: h } = l, $ = f, y = _, o = s.unit || "", k = z("alias", String(n)), t = (u, M) => z(u, M), O = String(p) === String($), A = K(c);
    return {
      value: $,
      valueSize: typeof t("valueSize", String(n)) == "number" ? d(t("valueSize", String(n))) : null,
      label: String(k && String(k).trim() !== "" ? k : `${y}${o}`).replace(/(\r\n|\n|\r)/gm, ""),
      alias: String(k && String(k).trim() !== "" ? k : `${y}${o}`).replace(/(\r\n|\n|\r)/gm, ""),
      fontSize: i([
        {
          condition: O && typeof r.valueSizeActive == "number",
          value: d(r.valueSizeActive)
        },
        {
          value: typeof t("valueSize", String(n)) == "number" ? d(t("valueSize", String(n))) : void 0
        },
        {
          condition: A && typeof c.markerTextSize == "number",
          value: d(c.markerTextSize)
        },
        {
          value: typeof r.valueSize == "number" ? d(r.valueSize) : void 0
        },
        {
          value: void 0
        }
      ]),
      textColor: i([
        {
          condition: O,
          value: r.textColorActive && r.textColorActive !== "" ? r.textColorActive : void 0
        },
        {
          value: t("textColor", String(n)),
          condition: t("textColor", String(n)) !== ""
        },
        {
          condition: A,
          value: c.markerTextColor && c.markerTextColor !== "" ? c.markerTextColor : void 0
        },
        {
          value: r.textColor && r.textColor !== "" ? r.textColor : void 0
        },
        {
          value: void 0
        }
      ]),
      icon: i([
        {
          value: t("icon", String(n)),
          condition: t("icon", String(n)) !== ""
        },
        {
          value: t("iconSmall", String(n)),
          condition: t("iconSmall", String(n)) !== ""
        },
        {
          value: r.icon && r.icon !== "" ? r.icon : void 0
        },
        {
          value: r.iconSmall && r.iconSmall !== "" ? r.iconSmall : void 0
        },
        {
          value: void 0
        }
      ]),
      iconSize: t("iconSize", String(n)),
      iconWidth: i([
        {
          condition: O,
          value: r.iconSizeActive
        },
        {
          value: t("iconSize", String(n))
        },
        {
          condition: A,
          value: c.markerIconSize
        },
        {
          value: r.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconHeight: i([
        {
          condition: O,
          value: r.iconSizeActive
        },
        {
          value: t("iconSize", String(n))
        },
        {
          condition: A,
          value: c.markerIconSize
        },
        {
          value: r.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconXOffset: (() => {
        const u = t("iconXOffset", String(n));
        return u && u !== "0px" ? u : "0px";
      })(),
      iconYOffset: (() => {
        const u = t("iconYOffset", String(n));
        return u && u !== "0px" ? u : "0px";
      })(),
      iconColor: i([
        {
          value: t("iconColor", String(n)),
          condition: t("iconColor", String(n)) !== ""
        },
        {
          condition: A,
          value: c.markerIconColor && c.markerIconColor !== "" ? c.markerIconColor : void 0
        },
        {
          value: r.iconColor && r.iconColor !== "" ? r.iconColor : void 0
        },
        {
          value: h.palette.primary.main
        }
      ]) ?? h.palette.primary.main,
      iconHover: (() => {
        const u = t("iconHover", String(n));
        return u ? `${u}%` : void 0;
      })(),
      forceColorMask: t("enableIconColorMask", String(n)),
      backgroundColor: i([
        {
          value: r.backgroundColor && r.backgroundColor !== "" ? r.backgroundColor : void 0
        },
        {
          value: a == null ? void 0 : a["background-color"],
          condition: (a == null ? void 0 : a["background-color"]) !== ""
        },
        {
          value: ""
        }
      ]) ?? "",
      backgroundColorActive: t("backgroundColor", String(n)),
      background: String(i([
        {
          value: r.background && r.background !== "" ? r.background : void 0
        },
        {
          value: a == null ? void 0 : a.background,
          condition: (a == null ? void 0 : a.background) !== ""
        },
        {
          value: ""
        }
      ]) ?? ""),
      backgroundActive: t("background", String(n)),
      frameBackgroundColor: i([
        {
          value: r.frameBackgroundColor && r.frameBackgroundColor !== "" ? r.frameBackgroundColor : void 0
        },
        {
          value: a == null ? void 0 : a["background-color"],
          condition: (a == null ? void 0 : a["background-color"]) !== ""
        },
        {
          value: ""
        }
      ]) ?? "",
      frameBackgroundColorActive: t("frameBackgroundColor", String(n)),
      frameBackground: String(i([
        {
          value: r.frameBackground && r.frameBackground !== "" ? r.frameBackground : void 0
        },
        {
          value: a == null ? void 0 : a.background,
          condition: (a == null ? void 0 : a.background) !== ""
        },
        {
          value: ""
        }
      ]) ?? ""),
      frameBackgroundActive: t("frameBackground", String(n))
    };
  }
  L = function(l) {
    const { theme: f, widget: _, widget: { data: n }, getPropertyValue: r } = B.useContext(R), s = n[`${l}Object`], p = r(l), c = s == null ? void 0 : s.name, { fontStyles: d, textStyles: z, backgroundStyles: a } = P(_.style), [h, $] = B.useState(), y = B.useCallback(m, []), o = B.useCallback((v, b = "") => {
      const I = `${v}${b}`;
      return j(n, I);
    }, [
      n
    ]), k = B.useMemo(() => E(n) ? W(n) : F(), [
      n
    ]), { states: t, widgetStates: O, minValue: A, maxValue: u } = B.useMemo(() => {
      const v = [], b = {};
      let I = null, e = null;
      const g = s == null ? void 0 : s.type, T = (s == null ? void 0 : s.commonStates) || {}, w = Object.entries(T);
      if (g === "number" || g === "string" || g === "boolean" || g === "mixed") {
        for (let C = 1; C <= n.values_count; C++) {
          const S = n[`value${C}`], V = n[`alias${C}`], D = s == null ? void 0 : s.unit;
          if (S != null && /\S/.test(String(S))) {
            const x = w.find(([N]) => N === String(S)), X = x ? g === "number" ? Number(x[0]) : String(x[0]) : g === "number" ? Number(S) : S, Y = q({
              value: X,
              rawValue: S,
              index: C,
              rxData: n,
              oidObject: s,
              oidValue: p,
              widgetResolver: k,
              formatSize: y,
              getDynamicProperty: o,
              backgroundStyles: a,
              theme: f
            });
            v.push(Y);
            const H = String(x ? x[0] : S);
            b[H] = V && String(V).trim() !== "" ? V : `${S}${D}`;
          }
        }
        if (g === "number" && v.length) {
          const C = v.map((S) => typeof S.value == "number" ? S.value : NaN).filter((S) => !isNaN(S));
          C.length > 0 && (I = Math.min(...C), e = Math.max(...C));
        }
      }
      return {
        states: v,
        widgetStates: b,
        minValue: I,
        maxValue: e
      };
    }, [
      s,
      n,
      f,
      a,
      o,
      p,
      y,
      k
    ]), M = B.useMemo(() => {
      const v = (e) => e && String(e) !== "" ? String(e) : void 0, b = (e = "") => ({
        icon: i([
          {
            condition: !!n.noIcon,
            value: ""
          },
          {
            value: o("icon", "Active")
          },
          {
            value: o("iconSmall", "Active")
          },
          {
            value: o("icon", String(e))
          },
          {
            value: o("iconSmall", String(e))
          },
          {
            value: o("icon")
          },
          {
            value: o("iconSmall")
          }
        ]) ?? "",
        iconActive: i([
          {
            condition: !!n.noIcon,
            value: ""
          },
          {
            value: o("icon", String(e))
          },
          {
            value: o("iconSmall", String(e))
          }
        ]) ?? "",
        iconSizeCm: i([
          {
            condition: o("iconSize") === 0,
            value: "0px"
          },
          {
            condition: !!o("iconSize"),
            value: `calc(24px * ${o("iconSize")} / 100)`
          }
        ]) ?? "24px",
        iconSize: i([
          {
            condition: o("iconSize", "Active") === 0,
            value: "0px"
          },
          {
            condition: !!o("iconSize", "Active"),
            value: `calc(24px * ${o("iconSize", "Active")} / 100)`
          },
          {
            condition: o("iconSize", String(e)) === 0,
            value: "0px"
          },
          {
            condition: !!o("iconSize", String(e)),
            value: `calc(24px * ${o("iconSize", String(e))} / 100)`
          }
        ]) ?? "24px",
        iconSizeActive: i([
          {
            condition: o("iconSize", String(e)) === 0,
            value: "0px"
          },
          {
            condition: !!o("iconSize", String(e)),
            value: `calc(24px * ${o("iconSize", String(e))} / 100)`
          }
        ]) ?? "24px",
        iconSizeOnly: i([
          {
            condition: !!o("iconSize", String(e)) || o("iconSize", String(e)) === 0,
            value: `${o("iconSize", String(e))}%`
          }
        ]) ?? "100%",
        iconSizeActiveOnly: i([
          {
            value: o("iconSize", String(e))
          }
        ]) ?? void 0,
        forceColorMaskCm: i([
          {
            value: o("enableIconColorMask")
          }
        ]) ?? false,
        forceColorMask: i([
          {
            value: o("enableIconColorMask", "Active")
          },
          {
            value: o("enableIconColorMask", String(e))
          },
          {
            condition: !!o("enableIconColorMask", String(e)),
            value: o("enableIconColorMask")
          }
        ]) ?? false,
        forceColorMaskActive: i([
          {
            value: o("enableIconColorMask", String(e))
          }
        ]) ?? false,
        iconColor: i([
          {
            value: o("iconColor", "Active")
          },
          {
            value: o("iconColor", String(e))
          },
          {
            value: o("iconColor")
          }
        ]) ?? "",
        iconColorActive: i([
          {
            value: o("iconColor", String(e))
          }
        ]) ?? "",
        iconHover: i([
          {
            value: n.iconHover ? `${n.iconHover}%` : void 0
          }
        ]) ?? "",
        iconHoverActive: i([
          {
            value: o("iconHover", String(e)) ? `${o("iconHover", String(e))}%` : void 0
          }
        ]) ?? void 0,
        iconXOffsetCm: i([
          {
            value: o("iconXOffset")
          }
        ]) ?? "0px",
        iconYOffsetCm: i([
          {
            value: o("iconYOffset")
          }
        ]) ?? "0px",
        iconXOffset: i([
          {
            value: o("iconXOffset", "Active")
          },
          {
            value: o("iconXOffset", String(e))
          }
        ]) ?? "0px",
        iconYOffset: i([
          {
            value: o("iconYOffset", "Active")
          },
          {
            value: o("iconYOffset", String(e))
          }
        ]) ?? "0px",
        iconXOffsetActive: i([
          {
            condition: !o("iconXOffset", String(e)),
            value: "0px"
          },
          {
            value: o("iconXOffset", String(e))
          }
        ]) ?? "0px",
        iconYOffsetActive: i([
          {
            condition: !o("iconYOffset", String(e)),
            value: "0px"
          },
          {
            value: o("iconYOffset", String(e))
          }
        ]) ?? "0px",
        textColorActive: o("textColor", String(e)),
        textColorCm: i([
          {
            condition: typeof o("textColor") == "string",
            value: o("textColor")
          },
          {
            condition: typeof (z == null ? void 0 : z.color) == "string",
            value: z == null ? void 0 : z.color
          }
        ]) ?? "",
        textColor: i([
          {
            condition: typeof o("textColor", "Active") == "string",
            value: o("textColor", "Active")
          },
          {
            condition: typeof o("textColor", String(e)) == "string",
            value: o("textColor", String(e))
          },
          {
            condition: typeof o("textColor") == "string",
            value: o("textColor")
          },
          {
            condition: typeof (z == null ? void 0 : z.color) == "string",
            value: z == null ? void 0 : z.color
          }
        ]) ?? "",
        header: String(i([
          {
            value: v(o("header", "Active"))
          },
          {
            value: v(o("header", String(e)))
          },
          {
            value: v(o("header"))
          },
          {
            value: v(c)
          }
        ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
        headerSize: i([
          {
            condition: typeof o("headerSize", "Active") == "number",
            value: `${m(o("headerSize", "Active"))}`
          },
          {
            condition: typeof o("headerSize", String(e)) == "number",
            value: `${m(o("headerSize", String(e)))}`
          },
          {
            condition: typeof o("headerSize") == "number",
            value: `${m(o("headerSize"))}`
          },
          {
            condition: typeof (d == null ? void 0 : d["font-size"]) == "string",
            value: d == null ? void 0 : d["font-size"]
          }
        ]) ?? "0.875rem",
        footer: String(i([
          {
            value: v(o("footer", "Active"))
          },
          {
            value: v(o("footer", String(e)))
          },
          {
            value: v(o("footer"))
          }
        ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
        footerSize: i([
          {
            condition: typeof o("footerSize", "Active") == "number",
            value: `${m(o("footerSize", "Active"))}`
          },
          {
            condition: typeof o("footerSize", String(e)) == "number",
            value: `${m(o("footerSize", String(e)))}`
          },
          {
            condition: typeof o("footerSize") == "number",
            value: `${m(o("footerSize"))}`
          },
          {
            condition: typeof (d == null ? void 0 : d["font-size"]) == "string",
            value: d == null ? void 0 : d["font-size"]
          }
        ]) ?? "0.875rem",
        alias: String(o("alias", String(e)) || "").replace(/(\r\n|\n|\r)/gm, ""),
        value: (() => {
          const g = o("value", String(e));
          return g != null ? `${g}${(s == null ? void 0 : s.unit) !== void 0 ? s.unit : ""}` : void 0;
        })(),
        valueSize: i([
          {
            condition: typeof o("valueSize", "Active") == "number",
            value: `${m(o("valueSize", "Active"))}`
          },
          {
            condition: typeof o("valueSize", String(e)) == "number",
            value: `${m(o("valueSize", String(e)))}`
          },
          {
            condition: typeof o("valueSize") == "number",
            value: `${m(o("valueSize"))}`
          },
          {
            condition: typeof (d == null ? void 0 : d["font-size"]) == "string",
            value: d == null ? void 0 : d["font-size"]
          }
        ]) ?? "0.875rem",
        valueSizeActive: i([
          {
            value: typeof o("valueSize", String(e)) == "number" ? y(o("valueSize", String(e))) : null
          }
        ]) ?? null,
        backgroundColor: i([
          {
            value: n.backgroundColor && n.backgroundColor !== "" ? n.backgroundColor : void 0
          },
          {
            value: a == null ? void 0 : a["background-color"]
          },
          {
            value: ""
          }
        ]) ?? "",
        backgroundColorActive: o("backgroundColor", String(e)),
        background: i([
          {
            value: o("background", "Active")
          },
          {
            value: o("background", String(e))
          },
          {
            value: o("background")
          },
          {
            value: a == null ? void 0 : a.background
          }
        ]) ?? "",
        backgroundActive: o("background", String(e)),
        frameBackgroundColor: i([
          {
            value: n.frameBackgroundColor && n.frameBackgroundColor !== "" ? n.frameBackgroundColor : void 0
          },
          {
            value: a == null ? void 0 : a["background-color"]
          },
          {
            value: ""
          }
        ]) ?? "",
        frameBackgroundColorActive: o("frameBackgroundColor", String(e)),
        frameBackground: i([
          {
            value: o("frameBackground", "Active")
          },
          {
            value: o("frameBackground", String(e))
          },
          {
            value: o("frameBackground")
          },
          {
            value: a == null ? void 0 : a.background
          }
        ]) ?? "",
        frameBackgroundActive: o("frameBackground", String(e))
      });
      switch (s == null ? void 0 : s.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const e = t.findIndex((g) => String(g.value) === String(p));
          return e !== -1 ? ($(e + 1), b(String(e + 1))) : ($(void 0), b(""));
        }
        default:
          return b("");
      }
    }, [
      s,
      p,
      c,
      n,
      t,
      d,
      z,
      a,
      y,
      o
    ]);
    return {
      states: t,
      widgetStates: O,
      minValue: A,
      maxValue: u,
      data: M,
      activeIndex: h,
      setActiveIndex: $,
      oidValue: p
    };
  };
});
export {
  __tla,
  L as u
};
