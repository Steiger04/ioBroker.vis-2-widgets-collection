import { u as ve, j as v, s as ce, h as pe, i as be, a7 as Se, p as se, a as xe, a8 as Ce, a9 as ee, aa as ye, B as I, T as q, b as ke, I as ze, ab as $e, P as ae, __tla as __tla_0 } from "./tinycolor-CLG1zgRY.js";
import { s as _e, g as Te, a as W, v as Ae, i as we, b as te, e as Ie, c as Oe, d as je, f as Be, w as Me, h as Ee, j as Fe, T as ue, G as L, u as Pe, C as Ve, __tla as __tla_1 } from "./usePopoverPositioning-BenXbV4b.js";
import { v as f, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { I as He, __tla as __tla_3 } from "./Delete-VRvdIUoO.js";
let Y, K, dt, X, jt, _t, T, gt, R, tt, st, ne, Z, Ot, Tt, At, wt, le, zt, de, It, $t, Bt, lt, kt;
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
  let De, We, Re;
  De = (t) => {
    const { absolute: e, children: n, classes: a, flexItem: s, light: i, orientation: c, textAlign: u, variant: d } = t;
    return be({
      root: [
        "root",
        e && "absolute",
        d,
        i && "light",
        c === "vertical" && "vertical",
        s && "flexItem",
        n && "withChildren",
        n && c === "vertical" && "withChildrenVertical",
        u === "right" && c !== "vertical" && "textAlignRight",
        u === "left" && c !== "vertical" && "textAlignLeft"
      ],
      wrapper: [
        "wrapper",
        c === "vertical" && "wrapperVertical"
      ]
    }, Se, a);
  };
  We = ce("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: n } = t;
      return [
        e.root,
        n.absolute && e.absolute,
        e[n.variant],
        n.light && e.light,
        n.orientation === "vertical" && e.vertical,
        n.flexItem && e.flexItem,
        n.children && e.withChildren,
        n.children && n.orientation === "vertical" && e.withChildrenVertical,
        n.textAlign === "right" && n.orientation !== "vertical" && e.textAlignRight,
        n.textAlign === "left" && n.orientation !== "vertical" && e.textAlignLeft
      ];
    }
  })(se(({ theme: t }) => ({
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
          borderColor: t.vars ? `rgba(${t.vars.palette.dividerChannel} / 0.08)` : xe(t.palette.divider, 0.08)
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
  Re = ce("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (t, e) => {
      const { ownerState: n } = t;
      return [
        e.wrapper,
        n.orientation === "vertical" && e.wrapperVertical
      ];
    }
  })(se(({ theme: t }) => ({
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
  K = f.forwardRef(function(e, n) {
    const a = ve({
      props: e,
      name: "MuiDivider"
    }), { absolute: s = false, children: i, className: c, orientation: u = "horizontal", component: d = i || u === "vertical" ? "div" : "hr", flexItem: r = false, light: m = false, role: g = d !== "hr" ? "separator" : void 0, textAlign: o = "center", variant: l = "fullWidth", ...b } = a, h = {
      ...a,
      absolute: s,
      component: d,
      flexItem: r,
      light: m,
      orientation: u,
      role: g,
      textAlign: o,
      variant: l
    }, C = De(h);
    return v.jsx(We, {
      as: d,
      className: pe(C.root, c),
      role: g,
      ref: n,
      ownerState: h,
      "aria-orientation": g === "separator" && (d !== "hr" || u === "vertical") ? u : void 0,
      ...b,
      children: i ? v.jsx(Re, {
        className: C.wrapper,
        ownerState: h,
        children: i
      }) : null
    });
  });
  K && (K.muiSkipListHighlight = true);
  let Ge, Ne, V, Xe;
  Ge = [
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
  ne = (t) => f.useMemo(() => {
    if (!t) return {
      backgroundStyles: void 0,
      borderStyles: void 0,
      textStyles: void 0,
      fontStyles: void 0,
      boxStyles: void 0
    };
    const e = {}, n = {}, a = {}, s = {}, i = {};
    return Ge.forEach((c) => {
      const u = t[c];
      u !== void 0 && (c.includes("background") ? e[c] = u : c.includes("border") ? n[c] = u : c.includes("font") || c.includes("line-height") || c.includes("letter-spacing") || c.includes("word-spacing") ? s[c] = u : c.includes("text") || c.includes("color") ? a[c] = u : i[c] = u);
    }), {
      backgroundStyles: e,
      borderStyles: n,
      textStyles: a,
      fontStyles: s,
      boxStyles: i
    };
  }, [
    t
  ]);
  Ne = 32;
  V = /* @__PURE__ */ new Map();
  Xe = (t) => JSON.stringify(t, (e, n) => typeof n == "function" ? String(n) : n);
  function Ye(t) {
    const e = Xe(t), n = V.get(e);
    if (n) return V.delete(e), V.set(e, n), n;
    const a = Ce(t);
    if (V.set(e, a), V.size > Ne) {
      const s = V.keys().next().value;
      s !== void 0 && V.delete(s);
    }
    return a;
  }
  function qe() {
    return f.useSyncExternalStore(_e, Te);
  }
  const Le = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "button",
    "caption",
    "overline",
    "inherit"
  ];
  function Ue(t) {
    const { typography: e } = t;
    if (!e) return t;
    const n = {
      ...e
    };
    for (const a of Le) delete n[a];
    return delete n.pxToRem, {
      ...t,
      typography: n
    };
  }
  de = function(t, e, n) {
    const [a, s] = f.useState("");
    f.useEffect(() => {
      let g = true;
      const o = (l, b) => {
        g && s(typeof (b == null ? void 0 : b.val) == "string" ? b.val : "");
      };
      return t.getState(W).then((l) => {
        g && s(typeof (l == null ? void 0 : l.val) == "string" ? l.val : "");
      }).catch((l) => console.error(`Cannot read theme state ${W}: ${l}`)), t.subscribeState(W, o).catch((l) => console.error(`Cannot subscribe theme state ${W}: ${l}`)), () => {
        g = false;
        try {
          t.unsubscribeState(W, o);
        } catch (l) {
          console.error(`Cannot unsubscribe theme state ${W}: ${l}`);
        }
      };
    }, [
      t
    ]);
    const i = f.useMemo(() => {
      if (!a) return {};
      try {
        const g = Ae(JSON.parse(a));
        return g.isValid ? g.theme ?? {} : {};
      } catch {
        return {};
      }
    }, [
      a
    ]), c = qe(), u = c ?? i;
    f.useEffect(() => {
      we(u.googleFonts);
    }, [
      u.googleFonts
    ]);
    const d = te(u, "typography.fontFamily");
    f.useEffect(() => {
      Ie(Oe(d));
    }, [
      d
    ]);
    const r = f.useMemo(() => JSON.stringify(i), [
      i
    ]), m = f.useRef(i);
    return f.useEffect(() => {
      const g = m.current !== i;
      m.current = i, c && g && je() === r && Be();
    }, [
      c,
      i,
      r
    ]), f.useMemo(() => {
      const g = Ue(e), o = te(g, "palette.primary.main"), l = Me(Ee(u), o), b = ee(ee(g, n ?? {}), l), h = te(b, "corners"), C = Fe(h), y = C ? ee(b, {
        shape: {
          borderRadius: (h == null ? void 0 : h.topLeft) ?? 4
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: C
              }
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: C
              }
            }
          }
        }
      }) : b;
      return Ye(y);
    }, [
      e,
      n,
      u
    ]);
  };
  let U, fe;
  U = (t) => t.startsWith("&") || t.includes(" ") || t.startsWith("@") ? t : t.replace(/-([a-z])/g, (e, n) => n.toUpperCase());
  fe = (t) => {
    const e = Object.fromEntries(Object.entries(t).map(([n, a]) => {
      if (Array.isArray(a)) {
        const s = a.filter((i) => i != null);
        return [
          U(n),
          s.length > 0 ? s : void 0
        ];
      }
      return typeof a == "object" && a !== null ? [
        U(n),
        fe(a)
      ] : [
        U(n),
        a
      ];
    }).filter(([, n]) => n != null));
    return Object.keys(e).length > 0 ? e : void 0;
  };
  Z = (t) => {
    if (!t) return {};
    const e = Object.fromEntries(Object.entries(t).map(([n, a]) => {
      const s = U(n);
      if (Array.isArray(a)) {
        const i = a.filter((c) => c != null);
        return [
          s,
          i.length > 0 ? i : void 0
        ];
      }
      if (typeof a == "object" && a !== null) {
        const i = fe(a);
        return [
          s,
          i
        ];
      }
      return [
        s,
        a
      ];
    }).filter(([, n]) => n != null));
    return Object.keys(e).length > 0 ? e : {};
  };
  Y = f.createContext({});
  function Je({ children: t, context: e }) {
    const n = e.theme, a = e.widget, s = e.socket, { fontStyles: i, textStyles: c } = ne(a.style || {}), u = f.useMemo(() => ({
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              ...Z(i),
              ...Z(c)
            }
          }
        }
      }
    }), [
      i,
      c
    ]), d = de(s, n, u);
    return v.jsxs(ue, {
      theme: d,
      children: [
        v.jsx(ye, {
          styles: {
            html: {
              boxSizing: "border-box"
            },
            "*, *::before, *::after": {
              boxSizing: "inherit"
            }
          }
        }),
        v.jsx(Y.Provider, {
          value: {
            ...e,
            theme: d
          },
          children: t
        })
      ]
    });
  }
  kt = function(t, e) {
    return v.jsx(Je, {
      context: e,
      children: t
    });
  };
  let B;
  T = ({ dividerText: t = "" }) => {
    const e = {
      position: "absolute",
      left: 0,
      width: "100%"
    };
    return v.jsx(I, {
      sx: {
        display: "inline-block",
        pt: 1.5,
        pb: t ? 2 : 1.5
      },
      children: t ? v.jsx(K, {
        sx: e,
        children: v.jsx(q, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: L.t(t)
        })
      }) : v.jsx(K, {
        sx: e
      })
    });
  };
  B = {
    HEX: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    RGB: /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i,
    GRADIENT: /^(linear-gradient|radial-gradient)\(.*\)$/i,
    GRADIENT_PREFIX: /^(linear-gradient|radial-gradient)\(/i
  };
  function oe(t) {
    if (!t || t.trim() === "") return {
      isValid: true,
      normalizedValue: "",
      colorType: "empty"
    };
    const e = t.trim();
    return B.HEX.test(e) ? {
      isValid: true,
      normalizedValue: e,
      colorType: "hex"
    } : B.RGB.test(e) ? {
      isValid: true,
      normalizedValue: e,
      colorType: "rgb"
    } : B.GRADIENT.test(e) ? {
      isValid: true,
      normalizedValue: e,
      colorType: "gradient"
    } : {
      isValid: false,
      normalizedValue: e,
      colorType: "invalid"
    };
  }
  function Ke(t) {
    if (t == null || typeof t != "string") return false;
    const e = t.trim();
    return e === "" ? false : B.GRADIENT_PREFIX.test(e);
  }
  function Ze(t) {
    if (!t || typeof t != "string") return null;
    const e = t.match(B.HEX);
    if (!e) return null;
    let n = e[1];
    n.length === 3 && (n = n.split("").map((u) => u + u).join(""));
    const a = parseInt(n.substring(0, 2), 16), s = parseInt(n.substring(2, 4), 16), i = parseInt(n.substring(4, 6), 16);
    let c = 1;
    if (n.length === 8) {
      const u = parseInt(n.substring(6, 8), 16);
      c = Math.round(u / 255 * 1e3) / 1e3;
    }
    return {
      r: a,
      g: s,
      b: i,
      a: c
    };
  }
  function Qe(t) {
    if (!t || typeof t != "string" || !t.match(B.RGB)) return null;
    const n = t.match(/\d+\.?\d*/g);
    if (!n || n.length < 3) return null;
    const a = parseInt(n[0], 10), s = parseInt(n[1], 10), i = parseInt(n[2], 10), c = n[3] !== void 0 ? parseFloat(n[3]) : 1;
    return a < 0 || a > 255 || s < 0 || s > 255 || i < 0 || i > 255 || c < 0 || c > 1 ? null : {
      r: a,
      g: s,
      b: i,
      a: Math.round(c * 1e3) / 1e3
    };
  }
  function G(t) {
    if (!t || typeof t != "string") return null;
    const e = t.trim();
    return e.startsWith("#") ? Ze(e) : e.toLowerCase().startsWith("rgb") ? Qe(e) : null;
  }
  function re(t) {
    if (!t || typeof t != "string") return null;
    const e = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi, n = Array.from(t.matchAll(e));
    if (n.length < 2) return null;
    const a = n.map((s, i) => {
      const c = s[1];
      let u;
      return s[2] ? u = parseFloat(s[2]) : u = i / (n.length - 1) * 100, {
        color: c,
        position: u
      };
    });
    return a.sort((s, i) => s.position - i.position), a;
  }
  function et(t) {
    if (!t || t.length < 2) return null;
    const e = t.find((o) => o.position === 50);
    if (e) {
      const o = G(e.color);
      return o ? o.a === 1 ? `rgb(${o.r}, ${o.g}, ${o.b})` : `rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})` : null;
    }
    let n = null, a = null;
    for (let o = 0; o < t.length; o++) if (t[o].position <= 50 && (n = t[o]), t[o].position > 50 && !a) {
      a = t[o];
      break;
    }
    if (!a && n) {
      const o = G(n.color);
      return o ? o.a === 1 ? `rgb(${o.r}, ${o.g}, ${o.b})` : `rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})` : null;
    }
    if (!n && a) {
      const o = G(a.color);
      return o ? o.a === 1 ? `rgb(${o.r}, ${o.g}, ${o.b})` : `rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})` : null;
    }
    if (!n || !a) return null;
    const s = G(n.color), i = G(a.color);
    if (!s || !i) return null;
    const c = a.position - n.position;
    if (c === 0) {
      const o = i;
      return o.a === 1 ? `rgb(${o.r}, ${o.g}, ${o.b})` : `rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})`;
    }
    const u = (50 - n.position) / c, d = Math.round(s.r + (i.r - s.r) * u), r = Math.round(s.g + (i.g - s.g) * u), m = Math.round(s.b + (i.b - s.b) * u), g = Math.round((s.a + (i.a - s.a) * u) * 1e3) / 1e3;
    return g === 1 ? `rgb(${d}, ${r}, ${m})` : `rgba(${d}, ${r}, ${m}, ${g})`;
  }
  tt = function(t) {
    if (t == null || typeof t != "string") return null;
    const e = t.trim();
    if (e === "") return null;
    if (!B.GRADIENT_PREFIX.test(e)) return G(e) ? e : null;
    try {
      const a = re(e);
      return a ? et(a) : null;
    } catch {
      return null;
    }
  };
  zt = function(t) {
    if (t == null || typeof t != "string") return null;
    const e = t.trim();
    if (!e || !B.GRADIENT_PREFIX.test(e)) return null;
    const n = re(e);
    return n && n.length ? n.map((a) => a.color) : null;
  };
  const nt = {
    top: [
      0,
      -1
    ],
    bottom: [
      0,
      1
    ],
    left: [
      -1,
      0
    ],
    right: [
      1,
      0
    ]
  }, ot = (t) => {
    const e = t.trim().toLowerCase();
    if (!e) return [
      0,
      1
    ];
    if (e.endsWith("deg")) {
      const n = parseFloat(e);
      if (!Number.isFinite(n)) return [
        0,
        1
      ];
      const a = n * Math.PI / 180;
      return [
        Math.sin(a),
        -Math.cos(a)
      ];
    }
    if (e.startsWith("to ")) {
      const n = e.slice(3).split(/\s+/).filter(Boolean);
      let a = 0, s = 0;
      for (const c of n) {
        const u = nt[c];
        u && (a += u[0], s += u[1]);
      }
      if (a === 0 && s === 0) return [
        0,
        1
      ];
      const i = Math.hypot(a, s);
      return [
        a / i,
        s / i
      ];
    }
    return [
      0,
      1
    ];
  };
  $t = function(t) {
    if (t == null || typeof t != "string") return null;
    const e = t.trim();
    if (!e.startsWith("linear-gradient(")) return null;
    const n = e.indexOf("("), a = e.lastIndexOf(")");
    if (n === -1 || a === -1 || a < n) return null;
    const s = e.slice(n + 1, a), i = s.search(/#[0-9a-fA-F]|rgba?\(/i), c = i === -1 ? "" : s.slice(0, i).replace(/[,;]?\s*$/, ""), u = i === -1 ? s : s.slice(i), [d, r] = ot(c), m = re(`linear-gradient(${u})`);
    if (!m || !m.length) return null;
    const g = (o) => Math.round(o * 1e6) / 1e6;
    return {
      type: "linear",
      x: g(0.5 - d / 2),
      y: g(0.5 - r / 2),
      x2: g(0.5 + d / 2),
      y2: g(0.5 + r / 2),
      colorStops: m.map((o) => ({
        offset: o.position / 100,
        color: o.color
      }))
    };
  };
  function J(t, e) {
    switch (t) {
      case "primary":
        return e.palette.primary.main;
      case "text":
        return e.palette.text.primary;
      default:
        return "";
    }
  }
  function rt(t, e) {
    if (!(!e || e.length === 0)) for (const n of e) {
      if (!n) continue;
      const a = t[n];
      if (typeof a != "string" || a.trim() === "") continue;
      const s = oe(a);
      if (s.isValid && s.normalizedValue.trim() !== "") return s.normalizedValue;
    }
  }
  function it(t, e, n, a) {
    const s = t.name ? e[t.name] : void 0;
    if (typeof s == "string" && s.trim() !== "") {
      const c = oe(s);
      if (c.isValid && c.normalizedValue.trim() !== "") return c.normalizedValue;
    }
    const i = rt(e, t.fallbackFields);
    if (i !== void 0) return i;
    if (t.inheritTextStyle === true) {
      const c = a == null ? void 0 : a.color;
      if (typeof c == "string" && c.trim() !== "") return c;
    }
    return J(t.terminal, n);
  }
  function at(t) {
    var _a, _b, _c, _d, _e2;
    const e = t.context, n = ((_a = t.selectedWidgets) == null ? void 0 : _a[0]) ?? t.selectedWidget;
    return n ? (_e2 = (_d = (_c = (_b = e == null ? void 0 : e.views) == null ? void 0 : _b[t.selectedView]) == null ? void 0 : _c.widgets) == null ? void 0 : _d[n]) == null ? void 0 : _e2.style : void 0;
  }
  lt = function({ field: t, data: e, onDataChange: n, props: a }) {
    const s = t.name, i = e[s], [c, u] = f.useState(i || ""), [d, r] = f.useState(false), [m, g] = f.useState(null), o = f.useRef(i), l = f.useRef(null), b = a.context.theme, h = de(a.context.socket, a.context.theme), C = f.useMemo(() => at(a), [
      a
    ]), y = f.useMemo(() => it(t, e, h, C), [
      t,
      e,
      h,
      C
    ]), M = typeof i == "string" && i.trim() !== "", { anchorOrigin: H, transformOrigin: E, maxHeight: D, setContentRef: $, popoverActionRef: z } = Pe(m, !!m);
    f.useEffect(() => () => {
      l.current !== null && clearTimeout(l.current);
    }, []);
    const k = f.useCallback((S, _ = false) => {
      if (l.current !== null && (clearTimeout(l.current), l.current = null), S == null) {
        u(""), r(false), o.current = null, n({
          [s]: null
        });
        return;
      }
      if (typeof S != "string") {
        r(true);
        return;
      }
      if (S.trim() === "") {
        u(""), r(false), o.current = null, n({
          [s]: null
        });
        return;
      }
      const F = oe(S);
      if (u(S), !F.isValid) {
        r(true);
        return;
      }
      r(false);
      let P;
      if (t.noGradient === true) {
        const j = tt(F.normalizedValue);
        if (j === null) {
          r(true);
          return;
        }
        P = j;
      } else P = F.normalizedValue || null;
      o.current = P, _ ? l.current = setTimeout(() => {
        l.current = null, n({
          [s]: P
        });
      }, 150) : n({
        [s]: P
      });
    }, [
      s,
      t.noGradient,
      n
    ]), A = f.useCallback((S) => k(S, true), [
      k
    ]), w = f.useCallback((S) => k(S.target.value), [
      k
    ]), Q = f.useCallback(() => k(null), [
      k
    ]), N = !!m;
    return f.useEffect(() => {
      i !== o.current && (o.current = i, u(i || ""), r(false));
    }, [
      i
    ]), v.jsx(v.Fragment, {
      children: v.jsxs(ue, {
        theme: b,
        children: [
          v.jsxs(I, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              v.jsx(ke, {
                variant: "standard",
                fullWidth: true,
                value: c,
                error: d,
                placeholder: M ? "" : L.t("color_inherit"),
                helperText: d ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "",
                onChange: w,
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
              M && v.jsx(ze, {
                onClick: Q,
                title: L.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: v.jsx(He, {})
              }),
              v.jsx(I, {
                onClick: (S) => g(S.currentTarget),
                title: L.t("choose_color"),
                sx: {
                  mt: c ? "4px" : "-2px",
                  px: "4px",
                  py: c ? "4px" : "3px",
                  backgroundColor: y ? b.name === "light" ? b.palette.common.white : "#121212" : "transparent",
                  borderRadius: "1px",
                  display: "inline-block",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                  border: d ? `1px solid ${b.palette.error.main}` : y ? `1px solid ${b.name === "light" ? b.palette.grey[400] : b.palette.common.black}` : `1px dashed ${b.name === "light" ? b.palette.grey[400] : b.palette.text.secondary}`,
                  opacity: d ? 0.6 : 1
                },
                children: v.jsx(I, {
                  sx: {
                    width: y ? "36px" : "38px",
                    height: y ? "14px" : "18px",
                    borderRadius: "2px",
                    background: d ? "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)" : y
                  }
                })
              })
            ]
          }),
          v.jsx($e, {
            action: z,
            slotProps: {
              paper: {
                elevation: 0,
                sx: {
                  p: "9px",
                  borderRadius: "6px",
                  backgroundColor: "rgb(32,32,32)",
                  boxSizing: "border-box",
                  maxHeight: D,
                  overflowX: "hidden",
                  overflowY: "auto"
                }
              }
            },
            open: N,
            anchorEl: m,
            onClose: () => g(null),
            transformOrigin: E,
            anchorOrigin: H,
            children: v.jsx(I, {
              ref: $,
              sx: {
                borderRadius: "6px"
              },
              children: v.jsx(Ve, {
                value: c || y || h.palette.primary.main,
                onChange: A,
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
  };
  X = function(t) {
    const { name: e, label: n, default: a = "", fallbackFields: s, noGradient: i, terminal: c, inheritTextStyle: u, hidden: d } = t, r = {
      name: e,
      label: n,
      default: a,
      type: "custom",
      component: (m, g, o, l) => v.jsx(lt, {
        field: m,
        data: g,
        onDataChange: o,
        props: l
      })
    };
    return s !== void 0 && (r.fallbackFields = s), i !== void 0 && (r.noGradient = i), c !== void 0 && (r.terminal = c), u !== void 0 && (r.inheritTextStyle = u), d !== void 0 && (r.hidden = d), r;
  };
  _t = function(t, e, n) {
    return X({
      name: t,
      label: e,
      fallbackFields: [
        "sliderColor"
      ],
      terminal: "primary",
      ...n
    });
  };
  Tt = (t, e) => (n) => n[t] !== e;
  At = [
    {
      value: "normal",
      label: "normal"
    },
    {
      value: "italic",
      label: "italic"
    },
    {
      value: "oblique",
      label: "oblique"
    }
  ];
  wt = [
    {
      value: "normal",
      label: "normal"
    },
    {
      value: "bold",
      label: "bold"
    },
    {
      value: "bolder",
      label: "bolder"
    },
    {
      value: "lighter",
      label: "lighter"
    },
    {
      value: "100",
      label: "100"
    },
    {
      value: "200",
      label: "200"
    },
    {
      value: "300",
      label: "300"
    },
    {
      value: "400",
      label: "400"
    },
    {
      value: "500",
      label: "500"
    },
    {
      value: "600",
      label: "600"
    },
    {
      value: "700",
      label: "700"
    },
    {
      value: "800",
      label: "800"
    },
    {
      value: "900",
      label: "900"
    }
  ];
  It = [
    {
      value: "both",
      label: "both"
    },
    {
      value: "left",
      label: "left"
    },
    {
      value: "right",
      label: "right"
    }
  ];
  Ot = function(t, e) {
    const n = {
      label: "",
      type: "custom",
      component: () => v.jsx(T, {
        dividerText: t
      })
    };
    return (e == null ? void 0 : e.hidden) !== void 0 && (n.hidden = e.hidden), n;
  };
  let ct, ut;
  le = (t) => {
    if (!t || typeof t != "string") return false;
    const e = t.trim();
    return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
  };
  jt = (t) => {
    const { groupName: e = "", allFields: n = true } = t || {}, a = [
      {
        label: "",
        type: "custom",
        component: () => v.jsx(T, {
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
        hidden: (i, c) => {
          let u = true;
          const d = c !== void 0 ? c : e, r = i[`icon${d}`], m = i[`iconSmall${d}`];
          return (d === "" || d === "Active") && (u = false), c !== void 0 && (u = !i.iconColor && !i.enableIconColorMask && !i[`iconColor${c}`] && !le(r) && !le(m)), u;
        }
      },
      X({
        name: `iconColor${e}`,
        label: "icon_color",
        fallbackFields: [
          ""
        ],
        noGradient: true,
        terminal: "primary"
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
        component: () => v.jsx(T, {
          dividerText: "header"
        }),
        hidden: (i, c) => i.noHeader && !n
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
        component: () => v.jsx(T, {
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
        hidden: (i, c) => {
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
        component: () => v.jsx(T, {
          dividerText: "footer"
        }),
        hidden: (i, c) => i.noFooter && !n
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
        component: () => v.jsx(T, {
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
        ],
        terminal: "text",
        inheritTextStyle: true
      }),
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => v.jsx(T, {})
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
        component: () => v.jsx(T, {})
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
        component: () => v.jsx(T, {
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
        component: () => v.jsx(T, {
          dividerText: "background"
        })
      },
      X({
        name: `background${e}`,
        label: "background",
        fallbackFields: [],
        terminal: "transparent"
      }),
      {
        label: "",
        type: "custom",
        component: () => v.jsx(T, {
          dividerText: "frame_background"
        })
      },
      X({
        name: `frameBackground${e}`,
        label: "frame_background",
        fallbackFields: [],
        terminal: "transparent"
      })
    ];
    if (n) {
      const i = [
        `alias${e}`,
        `value${e}`
      ];
      return a.filter((c) => !i.includes(c.name));
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
    return a.filter((i) => !s.includes(i.name));
  };
  ct = () => {
    const { isSignalVisible: t, refService: e, widget: n } = f.useContext(Y), a = f.useMemo(() => {
      const i = [], c = Number(n.data["signals-count"]) || 0;
      for (let u = 0; u < c; u++) t(u) && i.push(u);
      return i;
    }, [
      n.data,
      t
    ]), s = f.useMemo(() => {
      const i = {};
      return a.forEach((c) => {
        i[c] = n.data[`signals-color-${c}`];
      }), i;
    }, [
      n.data,
      a
    ]);
    f.useEffect(() => {
      if (!(e == null ? void 0 : e.current)) return;
      const c = e.current.children, u = [];
      Array.from(c).forEach((d) => {
        const r = d.children[0];
        r && r instanceof HTMLElement && r.className === "vis-signal-icon iconOwn" && u.push(r);
      }), u.forEach((d, r) => {
        const m = a[r], g = m !== void 0 ? s[m] : void 0;
        g ? (d.style.color = g, d.style.filter = "drop-shadow(0px 10000px 0)", d.style.transform = "translateY(-10000px)") : (d.style.color = "", d.style.filter = "", d.style.transform = "");
      });
    }, [
      a,
      s,
      e
    ]);
  };
  st = (t, e = 28) => {
    const [n, a] = f.useState({
      width: void 0,
      height: void 0,
      maxWidth: void 0
    }), s = f.useCallback((c) => {
      if (c.length === 0) return;
      const u = c[0], { width: d, height: r } = u.contentRect, m = Math.round(d), g = Math.round(r), o = m <= g + e + 12 ? m - e - 12 : g;
      a({
        width: m,
        height: g,
        maxWidth: o
      });
    }, [
      e
    ]), i = f.useMemo(() => t ? typeof t == "object" && "current" in t ? t.current : t : null, [
      t
    ]);
    return f.useEffect(() => {
      if (!i) {
        a({
          width: void 0,
          height: void 0,
          maxWidth: void 0
        });
        return;
      }
      const c = new ResizeObserver(s);
      try {
        c.observe(i);
      } catch (u) {
        console.warn("ResizeObserver failed to observe element:", u);
        return;
      }
      return () => {
        try {
          c.disconnect();
        } catch (u) {
          console.warn("ResizeObserver cleanup failed:", u);
        }
      };
    }, [
      i,
      s
    ]), n;
  };
  ut = (t) => {
    const { widget: e } = f.useContext(Y), [n, a] = f.useState("100%"), [s, i] = f.useState("100%"), { width: c, height: u } = st(t), d = f.useMemo(() => ({
      basePadding: e.data.basePadding || 0,
      isSquare: e.data.square || false,
      isCircle: e.data.circle || false
    }), [
      e.data.basePadding,
      e.data.square,
      e.data.circle
    ]), r = f.useMemo(() => d.basePadding * 16, [
      d.basePadding
    ]);
    return f.useEffect(() => {
      if (!c || !u || c < 0 || u < 0) return;
      if (!d.isSquare && !d.isCircle) {
        a("100%"), i("100%");
        return;
      }
      if (!(c >= r && u >= r)) {
        a("0px"), i("0px");
        return;
      }
      const g = c - r, o = u - r, l = Math.min(g, o);
      a(`${l}px`), i(`${l}px`);
    }, [
      c,
      u,
      r,
      d.isSquare,
      d.isCircle
    ]), {
      width: n,
      height: s
    };
  };
  R = function(t) {
    return t == null || typeof t != "string" || t.trim() === "" ? null : Ke(t) ? t : null;
  };
  dt = f.forwardRef(({ children: t, data: e, oidValue: n = null, isValidType: a = true, bgActive: s = true, sx: i = {} }, c) => {
    const u = f.useRef(null), d = f.useRef(null), [r, m] = f.useState(null), g = f.useRef(null), o = f.useRef(null), l = f.useContext(Y);
    if (!l) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: b, widget: h } = l, { backgroundStyles: C, borderStyles: y } = ne(h.style), { width: M, height: H } = ut(r);
    ct();
    const E = h.data.oidObject, D = E == null ? void 0 : E._id, $ = f.useMemo(() => {
      if (h.data.noFooter) return "";
      const A = n || n === 0 || String(n) === "false" ? `${n}${(E == null ? void 0 : E.unit) ?? ""}` : "";
      return e.footer || e.alias || e.value || A || "";
    }, [
      e.footer,
      e.alias,
      e.value,
      n,
      E == null ? void 0 : E.unit,
      h.data.noFooter
    ]), z = f.useMemo(() => Z({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      ...C,
      background: b ? e.frameBackground : e.frameBackground || "transparent",
      backgroundColor: b ? R(e.frameBackground) ? void 0 : e.frameBackground : R(e.frameBackground) ? "transparent" : e.frameBackground,
      borderColor: b ? "" : e.frameBackground || (y == null ? void 0 : y["border-color"])
    }), [
      C,
      y,
      e.frameBackground,
      b
    ]), k = f.useMemo(() => Z({
      overflow: "hidden",
      width: M,
      height: H,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: s && b ? e.background : s ? e.background || "transparent" : b ? void 0 : "transparent",
      borderColor: b ? "" : e.background || (y == null ? void 0 : y["border-color"]),
      borderRadius: h.data.circle || h.data.ellipse ? "50%" : void 0,
      ...i
    }), [
      M,
      H,
      s,
      b,
      e.background,
      y,
      h.data.circle,
      h.data.ellipse,
      i
    ]);
    return f.useEffect(() => {
      h.data.noHeader || !g.current || (g.current.innerHTML = e.header);
    }, [
      e.header,
      h.data.noHeader
    ]), f.useEffect(() => {
      h.data.noFooter || !o.current || (o.current.innerHTML = String($));
    }, [
      $,
      h.data.noFooter
    ]), f.useImperativeHandle(c, () => ({
      get paper0() {
        return (u == null ? void 0 : u.current) ?? null;
      },
      get paper1() {
        return (d == null ? void 0 : d.current) ?? null;
      },
      get header() {
        return (g == null ? void 0 : g.current) ?? null;
      }
    })), v.jsxs(ae, {
      ref: u,
      className: "BASE-PAPER-0",
      square: h.data.squaredCorner,
      variant: h.data.outlinedFrame ? "outlined" : "elevation",
      sx: z,
      children: [
        !!a && v.jsxs(v.Fragment, {
          children: [
            v.jsx(I, {
              sx: {
                width: h.data.noHeader ? "0%" : "100%",
                height: h.data.noHeader ? "0%" : "auto",
                mt: (h.data.basePadding ?? 8) / 2,
                mb: -(h.data.basePadding ?? 8) / 2
              },
              children: v.jsx(q, {
                ref: g,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.headerSize,
                  background: R(e.textColorCm),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: R(e.textColorCm) ? "transparent" : e.textColorCm
                }
              })
            }),
            v.jsx(I, {
              className: "BASE-BOX-1",
              ref: m,
              sx: {
                overflow: "hidden",
                p: h.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: v.jsx(ae, {
                ref: d,
                className: "BASE-PAPER-1",
                elevation: h.data.outlined ? 0 : Number(h.data.baseElevation) || 0,
                square: !h.data.basePadding || h.data.squaredCorner,
                variant: h.data.outlined ? "outlined" : "elevation",
                sx: k,
                children: t
              })
            }),
            v.jsx(I, {
              sx: {
                width: h.data.noFooter ? "0%" : "100%",
                height: h.data.noFooter ? "0%" : "auto",
                mt: -(h.data.basePadding ?? 8) / 2,
                mb: (h.data.basePadding ?? 8) / 2
              },
              children: v.jsx(q, {
                ref: o,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.footerSize,
                  background: R(e.textColorCm),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: R(e.textColorCm) ? "transparent" : e.textColorCm
                }
              })
            })
          ]
        }),
        !a && v.jsx(I, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: v.jsx(q, {
            variant: "body2",
            sx: {
              p: 1,
              width: "100%",
              textAlign: "center"
            },
            children: D ? `${D} has an invalid type!` : "Please select a valid object ID"
          })
        })
      ]
    });
  });
  dt.displayName = "CollectionBase";
  function ft(t, e) {
    return t[e];
  }
  function mt(t) {
    return typeof t == "object" && t !== null && "sliderOrientation" in t;
  }
  gt = (t) => typeof t == "number" ? `calc(${t / 100}rem * 0.875)` : void 0;
  function ht(t) {
    return {
      markerIconSize: t.markerIconSize,
      markerTextColor: t.markerTextColor,
      markerTextSize: t.markerTextSize,
      markerIconColor: t.markerIconColor
    };
  }
  function vt(t) {
    return {};
  }
  function p(t) {
    for (const e of t) if (e.condition !== false && e.value !== void 0 && e.value !== null && !(typeof e.value == "string" && e.value.trim() === "")) return e.value;
  }
  function pt(t) {
    const { rxData: e, oidObject: n, oidName: a, theme: s, fontStyles: i, textStyles: c, backgroundStyles: u, formatSize: d, getDataValue: r, widgetResolver: m } = t, g = (o) => o && String(o) !== "" ? String(o) : void 0;
    return {
      icon: (o, l) => e.noIcon ? "" : p([
        {
          condition: l,
          value: r("icon", "Active")
        },
        {
          condition: l,
          value: r("iconSmall", "Active")
        },
        {
          value: r("icon", String(o))
        },
        {
          value: r("iconSmall", String(o))
        },
        {
          value: r("icon", "")
        },
        {
          value: r("iconSmall", "")
        }
      ]) ?? "",
      iconActive: (o, l) => !l || e.noIcon ? "" : p([
        {
          value: r("icon", String(o))
        },
        {
          value: r("iconSmall", String(o))
        }
      ]) ?? "",
      iconSizeCm: (o, l) => p([
        {
          condition: r("iconSize", "") === 0,
          value: "0px"
        },
        {
          condition: !!r("iconSize", ""),
          value: `calc(24px * ${r("iconSize", "")} / 100)`
        }
      ]) ?? "24px",
      iconSize: (o, l) => p([
        {
          condition: l && r("iconSize", "Active") === 0,
          value: "0px"
        },
        {
          condition: l && !!r("iconSize", "Active"),
          value: `calc(24px * ${r("iconSize", "Active")} / 100)`
        },
        {
          condition: String(o) !== "" && r("iconSize", String(o)) === 0,
          value: "0px"
        },
        {
          condition: String(o) !== "" && !!r("iconSize", String(o)),
          value: `calc(24px * ${r("iconSize", String(o))} / 100)`
        },
        {
          condition: typeof m.markerIconSize == "number",
          value: `calc(24px * ${m.markerIconSize} / 100)`
        },
        {
          condition: r("iconSize", "") === 0,
          value: "0px"
        },
        {
          condition: !!r("iconSize", ""),
          value: `calc(24px * ${r("iconSize", "")} / 100)`
        }
      ]) ?? "24px",
      iconSizeActive: (o, l) => l ? p([
        {
          condition: r("iconSize", String(o)) === 0,
          value: "0px"
        },
        {
          condition: !!r("iconSize", String(o)),
          value: `calc(24px * ${r("iconSize", String(o))} / 100)`
        }
      ]) ?? "24px" : "24px",
      iconSizeOnly: (o, l) => p([
        {
          condition: l && (!!r("iconSize", "Active") || r("iconSize", "Active") === 0),
          value: `${r("iconSize", "Active")}%`
        },
        {
          condition: !!r("iconSize", String(o)) || r("iconSize", String(o)) === 0,
          value: `${r("iconSize", String(o))}%`
        }
      ]) ?? "100%",
      iconSizeActiveOnly: (o, l) => l ? p([
        {
          value: r("iconSize", String(o))
        }
      ]) ?? void 0 : void 0,
      iconWidth: (o, l) => p([
        {
          condition: l,
          value: e.iconSizeActive
        },
        {
          value: r("iconSize", String(o))
        },
        {
          value: m.markerIconSize
        },
        {
          value: e.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconHeight: (o, l) => p([
        {
          condition: l,
          value: e.iconSizeActive
        },
        {
          value: r("iconSize", String(o))
        },
        {
          value: m.markerIconSize
        },
        {
          value: e.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      forceColorMaskCm: (o, l) => p([
        {
          value: r("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMask: (o, l) => p([
        {
          condition: l,
          value: r("enableIconColorMask", "Active")
        },
        {
          value: r("enableIconColorMask", String(o))
        },
        {
          condition: !!r("enableIconColorMask", String(o)),
          value: r("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMaskActive: (o, l) => l ? p([
        {
          value: r("enableIconColorMask", String(o))
        }
      ]) ?? false : false,
      iconColor: (o, l) => p([
        {
          condition: l,
          value: r("iconColor", "Active")
        },
        {
          condition: String(o) !== "",
          value: r("iconColor", String(o))
        },
        {
          value: m.markerIconColor
        },
        {
          value: r("iconColor", "")
        }
      ]) ?? J("primary", s),
      iconColorActive: (o, l) => l ? p([
        {
          value: r("iconColor", String(o))
        }
      ]) ?? "" : "",
      iconHover: (o, l) => p([
        {
          value: e.iconHover ? `${e.iconHover}%` : void 0
        }
      ]) ?? "",
      iconHoverActive: (o, l) => l ? p([
        {
          value: r("iconHover", String(o)) ? `${r("iconHover", String(o))}%` : void 0
        }
      ]) ?? void 0 : void 0,
      iconXOffsetCm: (o, l) => p([
        {
          value: r("iconXOffset", "")
        }
      ]) ?? "0px",
      iconYOffsetCm: (o, l) => p([
        {
          value: r("iconYOffset", "")
        }
      ]) ?? "0px",
      iconXOffset: (o, l) => p([
        {
          condition: l,
          value: r("iconXOffset", "Active")
        },
        {
          value: r("iconXOffset", String(o))
        }
      ]) ?? "0px",
      iconYOffset: (o, l) => p([
        {
          condition: l,
          value: r("iconYOffset", "Active")
        },
        {
          value: r("iconYOffset", String(o))
        }
      ]) ?? "0px",
      iconXOffsetActive: (o, l) => l ? p([
        {
          condition: !r("iconXOffset", String(o)),
          value: "0px"
        },
        {
          value: r("iconXOffset", String(o))
        }
      ]) ?? "0px" : "0px",
      iconYOffsetActive: (o, l) => l ? p([
        {
          condition: !r("iconYOffset", String(o)),
          value: "0px"
        },
        {
          value: r("iconYOffset", String(o))
        }
      ]) ?? "0px" : "0px",
      textColorActive: (o, l) => l ? p([
        {
          value: r("textColor", String(o)),
          condition: r("textColor", String(o)) !== ""
        },
        {
          value: m.markerTextColor && m.markerTextColor !== "" ? m.markerTextColor : void 0
        },
        {
          value: e.textColor && e.textColor !== "" ? e.textColor : void 0
        }
      ]) ?? void 0 : void 0,
      textColorCm: (o, l) => p([
        {
          condition: typeof r("textColor", "") == "string",
          value: r("textColor", "")
        },
        {
          condition: typeof (c == null ? void 0 : c.color) == "string",
          value: c == null ? void 0 : c.color
        }
      ]) ?? J("text", s),
      textColor: (o, l) => p([
        {
          condition: l && typeof r("textColor", "Active") == "string",
          value: r("textColor", "Active")
        },
        {
          condition: typeof r("textColor", String(o)) == "string",
          value: r("textColor", String(o))
        },
        {
          value: m.markerTextColor && m.markerTextColor !== "" ? m.markerTextColor : void 0
        },
        {
          condition: typeof r("textColor", "") == "string",
          value: r("textColor", "")
        },
        {
          condition: typeof (c == null ? void 0 : c.color) == "string",
          value: c == null ? void 0 : c.color
        }
      ]) ?? J("text", s),
      fontSize: (o, l) => p([
        {
          condition: l && typeof e.valueSizeActive == "number",
          value: d(e.valueSizeActive)
        },
        {
          value: typeof r("valueSize", String(o)) == "number" ? d(r("valueSize", String(o))) : void 0
        },
        {
          condition: typeof m.markerTextSize == "number",
          value: d(m.markerTextSize)
        },
        {
          value: typeof e.valueSize == "number" ? d(e.valueSize) : void 0
        },
        {
          condition: typeof (i == null ? void 0 : i["font-size"]) == "string",
          value: i == null ? void 0 : i["font-size"]
        }
      ]) ?? null,
      headerSize: (o, l) => p([
        {
          condition: l && typeof r("headerSize", "Active") == "number",
          value: `${d(r("headerSize", "Active"))}`
        },
        {
          condition: typeof r("headerSize", String(o)) == "number",
          value: `${d(r("headerSize", String(o)))}`
        },
        {
          condition: typeof r("headerSize", "") == "number",
          value: `${d(r("headerSize", ""))}`
        },
        {
          condition: typeof (i == null ? void 0 : i["font-size"]) == "string",
          value: i == null ? void 0 : i["font-size"]
        }
      ]) ?? null,
      footerSize: (o, l) => p([
        {
          condition: l && typeof r("footerSize", "Active") == "number",
          value: `${d(r("footerSize", "Active"))}`
        },
        {
          condition: typeof r("footerSize", String(o)) == "number",
          value: `${d(r("footerSize", String(o)))}`
        },
        {
          condition: typeof r("footerSize", "") == "number",
          value: `${d(r("footerSize", ""))}`
        },
        {
          condition: typeof (i == null ? void 0 : i["font-size"]) == "string",
          value: i == null ? void 0 : i["font-size"]
        }
      ]) ?? null,
      valueSize: (o, l) => p([
        {
          condition: l && typeof r("valueSize", "Active") == "number",
          value: `${d(r("valueSize", "Active"))}`
        },
        {
          condition: typeof r("valueSize", String(o)) == "number",
          value: `${d(r("valueSize", String(o)))}`
        },
        {
          condition: typeof m.markerTextSize == "number",
          value: d(m.markerTextSize)
        },
        {
          condition: typeof r("valueSize", "") == "number",
          value: `${d(r("valueSize", ""))}`
        },
        {
          condition: typeof (i == null ? void 0 : i["font-size"]) == "string",
          value: i == null ? void 0 : i["font-size"]
        }
      ]) ?? null,
      valueSizeActive: (o, l) => l ? p([
        {
          value: typeof r("valueSize", String(o)) == "number" ? d(r("valueSize", String(o))) : null
        }
      ]) ?? null : null,
      header: (o, l) => String(p([
        {
          condition: l,
          value: g(r("header", "Active"))
        },
        {
          value: g(r("header", String(o)))
        },
        {
          value: g(r("header", ""))
        },
        {
          value: g(a)
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      footer: (o, l) => String(p([
        {
          condition: l,
          value: g(r("footer", "Active"))
        },
        {
          value: g(r("footer", String(o)))
        },
        {
          value: g(r("footer", ""))
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      alias: (o, l) => String(r("alias", String(o)) || "").replace(/(\r\n|\n|\r)/gm, ""),
      value: (o, l) => {
        const b = r("value", String(o));
        return b != null ? `${b}${(n == null ? void 0 : n.unit) !== void 0 ? n.unit : ""}` : void 0;
      },
      backgroundColor: (o, l) => p([
        {
          value: e.backgroundColor && e.backgroundColor !== "" ? e.backgroundColor : void 0
        },
        {
          value: u == null ? void 0 : u["background-color"]
        }
      ]) ?? "",
      backgroundColorActive: (o, l) => l ? r("backgroundColor", String(o)) : void 0,
      background: (o, l) => p([
        {
          condition: l,
          value: r("background", "Active")
        },
        {
          value: r("background", String(o))
        },
        {
          value: r("background", "")
        }
      ]) ?? "",
      backgroundActive: (o, l) => l ? r("background", String(o)) : void 0,
      frameBackgroundColor: (o, l) => p([
        {
          value: e.frameBackgroundColor && e.frameBackgroundColor !== "" ? e.frameBackgroundColor : void 0
        },
        {
          value: u == null ? void 0 : u["background-color"]
        }
      ]) ?? "",
      frameBackgroundColorActive: (o, l) => l ? r("frameBackgroundColor", String(o)) : void 0,
      frameBackground: (o, l) => p([
        {
          condition: l,
          value: r("frameBackground", "Active")
        },
        {
          value: r("frameBackground", String(o))
        },
        {
          value: r("frameBackground", "")
        }
      ]) ?? "",
      frameBackgroundActive: (o, l) => l ? r("frameBackground", String(o)) : void 0,
      markerIconSize: (o, l) => m.markerIconSize,
      markerTextColor: (o, l) => m.markerTextColor,
      markerTextSize: (o, l) => m.markerTextSize,
      markerIconColor: (o, l) => m.markerIconColor
    };
  }
  function bt(t = "", e = false, n) {
    return {
      icon: n.icon(t, e),
      iconActive: n.iconActive(t, e),
      iconSizeCm: n.iconSizeCm(t, e),
      iconSize: n.iconSize(t, e),
      iconSizeActive: n.iconSizeActive(t, e),
      iconSizeOnly: n.iconSizeOnly(t, e),
      iconWidth: n.iconWidth(t, e),
      iconHeight: n.iconHeight(t, e),
      iconSizeActiveOnly: n.iconSizeActiveOnly(t, e),
      forceColorMaskCm: n.forceColorMaskCm(t, e),
      forceColorMask: n.forceColorMask(t, e),
      forceColorMaskActive: n.forceColorMaskActive(t, e),
      iconColor: n.iconColor(t, e),
      iconColorActive: n.iconColorActive(t, e),
      iconHover: n.iconHover(t, e),
      iconHoverActive: n.iconHoverActive(t, e),
      iconXOffsetCm: n.iconXOffsetCm(t, e),
      iconYOffsetCm: n.iconYOffsetCm(t, e),
      iconXOffset: n.iconXOffset(t, e),
      iconYOffset: n.iconYOffset(t, e),
      iconXOffsetActive: n.iconXOffsetActive(t, e),
      iconYOffsetActive: n.iconYOffsetActive(t, e),
      textColorActive: n.textColorActive(t, e),
      textColorCm: n.textColorCm(t, e),
      textColor: n.textColor(t, e),
      header: n.header(t, e),
      headerSize: n.headerSize(t, e),
      footer: n.footer(t, e),
      footerSize: n.footerSize(t, e),
      alias: n.alias(t, e),
      value: n.value(t, e),
      valueSize: n.valueSize(t, e),
      valueSizeActive: n.valueSizeActive(t, e),
      backgroundColor: n.backgroundColor(t, e),
      backgroundColorActive: n.backgroundColorActive(t, e),
      background: n.background(t, e),
      backgroundActive: n.backgroundActive(t, e),
      frameBackgroundColor: n.frameBackgroundColor(t, e),
      frameBackgroundColorActive: n.frameBackgroundColorActive(t, e),
      frameBackground: n.frameBackground(t, e),
      frameBackgroundActive: n.frameBackgroundActive(t, e)
    };
  }
  Bt = function(t) {
    const { theme: e, widget: n, widget: { data: a }, getPropertyValue: s } = f.useContext(Y), i = a[`${t}Object`], c = s(t), u = i == null ? void 0 : i.name, { fontStyles: d, textStyles: r, backgroundStyles: m } = ne(n.style), g = f.useCallback(gt, []), o = f.useCallback(($, z = "") => {
      const k = `${$}${z}`;
      return ft(a, k);
    }, [
      a
    ]), l = f.useMemo(() => mt(a) ? ht(a) : vt(), [
      a
    ]), b = f.useMemo(() => pt({
      rxData: a,
      oidObject: i,
      oidName: u,
      theme: e,
      fontStyles: d,
      textStyles: r,
      backgroundStyles: m,
      formatSize: g,
      getDataValue: o,
      widgetResolver: l
    }), [
      a,
      i,
      u,
      e,
      d,
      r,
      m,
      g,
      o,
      l
    ]), h = f.useCallback(($ = "", z = false) => bt($, z, b), [
      b
    ]), { states: C, widgetStates: y, minValue: M, maxValue: H } = f.useMemo(() => {
      const $ = {};
      let z = null, k = null;
      const A = [], w = i == null ? void 0 : i.type, Q = (i == null ? void 0 : i.commonStates) || {}, N = Object.entries(Q);
      if (w === "number" || w === "string" || w === "boolean" || w === "mixed") {
        const S = a.ignoreCommonStates === false ? a.values_count : N.length > 0 ? N.length : a.values_count;
        for (let _ = 1; _ <= S; _++) {
          const O = o("value", String(_)), F = a[`alias${_}`], P = i == null ? void 0 : i.unit;
          if (O === void 0 || !/\S/.test(String(O))) continue;
          const j = N.find(([he]) => he === String(O)), ie = j ? w === "number" ? Number(j[0]) : String(j[0]) : w === "number" ? Number(O) : O, me = String(c) === String(ie), x = h(_, me);
          A.push({
            value: ie,
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
          const ge = String(j ? j[0] : O);
          $[ge] = F && String(F).trim() !== "" ? F : `${O}${P}`;
        }
      }
      if (w === "number" && A.length) {
        const S = A.map((_) => typeof _.value == "number" ? _.value : NaN).filter((_) => !isNaN(_));
        S.length > 0 && (z = Math.min(...S), k = Math.max(...S));
      }
      return {
        states: A,
        widgetStates: $,
        minValue: z,
        maxValue: k
      };
    }, [
      i == null ? void 0 : i.type,
      i == null ? void 0 : i.commonStates,
      i == null ? void 0 : i.unit,
      a,
      o,
      c,
      h
    ]), { data: E, activeIndex: D } = f.useMemo(() => {
      switch (i == null ? void 0 : i.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const z = C.findIndex((k) => String(k.value) === String(c));
          return z !== -1 ? {
            data: h(z + 1, true),
            activeIndex: z + 1
          } : {
            data: h("", true),
            activeIndex: void 0
          };
        }
        default:
          return {
            data: h("", true),
            activeIndex: void 0
          };
      }
    }, [
      i,
      c,
      C,
      h
    ]);
    return {
      widgetStates: y,
      minValue: M,
      maxValue: H,
      data: E,
      activeIndex: D,
      oidValue: c,
      states: C,
      resolveStyleData: h
    };
  };
});
export {
  Y as C,
  K as D,
  __tla,
  dt as a,
  X as b,
  jt as c,
  _t as d,
  T as e,
  gt as f,
  R as g,
  tt as h,
  st as i,
  ne as j,
  Z as k,
  Ot as l,
  Tt as m,
  At as n,
  wt as o,
  le as p,
  zt as q,
  de as r,
  It as s,
  $t as t,
  Bt as u,
  lt as v,
  kt as w
};
