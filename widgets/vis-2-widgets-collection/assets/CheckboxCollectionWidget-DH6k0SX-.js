import { c as C, j as a, a as O, g as V, u as R, b as H, a6 as $, d as G, s as E, i as p, e as J, r as Z, m as U, o as k, a2 as w, C as M, v as Y, y as Q, E as X, G as K, w as j, T as q, A as P, S as D, z, H as ee, J as A, K as te, N as oe, __tla as __tla_0 } from "./useData-Ch9c1PRV.js";
import { u as ae, d as ie, __tla as __tla_1 } from "./useValueState-CLMabNs9.js";
import { v as d, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { u as le, __tla as __tla_3 } from "./useHtmlValue-3ISCcM5X.js";
import { F as ne, __tla as __tla_4 } from "./FormControlLabel-Co4ZhhDq.js";
import { S as se, __tla as __tla_5 } from "./SwitchBase-BJ6mn00q.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let F;
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
  const ce = C(a.jsx("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }), "CheckBoxOutlineBlank"), re = C(a.jsx("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckBox"), de = C(a.jsx("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  }), "IndeterminateCheckBox");
  function pe(e) {
    return V("MuiCheckbox", e);
  }
  const b = O("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium"
  ]), me = (e) => {
    const { classes: t, indeterminate: i, color: n, size: o } = e, l = {
      root: [
        "root",
        i && "indeterminate",
        `color${p(n)}`,
        `size${p(o)}`
      ]
    }, s = J(l, pe, t);
    return {
      ...t,
      ...s
    };
  }, xe = E(se, {
    shouldForwardProp: (e) => Z(e) || e === "classes",
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
            backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : k(e.palette.action.active, e.palette.action.hoverOpacity)
          }
        }
      },
      ...Object.entries(e.palette).filter(w()).map(([t]) => ({
        props: {
          color: t,
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : k(e.palette[t].main, e.palette.action.hoverOpacity)
          }
        }
      })),
      ...Object.entries(e.palette).filter(w()).map(([t]) => ({
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
  }))), he = a.jsx(re, {}), ue = a.jsx(ce, {}), be = a.jsx(de, {}), Ce = d.forwardRef(function(t, i) {
    const n = R({
      props: t,
      name: "MuiCheckbox"
    }), { checkedIcon: o = he, color: l = "primary", icon: s = ue, indeterminate: c = false, indeterminateIcon: r = be, inputProps: m, size: x = "medium", disableRipple: g = false, className: N, slots: y = {}, slotProps: v = {}, ...T } = n, I = c ? r : s, f = c ? r : o, h = {
      ...n,
      disableRipple: g,
      color: l,
      indeterminate: c,
      size: x
    }, S = me(h), u = v.input ?? m, [W, B] = H("root", {
      ref: i,
      elementType: xe,
      className: G(S.root, N),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: y,
        slotProps: v,
        ...T
      },
      ownerState: h,
      additionalProps: {
        type: "checkbox",
        icon: d.cloneElement(I, {
          fontSize: I.props.fontSize ?? x
        }),
        checkedIcon: d.cloneElement(f, {
          fontSize: f.props.fontSize ?? x
        }),
        disableRipple: g,
        slots: y,
        slotProps: {
          input: $(typeof u == "function" ? u(h) : u, {
            "data-indeterminate": c
          })
        }
      }
    });
    return a.jsx(W, {
      ...B,
      classes: S
    });
  }), ge = () => [
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
  ], L = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==", _ = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==";
  function ye() {
    const e = d.useContext(Y), { widget: t, theme: i } = e, n = t.data.oidObject, { data: o } = Q("oid"), { value: l, updateValue: s } = ae("oid"), r = (n == null ? void 0 : n.type) === "boolean", m = le(l, t, o);
    return a.jsxs(X, {
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
          children: l !== void 0 && a.jsx(ne, {
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
            control: a.jsx(Ce, {
              disabled: t.data.onlyDisplay,
              disableRipple: true,
              checked: !!l,
              onChange: () => s(!l),
              checkedIcon: a.jsx(D, {
                alt: "",
                src: o.icon || L,
                style: {
                  objectFit: "contain",
                  width: `calc(100% * (${o.iconSize} / 24px))`,
                  height: `calc(100% * (${o.iconSize} / 24px))`,
                  ...z(o.icon || L, o.iconColor || i.palette.primary.main, o.forceColorMask)
                }
              }),
              icon: a.jsx(D, {
                alt: "",
                src: o.icon || _,
                style: {
                  objectFit: "contain",
                  width: `calc(100% * (${o.iconSize} / 24px))`,
                  height: `calc(100% * (${o.iconSize} / 24px))`,
                  ...z(o.icon || _, o.iconColor || i.palette.primary.main, o.forceColorMask)
                }
              }),
              sx: {
                left: o.iconXOffset,
                bottom: o.iconYOffset,
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
            label: !t.data.withoutLabel && a.jsx(q, {
              component: j,
              variant: "body2",
              sx: {
                fontSize: o.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                background: P(o.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: P(o.textColor) ? "transparent" : o.textColor,
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
                __html: `<div style="text-align: left; display: inline-block; width: 100%;">${m || ""}</div>`
              }
            })
          })
        })
      ]
    });
  }
  F = class extends ee {
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
              ...ie(),
              ...ge()
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
      return F.getWidgetInfo();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, oe(this.wrapContent(a.jsx(ye, {})), i);
    }
  };
});
export {
  __tla,
  F as default
};
