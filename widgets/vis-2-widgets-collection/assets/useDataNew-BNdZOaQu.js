import { v as B, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { v as E, ab as F, O as K, ac as q, ad as Y, __tla as __tla_1 } from "./useData-2dnP1q4b.js";
let eo;
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
  function r(t) {
    for (const n of t) if (n.condition !== false && n.value !== void 0 && n.value !== null && !(typeof n.value == "string" && n.value.trim() === "")) return n.value;
  }
  function G(t) {
    return {
      markerIconSize: t.markerIconSize,
      markerTextColor: t.markerTextColor,
      markerTextSize: t.markerTextSize,
      markerIconColor: t.markerIconColor
    };
  }
  function J(t) {
    return {};
  }
  function L(t) {
    return "markerIconSize" in t || "markerTextColor" in t;
  }
  function Q(t) {
    const { value: n, rawValue: a, index: c, rxData: l, oidObject: S, oidValue: k, widgetResolver: f, formatSize: d, getDynamicProperty: e, backgroundStyles: u, theme: z } = t, b = n, o = a, i = S.unit || "", C = e("alias", String(c)), v = (x, V) => e(x, V), A = String(k) === String(b), y = L(f);
    return {
      value: b,
      valueSize: typeof v("valueSize", String(c)) == "number" ? d(v("valueSize", String(c))) : null,
      label: String(C && String(C).trim() !== "" ? C : `${o}${i}`).replace(/(\r\n|\n|\r)/gm, ""),
      alias: String(C && String(C).trim() !== "" ? C : `${o}${i}`).replace(/(\r\n|\n|\r)/gm, ""),
      fontSize: r([
        {
          condition: A && typeof l.valueSizeActive == "number",
          value: d(l.valueSizeActive)
        },
        {
          value: typeof v("valueSize", String(c)) == "number" ? d(v("valueSize", String(c))) : void 0
        },
        {
          condition: y && typeof f.markerTextSize == "number",
          value: d(f.markerTextSize)
        },
        {
          value: typeof l.valueSize == "number" ? d(l.valueSize) : void 0
        },
        {
          value: void 0
        }
      ]),
      textColor: r([
        {
          condition: A,
          value: l.textColorActive && l.textColorActive !== "" ? l.textColorActive : void 0
        },
        {
          value: v("textColor", String(c)),
          condition: v("textColor", String(c)) !== ""
        },
        {
          condition: y,
          value: f.markerTextColor && f.markerTextColor !== "" ? f.markerTextColor : void 0
        },
        {
          value: l.textColor && l.textColor !== "" ? l.textColor : void 0
        },
        {
          value: void 0
        }
      ]),
      icon: r([
        {
          value: v("icon", String(c)),
          condition: v("icon", String(c)) !== ""
        },
        {
          value: v("iconSmall", String(c)),
          condition: v("iconSmall", String(c)) !== ""
        },
        {
          value: l.icon && l.icon !== "" ? l.icon : void 0
        },
        {
          value: l.iconSmall && l.iconSmall !== "" ? l.iconSmall : void 0
        },
        {
          value: void 0
        }
      ]),
      iconSize: v("iconSize", String(c)),
      iconWidth: r([
        {
          condition: A,
          value: l.iconSizeActive
        },
        {
          value: v("iconSize", String(c))
        },
        {
          condition: y,
          value: f.markerIconSize
        },
        {
          value: l.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconHeight: r([
        {
          condition: A,
          value: l.iconSizeActive
        },
        {
          value: v("iconSize", String(c))
        },
        {
          condition: y,
          value: f.markerIconSize
        },
        {
          value: l.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconXOffset: (() => {
        const x = v("iconXOffset", String(c));
        return x && x !== "0px" ? x : "0px";
      })(),
      iconYOffset: (() => {
        const x = v("iconYOffset", String(c));
        return x && x !== "0px" ? x : "0px";
      })(),
      iconColor: r([
        {
          value: v("iconColor", String(c)),
          condition: v("iconColor", String(c)) !== ""
        },
        {
          condition: y,
          value: f.markerIconColor && f.markerIconColor !== "" ? f.markerIconColor : void 0
        },
        {
          value: l.iconColor && l.iconColor !== "" ? l.iconColor : void 0
        },
        {
          value: z.palette.primary.main
        }
      ]) ?? z.palette.primary.main,
      iconHover: (() => {
        const x = v("iconHover", String(c));
        return x ? `${x}%` : void 0;
      })(),
      forceColorMask: v("enableIconColorMask", String(c)),
      backgroundColor: r([
        {
          value: l.backgroundColor && l.backgroundColor !== "" ? l.backgroundColor : void 0
        },
        {
          value: u == null ? void 0 : u["background-color"],
          condition: (u == null ? void 0 : u["background-color"]) !== ""
        },
        {
          value: ""
        }
      ]) ?? "",
      backgroundColorActive: v("backgroundColor", String(c)),
      background: String(r([
        {
          value: l.background && l.background !== "" ? l.background : void 0
        },
        {
          value: u == null ? void 0 : u.background,
          condition: (u == null ? void 0 : u.background) !== ""
        },
        {
          value: ""
        }
      ]) ?? ""),
      backgroundActive: v("background", String(c)),
      frameBackgroundColor: r([
        {
          value: l.frameBackgroundColor && l.frameBackgroundColor !== "" ? l.frameBackgroundColor : void 0
        },
        {
          value: u == null ? void 0 : u["background-color"],
          condition: (u == null ? void 0 : u["background-color"]) !== ""
        },
        {
          value: ""
        }
      ]) ?? "",
      frameBackgroundColorActive: v("frameBackgroundColor", String(c)),
      frameBackground: String(r([
        {
          value: l.frameBackground && l.frameBackground !== "" ? l.frameBackground : void 0
        },
        {
          value: u == null ? void 0 : u.background,
          condition: (u == null ? void 0 : u.background) !== ""
        },
        {
          value: ""
        }
      ]) ?? ""),
      frameBackgroundActive: v("frameBackground", String(c))
    };
  }
  function U(t) {
    const { rxData: n, oidObject: a, oidName: c, theme: l, fontStyles: S, textStyles: k, backgroundStyles: f, formatSize: d, getDataValue: e, widgetResolver: u, isSlider: z } = t, b = (o) => o && String(o) !== "" ? String(o) : void 0;
    return {
      icon: (o, i) => r([
        {
          condition: !!n.noIcon,
          value: ""
        },
        {
          condition: i,
          value: e("icon", "Active")
        },
        {
          condition: i,
          value: e("iconSmall", "Active")
        },
        {
          value: e("icon", String(o))
        },
        {
          value: e("iconSmall", String(o))
        },
        {
          value: e("icon", "")
        },
        {
          value: e("iconSmall", "")
        }
      ]) ?? "",
      iconActive: (o, i) => i ? r([
        {
          condition: !!n.noIcon,
          value: ""
        },
        {
          value: e("icon", String(o))
        },
        {
          value: e("iconSmall", String(o))
        }
      ]) ?? "" : "",
      iconSizeCm: (o, i) => r([
        {
          condition: e("iconSize", "") === 0,
          value: "0px"
        },
        {
          condition: !!e("iconSize", ""),
          value: `calc(24px * ${e("iconSize", "")} / 100)`
        }
      ]) ?? "24px",
      iconSize: (o, i) => r([
        {
          condition: i && e("iconSize", "Active") === 0,
          value: "0px"
        },
        {
          condition: i && !!e("iconSize", "Active"),
          value: `calc(24px * ${e("iconSize", "Active")} / 100)`
        },
        {
          condition: e("iconSize", String(o)) === 0,
          value: "0px"
        },
        {
          condition: !!e("iconSize", String(o)),
          value: `calc(24px * ${e("iconSize", String(o))} / 100)`
        }
      ]) ?? "24px",
      iconSizeActive: (o, i) => i ? r([
        {
          condition: e("iconSize", String(o)) === 0,
          value: "0px"
        },
        {
          condition: !!e("iconSize", String(o)),
          value: `calc(24px * ${e("iconSize", String(o))} / 100)`
        }
      ]) ?? "24px" : "24px",
      iconSizeOnly: (o, i) => r([
        {
          condition: !!e("iconSize", String(o)) || e("iconSize", String(o)) === 0,
          value: `${e("iconSize", String(o))}%`
        }
      ]) ?? "100%",
      iconSizeActiveOnly: (o, i) => i ? r([
        {
          value: e("iconSize", String(o))
        }
      ]) ?? void 0 : void 0,
      iconWidth: (o, i) => r([
        {
          condition: i,
          value: n.iconSizeActive
        },
        {
          value: e("iconSize", String(o))
        },
        {
          condition: z,
          value: u.markerIconSize
        },
        {
          value: n.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconHeight: (o, i) => r([
        {
          condition: i,
          value: n.iconSizeActive
        },
        {
          value: e("iconSize", String(o))
        },
        {
          condition: z,
          value: u.markerIconSize
        },
        {
          value: n.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      forceColorMaskCm: (o, i) => r([
        {
          value: e("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMask: (o, i) => r([
        {
          condition: i,
          value: e("enableIconColorMask", "Active")
        },
        {
          value: e("enableIconColorMask", String(o))
        },
        {
          condition: !!e("enableIconColorMask", String(o)),
          value: e("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMaskActive: (o, i) => i ? r([
        {
          value: e("enableIconColorMask", String(o))
        }
      ]) ?? false : false,
      iconColor: (o, i) => r([
        {
          condition: i,
          value: e("iconColor", "Active")
        },
        {
          value: e("iconColor", String(o))
        },
        {
          value: e("iconColor", "")
        }
      ]) ?? l.palette.primary.main,
      iconColorActive: (o, i) => i ? r([
        {
          value: e("iconColor", String(o))
        }
      ]) ?? "" : "",
      iconHover: (o, i) => r([
        {
          value: n.iconHover ? `${n.iconHover}%` : void 0
        }
      ]) ?? "",
      iconHoverActive: (o, i) => i ? r([
        {
          value: e("iconHover", String(o)) ? `${e("iconHover", String(o))}%` : void 0
        }
      ]) ?? void 0 : void 0,
      iconXOffsetCm: (o, i) => r([
        {
          value: e("iconXOffset", "")
        }
      ]) ?? "0px",
      iconYOffsetCm: (o, i) => r([
        {
          value: e("iconYOffset", "")
        }
      ]) ?? "0px",
      iconXOffset: (o, i) => r([
        {
          condition: i,
          value: e("iconXOffset", "Active")
        },
        {
          value: e("iconXOffset", String(o))
        }
      ]) ?? "0px",
      iconYOffset: (o, i) => r([
        {
          condition: i,
          value: e("iconYOffset", "Active")
        },
        {
          value: e("iconYOffset", String(o))
        }
      ]) ?? "0px",
      iconXOffsetActive: (o, i) => i ? r([
        {
          condition: !e("iconXOffset", String(o)),
          value: "0px"
        },
        {
          value: e("iconXOffset", String(o))
        }
      ]) ?? "0px" : "0px",
      iconYOffsetActive: (o, i) => i ? r([
        {
          condition: !e("iconYOffset", String(o)),
          value: "0px"
        },
        {
          value: e("iconYOffset", String(o))
        }
      ]) ?? "0px" : "0px",
      textColorActive: (o, i) => i ? r([
        {
          value: e("textColor", String(o)),
          condition: e("textColor", String(o)) !== ""
        },
        {
          condition: z,
          value: u.markerTextColor && u.markerTextColor !== "" ? u.markerTextColor : void 0
        },
        {
          value: n.textColor && n.textColor !== "" ? n.textColor : void 0
        }
      ]) ?? void 0 : void 0,
      textColorCm: (o, i) => r([
        {
          condition: typeof e("textColor", "") == "string",
          value: e("textColor", "")
        },
        {
          condition: typeof (k == null ? void 0 : k.color) == "string",
          value: k == null ? void 0 : k.color
        }
      ]) ?? "",
      textColor: (o, i) => r([
        {
          condition: i && typeof e("textColor", "Active") == "string",
          value: e("textColor", "Active")
        },
        {
          condition: typeof e("textColor", String(o)) == "string",
          value: e("textColor", String(o))
        },
        {
          condition: z,
          value: u.markerTextColor && u.markerTextColor !== "" ? u.markerTextColor : void 0
        },
        {
          condition: typeof e("textColor", "") == "string",
          value: e("textColor", "")
        },
        {
          condition: typeof (k == null ? void 0 : k.color) == "string",
          value: k == null ? void 0 : k.color
        }
      ]) ?? "",
      fontSize: (o, i) => r([
        {
          condition: i && typeof n.valueSizeActive == "number",
          value: d(n.valueSizeActive)
        },
        {
          value: typeof e("valueSize", String(o)) == "number" ? d(e("valueSize", String(o))) : void 0
        },
        {
          condition: z && typeof u.markerTextSize == "number",
          value: d(u.markerTextSize)
        },
        {
          value: typeof n.valueSize == "number" ? d(n.valueSize) : void 0
        },
        {
          condition: typeof (S == null ? void 0 : S["font-size"]) == "string",
          value: S == null ? void 0 : S["font-size"]
        }
      ]) ?? null,
      headerSize: (o, i) => r([
        {
          condition: i && typeof e("headerSize", "Active") == "number",
          value: `${d(e("headerSize", "Active"))}`
        },
        {
          condition: typeof e("headerSize", String(o)) == "number",
          value: `${d(e("headerSize", String(o)))}`
        },
        {
          condition: typeof e("headerSize", "") == "number",
          value: `${d(e("headerSize", ""))}`
        },
        {
          condition: typeof (S == null ? void 0 : S["font-size"]) == "string",
          value: S == null ? void 0 : S["font-size"]
        }
      ]) ?? "0.875rem",
      footerSize: (o, i) => r([
        {
          condition: i && typeof e("footerSize", "Active") == "number",
          value: `${d(e("footerSize", "Active"))}`
        },
        {
          condition: typeof e("footerSize", String(o)) == "number",
          value: `${d(e("footerSize", String(o)))}`
        },
        {
          condition: typeof e("footerSize", "") == "number",
          value: `${d(e("footerSize", ""))}`
        },
        {
          condition: typeof (S == null ? void 0 : S["font-size"]) == "string",
          value: S == null ? void 0 : S["font-size"]
        }
      ]) ?? "0.875rem",
      valueSize: (o, i) => r([
        {
          condition: i && typeof e("valueSize", "Active") == "number",
          value: `${d(e("valueSize", "Active"))}`
        },
        {
          condition: typeof e("valueSize", String(o)) == "number",
          value: `${d(e("valueSize", String(o)))}`
        },
        {
          condition: typeof e("valueSize", "") == "number",
          value: `${d(e("valueSize", ""))}`
        },
        {
          condition: typeof (S == null ? void 0 : S["font-size"]) == "string",
          value: S == null ? void 0 : S["font-size"]
        }
      ]) ?? "0.875rem",
      valueSizeActive: (o, i) => i ? r([
        {
          value: typeof e("valueSize", String(o)) == "number" ? d(e("valueSize", String(o))) : null
        }
      ]) ?? null : null,
      header: (o, i) => String(r([
        {
          condition: i,
          value: b(e("header", "Active"))
        },
        {
          value: b(e("header", String(o)))
        },
        {
          value: b(e("header", ""))
        },
        {
          value: b(c)
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      footer: (o, i) => String(r([
        {
          condition: i,
          value: b(e("footer", "Active"))
        },
        {
          value: b(e("footer", String(o)))
        },
        {
          value: b(e("footer", ""))
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      alias: (o, i) => String(e("alias", String(o)) || "").replace(/(\r\n|\n|\r)/gm, ""),
      value: (o, i) => {
        const C = e("value", String(o));
        return C != null ? `${C}${(a == null ? void 0 : a.unit) !== void 0 ? a.unit : ""}` : void 0;
      },
      backgroundColor: (o, i) => r([
        {
          value: n.backgroundColor && n.backgroundColor !== "" ? n.backgroundColor : void 0
        },
        {
          value: f == null ? void 0 : f["background-color"]
        },
        {
          value: ""
        }
      ]) ?? "",
      backgroundColorActive: (o, i) => i ? e("backgroundColor", String(o)) : void 0,
      background: (o, i) => r([
        {
          condition: i,
          value: e("background", "Active")
        },
        {
          value: e("background", String(o))
        },
        {
          value: e("background", "")
        },
        {
          value: f == null ? void 0 : f.background
        }
      ]) ?? "",
      backgroundActive: (o, i) => i ? e("background", String(o)) : void 0,
      frameBackgroundColor: (o, i) => r([
        {
          value: n.frameBackgroundColor && n.frameBackgroundColor !== "" ? n.frameBackgroundColor : void 0
        },
        {
          value: f == null ? void 0 : f["background-color"]
        },
        {
          value: ""
        }
      ]) ?? "",
      frameBackgroundColorActive: (o, i) => i ? e("frameBackgroundColor", String(o)) : void 0,
      frameBackground: (o, i) => r([
        {
          condition: i,
          value: e("frameBackground", "Active")
        },
        {
          value: e("frameBackground", String(o))
        },
        {
          value: e("frameBackground", "")
        },
        {
          value: f == null ? void 0 : f.background
        }
      ]) ?? "",
      frameBackgroundActive: (o, i) => i ? e("frameBackground", String(o)) : void 0,
      markerIconSize: (o, i) => z ? u.markerIconSize : void 0,
      markerTextColor: (o, i) => z ? u.markerTextColor : void 0,
      markerTextSize: (o, i) => z ? u.markerTextSize : void 0,
      markerIconColor: (o, i) => z ? u.markerIconColor : void 0
    };
  }
  function Z(t = "", n = false, a) {
    return {
      icon: a.icon(t, n),
      iconActive: a.iconActive(t, n),
      iconSizeCm: a.iconSizeCm(t, n),
      iconSize: a.iconSize(t, n),
      iconSizeActive: a.iconSizeActive(t, n),
      iconSizeOnly: a.iconSizeOnly(t, n),
      iconWidth: a.iconWidth(t, n),
      iconHeight: a.iconHeight(t, n),
      iconSizeActiveOnly: a.iconSizeActiveOnly(t, n),
      forceColorMaskCm: a.forceColorMaskCm(t, n),
      forceColorMask: a.forceColorMask(t, n),
      forceColorMaskActive: a.forceColorMaskActive(t, n),
      iconColor: a.iconColor(t, n),
      iconColorActive: a.iconColorActive(t, n),
      iconHover: a.iconHover(t, n),
      iconHoverActive: a.iconHoverActive(t, n),
      iconXOffsetCm: a.iconXOffsetCm(t, n),
      iconYOffsetCm: a.iconYOffsetCm(t, n),
      iconXOffset: a.iconXOffset(t, n),
      iconYOffset: a.iconYOffset(t, n),
      iconXOffsetActive: a.iconXOffsetActive(t, n),
      iconYOffsetActive: a.iconYOffsetActive(t, n),
      textColorActive: a.textColorActive(t, n),
      textColorCm: a.textColorCm(t, n),
      textColor: a.textColor(t, n),
      header: a.header(t, n),
      headerSize: a.headerSize(t, n),
      footer: a.footer(t, n),
      footerSize: a.footerSize(t, n),
      alias: a.alias(t, n),
      value: a.value(t, n),
      valueSize: a.valueSize(t, n),
      valueSizeActive: a.valueSizeActive(t, n),
      backgroundColor: a.backgroundColor(t, n),
      backgroundColorActive: a.backgroundColorActive(t, n),
      background: a.background(t, n),
      backgroundActive: a.backgroundActive(t, n),
      frameBackgroundColor: a.frameBackgroundColor(t, n),
      frameBackgroundColorActive: a.frameBackgroundColorActive(t, n),
      frameBackground: a.frameBackground(t, n),
      frameBackgroundActive: a.frameBackgroundActive(t, n)
    };
  }
  eo = function(t) {
    const { theme: n, widget: a, widget: { data: c }, getPropertyValue: l } = B.useContext(E), S = c[`${t}Object`], k = l(t), f = S == null ? void 0 : S.name, { fontStyles: d, textStyles: e, backgroundStyles: u } = F(a.style), [z, b] = B.useState(), o = B.useCallback(K, []), i = B.useCallback((O, m = "") => {
      const I = `${O}${m}`;
      return q(c, I);
    }, [
      c
    ]), C = B.useMemo(() => Y(c) ? G(c) : J(), [
      c
    ]), v = B.useMemo(() => U({
      rxData: c,
      oidObject: S,
      oidName: f,
      theme: n,
      fontStyles: d,
      textStyles: e,
      backgroundStyles: u,
      formatSize: o,
      getDataValue: i,
      widgetResolver: C,
      isSlider: Y(c)
    }), [
      c,
      S,
      f,
      n,
      d,
      e,
      u,
      o,
      i,
      C
    ]), A = B.useCallback((O = "", m = false) => Z(O, m, v), [
      v
    ]), { states: y, widgetStates: x, minValue: V, maxValue: w } = B.useMemo(() => {
      const O = [], m = {};
      let I = null, M = null;
      const _ = S == null ? void 0 : S.type, $ = (S == null ? void 0 : S.commonStates) || {}, T = Object.entries($);
      if (_ === "number" || _ === "string" || _ === "boolean" || _ === "mixed") {
        for (let h = 1; h <= c.values_count; h++) {
          const s = c[`value${h}`], g = c[`alias${h}`], X = S == null ? void 0 : S.unit;
          if (s != null && /\S/.test(String(s))) {
            const H = T.find(([j]) => j === String(s)), p = H ? _ === "number" ? Number(H[0]) : String(H[0]) : _ === "number" ? Number(s) : s, P = Q({
              value: p,
              rawValue: s,
              index: h,
              rxData: c,
              oidObject: S,
              oidValue: k,
              widgetResolver: C,
              formatSize: o,
              getDynamicProperty: i,
              backgroundStyles: u,
              theme: n
            });
            O.push(P);
            const W = String(H ? H[0] : s);
            m[W] = g && String(g).trim() !== "" ? g : `${s}${X}`;
          }
        }
        if (_ === "number" && O.length) {
          const h = O.map((s) => typeof s.value == "number" ? s.value : NaN).filter((s) => !isNaN(s));
          h.length > 0 && (I = Math.min(...h), M = Math.max(...h));
        }
      }
      return {
        states: O,
        widgetStates: m,
        minValue: I,
        maxValue: M
      };
    }, [
      S,
      c,
      n,
      u,
      i,
      k,
      o,
      C
    ]), D = B.useMemo(() => {
      switch (S == null ? void 0 : S.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const m = y.findIndex((I) => String(I.value) === String(k));
          return m !== -1 ? (b(m + 1), A(m + 1, true)) : (b(void 0), A("", true));
        }
        default:
          return A("", true);
      }
    }, [
      S,
      k,
      y,
      A
    ]), N = B.useMemo(() => {
      const O = [], m = S == null ? void 0 : S.type, I = (S == null ? void 0 : S.commonStates) || {}, M = Object.entries(I);
      if (m === "number" || m === "string" || m === "boolean" || m === "mixed") for (let _ = 1; _ <= c.values_count; _++) {
        const $ = i("value", String(_));
        if ($ === void 0 || !/\S/.test(String($))) continue;
        const T = M.find(([X]) => X === String($)), h = T ? m === "number" ? Number(T[0]) : String(T[0]) : m === "number" ? Number($) : $, s = String(k) === String(h), g = A(_, s);
        O.push({
          value: h,
          label: g.alias || String(g.value),
          alias: g.alias,
          fontSize: g.valueSize,
          textColor: g.textColor,
          icon: g.icon,
          iconSize: g.iconSize,
          iconWidth: g.iconWidth,
          iconHeight: g.iconHeight,
          iconXOffset: g.iconXOffset,
          iconYOffset: g.iconYOffset,
          iconColor: g.iconColor,
          iconHover: g.iconHover,
          forceColorMask: g.forceColorMask,
          valueSize: g.valueSize,
          background: g.background,
          frameBackground: g.frameBackground
        });
      }
      return O;
    }, [
      S == null ? void 0 : S.type,
      S == null ? void 0 : S.commonStates,
      c.values_count,
      i,
      k,
      A
    ]);
    return {
      states: y,
      widgetStates: x,
      minValue: V,
      maxValue: w,
      data: D,
      activeIndex: z,
      setActiveIndex: b,
      oidValue: k,
      statesNew: N,
      resolveStyleData: A
    };
  };
});
export {
  __tla,
  eo as u
};
