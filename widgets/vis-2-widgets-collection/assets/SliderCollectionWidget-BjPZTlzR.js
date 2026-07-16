import { j as a, n as g, T as Q, s as Z, i as F, G as ee, __tla as __tla_0 } from "./usePopoverPositioning-C05Nu8XW.js";
import { h as te, i as h, C as m, b as H, S as T, g as V, a as ae, u as ie, j as N, c as oe, d as le, k as W, l as w, e as I, f as re, w as ne, __tla as __tla_1 } from "./useData-DFGCESxg.js";
import { u as de, d as se, __tla as __tla_2 } from "./useValueState-xFsj3rw8.js";
import { v as s, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { a as ce, S as me, __tla as __tla_4 } from "./Slider-mVupvoPJ.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let X;
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
  const ue = () => [
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
    te({
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
    h("thumbColor", "thumb_color"),
    {
      name: "thumbBorderWidth",
      label: "thumb_border_width",
      type: "number",
      default: 0,
      min: 0,
      max: 100
    },
    h("thumbBorderColor", "thumb_border_color"),
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
    h("trackBackgroundColor", "track_background_color"),
    {
      name: "trackBorderWidth",
      label: "track_border_width",
      type: "number",
      default: 1,
      min: 0,
      max: 100
    },
    h("trackBorderColor", "track_border_color"),
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
    h("railBackgroundColor", "rail_background_color"),
    {
      name: "railBorderWidth",
      label: "rail_border_width",
      type: "number",
      default: 0,
      min: 0,
      max: 100
    },
    h("railBorderColor", "rail_border_color"),
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
    h("markBackgroundColor", "mark_background_color"),
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
    h("markerTextColor", "marker_text_color"),
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
    h("startIconColor", "icon_color", {
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
    h("endIconColor", "icon_color", {
      noGradient: true,
      hidden: "!data.iconMax && !data.iconSmallMax"
    })
  ], pe = ({ marks: i, sliderOrientation: t, aliasActive: e, activeMarkIndex: f, defaultIconColor: u, ...v }) => {
    var _a;
    const [y, _] = s.useState(null), S = v["data-index"], l = (_a = v.ownerState.marks) == null ? void 0 : _a[S], d = f === S;
    return s.useEffect(() => {
      y && (l == null ? void 0 : l.label) && (d && e ? y.innerHTML = e : y.innerHTML = l.label);
    }, [
      l == null ? void 0 : l.label,
      y,
      d,
      e,
      S
    ]), i && l ? a.jsx(ce, {
      ...v,
      children: a.jsxs(g, {
        sx: {
          display: "flex",
          flexDirection: t === "vertical" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          a.jsx(Q, {
            "data-font": "active",
            ref: _,
            sx: {
              textTransform: "none",
              flexGrow: 1,
              pr: t === "vertical" ? 1 : 0,
              pb: t === "vertical" ? 0 : 1,
              fontSize: l.valueSize,
              background: H(l.textColor),
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: H(l.textColor) ? "transparent" : l.textColor
            }
          }),
          a.jsx(g, {
            "data-position": "active",
            sx: {
              position: "relative",
              bottom: l.iconYOffset,
              left: l.iconXOffset,
              flexGrow: 1
            },
            children: a.jsx(T, {
              "data-img": "active",
              src: l.icon,
              alt: "",
              style: {
                position: "relative",
                width: l.iconSize,
                ...V(l.icon, l.iconColor, l == null ? void 0 : l.forceColorMask)
              }
            })
          })
        ]
      })
    }) : null;
  }, xe = Z(me, {
    shouldForwardProp: (i) => i !== "data"
  })(({ theme: i, data: t }) => {
    const f = w((t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main) || i.palette.primary.main, u = (t == null ? void 0 : t.thumbBorderWidth) ?? 0, v = w((t == null ? void 0 : t.thumbBorderColor) || (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main);
    return {
      "& .MuiSlider-thumb": {
        width: `${(t == null ? void 0 : t.thumbWidth) ?? 20}px`,
        height: `${(t == null ? void 0 : t.thumbHeight) ?? 20}px`,
        background: (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main,
        ...u > 0 && {
          border: `${u}px solid ${v || i.palette.primary.main}`
        },
        "&:hover": {
          boxShadow: `0px 0px 0px 8px ${F(f, 0.32)}`
        },
        "&:active": {
          boxShadow: `0px 0px 0px 14px ${F(f, 0.32)}`
        }
      },
      "& .MuiSlider-track": {
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        borderColor: w((t == null ? void 0 : t.trackBorderColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main),
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
        borderColor: w((t == null ? void 0 : t.railBorderColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main)
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
  }), be = () => {
    const i = s.useContext(ae), { widget: { data: { oidObject: t } }, widget: e, theme: f } = i, { data: u, states: v, minValue: y, maxValue: _, activeIndex: S, resolveStyleData: l } = ie("oid"), { value: d, updateValue: Y, hasBackendChange: A } = de("oid"), [C, O] = s.useState(typeof d == "number" ? d : void 0), k = s.useRef(null), [M, G] = s.useState({
      x: 0,
      y: 0
    }), n = e.data.sliderOrientation === "horizontal", z = s.useMemo(() => n ? e.data.iconMin || e.data.iconSmallMin : e.data.iconMax || e.data.iconSmallMax, [
      n,
      e.data.iconMin,
      e.data.iconSmallMin,
      e.data.iconMax,
      e.data.iconSmallMax
    ]), j = s.useMemo(() => n ? e.data.iconMax || e.data.iconSmallMax : e.data.iconMin || e.data.iconSmallMin, [
      n,
      e.data.iconMax,
      e.data.iconSmallMax,
      e.data.iconMin,
      e.data.iconSmallMin
    ]), L = e.data.startIconColor || (N(z) ? f.palette.primary.main : void 0), D = e.data.endIconColor || (N(j) ? f.palette.primary.main : void 0), P = t == null ? void 0 : t.type, R = P === "number", x = s.useMemo(() => !e.data.onlyStates && e.data.minValue !== void 0 ? Number(e.data.minValue) : y, [
      e.data.onlyStates,
      e.data.minValue,
      y
    ]), b = s.useMemo(() => !e.data.onlyStates && e.data.maxValue !== void 0 ? Number(e.data.maxValue) : _, [
      e.data.onlyStates,
      e.data.maxValue,
      _
    ]), $ = s.useMemo(() => {
      const r = v.filter((o) => typeof o.value == "number").filter((o) => (x === null || o.value >= x) && (b === null || o.value <= b));
      if (e.data.onlyStates) return r.sort((o, c) => o.value - c.value);
      if (x !== null && !r.some((o) => o.value === x) && r.push({
        ...l("", false),
        value: x,
        label: `${x}${(t == null ? void 0 : t.unit) || ""}`
      }), b !== null && !r.some((o) => o.value === b) && r.push({
        ...l("", false),
        value: b,
        label: `${b}${(t == null ? void 0 : t.unit) || ""}`
      }), x !== null && b !== null) {
        const o = Number(e.data.markStep) || 1;
        for (let c = x + o; c < b; c += o) r.some((B) => B.value === c) || r.push({
          ...l("", false),
          value: c,
          label: `${c}${(t == null ? void 0 : t.unit) || ""}`
        });
      }
      return r.sort((o, c) => o.value - c.value);
    }, [
      v,
      e.data.onlyStates,
      e.data.markStep,
      x,
      b,
      t == null ? void 0 : t.unit,
      l
    ]), E = s.useMemo(() => {
      if (d === void 0) return null;
      const p = $.findIndex((r) => String(r.value) === String(d));
      return p !== -1 ? p : null;
    }, [
      d,
      $
    ]);
    s.useEffect(() => {
      C === void 0 && typeof d == "number" && O(d);
    }, [
      d,
      C
    ]), s.useEffect(() => {
      A && O(typeof d == "number" ? d : void 0);
    }, [
      A,
      d
    ]);
    const q = () => {
      if (!k.current) return;
      const p = k.current.querySelector(".MuiSlider-root"), r = k.current.querySelector(".MuiSlider-rail");
      if (p && r) {
        const o = k.current.getBoundingClientRect(), c = r.getBoundingClientRect(), B = c.left - o.left + c.width / 2, U = c.top - o.top + c.height / 2, J = o.width / 2, K = o.height / 2;
        G({
          x: B - J,
          y: U - K
        });
      }
    };
    return s.useEffect(() => {
      if (!k.current) return;
      let p = null;
      const r = () => {
        p && clearTimeout(p), p = setTimeout(q, 100);
      }, o = new ResizeObserver(r);
      return o.observe(k.current), r(), () => {
        o.disconnect(), p && clearTimeout(p);
      };
    }, [
      e.data.marks,
      e.data.sliderOrientation,
      e.data.iconSizeStart,
      e.data.iconSizeEnd,
      C
    ]), a.jsxs(oe, {
      isValidType: R,
      data: u,
      oidValue: d,
      sx: {
        p: Number(e.data.sliderPadding)
      },
      children: [
        a.jsx(le, {
          data: u,
          widget: e
        }),
        R ? a.jsxs(g, {
          ref: k,
          sx: {
            gap: Number(e.data.sliderGap) || 0,
            display: "flex",
            flexDirection: n ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          children: [
            z && a.jsx(g, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                transform: n ? `translateY(${M.y}px)` : `translateX(${M.x}px)`
              },
              children: a.jsx(T, {
                alt: "",
                src: z,
                style: {
                  width: n ? e.data.iconSizeStart || "24px" : e.data.iconSizeEnd || "24px",
                  ...V(z, n ? L : D, true)
                }
              })
            }),
            a.jsx(g, {
              sx: {
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                minWidth: n ? "200px" : "auto",
                minHeight: n ? "auto" : "200px"
              },
              children: typeof C == "number" && a.jsx(xe, {
                data: e.data,
                slots: {
                  markLabel: pe
                },
                slotProps: {
                  markLabel: {
                    marks: e.data.marks,
                    sliderOrientation: e.data.sliderOrientation,
                    aliasActive: e.data.aliasActive,
                    activeMarkIndex: E,
                    defaultIconColor: f.palette.primary.main
                  }
                },
                disabled: P !== "number",
                valueLabelDisplay: e.data.valueLabelDisplay,
                orientation: e.data.sliderOrientation,
                min: x ?? void 0,
                max: b ?? void 0,
                marks: $,
                step: e.data.onlyStates ? null : e.data.step !== void 0 ? Number(e.data.step) : void 0,
                size: e.data.sliderSize,
                value: C,
                onChange: (p, r) => {
                  typeof r == "number" && (O(r), Y(r));
                },
                sx: {
                  mb: e.data.marks && n ? "20px" : "0px",
                  mr: e.data.marks && !n ? "44px" : "0px",
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
                    fontSize: W(e.data.valueSizeActive) || u.valueSizeActive || S && e.data.markerTextSize && W(e.data.markerTextSize) || u.valueSize,
                    color: e.data.textColorActive || u.textColorActive || S && e.data.markerTextColor || u.textColor,
                    bgcolor: "transparent",
                    top: n ? e.data.labelPosition : void 0,
                    right: n ? void 0 : e.data.labelPosition
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: u.valueSize,
                    color: e.data.markerTextColor || u.textColor,
                    top: n ? e.data.markPosition : void 0,
                    left: n ? void 0 : e.data.markPosition
                  },
                  "& .MuiSlider-markLabelActive": {
                    [`&[data-index='${E}']`]: {
                      "& div[data-font='active']": {
                        color: e.data.textColorActive ? `${e.data.textColorActive} !important` : void 0,
                        fontSize: typeof e.data.valueSizeActive == "number" ? `${W(e.data.valueSizeActive)} !important` : void 0
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
            j && a.jsx(g, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                transform: n ? `translateY(${M.y}px)` : `translateX(${M.x}px)`
              },
              children: a.jsx(T, {
                alt: "",
                src: j,
                style: {
                  width: n ? e.data.iconSizeEnd || "24px" : e.data.iconSizeStart || "24px",
                  ...V(j, n ? D : L, true)
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  X = class extends ee {
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
              ...I()
            ]
          },
          {
            name: "slider",
            label: "group_slider",
            fields: [
              ...re([
                "number"
              ]),
              ...se(),
              ...ue()
            ]
          },
          {
            name: "active",
            label: "group_active",
            fields: [
              ...I({
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
              ...I({
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
      return X.getWidgetInfo();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ne(this.wrapContent(a.jsx(be, {})), e);
    }
  };
});
export {
  __tla,
  X as default
};
