import { c as b, j as a, s as y, r as D, m as L, a as J, g as K, u as X, aa as Y, b as Z, d as Q, i as v, e as ee, o as F, N as U, C, a9 as te, q as oe, x as ae, v as ie, z as ne, A as se, T as le, w as P, y as re, G as de, E as W, H as ce, J as pe, K as ue, __tla as __tla_0 } from "./commonFields-8_mIPW_t.js";
import { v as u, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as he, __tla as __tla_2 } from "./Stack-B9GBFqLE.js";
import { F as me, __tla as __tla_3 } from "./FormControlLabel-aqK6rJcw.js";
import { S as fe, __tla as __tla_4 } from "./SwitchBase-C2KYw59S.js";
import { u as ge, __tla as __tla_5 } from "./useFormControl--TM4wVzV.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import "./formControlState-Dq1zat_P.js";
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
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })()
]).then(async () => {
  const xe = b(a.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "RadioButtonUnchecked"), Ce = b(a.jsx("path", {
    d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
  }), "RadioButtonChecked"), ve = y("span", {
    name: "MuiRadioButtonIcon",
    shouldForwardProp: D
  })({
    position: "relative",
    display: "flex"
  }), be = y(xe, {
    name: "MuiRadioButtonIcon"
  })({
    transform: "scale(1)"
  }), ye = y(Ce, {
    name: "MuiRadioButtonIcon"
  })(L(({ theme: e }) => ({
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
    return a.jsxs(ve, {
      className: o.root,
      ownerState: r,
      children: [
        a.jsx(be, {
          fontSize: s,
          className: o.background,
          ownerState: r
        }),
        a.jsx(ye, {
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
  function ke(e) {
    return K("MuiRadio", e);
  }
  const G = J("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall"
  ]), Re = (e) => {
    const { classes: t, color: o, size: s } = e, r = {
      root: [
        "root",
        `color${v(o)}`,
        s !== "medium" && `size${v(s)}`
      ]
    };
    return {
      ...t,
      ...ee(r, ke, t)
    };
  }, je = y(fe, {
    shouldForwardProp: (e) => D(e) || e === "classes",
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
  })(L(({ theme: e }) => ({
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
  const ze = a.jsx(T, {
    checked: true
  }), Pe = a.jsx(T, {}), Oe = u.forwardRef(function(t, o) {
    const s = X({
      props: t,
      name: "MuiRadio"
    }), { checked: r, checkedIcon: i = ze, color: l = "primary", icon: d = Pe, name: g, onChange: S, size: c = "medium", className: w, disabled: k, disableRipple: p = false, slots: h = {}, slotProps: n = {}, inputProps: x, ...E } = s, O = ge();
    let m = k;
    O && typeof m > "u" && (m = O.disabled), m ??= false;
    const R = {
      ...s,
      disabled: m,
      disableRipple: p,
      color: l,
      size: c
    }, _ = Re(R), f = we();
    let j = r;
    const H = Y(S, f && f.onChange);
    let I = g;
    f && (typeof j > "u" && (j = Ie(f.value, s.value)), typeof I > "u" && (I = f.name));
    const z = n.input ?? x, [A, q] = Z("root", {
      ref: o,
      elementType: je,
      className: Q(_.root, w),
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
      ownerState: R,
      additionalProps: {
        type: "radio",
        icon: u.cloneElement(d, {
          fontSize: d.props.fontSize ?? c
        }),
        checkedIcon: u.cloneElement(i, {
          fontSize: i.props.fontSize ?? c
        }),
        disabled: m,
        name: I,
        checked: j,
        slots: h,
        slotProps: {
          input: typeof z == "function" ? z(R) : z
        }
      }
    });
    return a.jsx(A, {
      ...q,
      classes: _
    });
  }), _e = () => [
    {
      type: "custom",
      component: () => a.jsx(C, {})
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
      component: () => a.jsx(C, {})
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
      component: () => a.jsx(C, {})
    },
    {
      name: "radioGroupUncheckedIconColor",
      label: "radio_group_unchecked_icon_color",
      type: "color"
    },
    {
      type: "custom",
      component: () => a.jsx(C, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (e, t) => !e.write,
      default: false,
      hidden: (e, t) => !e.write
    }
  ], Be = b(a.jsx("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonChecked"), V = b(a.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonUnchecked");
  function $e() {
    const [e, t] = u.useState(null), { height: o } = te(e), s = u.useContext(oe), { widget: { data: { oidObject: r } }, widget: i } = s, { data: l, states: d } = ae("oid"), { value: g, updateValue: S } = ie("oid"), c = r == null ? void 0 : r.type, w = c === "boolean" || c === "number" || c === "string" || c === "mixed", k = (p) => {
      S(p.target.value);
    };
    return a.jsxs(ne, {
      isValidType: w,
      data: l,
      oidValue: g,
      children: [
        a.jsx(se, {
          data: l,
          widget: i
        }),
        a.jsx(he, {
          spacing: 0,
          ref: t,
          direction: i.data.radioOrientation === "vertical" ? "column" : "row",
          sx: {
            width: "auto",
            height: "100%",
            justifyContent: i.data.radioOrientation === "horizontal" ? "space-around" : "flex-start",
            alignItems: i.data.radioOrientation === "horizontal" ? "center" : "stretch"
          },
          children: d.map(({ value: p, label: h, ...n }, x) => a.jsx(me, {
            labelPlacement: i.data.labelPlacement,
            sx: {
              mr: i.data.labelPlacement === "end" && !i.data.hideLabels ? 1 : 0,
              ml: i.data.labelPlacement === "start" && !i.data.hideLabels ? 1 : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: i.data.hideLabels ? "center" : "flex-start",
              ...i.data.radioOrientation === "vertical" && {
                flex: "1 1 0",
                minHeight: 0
              },
              ...i.data.radioOrientation === "horizontal" && {
                height: "100%"
              },
              "& .MuiButtonBase-root": {
                ...i.data.radioOrientation === "horizontal" && {
                  aspectRatio: "1",
                  maxWidth: o || void 0,
                  maxHeight: o || void 0,
                  width: "auto",
                  flexShrink: 0
                },
                ...i.data.radioOrientation === "vertical" && {
                  width: o ? `${o / d.length}px` : "auto",
                  height: o ? `${o / d.length}px` : "auto",
                  maxWidth: o ? `${o / d.length}px` : void 0,
                  maxHeight: o ? `${o / d.length}px` : void 0,
                  flexShrink: 0
                },
                "&.Mui-disabled": {
                  "&.Mui-checked": {
                    color: n.iconColor || "primary.main"
                  },
                  color: i.data.radioGroupUncheckedIconColor || "action.active"
                }
              },
              "& .MuiFormControlLabel-label": {
                flex: "1 1 auto",
                minWidth: 0,
                overflow: "hidden"
              }
            },
            control: a.jsx(Oe, {
              disabled: i.data.onlyDisplay,
              checkedIcon: n.icon && a.jsxs(P, {
                sx: {
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center"
                },
                children: [
                  a.jsx(V, {
                    sx: {
                      color: n.iconColor,
                      position: "relative",
                      width: "100%",
                      height: "100%"
                    }
                  }),
                  a.jsx(P, {
                    sx: {
                      position: "absolute",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignSelf: "center"
                    },
                    children: a.jsx("img", {
                      alt: "",
                      src: n.icon,
                      style: {
                        position: "relative",
                        left: `calc(0px + ${l.iconXOffset})`,
                        top: `calc(0px - ${l.iconYOffset})`,
                        width: typeof l.iconSizeOnly == "number" && `calc(100% * ${l.iconSizeOnly} / 100)` || "50%",
                        ...re(n.icon, n.iconColor)
                      }
                    })
                  })
                ]
              }) || a.jsx(Be, {
                sx: {
                  color: n.iconColor
                }
              }),
              icon: a.jsx(V, {}),
              sx: {
                color: i.data.radioGroupUncheckedIconColor,
                width: "100%",
                height: "100%",
                maxHeight: i.data.radioOrientation === "horizontal" ? o || void 0 : o ? o / d.length : void 0,
                "& .MuiTouchRipple-root": {
                  color: i.data[`iconColor${x + 1}`] || i.data.iconColor || l.textColor
                },
                "& .MuiSvgIcon-root": {
                  width: "100%",
                  height: "100%",
                  maxHeight: i.data.radioOrientation === "horizontal" ? o || void 0 : o ? o / d.length : void 0
                }
              },
              checked: String(p) === String(g),
              onChange: k,
              value: p
            }),
            label: i.data.hideLabels ? void 0 : a.jsx(le, {
              component: P,
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
  N = class extends de {
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
              ...ce([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...pe(),
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ue(this.wrapContent(a.jsx($e, {})), o);
    }
  };
});
export {
  __tla,
  N as default
};
