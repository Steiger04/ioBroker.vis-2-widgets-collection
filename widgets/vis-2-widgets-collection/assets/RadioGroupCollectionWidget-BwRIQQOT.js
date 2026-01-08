import { c as b, j as i, s as y, r as V, m as D, a as q, g as J, u as K, $ as X, a0 as Y, b as Q, d as ee, i as v, e as te, o as F, R as U, C, Z as oe, v as ae, z as ie, w as ne, E as se, G as le, T as re, x as O, A as de, H as ce, J as W, K as pe, N as ue, O as he, __tla as __tla_0 } from "./commonFields-DH-obq-U.js";
import { v as u, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as me, __tla as __tla_2 } from "./Stack-DsAoxzWO.js";
import { F as ge, __tla as __tla_3 } from "./FormControlLabel-im8OHbOd.js";
import { S as fe, __tla as __tla_4 } from "./SwitchBase-pT8B3nuc.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let N;
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
  })()
]).then(async () => {
  const xe = b(i.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "RadioButtonUnchecked"), Ce = b(i.jsx("path", {
    d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
  }), "RadioButtonChecked"), ve = y("span", {
    name: "MuiRadioButtonIcon",
    shouldForwardProp: V
  })({
    position: "relative",
    display: "flex"
  }), be = y(xe, {
    name: "MuiRadioButtonIcon"
  })({
    transform: "scale(1)"
  }), ye = y(Ce, {
    name: "MuiRadioButtonIcon"
  })(D(({ theme: e }) => ({
    left: 0,
    position: "absolute",
    transform: "scale(0)",
    transition: e.transitions.create("transform", {
      easing: e.transitions.easing.easeIn,
      duration: e.transitions.duration.shortest
    }),
    variants: [
      {
        props: {
          checked: true
        },
        style: {
          transform: "scale(1)",
          transition: e.transitions.create("transform", {
            easing: e.transitions.easing.easeOut,
            duration: e.transitions.duration.shortest
          })
        }
      }
    ]
  })));
  function T(e) {
    const { checked: t = false, classes: o = {}, fontSize: s } = e, r = {
      ...e,
      checked: t
    };
    return i.jsxs(ve, {
      className: o.root,
      ownerState: r,
      children: [
        i.jsx(be, {
          fontSize: s,
          className: o.background,
          ownerState: r
        }),
        i.jsx(ye, {
          fontSize: s,
          className: o.dot,
          ownerState: r
        })
      ]
    });
  }
  const Se = u.createContext(void 0);
  function we() {
    return u.useContext(Se);
  }
  function Re(e) {
    return J("MuiRadio", e);
  }
  const G = q("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall"
  ]), ke = (e) => {
    const { classes: t, color: o, size: s } = e, r = {
      root: [
        "root",
        `color${v(o)}`,
        s !== "medium" && `size${v(s)}`
      ]
    };
    return {
      ...t,
      ...te(r, Re, t)
    };
  }, je = y(fe, {
    shouldForwardProp: (e) => V(e) || e === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        o.size !== "medium" && t[`size${v(o.size)}`],
        t[`color${v(o.color)}`]
      ];
    }
  })(D(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    [`&.${G.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [
      {
        props: {
          color: "default",
          disabled: false,
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : F(e.palette.action.active, e.palette.action.hoverOpacity)
          }
        }
      },
      ...Object.entries(e.palette).filter(U()).map(([t]) => ({
        props: {
          color: t,
          disabled: false,
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : F(e.palette[t].main, e.palette.action.hoverOpacity)
          }
        }
      })),
      ...Object.entries(e.palette).filter(U()).map(([t]) => ({
        props: {
          color: t,
          disabled: false
        },
        style: {
          [`&.${G.checked}`]: {
            color: (e.vars || e).palette[t].main
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
  })));
  function Ie(e, t) {
    return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
  }
  const ze = i.jsx(T, {
    checked: true
  }), Oe = i.jsx(T, {}), Pe = u.forwardRef(function(t, o) {
    const s = K({
      props: t,
      name: "MuiRadio"
    }), { checked: r, checkedIcon: a = ze, color: l = "primary", icon: d = Oe, name: f, onChange: S, size: c = "medium", className: w, disabled: R, disableRipple: p = false, slots: h = {}, slotProps: n = {}, inputProps: x, ...E } = s, P = X();
    let m = R;
    P && typeof m > "u" && (m = P.disabled), m ??= false;
    const k = {
      ...s,
      disabled: m,
      disableRipple: p,
      color: l,
      size: c
    }, _ = ke(k), g = we();
    let j = r;
    const H = Y(S, g && g.onChange);
    let I = f;
    g && (typeof j > "u" && (j = Ie(g.value, s.value)), typeof I > "u" && (I = g.name));
    const z = n.input ?? x, [A, Z] = Q("root", {
      ref: o,
      elementType: je,
      className: ee(_.root, w),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: h,
        slotProps: n,
        ...E
      },
      getSlotProps: (B) => ({
        ...B,
        onChange: ($, ...M) => {
          var _a;
          (_a = B.onChange) == null ? void 0 : _a.call(B, $, ...M), H($, ...M);
        }
      }),
      ownerState: k,
      additionalProps: {
        type: "radio",
        icon: u.cloneElement(d, {
          fontSize: d.props.fontSize ?? c
        }),
        checkedIcon: u.cloneElement(a, {
          fontSize: a.props.fontSize ?? c
        }),
        disabled: m,
        name: I,
        checked: j,
        slots: h,
        slotProps: {
          input: typeof z == "function" ? z(k) : z
        }
      }
    });
    return i.jsx(A, {
      ...Z,
      classes: _
    });
  }), _e = () => [
    {
      type: "custom",
      component: () => i.jsx(C, {})
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
      component: () => i.jsx(C, {})
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
      hidden: (e) => !!e.hideLabels
    },
    {
      type: "custom",
      component: () => i.jsx(C, {})
    },
    {
      name: "radioGroupUncheckedIconColor",
      label: "radio_group_unchecked_icon_color",
      type: "color"
    },
    {
      type: "custom",
      component: () => i.jsx(C, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (e, t) => !e.write,
      default: false,
      hidden: (e, t) => !e.write
    }
  ], Be = b(i.jsx("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonChecked"), L = b(i.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonUnchecked");
  function $e() {
    const [e, t] = u.useState(null), { height: o } = oe(e), s = u.useContext(ae), { widget: { data: { oidObject: r } }, widget: a } = s, { data: l, states: d } = ie("oid"), { value: f, updateValue: S } = ne("oid"), c = r == null ? void 0 : r.type, w = c === "boolean" || c === "number" || c === "string" || c === "mixed", R = (p) => {
      S(p.target.value);
    };
    return i.jsxs(se, {
      isValidType: w,
      data: l,
      oidValue: f,
      children: [
        i.jsx(le, {
          data: l,
          widget: a
        }),
        i.jsx(me, {
          spacing: 0,
          ref: t,
          direction: a.data.radioOrientation === "vertical" ? "column" : "row",
          sx: {
            width: a.data.radioOrientation === "horizontal" ? "100%" : "auto",
            height: "100%",
            justifyContent: a.data.radioOrientation === "horizontal" ? "space-around" : "flex-start",
            alignItems: a.data.radioOrientation === "horizontal" ? "center" : "stretch"
          },
          children: d.map(({ value: p, label: h, ...n }, x) => i.jsx(ge, {
            labelPlacement: a.data.labelPlacement,
            sx: {
              m: 0,
              pr: a.data.labelPlacement === "end" && !a.data.hideLabels ? 1 : 0,
              pl: a.data.labelPlacement === "start" && !a.data.hideLabels ? 1 : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: a.data.hideLabels ? "center" : "flex-start",
              width: "100%",
              ...a.data.radioOrientation === "vertical" && {
                flex: "1 1 0",
                minHeight: 0
              },
              ...a.data.radioOrientation === "horizontal" && {
                height: "100%"
              },
              "& .MuiButtonBase-root": {
                width: "100%",
                padding: 0,
                ...a.data.radioOrientation === "horizontal" && {
                  aspectRatio: "1",
                  maxWidth: o || void 0,
                  maxHeight: o || void 0,
                  flexShrink: 0
                },
                ...a.data.radioOrientation === "vertical" && {
                  height: o ? `${o / d.length}px` : "auto",
                  maxWidth: o ? `${o / d.length}px` : void 0,
                  maxHeight: o ? `${o / d.length}px` : void 0,
                  flexShrink: 0
                },
                "&.Mui-disabled": {
                  "&.Mui-checked": {
                    color: n.iconColor || "primary.main"
                  },
                  color: a.data.radioGroupUncheckedIconColor || "action.active"
                }
              },
              "& .MuiFormControlLabel-label": {
                flex: "1 1 auto",
                minWidth: 0,
                overflow: "hidden",
                ...a.data.hideLabels && {
                  display: "none"
                }
              }
            },
            control: i.jsx(Pe, {
              disabled: a.data.onlyDisplay,
              checkedIcon: n.icon && i.jsxs(O, {
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
                  i.jsx(L, {
                    sx: {
                      color: n.iconColor,
                      position: "relative",
                      width: "100%",
                      height: "100%"
                    }
                  }),
                  i.jsx(O, {
                    sx: {
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    },
                    children: i.jsx("img", {
                      alt: "",
                      src: n.icon,
                      style: {
                        position: "relative",
                        left: `calc(0px + ${l.iconXOffset})`,
                        top: `calc(0px - ${l.iconYOffset})`,
                        width: typeof l.iconSizeOnly == "number" && `calc(100% * ${l.iconSizeOnly} / 100)` || "50%",
                        ...de(n.icon, n.iconColor)
                      }
                    })
                  })
                ]
              }) || i.jsx(Be, {
                sx: {
                  color: n.iconColor,
                  width: "100%",
                  height: "100%"
                }
              }),
              icon: i.jsx(L, {
                sx: {
                  width: "100%",
                  height: "100%"
                }
              }),
              sx: {
                color: a.data.radioGroupUncheckedIconColor,
                width: "100%",
                height: "100%",
                maxHeight: a.data.radioOrientation === "horizontal" ? o || void 0 : o ? o / d.length : void 0,
                "& .MuiTouchRipple-root": {
                  color: a.data[`iconColor${x + 1}`] || a.data.iconColor || l.textColor
                },
                "& .MuiSvgIcon-root": {
                  width: "100%",
                  height: "100%",
                  maxHeight: a.data.radioOrientation === "horizontal" ? o || void 0 : o ? o / d.length : void 0
                }
              },
              checked: String(p) === String(f),
              onChange: R,
              value: p
            }),
            label: a.data.hideLabels ? void 0 : i.jsx(re, {
              component: O,
              variant: "body2",
              sx: {
                width: "100%",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-word",
                fontSize: n.fontSize || l.valueSize,
                textAlign: "left",
                color: n.textColor || l.textColor
              },
              contentEditable: "false",
              dangerouslySetInnerHTML: {
                __html: h && h.replace(/(\r\n|\n|\r)/gm, "") || p && `${p}${r == null ? void 0 : r.unit}` || ""
              }
            })
          }, x))
        })
      ]
    });
  }
  N = class extends ce {
    static getWidgetInfo() {
      return {
        id: "tplRadioGroupCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "RadioGroupCollectionWidget",
        visWidgetLabel: "radio_group_collection_widget",
        visOrder: 5,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...W({
                groupName: "",
                allFields: true
              })
            ]
          },
          {
            name: "radioGroup",
            label: "radio_group",
            fields: [
              ...pe([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...ue(),
              ..._e()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...W({
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
      return N.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, o) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const o = {
        id: t.id,
        refService: t.refService,
        style: t.style,
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, he(this.wrapContent(i.jsx($e, {})), o);
    }
  };
});
export {
  __tla,
  N as default
};
