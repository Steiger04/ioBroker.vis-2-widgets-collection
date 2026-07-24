import { j as t, l as r, o as M, T as U, G as $, __tla as __tla_0 } from "./usePopoverPositioning-CABAc1cn.js";
import { i as I, C as G, u as H, g as K, b as Y, c as q, a as k, d as B, e as X, w as J, __tla as __tla_1 } from "./useData-CnVVm3xV.js";
import { u as Q, d as Z, __tla as __tla_2 } from "./useValueState-BG7PYSLA.js";
import { s as ee, __tla as __tla_3 } from "./stateFields-Dq1EHf6B.js";
import { v as o, __tla as __tla_4 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { u as te, __tla as __tla_5 } from "./useHtmlValue-3ISCcM5X.js";
import { I as ne, __tla as __tla_6 } from "./InputAdornment-BJLfrPsE.js";
import { B as ie, __tla as __tla_7 } from "./Button-P09M-Ww3.js";
import { A as oe, __tla as __tla_8 } from "./Avatar-BH9MFjYI.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let W;
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
  })()
]).then(async () => {
  const c = (u) => {
    var _a;
    return ((_a = u.oidObject) == null ? void 0 : _a.type) !== "number";
  }, ae = () => [
    {
      type: "custom",
      component: () => t.jsx(I, {
        dividerText: "input"
      })
    },
    {
      name: "showOkButton",
      type: "checkbox",
      label: "show_ok_button",
      default: false,
      tooltip: "show_ok_button_tooltip"
    },
    {
      name: "inputVariant",
      type: "select",
      label: "input_variant",
      default: "standard",
      options: [
        {
          value: "standard",
          label: "variant_standard"
        },
        {
          value: "outlined",
          label: "variant_outlined"
        },
        {
          value: "filled",
          label: "variant_filled"
        }
      ]
    },
    {
      name: "inputPadding",
      type: "number",
      label: "input_padding",
      default: 1,
      min: 0,
      step: 0.5
    },
    {
      type: "custom",
      component: () => t.jsx(I, {
        dividerText: "number"
      }),
      hidden: c
    },
    {
      name: "step",
      type: "number",
      label: "step",
      default: 1,
      min: 0,
      hidden: c
    },
    {
      name: "minValue",
      type: "number",
      label: "min_value",
      hidden: c
    },
    {
      name: "maxValue",
      type: "number",
      label: "max_value",
      hidden: c
    }
  ], se = /* @__PURE__ */ new Set([
    "string",
    "number",
    "mixed"
  ]), le = () => {
    const u = o.useContext(G), { widget: e, theme: l, widget: { data: { oidObject: p } } } = u, { data: n } = H("oid"), { value: a, updateValue: b, hasBackendChange: D } = Q("oid"), m = te(a, e, n), O = m != null ? String(m) : "", x = p == null ? void 0 : p.type, y = x !== void 0 && se.has(x), C = x === "number", T = !!(e.data.onlyDisplay ?? !e.data.write), f = !!e.data.showOkButton, w = !T, d = n.textColor, F = e.data.inputVariant ?? "standard", h = n.icon, P = n.iconColor || l.palette.primary.main, z = K(h, P, !!n.forceColorMask), A = e.data.minValue !== void 0 ? Number(e.data.minValue) : void 0, N = e.data.maxValue !== void 0 ? Number(e.data.maxValue) : void 0, E = e.data.step !== void 0 ? Number(e.data.step) : void 0, g = a == null ? "" : String(a), [S, V] = o.useState(g), [s, v] = o.useState(false), _ = o.useRef(null);
    o.useEffect(() => {
      s || V(g);
    }, [
      g,
      s
    ]), o.useEffect(() => {
      var _a;
      s && ((_a = _.current) == null ? void 0 : _a.focus());
    }, [
      s
    ]);
    const R = () => {
      w && v(true);
    }, j = () => {
      v(false), b(S);
    }, L = !e.data.noIcon && !!h;
    return t.jsxs(Y, {
      isValidType: y,
      data: n,
      oidValue: a,
      children: [
        t.jsx(q, {
          data: n,
          widget: e
        }),
        y ? s ? t.jsxs(r, {
          sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: Number(e.data.inputPadding)
          },
          children: [
            t.jsx(M, {
              inputRef: _,
              fullWidth: true,
              size: "small",
              variant: F,
              type: C ? "number" : "text",
              value: S,
              error: D,
              onChange: (i) => {
                V(i.target.value), f || b(i.target.value);
              },
              onBlur: () => {
                f ? j() : v(false);
              },
              onKeyDown: (i) => {
                i.key === "Enter" && i.target.blur();
              },
              slotProps: {
                input: {
                  endAdornment: (p == null ? void 0 : p.unit) ? t.jsx(ne, {
                    position: "end",
                    children: p.unit
                  }) : void 0
                },
                htmlInput: C ? {
                  step: E,
                  min: A,
                  max: N
                } : void 0
              },
              sx: {
                fontSize: n.valueSize,
                color: d
              }
            }),
            f && t.jsx(ie, {
              variant: "contained",
              size: "small",
              onMouseDown: (i) => i.preventDefault(),
              onClick: j,
              children: "OK"
            })
          ]
        }) : t.jsxs(r, {
          onClick: R,
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            cursor: w ? "text" : "default"
          },
          children: [
            L && t.jsx(r, {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              },
              children: t.jsx(oe, {
                variant: "square",
                src: h || void 0,
                slotProps: {
                  img: {
                    style: {
                      objectFit: "contain",
                      ...z
                    }
                  }
                },
                sx: {
                  overflow: "visible",
                  width: n.iconSize,
                  height: n.iconSize,
                  left: `calc(0px + ${n.iconXOffset})`,
                  top: `calc(0px - ${n.iconYOffset})`
                }
              })
            }),
            t.jsx(r, {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "100%",
                overflow: "hidden"
              },
              children: !e.data.noValue && t.jsx(U, {
                component: "span",
                variant: "body2",
                sx: {
                  fontSize: n.valueSize,
                  textAlign: "center",
                  bgcolor: "transparent",
                  background: k(d),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: k(d) ? "transparent" : d,
                  textTransform: "none",
                  maxWidth: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                dangerouslySetInnerHTML: {
                  __html: `<span style="text-align: center; display: inline-block;">${O || ""}</span>`
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  W = class extends $ {
    static getWidgetInfo() {
      return {
        id: "tplInputCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visSetColor: "#0C0A43",
        visName: "InputCollectionWidget",
        visWidgetLabel: "input_collection_widget",
        visOrder: 1,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...B()
            ]
          },
          {
            name: "input",
            label: "group_input",
            fields: [
              ...X([
                "string",
                "number",
                "mixed"
              ]),
              ...Z(),
              ...ae(),
              ...ee({
                onlyStates: false
              })
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...B({
                groupName: "",
                allFields: false
              })
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "80px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-input.png"
      };
    }
    getWidgetInfo() {
      return W.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(e, l) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const l = {
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, J(this.wrapContent(t.jsx(le, {})), l);
    }
  };
});
export {
  __tla,
  W as default
};
