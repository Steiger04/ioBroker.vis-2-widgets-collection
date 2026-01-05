import { a as I, g as k, N as U, u as M, j as p, s as V, d as L, i as R, e as P, n as X, m as N, o as d, O as Y, C as E, q, y as J, x as K, v as Q, A as Z, E as tt, w as A, z as ot, T as at, G as et, H as j, J as rt, K as lt, L as it, __tla as __tla_0 } from "./commonFields-B5KdVoLe.js";
import { v, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as nt, __tla as __tla_2 } from "./SafeImg-Cv2sRx0w.js";
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
  function st(a) {
    return v.Children.toArray(a).filter((t) => v.isValidElement(t));
  }
  function dt(a) {
    return k("MuiToggleButton", a);
  }
  const B = I("MuiToggleButton", [
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
  ]), D = v.createContext({}), H = v.createContext(void 0);
  function ct(a, t) {
    return t === void 0 || a === void 0 ? false : Array.isArray(t) ? t.includes(a) : a === t;
  }
  const ut = (a) => {
    const { classes: t, fullWidth: e, selected: b, disabled: r, size: f, color: l } = a, C = {
      root: [
        "root",
        b && "selected",
        r && "disabled",
        e && "fullWidth",
        `size${R(f)}`,
        l
      ]
    };
    return P(C, dt, t);
  }, pt = V(X, {
    name: "MuiToggleButton",
    slot: "Root",
    overridesResolver: (a, t) => {
      const { ownerState: e } = a;
      return [
        t.root,
        t[`size${R(e.size)}`]
      ];
    }
  })(N(({ theme: a }) => ({
    ...a.typography.button,
    borderRadius: (a.vars || a).shape.borderRadius,
    padding: 11,
    border: `1px solid ${(a.vars || a).palette.divider}`,
    color: (a.vars || a).palette.action.active,
    [`&.${B.disabled}`]: {
      color: (a.vars || a).palette.action.disabled,
      border: `1px solid ${(a.vars || a).palette.action.disabledBackground}`
    },
    "&:hover": {
      textDecoration: "none",
      backgroundColor: a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})` : d(a.palette.text.primary, a.palette.action.hoverOpacity),
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
          [`&.${B.selected}`]: {
            color: (a.vars || a).palette.text.primary,
            backgroundColor: a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.selectedOpacity})` : d(a.palette.text.primary, a.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))` : d(a.palette.text.primary, a.palette.action.selectedOpacity + a.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.selectedOpacity})` : d(a.palette.text.primary, a.palette.action.selectedOpacity)
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
          [`&.${B.selected}`]: {
            color: (a.vars || a).palette[t].main,
            backgroundColor: a.vars ? `rgba(${a.vars.palette[t].mainChannel} / ${a.vars.palette.action.selectedOpacity})` : d(a.palette[t].main, a.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: a.vars ? `rgba(${a.vars.palette[t].mainChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))` : d(a.palette[t].main, a.palette.action.selectedOpacity + a.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: a.vars ? `rgba(${a.vars.palette[t].mainChannel} / ${a.vars.palette.action.selectedOpacity})` : d(a.palette[t].main, a.palette.action.selectedOpacity)
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
  }))), gt = v.forwardRef(function(t, e) {
    const { value: b, ...r } = v.useContext(D), f = v.useContext(H), l = U({
      ...r,
      selected: ct(t.value, b)
    }, t), C = M({
      props: l,
      name: "MuiToggleButton"
    }), { children: T, className: i, color: y = "standard", disabled: c = false, disableFocusRipple: g = false, fullWidth: s = false, onChange: S, onClick: m, selected: o, size: h = "medium", value: x, ...W } = C, O = {
      ...C,
      color: y,
      disabled: c,
      disableFocusRipple: g,
      fullWidth: s,
      size: h
    }, w = ut(O), _ = (u) => {
      m && (m(u, x), u.defaultPrevented) || S && S(u, x);
    }, $ = f || "";
    return p.jsx(pt, {
      className: L(r.className, w.root, i, $),
      disabled: c,
      focusRipple: !g,
      ref: e,
      onClick: _,
      onChange: S,
      value: x,
      ownerState: O,
      "aria-pressed": o,
      ...W,
      children: T
    });
  });
  function vt(a) {
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
  ]), bt = (a) => {
    const { classes: t, orientation: e, fullWidth: b, disabled: r } = a, f = {
      root: [
        "root",
        e,
        b && "fullWidth"
      ],
      grouped: [
        "grouped",
        `grouped${R(e)}`,
        r && "disabled"
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
    return P(f, vt, t);
  }, ft = V("div", {
    name: "MuiToggleButtonGroup",
    slot: "Root",
    overridesResolver: (a, t) => {
      const { ownerState: e } = a;
      return [
        {
          [`& .${n.grouped}`]: t.grouped
        },
        {
          [`& .${n.grouped}`]: t[`grouped${R(e.orientation)}`]
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
        e.orientation === "vertical" && t.vertical,
        e.fullWidth && t.fullWidth
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
          [`& .${n.lastButton}.${B.disabled},& .${n.middleButton}.${B.disabled}`]: {
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
          [`& .${n.lastButton}.${B.disabled},& .${n.middleButton}.${B.disabled}`]: {
            borderLeft: "1px solid transparent"
          }
        }
      }
    ]
  }))), Ct = v.forwardRef(function(t, e) {
    const b = M({
      props: t,
      name: "MuiToggleButtonGroup"
    }), { children: r, className: f, color: l = "standard", disabled: C = false, exclusive: T = false, fullWidth: i = false, onChange: y, orientation: c = "horizontal", size: g = "medium", value: s, ...S } = b, m = {
      ...b,
      disabled: C,
      fullWidth: i,
      orientation: c,
      size: g
    }, o = bt(m), h = v.useCallback(($, u) => {
      if (!y) return;
      const z = s && s.indexOf(u);
      let G;
      s && z >= 0 ? (G = s.slice(), G.splice(z, 1)) : G = s ? s.concat(u) : [
        u
      ], y($, G);
    }, [
      y,
      s
    ]), x = v.useCallback(($, u) => {
      y && y($, s === u ? null : u);
    }, [
      y,
      s
    ]), W = v.useMemo(() => ({
      className: o.grouped,
      onChange: T ? x : h,
      value: s,
      size: g,
      fullWidth: i,
      color: l,
      disabled: C
    }), [
      o.grouped,
      T,
      x,
      h,
      s,
      g,
      i,
      l,
      C
    ]), O = st(r), w = O.length, _ = ($) => {
      const u = $ === 0, z = $ === w - 1;
      return u && z ? "" : u ? o.firstButton : z ? o.lastButton : o.middleButton;
    };
    return p.jsx(ft, {
      role: "group",
      className: L(o.root, f),
      ref: e,
      ownerState: m,
      ...S,
      children: p.jsx(D.Provider, {
        value: W,
        children: O.map(($, u) => p.jsx(H.Provider, {
          value: _(u),
          children: $
        }, u))
      })
    });
  }), yt = () => [
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
    const a = v.useContext(q), { widget: t, theme: e } = a, b = t.data.oidObject, { data: r, states: f, activeIndex: l } = J("oid"), { fontStyles: C, textStyles: T } = K(t.style), { value: i, updateValue: y } = Q("oid"), c = t.data.buttonGroupVariant, g = t.data.buttonGroupOrientation, s = b == null ? void 0 : b.type, S = s === "boolean" || s === "number" || s === "string" || s === "mixed";
    return p.jsxs(Z, {
      isValidType: S,
      data: r,
      oidValue: i,
      bgActive: false,
      children: [
        p.jsx(tt, {
          data: r,
          widget: t
        }),
        p.jsx(A, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex"
          },
          children: p.jsx(Ct, {
            exclusive: true,
            value: i,
            disabled: s !== "number" && s !== "string" && s !== "boolean" && s !== "mixed",
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
                  maxHeight: `calc(100% / ${f.length})`
                }
              },
              "& .MuiToggleButtonGroup-firstButton": {
                borderTopWidth: c === "outlined" ? null : 0,
                borderLeftWidth: c === "outlined" ? null : 0,
                borderRightWidth: c === "outlined" || t.data.buttonGroupOrientation === "horizontal" ? null : 0,
                borderBottomWidth: c === "outlined" ? null : t.data.buttonGroupOrientation === "horizontal" ? 0 : null,
                borderColor: t.data.buttonGroupColor && d(t.data.buttonGroupColor, 0.2),
                borderRadius: t.data.basePadding ? void 0 : 0
              },
              "& .MuiToggleButtonGroup-middleButton": {
                borderTopWidth: c === "outlined" ? null : t.data.buttonGroupOrientation === "horizontal" ? 0 : null,
                borderLeftWidth: c === "outlined" || t.data.buttonGroupOrientation === "horizontal" ? null : 0,
                borderRightWidth: c === "outlined" || t.data.buttonGroupOrientation === "horizontal" ? null : 0,
                borderBottomWidth: c === "outlined" ? null : t.data.buttonGroupOrientation === "horizontal" ? 0 : null,
                borderColor: t.data.buttonGroupColor && d(t.data.buttonGroupColor, 0.2)
              },
              "& .MuiToggleButtonGroup-lastButton": {
                borderTopWidth: c === "outlined" ? null : t.data.buttonGroupOrientation === "horizontal" ? 0 : null,
                borderLeftWidth: c === "outlined" ? null : 0,
                borderRightWidth: c === "outlined" ? null : 0,
                borderBottomWidth: c === "outlined" ? null : 0,
                borderColor: t.data.buttonGroupColor && d(t.data.buttonGroupColor, 0.2),
                borderRadius: t.data.basePadding ? void 0 : 0
              }
            },
            children: f.map(({ value: m }, o) => {
              var _a;
              return p.jsx(gt, {
                value: m,
                sx: {
                  width: "100%",
                  height: "100%",
                  p: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.textColorActive || r.textColor || e.palette.primary.main,
                  "& .MuiTouchRipple-root": {
                    color: !t.data.onlyText && !t.data.onlyIcon ? l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || r.iconColor || e.palette.primary.main : t.data.onlyIcon ? l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || r.iconColor || e.palette.primary.main : l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.textColorActive || t.data[`textColor${o + 1}`] || t.data.textColor || r.textColor || e.palette.primary.main
                  },
                  background: String(i) === String(m) ? !t.data.onlyText && !t.data.onlyIcon ? d(l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || r.iconColor || e.palette.primary.main, 0.1) : t.data.onlyIcon ? d(l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || r.iconColor || e.palette.primary.main, 0.1) : d(l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.textColorActive || t.data[`textColor${o + 1}`] || t.data.textColor || r.textColor || e.palette.primary.main, 0.1) : "transparent",
                  "&.MuiToggleButton-root.Mui-selected": {
                    background: !t.data.onlyText && !t.data.onlyIcon ? d(l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || r.iconColor || e.palette.primary.main, 0.1) : t.data.onlyIcon ? d(l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || r.iconColor || e.palette.primary.main, 0.1) : d(l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.textColorActive || t.data[`textColor${o + 1}`] || t.data.textColor || r.textColor || e.palette.primary.main, 0.1)
                  },
                  "&:hover": {
                    filter: l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.iconHoverActive && `brightness(${t.data.iconHoverActive}%)` || t.data[`iconHover${o + 1}`] && `brightness(${t.data[`iconHover${o + 1}`]}%)` || r.iconHover && `brightness(${r.iconHover || "100%"})`,
                    background: !t.data.onlyText && !t.data.onlyIcon ? d(l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || r.iconColor || e.palette.primary.main, 0.1) : t.data.onlyIcon ? d(l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || r.iconColor || e.palette.primary.main, 0.1) : d(l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.textColorActive || t.data[`textColor${o + 1}`] || t.data.textColor || r.textColor || e.palette.primary.main, 0.1)
                  }
                },
                onClick: () => y(m),
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
                    !t.data.onlyText && (l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && (t.data.iconActive || t.data.iconSmallActive) || t.data[`icon${o + 1}`] || t.data[`iconSmall${o + 1}`] || r.icon) && p.jsx(A, {
                      sx: {
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: p.jsx(nt, {
                        src: (() => {
                          const h = l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && (t.data.iconActive || t.data.iconSmallActive) || t.data[`icon${o + 1}`] || t.data[`iconSmall${o + 1}`] || r.icon;
                          return typeof h == "string" ? h : typeof h == "number" ? h.toString() : void 0;
                        })(),
                        style: {
                          position: "relative",
                          left: l === o + 1 && !!t.data.iconXOffsetActive && t.data.iconXOffsetActive !== "0px" && `${t.data.iconXOffsetActive}` || !!t.data[`iconXOffset${o + 1}`] && t.data[`iconXOffset${o + 1}`] !== "0px" && `${t.data[`iconXOffset${o + 1}`]}` || "0px",
                          bottom: l === o + 1 && !!t.data.iconYOffsetActive && t.data.iconYOffsetActive !== "0px" && `${t.data.iconYOffsetActive}` || !!t.data[`iconYOffset${o + 1}`] && t.data[`iconYOffset${o + 1}`] !== "0px" && `${t.data[`iconYOffset${o + 1}`]}` || "0px",
                          objectFit: "contain",
                          width: l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && typeof t.data.iconSizeActive == "number" && `calc(100% * ${t.data.iconSizeActive} / 100)` || typeof t.data[`iconSize${o + 1}`] == "number" && `calc(100% * ${t.data[`iconSize${o + 1}`]} / 100)` || typeof t.data.iconSize == "number" && `calc(100% * ${t.data.iconSize} / 100)` || "100%",
                          height: l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && typeof t.data.iconSizeActive == "number" && `calc(100% * ${t.data.iconSizeActive} / 100)` || typeof t.data[`iconSize${o + 1}`] == "number" && `calc(100% * ${t.data[`iconSize${o + 1}`]} / 100)` || typeof t.data.iconSize == "number" && `calc(100% * ${t.data.iconSize} / 100)` || "100%",
                          ...ot(l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && (t.data.iconActive || t.data.iconSmallActive) || t.data[`icon${o + 1}`] || t.data[`iconSmall${o + 1}`] || r.icon, l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.buttonGroupColor || r.iconColor || e.palette.primary.main)
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
                      children: p.jsx(at, {
                        contentEditable: "false",
                        dangerouslySetInnerHTML: {
                          __html: l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.aliasActive || ((_a = t.data[`alias${o + 1}`]) == null ? void 0 : _a.replace(/(\r\n|\n|\r)/gm, "")) || t.data[`value${o + 1}`] && `${t.data[`value${o + 1}`]}${b == null ? void 0 : b.unit}` || ""
                        },
                        noWrap: true,
                        variant: "body2",
                        sx: {
                          ...C,
                          ...T,
                          textTransform: "none",
                          fontSize: l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && typeof t.data.valueSizeActive == "number" && `${t.data.valueSizeActive}%` || typeof t.data[`valueSize${o + 1}`] == "number" && `${t.data[`valueSize${o + 1}`]}%` || r.valueSize,
                          color: l === o + 1 && String(i) === String(t.data[`value${o + 1}`]) && t.data.textColorActive || t.data[`textColor${o + 1}`] || t.data.buttonGroupColor || r.textColor || e.palette.primary.main
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
  F = class extends et {
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
              ...rt([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...lt(),
              ...yt()
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
    onStateUpdated(t, e) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const e = {
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, it(this.wrapContent(p.jsx($t, {})), e);
    }
  };
});
export {
  __tla,
  F as default
};
