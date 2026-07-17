import { u as ve, j as h, s as se, d as Se, e as xe, a2 as Ce, m as ue, i as ye, a3 as ke, a4 as ze, a5 as R, a6 as $e, a7 as Ae, a8 as _e, a9 as ne, aa as Oe, ab as je, ac as K, ad as Te, ae as Ie, _ as de, af as we, n as w, T as Y, G as Z, c as Be, ag as Ee, X as Me, I as Fe, ah as Ve, ai as Pe, P as re, __tla as __tla_0 } from "./usePopoverPositioning-BqDLZSOn.js";
import { v as m, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
let z, q, ut, W, D, lt, kt, Ct, yt, st, X, xt, ct, ft, ie, it, te, nt, U, Le, zt, St;
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
  let He, Re, De;
  He = (t) => {
    const { absolute: e, children: o, classes: r, flexItem: s, light: i, orientation: l, textAlign: u, variant: f } = t;
    return xe({
      root: [
        "root",
        e && "absolute",
        f,
        i && "light",
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
    }, Ce, r);
  };
  Re = se("div", {
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
  })(ue(({ theme: t }) => ({
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
          borderColor: t.vars ? `rgba(${t.vars.palette.dividerChannel} / 0.08)` : ye(t.palette.divider, 0.08)
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
  De = se("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.wrapper,
        o.orientation === "vertical" && e.wrapperVertical
      ];
    }
  })(ue(({ theme: t }) => ({
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
  q = m.forwardRef(function(e, o) {
    const r = ve({
      props: e,
      name: "MuiDivider"
    }), { absolute: s = false, children: i, className: l, orientation: u = "horizontal", component: f = i || u === "vertical" ? "div" : "hr", flexItem: n = false, light: b = false, role: g = f !== "hr" ? "separator" : void 0, textAlign: d = "center", variant: a = "fullWidth", ...c } = r, p = {
      ...r,
      absolute: s,
      component: f,
      flexItem: n,
      light: b,
      orientation: u,
      role: g,
      textAlign: d,
      variant: a
    }, $ = He(p);
    return h.jsx(Re, {
      as: f,
      className: Se($.root, l),
      role: g,
      ref: o,
      ownerState: p,
      "aria-orientation": g === "separator" && (f !== "hr" || u === "vertical") ? u : void 0,
      ...c,
      children: i ? h.jsx(De, {
        className: $.wrapper,
        ownerState: p,
        children: i
      }) : null
    });
  });
  q && (q.muiSkipListHighlight = true);
  let Ne;
  Ne = [
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
  te = (t) => m.useMemo(() => {
    if (!t) return {
      backgroundStyles: void 0,
      borderStyles: void 0,
      textStyles: void 0,
      fontStyles: void 0,
      boxStyles: void 0
    };
    const e = {}, o = {}, r = {}, s = {}, i = {};
    return Ne.forEach((l) => {
      const u = t[l];
      u !== void 0 && (l.includes("background") ? e[l] = u : l.includes("border") ? o[l] = u : l.includes("font") || l.includes("line-height") || l.includes("letter-spacing") || l.includes("word-spacing") ? s[l] = u : l.includes("text") || l.includes("color") ? r[l] = u : i[l] = u);
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
  function We() {
    return m.useSyncExternalStore(ke, ze);
  }
  const Ge = [
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
  function Xe(t) {
    const { typography: e } = t;
    if (!e) return t;
    const o = {
      ...e
    };
    for (const r of Ge) delete o[r];
    return delete o.pxToRem, {
      ...t,
      typography: o
    };
  }
  function fe(t, e, o) {
    const [r, s] = m.useState("");
    m.useEffect(() => {
      let n = true;
      const b = (g, d) => {
        n && s(typeof (d == null ? void 0 : d.val) == "string" ? d.val : "");
      };
      return t.getState(R).then((g) => {
        n && s(typeof (g == null ? void 0 : g.val) == "string" ? g.val : "");
      }).catch((g) => console.error(`Cannot read theme state ${R}: ${g}`)), t.subscribeState(R, b).catch((g) => console.error(`Cannot subscribe theme state ${R}: ${g}`)), () => {
        n = false;
        try {
          t.unsubscribeState(R, b);
        } catch (g) {
          console.error(`Cannot unsubscribe theme state ${R}: ${g}`);
        }
      };
    }, [
      t
    ]);
    const i = m.useMemo(() => {
      if (!r) return {};
      try {
        const n = $e(JSON.parse(r));
        return n.isValid ? n.theme ?? {} : {};
      } catch {
        return {};
      }
    }, [
      r
    ]), l = We(), u = l ?? i;
    m.useEffect(() => {
      Ae(u.googleFonts);
    }, [
      u.googleFonts
    ]);
    const f = m.useRef(i);
    return m.useEffect(() => {
      const n = f.current !== i;
      f.current = i, l && n && JSON.stringify(l) === JSON.stringify(i) && _e();
    }, [
      l,
      i
    ]), m.useMemo(() => {
      const n = Xe(e), b = ne(n, "palette.primary.main"), g = Oe(je(u), b), d = K(K(n, o ?? {}), g), a = ne(d, "corners"), c = Te(a), p = c ? K(d, {
        shape: {
          borderRadius: (a == null ? void 0 : a.topLeft) ?? 4
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: c
              }
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: c
              }
            }
          }
        }
      }) : d;
      return Ie(p);
    }, [
      e,
      o,
      u
    ]);
  }
  let L, me;
  L = (t) => t.startsWith("&") || t.includes(" ") || t.startsWith("@") ? t : t.replace(/-([a-z])/g, (e, o) => o.toUpperCase());
  me = (t) => {
    const e = Object.fromEntries(Object.entries(t).map(([o, r]) => {
      if (Array.isArray(r)) {
        const s = r.filter((i) => i != null);
        return [
          L(o),
          s.length > 0 ? s : void 0
        ];
      }
      return typeof r == "object" && r !== null ? [
        L(o),
        me(r)
      ] : [
        L(o),
        r
      ];
    }).filter(([, o]) => o != null));
    return Object.keys(e).length > 0 ? e : void 0;
  };
  U = (t) => {
    if (!t) return {};
    const e = Object.fromEntries(Object.entries(t).map(([o, r]) => {
      const s = L(o);
      if (Array.isArray(r)) {
        const i = r.filter((l) => l != null);
        return [
          s,
          i.length > 0 ? i : void 0
        ];
      }
      if (typeof r == "object" && r !== null) {
        const i = me(r);
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
  W = m.createContext({});
  function Ye({ children: t, context: e }) {
    const o = e.theme, r = e.widget, s = e.socket, { fontStyles: i, textStyles: l } = te(r.style || {}), u = m.useMemo(() => ({
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              ...U(i),
              ...U(l)
            }
          }
        }
      }
    }), [
      i,
      l
    ]), f = fe(s, o, u);
    return h.jsxs(de, {
      theme: f,
      children: [
        h.jsx(we, {
          styles: {
            html: {
              boxSizing: "border-box"
            },
            "*, *::before, *::after": {
              boxSizing: "inherit"
            }
          }
        }),
        h.jsx(W.Provider, {
          value: {
            ...e,
            theme: f
          },
          children: t
        })
      ]
    });
  }
  St = function(t, e) {
    return h.jsx(Ye, {
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
    return h.jsx(w, {
      sx: {
        display: "inline-block",
        pt: 1.5,
        pb: t ? 2 : 1.5
      },
      children: t ? h.jsx(q, {
        sx: e,
        children: h.jsx(Y, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: Z.t(t)
        })
      }) : h.jsx(q, {
        sx: e
      })
    });
  };
  Le = Be(h.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  F = {
    HEX: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    RGB: /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i,
    GRADIENT: /^(linear-gradient|radial-gradient)\(.*\)$/i,
    GRADIENT_PREFIX: /^(linear-gradient|radial-gradient)\(/i
  };
  function ee(t) {
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
  function qe(t) {
    if (t == null || typeof t != "string") return false;
    const e = t.trim();
    return e === "" ? false : F.GRADIENT_PREFIX.test(e);
  }
  function Ue(t) {
    if (!t || typeof t != "string") return null;
    const e = t.match(F.HEX);
    if (!e) return null;
    let o = e[1];
    o.length === 3 && (o = o.split("").map((u) => u + u).join(""));
    const r = parseInt(o.substring(0, 2), 16), s = parseInt(o.substring(2, 4), 16), i = parseInt(o.substring(4, 6), 16);
    let l = 1;
    if (o.length === 8) {
      const u = parseInt(o.substring(6, 8), 16);
      l = Math.round(u / 255 * 1e3) / 1e3;
    }
    return {
      r,
      g: s,
      b: i,
      a: l
    };
  }
  function Je(t) {
    if (!t || typeof t != "string" || !t.match(F.RGB)) return null;
    const o = t.match(/\d+\.?\d*/g);
    if (!o || o.length < 3) return null;
    const r = parseInt(o[0], 10), s = parseInt(o[1], 10), i = parseInt(o[2], 10), l = o[3] !== void 0 ? parseFloat(o[3]) : 1;
    return r < 0 || r > 255 || s < 0 || s > 255 || i < 0 || i > 255 || l < 0 || l > 1 ? null : {
      r,
      g: s,
      b: i,
      a: Math.round(l * 1e3) / 1e3
    };
  }
  function N(t) {
    if (!t || typeof t != "string") return null;
    const e = t.trim();
    return e.startsWith("#") ? Ue(e) : e.toLowerCase().startsWith("rgb") ? Je(e) : null;
  }
  function Ke(t) {
    if (!t || typeof t != "string") return null;
    const e = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi, o = Array.from(t.matchAll(e));
    if (o.length < 2) return null;
    const r = o.map((s, i) => {
      const l = s[1];
      let u;
      return s[2] ? u = parseFloat(s[2]) : u = i / (o.length - 1) * 100, {
        color: l,
        position: u
      };
    });
    return r.sort((s, i) => s.position - i.position), r;
  }
  function Qe(t) {
    if (!t || t.length < 2) return null;
    const e = t.find((d) => d.position === 50);
    if (e) {
      const d = N(e.color);
      return d ? d.a === 1 ? `rgb(${d.r}, ${d.g}, ${d.b})` : `rgba(${d.r}, ${d.g}, ${d.b}, ${d.a})` : null;
    }
    let o = null, r = null;
    for (let d = 0; d < t.length; d++) if (t[d].position <= 50 && (o = t[d]), t[d].position > 50 && !r) {
      r = t[d];
      break;
    }
    if (!r && o) {
      const d = N(o.color);
      return d ? d.a === 1 ? `rgb(${d.r}, ${d.g}, ${d.b})` : `rgba(${d.r}, ${d.g}, ${d.b}, ${d.a})` : null;
    }
    if (!o && r) {
      const d = N(r.color);
      return d ? d.a === 1 ? `rgb(${d.r}, ${d.g}, ${d.b})` : `rgba(${d.r}, ${d.g}, ${d.b}, ${d.a})` : null;
    }
    if (!o || !r) return null;
    const s = N(o.color), i = N(r.color);
    if (!s || !i) return null;
    const l = r.position - o.position;
    if (l === 0) {
      const d = i;
      return d.a === 1 ? `rgb(${d.r}, ${d.g}, ${d.b})` : `rgba(${d.r}, ${d.g}, ${d.b}, ${d.a})`;
    }
    const u = (50 - o.position) / l, f = Math.round(s.r + (i.r - s.r) * u), n = Math.round(s.g + (i.g - s.g) * u), b = Math.round(s.b + (i.b - s.b) * u), g = Math.round((s.a + (i.a - s.a) * u) * 1e3) / 1e3;
    return g === 1 ? `rgb(${f}, ${n}, ${b})` : `rgba(${f}, ${n}, ${b}, ${g})`;
  }
  ie = function(t) {
    if (t == null || typeof t != "string") return null;
    const e = t.trim();
    if (e === "") return null;
    if (!F.GRADIENT_PREFIX.test(e)) return N(e) ? e : null;
    try {
      const r = Ke(e);
      return r ? Qe(r) : null;
    } catch {
      return null;
    }
  };
  function Ze(t, e, o) {
    if (t.fallbackFields && Array.isArray(t.fallbackFields) && t.fallbackFields.length > 0) for (const r of t.fallbackFields) {
      const s = e[r];
      if (s && typeof s == "string") {
        const i = ee(s);
        if (i.isValid && i.normalizedValue.trim() !== "") return i.normalizedValue;
      }
    }
    return !t.fallbackFields || t.fallbackFields.length > 0 ? o : null;
  }
  function et({ field: t, data: e, onDataChange: o, props: r }) {
    const s = t.name, i = e[s], [l, u] = m.useState(i || ""), [f, n] = m.useState(false), [b, g] = m.useState(null), d = m.useRef(false), a = m.useRef(i), c = m.useRef(null), p = fe(r.context.socket, r.context.theme), $ = p.palette.primary.main, { anchorOrigin: y, transformOrigin: B, maxHeight: V, setContentRef: M, popoverActionRef: P } = Ee(b, !!b);
    m.useEffect(() => () => {
      c.current !== null && clearTimeout(c.current);
    }, []);
    const A = m.useCallback((S, H = false) => {
      if (c.current !== null && (clearTimeout(c.current), c.current = null), S == null) {
        u(""), n(false), a.current = null, o({
          [s]: null
        }), d.current = false;
        return;
      }
      if (typeof S != "string") {
        n(true);
        return;
      }
      if (S.trim() === "") {
        u(""), n(false), a.current = null, o({
          [s]: null
        }), d.current = false;
        return;
      }
      const I = ee(S);
      if (u(S), !I.isValid) {
        n(true);
        return;
      }
      n(false);
      let C;
      if (t.noGradient === true) {
        const j = ie(I.normalizedValue);
        if (j === null) {
          n(true);
          return;
        }
        C = j;
      } else C = I.normalizedValue || null;
      a.current = C, H ? c.current = setTimeout(() => {
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
    ]), T = !!b;
    return m.useEffect(() => {
      if (i !== a.current) {
        a.current = i;
        const S = i || "";
        u(S), n(false), (!S || S.trim() === "") && (d.current = false);
      }
    }, [
      i
    ]), m.useEffect(() => {
      if (!T || d.current) return;
      if (i && i.trim() !== "") {
        d.current = true;
        return;
      }
      const S = Ze(t, e, $);
      if (S) {
        const H = ee(S);
        if (H.isValid) if (t.noGradient === true) {
          const E = ie(H.normalizedValue);
          E !== null && (u(S), n(false), a.current = E, o({
            [s]: E
          }));
        } else u(S), n(false), o({
          [s]: S
        });
      }
      d.current = true;
    }, [
      T,
      e,
      s,
      t,
      i,
      $,
      o
    ]), h.jsx(h.Fragment, {
      children: h.jsxs(de, {
        theme: p,
        children: [
          h.jsxs(w, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              h.jsx(Me, {
                variant: "standard",
                fullWidth: true,
                value: l,
                error: f,
                helperText: f ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "",
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
              l && h.jsx(Fe, {
                onClick: O,
                title: Z.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: h.jsx(Le, {})
              }),
              h.jsx(w, {
                onClick: (S) => g(S.currentTarget),
                title: Z.t("choose_color"),
                sx: {
                  mt: l ? "4px" : "-2px",
                  px: "4px",
                  py: l ? "4px" : "3px",
                  backgroundColor: l ? p.name === "light" ? p.palette.common.white : "#121212" : "transparent",
                  borderRadius: "1px",
                  display: "inline-block",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                  border: f ? `1px solid ${p.palette.error.main}` : l ? `1px solid ${p.name === "light" ? p.palette.grey[400] : p.palette.common.black}` : `1px dashed ${p.name === "light" ? p.palette.grey[400] : p.palette.text.secondary}`,
                  opacity: f ? 0.6 : 1
                },
                children: h.jsx(w, {
                  sx: {
                    width: l ? "36px" : "38px",
                    height: l ? "14px" : "18px",
                    borderRadius: "2px",
                    background: f ? "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)" : l || "transparent"
                  }
                })
              })
            ]
          }),
          h.jsx(Ve, {
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
            open: T,
            anchorEl: b,
            onClose: () => g(null),
            transformOrigin: B,
            anchorOrigin: y,
            children: h.jsx(w, {
              ref: M,
              sx: {
                borderRadius: "6px"
              },
              children: h.jsx(Pe, {
                value: l || p.palette.primary.main,
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
    const { name: e, label: o, default: r = "", fallbackFields: s, noGradient: i, hidden: l } = t, u = {
      name: e,
      label: o,
      default: r,
      type: "custom",
      component: (f, n, b, g) => h.jsx(et, {
        field: f,
        data: n,
        onDataChange: b,
        props: g
      })
    };
    return s !== void 0 && (u.fallbackFields = s), i !== void 0 && (u.noGradient = i), l !== void 0 && (u.hidden = l), u;
  };
  xt = function(t, e, o) {
    return X({
      name: t,
      label: e,
      fallbackFields: [
        "sliderColor"
      ],
      ...o
    });
  };
  let ae, tt, Q, ot, rt, at;
  ae = (t) => {
    if (!t || typeof t != "string") return false;
    const e = t.trim();
    return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
  };
  Ct = (t) => {
    const { groupName: e = "", allFields: o = true } = t || {}, r = [
      {
        label: "",
        type: "custom",
        component: () => h.jsx(z, {
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
          const f = l !== void 0 ? l : e, n = i[`icon${f}`], b = i[`iconSmall${f}`];
          return (f === "" || f === "Active") && (u = false), l !== void 0 && (u = !i.iconColor && !i.enableIconColorMask && !i[`iconColor${l}`] && !ae(n) && !ae(b)), u;
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
        component: () => h.jsx(z, {
          dividerText: "header"
        }),
        hidden: (i, l) => i.noHeader && !o
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
        component: () => h.jsx(z, {
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
        component: () => h.jsx(z, {
          dividerText: "footer"
        }),
        hidden: (i, l) => i.noFooter && !o
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
        component: () => h.jsx(z, {
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
        component: () => h.jsx(z, {})
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
        component: () => h.jsx(z, {})
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
        component: () => h.jsx(z, {
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
        component: () => h.jsx(z, {
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
        component: () => h.jsx(z, {
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
      return r.filter((l) => !i.includes(l.name));
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
  tt = async (t, e) => {
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
      for (let l = 1; l <= i; l++) o.forEach((u) => {
        delete t[`${u}${l}`];
      });
      t.values_count = 0;
    }
  };
  ot = (t, e) => {
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
  nt = (t, e = "oid") => async (o, r, s, i) => {
    if (!r[e]) {
      Q(r, e), setTimeout(() => s(r), 100);
      return;
    }
    try {
      const l = await i.getObject(r[e]);
      if (!l) {
        Q(r, e), setTimeout(() => s(r), 100);
        return;
      }
      const u = l.common.type;
      if (!t.includes(u)) return;
      const f = {
        _id: l._id,
        name: l.common.name || "",
        type: u,
        icon: await tt(i, l),
        write: l.common.write,
        onlyDisplay: !l.common.write,
        unit: l.common.unit || "",
        minValue: l.common.min || 0,
        maxValue: l.common.max || 100
      };
      if (r[`${e}Object`] = f, r.icon = f.icon, r.write = f.write, r.onlyDisplay = f.onlyDisplay, r.minValue = f.minValue, r.maxValue = f.maxValue, l.common.states) {
        let n = l.common.states;
        if (Array.isArray(n)) {
          const b = {};
          n.forEach((g) => {
            b[g] = g;
          }), n = b;
        }
        r[`${e}Object`].commonStates = n, e === "oid" && (r.values_count = Object.keys(n).length, Object.entries(n).forEach(([b, g], d) => {
          const a = d + 1;
          r[`value${a}`] = ot(b, u), r[`alias${a}`] = String(g);
        }));
      } else u === "boolean" && e === "oid" ? (r[`${e}Object`].commonStates = {
        true: "TRUE",
        false: "FALSE"
      }, r.values_count = 2, r.value1 = true, r.alias1 = "TRUE", r.value2 = false, r.alias2 = "FALSE") : e === "oid" && (r.values_count = 0);
      e === "oid" && r.ignoreCommonStates !== false && (r.values_count = 0), setTimeout(() => s(r), 100);
    } catch (l) {
      console.error(`Error handling OID change for ${r[e]}:`, l), Q(r, e), setTimeout(() => s(r), 100);
    }
  };
  yt = (t) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: nt(t)
    },
    {
      label: "",
      type: "custom",
      component: () => h.jsx(z, {}),
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
      component: () => h.jsx(z, {}),
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
  rt = () => {
    const { isSignalVisible: t, refService: e, widget: o } = m.useContext(W), r = m.useMemo(() => {
      const i = [], l = Number(o.data["signals-count"]) || 0;
      for (let u = 0; u < l; u++) t(u) && i.push(u);
      return i;
    }, [
      o.data,
      t
    ]), s = m.useMemo(() => {
      const i = {};
      return r.forEach((l) => {
        i[l] = o.data[`signals-color-${l}`];
      }), i;
    }, [
      o.data,
      r
    ]);
    m.useEffect(() => {
      if (!(e == null ? void 0 : e.current)) return;
      const l = e.current.children, u = [];
      Array.from(l).forEach((f) => {
        const n = f.children[0];
        n && n instanceof HTMLElement && n.className === "vis-signal-icon iconOwn" && u.push(n);
      }), u.forEach((f, n) => {
        const b = r[n], g = b !== void 0 ? s[b] : void 0;
        g ? (f.style.color = g, f.style.filter = "drop-shadow(0px 10000px 0)", f.style.transform = "translateY(-10000px)") : (f.style.color = "", f.style.filter = "", f.style.transform = "");
      });
    }, [
      r,
      s,
      e
    ]);
  };
  it = (t, e = 28) => {
    const [o, r] = m.useState({
      width: void 0,
      height: void 0,
      maxWidth: void 0
    }), s = m.useCallback((l) => {
      if (l.length === 0) return;
      const u = l[0], { width: f, height: n } = u.contentRect, b = Math.round(f), g = Math.round(n), d = b <= g + e + 12 ? b - e - 12 : g;
      r({
        width: b,
        height: g,
        maxWidth: d
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
    ]), o;
  };
  at = (t) => {
    const { widget: e } = m.useContext(W), [o, r] = m.useState("100%"), [s, i] = m.useState("100%"), { width: l, height: u } = it(t), f = m.useMemo(() => ({
      basePadding: e.data.basePadding || 0,
      isSquare: e.data.square || false,
      isCircle: e.data.circle || false
    }), [
      e.data.basePadding,
      e.data.square,
      e.data.circle
    ]), n = m.useMemo(() => f.basePadding * 16, [
      f.basePadding
    ]);
    return m.useEffect(() => {
      if (!l || !u || l < 0 || u < 0) return;
      if (!f.isSquare && !f.isCircle) {
        r("100%"), i("100%");
        return;
      }
      if (!(l >= n && u >= n)) {
        r("0px"), i("0px");
        return;
      }
      const g = l - n, d = u - n, a = Math.min(g, d);
      r(`${a}px`), i(`${a}px`);
    }, [
      l,
      u,
      n,
      f.isSquare,
      f.isCircle
    ]), {
      width: o,
      height: s
    };
  };
  D = function(t) {
    return t == null || typeof t != "string" || t.trim() === "" ? null : qe(t) ? t : null;
  };
  lt = m.forwardRef(({ children: t, data: e, oidValue: o = null, isValidType: r = true, bgActive: s = true, sx: i = {} }, l) => {
    const u = m.useRef(null), f = m.useRef(null), [n, b] = m.useState(null), g = m.useRef(null), d = m.useRef(null), a = m.useContext(W);
    if (!a) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: c, widget: p } = a, { backgroundStyles: $, borderStyles: y } = te(p.style), { width: B, height: V } = at(n);
    rt();
    const M = p.data.oidObject, P = M == null ? void 0 : M._id, A = m.useMemo(() => {
      if (p.data.noFooter) return "";
      const O = o || o === 0 || String(o) === "false" ? `${o}${(M == null ? void 0 : M.unit) ?? ""}` : "";
      return e.footer || e.alias || e.value || O || "";
    }, [
      e.footer,
      e.alias,
      e.value,
      o,
      M == null ? void 0 : M.unit,
      p.data.noFooter
    ]), _ = m.useMemo(() => U({
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
    ]), k = m.useMemo(() => U({
      overflow: "hidden",
      width: B,
      height: V,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: s && c ? e.background : s ? e.background || "transparent" : c ? void 0 : "transparent",
      borderColor: c ? "" : e.background || (y == null ? void 0 : y["border-color"]),
      borderRadius: p.data.circle || p.data.ellipse ? "50%" : void 0,
      ...i
    }), [
      B,
      V,
      s,
      c,
      e.background,
      y,
      p.data.circle,
      p.data.ellipse,
      i
    ]);
    return m.useEffect(() => {
      p.data.noHeader || !g.current || (g.current.innerHTML = e.header);
    }, [
      e.header,
      p.data.noHeader
    ]), m.useEffect(() => {
      p.data.noFooter || !d.current || (d.current.innerHTML = String(A));
    }, [
      A,
      p.data.noFooter
    ]), m.useImperativeHandle(l, () => ({
      get paper0() {
        return (u == null ? void 0 : u.current) ?? null;
      },
      get paper1() {
        return (f == null ? void 0 : f.current) ?? null;
      },
      get header() {
        return (g == null ? void 0 : g.current) ?? null;
      }
    })), h.jsxs(re, {
      ref: u,
      className: "BASE-PAPER-0",
      square: p.data.squaredCorner,
      variant: p.data.outlinedFrame ? "outlined" : "elevation",
      sx: _,
      children: [
        !!r && h.jsxs(h.Fragment, {
          children: [
            h.jsx(w, {
              sx: {
                width: p.data.noHeader ? "0%" : "100%",
                height: p.data.noHeader ? "0%" : "auto",
                mt: (p.data.basePadding ?? 8) / 2,
                mb: -(p.data.basePadding ?? 8) / 2
              },
              children: h.jsx(Y, {
                ref: g,
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
            h.jsx(w, {
              className: "BASE-BOX-1",
              ref: b,
              sx: {
                overflow: "hidden",
                p: p.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: h.jsx(re, {
                ref: f,
                className: "BASE-PAPER-1",
                elevation: p.data.outlined ? 0 : Number(p.data.baseElevation) || 0,
                square: !p.data.basePadding || p.data.squaredCorner,
                variant: p.data.outlined ? "outlined" : "elevation",
                sx: k,
                children: t
              })
            }),
            h.jsx(w, {
              sx: {
                width: p.data.noFooter ? "0%" : "100%",
                height: p.data.noFooter ? "0%" : "auto",
                mt: -(p.data.basePadding ?? 8) / 2,
                mb: (p.data.basePadding ?? 8) / 2
              },
              children: h.jsx(Y, {
                ref: d,
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
        !r && h.jsx(w, {
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
            children: P ? `${P} has an invalid type!` : "Please select a valid object ID"
          })
        })
      ]
    });
  });
  lt.displayName = "CollectionBase";
  let le;
  ct = (t) => !t || typeof t != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(t);
  st = (t, e, o) => !o && !ct(t) ? {} : !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  };
  le = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  ut = ({ src: t, style: e = {}, alt: o = "" }) => {
    const r = t && t !== "undefined" && t !== null ? t : le;
    return h.jsx("img", {
      src: r,
      alt: o,
      style: e,
      onError: (s) => {
        console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
        const i = s.currentTarget;
        i.onerror = null, i.src = le;
      }
    });
  };
  kt = ({ data: t, widget: e }) => {
    const r = m.useContext(W).theme, s = t.icon, i = t.iconColor || r.palette.primary.main;
    return !e.data.noHeaderIcon && s ? h.jsx(ut, {
      alt: "",
      src: s,
      style: {
        position: "absolute",
        top: `calc(0px - ${t.iconYOffsetCm})`,
        right: `calc(0px - ${t.iconXOffsetCm})`,
        height: t.iconSizeCm,
        ...st(s, i, !!t.forceColorMaskCm)
      }
    }) : null;
  };
  function dt(t, e) {
    return t[e];
  }
  function ce(t) {
    return typeof t == "object" && t !== null && "sliderOrientation" in t;
  }
  ft = (t) => typeof t == "number" ? `calc(${t / 100}rem * 0.875)` : void 0;
  function mt(t) {
    return {
      markerIconSize: t.markerIconSize,
      markerTextColor: t.markerTextColor,
      markerTextSize: t.markerTextSize,
      markerIconColor: t.markerIconColor
    };
  }
  function gt(t) {
    return {};
  }
  function v(t) {
    for (const e of t) if (e.condition !== false && e.value !== void 0 && e.value !== null && !(typeof e.value == "string" && e.value.trim() === "")) return e.value;
  }
  function bt(t) {
    const { rxData: e, oidObject: o, oidName: r, theme: s, fontStyles: i, textStyles: l, backgroundStyles: u, formatSize: f, getDataValue: n, widgetResolver: b, isSlider: g } = t, d = (a) => a && String(a) !== "" ? String(a) : void 0;
    return {
      icon: (a, c) => v([
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
          value: n("icon", String(a))
        },
        {
          value: n("iconSmall", String(a))
        },
        {
          value: n("icon", "")
        },
        {
          value: n("iconSmall", "")
        }
      ]) ?? "",
      iconActive: (a, c) => c ? v([
        {
          condition: !!e.noIcon,
          value: ""
        },
        {
          value: n("icon", String(a))
        },
        {
          value: n("iconSmall", String(a))
        }
      ]) ?? "" : "",
      iconSizeCm: (a, c) => v([
        {
          condition: n("iconSize", "") === 0,
          value: "0px"
        },
        {
          condition: !!n("iconSize", ""),
          value: `calc(24px * ${n("iconSize", "")} / 100)`
        }
      ]) ?? "24px",
      iconSize: (a, c) => v([
        {
          condition: c && n("iconSize", "Active") === 0,
          value: "0px"
        },
        {
          condition: c && !!n("iconSize", "Active"),
          value: `calc(24px * ${n("iconSize", "Active")} / 100)`
        },
        {
          condition: String(a) !== "" && n("iconSize", String(a)) === 0,
          value: "0px"
        },
        {
          condition: String(a) !== "" && !!n("iconSize", String(a)),
          value: `calc(24px * ${n("iconSize", String(a))} / 100)`
        },
        {
          condition: g && typeof b.markerIconSize == "number",
          value: `calc(24px * ${b.markerIconSize} / 100)`
        },
        {
          condition: n("iconSize", "") === 0,
          value: "0px"
        },
        {
          condition: !!n("iconSize", ""),
          value: `calc(24px * ${n("iconSize", "")} / 100)`
        }
      ]) ?? "24px",
      iconSizeActive: (a, c) => c ? v([
        {
          condition: n("iconSize", String(a)) === 0,
          value: "0px"
        },
        {
          condition: !!n("iconSize", String(a)),
          value: `calc(24px * ${n("iconSize", String(a))} / 100)`
        }
      ]) ?? "24px" : "24px",
      iconSizeOnly: (a, c) => v([
        {
          condition: c && (!!n("iconSize", "Active") || n("iconSize", "Active") === 0),
          value: `${n("iconSize", "Active")}%`
        },
        {
          condition: !!n("iconSize", String(a)) || n("iconSize", String(a)) === 0,
          value: `${n("iconSize", String(a))}%`
        }
      ]) ?? "100%",
      iconSizeActiveOnly: (a, c) => c ? v([
        {
          value: n("iconSize", String(a))
        }
      ]) ?? void 0 : void 0,
      iconWidth: (a, c) => v([
        {
          condition: c,
          value: e.iconSizeActive
        },
        {
          value: n("iconSize", String(a))
        },
        {
          condition: g,
          value: b.markerIconSize
        },
        {
          value: e.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconHeight: (a, c) => v([
        {
          condition: c,
          value: e.iconSizeActive
        },
        {
          value: n("iconSize", String(a))
        },
        {
          condition: g,
          value: b.markerIconSize
        },
        {
          value: e.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      forceColorMaskCm: (a, c) => v([
        {
          value: n("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMask: (a, c) => v([
        {
          condition: c,
          value: n("enableIconColorMask", "Active")
        },
        {
          value: n("enableIconColorMask", String(a))
        },
        {
          condition: !!n("enableIconColorMask", String(a)),
          value: n("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMaskActive: (a, c) => c ? v([
        {
          value: n("enableIconColorMask", String(a))
        }
      ]) ?? false : false,
      iconColor: (a, c) => v([
        {
          condition: c,
          value: n("iconColor", "Active")
        },
        {
          condition: String(a) !== "",
          value: n("iconColor", String(a))
        },
        {
          condition: g,
          value: b.markerIconColor
        },
        {
          value: n("iconColor", "")
        }
      ]) ?? s.palette.primary.main,
      iconColorActive: (a, c) => c ? v([
        {
          value: n("iconColor", String(a))
        }
      ]) ?? "" : "",
      iconHover: (a, c) => v([
        {
          value: e.iconHover ? `${e.iconHover}%` : void 0
        }
      ]) ?? "",
      iconHoverActive: (a, c) => c ? v([
        {
          value: n("iconHover", String(a)) ? `${n("iconHover", String(a))}%` : void 0
        }
      ]) ?? void 0 : void 0,
      iconXOffsetCm: (a, c) => v([
        {
          value: n("iconXOffset", "")
        }
      ]) ?? "0px",
      iconYOffsetCm: (a, c) => v([
        {
          value: n("iconYOffset", "")
        }
      ]) ?? "0px",
      iconXOffset: (a, c) => v([
        {
          condition: c,
          value: n("iconXOffset", "Active")
        },
        {
          value: n("iconXOffset", String(a))
        }
      ]) ?? "0px",
      iconYOffset: (a, c) => v([
        {
          condition: c,
          value: n("iconYOffset", "Active")
        },
        {
          value: n("iconYOffset", String(a))
        }
      ]) ?? "0px",
      iconXOffsetActive: (a, c) => c ? v([
        {
          condition: !n("iconXOffset", String(a)),
          value: "0px"
        },
        {
          value: n("iconXOffset", String(a))
        }
      ]) ?? "0px" : "0px",
      iconYOffsetActive: (a, c) => c ? v([
        {
          condition: !n("iconYOffset", String(a)),
          value: "0px"
        },
        {
          value: n("iconYOffset", String(a))
        }
      ]) ?? "0px" : "0px",
      textColorActive: (a, c) => c ? v([
        {
          value: n("textColor", String(a)),
          condition: n("textColor", String(a)) !== ""
        },
        {
          condition: g,
          value: b.markerTextColor && b.markerTextColor !== "" ? b.markerTextColor : void 0
        },
        {
          value: e.textColor && e.textColor !== "" ? e.textColor : void 0
        }
      ]) ?? void 0 : void 0,
      textColorCm: (a, c) => v([
        {
          condition: typeof n("textColor", "") == "string",
          value: n("textColor", "")
        },
        {
          condition: typeof (l == null ? void 0 : l.color) == "string",
          value: l == null ? void 0 : l.color
        }
      ]) ?? "",
      textColor: (a, c) => v([
        {
          condition: c && typeof n("textColor", "Active") == "string",
          value: n("textColor", "Active")
        },
        {
          condition: typeof n("textColor", String(a)) == "string",
          value: n("textColor", String(a))
        },
        {
          condition: g,
          value: b.markerTextColor && b.markerTextColor !== "" ? b.markerTextColor : void 0
        },
        {
          condition: typeof n("textColor", "") == "string",
          value: n("textColor", "")
        },
        {
          condition: typeof (l == null ? void 0 : l.color) == "string",
          value: l == null ? void 0 : l.color
        }
      ]) ?? "",
      fontSize: (a, c) => v([
        {
          condition: c && typeof e.valueSizeActive == "number",
          value: f(e.valueSizeActive)
        },
        {
          value: typeof n("valueSize", String(a)) == "number" ? f(n("valueSize", String(a))) : void 0
        },
        {
          condition: g && typeof b.markerTextSize == "number",
          value: f(b.markerTextSize)
        },
        {
          value: typeof e.valueSize == "number" ? f(e.valueSize) : void 0
        },
        {
          condition: typeof (i == null ? void 0 : i["font-size"]) == "string",
          value: i == null ? void 0 : i["font-size"]
        }
      ]) ?? null,
      headerSize: (a, c) => v([
        {
          condition: c && typeof n("headerSize", "Active") == "number",
          value: `${f(n("headerSize", "Active"))}`
        },
        {
          condition: typeof n("headerSize", String(a)) == "number",
          value: `${f(n("headerSize", String(a)))}`
        },
        {
          condition: typeof n("headerSize", "") == "number",
          value: `${f(n("headerSize", ""))}`
        },
        {
          condition: typeof (i == null ? void 0 : i["font-size"]) == "string",
          value: i == null ? void 0 : i["font-size"]
        }
      ]) ?? null,
      footerSize: (a, c) => v([
        {
          condition: c && typeof n("footerSize", "Active") == "number",
          value: `${f(n("footerSize", "Active"))}`
        },
        {
          condition: typeof n("footerSize", String(a)) == "number",
          value: `${f(n("footerSize", String(a)))}`
        },
        {
          condition: typeof n("footerSize", "") == "number",
          value: `${f(n("footerSize", ""))}`
        },
        {
          condition: typeof (i == null ? void 0 : i["font-size"]) == "string",
          value: i == null ? void 0 : i["font-size"]
        }
      ]) ?? null,
      valueSize: (a, c) => v([
        {
          condition: c && typeof n("valueSize", "Active") == "number",
          value: `${f(n("valueSize", "Active"))}`
        },
        {
          condition: typeof n("valueSize", String(a)) == "number",
          value: `${f(n("valueSize", String(a)))}`
        },
        {
          condition: g && typeof b.markerTextSize == "number",
          value: f(b.markerTextSize)
        },
        {
          condition: typeof n("valueSize", "") == "number",
          value: `${f(n("valueSize", ""))}`
        },
        {
          condition: typeof (i == null ? void 0 : i["font-size"]) == "string",
          value: i == null ? void 0 : i["font-size"]
        }
      ]) ?? null,
      valueSizeActive: (a, c) => c ? v([
        {
          value: typeof n("valueSize", String(a)) == "number" ? f(n("valueSize", String(a))) : null
        }
      ]) ?? null : null,
      header: (a, c) => String(v([
        {
          condition: c,
          value: d(n("header", "Active"))
        },
        {
          value: d(n("header", String(a)))
        },
        {
          value: d(n("header", ""))
        },
        {
          value: d(r)
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      footer: (a, c) => String(v([
        {
          condition: c,
          value: d(n("footer", "Active"))
        },
        {
          value: d(n("footer", String(a)))
        },
        {
          value: d(n("footer", ""))
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      alias: (a, c) => String(n("alias", String(a)) || "").replace(/(\r\n|\n|\r)/gm, ""),
      value: (a, c) => {
        const p = n("value", String(a));
        return p != null ? `${p}${(o == null ? void 0 : o.unit) !== void 0 ? o.unit : ""}` : void 0;
      },
      backgroundColor: (a, c) => v([
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
      backgroundColorActive: (a, c) => c ? n("backgroundColor", String(a)) : void 0,
      background: (a, c) => v([
        {
          condition: c,
          value: n("background", "Active")
        },
        {
          value: n("background", String(a))
        },
        {
          value: n("background", "")
        }
      ]) ?? "",
      backgroundActive: (a, c) => c ? n("background", String(a)) : void 0,
      frameBackgroundColor: (a, c) => v([
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
      frameBackgroundColorActive: (a, c) => c ? n("frameBackgroundColor", String(a)) : void 0,
      frameBackground: (a, c) => v([
        {
          condition: c,
          value: n("frameBackground", "Active")
        },
        {
          value: n("frameBackground", String(a))
        },
        {
          value: n("frameBackground", "")
        }
      ]) ?? "",
      frameBackgroundActive: (a, c) => c ? n("frameBackground", String(a)) : void 0,
      markerIconSize: (a, c) => g ? b.markerIconSize : void 0,
      markerTextColor: (a, c) => g ? b.markerTextColor : void 0,
      markerTextSize: (a, c) => g ? b.markerTextSize : void 0,
      markerIconColor: (a, c) => g ? b.markerIconColor : void 0
    };
  }
  function pt(t = "", e = false, o) {
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
  zt = function(t) {
    const { theme: e, widget: o, widget: { data: r }, getPropertyValue: s } = m.useContext(W), i = r[`${t}Object`], l = s(t), u = i == null ? void 0 : i.name, { fontStyles: f, textStyles: n, backgroundStyles: b } = te(o.style), [g, d] = m.useState(), a = m.useCallback(ft, []), c = m.useCallback((_, k = "") => {
      const O = `${_}${k}`;
      return dt(r, O);
    }, [
      r
    ]), p = m.useMemo(() => ce(r) ? mt(r) : gt(), [
      r
    ]), $ = m.useMemo(() => bt({
      rxData: r,
      oidObject: i,
      oidName: u,
      theme: e,
      fontStyles: f,
      textStyles: n,
      backgroundStyles: b,
      formatSize: a,
      getDataValue: c,
      widgetResolver: p,
      isSlider: ce(r)
    }), [
      r,
      i,
      u,
      e,
      f,
      n,
      b,
      a,
      c,
      p
    ]), y = m.useCallback((_ = "", k = false) => pt(_, k, $), [
      $
    ]), { states: B, widgetStates: V, minValue: M, maxValue: P } = m.useMemo(() => {
      const _ = {};
      let k = null, O = null;
      const T = [], S = i == null ? void 0 : i.type, H = (i == null ? void 0 : i.commonStates) || {}, E = Object.entries(H);
      if (S === "number" || S === "string" || S === "boolean" || S === "mixed") {
        const I = r.ignoreCommonStates === false ? r.values_count : E.length > 0 ? E.length : r.values_count;
        for (let C = 1; C <= I; C++) {
          const j = c("value", String(C)), J = r[`alias${C}`], ge = i == null ? void 0 : i.unit;
          if (j === void 0 || !/\S/.test(String(j))) continue;
          const G = E.find(([he]) => he === String(j)), oe = G ? S === "number" ? Number(G[0]) : String(G[0]) : S === "number" ? Number(j) : j, be = String(l) === String(oe), x = y(C, be);
          T.push({
            value: oe,
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
          const pe = String(G ? G[0] : j);
          _[pe] = J && String(J).trim() !== "" ? J : `${j}${ge}`;
        }
      }
      if (S === "number" && T.length) {
        const I = T.map((C) => typeof C.value == "number" ? C.value : NaN).filter((C) => !isNaN(C));
        I.length > 0 && (k = Math.min(...I), O = Math.max(...I));
      }
      return {
        states: T,
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
      l,
      y
    ]), A = m.useMemo(() => {
      switch (i == null ? void 0 : i.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const k = B.findIndex((O) => String(O.value) === String(l));
          return k !== -1 ? (d(k + 1), y(k + 1, true)) : (d(void 0), y("", true));
        }
        default:
          return y("", true);
      }
    }, [
      i,
      l,
      B,
      y
    ]);
    return {
      widgetStates: V,
      minValue: M,
      maxValue: P,
      data: A,
      activeIndex: g,
      setActiveIndex: d,
      oidValue: l,
      states: B,
      resolveStyleData: y
    };
  };
});
export {
  z as C,
  q as D,
  ut as S,
  __tla,
  W as a,
  D as b,
  lt as c,
  kt as d,
  Ct as e,
  yt as f,
  st as g,
  X as h,
  xt as i,
  ct as j,
  ft as k,
  ie as l,
  it as m,
  te as n,
  nt as o,
  U as p,
  Le as q,
  zt as u,
  St as w
};
