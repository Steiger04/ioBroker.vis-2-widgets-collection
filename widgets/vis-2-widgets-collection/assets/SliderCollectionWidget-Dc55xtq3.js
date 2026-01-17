import { j as a, C as f, N as z, y as N, v as G, O, w as A, T as Q, A as R, z as L, E as Z, G as ee, s as te, o as X, H as ae, J as V, K as oe, __tla as __tla_0 } from "./useData-jcT7BVTY.js";
import { c as ie, __tla as __tla_1 } from "./commonObjectFields-BdQ1taWT.js";
import { u as le, d as re, __tla as __tla_2 } from "./useValueState-Dh4wU42k.js";
import { v as l, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { a as ne, S as de, __tla as __tla_4 } from "./Slider-CLWWtUVG.js";
import { e as Y } from "./extractColorFromValue-BwqGCJvl.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let U;
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
  const se = () => [
    {
      type: "custom",
      component: () => a.jsx(f, {})
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
      component: (o, t, e, c) => a.jsx(z, {
        field: o,
        data: t,
        onDataChange: e,
        props: c
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
      component: () => a.jsx(f, {
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
      component: (o, t, e, c) => a.jsx(z, {
        field: o,
        data: t,
        onDataChange: e,
        props: c
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
      type: "color"
    },
    {
      type: "custom",
      component: () => a.jsx(f, {
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
      name: "trackBorderColor",
      label: "track_border_color",
      type: "color"
    },
    {
      name: "trackBackgroundColor",
      label: "track_background_color",
      default: "",
      type: "custom",
      fallbackFields: [
        "sliderColor"
      ],
      component: (o, t, e, c) => a.jsx(z, {
        field: o,
        data: t,
        onDataChange: e,
        props: c
      })
    },
    {
      type: "custom",
      component: () => a.jsx(f, {
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
      component: (o, t, e, c) => a.jsx(z, {
        field: o,
        data: t,
        onDataChange: e,
        props: c
      })
    },
    {
      type: "custom",
      component: () => a.jsx(f, {
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
      component: (o, t, e, c) => a.jsx(z, {
        field: o,
        data: t,
        onDataChange: e,
        props: c
      })
    },
    {
      type: "custom",
      component: () => a.jsx(f, {
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
      component: () => a.jsx(f, {}),
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
      component: () => a.jsx(f, {
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
      component: () => a.jsx(f, {}),
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
      component: () => a.jsx(f, {}),
      hidden: "!data.marks"
    },
    {
      name: "markerTextColor",
      label: "marker_text_color",
      type: "color",
      hidden: "!data.marks"
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
      component: () => a.jsx(f, {}),
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
      component: () => a.jsx(f, {
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
      type: "color",
      hidden: "!data.iconMin && !data.iconSmallMin"
    },
    {
      type: "custom",
      component: () => a.jsx(f, {
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
      type: "color",
      hidden: "!data.iconMax && !data.iconSmallMax"
    }
  ], ce = ({ marks: o, sliderOrientation: t, aliasActive: e, activeMarkIndex: c, defaultIconColor: m, ...C }) => {
    var _a, _b;
    const [S, j] = l.useState(null), { data: h } = N("oid"), w = l.useContext(G), { widget: r } = w, u = C["data-index"], n = (_b = (_a = C.ownerState) == null ? void 0 : _a.marks) == null ? void 0 : _b[u], p = c === u, y = l.useCallback(O, []), _ = l.useCallback(() => p && (r.data.iconActive || r.data.iconSmallActive) ? r.data.iconActive || r.data.iconSmallActive || "" : (n == null ? void 0 : n.icon) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", [
      p,
      r.data.iconActive,
      r.data.iconSmallActive,
      n == null ? void 0 : n.icon
    ]), v = l.useCallback(() => p && r.data.iconColorActive && r.data.iconColorActive !== "" ? r.data.iconColorActive : (n == null ? void 0 : n.iconColor) && n.iconColor !== "" ? n.iconColor : h.iconColor && h.iconColor !== "" ? h.iconColor : m || void 0, [
      p,
      r.data.iconColorActive,
      n == null ? void 0 : n.iconColor,
      h.iconColor,
      m
    ]), k = l.useCallback(() => p && r.data.textColorActive ? r.data.textColorActive : (n == null ? void 0 : n.textColor) || h.textColor, [
      p,
      r.data.textColorActive,
      n == null ? void 0 : n.textColor,
      h.textColor
    ]), $ = l.useCallback(() => p && typeof r.data.valueSizeActive == "number" ? y(r.data.valueSizeActive) || "1rem" : (n == null ? void 0 : n.fontSize) || h.valueSize || "1rem", [
      p,
      r.data.valueSizeActive,
      n == null ? void 0 : n.fontSize,
      h.valueSize,
      y
    ]);
    return l.useEffect(() => {
      S && (n == null ? void 0 : n.label) && (p && e ? S.innerHTML = e : S.innerHTML = n.label);
    }, [
      n == null ? void 0 : n.label,
      S,
      p,
      e,
      u
    ]), o && n ? a.jsx(ne, {
      ...C,
      children: a.jsxs(A, {
        sx: {
          display: "flex",
          flexDirection: t === "vertical" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          a.jsx(Q, {
            "data-font": "active",
            ref: j,
            sx: {
              textTransform: "none",
              flexGrow: 1,
              pr: t === "vertical" ? 1 : 0,
              pb: t === "vertical" ? 0 : 1,
              fontSize: $(),
              background: R(k()),
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: R(k()) ? "transparent" : k()
            }
          }),
          a.jsx(A, {
            "data-position": "active",
            sx: {
              position: "relative",
              bottom: n.iconYOffset,
              left: n.iconXOffset,
              flexGrow: 1
            },
            children: a.jsx("img", {
              "data-img": "active",
              src: _(),
              alt: "",
              style: {
                position: "relative",
                width: p && typeof r.data.iconSizeActive == "number" ? `${24 * r.data.iconSizeActive / 100}px` : `${24 * ((n == null ? void 0 : n.iconWidth) || 100) / 100}px`,
                ...L(_(), v(), n == null ? void 0 : n.forceColorMask)
              }
            })
          })
        ]
      })
    }) : null;
  }, me = te(de, {
    shouldForwardProp: (o) => o !== "data"
  })(({ theme: o, data: t }) => {
    const e = l.useMemo(() => Y((t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || o.palette.primary.main), [
      t == null ? void 0 : t.thumbColor,
      t == null ? void 0 : t.sliderColor,
      o.palette.primary.main
    ]), c = l.useMemo(() => e || o.palette.primary.main, [
      e,
      o.palette.primary.main
    ]), m = (t == null ? void 0 : t.thumbBorderWidth) ?? 0, C = l.useMemo(() => Y((t == null ? void 0 : t.thumbBorderColor) || (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || o.palette.primary.main), [
      t == null ? void 0 : t.thumbBorderColor,
      t == null ? void 0 : t.thumbColor,
      t == null ? void 0 : t.sliderColor,
      o.palette.primary.main
    ]);
    return {
      "& .MuiSlider-thumb": {
        width: `${(t == null ? void 0 : t.thumbWidth) ?? 20}px`,
        height: `${(t == null ? void 0 : t.thumbHeight) ?? 20}px`,
        background: (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || o.palette.primary.main,
        ...m > 0 && {
          border: `${m}px solid ${C || o.palette.primary.main}`
        },
        "&:hover": {
          boxShadow: `0px 0px 0px 8px ${X(c, 0.32)}`
        },
        "&:active": {
          boxShadow: `0px 0px 0px 14px ${X(c, 0.32)}`
        }
      },
      "& .MuiSlider-track": {
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        borderColor: (t == null ? void 0 : t.trackBorderColor) || (t == null ? void 0 : t.sliderColor) || o.palette.primary.main,
        background: (t == null ? void 0 : t.trackBackgroundColor) || (t == null ? void 0 : t.sliderColor) || o.palette.primary.main
      },
      "& .MuiSlider-rail": {
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%",
        width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%",
        background: (t == null ? void 0 : t.railBackgroundColor) || (t == null ? void 0 : t.sliderColor) || o.palette.primary.main
      },
      "& .MuiSlider-mark": {
        width: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markWidth) ?? 2}px` : `${(t == null ? void 0 : t.markHeight) ?? 16}px`,
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markHeight) ?? 2}px` : `${(t == null ? void 0 : t.markWidth) ?? 3}px`,
        background: (t == null ? void 0 : t.markBackgroundColor) || (t == null ? void 0 : t.sliderColor) || o.palette.primary.main
      },
      "& .MuiSlider-markActive": {
        width: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markWidth) ?? 2}px` : `${(t == null ? void 0 : t.markHeight) ?? 16}px`,
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markHeight) ?? 2}px` : `${(t == null ? void 0 : t.markWidth) ?? 3}px`,
        backgroundColor: (t == null ? void 0 : t.markBackgroundColor) || (t == null ? void 0 : t.sliderColor) || o.palette.primary.main,
        "&.MuiSlider-markActive": {
          background: (t == null ? void 0 : t.markBackgroundColor) || (t == null ? void 0 : t.sliderColor) || o.palette.primary.main
        }
      }
    };
  }), ue = () => {
    const o = l.useContext(G), { widget: { data: { oidObject: t } }, widget: e, theme: c } = o, { data: m, states: C, minValue: S, maxValue: j, activeIndex: h } = N("oid"), [w, r] = l.useState(null), { value: u, updateValue: n, hasBackendChange: p } = le("oid"), [y, _] = l.useState(typeof u == "number" ? u : void 0), v = l.useRef(null), [k, $] = l.useState({
      x: 0,
      y: 0
    }), E = e.data.startIconColor || m.iconColor || c.palette.primary.main, H = e.data.endIconColor || m.iconColor || c.palette.primary.main, d = e.data.sliderOrientation === "horizontal", I = l.useMemo(() => d ? e.data.iconMin || e.data.iconSmallMin : e.data.iconMax || e.data.iconSmallMax, [
      d,
      e.data.iconMin,
      e.data.iconSmallMin,
      e.data.iconMax,
      e.data.iconSmallMax
    ]), B = l.useMemo(() => d ? e.data.iconMax || e.data.iconSmallMax : e.data.iconMin || e.data.iconSmallMin, [
      d,
      e.data.iconMax,
      e.data.iconSmallMax,
      e.data.iconMin,
      e.data.iconSmallMin
    ]), P = t == null ? void 0 : t.type, D = P === "number", g = l.useMemo(() => !e.data.onlyStates && e.data.minValue !== void 0 ? Number(e.data.minValue) : S, [
      e.data.onlyStates,
      e.data.minValue,
      S
    ]), M = l.useMemo(() => !e.data.onlyStates && e.data.maxValue !== void 0 ? Number(e.data.maxValue) : j, [
      e.data.onlyStates,
      e.data.maxValue,
      j
    ]), T = l.useMemo(() => {
      const s = C.map((i) => ({
        value: Number(i.value),
        label: i.label,
        fontSize: i.fontSize,
        textColor: i.textColor,
        icon: i.icon,
        iconWidth: i.iconWidth,
        iconHeight: i.iconHeight,
        iconXOffset: i.iconXOffset,
        iconYOffset: i.iconYOffset,
        iconColor: i.iconColor,
        forceColorMask: i.forceColorMask
      }));
      if (e.data.onlyStates) return s.sort((i, x) => i.value - x.value);
      const b = (i) => ({
        value: i,
        label: `${i}${(t == null ? void 0 : t.unit) || ""}`,
        fontSize: void 0,
        textColor: void 0,
        icon: "",
        iconWidth: 100,
        iconHeight: 100,
        iconXOffset: "0px",
        iconYOffset: "0px",
        iconColor: void 0,
        forceColorMask: void 0
      });
      if (g !== null && !s.some((i) => i.value === g) && s.push(b(g)), M !== null && !s.some((i) => i.value === M) && s.push(b(M)), g !== null && M !== null) {
        const i = Number(e.data.markStep) || 1;
        for (let x = g + i; x < M; x += i) s.some((W) => W.value === x) || s.push(b(x));
      }
      return s.sort((i, x) => i.value - x.value);
    }, [
      C,
      e.data.onlyStates,
      e.data.markStep,
      g,
      M,
      t == null ? void 0 : t.unit
    ]);
    l.useEffect(() => {
      y === void 0 && typeof u == "number" && _(u);
    }, [
      u,
      y
    ]), l.useEffect(() => {
      p && _(typeof u == "number" ? u : void 0);
    }, [
      p,
      u
    ]);
    const F = () => {
      if (!v.current) return;
      const s = v.current.querySelector(".MuiSlider-root"), b = v.current.querySelector(".MuiSlider-rail");
      if (s && b) {
        const i = v.current.getBoundingClientRect(), x = b.getBoundingClientRect(), W = x.left - i.left + x.width / 2, q = x.top - i.top + x.height / 2, J = i.width / 2, K = i.height / 2;
        $({
          x: W - J,
          y: q - K
        });
      }
    };
    return l.useEffect(() => {
      const s = setTimeout(F, 100);
      return () => clearTimeout(s);
    }, [
      e.data.marks,
      e.data.sliderOrientation,
      e.data.iconSizeStart,
      e.data.iconSizeEnd,
      y
    ]), l.useEffect(() => {
      if (!v.current) return;
      const s = new ResizeObserver(F);
      return s.observe(v.current), () => s.disconnect();
    }, []), l.useEffect(() => {
      if (u === void 0) return;
      const s = T.findIndex((b) => String(b.value) === String(u));
      s !== -1 && r(s);
    }, [
      u,
      T
    ]), a.jsxs(Z, {
      isValidType: D,
      data: m,
      oidValue: u,
      sx: {
        p: Number(e.data.sliderPadding) || 1
      },
      children: [
        a.jsx(ee, {
          data: m,
          widget: e
        }),
        D ? a.jsxs(A, {
          ref: v,
          sx: {
            display: "flex",
            flexDirection: d ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          children: [
            I && a.jsx(A, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                transform: d ? `translateY(${k.y}px)` : `translateX(${k.x}px)`
              },
              children: a.jsx("img", {
                alt: "",
                src: I,
                style: {
                  width: d ? e.data.iconSizeStart || "24px" : e.data.iconSizeEnd || "24px",
                  ...L(I, d ? E : H)
                }
              })
            }),
            a.jsx(A, {
              sx: {
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                minWidth: d ? "200px" : "auto",
                minHeight: d ? "auto" : "200px"
              },
              children: typeof y == "number" && a.jsx(me, {
                data: e.data,
                slots: {
                  markLabel: ce
                },
                slotProps: {
                  markLabel: {
                    marks: e.data.marks,
                    sliderOrientation: e.data.sliderOrientation,
                    aliasActive: e.data.aliasActive,
                    activeMarkIndex: w,
                    defaultIconColor: m.iconColor || c.palette.primary.main
                  }
                },
                disabled: P !== "number",
                valueLabelDisplay: e.data.valueLabelDisplay,
                orientation: e.data.sliderOrientation,
                min: g ?? void 0,
                max: M ?? void 0,
                marks: T,
                step: e.data.onlyStates ? null : e.data.step !== void 0 ? Number(e.data.step) : void 0,
                size: e.data.sliderSize,
                value: y,
                onChange: (s, b) => {
                  typeof b == "number" && (_(b), n(b));
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
                    fontSize: O(e.data.valueSizeActive) || m.valueSizeActive || h && e.data.markerTextSize && O(e.data.markerTextSize) || m.valueSize || "1rem",
                    color: e.data.textColorActive || m.textColorActive || h && e.data.markerTextColor || m.textColor,
                    bgcolor: "transparent",
                    top: d ? e.data.labelPosition : void 0,
                    right: d ? void 0 : e.data.labelPosition
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: m.valueSize || "1rem",
                    color: e.data.markerTextColor || m.textColor,
                    top: d ? e.data.markPosition : void 0,
                    left: d ? void 0 : e.data.markPosition
                  },
                  "& .MuiSlider-markLabelActive": {
                    [`&[data-index='${w}']`]: {
                      "& div[data-font='active']": {
                        color: e.data.textColorActive ? `${e.data.textColorActive} !important` : void 0,
                        fontSize: typeof e.data.valueSizeActive == "number" ? `${O(e.data.valueSizeActive)} !important` : void 0
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
            B && a.jsx(A, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                transform: d ? `translateY(${k.y}px)` : `translateX(${k.x}px)`
              },
              children: a.jsx("img", {
                alt: "",
                src: B,
                style: {
                  width: d ? e.data.iconSizeEnd || "24px" : e.data.iconSizeStart || "24px",
                  ...L(B, d ? H : E)
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  U = class extends ae {
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
              ...V()
            ]
          },
          {
            name: "slider",
            label: "group_slider",
            fields: [
              ...ie([
                "number"
              ]),
              ...re(),
              ...se()
            ]
          },
          {
            name: "active",
            label: "group_active",
            fields: [
              ...V({
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
              ...V({
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
      return U.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, e) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, oe(this.wrapContent(a.jsx(ue, {})), e);
    }
  };
});
export {
  __tla,
  U as default
};
