import { j as a, B as C, T as I, __tla as __tla_0 } from "./tinycolor-CLG1zgRY.js";
import { G as f, __tla as __tla_1 } from "./usePopoverPositioning-BenXbV4b.js";
import { e as d, C as v, u as w, a as S, g as M, c as r, w as k, __tla as __tla_2 } from "./useData-BTquM2A9.js";
import { g as j, C as D, S as A, c as _, __tla as __tla_3 } from "./CollectionBaseImage-V9l6RwxW.js";
import { u as W, d as T, __tla as __tla_4 } from "./useValueState-0S1Cr_pw.js";
import { v as s, __tla as __tla_5 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { u as L, __tla as __tla_6 } from "./useHtmlValue-3ISCcM5X.js";
import { i as N } from "./isOidReadOnly-CpnU56qh.js";
import { F as P, __tla as __tla_7 } from "./FormControlLabel-DAjdvuK4.js";
import { C as V, __tla as __tla_8 } from "./Checkbox-D0TknbxD.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import "./preload-helper-PPVm8Dsz.js";
import { __tla as __tla_9 } from "./Delete-VRvdIUoO.js";
import "./tslib.es6-F1e60Aum.js";
import { __tla as __tla_10 } from "./SwitchBase-D7Ymq-U2.js";
let h;
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
  })()
]).then(async () => {
  const G = () => [
    {
      type: "custom",
      component: () => a.jsx(d, {
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
      component: () => a.jsx(d, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (o) => o.write === false,
      default: false,
      hidden: (o) => o.write === false
    }
  ], x = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==", O = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==";
  function B(o) {
    if (!o) return {
      color: void 0
    };
    const t = M(o);
    return t ? {
      background: t,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    } : {
      color: o
    };
  }
  function m(o, t, i) {
    const n = o ? x : O;
    return a.jsx(A, {
      alt: "",
      src: t.icon || n,
      style: i
    });
  }
  function F() {
    const o = s.useContext(v);
    if (!o) throw new Error("CheckboxCollection must be used within a CollectionProvider");
    const t = o, { widget: i, theme: n } = t, p = i.data.oidObject, { data: e } = w("oid"), { value: l, updateValue: u } = W("oid"), g = (p == null ? void 0 : p.type) === "boolean", b = L(l, i, e), c = s.useMemo(() => ({
      objectFit: "contain",
      width: `calc(100% * (${e.iconSize} / 24px))`,
      height: `calc(100% * (${e.iconSize} / 24px))`,
      ...j(e.icon || x, e.iconColor || n.palette.primary.main, e.forceColorMask)
    }), [
      e.iconSize,
      e.icon,
      e.iconColor,
      e.forceColorMask,
      n.palette.primary.main
    ]), y = s.useMemo(() => B(e.textColor), [
      e.textColor
    ]);
    return a.jsxs(S, {
      isValidType: g,
      data: e,
      oidValue: l,
      children: [
        a.jsx(D, {
          data: e,
          widget: i
        }),
        a.jsx(C, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: l !== void 0 && a.jsx(P, {
            labelPlacement: i.data.checkboxLabelPlacement,
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              m: 0
            },
            control: a.jsx(V, {
              disabled: N(i.data),
              disableRipple: true,
              checked: !!l,
              onChange: () => u(!l),
              checkedIcon: m(true, e, c),
              icon: m(false, e, c),
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
            label: !i.data.withoutLabel && a.jsx(I, {
              component: "div",
              variant: "body2",
              sx: {
                fontSize: e.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                ...y,
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
                __html: `<div style="text-align: left; display: inline-block; width: 100%;">${b || ""}</div>`
              }
            })
          })
        })
      ]
    });
  }
  h = class extends f {
    static getWidgetInfo() {
      return {
        id: "tplCheckboxCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "CheckboxCollectionWidget",
        visWidgetLabel: "checkbox_collection_widget",
        visOrder: 2,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...r()
            ]
          },
          {
            name: "checkbox",
            label: "group_checkbox",
            fields: [
              ..._([
                "boolean"
              ]),
              ...T(),
              ...G()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...r({
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
      return h.getWidgetInfo();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, k(this.wrapContent(a.jsx(F, {})), i);
    }
  };
});
export {
  __tla,
  h as default
};
