import { c as b, j as t, s as R, r as T, m as H, a as J, g as K, u as X, ab as Y, b as Z, d as Q, i as S, e as ee, o as U, O as G, C as _, q as oe, y as te, x as ie, v as ae, A as ne, E as se, T as re, w as P, z as le, G as ce, H as V, J as de, K as pe, L as ue, __tla as __tla_0 } from "./commonFields-B5KdVoLe.js";
import { v as c, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as he, __tla as __tla_2 } from "./Stack-BRlt7qXT.js";
import { F as fe, __tla as __tla_3 } from "./FormControlLabel-C6wSo0bN.js";
import { S as ge, __tla as __tla_4 } from "./SwitchBase-Vbi1OQAr.js";
import { u as me, __tla as __tla_5 } from "./useFormControl--TM4wVzV.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import "./formControlState-Dq1zat_P.js";
let E;
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
  const Ce = b(t.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "RadioButtonUnchecked"), xe = b(t.jsx("path", {
    d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
  }), "RadioButtonChecked"), ye = R("span", {
    name: "MuiRadioButtonIcon",
    shouldForwardProp: T
  })({
    position: "relative",
    display: "flex"
  }), ve = R(Ce, {
    name: "MuiRadioButtonIcon"
  })({
    transform: "scale(1)"
  }), Se = R(xe, {
    name: "MuiRadioButtonIcon"
  })(H(({ theme: e }) => ({
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
  function N(e) {
    const { checked: o = false, classes: i = {}, fontSize: r } = e, l = {
      ...e,
      checked: o
    };
    return t.jsxs(ye, {
      className: i.root,
      ownerState: l,
      children: [
        t.jsx(ve, {
          fontSize: r,
          className: i.background,
          ownerState: l
        }),
        t.jsx(Se, {
          fontSize: r,
          className: i.dot,
          ownerState: l
        })
      ]
    });
  }
  const be = c.createContext(void 0);
  function Re() {
    return c.useContext(be);
  }
  function we(e) {
    return K("MuiRadio", e);
  }
  const D = J("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall"
  ]), ke = (e) => {
    const { classes: o, color: i, size: r } = e, l = {
      root: [
        "root",
        `color${S(i)}`,
        r !== "medium" && `size${S(r)}`
      ]
    };
    return {
      ...o,
      ...ee(l, we, o)
    };
  }, je = R(ge, {
    shouldForwardProp: (e) => T(e) || e === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (e, o) => {
      const { ownerState: i } = e;
      return [
        o.root,
        i.size !== "medium" && o[`size${S(i.size)}`],
        o[`color${S(i.color)}`]
      ];
    }
  })(H(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    [`&.${D.disabled}`]: {
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
            backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : U(e.palette.action.active, e.palette.action.hoverOpacity)
          }
        }
      },
      ...Object.entries(e.palette).filter(G()).map(([o]) => ({
        props: {
          color: o,
          disabled: false,
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : U(e.palette[o].main, e.palette.action.hoverOpacity)
          }
        }
      })),
      ...Object.entries(e.palette).filter(G()).map(([o]) => ({
        props: {
          color: o,
          disabled: false
        },
        style: {
          [`&.${D.checked}`]: {
            color: (e.vars || e).palette[o].main
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
  function Ie(e, o) {
    return typeof o == "object" && o !== null ? e === o : String(e) === String(o);
  }
  const ze = t.jsx(N, {
    checked: true
  }), Be = t.jsx(N, {}), _e = c.forwardRef(function(o, i) {
    const r = X({
      props: o,
      name: "MuiRadio"
    }), { checked: l, checkedIcon: h = ze, color: a = "primary", icon: n = Be, name: f, onChange: w, size: g = "medium", className: C, disabled: k, disableRipple: u = false, slots: x = {}, slotProps: y = {}, inputProps: d, ...v } = r, s = me();
    let p = k;
    s && typeof p > "u" && (p = s.disabled), p ??= false;
    const j = {
      ...r,
      disabled: p,
      disableRipple: u,
      color: a,
      size: g
    }, O = ke(j), m = Re();
    let I = l;
    const L = Y(w, m && m.onChange);
    let z = f;
    m && (typeof I > "u" && (I = Ie(m.value, r.value)), typeof z > "u" && (z = m.name));
    const B = y.input ?? d, [A, q] = Z("root", {
      ref: i,
      elementType: je,
      className: Q(O.root, C),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: x,
        slotProps: y,
        ...v
      },
      getSlotProps: (M) => ({
        ...M,
        onChange: (F, ...$) => {
          var _a;
          (_a = M.onChange) == null ? void 0 : _a.call(M, F, ...$), L(F, ...$);
        }
      }),
      ownerState: j,
      additionalProps: {
        type: "radio",
        icon: c.cloneElement(n, {
          fontSize: n.props.fontSize ?? g
        }),
        checkedIcon: c.cloneElement(h, {
          fontSize: h.props.fontSize ?? g
        }),
        disabled: p,
        name: z,
        checked: I,
        slots: x,
        slotProps: {
          input: typeof B == "function" ? B(j) : B
        }
      }
    });
    return t.jsx(A, {
      ...q,
      classes: O
    });
  }), Pe = () => [
    {
      type: "custom",
      component: () => t.jsx(_, {})
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
      component: () => t.jsx(_, {})
    },
    {
      name: "radioGroupUncheckedIconColor",
      label: "radio_group_unchecked_icon_color",
      type: "color"
    },
    {
      type: "custom",
      component: () => t.jsx(_, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (e, o) => !e.write,
      default: false,
      hidden: (e, o) => !e.write
    }
  ], Oe = b(t.jsx("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonChecked"), W = b(t.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonUnchecked");
  function Me() {
    const [e, o] = c.useState(null), [i, r] = c.useState(null), l = c.useContext(oe), { widget: { data: { oidObject: h } }, widget: a } = l, { data: n, states: f } = te("oid"), { fontStyles: w, textStyles: g } = ie(a.style), { value: C, updateValue: k } = ae("oid"), u = h == null ? void 0 : h.type, x = u === "boolean" || u === "number" || u === "string" || u === "mixed", y = (d) => {
      k(d.target.value);
    };
    return c.useEffect(() => {
      (e == null ? void 0 : e.clientHeight) && r(e.clientHeight);
    }, [
      e == null ? void 0 : e.clientHeight
    ]), t.jsxs(ne, {
      isValidType: x,
      data: n,
      oidValue: C,
      children: [
        t.jsx(se, {
          data: n,
          widget: a
        }),
        t.jsx(he, {
          ref: o,
          direction: a.data.radioOrientation === "vertical" ? "column" : "row",
          sx: {
            width: "auto",
            height: "100%",
            justifyContent: "space-around",
            alignItems: "stretch"
          },
          children: f.map(({ value: d, label: v, ...s }, p) => t.jsx(fe, {
            sx: {
              height: "100%",
              m: 0,
              "& .MuiButtonBase-root": {
                flexBasis: "fit-content",
                flexShrink: 1,
                width: "100%",
                height: "100%",
                "&.Mui-disabled": {
                  "&.Mui-checked": {
                    color: s.iconColor || "primary.main"
                  },
                  color: a.data.radioGroupUncheckedIconColor || "action.active"
                }
              }
            },
            control: t.jsx(_e, {
              disabled: a.data.onlyDisplay,
              checkedIcon: s.icon && t.jsxs(P, {
                sx: {
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center"
                },
                children: [
                  t.jsx(W, {
                    sx: {
                      color: s.iconColor,
                      position: "relative",
                      width: "100%",
                      height: "100%"
                    }
                  }),
                  t.jsx(P, {
                    sx: {
                      position: "absolute",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignSelf: "center"
                    },
                    children: t.jsx("img", {
                      alt: "",
                      src: s.icon,
                      style: {
                        position: "relative",
                        left: `calc(0px + ${n.iconXOffset})`,
                        top: `calc(0px - ${n.iconYOffset})`,
                        width: typeof n.iconSizeOnly == "number" && `calc(100% * ${n.iconSizeOnly} / 100)` || "50%",
                        ...le(s.icon, s.iconColor)
                      }
                    })
                  })
                ]
              }) || t.jsx(Oe, {
                sx: {
                  color: s.iconColor
                }
              }),
              icon: t.jsx(W, {}),
              sx: {
                color: a.data.radioGroupUncheckedIconColor,
                width: "100%",
                height: "100%",
                maxHeight: a.data.radioOrientation === "horizontal" ? i || void 0 : i ? i / f.length : void 0,
                "& .MuiTouchRipple-root": {
                  color: a.data[`iconColor${p + 1}`] || a.data.iconColor || n.textColor
                },
                "& .MuiSvgIcon-root": {
                  width: "100%",
                  height: "100%",
                  maxHeight: a.data.radioOrientation === "horizontal" ? i || void 0 : i ? i / f.length : void 0
                }
              },
              checked: String(d) === String(C),
              onChange: y,
              value: d
            }),
            label: t.jsx(re, {
              component: P,
              variant: "body2",
              noWrap: true,
              sx: {
                whiteSpace: "pre-wrap",
                ...w,
                ...g,
                fontSize: s.fontSize || n.valueSize,
                textAlign: "left",
                color: s.textColor || n.textColor
              },
              contentEditable: "false",
              dangerouslySetInnerHTML: {
                __html: v && v.replace(/(\r\n|\n|\r)/gm, "") || d && `${d}${h == null ? void 0 : h.unit}` || ""
              }
            })
          }, p))
        })
      ]
    });
  }
  E = class extends ce {
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
              ...V({
                groupName: "",
                allFields: true
              })
            ]
          },
          {
            name: "radioGroup",
            label: "radio_group",
            fields: [
              ...de([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...pe(),
              ...Pe()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...V({
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
      return E.getWidgetInfo();
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
      return o.widget.data.noCard || o.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ue(this.wrapContent(t.jsx(Me, {})), i);
    }
  };
});
export {
  __tla,
  E as default
};
