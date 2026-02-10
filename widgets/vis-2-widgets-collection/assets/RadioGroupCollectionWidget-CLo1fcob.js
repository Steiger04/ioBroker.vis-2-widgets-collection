import { c as y, j as t, s as S, r as D, m as T, a as K, g as X, u as Y, ab as Z, ac as Q, b as ee, d as oe, i as v, e as te, o as $, a2 as G, C as b, O as ae, a9 as ie, v as ne, y as se, E as le, G as re, T as de, A as W, w as B, S as ce, z as pe, H as ue, J as U, K as he, N as me, __tla as __tla_0 } from "./useData-V3RviNbf.js";
import { u as fe, d as ge, __tla as __tla_1 } from "./useValueState-CYv7cSN1.js";
import { v as c, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { S as xe, __tla as __tla_3 } from "./Stack-Bf2HlEiX.js";
import { F as Ce, __tla as __tla_4 } from "./FormControlLabel-ozRI5Kin.js";
import { S as be, __tla as __tla_5 } from "./SwitchBase-1YAmC1FO.js";
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
  const ve = y(t.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "RadioButtonUnchecked"), ye = y(t.jsx("path", {
    d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
  }), "RadioButtonChecked"), Se = S("span", {
    name: "MuiRadioButtonIcon",
    shouldForwardProp: D
  })({
    position: "relative",
    display: "flex"
  }), ke = S(ve, {
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
  function N(e) {
    const { checked: o = false, classes: a = {}, fontSize: s } = e, r = {
      ...e,
      checked: o
    };
    return t.jsxs(Se, {
      className: a.root,
      ownerState: r,
      children: [
        t.jsx(ke, {
          fontSize: s,
          className: a.background,
          ownerState: r
        }),
        t.jsx(we, {
          fontSize: s,
          className: a.dot,
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
    return X("MuiRadio", e);
  }
  const L = K("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall"
  ]), Pe = (e) => {
    const { classes: o, color: a, size: s } = e, r = {
      root: [
        "root",
        `color${v(a)}`,
        s !== "medium" && `size${v(s)}`
      ]
    };
    return {
      ...o,
      ...te(r, Ie, o)
    };
  }, Be = S(be, {
    shouldForwardProp: (e) => D(e) || e === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (e, o) => {
      const { ownerState: a } = e;
      return [
        o.root,
        a.size !== "medium" && o[`size${v(a.size)}`],
        o[`color${v(a.color)}`]
      ];
    }
  })(T(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    [`&.${L.disabled}`]: {
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
      ...Object.entries(e.palette).filter(G()).map(([o]) => ({
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
      ...Object.entries(e.palette).filter(G()).map(([o]) => ({
        props: {
          color: o,
          disabled: false
        },
        style: {
          [`&.${L.checked}`]: {
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
  function _e(e, o) {
    return typeof o == "object" && o !== null ? e === o : String(e) === String(o);
  }
  const ze = t.jsx(N, {
    checked: true
  }), Me = t.jsx(N, {}), Fe = c.forwardRef(function(o, a) {
    const s = Y({
      props: o,
      name: "MuiRadio"
    }), { checked: r, checkedIcon: n = ze, color: p = "primary", icon: u = Me, name: g, onChange: k, size: h = "medium", className: w, disabled: l, disableRipple: d = false, slots: x = {}, slotProps: i = {}, inputProps: C, ...E } = s, _ = Z();
    let m = l;
    _ && typeof m > "u" && (m = _.disabled), m ??= false;
    const R = {
      ...s,
      disabled: m,
      disableRipple: d,
      color: p,
      size: h
    }, z = Pe(R), f = je();
    let j = r;
    const A = Q(k, f && f.onChange);
    let I = g;
    f && (typeof j > "u" && (j = _e(f.value, s.value)), typeof I > "u" && (I = f.name));
    const P = i.input ?? C, [q, J] = ee("root", {
      ref: a,
      elementType: Be,
      className: oe(z.root, w),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: x,
        slotProps: i,
        ...E
      },
      getSlotProps: (M) => ({
        ...M,
        onChange: (F, ...O) => {
          var _a;
          (_a = M.onChange) == null ? void 0 : _a.call(M, F, ...O), A(F, ...O);
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
      ...J,
      classes: z
    });
  }), Oe = () => [
    {
      type: "custom",
      component: () => t.jsx(b, {})
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
      component: () => t.jsx(b, {})
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
      component: () => t.jsx(b, {})
    },
    {
      name: "radioGroupUncheckedIconColor",
      label: "radio_group_unchecked_icon_color",
      default: "",
      type: "custom",
      fallbackFields: [],
      noGradient: true,
      component: (e, o, a, s) => t.jsx(ae, {
        field: e,
        data: o,
        onDataChange: a,
        props: s
      })
    },
    {
      type: "custom",
      component: () => t.jsx(b, {})
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
  function Ge() {
    const [e, o] = c.useState(null), { height: a } = ie(e), s = c.useContext(ne), { widget: { data: { oidObject: r } }, widget: n } = s, { data: p, statesNew: u } = se("oid"), { value: g, updateValue: k } = fe("oid"), h = r == null ? void 0 : r.type, w = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(h ?? ""), l = n.data.radioOrientation === "horizontal", d = a && u.length > 0 ? a / u.length : void 0, x = (i) => {
      k(i.target.value);
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
          direction: l ? "row" : "column",
          sx: {
            width: l ? "100%" : "auto",
            height: "100%",
            justifyContent: l ? "space-around" : "flex-start",
            alignItems: l ? "center" : "stretch"
          },
          children: u.map((i, C) => t.jsx(Ce, {
            labelPlacement: n.data.labelPlacement,
            sx: {
              m: 0,
              pr: n.data.labelPlacement === "end" && !n.data.hideLabels ? 1 : 0,
              pl: n.data.labelPlacement === "start" && !n.data.hideLabels ? 1 : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: n.data.hideLabels ? "center" : "flex-start",
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
                  height: d ? `${d}px` : "auto",
                  maxWidth: d || void 0,
                  maxHeight: d || void 0,
                  flexShrink: 0
                },
                "&.Mui-disabled": {
                  "&.Mui-checked": {
                    color: i.iconColor || "primary.main"
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
            control: t.jsx(Fe, {
              disabled: n.data.onlyDisplay,
              checkedIcon: i.icon ? t.jsxs(B, {
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
                      color: i.iconColor,
                      position: "relative",
                      width: "100%",
                      height: "100%"
                    }
                  }),
                  t.jsx(B, {
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
                      src: i.icon,
                      style: {
                        position: "relative",
                        left: `calc(0px + ${i.iconXOffset})`,
                        top: `calc(0px - ${i.iconYOffset})`,
                        width: `calc(${p.iconSizeOnly} * 0.5)`,
                        ...pe(i.icon, i.iconColor, i.forceColorMask)
                      }
                    })
                  })
                ]
              }) : t.jsx($e, {
                sx: {
                  color: i.iconColor,
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
                maxHeight: l ? a || void 0 : d,
                "& .MuiTouchRipple-root": {
                  color: n.data[`iconColor${C + 1}`] || n.data.iconColor || p.textColor
                },
                "& .MuiSvgIcon-root": {
                  width: "100%",
                  height: "100%",
                  maxHeight: l ? a || void 0 : d
                }
              },
              checked: String(i.value) === String(g),
              onChange: x,
              value: i.value
            }),
            label: n.data.hideLabels ? void 0 : t.jsx(de, {
              component: B,
              variant: "body2",
              sx: {
                width: "100%",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-word",
                fontSize: i.valueSize,
                textAlign: "left",
                background: W(i.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: W(i.textColor) ? "transparent" : i.textColor
              },
              contentEditable: "false",
              dangerouslySetInnerHTML: {
                __html: i.label
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
    onStateUpdated(o, a) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(o) {
      super.renderWidgetBody(o);
      const a = {
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
      return o.widget.data.noCard || o.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, me(this.wrapContent(t.jsx(Ge, {})), a);
    }
  };
});
export {
  __tla,
  H as default
};
