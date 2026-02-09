import { c as C, j as a, a as O, g as V, u as R, b as H, a4 as $, d as G, s as E, i as p, e as J, r as U, m as Z, o as k, a0 as w, C as M, v as Y, A as Q, E as X, w as j, T as K, z as P, S as D, y as z, G as q, H as A, J as ee, K as te, __tla as __tla_0 } from "./CollectionBaseImage-CMDyRI6z.js";
import { u as oe, d as ae, __tla as __tla_1 } from "./useValueState-BHrGvNaa.js";
import { v as d, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as ie, __tla as __tla_3 } from "./useHtmlValue-Dcwl_hqT.js";
import { F as le, __tla as __tla_4 } from "./FormControlLabel-Bh1aofuX.js";
import { S as ne, __tla as __tla_5 } from "./SwitchBase-CI-PgTMb.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_6 } from "./useData-EvQhohzn.js";
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
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })()
]).then(async () => {
  const se = C(a.jsx("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }), "CheckBoxOutlineBlank"), ce = C(a.jsx("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckBox"), re = C(a.jsx("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  }), "IndeterminateCheckBox");
  function de(e) {
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
  ]), pe = (e) => {
    const { classes: t, indeterminate: i, color: n, size: o } = e, l = {
      root: [
        "root",
        i && "indeterminate",
        `color${p(n)}`,
        `size${p(o)}`
      ]
    }, s = J(l, de, t);
    return {
      ...t,
      ...s
    };
  }, me = E(ne, {
    shouldForwardProp: (e) => U(e) || e === "classes",
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
  })(Z(({ theme: e }) => ({
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
  }))), he = a.jsx(ce, {}), xe = a.jsx(se, {}), ue = a.jsx(re, {}), be = d.forwardRef(function(t, i) {
    const n = R({
      props: t,
      name: "MuiCheckbox"
    }), { checkedIcon: o = he, color: l = "primary", icon: s = xe, indeterminate: c = false, indeterminateIcon: r = ue, inputProps: m, size: h = "medium", disableRipple: g = false, className: T, slots: y = {}, slotProps: v = {}, ...W } = n, I = c ? r : s, f = c ? r : o, x = {
      ...n,
      disableRipple: g,
      color: l,
      indeterminate: c,
      size: h
    }, S = pe(x), u = v.input ?? m, [B, N] = H("root", {
      ref: i,
      elementType: me,
      className: G(S.root, T),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: y,
        slotProps: v,
        ...W
      },
      ownerState: x,
      additionalProps: {
        type: "checkbox",
        icon: d.cloneElement(I, {
          fontSize: I.props.fontSize ?? h
        }),
        checkedIcon: d.cloneElement(f, {
          fontSize: f.props.fontSize ?? h
        }),
        disableRipple: g,
        slots: y,
        slotProps: {
          input: $(typeof u == "function" ? u(x) : u, {
            "data-indeterminate": c
          })
        }
      }
    });
    return a.jsx(B, {
      ...N,
      classes: S
    });
  }), Ce = () => [
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
  function ge() {
    const e = d.useContext(Y), { widget: t, theme: i } = e, n = t.data.oidObject, { data: o } = useData("oid"), { value: l, updateValue: s } = oe("oid"), r = (n == null ? void 0 : n.type) === "boolean", m = ie(l, t, o);
    return a.jsxs(Q, {
      isValidType: r,
      data: o,
      oidValue: l,
      children: [
        a.jsx(X, {
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
            label: !t.data.withoutLabel && a.jsx(K, {
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
                __html: `<div style="text-align: center; display: inline-block; width: 100%;">${m || ""}</div>`
              }
            })
          })
        })
      ]
    });
  }
  F = class extends q {
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
              ...ae(),
              ...Ce()
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, te(this.wrapContent(a.jsx(ge, {})), i);
    }
  };
});
export {
  __tla,
  F as default
};
