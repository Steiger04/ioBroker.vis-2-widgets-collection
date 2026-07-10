import { c as $, j as e, ag as m, T as h, G as t, a0 as F, n as p, a1 as A, a2 as N, S as R, ab as G, a9 as v, aa as D, ah as H, a3 as J, I as q, ai as Q, __tla as __tla_0 } from "./usePopoverPositioning-BZLitN7O.js";
import { v as u, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { A as z, a as S, E as C, b as I, C as U, c as L, D as X, __tla as __tla_2 } from "./ColorPickerField-BrGAYMqT.js";
import { S as T, __tla as __tla_3 } from "./Stack-DkmwyHUs.js";
import { F as Y, __tla as __tla_4 } from "./FormControlLabel-VfbZJ0NJ.js";
import { S as Z, __tla as __tla_5 } from "./Switch-CAvvd4Cx.js";
import { S as w, __tla as __tla_6 } from "./Slider-ChiXGyym.js";
import { T as B, a as y, __tla as __tla_7 } from "./ToggleButtonGroup--6oQuj-k.js";
import { M as E, __tla as __tla_8 } from "./MenuItem-DHIkT0HX.js";
import { D as ee, a as te, b as ae, __tla as __tla_9 } from "./DialogTitle-DI-6SO5A.js";
import { C as re, __tla as __tla_10 } from "./Close-DFTQxPaF.js";
import { B as b, __tla as __tla_11 } from "./Button-CI-1uWz9.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_12 } from "./SwitchBase-QNQDlZV8.js";
import { __tla as __tla_13 } from "./listItemTextClasses-NWuPmlTm.js";
let V;
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
  const se = $(e.jsx("path", {
    d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9m5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9M5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5m6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5"
  }), "Palette");
  function le({ theme: s, onChange: a, defaultExpanded: c }) {
    const d = m(s, "cssVariables"), i = d === true || typeof d == "object" && d !== null, r = m(s, "cssVariables.cssVarPrefix") ?? "", n = (x, g) => {
      a("cssVariables", g ? true : void 0);
    }, o = (x) => {
      const g = x.target.value;
      a("cssVariables", g ? {
        cssVarPrefix: g
      } : true);
    };
    return e.jsxs(z, {
      defaultExpanded: c ?? false,
      children: [
        e.jsx(S, {
          expandIcon: e.jsx(C, {}),
          children: e.jsx(h, {
            children: t.t("theme_wizard_section_css_variables")
          })
        }),
        e.jsx(I, {
          children: e.jsxs(T, {
            spacing: 2,
            children: [
              e.jsx(Y, {
                control: e.jsx(Z, {
                  checked: i,
                  onChange: n
                }),
                label: t.t("theme_wizard_css_variables_enable")
              }),
              i ? e.jsx(F, {
                fullWidth: true,
                size: "small",
                label: t.t("theme_wizard_css_var_prefix"),
                value: r,
                onChange: o
              }) : null
            ]
          })
        })
      ]
    });
  }
  function ie({ theme: s, onChange: a, defaultExpanded: c }) {
    const d = m(s, "shape.borderRadius") ?? 4, i = m(s, "spacing") ?? 8, r = m(s, "direction"), n = (o, x) => {
      a("direction", x ?? void 0);
    };
    return e.jsxs(z, {
      defaultExpanded: c ?? false,
      children: [
        e.jsx(S, {
          expandIcon: e.jsx(C, {}),
          children: e.jsx(h, {
            children: t.t("theme_wizard_section_layout")
          })
        }),
        e.jsx(I, {
          children: e.jsxs(T, {
            spacing: 2,
            children: [
              e.jsxs(p, {
                children: [
                  e.jsxs(h, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: [
                      t.t("theme_wizard_layout_border_radius"),
                      ": ",
                      d
                    ]
                  }),
                  e.jsx(w, {
                    value: d,
                    min: 0,
                    max: 32,
                    step: 0.5,
                    valueLabelDisplay: "auto",
                    onChange: (o, x) => a("shape.borderRadius", x)
                  })
                ]
              }),
              e.jsxs(p, {
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
                    children: t.t("theme_wizard_layout_direction")
                  }),
                  e.jsxs(B, {
                    exclusive: true,
                    size: "small",
                    value: r === "ltr" || r === "rtl" ? r : null,
                    onChange: n,
                    children: [
                      e.jsx(y, {
                        value: "ltr",
                        children: t.t("theme_wizard_layout_direction_ltr")
                      }),
                      e.jsx(y, {
                        value: "rtl",
                        children: t.t("theme_wizard_layout_direction_rtl")
                      })
                    ]
                  })
                ]
              }),
              e.jsxs(p, {
                children: [
                  e.jsxs(h, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: [
                      t.t("theme_wizard_layout_spacing"),
                      ": ",
                      i
                    ]
                  }),
                  e.jsx(w, {
                    value: i,
                    min: 0,
                    max: 16,
                    step: 0.5,
                    valueLabelDisplay: "auto",
                    onChange: (o, x) => a("spacing", x)
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }
  const ne = [
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
  function oe({ theme: s, onChange: a, defaultExpanded: c }) {
    const d = m(s, "palette.mode"), i = d === "light" || d === "dark" ? d : "auto", r = (n, o) => {
      a("palette.mode", o === "light" || o === "dark" ? o : void 0);
    };
    return e.jsxs(z, {
      defaultExpanded: c ?? true,
      children: [
        e.jsx(S, {
          expandIcon: e.jsx(C, {}),
          children: e.jsx(h, {
            children: t.t("theme_wizard_section_palette")
          })
        }),
        e.jsxs(I, {
          children: [
            e.jsxs(p, {
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
                  children: t.t("theme_wizard_palette_mode")
                }),
                e.jsxs(B, {
                  exclusive: true,
                  size: "small",
                  value: i,
                  onChange: r,
                  children: [
                    e.jsx(y, {
                      value: "light",
                      children: t.t("theme_wizard_palette_mode_light")
                    }),
                    e.jsx(y, {
                      value: "dark",
                      children: t.t("theme_wizard_palette_mode_dark")
                    }),
                    e.jsx(y, {
                      value: "auto",
                      children: t.t("theme_wizard_palette_mode_auto")
                    })
                  ]
                })
              ]
            }),
            e.jsx(p, {
              sx: {
                display: "flex",
                flexWrap: "wrap",
                gap: 1
              },
              children: ne.map((n) => e.jsx(p, {
                sx: {
                  flex: "1 1 220px"
                },
                children: e.jsx(U, {
                  label: t.t(n.labelKey),
                  value: m(s, n.path) ?? "",
                  onChange: (o) => a(n.path, o || void 0)
                })
              }, n.path))
            })
          ]
        })
      ]
    });
  }
  const de = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
  ], ce = [
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
  function he({ theme: s, onChange: a, defaultExpanded: c }) {
    const d = m(s, "typography.fontSize") ?? 14, i = m(s, "typography.htmlFontSize") ?? 16;
    return e.jsxs(z, {
      defaultExpanded: c ?? false,
      children: [
        e.jsx(S, {
          expandIcon: e.jsx(C, {}),
          children: e.jsx(h, {
            children: t.t("theme_wizard_section_typography")
          })
        }),
        e.jsx(I, {
          children: e.jsxs(T, {
            spacing: 2,
            children: [
              e.jsx(F, {
                fullWidth: true,
                size: "small",
                label: t.t("theme_wizard_typography_font_family"),
                value: m(s, "typography.fontFamily") ?? "",
                onChange: (r) => a("typography.fontFamily", r.target.value || void 0)
              }),
              e.jsxs(p, {
                children: [
                  e.jsxs(h, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: [
                      t.t("theme_wizard_typography_font_size"),
                      ": ",
                      d
                    ]
                  }),
                  e.jsx(w, {
                    value: d,
                    min: 8,
                    max: 24,
                    step: 0.5,
                    valueLabelDisplay: "auto",
                    onChange: (r, n) => a("typography.fontSize", n)
                  })
                ]
              }),
              e.jsxs(p, {
                children: [
                  e.jsxs(h, {
                    variant: "body2",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: [
                      t.t("theme_wizard_typography_html_font_size"),
                      ": ",
                      i
                    ]
                  }),
                  e.jsx(w, {
                    value: i,
                    min: 8,
                    max: 32,
                    step: 1,
                    valueLabelDisplay: "auto",
                    onChange: (r, n) => a("typography.htmlFontSize", n)
                  })
                ]
              }),
              e.jsx(p, {
                sx: {
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1
                },
                children: ce.map((r) => {
                  const n = m(s, r.path);
                  return e.jsxs(A, {
                    size: "small",
                    sx: {
                      flex: "1 1 140px",
                      minWidth: 140
                    },
                    children: [
                      e.jsx(N, {
                        children: t.t(r.labelKey)
                      }),
                      e.jsxs(R, {
                        label: t.t(r.labelKey),
                        value: n === void 0 ? "" : String(n),
                        onChange: (o) => a(r.path, o.target.value === "" ? void 0 : Number(o.target.value)),
                        children: [
                          e.jsx(E, {
                            value: "",
                            children: "\u2014"
                          }),
                          de.map((o) => e.jsx(E, {
                            value: String(o),
                            children: o
                          }, o))
                        ]
                      })
                    ]
                  }, r.path);
                })
              })
            ]
          })
        })
      ]
    });
  }
  function pe({ open: s, onClose: a, socket: c, themeType: d }) {
    const [i, r] = u.useState({}), [n, o] = u.useState(false), x = u.useMemo(() => G({
      palette: {
        mode: d === "dark" ? "dark" : "light"
      }
    }), [
      d
    ]);
    u.useEffect(() => {
      if (!s) return;
      let l = true;
      return o(true), c.getState(v).then((_) => {
        if (!l) return;
        const f = typeof (_ == null ? void 0 : _.val) == "string" ? _.val : "";
        if (!f) {
          r({});
          return;
        }
        try {
          const M = JSON.parse(f), K = D(M);
          r(K.isValid ? K.theme ?? {} : {});
        } catch {
          r({});
        }
      }).catch((_) => console.error(`Cannot read theme state ${v}: ${_}`)).finally(() => {
        l && o(false);
      }), () => {
        l = false;
      };
    }, [
      s,
      c
    ]);
    const g = u.useMemo(() => D(i), [
      i
    ]), j = u.useCallback((l, _) => {
      r((f) => H(f, l, _));
    }, []), O = u.useCallback(() => {
      c.setState(v, JSON.stringify(i)).catch((l) => console.error(`Cannot write theme state ${v}: ${l}`)), a();
    }, [
      c,
      i,
      a
    ]), P = u.useCallback(() => {
      r({});
    }, []), W = g.issues.filter((l) => l.severity === "error"), k = g.issues.filter((l) => l.severity === "warning");
    return e.jsx(J, {
      theme: x,
      children: e.jsxs(ee, {
        open: s,
        onClose: a,
        fullWidth: true,
        maxWidth: "md",
        children: [
          e.jsxs(te, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pr: 1
            },
            children: [
              t.t("theme_wizard_title"),
              e.jsx(q, {
                size: "small",
                onClick: a,
                children: e.jsx(re, {})
              })
            ]
          }),
          e.jsx(ae, {
            children: n ? e.jsx(p, {
              sx: {
                display: "flex",
                justifyContent: "center",
                p: 3
              },
              children: e.jsx(Q, {})
            }) : e.jsxs(e.Fragment, {
              children: [
                e.jsx(oe, {
                  theme: i,
                  onChange: j
                }),
                e.jsx(he, {
                  theme: i,
                  onChange: j
                }),
                e.jsx(ie, {
                  theme: i,
                  onChange: j
                }),
                e.jsx(le, {
                  theme: i,
                  onChange: j
                }),
                W.length > 0 ? e.jsxs(L, {
                  severity: "error",
                  sx: {
                    mt: 2
                  },
                  children: [
                    e.jsx(h, {
                      variant: "body2",
                      children: t.t("theme_wizard_validation_issues")
                    }),
                    e.jsx(p, {
                      component: "ul",
                      sx: {
                        margin: "4px 0 0",
                        paddingLeft: 3,
                        mb: 0
                      },
                      children: W.map((l, _) => e.jsx("li", {
                        children: e.jsxs(h, {
                          variant: "body2",
                          children: [
                            l.path ? `${l.path}: ` : "",
                            l.message
                          ]
                        })
                      }, `${l.path}-${_}`))
                    })
                  ]
                }) : null,
                k.length > 0 ? e.jsx(L, {
                  severity: "warning",
                  sx: {
                    mt: 2
                  },
                  icon: false,
                  children: e.jsx(p, {
                    component: "ul",
                    sx: {
                      margin: 0,
                      paddingLeft: 3,
                      mb: 0
                    },
                    children: k.map((l, _) => e.jsx("li", {
                      children: e.jsxs(h, {
                        variant: "body2",
                        children: [
                          l.path ? `${l.path}: ` : "",
                          l.message
                        ]
                      })
                    }, `${l.path}-${_}`))
                  })
                }) : null
              ]
            })
          }),
          e.jsxs(X, {
            children: [
              e.jsx(p, {
                sx: {
                  flex: 1
                },
                children: e.jsx(b, {
                  onClick: P,
                  color: "inherit",
                  disabled: n || Object.keys(i).length === 0,
                  children: t.t("theme_wizard_reset")
                })
              }),
              e.jsx(b, {
                onClick: a,
                color: "inherit",
                children: t.t("cancel")
              }),
              e.jsx(b, {
                onClick: O,
                variant: "contained",
                disabled: !g.isValid || n,
                children: t.t("save")
              })
            ]
          })
        ]
      })
    });
  }
  function me(s) {
    const [a, c] = u.useState(false);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(b, {
          variant: "outlined",
          fullWidth: true,
          startIcon: e.jsx(se, {}),
          onClick: () => c(true),
          sx: {
            m: 0.5
          },
          children: t.t("theme_wizard_button")
        }),
        e.jsx(pe, {
          open: a,
          onClose: () => c(false),
          socket: s.socket,
          themeType: s.themeType
        })
      ]
    });
  }
  V = class extends t {
    static getWidgetInfo() {
      return {
        id: "tplCollectionThemeWizard",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "ThemeConfigWizard",
        visWidgetLabel: "theme_config_wizard",
        visOrder: 1e3,
        visAttrs: [],
        visPrev: "",
        customPalette: (a) => e.jsx(me, {
          ...a
        })
      };
    }
    getWidgetInfo() {
      return V.getWidgetInfo();
    }
    renderWidgetBody() {
      return null;
    }
  };
});
export {
  __tla,
  V as default
};
