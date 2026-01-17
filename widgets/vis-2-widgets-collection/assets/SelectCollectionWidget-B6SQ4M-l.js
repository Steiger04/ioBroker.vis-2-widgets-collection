import { a as F, g as B, u as L, L as w, k as D, l as P, j as l, s as z, d as k, e as U, n as H, r as G, m as N, o as p, a3 as M, C as j, a4 as E, v as A, y as J, E as K, G as X, w as O, a5 as Y, z as q, T as Q, H as Z, J as V, K as tt, __tla as __tla_0 } from "./useData-jcT7BVTY.js";
import { o as et, c as at, __tla as __tla_1 } from "./commonObjectFields-BdQ1taWT.js";
import { u as _, d as ot, __tla as __tla_2 } from "./useValueState-Dh4wU42k.js";
import { v, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as it, __tla as __tla_4 } from "./SafeImg-CrvNCqyH.js";
import { l as T, __tla as __tla_5 } from "./listItemTextClasses-H0DUQLJh.js";
import { S as nt, __tla as __tla_6 } from "./Stack-B9cG0iWf.js";
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
  function rt(e) {
    return B("MuiMenuItem", e);
  }
  const x = F("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]), st = (e, a) => {
    const { ownerState: c } = e;
    return [
      a.root,
      c.dense && a.dense,
      c.divider && a.divider,
      !c.disableGutters && a.gutters
    ];
  }, lt = (e) => {
    const { disabled: a, dense: c, divider: t, disableGutters: r, selected: f, classes: m } = e, u = U({
      root: [
        "root",
        c && "dense",
        a && "disabled",
        !r && "gutters",
        t && "divider",
        f && "selected"
      ]
    }, rt, m);
    return {
      ...m,
      ...u
    };
  }, ct = z(H, {
    shouldForwardProp: (e) => G(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: st
  })(N(({ theme: e }) => ({
    ...e.typography.body1,
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
      backgroundColor: (e.vars || e).palette.action.hover,
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${x.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : p(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${x.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : p(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    },
    [`&.${x.selected}:hover`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : p(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : p(e.palette.primary.main, e.palette.action.selectedOpacity)
      }
    },
    [`&.${x.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${x.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    [`& + .${M.root}`]: {
      marginTop: e.spacing(1),
      marginBottom: e.spacing(1)
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
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box"
        }
      },
      {
        props: ({ ownerState: a }) => !a.dense,
        style: {
          [e.breakpoints.up("sm")]: {
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
          ...e.typography.body2,
          [`& .${R.root} svg`]: {
            fontSize: "1.25rem"
          }
        }
      }
    ]
  }))), dt = v.forwardRef(function(a, c) {
    const t = L({
      props: a,
      name: "MuiMenuItem"
    }), { autoFocus: r = false, component: f = "li", dense: m = false, divider: i = false, disableGutters: u = false, focusVisibleClassName: y, role: h = "menuitem", tabIndex: S, className: C, ...I } = t, n = v.useContext(w), $ = v.useMemo(() => ({
      dense: m || n.dense || false,
      disableGutters: u
    }), [
      n.dense,
      m,
      u
    ]), d = v.useRef(null);
    D(() => {
      r && d.current && d.current.focus();
    }, [
      r
    ]);
    const o = {
      ...t,
      dense: $.dense,
      divider: i,
      disableGutters: u
    }, s = lt(t), b = P(d, c);
    let g;
    return t.disabled || (g = S !== void 0 ? S : -1), l.jsx(w.Provider, {
      value: $,
      children: l.jsx(ct, {
        ref: b,
        role: h,
        tabIndex: g,
        component: f,
        focusVisibleClassName: k(s.focusVisible, y),
        className: k(s.root, C),
        ...I,
        ownerState: o,
        classes: s
      })
    });
  }), pt = () => [
    {
      type: "custom",
      component: () => l.jsx(j, {
        dividerText: "selection"
      })
    },
    {
      name: "cid",
      type: "id",
      label: "cid",
      onChange: et([
        "boolean",
        "number",
        "string",
        "mixed"
      ], "cid")
    },
    {
      type: "custom",
      component: () => l.jsx(j, {
        dividerText: "arrow"
      })
    },
    {
      name: "arrowColor",
      label: "arrow_color",
      type: "color"
    }
  ];
  function ut() {
    const e = v.useRef(null), { width: a } = E(e == null ? void 0 : e.current), c = v.useContext(A), { widget: t, theme: r } = c, f = t.data.cidObject, m = t.data.oidObject, { data: i, states: u } = J("oid"), { value: y, updateValue: h } = _("oid"), { updateValue: S } = _("cid"), C = m == null ? void 0 : m.type, I = C === "boolean" || C === "number" || C === "string" || C === "mixed", n = u.findIndex((d) => String(d.value) === String(y)), $ = (d) => {
      const o = d.target.value, b = u[o].value;
      f && S(b), h(b);
    };
    return l.jsxs(K, {
      isValidType: I,
      data: i,
      oidValue: y,
      children: [
        l.jsx(X, {
          data: i,
          widget: t
        }),
        l.jsx(O, {
          ref: e,
          sx: {
            overflow: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: l.jsx(Y, {
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
                  background: i.backgroundColor ? p(i.backgroundColor, 0.7) : i.background
                }
              }
            },
            sx: {
              width: "100%",
              height: "100%",
              maxWidth: `calc(${a}px - 10%)`,
              "& .MuiSelect-select": {
                backgroundColor: p(n !== -1 ? t.data[`iconSmall${n + 1}`] || t.data[`icon${n + 1}`] || t.data.iconSmall || t.data.icon ? t.data[`iconColor${n + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main : t.data[`textColor${n + 1}`] || t.data.textColor || i.textColor || r.palette.primary.main : t.data.iconColor || i.textColor || r.palette.primary.main, 0.15),
                paddingLeft: 1
              },
              "& .MuiSelect-icon": {
                color: n !== -1 ? t.data[`iconSmall${n + 1}`] || t.data[`icon${n + 1}`] || t.data.iconSmall || t.data.icon ? t.data[`iconColor${n + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main : t.data[`textColor${n + 1}`] || t.data.textColor || i.textColor || r.palette.primary.main : t.data.arrowColor || t.data.iconColor || i.textColor || r.palette.primary.main
              },
              "&.Mui-focused": {
                ariaHidden: "true",
                "& .MuiSelect-select": {
                  backgroundColor: p(n !== -1 ? t.data[`iconSmall${n + 1}`] || t.data[`icon${n + 1}`] || t.data.iconSmall || t.data.icon ? t.data[`iconColor${n + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main : t.data[`textColor${n + 1}`] || t.data.textColor || i.textColor || r.palette.primary.main : t.data.iconColor || i.textColor || r.palette.primary.main, 0.2),
                  paddingLeft: 1
                }
              }
            },
            children: u.map((d, o) => {
              var _a;
              const s = t.data[`iconSmall${o + 1}`] || t.data[`icon${o + 1}`] || t.data.iconSmall || t.data.icon, g = s ? t.data[`iconColor${o + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main : t.data[`textColor${o + 1}`] || t.data.textColor || i.textColor || r.palette.primary.main;
              return l.jsx(dt, {
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
                  background: t.data[`backgroundColor${o + 1}`] && `${t.data[`backgroundColor${o + 1}`]}!important` || `${t.data[`background${o + 1}`]}!important`
                },
                children: l.jsxs(nt, {
                  direction: "row",
                  spacing: s ? 1 : 0,
                  sx: {
                    alignItems: "center"
                  },
                  children: [
                    l.jsx(it, {
                      alt: "",
                      src: typeof s == "string" ? s : typeof s == "number" ? s.toString() : void 0,
                      style: {
                        position: "relative",
                        top: `calc(0px - ${t.data[`iconYOffset${o + 1}`]})`,
                        right: `calc(0px - ${t.data[`iconXOffset${o + 1}`]})`,
                        height: !s && "0px" || (typeof t.data[`iconSize${o + 1}`] == "number" ? `calc(24px * ${t.data[`iconSize${o + 1}`]} / 100)` : typeof t.data.iconSize == "number" ? `calc(24px * ${t.data.iconSize} / 100)` : "24px"),
                        ...q(typeof s == "string" ? s : typeof s == "number" ? s.toString() : void 0, String(y) === String(t.data[`value${o + 1}`]) && t.data.iconColorActive || t.data[`iconColor${o + 1}`] || t.data.iconColor || i.iconColor || r.palette.primary.main)
                      }
                    }),
                    l.jsx(Q, {
                      component: O,
                      variant: "subtitle2",
                      sx: {
                        whiteSpace: "pre-wrap",
                        fontSize: t.data[`valueSize${o + 1}`] || i.valueSize,
                        textAlign: "left",
                        bgcolor: "transparent",
                        color: t.data[`textColor${o + 1}`] || t.data.textColor || i.textColor || r.palette.primary.main,
                        textTransform: "none",
                        width: "100%",
                        height: "100%",
                        flexGrow: 1,
                        alignContent: "center"
                      },
                      contentEditable: "false",
                      dangerouslySetInnerHTML: {
                        __html: t.data[`alias${o + 1}`] && ((_a = t.data[`alias${o + 1}`]) == null ? void 0 : _a.replace(/(\r\n|\n|\r)/gm, "")) || t.data[`value${o + 1}`] && `${t.data[`value${o + 1}`]}${m == null ? void 0 : m.unit}` || ""
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
  W = class extends Z {
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
              ...at([
                "boolean",
                "number",
                "string",
                "mixed"
              ]),
              ...ot(),
              ...pt()
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
      return a.widget.data.noCard || a.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, tt(this.wrapContent(l.jsx(ut, {})), c);
    }
  };
});
export {
  __tla,
  W as default
};
