import { a as I, g as k, L as U, u as M, j as p, s as V, d as L, i as R, e as P, n as X, m as N, o as s, N as Y, C as E, q, x as J, v as K, z as Q, A as Z, w as A, y as tt, T as ot, G as at, E as j, H as et, J as rt, K as it, __tla as __tla_0 } from "./commonFields-8_mIPW_t.js";
import { v as b, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as lt, __tla as __tla_2 } from "./SafeImg-tj5GQGHs.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let F;
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
  })()
]).then(async () => {
  function nt(a) {
    return b.Children.toArray(a).filter((t) => b.isValidElement(t));
  }
  function st(a) {
    return k("MuiToggleButton", a);
  }
  const S = I("MuiToggleButton", [
    "root",
    "disabled",
    "selected",
    "standard",
    "primary",
    "secondary",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
    "fullWidth"
  ]), D = b.createContext({}), H = b.createContext(void 0);
  function dt(a, t) {
    return t === void 0 || a === void 0 ? false : Array.isArray(t) ? t.includes(a) : a === t;
  }
  const ct = (a) => {
    const { classes: t, fullWidth: r, selected: f, disabled: i, size: C, color: l } = a, e = {
      root: [
        "root",
        f && "selected",
        i && "disabled",
        r && "fullWidth",
        `size${R(C)}`,
        l
      ]
    };
    return P(e, st, t);
  }, ut = V(X, {
    name: "MuiToggleButton",
    slot: "Root",
    overridesResolver: (a, t) => {
      const { ownerState: r } = a;
      return [
        t.root,
        t[`size${R(r.size)}`]
      ];
    }
  })(N(({ theme: a }) => ({
    ...a.typography.button,
    borderRadius: (a.vars || a).shape.borderRadius,
    padding: 11,
    border: `1px solid ${(a.vars || a).palette.divider}`,
    color: (a.vars || a).palette.action.active,
    [`&.${S.disabled}`]: {
      color: (a.vars || a).palette.action.disabled,
      border: `1px solid ${(a.vars || a).palette.action.disabledBackground}`
    },
    "&:hover": {
      textDecoration: "none",
      backgroundColor: a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})` : s(a.palette.text.primary, a.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    variants: [
      {
        props: {
          color: "standard"
        },
        style: {
          [`&.${S.selected}`]: {
            color: (a.vars || a).palette.text.primary,
            backgroundColor: a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.selectedOpacity})` : s(a.palette.text.primary, a.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))` : s(a.palette.text.primary, a.palette.action.selectedOpacity + a.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.selectedOpacity})` : s(a.palette.text.primary, a.palette.action.selectedOpacity)
              }
            }
          }
        }
      },
      ...Object.entries(a.palette).filter(Y()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          [`&.${S.selected}`]: {
            color: (a.vars || a).palette[t].main,
            backgroundColor: a.vars ? `rgba(${a.vars.palette[t].mainChannel} / ${a.vars.palette.action.selectedOpacity})` : s(a.palette[t].main, a.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: a.vars ? `rgba(${a.vars.palette[t].mainChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))` : s(a.palette[t].main, a.palette.action.selectedOpacity + a.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: a.vars ? `rgba(${a.vars.palette[t].mainChannel} / ${a.vars.palette.action.selectedOpacity})` : s(a.palette[t].main, a.palette.action.selectedOpacity)
              }
            }
          }
        }
      })),
      {
        props: {
          fullWidth: true
        },
        style: {
          width: "100%"
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          padding: 7,
          fontSize: a.typography.pxToRem(13)
        }
      },
      {
        props: {
          size: "large"
        },
        style: {
          padding: 15,
          fontSize: a.typography.pxToRem(15)
        }
      }
    ]
  }))), pt = b.forwardRef(function(t, r) {
    const { value: f, ...i } = b.useContext(D), C = b.useContext(H), l = U({
      ...i,
      selected: dt(t.value, f)
    }, t), e = M({
      props: l,
      name: "MuiToggleButton"
    }), { children: B, className: d, color: g = "standard", disabled: v = false, disableFocusRipple: m = false, fullWidth: c = false, onChange: o, onClick: $, selected: h, size: O = "medium", value: T, ...W } = e, x = {
      ...e,
      color: g,
      disabled: v,
      disableFocusRipple: m,
      fullWidth: c,
      size: O
    }, w = ct(x), _ = (u) => {
      $ && ($(u, T), u.defaultPrevented) || o && o(u, T);
    }, y = C || "";
    return p.jsx(ut, {
      className: L(i.className, w.root, d, y),
      disabled: v,
      focusRipple: !m,
      ref: r,
      onClick: _,
      onChange: o,
      value: T,
      ownerState: x,
      "aria-pressed": h,
      ...W,
      children: B
    });
  });
  function gt(a) {
    return k("MuiToggleButtonGroup", a);
  }
  const n = I("MuiToggleButtonGroup", [
    "root",
    "selected",
    "horizontal",
    "vertical",
    "disabled",
    "grouped",
    "groupedHorizontal",
    "groupedVertical",
    "fullWidth",
    "firstButton",
    "lastButton",
    "middleButton"
  ]), vt = (a) => {
    const { classes: t, orientation: r, fullWidth: f, disabled: i } = a, C = {
      root: [
        "root",
        r,
        f && "fullWidth"
      ],
      grouped: [
        "grouped",
        `grouped${R(r)}`,
        i && "disabled"
      ],
      firstButton: [
        "firstButton"
      ],
      lastButton: [
        "lastButton"
      ],
      middleButton: [
        "middleButton"
      ]
    };
    return P(C, gt, t);
  }, bt = V("div", {
    name: "MuiToggleButtonGroup",
    slot: "Root",
    overridesResolver: (a, t) => {
      const { ownerState: r } = a;
      return [
        {
          [`& .${n.grouped}`]: t.grouped
        },
        {
          [`& .${n.grouped}`]: t[`grouped${R(r.orientation)}`]
        },
        {
          [`& .${n.firstButton}`]: t.firstButton
        },
        {
          [`& .${n.lastButton}`]: t.lastButton
        },
        {
          [`& .${n.middleButton}`]: t.middleButton
        },
        t.root,
        r.orientation === "vertical" && t.vertical,
        r.fullWidth && t.fullWidth
      ];
    }
  })(N(({ theme: a }) => ({
    display: "inline-flex",
    borderRadius: (a.vars || a).shape.borderRadius,
    variants: [
      {
        props: {
          orientation: "vertical"
        },
        style: {
          flexDirection: "column",
          [`& .${n.grouped}`]: {
            [`&.${n.selected} + .${n.grouped}.${n.selected}`]: {
              borderTop: 0,
              marginTop: 0
            }
          },
          [`& .${n.firstButton},& .${n.middleButton}`]: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          },
          [`& .${n.lastButton},& .${n.middleButton}`]: {
            marginTop: -1,
            borderTop: "1px solid transparent",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
          },
          [`& .${n.lastButton}.${S.disabled},& .${n.middleButton}.${S.disabled}`]: {
            borderTop: "1px solid transparent"
          }
        }
      },
      {
        props: {
          fullWidth: true
        },
        style: {
          width: "100%"
        }
      },
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          [`& .${n.grouped}`]: {
            [`&.${n.selected} + .${n.grouped}.${n.selected}`]: {
              borderLeft: 0,
              marginLeft: 0
            }
          },
          [`& .${n.firstButton},& .${n.middleButton}`]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          },
          [`& .${n.lastButton},& .${n.middleButton}`]: {
            marginLeft: -1,
            borderLeft: "1px solid transparent",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          },
          [`& .${n.lastButton}.${S.disabled},& .${n.middleButton}.${S.disabled}`]: {
            borderLeft: "1px solid transparent"
          }
        }
      }
    ]
  }))), ft = b.forwardRef(function(t, r) {
    const f = M({
      props: t,
      name: "MuiToggleButtonGroup"
    }), { children: i, className: C, color: l = "standard", disabled: e = false, exclusive: B = false, fullWidth: d = false, onChange: g, orientation: v = "horizontal", size: m = "medium", value: c, ...o } = f, $ = {
      ...f,
      disabled: e,
      fullWidth: d,
      orientation: v,
      size: m
    }, h = vt($), O = b.useCallback((y, u) => {
      if (!g) return;
      const z = c && c.indexOf(u);
      let G;
      c && z >= 0 ? (G = c.slice(), G.splice(z, 1)) : G = c ? c.concat(u) : [
        u
      ], g(y, G);
    }, [
      g,
      c
    ]), T = b.useCallback((y, u) => {
      g && g(y, c === u ? null : u);
    }, [
      g,
      c
    ]), W = b.useMemo(() => ({
      className: h.grouped,
      onChange: B ? T : O,
      value: c,
      size: m,
      fullWidth: d,
      color: l,
      disabled: e
    }), [
      h.grouped,
      B,
      T,
      O,
      c,
      m,
      d,
      l,
      e
    ]), x = nt(i), w = x.length, _ = (y) => {
      const u = y === 0, z = y === w - 1;
      return u && z ? "" : u ? h.firstButton : z ? h.lastButton : h.middleButton;
    };
    return p.jsx(bt, {
      role: "group",
      className: L(h.root, C),
      ref: r,
      ownerState: $,
      ...o,
      children: p.jsx(D.Provider, {
        value: W,
        children: x.map((y, u) => p.jsx(H.Provider, {
          value: _(u),
          children: y
        }, u))
      })
    });
  }), Ct = () => [
    {
      type: "custom",
      component: () => p.jsx(E, {})
    },
    {
      name: "onlyIcon",
      type: "checkbox",
      label: "only_icon",
      hidden: "data.onlyText"
    },
    {
      name: "onlyText",
      type: "checkbox",
      label: "only_text",
      hidden: "data.onlyIcon"
    },
    {
      name: "buttonGroupVariant",
      label: "button_group_variant",
      type: "select",
      options: [
        {
          value: "text",
          label: "button_group_text"
        },
        {
          value: "outlined",
          label: "button_group_outlined"
        }
      ],
      default: "text"
    },
    {
      name: "buttonGroupOrientation",
      label: "button_group_orientation",
      type: "select",
      options: [
        {
          value: "horizontal",
          label: "horizontal"
        },
        {
          value: "vertical",
          label: "vertical"
        }
      ],
      default: "horizontal"
    },
    {
      name: "buttonGroupColor",
      label: "button_group_color",
      type: "color"
    }
  ];
  function $t() {
    const a = b.useContext(q), { widget: t, theme: r } = a, f = t.data.oidObject, { data: i, states: C, activeIndex: l } = J("oid"), { value: e, updateValue: B } = K("oid"), d = t.data.buttonGroupVariant, g = t.data.buttonGroupOrientation, v = f == null ? void 0 : f.type, m = v === "boolean" || v === "number" || v === "string" || v === "mixed";
    return p.jsxs(Q, {
      isValidType: m,
      data: i,
      oidValue: e,
      bgActive: false,
      children: [
        p.jsx(Z, {
          data: i,
          widget: t
        }),
        p.jsx(A, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex"
          },
          children: p.jsx(ft, {
            exclusive: true,
            value: e,
            disabled: v !== "number" && v !== "string" && v !== "boolean" && v !== "mixed",
            fullWidth: true,
            orientation: g,
            sx: {
              display: "flex",
              flexDirection: g === "vertical" ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: g === "vertical" ? "100%" : "auto",
              maxHeight: g === "vertical" ? "100%" : "none",
              "&.MuiToggleButtonGroup-root": {},
              ...g === "vertical" && {
                "& .MuiToggleButton-root": {
                  flex: "1 1 0",
                  minHeight: 0,
                  maxHeight: `calc(100% / ${C.length})`
                }
              },
              "& .MuiToggleButtonGroup-firstButton": {
                borderTopWidth: d === "outlined" ? null : 0,
                borderLeftWidth: d === "outlined" ? null : 0,
                borderRightWidth: d === "outlined" || t.data.buttonGroupOrientation === "horizontal" ? null : 0,
                borderBottomWidth: d === "outlined" ? null : t.data.buttonGroupOrientation === "horizontal" ? 0 : null,
                borderColor: t.data.buttonGroupColor && s(t.data.buttonGroupColor, 0.2),
                borderRadius: t.data.basePadding ? void 0 : 0
              },
              "& .MuiToggleButtonGroup-middleButton": {
                borderTopWidth: d === "outlined" ? null : t.data.buttonGroupOrientation === "horizontal" ? 0 : null,
                borderLeftWidth: d === "outlined" || t.data.buttonGroupOrientation === "horizontal" ? null : 0,
                borderRightWidth: d === "outlined" || t.data.buttonGroupOrientation === "horizontal" ? null : 0,
                borderBottomWidth: d === "outlined" ? null : t.data.buttonGroupOrientation === "horizontal" ? 0 : null,
                borderColor: t.data.buttonGroupColor && s(t.data.buttonGroupColor, 0.2)
              },
              "& .MuiToggleButtonGroup-lastButton": {
                borderTopWidth: d === "outlined" ? null : t.data.buttonGroupOrientation === "horizontal" ? 0 : null,
                borderLeftWidth: d === "outlined" ? null : 0,
                borderRightWidth: d === "outlined" ? null : 0,
                borderBottomWidth: d === "outlined" ? null : 0,
                borderColor: t.data.buttonGroupColor && s(t.data.buttonGroupColor, 0.2),
                borderRadius: t.data.basePadding ? void 0 : 0
              }
            },
            children: C.map(({ value: c }, o) => {
              var _a;
              return p.jsx(pt, {
                value: c,
                sx: {
                  width: "100%",
                  height: "100%",
                  p: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.textColorActive || i.textColor || r.palette.primary.main,
                  "& .MuiTouchRipple-root": {
                    color: !t.data.onlyText && !t.data.onlyIcon ? l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main : t.data.onlyIcon ? l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main : l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.textColorActive || t.data[`textColor${o + 1}`] || t.data.textColor || i.textColor || r.palette.primary.main
                  },
                  background: String(e) === String(c) ? !t.data.onlyText && !t.data.onlyIcon ? s(l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main, 0.1) : t.data.onlyIcon ? s(l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main, 0.1) : s(l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.textColorActive || t.data[`textColor${o + 1}`] || t.data.textColor || i.textColor || r.palette.primary.main, 0.1) : "transparent",
                  "&.MuiToggleButton-root.Mui-selected": {
                    background: !t.data.onlyText && !t.data.onlyIcon ? s(l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main, 0.1) : t.data.onlyIcon ? s(l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main, 0.1) : s(l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.textColorActive || t.data[`textColor${o + 1}`] || t.data.textColor || i.textColor || r.palette.primary.main, 0.1)
                  },
                  "&:hover": {
                    filter: l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.iconHoverActive && `brightness(${t.data.iconHoverActive}%)` || t.data[`iconHover${o + 1}`] && `brightness(${t.data[`iconHover${o + 1}`]}%)` || i.iconHover && `brightness(${i.iconHover || "100%"})`,
                    background: !t.data.onlyText && !t.data.onlyIcon ? s(l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main, 0.1) : t.data.onlyIcon ? s(l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main, 0.1) : s(l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.textColorActive || t.data[`textColor${o + 1}`] || t.data.textColor || i.textColor || r.palette.primary.main, 0.1)
                  }
                },
                onClick: () => B(c),
                children: p.jsxs(A, {
                  sx: {
                    width: "100%",
                    height: "100%",
                    p: 0.5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center"
                  },
                  children: [
                    !t.data.onlyText && (l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && (t.data.iconActive || t.data.iconSmallActive) || t.data[`icon${o + 1}`] || t.data[`iconSmall${o + 1}`] || i.icon) && p.jsx(A, {
                      sx: {
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: p.jsx(lt, {
                        src: (() => {
                          const $ = l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && (t.data.iconActive || t.data.iconSmallActive) || t.data[`icon${o + 1}`] || t.data[`iconSmall${o + 1}`] || i.icon;
                          return typeof $ == "string" ? $ : typeof $ == "number" ? $.toString() : void 0;
                        })(),
                        style: {
                          position: "relative",
                          left: l === o + 1 && !!t.data.iconXOffsetActive && t.data.iconXOffsetActive !== "0px" && `${t.data.iconXOffsetActive}` || !!t.data[`iconXOffset${o + 1}`] && t.data[`iconXOffset${o + 1}`] !== "0px" && `${t.data[`iconXOffset${o + 1}`]}` || "0px",
                          bottom: l === o + 1 && !!t.data.iconYOffsetActive && t.data.iconYOffsetActive !== "0px" && `${t.data.iconYOffsetActive}` || !!t.data[`iconYOffset${o + 1}`] && t.data[`iconYOffset${o + 1}`] !== "0px" && `${t.data[`iconYOffset${o + 1}`]}` || "0px",
                          objectFit: "contain",
                          width: l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && typeof t.data.iconSizeActive == "number" && `calc(100% * ${t.data.iconSizeActive} / 100)` || typeof t.data[`iconSize${o + 1}`] == "number" && `calc(100% * ${t.data[`iconSize${o + 1}`]} / 100)` || typeof t.data.iconSize == "number" && `calc(100% * ${t.data.iconSize} / 100)` || "100%",
                          height: l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && typeof t.data.iconSizeActive == "number" && `calc(100% * ${t.data.iconSizeActive} / 100)` || typeof t.data[`iconSize${o + 1}`] == "number" && `calc(100% * ${t.data[`iconSize${o + 1}`]} / 100)` || typeof t.data.iconSize == "number" && `calc(100% * ${t.data.iconSize} / 100)` || "100%",
                          ...tt(l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && (t.data.iconActive || t.data.iconSmallActive) || t.data[`icon${o + 1}`] || t.data[`iconSmall${o + 1}`] || i.icon, l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.buttonGroupColor || i.iconColor || r.palette.primary.main)
                        }
                      })
                    }),
                    !t.data.onlyIcon && p.jsx(A, {
                      sx: {
                        width: "100%",
                        pt: 0.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: p.jsx(ot, {
                        contentEditable: "false",
                        dangerouslySetInnerHTML: {
                          __html: l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.aliasActive || ((_a = t.data[`alias${o + 1}`]) == null ? void 0 : _a.replace(/(\r\n|\n|\r)/gm, "")) || t.data[`value${o + 1}`] && `${t.data[`value${o + 1}`]}${f == null ? void 0 : f.unit}` || ""
                        },
                        noWrap: true,
                        variant: "body2",
                        sx: {
                          textTransform: "none",
                          fontSize: l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && typeof t.data.valueSizeActive == "number" && `${t.data.valueSizeActive}%` || typeof t.data[`valueSize${o + 1}`] == "number" && `${t.data[`valueSize${o + 1}`]}%` || i.valueSize,
                          color: l === o + 1 && String(e) === String(t.data[`value${o + 1}`]) && t.data.textColorActive || t.data[`textColor${o + 1}`] || t.data.buttonGroupColor || i.textColor || r.palette.primary.main
                        }
                      })
                    })
                  ]
                })
              }, o);
            })
          })
        })
      ]
    });
  }
  F = class extends at {
    static getWidgetInfo() {
      return {
        id: "tplButtonGroupCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "ButtonGroupCollectionWidget",
        visWidgetLabel: "button_group_collection_widget",
        visOrder: 6,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...j()
            ]
          },
          {
            name: "buttonGroup",
            label: "button_group",
            fields: [
              ...et([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...rt(),
              ...Ct()
            ]
          },
          {
            name: "active",
            label: "group_active",
            fields: [
              ...j({
                groupName: "Active",
                allFields: false
              })
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...j({
                groupName: "",
                allFields: false
              })
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "100px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-button-group.png"
      };
    }
    getWidgetInfo() {
      return F.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, r) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const r = {
        id: t.id,
        refService: t.refService,
        style: t.style,
        widget: {
          data: this.state.rxData,
          style: this.state.rxStyle
        },
        setValue: this.setValue,
        setState: this.setState.bind(this),
        values: this.state.values,
        isSignalVisible: this.isSignalVisible.bind(this),
        getPropertyValue: this.getPropertyValue.bind(this),
        mode: this.props.context.themeType,
        socket: this.props.context.socket,
        theme: this.props.context.theme,
        wrappedContent: this.wrappedCollectionContent
      };
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, it(this.wrapContent(p.jsx($t, {})), r);
    }
  };
});
export {
  __tla,
  F as default
};
