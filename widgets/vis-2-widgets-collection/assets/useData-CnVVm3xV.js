import { u as pe, j as p, s as le, d as ve, e as he, a2 as Se, m as ce, f as xe, a3 as Ce, a4 as ye, a5 as R, a6 as ke, a7 as ze, a8 as $e, a9 as oe, aa as Ae, ab as _e, ac as J, ad as Oe, ae as je, Z as se, af as Te, l as I, T as Y, G as Z, q as Ie, ag as we, o as Be, I as Ee, ah as Me, ai as Fe, P as ne, __tla as __tla_0 } from "./usePopoverPositioning-CABAc1cn.js";
import { v as f, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
let W, L, ct, D, it, _t, $t, At, X, lt, St, $, at, dt, re, nt, ee, tt, U, zt, xt, kt, Ct, Ot, yt, ht, ie, Xe;
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
  let Ve, Pe, He;
  Ve = (t) => {
    const { absolute: e, children: o, classes: i, flexItem: s, light: a, orientation: l, textAlign: u, variant: d } = t;
    return he({
      root: [
        "root",
        e && "absolute",
        d,
        a && "light",
        l === "vertical" && "vertical",
        s && "flexItem",
        o && "withChildren",
        o && l === "vertical" && "withChildrenVertical",
        u === "right" && l !== "vertical" && "textAlignRight",
        u === "left" && l !== "vertical" && "textAlignLeft"
      ],
      wrapper: [
        "wrapper",
        l === "vertical" && "wrapperVertical"
      ]
    }, Se, i);
  };
  Pe = le("div", {
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
  He = le("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.wrapper,
        o.orientation === "vertical" && e.wrapperVertical
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
  L = f.forwardRef(function(e, o) {
    const i = pe({
      props: e,
      name: "MuiDivider"
    }), { absolute: s = false, children: a, className: l, orientation: u = "horizontal", component: d = a || u === "vertical" ? "div" : "hr", flexItem: r = false, light: m = false, role: b = d !== "hr" ? "separator" : void 0, textAlign: n = "center", variant: c = "fullWidth", ...h } = i, g = {
      ...i,
      absolute: s,
      component: d,
      flexItem: r,
      light: m,
      orientation: u,
      role: b,
      textAlign: n,
      variant: c
    }, A = Ve(g);
    return p.jsx(Pe, {
      as: d,
      className: ve(A.root, l),
      role: b,
      ref: o,
      ownerState: g,
      "aria-orientation": b === "separator" && (d !== "hr" || u === "vertical") ? u : void 0,
      ...h,
      children: a ? p.jsx(He, {
        className: A.wrapper,
        ownerState: g,
        children: a
      }) : null
    });
  });
  L && (L.muiSkipListHighlight = true);
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
  ee = (t) => f.useMemo(() => {
    if (!t) return {
      backgroundStyles: void 0,
      borderStyles: void 0,
      textStyles: void 0,
      fontStyles: void 0,
      boxStyles: void 0
    };
    const e = {}, o = {}, i = {}, s = {}, a = {};
    return Re.forEach((l) => {
      const u = t[l];
      u !== void 0 && (l.includes("background") ? e[l] = u : l.includes("border") ? o[l] = u : l.includes("font") || l.includes("line-height") || l.includes("letter-spacing") || l.includes("word-spacing") ? s[l] = u : l.includes("text") || l.includes("color") ? i[l] = u : a[l] = u);
    }), {
      backgroundStyles: e,
      borderStyles: o,
      textStyles: i,
      fontStyles: s,
      boxStyles: a
    };
  }, [
    t
  ]);
  function De() {
    return f.useSyncExternalStore(Ce, ye);
  }
  const Ne = [
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
  function We(t) {
    const { typography: e } = t;
    if (!e) return t;
    const o = {
      ...e
    };
    for (const i of Ne) delete o[i];
    return delete o.pxToRem, {
      ...t,
      typography: o
    };
  }
  function ue(t, e, o) {
    const [i, s] = f.useState("");
    f.useEffect(() => {
      let r = true;
      const m = (b, n) => {
        r && s(typeof (n == null ? void 0 : n.val) == "string" ? n.val : "");
      };
      return t.getState(R).then((b) => {
        r && s(typeof (b == null ? void 0 : b.val) == "string" ? b.val : "");
      }).catch((b) => console.error(`Cannot read theme state ${R}: ${b}`)), t.subscribeState(R, m).catch((b) => console.error(`Cannot subscribe theme state ${R}: ${b}`)), () => {
        r = false;
        try {
          t.unsubscribeState(R, m);
        } catch (b) {
          console.error(`Cannot unsubscribe theme state ${R}: ${b}`);
        }
      };
    }, [
      t
    ]);
    const a = f.useMemo(() => {
      if (!i) return {};
      try {
        const r = ke(JSON.parse(i));
        return r.isValid ? r.theme ?? {} : {};
      } catch {
        return {};
      }
    }, [
      i
    ]), l = De(), u = l ?? a;
    f.useEffect(() => {
      ze(u.googleFonts);
    }, [
      u.googleFonts
    ]);
    const d = f.useRef(a);
    return f.useEffect(() => {
      const r = d.current !== a;
      d.current = a, l && r && JSON.stringify(l) === JSON.stringify(a) && $e();
    }, [
      l,
      a
    ]), f.useMemo(() => {
      const r = We(e), m = oe(r, "palette.primary.main"), b = Ae(_e(u), m), n = J(J(r, o ?? {}), b), c = oe(n, "corners"), h = Oe(c), g = h ? J(n, {
        shape: {
          borderRadius: (c == null ? void 0 : c.topLeft) ?? 4
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: h
              }
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: h
              }
            }
          }
        }
      }) : n;
      return je(g);
    }, [
      e,
      o,
      u
    ]);
  }
  let q, de;
  q = (t) => t.startsWith("&") || t.includes(" ") || t.startsWith("@") ? t : t.replace(/-([a-z])/g, (e, o) => o.toUpperCase());
  de = (t) => {
    const e = Object.fromEntries(Object.entries(t).map(([o, i]) => {
      if (Array.isArray(i)) {
        const s = i.filter((a) => a != null);
        return [
          q(o),
          s.length > 0 ? s : void 0
        ];
      }
      return typeof i == "object" && i !== null ? [
        q(o),
        de(i)
      ] : [
        q(o),
        i
      ];
    }).filter(([, o]) => o != null));
    return Object.keys(e).length > 0 ? e : void 0;
  };
  U = (t) => {
    if (!t) return {};
    const e = Object.fromEntries(Object.entries(t).map(([o, i]) => {
      const s = q(o);
      if (Array.isArray(i)) {
        const a = i.filter((l) => l != null);
        return [
          s,
          a.length > 0 ? a : void 0
        ];
      }
      if (typeof i == "object" && i !== null) {
        const a = de(i);
        return [
          s,
          a
        ];
      }
      return [
        s,
        i
      ];
    }).filter(([, o]) => o != null));
    return Object.keys(e).length > 0 ? e : {};
  };
  W = f.createContext({});
  function Ge({ children: t, context: e }) {
    const o = e.theme, i = e.widget, s = e.socket, { fontStyles: a, textStyles: l } = ee(i.style || {}), u = f.useMemo(() => ({
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              ...U(a),
              ...U(l)
            }
          }
        }
      }
    }), [
      a,
      l
    ]), d = ue(s, o, u);
    return p.jsxs(se, {
      theme: d,
      children: [
        p.jsx(Te, {
          styles: {
            html: {
              boxSizing: "border-box"
            },
            "*, *::before, *::after": {
              boxSizing: "inherit"
            }
          }
        }),
        p.jsx(W.Provider, {
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
    return p.jsx(Ge, {
      context: e,
      children: t
    });
  };
  let M;
  $ = ({ dividerText: t = "" }) => {
    const e = {
      position: "absolute",
      left: 0,
      width: "100%"
    };
    return p.jsx(I, {
      sx: {
        display: "inline-block",
        pt: 1.5,
        pb: t ? 2 : 1.5
      },
      children: t ? p.jsx(L, {
        sx: e,
        children: p.jsx(Y, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: Z.t(t)
        })
      }) : p.jsx(L, {
        sx: e
      })
    });
  };
  Xe = Ie(p.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  M = {
    HEX: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    RGB: /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i,
    GRADIENT: /^(linear-gradient|radial-gradient)\(.*\)$/i,
    GRADIENT_PREFIX: /^(linear-gradient|radial-gradient)\(/i
  };
  function Q(t) {
    if (!t || t.trim() === "") return {
      isValid: true,
      normalizedValue: "",
      colorType: "empty"
    };
    const e = t.trim();
    return M.HEX.test(e) ? {
      isValid: true,
      normalizedValue: e,
      colorType: "hex"
    } : M.RGB.test(e) ? {
      isValid: true,
      normalizedValue: e,
      colorType: "rgb"
    } : M.GRADIENT.test(e) ? {
      isValid: true,
      normalizedValue: e,
      colorType: "gradient"
    } : {
      isValid: false,
      normalizedValue: e,
      colorType: "invalid"
    };
  }
  function Ye(t) {
    if (t == null || typeof t != "string") return false;
    const e = t.trim();
    return e === "" ? false : M.GRADIENT_PREFIX.test(e);
  }
  function qe(t) {
    if (!t || typeof t != "string") return null;
    const e = t.match(M.HEX);
    if (!e) return null;
    let o = e[1];
    o.length === 3 && (o = o.split("").map((u) => u + u).join(""));
    const i = parseInt(o.substring(0, 2), 16), s = parseInt(o.substring(2, 4), 16), a = parseInt(o.substring(4, 6), 16);
    let l = 1;
    if (o.length === 8) {
      const u = parseInt(o.substring(6, 8), 16);
      l = Math.round(u / 255 * 1e3) / 1e3;
    }
    return {
      r: i,
      g: s,
      b: a,
      a: l
    };
  }
  function Le(t) {
    if (!t || typeof t != "string" || !t.match(M.RGB)) return null;
    const o = t.match(/\d+\.?\d*/g);
    if (!o || o.length < 3) return null;
    const i = parseInt(o[0], 10), s = parseInt(o[1], 10), a = parseInt(o[2], 10), l = o[3] !== void 0 ? parseFloat(o[3]) : 1;
    return i < 0 || i > 255 || s < 0 || s > 255 || a < 0 || a > 255 || l < 0 || l > 1 ? null : {
      r: i,
      g: s,
      b: a,
      a: Math.round(l * 1e3) / 1e3
    };
  }
  function N(t) {
    if (!t || typeof t != "string") return null;
    const e = t.trim();
    return e.startsWith("#") ? qe(e) : e.toLowerCase().startsWith("rgb") ? Le(e) : null;
  }
  function Ue(t) {
    if (!t || typeof t != "string") return null;
    const e = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi, o = Array.from(t.matchAll(e));
    if (o.length < 2) return null;
    const i = o.map((s, a) => {
      const l = s[1];
      let u;
      return s[2] ? u = parseFloat(s[2]) : u = a / (o.length - 1) * 100, {
        color: l,
        position: u
      };
    });
    return i.sort((s, a) => s.position - a.position), i;
  }
  function Je(t) {
    if (!t || t.length < 2) return null;
    const e = t.find((n) => n.position === 50);
    if (e) {
      const n = N(e.color);
      return n ? n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})` : null;
    }
    let o = null, i = null;
    for (let n = 0; n < t.length; n++) if (t[n].position <= 50 && (o = t[n]), t[n].position > 50 && !i) {
      i = t[n];
      break;
    }
    if (!i && o) {
      const n = N(o.color);
      return n ? n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})` : null;
    }
    if (!o && i) {
      const n = N(i.color);
      return n ? n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})` : null;
    }
    if (!o || !i) return null;
    const s = N(o.color), a = N(i.color);
    if (!s || !a) return null;
    const l = i.position - o.position;
    if (l === 0) {
      const n = a;
      return n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})`;
    }
    const u = (50 - o.position) / l, d = Math.round(s.r + (a.r - s.r) * u), r = Math.round(s.g + (a.g - s.g) * u), m = Math.round(s.b + (a.b - s.b) * u), b = Math.round((s.a + (a.a - s.a) * u) * 1e3) / 1e3;
    return b === 1 ? `rgb(${d}, ${r}, ${m})` : `rgba(${d}, ${r}, ${m}, ${b})`;
  }
  re = function(t) {
    if (t == null || typeof t != "string") return null;
    const e = t.trim();
    if (e === "") return null;
    if (!M.GRADIENT_PREFIX.test(e)) return N(e) ? e : null;
    try {
      const i = Ue(e);
      return i ? Je(i) : null;
    } catch {
      return null;
    }
  };
  function Ke(t, e, o) {
    if (t.fallbackFields && Array.isArray(t.fallbackFields) && t.fallbackFields.length > 0) for (const i of t.fallbackFields) {
      const s = e[i];
      if (s && typeof s == "string") {
        const a = Q(s);
        if (a.isValid && a.normalizedValue.trim() !== "") return a.normalizedValue;
      }
    }
    return !t.fallbackFields || t.fallbackFields.length > 0 ? o : null;
  }
  function Ze({ field: t, data: e, onDataChange: o, props: i }) {
    const s = t.name, a = e[s], [l, u] = f.useState(a || ""), [d, r] = f.useState(false), [m, b] = f.useState(null), n = f.useRef(false), c = f.useRef(a), h = f.useRef(null), g = ue(i.context.socket, i.context.theme), A = g.palette.primary.main, { anchorOrigin: w, transformOrigin: F, maxHeight: V, setContentRef: E, popoverActionRef: P } = we(m, !!m);
    f.useEffect(() => () => {
      h.current !== null && clearTimeout(h.current);
    }, []);
    const C = f.useCallback((S, B = false) => {
      if (h.current !== null && (clearTimeout(h.current), h.current = null), S == null) {
        u(""), r(false), c.current = null, o({
          [s]: null
        }), n.current = false;
        return;
      }
      if (typeof S != "string") {
        r(true);
        return;
      }
      if (S.trim() === "") {
        u(""), r(false), c.current = null, o({
          [s]: null
        }), n.current = false;
        return;
      }
      const k = Q(S);
      if (u(S), !k.isValid) {
        r(true);
        return;
      }
      r(false);
      let z;
      if (t.noGradient === true) {
        const H = re(k.normalizedValue);
        if (H === null) {
          r(true);
          return;
        }
        z = H;
      } else z = k.normalizedValue || null;
      c.current = z, B ? h.current = setTimeout(() => {
        h.current = null, o({
          [s]: z
        });
      }, 150) : o({
        [s]: z
      });
    }, [
      s,
      t.noGradient,
      o
    ]), y = f.useCallback((S) => C(S, true), [
      C
    ]), O = f.useCallback((S) => C(S.target.value), [
      C
    ]), T = f.useCallback(() => C(null), [
      C
    ]), _ = !!m;
    return f.useEffect(() => {
      if (a !== c.current) {
        c.current = a;
        const S = a || "";
        u(S), r(false), (!S || S.trim() === "") && (n.current = false);
      }
    }, [
      a
    ]), f.useEffect(() => {
      if (!_ || n.current) return;
      if (a && a.trim() !== "") {
        n.current = true;
        return;
      }
      const S = Ke(t, e, A);
      if (S) {
        const B = Q(S);
        if (B.isValid) if (t.noGradient === true) {
          const j = re(B.normalizedValue);
          j !== null && (u(S), r(false), c.current = j, o({
            [s]: j
          }));
        } else u(S), r(false), o({
          [s]: S
        });
      }
      n.current = true;
    }, [
      _,
      e,
      s,
      t,
      a,
      A,
      o
    ]), p.jsx(p.Fragment, {
      children: p.jsxs(se, {
        theme: g,
        children: [
          p.jsxs(I, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              p.jsx(Be, {
                variant: "standard",
                fullWidth: true,
                value: l,
                error: d,
                helperText: d ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "",
                onChange: O,
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
              l && p.jsx(Ee, {
                onClick: T,
                title: Z.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: p.jsx(Xe, {})
              }),
              p.jsx(I, {
                onClick: (S) => b(S.currentTarget),
                title: Z.t("choose_color"),
                sx: {
                  mt: l ? "4px" : "-2px",
                  px: "4px",
                  py: l ? "4px" : "3px",
                  backgroundColor: l ? g.name === "light" ? g.palette.common.white : "#121212" : "transparent",
                  borderRadius: "1px",
                  display: "inline-block",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                  border: d ? `1px solid ${g.palette.error.main}` : l ? `1px solid ${g.name === "light" ? g.palette.grey[400] : g.palette.common.black}` : `1px dashed ${g.name === "light" ? g.palette.grey[400] : g.palette.text.secondary}`,
                  opacity: d ? 0.6 : 1
                },
                children: p.jsx(I, {
                  sx: {
                    width: l ? "36px" : "38px",
                    height: l ? "14px" : "18px",
                    borderRadius: "2px",
                    background: d ? "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)" : l || "transparent"
                  }
                })
              })
            ]
          }),
          p.jsx(Me, {
            action: P,
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
            open: _,
            anchorEl: m,
            onClose: () => b(null),
            transformOrigin: F,
            anchorOrigin: w,
            children: p.jsx(I, {
              ref: E,
              sx: {
                borderRadius: "6px"
              },
              children: p.jsx(Fe, {
                value: l || g.palette.primary.main,
                onChange: y,
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
    const { name: e, label: o, default: i = "", fallbackFields: s, noGradient: a, hidden: l } = t, u = {
      name: e,
      label: o,
      default: i,
      type: "custom",
      component: (d, r, m, b) => p.jsx(Ze, {
        field: d,
        data: r,
        onDataChange: m,
        props: b
      })
    };
    return s !== void 0 && (u.fallbackFields = s), a !== void 0 && (u.noGradient = a), l !== void 0 && (u.hidden = l), u;
  };
  St = function(t, e, o) {
    return X({
      name: t,
      label: e,
      fallbackFields: [
        "sliderColor"
      ],
      ...o
    });
  };
  xt = (t, e) => (o) => o[t] !== e;
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
    const o = {
      label: "",
      type: "custom",
      component: () => p.jsx($, {
        dividerText: t
      })
    };
    return (e == null ? void 0 : e.hidden) !== void 0 && (o.hidden = e.hidden), o;
  };
  let Qe, K, et, ot, rt;
  ie = (t) => {
    if (!t || typeof t != "string") return false;
    const e = t.trim();
    return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
  };
  $t = (t) => {
    const { groupName: e = "", allFields: o = true } = t || {}, i = [
      {
        label: "",
        type: "custom",
        component: () => p.jsx($, {
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
        hidden: (a, l) => {
          let u = true;
          const d = l !== void 0 ? l : e, r = a[`icon${d}`], m = a[`iconSmall${d}`];
          return (d === "" || d === "Active") && (u = false), l !== void 0 && (u = !a.iconColor && !a.enableIconColorMask && !a[`iconColor${l}`] && !ie(r) && !ie(m)), u;
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
        component: () => p.jsx($, {
          dividerText: "header"
        }),
        hidden: (a, l) => a.noHeader && !o
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
        component: () => p.jsx($, {
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
        hidden: (a, l) => {
          var _a;
          return ((_a = a.oidObject) == null ? void 0 : _a.type) === "boolean" || a.name === "valueActive";
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
        component: () => p.jsx($, {
          dividerText: "footer"
        }),
        hidden: (a, l) => a.noFooter && !o
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
        component: () => p.jsx($, {
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
        component: () => p.jsx($, {})
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
        component: () => p.jsx($, {})
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
        component: () => p.jsx($, {
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
        component: () => p.jsx($, {
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
        component: () => p.jsx($, {
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
      const a = [
        `alias${e}`,
        `value${e}`
      ];
      return i.filter((l) => !a.includes(l.name));
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
    return i.filter((a) => !s.includes(a.name));
  };
  Qe = async (t, e) => {
    var _a;
    const o = e._id.split(".");
    for (let i = o.length; i > 0; i--) try {
      const s = await t.getObject(o.slice(0, i).join("."));
      if ((_a = s == null ? void 0 : s.common) == null ? void 0 : _a.icon) return s.common.icon;
    } catch {
      continue;
    }
    return null;
  };
  K = (t, e = "oid") => {
    var _a;
    Object.keys(t).forEach((i) => {
      i.startsWith(e) && i.endsWith("Object") && delete t[i];
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
      const i = typeof t.values_count == "number" ? t.values_count : 0, s = Object.keys(((_a = t.oidObject) == null ? void 0 : _a.commonStates) || {}).length, a = Math.max(i, s);
      for (let l = 1; l <= a; l++) o.forEach((u) => {
        delete t[`${u}${l}`];
      });
      t.values_count = 0;
    }
  };
  et = (t, e) => {
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
  tt = (t, e = "oid") => async (o, i, s, a) => {
    if (!i[e]) {
      K(i, e), setTimeout(() => s(i), 100);
      return;
    }
    try {
      const l = await a.getObject(i[e]);
      if (!l) {
        K(i, e), setTimeout(() => s(i), 100);
        return;
      }
      const u = l.common.type;
      if (!t.includes(u)) return;
      const d = {
        _id: l._id,
        name: l.common.name || "",
        type: u,
        icon: await Qe(a, l),
        write: l.common.write,
        onlyDisplay: !l.common.write,
        unit: l.common.unit || "",
        minValue: l.common.min || 0,
        maxValue: l.common.max || 100
      };
      if (i[`${e}Object`] = d, i.icon = d.icon, i.write = d.write, i.onlyDisplay = d.onlyDisplay, i.minValue = d.minValue, i.maxValue = d.maxValue, l.common.states) {
        let r = l.common.states;
        if (Array.isArray(r)) {
          const m = {};
          r.forEach((b) => {
            m[b] = b;
          }), r = m;
        }
        i[`${e}Object`].commonStates = r, e === "oid" && (i.values_count = Object.keys(r).length, Object.entries(r).forEach(([m, b], n) => {
          const c = n + 1;
          i[`value${c}`] = et(m, u), i[`alias${c}`] = String(b);
        }));
      } else u === "boolean" && e === "oid" ? (i[`${e}Object`].commonStates = {
        true: "TRUE",
        false: "FALSE"
      }, i.values_count = 2, i.value1 = true, i.alias1 = "TRUE", i.value2 = false, i.alias2 = "FALSE") : e === "oid" && (i.values_count = 0);
      e === "oid" && i.ignoreCommonStates !== false && (i.values_count = 0), setTimeout(() => s(i), 100);
    } catch (l) {
      console.error(`Error handling OID change for ${i[e]}:`, l), K(i, e), setTimeout(() => s(i), 100);
    }
  };
  At = (t) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: tt(t)
    },
    {
      label: "",
      type: "custom",
      component: () => p.jsx($, {}),
      hidden: (e, o) => e.oidObject === void 0
    },
    {
      name: "unit",
      label: "unit",
      type: "text",
      default: "",
      hidden: (e, o) => e.oidObject === void 0,
      onChange: async (e, o, i, s) => {
        o.oidObject && (o.oidObject.unit = o.unit || "", setTimeout(() => i(o), 100));
      }
    },
    {
      label: "",
      type: "custom",
      component: () => p.jsx($, {}),
      hidden: (e, o) => e.oidObject === void 0
    },
    {
      name: "ignoreCommonStates",
      type: "checkbox",
      default: true,
      label: "ignore_common_states",
      tooltip: "ignore_common_states_tooltip",
      hidden: (e, o) => e.oidObject === void 0,
      onChange: async (e, o, i, s) => {
        var _a, _b;
        if (o.ignoreCommonStates !== false) o.values_count = 0;
        else {
          const a = (_a = o.oidObject) == null ? void 0 : _a.commonStates;
          a ? o.values_count = Object.keys(a).length : ((_b = o.oidObject) == null ? void 0 : _b.type) === "boolean" ? o.values_count = 2 : o.values_count = 0;
        }
        setTimeout(() => i(o), 100);
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
  ot = () => {
    const { isSignalVisible: t, refService: e, widget: o } = f.useContext(W), i = f.useMemo(() => {
      const a = [], l = Number(o.data["signals-count"]) || 0;
      for (let u = 0; u < l; u++) t(u) && a.push(u);
      return a;
    }, [
      o.data,
      t
    ]), s = f.useMemo(() => {
      const a = {};
      return i.forEach((l) => {
        a[l] = o.data[`signals-color-${l}`];
      }), a;
    }, [
      o.data,
      i
    ]);
    f.useEffect(() => {
      if (!(e == null ? void 0 : e.current)) return;
      const l = e.current.children, u = [];
      Array.from(l).forEach((d) => {
        const r = d.children[0];
        r && r instanceof HTMLElement && r.className === "vis-signal-icon iconOwn" && u.push(r);
      }), u.forEach((d, r) => {
        const m = i[r], b = m !== void 0 ? s[m] : void 0;
        b ? (d.style.color = b, d.style.filter = "drop-shadow(0px 10000px 0)", d.style.transform = "translateY(-10000px)") : (d.style.color = "", d.style.filter = "", d.style.transform = "");
      });
    }, [
      i,
      s,
      e
    ]);
  };
  nt = (t, e = 28) => {
    const [o, i] = f.useState({
      width: void 0,
      height: void 0,
      maxWidth: void 0
    }), s = f.useCallback((l) => {
      if (l.length === 0) return;
      const u = l[0], { width: d, height: r } = u.contentRect, m = Math.round(d), b = Math.round(r), n = m <= b + e + 12 ? m - e - 12 : b;
      i({
        width: m,
        height: b,
        maxWidth: n
      });
    }, [
      e
    ]), a = f.useMemo(() => t ? typeof t == "object" && "current" in t ? t.current : t : null, [
      t
    ]);
    return f.useEffect(() => {
      if (!a) {
        i({
          width: void 0,
          height: void 0,
          maxWidth: void 0
        });
        return;
      }
      const l = new ResizeObserver(s);
      try {
        l.observe(a);
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
      a,
      s
    ]), o;
  };
  rt = (t) => {
    const { widget: e } = f.useContext(W), [o, i] = f.useState("100%"), [s, a] = f.useState("100%"), { width: l, height: u } = nt(t), d = f.useMemo(() => ({
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
        i("100%"), a("100%");
        return;
      }
      if (!(l >= r && u >= r)) {
        i("0px"), a("0px");
        return;
      }
      const b = l - r, n = u - r, c = Math.min(b, n);
      i(`${c}px`), a(`${c}px`);
    }, [
      l,
      u,
      r,
      d.isSquare,
      d.isCircle
    ]), {
      width: o,
      height: s
    };
  };
  D = function(t) {
    return t == null || typeof t != "string" || t.trim() === "" ? null : Ye(t) ? t : null;
  };
  it = f.forwardRef(({ children: t, data: e, oidValue: o = null, isValidType: i = true, bgActive: s = true, sx: a = {} }, l) => {
    const u = f.useRef(null), d = f.useRef(null), [r, m] = f.useState(null), b = f.useRef(null), n = f.useRef(null), c = f.useContext(W);
    if (!c) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: h, widget: g } = c, { backgroundStyles: A, borderStyles: w } = ee(g.style), { width: F, height: V } = rt(r);
    ot();
    const E = g.data.oidObject, P = E == null ? void 0 : E._id, C = f.useMemo(() => {
      if (g.data.noFooter) return "";
      const T = o || o === 0 || String(o) === "false" ? `${o}${(E == null ? void 0 : E.unit) ?? ""}` : "";
      return e.footer || e.alias || e.value || T || "";
    }, [
      e.footer,
      e.alias,
      e.value,
      o,
      E == null ? void 0 : E.unit,
      g.data.noFooter
    ]), y = f.useMemo(() => U({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      ...A,
      background: h ? e.frameBackground : e.frameBackground || "transparent",
      backgroundColor: h ? D(e.frameBackground) ? void 0 : e.frameBackground : D(e.frameBackground) ? "transparent" : e.frameBackground,
      borderColor: h ? "" : e.frameBackground || (w == null ? void 0 : w["border-color"])
    }), [
      A,
      w,
      e.frameBackground,
      h
    ]), O = f.useMemo(() => U({
      overflow: "hidden",
      width: F,
      height: V,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: s && h ? e.background : s ? e.background || "transparent" : h ? void 0 : "transparent",
      borderColor: h ? "" : e.background || (w == null ? void 0 : w["border-color"]),
      borderRadius: g.data.circle || g.data.ellipse ? "50%" : void 0,
      ...a
    }), [
      F,
      V,
      s,
      h,
      e.background,
      w,
      g.data.circle,
      g.data.ellipse,
      a
    ]);
    return f.useEffect(() => {
      g.data.noHeader || !b.current || (b.current.innerHTML = e.header);
    }, [
      e.header,
      g.data.noHeader
    ]), f.useEffect(() => {
      g.data.noFooter || !n.current || (n.current.innerHTML = String(C));
    }, [
      C,
      g.data.noFooter
    ]), f.useImperativeHandle(l, () => ({
      get paper0() {
        return (u == null ? void 0 : u.current) ?? null;
      },
      get paper1() {
        return (d == null ? void 0 : d.current) ?? null;
      },
      get header() {
        return (b == null ? void 0 : b.current) ?? null;
      }
    })), p.jsxs(ne, {
      ref: u,
      className: "BASE-PAPER-0",
      square: g.data.squaredCorner,
      variant: g.data.outlinedFrame ? "outlined" : "elevation",
      sx: y,
      children: [
        !!i && p.jsxs(p.Fragment, {
          children: [
            p.jsx(I, {
              sx: {
                width: g.data.noHeader ? "0%" : "100%",
                height: g.data.noHeader ? "0%" : "auto",
                mt: (g.data.basePadding ?? 8) / 2,
                mb: -(g.data.basePadding ?? 8) / 2
              },
              children: p.jsx(Y, {
                ref: b,
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
            p.jsx(I, {
              className: "BASE-BOX-1",
              ref: m,
              sx: {
                overflow: "hidden",
                p: g.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: p.jsx(ne, {
                ref: d,
                className: "BASE-PAPER-1",
                elevation: g.data.outlined ? 0 : Number(g.data.baseElevation) || 0,
                square: !g.data.basePadding || g.data.squaredCorner,
                variant: g.data.outlined ? "outlined" : "elevation",
                sx: O,
                children: t
              })
            }),
            p.jsx(I, {
              sx: {
                width: g.data.noFooter ? "0%" : "100%",
                height: g.data.noFooter ? "0%" : "auto",
                mt: -(g.data.basePadding ?? 8) / 2,
                mb: (g.data.basePadding ?? 8) / 2
              },
              children: p.jsx(Y, {
                ref: n,
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
        !i && p.jsx(I, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: p.jsx(Y, {
            variant: "body2",
            sx: {
              p: 1,
              width: "100%",
              textAlign: "center"
            },
            children: P ? `${P} has an invalid type!` : "Please select a valid object ID"
          })
        })
      ]
    });
  });
  it.displayName = "CollectionBase";
  let ae;
  at = (t) => !t || typeof t != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(t);
  lt = (t, e, o) => !o && !at(t) ? {} : !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  };
  ae = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  ct = ({ src: t, style: e = {}, alt: o = "" }) => {
    const i = t && t !== "undefined" && t !== null ? t : ae;
    return p.jsx("img", {
      src: i,
      alt: o,
      style: e,
      onError: (s) => {
        console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
        const a = s.currentTarget;
        a.onerror = null, a.src = ae;
      }
    });
  };
  _t = ({ data: t, widget: e }) => {
    const i = f.useContext(W).theme, s = t.icon, a = t.iconColor || i.palette.primary.main;
    return !e.data.noHeaderIcon && s ? p.jsx(ct, {
      alt: "",
      src: s,
      style: {
        position: "absolute",
        top: `calc(0px - ${t.iconYOffsetCm})`,
        right: `calc(0px - ${t.iconXOffsetCm})`,
        height: t.iconSizeCm,
        ...lt(s, a, !!t.forceColorMaskCm)
      }
    }) : null;
  };
  function st(t, e) {
    return t[e];
  }
  function ut(t) {
    return typeof t == "object" && t !== null && "sliderOrientation" in t;
  }
  dt = (t) => typeof t == "number" ? `calc(${t / 100}rem * 0.875)` : void 0;
  function ft(t) {
    return {
      markerIconSize: t.markerIconSize,
      markerTextColor: t.markerTextColor,
      markerTextSize: t.markerTextSize,
      markerIconColor: t.markerIconColor
    };
  }
  function mt(t) {
    return {};
  }
  function v(t) {
    for (const e of t) if (e.condition !== false && e.value !== void 0 && e.value !== null && !(typeof e.value == "string" && e.value.trim() === "")) return e.value;
  }
  function gt(t) {
    const { rxData: e, oidObject: o, oidName: i, theme: s, fontStyles: a, textStyles: l, backgroundStyles: u, formatSize: d, getDataValue: r, widgetResolver: m } = t, b = (n) => n && String(n) !== "" ? String(n) : void 0;
    return {
      icon: (n, c) => e.noIcon ? "" : v([
        {
          condition: c,
          value: r("icon", "Active")
        },
        {
          condition: c,
          value: r("iconSmall", "Active")
        },
        {
          value: r("icon", String(n))
        },
        {
          value: r("iconSmall", String(n))
        },
        {
          value: r("icon", "")
        },
        {
          value: r("iconSmall", "")
        }
      ]) ?? "",
      iconActive: (n, c) => !c || e.noIcon ? "" : v([
        {
          value: r("icon", String(n))
        },
        {
          value: r("iconSmall", String(n))
        }
      ]) ?? "",
      iconSizeCm: (n, c) => v([
        {
          condition: r("iconSize", "") === 0,
          value: "0px"
        },
        {
          condition: !!r("iconSize", ""),
          value: `calc(24px * ${r("iconSize", "")} / 100)`
        }
      ]) ?? "24px",
      iconSize: (n, c) => v([
        {
          condition: c && r("iconSize", "Active") === 0,
          value: "0px"
        },
        {
          condition: c && !!r("iconSize", "Active"),
          value: `calc(24px * ${r("iconSize", "Active")} / 100)`
        },
        {
          condition: String(n) !== "" && r("iconSize", String(n)) === 0,
          value: "0px"
        },
        {
          condition: String(n) !== "" && !!r("iconSize", String(n)),
          value: `calc(24px * ${r("iconSize", String(n))} / 100)`
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
      iconSizeActive: (n, c) => c ? v([
        {
          condition: r("iconSize", String(n)) === 0,
          value: "0px"
        },
        {
          condition: !!r("iconSize", String(n)),
          value: `calc(24px * ${r("iconSize", String(n))} / 100)`
        }
      ]) ?? "24px" : "24px",
      iconSizeOnly: (n, c) => v([
        {
          condition: c && (!!r("iconSize", "Active") || r("iconSize", "Active") === 0),
          value: `${r("iconSize", "Active")}%`
        },
        {
          condition: !!r("iconSize", String(n)) || r("iconSize", String(n)) === 0,
          value: `${r("iconSize", String(n))}%`
        }
      ]) ?? "100%",
      iconSizeActiveOnly: (n, c) => c ? v([
        {
          value: r("iconSize", String(n))
        }
      ]) ?? void 0 : void 0,
      iconWidth: (n, c) => v([
        {
          condition: c,
          value: e.iconSizeActive
        },
        {
          value: r("iconSize", String(n))
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
      iconHeight: (n, c) => v([
        {
          condition: c,
          value: e.iconSizeActive
        },
        {
          value: r("iconSize", String(n))
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
      forceColorMaskCm: (n, c) => v([
        {
          value: r("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMask: (n, c) => v([
        {
          condition: c,
          value: r("enableIconColorMask", "Active")
        },
        {
          value: r("enableIconColorMask", String(n))
        },
        {
          condition: !!r("enableIconColorMask", String(n)),
          value: r("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMaskActive: (n, c) => c ? v([
        {
          value: r("enableIconColorMask", String(n))
        }
      ]) ?? false : false,
      iconColor: (n, c) => v([
        {
          condition: c,
          value: r("iconColor", "Active")
        },
        {
          condition: String(n) !== "",
          value: r("iconColor", String(n))
        },
        {
          value: m.markerIconColor
        },
        {
          value: r("iconColor", "")
        }
      ]) ?? s.palette.primary.main,
      iconColorActive: (n, c) => c ? v([
        {
          value: r("iconColor", String(n))
        }
      ]) ?? "" : "",
      iconHover: (n, c) => v([
        {
          value: e.iconHover ? `${e.iconHover}%` : void 0
        }
      ]) ?? "",
      iconHoverActive: (n, c) => c ? v([
        {
          value: r("iconHover", String(n)) ? `${r("iconHover", String(n))}%` : void 0
        }
      ]) ?? void 0 : void 0,
      iconXOffsetCm: (n, c) => v([
        {
          value: r("iconXOffset", "")
        }
      ]) ?? "0px",
      iconYOffsetCm: (n, c) => v([
        {
          value: r("iconYOffset", "")
        }
      ]) ?? "0px",
      iconXOffset: (n, c) => v([
        {
          condition: c,
          value: r("iconXOffset", "Active")
        },
        {
          value: r("iconXOffset", String(n))
        }
      ]) ?? "0px",
      iconYOffset: (n, c) => v([
        {
          condition: c,
          value: r("iconYOffset", "Active")
        },
        {
          value: r("iconYOffset", String(n))
        }
      ]) ?? "0px",
      iconXOffsetActive: (n, c) => c ? v([
        {
          condition: !r("iconXOffset", String(n)),
          value: "0px"
        },
        {
          value: r("iconXOffset", String(n))
        }
      ]) ?? "0px" : "0px",
      iconYOffsetActive: (n, c) => c ? v([
        {
          condition: !r("iconYOffset", String(n)),
          value: "0px"
        },
        {
          value: r("iconYOffset", String(n))
        }
      ]) ?? "0px" : "0px",
      textColorActive: (n, c) => c ? v([
        {
          value: r("textColor", String(n)),
          condition: r("textColor", String(n)) !== ""
        },
        {
          value: m.markerTextColor && m.markerTextColor !== "" ? m.markerTextColor : void 0
        },
        {
          value: e.textColor && e.textColor !== "" ? e.textColor : void 0
        }
      ]) ?? void 0 : void 0,
      textColorCm: (n, c) => v([
        {
          condition: typeof r("textColor", "") == "string",
          value: r("textColor", "")
        },
        {
          condition: typeof (l == null ? void 0 : l.color) == "string",
          value: l == null ? void 0 : l.color
        }
      ]) ?? "",
      textColor: (n, c) => v([
        {
          condition: c && typeof r("textColor", "Active") == "string",
          value: r("textColor", "Active")
        },
        {
          condition: typeof r("textColor", String(n)) == "string",
          value: r("textColor", String(n))
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
      ]) ?? "",
      fontSize: (n, c) => v([
        {
          condition: c && typeof e.valueSizeActive == "number",
          value: d(e.valueSizeActive)
        },
        {
          value: typeof r("valueSize", String(n)) == "number" ? d(r("valueSize", String(n))) : void 0
        },
        {
          condition: typeof m.markerTextSize == "number",
          value: d(m.markerTextSize)
        },
        {
          value: typeof e.valueSize == "number" ? d(e.valueSize) : void 0
        },
        {
          condition: typeof (a == null ? void 0 : a["font-size"]) == "string",
          value: a == null ? void 0 : a["font-size"]
        }
      ]) ?? null,
      headerSize: (n, c) => v([
        {
          condition: c && typeof r("headerSize", "Active") == "number",
          value: `${d(r("headerSize", "Active"))}`
        },
        {
          condition: typeof r("headerSize", String(n)) == "number",
          value: `${d(r("headerSize", String(n)))}`
        },
        {
          condition: typeof r("headerSize", "") == "number",
          value: `${d(r("headerSize", ""))}`
        },
        {
          condition: typeof (a == null ? void 0 : a["font-size"]) == "string",
          value: a == null ? void 0 : a["font-size"]
        }
      ]) ?? null,
      footerSize: (n, c) => v([
        {
          condition: c && typeof r("footerSize", "Active") == "number",
          value: `${d(r("footerSize", "Active"))}`
        },
        {
          condition: typeof r("footerSize", String(n)) == "number",
          value: `${d(r("footerSize", String(n)))}`
        },
        {
          condition: typeof r("footerSize", "") == "number",
          value: `${d(r("footerSize", ""))}`
        },
        {
          condition: typeof (a == null ? void 0 : a["font-size"]) == "string",
          value: a == null ? void 0 : a["font-size"]
        }
      ]) ?? null,
      valueSize: (n, c) => v([
        {
          condition: c && typeof r("valueSize", "Active") == "number",
          value: `${d(r("valueSize", "Active"))}`
        },
        {
          condition: typeof r("valueSize", String(n)) == "number",
          value: `${d(r("valueSize", String(n)))}`
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
          condition: typeof (a == null ? void 0 : a["font-size"]) == "string",
          value: a == null ? void 0 : a["font-size"]
        }
      ]) ?? null,
      valueSizeActive: (n, c) => c ? v([
        {
          value: typeof r("valueSize", String(n)) == "number" ? d(r("valueSize", String(n))) : null
        }
      ]) ?? null : null,
      header: (n, c) => String(v([
        {
          condition: c,
          value: b(r("header", "Active"))
        },
        {
          value: b(r("header", String(n)))
        },
        {
          value: b(r("header", ""))
        },
        {
          value: b(i)
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      footer: (n, c) => String(v([
        {
          condition: c,
          value: b(r("footer", "Active"))
        },
        {
          value: b(r("footer", String(n)))
        },
        {
          value: b(r("footer", ""))
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      alias: (n, c) => String(r("alias", String(n)) || "").replace(/(\r\n|\n|\r)/gm, ""),
      value: (n, c) => {
        const h = r("value", String(n));
        return h != null ? `${h}${(o == null ? void 0 : o.unit) !== void 0 ? o.unit : ""}` : void 0;
      },
      backgroundColor: (n, c) => v([
        {
          value: e.backgroundColor && e.backgroundColor !== "" ? e.backgroundColor : void 0
        },
        {
          value: u == null ? void 0 : u["background-color"]
        }
      ]) ?? "",
      backgroundColorActive: (n, c) => c ? r("backgroundColor", String(n)) : void 0,
      background: (n, c) => v([
        {
          condition: c,
          value: r("background", "Active")
        },
        {
          value: r("background", String(n))
        },
        {
          value: r("background", "")
        }
      ]) ?? "",
      backgroundActive: (n, c) => c ? r("background", String(n)) : void 0,
      frameBackgroundColor: (n, c) => v([
        {
          value: e.frameBackgroundColor && e.frameBackgroundColor !== "" ? e.frameBackgroundColor : void 0
        },
        {
          value: u == null ? void 0 : u["background-color"]
        }
      ]) ?? "",
      frameBackgroundColorActive: (n, c) => c ? r("frameBackgroundColor", String(n)) : void 0,
      frameBackground: (n, c) => v([
        {
          condition: c,
          value: r("frameBackground", "Active")
        },
        {
          value: r("frameBackground", String(n))
        },
        {
          value: r("frameBackground", "")
        }
      ]) ?? "",
      frameBackgroundActive: (n, c) => c ? r("frameBackground", String(n)) : void 0,
      markerIconSize: (n, c) => m.markerIconSize,
      markerTextColor: (n, c) => m.markerTextColor,
      markerTextSize: (n, c) => m.markerTextSize,
      markerIconColor: (n, c) => m.markerIconColor
    };
  }
  function bt(t = "", e = false, o) {
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
  Ot = function(t) {
    const { theme: e, widget: o, widget: { data: i }, getPropertyValue: s } = f.useContext(W), a = i[`${t}Object`], l = s(t), u = a == null ? void 0 : a.name, { fontStyles: d, textStyles: r, backgroundStyles: m } = ee(o.style), b = f.useCallback(dt, []), n = f.useCallback((C, y = "") => {
      const O = `${C}${y}`;
      return st(i, O);
    }, [
      i
    ]), c = f.useMemo(() => ut(i) ? ft(i) : mt(), [
      i
    ]), h = f.useMemo(() => gt({
      rxData: i,
      oidObject: a,
      oidName: u,
      theme: e,
      fontStyles: d,
      textStyles: r,
      backgroundStyles: m,
      formatSize: b,
      getDataValue: n,
      widgetResolver: c
    }), [
      i,
      a,
      u,
      e,
      d,
      r,
      m,
      b,
      n,
      c
    ]), g = f.useCallback((C = "", y = false) => bt(C, y, h), [
      h
    ]), { states: A, widgetStates: w, minValue: F, maxValue: V } = f.useMemo(() => {
      const C = {};
      let y = null, O = null;
      const T = [], _ = a == null ? void 0 : a.type, S = (a == null ? void 0 : a.commonStates) || {}, B = Object.entries(S);
      if (_ === "number" || _ === "string" || _ === "boolean" || _ === "mixed") {
        const j = i.ignoreCommonStates === false ? i.values_count : B.length > 0 ? B.length : i.values_count;
        for (let k = 1; k <= j; k++) {
          const z = n("value", String(k)), H = i[`alias${k}`], fe = a == null ? void 0 : a.unit;
          if (z === void 0 || !/\S/.test(String(z))) continue;
          const G = B.find(([be]) => be === String(z)), te = G ? _ === "number" ? Number(G[0]) : String(G[0]) : _ === "number" ? Number(z) : z, me = String(l) === String(te), x = g(k, me);
          T.push({
            value: te,
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
          const ge = String(G ? G[0] : z);
          C[ge] = H && String(H).trim() !== "" ? H : `${z}${fe}`;
        }
      }
      if (_ === "number" && T.length) {
        const j = T.map((k) => typeof k.value == "number" ? k.value : NaN).filter((k) => !isNaN(k));
        j.length > 0 && (y = Math.min(...j), O = Math.max(...j));
      }
      return {
        states: T,
        widgetStates: C,
        minValue: y,
        maxValue: O
      };
    }, [
      a == null ? void 0 : a.type,
      a == null ? void 0 : a.commonStates,
      a == null ? void 0 : a.unit,
      i,
      n,
      l,
      g
    ]), { data: E, activeIndex: P } = f.useMemo(() => {
      switch (a == null ? void 0 : a.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const y = A.findIndex((O) => String(O.value) === String(l));
          return y !== -1 ? {
            data: g(y + 1, true),
            activeIndex: y + 1
          } : {
            data: g("", true),
            activeIndex: void 0
          };
        }
        default:
          return {
            data: g("", true),
            activeIndex: void 0
          };
      }
    }, [
      a,
      l,
      A,
      g
    ]);
    return {
      widgetStates: w,
      minValue: F,
      maxValue: V,
      data: E,
      activeIndex: P,
      oidValue: l,
      states: A,
      resolveStyleData: g
    };
  };
});
export {
  W as C,
  L as D,
  ct as S,
  __tla,
  D as a,
  it as b,
  _t as c,
  $t as d,
  At as e,
  X as f,
  lt as g,
  St as h,
  $ as i,
  at as j,
  dt as k,
  re as l,
  nt as m,
  ee as n,
  tt as o,
  U as p,
  zt as q,
  xt as r,
  kt as s,
  Ct as t,
  Ot as u,
  yt as v,
  ht as w,
  ie as x,
  Xe as y
};
