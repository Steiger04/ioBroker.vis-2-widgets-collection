import { j as a, n as g, T as Z, s as ee, i as G, G as te, __tla as __tla_0 } from "./usePopoverPositioning-BqDLZSOn.js";
import { h as ae, i as y, C as m, b as N, S as V, g as L, a as ie, u as oe, j as X, c as re, d as le, k as Y, l as B, e as T, f as ne, w as de, __tla as __tla_1 } from "./useData-Crq-Rx8l.js";
import { u as se, d as ce, __tla as __tla_2 } from "./useValueState-ZAcVaukB.js";
import { v as s, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { a as me, S as ue, __tla as __tla_4 } from "./Slider-EI4H9hCW.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let q;
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
  })()
]).then(async () => {
  const pe = () => [
    {
      type: "custom",
      component: () => a.jsx(m, {})
    },
    {
      name: "sliderSize",
      label: "slider_size",
      type: "select",
      options: [
        {
          value: "small",
          label: "slider_small"
        },
        {
          value: "medium",
          label: "slider_medium"
        }
      ],
      default: "medium"
    },
    {
      name: "sliderOrientation",
      label: "slider_orientation",
      type: "select",
      options: [
        {
          value: "horizontal",
          label: "horizontal"
        },
        {
          value: "vertical",
          label: "vertical"
        }
      ],
      default: "horizontal"
    },
    {
      name: "sliderGap",
      label: "slider_gap",
      type: "number",
      default: 0,
      min: 0,
      max: 100,
      step: 0.1
    },
    {
      name: "valueLabelDisplay",
      label: "value_label_display",
      type: "select",
      options: [
        {
          value: "on",
          label: "label_on"
        },
        {
          value: "off",
          label: "label_off"
        },
        {
          value: "auto",
          label: "label_auto"
        }
      ],
      default: "off"
    },
    {
      name: "labelPosition",
      label: "label_position",
      type: "text",
      default: "-5px",
      hidden: "data.valueLabelDisplay === 'off'"
    },
    ae({
      name: "sliderColor",
      label: "slider_color"
    }),
    {
      name: "sliderPadding",
      label: "slider_padding",
      type: "number",
      default: 1,
      min: 0,
      step: 0.5
    },
    {
      type: "custom",
      component: () => a.jsx(m, {
        dividerText: "thumb"
      })
    },
    {
      name: "thumbWidth",
      label: "thumb_width",
      type: "number",
      default: 20,
      min: 0
    },
    {
      name: "thumbHeight",
      label: "thumb_height",
      type: "number",
      default: 20,
      min: 0
    },
    y("thumbColor", "thumb_color"),
    {
      name: "thumbBorderWidth",
      label: "thumb_border_width",
      type: "number",
      default: 0,
      min: 0,
      max: 100
    },
    y("thumbBorderColor", "thumb_border_color"),
    {
      type: "custom",
      component: () => a.jsx(m, {
        dividerText: "track"
      })
    },
    {
      name: "trackLength",
      label: "track_length",
      type: "number",
      default: 4,
      min: 0
    },
    y("trackBackgroundColor", "track_background_color"),
    {
      name: "trackBorderWidth",
      label: "track_border_width",
      type: "number",
      default: 1,
      min: 0,
      max: 100
    },
    y("trackBorderColor", "track_border_color"),
    {
      type: "custom",
      component: () => a.jsx(m, {
        dividerText: "rail"
      })
    },
    {
      name: "railLength",
      label: "rail_length",
      type: "number",
      default: 4,
      min: 0
    },
    y("railBackgroundColor", "rail_background_color"),
    {
      name: "railBorderWidth",
      label: "rail_border_width",
      type: "number",
      default: 0,
      min: 0,
      max: 100
    },
    y("railBorderColor", "rail_border_color"),
    {
      type: "custom",
      component: () => a.jsx(m, {
        dividerText: "mark"
      })
    },
    {
      name: "markWidth",
      label: "mark_width",
      type: "number",
      default: 2,
      min: 0
    },
    {
      name: "markHeight",
      label: "mark_height",
      type: "number",
      default: 2,
      min: 0
    },
    y("markBackgroundColor", "mark_background_color"),
    {
      type: "custom",
      component: () => a.jsx(m, {
        dividerText: "values"
      })
    },
    {
      name: "minValue",
      type: "number",
      label: "min_value",
      default: 0
    },
    {
      name: "maxValue",
      type: "number",
      label: "max_value",
      default: 100
    },
    {
      name: "step",
      type: "number",
      label: "step",
      default: 10
    },
    {
      type: "custom",
      component: () => a.jsx(m, {}),
      hidden: (i) => {
        var _a;
        return !i.values_count && !Object.keys(((_a = i.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
      }
    },
    {
      name: "onlyStates",
      type: "checkbox",
      label: "only_states",
      default: false,
      hidden: (i) => {
        var _a;
        return !i.values_count && !Object.keys(((_a = i.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
      }
    },
    {
      type: "custom",
      component: () => a.jsx(m, {
        dividerText: "marks"
      })
    },
    {
      name: "marks",
      type: "checkbox",
      label: "marks",
      default: false
    },
    {
      type: "custom",
      component: () => a.jsx(m, {}),
      hidden: "!data.marks"
    },
    {
      name: "markPosition",
      label: "mark_position",
      type: "text",
      default: "30px",
      hidden: "!data.marks"
    },
    {
      name: "markStep",
      type: "number",
      label: "mark_step",
      default: 10,
      hidden: "!data.marks"
    },
    {
      type: "custom",
      component: () => a.jsx(m, {}),
      hidden: "!data.marks"
    },
    y("markerTextColor", "marker_text_color"),
    {
      name: "markerTextSize",
      label: "marker_text_size",
      type: "slider",
      min: 0,
      max: 500,
      step: 1,
      hidden: "!data.marks"
    },
    {
      type: "custom",
      component: () => a.jsx(m, {}),
      hidden: "!data.marks"
    },
    {
      name: "markerIconColor",
      label: "marker_icon_color",
      type: "color",
      hidden: "!data.marks"
    },
    {
      name: "markerIconSize",
      label: "marker_icon_size",
      type: "slider",
      min: 1,
      max: 500,
      step: 1,
      hidden: "!data.marks"
    },
    {
      type: "custom",
      component: () => a.jsx(m, {
        dividerText: "icon"
      })
    },
    {
      name: "iconSmallMin",
      label: "icon_small_min",
      type: "icon64",
      hidden: "data.iconMin"
    },
    {
      name: "iconMin",
      label: "icon_min",
      type: "image",
      hidden: "data.iconSmallMin"
    },
    {
      name: "iconSizeStart",
      label: "icon_size",
      type: "text",
      default: "24px",
      hidden: "!data.iconMin && !data.iconSmallMin"
    },
    y("startIconColor", "icon_color", {
      noGradient: true,
      hidden: "!data.iconMin && !data.iconSmallMin"
    }),
    {
      type: "custom",
      component: () => a.jsx(m, {
        dividerText: "icon"
      })
    },
    {
      name: "iconSmallMax",
      label: "icon_small_max",
      type: "icon64",
      hidden: "data.iconMax"
    },
    {
      name: "iconMax",
      label: "icon_max",
      type: "image",
      hidden: "data.iconSmallMax"
    },
    {
      name: "iconSizeEnd",
      label: "icon_size",
      type: "text",
      default: "24px",
      hidden: "!data.iconMax && !data.iconSmallMax"
    },
    y("endIconColor", "icon_color", {
      noGradient: true,
      hidden: "!data.iconMax && !data.iconSmallMax"
    })
  ], xe = ({ marks: i, sliderOrientation: t, aliasActive: e, activeMarkIndex: f, defaultIconColor: p, ...k }) => {
    var _a;
    const [S, j] = s.useState(null), _ = k["data-index"], o = (_a = k.ownerState.marks) == null ? void 0 : _a[_], n = f === _;
    return s.useEffect(() => {
      S && (o == null ? void 0 : o.label) && (n && e ? S.innerHTML = e : S.innerHTML = o.label);
    }, [
      o == null ? void 0 : o.label,
      S,
      n,
      e,
      _
    ]), i && o ? a.jsx(me, {
      ...k,
      children: a.jsxs(g, {
        sx: {
          display: "flex",
          flexDirection: t === "vertical" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          a.jsx(Z, {
            "data-font": "active",
            ref: j,
            sx: {
              textTransform: "none",
              flexGrow: 1,
              pr: t === "vertical" ? 1 : 0,
              pb: t === "vertical" ? 0 : 1,
              fontSize: o.valueSize,
              background: N(o.textColor),
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: N(o.textColor) ? "transparent" : o.textColor
            }
          }),
          a.jsx(g, {
            "data-position": "active",
            sx: {
              position: "relative",
              bottom: o.iconYOffset,
              left: o.iconXOffset,
              flexGrow: 1
            },
            children: a.jsx(V, {
              "data-img": "active",
              src: o.icon,
              alt: "",
              style: {
                position: "relative",
                width: o.iconSize,
                ...L(o.icon, o.iconColor, o == null ? void 0 : o.forceColorMask)
              }
            })
          })
        ]
      })
    }) : null;
  }, be = ee(ue, {
    shouldForwardProp: (i) => i !== "data"
  })(({ theme: i, data: t }) => {
    const f = B((t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main) || i.palette.primary.main, p = (t == null ? void 0 : t.thumbBorderWidth) ?? 0, k = B((t == null ? void 0 : t.thumbBorderColor) || (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main);
    return {
      "& .MuiSlider-thumb": {
        width: `${(t == null ? void 0 : t.thumbWidth) ?? 20}px`,
        height: `${(t == null ? void 0 : t.thumbHeight) ?? 20}px`,
        background: (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main,
        ...p > 0 && {
          border: `${p}px solid ${k || i.palette.primary.main}`
        },
        "&:hover": {
          boxShadow: `0px 0px 0px 8px ${G(f, 0.32)}`
        },
        "&:active": {
          boxShadow: `0px 0px 0px 14px ${G(f, 0.32)}`
        }
      },
      "& .MuiSlider-track": {
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        borderColor: B((t == null ? void 0 : t.trackBorderColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main),
        background: (t == null ? void 0 : t.trackBackgroundColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main,
        borderWidth: (t == null ? void 0 : t.trackBorderWidth) ? `${t.trackBorderWidth}px` : "0px",
        borderStyle: "solid"
      },
      "& .MuiSlider-rail": {
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%",
        width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%",
        background: (t == null ? void 0 : t.railBackgroundColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main,
        borderWidth: (t == null ? void 0 : t.railBorderWidth) ? `${t.railBorderWidth}px` : "0px",
        borderStyle: "solid",
        borderColor: B((t == null ? void 0 : t.railBorderColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main)
      },
      "& .MuiSlider-mark": {
        width: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markWidth) ?? 2}px` : `${(t == null ? void 0 : t.markHeight) ?? 16}px`,
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markHeight) ?? 2}px` : `${(t == null ? void 0 : t.markWidth) ?? 3}px`,
        background: (t == null ? void 0 : t.markBackgroundColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main
      },
      "& .MuiSlider-markActive": {
        width: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markWidth) ?? 2}px` : `${(t == null ? void 0 : t.markHeight) ?? 16}px`,
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markHeight) ?? 2}px` : `${(t == null ? void 0 : t.markWidth) ?? 3}px`,
        backgroundColor: (t == null ? void 0 : t.markBackgroundColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main,
        "&.MuiSlider-markActive": {
          background: (t == null ? void 0 : t.markBackgroundColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main
        }
      }
    };
  }), he = () => {
    const i = s.useContext(ie), { widget: { data: { oidObject: t } }, widget: e, theme: f } = i, { data: p, states: k, minValue: S, maxValue: j, activeIndex: _, resolveStyleData: o } = oe("oid"), { value: n, updateValue: U, hasBackendChange: D } = se("oid"), [M, I] = s.useState(typeof n == "number" ? n : void 0), C = s.useRef(null), [w, J] = s.useState({
      x: 0,
      y: 0
    }), r = e.data.sliderOrientation === "horizontal", K = o("", false).textColor || f.palette.text.primary, O = s.useMemo(() => r ? e.data.iconMin || e.data.iconSmallMin : e.data.iconMax || e.data.iconSmallMax, [
      r,
      e.data.iconMin,
      e.data.iconSmallMin,
      e.data.iconMax,
      e.data.iconSmallMax
    ]), $ = s.useMemo(() => r ? e.data.iconMax || e.data.iconSmallMax : e.data.iconMin || e.data.iconSmallMin, [
      r,
      e.data.iconMax,
      e.data.iconSmallMax,
      e.data.iconMin,
      e.data.iconSmallMin
    ]), P = e.data.startIconColor || (X(O) ? f.palette.primary.main : void 0), F = e.data.endIconColor || (X($) ? f.palette.primary.main : void 0), R = t == null ? void 0 : t.type, E = R === "number", x = s.useMemo(() => !e.data.onlyStates && e.data.minValue !== void 0 ? Number(e.data.minValue) : S, [
      e.data.onlyStates,
      e.data.minValue,
      S
    ]), b = s.useMemo(() => !e.data.onlyStates && e.data.maxValue !== void 0 ? Number(e.data.maxValue) : j, [
      e.data.onlyStates,
      e.data.maxValue,
      j
    ]), W = s.useMemo(() => {
      const c = o("", false), d = o("", true), h = (l) => String(l) !== String(n) ? c : {
        ...c,
        ...e.data.iconSizeActive !== void 0 && {
          iconSize: d.iconSize
        },
        ...e.data.iconColorActive && {
          iconColor: d.iconColor
        },
        ...e.data.enableIconColorMaskActive !== void 0 && {
          forceColorMask: d.forceColorMask
        }
      }, v = k.filter((l) => typeof l.value == "number").filter((l) => (x === null || l.value >= x) && (b === null || l.value <= b));
      if (e.data.onlyStates) return v.sort((l, u) => l.value - u.value);
      if (x !== null && !v.some((l) => l.value === x) && v.push({
        ...h(x),
        value: x,
        label: `${x}${(t == null ? void 0 : t.unit) || ""}`
      }), b !== null && !v.some((l) => l.value === b) && v.push({
        ...h(b),
        value: b,
        label: `${b}${(t == null ? void 0 : t.unit) || ""}`
      }), x !== null && b !== null) {
        const l = Number(e.data.markStep) || 1;
        for (let u = x + l; u < b; u += l) v.some((A) => A.value === u) || v.push({
          ...h(u),
          value: u,
          label: `${u}${(t == null ? void 0 : t.unit) || ""}`
        });
      }
      return v.sort((l, u) => l.value - u.value);
    }, [
      k,
      e.data.onlyStates,
      e.data.markStep,
      x,
      b,
      t == null ? void 0 : t.unit,
      n,
      o,
      e.data.enableIconColorMaskActive,
      e.data.iconColorActive,
      e.data.iconSizeActive
    ]), H = s.useMemo(() => {
      if (n === void 0) return null;
      const c = W.findIndex((d) => String(d.value) === String(n));
      return c !== -1 ? c : null;
    }, [
      n,
      W
    ]);
    s.useEffect(() => {
      M === void 0 && typeof n == "number" && I(n);
    }, [
      n,
      M
    ]), s.useEffect(() => {
      D && I(typeof n == "number" ? n : void 0);
    }, [
      D,
      n
    ]);
    const Q = () => {
      if (!C.current) return;
      const c = C.current.querySelector(".MuiSlider-root"), d = C.current.querySelector(".MuiSlider-rail");
      if (c && d) {
        const h = C.current.getBoundingClientRect(), z = d.getBoundingClientRect(), v = z.left - h.left + z.width / 2, l = z.top - h.top + z.height / 2, u = h.width / 2, A = h.height / 2;
        J({
          x: v - u,
          y: l - A
        });
      }
    };
    return s.useEffect(() => {
      if (!C.current) return;
      let c = null;
      const d = () => {
        c && clearTimeout(c), c = setTimeout(Q, 100);
      }, h = new ResizeObserver(d);
      return h.observe(C.current), d(), () => {
        h.disconnect(), c && clearTimeout(c);
      };
    }, [
      e.data.marks,
      e.data.sliderOrientation,
      e.data.iconSizeStart,
      e.data.iconSizeEnd,
      M
    ]), a.jsxs(re, {
      isValidType: E,
      data: p,
      oidValue: n,
      sx: {
        p: Number(e.data.sliderPadding)
      },
      children: [
        a.jsx(le, {
          data: p,
          widget: e
        }),
        E ? a.jsxs(g, {
          ref: C,
          sx: {
            gap: Number(e.data.sliderGap) || 0,
            display: "flex",
            flexDirection: r ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          children: [
            O && a.jsx(g, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                transform: r ? `translateY(${w.y}px)` : `translateX(${w.x}px)`
              },
              children: a.jsx(V, {
                alt: "",
                src: O,
                style: {
                  width: r ? e.data.iconSizeStart || "24px" : e.data.iconSizeEnd || "24px",
                  ...L(O, r ? P : F, true)
                }
              })
            }),
            a.jsx(g, {
              sx: {
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                minWidth: r ? "200px" : "auto",
                minHeight: r ? "auto" : "200px"
              },
              children: typeof M == "number" && a.jsx(be, {
                data: e.data,
                slots: {
                  markLabel: xe
                },
                slotProps: {
                  markLabel: {
                    marks: e.data.marks,
                    sliderOrientation: e.data.sliderOrientation,
                    aliasActive: e.data.aliasActive,
                    activeMarkIndex: H,
                    defaultIconColor: f.palette.primary.main
                  }
                },
                disabled: R !== "number",
                valueLabelDisplay: e.data.valueLabelDisplay,
                orientation: e.data.sliderOrientation,
                min: x ?? void 0,
                max: b ?? void 0,
                marks: W,
                step: e.data.onlyStates ? null : e.data.step !== void 0 ? Number(e.data.step) : void 0,
                size: e.data.sliderSize,
                value: M,
                onChange: (c, d) => {
                  typeof d == "number" && (I(d), U(d));
                },
                sx: {
                  mb: e.data.marks && r ? "20px" : "0px",
                  mr: e.data.marks && !r ? "44px" : "0px",
                  "& .MuiSlider-thumb": {
                    color: e.data.sliderColor
                  },
                  "& .MuiSlider-rail": {
                    color: e.data.sliderColor || "primary.main"
                  },
                  "& .MuiSlider-track": {
                    color: e.data.sliderColor || "primary.main"
                  },
                  "& .MuiSlider-mark": {
                    color: e.data.sliderColor || "primary.main"
                  },
                  "& .MuiSlider-markActive": {
                    bgcolor: e.data.sliderColor || "primary.main",
                    filter: "brightness(2.5)"
                  },
                  "& .MuiSlider-valueLabel": {
                    fontSize: Y(e.data.valueSizeActive) || p.valueSizeActive || p.valueSize,
                    color: e.data.textColorActive || p.textColorActive || _ && e.data.markerTextColor || p.textColor || f.palette.text.primary,
                    bgcolor: "transparent",
                    top: r ? e.data.labelPosition : void 0,
                    right: r ? void 0 : e.data.labelPosition
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: p.valueSize,
                    color: K,
                    top: r ? e.data.markPosition : void 0,
                    left: r ? void 0 : e.data.markPosition
                  },
                  "& .MuiSlider-markLabelActive": {
                    [`&[data-index='${H}']`]: {
                      "& div[data-font='active']": {
                        color: e.data.textColorActive ? `${e.data.textColorActive} !important` : void 0,
                        fontSize: typeof e.data.valueSizeActive == "number" ? `${Y(e.data.valueSizeActive)} !important` : void 0
                      },
                      "& div[data-position='active']": {
                        left: e.data.iconXOffsetActive && e.data.iconXOffsetActive !== "0px" ? `${e.data.iconXOffsetActive} !important` : e.data.iconXOffsetActive === "" ? void 0 : "0px !important",
                        bottom: e.data.iconYOffsetActive && e.data.iconYOffsetActive !== "0px" ? `${e.data.iconYOffsetActive} !important` : e.data.iconYOffsetActive === "" ? void 0 : "0px !important"
                      }
                    }
                  }
                }
              })
            }),
            $ && a.jsx(g, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                transform: r ? `translateY(${w.y}px)` : `translateX(${w.x}px)`
              },
              children: a.jsx(V, {
                alt: "",
                src: $,
                style: {
                  width: r ? e.data.iconSizeEnd || "24px" : e.data.iconSizeStart || "24px",
                  ...L($, r ? F : P, true)
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  q = class extends te {
    static getWidgetInfo() {
      return {
        id: "tplSliderCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "SliderCollectionWidget",
        visWidgetLabel: "slider_collection_widget",
        visOrder: 4,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...T()
            ]
          },
          {
            name: "slider",
            label: "group_slider",
            fields: [
              ...ne([
                "number"
              ]),
              ...ce(),
              ...pe()
            ]
          },
          {
            name: "active",
            label: "group_active",
            fields: [
              ...T({
                groupName: "Active",
                allFields: false
              })
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...T({
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
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-slider.png"
      };
    }
    getWidgetInfo() {
      return q.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, e) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const e = {
        id: t.id,
        refService: t.refService,
        style: t.style,
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, de(this.wrapContent(a.jsx(he, {})), e);
    }
  };
});
export {
  __tla,
  q as default
};
