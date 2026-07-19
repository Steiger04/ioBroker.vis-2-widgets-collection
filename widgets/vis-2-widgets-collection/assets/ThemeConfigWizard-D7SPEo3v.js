import { g as ge, a as be, u as ve, j as e, s as je, d as we, w as Y, e as ke, m as Se, aj as $, f as N, N as De, T as v, x as Ee, ak as le, p as H, I as ee, a9 as j, G as r, l as d, X as Z, al as de, am as R, a7 as Te, Y as ce, Z as pe, S as he, an as Ke, ao as Me, ap as Q, aq as Ve, ar as Re, ae as J, a5 as A, a6 as ue, as as We, ab as Pe, aa as He, a8 as me, at as Oe, _ as $e, P as Ae, __tla as __tla_0 } from "./usePopoverPositioning-CofXyWxH.js";
import { v as i, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Ne, __tla as __tla_2 } from "./Close-9YkifltS.js";
import { T as Ge, A as te, d as ae, E as re, e as se, c as Ce, f as G, C as Be, D as Ue, a as Ye, b as Xe, __tla as __tla_3 } from "./ColorPickerField-QNYNVWML.js";
import { S as K, __tla as __tla_4 } from "./Stack-BR9CtSSf.js";
import { T as ze, a as W, __tla as __tla_5 } from "./ToggleButtonGroup-CsvD-mXK.js";
import { S as B, __tla as __tla_6 } from "./Slider-enbrXPpK.js";
import { F as qe, __tla as __tla_7 } from "./FormControlLabel-GKvoLPBt.js";
import { S as Je, __tla as __tla_8 } from "./Switch-B6zo6bBn.js";
import { M, __tla as __tla_9 } from "./MenuItem-CFB8pAi3.js";
import { B as T, __tla as __tla_10 } from "./Button-B6dAQNhX.js";
import { D as Ze, a as Qe, b as et, __tla as __tla_11 } from "./DialogTitle-D-0sI30G.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_12 } from "./SwitchBase-BkWjByuT.js";
import { __tla as __tla_13 } from "./listItemTextClasses-X-Bzt_WG.js";
let Le;
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
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_12;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_13;
    } catch {
    }
  })()
]).then(async () => {
  function tt(t) {
    return ge("MuiListSubheader", t);
  }
  be("MuiListSubheader", [
    "root",
    "colorPrimary",
    "colorInherit",
    "gutters",
    "inset",
    "sticky"
  ]);
  const at = (t) => {
    const { classes: a, color: o, disableGutters: u, inset: n, disableSticky: y } = t, _ = {
      root: [
        "root",
        o !== "default" && `color${Y(o)}`,
        !u && "gutters",
        n && "inset",
        !y && "sticky"
      ]
    };
    return ke(_, tt, a);
  }, rt = je("li", {
    name: "MuiListSubheader",
    slot: "Root",
    overridesResolver: (t, a) => {
      const { ownerState: o } = t;
      return [
        a.root,
        o.color !== "default" && a[`color${Y(o.color)}`],
        !o.disableGutters && a.gutters,
        o.inset && a.inset,
        !o.disableSticky && a.sticky
      ];
    }
  })(Se(({ theme: t }) => ({
    boxSizing: "border-box",
    lineHeight: "48px",
    listStyle: "none",
    color: (t.vars || t).palette.text.secondary,
    fontFamily: t.typography.fontFamily,
    fontWeight: t.typography.fontWeightMedium,
    fontSize: t.typography.pxToRem(14),
    variants: [
      {
        props: {
          color: "primary"
        },
        style: {
          color: (t.vars || t).palette.primary.main
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit"
        }
      },
      {
        props: ({ ownerState: a }) => !a.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: a }) => a.inset,
        style: {
          paddingLeft: 72
        }
      },
      {
        props: ({ ownerState: a }) => !a.disableSticky,
        style: {
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: (t.vars || t).palette.background.paper
        }
      }
    ]
  }))), U = i.forwardRef(function(a, o) {
    const u = ve({
      props: a,
      name: "MuiListSubheader"
    }), { className: n, color: y = "default", component: _ = "li", disableGutters: b = false, disableSticky: c = false, inset: f = false, ...h } = u, m = {
      ...u,
      color: y,
      component: _,
      disableGutters: b,
      disableSticky: c,
      inset: f
    }, w = at(m);
    return e.jsx(rt, {
      as: _,
      className: we(w.root, n),
      ref: o,
      ownerState: m,
      ...h
    });
  });
  U && (U.muiSkipListHighlight = true);
  function st(t) {
    return ge("MuiLink", t);
  }
  const nt = be("MuiLink", [
    "root",
    "underlineNone",
    "underlineHover",
    "underlineAlways",
    "button",
    "focusVisible"
  ]), ot = ({ theme: t, ownerState: a }) => {
    const o = a.color, u = $(t, `palette.${o}.main`, false) || $(t, `palette.${o}`, false) || a.color, n = $(t, `palette.${o}.mainChannel`) || $(t, `palette.${o}Channel`);
    return "vars" in t && n ? `rgba(${n} / 0.4)` : N(u, 0.4);
  }, ye = {
    primary: true,
    secondary: true,
    error: true,
    info: true,
    success: true,
    warning: true,
    textPrimary: true,
    textSecondary: true,
    textDisabled: true
  }, it = (t) => {
    const { classes: a, component: o, focusVisible: u, underline: n } = t, y = {
      root: [
        "root",
        `underline${Y(n)}`,
        o === "button" && "button",
        u && "focusVisible"
      ]
    };
    return ke(y, st, a);
  }, lt = je(v, {
    name: "MuiLink",
    slot: "Root",
    overridesResolver: (t, a) => {
      const { ownerState: o } = t;
      return [
        a.root,
        a[`underline${Y(o.underline)}`],
        o.component === "button" && a.button
      ];
    }
  })(Se(({ theme: t }) => ({
    variants: [
      {
        props: {
          underline: "none"
        },
        style: {
          textDecoration: "none"
        }
      },
      {
        props: {
          underline: "hover"
        },
        style: {
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline"
          }
        }
      },
      {
        props: {
          underline: "always"
        },
        style: {
          textDecoration: "underline",
          "&:hover": {
            textDecorationColor: "inherit"
          }
        }
      },
      {
        props: ({ underline: a, ownerState: o }) => a === "always" && o.color !== "inherit",
        style: {
          textDecorationColor: "var(--Link-underlineColor)"
        }
      },
      ...Object.entries(t.palette).filter(Ee()).map(([a]) => ({
        props: {
          underline: "always",
          color: a
        },
        style: {
          "--Link-underlineColor": t.vars ? `rgba(${t.vars.palette[a].mainChannel} / 0.4)` : N(t.palette[a].main, 0.4)
        }
      })),
      {
        props: {
          underline: "always",
          color: "textPrimary"
        },
        style: {
          "--Link-underlineColor": t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / 0.4)` : N(t.palette.text.primary, 0.4)
        }
      },
      {
        props: {
          underline: "always",
          color: "textSecondary"
        },
        style: {
          "--Link-underlineColor": t.vars ? `rgba(${t.vars.palette.text.secondaryChannel} / 0.4)` : N(t.palette.text.secondary, 0.4)
        }
      },
      {
        props: {
          underline: "always",
          color: "textDisabled"
        },
        style: {
          "--Link-underlineColor": (t.vars || t).palette.text.disabled
        }
      },
      {
        props: {
          component: "button"
        },
        style: {
          position: "relative",
          WebkitTapHighlightColor: "transparent",
          backgroundColor: "transparent",
          outline: 0,
          border: 0,
          margin: 0,
          borderRadius: 0,
          padding: 0,
          cursor: "pointer",
          userSelect: "none",
          verticalAlign: "middle",
          MozAppearance: "none",
          WebkitAppearance: "none",
          "&::-moz-focus-inner": {
            borderStyle: "none"
          },
          [`&.${nt.focusVisible}`]: {
            outline: "auto"
          }
        }
      }
    ]
  }))), dt = i.forwardRef(function(a, o) {
    const u = ve({
      props: a,
      name: "MuiLink"
    }), n = De(), { className: y, color: _ = "primary", component: b = "a", onBlur: c, onFocus: f, TypographyClasses: h, underline: m = "always", variant: w = "inherit", sx: x, ...g } = u, [C, L] = i.useState(false), I = (z) => {
      le(z.target) || L(false), c && c(z);
    }, D = (z) => {
      le(z.target) && L(true), f && f(z);
    }, F = {
      ...u,
      color: _,
      component: b,
      focusVisible: C,
      underline: m,
      variant: w
    }, V = it(F);
    return e.jsx(lt, {
      color: _,
      className: we(V.root, y),
      classes: h,
      component: b,
      onBlur: I,
      onFocus: D,
      ref: o,
      ownerState: F,
      variant: w,
      ...g,
      sx: [
        ...ye[_] === void 0 ? [
          {
            color: _
          }
        ] : [],
        ...Array.isArray(x) ? x : [
          x
        ]
      ],
      style: {
        ...g.style,
        ...m === "always" && _ !== "inherit" && !ye[_] && {
          "--Link-underlineColor": ot({
            theme: n,
            ownerState: F
          })
        }
      }
    });
  }), ct = H(e.jsx("path", {
    d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
  }), "Download"), pt = H(e.jsx("path", {
    d: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"
  }), "HelpOutline"), ht = H(e.jsx("path", {
    d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"
  }), "Link"), ut = H(e.jsx("path", {
    d: "M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5m-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3z"
  }), "LinkOff"), mt = H(e.jsx("path", {
    d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9m5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9M5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5m6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5"
  }), "Palette");
  function yt({ initial: t } = {}) {
    const [a, o] = i.useState(t ?? {
      x: 0,
      y: 0
    }), u = i.useRef(null), n = i.useRef(a);
    n.current = a;
    const y = i.useRef(null), _ = i.useCallback((h, m) => {
      if (typeof window > "u") return {
        x: h,
        y: m
      };
      const w = u.current, x = (w == null ? void 0 : w.offsetWidth) ?? 0, g = (w == null ? void 0 : w.offsetHeight) ?? 0;
      return {
        x: Math.max(0, Math.min(h, window.innerWidth - x)),
        y: Math.max(0, Math.min(m, window.innerHeight - g))
      };
    }, []), b = i.useCallback((h) => {
      const m = y.current;
      !m || h.pointerId !== m.pointerId || o(_(m.originX + (h.clientX - m.startX), m.originY + (h.clientY - m.startY)));
    }, [
      _
    ]), c = i.useCallback((h) => {
      const m = y.current;
      !m || h.pointerId !== m.pointerId || (y.current = null, window.removeEventListener("pointermove", b), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c));
    }, [
      b
    ]), f = i.useCallback((h) => {
      h.button === 0 && (y.current = {
        pointerId: h.pointerId,
        startX: h.clientX,
        startY: h.clientY,
        originX: n.current.x,
        originY: n.current.y
      }, h.preventDefault(), window.addEventListener("pointermove", b), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c));
    }, [
      b,
      c
    ]);
    return i.useEffect(() => () => {
      window.removeEventListener("pointermove", b), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c);
    }, [
      b,
      c
    ]), {
      position: a,
      setPosition: o,
      panelRef: u,
      dragHandlers: {
        onPointerDown: f,
        style: {
          touchAction: "none",
          cursor: "move",
          userSelect: "none"
        }
      }
    };
  }
  const _t = [
    {
      id: "graphit",
      labelKey: "theme_studio_preset_graphit",
      theme: {
        palette: {
          mode: "dark",
          primary: {
            main: "#38bdf8"
          },
          secondary: {
            main: "#818cf8"
          },
          background: {
            default: "#0f1216",
            paper: "#181c23"
          }
        }
      }
    },
    {
      id: "sunset",
      labelKey: "theme_studio_preset_sunset",
      theme: {
        palette: {
          mode: "dark",
          primary: {
            main: "#f97316"
          },
          secondary: {
            main: "#f43f5e"
          },
          background: {
            default: "#171210",
            paper: "#211a16"
          }
        }
      }
    },
    {
      id: "daylight",
      labelKey: "theme_studio_preset_daylight",
      theme: {
        palette: {
          mode: "light",
          primary: {
            main: "#2563eb"
          },
          secondary: {
            main: "#0ea5e9"
          },
          background: {
            default: "#f8fafc",
            paper: "#ffffff"
          }
        }
      }
    },
    {
      id: "salbei",
      labelKey: "theme_studio_preset_salbei",
      theme: {
        palette: {
          mode: "light",
          primary: {
            main: "#5b8c6a"
          },
          secondary: {
            main: "#c2724f"
          },
          background: {
            default: "#f6f7f3",
            paper: "#ffffff"
          }
        }
      }
    },
    {
      id: "mono",
      labelKey: "theme_studio_preset_mono",
      theme: {
        palette: {
          mode: "dark",
          primary: {
            main: "#a1a1aa"
          },
          secondary: {
            main: "#d4d4d8"
          },
          background: {
            default: "#18181b",
            paper: "#27272a"
          }
        }
      }
    },
    {
      id: "smaragd",
      labelKey: "theme_studio_preset_smaragd",
      theme: {
        palette: {
          mode: "dark",
          primary: {
            main: "#34d399"
          },
          secondary: {
            main: "#2dd4bf"
          },
          background: {
            default: "#0d1410",
            paper: "#161f1a"
          }
        }
      }
    },
    {
      id: "amethyst",
      labelKey: "theme_studio_preset_amethyst",
      theme: {
        palette: {
          mode: "dark",
          primary: {
            main: "#a78bfa"
          },
          secondary: {
            main: "#f0abfc"
          },
          background: {
            default: "#130e1a",
            paper: "#1d1626"
          }
        }
      }
    },
    {
      id: "rubin",
      labelKey: "theme_studio_preset_rubin",
      theme: {
        palette: {
          mode: "dark",
          primary: {
            main: "#f87171"
          },
          secondary: {
            main: "#fb7185"
          },
          background: {
            default: "#190d0d",
            paper: "#241414"
          }
        }
      }
    },
    {
      id: "bernstein",
      labelKey: "theme_studio_preset_bernstein",
      theme: {
        palette: {
          mode: "dark",
          primary: {
            main: "#fbbf24"
          },
          secondary: {
            main: "#facc15"
          },
          background: {
            default: "#18140a",
            paper: "#221c11"
          }
        }
      }
    }
  ];
  function P({ title: t }) {
    return e.jsx(Ge, {
      title: t,
      arrow: true,
      placement: "top",
      slotProps: {
        tooltip: {
          sx: {
            maxWidth: 280
          }
        }
      },
      children: e.jsx(ee, {
        size: "small",
        sx: {
          p: 0.5
        },
        "aria-label": typeof t == "string" ? t : "help",
        children: e.jsx(pt, {
          fontSize: "small",
          color: "action"
        })
      })
    });
  }
  const ft = [
    {
      labelKey: "theme_studio_group_status",
      fields: [
        {
          path: "palette.error.main",
          labelKey: "theme_wizard_palette_error"
        },
        {
          path: "palette.warning.main",
          labelKey: "theme_wizard_palette_warning"
        },
        {
          path: "palette.info.main",
          labelKey: "theme_wizard_palette_info"
        },
        {
          path: "palette.success.main",
          labelKey: "theme_wizard_palette_success"
        }
      ]
    },
    {
      labelKey: "theme_studio_group_text",
      fields: [
        {
          path: "palette.text.primary",
          labelKey: "theme_wizard_palette_text_primary"
        },
        {
          path: "palette.text.secondary",
          labelKey: "theme_wizard_palette_text_secondary"
        }
      ]
    },
    {
      labelKey: "theme_studio_group_surface",
      fields: [
        {
          path: "palette.background.default",
          labelKey: "theme_wizard_palette_background_default"
        },
        {
          path: "palette.background.paper",
          labelKey: "theme_wizard_palette_background_paper"
        },
        {
          path: "palette.divider",
          labelKey: "theme_wizard_palette_divider"
        }
      ]
    }
  ];
  function xt({ theme: t, onChange: a, defaultExpanded: o, resolved: u }) {
    const n = j(t, "spacing") ?? 8, y = j(t, "direction"), _ = j(t, "cssVariables"), b = _ === true || typeof _ == "object" && _ !== null, c = j(t, "cssVariables.cssVarPrefix") ?? "", f = (x, g) => {
      a("direction", g ?? void 0);
    }, h = (x, g) => {
      a("spacing", g);
    }, m = (x, g) => {
      a("cssVariables", g ? true : void 0);
    }, w = (x) => {
      const g = x.target.value;
      a("cssVariables", g ? {
        cssVarPrefix: g
      } : true);
    };
    return e.jsxs(te, {
      defaultExpanded: o ?? false,
      children: [
        e.jsx(ae, {
          expandIcon: e.jsx(re, {}),
          children: e.jsx(v, {
            children: r.t("theme_studio_section_advanced")
          })
        }),
        e.jsx(se, {
          children: e.jsxs(K, {
            spacing: 2,
            children: [
              ft.map((x) => e.jsxs(d, {
                children: [
                  e.jsx(v, {
                    variant: "caption",
                    color: "text.secondary",
                    sx: {
                      display: "block",
                      mb: 0.5
                    },
                    children: r.t(x.labelKey)
                  }),
                  e.jsx(d, {
                    children: x.fields.map((g) => {
                      const C = j(t, g.path), L = u ? j(u, g.path) ?? "" : "";
                      return e.jsx(Ce, {
                        label: r.t(g.labelKey),
                        value: C ?? L,
                        overridden: C !== void 0,
                        onChange: (I) => a(g.path, I || void 0)
                      }, g.path);
                    })
                  })
                ]
              }, x.labelKey)),
              e.jsxs(d, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  flexWrap: "wrap"
                },
                children: [
                  e.jsxs(d, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5
                    },
                    children: [
                      e.jsx(v, {
                        variant: "body2",
                        color: "text.secondary",
                        sx: {
                          flexShrink: 0
                        },
                        children: r.t("theme_wizard_layout_direction")
                      }),
                      e.jsx(P, {
                        title: r.t("theme_studio_help_direction")
                      })
                    ]
                  }),
                  e.jsxs(ze, {
                    exclusive: true,
                    size: "small",
                    value: y === "rtl" ? "rtl" : "ltr",
                    onChange: f,
                    children: [
                      e.jsx(W, {
                        value: "ltr",
                        children: r.t("theme_wizard_layout_direction_ltr")
                      }),
                      e.jsx(W, {
                        value: "rtl",
                        children: r.t("theme_wizard_layout_direction_rtl")
                      })
                    ]
                  }),
                  y === void 0 ? e.jsx(v, {
                    variant: "caption",
                    color: "text.secondary",
                    children: r.t("theme_studio_default_value")
                  }) : null
                ]
              }),
              e.jsxs(d, {
                children: [
                  e.jsxs(d, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      mb: 0.5
                    },
                    children: [
                      e.jsxs(v, {
                        variant: "body2",
                        color: "text.secondary",
                        children: [
                          r.t("theme_wizard_layout_spacing"),
                          ": ",
                          n
                        ]
                      }),
                      e.jsx(P, {
                        title: r.t("theme_studio_help_spacing")
                      })
                    ]
                  }),
                  e.jsx(B, {
                    value: n,
                    min: 0,
                    max: 16,
                    step: 0.5,
                    valueLabelDisplay: "auto",
                    onChange: h
                  })
                ]
              }),
              e.jsxs(d, {
                children: [
                  e.jsx(qe, {
                    control: e.jsx(Je, {
                      checked: b,
                      onChange: m
                    }),
                    label: e.jsxs(d, {
                      component: "span",
                      sx: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5
                      },
                      children: [
                        r.t("theme_wizard_css_variables_enable"),
                        e.jsx(P, {
                          title: r.t("theme_studio_help_css_vars")
                        })
                      ]
                    })
                  }),
                  b ? e.jsx(Z, {
                    fullWidth: true,
                    size: "small",
                    label: r.t("theme_wizard_css_var_prefix"),
                    value: c,
                    onChange: w,
                    sx: {
                      mt: 1
                    }
                  }) : null
                ]
              })
            ]
          })
        })
      ]
    });
  }
  const gt = [
    {
      path: "palette.primary.main",
      labelKey: "theme_wizard_palette_primary"
    },
    {
      path: "palette.secondary.main",
      labelKey: "theme_wizard_palette_secondary"
    }
  ];
  function bt({ theme: t, onChange: a, defaultExpanded: o, resolved: u }) {
    const n = j(t, "palette.mode"), y = n === "light" || n === "dark" ? n : "auto", _ = (u == null ? void 0 : u.palette.mode) === "dark" ? "dark" : "light", b = (c, f) => {
      a("palette.mode", f === "light" || f === "dark" ? f : void 0);
    };
    return e.jsxs(te, {
      defaultExpanded: o ?? true,
      children: [
        e.jsx(ae, {
          expandIcon: e.jsx(re, {}),
          children: e.jsx(v, {
            children: r.t("theme_wizard_section_palette")
          })
        }),
        e.jsx(se, {
          children: e.jsxs(K, {
            spacing: 1.5,
            children: [
              e.jsxs(d, {
                children: [
                  e.jsx(v, {
                    variant: "body2",
                    color: "text.secondary",
                    sx: {
                      display: "block",
                      mb: 0.5
                    },
                    children: r.t("theme_wizard_palette_mode")
                  }),
                  e.jsxs(ze, {
                    exclusive: true,
                    size: "small",
                    value: y,
                    onChange: b,
                    children: [
                      e.jsx(W, {
                        value: "light",
                        children: r.t("theme_wizard_palette_mode_light")
                      }),
                      e.jsx(W, {
                        value: "dark",
                        children: r.t("theme_wizard_palette_mode_dark")
                      }),
                      e.jsx(W, {
                        value: "auto",
                        children: r.t("theme_wizard_palette_mode_auto")
                      })
                    ]
                  }),
                  y === "auto" ? e.jsxs(v, {
                    variant: "caption",
                    color: "text.secondary",
                    sx: {
                      display: "block",
                      mt: 0.5
                    },
                    children: [
                      r.t("theme_studio_mode_follows"),
                      ":",
                      " ",
                      r.t(_ === "dark" ? "theme_wizard_palette_mode_dark" : "theme_wizard_palette_mode_light")
                    ]
                  }) : null
                ]
              }),
              e.jsx(d, {
                children: gt.map((c) => {
                  const f = j(t, c.path), h = u ? j(u, c.path) ?? "" : "", w = c.path === "palette.secondary.main" && !f ? `${r.t(c.labelKey)} \xB7 ${r.t("theme_studio_secondary_derived")}` : r.t(c.labelKey);
                  return e.jsx(Ce, {
                    label: w,
                    value: f ?? h,
                    overridden: f !== void 0,
                    onChange: (x) => a(c.path, x || void 0)
                  }, c.path);
                })
              })
            ]
          })
        })
      ]
    });
  }
  const vt = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
  ], jt = [
    {
      path: "typography.fontWeightLight",
      labelKey: "theme_wizard_typography_weight_light"
    },
    {
      path: "typography.fontWeightRegular",
      labelKey: "theme_wizard_typography_weight_regular"
    },
    {
      path: "typography.fontWeightMedium",
      labelKey: "theme_wizard_typography_weight_medium"
    },
    {
      path: "typography.fontWeightBold",
      labelKey: "theme_wizard_typography_weight_bold"
    }
  ], wt = [
    {
      path: "corners.topLeft",
      labelKey: "theme_studio_corner_top_left"
    },
    {
      path: "corners.topRight",
      labelKey: "theme_studio_corner_top_right"
    },
    {
      path: "corners.bottomRight",
      labelKey: "theme_studio_corner_bottom_right"
    },
    {
      path: "corners.bottomLeft",
      labelKey: "theme_studio_corner_bottom_left"
    }
  ];
  function kt({ theme: t, onChange: a, defaultExpanded: o }) {
    const u = j(t, "typography.fontSize") ?? 14, n = j(t, "typography.fontFamily"), y = j(t, "typography.allVariants.lineHeight"), [_, b] = i.useState(de(n) === R), [c, f] = i.useState(() => {
      const s = [
        j(t, "corners.topLeft") ?? 4,
        j(t, "corners.topRight") ?? 4,
        j(t, "corners.bottomRight") ?? 4,
        j(t, "corners.bottomLeft") ?? 4
      ];
      return s.every((p) => p === s[0]);
    }), h = _ ? R : de(n), m = t.googleFonts, w = m ? Object.keys(m) : [], [x, g] = i.useState(""), [C, L] = i.useState(false), [I, D] = i.useState(null);
    i.useEffect(() => {
      Te(m);
    }, [
      m
    ]);
    const F = async () => {
      const s = x.trim();
      if (!(!s || C)) {
        L(true), D(null);
        try {
          const p = await Re(s);
          a(`googleFonts.${s}`, p), a("typography.fontFamily", `'${s}', sans-serif`), g("");
        } catch (p) {
          D(p instanceof Error ? p.message : String(p));
        } finally {
          L(false);
        }
      }
    }, V = (s) => {
      const p = s.target.value;
      p === R ? b(true) : p === "" ? (b(false), a("typography.fontFamily", void 0)) : (b(false), a("typography.fontFamily", p));
    }, z = (s, p) => {
      const k = Array.isArray(p) ? p[0] : p;
      c ? a("corners", {
        topLeft: k,
        topRight: k,
        bottomRight: k,
        bottomLeft: k
      }) : a(s, k);
    }, O = (s) => {
      if (!s) return r.t("theme_wizard_typography_font_family_default");
      if (s === R) return r.t("theme_wizard_typography_font_family_custom");
      const p = Ve.find((k) => k.value === s);
      return e.jsx("span", {
        style: {
          fontFamily: s
        },
        children: (p == null ? void 0 : p.label) ?? s
      });
    };
    return e.jsxs(te, {
      defaultExpanded: o ?? false,
      children: [
        e.jsx(ae, {
          expandIcon: e.jsx(re, {}),
          children: e.jsx(v, {
            children: r.t("theme_studio_section_schrift_form")
          })
        }),
        e.jsx(se, {
          children: e.jsxs(K, {
            spacing: 2,
            children: [
              e.jsxs(K, {
                spacing: 1,
                children: [
                  e.jsxs(d, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5
                    },
                    children: [
                      e.jsxs(ce, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          e.jsx(pe, {
                            id: "theme-font-family-label",
                            children: r.t("theme_wizard_typography_font_family")
                          }),
                          e.jsxs(he, {
                            labelId: "theme-font-family-label",
                            label: r.t("theme_wizard_typography_font_family"),
                            value: h,
                            onChange: V,
                            renderValue: O,
                            children: [
                              e.jsx(M, {
                                value: "",
                                children: r.t("theme_wizard_typography_font_family_default")
                              }),
                              e.jsx(U, {
                                children: r.t("theme_wizard_typography_font_family_group_bundled")
                              }),
                              Ke.map((s) => e.jsx(M, {
                                value: s.value,
                                sx: {
                                  fontFamily: s.value
                                },
                                children: s.label
                              }, s.value)),
                              e.jsx(U, {
                                children: r.t("theme_wizard_typography_font_family_group_system")
                              }),
                              Me.map((s) => e.jsx(M, {
                                value: s.value,
                                sx: {
                                  fontFamily: s.value
                                },
                                children: s.label
                              }, s.value)),
                              e.jsx(M, {
                                value: R,
                                children: r.t("theme_wizard_typography_font_family_custom")
                              })
                            ]
                          })
                        ]
                      }),
                      e.jsx(P, {
                        title: r.t("theme_studio_help_fonts")
                      })
                    ]
                  }),
                  _ ? e.jsx(Z, {
                    fullWidth: true,
                    size: "small",
                    label: r.t("theme_wizard_typography_font_family_custom"),
                    value: n ?? "",
                    onChange: (s) => a("typography.fontFamily", s.target.value || void 0)
                  }) : null,
                  n ? e.jsx(v, {
                    variant: "body2",
                    color: "text.secondary",
                    sx: {
                      fontFamily: n
                    },
                    children: r.t("theme_wizard_typography_font_family_sample")
                  }) : null
                ]
              }),
              e.jsxs(K, {
                spacing: 1,
                children: [
                  e.jsxs(d, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    },
                    children: [
                      e.jsx(v, {
                        variant: "body2",
                        color: "text.secondary",
                        children: r.t("theme_wizard_typography_google_font")
                      }),
                      e.jsx(dt, {
                        href: "https://fonts.google.com",
                        target: "_blank",
                        rel: "noreferrer",
                        variant: "caption",
                        children: r.t("theme_studio_google_fonts_link")
                      })
                    ]
                  }),
                  e.jsxs(d, {
                    sx: {
                      display: "flex",
                      gap: 1
                    },
                    children: [
                      e.jsx(Z, {
                        fullWidth: true,
                        size: "small",
                        placeholder: r.t("theme_wizard_typography_google_font_hint"),
                        value: x,
                        onChange: (s) => g(s.target.value),
                        onKeyDown: (s) => {
                          s.key === "Enter" && (s.preventDefault(), F());
                        },
                        disabled: C
                      }),
                      e.jsx(T, {
                        size: "small",
                        variant: "outlined",
                        startIcon: C ? e.jsx(Q, {
                          size: 16
                        }) : e.jsx(ct, {}),
                        onClick: () => {
                          F();
                        },
                        disabled: C || !x.trim(),
                        children: r.t("theme_wizard_typography_google_font_load")
                      })
                    ]
                  }),
                  I ? e.jsx(G, {
                    severity: "error",
                    onClose: () => D(null),
                    children: I
                  }) : null,
                  w.length > 0 ? e.jsx(d, {
                    sx: {
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.5
                    },
                    children: w.map((s) => e.jsx(Be, {
                      label: s,
                      size: "small",
                      onClick: () => a("typography.fontFamily", `'${s}', sans-serif`),
                      onDelete: () => a(`googleFonts.${s}`, void 0)
                    }, s))
                  }) : null
                ]
              }),
              e.jsxs(d, {
                children: [
                  e.jsxs(v, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: [
                      r.t("theme_wizard_typography_font_size"),
                      ": ",
                      u
                    ]
                  }),
                  e.jsx(B, {
                    value: u,
                    min: 8,
                    max: 24,
                    step: 0.5,
                    valueLabelDisplay: "auto",
                    onChange: (s, p) => a("typography.fontSize", p)
                  })
                ]
              }),
              e.jsxs(d, {
                children: [
                  e.jsxs(d, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      mb: 1
                    },
                    children: [
                      e.jsx(v, {
                        variant: "body2",
                        color: "text.secondary",
                        children: r.t("theme_wizard_typography_weight_section")
                      }),
                      e.jsx(P, {
                        title: r.t("theme_wizard_typography_weight_hint")
                      })
                    ]
                  }),
                  e.jsx(d, {
                    sx: {
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 1
                    },
                    children: jt.map((s) => {
                      const p = j(t, s.path);
                      return e.jsxs(ce, {
                        size: "small",
                        fullWidth: true,
                        children: [
                          e.jsx(pe, {
                            children: r.t(s.labelKey)
                          }),
                          e.jsxs(he, {
                            label: r.t(s.labelKey),
                            value: p === void 0 ? "" : String(p),
                            onChange: (k) => a(s.path, k.target.value === "" ? void 0 : Number(k.target.value)),
                            children: [
                              e.jsx(M, {
                                value: "",
                                children: "\u2014"
                              }),
                              vt.map((k) => e.jsx(M, {
                                value: String(k),
                                children: k
                              }, k))
                            ]
                          })
                        ]
                      }, s.path);
                    })
                  })
                ]
              }),
              e.jsxs(d, {
                children: [
                  e.jsxs(v, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: [
                      r.t("theme_wizard_typography_line_height"),
                      ": ",
                      y ?? "\u2014"
                    ]
                  }),
                  e.jsx(B, {
                    value: y ?? 1.43,
                    min: 1,
                    max: 2,
                    step: 0.05,
                    valueLabelDisplay: "auto",
                    onChange: (s, p) => a("typography.allVariants.lineHeight", p)
                  })
                ]
              }),
              e.jsxs(d, {
                children: [
                  e.jsxs(d, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1
                    },
                    children: [
                      e.jsx(v, {
                        variant: "body2",
                        color: "text.secondary",
                        children: r.t("theme_wizard_layout_border_radius")
                      }),
                      e.jsx(ee, {
                        size: "small",
                        onClick: () => f((s) => !s),
                        title: r.t("theme_studio_corners_link"),
                        color: c ? "primary" : "default",
                        children: c ? e.jsx(ht, {
                          fontSize: "small"
                        }) : e.jsx(ut, {
                          fontSize: "small"
                        })
                      })
                    ]
                  }),
                  e.jsx(d, {
                    sx: {
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 1.5
                    },
                    children: wt.map((s) => {
                      const p = j(t, s.path) ?? 4;
                      return e.jsxs(d, {
                        children: [
                          e.jsxs(v, {
                            variant: "caption",
                            color: "text.secondary",
                            children: [
                              r.t(s.labelKey),
                              ": ",
                              p
                            ]
                          }),
                          e.jsx(B, {
                            value: p,
                            min: 0,
                            max: 32,
                            step: 0.5,
                            valueLabelDisplay: "auto",
                            size: "small",
                            onChange: (k, X) => z(s.path, X)
                          })
                        ]
                      }, s.path);
                    })
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }
  const _e = 380, fe = {
    "invalid-color": "theme_studio_valid_color",
    "invalid-number": "theme_studio_valid_number",
    "number-out-of-range": "theme_studio_valid_range",
    "invalid-type": "theme_studio_valid_type",
    "unknown-key": "theme_studio_valid_unknown",
    "invalid-shape": "theme_studio_valid_shape"
  }, xe = (t) => t.code && fe[t.code] ? r.t(fe[t.code]) : t.message;
  function St({ open: t, onClose: a, socket: o, themeType: u }) {
    const [n, y] = i.useState({}), [_, b] = i.useState(false), [c, f] = i.useState(false), [h, m] = i.useState(false), [w, x] = i.useState(null), [g, C] = i.useState(false), [L] = i.useState(() => typeof window > "u" ? {
      x: 24,
      y: 24
    } : {
      x: Math.max(0, window.innerWidth - _e - 24),
      y: 24
    }), { position: I, panelRef: D, dragHandlers: F } = yt({
      initial: L
    }), V = i.useMemo(() => J({
      palette: {
        mode: u === "dark" ? "dark" : "light"
      }
    }), [
      u
    ]);
    i.useEffect(() => {
      if (!t) return;
      let l = true;
      return b(true), x(null), o.getState(A).then((S) => {
        if (!l) return;
        const E = typeof (S == null ? void 0 : S.val) == "string" ? S.val : "";
        if (!E) {
          y({});
          return;
        }
        try {
          const q = JSON.parse(E), ie = ue(q);
          y(ie.isValid ? ie.theme ?? {} : {});
        } catch {
          y({});
        }
      }).catch((S) => console.error(`Cannot read theme state ${A}: ${S}`)).finally(() => {
        l && (b(false), f(false));
      }), () => {
        l = false;
      };
    }, [
      t,
      o
    ]), i.useEffect(() => {
      t && We(n);
    }, [
      t,
      n
    ]);
    const z = i.useMemo(() => ue(n), [
      n
    ]), O = i.useMemo(() => {
      const l = j(n, "palette.mode"), S = l === "light" || l === "dark" ? l : u === "dark" ? "dark" : "light", E = Pe({
        ...n,
        palette: {
          ...n.palette,
          mode: S
        }
      }), q = J(E).palette.primary.main;
      return J(He(E, q));
    }, [
      n,
      u
    ]), s = i.useCallback(() => {
      if (c) {
        C(true);
        return;
      }
      me(), a();
    }, [
      c,
      a
    ]);
    i.useEffect(() => {
      if (!t) return;
      const l = (S) => {
        S.key === "Escape" && s();
      };
      return window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l);
    }, [
      t,
      s
    ]);
    const p = i.useCallback((l, S) => {
      y((E) => Oe(E, l, S)), f(true);
    }, []), k = i.useCallback(() => {
      y({}), f(true);
    }, []), X = i.useCallback((l) => {
      y(l), f(true);
    }, []), Ie = i.useCallback(async () => {
      if (!(!z.isValid || h)) {
        m(true), x(null);
        try {
          await o.setState(A, JSON.stringify(n)), f(false), a();
        } catch (l) {
          x(r.t("theme_studio_save_error")), console.error(`Cannot write theme state ${A}: ${l}`);
        } finally {
          m(false);
        }
      }
    }, [
      o,
      n,
      z.isValid,
      h,
      a
    ]), Fe = i.useCallback(() => {
      C(false), me(), a();
    }, [
      a
    ]);
    if (!t) return null;
    const ne = z.issues.filter((l) => l.severity === "error"), oe = z.issues.filter((l) => l.severity === "warning");
    return e.jsxs($e, {
      theme: V,
      children: [
        e.jsxs(Ae, {
          ref: D,
          elevation: 8,
          sx: {
            position: "fixed",
            left: I.x,
            top: I.y,
            width: _e,
            maxHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            zIndex: 1300
          },
          children: [
            e.jsxs(d, {
              ...F,
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 1,
                py: 0.5,
                borderBottom: 1,
                borderColor: "divider"
              },
              children: [
                e.jsxs(K, {
                  direction: "row",
                  alignItems: "center",
                  spacing: 0.5,
                  children: [
                    e.jsx(Ue, {
                      fontSize: "small",
                      color: "action"
                    }),
                    e.jsx(v, {
                      variant: "subtitle2",
                      children: r.t("theme_wizard_title")
                    })
                  ]
                }),
                e.jsx(ee, {
                  size: "small",
                  onClick: s,
                  children: e.jsx(Ne, {
                    fontSize: "small"
                  })
                })
              ]
            }),
            e.jsx(d, {
              sx: {
                overflowY: "auto",
                p: 2
              },
              children: _ ? e.jsx(d, {
                sx: {
                  display: "flex",
                  justifyContent: "center",
                  p: 3
                },
                children: e.jsx(Q, {})
              }) : e.jsxs(e.Fragment, {
                children: [
                  e.jsxs(d, {
                    sx: {
                      mb: 2
                    },
                    children: [
                      e.jsx(v, {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                          display: "block",
                          mb: 0.75
                        },
                        children: r.t("theme_studio_presets")
                      }),
                      e.jsx(K, {
                        direction: "row",
                        spacing: 1,
                        flexWrap: "wrap",
                        useFlexGap: true,
                        children: _t.map((l) => {
                          const S = j(l.theme, "palette.primary.main") ?? "#888888";
                          return e.jsxs(d, {
                            onClick: () => X(l.theme),
                            sx: {
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 0.5,
                              px: 1,
                              py: 0.25,
                              borderRadius: 16,
                              border: 1,
                              borderColor: "divider",
                              cursor: "pointer",
                              "&:hover": {
                                bgcolor: "action.hover"
                              }
                            },
                            children: [
                              e.jsx(d, {
                                sx: {
                                  width: 12,
                                  height: 12,
                                  borderRadius: "50%",
                                  bgcolor: S
                                }
                              }),
                              e.jsx(v, {
                                variant: "caption",
                                children: r.t(l.labelKey)
                              })
                            ]
                          }, l.id);
                        })
                      })
                    ]
                  }),
                  e.jsx(bt, {
                    theme: n,
                    onChange: p,
                    resolved: O
                  }),
                  e.jsx(kt, {
                    theme: n,
                    onChange: p
                  }),
                  e.jsx(xt, {
                    theme: n,
                    onChange: p,
                    resolved: O
                  }),
                  w ? e.jsx(G, {
                    severity: "error",
                    sx: {
                      mt: 2
                    },
                    children: w
                  }) : null,
                  ne.length > 0 ? e.jsxs(G, {
                    severity: "error",
                    sx: {
                      mt: 2
                    },
                    children: [
                      e.jsx(v, {
                        variant: "body2",
                        children: r.t("theme_wizard_validation_issues")
                      }),
                      e.jsx(d, {
                        component: "ul",
                        sx: {
                          margin: "4px 0 0",
                          paddingLeft: 3,
                          mb: 0
                        },
                        children: ne.map((l, S) => e.jsx("li", {
                          children: e.jsxs(v, {
                            variant: "body2",
                            children: [
                              l.path ? `${l.path}: ` : "",
                              xe(l)
                            ]
                          })
                        }, `${l.path}-${S}`))
                      })
                    ]
                  }) : null,
                  oe.length > 0 ? e.jsx(G, {
                    severity: "warning",
                    sx: {
                      mt: 2
                    },
                    icon: false,
                    children: e.jsx(d, {
                      component: "ul",
                      sx: {
                        margin: 0,
                        paddingLeft: 3,
                        mb: 0
                      },
                      children: oe.map((l, S) => e.jsx("li", {
                        children: e.jsxs(v, {
                          variant: "body2",
                          children: [
                            l.path ? `${l.path}: ` : "",
                            xe(l)
                          ]
                        })
                      }, `${l.path}-${S}`))
                    })
                  }) : null
                ]
              })
            }),
            e.jsxs(d, {
              sx: {
                display: "flex",
                gap: 1,
                p: 1.5,
                borderTop: 1,
                borderColor: "divider"
              },
              children: [
                e.jsx(T, {
                  onClick: k,
                  color: "inherit",
                  disabled: _ || h || Object.keys(n).length === 0,
                  children: r.t("theme_wizard_reset")
                }),
                e.jsx(d, {
                  sx: {
                    flex: 1
                  }
                }),
                e.jsx(T, {
                  onClick: s,
                  color: "inherit",
                  children: r.t("cancel")
                }),
                e.jsx(T, {
                  onClick: Ie,
                  variant: "contained",
                  disabled: !z.isValid || _ || h,
                  children: h ? e.jsx(Q, {
                    size: 20
                  }) : r.t("save")
                })
              ]
            })
          ]
        }),
        e.jsxs(Ze, {
          open: g,
          onClose: () => C(false),
          children: [
            e.jsx(Qe, {
              children: r.t("theme_studio_discard_title")
            }),
            e.jsx(et, {
              children: e.jsx(Ye, {
                children: r.t("theme_studio_discard_text")
              })
            }),
            e.jsxs(Xe, {
              children: [
                e.jsx(T, {
                  onClick: () => C(false),
                  color: "inherit",
                  children: r.t("cancel")
                }),
                e.jsx(T, {
                  onClick: Fe,
                  color: "error",
                  variant: "contained",
                  children: r.t("theme_studio_discard")
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Ct(t) {
    const [a, o] = i.useState(false);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(T, {
          variant: "outlined",
          fullWidth: true,
          startIcon: e.jsx(mt, {}),
          onClick: () => o(true),
          sx: {
            m: 0.5
          },
          children: r.t("theme_wizard_button")
        }),
        e.jsx(St, {
          open: a,
          onClose: () => o(false),
          socket: t.socket,
          themeType: t.themeType
        })
      ]
    });
  }
  Le = class extends r {
    static getWidgetInfo() {
      return {
        id: "tplCollectionThemeWizard",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "ThemeConfigWizard",
        visWidgetLabel: "theme_config_wizard",
        visOrder: 0,
        visAttrs: [],
        visPrev: "",
        customPalette: (a) => e.jsx(Ct, {
          ...a
        })
      };
    }
    getWidgetInfo() {
      return Le.getWidgetInfo();
    }
    renderWidgetBody() {
      return null;
    }
  };
});
export {
  __tla,
  Le as default
};
