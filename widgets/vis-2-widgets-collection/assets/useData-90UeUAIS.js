import { u as ve, j as h, s as le, h as he, i as pe, z as be, p as ce, a as Se, A as Q, D as xe, G as Ce, B as I, T as Y, b as ye, I as ke, E as ze, P as re, __tla as __tla_0 } from "./tinycolor-B_2EitDy.js";
import { s as $e, g as _e, a as H, v as Ae, i as Te, c as we, b as ie, w as Ie, d as Oe, e as je, T as se, G as q, u as Be, C as Me, __tla as __tla_1 } from "./usePopoverPositioning-CvdKfQR6.js";
import { v as f, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { I as Ee, __tla as __tla_3 } from "./Delete-lESTXvkD.js";
let X, J, rt, N, $t, St, A, lt, W, Le, ot, ee, K, zt, xt, Ct, yt, ae, pt, et, kt, bt, _t, ht;
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
  let Pe, Fe, Ve;
  Pe = (t) => {
    const { absolute: e, children: n, classes: a, flexItem: s, light: i, orientation: l, textAlign: u, variant: d } = t;
    return pe({
      root: [
        "root",
        e && "absolute",
        d,
        i && "light",
        l === "vertical" && "vertical",
        s && "flexItem",
        n && "withChildren",
        n && l === "vertical" && "withChildrenVertical",
        u === "right" && l !== "vertical" && "textAlignRight",
        u === "left" && l !== "vertical" && "textAlignLeft"
      ],
      wrapper: [
        "wrapper",
        l === "vertical" && "wrapperVertical"
      ]
    }, be, a);
  };
  Fe = le("div", {
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
  })(ce(({ theme: t }) => ({
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
          borderColor: t.vars ? `rgba(${t.vars.palette.dividerChannel} / 0.08)` : Se(t.palette.divider, 0.08)
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
  Ve = le("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (t, e) => {
      const { ownerState: n } = t;
      return [
        e.wrapper,
        n.orientation === "vertical" && e.wrapperVertical
      ];
    }
  })(ce(({ theme: t }) => ({
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
  J = f.forwardRef(function(e, n) {
    const a = ve({
      props: e,
      name: "MuiDivider"
    }), { absolute: s = false, children: i, className: l, orientation: u = "horizontal", component: d = i || u === "vertical" ? "div" : "hr", flexItem: r = false, light: m = false, role: g = d !== "hr" ? "separator" : void 0, textAlign: o = "center", variant: c = "fullWidth", ...b } = a, v = {
      ...a,
      absolute: s,
      component: d,
      flexItem: r,
      light: m,
      orientation: u,
      role: g,
      textAlign: o,
      variant: c
    }, z = Pe(v);
    return h.jsx(Fe, {
      as: d,
      className: he(z.root, l),
      role: g,
      ref: n,
      ownerState: v,
      "aria-orientation": g === "separator" && (d !== "hr" || u === "vertical") ? u : void 0,
      ...b,
      children: i ? h.jsx(Ve, {
        className: z.wrapper,
        ownerState: v,
        children: i
      }) : null
    });
  });
  J && (J.muiSkipListHighlight = true);
  let De;
  De = [
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
  ee = (t) => f.useMemo(() => {
    if (!t) return {
      backgroundStyles: void 0,
      borderStyles: void 0,
      textStyles: void 0,
      fontStyles: void 0,
      boxStyles: void 0
    };
    const e = {}, n = {}, a = {}, s = {}, i = {};
    return De.forEach((l) => {
      const u = t[l];
      u !== void 0 && (l.includes("background") ? e[l] = u : l.includes("border") ? n[l] = u : l.includes("font") || l.includes("line-height") || l.includes("letter-spacing") || l.includes("word-spacing") ? s[l] = u : l.includes("text") || l.includes("color") ? a[l] = u : i[l] = u);
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
  function He() {
    return f.useSyncExternalStore($e, _e);
  }
  const We = [
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
  function Re(t) {
    const { typography: e } = t;
    if (!e) return t;
    const n = {
      ...e
    };
    for (const a of We) delete n[a];
    return delete n.pxToRem, {
      ...t,
      typography: n
    };
  }
  function ue(t, e, n) {
    const [a, s] = f.useState("");
    f.useEffect(() => {
      let r = true;
      const m = (g, o) => {
        r && s(typeof (o == null ? void 0 : o.val) == "string" ? o.val : "");
      };
      return t.getState(H).then((g) => {
        r && s(typeof (g == null ? void 0 : g.val) == "string" ? g.val : "");
      }).catch((g) => console.error(`Cannot read theme state ${H}: ${g}`)), t.subscribeState(H, m).catch((g) => console.error(`Cannot subscribe theme state ${H}: ${g}`)), () => {
        r = false;
        try {
          t.unsubscribeState(H, m);
        } catch (g) {
          console.error(`Cannot unsubscribe theme state ${H}: ${g}`);
        }
      };
    }, [
      t
    ]);
    const i = f.useMemo(() => {
      if (!a) return {};
      try {
        const r = Ae(JSON.parse(a));
        return r.isValid ? r.theme ?? {} : {};
      } catch {
        return {};
      }
    }, [
      a
    ]), l = He(), u = l ?? i;
    f.useEffect(() => {
      Te(u.googleFonts);
    }, [
      u.googleFonts
    ]);
    const d = f.useRef(i);
    return f.useEffect(() => {
      const r = d.current !== i;
      d.current = i, l && r && JSON.stringify(l) === JSON.stringify(i) && we();
    }, [
      l,
      i
    ]), f.useMemo(() => {
      const r = Re(e), m = ie(r, "palette.primary.main"), g = Ie(Oe(u), m), o = Q(Q(r, n ?? {}), g), c = ie(o, "corners"), b = je(c), v = b ? Q(o, {
        shape: {
          borderRadius: (c == null ? void 0 : c.topLeft) ?? 4
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: b
              }
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: b
              }
            }
          }
        }
      }) : o;
      return xe(v);
    }, [
      e,
      n,
      u
    ]);
  }
  let L, de;
  L = (t) => t.startsWith("&") || t.includes(" ") || t.startsWith("@") ? t : t.replace(/-([a-z])/g, (e, n) => n.toUpperCase());
  de = (t) => {
    const e = Object.fromEntries(Object.entries(t).map(([n, a]) => {
      if (Array.isArray(a)) {
        const s = a.filter((i) => i != null);
        return [
          L(n),
          s.length > 0 ? s : void 0
        ];
      }
      return typeof a == "object" && a !== null ? [
        L(n),
        de(a)
      ] : [
        L(n),
        a
      ];
    }).filter(([, n]) => n != null));
    return Object.keys(e).length > 0 ? e : void 0;
  };
  K = (t) => {
    if (!t) return {};
    const e = Object.fromEntries(Object.entries(t).map(([n, a]) => {
      const s = L(n);
      if (Array.isArray(a)) {
        const i = a.filter((l) => l != null);
        return [
          s,
          i.length > 0 ? i : void 0
        ];
      }
      if (typeof a == "object" && a !== null) {
        const i = de(a);
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
  X = f.createContext({});
  function Ge({ children: t, context: e }) {
    const n = e.theme, a = e.widget, s = e.socket, { fontStyles: i, textStyles: l } = ee(a.style || {}), u = f.useMemo(() => ({
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              ...K(i),
              ...K(l)
            }
          }
        }
      }
    }), [
      i,
      l
    ]), d = ue(s, n, u);
    return h.jsxs(se, {
      theme: d,
      children: [
        h.jsx(Ce, {
          styles: {
            html: {
              boxSizing: "border-box"
            },
            "*, *::before, *::after": {
              boxSizing: "inherit"
            }
          }
        }),
        h.jsx(X.Provider, {
          value: {
            ...e,
            theme: d
          },
          children: t
        })
      ]
    });
  }
  ht = function(t, e) {
    return h.jsx(Ge, {
      context: e,
      children: t
    });
  };
  let B;
  A = ({ dividerText: t = "" }) => {
    const e = {
      position: "absolute",
      left: 0,
      width: "100%"
    };
    return h.jsx(I, {
      sx: {
        display: "inline-block",
        pt: 1.5,
        pb: t ? 2 : 1.5
      },
      children: t ? h.jsx(J, {
        sx: e,
        children: h.jsx(Y, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: q.t(t)
        })
      }) : h.jsx(J, {
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
  function te(t) {
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
  function Ne(t) {
    if (t == null || typeof t != "string") return false;
    const e = t.trim();
    return e === "" ? false : B.GRADIENT_PREFIX.test(e);
  }
  function Xe(t) {
    if (!t || typeof t != "string") return null;
    const e = t.match(B.HEX);
    if (!e) return null;
    let n = e[1];
    n.length === 3 && (n = n.split("").map((u) => u + u).join(""));
    const a = parseInt(n.substring(0, 2), 16), s = parseInt(n.substring(2, 4), 16), i = parseInt(n.substring(4, 6), 16);
    let l = 1;
    if (n.length === 8) {
      const u = parseInt(n.substring(6, 8), 16);
      l = Math.round(u / 255 * 1e3) / 1e3;
    }
    return {
      r: a,
      g: s,
      b: i,
      a: l
    };
  }
  function Ye(t) {
    if (!t || typeof t != "string" || !t.match(B.RGB)) return null;
    const n = t.match(/\d+\.?\d*/g);
    if (!n || n.length < 3) return null;
    const a = parseInt(n[0], 10), s = parseInt(n[1], 10), i = parseInt(n[2], 10), l = n[3] !== void 0 ? parseFloat(n[3]) : 1;
    return a < 0 || a > 255 || s < 0 || s > 255 || i < 0 || i > 255 || l < 0 || l > 1 ? null : {
      r: a,
      g: s,
      b: i,
      a: Math.round(l * 1e3) / 1e3
    };
  }
  function R(t) {
    if (!t || typeof t != "string") return null;
    const e = t.trim();
    return e.startsWith("#") ? Xe(e) : e.toLowerCase().startsWith("rgb") ? Ye(e) : null;
  }
  function oe(t) {
    if (!t || typeof t != "string") return null;
    const e = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi, n = Array.from(t.matchAll(e));
    if (n.length < 2) return null;
    const a = n.map((s, i) => {
      const l = s[1];
      let u;
      return s[2] ? u = parseFloat(s[2]) : u = i / (n.length - 1) * 100, {
        color: l,
        position: u
      };
    });
    return a.sort((s, i) => s.position - i.position), a;
  }
  function qe(t) {
    if (!t || t.length < 2) return null;
    const e = t.find((o) => o.position === 50);
    if (e) {
      const o = R(e.color);
      return o ? o.a === 1 ? `rgb(${o.r}, ${o.g}, ${o.b})` : `rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})` : null;
    }
    let n = null, a = null;
    for (let o = 0; o < t.length; o++) if (t[o].position <= 50 && (n = t[o]), t[o].position > 50 && !a) {
      a = t[o];
      break;
    }
    if (!a && n) {
      const o = R(n.color);
      return o ? o.a === 1 ? `rgb(${o.r}, ${o.g}, ${o.b})` : `rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})` : null;
    }
    if (!n && a) {
      const o = R(a.color);
      return o ? o.a === 1 ? `rgb(${o.r}, ${o.g}, ${o.b})` : `rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})` : null;
    }
    if (!n || !a) return null;
    const s = R(n.color), i = R(a.color);
    if (!s || !i) return null;
    const l = a.position - n.position;
    if (l === 0) {
      const o = i;
      return o.a === 1 ? `rgb(${o.r}, ${o.g}, ${o.b})` : `rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})`;
    }
    const u = (50 - n.position) / l, d = Math.round(s.r + (i.r - s.r) * u), r = Math.round(s.g + (i.g - s.g) * u), m = Math.round(s.b + (i.b - s.b) * u), g = Math.round((s.a + (i.a - s.a) * u) * 1e3) / 1e3;
    return g === 1 ? `rgb(${d}, ${r}, ${m})` : `rgba(${d}, ${r}, ${m}, ${g})`;
  }
  Le = function(t) {
    if (t == null || typeof t != "string") return null;
    const e = t.trim();
    if (e === "") return null;
    if (!B.GRADIENT_PREFIX.test(e)) return R(e) ? e : null;
    try {
      const a = oe(e);
      return a ? qe(a) : null;
    } catch {
      return null;
    }
  };
  pt = function(t) {
    if (t == null || typeof t != "string") return null;
    const e = t.trim();
    if (!e || !B.GRADIENT_PREFIX.test(e)) return null;
    const n = oe(e);
    return n && n.length ? n.map((a) => a.color) : null;
  };
  const Ue = {
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
  }, Je = (t) => {
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
      for (const l of n) {
        const u = Ue[l];
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
  bt = function(t) {
    if (t == null || typeof t != "string") return null;
    const e = t.trim();
    if (!e.startsWith("linear-gradient(")) return null;
    const n = e.indexOf("("), a = e.lastIndexOf(")");
    if (n === -1 || a === -1 || a < n) return null;
    const s = e.slice(n + 1, a), i = s.search(/#[0-9a-fA-F]|rgba?\(/i), l = i === -1 ? "" : s.slice(0, i).replace(/[,;]?\s*$/, ""), u = i === -1 ? s : s.slice(i), [d, r] = Je(l), m = oe(`linear-gradient(${u})`);
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
  function U(t, e) {
    switch (t) {
      case "primary":
        return e.palette.primary.main;
      case "text":
        return e.palette.text.primary;
      default:
        return "";
    }
  }
  function Ke(t, e) {
    if (!(!e || e.length === 0)) for (const n of e) {
      if (!n) continue;
      const a = t[n];
      if (typeof a != "string" || a.trim() === "") continue;
      const s = te(a);
      if (s.isValid && s.normalizedValue.trim() !== "") return s.normalizedValue;
    }
  }
  function Ze(t, e, n, a) {
    const s = t.name ? e[t.name] : void 0;
    if (typeof s == "string" && s.trim() !== "") {
      const l = te(s);
      if (l.isValid && l.normalizedValue.trim() !== "") return l.normalizedValue;
    }
    const i = Ke(e, t.fallbackFields);
    if (i !== void 0) return i;
    if (t.inheritTextStyle === true) {
      const l = a == null ? void 0 : a.color;
      if (typeof l == "string" && l.trim() !== "") return l;
    }
    return U(t.terminal, n);
  }
  function Qe(t) {
    var _a, _b, _c, _d, _e2;
    const e = t.context, n = ((_a = t.selectedWidgets) == null ? void 0 : _a[0]) ?? t.selectedWidget;
    return n ? (_e2 = (_d = (_c = (_b = e == null ? void 0 : e.views) == null ? void 0 : _b[t.selectedView]) == null ? void 0 : _c.widgets) == null ? void 0 : _d[n]) == null ? void 0 : _e2.style : void 0;
  }
  et = function({ field: t, data: e, onDataChange: n, props: a }) {
    const s = t.name, i = e[s], [l, u] = f.useState(i || ""), [d, r] = f.useState(false), [m, g] = f.useState(null), o = f.useRef(i), c = f.useRef(null), b = a.context.theme, v = ue(a.context.socket, a.context.theme), z = f.useMemo(() => Qe(a), [
      a
    ]), k = f.useMemo(() => Ze(t, e, v, z), [
      t,
      e,
      v,
      z
    ]), M = typeof i == "string" && i.trim() !== "", { anchorOrigin: V, transformOrigin: E, maxHeight: D, setContentRef: $, popoverActionRef: y } = Be(m, !!m);
    f.useEffect(() => () => {
      c.current !== null && clearTimeout(c.current);
    }, []);
    const C = f.useCallback((S, _ = false) => {
      if (c.current !== null && (clearTimeout(c.current), c.current = null), S == null) {
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
      const P = te(S);
      if (u(S), !P.isValid) {
        r(true);
        return;
      }
      r(false);
      let F;
      if (t.noGradient === true) {
        const j = Le(P.normalizedValue);
        if (j === null) {
          r(true);
          return;
        }
        F = j;
      } else F = P.normalizedValue || null;
      o.current = F, _ ? c.current = setTimeout(() => {
        c.current = null, n({
          [s]: F
        });
      }, 150) : n({
        [s]: F
      });
    }, [
      s,
      t.noGradient,
      n
    ]), T = f.useCallback((S) => C(S, true), [
      C
    ]), w = f.useCallback((S) => C(S.target.value), [
      C
    ]), Z = f.useCallback(() => C(null), [
      C
    ]), G = !!m;
    return f.useEffect(() => {
      i !== o.current && (o.current = i, u(i || ""), r(false));
    }, [
      i
    ]), h.jsx(h.Fragment, {
      children: h.jsxs(se, {
        theme: b,
        children: [
          h.jsxs(I, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              h.jsx(ye, {
                variant: "standard",
                fullWidth: true,
                value: l,
                error: d,
                placeholder: M ? "" : q.t("color_inherit"),
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
              M && h.jsx(ke, {
                onClick: Z,
                title: q.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: h.jsx(Ee, {})
              }),
              h.jsx(I, {
                onClick: (S) => g(S.currentTarget),
                title: q.t("choose_color"),
                sx: {
                  mt: l ? "4px" : "-2px",
                  px: "4px",
                  py: l ? "4px" : "3px",
                  backgroundColor: k ? b.name === "light" ? b.palette.common.white : "#121212" : "transparent",
                  borderRadius: "1px",
                  display: "inline-block",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                  border: d ? `1px solid ${b.palette.error.main}` : k ? `1px solid ${b.name === "light" ? b.palette.grey[400] : b.palette.common.black}` : `1px dashed ${b.name === "light" ? b.palette.grey[400] : b.palette.text.secondary}`,
                  opacity: d ? 0.6 : 1
                },
                children: h.jsx(I, {
                  sx: {
                    width: k ? "36px" : "38px",
                    height: k ? "14px" : "18px",
                    borderRadius: "2px",
                    background: d ? "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)" : k
                  }
                })
              })
            ]
          }),
          h.jsx(ze, {
            action: y,
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
            open: G,
            anchorEl: m,
            onClose: () => g(null),
            transformOrigin: E,
            anchorOrigin: V,
            children: h.jsx(I, {
              ref: $,
              sx: {
                borderRadius: "6px"
              },
              children: h.jsx(Me, {
                value: l || k || v.palette.primary.main,
                onChange: T,
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
  N = function(t) {
    const { name: e, label: n, default: a = "", fallbackFields: s, noGradient: i, terminal: l, inheritTextStyle: u, hidden: d } = t, r = {
      name: e,
      label: n,
      default: a,
      type: "custom",
      component: (m, g, o, c) => h.jsx(et, {
        field: m,
        data: g,
        onDataChange: o,
        props: c
      })
    };
    return s !== void 0 && (r.fallbackFields = s), i !== void 0 && (r.noGradient = i), l !== void 0 && (r.terminal = l), u !== void 0 && (r.inheritTextStyle = u), d !== void 0 && (r.hidden = d), r;
  };
  St = function(t, e, n) {
    return N({
      name: t,
      label: e,
      fallbackFields: [
        "sliderColor"
      ],
      terminal: "primary",
      ...n
    });
  };
  xt = (t, e) => (n) => n[t] !== e;
  Ct = [
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
  yt = [
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
  kt = [
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
  zt = function(t, e) {
    const n = {
      label: "",
      type: "custom",
      component: () => h.jsx(A, {
        dividerText: t
      })
    };
    return (e == null ? void 0 : e.hidden) !== void 0 && (n.hidden = e.hidden), n;
  };
  let tt, nt;
  ae = (t) => {
    if (!t || typeof t != "string") return false;
    const e = t.trim();
    return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
  };
  $t = (t) => {
    const { groupName: e = "", allFields: n = true } = t || {}, a = [
      {
        label: "",
        type: "custom",
        component: () => h.jsx(A, {
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
        hidden: (i, l) => {
          let u = true;
          const d = l !== void 0 ? l : e, r = i[`icon${d}`], m = i[`iconSmall${d}`];
          return (d === "" || d === "Active") && (u = false), l !== void 0 && (u = !i.iconColor && !i.enableIconColorMask && !i[`iconColor${l}`] && !ae(r) && !ae(m)), u;
        }
      },
      N({
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
        component: () => h.jsx(A, {
          dividerText: "header"
        }),
        hidden: (i, l) => i.noHeader && !n
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
        component: () => h.jsx(A, {
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
        hidden: (i, l) => {
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
        component: () => h.jsx(A, {
          dividerText: "footer"
        }),
        hidden: (i, l) => i.noFooter && !n
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
        component: () => h.jsx(A, {
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
      N({
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
        component: () => h.jsx(A, {})
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
        component: () => h.jsx(A, {})
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
        component: () => h.jsx(A, {
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
        component: () => h.jsx(A, {
          dividerText: "background"
        })
      },
      N({
        name: `background${e}`,
        label: "background",
        fallbackFields: [],
        terminal: "transparent"
      }),
      {
        label: "",
        type: "custom",
        component: () => h.jsx(A, {
          dividerText: "frame_background"
        })
      },
      N({
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
      return a.filter((l) => !i.includes(l.name));
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
  tt = () => {
    const { isSignalVisible: t, refService: e, widget: n } = f.useContext(X), a = f.useMemo(() => {
      const i = [], l = Number(n.data["signals-count"]) || 0;
      for (let u = 0; u < l; u++) t(u) && i.push(u);
      return i;
    }, [
      n.data,
      t
    ]), s = f.useMemo(() => {
      const i = {};
      return a.forEach((l) => {
        i[l] = n.data[`signals-color-${l}`];
      }), i;
    }, [
      n.data,
      a
    ]);
    f.useEffect(() => {
      if (!(e == null ? void 0 : e.current)) return;
      const l = e.current.children, u = [];
      Array.from(l).forEach((d) => {
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
  ot = (t, e = 28) => {
    const [n, a] = f.useState({
      width: void 0,
      height: void 0,
      maxWidth: void 0
    }), s = f.useCallback((l) => {
      if (l.length === 0) return;
      const u = l[0], { width: d, height: r } = u.contentRect, m = Math.round(d), g = Math.round(r), o = m <= g + e + 12 ? m - e - 12 : g;
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
      const l = new ResizeObserver(s);
      try {
        l.observe(i);
      } catch (u) {
        console.warn("ResizeObserver failed to observe element:", u);
        return;
      }
      return () => {
        try {
          l.disconnect();
        } catch (u) {
          console.warn("ResizeObserver cleanup failed:", u);
        }
      };
    }, [
      i,
      s
    ]), n;
  };
  nt = (t) => {
    const { widget: e } = f.useContext(X), [n, a] = f.useState("100%"), [s, i] = f.useState("100%"), { width: l, height: u } = ot(t), d = f.useMemo(() => ({
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
      if (!l || !u || l < 0 || u < 0) return;
      if (!d.isSquare && !d.isCircle) {
        a("100%"), i("100%");
        return;
      }
      if (!(l >= r && u >= r)) {
        a("0px"), i("0px");
        return;
      }
      const g = l - r, o = u - r, c = Math.min(g, o);
      a(`${c}px`), i(`${c}px`);
    }, [
      l,
      u,
      r,
      d.isSquare,
      d.isCircle
    ]), {
      width: n,
      height: s
    };
  };
  W = function(t) {
    return t == null || typeof t != "string" || t.trim() === "" ? null : Ne(t) ? t : null;
  };
  rt = f.forwardRef(({ children: t, data: e, oidValue: n = null, isValidType: a = true, bgActive: s = true, sx: i = {} }, l) => {
    const u = f.useRef(null), d = f.useRef(null), [r, m] = f.useState(null), g = f.useRef(null), o = f.useRef(null), c = f.useContext(X);
    if (!c) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: b, widget: v } = c, { backgroundStyles: z, borderStyles: k } = ee(v.style), { width: M, height: V } = nt(r);
    tt();
    const E = v.data.oidObject, D = E == null ? void 0 : E._id, $ = f.useMemo(() => {
      if (v.data.noFooter) return "";
      const T = n || n === 0 || String(n) === "false" ? `${n}${(E == null ? void 0 : E.unit) ?? ""}` : "";
      return e.footer || e.alias || e.value || T || "";
    }, [
      e.footer,
      e.alias,
      e.value,
      n,
      E == null ? void 0 : E.unit,
      v.data.noFooter
    ]), y = f.useMemo(() => K({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      ...z,
      background: b ? e.frameBackground : e.frameBackground || "transparent",
      backgroundColor: b ? W(e.frameBackground) ? void 0 : e.frameBackground : W(e.frameBackground) ? "transparent" : e.frameBackground,
      borderColor: b ? "" : e.frameBackground || (k == null ? void 0 : k["border-color"])
    }), [
      z,
      k,
      e.frameBackground,
      b
    ]), C = f.useMemo(() => K({
      overflow: "hidden",
      width: M,
      height: V,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: s && b ? e.background : s ? e.background || "transparent" : b ? void 0 : "transparent",
      borderColor: b ? "" : e.background || (k == null ? void 0 : k["border-color"]),
      borderRadius: v.data.circle || v.data.ellipse ? "50%" : void 0,
      ...i
    }), [
      M,
      V,
      s,
      b,
      e.background,
      k,
      v.data.circle,
      v.data.ellipse,
      i
    ]);
    return f.useEffect(() => {
      v.data.noHeader || !g.current || (g.current.innerHTML = e.header);
    }, [
      e.header,
      v.data.noHeader
    ]), f.useEffect(() => {
      v.data.noFooter || !o.current || (o.current.innerHTML = String($));
    }, [
      $,
      v.data.noFooter
    ]), f.useImperativeHandle(l, () => ({
      get paper0() {
        return (u == null ? void 0 : u.current) ?? null;
      },
      get paper1() {
        return (d == null ? void 0 : d.current) ?? null;
      },
      get header() {
        return (g == null ? void 0 : g.current) ?? null;
      }
    })), h.jsxs(re, {
      ref: u,
      className: "BASE-PAPER-0",
      square: v.data.squaredCorner,
      variant: v.data.outlinedFrame ? "outlined" : "elevation",
      sx: y,
      children: [
        !!a && h.jsxs(h.Fragment, {
          children: [
            h.jsx(I, {
              sx: {
                width: v.data.noHeader ? "0%" : "100%",
                height: v.data.noHeader ? "0%" : "auto",
                mt: (v.data.basePadding ?? 8) / 2,
                mb: -(v.data.basePadding ?? 8) / 2
              },
              children: h.jsx(Y, {
                ref: g,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.headerSize,
                  background: W(e.textColorCm),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: W(e.textColorCm) ? "transparent" : e.textColorCm
                }
              })
            }),
            h.jsx(I, {
              className: "BASE-BOX-1",
              ref: m,
              sx: {
                overflow: "hidden",
                p: v.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: h.jsx(re, {
                ref: d,
                className: "BASE-PAPER-1",
                elevation: v.data.outlined ? 0 : Number(v.data.baseElevation) || 0,
                square: !v.data.basePadding || v.data.squaredCorner,
                variant: v.data.outlined ? "outlined" : "elevation",
                sx: C,
                children: t
              })
            }),
            h.jsx(I, {
              sx: {
                width: v.data.noFooter ? "0%" : "100%",
                height: v.data.noFooter ? "0%" : "auto",
                mt: -(v.data.basePadding ?? 8) / 2,
                mb: (v.data.basePadding ?? 8) / 2
              },
              children: h.jsx(Y, {
                ref: o,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.footerSize,
                  background: W(e.textColorCm),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: W(e.textColorCm) ? "transparent" : e.textColorCm
                }
              })
            })
          ]
        }),
        !a && h.jsx(I, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: h.jsx(Y, {
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
  rt.displayName = "CollectionBase";
  function it(t, e) {
    return t[e];
  }
  function at(t) {
    return typeof t == "object" && t !== null && "sliderOrientation" in t;
  }
  lt = (t) => typeof t == "number" ? `calc(${t / 100}rem * 0.875)` : void 0;
  function ct(t) {
    return {
      markerIconSize: t.markerIconSize,
      markerTextColor: t.markerTextColor,
      markerTextSize: t.markerTextSize,
      markerIconColor: t.markerIconColor
    };
  }
  function st(t) {
    return {};
  }
  function p(t) {
    for (const e of t) if (e.condition !== false && e.value !== void 0 && e.value !== null && !(typeof e.value == "string" && e.value.trim() === "")) return e.value;
  }
  function ut(t) {
    const { rxData: e, oidObject: n, oidName: a, theme: s, fontStyles: i, textStyles: l, backgroundStyles: u, formatSize: d, getDataValue: r, widgetResolver: m } = t, g = (o) => o && String(o) !== "" ? String(o) : void 0;
    return {
      icon: (o, c) => e.noIcon ? "" : p([
        {
          condition: c,
          value: r("icon", "Active")
        },
        {
          condition: c,
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
      iconActive: (o, c) => !c || e.noIcon ? "" : p([
        {
          value: r("icon", String(o))
        },
        {
          value: r("iconSmall", String(o))
        }
      ]) ?? "",
      iconSizeCm: (o, c) => p([
        {
          condition: r("iconSize", "") === 0,
          value: "0px"
        },
        {
          condition: !!r("iconSize", ""),
          value: `calc(24px * ${r("iconSize", "")} / 100)`
        }
      ]) ?? "24px",
      iconSize: (o, c) => p([
        {
          condition: c && r("iconSize", "Active") === 0,
          value: "0px"
        },
        {
          condition: c && !!r("iconSize", "Active"),
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
      iconSizeActive: (o, c) => c ? p([
        {
          condition: r("iconSize", String(o)) === 0,
          value: "0px"
        },
        {
          condition: !!r("iconSize", String(o)),
          value: `calc(24px * ${r("iconSize", String(o))} / 100)`
        }
      ]) ?? "24px" : "24px",
      iconSizeOnly: (o, c) => p([
        {
          condition: c && (!!r("iconSize", "Active") || r("iconSize", "Active") === 0),
          value: `${r("iconSize", "Active")}%`
        },
        {
          condition: !!r("iconSize", String(o)) || r("iconSize", String(o)) === 0,
          value: `${r("iconSize", String(o))}%`
        }
      ]) ?? "100%",
      iconSizeActiveOnly: (o, c) => c ? p([
        {
          value: r("iconSize", String(o))
        }
      ]) ?? void 0 : void 0,
      iconWidth: (o, c) => p([
        {
          condition: c,
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
      iconHeight: (o, c) => p([
        {
          condition: c,
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
      forceColorMaskCm: (o, c) => p([
        {
          value: r("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMask: (o, c) => p([
        {
          condition: c,
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
      forceColorMaskActive: (o, c) => c ? p([
        {
          value: r("enableIconColorMask", String(o))
        }
      ]) ?? false : false,
      iconColor: (o, c) => p([
        {
          condition: c,
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
      ]) ?? U("primary", s),
      iconColorActive: (o, c) => c ? p([
        {
          value: r("iconColor", String(o))
        }
      ]) ?? "" : "",
      iconHover: (o, c) => p([
        {
          value: e.iconHover ? `${e.iconHover}%` : void 0
        }
      ]) ?? "",
      iconHoverActive: (o, c) => c ? p([
        {
          value: r("iconHover", String(o)) ? `${r("iconHover", String(o))}%` : void 0
        }
      ]) ?? void 0 : void 0,
      iconXOffsetCm: (o, c) => p([
        {
          value: r("iconXOffset", "")
        }
      ]) ?? "0px",
      iconYOffsetCm: (o, c) => p([
        {
          value: r("iconYOffset", "")
        }
      ]) ?? "0px",
      iconXOffset: (o, c) => p([
        {
          condition: c,
          value: r("iconXOffset", "Active")
        },
        {
          value: r("iconXOffset", String(o))
        }
      ]) ?? "0px",
      iconYOffset: (o, c) => p([
        {
          condition: c,
          value: r("iconYOffset", "Active")
        },
        {
          value: r("iconYOffset", String(o))
        }
      ]) ?? "0px",
      iconXOffsetActive: (o, c) => c ? p([
        {
          condition: !r("iconXOffset", String(o)),
          value: "0px"
        },
        {
          value: r("iconXOffset", String(o))
        }
      ]) ?? "0px" : "0px",
      iconYOffsetActive: (o, c) => c ? p([
        {
          condition: !r("iconYOffset", String(o)),
          value: "0px"
        },
        {
          value: r("iconYOffset", String(o))
        }
      ]) ?? "0px" : "0px",
      textColorActive: (o, c) => c ? p([
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
      textColorCm: (o, c) => p([
        {
          condition: typeof r("textColor", "") == "string",
          value: r("textColor", "")
        },
        {
          condition: typeof (l == null ? void 0 : l.color) == "string",
          value: l == null ? void 0 : l.color
        }
      ]) ?? U("text", s),
      textColor: (o, c) => p([
        {
          condition: c && typeof r("textColor", "Active") == "string",
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
          condition: typeof (l == null ? void 0 : l.color) == "string",
          value: l == null ? void 0 : l.color
        }
      ]) ?? U("text", s),
      fontSize: (o, c) => p([
        {
          condition: c && typeof e.valueSizeActive == "number",
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
      headerSize: (o, c) => p([
        {
          condition: c && typeof r("headerSize", "Active") == "number",
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
      footerSize: (o, c) => p([
        {
          condition: c && typeof r("footerSize", "Active") == "number",
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
      valueSize: (o, c) => p([
        {
          condition: c && typeof r("valueSize", "Active") == "number",
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
      valueSizeActive: (o, c) => c ? p([
        {
          value: typeof r("valueSize", String(o)) == "number" ? d(r("valueSize", String(o))) : null
        }
      ]) ?? null : null,
      header: (o, c) => String(p([
        {
          condition: c,
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
      footer: (o, c) => String(p([
        {
          condition: c,
          value: g(r("footer", "Active"))
        },
        {
          value: g(r("footer", String(o)))
        },
        {
          value: g(r("footer", ""))
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      alias: (o, c) => String(r("alias", String(o)) || "").replace(/(\r\n|\n|\r)/gm, ""),
      value: (o, c) => {
        const b = r("value", String(o));
        return b != null ? `${b}${(n == null ? void 0 : n.unit) !== void 0 ? n.unit : ""}` : void 0;
      },
      backgroundColor: (o, c) => p([
        {
          value: e.backgroundColor && e.backgroundColor !== "" ? e.backgroundColor : void 0
        },
        {
          value: u == null ? void 0 : u["background-color"]
        }
      ]) ?? "",
      backgroundColorActive: (o, c) => c ? r("backgroundColor", String(o)) : void 0,
      background: (o, c) => p([
        {
          condition: c,
          value: r("background", "Active")
        },
        {
          value: r("background", String(o))
        },
        {
          value: r("background", "")
        }
      ]) ?? "",
      backgroundActive: (o, c) => c ? r("background", String(o)) : void 0,
      frameBackgroundColor: (o, c) => p([
        {
          value: e.frameBackgroundColor && e.frameBackgroundColor !== "" ? e.frameBackgroundColor : void 0
        },
        {
          value: u == null ? void 0 : u["background-color"]
        }
      ]) ?? "",
      frameBackgroundColorActive: (o, c) => c ? r("frameBackgroundColor", String(o)) : void 0,
      frameBackground: (o, c) => p([
        {
          condition: c,
          value: r("frameBackground", "Active")
        },
        {
          value: r("frameBackground", String(o))
        },
        {
          value: r("frameBackground", "")
        }
      ]) ?? "",
      frameBackgroundActive: (o, c) => c ? r("frameBackground", String(o)) : void 0,
      markerIconSize: (o, c) => m.markerIconSize,
      markerTextColor: (o, c) => m.markerTextColor,
      markerTextSize: (o, c) => m.markerTextSize,
      markerIconColor: (o, c) => m.markerIconColor
    };
  }
  function dt(t = "", e = false, n) {
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
  _t = function(t) {
    const { theme: e, widget: n, widget: { data: a }, getPropertyValue: s } = f.useContext(X), i = a[`${t}Object`], l = s(t), u = i == null ? void 0 : i.name, { fontStyles: d, textStyles: r, backgroundStyles: m } = ee(n.style), g = f.useCallback(lt, []), o = f.useCallback(($, y = "") => {
      const C = `${$}${y}`;
      return it(a, C);
    }, [
      a
    ]), c = f.useMemo(() => at(a) ? ct(a) : st(), [
      a
    ]), b = f.useMemo(() => ut({
      rxData: a,
      oidObject: i,
      oidName: u,
      theme: e,
      fontStyles: d,
      textStyles: r,
      backgroundStyles: m,
      formatSize: g,
      getDataValue: o,
      widgetResolver: c
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
      c
    ]), v = f.useCallback(($ = "", y = false) => dt($, y, b), [
      b
    ]), { states: z, widgetStates: k, minValue: M, maxValue: V } = f.useMemo(() => {
      const $ = {};
      let y = null, C = null;
      const T = [], w = i == null ? void 0 : i.type, Z = (i == null ? void 0 : i.commonStates) || {}, G = Object.entries(Z);
      if (w === "number" || w === "string" || w === "boolean" || w === "mixed") {
        const S = a.ignoreCommonStates === false ? a.values_count : G.length > 0 ? G.length : a.values_count;
        for (let _ = 1; _ <= S; _++) {
          const O = o("value", String(_)), P = a[`alias${_}`], F = i == null ? void 0 : i.unit;
          if (O === void 0 || !/\S/.test(String(O))) continue;
          const j = G.find(([ge]) => ge === String(O)), ne = j ? w === "number" ? Number(j[0]) : String(j[0]) : w === "number" ? Number(O) : O, fe = String(l) === String(ne), x = v(_, fe);
          T.push({
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
          const me = String(j ? j[0] : O);
          $[me] = P && String(P).trim() !== "" ? P : `${O}${F}`;
        }
      }
      if (w === "number" && T.length) {
        const S = T.map((_) => typeof _.value == "number" ? _.value : NaN).filter((_) => !isNaN(_));
        S.length > 0 && (y = Math.min(...S), C = Math.max(...S));
      }
      return {
        states: T,
        widgetStates: $,
        minValue: y,
        maxValue: C
      };
    }, [
      i == null ? void 0 : i.type,
      i == null ? void 0 : i.commonStates,
      i == null ? void 0 : i.unit,
      a,
      o,
      l,
      v
    ]), { data: E, activeIndex: D } = f.useMemo(() => {
      switch (i == null ? void 0 : i.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const y = z.findIndex((C) => String(C.value) === String(l));
          return y !== -1 ? {
            data: v(y + 1, true),
            activeIndex: y + 1
          } : {
            data: v("", true),
            activeIndex: void 0
          };
        }
        default:
          return {
            data: v("", true),
            activeIndex: void 0
          };
      }
    }, [
      i,
      l,
      z,
      v
    ]);
    return {
      widgetStates: k,
      minValue: M,
      maxValue: V,
      data: E,
      activeIndex: D,
      oidValue: l,
      states: z,
      resolveStyleData: v
    };
  };
});
export {
  X as C,
  J as D,
  __tla,
  rt as a,
  N as b,
  $t as c,
  St as d,
  A as e,
  lt as f,
  W as g,
  Le as h,
  ot as i,
  ee as j,
  K as k,
  zt as l,
  xt as m,
  Ct as n,
  yt as o,
  ae as p,
  pt as q,
  et as r,
  kt as s,
  bt as t,
  _t as u,
  ht as w
};
