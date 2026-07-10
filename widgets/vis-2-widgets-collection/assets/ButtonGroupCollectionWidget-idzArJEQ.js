import { j as o, i as C, n as c, T as W, p as S, G as F, __tla as __tla_0 } from "./usePopoverPositioning-BZLitN7O.js";
import { h as D, C as M, a as z, u as $, c as P, d as L, b as w, S as R, g as A, l as H, e as u, f as N, w as E, __tla as __tla_1 } from "./useData-DNdZxCG9.js";
import { u as U, d as X, __tla as __tla_2 } from "./useValueState-CVlBjGB3.js";
import { v as _, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { T as Y, a as q, __tla as __tla_4 } from "./ToggleButtonGroup--6oQuj-k.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let B;
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
  const J = () => [
    {
      type: "custom",
      component: () => o.jsx(M, {})
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
    D({
      name: "buttonGroupColor",
      label: "button_group_color",
      fallbackFields: [
        "textColor"
      ]
    })
  ];
  function K(i) {
    const t = w(i), a = H(i);
    return {
      hasGradient: !!t,
      hasColor: a,
      hoverBackground: t ? void 0 : a && i ? S(i, 0.5) : void 0,
      selectedBackground: t ? void 0 : a && i ? S(i, 0.3) : void 0
    };
  }
  function Q() {
    const i = _.useContext(z), { widget: t, theme: a } = i, j = t.data.oidObject, { data: p, states: g, activeIndex: G } = $("oid"), { value: h, updateValue: x } = U("oid"), k = t.data.buttonGroupVariant, b = t.data.buttonGroupOrientation, d = j == null ? void 0 : j.type, m = d === "boolean" || d === "number" || d === "string" || d === "mixed", n = b === "vertical", r = k === "outlined", l = t.data.buttonGroupColor ? C(t.data.buttonGroupColor, 0.6) : C(a.palette.text.primary, 0.6), T = _.useCallback((s) => {
      x(s);
    }, [
      x
    ]);
    return o.jsxs(P, {
      bgActive: false,
      isValidType: m,
      data: p,
      oidValue: h,
      children: [
        o.jsx(L, {
          data: p,
          widget: t
        }),
        o.jsx(c, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex"
          },
          children: o.jsx(Y, {
            exclusive: true,
            value: String(h),
            disabled: !m,
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
                  maxHeight: `calc(100% / ${g.length})`
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
                  marginLeft: n ? void 0 : 0,
                  marginTop: n ? 0 : void 0,
                  boxShadow: n ? `inset 0 1px 0 0 ${l}` : `inset 1px 0 0 0 ${l}`
                },
                ...r && {
                  borderColor: l
                }
              },
              "& .MuiToggleButtonGroup-lastButton": {
                ...!r && {
                  border: "none",
                  marginLeft: n ? void 0 : 0,
                  marginTop: n ? 0 : void 0,
                  boxShadow: n ? `inset 0 1px 0 0 ${l}` : `inset 1px 0 0 0 ${l}`
                },
                ...r && {
                  borderColor: l
                },
                borderRadius: t.data.basePadding ? void 0 : 0
              }
            },
            children: g.map(({ value: s, ...e }, v) => {
              const I = G === v + 1, { hasGradient: f, hoverBackground: V, selectedBackground: O } = K(e.background), y = w(e.textColor);
              return o.jsx(q, {
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
                    filter: I && f ? "opacity(80%)" : void 0,
                    background: e.background,
                    "&:hover": {
                      filter: f ? "opacity(80%)" : void 0,
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
                      children: o.jsx(R, {
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
                      children: o.jsx(W, {
                        contentEditable: "false",
                        dangerouslySetInnerHTML: {
                          __html: e.label
                        },
                        noWrap: true,
                        variant: "body2",
                        sx: {
                          textTransform: "none",
                          fontSize: e.valueSize,
                          background: y,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: y ? "transparent" : e.textColor
                        }
                      })
                    })
                  ]
                })
              }, `${String(s)}-${v}`);
            })
          })
        })
      ]
    });
  }
  B = class extends F {
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
              ...u()
            ]
          },
          {
            name: "buttonGroup",
            label: "button_group",
            fields: [
              ...N([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...X(),
              ...J()
            ]
          },
          {
            name: "active",
            label: "group_active",
            fields: [
              ...u({
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
              ...u({
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
      return B.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, a) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const a = {
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, E(this.wrapContent(o.jsx(Q, {})), a);
    }
  };
});
export {
  __tla,
  B as default
};
