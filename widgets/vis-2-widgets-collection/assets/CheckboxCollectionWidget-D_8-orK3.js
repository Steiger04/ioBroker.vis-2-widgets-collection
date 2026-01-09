import { c as y, j as a, a as N, g as V, u as W, b as B, a0 as R, d as H, s as $, i as p, e as G, r as E, m as U, o as w, Y as k, C as M, v as Z, y as J, A as Y, w as j, T as Q, z as P, G as X, E as A, H as q, __tla as __tla_0 } from "./useData-D7RiYKJn.js";
import { C as K, c as ee, __tla as __tla_1 } from "./CollectionBaseImage-DtLpy4OM.js";
import { u as te, d as oe, __tla as __tla_2 } from "./useValueState-O1j7ZVnY.js";
import { v as d, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as ae, __tla as __tla_4 } from "./useHtmlValue-Dcwl_hqT.js";
import { F as ie, __tla as __tla_5 } from "./FormControlLabel-DdFHKCUM.js";
import { S as le, __tla as __tla_6 } from "./SwitchBase-BeDe1_LB.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
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
  })()
]).then(async () => {
  const ne = y(a.jsx("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }), "CheckBoxOutlineBlank"), se = y(a.jsx("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckBox"), ce = y(a.jsx("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  }), "IndeterminateCheckBox");
  function re(e) {
    return V("MuiCheckbox", e);
  }
  const b = N("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium"
  ]), de = (e) => {
    const { classes: t, indeterminate: i, color: n, size: o } = e, l = {
      root: [
        "root",
        i && "indeterminate",
        `color${p(n)}`,
        `size${p(o)}`
      ]
    }, s = G(l, re, t);
    return {
      ...t,
      ...s
    };
  }, pe = $(le, {
    shouldForwardProp: (e) => E(e) || e === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: i } = e;
      return [
        t.root,
        i.indeterminate && t.indeterminate,
        t[`size${p(i.size)}`],
        i.color !== "default" && t[`color${p(i.color)}`]
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
            backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : w(e.palette.action.active, e.palette.action.hoverOpacity)
          }
        }
      },
      ...Object.entries(e.palette).filter(k()).map(([t]) => ({
        props: {
          color: t,
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : w(e.palette[t].main, e.palette.action.hoverOpacity)
          }
        }
      })),
      ...Object.entries(e.palette).filter(k()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          [`&.${b.checked}, &.${b.indeterminate}`]: {
            color: (e.vars || e).palette[t].main
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
  }))), me = a.jsx(se, {}), he = a.jsx(ne, {}), ue = a.jsx(ce, {}), xe = d.forwardRef(function(t, i) {
    const n = W({
      props: t,
      name: "MuiCheckbox"
    }), { checkedIcon: o = me, color: l = "primary", icon: s = he, indeterminate: c = false, indeterminateIcon: r = ue, inputProps: m, size: h = "medium", disableRipple: v = false, className: L, slots: C = {}, slotProps: g = {}, ..._ } = n, I = c ? r : s, S = c ? r : o, u = {
      ...n,
      disableRipple: v,
      color: l,
      indeterminate: c,
      size: h
    }, f = de(u), x = g.input ?? m, [T, F] = B("root", {
      ref: i,
      elementType: pe,
      className: H(f.root, L),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: C,
        slotProps: g,
        ..._
      },
      ownerState: u,
      additionalProps: {
        type: "checkbox",
        icon: d.cloneElement(I, {
          fontSize: I.props.fontSize ?? h
        }),
        checkedIcon: d.cloneElement(S, {
          fontSize: S.props.fontSize ?? h
        }),
        disableRipple: v,
        slots: C,
        slotProps: {
          input: R(typeof x == "function" ? x(u) : x, {
            "data-indeterminate": c
          })
        }
      }
    });
    return a.jsx(T, {
      ...F,
      classes: f
    });
  }), be = () => [
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
  ], z = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==", D = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==";
  function ye() {
    const e = d.useContext(Z), { widget: t, theme: i } = e, n = t.data.oidObject, { data: o } = J("oid"), { value: l, updateValue: s } = te("oid"), r = (n == null ? void 0 : n.type) === "boolean", m = ae(l, t, o);
    return a.jsxs(Y, {
      isValidType: r,
      data: o,
      oidValue: l,
      children: [
        a.jsx(K, {
          data: o,
          widget: t
        }),
        a.jsx(j, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: l !== void 0 && a.jsx(ie, {
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
            control: a.jsx(xe, {
              disabled: t.data.onlyDisplay,
              disableRipple: true,
              checked: !!l,
              onChange: () => s(!l),
              checkedIcon: a.jsx("img", {
                alt: "",
                src: o.iconActive || z,
                style: {
                  width: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                  height: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                  objectFit: "contain",
                  ...P(o.iconActive || z, o.iconColorActive || o.iconColor || i.palette.primary.main)
                }
              }),
              icon: a.jsx("img", {
                alt: "",
                src: o.iconActive || D,
                style: {
                  width: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                  height: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                  objectFit: "contain",
                  ...P(o.iconActive || D, o.iconColorActive || o.iconColor || i.palette.primary.main)
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
            label: !t.data.withoutLabel && a.jsx(Q, {
              component: j,
              variant: "body2",
              sx: {
                fontSize: o.valueSizeActive || o.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                color: o.textColorActive || o.textColor,
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
  O = class extends X {
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
              ...A()
            ]
          },
          {
            name: "checkbox",
            label: "group_checkbox",
            fields: [
              ...ee([
                "boolean"
              ]),
              ...oe(),
              ...be()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...A({
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
      return O.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, i) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, q(this.wrapContent(a.jsx(ye, {})), i);
    }
  };
});
export {
  __tla,
  O as default
};
