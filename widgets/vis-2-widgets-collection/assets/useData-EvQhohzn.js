import { v as z, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { v as F, ao as K, __tla as __tla_1 } from "./CollectionBaseImage-CMDyRI6z.js";
let G, R;
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
  function q(t, n) {
    return t[n];
  }
  function H(t) {
    return typeof t == "object" && t !== null && "sliderOrientation" in t;
  }
  G = (t) => typeof t == "number" ? `calc(${t / 100}rem * 0.875)` : void 0;
  function J(t) {
    return {
      markerIconSize: t.markerIconSize,
      markerTextColor: t.markerTextColor,
      markerTextSize: t.markerTextSize,
      markerIconColor: t.markerIconColor
    };
  }
  function L(t) {
    return {};
  }
  function c(t) {
    for (const n of t) if (n.condition !== false && n.value !== void 0 && n.value !== null && !(typeof n.value == "string" && n.value.trim() === "")) return n.value;
  }
  function Q(t) {
    const { rxData: n, oidObject: a, oidName: S, theme: $, fontStyles: r, textStyles: m, backgroundStyles: k, formatSize: u, getDataValue: i, widgetResolver: v, isSlider: d } = t, g = (o) => o && String(o) !== "" ? String(o) : void 0;
    return {
      icon: (o, e) => c([
        {
          condition: !!n.noIcon,
          value: ""
        },
        {
          condition: e,
          value: i("icon", "Active")
        },
        {
          condition: e,
          value: i("iconSmall", "Active")
        },
        {
          value: i("icon", String(o))
        },
        {
          value: i("iconSmall", String(o))
        },
        {
          value: i("icon", "")
        },
        {
          value: i("iconSmall", "")
        }
      ]) ?? "",
      iconActive: (o, e) => e ? c([
        {
          condition: !!n.noIcon,
          value: ""
        },
        {
          value: i("icon", String(o))
        },
        {
          value: i("iconSmall", String(o))
        }
      ]) ?? "" : "",
      iconSizeCm: (o, e) => c([
        {
          condition: i("iconSize", "") === 0,
          value: "0px"
        },
        {
          condition: !!i("iconSize", ""),
          value: `calc(24px * ${i("iconSize", "")} / 100)`
        }
      ]) ?? "24px",
      iconSize: (o, e) => c([
        {
          condition: e && i("iconSize", "Active") === 0,
          value: "0px"
        },
        {
          condition: e && !!i("iconSize", "Active"),
          value: `calc(24px * ${i("iconSize", "Active")} / 100)`
        },
        {
          condition: i("iconSize", String(o)) === 0,
          value: "0px"
        },
        {
          condition: !!i("iconSize", String(o)),
          value: `calc(24px * ${i("iconSize", String(o))} / 100)`
        }
      ]) ?? "24px",
      iconSizeActive: (o, e) => e ? c([
        {
          condition: i("iconSize", String(o)) === 0,
          value: "0px"
        },
        {
          condition: !!i("iconSize", String(o)),
          value: `calc(24px * ${i("iconSize", String(o))} / 100)`
        }
      ]) ?? "24px" : "24px",
      iconSizeOnly: (o, e) => c([
        {
          condition: !!i("iconSize", String(o)) || i("iconSize", String(o)) === 0,
          value: `${i("iconSize", String(o))}%`
        }
      ]) ?? "100%",
      iconSizeActiveOnly: (o, e) => e ? c([
        {
          value: i("iconSize", String(o))
        }
      ]) ?? void 0 : void 0,
      iconWidth: (o, e) => c([
        {
          condition: e,
          value: n.iconSizeActive
        },
        {
          value: i("iconSize", String(o))
        },
        {
          condition: d,
          value: v.markerIconSize
        },
        {
          value: n.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconHeight: (o, e) => c([
        {
          condition: e,
          value: n.iconSizeActive
        },
        {
          value: i("iconSize", String(o))
        },
        {
          condition: d,
          value: v.markerIconSize
        },
        {
          value: n.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      forceColorMaskCm: (o, e) => c([
        {
          value: i("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMask: (o, e) => c([
        {
          condition: e,
          value: i("enableIconColorMask", "Active")
        },
        {
          value: i("enableIconColorMask", String(o))
        },
        {
          condition: !!i("enableIconColorMask", String(o)),
          value: i("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMaskActive: (o, e) => e ? c([
        {
          value: i("enableIconColorMask", String(o))
        }
      ]) ?? false : false,
      iconColor: (o, e) => c([
        {
          condition: e,
          value: i("iconColor", "Active")
        },
        {
          value: i("iconColor", String(o))
        },
        {
          value: i("iconColor", "")
        }
      ]) ?? $.palette.primary.main,
      iconColorActive: (o, e) => e ? c([
        {
          value: i("iconColor", String(o))
        }
      ]) ?? "" : "",
      iconHover: (o, e) => c([
        {
          value: n.iconHover ? `${n.iconHover}%` : void 0
        }
      ]) ?? "",
      iconHoverActive: (o, e) => e ? c([
        {
          value: i("iconHover", String(o)) ? `${i("iconHover", String(o))}%` : void 0
        }
      ]) ?? void 0 : void 0,
      iconXOffsetCm: (o, e) => c([
        {
          value: i("iconXOffset", "")
        }
      ]) ?? "0px",
      iconYOffsetCm: (o, e) => c([
        {
          value: i("iconYOffset", "")
        }
      ]) ?? "0px",
      iconXOffset: (o, e) => c([
        {
          condition: e,
          value: i("iconXOffset", "Active")
        },
        {
          value: i("iconXOffset", String(o))
        }
      ]) ?? "0px",
      iconYOffset: (o, e) => c([
        {
          condition: e,
          value: i("iconYOffset", "Active")
        },
        {
          value: i("iconYOffset", String(o))
        }
      ]) ?? "0px",
      iconXOffsetActive: (o, e) => e ? c([
        {
          condition: !i("iconXOffset", String(o)),
          value: "0px"
        },
        {
          value: i("iconXOffset", String(o))
        }
      ]) ?? "0px" : "0px",
      iconYOffsetActive: (o, e) => e ? c([
        {
          condition: !i("iconYOffset", String(o)),
          value: "0px"
        },
        {
          value: i("iconYOffset", String(o))
        }
      ]) ?? "0px" : "0px",
      textColorActive: (o, e) => e ? c([
        {
          value: i("textColor", String(o)),
          condition: i("textColor", String(o)) !== ""
        },
        {
          condition: d,
          value: v.markerTextColor && v.markerTextColor !== "" ? v.markerTextColor : void 0
        },
        {
          value: n.textColor && n.textColor !== "" ? n.textColor : void 0
        }
      ]) ?? void 0 : void 0,
      textColorCm: (o, e) => c([
        {
          condition: typeof i("textColor", "") == "string",
          value: i("textColor", "")
        },
        {
          condition: typeof (m == null ? void 0 : m.color) == "string",
          value: m == null ? void 0 : m.color
        }
      ]) ?? "",
      textColor: (o, e) => c([
        {
          condition: e && typeof i("textColor", "Active") == "string",
          value: i("textColor", "Active")
        },
        {
          condition: typeof i("textColor", String(o)) == "string",
          value: i("textColor", String(o))
        },
        {
          condition: d,
          value: v.markerTextColor && v.markerTextColor !== "" ? v.markerTextColor : void 0
        },
        {
          condition: typeof i("textColor", "") == "string",
          value: i("textColor", "")
        },
        {
          condition: typeof (m == null ? void 0 : m.color) == "string",
          value: m == null ? void 0 : m.color
        }
      ]) ?? "",
      fontSize: (o, e) => c([
        {
          condition: e && typeof n.valueSizeActive == "number",
          value: u(n.valueSizeActive)
        },
        {
          value: typeof i("valueSize", String(o)) == "number" ? u(i("valueSize", String(o))) : void 0
        },
        {
          condition: d && typeof v.markerTextSize == "number",
          value: u(v.markerTextSize)
        },
        {
          value: typeof n.valueSize == "number" ? u(n.valueSize) : void 0
        },
        {
          condition: typeof (r == null ? void 0 : r["font-size"]) == "string",
          value: r == null ? void 0 : r["font-size"]
        }
      ]) ?? null,
      headerSize: (o, e) => c([
        {
          condition: e && typeof i("headerSize", "Active") == "number",
          value: `${u(i("headerSize", "Active"))}`
        },
        {
          condition: typeof i("headerSize", String(o)) == "number",
          value: `${u(i("headerSize", String(o)))}`
        },
        {
          condition: typeof i("headerSize", "") == "number",
          value: `${u(i("headerSize", ""))}`
        },
        {
          condition: typeof (r == null ? void 0 : r["font-size"]) == "string",
          value: r == null ? void 0 : r["font-size"]
        }
      ]) ?? "0.875rem",
      footerSize: (o, e) => c([
        {
          condition: e && typeof i("footerSize", "Active") == "number",
          value: `${u(i("footerSize", "Active"))}`
        },
        {
          condition: typeof i("footerSize", String(o)) == "number",
          value: `${u(i("footerSize", String(o)))}`
        },
        {
          condition: typeof i("footerSize", "") == "number",
          value: `${u(i("footerSize", ""))}`
        },
        {
          condition: typeof (r == null ? void 0 : r["font-size"]) == "string",
          value: r == null ? void 0 : r["font-size"]
        }
      ]) ?? "0.875rem",
      valueSize: (o, e) => c([
        {
          condition: e && typeof i("valueSize", "Active") == "number",
          value: `${u(i("valueSize", "Active"))}`
        },
        {
          condition: typeof i("valueSize", String(o)) == "number",
          value: `${u(i("valueSize", String(o)))}`
        },
        {
          condition: typeof i("valueSize", "") == "number",
          value: `${u(i("valueSize", ""))}`
        },
        {
          condition: typeof (r == null ? void 0 : r["font-size"]) == "string",
          value: r == null ? void 0 : r["font-size"]
        }
      ]) ?? "0.875rem",
      valueSizeActive: (o, e) => e ? c([
        {
          value: typeof i("valueSize", String(o)) == "number" ? u(i("valueSize", String(o))) : null
        }
      ]) ?? null : null,
      header: (o, e) => String(c([
        {
          condition: e,
          value: g(i("header", "Active"))
        },
        {
          value: g(i("header", String(o)))
        },
        {
          value: g(i("header", ""))
        },
        {
          value: g(S)
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      footer: (o, e) => String(c([
        {
          condition: e,
          value: g(i("footer", "Active"))
        },
        {
          value: g(i("footer", String(o)))
        },
        {
          value: g(i("footer", ""))
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      alias: (o, e) => String(i("alias", String(o)) || "").replace(/(\r\n|\n|\r)/gm, ""),
      value: (o, e) => {
        const _ = i("value", String(o));
        return _ != null ? `${_}${(a == null ? void 0 : a.unit) !== void 0 ? a.unit : ""}` : void 0;
      },
      backgroundColor: (o, e) => c([
        {
          value: n.backgroundColor && n.backgroundColor !== "" ? n.backgroundColor : void 0
        },
        {
          value: k == null ? void 0 : k["background-color"]
        },
        {
          value: ""
        }
      ]) ?? "",
      backgroundColorActive: (o, e) => e ? i("backgroundColor", String(o)) : void 0,
      background: (o, e) => c([
        {
          condition: e,
          value: i("background", "Active")
        },
        {
          value: i("background", String(o))
        },
        {
          value: i("background", "")
        },
        {
          value: k == null ? void 0 : k.background
        }
      ]) ?? "",
      backgroundActive: (o, e) => e ? i("background", String(o)) : void 0,
      frameBackgroundColor: (o, e) => c([
        {
          value: n.frameBackgroundColor && n.frameBackgroundColor !== "" ? n.frameBackgroundColor : void 0
        },
        {
          value: k == null ? void 0 : k["background-color"]
        },
        {
          value: ""
        }
      ]) ?? "",
      frameBackgroundColorActive: (o, e) => e ? i("frameBackgroundColor", String(o)) : void 0,
      frameBackground: (o, e) => c([
        {
          condition: e,
          value: i("frameBackground", "Active")
        },
        {
          value: i("frameBackground", String(o))
        },
        {
          value: i("frameBackground", "")
        },
        {
          value: k == null ? void 0 : k.background
        }
      ]) ?? "",
      frameBackgroundActive: (o, e) => e ? i("frameBackground", String(o)) : void 0,
      markerIconSize: (o, e) => d ? v.markerIconSize : void 0,
      markerTextColor: (o, e) => d ? v.markerTextColor : void 0,
      markerTextSize: (o, e) => d ? v.markerTextSize : void 0,
      markerIconColor: (o, e) => d ? v.markerIconColor : void 0
    };
  }
  function U(t = "", n = false, a) {
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
  R = function(t) {
    const { theme: n, widget: a, widget: { data: S }, getPropertyValue: $ } = z.useContext(F), r = S[`${t}Object`], m = $(t), k = r == null ? void 0 : r.name, { fontStyles: u, textStyles: i, backgroundStyles: v } = K(a.style), [d, g] = z.useState(), o = z.useCallback(G, []), e = z.useCallback((O, C = "") => {
      const h = `${O}${C}`;
      return q(S, h);
    }, [
      S
    ]), _ = z.useMemo(() => H(S) ? J(S) : L(), [
      S
    ]), I = z.useMemo(() => Q({
      rxData: S,
      oidObject: r,
      oidName: k,
      theme: n,
      fontStyles: u,
      textStyles: i,
      backgroundStyles: v,
      formatSize: o,
      getDataValue: e,
      widgetResolver: _,
      isSlider: H(S)
    }), [
      S,
      r,
      k,
      n,
      u,
      i,
      v,
      o,
      e,
      _
    ]), b = z.useCallback((O = "", C = false) => U(O, C, I), [
      I
    ]), { statesNew: y, widgetStates: X, minValue: Y, maxValue: V } = z.useMemo(() => {
      const O = {};
      let C = null, h = null;
      const x = [], A = r == null ? void 0 : r.type, N = (r == null ? void 0 : r.commonStates) || {}, D = Object.entries(N);
      if (A === "number" || A === "string" || A === "boolean" || A === "mixed") for (let s = 1; s <= S.values_count; s++) {
        const f = e("value", String(s)), M = S[`alias${s}`], W = r == null ? void 0 : r.unit;
        if (f === void 0 || !/\S/.test(String(f))) continue;
        const B = D.find(([E]) => E === String(f)), T = B ? A === "number" ? Number(B[0]) : String(B[0]) : A === "number" ? Number(f) : f, j = String(m) === String(T), l = b(s, j);
        x.push({
          value: T,
          label: l.alias || String(l.value),
          alias: l.alias,
          fontSize: l.valueSize,
          textColor: l.textColor,
          icon: l.icon,
          iconSize: l.iconSize,
          iconSizeOnly: l.iconSizeOnly,
          iconWidth: l.iconWidth,
          iconHeight: l.iconHeight,
          iconXOffset: l.iconXOffset,
          iconYOffset: l.iconYOffset,
          iconColor: l.iconColor,
          iconHover: l.iconHover,
          forceColorMask: l.forceColorMask,
          valueSize: l.valueSize,
          background: l.background,
          frameBackground: l.frameBackground
        });
        const P = String(B ? B[0] : f);
        O[P] = M && String(M).trim() !== "" ? M : `${f}${W}`;
      }
      if (A === "number" && x.length) {
        const s = x.map((f) => typeof f.value == "number" ? f.value : NaN).filter((f) => !isNaN(f));
        s.length > 0 && (C = Math.min(...s), h = Math.max(...s));
      }
      return {
        statesNew: x,
        widgetStates: O,
        minValue: C,
        maxValue: h
      };
    }, [
      r == null ? void 0 : r.type,
      r == null ? void 0 : r.commonStates,
      r == null ? void 0 : r.unit,
      S,
      e,
      m,
      b
    ]), w = z.useMemo(() => {
      switch (r == null ? void 0 : r.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const C = y.findIndex((h) => String(h.value) === String(m));
          return C !== -1 ? (g(C + 1), b(C + 1, true)) : (g(void 0), b("", true));
        }
        default:
          return b("", true);
      }
    }, [
      r,
      m,
      y,
      b
    ]);
    return {
      widgetStates: X,
      minValue: Y,
      maxValue: V,
      data: w,
      activeIndex: d,
      setActiveIndex: g,
      oidValue: m,
      statesNew: y,
      resolveStyleData: b
    };
  };
});
export {
  __tla,
  G as f,
  R as u
};
