import { j as t, B as b, L as W, I as L, P as M, T as A, __tla as __tla_0 } from "./tinycolor-CLG1zgRY.js";
import { G as F, __tla as __tla_1 } from "./usePopoverPositioning-BenXbV4b.js";
import { C as D, D as N, u as z, g as T, a as G, c as B, w as H, __tla as __tla_2 } from "./useData-BTquM2A9.js";
import { g as R, C as E, c as U, __tla as __tla_3 } from "./CollectionBaseImage-V9l6RwxW.js";
import { u as P, d as $, __tla as __tla_4 } from "./useValueState-0S1Cr_pw.js";
import { s as q, __tla as __tla_5 } from "./stateFields-QJhIDs0q.js";
import { v as s, __tla as __tla_6 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { I as K, __tla as __tla_7 } from "./Close-B7A8lWm_.js";
import { S as X, __tla as __tla_8 } from "./Slider-dZO7P2QF.js";
import { L as Y, __tla as __tla_9 } from "./ListItem-BwMEp5il.js";
import { L as J, a as Q, __tla as __tla_10 } from "./ListItemText-Cm4JFLWA.js";
import { D as Z, a as ee, b as te, __tla as __tla_11 } from "./DialogTitle-HuV6BuJ1.js";
import { S as oe, __tla as __tla_12 } from "./Stack-7FMkVYqC.js";
import { u as ae, __tla as __tla_13 } from "./useHtmlValue-3ISCcM5X.js";
import { i as ie } from "./isOidReadOnly-CpnU56qh.js";
import { B as se, __tla as __tla_14 } from "./Button-dZ_pwx8T.js";
import { A as ne, __tla as __tla_15 } from "./Avatar-C5yIjl4W.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import "./preload-helper-PPVm8Dsz.js";
import { __tla as __tla_16 } from "./Delete-VRvdIUoO.js";
import "./tslib.es6-F1e60Aum.js";
import { __tla as __tla_17 } from "./listItemTextClasses-nVrLWyOL.js";
import { __tla as __tla_18 } from "./styled-CQDMXjYA.js";
import { __tla as __tla_19 } from "./useThemeProps-BJ14EHU2.js";
let _;
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
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_12;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_13;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_14;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_15;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_16;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_17;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_18;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_19;
    } catch {
    }
  })()
]).then(async () => {
  const le = ({ widgetStates: c, data: e, open: p, closeHandler: h }) => {
    const { widget: a, getPropertyValue: j } = s.useContext(D), l = a.data.oidObject, m = a.data.onlyStates, [d, y] = s.useState(() => {
      const o = j("oid");
      return typeof o == "number" ? o : 0;
    }), { updateValue: g } = P("oid"), x = s.useMemo(() => {
      const o = l == null ? void 0 : l.commonStates, i = l == null ? void 0 : l.type, n = l == null ? void 0 : l.name, C = l == null ? void 0 : l.minValue, O = l == null ? void 0 : l.maxValue;
      return {
        commonStates: o,
        oidType: i,
        oidName: n,
        minValue: C,
        maxValue: O
      };
    }, [
      l
    ]), u = s.useCallback((o) => {
      g(o);
    }, [
      g
    ]), f = s.useCallback((o, i) => {
      const n = Array.isArray(i) ? i[0] : i;
      y(n), u(n);
    }, [
      u
    ]), w = s.useCallback((o, i) => {
      (i === "backdropClick" || i === "escapeKeyDown") && h();
    }, [
      h
    ]), S = s.useCallback(() => {
      h();
    }, [
      h
    ]), v = s.useCallback((o) => (i) => {
      i.preventDefault();
      const n = Number(o);
      isNaN(n) || y(n), u(o);
    }, [
      u
    ]), k = s.useMemo(() => {
      const { oidType: o, commonStates: i, minValue: n, maxValue: C } = x;
      return o === "number" && !m && n !== void 0 && C !== void 0 ? t.jsx(b, {
        sx: {
          px: 3
        },
        children: t.jsx(X, {
          sx: {
            pb: i ? 4 : 3
          },
          size: "small",
          min: n,
          max: C,
          marks: [
            {
              value: n,
              label: String(n)
            },
            {
              value: C,
              label: String(C)
            }
          ],
          valueLabelDisplay: "auto",
          value: d,
          onChange: f
        })
      }) : null;
    }, [
      x,
      m,
      d,
      f
    ]), V = s.useMemo(() => !c || !Object.keys(c).length ? null : t.jsx(W, {
      children: Object.entries(c).map(([o, i]) => t.jsx(Y, {
        disablePadding: true,
        children: t.jsx(J, {
          onClick: v(o),
          children: t.jsx(Q, {
            primaryTypographyProps: {
              variant: "body2"
            },
            primary: String(i)
          })
        })
      }, o))
    }), [
      c,
      v
    ]), I = s.useMemo(() => e.header || x.oidName || "Change Value", [
      e.header,
      x.oidName
    ]), r = s.useMemo(() => c && Object.keys(c).length > 0, [
      c
    ]);
    return t.jsxs(Z, {
      open: p,
      onClose: w,
      maxWidth: "xs",
      fullWidth: true,
      PaperProps: {
        sx: {
          bgcolor: e.backgroundColor,
          color: e.textColor
        }
      },
      children: [
        t.jsx(ee, {
          sx: {
            m: 0,
            p: 2
          },
          id: "customized-dialog-title",
          children: I
        }),
        t.jsx(L, {
          "aria-label": "close",
          onClick: S,
          sx: (o) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: o.palette.grey[500]
          }),
          children: t.jsx(K, {})
        }),
        t.jsx(te, {
          sx: {
            overflow: "unset"
          },
          children: t.jsxs(oe, {
            divider: r && t.jsx(N, {}),
            spacing: 0,
            component: M,
            children: [
              k,
              V
            ]
          })
        })
      ]
    });
  };
  function re() {
    const c = s.useContext(D), { widget: e, theme: p } = c, h = e.data.oidObject, { data: a, widgetStates: j, states: l } = z("oid"), { value: m, updateValue: d } = P("oid"), [y, g] = s.useState(false), x = h == null ? void 0 : h.type, u = e.data.onlyStates, f = ae(m, e, a), w = f != null ? String(f) : "", S = () => {
      const r = e.data.value1;
      u && l.length === 2 && e.data.statePushButton && r !== void 0 && setTimeout(() => d(r), 0);
    }, v = () => {
      const r = e.data.value2;
      u && l.length === 2 && e.data.statePushButton && r !== void 0 && setTimeout(() => d(r), 0);
    }, k = s.useCallback(() => {
      if (!u) {
        g(true);
        return;
      }
      switch (l.length) {
        case 1:
          e.data.value1 !== void 0 && d(e.data.value1);
          break;
        case 2:
          e.data.value1 !== void 0 && e.data.value2 !== void 0 && (!e.data.statePushButton && String(m) === String(e.data.value1) ? d(e.data.value2) : d(e.data.value1));
          break;
        default:
          g(true);
          break;
      }
    }, [
      m,
      u,
      l.length,
      e.data.statePushButton,
      e.data.value1,
      e.data.value2,
      d
    ]), V = t.jsx(se, {
      disabled: ie(e.data),
      onClick: k,
      onMouseDown: S,
      onMouseUp: v,
      onMouseOut: v,
      onTouchStart: S,
      onTouchEnd: v,
      sx: {
        width: "100%",
        height: "100%",
        color: a.textColor || "inherit",
        "&:hover": {
          bgcolor: "transparent"
        }
      },
      children: t.jsxs(b, {
        sx: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: [
          !e.data.noIcon && a.icon && (() => {
            const r = a.icon, o = a.iconColor || p.palette.primary.main, i = a.forceColorMask, n = R(r, o, i);
            return t.jsx(b, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                width: "100%",
                height: "100%"
              },
              children: t.jsx(ne, {
                variant: "square",
                src: r || void 0,
                slotProps: {
                  img: {
                    style: {
                      objectFit: "contain",
                      ...n
                    }
                  }
                },
                sx: {
                  overflow: "visible",
                  width: a.iconSizeOnly,
                  height: a.iconSizeOnly,
                  left: `calc(0px + ${a.iconXOffset})`,
                  top: `calc(0px - ${a.iconYOffset})`
                }
              })
            });
          })(),
          !e.data.noValue && t.jsx(b, {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              width: "100%",
              height: "100%"
            },
            children: t.jsx(A, {
              component: b,
              variant: "body2",
              sx: {
                fontSize: a.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                background: T(a.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: T(a.textColor) ? "transparent" : a.textColor,
                textTransform: "none",
                px: 1,
                pl: 0,
                pr: 1,
                width: "100%",
                height: "100%",
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                whiteSpace: "normal",
                hyphens: "auto",
                "& > div": {
                  textAlign: "left",
                  display: "inline-block"
                }
              },
              dangerouslySetInnerHTML: {
                __html: `<div style="text-align: left; display: inline-block;">${w || ""}</div>`
              }
            })
          })
        ]
      })
    }), I = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(x ?? "");
    return t.jsxs(t.Fragment, {
      children: [
        y && t.jsx(le, {
          data: {
            sampleInterval: false,
            sampleIntervalValue: 200,
            delay: 100
          },
          widgetStates: j,
          open: y,
          closeHandler: () => g(false)
        }),
        t.jsxs(G, {
          isValidType: I,
          data: a,
          oidValue: m,
          children: [
            t.jsx(E, {
              data: a,
              widget: e
            }),
            t.jsx(b, {
              sx: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: V
            })
          ]
        })
      ]
    });
  }
  _ = class extends F {
    static getWidgetInfo() {
      return {
        id: "tplStateCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visSetColor: "#0C0A43",
        visName: "StateCollectionWidget",
        visWidgetLabel: "state_collection_widget",
        visOrder: 4,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...B()
            ]
          },
          {
            name: "button",
            label: "group_button",
            fields: [
              ...U([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...$(),
              ...q()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...B({
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
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-state.png"
      };
    }
    getWidgetInfo() {
      return _.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(e, p) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const p = {
        id: e.id,
        refService: e.refService,
        style: e.style,
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, H(this.wrapContent(t.jsx(re, {})), p);
    }
  };
});
export {
  __tla,
  _ as default
};
