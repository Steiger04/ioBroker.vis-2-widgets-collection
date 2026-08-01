import { j as i, a as C, B as c, T as W, l as _, __tla as __tla_0 } from "./tinycolor-B_2EitDy.js";
import { G as D, __tla as __tla_1 } from "./usePopoverPositioning-CvdKfQR6.js";
import { b as F, e as M, C as z, u as $, a as P, g as w, h as R, c as u, w as L, __tla as __tla_2 } from "./useData-90UeUAIS.js";
import { C as A, S as H, g as N, c as E, __tla as __tla_3 } from "./CollectionBaseImage-u_I-Uett.js";
import { u as U, d as X, __tla as __tla_4 } from "./useValueState-BAhi1BOX.js";
import { v as S, __tla as __tla_5 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { i as Y } from "./isOidReadOnly-CpnU56qh.js";
import { T as q, a as J, __tla as __tla_6 } from "./ToggleButtonGroup-Bt5L8BC8.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_7 } from "./Delete-lESTXvkD.js";
import "./tslib.es6-F1e60Aum.js";
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
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })()
]).then(async () => {
  const K = () => [
    {
      type: "custom",
      component: () => i.jsx(M, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (o, t) => o.write === false,
      default: false,
      hidden: (o, t) => o.write === false
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
    F({
      name: "buttonGroupColor",
      label: "button_group_color",
      fallbackFields: [
        "textColor"
      ]
    })
  ];
  function Q(o) {
    const t = w(o), a = R(o);
    return {
      hasGradient: !!t,
      hasColor: a,
      hoverBackground: t ? void 0 : a && o ? _(o, 0.5) : void 0,
      selectedBackground: t ? void 0 : a && o ? _(o, 0.3) : void 0
    };
  }
  function Z() {
    const o = S.useContext(z), { widget: t, theme: a } = o, j = t.data.oidObject, { data: p, states: g, activeIndex: k } = $("oid"), { value: h, updateValue: m } = U("oid"), G = t.data.buttonGroupVariant, b = t.data.buttonGroupOrientation, d = j == null ? void 0 : j.type, x = d === "boolean" || d === "number" || d === "string" || d === "mixed", n = b === "vertical", r = G === "outlined", l = t.data.buttonGroupColor ? C(t.data.buttonGroupColor, 0.6) : C(a.palette.text.primary, 0.6), T = S.useCallback((s) => {
      m(s);
    }, [
      m
    ]);
    return i.jsxs(P, {
      bgActive: false,
      isValidType: x,
      data: p,
      oidValue: h,
      children: [
        i.jsx(A, {
          data: p,
          widget: t
        }),
        i.jsx(c, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex"
          },
          children: i.jsx(q, {
            exclusive: true,
            value: String(h),
            disabled: !x || Y(t.data),
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
            children: g.map(({ value: s, ...e }, f) => {
              const I = k === f + 1, { hasGradient: v, hoverBackground: V, selectedBackground: O } = Q(e.background), y = w(e.textColor);
              return i.jsx(J, {
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
                    filter: I && v ? "opacity(80%)" : void 0,
                    background: e.background,
                    "&:hover": {
                      filter: v ? "opacity(80%)" : void 0,
                      background: V
                    },
                    "&.Mui-selected": {
                      background: O
                    }
                  }
                },
                children: i.jsxs(c, {
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
                    !t.data.onlyText && e.icon && i.jsx(c, {
                      sx: {
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: i.jsx(H, {
                        src: e.icon,
                        style: {
                          position: "relative",
                          left: e.iconXOffset,
                          bottom: e.iconYOffset,
                          objectFit: "contain",
                          width: e.iconSizeOnly,
                          height: e.iconSizeOnly,
                          ...N(e.icon, e.iconColor, e.forceColorMask)
                        }
                      })
                    }),
                    !t.data.onlyIcon && i.jsx(c, {
                      sx: {
                        width: "100%",
                        pt: 0.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: i.jsx(W, {
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
              }, `${String(s)}-${f}`);
            })
          })
        })
      ]
    });
  }
  B = class extends D {
    static getWidgetInfo() {
      return {
        id: "tplButtonGroupCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "ButtonGroupCollectionWidget",
        visWidgetLabel: "button_group_collection_widget",
        visOrder: 7,
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
              ...E([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...X(),
              ...K()
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, L(this.wrapContent(i.jsx(Z, {})), a);
    }
  };
});
export {
  __tla,
  B as default
};
