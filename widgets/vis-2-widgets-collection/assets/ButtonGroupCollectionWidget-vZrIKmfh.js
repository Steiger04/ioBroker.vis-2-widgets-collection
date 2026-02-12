import { a as V, g as I, a5 as J, u as L, j as r, s as P, d as D, i as j, e as F, n as K, m as N, o as v, a2 as X, C as Y, O as q, v as Q, y as Z, E as tt, G as et, w as _, A as U, S as ot, z as at, T as nt, U as it, a3 as M, H as rt, J as z, K as lt, N as st, __tla as __tla_0 } from "./useData-Ch9c1PRV.js";
import { u as dt, d as ut, __tla as __tla_1 } from "./useValueState-CLMabNs9.js";
import { v as c, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
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
  })()
]).then(async () => {
  function ct(t) {
    return c.Children.toArray(t).filter((e) => c.isValidElement(e));
  }
  function pt(t) {
    return I("MuiToggleButton", t);
  }
  const G = V("MuiToggleButton", [
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
  ]), A = c.createContext({}), H = c.createContext(void 0);
  function gt(t, e) {
    return e === void 0 || t === void 0 ? false : Array.isArray(e) ? e.includes(t) : t === e;
  }
  const bt = (t) => {
    const { classes: e, fullWidth: o, selected: d, disabled: p, size: x, color: h } = t, g = {
      root: [
        "root",
        d && "selected",
        p && "disabled",
        o && "fullWidth",
        `size${j(x)}`,
        h
      ]
    };
    return F(g, pt, e);
  }, ft = P(K, {
    name: "MuiToggleButton",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        e[`size${j(o.size)}`]
      ];
    }
  })(N(({ theme: t }) => ({
    ...t.typography.button,
    borderRadius: (t.vars || t).shape.borderRadius,
    padding: 11,
    border: `1px solid ${(t.vars || t).palette.divider}`,
    color: (t.vars || t).palette.action.active,
    [`&.${G.disabled}`]: {
      color: (t.vars || t).palette.action.disabled,
      border: `1px solid ${(t.vars || t).palette.action.disabledBackground}`
    },
    "&:hover": {
      textDecoration: "none",
      backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})` : v(t.palette.text.primary, t.palette.action.hoverOpacity),
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
          [`&.${G.selected}`]: {
            color: (t.vars || t).palette.text.primary,
            backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})` : v(t.palette.text.primary, t.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : v(t.palette.text.primary, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})` : v(t.palette.text.primary, t.palette.action.selectedOpacity)
              }
            }
          }
        }
      },
      ...Object.entries(t.palette).filter(X()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${G.selected}`]: {
            color: (t.vars || t).palette[e].main,
            backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})` : v(t.palette[e].main, t.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : v(t.palette[e].main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})` : v(t.palette[e].main, t.palette.action.selectedOpacity)
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
  }))), vt = c.forwardRef(function(e, o) {
    const { value: d, ...p } = c.useContext(A), x = c.useContext(H), h = J({
      ...p,
      selected: gt(e.value, d)
    }, e), g = L({
      props: h,
      name: "MuiToggleButton"
    }), { children: R, className: y, color: u = "standard", disabled: B = false, disableFocusRipple: s = false, fullWidth: i = false, onChange: m, onClick: b, selected: n, size: $ = "medium", value: C, ...S } = g, T = {
      ...g,
      color: u,
      disabled: B,
      disableFocusRipple: s,
      fullWidth: i,
      size: $
    }, k = bt(T), W = (l) => {
      b && (b(l, C), l.defaultPrevented) || m && m(l, C);
    }, f = x || "";
    return r.jsx(ft, {
      className: D(p.className, k.root, y, f),
      disabled: B,
      focusRipple: !s,
      ref: o,
      onClick: W,
      onChange: m,
      value: C,
      ownerState: T,
      "aria-pressed": n,
      ...S,
      children: R
    });
  });
  function xt(t) {
    return I("MuiToggleButtonGroup", t);
  }
  const a = V("MuiToggleButtonGroup", [
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
  ]), ht = (t) => {
    const { classes: e, orientation: o, fullWidth: d, disabled: p } = t, x = {
      root: [
        "root",
        o,
        d && "fullWidth"
      ],
      grouped: [
        "grouped",
        `grouped${j(o)}`,
        p && "disabled"
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
    return F(x, xt, e);
  }, yt = P("div", {
    name: "MuiToggleButtonGroup",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        {
          [`& .${a.grouped}`]: e.grouped
        },
        {
          [`& .${a.grouped}`]: e[`grouped${j(o.orientation)}`]
        },
        {
          [`& .${a.firstButton}`]: e.firstButton
        },
        {
          [`& .${a.lastButton}`]: e.lastButton
        },
        {
          [`& .${a.middleButton}`]: e.middleButton
        },
        e.root,
        o.orientation === "vertical" && e.vertical,
        o.fullWidth && e.fullWidth
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
          [`& .${a.grouped}`]: {
            [`&.${a.selected} + .${a.grouped}.${a.selected}`]: {
              borderTop: 0,
              marginTop: 0
            }
          },
          [`& .${a.firstButton},& .${a.middleButton}`]: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          },
          [`& .${a.lastButton},& .${a.middleButton}`]: {
            marginTop: -1,
            borderTop: "1px solid transparent",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
          },
          [`& .${a.lastButton}.${G.disabled},& .${a.middleButton}.${G.disabled}`]: {
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
          [`& .${a.grouped}`]: {
            [`&.${a.selected} + .${a.grouped}.${a.selected}`]: {
              borderLeft: 0,
              marginLeft: 0
            }
          },
          [`& .${a.firstButton},& .${a.middleButton}`]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          },
          [`& .${a.lastButton},& .${a.middleButton}`]: {
            marginLeft: -1,
            borderLeft: "1px solid transparent",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          },
          [`& .${a.lastButton}.${G.disabled},& .${a.middleButton}.${G.disabled}`]: {
            borderLeft: "1px solid transparent"
          }
        }
      }
    ]
  }))), Ct = c.forwardRef(function(e, o) {
    const d = L({
      props: e,
      name: "MuiToggleButtonGroup"
    }), { children: p, className: x, color: h = "standard", disabled: g = false, exclusive: R = false, fullWidth: y = false, onChange: u, orientation: B = "horizontal", size: s = "medium", value: i, ...m } = d, b = {
      ...d,
      disabled: g,
      fullWidth: y,
      orientation: B,
      size: s
    }, n = ht(b), $ = c.useCallback((f, l) => {
      if (!u) return;
      const w = i && i.indexOf(l);
      let O;
      i && w >= 0 ? (O = i.slice(), O.splice(w, 1)) : O = i ? i.concat(l) : [
        l
      ], u(f, O);
    }, [
      u,
      i
    ]), C = c.useCallback((f, l) => {
      u && u(f, i === l ? null : l);
    }, [
      u,
      i
    ]), S = c.useMemo(() => ({
      className: n.grouped,
      onChange: R ? C : $,
      value: i,
      size: s,
      fullWidth: y,
      color: h,
      disabled: g
    }), [
      n.grouped,
      R,
      C,
      $,
      i,
      s,
      y,
      h,
      g
    ]), T = ct(p), k = T.length, W = (f) => {
      const l = f === 0, w = f === k - 1;
      return l && w ? "" : l ? n.firstButton : w ? n.lastButton : n.middleButton;
    };
    return r.jsx(yt, {
      role: "group",
      className: D(n.root, x),
      ref: o,
      ownerState: b,
      ...m,
      children: r.jsx(A.Provider, {
        value: S,
        children: T.map((f, l) => r.jsx(H.Provider, {
          value: W(l),
          children: f
        }, l))
      })
    });
  }), Bt = () => [
    {
      type: "custom",
      component: () => r.jsx(Y, {})
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
      component: (t, e, o, d) => r.jsx(q, {
        field: t,
        data: e,
        onDataChange: o,
        props: d
      })
    }
  ];
  function mt(t) {
    const e = U(t), o = it(t);
    return {
      hasGradient: !!e,
      hasColor: o,
      hoverBackground: e ? void 0 : o && t ? M(t, 0.5) : void 0,
      selectedBackground: e ? void 0 : o && t ? M(t, 0.3) : void 0
    };
  }
  function $t() {
    const t = c.useContext(Q), { widget: e } = t, o = e.data.oidObject, { data: d, states: p, activeIndex: x } = Z("oid"), { value: h, updateValue: g } = dt("oid"), R = e.data.buttonGroupVariant, y = e.data.buttonGroupOrientation, u = o == null ? void 0 : o.type, B = u === "boolean" || u === "number" || u === "string" || u === "mixed", s = y === "vertical", i = R === "outlined", m = c.useCallback((b) => {
      g(b);
    }, [
      g
    ]);
    return r.jsxs(tt, {
      isValidType: B,
      data: d,
      oidValue: h,
      children: [
        r.jsx(et, {
          data: d,
          widget: e
        }),
        r.jsx(_, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex"
          },
          children: r.jsx(Ct, {
            exclusive: true,
            value: String(h),
            disabled: !B,
            fullWidth: true,
            orientation: y,
            sx: {
              display: "flex",
              flexDirection: s ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: s ? "100%" : "auto",
              maxHeight: s ? "100%" : "none",
              ...s && {
                "& .MuiToggleButton-root": {
                  flex: "1 1 0",
                  minHeight: 0,
                  maxHeight: `calc(100% / ${p.length})`
                }
              },
              "& .MuiToggleButtonGroup-firstButton": {
                ...!i && {
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  ...s ? {
                    borderRightWidth: 0
                  } : {
                    borderBottomWidth: 0
                  }
                },
                borderColor: e.data.buttonGroupColor && v(e.data.buttonGroupColor, 0.2),
                borderRadius: e.data.basePadding ? void 0 : 0
              },
              "& .MuiToggleButtonGroup-middleButton": {
                ...!i && {
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  ...s ? {} : {
                    borderTopWidth: 0,
                    borderBottomWidth: 0
                  }
                },
                borderColor: e.data.buttonGroupColor && v(e.data.buttonGroupColor, 0.2)
              },
              "& .MuiToggleButtonGroup-lastButton": {
                ...!i && {
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: 0,
                  ...!s && {
                    borderTopWidth: 0
                  }
                },
                borderColor: e.data.buttonGroupColor && v(e.data.buttonGroupColor, 0.2),
                borderRadius: e.data.basePadding ? void 0 : 0
              }
            },
            children: p.map(({ value: b, ...n }, $) => {
              const C = x === $ + 1, { hasGradient: S, hoverBackground: T, selectedBackground: k } = mt(n.background), W = U(n.textColor);
              return r.jsx(vt, {
                value: b,
                onClick: () => m(b),
                sx: {
                  width: "100%",
                  height: "100%",
                  p: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&.MuiToggleButton-root": {
                    filter: C && S ? "opacity(80%)" : void 0,
                    background: n.background,
                    "&:hover": {
                      filter: S ? "opacity(80%)" : void 0,
                      background: T
                    },
                    "&.Mui-selected": {
                      background: k
                    }
                  }
                },
                children: r.jsxs(_, {
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
                    !e.data.onlyText && n.icon && r.jsx(_, {
                      sx: {
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: r.jsx(ot, {
                        src: n.icon,
                        style: {
                          position: "relative",
                          left: n.iconXOffset,
                          bottom: n.iconYOffset,
                          objectFit: "contain",
                          width: n.iconSizeOnly,
                          height: n.iconSizeOnly,
                          ...at(n.icon, n.iconColor, n.forceColorMask)
                        }
                      })
                    }),
                    !e.data.onlyIcon && r.jsx(_, {
                      sx: {
                        width: "100%",
                        pt: 0.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: r.jsx(nt, {
                        contentEditable: "false",
                        dangerouslySetInnerHTML: {
                          __html: n.label
                        },
                        noWrap: true,
                        variant: "body2",
                        sx: {
                          textTransform: "none",
                          fontSize: n.valueSize,
                          background: W,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: W ? "transparent" : n.textColor
                        }
                      })
                    })
                  ]
                })
              }, `${String(b)}-${$}`);
            })
          })
        })
      ]
    });
  }
  E = class extends rt {
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
              ...z()
            ]
          },
          {
            name: "buttonGroup",
            label: "button_group",
            fields: [
              ...lt([
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
              ...z({
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
              ...z({
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
    }
    onRxStyleChanged() {
    }
    onStateUpdated(e, o) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const o = {
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, st(this.wrapContent(r.jsx($t, {})), o);
    }
  };
});
export {
  __tla,
  E as default
};
