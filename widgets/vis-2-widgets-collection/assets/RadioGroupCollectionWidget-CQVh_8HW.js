import { j as t, d as b, T as _, B as h, __tla as __tla_0 } from "./tinycolor-CLG1zgRY.js";
import { G as I, __tla as __tla_1 } from "./usePopoverPositioning-BenXbV4b.js";
import { b as R, e as d, i as W, C as B, u as L, a as O, g as m, c as g, w as F, __tla as __tla_2 } from "./useData-BTquM2A9.js";
import { C as G, S as M, g as V, c as z, __tla as __tla_3 } from "./CollectionBaseImage-V9l6RwxW.js";
import { u as D, d as P, __tla as __tla_4 } from "./useValueState-0S1Cr_pw.js";
import { v as x, __tla as __tla_5 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { i as T } from "./isOidReadOnly-CpnU56qh.js";
import { S as H, __tla as __tla_6 } from "./Stack-7FMkVYqC.js";
import { F as U, __tla as __tla_7 } from "./FormControlLabel-DAjdvuK4.js";
import { R as $, __tla as __tla_8 } from "./Radio-BVY-QKOD.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import "./preload-helper-PPVm8Dsz.js";
import { __tla as __tla_9 } from "./Delete-VRvdIUoO.js";
import "./tslib.es6-F1e60Aum.js";
import { __tla as __tla_10 } from "./styled-CQDMXjYA.js";
import { __tla as __tla_11 } from "./useThemeProps-BJ14EHU2.js";
import { __tla as __tla_12 } from "./SwitchBase-D7Ymq-U2.js";
let C;
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
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_12;
    } catch {
    }
  })()
]).then(async () => {
  const E = () => [
    {
      type: "custom",
      component: () => t.jsx(d, {})
    },
    {
      name: "radioOrientation",
      label: "radio_orientation",
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
      type: "custom",
      component: () => t.jsx(d, {})
    },
    {
      name: "hideLabels",
      label: "hide_labels",
      type: "checkbox",
      default: false
    },
    {
      name: "labelPlacement",
      label: "label_placement",
      type: "select",
      options: [
        {
          value: "start",
          label: "Start"
        },
        {
          value: "end",
          label: "End"
        }
      ],
      default: "end",
      noTranslation: true,
      hidden: (n) => !!n.hideLabels
    },
    {
      type: "custom",
      component: () => t.jsx(d, {})
    },
    R({
      name: "radioGroupUncheckedIconColor",
      label: "radio_group_unchecked_icon_color",
      fallbackFields: [],
      noGradient: true
    }),
    {
      type: "custom",
      component: () => t.jsx(d, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (n, i) => n.write === false,
      default: false,
      hidden: (n, i) => n.write === false
    }
  ], N = b(t.jsx("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonChecked"), f = b(t.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonUnchecked");
  function A() {
    const [n, i] = x.useState(null), { height: l } = W(n), v = x.useContext(B), { widget: { data: { oidObject: y } }, widget: o } = v, { data: r, states: c } = L("oid"), { value: p, updateValue: w } = D("oid"), S = y == null ? void 0 : y.type, k = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(S ?? ""), a = o.data.radioOrientation === "horizontal", s = l && c.length > 0 ? l / c.length : void 0, j = (e) => {
      w(e.target.value);
    };
    return t.jsxs(O, {
      isValidType: k,
      data: r,
      oidValue: p,
      children: [
        t.jsx(G, {
          data: r,
          widget: o
        }),
        t.jsx(H, {
          spacing: 0,
          ref: i,
          direction: a ? "row" : "column",
          sx: {
            width: a ? "100%" : "auto",
            height: "100%",
            justifyContent: a ? "space-around" : "flex-start",
            alignItems: a ? "center" : "stretch"
          },
          children: c.map((e, u) => t.jsx(U, {
            labelPlacement: o.data.labelPlacement,
            sx: {
              m: 0,
              pr: o.data.labelPlacement === "end" && !o.data.hideLabels ? 1 : 0,
              pl: o.data.labelPlacement === "start" && !o.data.hideLabels ? 1 : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: o.data.hideLabels ? "center" : "flex-start",
              width: "100%",
              ...!a && {
                flex: "1 1 0",
                minHeight: 0
              },
              ...a && {
                height: "100%"
              },
              "& .MuiButtonBase-root": {
                width: "100%",
                padding: 0,
                ...a && {
                  aspectRatio: "1",
                  maxWidth: l || void 0,
                  maxHeight: l || void 0,
                  flexShrink: 0
                },
                ...!a && {
                  height: s ? `${s}px` : "auto",
                  maxWidth: s || void 0,
                  maxHeight: s || void 0,
                  flexShrink: 0
                },
                "&.Mui-disabled": {
                  "&.Mui-checked": {
                    color: e.iconColor || "primary.main"
                  },
                  color: o.data.radioGroupUncheckedIconColor || "action.active"
                }
              },
              "& .MuiFormControlLabel-label": {
                flex: "1 1 auto",
                minWidth: 0,
                overflow: "hidden",
                ...o.data.hideLabels && {
                  display: "none"
                }
              }
            },
            control: t.jsx($, {
              disabled: T(o.data),
              checkedIcon: e.icon ? t.jsxs(h, {
                sx: {
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: [
                  t.jsx(f, {
                    sx: {
                      color: e.iconColor,
                      position: "relative",
                      width: "100%",
                      height: "100%"
                    }
                  }),
                  t.jsx(h, {
                    sx: {
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    },
                    children: t.jsx(M, {
                      alt: "",
                      src: e.icon,
                      style: {
                        position: "relative",
                        left: `calc(0px + ${e.iconXOffset})`,
                        top: `calc(0px - ${e.iconYOffset})`,
                        width: `calc(${r.iconSizeOnly} * 0.5)`,
                        ...V(e.icon, e.iconColor, e.forceColorMask)
                      }
                    })
                  })
                ]
              }) : t.jsx(N, {
                sx: {
                  color: e.iconColor,
                  width: "100%",
                  height: "100%"
                }
              }),
              icon: t.jsx(f, {
                sx: {
                  width: "100%",
                  height: "100%"
                }
              }),
              sx: {
                color: o.data.radioGroupUncheckedIconColor,
                width: "100%",
                height: "100%",
                maxHeight: a ? l || void 0 : s,
                "& .MuiTouchRipple-root": {
                  color: o.data[`iconColor${u + 1}`] || o.data.iconColor || r.textColor
                },
                "& .MuiSvgIcon-root": {
                  width: "100%",
                  height: "100%",
                  maxHeight: a ? l || void 0 : s
                }
              },
              checked: String(e.value) === String(p),
              onChange: j,
              value: e.value
            }),
            label: o.data.hideLabels ? void 0 : t.jsx(_, {
              component: h,
              variant: "body2",
              sx: {
                width: "100%",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-word",
                fontSize: e.valueSize,
                textAlign: "left",
                background: m(e.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: m(e.textColor) ? "transparent" : e.textColor
              },
              contentEditable: "false",
              dangerouslySetInnerHTML: {
                __html: e.label
              }
            })
          }, u))
        })
      ]
    });
  }
  C = class extends I {
    static getWidgetInfo() {
      return {
        id: "tplRadioGroupCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "RadioGroupCollectionWidget",
        visWidgetLabel: "radio_group_collection_widget",
        visOrder: 6,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...g({
                groupName: "",
                allFields: true
              })
            ]
          },
          {
            name: "radioGroup",
            label: "radio_group",
            fields: [
              ...z([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...P(),
              ...E()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...g({
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
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-radio-group.png"
      };
    }
    getWidgetInfo() {
      return C.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(i, l) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i);
      const l = {
        id: i.id,
        refService: i.refService,
        style: i.style,
        widget: {
          data: this.state.rxData,
          style: this.state.rxStyle || {}
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
      return i.widget.data.noCard || i.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, F(this.wrapContent(t.jsx(A, {})), l);
    }
  };
});
export {
  __tla,
  C as default
};
