import { c as S, j as o, s as w, r as D, m as N, a as J, g as K, u as X, a8 as Y, a9 as Z, b as Q, d as ee, i as y, e as te, o as G, a0 as W, C as v, K as oe, a6 as ae, v as ie, A as ne, E as se, z as le, T as re, w as M, y as de, G as ce, H as U, J as pe, __tla as __tla_0 } from "./useData-ySXy5KMl.js";
import { c as ue, __tla as __tla_1 } from "./commonObjectFields-uR0K0cpI.js";
import { u as he, d as me, __tla as __tla_2 } from "./useValueState-CANcZOFk.js";
import { v as h, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as fe, __tla as __tla_4 } from "./useDataNew-BhEzyQPL.js";
import { S as ge, __tla as __tla_5 } from "./Stack-Bu2YdDZA.js";
import { F as xe, __tla as __tla_6 } from "./FormControlLabel-Dpar4xqZ.js";
import { S as Ce, __tla as __tla_7 } from "./SwitchBase-BlQhbkh0.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let H;
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
  })()
]).then(async () => {
  const be = S(o.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "RadioButtonUnchecked"), ve = S(o.jsx("path", {
    d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
  }), "RadioButtonChecked"), ye = w("span", {
    name: "MuiRadioButtonIcon",
    shouldForwardProp: D
  })({
    position: "relative",
    display: "flex"
  }), Se = w(be, {
    name: "MuiRadioButtonIcon"
  })({
    transform: "scale(1)"
  }), we = w(ve, {
    name: "MuiRadioButtonIcon"
  })(N(({ theme: e }) => ({
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
    const { checked: t = false, classes: a = {}, fontSize: s } = e, r = {
      ...e,
      checked: t
    };
    return o.jsxs(ye, {
      className: a.root,
      ownerState: r,
      children: [
        o.jsx(Se, {
          fontSize: s,
          className: a.background,
          ownerState: r
        }),
        o.jsx(we, {
          fontSize: s,
          className: a.dot,
          ownerState: r
        })
      ]
    });
  }
  const ke = h.createContext(void 0);
  function Re() {
    return h.useContext(ke);
  }
  function je(e) {
    return K("MuiRadio", e);
  }
  const V = J("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall"
  ]), Ie = (e) => {
    const { classes: t, color: a, size: s } = e, r = {
      root: [
        "root",
        `color${y(a)}`,
        s !== "medium" && `size${y(s)}`
      ]
    };
    return {
      ...t,
      ...te(r, je, t)
    };
  }, Pe = w(Ce, {
    shouldForwardProp: (e) => D(e) || e === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        a.size !== "medium" && t[`size${y(a.size)}`],
        t[`color${y(a.color)}`]
      ];
    }
  })(N(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    [`&.${V.disabled}`]: {
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
            backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : G(e.palette.action.active, e.palette.action.hoverOpacity)
          }
        }
      },
      ...Object.entries(e.palette).filter(W()).map(([t]) => ({
        props: {
          color: t,
          disabled: false,
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : G(e.palette[t].main, e.palette.action.hoverOpacity)
          }
        }
      })),
      ...Object.entries(e.palette).filter(W()).map(([t]) => ({
        props: {
          color: t,
          disabled: false
        },
        style: {
          [`&.${V.checked}`]: {
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
  function Be(e, t) {
    return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
  }
  const _e = o.jsx(T, {
    checked: true
  }), ze = o.jsx(T, {}), Me = h.forwardRef(function(t, a) {
    const s = X({
      props: t,
      name: "MuiRadio"
    }), { checked: r, checkedIcon: i = _e, color: k = "primary", icon: d = ze, name: g, onChange: b, size: m = "medium", className: R, disabled: j, disableRipple: I = false, slots: l = {}, slotProps: c = {}, inputProps: P, ...p } = s, x = Y();
    let n = j;
    x && typeof n > "u" && (n = x.disabled), n ??= false;
    const f = {
      ...s,
      disabled: n,
      disableRipple: I,
      color: k,
      size: m
    }, C = Ie(f), u = Re();
    let B = r;
    const E = Z(b, u && u.onChange);
    let _ = g;
    u && (typeof B > "u" && (B = Be(u.value, s.value)), typeof _ > "u" && (_ = u.name));
    const z = c.input ?? P, [A, q] = Q("root", {
      ref: a,
      elementType: Pe,
      className: ee(C.root, R),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: l,
        slotProps: c,
        ...p
      },
      getSlotProps: (F) => ({
        ...F,
        onChange: ($, ...O) => {
          var _a;
          (_a = F.onChange) == null ? void 0 : _a.call(F, $, ...O), E($, ...O);
        }
      }),
      ownerState: f,
      additionalProps: {
        type: "radio",
        icon: h.cloneElement(d, {
          fontSize: d.props.fontSize ?? m
        }),
        checkedIcon: h.cloneElement(i, {
          fontSize: i.props.fontSize ?? m
        }),
        disabled: n,
        name: _,
        checked: B,
        slots: l,
        slotProps: {
          input: typeof z == "function" ? z(f) : z
        }
      }
    });
    return o.jsx(A, {
      ...q,
      classes: C
    });
  }), Fe = () => [
    {
      type: "custom",
      component: () => o.jsx(v, {})
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
      component: () => o.jsx(v, {})
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
      component: () => o.jsx(v, {})
    },
    {
      name: "radioGroupUncheckedIconColor",
      label: "radio_group_unchecked_icon_color",
      default: "",
      type: "custom",
      fallbackFields: [],
      noGradient: true,
      component: (e, t, a, s) => o.jsx(oe, {
        field: e,
        data: t,
        onDataChange: a,
        props: s
      })
    },
    {
      type: "custom",
      component: () => o.jsx(v, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (e, t) => !e.write,
      default: false,
      hidden: (e, t) => !e.write
    }
  ], $e = S(o.jsx("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonChecked"), L = S(o.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonUnchecked");
  function Oe() {
    const [e, t] = h.useState(null), { height: a } = ae(e), s = h.useContext(ie), { widget: { data: { oidObject: r } }, widget: i, theme: k } = s, { data: d, states: g, statesNew: b } = fe("oid");
    console.log("statesNew:", b), console.log("states:", g);
    const { value: m, updateValue: R } = he("oid"), j = r == null ? void 0 : r.type, I = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(j ?? ""), l = i.data.radioOrientation === "horizontal", c = a && g.length > 0 ? a / g.length : void 0, P = (p) => {
      R(p.target.value);
    };
    return o.jsxs(ne, {
      isValidType: I,
      data: d,
      oidValue: m,
      children: [
        o.jsx(se, {
          data: d,
          widget: i
        }),
        o.jsx(ge, {
          spacing: 0,
          ref: t,
          direction: l ? "row" : "column",
          sx: {
            width: l ? "100%" : "auto",
            height: "100%",
            justifyContent: l ? "space-around" : "flex-start",
            alignItems: l ? "center" : "stretch"
          },
          children: b.map(({ value: p, label: x, ...n }, f) => {
            const C = n.textColor || d.textColor, u = le(C);
            return o.jsx(xe, {
              labelPlacement: i.data.labelPlacement,
              sx: {
                m: 0,
                pr: i.data.labelPlacement === "end" && !i.data.hideLabels ? 1 : 0,
                pl: i.data.labelPlacement === "start" && !i.data.hideLabels ? 1 : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: i.data.hideLabels ? "center" : "flex-start",
                width: "100%",
                ...!l && {
                  flex: "1 1 0",
                  minHeight: 0
                },
                ...l && {
                  height: "100%"
                },
                "& .MuiButtonBase-root": {
                  width: "100%",
                  padding: 0,
                  ...l && {
                    aspectRatio: "1",
                    maxWidth: a || void 0,
                    maxHeight: a || void 0,
                    flexShrink: 0
                  },
                  ...!l && {
                    height: c ? `${c}px` : "auto",
                    maxWidth: c || void 0,
                    maxHeight: c || void 0,
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
                  overflow: "hidden",
                  ...i.data.hideLabels && {
                    display: "none"
                  }
                }
              },
              control: o.jsx(Me, {
                disabled: i.data.onlyDisplay,
                checkedIcon: n.icon ? o.jsxs(M, {
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
                    o.jsx(L, {
                      sx: {
                        color: n.iconColor,
                        position: "relative",
                        width: "100%",
                        height: "100%"
                      }
                    }),
                    o.jsx(M, {
                      sx: {
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: o.jsx("img", {
                        alt: "",
                        src: n.icon,
                        style: {
                          position: "relative",
                          left: `calc(0px + ${n.iconXOffset})`,
                          top: `calc(0px - ${n.iconYOffset})`,
                          width: `calc(${d.iconSizeOnly} * 0.5)`,
                          ...de(n.icon, n.iconColor || k.palette.primary.main, n.forceColorMask)
                        }
                      })
                    })
                  ]
                }) : o.jsx($e, {
                  sx: {
                    color: n.iconColor,
                    width: "100%",
                    height: "100%"
                  }
                }),
                icon: o.jsx(L, {
                  sx: {
                    width: "100%",
                    height: "100%"
                  }
                }),
                sx: {
                  color: i.data.radioGroupUncheckedIconColor,
                  width: "100%",
                  height: "100%",
                  maxHeight: l ? a || void 0 : c,
                  "& .MuiTouchRipple-root": {
                    color: i.data[`iconColor${f + 1}`] || i.data.iconColor || d.textColor
                  },
                  "& .MuiSvgIcon-root": {
                    width: "100%",
                    height: "100%",
                    maxHeight: l ? a || void 0 : c
                  }
                },
                checked: String(p) === String(m),
                onChange: P,
                value: p
              }),
              label: i.data.hideLabels ? void 0 : o.jsx(re, {
                component: M,
                variant: "body2",
                sx: {
                  width: "100%",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  wordBreak: "break-word",
                  fontSize: n.fontSize || d.valueSize,
                  textAlign: "left",
                  background: u,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: u ? "transparent" : C
                },
                contentEditable: "false",
                dangerouslySetInnerHTML: {
                  __html: x && x.replace(/(\r\n|\n|\r)/gm, "") || p && `${p}${r == null ? void 0 : r.unit}` || ""
                }
              })
            }, f);
          })
        })
      ]
    });
  }
  H = class extends ce {
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
              ...U({
                groupName: "",
                allFields: true
              })
            ]
          },
          {
            name: "radioGroup",
            label: "radio_group",
            fields: [
              ...ue([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...me(),
              ...Fe()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...U({
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
      return H.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, a) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const a = {
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, pe(this.wrapContent(o.jsx(Oe, {})), a);
    }
  };
});
export {
  __tla,
  H as default
};
