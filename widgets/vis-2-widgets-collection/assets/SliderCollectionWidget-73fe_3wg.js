import { j as n, C as h, J as A, y as X, v as Y, K as N, w as z, T as Q, z as T, A as Z, s as ee, o as D, G as te, E as V, H as ie, __tla as __tla_0 } from "./useData-D7RiYKJn.js";
import { C as ae, c as oe, __tla as __tla_1 } from "./CollectionBaseImage-DtLpy4OM.js";
import { u as re, d as ne, __tla as __tla_2 } from "./useValueState-O1j7ZVnY.js";
import { v as c, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { a as le, S as se, __tla as __tla_4 } from "./Slider-CwNdauwL.js";
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
  const de = () => [
    {
      type: "custom",
      component: () => n.jsx(h, {})
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
      component: (a, t, e, o) => n.jsx(A, {
        field: a,
        data: t,
        onDataChange: e,
        props: o
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
      component: () => n.jsx(h, {
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
      component: (a, t, e, o) => n.jsx(A, {
        field: a,
        data: t,
        onDataChange: e,
        props: o
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
      component: () => n.jsx(h, {
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
      component: (a, t, e, o) => n.jsx(A, {
        field: a,
        data: t,
        onDataChange: e,
        props: o
      })
    },
    {
      type: "custom",
      component: () => n.jsx(h, {
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
      component: (a, t, e, o) => n.jsx(A, {
        field: a,
        data: t,
        onDataChange: e,
        props: o
      })
    },
    {
      type: "custom",
      component: () => n.jsx(h, {
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
      component: (a, t, e, o) => n.jsx(A, {
        field: a,
        data: t,
        onDataChange: e,
        props: o
      })
    },
    {
      type: "custom",
      component: () => n.jsx(h, {
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
      component: () => n.jsx(h, {}),
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
      component: () => n.jsx(h, {
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
      component: () => n.jsx(h, {}),
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
      component: () => n.jsx(h, {}),
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
      component: () => n.jsx(h, {}),
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
      component: () => n.jsx(h, {
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
      component: () => n.jsx(h, {
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
  ], ce = ({ marks: a, sliderOrientation: t, aliasActive: e, activeMarkIndex: o, defaultIconColor: r, ...l }) => {
    var _a, _b;
    const [m, p] = c.useState(null), { data: f } = X("oid"), y = c.useContext(Y), { widget: x } = y, u = l["data-index"], i = (_b = (_a = l.ownerState) == null ? void 0 : _a.marks) == null ? void 0 : _b[u], v = o === u, S = c.useCallback(N, []);
    return c.useEffect(() => {
      m && (i == null ? void 0 : i.label) && (v && e ? m.innerHTML = e : m.innerHTML = i.label);
    }, [
      i == null ? void 0 : i.label,
      m,
      v,
      e,
      u
    ]), a && i ? n.jsx(le, {
      ...l,
      children: n.jsxs(z, {
        sx: {
          display: "flex",
          flexDirection: t === "vertical" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          n.jsx(Q, {
            "data-font": "active",
            ref: p,
            sx: {
              textTransform: "none",
              flexGrow: 1,
              pr: t === "vertical" ? 1 : 0,
              pb: t === "vertical" ? 0 : 1,
              fontSize: v && typeof x.data.valueSizeActive == "number" && S(x.data.valueSizeActive) || i.fontSize || f.valueSize || "1rem",
              color: v && x.data.textColorActive || i.textColor || f.textColor
            }
          }),
          n.jsx(z, {
            "data-position": "active",
            sx: {
              position: "relative",
              bottom: i.iconYOffset,
              left: i.iconXOffset,
              flexGrow: 1
            },
            children: (() => {
              const _ = v && (x.data.iconActive || x.data.iconSmallActive) || i.icon || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", C = (v && x.data.iconColorActive && x.data.iconColorActive !== "" ? x.data.iconColorActive : null) || (i.iconColor && i.iconColor !== "" ? i.iconColor : null) || (f.iconColor && f.iconColor !== "" ? f.iconColor : null) || r || void 0;
              return n.jsx("img", {
                "data-img": "active",
                src: _,
                alt: "",
                style: {
                  position: "relative",
                  width: v && typeof x.data.iconSizeActive == "number" ? `${24 * x.data.iconSizeActive / 100}px` : `${24 * i.iconWidth / 100}px`,
                  ...T(_, C)
                }
              });
            })()
          })
        ]
      })
    }) : null;
  };
  function ue(a) {
    if (!a || typeof a != "string") return null;
    const t = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, e = a.match(t);
    if (!e) return null;
    let o = e[1];
    o.length === 3 && (o = o.split("").map((f) => f + f).join(""));
    const r = parseInt(o.substring(0, 2), 16), l = parseInt(o.substring(2, 4), 16), m = parseInt(o.substring(4, 6), 16);
    let p = 1;
    if (o.length === 8) {
      const f = parseInt(o.substring(6, 8), 16);
      p = Math.round(f / 255 * 1e3) / 1e3;
    }
    return {
      r,
      g: l,
      b: m,
      a: p
    };
  }
  function me(a) {
    if (!a || typeof a != "string") return null;
    const t = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i, e = a.match(t);
    if (!e) return null;
    const o = parseInt(e[1], 10), r = parseInt(e[2], 10), l = parseInt(e[3], 10), m = e[4] !== void 0 ? parseFloat(e[4]) : 1;
    return o < 0 || o > 255 || r < 0 || r > 255 || l < 0 || l > 255 || m < 0 || m > 1 ? null : {
      r: o,
      g: r,
      b: l,
      a: Math.round(m * 1e3) / 1e3
    };
  }
  function $(a) {
    if (!a || typeof a != "string") return null;
    const t = a.trim();
    return t.startsWith("#") ? ue(t) : t.toLowerCase().startsWith("rgb") ? me(t) : null;
  }
  function pe(a) {
    if (!a || typeof a != "string") return null;
    const t = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi, e = Array.from(a.matchAll(t));
    if (e.length < 2) return null;
    const o = e.map((r, l) => {
      const m = r[1];
      let p;
      return r[2] ? p = parseFloat(r[2]) : p = l / (e.length - 1) * 100, {
        color: m,
        position: p
      };
    });
    return o.sort((r, l) => r.position - l.position), o;
  }
  function fe(a) {
    if (!a || a.length < 2) return null;
    const t = a.find((i) => i.position === 50);
    if (t) {
      const i = $(t.color);
      return i ? i.a === 1 ? `rgb(${i.r}, ${i.g}, ${i.b})` : `rgba(${i.r}, ${i.g}, ${i.b}, ${i.a})` : null;
    }
    let e = null, o = null;
    for (let i = 0; i < a.length; i++) if (a[i].position <= 50 && (e = a[i]), a[i].position > 50 && !o) {
      o = a[i];
      break;
    }
    if (!o && e) {
      const i = $(e.color);
      return i ? i.a === 1 ? `rgb(${i.r}, ${i.g}, ${i.b})` : `rgba(${i.r}, ${i.g}, ${i.b}, ${i.a})` : null;
    }
    if (!e && o) {
      const i = $(o.color);
      return i ? i.a === 1 ? `rgb(${i.r}, ${i.g}, ${i.b})` : `rgba(${i.r}, ${i.g}, ${i.b}, ${i.a})` : null;
    }
    if (!e || !o) return null;
    const r = $(e.color), l = $(o.color);
    if (!r || !l) return null;
    const m = o.position - e.position;
    if (m === 0) {
      const i = l;
      return i.a === 1 ? `rgb(${i.r}, ${i.g}, ${i.b})` : `rgba(${i.r}, ${i.g}, ${i.b}, ${i.a})`;
    }
    const p = (50 - e.position) / m, f = Math.round(r.r + (l.r - r.r) * p), y = Math.round(r.g + (l.g - r.g) * p), x = Math.round(r.b + (l.b - r.b) * p), u = Math.round((r.a + (l.a - r.a) * p) * 1e3) / 1e3;
    return u === 1 ? `rgb(${f}, ${y}, ${x})` : `rgba(${f}, ${y}, ${x}, ${u})`;
  }
  function G(a) {
    if (a == null || typeof a != "string") return null;
    const t = a.trim();
    if (t === "") return null;
    if (!/^(linear-gradient|radial-gradient)\(/i.test(t)) return $(t) ? t : null;
    try {
      const r = pe(t);
      return r ? fe(r) : null;
    } catch {
      return null;
    }
  }
  const xe = ee(se, {
    shouldForwardProp: (a) => a !== "data"
  })(({ theme: a, data: t }) => {
    const e = c.useMemo(() => G((t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main), [
      t == null ? void 0 : t.thumbColor,
      t == null ? void 0 : t.sliderColor,
      a.palette.primary.main
    ]), o = c.useMemo(() => e || a.palette.primary.main, [
      e,
      a.palette.primary.main
    ]), r = (t == null ? void 0 : t.thumbBorderWidth) ?? 0, l = c.useMemo(() => G((t == null ? void 0 : t.thumbBorderColor) || (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main), [
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
        ...r > 0 && {
          border: `${r}px solid ${l || a.palette.primary.main}`
        },
        "&:hover": {
          boxShadow: `0px 0px 0px 8px ${D(o, 0.32)}`
        },
        "&:active": {
          boxShadow: `0px 0px 0px 14px ${D(o, 0.32)}`
        }
      },
      "& .MuiSlider-track": {
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto",
        borderColor: (t == null ? void 0 : t.trackBorderColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main,
        background: (t == null ? void 0 : t.trackBackgroundColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main
      },
      "& .MuiSlider-rail": {
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%",
        width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%",
        background: (t == null ? void 0 : t.railBackgroundColor) || (t == null ? void 0 : t.sliderColor) || a.palette.primary.main
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
  }), be = () => {
    const a = c.useContext(Y), { widget: { data: { oidObject: t } }, widget: e, theme: o } = a, { data: r, states: l, minValue: m, maxValue: p, activeIndex: f } = X("oid"), [y, x] = c.useState(null), { value: u, updateValue: i, hasBackendChange: v } = re("oid"), [S, _] = c.useState(typeof u == "number" ? u : void 0), C = c.useRef(null), [O, q] = c.useState({
      x: 0,
      y: 0
    }), W = e.data.startIconColor || r.iconColor || o.palette.primary.main, R = e.data.endIconColor || r.iconColor || o.palette.primary.main, L = e.data.sliderOrientation === "horizontal" ? e.data.iconMin || e.data.iconSmallMin : e.data.iconMax || e.data.iconSmallMax, F = e.data.sliderOrientation === "horizontal" ? e.data.iconMax || e.data.iconSmallMax : e.data.iconMin || e.data.iconSmallMin, H = t == null ? void 0 : t.type, E = H === "number", w = c.useCallback(N, []), j = c.useMemo(() => !e.data.onlyStates && e.data.minValue !== void 0 ? Number(e.data.minValue) : m, [
      e.data.onlyStates,
      e.data.minValue,
      m
    ]), I = c.useMemo(() => !e.data.onlyStates && e.data.maxValue !== void 0 ? Number(e.data.maxValue) : p, [
      e.data.onlyStates,
      e.data.maxValue,
      p
    ]), B = c.useMemo(() => {
      const d = l.map((s) => ({
        value: Number(s.value),
        label: s.label,
        fontSize: s.fontSize,
        textColor: s.textColor,
        icon: s.icon,
        iconWidth: s.iconWidth,
        iconHeight: s.iconHeight,
        iconXOffset: s.iconXOffset,
        iconYOffset: s.iconYOffset,
        iconColor: s.iconColor
      }));
      if (e.data.onlyStates) return d.sort((s, M) => s.value - M.value);
      const b = j, g = I;
      d && b !== null && !d.some((s) => s.value === b) && d.push({
        value: b,
        label: `${b}${(t == null ? void 0 : t.unit) || ""}`,
        fontSize: void 0,
        textColor: void 0,
        icon: "",
        iconWidth: 100,
        iconHeight: 100,
        iconXOffset: "0px",
        iconYOffset: "0px",
        iconColor: void 0
      }), d && g !== null && !d.some((s) => s.value === g) && d.push({
        value: g,
        label: `${g}${(t == null ? void 0 : t.unit) || ""}`,
        fontSize: void 0,
        textColor: void 0,
        icon: "",
        iconWidth: 100,
        iconHeight: 100,
        iconXOffset: "0px",
        iconYOffset: "0px",
        iconColor: void 0
      });
      const k = Number(e.data.markStep) || 1;
      if (b !== null && g !== null) for (let s = b + k; s < g; s += k) d.some((M) => M.value === s) || d.push({
        value: s,
        label: `${s}${(t == null ? void 0 : t.unit) || ""}`,
        fontSize: void 0,
        textColor: void 0,
        icon: "",
        iconWidth: 100,
        iconHeight: 100,
        iconXOffset: "0px",
        iconYOffset: "0px",
        iconColor: void 0
      });
      return d.sort((s, M) => s.value - M.value), d;
    }, [
      l,
      j,
      I,
      e.data.markStep,
      t == null ? void 0 : t.unit,
      e.data.onlyStates
    ]);
    c.useEffect(() => {
      S === void 0 && typeof u == "number" && _(u);
    }, [
      u,
      S
    ]), c.useEffect(() => {
      v && _(typeof u == "number" ? u : void 0);
    }, [
      v,
      u
    ]);
    const P = () => {
      if (!C.current) return;
      const d = C.current.querySelector(".MuiSlider-root"), b = C.current.querySelector(".MuiSlider-rail");
      if (d && b) {
        const g = C.current.getBoundingClientRect(), k = b.getBoundingClientRect(), s = k.left - g.left + k.width / 2, M = k.top - g.top + k.height / 2, J = g.width / 2, K = g.height / 2;
        q({
          x: s - J,
          y: M - K
        });
      }
    };
    return c.useEffect(() => {
      const d = setTimeout(P, 100);
      return () => clearTimeout(d);
    }, [
      e.data.marks,
      e.data.sliderOrientation,
      e.data.iconSizeStart,
      e.data.iconSizeEnd,
      S
    ]), c.useEffect(() => {
      if (!C.current) return;
      const d = new ResizeObserver(P);
      return d.observe(C.current), () => d.disconnect();
    }, []), c.useEffect(() => {
      if (u === void 0) return;
      const d = B.findIndex((b) => String(b.value) === String(u));
      d !== -1 && x(d);
    }, [
      u,
      B
    ]), n.jsxs(Z, {
      isValidType: E,
      data: r,
      oidValue: u,
      sx: {
        p: Number(e.data.sliderPadding) || 1
      },
      children: [
        n.jsx(ae, {
          data: r,
          widget: e
        }),
        E ? n.jsxs(z, {
          ref: C,
          sx: {
            display: "flex",
            flexDirection: e.data.sliderOrientation === "horizontal" ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          children: [
            (e.data.sliderOrientation === "horizontal" && (e.data.iconMin || e.data.iconSmallMin) || e.data.sliderOrientation === "vertical" && (e.data.iconMax || e.data.iconSmallMax)) && n.jsx(z, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                ...e.data.sliderOrientation === "horizontal" ? {
                  transform: `translateY(${O.y}px)`
                } : {
                  transform: `translateX(${O.x}px)`
                }
              },
              children: n.jsx("img", {
                alt: "",
                src: L,
                style: {
                  width: e.data.sliderOrientation === "horizontal" ? e.data.iconSizeStart || "24px" : e.data.iconSizeEnd || "24px",
                  ...T(L, e.data.sliderOrientation === "horizontal" ? W : R)
                }
              })
            }),
            n.jsx(z, {
              sx: {
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                minWidth: e.data.sliderOrientation === "horizontal" ? "200px" : "auto",
                minHeight: e.data.sliderOrientation === "vertical" ? "200px" : "auto"
              },
              children: typeof S == "number" && n.jsx(xe, {
                data: e.data,
                slots: {
                  markLabel: ce
                },
                slotProps: {
                  markLabel: {
                    marks: e.data.marks,
                    sliderOrientation: e.data.sliderOrientation,
                    aliasActive: e.data.aliasActive,
                    activeMarkIndex: y,
                    defaultIconColor: r.iconColor || o.palette.primary.main
                  }
                },
                disabled: H !== "number",
                valueLabelDisplay: e.data.valueLabelDisplay,
                orientation: e.data.sliderOrientation,
                min: j ?? void 0,
                max: I ?? void 0,
                marks: B,
                step: e.data.onlyStates ? null : e.data.step !== void 0 ? Number(e.data.step) : void 0,
                size: e.data.sliderSize,
                value: S,
                onChange: (d, b) => {
                  typeof b == "number" && (_(b), i(b));
                },
                sx: {
                  mb: e.data.marks && e.data.sliderOrientation === "horizontal" ? "20px" : "0px",
                  mr: e.data.marks && e.data.sliderOrientation === "vertical" ? "44px" : "0px",
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
                    fontSize: w(e.data.valueSizeActive) || r.valueSizeActive || f && e.data.markerTextSize && w(e.data.markerTextSize) || r.valueSize || "1rem",
                    color: e.data.textColorActive || r.textColorActive || f && e.data.markerTextColor || r.textColor,
                    bgcolor: "transparent",
                    top: e.data.sliderOrientation === "horizontal" ? e.data.labelPosition : void 0,
                    right: e.data.sliderOrientation === "vertical" ? e.data.labelPosition : void 0
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: r.valueSize || "1rem",
                    color: e.data.markerTextColor || r.textColor,
                    top: e.data.sliderOrientation === "horizontal" ? e.data.markPosition : void 0,
                    left: e.data.sliderOrientation === "vertical" ? e.data.markPosition : void 0
                  },
                  "& .MuiSlider-markLabelActive": {
                    [`&[data-index='${y}']`]: {
                      "& div[data-font='active']": {
                        color: e.data.textColorActive ? `${e.data.textColorActive} !important` : void 0,
                        fontSize: typeof e.data.valueSizeActive == "number" ? `${w(e.data.valueSizeActive)} !important` : void 0
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
            (e.data.sliderOrientation === "horizontal" && (e.data.iconMax || e.data.iconSmallMax) || e.data.sliderOrientation === "vertical" && (e.data.iconMin || e.data.iconSmallMin)) && n.jsx(z, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                ...e.data.sliderOrientation === "horizontal" ? {
                  transform: `translateY(${O.y}px)`
                } : {
                  transform: `translateX(${O.x}px)`
                }
              },
              children: n.jsx("img", {
                alt: "",
                src: F,
                style: {
                  width: e.data.sliderOrientation === "horizontal" ? e.data.iconSizeEnd || "24px" : e.data.iconSizeStart || "24px",
                  ...T(F, e.data.sliderOrientation === "horizontal" ? R : W)
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  U = class extends te {
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
              ...oe([
                "number"
              ]),
              ...ne(),
              ...de()
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ie(this.wrapContent(n.jsx(be, {})), e);
    }
  };
});
export {
  __tla,
  U as default
};
