import { a as M, g as V, a3 as X, u as P, j as p, s as L, d as F, i as I, e as N, n as Y, m as D, o as $, a0 as J, C as K, N as q, v as Q, y as Z, O as tt, E as et, G as ot, w, A as _, R as at, a1 as A, z as nt, T as rt, H as it, J as j, K as lt, __tla as __tla_0 } from "./useData-ZqG1ErJr.js";
import { c as st, __tla as __tla_1 } from "./commonObjectFields-BC31TM4M.js";
import { u as dt, d as ct, __tla as __tla_2 } from "./useValueState-CDNrmGNN.js";
import { v as C, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as ut, __tla as __tla_4 } from "./SafeImg-H8fv6qCQ.js";
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
    const { classes: e, fullWidth: n, selected: v, disabled: s, size: h, color: z } = t, y = {
      root: [
        "root",
        v && "selected",
        s && "disabled",
        n && "fullWidth",
        `size${I(h)}`,
        z
      ]
    };
    return N(y, gt, e);
  }, vt = L(Y, {
    name: "MuiToggleButton",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: n } = t;
      return [
        e.root,
        e[`size${I(n.size)}`]
      ];
    }
  })(D(({ theme: t }) => ({
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
    const { value: v, ...s } = C.useContext(U), h = C.useContext(H), z = X({
      ...s,
      selected: ft(e.value, v)
    }, e), y = P({
      props: z,
      name: "MuiToggleButton"
    }), { children: R, className: G, color: m = "standard", disabled: T = false, disableFocusRipple: S = false, fullWidth: i = false, onChange: c, onClick: d, selected: a, size: o = "medium", value: u, ...l } = y, f = {
      ...y,
      color: m,
      disabled: T,
      disableFocusRipple: S,
      fullWidth: i,
      size: o
    }, x = bt(f), B = (g) => {
      d && (d(g, u), g.defaultPrevented) || c && c(g, u);
    }, b = h || "";
    return p.jsx(vt, {
      className: F(s.className, x.root, G, b),
      disabled: T,
      focusRipple: !S,
      ref: n,
      onClick: B,
      onChange: c,
      value: u,
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
    const { classes: e, orientation: n, fullWidth: v, disabled: s } = t, h = {
      root: [
        "root",
        n,
        v && "fullWidth"
      ],
      grouped: [
        "grouped",
        `grouped${I(n)}`,
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
    return N(h, xt, e);
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
          [`& .${r.grouped}`]: e[`grouped${I(n.orientation)}`]
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
  })(D(({ theme: t }) => ({
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
    const v = P({
      props: e,
      name: "MuiToggleButtonGroup"
    }), { children: s, className: h, color: z = "standard", disabled: y = false, exclusive: R = false, fullWidth: G = false, onChange: m, orientation: T = "horizontal", size: S = "medium", value: i, ...c } = v, d = {
      ...v,
      disabled: y,
      fullWidth: G,
      orientation: T,
      size: S
    }, a = yt(d), o = C.useCallback((b, g) => {
      if (!m) return;
      const k = i && i.indexOf(g);
      let W;
      i && k >= 0 ? (W = i.slice(), W.splice(k, 1)) : W = i ? i.concat(g) : [
        g
      ], m(b, W);
    }, [
      m,
      i
    ]), u = C.useCallback((b, g) => {
      m && m(b, i === g ? null : g);
    }, [
      m,
      i
    ]), l = C.useMemo(() => ({
      className: a.grouped,
      onChange: R ? u : o,
      value: i,
      size: S,
      fullWidth: G,
      color: z,
      disabled: y
    }), [
      a.grouped,
      R,
      u,
      o,
      i,
      S,
      G,
      z,
      y
    ]), f = pt(s), x = f.length, B = (b) => {
      const g = b === 0, k = b === x - 1;
      return g && k ? "" : g ? a.firstButton : k ? a.lastButton : a.middleButton;
    };
    return p.jsx(mt, {
      role: "group",
      className: F(a.root, h),
      ref: n,
      ownerState: d,
      ...c,
      children: p.jsx(U.Provider, {
        value: l,
        children: f.map((b, g) => p.jsx(H.Provider, {
          value: B(g),
          children: b
        }, g))
      })
    });
  }), Bt = () => [
    {
      type: "custom",
      component: () => p.jsx(K, {})
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
      component: (t, e, n, v) => p.jsx(q, {
        field: t,
        data: e,
        onDataChange: n,
        props: v
      })
    }
  ];
  function $t() {
    const t = C.useContext(Q), { widget: e, theme: n } = t, v = e.data.oidObject, { data: s, states: h, activeIndex: z } = Z("oid"), { value: y, updateValue: R } = dt("oid"), G = e.data.buttonGroupVariant, m = e.data.buttonGroupOrientation, T = v == null ? void 0 : v.type, S = T === "boolean" || T === "number" || T === "string" || T === "mixed", i = m === "vertical", c = G === "outlined", d = C.useMemo(() => ({
      getBackgroundColor: (a, o) => a && e.data.backgroundActive || o.backgroundActive,
      getIcon: (a, o) => a ? e.data.iconActive || e.data.iconSmallActive || o.icon || s.icon : o.icon || s.icon,
      getIconColor: (a, o) => a ? e.data.iconColorActive || o.iconColor || e.data.buttonGroupColor || s.iconColor || n.palette.primary.main : o.iconColor || e.data.buttonGroupColor || s.iconColor || n.palette.primary.main,
      getTextColor: (a, o) => a ? e.data.textColorActive || o.textColor || e.data.buttonGroupColor || s.textColor || n.palette.primary.main : o.textColor || e.data.buttonGroupColor || s.textColor || n.palette.primary.main,
      getIconSize: (a, o) => `calc(100% * ${a && typeof e.data.iconSizeActive == "number" ? e.data.iconSizeActive : typeof o.iconSize == "number" ? o.iconSize : typeof e.data.iconSize == "number" ? e.data.iconSize : 100} / 100)`,
      getIconOffset: (a, o, u) => {
        const l = u === "X" ? "iconXOffset" : "iconYOffset", f = u === "X" ? "iconXOffsetActive" : "iconYOffsetActive", x = a ? e.data[f] : void 0, B = o[l];
        return x && x !== "0px" ? x : B && B !== "0px" ? B : "0px";
      },
      getTextContent: (a, o, u) => {
        var _a;
        return a && e.data.aliasActive ? e.data.aliasActive : ((_a = o.alias) == null ? void 0 : _a.replace(/(\r\n|\n|\r)/gm, "")) || u && `${u}${v == null ? void 0 : v.unit}` || "";
      },
      getTextSize: (a, o) => a && typeof e.data.valueSizeActive == "number" ? tt(e.data.valueSizeActive) : typeof o.valueSize == "string" ? `${o.valueSize}` : s.valueSize
    }), [
      e.data,
      s,
      v,
      n.palette.primary.main
    ]);
    return p.jsxs(et, {
      isValidType: S,
      data: s,
      oidValue: y,
      bgActive: false,
      children: [
        p.jsx(ot, {
          data: s,
          widget: e
        }),
        p.jsx(w, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex"
          },
          children: p.jsx(ht, {
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
                borderTopWidth: c ? null : 0,
                borderLeftWidth: c ? null : 0,
                borderRightWidth: c ? null : i ? 0 : null,
                borderBottomWidth: c || i ? null : 0,
                borderColor: e.data.buttonGroupColor && $(e.data.buttonGroupColor, 0.2),
                borderRadius: e.data.basePadding ? void 0 : 0
              },
              "& .MuiToggleButtonGroup-middleButton": {
                borderTopWidth: c || i ? null : 0,
                borderLeftWidth: c ? null : 0,
                borderRightWidth: c ? null : 0,
                borderBottomWidth: c || i ? null : 0,
                borderColor: e.data.buttonGroupColor && $(e.data.buttonGroupColor, 0.2)
              },
              "& .MuiToggleButtonGroup-lastButton": {
                borderTopWidth: c || i ? null : 0,
                borderLeftWidth: c ? null : 0,
                borderRightWidth: c ? null : 0,
                borderBottomWidth: c ? null : 0,
                borderColor: e.data.buttonGroupColor && $(e.data.buttonGroupColor, 0.2),
                borderRadius: e.data.basePadding ? void 0 : 0
              }
            },
            children: h.map(({ value: a, ...o }, u) => {
              const l = z === u + 1, f = d.getBackgroundColor(l, o), x = _(f), B = at(f), b = d.getIcon(l, o);
              return console.log("index, icon, helpers.getIconColor(isActive, state), state.forceColorMask", u, b, d.getIconColor(l, o), o.forceColorMask), p.jsx(Ct, {
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
                children: p.jsxs(w, {
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
                    !e.data.onlyText && b && p.jsx(w, {
                      sx: {
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: p.jsx(ut, {
                        src: b,
                        style: {
                          position: "relative",
                          left: d.getIconOffset(l, o, "X"),
                          bottom: d.getIconOffset(l, o, "Y"),
                          objectFit: "contain",
                          width: d.getIconSize(l, o),
                          height: d.getIconSize(l, o),
                          ...nt(b, d.getIconColor(l, o), l && e.data.enableIconColorMaskActive || o.forceColorMask)
                        }
                      })
                    }),
                    !e.data.onlyIcon && p.jsx(w, {
                      sx: {
                        width: "100%",
                        pt: 0.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: p.jsx(rt, {
                        contentEditable: "false",
                        dangerouslySetInnerHTML: {
                          __html: d.getTextContent(l, o, a)
                        },
                        noWrap: true,
                        variant: "body2",
                        sx: {
                          textTransform: "none",
                          fontSize: d.getTextSize(l, o),
                          background: _(d.getTextColor(l, o)),
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: _(d.getTextColor(l, o)) ? "transparent" : d.getTextColor(l, o)
                        }
                      })
                    })
                  ]
                })
              }, u);
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
              ...j()
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
              ...ct(),
              ...Bt()
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, lt(this.wrapContent(p.jsx($t, {})), n);
    }
  };
});
export {
  __tla,
  E as default
};
