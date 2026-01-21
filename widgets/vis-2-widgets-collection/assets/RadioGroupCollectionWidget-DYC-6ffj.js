import { c as R, j as o, s as j, r as D, m as T, a as J, g as K, u as X, a8 as Y, a9 as Z, b as Q, d as ee, i as w, e as te, o as G, a0 as W, C as k, N as oe, a6 as ae, v as ie, y as ne, E as se, G as le, A as re, T as de, w as M, z as ce, H as pe, J as U, K as ue, __tla as __tla_0 } from "./useData-ZqG1ErJr.js";
import { c as he, __tla as __tla_1 } from "./commonObjectFields-BC31TM4M.js";
import { u as me, d as fe, __tla as __tla_2 } from "./useValueState-CDNrmGNN.js";
import { v as m, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as ge, __tla as __tla_4 } from "./Stack-BvJu5agW.js";
import { F as xe, __tla as __tla_5 } from "./FormControlLabel-DiAy_jX-.js";
import { S as Ce, __tla as __tla_6 } from "./SwitchBase-BWUH3Kq6.js";
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
  const be = R(o.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "RadioButtonUnchecked"), ve = R(o.jsx("path", {
    d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
  }), "RadioButtonChecked"), ye = j("span", {
    name: "MuiRadioButtonIcon",
    shouldForwardProp: D
  })({
    position: "relative",
    display: "flex"
  }), Se = j(be, {
    name: "MuiRadioButtonIcon"
  })({
    transform: "scale(1)"
  }), ke = j(ve, {
    name: "MuiRadioButtonIcon"
  })(T(({ theme: e }) => ({
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
  function H(e) {
    const { checked: t = false, classes: a = {}, fontSize: n } = e, d = {
      ...e,
      checked: t
    };
    return o.jsxs(ye, {
      className: a.root,
      ownerState: d,
      children: [
        o.jsx(Se, {
          fontSize: n,
          className: a.background,
          ownerState: d
        }),
        o.jsx(ke, {
          fontSize: n,
          className: a.dot,
          ownerState: d
        })
      ]
    });
  }
  const we = m.createContext(void 0);
  function Re() {
    return m.useContext(we);
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
    const { classes: t, color: a, size: n } = e, d = {
      root: [
        "root",
        `color${w(a)}`,
        n !== "medium" && `size${w(n)}`
      ]
    };
    return {
      ...t,
      ...te(d, je, t)
    };
  }, Pe = j(Ce, {
    shouldForwardProp: (e) => D(e) || e === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        a.size !== "medium" && t[`size${w(a.size)}`],
        t[`color${w(a.color)}`]
      ];
    }
  })(T(({ theme: e }) => ({
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
  function ze(e, t) {
    return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
  }
  const Be = o.jsx(H, {
    checked: true
  }), _e = o.jsx(H, {}), Me = m.forwardRef(function(t, a) {
    const n = X({
      props: t,
      name: "MuiRadio"
    }), { checked: d, checkedIcon: i = Be, color: r = "primary", icon: f = _e, name: b, onChange: I, size: c = "medium", className: P, disabled: l, disableRipple: p = false, slots: v = {}, slotProps: y = {}, inputProps: u, ...S } = n, s = Y();
    let h = l;
    s && typeof h > "u" && (h = s.disabled), h ??= false;
    const g = {
      ...n,
      disabled: h,
      disableRipple: p,
      color: r,
      size: c
    }, x = Ie(g), C = Re();
    let z = d;
    const E = Z(I, C && C.onChange);
    let B = b;
    C && (typeof z > "u" && (z = ze(C.value, n.value)), typeof B > "u" && (B = C.name));
    const _ = y.input ?? u, [A, q] = Q("root", {
      ref: a,
      elementType: Pe,
      className: ee(x.root, P),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: v,
        slotProps: y,
        ...S
      },
      getSlotProps: (F) => ({
        ...F,
        onChange: (O, ...$) => {
          var _a;
          (_a = F.onChange) == null ? void 0 : _a.call(F, O, ...$), E(O, ...$);
        }
      }),
      ownerState: g,
      additionalProps: {
        type: "radio",
        icon: m.cloneElement(f, {
          fontSize: f.props.fontSize ?? c
        }),
        checkedIcon: m.cloneElement(i, {
          fontSize: i.props.fontSize ?? c
        }),
        disabled: h,
        name: B,
        checked: z,
        slots: v,
        slotProps: {
          input: typeof _ == "function" ? _(g) : _
        }
      }
    });
    return o.jsx(A, {
      ...q,
      classes: x
    });
  }), Fe = () => [
    {
      type: "custom",
      component: () => o.jsx(k, {})
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
      component: () => o.jsx(k, {})
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
      component: () => o.jsx(k, {})
    },
    {
      name: "radioGroupUncheckedIconColor",
      label: "radio_group_unchecked_icon_color",
      default: "",
      type: "custom",
      fallbackFields: [],
      noGradient: true,
      component: (e, t, a, n) => o.jsx(oe, {
        field: e,
        data: t,
        onDataChange: a,
        props: n
      })
    },
    {
      type: "custom",
      component: () => o.jsx(k, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (e, t) => !e.write,
      default: false,
      hidden: (e, t) => !e.write
    }
  ], Oe = R(o.jsx("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonChecked"), L = R(o.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonUnchecked");
  function $e() {
    const [e, t] = m.useState(null), { height: a } = ae(e), n = m.useContext(ie), { widget: { data: { oidObject: d } }, widget: i } = n, { data: r, states: f } = ne("oid"), { value: b, updateValue: I } = me("oid"), c = d == null ? void 0 : d.type, P = c === "boolean" || c === "number" || c === "string" || c === "mixed", l = i.data.radioOrientation === "horizontal", p = a && f.length > 0 ? a / f.length : void 0, v = (u) => {
      I(u.target.value);
    }, y = () => typeof r.iconSizeOnly == "number" ? `calc(100% * ${r.iconSizeOnly} / 100)` : "50%";
    return o.jsxs(se, {
      isValidType: P,
      data: r,
      oidValue: b,
      children: [
        o.jsx(le, {
          data: r,
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
          children: f.map(({ value: u, label: S, ...s }, h) => {
            const g = s.textColor || r.textColor, x = re(g);
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
                    height: p ? `${p}px` : "auto",
                    maxWidth: p || void 0,
                    maxHeight: p || void 0,
                    flexShrink: 0
                  },
                  "&.Mui-disabled": {
                    "&.Mui-checked": {
                      color: s.iconColor || "primary.main"
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
                checkedIcon: s.icon ? o.jsxs(M, {
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
                        color: s.iconColor,
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
                        src: s.icon,
                        style: {
                          position: "relative",
                          left: `calc(0px + ${r.iconXOffset})`,
                          top: `calc(0px - ${r.iconYOffset})`,
                          width: y(),
                          ...ce(s.icon, s.iconColor, s.forceColorMask)
                        }
                      })
                    })
                  ]
                }) : o.jsx(Oe, {
                  sx: {
                    color: s.iconColor,
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
                  maxHeight: l ? a || void 0 : p,
                  "& .MuiTouchRipple-root": {
                    color: i.data[`iconColor${h + 1}`] || i.data.iconColor || r.textColor
                  },
                  "& .MuiSvgIcon-root": {
                    width: "100%",
                    height: "100%",
                    maxHeight: l ? a || void 0 : p
                  }
                },
                checked: String(u) === String(b),
                onChange: v,
                value: u
              }),
              label: i.data.hideLabels ? void 0 : o.jsx(de, {
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
                  fontSize: s.fontSize || r.valueSize,
                  textAlign: "left",
                  background: x,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: x ? "transparent" : g
                },
                contentEditable: "false",
                dangerouslySetInnerHTML: {
                  __html: S && S.replace(/(\r\n|\n|\r)/gm, "") || u && `${u}${d == null ? void 0 : d.unit}` || ""
                }
              })
            }, h);
          })
        })
      ]
    });
  }
  N = class extends pe {
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
              ...he([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...fe(),
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
      return N.getWidgetInfo();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ue(this.wrapContent(o.jsx($e, {})), a);
    }
  };
});
export {
  __tla,
  N as default
};
