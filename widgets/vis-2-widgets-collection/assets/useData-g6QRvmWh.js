import { u as ve, j as b, s as ce, d as he, e as pe, a2 as Se, m as se, f as xe, a3 as Ce, a4 as ye, a5 as H, a6 as ke, a7 as ze, a8 as $e, a9 as re, aa as Ae, ab as _e, ac as Q, ad as Oe, ae as je, Z as ue, af as Te, l as I, T as Y, G as q, q as we, ag as Ie, o as Be, I as Ee, ah as Me, ai as Ve, P as ie, __tla as __tla_0 } from "./usePopoverPositioning-CABAc1cn.js";
import { v as f, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
let W, J, dt, D, ct, Tt, Ot, jt, G, ut, yt, k, st, gt, Ke, at, te, rt, K, _t, kt, At, zt, wt, $t, Ct, ae, Xe;
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
  let Fe, Pe, He;
  Fe = (t) => {
    const { absolute: e, children: o, classes: i, flexItem: s, light: a, orientation: l, textAlign: u, variant: d } = t;
    return pe({
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
  Pe = ce("div", {
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
  He = ce("span", {
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
  J = f.forwardRef(function(e, o) {
    const i = ve({
      props: e,
      name: "MuiDivider"
    }), { absolute: s = false, children: a, className: l, orientation: u = "horizontal", component: d = a || u === "vertical" ? "div" : "hr", flexItem: r = false, light: m = false, role: g = d !== "hr" ? "separator" : void 0, textAlign: n = "center", variant: c = "fullWidth", ...p } = i, v = {
      ...i,
      absolute: s,
      component: d,
      flexItem: r,
      light: m,
      orientation: u,
      role: g,
      textAlign: n,
      variant: c
    }, C = Fe(v);
    return b.jsx(Pe, {
      as: d,
      className: he(C.root, l),
      role: g,
      ref: o,
      ownerState: v,
      "aria-orientation": g === "separator" && (d !== "hr" || u === "vertical") ? u : void 0,
      ...p,
      children: a ? b.jsx(He, {
        className: C.wrapper,
        ownerState: v,
        children: a
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
  te = (t) => f.useMemo(() => {
    if (!t) return {
      backgroundStyles: void 0,
      borderStyles: void 0,
      textStyles: void 0,
      fontStyles: void 0,
      boxStyles: void 0
    };
    const e = {}, o = {}, i = {}, s = {}, a = {};
    return De.forEach((l) => {
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
  function Re() {
    return f.useSyncExternalStore(Ce, ye);
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
  function Ne(t) {
    const { typography: e } = t;
    if (!e) return t;
    const o = {
      ...e
    };
    for (const i of We) delete o[i];
    return delete o.pxToRem, {
      ...t,
      typography: o
    };
  }
  function de(t, e, o) {
    const [i, s] = f.useState("");
    f.useEffect(() => {
      let r = true;
      const m = (g, n) => {
        r && s(typeof (n == null ? void 0 : n.val) == "string" ? n.val : "");
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
    ]), l = Re(), u = l ?? a;
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
      const r = Ne(e), m = re(r, "palette.primary.main"), g = Ae(_e(u), m), n = Q(Q(r, o ?? {}), g), c = re(n, "corners"), p = Oe(c), v = p ? Q(n, {
        shape: {
          borderRadius: (c == null ? void 0 : c.topLeft) ?? 4
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: p
              }
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: p
              }
            }
          }
        }
      }) : n;
      return je(v);
    }, [
      e,
      o,
      u
    ]);
  }
  let L, fe;
  L = (t) => t.startsWith("&") || t.includes(" ") || t.startsWith("@") ? t : t.replace(/-([a-z])/g, (e, o) => o.toUpperCase());
  fe = (t) => {
    const e = Object.fromEntries(Object.entries(t).map(([o, i]) => {
      if (Array.isArray(i)) {
        const s = i.filter((a) => a != null);
        return [
          L(o),
          s.length > 0 ? s : void 0
        ];
      }
      return typeof i == "object" && i !== null ? [
        L(o),
        fe(i)
      ] : [
        L(o),
        i
      ];
    }).filter(([, o]) => o != null));
    return Object.keys(e).length > 0 ? e : void 0;
  };
  K = (t) => {
    if (!t) return {};
    const e = Object.fromEntries(Object.entries(t).map(([o, i]) => {
      const s = L(o);
      if (Array.isArray(i)) {
        const a = i.filter((l) => l != null);
        return [
          s,
          a.length > 0 ? a : void 0
        ];
      }
      if (typeof i == "object" && i !== null) {
        const a = fe(i);
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
    const o = e.theme, i = e.widget, s = e.socket, { fontStyles: a, textStyles: l } = te(i.style || {}), u = f.useMemo(() => ({
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              ...K(a),
              ...K(l)
            }
          }
        }
      }
    }), [
      a,
      l
    ]), d = de(s, o, u);
    return b.jsxs(ue, {
      theme: d,
      children: [
        b.jsx(Te, {
          styles: {
            html: {
              boxSizing: "border-box"
            },
            "*, *::before, *::after": {
              boxSizing: "inherit"
            }
          }
        }),
        b.jsx(W.Provider, {
          value: {
            ...e,
            theme: d
          },
          children: t
        })
      ]
    });
  }
  Ct = function(t, e) {
    return b.jsx(Ge, {
      context: e,
      children: t
    });
  };
  let M;
  k = ({ dividerText: t = "" }) => {
    const e = {
      position: "absolute",
      left: 0,
      width: "100%"
    };
    return b.jsx(I, {
      sx: {
        display: "inline-block",
        pt: 1.5,
        pb: t ? 2 : 1.5
      },
      children: t ? b.jsx(J, {
        sx: e,
        children: b.jsx(Y, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: q.t(t)
        })
      }) : b.jsx(J, {
        sx: e
      })
    });
  };
  Xe = we(b.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  M = {
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
  function R(t) {
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
      const n = R(e.color);
      return n ? n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})` : null;
    }
    let o = null, i = null;
    for (let n = 0; n < t.length; n++) if (t[n].position <= 50 && (o = t[n]), t[n].position > 50 && !i) {
      i = t[n];
      break;
    }
    if (!i && o) {
      const n = R(o.color);
      return n ? n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})` : null;
    }
    if (!o && i) {
      const n = R(i.color);
      return n ? n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})` : null;
    }
    if (!o || !i) return null;
    const s = R(o.color), a = R(i.color);
    if (!s || !a) return null;
    const l = i.position - o.position;
    if (l === 0) {
      const n = a;
      return n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})`;
    }
    const u = (50 - o.position) / l, d = Math.round(s.r + (a.r - s.r) * u), r = Math.round(s.g + (a.g - s.g) * u), m = Math.round(s.b + (a.b - s.b) * u), g = Math.round((s.a + (a.a - s.a) * u) * 1e3) / 1e3;
    return g === 1 ? `rgb(${d}, ${r}, ${m})` : `rgba(${d}, ${r}, ${m}, ${g})`;
  }
  Ke = function(t) {
    if (t == null || typeof t != "string") return null;
    const e = t.trim();
    if (e === "") return null;
    if (!M.GRADIENT_PREFIX.test(e)) return R(e) ? e : null;
    try {
      const i = Ue(e);
      return i ? Je(i) : null;
    } catch {
      return null;
    }
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
  function Ze(t, e) {
    if (!(!e || e.length === 0)) for (const o of e) {
      if (!o) continue;
      const i = t[o];
      if (typeof i != "string" || i.trim() === "") continue;
      const s = oe(i);
      if (s.isValid && s.normalizedValue.trim() !== "") return s.normalizedValue;
    }
  }
  function Qe(t, e, o, i) {
    const s = t.name ? e[t.name] : void 0;
    if (typeof s == "string" && s.trim() !== "") {
      const l = oe(s);
      if (l.isValid && l.normalizedValue.trim() !== "") return l.normalizedValue;
    }
    const a = Ze(e, t.fallbackFields);
    if (a !== void 0) return a;
    if (t.inheritTextStyle === true) {
      const l = i == null ? void 0 : i.color;
      if (typeof l == "string" && l.trim() !== "") return l;
    }
    return U(t.terminal, o);
  }
  function et(t) {
    var _a, _b, _c, _d, _e2;
    const e = t.context, o = ((_a = t.selectedWidgets) == null ? void 0 : _a[0]) ?? t.selectedWidget;
    return o ? (_e2 = (_d = (_c = (_b = e == null ? void 0 : e.views) == null ? void 0 : _b[t.selectedView]) == null ? void 0 : _c.widgets) == null ? void 0 : _d[o]) == null ? void 0 : _e2.style : void 0;
  }
  function tt({ field: t, data: e, onDataChange: o, props: i }) {
    const s = t.name, a = e[s], [l, u] = f.useState(a || ""), [d, r] = f.useState(false), [m, g] = f.useState(null), n = f.useRef(a), c = f.useRef(null), p = de(i.context.socket, i.context.theme), v = f.useMemo(() => et(i), [
      i
    ]), C = f.useMemo(() => Qe(t, e, p, v), [
      t,
      e,
      p,
      v
    ]), O = typeof a == "string" && a.trim() !== "", { anchorOrigin: V, transformOrigin: F, maxHeight: B, setContentRef: P, popoverActionRef: z } = Ie(m, !!m);
    f.useEffect(() => () => {
      c.current !== null && clearTimeout(c.current);
    }, []);
    const S = f.useCallback((y, E = false) => {
      if (c.current !== null && (clearTimeout(c.current), c.current = null), y == null) {
        u(""), r(false), n.current = null, o({
          [s]: null
        });
        return;
      }
      if (typeof y != "string") {
        r(true);
        return;
      }
      if (y.trim() === "") {
        u(""), r(false), n.current = null, o({
          [s]: null
        });
        return;
      }
      const A = oe(y);
      if (u(y), !A.isValid) {
        r(true);
        return;
      }
      r(false);
      let w;
      if (t.noGradient === true) {
        const X = Ke(A.normalizedValue);
        if (X === null) {
          r(true);
          return;
        }
        w = X;
      } else w = A.normalizedValue || null;
      n.current = w, E ? c.current = setTimeout(() => {
        c.current = null, o({
          [s]: w
        });
      }, 150) : o({
        [s]: w
      });
    }, [
      s,
      t.noGradient,
      o
    ]), _ = f.useCallback((y) => S(y, true), [
      S
    ]), j = f.useCallback((y) => S(y.target.value), [
      S
    ]), T = f.useCallback(() => S(null), [
      S
    ]), Z = !!m;
    return f.useEffect(() => {
      a !== n.current && (n.current = a, u(a || ""), r(false));
    }, [
      a
    ]), b.jsx(b.Fragment, {
      children: b.jsxs(ue, {
        theme: p,
        children: [
          b.jsxs(I, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              b.jsx(Be, {
                variant: "standard",
                fullWidth: true,
                value: l,
                error: d,
                placeholder: O ? "" : q.t("color_inherit"),
                helperText: d ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "",
                onChange: j,
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
              O && b.jsx(Ee, {
                onClick: T,
                title: q.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: b.jsx(Xe, {})
              }),
              b.jsx(I, {
                onClick: (y) => g(y.currentTarget),
                title: q.t("choose_color"),
                sx: {
                  mt: l ? "4px" : "-2px",
                  px: "4px",
                  py: l ? "4px" : "3px",
                  backgroundColor: C ? p.name === "light" ? p.palette.common.white : "#121212" : "transparent",
                  borderRadius: "1px",
                  display: "inline-block",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                  border: d ? `1px solid ${p.palette.error.main}` : C ? `1px solid ${p.name === "light" ? p.palette.grey[400] : p.palette.common.black}` : `1px dashed ${p.name === "light" ? p.palette.grey[400] : p.palette.text.secondary}`,
                  opacity: d ? 0.6 : 1
                },
                children: b.jsx(I, {
                  sx: {
                    width: C ? "36px" : "38px",
                    height: C ? "14px" : "18px",
                    borderRadius: "2px",
                    background: d ? "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)" : C
                  }
                })
              })
            ]
          }),
          b.jsx(Me, {
            action: z,
            slotProps: {
              paper: {
                elevation: 0,
                sx: {
                  p: "9px",
                  borderRadius: "6px",
                  backgroundColor: "rgb(32,32,32)",
                  boxSizing: "border-box",
                  maxHeight: B,
                  overflowX: "hidden",
                  overflowY: "auto"
                }
              }
            },
            open: Z,
            anchorEl: m,
            onClose: () => g(null),
            transformOrigin: F,
            anchorOrigin: V,
            children: b.jsx(I, {
              ref: P,
              sx: {
                borderRadius: "6px"
              },
              children: b.jsx(Ve, {
                value: l || C || p.palette.primary.main,
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
  G = function(t) {
    const { name: e, label: o, default: i = "", fallbackFields: s, noGradient: a, terminal: l, inheritTextStyle: u, hidden: d } = t, r = {
      name: e,
      label: o,
      default: i,
      type: "custom",
      component: (m, g, n, c) => b.jsx(tt, {
        field: m,
        data: g,
        onDataChange: n,
        props: c
      })
    };
    return s !== void 0 && (r.fallbackFields = s), a !== void 0 && (r.noGradient = a), l !== void 0 && (r.terminal = l), u !== void 0 && (r.inheritTextStyle = u), d !== void 0 && (r.hidden = d), r;
  };
  yt = function(t, e, o) {
    return G({
      name: t,
      label: e,
      fallbackFields: [
        "sliderColor"
      ],
      terminal: "primary",
      ...o
    });
  };
  kt = (t, e) => (o) => o[t] !== e;
  zt = [
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
  $t = [
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
  At = [
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
  _t = function(t, e) {
    const o = {
      label: "",
      type: "custom",
      component: () => b.jsx(k, {
        dividerText: t
      })
    };
    return (e == null ? void 0 : e.hidden) !== void 0 && (o.hidden = e.hidden), o;
  };
  let ot, ee, nt, it, lt;
  ae = (t) => {
    if (!t || typeof t != "string") return false;
    const e = t.trim();
    return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
  };
  Ot = (t) => {
    const { groupName: e = "", allFields: o = true } = t || {}, i = [
      {
        label: "",
        type: "custom",
        component: () => b.jsx(k, {
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
          return (d === "" || d === "Active") && (u = false), l !== void 0 && (u = !a.iconColor && !a.enableIconColorMask && !a[`iconColor${l}`] && !ae(r) && !ae(m)), u;
        }
      },
      G({
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
        component: () => b.jsx(k, {
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
        component: () => b.jsx(k, {
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
        component: () => b.jsx(k, {
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
        component: () => b.jsx(k, {
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
      G({
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
        component: () => b.jsx(k, {})
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
        component: () => b.jsx(k, {})
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
        component: () => b.jsx(k, {
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
        component: () => b.jsx(k, {
          dividerText: "background"
        })
      },
      G({
        name: `background${e}`,
        label: "background",
        fallbackFields: [],
        terminal: "transparent"
      }),
      {
        label: "",
        type: "custom",
        component: () => b.jsx(k, {
          dividerText: "frame_background"
        })
      },
      G({
        name: `frameBackground${e}`,
        label: "frame_background",
        fallbackFields: [],
        terminal: "transparent"
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
  ot = async (t, e) => {
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
  ee = (t, e = "oid") => {
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
  nt = (t, e) => {
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
  rt = (t, e = "oid") => async (o, i, s, a) => {
    if (!i[e]) {
      ee(i, e), setTimeout(() => s(i), 100);
      return;
    }
    try {
      const l = await a.getObject(i[e]);
      if (!l) {
        ee(i, e), setTimeout(() => s(i), 100);
        return;
      }
      const u = l.common.type;
      if (!t.includes(u)) return;
      const d = {
        _id: l._id,
        name: l.common.name || "",
        type: u,
        icon: await ot(a, l),
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
          r.forEach((g) => {
            m[g] = g;
          }), r = m;
        }
        i[`${e}Object`].commonStates = r, e === "oid" && (i.values_count = Object.keys(r).length, Object.entries(r).forEach(([m, g], n) => {
          const c = n + 1;
          i[`value${c}`] = nt(m, u), i[`alias${c}`] = String(g);
        }));
      } else u === "boolean" && e === "oid" ? (i[`${e}Object`].commonStates = {
        true: "TRUE",
        false: "FALSE"
      }, i.values_count = 2, i.value1 = true, i.alias1 = "TRUE", i.value2 = false, i.alias2 = "FALSE") : e === "oid" && (i.values_count = 0);
      e === "oid" && i.ignoreCommonStates !== false && (i.values_count = 0), setTimeout(() => s(i), 100);
    } catch (l) {
      console.error(`Error handling OID change for ${i[e]}:`, l), ee(i, e), setTimeout(() => s(i), 100);
    }
  };
  jt = (t) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: rt(t)
    },
    {
      label: "",
      type: "custom",
      component: () => b.jsx(k, {}),
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
      component: () => b.jsx(k, {}),
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
  it = () => {
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
        const m = i[r], g = m !== void 0 ? s[m] : void 0;
        g ? (d.style.color = g, d.style.filter = "drop-shadow(0px 10000px 0)", d.style.transform = "translateY(-10000px)") : (d.style.color = "", d.style.filter = "", d.style.transform = "");
      });
    }, [
      i,
      s,
      e
    ]);
  };
  at = (t, e = 28) => {
    const [o, i] = f.useState({
      width: void 0,
      height: void 0,
      maxWidth: void 0
    }), s = f.useCallback((l) => {
      if (l.length === 0) return;
      const u = l[0], { width: d, height: r } = u.contentRect, m = Math.round(d), g = Math.round(r), n = m <= g + e + 12 ? m - e - 12 : g;
      i({
        width: m,
        height: g,
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
  lt = (t) => {
    const { widget: e } = f.useContext(W), [o, i] = f.useState("100%"), [s, a] = f.useState("100%"), { width: l, height: u } = at(t), d = f.useMemo(() => ({
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
      const g = l - r, n = u - r, c = Math.min(g, n);
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
  ct = f.forwardRef(({ children: t, data: e, oidValue: o = null, isValidType: i = true, bgActive: s = true, sx: a = {} }, l) => {
    const u = f.useRef(null), d = f.useRef(null), [r, m] = f.useState(null), g = f.useRef(null), n = f.useRef(null), c = f.useContext(W);
    if (!c) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: p, widget: v } = c, { backgroundStyles: C, borderStyles: O } = te(v.style), { width: V, height: F } = lt(r);
    it();
    const B = v.data.oidObject, P = B == null ? void 0 : B._id, z = f.useMemo(() => {
      if (v.data.noFooter) return "";
      const j = o || o === 0 || String(o) === "false" ? `${o}${(B == null ? void 0 : B.unit) ?? ""}` : "";
      return e.footer || e.alias || e.value || j || "";
    }, [
      e.footer,
      e.alias,
      e.value,
      o,
      B == null ? void 0 : B.unit,
      v.data.noFooter
    ]), S = f.useMemo(() => K({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      ...C,
      background: p ? e.frameBackground : e.frameBackground || "transparent",
      backgroundColor: p ? D(e.frameBackground) ? void 0 : e.frameBackground : D(e.frameBackground) ? "transparent" : e.frameBackground,
      borderColor: p ? "" : e.frameBackground || (O == null ? void 0 : O["border-color"])
    }), [
      C,
      O,
      e.frameBackground,
      p
    ]), _ = f.useMemo(() => K({
      overflow: "hidden",
      width: V,
      height: F,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: s && p ? e.background : s ? e.background || "transparent" : p ? void 0 : "transparent",
      borderColor: p ? "" : e.background || (O == null ? void 0 : O["border-color"]),
      borderRadius: v.data.circle || v.data.ellipse ? "50%" : void 0,
      ...a
    }), [
      V,
      F,
      s,
      p,
      e.background,
      O,
      v.data.circle,
      v.data.ellipse,
      a
    ]);
    return f.useEffect(() => {
      v.data.noHeader || !g.current || (g.current.innerHTML = e.header);
    }, [
      e.header,
      v.data.noHeader
    ]), f.useEffect(() => {
      v.data.noFooter || !n.current || (n.current.innerHTML = String(z));
    }, [
      z,
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
    })), b.jsxs(ie, {
      ref: u,
      className: "BASE-PAPER-0",
      square: v.data.squaredCorner,
      variant: v.data.outlinedFrame ? "outlined" : "elevation",
      sx: S,
      children: [
        !!i && b.jsxs(b.Fragment, {
          children: [
            b.jsx(I, {
              sx: {
                width: v.data.noHeader ? "0%" : "100%",
                height: v.data.noHeader ? "0%" : "auto",
                mt: (v.data.basePadding ?? 8) / 2,
                mb: -(v.data.basePadding ?? 8) / 2
              },
              children: b.jsx(Y, {
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
            b.jsx(I, {
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
              children: b.jsx(ie, {
                ref: d,
                className: "BASE-PAPER-1",
                elevation: v.data.outlined ? 0 : Number(v.data.baseElevation) || 0,
                square: !v.data.basePadding || v.data.squaredCorner,
                variant: v.data.outlined ? "outlined" : "elevation",
                sx: _,
                children: t
              })
            }),
            b.jsx(I, {
              sx: {
                width: v.data.noFooter ? "0%" : "100%",
                height: v.data.noFooter ? "0%" : "auto",
                mt: -(v.data.basePadding ?? 8) / 2,
                mb: (v.data.basePadding ?? 8) / 2
              },
              children: b.jsx(Y, {
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
        !i && b.jsx(I, {
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
            children: P ? `${P} has an invalid type!` : "Please select a valid object ID"
          })
        })
      ]
    });
  });
  ct.displayName = "CollectionBase";
  let le;
  st = (t) => !t || typeof t != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(t);
  ut = (t, e, o) => !o && !st(t) ? {} : !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  };
  le = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  dt = ({ src: t, style: e = {}, alt: o = "" }) => {
    const i = t && t !== "undefined" && t !== null ? t : le;
    return b.jsx("img", {
      src: i,
      alt: o,
      style: e,
      onError: (s) => {
        console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
        const a = s.currentTarget;
        a.onerror = null, a.src = le;
      }
    });
  };
  Tt = ({ data: t, widget: e }) => {
    const i = f.useContext(W).theme, s = t.icon, a = t.iconColor || i.palette.primary.main;
    return !e.data.noHeaderIcon && s ? b.jsx(dt, {
      alt: "",
      src: s,
      style: {
        position: "absolute",
        top: `calc(0px - ${t.iconYOffsetCm})`,
        right: `calc(0px - ${t.iconXOffsetCm})`,
        height: t.iconSizeCm,
        ...ut(s, a, !!t.forceColorMaskCm)
      }
    }) : null;
  };
  function ft(t, e) {
    return t[e];
  }
  function mt(t) {
    return typeof t == "object" && t !== null && "sliderOrientation" in t;
  }
  gt = (t) => typeof t == "number" ? `calc(${t / 100}rem * 0.875)` : void 0;
  function bt(t) {
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
  function h(t) {
    for (const e of t) if (e.condition !== false && e.value !== void 0 && e.value !== null && !(typeof e.value == "string" && e.value.trim() === "")) return e.value;
  }
  function ht(t) {
    const { rxData: e, oidObject: o, oidName: i, theme: s, fontStyles: a, textStyles: l, backgroundStyles: u, formatSize: d, getDataValue: r, widgetResolver: m } = t, g = (n) => n && String(n) !== "" ? String(n) : void 0;
    return {
      icon: (n, c) => e.noIcon ? "" : h([
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
      iconActive: (n, c) => !c || e.noIcon ? "" : h([
        {
          value: r("icon", String(n))
        },
        {
          value: r("iconSmall", String(n))
        }
      ]) ?? "",
      iconSizeCm: (n, c) => h([
        {
          condition: r("iconSize", "") === 0,
          value: "0px"
        },
        {
          condition: !!r("iconSize", ""),
          value: `calc(24px * ${r("iconSize", "")} / 100)`
        }
      ]) ?? "24px",
      iconSize: (n, c) => h([
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
      iconSizeActive: (n, c) => c ? h([
        {
          condition: r("iconSize", String(n)) === 0,
          value: "0px"
        },
        {
          condition: !!r("iconSize", String(n)),
          value: `calc(24px * ${r("iconSize", String(n))} / 100)`
        }
      ]) ?? "24px" : "24px",
      iconSizeOnly: (n, c) => h([
        {
          condition: c && (!!r("iconSize", "Active") || r("iconSize", "Active") === 0),
          value: `${r("iconSize", "Active")}%`
        },
        {
          condition: !!r("iconSize", String(n)) || r("iconSize", String(n)) === 0,
          value: `${r("iconSize", String(n))}%`
        }
      ]) ?? "100%",
      iconSizeActiveOnly: (n, c) => c ? h([
        {
          value: r("iconSize", String(n))
        }
      ]) ?? void 0 : void 0,
      iconWidth: (n, c) => h([
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
      iconHeight: (n, c) => h([
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
      forceColorMaskCm: (n, c) => h([
        {
          value: r("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMask: (n, c) => h([
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
      forceColorMaskActive: (n, c) => c ? h([
        {
          value: r("enableIconColorMask", String(n))
        }
      ]) ?? false : false,
      iconColor: (n, c) => h([
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
      ]) ?? U("primary", s),
      iconColorActive: (n, c) => c ? h([
        {
          value: r("iconColor", String(n))
        }
      ]) ?? "" : "",
      iconHover: (n, c) => h([
        {
          value: e.iconHover ? `${e.iconHover}%` : void 0
        }
      ]) ?? "",
      iconHoverActive: (n, c) => c ? h([
        {
          value: r("iconHover", String(n)) ? `${r("iconHover", String(n))}%` : void 0
        }
      ]) ?? void 0 : void 0,
      iconXOffsetCm: (n, c) => h([
        {
          value: r("iconXOffset", "")
        }
      ]) ?? "0px",
      iconYOffsetCm: (n, c) => h([
        {
          value: r("iconYOffset", "")
        }
      ]) ?? "0px",
      iconXOffset: (n, c) => h([
        {
          condition: c,
          value: r("iconXOffset", "Active")
        },
        {
          value: r("iconXOffset", String(n))
        }
      ]) ?? "0px",
      iconYOffset: (n, c) => h([
        {
          condition: c,
          value: r("iconYOffset", "Active")
        },
        {
          value: r("iconYOffset", String(n))
        }
      ]) ?? "0px",
      iconXOffsetActive: (n, c) => c ? h([
        {
          condition: !r("iconXOffset", String(n)),
          value: "0px"
        },
        {
          value: r("iconXOffset", String(n))
        }
      ]) ?? "0px" : "0px",
      iconYOffsetActive: (n, c) => c ? h([
        {
          condition: !r("iconYOffset", String(n)),
          value: "0px"
        },
        {
          value: r("iconYOffset", String(n))
        }
      ]) ?? "0px" : "0px",
      textColorActive: (n, c) => c ? h([
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
      textColorCm: (n, c) => h([
        {
          condition: typeof r("textColor", "") == "string",
          value: r("textColor", "")
        },
        {
          condition: typeof (l == null ? void 0 : l.color) == "string",
          value: l == null ? void 0 : l.color
        }
      ]) ?? U("text", s),
      textColor: (n, c) => h([
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
      ]) ?? U("text", s),
      fontSize: (n, c) => h([
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
      headerSize: (n, c) => h([
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
      footerSize: (n, c) => h([
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
      valueSize: (n, c) => h([
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
      valueSizeActive: (n, c) => c ? h([
        {
          value: typeof r("valueSize", String(n)) == "number" ? d(r("valueSize", String(n))) : null
        }
      ]) ?? null : null,
      header: (n, c) => String(h([
        {
          condition: c,
          value: g(r("header", "Active"))
        },
        {
          value: g(r("header", String(n)))
        },
        {
          value: g(r("header", ""))
        },
        {
          value: g(i)
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      footer: (n, c) => String(h([
        {
          condition: c,
          value: g(r("footer", "Active"))
        },
        {
          value: g(r("footer", String(n)))
        },
        {
          value: g(r("footer", ""))
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      alias: (n, c) => String(r("alias", String(n)) || "").replace(/(\r\n|\n|\r)/gm, ""),
      value: (n, c) => {
        const p = r("value", String(n));
        return p != null ? `${p}${(o == null ? void 0 : o.unit) !== void 0 ? o.unit : ""}` : void 0;
      },
      backgroundColor: (n, c) => h([
        {
          value: e.backgroundColor && e.backgroundColor !== "" ? e.backgroundColor : void 0
        },
        {
          value: u == null ? void 0 : u["background-color"]
        }
      ]) ?? "",
      backgroundColorActive: (n, c) => c ? r("backgroundColor", String(n)) : void 0,
      background: (n, c) => h([
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
      frameBackgroundColor: (n, c) => h([
        {
          value: e.frameBackgroundColor && e.frameBackgroundColor !== "" ? e.frameBackgroundColor : void 0
        },
        {
          value: u == null ? void 0 : u["background-color"]
        }
      ]) ?? "",
      frameBackgroundColorActive: (n, c) => c ? r("frameBackgroundColor", String(n)) : void 0,
      frameBackground: (n, c) => h([
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
  wt = function(t) {
    const { theme: e, widget: o, widget: { data: i }, getPropertyValue: s } = f.useContext(W), a = i[`${t}Object`], l = s(t), u = a == null ? void 0 : a.name, { fontStyles: d, textStyles: r, backgroundStyles: m } = te(o.style), g = f.useCallback(gt, []), n = f.useCallback((z, S = "") => {
      const _ = `${z}${S}`;
      return ft(i, _);
    }, [
      i
    ]), c = f.useMemo(() => mt(i) ? bt(i) : vt(), [
      i
    ]), p = f.useMemo(() => ht({
      rxData: i,
      oidObject: a,
      oidName: u,
      theme: e,
      fontStyles: d,
      textStyles: r,
      backgroundStyles: m,
      formatSize: g,
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
      g,
      n,
      c
    ]), v = f.useCallback((z = "", S = false) => pt(z, S, p), [
      p
    ]), { states: C, widgetStates: O, minValue: V, maxValue: F } = f.useMemo(() => {
      const z = {};
      let S = null, _ = null;
      const j = [], T = a == null ? void 0 : a.type, Z = (a == null ? void 0 : a.commonStates) || {}, y = Object.entries(Z);
      if (T === "number" || T === "string" || T === "boolean" || T === "mixed") {
        const E = i.ignoreCommonStates === false ? i.values_count : y.length > 0 ? y.length : i.values_count;
        for (let $ = 1; $ <= E; $++) {
          const A = n("value", String($)), w = i[`alias${$}`], X = a == null ? void 0 : a.unit;
          if (A === void 0 || !/\S/.test(String(A))) continue;
          const N = y.find(([be]) => be === String(A)), ne = N ? T === "number" ? Number(N[0]) : String(N[0]) : T === "number" ? Number(A) : A, me = String(l) === String(ne), x = v($, me);
          j.push({
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
          const ge = String(N ? N[0] : A);
          z[ge] = w && String(w).trim() !== "" ? w : `${A}${X}`;
        }
      }
      if (T === "number" && j.length) {
        const E = j.map(($) => typeof $.value == "number" ? $.value : NaN).filter(($) => !isNaN($));
        E.length > 0 && (S = Math.min(...E), _ = Math.max(...E));
      }
      return {
        states: j,
        widgetStates: z,
        minValue: S,
        maxValue: _
      };
    }, [
      a == null ? void 0 : a.type,
      a == null ? void 0 : a.commonStates,
      a == null ? void 0 : a.unit,
      i,
      n,
      l,
      v
    ]), { data: B, activeIndex: P } = f.useMemo(() => {
      switch (a == null ? void 0 : a.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const S = C.findIndex((_) => String(_.value) === String(l));
          return S !== -1 ? {
            data: v(S + 1, true),
            activeIndex: S + 1
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
      a,
      l,
      C,
      v
    ]);
    return {
      widgetStates: O,
      minValue: V,
      maxValue: F,
      data: B,
      activeIndex: P,
      oidValue: l,
      states: C,
      resolveStyleData: v
    };
  };
});
export {
  W as C,
  J as D,
  dt as S,
  __tla,
  D as a,
  ct as b,
  Tt as c,
  Ot as d,
  jt as e,
  G as f,
  ut as g,
  yt as h,
  k as i,
  st as j,
  gt as k,
  Ke as l,
  at as m,
  te as n,
  rt as o,
  K as p,
  _t as q,
  kt as r,
  At as s,
  zt as t,
  wt as u,
  $t as v,
  Ct as w,
  ae as x,
  Xe as y
};
