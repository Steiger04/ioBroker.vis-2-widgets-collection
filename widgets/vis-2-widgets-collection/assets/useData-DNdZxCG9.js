import { u as ue, j as b, a7 as de, s as fe, d as ye, e as ke, a8 as ze, m as me, i as $e, a9 as W, aa as Ae, ab as _e, ac as re, a3 as ge, n as T, T as L, G as Z, c as Oe, ad as je, a0 as Ie, I as we, ae as Te, af as Be, P as ie, __tla as __tla_0 } from "./usePopoverPositioning-BZLitN7O.js";
import { v as m, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
let z, U, lt, N, D, rt, xt, ht, St, at, X, vt, it, st, ae, ot, oe, et, J, Ge, Ct, pt;
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
  const ee = typeof de({}) == "function", Ee = (t, e) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...e && !t.vars && {
      colorScheme: t.palette.mode
    }
  }), Me = (t) => ({
    color: (t.vars || t).palette.text.primary,
    ...t.typography.body1,
    backgroundColor: (t.vars || t).palette.background.default,
    "@media print": {
      backgroundColor: (t.vars || t).palette.common.white
    }
  }), be = (t, e = false) => {
    var _a, _b;
    const o = {};
    e && t.colorSchemes && typeof t.getColorSchemeSelector == "function" && Object.entries(t.colorSchemes).forEach(([i, a]) => {
      var _a2, _b2;
      const u = t.getColorSchemeSelector(i);
      u.startsWith("@") ? o[u] = {
        ":root": {
          colorScheme: (_a2 = a.palette) == null ? void 0 : _a2.mode
        }
      } : o[u.replace(/\s*&/, "")] = {
        colorScheme: (_b2 = a.palette) == null ? void 0 : _b2.mode
      };
    });
    let r = {
      html: Ee(t, e),
      "*, *::before, *::after": {
        boxSizing: "inherit"
      },
      "strong, b": {
        fontWeight: t.typography.fontWeightBold
      },
      body: {
        margin: 0,
        ...Me(t),
        "&::backdrop": {
          backgroundColor: (t.vars || t).palette.background.default
        }
      },
      ...o
    };
    const s = (_b = (_a = t.components) == null ? void 0 : _a.MuiCssBaseline) == null ? void 0 : _b.styleOverrides;
    return s && (r = [
      r,
      s
    ]), r;
  }, Y = "mui-ecs", Fe = (t) => {
    const e = be(t, false), o = Array.isArray(e) ? e[0] : e;
    return !t.vars && o && (o.html[`:root:has(${Y})`] = {
      colorScheme: t.palette.mode
    }), t.colorSchemes && Object.entries(t.colorSchemes).forEach(([r, s]) => {
      var _a, _b;
      const i = t.getColorSchemeSelector(r);
      i.startsWith("@") ? o[i] = {
        [`:root:not(:has(.${Y}))`]: {
          colorScheme: (_a = s.palette) == null ? void 0 : _a.mode
        }
      } : o[i.replace(/\s*&/, "")] = {
        [`&:not(:has(.${Y}))`]: {
          colorScheme: (_b = s.palette) == null ? void 0 : _b.mode
        }
      };
    }), e;
  }, Ve = de(ee ? ({ theme: t, enableColorScheme: e }) => be(t, e) : ({ theme: t }) => Fe(t));
  function He(t) {
    const e = ue({
      props: t,
      name: "MuiCssBaseline"
    }), { children: o, enableColorScheme: r = false } = e;
    return b.jsxs(m.Fragment, {
      children: [
        ee && b.jsx(Ve, {
          enableColorScheme: r
        }),
        !ee && !r && b.jsx("span", {
          className: Y,
          style: {
            display: "none"
          }
        }),
        o
      ]
    });
  }
  let Pe, We, De;
  Pe = (t) => {
    const { absolute: e, children: o, classes: r, flexItem: s, light: i, orientation: a, textAlign: u, variant: d } = t;
    return ke({
      root: [
        "root",
        e && "absolute",
        d,
        i && "light",
        a === "vertical" && "vertical",
        s && "flexItem",
        o && "withChildren",
        o && a === "vertical" && "withChildrenVertical",
        u === "right" && a !== "vertical" && "textAlignRight",
        u === "left" && a !== "vertical" && "textAlignLeft"
      ],
      wrapper: [
        "wrapper",
        a === "vertical" && "wrapperVertical"
      ]
    }, ze, r);
  };
  We = fe("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        o.absolute && e.absolute,
        e[o.variant],
        o.light && e.light,
        o.orientation === "vertical" && e.vertical,
        o.flexItem && e.flexItem,
        o.children && e.withChildren,
        o.children && o.orientation === "vertical" && e.withChildrenVertical,
        o.textAlign === "right" && o.orientation !== "vertical" && e.textAlignRight,
        o.textAlign === "left" && o.orientation !== "vertical" && e.textAlignLeft
      ];
    }
  })(me(({ theme: t }) => ({
    margin: 0,
    flexShrink: 0,
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: (t.vars || t).palette.divider,
    borderBottomWidth: "thin",
    variants: [
      {
        props: {
          absolute: true
        },
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%"
        }
      },
      {
        props: {
          light: true
        },
        style: {
          borderColor: t.vars ? `rgba(${t.vars.palette.dividerChannel} / 0.08)` : $e(t.palette.divider, 0.08)
        }
      },
      {
        props: {
          variant: "inset"
        },
        style: {
          marginLeft: 72
        }
      },
      {
        props: {
          variant: "middle",
          orientation: "horizontal"
        },
        style: {
          marginLeft: t.spacing(2),
          marginRight: t.spacing(2)
        }
      },
      {
        props: {
          variant: "middle",
          orientation: "vertical"
        },
        style: {
          marginTop: t.spacing(1),
          marginBottom: t.spacing(1)
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          height: "100%",
          borderBottomWidth: 0,
          borderRightWidth: "thin"
        }
      },
      {
        props: {
          flexItem: true
        },
        style: {
          alignSelf: "stretch",
          height: "auto"
        }
      },
      {
        props: ({ ownerState: e }) => !!e.children,
        style: {
          display: "flex",
          textAlign: "center",
          border: 0,
          borderTopStyle: "solid",
          borderLeftStyle: "solid",
          "&::before, &::after": {
            content: '""',
            alignSelf: "center"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.children && e.orientation !== "vertical",
        style: {
          "&::before, &::after": {
            width: "100%",
            borderTop: `thin solid ${(t.vars || t).palette.divider}`,
            borderTopStyle: "inherit"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.orientation === "vertical" && e.children,
        style: {
          flexDirection: "column",
          "&::before, &::after": {
            height: "100%",
            borderLeft: `thin solid ${(t.vars || t).palette.divider}`,
            borderLeftStyle: "inherit"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.textAlign === "right" && e.orientation !== "vertical",
        style: {
          "&::before": {
            width: "90%"
          },
          "&::after": {
            width: "10%"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.textAlign === "left" && e.orientation !== "vertical",
        style: {
          "&::before": {
            width: "10%"
          },
          "&::after": {
            width: "90%"
          }
        }
      }
    ]
  })));
  De = fe("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.wrapper,
        o.orientation === "vertical" && e.wrapperVertical
      ];
    }
  })(me(({ theme: t }) => ({
    display: "inline-block",
    paddingLeft: `calc(${t.spacing(1)} * 1.2)`,
    paddingRight: `calc(${t.spacing(1)} * 1.2)`,
    whiteSpace: "nowrap",
    variants: [
      {
        props: {
          orientation: "vertical"
        },
        style: {
          paddingTop: `calc(${t.spacing(1)} * 1.2)`,
          paddingBottom: `calc(${t.spacing(1)} * 1.2)`
        }
      }
    ]
  })));
  U = m.forwardRef(function(e, o) {
    const r = ue({
      props: e,
      name: "MuiDivider"
    }), { absolute: s = false, children: i, className: a, orientation: u = "horizontal", component: d = i || u === "vertical" ? "div" : "hr", flexItem: n = false, light: p = false, role: v = d !== "hr" ? "separator" : void 0, textAlign: f = "center", variant: l = "fullWidth", ...c } = r, g = {
      ...r,
      absolute: s,
      component: d,
      flexItem: n,
      light: p,
      orientation: u,
      role: v,
      textAlign: f,
      variant: l
    }, $ = Pe(g);
    return b.jsx(We, {
      as: d,
      className: ye($.root, a),
      role: v,
      ref: o,
      ownerState: g,
      "aria-orientation": v === "separator" && (d !== "hr" || u === "vertical") ? u : void 0,
      ...c,
      children: i ? b.jsx(De, {
        className: $.wrapper,
        ownerState: g,
        children: i
      }) : null
    });
  });
  U && (U.muiSkipListHighlight = true);
  let Re;
  Re = [
    "background",
    "background-color",
    "background-image",
    "background-position",
    "background-repeat",
    "background-size",
    "background-clip",
    "background-origin",
    "border",
    "border-width",
    "border-style",
    "border-color",
    "border-radius",
    "color",
    "text-align",
    "text-shadow",
    "font-family",
    "font-size",
    "font-weight",
    "font-style",
    "font-variant",
    "line-height",
    "letter-spacing",
    "word-spacing",
    "box-sizing",
    "box-shadow"
  ];
  oe = (t) => m.useMemo(() => {
    if (!t) return {
      backgroundStyles: void 0,
      borderStyles: void 0,
      textStyles: void 0,
      fontStyles: void 0,
      boxStyles: void 0
    };
    const e = {}, o = {}, r = {}, s = {}, i = {};
    return Re.forEach((a) => {
      const u = t[a];
      u !== void 0 && (a.includes("background") ? e[a] = u : a.includes("border") ? o[a] = u : a.includes("font") || a.includes("line-height") || a.includes("letter-spacing") || a.includes("word-spacing") ? s[a] = u : a.includes("text") || a.includes("color") ? r[a] = u : i[a] = u);
    }), {
      backgroundStyles: e,
      borderStyles: o,
      textStyles: r,
      fontStyles: s,
      boxStyles: i
    };
  }, [
    t
  ]);
  function pe(t, e, o) {
    const [r, s] = m.useState("");
    m.useEffect(() => {
      let a = true;
      const u = (d, n) => {
        a && s(typeof (n == null ? void 0 : n.val) == "string" ? n.val : "");
      };
      return t.getState(W).then((d) => {
        a && s(typeof (d == null ? void 0 : d.val) == "string" ? d.val : "");
      }).catch((d) => console.error(`Cannot read theme state ${W}: ${d}`)), t.subscribeState(W, u).catch((d) => console.error(`Cannot subscribe theme state ${W}: ${d}`)), () => {
        a = false;
        try {
          t.unsubscribeState(W, u);
        } catch (d) {
          console.error(`Cannot unsubscribe theme state ${W}: ${d}`);
        }
      };
    }, [
      t
    ]);
    const i = m.useMemo(() => {
      if (!r) return {};
      try {
        const a = Ae(JSON.parse(r));
        return a.isValid ? a.theme ?? {} : {};
      } catch {
        return {};
      }
    }, [
      r
    ]);
    return m.useMemo(() => _e(re(re(e, o ?? {}), i)), [
      e,
      o,
      i
    ]);
  }
  let q, ve;
  q = (t) => t.startsWith("&") || t.includes(" ") || t.startsWith("@") ? t : t.replace(/-([a-z])/g, (e, o) => o.toUpperCase());
  ve = (t) => {
    const e = Object.fromEntries(Object.entries(t).map(([o, r]) => {
      if (Array.isArray(r)) {
        const s = r.filter((i) => i != null);
        return [
          q(o),
          s.length > 0 ? s : void 0
        ];
      }
      return typeof r == "object" && r !== null ? [
        q(o),
        ve(r)
      ] : [
        q(o),
        r
      ];
    }).filter(([, o]) => o != null));
    return Object.keys(e).length > 0 ? e : void 0;
  };
  J = (t) => {
    if (!t) return {};
    const e = Object.fromEntries(Object.entries(t).map(([o, r]) => {
      const s = q(o);
      if (Array.isArray(r)) {
        const i = r.filter((a) => a != null);
        return [
          s,
          i.length > 0 ? i : void 0
        ];
      }
      if (typeof r == "object" && r !== null) {
        const i = ve(r);
        return [
          s,
          i
        ];
      }
      return [
        s,
        r
      ];
    }).filter(([, o]) => o != null));
    return Object.keys(e).length > 0 ? e : {};
  };
  N = m.createContext({});
  function Ne({ children: t, context: e }) {
    const o = e.theme, r = e.widget, s = e.socket, { fontStyles: i, textStyles: a } = oe(r.style || {}), u = m.useMemo(() => ({
      palette: {
        text: {
          primary: (a == null ? void 0 : a.color) || o.palette.primary.main
        }
      },
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              fontSize: "0.875rem",
              ...J(i),
              ...J(a)
            }
          }
        }
      }
    }), [
      i,
      a,
      o.palette.primary.main
    ]), d = pe(s, o, u);
    return b.jsxs(ge, {
      theme: d,
      children: [
        b.jsx(He, {}),
        b.jsx(N.Provider, {
          value: {
            ...e,
            theme: d
          },
          children: t
        })
      ]
    });
  }
  pt = function(t, e) {
    return b.jsx(Ne, {
      context: e,
      children: t
    });
  };
  let F;
  z = ({ dividerText: t = "" }) => {
    const e = {
      position: "absolute",
      left: 0,
      width: "100%"
    };
    return b.jsx(T, {
      sx: {
        display: "inline-block",
        pt: 1.5,
        pb: t ? 2 : 1.5
      },
      children: t ? b.jsx(U, {
        sx: e,
        children: b.jsx(L, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: Z.t(t)
        })
      }) : b.jsx(U, {
        sx: e
      })
    });
  };
  Ge = Oe(b.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  F = {
    HEX: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    RGB: /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i,
    GRADIENT: /^(linear-gradient|radial-gradient)\(.*\)$/i,
    GRADIENT_PREFIX: /^(linear-gradient|radial-gradient)\(/i
  };
  function te(t) {
    if (!t || t.trim() === "") return {
      isValid: true,
      normalizedValue: "",
      colorType: "empty"
    };
    const e = t.trim();
    return F.HEX.test(e) ? {
      isValid: true,
      normalizedValue: e,
      colorType: "hex"
    } : F.RGB.test(e) ? {
      isValid: true,
      normalizedValue: e,
      colorType: "rgb"
    } : F.GRADIENT.test(e) ? {
      isValid: true,
      normalizedValue: e,
      colorType: "gradient"
    } : {
      isValid: false,
      normalizedValue: e,
      colorType: "invalid"
    };
  }
  function Xe(t) {
    if (t == null || typeof t != "string") return false;
    const e = t.trim();
    return e === "" ? false : F.GRADIENT_PREFIX.test(e);
  }
  function Le(t) {
    if (!t || typeof t != "string") return null;
    const e = t.match(F.HEX);
    if (!e) return null;
    let o = e[1];
    o.length === 3 && (o = o.split("").map((u) => u + u).join(""));
    const r = parseInt(o.substring(0, 2), 16), s = parseInt(o.substring(2, 4), 16), i = parseInt(o.substring(4, 6), 16);
    let a = 1;
    if (o.length === 8) {
      const u = parseInt(o.substring(6, 8), 16);
      a = Math.round(u / 255 * 1e3) / 1e3;
    }
    return {
      r,
      g: s,
      b: i,
      a
    };
  }
  function Ye(t) {
    if (!t || typeof t != "string" || !t.match(F.RGB)) return null;
    const o = t.match(/\d+\.?\d*/g);
    if (!o || o.length < 3) return null;
    const r = parseInt(o[0], 10), s = parseInt(o[1], 10), i = parseInt(o[2], 10), a = o[3] !== void 0 ? parseFloat(o[3]) : 1;
    return r < 0 || r > 255 || s < 0 || s > 255 || i < 0 || i > 255 || a < 0 || a > 1 ? null : {
      r,
      g: s,
      b: i,
      a: Math.round(a * 1e3) / 1e3
    };
  }
  function R(t) {
    if (!t || typeof t != "string") return null;
    const e = t.trim();
    return e.startsWith("#") ? Le(e) : e.toLowerCase().startsWith("rgb") ? Ye(e) : null;
  }
  function qe(t) {
    if (!t || typeof t != "string") return null;
    const e = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi, o = Array.from(t.matchAll(e));
    if (o.length < 2) return null;
    const r = o.map((s, i) => {
      const a = s[1];
      let u;
      return s[2] ? u = parseFloat(s[2]) : u = i / (o.length - 1) * 100, {
        color: a,
        position: u
      };
    });
    return r.sort((s, i) => s.position - i.position), r;
  }
  function Ue(t) {
    if (!t || t.length < 2) return null;
    const e = t.find((f) => f.position === 50);
    if (e) {
      const f = R(e.color);
      return f ? f.a === 1 ? `rgb(${f.r}, ${f.g}, ${f.b})` : `rgba(${f.r}, ${f.g}, ${f.b}, ${f.a})` : null;
    }
    let o = null, r = null;
    for (let f = 0; f < t.length; f++) if (t[f].position <= 50 && (o = t[f]), t[f].position > 50 && !r) {
      r = t[f];
      break;
    }
    if (!r && o) {
      const f = R(o.color);
      return f ? f.a === 1 ? `rgb(${f.r}, ${f.g}, ${f.b})` : `rgba(${f.r}, ${f.g}, ${f.b}, ${f.a})` : null;
    }
    if (!o && r) {
      const f = R(r.color);
      return f ? f.a === 1 ? `rgb(${f.r}, ${f.g}, ${f.b})` : `rgba(${f.r}, ${f.g}, ${f.b}, ${f.a})` : null;
    }
    if (!o || !r) return null;
    const s = R(o.color), i = R(r.color);
    if (!s || !i) return null;
    const a = r.position - o.position;
    if (a === 0) {
      const f = i;
      return f.a === 1 ? `rgb(${f.r}, ${f.g}, ${f.b})` : `rgba(${f.r}, ${f.g}, ${f.b}, ${f.a})`;
    }
    const u = (50 - o.position) / a, d = Math.round(s.r + (i.r - s.r) * u), n = Math.round(s.g + (i.g - s.g) * u), p = Math.round(s.b + (i.b - s.b) * u), v = Math.round((s.a + (i.a - s.a) * u) * 1e3) / 1e3;
    return v === 1 ? `rgb(${d}, ${n}, ${p})` : `rgba(${d}, ${n}, ${p}, ${v})`;
  }
  ae = function(t) {
    if (t == null || typeof t != "string") return null;
    const e = t.trim();
    if (e === "") return null;
    if (!F.GRADIENT_PREFIX.test(e)) return R(e) ? e : null;
    try {
      const r = qe(e);
      return r ? Ue(r) : null;
    } catch {
      return null;
    }
  };
  function Je(t, e, o) {
    if (t.fallbackFields && Array.isArray(t.fallbackFields) && t.fallbackFields.length > 0) for (const r of t.fallbackFields) {
      const s = e[r];
      if (s && typeof s == "string") {
        const i = te(s);
        if (i.isValid && i.normalizedValue.trim() !== "") return i.normalizedValue;
      }
    }
    return !t.fallbackFields || t.fallbackFields.length > 0 ? o : null;
  }
  function Ke({ field: t, data: e, onDataChange: o, props: r }) {
    const s = t.name, i = e[s], [a, u] = m.useState(i || ""), [d, n] = m.useState(false), [p, v] = m.useState(null), f = m.useRef(false), l = m.useRef(i), c = m.useRef(null), g = pe(r.context.socket, r.context.theme), $ = g.palette.primary.main, { anchorOrigin: y, transformOrigin: B, maxHeight: V, setContentRef: M, popoverActionRef: H } = je(p, !!p);
    m.useEffect(() => () => {
      c.current !== null && clearTimeout(c.current);
    }, []);
    const A = m.useCallback((S, P = false) => {
      if (c.current !== null && (clearTimeout(c.current), c.current = null), S == null) {
        u(""), n(false), l.current = null, o({
          [s]: null
        }), f.current = false;
        return;
      }
      if (typeof S != "string") {
        n(true);
        return;
      }
      if (S.trim() === "") {
        u(""), n(false), l.current = null, o({
          [s]: null
        }), f.current = false;
        return;
      }
      const w = te(S);
      if (u(S), !w.isValid) {
        n(true);
        return;
      }
      n(false);
      let C;
      if (t.noGradient === true) {
        const j = ae(w.normalizedValue);
        if (j === null) {
          n(true);
          return;
        }
        C = j;
      } else C = w.normalizedValue || null;
      l.current = C, P ? c.current = setTimeout(() => {
        c.current = null, o({
          [s]: C
        });
      }, 150) : o({
        [s]: C
      });
    }, [
      s,
      t.noGradient,
      o
    ]), _ = m.useCallback((S) => A(S, true), [
      A
    ]), k = m.useCallback((S) => A(S.target.value), [
      A
    ]), O = m.useCallback(() => A(null), [
      A
    ]), I = !!p;
    return m.useEffect(() => {
      if (i !== l.current) {
        l.current = i;
        const S = i || "";
        u(S), n(false), (!S || S.trim() === "") && (f.current = false);
      }
    }, [
      i
    ]), m.useEffect(() => {
      if (!I || f.current) return;
      if (i && i.trim() !== "") {
        f.current = true;
        return;
      }
      const S = Je(t, e, $);
      if (S) {
        const P = te(S);
        if (P.isValid) if (t.noGradient === true) {
          const E = ae(P.normalizedValue);
          E !== null && (u(S), n(false), l.current = E, o({
            [s]: E
          }));
        } else u(S), n(false), o({
          [s]: S
        });
      }
      f.current = true;
    }, [
      I,
      e,
      s,
      t,
      i,
      $,
      o
    ]), b.jsx(b.Fragment, {
      children: b.jsxs(ge, {
        theme: g,
        children: [
          b.jsxs(T, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              b.jsx(Ie, {
                variant: "standard",
                fullWidth: true,
                value: a,
                error: d,
                helperText: d ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "",
                onChange: k,
                slotProps: {
                  htmlInput: {
                    style: {
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      paddingBottom: "2px",
                      fontSize: "80%"
                    }
                  }
                }
              }),
              a && b.jsx(we, {
                onClick: O,
                title: Z.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: b.jsx(Ge, {})
              }),
              b.jsx(T, {
                onClick: (S) => v(S.currentTarget),
                title: Z.t("choose_color"),
                sx: {
                  mt: a ? "4px" : "-2px",
                  px: "4px",
                  py: a ? "4px" : "3px",
                  backgroundColor: a ? g.name === "light" ? g.palette.common.white : "#121212" : "transparent",
                  borderRadius: "1px",
                  display: "inline-block",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                  border: d ? `1px solid ${g.palette.error.main}` : a ? `1px solid ${g.name === "light" ? g.palette.grey[400] : g.palette.common.black}` : `1px dashed ${g.name === "light" ? g.palette.grey[400] : g.palette.text.secondary}`,
                  opacity: d ? 0.6 : 1
                },
                children: b.jsx(T, {
                  sx: {
                    width: a ? "36px" : "38px",
                    height: a ? "14px" : "18px",
                    borderRadius: "2px",
                    background: d ? "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)" : a || "transparent"
                  }
                })
              })
            ]
          }),
          b.jsx(Te, {
            action: H,
            slotProps: {
              paper: {
                elevation: 0,
                sx: {
                  p: "9px",
                  borderRadius: "6px",
                  backgroundColor: "rgb(32,32,32)",
                  boxSizing: "border-box",
                  maxHeight: V,
                  overflowX: "hidden",
                  overflowY: "auto"
                }
              }
            },
            open: I,
            anchorEl: p,
            onClose: () => v(null),
            transformOrigin: B,
            anchorOrigin: y,
            children: b.jsx(T, {
              ref: M,
              sx: {
                borderRadius: "6px"
              },
              children: b.jsx(Be, {
                value: a || g.palette.primary.main,
                onChange: _,
                hidePresets: true,
                hideInputs: true,
                hideEyeDrop: true,
                hideInputType: true
              })
            })
          })
        ]
      })
    });
  }
  X = function(t) {
    const { name: e, label: o, default: r = "", fallbackFields: s, noGradient: i, hidden: a } = t, u = {
      name: e,
      label: o,
      default: r,
      type: "custom",
      component: (d, n, p, v) => b.jsx(Ke, {
        field: d,
        data: n,
        onDataChange: p,
        props: v
      })
    };
    return s !== void 0 && (u.fallbackFields = s), i !== void 0 && (u.noGradient = i), a !== void 0 && (u.hidden = a), u;
  };
  vt = function(t, e, o) {
    return X({
      name: t,
      label: e,
      fallbackFields: [
        "sliderColor"
      ],
      ...o
    });
  };
  let le, Qe, Q, Ze, tt, nt;
  le = (t) => {
    if (!t || typeof t != "string") return false;
    const e = t.trim();
    return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
  };
  ht = (t) => {
    const { groupName: e = "", allFields: o = true } = t || {}, r = [
      {
        label: "",
        type: "custom",
        component: () => b.jsx(z, {
          dividerText: "icon"
        }),
        hidden: "data.noIcon"
      },
      {
        name: `icon${e}`,
        label: "icon",
        type: "image",
        default: ""
      },
      {
        name: `iconSmall${e}`,
        label: "small_icon",
        type: "icon64",
        default: ""
      },
      {
        name: `iconSize${e}`,
        label: "icon_size",
        type: "slider",
        min: 1,
        max: 500,
        step: 1,
        hidden: "data.noIcon"
      },
      {
        name: `enableIconColorMask${e}`,
        label: "enable_icon_color_mask",
        type: "checkbox",
        default: false,
        tooltip: "enable_icon_color_mask_tooltip",
        hidden: (i, a) => {
          let u = true;
          const d = a !== void 0 ? a : e, n = i[`icon${d}`], p = i[`iconSmall${d}`];
          return (d === "" || d === "Active") && (u = false), a !== void 0 && (u = !i.iconColor && !i.enableIconColorMask && !i[`iconColor${a}`] && !le(n) && !le(p)), u;
        }
      },
      X({
        name: `iconColor${e}`,
        label: "icon_color",
        fallbackFields: [
          ""
        ],
        noGradient: true
      }),
      {
        name: `iconXOffset${e}`,
        label: "icon_x_offset",
        type: "text",
        hidden: "data.noIcon"
      },
      {
        name: `iconYOffset${e}`,
        label: "icon_y_offset",
        type: "text",
        hidden: "data.noIcon"
      },
      {
        label: "",
        type: "custom",
        component: () => b.jsx(z, {
          dividerText: "header"
        }),
        hidden: (i, a) => i.noHeader && !o
      },
      {
        name: `noHeader${e}`,
        type: "checkbox",
        label: "no_header",
        default: false
      },
      {
        name: `noHeaderIcon${e}`,
        type: "checkbox",
        label: "no_header_icon",
        default: false,
        hidden: "data.noHeader"
      },
      {
        name: `header${e}`,
        label: "header_text",
        type: "html",
        default: "",
        hidden: "data.noHeader"
      },
      {
        name: `headerSize${e}`,
        label: "header_size",
        type: "slider",
        min: 0,
        max: 500,
        step: 1,
        hidden: "data.noHeader"
      },
      {
        label: "",
        type: "custom",
        component: () => b.jsx(z, {
          dividerText: "value"
        })
      },
      {
        name: `alias${e}`,
        label: "alias",
        type: "html",
        default: ""
      },
      {
        name: `value${e}`,
        label: "value",
        type: "text",
        default: "",
        hidden: (i, a) => {
          var _a;
          return ((_a = i.oidObject) == null ? void 0 : _a.type) === "boolean" || i.name === "valueActive";
        }
      },
      {
        name: `valueSize${e}`,
        label: "value_size",
        type: "slider",
        min: 0,
        max: 500,
        step: 1
      },
      {
        label: "",
        type: "custom",
        component: () => b.jsx(z, {
          dividerText: "footer"
        }),
        hidden: (i, a) => i.noFooter && !o
      },
      {
        name: `noFooter${e}`,
        label: "no_footer",
        type: "checkbox",
        default: false
      },
      {
        name: `footer${e}`,
        label: "footer_text",
        type: "html",
        default: "",
        hidden: "data.noFooter"
      },
      {
        name: `footerSize${e}`,
        label: "footer_size",
        type: "slider",
        min: 0,
        max: 500,
        step: 1,
        hidden: "data.noFooter"
      },
      {
        label: "",
        type: "custom",
        component: () => b.jsx(z, {
          dividerText: "characteristics"
        })
      },
      {
        name: `noCard${e}`,
        label: "without_card",
        type: "checkbox",
        default: false
      },
      {
        name: `squaredCorner${e}`,
        label: "squared_corner",
        type: "checkbox",
        default: false
      },
      X({
        name: `textColor${e}`,
        label: "text_color",
        fallbackFields: [
          ""
        ]
      }),
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => b.jsx(z, {})
      },
      {
        name: `outlined${e}`,
        label: "outlined",
        type: "checkbox",
        default: false
      },
      {
        name: `outlinedFrame${e}`,
        label: "outlined_frame",
        type: "checkbox",
        default: false
      },
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => b.jsx(z, {})
      },
      {
        name: `basePadding${e}`,
        label: "base_padding",
        type: "slider",
        min: 0,
        max: 10,
        step: 0.1,
        default: 1
      },
      {
        name: `baseElevation${e}`,
        label: "base_elevation",
        type: "slider",
        min: 0,
        max: 24,
        step: 1,
        default: 4
      },
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => b.jsx(z, {
          dividerText: "geometry"
        })
      },
      {
        name: `square${e}`,
        label: "square",
        type: "checkbox",
        hidden: "data.circle || data.ellipse",
        default: false
      },
      {
        name: `ellipse${e}`,
        label: "ellipse",
        type: "checkbox",
        hidden: "data.circle || data.square",
        default: false
      },
      {
        name: `circle${e}`,
        label: "circle",
        type: "checkbox",
        hidden: "data.ellipse || data.square"
      },
      {
        label: "",
        type: "custom",
        component: () => b.jsx(z, {
          dividerText: "background"
        })
      },
      X({
        name: `background${e}`,
        label: "background",
        fallbackFields: []
      }),
      {
        label: "",
        type: "custom",
        component: () => b.jsx(z, {
          dividerText: "frame_background"
        })
      },
      X({
        name: `frameBackground${e}`,
        label: "frame_background",
        fallbackFields: []
      })
    ];
    if (o) {
      const i = [
        `alias${e}`,
        `value${e}`
      ];
      return r.filter((a) => !i.includes(a.name));
    }
    const s = [
      "allFieldsDivider",
      `noHeader${e}`,
      `noHeaderIcon${e}`,
      e === "Active" ? `value${e}` : "",
      `noFooter${e}`,
      `noCard${e}`,
      `squaredCorner${e}`,
      `outlined${e}`,
      `outlinedFrame${e}`,
      `basePadding${e}`,
      `baseElevation${e}`,
      `square${e}`,
      `ellipse${e}`,
      `circle${e}`
    ];
    return r.filter((i) => !s.includes(i.name));
  };
  Qe = async (t, e) => {
    var _a;
    const o = e._id.split(".");
    for (let r = o.length; r > 0; r--) try {
      const s = await t.getObject(o.slice(0, r).join("."));
      if ((_a = s == null ? void 0 : s.common) == null ? void 0 : _a.icon) return s.common.icon;
    } catch {
      continue;
    }
    return null;
  };
  Q = (t, e = "oid") => {
    var _a;
    Object.keys(t).forEach((r) => {
      r.startsWith(e) && r.endsWith("Object") && delete t[r];
    });
    const o = [
      "iconSmall",
      "icon",
      "iconSize",
      "iconColor",
      "iconHover",
      "iconXOffset",
      "iconYOffset",
      "noHeader",
      "header",
      "headerSize",
      "alias",
      "value",
      "valueSize",
      "noFooter",
      "footer",
      "footerSize",
      "noCard",
      "squaredCorner",
      "textColor",
      "outlined",
      "outlinedFrame",
      "basePadding",
      "baseElevation",
      "square",
      "ellipse",
      "circle",
      "background",
      "backgroundColor",
      "frameBackground",
      "frameBackgroundColor"
    ];
    if (e === "oid") {
      delete t.icon, delete t.write;
      const r = typeof t.values_count == "number" ? t.values_count : 0, s = Object.keys(((_a = t.oidObject) == null ? void 0 : _a.commonStates) || {}).length, i = Math.max(r, s);
      for (let a = 1; a <= i; a++) o.forEach((u) => {
        delete t[`${u}${a}`];
      });
      t.values_count = 0;
    }
  };
  Ze = (t, e) => {
    switch (e) {
      case "boolean":
        return t === "true";
      case "number":
        return Number(t);
      case "string":
        return String(t);
      case "mixed":
        return t === "true" ? true : t === "false" ? false : !isNaN(Number(t)) && t !== "" ? Number(t) : String(t);
      default:
        return String(t);
    }
  };
  et = (t, e = "oid") => async (o, r, s, i) => {
    if (!r[e]) {
      Q(r, e), setTimeout(() => s(r), 100);
      return;
    }
    try {
      const a = await i.getObject(r[e]);
      if (!a) {
        Q(r, e), setTimeout(() => s(r), 100);
        return;
      }
      const u = a.common.type;
      if (!t.includes(u)) return;
      const d = {
        _id: a._id,
        name: a.common.name || "",
        type: u,
        icon: await Qe(i, a),
        write: a.common.write,
        onlyDisplay: !a.common.write,
        unit: a.common.unit || "",
        minValue: a.common.min || 0,
        maxValue: a.common.max || 100
      };
      if (r[`${e}Object`] = d, r.icon = d.icon, r.write = d.write, r.onlyDisplay = d.onlyDisplay, r.minValue = d.minValue, r.maxValue = d.maxValue, a.common.states) {
        let n = a.common.states;
        if (Array.isArray(n)) {
          const p = {};
          n.forEach((v) => {
            p[v] = v;
          }), n = p;
        }
        r[`${e}Object`].commonStates = n, e === "oid" && (r.values_count = Object.keys(n).length, Object.entries(n).forEach(([p, v], f) => {
          const l = f + 1;
          r[`value${l}`] = Ze(p, u), r[`alias${l}`] = String(v);
        }));
      } else u === "boolean" && e === "oid" ? (r[`${e}Object`].commonStates = {
        true: "TRUE",
        false: "FALSE"
      }, r.values_count = 2, r.value1 = true, r.alias1 = "TRUE", r.value2 = false, r.alias2 = "FALSE") : e === "oid" && (r.values_count = 0);
      e === "oid" && r.ignoreCommonStates !== false && (r.values_count = 0), setTimeout(() => s(r), 100);
    } catch (a) {
      console.error(`Error handling OID change for ${r[e]}:`, a), Q(r, e), setTimeout(() => s(r), 100);
    }
  };
  St = (t) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: et(t)
    },
    {
      label: "",
      type: "custom",
      component: () => b.jsx(z, {}),
      hidden: (e, o) => e.oidObject === void 0
    },
    {
      name: "unit",
      label: "unit",
      type: "text",
      default: "",
      hidden: (e, o) => e.oidObject === void 0,
      onChange: async (e, o, r, s) => {
        o.oidObject && (o.oidObject.unit = o.unit || "", setTimeout(() => r(o), 100));
      }
    },
    {
      label: "",
      type: "custom",
      component: () => b.jsx(z, {}),
      hidden: (e, o) => e.oidObject === void 0
    },
    {
      name: "ignoreCommonStates",
      type: "checkbox",
      default: true,
      label: "ignore_common_states",
      tooltip: "ignore_common_states_tooltip",
      hidden: (e, o) => e.oidObject === void 0,
      onChange: async (e, o, r, s) => {
        var _a, _b;
        if (o.ignoreCommonStates !== false) o.values_count = 0;
        else {
          const i = (_a = o.oidObject) == null ? void 0 : _a.commonStates;
          i ? o.values_count = Object.keys(i).length : ((_b = o.oidObject) == null ? void 0 : _b.type) === "boolean" ? o.values_count = 2 : o.values_count = 0;
        }
        setTimeout(() => r(o), 100);
      }
    },
    {
      name: "values_count",
      type: "number",
      default: 0,
      label: "values_count",
      hidden: (e, o) => {
        var _a;
        return ((_a = e.oidObject) == null ? void 0 : _a.type) === "boolean" || e.oidObject === void 0 || e.ignoreCommonStates !== false;
      }
    }
  ];
  tt = () => {
    const { isSignalVisible: t, refService: e, widget: o } = m.useContext(N), r = m.useMemo(() => {
      const i = [], a = Number(o.data["signals-count"]) || 0;
      for (let u = 0; u < a; u++) t(u) && i.push(u);
      return i;
    }, [
      o.data,
      t
    ]), s = m.useMemo(() => {
      const i = {};
      return r.forEach((a) => {
        i[a] = o.data[`signals-color-${a}`];
      }), i;
    }, [
      o.data,
      r
    ]);
    m.useEffect(() => {
      if (!(e == null ? void 0 : e.current)) return;
      const a = e.current.children, u = [];
      Array.from(a).forEach((d) => {
        const n = d.children[0];
        n && n instanceof HTMLElement && n.className === "vis-signal-icon iconOwn" && u.push(n);
      }), u.forEach((d, n) => {
        const p = r[n], v = p !== void 0 ? s[p] : void 0;
        v ? (d.style.color = v, d.style.filter = "drop-shadow(0px 10000px 0)", d.style.transform = "translateY(-10000px)") : (d.style.color = "", d.style.filter = "", d.style.transform = "");
      });
    }, [
      r,
      s,
      e
    ]);
  };
  ot = (t, e = 28) => {
    const [o, r] = m.useState({
      width: void 0,
      height: void 0,
      maxWidth: void 0
    }), s = m.useCallback((a) => {
      if (a.length === 0) return;
      const u = a[0], { width: d, height: n } = u.contentRect, p = Math.round(d), v = Math.round(n), f = p <= v + e + 12 ? p - e - 12 : v;
      r({
        width: p,
        height: v,
        maxWidth: f
      });
    }, [
      e
    ]), i = m.useMemo(() => t ? typeof t == "object" && "current" in t ? t.current : t : null, [
      t
    ]);
    return m.useEffect(() => {
      if (!i) {
        r({
          width: void 0,
          height: void 0,
          maxWidth: void 0
        });
        return;
      }
      const a = new ResizeObserver(s);
      try {
        a.observe(i);
      } catch (u) {
        console.warn("ResizeObserver failed to observe element:", u);
        return;
      }
      return () => {
        try {
          a.disconnect();
        } catch (u) {
          console.warn("ResizeObserver cleanup failed:", u);
        }
      };
    }, [
      i,
      s
    ]), o;
  };
  nt = (t) => {
    const { widget: e } = m.useContext(N), [o, r] = m.useState("100%"), [s, i] = m.useState("100%"), { width: a, height: u } = ot(t), d = m.useMemo(() => ({
      basePadding: e.data.basePadding || 0,
      isSquare: e.data.square || false,
      isCircle: e.data.circle || false
    }), [
      e.data.basePadding,
      e.data.square,
      e.data.circle
    ]), n = m.useMemo(() => d.basePadding * 16, [
      d.basePadding
    ]);
    return m.useEffect(() => {
      if (!a || !u || a < 0 || u < 0) return;
      if (!d.isSquare && !d.isCircle) {
        r("100%"), i("100%");
        return;
      }
      if (!(a >= n && u >= n)) {
        r("0px"), i("0px");
        return;
      }
      const v = a - n, f = u - n, l = Math.min(v, f);
      r(`${l}px`), i(`${l}px`);
    }, [
      a,
      u,
      n,
      d.isSquare,
      d.isCircle
    ]), {
      width: o,
      height: s
    };
  };
  D = function(t) {
    return t == null || typeof t != "string" || t.trim() === "" ? null : Xe(t) ? t : null;
  };
  rt = m.forwardRef(({ children: t, data: e, oidValue: o = null, isValidType: r = true, bgActive: s = true, sx: i = {} }, a) => {
    const u = m.useRef(null), d = m.useRef(null), [n, p] = m.useState(null), v = m.useRef(null), f = m.useRef(null), l = m.useContext(N);
    if (!l) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: c, widget: g } = l, { backgroundStyles: $, borderStyles: y } = oe(g.style), { width: B, height: V } = nt(n);
    tt();
    const M = g.data.oidObject, H = M == null ? void 0 : M._id, A = m.useMemo(() => {
      if (g.data.noFooter) return "";
      const O = o || o === 0 || String(o) === "false" ? `${o}${(M == null ? void 0 : M.unit) ?? ""}` : "";
      return e.footer || e.alias || e.value || O || "";
    }, [
      e.footer,
      e.alias,
      e.value,
      o,
      M == null ? void 0 : M.unit,
      g.data.noFooter
    ]), _ = m.useMemo(() => J({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      ...$,
      background: c ? e.frameBackground : e.frameBackground || "transparent",
      backgroundColor: c ? D(e.frameBackground) ? void 0 : e.frameBackground : D(e.frameBackground) ? "transparent" : e.frameBackground,
      borderColor: c ? "" : e.frameBackground || (y == null ? void 0 : y["border-color"])
    }), [
      $,
      y,
      e.frameBackground,
      c
    ]), k = m.useMemo(() => J({
      overflow: "hidden",
      width: B,
      height: V,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: s && c ? e.background : s ? e.background || "transparent" : c ? void 0 : "transparent",
      borderColor: c ? "" : e.background || (y == null ? void 0 : y["border-color"]),
      borderRadius: g.data.circle || g.data.ellipse ? "50%" : void 0,
      ...i
    }), [
      B,
      V,
      s,
      c,
      e.background,
      y,
      g.data.circle,
      g.data.ellipse,
      i
    ]);
    return m.useEffect(() => {
      g.data.noHeader || !v.current || (v.current.innerHTML = e.header);
    }, [
      e.header,
      g.data.noHeader
    ]), m.useEffect(() => {
      g.data.noFooter || !f.current || (f.current.innerHTML = String(A));
    }, [
      A,
      g.data.noFooter
    ]), m.useImperativeHandle(a, () => ({
      get paper0() {
        return (u == null ? void 0 : u.current) ?? null;
      },
      get paper1() {
        return (d == null ? void 0 : d.current) ?? null;
      },
      get header() {
        return (v == null ? void 0 : v.current) ?? null;
      }
    })), b.jsxs(ie, {
      ref: u,
      className: "BASE-PAPER-0",
      square: g.data.squaredCorner,
      variant: g.data.outlinedFrame ? "outlined" : "elevation",
      sx: _,
      children: [
        !!r && b.jsxs(b.Fragment, {
          children: [
            b.jsx(T, {
              sx: {
                width: g.data.noHeader ? "0%" : "100%",
                height: g.data.noHeader ? "0%" : "auto",
                mt: (g.data.basePadding ?? 8) / 2,
                mb: -(g.data.basePadding ?? 8) / 2
              },
              children: b.jsx(L, {
                ref: v,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.headerSize,
                  background: D(e.textColorCm),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: D(e.textColorCm) ? "transparent" : e.textColorCm
                }
              })
            }),
            b.jsx(T, {
              className: "BASE-BOX-1",
              ref: p,
              sx: {
                overflow: "hidden",
                p: g.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: b.jsx(ie, {
                ref: d,
                className: "BASE-PAPER-1",
                elevation: g.data.outlined ? 0 : Number(g.data.baseElevation) || 0,
                square: !g.data.basePadding || g.data.squaredCorner,
                variant: g.data.outlined ? "outlined" : "elevation",
                sx: k,
                children: t
              })
            }),
            b.jsx(T, {
              sx: {
                width: g.data.noFooter ? "0%" : "100%",
                height: g.data.noFooter ? "0%" : "auto",
                mt: -(g.data.basePadding ?? 8) / 2,
                mb: (g.data.basePadding ?? 8) / 2
              },
              children: b.jsx(L, {
                ref: f,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.footerSize,
                  background: D(e.textColorCm),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: D(e.textColorCm) ? "transparent" : e.textColorCm
                }
              })
            })
          ]
        }),
        !r && b.jsx(T, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: b.jsx(L, {
            variant: "body2",
            sx: {
              p: 1,
              width: "100%",
              textAlign: "center"
            },
            children: H ? `${H} has an invalid type!` : "Please select a valid object ID"
          })
        })
      ]
    });
  });
  rt.displayName = "CollectionBase";
  let ce;
  it = (t) => !t || typeof t != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(t);
  at = (t, e, o) => !o && !it(t) ? {} : !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  };
  ce = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  lt = ({ src: t, style: e = {}, alt: o = "" }) => {
    const r = t && t !== "undefined" && t !== null ? t : ce;
    return b.jsx("img", {
      src: r,
      alt: o,
      style: e,
      onError: (s) => {
        console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
        const i = s.currentTarget;
        i.onerror = null, i.src = ce;
      }
    });
  };
  xt = ({ data: t, widget: e }) => {
    const r = m.useContext(N).theme, s = t.icon, i = t.iconColor || r.palette.primary.main;
    return !e.data.noHeaderIcon && s ? b.jsx(lt, {
      alt: "",
      src: s,
      style: {
        position: "absolute",
        top: `calc(0px - ${t.iconYOffsetCm})`,
        right: `calc(0px - ${t.iconXOffsetCm})`,
        height: t.iconSizeCm,
        ...at(s, i, !!t.forceColorMaskCm)
      }
    }) : null;
  };
  function ct(t, e) {
    return t[e];
  }
  function se(t) {
    return typeof t == "object" && t !== null && "sliderOrientation" in t;
  }
  st = (t) => typeof t == "number" ? `calc(${t / 100}rem * 0.875)` : void 0;
  function ut(t) {
    return {
      markerIconSize: t.markerIconSize,
      markerTextColor: t.markerTextColor,
      markerTextSize: t.markerTextSize,
      markerIconColor: t.markerIconColor
    };
  }
  function dt(t) {
    return {};
  }
  function h(t) {
    for (const e of t) if (e.condition !== false && e.value !== void 0 && e.value !== null && !(typeof e.value == "string" && e.value.trim() === "")) return e.value;
  }
  function ft(t) {
    const { rxData: e, oidObject: o, oidName: r, theme: s, fontStyles: i, textStyles: a, backgroundStyles: u, formatSize: d, getDataValue: n, widgetResolver: p, isSlider: v } = t, f = (l) => l && String(l) !== "" ? String(l) : void 0;
    return {
      icon: (l, c) => h([
        {
          condition: !!e.noIcon,
          value: ""
        },
        {
          condition: c,
          value: n("icon", "Active")
        },
        {
          condition: c,
          value: n("iconSmall", "Active")
        },
        {
          value: n("icon", String(l))
        },
        {
          value: n("iconSmall", String(l))
        },
        {
          value: n("icon", "")
        },
        {
          value: n("iconSmall", "")
        }
      ]) ?? "",
      iconActive: (l, c) => c ? h([
        {
          condition: !!e.noIcon,
          value: ""
        },
        {
          value: n("icon", String(l))
        },
        {
          value: n("iconSmall", String(l))
        }
      ]) ?? "" : "",
      iconSizeCm: (l, c) => h([
        {
          condition: n("iconSize", "") === 0,
          value: "0px"
        },
        {
          condition: !!n("iconSize", ""),
          value: `calc(24px * ${n("iconSize", "")} / 100)`
        }
      ]) ?? "24px",
      iconSize: (l, c) => h([
        {
          condition: c && n("iconSize", "Active") === 0,
          value: "0px"
        },
        {
          condition: c && !!n("iconSize", "Active"),
          value: `calc(24px * ${n("iconSize", "Active")} / 100)`
        },
        {
          condition: n("iconSize", String(l)) === 0,
          value: "0px"
        },
        {
          condition: !!n("iconSize", String(l)),
          value: `calc(24px * ${n("iconSize", String(l))} / 100)`
        }
      ]) ?? "24px",
      iconSizeActive: (l, c) => c ? h([
        {
          condition: n("iconSize", String(l)) === 0,
          value: "0px"
        },
        {
          condition: !!n("iconSize", String(l)),
          value: `calc(24px * ${n("iconSize", String(l))} / 100)`
        }
      ]) ?? "24px" : "24px",
      iconSizeOnly: (l, c) => h([
        {
          condition: c && (!!n("iconSize", "Active") || n("iconSize", "Active") === 0),
          value: `${n("iconSize", "Active")}%`
        },
        {
          condition: !!n("iconSize", String(l)) || n("iconSize", String(l)) === 0,
          value: `${n("iconSize", String(l))}%`
        }
      ]) ?? "100%",
      iconSizeActiveOnly: (l, c) => c ? h([
        {
          value: n("iconSize", String(l))
        }
      ]) ?? void 0 : void 0,
      iconWidth: (l, c) => h([
        {
          condition: c,
          value: e.iconSizeActive
        },
        {
          value: n("iconSize", String(l))
        },
        {
          condition: v,
          value: p.markerIconSize
        },
        {
          value: e.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconHeight: (l, c) => h([
        {
          condition: c,
          value: e.iconSizeActive
        },
        {
          value: n("iconSize", String(l))
        },
        {
          condition: v,
          value: p.markerIconSize
        },
        {
          value: e.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      forceColorMaskCm: (l, c) => h([
        {
          value: n("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMask: (l, c) => h([
        {
          condition: c,
          value: n("enableIconColorMask", "Active")
        },
        {
          value: n("enableIconColorMask", String(l))
        },
        {
          condition: !!n("enableIconColorMask", String(l)),
          value: n("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMaskActive: (l, c) => c ? h([
        {
          value: n("enableIconColorMask", String(l))
        }
      ]) ?? false : false,
      iconColor: (l, c) => h([
        {
          condition: c,
          value: n("iconColor", "Active")
        },
        {
          value: n("iconColor", String(l))
        },
        {
          value: n("iconColor", "")
        }
      ]) ?? s.palette.primary.main,
      iconColorActive: (l, c) => c ? h([
        {
          value: n("iconColor", String(l))
        }
      ]) ?? "" : "",
      iconHover: (l, c) => h([
        {
          value: e.iconHover ? `${e.iconHover}%` : void 0
        }
      ]) ?? "",
      iconHoverActive: (l, c) => c ? h([
        {
          value: n("iconHover", String(l)) ? `${n("iconHover", String(l))}%` : void 0
        }
      ]) ?? void 0 : void 0,
      iconXOffsetCm: (l, c) => h([
        {
          value: n("iconXOffset", "")
        }
      ]) ?? "0px",
      iconYOffsetCm: (l, c) => h([
        {
          value: n("iconYOffset", "")
        }
      ]) ?? "0px",
      iconXOffset: (l, c) => h([
        {
          condition: c,
          value: n("iconXOffset", "Active")
        },
        {
          value: n("iconXOffset", String(l))
        }
      ]) ?? "0px",
      iconYOffset: (l, c) => h([
        {
          condition: c,
          value: n("iconYOffset", "Active")
        },
        {
          value: n("iconYOffset", String(l))
        }
      ]) ?? "0px",
      iconXOffsetActive: (l, c) => c ? h([
        {
          condition: !n("iconXOffset", String(l)),
          value: "0px"
        },
        {
          value: n("iconXOffset", String(l))
        }
      ]) ?? "0px" : "0px",
      iconYOffsetActive: (l, c) => c ? h([
        {
          condition: !n("iconYOffset", String(l)),
          value: "0px"
        },
        {
          value: n("iconYOffset", String(l))
        }
      ]) ?? "0px" : "0px",
      textColorActive: (l, c) => c ? h([
        {
          value: n("textColor", String(l)),
          condition: n("textColor", String(l)) !== ""
        },
        {
          condition: v,
          value: p.markerTextColor && p.markerTextColor !== "" ? p.markerTextColor : void 0
        },
        {
          value: e.textColor && e.textColor !== "" ? e.textColor : void 0
        }
      ]) ?? void 0 : void 0,
      textColorCm: (l, c) => h([
        {
          condition: typeof n("textColor", "") == "string",
          value: n("textColor", "")
        },
        {
          condition: typeof (a == null ? void 0 : a.color) == "string",
          value: a == null ? void 0 : a.color
        }
      ]) ?? "",
      textColor: (l, c) => h([
        {
          condition: c && typeof n("textColor", "Active") == "string",
          value: n("textColor", "Active")
        },
        {
          condition: typeof n("textColor", String(l)) == "string",
          value: n("textColor", String(l))
        },
        {
          condition: v,
          value: p.markerTextColor && p.markerTextColor !== "" ? p.markerTextColor : void 0
        },
        {
          condition: typeof n("textColor", "") == "string",
          value: n("textColor", "")
        },
        {
          condition: typeof (a == null ? void 0 : a.color) == "string",
          value: a == null ? void 0 : a.color
        }
      ]) ?? "",
      fontSize: (l, c) => h([
        {
          condition: c && typeof e.valueSizeActive == "number",
          value: d(e.valueSizeActive)
        },
        {
          value: typeof n("valueSize", String(l)) == "number" ? d(n("valueSize", String(l))) : void 0
        },
        {
          condition: v && typeof p.markerTextSize == "number",
          value: d(p.markerTextSize)
        },
        {
          value: typeof e.valueSize == "number" ? d(e.valueSize) : void 0
        },
        {
          condition: typeof (i == null ? void 0 : i["font-size"]) == "string",
          value: i == null ? void 0 : i["font-size"]
        }
      ]) ?? null,
      headerSize: (l, c) => h([
        {
          condition: c && typeof n("headerSize", "Active") == "number",
          value: `${d(n("headerSize", "Active"))}`
        },
        {
          condition: typeof n("headerSize", String(l)) == "number",
          value: `${d(n("headerSize", String(l)))}`
        },
        {
          condition: typeof n("headerSize", "") == "number",
          value: `${d(n("headerSize", ""))}`
        },
        {
          condition: typeof (i == null ? void 0 : i["font-size"]) == "string",
          value: i == null ? void 0 : i["font-size"]
        }
      ]) ?? "0.875rem",
      footerSize: (l, c) => h([
        {
          condition: c && typeof n("footerSize", "Active") == "number",
          value: `${d(n("footerSize", "Active"))}`
        },
        {
          condition: typeof n("footerSize", String(l)) == "number",
          value: `${d(n("footerSize", String(l)))}`
        },
        {
          condition: typeof n("footerSize", "") == "number",
          value: `${d(n("footerSize", ""))}`
        },
        {
          condition: typeof (i == null ? void 0 : i["font-size"]) == "string",
          value: i == null ? void 0 : i["font-size"]
        }
      ]) ?? "0.875rem",
      valueSize: (l, c) => h([
        {
          condition: c && typeof n("valueSize", "Active") == "number",
          value: `${d(n("valueSize", "Active"))}`
        },
        {
          condition: typeof n("valueSize", String(l)) == "number",
          value: `${d(n("valueSize", String(l)))}`
        },
        {
          condition: typeof n("valueSize", "") == "number",
          value: `${d(n("valueSize", ""))}`
        },
        {
          condition: typeof (i == null ? void 0 : i["font-size"]) == "string",
          value: i == null ? void 0 : i["font-size"]
        }
      ]) ?? "0.875rem",
      valueSizeActive: (l, c) => c ? h([
        {
          value: typeof n("valueSize", String(l)) == "number" ? d(n("valueSize", String(l))) : null
        }
      ]) ?? null : null,
      header: (l, c) => String(h([
        {
          condition: c,
          value: f(n("header", "Active"))
        },
        {
          value: f(n("header", String(l)))
        },
        {
          value: f(n("header", ""))
        },
        {
          value: f(r)
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      footer: (l, c) => String(h([
        {
          condition: c,
          value: f(n("footer", "Active"))
        },
        {
          value: f(n("footer", String(l)))
        },
        {
          value: f(n("footer", ""))
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      alias: (l, c) => String(n("alias", String(l)) || "").replace(/(\r\n|\n|\r)/gm, ""),
      value: (l, c) => {
        const g = n("value", String(l));
        return g != null ? `${g}${(o == null ? void 0 : o.unit) !== void 0 ? o.unit : ""}` : void 0;
      },
      backgroundColor: (l, c) => h([
        {
          value: e.backgroundColor && e.backgroundColor !== "" ? e.backgroundColor : void 0
        },
        {
          value: u == null ? void 0 : u["background-color"]
        },
        {
          value: ""
        }
      ]) ?? "",
      backgroundColorActive: (l, c) => c ? n("backgroundColor", String(l)) : void 0,
      background: (l, c) => h([
        {
          condition: c,
          value: n("background", "Active")
        },
        {
          value: n("background", String(l))
        },
        {
          value: n("background", "")
        }
      ]) ?? "",
      backgroundActive: (l, c) => c ? n("background", String(l)) : void 0,
      frameBackgroundColor: (l, c) => h([
        {
          value: e.frameBackgroundColor && e.frameBackgroundColor !== "" ? e.frameBackgroundColor : void 0
        },
        {
          value: u == null ? void 0 : u["background-color"]
        },
        {
          value: ""
        }
      ]) ?? "",
      frameBackgroundColorActive: (l, c) => c ? n("frameBackgroundColor", String(l)) : void 0,
      frameBackground: (l, c) => h([
        {
          condition: c,
          value: n("frameBackground", "Active")
        },
        {
          value: n("frameBackground", String(l))
        },
        {
          value: n("frameBackground", "")
        }
      ]) ?? "",
      frameBackgroundActive: (l, c) => c ? n("frameBackground", String(l)) : void 0,
      markerIconSize: (l, c) => v ? p.markerIconSize : void 0,
      markerTextColor: (l, c) => v ? p.markerTextColor : void 0,
      markerTextSize: (l, c) => v ? p.markerTextSize : void 0,
      markerIconColor: (l, c) => v ? p.markerIconColor : void 0
    };
  }
  function mt(t = "", e = false, o) {
    return {
      icon: o.icon(t, e),
      iconActive: o.iconActive(t, e),
      iconSizeCm: o.iconSizeCm(t, e),
      iconSize: o.iconSize(t, e),
      iconSizeActive: o.iconSizeActive(t, e),
      iconSizeOnly: o.iconSizeOnly(t, e),
      iconWidth: o.iconWidth(t, e),
      iconHeight: o.iconHeight(t, e),
      iconSizeActiveOnly: o.iconSizeActiveOnly(t, e),
      forceColorMaskCm: o.forceColorMaskCm(t, e),
      forceColorMask: o.forceColorMask(t, e),
      forceColorMaskActive: o.forceColorMaskActive(t, e),
      iconColor: o.iconColor(t, e),
      iconColorActive: o.iconColorActive(t, e),
      iconHover: o.iconHover(t, e),
      iconHoverActive: o.iconHoverActive(t, e),
      iconXOffsetCm: o.iconXOffsetCm(t, e),
      iconYOffsetCm: o.iconYOffsetCm(t, e),
      iconXOffset: o.iconXOffset(t, e),
      iconYOffset: o.iconYOffset(t, e),
      iconXOffsetActive: o.iconXOffsetActive(t, e),
      iconYOffsetActive: o.iconYOffsetActive(t, e),
      textColorActive: o.textColorActive(t, e),
      textColorCm: o.textColorCm(t, e),
      textColor: o.textColor(t, e),
      header: o.header(t, e),
      headerSize: o.headerSize(t, e),
      footer: o.footer(t, e),
      footerSize: o.footerSize(t, e),
      alias: o.alias(t, e),
      value: o.value(t, e),
      valueSize: o.valueSize(t, e),
      valueSizeActive: o.valueSizeActive(t, e),
      backgroundColor: o.backgroundColor(t, e),
      backgroundColorActive: o.backgroundColorActive(t, e),
      background: o.background(t, e),
      backgroundActive: o.backgroundActive(t, e),
      frameBackgroundColor: o.frameBackgroundColor(t, e),
      frameBackgroundColorActive: o.frameBackgroundColorActive(t, e),
      frameBackground: o.frameBackground(t, e),
      frameBackgroundActive: o.frameBackgroundActive(t, e)
    };
  }
  Ct = function(t) {
    const { theme: e, widget: o, widget: { data: r }, getPropertyValue: s } = m.useContext(N), i = r[`${t}Object`], a = s(t), u = i == null ? void 0 : i.name, { fontStyles: d, textStyles: n, backgroundStyles: p } = oe(o.style), [v, f] = m.useState(), l = m.useCallback(st, []), c = m.useCallback((_, k = "") => {
      const O = `${_}${k}`;
      return ct(r, O);
    }, [
      r
    ]), g = m.useMemo(() => se(r) ? ut(r) : dt(), [
      r
    ]), $ = m.useMemo(() => ft({
      rxData: r,
      oidObject: i,
      oidName: u,
      theme: e,
      fontStyles: d,
      textStyles: n,
      backgroundStyles: p,
      formatSize: l,
      getDataValue: c,
      widgetResolver: g,
      isSlider: se(r)
    }), [
      r,
      i,
      u,
      e,
      d,
      n,
      p,
      l,
      c,
      g
    ]), y = m.useCallback((_ = "", k = false) => mt(_, k, $), [
      $
    ]), { states: B, widgetStates: V, minValue: M, maxValue: H } = m.useMemo(() => {
      const _ = {};
      let k = null, O = null;
      const I = [], S = i == null ? void 0 : i.type, P = (i == null ? void 0 : i.commonStates) || {}, E = Object.entries(P);
      if (S === "number" || S === "string" || S === "boolean" || S === "mixed") {
        const w = r.ignoreCommonStates === false ? r.values_count : E.length > 0 ? E.length : r.values_count;
        for (let C = 1; C <= w; C++) {
          const j = c("value", String(C)), K = r[`alias${C}`], he = i == null ? void 0 : i.unit;
          if (j === void 0 || !/\S/.test(String(j))) continue;
          const G = E.find(([Ce]) => Ce === String(j)), ne = G ? S === "number" ? Number(G[0]) : String(G[0]) : S === "number" ? Number(j) : j, Se = String(a) === String(ne), x = y(C, Se);
          I.push({
            value: ne,
            label: x.alias || String(x.value),
            alias: x.alias,
            fontSize: x.valueSize,
            textColor: x.textColor,
            icon: x.icon,
            iconSize: x.iconSize,
            iconSizeOnly: x.iconSizeOnly,
            iconWidth: x.iconWidth,
            iconHeight: x.iconHeight,
            iconXOffset: x.iconXOffset,
            iconYOffset: x.iconYOffset,
            iconColor: x.iconColor,
            iconHover: x.iconHover,
            forceColorMask: x.forceColorMask,
            valueSize: x.valueSize,
            background: x.background,
            frameBackground: x.frameBackground
          });
          const xe = String(G ? G[0] : j);
          _[xe] = K && String(K).trim() !== "" ? K : `${j}${he}`;
        }
      }
      if (S === "number" && I.length) {
        const w = I.map((C) => typeof C.value == "number" ? C.value : NaN).filter((C) => !isNaN(C));
        w.length > 0 && (k = Math.min(...w), O = Math.max(...w));
      }
      return {
        states: I,
        widgetStates: _,
        minValue: k,
        maxValue: O
      };
    }, [
      i == null ? void 0 : i.type,
      i == null ? void 0 : i.commonStates,
      i == null ? void 0 : i.unit,
      r,
      c,
      a,
      y
    ]), A = m.useMemo(() => {
      switch (i == null ? void 0 : i.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const k = B.findIndex((O) => String(O.value) === String(a));
          return k !== -1 ? (f(k + 1), y(k + 1, true)) : (f(void 0), y("", true));
        }
        default:
          return y("", true);
      }
    }, [
      i,
      a,
      B,
      y
    ]);
    return {
      widgetStates: V,
      minValue: M,
      maxValue: H,
      data: A,
      activeIndex: v,
      setActiveIndex: f,
      oidValue: a,
      states: B,
      resolveStyleData: y
    };
  };
});
export {
  z as C,
  U as D,
  lt as S,
  __tla,
  N as a,
  D as b,
  rt as c,
  xt as d,
  ht as e,
  St as f,
  at as g,
  X as h,
  vt as i,
  it as j,
  st as k,
  ae as l,
  ot as m,
  oe as n,
  et as o,
  J as p,
  Ge as q,
  Ct as u,
  pt as w
};
