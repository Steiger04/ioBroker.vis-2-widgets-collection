import { j as o, C as n, t as C, x as I, A as v, E as w, v as s, T as S, z as c, S as d, y as r, G as f, H as x, J as M, K as k, __tla as __tla_0 } from "./useData-BxQArd1-.js";
import { u as j, d as D, __tla as __tla_1 } from "./useValueState-B97KqBJC.js";
import { v as A, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { u as L, __tla as __tla_3 } from "./useHtmlValue-3ISCcM5X.js";
import { F as _, __tla as __tla_4 } from "./FormControlLabel-4poVv3v7.js";
import { C as P, __tla as __tla_5 } from "./Checkbox-C7OTAW1S.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_6 } from "./SwitchBase-B7jK7VtH.js";
let p;
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
  })()
]).then(async () => {
  const W = () => [
    {
      type: "custom",
      component: () => o.jsx(n, {
        dividerText: "label"
      })
    },
    {
      name: "withoutLabel",
      label: "without_label",
      type: "checkbox",
      default: false
    },
    {
      name: "checkboxLabelPlacement",
      label: "checkbox_label_placement",
      type: "select",
      options: [
        {
          value: "top",
          label: "checkbox_top"
        },
        {
          value: "bottom",
          label: "checkbox_bottom"
        },
        {
          value: "start",
          label: "checkbox_start"
        },
        {
          value: "end",
          label: "checkbox_end"
        }
      ],
      default: "end",
      hidden: "data.withoutLabel"
    },
    {
      type: "custom",
      component: () => o.jsx(n, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (i) => !i.write,
      default: false,
      hidden: (i) => !i.write
    }
  ], m = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==", h = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==";
  function T() {
    const i = A.useContext(C), { widget: t, theme: l } = i, b = t.data.oidObject, { data: e } = I("oid"), { value: a, updateValue: g } = j("oid"), u = (b == null ? void 0 : b.type) === "boolean", y = L(a, t, e);
    return o.jsxs(v, {
      isValidType: u,
      data: e,
      oidValue: a,
      children: [
        o.jsx(w, {
          data: e,
          widget: t
        }),
        o.jsx(s, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: a !== void 0 && o.jsx(_, {
            labelPlacement: t.data.checkboxLabelPlacement,
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              "&.MuiFormControlLabel-labelPlacementStart": {
                m: 0
              },
              "&.MuiFormControlLabel-labelPlacementEnd": {
                m: 0
              },
              "&.MuiFormControlLabel-labelPlacementTop": {
                m: 0
              },
              "&.MuiFormControlLabel-labelPlacementBottom": {
                m: 0
              }
            },
            control: o.jsx(P, {
              disabled: t.data.onlyDisplay,
              disableRipple: true,
              checked: !!a,
              onChange: () => g(!a),
              checkedIcon: o.jsx(d, {
                alt: "",
                src: e.icon || m,
                style: {
                  objectFit: "contain",
                  width: `calc(100% * (${e.iconSize} / 24px))`,
                  height: `calc(100% * (${e.iconSize} / 24px))`,
                  ...r(e.icon || m, e.iconColor || l.palette.primary.main, e.forceColorMask)
                }
              }),
              icon: o.jsx(d, {
                alt: "",
                src: e.icon || h,
                style: {
                  objectFit: "contain",
                  width: `calc(100% * (${e.iconSize} / 24px))`,
                  height: `calc(100% * (${e.iconSize} / 24px))`,
                  ...r(e.icon || h, e.iconColor || l.palette.primary.main, e.forceColorMask)
                }
              }),
              sx: {
                left: e.iconXOffset,
                bottom: e.iconYOffset,
                objectFit: "contain",
                width: "100%",
                height: "100%",
                flexGrow: 1,
                p: 0,
                "& .MuiSvgIcon-root": {
                  width: "100%",
                  height: "100%"
                }
              }
            }),
            label: !t.data.withoutLabel && o.jsx(S, {
              component: s,
              variant: "body2",
              sx: {
                fontSize: e.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                background: c(e.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: c(e.textColor) ? "transparent" : e.textColor,
                textTransform: "none",
                px: 1,
                pl: 0,
                pr: 2,
                width: "100%",
                height: "100%",
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                whiteSpace: "normal",
                hyphens: "auto",
                "& > div": {
                  textAlign: "left",
                  display: "inline-block"
                }
              },
              dangerouslySetInnerHTML: {
                __html: `<div style="text-align: left; display: inline-block; width: 100%;">${y || ""}</div>`
              }
            })
          })
        })
      ]
    });
  }
  p = class extends f {
    static getWidgetInfo() {
      return {
        id: "tplCheckboxCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "CheckboxCollectionWidget",
        visWidgetLabel: "checkbox_collection_widget",
        visOrder: 1,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...x()
            ]
          },
          {
            name: "checkbox",
            label: "group_checkbox",
            fields: [
              ...M([
                "boolean"
              ]),
              ...D(),
              ...W()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...x({
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
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-checkbox.png"
      };
    }
    getWidgetInfo() {
      return p.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, l) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const l = {
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, k(this.wrapContent(o.jsx(T, {})), l);
    }
  };
});
export {
  __tla,
  p as default
};
