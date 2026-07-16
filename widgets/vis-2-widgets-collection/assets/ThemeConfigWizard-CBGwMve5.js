import { g as ee, a as te, u as ae, j as e, s as se, d as re, w as J, e as le, m as ie, c as Y, ag as f, T as h, G as a, a0 as B, n as m, ah as R, ai as k, aa as oe, a1 as H, a2 as P, S as A, aj as ne, ak as de, al as q, am as ce, an as he, ab as pe, a8 as E, a9 as U, ao as ue, a3 as me, I as _e, __tla as __tla_0 } from "./usePopoverPositioning-C05Nu8XW.js";
import { v as y, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { A as M, b as O, E as G, c as $, a as ye, d as N, C as ge, D as xe, __tla as __tla_2 } from "./ColorPickerField-N9d0Qmn-.js";
import { S as T, __tla as __tla_3 } from "./Stack-CFGCK_Os.js";
import { F as fe, __tla as __tla_4 } from "./FormControlLabel-DKFOMWlA.js";
import { S as je, __tla as __tla_5 } from "./Switch-C9bANsqc.js";
import { S as V, __tla as __tla_6 } from "./Slider-mVupvoPJ.js";
import { T as Q, a as L, __tla as __tla_7 } from "./ToggleButtonGroup-CqD6epk4.js";
import { M as F, __tla as __tla_8 } from "./MenuItem-HzYKHM0Q.js";
import { B as I, __tla as __tla_9 } from "./Button-B6fhc4ye.js";
import { D as be, a as ve, b as we, __tla as __tla_10 } from "./DialogTitle-D5KKnSme.js";
import { C as ze, __tla as __tla_11 } from "./Close-B4cPbZlV.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_12 } from "./SwitchBase-XpmSqOOG.js";
import { __tla as __tla_13 } from "./listItemTextClasses-DV-semt9.js";
let X;
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
  function Se(r) {
    return ee("MuiListSubheader", r);
  }
  te("MuiListSubheader", [
    "root",
    "colorPrimary",
    "colorInherit",
    "gutters",
    "inset",
    "sticky"
  ]);
  const Fe = (r) => {
    const { classes: t, color: i, disableGutters: n, inset: l, disableSticky: c } = r, d = {
      root: [
        "root",
        i !== "default" && `color${J(i)}`,
        !n && "gutters",
        l && "inset",
        !c && "sticky"
      ]
    };
    return le(d, Se, t);
  }, Ce = se("li", {
    name: "MuiListSubheader",
    slot: "Root",
    overridesResolver: (r, t) => {
      const { ownerState: i } = r;
      return [
        t.root,
        i.color !== "default" && t[`color${J(i.color)}`],
        !i.disableGutters && t.gutters,
        i.inset && t.inset,
        !i.disableSticky && t.sticky
      ];
    }
  })(ie(({ theme: r }) => ({
    boxSizing: "border-box",
    lineHeight: "48px",
    listStyle: "none",
    color: (r.vars || r).palette.text.secondary,
    fontFamily: r.typography.fontFamily,
    fontWeight: r.typography.fontWeightMedium,
    fontSize: r.typography.pxToRem(14),
    variants: [
      {
        props: {
          color: "primary"
        },
        style: {
          color: (r.vars || r).palette.primary.main
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
        props: ({ ownerState: t }) => !t.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: t }) => t.inset,
        style: {
          paddingLeft: 72
        }
      },
      {
        props: ({ ownerState: t }) => !t.disableSticky,
        style: {
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: (r.vars || r).palette.background.paper
        }
      }
    ]
  }))), K = y.forwardRef(function(t, i) {
    const n = ae({
      props: t,
      name: "MuiListSubheader"
    }), { className: l, color: c = "default", component: d = "li", disableGutters: p = false, disableSticky: _ = false, inset: x = false, ...j } = n, w = {
      ...n,
      color: c,
      component: d,
      disableGutters: p,
      disableSticky: _,
      inset: x
    }, z = Fe(w);
    return e.jsx(Ce, {
      as: d,
      className: re(z.root, l),
      ref: i,
      ownerState: w,
      ...j
    });
  });
  K && (K.muiSkipListHighlight = true);
  const ke = Y(e.jsx("path", {
    d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
  }), "Download"), Te = Y(e.jsx("path", {
    d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9m5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9M5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5m6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5"
  }), "Palette");
  function Le({ theme: r, onChange: t, defaultExpanded: i }) {
    const n = f(r, "cssVariables"), l = n === true || typeof n == "object" && n !== null, c = f(r, "cssVariables.cssVarPrefix") ?? "", d = (_, x) => {
      t("cssVariables", x ? true : void 0);
    }, p = (_) => {
      const x = _.target.value;
      t("cssVariables", x ? {
        cssVarPrefix: x
      } : true);
    };
    return e.jsxs(M, {
      defaultExpanded: i ?? false,
      children: [
        e.jsx(O, {
          expandIcon: e.jsx(G, {}),
          children: e.jsx(h, {
            children: a.t("theme_wizard_section_css_variables")
          })
        }),
        e.jsx($, {
          children: e.jsxs(T, {
            spacing: 2,
            children: [
              e.jsx(fe, {
                control: e.jsx(je, {
                  checked: l,
                  onChange: d
                }),
                label: a.t("theme_wizard_css_variables_enable")
              }),
              l ? e.jsx(B, {
                fullWidth: true,
                size: "small",
                label: a.t("theme_wizard_css_var_prefix"),
                value: c,
                onChange: p
              }) : null
            ]
          })
        })
      ]
    });
  }
  function Ie({ theme: r, onChange: t, defaultExpanded: i }) {
    const n = f(r, "shape.borderRadius") ?? 4, l = f(r, "spacing") ?? 8, c = f(r, "direction"), d = (p, _) => {
      t("direction", _ ?? void 0);
    };
    return e.jsxs(M, {
      defaultExpanded: i ?? false,
      children: [
        e.jsx(O, {
          expandIcon: e.jsx(G, {}),
          children: e.jsx(h, {
            children: a.t("theme_wizard_section_layout")
          })
        }),
        e.jsx($, {
          children: e.jsxs(T, {
            spacing: 2,
            children: [
              e.jsxs(m, {
                children: [
                  e.jsxs(h, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: [
                      a.t("theme_wizard_layout_border_radius"),
                      ": ",
                      n
                    ]
                  }),
                  e.jsx(V, {
                    value: n,
                    min: 0,
                    max: 32,
                    step: 0.5,
                    valueLabelDisplay: "auto",
                    onChange: (p, _) => t("shape.borderRadius", _)
                  })
                ]
              }),
              e.jsxs(m, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  e.jsx(h, {
                    variant: "body2",
                    color: "text.secondary",
                    sx: {
                      flexShrink: 0
                    },
                    children: a.t("theme_wizard_layout_direction")
                  }),
                  e.jsxs(Q, {
                    exclusive: true,
                    size: "small",
                    value: c === "ltr" || c === "rtl" ? c : null,
                    onChange: d,
                    children: [
                      e.jsx(L, {
                        value: "ltr",
                        children: a.t("theme_wizard_layout_direction_ltr")
                      }),
                      e.jsx(L, {
                        value: "rtl",
                        children: a.t("theme_wizard_layout_direction_rtl")
                      })
                    ]
                  })
                ]
              }),
              e.jsxs(m, {
                children: [
                  e.jsxs(h, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: [
                      a.t("theme_wizard_layout_spacing"),
                      ": ",
                      l
                    ]
                  }),
                  e.jsx(V, {
                    value: l,
                    min: 0,
                    max: 16,
                    step: 0.5,
                    valueLabelDisplay: "auto",
                    onChange: (p, _) => t("spacing", _)
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }
  const We = [
    {
      path: "palette.primary.main",
      labelKey: "theme_wizard_palette_primary"
    },
    {
      path: "palette.secondary.main",
      labelKey: "theme_wizard_palette_secondary"
    },
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
    },
    {
      path: "palette.text.primary",
      labelKey: "theme_wizard_palette_text_primary"
    },
    {
      path: "palette.text.secondary",
      labelKey: "theme_wizard_palette_text_secondary"
    },
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
  ];
  function De({ theme: r, onChange: t, defaultExpanded: i }) {
    const n = f(r, "palette.mode"), l = n === "light" || n === "dark" ? n : "auto", c = (d, p) => {
      t("palette.mode", p === "light" || p === "dark" ? p : void 0);
    };
    return e.jsxs(M, {
      defaultExpanded: i ?? true,
      children: [
        e.jsx(O, {
          expandIcon: e.jsx(G, {}),
          children: e.jsx(h, {
            children: a.t("theme_wizard_section_palette")
          })
        }),
        e.jsxs($, {
          children: [
            e.jsxs(m, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1.5
              },
              children: [
                e.jsx(h, {
                  variant: "body2",
                  color: "text.secondary",
                  sx: {
                    flexShrink: 0
                  },
                  children: a.t("theme_wizard_palette_mode")
                }),
                e.jsxs(Q, {
                  exclusive: true,
                  size: "small",
                  value: l,
                  onChange: c,
                  children: [
                    e.jsx(L, {
                      value: "light",
                      children: a.t("theme_wizard_palette_mode_light")
                    }),
                    e.jsx(L, {
                      value: "dark",
                      children: a.t("theme_wizard_palette_mode_dark")
                    }),
                    e.jsx(L, {
                      value: "auto",
                      children: a.t("theme_wizard_palette_mode_auto")
                    })
                  ]
                })
              ]
            }),
            e.jsx(m, {
              sx: {
                display: "flex",
                flexWrap: "wrap",
                gap: 1
              },
              children: We.map((d) => e.jsx(m, {
                sx: {
                  flex: "1 1 220px"
                },
                children: e.jsx(ye, {
                  label: a.t(d.labelKey),
                  value: f(r, d.path) ?? "",
                  onChange: (p) => t(d.path, p || void 0)
                })
              }, d.path))
            })
          ]
        })
      ]
    });
  }
  const Ee = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
  ], Ve = [
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
  ];
  function Ke({ theme: r, onChange: t, defaultExpanded: i }) {
    const n = f(r, "typography.fontSize") ?? 14, l = f(r, "typography.fontFamily"), c = f(r, "typography.fontWeightRegular"), d = f(r, "typography.allVariants.lineHeight"), [p, _] = y.useState(R(l) === k), x = p ? k : R(l), j = r.googleFonts, w = j ? Object.keys(j) : [], [z, C] = y.useState(""), [S, o] = y.useState(false), [g, b] = y.useState(null);
    y.useEffect(() => {
      oe(j);
    }, [
      j
    ]);
    const W = async () => {
      const s = z.trim();
      if (!(!s || S)) {
        o(true), b(null);
        try {
          const u = await he(s);
          t(`googleFonts.${s}`, u), t("typography.fontFamily", `'${s}', sans-serif`), C("");
        } catch (u) {
          b(u instanceof Error ? u.message : String(u));
        } finally {
          o(false);
        }
      }
    }, D = (s) => {
      const u = s.target.value;
      u === k ? _(true) : u === "" ? (_(false), t("typography.fontFamily", void 0)) : (_(false), t("typography.fontFamily", u));
    }, Z = (s) => {
      if (!s) return a.t("theme_wizard_typography_font_family_default");
      if (s === k) return a.t("theme_wizard_typography_font_family_custom");
      const u = ce.find((v) => v.value === s);
      return e.jsx("span", {
        style: {
          fontFamily: s
        },
        children: (u == null ? void 0 : u.label) ?? s
      });
    };
    return e.jsxs(M, {
      defaultExpanded: i ?? false,
      children: [
        e.jsx(O, {
          expandIcon: e.jsx(G, {}),
          children: e.jsx(h, {
            children: a.t("theme_wizard_section_typography")
          })
        }),
        e.jsx($, {
          children: e.jsxs(T, {
            spacing: 2,
            children: [
              e.jsxs(T, {
                spacing: 1,
                children: [
                  e.jsxs(H, {
                    fullWidth: true,
                    size: "small",
                    children: [
                      e.jsx(P, {
                        id: "theme-font-family-label",
                        children: a.t("theme_wizard_typography_font_family")
                      }),
                      e.jsxs(A, {
                        labelId: "theme-font-family-label",
                        label: a.t("theme_wizard_typography_font_family"),
                        value: x,
                        onChange: D,
                        renderValue: Z,
                        children: [
                          e.jsx(F, {
                            value: "",
                            children: a.t("theme_wizard_typography_font_family_default")
                          }),
                          e.jsx(K, {
                            children: a.t("theme_wizard_typography_font_family_group_bundled")
                          }),
                          ne.map((s) => e.jsx(F, {
                            value: s.value,
                            sx: {
                              fontFamily: s.value
                            },
                            children: s.label
                          }, s.value)),
                          e.jsx(K, {
                            children: a.t("theme_wizard_typography_font_family_group_system")
                          }),
                          de.map((s) => e.jsx(F, {
                            value: s.value,
                            sx: {
                              fontFamily: s.value
                            },
                            children: s.label
                          }, s.value)),
                          e.jsx(F, {
                            value: k,
                            children: a.t("theme_wizard_typography_font_family_custom")
                          })
                        ]
                      })
                    ]
                  }),
                  p ? e.jsx(B, {
                    fullWidth: true,
                    size: "small",
                    label: a.t("theme_wizard_typography_font_family_custom"),
                    value: l ?? "",
                    onChange: (s) => t("typography.fontFamily", s.target.value || void 0)
                  }) : null,
                  l ? e.jsx(h, {
                    variant: "body2",
                    color: "text.secondary",
                    sx: {
                      fontFamily: l
                    },
                    children: a.t("theme_wizard_typography_font_family_sample")
                  }) : null
                ]
              }),
              e.jsxs(T, {
                spacing: 1,
                children: [
                  e.jsx(h, {
                    variant: "body2",
                    color: "text.secondary",
                    children: a.t("theme_wizard_typography_google_font")
                  }),
                  e.jsxs(m, {
                    sx: {
                      display: "flex",
                      gap: 1
                    },
                    children: [
                      e.jsx(B, {
                        fullWidth: true,
                        size: "small",
                        placeholder: a.t("theme_wizard_typography_google_font_hint"),
                        value: z,
                        onChange: (s) => C(s.target.value),
                        onKeyDown: (s) => {
                          s.key === "Enter" && (s.preventDefault(), W());
                        },
                        disabled: S
                      }),
                      e.jsx(I, {
                        size: "small",
                        variant: "outlined",
                        startIcon: S ? e.jsx(q, {
                          size: 16
                        }) : e.jsx(ke, {}),
                        onClick: () => {
                          W();
                        },
                        disabled: S || !z.trim(),
                        children: a.t("theme_wizard_typography_google_font_load")
                      })
                    ]
                  }),
                  g ? e.jsx(N, {
                    severity: "error",
                    onClose: () => b(null),
                    children: g
                  }) : null,
                  w.length > 0 ? e.jsx(m, {
                    sx: {
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.5
                    },
                    children: w.map((s) => e.jsx(ge, {
                      label: s,
                      size: "small",
                      onClick: () => t("typography.fontFamily", `'${s}', sans-serif`),
                      onDelete: () => t(`googleFonts.${s}`, void 0)
                    }, s))
                  }) : null
                ]
              }),
              e.jsxs(m, {
                children: [
                  e.jsxs(h, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: [
                      a.t("theme_wizard_typography_font_size"),
                      ": ",
                      n
                    ]
                  }),
                  e.jsx(V, {
                    value: n,
                    min: 8,
                    max: 24,
                    step: 0.5,
                    valueLabelDisplay: "auto",
                    onChange: (s, u) => t("typography.fontSize", u)
                  })
                ]
              }),
              e.jsxs(m, {
                children: [
                  e.jsx(h, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: a.t("theme_wizard_typography_weight_section")
                  }),
                  e.jsx(h, {
                    variant: "caption",
                    color: "text.secondary",
                    sx: {
                      display: "block",
                      mb: 1
                    },
                    children: a.t("theme_wizard_typography_weight_hint")
                  }),
                  e.jsx(m, {
                    sx: {
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1
                    },
                    children: Ve.map((s) => {
                      const u = f(r, s.path);
                      return e.jsxs(H, {
                        size: "small",
                        sx: {
                          flex: "1 1 140px",
                          minWidth: 140
                        },
                        children: [
                          e.jsx(P, {
                            children: a.t(s.labelKey)
                          }),
                          e.jsxs(A, {
                            label: a.t(s.labelKey),
                            value: u === void 0 ? "" : String(u),
                            onChange: (v) => t(s.path, v.target.value === "" ? void 0 : Number(v.target.value)),
                            children: [
                              e.jsx(F, {
                                value: "",
                                children: "\u2014"
                              }),
                              Ee.map((v) => e.jsx(F, {
                                value: String(v),
                                children: v
                              }, v))
                            ]
                          })
                        ]
                      }, s.path);
                    })
                  })
                ]
              }),
              e.jsxs(m, {
                children: [
                  e.jsxs(h, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: [
                      a.t("theme_wizard_typography_line_height"),
                      ": ",
                      d ?? "\u2014"
                    ]
                  }),
                  e.jsx(V, {
                    value: d ?? 1.43,
                    min: 1,
                    max: 2,
                    step: 0.05,
                    valueLabelDisplay: "auto",
                    onChange: (s, u) => t("typography.allVariants.lineHeight", u)
                  })
                ]
              }),
              e.jsxs(m, {
                children: [
                  e.jsx(h, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: a.t("theme_wizard_typography_preview")
                  }),
                  e.jsx(m, {
                    sx: {
                      p: 1.5,
                      border: 1,
                      borderColor: "divider",
                      borderRadius: 1
                    },
                    children: e.jsx(h, {
                      sx: {
                        fontFamily: l || void 0,
                        fontSize: `${n}px`,
                        fontWeight: c ?? 400,
                        lineHeight: d ?? void 0
                      },
                      children: a.t("theme_wizard_typography_font_family_sample")
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
  function Me({ open: r, onClose: t, socket: i, themeType: n }) {
    const [l, c] = y.useState({}), [d, p] = y.useState(false), _ = y.useMemo(() => pe({
      palette: {
        mode: n === "dark" ? "dark" : "light"
      }
    }), [
      n
    ]);
    y.useEffect(() => {
      if (!r) return;
      let o = true;
      return p(true), i.getState(E).then((g) => {
        if (!o) return;
        const b = typeof (g == null ? void 0 : g.val) == "string" ? g.val : "";
        if (!b) {
          c({});
          return;
        }
        try {
          const W = JSON.parse(b), D = U(W);
          c(D.isValid ? D.theme ?? {} : {});
        } catch {
          c({});
        }
      }).catch((g) => console.error(`Cannot read theme state ${E}: ${g}`)).finally(() => {
        o && p(false);
      }), () => {
        o = false;
      };
    }, [
      r,
      i
    ]);
    const x = y.useMemo(() => U(l), [
      l
    ]), j = y.useCallback((o, g) => {
      c((b) => ue(b, o, g));
    }, []), w = y.useCallback(() => {
      i.setState(E, JSON.stringify(l)).catch((o) => console.error(`Cannot write theme state ${E}: ${o}`)), t();
    }, [
      i,
      l,
      t
    ]), z = y.useCallback(() => {
      c({});
    }, []), C = x.issues.filter((o) => o.severity === "error"), S = x.issues.filter((o) => o.severity === "warning");
    return e.jsx(me, {
      theme: _,
      children: e.jsxs(be, {
        open: r,
        onClose: t,
        fullWidth: true,
        maxWidth: "md",
        children: [
          e.jsxs(ve, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pr: 1
            },
            children: [
              a.t("theme_wizard_title"),
              e.jsx(_e, {
                size: "small",
                onClick: t,
                children: e.jsx(ze, {})
              })
            ]
          }),
          e.jsx(we, {
            children: d ? e.jsx(m, {
              sx: {
                display: "flex",
                justifyContent: "center",
                p: 3
              },
              children: e.jsx(q, {})
            }) : e.jsxs(e.Fragment, {
              children: [
                e.jsx(De, {
                  theme: l,
                  onChange: j
                }),
                e.jsx(Ke, {
                  theme: l,
                  onChange: j
                }),
                e.jsx(Ie, {
                  theme: l,
                  onChange: j
                }),
                e.jsx(Le, {
                  theme: l,
                  onChange: j
                }),
                C.length > 0 ? e.jsxs(N, {
                  severity: "error",
                  sx: {
                    mt: 2
                  },
                  children: [
                    e.jsx(h, {
                      variant: "body2",
                      children: a.t("theme_wizard_validation_issues")
                    }),
                    e.jsx(m, {
                      component: "ul",
                      sx: {
                        margin: "4px 0 0",
                        paddingLeft: 3,
                        mb: 0
                      },
                      children: C.map((o, g) => e.jsx("li", {
                        children: e.jsxs(h, {
                          variant: "body2",
                          children: [
                            o.path ? `${o.path}: ` : "",
                            o.message
                          ]
                        })
                      }, `${o.path}-${g}`))
                    })
                  ]
                }) : null,
                S.length > 0 ? e.jsx(N, {
                  severity: "warning",
                  sx: {
                    mt: 2
                  },
                  icon: false,
                  children: e.jsx(m, {
                    component: "ul",
                    sx: {
                      margin: 0,
                      paddingLeft: 3,
                      mb: 0
                    },
                    children: S.map((o, g) => e.jsx("li", {
                      children: e.jsxs(h, {
                        variant: "body2",
                        children: [
                          o.path ? `${o.path}: ` : "",
                          o.message
                        ]
                      })
                    }, `${o.path}-${g}`))
                  })
                }) : null
              ]
            })
          }),
          e.jsxs(xe, {
            children: [
              e.jsx(m, {
                sx: {
                  flex: 1
                },
                children: e.jsx(I, {
                  onClick: z,
                  color: "inherit",
                  disabled: d || Object.keys(l).length === 0,
                  children: a.t("theme_wizard_reset")
                })
              }),
              e.jsx(I, {
                onClick: t,
                color: "inherit",
                children: a.t("cancel")
              }),
              e.jsx(I, {
                onClick: w,
                variant: "contained",
                disabled: !x.isValid || d,
                children: a.t("save")
              })
            ]
          })
        ]
      })
    });
  }
  function Oe(r) {
    const [t, i] = y.useState(false);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(I, {
          variant: "outlined",
          fullWidth: true,
          startIcon: e.jsx(Te, {}),
          onClick: () => i(true),
          sx: {
            m: 0.5
          },
          children: a.t("theme_wizard_button")
        }),
        e.jsx(Me, {
          open: t,
          onClose: () => i(false),
          socket: r.socket,
          themeType: r.themeType
        })
      ]
    });
  }
  X = class extends a {
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
        customPalette: (t) => e.jsx(Oe, {
          ...t
        })
      };
    }
    getWidgetInfo() {
      return X.getWidgetInfo();
    }
    renderWidgetBody() {
      return null;
    }
  };
});
export {
  __tla,
  X as default
};
