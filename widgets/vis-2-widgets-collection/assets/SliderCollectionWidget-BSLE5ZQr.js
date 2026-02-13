import { j as i, C as u, O as b, w as S, T as Q, A as E, S as T, z as V, v as Z, y as ee, Q as H, E as te, G as ae, s as ie, R as W, U as w, o as N, H as le, J as I, K as oe, N as re, __tla as __tla_0 } from "./useData-Dl8i4AuM.js";
import { u as ne, d as de, __tla as __tla_1 } from "./useValueState-B-rp1Txw.js";
import { v as c, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { a as se, S as ce, __tla as __tla_3 } from "./Slider-UEEerAAl.js";
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
  })()
]).then(async () => {
  const me = () => [
    {
      type: "custom",
      component: () => i.jsx(u, {})
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
    {
      name: "sliderColor",
      label: "slider_color",
      default: "",
      type: "custom",
      component: (a, t, e, l) => i.jsx(b, {
        field: a,
        data: t,
        onDataChange: e,
        props: l
      })
    },
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
      component: () => i.jsx(u, {
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
    {
      name: "thumbColor",
      label: "thumb_color",
      default: "",
      type: "custom",
      fallbackFields: [
        "sliderColor"
      ],
      component: (a, t, e, l) => i.jsx(b, {
        field: a,
        data: t,
        onDataChange: e,
        props: l
      })
    },
    {
      name: "thumbBorderWidth",
      label: "thumb_border_width",
      type: "number",
      default: 0,
      min: 0,
      max: 100
    },
    {
      name: "thumbBorderColor",
      label: "thumb_border_color",
      default: "",
      type: "custom",
      fallbackFields: [
        "sliderColor"
      ],
      component: (a, t, e, l) => i.jsx(b, {
        field: a,
        data: t,
        onDataChange: e,
        props: l
      })
    },
    {
      type: "custom",
      component: () => i.jsx(u, {
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
    {
      name: "trackBackgroundColor",
      label: "track_background_color",
      default: "",
      type: "custom",
      fallbackFields: [
        "sliderColor"
      ],
      component: (a, t, e, l) => i.jsx(b, {
        field: a,
        data: t,
        onDataChange: e,
        props: l
      })
    },
    {
      name: "trackBorderWidth",
      label: "track_border_width",
      type: "number",
      default: 1,
      min: 0,
      max: 100
    },
    {
      name: "trackBorderColor",
      label: "track_border_color",
      default: "",
      type: "custom",
      fallbackFields: [
        "sliderColor"
      ],
      component: (a, t, e, l) => i.jsx(b, {
        field: a,
        data: t,
        onDataChange: e,
        props: l
      })
    },
    {
      type: "custom",
      component: () => i.jsx(u, {
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
    {
      name: "railBackgroundColor",
      label: "rail_background_color",
      default: "",
      type: "custom",
      fallbackFields: [
        "sliderColor"
      ],
      component: (a, t, e, l) => i.jsx(b, {
        field: a,
        data: t,
        onDataChange: e,
        props: l
      })
    },
    {
      name: "railBorderWidth",
      label: "rail_border_width",
      type: "number",
      default: 0,
      min: 0,
      max: 100
    },
    {
      name: "railBorderColor",
      label: "rail_border_color",
      default: "",
      type: "custom",
      fallbackFields: [
        "sliderColor"
      ],
      component: (a, t, e, l) => i.jsx(b, {
        field: a,
        data: t,
        onDataChange: e,
        props: l
      })
    },
    {
      type: "custom",
      component: () => i.jsx(u, {
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
    {
      name: "markBackgroundColor",
      label: "mark_background_color",
      default: "",
      type: "custom",
      fallbackFields: [
        "sliderColor"
      ],
      component: (a, t, e, l) => i.jsx(b, {
        field: a,
        data: t,
        onDataChange: e,
        props: l
      })
    },
    {
      type: "custom",
      component: () => i.jsx(u, {
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
      component: () => i.jsx(u, {}),
      hidden: "!data.values_count"
    },
    {
      name: "onlyStates",
      type: "checkbox",
      label: "only_states",
      default: false,
      hidden: "!data.values_count"
    },
    {
      type: "custom",
      component: () => i.jsx(u, {
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
      component: () => i.jsx(u, {}),
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
      component: () => i.jsx(u, {}),
      hidden: "!data.marks"
    },
    {
      name: "markerTextColor",
      label: "marker_text_color",
      default: "",
      type: "custom",
      fallbackFields: [
        "sliderColor"
      ],
      component: (a, t, e, l) => i.jsx(b, {
        field: a,
        data: t,
        onDataChange: e,
        props: l
      })
    },
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
      component: () => i.jsx(u, {}),
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
      component: () => i.jsx(u, {
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
    {
      name: "startIconColor",
      label: "icon_color",
      default: "",
      type: "custom",
      hidden: "!data.iconMin && !data.iconSmallMin",
      fallbackFields: [
        "sliderColor"
      ],
      noGradient: true,
      component: (a, t, e, l) => i.jsx(b, {
        field: a,
        data: t,
        onDataChange: e,
        props: l
      })
    },
    {
      type: "custom",
      component: () => i.jsx(u, {
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
    {
      name: "endIconColor",
      label: "icon_color",
      default: "",
      type: "custom",
      hidden: "!data.iconMax && !data.iconSmallMax",
      fallbackFields: [
        "sliderColor"
      ],
      noGradient: true,
      component: (a, t, e, l) => i.jsx(b, {
        field: a,
        data: t,
        onDataChange: e,
        props: l
      })
    }
  ], ue = ({ marks: a, sliderOrientation: t, aliasActive: e, activeMarkIndex: l, defaultIconColor: p, ...v }) => {
    var _a;
    const [y, _] = c.useState(null), C = v["data-index"], r = (_a = v.ownerState.marks) == null ? void 0 : _a[C], s = l === C;
    return c.useEffect(() => {
      y && (r == null ? void 0 : r.label) && (s && e ? y.innerHTML = e : y.innerHTML = r.label);
    }, [
      r == null ? void 0 : r.label,
      y,
      s,
      e,
      C
    ]), a && r ? i.jsx(se, {
      ...v,
      children: i.jsxs(S, {
        sx: {
          display: "flex",
          flexDirection: t === "vertical" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          i.jsx(Q, {
            "data-font": "active",
            ref: _,
            sx: {
              textTransform: "none",
              flexGrow: 1,
              pr: t === "vertical" ? 1 : 0,
              pb: t === "vertical" ? 0 : 1,
              fontSize: r.valueSize,
              background: E(r.textColor),
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: E(r.textColor) ? "transparent" : r.textColor
            }
          }),
          i.jsx(S, {
            "data-position": "active",
            sx: {
              position: "relative",
              bottom: r.iconYOffset,
              left: r.iconXOffset,
              flexGrow: 1
            },
            children: i.jsx(T, {
              "data-img": "active",
              src: r.icon,
              alt: "",
              style: {
                position: "relative",
                width: r.iconSize,
                ...V(r.icon, r.iconColor, r == null ? void 0 : r.forceColorMask)
              }
            })
          })
        ]
      })
    }) : null;
  }, pe = ie(ce, {
    shouldForwardProp: (a) => a !== "data"
  })(({ theme: a, data: t }) => {
    const l = w((t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main) || a.palette.primary.main, p = (t == null ? void 0 : t.thumbBorderWidth) ?? 0, v = w((t == null ? void 0 : t.thumbBorderColor) || (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main);
    return {
      "& .MuiSlider-thumb": {
        width: `${(t == null ? void 0 : t.thumbWidth) ?? 20}px`,
        height: `${(t == null ? void 0 : t.thumbHeight) ?? 20}px`,
        background: (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main,
        ...p > 0 && {
          border: `${p}px solid ${v || a.palette.primary.main}`
        },
        "&:hover": {
          boxShadow: `0px 0px 0px 8px ${N(l, 0.32)}`
        },
        "&:active": {
          boxShadow: `0px 0px 0px 14px ${N(l, 0.32)}`
        }
      },
      "& .MuiSlider-track": {
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        borderColor: w((t == null ? void 0 : t.trackBorderColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main),
        background: (t == null ? void 0 : t.trackBackgroundColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main,
        borderWidth: (t == null ? void 0 : t.trackBorderWidth) ? `${t.trackBorderWidth}px` : "0px",
        borderStyle: "solid"
      },
      "& .MuiSlider-rail": {
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%",
        width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%",
        background: (t == null ? void 0 : t.railBackgroundColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main,
        borderWidth: (t == null ? void 0 : t.railBorderWidth) ? `${t.railBorderWidth}px` : "0px",
        borderStyle: "solid",
        borderColor: w((t == null ? void 0 : t.railBorderColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main)
      },
      "& .MuiSlider-mark": {
        width: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markWidth) ?? 2}px` : `${(t == null ? void 0 : t.markHeight) ?? 16}px`,
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markHeight) ?? 2}px` : `${(t == null ? void 0 : t.markWidth) ?? 3}px`,
        background: (t == null ? void 0 : t.markBackgroundColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main
      },
      "& .MuiSlider-markActive": {
        width: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markWidth) ?? 2}px` : `${(t == null ? void 0 : t.markHeight) ?? 16}px`,
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markHeight) ?? 2}px` : `${(t == null ? void 0 : t.markWidth) ?? 3}px`,
        backgroundColor: (t == null ? void 0 : t.markBackgroundColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main,
        "&.MuiSlider-markActive": {
          background: (t == null ? void 0 : t.markBackgroundColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main
        }
      }
    };
  }), xe = () => {
    const a = c.useContext(Z), { widget: { data: { oidObject: t } }, widget: e, theme: l } = a, { data: p, states: v, minValue: y, maxValue: _, activeIndex: C, resolveStyleData: r } = ee("oid"), { value: s, updateValue: X, hasBackendChange: A } = ne("oid"), [g, $] = c.useState(typeof s == "number" ? s : void 0), k = c.useRef(null), [M, Y] = c.useState({
      x: 0,
      y: 0
    }), d = e.data.sliderOrientation === "horizontal", j = c.useMemo(() => d ? e.data.iconMin || e.data.iconSmallMin : e.data.iconMax || e.data.iconSmallMax, [
      d,
      e.data.iconMin,
      e.data.iconSmallMin,
      e.data.iconMax,
      e.data.iconSmallMax
    ]), z = c.useMemo(() => d ? e.data.iconMax || e.data.iconSmallMax : e.data.iconMin || e.data.iconSmallMin, [
      d,
      e.data.iconMax,
      e.data.iconSmallMax,
      e.data.iconMin,
      e.data.iconSmallMin
    ]), L = e.data.startIconColor || (H(j) ? l.palette.primary.main : void 0), F = e.data.endIconColor || (H(z) ? l.palette.primary.main : void 0), D = t == null ? void 0 : t.type, P = D === "number", f = c.useMemo(() => !e.data.onlyStates && e.data.minValue !== void 0 ? Number(e.data.minValue) : y, [
      e.data.onlyStates,
      e.data.minValue,
      y
    ]), h = c.useMemo(() => !e.data.onlyStates && e.data.maxValue !== void 0 ? Number(e.data.maxValue) : _, [
      e.data.onlyStates,
      e.data.maxValue,
      _
    ]), B = c.useMemo(() => {
      const n = v.filter((o) => typeof o.value == "number").filter((o) => (f === null || o.value >= f) && (h === null || o.value <= h));
      if (e.data.onlyStates) return n.sort((o, m) => o.value - m.value);
      if (f !== null && !n.some((o) => o.value === f) && n.push({
        ...r("", false),
        value: f,
        label: `${f}${(t == null ? void 0 : t.unit) || ""}`
      }), h !== null && !n.some((o) => o.value === h) && n.push({
        ...r("", false),
        value: h,
        label: `${h}${(t == null ? void 0 : t.unit) || ""}`
      }), f !== null && h !== null) {
        const o = Number(e.data.markStep) || 1;
        for (let m = f + o; m < h; m += o) n.some((O) => O.value === m) || n.push({
          ...r("", false),
          value: m,
          label: `${m}${(t == null ? void 0 : t.unit) || ""}`
        });
      }
      return n.sort((o, m) => o.value - m.value);
    }, [
      v,
      e.data.onlyStates,
      e.data.markStep,
      f,
      h,
      t == null ? void 0 : t.unit,
      r
    ]), R = c.useMemo(() => {
      if (s === void 0) return null;
      const x = B.findIndex((n) => String(n.value) === String(s));
      return x !== -1 ? x : null;
    }, [
      s,
      B
    ]);
    c.useEffect(() => {
      g === void 0 && typeof s == "number" && $(s);
    }, [
      s,
      g
    ]), c.useEffect(() => {
      A && $(typeof s == "number" ? s : void 0);
    }, [
      A,
      s
    ]);
    const U = () => {
      if (!k.current) return;
      const x = k.current.querySelector(".MuiSlider-root"), n = k.current.querySelector(".MuiSlider-rail");
      if (x && n) {
        const o = k.current.getBoundingClientRect(), m = n.getBoundingClientRect(), O = m.left - o.left + m.width / 2, q = m.top - o.top + m.height / 2, J = o.width / 2, K = o.height / 2;
        Y({
          x: O - J,
          y: q - K
        });
      }
    };
    return c.useEffect(() => {
      if (!k.current) return;
      let x = null;
      const n = () => {
        x && clearTimeout(x), x = setTimeout(U, 100);
      }, o = new ResizeObserver(n);
      return o.observe(k.current), n(), () => {
        o.disconnect(), x && clearTimeout(x);
      };
    }, [
      e.data.marks,
      e.data.sliderOrientation,
      e.data.iconSizeStart,
      e.data.iconSizeEnd,
      g
    ]), i.jsxs(te, {
      isValidType: P,
      data: p,
      oidValue: s,
      sx: {
        p: Number(e.data.sliderPadding)
      },
      children: [
        i.jsx(ae, {
          data: p,
          widget: e
        }),
        P ? i.jsxs(S, {
          ref: k,
          sx: {
            gap: Number(e.data.sliderGap) || 0,
            display: "flex",
            flexDirection: d ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          children: [
            j && i.jsx(S, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                transform: d ? `translateY(${M.y}px)` : `translateX(${M.x}px)`
              },
              children: i.jsx(T, {
                alt: "",
                src: j,
                style: {
                  width: d ? e.data.iconSizeStart || "24px" : e.data.iconSizeEnd || "24px",
                  ...V(j, d ? L : F, true)
                }
              })
            }),
            i.jsx(S, {
              sx: {
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                minWidth: d ? "200px" : "auto",
                minHeight: d ? "auto" : "200px"
              },
              children: typeof g == "number" && i.jsx(pe, {
                data: e.data,
                slots: {
                  markLabel: ue
                },
                slotProps: {
                  markLabel: {
                    marks: e.data.marks,
                    sliderOrientation: e.data.sliderOrientation,
                    aliasActive: e.data.aliasActive,
                    activeMarkIndex: R,
                    defaultIconColor: l.palette.primary.main
                  }
                },
                disabled: D !== "number",
                valueLabelDisplay: e.data.valueLabelDisplay,
                orientation: e.data.sliderOrientation,
                min: f ?? void 0,
                max: h ?? void 0,
                marks: B,
                step: e.data.onlyStates ? null : e.data.step !== void 0 ? Number(e.data.step) : void 0,
                size: e.data.sliderSize,
                value: g,
                onChange: (x, n) => {
                  typeof n == "number" && ($(n), X(n));
                },
                sx: {
                  mb: e.data.marks && d ? "20px" : "0px",
                  mr: e.data.marks && !d ? "44px" : "0px",
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
                    fontSize: W(e.data.valueSizeActive) || p.valueSizeActive || C && e.data.markerTextSize && W(e.data.markerTextSize) || p.valueSize || "1rem",
                    color: e.data.textColorActive || p.textColorActive || C && e.data.markerTextColor || p.textColor,
                    bgcolor: "transparent",
                    top: d ? e.data.labelPosition : void 0,
                    right: d ? void 0 : e.data.labelPosition
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: p.valueSize || "1rem",
                    color: e.data.markerTextColor || p.textColor,
                    top: d ? e.data.markPosition : void 0,
                    left: d ? void 0 : e.data.markPosition
                  },
                  "& .MuiSlider-markLabelActive": {
                    [`&[data-index='${R}']`]: {
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
            z && i.jsx(S, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                transform: d ? `translateY(${M.y}px)` : `translateX(${M.x}px)`
              },
              children: i.jsx(T, {
                alt: "",
                src: z,
                style: {
                  width: d ? e.data.iconSizeEnd || "24px" : e.data.iconSizeStart || "24px",
                  ...V(z, d ? F : L, true)
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  G = class extends le {
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
              ...oe([
                "number"
              ]),
              ...de(),
              ...me()
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
      return G.getWidgetInfo();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, re(this.wrapContent(i.jsx(xe, {})), e);
    }
  };
});
export {
  __tla,
  G as default
};
