import { c as y, j as o, s as S, r as T, m as N, a as K, g as X, u as Y, a9 as Z, aa as Q, b as ee, d as te, i as b, e as oe, o as G, a0 as W, C as v, N as ae, a7 as ie, v as ne, A as se, E as le, T as re, z as U, w as _, S as de, y as ce, G as pe, H as L, J as ue, K as he, __tla as __tla_0 } from "./CollectionBaseImage-CMDyRI6z.js";
import { u as me, d as fe, __tla as __tla_1 } from "./useValueState-BHrGvNaa.js";
import { v as c, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as ge, __tla as __tla_3 } from "./index-Bt53gQws.js";
import { S as xe, __tla as __tla_4 } from "./Stack-B_C-u5Tq.js";
import { F as Ce, __tla as __tla_5 } from "./FormControlLabel-Bh1aofuX.js";
import { S as ve, __tla as __tla_6 } from "./SwitchBase-CI-PgTMb.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_7 } from "./useData-EvQhohzn.js";
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
  const be = y(o.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "RadioButtonUnchecked"), ye = y(o.jsx("path", {
    d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
  }), "RadioButtonChecked"), Se = S("span", {
    name: "MuiRadioButtonIcon",
    shouldForwardProp: T
  })({
    position: "relative",
    display: "flex"
  }), ke = S(be, {
    name: "MuiRadioButtonIcon"
  })({
    transform: "scale(1)"
  }), we = S(ye, {
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
  function H(e) {
    const { checked: t = false, classes: a = {}, fontSize: s } = e, r = {
      ...e,
      checked: t
    };
    return o.jsxs(Se, {
      className: a.root,
      ownerState: r,
      children: [
        o.jsx(ke, {
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
  const Re = c.createContext(void 0);
  function je() {
    return c.useContext(Re);
  }
  function Ie(e) {
    return X("MuiRadio", e);
  }
  const V = K("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall"
  ]), Pe = (e) => {
    const { classes: t, color: a, size: s } = e, r = {
      root: [
        "root",
        `color${b(a)}`,
        s !== "medium" && `size${b(s)}`
      ]
    };
    return {
      ...t,
      ...oe(r, Ie, t)
    };
  }, Be = S(ve, {
    shouldForwardProp: (e) => T(e) || e === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        a.size !== "medium" && t[`size${b(a.size)}`],
        t[`color${b(a.color)}`]
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
  function _e(e, t) {
    return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
  }
  const ze = o.jsx(H, {
    checked: true
  }), Me = o.jsx(H, {}), Fe = c.forwardRef(function(t, a) {
    const s = Y({
      props: t,
      name: "MuiRadio"
    }), { checked: r, checkedIcon: n = ze, color: p = "primary", icon: u = Me, name: k, onChange: g, size: h = "medium", className: w, disabled: R, disableRipple: l = false, slots: d = {}, slotProps: x = {}, inputProps: i, ...C } = s, z = Z();
    let m = R;
    z && typeof m > "u" && (m = z.disabled), m ??= false;
    const j = {
      ...s,
      disabled: m,
      disableRipple: l,
      color: p,
      size: h
    }, M = Pe(j), f = je();
    let I = r;
    const A = Q(g, f && f.onChange);
    let P = k;
    f && (typeof I > "u" && (I = _e(f.value, s.value)), typeof P > "u" && (P = f.name));
    const B = x.input ?? i, [q, J] = ee("root", {
      ref: a,
      elementType: Be,
      className: te(M.root, w),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: d,
        slotProps: x,
        ...C
      },
      getSlotProps: (F) => ({
        ...F,
        onChange: (O, ...$) => {
          var _a;
          (_a = F.onChange) == null ? void 0 : _a.call(F, O, ...$), A(O, ...$);
        }
      }),
      ownerState: j,
      additionalProps: {
        type: "radio",
        icon: c.cloneElement(u, {
          fontSize: u.props.fontSize ?? h
        }),
        checkedIcon: c.cloneElement(n, {
          fontSize: n.props.fontSize ?? h
        }),
        disabled: m,
        name: P,
        checked: I,
        slots: d,
        slotProps: {
          input: typeof B == "function" ? B(j) : B
        }
      }
    });
    return o.jsx(q, {
      ...J,
      classes: M
    });
  }), Oe = () => [
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
      component: (e, t, a, s) => o.jsx(ae, {
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
  ], $e = y(o.jsx("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonChecked"), D = y(o.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
  }), "RadioButtonUnchecked");
  function Ge() {
    const [e, t] = c.useState(null), { height: a } = ie(e), s = c.useContext(ne), { widget: { data: { oidObject: r } }, widget: n } = s, { data: p, states: u, statesNew: k } = ge("oid"), { value: g, updateValue: h } = me("oid"), w = r == null ? void 0 : r.type, R = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(w ?? ""), l = n.data.radioOrientation === "horizontal", d = a && u.length > 0 ? a / u.length : void 0, x = (i) => {
      h(i.target.value);
    };
    return o.jsxs(se, {
      isValidType: R,
      data: p,
      oidValue: g,
      children: [
        o.jsx(le, {
          data: p,
          widget: n
        }),
        o.jsx(xe, {
          spacing: 0,
          ref: t,
          direction: l ? "row" : "column",
          sx: {
            width: l ? "100%" : "auto",
            height: "100%",
            justifyContent: l ? "space-around" : "flex-start",
            alignItems: l ? "center" : "stretch"
          },
          children: k.map((i, C) => o.jsx(Ce, {
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
            control: o.jsx(Fe, {
              disabled: n.data.onlyDisplay,
              checkedIcon: i.icon ? o.jsxs(_, {
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
                  o.jsx(D, {
                    sx: {
                      color: i.iconColor,
                      position: "relative",
                      width: "100%",
                      height: "100%"
                    }
                  }),
                  o.jsx(_, {
                    sx: {
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    },
                    children: o.jsx(de, {
                      alt: "",
                      src: i.icon,
                      style: {
                        position: "relative",
                        left: `calc(0px + ${i.iconXOffset})`,
                        top: `calc(0px - ${i.iconYOffset})`,
                        width: `calc(${p.iconSizeOnly} * 0.5)`,
                        ...ce(i.icon, i.iconColor, i.forceColorMask)
                      }
                    })
                  })
                ]
              }) : o.jsx($e, {
                sx: {
                  color: i.iconColor,
                  width: "100%",
                  height: "100%"
                }
              }),
              icon: o.jsx(D, {
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
            label: n.data.hideLabels ? void 0 : o.jsx(re, {
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
                fontSize: i.valueSize,
                textAlign: "left",
                background: U(i.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: U(i.textColor) ? "transparent" : i.textColor
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
  E = class extends pe {
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
              ...ue([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...fe(),
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
      return E.getWidgetInfo();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, he(this.wrapContent(o.jsx(Ge, {})), a);
    }
  };
});
export {
  __tla,
  E as default
};
