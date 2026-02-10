import { a as V, g as I, a5 as J, u as L, j as r, s as P, d as N, i as j, e as D, n as K, m as F, o as v, a2 as X, C as Y, O as q, v as Q, y as Z, E as tt, G as et, w as _, A as U, S as ot, z as at, T as nt, U as it, a3 as M, H as rt, J as z, K as lt, N as st, __tla as __tla_0 } from "./useData-V3RviNbf.js";
import { u as dt, d as ut, __tla as __tla_1 } from "./useValueState-CYv7cSN1.js";
import { v as p, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
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
    return p.Children.toArray(t).filter((e) => p.isValidElement(e));
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
  ]), A = p.createContext({}), H = p.createContext(void 0);
  function gt(t, e) {
    return e === void 0 || t === void 0 ? false : Array.isArray(e) ? e.includes(t) : t === e;
  }
  const bt = (t) => {
    const { classes: e, fullWidth: o, selected: d, disabled: g, size: x, color: h } = t, b = {
      root: [
        "root",
        d && "selected",
        g && "disabled",
        o && "fullWidth",
        `size${j(x)}`,
        h
      ]
    };
    return D(b, pt, e);
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
  })(F(({ theme: t }) => ({
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
  }))), vt = p.forwardRef(function(e, o) {
    const { value: d, ...g } = p.useContext(A), x = p.useContext(H), h = J({
      ...g,
      selected: gt(e.value, d)
    }, e), b = L({
      props: h,
      name: "MuiToggleButton"
    }), { children: R, className: C, color: u = "standard", disabled: m = false, disableFocusRipple: s = false, fullWidth: i = false, onChange: $, onClick: f, selected: n, size: T = "medium", value: y, ...S } = b, B = {
      ...b,
      color: u,
      disabled: m,
      disableFocusRipple: s,
      fullWidth: i,
      size: T
    }, W = bt(B), w = (l) => {
      f && (f(l, y), l.defaultPrevented) || $ && $(l, y);
    }, c = x || "";
    return r.jsx(ft, {
      className: N(g.className, W.root, C, c),
      disabled: m,
      focusRipple: !s,
      ref: o,
      onClick: w,
      onChange: $,
      value: y,
      ownerState: B,
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
    const { classes: e, orientation: o, fullWidth: d, disabled: g } = t, x = {
      root: [
        "root",
        o,
        d && "fullWidth"
      ],
      grouped: [
        "grouped",
        `grouped${j(o)}`,
        g && "disabled"
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
    return D(x, xt, e);
  }, Ct = P("div", {
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
  })(F(({ theme: t }) => ({
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
  }))), yt = p.forwardRef(function(e, o) {
    const d = L({
      props: e,
      name: "MuiToggleButtonGroup"
    }), { children: g, className: x, color: h = "standard", disabled: b = false, exclusive: R = false, fullWidth: C = false, onChange: u, orientation: m = "horizontal", size: s = "medium", value: i, ...$ } = d, f = {
      ...d,
      disabled: b,
      fullWidth: C,
      orientation: m,
      size: s
    }, n = ht(f), T = p.useCallback((c, l) => {
      if (!u) return;
      const k = i && i.indexOf(l);
      let O;
      i && k >= 0 ? (O = i.slice(), O.splice(k, 1)) : O = i ? i.concat(l) : [
        l
      ], u(c, O);
    }, [
      u,
      i
    ]), y = p.useCallback((c, l) => {
      u && u(c, i === l ? null : l);
    }, [
      u,
      i
    ]), S = p.useMemo(() => ({
      className: n.grouped,
      onChange: R ? y : T,
      value: i,
      size: s,
      fullWidth: C,
      color: h,
      disabled: b
    }), [
      n.grouped,
      R,
      y,
      T,
      i,
      s,
      C,
      h,
      b
    ]), B = ct(g), W = B.length, w = (c) => {
      const l = c === 0, k = c === W - 1;
      return l && k ? "" : l ? n.firstButton : k ? n.lastButton : n.middleButton;
    };
    return r.jsx(Ct, {
      role: "group",
      className: N(n.root, x),
      ref: o,
      ownerState: f,
      ...$,
      children: r.jsx(A.Provider, {
        value: S,
        children: B.map((c, l) => r.jsx(H.Provider, {
          value: w(l),
          children: c
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
    const t = p.useContext(Q), { widget: e } = t, o = e.data.oidObject, { data: d, statesNew: g, activeIndex: x } = Z("oid"), { value: h, updateValue: b } = dt("oid"), R = e.data.buttonGroupVariant, C = e.data.buttonGroupOrientation, u = o == null ? void 0 : o.type, m = u === "boolean" || u === "number" || u === "string" || u === "mixed", s = C === "vertical", i = R === "outlined", $ = p.useCallback((f) => {
      b(f);
    }, [
      b
    ]);
    return r.jsxs(tt, {
      isValidType: m,
      data: d,
      oidValue: h,
      bgActive: false,
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
          children: r.jsx(yt, {
            exclusive: true,
            value: String(h),
            disabled: !m,
            fullWidth: true,
            orientation: C,
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
                  maxHeight: `calc(100% / ${g.length})`
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
            children: g.map(({ value: f, ...n }, T) => {
              const y = x === T + 1, S = n.background, { hasGradient: B, hoverBackground: W, selectedBackground: w } = mt(S), c = U(n.textColor);
              return r.jsx(vt, {
                value: f,
                onClick: () => $(f),
                sx: {
                  width: "100%",
                  height: "100%",
                  p: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&.MuiToggleButton-root": {
                    filter: y && B ? "opacity(80%)" : void 0,
                    background: S,
                    "&:hover": {
                      filter: B ? "opacity(80%)" : void 0,
                      background: W
                    },
                    "&.Mui-selected": {
                      background: w
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
                          background: c,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: c ? "transparent" : n.textColor
                        }
                      })
                    })
                  ]
                })
              }, `${String(f)}-${T}`);
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
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(e, o) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
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
