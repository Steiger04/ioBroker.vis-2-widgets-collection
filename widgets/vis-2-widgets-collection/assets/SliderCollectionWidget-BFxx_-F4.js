import { j as i, B as g, T as oe, s as re, a as Y, __tla as __tla_0 } from "./tinycolor-B_2EitDy.js";
import { G as le, __tla as __tla_1 } from "./usePopoverPositioning-CvdKfQR6.js";
import { b as O, d as S, e as c, g as q, C as ne, u as de, a as se, f as U, h as I, c as D, w as ce, __tla as __tla_2 } from "./useData-90UeUAIS.js";
import { S as P, g as F, i as J, C as me, c as ue, __tla as __tla_3 } from "./CollectionBaseImage-u_I-Uett.js";
import { u as pe, d as xe, __tla as __tla_4 } from "./useValueState-BAhi1BOX.js";
import { v as m, __tla as __tla_5 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { a as be, S as fe, __tla as __tla_6 } from "./Slider-s6U6WgN7.js";
import { i as he } from "./isOidReadOnly-CpnU56qh.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_7 } from "./Delete-lESTXvkD.js";
import "./tslib.es6-F1e60Aum.js";
let K;
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
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })()
]).then(async () => {
  const ve = () => [
    {
      type: "custom",
      component: () => i.jsx(c, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (a, t) => a.write === false,
      default: false,
      hidden: (a, t) => a.write === false
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
    O({
      name: "sliderColor",
      label: "slider_color",
      terminal: "primary"
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
      component: () => i.jsx(c, {
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
    S("thumbColor", "thumb_color"),
    {
      name: "thumbBorderWidth",
      label: "thumb_border_width",
      type: "number",
      default: 0,
      min: 0,
      max: 100
    },
    O({
      name: "thumbBorderColor",
      label: "thumb_border_color",
      fallbackFields: [
        "thumbColor",
        "sliderColor"
      ],
      terminal: "primary"
    }),
    {
      type: "custom",
      component: () => i.jsx(c, {
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
    S("trackBackgroundColor", "track_background_color"),
    {
      name: "trackBorderWidth",
      label: "track_border_width",
      type: "number",
      default: 1,
      min: 0,
      max: 100
    },
    S("trackBorderColor", "track_border_color"),
    {
      type: "custom",
      component: () => i.jsx(c, {
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
    S("railBackgroundColor", "rail_background_color"),
    {
      name: "railBorderWidth",
      label: "rail_border_width",
      type: "number",
      default: 0,
      min: 0,
      max: 100
    },
    S("railBorderColor", "rail_border_color"),
    {
      type: "custom",
      component: () => i.jsx(c, {
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
    S("markBackgroundColor", "mark_background_color"),
    {
      type: "custom",
      component: () => i.jsx(c, {
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
      component: () => i.jsx(c, {}),
      hidden: (a) => {
        var _a;
        return !a.values_count && !Object.keys(((_a = a.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
      }
    },
    {
      name: "onlyStates",
      type: "checkbox",
      label: "only_states",
      default: false,
      hidden: (a) => {
        var _a;
        return !a.values_count && !Object.keys(((_a = a.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
      }
    },
    {
      type: "custom",
      component: () => i.jsx(c, {
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
      component: () => i.jsx(c, {}),
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
      component: () => i.jsx(c, {}),
      hidden: "!data.marks"
    },
    S("markerTextColor", "marker_text_color"),
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
      component: () => i.jsx(c, {}),
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
      component: () => i.jsx(c, {
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
    O({
      name: "startIconColor",
      label: "icon_color",
      noGradient: true,
      terminal: "primary",
      hidden: "!data.iconMin && !data.iconSmallMin"
    }),
    {
      type: "custom",
      component: () => i.jsx(c, {
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
    O({
      name: "endIconColor",
      label: "icon_color",
      noGradient: true,
      terminal: "primary",
      hidden: "!data.iconMax && !data.iconSmallMax"
    })
  ], ye = ({ marks: a, sliderOrientation: t, aliasActive: e, activeMarkIndex: h, defaultIconColor: p, ...y }) => {
    var _a;
    const [k, w] = m.useState(null), _ = y["data-index"], o = (_a = y.ownerState.marks) == null ? void 0 : _a[_], l = h === _;
    return m.useEffect(() => {
      k && (o == null ? void 0 : o.label) && (l && e ? k.innerHTML = e : k.innerHTML = o.label);
    }, [
      o == null ? void 0 : o.label,
      k,
      l,
      e,
      _
    ]), a && o ? i.jsx(be, {
      ...y,
      children: i.jsxs(g, {
        sx: {
          display: "flex",
          flexDirection: t === "vertical" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          i.jsx(oe, {
            "data-font": "active",
            ref: w,
            sx: {
              textTransform: "none",
              flexGrow: 1,
              pr: t === "vertical" ? 1 : 0,
              pb: t === "vertical" ? 0 : 1,
              fontSize: o.valueSize,
              background: q(o.textColor),
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: q(o.textColor) ? "transparent" : o.textColor
            }
          }),
          i.jsx(g, {
            "data-position": "active",
            sx: {
              position: "relative",
              bottom: o.iconYOffset,
              left: o.iconXOffset,
              flexGrow: 1
            },
            children: i.jsx(P, {
              "data-img": "active",
              src: o.icon,
              alt: "",
              style: {
                position: "relative",
                width: o.iconSize,
                ...F(o.icon, o.iconColor, o == null ? void 0 : o.forceColorMask)
              }
            })
          })
        ]
      })
    }) : null;
  }, ke = re(fe, {
    shouldForwardProp: (a) => a !== "data"
  })(({ theme: a, data: t }) => {
    const h = I((t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main) || a.palette.primary.main, p = (t == null ? void 0 : t.thumbBorderWidth) ?? 0, y = I((t == null ? void 0 : t.thumbBorderColor) || (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main);
    return {
      "& .MuiSlider-thumb": {
        width: `${(t == null ? void 0 : t.thumbWidth) ?? 20}px`,
        height: `${(t == null ? void 0 : t.thumbHeight) ?? 20}px`,
        background: (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main,
        ...p > 0 && {
          border: `${p}px solid ${y || a.palette.primary.main}`
        },
        "&:hover": {
          boxShadow: `0px 0px 0px 8px ${Y(h, 0.32)}`
        },
        "&:active": {
          boxShadow: `0px 0px 0px 14px ${Y(h, 0.32)}`
        }
      },
      "& .MuiSlider-track": {
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        borderColor: I((t == null ? void 0 : t.trackBorderColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main),
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
        borderColor: I((t == null ? void 0 : t.railBorderColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main)
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
  }), Ce = () => {
    const a = m.useContext(ne), { widget: { data: { oidObject: t } }, widget: e, theme: h } = a, { data: p, states: y, minValue: k, maxValue: w, activeIndex: _, resolveStyleData: o } = de("oid"), { value: l, updateValue: Q, hasBackendChange: R } = pe("oid"), [M, $] = m.useState(typeof l == "number" ? l : void 0), C = m.useRef(null), [j, Z] = m.useState({
      x: 0,
      y: 0
    }), n = e.data.sliderOrientation === "horizontal", ee = o("", false).textColor || h.palette.text.primary, B = e.data.iconMin || e.data.iconSmallMin, W = e.data.iconMax || e.data.iconSmallMax, E = e.data.startIconColor || (J(B) ? h.palette.primary.main : void 0), H = e.data.endIconColor || (J(W) ? h.palette.primary.main : void 0), A = n ? B : W, T = n ? W : B, te = n ? E : H, ae = n ? H : E, G = t == null ? void 0 : t.type, N = G === "number", x = m.useMemo(() => !e.data.onlyStates && e.data.minValue !== void 0 ? Number(e.data.minValue) : k, [
      e.data.onlyStates,
      e.data.minValue,
      k
    ]), b = m.useMemo(() => !e.data.onlyStates && e.data.maxValue !== void 0 ? Number(e.data.maxValue) : w, [
      e.data.onlyStates,
      e.data.maxValue,
      w
    ]), V = m.useMemo(() => {
      const s = o("", false), d = o("", true), f = (r) => String(r) !== String(l) ? s : {
        ...s,
        ...e.data.iconSizeActive !== void 0 && {
          iconSize: d.iconSize
        },
        ...e.data.iconColorActive && {
          iconColor: d.iconColor
        },
        ...e.data.enableIconColorMaskActive !== void 0 && {
          forceColorMask: d.forceColorMask
        }
      }, v = y.filter((r) => typeof r.value == "number").filter((r) => (x === null || r.value >= x) && (b === null || r.value <= b));
      if (e.data.onlyStates) return v.sort((r, u) => r.value - u.value);
      if (x !== null && !v.some((r) => r.value === x) && v.push({
        ...f(x),
        value: x,
        label: `${x}${(t == null ? void 0 : t.unit) || ""}`
      }), b !== null && !v.some((r) => r.value === b) && v.push({
        ...f(b),
        value: b,
        label: `${b}${(t == null ? void 0 : t.unit) || ""}`
      }), x !== null && b !== null) {
        const r = Number(e.data.markStep) || 1;
        for (let u = x + r; u < b; u += r) v.some((L) => L.value === u) || v.push({
          ...f(u),
          value: u,
          label: `${u}${(t == null ? void 0 : t.unit) || ""}`
        });
      }
      return v.sort((r, u) => r.value - u.value);
    }, [
      y,
      e.data.onlyStates,
      e.data.markStep,
      x,
      b,
      t == null ? void 0 : t.unit,
      l,
      o,
      e.data.enableIconColorMaskActive,
      e.data.iconColorActive,
      e.data.iconSizeActive
    ]), X = m.useMemo(() => {
      if (l === void 0) return null;
      const s = V.findIndex((d) => String(d.value) === String(l));
      return s !== -1 ? s : null;
    }, [
      l,
      V
    ]);
    m.useEffect(() => {
      M === void 0 && typeof l == "number" && $(l);
    }, [
      l,
      M
    ]), m.useEffect(() => {
      R && $(typeof l == "number" ? l : void 0);
    }, [
      R,
      l
    ]);
    const ie = () => {
      if (!C.current) return;
      const s = C.current.querySelector(".MuiSlider-root"), d = C.current.querySelector(".MuiSlider-rail");
      if (s && d) {
        const f = C.current.getBoundingClientRect(), z = d.getBoundingClientRect(), v = z.left - f.left + z.width / 2, r = z.top - f.top + z.height / 2, u = f.width / 2, L = f.height / 2;
        Z({
          x: v - u,
          y: r - L
        });
      }
    };
    return m.useEffect(() => {
      if (!C.current) return;
      let s = null;
      const d = () => {
        s && clearTimeout(s), s = setTimeout(ie, 100);
      }, f = new ResizeObserver(d);
      return f.observe(C.current), d(), () => {
        f.disconnect(), s && clearTimeout(s);
      };
    }, [
      e.data.marks,
      e.data.sliderOrientation,
      e.data.iconSizeStart,
      e.data.iconSizeEnd,
      M
    ]), i.jsxs(se, {
      isValidType: N,
      data: p,
      oidValue: l,
      sx: {
        p: Number(e.data.sliderPadding)
      },
      children: [
        i.jsx(me, {
          data: p,
          widget: e
        }),
        N ? i.jsxs(g, {
          ref: C,
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
            A && i.jsx(g, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                transform: n ? `translateY(${j.y}px)` : `translateX(${j.x}px)`
              },
              children: i.jsx(P, {
                alt: "",
                src: A,
                style: {
                  width: n ? e.data.iconSizeStart || "24px" : e.data.iconSizeEnd || "24px",
                  ...F(A, te, true)
                }
              })
            }),
            i.jsx(g, {
              sx: {
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                minWidth: n ? "200px" : "auto",
                minHeight: n ? "auto" : "200px"
              },
              children: typeof M == "number" && i.jsx(ke, {
                data: e.data,
                slots: {
                  markLabel: ye
                },
                slotProps: {
                  markLabel: {
                    marks: e.data.marks,
                    sliderOrientation: e.data.sliderOrientation,
                    aliasActive: e.data.aliasActive,
                    activeMarkIndex: X,
                    defaultIconColor: h.palette.primary.main
                  }
                },
                disabled: G !== "number" || he(e.data),
                valueLabelDisplay: e.data.valueLabelDisplay,
                orientation: e.data.sliderOrientation,
                min: x ?? void 0,
                max: b ?? void 0,
                marks: V,
                step: e.data.onlyStates ? null : e.data.step !== void 0 ? Number(e.data.step) : void 0,
                size: e.data.sliderSize,
                value: M,
                onChange: (s, d) => {
                  typeof d == "number" && ($(d), Q(d));
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
                    fontSize: U(e.data.valueSizeActive) || p.valueSizeActive || p.valueSize,
                    color: e.data.textColorActive || p.textColorActive || _ && e.data.markerTextColor || p.textColor || h.palette.text.primary,
                    bgcolor: "transparent",
                    top: n ? e.data.labelPosition : void 0,
                    right: n ? void 0 : e.data.labelPosition
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: p.valueSize,
                    color: ee,
                    top: n ? e.data.markPosition : void 0,
                    left: n ? void 0 : e.data.markPosition
                  },
                  "& .MuiSlider-markLabelActive": {
                    [`&[data-index='${X}']`]: {
                      "& div[data-font='active']": {
                        color: e.data.textColorActive ? `${e.data.textColorActive} !important` : void 0,
                        fontSize: typeof e.data.valueSizeActive == "number" ? `${U(e.data.valueSizeActive)} !important` : void 0
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
            T && i.jsx(g, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                transform: n ? `translateY(${j.y}px)` : `translateX(${j.x}px)`
              },
              children: i.jsx(P, {
                alt: "",
                src: T,
                style: {
                  width: n ? e.data.iconSizeEnd || "24px" : e.data.iconSizeStart || "24px",
                  ...F(T, ae, true)
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  K = class extends le {
    static getWidgetInfo() {
      return {
        id: "tplSliderCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "SliderCollectionWidget",
        visWidgetLabel: "slider_collection_widget",
        visOrder: 5,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...D()
            ]
          },
          {
            name: "slider",
            label: "group_slider",
            fields: [
              ...ue([
                "number"
              ]),
              ...xe(),
              ...ve()
            ]
          },
          {
            name: "active",
            label: "group_active",
            fields: [
              ...D({
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
              ...D({
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
      return K.getWidgetInfo();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ce(this.wrapContent(i.jsx(Ce, {})), e);
    }
  };
});
export {
  __tla,
  K as default
};
