import { j as o, C as f, N as v, y as G, v as U, O as $, w as z, T as Z, A as X, z as F, Q as Y, E as ee, G as te, s as ae, R as W, o as N, H as oe, J as L, K as ie, __tla as __tla_0 } from "./useData-DSoqoXK9.js";
import { c as le, __tla as __tla_1 } from "./commonObjectFields-Y7Tma-da.js";
import { u as re, d as ne, __tla as __tla_2 } from "./useValueState-lsTxmsTs.js";
import { v as r, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { a as de, S as se, __tla as __tla_4 } from "./Slider-DcN5vBwD.js";
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
  const ce = () => [
    {
      type: "custom",
      component: () => o.jsx(f, {})
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
      component: (a, t, e, i) => o.jsx(v, {
        field: a,
        data: t,
        onDataChange: e,
        props: i
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
      component: () => o.jsx(f, {
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
      component: (a, t, e, i) => o.jsx(v, {
        field: a,
        data: t,
        onDataChange: e,
        props: i
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
      component: (a, t, e, i) => o.jsx(v, {
        field: a,
        data: t,
        onDataChange: e,
        props: i
      })
    },
    {
      type: "custom",
      component: () => o.jsx(f, {
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
      component: (a, t, e, i) => o.jsx(v, {
        field: a,
        data: t,
        onDataChange: e,
        props: i
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
      component: (a, t, e, i) => o.jsx(v, {
        field: a,
        data: t,
        onDataChange: e,
        props: i
      })
    },
    {
      type: "custom",
      component: () => o.jsx(f, {
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
      component: (a, t, e, i) => o.jsx(v, {
        field: a,
        data: t,
        onDataChange: e,
        props: i
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
      component: (a, t, e, i) => o.jsx(v, {
        field: a,
        data: t,
        onDataChange: e,
        props: i
      })
    },
    {
      type: "custom",
      component: () => o.jsx(f, {
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
      component: (a, t, e, i) => o.jsx(v, {
        field: a,
        data: t,
        onDataChange: e,
        props: i
      })
    },
    {
      type: "custom",
      component: () => o.jsx(f, {
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
      component: () => o.jsx(f, {}),
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
      component: () => o.jsx(f, {
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
      component: () => o.jsx(f, {}),
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
      component: () => o.jsx(f, {}),
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
      component: (a, t, e, i) => o.jsx(v, {
        field: a,
        data: t,
        onDataChange: e,
        props: i
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
      component: () => o.jsx(f, {}),
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
      component: () => o.jsx(f, {
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
      component: (a, t, e, i) => o.jsx(v, {
        field: a,
        data: t,
        onDataChange: e,
        props: i
      })
    },
    {
      type: "custom",
      component: () => o.jsx(f, {
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
      component: (a, t, e, i) => o.jsx(v, {
        field: a,
        data: t,
        onDataChange: e,
        props: i
      })
    }
  ], me = ({ marks: a, sliderOrientation: t, aliasActive: e, activeMarkIndex: i, defaultIconColor: u, ...k }) => {
    var _a, _b;
    const [g, j] = r.useState(null), { data: h } = G("oid"), w = r.useContext(U), { widget: n } = w, m = k["data-index"], d = (_b = (_a = k.ownerState) == null ? void 0 : _a.marks) == null ? void 0 : _b[m], p = i === m, y = r.useCallback($, []), A = r.useCallback(() => p && (n.data.iconActive || n.data.iconSmallActive) ? n.data.iconActive || n.data.iconSmallActive || "" : (d == null ? void 0 : d.icon) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", [
      p,
      n.data.iconActive,
      n.data.iconSmallActive,
      d == null ? void 0 : d.icon
    ]), C = r.useCallback(() => p && n.data.iconColorActive && n.data.iconColorActive !== "" ? n.data.iconColorActive : (d == null ? void 0 : d.iconColor) && d.iconColor !== "" ? d.iconColor : h.iconColor && h.iconColor !== "" ? h.iconColor : u || void 0, [
      p,
      n.data.iconColorActive,
      d == null ? void 0 : d.iconColor,
      h.iconColor,
      u
    ]), S = r.useCallback(() => p && n.data.textColorActive ? n.data.textColorActive : (d == null ? void 0 : d.textColor) || h.textColor, [
      p,
      n.data.textColorActive,
      d == null ? void 0 : d.textColor,
      h.textColor
    ]), I = r.useCallback(() => p && typeof n.data.valueSizeActive == "number" ? y(n.data.valueSizeActive) || "1rem" : (d == null ? void 0 : d.fontSize) || h.valueSize || "1rem", [
      p,
      n.data.valueSizeActive,
      d == null ? void 0 : d.fontSize,
      h.valueSize,
      y
    ]);
    return r.useEffect(() => {
      g && (d == null ? void 0 : d.label) && (p && e ? g.innerHTML = e : g.innerHTML = d.label);
    }, [
      d == null ? void 0 : d.label,
      g,
      p,
      e,
      m
    ]), a && d ? o.jsx(de, {
      ...k,
      children: o.jsxs(z, {
        sx: {
          display: "flex",
          flexDirection: t === "vertical" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          o.jsx(Z, {
            "data-font": "active",
            ref: j,
            sx: {
              textTransform: "none",
              flexGrow: 1,
              pr: t === "vertical" ? 1 : 0,
              pb: t === "vertical" ? 0 : 1,
              fontSize: I(),
              background: X(S()),
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: X(S()) ? "transparent" : S()
            }
          }),
          o.jsx(z, {
            "data-position": "active",
            sx: {
              position: "relative",
              bottom: d.iconYOffset,
              left: d.iconXOffset,
              flexGrow: 1
            },
            children: o.jsx("img", {
              "data-img": "active",
              src: A(),
              alt: "",
              style: {
                position: "relative",
                width: p && typeof n.data.iconSizeActive == "number" ? `${24 * n.data.iconSizeActive / 100}px` : `${24 * ((d == null ? void 0 : d.iconWidth) || 100) / 100}px`,
                ...F(A(), C(), d == null ? void 0 : d.forceColorMask)
              }
            })
          })
        ]
      })
    }) : null;
  }, ue = ae(se, {
    shouldForwardProp: (a) => a !== "data"
  })(({ theme: a, data: t }) => {
    const e = r.useMemo(() => W((t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main), [
      t == null ? void 0 : t.thumbColor,
      t == null ? void 0 : t.sliderColor,
      a.palette.primary.main
    ]), i = r.useMemo(() => e || a.palette.primary.main, [
      e,
      a.palette.primary.main
    ]), u = (t == null ? void 0 : t.thumbBorderWidth) ?? 0, k = r.useMemo(() => W((t == null ? void 0 : t.thumbBorderColor) || (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main), [
      t == null ? void 0 : t.thumbBorderColor,
      t == null ? void 0 : t.thumbColor,
      t == null ? void 0 : t.sliderColor,
      a.palette.primary.main
    ]);
    return {
      "& .MuiSlider-thumb": {
        width: `${(t == null ? void 0 : t.thumbWidth) ?? 20}px`,
        height: `${(t == null ? void 0 : t.thumbHeight) ?? 20}px`,
        background: (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main,
        ...u > 0 && {
          border: `${u}px solid ${k || a.palette.primary.main}`
        },
        "&:hover": {
          boxShadow: `0px 0px 0px 8px ${N(i, 0.32)}`
        },
        "&:active": {
          boxShadow: `0px 0px 0px 14px ${N(i, 0.32)}`
        }
      },
      "& .MuiSlider-track": {
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        borderColor: W((t == null ? void 0 : t.trackBorderColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main),
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
        borderColor: W((t == null ? void 0 : t.railBorderColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main)
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
  }), pe = () => {
    const a = r.useContext(U), { widget: { data: { oidObject: t } }, widget: e, theme: i } = a, { data: u, states: k, minValue: g, maxValue: j, activeIndex: h } = G("oid"), [w, n] = r.useState(null), { value: m, updateValue: d, hasBackendChange: p } = re("oid"), [y, A] = r.useState(typeof m == "number" ? m : void 0), C = r.useRef(null), [S, I] = r.useState({
      x: 0,
      y: 0
    }), s = e.data.sliderOrientation === "horizontal", O = r.useMemo(() => s ? e.data.iconMin || e.data.iconSmallMin : e.data.iconMax || e.data.iconSmallMax, [
      s,
      e.data.iconMin,
      e.data.iconSmallMin,
      e.data.iconMax,
      e.data.iconSmallMax
    ]), B = r.useMemo(() => s ? e.data.iconMax || e.data.iconSmallMax : e.data.iconMin || e.data.iconSmallMin, [
      s,
      e.data.iconMax,
      e.data.iconSmallMax,
      e.data.iconMin,
      e.data.iconSmallMin
    ]), E = e.data.startIconColor || (Y(O) ? i.palette.primary.main : void 0), H = e.data.endIconColor || (Y(B) ? i.palette.primary.main : void 0), P = t == null ? void 0 : t.type, D = P === "number", _ = r.useMemo(() => !e.data.onlyStates && e.data.minValue !== void 0 ? Number(e.data.minValue) : g, [
      e.data.onlyStates,
      e.data.minValue,
      g
    ]), M = r.useMemo(() => !e.data.onlyStates && e.data.maxValue !== void 0 ? Number(e.data.maxValue) : j, [
      e.data.onlyStates,
      e.data.maxValue,
      j
    ]), T = r.useMemo(() => {
      const c = k.map((l) => ({
        value: Number(l.value),
        label: l.label,
        fontSize: l.fontSize,
        textColor: l.textColor,
        icon: l.icon,
        iconWidth: l.iconWidth,
        iconHeight: l.iconHeight,
        iconXOffset: l.iconXOffset,
        iconYOffset: l.iconYOffset,
        iconColor: l.iconColor,
        forceColorMask: l.forceColorMask
      }));
      if (e.data.onlyStates) return c.sort((l, x) => l.value - x.value);
      const b = (l) => ({
        value: l,
        label: `${l}${(t == null ? void 0 : t.unit) || ""}`,
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
      if (_ !== null && !c.some((l) => l.value === _) && c.push(b(_)), M !== null && !c.some((l) => l.value === M) && c.push(b(M)), _ !== null && M !== null) {
        const l = Number(e.data.markStep) || 1;
        for (let x = _ + l; x < M; x += l) c.some((V) => V.value === x) || c.push(b(x));
      }
      return c.sort((l, x) => l.value - x.value);
    }, [
      k,
      e.data.onlyStates,
      e.data.markStep,
      _,
      M,
      t == null ? void 0 : t.unit
    ]);
    r.useEffect(() => {
      y === void 0 && typeof m == "number" && A(m);
    }, [
      m,
      y
    ]), r.useEffect(() => {
      p && A(typeof m == "number" ? m : void 0);
    }, [
      p,
      m
    ]);
    const R = () => {
      if (!C.current) return;
      const c = C.current.querySelector(".MuiSlider-root"), b = C.current.querySelector(".MuiSlider-rail");
      if (c && b) {
        const l = C.current.getBoundingClientRect(), x = b.getBoundingClientRect(), V = x.left - l.left + x.width / 2, Q = x.top - l.top + x.height / 2, J = l.width / 2, K = l.height / 2;
        I({
          x: V - J,
          y: Q - K
        });
      }
    };
    return r.useEffect(() => {
      const c = setTimeout(R, 100);
      return () => clearTimeout(c);
    }, [
      e.data.marks,
      e.data.sliderOrientation,
      e.data.iconSizeStart,
      e.data.iconSizeEnd,
      y
    ]), r.useEffect(() => {
      if (!C.current) return;
      const c = new ResizeObserver(R);
      return c.observe(C.current), () => c.disconnect();
    }, []), r.useEffect(() => {
      if (m === void 0) return;
      const c = T.findIndex((b) => String(b.value) === String(m));
      c !== -1 && n(c);
    }, [
      m,
      T
    ]), o.jsxs(ee, {
      isValidType: D,
      data: u,
      oidValue: m,
      sx: {
        p: Number(e.data.sliderPadding)
      },
      children: [
        o.jsx(te, {
          data: u,
          widget: e
        }),
        D ? o.jsxs(z, {
          ref: C,
          sx: {
            gap: Number(e.data.sliderGap) || 0,
            display: "flex",
            flexDirection: s ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          children: [
            O && o.jsx(z, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                transform: s ? `translateY(${S.y}px)` : `translateX(${S.x}px)`
              },
              children: o.jsx("img", {
                alt: "",
                src: O,
                style: {
                  width: s ? e.data.iconSizeStart || "24px" : e.data.iconSizeEnd || "24px",
                  ...F(O, s ? E : H, true)
                }
              })
            }),
            o.jsx(z, {
              sx: {
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                minWidth: s ? "200px" : "auto",
                minHeight: s ? "auto" : "200px"
              },
              children: typeof y == "number" && o.jsx(ue, {
                data: e.data,
                slots: {
                  markLabel: me
                },
                slotProps: {
                  markLabel: {
                    marks: e.data.marks,
                    sliderOrientation: e.data.sliderOrientation,
                    aliasActive: e.data.aliasActive,
                    activeMarkIndex: w,
                    defaultIconColor: u.iconColor || i.palette.primary.main
                  }
                },
                disabled: P !== "number",
                valueLabelDisplay: e.data.valueLabelDisplay,
                orientation: e.data.sliderOrientation,
                min: _ ?? void 0,
                max: M ?? void 0,
                marks: T,
                step: e.data.onlyStates ? null : e.data.step !== void 0 ? Number(e.data.step) : void 0,
                size: e.data.sliderSize,
                value: y,
                onChange: (c, b) => {
                  typeof b == "number" && (A(b), d(b));
                },
                sx: {
                  mb: e.data.marks && s ? "20px" : "0px",
                  mr: e.data.marks && !s ? "44px" : "0px",
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
                    fontSize: $(e.data.valueSizeActive) || u.valueSizeActive || h && e.data.markerTextSize && $(e.data.markerTextSize) || u.valueSize || "1rem",
                    color: e.data.textColorActive || u.textColorActive || h && e.data.markerTextColor || u.textColor,
                    bgcolor: "transparent",
                    top: s ? e.data.labelPosition : void 0,
                    right: s ? void 0 : e.data.labelPosition
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: u.valueSize || "1rem",
                    color: e.data.markerTextColor || u.textColor,
                    top: s ? e.data.markPosition : void 0,
                    left: s ? void 0 : e.data.markPosition
                  },
                  "& .MuiSlider-markLabelActive": {
                    [`&[data-index='${w}']`]: {
                      "& div[data-font='active']": {
                        color: e.data.textColorActive ? `${e.data.textColorActive} !important` : void 0,
                        fontSize: typeof e.data.valueSizeActive == "number" ? `${$(e.data.valueSizeActive)} !important` : void 0
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
            B && o.jsx(z, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                transform: s ? `translateY(${S.y}px)` : `translateX(${S.x}px)`
              },
              children: o.jsx("img", {
                alt: "",
                src: B,
                style: {
                  width: s ? e.data.iconSizeEnd || "24px" : e.data.iconSizeStart || "24px",
                  ...F(B, s ? H : E, true)
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  q = class extends oe {
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
              ...L()
            ]
          },
          {
            name: "slider",
            label: "group_slider",
            fields: [
              ...le([
                "number"
              ]),
              ...ne(),
              ...ce()
            ]
          },
          {
            name: "active",
            label: "group_active",
            fields: [
              ...L({
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
              ...L({
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ie(this.wrapContent(o.jsx(pe, {})), e);
    }
  };
});
export {
  __tla,
  q as default
};
