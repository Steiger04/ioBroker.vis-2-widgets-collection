import { a as F, g as B, u as L, L as w, k as P, l as D, j as c, s as z, d as k, e as G, n as U, r as H, m as N, o as u, a5 as M, C as j, K as A, a6 as E, v as J, a3 as K, A as X, E as Y, w as O, a7 as q, y as Q, T as Z, G as ee, H as V, J as te, __tla as __tla_0 } from "./useData-2dnP1q4b.js";
import { o as ae, c as oe, __tla as __tla_1 } from "./commonObjectFields-DPT5kyDR.js";
import { u as _, d as ie, __tla as __tla_2 } from "./useValueState-CcNNBxyO.js";
import { v, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as ne, __tla as __tla_4 } from "./SafeImg-BzmzM1r9.js";
import { l as T, __tla as __tla_5 } from "./listItemTextClasses-Ci32o1By.js";
import { S as re, __tla as __tla_6 } from "./Stack-Buihj4Jh.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let W;
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
  const R = F("MuiListItemIcon", [
    "root",
    "alignItemsFlexStart"
  ]);
  function se(t) {
    return B("MuiMenuItem", t);
  }
  const x = F("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]), le = (t, a) => {
    const { ownerState: l } = t;
    return [
      a.root,
      l.dense && a.dense,
      l.divider && a.divider,
      !l.disableGutters && a.gutters
    ];
  }, ce = (t) => {
    const { disabled: a, dense: l, divider: e, disableGutters: r, selected: f, classes: m } = t, p = G({
      root: [
        "root",
        l && "dense",
        a && "disabled",
        !r && "gutters",
        e && "divider",
        f && "selected"
      ]
    }, se, m);
    return {
      ...m,
      ...p
    };
  }, de = z(U, {
    shouldForwardProp: (t) => H(t) || t === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: le
  })(N(({ theme: t }) => ({
    ...t.typography.body1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    minHeight: 48,
    paddingTop: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: (t.vars || t).palette.action.hover,
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${x.selected}`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : u(t.palette.primary.main, t.palette.action.selectedOpacity),
      [`&.${x.focusVisible}`]: {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : u(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
      }
    },
    [`&.${x.selected}:hover`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : u(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : u(t.palette.primary.main, t.palette.action.selectedOpacity)
      }
    },
    [`&.${x.focusVisible}`]: {
      backgroundColor: (t.vars || t).palette.action.focus
    },
    [`&.${x.disabled}`]: {
      opacity: (t.vars || t).palette.action.disabledOpacity
    },
    [`& + .${M.root}`]: {
      marginTop: t.spacing(1),
      marginBottom: t.spacing(1)
    },
    [`& + .${M.inset}`]: {
      marginLeft: 52
    },
    [`& .${T.root}`]: {
      marginTop: 0,
      marginBottom: 0
    },
    [`& .${T.inset}`]: {
      paddingLeft: 36
    },
    [`& .${R.root}`]: {
      minWidth: 36
    },
    variants: [
      {
        props: ({ ownerState: a }) => !a.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: a }) => a.divider,
        style: {
          borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
          backgroundClip: "padding-box"
        }
      },
      {
        props: ({ ownerState: a }) => !a.dense,
        style: {
          [t.breakpoints.up("sm")]: {
            minHeight: "auto"
          }
        }
      },
      {
        props: ({ ownerState: a }) => a.dense,
        style: {
          minHeight: 32,
          paddingTop: 4,
          paddingBottom: 4,
          ...t.typography.body2,
          [`& .${R.root} svg`]: {
            fontSize: "1.25rem"
          }
        }
      }
    ]
  }))), pe = v.forwardRef(function(a, l) {
    const e = L({
      props: a,
      name: "MuiMenuItem"
    }), { autoFocus: r = false, component: f = "li", dense: m = false, divider: i = false, disableGutters: p = false, focusVisibleClassName: b, role: h = "menuitem", tabIndex: S, className: C, ...I } = e, n = v.useContext(w), $ = v.useMemo(() => ({
      dense: m || n.dense || false,
      disableGutters: p
    }), [
      n.dense,
      m,
      p
    ]), d = v.useRef(null);
    P(() => {
      r && d.current && d.current.focus();
    }, [
      r
    ]);
    const o = {
      ...e,
      dense: $.dense,
      divider: i,
      disableGutters: p
    }, s = ce(e), y = D(d, l);
    let g;
    return e.disabled || (g = S !== void 0 ? S : -1), c.jsx(w.Provider, {
      value: $,
      children: c.jsx(de, {
        ref: y,
        role: h,
        tabIndex: g,
        component: f,
        focusVisibleClassName: k(s.focusVisible, b),
        className: k(s.root, C),
        ...I,
        ownerState: o,
        classes: s
      })
    });
  }), ue = () => [
    {
      type: "custom",
      component: () => c.jsx(j, {
        dividerText: "selection"
      })
    },
    {
      name: "cid",
      type: "id",
      label: "cid",
      onChange: ae([
        "boolean",
        "number",
        "string",
        "mixed"
      ], "cid")
    },
    {
      type: "custom",
      component: () => c.jsx(j, {
        dividerText: "arrow"
      })
    },
    {
      name: "arrowColor",
      label: "arrow_color",
      default: "",
      type: "custom",
      fallbackFields: [
        ""
      ],
      noGradient: true,
      component: (t, a, l, e) => c.jsx(A, {
        field: t,
        data: a,
        onDataChange: l,
        props: e
      })
    }
  ];
  function me() {
    var _a;
    const t = v.useRef(null), { width: a } = E(t == null ? void 0 : t.current), l = v.useContext(J), { widget: e, theme: r } = l, f = e.data.cidObject, m = e.data.oidObject, { data: i, states: p } = K("oid"), { value: b, updateValue: h } = _("oid"), { updateValue: S } = _("cid"), C = m == null ? void 0 : m.type, I = C === "boolean" || C === "number" || C === "string" || C === "mixed", n = p.findIndex((d) => String(d.value) === String(b)), $ = (d) => {
      const o = d.target.value, y = p[o].value;
      f && S(y), h(y);
    };
    return c.jsxs(X, {
      isValidType: I,
      data: i,
      oidValue: b,
      children: [
        c.jsx(Y, {
          data: {
            ...i,
            forceColorMaskActive: (_a = p[n]) == null ? void 0 : _a.forceColorMask
          },
          widget: e
        }),
        c.jsx(O, {
          ref: t,
          sx: {
            overflow: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: c.jsx(q, {
            variant: "standard",
            disableUnderline: true,
            value: n !== -1 ? n : "",
            onChange: $,
            MenuProps: {
              sx: {
                maxWidth: a
              },
              MenuListProps: {
                sx: {
                  background: i.backgroundColor ? u(i.backgroundColor, 0.7) : i.background
                }
              }
            },
            sx: {
              width: "100%",
              height: "100%",
              maxWidth: `calc(${a}px - 10%)`,
              "& .MuiSelect-select": {
                backgroundColor: u(n !== -1 ? e.data[`iconSmall${n + 1}`] || e.data[`icon${n + 1}`] || e.data.iconSmall || e.data.icon ? e.data[`iconColor${n + 1}`] || e.data.iconColor || i.iconColor || r.palette.primary.main : e.data[`textColor${n + 1}`] || e.data.textColor || i.textColor || r.palette.primary.main : e.data.iconColor || i.textColor || r.palette.primary.main, 0.15),
                paddingLeft: 1
              },
              "& .MuiSelect-icon": {
                color: e.data.arrowColor || e.data[`iconColor${n + 1}`] || r.palette.primary.main
              },
              "&.Mui-focused": {
                ariaHidden: "true",
                "& .MuiSelect-select": {
                  backgroundColor: u(n !== -1 ? e.data[`iconSmall${n + 1}`] || e.data[`icon${n + 1}`] || e.data.iconSmall || e.data.icon ? e.data[`iconColor${n + 1}`] || e.data.iconColor || i.iconColor || r.palette.primary.main : e.data[`textColor${n + 1}`] || e.data.textColor || i.textColor || r.palette.primary.main : e.data.iconColor || i.textColor || r.palette.primary.main, 0.2),
                  paddingLeft: 1
                }
              }
            },
            children: p.map((d, o) => {
              var _a2;
              const s = e.data[`iconSmall${o + 1}`] || e.data[`icon${o + 1}`] || e.data.iconSmall || e.data.icon, g = s ? e.data[`iconColor${o + 1}`] || e.data.iconColor || i.iconColor || r.palette.primary.main : e.data[`textColor${o + 1}`] || e.data.textColor || i.textColor || r.palette.primary.main;
              return c.jsx(pe, {
                value: o,
                sx: {
                  "& .MuiTouchRipple-root": {
                    color: g
                  },
                  "&.Mui-selected": {
                    backgroundColor: u(g, 0.16)
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: u(g, 0.24)
                  },
                  "&:hover": {
                    backgroundColor: u(g, 0.08)
                  },
                  background: e.data[`backgroundColor${o + 1}`] && `${e.data[`backgroundColor${o + 1}`]}!important` || `${e.data[`background${o + 1}`]}!important`
                },
                children: c.jsxs(re, {
                  direction: "row",
                  spacing: s ? 1 : 0,
                  sx: {
                    alignItems: "center"
                  },
                  children: [
                    c.jsx(ne, {
                      alt: "",
                      src: typeof s == "string" ? s : typeof s == "number" ? s.toString() : void 0,
                      style: {
                        position: "relative",
                        top: `calc(0px - ${e.data[`iconYOffset${o + 1}`]})`,
                        right: `calc(0px - ${e.data[`iconXOffset${o + 1}`]})`,
                        height: !s && "0px" || (typeof e.data[`iconSize${o + 1}`] == "number" ? `calc(24px * ${e.data[`iconSize${o + 1}`]} / 100)` : typeof e.data.iconSize == "number" ? `calc(24px * ${e.data.iconSize} / 100)` : "24px"),
                        ...Q(typeof s == "string" ? s : typeof s == "number" ? s.toString() : void 0, String(b) === String(e.data[`value${o + 1}`]) && e.data.iconColorActive || e.data[`iconColor${o + 1}`] || e.data.iconColor || i.iconColor || r.palette.primary.main, d.forceColorMask)
                      }
                    }),
                    c.jsx(Z, {
                      component: O,
                      variant: "subtitle2",
                      sx: {
                        whiteSpace: "pre-wrap",
                        fontSize: e.data[`valueSize${o + 1}`] || i.valueSize,
                        textAlign: "left",
                        bgcolor: "transparent",
                        color: e.data[`textColor${o + 1}`] || e.data.textColor || i.textColor || r.palette.primary.main,
                        textTransform: "none",
                        width: "100%",
                        height: "100%",
                        flexGrow: 1,
                        alignContent: "center"
                      },
                      contentEditable: "false",
                      dangerouslySetInnerHTML: {
                        __html: e.data[`alias${o + 1}`] && ((_a2 = e.data[`alias${o + 1}`]) == null ? void 0 : _a2.replace(/(\r\n|\n|\r)/gm, "")) || e.data[`value${o + 1}`] && `${e.data[`value${o + 1}`]}${m == null ? void 0 : m.unit}` || ""
                      }
                    })
                  ]
                })
              }, String(d.value));
            })
          })
        })
      ]
    });
  }
  W = class extends ee {
    static getWidgetInfo() {
      return {
        id: "tplSelectCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "SelectCollectionWidget",
        visWidgetLabel: "select_collection_widget",
        visOrder: 7,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...V({
                groupName: ""
              })
            ]
          },
          {
            name: "select_collection",
            label: "group_select_collection",
            fields: [
              ...oe([
                "boolean",
                "number",
                "string",
                "mixed"
              ]),
              ...ie(),
              ...ue()
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
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-select.png"
      };
    }
    getWidgetInfo() {
      return W.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(a, l) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(a) {
      super.renderWidgetBody(a);
      const l = {
        id: a.id,
        refService: a.refService,
        style: a.style,
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
      return a.widget.data.noCard || a.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, te(this.wrapContent(c.jsx(me, {})), l);
    }
  };
});
export {
  __tla,
  W as default
};
