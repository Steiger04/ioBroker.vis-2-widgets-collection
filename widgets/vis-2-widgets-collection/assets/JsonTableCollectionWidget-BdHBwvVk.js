import {
    g as be,
    a as xe,
    u as ye,
    Z as Ys,
    _ as Js,
    $ as Rn,
    a0 as qt,
    h as Kt,
    j as a,
    s as J,
    d as se,
    e as ve,
    a1 as cr,
    m as pe,
    a2 as ls,
    b as ce,
    P as et,
    B as Zn,
    c as le,
    I as Se,
    W as G,
    a3 as Ro,
    M as Mo,
    X as Dt,
    a4 as gn,
    a5 as Ks,
    f as ur,
    a6 as Xs,
    a7 as Go,
    i as Fe,
    a8 as as,
    a9 as _n,
    T as F,
    r as Qs,
    U as Zs,
    aa as ei,
    L as ti,
    ab as dr,
    ac as ni,
    ad as cs,
    ae as $o,
    af as oi,
    ag as pr,
    ah as ri,
    R as ct,
    o as H,
    ai as Re,
    G as b,
    aj as wt,
    ak as Ct,
    al as si,
    am as ii,
    D as Ao,
    w as kt,
    an as li,
    ao as ai,
    C as qe,
    F as bt,
    ap as ci,
    aq as ui,
    n as di,
    q as pi,
    K as Dn,
    x as fi,
    y as gi,
    A as hi,
    z as fr,
    E as mi,
    __tla as __tla_0,
} from './useData-CoMv8b7s.js';
import { v as y, __tla as __tla_1 } from './vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js';
import { C as wn, __tla as __tla_2 } from './Checkbox-CjPg9dWs.js';
import { D as Uo, a as qo, b as Yo, __tla as __tla_3 } from './DialogTitle-CJWtNrVp.js';
import { B as ot, __tla as __tla_4 } from './Button-BOWf2z70.js';
import { S as yi, __tla as __tla_5 } from './Slider-DgHpn0IP.js';
import { F as Et, __tla as __tla_6 } from './FormControlLabel-BAm8tbJK.js';
import { S as hn, __tla as __tla_7 } from './Switch-hq_W31Xv.js';
import { g as vi, M as ie, __tla as __tla_8 } from './MenuItem-BadMCyai.js';
import { S as De, __tla as __tla_9 } from './Stack-CzOOYs5P.js';
import { T as us, a as eo, __tla as __tla_10 } from './ToggleButtonGroup-DG2CiFmV.js';
import { C as to, __tla as __tla_11 } from './Close-CQt1dGJP.js';
import { u as bi, __tla as __tla_12 } from './useOidValue-DpZZMIU2.js';
import './_commonjsHelpers-Cpj98o6Y.js';
import './vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js';
import { __tla as __tla_13 } from './SwitchBase-Dz75iFvF.js';
import { __tla as __tla_14 } from './listItemTextClasses-CJ06hn_z.js';
let Wo;
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
    (() => {
        try {
            return __tla_2;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_3;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_4;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_5;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_6;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_7;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_8;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_9;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_10;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_11;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_12;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_13;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_14;
        } catch {}
    })(),
]).then(async () => {
    function xi(e) {
        return be('MuiCollapse', e);
    }
    xe('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);
    const _i = e => {
            const { orientation: t, classes: n } = e,
                o = {
                    root: ['root', `${t}`],
                    entered: ['entered'],
                    hidden: ['hidden'],
                    wrapper: ['wrapper', `${t}`],
                    wrapperInner: ['wrapperInner', `${t}`],
                };
            return ve(o, xi, n);
        },
        wi = J('div', {
            name: 'MuiCollapse',
            slot: 'Root',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [
                    t.root,
                    t[n.orientation],
                    n.state === 'entered' && t.entered,
                    n.state === 'exited' && !n.in && n.collapsedSize === '0px' && t.hidden,
                ];
            },
        })(
            pe(({ theme: e }) => ({
                height: 0,
                overflow: 'hidden',
                transition: e.transitions.create('height'),
                variants: [
                    {
                        props: {
                            orientation: 'horizontal',
                        },
                        style: {
                            height: 'auto',
                            width: 0,
                            transition: e.transitions.create('width'),
                        },
                    },
                    {
                        props: {
                            state: 'entered',
                        },
                        style: {
                            height: 'auto',
                            overflow: 'visible',
                        },
                    },
                    {
                        props: {
                            state: 'entered',
                            orientation: 'horizontal',
                        },
                        style: {
                            width: 'auto',
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.state === 'exited' && !t.in && t.collapsedSize === '0px',
                        style: {
                            visibility: 'hidden',
                        },
                    },
                ],
            })),
        ),
        Ci = J('div', {
            name: 'MuiCollapse',
            slot: 'Wrapper',
            overridesResolver: (e, t) => t.wrapper,
        })({
            display: 'flex',
            width: '100%',
            variants: [
                {
                    props: {
                        orientation: 'horizontal',
                    },
                    style: {
                        width: 'auto',
                        height: '100%',
                    },
                },
            ],
        }),
        Si = J('div', {
            name: 'MuiCollapse',
            slot: 'WrapperInner',
            overridesResolver: (e, t) => t.wrapperInner,
        })({
            width: '100%',
            variants: [
                {
                    props: {
                        orientation: 'horizontal',
                    },
                    style: {
                        width: 'auto',
                        height: '100%',
                    },
                },
            ],
        }),
        Io = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiCollapse',
                }),
                {
                    addEndListener: r,
                    children: s,
                    className: i,
                    collapsedSize: l = '0px',
                    component: c,
                    easing: d,
                    in: u,
                    onEnter: g,
                    onEntered: f,
                    onEntering: p,
                    onExit: h,
                    onExited: m,
                    onExiting: x,
                    orientation: v = 'vertical',
                    style: _,
                    timeout: C = Ys.standard,
                    TransitionComponent: j = Js,
                    ...R
                } = o,
                w = {
                    ...o,
                    orientation: v,
                    collapsedSize: l,
                },
                M = _i(w),
                T = Rn(),
                D = qt(),
                A = y.useRef(null),
                P = y.useRef(),
                U = typeof l == 'number' ? `${l}px` : l,
                E = v === 'horizontal',
                W = E ? 'width' : 'height',
                Y = y.useRef(null),
                q = Kt(n, Y),
                k = N => ae => {
                    if (N) {
                        const te = Y.current;
                        ae === void 0 ? N(te) : N(te, ae);
                    }
                },
                S = () => (A.current ? A.current[E ? 'clientWidth' : 'clientHeight'] : 0),
                I = k((N, ae) => {
                    (A.current && E && (A.current.style.position = 'absolute'), (N.style[W] = U), g && g(N, ae));
                }),
                O = k((N, ae) => {
                    const te = S();
                    A.current && E && (A.current.style.position = '');
                    const { duration: X, easing: ze } = cr(
                        {
                            style: _,
                            timeout: C,
                            easing: d,
                        },
                        {
                            mode: 'enter',
                        },
                    );
                    if (C === 'auto') {
                        const Ae = T.transitions.getAutoHeightDuration(te);
                        ((N.style.transitionDuration = `${Ae}ms`), (P.current = Ae));
                    } else N.style.transitionDuration = typeof X == 'string' ? X : `${X}ms`;
                    ((N.style[W] = `${te}px`), (N.style.transitionTimingFunction = ze), p && p(N, ae));
                }),
                L = k((N, ae) => {
                    ((N.style[W] = 'auto'), f && f(N, ae));
                }),
                Z = k(N => {
                    ((N.style[W] = `${S()}px`), h && h(N));
                }),
                Q = k(m),
                ue = k(N => {
                    const ae = S(),
                        { duration: te, easing: X } = cr(
                            {
                                style: _,
                                timeout: C,
                                easing: d,
                            },
                            {
                                mode: 'exit',
                            },
                        );
                    if (C === 'auto') {
                        const ze = T.transitions.getAutoHeightDuration(ae);
                        ((N.style.transitionDuration = `${ze}ms`), (P.current = ze));
                    } else N.style.transitionDuration = typeof te == 'string' ? te : `${te}ms`;
                    ((N.style[W] = U), (N.style.transitionTimingFunction = X), x && x(N));
                }),
                fe = N => {
                    (C === 'auto' && D.start(P.current || 0, N), r && r(Y.current, N));
                };
            return a.jsx(j, {
                in: u,
                onEnter: I,
                onEntered: L,
                onEntering: O,
                onExit: Z,
                onExited: Q,
                onExiting: ue,
                addEndListener: fe,
                nodeRef: Y,
                timeout: C === 'auto' ? null : C,
                ...R,
                children: (N, { ownerState: ae, ...te }) =>
                    a.jsx(wi, {
                        as: c,
                        className: se(
                            M.root,
                            i,
                            {
                                entered: M.entered,
                                exited: !u && U === '0px' && M.hidden,
                            }[N],
                        ),
                        style: {
                            [E ? 'minWidth' : 'minHeight']: U,
                            ..._,
                        },
                        ref: q,
                        ownerState: {
                            ...w,
                            state: N,
                        },
                        ...te,
                        children: a.jsx(Ci, {
                            ownerState: {
                                ...w,
                                state: N,
                            },
                            className: M.wrapper,
                            ref: A,
                            children: a.jsx(Si, {
                                ownerState: {
                                    ...w,
                                    state: N,
                                },
                                className: M.wrapperInner,
                                children: s,
                            }),
                        }),
                    }),
            });
        });
    Io && (Io.muiSupportAuto = true);
    const ds = y.createContext({});
    function ji(e) {
        return be('MuiAccordion', e);
    }
    const kn = xe('MuiAccordion', ['root', 'heading', 'rounded', 'expanded', 'disabled', 'gutters', 'region']),
        Ri = e => {
            const { classes: t, square: n, expanded: o, disabled: r, disableGutters: s } = e;
            return ve(
                {
                    root: ['root', !n && 'rounded', o && 'expanded', r && 'disabled', !s && 'gutters'],
                    heading: ['heading'],
                    region: ['region'],
                },
                ji,
                t,
            );
        },
        Mi = J(et, {
            name: 'MuiAccordion',
            slot: 'Root',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [
                    {
                        [`& .${kn.region}`]: t.region,
                    },
                    t.root,
                    !n.square && t.rounded,
                    !n.disableGutters && t.gutters,
                ];
            },
        })(
            pe(({ theme: e }) => {
                const t = {
                    duration: e.transitions.duration.shortest,
                };
                return {
                    position: 'relative',
                    transition: e.transitions.create(['margin'], t),
                    overflowAnchor: 'none',
                    '&::before': {
                        position: 'absolute',
                        left: 0,
                        top: -1,
                        right: 0,
                        height: 1,
                        content: '""',
                        opacity: 1,
                        backgroundColor: (e.vars || e).palette.divider,
                        transition: e.transitions.create(['opacity', 'background-color'], t),
                    },
                    '&:first-of-type': {
                        '&::before': {
                            display: 'none',
                        },
                    },
                    [`&.${kn.expanded}`]: {
                        '&::before': {
                            opacity: 0,
                        },
                        '&:first-of-type': {
                            marginTop: 0,
                        },
                        '&:last-of-type': {
                            marginBottom: 0,
                        },
                        '& + &': {
                            '&::before': {
                                display: 'none',
                            },
                        },
                    },
                    [`&.${kn.disabled}`]: {
                        backgroundColor: (e.vars || e).palette.action.disabledBackground,
                    },
                };
            }),
            pe(({ theme: e }) => ({
                variants: [
                    {
                        props: t => !t.square,
                        style: {
                            borderRadius: 0,
                            '&:first-of-type': {
                                borderTopLeftRadius: (e.vars || e).shape.borderRadius,
                                borderTopRightRadius: (e.vars || e).shape.borderRadius,
                            },
                            '&:last-of-type': {
                                borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
                                borderBottomRightRadius: (e.vars || e).shape.borderRadius,
                                '@supports (-ms-ime-align: auto)': {
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                },
                            },
                        },
                    },
                    {
                        props: t => !t.disableGutters,
                        style: {
                            [`&.${kn.expanded}`]: {
                                margin: '16px 0',
                            },
                        },
                    },
                ],
            })),
        ),
        $i = J('h3', {
            name: 'MuiAccordion',
            slot: 'Heading',
            overridesResolver: (e, t) => t.heading,
        })({
            all: 'unset',
        }),
        En = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiAccordion',
                }),
                {
                    children: r,
                    className: s,
                    defaultExpanded: i = false,
                    disabled: l = false,
                    disableGutters: c = false,
                    expanded: d,
                    onChange: u,
                    square: g = false,
                    slots: f = {},
                    slotProps: p = {},
                    TransitionComponent: h,
                    TransitionProps: m,
                    ...x
                } = o,
                [v, _] = ls({
                    controlled: d,
                    default: i,
                    name: 'Accordion',
                    state: 'expanded',
                }),
                C = y.useCallback(
                    S => {
                        (_(!v), u && u(S, !v));
                    },
                    [v, u, _],
                ),
                [j, ...R] = y.Children.toArray(r),
                w = y.useMemo(
                    () => ({
                        expanded: v,
                        disabled: l,
                        disableGutters: c,
                        toggle: C,
                    }),
                    [v, l, c, C],
                ),
                M = {
                    ...o,
                    square: g,
                    disabled: l,
                    disableGutters: c,
                    expanded: v,
                },
                T = Ri(M),
                D = {
                    transition: h,
                    ...f,
                },
                A = {
                    transition: m,
                    ...p,
                },
                P = {
                    slots: D,
                    slotProps: A,
                },
                [U, E] = ce('root', {
                    elementType: Mi,
                    externalForwardedProps: {
                        ...P,
                        ...x,
                    },
                    className: se(T.root, s),
                    shouldForwardComponentProp: true,
                    ownerState: M,
                    ref: n,
                    additionalProps: {
                        square: g,
                    },
                }),
                [W, Y] = ce('heading', {
                    elementType: $i,
                    externalForwardedProps: P,
                    className: T.heading,
                    ownerState: M,
                }),
                [q, k] = ce('transition', {
                    elementType: Io,
                    externalForwardedProps: P,
                    ownerState: M,
                });
            return a.jsxs(U, {
                ...E,
                children: [
                    a.jsx(W, {
                        ...Y,
                        children: a.jsx(ds.Provider, {
                            value: w,
                            children: j,
                        }),
                    }),
                    a.jsx(q, {
                        in: v,
                        timeout: 'auto',
                        ...k,
                        children: a.jsx('div', {
                            'aria-labelledby': j.props.id,
                            id: j.props['aria-controls'],
                            role: 'region',
                            className: T.region,
                            children: R,
                        }),
                    }),
                ],
            });
        });
    function Ai(e) {
        return be('MuiAccordionDetails', e);
    }
    xe('MuiAccordionDetails', ['root']);
    const Ii = e => {
            const { classes: t } = e;
            return ve(
                {
                    root: ['root'],
                },
                Ai,
                t,
            );
        },
        Pi = J('div', {
            name: 'MuiAccordionDetails',
            slot: 'Root',
            overridesResolver: (e, t) => t.root,
        })(
            pe(({ theme: e }) => ({
                padding: e.spacing(1, 2, 2),
            })),
        ),
        On = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiAccordionDetails',
                }),
                { className: r, ...s } = o,
                i = o,
                l = Ii(i);
            return a.jsx(Pi, {
                className: se(l.root, r),
                ref: n,
                ownerState: i,
                ...s,
            });
        });
    function Fi(e) {
        return be('MuiAccordionSummary', e);
    }
    const Yt = xe('MuiAccordionSummary', [
            'root',
            'expanded',
            'focusVisible',
            'disabled',
            'gutters',
            'contentGutters',
            'content',
            'expandIconWrapper',
        ]),
        zi = e => {
            const { classes: t, expanded: n, disabled: o, disableGutters: r } = e;
            return ve(
                {
                    root: ['root', n && 'expanded', o && 'disabled', !r && 'gutters'],
                    focusVisible: ['focusVisible'],
                    content: ['content', n && 'expanded', !r && 'contentGutters'],
                    expandIconWrapper: ['expandIconWrapper', n && 'expanded'],
                },
                Fi,
                t,
            );
        },
        Ti = J(Zn, {
            name: 'MuiAccordionSummary',
            slot: 'Root',
            overridesResolver: (e, t) => t.root,
        })(
            pe(({ theme: e }) => {
                const t = {
                    duration: e.transitions.duration.shortest,
                };
                return {
                    display: 'flex',
                    width: '100%',
                    minHeight: 48,
                    padding: e.spacing(0, 2),
                    transition: e.transitions.create(['min-height', 'background-color'], t),
                    [`&.${Yt.focusVisible}`]: {
                        backgroundColor: (e.vars || e).palette.action.focus,
                    },
                    [`&.${Yt.disabled}`]: {
                        opacity: (e.vars || e).palette.action.disabledOpacity,
                    },
                    [`&:hover:not(.${Yt.disabled})`]: {
                        cursor: 'pointer',
                    },
                    variants: [
                        {
                            props: n => !n.disableGutters,
                            style: {
                                [`&.${Yt.expanded}`]: {
                                    minHeight: 64,
                                },
                            },
                        },
                    ],
                };
            }),
        ),
        Di = J('span', {
            name: 'MuiAccordionSummary',
            slot: 'Content',
            overridesResolver: (e, t) => t.content,
        })(
            pe(({ theme: e }) => ({
                display: 'flex',
                textAlign: 'start',
                flexGrow: 1,
                margin: '12px 0',
                variants: [
                    {
                        props: t => !t.disableGutters,
                        style: {
                            transition: e.transitions.create(['margin'], {
                                duration: e.transitions.duration.shortest,
                            }),
                            [`&.${Yt.expanded}`]: {
                                margin: '20px 0',
                            },
                        },
                    },
                ],
            })),
        ),
        ki = J('span', {
            name: 'MuiAccordionSummary',
            slot: 'ExpandIconWrapper',
            overridesResolver: (e, t) => t.expandIconWrapper,
        })(
            pe(({ theme: e }) => ({
                display: 'flex',
                color: (e.vars || e).palette.action.active,
                transform: 'rotate(0deg)',
                transition: e.transitions.create('transform', {
                    duration: e.transitions.duration.shortest,
                }),
                [`&.${Yt.expanded}`]: {
                    transform: 'rotate(180deg)',
                },
            })),
        ),
        Nn = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiAccordionSummary',
                }),
                {
                    children: r,
                    className: s,
                    expandIcon: i,
                    focusVisibleClassName: l,
                    onClick: c,
                    slots: d,
                    slotProps: u,
                    ...g
                } = o,
                { disabled: f = false, disableGutters: p, expanded: h, toggle: m } = y.useContext(ds),
                x = A => {
                    (m && m(A), c && c(A));
                },
                v = {
                    ...o,
                    expanded: h,
                    disabled: f,
                    disableGutters: p,
                },
                _ = zi(v),
                C = {
                    slots: d,
                    slotProps: u,
                },
                [j, R] = ce('root', {
                    ref: n,
                    shouldForwardComponentProp: true,
                    className: se(_.root, s),
                    elementType: Ti,
                    externalForwardedProps: {
                        ...C,
                        ...g,
                    },
                    ownerState: v,
                    additionalProps: {
                        focusRipple: false,
                        disableRipple: true,
                        disabled: f,
                        'aria-expanded': h,
                        focusVisibleClassName: se(_.focusVisible, l),
                    },
                    getSlotProps: A => ({
                        ...A,
                        onClick: P => {
                            var _a2;
                            ((_a2 = A.onClick) == null ? void 0 : _a2.call(A, P), x(P));
                        },
                    }),
                }),
                [w, M] = ce('content', {
                    className: _.content,
                    elementType: Di,
                    externalForwardedProps: C,
                    ownerState: v,
                }),
                [T, D] = ce('expandIconWrapper', {
                    className: _.expandIconWrapper,
                    elementType: ki,
                    externalForwardedProps: C,
                    ownerState: v,
                });
            return a.jsxs(j, {
                ...R,
                children: [
                    a.jsx(w, {
                        ...M,
                        children: r,
                    }),
                    i &&
                        a.jsx(T, {
                            ...D,
                            children: i,
                        }),
                ],
            });
        });
    function Ei(e) {
        return be('MuiAlert', e);
    }
    const gr = xe('MuiAlert', [
            'root',
            'action',
            'icon',
            'message',
            'filled',
            'colorSuccess',
            'colorInfo',
            'colorWarning',
            'colorError',
            'filledSuccess',
            'filledInfo',
            'filledWarning',
            'filledError',
            'outlined',
            'outlinedSuccess',
            'outlinedInfo',
            'outlinedWarning',
            'outlinedError',
            'standard',
            'standardSuccess',
            'standardInfo',
            'standardWarning',
            'standardError',
        ]),
        Oi = le(
            a.jsx('path', {
                d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
            }),
            'SuccessOutlined',
        ),
        Ni = le(
            a.jsx('path', {
                d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
            }),
            'ReportProblemOutlined',
        ),
        Li = le(
            a.jsx('path', {
                d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            }),
            'ErrorOutline',
        ),
        Hi = le(
            a.jsx('path', {
                d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
            }),
            'InfoOutlined',
        ),
        Vi = le(
            a.jsx('path', {
                d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
            }),
            'Close',
        ),
        Bi = e => {
            const { variant: t, color: n, severity: o, classes: r } = e,
                s = {
                    root: ['root', `color${G(n || o)}`, `${t}${G(n || o)}`, `${t}`],
                    icon: ['icon'],
                    message: ['message'],
                    action: ['action'],
                };
            return ve(s, Ei, r);
        },
        Wi = J(et, {
            name: 'MuiAlert',
            slot: 'Root',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [t.root, t[n.variant], t[`${n.variant}${G(n.color || n.severity)}`]];
            },
        })(
            pe(({ theme: e }) => {
                const t = e.palette.mode === 'light' ? Ro : Mo,
                    n = e.palette.mode === 'light' ? Mo : Ro;
                return {
                    ...e.typography.body2,
                    backgroundColor: 'transparent',
                    display: 'flex',
                    padding: '6px 16px',
                    variants: [
                        ...Object.entries(e.palette)
                            .filter(Dt(['light']))
                            .map(([o]) => ({
                                props: {
                                    colorSeverity: o,
                                    variant: 'standard',
                                },
                                style: {
                                    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
                                    backgroundColor: e.vars
                                        ? e.vars.palette.Alert[`${o}StandardBg`]
                                        : n(e.palette[o].light, 0.9),
                                    [`& .${gr.icon}`]: e.vars
                                        ? {
                                              color: e.vars.palette.Alert[`${o}IconColor`],
                                          }
                                        : {
                                              color: e.palette[o].main,
                                          },
                                },
                            })),
                        ...Object.entries(e.palette)
                            .filter(Dt(['light']))
                            .map(([o]) => ({
                                props: {
                                    colorSeverity: o,
                                    variant: 'outlined',
                                },
                                style: {
                                    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
                                    border: `1px solid ${(e.vars || e).palette[o].light}`,
                                    [`& .${gr.icon}`]: e.vars
                                        ? {
                                              color: e.vars.palette.Alert[`${o}IconColor`],
                                          }
                                        : {
                                              color: e.palette[o].main,
                                          },
                                },
                            })),
                        ...Object.entries(e.palette)
                            .filter(Dt(['dark']))
                            .map(([o]) => ({
                                props: {
                                    colorSeverity: o,
                                    variant: 'filled',
                                },
                                style: {
                                    fontWeight: e.typography.fontWeightMedium,
                                    ...(e.vars
                                        ? {
                                              color: e.vars.palette.Alert[`${o}FilledColor`],
                                              backgroundColor: e.vars.palette.Alert[`${o}FilledBg`],
                                          }
                                        : {
                                              backgroundColor:
                                                  e.palette.mode === 'dark' ? e.palette[o].dark : e.palette[o].main,
                                              color: e.palette.getContrastText(e.palette[o].main),
                                          }),
                                },
                            })),
                    ],
                };
            }),
        ),
        Gi = J('div', {
            name: 'MuiAlert',
            slot: 'Icon',
            overridesResolver: (e, t) => t.icon,
        })({
            marginRight: 12,
            padding: '7px 0',
            display: 'flex',
            fontSize: 22,
            opacity: 0.9,
        }),
        Ui = J('div', {
            name: 'MuiAlert',
            slot: 'Message',
            overridesResolver: (e, t) => t.message,
        })({
            padding: '8px 0',
            minWidth: 0,
            overflow: 'auto',
        }),
        qi = J('div', {
            name: 'MuiAlert',
            slot: 'Action',
            overridesResolver: (e, t) => t.action,
        })({
            display: 'flex',
            alignItems: 'flex-start',
            padding: '4px 0 0 16px',
            marginLeft: 'auto',
            marginRight: -8,
        }),
        hr = {
            success: a.jsx(Oi, {
                fontSize: 'inherit',
            }),
            warning: a.jsx(Ni, {
                fontSize: 'inherit',
            }),
            error: a.jsx(Li, {
                fontSize: 'inherit',
            }),
            info: a.jsx(Hi, {
                fontSize: 'inherit',
            }),
        },
        Jn = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiAlert',
                }),
                {
                    action: r,
                    children: s,
                    className: i,
                    closeText: l = 'Close',
                    color: c,
                    components: d = {},
                    componentsProps: u = {},
                    icon: g,
                    iconMapping: f = hr,
                    onClose: p,
                    role: h = 'alert',
                    severity: m = 'success',
                    slotProps: x = {},
                    slots: v = {},
                    variant: _ = 'standard',
                    ...C
                } = o,
                j = {
                    ...o,
                    color: c,
                    severity: m,
                    variant: _,
                    colorSeverity: c || m,
                },
                R = Bi(j),
                w = {
                    slots: {
                        closeButton: d.CloseButton,
                        closeIcon: d.CloseIcon,
                        ...v,
                    },
                    slotProps: {
                        ...u,
                        ...x,
                    },
                },
                [M, T] = ce('root', {
                    ref: n,
                    shouldForwardComponentProp: true,
                    className: se(R.root, i),
                    elementType: Wi,
                    externalForwardedProps: {
                        ...w,
                        ...C,
                    },
                    ownerState: j,
                    additionalProps: {
                        role: h,
                        elevation: 0,
                    },
                }),
                [D, A] = ce('icon', {
                    className: R.icon,
                    elementType: Gi,
                    externalForwardedProps: w,
                    ownerState: j,
                }),
                [P, U] = ce('message', {
                    className: R.message,
                    elementType: Ui,
                    externalForwardedProps: w,
                    ownerState: j,
                }),
                [E, W] = ce('action', {
                    className: R.action,
                    elementType: qi,
                    externalForwardedProps: w,
                    ownerState: j,
                }),
                [Y, q] = ce('closeButton', {
                    elementType: Se,
                    externalForwardedProps: w,
                    ownerState: j,
                }),
                [k, S] = ce('closeIcon', {
                    elementType: Vi,
                    externalForwardedProps: w,
                    ownerState: j,
                });
            return a.jsxs(M, {
                ...T,
                children: [
                    g !== false
                        ? a.jsx(D, {
                              ...A,
                              children: g || f[m] || hr[m],
                          })
                        : null,
                    a.jsx(P, {
                        ...U,
                        children: s,
                    }),
                    r != null
                        ? a.jsx(E, {
                              ...W,
                              children: r,
                          })
                        : null,
                    r == null && p
                        ? a.jsx(E, {
                              ...W,
                              children: a.jsx(Y, {
                                  size: 'small',
                                  'aria-label': l,
                                  title: l,
                                  color: 'inherit',
                                  onClick: p,
                                  ...q,
                                  children: a.jsx(k, {
                                      fontSize: 'small',
                                      ...S,
                                  }),
                              }),
                          })
                        : null,
                ],
            });
        });
    var He = 'top',
        Ke = 'bottom',
        Xe = 'right',
        Ve = 'left',
        Jo = 'auto',
        Mn = [He, Ke, Xe, Ve],
        Xt = 'start',
        Cn = 'end',
        Yi = 'clippingParents',
        ps = 'viewport',
        nn = 'popper',
        Ji = 'reference',
        mr = Mn.reduce(function (e, t) {
            return e.concat([t + '-' + Xt, t + '-' + Cn]);
        }, []),
        fs = [].concat(Mn, [Jo]).reduce(function (e, t) {
            return e.concat([t, t + '-' + Xt, t + '-' + Cn]);
        }, []),
        Ki = 'beforeRead',
        Xi = 'read',
        Qi = 'afterRead',
        Zi = 'beforeMain',
        el = 'main',
        tl = 'afterMain',
        nl = 'beforeWrite',
        ol = 'write',
        rl = 'afterWrite',
        sl = [Ki, Xi, Qi, Zi, el, tl, nl, ol, rl];
    function st(e) {
        return e ? (e.nodeName || '').toLowerCase() : null;
    }
    function We(e) {
        if (e == null) return window;
        if (e.toString() !== '[object Window]') {
            var t = e.ownerDocument;
            return (t && t.defaultView) || window;
        }
        return e;
    }
    function Nt(e) {
        var t = We(e).Element;
        return e instanceof t || e instanceof Element;
    }
    function Je(e) {
        var t = We(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement;
    }
    function Ko(e) {
        if (typeof ShadowRoot > 'u') return false;
        var t = We(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot;
    }
    function il(e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (n) {
            var o = t.styles[n] || {},
                r = t.attributes[n] || {},
                s = t.elements[n];
            !Je(s) ||
                !st(s) ||
                (Object.assign(s.style, o),
                Object.keys(r).forEach(function (i) {
                    var l = r[i];
                    l === false ? s.removeAttribute(i) : s.setAttribute(i, l === true ? '' : l);
                }));
        });
    }
    function ll(e) {
        var t = e.state,
            n = {
                popper: {
                    position: t.options.strategy,
                    left: '0',
                    top: '0',
                    margin: '0',
                },
                arrow: {
                    position: 'absolute',
                },
                reference: {},
            };
        return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
                Object.keys(t.elements).forEach(function (o) {
                    var r = t.elements[o],
                        s = t.attributes[o] || {},
                        i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
                        l = i.reduce(function (c, d) {
                            return ((c[d] = ''), c);
                        }, {});
                    !Je(r) ||
                        !st(r) ||
                        (Object.assign(r.style, l),
                        Object.keys(s).forEach(function (c) {
                            r.removeAttribute(c);
                        }));
                });
            }
        );
    }
    const al = {
        name: 'applyStyles',
        enabled: true,
        phase: 'write',
        fn: il,
        effect: ll,
        requires: ['computeStyles'],
    };
    function rt(e) {
        return e.split('-')[0];
    }
    var Ot = Math.max,
        no = Math.min,
        Qt = Math.round;
    function Po() {
        var e = navigator.userAgentData;
        return e != null && e.brands && Array.isArray(e.brands)
            ? e.brands
                  .map(function (t) {
                      return t.brand + '/' + t.version;
                  })
                  .join(' ')
            : navigator.userAgent;
    }
    function gs() {
        return !/^((?!chrome|android).)*safari/i.test(Po());
    }
    function Zt(e, t, n) {
        (t === void 0 && (t = false), n === void 0 && (n = false));
        var o = e.getBoundingClientRect(),
            r = 1,
            s = 1;
        t &&
            Je(e) &&
            ((r = (e.offsetWidth > 0 && Qt(o.width) / e.offsetWidth) || 1),
            (s = (e.offsetHeight > 0 && Qt(o.height) / e.offsetHeight) || 1));
        var i = Nt(e) ? We(e) : window,
            l = i.visualViewport,
            c = !gs() && n,
            d = (o.left + (c && l ? l.offsetLeft : 0)) / r,
            u = (o.top + (c && l ? l.offsetTop : 0)) / s,
            g = o.width / r,
            f = o.height / s;
        return {
            width: g,
            height: f,
            top: u,
            right: d + g,
            bottom: u + f,
            left: d,
            x: d,
            y: u,
        };
    }
    function Xo(e) {
        var t = Zt(e),
            n = e.offsetWidth,
            o = e.offsetHeight;
        return (
            Math.abs(t.width - n) <= 1 && (n = t.width),
            Math.abs(t.height - o) <= 1 && (o = t.height),
            {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: n,
                height: o,
            }
        );
    }
    function hs(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return true;
        if (n && Ko(n)) {
            var o = t;
            do {
                if (o && e.isSameNode(o)) return true;
                o = o.parentNode || o.host;
            } while (o);
        }
        return false;
    }
    function dt(e) {
        return We(e).getComputedStyle(e);
    }
    function cl(e) {
        return ['table', 'td', 'th'].indexOf(st(e)) >= 0;
    }
    function Mt(e) {
        return ((Nt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
    }
    function lo(e) {
        return st(e) === 'html' ? e : e.assignedSlot || e.parentNode || (Ko(e) ? e.host : null) || Mt(e);
    }
    function yr(e) {
        return !Je(e) || dt(e).position === 'fixed' ? null : e.offsetParent;
    }
    function ul(e) {
        var t = /firefox/i.test(Po()),
            n = /Trident/i.test(Po());
        if (n && Je(e)) {
            var o = dt(e);
            if (o.position === 'fixed') return null;
        }
        var r = lo(e);
        for (Ko(r) && (r = r.host); Je(r) && ['html', 'body'].indexOf(st(r)) < 0; ) {
            var s = dt(r);
            if (
                s.transform !== 'none' ||
                s.perspective !== 'none' ||
                s.contain === 'paint' ||
                ['transform', 'perspective'].indexOf(s.willChange) !== -1 ||
                (t && s.willChange === 'filter') ||
                (t && s.filter && s.filter !== 'none')
            )
                return r;
            r = r.parentNode;
        }
        return null;
    }
    function $n(e) {
        for (var t = We(e), n = yr(e); n && cl(n) && dt(n).position === 'static'; ) n = yr(n);
        return n && (st(n) === 'html' || (st(n) === 'body' && dt(n).position === 'static')) ? t : n || ul(e) || t;
    }
    function Qo(e) {
        return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
    }
    function mn(e, t, n) {
        return Ot(e, no(t, n));
    }
    function dl(e, t, n) {
        var o = mn(e, t, n);
        return o > n ? n : o;
    }
    function ms() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        };
    }
    function ys(e) {
        return Object.assign({}, ms(), e);
    }
    function vs(e, t) {
        return t.reduce(function (n, o) {
            return ((n[o] = e), n);
        }, {});
    }
    var pl = function (t, n) {
        return (
            (t =
                typeof t == 'function'
                    ? t(
                          Object.assign({}, n.rects, {
                              placement: n.placement,
                          }),
                      )
                    : t),
            ys(typeof t != 'number' ? t : vs(t, Mn))
        );
    };
    function fl(e) {
        var t,
            n = e.state,
            o = e.name,
            r = e.options,
            s = n.elements.arrow,
            i = n.modifiersData.popperOffsets,
            l = rt(n.placement),
            c = Qo(l),
            d = [Ve, Xe].indexOf(l) >= 0,
            u = d ? 'height' : 'width';
        if (!(!s || !i)) {
            var g = pl(r.padding, n),
                f = Xo(s),
                p = c === 'y' ? He : Ve,
                h = c === 'y' ? Ke : Xe,
                m = n.rects.reference[u] + n.rects.reference[c] - i[c] - n.rects.popper[u],
                x = i[c] - n.rects.reference[c],
                v = $n(s),
                _ = v ? (c === 'y' ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
                C = m / 2 - x / 2,
                j = g[p],
                R = _ - f[u] - g[h],
                w = _ / 2 - f[u] / 2 + C,
                M = mn(j, w, R),
                T = c;
            n.modifiersData[o] = ((t = {}), (t[T] = M), (t.centerOffset = M - w), t);
        }
    }
    function gl(e) {
        var t = e.state,
            n = e.options,
            o = n.element,
            r = o === void 0 ? '[data-popper-arrow]' : o;
        r != null &&
            ((typeof r == 'string' && ((r = t.elements.popper.querySelector(r)), !r)) ||
                (hs(t.elements.popper, r) && (t.elements.arrow = r)));
    }
    const hl = {
        name: 'arrow',
        enabled: true,
        phase: 'main',
        fn: fl,
        effect: gl,
        requires: ['popperOffsets'],
        requiresIfExists: ['preventOverflow'],
    };
    function en(e) {
        return e.split('-')[1];
    }
    var ml = {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
    };
    function yl(e, t) {
        var n = e.x,
            o = e.y,
            r = t.devicePixelRatio || 1;
        return {
            x: Qt(n * r) / r || 0,
            y: Qt(o * r) / r || 0,
        };
    }
    function vr(e) {
        var t,
            n = e.popper,
            o = e.popperRect,
            r = e.placement,
            s = e.variation,
            i = e.offsets,
            l = e.position,
            c = e.gpuAcceleration,
            d = e.adaptive,
            u = e.roundOffsets,
            g = e.isFixed,
            f = i.x,
            p = f === void 0 ? 0 : f,
            h = i.y,
            m = h === void 0 ? 0 : h,
            x =
                typeof u == 'function'
                    ? u({
                          x: p,
                          y: m,
                      })
                    : {
                          x: p,
                          y: m,
                      };
        ((p = x.x), (m = x.y));
        var v = i.hasOwnProperty('x'),
            _ = i.hasOwnProperty('y'),
            C = Ve,
            j = He,
            R = window;
        if (d) {
            var w = $n(n),
                M = 'clientHeight',
                T = 'clientWidth';
            if (
                (w === We(n) &&
                    ((w = Mt(n)),
                    dt(w).position !== 'static' && l === 'absolute' && ((M = 'scrollHeight'), (T = 'scrollWidth'))),
                (w = w),
                r === He || ((r === Ve || r === Xe) && s === Cn))
            ) {
                j = Ke;
                var D = g && w === R && R.visualViewport ? R.visualViewport.height : w[M];
                ((m -= D - o.height), (m *= c ? 1 : -1));
            }
            if (r === Ve || ((r === He || r === Ke) && s === Cn)) {
                C = Xe;
                var A = g && w === R && R.visualViewport ? R.visualViewport.width : w[T];
                ((p -= A - o.width), (p *= c ? 1 : -1));
            }
        }
        var P = Object.assign(
                {
                    position: l,
                },
                d && ml,
            ),
            U =
                u === true
                    ? yl(
                          {
                              x: p,
                              y: m,
                          },
                          We(n),
                      )
                    : {
                          x: p,
                          y: m,
                      };
        if (((p = U.x), (m = U.y), c)) {
            var E;
            return Object.assign(
                {},
                P,
                ((E = {}),
                (E[j] = _ ? '0' : ''),
                (E[C] = v ? '0' : ''),
                (E.transform =
                    (R.devicePixelRatio || 1) <= 1
                        ? 'translate(' + p + 'px, ' + m + 'px)'
                        : 'translate3d(' + p + 'px, ' + m + 'px, 0)'),
                E),
            );
        }
        return Object.assign(
            {},
            P,
            ((t = {}), (t[j] = _ ? m + 'px' : ''), (t[C] = v ? p + 'px' : ''), (t.transform = ''), t),
        );
    }
    function vl(e) {
        var t = e.state,
            n = e.options,
            o = n.gpuAcceleration,
            r = o === void 0 ? true : o,
            s = n.adaptive,
            i = s === void 0 ? true : s,
            l = n.roundOffsets,
            c = l === void 0 ? true : l,
            d = {
                placement: rt(t.placement),
                variation: en(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: r,
                isFixed: t.options.strategy === 'fixed',
            };
        (t.modifiersData.popperOffsets != null &&
            (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                vr(
                    Object.assign({}, d, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: i,
                        roundOffsets: c,
                    }),
                ),
            )),
            t.modifiersData.arrow != null &&
                (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    vr(
                        Object.assign({}, d, {
                            offsets: t.modifiersData.arrow,
                            position: 'absolute',
                            adaptive: false,
                            roundOffsets: c,
                        }),
                    ),
                )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                'data-popper-placement': t.placement,
            })));
    }
    const bl = {
        name: 'computeStyles',
        enabled: true,
        phase: 'beforeWrite',
        fn: vl,
        data: {},
    };
    var Ln = {
        passive: true,
    };
    function xl(e) {
        var t = e.state,
            n = e.instance,
            o = e.options,
            r = o.scroll,
            s = r === void 0 ? true : r,
            i = o.resize,
            l = i === void 0 ? true : i,
            c = We(t.elements.popper),
            d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
            s &&
                d.forEach(function (u) {
                    u.addEventListener('scroll', n.update, Ln);
                }),
            l && c.addEventListener('resize', n.update, Ln),
            function () {
                (s &&
                    d.forEach(function (u) {
                        u.removeEventListener('scroll', n.update, Ln);
                    }),
                    l && c.removeEventListener('resize', n.update, Ln));
            }
        );
    }
    const _l = {
        name: 'eventListeners',
        enabled: true,
        phase: 'write',
        fn: function () {},
        effect: xl,
        data: {},
    };
    var wl = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom',
    };
    function Kn(e) {
        return e.replace(/left|right|bottom|top/g, function (t) {
            return wl[t];
        });
    }
    var Cl = {
        start: 'end',
        end: 'start',
    };
    function br(e) {
        return e.replace(/start|end/g, function (t) {
            return Cl[t];
        });
    }
    function Zo(e) {
        var t = We(e),
            n = t.pageXOffset,
            o = t.pageYOffset;
        return {
            scrollLeft: n,
            scrollTop: o,
        };
    }
    function er(e) {
        return Zt(Mt(e)).left + Zo(e).scrollLeft;
    }
    function Sl(e, t) {
        var n = We(e),
            o = Mt(e),
            r = n.visualViewport,
            s = o.clientWidth,
            i = o.clientHeight,
            l = 0,
            c = 0;
        if (r) {
            ((s = r.width), (i = r.height));
            var d = gs();
            (d || (!d && t === 'fixed')) && ((l = r.offsetLeft), (c = r.offsetTop));
        }
        return {
            width: s,
            height: i,
            x: l + er(e),
            y: c,
        };
    }
    function jl(e) {
        var t,
            n = Mt(e),
            o = Zo(e),
            r = (t = e.ownerDocument) == null ? void 0 : t.body,
            s = Ot(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
            i = Ot(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
            l = -o.scrollLeft + er(e),
            c = -o.scrollTop;
        return (
            dt(r || n).direction === 'rtl' && (l += Ot(n.clientWidth, r ? r.clientWidth : 0) - s),
            {
                width: s,
                height: i,
                x: l,
                y: c,
            }
        );
    }
    function tr(e) {
        var t = dt(e),
            n = t.overflow,
            o = t.overflowX,
            r = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + r + o);
    }
    function bs(e) {
        return ['html', 'body', '#document'].indexOf(st(e)) >= 0
            ? e.ownerDocument.body
            : Je(e) && tr(e)
              ? e
              : bs(lo(e));
    }
    function yn(e, t) {
        var n;
        t === void 0 && (t = []);
        var o = bs(e),
            r = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
            s = We(o),
            i = r ? [s].concat(s.visualViewport || [], tr(o) ? o : []) : o,
            l = t.concat(i);
        return r ? l : l.concat(yn(lo(i)));
    }
    function Fo(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height,
        });
    }
    function Rl(e, t) {
        var n = Zt(e, false, t === 'fixed');
        return (
            (n.top = n.top + e.clientTop),
            (n.left = n.left + e.clientLeft),
            (n.bottom = n.top + e.clientHeight),
            (n.right = n.left + e.clientWidth),
            (n.width = e.clientWidth),
            (n.height = e.clientHeight),
            (n.x = n.left),
            (n.y = n.top),
            n
        );
    }
    function xr(e, t, n) {
        return t === ps ? Fo(Sl(e, n)) : Nt(t) ? Rl(t, n) : Fo(jl(Mt(e)));
    }
    function Ml(e) {
        var t = yn(lo(e)),
            n = ['absolute', 'fixed'].indexOf(dt(e).position) >= 0,
            o = n && Je(e) ? $n(e) : e;
        return Nt(o)
            ? t.filter(function (r) {
                  return Nt(r) && hs(r, o) && st(r) !== 'body';
              })
            : [];
    }
    function $l(e, t, n, o) {
        var r = t === 'clippingParents' ? Ml(e) : [].concat(t),
            s = [].concat(r, [n]),
            i = s[0],
            l = s.reduce(
                function (c, d) {
                    var u = xr(e, d, o);
                    return (
                        (c.top = Ot(u.top, c.top)),
                        (c.right = no(u.right, c.right)),
                        (c.bottom = no(u.bottom, c.bottom)),
                        (c.left = Ot(u.left, c.left)),
                        c
                    );
                },
                xr(e, i, o),
            );
        return ((l.width = l.right - l.left), (l.height = l.bottom - l.top), (l.x = l.left), (l.y = l.top), l);
    }
    function xs(e) {
        var t = e.reference,
            n = e.element,
            o = e.placement,
            r = o ? rt(o) : null,
            s = o ? en(o) : null,
            i = t.x + t.width / 2 - n.width / 2,
            l = t.y + t.height / 2 - n.height / 2,
            c;
        switch (r) {
            case He:
                c = {
                    x: i,
                    y: t.y - n.height,
                };
                break;
            case Ke:
                c = {
                    x: i,
                    y: t.y + t.height,
                };
                break;
            case Xe:
                c = {
                    x: t.x + t.width,
                    y: l,
                };
                break;
            case Ve:
                c = {
                    x: t.x - n.width,
                    y: l,
                };
                break;
            default:
                c = {
                    x: t.x,
                    y: t.y,
                };
        }
        var d = r ? Qo(r) : null;
        if (d != null) {
            var u = d === 'y' ? 'height' : 'width';
            switch (s) {
                case Xt:
                    c[d] = c[d] - (t[u] / 2 - n[u] / 2);
                    break;
                case Cn:
                    c[d] = c[d] + (t[u] / 2 - n[u] / 2);
                    break;
            }
        }
        return c;
    }
    function Sn(e, t) {
        t === void 0 && (t = {});
        var n = t,
            o = n.placement,
            r = o === void 0 ? e.placement : o,
            s = n.strategy,
            i = s === void 0 ? e.strategy : s,
            l = n.boundary,
            c = l === void 0 ? Yi : l,
            d = n.rootBoundary,
            u = d === void 0 ? ps : d,
            g = n.elementContext,
            f = g === void 0 ? nn : g,
            p = n.altBoundary,
            h = p === void 0 ? false : p,
            m = n.padding,
            x = m === void 0 ? 0 : m,
            v = ys(typeof x != 'number' ? x : vs(x, Mn)),
            _ = f === nn ? Ji : nn,
            C = e.rects.popper,
            j = e.elements[h ? _ : f],
            R = $l(Nt(j) ? j : j.contextElement || Mt(e.elements.popper), c, u, i),
            w = Zt(e.elements.reference),
            M = xs({
                reference: w,
                element: C,
                placement: r,
            }),
            T = Fo(Object.assign({}, C, M)),
            D = f === nn ? T : w,
            A = {
                top: R.top - D.top + v.top,
                bottom: D.bottom - R.bottom + v.bottom,
                left: R.left - D.left + v.left,
                right: D.right - R.right + v.right,
            },
            P = e.modifiersData.offset;
        if (f === nn && P) {
            var U = P[r];
            Object.keys(A).forEach(function (E) {
                var W = [Xe, Ke].indexOf(E) >= 0 ? 1 : -1,
                    Y = [He, Ke].indexOf(E) >= 0 ? 'y' : 'x';
                A[E] += U[Y] * W;
            });
        }
        return A;
    }
    function Al(e, t) {
        t === void 0 && (t = {});
        var n = t,
            o = n.placement,
            r = n.boundary,
            s = n.rootBoundary,
            i = n.padding,
            l = n.flipVariations,
            c = n.allowedAutoPlacements,
            d = c === void 0 ? fs : c,
            u = en(o),
            g = u
                ? l
                    ? mr
                    : mr.filter(function (h) {
                          return en(h) === u;
                      })
                : Mn,
            f = g.filter(function (h) {
                return d.indexOf(h) >= 0;
            });
        f.length === 0 && (f = g);
        var p = f.reduce(function (h, m) {
            return (
                (h[m] = Sn(e, {
                    placement: m,
                    boundary: r,
                    rootBoundary: s,
                    padding: i,
                })[rt(m)]),
                h
            );
        }, {});
        return Object.keys(p).sort(function (h, m) {
            return p[h] - p[m];
        });
    }
    function Il(e) {
        if (rt(e) === Jo) return [];
        var t = Kn(e);
        return [br(e), t, br(t)];
    }
    function Pl(e) {
        var t = e.state,
            n = e.options,
            o = e.name;
        if (!t.modifiersData[o]._skip) {
            for (
                var r = n.mainAxis,
                    s = r === void 0 ? true : r,
                    i = n.altAxis,
                    l = i === void 0 ? true : i,
                    c = n.fallbackPlacements,
                    d = n.padding,
                    u = n.boundary,
                    g = n.rootBoundary,
                    f = n.altBoundary,
                    p = n.flipVariations,
                    h = p === void 0 ? true : p,
                    m = n.allowedAutoPlacements,
                    x = t.options.placement,
                    v = rt(x),
                    _ = v === x,
                    C = c || (_ || !h ? [Kn(x)] : Il(x)),
                    j = [x].concat(C).reduce(function (ue, fe) {
                        return ue.concat(
                            rt(fe) === Jo
                                ? Al(t, {
                                      placement: fe,
                                      boundary: u,
                                      rootBoundary: g,
                                      padding: d,
                                      flipVariations: h,
                                      allowedAutoPlacements: m,
                                  })
                                : fe,
                        );
                    }, []),
                    R = t.rects.reference,
                    w = t.rects.popper,
                    M = /* @__PURE__ */ new Map(),
                    T = true,
                    D = j[0],
                    A = 0;
                A < j.length;
                A++
            ) {
                var P = j[A],
                    U = rt(P),
                    E = en(P) === Xt,
                    W = [He, Ke].indexOf(U) >= 0,
                    Y = W ? 'width' : 'height',
                    q = Sn(t, {
                        placement: P,
                        boundary: u,
                        rootBoundary: g,
                        altBoundary: f,
                        padding: d,
                    }),
                    k = W ? (E ? Xe : Ve) : E ? Ke : He;
                R[Y] > w[Y] && (k = Kn(k));
                var S = Kn(k),
                    I = [];
                if (
                    (s && I.push(q[U] <= 0),
                    l && I.push(q[k] <= 0, q[S] <= 0),
                    I.every(function (ue) {
                        return ue;
                    }))
                ) {
                    ((D = P), (T = false));
                    break;
                }
                M.set(P, I);
            }
            if (T)
                for (
                    var O = h ? 3 : 1,
                        L = function (fe) {
                            var N = j.find(function (ae) {
                                var te = M.get(ae);
                                if (te)
                                    return te.slice(0, fe).every(function (X) {
                                        return X;
                                    });
                            });
                            if (N) return ((D = N), 'break');
                        },
                        Z = O;
                    Z > 0;
                    Z--
                ) {
                    var Q = L(Z);
                    if (Q === 'break') break;
                }
            t.placement !== D && ((t.modifiersData[o]._skip = true), (t.placement = D), (t.reset = true));
        }
    }
    const Fl = {
        name: 'flip',
        enabled: true,
        phase: 'main',
        fn: Pl,
        requiresIfExists: ['offset'],
        data: {
            _skip: false,
        },
    };
    function _r(e, t, n) {
        return (
            n === void 0 &&
                (n = {
                    x: 0,
                    y: 0,
                }),
            {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x,
            }
        );
    }
    function wr(e) {
        return [He, Xe, Ke, Ve].some(function (t) {
            return e[t] >= 0;
        });
    }
    function zl(e) {
        var t = e.state,
            n = e.name,
            o = t.rects.reference,
            r = t.rects.popper,
            s = t.modifiersData.preventOverflow,
            i = Sn(t, {
                elementContext: 'reference',
            }),
            l = Sn(t, {
                altBoundary: true,
            }),
            c = _r(i, o),
            d = _r(l, r, s),
            u = wr(c),
            g = wr(d);
        ((t.modifiersData[n] = {
            referenceClippingOffsets: c,
            popperEscapeOffsets: d,
            isReferenceHidden: u,
            hasPopperEscaped: g,
        }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                'data-popper-reference-hidden': u,
                'data-popper-escaped': g,
            })));
    }
    const Tl = {
        name: 'hide',
        enabled: true,
        phase: 'main',
        requiresIfExists: ['preventOverflow'],
        fn: zl,
    };
    function Dl(e, t, n) {
        var o = rt(e),
            r = [Ve, He].indexOf(o) >= 0 ? -1 : 1,
            s =
                typeof n == 'function'
                    ? n(
                          Object.assign({}, t, {
                              placement: e,
                          }),
                      )
                    : n,
            i = s[0],
            l = s[1];
        return (
            (i = i || 0),
            (l = (l || 0) * r),
            [Ve, Xe].indexOf(o) >= 0
                ? {
                      x: l,
                      y: i,
                  }
                : {
                      x: i,
                      y: l,
                  }
        );
    }
    function kl(e) {
        var t = e.state,
            n = e.options,
            o = e.name,
            r = n.offset,
            s = r === void 0 ? [0, 0] : r,
            i = fs.reduce(function (u, g) {
                return ((u[g] = Dl(g, t.rects, s)), u);
            }, {}),
            l = i[t.placement],
            c = l.x,
            d = l.y;
        (t.modifiersData.popperOffsets != null &&
            ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += d)),
            (t.modifiersData[o] = i));
    }
    const El = {
        name: 'offset',
        enabled: true,
        phase: 'main',
        requires: ['popperOffsets'],
        fn: kl,
    };
    function Ol(e) {
        var t = e.state,
            n = e.name;
        t.modifiersData[n] = xs({
            reference: t.rects.reference,
            element: t.rects.popper,
            placement: t.placement,
        });
    }
    const Nl = {
        name: 'popperOffsets',
        enabled: true,
        phase: 'read',
        fn: Ol,
        data: {},
    };
    function Ll(e) {
        return e === 'x' ? 'y' : 'x';
    }
    function Hl(e) {
        var t = e.state,
            n = e.options,
            o = e.name,
            r = n.mainAxis,
            s = r === void 0 ? true : r,
            i = n.altAxis,
            l = i === void 0 ? false : i,
            c = n.boundary,
            d = n.rootBoundary,
            u = n.altBoundary,
            g = n.padding,
            f = n.tether,
            p = f === void 0 ? true : f,
            h = n.tetherOffset,
            m = h === void 0 ? 0 : h,
            x = Sn(t, {
                boundary: c,
                rootBoundary: d,
                padding: g,
                altBoundary: u,
            }),
            v = rt(t.placement),
            _ = en(t.placement),
            C = !_,
            j = Qo(v),
            R = Ll(j),
            w = t.modifiersData.popperOffsets,
            M = t.rects.reference,
            T = t.rects.popper,
            D =
                typeof m == 'function'
                    ? m(
                          Object.assign({}, t.rects, {
                              placement: t.placement,
                          }),
                      )
                    : m,
            A =
                typeof D == 'number'
                    ? {
                          mainAxis: D,
                          altAxis: D,
                      }
                    : Object.assign(
                          {
                              mainAxis: 0,
                              altAxis: 0,
                          },
                          D,
                      ),
            P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            U = {
                x: 0,
                y: 0,
            };
        if (w) {
            if (s) {
                var E,
                    W = j === 'y' ? He : Ve,
                    Y = j === 'y' ? Ke : Xe,
                    q = j === 'y' ? 'height' : 'width',
                    k = w[j],
                    S = k + x[W],
                    I = k - x[Y],
                    O = p ? -T[q] / 2 : 0,
                    L = _ === Xt ? M[q] : T[q],
                    Z = _ === Xt ? -T[q] : -M[q],
                    Q = t.elements.arrow,
                    ue =
                        p && Q
                            ? Xo(Q)
                            : {
                                  width: 0,
                                  height: 0,
                              },
                    fe = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : ms(),
                    N = fe[W],
                    ae = fe[Y],
                    te = mn(0, M[q], ue[q]),
                    X = C ? M[q] / 2 - O - te - N - A.mainAxis : L - te - N - A.mainAxis,
                    ze = C ? -M[q] / 2 + O + te + ae + A.mainAxis : Z + te + ae + A.mainAxis,
                    Ae = t.elements.arrow && $n(t.elements.arrow),
                    ge = Ae ? (j === 'y' ? Ae.clientTop || 0 : Ae.clientLeft || 0) : 0,
                    Me = (E = P == null ? void 0 : P[j]) != null ? E : 0,
                    we = k + X - Me - ge,
                    pt = k + ze - Me,
                    $t = mn(p ? no(S, we) : S, k, p ? Ot(I, pt) : I);
                ((w[j] = $t), (U[j] = $t - k));
            }
            if (l) {
                var it,
                    ft = j === 'x' ? He : Ve,
                    Qe = j === 'x' ? Ke : Xe,
                    $e = w[R],
                    ke = R === 'y' ? 'height' : 'width',
                    At = $e + x[ft],
                    gt = $e - x[Qe],
                    ht = [He, Ve].indexOf(v) !== -1,
                    mt = (it = P == null ? void 0 : P[R]) != null ? it : 0,
                    It = ht ? At : $e - M[ke] - T[ke] - mt + A.altAxis,
                    yt = ht ? $e + M[ke] + T[ke] - mt - A.altAxis : gt,
                    Ht = p && ht ? dl(It, $e, yt) : mn(p ? It : At, $e, p ? yt : gt);
                ((w[R] = Ht), (U[R] = Ht - $e));
            }
            t.modifiersData[o] = U;
        }
    }
    const Vl = {
        name: 'preventOverflow',
        enabled: true,
        phase: 'main',
        fn: Hl,
        requiresIfExists: ['offset'],
    };
    function Bl(e) {
        return {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop,
        };
    }
    function Wl(e) {
        return e === We(e) || !Je(e) ? Zo(e) : Bl(e);
    }
    function Gl(e) {
        var t = e.getBoundingClientRect(),
            n = Qt(t.width) / e.offsetWidth || 1,
            o = Qt(t.height) / e.offsetHeight || 1;
        return n !== 1 || o !== 1;
    }
    function Ul(e, t, n) {
        n === void 0 && (n = false);
        var o = Je(t),
            r = Je(t) && Gl(t),
            s = Mt(t),
            i = Zt(e, r, n),
            l = {
                scrollLeft: 0,
                scrollTop: 0,
            },
            c = {
                x: 0,
                y: 0,
            };
        return (
            (o || (!o && !n)) &&
                ((st(t) !== 'body' || tr(s)) && (l = Wl(t)),
                Je(t) ? ((c = Zt(t, true)), (c.x += t.clientLeft), (c.y += t.clientTop)) : s && (c.x = er(s))),
            {
                x: i.left + l.scrollLeft - c.x,
                y: i.top + l.scrollTop - c.y,
                width: i.width,
                height: i.height,
            }
        );
    }
    function ql(e) {
        var t = /* @__PURE__ */ new Map(),
            n = /* @__PURE__ */ new Set(),
            o = [];
        e.forEach(function (s) {
            t.set(s.name, s);
        });
        function r(s) {
            n.add(s.name);
            var i = [].concat(s.requires || [], s.requiresIfExists || []);
            (i.forEach(function (l) {
                if (!n.has(l)) {
                    var c = t.get(l);
                    c && r(c);
                }
            }),
                o.push(s));
        }
        return (
            e.forEach(function (s) {
                n.has(s.name) || r(s);
            }),
            o
        );
    }
    function Yl(e) {
        var t = ql(e);
        return sl.reduce(function (n, o) {
            return n.concat(
                t.filter(function (r) {
                    return r.phase === o;
                }),
            );
        }, []);
    }
    function Jl(e) {
        var t;
        return function () {
            return (
                t ||
                    (t = new Promise(function (n) {
                        Promise.resolve().then(function () {
                            ((t = void 0), n(e()));
                        });
                    })),
                t
            );
        };
    }
    function Kl(e) {
        var t = e.reduce(function (n, o) {
            var r = n[o.name];
            return (
                (n[o.name] = r
                    ? Object.assign({}, r, o, {
                          options: Object.assign({}, r.options, o.options),
                          data: Object.assign({}, r.data, o.data),
                      })
                    : o),
                n
            );
        }, {});
        return Object.keys(t).map(function (n) {
            return t[n];
        });
    }
    var Cr = {
        placement: 'bottom',
        modifiers: [],
        strategy: 'absolute',
    };
    function Sr() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some(function (o) {
            return !(o && typeof o.getBoundingClientRect == 'function');
        });
    }
    function Xl(e) {
        e === void 0 && (e = {});
        var t = e,
            n = t.defaultModifiers,
            o = n === void 0 ? [] : n,
            r = t.defaultOptions,
            s = r === void 0 ? Cr : r;
        return function (l, c, d) {
            d === void 0 && (d = s);
            var u = {
                    placement: 'bottom',
                    orderedModifiers: [],
                    options: Object.assign({}, Cr, s),
                    modifiersData: {},
                    elements: {
                        reference: l,
                        popper: c,
                    },
                    attributes: {},
                    styles: {},
                },
                g = [],
                f = false,
                p = {
                    state: u,
                    setOptions: function (v) {
                        var _ = typeof v == 'function' ? v(u.options) : v;
                        (m(),
                            (u.options = Object.assign({}, s, u.options, _)),
                            (u.scrollParents = {
                                reference: Nt(l) ? yn(l) : l.contextElement ? yn(l.contextElement) : [],
                                popper: yn(c),
                            }));
                        var C = Yl(Kl([].concat(o, u.options.modifiers)));
                        return (
                            (u.orderedModifiers = C.filter(function (j) {
                                return j.enabled;
                            })),
                            h(),
                            p.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!f) {
                            var v = u.elements,
                                _ = v.reference,
                                C = v.popper;
                            if (Sr(_, C)) {
                                ((u.rects = {
                                    reference: Ul(_, $n(C), u.options.strategy === 'fixed'),
                                    popper: Xo(C),
                                }),
                                    (u.reset = false),
                                    (u.placement = u.options.placement),
                                    u.orderedModifiers.forEach(function (A) {
                                        return (u.modifiersData[A.name] = Object.assign({}, A.data));
                                    }));
                                for (var j = 0; j < u.orderedModifiers.length; j++) {
                                    if (u.reset === true) {
                                        ((u.reset = false), (j = -1));
                                        continue;
                                    }
                                    var R = u.orderedModifiers[j],
                                        w = R.fn,
                                        M = R.options,
                                        T = M === void 0 ? {} : M,
                                        D = R.name;
                                    typeof w == 'function' &&
                                        (u =
                                            w({
                                                state: u,
                                                options: T,
                                                name: D,
                                                instance: p,
                                            }) || u);
                                }
                            }
                        }
                    },
                    update: Jl(function () {
                        return new Promise(function (x) {
                            (p.forceUpdate(), x(u));
                        });
                    }),
                    destroy: function () {
                        (m(), (f = true));
                    },
                };
            if (!Sr(l, c)) return p;
            p.setOptions(d).then(function (x) {
                !f && d.onFirstUpdate && d.onFirstUpdate(x);
            });
            function h() {
                u.orderedModifiers.forEach(function (x) {
                    var v = x.name,
                        _ = x.options,
                        C = _ === void 0 ? {} : _,
                        j = x.effect;
                    if (typeof j == 'function') {
                        var R = j({
                                state: u,
                                name: v,
                                instance: p,
                                options: C,
                            }),
                            w = function () {};
                        g.push(R || w);
                    }
                });
            }
            function m() {
                (g.forEach(function (x) {
                    return x();
                }),
                    (g = []));
            }
            return p;
        };
    }
    var Ql = [_l, Nl, bl, al, El, Fl, Vl, hl, Tl],
        Zl = Xl({
            defaultModifiers: Ql,
        });
    function ea(e) {
        return be('MuiPopper', e);
    }
    xe('MuiPopper', ['root']);
    function ta(e, t) {
        if (t === 'ltr') return e;
        switch (e) {
            case 'bottom-end':
                return 'bottom-start';
            case 'bottom-start':
                return 'bottom-end';
            case 'top-end':
                return 'top-start';
            case 'top-start':
                return 'top-end';
            default:
                return e;
        }
    }
    function zo(e) {
        return typeof e == 'function' ? e() : e;
    }
    function na(e) {
        return e.nodeType !== void 0;
    }
    const oa = e => {
            const { classes: t } = e;
            return ve(
                {
                    root: ['root'],
                },
                ea,
                t,
            );
        },
        ra = {},
        sa = y.forwardRef(function (t, n) {
            const {
                    anchorEl: o,
                    children: r,
                    direction: s,
                    disablePortal: i,
                    modifiers: l,
                    open: c,
                    placement: d,
                    popperOptions: u,
                    popperRef: g,
                    slotProps: f = {},
                    slots: p = {},
                    TransitionProps: h,
                    ownerState: m,
                    ...x
                } = t,
                v = y.useRef(null),
                _ = Kt(v, n),
                C = y.useRef(null),
                j = Kt(C, g),
                R = y.useRef(j);
            (ur(() => {
                R.current = j;
            }, [j]),
                y.useImperativeHandle(g, () => C.current, []));
            const w = ta(d, s),
                [M, T] = y.useState(w),
                [D, A] = y.useState(zo(o));
            (y.useEffect(() => {
                C.current && C.current.forceUpdate();
            }),
                y.useEffect(() => {
                    o && A(zo(o));
                }, [o]),
                ur(() => {
                    if (!D || !c) return;
                    const Y = S => {
                        T(S.placement);
                    };
                    let q = [
                        {
                            name: 'preventOverflow',
                            options: {
                                altBoundary: i,
                            },
                        },
                        {
                            name: 'flip',
                            options: {
                                altBoundary: i,
                            },
                        },
                        {
                            name: 'onUpdate',
                            enabled: true,
                            phase: 'afterWrite',
                            fn: ({ state: S }) => {
                                Y(S);
                            },
                        },
                    ];
                    (l != null && (q = q.concat(l)), u && u.modifiers != null && (q = q.concat(u.modifiers)));
                    const k = Zl(D, v.current, {
                        placement: w,
                        ...u,
                        modifiers: q,
                    });
                    return (
                        R.current(k),
                        () => {
                            (k.destroy(), R.current(null));
                        }
                    );
                }, [D, i, l, c, u, w]));
            const P = {
                placement: M,
            };
            h !== null && (P.TransitionProps = h);
            const U = oa(t),
                E = p.root ?? 'div',
                W = Xs({
                    elementType: E,
                    externalSlotProps: f.root,
                    externalForwardedProps: x,
                    additionalProps: {
                        role: 'tooltip',
                        ref: _,
                    },
                    ownerState: t,
                    className: U.root,
                });
            return a.jsx(E, {
                ...W,
                children: typeof r == 'function' ? r(P) : r,
            });
        }),
        ia = y.forwardRef(function (t, n) {
            const {
                    anchorEl: o,
                    children: r,
                    container: s,
                    direction: i = 'ltr',
                    disablePortal: l = false,
                    keepMounted: c = false,
                    modifiers: d,
                    open: u,
                    placement: g = 'bottom',
                    popperOptions: f = ra,
                    popperRef: p,
                    style: h,
                    transition: m = false,
                    slotProps: x = {},
                    slots: v = {},
                    ..._
                } = t,
                [C, j] = y.useState(true),
                R = () => {
                    j(false);
                },
                w = () => {
                    j(true);
                };
            if (!c && !u && (!m || C)) return null;
            let M;
            if (s) M = s;
            else if (o) {
                const A = zo(o);
                M = A && na(A) ? gn(A).body : gn(null).body;
            }
            const T = !u && c && (!m || C) ? 'none' : void 0,
                D = m
                    ? {
                          in: u,
                          onEnter: R,
                          onExited: w,
                      }
                    : void 0;
            return a.jsx(Ks, {
                disablePortal: l,
                container: M,
                children: a.jsx(sa, {
                    anchorEl: o,
                    direction: i,
                    disablePortal: l,
                    modifiers: d,
                    ref: n,
                    open: m ? !C : u,
                    placement: g,
                    popperOptions: f,
                    popperRef: p,
                    slotProps: x,
                    slots: v,
                    ..._,
                    style: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        display: T,
                        ...h,
                    },
                    TransitionProps: D,
                    children: r,
                }),
            });
        }),
        la = J(ia, {
            name: 'MuiPopper',
            slot: 'Root',
            overridesResolver: (e, t) => t.root,
        })({}),
        _s = y.forwardRef(function (t, n) {
            const o = Go(),
                r = ye({
                    props: t,
                    name: 'MuiPopper',
                }),
                {
                    anchorEl: s,
                    component: i,
                    components: l,
                    componentsProps: c,
                    container: d,
                    disablePortal: u,
                    keepMounted: g,
                    modifiers: f,
                    open: p,
                    placement: h,
                    popperOptions: m,
                    popperRef: x,
                    transition: v,
                    slots: _,
                    slotProps: C,
                    ...j
                } = r,
                R = (_ == null ? void 0 : _.root) ?? (l == null ? void 0 : l.Root),
                w = {
                    anchorEl: s,
                    container: d,
                    disablePortal: u,
                    keepMounted: g,
                    modifiers: f,
                    open: p,
                    placement: h,
                    popperOptions: m,
                    popperRef: x,
                    transition: v,
                    ...j,
                };
            return a.jsx(la, {
                as: i,
                direction: o ? 'rtl' : 'ltr',
                slots: {
                    root: R,
                },
                slotProps: C ?? c,
                ...w,
                ref: n,
            });
        }),
        aa = le(
            a.jsx('path', {
                d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
            }),
            'Cancel',
        );
    function ca(e) {
        return be('MuiChip', e);
    }
    const ee = xe('MuiChip', [
            'root',
            'sizeSmall',
            'sizeMedium',
            'colorDefault',
            'colorError',
            'colorInfo',
            'colorPrimary',
            'colorSecondary',
            'colorSuccess',
            'colorWarning',
            'disabled',
            'clickable',
            'clickableColorPrimary',
            'clickableColorSecondary',
            'deletable',
            'deletableColorPrimary',
            'deletableColorSecondary',
            'outlined',
            'filled',
            'outlinedPrimary',
            'outlinedSecondary',
            'filledPrimary',
            'filledSecondary',
            'avatar',
            'avatarSmall',
            'avatarMedium',
            'avatarColorPrimary',
            'avatarColorSecondary',
            'icon',
            'iconSmall',
            'iconMedium',
            'iconColorPrimary',
            'iconColorSecondary',
            'label',
            'labelSmall',
            'labelMedium',
            'deleteIcon',
            'deleteIconSmall',
            'deleteIconMedium',
            'deleteIconColorPrimary',
            'deleteIconColorSecondary',
            'deleteIconOutlinedColorPrimary',
            'deleteIconOutlinedColorSecondary',
            'deleteIconFilledColorPrimary',
            'deleteIconFilledColorSecondary',
            'focusVisible',
        ]),
        ua = e => {
            const {
                    classes: t,
                    disabled: n,
                    size: o,
                    color: r,
                    iconColor: s,
                    onDelete: i,
                    clickable: l,
                    variant: c,
                } = e,
                d = {
                    root: [
                        'root',
                        c,
                        n && 'disabled',
                        `size${G(o)}`,
                        `color${G(r)}`,
                        l && 'clickable',
                        l && `clickableColor${G(r)}`,
                        i && 'deletable',
                        i && `deletableColor${G(r)}`,
                        `${c}${G(r)}`,
                    ],
                    label: ['label', `label${G(o)}`],
                    avatar: ['avatar', `avatar${G(o)}`, `avatarColor${G(r)}`],
                    icon: ['icon', `icon${G(o)}`, `iconColor${G(s)}`],
                    deleteIcon: [
                        'deleteIcon',
                        `deleteIcon${G(o)}`,
                        `deleteIconColor${G(r)}`,
                        `deleteIcon${G(c)}Color${G(r)}`,
                    ],
                };
            return ve(d, ca, t);
        },
        da = J('div', {
            name: 'MuiChip',
            slot: 'Root',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e,
                    { color: o, iconColor: r, clickable: s, onDelete: i, size: l, variant: c } = n;
                return [
                    {
                        [`& .${ee.avatar}`]: t.avatar,
                    },
                    {
                        [`& .${ee.avatar}`]: t[`avatar${G(l)}`],
                    },
                    {
                        [`& .${ee.avatar}`]: t[`avatarColor${G(o)}`],
                    },
                    {
                        [`& .${ee.icon}`]: t.icon,
                    },
                    {
                        [`& .${ee.icon}`]: t[`icon${G(l)}`],
                    },
                    {
                        [`& .${ee.icon}`]: t[`iconColor${G(r)}`],
                    },
                    {
                        [`& .${ee.deleteIcon}`]: t.deleteIcon,
                    },
                    {
                        [`& .${ee.deleteIcon}`]: t[`deleteIcon${G(l)}`],
                    },
                    {
                        [`& .${ee.deleteIcon}`]: t[`deleteIconColor${G(o)}`],
                    },
                    {
                        [`& .${ee.deleteIcon}`]: t[`deleteIcon${G(c)}Color${G(o)}`],
                    },
                    t.root,
                    t[`size${G(l)}`],
                    t[`color${G(o)}`],
                    s && t.clickable,
                    s && o !== 'default' && t[`clickableColor${G(o)})`],
                    i && t.deletable,
                    i && o !== 'default' && t[`deletableColor${G(o)}`],
                    t[c],
                    t[`${c}${G(o)}`],
                ];
            },
        })(
            pe(({ theme: e }) => {
                const t = e.palette.mode === 'light' ? e.palette.grey[700] : e.palette.grey[300];
                return {
                    maxWidth: '100%',
                    fontFamily: e.typography.fontFamily,
                    fontSize: e.typography.pxToRem(13),
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 32,
                    color: (e.vars || e).palette.text.primary,
                    backgroundColor: (e.vars || e).palette.action.selected,
                    borderRadius: 32 / 2,
                    whiteSpace: 'nowrap',
                    transition: e.transitions.create(['background-color', 'box-shadow']),
                    cursor: 'unset',
                    outline: 0,
                    textDecoration: 'none',
                    border: 0,
                    padding: 0,
                    verticalAlign: 'middle',
                    boxSizing: 'border-box',
                    [`&.${ee.disabled}`]: {
                        opacity: (e.vars || e).palette.action.disabledOpacity,
                        pointerEvents: 'none',
                    },
                    [`& .${ee.avatar}`]: {
                        marginLeft: 5,
                        marginRight: -6,
                        width: 24,
                        height: 24,
                        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
                        fontSize: e.typography.pxToRem(12),
                    },
                    [`& .${ee.avatarColorPrimary}`]: {
                        color: (e.vars || e).palette.primary.contrastText,
                        backgroundColor: (e.vars || e).palette.primary.dark,
                    },
                    [`& .${ee.avatarColorSecondary}`]: {
                        color: (e.vars || e).palette.secondary.contrastText,
                        backgroundColor: (e.vars || e).palette.secondary.dark,
                    },
                    [`& .${ee.avatarSmall}`]: {
                        marginLeft: 4,
                        marginRight: -4,
                        width: 18,
                        height: 18,
                        fontSize: e.typography.pxToRem(10),
                    },
                    [`& .${ee.icon}`]: {
                        marginLeft: 5,
                        marginRight: -6,
                    },
                    [`& .${ee.deleteIcon}`]: {
                        WebkitTapHighlightColor: 'transparent',
                        color: e.vars
                            ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
                            : Fe(e.palette.text.primary, 0.26),
                        fontSize: 22,
                        cursor: 'pointer',
                        margin: '0 5px 0 -6px',
                        '&:hover': {
                            color: e.vars
                                ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                                : Fe(e.palette.text.primary, 0.4),
                        },
                    },
                    variants: [
                        {
                            props: {
                                size: 'small',
                            },
                            style: {
                                height: 24,
                                [`& .${ee.icon}`]: {
                                    fontSize: 18,
                                    marginLeft: 4,
                                    marginRight: -4,
                                },
                                [`& .${ee.deleteIcon}`]: {
                                    fontSize: 16,
                                    marginRight: 4,
                                    marginLeft: -4,
                                },
                            },
                        },
                        ...Object.entries(e.palette)
                            .filter(Dt(['contrastText']))
                            .map(([n]) => ({
                                props: {
                                    color: n,
                                },
                                style: {
                                    backgroundColor: (e.vars || e).palette[n].main,
                                    color: (e.vars || e).palette[n].contrastText,
                                    [`& .${ee.deleteIcon}`]: {
                                        color: e.vars
                                            ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)`
                                            : Fe(e.palette[n].contrastText, 0.7),
                                        '&:hover, &:active': {
                                            color: (e.vars || e).palette[n].contrastText,
                                        },
                                    },
                                },
                            })),
                        {
                            props: n => n.iconColor === n.color,
                            style: {
                                [`& .${ee.icon}`]: {
                                    color: e.vars ? e.vars.palette.Chip.defaultIconColor : t,
                                },
                            },
                        },
                        {
                            props: n => n.iconColor === n.color && n.color !== 'default',
                            style: {
                                [`& .${ee.icon}`]: {
                                    color: 'inherit',
                                },
                            },
                        },
                        {
                            props: {
                                onDelete: true,
                            },
                            style: {
                                [`&.${ee.focusVisible}`]: {
                                    backgroundColor: e.vars
                                        ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                                        : Fe(
                                              e.palette.action.selected,
                                              e.palette.action.selectedOpacity + e.palette.action.focusOpacity,
                                          ),
                                },
                            },
                        },
                        ...Object.entries(e.palette)
                            .filter(Dt(['dark']))
                            .map(([n]) => ({
                                props: {
                                    color: n,
                                    onDelete: true,
                                },
                                style: {
                                    [`&.${ee.focusVisible}`]: {
                                        background: (e.vars || e).palette[n].dark,
                                    },
                                },
                            })),
                        {
                            props: {
                                clickable: true,
                            },
                            style: {
                                userSelect: 'none',
                                WebkitTapHighlightColor: 'transparent',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: e.vars
                                        ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                                        : Fe(
                                              e.palette.action.selected,
                                              e.palette.action.selectedOpacity + e.palette.action.hoverOpacity,
                                          ),
                                },
                                [`&.${ee.focusVisible}`]: {
                                    backgroundColor: e.vars
                                        ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                                        : Fe(
                                              e.palette.action.selected,
                                              e.palette.action.selectedOpacity + e.palette.action.focusOpacity,
                                          ),
                                },
                                '&:active': {
                                    boxShadow: (e.vars || e).shadows[1],
                                },
                            },
                        },
                        ...Object.entries(e.palette)
                            .filter(Dt(['dark']))
                            .map(([n]) => ({
                                props: {
                                    color: n,
                                    clickable: true,
                                },
                                style: {
                                    [`&:hover, &.${ee.focusVisible}`]: {
                                        backgroundColor: (e.vars || e).palette[n].dark,
                                    },
                                },
                            })),
                        {
                            props: {
                                variant: 'outlined',
                            },
                            style: {
                                backgroundColor: 'transparent',
                                border: e.vars
                                    ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
                                    : `1px solid ${e.palette.mode === 'light' ? e.palette.grey[400] : e.palette.grey[700]}`,
                                [`&.${ee.clickable}:hover`]: {
                                    backgroundColor: (e.vars || e).palette.action.hover,
                                },
                                [`&.${ee.focusVisible}`]: {
                                    backgroundColor: (e.vars || e).palette.action.focus,
                                },
                                [`& .${ee.avatar}`]: {
                                    marginLeft: 4,
                                },
                                [`& .${ee.avatarSmall}`]: {
                                    marginLeft: 2,
                                },
                                [`& .${ee.icon}`]: {
                                    marginLeft: 4,
                                },
                                [`& .${ee.iconSmall}`]: {
                                    marginLeft: 2,
                                },
                                [`& .${ee.deleteIcon}`]: {
                                    marginRight: 5,
                                },
                                [`& .${ee.deleteIconSmall}`]: {
                                    marginRight: 3,
                                },
                            },
                        },
                        ...Object.entries(e.palette)
                            .filter(Dt())
                            .map(([n]) => ({
                                props: {
                                    variant: 'outlined',
                                    color: n,
                                },
                                style: {
                                    color: (e.vars || e).palette[n].main,
                                    border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Fe(e.palette[n].main, 0.7)}`,
                                    [`&.${ee.clickable}:hover`]: {
                                        backgroundColor: e.vars
                                            ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                                            : Fe(e.palette[n].main, e.palette.action.hoverOpacity),
                                    },
                                    [`&.${ee.focusVisible}`]: {
                                        backgroundColor: e.vars
                                            ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})`
                                            : Fe(e.palette[n].main, e.palette.action.focusOpacity),
                                    },
                                    [`& .${ee.deleteIcon}`]: {
                                        color: e.vars
                                            ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)`
                                            : Fe(e.palette[n].main, 0.7),
                                        '&:hover, &:active': {
                                            color: (e.vars || e).palette[n].main,
                                        },
                                    },
                                },
                            })),
                    ],
                };
            }),
        ),
        pa = J('span', {
            name: 'MuiChip',
            slot: 'Label',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e,
                    { size: o } = n;
                return [t.label, t[`label${G(o)}`]];
            },
        })({
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingLeft: 12,
            paddingRight: 12,
            whiteSpace: 'nowrap',
            variants: [
                {
                    props: {
                        variant: 'outlined',
                    },
                    style: {
                        paddingLeft: 11,
                        paddingRight: 11,
                    },
                },
                {
                    props: {
                        size: 'small',
                    },
                    style: {
                        paddingLeft: 8,
                        paddingRight: 8,
                    },
                },
                {
                    props: {
                        size: 'small',
                        variant: 'outlined',
                    },
                    style: {
                        paddingLeft: 7,
                        paddingRight: 7,
                    },
                },
            ],
        });
    function jr(e) {
        return e.key === 'Backspace' || e.key === 'Delete';
    }
    const jt = y.forwardRef(function (t, n) {
        const o = ye({
                props: t,
                name: 'MuiChip',
            }),
            {
                avatar: r,
                className: s,
                clickable: i,
                color: l = 'default',
                component: c,
                deleteIcon: d,
                disabled: u = false,
                icon: g,
                label: f,
                onClick: p,
                onDelete: h,
                onKeyDown: m,
                onKeyUp: x,
                size: v = 'medium',
                variant: _ = 'filled',
                tabIndex: C,
                skipFocusWhenDisabled: j = false,
                ...R
            } = o,
            w = y.useRef(null),
            M = Kt(w, n),
            T = I => {
                (I.stopPropagation(), h && h(I));
            },
            D = I => {
                (I.currentTarget === I.target && jr(I) && I.preventDefault(), m && m(I));
            },
            A = I => {
                (I.currentTarget === I.target && h && jr(I) && h(I), x && x(I));
            },
            P = i !== false && p ? true : i,
            U = P || h ? Zn : c || 'div',
            E = {
                ...o,
                component: U,
                disabled: u,
                size: v,
                color: l,
                iconColor: (y.isValidElement(g) && g.props.color) || l,
                onDelete: !!h,
                clickable: P,
                variant: _,
            },
            W = ua(E),
            Y =
                U === Zn
                    ? {
                          component: c || 'div',
                          focusVisibleClassName: W.focusVisible,
                          ...(h && {
                              disableRipple: true,
                          }),
                      }
                    : {};
        let q = null;
        h &&
            (q =
                d && y.isValidElement(d)
                    ? y.cloneElement(d, {
                          className: se(d.props.className, W.deleteIcon),
                          onClick: T,
                      })
                    : a.jsx(aa, {
                          className: se(W.deleteIcon),
                          onClick: T,
                      }));
        let k = null;
        r &&
            y.isValidElement(r) &&
            (k = y.cloneElement(r, {
                className: se(W.avatar, r.props.className),
            }));
        let S = null;
        return (
            g &&
                y.isValidElement(g) &&
                (S = y.cloneElement(g, {
                    className: se(W.icon, g.props.className),
                })),
            a.jsxs(da, {
                as: U,
                className: se(W.root, s),
                disabled: P && u ? true : void 0,
                onClick: p,
                onKeyDown: D,
                onKeyUp: A,
                ref: M,
                tabIndex: j && u ? -1 : C,
                ownerState: E,
                ...Y,
                ...R,
                children: [
                    k || S,
                    a.jsx(pa, {
                        className: se(W.label),
                        ownerState: E,
                        children: f,
                    }),
                    q,
                ],
            })
        );
    });
    function fa(e) {
        return be('MuiCard', e);
    }
    xe('MuiCard', ['root']);
    const ga = e => {
            const { classes: t } = e;
            return ve(
                {
                    root: ['root'],
                },
                fa,
                t,
            );
        },
        ha = J(et, {
            name: 'MuiCard',
            slot: 'Root',
            overridesResolver: (e, t) => t.root,
        })({
            overflow: 'hidden',
        }),
        ma = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiCard',
                }),
                { className: r, raised: s = false, ...i } = o,
                l = {
                    ...o,
                    raised: s,
                },
                c = ga(l);
            return a.jsx(ha, {
                className: se(c.root, r),
                elevation: s ? 8 : void 0,
                ref: n,
                ownerState: l,
                ...i,
            });
        });
    function Rr(e) {
        return e.substring(2).toLowerCase();
    }
    function ya(e, t) {
        return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
    }
    function va(e) {
        const {
                children: t,
                disableReactTree: n = false,
                mouseEvent: o = 'onClick',
                onClickAway: r,
                touchEvent: s = 'onTouchEnd',
            } = e,
            i = y.useRef(false),
            l = y.useRef(null),
            c = y.useRef(false),
            d = y.useRef(false);
        y.useEffect(
            () => (
                setTimeout(() => {
                    c.current = true;
                }, 0),
                () => {
                    c.current = false;
                }
            ),
            [],
        );
        const u = Kt(as(t), l),
            g = _n(h => {
                const m = d.current;
                d.current = false;
                const x = gn(l.current);
                if (!c.current || !l.current || ('clientX' in h && ya(h, x))) return;
                if (i.current) {
                    i.current = false;
                    return;
                }
                let v;
                (h.composedPath
                    ? (v = h.composedPath().includes(l.current))
                    : (v = !x.documentElement.contains(h.target) || l.current.contains(h.target)),
                    !v && (n || !m) && r(h));
            }),
            f = h => m => {
                d.current = true;
                const x = t.props[h];
                x && x(m);
            },
            p = {
                ref: u,
            };
        return (
            s !== false && (p[s] = f(s)),
            y.useEffect(() => {
                if (s !== false) {
                    const h = Rr(s),
                        m = gn(l.current),
                        x = () => {
                            i.current = true;
                        };
                    return (
                        m.addEventListener(h, g),
                        m.addEventListener('touchmove', x),
                        () => {
                            (m.removeEventListener(h, g), m.removeEventListener('touchmove', x));
                        }
                    );
                }
            }, [g, s]),
            o !== false && (p[o] = f(o)),
            y.useEffect(() => {
                if (o !== false) {
                    const h = Rr(o),
                        m = gn(l.current);
                    return (
                        m.addEventListener(h, g),
                        () => {
                            m.removeEventListener(h, g);
                        }
                    );
                }
            }, [g, o]),
            y.cloneElement(t, p)
        );
    }
    function ba(e) {
        return be('MuiDialogActions', e);
    }
    xe('MuiDialogActions', ['root', 'spacing']);
    const xa = e => {
            const { classes: t, disableSpacing: n } = e;
            return ve(
                {
                    root: ['root', !n && 'spacing'],
                },
                ba,
                t,
            );
        },
        _a = J('div', {
            name: 'MuiDialogActions',
            slot: 'Root',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [t.root, !n.disableSpacing && t.spacing];
            },
        })({
            display: 'flex',
            alignItems: 'center',
            padding: 8,
            justifyContent: 'flex-end',
            flex: '0 0 auto',
            variants: [
                {
                    props: ({ ownerState: e }) => !e.disableSpacing,
                    style: {
                        '& > :not(style) ~ :not(style)': {
                            marginLeft: 8,
                        },
                    },
                },
            ],
        }),
        nr = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiDialogActions',
                }),
                { className: r, disableSpacing: s = false, ...i } = o,
                l = {
                    ...o,
                    disableSpacing: s,
                },
                c = xa(l);
            return a.jsx(_a, {
                className: se(c.root, r),
                ownerState: l,
                ref: n,
                ...i,
            });
        });
    function wa(e) {
        return be('MuiDialogContentText', e);
    }
    xe('MuiDialogContentText', ['root']);
    const Ca = e => {
            const { classes: t } = e,
                o = ve(
                    {
                        root: ['root'],
                    },
                    wa,
                    t,
                );
            return {
                ...t,
                ...o,
            };
        },
        Sa = J(F, {
            shouldForwardProp: e => Qs(e) || e === 'classes',
            name: 'MuiDialogContentText',
            slot: 'Root',
            overridesResolver: (e, t) => t.root,
        })({}),
        ja = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiDialogContentText',
                }),
                { children: r, className: s, ...i } = o,
                l = Ca(i);
            return a.jsx(Sa, {
                component: 'p',
                variant: 'body1',
                color: 'textSecondary',
                ref: n,
                ownerState: i,
                className: se(l.root, s),
                ...o,
                classes: l,
            });
        });
    function Ra(e) {
        return be('MuiInputAdornment', e);
    }
    const Mr = xe('MuiInputAdornment', [
        'root',
        'filled',
        'standard',
        'outlined',
        'positionStart',
        'positionEnd',
        'disablePointerEvents',
        'hiddenLabel',
        'sizeSmall',
    ]);
    var $r;
    const Ma = (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                t[`position${G(n.position)}`],
                n.disablePointerEvents === true && t.disablePointerEvents,
                t[n.variant],
            ];
        },
        $a = e => {
            const { classes: t, disablePointerEvents: n, hiddenLabel: o, position: r, size: s, variant: i } = e,
                l = {
                    root: [
                        'root',
                        n && 'disablePointerEvents',
                        r && `position${G(r)}`,
                        i,
                        o && 'hiddenLabel',
                        s && `size${G(s)}`,
                    ],
                };
            return ve(l, Ra, t);
        },
        Aa = J('div', {
            name: 'MuiInputAdornment',
            slot: 'Root',
            overridesResolver: Ma,
        })(
            pe(({ theme: e }) => ({
                display: 'flex',
                maxHeight: '2em',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                color: (e.vars || e).palette.action.active,
                variants: [
                    {
                        props: {
                            variant: 'filled',
                        },
                        style: {
                            [`&.${Mr.positionStart}&:not(.${Mr.hiddenLabel})`]: {
                                marginTop: 16,
                            },
                        },
                    },
                    {
                        props: {
                            position: 'start',
                        },
                        style: {
                            marginRight: 8,
                        },
                    },
                    {
                        props: {
                            position: 'end',
                        },
                        style: {
                            marginLeft: 8,
                        },
                    },
                    {
                        props: {
                            disablePointerEvents: true,
                        },
                        style: {
                            pointerEvents: 'none',
                        },
                    },
                ],
            })),
        ),
        ws = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiInputAdornment',
                }),
                {
                    children: r,
                    className: s,
                    component: i = 'div',
                    disablePointerEvents: l = false,
                    disableTypography: c = false,
                    position: d,
                    variant: u,
                    ...g
                } = o,
                f = Zs() || {};
            let p = u;
            (u && f.variant, f && !p && (p = f.variant));
            const h = {
                    ...o,
                    hiddenLabel: f.hiddenLabel,
                    size: f.size,
                    disablePointerEvents: l,
                    position: d,
                    variant: p,
                },
                m = $a(h);
            return a.jsx(ei.Provider, {
                value: null,
                children: a.jsx(Aa, {
                    as: i,
                    ownerState: h,
                    className: se(m.root, s),
                    ref: n,
                    ...g,
                    children:
                        typeof r == 'string' && !c
                            ? a.jsx(F, {
                                  color: 'textSecondary',
                                  children: r,
                              })
                            : a.jsxs(y.Fragment, {
                                  children: [
                                      d === 'start'
                                          ? $r ||
                                            ($r = a.jsx('span', {
                                                className: 'notranslate',
                                                'aria-hidden': true,
                                                children: '\u200B',
                                            }))
                                          : null,
                                      r,
                                  ],
                              }),
                }),
            });
        }),
        Ia = e => {
            const { alignItems: t, classes: n } = e;
            return ve(
                {
                    root: ['root', t === 'flex-start' && 'alignItemsFlexStart'],
                },
                vi,
                n,
            );
        },
        Pa = J('div', {
            name: 'MuiListItemIcon',
            slot: 'Root',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [t.root, n.alignItems === 'flex-start' && t.alignItemsFlexStart];
            },
        })(
            pe(({ theme: e }) => ({
                minWidth: 56,
                color: (e.vars || e).palette.action.active,
                flexShrink: 0,
                display: 'inline-flex',
                variants: [
                    {
                        props: {
                            alignItems: 'flex-start',
                        },
                        style: {
                            marginTop: 8,
                        },
                    },
                ],
            })),
        ),
        on = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiListItemIcon',
                }),
                { className: r, ...s } = o,
                i = y.useContext(ti),
                l = {
                    ...o,
                    alignItems: i.alignItems,
                },
                c = Ia(l);
            return a.jsx(Pa, {
                className: se(c.root, r),
                ownerState: l,
                ref: n,
                ...s,
            });
        }),
        Fa = le(
            a.jsx('path', {
                d: 'M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z',
            }),
            'FirstPage',
        ),
        za = le(
            a.jsx('path', {
                d: 'M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z',
            }),
            'LastPage',
        );
    function Ta(e = {}) {
        const {
                autoHideDuration: t = null,
                disableWindowBlurListener: n = false,
                onClose: o,
                open: r,
                resumeHideDuration: s,
            } = e,
            i = qt();
        y.useEffect(() => {
            if (!r) return;
            function v(_) {
                _.defaultPrevented || (_.key === 'Escape' && (o == null ? void 0 : o(_, 'escapeKeyDown')));
            }
            return (
                document.addEventListener('keydown', v),
                () => {
                    document.removeEventListener('keydown', v);
                }
            );
        }, [r, o]);
        const l = _n((v, _) => {
                o == null ? void 0 : o(v, _);
            }),
            c = _n(v => {
                !o ||
                    v == null ||
                    i.start(v, () => {
                        l(null, 'timeout');
                    });
            });
        y.useEffect(() => (r && c(t), i.clear), [r, t, c, i]);
        const d = v => {
                o == null ? void 0 : o(v, 'clickaway');
            },
            u = i.clear,
            g = y.useCallback(() => {
                t != null && c(s ?? t * 0.5);
            }, [t, s, c]),
            f = v => _ => {
                const C = v.onBlur;
                (C == null ? void 0 : C(_), g());
            },
            p = v => _ => {
                const C = v.onFocus;
                (C == null ? void 0 : C(_), u());
            },
            h = v => _ => {
                const C = v.onMouseEnter;
                (C == null ? void 0 : C(_), u());
            },
            m = v => _ => {
                const C = v.onMouseLeave;
                (C == null ? void 0 : C(_), g());
            };
        return (
            y.useEffect(() => {
                if (!n && r)
                    return (
                        window.addEventListener('focus', g),
                        window.addEventListener('blur', u),
                        () => {
                            (window.removeEventListener('focus', g), window.removeEventListener('blur', u));
                        }
                    );
            }, [n, r, g, u]),
            {
                getRootProps: (v = {}) => {
                    const _ = {
                        ...dr(e),
                        ...dr(v),
                    };
                    return {
                        role: 'presentation',
                        ...v,
                        ..._,
                        onBlur: f(_),
                        onFocus: p(_),
                        onMouseEnter: h(_),
                        onMouseLeave: m(_),
                    };
                },
                onClickAway: d,
            }
        );
    }
    function Da(e) {
        return be('MuiSnackbarContent', e);
    }
    xe('MuiSnackbarContent', ['root', 'message', 'action']);
    const ka = e => {
            const { classes: t } = e;
            return ve(
                {
                    root: ['root'],
                    action: ['action'],
                    message: ['message'],
                },
                Da,
                t,
            );
        },
        Ea = J(et, {
            name: 'MuiSnackbarContent',
            slot: 'Root',
            overridesResolver: (e, t) => t.root,
        })(
            pe(({ theme: e }) => {
                const t = e.palette.mode === 'light' ? 0.8 : 0.98,
                    n = ni(e.palette.background.default, t);
                return {
                    ...e.typography.body2,
                    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(n),
                    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : n,
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: '6px 16px',
                    borderRadius: (e.vars || e).shape.borderRadius,
                    flexGrow: 1,
                    [e.breakpoints.up('sm')]: {
                        flexGrow: 'initial',
                        minWidth: 288,
                    },
                };
            }),
        ),
        Oa = J('div', {
            name: 'MuiSnackbarContent',
            slot: 'Message',
            overridesResolver: (e, t) => t.message,
        })({
            padding: '8px 0',
        }),
        Na = J('div', {
            name: 'MuiSnackbarContent',
            slot: 'Action',
            overridesResolver: (e, t) => t.action,
        })({
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto',
            paddingLeft: 16,
            marginRight: -8,
        }),
        La = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiSnackbarContent',
                }),
                { action: r, className: s, message: i, role: l = 'alert', ...c } = o,
                d = o,
                u = ka(d);
            return a.jsxs(Ea, {
                role: l,
                square: true,
                elevation: 6,
                className: se(u.root, s),
                ownerState: d,
                ref: n,
                ...c,
                children: [
                    a.jsx(Oa, {
                        className: u.message,
                        ownerState: d,
                        children: i,
                    }),
                    r
                        ? a.jsx(Na, {
                              className: u.action,
                              ownerState: d,
                              children: r,
                          })
                        : null,
                ],
            });
        });
    function Ha(e) {
        return be('MuiSnackbar', e);
    }
    xe('MuiSnackbar', [
        'root',
        'anchorOriginTopCenter',
        'anchorOriginBottomCenter',
        'anchorOriginTopRight',
        'anchorOriginBottomRight',
        'anchorOriginTopLeft',
        'anchorOriginBottomLeft',
    ]);
    const Va = e => {
            const { classes: t, anchorOrigin: n } = e,
                o = {
                    root: ['root', `anchorOrigin${G(n.vertical)}${G(n.horizontal)}`],
                };
            return ve(o, Ha, t);
        },
        Ba = J('div', {
            name: 'MuiSnackbar',
            slot: 'Root',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [t.root, t[`anchorOrigin${G(n.anchorOrigin.vertical)}${G(n.anchorOrigin.horizontal)}`]];
            },
        })(
            pe(({ theme: e }) => ({
                zIndex: (e.vars || e).zIndex.snackbar,
                position: 'fixed',
                display: 'flex',
                left: 8,
                right: 8,
                justifyContent: 'center',
                alignItems: 'center',
                variants: [
                    {
                        props: ({ ownerState: t }) => t.anchorOrigin.vertical === 'top',
                        style: {
                            top: 8,
                            [e.breakpoints.up('sm')]: {
                                top: 24,
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.anchorOrigin.vertical !== 'top',
                        style: {
                            bottom: 8,
                            [e.breakpoints.up('sm')]: {
                                bottom: 24,
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.anchorOrigin.horizontal === 'left',
                        style: {
                            justifyContent: 'flex-start',
                            [e.breakpoints.up('sm')]: {
                                left: 24,
                                right: 'auto',
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.anchorOrigin.horizontal === 'right',
                        style: {
                            justifyContent: 'flex-end',
                            [e.breakpoints.up('sm')]: {
                                right: 24,
                                left: 'auto',
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.anchorOrigin.horizontal === 'center',
                        style: {
                            [e.breakpoints.up('sm')]: {
                                left: '50%',
                                right: 'auto',
                                transform: 'translateX(-50%)',
                            },
                        },
                    },
                ],
            })),
        ),
        Wa = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiSnackbar',
                }),
                r = Rn(),
                s = {
                    enter: r.transitions.duration.enteringScreen,
                    exit: r.transitions.duration.leavingScreen,
                },
                {
                    action: i,
                    anchorOrigin: { vertical: l, horizontal: c } = {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                    autoHideDuration: d = null,
                    children: u,
                    className: g,
                    ClickAwayListenerProps: f,
                    ContentProps: p,
                    disableWindowBlurListener: h = false,
                    message: m,
                    onBlur: x,
                    onClose: v,
                    onFocus: _,
                    onMouseEnter: C,
                    onMouseLeave: j,
                    open: R,
                    resumeHideDuration: w,
                    slots: M = {},
                    slotProps: T = {},
                    TransitionComponent: D,
                    transitionDuration: A = s,
                    TransitionProps: { onEnter: P, onExited: U, ...E } = {},
                    ...W
                } = o,
                Y = {
                    ...o,
                    anchorOrigin: {
                        vertical: l,
                        horizontal: c,
                    },
                    autoHideDuration: d,
                    disableWindowBlurListener: h,
                    TransitionComponent: D,
                    transitionDuration: A,
                },
                q = Va(Y),
                { getRootProps: k, onClickAway: S } = Ta({
                    ...Y,
                }),
                [I, O] = y.useState(true),
                L = Me => {
                    (O(true), U && U(Me));
                },
                Z = (Me, we) => {
                    (O(false), P && P(Me, we));
                },
                Q = {
                    slots: {
                        transition: D,
                        ...M,
                    },
                    slotProps: {
                        content: p,
                        clickAwayListener: f,
                        transition: E,
                        ...T,
                    },
                },
                [ue, fe] = ce('root', {
                    ref: n,
                    className: [q.root, g],
                    elementType: Ba,
                    getSlotProps: k,
                    externalForwardedProps: {
                        ...Q,
                        ...W,
                    },
                    ownerState: Y,
                }),
                [N, { ownerState: ae, ...te }] = ce('clickAwayListener', {
                    elementType: va,
                    externalForwardedProps: Q,
                    getSlotProps: Me => ({
                        onClickAway: (...we) => {
                            var _a2;
                            ((_a2 = Me.onClickAway) == null ? void 0 : _a2.call(Me, ...we), S(...we));
                        },
                    }),
                    ownerState: Y,
                }),
                [X, ze] = ce('content', {
                    elementType: La,
                    shouldForwardComponentProp: true,
                    externalForwardedProps: Q,
                    additionalProps: {
                        message: m,
                        action: i,
                    },
                    ownerState: Y,
                }),
                [Ae, ge] = ce('transition', {
                    elementType: cs,
                    externalForwardedProps: Q,
                    getSlotProps: Me => ({
                        onEnter: (...we) => {
                            var _a2;
                            ((_a2 = Me.onEnter) == null ? void 0 : _a2.call(Me, ...we), Z(...we));
                        },
                        onExited: (...we) => {
                            var _a2;
                            ((_a2 = Me.onExited) == null ? void 0 : _a2.call(Me, ...we), L(...we));
                        },
                    }),
                    additionalProps: {
                        appear: true,
                        in: R,
                        timeout: A,
                        direction: l === 'top' ? 'down' : 'up',
                    },
                    ownerState: Y,
                });
            return !R && I
                ? null
                : a.jsx(N, {
                      ...te,
                      ...(M.clickAwayListener && {
                          ownerState: ae,
                      }),
                      children: a.jsx(ue, {
                          ...fe,
                          children: a.jsx(Ae, {
                              ...ge,
                              children:
                                  u ||
                                  a.jsx(X, {
                                      ...ze,
                                  }),
                          }),
                      }),
                  });
        });
    function Ga(e) {
        return be('MuiTooltip', e);
    }
    const _e = xe('MuiTooltip', [
        'popper',
        'popperInteractive',
        'popperArrow',
        'popperClose',
        'tooltip',
        'tooltipArrow',
        'touch',
        'tooltipPlacementLeft',
        'tooltipPlacementRight',
        'tooltipPlacementTop',
        'tooltipPlacementBottom',
        'arrow',
    ]);
    function Ua(e) {
        return Math.round(e * 1e5) / 1e5;
    }
    const qa = e => {
            const { classes: t, disableInteractive: n, arrow: o, touch: r, placement: s } = e,
                i = {
                    popper: ['popper', !n && 'popperInteractive', o && 'popperArrow'],
                    tooltip: ['tooltip', o && 'tooltipArrow', r && 'touch', `tooltipPlacement${G(s.split('-')[0])}`],
                    arrow: ['arrow'],
                };
            return ve(i, Ga, t);
        },
        Ya = J(_s, {
            name: 'MuiTooltip',
            slot: 'Popper',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [
                    t.popper,
                    !n.disableInteractive && t.popperInteractive,
                    n.arrow && t.popperArrow,
                    !n.open && t.popperClose,
                ];
            },
        })(
            pe(({ theme: e }) => ({
                zIndex: (e.vars || e).zIndex.tooltip,
                pointerEvents: 'none',
                variants: [
                    {
                        props: ({ ownerState: t }) => !t.disableInteractive,
                        style: {
                            pointerEvents: 'auto',
                        },
                    },
                    {
                        props: ({ open: t }) => !t,
                        style: {
                            pointerEvents: 'none',
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.arrow,
                        style: {
                            [`&[data-popper-placement*="bottom"] .${_e.arrow}`]: {
                                top: 0,
                                marginTop: '-0.71em',
                                '&::before': {
                                    transformOrigin: '0 100%',
                                },
                            },
                            [`&[data-popper-placement*="top"] .${_e.arrow}`]: {
                                bottom: 0,
                                marginBottom: '-0.71em',
                                '&::before': {
                                    transformOrigin: '100% 0',
                                },
                            },
                            [`&[data-popper-placement*="right"] .${_e.arrow}`]: {
                                height: '1em',
                                width: '0.71em',
                                '&::before': {
                                    transformOrigin: '100% 100%',
                                },
                            },
                            [`&[data-popper-placement*="left"] .${_e.arrow}`]: {
                                height: '1em',
                                width: '0.71em',
                                '&::before': {
                                    transformOrigin: '0 0',
                                },
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
                        style: {
                            [`&[data-popper-placement*="right"] .${_e.arrow}`]: {
                                left: 0,
                                marginLeft: '-0.71em',
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
                        style: {
                            [`&[data-popper-placement*="right"] .${_e.arrow}`]: {
                                right: 0,
                                marginRight: '-0.71em',
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
                        style: {
                            [`&[data-popper-placement*="left"] .${_e.arrow}`]: {
                                right: 0,
                                marginRight: '-0.71em',
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
                        style: {
                            [`&[data-popper-placement*="left"] .${_e.arrow}`]: {
                                left: 0,
                                marginLeft: '-0.71em',
                            },
                        },
                    },
                ],
            })),
        ),
        Ja = J('div', {
            name: 'MuiTooltip',
            slot: 'Tooltip',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [
                    t.tooltip,
                    n.touch && t.touch,
                    n.arrow && t.tooltipArrow,
                    t[`tooltipPlacement${G(n.placement.split('-')[0])}`],
                ];
            },
        })(
            pe(({ theme: e }) => ({
                backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Fe(e.palette.grey[700], 0.92),
                borderRadius: (e.vars || e).shape.borderRadius,
                color: (e.vars || e).palette.common.white,
                fontFamily: e.typography.fontFamily,
                padding: '4px 8px',
                fontSize: e.typography.pxToRem(11),
                maxWidth: 300,
                margin: 2,
                wordWrap: 'break-word',
                fontWeight: e.typography.fontWeightMedium,
                [`.${_e.popper}[data-popper-placement*="left"] &`]: {
                    transformOrigin: 'right center',
                },
                [`.${_e.popper}[data-popper-placement*="right"] &`]: {
                    transformOrigin: 'left center',
                },
                [`.${_e.popper}[data-popper-placement*="top"] &`]: {
                    transformOrigin: 'center bottom',
                    marginBottom: '14px',
                },
                [`.${_e.popper}[data-popper-placement*="bottom"] &`]: {
                    transformOrigin: 'center top',
                    marginTop: '14px',
                },
                variants: [
                    {
                        props: ({ ownerState: t }) => t.arrow,
                        style: {
                            position: 'relative',
                            margin: 0,
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.touch,
                        style: {
                            padding: '8px 16px',
                            fontSize: e.typography.pxToRem(14),
                            lineHeight: `${Ua(16 / 14)}em`,
                            fontWeight: e.typography.fontWeightRegular,
                        },
                    },
                    {
                        props: ({ ownerState: t }) => !t.isRtl,
                        style: {
                            [`.${_e.popper}[data-popper-placement*="left"] &`]: {
                                marginRight: '14px',
                            },
                            [`.${_e.popper}[data-popper-placement*="right"] &`]: {
                                marginLeft: '14px',
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => !t.isRtl && t.touch,
                        style: {
                            [`.${_e.popper}[data-popper-placement*="left"] &`]: {
                                marginRight: '24px',
                            },
                            [`.${_e.popper}[data-popper-placement*="right"] &`]: {
                                marginLeft: '24px',
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => !!t.isRtl,
                        style: {
                            [`.${_e.popper}[data-popper-placement*="left"] &`]: {
                                marginLeft: '14px',
                            },
                            [`.${_e.popper}[data-popper-placement*="right"] &`]: {
                                marginRight: '14px',
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
                        style: {
                            [`.${_e.popper}[data-popper-placement*="left"] &`]: {
                                marginLeft: '24px',
                            },
                            [`.${_e.popper}[data-popper-placement*="right"] &`]: {
                                marginRight: '24px',
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.touch,
                        style: {
                            [`.${_e.popper}[data-popper-placement*="top"] &`]: {
                                marginBottom: '24px',
                            },
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.touch,
                        style: {
                            [`.${_e.popper}[data-popper-placement*="bottom"] &`]: {
                                marginTop: '24px',
                            },
                        },
                    },
                ],
            })),
        ),
        Ka = J('span', {
            name: 'MuiTooltip',
            slot: 'Arrow',
            overridesResolver: (e, t) => t.arrow,
        })(
            pe(({ theme: e }) => ({
                overflow: 'hidden',
                position: 'absolute',
                width: '1em',
                height: '0.71em',
                boxSizing: 'border-box',
                color: e.vars ? e.vars.palette.Tooltip.bg : Fe(e.palette.grey[700], 0.9),
                '&::before': {
                    content: '""',
                    margin: 'auto',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'currentColor',
                    transform: 'rotate(45deg)',
                },
            })),
        );
    let Hn = false;
    const Ar = new oi();
    let rn = {
        x: 0,
        y: 0,
    };
    function Vn(e, t) {
        return (n, ...o) => {
            (t && t(n, ...o), e(n, ...o));
        };
    }
    const Le = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiTooltip',
                }),
                {
                    arrow: r = false,
                    children: s,
                    classes: i,
                    components: l = {},
                    componentsProps: c = {},
                    describeChild: d = false,
                    disableFocusListener: u = false,
                    disableHoverListener: g = false,
                    disableInteractive: f = false,
                    disableTouchListener: p = false,
                    enterDelay: h = 100,
                    enterNextDelay: m = 0,
                    enterTouchDelay: x = 700,
                    followCursor: v = false,
                    id: _,
                    leaveDelay: C = 0,
                    leaveTouchDelay: j = 1500,
                    onClose: R,
                    onOpen: w,
                    open: M,
                    placement: T = 'bottom',
                    PopperComponent: D,
                    PopperProps: A = {},
                    slotProps: P = {},
                    slots: U = {},
                    title: E,
                    TransitionComponent: W,
                    TransitionProps: Y,
                    ...q
                } = o,
                k = y.isValidElement(s)
                    ? s
                    : a.jsx('span', {
                          children: s,
                      }),
                S = Rn(),
                I = Go(),
                [O, L] = y.useState(),
                [Z, Q] = y.useState(null),
                ue = y.useRef(false),
                fe = f || v,
                N = qt(),
                ae = qt(),
                te = qt(),
                X = qt(),
                [ze, Ae] = ls({
                    controlled: M,
                    default: false,
                    name: 'Tooltip',
                    state: 'open',
                });
            let ge = ze;
            const Me = $o(_),
                we = y.useRef(),
                pt = _n(() => {
                    (we.current !== void 0 &&
                        ((document.body.style.WebkitUserSelect = we.current), (we.current = void 0)),
                        X.clear());
                });
            y.useEffect(() => pt, [pt]);
            const $t = $ => {
                    (Ar.clear(), (Hn = true), Ae(true), w && !ge && w($));
                },
                it = _n($ => {
                    (Ar.start(800 + C, () => {
                        Hn = false;
                    }),
                        Ae(false),
                        R && ge && R($),
                        N.start(S.transitions.duration.shortest, () => {
                            ue.current = false;
                        }));
                }),
                ft = $ => {
                    (ue.current && $.type !== 'touchstart') ||
                        (O && O.removeAttribute('title'),
                        ae.clear(),
                        te.clear(),
                        h || (Hn && m)
                            ? ae.start(Hn ? m : h, () => {
                                  $t($);
                              })
                            : $t($));
                },
                Qe = $ => {
                    (ae.clear(),
                        te.start(C, () => {
                            it($);
                        }));
                },
                [, $e] = y.useState(false),
                ke = $ => {
                    pr($.target) || ($e(false), Qe($));
                },
                At = $ => {
                    (O || L($.currentTarget), pr($.target) && ($e(true), ft($)));
                },
                gt = $ => {
                    ue.current = true;
                    const K = k.props;
                    K.onTouchStart && K.onTouchStart($);
                },
                ht = $ => {
                    (gt($),
                        te.clear(),
                        N.clear(),
                        pt(),
                        (we.current = document.body.style.WebkitUserSelect),
                        (document.body.style.WebkitUserSelect = 'none'),
                        X.start(x, () => {
                            ((document.body.style.WebkitUserSelect = we.current), ft($));
                        }));
                },
                mt = $ => {
                    (k.props.onTouchEnd && k.props.onTouchEnd($),
                        pt(),
                        te.start(j, () => {
                            it($);
                        }));
                };
            y.useEffect(() => {
                if (!ge) return;
                function $(K) {
                    K.key === 'Escape' && it(K);
                }
                return (
                    document.addEventListener('keydown', $),
                    () => {
                        document.removeEventListener('keydown', $);
                    }
                );
            }, [it, ge]);
            const It = Kt(as(k), L, n);
            !E && E !== 0 && (ge = false);
            const yt = y.useRef(),
                Ht = $ => {
                    const K = k.props;
                    (K.onMouseMove && K.onMouseMove($),
                        (rn = {
                            x: $.clientX,
                            y: $.clientY,
                        }),
                        yt.current && yt.current.update());
                },
                Pt = {},
                tn = typeof E == 'string';
            d
                ? ((Pt.title = !ge && tn && !g ? E : null), (Pt['aria-describedby'] = ge ? Me : null))
                : ((Pt['aria-label'] = tn ? E : null), (Pt['aria-labelledby'] = ge && !tn ? Me : null));
            const Ee = {
                    ...Pt,
                    ...q,
                    ...k.props,
                    className: se(q.className, k.props.className),
                    onTouchStart: gt,
                    ref: It,
                    ...(v
                        ? {
                              onMouseMove: Ht,
                          }
                        : {}),
                },
                tt = {};
            (p || ((Ee.onTouchStart = ht), (Ee.onTouchEnd = mt)),
                g ||
                    ((Ee.onMouseOver = Vn(ft, Ee.onMouseOver)),
                    (Ee.onMouseLeave = Vn(Qe, Ee.onMouseLeave)),
                    fe || ((tt.onMouseOver = ft), (tt.onMouseLeave = Qe))),
                u ||
                    ((Ee.onFocus = Vn(At, Ee.onFocus)),
                    (Ee.onBlur = Vn(ke, Ee.onBlur)),
                    fe || ((tt.onFocus = At), (tt.onBlur = ke))));
            const Ue = {
                    ...o,
                    isRtl: I,
                    arrow: r,
                    disableInteractive: fe,
                    placement: T,
                    PopperComponentProp: D,
                    touch: ue.current,
                },
                vt = typeof P.popper == 'function' ? P.popper(Ue) : P.popper,
                Pn = y.useMemo(() => {
                    var _a2, _b;
                    let $ = [
                        {
                            name: 'arrow',
                            enabled: !!Z,
                            options: {
                                element: Z,
                                padding: 4,
                            },
                        },
                    ];
                    return (
                        ((_a2 = A.popperOptions) == null ? void 0 : _a2.modifiers) &&
                            ($ = $.concat(A.popperOptions.modifiers)),
                        ((_b = vt == null ? void 0 : vt.popperOptions) == null ? void 0 : _b.modifiers) &&
                            ($ = $.concat(vt.popperOptions.modifiers)),
                        {
                            ...A.popperOptions,
                            ...(vt == null ? void 0 : vt.popperOptions),
                            modifiers: $,
                        }
                    );
                }, [Z, A.popperOptions, vt == null ? void 0 : vt.popperOptions]),
                Vt = qa(Ue),
                Bt = typeof P.transition == 'function' ? P.transition(Ue) : P.transition,
                Ft = {
                    slots: {
                        popper: l.Popper,
                        transition: l.Transition ?? W,
                        tooltip: l.Tooltip,
                        arrow: l.Arrow,
                        ...U,
                    },
                    slotProps: {
                        arrow: P.arrow ?? c.arrow,
                        popper: {
                            ...A,
                            ...(vt ?? c.popper),
                        },
                        tooltip: P.tooltip ?? c.tooltip,
                        transition: {
                            ...Y,
                            ...(Bt ?? c.transition),
                        },
                    },
                },
                [po, lr] = ce('popper', {
                    elementType: Ya,
                    externalForwardedProps: Ft,
                    ownerState: Ue,
                    className: se(Vt.popper, A == null ? void 0 : A.className),
                }),
                [zt, fo] = ce('transition', {
                    elementType: cs,
                    externalForwardedProps: Ft,
                    ownerState: Ue,
                }),
                [Fn, zn] = ce('tooltip', {
                    elementType: Ja,
                    className: Vt.tooltip,
                    externalForwardedProps: Ft,
                    ownerState: Ue,
                }),
                [Tn, z] = ce('arrow', {
                    elementType: Ka,
                    className: Vt.arrow,
                    externalForwardedProps: Ft,
                    ownerState: Ue,
                    ref: Q,
                });
            return a.jsxs(y.Fragment, {
                children: [
                    y.cloneElement(k, Ee),
                    a.jsx(po, {
                        as: D ?? _s,
                        placement: T,
                        anchorEl: v
                            ? {
                                  getBoundingClientRect: () => ({
                                      top: rn.y,
                                      left: rn.x,
                                      right: rn.x,
                                      bottom: rn.y,
                                      width: 0,
                                      height: 0,
                                  }),
                              }
                            : O,
                        popperRef: yt,
                        open: O ? ge : false,
                        id: Me,
                        transition: true,
                        ...tt,
                        ...lr,
                        popperOptions: Pn,
                        children: ({ TransitionProps: $ }) =>
                            a.jsx(zt, {
                                timeout: S.transitions.duration.shorter,
                                ...$,
                                ...fo,
                                children: a.jsxs(Fn, {
                                    ...zn,
                                    children: [
                                        E,
                                        r
                                            ? a.jsx(Tn, {
                                                  ...z,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                    }),
                ],
            });
        }),
        Cs = y.createContext();
    function Xa(e) {
        return be('MuiTable', e);
    }
    xe('MuiTable', ['root', 'stickyHeader']);
    const Qa = e => {
            const { classes: t, stickyHeader: n } = e;
            return ve(
                {
                    root: ['root', n && 'stickyHeader'],
                },
                Xa,
                t,
            );
        },
        Za = J('table', {
            name: 'MuiTable',
            slot: 'Root',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [t.root, n.stickyHeader && t.stickyHeader];
            },
        })(
            pe(({ theme: e }) => ({
                display: 'table',
                width: '100%',
                borderCollapse: 'collapse',
                borderSpacing: 0,
                '& caption': {
                    ...e.typography.body2,
                    padding: e.spacing(2),
                    color: (e.vars || e).palette.text.secondary,
                    textAlign: 'left',
                    captionSide: 'bottom',
                },
                variants: [
                    {
                        props: ({ ownerState: t }) => t.stickyHeader,
                        style: {
                            borderCollapse: 'separate',
                        },
                    },
                ],
            })),
        ),
        Ir = 'table',
        ec = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiTable',
                }),
                {
                    className: r,
                    component: s = Ir,
                    padding: i = 'normal',
                    size: l = 'medium',
                    stickyHeader: c = false,
                    ...d
                } = o,
                u = {
                    ...o,
                    component: s,
                    padding: i,
                    size: l,
                    stickyHeader: c,
                },
                g = Qa(u),
                f = y.useMemo(
                    () => ({
                        padding: i,
                        size: l,
                        stickyHeader: c,
                    }),
                    [i, l, c],
                );
            return a.jsx(Cs.Provider, {
                value: f,
                children: a.jsx(Za, {
                    as: s,
                    role: s === Ir ? null : 'table',
                    ref: n,
                    className: se(g.root, r),
                    ownerState: u,
                    ...d,
                }),
            });
        }),
        ao = y.createContext();
    function tc(e) {
        return be('MuiTableBody', e);
    }
    xe('MuiTableBody', ['root']);
    const nc = e => {
            const { classes: t } = e;
            return ve(
                {
                    root: ['root'],
                },
                tc,
                t,
            );
        },
        oc = J('tbody', {
            name: 'MuiTableBody',
            slot: 'Root',
            overridesResolver: (e, t) => t.root,
        })({
            display: 'table-row-group',
        }),
        rc = {
            variant: 'body',
        },
        Pr = 'tbody',
        sc = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiTableBody',
                }),
                { className: r, component: s = Pr, ...i } = o,
                l = {
                    ...o,
                    component: s,
                },
                c = nc(l);
            return a.jsx(ao.Provider, {
                value: rc,
                children: a.jsx(oc, {
                    className: se(c.root, r),
                    as: s,
                    ref: n,
                    role: s === Pr ? null : 'rowgroup',
                    ownerState: l,
                    ...i,
                }),
            });
        });
    function ic(e) {
        return be('MuiTableCell', e);
    }
    const lc = xe('MuiTableCell', [
            'root',
            'head',
            'body',
            'footer',
            'sizeSmall',
            'sizeMedium',
            'paddingCheckbox',
            'paddingNone',
            'alignLeft',
            'alignCenter',
            'alignRight',
            'alignJustify',
            'stickyHeader',
        ]),
        ac = e => {
            const { classes: t, variant: n, align: o, padding: r, size: s, stickyHeader: i } = e,
                l = {
                    root: [
                        'root',
                        n,
                        i && 'stickyHeader',
                        o !== 'inherit' && `align${G(o)}`,
                        r !== 'normal' && `padding${G(r)}`,
                        `size${G(s)}`,
                    ],
                };
            return ve(l, ic, t);
        },
        cc = J('td', {
            name: 'MuiTableCell',
            slot: 'Root',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [
                    t.root,
                    t[n.variant],
                    t[`size${G(n.size)}`],
                    n.padding !== 'normal' && t[`padding${G(n.padding)}`],
                    n.align !== 'inherit' && t[`align${G(n.align)}`],
                    n.stickyHeader && t.stickyHeader,
                ];
            },
        })(
            pe(({ theme: e }) => ({
                ...e.typography.body2,
                display: 'table-cell',
                verticalAlign: 'inherit',
                borderBottom: e.vars
                    ? `1px solid ${e.vars.palette.TableCell.border}`
                    : `1px solid
    ${e.palette.mode === 'light' ? Mo(Fe(e.palette.divider, 1), 0.88) : Ro(Fe(e.palette.divider, 1), 0.68)}`,
                textAlign: 'left',
                padding: 16,
                variants: [
                    {
                        props: {
                            variant: 'head',
                        },
                        style: {
                            color: (e.vars || e).palette.text.primary,
                            lineHeight: e.typography.pxToRem(24),
                            fontWeight: e.typography.fontWeightMedium,
                        },
                    },
                    {
                        props: {
                            variant: 'body',
                        },
                        style: {
                            color: (e.vars || e).palette.text.primary,
                        },
                    },
                    {
                        props: {
                            variant: 'footer',
                        },
                        style: {
                            color: (e.vars || e).palette.text.secondary,
                            lineHeight: e.typography.pxToRem(21),
                            fontSize: e.typography.pxToRem(12),
                        },
                    },
                    {
                        props: {
                            size: 'small',
                        },
                        style: {
                            padding: '6px 16px',
                            [`&.${lc.paddingCheckbox}`]: {
                                width: 24,
                                padding: '0 12px 0 16px',
                                '& > *': {
                                    padding: 0,
                                },
                            },
                        },
                    },
                    {
                        props: {
                            padding: 'checkbox',
                        },
                        style: {
                            width: 48,
                            padding: '0 0 0 4px',
                        },
                    },
                    {
                        props: {
                            padding: 'none',
                        },
                        style: {
                            padding: 0,
                        },
                    },
                    {
                        props: {
                            align: 'left',
                        },
                        style: {
                            textAlign: 'left',
                        },
                    },
                    {
                        props: {
                            align: 'center',
                        },
                        style: {
                            textAlign: 'center',
                        },
                    },
                    {
                        props: {
                            align: 'right',
                        },
                        style: {
                            textAlign: 'right',
                            flexDirection: 'row-reverse',
                        },
                    },
                    {
                        props: {
                            align: 'justify',
                        },
                        style: {
                            textAlign: 'justify',
                        },
                    },
                    {
                        props: ({ ownerState: t }) => t.stickyHeader,
                        style: {
                            position: 'sticky',
                            top: 0,
                            zIndex: 2,
                            backgroundColor: (e.vars || e).palette.background.default,
                        },
                    },
                ],
            })),
        ),
        _t = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiTableCell',
                }),
                {
                    align: r = 'inherit',
                    className: s,
                    component: i,
                    padding: l,
                    scope: c,
                    size: d,
                    sortDirection: u,
                    variant: g,
                    ...f
                } = o,
                p = y.useContext(Cs),
                h = y.useContext(ao),
                m = h && h.variant === 'head';
            let x;
            i ? (x = i) : (x = m ? 'th' : 'td');
            let v = c;
            x === 'td' ? (v = void 0) : !v && m && (v = 'col');
            const _ = g || (h && h.variant),
                C = {
                    ...o,
                    align: r,
                    component: x,
                    padding: l || (p && p.padding ? p.padding : 'normal'),
                    size: d || (p && p.size ? p.size : 'medium'),
                    sortDirection: u,
                    stickyHeader: _ === 'head' && p && p.stickyHeader,
                    variant: _,
                },
                j = ac(C);
            let R = null;
            return (
                u && (R = u === 'asc' ? 'ascending' : 'descending'),
                a.jsx(cc, {
                    as: x,
                    ref: n,
                    className: se(j.root, s),
                    'aria-sort': R,
                    scope: v,
                    ownerState: C,
                    ...f,
                })
            );
        });
    function uc(e) {
        return be('MuiTableContainer', e);
    }
    xe('MuiTableContainer', ['root']);
    const dc = e => {
            const { classes: t } = e;
            return ve(
                {
                    root: ['root'],
                },
                uc,
                t,
            );
        },
        pc = J('div', {
            name: 'MuiTableContainer',
            slot: 'Root',
            overridesResolver: (e, t) => t.root,
        })({
            width: '100%',
            overflowX: 'auto',
        }),
        fc = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiTableContainer',
                }),
                { className: r, component: s = 'div', ...i } = o,
                l = {
                    ...o,
                    component: s,
                },
                c = dc(l);
            return a.jsx(pc, {
                ref: n,
                as: s,
                className: se(c.root, r),
                ownerState: l,
                ...i,
            });
        });
    function gc(e) {
        return be('MuiTableHead', e);
    }
    xe('MuiTableHead', ['root']);
    const hc = e => {
            const { classes: t } = e;
            return ve(
                {
                    root: ['root'],
                },
                gc,
                t,
            );
        },
        mc = J('thead', {
            name: 'MuiTableHead',
            slot: 'Root',
            overridesResolver: (e, t) => t.root,
        })({
            display: 'table-header-group',
        }),
        yc = {
            variant: 'head',
        },
        Fr = 'thead',
        vc = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiTableHead',
                }),
                { className: r, component: s = Fr, ...i } = o,
                l = {
                    ...o,
                    component: s,
                },
                c = hc(l);
            return a.jsx(ao.Provider, {
                value: yc,
                children: a.jsx(mc, {
                    as: s,
                    className: se(c.root, r),
                    ref: n,
                    role: s === Fr ? null : 'rowgroup',
                    ownerState: l,
                    ...i,
                }),
            });
        });
    function bc(e) {
        return be('MuiToolbar', e);
    }
    xe('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
    const xc = e => {
            const { classes: t, disableGutters: n, variant: o } = e;
            return ve(
                {
                    root: ['root', !n && 'gutters', o],
                },
                bc,
                t,
            );
        },
        _c = J('div', {
            name: 'MuiToolbar',
            slot: 'Root',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
            },
        })(
            pe(({ theme: e }) => ({
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                variants: [
                    {
                        props: ({ ownerState: t }) => !t.disableGutters,
                        style: {
                            paddingLeft: e.spacing(2),
                            paddingRight: e.spacing(2),
                            [e.breakpoints.up('sm')]: {
                                paddingLeft: e.spacing(3),
                                paddingRight: e.spacing(3),
                            },
                        },
                    },
                    {
                        props: {
                            variant: 'dense',
                        },
                        style: {
                            minHeight: 48,
                        },
                    },
                    {
                        props: {
                            variant: 'regular',
                        },
                        style: e.mixins.toolbar,
                    },
                ],
            })),
        ),
        Ss = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiToolbar',
                }),
                { className: r, component: s = 'div', disableGutters: i = false, variant: l = 'regular', ...c } = o,
                d = {
                    ...o,
                    component: s,
                    disableGutters: i,
                    variant: l,
                },
                u = xc(d);
            return a.jsx(_c, {
                as: s,
                className: se(u.root, r),
                ref: n,
                ownerState: d,
                ...c,
            });
        }),
        wc = le(
            a.jsx('path', {
                d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z',
            }),
            'KeyboardArrowLeft',
        ),
        Cc = le(
            a.jsx('path', {
                d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z',
            }),
            'KeyboardArrowRight',
        ),
        Sc = y.forwardRef(function (t, n) {
            const {
                    backIconButtonProps: o,
                    count: r,
                    disabled: s = false,
                    getItemAriaLabel: i,
                    nextIconButtonProps: l,
                    onPageChange: c,
                    page: d,
                    rowsPerPage: u,
                    showFirstButton: g,
                    showLastButton: f,
                    slots: p = {},
                    slotProps: h = {},
                    ...m
                } = t,
                x = Go(),
                v = L => {
                    c(L, 0);
                },
                _ = L => {
                    c(L, d - 1);
                },
                C = L => {
                    c(L, d + 1);
                },
                j = L => {
                    c(L, Math.max(0, Math.ceil(r / u) - 1));
                },
                R = p.firstButton ?? Se,
                w = p.lastButton ?? Se,
                M = p.nextButton ?? Se,
                T = p.previousButton ?? Se,
                D = p.firstButtonIcon ?? Fa,
                A = p.lastButtonIcon ?? za,
                P = p.nextButtonIcon ?? Cc,
                U = p.previousButtonIcon ?? wc,
                E = x ? w : R,
                W = x ? M : T,
                Y = x ? T : M,
                q = x ? R : w,
                k = x ? h.lastButton : h.firstButton,
                S = x ? h.nextButton : h.previousButton,
                I = x ? h.previousButton : h.nextButton,
                O = x ? h.firstButton : h.lastButton;
            return a.jsxs('div', {
                ref: n,
                ...m,
                children: [
                    g &&
                        a.jsx(E, {
                            onClick: v,
                            disabled: s || d === 0,
                            'aria-label': i('first', d),
                            title: i('first', d),
                            ...k,
                            children: x
                                ? a.jsx(A, {
                                      ...h.lastButtonIcon,
                                  })
                                : a.jsx(D, {
                                      ...h.firstButtonIcon,
                                  }),
                        }),
                    a.jsx(W, {
                        onClick: _,
                        disabled: s || d === 0,
                        color: 'inherit',
                        'aria-label': i('previous', d),
                        title: i('previous', d),
                        ...(S ?? o),
                        children: x
                            ? a.jsx(P, {
                                  ...h.nextButtonIcon,
                              })
                            : a.jsx(U, {
                                  ...h.previousButtonIcon,
                              }),
                    }),
                    a.jsx(Y, {
                        onClick: C,
                        disabled: s || (r !== -1 ? d >= Math.ceil(r / u) - 1 : false),
                        color: 'inherit',
                        'aria-label': i('next', d),
                        title: i('next', d),
                        ...(I ?? l),
                        children: x
                            ? a.jsx(U, {
                                  ...h.previousButtonIcon,
                              })
                            : a.jsx(P, {
                                  ...h.nextButtonIcon,
                              }),
                    }),
                    f &&
                        a.jsx(q, {
                            onClick: j,
                            disabled: s || d >= Math.ceil(r / u) - 1,
                            'aria-label': i('last', d),
                            title: i('last', d),
                            ...O,
                            children: x
                                ? a.jsx(D, {
                                      ...h.firstButtonIcon,
                                  })
                                : a.jsx(A, {
                                      ...h.lastButtonIcon,
                                  }),
                        }),
                ],
            });
        });
    function jc(e) {
        return be('MuiTablePagination', e);
    }
    const vn = xe('MuiTablePagination', [
        'root',
        'toolbar',
        'spacer',
        'selectLabel',
        'selectRoot',
        'select',
        'selectIcon',
        'input',
        'menuItem',
        'displayedRows',
        'actions',
    ]);
    var zr;
    const Rc = J(_t, {
            name: 'MuiTablePagination',
            slot: 'Root',
            overridesResolver: (e, t) => t.root,
        })(
            pe(({ theme: e }) => ({
                overflow: 'auto',
                color: (e.vars || e).palette.text.primary,
                fontSize: e.typography.pxToRem(14),
                '&:last-child': {
                    padding: 0,
                },
            })),
        ),
        Mc = J(Ss, {
            name: 'MuiTablePagination',
            slot: 'Toolbar',
            overridesResolver: (e, t) => ({
                [`& .${vn.actions}`]: t.actions,
                ...t.toolbar,
            }),
        })(
            pe(({ theme: e }) => ({
                minHeight: 52,
                paddingRight: 2,
                [`${e.breakpoints.up('xs')} and (orientation: landscape)`]: {
                    minHeight: 52,
                },
                [e.breakpoints.up('sm')]: {
                    minHeight: 52,
                    paddingRight: 2,
                },
                [`& .${vn.actions}`]: {
                    flexShrink: 0,
                    marginLeft: 20,
                },
            })),
        ),
        $c = J('div', {
            name: 'MuiTablePagination',
            slot: 'Spacer',
            overridesResolver: (e, t) => t.spacer,
        })({
            flex: '1 1 100%',
        }),
        Ac = J('p', {
            name: 'MuiTablePagination',
            slot: 'SelectLabel',
            overridesResolver: (e, t) => t.selectLabel,
        })(
            pe(({ theme: e }) => ({
                ...e.typography.body2,
                flexShrink: 0,
            })),
        ),
        Ic = J(ct, {
            name: 'MuiTablePagination',
            slot: 'Select',
            overridesResolver: (e, t) => ({
                [`& .${vn.selectIcon}`]: t.selectIcon,
                [`& .${vn.select}`]: t.select,
                ...t.input,
                ...t.selectRoot,
            }),
        })({
            color: 'inherit',
            fontSize: 'inherit',
            flexShrink: 0,
            marginRight: 32,
            marginLeft: 8,
            [`& .${vn.select}`]: {
                paddingLeft: 8,
                paddingRight: 24,
                textAlign: 'right',
                textAlignLast: 'right',
            },
        }),
        Pc = J(ie, {
            name: 'MuiTablePagination',
            slot: 'MenuItem',
            overridesResolver: (e, t) => t.menuItem,
        })({}),
        Fc = J('p', {
            name: 'MuiTablePagination',
            slot: 'DisplayedRows',
            overridesResolver: (e, t) => t.displayedRows,
        })(
            pe(({ theme: e }) => ({
                ...e.typography.body2,
                flexShrink: 0,
            })),
        );
    function zc({ from: e, to: t, count: n }) {
        return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
    }
    function Tc(e) {
        return `Go to ${e} page`;
    }
    const Dc = e => {
            const { classes: t } = e;
            return ve(
                {
                    root: ['root'],
                    toolbar: ['toolbar'],
                    spacer: ['spacer'],
                    selectLabel: ['selectLabel'],
                    select: ['select'],
                    input: ['input'],
                    selectIcon: ['selectIcon'],
                    menuItem: ['menuItem'],
                    displayedRows: ['displayedRows'],
                    actions: ['actions'],
                },
                jc,
                t,
            );
        },
        kc = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiTablePagination',
                }),
                {
                    ActionsComponent: r = Sc,
                    backIconButtonProps: s,
                    colSpan: i,
                    component: l = _t,
                    count: c,
                    disabled: d = false,
                    getItemAriaLabel: u = Tc,
                    labelDisplayedRows: g = zc,
                    labelRowsPerPage: f = 'Rows per page:',
                    nextIconButtonProps: p,
                    onPageChange: h,
                    onRowsPerPageChange: m,
                    page: x,
                    rowsPerPage: v,
                    rowsPerPageOptions: _ = [10, 25, 50, 100],
                    SelectProps: C = {},
                    showFirstButton: j = false,
                    showLastButton: R = false,
                    slotProps: w = {},
                    slots: M = {},
                    ...T
                } = o,
                D = o,
                A = Dc(D),
                P = (w == null ? void 0 : w.select) ?? C,
                U = P.native ? 'option' : Pc;
            let E;
            (l === _t || l === 'td') && (E = i || 1e3);
            const W = $o(P.id),
                Y = $o(P.labelId),
                q = () => (c === -1 ? (x + 1) * v : v === -1 ? c : Math.min(c, (x + 1) * v)),
                k = {
                    slots: M,
                    slotProps: w,
                },
                [S, I] = ce('root', {
                    ref: n,
                    className: A.root,
                    elementType: Rc,
                    externalForwardedProps: {
                        ...k,
                        component: l,
                        ...T,
                    },
                    ownerState: D,
                    additionalProps: {
                        colSpan: E,
                    },
                }),
                [O, L] = ce('toolbar', {
                    className: A.toolbar,
                    elementType: Mc,
                    externalForwardedProps: k,
                    ownerState: D,
                }),
                [Z, Q] = ce('spacer', {
                    className: A.spacer,
                    elementType: $c,
                    externalForwardedProps: k,
                    ownerState: D,
                }),
                [ue, fe] = ce('selectLabel', {
                    className: A.selectLabel,
                    elementType: Ac,
                    externalForwardedProps: k,
                    ownerState: D,
                    additionalProps: {
                        id: Y,
                    },
                }),
                [N, ae] = ce('select', {
                    className: A.select,
                    elementType: Ic,
                    externalForwardedProps: k,
                    ownerState: D,
                }),
                [te, X] = ce('menuItem', {
                    className: A.menuItem,
                    elementType: U,
                    externalForwardedProps: k,
                    ownerState: D,
                }),
                [ze, Ae] = ce('displayedRows', {
                    className: A.displayedRows,
                    elementType: Fc,
                    externalForwardedProps: k,
                    ownerState: D,
                });
            return a.jsx(S, {
                ...I,
                children: a.jsxs(O, {
                    ...L,
                    children: [
                        a.jsx(Z, {
                            ...Q,
                        }),
                        _.length > 1 &&
                            a.jsx(ue, {
                                ...fe,
                                children: f,
                            }),
                        _.length > 1 &&
                            a.jsx(N, {
                                variant: 'standard',
                                ...(!P.variant && {
                                    input: zr || (zr = a.jsx(ri, {})),
                                }),
                                value: v,
                                onChange: m,
                                id: W,
                                labelId: Y,
                                ...P,
                                classes: {
                                    ...P.classes,
                                    root: se(A.input, A.selectRoot, (P.classes || {}).root),
                                    select: se(A.select, (P.classes || {}).select),
                                    icon: se(A.selectIcon, (P.classes || {}).icon),
                                },
                                disabled: d,
                                ...ae,
                                children: _.map(ge =>
                                    y.createElement(
                                        te,
                                        {
                                            ...X,
                                            key: ge.label ? ge.label : ge,
                                            value: ge.value ? ge.value : ge,
                                        },
                                        ge.label ? ge.label : ge,
                                    ),
                                ),
                            }),
                        a.jsx(ze, {
                            ...Ae,
                            children: g({
                                from: c === 0 ? 0 : x * v + 1,
                                to: q(),
                                count: c === -1 ? -1 : c,
                                page: x,
                            }),
                        }),
                        a.jsx(r, {
                            className: A.actions,
                            backIconButtonProps: s,
                            count: c,
                            nextIconButtonProps: p,
                            onPageChange: h,
                            page: x,
                            rowsPerPage: v,
                            showFirstButton: j,
                            showLastButton: R,
                            slotProps: w.actions,
                            slots: M.actions,
                            getItemAriaLabel: u,
                            disabled: d,
                        }),
                    ],
                }),
            });
        });
    function Ec(e) {
        return be('MuiTableRow', e);
    }
    const Tr = xe('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']),
        Oc = e => {
            const { classes: t, selected: n, hover: o, head: r, footer: s } = e;
            return ve(
                {
                    root: ['root', n && 'selected', o && 'hover', r && 'head', s && 'footer'],
                },
                Ec,
                t,
            );
        },
        Nc = J('tr', {
            name: 'MuiTableRow',
            slot: 'Root',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [t.root, n.head && t.head, n.footer && t.footer];
            },
        })(
            pe(({ theme: e }) => ({
                color: 'inherit',
                display: 'table-row',
                verticalAlign: 'middle',
                outline: 0,
                [`&.${Tr.hover}:hover`]: {
                    backgroundColor: (e.vars || e).palette.action.hover,
                },
                [`&.${Tr.selected}`]: {
                    backgroundColor: e.vars
                        ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                        : Fe(e.palette.primary.main, e.palette.action.selectedOpacity),
                    '&:hover': {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                            : Fe(
                                  e.palette.primary.main,
                                  e.palette.action.selectedOpacity + e.palette.action.hoverOpacity,
                              ),
                    },
                },
            })),
        ),
        Dr = 'tr',
        sn = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiTableRow',
                }),
                { className: r, component: s = Dr, hover: i = false, selected: l = false, ...c } = o,
                d = y.useContext(ao),
                u = {
                    ...o,
                    component: s,
                    hover: i,
                    selected: l,
                    head: d && d.variant === 'head',
                    footer: d && d.variant === 'footer',
                },
                g = Oc(u);
            return a.jsx(Nc, {
                as: s,
                ref: n,
                className: se(g.root, r),
                role: s === Dr ? null : 'row',
                ownerState: u,
                ...c,
            });
        }),
        Lc = le(
            a.jsx('path', {
                d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z',
            }),
            'ArrowDownward',
        );
    function Hc(e) {
        return be('MuiTableSortLabel', e);
    }
    const ho = xe('MuiTableSortLabel', [
            'root',
            'active',
            'icon',
            'iconDirectionDesc',
            'iconDirectionAsc',
            'directionDesc',
            'directionAsc',
        ]),
        Vc = e => {
            const { classes: t, direction: n, active: o } = e,
                r = {
                    root: ['root', o && 'active', `direction${G(n)}`],
                    icon: ['icon', `iconDirection${G(n)}`],
                };
            return ve(r, Hc, t);
        },
        Bc = J(Zn, {
            name: 'MuiTableSortLabel',
            slot: 'Root',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [t.root, n.active && t.active];
            },
        })(
            pe(({ theme: e }) => ({
                cursor: 'pointer',
                display: 'inline-flex',
                justifyContent: 'flex-start',
                flexDirection: 'inherit',
                alignItems: 'center',
                '&:focus': {
                    color: (e.vars || e).palette.text.secondary,
                },
                '&:hover': {
                    color: (e.vars || e).palette.text.secondary,
                    [`& .${ho.icon}`]: {
                        opacity: 0.5,
                    },
                },
                [`&.${ho.active}`]: {
                    color: (e.vars || e).palette.text.primary,
                    [`& .${ho.icon}`]: {
                        opacity: 1,
                        color: (e.vars || e).palette.text.secondary,
                    },
                },
            })),
        ),
        Wc = J('span', {
            name: 'MuiTableSortLabel',
            slot: 'Icon',
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [t.icon, t[`iconDirection${G(n.direction)}`]];
            },
        })(
            pe(({ theme: e }) => ({
                fontSize: 18,
                marginRight: 4,
                marginLeft: 4,
                opacity: 0,
                transition: e.transitions.create(['opacity', 'transform'], {
                    duration: e.transitions.duration.shorter,
                }),
                userSelect: 'none',
                variants: [
                    {
                        props: {
                            direction: 'desc',
                        },
                        style: {
                            transform: 'rotate(0deg)',
                        },
                    },
                    {
                        props: {
                            direction: 'asc',
                        },
                        style: {
                            transform: 'rotate(180deg)',
                        },
                    },
                ],
            })),
        ),
        Gc = y.forwardRef(function (t, n) {
            const o = ye({
                    props: t,
                    name: 'MuiTableSortLabel',
                }),
                {
                    active: r = false,
                    children: s,
                    className: i,
                    direction: l = 'asc',
                    hideSortIcon: c = false,
                    IconComponent: d = Lc,
                    slots: u = {},
                    slotProps: g = {},
                    ...f
                } = o,
                p = {
                    ...o,
                    active: r,
                    direction: l,
                    hideSortIcon: c,
                    IconComponent: d,
                },
                h = Vc(p),
                m = {
                    slots: u,
                    slotProps: g,
                },
                [x, v] = ce('root', {
                    elementType: Bc,
                    externalForwardedProps: m,
                    ownerState: p,
                    className: se(h.root, i),
                    ref: n,
                }),
                [_, C] = ce('icon', {
                    elementType: Wc,
                    externalForwardedProps: m,
                    ownerState: p,
                    className: h.icon,
                });
            return a.jsxs(x, {
                disableRipple: true,
                component: 'span',
                ...v,
                ...f,
                children: [
                    s,
                    c && !r
                        ? null
                        : a.jsx(_, {
                              as: d,
                              ...C,
                          }),
                ],
            });
        }),
        js = le(
            a.jsx('path', {
                d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z',
            }),
            'Add',
        ),
        Rs = le(
            a.jsx('path', {
                d: 'm20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z',
            }),
            'ArrowDownward',
        ),
        Ms = le(
            a.jsx('path', {
                d: 'm4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z',
            }),
            'ArrowUpward',
        ),
        Uc = le(
            a.jsx('path', {
                d: 'M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z',
            }),
            'AutoFixHigh',
        ),
        kr = le(
            a.jsx('path', {
                d: 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
            }),
            'Check',
        ),
        $s = le(
            a.jsx('path', {
                d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
            }),
            'Clear',
        ),
        qc = le(
            a.jsx('path', {
                d: 'M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2',
            }),
            'DragIndicator',
        ),
        Yc = le(
            a.jsx('path', {
                d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z',
            }),
            'Edit',
        ),
        Bn = le(
            a.jsx('path', {
                d: 'M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z',
            }),
            'ExpandMore',
        ),
        Jc = le(
            a.jsx('path', {
                d: 'M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z',
            }),
            'FilterList',
        ),
        Er = le(
            a.jsx('path', {
                d: 'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5',
            }),
            'FormatBold',
        ),
        Or = le(
            a.jsx('path', {
                d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z',
            }),
            'FormatItalic',
        ),
        Kc = le(
            a.jsx('path', {
                d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2',
            }),
            'MoreVert',
        ),
        Xc = le(
            a.jsx('path', {
                d: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z',
            }),
            'Refresh',
        ),
        fn = le(
            a.jsx('path', {
                d: 'M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91',
            }),
            'RestartAlt',
        ),
        As = le(
            a.jsx('path', {
                d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14',
            }),
            'Search',
        ),
        Qc = le(
            a.jsx('path', {
                d: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6',
            }),
            'Settings',
        ),
        Zc = le(
            a.jsx('path', {
                d: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3',
            }),
            'Visibility',
        ),
        Is = le(
            a.jsx('path', {
                d: 'M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z',
            }),
            'VisibilityOff',
        ),
        bn = {
            string: '#2196f3',
            number: '#4caf50',
            boolean: '#ff9800',
            date: '#9c27b0',
            null: '#9e9e9e',
            object: '#795548',
            array: '#00bcd4',
            mixed: '#f44336',
        },
        Nr = 'b64:';
    function eu(e) {
        const t = new TextEncoder().encode(e);
        let n = '';
        for (let o = 0; o < t.length; o++) n += String.fromCharCode(t[o]);
        return btoa(n);
    }
    function tu(e) {
        const t = atob(e),
            n = new Uint8Array(t.length);
        for (let o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
        return new TextDecoder().decode(n);
    }
    function Ps(e) {
        if (!e) return [];
        try {
            const t = e.startsWith(Nr) ? tu(e.slice(Nr.length)) : e,
                n = JSON.parse(t);
            return Array.isArray(n) ? n : [];
        } catch {
            return [];
        }
    }
    function nu({
        columns: e,
        discoveredColumns: t,
        selectedPath: n,
        onSelect: o,
        onChange: r,
        onRefresh: s,
        loading: i,
    }) {
        const [l, c] = y.useState(''),
            [d, u] = y.useState(null),
            [g, f] = y.useState(null),
            [p, h] = y.useState(false),
            m = y.useRef(0),
            x = y.useRef(/* @__PURE__ */ new Map()),
            v = !l,
            _ = y.useMemo(() => {
                if (!l) return e;
                const S = l.toLowerCase();
                return e.filter(I => I.path.toLowerCase().includes(S) || I.headerName.toLowerCase().includes(S));
            }, [e, l]),
            C = y.useMemo(() => e.filter(S => S.visible).length, [e]),
            j = y.useCallback(
                S => {
                    r(
                        e.map(I =>
                            I.path === S
                                ? {
                                      ...I,
                                      visible: !I.visible,
                                  }
                                : I,
                        ),
                    );
                },
                [e, r],
            ),
            R = y.useCallback(
                (S, I) => {
                    (S.stopPropagation(), j(I));
                },
                [j],
            ),
            w = y.useCallback(
                S => I => {
                    I ? x.current.set(S, I) : x.current.delete(S);
                },
                [],
            ),
            M = y.useCallback(
                S => {
                    r(
                        e.map(I => ({
                            ...I,
                            visible: S,
                        })),
                    );
                },
                [e, r],
            ),
            T = y.useCallback((S, I) => {
                ((S.dataTransfer.effectAllowed = 'move'), S.dataTransfer.setData('text/plain', I), u(I));
            }, []),
            D = y.useCallback(
                (S, I) => {
                    (S.preventDefault(), (m.current += 1), I !== d && f(I));
                },
                [d],
            ),
            A = y.useCallback(S => {
                (S.preventDefault(), (m.current -= 1), m.current <= 0 && ((m.current = 0), f(null)));
            }, []),
            P = y.useCallback(S => {
                (S.preventDefault(), (S.dataTransfer.dropEffect = 'move'));
            }, []),
            U = y.useCallback(
                (S, I) => {
                    (S.preventDefault(), (m.current = 0), f(null), u(null));
                    const O = S.dataTransfer.getData('text/plain');
                    if (!O || O === I) return;
                    const L = [...e],
                        Z = L.findIndex(N => N.path === O),
                        Q = L.findIndex(N => N.path === I);
                    if (Z === -1 || Q === -1) return;
                    const [ue] = L.splice(Z, 1),
                        fe = Z < Q ? Q - 1 : Q;
                    (L.splice(fe, 0, ue), r(L));
                },
                [e, r],
            ),
            E = y.useCallback(() => {
                ((m.current = 0), u(null), f(null));
            }, []),
            W = y.useCallback(() => {
                (r(
                    e.map(S => ({
                        path: S.path,
                        visible: true,
                        headerName: S.path.split('.').pop() || S.path,
                    })),
                ),
                    h(false));
            }, [e, r]),
            Y = y.useCallback(() => {
                h(true);
            }, []),
            q = y.useCallback(() => {
                h(false);
            }, []),
            k = y.useCallback(
                (S, I, O) => {
                    var _a2, _b;
                    switch (S.key) {
                        case 'Enter':
                        case ' ':
                            (S.preventDefault(), o(I.path));
                            break;
                        case 'ArrowDown':
                            if ((S.preventDefault(), O < _.length - 1)) {
                                const L = _[O + 1].path;
                                (o(L), (_a2 = x.current.get(L)) == null ? void 0 : _a2.focus());
                            }
                            break;
                        case 'ArrowUp':
                            if ((S.preventDefault(), O > 0)) {
                                const L = _[O - 1].path;
                                (o(L), (_b = x.current.get(L)) == null ? void 0 : _b.focus());
                            }
                            break;
                        case 'v':
                        case 'V':
                            (S.preventDefault(), j(I.path));
                            break;
                    }
                },
                [_, o, j],
            );
        return a.jsxs(H, {
            sx: {
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            },
            children: [
                a.jsxs(Ss, {
                    variant: 'dense',
                    sx: {
                        borderBottom: 1,
                        borderColor: 'divider',
                        gap: 0.5,
                        px: 1.5,
                        minHeight: 48,
                    },
                    children: [
                        a.jsx(Re, {
                            size: 'small',
                            placeholder: b.t('json_table_search_columns'),
                            value: l,
                            onChange: S => c(S.target.value),
                            slotProps: {
                                input: {
                                    startAdornment: a.jsx(ws, {
                                        position: 'start',
                                        children: a.jsx(As, {
                                            fontSize: 'small',
                                        }),
                                    }),
                                    'aria-label': b.t('json_table_search_columns'),
                                },
                            },
                            sx: {
                                flexGrow: 1,
                                minWidth: 0,
                            },
                        }),
                        a.jsx(Le, {
                            title: b.t('json_table_refresh_columns'),
                            children: a.jsx('span', {
                                children: a.jsx(Se, {
                                    size: 'small',
                                    onClick: s,
                                    disabled: i,
                                    'aria-label': b.t('json_table_refresh_columns'),
                                    children: a.jsx(Xc, {
                                        fontSize: 'small',
                                    }),
                                }),
                            }),
                        }),
                        a.jsx(Le, {
                            title: b.t('json_table_show_all'),
                            children: a.jsx(Se, {
                                size: 'small',
                                onClick: () => M(true),
                                'aria-label': b.t('json_table_show_all'),
                                children: a.jsx(Zc, {
                                    fontSize: 'small',
                                }),
                            }),
                        }),
                        a.jsx(Le, {
                            title: b.t('json_table_hide_all'),
                            children: a.jsx(Se, {
                                size: 'small',
                                onClick: () => M(false),
                                'aria-label': b.t('json_table_hide_all'),
                                children: a.jsx(Is, {
                                    fontSize: 'small',
                                }),
                            }),
                        }),
                        a.jsx(Le, {
                            title: b.t('json_table_reset_all'),
                            children: a.jsx(Se, {
                                size: 'small',
                                onClick: Y,
                                'aria-label': b.t('json_table_reset_all'),
                                children: a.jsx(fn, {
                                    fontSize: 'small',
                                }),
                            }),
                        }),
                    ],
                }),
                a.jsx(H, {
                    sx: {
                        flexGrow: 1,
                        overflow: 'auto',
                        p: 1.5,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.75,
                    },
                    children:
                        _.length === 0
                            ? a.jsx(H, {
                                  sx: {
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      py: 4,
                                  },
                                  children: a.jsx(F, {
                                      variant: 'body2',
                                      color: 'text.secondary',
                                      children:
                                          e.length === 0
                                              ? b.t('json_table_no_columns')
                                              : b.t('json_table_no_search_results'),
                                  }),
                              })
                            : _.map((S, I) => {
                                  const O = t.find(Q => Q.path === S.path),
                                      L = n === S.path,
                                      Z = (O == null ? void 0 : O.type) || 'string';
                                  return a.jsx(
                                      ma,
                                      {
                                          ref: w(S.path),
                                          'data-column-path': S.path,
                                          onClick: () => o(S.path),
                                          onKeyDown: Q => k(Q, S, I),
                                          draggable: v,
                                          onDragStart: v ? Q => T(Q, S.path) : void 0,
                                          onDragEnter: v ? Q => D(Q, S.path) : void 0,
                                          onDragLeave: v ? A : void 0,
                                          onDragOver: v ? P : void 0,
                                          onDrop: v ? Q => U(Q, S.path) : void 0,
                                          onDragEnd: v ? E : void 0,
                                          variant: 'outlined',
                                          tabIndex: 0,
                                          role: 'button',
                                          'aria-selected': L,
                                          'aria-label': `${S.headerName || S.path}, ${Z}, ${S.visible ? b.t('json_table_visible') : b.t('json_table_hidden')}`,
                                          sx: {
                                              p: 1,
                                              cursor: v ? 'grab' : 'pointer',
                                              flexShrink: 0,
                                              border: 2,
                                              borderColor: L ? 'primary.main' : 'divider',
                                              backgroundColor: L ? 'action.selected' : 'background.paper',
                                              opacity: d === S.path ? 0.4 : S.visible ? 1 : 0.55,
                                              borderTop: g === S.path ? '3px solid' : void 0,
                                              borderTopColor: g === S.path ? 'primary.main' : void 0,
                                              '&:hover': {
                                                  backgroundColor: L ? 'action.selected' : 'action.hover',
                                              },
                                              '&:focus': {
                                                  outline: '2px solid',
                                                  outlineColor: 'primary.main',
                                                  outlineOffset: '2px',
                                              },
                                              transition: 'all 0.15s ease-in-out',
                                          },
                                          children: a.jsxs(H, {
                                              sx: {
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  gap: 1,
                                              },
                                              children: [
                                                  v &&
                                                      a.jsx(qc, {
                                                          fontSize: 'small',
                                                          sx: {
                                                              color: 'text.disabled',
                                                              cursor: 'grab',
                                                              flexShrink: 0,
                                                          },
                                                          'aria-hidden': 'true',
                                                      }),
                                                  a.jsx(wn, {
                                                      checked: S.visible,
                                                      onClick: Q => R(Q, S.path),
                                                      size: 'small',
                                                      sx: {
                                                          p: 0.5,
                                                      },
                                                      inputProps: {
                                                          'aria-label': `${b.t('json_table_visible')}: ${S.headerName || S.path}`,
                                                      },
                                                  }),
                                                  a.jsxs(H, {
                                                      sx: {
                                                          flexGrow: 1,
                                                          minWidth: 0,
                                                      },
                                                      children: [
                                                          a.jsx(F, {
                                                              variant: 'body2',
                                                              sx: {
                                                                  fontWeight: 500,
                                                                  overflow: 'hidden',
                                                                  textOverflow: 'ellipsis',
                                                                  whiteSpace: 'nowrap',
                                                                  fontSize: '0.8rem',
                                                              },
                                                              title: S.path,
                                                              children: S.headerName || S.path,
                                                          }),
                                                          S.headerName &&
                                                              S.headerName !== S.path &&
                                                              a.jsx(F, {
                                                                  variant: 'caption',
                                                                  color: 'text.secondary',
                                                                  sx: {
                                                                      fontFamily: 'monospace',
                                                                      fontSize: '0.65rem',
                                                                      overflow: 'hidden',
                                                                      textOverflow: 'ellipsis',
                                                                      whiteSpace: 'nowrap',
                                                                      display: 'block',
                                                                  },
                                                                  title: S.path,
                                                                  children: S.path,
                                                              }),
                                                      ],
                                                  }),
                                                  a.jsx(jt, {
                                                      label: Z,
                                                      size: 'small',
                                                      sx: {
                                                          backgroundColor: bn[Z] || bn.string,
                                                          color: '#fff',
                                                          fontWeight: 600,
                                                          fontSize: '0.65rem',
                                                          height: 20,
                                                          minWidth: 48,
                                                          flexShrink: 0,
                                                      },
                                                      'aria-label': `${b.t('json_table_type')}: ${Z}`,
                                                  }),
                                              ],
                                          }),
                                      },
                                      S.path,
                                  );
                              }),
                }),
                e.length > 0 &&
                    a.jsx(H, {
                        sx: {
                            borderTop: 1,
                            borderColor: 'divider',
                            px: 2,
                            py: 1,
                        },
                        children: a.jsxs(F, {
                            variant: 'caption',
                            color: 'text.secondary',
                            'aria-live': 'polite',
                            'aria-atomic': 'true',
                            children: [C, ' / ', e.length, ' ', b.t('json_table_columns_visible')],
                        }),
                    }),
                a.jsxs(Uo, {
                    open: p,
                    onClose: q,
                    'aria-labelledby': 'reset-dialog-title',
                    'aria-describedby': 'reset-dialog-description',
                    children: [
                        a.jsx(qo, {
                            id: 'reset-dialog-title',
                            children: b.t('json_table_reset_all'),
                        }),
                        a.jsx(Yo, {
                            children: a.jsx(ja, {
                                id: 'reset-dialog-description',
                                children: b.t('json_table_reset_confirm_message'),
                            }),
                        }),
                        a.jsxs(nr, {
                            children: [
                                a.jsx(ot, {
                                    onClick: q,
                                    color: 'primary',
                                    children: b.t('cancel'),
                                }),
                                a.jsx(ot, {
                                    onClick: W,
                                    color: 'error',
                                    variant: 'contained',
                                    autoFocus: true,
                                    children: b.t('json_table_reset_all'),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    function Xn(e) {
        return e == null ? '' : typeof e == 'object' ? JSON.stringify(e) : typeof e == 'string' ? e : `${e}`;
    }
    const ou = 0,
        ru = 20,
        Lr = 2;
    function su(e) {
        if (e == null) return Lr;
        const t = Number(e);
        return Number.isFinite(t) ? Math.max(ou, Math.min(ru, Math.floor(t))) : Lr;
    }
    function Fs(e, t = {}) {
        const { prefix: n = '', suffix: o = '', thousands: r = false } = t,
            s = su(t.decimals);
        let i = e.toFixed(s);
        if (r) {
            const [l, c] = i.split('.'),
                d = l.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            i = c !== void 0 ? `${d}.${c}` : d;
        }
        return `${n}${i}${o}`;
    }
    const iu = [
        {
            label: 'YYYY-MM-DD',
            value: 'yyyy-MM-dd',
        },
        {
            label: 'DD.MM.YYYY',
            value: 'dd.MM.yyyy',
        },
        {
            label: 'DD.MM.YYYY HH:mm',
            value: 'dd.MM.yyyy HH:mm',
        },
        {
            label: 'DD.MM.YYYY HH:mm:ss',
            value: 'dd.MM.yyyy HH:mm:ss',
        },
        {
            label: 'MM/DD/YYYY',
            value: 'MM/dd/yyyy',
        },
        {
            label: 'MM/DD/YYYY HH:mm',
            value: 'MM/dd/yyyy HH:mm',
        },
        {
            label: 'HH:mm:ss',
            value: 'HH:mm:ss',
        },
        {
            label: 'HH:mm',
            value: 'HH:mm',
        },
        {
            label: 'ISO-8601 (UTC)',
            value: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
        },
    ];
    function zs(e, t) {
        if (e == null) return '';
        if (typeof e == 'number') {
            const r = new Date(e >= 1e11 ? e : e * 1e3);
            return isNaN(r.getTime()) ? '' : r.toISOString().slice(0, 10);
        }
        if (e instanceof Date) return isNaN(e.getTime()) ? '' : e.toISOString().slice(0, 10);
        if (typeof e != 'string') return '';
        const n = e.trim();
        if (!n) return '';
        if (t == null ? void 0 : t.startsWith('dd.MM.yyyy')) {
            const r = n.match(/^(\d{2})\.(\d{2})\.(\d{4})/);
            return r ? `${r[3]}-${r[2]}-${r[1]}` : '';
        }
        if (t == null ? void 0 : t.startsWith('MM/dd/yyyy')) {
            const r = n.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
            return r ? `${r[3]}-${r[1]}-${r[2]}` : '';
        }
        const o = new Date(n);
        return isNaN(o.getTime()) ? '' : o.toISOString().slice(0, 10);
    }
    function Ts(e, t, n) {
        if (e == null || e === '') return '';
        try {
            let o;
            if (typeof e == 'string') {
                const c = e.trim();
                if (/^\d{4}-\d{2}-\d{2}$/.test(c)) {
                    const [d, u, g] = c.split('-').map(Number);
                    o = new Date(d, u - 1, g);
                } else o = new Date(c);
            } else if (typeof e == 'number') o = new Date(e >= 1e11 ? e : e * 1e3);
            else if (e instanceof Date) o = e;
            else return Xn(e);
            if (isNaN(o.getTime())) return Xn(e);
            const r = t || 'yyyy-MM-dd',
                s = (c, d = 2) => String(c).padStart(d, '0'),
                i = {
                    yyyy: String(o.getFullYear()),
                    MM: s(o.getMonth() + 1),
                    dd: s(o.getDate()),
                    HH: s(o.getHours()),
                    mm: s(o.getMinutes()),
                    ss: s(o.getSeconds()),
                    SSS: s(o.getMilliseconds(), 3),
                };
            if (r === "yyyy-MM-dd'T'HH:mm:ss.SSSxxx" || /xxx$/.test(r)) return o.toISOString();
            let l = r;
            for (const [c, d] of Object.entries(i).sort((u, g) => g[0].length - u[0].length)) l = l.replaceAll(c, d);
            return l;
        } catch {
            return Xn(e);
        }
    }
    function To(e, t = 'true', n = 'false') {
        return typeof e == 'boolean' ? (e ? t : n) : Xn(e);
    }
    function Ds(e, t) {
        let n = t.stringTrim ? e.trim() : e;
        if (t.stringRegex && t.stringRegex.length <= 200)
            try {
                const i = new RegExp(t.stringRegex, t.stringRegexFlags ?? ''),
                    l = n.match(i);
                l && (n = l[t.stringRegexGroup ?? 0] ?? n);
            } catch {}
        (t.stringCase === 'upper'
            ? (n = n.toUpperCase())
            : t.stringCase === 'lower'
              ? (n = n.toLowerCase())
              : t.stringCase === 'title' && (n = n.replace(/\b\w/g, s => s.toUpperCase())),
            t.stringMaxLength && n.length > t.stringMaxLength && (n = `${n.slice(0, t.stringMaxLength)}\u2026`));
        const o = t.stringPrefix ?? '',
            r = t.stringSuffix ?? '';
        return o || r ? `${o}${n}${r}` : n;
    }
    function lu({ format: e, onChange: t, discoveredColumn: n }) {
        const o = y.useMemo(() => {
            if ((n == null ? void 0 : n.min) !== void 0 && typeof n.min == 'number') {
                const r = typeof n.max == 'number' ? n.max : 0;
                return n.min + (r - n.min) * 0.75;
            }
            return 1234.567;
        }, [n]);
        return a.jsxs(a.Fragment, {
            children: [
                a.jsx(F, {
                    variant: 'caption',
                    color: 'text.secondary',
                    sx: {
                        fontWeight: 500,
                    },
                    children: b.t('json_table_number_format'),
                }),
                a.jsxs(H, {
                    children: [
                        a.jsxs(F, {
                            variant: 'caption',
                            color: 'text.secondary',
                            gutterBottom: true,
                            children: [b.t('json_table_number_decimals'), ': ', e.numberDecimals ?? 2],
                        }),
                        a.jsx(yi, {
                            value: e.numberDecimals ?? 2,
                            onChange: (r, s) =>
                                t({
                                    type: 'number',
                                    numberDecimals: s,
                                }),
                            min: 0,
                            max: 10,
                            marks: true,
                            step: 1,
                            valueLabelDisplay: 'auto',
                            size: 'small',
                        }),
                    ],
                }),
                a.jsx(Re, {
                    label: b.t('json_table_number_prefix'),
                    value: e.numberPrefix || '',
                    onChange: r =>
                        t({
                            type: 'number',
                            numberPrefix: r.target.value,
                        }),
                    size: 'small',
                    placeholder: '$, \u20AC, \xA3',
                }),
                a.jsx(Re, {
                    label: b.t('json_table_number_suffix'),
                    value: e.numberSuffix || '',
                    onChange: r =>
                        t({
                            type: 'number',
                            numberSuffix: r.target.value,
                        }),
                    size: 'small',
                    placeholder: '%, kg, \xB0C',
                }),
                a.jsx(Et, {
                    control: a.jsx(hn, {
                        checked: e.numberThousandsSeparator || false,
                        onChange: r =>
                            t({
                                type: 'number',
                                numberThousandsSeparator: r.target.checked,
                            }),
                        size: 'small',
                    }),
                    label: a.jsx(F, {
                        variant: 'body2',
                        children: b.t('json_table_number_thousands'),
                    }),
                }),
                a.jsxs(et, {
                    variant: 'outlined',
                    sx: {
                        p: 1.5,
                        bgcolor: 'action.hover',
                    },
                    children: [
                        a.jsx(F, {
                            variant: 'caption',
                            color: 'text.secondary',
                            children: b.t('json_table_preview'),
                        }),
                        a.jsxs(F, {
                            variant: 'body2',
                            sx: {
                                mt: 0.5,
                                fontFamily: 'monospace',
                            },
                            children: [
                                o,
                                ' \u2192',
                                ' ',
                                Fs(o, {
                                    decimals: e.numberDecimals,
                                    prefix: e.numberPrefix,
                                    suffix: e.numberSuffix,
                                    thousands: e.numberThousandsSeparator,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    function au({ format: e, detectedFormat: t, onChange: n }) {
        return a.jsxs(a.Fragment, {
            children: [
                a.jsx(F, {
                    variant: 'caption',
                    color: 'text.secondary',
                    sx: {
                        fontWeight: 500,
                    },
                    children: b.t('json_table_date_format'),
                }),
                t &&
                    a.jsx(Re, {
                        label: b.t('json_table_date_input_format'),
                        value: t,
                        disabled: true,
                        size: 'small',
                        helperText: b.t('json_table_date_detected_hint'),
                    }),
                a.jsxs(wt, {
                    fullWidth: true,
                    size: 'small',
                    children: [
                        a.jsx(Ct, {
                            children: b.t('json_table_date_output_format'),
                        }),
                        a.jsx(ct, {
                            label: b.t('json_table_date_output_format'),
                            value: e.dateFormat || 'yyyy-MM-dd',
                            onChange: o =>
                                n({
                                    type: 'date',
                                    dateFormat: o.target.value,
                                    dateInputFormat: t,
                                }),
                            children: iu.map(o =>
                                a.jsx(
                                    ie,
                                    {
                                        value: o.value,
                                        children: o.label,
                                    },
                                    o.value,
                                ),
                            ),
                        }),
                    ],
                }),
                a.jsxs(et, {
                    variant: 'outlined',
                    sx: {
                        p: 1.5,
                        bgcolor: 'action.hover',
                    },
                    children: [
                        a.jsx(F, {
                            variant: 'caption',
                            color: 'text.secondary',
                            children: b.t('json_table_preview'),
                        }),
                        a.jsx(F, {
                            variant: 'body2',
                            sx: {
                                mt: 0.5,
                                fontFamily: 'monospace',
                            },
                            children: Ts(/* @__PURE__ */ new Date(), e.dateFormat || 'yyyy-MM-dd'),
                        }),
                    ],
                }),
            ],
        });
    }
    function cu({ format: e, onChange: t }) {
        return a.jsxs(a.Fragment, {
            children: [
                a.jsx(F, {
                    variant: 'caption',
                    color: 'text.secondary',
                    sx: {
                        fontWeight: 500,
                    },
                    children: b.t('json_table_boolean_format'),
                }),
                a.jsx(Re, {
                    label: b.t('json_table_boolean_true'),
                    value: e.booleanTrue || '',
                    onChange: n =>
                        t({
                            type: 'boolean',
                            booleanTrue: n.target.value,
                        }),
                    size: 'small',
                    placeholder: 'Yes, On, \u2713, Active',
                }),
                a.jsx(Re, {
                    label: b.t('json_table_boolean_false'),
                    value: e.booleanFalse || '',
                    onChange: n =>
                        t({
                            type: 'boolean',
                            booleanFalse: n.target.value,
                        }),
                    size: 'small',
                    placeholder: 'No, Off, \u2717, Inactive',
                }),
                a.jsxs(et, {
                    variant: 'outlined',
                    sx: {
                        p: 1.5,
                        bgcolor: 'action.hover',
                    },
                    children: [
                        a.jsx(F, {
                            variant: 'caption',
                            color: 'text.secondary',
                            children: b.t('json_table_preview'),
                        }),
                        a.jsxs(De, {
                            direction: 'row',
                            spacing: 2,
                            sx: {
                                mt: 0.5,
                            },
                            children: [
                                a.jsxs(F, {
                                    variant: 'body2',
                                    sx: {
                                        fontFamily: 'monospace',
                                    },
                                    children: ['true \u2192 ', To(true, e.booleanTrue, e.booleanFalse)],
                                }),
                                a.jsxs(F, {
                                    variant: 'body2',
                                    sx: {
                                        fontFamily: 'monospace',
                                    },
                                    children: ['false \u2192 ', To(false, e.booleanTrue, e.booleanFalse)],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    function Do({ value: e, onChange: t, label: n }) {
        const o = Rn(),
            [r, s] = y.useState(null),
            i = y.useRef(null),
            [l, c] = y.useState(null),
            d = !!r;
        return (
            y.useEffect(() => {
                if (!d || !l) return;
                const u = new ResizeObserver(() => {
                    var _a2;
                    (_a2 = i.current) == null ? void 0 : _a2.updatePosition();
                });
                return (
                    u.observe(l),
                    () => {
                        u.disconnect();
                    }
                );
            }, [d, l]),
            a.jsxs(H, {
                sx: {
                    flex: 1,
                    minWidth: 0,
                },
                children: [
                    a.jsxs(H, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            py: 0.5,
                            cursor: 'pointer',
                            borderRadius: '6px',
                            '&:hover': {
                                backgroundColor: o.palette.action.hover,
                            },
                            transition: 'background-color 150ms',
                        },
                        onClick: u => {
                            s(u.currentTarget);
                        },
                        children: [
                            a.jsx(F, {
                                variant: 'body2',
                                color: 'text.secondary',
                                sx: {
                                    flexShrink: 0,
                                    userSelect: 'none',
                                },
                                children: n,
                            }),
                            a.jsx(H, {
                                sx: {
                                    width: 22,
                                    height: 22,
                                    borderRadius: '4px',
                                    flexShrink: 0,
                                    background: e || 'transparent',
                                    border: e
                                        ? `1px solid ${o.palette.divider}`
                                        : `1px dashed ${o.palette.text.disabled}`,
                                },
                            }),
                            e &&
                                a.jsx(Se, {
                                    size: 'small',
                                    onClick: u => {
                                        (u.stopPropagation(), t(''));
                                    },
                                    sx: {
                                        p: 0.25,
                                        ml: -0.5,
                                    },
                                    children: a.jsx($s, {
                                        fontSize: 'inherit',
                                    }),
                                }),
                        ],
                    }),
                    a.jsx(si, {
                        action: i,
                        open: d,
                        anchorEl: r,
                        onClose: () => s(null),
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'center',
                        },
                        transformOrigin: {
                            vertical: 'top',
                            horizontal: 'center',
                        },
                        slotProps: {
                            paper: {
                                elevation: 0,
                                sx: {
                                    p: '9px',
                                    borderRadius: '6px',
                                    backgroundColor: 'rgb(32,32,32)',
                                    maxHeight: 'calc(100vh - 100px)',
                                    overflow: 'auto',
                                },
                            },
                        },
                        children: a.jsx(H, {
                            ref: c,
                            sx: {
                                borderRadius: '6px',
                            },
                            children: a.jsx(ii, {
                                value: e || '#ffffff',
                                onChange: t,
                                hidePresets: true,
                                hideInputs: true,
                                hideEyeDrop: true,
                                hideInputType: true,
                            }),
                        }),
                    }),
                ],
            })
        );
    }
    function uu({ format: e, onChange: t }) {
        return a.jsxs(a.Fragment, {
            children: [
                a.jsx(F, {
                    variant: 'caption',
                    color: 'text.secondary',
                    sx: {
                        fontWeight: 500,
                    },
                    children: b.t('json_table_string_format'),
                }),
                a.jsxs(wt, {
                    size: 'small',
                    fullWidth: true,
                    children: [
                        a.jsx(Ct, {
                            children: b.t('json_table_string_case'),
                        }),
                        a.jsxs(ct, {
                            label: b.t('json_table_string_case'),
                            value: e.stringCase ?? 'none',
                            onChange: n =>
                                t({
                                    type: 'string',
                                    stringCase: n.target.value,
                                }),
                            children: [
                                a.jsx(ie, {
                                    value: 'none',
                                    children: b.t('json_table_string_case_none'),
                                }),
                                a.jsx(ie, {
                                    value: 'upper',
                                    children: b.t('json_table_string_case_upper'),
                                }),
                                a.jsx(ie, {
                                    value: 'lower',
                                    children: b.t('json_table_string_case_lower'),
                                }),
                                a.jsx(ie, {
                                    value: 'title',
                                    children: b.t('json_table_string_case_title'),
                                }),
                            ],
                        }),
                    ],
                }),
                a.jsxs(De, {
                    direction: 'row',
                    spacing: 1,
                    children: [
                        a.jsx(Re, {
                            label: b.t('json_table_string_prefix'),
                            value: e.stringPrefix ?? '',
                            onChange: n =>
                                t({
                                    type: 'string',
                                    stringPrefix: n.target.value || void 0,
                                }),
                            size: 'small',
                            fullWidth: true,
                        }),
                        a.jsx(Re, {
                            label: b.t('json_table_string_suffix'),
                            value: e.stringSuffix ?? '',
                            onChange: n =>
                                t({
                                    type: 'string',
                                    stringSuffix: n.target.value || void 0,
                                }),
                            size: 'small',
                            fullWidth: true,
                        }),
                    ],
                }),
                a.jsx(Et, {
                    control: a.jsx(hn, {
                        size: 'small',
                        checked: !!e.stringTrim,
                        onChange: n =>
                            t({
                                type: 'string',
                                stringTrim: n.target.checked,
                            }),
                    }),
                    label: b.t('json_table_string_trim'),
                }),
                a.jsx(Re, {
                    label: b.t('json_table_string_max_length'),
                    type: 'number',
                    value: e.stringMaxLength ?? '',
                    onChange: n =>
                        t({
                            type: 'string',
                            stringMaxLength: n.target.value ? parseInt(n.target.value, 10) : void 0,
                        }),
                    size: 'small',
                    fullWidth: true,
                    slotProps: {
                        htmlInput: {
                            min: 1,
                        },
                    },
                }),
                a.jsx(Re, {
                    label: b.t('json_table_string_regex'),
                    value: e.stringRegex ?? '',
                    onChange: n =>
                        t({
                            type: 'string',
                            stringRegex: n.target.value || void 0,
                        }),
                    size: 'small',
                    fullWidth: true,
                    placeholder: 'e.g. (\\d+)',
                }),
                e.stringRegex &&
                    a.jsxs(De, {
                        direction: 'row',
                        spacing: 1,
                        children: [
                            a.jsx(Re, {
                                label: b.t('json_table_string_regex_group'),
                                type: 'number',
                                value: e.stringRegexGroup ?? 0,
                                onChange: n =>
                                    t({
                                        type: 'string',
                                        stringRegexGroup: parseInt(n.target.value, 10) || 0,
                                    }),
                                size: 'small',
                                fullWidth: true,
                                slotProps: {
                                    htmlInput: {
                                        min: 0,
                                    },
                                },
                            }),
                            a.jsx(Re, {
                                label: b.t('json_table_string_regex_flags'),
                                value: e.stringRegexFlags ?? '',
                                onChange: n =>
                                    t({
                                        type: 'string',
                                        stringRegexFlags: n.target.value || void 0,
                                    }),
                                size: 'small',
                                fullWidth: true,
                                placeholder: 'i, g, m \u2026',
                            }),
                        ],
                    }),
                a.jsx(Ao, {}),
                a.jsxs(De, {
                    direction: 'row',
                    spacing: 1,
                    flexWrap: 'wrap',
                    children: [
                        a.jsx(Et, {
                            control: a.jsx(hn, {
                                size: 'small',
                                checked: e.stringFontWeight === 'bold',
                                onChange: n =>
                                    t({
                                        type: 'string',
                                        stringFontWeight: n.target.checked ? 'bold' : 'normal',
                                    }),
                            }),
                            label: a.jsx(F, {
                                variant: 'body2',
                                fontWeight: 'bold',
                                children: b.t('json_table_string_font_weight'),
                            }),
                        }),
                        a.jsx(Et, {
                            control: a.jsx(hn, {
                                size: 'small',
                                checked: e.stringFontStyle === 'italic',
                                onChange: n =>
                                    t({
                                        type: 'string',
                                        stringFontStyle: n.target.checked ? 'italic' : 'normal',
                                    }),
                            }),
                            label: a.jsx(F, {
                                variant: 'body2',
                                fontStyle: 'italic',
                                children: b.t('json_table_string_font_style'),
                            }),
                        }),
                    ],
                }),
                a.jsxs(De, {
                    direction: 'row',
                    spacing: 1,
                    children: [
                        a.jsx(Re, {
                            label: b.t('json_table_string_font_size'),
                            type: 'number',
                            value: e.stringFontSize ?? '',
                            onChange: n =>
                                t({
                                    type: 'string',
                                    stringFontSize: n.target.value ? parseInt(n.target.value, 10) : void 0,
                                }),
                            size: 'small',
                            sx: {
                                flex: 1,
                            },
                            slotProps: {
                                htmlInput: {
                                    min: 8,
                                    max: 72,
                                },
                            },
                            placeholder: 'px',
                        }),
                        a.jsx(Do, {
                            label: b.t('json_table_string_text_color'),
                            value: e.stringTextColor ?? '',
                            onChange: n =>
                                t({
                                    type: 'string',
                                    stringTextColor: n || void 0,
                                }),
                        }),
                    ],
                }),
                a.jsxs(et, {
                    variant: 'outlined',
                    sx: {
                        p: 1.5,
                        bgcolor: 'action.hover',
                    },
                    children: [
                        a.jsx(F, {
                            variant: 'caption',
                            color: 'text.secondary',
                            children: b.t('json_table_preview'),
                        }),
                        a.jsx(F, {
                            variant: 'body2',
                            sx: {
                                mt: 0.5,
                                fontFamily: 'monospace',
                                fontWeight: e.stringFontWeight,
                                fontStyle: e.stringFontStyle,
                                ...(e.stringFontSize && {
                                    fontSize: `${e.stringFontSize}px`,
                                }),
                                ...(e.stringTextColor && {
                                    color: e.stringTextColor,
                                }),
                            },
                            children: Ds(
                                'Hello World',
                                e ?? {
                                    type: 'string',
                                },
                            ),
                        }),
                    ],
                }),
            ],
        });
    }
    function he(e) {
        if (Number.isNaN(e)) throw NaN;
        if (!e) return e;
        if (e && typeof e == 'object') throw NaN;
        return e;
    }
    function du(e, t) {
        if (!Array.isArray(e) || e.length < t)
            throw {
                type: 'Invalid Arguments',
            };
        return e;
    }
    function ut(e, t = 0) {
        if (!e || t === 1 / 0 || typeof e != 'object') return e;
        if (Array.isArray(e)) {
            for (let n = 0; n < e.length; n++)
                if (typeof e[n] == 'object' && e[n]) {
                    if (t === 0)
                        throw {
                            type: 'Exceeded Allowed Depth',
                        };
                    ut(e[n], t - 1);
                }
        } else {
            const n = Object.keys(e);
            for (let o = 0; o < n.length; o++) {
                const r = e[n[o]];
                if (typeof r == 'object' && r) {
                    if (t === 0)
                        throw {
                            type: 'Exceeded Allowed Depth',
                        };
                    ut(r, t - 1);
                }
            }
        }
        return e;
    }
    function pu(e, t, n) {
        if (n || ((typeof e == 'string' || e === null) && (typeof t == 'string' || t === null))) return e;
        if (Number.isNaN(+he(e)) && t !== null) throw NaN;
        if (Number.isNaN(+he(t))) throw NaN;
        return t === null && !e ? null : e === null && !t ? 0 : e;
    }
    async function fu(e, t) {
        const n = [];
        let o = 0;
        for (const r of e) (await t(r, o++, e)) && n.push(r);
        return n;
    }
    async function gu(e, t) {
        let n = 0;
        for (const o of e) if (await t(o, n++, e)) return true;
        return false;
    }
    async function hu(e, t) {
        let n = 0;
        for (const o of e) if (!(await t(o, n++, e))) return false;
        return true;
    }
    async function mu(e, t) {
        const n = [];
        let o = 0;
        for (const r of e) n.push(await t(r, o++, e));
        return n;
    }
    async function yu(e, t, n, o = 0) {
        if (e.length === 0) {
            if (typeof n < 'u') return n;
            throw new Error('Array has no elements.');
        }
        const r = typeof n > 'u' ? 1 : 0;
        let s = ut(r ? e[0] : n, o);
        for (let i = r; i < e.length; i++) s = ut(await t(s, e[i]), o);
        return s;
    }
    const oo = {
            filter: fu,
            some: gu,
            every: hu,
            map: mu,
            reduce: yu,
        },
        re = /* @__PURE__ */ Symbol.for('json_logic_sync'),
        Te = /* @__PURE__ */ Symbol.for('json_logic_compiled'),
        Ye = /* @__PURE__ */ Symbol.for('json_logic_original'),
        Hr = /* @__PURE__ */ Symbol.for('json_logic_unfound');
    function Lt(e) {
        return typeof e == 'function'
            ? e[re] === true
            : Array.isArray(e)
              ? e.every(Lt)
              : !(e && e.asyncMethod && !e.method);
    }
    function ks(e, t = true) {
        return ((e[re] = t), e);
    }
    function jn(e) {
        return Array.isArray(e) ? e : [e];
    }
    const mo = /* @__PURE__ */ new WeakMap();
    function Vr(e) {
        return !e || typeof e != 'function' || !e.length ? 0 : (mo.has(e) || mo.set(e, vu(e)), mo.get(e));
    }
    function vu(e) {
        if (!e || typeof e != 'function' || !e.length) return 0;
        let t = e.toString();
        return (t[0] !== '(' && t[0] !== 'f') ||
            ((t = t.substring(t.indexOf('('), t.indexOf('{')).replace(/=>/g, '')), /\.{3}|=/.test(t))
            ? 0
            : e.length;
    }
    function bu(e, ...t) {
        let n = '';
        const o = this;
        for (let r = 0; r < e.length; r++)
            ((n += e[r]),
                r < t.length &&
                    (typeof t[r] == 'function'
                        ? (this.methods.push(t[r]),
                          Lt(t[r]) || (o.asyncDetected = true),
                          (n += (Lt(t[r]) ? '' : ' await ') + 'methods[' + (o.methods.length - 1) + ']'))
                        : t[r] && typeof t[r][Te] < 'u'
                          ? (n += t[r][Te])
                          : (n += me(t[r], o))));
        return {
            [Te]: n,
        };
    }
    function xu(e, t) {
        return typeof e == 'number' && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e))
            ? false
            : e == null ||
                  ['Number', 'String', 'Boolean'].includes(e.constructor.name) ||
                  (!t && e.constructor.name === 'Object');
    }
    function ro(e, t, n) {
        if (Array.isArray(e)) return e.every(o => ro(o, t, n));
        if (e && typeof e == 'object') {
            const o = Object.keys(e)[0],
                r = e[o];
            if (t.isData(e, o) || o === void 0) return true;
            if (!t.methods[o])
                throw {
                    type: 'Unknown Operator',
                    key: o,
                };
            return t.methods[o].lazy
                ? typeof t.methods[o].deterministic == 'function'
                    ? t.methods[o].deterministic(r, n)
                    : t.methods[o].deterministic
                : typeof t.methods[o].deterministic == 'function'
                  ? t.methods[o].deterministic(r, n)
                  : t.methods[o].deterministic && ro(r, t, n);
        }
        return true;
    }
    function ko(e, t) {
        if (!t.async) return true;
        if (Array.isArray(e)) return e.every(n => ko(n, t));
        if (e && typeof e == 'object') {
            const n = Object.keys(e);
            if (n.length === 0) return true;
            const o = n[0],
                r = e[o];
            return Lt(t.methods[o])
                ? t.methods[o].lazy
                    ? !!(
                          typeof t.methods[o][re] == 'function' &&
                          t.methods[o][re](e, {
                              engine: t,
                          })
                      )
                    : ko(r, t)
                : false;
        }
        return true;
    }
    function me(e, t = {}) {
        const { notTraversed: n = [], async: o, processing: r = [], values: s = [], engine: i } = t;
        function l(u, g = false) {
            return xu(u, g) ? JSON.stringify(u) : (s.push(u), `values[${s.length - 1}]`);
        }
        if (Array.isArray(e)) {
            let u = '';
            for (let g = 0; g < e.length; g++) (g > 0 && (u += ','), (u += me(e[g], t)));
            return '[' + u + ']';
        }
        let c = false;
        function d(u) {
            return ((t.asyncDetected = t.asyncDetected || c), o && c ? `await ${u}` : u);
        }
        if (e && typeof e == 'object') {
            const u = Object.keys(e),
                g = u[0];
            if (!g) return l(e);
            if (!i.methods[g] || u.length > 1) {
                if (i.isData(e, g)) return l(e, true);
                throw {
                    type: 'Unknown Operator',
                    key: g,
                };
            }
            if (!t.engine.disableInline && i.methods[g] && ro(e, i, t))
                return ko(e, i)
                    ? l((i.fallback || i).run(e), true)
                    : t.avoidInlineAsync
                      ? ((t.asyncDetected = true), `(await ${l(i.run(e))})`)
                      : (r.push(i.run(e).then(m => l(m))), `__%%%${r.length - 1}%%%__`);
            let f = e[g];
            if (
                ((!f || typeof f != 'object') && !i.methods[g].lazy && (f = [f]), i.methods[g] && i.methods[g].compile)
            ) {
                let m = i.methods[g].compile(f, t);
                if ((m[Te] && (m = m[Te]), (m || '').startsWith('await') && (t.asyncDetected = true), m !== false))
                    return m;
            }
            let p = i.methods[g].optimizeUnary ? '' : 'coerceArray';
            !p && Array.isArray(f) && f.length === 1 && !Array.isArray(f[0])
                ? (f = f[0])
                : p && Array.isArray(f) && (p = '');
            const h = [', context', ', context, above', ', context, above, engine'];
            if (typeof i.methods[g] == 'function') {
                c = !Lt(i.methods[g]);
                const m = h[Vr(i.methods[g]) - 1] || h[2];
                return d(`engine.methods["${g}"](${p}(` + me(f, t) + ')' + m + ')');
            } else {
                c = !!(o && i.methods[g] && i.methods[g].asyncMethod);
                const m = Vr(c ? i.methods[g].asyncMethod : i.methods[g].method);
                let x = h[m - 1] || h[2];
                return (
                    c &&
                        typeof i.methods[g][re] == 'function' &&
                        i.methods[g][re](f, {
                            engine: i,
                        }) &&
                        ((c = false), (x = x.replace('engine', 'engine.fallback'))),
                    i.methods[g] && !i.methods[g].lazy
                        ? d(`engine.methods["${g}"]${c ? '.asyncMethod' : '.method'}(${p}(` + me(f, t) + ')' + x + ')')
                        : (n.push(f),
                          d(
                              `engine.methods["${g}"]${c ? '.asyncMethod' : '.method'}(notTraversed[${n.length - 1}]` +
                                  x +
                                  ')',
                          ))
                );
            }
        }
        return l(e);
    }
    function so(e, t = {}) {
        Object.assign(
            t,
            Object.assign(
                {
                    notTraversed: [],
                    methods: [],
                    state: {},
                    processing: [],
                    async: t.engine.async,
                    asyncDetected: false,
                    values: [],
                    compile: bu,
                },
                t,
            ),
        );
        const n = me(e, t);
        return _u(e, n, t);
    }
    function _u(e, t, n) {
        const { engine: o, methods: r, notTraversed: s, processing: i = [], values: l } = n,
            c = [];
        i.forEach((u, g) => {
            t = t.replace(`__%%%${g}%%%__`, u);
        });
        const d = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? 'async' : ''} (context ${n.extraArguments ? ',' + n.extraArguments : ''}) => { ${t.includes('prev') ? 'let prev;' : ''} const result = ${t}; return result }`;
        return Object.assign(
            (typeof globalThis < 'u' ? globalThis : global).eval(d)(l, r, s, oo, o, c, jn, he, du, pu, ut),
            {
                [re]: !n.asyncDetected,
                deterministic: !t.includes('('),
                aboveDetected: typeof t == 'string' && t.includes(', above'),
            },
        );
    }
    const wu = () => {
            try {
                const e = {};
                return (typeof globalThis < 'u' ? globalThis : global).eval('(test) => test?.foo?.bar')(e) === void 0;
            } catch {
                return false;
            }
        },
        Jt = wu(),
        ln = /* @__PURE__ */ new Map();
    function Ut(e) {
        if (ln.has(e)) return ln.get(e);
        ln.size > 2048 && ln.clear();
        const t = Cu(e);
        return (ln.set(e, t), t);
    }
    function Cu(e, t = '.', n = '\\', o = '/') {
        const r = [];
        let s = '';
        for (let i = 0; i < e.length; i++) {
            const l = e[i];
            l === n
                ? e[i + 1] === t || e[i + 1] === o
                    ? ((s += e[i + 1]), i++)
                    : e[i + 1] === n
                      ? ((s += n), i++)
                      : (s += n)
                : l === t
                  ? (r.push(s), (s = ''))
                  : (s += l);
        }
        return (r.length !== e.length && r.push(s), r);
    }
    const Eo = {
            get: {
                [re]: true,
                method: ([e, t, n], o, r, s) => {
                    const i = n === void 0 ? null : n,
                        l = Ut(String(t));
                    for (let c = 0; c < l.length; c++) if (e == null || ((e = e[l[c]]), e === void 0)) return i;
                    return s.allowFunctions || typeof e[t] != 'function' ? e : null;
                },
                deterministic: true,
                compile: (e, t) => {
                    let n = null,
                        o = e,
                        r = null;
                    if (Array.isArray(e) && e.length <= 3) {
                        if (((r = e[0]), (o = e[1]), (n = typeof e[2] > 'u' ? null : e[2]), o && typeof o == 'object'))
                            return false;
                        o = o.toString();
                        const s = Ut(o);
                        return Jt
                            ? `((${me(r, t)})${s.map(i => `?.[${me(i, t)}]`).join('')} ?? ${me(n, t)})`
                            : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${s.reduce((i, l) => `(${i}||0)[${JSON.stringify(l)}]`, `(${me(r, t)}||0)`)}, ${me(n, t)}))`;
                    }
                    return false;
                },
            },
            var: {
                [Ye]: true,
                [re]: true,
                method: (e, t, n, o) => {
                    let r;
                    Array.isArray(e) && ((r = e[1]), (e = e[0]));
                    let s = 0;
                    for (; typeof e == 'string' && e.startsWith('../') && s < n.length; )
                        ((t = n[s++]),
                            (e = e.substring(3)),
                            s === n.length && Array.isArray(t) && ((s = 0), (n = t), (t = n[s++])));
                    const i = r === void 0 ? null : r;
                    if (typeof e > 'u' || e === '' || e === null)
                        return o.allowFunctions || typeof t != 'function' ? t : null;
                    const l = Ut(String(e));
                    for (let c = 0; c < l.length; c++) if (t == null || ((t = t[l[c]]), t === void 0)) return i;
                    return o.allowFunctions || typeof t != 'function' ? t : null;
                },
                deterministic: (e, t) => t.insideIterator && !String(e).includes('../../'),
                optimizeUnary: true,
                compile: (e, t) => {
                    let n = e,
                        o = null;
                    if (!n || typeof e == 'string' || typeof e == 'number' || (Array.isArray(e) && e.length <= 2)) {
                        if (
                            (Array.isArray(e) && ((n = e[0]), (o = typeof e[1] > 'u' ? null : e[1])),
                            n === '../index' && t.iteratorCompile)
                        )
                            return 'index';
                        if (typeof n > 'u' || n === null || n === '') return 'context';
                        if ((typeof n != 'string' && typeof n != 'number') || ((n = n.toString()), n.includes('../')))
                            return false;
                        const r = Ut(n);
                        if (!Jt) {
                            const i = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${r.reduce((l, c) => `(${l}||0)[${JSON.stringify(c)}]`, '(context||0)')}, ${me(o, t)})))`;
                            return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
                        }
                        const s = `(context${r.map(i => `?.[${JSON.stringify(i)}]`).join('')} ?? ${me(o, t)})`;
                        return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
                    }
                    return false;
                },
            },
            missing: {
                [re]: true,
                optimizeUnary: false,
                method: (e, t) => {
                    if (!e.length) return [];
                    const n = [];
                    for (let o = 0; o < e.length; o++) {
                        const r = Ut(String(e[o]));
                        let s = t,
                            i = true;
                        for (let l = 0; l < r.length; l++) {
                            if (!s) {
                                i = false;
                                break;
                            }
                            if (((s = s[r[l]]), s === void 0)) {
                                i = false;
                                break;
                            }
                        }
                        i || n.push(e[o]);
                    }
                    return n;
                },
                compile: (e, t) =>
                    Array.isArray(e)
                        ? e.length === 0
                            ? t.compile`[]`
                            : e.length === 1 && typeof e[0] == 'string' && !e[0].includes('.')
                              ? t.compile`(context || 0)[${e[0]}] === undefined ? [${e[0]}] : []`
                              : e.length === 2 &&
                                  typeof e[0] == 'string' &&
                                  typeof e[1] == 'string' &&
                                  !e[0].includes('.') &&
                                  !e[1].includes('.')
                                ? t.compile`(context || 0)[${e[0]}] === undefined ? (context || 0)[${e[1]}] === undefined ? [${e[0]}, ${e[1]}] : [${e[0]}] : (context || 0)[${e[1]}] === undefined ? [${e[1]}] : []`
                                : false
                        : false,
                deterministic: (e, t) => !!(Array.isArray(e) && e.length === 0),
            },
            missing_some: {
                [re]: true,
                optimizeUnary: false,
                method: ([e, t], n) => {
                    const o = Eo.missing.method(t, n);
                    return t.length - o.length >= e ? [] : o;
                },
                compile: ([e, t], n) => {
                    if (!Array.isArray(t)) return false;
                    let o = Eo.missing.compile(t, n);
                    return (
                        o ||
                            (o = n.compile`engine.methods.missing.method(${{
                                [Te]: JSON.stringify(t),
                            }}, context)`),
                        n.compile`${t.length} - (prev = ${o}).length < ${e} ? prev : []`
                    );
                },
                deterministic: false,
            },
        },
        Su = {
            ...Eo,
        },
        oe = {
            type: 'Invalid Arguments',
        };
    function je(e, t, n) {
        if (Array.isArray(e)) return e.every(o => je(o, t, n));
        if (e && typeof e == 'object') {
            const o = Object.keys(e)[0],
                r = e[o];
            if (t.isData(e, o) || o === void 0) return true;
            if (!t.methods[o])
                throw {
                    type: 'Unknown Operator',
                    key: o,
                };
            return t.methods[o].lazy
                ? typeof t.methods[o].deterministic == 'function'
                    ? t.methods[o].deterministic(r, n)
                    : t.methods[o].deterministic
                : typeof t.methods[o].deterministic == 'function'
                  ? t.methods[o].deterministic(r, n)
                  : t.methods[o].deterministic && je(r, t, n);
        }
        return true;
    }
    function Ne(e, t, n) {
        if (Array.isArray(e)) return e.every(o => Ne(o, t, n));
        if (e && typeof e == 'object') {
            const o = Object.keys(e)[0],
                r = e[o];
            if (t.isData(e, o) || o === void 0) return true;
            if (!t.methods[o])
                throw {
                    type: 'Unknown Operator',
                    key: o,
                };
            return t.methods[o].lazy
                ? typeof t.methods[o][re] == 'function'
                    ? t.methods[o][re](r, n)
                    : t.methods[o][re]
                : typeof t.methods[o][re] == 'function'
                  ? t.methods[o][re](r, n)
                  : t.methods[o][re] && Ne(r, t, n);
        }
        return true;
    }
    function de(e, t, n, o) {
        if (!e || typeof e != 'object') return e;
        if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
            const r = t.optimizedMap.get(e);
            return typeof r == 'function' ? r(n, o) : r;
        }
        return t.run(e, n, {
            above: o,
        });
    }
    const an = Qn('every', true),
        ne = {
            '+': e => {
                if (!e) return 0;
                if (typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean') return he(+e);
                if (typeof e == 'object' && !Array.isArray(e)) throw NaN;
                let t = 0;
                for (let n = 0; n < e.length; n++) {
                    if (e[n] && typeof e[n] == 'object') throw NaN;
                    t += +e[n];
                }
                if (Number.isNaN(t)) throw NaN;
                return t;
            },
            '*': e => {
                if (e.length === 0) return 1;
                let t = 1;
                for (let n = 0; n < e.length; n++) {
                    if (e[n] && typeof e[n] == 'object') throw NaN;
                    t *= +e[n];
                }
                if (Number.isNaN(t)) throw NaN;
                return t;
            },
            '/': e => {
                if (e[0] && typeof e[0] == 'object') throw NaN;
                if (e.length === 0) throw oe;
                if (e.length === 1) {
                    if (!+e[0] || (e[0] && typeof e[0] == 'object')) throw NaN;
                    return 1 / +e[0];
                }
                let t = +e[0];
                for (let n = 1; n < e.length; n++) {
                    if ((e[n] && typeof e[n] == 'object') || !e[n]) throw NaN;
                    t /= +e[n];
                }
                if (Number.isNaN(t) || t === 1 / 0) throw NaN;
                return t;
            },
            '-': e => {
                if (!e) return 0;
                if (typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean') return he(-e);
                if (typeof e == 'object' && !Array.isArray(e)) throw NaN;
                if (e[0] && typeof e[0] == 'object') throw NaN;
                if (e.length === 0) throw oe;
                if (e.length === 1) return -e[0];
                let t = e[0];
                for (let n = 1; n < e.length; n++) {
                    if (e[n] && typeof e[n] == 'object') throw NaN;
                    t -= +e[n];
                }
                if (Number.isNaN(t)) throw NaN;
                return t;
            },
            '%': e => {
                if (e[0] && typeof e[0] == 'object') throw NaN;
                if (e.length < 2) throw oe;
                let t = +e[0];
                for (let n = 1; n < e.length; n++) {
                    if (e[n] && typeof e[n] == 'object') throw NaN;
                    t %= +e[n];
                }
                if (Number.isNaN(t)) throw NaN;
                return t;
            },
            throw: e => {
                throw (
                    Array.isArray(e) && (e = e[0]),
                    typeof e == 'object'
                        ? e
                        : {
                              type: e,
                          }
                );
            },
            max: e => {
                if (!e.length || typeof e[0] != 'number') throw oe;
                let t = e[0];
                for (let n = 1; n < e.length; n++) {
                    if (typeof e[n] != 'number') throw oe;
                    e[n] > t && (t = e[n]);
                }
                return t;
            },
            min: e => {
                if (!e.length || typeof e[0] != 'number') throw oe;
                let t = e[0];
                for (let n = 1; n < e.length; n++) {
                    if (typeof e[n] != 'number') throw oe;
                    e[n] < t && (t = e[n]);
                }
                return t;
            },
            in: ([e, t]) => (t || []).includes(e),
            preserve: {
                lazy: true,
                method: ks(e => e, true),
                [re]: () => true,
            },
            if: {
                [Ye]: true,
                method: (e, t, n, o) => {
                    if (!Array.isArray(e)) throw oe;
                    if (e.length === 1) return de(e[0], o, t, n);
                    if (e.length < 2) return null;
                    ((e = [...e]), e.length % 2 !== 1 && e.push(null));
                    const r = e.pop();
                    for (; e.length; ) {
                        const s = e.shift(),
                            i = e.shift(),
                            l = de(s, o, t, n);
                        if (o.truthy(l)) return de(i, o, t, n);
                    }
                    return de(r, o, t, n);
                },
                [re]: (e, t) => Ne(e, t.engine, t),
                deterministic: (e, t) => je(e, t.engine, t),
                asyncMethod: async (e, t, n, o) => {
                    if (!Array.isArray(e)) throw oe;
                    if (e.length === 1)
                        return o.run(e[0], t, {
                            above: n,
                        });
                    if (e.length < 2) return null;
                    ((e = [...e]), e.length % 2 !== 1 && e.push(null));
                    const r = e.pop();
                    for (; e.length; ) {
                        const s = e.shift(),
                            i = e.shift(),
                            l = await o.run(s, t, {
                                above: n,
                            });
                        if (o.truthy(l))
                            return o.run(i, t, {
                                above: n,
                            });
                    }
                    return o.run(r, t, {
                        above: n,
                    });
                },
                lazy: true,
            },
            '<': xt('<', (e, t) => e < t),
            '<=': xt('<=', (e, t) => e <= t),
            '>': xt('>', (e, t) => e > t),
            '>=': xt('>=', (e, t) => e >= t),
            '==': xt('==', (e, t) => e == t),
            '===': xt('===', (e, t) => e === t),
            '!=': xt('!=', (e, t) => e != t),
            '!==': xt('!==', (e, t) => e !== t),
            or: {
                [re]: (e, t) => Ne(e, t.engine, t),
                method: (e, t, n, o) => {
                    if (!Array.isArray(e)) throw oe;
                    if (!e.length) return null;
                    let r;
                    for (let s = 0; s < e.length; s++) if (((r = de(e[s], o, t, n)), o.truthy(r))) return r;
                    return r;
                },
                asyncMethod: async (e, t, n, o) => {
                    if (!Array.isArray(e)) throw oe;
                    if (!e.length) return null;
                    let r;
                    for (let s = 0; s < e.length; s++)
                        if (
                            ((r = await o.run(e[s], t, {
                                above: n,
                            })),
                            o.truthy(r))
                        )
                            return r;
                    return r;
                },
                deterministic: (e, t) => je(e, t.engine, t),
                compile: (e, t) => {
                    let n = t.compile``;
                    if (Array.isArray(e)) {
                        if (!e.length) return t.compile`null`;
                        for (let o = 0; o < e.length; o++) n = t.compile`${n} engine.truthy(prev = ${e[o]}) ? prev : `;
                        return ((n = t.compile`${n} prev`), n);
                    }
                    return false;
                },
                lazy: true,
            },
            '??': {
                [re]: (e, t) => Ne(e, t.engine, t),
                method: (e, t, n, o) => {
                    if (!Array.isArray(e)) throw oe;
                    let r;
                    for (let s = 0; s < e.length; s++) if (((r = de(e[s], o, t, n)), r != null)) return r;
                    return r === void 0 ? null : r;
                },
                asyncMethod: async (e, t, n, o) => {
                    if (!Array.isArray(e)) throw oe;
                    let r;
                    for (let s = 0; s < e.length; s++)
                        if (
                            ((r = await o.run(e[s], t, {
                                above: n,
                            })),
                            r != null)
                        )
                            return r;
                    return r === void 0 ? null : r;
                },
                deterministic: (e, t) => je(e, t.engine, t),
                compile: (e, t) =>
                    Jt
                        ? Array.isArray(e) && e.length
                            ? `(${e
                                  .map((n, o) => {
                                      const r = me(n, t);
                                      return Array.isArray(n) || !n || typeof n != 'object' || o === e.length - 1
                                          ? r
                                          : '(' + r + ')';
                                  })
                                  .join(' ?? ')})`
                            : `(${me(e, t)}).reduce((a,b) => (a) ?? b, null)`
                        : false,
                lazy: true,
            },
            try: {
                [re]: (e, t) => Ne(e, t.engine, t),
                method: (e, t, n, o) => {
                    Array.isArray(e) || (e = [e]);
                    let r, s;
                    for (let i = 0; i < e.length; i++)
                        try {
                            return (
                                s
                                    ? (r = de(
                                          e[i],
                                          o,
                                          {
                                              type: s.type || s.error || s.message || s.constructor.name,
                                          },
                                          [null, t, n],
                                      ))
                                    : (r = de(e[i], o, t, n)),
                                r
                            );
                        } catch (l) {
                            Number.isNaN(l)
                                ? (s = {
                                      message: 'NaN',
                                  })
                                : (s = l);
                        }
                    throw s;
                },
                asyncMethod: async (e, t, n, o) => {
                    Array.isArray(e) || (e = [e]);
                    let r, s;
                    for (let i = 0; i < e.length; i++)
                        try {
                            return (
                                s
                                    ? (r = await o.run(
                                          e[i],
                                          {
                                              type: s.type || s.error || s.message || s.constructor.name,
                                          },
                                          {
                                              above: [null, t, n],
                                          },
                                      ))
                                    : (r = await o.run(e[i], t, {
                                          above: n,
                                      })),
                                r
                            );
                        } catch (l) {
                            Number.isNaN(l)
                                ? (s = {
                                      message: 'NaN',
                                  })
                                : (s = l);
                        }
                    throw s;
                },
                deterministic: (e, t) =>
                    je(e[0], t.engine, {
                        ...t,
                        insideTry: true,
                    }) &&
                    je(e, t.engine, {
                        ...t,
                        insideIterator: true,
                        insideTry: true,
                    }),
                lazy: true,
                compile: (e, t) => {
                    if (!Array.isArray(e) || !e.length) return false;
                    let n;
                    try {
                        '+' in e[0] && e.length > 1
                            ? (n = t.compile`((context, above) => { try { const precoerceNumber = a => a; return Number.isNaN(prev = ${e[0]}) ? ${e[1]} : prev  } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; `)
                            : (n = t.compile`((context, above) => { try { return ${e[0]} } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; `);
                    } catch (o) {
                        (Number.isNaN(o) &&
                            (o = {
                                type: 'NaN',
                            }),
                            (n = {
                                [Te]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(o)}; `,
                            }));
                    }
                    if (e.length > 1)
                        for (let o = 1; o < e.length; o++)
                            try {
                                o === e.length - 1
                                    ? (n = t.compile`${n} try { return ${e[o]} } catch(err) { throw err; } `)
                                    : (n = t.compile`${n} try { return ${e[o]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `);
                            } catch (r) {
                                (Number.isNaN(r) &&
                                    (r = {
                                        type: 'NaN',
                                    }),
                                    o === e.length - 1
                                        ? (n = t.compile`${n} throw ${{
                                              [Te]: JSON.stringify(r),
                                          }} `)
                                        : (n = t.compile`${n} ${{
                                              [Te]: `context = ${JSON.stringify(r)};`,
                                          }}`));
                            }
                    else
                        n[Te].includes('err') ? (n = t.compile`${n} throw err;`) : (n = t.compile`${n} throw context;`);
                    return (
                        (n = t.compile`${n} } })(context, above)`),
                        n[Te].includes('await') && (n[Te] = n[Te].replace('((context', 'await (async (context')),
                        n
                    );
                },
            },
            and: {
                [re]: (e, t) => Ne(e, t.engine, t),
                method: (e, t, n, o) => {
                    if (!Array.isArray(e)) throw oe;
                    if (!e.length) return null;
                    let r;
                    for (let s = 0; s < e.length; s++) if (((r = de(e[s], o, t, n)), !o.truthy(r))) return r;
                    return r;
                },
                asyncMethod: async (e, t, n, o) => {
                    if (!Array.isArray(e)) throw oe;
                    if (!e.length) return null;
                    let r;
                    for (let s = 0; s < e.length; s++)
                        if (
                            ((r = await o.run(e[s], t, {
                                above: n,
                            })),
                            !o.truthy(r))
                        )
                            return r;
                    return r;
                },
                lazy: true,
                deterministic: (e, t) => je(e, t.engine, t),
                compile: (e, t) => {
                    let n = t.compile``;
                    if (Array.isArray(e)) {
                        if (!e.length) return t.compile`null`;
                        for (let o = 0; o < e.length; o++) n = t.compile`${n} !engine.truthy(prev = ${e[o]}) ? prev : `;
                        return ((n = t.compile`${n} prev`), n);
                    }
                    return false;
                },
            },
            substr: ([e, t, n]) => {
                if (n < 0) {
                    const o = e.substr(t);
                    return o.substr(0, o.length + n);
                }
                return e.substr(t, n);
            },
            length: {
                method: (e, t, n, o) => {
                    if (!e) throw oe;
                    const r = de(e, o, t, n),
                        s = Array.isArray(e) ? r[0] : r;
                    if (typeof s == 'string' || Array.isArray(s)) return s.length;
                    if (s && typeof s == 'object') return Object.keys(s).length;
                    throw oe;
                },
                asyncMethod: async (e, t, n, o) => {
                    if (!e) throw oe;
                    const r = await de(e, o, t, n),
                        s = Array.isArray(e) ? r[0] : r;
                    if (typeof s == 'string' || Array.isArray(s)) return s.length;
                    if (s && typeof s == 'object') return Object.keys(s).length;
                    throw oe;
                },
                deterministic: (e, t) => je(e, t.engine, t),
                lazy: true,
            },
            exists: {
                method: (e, t, n, o) => ne.val.method(e, t, n, o, Hr) !== Hr,
                deterministic: false,
            },
            val: {
                [Ye]: true,
                [re]: true,
                method: (e, t, n, o, r = null) => {
                    if ((Array.isArray(e) && e.length === 1 && !Array.isArray(e[0]) && (e = e[0]), !Array.isArray(e))) {
                        if (r && !(t && e in t)) return r;
                        if (t == null) return null;
                        const l = t[e];
                        return typeof l > 'u' ? null : l;
                    }
                    let s = t,
                        i = 0;
                    if (Array.isArray(e[0]) && e[0].length === 1) {
                        i++;
                        const l = +Math.abs(e[0][0]);
                        let c = 0;
                        for (let d = 0; d < l; d++)
                            ((s = n[c++]), d === n.length - 1 && Array.isArray(s) && ((n = s), (s = s[0]), (c = 1)));
                    }
                    for (let l = i; l < e.length; l++) {
                        if (r && !(s && e[l] in s)) return r;
                        if (s == null) return null;
                        s = s[e[l]];
                    }
                    return typeof s > 'u' || (typeof s == 'function' && !o.allowFunctions) ? r : s;
                },
                optimizeUnary: true,
                deterministic: (e, t) =>
                    t.insideIterator ? !(Array.isArray(e) && Array.isArray(e[0]) && Math.abs(e[0][0]) >= 2) : false,
                compile: (e, t) => {
                    function n(o) {
                        let r;
                        return (
                            Jt
                                ? (r = t.compile`(${o} ?? null)`)
                                : (r = t.compile`(((a) => a === null || a === undefined ? null : a)(${o}))`),
                            t.engine.allowFunctions ||
                                (r = t.compile`(typeof (prev = ${r}) === 'function' ? null : prev)`),
                            r
                        );
                    }
                    if (typeof e == 'object' && !Array.isArray(e))
                        if (Ne(e, t.engine, t) && je(e, t.engine, t) && !t.engine.disableInline)
                            e = (t.engine.fallback || t.engine).run(e, t.context, {
                                above: t.above,
                            });
                        else return false;
                    if (Array.isArray(e) && Array.isArray(e[0]))
                        return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === 'index'
                            ? t.compile`index`
                            : false;
                    if ((Array.isArray(e) && e.length === 1 && (e = e[0]), e === null)) return n(t.compile`context`);
                    if (!Array.isArray(e)) return n(Jt ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
                    if (Array.isArray(e)) {
                        let o = t.compile`context`;
                        for (let r = 0; r < e.length; r++)
                            e[r] !== null &&
                                (Jt ? (o = t.compile`${o}?.[${e[r]}]`) : (o = t.compile`(${o}|| 0)[${e[r]}]`));
                        return n(t.compile`(${o})`);
                    }
                    return false;
                },
            },
            map: Qn('map'),
            some: {
                ...Qn('some', true),
                method: (e, t, n, o) => {
                    if (!Array.isArray(e)) throw oe;
                    let [r, s] = e;
                    r = de(r, o, t, n) || [];
                    for (let i = 0; i < r.length; i++) if (o.truthy(de(s, o, r[i], [r, t, n]))) return true;
                    return false;
                },
            },
            all: {
                [re]: an[re],
                method: (e, t, n, o) => {
                    if (!Array.isArray(e)) throw oe;
                    const r = de(e[0], o, t, n) || [];
                    if (Array.isArray(r) && r.length === 0) return false;
                    const s = e[1];
                    for (let i = 0; i < r.length; i++) if (!o.truthy(de(s, o, r[i], [r, t, n]))) return false;
                    return true;
                },
                asyncMethod: async (e, t, n, o) => {
                    if (Array.isArray(e)) {
                        const r = await o.run(e[0], t, n);
                        if (Array.isArray(r) && r.length === 0) return false;
                    }
                    return an.asyncMethod(e, t, n, o);
                },
                compile: (e, t) =>
                    Array.isArray(e)
                        ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${an.compile(
                              [
                                  {
                                      [Te]: 'prev',
                                  },
                                  e[1],
                              ],
                              t,
                          )}`
                        : false,
                deterministic: an.deterministic,
                lazy: an.lazy,
            },
            none: {
                [re]: (e, t) => Ne(e, t.engine, t),
                lazy: true,
                method: (e, t, n, o) => !ne.some.method(e, t, n, o),
                asyncMethod: async (e, t, n, o) => !(await ne.some.asyncMethod(e, t, n, o)),
                compile: (e, t) => {
                    const n = ne.some.compile(e, t);
                    return n ? t.compile`!(${n})` : false;
                },
            },
            merge: e => {
                if (!Array.isArray(e)) return [e];
                const t = [];
                for (let n = 0; n < e.length; n++)
                    if (Array.isArray(e[n])) for (let o = 0; o < e[n].length; o++) t.push(e[n][o]);
                    else t.push(e[n]);
                return t;
            },
            filter: Qn('filter', true),
            reduce: {
                deterministic: (e, t) =>
                    je(e[0], t.engine, t) &&
                    je(e[1], t.engine, {
                        ...t,
                        insideIterator: true,
                    }),
                compile: (e, t) => {
                    if (!Array.isArray(e)) throw oe;
                    const { async: n } = t;
                    let [o, r, s] = e;
                    ((o = me(o, t)), typeof s < 'u' && (s = me(s, t)));
                    const i = {
                        ...t,
                        extraArguments: 'above',
                        avoidInlineAsync: true,
                    };
                    r = so(r, i);
                    const l = r.aboveDetected ? '[null, context, above]' : 'null',
                        c = t.engine.options.maxDepth === 1 / 0 ? '' : 'assertAllowedDepth';
                    return (
                        t.methods.push(r),
                        n && (!Lt(r) || o.includes('await'))
                            ? ((t.asyncDetected = true),
                              typeof s < 'u'
                                  ? `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${s}, ${t.engine.options.maxDepth})`
                                  : `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`)
                            : typeof s < 'u'
                              ? `(${o} || []).reduce((a,b) => ${c}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${c}(${s}))`
                              : `(${o} || []).reduce((a,b) => ${c}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`
                    );
                },
                method: (e, t, n, o) => {
                    if (!Array.isArray(e)) throw oe;
                    let [r, s, i] = e;
                    ((i = ut(de(i, o, t, n), o.options.maxDepth)), (r = de(r, o, t, n) || []));
                    let l = (c, d) =>
                        ut(
                            o.run(
                                s,
                                {
                                    accumulator: c,
                                    current: d,
                                },
                                {
                                    above: [r, t, n],
                                },
                            ),
                            o.options.maxDepth,
                        );
                    if (o.optimizedMap.has(s) && typeof o.optimizedMap.get(s) == 'function') {
                        const c = o.optimizedMap.get(s);
                        l = (d, u) =>
                            ut(
                                c(
                                    {
                                        accumulator: d,
                                        current: u,
                                    },
                                    [r, t, n],
                                ),
                                o.options.maxDepth,
                            );
                    }
                    return typeof i > 'u' ? r.reduce(l) : r.reduce(l, i);
                },
                [re]: (e, t) => Ne(e, t.engine, t),
                asyncMethod: async (e, t, n, o) => {
                    if (!Array.isArray(e)) throw oe;
                    let [r, s, i] = e;
                    return (
                        (i = ut(
                            await o.run(i, t, {
                                above: n,
                            }),
                            o.options.maxDepth,
                        )),
                        (r =
                            (await o.run(r, t, {
                                above: n,
                            })) || []),
                        oo.reduce(
                            r,
                            (l, c) =>
                                o.run(
                                    s,
                                    {
                                        accumulator: l,
                                        current: c,
                                    },
                                    {
                                        above: [r, t, n],
                                    },
                                ),
                            i,
                            o.options.maxDepth,
                        )
                    );
                },
                lazy: true,
            },
            '!': (e, t, n, o) => (Array.isArray(e) ? !o.truthy(e[0]) : !o.truthy(e)),
            '!!': (e, t, n, o) => !!(Array.isArray(e) ? o.truthy(e[0]) : o.truthy(e)),
            cat: {
                [Ye]: true,
                [re]: true,
                method: e => {
                    if (typeof e == 'string') return e;
                    if (!Array.isArray(e)) return e.toString();
                    let t = '';
                    for (let n = 0; n < e.length; n++) e[n] === null || e[n] === void 0 || (t += e[n]);
                    return t;
                },
                deterministic: true,
                optimizeUnary: true,
                compile: (e, t) => {
                    if (typeof e == 'string') return JSON.stringify(e);
                    if (typeof e == 'number') return '"' + JSON.stringify(e) + '"';
                    if (!Array.isArray(e)) return false;
                    let n = t.compile`''`;
                    for (let o = 0; o < e.length; o++) n = t.compile`${n} + ${e[o]}`;
                    return t.compile`(${n})`;
                },
            },
            keys: ([e]) => (typeof e == 'object' ? Object.keys(e) : []),
            pipe: {
                lazy: true,
                [re]: (e, t) => Ne(e, t.engine, t),
                method: (e, t, n, o) => {
                    if (!Array.isArray(e)) throw new Error('Data for pipe must be an array');
                    let r = o.run(e[0], t, {
                        above: [e, t, n],
                    });
                    for (let s = 1; s < e.length; s++)
                        r = o.run(e[s], r, {
                            above: [e, t, n],
                        });
                    return r;
                },
                asyncMethod: async (e, t, n, o) => {
                    if (!Array.isArray(e)) throw new Error('Data for pipe must be an array');
                    let r = await o.run(e[0], t, {
                        above: [e, t, n],
                    });
                    for (let s = 1; s < e.length; s++)
                        r = await o.run(e[s], r, {
                            above: [e, t, n],
                        });
                    return r;
                },
                compile: (e, t) => {
                    let n = t.compile`${e[0]}`;
                    for (let o = 1; o < e.length; o++)
                        n = t.compile`${so(e[o], {
                            ...t,
                            extraArguments: 'above',
                        })}(${n}, [null, context, above])`;
                    return n;
                },
                deterministic: (e, t) => {
                    if (!Array.isArray(e)) return false;
                    e = [...e];
                    const n = e.shift();
                    return (
                        je(n, t.engine, t) &&
                        je(e, t.engine, {
                            ...t,
                            insideIterator: true,
                        })
                    );
                },
            },
            eachKey: {
                lazy: true,
                [re]: (e, t) => Ne(Object.values(e[Object.keys(e)[0]]), t.engine, t),
                method: (e, t, n, o) =>
                    Object.keys(e).reduce((s, i) => {
                        const l = e[i];
                        return (
                            Object.defineProperty(s, i, {
                                enumerable: true,
                                value: o.run(l, t, {
                                    above: n,
                                }),
                            }),
                            s
                        );
                    }, {}),
                deterministic: (e, t) => {
                    if (e && typeof e == 'object') return Object.values(e).every(n => je(n, t.engine, t));
                    throw oe;
                },
                compile: (e, t) => {
                    if (e && typeof e == 'object')
                        return `({ ${Object.keys(e)
                            .reduce((o, r) => (o.push(`${JSON.stringify(r)}: ${me(e[r], t)}`), o), [])
                            .join(',')} })`;
                    throw oe;
                },
                asyncMethod: async (e, t, n, o) =>
                    await oo.reduce(
                        Object.keys(e),
                        async (s, i) => {
                            const l = e[i];
                            return (
                                Object.defineProperty(s, i, {
                                    enumerable: true,
                                    value: await o.run(l, t, {
                                        above: n,
                                    }),
                                }),
                                s
                            );
                        },
                        {},
                        1 / 0,
                    ),
            },
        };
    function xt(e, t) {
        const n = {
                [Te]: e,
            },
            o = e.length === 3;
        return {
            method: (r, s, i, l) => {
                if (!Array.isArray(r) || r.length <= 1) throw oe;
                if (r.length === 2) {
                    const d = de(r[0], l, s, i),
                        u = de(r[1], l, s, i);
                    if (o || ((typeof d == 'string' || d === null) && (typeof u == 'string' || u === null)))
                        return t(d, u);
                    if (Number.isNaN(+he(d))) throw NaN;
                    if (Number.isNaN(+he(u)) && d !== null) throw NaN;
                    return t(+d, +u);
                }
                let c = de(r[0], l, s, i);
                for (let d = 1; d < r.length; d++) {
                    const u = de(r[d], l, s, i);
                    if (
                        (o || ((typeof u == 'string' || u === null) && (typeof c == 'string' || c === null))) &&
                        !t(c, u)
                    )
                        return false;
                    if (Number.isNaN(+he(u)) && c !== null) throw NaN;
                    if (d === 1 && Number.isNaN(+he(c))) throw NaN;
                    if (!t(+c, +u)) return false;
                    c = u;
                }
                return true;
            },
            asyncMethod: async (r, s, i, l) => {
                if (!Array.isArray(r) || r.length <= 1) throw oe;
                if (r.length === 2) {
                    const d = await de(r[0], l, s, i),
                        u = await de(r[1], l, s, i);
                    if (o || ((typeof d == 'string' || d === null) && (typeof u == 'string' || u === null)))
                        return t(d, u);
                    if (Number.isNaN(+he(d))) throw NaN;
                    if (Number.isNaN(+he(u)) && d !== null) throw NaN;
                    return t(+d, +u);
                }
                let c = await de(r[0], l, s, i);
                for (let d = 1; d < r.length; d++) {
                    const u = await de(r[d], l, s, i);
                    if (
                        (o || ((typeof u == 'string' || u === null) && (typeof c == 'string' || c === null))) &&
                        !t(c, u)
                    )
                        return false;
                    if (Number.isNaN(+he(u)) && c !== null) throw NaN;
                    if (d === 1 && Number.isNaN(+he(c))) throw NaN;
                    if (!t(+c, +u)) return false;
                    c = u;
                }
                return true;
            },
            compile: (r, s) => {
                if (!Array.isArray(r) || r.length < 2) return false;
                if (r.length === 2) return s.compile`((prev = ${r[0]}) ${n} compareCheck(${r[1]}, prev, ${o}))`;
                let i = s.compile`((prev = ${r[0]}) ${n} (prev = compareCheck(${r[1]}, prev, ${o})))`;
                for (let l = 2; l < r.length; l++)
                    i = s.compile`(${i} && prev ${n} (prev = compareCheck(${r[l]}, prev, ${o})))`;
                return i;
            },
            [Ye]: true,
            [re]: (r, s) => Ne(r, s.engine, s),
            deterministic: (r, s) => je(r, s.engine, s),
            lazy: true,
        };
    }
    function Qn(e, t = false) {
        return {
            deterministic: (n, o) =>
                je(n[0], o.engine, o) &&
                je(n[1], o.engine, {
                    ...o,
                    insideIterator: true,
                }),
            [Ye]: true,
            [re]: (n, o) => Ne(n, o.engine, o),
            method: (n, o, r, s) => {
                if (!Array.isArray(n)) throw oe;
                let [i, l] = n;
                return (
                    (i = de(i, s, o, r) || []),
                    i[e]((c, d) => {
                        if (!l || typeof l != 'object') return t ? s.truthy(l) : l;
                        const u = de(l, s, c, [
                            {
                                iterator: i,
                                index: d,
                            },
                            o,
                            r,
                        ]);
                        return t ? s.truthy(u) : u;
                    })
                );
            },
            asyncMethod: async (n, o, r, s) => {
                if (!Array.isArray(n)) throw oe;
                let [i, l] = n;
                return (
                    (i =
                        (await s.run(i, o, {
                            above: r,
                        })) || []),
                    oo[e](i, async (c, d) => {
                        if (!l || typeof l != 'object') return t ? s.truthy(l) : l;
                        const u = await s.run(l, c, {
                            above: [
                                {
                                    iterator: i,
                                    index: d,
                                },
                                o,
                                r,
                            ],
                        });
                        return t ? s.truthy(u) : u;
                    })
                );
            },
            compile: (n, o) => {
                if (!Array.isArray(n)) throw oe;
                const { async: r } = o,
                    [s, i] = n,
                    l = {
                        ...o,
                        avoidInlineAsync: true,
                        iteratorCompile: true,
                        extraArguments: 'index, above',
                    },
                    c = so(i, l),
                    d = c.aboveDetected ? o.compile`[{ iterator: z, index: x }, context, above]` : o.compile`null`,
                    u = t ? o.compile`engine.truthy` : o.compile``;
                return r && !Lt(c)
                    ? ((o.asyncDetected = true),
                      o.compile`await asyncIterators[${e}](${s} || [], async (i, x, z) => ${u}(${c}(i, x, ${d})))`)
                    : o.compile`(${s} || [])[${e}]((i, x, z) => ${u}(${c}(i, x, ${d})))`;
            },
            lazy: true,
        };
    }
    ne.every = ne.all;
    ne['?:'] = ne.if;
    Object.keys(ne).forEach(e => {
        (typeof ne[e] == 'function' && (ne[e][re] = true),
            (ne[e].deterministic = typeof ne[e].deterministic > 'u' ? true : ne[e].deterministic));
    });
    ne.if.compile = function (e, t) {
        if (!Array.isArray(e) || e.length < 3) return false;
        ((e = [...e]), e.length % 2 !== 1 && e.push(null));
        const n = e.pop();
        let o = t.compile``;
        for (; e.length; ) {
            const r = e.shift(),
                s = e.shift();
            o = t.compile`${o} engine.truthy(${r}) ? ${s} : `;
        }
        return t.compile`(${o} ${n})`;
    };
    function An(e, t) {
        if (Array.isArray(e)) return he(NaN);
        if (typeof e == 'number' || typeof e == 'boolean') return '+' + me(e, t);
        if (typeof e == 'string') return '+' + he(+e);
        const n = me(e, t);
        return /^-?\d+(\.\d*)?$/.test(n)
            ? '+' + n
            : n.startsWith('"')
              ? '+' + he(+JSON.parse(n))
              : n === 'true'
                ? '1'
                : n === 'false' || n === 'null'
                  ? '0'
                  : n.startsWith('[') || n.startsWith('{')
                    ? he(NaN)
                    : `(+precoerceNumber(${n}))`;
    }
    ne['+'].compile = function (e, t) {
        return Array.isArray(e)
            ? e.length === 0
                ? '(+0)'
                : `precoerceNumber(${e.map(n => An(n, t)).join(' + ')})`
            : typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean'
              ? `precoerceNumber(+${me(e, t)})`
              : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
    };
    ne['%'].compile = function (e, t) {
        if (Array.isArray(e)) {
            if (e.length < 2) throw oe;
            return `precoerceNumber(${e.map(n => An(n, t)).join(' % ')})`;
        }
        return `assertSize(${me(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
    };
    ne.in.compile = function (e, t) {
        return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
    };
    ne['-'].compile = function (e, t) {
        if (Array.isArray(e)) {
            if (e.length === 0) throw oe;
            return `${e.length === 1 ? '-' : ''}precoerceNumber(${e.map(n => An(n, t)).join(' - ')})`;
        }
        return typeof e == 'string' || typeof e == 'number'
            ? `(-${me(e, t)})`
            : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
    };
    ne['/'].compile = function (e, t) {
        if (Array.isArray(e)) {
            if (e.length === 0) throw oe;
            return (
                e.length === 1 && (e = [1, e[0]]),
                `precoerceNumber(${e
                    .map((n, o) => {
                        let r = An(n, t);
                        return (o && r === '+0' && he(NaN), o && (r = `precoerceNumber(${r} || NaN)`), r);
                    })
                    .join(' / ')})`
            );
        }
        return `assertSize(prev = ${me(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
    };
    ne['*'].compile = function (e, t) {
        return Array.isArray(e)
            ? e.length === 0
                ? '1'
                : `precoerceNumber(${e.map(n => An(n, t)).join(' * ')})`
            : `(${me(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
    };
    ne['!'].compile = function (e, t) {
        return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
    };
    ne.not = ne['!'];
    ne['!!'].compile = function (e, t) {
        return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
    };
    ne.none.deterministic = ne.some.deterministic;
    ne.throw.deterministic = (e, t) => t.insideTry && je(e, t.engine, t);
    ne['+'].optimizeUnary =
        ne['-'].optimizeUnary =
        ne['!'].optimizeUnary =
        ne['!!'].optimizeUnary =
        ne.cat.optimizeUnary =
        ne.throw.optimizeUnary =
            true;
    const ju = {
            ...ne,
            ...Su,
        },
        Ru = function (t) {
            return (
                Object.keys(t).forEach(n => {
                    t[n] === void 0 && delete t[n];
                }),
                t
            );
        };
    function Mu(e, t, n, o) {
        const r = t.methods[n],
            s = r.method ? r.method : r;
        if (r.lazy) {
            const l = e[n];
            return (c, d) => s(l, c, d || o, t);
        }
        let i = e[n];
        if (
            ((!i || typeof i != 'object') && !r.optimizeUnary && (i = [i]),
            Array.isArray(i) && i.length === 1 && r.optimizeUnary && !Array.isArray(i[0]) && (i = i[0]),
            Array.isArray(i))
        ) {
            const l = i.map(c => Pe(c, t, o));
            if (l.every(c => typeof c != 'function')) return (c, d) => s(l, c, d || o, t);
            if (l.length === 1) {
                const c = l[0];
                return (d, u) => s([c(d, u)], d, u || o, t);
            }
            if (l.length === 2) {
                const [c, d] = l;
                return typeof c == 'function' && typeof d == 'function'
                    ? (u, g) => s([c(u, g), d(u, g)], u, g || o, t)
                    : typeof c == 'function'
                      ? (u, g) => s([c(u, g), d], u, g || o, t)
                      : (u, g) => s([c, d(u, g)], u, g || o, t);
            }
            return (c, d) => {
                const u = l.map(g => (typeof g == 'function' ? g(c, d) : g));
                return s(u, c, d || o, t);
            };
        } else {
            const l = Pe(i, t, o);
            if (r.optimizeUnary) {
                const c = d =>
                    !d || typeof d[l] > 'u' || (typeof d[l] == 'function' && !t.allowFunctions) ? null : d[l];
                if (typeof l == 'function') return (d, u) => s(l(d, u), d, u || o, t);
                if ((n === 'var' || n === 'val') && t.methods[n][Ye]) {
                    if (!l && n !== 'val')
                        return d =>
                            d === null || typeof d > 'u' || (typeof d == 'function' && !t.allowFunctions) ? null : d;
                    if (n === 'val' || typeof l == 'number' || (!l.includes('.') && !l.includes('\\'))) return c;
                    if (n === 'var' && !l.startsWith('../')) {
                        const d = Ut(String(l));
                        let u;
                        if (d.length === 2) {
                            const [g, f] = d;
                            return p =>
                                (typeof (u = p && p[g] && p[g][f]) != 'function' || t.allowFunctions) && typeof u < 'u'
                                    ? u
                                    : null;
                        }
                        if (d.length === 3) {
                            const [g, f, p] = d;
                            return h =>
                                (typeof (u = h && h[g] && h[g][f] && h[g][f][p]) != 'function' || t.allowFunctions) &&
                                typeof u < 'u'
                                    ? u
                                    : null;
                        }
                    }
                }
                return (d, u) => s(l, d, u || o, t);
            }
            return typeof l == 'function' ? (c, d) => s(jn(l(c, d)), c, d || o, t) : (c, d) => s(jn(l), c, d || o, t);
        }
    }
    const Br = {
        '<': (e, t) => e < t,
        '<=': (e, t) => e <= t,
        '>': (e, t) => e > t,
        '>=': (e, t) => e >= t,
        '==': (e, t) => e == t,
        '===': (e, t) => e === t,
        '!=': (e, t) => e != t,
        '!==': (e, t) => e !== t,
    };
    function $u(e, t, n) {
        if (
            e.val &&
            t.methods.val[Ye] &&
            Array.isArray(e.val) &&
            e.val.length <= 3 &&
            e.val.every(o => typeof o != 'object')
        ) {
            let o;
            if (e.val.length === 1) {
                const r = e.val[0];
                return s => ((typeof (o = s && s[r]) != 'function' || t.allowFunctions) && typeof o < 'u' ? o : null);
            }
            if (e.val.length === 2) {
                const [r, s] = e.val;
                return i =>
                    (typeof (o = i && i[r] && i[r][s]) != 'function' || t.allowFunctions) && typeof o < 'u' ? o : null;
            }
            if (e.val.length === 3) {
                const [r, s, i] = e.val;
                return l =>
                    (typeof (o = l && l[r] && l[r][s] && l[r][s][i]) != 'function' || t.allowFunctions) &&
                    typeof o < 'u'
                        ? o
                        : null;
            }
        }
        if ((e.if || e['?:']) && t.methods.if[Ye] && Array.isArray(e.if || e['?:']) && (e.if || e['?:']).length === 3) {
            const [o, r, s] = e.if || e['?:'],
                i = Pe(o, t, n),
                l = Pe(r, t, n),
                c = Pe(s, t, n);
            return typeof i == 'function' && typeof l == 'function' && typeof c == 'function'
                ? (d, u) => (t.truthy(i(d, u)) ? l(d, u) : c(d, u))
                : typeof i == 'function' && typeof l == 'function'
                  ? (d, u) => (t.truthy(i(d, u)) ? l(d, u) : c)
                  : typeof i == 'function' && typeof c == 'function'
                    ? (d, u) => (t.truthy(i(d, u)) ? l : c(d, u))
                    : typeof i == 'function'
                      ? (d, u) => (t.truthy(i(d, u)) ? l : c)
                      : t.truthy(i)
                        ? l
                        : c;
        }
        if (e.filter && t.methods.filter[Ye] && Array.isArray(e.filter) && e.filter.length === 2) {
            const [o, r] = e.filter,
                s = Pe(r, t, n);
            if (typeof s != 'function') return t.truthy(s) ? Pe(o, t, n) : [];
        }
        for (const o in Br)
            if (e[o] && Array.isArray(e[o]) && t.methods[o][Ye]) {
                const r = Br[o],
                    s =
                        o.length === 3
                            ? r
                            : function (l, c) {
                                  if ((typeof l == 'string' || l === null) && (typeof c == 'string' || c === null))
                                      return r(l, c);
                                  if (Number.isNaN(+he(l))) throw NaN;
                                  if (Number.isNaN(+he(c)) && l !== null) throw NaN;
                                  return r(+l, +c);
                              };
                if (e[o].length === 2) {
                    const [i, l] = e[o],
                        c = Pe(i, t, n),
                        d = Pe(l, t, n);
                    return typeof c == 'function' && typeof d == 'function'
                        ? (u, g) => s(c(u, g), d(u, g))
                        : typeof c == 'function'
                          ? (u, g) => s(c(u, g), d)
                          : typeof d == 'function'
                            ? (u, g) => s(c, d(u, g))
                            : s(c, d);
                }
                if (e[o].length === 3) {
                    const [i, l, c] = e[o],
                        d = Pe(i, t, n),
                        u = Pe(l, t, n),
                        g = Pe(c, t, n);
                    let f;
                    return typeof d == 'function' && typeof u == 'function' && typeof g == 'function'
                        ? (p, h) => s(d(p, h), (f = u(p, h))) && s(f, g(p, h))
                        : typeof d == 'function' && typeof u == 'function'
                          ? (p, h) => s(d(p, h), (f = u(p, h))) && s(f, g)
                          : typeof d == 'function' && typeof g == 'function'
                            ? (p, h) => s(d(p, h), u) && s(u, g(p, h))
                            : typeof u == 'function' && typeof g == 'function'
                              ? (p, h) => s(d, (f = u(p, h))) && s(f, g(p, h))
                              : typeof d == 'function'
                                ? (p, h) => s(d(p, h), u) && s(u, g)
                                : typeof u == 'function'
                                  ? (p, h) => s(d, (f = u(p, h))) && s(f, g)
                                  : typeof g == 'function'
                                    ? (p, h) => s(d, u) && s(u, g(p, h))
                                    : s(d, u) && s(u, g);
                }
            }
        if (e.reduce && Array.isArray(e.reduce)) {
            let [o, r, s] = e.reduce;
            if (r['+'] && r['+'].length === 2 && (r['+'][0] || 0).var && (r['+'][1] || 0).var) {
                const i = r['+'][0].var === 'accumulator' || r['+'][1].var === 'accumulator',
                    l = r['+'][0].var === 'current' || r['+'][1].var === 'current';
                if (((s = s || 0), i && l))
                    return Pe(
                        {
                            '+': [
                                {
                                    '+': o,
                                },
                                s,
                            ],
                        },
                        t,
                        n,
                    );
            }
            if (r['*'] && r['*'].length === 2 && (r['*'][0] || 0).var && (r['*'][1] || 0).var) {
                const i = r['*'][0].var === 'accumulator' || r['*'][1].var === 'accumulator',
                    l = r['*'][0].var === 'current' || r['*'][1].var === 'current';
                if (((s = typeof s > 'u' ? 1 : s), i && l))
                    return Pe(
                        {
                            '*': [
                                {
                                    '*': o,
                                },
                                s,
                            ],
                        },
                        t,
                        n,
                    );
            }
        }
    }
    function Pe(e, t, n = []) {
        if (Array.isArray(e)) {
            const o = e.map(r => Pe(r, t, n));
            return o.every(r => typeof r != 'function')
                ? o
                : (r, s) => o.map(i => (typeof i == 'function' ? i(r, s) : i));
        }
        if (e && typeof e == 'object') {
            const o = $u(e, t, n);
            if (typeof o < 'u') return o;
            const r = Object.keys(e),
                s = r[0];
            if (r.length === 0) return e;
            if (t.isData(e, s)) return () => e;
            if (r.length > 1)
                throw {
                    type: 'Unknown Operator',
                };
            const l =
                !t.disableInline &&
                ro(e, t, {
                    engine: t,
                });
            if (s in t.methods) {
                const c = Mu(e, t, s, n);
                return l ? c() : c;
            }
            throw {
                type: 'Unknown Operator',
                key: s,
            };
        }
        return e;
    }
    class Au {
        constructor(
            t = ju,
            n = {
                disableInline: false,
                disableInterpretedOptimization: false,
                permissive: false,
                maxDepth: 0,
                maxArrayLength: 32768,
                maxStringLength: 65536,
            },
        ) {
            ((this.disableInline = n.disableInline),
                (this.disableInterpretedOptimization = n.disableInterpretedOptimization),
                (this.methods = {
                    ...t,
                }),
                (this.optimizedMap = /* @__PURE__ */ new WeakMap()),
                (this.missesSinceSeen = 0),
                (this.options = {
                    disableInline: n.disableInline,
                    disableInterpretedOptimization: n.disableInterpretedOptimization,
                    maxDepth: n.maxDepth || 0,
                    maxArrayLength: n.maxArrayLength || 32768,
                    maxStringLength: n.maxStringLength || 65536,
                }),
                this.isData ||
                    (n.permissive ? (this.isData = (o, r) => !(r in this.methods)) : (this.isData = () => false)));
        }
        truthy(t) {
            if (!t) return t;
            if (Array.isArray(t)) return t.length > 0;
            if (typeof t == 'object') {
                if (t[Symbol.iterator] && (('length' in t && t.length === 0) || ('size' in t && t.size === 0)))
                    return false;
                if (t.constructor.name === 'Object') return Object.keys(t).length > 0;
            }
            return t;
        }
        _parse(t, n, o, r, s) {
            const i = t[r];
            if (this.isData(t, r)) return t;
            if (!this.methods[r] || s > 1)
                throw {
                    type: 'Unknown Operator',
                    key: r,
                };
            if ((r === 'var' || r === 'val') && this.methods[r][Ye]) {
                const l =
                    !i || typeof i != 'object'
                        ? i
                        : this.run(i, n, {
                              above: o,
                          });
                return this.methods[r].method(l, n, o, this, null);
            }
            if (typeof this.methods[r] == 'function') {
                const l =
                    !i || typeof i != 'object'
                        ? [i]
                        : jn(
                              this.run(i, n, {
                                  above: o,
                              }),
                          );
                return this.methods[r](l, n, o, this);
            }
            if (typeof this.methods[r] == 'object') {
                const { method: l, lazy: c } = this.methods[r],
                    d = c
                        ? i
                        : !i || typeof i != 'object'
                          ? [i]
                          : jn(
                                this.run(i, n, {
                                    above: o,
                                }),
                            );
                return l(d, n, o, this);
            }
            throw new Error(`Method '${r}' is not set up properly.`);
        }
        addMethod(t, n, { deterministic: o, optimizeUnary: r } = {}) {
            (typeof n == 'function'
                ? (n = {
                      method: n,
                      lazy: false,
                  })
                : (n = {
                      ...n,
                      lazy: typeof n.traverse < 'u' ? !n.traverse : n.lazy,
                  }),
                Object.assign(
                    n,
                    Ru({
                        deterministic: o,
                        optimizeUnary: r,
                    }),
                ),
                (this.methods[t] = ks(n)));
        }
        addModule(t, n, o) {
            Object.getOwnPropertyNames(n).forEach(r => {
                (typeof n[r] == 'function' || typeof n[r] == 'object') &&
                    this.addMethod(`${t}${t ? '.' : ''}${r}`, n[r], o);
            });
        }
        run(t, n = {}, o = {}) {
            const { above: r = [] } = o;
            if (!this.disableInterpretedOptimization && typeof t == 'object' && t)
                if (
                    (this.missesSinceSeen > 500 &&
                        ((this.disableInterpretedOptimization = true), (this.missesSinceSeen = 0)),
                    this.optimizedMap.has(t))
                ) {
                    this.missesSinceSeen = 0;
                    const s = this.optimizedMap.get(t);
                    return typeof s == 'function' ? s(n, r) : s;
                } else {
                    (this.optimizedMap.set(t, Pe(t, this, r)), this.missesSinceSeen++);
                    const s = this.optimizedMap.get(t);
                    return typeof s == 'function' ? s(n, r) : s;
                }
            if (Array.isArray(t)) {
                const s = new Array(t.length);
                for (let i = 0; i < t.length; i++)
                    s[i] = this.run(t[i], n, {
                        above: r,
                    });
                return s;
            }
            if (t && typeof t == 'object') {
                const s = Object.keys(t);
                if (s.length > 0) {
                    const i = s[0];
                    return this._parse(t, n, r, i, s.length);
                }
            }
            return t;
        }
        build(t, n = {}) {
            const { above: o = [], top: r = true } = n,
                s = so(t, {
                    engine: this,
                    above: o,
                });
            return r === false && s.deterministic ? s() : s;
        }
    }
    function Be(e) {
        return e == null ? '' : typeof e == 'object' ? JSON.stringify(e) : String(e);
    }
    const co = new Au();
    co.addMethod('contains', ([e, t]) => Be(e).includes(Be(t)), {
        deterministic: true,
    });
    co.addMethod('startsWith', ([e, t]) => Be(e).startsWith(Be(t)), {
        deterministic: true,
    });
    co.addMethod('endsWith', ([e, t]) => Be(e).endsWith(Be(t)), {
        deterministic: true,
    });
    function cn() {
        return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    }
    const Oo = /* @__PURE__ */ new Set(['empty', 'not_empty', 'is_true', 'is_false']),
        Iu = {
            number: ['eq', 'neq', 'gt', 'gte', 'lt', 'lte', 'empty', 'not_empty'],
            string: ['eq', 'neq', 'contains', 'not_contains', 'starts_with', 'ends_with', 'empty', 'not_empty'],
            boolean: ['is_true', 'is_false', 'empty', 'not_empty'],
            date: ['eq', 'neq', 'gt', 'gte', 'lt', 'lte', 'empty', 'not_empty'],
            mixed: ['eq', 'neq', 'contains', 'empty', 'not_empty'],
        },
        Pu = ['eq', 'neq', 'empty', 'not_empty'],
        Fu = {
            var: 'value',
        };
    function zu(e, t, n = 'string') {
        const o = Number(t),
            r = n === 'number',
            s = n === 'date',
            i = Fu;
        switch (e) {
            case 'eq':
                return {
                    '==': [i, r ? o : t],
                };
            case 'neq':
                return {
                    '!=': [i, r ? o : t],
                };
            case 'gt':
                return {
                    '>': [i, s ? t : o],
                };
            case 'gte':
                return {
                    '>=': [i, s ? t : o],
                };
            case 'lt':
                return {
                    '<': [i, s ? t : o],
                };
            case 'lte':
                return {
                    '<=': [i, s ? t : o],
                };
            case 'contains':
                return {
                    contains: [i, t],
                };
            case 'not_contains':
                return {
                    '!': [
                        {
                            contains: [i, t],
                        },
                    ],
                };
            case 'starts_with':
                return {
                    startsWith: [i, t],
                };
            case 'ends_with':
                return {
                    endsWith: [i, t],
                };
            case 'empty':
                return {
                    '!': [
                        {
                            '!!': [i],
                        },
                    ],
                };
            case 'not_empty':
                return {
                    '!!': [i],
                };
            case 'is_true':
                return {
                    '==': [i, true],
                };
            case 'is_false':
                return {
                    '==': [i, false],
                };
        }
    }
    const Tu = /* @__PURE__ */ new Set(['eq', 'neq', 'gt', 'gte', 'lt', 'lte']);
    function Du(e, t = 'string') {
        const n = e.conditions.filter(r =>
            Oo.has(r.operator)
                ? true
                : !(r.operand.trim() === '' || (t === 'number' && Tu.has(r.operator) && isNaN(Number(r.operand)))),
        );
        if (n.length === 0) return;
        const o = n.map(r => zu(r.operator, r.operand, t));
        return o.length === 1
            ? o[0]
            : {
                  [e.mode]: o,
              };
    }
    function lt(e) {
        return typeof e == 'object' && e !== null && e.var === 'value';
    }
    function yo(e) {
        for (const [t, n] of [
            ['>', 'gt'],
            ['>=', 'gte'],
            ['<', 'lt'],
            ['<=', 'lte'],
        ])
            if (t in e) {
                const o = e[t];
                if (Array.isArray(o) && o.length === 2 && lt(o[0]))
                    return {
                        operator: n,
                        operand: Be(o[1]),
                    };
            }
        if ('==' in e) {
            const t = e['=='];
            if (Array.isArray(t) && t.length === 2 && lt(t[0]))
                return t[1] === true
                    ? {
                          operator: 'is_true',
                          operand: '',
                      }
                    : t[1] === false
                      ? {
                            operator: 'is_false',
                            operand: '',
                        }
                      : {
                            operator: 'eq',
                            operand: Be(t[1]),
                        };
        }
        if ('!=' in e) {
            const t = e['!='];
            if (Array.isArray(t) && t.length === 2 && lt(t[0]))
                return {
                    operator: 'neq',
                    operand: Be(t[1]),
                };
        }
        if ('contains' in e) {
            const t = e.contains;
            if (Array.isArray(t) && t.length === 2 && lt(t[0]))
                return {
                    operator: 'contains',
                    operand: Be(t[1]),
                };
        }
        if ('startsWith' in e) {
            const t = e.startsWith;
            if (Array.isArray(t) && t.length === 2 && lt(t[0]))
                return {
                    operator: 'starts_with',
                    operand: Be(t[1]),
                };
        }
        if ('endsWith' in e) {
            const t = e.endsWith;
            if (Array.isArray(t) && t.length === 2 && lt(t[0]))
                return {
                    operator: 'ends_with',
                    operand: Be(t[1]),
                };
        }
        if ('!' in e) {
            const t = e['!'];
            if (Array.isArray(t) && t.length === 1) {
                const n = t[0];
                if (typeof n == 'object' && n !== null && '!!' in n) {
                    const o = n['!!'];
                    if (Array.isArray(o) && lt(o[0]))
                        return {
                            operator: 'empty',
                            operand: '',
                        };
                }
                if (typeof n == 'object' && n !== null && 'contains' in n) {
                    const o = n.contains;
                    if (Array.isArray(o) && o.length === 2 && lt(o[0]))
                        return {
                            operator: 'not_contains',
                            operand: Be(o[1]),
                        };
                }
            }
        }
        if ('!!' in e) {
            const t = e['!!'];
            if (Array.isArray(t) && lt(t[0]))
                return {
                    operator: 'not_empty',
                    operand: '',
                };
        }
        return null;
    }
    function Wr(e) {
        if (!e)
            return {
                mode: 'and',
                conditions: [
                    {
                        id: cn(),
                        operator: 'eq',
                        operand: '',
                    },
                ],
            };
        if ('and' in e) {
            const n = e.and;
            if (Array.isArray(n)) {
                const o = n
                    .map(r => yo(r))
                    .filter(r => r !== null)
                    .map(r => ({
                        id: cn(),
                        ...r,
                    }));
                if (o.length > 0)
                    return {
                        mode: 'and',
                        conditions: o,
                    };
            }
        }
        if ('or' in e) {
            const n = e.or;
            if (Array.isArray(n)) {
                const o = n
                    .map(r => yo(r))
                    .filter(r => r !== null)
                    .map(r => ({
                        id: cn(),
                        ...r,
                    }));
                if (o.length > 0)
                    return {
                        mode: 'or',
                        conditions: o,
                    };
            }
        }
        const t = yo(e);
        return t
            ? {
                  mode: 'and',
                  conditions: [
                      {
                          id: cn(),
                          ...t,
                      },
                  ],
              }
            : {
                  mode: 'and',
                  conditions: [
                      {
                          id: cn(),
                          operator: 'eq',
                          operand: '',
                      },
                  ],
              };
    }
    const ku = 200,
        un = /* @__PURE__ */ new Map();
    function Eu(e, t) {
        try {
            const n = JSON.stringify(e);
            let o = un.get(n);
            if (!o) {
                if (((o = co.build(e)), un.size >= ku)) {
                    const r = un.keys().next().value;
                    r && un.delete(r);
                }
                un.set(n, o);
            }
            return !!o({
                value: t,
            });
        } catch {
            return false;
        }
    }
    const Ou = {
        eq: 'json_table_op_eq',
        neq: 'json_table_op_neq',
        gt: 'json_table_op_gt',
        gte: 'json_table_op_gte',
        lt: 'json_table_op_lt',
        lte: 'json_table_op_lte',
        contains: 'json_table_op_contains',
        not_contains: 'json_table_op_not_contains',
        starts_with: 'json_table_op_starts_with',
        ends_with: 'json_table_op_ends_with',
        empty: 'json_table_op_empty',
        not_empty: 'json_table_op_not_empty',
        is_true: 'json_table_op_is_true',
        is_false: 'json_table_op_is_false',
    };
    function Nu({ label: e, value: t, onChange: n, inputType: o }) {
        const [r, s] = y.useState(t);
        y.useEffect(() => {
            s(t);
        }, [t]);
        const i = y.useCallback(() => {
            r !== t && n(r);
        }, [r, t, n]);
        return a.jsx(Re, {
            label: e,
            value: r,
            onChange: l => s(l.target.value),
            onBlur: i,
            size: 'small',
            type: o,
            sx: {
                flex: 1,
                ...(o === 'date' && {
                    '& input[type="date"]::-webkit-calendar-picker-indicator': {
                        filter: 'invert(0.5)',
                        cursor: 'pointer',
                        opacity: 0.7,
                        '&:hover': {
                            opacity: 1,
                        },
                    },
                }),
            },
            InputLabelProps:
                o === 'date' || o === 'number'
                    ? {
                          shrink: true,
                      }
                    : void 0,
            slotProps:
                o === 'number'
                    ? {
                          htmlInput: {
                              step: 'any',
                          },
                      }
                    : o === 'date'
                      ? {
                            htmlInput: {
                                placeholder: 'YYYY-MM-DD',
                            },
                        }
                      : void 0,
        });
    }
    function Lu({ logic: e, columnType: t, onChange: n }) {
        const [o, r] = y.useState(() => Wr(e));
        y.useEffect(() => {
            r(Wr(e));
        }, [e]);
        const s = Iu[t] ?? Pu,
            i = y.useCallback(
                f => {
                    (r(f), n(Du(f, t)));
                },
                [n, t],
            ),
            l = y.useCallback(
                (f, p) => {
                    const h = o.conditions.map((m, x) =>
                        x === f
                            ? {
                                  ...m,
                                  ...p,
                              }
                            : m,
                    );
                    i({
                        ...o,
                        conditions: h,
                    });
                },
                [o, i],
            ),
            c = y.useCallback(
                f => {
                    const p = o.conditions.filter((h, m) => m !== f);
                    i({
                        ...o,
                        conditions: p,
                    });
                },
                [o, i],
            ),
            d = y.useCallback(() => {
                const f = s[0] ?? 'eq';
                i({
                    ...o,
                    conditions: [
                        ...o.conditions,
                        {
                            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                            operator: f,
                            operand: '',
                        },
                    ],
                });
            }, [o, i, s]),
            u = y.useCallback(
                (f, p) => {
                    p !== null &&
                        i({
                            ...o,
                            mode: p,
                        });
                },
                [o, i],
            ),
            g = o.conditions.length > 1;
        return a.jsxs(De, {
            spacing: 1,
            children: [
                g &&
                    a.jsxs(H, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        },
                        children: [
                            a.jsxs(us, {
                                value: o.mode,
                                exclusive: true,
                                onChange: u,
                                size: 'small',
                                'aria-label': b.t('json_table_condition_mode_label'),
                                children: [
                                    a.jsx(eo, {
                                        value: 'and',
                                        'aria-label': b.t('json_table_condition_mode_all'),
                                        children: b.t('json_table_condition_mode_all'),
                                    }),
                                    a.jsx(eo, {
                                        value: 'or',
                                        'aria-label': b.t('json_table_condition_mode_any'),
                                        children: b.t('json_table_condition_mode_any'),
                                    }),
                                ],
                            }),
                            a.jsx(F, {
                                variant: 'caption',
                                color: 'text.secondary',
                                children:
                                    o.mode === 'and'
                                        ? b.t('json_table_condition_mode_hint_and')
                                        : b.t('json_table_condition_mode_hint_or'),
                            }),
                        ],
                    }),
                o.conditions.map((f, p) => {
                    const h = !Oo.has(f.operator),
                        m = t === 'date' ? 'date' : t === 'number' ? 'number' : 'text';
                    return a.jsxs(
                        H,
                        {
                            sx: {
                                display: 'flex',
                                gap: 1,
                                alignItems: 'flex-start',
                            },
                            children: [
                                a.jsxs(wt, {
                                    size: 'small',
                                    sx: {
                                        flex: h ? '0 0 auto' : 1,
                                        minWidth: 160,
                                    },
                                    children: [
                                        a.jsx(Ct, {
                                            children: b.t('json_table_condition_operator'),
                                        }),
                                        a.jsx(ct, {
                                            label: b.t('json_table_condition_operator'),
                                            value: f.operator,
                                            onChange: x => {
                                                const v = x.target.value,
                                                    _ = Oo.has(v) ? '' : f.operand;
                                                l(p, {
                                                    operator: v,
                                                    operand: _,
                                                });
                                            },
                                            children: s.map(x =>
                                                a.jsx(
                                                    ie,
                                                    {
                                                        value: x,
                                                        children: b.t(Ou[x]),
                                                    },
                                                    x,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                                h &&
                                    a.jsx(Nu, {
                                        label: b.t('json_table_condition_value'),
                                        value: f.operand ?? '',
                                        onChange: x =>
                                            l(p, {
                                                operand: x,
                                            }),
                                        inputType: m,
                                    }),
                                g &&
                                    a.jsx(Le, {
                                        title: b.t('json_table_condition_remove'),
                                        children: a.jsx(Se, {
                                            size: 'small',
                                            onClick: () => c(p),
                                            'aria-label': b.t('json_table_condition_remove'),
                                            sx: {
                                                mt: 0.5,
                                            },
                                            children: a.jsx(to, {
                                                fontSize: 'small',
                                            }),
                                        }),
                                    }),
                            ],
                        },
                        f.id ?? p,
                    );
                }),
                a.jsx(ot, {
                    startIcon: a.jsx(js, {}),
                    onClick: d,
                    size: 'small',
                    variant: 'text',
                    sx: {
                        alignSelf: 'flex-start',
                        textTransform: 'none',
                    },
                    'aria-label': b.t('json_table_condition_add'),
                    children: g ? b.t('json_table_condition_add') : b.t('json_table_condition_add_first'),
                }),
            ],
        });
    }
    function Hu({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: o, onModeChange: r }) {
        const s = y.useCallback(
                (u, g) => {
                    const f = [...(e || [])];
                    ((f[u] = {
                        ...f[u],
                        ...g,
                    }),
                        o(f));
                },
                [e, o],
            ),
            i = y.useCallback(
                u => {
                    const g = [...(e || [])];
                    (g.splice(u, 1), o(g));
                },
                [e, o],
            ),
            l = y.useCallback(() => {
                const u = {
                    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                    backgroundColor: '',
                    textColor: '',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                };
                o([...(e || []), u]);
            }, [e, o]),
            c = y.useCallback(
                u => {
                    if (u === 0) return;
                    const g = [...(e || [])];
                    (([g[u - 1], g[u]] = [g[u], g[u - 1]]), o(g));
                },
                [e, o],
            ),
            d = y.useCallback(
                u => {
                    const g = e || [];
                    if (u >= g.length - 1) return;
                    const f = [...g];
                    (([f[u], f[u + 1]] = [f[u + 1], f[u]]), o(f));
                },
                [e, o],
            );
        return a.jsxs(De, {
            spacing: 1.5,
            children: [
                ((e == null ? void 0 : e.length) ?? 0) >= 1 &&
                    a.jsxs(H, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        },
                        children: [
                            a.jsxs(us, {
                                value: t ?? 'first-match',
                                exclusive: true,
                                size: 'small',
                                onChange: (u, g) => {
                                    g && r(g);
                                },
                                'aria-label': b.t('json_table_cell_style_mode_label'),
                                children: [
                                    a.jsx(eo, {
                                        value: 'first-match',
                                        'aria-label': b.t('json_table_cell_style_mode_first'),
                                        children: b.t('json_table_cell_style_mode_first'),
                                    }),
                                    a.jsx(eo, {
                                        value: 'all-match',
                                        'aria-label': b.t('json_table_cell_style_mode_all'),
                                        children: b.t('json_table_cell_style_mode_all'),
                                    }),
                                ],
                            }),
                            a.jsx(F, {
                                variant: 'caption',
                                color: 'text.secondary',
                                children:
                                    (t ?? 'first-match') === 'first-match'
                                        ? b.t('json_table_cell_style_mode_hint_first')
                                        : b.t('json_table_cell_style_mode_hint_all'),
                            }),
                        ],
                    }),
                (e || []).length === 0 &&
                    a.jsxs(H, {
                        sx: {
                            textAlign: 'center',
                            py: 2,
                            px: 1,
                            color: 'text.secondary',
                        },
                        children: [
                            a.jsx(F, {
                                variant: 'body2',
                                sx: {
                                    fontWeight: 500,
                                    mb: 0.5,
                                },
                                children: b.t('json_table_no_style_rules'),
                            }),
                            a.jsx(F, {
                                variant: 'caption',
                                children: b.t('json_table_no_style_rules_hint'),
                            }),
                        ],
                    }),
                (e || []).map((u, g) => {
                    const f = (e || []).length,
                        p = u.backgroundColor ? kt(u.backgroundColor) : void 0,
                        h = u.textColor ? kt(u.textColor) : void 0;
                    return a.jsx(
                        et,
                        {
                            variant: 'outlined',
                            sx: {
                                p: 1.5,
                            },
                            children: a.jsxs(De, {
                                spacing: 1.5,
                                children: [
                                    a.jsxs(H, {
                                        sx: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        },
                                        children: [
                                            a.jsx(H, {
                                                sx: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 0.5,
                                                },
                                                children: a.jsxs(F, {
                                                    variant: 'caption',
                                                    sx: {
                                                        fontWeight: 600,
                                                        color: 'text.secondary',
                                                    },
                                                    children: [b.t('json_table_rule'), ' ', g + 1],
                                                }),
                                            }),
                                            a.jsxs(H, {
                                                sx: {
                                                    display: 'flex',
                                                    gap: 0.5,
                                                },
                                                children: [
                                                    a.jsx(Le, {
                                                        title: b.t('json_table_rule_move_up'),
                                                        children: a.jsx('span', {
                                                            children: a.jsx(Se, {
                                                                size: 'small',
                                                                onClick: () => c(g),
                                                                disabled: g === 0,
                                                                'aria-label': b.t('json_table_rule_move_up'),
                                                                children: a.jsx(Ms, {
                                                                    fontSize: 'small',
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                    a.jsx(Le, {
                                                        title: b.t('json_table_rule_move_down'),
                                                        children: a.jsx('span', {
                                                            children: a.jsx(Se, {
                                                                size: 'small',
                                                                onClick: () => d(g),
                                                                disabled: g >= f - 1,
                                                                'aria-label': b.t('json_table_rule_move_down'),
                                                                children: a.jsx(Rs, {
                                                                    fontSize: 'small',
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                    a.jsx(Le, {
                                                        title: b.t('json_table_delete_rule'),
                                                        children: a.jsx(Se, {
                                                            size: 'small',
                                                            onClick: () => i(g),
                                                            color: 'error',
                                                            'aria-label': b.t('json_table_delete_rule'),
                                                            children: a.jsx(li, {
                                                                fontSize: 'small',
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    a.jsx(
                                        Lu,
                                        {
                                            logic: u.logic,
                                            columnType: n,
                                            onChange: m =>
                                                s(g, {
                                                    logic: m,
                                                }),
                                        },
                                        u.id ?? g,
                                    ),
                                    a.jsxs(De, {
                                        direction: 'row',
                                        spacing: 1,
                                        alignItems: 'flex-start',
                                        children: [
                                            a.jsx(Do, {
                                                label: b.t('json_table_bg_color'),
                                                value: u.backgroundColor || '',
                                                onChange: m =>
                                                    s(g, {
                                                        backgroundColor: m,
                                                    }),
                                            }),
                                            a.jsx(Do, {
                                                label: b.t('json_table_text_color'),
                                                value: u.textColor || '',
                                                onChange: m =>
                                                    s(g, {
                                                        textColor: m,
                                                    }),
                                            }),
                                        ],
                                    }),
                                    a.jsxs(De, {
                                        direction: 'row',
                                        spacing: 1,
                                        children: [
                                            a.jsx(Et, {
                                                control: a.jsx(wn, {
                                                    checked: u.fontWeight === 'bold',
                                                    onChange: m =>
                                                        s(g, {
                                                            fontWeight: m.target.checked ? 'bold' : 'normal',
                                                        }),
                                                    icon: a.jsx(Er, {
                                                        sx: {
                                                            opacity: 0.3,
                                                        },
                                                    }),
                                                    checkedIcon: a.jsx(Er, {
                                                        color: 'primary',
                                                    }),
                                                    size: 'small',
                                                }),
                                                label: a.jsx(F, {
                                                    variant: 'caption',
                                                    children: b.t('json_table_bold'),
                                                }),
                                            }),
                                            a.jsx(Et, {
                                                control: a.jsx(wn, {
                                                    checked: u.fontStyle === 'italic',
                                                    onChange: m =>
                                                        s(g, {
                                                            fontStyle: m.target.checked ? 'italic' : 'normal',
                                                        }),
                                                    icon: a.jsx(Or, {
                                                        sx: {
                                                            opacity: 0.3,
                                                        },
                                                    }),
                                                    checkedIcon: a.jsx(Or, {
                                                        color: 'primary',
                                                    }),
                                                    size: 'small',
                                                }),
                                                label: a.jsx(F, {
                                                    variant: 'caption',
                                                    children: b.t('json_table_italic'),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (u.backgroundColor ||
                                        u.textColor ||
                                        u.fontWeight === 'bold' ||
                                        u.fontStyle === 'italic') &&
                                        a.jsx(et, {
                                            variant: 'outlined',
                                            sx: {
                                                p: 1,
                                                ...(u.backgroundColor
                                                    ? p
                                                        ? {
                                                              background: p,
                                                          }
                                                        : {
                                                              backgroundColor: u.backgroundColor,
                                                          }
                                                    : {}),
                                                fontWeight: u.fontWeight || 'normal',
                                                fontStyle: u.fontStyle || 'normal',
                                            },
                                            children: a.jsx(F, {
                                                variant: 'body2',
                                                sx: {
                                                    ...(u.textColor
                                                        ? h
                                                            ? {
                                                                  background: h,
                                                                  backgroundClip: 'text',
                                                                  WebkitBackgroundClip: 'text',
                                                                  color: 'transparent',
                                                              }
                                                            : {
                                                                  color: u.textColor,
                                                              }
                                                        : {
                                                              color: 'inherit',
                                                          }),
                                                },
                                                children: b.t('json_table_sample_value'),
                                            }),
                                        }),
                                ],
                            }),
                        },
                        u.id ?? g,
                    );
                }),
                ((e == null ? void 0 : e.length) ?? 0) >= 2 &&
                    a.jsx(F, {
                        variant: 'caption',
                        color: 'text.secondary',
                        sx: {
                            px: 0.5,
                        },
                        children:
                            (t ?? 'first-match') === 'first-match'
                                ? b.t('json_table_rules_priority_hint')
                                : b.t('json_table_rules_all_match_hint'),
                    }),
                a.jsx(ot, {
                    startIcon: a.jsx(js, {}),
                    onClick: l,
                    variant: 'outlined',
                    size: 'small',
                    fullWidth: true,
                    children: b.t('json_table_add_style_rule'),
                }),
            ],
        });
    }
    function Vu({ globalSorting: e, globalFiltering: t }) {
        return a.jsxs(H, {
            sx: {
                p: 1,
                mb: 2,
                bgcolor: 'action.hover',
                borderRadius: 1,
                border: 1,
                borderColor: 'divider',
            },
            children: [
                a.jsx(F, {
                    variant: 'caption',
                    sx: {
                        fontWeight: 500,
                        display: 'block',
                        mb: 0.5,
                    },
                    children: b.t('json_table_global_status'),
                }),
                a.jsxs(H, {
                    sx: {
                        display: 'flex',
                        gap: 1,
                        flexWrap: 'wrap',
                    },
                    children: [
                        a.jsx(jt, {
                            size: 'small',
                            icon: e ? a.jsx(kr, {}) : a.jsx(to, {}),
                            label: `${b.t('json_table_sorting')}: ${e ? b.t('json_table_status_on') : b.t('json_table_status_off')}`,
                            color: e ? 'success' : 'default',
                            variant: 'outlined',
                            sx: {
                                fontSize: '0.7rem',
                            },
                        }),
                        a.jsx(jt, {
                            size: 'small',
                            icon: t ? a.jsx(kr, {}) : a.jsx(to, {}),
                            label: `${b.t('json_table_filtering')}: ${t ? b.t('json_table_status_on') : b.t('json_table_status_off')}`,
                            color: t ? 'success' : 'default',
                            variant: 'outlined',
                            sx: {
                                fontSize: '0.7rem',
                            },
                        }),
                    ],
                }),
            ],
        });
    }
    function In(e) {
        switch (e) {
            case 'number':
            case 'date':
                return {
                    sortable: true,
                    filterable: true,
                    hiding: true,
                };
            case 'string':
                return {
                    sortable: true,
                    filterable: true,
                    hiding: true,
                };
            case 'boolean':
                return {
                    sortable: false,
                    filterable: true,
                    hiding: true,
                };
            case 'array':
            case 'object':
                return {
                    sortable: false,
                    filterable: false,
                    hiding: true,
                };
            default:
                return {
                    sortable: true,
                    filterable: true,
                    hiding: true,
                };
        }
    }
    function Bu(e, t, n) {
        return e.sortable !== void 0 && e.sortable !== 'auto' ? e.sortable : In(t).sortable && n !== false;
    }
    function Wu(e, t, n) {
        return e.filterable !== void 0 && e.filterable !== 'auto' ? e.filterable : In(t).filterable && n === true;
    }
    function Gu(e, t, n) {
        return e.enableHiding !== void 0 && e.enableHiding !== 'auto' ? e.enableHiding : In(t).hiding && n !== false;
    }
    function Gr(e, t) {
        if (e == null) return 0;
        if (typeof e == 'number') return e >= 1e11 ? e : e * 1e3;
        if (typeof e == 'string') {
            const n = zs(e, t);
            return n ? new Date(n).getTime() : 0;
        }
        return 0;
    }
    function Ur(e) {
        return (t, n, o) => Gr(t.getValue(o), e) - Gr(n.getValue(o), e);
    }
    function Uu(e) {
        const {
                columnConfig: t,
                analysisColumns: n,
                widgetData: o,
                renderConfiguredCell: r,
                renderAutoDetectedCell: s,
                renderSelectionHeader: i,
                renderSelectionCell: l,
            } = e,
            c = new Map(n.map(f => [f.path, f.dateFormat])),
            d = new Map(n.map(f => [f.path, f.type])),
            u =
                o.tableRowSelection && i && l
                    ? {
                          id: '__select__',
                          size: 48,
                          enableResizing: false,
                          enableSorting: false,
                          enableColumnFilter: false,
                          enableHiding: false,
                          header: ({ table: f }) => i(f),
                          cell: ({ row: f }) => l(f),
                          meta: {
                              align: 'center',
                              width: 48,
                          },
                      }
                    : null;
        let g;
        return (
            t.length > 0
                ? (g = t
                      .filter(f => f.visible)
                      .map(f => {
                          var _a2, _b;
                          const p = ((_a2 = f.format) == null ? void 0 : _a2.dateInputFormat) ?? c.get(f.path),
                              h = ((_b = f.format) == null ? void 0 : _b.type) === 'date',
                              m = d.get(f.path) || 'string';
                          return {
                              id: f.path,
                              size: f.width ?? 150,
                              accessorFn: v => (v == null ? void 0 : v[f.path]) ?? null,
                              header: f.headerName || f.path,
                              enableSorting: Bu(f, m, o.tableSorting),
                              enableColumnFilter: Wu(f, m, o.tableFiltering),
                              enableHiding: Gu(f, m, o.tableHiding),
                              ...(h && {
                                  sortingFn: Ur(p),
                              }),
                              cell: ({ getValue: v }) => r(v(), f),
                              meta: {
                                  align: f.align || 'left',
                                  width: f.width,
                                  columnType: m,
                              },
                          };
                      }))
                : (g = n.map(f => {
                      const p = f.type === 'date' && f.dateFormat,
                          h = f.dateFormat,
                          m = In(f.type);
                      return {
                          id: f.path,
                          size: 150,
                          accessorFn: v => v[f.path],
                          header: f.path.split('.').pop() || f.path,
                          enableSorting: m.sortable && o.tableSorting,
                          enableColumnFilter: m.filterable && o.tableFiltering,
                          enableHiding: m.hiding && o.tableHiding,
                          ...(p && {
                              sortingFn: Ur(h),
                          }),
                          cell: ({ getValue: v }) => s(v()),
                          meta: {
                              align: 'left',
                              columnType: f.type,
                          },
                      };
                  })),
            u ? [u, ...g] : g
        );
    }
    function qr({
        globalEnabled: e,
        columnOverride: t,
        featureLabel: n,
        detectedType: o = 'string',
        featureType: r = 'sortable',
    }) {
        const s = t === 'auto' || t === void 0,
            i = In(o),
            l = r === 'sortable' ? i.sortable : i.filterable;
        let c, d;
        t === 'auto' || t === void 0
            ? ((c = l && e), (d = 'json_table_source_auto'))
            : ((c = t), (d = 'json_table_source_override'));
        const u = t !== void 0 && t !== 'auto',
            g = (p, h) => p.replace(/\{(\w+)\}/g, (m, x) => (x in h ? h[x] : m));
        let f;
        return (
            t === 'auto' || t === void 0
                ? (f = g(b.t('json_table_auto_tooltip'), {
                      feature: n,
                      smart: l ? b.t('json_table_status_on') : b.t('json_table_status_off'),
                      type: o,
                  }))
                : (f = g(b.t('json_table_override_tooltip'), {
                      feature: n,
                  })),
            a.jsx(Le, {
                title: f,
                arrow: true,
                children: a.jsxs(H, {
                    sx: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        ml: 'auto',
                        cursor: 'help',
                    },
                    children: [
                        a.jsx(jt, {
                            size: 'small',
                            label: a.jsx(H, {
                                sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.5,
                                },
                                children: c ? b.t('json_table_status_on') : b.t('json_table_status_off'),
                            }),
                            color: c ? 'success' : 'default',
                            variant: u ? 'filled' : 'outlined',
                            sx: {
                                height: 20,
                                fontSize: '0.65rem',
                                '& .MuiChip-label': {
                                    px: 0.75,
                                },
                            },
                        }),
                        a.jsxs(F, {
                            variant: 'caption',
                            color: u ? 'warning.main' : 'text.secondary',
                            sx: {
                                fontSize: '0.65rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.25,
                            },
                            children: [
                                b.t(d),
                                s &&
                                    a.jsx(Uc, {
                                        sx: {
                                            fontSize: 12,
                                            ml: 0.25,
                                        },
                                    }),
                                u &&
                                    a.jsx(Yc, {
                                        sx: {
                                            fontSize: 12,
                                            ml: 0.25,
                                        },
                                    }),
                            ],
                        }),
                    ],
                }),
            })
        );
    }
    function qu({ column: e, discoveredColumn: t, onChange: n, globalSorting: o = true, globalFiltering: r = false }) {
        var _a2, _b, _c2, _d2, _e2, _f;
        const [s, i] = y.useState({
                basic: true,
                formatting: false,
                styling: false,
                advanced: false,
            }),
            l = y.useCallback(w => {
                i(M => ({
                    ...M,
                    [w]: !M[w],
                }));
            }, []),
            c = (t == null ? void 0 : t.type) || 'string',
            d = y.useMemo(() => (t ? Object.values(t.typeCounts).reduce((w, M) => w + M, 0) : 0), [t]),
            u = y.useMemo(() => e.path.split('.').pop() || e.path, [e.path]),
            g = y.useMemo(
                () =>
                    e.headerName !== u ||
                    e.width !== void 0 ||
                    (e.align !== void 0 && e.align !== 'left') ||
                    e.visible !== true,
                [e.headerName, e.width, e.align, e.visible, u],
            ),
            f = y.useCallback(() => {
                n({
                    ...e,
                    headerName: u,
                    width: void 0,
                    align: void 0,
                    visible: true,
                });
            }, [e, n, u]),
            p = y.useMemo(() => e.format !== void 0, [e.format]),
            h = y.useCallback(() => {
                const { format: w, ...M } = e;
                n(M);
            }, [e, n]),
            m = y.useMemo(() => {
                var _a3;
                return (((_a3 = e.cellStyle) == null ? void 0 : _a3.length) ?? 0) > 0 || e.cellStyleMode !== void 0;
            }, [e.cellStyle, e.cellStyleMode]),
            x = y.useCallback(() => {
                const { cellStyle: w, cellStyleMode: M, ...T } = e;
                n(T);
            }, [e, n]),
            v = y.useMemo(
                () =>
                    (e.sortable !== void 0 && e.sortable !== 'auto') ||
                    (e.filterable !== void 0 && e.filterable !== 'auto'),
                [e.sortable, e.filterable],
            ),
            _ = y.useCallback(() => {
                const { sortable: w, filterable: M, ...T } = e;
                n({
                    ...T,
                    sortable: 'auto',
                    filterable: 'auto',
                });
            }, [e, n]),
            C = y.useCallback(
                w => {
                    var _a3, _b2;
                    const M = {
                        ...e.format,
                    };
                    if (w.type && w.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
                        const T = (_b2 = e.format) == null ? void 0 : _b2.type;
                        T === 'number'
                            ? (delete M.numberDecimals,
                              delete M.numberPrefix,
                              delete M.numberSuffix,
                              delete M.numberThousandsSeparator)
                            : T === 'date'
                              ? (delete M.dateFormat, delete M.dateInputFormat)
                              : T === 'boolean'
                                ? (delete M.booleanTrue, delete M.booleanFalse)
                                : T === 'string' &&
                                  [
                                      'stringCase',
                                      'stringPrefix',
                                      'stringSuffix',
                                      'stringTrim',
                                      'stringMaxLength',
                                      'stringRegex',
                                      'stringRegexGroup',
                                      'stringRegexFlags',
                                      'stringFontWeight',
                                      'stringFontStyle',
                                      'stringFontSize',
                                      'stringTextColor',
                                  ].forEach(A => {
                                      delete M[A];
                                  });
                    }
                    n({
                        ...e,
                        format: {
                            ...M,
                            ...w,
                        },
                    });
                },
                [e, n],
            ),
            j = y.useCallback(
                w => {
                    n({
                        ...e,
                        cellStyle: w,
                    });
                },
                [e, n],
            ),
            R = y.useCallback(
                w => {
                    n({
                        ...e,
                        cellStyleMode: w,
                    });
                },
                [e, n],
            );
        return a.jsxs(H, {
            sx: {
                height: '100%',
                overflow: 'auto',
                p: 2,
            },
            children: [
                a.jsxs(H, {
                    sx: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 2,
                    },
                    children: [
                        a.jsx(jt, {
                            label: c,
                            size: 'small',
                            sx: {
                                backgroundColor: bn[c] || bn.string,
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: '0.7rem',
                            },
                        }),
                        a.jsx(F, {
                            variant: 'subtitle2',
                            sx: {
                                fontFamily: 'monospace',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            },
                            title: e.path,
                            children: e.path,
                        }),
                    ],
                }),
                a.jsxs(De, {
                    spacing: 1,
                    children: [
                        a.jsxs(En, {
                            expanded: s.basic,
                            onChange: () => l('basic'),
                            disableGutters: true,
                            children: [
                                a.jsx(Nn, {
                                    expandIcon: a.jsx(Bn, {}),
                                    children: a.jsxs(H, {
                                        sx: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                            mr: 1,
                                        },
                                        children: [
                                            a.jsx(F, {
                                                variant: 'subtitle2',
                                                sx: {
                                                    fontWeight: 500,
                                                },
                                                children: b.t('json_table_section_basic'),
                                            }),
                                            a.jsx(Le, {
                                                title: b.t('json_table_section_reset'),
                                                children: a.jsx('span', {
                                                    children: a.jsx(Se, {
                                                        size: 'small',
                                                        disabled: !g,
                                                        onClick: w => {
                                                            (w.stopPropagation(), f());
                                                        },
                                                        'aria-label': b.t('json_table_section_reset'),
                                                        children: a.jsx(fn, {
                                                            fontSize: 'small',
                                                        }),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                a.jsx(On, {
                                    children: a.jsxs(De, {
                                        spacing: 2,
                                        children: [
                                            a.jsx(Re, {
                                                label: b.t('json_table_header_label'),
                                                value: e.headerName,
                                                onChange: w =>
                                                    n({
                                                        ...e,
                                                        headerName: w.target.value,
                                                    }),
                                                fullWidth: true,
                                                size: 'small',
                                            }),
                                            a.jsx(Re, {
                                                label: b.t('json_table_width'),
                                                type: 'number',
                                                value: e.width ?? '',
                                                onChange: w =>
                                                    n({
                                                        ...e,
                                                        width: w.target.value ? parseInt(w.target.value, 10) : void 0,
                                                    }),
                                                fullWidth: true,
                                                size: 'small',
                                                placeholder: b.t('json_table_width_auto'),
                                                slotProps: {
                                                    htmlInput: {
                                                        min: 30,
                                                    },
                                                },
                                            }),
                                            a.jsxs(wt, {
                                                fullWidth: true,
                                                size: 'small',
                                                children: [
                                                    a.jsx(Ct, {
                                                        children: b.t('json_table_align'),
                                                    }),
                                                    a.jsxs(ct, {
                                                        label: b.t('json_table_align'),
                                                        value: e.align || 'left',
                                                        onChange: w =>
                                                            n({
                                                                ...e,
                                                                align: w.target.value,
                                                            }),
                                                        children: [
                                                            a.jsx(ie, {
                                                                value: 'left',
                                                                children: b.t('json_table_align_left'),
                                                            }),
                                                            a.jsx(ie, {
                                                                value: 'center',
                                                                children: b.t('json_table_align_center'),
                                                            }),
                                                            a.jsx(ie, {
                                                                value: 'right',
                                                                children: b.t('json_table_align_right'),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            a.jsx(Et, {
                                                control: a.jsx(hn, {
                                                    checked: e.visible,
                                                    onChange: w =>
                                                        n({
                                                            ...e,
                                                            visible: w.target.checked,
                                                        }),
                                                }),
                                                label: a.jsx(F, {
                                                    variant: 'body2',
                                                    children: b.t('json_table_visible'),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        a.jsxs(En, {
                            expanded: s.formatting,
                            onChange: () => l('formatting'),
                            disableGutters: true,
                            children: [
                                a.jsx(Nn, {
                                    expandIcon: a.jsx(Bn, {}),
                                    children: a.jsxs(H, {
                                        sx: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                            mr: 1,
                                        },
                                        children: [
                                            a.jsx(F, {
                                                variant: 'subtitle2',
                                                sx: {
                                                    fontWeight: 500,
                                                },
                                                children: b.t('json_table_section_formatting'),
                                            }),
                                            a.jsx(Le, {
                                                title: b.t('json_table_section_reset'),
                                                children: a.jsx('span', {
                                                    children: a.jsx(Se, {
                                                        size: 'small',
                                                        disabled: !p,
                                                        onClick: w => {
                                                            (w.stopPropagation(), h());
                                                        },
                                                        'aria-label': b.t('json_table_section_reset'),
                                                        children: a.jsx(fn, {
                                                            fontSize: 'small',
                                                        }),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                a.jsx(On, {
                                    children: a.jsxs(De, {
                                        spacing: 2,
                                        children: [
                                            a.jsxs(wt, {
                                                fullWidth: true,
                                                size: 'small',
                                                children: [
                                                    a.jsx(Ct, {
                                                        children: b.t('json_table_format_type'),
                                                    }),
                                                    a.jsxs(ct, {
                                                        value: ((_a2 = e.format) == null ? void 0 : _a2.type) || 'auto',
                                                        label: b.t('json_table_format_type'),
                                                        onChange: w => {
                                                            const M = w.target.value;
                                                            M === 'auto'
                                                                ? n({
                                                                      ...e,
                                                                      format: void 0,
                                                                  })
                                                                : C({
                                                                      type: M,
                                                                  });
                                                        },
                                                        children: [
                                                            a.jsxs(ie, {
                                                                value: 'auto',
                                                                children: [
                                                                    b.t('json_table_format_type_auto'),
                                                                    ` (${c})`,
                                                                ],
                                                            }),
                                                            a.jsx(ie, {
                                                                value: 'string',
                                                                children: b.t('json_table_format_type_string'),
                                                            }),
                                                            a.jsx(ie, {
                                                                value: 'number',
                                                                children: b.t('json_table_format_type_number'),
                                                            }),
                                                            a.jsx(ie, {
                                                                value: 'date',
                                                                children: b.t('json_table_format_type_date'),
                                                            }),
                                                            a.jsx(ie, {
                                                                value: 'boolean',
                                                                children: b.t('json_table_format_type_boolean'),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (c === 'number' ||
                                                ((_b = e.format) == null ? void 0 : _b.type) === 'number') &&
                                                a.jsx(lu, {
                                                    format: e.format ?? {
                                                        type: 'number',
                                                    },
                                                    onChange: C,
                                                    discoveredColumn: t,
                                                }),
                                            (c === 'date' ||
                                                ((_c2 = e.format) == null ? void 0 : _c2.type) === 'date') &&
                                                a.jsx(au, {
                                                    format: e.format ?? {
                                                        type: 'date',
                                                    },
                                                    detectedFormat: t == null ? void 0 : t.dateFormat,
                                                    onChange: C,
                                                }),
                                            (c === 'boolean' ||
                                                ((_d2 = e.format) == null ? void 0 : _d2.type) === 'boolean') &&
                                                a.jsx(cu, {
                                                    format: e.format ?? {
                                                        type: 'boolean',
                                                    },
                                                    onChange: C,
                                                }),
                                            (c === 'string' ||
                                                ((_e2 = e.format) == null ? void 0 : _e2.type) === 'string') &&
                                                a.jsx(uu, {
                                                    format: e.format ?? {
                                                        type: 'string',
                                                    },
                                                    onChange: C,
                                                }),
                                            c !== 'number' &&
                                                c !== 'date' &&
                                                c !== 'boolean' &&
                                                c !== 'string' &&
                                                !e.format &&
                                                a.jsx(F, {
                                                    variant: 'body2',
                                                    color: 'text.secondary',
                                                    children: b.t('json_table_no_format_options'),
                                                }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        a.jsxs(En, {
                            expanded: s.styling,
                            onChange: () => l('styling'),
                            disableGutters: true,
                            children: [
                                a.jsx(Nn, {
                                    expandIcon: a.jsx(Bn, {}),
                                    children: a.jsxs(H, {
                                        sx: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                            mr: 1,
                                        },
                                        children: [
                                            a.jsxs(H, {
                                                sx: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                },
                                                children: [
                                                    a.jsx(F, {
                                                        variant: 'subtitle2',
                                                        sx: {
                                                            fontWeight: 500,
                                                        },
                                                        children: b.t('json_table_section_styling'),
                                                    }),
                                                    (((_f = e.cellStyle) == null ? void 0 : _f.length) ?? 0) > 0 &&
                                                        a.jsx(jt, {
                                                            label: e.cellStyle.length,
                                                            size: 'small',
                                                            color: 'primary',
                                                            sx: {
                                                                height: 20,
                                                                fontSize: '0.7rem',
                                                            },
                                                        }),
                                                ],
                                            }),
                                            a.jsx(Le, {
                                                title: b.t('json_table_section_reset'),
                                                children: a.jsx('span', {
                                                    children: a.jsx(Se, {
                                                        size: 'small',
                                                        disabled: !m,
                                                        onClick: w => {
                                                            (w.stopPropagation(), x());
                                                        },
                                                        'aria-label': b.t('json_table_section_reset'),
                                                        children: a.jsx(fn, {
                                                            fontSize: 'small',
                                                        }),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                a.jsx(On, {
                                    children: a.jsx(Hu, {
                                        cellStyle: e.cellStyle || [],
                                        cellStyleMode: e.cellStyleMode ?? 'first-match',
                                        columnType: c,
                                        onStyleChange: j,
                                        onModeChange: R,
                                    }),
                                }),
                            ],
                        }),
                        a.jsxs(En, {
                            expanded: s.advanced,
                            onChange: () => l('advanced'),
                            disableGutters: true,
                            children: [
                                a.jsx(Nn, {
                                    expandIcon: a.jsx(Bn, {}),
                                    children: a.jsxs(H, {
                                        sx: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                            mr: 1,
                                        },
                                        children: [
                                            a.jsx(F, {
                                                variant: 'subtitle2',
                                                sx: {
                                                    fontWeight: 500,
                                                },
                                                children: b.t('json_table_section_advanced'),
                                            }),
                                            a.jsx(Le, {
                                                title: b.t('json_table_section_reset'),
                                                children: a.jsx('span', {
                                                    children: a.jsx(Se, {
                                                        size: 'small',
                                                        disabled: !v,
                                                        onClick: w => {
                                                            (w.stopPropagation(), _());
                                                        },
                                                        'aria-label': b.t('json_table_section_reset'),
                                                        children: a.jsx(fn, {
                                                            fontSize: 'small',
                                                        }),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                a.jsx(On, {
                                    children: a.jsxs(De, {
                                        spacing: 2,
                                        children: [
                                            a.jsx(Vu, {
                                                globalSorting: o,
                                                globalFiltering: r,
                                            }),
                                            a.jsxs(H, {
                                                sx: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                },
                                                children: [
                                                    a.jsxs(wt, {
                                                        size: 'small',
                                                        sx: {
                                                            minWidth: 120,
                                                        },
                                                        children: [
                                                            a.jsx(Ct, {
                                                                children: b.t('json_table_sortable'),
                                                            }),
                                                            a.jsxs(ct, {
                                                                value:
                                                                    e.sortable === true
                                                                        ? 'on'
                                                                        : e.sortable === false
                                                                          ? 'off'
                                                                          : 'auto',
                                                                label: b.t('json_table_sortable'),
                                                                onChange: w =>
                                                                    n({
                                                                        ...e,
                                                                        sortable:
                                                                            w.target.value === 'on'
                                                                                ? true
                                                                                : w.target.value === 'off'
                                                                                  ? false
                                                                                  : 'auto',
                                                                    }),
                                                                children: [
                                                                    a.jsx(ie, {
                                                                        value: 'auto',
                                                                        children: a.jsx('em', {
                                                                            children: b.t('json_table_option_auto'),
                                                                        }),
                                                                    }),
                                                                    a.jsx(ie, {
                                                                        value: 'on',
                                                                        children: b.t('json_table_option_on'),
                                                                    }),
                                                                    a.jsx(ie, {
                                                                        value: 'off',
                                                                        children: b.t('json_table_option_off'),
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    a.jsx(qr, {
                                                        globalEnabled: o,
                                                        columnOverride: e.sortable,
                                                        featureLabel: b.t('json_table_sorting'),
                                                        detectedType: t == null ? void 0 : t.type,
                                                        featureType: 'sortable',
                                                    }),
                                                ],
                                            }),
                                            a.jsxs(H, {
                                                sx: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                },
                                                children: [
                                                    a.jsxs(wt, {
                                                        size: 'small',
                                                        sx: {
                                                            minWidth: 120,
                                                        },
                                                        children: [
                                                            a.jsx(Ct, {
                                                                children: b.t('json_table_filterable'),
                                                            }),
                                                            a.jsxs(ct, {
                                                                value:
                                                                    e.filterable === true
                                                                        ? 'on'
                                                                        : e.filterable === false
                                                                          ? 'off'
                                                                          : 'auto',
                                                                label: b.t('json_table_filterable'),
                                                                onChange: w =>
                                                                    n({
                                                                        ...e,
                                                                        filterable:
                                                                            w.target.value === 'on'
                                                                                ? true
                                                                                : w.target.value === 'off'
                                                                                  ? false
                                                                                  : 'auto',
                                                                    }),
                                                                children: [
                                                                    a.jsx(ie, {
                                                                        value: 'auto',
                                                                        children: a.jsx('em', {
                                                                            children: b.t('json_table_option_auto'),
                                                                        }),
                                                                    }),
                                                                    a.jsx(ie, {
                                                                        value: 'on',
                                                                        children: b.t('json_table_option_on'),
                                                                    }),
                                                                    a.jsx(ie, {
                                                                        value: 'off',
                                                                        children: b.t('json_table_option_off'),
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    a.jsx(qr, {
                                                        globalEnabled: r,
                                                        columnOverride: e.filterable,
                                                        featureLabel: b.t('json_table_filtering'),
                                                        detectedType: t == null ? void 0 : t.type,
                                                        featureType: 'filterable',
                                                    }),
                                                ],
                                            }),
                                            t &&
                                                a.jsxs(et, {
                                                    variant: 'outlined',
                                                    sx: {
                                                        p: 1.5,
                                                        bgcolor: 'action.hover',
                                                    },
                                                    children: [
                                                        a.jsx(F, {
                                                            variant: 'caption',
                                                            color: 'text.secondary',
                                                            sx: {
                                                                fontWeight: 500,
                                                                display: 'block',
                                                                mb: 1,
                                                            },
                                                            children: b.t('json_table_analysis_info'),
                                                        }),
                                                        a.jsxs(De, {
                                                            spacing: 0.5,
                                                            children: [
                                                                a.jsxs(H, {
                                                                    sx: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                    },
                                                                    children: [
                                                                        a.jsx(F, {
                                                                            variant: 'caption',
                                                                            color: 'text.secondary',
                                                                            children: b.t('json_table_type_label'),
                                                                        }),
                                                                        a.jsx(jt, {
                                                                            label: t.type,
                                                                            size: 'small',
                                                                            sx: {
                                                                                backgroundColor: bn[t.type],
                                                                                color: '#fff',
                                                                                height: 18,
                                                                                fontSize: '0.65rem',
                                                                            },
                                                                        }),
                                                                    ],
                                                                }),
                                                                a.jsxs(H, {
                                                                    sx: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                    },
                                                                    children: [
                                                                        a.jsx(F, {
                                                                            variant: 'caption',
                                                                            color: 'text.secondary',
                                                                            children: b.t('json_table_confidence'),
                                                                        }),
                                                                        a.jsxs(F, {
                                                                            variant: 'caption',
                                                                            children: [
                                                                                Math.round(t.confidence * 100),
                                                                                '%',
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                                a.jsxs(H, {
                                                                    sx: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                    },
                                                                    children: [
                                                                        a.jsx(F, {
                                                                            variant: 'caption',
                                                                            color: 'text.secondary',
                                                                            children: b.t('json_table_nulls'),
                                                                        }),
                                                                        a.jsxs(F, {
                                                                            variant: 'caption',
                                                                            children: [
                                                                                t.nullCount,
                                                                                d > 0 &&
                                                                                    ` (${Math.round((t.nullCount / d) * 100)}%)`,
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                                a.jsxs(H, {
                                                                    sx: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                    },
                                                                    children: [
                                                                        a.jsx(F, {
                                                                            variant: 'caption',
                                                                            color: 'text.secondary',
                                                                            children: b.t('json_table_distinct'),
                                                                        }),
                                                                        a.jsx(F, {
                                                                            variant: 'caption',
                                                                            children: t.distinctCount,
                                                                        }),
                                                                    ],
                                                                }),
                                                                t.min !== void 0 &&
                                                                    t.max !== void 0 &&
                                                                    a.jsxs(H, {
                                                                        sx: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                        },
                                                                        children: [
                                                                            a.jsx(F, {
                                                                                variant: 'caption',
                                                                                color: 'text.secondary',
                                                                                children: b.t('json_table_range'),
                                                                            }),
                                                                            a.jsxs(F, {
                                                                                variant: 'caption',
                                                                                children: [
                                                                                    String(t.min),
                                                                                    ' \u2013 ',
                                                                                    String(t.max),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                t.dateFormat &&
                                                                    a.jsxs(H, {
                                                                        sx: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                        },
                                                                        children: [
                                                                            a.jsx(F, {
                                                                                variant: 'caption',
                                                                                color: 'text.secondary',
                                                                                children:
                                                                                    b.t('json_table_date_input_format'),
                                                                            }),
                                                                            a.jsx(F, {
                                                                                variant: 'caption',
                                                                                children: t.dateFormat,
                                                                            }),
                                                                        ],
                                                                    }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    const Yu = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/,
        Ju = /^\d{4}-\d{2}-\d{2}$/,
        Ku = /^(\d{2})\.(\d{2})\.(\d{4})$/,
        Xu = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/,
        Qu = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/,
        Zu = /^(\d{2})\/(\d{2})\/(\d{4})$/,
        ed = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/,
        td = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
    function Wn(e, t) {
        return t >= 1 && t <= 12 && e >= 1 && e <= 31;
    }
    function vo(e, t) {
        return e >= 1 && e <= 12 && t >= 1 && t <= 31;
    }
    function Gn(e, t, n) {
        return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || (n >= 0 && n <= 59));
    }
    const nd = [
        {
            regex: Yu,
            format: 'ISO-8601',
        },
        {
            regex: Ju,
            format: 'YYYY-MM-DD',
            validate: e => {
                const t = parseInt(e[0].slice(5, 7), 10),
                    n = parseInt(e[0].slice(8, 10), 10);
                return Wn(n, t);
            },
        },
        {
            regex: Qu,
            format: 'dd.MM.yyyy HH:mm:ss',
            validate: e => {
                const t = parseInt(e[1], 10),
                    n = parseInt(e[2], 10),
                    o = parseInt(e[4], 10),
                    r = parseInt(e[5], 10),
                    s = parseInt(e[6], 10);
                return Wn(t, n) && Gn(o, r, s);
            },
        },
        {
            regex: Xu,
            format: 'dd.MM.yyyy HH:mm',
            validate: e => {
                const t = parseInt(e[1], 10),
                    n = parseInt(e[2], 10),
                    o = parseInt(e[4], 10),
                    r = parseInt(e[5], 10);
                return Wn(t, n) && Gn(o, r);
            },
        },
        {
            regex: Ku,
            format: 'dd.MM.yyyy',
            validate: e => {
                const t = parseInt(e[1], 10),
                    n = parseInt(e[2], 10);
                return Wn(t, n);
            },
        },
        {
            regex: td,
            format: 'MM/dd/yyyy HH:mm:ss',
            validate: e => {
                const t = parseInt(e[1], 10),
                    n = parseInt(e[2], 10),
                    o = parseInt(e[4], 10),
                    r = parseInt(e[5], 10),
                    s = parseInt(e[6], 10);
                return vo(t, n) && Gn(o, r, s);
            },
        },
        {
            regex: ed,
            format: 'MM/dd/yyyy HH:mm',
            validate: e => {
                const t = parseInt(e[1], 10),
                    n = parseInt(e[2], 10),
                    o = parseInt(e[4], 10),
                    r = parseInt(e[5], 10);
                return vo(t, n) && Gn(o, r);
            },
        },
        {
            regex: Zu,
            format: 'MM/dd/yyyy',
            validate: e => {
                const t = parseInt(e[1], 10),
                    n = parseInt(e[2], 10);
                return vo(t, n);
            },
        },
    ];
    function od(e) {
        const t = e.trim();
        if (!t) return null;
        for (const n of nd) {
            const o = t.match(n.regex);
            if (o) {
                if (n.validate && !n.validate(o)) continue;
                return n.format;
            }
        }
        return null;
    }
    function rd(e) {
        return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? 'epoch-ms' : e >= 1e9 ? 'epoch-s' : null;
    }
    function sd(e) {
        if (e == null)
            return {
                type: 'null',
            };
        if (typeof e == 'boolean')
            return {
                type: 'boolean',
            };
        if (typeof e == 'number') {
            const t = rd(e);
            return t
                ? {
                      type: 'date',
                      dateFormat: t,
                  }
                : {
                      type: 'number',
                  };
        }
        if (typeof e == 'string') {
            const t = od(e);
            return t
                ? {
                      type: 'date',
                      dateFormat: t,
                  }
                : {
                      type: 'string',
                  };
        }
        return Array.isArray(e)
            ? {
                  type: 'array',
              }
            : typeof e == 'object'
              ? {
                    type: 'object',
                }
              : {
                    type: 'string',
                };
    }
    function id(e) {
        const t = Object.keys(e).filter(n => n !== 'null');
        return t.length === 0
            ? 'null'
            : t.length === 1
              ? t[0]
              : t.length === 2 && t.includes('date') && t.includes('string')
                ? 'date'
                : 'mixed';
    }
    function ld(e) {
        let t,
            n = 0;
        for (const [o, r] of Object.entries(e)) r > n && ((t = o), (n = r));
        return t;
    }
    function ad(e) {
        return {
            path: e,
            typeCounts: {},
            dateFormatCounts: {},
            nullCount: 0,
            distinctValues: /* @__PURE__ */ new Set(),
            numMin: void 0,
            numMax: void 0,
            strLenMin: void 0,
            strLenMax: void 0,
            dateMin: void 0,
            dateMax: void 0,
            nonNullCount: 0,
        };
    }
    function Yr(e, t) {
        e[t] = (e[t] || 0) + 1;
    }
    function cd(e, t) {
        if (e == null) return null;
        if (typeof e == 'number')
            return t === 'epoch-ms'
                ? new Date(e).toISOString()
                : t === 'epoch-s'
                  ? new Date(e * 1e3).toISOString()
                  : null;
        if (typeof e != 'string') return null;
        const n = e.trim();
        if (t === 'ISO-8601' || t === 'YYYY-MM-DD') return n;
        if (t == null ? void 0 : t.startsWith('dd.MM.yyyy')) {
            const o = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
            if (o) {
                const r = o[1],
                    s = o[2],
                    i = o[3],
                    l = o[4] || '00',
                    c = o[5] || '00',
                    d = o[6] || '00';
                return `${i}-${s}-${r}T${l}:${c}:${d}`;
            }
        }
        if (t == null ? void 0 : t.startsWith('MM/dd/yyyy')) {
            const o = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
            if (o) {
                const r = o[1],
                    s = o[2],
                    i = o[3],
                    l = o[4] || '00',
                    c = o[5] || '00',
                    d = o[6] || '00';
                return `${i}-${r}-${s}T${l}:${c}:${d}`;
            }
        }
        return null;
    }
    function ud(e, t, n = 100, o = 0.8) {
        const r = /* @__PURE__ */ new Map();
        for (const s of e) r.set(s, ad(s));
        for (const s of t)
            for (const i of e) {
                const l = r.get(i);
                if (!l) {
                    console.warn(`[JsonTable] Missing accumulator for path: ${i}`);
                    continue;
                }
                const c = s[i],
                    d = sd(c);
                if ((Yr(l.typeCounts, d.type), d.type === 'null')) {
                    l.nullCount++;
                    continue;
                }
                if (
                    (l.nonNullCount++,
                    d.dateFormat && Yr(l.dateFormatCounts, d.dateFormat),
                    l.distinctValues.size < n && l.distinctValues.add(c),
                    typeof c == 'number' &&
                        Number.isFinite(c) &&
                        ((l.numMin === void 0 || c < l.numMin) && (l.numMin = c),
                        (l.numMax === void 0 || c > l.numMax) && (l.numMax = c)),
                    typeof c == 'string')
                ) {
                    const u = c.length;
                    ((l.strLenMin === void 0 || u < l.strLenMin) && (l.strLenMin = u),
                        (l.strLenMax === void 0 || u > l.strLenMax) && (l.strLenMax = u));
                }
                if (d.dateFormat) {
                    const u = cd(c, d.dateFormat);
                    u !== null &&
                        ((l.dateMin === void 0 || u < l.dateMin) && (l.dateMin = u),
                        (l.dateMax === void 0 || u > l.dateMax) && (l.dateMax = u));
                }
            }
        return e.map(s => {
            const i = r.get(s);
            let l = id(i.typeCounts);
            l === 'date' && i.nonNullCount > 0 && (i.typeCounts.date || 0) / i.nonNullCount < o && (l = 'string');
            const c = l === 'date' ? ld(i.dateFormatCounts) : void 0,
                d = l === 'date' ? i.typeCounts.date || 0 : i.typeCounts[l] || 0,
                u = i.nonNullCount > 0 ? Math.round((d / i.nonNullCount) * 100) / 100 : 0,
                g = {
                    path: s,
                    type: l,
                    nullable: i.nullCount > 0,
                    typeCounts: {
                        ...i.typeCounts,
                    },
                    nullCount: i.nullCount,
                    distinctCount: i.distinctValues.size,
                    confidence: u,
                };
            return (
                c && (g.dateFormat = c),
                l === 'number' &&
                    (i.numMin !== void 0 && (g.min = i.numMin), i.numMax !== void 0 && (g.max = i.numMax)),
                l === 'date' &&
                    (i.dateMin !== void 0 && (g.min = i.dateMin), i.dateMax !== void 0 && (g.max = i.dateMax)),
                (l === 'string' || l === 'mixed') &&
                    (i.strLenMin !== void 0 && (g.stringLengthMin = i.strLenMin),
                    i.strLenMax !== void 0 && (g.stringLengthMax = i.strLenMax)),
                g
            );
        });
    }
    function io(e, t, n, o, r, s, i, l) {
        if ((s > l.maxDepth && (l.maxDepth = s), s > i)) {
            ((n[t] = e), o.add(t));
            return;
        }
        if (e == null) {
            ((n[t] = null), o.add(t));
            return;
        }
        if (Array.isArray(e)) {
            if (e.length === 0) {
                ((n[t] = null), o.add(t));
                return;
            }
            for (let c = 0; c < e.length; c++) {
                c > l.maxArrayIndex && (l.maxArrayIndex = c);
                const d = `${t}[${c}]`;
                io(e[c], d, n, o, r, s + 1, i, l);
            }
            return;
        }
        if (e !== null && typeof e == 'object') {
            if (r.has(e)) {
                ((n[t] = '[Circular]'), o.add(t));
                return;
            }
            r.add(e);
            const c = Object.keys(e);
            if (c.length === 0) {
                ((n[t] = null), o.add(t));
                return;
            }
            for (const d of c) {
                const u = t ? `${t}.${d}` : d;
                io(e[d], u, n, o, r, s + 1, i, l);
            }
            return;
        }
        ((n[t] = e), o.add(t));
    }
    function dd(e, t = 10) {
        const n = /* @__PURE__ */ new Set(),
            o = {
                maxDepth: 0,
                maxArrayIndex: 0,
            },
            r = [];
        for (const i of e) {
            const l = {},
                c = /* @__PURE__ */ new WeakSet();
            if (i != null && typeof i == 'object' && !Array.isArray(i))
                for (const d of Object.keys(i)) io(i[d], d, l, n, c, 1, t, o);
            else io(i, '_value', l, n, c, 0, t, o);
            r.push(l);
        }
        const s = pd([...n]);
        for (const i of r) for (const l of s) l in i || (i[l] = null);
        return {
            paths: s,
            rows: r,
            maxDepth: o.maxDepth,
            maxArrayIndex: o.maxArrayIndex,
        };
    }
    function pd(e) {
        return e.sort((t, n) => {
            const o = Jr(t),
                r = Jr(n),
                s = Math.min(o.length, r.length);
            for (let i = 0; i < s; i++) {
                const l = o[i],
                    c = r[i],
                    d = Kr(l),
                    u = Kr(c);
                if (d !== null && u !== null) {
                    if (d !== u) return d - u;
                    continue;
                }
                if (l !== c) return l < c ? -1 : 1;
            }
            return o.length - r.length;
        });
    }
    function Jr(e) {
        return e.split(/\./).flatMap(t => {
            const n = [],
                r = /^([^[]*)((?:\[\d+\])*)$/.exec(t);
            if (r) {
                r[1] && n.push(r[1]);
                const s = r[2].match(/\[\d+\]/g);
                s && n.push(...s);
            } else n.push(t);
            return n;
        });
    }
    function Kr(e) {
        const t = /^\[(\d+)\]$/.exec(e);
        return t ? parseInt(t[1], 10) : null;
    }
    const fd = {
        maxDepth: 10,
        maxDistinct: 100,
        dateConfidenceThreshold: 0.8,
    };
    function Es(e, t) {
        const n = performance.now(),
            o = {
                ...fd,
                ...t,
            };
        if (!e || e.length === 0)
            return {
                columns: [],
                rows: [],
                meta: {
                    rowCount: 0,
                    columnCount: 0,
                    maxDepth: 0,
                    maxArrayIndex: 0,
                    arrayPolicy: 'index-columns',
                    flattenPolicy: 'dot-paths',
                    dateDetectionPolicy: 'heuristic',
                    totalNullValues: 0,
                    nullPercentage: 0,
                    analysisTimeMs: 0,
                },
            };
        const r = dd(e, o.maxDepth),
            s = ud(r.paths, r.rows, o.maxDistinct, o.dateConfidenceThreshold),
            i = r.paths.length * r.rows.length,
            l = s.reduce((u, g) => u + g.nullCount, 0),
            c = i > 0 ? Math.round((l / i) * 1e3) / 10 : 0,
            d = Math.round((performance.now() - n) * 100) / 100;
        return {
            columns: s,
            rows: r.rows,
            meta: {
                rowCount: r.rows.length,
                columnCount: s.length,
                maxDepth: r.maxDepth,
                maxArrayIndex: r.maxArrayIndex,
                arrayPolicy: 'index-columns',
                flattenPolicy: 'dot-paths',
                dateDetectionPolicy: 'heuristic',
                totalNullValues: l,
                nullPercentage: c,
                analysisTimeMs: d,
            },
        };
    }
    function gd(e, t) {
        return y.useMemo(
            () => Es(e, t),
            [
                e,
                t == null ? void 0 : t.maxDepth,
                t == null ? void 0 : t.maxDistinct,
                t == null ? void 0 : t.dateConfidenceThreshold,
            ],
        );
    }
    function hd({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: s, socket: i }) {
        const [l, c] = y.useState(n),
            [d, u] = y.useState(null),
            [g, f] = y.useState([]),
            [p, h] = y.useState(false),
            [m, x] = y.useState(false),
            [v, _] = y.useState(null),
            [C, j] = y.useState(null),
            R = y.useRef(false),
            w = y.useRef(() => Promise.resolve()),
            M = y.useRef(n),
            T = y.useMemo(() => JSON.stringify(n), [n]),
            D = y.useMemo(() => JSON.stringify(l) !== T, [l, T]);
        (y.useEffect(() => {
            e && (c(n), (M.current = n), u(n.length > 0 ? n[0].path : null), (R.current = false), j(null), _(null));
        }, [e, n]),
            y.useEffect(() => {
                e && !R.current && ((R.current = true), w.current());
            }, [e]));
        const A = y.useCallback(async () => {
            (h(true), j(null), _(null));
            try {
                const S = s.oid;
                if (!S) return;
                const I = await i.getState(S);
                if ((I == null ? void 0 : I.val) === null || (I == null ? void 0 : I.val) === void 0) return;
                let O;
                const L = I.val;
                if (typeof L == 'string')
                    try {
                        const X = JSON.parse(L);
                        O = Array.isArray(X) ? X : [X];
                    } catch {
                        return;
                    }
                else if (Array.isArray(L)) O = L;
                else if (typeof L == 'object' && L !== null) O = [L];
                else return;
                const Z = s.tableMaxDepth || 10,
                    Q = Es(O, {
                        maxDepth: Z,
                    });
                if (Q.meta.maxDepth > Z) {
                    const X = b
                        .t('json_table_depth_warning')
                        .replace('{{actual}}', String(Q.meta.maxDepth))
                        .replace('{{configured}}', String(Z));
                    _(X);
                }
                f(Q.columns);
                const ue = new Map(M.current.map(X => [X.path, X])),
                    fe = new Set(Q.columns.map(X => X.path)),
                    N = M.current.filter(X => fe.has(X.path)),
                    ae = Q.columns
                        .filter(X => !ue.has(X.path))
                        .map(X => ({
                            path: X.path,
                            visible: true,
                            headerName: X.path.split('.').pop() || X.path,
                            sortable: 'auto',
                            filterable: 'auto',
                        })),
                    te = [...N, ...ae];
                (c(te), (M.current = te), u(X => (X === null && te.length > 0 ? te[0].path : X)));
            } catch (S) {
                const I = S instanceof Error ? S.message : 'Failed to discover columns';
                j(I);
            } finally {
                h(false);
            }
        }, [s, i]);
        (y.useEffect(() => {
            w.current = A;
        }, [A]),
            y.useEffect(() => {
                M.current = l;
            }, [l]));
        const P = y.useCallback(S => {
                c(I => I.map(O => (O.path === S.path ? S : O)));
            }, []),
            U = y.useCallback(S => {
                c(S);
            }, []),
            E = y.useCallback(() => {
                (o(l), t());
            }, [l, o, t]),
            W = y.useCallback(
                (S, I) => {
                    if (I === 'backdropClick' && D) {
                        x(true);
                        return;
                    }
                    t();
                },
                [D, t],
            ),
            Y = y.useMemo(() => (d ? l.find(S => S.path === d) : null), [d, l]),
            q = y.useMemo(() => (d ? g.find(S => S.path === d) : void 0), [d, g]),
            k = y.useMemo(() => 'json-table-column-editor-title', []);
        return a.jsxs(ai, {
            theme: r,
            children: [
                a.jsxs(Uo, {
                    open: e,
                    onClose: W,
                    maxWidth: 'lg',
                    fullWidth: true,
                    'aria-labelledby': k,
                    slotProps: {
                        paper: {
                            sx: {
                                height: '80vh',
                                maxHeight: '900px',
                            },
                        },
                    },
                    children: [
                        a.jsx(qo, {
                            sx: {
                                py: 1.5,
                                px: 2.5,
                            },
                            id: k,
                            children: a.jsxs(H, {
                                sx: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                },
                                children: [
                                    a.jsx(F, {
                                        variant: 'h6',
                                        children: b.t('json_table_column_editor_title'),
                                    }),
                                    a.jsx(Se, {
                                        onClick: () => W(),
                                        size: 'small',
                                        sx: {
                                            color: 'text.secondary',
                                        },
                                        'aria-label': b.t('close'),
                                        children: a.jsx(to, {}),
                                    }),
                                ],
                            }),
                        }),
                        a.jsxs(Yo, {
                            dividers: true,
                            sx: {
                                p: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                            },
                            children: [
                                v &&
                                    a.jsx(Jn, {
                                        severity: 'warning',
                                        onClose: () => _(null),
                                        sx: {
                                            mx: 2,
                                            mt: 2,
                                        },
                                        children: v,
                                    }),
                                C &&
                                    a.jsx(Jn, {
                                        severity: 'error',
                                        onClose: () => j(null),
                                        sx: {
                                            mx: 2,
                                            mt: 2,
                                        },
                                        children: C,
                                    }),
                                a.jsxs(H, {
                                    sx: {
                                        display: 'flex',
                                        flex: 1,
                                        overflow: 'hidden',
                                    },
                                    children: [
                                        a.jsx(H, {
                                            sx: {
                                                width: '40%',
                                                minWidth: 280,
                                                borderRight: 1,
                                                borderColor: 'divider',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                overflow: 'hidden',
                                            },
                                            children: a.jsx(nu, {
                                                columns: l,
                                                discoveredColumns: g,
                                                selectedPath: d,
                                                onSelect: u,
                                                onChange: U,
                                                onRefresh: A,
                                                loading: p,
                                            }),
                                        }),
                                        a.jsx(H, {
                                            sx: {
                                                width: '60%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                overflow: 'hidden',
                                            },
                                            children: Y
                                                ? a.jsx(qu, {
                                                      column: Y,
                                                      discoveredColumn: q,
                                                      onChange: P,
                                                      globalSorting: s.tableSorting,
                                                      globalFiltering: s.tableFiltering,
                                                  })
                                                : a.jsx(H, {
                                                      sx: {
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          justifyContent: 'center',
                                                          height: '100%',
                                                      },
                                                      children: a.jsx(F, {
                                                          variant: 'body2',
                                                          color: 'text.secondary',
                                                          children:
                                                              l.length > 0
                                                                  ? b.t('json_table_select_column')
                                                                  : b.t('json_table_no_columns'),
                                                      }),
                                                  }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        a.jsxs(nr, {
                            sx: {
                                px: 2.5,
                                py: 1.5,
                            },
                            children: [
                                a.jsx(ot, {
                                    onClick: () => W(),
                                    children: b.t('cancel'),
                                }),
                                a.jsx(ot, {
                                    variant: 'contained',
                                    onClick: E,
                                    disabled: !D,
                                    children: b.t('save'),
                                }),
                            ],
                        }),
                    ],
                }),
                a.jsx(Wa, {
                    open: m,
                    autoHideDuration: 3e3,
                    onClose: () => x(false),
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    },
                    children: a.jsx(Jn, {
                        severity: 'warning',
                        onClose: () => x(false),
                        children: b.t('json_table_unsaved_changes'),
                    }),
                }),
            ],
        });
    }
    function md(e, t, n, o) {
        const r = e.name || 'columnConfig',
            s = o.context.theme,
            [i, l] = y.useState(false),
            c = y.useMemo(() => Ps(t[r]), [t, r]),
            d = c.filter(x => x.visible).length,
            u = c.length,
            g = c.some(x => x.format),
            f = c.some(x => x.cellStyle && x.cellStyle.length > 0),
            p = y.useCallback(
                x => {
                    const v = JSON.stringify(x),
                        _ = `b64:${eu(v)}`;
                    n({
                        [r]: _,
                    });
                },
                [r, n],
            ),
            h = y.useCallback(() => {
                l(true);
            }, []),
            m = y.useCallback(() => {
                l(false);
            }, []);
        return a.jsxs(H, {
            sx: {
                mt: 1,
                width: '100%',
            },
            children: [
                a.jsx(ot, {
                    variant: 'outlined',
                    startIcon: a.jsx(Qc, {}),
                    onClick: h,
                    fullWidth: true,
                    sx: {
                        textTransform: 'none',
                    },
                    'aria-label': b.t('json_table_configure_columns'),
                    'aria-haspopup': 'dialog',
                    children: b.t('json_table_configure_columns'),
                }),
                u > 0 &&
                    a.jsxs(F, {
                        variant: 'caption',
                        color: 'primary.main',
                        sx: {
                            mt: 0.5,
                            display: 'block',
                        },
                        'aria-live': 'polite',
                        children: [
                            d,
                            ' / ',
                            u,
                            ' ',
                            b.t('json_table_columns_visible'),
                            g && ` \xB7 ${b.t('json_table_has_formatting')}`,
                            f && ` \xB7 ${b.t('json_table_has_styling')}`,
                        ],
                    }),
                a.jsx(hd, {
                    open: i,
                    onClose: m,
                    columns: c,
                    onSave: p,
                    theme: s,
                    data: t,
                    socket: o.context.socket,
                }),
            ],
        });
    }
    const yd = () => [
        {
            label: '',
            type: 'custom',
            component: () =>
                a.jsx(qe, {
                    dividerText: 'json_table_column_config',
                }),
        },
        {
            name: 'columnConfig',
            label: 'json_table_column_config_label',
            type: 'custom',
            component: md,
        },
        {
            label: '',
            type: 'custom',
            component: () =>
                a.jsx(qe, {
                    dividerText: 'json_table_features',
                }),
        },
        {
            name: 'tableSorting',
            type: 'checkbox',
            label: 'json_table_sorting',
            default: true,
        },
        {
            name: 'tableSortingMulti',
            type: 'checkbox',
            label: 'json_table_sorting_multi',
            default: false,
            tooltip: 'json_table_sorting_multi_tooltip',
        },
        {
            name: 'tableFiltering',
            type: 'checkbox',
            label: 'json_table_filtering',
            default: true,
            tooltip: 'json_table_filtering_tooltip',
        },
        {
            name: 'tableQuickFilter',
            type: 'checkbox',
            label: 'json_table_quick_filter',
            default: false,
        },
        {
            name: 'tableColumnMenu',
            type: 'checkbox',
            label: 'json_table_column_menu',
            default: true,
        },
        {
            name: 'tableHiding',
            type: 'checkbox',
            label: 'json_table_hiding',
            default: true,
            tooltip: 'json_table_hiding_tooltip',
        },
        {
            label: '',
            type: 'custom',
            component: () =>
                a.jsx(qe, {
                    dividerText: 'json_table_pagination',
                }),
        },
        {
            name: 'tablePagination',
            type: 'checkbox',
            label: 'json_table_pagination_enabled',
            default: true,
        },
        {
            name: 'tablePageSize',
            type: 'number',
            label: 'json_table_page_size',
            default: 25,
            min: 1,
        },
        {
            name: 'tablePageSizeOptions',
            type: 'text',
            label: 'json_table_page_size_options',
            default: '10,25,50,100',
            tooltip: 'json_table_page_size_options_tooltip',
        },
        {
            name: 'tableVirtualizeThreshold',
            type: 'number',
            label: 'json_table_virtualize_threshold',
            default: 50,
            min: 0,
            tooltip: 'json_table_virtualize_threshold_tooltip',
        },
        {
            label: '',
            type: 'custom',
            component: () =>
                a.jsx(qe, {
                    dividerText: 'json_table_selection',
                }),
        },
        {
            name: 'tableRowSelection',
            type: 'checkbox',
            label: 'json_table_row_selection',
            default: false,
        },
        {
            label: '',
            type: 'custom',
            component: () =>
                a.jsx(qe, {
                    dividerText: 'json_table_analysis',
                }),
        },
        {
            name: 'tableMaxDepth',
            type: 'number',
            label: 'json_table_max_depth',
            default: 10,
            min: 1,
            max: 50,
            tooltip: 'json_table_max_depth_tooltip',
        },
        {
            label: '',
            type: 'custom',
            component: () =>
                a.jsx(qe, {
                    dividerText: 'json_table_layout',
                }),
        },
        {
            name: 'tableDensity',
            label: 'json_table_density',
            type: 'select',
            options: [
                {
                    value: 'compact',
                    label: 'compact',
                },
                {
                    value: 'standard',
                    label: 'standard',
                },
                {
                    value: 'comfortable',
                    label: 'comfortable',
                },
            ],
            default: 'standard',
            noTranslation: true,
        },
        {
            name: 'tableRowHeight',
            type: 'number',
            label: 'json_table_row_height',
            min: 20,
            tooltip: 'json_table_row_height_tooltip',
        },
        {
            name: 'tableHeaderHeight',
            type: 'number',
            label: 'json_table_header_height',
            min: 20,
        },
        {
            name: 'tableAutoSize',
            type: 'checkbox',
            label: 'json_table_auto_size',
            default: false,
        },
        {
            name: 'tableHeaderElevation',
            label: 'json_table_header_elevation',
            type: 'slider',
            min: 0,
            max: 24,
            step: 1,
            default: 6,
            tooltip: 'json_table_header_elevation_tooltip',
        },
        {
            name: 'jsonTablePadding',
            type: 'number',
            label: 'json_table_padding',
            default: 1,
            step: 0.5,
            min: 0,
        },
        {
            label: '',
            type: 'custom',
            component: () =>
                a.jsx(qe, {
                    dividerText: 'group_table_border',
                }),
        },
        {
            name: 'borderWidth',
            label: 'table_border_width',
            type: 'slider',
            min: 0,
            max: 20,
            step: 1,
            default: 0,
        },
        {
            name: 'borderStyle',
            label: 'table_border_style',
            type: 'select',
            options: [
                {
                    value: 'none',
                    label: 'none',
                },
                {
                    value: 'dotted',
                    label: 'dotted',
                },
                {
                    value: 'dashed',
                    label: 'dashed',
                },
                {
                    value: 'solid',
                    label: 'solid',
                },
                {
                    value: 'double',
                    label: 'double',
                },
                {
                    value: 'groove',
                    label: 'groove',
                },
                {
                    value: 'ridge',
                    label: 'ridge',
                },
                {
                    value: 'inset',
                    label: 'inset',
                },
                {
                    value: 'outset',
                    label: 'outset',
                },
                {
                    value: 'hidden',
                    label: 'hidden',
                },
            ],
            default: 'solid',
            noTranslation: true,
        },
        {
            name: 'borderColor',
            label: 'table_border_color',
            default: '',
            type: 'custom',
            component: (e, t, n, o) =>
                a.jsx(bt, {
                    field: {
                        ...e,
                        noGradient: true,
                    },
                    data: t,
                    onDataChange: n,
                    props: o,
                }),
        },
        {
            name: 'borderRadius',
            label: 'table_border_radius',
            type: 'text',
            default: '',
        },
        {
            label: '',
            type: 'custom',
            component: () =>
                a.jsx(qe, {
                    dividerText: 'json_table_header_style',
                }),
        },
        {
            name: 'tableHeaderBgColor',
            label: 'json_table_header_bg_color',
            default: '',
            type: 'custom',
            component: (e, t, n, o) =>
                a.jsx(bt, {
                    field: e,
                    data: t,
                    onDataChange: n,
                    props: o,
                }),
        },
        {
            name: 'tableHeaderTextColor',
            label: 'json_table_header_text_color',
            default: '',
            type: 'custom',
            component: (e, t, n, o) =>
                a.jsx(bt, {
                    field: {
                        ...e,
                        noGradient: true,
                    },
                    data: t,
                    onDataChange: n,
                    props: o,
                }),
        },
        {
            name: 'tableHeaderFontSize',
            type: 'number',
            label: 'json_table_header_font_size',
            min: 8,
        },
        {
            label: '',
            type: 'custom',
            component: () => a.jsx(qe, {}),
        },
        {
            name: 'headerBorderWidth',
            label: 'json_table_header_border_width',
            type: 'slider',
            min: 0,
            max: 10,
            step: 1,
            default: 0,
        },
        {
            name: 'headerBorderColor',
            label: 'json_table_header_border_color',
            default: '',
            type: 'custom',
            component: (e, t, n, o) =>
                a.jsx(bt, {
                    field: {
                        ...e,
                        noGradient: true,
                    },
                    data: t,
                    onDataChange: n,
                    props: o,
                }),
        },
        {
            label: '',
            type: 'custom',
            component: () =>
                a.jsx(qe, {
                    dividerText: 'json_table_borders',
                }),
        },
        {
            name: 'tableShowCellBorders',
            type: 'checkbox',
            label: 'json_table_show_cell_borders',
            default: false,
        },
        {
            name: 'verticalCellBorderWidth',
            label: 'vertical_cell_border_width',
            type: 'slider',
            min: 0,
            max: 10,
            step: 1,
            default: 1,
            hidden: '!data.tableShowCellBorders',
        },
        {
            name: 'verticalCellBorderColor',
            label: 'vertical_cell_border_color',
            default: '',
            type: 'custom',
            hidden: '!data.tableShowCellBorders',
            component: (e, t, n, o) =>
                a.jsx(bt, {
                    field: {
                        ...e,
                        noGradient: true,
                    },
                    data: t,
                    onDataChange: n,
                    props: o,
                }),
        },
        {
            label: '',
            type: 'custom',
            component: () => a.jsx(qe, {}),
        },
        {
            name: 'tableShowRowBorders',
            type: 'checkbox',
            label: 'json_table_show_row_borders',
            default: true,
        },
        {
            name: 'horizontalCellBorderWidth',
            label: 'horizontal_cell_border_width',
            type: 'slider',
            min: 0,
            max: 10,
            step: 1,
            default: 1,
            hidden: '!data.tableShowRowBorders',
        },
        {
            name: 'horizontalCellBorderColor',
            label: 'horizontal_cell_border_color',
            default: '',
            type: 'custom',
            hidden: '!data.tableShowRowBorders',
            component: (e, t, n, o) =>
                a.jsx(bt, {
                    field: {
                        ...e,
                        noGradient: true,
                    },
                    data: t,
                    onDataChange: n,
                    props: o,
                }),
        },
        {
            label: '',
            type: 'custom',
            component: () =>
                a.jsx(qe, {
                    dividerText: 'json_table_cell_style',
                }),
        },
        {
            name: 'evenRowColor',
            label: 'json_table_even_row_color',
            default: '',
            type: 'custom',
            component: (e, t, n, o) =>
                a.jsx(bt, {
                    field: e,
                    data: t,
                    onDataChange: n,
                    props: o,
                }),
        },
        {
            name: 'oddRowColor',
            label: 'json_table_odd_row_color',
            default: '',
            type: 'custom',
            component: (e, t, n, o) =>
                a.jsx(bt, {
                    field: e,
                    data: t,
                    onDataChange: n,
                    props: o,
                }),
        },
        {
            name: 'tableCellFontSize',
            type: 'number',
            label: 'json_table_cell_font_size',
            min: 8,
        },
    ];
    function St(e, t) {
        return typeof e == 'function' ? e(t) : e;
    }
    function Ge(e, t) {
        return n => {
            t.setState(o => ({
                ...o,
                [e]: St(n, o[e]),
            }));
        };
    }
    function uo(e) {
        return e instanceof Function;
    }
    function vd(e) {
        return Array.isArray(e) && e.every(t => typeof t == 'number');
    }
    function bd(e, t) {
        const n = [],
            o = r => {
                r.forEach(s => {
                    n.push(s);
                    const i = t(s);
                    i != null && i.length && o(i);
                });
            };
        return (o(e), n);
    }
    function V(e, t, n) {
        let o = [],
            r;
        return s => {
            let i;
            n.key && n.debug && (i = Date.now());
            const l = e(s);
            if (!(l.length !== o.length || l.some((u, g) => o[g] !== u))) return r;
            o = l;
            let d;
            if (
                (n.key && n.debug && (d = Date.now()),
                (r = t(...l)),
                n == null || n.onChange == null || n.onChange(r),
                n.key && n.debug && n != null && n.debug())
            ) {
                const u = Math.round((Date.now() - i) * 100) / 100,
                    g = Math.round((Date.now() - d) * 100) / 100,
                    f = g / 16,
                    p = (h, m) => {
                        for (h = String(h); h.length < m; ) h = ' ' + h;
                        return h;
                    };
                console.info(
                    `%c\u23F1 ${p(g, 5)} /${p(u, 5)} ms`,
                    `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`,
                    n == null ? void 0 : n.key,
                );
            }
            return r;
        };
    }
    function B(e, t, n, o) {
        return {
            debug: () => {
                var r;
                return (r = e == null ? void 0 : e.debugAll) != null ? r : e[t];
            },
            key: false,
            onChange: o,
        };
    }
    function xd(e, t, n, o) {
        const r = () => {
                var i;
                return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
            },
            s = {
                id: `${t.id}_${n.id}`,
                row: t,
                column: n,
                getValue: () => t.getValue(o),
                renderValue: r,
                getContext: V(
                    () => [e, n, t, s],
                    (i, l, c, d) => ({
                        table: i,
                        column: l,
                        row: c,
                        cell: d,
                        getValue: d.getValue,
                        renderValue: d.renderValue,
                    }),
                    B(e.options, 'debugCells'),
                ),
            };
        return (
            e._features.forEach(i => {
                i.createCell == null || i.createCell(s, n, t, e);
            }, {}),
            s
        );
    }
    function _d(e, t, n, o) {
        var r, s;
        const l = {
                ...e._getDefaultColumnDef(),
                ...t,
            },
            c = l.accessorKey;
        let d =
                (r =
                    (s = l.id) != null
                        ? s
                        : c
                          ? typeof String.prototype.replaceAll == 'function'
                              ? c.replaceAll('.', '_')
                              : c.replace(/\./g, '_')
                          : void 0) != null
                    ? r
                    : typeof l.header == 'string'
                      ? l.header
                      : void 0,
            u;
        if (
            (l.accessorFn
                ? (u = l.accessorFn)
                : c &&
                  (c.includes('.')
                      ? (u = f => {
                            let p = f;
                            for (const m of c.split('.')) {
                                var h;
                                p = (h = p) == null ? void 0 : h[m];
                            }
                            return p;
                        })
                      : (u = f => f[l.accessorKey])),
            !d)
        )
            throw new Error();
        let g = {
            id: `${String(d)}`,
            accessorFn: u,
            parent: o,
            depth: n,
            columnDef: l,
            columns: [],
            getFlatColumns: V(
                () => [true],
                () => {
                    var f;
                    return [g, ...((f = g.columns) == null ? void 0 : f.flatMap(p => p.getFlatColumns()))];
                },
                B(e.options, 'debugColumns'),
            ),
            getLeafColumns: V(
                () => [e._getOrderColumnsFn()],
                f => {
                    var p;
                    if ((p = g.columns) != null && p.length) {
                        let h = g.columns.flatMap(m => m.getLeafColumns());
                        return f(h);
                    }
                    return [g];
                },
                B(e.options, 'debugColumns'),
            ),
        };
        for (const f of e._features) f.createColumn == null || f.createColumn(g, e);
        return g;
    }
    const Ie = 'debugHeaders';
    function Xr(e, t, n) {
        var o;
        let s = {
            id: (o = n.id) != null ? o : t.id,
            column: t,
            index: n.index,
            isPlaceholder: !!n.isPlaceholder,
            placeholderId: n.placeholderId,
            depth: n.depth,
            subHeaders: [],
            colSpan: 0,
            rowSpan: 0,
            headerGroup: null,
            getLeafHeaders: () => {
                const i = [],
                    l = c => {
                        (c.subHeaders && c.subHeaders.length && c.subHeaders.map(l), i.push(c));
                    };
                return (l(s), i);
            },
            getContext: () => ({
                table: e,
                header: s,
                column: t,
            }),
        };
        return (
            e._features.forEach(i => {
                i.createHeader == null || i.createHeader(s, e);
            }),
            s
        );
    }
    const wd = {
        createTable: e => {
            ((e.getHeaderGroups = V(
                () => [
                    e.getAllColumns(),
                    e.getVisibleLeafColumns(),
                    e.getState().columnPinning.left,
                    e.getState().columnPinning.right,
                ],
                (t, n, o, r) => {
                    var s, i;
                    const l =
                            (s = o == null ? void 0 : o.map(g => n.find(f => f.id === g)).filter(Boolean)) != null
                                ? s
                                : [],
                        c =
                            (i = r == null ? void 0 : r.map(g => n.find(f => f.id === g)).filter(Boolean)) != null
                                ? i
                                : [],
                        d = n.filter(g => !(o != null && o.includes(g.id)) && !(r != null && r.includes(g.id)));
                    return Un(t, [...l, ...d, ...c], e);
                },
                B(e.options, Ie),
            )),
                (e.getCenterHeaderGroups = V(
                    () => [
                        e.getAllColumns(),
                        e.getVisibleLeafColumns(),
                        e.getState().columnPinning.left,
                        e.getState().columnPinning.right,
                    ],
                    (t, n, o, r) => (
                        (n = n.filter(s => !(o != null && o.includes(s.id)) && !(r != null && r.includes(s.id)))),
                        Un(t, n, e, 'center')
                    ),
                    B(e.options, Ie),
                )),
                (e.getLeftHeaderGroups = V(
                    () => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left],
                    (t, n, o) => {
                        var r;
                        const s =
                            (r = o == null ? void 0 : o.map(i => n.find(l => l.id === i)).filter(Boolean)) != null
                                ? r
                                : [];
                        return Un(t, s, e, 'left');
                    },
                    B(e.options, Ie),
                )),
                (e.getRightHeaderGroups = V(
                    () => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right],
                    (t, n, o) => {
                        var r;
                        const s =
                            (r = o == null ? void 0 : o.map(i => n.find(l => l.id === i)).filter(Boolean)) != null
                                ? r
                                : [];
                        return Un(t, s, e, 'right');
                    },
                    B(e.options, Ie),
                )),
                (e.getFooterGroups = V(
                    () => [e.getHeaderGroups()],
                    t => [...t].reverse(),
                    B(e.options, Ie),
                )),
                (e.getLeftFooterGroups = V(
                    () => [e.getLeftHeaderGroups()],
                    t => [...t].reverse(),
                    B(e.options, Ie),
                )),
                (e.getCenterFooterGroups = V(
                    () => [e.getCenterHeaderGroups()],
                    t => [...t].reverse(),
                    B(e.options, Ie),
                )),
                (e.getRightFooterGroups = V(
                    () => [e.getRightHeaderGroups()],
                    t => [...t].reverse(),
                    B(e.options, Ie),
                )),
                (e.getFlatHeaders = V(
                    () => [e.getHeaderGroups()],
                    t => t.map(n => n.headers).flat(),
                    B(e.options, Ie),
                )),
                (e.getLeftFlatHeaders = V(
                    () => [e.getLeftHeaderGroups()],
                    t => t.map(n => n.headers).flat(),
                    B(e.options, Ie),
                )),
                (e.getCenterFlatHeaders = V(
                    () => [e.getCenterHeaderGroups()],
                    t => t.map(n => n.headers).flat(),
                    B(e.options, Ie),
                )),
                (e.getRightFlatHeaders = V(
                    () => [e.getRightHeaderGroups()],
                    t => t.map(n => n.headers).flat(),
                    B(e.options, Ie),
                )),
                (e.getCenterLeafHeaders = V(
                    () => [e.getCenterFlatHeaders()],
                    t =>
                        t.filter(n => {
                            var o;
                            return !((o = n.subHeaders) != null && o.length);
                        }),
                    B(e.options, Ie),
                )),
                (e.getLeftLeafHeaders = V(
                    () => [e.getLeftFlatHeaders()],
                    t =>
                        t.filter(n => {
                            var o;
                            return !((o = n.subHeaders) != null && o.length);
                        }),
                    B(e.options, Ie),
                )),
                (e.getRightLeafHeaders = V(
                    () => [e.getRightFlatHeaders()],
                    t =>
                        t.filter(n => {
                            var o;
                            return !((o = n.subHeaders) != null && o.length);
                        }),
                    B(e.options, Ie),
                )),
                (e.getLeafHeaders = V(
                    () => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()],
                    (t, n, o) => {
                        var r, s, i, l, c, d;
                        return [
                            ...((r = (s = t[0]) == null ? void 0 : s.headers) != null ? r : []),
                            ...((i = (l = n[0]) == null ? void 0 : l.headers) != null ? i : []),
                            ...((c = (d = o[0]) == null ? void 0 : d.headers) != null ? c : []),
                        ]
                            .map(u => u.getLeafHeaders())
                            .flat();
                    },
                    B(e.options, Ie),
                )));
        },
    };
    function Un(e, t, n, o) {
        var r, s;
        let i = 0;
        const l = function (f, p) {
            (p === void 0 && (p = 1),
                (i = Math.max(i, p)),
                f
                    .filter(h => h.getIsVisible())
                    .forEach(h => {
                        var m;
                        (m = h.columns) != null && m.length && l(h.columns, p + 1);
                    }, 0));
        };
        l(e);
        let c = [];
        const d = (f, p) => {
                const h = {
                        depth: p,
                        id: [o, `${p}`].filter(Boolean).join('_'),
                        headers: [],
                    },
                    m = [];
                (f.forEach(x => {
                    const v = [...m].reverse()[0],
                        _ = x.column.depth === h.depth;
                    let C,
                        j = false;
                    if (
                        (_ && x.column.parent ? (C = x.column.parent) : ((C = x.column), (j = true)),
                        v && (v == null ? void 0 : v.column) === C)
                    )
                        v.subHeaders.push(x);
                    else {
                        const R = Xr(n, C, {
                            id: [o, p, C.id, x == null ? void 0 : x.id].filter(Boolean).join('_'),
                            isPlaceholder: j,
                            placeholderId: j ? `${m.filter(w => w.column === C).length}` : void 0,
                            depth: p,
                            index: m.length,
                        });
                        (R.subHeaders.push(x), m.push(R));
                    }
                    (h.headers.push(x), (x.headerGroup = h));
                }),
                    c.push(h),
                    p > 0 && d(m, p - 1));
            },
            u = t.map((f, p) =>
                Xr(n, f, {
                    depth: i,
                    index: p,
                }),
            );
        (d(u, i - 1), c.reverse());
        const g = f =>
            f
                .filter(h => h.column.getIsVisible())
                .map(h => {
                    let m = 0,
                        x = 0,
                        v = [0];
                    h.subHeaders && h.subHeaders.length
                        ? ((v = []),
                          g(h.subHeaders).forEach(C => {
                              let { colSpan: j, rowSpan: R } = C;
                              ((m += j), v.push(R));
                          }))
                        : (m = 1);
                    const _ = Math.min(...v);
                    return (
                        (x = x + _),
                        (h.colSpan = m),
                        (h.rowSpan = x),
                        {
                            colSpan: m,
                            rowSpan: x,
                        }
                    );
                });
        return (g((r = (s = c[0]) == null ? void 0 : s.headers) != null ? r : []), c);
    }
    const or = (e, t, n, o, r, s, i) => {
            let l = {
                id: t,
                index: o,
                original: n,
                depth: r,
                parentId: i,
                _valuesCache: {},
                _uniqueValuesCache: {},
                getValue: c => {
                    if (l._valuesCache.hasOwnProperty(c)) return l._valuesCache[c];
                    const d = e.getColumn(c);
                    if (d != null && d.accessorFn)
                        return ((l._valuesCache[c] = d.accessorFn(l.original, o)), l._valuesCache[c]);
                },
                getUniqueValues: c => {
                    if (l._uniqueValuesCache.hasOwnProperty(c)) return l._uniqueValuesCache[c];
                    const d = e.getColumn(c);
                    if (d != null && d.accessorFn)
                        return d.columnDef.getUniqueValues
                            ? ((l._uniqueValuesCache[c] = d.columnDef.getUniqueValues(l.original, o)),
                              l._uniqueValuesCache[c])
                            : ((l._uniqueValuesCache[c] = [l.getValue(c)]), l._uniqueValuesCache[c]);
                },
                renderValue: c => {
                    var d;
                    return (d = l.getValue(c)) != null ? d : e.options.renderFallbackValue;
                },
                subRows: [],
                getLeafRows: () => bd(l.subRows, c => c.subRows),
                getParentRow: () => (l.parentId ? e.getRow(l.parentId, true) : void 0),
                getParentRows: () => {
                    let c = [],
                        d = l;
                    for (;;) {
                        const u = d.getParentRow();
                        if (!u) break;
                        (c.push(u), (d = u));
                    }
                    return c.reverse();
                },
                getAllCells: V(
                    () => [e.getAllLeafColumns()],
                    c => c.map(d => xd(e, l, d, d.id)),
                    B(e.options, 'debugRows'),
                ),
                _getAllCellsByColumnId: V(
                    () => [l.getAllCells()],
                    c => c.reduce((d, u) => ((d[u.column.id] = u), d), {}),
                    B(e.options, 'debugRows'),
                ),
            };
            for (let c = 0; c < e._features.length; c++) {
                const d = e._features[c];
                d == null || d.createRow == null || d.createRow(l, e);
            }
            return l;
        },
        Cd = {
            createColumn: (e, t) => {
                ((e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id)),
                    (e.getFacetedRowModel = () =>
                        e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel()),
                    (e._getFacetedUniqueValues =
                        t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id)),
                    (e.getFacetedUniqueValues = () =>
                        e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map()),
                    (e._getFacetedMinMaxValues =
                        t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id)),
                    (e.getFacetedMinMaxValues = () => {
                        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
                    }));
            },
        },
        Os = (e, t, n) => {
            var o, r;
            const s = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
            return !!(
                !((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) &&
                r.includes(s)
            );
        };
    Os.autoRemove = e => Ze(e);
    const Ns = (e, t, n) => {
        var o;
        return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
    };
    Ns.autoRemove = e => Ze(e);
    const Ls = (e, t, n) => {
        var o;
        return (
            ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) ===
            (n == null ? void 0 : n.toLowerCase())
        );
    };
    Ls.autoRemove = e => Ze(e);
    const Hs = (e, t, n) => {
        var o;
        return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
    };
    Hs.autoRemove = e => Ze(e);
    const Vs = (e, t, n) =>
        !n.some(o => {
            var r;
            return !((r = e.getValue(t)) != null && r.includes(o));
        });
    Vs.autoRemove = e => Ze(e) || !(e != null && e.length);
    const Bs = (e, t, n) =>
        n.some(o => {
            var r;
            return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
        });
    Bs.autoRemove = e => Ze(e) || !(e != null && e.length);
    const Ws = (e, t, n) => e.getValue(t) === n;
    Ws.autoRemove = e => Ze(e);
    const Gs = (e, t, n) => e.getValue(t) == n;
    Gs.autoRemove = e => Ze(e);
    const rr = (e, t, n) => {
        let [o, r] = n;
        const s = e.getValue(t);
        return s >= o && s <= r;
    };
    rr.resolveFilterValue = e => {
        let [t, n] = e,
            o = typeof t != 'number' ? parseFloat(t) : t,
            r = typeof n != 'number' ? parseFloat(n) : n,
            s = t === null || Number.isNaN(o) ? -1 / 0 : o,
            i = n === null || Number.isNaN(r) ? 1 / 0 : r;
        if (s > i) {
            const l = s;
            ((s = i), (i = l));
        }
        return [s, i];
    };
    rr.autoRemove = e => Ze(e) || (Ze(e[0]) && Ze(e[1]));
    const at = {
        includesString: Os,
        includesStringSensitive: Ns,
        equalsString: Ls,
        arrIncludes: Hs,
        arrIncludesAll: Vs,
        arrIncludesSome: Bs,
        equals: Ws,
        weakEquals: Gs,
        inNumberRange: rr,
    };
    function Ze(e) {
        return e == null || e === '';
    }
    const Sd = {
        getDefaultColumnDef: () => ({
            filterFn: 'auto',
        }),
        getInitialState: e => ({
            columnFilters: [],
            ...e,
        }),
        getDefaultOptions: e => ({
            onColumnFiltersChange: Ge('columnFilters', e),
            filterFromLeafRows: false,
            maxLeafRowFilterDepth: 100,
        }),
        createColumn: (e, t) => {
            ((e.getAutoFilterFn = () => {
                const n = t.getCoreRowModel().flatRows[0],
                    o = n == null ? void 0 : n.getValue(e.id);
                return typeof o == 'string'
                    ? at.includesString
                    : typeof o == 'number'
                      ? at.inNumberRange
                      : typeof o == 'boolean' || (o !== null && typeof o == 'object')
                        ? at.equals
                        : Array.isArray(o)
                          ? at.arrIncludes
                          : at.weakEquals;
            }),
                (e.getFilterFn = () => {
                    var n, o;
                    return uo(e.columnDef.filterFn)
                        ? e.columnDef.filterFn
                        : e.columnDef.filterFn === 'auto'
                          ? e.getAutoFilterFn()
                          : (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null
                            ? n
                            : at[e.columnDef.filterFn];
                }),
                (e.getCanFilter = () => {
                    var n, o, r;
                    return (
                        ((n = e.columnDef.enableColumnFilter) != null ? n : true) &&
                        ((o = t.options.enableColumnFilters) != null ? o : true) &&
                        ((r = t.options.enableFilters) != null ? r : true) &&
                        !!e.accessorFn
                    );
                }),
                (e.getIsFiltered = () => e.getFilterIndex() > -1),
                (e.getFilterValue = () => {
                    var n;
                    return (n = t.getState().columnFilters) == null || (n = n.find(o => o.id === e.id)) == null
                        ? void 0
                        : n.value;
                }),
                (e.getFilterIndex = () => {
                    var n, o;
                    return (n = (o = t.getState().columnFilters) == null ? void 0 : o.findIndex(r => r.id === e.id)) !=
                        null
                        ? n
                        : -1;
                }),
                (e.setFilterValue = n => {
                    t.setColumnFilters(o => {
                        const r = e.getFilterFn(),
                            s = o == null ? void 0 : o.find(u => u.id === e.id),
                            i = St(n, s ? s.value : void 0);
                        if (Qr(r, i, e)) {
                            var l;
                            return (l = o == null ? void 0 : o.filter(u => u.id !== e.id)) != null ? l : [];
                        }
                        const c = {
                            id: e.id,
                            value: i,
                        };
                        if (s) {
                            var d;
                            return (d = o == null ? void 0 : o.map(u => (u.id === e.id ? c : u))) != null ? d : [];
                        }
                        return o != null && o.length ? [...o, c] : [c];
                    });
                }));
        },
        createRow: (e, t) => {
            ((e.columnFilters = {}), (e.columnFiltersMeta = {}));
        },
        createTable: e => {
            ((e.setColumnFilters = t => {
                const n = e.getAllLeafColumns(),
                    o = r => {
                        var s;
                        return (s = St(t, r)) == null
                            ? void 0
                            : s.filter(i => {
                                  const l = n.find(c => c.id === i.id);
                                  if (l) {
                                      const c = l.getFilterFn();
                                      if (Qr(c, i.value, l)) return false;
                                  }
                                  return true;
                              });
                    };
                e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(o);
            }),
                (e.resetColumnFilters = t => {
                    var n, o;
                    e.setColumnFilters(
                        t ? [] : (n = (o = e.initialState) == null ? void 0 : o.columnFilters) != null ? n : [],
                    );
                }),
                (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
                (e.getFilteredRowModel = () => (
                    !e._getFilteredRowModel &&
                        e.options.getFilteredRowModel &&
                        (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
                    e.options.manualFiltering || !e._getFilteredRowModel
                        ? e.getPreFilteredRowModel()
                        : e._getFilteredRowModel()
                )));
        },
    };
    function Qr(e, t, n) {
        return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > 'u' || (typeof t == 'string' && !t);
    }
    const jd = (e, t, n) =>
            n.reduce((o, r) => {
                const s = r.getValue(e);
                return o + (typeof s == 'number' ? s : 0);
            }, 0),
        Rd = (e, t, n) => {
            let o;
            return (
                n.forEach(r => {
                    const s = r.getValue(e);
                    s != null && (o > s || (o === void 0 && s >= s)) && (o = s);
                }),
                o
            );
        },
        Md = (e, t, n) => {
            let o;
            return (
                n.forEach(r => {
                    const s = r.getValue(e);
                    s != null && (o < s || (o === void 0 && s >= s)) && (o = s);
                }),
                o
            );
        },
        $d = (e, t, n) => {
            let o, r;
            return (
                n.forEach(s => {
                    const i = s.getValue(e);
                    i != null && (o === void 0 ? i >= i && (o = r = i) : (o > i && (o = i), r < i && (r = i)));
                }),
                [o, r]
            );
        },
        Ad = (e, t) => {
            let n = 0,
                o = 0;
            if (
                (t.forEach(r => {
                    let s = r.getValue(e);
                    s != null && (s = +s) >= s && (++n, (o += s));
                }),
                n)
            )
                return o / n;
        },
        Id = (e, t) => {
            if (!t.length) return;
            const n = t.map(s => s.getValue(e));
            if (!vd(n)) return;
            if (n.length === 1) return n[0];
            const o = Math.floor(n.length / 2),
                r = n.sort((s, i) => s - i);
            return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
        },
        Pd = (e, t) => Array.from(new Set(t.map(n => n.getValue(e))).values()),
        Fd = (e, t) => new Set(t.map(n => n.getValue(e))).size,
        zd = (e, t) => t.length,
        bo = {
            sum: jd,
            min: Rd,
            max: Md,
            extent: $d,
            mean: Ad,
            median: Id,
            unique: Pd,
            uniqueCount: Fd,
            count: zd,
        },
        Td = {
            getDefaultColumnDef: () => ({
                aggregatedCell: e => {
                    var t, n;
                    return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null
                        ? t
                        : null;
                },
                aggregationFn: 'auto',
            }),
            getInitialState: e => ({
                grouping: [],
                ...e,
            }),
            getDefaultOptions: e => ({
                onGroupingChange: Ge('grouping', e),
                groupedColumnMode: 'reorder',
            }),
            createColumn: (e, t) => {
                ((e.toggleGrouping = () => {
                    t.setGrouping(n =>
                        n != null && n.includes(e.id) ? n.filter(o => o !== e.id) : [...(n ?? []), e.id],
                    );
                }),
                    (e.getCanGroup = () => {
                        var n, o;
                        return (
                            ((n = e.columnDef.enableGrouping) != null ? n : true) &&
                            ((o = t.options.enableGrouping) != null ? o : true) &&
                            (!!e.accessorFn || !!e.columnDef.getGroupingValue)
                        );
                    }),
                    (e.getIsGrouped = () => {
                        var n;
                        return (n = t.getState().grouping) == null ? void 0 : n.includes(e.id);
                    }),
                    (e.getGroupedIndex = () => {
                        var n;
                        return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
                    }),
                    (e.getToggleGroupingHandler = () => {
                        const n = e.getCanGroup();
                        return () => {
                            n && e.toggleGrouping();
                        };
                    }),
                    (e.getAutoAggregationFn = () => {
                        const n = t.getCoreRowModel().flatRows[0],
                            o = n == null ? void 0 : n.getValue(e.id);
                        if (typeof o == 'number') return bo.sum;
                        if (Object.prototype.toString.call(o) === '[object Date]') return bo.extent;
                    }),
                    (e.getAggregationFn = () => {
                        var n, o;
                        if (!e) throw new Error();
                        return uo(e.columnDef.aggregationFn)
                            ? e.columnDef.aggregationFn
                            : e.columnDef.aggregationFn === 'auto'
                              ? e.getAutoAggregationFn()
                              : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) !=
                                  null
                                ? n
                                : bo[e.columnDef.aggregationFn];
                    }));
            },
            createTable: e => {
                ((e.setGrouping = t => (e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t))),
                    (e.resetGrouping = t => {
                        var n, o;
                        e.setGrouping(
                            t ? [] : (n = (o = e.initialState) == null ? void 0 : o.grouping) != null ? n : [],
                        );
                    }),
                    (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
                    (e.getGroupedRowModel = () => (
                        !e._getGroupedRowModel &&
                            e.options.getGroupedRowModel &&
                            (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                        e.options.manualGrouping || !e._getGroupedRowModel
                            ? e.getPreGroupedRowModel()
                            : e._getGroupedRowModel()
                    )));
            },
            createRow: (e, t) => {
                ((e.getIsGrouped = () => !!e.groupingColumnId),
                    (e.getGroupingValue = n => {
                        if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
                        const o = t.getColumn(n);
                        return o != null && o.columnDef.getGroupingValue
                            ? ((e._groupingValuesCache[n] = o.columnDef.getGroupingValue(e.original)),
                              e._groupingValuesCache[n])
                            : e.getValue(n);
                    }),
                    (e._groupingValuesCache = {}));
            },
            createCell: (e, t, n, o) => {
                ((e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId),
                    (e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped()),
                    (e.getIsAggregated = () => {
                        var r;
                        return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((r = n.subRows) != null && r.length);
                    }));
            },
        };
    function Dd(e, t, n) {
        if (!(t != null && t.length) || !n) return e;
        const o = e.filter(s => !t.includes(s.id));
        return n === 'remove' ? o : [...t.map(s => e.find(i => i.id === s)).filter(Boolean), ...o];
    }
    const kd = {
            getInitialState: e => ({
                columnOrder: [],
                ...e,
            }),
            getDefaultOptions: e => ({
                onColumnOrderChange: Ge('columnOrder', e),
            }),
            createColumn: (e, t) => {
                ((e.getIndex = V(
                    n => [xn(t, n)],
                    n => n.findIndex(o => o.id === e.id),
                    B(t.options, 'debugColumns'),
                )),
                    (e.getIsFirstColumn = n => {
                        var o;
                        return ((o = xn(t, n)[0]) == null ? void 0 : o.id) === e.id;
                    }),
                    (e.getIsLastColumn = n => {
                        var o;
                        const r = xn(t, n);
                        return ((o = r[r.length - 1]) == null ? void 0 : o.id) === e.id;
                    }));
            },
            createTable: e => {
                ((e.setColumnOrder = t =>
                    e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t)),
                    (e.resetColumnOrder = t => {
                        var n;
                        e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
                    }),
                    (e._getOrderColumnsFn = V(
                        () => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode],
                        (t, n, o) => r => {
                            let s = [];
                            if (!(t != null && t.length)) s = r;
                            else {
                                const i = [...t],
                                    l = [...r];
                                for (; l.length && i.length; ) {
                                    const c = i.shift(),
                                        d = l.findIndex(u => u.id === c);
                                    d > -1 && s.push(l.splice(d, 1)[0]);
                                }
                                s = [...s, ...l];
                            }
                            return Dd(s, n, o);
                        },
                        B(e.options, 'debugTable'),
                    )));
            },
        },
        xo = () => ({
            left: [],
            right: [],
        }),
        Ed = {
            getInitialState: e => ({
                columnPinning: xo(),
                ...e,
            }),
            getDefaultOptions: e => ({
                onColumnPinningChange: Ge('columnPinning', e),
            }),
            createColumn: (e, t) => {
                ((e.pin = n => {
                    const o = e
                        .getLeafColumns()
                        .map(r => r.id)
                        .filter(Boolean);
                    t.setColumnPinning(r => {
                        var s, i;
                        if (n === 'right') {
                            var l, c;
                            return {
                                left: ((l = r == null ? void 0 : r.left) != null ? l : []).filter(
                                    g => !(o != null && o.includes(g)),
                                ),
                                right: [
                                    ...((c = r == null ? void 0 : r.right) != null ? c : []).filter(
                                        g => !(o != null && o.includes(g)),
                                    ),
                                    ...o,
                                ],
                            };
                        }
                        if (n === 'left') {
                            var d, u;
                            return {
                                left: [
                                    ...((d = r == null ? void 0 : r.left) != null ? d : []).filter(
                                        g => !(o != null && o.includes(g)),
                                    ),
                                    ...o,
                                ],
                                right: ((u = r == null ? void 0 : r.right) != null ? u : []).filter(
                                    g => !(o != null && o.includes(g)),
                                ),
                            };
                        }
                        return {
                            left: ((s = r == null ? void 0 : r.left) != null ? s : []).filter(
                                g => !(o != null && o.includes(g)),
                            ),
                            right: ((i = r == null ? void 0 : r.right) != null ? i : []).filter(
                                g => !(o != null && o.includes(g)),
                            ),
                        };
                    });
                }),
                    (e.getCanPin = () =>
                        e.getLeafColumns().some(o => {
                            var r, s, i;
                            return (
                                ((r = o.columnDef.enablePinning) != null ? r : true) &&
                                ((s = (i = t.options.enableColumnPinning) != null ? i : t.options.enablePinning) != null
                                    ? s
                                    : true)
                            );
                        })),
                    (e.getIsPinned = () => {
                        const n = e.getLeafColumns().map(l => l.id),
                            { left: o, right: r } = t.getState().columnPinning,
                            s = n.some(l => (o == null ? void 0 : o.includes(l))),
                            i = n.some(l => (r == null ? void 0 : r.includes(l)));
                        return s ? 'left' : i ? 'right' : false;
                    }),
                    (e.getPinnedIndex = () => {
                        var n, o;
                        const r = e.getIsPinned();
                        return r
                            ? (n =
                                  (o = t.getState().columnPinning) == null || (o = o[r]) == null
                                      ? void 0
                                      : o.indexOf(e.id)) != null
                                ? n
                                : -1
                            : 0;
                    }));
            },
            createRow: (e, t) => {
                ((e.getCenterVisibleCells = V(
                    () => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right],
                    (n, o, r) => {
                        const s = [...(o ?? []), ...(r ?? [])];
                        return n.filter(i => !s.includes(i.column.id));
                    },
                    B(t.options, 'debugRows'),
                )),
                    (e.getLeftVisibleCells = V(
                        () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
                        (n, o) =>
                            (o ?? [])
                                .map(s => n.find(i => i.column.id === s))
                                .filter(Boolean)
                                .map(s => ({
                                    ...s,
                                    position: 'left',
                                })),
                        B(t.options, 'debugRows'),
                    )),
                    (e.getRightVisibleCells = V(
                        () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
                        (n, o) =>
                            (o ?? [])
                                .map(s => n.find(i => i.column.id === s))
                                .filter(Boolean)
                                .map(s => ({
                                    ...s,
                                    position: 'right',
                                })),
                        B(t.options, 'debugRows'),
                    )));
            },
            createTable: e => {
                ((e.setColumnPinning = t =>
                    e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t)),
                    (e.resetColumnPinning = t => {
                        var n, o;
                        return e.setColumnPinning(
                            t ? xo() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : xo(),
                        );
                    }),
                    (e.getIsSomeColumnsPinned = t => {
                        var n;
                        const o = e.getState().columnPinning;
                        if (!t) {
                            var r, s;
                            return !!(((r = o.left) != null && r.length) || ((s = o.right) != null && s.length));
                        }
                        return !!((n = o[t]) != null && n.length);
                    }),
                    (e.getLeftLeafColumns = V(
                        () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
                        (t, n) => (n ?? []).map(o => t.find(r => r.id === o)).filter(Boolean),
                        B(e.options, 'debugColumns'),
                    )),
                    (e.getRightLeafColumns = V(
                        () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
                        (t, n) => (n ?? []).map(o => t.find(r => r.id === o)).filter(Boolean),
                        B(e.options, 'debugColumns'),
                    )),
                    (e.getCenterLeafColumns = V(
                        () => [
                            e.getAllLeafColumns(),
                            e.getState().columnPinning.left,
                            e.getState().columnPinning.right,
                        ],
                        (t, n, o) => {
                            const r = [...(n ?? []), ...(o ?? [])];
                            return t.filter(s => !r.includes(s.id));
                        },
                        B(e.options, 'debugColumns'),
                    )));
            },
        };
    function Od(e) {
        return e || (typeof document < 'u' ? document : null);
    }
    const qn = {
            size: 150,
            minSize: 20,
            maxSize: Number.MAX_SAFE_INTEGER,
        },
        _o = () => ({
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            isResizingColumn: false,
            columnSizingStart: [],
        }),
        Nd = {
            getDefaultColumnDef: () => qn,
            getInitialState: e => ({
                columnSizing: {},
                columnSizingInfo: _o(),
                ...e,
            }),
            getDefaultOptions: e => ({
                columnResizeMode: 'onEnd',
                columnResizeDirection: 'ltr',
                onColumnSizingChange: Ge('columnSizing', e),
                onColumnSizingInfoChange: Ge('columnSizingInfo', e),
            }),
            createColumn: (e, t) => {
                ((e.getSize = () => {
                    var n, o, r;
                    const s = t.getState().columnSizing[e.id];
                    return Math.min(
                        Math.max(
                            (n = e.columnDef.minSize) != null ? n : qn.minSize,
                            (o = s ?? e.columnDef.size) != null ? o : qn.size,
                        ),
                        (r = e.columnDef.maxSize) != null ? r : qn.maxSize,
                    );
                }),
                    (e.getStart = V(
                        n => [n, xn(t, n), t.getState().columnSizing],
                        (n, o) => o.slice(0, e.getIndex(n)).reduce((r, s) => r + s.getSize(), 0),
                        B(t.options, 'debugColumns'),
                    )),
                    (e.getAfter = V(
                        n => [n, xn(t, n), t.getState().columnSizing],
                        (n, o) => o.slice(e.getIndex(n) + 1).reduce((r, s) => r + s.getSize(), 0),
                        B(t.options, 'debugColumns'),
                    )),
                    (e.resetSize = () => {
                        t.setColumnSizing(n => {
                            let { [e.id]: o, ...r } = n;
                            return r;
                        });
                    }),
                    (e.getCanResize = () => {
                        var n, o;
                        return (
                            ((n = e.columnDef.enableResizing) != null ? n : true) &&
                            ((o = t.options.enableColumnResizing) != null ? o : true)
                        );
                    }),
                    (e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id));
            },
            createHeader: (e, t) => {
                ((e.getSize = () => {
                    let n = 0;
                    const o = r => {
                        if (r.subHeaders.length) r.subHeaders.forEach(o);
                        else {
                            var s;
                            n += (s = r.column.getSize()) != null ? s : 0;
                        }
                    };
                    return (o(e), n);
                }),
                    (e.getStart = () => {
                        if (e.index > 0) {
                            const n = e.headerGroup.headers[e.index - 1];
                            return n.getStart() + n.getSize();
                        }
                        return 0;
                    }),
                    (e.getResizeHandler = n => {
                        const o = t.getColumn(e.column.id),
                            r = o == null ? void 0 : o.getCanResize();
                        return s => {
                            if (
                                !o ||
                                !r ||
                                (s.persist == null || s.persist(), wo(s) && s.touches && s.touches.length > 1)
                            )
                                return;
                            const i = e.getSize(),
                                l = e
                                    ? e.getLeafHeaders().map(v => [v.column.id, v.column.getSize()])
                                    : [[o.id, o.getSize()]],
                                c = wo(s) ? Math.round(s.touches[0].clientX) : s.clientX,
                                d = {},
                                u = (v, _) => {
                                    typeof _ == 'number' &&
                                        (t.setColumnSizingInfo(C => {
                                            var j, R;
                                            const w = t.options.columnResizeDirection === 'rtl' ? -1 : 1,
                                                M =
                                                    (_ - ((j = C == null ? void 0 : C.startOffset) != null ? j : 0)) *
                                                    w,
                                                T = Math.max(
                                                    M / ((R = C == null ? void 0 : C.startSize) != null ? R : 0),
                                                    -0.999999,
                                                );
                                            return (
                                                C.columnSizingStart.forEach(D => {
                                                    let [A, P] = D;
                                                    d[A] = Math.round(Math.max(P + P * T, 0) * 100) / 100;
                                                }),
                                                {
                                                    ...C,
                                                    deltaOffset: M,
                                                    deltaPercentage: T,
                                                }
                                            );
                                        }),
                                        (t.options.columnResizeMode === 'onChange' || v === 'end') &&
                                            t.setColumnSizing(C => ({
                                                ...C,
                                                ...d,
                                            })));
                                },
                                g = v => u('move', v),
                                f = v => {
                                    (u('end', v),
                                        t.setColumnSizingInfo(_ => ({
                                            ..._,
                                            isResizingColumn: false,
                                            startOffset: null,
                                            startSize: null,
                                            deltaOffset: null,
                                            deltaPercentage: null,
                                            columnSizingStart: [],
                                        })));
                                },
                                p = Od(n),
                                h = {
                                    moveHandler: v => g(v.clientX),
                                    upHandler: v => {
                                        (p == null ? void 0 : p.removeEventListener('mousemove', h.moveHandler),
                                            p == null ? void 0 : p.removeEventListener('mouseup', h.upHandler),
                                            f(v.clientX));
                                    },
                                },
                                m = {
                                    moveHandler: v => (
                                        v.cancelable && (v.preventDefault(), v.stopPropagation()),
                                        g(v.touches[0].clientX),
                                        false
                                    ),
                                    upHandler: v => {
                                        var _;
                                        (p == null ? void 0 : p.removeEventListener('touchmove', m.moveHandler),
                                            p == null ? void 0 : p.removeEventListener('touchend', m.upHandler),
                                            v.cancelable && (v.preventDefault(), v.stopPropagation()),
                                            f((_ = v.touches[0]) == null ? void 0 : _.clientX));
                                    },
                                },
                                x = Ld()
                                    ? {
                                          passive: false,
                                      }
                                    : false;
                            (wo(s)
                                ? (p == null ? void 0 : p.addEventListener('touchmove', m.moveHandler, x),
                                  p == null ? void 0 : p.addEventListener('touchend', m.upHandler, x))
                                : (p == null ? void 0 : p.addEventListener('mousemove', h.moveHandler, x),
                                  p == null ? void 0 : p.addEventListener('mouseup', h.upHandler, x)),
                                t.setColumnSizingInfo(v => ({
                                    ...v,
                                    startOffset: c,
                                    startSize: i,
                                    deltaOffset: 0,
                                    deltaPercentage: 0,
                                    columnSizingStart: l,
                                    isResizingColumn: o.id,
                                })));
                        };
                    }));
            },
            createTable: e => {
                ((e.setColumnSizing = t =>
                    e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t)),
                    (e.setColumnSizingInfo = t =>
                        e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t)),
                    (e.resetColumnSizing = t => {
                        var n;
                        e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
                    }),
                    (e.resetHeaderSizeInfo = t => {
                        var n;
                        e.setColumnSizingInfo(t ? _o() : (n = e.initialState.columnSizingInfo) != null ? n : _o());
                    }),
                    (e.getTotalSize = () => {
                        var t, n;
                        return (t =
                            (n = e.getHeaderGroups()[0]) == null
                                ? void 0
                                : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null
                            ? t
                            : 0;
                    }),
                    (e.getLeftTotalSize = () => {
                        var t, n;
                        return (t =
                            (n = e.getLeftHeaderGroups()[0]) == null
                                ? void 0
                                : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null
                            ? t
                            : 0;
                    }),
                    (e.getCenterTotalSize = () => {
                        var t, n;
                        return (t =
                            (n = e.getCenterHeaderGroups()[0]) == null
                                ? void 0
                                : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null
                            ? t
                            : 0;
                    }),
                    (e.getRightTotalSize = () => {
                        var t, n;
                        return (t =
                            (n = e.getRightHeaderGroups()[0]) == null
                                ? void 0
                                : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null
                            ? t
                            : 0;
                    }));
            },
        };
    let Yn = null;
    function Ld() {
        if (typeof Yn == 'boolean') return Yn;
        let e = false;
        try {
            const t = {
                    get passive() {
                        return ((e = true), false);
                    },
                },
                n = () => {};
            (window.addEventListener('test', n, t), window.removeEventListener('test', n));
        } catch {
            e = false;
        }
        return ((Yn = e), Yn);
    }
    function wo(e) {
        return e.type === 'touchstart';
    }
    const Hd = {
        getInitialState: e => ({
            columnVisibility: {},
            ...e,
        }),
        getDefaultOptions: e => ({
            onColumnVisibilityChange: Ge('columnVisibility', e),
        }),
        createColumn: (e, t) => {
            ((e.toggleVisibility = n => {
                e.getCanHide() &&
                    t.setColumnVisibility(o => ({
                        ...o,
                        [e.id]: n ?? !e.getIsVisible(),
                    }));
            }),
                (e.getIsVisible = () => {
                    var n, o;
                    const r = e.columns;
                    return (n = r.length
                        ? r.some(s => s.getIsVisible())
                        : (o = t.getState().columnVisibility) == null
                          ? void 0
                          : o[e.id]) != null
                        ? n
                        : true;
                }),
                (e.getCanHide = () => {
                    var n, o;
                    return (
                        ((n = e.columnDef.enableHiding) != null ? n : true) &&
                        ((o = t.options.enableHiding) != null ? o : true)
                    );
                }),
                (e.getToggleVisibilityHandler = () => n => {
                    e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
                }));
        },
        createRow: (e, t) => {
            ((e._getAllVisibleCells = V(
                () => [e.getAllCells(), t.getState().columnVisibility],
                n => n.filter(o => o.column.getIsVisible()),
                B(t.options, 'debugRows'),
            )),
                (e.getVisibleCells = V(
                    () => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()],
                    (n, o, r) => [...n, ...o, ...r],
                    B(t.options, 'debugRows'),
                )));
        },
        createTable: e => {
            const t = (n, o) =>
                V(
                    () => [
                        o(),
                        o()
                            .filter(r => r.getIsVisible())
                            .map(r => r.id)
                            .join('_'),
                    ],
                    r => r.filter(s => (s.getIsVisible == null ? void 0 : s.getIsVisible())),
                    B(e.options, 'debugColumns'),
                );
            ((e.getVisibleFlatColumns = t('getVisibleFlatColumns', () => e.getAllFlatColumns())),
                (e.getVisibleLeafColumns = t('getVisibleLeafColumns', () => e.getAllLeafColumns())),
                (e.getLeftVisibleLeafColumns = t('getLeftVisibleLeafColumns', () => e.getLeftLeafColumns())),
                (e.getRightVisibleLeafColumns = t('getRightVisibleLeafColumns', () => e.getRightLeafColumns())),
                (e.getCenterVisibleLeafColumns = t('getCenterVisibleLeafColumns', () => e.getCenterLeafColumns())),
                (e.setColumnVisibility = n =>
                    e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n)),
                (e.resetColumnVisibility = n => {
                    var o;
                    e.setColumnVisibility(n ? {} : (o = e.initialState.columnVisibility) != null ? o : {});
                }),
                (e.toggleAllColumnsVisible = n => {
                    var o;
                    ((n = (o = n) != null ? o : !e.getIsAllColumnsVisible()),
                        e.setColumnVisibility(
                            e.getAllLeafColumns().reduce(
                                (r, s) => ({
                                    ...r,
                                    [s.id]: n || !(s.getCanHide != null && s.getCanHide()),
                                }),
                                {},
                            ),
                        ));
                }),
                (e.getIsAllColumnsVisible = () =>
                    !e.getAllLeafColumns().some(n => !(n.getIsVisible != null && n.getIsVisible()))),
                (e.getIsSomeColumnsVisible = () =>
                    e.getAllLeafColumns().some(n => (n.getIsVisible == null ? void 0 : n.getIsVisible()))),
                (e.getToggleAllColumnsVisibilityHandler = () => n => {
                    var o;
                    e.toggleAllColumnsVisible((o = n.target) == null ? void 0 : o.checked);
                }));
        },
    };
    function xn(e, t) {
        return t
            ? t === 'center'
                ? e.getCenterVisibleLeafColumns()
                : t === 'left'
                  ? e.getLeftVisibleLeafColumns()
                  : e.getRightVisibleLeafColumns()
            : e.getVisibleLeafColumns();
    }
    const Vd = {
            createTable: e => {
                ((e._getGlobalFacetedRowModel =
                    e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, '__global__')),
                    (e.getGlobalFacetedRowModel = () =>
                        e.options.manualFiltering || !e._getGlobalFacetedRowModel
                            ? e.getPreFilteredRowModel()
                            : e._getGlobalFacetedRowModel()),
                    (e._getGlobalFacetedUniqueValues =
                        e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, '__global__')),
                    (e.getGlobalFacetedUniqueValues = () =>
                        e._getGlobalFacetedUniqueValues
                            ? e._getGlobalFacetedUniqueValues()
                            : /* @__PURE__ */ new Map()),
                    (e._getGlobalFacetedMinMaxValues =
                        e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, '__global__')),
                    (e.getGlobalFacetedMinMaxValues = () => {
                        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
                    }));
            },
        },
        Bd = {
            getInitialState: e => ({
                globalFilter: void 0,
                ...e,
            }),
            getDefaultOptions: e => ({
                onGlobalFilterChange: Ge('globalFilter', e),
                globalFilterFn: 'auto',
                getColumnCanGlobalFilter: t => {
                    var n;
                    const o =
                        (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null
                            ? void 0
                            : n.getValue();
                    return typeof o == 'string' || typeof o == 'number';
                },
            }),
            createColumn: (e, t) => {
                e.getCanGlobalFilter = () => {
                    var n, o, r, s;
                    return (
                        ((n = e.columnDef.enableGlobalFilter) != null ? n : true) &&
                        ((o = t.options.enableGlobalFilter) != null ? o : true) &&
                        ((r = t.options.enableFilters) != null ? r : true) &&
                        ((s =
                            t.options.getColumnCanGlobalFilter == null
                                ? void 0
                                : t.options.getColumnCanGlobalFilter(e)) != null
                            ? s
                            : true) &&
                        !!e.accessorFn
                    );
                };
            },
            createTable: e => {
                ((e.getGlobalAutoFilterFn = () => at.includesString),
                    (e.getGlobalFilterFn = () => {
                        var t, n;
                        const { globalFilterFn: o } = e.options;
                        return uo(o)
                            ? o
                            : o === 'auto'
                              ? e.getGlobalAutoFilterFn()
                              : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null
                                ? t
                                : at[o];
                    }),
                    (e.setGlobalFilter = t => {
                        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
                    }),
                    (e.resetGlobalFilter = t => {
                        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
                    }));
            },
        },
        Wd = {
            getInitialState: e => ({
                expanded: {},
                ...e,
            }),
            getDefaultOptions: e => ({
                onExpandedChange: Ge('expanded', e),
                paginateExpandedRows: true,
            }),
            createTable: e => {
                let t = false,
                    n = false;
                ((e._autoResetExpanded = () => {
                    var o, r;
                    if (!t) {
                        e._queue(() => {
                            t = true;
                        });
                        return;
                    }
                    if (
                        (o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetExpanded) != null
                            ? o
                            : !e.options.manualExpanding
                    ) {
                        if (n) return;
                        ((n = true),
                            e._queue(() => {
                                (e.resetExpanded(), (n = false));
                            }));
                    }
                }),
                    (e.setExpanded = o =>
                        e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(o)),
                    (e.toggleAllRowsExpanded = o => {
                        (o ?? !e.getIsAllRowsExpanded()) ? e.setExpanded(true) : e.setExpanded({});
                    }),
                    (e.resetExpanded = o => {
                        var r, s;
                        e.setExpanded(
                            o ? {} : (r = (s = e.initialState) == null ? void 0 : s.expanded) != null ? r : {},
                        );
                    }),
                    (e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some(o => o.getCanExpand())),
                    (e.getToggleAllRowsExpandedHandler = () => o => {
                        (o.persist == null || o.persist(), e.toggleAllRowsExpanded());
                    }),
                    (e.getIsSomeRowsExpanded = () => {
                        const o = e.getState().expanded;
                        return o === true || Object.values(o).some(Boolean);
                    }),
                    (e.getIsAllRowsExpanded = () => {
                        const o = e.getState().expanded;
                        return typeof o == 'boolean'
                            ? o === true
                            : !(!Object.keys(o).length || e.getRowModel().flatRows.some(r => !r.getIsExpanded()));
                    }),
                    (e.getExpandedDepth = () => {
                        let o = 0;
                        return (
                            (e.getState().expanded === true
                                ? Object.keys(e.getRowModel().rowsById)
                                : Object.keys(e.getState().expanded)
                            ).forEach(s => {
                                const i = s.split('.');
                                o = Math.max(o, i.length);
                            }),
                            o
                        );
                    }),
                    (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
                    (e.getExpandedRowModel = () => (
                        !e._getExpandedRowModel &&
                            e.options.getExpandedRowModel &&
                            (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                        e.options.manualExpanding || !e._getExpandedRowModel
                            ? e.getPreExpandedRowModel()
                            : e._getExpandedRowModel()
                    )));
            },
            createRow: (e, t) => {
                ((e.toggleExpanded = n => {
                    t.setExpanded(o => {
                        var r;
                        const s = o === true ? true : !!(o != null && o[e.id]);
                        let i = {};
                        if (
                            (o === true
                                ? Object.keys(t.getRowModel().rowsById).forEach(l => {
                                      i[l] = true;
                                  })
                                : (i = o),
                            (n = (r = n) != null ? r : !s),
                            !s && n)
                        )
                            return {
                                ...i,
                                [e.id]: true,
                            };
                        if (s && !n) {
                            const { [e.id]: l, ...c } = i;
                            return c;
                        }
                        return o;
                    });
                }),
                    (e.getIsExpanded = () => {
                        var n;
                        const o = t.getState().expanded;
                        return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) !=
                        null
                            ? n
                            : o === true || (o == null ? void 0 : o[e.id]));
                    }),
                    (e.getCanExpand = () => {
                        var n, o, r;
                        return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null
                            ? n
                            : ((o = t.options.enableExpanding) != null ? o : true) &&
                                  !!((r = e.subRows) != null && r.length);
                    }),
                    (e.getIsAllParentsExpanded = () => {
                        let n = true,
                            o = e;
                        for (; n && o.parentId; ) ((o = t.getRow(o.parentId, true)), (n = o.getIsExpanded()));
                        return n;
                    }),
                    (e.getToggleExpandedHandler = () => {
                        const n = e.getCanExpand();
                        return () => {
                            n && e.toggleExpanded();
                        };
                    }));
            },
        },
        No = 0,
        Lo = 10,
        Co = () => ({
            pageIndex: No,
            pageSize: Lo,
        }),
        Gd = {
            getInitialState: e => ({
                ...e,
                pagination: {
                    ...Co(),
                    ...(e == null ? void 0 : e.pagination),
                },
            }),
            getDefaultOptions: e => ({
                onPaginationChange: Ge('pagination', e),
            }),
            createTable: e => {
                let t = false,
                    n = false;
                ((e._autoResetPageIndex = () => {
                    var o, r;
                    if (!t) {
                        e._queue(() => {
                            t = true;
                        });
                        return;
                    }
                    if (
                        (o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetPageIndex) != null
                            ? o
                            : !e.options.manualPagination
                    ) {
                        if (n) return;
                        ((n = true),
                            e._queue(() => {
                                (e.resetPageIndex(), (n = false));
                            }));
                    }
                }),
                    (e.setPagination = o => {
                        const r = s => St(o, s);
                        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
                    }),
                    (e.resetPagination = o => {
                        var r;
                        e.setPagination(o ? Co() : (r = e.initialState.pagination) != null ? r : Co());
                    }),
                    (e.setPageIndex = o => {
                        e.setPagination(r => {
                            let s = St(o, r.pageIndex);
                            const i =
                                typeof e.options.pageCount > 'u' || e.options.pageCount === -1
                                    ? Number.MAX_SAFE_INTEGER
                                    : e.options.pageCount - 1;
                            return (
                                (s = Math.max(0, Math.min(s, i))),
                                {
                                    ...r,
                                    pageIndex: s,
                                }
                            );
                        });
                    }),
                    (e.resetPageIndex = o => {
                        var r, s;
                        e.setPageIndex(
                            o
                                ? No
                                : (r =
                                        (s = e.initialState) == null || (s = s.pagination) == null
                                            ? void 0
                                            : s.pageIndex) != null
                                  ? r
                                  : No,
                        );
                    }),
                    (e.resetPageSize = o => {
                        var r, s;
                        e.setPageSize(
                            o
                                ? Lo
                                : (r =
                                        (s = e.initialState) == null || (s = s.pagination) == null
                                            ? void 0
                                            : s.pageSize) != null
                                  ? r
                                  : Lo,
                        );
                    }),
                    (e.setPageSize = o => {
                        e.setPagination(r => {
                            const s = Math.max(1, St(o, r.pageSize)),
                                i = r.pageSize * r.pageIndex,
                                l = Math.floor(i / s);
                            return {
                                ...r,
                                pageIndex: l,
                                pageSize: s,
                            };
                        });
                    }),
                    (e.setPageCount = o =>
                        e.setPagination(r => {
                            var s;
                            let i = St(o, (s = e.options.pageCount) != null ? s : -1);
                            return (
                                typeof i == 'number' && (i = Math.max(-1, i)),
                                {
                                    ...r,
                                    pageCount: i,
                                }
                            );
                        })),
                    (e.getPageOptions = V(
                        () => [e.getPageCount()],
                        o => {
                            let r = [];
                            return (o && o > 0 && (r = [...new Array(o)].fill(null).map((s, i) => i)), r);
                        },
                        B(e.options, 'debugTable'),
                    )),
                    (e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0),
                    (e.getCanNextPage = () => {
                        const { pageIndex: o } = e.getState().pagination,
                            r = e.getPageCount();
                        return r === -1 ? true : r === 0 ? false : o < r - 1;
                    }),
                    (e.previousPage = () => e.setPageIndex(o => o - 1)),
                    (e.nextPage = () => e.setPageIndex(o => o + 1)),
                    (e.firstPage = () => e.setPageIndex(0)),
                    (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
                    (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
                    (e.getPaginationRowModel = () => (
                        !e._getPaginationRowModel &&
                            e.options.getPaginationRowModel &&
                            (e._getPaginationRowModel = e.options.getPaginationRowModel(e)),
                        e.options.manualPagination || !e._getPaginationRowModel
                            ? e.getPrePaginationRowModel()
                            : e._getPaginationRowModel()
                    )),
                    (e.getPageCount = () => {
                        var o;
                        return (o = e.options.pageCount) != null
                            ? o
                            : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
                    }),
                    (e.getRowCount = () => {
                        var o;
                        return (o = e.options.rowCount) != null ? o : e.getPrePaginationRowModel().rows.length;
                    }));
            },
        },
        So = () => ({
            top: [],
            bottom: [],
        }),
        Ud = {
            getInitialState: e => ({
                rowPinning: So(),
                ...e,
            }),
            getDefaultOptions: e => ({
                onRowPinningChange: Ge('rowPinning', e),
            }),
            createRow: (e, t) => {
                ((e.pin = (n, o, r) => {
                    const s = o
                            ? e.getLeafRows().map(c => {
                                  let { id: d } = c;
                                  return d;
                              })
                            : [],
                        i = r
                            ? e.getParentRows().map(c => {
                                  let { id: d } = c;
                                  return d;
                              })
                            : [],
                        l = /* @__PURE__ */ new Set([...i, e.id, ...s]);
                    t.setRowPinning(c => {
                        var d, u;
                        if (n === 'bottom') {
                            var g, f;
                            return {
                                top: ((g = c == null ? void 0 : c.top) != null ? g : []).filter(
                                    m => !(l != null && l.has(m)),
                                ),
                                bottom: [
                                    ...((f = c == null ? void 0 : c.bottom) != null ? f : []).filter(
                                        m => !(l != null && l.has(m)),
                                    ),
                                    ...Array.from(l),
                                ],
                            };
                        }
                        if (n === 'top') {
                            var p, h;
                            return {
                                top: [
                                    ...((p = c == null ? void 0 : c.top) != null ? p : []).filter(
                                        m => !(l != null && l.has(m)),
                                    ),
                                    ...Array.from(l),
                                ],
                                bottom: ((h = c == null ? void 0 : c.bottom) != null ? h : []).filter(
                                    m => !(l != null && l.has(m)),
                                ),
                            };
                        }
                        return {
                            top: ((d = c == null ? void 0 : c.top) != null ? d : []).filter(
                                m => !(l != null && l.has(m)),
                            ),
                            bottom: ((u = c == null ? void 0 : c.bottom) != null ? u : []).filter(
                                m => !(l != null && l.has(m)),
                            ),
                        };
                    });
                }),
                    (e.getCanPin = () => {
                        var n;
                        const { enableRowPinning: o, enablePinning: r } = t.options;
                        return typeof o == 'function' ? o(e) : (n = o ?? r) != null ? n : true;
                    }),
                    (e.getIsPinned = () => {
                        const n = [e.id],
                            { top: o, bottom: r } = t.getState().rowPinning,
                            s = n.some(l => (o == null ? void 0 : o.includes(l))),
                            i = n.some(l => (r == null ? void 0 : r.includes(l)));
                        return s ? 'top' : i ? 'bottom' : false;
                    }),
                    (e.getPinnedIndex = () => {
                        var n, o;
                        const r = e.getIsPinned();
                        if (!r) return -1;
                        const s =
                            (n = r === 'top' ? t.getTopRows() : t.getBottomRows()) == null
                                ? void 0
                                : n.map(i => {
                                      let { id: l } = i;
                                      return l;
                                  });
                        return (o = s == null ? void 0 : s.indexOf(e.id)) != null ? o : -1;
                    }));
            },
            createTable: e => {
                ((e.setRowPinning = t =>
                    e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t)),
                    (e.resetRowPinning = t => {
                        var n, o;
                        return e.setRowPinning(
                            t ? So() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : So(),
                        );
                    }),
                    (e.getIsSomeRowsPinned = t => {
                        var n;
                        const o = e.getState().rowPinning;
                        if (!t) {
                            var r, s;
                            return !!(((r = o.top) != null && r.length) || ((s = o.bottom) != null && s.length));
                        }
                        return !!((n = o[t]) != null && n.length);
                    }),
                    (e._getPinnedRows = (t, n, o) => {
                        var r;
                        return (
                            (r = e.options.keepPinnedRows) == null || r
                                ? (n ?? []).map(i => {
                                      const l = e.getRow(i, true);
                                      return l.getIsAllParentsExpanded() ? l : null;
                                  })
                                : (n ?? []).map(i => t.find(l => l.id === i))
                        )
                            .filter(Boolean)
                            .map(i => ({
                                ...i,
                                position: o,
                            }));
                    }),
                    (e.getTopRows = V(
                        () => [e.getRowModel().rows, e.getState().rowPinning.top],
                        (t, n) => e._getPinnedRows(t, n, 'top'),
                        B(e.options, 'debugRows'),
                    )),
                    (e.getBottomRows = V(
                        () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
                        (t, n) => e._getPinnedRows(t, n, 'bottom'),
                        B(e.options, 'debugRows'),
                    )),
                    (e.getCenterRows = V(
                        () => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom],
                        (t, n, o) => {
                            const r = /* @__PURE__ */ new Set([...(n ?? []), ...(o ?? [])]);
                            return t.filter(s => !r.has(s.id));
                        },
                        B(e.options, 'debugRows'),
                    )));
            },
        },
        qd = {
            getInitialState: e => ({
                rowSelection: {},
                ...e,
            }),
            getDefaultOptions: e => ({
                onRowSelectionChange: Ge('rowSelection', e),
                enableRowSelection: true,
                enableMultiRowSelection: true,
                enableSubRowSelection: true,
            }),
            createTable: e => {
                ((e.setRowSelection = t =>
                    e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t)),
                    (e.resetRowSelection = t => {
                        var n;
                        return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
                    }),
                    (e.toggleAllRowsSelected = t => {
                        e.setRowSelection(n => {
                            t = typeof t < 'u' ? t : !e.getIsAllRowsSelected();
                            const o = {
                                    ...n,
                                },
                                r = e.getPreGroupedRowModel().flatRows;
                            return (
                                t
                                    ? r.forEach(s => {
                                          s.getCanSelect() && (o[s.id] = true);
                                      })
                                    : r.forEach(s => {
                                          delete o[s.id];
                                      }),
                                o
                            );
                        });
                    }),
                    (e.toggleAllPageRowsSelected = t =>
                        e.setRowSelection(n => {
                            const o = typeof t < 'u' ? t : !e.getIsAllPageRowsSelected(),
                                r = {
                                    ...n,
                                };
                            return (
                                e.getRowModel().rows.forEach(s => {
                                    Ho(r, s.id, o, true, e);
                                }),
                                r
                            );
                        })),
                    (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
                    (e.getSelectedRowModel = V(
                        () => [e.getState().rowSelection, e.getCoreRowModel()],
                        (t, n) =>
                            Object.keys(t).length
                                ? jo(e, n)
                                : {
                                      rows: [],
                                      flatRows: [],
                                      rowsById: {},
                                  },
                        B(e.options, 'debugTable'),
                    )),
                    (e.getFilteredSelectedRowModel = V(
                        () => [e.getState().rowSelection, e.getFilteredRowModel()],
                        (t, n) =>
                            Object.keys(t).length
                                ? jo(e, n)
                                : {
                                      rows: [],
                                      flatRows: [],
                                      rowsById: {},
                                  },
                        B(e.options, 'debugTable'),
                    )),
                    (e.getGroupedSelectedRowModel = V(
                        () => [e.getState().rowSelection, e.getSortedRowModel()],
                        (t, n) =>
                            Object.keys(t).length
                                ? jo(e, n)
                                : {
                                      rows: [],
                                      flatRows: [],
                                      rowsById: {},
                                  },
                        B(e.options, 'debugTable'),
                    )),
                    (e.getIsAllRowsSelected = () => {
                        const t = e.getFilteredRowModel().flatRows,
                            { rowSelection: n } = e.getState();
                        let o = !!(t.length && Object.keys(n).length);
                        return (o && t.some(r => r.getCanSelect() && !n[r.id]) && (o = false), o);
                    }),
                    (e.getIsAllPageRowsSelected = () => {
                        const t = e.getPaginationRowModel().flatRows.filter(r => r.getCanSelect()),
                            { rowSelection: n } = e.getState();
                        let o = !!t.length;
                        return (o && t.some(r => !n[r.id]) && (o = false), o);
                    }),
                    (e.getIsSomeRowsSelected = () => {
                        var t;
                        const n = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
                        return n > 0 && n < e.getFilteredRowModel().flatRows.length;
                    }),
                    (e.getIsSomePageRowsSelected = () => {
                        const t = e.getPaginationRowModel().flatRows;
                        return e.getIsAllPageRowsSelected()
                            ? false
                            : t.filter(n => n.getCanSelect()).some(n => n.getIsSelected() || n.getIsSomeSelected());
                    }),
                    (e.getToggleAllRowsSelectedHandler = () => t => {
                        e.toggleAllRowsSelected(t.target.checked);
                    }),
                    (e.getToggleAllPageRowsSelectedHandler = () => t => {
                        e.toggleAllPageRowsSelected(t.target.checked);
                    }));
            },
            createRow: (e, t) => {
                ((e.toggleSelected = (n, o) => {
                    const r = e.getIsSelected();
                    t.setRowSelection(s => {
                        var i;
                        if (((n = typeof n < 'u' ? n : !r), e.getCanSelect() && r === n)) return s;
                        const l = {
                            ...s,
                        };
                        return (Ho(l, e.id, n, (i = o == null ? void 0 : o.selectChildren) != null ? i : true, t), l);
                    });
                }),
                    (e.getIsSelected = () => {
                        const { rowSelection: n } = t.getState();
                        return sr(e, n);
                    }),
                    (e.getIsSomeSelected = () => {
                        const { rowSelection: n } = t.getState();
                        return Vo(e, n) === 'some';
                    }),
                    (e.getIsAllSubRowsSelected = () => {
                        const { rowSelection: n } = t.getState();
                        return Vo(e, n) === 'all';
                    }),
                    (e.getCanSelect = () => {
                        var n;
                        return typeof t.options.enableRowSelection == 'function'
                            ? t.options.enableRowSelection(e)
                            : (n = t.options.enableRowSelection) != null
                              ? n
                              : true;
                    }),
                    (e.getCanSelectSubRows = () => {
                        var n;
                        return typeof t.options.enableSubRowSelection == 'function'
                            ? t.options.enableSubRowSelection(e)
                            : (n = t.options.enableSubRowSelection) != null
                              ? n
                              : true;
                    }),
                    (e.getCanMultiSelect = () => {
                        var n;
                        return typeof t.options.enableMultiRowSelection == 'function'
                            ? t.options.enableMultiRowSelection(e)
                            : (n = t.options.enableMultiRowSelection) != null
                              ? n
                              : true;
                    }),
                    (e.getToggleSelectedHandler = () => {
                        const n = e.getCanSelect();
                        return o => {
                            var r;
                            n && e.toggleSelected((r = o.target) == null ? void 0 : r.checked);
                        };
                    }));
            },
        },
        Ho = (e, t, n, o, r) => {
            var s;
            const i = r.getRow(t, true);
            (n
                ? (i.getCanMultiSelect() || Object.keys(e).forEach(l => delete e[l]), i.getCanSelect() && (e[t] = true))
                : delete e[t],
                o &&
                    (s = i.subRows) != null &&
                    s.length &&
                    i.getCanSelectSubRows() &&
                    i.subRows.forEach(l => Ho(e, l.id, n, o, r)));
        };
    function jo(e, t) {
        const n = e.getState().rowSelection,
            o = [],
            r = {},
            s = function (i, l) {
                return i
                    .map(c => {
                        var d;
                        const u = sr(c, n);
                        if (
                            (u && (o.push(c), (r[c.id] = c)),
                            (d = c.subRows) != null &&
                                d.length &&
                                (c = {
                                    ...c,
                                    subRows: s(c.subRows),
                                }),
                            u)
                        )
                            return c;
                    })
                    .filter(Boolean);
            };
        return {
            rows: s(t.rows),
            flatRows: o,
            rowsById: r,
        };
    }
    function sr(e, t) {
        var n;
        return (n = t[e.id]) != null ? n : false;
    }
    function Vo(e, t, n) {
        var o;
        if (!((o = e.subRows) != null && o.length)) return false;
        let r = true,
            s = false;
        return (
            e.subRows.forEach(i => {
                if (
                    !(s && !r) &&
                    (i.getCanSelect() && (sr(i, t) ? (s = true) : (r = false)), i.subRows && i.subRows.length)
                ) {
                    const l = Vo(i, t);
                    l === 'all' ? (s = true) : (l === 'some' && (s = true), (r = false));
                }
            }),
            r ? 'all' : s ? 'some' : false
        );
    }
    const Bo = /([0-9]+)/gm,
        Yd = (e, t, n) => Us(Rt(e.getValue(n)).toLowerCase(), Rt(t.getValue(n)).toLowerCase()),
        Jd = (e, t, n) => Us(Rt(e.getValue(n)), Rt(t.getValue(n))),
        Kd = (e, t, n) => ir(Rt(e.getValue(n)).toLowerCase(), Rt(t.getValue(n)).toLowerCase()),
        Xd = (e, t, n) => ir(Rt(e.getValue(n)), Rt(t.getValue(n))),
        Qd = (e, t, n) => {
            const o = e.getValue(n),
                r = t.getValue(n);
            return o > r ? 1 : o < r ? -1 : 0;
        },
        Zd = (e, t, n) => ir(e.getValue(n), t.getValue(n));
    function ir(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
    }
    function Rt(e) {
        return typeof e == 'number'
            ? isNaN(e) || e === 1 / 0 || e === -1 / 0
                ? ''
                : String(e)
            : typeof e == 'string'
              ? e
              : '';
    }
    function Us(e, t) {
        const n = e.split(Bo).filter(Boolean),
            o = t.split(Bo).filter(Boolean);
        for (; n.length && o.length; ) {
            const r = n.shift(),
                s = o.shift(),
                i = parseInt(r, 10),
                l = parseInt(s, 10),
                c = [i, l].sort();
            if (isNaN(c[0])) {
                if (r > s) return 1;
                if (s > r) return -1;
                continue;
            }
            if (isNaN(c[1])) return isNaN(i) ? -1 : 1;
            if (i > l) return 1;
            if (l > i) return -1;
        }
        return n.length - o.length;
    }
    const dn = {
            alphanumeric: Yd,
            alphanumericCaseSensitive: Jd,
            text: Kd,
            textCaseSensitive: Xd,
            datetime: Qd,
            basic: Zd,
        },
        ep = {
            getInitialState: e => ({
                sorting: [],
                ...e,
            }),
            getDefaultColumnDef: () => ({
                sortingFn: 'auto',
                sortUndefined: 1,
            }),
            getDefaultOptions: e => ({
                onSortingChange: Ge('sorting', e),
                isMultiSortEvent: t => t.shiftKey,
            }),
            createColumn: (e, t) => {
                ((e.getAutoSortingFn = () => {
                    const n = t.getFilteredRowModel().flatRows.slice(10);
                    let o = false;
                    for (const r of n) {
                        const s = r == null ? void 0 : r.getValue(e.id);
                        if (Object.prototype.toString.call(s) === '[object Date]') return dn.datetime;
                        if (typeof s == 'string' && ((o = true), s.split(Bo).length > 1)) return dn.alphanumeric;
                    }
                    return o ? dn.text : dn.basic;
                }),
                    (e.getAutoSortDir = () => {
                        const n = t.getFilteredRowModel().flatRows[0];
                        return typeof (n == null ? void 0 : n.getValue(e.id)) == 'string' ? 'asc' : 'desc';
                    }),
                    (e.getSortingFn = () => {
                        var n, o;
                        if (!e) throw new Error();
                        return uo(e.columnDef.sortingFn)
                            ? e.columnDef.sortingFn
                            : e.columnDef.sortingFn === 'auto'
                              ? e.getAutoSortingFn()
                              : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null
                                ? n
                                : dn[e.columnDef.sortingFn];
                    }),
                    (e.toggleSorting = (n, o) => {
                        const r = e.getNextSortingOrder(),
                            s = typeof n < 'u' && n !== null;
                        t.setSorting(i => {
                            const l = i == null ? void 0 : i.find(p => p.id === e.id),
                                c = i == null ? void 0 : i.findIndex(p => p.id === e.id);
                            let d = [],
                                u,
                                g = s ? n : r === 'desc';
                            if (
                                (i != null && i.length && e.getCanMultiSort() && o
                                    ? l
                                        ? (u = 'toggle')
                                        : (u = 'add')
                                    : i != null && i.length && c !== i.length - 1
                                      ? (u = 'replace')
                                      : l
                                        ? (u = 'toggle')
                                        : (u = 'replace'),
                                u === 'toggle' && (s || r || (u = 'remove')),
                                u === 'add')
                            ) {
                                var f;
                                ((d = [
                                    ...i,
                                    {
                                        id: e.id,
                                        desc: g,
                                    },
                                ]),
                                    d.splice(
                                        0,
                                        d.length -
                                            ((f = t.options.maxMultiSortColCount) != null
                                                ? f
                                                : Number.MAX_SAFE_INTEGER),
                                    ));
                            } else
                                u === 'toggle'
                                    ? (d = i.map(p =>
                                          p.id === e.id
                                              ? {
                                                    ...p,
                                                    desc: g,
                                                }
                                              : p,
                                      ))
                                    : u === 'remove'
                                      ? (d = i.filter(p => p.id !== e.id))
                                      : (d = [
                                            {
                                                id: e.id,
                                                desc: g,
                                            },
                                        ]);
                            return d;
                        });
                    }),
                    (e.getFirstSortDir = () => {
                        var n, o;
                        return (
                            (n = (o = e.columnDef.sortDescFirst) != null ? o : t.options.sortDescFirst) != null
                                ? n
                                : e.getAutoSortDir() === 'desc'
                        )
                            ? 'desc'
                            : 'asc';
                    }),
                    (e.getNextSortingOrder = n => {
                        var o, r;
                        const s = e.getFirstSortDir(),
                            i = e.getIsSorted();
                        return i
                            ? i !== s &&
                              ((o = t.options.enableSortingRemoval) == null || o) &&
                              (!(n && (r = t.options.enableMultiRemove) != null) || r)
                                ? false
                                : i === 'desc'
                                  ? 'asc'
                                  : 'desc'
                            : s;
                    }),
                    (e.getCanSort = () => {
                        var n, o;
                        return (
                            ((n = e.columnDef.enableSorting) != null ? n : true) &&
                            ((o = t.options.enableSorting) != null ? o : true) &&
                            !!e.accessorFn
                        );
                    }),
                    (e.getCanMultiSort = () => {
                        var n, o;
                        return (n = (o = e.columnDef.enableMultiSort) != null ? o : t.options.enableMultiSort) != null
                            ? n
                            : !!e.accessorFn;
                    }),
                    (e.getIsSorted = () => {
                        var n;
                        const o = (n = t.getState().sorting) == null ? void 0 : n.find(r => r.id === e.id);
                        return o ? (o.desc ? 'desc' : 'asc') : false;
                    }),
                    (e.getSortIndex = () => {
                        var n, o;
                        return (n = (o = t.getState().sorting) == null ? void 0 : o.findIndex(r => r.id === e.id)) !=
                            null
                            ? n
                            : -1;
                    }),
                    (e.clearSorting = () => {
                        t.setSorting(n => (n != null && n.length ? n.filter(o => o.id !== e.id) : []));
                    }),
                    (e.getToggleSortingHandler = () => {
                        const n = e.getCanSort();
                        return o => {
                            n &&
                                (o.persist == null || o.persist(),
                                e.toggleSorting == null ||
                                    e.toggleSorting(
                                        void 0,
                                        e.getCanMultiSort()
                                            ? t.options.isMultiSortEvent == null
                                                ? void 0
                                                : t.options.isMultiSortEvent(o)
                                            : false,
                                    ));
                        };
                    }));
            },
            createTable: e => {
                ((e.setSorting = t => (e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t))),
                    (e.resetSorting = t => {
                        var n, o;
                        e.setSorting(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.sorting) != null ? n : []);
                    }),
                    (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
                    (e.getSortedRowModel = () => (
                        !e._getSortedRowModel &&
                            e.options.getSortedRowModel &&
                            (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                        e.options.manualSorting || !e._getSortedRowModel
                            ? e.getPreSortedRowModel()
                            : e._getSortedRowModel()
                    )));
            },
        },
        tp = [wd, Hd, kd, Ed, Cd, Sd, Vd, Bd, ep, Td, Wd, Gd, Ud, qd, Nd];
    function np(e) {
        var t, n;
        const o = [...tp, ...((t = e._features) != null ? t : [])];
        let r = {
            _features: o,
        };
        const s = r._features.reduce(
                (f, p) => Object.assign(f, p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(r)),
                {},
            ),
            i = f =>
                r.options.mergeOptions
                    ? r.options.mergeOptions(s, f)
                    : {
                          ...s,
                          ...f,
                      };
        let c = {
            ...{},
            ...((n = e.initialState) != null ? n : {}),
        };
        r._features.forEach(f => {
            var p;
            c = (p = f.getInitialState == null ? void 0 : f.getInitialState(c)) != null ? p : c;
        });
        const d = [];
        let u = false;
        const g = {
            _features: o,
            options: {
                ...s,
                ...e,
            },
            initialState: c,
            _queue: f => {
                (d.push(f),
                    u ||
                        ((u = true),
                        Promise.resolve()
                            .then(() => {
                                for (; d.length; ) d.shift()();
                                u = false;
                            })
                            .catch(p =>
                                setTimeout(() => {
                                    throw p;
                                }),
                            )));
            },
            reset: () => {
                r.setState(r.initialState);
            },
            setOptions: f => {
                const p = St(f, r.options);
                r.options = i(p);
            },
            getState: () => r.options.state,
            setState: f => {
                r.options.onStateChange == null || r.options.onStateChange(f);
            },
            _getRowId: (f, p, h) => {
                var m;
                return (m = r.options.getRowId == null ? void 0 : r.options.getRowId(f, p, h)) != null
                    ? m
                    : `${h ? [h.id, p].join('.') : p}`;
            },
            getCoreRowModel: () => (
                r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)),
                r._getCoreRowModel()
            ),
            getRowModel: () => r.getPaginationRowModel(),
            getRow: (f, p) => {
                let h = (p ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[f];
                if (!h && ((h = r.getCoreRowModel().rowsById[f]), !h)) throw new Error();
                return h;
            },
            _getDefaultColumnDef: V(
                () => [r.options.defaultColumn],
                f => {
                    var p;
                    return (
                        (f = (p = f) != null ? p : {}),
                        {
                            header: h => {
                                const m = h.header.column.columnDef;
                                return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
                            },
                            cell: h => {
                                var m, x;
                                return (m =
                                    (x = h.renderValue()) == null || x.toString == null ? void 0 : x.toString()) != null
                                    ? m
                                    : null;
                            },
                            ...r._features.reduce(
                                (h, m) =>
                                    Object.assign(h, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()),
                                {},
                            ),
                            ...f,
                        }
                    );
                },
                B(e, 'debugColumns'),
            ),
            _getColumnDefs: () => r.options.columns,
            getAllColumns: V(
                () => [r._getColumnDefs()],
                f => {
                    const p = function (h, m, x) {
                        return (
                            x === void 0 && (x = 0),
                            h.map(v => {
                                const _ = _d(r, v, x, m),
                                    C = v;
                                return ((_.columns = C.columns ? p(C.columns, _, x + 1) : []), _);
                            })
                        );
                    };
                    return p(f);
                },
                B(e, 'debugColumns'),
            ),
            getAllFlatColumns: V(
                () => [r.getAllColumns()],
                f => f.flatMap(p => p.getFlatColumns()),
                B(e, 'debugColumns'),
            ),
            _getAllFlatColumnsById: V(
                () => [r.getAllFlatColumns()],
                f => f.reduce((p, h) => ((p[h.id] = h), p), {}),
                B(e, 'debugColumns'),
            ),
            getAllLeafColumns: V(
                () => [r.getAllColumns(), r._getOrderColumnsFn()],
                (f, p) => {
                    let h = f.flatMap(m => m.getLeafColumns());
                    return p(h);
                },
                B(e, 'debugColumns'),
            ),
            getColumn: f => r._getAllFlatColumnsById()[f],
        };
        Object.assign(r, g);
        for (let f = 0; f < r._features.length; f++) {
            const p = r._features[f];
            p == null || p.createTable == null || p.createTable(r);
        }
        return r;
    }
    function op() {
        return e =>
            V(
                () => [e.options.data],
                t => {
                    const n = {
                            rows: [],
                            flatRows: [],
                            rowsById: {},
                        },
                        o = function (r, s, i) {
                            s === void 0 && (s = 0);
                            const l = [];
                            for (let d = 0; d < r.length; d++) {
                                const u = or(e, e._getRowId(r[d], d, i), r[d], d, s, void 0, i == null ? void 0 : i.id);
                                if ((n.flatRows.push(u), (n.rowsById[u.id] = u), l.push(u), e.options.getSubRows)) {
                                    var c;
                                    ((u.originalSubRows = e.options.getSubRows(r[d], d)),
                                        (c = u.originalSubRows) != null &&
                                            c.length &&
                                            (u.subRows = o(u.originalSubRows, s + 1, u)));
                                }
                            }
                            return l;
                        };
                    return ((n.rows = o(t)), n);
                },
                B(e.options, 'debugTable', 'getRowModel', () => e._autoResetPageIndex()),
            );
    }
    function rp(e) {
        const t = [],
            n = o => {
                var r;
                (t.push(o), (r = o.subRows) != null && r.length && o.getIsExpanded() && o.subRows.forEach(n));
            };
        return (
            e.rows.forEach(n),
            {
                rows: t,
                flatRows: e.flatRows,
                rowsById: e.rowsById,
            }
        );
    }
    function sp(e, t, n) {
        return n.options.filterFromLeafRows ? ip(e, t, n) : lp(e, t, n);
    }
    function ip(e, t, n) {
        var o;
        const r = [],
            s = {},
            i = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100,
            l = function (c, d) {
                d === void 0 && (d = 0);
                const u = [];
                for (let f = 0; f < c.length; f++) {
                    var g;
                    let p = c[f];
                    const h = or(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
                    if (((h.columnFilters = p.columnFilters), (g = p.subRows) != null && g.length && d < i)) {
                        if (((h.subRows = l(p.subRows, d + 1)), (p = h), t(p) && !h.subRows.length)) {
                            (u.push(p), (s[p.id] = p), r.push(p));
                            continue;
                        }
                        if (t(p) || h.subRows.length) {
                            (u.push(p), (s[p.id] = p), r.push(p));
                            continue;
                        }
                    } else ((p = h), t(p) && (u.push(p), (s[p.id] = p), r.push(p)));
                }
                return u;
            };
        return {
            rows: l(e),
            flatRows: r,
            rowsById: s,
        };
    }
    function lp(e, t, n) {
        var o;
        const r = [],
            s = {},
            i = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100,
            l = function (c, d) {
                d === void 0 && (d = 0);
                const u = [];
                for (let f = 0; f < c.length; f++) {
                    let p = c[f];
                    if (t(p)) {
                        var g;
                        if ((g = p.subRows) != null && g.length && d < i) {
                            const m = or(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
                            ((m.subRows = l(p.subRows, d + 1)), (p = m));
                        }
                        (u.push(p), r.push(p), (s[p.id] = p));
                    }
                }
                return u;
            };
        return {
            rows: l(e),
            flatRows: r,
            rowsById: s,
        };
    }
    function ap() {
        return e =>
            V(
                () => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter],
                (t, n, o) => {
                    if (!t.rows.length || (!(n != null && n.length) && !o)) {
                        for (let f = 0; f < t.flatRows.length; f++)
                            ((t.flatRows[f].columnFilters = {}), (t.flatRows[f].columnFiltersMeta = {}));
                        return t;
                    }
                    const r = [],
                        s = [];
                    (n ?? []).forEach(f => {
                        var p;
                        const h = e.getColumn(f.id);
                        if (!h) return;
                        const m = h.getFilterFn();
                        m &&
                            r.push({
                                id: f.id,
                                filterFn: m,
                                resolvedValue:
                                    (p = m.resolveFilterValue == null ? void 0 : m.resolveFilterValue(f.value)) != null
                                        ? p
                                        : f.value,
                            });
                    });
                    const i = (n ?? []).map(f => f.id),
                        l = e.getGlobalFilterFn(),
                        c = e.getAllLeafColumns().filter(f => f.getCanGlobalFilter());
                    o &&
                        l &&
                        c.length &&
                        (i.push('__global__'),
                        c.forEach(f => {
                            var p;
                            s.push({
                                id: f.id,
                                filterFn: l,
                                resolvedValue:
                                    (p = l.resolveFilterValue == null ? void 0 : l.resolveFilterValue(o)) != null
                                        ? p
                                        : o,
                            });
                        }));
                    let d, u;
                    for (let f = 0; f < t.flatRows.length; f++) {
                        const p = t.flatRows[f];
                        if (((p.columnFilters = {}), r.length))
                            for (let h = 0; h < r.length; h++) {
                                d = r[h];
                                const m = d.id;
                                p.columnFilters[m] = d.filterFn(p, m, d.resolvedValue, x => {
                                    p.columnFiltersMeta[m] = x;
                                });
                            }
                        if (s.length) {
                            for (let h = 0; h < s.length; h++) {
                                u = s[h];
                                const m = u.id;
                                if (
                                    u.filterFn(p, m, u.resolvedValue, x => {
                                        p.columnFiltersMeta[m] = x;
                                    })
                                ) {
                                    p.columnFilters.__global__ = true;
                                    break;
                                }
                            }
                            p.columnFilters.__global__ !== true && (p.columnFilters.__global__ = false);
                        }
                    }
                    const g = f => {
                        for (let p = 0; p < i.length; p++) if (f.columnFilters[i[p]] === false) return false;
                        return true;
                    };
                    return sp(t.rows, g, e);
                },
                B(e.options, 'debugTable', 'getFilteredRowModel', () => e._autoResetPageIndex()),
            );
    }
    function cp(e) {
        return t =>
            V(
                () => [
                    t.getState().pagination,
                    t.getPrePaginationRowModel(),
                    t.options.paginateExpandedRows ? void 0 : t.getState().expanded,
                ],
                (n, o) => {
                    if (!o.rows.length) return o;
                    const { pageSize: r, pageIndex: s } = n;
                    let { rows: i, flatRows: l, rowsById: c } = o;
                    const d = r * s,
                        u = d + r;
                    i = i.slice(d, u);
                    let g;
                    (t.options.paginateExpandedRows
                        ? (g = {
                              rows: i,
                              flatRows: l,
                              rowsById: c,
                          })
                        : (g = rp({
                              rows: i,
                              flatRows: l,
                              rowsById: c,
                          })),
                        (g.flatRows = []));
                    const f = p => {
                        (g.flatRows.push(p), p.subRows.length && p.subRows.forEach(f));
                    };
                    return (g.rows.forEach(f), g);
                },
                B(t.options, 'debugTable'),
            );
    }
    function up() {
        return e =>
            V(
                () => [e.getState().sorting, e.getPreSortedRowModel()],
                (t, n) => {
                    if (!n.rows.length || !(t != null && t.length)) return n;
                    const o = e.getState().sorting,
                        r = [],
                        s = o.filter(c => {
                            var d;
                            return (d = e.getColumn(c.id)) == null ? void 0 : d.getCanSort();
                        }),
                        i = {};
                    s.forEach(c => {
                        const d = e.getColumn(c.id);
                        d &&
                            (i[c.id] = {
                                sortUndefined: d.columnDef.sortUndefined,
                                invertSorting: d.columnDef.invertSorting,
                                sortingFn: d.getSortingFn(),
                            });
                    });
                    const l = c => {
                        const d = c.map(u => ({
                            ...u,
                        }));
                        return (
                            d.sort((u, g) => {
                                for (let p = 0; p < s.length; p += 1) {
                                    var f;
                                    const h = s[p],
                                        m = i[h.id],
                                        x = m.sortUndefined,
                                        v = (f = h == null ? void 0 : h.desc) != null ? f : false;
                                    let _ = 0;
                                    if (x) {
                                        const C = u.getValue(h.id),
                                            j = g.getValue(h.id),
                                            R = C === void 0,
                                            w = j === void 0;
                                        if (R || w) {
                                            if (x === 'first') return R ? -1 : 1;
                                            if (x === 'last') return R ? 1 : -1;
                                            _ = R && w ? 0 : R ? x : -x;
                                        }
                                    }
                                    if ((_ === 0 && (_ = m.sortingFn(u, g, h.id)), _ !== 0))
                                        return (v && (_ *= -1), m.invertSorting && (_ *= -1), _);
                                }
                                return u.index - g.index;
                            }),
                            d.forEach(u => {
                                var g;
                                (r.push(u), (g = u.subRows) != null && g.length && (u.subRows = l(u.subRows)));
                            }),
                            d
                        );
                    };
                    return {
                        rows: l(n.rows),
                        flatRows: r,
                        rowsById: n.rowsById,
                    };
                },
                B(e.options, 'debugTable', 'getSortedRowModel', () => e._autoResetPageIndex()),
            );
    }
    function pn(e, t) {
        return e ? (dp(e) ? y.createElement(e, t) : e) : null;
    }
    function dp(e) {
        return pp(e) || typeof e == 'function' || fp(e);
    }
    function pp(e) {
        return (
            typeof e == 'function' &&
            (() => {
                const t = Object.getPrototypeOf(e);
                return t.prototype && t.prototype.isReactComponent;
            })()
        );
    }
    function fp(e) {
        return (
            typeof e == 'object' &&
            typeof e.$$typeof == 'symbol' &&
            ['react.memo', 'react.forward_ref'].includes(e.$$typeof.description)
        );
    }
    function gp(e) {
        const t = {
                state: {},
                onStateChange: () => {},
                renderFallbackValue: null,
                ...e,
            },
            [n] = y.useState(() => ({
                current: np(t),
            })),
            [o, r] = y.useState(() => n.current.initialState);
        return (
            n.current.setOptions(s => ({
                ...s,
                ...e,
                state: {
                    ...o,
                    ...e.state,
                },
                onStateChange: i => {
                    (r(i), e.onStateChange == null || e.onStateChange(i));
                },
            })),
            n.current
        );
    }
    function Gt(e, t, n) {
        let o = n.initialDeps ?? [],
            r,
            s = true;
        function i() {
            var l, c, d;
            let u;
            n.key && (l = n.debug) != null && l.call(n) && (u = Date.now());
            const g = e();
            if (!(g.length !== o.length || g.some((h, m) => o[m] !== h))) return r;
            o = g;
            let p;
            if (
                (n.key && (c = n.debug) != null && c.call(n) && (p = Date.now()),
                (r = t(...g)),
                n.key && (d = n.debug) != null && d.call(n))
            ) {
                const h = Math.round((Date.now() - u) * 100) / 100,
                    m = Math.round((Date.now() - p) * 100) / 100,
                    x = m / 16,
                    v = (_, C) => {
                        for (_ = String(_); _.length < C; ) _ = ' ' + _;
                        return _;
                    };
                console.info(
                    `%c\u23F1 ${v(m, 5)} /${v(h, 5)} ms`,
                    `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * x, 120))}deg 100% 31%);`,
                    n == null ? void 0 : n.key,
                );
            }
            return (
                (n == null ? void 0 : n.onChange) && !(s && n.skipInitialOnChange) && n.onChange(r),
                (s = false),
                r
            );
        }
        return (
            (i.updateDeps = l => {
                o = l;
            }),
            i
        );
    }
    function Zr(e, t) {
        if (e === void 0) throw new Error('Unexpected undefined');
        return e;
    }
    const hp = (e, t) => Math.abs(e - t) < 1.01,
        mp = (e, t, n) => {
            let o;
            return function (...r) {
                (e.clearTimeout(o), (o = e.setTimeout(() => t.apply(this, r), n)));
            };
        },
        es = e => {
            const { offsetWidth: t, offsetHeight: n } = e;
            return {
                width: t,
                height: n,
            };
        },
        yp = e => e,
        vp = e => {
            const t = Math.max(e.startIndex - e.overscan, 0),
                n = Math.min(e.endIndex + e.overscan, e.count - 1),
                o = [];
            for (let r = t; r <= n; r++) o.push(r);
            return o;
        },
        bp = (e, t) => {
            const n = e.scrollElement;
            if (!n) return;
            const o = e.targetWindow;
            if (!o) return;
            const r = i => {
                const { width: l, height: c } = i;
                t({
                    width: Math.round(l),
                    height: Math.round(c),
                });
            };
            if ((r(es(n)), !o.ResizeObserver)) return () => {};
            const s = new o.ResizeObserver(i => {
                const l = () => {
                    const c = i[0];
                    if (c == null ? void 0 : c.borderBoxSize) {
                        const d = c.borderBoxSize[0];
                        if (d) {
                            r({
                                width: d.inlineSize,
                                height: d.blockSize,
                            });
                            return;
                        }
                    }
                    r(es(n));
                };
                e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
            });
            return (
                s.observe(n, {
                    box: 'border-box',
                }),
                () => {
                    s.unobserve(n);
                }
            );
        },
        ts = {
            passive: true,
        },
        ns = typeof window > 'u' ? true : 'onscrollend' in window,
        xp = (e, t) => {
            const n = e.scrollElement;
            if (!n) return;
            const o = e.targetWindow;
            if (!o) return;
            let r = 0;
            const s =
                    e.options.useScrollendEvent && ns
                        ? () => {}
                        : mp(
                              o,
                              () => {
                                  t(r, false);
                              },
                              e.options.isScrollingResetDelay,
                          ),
                i = u => () => {
                    const { horizontal: g, isRtl: f } = e.options;
                    ((r = g ? n.scrollLeft * ((f && -1) || 1) : n.scrollTop), s(), t(r, u));
                },
                l = i(true),
                c = i(false);
            n.addEventListener('scroll', l, ts);
            const d = e.options.useScrollendEvent && ns;
            return (
                d && n.addEventListener('scrollend', c, ts),
                () => {
                    (n.removeEventListener('scroll', l), d && n.removeEventListener('scrollend', c));
                }
            );
        },
        _p = (e, t, n) => {
            if (t == null ? void 0 : t.borderBoxSize) {
                const o = t.borderBoxSize[0];
                if (o) return Math.round(o[n.options.horizontal ? 'inlineSize' : 'blockSize']);
            }
            return e[n.options.horizontal ? 'offsetWidth' : 'offsetHeight'];
        },
        wp = (e, { adjustments: t = 0, behavior: n }, o) => {
            var r, s;
            const i = e + t;
            (s = (r = o.scrollElement) == null ? void 0 : r.scrollTo) == null ||
                s.call(r, {
                    [o.options.horizontal ? 'left' : 'top']: i,
                    behavior: n,
                });
        };
    class Cp {
        constructor(t) {
            ((this.unsubs = []),
                (this.scrollElement = null),
                (this.targetWindow = null),
                (this.isScrolling = false),
                (this.currentScrollToIndex = null),
                (this.measurementsCache = []),
                (this.itemSizeCache = /* @__PURE__ */ new Map()),
                (this.laneAssignments = /* @__PURE__ */ new Map()),
                (this.pendingMeasuredCacheIndexes = []),
                (this.prevLanes = void 0),
                (this.lanesChangedFlag = false),
                (this.lanesSettling = false),
                (this.scrollRect = null),
                (this.scrollOffset = null),
                (this.scrollDirection = null),
                (this.scrollAdjustments = 0),
                (this.elementsCache = /* @__PURE__ */ new Map()),
                (this.observer = /* @__PURE__ */ (() => {
                    let n = null;
                    const o = () =>
                        n ||
                        (!this.targetWindow || !this.targetWindow.ResizeObserver
                            ? null
                            : (n = new this.targetWindow.ResizeObserver(r => {
                                  r.forEach(s => {
                                      const i = () => {
                                          this._measureElement(s.target, s);
                                      };
                                      this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
                                  });
                              })));
                    return {
                        disconnect: () => {
                            var r;
                            ((r = o()) == null || r.disconnect(), (n = null));
                        },
                        observe: r => {
                            var s;
                            return (s = o()) == null
                                ? void 0
                                : s.observe(r, {
                                      box: 'border-box',
                                  });
                        },
                        unobserve: r => {
                            var s;
                            return (s = o()) == null ? void 0 : s.unobserve(r);
                        },
                    };
                })()),
                (this.range = null),
                (this.setOptions = n => {
                    (Object.entries(n).forEach(([o, r]) => {
                        typeof r > 'u' && delete n[o];
                    }),
                        (this.options = {
                            debug: false,
                            initialOffset: 0,
                            overscan: 1,
                            paddingStart: 0,
                            paddingEnd: 0,
                            scrollPaddingStart: 0,
                            scrollPaddingEnd: 0,
                            horizontal: false,
                            getItemKey: yp,
                            rangeExtractor: vp,
                            onChange: () => {},
                            measureElement: _p,
                            initialRect: {
                                width: 0,
                                height: 0,
                            },
                            scrollMargin: 0,
                            gap: 0,
                            indexAttribute: 'data-index',
                            initialMeasurementsCache: [],
                            lanes: 1,
                            isScrollingResetDelay: 150,
                            enabled: true,
                            isRtl: false,
                            useScrollendEvent: false,
                            useAnimationFrameWithResizeObserver: false,
                            ...n,
                        }));
                }),
                (this.notify = n => {
                    var o, r;
                    (r = (o = this.options).onChange) == null || r.call(o, this, n);
                }),
                (this.maybeNotify = Gt(
                    () => (
                        this.calculateRange(),
                        [
                            this.isScrolling,
                            this.range ? this.range.startIndex : null,
                            this.range ? this.range.endIndex : null,
                        ]
                    ),
                    n => {
                        this.notify(n);
                    },
                    {
                        key: false,
                        debug: () => this.options.debug,
                        initialDeps: [
                            this.isScrolling,
                            this.range ? this.range.startIndex : null,
                            this.range ? this.range.endIndex : null,
                        ],
                    },
                )),
                (this.cleanup = () => {
                    (this.unsubs.filter(Boolean).forEach(n => n()),
                        (this.unsubs = []),
                        this.observer.disconnect(),
                        (this.scrollElement = null),
                        (this.targetWindow = null));
                }),
                (this._didMount = () => () => {
                    this.cleanup();
                }),
                (this._willUpdate = () => {
                    var n;
                    const o = this.options.enabled ? this.options.getScrollElement() : null;
                    if (this.scrollElement !== o) {
                        if ((this.cleanup(), !o)) {
                            this.maybeNotify();
                            return;
                        }
                        ((this.scrollElement = o),
                            this.scrollElement && 'ownerDocument' in this.scrollElement
                                ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                                : (this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null),
                            this.elementsCache.forEach(r => {
                                this.observer.observe(r);
                            }),
                            this.unsubs.push(
                                this.options.observeElementRect(this, r => {
                                    ((this.scrollRect = r), this.maybeNotify());
                                }),
                            ),
                            this.unsubs.push(
                                this.options.observeElementOffset(this, (r, s) => {
                                    ((this.scrollAdjustments = 0),
                                        (this.scrollDirection = s
                                            ? this.getScrollOffset() < r
                                                ? 'forward'
                                                : 'backward'
                                            : null),
                                        (this.scrollOffset = r),
                                        (this.isScrolling = s),
                                        this.maybeNotify());
                                }),
                            ),
                            this._scrollToOffset(this.getScrollOffset(), {
                                adjustments: void 0,
                                behavior: void 0,
                            }));
                    }
                }),
                (this.getSize = () =>
                    this.options.enabled
                        ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect),
                          this.scrollRect[this.options.horizontal ? 'width' : 'height'])
                        : ((this.scrollRect = null), 0)),
                (this.getScrollOffset = () =>
                    this.options.enabled
                        ? ((this.scrollOffset =
                              this.scrollOffset ??
                              (typeof this.options.initialOffset == 'function'
                                  ? this.options.initialOffset()
                                  : this.options.initialOffset)),
                          this.scrollOffset)
                        : ((this.scrollOffset = null), 0)),
                (this.getFurthestMeasurement = (n, o) => {
                    const r = /* @__PURE__ */ new Map(),
                        s = /* @__PURE__ */ new Map();
                    for (let i = o - 1; i >= 0; i--) {
                        const l = n[i];
                        if (r.has(l.lane)) continue;
                        const c = s.get(l.lane);
                        if (
                            (c == null || l.end > c.end ? s.set(l.lane, l) : l.end < c.end && r.set(l.lane, true),
                            r.size === this.options.lanes)
                        )
                            break;
                    }
                    return s.size === this.options.lanes
                        ? Array.from(s.values()).sort((i, l) =>
                              i.end === l.end ? i.index - l.index : i.end - l.end,
                          )[0]
                        : void 0;
                }),
                (this.getMeasurementOptions = Gt(
                    () => [
                        this.options.count,
                        this.options.paddingStart,
                        this.options.scrollMargin,
                        this.options.getItemKey,
                        this.options.enabled,
                        this.options.lanes,
                    ],
                    (n, o, r, s, i, l) => (
                        this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = true),
                        (this.prevLanes = l),
                        (this.pendingMeasuredCacheIndexes = []),
                        {
                            count: n,
                            paddingStart: o,
                            scrollMargin: r,
                            getItemKey: s,
                            enabled: i,
                            lanes: l,
                        }
                    ),
                    {
                        key: false,
                    },
                )),
                (this.getMeasurements = Gt(
                    () => [this.getMeasurementOptions(), this.itemSizeCache],
                    ({ count: n, paddingStart: o, scrollMargin: r, getItemKey: s, enabled: i, lanes: l }, c) => {
                        if (!i)
                            return (
                                (this.measurementsCache = []),
                                this.itemSizeCache.clear(),
                                this.laneAssignments.clear(),
                                []
                            );
                        if (this.laneAssignments.size > n)
                            for (const f of this.laneAssignments.keys()) f >= n && this.laneAssignments.delete(f);
                        (this.lanesChangedFlag &&
                            ((this.lanesChangedFlag = false),
                            (this.lanesSettling = true),
                            (this.measurementsCache = []),
                            this.itemSizeCache.clear(),
                            this.laneAssignments.clear(),
                            (this.pendingMeasuredCacheIndexes = [])),
                            this.measurementsCache.length === 0 &&
                                !this.lanesSettling &&
                                ((this.measurementsCache = this.options.initialMeasurementsCache),
                                this.measurementsCache.forEach(f => {
                                    this.itemSizeCache.set(f.key, f.size);
                                })));
                        const d = this.lanesSettling
                            ? 0
                            : this.pendingMeasuredCacheIndexes.length > 0
                              ? Math.min(...this.pendingMeasuredCacheIndexes)
                              : 0;
                        ((this.pendingMeasuredCacheIndexes = []),
                            this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false));
                        const u = this.measurementsCache.slice(0, d),
                            g = new Array(l).fill(void 0);
                        for (let f = 0; f < d; f++) {
                            const p = u[f];
                            p && (g[p.lane] = f);
                        }
                        for (let f = d; f < n; f++) {
                            const p = s(f),
                                h = this.laneAssignments.get(f);
                            let m, x;
                            if (h !== void 0 && this.options.lanes > 1) {
                                m = h;
                                const j = g[m],
                                    R = j !== void 0 ? u[j] : void 0;
                                x = R ? R.end + this.options.gap : o + r;
                            } else {
                                const j = this.options.lanes === 1 ? u[f - 1] : this.getFurthestMeasurement(u, f);
                                ((x = j ? j.end + this.options.gap : o + r),
                                    (m = j ? j.lane : f % this.options.lanes),
                                    this.options.lanes > 1 && this.laneAssignments.set(f, m));
                            }
                            const v = c.get(p),
                                _ = typeof v == 'number' ? v : this.options.estimateSize(f),
                                C = x + _;
                            ((u[f] = {
                                index: f,
                                start: x,
                                size: _,
                                end: C,
                                key: p,
                                lane: m,
                            }),
                                (g[m] = f));
                        }
                        return ((this.measurementsCache = u), u);
                    },
                    {
                        key: false,
                        debug: () => this.options.debug,
                    },
                )),
                (this.calculateRange = Gt(
                    () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                    (n, o, r, s) =>
                        (this.range =
                            n.length > 0 && o > 0
                                ? Sp({
                                      measurements: n,
                                      outerSize: o,
                                      scrollOffset: r,
                                      lanes: s,
                                  })
                                : null),
                    {
                        key: false,
                        debug: () => this.options.debug,
                    },
                )),
                (this.getVirtualIndexes = Gt(
                    () => {
                        let n = null,
                            o = null;
                        const r = this.calculateRange();
                        return (
                            r && ((n = r.startIndex), (o = r.endIndex)),
                            this.maybeNotify.updateDeps([this.isScrolling, n, o]),
                            [this.options.rangeExtractor, this.options.overscan, this.options.count, n, o]
                        );
                    },
                    (n, o, r, s, i) =>
                        s === null || i === null
                            ? []
                            : n({
                                  startIndex: s,
                                  endIndex: i,
                                  overscan: o,
                                  count: r,
                              }),
                    {
                        key: false,
                        debug: () => this.options.debug,
                    },
                )),
                (this.indexFromElement = n => {
                    const o = this.options.indexAttribute,
                        r = n.getAttribute(o);
                    return r
                        ? parseInt(r, 10)
                        : (console.warn(`Missing attribute name '${o}={index}' on measured element.`), -1);
                }),
                (this._measureElement = (n, o) => {
                    const r = this.indexFromElement(n),
                        s = this.measurementsCache[r];
                    if (!s) return;
                    const i = s.key,
                        l = this.elementsCache.get(i);
                    (l !== n &&
                        (l && this.observer.unobserve(l), this.observer.observe(n), this.elementsCache.set(i, n)),
                        n.isConnected && this.resizeItem(r, this.options.measureElement(n, o, this)));
                }),
                (this.resizeItem = (n, o) => {
                    const r = this.measurementsCache[n];
                    if (!r) return;
                    const s = this.itemSizeCache.get(r.key) ?? r.size,
                        i = o - s;
                    i !== 0 &&
                        ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0
                            ? this.shouldAdjustScrollPositionOnItemSizeChange(r, i, this)
                            : r.start < this.getScrollOffset() + this.scrollAdjustments) &&
                            this._scrollToOffset(this.getScrollOffset(), {
                                adjustments: (this.scrollAdjustments += i),
                                behavior: void 0,
                            }),
                        this.pendingMeasuredCacheIndexes.push(r.index),
                        (this.itemSizeCache = new Map(this.itemSizeCache.set(r.key, o))),
                        this.notify(false));
                }),
                (this.measureElement = n => {
                    if (!n) {
                        this.elementsCache.forEach((o, r) => {
                            o.isConnected || (this.observer.unobserve(o), this.elementsCache.delete(r));
                        });
                        return;
                    }
                    this._measureElement(n, void 0);
                }),
                (this.getVirtualItems = Gt(
                    () => [this.getVirtualIndexes(), this.getMeasurements()],
                    (n, o) => {
                        const r = [];
                        for (let s = 0, i = n.length; s < i; s++) {
                            const l = n[s],
                                c = o[l];
                            r.push(c);
                        }
                        return r;
                    },
                    {
                        key: false,
                        debug: () => this.options.debug,
                    },
                )),
                (this.getVirtualItemForOffset = n => {
                    const o = this.getMeasurements();
                    if (o.length !== 0) return Zr(o[qs(0, o.length - 1, r => Zr(o[r]).start, n)]);
                }),
                (this.getMaxScrollOffset = () => {
                    if (!this.scrollElement) return 0;
                    if ('scrollHeight' in this.scrollElement)
                        return this.options.horizontal
                            ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth
                            : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
                    {
                        const n = this.scrollElement.document.documentElement;
                        return this.options.horizontal
                            ? n.scrollWidth - this.scrollElement.innerWidth
                            : n.scrollHeight - this.scrollElement.innerHeight;
                    }
                }),
                (this.getOffsetForAlignment = (n, o, r = 0) => {
                    if (!this.scrollElement) return 0;
                    const s = this.getSize(),
                        i = this.getScrollOffset();
                    (o === 'auto' && (o = n >= i + s ? 'end' : 'start'),
                        o === 'center' ? (n += (r - s) / 2) : o === 'end' && (n -= s));
                    const l = this.getMaxScrollOffset();
                    return Math.max(Math.min(l, n), 0);
                }),
                (this.getOffsetForIndex = (n, o = 'auto') => {
                    n = Math.max(0, Math.min(n, this.options.count - 1));
                    const r = this.measurementsCache[n];
                    if (!r) return;
                    const s = this.getSize(),
                        i = this.getScrollOffset();
                    if (o === 'auto')
                        if (r.end >= i + s - this.options.scrollPaddingEnd) o = 'end';
                        else if (r.start <= i + this.options.scrollPaddingStart) o = 'start';
                        else return [i, o];
                    if (o === 'end' && n === this.options.count - 1) return [this.getMaxScrollOffset(), o];
                    const l =
                        o === 'end' ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
                    return [this.getOffsetForAlignment(l, o, r.size), o];
                }),
                (this.isDynamicMode = () => this.elementsCache.size > 0),
                (this.scrollToOffset = (n, { align: o = 'start', behavior: r } = {}) => {
                    (r === 'smooth' &&
                        this.isDynamicMode() &&
                        console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                        this._scrollToOffset(this.getOffsetForAlignment(n, o), {
                            adjustments: void 0,
                            behavior: r,
                        }));
                }),
                (this.scrollToIndex = (n, { align: o = 'auto', behavior: r } = {}) => {
                    (r === 'smooth' &&
                        this.isDynamicMode() &&
                        console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                        (n = Math.max(0, Math.min(n, this.options.count - 1))),
                        (this.currentScrollToIndex = n));
                    let s = 0;
                    const i = 10,
                        l = d => {
                            if (!this.targetWindow) return;
                            const u = this.getOffsetForIndex(n, d);
                            if (!u) {
                                console.warn('Failed to get offset for index:', n);
                                return;
                            }
                            const [g, f] = u;
                            (this._scrollToOffset(g, {
                                adjustments: void 0,
                                behavior: r,
                            }),
                                this.targetWindow.requestAnimationFrame(() => {
                                    const p = () => {
                                        if (this.currentScrollToIndex !== n) return;
                                        const h = this.getScrollOffset(),
                                            m = this.getOffsetForIndex(n, f);
                                        if (!m) {
                                            console.warn('Failed to get offset for index:', n);
                                            return;
                                        }
                                        hp(m[0], h) || c(f);
                                    };
                                    this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(p) : p();
                                }));
                        },
                        c = d => {
                            this.targetWindow &&
                                this.currentScrollToIndex === n &&
                                (s++,
                                s < i
                                    ? this.targetWindow.requestAnimationFrame(() => l(d))
                                    : console.warn(`Failed to scroll to index ${n} after ${i} attempts.`));
                        };
                    l(o);
                }),
                (this.scrollBy = (n, { behavior: o } = {}) => {
                    (o === 'smooth' &&
                        this.isDynamicMode() &&
                        console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                        this._scrollToOffset(this.getScrollOffset() + n, {
                            adjustments: void 0,
                            behavior: o,
                        }));
                }),
                (this.getTotalSize = () => {
                    var n;
                    const o = this.getMeasurements();
                    let r;
                    if (o.length === 0) r = this.options.paddingStart;
                    else if (this.options.lanes === 1) r = ((n = o[o.length - 1]) == null ? void 0 : n.end) ?? 0;
                    else {
                        const s = Array(this.options.lanes).fill(null);
                        let i = o.length - 1;
                        for (; i >= 0 && s.some(l => l === null); ) {
                            const l = o[i];
                            (s[l.lane] === null && (s[l.lane] = l.end), i--);
                        }
                        r = Math.max(...s.filter(l => l !== null));
                    }
                    return Math.max(r - this.options.scrollMargin + this.options.paddingEnd, 0);
                }),
                (this._scrollToOffset = (n, { adjustments: o, behavior: r }) => {
                    this.options.scrollToFn(
                        n,
                        {
                            behavior: r,
                            adjustments: o,
                        },
                        this,
                    );
                }),
                (this.measure = () => {
                    ((this.itemSizeCache = /* @__PURE__ */ new Map()),
                        (this.laneAssignments = /* @__PURE__ */ new Map()),
                        this.notify(false));
                }),
                this.setOptions(t));
        }
    }
    const qs = (e, t, n, o) => {
        for (; e <= t; ) {
            const r = ((e + t) / 2) | 0,
                s = n(r);
            if (s < o) e = r + 1;
            else if (s > o) t = r - 1;
            else return r;
        }
        return e > 0 ? e - 1 : 0;
    };
    function Sp({ measurements: e, outerSize: t, scrollOffset: n, lanes: o }) {
        const r = e.length - 1,
            s = c => e[c].start;
        if (e.length <= o)
            return {
                startIndex: 0,
                endIndex: r,
            };
        let i = qs(0, r, s, n),
            l = i;
        if (o === 1) for (; l < r && e[l].end < n + t; ) l++;
        else if (o > 1) {
            const c = Array(o).fill(0);
            for (; l < r && c.some(u => u < n + t); ) {
                const u = e[l];
                ((c[u.lane] = u.end), l++);
            }
            const d = Array(o).fill(n + t);
            for (; i >= 0 && d.some(u => u >= n); ) {
                const u = e[i];
                ((d[u.lane] = u.start), i--);
            }
            ((i = Math.max(0, i - (i % o))), (l = Math.min(r, l + (o - 1 - (l % o)))));
        }
        return {
            startIndex: i,
            endIndex: l,
        };
    }
    const os = typeof document < 'u' ? y.useLayoutEffect : y.useEffect;
    function jp({ useFlushSync: e = true, ...t }) {
        const n = y.useReducer(() => ({}), {})[1],
            o = {
                ...t,
                onChange: (s, i) => {
                    var l;
                    (e && i ? ci.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, s, i));
                },
            },
            [r] = y.useState(() => new Cp(o));
        return (r.setOptions(o), os(() => r._didMount(), []), os(() => r._willUpdate()), r);
    }
    function Rp(e) {
        return jp({
            observeElementRect: bp,
            observeElementOffset: xp,
            scrollToFn: wp,
            ...e,
        });
    }
    function Mp(e, t) {
        var _a2, _b;
        let n = false,
            o = e != null ? (typeof e == 'object' ? ((n = true), JSON.stringify(e)) : String(e)) : '';
        if (t == null ? void 0 : t.format)
            try {
                switch (t.format.type) {
                    case 'number':
                        (typeof e == 'number' || (typeof e == 'string' && !isNaN(Number(e)))) &&
                            (o = Fs(Number(e), {
                                decimals: t.format.numberDecimals,
                                prefix: t.format.numberPrefix,
                                suffix: t.format.numberSuffix,
                                thousands: t.format.numberThousandsSeparator,
                            }));
                        break;
                    case 'date':
                        o = Ts(e, t.format.dateFormat, t.format.dateInputFormat);
                        break;
                    case 'boolean':
                        o = To(e, t.format.booleanTrue, t.format.booleanFalse);
                        break;
                    case 'string':
                        o = Ds(String(o), t.format);
                        break;
                }
            } catch {}
        if (!t)
            return {
                displayValue: o,
                textSx: {},
                bgSx: {},
            };
        const r = !t.cellStyleMode || t.cellStyleMode === 'first-match',
            s = ((_a2 = t.format) == null ? void 0 : _a2.type) === 'date' ? zs(e, t.format.dateInputFormat) : e,
            i = {},
            l = {};
        if (t.cellStyle && t.cellStyle.length > 0) {
            for (const c of t.cellStyle)
                if (c.logic && Eu(c.logic, s)) {
                    if (c.backgroundColor && !('background' in i) && !('backgroundColor' in i)) {
                        const d = kt(c.backgroundColor);
                        d ? (i.background = d) : (i.backgroundColor = c.backgroundColor);
                    }
                    if (c.textColor && !('color' in l) && !('background' in l)) {
                        const d = kt(c.textColor);
                        d
                            ? ((l.background = d),
                              (l.backgroundClip = 'text'),
                              (l.WebkitBackgroundClip = 'text'),
                              (l.color = 'transparent'))
                            : (l.color = c.textColor);
                    }
                    if (
                        (c.fontWeight && !l.fontWeight && (l.fontWeight = c.fontWeight),
                        c.fontStyle && !l.fontStyle && (l.fontStyle = c.fontStyle),
                        r)
                    )
                        break;
                }
        }
        return (
            ((_b = t.format) == null ? void 0 : _b.type) === 'string' &&
                (t.format.stringFontWeight === 'bold' && !l.fontWeight && (l.fontWeight = 'bold'),
                t.format.stringFontStyle === 'italic' && !l.fontStyle && (l.fontStyle = 'italic'),
                t.format.stringFontSize && !l.fontSize && (l.fontSize = `${t.format.stringFontSize}px`),
                t.format.stringTextColor &&
                    !('color' in l) &&
                    !('background' in l) &&
                    (l.color = t.format.stringTextColor)),
            {
                displayValue: o,
                textSx: l,
                bgSx: i,
                isTruncated: n,
            }
        );
    }
    function rs({ value: e, config: t }) {
        const { displayValue: n, textSx: o, bgSx: r, isTruncated: s } = y.useMemo(() => Mp(e, t), [e, t]);
        return a.jsxs(H, {
            sx: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                ...r,
            },
            children: [
                a.jsx(F, {
                    variant: 'body2',
                    component: 'span',
                    noWrap: true,
                    title: n,
                    sx: {
                        flex: 1,
                        minWidth: 0,
                        lineHeight: 'inherit',
                        ...o,
                    },
                    children: n,
                }),
                s &&
                    a.jsx(jt, {
                        label: 'JSON',
                        size: 'small',
                        sx: {
                            height: 18,
                            fontSize: '0.65rem',
                            flexShrink: 0,
                            opacity: 0.7,
                        },
                    }),
            ],
        });
    }
    function ss(e) {
        const t = [10, 25, 50, 100];
        if (!e) return t;
        const n = e
            .split(',')
            .map(o => parseInt(o.trim(), 10))
            .filter(o => !isNaN(o) && o > 0);
        return n.length > 0 ? [...new Set(n)].sort((o, r) => o - r) : t;
    }
    function $p(e) {
        const {
                widgetId: t,
                columnConfig: n,
                tableAutoSize: o,
                tableRowSelection: r,
                tablePageSize: s,
                tablePageSizeOptions: i,
                tablePagination: l,
                tableFiltering: c,
                tableSorting: d,
                tableQuickFilter: u,
                gridRowsLength: g,
            } = e,
            f = y.useRef([]),
            p = y.useRef([]),
            h = y.useRef(''),
            m = y.useRef(d),
            x = y.useRef(c),
            v = y.useRef(u),
            [_, C] = y.useState([]);
        y.useEffect(() => {
            (d ? !m.current && f.current.length > 0 && C(f.current) : C(O => (O.length > 0 && (f.current = O), [])),
                (m.current = d));
        }, [d]);
        const [j, R] = y.useState([]);
        y.useEffect(() => {
            (c ? !x.current && p.current.length > 0 && R(p.current) : R(O => (O.length > 0 && (p.current = O), [])),
                (x.current = c));
        }, [c]);
        const [w, M] = y.useState('');
        y.useEffect(() => {
            (u ? !v.current && h.current && M(h.current) : M(O => (O && (h.current = O), '')), (v.current = u));
        }, [u]);
        const [T, D] = y.useState({}),
            [A, P] = y.useState(() => {
                if (o) return {};
                const O = `jtc_col_sizes_${t}`;
                try {
                    const Z = localStorage.getItem(O);
                    if (Z) return JSON.parse(Z);
                } catch {}
                const L = {};
                return (
                    n.forEach(Z => {
                        Z.width && (L[Z.path] = Z.width);
                    }),
                    r === true && (L.__select__ = 48),
                    L
                );
            });
        y.useEffect(() => {
            if (!o)
                try {
                    localStorage.setItem(`jtc_col_sizes_${t}`, JSON.stringify(A));
                } catch {}
        }, [A, t, o]);
        const U = y.useMemo(() => Number(s) || 25, [s]),
            [E, W] = y.useState({
                pageIndex: 0,
                pageSize: U,
            });
        y.useEffect(() => {
            W(O =>
                O.pageSize === U
                    ? O
                    : {
                          pageIndex: 0,
                          pageSize: U,
                      },
            );
        }, [U]);
        const Y = y.useMemo(
                () =>
                    l === false
                        ? {
                              pageIndex: 0,
                              pageSize: Math.max(g, 1),
                          }
                        : E,
                [l, g, E],
            ),
            q = y.useMemo(() => ss(i), [i]),
            [k, S] = y.useState({}),
            I = y.useCallback(() => {
                S({});
            }, []);
        return {
            sorting: _,
            columnFilters: j,
            globalFilter: w,
            rowSelection: T,
            columnSizing: A,
            pagination: E,
            effectivePagination: Y,
            columnVisibility: k,
            setSorting: C,
            setColumnFilters: R,
            setGlobalFilter: M,
            setRowSelection: D,
            setColumnSizing: P,
            setPagination: W,
            setColumnVisibility: S,
            pageSizeOptions: q,
            parsePageSizeOptions: ss,
            showAllColumns: I,
        };
    }
    const Ap = [
            {
                value: 'contains',
                label: 'json_table_filter_contains',
            },
            {
                value: 'startsWith',
                label: 'json_table_filter_starts_with',
            },
            {
                value: 'endsWith',
                label: 'json_table_filter_ends_with',
            },
            {
                value: 'equals',
                label: 'json_table_filter_equals',
            },
            {
                value: 'notEquals',
                label: 'json_table_filter_not_equals',
            },
            {
                value: 'isEmpty',
                label: 'json_table_filter_is_empty',
            },
            {
                value: 'isNotEmpty',
                label: 'json_table_filter_is_not_empty',
            },
        ],
        Ip = [
            {
                value: 'equals',
                label: 'json_table_filter_equals',
            },
            {
                value: 'notEquals',
                label: 'json_table_filter_not_equals',
            },
            {
                value: 'greaterThan',
                label: 'json_table_filter_greater_than',
            },
            {
                value: 'greaterThanOrEqual',
                label: 'json_table_filter_greater_than_or_equal',
            },
            {
                value: 'lessThan',
                label: 'json_table_filter_less_than',
            },
            {
                value: 'lessThanOrEqual',
                label: 'json_table_filter_less_than_or_equal',
            },
            {
                value: 'isEmpty',
                label: 'json_table_filter_is_empty',
            },
            {
                value: 'isNotEmpty',
                label: 'json_table_filter_is_not_empty',
            },
        ],
        Pp = [
            {
                value: 'equals',
                label: 'json_table_filter_equals',
            },
            {
                value: 'greaterThan',
                label: 'json_table_filter_after',
            },
            {
                value: 'greaterThanOrEqual',
                label: 'json_table_filter_on_or_after',
            },
            {
                value: 'lessThan',
                label: 'json_table_filter_before',
            },
            {
                value: 'lessThanOrEqual',
                label: 'json_table_filter_on_or_before',
            },
            {
                value: 'isEmpty',
                label: 'json_table_filter_is_empty',
            },
            {
                value: 'isNotEmpty',
                label: 'json_table_filter_is_not_empty',
            },
        ],
        Fp = [
            {
                value: 'equals',
                label: 'json_table_filter_equals',
            },
            {
                value: 'notEquals',
                label: 'json_table_filter_not_equals',
            },
        ];
    function zp(e) {
        switch (e) {
            case 'number':
            case 'date':
            case 'boolean':
                return 'equals';
            default:
                return 'contains';
        }
    }
    function Tp({ open: e, onClose: t, onApply: n, currentValue: o, columnId: r, columnType: s }) {
        const i = y.useMemo(
                () => (s === 'number' || s === 'date' || s === 'boolean' || s === 'string' ? s : 'string'),
                [s],
            ),
            l = y.useMemo(() => {
                switch (i) {
                    case 'number':
                        return Ip;
                    case 'date':
                        return Pp;
                    case 'boolean':
                        return Fp;
                    default:
                        return Ap;
                }
            }, [i]),
            c = y.useMemo(() => {
                const v = zp(i);
                if (o == null)
                    return {
                        operator: v,
                        value: '',
                    };
                if (typeof o == 'object' && o !== null && 'operator' in o) {
                    const _ = o;
                    return l.some(j => j.value === _.operator)
                        ? _
                        : {
                              operator: v,
                              value: _.value,
                          };
                }
                return typeof o == 'string' || typeof o == 'number'
                    ? {
                          operator: v,
                          value: o,
                      }
                    : {
                          operator: v,
                          value: JSON.stringify(o),
                      };
            }, [o, i, l]),
            [d, u] = y.useState(c.operator),
            [g, f] = y.useState(String(c.value));
        y.useEffect(() => {
            (u(c.operator), f(String(c.value)));
        }, [c, e]);
        const p = !['isEmpty', 'isNotEmpty'].includes(d),
            h = () => {
                const v = g.trim();
                if (p && v === '') n(void 0);
                else {
                    const _ = i === 'number' ? Number(v) : v;
                    n({
                        operator: d,
                        value: _,
                    });
                }
            },
            m = () => {
                n(void 0);
            },
            x = r.split('.').pop() || r;
        return a.jsxs(Uo, {
            open: e,
            onClose: t,
            maxWidth: 'sm',
            fullWidth: true,
            children: [
                a.jsx(qo, {
                    children: b.t('json_table_filter_for_column').replace('{column}', x),
                }),
                a.jsx(Yo, {
                    children: a.jsxs(H, {
                        sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            mt: 1,
                        },
                        children: [
                            a.jsxs(wt, {
                                fullWidth: true,
                                children: [
                                    a.jsx(Ct, {
                                        children: b.t('json_table_filter_operator'),
                                    }),
                                    a.jsx(ct, {
                                        value: d,
                                        label: b.t('json_table_filter_operator'),
                                        onChange: v => u(v.target.value),
                                        children: l.map(v =>
                                            a.jsx(
                                                ie,
                                                {
                                                    value: v.value,
                                                    children: b.t(v.label),
                                                },
                                                v.value,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            p &&
                                a.jsx(Re, {
                                    label: b.t('json_table_filter_value'),
                                    value: g,
                                    onChange: v => f(v.target.value),
                                    type: i === 'number' ? 'number' : 'text',
                                    fullWidth: true,
                                    autoFocus: true,
                                }),
                            !p &&
                                a.jsx(F, {
                                    variant: 'body2',
                                    color: 'text.secondary',
                                    children: b.t('json_table_filter_no_value_needed'),
                                }),
                        ],
                    }),
                }),
                a.jsxs(nr, {
                    children: [
                        a.jsx(ot, {
                            onClick: m,
                            children: b.t('json_table_filter_clear'),
                        }),
                        a.jsx(ot, {
                            onClick: t,
                            children: b.t('cancel'),
                        }),
                        a.jsx(ot, {
                            variant: 'contained',
                            onClick: h,
                            children: b.t('json_table_filter_apply'),
                        }),
                    ],
                }),
            ],
        });
    }
    function Dp({
        anchorEl: e,
        open: t,
        onClose: n,
        activeColumn: o,
        isSorted: r,
        tableFiltering: s,
        activeColumnFilter: i,
        onSetSorting: l,
        onClearSorting: c,
        onShowAllColumns: d,
        hasHiddenColumns: u,
    }) {
        var _a2, _b, _c2, _d2, _e2, _f;
        const [g, f] = y.useState(false),
            p = ((_a2 = o == null ? void 0 : o.getCanSort) == null ? void 0 : _a2.call(o)) === true,
            h = s && ((_b = o == null ? void 0 : o.getCanFilter) == null ? void 0 : _b.call(o)) === true,
            m = ((_c2 = o == null ? void 0 : o.getCanHide) == null ? void 0 : _c2.call(o)) === true,
            x = i != null;
        if (!(p || h || m)) return null;
        const _ = () => {
                (o &&
                    l([
                        {
                            id: o.id,
                            desc: false,
                        },
                    ]),
                    n());
            },
            C = () => {
                (o &&
                    l([
                        {
                            id: o.id,
                            desc: true,
                        },
                    ]),
                    n());
            },
            j = () => {
                (o && c(o.id), n());
            },
            R = () => {
                f(true);
            },
            w = () => {
                f(false);
            },
            M = P => {
                (o == null ? void 0 : o.setFilterValue(P), f(false), n());
            },
            T = () => {
                (o == null ? void 0 : o.setFilterValue(void 0), n());
            },
            D = () => {
                var _a3;
                ((_a3 = o == null ? void 0 : o.toggleVisibility) == null ? void 0 : _a3.call(o, false), n());
            },
            A = () => {
                (d == null ? void 0 : d(), n());
            };
        return a.jsxs(a.Fragment, {
            children: [
                a.jsxs(ui, {
                    anchorEl: e,
                    open: t,
                    onClose: n,
                    children: [
                        p &&
                            a.jsxs(a.Fragment, {
                                children: [
                                    a.jsxs(ie, {
                                        onClick: _,
                                        children: [
                                            a.jsx(on, {
                                                children: a.jsx(Ms, {
                                                    fontSize: 'small',
                                                }),
                                            }),
                                            a.jsx(F, {
                                                variant: 'body2',
                                                children: b.t('json_table_sort_asc'),
                                            }),
                                        ],
                                    }),
                                    a.jsxs(ie, {
                                        onClick: C,
                                        children: [
                                            a.jsx(on, {
                                                children: a.jsx(Rs, {
                                                    fontSize: 'small',
                                                }),
                                            }),
                                            a.jsx(F, {
                                                variant: 'body2',
                                                children: b.t('json_table_sort_desc'),
                                            }),
                                        ],
                                    }),
                                    r &&
                                        a.jsx(ie, {
                                            onClick: j,
                                            children: a.jsx(F, {
                                                variant: 'body2',
                                                children: b.t('json_table_sort_clear'),
                                            }),
                                        }),
                                ],
                            }),
                        p && h && a.jsx(Ao, {}),
                        h &&
                            a.jsxs(a.Fragment, {
                                children: [
                                    a.jsxs(ie, {
                                        onClick: R,
                                        children: [
                                            a.jsx(on, {
                                                children: a.jsx(Jc, {
                                                    fontSize: 'small',
                                                }),
                                            }),
                                            a.jsx(F, {
                                                variant: 'body2',
                                                children: b.t('json_table_set_filter'),
                                            }),
                                        ],
                                    }),
                                    x &&
                                        a.jsxs(ie, {
                                            onClick: T,
                                            children: [
                                                a.jsx(on, {
                                                    children: a.jsx($s, {
                                                        fontSize: 'small',
                                                    }),
                                                }),
                                                a.jsx(F, {
                                                    variant: 'body2',
                                                    children: b.t('json_table_filter_clear'),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        (p || h) && m && a.jsx(Ao, {}),
                        m &&
                            a.jsxs(ie, {
                                onClick: D,
                                children: [
                                    a.jsx(on, {
                                        children: a.jsx(Is, {
                                            fontSize: 'small',
                                        }),
                                    }),
                                    a.jsx(F, {
                                        variant: 'body2',
                                        children: b.t('json_table_hide_column'),
                                    }),
                                ],
                            }),
                        u &&
                            d &&
                            a.jsx(ie, {
                                onClick: A,
                                children: a.jsx(F, {
                                    variant: 'body2',
                                    children: b.t('json_table_show_all_columns'),
                                }),
                            }),
                    ],
                }),
                h &&
                    o &&
                    g &&
                    a.jsx(Tp, {
                        open: g,
                        onClose: w,
                        onApply: M,
                        currentValue: (_d2 = o.getFilterValue) == null ? void 0 : _d2.call(o),
                        columnId: o.id,
                        columnType:
                            (_f = (_e2 = o.columnDef) == null ? void 0 : _e2.meta) == null ? void 0 : _f.columnType,
                    }),
            ],
        });
    }
    function Tt(e) {
        if (e == null) return '';
        if (typeof e == 'object')
            try {
                return JSON.stringify(e).toLowerCase();
            } catch {
                return '[object Object]';
            }
        return String(e).toLowerCase();
    }
    function is(e) {
        if (e == null) return null;
        if (e instanceof Date) {
            const t = e.getTime();
            return isNaN(t) ? null : t;
        }
        if (typeof e == 'number') {
            const t = e >= 1e11 ? e : e * 1e3,
                n = new Date(t);
            return isNaN(n.getTime()) ? null : t;
        }
        if (typeof e == 'string') {
            const t = e.trim();
            if (!t) return null;
            const n = t.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
            if (n) {
                const [, s, i, l, c = '0', d = '0', u = '0'] = n,
                    g = new Date(
                        parseInt(l, 10),
                        parseInt(i, 10) - 1,
                        parseInt(s, 10),
                        parseInt(c, 10),
                        parseInt(d, 10),
                        parseInt(u, 10),
                    );
                return isNaN(g.getTime()) ? null : g.getTime();
            }
            const o = t.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
            if (o) {
                const [, s, i, l, c = '0', d = '0', u = '0'] = o,
                    g = new Date(
                        parseInt(l, 10),
                        parseInt(s, 10) - 1,
                        parseInt(i, 10),
                        parseInt(c, 10),
                        parseInt(d, 10),
                        parseInt(u, 10),
                    );
                return isNaN(g.getTime()) ? null : g.getTime();
            }
            if (/^-?\d+$/.test(t)) {
                const s = parseInt(t, 10),
                    i = s >= 1e11 ? s : s * 1e3,
                    l = new Date(i);
                return isNaN(l.getTime()) ? null : i;
            }
            const r = new Date(t);
            return isNaN(r.getTime()) ? null : r.getTime();
        }
        return null;
    }
    function kp(e, t, n) {
        if (e == null) return t === 'isEmpty';
        if (t === 'isEmpty') return typeof e == 'string' ? e === '' : e == null;
        if (t === 'isNotEmpty') return typeof e == 'string' ? e !== '' : e != null;
        const o = Tt(e),
            r = Tt(n),
            s = Number(e),
            i = Number(n),
            l = !isNaN(s) && !isNaN(i);
        if (['greaterThan', 'greaterThanOrEqual', 'lessThan', 'lessThanOrEqual', 'equals', 'notEquals'].includes(t)) {
            const d = is(e),
                u = is(n);
            if (d !== null && u !== null)
                switch (t) {
                    case 'equals':
                        return d === u;
                    case 'notEquals':
                        return d !== u;
                    case 'greaterThan':
                        return d > u;
                    case 'greaterThanOrEqual':
                        return d >= u;
                    case 'lessThan':
                        return d < u;
                    case 'lessThanOrEqual':
                        return d <= u;
                }
        }
        switch (t) {
            case 'contains':
                return o.includes(r);
            case 'startsWith':
                return o.startsWith(r);
            case 'endsWith':
                return o.endsWith(r);
            case 'equals':
                return l ? s === i : o === r;
            case 'notEquals':
                return l ? s !== i : o !== r;
            case 'greaterThan':
                return l ? s > i : o > r;
            case 'greaterThanOrEqual':
                return l ? s >= i : o >= r;
            case 'lessThan':
                return l ? s < i : o < r;
            case 'lessThanOrEqual':
                return l ? s <= i : o <= r;
            default:
                return true;
        }
    }
    const Ep = (e, t, n) => {
            if (n == null) return true;
            if (typeof n == 'string') {
                const r = e.getValue(t);
                return r == null ? false : Tt(r).includes(n.toLowerCase());
            }
            if (typeof n == 'number') {
                const r = e.getValue(t);
                if (r == null) return false;
                const s = Number(r);
                return isNaN(s) ? Tt(r).includes(Tt(n)) : s === n;
            }
            if (typeof n == 'object' && n !== null && 'operator' in n) {
                const r = n,
                    s = e.getValue(t);
                return kp(s, r.operator, r.value);
            }
            const o = e.getValue(t);
            return o == null ? false : Tt(o).includes(Tt(n));
        },
        Op = {
            advanced: Ep,
        },
        Np = {
            compact: 36,
            standard: 52,
            comfortable: 68,
        },
        Lp = {
            compact: 36,
            standard: 56,
            comfortable: 68,
        },
        Hp = e => {
            const { children: t, value: n, ...o } = e;
            return a.jsx(ie, {
                ...o,
                value: n,
                children: a.jsx(F, {
                    variant: 'body2',
                    component: 'span',
                    children: t,
                }),
            });
        },
        Vp = () => {
            const e = y.useContext(di),
                {
                    widget: {
                        data: { oidObject: t },
                    },
                    widget: n,
                    id: o,
                } = e,
                { data: r } = pi('oid'),
                s = bi('oid'),
                i = Rn(),
                l = t == null ? void 0 : t.type,
                c = l === 'string' || l === 'mixed' || l === 'json',
                d = y.useMemo(() => {
                    if (s == null) return [];
                    let z;
                    if (typeof s == 'string')
                        try {
                            z = JSON.parse(s);
                        } catch {
                            return [];
                        }
                    else z = s;
                    return Array.isArray(z) ? z : typeof z == 'object' && z !== null ? [z] : [];
                }, [s]),
                u = y.useMemo(
                    () => ({
                        maxDepth: n.data.tableMaxDepth || 10,
                    }),
                    [n.data.tableMaxDepth],
                ),
                { columns: g, rows: f, meta: p } = gd(d, u),
                h = y.useMemo(() => {
                    const z = n.data.tableMaxDepth || 10;
                    return p.maxDepth > z
                        ? {
                              actual: p.maxDepth,
                              configured: z,
                          }
                        : null;
                }, [p.maxDepth, n.data.tableMaxDepth]),
                m = y.useMemo(() => Ps(n.data.columnConfig), [n.data.columnConfig]),
                x = n.data.tableDensity || 'standard',
                v = Number(n.data.tableRowHeight) || Np[x] || 52,
                _ = Number(n.data.tableHeaderHeight) || Lp[x] || 56,
                C = y.useMemo(
                    () =>
                        f.map((z, $) => ({
                            __id: $,
                            ...z,
                        })),
                    [f],
                ),
                j = y.useMemo(
                    () =>
                        Uu({
                            columnConfig: m,
                            analysisColumns: g,
                            widgetData: {
                                tableSorting: n.data.tableSorting !== false,
                                tableFiltering: w,
                                tableRowSelection: n.data.tableRowSelection === true,
                                tableHiding: n.data.tableHiding !== false,
                            },
                            renderConfiguredCell: (z, $) =>
                                a.jsx(rs, {
                                    value: z,
                                    config: $,
                                }),
                            renderAutoDetectedCell: z =>
                                a.jsx(rs, {
                                    value: z,
                                }),
                            renderSelectionHeader: z =>
                                a.jsx(wn, {
                                    size: 'small',
                                    indeterminate: z.getIsSomePageRowsSelected(),
                                    checked: z.getIsAllPageRowsSelected(),
                                    onChange: z.getToggleAllPageRowsSelectedHandler(),
                                    'aria-label': 'Select all rows',
                                }),
                            renderSelectionCell: z =>
                                a.jsx(wn, {
                                    size: 'small',
                                    checked: z.getIsSelected(),
                                    onChange: z.getToggleSelectedHandler(),
                                    'aria-label': 'Select row',
                                }),
                        }),
                    [m, g, n.data.tableSorting, w, n.data.tableRowSelection, n.data.tableHiding],
                ),
                R = n.data.tableAutoSize === true,
                w = n.data.tableFiltering === true && n.data.tableColumnMenu !== false,
                {
                    sorting: M,
                    columnFilters: T,
                    globalFilter: D,
                    rowSelection: A,
                    columnSizing: P,
                    pagination: U,
                    effectivePagination: E,
                    columnVisibility: W,
                    setSorting: Y,
                    setColumnFilters: q,
                    setGlobalFilter: k,
                    setRowSelection: S,
                    setColumnSizing: I,
                    setPagination: O,
                    setColumnVisibility: L,
                    pageSizeOptions: Z,
                    showAllColumns: Q,
                } = $p({
                    widgetId: o,
                    columnConfig: m,
                    tableAutoSize: R,
                    tableRowSelection: n.data.tableRowSelection === true,
                    tablePageSize: Number(n.data.tablePageSize) || 25,
                    tablePageSizeOptions: n.data.tablePageSizeOptions,
                    tablePagination: n.data.tablePagination !== false,
                    tableFiltering: w,
                    tableSorting: n.data.tableSorting !== false,
                    tableQuickFilter: n.data.tableQuickFilter === true,
                    gridRowsLength: C.length,
                }),
                ue = gp({
                    data: C,
                    columns: j,
                    getCoreRowModel: op(),
                    getSortedRowModel: up(),
                    getFilteredRowModel: ap(),
                    getPaginationRowModel: cp(),
                    enableMultiSort: n.data.tableSortingMulti ?? false,
                    globalFilterFn: 'includesString',
                    filterFns: Op,
                    columnResizeMode: 'onChange',
                    enableColumnResizing: !R,
                    defaultColumn: {
                        minSize: 40,
                        maxSize: 2e3,
                        filterFn: 'advanced',
                    },
                    state: {
                        sorting: M,
                        columnFilters: T,
                        globalFilter: D,
                        pagination: E,
                        rowSelection: A,
                        columnSizing: P,
                        columnVisibility: W,
                    },
                    onSortingChange: Y,
                    onColumnFiltersChange: q,
                    onGlobalFilterChange: k,
                    onPaginationChange: n.data.tablePagination !== false ? O : void 0,
                    onRowSelectionChange: S,
                    onColumnSizingChange: I,
                    onColumnVisibilityChange: L,
                    enableRowSelection: n.data.tableRowSelection === true,
                    enableSorting: n.data.tableSorting !== false,
                    enableColumnFilters: w,
                    enableGlobalFilter: n.data.tableQuickFilter === true,
                }),
                fe = y.useRef(null),
                N = y.useRef(null),
                [ae, te] = y.useState({}),
                [X, ze] = y.useState(null),
                Ae = y.useRef(null),
                [ge, Me] = y.useState(void 0),
                [we, pt] = y.useState(void 0),
                $t = y.useCallback(
                    (z, $) => {
                        var _a2;
                        Ae.current = z;
                        const K = z.id,
                            Ce = M.find(nt => nt.id === K),
                            Oe = (_a2 = T.find(nt => nt.id === K)) == null ? void 0 : _a2.value;
                        (Me(Ce), pt(Oe), ze($));
                    },
                    [M, T],
                ),
                it = y.useCallback(() => {
                    ze(null);
                }, []);
            y.useEffect(() => {
                if (!R) return;
                const z = N.current;
                if (!z) return;
                const $ = new ResizeObserver(() => {
                    const K = z.querySelector('tr[data-row-index]');
                    if (!K) return;
                    const Ce = K.querySelectorAll('td'),
                        Oe = ue.getHeaderGroups()[0];
                    if (!Oe || Ce.length !== Oe.headers.length) return;
                    const nt = {};
                    (Oe.headers.forEach((go, Wt) => {
                        const ar = Ce[Wt];
                        ar && (nt[go.id] = ar.getBoundingClientRect().width);
                    }),
                        te(nt));
                });
                return ($.observe(z), () => $.disconnect());
            }, [R, ue]);
            const ft = y.useMemo(() => {
                    const z = {
                        tableLayout: R ? 'auto' : 'fixed',
                        width: '100%',
                    };
                    if (n.data.tableShowRowBorders === false)
                        z['& .MuiTableCell-root'] = {
                            borderBottom: 'none',
                        };
                    else {
                        const $ = n.data.horizontalCellBorderWidth ?? 1,
                            K = Dn(n.data.horizontalCellBorderColor);
                        z['& .MuiTableCell-root'] = {
                            ...z['& .MuiTableCell-root'],
                            borderBottom: `${$}px solid`,
                            borderBottomColor: K || 'divider',
                        };
                    }
                    if (n.data.tableShowCellBorders === true) {
                        const $ = n.data.verticalCellBorderWidth ?? 1,
                            K = Dn(n.data.verticalCellBorderColor);
                        z['& .MuiTableCell-root:not(:last-child)'] = {
                            borderRight: `${$}px solid`,
                            borderRightColor: K || 'divider',
                        };
                    }
                    return z;
                }, [
                    n.data.tableShowRowBorders,
                    n.data.tableShowCellBorders,
                    n.data.horizontalCellBorderWidth,
                    n.data.horizontalCellBorderColor,
                    n.data.verticalCellBorderWidth,
                    n.data.verticalCellBorderColor,
                    R,
                ]),
                Qe = n.data.tableHeaderBgColor,
                $e = n.data.tableHeaderTextColor,
                ke = n.data.tableHeaderFontSize,
                At = y.useMemo(
                    () => ({
                        height: _,
                        whiteSpace: 'nowrap',
                        ...($e && {
                            color: $e,
                        }),
                        ...(ke && {
                            fontSize: `${ke}px`,
                        }),
                    }),
                    [_, $e, ke],
                ),
                gt = y.useMemo(
                    () => ({
                        ...($e && {
                            color: $e,
                        }),
                        ...(ke && {
                            fontSize: `${ke}px`,
                        }),
                    }),
                    [$e, ke],
                ),
                ht = n.data.noCard === true,
                mt = n.data.headerBorderWidth ?? 0,
                It = Dn(n.data.headerBorderColor),
                yt = y.useMemo(() => {
                    const z = n.data.tableHeaderElevation ?? 6,
                        $ = ht
                            ? {
                                  backgroundColor: 'transparent',
                                  boxShadow: 'none',
                              }
                            : {
                                  backgroundColor: 'background.paper',
                                  boxShadow: z > 0 ? i.shadows[z] : 'none',
                              };
                    mt > 0 &&
                        ($['&::after'] = {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: `${mt}px`,
                            backgroundColor: It || i.palette.divider,
                            pointerEvents: 'none',
                        });
                    const K = Qe ? kt(Qe) : null;
                    return K
                        ? {
                              ...$,
                              background: K,
                          }
                        : Qe
                          ? {
                                ...$,
                                backgroundColor: Qe,
                            }
                          : $;
                }, [ht, Qe, i.shadows, i.palette.divider, n.data.tableHeaderElevation, mt, It]),
                Ht = y.useMemo(() => {
                    const z = {
                            flex: 1,
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                        },
                        $ = n.data.borderWidth,
                        K = n.data.borderStyle || 'solid',
                        Ce = Dn(n.data.borderColor),
                        Oe = n.data.borderRadius;
                    return (
                        $ && $ > 0 && ((z.border = `${$}px ${K}`), (z.borderColor = Ce || 'divider')),
                        Oe && (z.borderRadius = Oe),
                        z
                    );
                }, [n.data.borderWidth, n.data.borderStyle, n.data.borderColor, n.data.borderRadius]),
                Pt = y.useMemo(
                    () => ({
                        flex: 1,
                        overflow: 'auto',
                    }),
                    [],
                ),
                tn = y.useCallback(z => (R ? (ae[z.id] ?? 'auto') : z.getSize()), [R, ae]),
                Ee = y.useMemo(
                    () => ({
                        ...(n.data.tableCellFontSize && {
                            fontSize: `${n.data.tableCellFontSize}px`,
                        }),
                        overflow: 'hidden',
                        height: v,
                        maxHeight: v,
                        padding: '0 8px',
                        verticalAlign: 'middle',
                    }),
                    [n.data.tableCellFontSize, v],
                ),
                tt = n.data.evenRowColor || null,
                Ue = n.data.oddRowColor || null,
                vt = tt ? kt(tt) : null,
                Pn = Ue ? kt(Ue) : null,
                Vt = y.useCallback(
                    z => {
                        const $ = z % 2 === 0,
                            K = $ ? tt : Ue,
                            Ce = $ ? vt : Pn;
                        if (K)
                            return Ce
                                ? {
                                      background: Ce,
                                  }
                                : {
                                      backgroundColor: K,
                                  };
                    },
                    [tt, Ue, vt, Pn],
                ),
                Bt = ue.getRowModel().rows,
                Ft = Rp({
                    count: Bt.length,
                    getScrollElement: () => fe.current,
                    estimateSize: () => v,
                    overscan: 25,
                    scrollPaddingStart: v,
                }),
                po = n.data.tableVirtualizeThreshold ?? 50,
                zt = n.data.tablePagination === false && Bt.length > po ? Ft.getVirtualItems() : null,
                fo = zt == null ? void 0 : zt[0],
                Fn = zt == null ? void 0 : zt[zt.length - 1],
                zn = (fo == null ? void 0 : fo.start) ?? 0,
                Tn = Fn ? Ft.getTotalSize() - (Fn.end ?? 0) : 0;
            return a.jsxs(fi, {
                isValidType: c,
                data: r,
                oidValue: s,
                children: [
                    a.jsx(gi, {
                        data: r,
                        widget: n,
                    }),
                    c && j.length > 0
                        ? a.jsxs(H, {
                              sx: {
                                  width: '100%',
                                  height: '100%',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  overflow: 'hidden',
                                  p: Number(n.data.jsonTablePadding) || 0,
                              },
                              children: [
                                  n.data.tableQuickFilter === true &&
                                      a.jsx(H, {
                                          sx: {
                                              p: 1,
                                              flexShrink: 0,
                                          },
                                          children: a.jsx(Re, {
                                              size: 'small',
                                              variant: 'outlined',
                                              fullWidth: true,
                                              value: D,
                                              onChange: z => k(z.target.value),
                                              placeholder: b.t('json_table_search_placeholder'),
                                              slotProps: {
                                                  input: {
                                                      startAdornment: a.jsx(ws, {
                                                          position: 'start',
                                                          children: a.jsx(As, {
                                                              fontSize: 'small',
                                                          }),
                                                      }),
                                                  },
                                              },
                                          }),
                                      }),
                                  h &&
                                      a.jsx(Jn, {
                                          severity: 'warning',
                                          sx: {
                                              m: 1,
                                          },
                                          children: a.jsx(F, {
                                              variant: 'body2',
                                              children: b
                                                  .t('json_table_depth_warning')
                                                  .replace('{{actual}}', String(h.actual))
                                                  .replace('{{configured}}', String(h.configured)),
                                          }),
                                      }),
                                  a.jsx(H, {
                                      sx: Ht,
                                      children: a.jsx(fc, {
                                          ref: fe,
                                          sx: Pt,
                                          children: a.jsxs(ec, {
                                              size: x === 'compact' ? 'small' : 'medium',
                                              sx: ft,
                                              children: [
                                                  a.jsx(vc, {
                                                      sx: {
                                                          position: 'sticky',
                                                          top: 0,
                                                          zIndex: 2,
                                                          ...yt,
                                                          '& .resize-handle': {
                                                              opacity: 0,
                                                          },
                                                          '&:hover .resize-handle': {
                                                              opacity: 1,
                                                          },
                                                      },
                                                      children: ue.getHeaderGroups().map(z =>
                                                          a.jsx(
                                                              sn,
                                                              {
                                                                  children: z.headers.map($ => {
                                                                      const K = $.column.getCanSort(),
                                                                          Ce = $.column.getIsSorted(),
                                                                          Oe = $.column.columnDef.meta,
                                                                          nt = $.column.id === '__select__',
                                                                          go = !R;
                                                                      return a.jsxs(
                                                                          _t,
                                                                          {
                                                                              component: 'th',
                                                                              colSpan: $.colSpan,
                                                                              align:
                                                                                  (Oe == null ? void 0 : Oe.align) ||
                                                                                  'left',
                                                                              padding: nt ? 'checkbox' : 'normal',
                                                                              sx: {
                                                                                  width: tn($),
                                                                                  minWidth: nt ? 48 : 40,
                                                                                  position: 'relative',
                                                                                  ...At,
                                                                              },
                                                                              children: [
                                                                                  nt
                                                                                      ? pn(
                                                                                            $.column.columnDef.header,
                                                                                            $.getContext(),
                                                                                        )
                                                                                      : a.jsxs(H, {
                                                                                            sx: {
                                                                                                display: 'flex',
                                                                                                alignItems: 'center',
                                                                                                justifyContent:
                                                                                                    (Oe == null
                                                                                                        ? void 0
                                                                                                        : Oe.align) ===
                                                                                                    'right'
                                                                                                        ? 'flex-end'
                                                                                                        : (Oe == null
                                                                                                                ? void 0
                                                                                                                : Oe.align) ===
                                                                                                            'center'
                                                                                                          ? 'center'
                                                                                                          : 'space-between',
                                                                                                width: '100%',
                                                                                            },
                                                                                            children: [
                                                                                                K
                                                                                                    ? a.jsx(Gc, {
                                                                                                          active:
                                                                                                              Ce !==
                                                                                                              false,
                                                                                                          direction:
                                                                                                              Ce ===
                                                                                                              'desc'
                                                                                                                  ? 'desc'
                                                                                                                  : 'asc',
                                                                                                          onClick:
                                                                                                              $.column.getToggleSortingHandler(),
                                                                                                          children:
                                                                                                              a.jsx(F, {
                                                                                                                  variant:
                                                                                                                      'body2',
                                                                                                                  component:
                                                                                                                      'span',
                                                                                                                  fontWeight:
                                                                                                                      'medium',
                                                                                                                  noWrap: true,
                                                                                                                  sx: gt,
                                                                                                                  children:
                                                                                                                      pn(
                                                                                                                          $
                                                                                                                              .column
                                                                                                                              .columnDef
                                                                                                                              .header,
                                                                                                                          $.getContext(),
                                                                                                                      ),
                                                                                                              }),
                                                                                                      })
                                                                                                    : a.jsx(F, {
                                                                                                          variant:
                                                                                                              'body2',
                                                                                                          component:
                                                                                                              'span',
                                                                                                          fontWeight:
                                                                                                              'medium',
                                                                                                          noWrap: true,
                                                                                                          sx: gt,
                                                                                                          children: pn(
                                                                                                              $.column
                                                                                                                  .columnDef
                                                                                                                  .header,
                                                                                                              $.getContext(),
                                                                                                          ),
                                                                                                      }),
                                                                                                n.data
                                                                                                    .tableColumnMenu !==
                                                                                                    false &&
                                                                                                    ($.column.getCanSort() ||
                                                                                                        (w &&
                                                                                                            $.column.getCanFilter()) ||
                                                                                                        $.column.getCanHide()) &&
                                                                                                    a.jsx(Le, {
                                                                                                        title: b.t(
                                                                                                            'json_table_column_menu',
                                                                                                        ),
                                                                                                        children: a.jsx(
                                                                                                            Se,
                                                                                                            {
                                                                                                                size: 'small',
                                                                                                                'aria-label':
                                                                                                                    b.t(
                                                                                                                        'json_table_column_menu',
                                                                                                                    ),
                                                                                                                onClick:
                                                                                                                    Wt => {
                                                                                                                        (Wt.stopPropagation(),
                                                                                                                            $t(
                                                                                                                                $.column,
                                                                                                                                Wt.currentTarget,
                                                                                                                            ));
                                                                                                                    },
                                                                                                                sx: {
                                                                                                                    ml: 0.5,
                                                                                                                    opacity: 0.6,
                                                                                                                },
                                                                                                                children:
                                                                                                                    a.jsx(
                                                                                                                        Kc,
                                                                                                                        {
                                                                                                                            fontSize:
                                                                                                                                'inherit',
                                                                                                                        },
                                                                                                                    ),
                                                                                                            },
                                                                                                        ),
                                                                                                    }),
                                                                                            ],
                                                                                        }),
                                                                                  go &&
                                                                                      $.column.getCanResize() &&
                                                                                      a.jsx(H, {
                                                                                          className: 'resize-handle',
                                                                                          onMouseDown:
                                                                                              $.getResizeHandler(),
                                                                                          onTouchStart:
                                                                                              $.getResizeHandler(),
                                                                                          onClick: Wt =>
                                                                                              Wt.stopPropagation(),
                                                                                          sx: {
                                                                                              position: 'absolute',
                                                                                              right: 0,
                                                                                              top: 0,
                                                                                              height: '100%',
                                                                                              width: '4px',
                                                                                              cursor: 'col-resize',
                                                                                              userSelect: 'none',
                                                                                              touchAction: 'none',
                                                                                              zIndex: 1,
                                                                                              opacity:
                                                                                                  $.column.getIsResizing()
                                                                                                      ? 1
                                                                                                      : 0,
                                                                                              bgcolor:
                                                                                                  $.column.getIsResizing()
                                                                                                      ? 'primary.main'
                                                                                                      : 'divider',
                                                                                              transition:
                                                                                                  'opacity 0.15s',
                                                                                              '&:hover': {
                                                                                                  opacity: 1,
                                                                                                  bgcolor:
                                                                                                      'primary.light',
                                                                                              },
                                                                                          },
                                                                                      }),
                                                                              ],
                                                                          },
                                                                          $.id,
                                                                      );
                                                                  }),
                                                              },
                                                              z.id,
                                                          ),
                                                      ),
                                                  }),
                                                  a.jsx(sc, {
                                                      ref: N,
                                                      children: zt
                                                          ? a.jsxs(a.Fragment, {
                                                                children: [
                                                                    zn > 0 &&
                                                                        a.jsx(sn, {
                                                                            children: a.jsx(_t, {
                                                                                colSpan: j.length,
                                                                                sx: {
                                                                                    height: zn,
                                                                                    p: 0,
                                                                                    border: 'none',
                                                                                },
                                                                            }),
                                                                        }),
                                                                    zt.map(z => {
                                                                        const $ = Bt[z.index],
                                                                            K = z.index;
                                                                        return a.jsx(
                                                                            sn,
                                                                            {
                                                                                'data-row-index': K,
                                                                                sx: {
                                                                                    height: v,
                                                                                    ...Vt(K),
                                                                                },
                                                                                children: $.getVisibleCells().map(
                                                                                    Ce => {
                                                                                        var _a2;
                                                                                        const Oe =
                                                                                            Ce.column.id ===
                                                                                            '__select__';
                                                                                        return a.jsx(
                                                                                            _t,
                                                                                            {
                                                                                                align:
                                                                                                    ((_a2 =
                                                                                                        Ce.column
                                                                                                            .columnDef
                                                                                                            .meta) ==
                                                                                                    null
                                                                                                        ? void 0
                                                                                                        : _a2.align) ||
                                                                                                    'left',
                                                                                                padding: Oe
                                                                                                    ? 'checkbox'
                                                                                                    : 'normal',
                                                                                                sx: {
                                                                                                    ...Ee,
                                                                                                },
                                                                                                children: pn(
                                                                                                    Ce.column.columnDef
                                                                                                        .cell,
                                                                                                    Ce.getContext(),
                                                                                                ),
                                                                                            },
                                                                                            Ce.id,
                                                                                        );
                                                                                    },
                                                                                ),
                                                                            },
                                                                            $.id,
                                                                        );
                                                                    }),
                                                                    Tn > 0 &&
                                                                        a.jsx(sn, {
                                                                            children: a.jsx(_t, {
                                                                                colSpan: j.length,
                                                                                sx: {
                                                                                    height: Tn,
                                                                                    p: 0,
                                                                                    border: 'none',
                                                                                },
                                                                            }),
                                                                        }),
                                                                ],
                                                            })
                                                          : Bt.map((z, $) =>
                                                                a.jsx(
                                                                    sn,
                                                                    {
                                                                        'data-row-index': $,
                                                                        sx: {
                                                                            height: v,
                                                                            ...Vt($),
                                                                        },
                                                                        children: z.getVisibleCells().map(K => {
                                                                            var _a2;
                                                                            const Ce = K.column.id === '__select__';
                                                                            return a.jsx(
                                                                                _t,
                                                                                {
                                                                                    align:
                                                                                        ((_a2 =
                                                                                            K.column.columnDef.meta) ==
                                                                                        null
                                                                                            ? void 0
                                                                                            : _a2.align) || 'left',
                                                                                    padding: Ce ? 'checkbox' : 'normal',
                                                                                    sx: {
                                                                                        ...Ee,
                                                                                    },
                                                                                    children: pn(
                                                                                        K.column.columnDef.cell,
                                                                                        K.getContext(),
                                                                                    ),
                                                                                },
                                                                                K.id,
                                                                            );
                                                                        }),
                                                                    },
                                                                    z.id,
                                                                ),
                                                            ),
                                                  }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  n.data.tablePagination !== false &&
                                      a.jsx(kc, {
                                          component: 'div',
                                          count: ue.getFilteredRowModel().rows.length,
                                          page: U.pageIndex,
                                          rowsPerPage: U.pageSize,
                                          rowsPerPageOptions: Z,
                                          onPageChange: (z, $) =>
                                              O(K => ({
                                                  ...K,
                                                  pageIndex: $,
                                              })),
                                          onRowsPerPageChange: z =>
                                              O({
                                                  pageIndex: 0,
                                                  pageSize: parseInt(z.target.value, 10),
                                              }),
                                          labelRowsPerPage: a.jsx(F, {
                                              variant: 'body2',
                                              component: 'span',
                                              children: b.t('json_table_rows_per_page'),
                                          }),
                                          labelDisplayedRows: ({ from: z, to: $, count: K }) =>
                                              a.jsx(F, {
                                                  variant: 'body2',
                                                  component: 'span',
                                                  children: `${z}\u2013${$} / ${K}`,
                                              }),
                                          slots: {
                                              menuItem: Hp,
                                          },
                                          slotProps: {
                                              select: {
                                                  renderValue: z =>
                                                      a.jsx(F, {
                                                          variant: 'body2',
                                                          component: 'span',
                                                          children: String(z),
                                                      }),
                                              },
                                          },
                                      }),
                                  a.jsx(Dp, {
                                      anchorEl: X,
                                      open: !!X,
                                      onClose: it,
                                      activeColumn: Ae.current,
                                      isSorted: ge !== void 0,
                                      tableFiltering: w,
                                      activeColumnFilter: we,
                                      onSetSorting: Y,
                                      onClearSorting: z => Y($ => $.filter(K => K.id !== z)),
                                      onShowAllColumns: Q,
                                      hasHiddenColumns: Object.keys(W).some(z => W[z] === false),
                                  }),
                              ],
                          })
                        : a.jsx(H, {
                              sx: {
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  width: '100%',
                                  height: '100%',
                                  p: 2,
                              },
                              children: a.jsx(F, {
                                  variant: 'body2',
                                  color: 'text.secondary',
                                  children:
                                      l === void 0
                                          ? b.t('json_table_no_oid')
                                          : c
                                            ? m.length > 0 && j.length === 0
                                                ? b.t('json_table_all_columns_hidden')
                                                : b.t('json_table_no_data')
                                            : b.t('json_table_invalid_type'),
                              }),
                          }),
                ],
            });
        },
        Bp = [
            'columnConfig',
            'tableDensity',
            'tableRowHeight',
            'tableHeaderHeight',
            'tableAutoSize',
            'tableHeaderElevation',
            'tablePagination',
            'tablePageSize',
            'tablePageSizeOptions',
            'tableSorting',
            'tableFiltering',
            'tableQuickFilter',
            'tableColumnMenu',
            'tableRowSelection',
            'tableShowCellBorders',
            'tableShowRowBorders',
            'tableHeaderBgColor',
            'tableHeaderTextColor',
            'tableHeaderFontSize',
            'tableStripedColor',
            'tableCellFontSize',
            'tableMaxDepth',
        ];
    Wo = class extends b {
        static createObjectFields() {
            const t = hi(['string', 'mixed', 'json']),
                n = t.find(o => o.name === 'oid');
            if (n) {
                const o = n,
                    r = o.onChange;
                o.onChange = async (s, i, l, c) => {
                    if (!i.oid) {
                        for (const d of Bp) delete i[d];
                        r || l(i);
                    }
                    r && (await r(s, i, l, c));
                };
            }
            return t;
        }
        static getWidgetInfo() {
            return {
                id: 'tplJsonTableCollectionWidget',
                visSet: 'vis-2-widgets-collection',
                visSetLabel: 'widgets_collection',
                visName: 'JsonTableCollectionWidget',
                visWidgetLabel: 'json_table_collection_widget',
                visOrder: 11,
                visAttrs: [
                    {
                        name: 'common',
                        fields: [...fr()],
                    },
                    {
                        name: 'jsonTable',
                        label: 'group_json_table',
                        fields: [...Wo.createObjectFields(), ...yd()],
                    },
                    {
                        name: 'values',
                        label: 'values',
                        indexFrom: 1,
                        indexTo: 'values_count',
                        fields: [
                            ...fr({
                                groupName: '',
                                allFields: false,
                            }),
                        ],
                    },
                ],
                visDefaultStyle: {
                    width: '100%',
                    height: '400px',
                    position: 'relative',
                },
                visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-json-table.png',
            };
        }
        getWidgetInfo() {
            return Wo.getWidgetInfo();
        }
        propertiesUpdate() {}
        onRxDataChanged() {}
        onRxStyleChanged() {}
        onStateUpdated(t, n) {}
        renderWidgetBody(t) {
            (super.renderWidgetBody(t),
                t.widget.data.noCard || t.widget.usedInWidget
                    ? (this.wrappedCollectionContent = false)
                    : (this.wrappedCollectionContent = true));
            const n = {
                id: t.id,
                refService: t.refService,
                style: t.style,
                widget: {
                    data: this.state.rxData,
                    style: this.state.rxStyle,
                },
                setValue: this.setValue,
                setState: this.setState.bind(this),
                values: this.state.values,
                isSignalVisible: this.isSignalVisible.bind(this),
                getPropertyValue: this.getPropertyValue.bind(this),
                mode: this.props.context.themeType,
                socket: this.props.context.socket,
                theme: this.props.context.theme,
                wrappedContent: this.wrappedCollectionContent,
            };
            return mi(this.wrapContent(a.jsx(Vp, {})), n);
        }
    };
});
export { __tla, Wo as default };
