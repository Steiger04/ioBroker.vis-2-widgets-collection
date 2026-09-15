import { v as f, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as z, f as E, u as N, j as r, s as $, h as B, J as _, i as P, p as H, aj as C, a as k, r as X, T as m, ak as Q, al as W, d as V, I as D, B as u, b as g, __tla as __tla_1 } from "./tinycolor-CLG1zgRY.js";
import { G as y, __tla as __tla_2 } from "./usePopoverPositioning-BenXbV4b.js";
import { D as Y, a as Z, b as ee, __tla as __tla_3 } from "./DialogTitle-HuV6BuJ1.js";
import { D as te, b as re, T as R, I as U, __tla as __tla_4 } from "./ExpandMore-CLaFQDhZ.js";
import { B as M, __tla as __tla_5 } from "./Button-dZ_pwx8T.js";
import { A as ne, a as se, C as oe, b as ie, e as ae, __tla as __tla_6 } from "./Chip-1TaQU-_L.js";
import { S as G, __tla as __tla_7 } from "./Slider-dZO7P2QF.js";
import { M as le, __tla as __tla_8 } from "./MenuItem-B0Mpzx1G.js";
import { S as ce, __tla as __tla_9 } from "./Switch-C83_3FOV.js";
import { a as de, T as ue, __tla as __tla_10 } from "./Tabs-CHqyraCm.js";
import { v as pe } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let He, tt, j, rt, F, Oe, et, nt, qe, Je, Ge, Ze, Ye, Qe, Ke, Pe, Xe, Ue, ot, Ve, it, st;
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
  })()
]).then(async () => {
  function xe(e) {
    return z("MuiListSubheader", e);
  }
  E("MuiListSubheader", [
    "root",
    "colorPrimary",
    "colorInherit",
    "gutters",
    "inset",
    "sticky"
  ]);
  let fe, he;
  fe = (e) => {
    const { classes: t, color: n, disableGutters: s, inset: i, disableSticky: o } = e, a = {
      root: [
        "root",
        n !== "default" && `color${_(n)}`,
        !s && "gutters",
        i && "inset",
        !o && "sticky"
      ]
    };
    return P(a, xe, t);
  };
  he = $("li", {
    name: "MuiListSubheader",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${_(n.color)}`],
        !n.disableGutters && t.gutters,
        n.inset && t.inset,
        !n.disableSticky && t.sticky
      ];
    }
  })(H(({ theme: e }) => ({
    boxSizing: "border-box",
    lineHeight: "48px",
    listStyle: "none",
    color: (e.vars || e).palette.text.secondary,
    fontFamily: e.typography.fontFamily,
    fontWeight: e.typography.fontWeightMedium,
    fontSize: e.typography.pxToRem(14),
    variants: [
      {
        props: {
          color: "primary"
        },
        style: {
          color: (e.vars || e).palette.primary.main
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
          backgroundColor: (e.vars || e).palette.background.paper
        }
      }
    ]
  })));
  F = f.forwardRef(function(t, n) {
    const s = N({
      props: t,
      name: "MuiListSubheader"
    }), { className: i, color: o = "default", component: a = "li", disableGutters: p = false, disableSticky: l = false, inset: c = false, ...d } = s, x = {
      ...s,
      color: o,
      component: a,
      disableGutters: p,
      disableSticky: l,
      inset: c
    }, h = fe(x);
    return r.jsx(he, {
      as: a,
      className: B(h.root, i),
      ref: n,
      ownerState: x,
      ...d
    });
  });
  F && (F.muiSkipListHighlight = true);
  function me(e) {
    return z("MuiLink", e);
  }
  let be, ye, A, ge, je, ve, Ce;
  be = E("MuiLink", [
    "root",
    "underlineNone",
    "underlineHover",
    "underlineAlways",
    "button",
    "focusVisible"
  ]);
  ye = ({ theme: e, ownerState: t }) => {
    const n = t.color, s = C(e, `palette.${n}.main`, false) || C(e, `palette.${n}`, false) || t.color, i = C(e, `palette.${n}.mainChannel`) || C(e, `palette.${n}Channel`);
    return "vars" in e && i ? `rgba(${i} / 0.4)` : k(s, 0.4);
  };
  A = {
    primary: true,
    secondary: true,
    error: true,
    info: true,
    success: true,
    warning: true,
    textPrimary: true,
    textSecondary: true,
    textDisabled: true
  };
  ge = (e) => {
    const { classes: t, component: n, focusVisible: s, underline: i } = e, o = {
      root: [
        "root",
        `underline${_(i)}`,
        n === "button" && "button",
        s && "focusVisible"
      ]
    };
    return P(o, me, t);
  };
  je = $(m, {
    name: "MuiLink",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`underline${_(n.underline)}`],
        n.component === "button" && t.button
      ];
    }
  })(H(({ theme: e }) => ({
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
        props: ({ underline: t, ownerState: n }) => t === "always" && n.color !== "inherit",
        style: {
          textDecorationColor: "var(--Link-underlineColor)"
        }
      },
      ...Object.entries(e.palette).filter(Q()).map(([t]) => ({
        props: {
          underline: "always",
          color: t
        },
        style: {
          "--Link-underlineColor": e.vars ? `rgba(${e.vars.palette[t].mainChannel} / 0.4)` : k(e.palette[t].main, 0.4)
        }
      })),
      {
        props: {
          underline: "always",
          color: "textPrimary"
        },
        style: {
          "--Link-underlineColor": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : k(e.palette.text.primary, 0.4)
        }
      },
      {
        props: {
          underline: "always",
          color: "textSecondary"
        },
        style: {
          "--Link-underlineColor": e.vars ? `rgba(${e.vars.palette.text.secondaryChannel} / 0.4)` : k(e.palette.text.secondary, 0.4)
        }
      },
      {
        props: {
          underline: "always",
          color: "textDisabled"
        },
        style: {
          "--Link-underlineColor": (e.vars || e).palette.text.disabled
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
          [`&.${be.focusVisible}`]: {
            outline: "auto"
          }
        }
      }
    ]
  })));
  Pe = f.forwardRef(function(t, n) {
    const s = N({
      props: t,
      name: "MuiLink"
    }), i = X(), { className: o, color: a = "primary", component: p = "a", onBlur: l, onFocus: c, TypographyClasses: d, underline: x = "always", variant: h = "inherit", sx: b, ...I } = s, [O, T] = f.useState(false), K = (v) => {
      W(v.target) || T(false), l && l(v);
    }, q = (v) => {
      W(v.target) && T(true), c && c(v);
    }, L = {
      ...s,
      color: a,
      component: p,
      focusVisible: O,
      underline: x,
      variant: h
    }, J = ge(L);
    return r.jsx(je, {
      color: a,
      className: B(J.root, o),
      classes: d,
      component: p,
      onBlur: K,
      onFocus: q,
      ref: n,
      ownerState: L,
      variant: h,
      ...I,
      sx: [
        ...A[a] === void 0 ? [
          {
            color: a
          }
        ] : [],
        ...Array.isArray(b) ? b : [
          b
        ]
      ],
      style: {
        ...I.style,
        ...x === "always" && a !== "inherit" && !A[a] && {
          "--Link-underlineColor": ye({
            theme: i,
            ownerState: L
          })
        }
      }
    });
  });
  ve = V(r.jsx("path", {
    d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7z"
  }), "Redo");
  Ce = V(r.jsx("path", {
    d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8"
  }), "Undo");
  He = function({ open: e, text: t, onCancel: n, onConfirm: s }) {
    return r.jsxs(Y, {
      open: e,
      onClose: n,
      children: [
        r.jsx(Z, {
          children: y.t("theme_studio_discard_title")
        }),
        r.jsx(ee, {
          children: r.jsx(te, {
            children: t
          })
        }),
        r.jsxs(re, {
          children: [
            r.jsx(M, {
              onClick: n,
              color: "inherit",
              children: y.t("cancel")
            }),
            r.jsx(M, {
              onClick: s,
              color: "error",
              variant: "contained",
              children: y.t("theme_studio_discard")
            })
          ]
        })
      ]
    });
  };
  Ve = function({ canUndo: e, canRedo: t, onUndo: n, onRedo: s, size: i = "small", sx: o }) {
    return r.jsxs(r.Fragment, {
      children: [
        r.jsx(R, {
          title: y.t("theme_studio_undo"),
          children: r.jsx("span", {
            children: r.jsx(D, {
              onClick: n,
              disabled: !e,
              size: i,
              sx: o,
              "aria-label": y.t("theme_studio_undo"),
              children: r.jsx(Ce, {
                fontSize: i
              })
            })
          })
        }),
        r.jsx(R, {
          title: y.t("theme_studio_redo"),
          children: r.jsx("span", {
            children: r.jsx(D, {
              onClick: s,
              disabled: !t,
              size: i,
              sx: o,
              "aria-label": y.t("theme_studio_redo"),
              children: r.jsx(ve, {
                fontSize: i
              })
            })
          })
        })
      ]
    });
  };
  Ue = function({ title: e, summary: t, issueCount: n = 0, expanded: s, onExpandedChange: i, children: o }) {
    const [a, p] = f.useState(false), l = s ?? a, c = (d) => {
      s === void 0 && p(d), i == null ? void 0 : i(d);
    };
    return r.jsxs(ne, {
      expanded: l,
      onChange: (d, x) => c(x),
      disableGutters: true,
      elevation: 0,
      slotProps: {
        transition: {
          mountOnEnter: true
        }
      },
      sx: {
        border: 1,
        borderColor: "divider",
        borderRadius: "12px !important",
        mb: 1,
        "&::before": {
          display: "none"
        },
        overflow: "hidden"
      },
      children: [
        r.jsxs(se, {
          expandIcon: r.jsx(U, {}),
          sx: {
            minHeight: 44,
            "& .MuiAccordionSummary-content": {
              alignItems: "baseline",
              gap: 1
            }
          },
          children: [
            r.jsx(m, {
              variant: "body2",
              sx: {
                fontWeight: 600,
                flexShrink: 0
              },
              children: e
            }),
            !l && t ? r.jsx(m, {
              variant: "caption",
              color: "text.secondary",
              noWrap: true,
              sx: {
                flex: 1,
                minWidth: 0,
                textAlign: "right"
              },
              children: t
            }) : null,
            n > 0 && r.jsx(oe, {
              size: "small",
              color: "warning",
              variant: "outlined",
              label: `\u26A0 ${n}`,
              sx: {
                ml: "auto",
                flexShrink: 0
              }
            })
          ]
        }),
        r.jsx(ie, {
          sx: {
            pt: 0.5
          },
          children: o
        })
      ]
    });
  };
  let w, Se, ke, _e;
  w = {
    "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0
    },
    "& input[type=number]": {
      MozAppearance: "textfield",
      appearance: "textfield"
    }
  };
  j = ({ children: e }) => r.jsx(m, {
    variant: "caption",
    color: "text.secondary",
    noWrap: true,
    title: typeof e == "string" ? e : void 0,
    sx: {
      display: "block",
      mb: 0.5
    },
    children: e
  });
  Ge = ({ label: e, value: t, onChange: n, options: s, disabled: i }) => r.jsxs(u, {
    children: [
      r.jsx(j, {
        children: e
      }),
      r.jsx(g, {
        select: true,
        size: "small",
        value: t,
        onChange: (o) => n(o.target.value),
        disabled: i,
        fullWidth: true,
        slotProps: {
          select: {
            displayEmpty: true
          }
        },
        children: s.map(([o, a]) => r.jsx(le, {
          value: o,
          children: a
        }, o))
      })
    ]
  });
  Oe = ({ label: e, value: t, onChange: n, step: s = 1, error: i, helperText: o, disabled: a }) => r.jsxs(u, {
    children: [
      r.jsx(j, {
        children: e
      }),
      r.jsx(g, {
        size: "small",
        type: "number",
        value: t,
        inputProps: {
          step: s
        },
        onChange: (p) => n(Number(p.target.value) || 0),
        error: i,
        helperText: o,
        disabled: a,
        fullWidth: true,
        sx: w
      })
    ]
  });
  Ke = ({ label: e, value: t, onChange: n, step: s = 1, error: i, helperText: o, disabled: a, placeholder: p }) => r.jsxs(u, {
    children: [
      r.jsx(j, {
        children: e
      }),
      r.jsx(g, {
        size: "small",
        type: "number",
        value: t ?? "",
        inputProps: {
          step: s
        },
        error: i,
        helperText: o,
        disabled: a,
        placeholder: p,
        onChange: (l) => {
          const c = l.target.value;
          if (c === "") {
            n(void 0);
            return;
          }
          const d = Number(c);
          n(Number.isFinite(d) ? d : void 0);
        },
        fullWidth: true,
        sx: w
      })
    ]
  });
  qe = ({ label: e, value: t, onChange: n, placeholder: s, error: i, helperText: o, disabled: a }) => r.jsxs(u, {
    children: [
      r.jsx(j, {
        children: e
      }),
      r.jsx(g, {
        size: "small",
        value: t,
        onChange: (p) => n(p.target.value),
        placeholder: s,
        error: i,
        helperText: o,
        disabled: a,
        fullWidth: true
      })
    ]
  });
  Je = ({ children: e, min: t = 150, sx: n }) => r.jsx(u, {
    sx: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fill, minmax(${t}px, 1fr))`,
      gap: 1.5,
      ...n
    },
    children: e
  });
  Xe = ({ title: e, hint: t, children: n, sx: s }) => r.jsxs(u, {
    sx: {
      mb: 2,
      "&:last-child": {
        mb: 0
      },
      ...s
    },
    children: [
      r.jsxs(u, {
        sx: {
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 1,
          mb: 1
        },
        children: [
          r.jsx(m, {
            variant: "caption",
            sx: {
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "text.secondary"
            },
            children: e
          }),
          t && r.jsx(m, {
            variant: "caption",
            color: "text.secondary",
            noWrap: true,
            children: t
          })
        ]
      }),
      n
    ]
  });
  Qe = ({ label: e, checked: t, onChange: n, disabled: s }) => {
    const i = f.useId();
    return r.jsxs(u, {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
        pl: 1,
        pr: 0.5,
        py: 0.25,
        minHeight: 32
      },
      children: [
        r.jsx(m, {
          component: "label",
          htmlFor: i,
          variant: "body2",
          noWrap: true,
          sx: {
            flex: 1,
            minWidth: 0,
            cursor: s ? "default" : "pointer"
          },
          children: e
        }),
        r.jsx(ce, {
          id: i,
          size: "small",
          checked: t,
          disabled: s,
          onChange: (o) => n(o.target.checked)
        })
      ]
    });
  };
  Ye = ({ children: e, sx: t }) => r.jsx(u, {
    sx: {
      border: 1,
      borderColor: "divider",
      borderRadius: 1.5,
      overflow: "hidden",
      "& > *:not(:last-child)": {
        borderBottom: 1,
        borderColor: "divider"
      },
      ...t
    },
    children: e
  });
  Ze = ({ label: e, value: t, min: n, max: s, step: i = 1, onChange: o, disabled: a }) => {
    const [p, l] = f.useState(null), c = (d) => Math.min(Math.max(d, n), s);
    return r.jsxs(u, {
      children: [
        r.jsx(j, {
          children: e
        }),
        r.jsxs(u, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            px: 0.5
          },
          children: [
            r.jsx(G, {
              size: "small",
              value: t,
              min: n,
              max: s,
              step: i,
              disabled: a,
              onChange: (d, x) => o(x),
              "aria-label": e,
              sx: {
                flex: 1,
                minWidth: 0
              }
            }),
            r.jsx(g, {
              size: "small",
              type: "number",
              disabled: a,
              value: p ?? String(t),
              inputProps: {
                min: n,
                max: s,
                step: i,
                "aria-label": e
              },
              onFocus: () => l(String(t)),
              onChange: (d) => {
                if (l(d.target.value), d.target.value !== "") {
                  const x = Number(d.target.value);
                  Number.isFinite(x) && o(c(x));
                }
              },
              onBlur: () => l(null),
              sx: {
                width: 64,
                flexShrink: 0,
                ...w
              }
            })
          ]
        })
      ]
    });
  };
  et = ({ label: e, value: t, min: n, max: s, step: i = 1, fallback: o, onChange: a }) => {
    const [p, l] = f.useState(null), c = (h) => Math.min(Math.max(h, n), s), d = t ?? o, x = t === void 0;
    return r.jsxs(u, {
      children: [
        r.jsx(j, {
          children: e
        }),
        r.jsxs(u, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            px: 0.5
          },
          children: [
            r.jsx(G, {
              size: "small",
              value: d,
              min: n,
              max: s,
              step: i,
              onChange: (h, b) => a(b),
              "aria-label": e,
              sx: {
                flex: 1,
                minWidth: 0
              }
            }),
            r.jsx(g, {
              size: "small",
              type: "number",
              value: p ?? (x ? "" : String(t)),
              inputProps: {
                min: n,
                max: s,
                step: i,
                "aria-label": e
              },
              placeholder: x ? String(o) : void 0,
              onFocus: () => l(x ? "" : String(t)),
              onChange: (h) => {
                if (l(h.target.value), h.target.value === "") {
                  a(void 0);
                  return;
                }
                const b = Number(h.target.value);
                Number.isFinite(b) && a(c(b));
              },
              onBlur: () => l(null),
              sx: {
                width: 64,
                flexShrink: 0,
                ...w
              }
            })
          ]
        })
      ]
    });
  };
  tt = ({ open: e, onToggle: t, swatch: n, title: s, subtitle: i, actions: o, children: a }) => r.jsxs(u, {
    sx: {
      border: 1,
      borderColor: e ? "primary.main" : "divider",
      borderRadius: 1.5,
      mb: 1,
      overflow: "hidden",
      transition: "border-color 150ms"
    },
    children: [
      r.jsxs(u, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 0.75,
          pl: 1,
          pr: 0.5,
          py: 0.5,
          borderRadius: "inherit",
          "&:hover": {
            bgcolor: "action.hover"
          }
        },
        children: [
          r.jsxs(u, {
            component: "button",
            type: "button",
            onClick: t,
            "aria-expanded": e,
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              flex: 1,
              minWidth: 0,
              border: 0,
              p: 0,
              bgcolor: "transparent",
              color: "inherit",
              font: "inherit",
              textAlign: "left",
              cursor: "pointer"
            },
            children: [
              r.jsx(U, {
                sx: {
                  fontSize: 16,
                  color: "text.secondary",
                  transform: e ? "rotate(180deg)" : "none",
                  transition: "transform 150ms",
                  flexShrink: 0
                }
              }),
              n,
              r.jsxs(u, {
                sx: {
                  flex: 1,
                  minWidth: 0
                },
                children: [
                  r.jsx(m, {
                    variant: "body2",
                    noWrap: true,
                    children: s
                  }),
                  i != null && r.jsx(m, {
                    variant: "caption",
                    noWrap: true,
                    sx: {
                      display: "block",
                      color: "text.secondary"
                    },
                    children: i
                  })
                ]
              })
            ]
          }),
          o
        ]
      }),
      r.jsx(ae, {
        in: e,
        mountOnEnter: true,
        children: r.jsx(u, {
          sx: {
            px: 1.5,
            pb: 1.5,
            pt: 0.5
          },
          children: a
        })
      })
    ]
  });
  rt = ({ text: e, children: t, tone: n = "info" }) => r.jsx(u, {
    sx: {
      mt: 1,
      p: 1,
      bgcolor: "action.hover",
      borderLeft: 3,
      borderColor: n === "warning" ? "warning.main" : "primary.main",
      borderRadius: 0.5
    },
    children: r.jsx(m, {
      variant: "caption",
      color: "text.secondary",
      children: t ?? e
    })
  });
  nt = ({ tabs: e, children: t, focus: n }) => {
    var _a;
    const [s, i] = f.useState(((_a = e[0]) == null ? void 0 : _a.key) ?? ""), o = n == null ? void 0 : n.key, a = n == null ? void 0 : n.token;
    f.useEffect(() => {
      o !== void 0 && i(o);
    }, [
      o,
      a
    ]);
    const p = Array.isArray(t) ? t : [
      t
    ], l = Math.max(0, e.findIndex((c) => c.key === s));
    return r.jsxs(u, {
      children: [
        r.jsx(de, {
          value: l,
          onChange: (c, d) => {
            var _a2;
            return i(((_a2 = e[d]) == null ? void 0 : _a2.key) ?? "");
          },
          variant: "scrollable",
          scrollButtons: "auto",
          sx: {
            minHeight: 36,
            "& .MuiTab-root": {
              minHeight: 36,
              py: 0.5,
              px: 1.5,
              fontSize: "0.8rem"
            }
          },
          children: e.map((c) => r.jsx(ue, {
            disableRipple: true,
            "aria-label": c.label,
            label: r.jsxs(u, {
              component: "span",
              sx: {
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5
              },
              children: [
                c.label,
                !!c.issueCount && r.jsx(u, {
                  component: "span",
                  "data-issue-dot": true,
                  "aria-hidden": true,
                  sx: {
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "warning.main"
                  }
                })
              ]
            })
          }, c.key))
        }),
        r.jsx(u, {
          sx: {
            mt: 1.5
          },
          children: p[l]
        })
      ]
    });
  };
  ({ initPromise: Se } = pe);
  ke = Se.then((e) => e.loadShare("@iobroker/adapter-react-v5", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  }));
  _e = await ke.then((e) => e());
  st = _e;
  const we = 800, Le = (e, t, n) => e !== null && e.key === t && n - e.time < we;
  function S(e, t) {
    switch (t.type) {
      case "set": {
        const n = typeof t.next == "function" ? t.next(e.present) : t.next;
        return t.coalesce ? {
          ...e,
          present: n
        } : {
          past: [
            ...e.past.slice(-49),
            e.present
          ],
          present: n,
          future: []
        };
      }
      case "undo":
        return e.past.length === 0 ? e : {
          past: e.past.slice(0, -1),
          present: e.past[e.past.length - 1],
          future: [
            e.present,
            ...e.future
          ]
        };
      case "redo":
        return e.future.length === 0 ? e : {
          past: [
            ...e.past.slice(-49),
            e.present
          ],
          present: e.future[0],
          future: e.future.slice(1)
        };
      case "rebase":
        return {
          past: [],
          present: t.value,
          future: []
        };
    }
  }
  const Ie = (e) => {
    if (!(e instanceof HTMLElement)) return false;
    const t = e.tagName;
    return t === "INPUT" || t === "TEXTAREA" || t === "SELECT" || e.isContentEditable;
  };
  ot = function(e, t) {
    const { undo: n, redo: s } = e;
    f.useEffect(() => {
      if (!t) return;
      const i = (o) => {
        if (Ie(o.target)) return;
        const a = o.ctrlKey || o.metaKey;
        a && !o.altKey && o.key.toLowerCase() === "z" ? (o.preventDefault(), o.shiftKey ? s() : n()) : a && !o.altKey && o.key.toLowerCase() === "y" && (o.preventDefault(), s());
      };
      return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
    }, [
      t,
      n,
      s
    ]);
  };
  it = function(e) {
    const [t, n] = f.useState({
      past: [],
      present: e,
      future: []
    }), s = f.useRef(null), i = f.useCallback((l, c) => {
      const d = Date.now(), x = c !== void 0 && Le(s.current, c, d);
      s.current = c !== void 0 ? {
        key: c,
        time: d
      } : null, n((h) => S(h, {
        type: "set",
        next: l,
        coalesce: x
      }));
    }, []), o = f.useCallback(() => {
      s.current = null, n((l) => S(l, {
        type: "undo"
      }));
    }, []), a = f.useCallback(() => {
      s.current = null, n((l) => S(l, {
        type: "redo"
      }));
    }, []), p = f.useCallback((l) => {
      s.current = null, n((c) => S(c, {
        type: "rebase",
        value: l
      }));
    }, []);
    return {
      present: t.present,
      set: i,
      undo: o,
      redo: a,
      canUndo: t.past.length > 0,
      canRedo: t.future.length > 0,
      rebase: p
    };
  };
});
export {
  He as C,
  tt as E,
  j as F,
  rt as I,
  F as L,
  Oe as N,
  et as O,
  nt as S,
  qe as T,
  __tla,
  Je as a,
  Ge as b,
  Ze as c,
  Ye as d,
  Qe as e,
  Ke as f,
  Pe as g,
  Xe as h,
  Ue as i,
  ot as j,
  Ve as k,
  it as u,
  st as v
};
