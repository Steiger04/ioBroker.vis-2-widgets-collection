import { c as y, j as a, a as F, g as N, u as V, b as R, a3 as $, d as H, s as G, i as p, e as E, r as J, m as U, o as k, $ as w, C as M, v as Z, y as Q, E as Y, G as X, w as j, T as K, A, z as P, H as q, J as z, K as ee, __tla as __tla_0 } from "./useData-vpnuohUP.js";
import { c as te, __tla as __tla_1 } from "./commonObjectFields-DfDz2RT7.js";
import { u as oe, d as ae, __tla as __tla_2 } from "./useValueState-xh8B4_VZ.js";
import { v as d, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as ie, __tla as __tla_4 } from "./useHtmlValue-Dcwl_hqT.js";
import { F as le, __tla as __tla_5 } from "./FormControlLabel-CfFmAdzs.js";
import { S as ne, __tla as __tla_6 } from "./SwitchBase-g6pb4xzk.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let L;
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
  const se = y(a.jsx("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }), "CheckBoxOutlineBlank"), ce = y(a.jsx("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckBox"), re = y(a.jsx("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  }), "IndeterminateCheckBox");
  function de(e) {
    return N("MuiCheckbox", e);
  }
  const b = F("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium"
  ]), pe = (e) => {
    const { classes: o, indeterminate: i, color: n, size: t } = e, l = {
      root: [
        "root",
        i && "indeterminate",
        `color${p(n)}`,
        `size${p(t)}`
      ]
    }, s = E(l, de, o);
    return {
      ...o,
      ...s
    };
  }, me = G(ne, {
    shouldForwardProp: (e) => J(e) || e === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (e, o) => {
      const { ownerState: i } = e;
      return [
        o.root,
        i.indeterminate && o.indeterminate,
        o[`size${p(i.size)}`],
        i.color !== "default" && o[`color${p(i.color)}`]
      ];
    }
  })(U(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    variants: [
      {
        props: {
          color: "default",
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : k(e.palette.action.active, e.palette.action.hoverOpacity)
          }
        }
      },
      ...Object.entries(e.palette).filter(w()).map(([o]) => ({
        props: {
          color: o,
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : k(e.palette[o].main, e.palette.action.hoverOpacity)
          }
        }
      })),
      ...Object.entries(e.palette).filter(w()).map(([o]) => ({
        props: {
          color: o
        },
        style: {
          [`&.${b.checked}, &.${b.indeterminate}`]: {
            color: (e.vars || e).palette[o].main
          },
          [`&.${b.disabled}`]: {
            color: (e.vars || e).palette.action.disabled
          }
        }
      })),
      {
        props: {
          disableRipple: false
        },
        style: {
          "&:hover": {
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          }
        }
      }
    ]
  }))), he = a.jsx(ce, {}), ue = a.jsx(se, {}), xe = a.jsx(re, {}), be = d.forwardRef(function(o, i) {
    const n = V({
      props: o,
      name: "MuiCheckbox"
    }), { checkedIcon: t = he, color: l = "primary", icon: s = ue, indeterminate: c = false, indeterminateIcon: r = xe, inputProps: m, size: h = "medium", disableRipple: C = false, className: _, slots: v = {}, slotProps: g = {}, ...T } = n, I = c ? r : s, f = c ? r : t, u = {
      ...n,
      disableRipple: C,
      color: l,
      indeterminate: c,
      size: h
    }, S = pe(u), x = g.input ?? m, [W, B] = R("root", {
      ref: i,
      elementType: me,
      className: H(S.root, _),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: v,
        slotProps: g,
        ...T
      },
      ownerState: u,
      additionalProps: {
        type: "checkbox",
        icon: d.cloneElement(I, {
          fontSize: I.props.fontSize ?? h
        }),
        checkedIcon: d.cloneElement(f, {
          fontSize: f.props.fontSize ?? h
        }),
        disableRipple: C,
        slots: v,
        slotProps: {
          input: $(typeof x == "function" ? x(u) : x, {
            "data-indeterminate": c
          })
        }
      }
    });
    return a.jsx(W, {
      ...B,
      classes: S
    });
  }), ye = () => [
    {
      type: "custom",
      component: () => a.jsx(M, {
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
      component: () => a.jsx(M, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (e) => !e.write,
      default: false,
      hidden: (e) => !e.write
    }
  ], D = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==", O = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==";
  function Ce() {
    const e = d.useContext(Z), { widget: o, theme: i } = e, n = o.data.oidObject, { data: t } = Q("oid"), { value: l, updateValue: s } = oe("oid"), r = (n == null ? void 0 : n.type) === "boolean", m = ie(l, o, t);
    return a.jsxs(Y, {
      isValidType: r,
      data: t,
      oidValue: l,
      children: [
        a.jsx(X, {
          data: t,
          widget: o
        }),
        a.jsx(j, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: l !== void 0 && a.jsx(le, {
            labelPlacement: o.data.checkboxLabelPlacement,
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
            control: a.jsx(be, {
              disabled: o.data.onlyDisplay,
              disableRipple: true,
              checked: !!l,
              onChange: () => s(!l),
              checkedIcon: a.jsx("img", {
                alt: "",
                src: t.iconActive || D,
                style: {
                  width: typeof t.iconSizeOnly == "number" && `calc(100% * ${t.iconSizeOnly} / 100)` || "100%",
                  height: typeof t.iconSizeOnly == "number" && `calc(100% * ${t.iconSizeOnly} / 100)` || "100%",
                  objectFit: "contain",
                  ...P(t.iconActive || D, t.iconColorActive || t.iconColor || i.palette.primary.main, t.forceColorMaskActive ?? false)
                }
              }),
              icon: a.jsx("img", {
                alt: "",
                src: t.iconActive || O,
                style: {
                  width: typeof t.iconSizeOnly == "number" && `calc(100% * ${t.iconSizeOnly} / 100)` || "100%",
                  height: typeof t.iconSizeOnly == "number" && `calc(100% * ${t.iconSizeOnly} / 100)` || "100%",
                  objectFit: "contain",
                  ...P(t.iconActive || O, t.iconColorActive || t.iconColor || i.palette.primary.main, t.forceColorMaskActive ?? false)
                }
              }),
              sx: {
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
            label: !o.data.withoutLabel && a.jsx(K, {
              component: j,
              variant: "body2",
              sx: {
                fontSize: t.valueSizeActive || t.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                background: A(t.textColorActive || t.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: A(t.textColorActive || t.textColor) ? "transparent" : t.textColorActive || t.textColor,
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
                __html: `<div style="text-align: center; display: inline-block; width: 100%;">${m || ""}</div>`
              }
            })
          })
        })
      ]
    });
  }
  L = class extends q {
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
              ...z()
            ]
          },
          {
            name: "checkbox",
            label: "group_checkbox",
            fields: [
              ...te([
                "boolean"
              ]),
              ...ae(),
              ...ye()
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
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-checkbox.png"
      };
    }
    getWidgetInfo() {
      return L.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(o, i) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(o) {
      super.renderWidgetBody(o);
      const i = {
        id: o.id,
        refService: o.refService,
        style: o.style,
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
      return o.widget.data.noCard || o.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ee(this.wrapContent(a.jsx(Ce, {})), i);
    }
  };
});
export {
  __tla,
  L as default
};
