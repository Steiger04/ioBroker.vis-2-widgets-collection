import { j as o, C as W, F, n as M, q as D, i as S, x as z, y as P, o as c, w as B, S as $, v as A, T as L, K as R, M as _, G as H, z as p, A as E, E as N, __tla as __tla_0 } from "./useData-B0iH0GQ1.js";
import { u as U, d as q, __tla as __tla_1 } from "./useValueState-C3aTOyBv.js";
import { v as w, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { T as K, a as X, __tla as __tla_3 } from "./ToggleButtonGroup-DbzBMSgu.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let j;
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
  })()
]).then(async () => {
  const Y = () => [
    {
      type: "custom",
      component: () => o.jsx(W, {})
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
      component: (n, t, i, u) => o.jsx(F, {
        field: n,
        data: t,
        onDataChange: i,
        props: u
      })
    }
  ];
  function J(n) {
    const t = B(n), i = R(n);
    return {
      hasGradient: !!t,
      hasColor: i,
      hoverBackground: t ? void 0 : i && n ? _(n, 0.5) : void 0,
      selectedBackground: t ? void 0 : i && n ? _(n, 0.3) : void 0
    };
  }
  function Q() {
    const n = w.useContext(M), { widget: t, theme: i } = n, u = t.data.oidObject, { data: g, states: h, activeIndex: G } = D("oid"), { value: x, updateValue: b } = U("oid"), k = t.data.buttonGroupVariant, m = t.data.buttonGroupOrientation, d = u == null ? void 0 : u.type, v = d === "boolean" || d === "number" || d === "string" || d === "mixed", a = m === "vertical", r = k === "outlined", l = t.data.buttonGroupColor ? S(t.data.buttonGroupColor, 0.6) : S(i.palette.text.primary, 0.6), T = w.useCallback((s) => {
      b(s);
    }, [
      b
    ]);
    return o.jsxs(z, {
      bgActive: false,
      isValidType: v,
      data: g,
      oidValue: x,
      children: [
        o.jsx(P, {
          data: g,
          widget: t
        }),
        o.jsx(c, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex"
          },
          children: o.jsx(K, {
            exclusive: true,
            value: String(x),
            disabled: !v,
            fullWidth: true,
            orientation: m,
            sx: {
              display: "flex",
              flexDirection: a ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: a ? "100%" : "auto",
              maxHeight: a ? "100%" : "none",
              ...a && {
                "& .MuiToggleButton-root": {
                  flex: "1 1 0",
                  minHeight: 0,
                  maxHeight: `calc(100% / ${h.length})`
                }
              },
              "& .MuiToggleButtonGroup-firstButton": {
                ...!r && {
                  border: "none"
                },
                ...r && {
                  borderColor: l
                },
                borderRadius: t.data.basePadding ? void 0 : 0
              },
              "& .MuiToggleButtonGroup-middleButton": {
                ...!r && {
                  border: "none",
                  marginLeft: a ? void 0 : 0,
                  marginTop: a ? 0 : void 0,
                  boxShadow: a ? `inset 0 1px 0 0 ${l}` : `inset 1px 0 0 0 ${l}`
                },
                ...r && {
                  borderColor: l
                }
              },
              "& .MuiToggleButtonGroup-lastButton": {
                ...!r && {
                  border: "none",
                  marginLeft: a ? void 0 : 0,
                  marginTop: a ? 0 : void 0,
                  boxShadow: a ? `inset 0 1px 0 0 ${l}` : `inset 1px 0 0 0 ${l}`
                },
                ...r && {
                  borderColor: l
                },
                borderRadius: t.data.basePadding ? void 0 : 0
              }
            },
            children: h.map(({ value: s, ...e }, f) => {
              const I = G === f + 1, { hasGradient: y, hoverBackground: V, selectedBackground: O } = J(e.background), C = B(e.textColor);
              return o.jsx(X, {
                value: String(s),
                onClick: () => T(s),
                sx: {
                  width: "100%",
                  height: "100%",
                  p: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&.MuiToggleButton-root": {
                    filter: I && y ? "opacity(80%)" : void 0,
                    background: e.background,
                    "&:hover": {
                      filter: y ? "opacity(80%)" : void 0,
                      background: V
                    },
                    "&.Mui-selected": {
                      background: O
                    }
                  }
                },
                children: o.jsxs(c, {
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
                    !t.data.onlyText && e.icon && o.jsx(c, {
                      sx: {
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: o.jsx($, {
                        src: e.icon,
                        style: {
                          position: "relative",
                          left: e.iconXOffset,
                          bottom: e.iconYOffset,
                          objectFit: "contain",
                          width: e.iconSizeOnly,
                          height: e.iconSizeOnly,
                          ...A(e.icon, e.iconColor, e.forceColorMask)
                        }
                      })
                    }),
                    !t.data.onlyIcon && o.jsx(c, {
                      sx: {
                        width: "100%",
                        pt: 0.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: o.jsx(L, {
                        contentEditable: "false",
                        dangerouslySetInnerHTML: {
                          __html: e.label
                        },
                        noWrap: true,
                        variant: "body2",
                        sx: {
                          textTransform: "none",
                          fontSize: e.valueSize,
                          background: C,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: C ? "transparent" : e.textColor
                        }
                      })
                    })
                  ]
                })
              }, `${String(s)}-${f}`);
            })
          })
        })
      ]
    });
  }
  j = class extends H {
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
              ...p()
            ]
          },
          {
            name: "buttonGroup",
            label: "button_group",
            fields: [
              ...E([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...q(),
              ...Y()
            ]
          },
          {
            name: "active",
            label: "group_active",
            fields: [
              ...p({
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
              ...p({
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
      return j.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, i) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const i = {
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, N(this.wrapContent(o.jsx(Q, {})), i);
    }
  };
});
export {
  __tla,
  j as default
};
