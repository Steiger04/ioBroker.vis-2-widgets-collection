import { j as r, C as b, J as _, y as G, v as X, K as Y, w as A, T as K, z as B, A as Q, s as Z, o as D, G as ee, E as T, H as te, __tla as __tla_0 } from "./useData-eK8DFeaZ.js";
import { C as ae, c as ie, __tla as __tla_1 } from "./CollectionBaseImage-BOziIbkL.js";
import { u as oe, d as ne, __tla as __tla_2 } from "./useValueState-CBTmm9_k.js";
import { v as c, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { a as re, S as le, __tla as __tla_4 } from "./Slider-DUq53ain.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let N;
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
      component: () => r.jsx(b, {})
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
      component: (i, t, e, o) => r.jsx(_, {
        field: i,
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
      component: () => r.jsx(b, {
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
      component: (i, t, e, o) => r.jsx(_, {
        field: i,
        data: t,
        onDataChange: e,
        props: o
      })
    },
    {
      type: "custom",
      component: () => r.jsx(b, {
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
      component: (i, t, e, o) => r.jsx(_, {
        field: i,
        data: t,
        onDataChange: e,
        props: o
      })
    },
    {
      type: "custom",
      component: () => r.jsx(b, {
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
      component: (i, t, e, o) => r.jsx(_, {
        field: i,
        data: t,
        onDataChange: e,
        props: o
      })
    },
    {
      type: "custom",
      component: () => r.jsx(b, {
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
      component: (i, t, e, o) => r.jsx(_, {
        field: i,
        data: t,
        onDataChange: e,
        props: o
      })
    },
    {
      type: "custom",
      component: () => r.jsx(b, {
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
      component: () => r.jsx(b, {}),
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
      component: () => r.jsx(b, {
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
      component: () => r.jsx(b, {}),
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
      component: () => r.jsx(b, {}),
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
      component: () => r.jsx(b, {}),
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
      component: () => r.jsx(b, {
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
      component: () => r.jsx(b, {
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
  ], de = ({ marks: i, sliderOrientation: t, aliasActive: e, activeMarkIndex: o, defaultIconColor: n, ...s }) => {
    var _a, _b;
    const [m, p] = c.useState(null), { data: f } = G("oid"), C = c.useContext(X), { widget: x } = C, u = s["data-index"], a = (_b = (_a = s.ownerState) == null ? void 0 : _a.marks) == null ? void 0 : _b[u], v = o === u, S = c.useCallback(Y, []);
    return c.useEffect(() => {
      m && (a == null ? void 0 : a.label) && (v && e ? m.innerHTML = e : m.innerHTML = a.label);
    }, [
      a == null ? void 0 : a.label,
      m,
      v,
      e,
      u
    ]), i && a ? r.jsx(re, {
      ...s,
      children: r.jsxs(A, {
        sx: {
          display: "flex",
          flexDirection: t === "vertical" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          r.jsx(K, {
            "data-font": "active",
            ref: p,
            sx: {
              textTransform: "none",
              flexGrow: 1,
              pr: t === "vertical" ? 1 : 0,
              pb: t === "vertical" ? 0 : 1,
              fontSize: v && typeof x.data.valueSizeActive == "number" && S(x.data.valueSizeActive) || a.fontSize || f.valueSize || "1rem",
              color: v && x.data.textColorActive || a.textColor || f.textColor
            }
          }),
          r.jsx(A, {
            "data-position": "active",
            sx: {
              position: "relative",
              bottom: a.iconYOffset,
              left: a.iconXOffset,
              flexGrow: 1
            },
            children: (() => {
              const z = v && (x.data.iconActive || x.data.iconSmallActive) || a.icon || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", y = (v && x.data.iconColorActive && x.data.iconColorActive !== "" ? x.data.iconColorActive : null) || (a.iconColor && a.iconColor !== "" ? a.iconColor : null) || (f.iconColor && f.iconColor !== "" ? f.iconColor : null) || n || void 0;
              return r.jsx("img", {
                "data-img": "active",
                src: z,
                alt: "",
                style: {
                  position: "relative",
                  width: v && typeof x.data.iconSizeActive == "number" ? `${24 * x.data.iconSizeActive / 100}px` : `${24 * a.iconWidth / 100}px`,
                  ...B(z, y)
                }
              });
            })()
          })
        ]
      })
    }) : null;
  };
  function ce(i) {
    if (!i || typeof i != "string") return null;
    const t = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, e = i.match(t);
    if (!e) return null;
    let o = e[1];
    o.length === 3 && (o = o.split("").map((f) => f + f).join(""));
    const n = parseInt(o.substring(0, 2), 16), s = parseInt(o.substring(2, 4), 16), m = parseInt(o.substring(4, 6), 16);
    let p = 1;
    if (o.length === 8) {
      const f = parseInt(o.substring(6, 8), 16);
      p = Math.round(f / 255 * 1e3) / 1e3;
    }
    return {
      r: n,
      g: s,
      b: m,
      a: p
    };
  }
  function ue(i) {
    if (!i || typeof i != "string") return null;
    const t = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i, e = i.match(t);
    if (!e) return null;
    const o = parseInt(e[1], 10), n = parseInt(e[2], 10), s = parseInt(e[3], 10), m = e[4] !== void 0 ? parseFloat(e[4]) : 1;
    return o < 0 || o > 255 || n < 0 || n > 255 || s < 0 || s > 255 || m < 0 || m > 1 ? null : {
      r: o,
      g: n,
      b: s,
      a: Math.round(m * 1e3) / 1e3
    };
  }
  function $(i) {
    if (!i || typeof i != "string") return null;
    const t = i.trim();
    return t.startsWith("#") ? ce(t) : t.toLowerCase().startsWith("rgb") ? ue(t) : null;
  }
  function me(i) {
    if (!i || typeof i != "string") return null;
    const t = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi, e = Array.from(i.matchAll(t));
    if (e.length < 2) return null;
    const o = e.map((n, s) => {
      const m = n[1];
      let p;
      return n[2] ? p = parseFloat(n[2]) : p = s / (e.length - 1) * 100, {
        color: m,
        position: p
      };
    });
    return o.sort((n, s) => n.position - s.position), o;
  }
  function pe(i) {
    if (!i || i.length < 2) return null;
    const t = i.find((a) => a.position === 50);
    if (t) {
      const a = $(t.color);
      return a ? a.a === 1 ? `rgb(${a.r}, ${a.g}, ${a.b})` : `rgba(${a.r}, ${a.g}, ${a.b}, ${a.a})` : null;
    }
    let e = null, o = null;
    for (let a = 0; a < i.length; a++) if (i[a].position <= 50 && (e = i[a]), i[a].position > 50 && !o) {
      o = i[a];
      break;
    }
    if (!o && e) {
      const a = $(e.color);
      return a ? a.a === 1 ? `rgb(${a.r}, ${a.g}, ${a.b})` : `rgba(${a.r}, ${a.g}, ${a.b}, ${a.a})` : null;
    }
    if (!e && o) {
      const a = $(o.color);
      return a ? a.a === 1 ? `rgb(${a.r}, ${a.g}, ${a.b})` : `rgba(${a.r}, ${a.g}, ${a.b}, ${a.a})` : null;
    }
    if (!e || !o) return null;
    const n = $(e.color), s = $(o.color);
    if (!n || !s) return null;
    const m = o.position - e.position;
    if (m === 0) {
      const a = s;
      return a.a === 1 ? `rgb(${a.r}, ${a.g}, ${a.b})` : `rgba(${a.r}, ${a.g}, ${a.b}, ${a.a})`;
    }
    const p = (50 - e.position) / m, f = Math.round(n.r + (s.r - n.r) * p), C = Math.round(n.g + (s.g - n.g) * p), x = Math.round(n.b + (s.b - n.b) * p), u = Math.round((n.a + (s.a - n.a) * p) * 1e3) / 1e3;
    return u === 1 ? `rgb(${f}, ${C}, ${x})` : `rgba(${f}, ${C}, ${x}, ${u})`;
  }
  function fe(i) {
    if (i == null || typeof i != "string") return null;
    const t = i.trim();
    if (t === "") return null;
    if (!/^(linear-gradient|radial-gradient)\(/i.test(t)) return $(t) ? t : null;
    try {
      const n = me(t);
      return n ? pe(n) : null;
    } catch {
      return null;
    }
  }
  const xe = Z(le, {
    shouldForwardProp: (i) => i !== "data"
  })(({ theme: i, data: t }) => {
    const e = c.useMemo(() => fe((t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main), [
      t == null ? void 0 : t.thumbColor,
      t == null ? void 0 : t.sliderColor,
      i.palette.primary.main
    ]), o = c.useMemo(() => e || i.palette.primary.main, [
      e,
      i.palette.primary.main
    ]);
    return {
      "& .MuiSlider-thumb": {
        width: `${(t == null ? void 0 : t.thumbWidth) ?? 20}px`,
        height: `${(t == null ? void 0 : t.thumbHeight) ?? 20}px`,
        background: (t == null ? void 0 : t.thumbColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main,
        border: "10px solid red",
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
        borderColor: (t == null ? void 0 : t.trackBorderColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main,
        background: (t == null ? void 0 : t.trackBackgroundColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main
      },
      "& .MuiSlider-rail": {
        height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%",
        width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%",
        background: (t == null ? void 0 : t.railBackgroundColor) || (t == null ? void 0 : t.sliderColor) || i.palette.primary.main
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
    const i = c.useContext(X), { widget: { data: { oidObject: t } }, widget: e, theme: o } = i, { data: n, states: s, minValue: m, maxValue: p, activeIndex: f } = G("oid"), [C, x] = c.useState(null), { value: u, updateValue: a, hasBackendChange: v } = oe("oid"), [S, z] = c.useState(typeof u == "number" ? u : void 0), y = c.useRef(null), [O, U] = c.useState({
      x: 0,
      y: 0
    }), W = e.data.startIconColor || n.iconColor || o.palette.primary.main, R = e.data.endIconColor || n.iconColor || o.palette.primary.main, L = e.data.sliderOrientation === "horizontal" ? e.data.iconMin || e.data.iconSmallMin : e.data.iconMax || e.data.iconSmallMax, H = e.data.sliderOrientation === "horizontal" ? e.data.iconMax || e.data.iconSmallMax : e.data.iconMin || e.data.iconSmallMin, E = t == null ? void 0 : t.type, P = E === "number", w = c.useCallback(Y, []), j = c.useMemo(() => !e.data.onlyStates && e.data.minValue !== void 0 ? Number(e.data.minValue) : m, [
      e.data.onlyStates,
      e.data.minValue,
      m
    ]), I = c.useMemo(() => !e.data.onlyStates && e.data.maxValue !== void 0 ? Number(e.data.maxValue) : p, [
      e.data.onlyStates,
      e.data.maxValue,
      p
    ]), V = c.useMemo(() => {
      const d = s.map((l) => ({
        value: Number(l.value),
        label: l.label,
        fontSize: l.fontSize,
        textColor: l.textColor,
        icon: l.icon,
        iconWidth: l.iconWidth,
        iconHeight: l.iconHeight,
        iconXOffset: l.iconXOffset,
        iconYOffset: l.iconYOffset,
        iconColor: l.iconColor
      }));
      if (e.data.onlyStates) return d.sort((l, M) => l.value - M.value);
      const h = j, g = I;
      d && h !== null && !d.some((l) => l.value === h) && d.push({
        value: h,
        label: `${h}${(t == null ? void 0 : t.unit) || ""}`,
        fontSize: void 0,
        textColor: void 0,
        icon: "",
        iconWidth: 100,
        iconHeight: 100,
        iconXOffset: "0px",
        iconYOffset: "0px",
        iconColor: void 0
      }), d && g !== null && !d.some((l) => l.value === g) && d.push({
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
      if (h !== null && g !== null) for (let l = h + k; l < g; l += k) d.some((M) => M.value === l) || d.push({
        value: l,
        label: `${l}${(t == null ? void 0 : t.unit) || ""}`,
        fontSize: void 0,
        textColor: void 0,
        icon: "",
        iconWidth: 100,
        iconHeight: 100,
        iconXOffset: "0px",
        iconYOffset: "0px",
        iconColor: void 0
      });
      return d.sort((l, M) => l.value - M.value), d;
    }, [
      s,
      j,
      I,
      e.data.markStep,
      t == null ? void 0 : t.unit,
      e.data.onlyStates
    ]);
    c.useEffect(() => {
      S === void 0 && typeof u == "number" && z(u);
    }, [
      u,
      S
    ]), c.useEffect(() => {
      v && z(typeof u == "number" ? u : void 0);
    }, [
      v,
      u
    ]);
    const F = () => {
      if (!y.current) return;
      const d = y.current.querySelector(".MuiSlider-root"), h = y.current.querySelector(".MuiSlider-rail");
      if (d && h) {
        const g = y.current.getBoundingClientRect(), k = h.getBoundingClientRect(), l = k.left - g.left + k.width / 2, M = k.top - g.top + k.height / 2, q = g.width / 2, J = g.height / 2;
        U({
          x: l - q,
          y: M - J
        });
      }
    };
    return c.useEffect(() => {
      const d = setTimeout(F, 100);
      return () => clearTimeout(d);
    }, [
      e.data.marks,
      e.data.sliderOrientation,
      e.data.iconSizeStart,
      e.data.iconSizeEnd,
      S
    ]), c.useEffect(() => {
      if (!y.current) return;
      const d = new ResizeObserver(F);
      return d.observe(y.current), () => d.disconnect();
    }, []), c.useEffect(() => {
      if (u === void 0) return;
      const d = V.findIndex((h) => String(h.value) === String(u));
      d !== -1 && x(d);
    }, [
      u,
      V
    ]), r.jsxs(Q, {
      isValidType: P,
      data: n,
      oidValue: u,
      sx: {
        p: Number(e.data.sliderPadding) || 1
      },
      children: [
        r.jsx(ae, {
          data: n,
          widget: e
        }),
        P ? r.jsxs(A, {
          ref: y,
          sx: {
            display: "flex",
            flexDirection: e.data.sliderOrientation === "horizontal" ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          children: [
            (e.data.sliderOrientation === "horizontal" && (e.data.iconMin || e.data.iconSmallMin) || e.data.sliderOrientation === "vertical" && (e.data.iconMax || e.data.iconSmallMax)) && r.jsx(A, {
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
              children: r.jsx("img", {
                alt: "",
                src: L,
                style: {
                  width: e.data.sliderOrientation === "horizontal" ? e.data.iconSizeStart || "24px" : e.data.iconSizeEnd || "24px",
                  ...B(L, e.data.sliderOrientation === "horizontal" ? W : R)
                }
              })
            }),
            r.jsx(A, {
              sx: {
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                minWidth: e.data.sliderOrientation === "horizontal" ? "200px" : "auto",
                minHeight: e.data.sliderOrientation === "vertical" ? "200px" : "auto"
              },
              children: typeof S == "number" && r.jsx(xe, {
                data: e.data,
                slots: {
                  markLabel: de
                },
                slotProps: {
                  markLabel: {
                    marks: e.data.marks,
                    sliderOrientation: e.data.sliderOrientation,
                    aliasActive: e.data.aliasActive,
                    activeMarkIndex: C,
                    defaultIconColor: n.iconColor || o.palette.primary.main
                  }
                },
                disabled: E !== "number",
                valueLabelDisplay: e.data.valueLabelDisplay,
                orientation: e.data.sliderOrientation,
                min: j ?? void 0,
                max: I ?? void 0,
                marks: V,
                step: e.data.onlyStates ? null : e.data.step !== void 0 ? Number(e.data.step) : void 0,
                size: e.data.sliderSize,
                value: S,
                onChange: (d, h) => {
                  typeof h == "number" && (z(h), a(h));
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
                    fontSize: w(e.data.valueSizeActive) || n.valueSizeActive || f && e.data.markerTextSize && w(e.data.markerTextSize) || n.valueSize || "1rem",
                    color: e.data.textColorActive || n.textColorActive || f && e.data.markerTextColor || n.textColor,
                    bgcolor: "transparent",
                    top: e.data.sliderOrientation === "horizontal" ? e.data.labelPosition : void 0,
                    right: e.data.sliderOrientation === "vertical" ? e.data.labelPosition : void 0
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: n.valueSize || "1rem",
                    color: e.data.markerTextColor || n.textColor,
                    top: e.data.sliderOrientation === "horizontal" ? e.data.markPosition : void 0,
                    left: e.data.sliderOrientation === "vertical" ? e.data.markPosition : void 0
                  },
                  "& .MuiSlider-markLabelActive": {
                    [`&[data-index='${C}']`]: {
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
            (e.data.sliderOrientation === "horizontal" && (e.data.iconMax || e.data.iconSmallMax) || e.data.sliderOrientation === "vertical" && (e.data.iconMin || e.data.iconSmallMin)) && r.jsx(A, {
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
              children: r.jsx("img", {
                alt: "",
                src: H,
                style: {
                  width: e.data.sliderOrientation === "horizontal" ? e.data.iconSizeEnd || "24px" : e.data.iconSizeStart || "24px",
                  ...B(H, e.data.sliderOrientation === "horizontal" ? R : W)
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  N = class extends ee {
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
              ...ie([
                "number"
              ]),
              ...ne(),
              ...se()
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
      return N.getWidgetInfo();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, te(this.wrapContent(r.jsx(he, {})), e);
    }
  };
});
export {
  __tla,
  N as default
};
