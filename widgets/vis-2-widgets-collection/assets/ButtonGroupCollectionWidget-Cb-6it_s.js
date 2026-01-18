import { a as M, g as V, a1 as X, u as L, j as g, s as P, d as D, i as _, e as F, n as Y, m as N, o as $, _ as J, C as K, v as q, y as Q, O as Z, E as tt, G as et, w as k, A as j, $ as A, z as ot, T as at, H as nt, J as I, K as rt, __tla as __tla_0 } from "./useData-C785wdBl.js";
import { c as it, __tla as __tla_1 } from "./commonObjectFields-DEMuVNf8.js";
import { u as lt, d as st, __tla as __tla_2 } from "./useValueState-Bt_d7CjV.js";
import { v, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as dt, __tla as __tla_4 } from "./SafeImg-DRwdWI3G.js";
import { e as ut } from "./extractColorFromValue-BwqGCJvl.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let E;
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
  })()
]).then(async () => {
  function ct(t) {
    return v.Children.toArray(t).filter((e) => v.isValidElement(e));
  }
  function pt(t) {
    return V("MuiToggleButton", t);
  }
  const O = M("MuiToggleButton", [
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
  ]), U = v.createContext({}), H = v.createContext(void 0);
  function gt(t, e) {
    return e === void 0 || t === void 0 ? false : Array.isArray(e) ? e.includes(t) : t === e;
  }
  const ft = (t) => {
    const { classes: e, fullWidth: r, selected: C, disabled: s, size: h, color: z } = t, y = {
      root: [
        "root",
        C && "selected",
        s && "disabled",
        r && "fullWidth",
        `size${_(h)}`,
        z
      ]
    };
    return F(y, pt, e);
  }, bt = P(Y, {
    name: "MuiToggleButton",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: r } = t;
      return [
        e.root,
        e[`size${_(r.size)}`]
      ];
    }
  })(N(({ theme: t }) => ({
    ...t.typography.button,
    borderRadius: (t.vars || t).shape.borderRadius,
    padding: 11,
    border: `1px solid ${(t.vars || t).palette.divider}`,
    color: (t.vars || t).palette.action.active,
    [`&.${O.disabled}`]: {
      color: (t.vars || t).palette.action.disabled,
      border: `1px solid ${(t.vars || t).palette.action.disabledBackground}`
    },
    "&:hover": {
      textDecoration: "none",
      backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})` : $(t.palette.text.primary, t.palette.action.hoverOpacity),
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
          [`&.${O.selected}`]: {
            color: (t.vars || t).palette.text.primary,
            backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})` : $(t.palette.text.primary, t.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : $(t.palette.text.primary, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})` : $(t.palette.text.primary, t.palette.action.selectedOpacity)
              }
            }
          }
        }
      },
      ...Object.entries(t.palette).filter(J()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${O.selected}`]: {
            color: (t.vars || t).palette[e].main,
            backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})` : $(t.palette[e].main, t.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : $(t.palette[e].main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})` : $(t.palette[e].main, t.palette.action.selectedOpacity)
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
          fontSize: t.typography.pxToRem(13)
        }
      },
      {
        props: {
          size: "large"
        },
        style: {
          padding: 15,
          fontSize: t.typography.pxToRem(15)
        }
      }
    ]
  }))), vt = v.forwardRef(function(e, r) {
    const { value: C, ...s } = v.useContext(U), h = v.useContext(H), z = X({
      ...s,
      selected: gt(e.value, C)
    }, e), y = L({
      props: z,
      name: "MuiToggleButton"
    }), { children: R, className: G, color: m = "standard", disabled: T = false, disableFocusRipple: S = false, fullWidth: i = false, onChange: d, onClick: u, selected: a, size: o = "medium", value: c, ...l } = y, f = {
      ...y,
      color: m,
      disabled: T,
      disableFocusRipple: S,
      fullWidth: i,
      size: o
    }, x = ft(f), B = (p) => {
      u && (u(p, c), p.defaultPrevented) || d && d(p, c);
    }, b = h || "";
    return g.jsx(bt, {
      className: D(s.className, x.root, G, b),
      disabled: T,
      focusRipple: !S,
      ref: r,
      onClick: B,
      onChange: d,
      value: c,
      ownerState: f,
      "aria-pressed": a,
      ...l,
      children: R
    });
  });
  function Ct(t) {
    return V("MuiToggleButtonGroup", t);
  }
  const n = M("MuiToggleButtonGroup", [
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
  ]), xt = (t) => {
    const { classes: e, orientation: r, fullWidth: C, disabled: s } = t, h = {
      root: [
        "root",
        r,
        C && "fullWidth"
      ],
      grouped: [
        "grouped",
        `grouped${_(r)}`,
        s && "disabled"
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
    return F(h, Ct, e);
  }, yt = P("div", {
    name: "MuiToggleButtonGroup",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: r } = t;
      return [
        {
          [`& .${n.grouped}`]: e.grouped
        },
        {
          [`& .${n.grouped}`]: e[`grouped${_(r.orientation)}`]
        },
        {
          [`& .${n.firstButton}`]: e.firstButton
        },
        {
          [`& .${n.lastButton}`]: e.lastButton
        },
        {
          [`& .${n.middleButton}`]: e.middleButton
        },
        e.root,
        r.orientation === "vertical" && e.vertical,
        r.fullWidth && e.fullWidth
      ];
    }
  })(N(({ theme: t }) => ({
    display: "inline-flex",
    borderRadius: (t.vars || t).shape.borderRadius,
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
          [`& .${n.lastButton}.${O.disabled},& .${n.middleButton}.${O.disabled}`]: {
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
          [`& .${n.lastButton}.${O.disabled},& .${n.middleButton}.${O.disabled}`]: {
            borderLeft: "1px solid transparent"
          }
        }
      }
    ]
  }))), mt = v.forwardRef(function(e, r) {
    const C = L({
      props: e,
      name: "MuiToggleButtonGroup"
    }), { children: s, className: h, color: z = "standard", disabled: y = false, exclusive: R = false, fullWidth: G = false, onChange: m, orientation: T = "horizontal", size: S = "medium", value: i, ...d } = C, u = {
      ...C,
      disabled: y,
      fullWidth: G,
      orientation: T,
      size: S
    }, a = xt(u), o = v.useCallback((b, p) => {
      if (!m) return;
      const W = i && i.indexOf(p);
      let w;
      i && W >= 0 ? (w = i.slice(), w.splice(W, 1)) : w = i ? i.concat(p) : [
        p
      ], m(b, w);
    }, [
      m,
      i
    ]), c = v.useCallback((b, p) => {
      m && m(b, i === p ? null : p);
    }, [
      m,
      i
    ]), l = v.useMemo(() => ({
      className: a.grouped,
      onChange: R ? c : o,
      value: i,
      size: S,
      fullWidth: G,
      color: z,
      disabled: y
    }), [
      a.grouped,
      R,
      c,
      o,
      i,
      S,
      G,
      z,
      y
    ]), f = ct(s), x = f.length, B = (b) => {
      const p = b === 0, W = b === x - 1;
      return p && W ? "" : p ? a.firstButton : W ? a.lastButton : a.middleButton;
    };
    return g.jsx(yt, {
      role: "group",
      className: D(a.root, h),
      ref: r,
      ownerState: u,
      ...d,
      children: g.jsx(U.Provider, {
        value: l,
        children: f.map((b, p) => g.jsx(H.Provider, {
          value: B(p),
          children: b
        }, p))
      })
    });
  }), ht = () => [
    {
      type: "custom",
      component: () => g.jsx(K, {})
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
  function Bt() {
    const t = v.useContext(q), { widget: e, theme: r } = t, C = e.data.oidObject, { data: s, states: h, activeIndex: z } = Q("oid"), { value: y, updateValue: R } = lt("oid"), G = e.data.buttonGroupVariant, m = e.data.buttonGroupOrientation, T = C == null ? void 0 : C.type, S = T === "boolean" || T === "number" || T === "string" || T === "mixed", i = m === "vertical", d = G === "outlined", u = v.useMemo(() => ({
      getBackgroundColor: (a, o) => a && e.data.backgroundActive || o.backgroundActive,
      getIcon: (a, o) => a ? e.data.iconActive || e.data.iconSmallActive || o.icon || s.icon : o.icon || s.icon,
      getIconColor: (a, o) => a ? e.data.iconColorActive || o.iconColor || e.data.buttonGroupColor || s.iconColor || r.palette.primary.main : o.iconColor || e.data.buttonGroupColor || s.iconColor || r.palette.primary.main,
      getTextColor: (a, o) => a ? e.data.textColorActive || o.textColor || e.data.buttonGroupColor || s.textColor || r.palette.primary.main : o.textColor || e.data.buttonGroupColor || s.textColor || r.palette.primary.main,
      getIconSize: (a, o) => `calc(100% * ${a && typeof e.data.iconSizeActive == "number" ? e.data.iconSizeActive : typeof o.iconSize == "number" ? o.iconSize : typeof e.data.iconSize == "number" ? e.data.iconSize : 100} / 100)`,
      getIconOffset: (a, o, c) => {
        const l = c === "X" ? "iconXOffset" : "iconYOffset", f = c === "X" ? "iconXOffsetActive" : "iconYOffsetActive", x = a ? e.data[f] : void 0, B = o[l];
        return x && x !== "0px" ? x : B && B !== "0px" ? B : "0px";
      },
      getTextContent: (a, o, c) => {
        var _a;
        return a && e.data.aliasActive ? e.data.aliasActive : ((_a = o.alias) == null ? void 0 : _a.replace(/(\r\n|\n|\r)/gm, "")) || c && `${c}${C == null ? void 0 : C.unit}` || "";
      },
      getTextSize: (a, o) => a && typeof e.data.valueSizeActive == "number" ? Z(e.data.valueSizeActive) : typeof o.valueSize == "string" ? `${o.valueSize}` : s.valueSize
    }), [
      e.data,
      s,
      C,
      r.palette.primary.main
    ]);
    return g.jsxs(tt, {
      isValidType: S,
      data: s,
      oidValue: y,
      bgActive: false,
      children: [
        g.jsx(et, {
          data: s,
          widget: e
        }),
        g.jsx(k, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex"
          },
          children: g.jsx(mt, {
            exclusive: true,
            value: String(y),
            disabled: !S,
            fullWidth: true,
            orientation: m,
            sx: {
              display: "flex",
              flexDirection: i ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: i ? "100%" : "auto",
              maxHeight: i ? "100%" : "none",
              ...i && {
                "& .MuiToggleButton-root": {
                  flex: "1 1 0",
                  minHeight: 0,
                  maxHeight: `calc(100% / ${h.length})`
                }
              },
              "& .MuiToggleButtonGroup-firstButton": {
                borderTopWidth: d ? null : 0,
                borderLeftWidth: d ? null : 0,
                borderRightWidth: d ? null : i ? 0 : null,
                borderBottomWidth: d || i ? null : 0,
                borderColor: e.data.buttonGroupColor && $(e.data.buttonGroupColor, 0.2),
                borderRadius: e.data.basePadding ? void 0 : 0
              },
              "& .MuiToggleButtonGroup-middleButton": {
                borderTopWidth: d || i ? null : 0,
                borderLeftWidth: d ? null : 0,
                borderRightWidth: d ? null : 0,
                borderBottomWidth: d || i ? null : 0,
                borderColor: e.data.buttonGroupColor && $(e.data.buttonGroupColor, 0.2)
              },
              "& .MuiToggleButtonGroup-lastButton": {
                borderTopWidth: d || i ? null : 0,
                borderLeftWidth: d ? null : 0,
                borderRightWidth: d ? null : 0,
                borderBottomWidth: d ? null : 0,
                borderColor: e.data.buttonGroupColor && $(e.data.buttonGroupColor, 0.2),
                borderRadius: e.data.basePadding ? void 0 : 0
              }
            },
            children: h.map(({ value: a, ...o }, c) => {
              const l = z === c + 1, f = u.getBackgroundColor(l, o), x = j(f), B = ut(f), b = u.getIcon(l, o);
              return g.jsx(vt, {
                value: a,
                onClick: () => R(a),
                sx: {
                  width: "100%",
                  height: "100%",
                  p: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&.MuiToggleButton-root": {
                    filter: l && x ? "opacity(80%)" : void 0,
                    background: l ? f : o.backgroundActive,
                    "&:hover": {
                      filter: x ? "opacity(80%)" : void 0,
                      background: x ? void 0 : B && f ? A(f, 0.5) : void 0
                    },
                    "&.Mui-selected": {
                      background: x ? void 0 : B && f ? A(f, 0.3) : void 0
                    }
                  }
                },
                children: g.jsxs(k, {
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
                    !e.data.onlyText && b && g.jsx(k, {
                      sx: {
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: g.jsx(dt, {
                        src: b,
                        style: {
                          position: "relative",
                          left: u.getIconOffset(l, o, "X"),
                          bottom: u.getIconOffset(l, o, "Y"),
                          objectFit: "contain",
                          width: u.getIconSize(l, o),
                          height: u.getIconSize(l, o),
                          ...ot(b, u.getIconColor(l, o), o.forceColorMask)
                        }
                      })
                    }),
                    !e.data.onlyIcon && g.jsx(k, {
                      sx: {
                        width: "100%",
                        pt: 0.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: g.jsx(at, {
                        contentEditable: "false",
                        dangerouslySetInnerHTML: {
                          __html: u.getTextContent(l, o, a)
                        },
                        noWrap: true,
                        variant: "body2",
                        sx: {
                          textTransform: "none",
                          fontSize: u.getTextSize(l, o),
                          background: j(u.getTextColor(l, o)),
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: j(u.getTextColor(l, o)) ? "transparent" : u.getTextColor(l, o)
                        }
                      })
                    })
                  ]
                })
              }, c);
            })
          })
        })
      ]
    });
  }
  E = class extends nt {
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
              ...I()
            ]
          },
          {
            name: "buttonGroup",
            label: "button_group",
            fields: [
              ...it([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...st(),
              ...ht()
            ]
          },
          {
            name: "active",
            label: "group_active",
            fields: [
              ...I({
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
              ...I({
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
      return E.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(e, r) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const r = {
        id: e.id,
        refService: e.refService,
        style: e.style,
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, rt(this.wrapContent(g.jsx(Bt, {})), r);
    }
  };
});
export {
  __tla,
  E as default
};
