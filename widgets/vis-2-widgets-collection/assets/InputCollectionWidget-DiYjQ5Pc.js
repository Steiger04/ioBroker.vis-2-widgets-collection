import { j as t, B as s, b as L, T as M, __tla as __tla_0 } from "./tinycolor-B_2EitDy.js";
import { G as U, __tla as __tla_1 } from "./usePopoverPositioning-CvdKfQR6.js";
import { e as k, C as $, u as H, a as K, g as I, c as B, w as Y, __tla as __tla_2 } from "./useData-90UeUAIS.js";
import { g as q, C as X, c as J, __tla as __tla_3 } from "./CollectionBaseImage-u_I-Uett.js";
import { u as Q, d as Z, __tla as __tla_4 } from "./useValueState-BAhi1BOX.js";
import { s as ee, __tla as __tla_5 } from "./stateFields-CrLFISO0.js";
import { v as o, __tla as __tla_6 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { u as te, __tla as __tla_7 } from "./useHtmlValue-3ISCcM5X.js";
import { i as ne } from "./isOidReadOnly-CpnU56qh.js";
import { I as ie, __tla as __tla_8 } from "./InputAdornment-BD4nhFBV.js";
import { B as oe, __tla as __tla_9 } from "./Button-CkZMtQvT.js";
import { A as ae, __tla as __tla_10 } from "./Avatar-p_Emr3oj.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_11 } from "./Delete-lESTXvkD.js";
import "./tslib.es6-F1e60Aum.js";
let O;
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
  })()
]).then(async () => {
  const c = (u) => {
    var _a;
    return ((_a = u.oidObject) == null ? void 0 : _a.type) !== "number";
  }, le = () => [
    {
      type: "custom",
      component: () => t.jsx(k, {
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
      component: () => t.jsx(k, {
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
  ]), re = () => {
    const u = o.useContext($), { widget: e, theme: r, widget: { data: { oidObject: p } } } = u, { data: n } = H("oid"), { value: a, updateValue: b, hasBackendChange: W } = Q("oid"), m = te(a, e, n), T = m != null ? String(m) : "", f = p == null ? void 0 : p.type, y = f !== void 0 && se.has(f), C = f === "number", D = ne(e.data), h = !!e.data.showOkButton, w = !D, d = n.textColor, A = e.data.inputVariant ?? "standard", g = n.icon, F = n.iconColor || r.palette.primary.main, P = q(g, F, !!n.forceColorMask), z = e.data.minValue !== void 0 ? Number(e.data.minValue) : void 0, N = e.data.maxValue !== void 0 ? Number(e.data.maxValue) : void 0, E = e.data.step !== void 0 ? Number(e.data.step) : void 0, x = a == null ? "" : String(a), [S, V] = o.useState(x), [l, v] = o.useState(false), _ = o.useRef(null);
    o.useEffect(() => {
      l || V(x);
    }, [
      x,
      l
    ]), o.useEffect(() => {
      var _a;
      l && ((_a = _.current) == null ? void 0 : _a.focus());
    }, [
      l
    ]);
    const R = () => {
      w && v(true);
    }, j = () => {
      v(false), b(S);
    }, G = !e.data.noIcon && !!g;
    return t.jsxs(K, {
      isValidType: y,
      data: n,
      oidValue: a,
      children: [
        t.jsx(X, {
          data: n,
          widget: e
        }),
        y ? l ? t.jsxs(s, {
          sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: Number(e.data.inputPadding)
          },
          children: [
            t.jsx(L, {
              inputRef: _,
              fullWidth: true,
              size: "small",
              variant: A,
              type: C ? "number" : "text",
              value: S,
              error: W,
              onChange: (i) => {
                V(i.target.value), h || b(i.target.value);
              },
              onBlur: () => {
                h ? j() : v(false);
              },
              onKeyDown: (i) => {
                i.key === "Enter" && i.target.blur();
              },
              slotProps: {
                input: {
                  endAdornment: (p == null ? void 0 : p.unit) ? t.jsx(ie, {
                    position: "end",
                    children: p.unit
                  }) : void 0
                },
                htmlInput: C ? {
                  step: E,
                  min: z,
                  max: N
                } : void 0
              },
              sx: {
                fontSize: n.valueSize,
                color: d
              }
            }),
            h && t.jsx(oe, {
              variant: "contained",
              size: "small",
              onMouseDown: (i) => i.preventDefault(),
              onClick: j,
              children: "OK"
            })
          ]
        }) : t.jsxs(s, {
          onClick: R,
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: w ? "text" : "default"
          },
          children: [
            G && t.jsx(s, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                width: "100%",
                height: "100%"
              },
              children: t.jsx(ae, {
                variant: "square",
                src: g || void 0,
                slotProps: {
                  img: {
                    style: {
                      objectFit: "contain",
                      ...P
                    }
                  }
                },
                sx: {
                  overflow: "visible",
                  width: n.iconSizeOnly,
                  height: n.iconSizeOnly,
                  left: `calc(0px + ${n.iconXOffset})`,
                  top: `calc(0px - ${n.iconYOffset})`
                }
              })
            }),
            !e.data.noValue && t.jsx(s, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                width: "100%",
                height: "100%"
              },
              children: t.jsx(M, {
                component: s,
                variant: "body2",
                sx: {
                  fontSize: n.valueSize,
                  textAlign: "center",
                  bgcolor: "transparent",
                  background: I(d),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: I(d) ? "transparent" : d,
                  textTransform: "none",
                  px: 1,
                  pl: 0,
                  pr: 1,
                  width: "100%",
                  height: "100%",
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                  __html: `<div style="text-align: left; display: inline-block;">${T || ""}</div>`
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  O = class extends U {
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
              ...J([
                "string",
                "number",
                "mixed"
              ]),
              ...Z(),
              ...le(),
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
      return O.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(e, r) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const r = {
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, Y(this.wrapContent(t.jsx(re, {})), r);
    }
  };
});
export {
  __tla,
  O as default
};
