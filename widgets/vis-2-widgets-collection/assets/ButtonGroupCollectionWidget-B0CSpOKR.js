import { a as M, g as V, a2 as X, u as P, j as c, s as L, d as F, i as _, e as D, n as Y, m as N, o as $, $ as J, C as K, K as Q, v as q, a3 as Z, O as tt, A as et, E as ot, w, z as j, Q as at, a0 as A, y as nt, T as rt, G as it, H as I, J as lt, __tla as __tla_0 } from "./useData-2dnP1q4b.js";
import { c as st, __tla as __tla_1 } from "./commonObjectFields-DPT5kyDR.js";
import { u as dt, d as ut, __tla as __tla_2 } from "./useValueState-CcNNBxyO.js";
import { v as C, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as ct, __tla as __tla_4 } from "./SafeImg-BzmzM1r9.js";
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
  function pt(t) {
    return C.Children.toArray(t).filter((e) => C.isValidElement(e));
  }
  function gt(t) {
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
  ]), U = C.createContext({}), H = C.createContext(void 0);
  function ft(t, e) {
    return e === void 0 || t === void 0 ? false : Array.isArray(e) ? e.includes(t) : t === e;
  }
  const bt = (t) => {
    const { classes: e, fullWidth: n, selected: b, disabled: s, size: h, color: z } = t, y = {
      root: [
        "root",
        b && "selected",
        s && "disabled",
        n && "fullWidth",
        `size${_(h)}`,
        z
      ]
    };
    return D(y, gt, e);
  }, vt = L(Y, {
    name: "MuiToggleButton",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: n } = t;
      return [
        e.root,
        e[`size${_(n.size)}`]
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
  }))), Ct = C.forwardRef(function(e, n) {
    const { value: b, ...s } = C.useContext(U), h = C.useContext(H), z = X({
      ...s,
      selected: ft(e.value, b)
    }, e), y = P({
      props: z,
      name: "MuiToggleButton"
    }), { children: R, className: G, color: m = "standard", disabled: T = false, disableFocusRipple: S = false, fullWidth: i = false, onChange: d, onClick: u, selected: a, size: o = "medium", value: p, ...l } = y, f = {
      ...y,
      color: m,
      disabled: T,
      disableFocusRipple: S,
      fullWidth: i,
      size: o
    }, x = bt(f), B = (g) => {
      u && (u(g, p), g.defaultPrevented) || d && d(g, p);
    }, v = h || "";
    return c.jsx(vt, {
      className: F(s.className, x.root, G, v),
      disabled: T,
      focusRipple: !S,
      ref: n,
      onClick: B,
      onChange: d,
      value: p,
      ownerState: f,
      "aria-pressed": a,
      ...l,
      children: R
    });
  });
  function xt(t) {
    return V("MuiToggleButtonGroup", t);
  }
  const r = M("MuiToggleButtonGroup", [
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
  ]), yt = (t) => {
    const { classes: e, orientation: n, fullWidth: b, disabled: s } = t, h = {
      root: [
        "root",
        n,
        b && "fullWidth"
      ],
      grouped: [
        "grouped",
        `grouped${_(n)}`,
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
    return D(h, xt, e);
  }, mt = L("div", {
    name: "MuiToggleButtonGroup",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: n } = t;
      return [
        {
          [`& .${r.grouped}`]: e.grouped
        },
        {
          [`& .${r.grouped}`]: e[`grouped${_(n.orientation)}`]
        },
        {
          [`& .${r.firstButton}`]: e.firstButton
        },
        {
          [`& .${r.lastButton}`]: e.lastButton
        },
        {
          [`& .${r.middleButton}`]: e.middleButton
        },
        e.root,
        n.orientation === "vertical" && e.vertical,
        n.fullWidth && e.fullWidth
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
          [`& .${r.grouped}`]: {
            [`&.${r.selected} + .${r.grouped}.${r.selected}`]: {
              borderTop: 0,
              marginTop: 0
            }
          },
          [`& .${r.firstButton},& .${r.middleButton}`]: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          },
          [`& .${r.lastButton},& .${r.middleButton}`]: {
            marginTop: -1,
            borderTop: "1px solid transparent",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
          },
          [`& .${r.lastButton}.${O.disabled},& .${r.middleButton}.${O.disabled}`]: {
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
          [`& .${r.grouped}`]: {
            [`&.${r.selected} + .${r.grouped}.${r.selected}`]: {
              borderLeft: 0,
              marginLeft: 0
            }
          },
          [`& .${r.firstButton},& .${r.middleButton}`]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          },
          [`& .${r.lastButton},& .${r.middleButton}`]: {
            marginLeft: -1,
            borderLeft: "1px solid transparent",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          },
          [`& .${r.lastButton}.${O.disabled},& .${r.middleButton}.${O.disabled}`]: {
            borderLeft: "1px solid transparent"
          }
        }
      }
    ]
  }))), ht = C.forwardRef(function(e, n) {
    const b = P({
      props: e,
      name: "MuiToggleButtonGroup"
    }), { children: s, className: h, color: z = "standard", disabled: y = false, exclusive: R = false, fullWidth: G = false, onChange: m, orientation: T = "horizontal", size: S = "medium", value: i, ...d } = b, u = {
      ...b,
      disabled: y,
      fullWidth: G,
      orientation: T,
      size: S
    }, a = yt(u), o = C.useCallback((v, g) => {
      if (!m) return;
      const W = i && i.indexOf(g);
      let k;
      i && W >= 0 ? (k = i.slice(), k.splice(W, 1)) : k = i ? i.concat(g) : [
        g
      ], m(v, k);
    }, [
      m,
      i
    ]), p = C.useCallback((v, g) => {
      m && m(v, i === g ? null : g);
    }, [
      m,
      i
    ]), l = C.useMemo(() => ({
      className: a.grouped,
      onChange: R ? p : o,
      value: i,
      size: S,
      fullWidth: G,
      color: z,
      disabled: y
    }), [
      a.grouped,
      R,
      p,
      o,
      i,
      S,
      G,
      z,
      y
    ]), f = pt(s), x = f.length, B = (v) => {
      const g = v === 0, W = v === x - 1;
      return g && W ? "" : g ? a.firstButton : W ? a.lastButton : a.middleButton;
    };
    return c.jsx(mt, {
      role: "group",
      className: F(a.root, h),
      ref: n,
      ownerState: u,
      ...d,
      children: c.jsx(U.Provider, {
        value: l,
        children: f.map((v, g) => c.jsx(H.Provider, {
          value: B(g),
          children: v
        }, g))
      })
    });
  }), Bt = () => [
    {
      type: "custom",
      component: () => c.jsx(K, {})
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
      default: "",
      type: "custom",
      fallbackFields: [
        "textColor"
      ],
      component: (t, e, n, b) => c.jsx(Q, {
        field: t,
        data: e,
        onDataChange: n,
        props: b
      })
    }
  ];
  function $t() {
    const t = C.useContext(q), { widget: e, theme: n } = t, b = e.data.oidObject, { data: s, states: h, activeIndex: z } = Z("oid"), { value: y, updateValue: R } = dt("oid"), G = e.data.buttonGroupVariant, m = e.data.buttonGroupOrientation, T = b == null ? void 0 : b.type, S = T === "boolean" || T === "number" || T === "string" || T === "mixed", i = m === "vertical", d = G === "outlined", u = C.useMemo(() => ({
      getBackgroundColor: (a, o) => a && e.data.backgroundActive || o.backgroundActive,
      getIcon: (a, o) => a ? e.data.iconActive || e.data.iconSmallActive || o.icon || s.icon : o.icon || s.icon,
      getIconColor: (a, o) => a ? e.data.iconColorActive || o.iconColor || e.data.buttonGroupColor || s.iconColor || n.palette.primary.main : o.iconColor || e.data.buttonGroupColor || s.iconColor || n.palette.primary.main,
      getTextColor: (a, o) => a ? e.data.textColorActive || o.textColor || e.data.buttonGroupColor || s.textColor || n.palette.primary.main : o.textColor || e.data.buttonGroupColor || s.textColor || n.palette.primary.main,
      getIconSize: (a, o) => `calc(100% * ${a && typeof e.data.iconSizeActive == "number" ? e.data.iconSizeActive : typeof o.iconSize == "number" ? o.iconSize : typeof e.data.iconSize == "number" ? e.data.iconSize : 100} / 100)`,
      getIconOffset: (a, o, p) => {
        const l = p === "X" ? "iconXOffset" : "iconYOffset", f = p === "X" ? "iconXOffsetActive" : "iconYOffsetActive", x = a ? e.data[f] : void 0, B = o[l];
        return x && x !== "0px" ? x : B && B !== "0px" ? B : "0px";
      },
      getTextContent: (a, o, p) => {
        var _a;
        return a && e.data.aliasActive ? e.data.aliasActive : ((_a = o.alias) == null ? void 0 : _a.replace(/(\r\n|\n|\r)/gm, "")) || p && `${p}${b == null ? void 0 : b.unit}` || "";
      },
      getTextSize: (a, o) => a && typeof e.data.valueSizeActive == "number" ? tt(e.data.valueSizeActive) : typeof o.valueSize == "string" ? `${o.valueSize}` : s.valueSize
    }), [
      e.data,
      s,
      b,
      n.palette.primary.main
    ]);
    return c.jsxs(et, {
      isValidType: S,
      data: s,
      oidValue: y,
      bgActive: false,
      children: [
        c.jsx(ot, {
          data: s,
          widget: e
        }),
        c.jsx(w, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex"
          },
          children: c.jsx(ht, {
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
            children: h.map(({ value: a, ...o }, p) => {
              const l = z === p + 1, f = u.getBackgroundColor(l, o), x = j(f), B = at(f), v = u.getIcon(l, o);
              return c.jsx(Ct, {
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
                children: c.jsxs(w, {
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
                    !e.data.onlyText && v && c.jsx(w, {
                      sx: {
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: c.jsx(ct, {
                        src: v,
                        style: {
                          position: "relative",
                          left: u.getIconOffset(l, o, "X"),
                          bottom: u.getIconOffset(l, o, "Y"),
                          objectFit: "contain",
                          width: u.getIconSize(l, o),
                          height: u.getIconSize(l, o),
                          ...nt(v, u.getIconColor(l, o), l && e.data.enableIconColorMaskActive || o.forceColorMask)
                        }
                      })
                    }),
                    !e.data.onlyIcon && c.jsx(w, {
                      sx: {
                        width: "100%",
                        pt: 0.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: c.jsx(rt, {
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
              }, p);
            })
          })
        })
      ]
    });
  }
  E = class extends it {
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
              ...st([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...ut(),
              ...Bt()
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
    onStateUpdated(e, n) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const n = {
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, lt(this.wrapContent(c.jsx($t, {})), n);
    }
  };
});
export {
  __tla,
  E as default
};
