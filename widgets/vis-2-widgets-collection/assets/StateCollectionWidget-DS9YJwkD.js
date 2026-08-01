import { j as t, B as b, L as W, I as M, P as L, T as A, __tla as __tla_0 } from "./tinycolor-B_2EitDy.js";
import { G as F, __tla as __tla_1 } from "./usePopoverPositioning-CvdKfQR6.js";
import { C as D, D as N, u as z, g as T, a as G, c as B, w as H, __tla as __tla_2 } from "./useData-90UeUAIS.js";
import { g as R, C as E, c as U, __tla as __tla_3 } from "./CollectionBaseImage-u_I-Uett.js";
import { u as P, d as $, __tla as __tla_4 } from "./useValueState-BAhi1BOX.js";
import { s as q, __tla as __tla_5 } from "./stateFields-CrLFISO0.js";
import { v as n, __tla as __tla_6 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { I as K, __tla as __tla_7 } from "./Close-xsT1rNIU.js";
import { S as X, __tla as __tla_8 } from "./Slider-s6U6WgN7.js";
import { L as Y, a as J, b as Q, __tla as __tla_9 } from "./ListItemText-BYVJwaPu.js";
import { D as Z, a as ee, b as te, __tla as __tla_10 } from "./DialogTitle-C4oRTLxw.js";
import { S as oe, __tla as __tla_11 } from "./Stack-ClAvmoIU.js";
import { u as ae, __tla as __tla_12 } from "./useHtmlValue-3ISCcM5X.js";
import { i as se } from "./isOidReadOnly-CpnU56qh.js";
import { B as ne, __tla as __tla_13 } from "./Button-CkZMtQvT.js";
import { A as ie, __tla as __tla_14 } from "./Avatar-p_Emr3oj.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_15 } from "./Delete-lESTXvkD.js";
import "./tslib.es6-F1e60Aum.js";
import { __tla as __tla_16 } from "./listItemTextClasses-1JwjlcRg.js";
import { __tla as __tla_17 } from "./useThemeProps-aftgm_DM.js";
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
  })()
]).then(async () => {
  const le = ({ widgetStates: c, data: e, open: p, closeHandler: h }) => {
    const { widget: a, getPropertyValue: j } = n.useContext(D), l = a.data.oidObject, m = a.data.onlyStates, [d, y] = n.useState(() => {
      const o = j("oid");
      return typeof o == "number" ? o : 0;
    }), { updateValue: g } = P("oid"), x = n.useMemo(() => {
      const o = l == null ? void 0 : l.commonStates, s = l == null ? void 0 : l.type, i = l == null ? void 0 : l.name, C = l == null ? void 0 : l.minValue, O = l == null ? void 0 : l.maxValue;
      return {
        commonStates: o,
        oidType: s,
        oidName: i,
        minValue: C,
        maxValue: O
      };
    }, [
      l
    ]), u = n.useCallback((o) => {
      g(o);
    }, [
      g
    ]), f = n.useCallback((o, s) => {
      const i = Array.isArray(s) ? s[0] : s;
      y(i), u(i);
    }, [
      u
    ]), w = n.useCallback((o, s) => {
      (s === "backdropClick" || s === "escapeKeyDown") && h();
    }, [
      h
    ]), S = n.useCallback(() => {
      h();
    }, [
      h
    ]), v = n.useCallback((o) => (s) => {
      s.preventDefault();
      const i = Number(o);
      isNaN(i) || y(i), u(o);
    }, [
      u
    ]), k = n.useMemo(() => {
      const { oidType: o, commonStates: s, minValue: i, maxValue: C } = x;
      return o === "number" && !m && i !== void 0 && C !== void 0 ? t.jsx(b, {
        sx: {
          px: 3
        },
        children: t.jsx(X, {
          sx: {
            pb: s ? 4 : 3
          },
          size: "small",
          min: i,
          max: C,
          marks: [
            {
              value: i,
              label: String(i)
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
    ]), V = n.useMemo(() => !c || !Object.keys(c).length ? null : t.jsx(W, {
      children: Object.entries(c).map(([o, s]) => t.jsx(Y, {
        disablePadding: true,
        children: t.jsx(J, {
          onClick: v(o),
          children: t.jsx(Q, {
            primaryTypographyProps: {
              variant: "body2"
            },
            primary: String(s)
          })
        })
      }, o))
    }), [
      c,
      v
    ]), I = n.useMemo(() => e.header || x.oidName || "Change Value", [
      e.header,
      x.oidName
    ]), r = n.useMemo(() => c && Object.keys(c).length > 0, [
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
        t.jsx(M, {
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
            component: L,
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
    const c = n.useContext(D), { widget: e, theme: p } = c, h = e.data.oidObject, { data: a, widgetStates: j, states: l } = z("oid"), { value: m, updateValue: d } = P("oid"), [y, g] = n.useState(false), x = h == null ? void 0 : h.type, u = e.data.onlyStates, f = ae(m, e, a), w = f != null ? String(f) : "", S = () => {
      const r = e.data.value1;
      u && l.length === 2 && e.data.statePushButton && r !== void 0 && setTimeout(() => d(r), 0);
    }, v = () => {
      const r = e.data.value2;
      u && l.length === 2 && e.data.statePushButton && r !== void 0 && setTimeout(() => d(r), 0);
    }, k = n.useCallback(() => {
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
    ]), V = t.jsx(ne, {
      disabled: se(e.data),
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
            const r = a.icon, o = a.iconColor || p.palette.primary.main, s = a.forceColorMask, i = R(r, o, s);
            return t.jsx(b, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                width: "100%",
                height: "100%"
              },
              children: t.jsx(ie, {
                variant: "square",
                src: r || void 0,
                slotProps: {
                  img: {
                    style: {
                      objectFit: "contain",
                      ...i
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
