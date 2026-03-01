import {
    az as R,
    av as V,
    aA as _,
    aB as D,
    j as b,
    d as B,
    aC as g,
    aD as u,
    aE as F,
    aF as M,
    aG as E,
    e as G,
    g as A,
    aH as N,
    aI as h,
    s as O,
    u as U,
    __tla as __tla_0,
} from './useData-CoMv8b7s.js';
import { v as p, __tla as __tla_1 } from './vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js';
let Z;
let __tla = Promise.all([
    (() => {
        try {
            return __tla_0;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_1;
        } catch {}
    })(),
]).then(async () => {
    const $ = R();
    function z(e) {
        const { theme: s, name: o, props: t } = e;
        return !s || !s.components || !s.components[o] || !s.components[o].defaultProps
            ? t
            : V(s.components[o].defaultProps, t);
    }
    function H({ props: e, name: s, defaultTheme: o, themeId: t }) {
        let n = _(o);
        return (
            t && (n = n[t] || n),
            z({
                theme: n,
                name: s,
                props: e,
            })
        );
    }
    const I = N(),
        L = $('div', {
            name: 'MuiStack',
            slot: 'Root',
            overridesResolver: (e, s) => s.root,
        });
    function W(e) {
        return H({
            props: e,
            name: 'MuiStack',
            defaultTheme: I,
        });
    }
    function q(e, s) {
        const o = p.Children.toArray(e).filter(Boolean);
        return o.reduce(
            (t, n, a) => (
                t.push(n),
                a < o.length - 1 &&
                    t.push(
                        p.cloneElement(s, {
                            key: `separator-${a}`,
                        }),
                    ),
                t
            ),
            [],
        );
    }
    const J = e =>
            ({
                row: 'Left',
                'row-reverse': 'Right',
                column: 'Top',
                'column-reverse': 'Bottom',
            })[e],
        K = ({ ownerState: e, theme: s }) => {
            let o = {
                display: 'flex',
                flexDirection: 'column',
                ...g(
                    {
                        theme: s,
                    },
                    u({
                        values: e.direction,
                        breakpoints: s.breakpoints.values,
                    }),
                    t => ({
                        flexDirection: t,
                    }),
                ),
            };
            if (e.spacing) {
                const t = F(s),
                    n = Object.keys(s.breakpoints.values).reduce(
                        (r, c) => (
                            ((typeof e.spacing == 'object' && e.spacing[c] != null) ||
                                (typeof e.direction == 'object' && e.direction[c] != null)) &&
                                (r[c] = true),
                            r
                        ),
                        {},
                    ),
                    a = u({
                        values: e.direction,
                        base: n,
                    }),
                    m = u({
                        values: e.spacing,
                        base: n,
                    });
                (typeof a == 'object' &&
                    Object.keys(a).forEach((r, c, i) => {
                        if (!a[r]) {
                            const l = c > 0 ? a[i[c - 1]] : 'column';
                            a[r] = l;
                        }
                    }),
                    (o = M(
                        o,
                        g(
                            {
                                theme: s,
                            },
                            m,
                            (r, c) =>
                                e.useFlexGap
                                    ? {
                                          gap: h(t, r),
                                      }
                                    : {
                                          '& > :not(style):not(style)': {
                                              margin: 0,
                                          },
                                          '& > :not(style) ~ :not(style)': {
                                              [`margin${J(c ? a[c] : e.direction)}`]: h(t, r),
                                          },
                                      },
                        ),
                    )));
            }
            return ((o = E(s.breakpoints, o)), o);
        };
    function Q(e = {}) {
        const { createStyledComponent: s = L, useThemeProps: o = W, componentName: t = 'MuiStack' } = e,
            n = () =>
                G(
                    {
                        root: ['root'],
                    },
                    r => A(t, r),
                    {},
                ),
            a = s(K);
        return p.forwardRef(function (r, c) {
            const i = o(r),
                f = D(i),
                {
                    component: l = 'div',
                    direction: k = 'column',
                    spacing: P = 0,
                    divider: y,
                    children: v,
                    className: S,
                    useFlexGap: C = false,
                    ...x
                } = f,
                j = {
                    direction: k,
                    spacing: P,
                    useFlexGap: C,
                },
                T = n();
            return b.jsx(a, {
                as: l,
                ownerState: j,
                ref: c,
                className: B(T.root, S),
                ...x,
                children: y ? q(v, y) : v,
            });
        });
    }
    Z = Q({
        createStyledComponent: O('div', {
            name: 'MuiStack',
            slot: 'Root',
            overridesResolver: (e, s) => s.root,
        }),
        useThemeProps: e =>
            U({
                props: e,
                name: 'MuiStack',
            }),
    });
});
export { Z as S, __tla };
