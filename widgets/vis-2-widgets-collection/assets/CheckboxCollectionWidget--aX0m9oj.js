import { c as V, j as g, a as q, g as ee, u as oe, b as te, a4 as ie, d as ne, s as ae, i as B, e as re, r as le, m as ce, o as T, a0 as $, C as _, v as E, a5 as se, O as ue, a6 as de, a7 as ve, E as ge, G as me, w as N, T as Se, A as L, z as H, H as pe, J as R, K as fe, __tla as __tla_0 } from "./useData-DSoqoXK9.js";
import { c as be, __tla as __tla_1 } from "./commonObjectFields-Y7Tma-da.js";
import { u as Ce, d as ke, __tla as __tla_2 } from "./useValueState-lsTxmsTs.js";
import { v as y, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as xe, __tla as __tla_4 } from "./useHtmlValue-Dcwl_hqT.js";
import { F as he, __tla as __tla_5 } from "./FormControlLabel-BgkKEa77.js";
import { S as ye, __tla as __tla_6 } from "./SwitchBase-Cvq3OK2Y.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let G;
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
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })()
]).then(async () => {
  const ze = V(g.jsx("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }), "CheckBoxOutlineBlank"), Ie = V(g.jsx("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckBox"), we = V(g.jsx("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  }), "IndeterminateCheckBox");
  function Ae(t) {
    return ee("MuiCheckbox", t);
  }
  const D = q("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium"
  ]), Me = (t) => {
    const { classes: a, indeterminate: d, color: e, size: o } = t, c = {
      root: [
        "root",
        d && "indeterminate",
        `color${B(e)}`,
        `size${B(o)}`
      ]
    }, C = re(c, Ae, a);
    return {
      ...a,
      ...C
    };
  }, Oe = ae(ye, {
    shouldForwardProp: (t) => le(t) || t === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (t, a) => {
      const { ownerState: d } = t;
      return [
        a.root,
        d.indeterminate && a.indeterminate,
        a[`size${B(d.size)}`],
        d.color !== "default" && a[`color${B(d.color)}`]
      ];
    }
  })(ce(({ theme: t }) => ({
    color: (t.vars || t).palette.text.secondary,
    variants: [
      {
        props: {
          color: "default",
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: t.vars ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})` : T(t.palette.action.active, t.palette.action.hoverOpacity)
          }
        }
      },
      ...Object.entries(t.palette).filter($()).map(([a]) => ({
        props: {
          color: a,
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: t.vars ? `rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : T(t.palette[a].main, t.palette.action.hoverOpacity)
          }
        }
      })),
      ...Object.entries(t.palette).filter($()).map(([a]) => ({
        props: {
          color: a
        },
        style: {
          [`&.${D.checked}, &.${D.indeterminate}`]: {
            color: (t.vars || t).palette[a].main
          },
          [`&.${D.disabled}`]: {
            color: (t.vars || t).palette.action.disabled
          }
        }
      })),
      {
        props: {
          disableRipple: false
        },
        style: {
          "&:hover": {
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          }
        }
      }
    ]
  }))), je = g.jsx(Ie, {}), Be = g.jsx(ze, {}), Pe = g.jsx(we, {}), De = y.forwardRef(function(a, d) {
    const e = oe({
      props: a,
      name: "MuiCheckbox"
    }), { checkedIcon: o = je, color: c = "primary", icon: C = Be, indeterminate: s = false, indeterminateIcon: v = Pe, inputProps: p, size: f = "medium", disableRipple: I = false, className: S, slots: n = {}, slotProps: M = {}, ...x } = e, l = s ? v : C, w = s ? v : o, h = {
      ...e,
      disableRipple: I,
      color: c,
      indeterminate: s,
      size: f
    }, m = Me(h), u = M.input ?? p, [z, O] = te("root", {
      ref: d,
      elementType: Oe,
      className: ne(m.root, S),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: n,
        slotProps: M,
        ...x
      },
      ownerState: h,
      additionalProps: {
        type: "checkbox",
        icon: y.cloneElement(l, {
          fontSize: l.props.fontSize ?? f
        }),
        checkedIcon: y.cloneElement(w, {
          fontSize: w.props.fontSize ?? f
        }),
        disableRipple: I,
        slots: n,
        slotProps: {
          input: ie(typeof u == "function" ? u(h) : u, {
            "data-indeterminate": s
          })
        }
      }
    });
    return g.jsx(z, {
      ...O,
      classes: m
    });
  }), Ve = () => [
    {
      type: "custom",
      component: () => g.jsx(_, {
        dividerText: "label"
      })
    },
    {
      name: "withoutLabel",
      label: "without_label",
      type: "checkbox",
      default: false
    },
    {
      name: "checkboxLabelPlacement",
      label: "checkbox_label_placement",
      type: "select",
      options: [
        {
          value: "top",
          label: "checkbox_top"
        },
        {
          value: "bottom",
          label: "checkbox_bottom"
        },
        {
          value: "start",
          label: "checkbox_start"
        },
        {
          value: "end",
          label: "checkbox_end"
        }
      ],
      default: "end",
      hidden: "data.withoutLabel"
    },
    {
      type: "custom",
      component: () => g.jsx(_, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (t) => !t.write,
      default: false,
      hidden: (t) => !t.write
    }
  ];
  function r(t) {
    for (const a of t) if (a.condition !== false && a.value !== void 0) return a.value;
  }
  function Te(t) {
    return {
      markerIconSize: t.markerIconSize,
      markerTextColor: t.markerTextColor,
      markerTextSize: t.markerTextSize,
      markerIconColor: t.markerIconColor
    };
  }
  function $e(t) {
    return {};
  }
  function _e(t) {
    return "markerIconSize" in t || "markerTextColor" in t;
  }
  function Ne(t) {
    const { value: a, rawValue: d, index: e, rxData: o, oidObject: c, oidValue: C, widgetResolver: s, formatSize: v, getDynamicProperty: p, backgroundStyles: f, theme: I } = t, S = a, n = d, M = c.unit || "", x = p("alias", String(e)), l = (m, u) => p(m, u), w = String(C) === String(S), h = _e(s);
    return {
      value: S,
      valueSize: typeof l("valueSize", String(e)) == "number" ? v(l("valueSize", String(e))) : null,
      label: String(x && String(x).trim() !== "" ? x : `${n}${M}`).replace(/(\r\n|\n|\r)/gm, ""),
      alias: String(x && String(x).trim() !== "" ? x : `${n}${M}`).replace(/(\r\n|\n|\r)/gm, ""),
      fontSize: r([
        {
          condition: w && typeof o.valueSizeActive == "number",
          value: v(o.valueSizeActive)
        },
        {
          value: typeof l("valueSize", String(e)) == "number" ? v(l("valueSize", String(e))) : void 0
        },
        {
          condition: h && typeof s.markerTextSize == "number",
          value: v(s.markerTextSize)
        },
        {
          value: typeof o.valueSize == "number" ? v(o.valueSize) : void 0
        },
        {
          value: void 0
        }
      ]),
      textColor: r([
        {
          condition: w,
          value: o.textColorActive && o.textColorActive !== "" ? o.textColorActive : void 0
        },
        {
          value: l("textColor", String(e)),
          condition: l("textColor", String(e)) !== ""
        },
        {
          condition: h,
          value: s.markerTextColor && s.markerTextColor !== "" ? s.markerTextColor : void 0
        },
        {
          value: o.textColor && o.textColor !== "" ? o.textColor : void 0
        },
        {
          value: void 0
        }
      ]),
      icon: r([
        {
          value: l("icon", String(e)),
          condition: l("icon", String(e)) !== ""
        },
        {
          value: l("iconSmall", String(e)),
          condition: l("iconSmall", String(e)) !== ""
        },
        {
          value: o.icon && o.icon !== "" ? o.icon : void 0
        },
        {
          value: o.iconSmall && o.iconSmall !== "" ? o.iconSmall : void 0
        },
        {
          value: void 0
        }
      ]),
      iconSize: l("iconSize", String(e)),
      iconWidth: r([
        {
          condition: w,
          value: o.iconSizeActive
        },
        {
          value: l("iconSize", String(e))
        },
        {
          condition: h,
          value: s.markerIconSize
        },
        {
          value: o.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconHeight: r([
        {
          condition: w,
          value: o.iconSizeActive
        },
        {
          value: l("iconSize", String(e))
        },
        {
          condition: h,
          value: s.markerIconSize
        },
        {
          value: o.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconXOffset: (() => {
        const m = l("iconXOffset", String(e));
        return m && m !== "0px" ? m : "0px";
      })(),
      iconYOffset: (() => {
        const m = l("iconYOffset", String(e));
        return m && m !== "0px" ? m : "0px";
      })(),
      iconColor: r([
        {
          value: l("iconColor", String(e)),
          condition: l("iconColor", String(e)) !== ""
        },
        {
          condition: h,
          value: s.markerIconColor && s.markerIconColor !== "" ? s.markerIconColor : void 0
        },
        {
          value: o.iconColor && o.iconColor !== "" ? o.iconColor : void 0
        },
        {
          value: I.palette.primary.main
        }
      ]) ?? I.palette.primary.main,
      iconHover: (() => {
        const m = l("iconHover", String(e));
        return m ? `${m}%` : void 0;
      })(),
      forceColorMask: l("enableIconColorMask", String(e)),
      backgroundColor: r([
        {
          value: o.backgroundColor && o.backgroundColor !== "" ? o.backgroundColor : void 0
        },
        {
          value: f == null ? void 0 : f["background-color"],
          condition: (f == null ? void 0 : f["background-color"]) !== ""
        },
        {
          value: ""
        }
      ]) ?? "",
      backgroundColorActive: l("backgroundColor", String(e)),
      background: String(r([
        {
          value: o.background && o.background !== "" ? o.background : void 0
        },
        {
          value: f == null ? void 0 : f.background,
          condition: (f == null ? void 0 : f.background) !== ""
        },
        {
          value: ""
        }
      ]) ?? ""),
      backgroundActive: l("background", String(e)),
      frameBackgroundColor: r([
        {
          value: o.frameBackgroundColor && o.frameBackgroundColor !== "" ? o.frameBackgroundColor : void 0
        },
        {
          value: f == null ? void 0 : f["background-color"],
          condition: (f == null ? void 0 : f["background-color"]) !== ""
        },
        {
          value: ""
        }
      ]) ?? "",
      frameBackgroundColorActive: l("frameBackgroundColor", String(e)),
      frameBackground: String(r([
        {
          value: o.frameBackground && o.frameBackground !== "" ? o.frameBackground : void 0
        },
        {
          value: f == null ? void 0 : f.background,
          condition: (f == null ? void 0 : f.background) !== ""
        },
        {
          value: ""
        }
      ]) ?? ""),
      frameBackgroundActive: l("frameBackground", String(e))
    };
  }
  function Le(t) {
    const { theme: a, widget: d, widget: { data: e }, getPropertyValue: o } = y.useContext(E), c = e[`${t}Object`], C = o(t), s = c == null ? void 0 : c.name, { fontStyles: v, backgroundStyles: p } = se(d.style), [f, I] = y.useState(), S = y.useCallback(ue, []), n = y.useCallback((u, z = "") => {
      const O = `${u}${z}`;
      return de(e, O);
    }, [
      e
    ]), M = y.useMemo(() => ve(e) ? Te(e) : $e(), [
      e
    ]), { states: x, widgetStates: l, minValue: w, maxValue: h } = y.useMemo(() => {
      const u = [], z = {};
      let O = null, i = null;
      const k = c == null ? void 0 : c.type, J = (c == null ? void 0 : c.commonStates) || {}, U = Object.entries(J);
      if (k === "number" || k === "string" || k === "boolean" || k === "mixed") {
        for (let A = 1; A <= e.values_count; A++) {
          const b = e[`value${A}`], P = e[`alias${A}`], Y = c == null ? void 0 : c.unit;
          if (b != null && /\S/.test(String(b))) {
            const j = U.find(([K]) => K === String(b)), Z = j ? k === "number" ? Number(j[0]) : String(j[0]) : k === "number" ? Number(b) : b, X = Ne({
              value: Z,
              rawValue: b,
              index: A,
              rxData: e,
              oidObject: c,
              oidValue: C,
              widgetResolver: M,
              formatSize: S,
              getDynamicProperty: n,
              backgroundStyles: p,
              theme: a
            });
            u.push(X);
            const Q = String(j ? j[0] : b);
            z[Q] = P && String(P).trim() !== "" ? P : `${b}${Y}`;
          }
        }
        if (k === "number" && u.length) {
          const A = u.map((b) => typeof b.value == "number" ? b.value : NaN).filter((b) => !isNaN(b));
          A.length > 0 && (O = Math.min(...A), i = Math.max(...A));
        }
      }
      return {
        states: u,
        widgetStates: z,
        minValue: O,
        maxValue: i
      };
    }, [
      c,
      e,
      a,
      p,
      n,
      C,
      S,
      M
    ]), m = y.useMemo(() => {
      console.log("rxData in useDataNew data computation:", e);
      const u = (i) => i && String(i) !== "" ? String(i) : void 0, z = (i = "") => ({
        textColor: e.textColor,
        textColorActive: n("textColor", String(i)),
        header: String(r([
          {
            value: u(e.headerActive)
          },
          {
            value: u(n("header", String(i)))
          },
          {
            value: u(e.header)
          },
          {
            value: u(s)
          },
          {
            value: ""
          }
        ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
        headerSize: r([
          {
            value: S(e.headerSize)
          },
          {
            value: S(e.headerSizeActive)
          },
          {
            value: S(n("headerSize", String(i)))
          },
          {
            value: typeof (v == null ? void 0 : v["font-size"]) == "string" ? v == null ? void 0 : v["font-size"] : null
          }
        ]) ?? null,
        footer: String(r([
          {
            value: u(e.footerActive)
          },
          {
            value: u(n("footer", String(i)))
          },
          {
            value: u(e.footer)
          },
          {
            value: ""
          }
        ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
        footerSize: r([
          {
            value: S(e.footerSize)
          },
          {
            value: S(e.footerSizeActive)
          },
          {
            value: S(n("footerSize", String(i)))
          },
          {
            value: typeof (v == null ? void 0 : v["font-size"]) == "string" ? v == null ? void 0 : v["font-size"] : null
          }
        ]) ?? null,
        alias: String(n("alias", String(i)) || "").replace(/(\r\n|\n|\r)/gm, ""),
        value: (() => {
          const k = n("value", String(i));
          return k != null ? `${k}${(c == null ? void 0 : c.unit) !== void 0 ? c.unit : ""}` : void 0;
        })(),
        valueSize: r([
          {
            value: S(e.valueSize)
          },
          {
            value: typeof (v == null ? void 0 : v["font-size"]) == "string" ? v == null ? void 0 : v["font-size"] : null
          }
        ]) ?? null,
        valueSizeActive: r([
          {
            value: typeof n("valueSize", String(i)) == "number" ? S(n("valueSize", String(i))) : null
          }
        ]) ?? null,
        icon: r([
          {
            condition: !!e.noIcon,
            value: null
          },
          {
            value: n("icon")
          },
          {
            value: n("iconSmall")
          }
        ]) ?? null,
        iconActive: r([
          {
            condition: !!e.noIcon,
            value: null
          },
          {
            value: n("icon", String(i))
          },
          {
            value: n("iconSmall", String(i))
          }
        ]) ?? null,
        iconSize: r([
          {
            value: typeof e.iconSize == "number" ? `calc(24px * ${e.iconSize} / 100)` : void 0
          },
          {
            value: "24px"
          }
        ]) ?? "24px",
        iconSizeActive: r([
          {
            value: n("iconSize", String(i)) ? `calc(24px * ${n("iconSize", String(i))} / 100)` : false
          }
        ]) ?? false,
        forceColorMaskActive: r([
          {
            value: n("enableIconColorMask", String(i))
          }
        ]) ?? false,
        iconSizeActiveOnly: r([
          {
            value: n("iconSize", String(i))
          }
        ]) ?? void 0,
        iconSizeOnly: r([
          {
            value: n("iconSize", String(i)) || n("iconSize", String(i)) === 0 ? n("iconSize", String(i)) : void 0
          },
          {
            value: e.iconSize
          }
        ]) ?? void 0,
        iconColor: r([
          {
            value: e.iconColor
          }
        ]) ?? void 0,
        iconColorActive: r([
          {
            value: n("iconColor", String(i))
          }
        ]) ?? void 0,
        iconHover: r([
          {
            value: e.iconHover ? `${e.iconHover}%` : void 0
          }
        ]) ?? void 0,
        iconHoverActive: r([
          {
            value: n("iconHover", String(i)) ? `${n("iconHover", String(i))}%` : void 0
          }
        ]) ?? void 0,
        iconXOffset: r([
          {
            value: n("iconXOffset", String(i)) && n("iconXOffset", String(i)) !== "0px" ? n("iconXOffset", String(i)) : void 0
          },
          {
            value: "0px"
          }
        ]) ?? "0px",
        iconYOffset: r([
          {
            value: n("iconYOffset", String(i)) && n("iconYOffset", String(i)) !== "0px" ? n("iconYOffset", String(i)) : void 0
          },
          {
            value: "0px"
          }
        ]) ?? "0px",
        backgroundColor: r([
          {
            value: e.backgroundColor && e.backgroundColor !== "" ? e.backgroundColor : void 0
          },
          {
            value: p == null ? void 0 : p["background-color"]
          },
          {
            value: ""
          }
        ]) ?? "",
        backgroundColorActive: n("backgroundColor", String(i)),
        background: String(r([
          {
            value: e.background && e.background !== "" ? e.background : void 0
          },
          {
            value: p == null ? void 0 : p.background
          },
          {
            value: ""
          }
        ]) ?? ""),
        backgroundActive: n("background", String(i)),
        frameBackgroundColor: r([
          {
            value: e.frameBackgroundColor && e.frameBackgroundColor !== "" ? e.frameBackgroundColor : void 0
          },
          {
            value: p == null ? void 0 : p["background-color"]
          },
          {
            value: ""
          }
        ]) ?? "",
        frameBackgroundColorActive: n("frameBackgroundColor", String(i)),
        frameBackground: String(r([
          {
            value: e.frameBackground && e.frameBackground !== "" ? e.frameBackground : void 0
          },
          {
            value: p == null ? void 0 : p.background
          },
          {
            value: ""
          }
        ]) ?? ""),
        frameBackgroundActive: n("frameBackground", String(i))
      });
      switch (c == null ? void 0 : c.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const i = x.findIndex((k) => String(k.value) === String(C));
          return i !== -1 ? (I(i + 1), z(String(i + 1))) : (I(void 0), z(""));
        }
        default:
          return z("");
      }
    }, [
      c,
      C,
      s,
      e,
      x,
      v,
      p,
      S,
      n
    ]);
    return {
      states: x,
      widgetStates: l,
      minValue: w,
      maxValue: h,
      data: m,
      activeIndex: f,
      setActiveIndex: I,
      oidValue: C
    };
  }
  const W = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==", F = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==";
  function He() {
    const t = y.useContext(E), { widget: a, theme: d } = t, e = a.data.oidObject, { data: o } = Le("oid"), { value: c, updateValue: C } = Ce("oid"), v = (e == null ? void 0 : e.type) === "boolean", p = xe(c, a, o);
    return g.jsxs(ge, {
      isValidType: v,
      data: o,
      oidValue: c,
      children: [
        g.jsx(me, {
          data: o,
          widget: a
        }),
        g.jsx(N, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: c !== void 0 && g.jsx(he, {
            labelPlacement: a.data.checkboxLabelPlacement,
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              "&.MuiFormControlLabel-labelPlacementStart": {
                m: 0
              },
              "&.MuiFormControlLabel-labelPlacementEnd": {
                m: 0
              },
              "&.MuiFormControlLabel-labelPlacementTop": {
                m: 0
              },
              "&.MuiFormControlLabel-labelPlacementBottom": {
                m: 0
              }
            },
            control: g.jsx(De, {
              disabled: a.data.onlyDisplay,
              disableRipple: true,
              checked: !!c,
              onChange: () => C(!c),
              checkedIcon: g.jsx("img", {
                alt: "",
                src: o.iconActive || W,
                style: {
                  width: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                  height: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                  objectFit: "contain",
                  ...H(o.iconActive || W, o.iconColorActive || o.iconColor || d.palette.primary.main, o.forceColorMaskActive ?? false)
                }
              }),
              icon: g.jsx("img", {
                alt: "",
                src: o.iconActive || F,
                style: {
                  width: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                  height: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                  objectFit: "contain",
                  ...H(o.iconActive || F, o.iconColorActive || o.iconColor || d.palette.primary.main, o.forceColorMaskActive ?? false)
                }
              }),
              sx: {
                width: "100%",
                height: "100%",
                flexGrow: 1,
                p: 0,
                "& .MuiSvgIcon-root": {
                  width: "100%",
                  height: "100%"
                }
              }
            }),
            label: !a.data.withoutLabel && g.jsx(Se, {
              component: N,
              variant: "body2",
              sx: {
                fontSize: o.valueSizeActive || o.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                background: L(o.textColorActive || o.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: L(o.textColorActive || o.textColor) ? "transparent" : o.textColorActive || o.textColor,
                textTransform: "none",
                px: 1,
                pl: 0,
                pr: 2,
                width: "100%",
                height: "100%",
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                whiteSpace: "normal",
                hyphens: "auto",
                "& > div": {
                  textAlign: "left",
                  display: "inline-block"
                }
              },
              dangerouslySetInnerHTML: {
                __html: `<div style="text-align: center; display: inline-block; width: 100%;">${p || ""}</div>`
              }
            })
          })
        })
      ]
    });
  }
  G = class extends pe {
    static getWidgetInfo() {
      return {
        id: "tplCheckboxCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "CheckboxCollectionWidget",
        visWidgetLabel: "checkbox_collection_widget",
        visOrder: 1,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...R()
            ]
          },
          {
            name: "checkbox",
            label: "group_checkbox",
            fields: [
              ...be([
                "boolean"
              ]),
              ...ke(),
              ...Ve()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...R({
                groupName: "",
                allFields: false
              })
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "100px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-checkbox.png"
      };
    }
    getWidgetInfo() {
      return G.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(a, d) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(a) {
      super.renderWidgetBody(a);
      const d = {
        id: a.id,
        refService: a.refService,
        style: a.style,
        widget: {
          data: this.state.rxData,
          style: this.state.rxStyle
        },
        setValue: this.setValue,
        setState: this.setState.bind(this),
        values: this.state.values,
        isSignalVisible: this.isSignalVisible.bind(this),
        getPropertyValue: this.getPropertyValue.bind(this),
        mode: this.props.context.themeType,
        socket: this.props.context.socket,
        theme: this.props.context.theme,
        wrappedContent: this.wrappedCollectionContent
      };
      return a.widget.data.noCard || a.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, fe(this.wrapContent(g.jsx(He, {})), d);
    }
  };
});
export {
  __tla,
  G as default
};
