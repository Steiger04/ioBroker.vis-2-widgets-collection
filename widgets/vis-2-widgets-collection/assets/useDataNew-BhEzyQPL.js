import { v as B, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { v as E, ab as F, O as K, ac as q, ad as Y, __tla as __tla_1 } from "./useData-ySXy5KMl.js";
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
  function c(m) {
    for (const u of m) if (u.condition !== false && u.value !== void 0 && u.value !== null && !(typeof u.value == "string" && u.value.trim() === "")) return u.value;
  }
  function G(m) {
    return {
      markerIconSize: m.markerIconSize,
      markerTextColor: m.markerTextColor,
      markerTextSize: m.markerTextSize,
      markerIconColor: m.markerIconColor
    };
  }
  function J(m) {
    return {};
  }
  function L(m) {
    return "markerIconSize" in m || "markerTextColor" in m;
  }
  function Q(m) {
    const { value: u, rawValue: I, index: l, rxData: a, oidObject: d, oidValue: z, widgetResolver: v, formatSize: e, getDynamicProperty: f, backgroundStyles: S, theme: b } = m, o = u, i = I, y = d.unit || "", O = f("alias", String(l)), n = (k, H) => f(k, H), A = String(z) === String(o), _ = L(v);
    return {
      value: o,
      valueSize: typeof n("valueSize", String(l)) == "number" ? e(n("valueSize", String(l))) : null,
      label: String(O && String(O).trim() !== "" ? O : `${i}${y}`).replace(/(\r\n|\n|\r)/gm, ""),
      alias: String(O && String(O).trim() !== "" ? O : `${i}${y}`).replace(/(\r\n|\n|\r)/gm, ""),
      fontSize: c([
        {
          condition: A && typeof a.valueSizeActive == "number",
          value: e(a.valueSizeActive)
        },
        {
          value: typeof n("valueSize", String(l)) == "number" ? e(n("valueSize", String(l))) : void 0
        },
        {
          condition: _ && typeof v.markerTextSize == "number",
          value: e(v.markerTextSize)
        },
        {
          value: typeof a.valueSize == "number" ? e(a.valueSize) : void 0
        },
        {
          value: void 0
        }
      ]),
      textColor: c([
        {
          condition: A,
          value: a.textColorActive && a.textColorActive !== "" ? a.textColorActive : void 0
        },
        {
          value: n("textColor", String(l)),
          condition: n("textColor", String(l)) !== ""
        },
        {
          condition: _,
          value: v.markerTextColor && v.markerTextColor !== "" ? v.markerTextColor : void 0
        },
        {
          value: a.textColor && a.textColor !== "" ? a.textColor : void 0
        },
        {
          value: void 0
        }
      ]),
      icon: c([
        {
          value: n("icon", String(l)),
          condition: n("icon", String(l)) !== ""
        },
        {
          value: n("iconSmall", String(l)),
          condition: n("iconSmall", String(l)) !== ""
        },
        {
          value: a.icon && a.icon !== "" ? a.icon : void 0
        },
        {
          value: a.iconSmall && a.iconSmall !== "" ? a.iconSmall : void 0
        },
        {
          value: void 0
        }
      ]),
      iconSize: n("iconSize", String(l)),
      iconWidth: c([
        {
          condition: A,
          value: a.iconSizeActive
        },
        {
          value: n("iconSize", String(l))
        },
        {
          condition: _,
          value: v.markerIconSize
        },
        {
          value: a.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconHeight: c([
        {
          condition: A,
          value: a.iconSizeActive
        },
        {
          value: n("iconSize", String(l))
        },
        {
          condition: _,
          value: v.markerIconSize
        },
        {
          value: a.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconXOffset: (() => {
        const k = n("iconXOffset", String(l));
        return k && k !== "0px" ? k : "0px";
      })(),
      iconYOffset: (() => {
        const k = n("iconYOffset", String(l));
        return k && k !== "0px" ? k : "0px";
      })(),
      iconColor: c([
        {
          value: n("iconColor", String(l)),
          condition: n("iconColor", String(l)) !== ""
        },
        {
          condition: _,
          value: v.markerIconColor && v.markerIconColor !== "" ? v.markerIconColor : void 0
        },
        {
          value: a.iconColor && a.iconColor !== "" ? a.iconColor : void 0
        },
        {
          value: b.palette.primary.main
        }
      ]) ?? b.palette.primary.main,
      iconHover: (() => {
        const k = n("iconHover", String(l));
        return k ? `${k}%` : void 0;
      })(),
      forceColorMask: n("enableIconColorMask", String(l)),
      backgroundColor: c([
        {
          value: a.backgroundColor && a.backgroundColor !== "" ? a.backgroundColor : void 0
        },
        {
          value: S == null ? void 0 : S["background-color"],
          condition: (S == null ? void 0 : S["background-color"]) !== ""
        },
        {
          value: ""
        }
      ]) ?? "",
      backgroundColorActive: n("backgroundColor", String(l)),
      background: String(c([
        {
          value: a.background && a.background !== "" ? a.background : void 0
        },
        {
          value: S == null ? void 0 : S.background,
          condition: (S == null ? void 0 : S.background) !== ""
        },
        {
          value: ""
        }
      ]) ?? ""),
      backgroundActive: n("background", String(l)),
      frameBackgroundColor: c([
        {
          value: a.frameBackgroundColor && a.frameBackgroundColor !== "" ? a.frameBackgroundColor : void 0
        },
        {
          value: S == null ? void 0 : S["background-color"],
          condition: (S == null ? void 0 : S["background-color"]) !== ""
        },
        {
          value: ""
        }
      ]) ?? "",
      frameBackgroundColorActive: n("frameBackgroundColor", String(l)),
      frameBackground: String(c([
        {
          value: a.frameBackground && a.frameBackground !== "" ? a.frameBackground : void 0
        },
        {
          value: S == null ? void 0 : S.background,
          condition: (S == null ? void 0 : S.background) !== ""
        },
        {
          value: ""
        }
      ]) ?? ""),
      frameBackgroundActive: n("frameBackground", String(l))
    };
  }
  function U(m) {
    const { rxData: u, oidObject: I, oidName: l, fontStyles: a, textStyles: d, backgroundStyles: z, formatSize: v, getDataValue: e, widgetResolver: f, isSlider: S } = m, b = (o) => o && String(o) !== "" ? String(o) : void 0;
    return {
      icon: (o, i) => c([
        {
          condition: !!u.noIcon,
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
      iconActive: (o, i) => i ? c([
        {
          condition: !!u.noIcon,
          value: ""
        },
        {
          value: e("icon", String(o))
        },
        {
          value: e("iconSmall", String(o))
        }
      ]) ?? "" : "",
      iconSizeCm: (o, i) => c([
        {
          condition: e("iconSize", "") === 0,
          value: "0px"
        },
        {
          condition: !!e("iconSize", ""),
          value: `calc(24px * ${e("iconSize", "")} / 100)`
        }
      ]) ?? "24px",
      iconSize: (o, i) => c([
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
      iconSizeActive: (o, i) => i ? c([
        {
          condition: e("iconSize", String(o)) === 0,
          value: "0px"
        },
        {
          condition: !!e("iconSize", String(o)),
          value: `calc(24px * ${e("iconSize", String(o))} / 100)`
        }
      ]) ?? "24px" : "24px",
      iconSizeOnly: (o, i) => c([
        {
          condition: !!e("iconSize", String(o)) || e("iconSize", String(o)) === 0,
          value: `${e("iconSize", String(o))}%`
        }
      ]) ?? "100%",
      iconSizeActiveOnly: (o, i) => i ? c([
        {
          value: e("iconSize", String(o))
        }
      ]) ?? void 0 : void 0,
      iconWidth: (o, i) => c([
        {
          condition: i,
          value: u.iconSizeActive
        },
        {
          value: e("iconSize", String(o))
        },
        {
          condition: S,
          value: f.markerIconSize
        },
        {
          value: u.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconHeight: (o, i) => c([
        {
          condition: i,
          value: u.iconSizeActive
        },
        {
          value: e("iconSize", String(o))
        },
        {
          condition: S,
          value: f.markerIconSize
        },
        {
          value: u.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      forceColorMaskCm: (o, i) => c([
        {
          value: e("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMask: (o, i) => c([
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
      forceColorMaskActive: (o, i) => i ? c([
        {
          value: e("enableIconColorMask", String(o))
        }
      ]) ?? false : false,
      iconColor: (o, i) => c([
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
      ]) ?? "",
      iconColorActive: (o, i) => i ? c([
        {
          value: e("iconColor", String(o))
        }
      ]) ?? "" : "",
      iconHover: (o, i) => c([
        {
          value: u.iconHover ? `${u.iconHover}%` : void 0
        }
      ]) ?? "",
      iconHoverActive: (o, i) => i ? c([
        {
          value: e("iconHover", String(o)) ? `${e("iconHover", String(o))}%` : void 0
        }
      ]) ?? void 0 : void 0,
      iconXOffsetCm: (o, i) => c([
        {
          value: e("iconXOffset", "")
        }
      ]) ?? "0px",
      iconYOffsetCm: (o, i) => c([
        {
          value: e("iconYOffset", "")
        }
      ]) ?? "0px",
      iconXOffset: (o, i) => c([
        {
          condition: i,
          value: e("iconXOffset", "Active")
        },
        {
          value: e("iconXOffset", String(o))
        }
      ]) ?? "0px",
      iconYOffset: (o, i) => c([
        {
          condition: i,
          value: e("iconYOffset", "Active")
        },
        {
          value: e("iconYOffset", String(o))
        }
      ]) ?? "0px",
      iconXOffsetActive: (o, i) => i ? c([
        {
          condition: !e("iconXOffset", String(o)),
          value: "0px"
        },
        {
          value: e("iconXOffset", String(o))
        }
      ]) ?? "0px" : "0px",
      iconYOffsetActive: (o, i) => i ? c([
        {
          condition: !e("iconYOffset", String(o)),
          value: "0px"
        },
        {
          value: e("iconYOffset", String(o))
        }
      ]) ?? "0px" : "0px",
      textColorActive: (o, i) => i ? c([
        {
          value: e("textColor", String(o)),
          condition: e("textColor", String(o)) !== ""
        },
        {
          condition: S,
          value: f.markerTextColor && f.markerTextColor !== "" ? f.markerTextColor : void 0
        },
        {
          value: u.textColor && u.textColor !== "" ? u.textColor : void 0
        }
      ]) ?? void 0 : void 0,
      textColorCm: (o, i) => c([
        {
          condition: typeof e("textColor", "") == "string",
          value: e("textColor", "")
        },
        {
          condition: typeof (d == null ? void 0 : d.color) == "string",
          value: d == null ? void 0 : d.color
        }
      ]) ?? "",
      textColor: (o, i) => c([
        {
          condition: i && typeof e("textColor", "Active") == "string",
          value: e("textColor", "Active")
        },
        {
          condition: typeof e("textColor", String(o)) == "string",
          value: e("textColor", String(o))
        },
        {
          condition: S,
          value: f.markerTextColor && f.markerTextColor !== "" ? f.markerTextColor : void 0
        },
        {
          condition: typeof e("textColor", "") == "string",
          value: e("textColor", "")
        },
        {
          condition: typeof (d == null ? void 0 : d.color) == "string",
          value: d == null ? void 0 : d.color
        }
      ]) ?? "",
      fontSize: (o, i) => c([
        {
          condition: i && typeof u.valueSizeActive == "number",
          value: v(u.valueSizeActive)
        },
        {
          value: typeof e("valueSize", String(o)) == "number" ? v(e("valueSize", String(o))) : void 0
        },
        {
          condition: S && typeof f.markerTextSize == "number",
          value: v(f.markerTextSize)
        },
        {
          value: typeof u.valueSize == "number" ? v(u.valueSize) : void 0
        },
        {
          condition: typeof (a == null ? void 0 : a["font-size"]) == "string",
          value: a == null ? void 0 : a["font-size"]
        }
      ]) ?? null,
      headerSize: (o, i) => c([
        {
          condition: i && typeof e("headerSize", "Active") == "number",
          value: `${v(e("headerSize", "Active"))}`
        },
        {
          condition: typeof e("headerSize", String(o)) == "number",
          value: `${v(e("headerSize", String(o)))}`
        },
        {
          condition: typeof e("headerSize", "") == "number",
          value: `${v(e("headerSize", ""))}`
        },
        {
          condition: typeof (a == null ? void 0 : a["font-size"]) == "string",
          value: a == null ? void 0 : a["font-size"]
        }
      ]) ?? "0.875rem",
      footerSize: (o, i) => c([
        {
          condition: i && typeof e("footerSize", "Active") == "number",
          value: `${v(e("footerSize", "Active"))}`
        },
        {
          condition: typeof e("footerSize", String(o)) == "number",
          value: `${v(e("footerSize", String(o)))}`
        },
        {
          condition: typeof e("footerSize", "") == "number",
          value: `${v(e("footerSize", ""))}`
        },
        {
          condition: typeof (a == null ? void 0 : a["font-size"]) == "string",
          value: a == null ? void 0 : a["font-size"]
        }
      ]) ?? "0.875rem",
      valueSize: (o, i) => c([
        {
          condition: i && typeof e("valueSize", "Active") == "number",
          value: `${v(e("valueSize", "Active"))}`
        },
        {
          condition: typeof e("valueSize", String(o)) == "number",
          value: `${v(e("valueSize", String(o)))}`
        },
        {
          condition: typeof e("valueSize", "") == "number",
          value: `${v(e("valueSize", ""))}`
        },
        {
          condition: typeof (a == null ? void 0 : a["font-size"]) == "string",
          value: a == null ? void 0 : a["font-size"]
        }
      ]) ?? "0.875rem",
      valueSizeActive: (o, i) => i ? c([
        {
          value: typeof e("valueSize", String(o)) == "number" ? v(e("valueSize", String(o))) : null
        }
      ]) ?? null : null,
      header: (o, i) => String(c([
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
          value: b(l)
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      footer: (o, i) => String(c([
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
        const y = e("value", String(o));
        return y != null ? `${y}${(I == null ? void 0 : I.unit) !== void 0 ? I.unit : ""}` : void 0;
      },
      backgroundColor: (o, i) => c([
        {
          value: u.backgroundColor && u.backgroundColor !== "" ? u.backgroundColor : void 0
        },
        {
          value: z == null ? void 0 : z["background-color"]
        },
        {
          value: ""
        }
      ]) ?? "",
      backgroundColorActive: (o, i) => i ? e("backgroundColor", String(o)) : void 0,
      background: (o, i) => c([
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
          value: z == null ? void 0 : z.background
        }
      ]) ?? "",
      backgroundActive: (o, i) => i ? e("background", String(o)) : void 0,
      frameBackgroundColor: (o, i) => c([
        {
          value: u.frameBackgroundColor && u.frameBackgroundColor !== "" ? u.frameBackgroundColor : void 0
        },
        {
          value: z == null ? void 0 : z["background-color"]
        },
        {
          value: ""
        }
      ]) ?? "",
      frameBackgroundColorActive: (o, i) => i ? e("frameBackgroundColor", String(o)) : void 0,
      frameBackground: (o, i) => c([
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
          value: z == null ? void 0 : z.background
        }
      ]) ?? "",
      frameBackgroundActive: (o, i) => i ? e("frameBackground", String(o)) : void 0,
      markerIconSize: (o, i) => S ? f.markerIconSize : void 0,
      markerTextColor: (o, i) => S ? f.markerTextColor : void 0,
      markerTextSize: (o, i) => S ? f.markerTextSize : void 0,
      markerIconColor: (o, i) => S ? f.markerIconColor : void 0
    };
  }
  eo = function(m) {
    const { theme: u, widget: I, widget: { data: l }, getPropertyValue: a } = B.useContext(E), d = l[`${m}Object`], z = a(m), v = d == null ? void 0 : d.name, { fontStyles: e, textStyles: f, backgroundStyles: S } = F(I.style), [b, o] = B.useState(), i = B.useCallback(K, []), y = B.useCallback((t, r = "") => {
      const x = `${t}${r}`;
      return q(l, x);
    }, [
      l
    ]), O = B.useMemo(() => Y(l) ? G(l) : J(), [
      l
    ]), n = B.useMemo(() => U({
      rxData: l,
      oidObject: d,
      oidName: v,
      fontStyles: e,
      textStyles: f,
      backgroundStyles: S,
      formatSize: i,
      getDataValue: y,
      widgetResolver: O,
      isSlider: Y(l)
    }), [
      l,
      d,
      v,
      u,
      e,
      f,
      S,
      i,
      y,
      O
    ]), A = B.useCallback((t = "", r = false) => ({
      icon: n.icon(t, r),
      iconActive: n.iconActive(t, r),
      iconSizeCm: n.iconSizeCm(t, r),
      iconSize: n.iconSize(t, r),
      iconSizeActive: n.iconSizeActive(t, r),
      iconSizeOnly: n.iconSizeOnly(t, r),
      iconSizeActiveOnly: n.iconSizeActiveOnly(t, r),
      forceColorMaskCm: n.forceColorMaskCm(t, r),
      forceColorMask: n.forceColorMask(t, r),
      forceColorMaskActive: n.forceColorMaskActive(t, r),
      iconColor: n.iconColor(t, r),
      iconColorActive: n.iconColorActive(t, r),
      iconHover: n.iconHover(t, r),
      iconHoverActive: n.iconHoverActive(t, r),
      iconXOffsetCm: n.iconXOffsetCm(t, r),
      iconYOffsetCm: n.iconYOffsetCm(t, r),
      iconXOffset: n.iconXOffset(t, r),
      iconYOffset: n.iconYOffset(t, r),
      iconXOffsetActive: n.iconXOffsetActive(t, r),
      iconYOffsetActive: n.iconYOffsetActive(t, r),
      textColorActive: n.textColorActive(t, r),
      textColorCm: n.textColorCm(t, r),
      textColor: n.textColor(t, r),
      header: n.header(t, r),
      headerSize: n.headerSize(t, r),
      footer: n.footer(t, r),
      footerSize: n.footerSize(t, r),
      alias: n.alias(t, r),
      value: n.value(t, r),
      valueSize: n.valueSize(t, r),
      valueSizeActive: n.valueSizeActive(t, r),
      backgroundColor: n.backgroundColor(t, r),
      backgroundColorActive: n.backgroundColorActive(t, r),
      background: n.background(t, r),
      backgroundActive: n.backgroundActive(t, r),
      frameBackgroundColor: n.frameBackgroundColor(t, r),
      frameBackgroundColorActive: n.frameBackgroundColorActive(t, r),
      frameBackground: n.frameBackground(t, r),
      frameBackgroundActive: n.frameBackgroundActive(t, r)
    }), [
      n
    ]), _ = B.useMemo(() => (t, r) => ({
      alias: n.alias(t, r),
      value: n.value(t, r),
      fontSize: n.fontSize(t, r),
      valueSize: n.valueSize(t, r),
      textColor: n.textColor(t, r),
      icon: n.icon(t, r),
      iconSize: n.iconSize(t, r),
      iconWidth: n.iconWidth(t, r),
      iconHeight: n.iconHeight(t, r),
      iconXOffset: n.iconXOffset(t, r),
      iconYOffset: n.iconYOffset(t, r),
      iconColor: n.iconColor(t, r),
      iconHover: n.iconHover(t, r),
      forceColorMask: n.forceColorMask(t, r),
      backgroundColor: n.backgroundColor(t, r),
      background: n.background(t, r),
      frameBackgroundColor: n.frameBackgroundColor(t, r),
      frameBackground: n.frameBackground(t, r)
    }), [
      n
    ]), { states: k, widgetStates: H, minValue: V, maxValue: w } = B.useMemo(() => {
      const t = [], r = {};
      let x = null, $ = null;
      const C = d == null ? void 0 : d.type, h = (d == null ? void 0 : d.commonStates) || {}, M = Object.entries(h);
      if (C === "number" || C === "string" || C === "boolean" || C === "mixed") {
        for (let p = 1; p <= l.values_count; p++) {
          const s = l[`value${p}`], g = l[`alias${p}`], X = d == null ? void 0 : d.unit;
          if (s != null && /\S/.test(String(s))) {
            const T = M.find(([j]) => j === String(s)), R = T ? C === "number" ? Number(T[0]) : String(T[0]) : C === "number" ? Number(s) : s, P = Q({
              value: R,
              rawValue: s,
              index: p,
              rxData: l,
              oidObject: d,
              oidValue: z,
              widgetResolver: O,
              formatSize: i,
              getDynamicProperty: y,
              backgroundStyles: S,
              theme: u
            });
            t.push(P);
            const W = String(T ? T[0] : s);
            r[W] = g && String(g).trim() !== "" ? g : `${s}${X}`;
          }
        }
        if (C === "number" && t.length) {
          const p = t.map((s) => typeof s.value == "number" ? s.value : NaN).filter((s) => !isNaN(s));
          p.length > 0 && (x = Math.min(...p), $ = Math.max(...p));
        }
      }
      return {
        states: t,
        widgetStates: r,
        minValue: x,
        maxValue: $
      };
    }, [
      d,
      l,
      u,
      S,
      y,
      z,
      i,
      O
    ]), D = B.useMemo(() => {
      switch (d == null ? void 0 : d.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const r = k.findIndex((x) => String(x.value) === String(z));
          return r !== -1 ? (o(r + 1), A(r + 1, true)) : (o(void 0), A("", true));
        }
        default:
          return A("", true);
      }
    }, [
      d,
      z,
      k,
      A
    ]), N = B.useMemo(() => {
      const t = [], r = d == null ? void 0 : d.type, x = (d == null ? void 0 : d.commonStates) || {}, $ = Object.entries(x);
      if (r === "number" || r === "string" || r === "boolean" || r === "mixed") for (let C = 1; C <= l.values_count; C++) {
        const h = l[`value${C}`];
        if (h == null || !/\S/.test(String(h))) continue;
        const M = $.find(([X]) => X === String(h)), p = M ? r === "number" ? Number(M[0]) : String(M[0]) : r === "number" ? Number(h) : h, s = String(z) === String(p), g = _(C, s);
        t.push({
          value: p,
          label: g.alias,
          alias: g.alias,
          fontSize: g.fontSize,
          textColor: g.textColor,
          icon: g.icon,
          iconSize: g.iconSize && parseInt(g.iconSize) || void 0,
          iconWidth: g.iconWidth,
          iconHeight: g.iconHeight,
          iconXOffset: g.iconXOffset,
          iconYOffset: g.iconYOffset,
          iconColor: g.iconColor,
          iconHover: g.iconHover,
          forceColorMask: g.forceColorMask,
          valueSize: g.valueSize,
          backgroundColor: g.backgroundColor,
          backgroundColorActive: n.backgroundColorActive(C, s),
          background: g.background,
          backgroundActive: n.backgroundActive(C, s),
          frameBackgroundColor: g.frameBackgroundColor,
          frameBackgroundColorActive: n.frameBackgroundColorActive(C, s),
          frameBackground: g.frameBackground,
          frameBackgroundActive: n.frameBackgroundActive(C, s)
        });
      }
      return t;
    }, [
      l,
      d,
      z,
      _,
      n
    ]);
    return {
      states: k,
      widgetStates: H,
      minValue: V,
      maxValue: w,
      data: D,
      activeIndex: b,
      setActiveIndex: o,
      oidValue: z,
      statesNew: N
    };
  };
});
export {
  __tla,
  eo as u
};
