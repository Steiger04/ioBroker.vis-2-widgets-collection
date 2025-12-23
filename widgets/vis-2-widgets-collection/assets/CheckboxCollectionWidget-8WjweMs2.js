import { c as y, j as a, a as N, g as V, u as W, b as B, U as R, d as H, s as $, i as h, e as G, r as E, m as U, o as w, O as k, C as M, q as J, x as Z, y as Q, v as Y, A as X, E as q, w as j, T as K, z as P, G as ee, H as A, J as te, K as oe, L as ae, __tla as __tla_0 } from "./commonFields-Dc3dYGx-.js";
import { v as m, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as ie, __tla as __tla_2 } from "./useHtmlValue-Dcwl_hqT.js";
import { F as le, __tla as __tla_3 } from "./FormControlLabel-CHae4jKA.js";
import { S as ne, __tla as __tla_4 } from "./SwitchBase-C4gssu33.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import "./formControlState-Dq1zat_P.js";
import { __tla as __tla_5 } from "./useFormControl--TM4wVzV.js";
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
  ]), pe = (e) => {
    const { classes: t, indeterminate: i, color: n, size: s } = e, c = {
      root: [
        "root",
        i && "indeterminate",
        `color${h(n)}`,
        `size${h(s)}`
      ]
    }, o = G(c, de, t);
    return {
      ...t,
      ...o
    };
  }, me = $(ne, {
    shouldForwardProp: (e) => E(e) || e === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: i } = e;
      return [
        t.root,
        i.indeterminate && t.indeterminate,
        t[`size${h(i.size)}`],
        i.color !== "default" && t[`color${h(i.color)}`]
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
  }))), he = a.jsx(ce, {}), ue = a.jsx(se, {}), xe = a.jsx(re, {}), be = m.forwardRef(function(t, i) {
    const n = W({
      props: t,
      name: "MuiCheckbox"
    }), { checkedIcon: s = he, color: c = "primary", icon: o = ue, indeterminate: l = false, indeterminateIcon: d = xe, inputProps: v, size: r = "medium", disableRipple: p = false, className: L, slots: C = {}, slotProps: g = {}, ..._ } = n, I = l ? d : o, S = l ? d : s, u = {
      ...n,
      disableRipple: p,
      color: c,
      indeterminate: l,
      size: r
    }, f = pe(u), x = g.input ?? v, [T, F] = B("root", {
      ref: i,
      elementType: me,
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
        icon: m.cloneElement(I, {
          fontSize: I.props.fontSize ?? r
        }),
        checkedIcon: m.cloneElement(S, {
          fontSize: S.props.fontSize ?? r
        }),
        disableRipple: p,
        slots: C,
        slotProps: {
          input: R(typeof x == "function" ? x(u) : x, {
            "data-indeterminate": l
          })
        }
      }
    });
    return a.jsx(T, {
      ...F,
      classes: f
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
  ], z = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==", D = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==";
  function ve() {
    const e = m.useContext(J), { widget: t, theme: i } = e, n = t.data.oidObject, { textStyles: s, fontStyles: c } = Z(t.style), { data: o } = Q("oid"), { value: l, updateValue: d } = Y("oid"), r = (n == null ? void 0 : n.type) === "boolean", p = ie(l, t, o);
    return a.jsxs(X, {
      isValidType: r,
      data: o,
      oidValue: l,
      children: [
        a.jsx(q, {
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
          children: l !== void 0 && a.jsx(le, {
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
            control: a.jsx(be, {
              disabled: t.data.onlyDisplay,
              disableRipple: true,
              checked: !!l,
              onChange: () => d(!l),
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
            label: !t.data.withoutLabel && a.jsx(K, {
              component: j,
              variant: "body2",
              sx: {
                ...c,
                ...s,
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
                __html: `<div style="text-align: center; display: inline-block; width: 100%;">${p || ""}</div>`
              }
            })
          })
        })
      ]
    });
  }
  O = class extends ee {
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
              ...te([
                "boolean"
              ]),
              ...oe(),
              ...ye()
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ae(this.wrapContent(a.jsx(ve, {})), i);
    }
  };
});
export {
  __tla,
  O as default
};
