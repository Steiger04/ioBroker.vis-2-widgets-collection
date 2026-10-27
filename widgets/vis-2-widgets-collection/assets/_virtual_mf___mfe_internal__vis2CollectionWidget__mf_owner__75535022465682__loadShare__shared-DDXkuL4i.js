const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./emotion-cache.browser.esm--RCZvsJA.js","./emotion-use-insertion-effect-with-fallbacks.browser.esm-DlmghOBK.js","./createSvgIcon-CNE8PSAz.js","./createStyled-C2Uprg2G.js","./useEnhancedEffect-B263MN2W.js","./useMediaQuery-BDbYZ6ev.js","./Switch-CUqHMISx.js","./react-DlmbjZJV.js","./react-dom-1flDk5uq.js"])))=>i.map(i=>d[i]);
import { n as e } from "./rolldown-runtime-XKyaHtl9.js";
import { t } from "./vite-preload-helper-CRzLMJPS.js";
let uu, C, If, xr, tf, dt, vp, _e, Nn, Cp, nr, Sp, Ge, Xd, nt, L, js, of, h, Zd, rt, tu, y, wl, Pe, Qd, it, Cl, Sr, Kd, Je, wp, cr, qd, Xe, lu, S, $d, Ne, _p, me, Mn, xp, zn, cf, g, rf, m, Ef, _, ou, b, nu, Fe, Tl, x, lp, Ce, wn, Gp, k, fl, pp, ye, An, Rp, Nt, dn, Zf, Ut, gn, w, du, Qf, qt, _n, ip, nn, Cn, np, Zt, xn, Yp, O, dl, Af, qe, Ep, yr, Op, zt, pn, tp, Xt, bn, im, E, vu, Kp, A, il, $f, ze, vn, Zl, v, am, D, hl, qp, At, je, vm, T, fu, Rf, Bt, hn, up, le, Dn, yp, re, Pn, gp, xe, jn, Bf, ue, kn, ef, ut;
let __tla = (async () => {
  let n, r, i, a, ee, te, o, ne, s, c, ie;
  n = (e2, t2) => {
    let n2 = e2[t2.canonical];
    if (n2 !== void 0) return n2;
    let r2 = t2.aliases || [];
    for (let n3 of r2) {
      if (!Object.prototype.hasOwnProperty.call(e2, n3)) continue;
      let r3 = e2[n3];
      if (r3 !== void 0) return e2[t2.canonical] = r3, r3;
    }
  };
  r = /* @__PURE__ */ Symbol.for(`module-federation.shared-cache-listeners`);
  i = (e2) => {
    let t2 = e2[r];
    return t2 === void 0 && (t2 = /* @__PURE__ */ Object.create(null), Object.defineProperty(e2, r, {
      value: t2,
      enumerable: false,
      configurable: false,
      writable: false
    })), t2;
  };
  a = (e2, t2, n2) => {
    let r2 = i(e2);
    (r2[t2.canonical] ||= /* @__PURE__ */ new Set()).add(n2);
  };
  ee = /* @__PURE__ */ Symbol.for(`module-federation.shared-cache-owners`);
  te = (e2) => {
    let t2 = e2[ee];
    return t2 === void 0 && (t2 = /* @__PURE__ */ Object.create(null), Object.defineProperty(e2, ee, {
      value: t2,
      enumerable: false,
      configurable: false,
      writable: false
    })), t2;
  };
  o = (e2) => {
    let t2 = [
      e2,
      e2 == null ? void 0 : e2.default
    ];
    for (let e3 of t2) if (e3 && typeof e3 == `object`) {
      for (let t3 of [
        `__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE`,
        `__TEST_INTERNALS`,
        `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`
      ]) {
        let n2 = e3[t3];
        if (n2 && typeof n2 == `object`) return {
          internals: n2
        };
      }
      if (typeof e3.useState == `function`) return {
        hook: e3.useState
      };
    }
  };
  ne = (e2, t2) => {
    if (e2 === t2) return true;
    let n2 = o(e2), r2 = o(t2);
    if (!n2 || !r2) return false;
    let i2 = n2.internals, a2 = r2.internals;
    return i2 !== void 0 || a2 !== void 0 ? i2 !== void 0 && i2 === a2 : typeof n2.hook == `function` && n2.hook === r2.hook;
  };
  s = (e2, t2, i2, a2) => {
    var _a2;
    let o2 = n(e2, t2);
    if (o2 !== void 0 && ne(o2, i2)) return i2;
    e2[t2.canonical] = i2;
    let s2 = t2.aliases || [];
    for (let t3 of s2) Object.defineProperty(e2, t3, {
      value: i2,
      enumerable: true,
      configurable: true,
      writable: true
    });
    let re2 = e2[ee];
    a2 === void 0 ? re2 && delete re2[t2.canonical] : te(e2)[t2.canonical] = a2;
    let c2 = (_a2 = e2[r]) == null ? void 0 : _a2[t2.canonical];
    if (c2) for (let e3 of c2) e3(i2);
    return i2;
  };
  re = e({
    CacheProvider: () => le,
    ClassNames: () => ge,
    Global: () => _e,
    ThemeContext: () => ue,
    ThemeProvider: () => de,
    __moduleExports: () => d,
    __unsafe_useEmotionCache: () => fe,
    createElement: () => ve,
    css: () => ye,
    default: () => ce,
    jsx: () => be,
    keyframes: () => xe,
    useTheme: () => pe,
    withEmotionCache: () => me,
    withTheme: () => he
  });
  c = `__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__mf_v__runtimeInit__mf_v__.js__`;
  ie = globalThis[c];
  if (!ie) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    ie = globalThis[c] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var ae = ie.initPromise, l = `__mf_module_cache__`;
  globalThis[l] ||= {
    share: {},
    remote: {}
  }, globalThis[l].share ||= {}, globalThis[l].remote ||= {};
  var u = globalThis[l], oe = (e2) => {
    let t2 = u.pendingShareLoads ||= [];
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(u.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    u.share[t2] === void 0 && (u.share[t2] = u.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    u.share[t2] === void 0 && (u.share[t2] = u.share[e2]);
  }
  let se, ce, de, fe, pe, he, ge, ve, be, Se;
  se = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  Se = (e2) => {
    d = e2, le = e2.CacheProvider, ue = e2.ThemeContext, de = e2.ThemeProvider, fe = e2.__unsafe_useEmotionCache, pe = e2.useTheme, me = e2.withEmotionCache, he = e2.withTheme, ge = e2.ClassNames, _e = e2.Global, ve = e2.createElement, ye = e2.css, be = e2.jsx, xe = e2.keyframes, ce = e2.default ?? e2;
  };
  a(u.share, {
    canonical: `default:@emotion/react`,
    aliases: [
      `@emotion/react`
    ]
  }, Se);
  var d = n(u.share, {
    canonical: `default:@emotion/react`,
    aliases: [
      `@emotion/react`
    ]
  });
  d === void 0 ? oe(ae.then(() => {
    if (d = n(u.share, {
      canonical: `default:@emotion/react`,
      aliases: [
        `@emotion/react`
      ]
    }), d !== void 0) Se(d);
    else return t(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__prebuild___mf_0_emotion_mf_1_react__prebuild__-JxmqK20_.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      d = se(e2), s(u.share, {
        canonical: `default:@emotion/react`,
        aliases: [
          `@emotion/react`
        ]
      }, d, `vis2CollectionWidget`);
    }), __vite__mapDeps([0,1]), import.meta.url);
  })) : Se(d);
  let we, Te;
  Ce = e({
    Accordion: () => je,
    AccordionActions: () => Me,
    AccordionDetails: () => Ne,
    AccordionSummary: () => Pe,
    Alert: () => Fe,
    AlertTitle: () => Ie,
    AppBar: () => Le,
    Autocomplete: () => Re,
    Avatar: () => ze,
    AvatarGroup: () => Be,
    Backdrop: () => Ve,
    Badge: () => He,
    BottomNavigation: () => Ue,
    BottomNavigationAction: () => We,
    Box: () => Ge,
    Breadcrumbs: () => Ke,
    Button: () => qe,
    ButtonBase: () => Je,
    ButtonGroup: () => Ye,
    ButtonGroupButtonContext: () => qi,
    ButtonGroupContext: () => Ki,
    Card: () => Xe,
    CardActionArea: () => Ze,
    CardActions: () => Qe,
    CardContent: () => $e,
    CardHeader: () => et,
    CardMedia: () => tt,
    Checkbox: () => nt,
    Chip: () => rt,
    CircularProgress: () => it,
    ClickAwayListener: () => at,
    Collapse: () => ot,
    Container: () => st,
    CssBaseline: () => ct,
    CssVarsProvider: () => Lr,
    Dialog: () => ut,
    DialogActions: () => dt,
    DialogContent: () => m,
    DialogContentText: () => h,
    DialogTitle: () => g,
    Divider: () => _,
    Drawer: () => ft,
    Experimental_CssVarsProvider: () => Br,
    Fab: () => pt,
    Fade: () => mt,
    FilledInput: () => ht,
    FormControl: () => v,
    FormControlLabel: () => y,
    FormGroup: () => gt,
    FormHelperText: () => _t,
    FormLabel: () => vt,
    FormLabelRoot: () => Ga,
    GlobalStyles: () => zn,
    Grid: () => yt,
    Grow: () => bt,
    Icon: () => xt,
    IconButton: () => b,
    ImageList: () => St,
    ImageListItem: () => Ct,
    ImageListItemBar: () => wt,
    InitColorSchemeScript: () => Wn,
    Input: () => Tt,
    InputAdornment: () => x,
    InputBase: () => Et,
    InputLabel: () => S,
    LinearProgress: () => Dt,
    Link: () => C,
    List: () => w,
    ListItem: () => T,
    ListItemAvatar: () => Ot,
    ListItemButton: () => E,
    ListItemIcon: () => D,
    ListItemSecondaryAction: () => kt,
    ListItemText: () => O,
    ListSubheader: () => k,
    Menu: () => A,
    MenuItem: () => At,
    MenuList: () => jt,
    MobileStepper: () => Mt,
    Modal: () => Nt,
    ModalManager: () => Bo,
    NativeSelect: () => Pt,
    NoSsr: () => Ft,
    OutlinedInput: () => It,
    Pagination: () => Lt,
    PaginationItem: () => Rt,
    Paper: () => zt,
    Popover: () => Bt,
    PopoverPaper: () => rs,
    PopoverRoot: () => ns,
    Popper: () => Vt,
    Portal: () => Ht,
    Radio: () => Ut,
    RadioGroup: () => Wt,
    Rating: () => Gt,
    ScopedCssBaseline: () => Kt,
    Select: () => qt,
    SelectFocusSourceProvider: () => xs,
    Skeleton: () => Jt,
    Slide: () => Yt,
    Slider: () => Xt,
    SliderMark: () => As,
    SliderMarkLabel: () => js,
    SliderRail: () => Ds,
    SliderRoot: () => Es,
    SliderThumb: () => ks,
    SliderTrack: () => Os,
    SliderValueLabel: () => Ms,
    Snackbar: () => Zt,
    SnackbarContent: () => Qt,
    SpeedDial: () => $t,
    SpeedDialAction: () => en,
    SpeedDialIcon: () => tn,
    Stack: () => nn,
    Step: () => rn,
    StepButton: () => an,
    StepConnector: () => on,
    StepContent: () => sn,
    StepContext: () => qs,
    StepIcon: () => cn,
    StepLabel: () => ln,
    Stepper: () => un,
    StepperContext: () => sc,
    StyledEngineProvider: () => Cr,
    SvgIcon: () => dn,
    SwipeableDrawer: () => fn,
    Switch: () => pn,
    THEME_ID: () => Kn,
    Tab: () => mn,
    TabScrollButton: () => En,
    Table: () => hn,
    TableBody: () => gn,
    TableCell: () => _n,
    TableContainer: () => vn,
    TableFooter: () => yn,
    TableHead: () => bn,
    TablePagination: () => xn,
    TablePaginationActions: () => Sn,
    TableRow: () => Cn,
    TableSortLabel: () => wn,
    Tabs: () => Tn,
    TextField: () => Dn,
    TextareaAutosize: () => On,
    ThemeProvider: () => Sr,
    ToggleButton: () => kn,
    ToggleButtonGroup: () => An,
    Toolbar: () => jn,
    Tooltip: () => Mn,
    Typography: () => Nn,
    Unstable_TrapFocus: () => Un,
    Zoom: () => Ln,
    __moduleExports: () => j,
    accordionActionsClasses: () => li,
    accordionClasses: () => si,
    accordionDetailsClasses: () => di,
    accordionSummaryClasses: () => pi,
    adaptV4Theme: () => qn,
    alertClasses: () => hi,
    alertTitleClasses: () => _i,
    alpha: () => nr,
    appBarClasses: () => yi,
    areEqualValues: () => ys,
    autocompleteClasses: () => Si,
    avatarClasses: () => wi,
    avatarGroupClasses: () => Ei,
    backdropClasses: () => Oi,
    badgeClasses: () => Ai,
    bottomNavigationActionClasses: () => Pi,
    bottomNavigationClasses: () => Mi,
    boxClasses: () => Ii,
    breadcrumbsClasses: () => Li,
    buttonBaseClasses: () => Vi,
    buttonClasses: () => zi,
    buttonGroupClasses: () => Gi,
    capitalize: () => Hr,
    cardActionAreaClasses: () => Zi,
    cardActionsClasses: () => $i,
    cardClasses: () => Yi,
    cardContentClasses: () => ta,
    cardHeaderClasses: () => ra,
    cardMediaClasses: () => aa,
    checkboxClasses: () => sa,
    chipClasses: () => la,
    circularProgressClasses: () => da,
    collapseClasses: () => pa,
    colors: () => Ae,
    containerClasses: () => ha,
    createChainedFunction: () => Ur,
    createColorScheme: () => vr,
    createFilterOptions: () => xi,
    createStyles: () => dr,
    createSvgIcon: () => Wr,
    createTheme: () => cr,
    createTransitions: () => hr,
    css: () => ar,
    darkScrollbar: () => lt,
    darken: () => rr,
    debounce: () => Gr,
    decomposeColor: () => Zn,
    default: () => ke,
    deprecatedPropType: () => Kr,
    dialogActionsClasses: () => ya,
    dialogClasses: () => _a,
    dialogContentClasses: () => xa,
    dialogContentTextClasses: () => Ca,
    dialogTitleClasses: () => Ta,
    dividerClasses: () => Da,
    drawerClasses: () => ka,
    duration: () => gr,
    easing: () => _r,
    emphasize: () => tr,
    enhanceHighContrast: () => lr,
    experimental_extendTheme: () => Or,
    experimental_sx: () => Gn,
    extendTheme: () => Dr,
    fabClasses: () => ja,
    filledInputClasses: () => Na,
    formControlClasses: () => Ia,
    formControlLabelClasses: () => Ra,
    formGroupClasses: () => Ba,
    formHelperTextClasses: () => Ha,
    formLabelClasses: () => Wa,
    generateUtilityClass: () => Vn,
    generateUtilityClasses: () => Hn,
    getAccordionActionsUtilityClass: () => ui,
    getAccordionDetailsUtilityClass: () => fi,
    getAccordionSummaryUtilityClass: () => mi,
    getAccordionUtilityClass: () => ci,
    getActiveElement: () => Jr,
    getAlertTitleUtilityClass: () => vi,
    getAlertUtilityClass: () => gi,
    getAppBarUtilityClass: () => bi,
    getAutocompleteUtilityClass: () => Ci,
    getAvatarGroupUtilityClass: () => Di,
    getAvatarUtilityClass: () => Ti,
    getBackdropUtilityClass: () => ki,
    getBadgeUtilityClass: () => ji,
    getBottomNavigationActionUtilityClass: () => Fi,
    getBottomNavigationUtilityClass: () => Ni,
    getBreadcrumbsUtilityClass: () => Ri,
    getButtonBaseUtilityClass: () => Ui,
    getButtonGroupUtilityClass: () => Ji,
    getButtonUtilityClass: () => Bi,
    getCardActionAreaUtilityClass: () => Qi,
    getCardActionsUtilityClass: () => ea,
    getCardContentUtilityClass: () => na,
    getCardHeaderUtilityClass: () => ia,
    getCardMediaUtilityClass: () => oa,
    getCardUtilityClass: () => Xi,
    getCheckboxUtilityClass: () => ca,
    getChipUtilityClass: () => ua,
    getCircularProgressUtilityClass: () => fa,
    getCollapseUtilityClass: () => ma,
    getContainerUtilityClass: () => ga,
    getContrastRatio: () => $n,
    getDialogActionsUtilityClass: () => ba,
    getDialogContentTextUtilityClass: () => wa,
    getDialogContentUtilityClass: () => Sa,
    getDialogTitleUtilityClass: () => Ea,
    getDialogUtilityClass: () => va,
    getDividerUtilityClass: () => Oa,
    getDrawerUtilityClass: () => Aa,
    getFabUtilityClass: () => Ma,
    getFilledInputUtilityClass: () => Pa,
    getFormControlLabelUtilityClasses: () => za,
    getFormControlUtilityClasses: () => La,
    getFormGroupUtilityClass: () => Va,
    getFormHelperTextUtilityClasses: () => Ua,
    getFormLabelUtilityClasses: () => Ka,
    getGridUtilityClass: () => Ja,
    getIconButtonUtilityClass: () => Qa,
    getIconUtilityClass: () => Xa,
    getImageListItemBarUtilityClass: () => io,
    getImageListItemUtilityClass: () => no,
    getImageListUtilityClass: () => eo,
    getInitColorSchemeScript: () => zr,
    getInputAdornmentUtilityClass: () => co,
    getInputBaseUtilityClass: () => uo,
    getInputLabelUtilityClasses: () => po,
    getInputUtilityClass: () => oo,
    getLinearProgressUtilityClass: () => ho,
    getLinkUtilityClass: () => _o,
    getListItemAvatarUtilityClass: () => Co,
    getListItemButtonUtilityClass: () => To,
    getListItemIconUtilityClass: () => Do,
    getListItemSecondaryActionClassesUtilityClass: () => ko,
    getListItemTextUtilityClass: () => jo,
    getListItemUtilityClass: () => xo,
    getListSubheaderUtilityClass: () => No,
    getListUtilityClass: () => yo,
    getLuminance: () => er,
    getMenuItemUtilityClass: () => Lo,
    getMenuUtilityClass: () => Fo,
    getMobileStepperUtilityClass: () => zo,
    getModalUtilityClass: () => Ho,
    getNativeSelectUtilityClasses: () => Wo,
    getOffsetLeft: () => ts,
    getOffsetTop: () => es,
    getOpenInteractionType: () => _s,
    getOutlinedInputUtilityClass: () => Ko,
    getOverlayAlpha: () => kr,
    getPaginationItemUtilityClass: () => Xo,
    getPaginationUtilityClass: () => Jo,
    getPaperUtilityClass: () => Qo,
    getPopoverUtilityClass: () => is,
    getPopperUtilityClass: () => os,
    getRadioGroupUtilityClass: () => ds,
    getRadioUtilityClass: () => cs,
    getRatingUtilityClass: () => ps,
    getScopedCssBaselineUtilityClass: () => hs,
    getSelectUtilityClasses: () => Ss,
    getSkeletonUtilityClass: () => ws,
    getSliderUtilityClass: () => Ns,
    getSnackbarContentUtilityClass: () => Ls,
    getSnackbarUtilityClass: () => Fs,
    getSpeedDialActionUtilityClass: () => Vs,
    getSpeedDialIconUtilityClass: () => Us,
    getSpeedDialUtilityClass: () => zs,
    getStackUtilityClass: () => Gs,
    getStepButtonUtilityClass: () => Zs,
    getStepConnectorUtilityClass: () => $s,
    getStepContentUtilityClass: () => tc,
    getStepIconUtilityClass: () => rc,
    getStepLabelUtilityClass: () => ac,
    getStepUtilityClass: () => Js,
    getStepperUtilityClass: () => cc,
    getSvgIconUtilityClass: () => dc,
    getSwitchUtilityClass: () => pc,
    getTabScrollButtonUtilityClass: () => zc,
    getTabUtilityClass: () => hc,
    getTableBodyUtilityClass: () => yc,
    getTableCellUtilityClass: () => xc,
    getTableContainerUtilityClass: () => Cc,
    getTableFooterUtilityClass: () => Tc,
    getTableHeadUtilityClass: () => Dc,
    getTablePaginationActionsUtilityClass: () => jc,
    getTablePaginationUtilityClass: () => kc,
    getTableRowUtilityClass: () => Nc,
    getTableSortLabelUtilityClass: () => Fc,
    getTableUtilityClass: () => _c,
    getTabsUtilityClass: () => Lc,
    getTextFieldUtilityClass: () => Vc,
    getToggleButtonGroupUtilityClass: () => Gc,
    getToggleButtonUtilityClass: () => Uc,
    getToolbarUtilityClass: () => qc,
    getTooltipUtilityClass: () => Yc,
    getTouchRippleUtilityClass: () => Wi,
    getTypographyUtilityClass: () => Zc,
    gridClasses: () => qa,
    hexToRgb: () => Jn,
    hslToRgb: () => Xn,
    iconButtonClasses: () => Za,
    iconClasses: () => Ya,
    imageListClasses: () => $a,
    imageListItemBarClasses: () => ro,
    imageListItemClasses: () => to,
    inputAdornmentClasses: () => so,
    inputBaseClasses: () => lo,
    inputClasses: () => ao,
    inputLabelClasses: () => fo,
    isEmpty: () => vs,
    isMuiElement: () => qr,
    keyframes: () => or,
    lighten: () => ir,
    linearProgressClasses: () => mo,
    linkClasses: () => go,
    listClasses: () => vo,
    listItemAvatarClasses: () => So,
    listItemButtonClasses: () => wo,
    listItemClasses: () => bo,
    listItemIconClasses: () => Eo,
    listItemSecondaryActionClasses: () => Oo,
    listItemTextClasses: () => Ao,
    listSubheaderClasses: () => Mo,
    major: () => $c,
    makeStyles: () => wr,
    menuClasses: () => Po,
    menuItemClasses: () => Io,
    mergeSlotProps: () => oi,
    minor: () => el,
    mobileStepperClasses: () => Ro,
    modalClasses: () => Vo,
    nativeSelectClasses: () => Uo,
    outlinedInputClasses: () => Go,
    ownerDocument: () => Xr,
    ownerWindow: () => Zr,
    paginationClasses: () => qo,
    paginationItemClasses: () => Yo,
    paperClasses: () => Zo,
    patch: () => tl,
    popoverClasses: () => $o,
    popperClasses: () => as,
    prerelease: () => nl,
    private_applyChildrenFocusVisible: () => Fr,
    private_applyInsetFocusVisible: () => Pr,
    private_createMixins: () => Mr,
    private_createTypography: () => jr,
    private_excludeVariablesFromRoot: () => Nr,
    private_outsetFocusRing: () => Ir,
    radioClasses: () => ss,
    radioGroupClasses: () => us,
    ratingClasses: () => fs,
    recomposeColor: () => Qn,
    requirePropFactory: () => Qr,
    responsiveFontSizes: () => mr,
    rgbToHex: () => Yn,
    scopedCssBaselineClasses: () => ms,
    selectClasses: () => gs,
    setRef: () => $r,
    shouldSkipGeneratingVar: () => Ar,
    skeletonClasses: () => Cs,
    sliderClasses: () => Ts,
    snackbarClasses: () => Ps,
    snackbarContentClasses: () => Is,
    speedDialActionClasses: () => Bs,
    speedDialClasses: () => Rs,
    speedDialIconClasses: () => Hs,
    stackClasses: () => Ws,
    stepButtonClasses: () => Xs,
    stepClasses: () => Ks,
    stepConnectorClasses: () => Qs,
    stepContentClasses: () => ec,
    stepIconClasses: () => nc,
    stepLabelClasses: () => ic,
    stepperClasses: () => oc,
    styled: () => xr,
    svgIconClasses: () => uc,
    switchClasses: () => fc,
    tabClasses: () => mc,
    tabScrollButtonClasses: () => Rc,
    tableBodyClasses: () => vc,
    tableCellClasses: () => bc,
    tableClasses: () => gc,
    tableContainerClasses: () => Sc,
    tableFooterClasses: () => wc,
    tableHeadClasses: () => Ec,
    tablePaginationActionsClasses: () => Ac,
    tablePaginationClasses: () => Oc,
    tableRowClasses: () => Mc,
    tableSortLabelClasses: () => Pc,
    tabsClasses: () => Ic,
    textFieldClasses: () => Bc,
    toggleButtonClasses: () => Hc,
    toggleButtonGroupClasses: () => Wc,
    toolbarClasses: () => Kc,
    tooltipClasses: () => Jc,
    touchRippleClasses: () => Hi,
    typographyClasses: () => Xc,
    unstable_ClassNameGenerator: () => Vr,
    unstable_composeClasses: () => Bn,
    unstable_createBreakpoints: () => sr,
    unstable_createMuiStrictModeTheme: () => ur,
    unstable_getUnit: () => fr,
    unstable_memoTheme: () => Yr,
    unstable_toUnitless: () => pr,
    unstable_useEnhancedEffect: () => ei,
    unstable_useId: () => ti,
    unsupportedProp: () => ni,
    useAutocomplete: () => Rn,
    useColorScheme: () => Rr,
    useControlled: () => ri,
    useEventCallback: () => ii,
    useForkRef: () => ai,
    useFormControl: () => Fa,
    useMediaQuery: () => Pn,
    usePagination: () => Fn,
    useRadioGroup: () => ls,
    useScrollTrigger: () => In,
    useSelectFocusSource: () => bs,
    useStepContext: () => Ys,
    useStepperContext: () => lc,
    useTheme: () => yr,
    useThemeProps: () => br,
    version: () => Qc,
    withStyles: () => Tr,
    withTheme: () => Er
  });
  we = `__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__mf_v__runtimeInit__mf_v__.js__`;
  Te = globalThis[we];
  if (!Te) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    Te = globalThis[we] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var Ee = Te.initPromise, f = `__mf_module_cache__`;
  globalThis[f] ||= {
    share: {},
    remote: {}
  }, globalThis[f].share ||= {}, globalThis[f].remote ||= {};
  var p = globalThis[f], De = (e2) => {
    let t2 = p.pendingShareLoads ||= [];
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(p.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    p.share[t2] === void 0 && (p.share[t2] = p.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    p.share[t2] === void 0 && (p.share[t2] = p.share[e2]);
  }
  let Oe, ke, Ae, Me, Ie, Le, Re, Be, Ve, He, Ue, We, Ke, Ye, Ze, Qe, $e, et, tt, at, ot, st, ct, lt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, jt, Mt, Pt, Ft, It, Lt, Rt, Vt, Ht, Wt, Gt, Kt, Jt, Yt, Qt, $t, en, tn, rn, an, on, sn, cn, ln, un, fn, mn, yn, Sn, Tn, En, On, Fn, In, Ln, Rn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, rr, ir, ar, or, sr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, br, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr, Fr, Ir, Lr, Rr, zr, Br, Vr, Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi, $i, ea, ta, na, ra, ia, aa, oa, sa, ca, la, ua, da, fa, pa, ma, ha, ga, _a, va, ya, ba, xa, Sa, Ca, wa, Ta, Ea, Da, Oa, ka, Aa, ja, Ma, Na, Pa, Fa, Ia, La, Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa, Za, Qa, $a, eo, to, no, ro, io, ao, oo, so, co, lo, uo, fo, po, mo, ho, go, _o, vo, yo, bo, xo, So, Co, wo, To, Eo, Do, Oo, ko, Ao, jo, Mo, No, Po, Fo, Io, Lo, Ro, zo, Bo, Vo, Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns, rs, is, as, os, ss, cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As, Ms, Ns, Ps, Fs, Is, Ls, Rs, zs, Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs, $s, ec, tc, nc, rc, ic, ac, oc, sc, cc, lc, uc, dc, fc, pc, mc, hc, gc, _c, vc, yc, bc, xc, Sc, Cc, wc, Tc, Ec, Dc, Oc, kc, Ac, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl;
  Oe = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  rl = (e2) => {
    j = e2, Ae = e2.colors, je = e2.Accordion, Me = e2.AccordionActions, Ne = e2.AccordionDetails, Pe = e2.AccordionSummary, Fe = e2.Alert, Ie = e2.AlertTitle, Le = e2.AppBar, Re = e2.Autocomplete, ze = e2.Avatar, Be = e2.AvatarGroup, Ve = e2.Backdrop, He = e2.Badge, Ue = e2.BottomNavigation, We = e2.BottomNavigationAction, Ge = e2.Box, Ke = e2.Breadcrumbs, qe = e2.Button, Je = e2.ButtonBase, Ye = e2.ButtonGroup, Xe = e2.Card, Ze = e2.CardActionArea, Qe = e2.CardActions, $e = e2.CardContent, et = e2.CardHeader, tt = e2.CardMedia, nt = e2.Checkbox, rt = e2.Chip, it = e2.CircularProgress, at = e2.ClickAwayListener, ot = e2.Collapse, st = e2.Container, ct = e2.CssBaseline, lt = e2.darkScrollbar, ut = e2.Dialog, dt = e2.DialogActions, m = e2.DialogContent, h = e2.DialogContentText, g = e2.DialogTitle, _ = e2.Divider, ft = e2.Drawer, pt = e2.Fab, mt = e2.Fade, ht = e2.FilledInput, v = e2.FormControl, y = e2.FormControlLabel, gt = e2.FormGroup, _t = e2.FormHelperText, vt = e2.FormLabel, yt = e2.Grid, bt = e2.Grow, xt = e2.Icon, b = e2.IconButton, St = e2.ImageList, Ct = e2.ImageListItem, wt = e2.ImageListItemBar, Tt = e2.Input, x = e2.InputAdornment, Et = e2.InputBase, S = e2.InputLabel, Dt = e2.LinearProgress, C = e2.Link, w = e2.List, T = e2.ListItem, Ot = e2.ListItemAvatar, E = e2.ListItemButton, D = e2.ListItemIcon, kt = e2.ListItemSecondaryAction, O = e2.ListItemText, k = e2.ListSubheader, A = e2.Menu, At = e2.MenuItem, jt = e2.MenuList, Mt = e2.MobileStepper, Nt = e2.Modal, Pt = e2.NativeSelect, Ft = e2.NoSsr, It = e2.OutlinedInput, Lt = e2.Pagination, Rt = e2.PaginationItem, zt = e2.Paper, Bt = e2.Popover, Vt = e2.Popper, Ht = e2.Portal, Ut = e2.Radio, Wt = e2.RadioGroup, Gt = e2.Rating, Kt = e2.ScopedCssBaseline, qt = e2.Select, Jt = e2.Skeleton, Yt = e2.Slide, Xt = e2.Slider, Zt = e2.Snackbar, Qt = e2.SnackbarContent, $t = e2.SpeedDial, en = e2.SpeedDialAction, tn = e2.SpeedDialIcon, nn = e2.Stack, rn = e2.Step, an = e2.StepButton, on = e2.StepConnector, sn = e2.StepContent, cn = e2.StepIcon, ln = e2.StepLabel, un = e2.Stepper, dn = e2.SvgIcon, fn = e2.SwipeableDrawer, pn = e2.Switch, mn = e2.Tab, hn = e2.Table, gn = e2.TableBody, _n = e2.TableCell, vn = e2.TableContainer, yn = e2.TableFooter, bn = e2.TableHead, xn = e2.TablePagination, Sn = e2.TablePaginationActions, Cn = e2.TableRow, wn = e2.TableSortLabel, Tn = e2.Tabs, En = e2.TabScrollButton, Dn = e2.TextField, On = e2.TextareaAutosize, kn = e2.ToggleButton, An = e2.ToggleButtonGroup, jn = e2.Toolbar, Mn = e2.Tooltip, Nn = e2.Typography, Pn = e2.useMediaQuery, Fn = e2.usePagination, In = e2.useScrollTrigger, Ln = e2.Zoom, Rn = e2.useAutocomplete, zn = e2.GlobalStyles, Bn = e2.unstable_composeClasses, Vn = e2.generateUtilityClass, Hn = e2.generateUtilityClasses, Un = e2.Unstable_TrapFocus, Wn = e2.InitColorSchemeScript, Gn = e2.experimental_sx, Kn = e2.THEME_ID, qn = e2.adaptV4Theme, Jn = e2.hexToRgb, Yn = e2.rgbToHex, Xn = e2.hslToRgb, Zn = e2.decomposeColor, Qn = e2.recomposeColor, $n = e2.getContrastRatio, er = e2.getLuminance, tr = e2.emphasize, nr = e2.alpha, rr = e2.darken, ir = e2.lighten, ar = e2.css, or = e2.keyframes, sr = e2.unstable_createBreakpoints, cr = e2.createTheme, lr = e2.enhanceHighContrast, ur = e2.unstable_createMuiStrictModeTheme, dr = e2.createStyles, fr = e2.unstable_getUnit, pr = e2.unstable_toUnitless, mr = e2.responsiveFontSizes, hr = e2.createTransitions, gr = e2.duration, _r = e2.easing, vr = e2.createColorScheme, yr = e2.useTheme, br = e2.useThemeProps, xr = e2.styled, Sr = e2.ThemeProvider, Cr = e2.StyledEngineProvider, wr = e2.makeStyles, Tr = e2.withStyles, Er = e2.withTheme, Dr = e2.extendTheme, Or = e2.experimental_extendTheme, kr = e2.getOverlayAlpha, Ar = e2.shouldSkipGeneratingVar, jr = e2.private_createTypography, Mr = e2.private_createMixins, Nr = e2.private_excludeVariablesFromRoot, Pr = e2.private_applyInsetFocusVisible, Fr = e2.private_applyChildrenFocusVisible, Ir = e2.private_outsetFocusRing, Lr = e2.CssVarsProvider, Rr = e2.useColorScheme, zr = e2.getInitColorSchemeScript, Br = e2.Experimental_CssVarsProvider, Vr = e2.unstable_ClassNameGenerator, Hr = e2.capitalize, Ur = e2.createChainedFunction, Wr = e2.createSvgIcon, Gr = e2.debounce, Kr = e2.deprecatedPropType, qr = e2.isMuiElement, Jr = e2.getActiveElement, Yr = e2.unstable_memoTheme, Xr = e2.ownerDocument, Zr = e2.ownerWindow, Qr = e2.requirePropFactory, $r = e2.setRef, ei = e2.unstable_useEnhancedEffect, ti = e2.unstable_useId, ni = e2.unsupportedProp, ri = e2.useControlled, ii = e2.useEventCallback, ai = e2.useForkRef, oi = e2.mergeSlotProps, si = e2.accordionClasses, ci = e2.getAccordionUtilityClass, li = e2.accordionActionsClasses, ui = e2.getAccordionActionsUtilityClass, di = e2.accordionDetailsClasses, fi = e2.getAccordionDetailsUtilityClass, pi = e2.accordionSummaryClasses, mi = e2.getAccordionSummaryUtilityClass, hi = e2.alertClasses, gi = e2.getAlertUtilityClass, _i = e2.alertTitleClasses, vi = e2.getAlertTitleUtilityClass, yi = e2.appBarClasses, bi = e2.getAppBarUtilityClass, xi = e2.createFilterOptions, Si = e2.autocompleteClasses, Ci = e2.getAutocompleteUtilityClass, wi = e2.avatarClasses, Ti = e2.getAvatarUtilityClass, Ei = e2.avatarGroupClasses, Di = e2.getAvatarGroupUtilityClass, Oi = e2.backdropClasses, ki = e2.getBackdropUtilityClass, Ai = e2.badgeClasses, ji = e2.getBadgeUtilityClass, Mi = e2.bottomNavigationClasses, Ni = e2.getBottomNavigationUtilityClass, Pi = e2.bottomNavigationActionClasses, Fi = e2.getBottomNavigationActionUtilityClass, Ii = e2.boxClasses, Li = e2.breadcrumbsClasses, Ri = e2.getBreadcrumbsUtilityClass, zi = e2.buttonClasses, Bi = e2.getButtonUtilityClass, Vi = e2.buttonBaseClasses, Hi = e2.touchRippleClasses, Ui = e2.getButtonBaseUtilityClass, Wi = e2.getTouchRippleUtilityClass, Gi = e2.buttonGroupClasses, Ki = e2.ButtonGroupContext, qi = e2.ButtonGroupButtonContext, Ji = e2.getButtonGroupUtilityClass, Yi = e2.cardClasses, Xi = e2.getCardUtilityClass, Zi = e2.cardActionAreaClasses, Qi = e2.getCardActionAreaUtilityClass, $i = e2.cardActionsClasses, ea = e2.getCardActionsUtilityClass, ta = e2.cardContentClasses, na = e2.getCardContentUtilityClass, ra = e2.cardHeaderClasses, ia = e2.getCardHeaderUtilityClass, aa = e2.cardMediaClasses, oa = e2.getCardMediaUtilityClass, sa = e2.checkboxClasses, ca = e2.getCheckboxUtilityClass, la = e2.chipClasses, ua = e2.getChipUtilityClass, da = e2.circularProgressClasses, fa = e2.getCircularProgressUtilityClass, pa = e2.collapseClasses, ma = e2.getCollapseUtilityClass, ha = e2.containerClasses, ga = e2.getContainerUtilityClass, _a = e2.dialogClasses, va = e2.getDialogUtilityClass, ya = e2.dialogActionsClasses, ba = e2.getDialogActionsUtilityClass, xa = e2.dialogContentClasses, Sa = e2.getDialogContentUtilityClass, Ca = e2.dialogContentTextClasses, wa = e2.getDialogContentTextUtilityClass, Ta = e2.dialogTitleClasses, Ea = e2.getDialogTitleUtilityClass, Da = e2.dividerClasses, Oa = e2.getDividerUtilityClass, ka = e2.drawerClasses, Aa = e2.getDrawerUtilityClass, ja = e2.fabClasses, Ma = e2.getFabUtilityClass, Na = e2.filledInputClasses, Pa = e2.getFilledInputUtilityClass, Fa = e2.useFormControl, Ia = e2.formControlClasses, La = e2.getFormControlUtilityClasses, Ra = e2.formControlLabelClasses, za = e2.getFormControlLabelUtilityClasses, Ba = e2.formGroupClasses, Va = e2.getFormGroupUtilityClass, Ha = e2.formHelperTextClasses, Ua = e2.getFormHelperTextUtilityClasses, Wa = e2.formLabelClasses, Ga = e2.FormLabelRoot, Ka = e2.getFormLabelUtilityClasses, qa = e2.gridClasses, Ja = e2.getGridUtilityClass, Ya = e2.iconClasses, Xa = e2.getIconUtilityClass, Za = e2.iconButtonClasses, Qa = e2.getIconButtonUtilityClass, $a = e2.imageListClasses, eo = e2.getImageListUtilityClass, to = e2.imageListItemClasses, no = e2.getImageListItemUtilityClass, ro = e2.imageListItemBarClasses, io = e2.getImageListItemBarUtilityClass, ao = e2.inputClasses, oo = e2.getInputUtilityClass, so = e2.inputAdornmentClasses, co = e2.getInputAdornmentUtilityClass, lo = e2.inputBaseClasses, uo = e2.getInputBaseUtilityClass, fo = e2.inputLabelClasses, po = e2.getInputLabelUtilityClasses, mo = e2.linearProgressClasses, ho = e2.getLinearProgressUtilityClass, go = e2.linkClasses, _o = e2.getLinkUtilityClass, vo = e2.listClasses, yo = e2.getListUtilityClass, bo = e2.listItemClasses, xo = e2.getListItemUtilityClass, So = e2.listItemAvatarClasses, Co = e2.getListItemAvatarUtilityClass, wo = e2.listItemButtonClasses, To = e2.getListItemButtonUtilityClass, Eo = e2.listItemIconClasses, Do = e2.getListItemIconUtilityClass, Oo = e2.listItemSecondaryActionClasses, ko = e2.getListItemSecondaryActionClassesUtilityClass, Ao = e2.listItemTextClasses, jo = e2.getListItemTextUtilityClass, Mo = e2.listSubheaderClasses, No = e2.getListSubheaderUtilityClass, Po = e2.menuClasses, Fo = e2.getMenuUtilityClass, Io = e2.menuItemClasses, Lo = e2.getMenuItemUtilityClass, Ro = e2.mobileStepperClasses, zo = e2.getMobileStepperUtilityClass, Bo = e2.ModalManager, Vo = e2.modalClasses, Ho = e2.getModalUtilityClass, Uo = e2.nativeSelectClasses, Wo = e2.getNativeSelectUtilityClasses, Go = e2.outlinedInputClasses, Ko = e2.getOutlinedInputUtilityClass, qo = e2.paginationClasses, Jo = e2.getPaginationUtilityClass, Yo = e2.paginationItemClasses, Xo = e2.getPaginationItemUtilityClass, Zo = e2.paperClasses, Qo = e2.getPaperUtilityClass, $o = e2.popoverClasses, es = e2.getOffsetTop, ts = e2.getOffsetLeft, ns = e2.PopoverRoot, rs = e2.PopoverPaper, is = e2.getPopoverUtilityClass, as = e2.popperClasses, os = e2.getPopperUtilityClass, ss = e2.radioClasses, cs = e2.getRadioUtilityClass, ls = e2.useRadioGroup, us = e2.radioGroupClasses, ds = e2.getRadioGroupUtilityClass, fs = e2.ratingClasses, ps = e2.getRatingUtilityClass, ms = e2.scopedCssBaselineClasses, hs = e2.getScopedCssBaselineUtilityClass, gs = e2.selectClasses, _s = e2.getOpenInteractionType, vs = e2.isEmpty, ys = e2.areEqualValues, bs = e2.useSelectFocusSource, xs = e2.SelectFocusSourceProvider, Ss = e2.getSelectUtilityClasses, Cs = e2.skeletonClasses, ws = e2.getSkeletonUtilityClass, Ts = e2.sliderClasses, Es = e2.SliderRoot, Ds = e2.SliderRail, Os = e2.SliderTrack, ks = e2.SliderThumb, As = e2.SliderMark, js = e2.SliderMarkLabel, Ms = e2.SliderValueLabel, Ns = e2.getSliderUtilityClass, Ps = e2.snackbarClasses, Fs = e2.getSnackbarUtilityClass, Is = e2.snackbarContentClasses, Ls = e2.getSnackbarContentUtilityClass, Rs = e2.speedDialClasses, zs = e2.getSpeedDialUtilityClass, Bs = e2.speedDialActionClasses, Vs = e2.getSpeedDialActionUtilityClass, Hs = e2.speedDialIconClasses, Us = e2.getSpeedDialIconUtilityClass, Ws = e2.stackClasses, Gs = e2.getStackUtilityClass, Ks = e2.stepClasses, qs = e2.StepContext, Js = e2.getStepUtilityClass, Ys = e2.useStepContext, Xs = e2.stepButtonClasses, Zs = e2.getStepButtonUtilityClass, Qs = e2.stepConnectorClasses, $s = e2.getStepConnectorUtilityClass, ec = e2.stepContentClasses, tc = e2.getStepContentUtilityClass, nc = e2.stepIconClasses, rc = e2.getStepIconUtilityClass, ic = e2.stepLabelClasses, ac = e2.getStepLabelUtilityClass, oc = e2.stepperClasses, sc = e2.StepperContext, cc = e2.getStepperUtilityClass, lc = e2.useStepperContext, uc = e2.svgIconClasses, dc = e2.getSvgIconUtilityClass, fc = e2.switchClasses, pc = e2.getSwitchUtilityClass, mc = e2.tabClasses, hc = e2.getTabUtilityClass, gc = e2.tableClasses, _c = e2.getTableUtilityClass, vc = e2.tableBodyClasses, yc = e2.getTableBodyUtilityClass, bc = e2.tableCellClasses, xc = e2.getTableCellUtilityClass, Sc = e2.tableContainerClasses, Cc = e2.getTableContainerUtilityClass, wc = e2.tableFooterClasses, Tc = e2.getTableFooterUtilityClass, Ec = e2.tableHeadClasses, Dc = e2.getTableHeadUtilityClass, Oc = e2.tablePaginationClasses, kc = e2.getTablePaginationUtilityClass, Ac = e2.tablePaginationActionsClasses, jc = e2.getTablePaginationActionsUtilityClass, Mc = e2.tableRowClasses, Nc = e2.getTableRowUtilityClass, Pc = e2.tableSortLabelClasses, Fc = e2.getTableSortLabelUtilityClass, Ic = e2.tabsClasses, Lc = e2.getTabsUtilityClass, Rc = e2.tabScrollButtonClasses, zc = e2.getTabScrollButtonUtilityClass, Bc = e2.textFieldClasses, Vc = e2.getTextFieldUtilityClass, Hc = e2.toggleButtonClasses, Uc = e2.getToggleButtonUtilityClass, Wc = e2.toggleButtonGroupClasses, Gc = e2.getToggleButtonGroupUtilityClass, Kc = e2.toolbarClasses, qc = e2.getToolbarUtilityClass, Jc = e2.tooltipClasses, Yc = e2.getTooltipUtilityClass, Xc = e2.typographyClasses, Zc = e2.getTypographyUtilityClass, Qc = e2.version, $c = e2.major, el = e2.minor, tl = e2.patch, nl = e2.prerelease, ke = e2.default ?? e2;
  };
  a(p.share, {
    canonical: `default:@mui/material`,
    aliases: [
      `@mui/material`
    ]
  }, rl);
  var j = n(p.share, {
    canonical: `default:@mui/material`,
    aliases: [
      `@mui/material`
    ]
  });
  j === void 0 ? De(Ee.then(() => {
    if (j = n(p.share, {
      canonical: `default:@mui/material`,
      aliases: [
        `@mui/material`
      ]
    }), j !== void 0) rl(j);
    else return t(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__prebuild___mf_0_mui_mf_1_material__prebuild__-DqJVOM2q.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      j = Oe(e2), s(p.share, {
        canonical: `default:@mui/material`,
        aliases: [
          `@mui/material`
        ]
      }, j, `vis2CollectionWidget`);
    }), __vite__mapDeps([2,3,1,4,5,6]), import.meta.url);
  })) : rl(j);
  let al, ol;
  il = e({
    ThemeProvider: () => dl,
    __moduleExports: () => P,
    default: () => ul,
    unstable_nested: () => pl,
    useTheme: () => fl
  });
  al = `__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__mf_v__runtimeInit__mf_v__.js__`;
  ol = globalThis[al];
  if (!ol) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    ol = globalThis[al] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var sl = ol.initPromise, M = `__mf_module_cache__`;
  globalThis[M] ||= {
    share: {},
    remote: {}
  }, globalThis[M].share ||= {}, globalThis[M].remote ||= {};
  var N = globalThis[M], cl = (e2) => {
    let t2 = N.pendingShareLoads ||= [];
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(N.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    N.share[t2] === void 0 && (N.share[t2] = N.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    N.share[t2] === void 0 && (N.share[t2] = N.share[e2]);
  }
  let ll, ul, pl, ml;
  ll = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  ml = (e2) => {
    P = e2, dl = e2.ThemeProvider, fl = e2.useTheme, pl = e2.unstable_nested, ul = e2.default ?? e2;
  };
  a(N.share, {
    canonical: `default:@mui/private-theming`,
    aliases: [
      `@mui/private-theming`
    ]
  }, ml);
  var P = n(N.share, {
    canonical: `default:@mui/private-theming`,
    aliases: [
      `@mui/private-theming`
    ]
  });
  P === void 0 ? cl(sl.then(() => {
    if (P = n(N.share, {
      canonical: `default:@mui/private-theming`,
      aliases: [
        `@mui/private-theming`
      ]
    }), P !== void 0) ml(P);
    else return t(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__prebuild___mf_0_mui_mf_1_private_mf_2_theming__prebuild__-CXn03qXU.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      P = ll(e2), s(N.share, {
        canonical: `default:@mui/private-theming`,
        aliases: [
          `@mui/private-theming`
        ]
      }, P, `vis2CollectionWidget`);
    }), [], import.meta.url);
  })) : ml(P);
  let gl, _l;
  hl = e({
    Box: () => Xl,
    Container: () => yu,
    GlobalStyles: () => Tl,
    Grid: () => bu,
    RtlProvider: () => _u,
    Stack: () => xu,
    StyledEngineProvider: () => wl,
    ThemeProvider: () => lu,
    __moduleExports: () => R,
    alignContent: () => Vu,
    alignItems: () => Bu,
    alignSelf: () => Ku,
    alpha: () => tf,
    backgroundColor: () => ud,
    bgcolor: () => ld,
    blend: () => uf,
    border: () => Cu,
    borderBottom: () => Eu,
    borderBottomColor: () => ju,
    borderColor: () => Ou,
    borderLeft: () => Du,
    borderLeftColor: () => Mu,
    borderRadius: () => Fu,
    borderRight: () => Tu,
    borderRightColor: () => Au,
    borderTop: () => wu,
    borderTopColor: () => ku,
    borderTransform: () => Su,
    borders: () => El,
    bottom: () => hd,
    boxClasses: () => Ud,
    boxSizing: () => Ed,
    breakpoints: () => Dl,
    color: () => cd,
    colorChannel: () => Jd,
    columnGap: () => Xu,
    compose: () => Ml,
    containerClasses: () => _f,
    createBox: () => Zl,
    createBreakpoints: () => tu,
    createContainer: () => vu,
    createGrid: () => yf,
    createSpacing: () => nu,
    createStack: () => Ef,
    createStyled: () => Ql,
    createTheme: () => eu,
    createUnarySpacing: () => Ad,
    createUnaryUnit: () => kd,
    css: () => Cl,
    cssContainerQueries: () => Ol,
    darken: () => rf,
    decomposeColor: () => qd,
    default: () => xl,
    display: () => Nl,
    emphasize: () => cf,
    experimental_sx: () => Sl,
    flex: () => Uu,
    flexBasis: () => Iu,
    flexDirection: () => Lu,
    flexGrow: () => Wu,
    flexShrink: () => Gu,
    flexWrap: () => Ru,
    flexbox: () => Pl,
    fontFamily: () => Pd,
    fontSize: () => Fd,
    fontStyle: () => Id,
    fontWeight: () => Ld,
    gap: () => Yu,
    getContainerUtilityClass: () => vf,
    getContrastRatio: () => ef,
    getGridUtilityClass: () => Tf,
    getLuminance: () => $d,
    getPath: () => Hl,
    getStackUtilityClass: () => Of,
    getStyleValue: () => Ul,
    getThemeProps: () => au,
    getValue: () => jd,
    grid: () => Fl,
    gridArea: () => od,
    gridAutoColumns: () => td,
    gridAutoFlow: () => ed,
    gridAutoRows: () => nd,
    gridClasses: () => bf,
    gridColumn: () => Qu,
    gridRow: () => $u,
    gridTemplateAreas: () => ad,
    gridTemplateColumns: () => rd,
    gridTemplateRows: () => id,
    handleBreakpoints: () => kl,
    height: () => xd,
    hexToRgb: () => Kd,
    hslToRgb: () => Qd,
    justifyContent: () => zu,
    justifyItems: () => qu,
    justifySelf: () => Ju,
    keyframes: () => L,
    left: () => gd,
    letterSpacing: () => Rd,
    lighten: () => of,
    lineHeight: () => Bd,
    major: () => pf,
    margin: () => Md,
    marginKeys: () => Dd,
    maxHeight: () => Sd,
    maxWidth: () => yd,
    mergeBreakpointsInOrder: () => Al,
    minHeight: () => Cd,
    minWidth: () => bd,
    minor: () => mf,
    order: () => Hu,
    outline: () => Nu,
    outlineColor: () => Pu,
    padding: () => Nd,
    paddingKeys: () => Od,
    palette: () => Il,
    paletteTransform: () => sd,
    patch: () => hf,
    position: () => dd,
    positions: () => Ll,
    prerelease: () => gf,
    private_safeAlpha: () => nf,
    private_safeColorChannel: () => Yd,
    private_safeDarken: () => af,
    private_safeEmphasize: () => lf,
    private_safeLighten: () => sf,
    recomposeColor: () => Xd,
    responsivePropType: () => gu,
    rgbToHex: () => Zd,
    right: () => md,
    rowGap: () => Zu,
    shadows: () => Rl,
    shape: () => ru,
    shouldForwardProp: () => Gd,
    sizeHeight: () => Td,
    sizeWidth: () => wd,
    sizing: () => zl,
    sizingTransform: () => _d,
    spacing: () => Bl,
    stackClasses: () => Df,
    style: () => Vl,
    styled: () => $l,
    systemDefaultTheme: () => Wd,
    textAlign: () => Vd,
    textTransform: () => zd,
    top: () => pd,
    typography: () => Wl,
    typographyVariant: () => Hd,
    unstable_createCssVarsProvider: () => du,
    unstable_createCssVarsTheme: () => hu,
    unstable_createGetCssVar: () => fu,
    unstable_createStyleFunctionSx: () => Kl,
    unstable_cssVarsParser: () => pu,
    unstable_defaultSxConfig: () => Jl,
    unstable_extendSxProp: () => ql,
    unstable_generateDirectionClasses: () => Sf,
    unstable_generateSizeClassNames: () => Cf,
    unstable_generateSpacingClassNames: () => wf,
    unstable_getThemeValue: () => Yl,
    unstable_memoTheme: () => uu,
    unstable_prepareCssVars: () => mu,
    unstable_resolveBreakpointValues: () => jl,
    unstable_styleFunctionSx: () => Gl,
    unstable_traverseBreakpoints: () => xf,
    useMediaQuery: () => cu,
    useRtl: () => df,
    useTheme: () => ou,
    useThemeProps: () => iu,
    useThemeWithoutDefault: () => su,
    version: () => ff,
    width: () => vd,
    zIndex: () => fd
  });
  gl = `__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__mf_v__runtimeInit__mf_v__.js__`;
  _l = globalThis[gl];
  if (!_l) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    _l = globalThis[gl] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var vl = _l.initPromise, F = `__mf_module_cache__`;
  globalThis[F] ||= {
    share: {},
    remote: {}
  }, globalThis[F].share ||= {}, globalThis[F].remote ||= {};
  var I = globalThis[F], yl = (e2) => {
    let t2 = I.pendingShareLoads ||= [];
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(I.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    I.share[t2] === void 0 && (I.share[t2] = I.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    I.share[t2] === void 0 && (I.share[t2] = I.share[e2]);
  }
  let bl, xl, Sl, El, Dl, Ol, kl, Al, jl, Ml, Nl, Pl, Fl, Il, Ll, Rl, zl, Bl, Vl, Hl, Ul, Wl, Gl, Kl, ql, Jl, Yl, Xl, Ql, $l, eu, ru, iu, au, su, cu, pu, mu, hu, gu, _u, yu, bu, xu, Su, Cu, wu, Tu, Eu, Du, Ou, ku, Au, ju, Mu, Nu, Pu, Fu, Iu, Lu, Ru, zu, Bu, Vu, Hu, Uu, Wu, Gu, Ku, qu, Ju, Yu, Xu, Zu, Qu, $u, ed, td, nd, rd, id, ad, od, sd, cd, ld, ud, dd, fd, pd, md, hd, gd, _d, vd, yd, bd, xd, Sd, Cd, wd, Td, Ed, Dd, Od, kd, Ad, jd, Md, Nd, Pd, Fd, Id, Ld, Rd, zd, Bd, Vd, Hd, Ud, Wd, Gd, Jd, Yd, nf, af, sf, lf, uf, df, ff, pf, mf, hf, gf, _f, vf, yf, bf, xf, Sf, Cf, wf, Tf, Df, Of, kf;
  bl = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  kf = (e2) => {
    R = e2, Sl = e2.experimental_sx, Cl = e2.css, L = e2.keyframes, wl = e2.StyledEngineProvider, Tl = e2.GlobalStyles, El = e2.borders, Dl = e2.breakpoints, Ol = e2.cssContainerQueries, kl = e2.handleBreakpoints, Al = e2.mergeBreakpointsInOrder, jl = e2.unstable_resolveBreakpointValues, Ml = e2.compose, Nl = e2.display, Pl = e2.flexbox, Fl = e2.grid, Il = e2.palette, Ll = e2.positions, Rl = e2.shadows, zl = e2.sizing, Bl = e2.spacing, Vl = e2.style, Hl = e2.getPath, Ul = e2.getStyleValue, Wl = e2.typography, Gl = e2.unstable_styleFunctionSx, Kl = e2.unstable_createStyleFunctionSx, ql = e2.unstable_extendSxProp, Jl = e2.unstable_defaultSxConfig, Yl = e2.unstable_getThemeValue, Xl = e2.Box, Zl = e2.createBox, Ql = e2.createStyled, $l = e2.styled, eu = e2.createTheme, tu = e2.createBreakpoints, nu = e2.createSpacing, ru = e2.shape, iu = e2.useThemeProps, au = e2.getThemeProps, ou = e2.useTheme, su = e2.useThemeWithoutDefault, cu = e2.useMediaQuery, lu = e2.ThemeProvider, uu = e2.unstable_memoTheme, du = e2.unstable_createCssVarsProvider, fu = e2.unstable_createGetCssVar, pu = e2.unstable_cssVarsParser, mu = e2.unstable_prepareCssVars, hu = e2.unstable_createCssVarsTheme, gu = e2.responsivePropType, _u = e2.RtlProvider, vu = e2.createContainer, yu = e2.Container, bu = e2.Grid, xu = e2.Stack, Su = e2.borderTransform, Cu = e2.border, wu = e2.borderTop, Tu = e2.borderRight, Eu = e2.borderBottom, Du = e2.borderLeft, Ou = e2.borderColor, ku = e2.borderTopColor, Au = e2.borderRightColor, ju = e2.borderBottomColor, Mu = e2.borderLeftColor, Nu = e2.outline, Pu = e2.outlineColor, Fu = e2.borderRadius, Iu = e2.flexBasis, Lu = e2.flexDirection, Ru = e2.flexWrap, zu = e2.justifyContent, Bu = e2.alignItems, Vu = e2.alignContent, Hu = e2.order, Uu = e2.flex, Wu = e2.flexGrow, Gu = e2.flexShrink, Ku = e2.alignSelf, qu = e2.justifyItems, Ju = e2.justifySelf, Yu = e2.gap, Xu = e2.columnGap, Zu = e2.rowGap, Qu = e2.gridColumn, $u = e2.gridRow, ed = e2.gridAutoFlow, td = e2.gridAutoColumns, nd = e2.gridAutoRows, rd = e2.gridTemplateColumns, id = e2.gridTemplateRows, ad = e2.gridTemplateAreas, od = e2.gridArea, sd = e2.paletteTransform, cd = e2.color, ld = e2.bgcolor, ud = e2.backgroundColor, dd = e2.position, fd = e2.zIndex, pd = e2.top, md = e2.right, hd = e2.bottom, gd = e2.left, _d = e2.sizingTransform, vd = e2.width, yd = e2.maxWidth, bd = e2.minWidth, xd = e2.height, Sd = e2.maxHeight, Cd = e2.minHeight, wd = e2.sizeWidth, Td = e2.sizeHeight, Ed = e2.boxSizing, Dd = e2.marginKeys, Od = e2.paddingKeys, kd = e2.createUnaryUnit, Ad = e2.createUnarySpacing, jd = e2.getValue, Md = e2.margin, Nd = e2.padding, Pd = e2.fontFamily, Fd = e2.fontSize, Id = e2.fontStyle, Ld = e2.fontWeight, Rd = e2.letterSpacing, zd = e2.textTransform, Bd = e2.lineHeight, Vd = e2.textAlign, Hd = e2.typographyVariant, Ud = e2.boxClasses, Wd = e2.systemDefaultTheme, Gd = e2.shouldForwardProp, Kd = e2.hexToRgb, qd = e2.decomposeColor, Jd = e2.colorChannel, Yd = e2.private_safeColorChannel, Xd = e2.recomposeColor, Zd = e2.rgbToHex, Qd = e2.hslToRgb, $d = e2.getLuminance, ef = e2.getContrastRatio, tf = e2.alpha, nf = e2.private_safeAlpha, rf = e2.darken, af = e2.private_safeDarken, of = e2.lighten, sf = e2.private_safeLighten, cf = e2.emphasize, lf = e2.private_safeEmphasize, uf = e2.blend, df = e2.useRtl, ff = e2.version, pf = e2.major, mf = e2.minor, hf = e2.patch, gf = e2.prerelease, _f = e2.containerClasses, vf = e2.getContainerUtilityClass, yf = e2.createGrid, bf = e2.gridClasses, xf = e2.unstable_traverseBreakpoints, Sf = e2.unstable_generateDirectionClasses, Cf = e2.unstable_generateSizeClassNames, wf = e2.unstable_generateSpacingClassNames, Tf = e2.getGridUtilityClass, Ef = e2.createStack, Df = e2.stackClasses, Of = e2.getStackUtilityClass, xl = e2.default ?? e2;
  };
  a(I.share, {
    canonical: `default:@mui/system`,
    aliases: [
      `@mui/system`
    ]
  }, kf);
  var R = n(I.share, {
    canonical: `default:@mui/system`,
    aliases: [
      `@mui/system`
    ]
  });
  R === void 0 ? yl(vl.then(() => {
    if (R = n(I.share, {
      canonical: `default:@mui/system`,
      aliases: [
        `@mui/system`
      ]
    }), R !== void 0) kf(R);
    else return t(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__prebuild___mf_0_mui_mf_1_system__prebuild__-CkvdjXBe.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      R = bl(e2), s(I.share, {
        canonical: `default:@mui/system`,
        aliases: [
          `@mui/system`
        ]
      }, R, `vis2CollectionWidget`);
    }), __vite__mapDeps([0,3,1,4,5]), import.meta.url);
  })) : kf(R);
  let jf, Mf;
  Af = e({
    Activity: () => Lf,
    Children: () => Rf,
    Component: () => zf,
    Fragment: () => Bf,
    Profiler: () => Vf,
    PureComponent: () => Hf,
    StrictMode: () => Uf,
    Suspense: () => Wf,
    ViewTransition: () => Gf,
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => Kf,
    __COMPILER_RUNTIME: () => qf,
    __moduleExports: () => V,
    addTransitionType: () => Jf,
    cache: () => Yf,
    cacheSignal: () => Xf,
    cloneElement: () => Zf,
    createContext: () => Qf,
    createElement: () => $f,
    createRef: () => ep,
    default: () => If,
    forwardRef: () => tp,
    isValidElement: () => np,
    lazy: () => rp,
    memo: () => ip,
    startTransition: () => ap,
    unstable_useCacheRefresh: () => op,
    use: () => sp,
    useActionState: () => cp,
    useCallback: () => lp,
    useContext: () => up,
    useDebugValue: () => dp,
    useDeferredValue: () => fp,
    useEffect: () => pp,
    useEffectEvent: () => mp,
    useId: () => hp,
    useImperativeHandle: () => gp,
    useInsertionEffect: () => _p,
    useLayoutEffect: () => vp,
    useMemo: () => yp,
    useOptimistic: () => bp,
    useReducer: () => xp,
    useRef: () => Sp,
    useState: () => Cp,
    useSyncExternalStore: () => wp,
    useTransition: () => Tp,
    version: () => Ep
  });
  jf = `__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__mf_v__runtimeInit__mf_v__.js__`;
  Mf = globalThis[jf];
  if (!Mf) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    Mf = globalThis[jf] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var Nf = Mf.initPromise, z = `__mf_module_cache__`;
  globalThis[z] ||= {
    share: {},
    remote: {}
  }, globalThis[z].share ||= {}, globalThis[z].remote ||= {};
  var B = globalThis[z], Pf = (e2) => {
    let t2 = B.pendingShareLoads ||= [];
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(B.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    B.share[t2] === void 0 && (B.share[t2] = B.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    B.share[t2] === void 0 && (B.share[t2] = B.share[e2]);
  }
  let Ff, Lf, zf, Vf, Hf, Uf, Wf, Gf, Kf, qf, Jf, Yf, Xf, ep, rp, ap, op, sp, cp, dp, fp, mp, hp, bp, Tp, Dp;
  Ff = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  Dp = (e2) => {
    V = e2, Lf = e2.Activity, Rf = e2.Children, zf = e2.Component, Bf = e2.Fragment, Vf = e2.Profiler, Hf = e2.PureComponent, Uf = e2.StrictMode, Wf = e2.Suspense, Gf = e2.ViewTransition, Kf = e2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, qf = e2.__COMPILER_RUNTIME, Jf = e2.addTransitionType, Yf = e2.cache, Xf = e2.cacheSignal, Zf = e2.cloneElement, Qf = e2.createContext, $f = e2.createElement, ep = e2.createRef, tp = e2.forwardRef, np = e2.isValidElement, rp = e2.lazy, ip = e2.memo, ap = e2.startTransition, op = e2.unstable_useCacheRefresh, sp = e2.use, cp = e2.useActionState, lp = e2.useCallback, up = e2.useContext, dp = e2.useDebugValue, fp = e2.useDeferredValue, pp = e2.useEffect, mp = e2.useEffectEvent, hp = e2.useId, gp = e2.useImperativeHandle, _p = e2.useInsertionEffect, vp = e2.useLayoutEffect, yp = e2.useMemo, bp = e2.useOptimistic, xp = e2.useReducer, Sp = e2.useRef, Cp = e2.useState, wp = e2.useSyncExternalStore, Tp = e2.useTransition, Ep = e2.version, If = e2.default ?? e2;
  };
  a(B.share, {
    canonical: `default:react`,
    aliases: [
      `react`
    ]
  }, Dp);
  var V = n(B.share, {
    canonical: `default:react`,
    aliases: [
      `react`
    ]
  });
  V === void 0 ? Pf(Nf.then(() => {
    if (V = n(B.share, {
      canonical: `default:react`,
      aliases: [
        `react`
      ]
    }), V !== void 0) Dp(V);
    else return t(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__prebuild__react__prebuild__-BC1ksIG3.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      V = Ff(e2), s(B.share, {
        canonical: `default:react`,
        aliases: [
          `react`
        ]
      }, V, `vis2CollectionWidget`);
    }), __vite__mapDeps([7]), import.meta.url);
  })) : Dp(V);
  let kp, Ap;
  Op = e({
    Fragment: () => Fp,
    __moduleExports: () => W,
    default: () => Pp,
    jsxDEV: () => Ip
  });
  kp = `__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__mf_v__runtimeInit__mf_v__.js__`;
  Ap = globalThis[kp];
  if (!Ap) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    Ap = globalThis[kp] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var jp = Ap.initPromise, H = `__mf_module_cache__`;
  globalThis[H] ||= {
    share: {},
    remote: {}
  }, globalThis[H].share ||= {}, globalThis[H].remote ||= {};
  var U = globalThis[H], Mp = (e2) => {
    let t2 = U.pendingShareLoads ||= [];
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(U.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    U.share[t2] === void 0 && (U.share[t2] = U.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    U.share[t2] === void 0 && (U.share[t2] = U.share[e2]);
  }
  var Np = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  }, Pp, Fp, Ip, Lp = (e2) => {
    W = e2, Fp = e2.Fragment, Ip = e2.jsxDEV, Pp = e2.default ?? e2;
  };
  a(U.share, {
    canonical: `default:react/jsx-dev-runtime`,
    aliases: [
      `react/jsx-dev-runtime`
    ]
  }, Lp);
  var W = n(U.share, {
    canonical: `default:react/jsx-dev-runtime`,
    aliases: [
      `react/jsx-dev-runtime`
    ]
  });
  W === void 0 ? Mp(jp.then(() => {
    if (W = n(U.share, {
      canonical: `default:react/jsx-dev-runtime`,
      aliases: [
        `react/jsx-dev-runtime`
      ]
    }), W !== void 0) Lp(W);
    else return t(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__prebuild__react_mf_1_jsx_mf_2_dev_mf_2_runtime__prebuild__-BHRu0R3m.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      W = Np(e2), s(U.share, {
        canonical: `default:react/jsx-dev-runtime`,
        aliases: [
          `react/jsx-dev-runtime`
        ]
      }, W, `vis2CollectionWidget`);
    }), [], import.meta.url);
  })) : Lp(W);
  let zp, Bp;
  Rp = e({
    Fragment: () => Gp,
    __moduleExports: () => q,
    default: () => Wp,
    jsx: () => Kp,
    jsxs: () => qp
  });
  zp = `__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__mf_v__runtimeInit__mf_v__.js__`;
  Bp = globalThis[zp];
  if (!Bp) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    Bp = globalThis[zp] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var Vp = Bp.initPromise, G = `__mf_module_cache__`;
  globalThis[G] ||= {
    share: {},
    remote: {}
  }, globalThis[G].share ||= {}, globalThis[G].remote ||= {};
  var K = globalThis[G], Hp = (e2) => {
    let t2 = K.pendingShareLoads ||= [];
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(K.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    K.share[t2] === void 0 && (K.share[t2] = K.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    K.share[t2] === void 0 && (K.share[t2] = K.share[e2]);
  }
  let Up, Wp, Jp;
  Up = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  Jp = (e2) => {
    q = e2, Gp = e2.Fragment, Kp = e2.jsx, qp = e2.jsxs, Wp = e2.default ?? e2;
  };
  a(K.share, {
    canonical: `default:react/jsx-runtime`,
    aliases: [
      `react/jsx-runtime`
    ]
  }, Jp);
  var q = n(K.share, {
    canonical: `default:react/jsx-runtime`,
    aliases: [
      `react/jsx-runtime`
    ]
  });
  q === void 0 ? Hp(Vp.then(() => {
    if (q = n(K.share, {
      canonical: `default:react/jsx-runtime`,
      aliases: [
        `react/jsx-runtime`
      ]
    }), q !== void 0) Jp(q);
    else return t(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__-lLn5ruiO.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      q = Up(e2), s(K.share, {
        canonical: `default:react/jsx-runtime`,
        aliases: [
          `react/jsx-runtime`
        ]
      }, q, `vis2CollectionWidget`);
    }), [], import.meta.url);
  })) : Jp(q);
  let Xp, Zp;
  Yp = e({
    __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => nm,
    __moduleExports: () => X,
    browser: () => rm,
    createPortal: () => im,
    default: () => tm,
    flushSync: () => am,
    preconnect: () => om,
    prefetchDNS: () => sm,
    preinit: () => cm,
    preinitModule: () => lm,
    preload: () => um,
    preloadModule: () => dm,
    requestFormReset: () => fm,
    unstable_batchedUpdates: () => pm,
    useFormState: () => mm,
    useFormStatus: () => hm,
    version: () => gm
  });
  Xp = `__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__mf_v__runtimeInit__mf_v__.js__`;
  Zp = globalThis[Xp];
  if (!Zp) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    Zp = globalThis[Xp] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var Qp = Zp.initPromise, J = `__mf_module_cache__`;
  globalThis[J] ||= {
    share: {},
    remote: {}
  }, globalThis[J].share ||= {}, globalThis[J].remote ||= {};
  var Y = globalThis[J], $p = (e2) => {
    let t2 = Y.pendingShareLoads ||= [];
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(Y.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    Y.share[t2] === void 0 && (Y.share[t2] = Y.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    Y.share[t2] === void 0 && (Y.share[t2] = Y.share[e2]);
  }
  let em, tm, nm, rm, om, sm, cm, lm, um, dm, fm, pm, mm, hm, gm, _m;
  em = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  _m = (e2) => {
    X = e2, nm = e2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rm = e2.browser, im = e2.createPortal, am = e2.flushSync, om = e2.preconnect, sm = e2.prefetchDNS, cm = e2.preinit, lm = e2.preinitModule, um = e2.preload, dm = e2.preloadModule, fm = e2.requestFormReset, pm = e2.unstable_batchedUpdates, mm = e2.useFormState, hm = e2.useFormStatus, gm = e2.version, tm = e2.default ?? e2;
  };
  a(Y.share, {
    canonical: `default:react-dom`,
    aliases: [
      `react-dom`
    ]
  }, _m);
  var X = n(Y.share, {
    canonical: `default:react-dom`,
    aliases: [
      `react-dom`
    ]
  });
  X === void 0 ? $p(Qp.then(() => {
    if (X = n(Y.share, {
      canonical: `default:react-dom`,
      aliases: [
        `react-dom`
      ]
    }), X !== void 0) _m(X);
    else return t(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__prebuild__react_mf_2_dom__prebuild__-BKIEIMpK.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      X = em(e2), s(Y.share, {
        canonical: `default:react-dom`,
        aliases: [
          `react-dom`
        ]
      }, X, `vis2CollectionWidget`);
    }), __vite__mapDeps([8,7]), import.meta.url);
  })) : _m(X);
  let ym, bm;
  vm = e({
    __moduleExports: () => $,
    createRoot: () => Tm,
    default: () => wm,
    hydrateRoot: () => Em,
    version: () => Dm
  });
  ym = `__mf_init__virtual:mf:__mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__mf_v__runtimeInit__mf_v__.js__`;
  bm = globalThis[ym];
  if (!bm) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    bm = globalThis[ym] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var xm = bm.initPromise, Z = `__mf_module_cache__`;
  globalThis[Z] ||= {
    share: {},
    remote: {}
  }, globalThis[Z].share ||= {}, globalThis[Z].remote ||= {};
  var Q = globalThis[Z], Sm = (e2) => {
    let t2 = Q.pendingShareLoads ||= [];
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(Q.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    Q.share[t2] === void 0 && (Q.share[t2] = Q.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    Q.share[t2] === void 0 && (Q.share[t2] = Q.share[e2]);
  }
  var Cm = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  }, wm, Tm, Em, Dm, Om = (e2) => {
    $ = e2, Tm = e2.createRoot, Em = e2.hydrateRoot, Dm = e2.version, wm = e2.default ?? e2;
  };
  a(Q.share, {
    canonical: `default:react-dom/client`,
    aliases: [
      `react-dom/client`
    ]
  }, Om);
  var $ = n(Q.share, {
    canonical: `default:react-dom/client`,
    aliases: [
      `react-dom/client`
    ]
  });
  $ === void 0 ? Sm(xm.then(() => {
    if ($ = n(Q.share, {
      canonical: `default:react-dom/client`,
      aliases: [
        `react-dom/client`
      ]
    }), $ !== void 0) Om($);
    else return t(() => import("./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__prebuild__react_mf_2_dom_mf_1_client__prebuild__-mlzw-iAp.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      $ = Cm(e2), s(Q.share, {
        canonical: `default:react-dom/client`,
        aliases: [
          `react-dom/client`
        ]
      }, $, `vis2CollectionWidget`);
    }), __vite__mapDeps([7,8]), import.meta.url);
  })) : Om($);
})();
export {
  uu as $,
  C as $t,
  If as A,
  xr as At,
  tf as B,
  dt as Bt,
  vp as C,
  _e as Cn,
  Nn as Ct,
  Cp as D,
  nr as Dt,
  Sp as E,
  Ge as Et,
  Xd as F,
  nt as Ft,
  L as G,
  js as Gt,
  of as H,
  h as Ht,
  Zd as I,
  rt as It,
  tu as J,
  y as Jt,
  wl as K,
  Pe as Kt,
  Qd as L,
  it as Lt,
  Cl as M,
  Sr as Mt,
  Kd as N,
  Je as Nt,
  wp as O,
  cr as Ot,
  qd as P,
  Xe as Pt,
  lu as Q,
  S as Qt,
  $d as R,
  Ne as Rt,
  _p as S,
  me as Sn,
  Mn as St,
  xp as T,
  zn as Tt,
  cf as U,
  g as Ut,
  rf as V,
  m as Vt,
  Ef as W,
  _ as Wt,
  ou as X,
  b as Xt,
  nu as Y,
  Fe as Yt,
  Tl as Z,
  x as Zt,
  lp as _,
  __tla,
  Ce as _n,
  wn as _t,
  Gp as a,
  k as an,
  fl as at,
  pp as b,
  ye as bn,
  An as bt,
  Rp as c,
  Nt as cn,
  dn as ct,
  Zf as d,
  Ut as dn,
  gn as dt,
  w as en,
  du as et,
  Qf as f,
  qt as fn,
  _n as ft,
  ip as g,
  nn as gn,
  Cn as gt,
  np as h,
  Zt as hn,
  xn as ht,
  Yp as i,
  O as in,
  dl as it,
  Af as j,
  qe as jt,
  Ep as k,
  yr as kt,
  Op as l,
  zt as ln,
  pn as lt,
  tp as m,
  Xt as mn,
  bn as mt,
  im as n,
  E as nn,
  vu as nt,
  Kp as o,
  A as on,
  il as ot,
  $f as p,
  ze as pn,
  vn as pt,
  Zl as q,
  v as qt,
  am as r,
  D as rn,
  hl as rt,
  qp as s,
  At as sn,
  je as st,
  vm as t,
  T as tn,
  fu as tt,
  Rf as u,
  Bt as un,
  hn as ut,
  up as v,
  le as vn,
  Dn as vt,
  yp as w,
  re as wn,
  Pn as wt,
  gp as x,
  xe as xn,
  jn as xt,
  Bf as y,
  ue as yn,
  kn as yt,
  ef as z,
  ut as zt
};
