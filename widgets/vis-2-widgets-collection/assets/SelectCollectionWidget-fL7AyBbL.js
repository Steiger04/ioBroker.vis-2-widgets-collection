import { a as F, g as B, u as L, L as w, k as D, l as P, j as l, s as z, d as k, e as U, n as H, r as N, m as G, o as p, X as M, Y as E, C as O, Z as A, v as X, z as Y, w as j, E as J, G as K, x as _, _ as Z, A as q, T as Q, H as ee, J as V, K as te, N as ae, O as oe, __tla as __tla_0 } from "./commonFields-tb-swNng.js";
import { v, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as ne, __tla as __tla_2 } from "./SafeImg-617kPqEq.js";
import { l as T, __tla as __tla_3 } from "./listItemTextClasses-BAeC8mbD.js";
import { S as ie, __tla as __tla_4 } from "./Stack-evz0F_Jg.js";
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
  })()
]).then(async () => {
  const R = F("MuiListItemIcon", [
    "root",
    "alignItemsFlexStart"
  ]);
  function re(t) {
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
  ]), se = (t, a) => {
    const { ownerState: c } = t;
    return [
      a.root,
      c.dense && a.dense,
      c.divider && a.divider,
      !c.disableGutters && a.gutters
    ];
  }, le = (t) => {
    const { disabled: a, dense: c, divider: e, disableGutters: r, selected: f, classes: m } = t, u = U({
      root: [
        "root",
        c && "dense",
        a && "disabled",
        !r && "gutters",
        e && "divider",
        f && "selected"
      ]
    }, re, m);
    return {
      ...m,
      ...u
    };
  }, ce = z(H, {
    shouldForwardProp: (t) => N(t) || t === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: se
  })(G(({ theme: t }) => ({
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
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : p(t.palette.primary.main, t.palette.action.selectedOpacity),
      [`&.${x.focusVisible}`]: {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : p(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
      }
    },
    [`&.${x.selected}:hover`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : p(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : p(t.palette.primary.main, t.palette.action.selectedOpacity)
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
  }))), de = v.forwardRef(function(a, c) {
    const e = L({
      props: a,
      name: "MuiMenuItem"
    }), { autoFocus: r = false, component: f = "li", dense: m = false, divider: n = false, disableGutters: u = false, focusVisibleClassName: b, role: h = "menuitem", tabIndex: S, className: C, ...I } = e, i = v.useContext(w), $ = v.useMemo(() => ({
      dense: m || i.dense || false,
      disableGutters: u
    }), [
      i.dense,
      m,
      u
    ]), d = v.useRef(null);
    D(() => {
      r && d.current && d.current.focus();
    }, [
      r
    ]);
    const o = {
      ...e,
      dense: $.dense,
      divider: n,
      disableGutters: u
    }, s = le(e), y = P(d, c);
    let g;
    return e.disabled || (g = S !== void 0 ? S : -1), l.jsx(w.Provider, {
      value: $,
      children: l.jsx(ce, {
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
  }), pe = () => [
    {
      type: "custom",
      component: () => l.jsx(O, {
        dividerText: "selection"
      })
    },
    {
      name: "cid",
      type: "id",
      label: "cid",
      onChange: E([
        "boolean",
        "number",
        "string",
        "mixed"
      ], "cid")
    },
    {
      type: "custom",
      component: () => l.jsx(O, {
        dividerText: "arrow"
      })
    },
    {
      name: "arrowColor",
      label: "arrow_color",
      type: "color"
    }
  ];
  function ue() {
    const t = v.useRef(null), { width: a } = A(t == null ? void 0 : t.current), c = v.useContext(X), { widget: e, theme: r } = c, f = e.data.cidObject, m = e.data.oidObject, { data: n, states: u } = Y("oid"), { value: b, updateValue: h } = j("oid"), { updateValue: S } = j("cid"), C = m == null ? void 0 : m.type, I = C === "boolean" || C === "number" || C === "string" || C === "mixed", i = u.findIndex((d) => String(d.value) === String(b)), $ = (d) => {
      const o = d.target.value, y = u[o].value;
      f && S(y), h(y);
    };
    return l.jsxs(J, {
      isValidType: I,
      data: n,
      oidValue: b,
      children: [
        l.jsx(K, {
          data: n,
          widget: e
        }),
        l.jsx(_, {
          ref: t,
          sx: {
            overflow: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: l.jsx(Z, {
            variant: "standard",
            disableUnderline: true,
            value: i !== -1 ? i : "",
            onChange: $,
            MenuProps: {
              sx: {
                maxWidth: a
              },
              MenuListProps: {
                sx: {
                  background: n.backgroundColor ? p(n.backgroundColor, 0.7) : n.background
                }
              }
            },
            sx: {
              width: "100%",
              height: "100%",
              maxWidth: `calc(${a}px - 10%)`,
              "& .MuiSelect-select": {
                backgroundColor: p(i !== -1 ? e.data[`iconSmall${i + 1}`] || e.data[`icon${i + 1}`] || e.data.iconSmall || e.data.icon ? e.data[`iconColor${i + 1}`] || e.data.iconColor || n.iconColor || r.palette.primary.main : e.data[`textColor${i + 1}`] || e.data.textColor || n.textColor || r.palette.primary.main : e.data.iconColor || n.textColor || r.palette.primary.main, 0.15),
                paddingLeft: 1
              },
              "& .MuiSelect-icon": {
                color: i !== -1 ? e.data[`iconSmall${i + 1}`] || e.data[`icon${i + 1}`] || e.data.iconSmall || e.data.icon ? e.data[`iconColor${i + 1}`] || e.data.iconColor || n.iconColor || r.palette.primary.main : e.data[`textColor${i + 1}`] || e.data.textColor || n.textColor || r.palette.primary.main : e.data.arrowColor || e.data.iconColor || n.textColor || r.palette.primary.main
              },
              "&.Mui-focused": {
                ariaHidden: "true",
                "& .MuiSelect-select": {
                  backgroundColor: p(i !== -1 ? e.data[`iconSmall${i + 1}`] || e.data[`icon${i + 1}`] || e.data.iconSmall || e.data.icon ? e.data[`iconColor${i + 1}`] || e.data.iconColor || n.iconColor || r.palette.primary.main : e.data[`textColor${i + 1}`] || e.data.textColor || n.textColor || r.palette.primary.main : e.data.iconColor || n.textColor || r.palette.primary.main, 0.2),
                  paddingLeft: 1
                }
              }
            },
            children: u.map((d, o) => {
              var _a;
              const s = e.data[`iconSmall${o + 1}`] || e.data[`icon${o + 1}`] || e.data.iconSmall || e.data.icon, g = s ? e.data[`iconColor${o + 1}`] || e.data.iconColor || n.iconColor || r.palette.primary.main : e.data[`textColor${o + 1}`] || e.data.textColor || n.textColor || r.palette.primary.main;
              return l.jsx(de, {
                value: o,
                sx: {
                  "& .MuiTouchRipple-root": {
                    color: g
                  },
                  "&.Mui-selected": {
                    backgroundColor: p(g, 0.16)
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: p(g, 0.24)
                  },
                  "&:hover": {
                    backgroundColor: p(g, 0.08)
                  },
                  background: e.data[`backgroundColor${o + 1}`] && `${e.data[`backgroundColor${o + 1}`]}!important` || `${e.data[`background${o + 1}`]}!important`
                },
                children: l.jsxs(ie, {
                  direction: "row",
                  spacing: s ? 1 : 0,
                  sx: {
                    alignItems: "center"
                  },
                  children: [
                    l.jsx(ne, {
                      alt: "",
                      src: typeof s == "string" ? s : typeof s == "number" ? s.toString() : void 0,
                      style: {
                        position: "relative",
                        top: `calc(0px - ${e.data[`iconYOffset${o + 1}`]})`,
                        right: `calc(0px - ${e.data[`iconXOffset${o + 1}`]})`,
                        height: !s && "0px" || (typeof e.data[`iconSize${o + 1}`] == "number" ? `calc(24px * ${e.data[`iconSize${o + 1}`]} / 100)` : typeof e.data.iconSize == "number" ? `calc(24px * ${e.data.iconSize} / 100)` : "24px"),
                        ...q(typeof s == "string" ? s : typeof s == "number" ? s.toString() : void 0, String(b) === String(e.data[`value${o + 1}`]) && e.data.iconColorActive || e.data[`iconColor${o + 1}`] || e.data.iconColor || n.iconColor || r.palette.primary.main)
                      }
                    }),
                    l.jsx(Q, {
                      component: _,
                      variant: "subtitle2",
                      sx: {
                        whiteSpace: "pre-wrap",
                        fontSize: e.data[`valueSize${o + 1}`] || n.valueSize,
                        textAlign: "left",
                        bgcolor: "transparent",
                        color: e.data[`textColor${o + 1}`] || e.data.textColor || n.textColor || r.palette.primary.main,
                        textTransform: "none",
                        width: "100%",
                        height: "100%",
                        flexGrow: 1,
                        alignContent: "center"
                      },
                      contentEditable: "false",
                      dangerouslySetInnerHTML: {
                        __html: e.data[`alias${o + 1}`] && ((_a = e.data[`alias${o + 1}`]) == null ? void 0 : _a.replace(/(\r\n|\n|\r)/gm, "")) || e.data[`value${o + 1}`] && `${e.data[`value${o + 1}`]}${m == null ? void 0 : m.unit}` || ""
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
              ...te([
                "boolean",
                "number",
                "string",
                "mixed"
              ]),
              ...ae(),
              ...pe()
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
    onStateUpdated(a, c) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(a) {
      super.renderWidgetBody(a);
      const c = {
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
      return a.widget.data.noCard || a.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, oe(this.wrapContent(l.jsx(ue, {})), c);
    }
  };
});
export {
  __tla,
  W as default
};
