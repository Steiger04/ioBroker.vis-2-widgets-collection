import { a as V, g as I, a5 as J, u as L, j as l, s as P, d as D, i as z, e as F, n as K, m as N, o as B, a2 as X, C as Y, O as q, v as Q, y as Z, E as tt, G as et, w as j, A as U, S as ot, z as at, T as nt, U as it, a3 as M, H as rt, J as W, K as lt, N as st, __tla as __tla_0 } from "./useData-Dl8i4AuM.js";
import { u as dt, d as ut, __tla as __tla_1 } from "./useValueState-B-rp1Txw.js";
import { v as d, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
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
    return d.Children.toArray(t).filter((e) => d.isValidElement(e));
  }
  function pt(t) {
    return I("MuiToggleButton", t);
  }
  const w = V("MuiToggleButton", [
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
  ]), A = d.createContext({}), H = d.createContext(void 0);
  function gt(t, e) {
    return e === void 0 || t === void 0 ? false : Array.isArray(e) ? e.includes(t) : t === e;
  }
  const vt = (t) => {
    const { classes: e, fullWidth: o, selected: u, disabled: g, size: f, color: m } = t, v = {
      root: [
        "root",
        u && "selected",
        g && "disabled",
        o && "fullWidth",
        `size${z(f)}`,
        m
      ]
    };
    return F(v, pt, e);
  }, bt = P(K, {
    name: "MuiToggleButton",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        e[`size${z(o.size)}`]
      ];
    }
  })(N(({ theme: t }) => ({
    ...t.typography.button,
    borderRadius: (t.vars || t).shape.borderRadius,
    padding: 11,
    border: `1px solid ${(t.vars || t).palette.divider}`,
    color: (t.vars || t).palette.action.active,
    [`&.${w.disabled}`]: {
      color: (t.vars || t).palette.action.disabled,
      border: `1px solid ${(t.vars || t).palette.action.disabledBackground}`
    },
    "&:hover": {
      textDecoration: "none",
      backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})` : B(t.palette.text.primary, t.palette.action.hoverOpacity),
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
          [`&.${w.selected}`]: {
            color: (t.vars || t).palette.text.primary,
            backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})` : B(t.palette.text.primary, t.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : B(t.palette.text.primary, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})` : B(t.palette.text.primary, t.palette.action.selectedOpacity)
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
          [`&.${w.selected}`]: {
            color: (t.vars || t).palette[e].main,
            backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})` : B(t.palette[e].main, t.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : B(t.palette[e].main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})` : B(t.palette[e].main, t.palette.action.selectedOpacity)
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
  }))), ft = d.forwardRef(function(e, o) {
    const { value: u, ...g } = d.useContext(A), f = d.useContext(H), m = J({
      ...g,
      selected: gt(e.value, u)
    }, e), v = L({
      props: m,
      name: "MuiToggleButton"
    }), { children: $, className: T, color: b = "standard", disabled: C = false, disableFocusRipple: h = false, fullWidth: n = false, onChange: c, onClick: s, selected: x, size: y = "medium", value: i, ...k } = v, S = {
      ...v,
      color: b,
      disabled: C,
      disableFocusRipple: h,
      fullWidth: n,
      size: y
    }, G = vt(S), O = (r) => {
      s && (s(r, i), r.defaultPrevented) || c && c(r, i);
    }, p = f || "";
    return l.jsx(bt, {
      className: D(g.className, G.root, T, p),
      disabled: C,
      focusRipple: !h,
      ref: o,
      onClick: O,
      onChange: c,
      value: i,
      ownerState: S,
      "aria-pressed": x,
      ...k,
      children: $
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
  ]), yt = (t) => {
    const { classes: e, orientation: o, fullWidth: u, disabled: g } = t, f = {
      root: [
        "root",
        o,
        u && "fullWidth"
      ],
      grouped: [
        "grouped",
        `grouped${z(o)}`,
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
    return F(f, xt, e);
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
          [`& .${a.grouped}`]: e[`grouped${z(o.orientation)}`]
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
          [`& .${a.lastButton}.${w.disabled},& .${a.middleButton}.${w.disabled}`]: {
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
          [`& .${a.lastButton}.${w.disabled},& .${a.middleButton}.${w.disabled}`]: {
            borderLeft: "1px solid transparent"
          }
        }
      }
    ]
  }))), ht = d.forwardRef(function(e, o) {
    const u = L({
      props: e,
      name: "MuiToggleButtonGroup"
    }), { children: g, className: f, color: m = "standard", disabled: v = false, exclusive: $ = false, fullWidth: T = false, onChange: b, orientation: C = "horizontal", size: h = "medium", value: n, ...c } = u, s = {
      ...u,
      disabled: v,
      fullWidth: T,
      orientation: C,
      size: h
    }, x = yt(s), y = d.useCallback((p, r) => {
      if (!b) return;
      const R = n && n.indexOf(r);
      let _;
      n && R >= 0 ? (_ = n.slice(), _.splice(R, 1)) : _ = n ? n.concat(r) : [
        r
      ], b(p, _);
    }, [
      b,
      n
    ]), i = d.useCallback((p, r) => {
      b && b(p, n === r ? null : r);
    }, [
      b,
      n
    ]), k = d.useMemo(() => ({
      className: x.grouped,
      onChange: $ ? i : y,
      value: n,
      size: h,
      fullWidth: T,
      color: m,
      disabled: v
    }), [
      x.grouped,
      $,
      i,
      y,
      n,
      h,
      T,
      m,
      v
    ]), S = ct(g), G = S.length, O = (p) => {
      const r = p === 0, R = p === G - 1;
      return r && R ? "" : r ? x.firstButton : R ? x.lastButton : x.middleButton;
    };
    return l.jsx(Ct, {
      role: "group",
      className: D(x.root, f),
      ref: o,
      ownerState: s,
      ...c,
      children: l.jsx(A.Provider, {
        value: k,
        children: S.map((p, r) => l.jsx(H.Provider, {
          value: O(r),
          children: p
        }, r))
      })
    });
  }), Bt = () => [
    {
      type: "custom",
      component: () => l.jsx(Y, {})
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
      component: (t, e, o, u) => l.jsx(q, {
        field: t,
        data: e,
        onDataChange: o,
        props: u
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
    const t = d.useContext(Q), { widget: e, theme: o } = t, u = e.data.oidObject, { data: g, states: f, activeIndex: m } = Z("oid"), { value: v, updateValue: $ } = dt("oid"), T = e.data.buttonGroupVariant, b = e.data.buttonGroupOrientation, C = u == null ? void 0 : u.type, h = C === "boolean" || C === "number" || C === "string" || C === "mixed", n = b === "vertical", c = T === "outlined", s = e.data.buttonGroupColor ? B(e.data.buttonGroupColor, 0.6) : B(o.palette.text.primary, 0.6), x = d.useCallback((y) => {
      $(y);
    }, [
      $
    ]);
    return l.jsxs(tt, {
      bgActive: false,
      isValidType: h,
      data: g,
      oidValue: v,
      children: [
        l.jsx(et, {
          data: g,
          widget: e
        }),
        l.jsx(j, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex"
          },
          children: l.jsx(ht, {
            exclusive: true,
            value: String(v),
            disabled: !h,
            fullWidth: true,
            orientation: b,
            sx: {
              display: "flex",
              flexDirection: n ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: n ? "100%" : "auto",
              maxHeight: n ? "100%" : "none",
              ...n && {
                "& .MuiToggleButton-root": {
                  flex: "1 1 0",
                  minHeight: 0,
                  maxHeight: `calc(100% / ${f.length})`
                }
              },
              "& .MuiToggleButtonGroup-firstButton": {
                ...!c && {
                  border: "none"
                },
                ...c && {
                  borderColor: s
                },
                borderRadius: e.data.basePadding ? void 0 : 0
              },
              "& .MuiToggleButtonGroup-middleButton": {
                ...!c && {
                  border: "none",
                  marginLeft: n ? void 0 : 0,
                  marginTop: n ? 0 : void 0,
                  boxShadow: n ? `inset 0 1px 0 0 ${s}` : `inset 1px 0 0 0 ${s}`
                },
                ...c && {
                  borderColor: s
                }
              },
              "& .MuiToggleButtonGroup-lastButton": {
                ...!c && {
                  border: "none",
                  marginLeft: n ? void 0 : 0,
                  marginTop: n ? 0 : void 0,
                  boxShadow: n ? `inset 0 1px 0 0 ${s}` : `inset 1px 0 0 0 ${s}`
                },
                ...c && {
                  borderColor: s
                },
                borderRadius: e.data.basePadding ? void 0 : 0
              }
            },
            children: f.map(({ value: y, ...i }, k) => {
              const S = m === k + 1, { hasGradient: G, hoverBackground: O, selectedBackground: p } = mt(i.background), r = U(i.textColor);
              return l.jsx(ft, {
                value: String(y),
                onClick: () => x(y),
                sx: {
                  width: "100%",
                  height: "100%",
                  p: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&.MuiToggleButton-root": {
                    filter: S && G ? "opacity(80%)" : void 0,
                    background: i.background,
                    "&:hover": {
                      filter: G ? "opacity(80%)" : void 0,
                      background: O
                    },
                    "&.Mui-selected": {
                      background: p
                    }
                  }
                },
                children: l.jsxs(j, {
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
                    !e.data.onlyText && i.icon && l.jsx(j, {
                      sx: {
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: l.jsx(ot, {
                        src: i.icon,
                        style: {
                          position: "relative",
                          left: i.iconXOffset,
                          bottom: i.iconYOffset,
                          objectFit: "contain",
                          width: i.iconSizeOnly,
                          height: i.iconSizeOnly,
                          ...at(i.icon, i.iconColor, i.forceColorMask)
                        }
                      })
                    }),
                    !e.data.onlyIcon && l.jsx(j, {
                      sx: {
                        width: "100%",
                        pt: 0.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: l.jsx(nt, {
                        contentEditable: "false",
                        dangerouslySetInnerHTML: {
                          __html: i.label
                        },
                        noWrap: true,
                        variant: "body2",
                        sx: {
                          textTransform: "none",
                          fontSize: i.valueSize,
                          background: r,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: r ? "transparent" : i.textColor
                        }
                      })
                    })
                  ]
                })
              }, `${String(y)}-${k}`);
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
              ...W()
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
              ...W({
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
              ...W({
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, st(this.wrapContent(l.jsx($t, {})), o);
    }
  };
});
export {
  __tla,
  E as default
};
