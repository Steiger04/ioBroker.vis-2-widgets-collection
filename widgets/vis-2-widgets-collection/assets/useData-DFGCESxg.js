import { u as ve, j as b, s as ce, d as he, e as Se, a7 as xe, m as se, i as Ce, a8 as R, a9 as ye, aa as ke, ab as ze, ac as oe, a3 as ue, n as w, T as Y, G as Q, c as $e, ad as Ae, a0 as _e, I as Oe, ae as je, af as Ie, P as ne, __tla as __tla_0 } from "./usePopoverPositioning-C05Nu8XW.js";
import { v as m, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
let z, q, tt, W, D, Qe, gt, ft, mt, et, X, dt, Ze, nt, re, Ke, ee, qe, U, He, bt, ut;
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
  let Te, we, Be;
  Te = (t) => {
    const { absolute: e, children: o, classes: r, flexItem: s, light: i, orientation: a, textAlign: u, variant: d } = t;
    return Se({
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
    }, xe, r);
  };
  we = ce("div", {
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
          borderColor: t.vars ? `rgba(${t.vars.palette.dividerChannel} / 0.08)` : Ce(t.palette.divider, 0.08)
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
  Be = ce("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.wrapper,
        o.orientation === "vertical" && e.wrapperVertical
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
  q = m.forwardRef(function(e, o) {
    const r = ve({
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
    }, $ = Te(g);
    return b.jsx(we, {
      as: d,
      className: he($.root, a),
      role: v,
      ref: o,
      ownerState: g,
      "aria-orientation": v === "separator" && (d !== "hr" || u === "vertical") ? u : void 0,
      ...c,
      children: i ? b.jsx(Be, {
        className: $.wrapper,
        ownerState: g,
        children: i
      }) : null
    });
  });
  q && (q.muiSkipListHighlight = true);
  let Ee, Fe;
  Ee = [
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
  ee = (t) => m.useMemo(() => {
    if (!t) return {
      backgroundStyles: void 0,
      borderStyles: void 0,
      textStyles: void 0,
      fontStyles: void 0,
      boxStyles: void 0
    };
    const e = {}, o = {}, r = {}, s = {}, i = {};
    return Ee.forEach((a) => {
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
  Fe = [
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
  function Me(t) {
    const { typography: e } = t;
    if (!e) return t;
    const o = {
      ...e
    };
    for (const r of Fe) delete o[r];
    return delete o.pxToRem, {
      ...t,
      typography: o
    };
  }
  function de(t, e, o) {
    const [r, s] = m.useState("");
    m.useEffect(() => {
      let a = true;
      const u = (d, n) => {
        a && s(typeof (n == null ? void 0 : n.val) == "string" ? n.val : "");
      };
      return t.getState(R).then((d) => {
        a && s(typeof (d == null ? void 0 : d.val) == "string" ? d.val : "");
      }).catch((d) => console.error(`Cannot read theme state ${R}: ${d}`)), t.subscribeState(R, u).catch((d) => console.error(`Cannot subscribe theme state ${R}: ${d}`)), () => {
        a = false;
        try {
          t.unsubscribeState(R, u);
        } catch (d) {
          console.error(`Cannot unsubscribe theme state ${R}: ${d}`);
        }
      };
    }, [
      t
    ]);
    const i = m.useMemo(() => {
      if (!r) return {};
      try {
        const a = ye(JSON.parse(r));
        return a.isValid ? a.theme ?? {} : {};
      } catch {
        return {};
      }
    }, [
      r
    ]);
    return m.useEffect(() => {
      ke(i.googleFonts);
    }, [
      i.googleFonts
    ]), m.useMemo(() => {
      const a = Me(e);
      return ze(oe(oe(a, o ?? {}), i));
    }, [
      e,
      o,
      i
    ]);
  }
  let L, fe;
  L = (t) => t.startsWith("&") || t.includes(" ") || t.startsWith("@") ? t : t.replace(/-([a-z])/g, (e, o) => o.toUpperCase());
  fe = (t) => {
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
        fe(r)
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
        const i = r.filter((a) => a != null);
        return [
          s,
          i.length > 0 ? i : void 0
        ];
      }
      if (typeof r == "object" && r !== null) {
        const i = fe(r);
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
  function Ve({ children: t, context: e }) {
    const o = e.theme, r = e.widget, s = e.socket, { fontStyles: i, textStyles: a } = ee(r.style || {}), u = m.useMemo(() => ({
      palette: {
        text: {
          primary: (a == null ? void 0 : a.color) || o.palette.primary.main
        }
      },
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              ...U(i),
              ...U(a)
            }
          }
        }
      }
    }), [
      i,
      a,
      o.palette.primary.main
    ]), d = de(s, o, u);
    return console.log("CollectionProvider: _theme", d), b.jsx(ue, {
      theme: d,
      children: b.jsx(W.Provider, {
        value: {
          ...e,
          theme: d
        },
        children: t
      })
    });
  }
  ut = function(t, e) {
    return b.jsx(Ve, {
      context: e,
      children: t
    });
  };
  let M;
  z = ({ dividerText: t = "" }) => {
    const e = {
      position: "absolute",
      left: 0,
      width: "100%"
    };
    return b.jsx(w, {
      sx: {
        display: "inline-block",
        pt: 1.5,
        pb: t ? 2 : 1.5
      },
      children: t ? b.jsx(q, {
        sx: e,
        children: b.jsx(Y, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: Q.t(t)
        })
      }) : b.jsx(q, {
        sx: e
      })
    });
  };
  He = $e(b.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  M = {
    HEX: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    RGB: /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i,
    GRADIENT: /^(linear-gradient|radial-gradient)\(.*\)$/i,
    GRADIENT_PREFIX: /^(linear-gradient|radial-gradient)\(/i
  };
  function Z(t) {
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
  function Pe(t) {
    if (t == null || typeof t != "string") return false;
    const e = t.trim();
    return e === "" ? false : M.GRADIENT_PREFIX.test(e);
  }
  function Re(t) {
    if (!t || typeof t != "string") return null;
    const e = t.match(M.HEX);
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
  function De(t) {
    if (!t || typeof t != "string" || !t.match(M.RGB)) return null;
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
  function N(t) {
    if (!t || typeof t != "string") return null;
    const e = t.trim();
    return e.startsWith("#") ? Re(e) : e.toLowerCase().startsWith("rgb") ? De(e) : null;
  }
  function Ne(t) {
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
  function We(t) {
    if (!t || t.length < 2) return null;
    const e = t.find((f) => f.position === 50);
    if (e) {
      const f = N(e.color);
      return f ? f.a === 1 ? `rgb(${f.r}, ${f.g}, ${f.b})` : `rgba(${f.r}, ${f.g}, ${f.b}, ${f.a})` : null;
    }
    let o = null, r = null;
    for (let f = 0; f < t.length; f++) if (t[f].position <= 50 && (o = t[f]), t[f].position > 50 && !r) {
      r = t[f];
      break;
    }
    if (!r && o) {
      const f = N(o.color);
      return f ? f.a === 1 ? `rgb(${f.r}, ${f.g}, ${f.b})` : `rgba(${f.r}, ${f.g}, ${f.b}, ${f.a})` : null;
    }
    if (!o && r) {
      const f = N(r.color);
      return f ? f.a === 1 ? `rgb(${f.r}, ${f.g}, ${f.b})` : `rgba(${f.r}, ${f.g}, ${f.b}, ${f.a})` : null;
    }
    if (!o || !r) return null;
    const s = N(o.color), i = N(r.color);
    if (!s || !i) return null;
    const a = r.position - o.position;
    if (a === 0) {
      const f = i;
      return f.a === 1 ? `rgb(${f.r}, ${f.g}, ${f.b})` : `rgba(${f.r}, ${f.g}, ${f.b}, ${f.a})`;
    }
    const u = (50 - o.position) / a, d = Math.round(s.r + (i.r - s.r) * u), n = Math.round(s.g + (i.g - s.g) * u), p = Math.round(s.b + (i.b - s.b) * u), v = Math.round((s.a + (i.a - s.a) * u) * 1e3) / 1e3;
    return v === 1 ? `rgb(${d}, ${n}, ${p})` : `rgba(${d}, ${n}, ${p}, ${v})`;
  }
  re = function(t) {
    if (t == null || typeof t != "string") return null;
    const e = t.trim();
    if (e === "") return null;
    if (!M.GRADIENT_PREFIX.test(e)) return N(e) ? e : null;
    try {
      const r = Ne(e);
      return r ? We(r) : null;
    } catch {
      return null;
    }
  };
  function Ge(t, e, o) {
    if (t.fallbackFields && Array.isArray(t.fallbackFields) && t.fallbackFields.length > 0) for (const r of t.fallbackFields) {
      const s = e[r];
      if (s && typeof s == "string") {
        const i = Z(s);
        if (i.isValid && i.normalizedValue.trim() !== "") return i.normalizedValue;
      }
    }
    return !t.fallbackFields || t.fallbackFields.length > 0 ? o : null;
  }
  function Xe({ field: t, data: e, onDataChange: o, props: r }) {
    const s = t.name, i = e[s], [a, u] = m.useState(i || ""), [d, n] = m.useState(false), [p, v] = m.useState(null), f = m.useRef(false), l = m.useRef(i), c = m.useRef(null), g = de(r.context.socket, r.context.theme), $ = g.palette.primary.main, { anchorOrigin: y, transformOrigin: B, maxHeight: V, setContentRef: F, popoverActionRef: H } = Ae(p, !!p);
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
      const T = Z(S);
      if (u(S), !T.isValid) {
        n(true);
        return;
      }
      n(false);
      let C;
      if (t.noGradient === true) {
        const j = re(T.normalizedValue);
        if (j === null) {
          n(true);
          return;
        }
        C = j;
      } else C = T.normalizedValue || null;
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
      const S = Ge(t, e, $);
      if (S) {
        const P = Z(S);
        if (P.isValid) if (t.noGradient === true) {
          const E = re(P.normalizedValue);
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
      children: b.jsxs(ue, {
        theme: g,
        children: [
          b.jsxs(w, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              b.jsx(_e, {
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
              a && b.jsx(Oe, {
                onClick: O,
                title: Q.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: b.jsx(He, {})
              }),
              b.jsx(w, {
                onClick: (S) => v(S.currentTarget),
                title: Q.t("choose_color"),
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
                children: b.jsx(w, {
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
          b.jsx(je, {
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
            children: b.jsx(w, {
              ref: F,
              sx: {
                borderRadius: "6px"
              },
              children: b.jsx(Ie, {
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
      component: (d, n, p, v) => b.jsx(Xe, {
        field: d,
        data: n,
        onDataChange: p,
        props: v
      })
    };
    return s !== void 0 && (u.fallbackFields = s), i !== void 0 && (u.noGradient = i), a !== void 0 && (u.hidden = a), u;
  };
  dt = function(t, e, o) {
    return X({
      name: t,
      label: e,
      fallbackFields: [
        "sliderColor"
      ],
      ...o
    });
  };
  let ie, Ye, J, Le, Ue, Je;
  ie = (t) => {
    if (!t || typeof t != "string") return false;
    const e = t.trim();
    return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
  };
  ft = (t) => {
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
          return (d === "" || d === "Active") && (u = false), a !== void 0 && (u = !i.iconColor && !i.enableIconColorMask && !i[`iconColor${a}`] && !ie(n) && !ie(p)), u;
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
  Ye = async (t, e) => {
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
  J = (t, e = "oid") => {
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
  Le = (t, e) => {
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
  qe = (t, e = "oid") => async (o, r, s, i) => {
    if (!r[e]) {
      J(r, e), setTimeout(() => s(r), 100);
      return;
    }
    try {
      const a = await i.getObject(r[e]);
      if (!a) {
        J(r, e), setTimeout(() => s(r), 100);
        return;
      }
      const u = a.common.type;
      if (!t.includes(u)) return;
      const d = {
        _id: a._id,
        name: a.common.name || "",
        type: u,
        icon: await Ye(i, a),
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
          r[`value${l}`] = Le(p, u), r[`alias${l}`] = String(v);
        }));
      } else u === "boolean" && e === "oid" ? (r[`${e}Object`].commonStates = {
        true: "TRUE",
        false: "FALSE"
      }, r.values_count = 2, r.value1 = true, r.alias1 = "TRUE", r.value2 = false, r.alias2 = "FALSE") : e === "oid" && (r.values_count = 0);
      e === "oid" && r.ignoreCommonStates !== false && (r.values_count = 0), setTimeout(() => s(r), 100);
    } catch (a) {
      console.error(`Error handling OID change for ${r[e]}:`, a), J(r, e), setTimeout(() => s(r), 100);
    }
  };
  mt = (t) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: qe(t)
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
  Ue = () => {
    const { isSignalVisible: t, refService: e, widget: o } = m.useContext(W), r = m.useMemo(() => {
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
  Ke = (t, e = 28) => {
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
  Je = (t) => {
    const { widget: e } = m.useContext(W), [o, r] = m.useState("100%"), [s, i] = m.useState("100%"), { width: a, height: u } = Ke(t), d = m.useMemo(() => ({
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
    return t == null || typeof t != "string" || t.trim() === "" ? null : Pe(t) ? t : null;
  };
  Qe = m.forwardRef(({ children: t, data: e, oidValue: o = null, isValidType: r = true, bgActive: s = true, sx: i = {} }, a) => {
    const u = m.useRef(null), d = m.useRef(null), [n, p] = m.useState(null), v = m.useRef(null), f = m.useRef(null), l = m.useContext(W);
    if (!l) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: c, widget: g } = l, { backgroundStyles: $, borderStyles: y } = ee(g.style), { width: B, height: V } = Je(n);
    Ue();
    const F = g.data.oidObject, H = F == null ? void 0 : F._id, A = m.useMemo(() => {
      if (g.data.noFooter) return "";
      const O = o || o === 0 || String(o) === "false" ? `${o}${(F == null ? void 0 : F.unit) ?? ""}` : "";
      return e.footer || e.alias || e.value || O || "";
    }, [
      e.footer,
      e.alias,
      e.value,
      o,
      F == null ? void 0 : F.unit,
      g.data.noFooter
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
    })), b.jsxs(ne, {
      ref: u,
      className: "BASE-PAPER-0",
      square: g.data.squaredCorner,
      variant: g.data.outlinedFrame ? "outlined" : "elevation",
      sx: _,
      children: [
        !!r && b.jsxs(b.Fragment, {
          children: [
            b.jsx(w, {
              sx: {
                width: g.data.noHeader ? "0%" : "100%",
                height: g.data.noHeader ? "0%" : "auto",
                mt: (g.data.basePadding ?? 8) / 2,
                mb: -(g.data.basePadding ?? 8) / 2
              },
              children: b.jsx(Y, {
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
            b.jsx(w, {
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
              children: b.jsx(ne, {
                ref: d,
                className: "BASE-PAPER-1",
                elevation: g.data.outlined ? 0 : Number(g.data.baseElevation) || 0,
                square: !g.data.basePadding || g.data.squaredCorner,
                variant: g.data.outlined ? "outlined" : "elevation",
                sx: k,
                children: t
              })
            }),
            b.jsx(w, {
              sx: {
                width: g.data.noFooter ? "0%" : "100%",
                height: g.data.noFooter ? "0%" : "auto",
                mt: -(g.data.basePadding ?? 8) / 2,
                mb: (g.data.basePadding ?? 8) / 2
              },
              children: b.jsx(Y, {
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
        !r && b.jsx(w, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: b.jsx(Y, {
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
  Qe.displayName = "CollectionBase";
  let ae;
  Ze = (t) => !t || typeof t != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(t);
  et = (t, e, o) => !o && !Ze(t) ? {} : !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  };
  ae = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  tt = ({ src: t, style: e = {}, alt: o = "" }) => {
    const r = t && t !== "undefined" && t !== null ? t : ae;
    return b.jsx("img", {
      src: r,
      alt: o,
      style: e,
      onError: (s) => {
        console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
        const i = s.currentTarget;
        i.onerror = null, i.src = ae;
      }
    });
  };
  gt = ({ data: t, widget: e }) => {
    const r = m.useContext(W).theme, s = t.icon, i = t.iconColor || r.palette.primary.main;
    return !e.data.noHeaderIcon && s ? b.jsx(tt, {
      alt: "",
      src: s,
      style: {
        position: "absolute",
        top: `calc(0px - ${t.iconYOffsetCm})`,
        right: `calc(0px - ${t.iconXOffsetCm})`,
        height: t.iconSizeCm,
        ...et(s, i, !!t.forceColorMaskCm)
      }
    }) : null;
  };
  function ot(t, e) {
    return t[e];
  }
  function le(t) {
    return typeof t == "object" && t !== null && "sliderOrientation" in t;
  }
  nt = (t) => typeof t == "number" ? `calc(${t / 100}rem * 0.875)` : void 0;
  function rt(t) {
    return {
      markerIconSize: t.markerIconSize,
      markerTextColor: t.markerTextColor,
      markerTextSize: t.markerTextSize,
      markerIconColor: t.markerIconColor
    };
  }
  function it(t) {
    return {};
  }
  function h(t) {
    for (const e of t) if (e.condition !== false && e.value !== void 0 && e.value !== null && !(typeof e.value == "string" && e.value.trim() === "")) return e.value;
  }
  function at(t) {
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
      ]) ?? null,
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
      ]) ?? null,
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
      ]) ?? null,
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
  function lt(t = "", e = false, o) {
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
  bt = function(t) {
    const { theme: e, widget: o, widget: { data: r }, getPropertyValue: s } = m.useContext(W), i = r[`${t}Object`], a = s(t), u = i == null ? void 0 : i.name, { fontStyles: d, textStyles: n, backgroundStyles: p } = ee(o.style), [v, f] = m.useState(), l = m.useCallback(nt, []), c = m.useCallback((_, k = "") => {
      const O = `${_}${k}`;
      return ot(r, O);
    }, [
      r
    ]), g = m.useMemo(() => le(r) ? rt(r) : it(), [
      r
    ]), $ = m.useMemo(() => at({
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
      isSlider: le(r)
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
    ]), y = m.useCallback((_ = "", k = false) => lt(_, k, $), [
      $
    ]), { states: B, widgetStates: V, minValue: F, maxValue: H } = m.useMemo(() => {
      const _ = {};
      let k = null, O = null;
      const I = [], S = i == null ? void 0 : i.type, P = (i == null ? void 0 : i.commonStates) || {}, E = Object.entries(P);
      if (S === "number" || S === "string" || S === "boolean" || S === "mixed") {
        const T = r.ignoreCommonStates === false ? r.values_count : E.length > 0 ? E.length : r.values_count;
        for (let C = 1; C <= T; C++) {
          const j = c("value", String(C)), K = r[`alias${C}`], me = i == null ? void 0 : i.unit;
          if (j === void 0 || !/\S/.test(String(j))) continue;
          const G = E.find(([pe]) => pe === String(j)), te = G ? S === "number" ? Number(G[0]) : String(G[0]) : S === "number" ? Number(j) : j, ge = String(a) === String(te), x = y(C, ge);
          I.push({
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
          const be = String(G ? G[0] : j);
          _[be] = K && String(K).trim() !== "" ? K : `${j}${me}`;
        }
      }
      if (S === "number" && I.length) {
        const T = I.map((C) => typeof C.value == "number" ? C.value : NaN).filter((C) => !isNaN(C));
        T.length > 0 && (k = Math.min(...T), O = Math.max(...T));
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
      minValue: F,
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
  q as D,
  tt as S,
  __tla,
  W as a,
  D as b,
  Qe as c,
  gt as d,
  ft as e,
  mt as f,
  et as g,
  X as h,
  dt as i,
  Ze as j,
  nt as k,
  re as l,
  Ke as m,
  ee as n,
  qe as o,
  U as p,
  He as q,
  bt as u,
  ut as w
};
