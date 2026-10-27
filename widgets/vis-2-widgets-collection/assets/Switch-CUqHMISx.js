import { D as e, E as t, G as n, M as r, X as i, _ as a, b as o, f as s, j as c, m as l, o as u, s as d, v as f, w as p, x as m } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { M as h, c as g, f as _, g as v, h as y, m as b, p as x, v as S } from "./createSvgIcon-CNE8PSAz.js";
import { a as C, ft as w, o as T, s as E } from "./createStyled-C2Uprg2G.js";
import { t as D } from "./useEnhancedEffect-B263MN2W.js";
function O(e3) {
  return typeof e3 == `string`;
}
function k(...e3) {
  let n2 = t(void 0), r2 = a((t3) => {
    let n3 = e3.map((e4) => {
      if (e4 == null) return null;
      if (typeof e4 == `function`) {
        let n4 = e4, r3 = n4(t3);
        return typeof r3 == `function` ? r3 : () => {
          n4(null);
        };
      }
      return e4.current = t3, () => {
        e4.current = null;
      };
    });
    return () => {
      n3.forEach((e4) => e4 == null ? void 0 : e4());
    };
  }, e3);
  return p(() => e3.every((e4) => e4 == null) ? null : (e4) => {
    n2.current &&= (n2.current(), void 0), e4 != null && (n2.current = r2(e4));
  }, e3);
}
function A(e3) {
  let n2 = t(e3);
  return D(() => {
    n2.current = e3;
  }), t((...e4) => (0, n2.current)(...e4)).current;
}
var j = s(void 0);
function ee() {
  return f(j);
}
function te({ props: e3, states: t3 }) {
  let n2 = f(j), r2 = {};
  return t3.forEach((t4) => {
    let i2 = e3[t4];
    r2[t4] = i2 === void 0 && n2 ? n2[t4] : i2;
  }), [r2, n2];
}
function M() {
  let e3 = i(S);
  return e3.$$material || e3;
}
var N = k;
function P(n2) {
  let { controlled: r2, default: i2, name: o2, state: s2 = `value` } = n2, { current: c2 } = t(r2 !== void 0), [l2, u2] = e(i2);
  return [c2 ? r2 : l2, a((e3) => {
    c2 || u2(e3);
  }, [])];
}
var ne = P, F = A;
function I(e3, t3) {
  let n2 = e3.charCodeAt(2);
  return e3[0] === `o` && e3[1] === `n` && n2 >= 65 && n2 <= 90 && typeof t3 == `function`;
}
function L(e3, t3) {
  if (!e3) return t3;
  function n2(e4, t4) {
    let n3 = {};
    return Object.keys(t4).forEach((r3) => {
      I(r3, t4[r3]) && typeof e4[r3] == `function` && (n3[r3] = (...n4) => {
        e4[r3](...n4), t4[r3](...n4);
      });
    }), n3;
  }
  if (typeof e3 == `function` || typeof t3 == `function`) return (r3) => {
    let i3 = typeof t3 == `function` ? t3(r3) : t3, a3 = typeof e3 == `function` ? e3({ ...r3, ...i3 }) : e3, o3 = w(r3 == null ? void 0 : r3.className, i3 == null ? void 0 : i3.className, a3 == null ? void 0 : a3.className), s2 = n2(a3, i3), c2 = { ...i3, ...a3, ...s2 };
    return o3 && (c2.className = o3), (i3 == null ? void 0 : i3.style) && (a3 == null ? void 0 : a3.style) && (c2.style = { ...i3.style, ...a3.style }), (i3 == null ? void 0 : i3.sx) && (a3 == null ? void 0 : a3.sx) && (c2.sx = [...Array.isArray(i3.sx) ? i3.sx : [i3.sx], ...Array.isArray(a3.sx) ? a3.sx : [a3.sx]]), c2;
  };
  let r2 = t3, i2 = n2(e3, r2), a2 = w(r2 == null ? void 0 : r2.className, e3 == null ? void 0 : e3.className), o2 = { ...t3, ...e3, ...i2 };
  return a2 && (o2.className = a2), (r2 == null ? void 0 : r2.style) && (e3 == null ? void 0 : e3.style) && (o2.style = { ...r2.style, ...e3.style }), (r2 == null ? void 0 : r2.sx) && (e3 == null ? void 0 : e3.sx) && (o2.sx = [...Array.isArray(r2.sx) ? r2.sx : [r2.sx], ...Array.isArray(e3.sx) ? e3.sx : [e3.sx]]), o2;
}
var R = {};
function z(e3, n2) {
  let r2 = t(R);
  return r2.current === R && (r2.current = e3(n2)), r2;
}
var B = `(prefers-reduced-motion: reduce)`, re = 0, ie = `0ms`, V = () => {
}, H = () => false, ae = () => true, U = () => V;
function oe(t3) {
  let [n2, r2] = e(() => ({ enabled: t3, matches: t3 ? null : false })), i2 = n2.matches;
  return n2.enabled !== t3 && (i2 = null, t3 || (i2 = false)), D(() => {
    let e3 = (e4) => {
      r2((n3) => n3.enabled === t3 && n3.matches === e4 ? n3 : { enabled: t3, matches: e4 });
    };
    if (!t3) {
      n2.enabled && e3(false);
      return;
    }
    if (typeof window > `u` || typeof window.matchMedia != `function`) {
      e3(false);
      return;
    }
    let i3 = window.matchMedia(B), a2 = () => {
      e3(i3.matches);
    };
    return a2(), i3.addEventListener(`change`, a2), () => {
      i3.removeEventListener(`change`, a2);
    };
  }, [t3, n2.enabled]), i2;
}
var se = { ...c }.useSyncExternalStore;
function W(e3) {
  let t3 = e3 ? ae : H, [n2, r2] = p(() => {
    if (!e3 || typeof window > `u` || typeof window.matchMedia != `function`) return [H, U];
    let t4 = window.matchMedia(B);
    return [() => t4.matches, (e4) => (t4.addEventListener(`change`, e4), () => {
      t4.removeEventListener(`change`, e4);
    })];
  }, [e3]);
  return se(r2, n2, t3);
}
var ce = se === void 0 ? oe : W;
function G(e3, t3) {
  let n2 = ce(!t3 && e3 === `system`), r2 = !t3 && (e3 === `always` || e3 === `system` && n2 !== false);
  return p(() => ({ shouldReduceMotion: r2, getTransitionTiming(e4) {
    return r2 ? { duration: re, delay: ie } : e4;
  } }), [r2]);
}
function K(e3, t3, n2) {
  return e3 === void 0 || O(e3) ? t3 : { ...t3, ownerState: { ...t3.ownerState, ...n2 } };
}
function le(e3, t3, n2) {
  return typeof e3 == `function` ? e3(t3, n2) : e3;
}
function ue(e3) {
  if (e3 === void 0) return {};
  let t3 = {}, n2 = Object.keys(e3);
  for (let r2 = 0; r2 < n2.length; r2 += 1) {
    let i2 = n2[r2];
    I(i2, e3[i2]) && (t3[i2] = e3[i2]);
  }
  return t3;
}
function de(e3) {
  if (e3 === void 0) return {};
  let t3 = {}, n2 = Object.keys(e3);
  for (let r2 = 0; r2 < n2.length; r2 += 1) {
    let i2 = n2[r2];
    I(i2, e3[i2]) || (t3[i2] = e3[i2]);
  }
  return t3;
}
function q(e3) {
  let { getSlotProps: t3, additionalProps: n2, externalSlotProps: r2, externalForwardedProps: i2, className: a2 } = e3;
  if (!t3) {
    let e4 = w(n2 == null ? void 0 : n2.className, a2, i2 == null ? void 0 : i2.className, r2 == null ? void 0 : r2.className), t4 = { ...n2, ...i2, ...r2 };
    if (e4.length > 0 && (t4.className = e4), (n2 == null ? void 0 : n2.style) || (i2 == null ? void 0 : i2.style) || (r2 == null ? void 0 : r2.style)) {
      let e5 = { ...n2 == null ? void 0 : n2.style, ...i2 == null ? void 0 : i2.style, ...r2 == null ? void 0 : r2.style };
      Object.keys(e5).length > 0 && (t4.style = e5);
    }
    return { props: t4, internalRef: void 0 };
  }
  let o2 = ue({ ...i2, ...r2 }), s2 = de(r2), c2 = de(i2), l2 = t3(o2), u2 = w(l2 == null ? void 0 : l2.className, n2 == null ? void 0 : n2.className, a2, i2 == null ? void 0 : i2.className, r2 == null ? void 0 : r2.className), d2 = { ...l2, ...n2, ...c2, ...s2 };
  if (u2.length > 0 && (d2.className = u2), (l2 == null ? void 0 : l2.style) || (n2 == null ? void 0 : n2.style) || (i2 == null ? void 0 : i2.style) || (r2 == null ? void 0 : r2.style)) {
    let e4 = { ...l2 == null ? void 0 : l2.style, ...n2 == null ? void 0 : n2.style, ...i2 == null ? void 0 : i2.style, ...r2 == null ? void 0 : r2.style };
    Object.keys(e4).length > 0 && (d2.style = e4);
  }
  return { props: d2, internalRef: l2.ref };
}
function J(e3, t3) {
  let { className: n2, elementType: r2, ownerState: i2, externalForwardedProps: a2, internalForwardedProps: o2, shouldForwardComponentProp: s2 = false, ...c2 } = t3, { component: l2, slots: u2 = { [e3]: void 0 }, slotProps: d2 = { [e3]: void 0 }, ...f2 } = a2, p2 = u2[e3] || r2, m2 = le(d2[e3], i2), { props: { component: h2, ...g2 }, internalRef: _2 } = q({ className: n2, ...c2, externalForwardedProps: e3 === `root` ? f2 : void 0, externalSlotProps: m2 }), v2 = k(_2, m2 == null ? void 0 : m2.ref, t3.ref), y2 = e3 === `root` ? h2 || l2 : h2;
  return [p2, K(p2, { ...e3 === `root` && !l2 && !u2[e3] && o2, ...e3 !== `root` && !u2[e3] && o2, ...g2, ...y2 && !s2 && { as: y2 }, ...y2 && s2 && { component: y2 }, ref: v2 }, i2)];
}
function fe(e3) {
  try {
    return e3.matches(`:focus-visible`);
  } catch {
  }
  return false;
}
function pe(e3) {
  let { focusableWhenDisabled: t3, disabled: n2, composite: r2 = false, tabIndex: i2 = 0, isNativeButton: a2 } = e3, o2 = r2 && t3 !== false, s2 = r2 && t3 === false;
  return p(() => {
    let e4 = { onKeyDown(e5) {
      n2 && t3 && e5.key !== `Tab` && e5.preventDefault();
    } };
    return r2 || (e4.tabIndex = i2, !a2 && n2 && (e4.tabIndex = t3 ? i2 : -1)), (a2 && (t3 || o2) || !a2 && n2) && (e4[`aria-disabled`] = n2), a2 && (!t3 || s2) && (e4.disabled = n2), e4;
  }, [r2, n2, t3, o2, s2, a2, i2]);
}
var me = {};
function he(e3) {
  let { nativeButton: n2, nativeButtonProp: r2, internalNativeButton: i2 = n2, allowInferredHostMismatch: o2 = false, disabled: s2, type: c2, hasFormAction: l2 = false, tabIndex: u2 = 0, focusableWhenDisabled: d2, stopEventPropagation: f2 = false, onBeforeKeyDown: m2, onBeforeKeyUp: h2 } = e3, g2 = t(null), _2 = d2 === true, v2 = pe({ focusableWhenDisabled: _2, disabled: s2, isNativeButton: n2, tabIndex: u2 }), y2 = a(() => {
    let e4 = g2.current;
    return e4 == null ? n2 : e4.tagName === `BUTTON` || !!(e4.tagName === `A` && e4.href);
  }, [n2]), b2 = p(() => {
    let e4 = _2 ? {} : { tabIndex: s2 ? -1 : u2 };
    return n2 ? (e4.type = c2 === void 0 && !l2 ? `button` : c2, _2 || (e4.disabled = s2)) : (e4.role = `button`, !_2 && s2 && (e4[`aria-disabled`] = s2)), _2 ? { ...e4, ...v2 } : e4;
  }, [s2, _2, v2, l2, n2, u2, c2]);
  return { getButtonProps: a((e4 = me) => {
    let { onClick: t3, onKeyDown: n3, onKeyUp: r3, ...i3 } = e4, a2 = (e5) => {
      f2 && e5.stopPropagation(), s2 ? e5.preventDefault() : t3 == null ? void 0 : t3(e5);
    }, o3 = (e5) => {
      _2 && v2.onKeyDown(e5), !s2 && (m2 == null ? void 0 : m2(e5), n3 == null ? void 0 : n3(e5), !(e5.target !== e5.currentTarget || y2()) && (e5.key === ` ` ? e5.preventDefault() : e5.key === `Enter` && (e5.preventDefault(), e5.currentTarget.click())));
    }, c3 = (e5) => {
      s2 || (h2 == null ? void 0 : h2(e5), r3 == null ? void 0 : r3(e5), e5.target === e5.currentTarget && !y2() && e5.key === ` ` && !e5.defaultPrevented && e5.currentTarget.click());
    };
    return { ...b2, ...i3, onClick: a2, onKeyDown: o3, onKeyUp: c3 };
  }, [b2, s2, _2, v2, y2, m2, h2, f2]), rootRef: g2 };
}
var ge = class t2 {
  ref = { current: null };
  shouldMount = false;
  mounted = null;
  didMount = false;
  setShouldMount = null;
  static create() {
    return new t2();
  }
  static use() {
    let n2 = z(t2.create).current, [r2, i2] = e(false);
    return n2.shouldMount = r2, n2.setShouldMount = i2, o(n2.mountEffect, [r2]), n2;
  }
  mount() {
    return this.mounted || (this.mounted = ve(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && (this.ref.current !== null && (this.didMount = true), this.mounted.resolve());
  };
  start(...e3) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.start(...e3);
    });
  }
  stop(...e3) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.stop(...e3);
    });
  }
  pulsate(...e3) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.pulsate(...e3);
    });
  }
};
function _e() {
  return ge.use();
}
function ve() {
  let e3, t3, n2 = new Promise((n3, r2) => {
    e3 = n3, t3 = r2;
  });
  return n2.resolve = e3, n2.reject = t3, n2;
}
var ye = [];
function be(e3) {
  o(e3, ye);
}
var xe = class e2 {
  static create() {
    return new e2();
  }
  currentId = null;
  start(e3, t3) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, t3();
    }, e3);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
};
function Se() {
  let e3 = z(xe.create).current;
  return be(e3.disposeEffect), e3;
}
function Ce(n2) {
  let { className: r2, classes: i2, pulsate: a2 = false, rippleX: s2, rippleY: c2, rippleSize: l2, in: d2, onExited: f2, timeout: p2 } = n2, [m2, h2] = e(false), g2 = Se(), _2 = t(false), v2 = t(f2);
  v2.current = f2;
  let y2 = f2 != null, b2 = w(r2, i2.ripple, i2.rippleVisible, a2 && i2.ripplePulsate), x2 = { width: l2, height: l2, top: -(l2 / 2) + c2, left: -(l2 / 2) + s2 }, S2 = w(i2.child, m2 && i2.childLeaving, a2 && i2.childPulsate);
  return !d2 && !m2 && h2(true), o(() => {
    !d2 && y2 ? _2.current || (_2.current = true, g2.start(p2, () => {
      var _a;
      _2.current = false, (_a = v2.current) == null ? void 0 : _a.call(v2);
    })) : (_2.current = false, g2.clear());
  }, [g2, y2, d2, p2]), u(`span`, { className: b2, style: x2, children: u(`span`, { className: S2 }) });
}
function we(e3) {
  return E(`MuiTouchRipple`, e3);
}
var Y = T(`MuiTouchRipple`, [`root`, `ripple`, `rippleVisible`, `ripplePulsate`, `child`, `childLeaving`, `childPulsate`]), Te = 550, X = {}, Ee = [], Z = () => {
};
function De(e3, t3) {
  let n2 = new Set(t3), r2 = /* @__PURE__ */ new Map(), i2 = [];
  for (let t4 of e3) n2.has(t4) ? i2.length > 0 && (r2.set(t4, i2), i2 = []) : i2.push(t4);
  let a2 = [];
  for (let e4 of t3) {
    let t4 = r2.get(e4);
    t4 && a2.push(...t4), a2.push(e4);
  }
  return a2.push(...i2), a2;
}
function Oe({ event: e3, element: t3, center: n2 }) {
  let r2 = t3 ? t3.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 }, i2, a2;
  if (n2 || e3 === void 0 || e3.clientX === 0 && e3.clientY === 0 || !e3.clientX && !e3.touches) i2 = Math.round(r2.width / 2), a2 = Math.round(r2.height / 2);
  else {
    let { clientX: t4, clientY: n3 } = e3.touches && e3.touches.length > 0 ? e3.touches[0] : e3;
    i2 = Math.round(t4 - r2.left), a2 = Math.round(n3 - r2.top);
  }
  let o2;
  if (n2) o2 = Math.sqrt((2 * r2.width ** 2 + r2.height ** 2) / 3), o2 % 2 == 0 && (o2 += 1);
  else {
    let e4 = Math.max(Math.abs((t3 ? t3.clientWidth : 0) - i2), i2) * 2 + 2, n3 = Math.max(Math.abs((t3 ? t3.clientHeight : 0) - a2), a2) * 2 + 2;
    o2 = Math.sqrt(e4 ** 2 + n3 ** 2);
  }
  return { rippleX: i2, rippleY: a2, rippleSize: o2 };
}
var ke = n`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Ae = n`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, je = n`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
function Me(e3) {
  if (e3.motion.reducedMotion === `always`) return null;
  let t3 = r`
    &.${Y.rippleVisible} {
      animation-name: ${ke};
      animation-duration: ${Te}ms;
      animation-timing-function: ${e3.transitions.easing.easeInOut};
    }

    &.${Y.ripplePulsate} {
      animation-duration: ${e3.transitions.duration.shorter}ms;
    }

    & .${Y.childLeaving} {
      animation-name: ${Ae};
      animation-duration: ${Te}ms;
      animation-timing-function: ${e3.transitions.easing.easeInOut};
    }

    & .${Y.childPulsate} {
      animation-name: ${je};
      animation-duration: 2500ms;
      animation-timing-function: ${e3.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e3.motion.reducedMotion === `system` ? r`
      @media (prefers-reduced-motion: no-preference) {
        ${t3}
      }
    ` : t3;
}
var Ne = y(`span`, { name: `MuiTouchRipple`, slot: `Root` })({ overflow: `hidden`, pointerEvents: `none`, position: `absolute`, zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: `inherit` }), Pe = y(Ce, { name: `MuiTouchRipple`, slot: `Ripple` })`
  opacity: 0;
  position: absolute;

  &.${Y.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${Y.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Y.childLeaving} {
    opacity: 0;
  }

  & .${Y.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({ theme: e3 }) => Me(e3)}
`, Fe = l(function(n2, r2) {
  let i2 = x({ props: n2, name: `MuiTouchRipple` }), a2 = G(M().motion.reducedMotion, false), { center: s2 = false, classes: c2 = X, className: l2, ...d2 } = i2, [f2, p2] = e({ items: Ee, order: Ee }), h2 = f2.items, g2 = t(0), _2 = t(null), v2 = t(false);
  be(() => (v2.current = true, () => {
    v2.current = false;
  })), o(() => {
    _2.current &&= (_2.current(), null);
  }, [h2]);
  let y2 = t(false), b2 = Se(), S2 = t(null), C2 = t(null), T2 = F((e3) => {
    v2.current && p2((t3) => {
      let n3 = t3.items.filter((t4) => t4.key !== e3);
      return { items: n3, order: De(t3.order.filter((t4) => t4 !== e3), n3.filter((e4) => !e4.exiting).map((e4) => e4.key)) };
    });
  }), E2 = F((e3) => {
    let { pulsate: t3, rippleX: n3, rippleY: r3, rippleSize: i3, cb: a3 } = e3, o2 = g2.current;
    g2.current += 1, p2((e4) => {
      let a4 = [...e4.items, { key: o2, pulsate: t3, rippleX: n3, rippleY: r3, rippleSize: i3, exiting: false }];
      return { items: a4, order: De(e4.order, a4.filter((e5) => !e5.exiting).map((e5) => e5.key)) };
    }), _2.current = a3;
  }), D2 = F((e3 = X, t3 = X, n3 = Z) => {
    let { pulsate: r3 = false, center: i3 = s2 || t3.pulsate, fakeElement: a3 = false } = t3;
    if ((e3 == null ? void 0 : e3.type) === `mousedown` && y2.current) {
      y2.current = false;
      return;
    }
    (e3 == null ? void 0 : e3.type) === `touchstart` && (y2.current = true);
    let { rippleX: o2, rippleY: c3, rippleSize: l3 } = Oe({ event: e3, element: a3 ? null : C2.current, center: i3 });
    (e3 == null ? void 0 : e3.touches) ? S2.current === null && (S2.current = () => {
      E2({ pulsate: r3, rippleX: o2, rippleY: c3, rippleSize: l3, cb: n3 });
    }, b2.start(80, () => {
      S2.current &&= (S2.current(), null);
    })) : E2({ pulsate: r3, rippleX: o2, rippleY: c3, rippleSize: l3, cb: n3 });
  }), O2 = F(() => {
    D2(X, { pulsate: true });
  }), k2 = F((e3, t3) => {
    b2.clear(), (e3 == null ? void 0 : e3.type) === `touchend` && S2.current ? (S2.current(), S2.current = null, b2.start(0, () => {
      k2(e3, t3);
    })) : (S2.current = null, p2((e4) => {
      let t4 = e4.items.findIndex((e5) => !e5.exiting);
      if (t4 === -1) return e4;
      let n3 = e4.items.slice();
      return n3[t4] = { ...n3[t4], exiting: true }, { items: n3, order: De(e4.order, n3.filter((e5) => !e5.exiting).map((e5) => e5.key)) };
    }), _2.current = t3);
  });
  m(r2, () => ({ pulsate: O2, start: D2, stop: k2 }), [O2, D2, k2]);
  let A2 = new Map(h2.map((e3) => [e3.key, e3])), j2 = f2.order.map((e3) => A2.get(e3)).filter(Boolean);
  return u(Ne, { className: w(Y.root, c2.root, l2), ref: C2, ...d2, children: j2.map((e3) => u(Pe, { classes: { ripple: w(c2.ripple, Y.ripple), rippleVisible: w(c2.rippleVisible, Y.rippleVisible), ripplePulsate: w(c2.ripplePulsate, Y.ripplePulsate), child: w(c2.child, Y.child), childLeaving: w(c2.childLeaving, Y.childLeaving), childPulsate: w(c2.childPulsate, Y.childPulsate) }, timeout: a2.shouldReduceMotion ? 0 : Te, pulsate: e3.pulsate, rippleX: e3.rippleX, rippleY: e3.rippleY, rippleSize: e3.rippleSize, in: !e3.exiting, onExited: () => T2(e3.key) }, e3.key)) });
});
function Ie(e3) {
  return E(`MuiButtonBase`, e3);
}
var Le = T(`MuiButtonBase`, [`root`, `disabled`, `focusVisible`]), Re = (e3) => {
  let { disabled: t3, focusVisible: n2, focusVisibleClassName: r2, suppressFocusVisible: i2, classes: a2 } = e3, o2 = C({ root: [`root`, t3 && `disabled`, n2 && !i2 && `focusVisible`] }, Ie, a2);
  return n2 && !i2 && r2 && (o2.root += ` ${r2}`), o2;
}, ze = y(`button`, { name: `MuiButtonBase`, slot: `Root` })(b(({ theme: e3 }) => ({ display: `inline-flex`, alignItems: `center`, justifyContent: `center`, position: `relative`, boxSizing: `border-box`, WebkitTapHighlightColor: `transparent`, backgroundColor: `transparent`, outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: `pointer`, userSelect: `none`, verticalAlign: `middle`, MozAppearance: `none`, WebkitAppearance: `none`, textDecoration: `none`, color: `inherit`, "&::-moz-focus-inner": { borderStyle: `none` }, [`&.${Le.disabled}`]: { pointerEvents: `none`, cursor: `default` }, "@media print": { colorAdjust: `exact` }, variants: [{ props: { internalDisabledThemeFocusVisible: false }, style: e3.focusVisible && { ...h, [`&.${Le.focusVisible}`]: e3.focusVisible } }] }))), Be = l(function(t3, n2) {
  let r2 = x({ props: t3, name: `MuiButtonBase` }), { action: i2, centerRipple: a2 = false, children: s2, className: c2, component: l2 = `button`, disabled: f2 = false, disableRipple: p2 = false, disableTouchRipple: h2 = false, focusRipple: g2 = false, focusVisibleClassName: _2, focusableWhenDisabled: v2, suppressFocusVisible: y2 = false, internalNativeButton: b2, internalDisabledThemeFocusVisible: S2 = false, LinkComponent: C2 = `a`, nativeButton: T2, onBlur: E2, onClick: D2, onContextMenu: O2, onDragLeave: k2, onFocus: A2, onFocusVisible: j2, onKeyDown: ee2, onKeyUp: te2, onMouseDown: M2, onMouseLeave: P2, onMouseUp: ne2, onTouchEnd: I2, onTouchMove: L2, onTouchStart: R2, tabIndex: z2 = 0, TouchRippleProps: B2, touchRippleRef: re2, type: ie2, ...V2 } = r2, H2 = !!(V2.href || V2.to), ae2 = !!V2.formAction, U2 = l2;
  U2 === `button` && H2 && (U2 = C2);
  let oe2 = typeof U2 == `string` ? U2 === `button` : b2 ?? false, se2 = T2 ?? oe2, W2 = _e(), ce2 = N(W2.ref, re2), [G2, K2] = e(false);
  (f2 || y2) && G2 && K2(false);
  let le2 = F((e3) => {
    g2 && !e3.repeat && G2 && e3.key === ` ` && W2.stop(e3, () => {
      W2.start(e3);
    });
  }), ue2 = F((e3) => {
    g2 && e3.key === ` ` && G2 && !e3.defaultPrevented && W2.stop(e3, () => {
      W2.pulsate(e3);
    });
  }), { getButtonProps: de2, rootRef: q2 } = he({ nativeButton: se2, nativeButtonProp: T2, internalNativeButton: oe2, allowInferredHostMismatch: H2 || typeof U2 == `string`, disabled: f2, type: ie2, hasFormAction: ae2, tabIndex: z2, onBeforeKeyDown: le2, onBeforeKeyUp: ue2 }), { onClick: J2, onKeyDown: pe2, onKeyUp: me2, ...ge2 } = de2({ onClick: D2, onKeyDown: ee2, onKeyUp: te2 });
  m(i2, () => ({ focusVisible: () => {
    K2(true), q2.current.focus();
  } }), [q2]);
  let ve2 = W2.shouldMount && !p2 && !f2;
  o(() => {
    G2 && g2 && !p2 && W2.pulsate();
  }, [p2, g2, G2, W2]);
  let ye2 = Q(W2, `start`, M2, h2), be2 = Q(W2, `stop`, O2, h2), xe2 = Q(W2, `stop`, k2, h2), Se2 = Q(W2, `stop`, ne2, h2), Ce2 = Q(W2, `stop`, (e3) => {
    G2 && e3.preventDefault(), P2 && P2(e3);
  }, h2), we2 = Q(W2, `start`, R2, h2), Y2 = Q(W2, `stop`, I2, h2), Te2 = Q(W2, `stop`, L2, h2), X2 = Q(W2, `stop`, (e3) => {
    fe(e3.target) || K2(false), E2 && E2(e3);
  }, false), Ee2 = F((e3) => {
    q2.current ||= e3.currentTarget, !y2 && fe(e3.target) && (K2(true), j2 && j2(e3)), A2 && A2(e3);
  }), Z2 = {};
  H2 && (Z2.tabIndex = f2 ? -1 : z2, f2 && (Z2[`aria-disabled`] = f2), Z2.type = ie2);
  let De2 = N(n2, q2), Oe2 = { ...r2, centerRipple: a2, component: l2, disabled: f2, disableRipple: p2, disableTouchRipple: h2, focusRipple: g2, suppressFocusVisible: y2, tabIndex: z2, focusVisible: G2, internalDisabledThemeFocusVisible: S2 }, ke2 = Re(Oe2);
  return d(ze, { as: U2, className: w(ke2.root, c2), ownerState: Oe2, onBlur: X2, onClick: J2, onContextMenu: be2, onFocus: Ee2, onKeyDown: pe2, onKeyUp: me2, onMouseDown: ye2, onMouseLeave: Ce2, onMouseUp: Se2, onDragLeave: xe2, onTouchEnd: Y2, onTouchMove: Te2, onTouchStart: we2, ref: De2, ...H2 ? Z2 : ge2, ...V2, children: [s2, ve2 ? u(Fe, { ref: ce2, center: a2, ...B2 }) : null] });
});
function Q(e3, t3, n2, r2 = false) {
  return F((i2) => (n2 && n2(i2), r2 || e3[t3](i2), true));
}
function Ve(e3) {
  return typeof e3.main == `string`;
}
function He(e3, t3 = []) {
  if (!Ve(e3)) return false;
  for (let n2 of t3) if (!e3.hasOwnProperty(n2) || typeof e3[n2] != `string`) return false;
  return true;
}
function Ue(e3 = []) {
  return ([, t3]) => t3 && He(t3, e3);
}
function We(e3) {
  return E(`PrivateSwitchBase`, e3);
}
T(`PrivateSwitchBase`, [`root`, `checked`, `disabled`, `input`, `edgeStart`, `edgeEnd`]);
var Ge = (e3) => {
  let { classes: t3, checked: n2, disabled: r2, edge: i2 } = e3, a2 = { root: [`root`, n2 && `checked`, r2 && `disabled`, i2 && `edge${_(i2)}`], input: [`input`] };
  return C(a2, We, t3);
}, Ke = y(Be, { name: `MuiSwitchBase` })({ padding: 9, borderRadius: `50%`, variants: [{ props: { edge: `start`, size: `small` }, style: { marginLeft: -3 } }, { props: ({ edge: e3, ownerState: t3 }) => e3 === `start` && t3.size !== `small`, style: { marginLeft: -12 } }, { props: { edge: `end`, size: `small` }, style: { marginRight: -3 } }, { props: ({ edge: e3, ownerState: t3 }) => e3 === `end` && t3.size !== `small`, style: { marginRight: -12 } }] }), qe = y(`input`, { name: `MuiSwitchBase`, shouldForwardProp: v })({ cursor: `inherit`, position: `absolute`, opacity: 0, width: `100%`, height: `100%`, top: 0, left: 0, margin: 0, padding: 0, zIndex: 1 }), Je = l(function(e3, t3) {
  let { autoFocus: n2, checked: r2, checkedIcon: i2, defaultChecked: a2, disabled: o2, disableFocusRipple: s2 = false, edge: c2 = false, icon: l2, id: f2, name: p2, onBlur: m2, onChange: h2, onFocus: g2, readOnly: _2, required: v2 = false, tabIndex: y2, type: b2, value: x2, slots: S2 = {}, slotProps: C2 = {}, ...w2 } = e3, { nativeButton: T2, ...E2 } = w2, [D2, O2] = ne({ controlled: r2, default: !!a2, name: `SwitchBase`, state: `checked` }), k2 = ee(), A2 = (e4) => {
    g2 && g2(e4), k2 && k2.onFocus && k2.onFocus(e4);
  }, j2 = (e4) => {
    m2 && m2(e4), k2 && k2.onBlur && k2.onBlur(e4);
  }, te2 = (e4) => {
    if (e4.nativeEvent.defaultPrevented || _2) return;
    let t4 = e4.target.checked;
    O2(t4), h2 && h2(e4, t4);
  }, M2 = o2;
  k2 && M2 === void 0 && (M2 = k2.disabled);
  let N2 = b2 === `checkbox` || b2 === `radio`, P2 = { ...e3, checked: D2, disabled: M2, disableFocusRipple: s2, edge: c2 }, F2 = Ge(P2), I2 = { slots: S2, slotProps: C2 }, [L2, R2] = J(`root`, { ref: t3, elementType: Ke, className: F2.root, shouldForwardComponentProp: true, externalForwardedProps: { ...I2, component: `span`, ...E2 }, getSlotProps: (e4) => ({ ...e4, onFocus: (t4) => {
    var _a;
    (_a = e4.onFocus) == null ? void 0 : _a.call(e4, t4), A2(t4);
  }, onBlur: (t4) => {
    var _a;
    (_a = e4.onBlur) == null ? void 0 : _a.call(e4, t4), j2(t4);
  } }), ownerState: P2, additionalProps: { centerRipple: true, focusRipple: !s2, role: void 0, tabIndex: null, internalDisabledThemeFocusVisible: true } }), [z2, B2] = J(`input`, { elementType: qe, className: F2.input, externalForwardedProps: I2, getSlotProps: (e4) => ({ ...e4, onChange: (t4) => {
    var _a;
    (_a = e4.onChange) == null ? void 0 : _a.call(e4, t4), te2(t4);
  } }), ownerState: P2, additionalProps: { autoFocus: n2, checked: r2, defaultChecked: a2, disabled: M2, id: N2 ? f2 : void 0, name: p2, readOnly: _2, required: v2, tabIndex: y2, type: b2, ...b2 === `checkbox` && x2 === void 0 ? {} : { value: x2 } } });
  return d(L2, { ...R2, children: [u(z2, { ...B2 }), D2 ? i2 : l2] });
});
function Ye(e3) {
  return E(`MuiSwitch`, e3);
}
var $ = T(`MuiSwitch`, [`root`, `edgeStart`, `edgeEnd`, `switchBase`, `colorPrimary`, `colorSecondary`, `sizeSmall`, `sizeMedium`, `checked`, `disabled`, `input`, `thumb`, `track`]), Xe = (e3) => {
  let { classes: t3, edge: n2, size: r2, color: i2, checked: a2, disabled: o2 } = e3, s2 = { root: [`root`, n2 && `edge${_(n2)}`, `size${_(r2)}`], switchBase: [`switchBase`, `color${_(i2)}`, a2 && `checked`, o2 && `disabled`], thumb: [`thumb`], track: [`track`], input: [`input`] }, c2 = C(s2, Ye, t3);
  return { ...t3, ...c2 };
}, Ze = y(`span`, { name: `MuiSwitch`, slot: `Root`, overridesResolver: (e3, t3) => {
  let { ownerState: n2 } = e3;
  return [t3.root, n2.edge && t3[`edge${_(n2.edge)}`], t3[`size${_(n2.size)}`]];
} })({ display: `inline-flex`, width: 58, height: 38, overflow: `hidden`, padding: 12, boxSizing: `border-box`, position: `relative`, flexShrink: 0, zIndex: 0, verticalAlign: `middle`, "@media print": { colorAdjust: `exact` }, variants: [{ props: { edge: `start` }, style: { marginLeft: -8 } }, { props: { edge: `end` }, style: { marginRight: -8 } }, { props: { size: `small` }, style: { width: 40, height: 24, padding: 7, [`& .${$.thumb}`]: { width: 16, height: 16 }, [`& .${$.switchBase}`]: { padding: 4, [`&.${$.checked}`]: { transform: `translateX(16px)` } } } }] }), Qe = y(Je, { name: `MuiSwitch`, slot: `SwitchBase`, overridesResolver: (e3, t3) => {
  let { ownerState: n2 } = e3;
  return [t3.switchBase, { [`& .${$.input}`]: t3.input }, n2.color !== "default" && t3[`color${_(n2.color)}`]];
} })(b(({ theme: e3 }) => ({ position: `absolute`, top: 0, left: 0, zIndex: 1, color: e3.vars ? e3.vars.palette.Switch.defaultColor : `${e3.palette.mode === `light` ? e3.palette.common.white : e3.palette.grey[300]}`, ...g(e3, [`left`, `transform`], { duration: e3.transitions.duration.shortest }), [`&.${$.checked}`]: { transform: `translateX(20px)` }, [`&.${$.disabled}`]: { color: e3.vars ? e3.vars.palette.Switch.defaultDisabledColor : `${e3.palette.mode === `light` ? e3.palette.grey[100] : e3.palette.grey[600]}` }, ...e3.focusVisible ? { [`&.${Le.focusVisible} ~ .${$.track}`]: { ...h, ...e3.focusVisible }, [`&.${$.checked} + .${$.track}`]: { backgroundColor: e3.alpha(e3.vars ? e3.vars.palette.common.onBackground : `${e3.palette.mode === `light` ? e3.palette.common.black : e3.palette.common.white}`, 0.5) }, [`&.${$.disabled} + .${$.track}`]: { backgroundColor: e3.alpha(e3.vars ? e3.vars.palette.common.onBackground : `${e3.palette.mode === `light` ? e3.palette.common.black : e3.palette.common.white}`, e3.vars ? e3.vars.opacity.switchTrackDisabled : `${e3.palette.mode === `light` ? 0.12 : 0.2}`) } } : { [`&.${$.checked} + .${$.track}`]: { opacity: 0.5 }, [`&.${$.disabled} + .${$.track}`]: { opacity: e3.vars ? e3.vars.opacity.switchTrackDisabled : `${e3.palette.mode === `light` ? 0.12 : 0.2}` } }, [`& .${$.input}`]: { left: `-100%`, width: `300%` } })), b(({ theme: e3 }) => ({ "&:hover": { backgroundColor: e3.alpha((e3.vars || e3).palette.action.active, (e3.vars || e3).palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: `transparent` } }, variants: [...Object.entries(e3.palette).filter(Ue([`light`])).map(([t3]) => ({ props: { color: t3 }, style: { [`&.${$.checked}`]: { color: (e3.vars || e3).palette[t3].main, "&:hover": { backgroundColor: e3.alpha((e3.vars || e3).palette[t3].main, (e3.vars || e3).palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: `transparent` } }, [`&.${$.disabled}`]: { color: e3.vars ? e3.vars.palette.Switch[`${t3}DisabledColor`] : `${e3.palette.mode === `light` ? e3.lighten(e3.palette[t3].main, 0.62) : e3.darken(e3.palette[t3].main, 0.55)}` } }, [`&.${$.checked} + .${$.track}`]: { backgroundColor: (e3.vars || e3).palette[t3].main }, ...e3.focusVisible && { [`&.${$.checked} + .${$.track}`]: { backgroundColor: e3.alpha((e3.vars || e3).palette[t3].main, 0.5) }, [`&.${$.disabled} + .${$.track}`]: { backgroundColor: e3.alpha(e3.vars ? e3.vars.palette.common.onBackground : `${e3.palette.mode === `light` ? e3.palette.common.black : e3.palette.common.white}`, e3.vars ? e3.vars.opacity.switchTrackDisabled : `${e3.palette.mode === `light` ? 0.12 : 0.2}`) }, [`&.${$.checked}.${$.disabled} + .${$.track}`]: { backgroundColor: e3.alpha((e3.vars || e3).palette[t3].main, e3.vars ? e3.vars.opacity.switchTrackDisabled : `${e3.palette.mode === `light` ? 0.12 : 0.2}`) } } } }))] }))), $e = y(`span`, { name: `MuiSwitch`, slot: `Track` })(b(({ theme: e3 }) => ({ height: `100%`, width: `100%`, borderRadius: 7, zIndex: -1, ...g(e3, [`opacity`, `background-color`], { duration: e3.transitions.duration.shortest }), "@media (forced-colors: active)": { boxSizing: `border-box`, border: `1px solid ButtonBorder` }, ...e3.focusVisible ? { backgroundColor: e3.alpha(e3.vars ? e3.vars.palette.common.onBackground : `${e3.palette.mode === `light` ? e3.palette.common.black : e3.palette.common.white}`, e3.vars ? e3.vars.opacity.switchTrack : `${e3.palette.mode === `light` ? 0.38 : 0.3}`) } : { backgroundColor: e3.vars ? e3.vars.palette.common.onBackground : `${e3.palette.mode === `light` ? e3.palette.common.black : e3.palette.common.white}`, opacity: e3.vars ? e3.vars.opacity.switchTrack : `${e3.palette.mode === `light` ? 0.38 : 0.3}` } }))), et = y(`span`, { name: `MuiSwitch`, slot: `Thumb` })(b(({ theme: e3 }) => ({ boxShadow: (e3.vars || e3).shadows[1], backgroundColor: `currentColor`, boxSizing: `border-box`, border: `1px solid transparent`, width: 20, height: 20, borderRadius: `50%` }))), tt = l(function(e3, t3) {
  let n2 = x({ props: e3, name: `MuiSwitch` }), { className: r2, color: i2 = `primary`, edge: a2 = false, size: o2 = `medium`, sx: s2, slots: c2 = {}, slotProps: l2 = {}, ...f2 } = n2, p2 = { ...n2, color: i2, edge: a2, size: o2 }, m2 = Xe(p2), h2 = l2.input, g2 = { slots: c2, slotProps: l2 }, [_2, v2] = J(`root`, { className: w(m2.root, r2), elementType: Ze, externalForwardedProps: g2, ownerState: p2, additionalProps: { sx: s2 } }), [y2, b2] = J(`thumb`, { className: m2.thumb, elementType: et, externalForwardedProps: g2, ownerState: p2 }), S2 = u(y2, { ...b2 }), [C2, T2] = J(`track`, { className: m2.track, elementType: $e, externalForwardedProps: g2, ownerState: p2 });
  return d(_2, { ...v2, children: [u(Qe, { type: `checkbox`, icon: S2, checkedIcon: S2, ref: t3, ownerState: p2, ...f2, classes: { ...m2, root: m2.switchBase }, slots: { ...c2.switchBase && { root: c2.switchBase }, ...c2.input && { input: c2.input } }, slotProps: { ...l2.switchBase && { root: typeof l2.switchBase == `function` ? l2.switchBase(p2) : l2.switchBase }, input: L(typeof h2 == `function` ? h2(p2) : h2, { role: `switch` }) } }), u(C2, { ...T2 })] });
});
export {
  A,
  ne as C,
  ee as D,
  M as E,
  O as M,
  te as O,
  F as S,
  N as T,
  le as _,
  Ue as a,
  z as b,
  Ie as c,
  xe as d,
  Se as f,
  ue as g,
  q as h,
  Je as i,
  k as j,
  j as k,
  we as l,
  J as m,
  Ye as n,
  Be as o,
  fe as p,
  $ as r,
  Le as s,
  tt as t,
  Y as u,
  K as v,
  P as w,
  L as x,
  G as y
};
