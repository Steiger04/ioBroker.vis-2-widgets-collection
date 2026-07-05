import { c as y, j as t, s as S, r as D, m as T, a as Y, g as Z, u as J, X as K, Y as Q, b as ee, d as oe, Z as b, e as te, i as $, _ as W, F as ae, C as v, R as ie, n as ne, q as se, x as le, y as re, T as de, w as G, o as _, S as ce, v as pe, G as ue, z as L, A as he, E as me, __tla as __tla_0 } from "./useData-BGlxI0R0.js";
import { u as fe, d as ge, __tla as __tla_1 } from "./useValueState-B3VcZlK7.js";
import { v as c, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { S as xe, __tla as __tla_3 } from "./Stack-BcRoWIAv.js";
import { F as Ce, __tla as __tla_4 } from "./FormControlLabel-DP8WB_ta.js";
import { S as ve, __tla as __tla_5 } from "./SwitchBase-I9oA3vkp.js";
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
  })()
]).then(async () => {
  const be = y(t.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "RadioButtonUnchecked"), ye = y(t.jsx("path", {
    d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
  }), "RadioButtonChecked"), Se = S("span", {
    name: "MuiRadioButtonIcon",
    shouldForwardProp: D
  })({
    position: "relative",
    display: "flex"
  }), ke = S(be, {
    name: "MuiRadioButtonIcon"
  })({
    transform: "scale(1)"
  }), we = S(ye, {
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
  function E(e) {
    const { checked: o = false, classes: i = {}, fontSize: l } = e, r = {
      ...e,
      checked: o
    };
    return t.jsxs(Se, {
      className: i.root,
      ownerState: r,
      children: [
        t.jsx(ke, {
          fontSize: l,
          className: i.background,
          ownerState: r
        }),
        t.jsx(we, {
          fontSize: l,
          className: i.dot,
          ownerState: r
        })
      ]
    });
  }
  const Re = c.createContext(void 0);
  function je() {
    return c.useContext(Re);
  }
  function Ie(e) {
    return Z("MuiRadio", e);
  }
  const U = Y("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall"
  ]), Pe = (e) => {
    const { classes: o, color: i, size: l } = e, r = {
      root: [
        "root",
        `color${b(i)}`,
        l !== "medium" && `size${b(l)}`
      ]
    };
    return {
      ...o,
      ...te(r, Ie, o)
    };
  }, _e = S(ve, {
    shouldForwardProp: (e) => D(e) || e === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (e, o) => {
      const { ownerState: i } = e;
      return [
        o.root,
        i.size !== "medium" && o[`size${b(i.size)}`],
        o[`color${b(i.color)}`]
      ];
    }
  })(T(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    [`&.${U.disabled}`]: {
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
            backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : $(e.palette.action.active, e.palette.action.hoverOpacity)
          }
        }
      },
      ...Object.entries(e.palette).filter(W()).map(([o]) => ({
        props: {
          color: o,
          disabled: false,
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : $(e.palette[o].main, e.palette.action.hoverOpacity)
          }
        }
      })),
      ...Object.entries(e.palette).filter(W()).map(([o]) => ({
        props: {
          color: o,
          disabled: false
        },
        style: {
          [`&.${U.checked}`]: {
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
  function Be(e, o) {
    return typeof o == "object" && o !== null ? e === o : String(e) === String(o);
  }
  const ze = t.jsx(E, {
    checked: true
  }), Fe = t.jsx(E, {}), Me = c.forwardRef(function(o, i) {
    const l = J({
      props: o,
      name: "MuiRadio"
    }), { checked: r, checkedIcon: n = ze, color: p = "primary", icon: u = Fe, name: g, onChange: k, size: h = "medium", className: w, disabled: s, disableRipple: d = false, slots: x = {}, slotProps: a = {}, inputProps: C, ...N } = l, B = K();
    let m = s;
    B && typeof m > "u" && (m = B.disabled), m ??= false;
    const R = {
      ...l,
      disabled: m,
      disableRipple: d,
      color: p,
      size: h
    }, z = Pe(R), f = je();
    let j = r;
    const A = Q(k, f && f.onChange);
    let I = g;
    f && (typeof j > "u" && (j = Be(f.value, l.value)), typeof I > "u" && (I = f.name));
    const P = a.input ?? C, [q, X] = ee("root", {
      ref: i,
      elementType: _e,
      className: oe(z.root, w),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: x,
        slotProps: a,
        ...N
      },
      getSlotProps: (F) => ({
        ...F,
        onChange: (M, ...O) => {
          var _a;
          (_a = F.onChange) == null ? void 0 : _a.call(F, M, ...O), A(M, ...O);
        }
      }),
      ownerState: R,
      additionalProps: {
        type: "radio",
        icon: c.cloneElement(u, {
          fontSize: u.props.fontSize ?? h
        }),
        checkedIcon: c.cloneElement(n, {
          fontSize: n.props.fontSize ?? h
        }),
        disabled: m,
        name: I,
        checked: j,
        slots: x,
        slotProps: {
          input: typeof P == "function" ? P(R) : P
        }
      }
    });
    return t.jsx(q, {
      ...X,
      classes: z
    });
  }), Oe = () => [
    {
      type: "custom",
      component: () => t.jsx(v, {})
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
      component: () => t.jsx(v, {})
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
      component: () => t.jsx(v, {})
    },
    ae({
      name: "radioGroupUncheckedIconColor",
      label: "radio_group_unchecked_icon_color",
      fallbackFields: [],
      noGradient: true
    }),
    {
      type: "custom",
      component: () => t.jsx(v, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (e, o) => !e.write,
      default: false,
      hidden: (e, o) => !e.write
    }
  ], $e = y(t.jsx("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonChecked"), V = y(t.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonUnchecked");
  function We() {
    const [e, o] = c.useState(null), { height: i } = ie(e), l = c.useContext(ne), { widget: { data: { oidObject: r } }, widget: n } = l, { data: p, states: u } = se("oid"), { value: g, updateValue: k } = fe("oid"), h = r == null ? void 0 : r.type, w = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(h ?? ""), s = n.data.radioOrientation === "horizontal", d = i && u.length > 0 ? i / u.length : void 0, x = (a) => {
      k(a.target.value);
    };
    return t.jsxs(le, {
      isValidType: w,
      data: p,
      oidValue: g,
      children: [
        t.jsx(re, {
          data: p,
          widget: n
        }),
        t.jsx(xe, {
          spacing: 0,
          ref: o,
          direction: s ? "row" : "column",
          sx: {
            width: s ? "100%" : "auto",
            height: "100%",
            justifyContent: s ? "space-around" : "flex-start",
            alignItems: s ? "center" : "stretch"
          },
          children: u.map((a, C) => t.jsx(Ce, {
            labelPlacement: n.data.labelPlacement,
            sx: {
              m: 0,
              pr: n.data.labelPlacement === "end" && !n.data.hideLabels ? 1 : 0,
              pl: n.data.labelPlacement === "start" && !n.data.hideLabels ? 1 : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: n.data.hideLabels ? "center" : "flex-start",
              width: "100%",
              ...!s && {
                flex: "1 1 0",
                minHeight: 0
              },
              ...s && {
                height: "100%"
              },
              "& .MuiButtonBase-root": {
                width: "100%",
                padding: 0,
                ...s && {
                  aspectRatio: "1",
                  maxWidth: i || void 0,
                  maxHeight: i || void 0,
                  flexShrink: 0
                },
                ...!s && {
                  height: d ? `${d}px` : "auto",
                  maxWidth: d || void 0,
                  maxHeight: d || void 0,
                  flexShrink: 0
                },
                "&.Mui-disabled": {
                  "&.Mui-checked": {
                    color: a.iconColor || "primary.main"
                  },
                  color: n.data.radioGroupUncheckedIconColor || "action.active"
                }
              },
              "& .MuiFormControlLabel-label": {
                flex: "1 1 auto",
                minWidth: 0,
                overflow: "hidden",
                ...n.data.hideLabels && {
                  display: "none"
                }
              }
            },
            control: t.jsx(Me, {
              disabled: n.data.onlyDisplay,
              checkedIcon: a.icon ? t.jsxs(_, {
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
                  t.jsx(V, {
                    sx: {
                      color: a.iconColor,
                      position: "relative",
                      width: "100%",
                      height: "100%"
                    }
                  }),
                  t.jsx(_, {
                    sx: {
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    },
                    children: t.jsx(ce, {
                      alt: "",
                      src: a.icon,
                      style: {
                        position: "relative",
                        left: `calc(0px + ${a.iconXOffset})`,
                        top: `calc(0px - ${a.iconYOffset})`,
                        width: `calc(${p.iconSizeOnly} * 0.5)`,
                        ...pe(a.icon, a.iconColor, a.forceColorMask)
                      }
                    })
                  })
                ]
              }) : t.jsx($e, {
                sx: {
                  color: a.iconColor,
                  width: "100%",
                  height: "100%"
                }
              }),
              icon: t.jsx(V, {
                sx: {
                  width: "100%",
                  height: "100%"
                }
              }),
              sx: {
                color: n.data.radioGroupUncheckedIconColor,
                width: "100%",
                height: "100%",
                maxHeight: s ? i || void 0 : d,
                "& .MuiTouchRipple-root": {
                  color: n.data[`iconColor${C + 1}`] || n.data.iconColor || p.textColor
                },
                "& .MuiSvgIcon-root": {
                  width: "100%",
                  height: "100%",
                  maxHeight: s ? i || void 0 : d
                }
              },
              checked: String(a.value) === String(g),
              onChange: x,
              value: a.value
            }),
            label: n.data.hideLabels ? void 0 : t.jsx(de, {
              component: _,
              variant: "body2",
              sx: {
                width: "100%",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-word",
                fontSize: a.valueSize,
                textAlign: "left",
                background: G(a.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: G(a.textColor) ? "transparent" : a.textColor
              },
              contentEditable: "false",
              dangerouslySetInnerHTML: {
                __html: a.label
              }
            })
          }, C))
        })
      ]
    });
  }
  H = class extends ue {
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
              ...L({
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
              ...ge(),
              ...Oe()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...L({
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
    }
    onRxStyleChanged() {
    }
    onStateUpdated(o, i) {
    }
    componentDidMount() {
      super.componentDidMount();
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
      return o.widget.data.noCard || o.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, me(this.wrapContent(t.jsx(We, {})), i);
    }
  };
});
export {
  __tla,
  H as default
};
