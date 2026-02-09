const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./assets/index-BEpFHtMA.js","./assets/_commonjsHelpers-Cpj98o6Y.js","./assets/index-DMBzzD-N.js","./assets/vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js","./assets/vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js"])))=>i.map(i=>d[i]);
import exposesMap, { __tla as __tla_0 } from "./assets/virtualExposes-B0SMrCGE.js";
import { _ as __vitePreload } from "./assets/preload-helper-PPVm8Dsz.js";
import { v as vis2CollectionWidget__mf_v__runtimeInit__mf_v__ } from "./assets/vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let getExposes, init;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var index_cjs$2 = {}, index_cjs$1 = {}, define_process_env_default = {};
  const FederationModuleManifest = "federation-manifest.json", MANIFEST_EXT = ".json", BROWSER_LOG_KEY = "FEDERATION_DEBUG", NameTransformSymbol = {
    AT: "@",
    HYPHEN: "-",
    SLASH: "/"
  }, NameTransformMap = {
    [NameTransformSymbol.AT]: "scope_",
    [NameTransformSymbol.HYPHEN]: "_",
    [NameTransformSymbol.SLASH]: "__"
  }, EncodedNameTransformMap = {
    [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
    [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
    [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
  }, SEPARATOR = ":", ManifestFileName = "mf-manifest.json", StatsFileName = "mf-stats.json", MFModuleType = {
    NPM: "npm",
    APP: "app"
  }, MODULE_DEVTOOL_IDENTIFIER = "__MF_DEVTOOLS_MODULE_INFO__", ENCODE_NAME_PREFIX = "ENCODE_NAME_PREFIX", TEMP_DIR = ".federation", MFPrefetchCommon = {
    identifier: "MFDataPrefetch",
    globalKey: "__PREFETCH__",
    library: "mf-data-prefetch",
    exportsKey: "__PREFETCH_EXPORTS__",
    fileName: "bootstrap.js"
  };
  var ContainerPlugin = Object.freeze({
    __proto__: null
  }), ContainerReferencePlugin = Object.freeze({
    __proto__: null
  }), ModuleFederationPlugin = Object.freeze({
    __proto__: null
  }), SharePlugin = Object.freeze({
    __proto__: null
  });
  function isBrowserEnv() {
    return typeof window < "u" && typeof window.document < "u";
  }
  function isReactNativeEnv() {
    return typeof navigator < "u" && (navigator == null ? void 0 : navigator.product) === "ReactNative";
  }
  function isBrowserDebug() {
    try {
      if (isBrowserEnv() && window.localStorage) return !!localStorage.getItem(BROWSER_LOG_KEY);
    } catch {
      return false;
    }
    return false;
  }
  function isDebugMode() {
    return typeof process < "u" && define_process_env_default && define_process_env_default.FEDERATION_DEBUG ? !!define_process_env_default.FEDERATION_DEBUG : typeof FEDERATION_DEBUG < "u" && FEDERATION_DEBUG ? true : isBrowserDebug();
  }
  const getProcessEnv = function() {
    return typeof process < "u" && define_process_env_default ? define_process_env_default : {};
  }, LOG_CATEGORY$1 = "[ Federation Runtime ]", parseEntry = (t, e, r = SEPARATOR) => {
    const o = t.split(r), n = getProcessEnv().NODE_ENV === "development" && e, a = "*", s = (i) => i.startsWith("http") || i.includes(MANIFEST_EXT);
    if (o.length >= 2) {
      let [i, ...c] = o;
      t.startsWith(r) && (i = o.slice(0, 2).join(r), c = [
        n || o.slice(2).join(r)
      ]);
      let l = n || c.join(r);
      return s(l) ? {
        name: i,
        entry: l
      } : {
        name: i,
        version: l || a
      };
    } else if (o.length === 1) {
      const [i] = o;
      return n && s(n) ? {
        name: i,
        entry: n
      } : {
        name: i,
        version: n || a
      };
    } else throw `Invalid entry value: ${t}`;
  }, composeKeyWithSeparator = function(...t) {
    return t.length ? t.reduce((e, r) => r ? e ? `${e}${SEPARATOR}${r}` : r : e, "") : "";
  }, encodeName = function(t, e = "", r = false) {
    try {
      const o = r ? ".js" : "";
      return `${e}${t.replace(new RegExp(`${NameTransformSymbol.AT}`, "g"), NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`, "g"), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`, "g"), NameTransformMap[NameTransformSymbol.SLASH])}${o}`;
    } catch (o) {
      throw o;
    }
  }, decodeName = function(t, e, r) {
    try {
      let o = t;
      if (e) {
        if (!o.startsWith(e)) return o;
        o = o.replace(new RegExp(e, "g"), "");
      }
      return o = o.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]), r && (o = o.replace(".js", "")), o;
    } catch (o) {
      throw o;
    }
  }, generateExposeFilename = (t, e) => {
    if (!t) return "";
    let r = t;
    return r === "." && (r = "default_export"), r.startsWith("./") && (r = r.replace("./", "")), encodeName(r, "__federation_expose_", e);
  }, generateShareFilename = (t, e) => t ? encodeName(t, "__federation_shared_", e) : "", getResourceUrl = (t, e) => {
    if ("getPublicPath" in t) {
      let r;
      return t.getPublicPath.startsWith("function") ? r = new Function("return " + t.getPublicPath)()() : r = new Function(t.getPublicPath)(), `${r}${e}`;
    } else return "publicPath" in t ? !isBrowserEnv() && !isReactNativeEnv() && "ssrPublicPath" in t ? `${t.ssrPublicPath}${e}` : `${t.publicPath}${e}` : (console.warn("Cannot get resource URL. If in debug mode, please ignore.", t, e), "");
  }, assert$1 = (t, e) => {
    t || error$1(e);
  }, error$1 = (t) => {
    throw new Error(`${LOG_CATEGORY$1}: ${t}`);
  }, warn$1 = (t) => {
    console.warn(`${LOG_CATEGORY$1}: ${t}`);
  };
  function safeToString(t) {
    try {
      return JSON.stringify(t, null, 2);
    } catch {
      return "";
    }
  }
  const VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;
  function isRequiredVersion(t) {
    return VERSION_PATTERN_REGEXP.test(t);
  }
  const simpleJoinRemoteEntry = (t, e) => {
    if (!t) return e;
    const o = ((n) => {
      if (n === ".") return "";
      if (n.startsWith("./")) return n.replace("./", "");
      if (n.startsWith("/")) {
        const a = n.slice(1);
        return a.endsWith("/") ? a.slice(0, -1) : a;
      }
      return n;
    })(t);
    return o ? o.endsWith("/") ? `${o}${e}` : `${o}/${e}` : e;
  };
  function inferAutoPublicPath(t) {
    return t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
  }
  function generateSnapshotFromManifest(t, e = {}) {
    var _a, _b, _c;
    const { remotes: r = {}, overrides: o = {}, version: n } = e;
    let a;
    const s = () => "publicPath" in t.metaData ? t.metaData.publicPath === "auto" && n ? inferAutoPublicPath(n) : t.metaData.publicPath : t.metaData.getPublicPath, i = Object.keys(o);
    let c = {};
    Object.keys(r).length || (c = ((_a = t.remotes) == null ? void 0 : _a.reduce((E, b) => {
      let R;
      const S = b.federationContainerName;
      return i.includes(S) ? R = o[S] : "version" in b ? R = b.version : R = b.entry, E[S] = {
        matchedVersion: R
      }, E;
    }, {})) || {}), Object.keys(r).forEach((E) => c[E] = {
      matchedVersion: i.includes(E) ? o[E] : r[E]
    });
    const { remoteEntry: { path: l, name: d, type: h }, types: u = {
      path: "",
      name: "",
      zip: "",
      api: ""
    }, buildInfo: { buildVersion: p }, globalName: _, ssrRemoteEntry: g } = t.metaData, { exposes: m } = t;
    let y = {
      version: n || "",
      buildVersion: p,
      globalName: _,
      remoteEntry: simpleJoinRemoteEntry(l, d),
      remoteEntryType: h,
      remoteTypes: simpleJoinRemoteEntry(u.path, u.name),
      remoteTypesZip: u.zip || "",
      remoteTypesAPI: u.api || "",
      remotesInfo: c,
      shared: t == null ? void 0 : t.shared.map((E) => ({
        assets: E.assets,
        sharedName: E.name,
        version: E.version
      })),
      modules: m == null ? void 0 : m.map((E) => ({
        moduleName: E.name,
        modulePath: E.path,
        assets: E.assets
      }))
    };
    if ((_b = t.metaData) == null ? void 0 : _b.prefetchInterface) {
      const E = t.metaData.prefetchInterface;
      y = {
        ...y,
        prefetchInterface: E
      };
    }
    if ((_c = t.metaData) == null ? void 0 : _c.prefetchEntry) {
      const { path: E, name: b, type: R } = t.metaData.prefetchEntry;
      y = {
        ...y,
        prefetchEntry: simpleJoinRemoteEntry(E, b),
        prefetchEntryType: R
      };
    }
    if ("publicPath" in t.metaData ? a = {
      ...y,
      publicPath: s(),
      ssrPublicPath: t.metaData.ssrPublicPath
    } : a = {
      ...y,
      getPublicPath: s()
    }, g) {
      const E = simpleJoinRemoteEntry(g.path, g.name);
      a.ssrRemoteEntry = E, a.ssrRemoteEntryType = g.type || "commonjs-module";
    }
    return a;
  }
  function isManifestProvider(t) {
    return !!("remoteEntry" in t && t.remoteEntry.includes(MANIFEST_EXT));
  }
  function getManifestFileName(t) {
    if (!t) return {
      statsFileName: StatsFileName,
      manifestFileName: ManifestFileName
    };
    let e = typeof t == "boolean" ? "" : t.filePath || "", r = typeof t == "boolean" ? "" : t.fileName || "";
    const o = ".json", n = (c) => c.endsWith(o) ? c : `${c}${o}`, a = (c, l) => c.replace(o, `${l}${o}`), s = r ? n(r) : ManifestFileName, i = r ? a(s, "-stats") : StatsFileName;
    return {
      statsFileName: simpleJoinRemoteEntry(e, i),
      manifestFileName: simpleJoinRemoteEntry(e, s)
    };
  }
  const PREFIX = "[ Module Federation ]", DEFAULT_DELEGATE = console, LOGGER_STACK_SKIP_TOKENS = [
    "logger.ts",
    "logger.js",
    "captureStackTrace",
    "Logger.emit",
    "Logger.log",
    "Logger.info",
    "Logger.warn",
    "Logger.error",
    "Logger.debug"
  ];
  function captureStackTrace() {
    try {
      const t = new Error().stack;
      if (!t) return;
      const [, ...e] = t.split(`
`), r = e.filter((n) => !LOGGER_STACK_SKIP_TOKENS.some((a) => n.includes(a)));
      return r.length ? `Stack trace:
${r.slice(0, 5).join(`
`)}` : void 0;
    } catch {
      return;
    }
  }
  class Logger {
    constructor(e, r = DEFAULT_DELEGATE) {
      this.prefix = e, this.delegate = r ?? DEFAULT_DELEGATE;
    }
    setPrefix(e) {
      this.prefix = e;
    }
    setDelegate(e) {
      this.delegate = e ?? DEFAULT_DELEGATE;
    }
    emit(e, r) {
      const o = this.delegate, a = isDebugMode() ? captureStackTrace() : void 0, s = a ? [
        ...r,
        a
      ] : r, i = (() => {
        switch (e) {
          case "log":
            return [
              "log",
              "info"
            ];
          case "info":
            return [
              "info",
              "log"
            ];
          case "warn":
            return [
              "warn",
              "info",
              "log"
            ];
          case "error":
            return [
              "error",
              "warn",
              "log"
            ];
          default:
            return [
              "debug",
              "log"
            ];
        }
      })();
      for (const c of i) {
        const l = o[c];
        if (typeof l == "function") {
          l.call(o, this.prefix, ...s);
          return;
        }
      }
      for (const c of i) {
        const l = DEFAULT_DELEGATE[c];
        if (typeof l == "function") {
          l.call(DEFAULT_DELEGATE, this.prefix, ...s);
          return;
        }
      }
    }
    log(...e) {
      this.emit("log", e);
    }
    warn(...e) {
      this.emit("warn", e);
    }
    error(...e) {
      this.emit("error", e);
    }
    success(...e) {
      this.emit("info", e);
    }
    info(...e) {
      this.emit("info", e);
    }
    ready(...e) {
      this.emit("info", e);
    }
    debug(...e) {
      isDebugMode() && this.emit("debug", e);
    }
  }
  function createLogger(t) {
    return new Logger(t);
  }
  function createInfrastructureLogger(t) {
    const e = new Logger(t);
    return Object.defineProperty(e, "__mf_infrastructure_logger__", {
      value: true,
      enumerable: false,
      configurable: false
    }), e;
  }
  function bindLoggerToCompiler(t, e, r) {
    if (t.__mf_infrastructure_logger__ && (e == null ? void 0 : e.getInfrastructureLogger)) try {
      const o = e.getInfrastructureLogger(r);
      o && typeof o == "object" && (typeof o.log == "function" || typeof o.info == "function" || typeof o.warn == "function" || typeof o.error == "function") && t.setDelegate(o);
    } catch {
      t.setDelegate(void 0);
    }
  }
  const logger$1 = createLogger(PREFIX), infrastructureLogger = createInfrastructureLogger(PREFIX);
  async function safeWrapper$1(t, e) {
    try {
      return await t();
    } catch (r) {
      !e && warn$1(r);
      return;
    }
  }
  function isStaticResourcesEqual$1(t, e) {
    const r = /^(https?:)?\/\//i, o = t.replace(r, "").replace(/\/$/, ""), n = e.replace(r, "").replace(/\/$/, "");
    return o === n;
  }
  function createScript(t) {
    let e = null, r = true, o = 2e4, n;
    const a = document.getElementsByTagName("script");
    for (let i = 0; i < a.length; i++) {
      const c = a[i], l = c.getAttribute("src");
      if (l && isStaticResourcesEqual$1(l, t.url)) {
        e = c, r = false;
        break;
      }
    }
    if (!e) {
      const i = t.attrs;
      e = document.createElement("script"), e.type = (i == null ? void 0 : i.type) === "module" ? "module" : "text/javascript";
      let c;
      t.createScriptHook && (c = t.createScriptHook(t.url, t.attrs), c instanceof HTMLScriptElement ? e = c : typeof c == "object" && ("script" in c && c.script && (e = c.script), "timeout" in c && c.timeout && (o = c.timeout))), e.src || (e.src = t.url), i && !c && Object.keys(i).forEach((l) => {
        e && (l === "async" || l === "defer" ? e[l] = i[l] : e.getAttribute(l) || e.setAttribute(l, i[l]));
      });
    }
    const s = async (i, c) => {
      clearTimeout(n);
      const l = () => {
        (c == null ? void 0 : c.type) === "error" ? (t == null ? void 0 : t.onErrorCallback) && (t == null ? void 0 : t.onErrorCallback(c)) : (t == null ? void 0 : t.cb) && (t == null ? void 0 : t.cb());
      };
      if (e && (e.onerror = null, e.onload = null, safeWrapper$1(() => {
        const { needDeleteScript: d = true } = t;
        d && (e == null ? void 0 : e.parentNode) && e.parentNode.removeChild(e);
      }), i && typeof i == "function")) {
        const d = i(c);
        if (d instanceof Promise) {
          const h = await d;
          return l(), h;
        }
        return l(), d;
      }
      l();
    };
    return e.onerror = s.bind(null, e.onerror), e.onload = s.bind(null, e.onload), n = setTimeout(() => {
      s(null, new Error(`Remote script "${t.url}" time-outed.`));
    }, o), {
      script: e,
      needAttach: r
    };
  }
  function createLink(t) {
    let e = null, r = true;
    const o = document.getElementsByTagName("link");
    for (let a = 0; a < o.length; a++) {
      const s = o[a], i = s.getAttribute("href"), c = s.getAttribute("rel");
      if (i && isStaticResourcesEqual$1(i, t.url) && c === t.attrs.rel) {
        e = s, r = false;
        break;
      }
    }
    if (!e) {
      e = document.createElement("link"), e.setAttribute("href", t.url);
      let a;
      const s = t.attrs;
      t.createLinkHook && (a = t.createLinkHook(t.url, s), a instanceof HTMLLinkElement && (e = a)), s && !a && Object.keys(s).forEach((i) => {
        e && !e.getAttribute(i) && e.setAttribute(i, s[i]);
      });
    }
    const n = (a, s) => {
      const i = () => {
        (s == null ? void 0 : s.type) === "error" ? (t == null ? void 0 : t.onErrorCallback) && (t == null ? void 0 : t.onErrorCallback(s)) : (t == null ? void 0 : t.cb) && (t == null ? void 0 : t.cb());
      };
      if (e && (e.onerror = null, e.onload = null, safeWrapper$1(() => {
        const { needDeleteLink: c = true } = t;
        c && (e == null ? void 0 : e.parentNode) && e.parentNode.removeChild(e);
      }), a)) {
        const c = a(s);
        return i(), c;
      }
      i();
    };
    return e.onerror = n.bind(null, e.onerror), e.onload = n.bind(null, e.onload), {
      link: e,
      needAttach: r
    };
  }
  function loadScript(t, e) {
    const { attrs: r = {}, createScriptHook: o } = e;
    return new Promise((n, a) => {
      const { script: s, needAttach: i } = createScript({
        url: t,
        cb: n,
        onErrorCallback: a,
        attrs: {
          fetchpriority: "high",
          ...r
        },
        createScriptHook: o,
        needDeleteScript: true
      });
      i && document.head.appendChild(s);
    });
  }
  const sdkImportCache = /* @__PURE__ */ new Map();
  function importNodeModule(t) {
    if (!t) throw new Error("import specifier is required");
    if (sdkImportCache.has(t)) return sdkImportCache.get(t);
    const r = new Function("name", "return import(name)")(t).then((o) => o).catch((o) => {
      throw console.error(`Error importing module ${t}:`, o), sdkImportCache.delete(t), o;
    });
    return sdkImportCache.set(t, r), r;
  }
  const loadNodeFetch = async () => {
    const t = await importNodeModule("node-fetch");
    return t.default || t;
  }, lazyLoaderHookFetch = async (t, e, r) => {
    const n = await ((a, s) => r.lifecycle.fetch.emit(a, s))(t, e || {});
    return !n || !(n instanceof Response) ? (typeof fetch > "u" ? await loadNodeFetch() : fetch)(t, e || {}) : n;
  }, createScriptNode = typeof ENV_TARGET > "u" || ENV_TARGET !== "web" ? (url, cb, attrs, loaderHook) => {
    if (loaderHook == null ? void 0 : loaderHook.createScriptHook) {
      const t = loaderHook.createScriptHook(url);
      t && typeof t == "object" && "url" in t && (url = t.url);
    }
    let urlObj;
    try {
      urlObj = new URL(url);
    } catch (t) {
      console.error("Error constructing URL:", t), cb(new Error(`Invalid URL: ${t}`));
      return;
    }
    const getFetch = async () => (loaderHook == null ? void 0 : loaderHook.fetch) ? (t, e) => lazyLoaderHookFetch(t, e, loaderHook) : typeof fetch > "u" ? loadNodeFetch() : fetch, handleScriptFetch = async (f, urlObj) => {
      var _a;
      try {
        const res = await f(urlObj.href), data = await res.text(), [path, vm] = await Promise.all([
          importNodeModule("path"),
          importNodeModule("vm")
        ]), scriptContext = {
          exports: {},
          module: {
            exports: {}
          }
        }, urlDirname = urlObj.pathname.split("/").slice(0, -1).join("/"), filename = path.basename(urlObj.pathname), script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}
})`, {
          filename,
          importModuleDynamically: ((_a = vm.constants) == null ? void 0 : _a.USE_MAIN_CONTEXT_DEFAULT_LOADER) ?? importNodeModule
        });
        script.runInThisContext()(scriptContext.exports, scriptContext.module, eval("require"), urlDirname, filename);
        const exportedInterface = scriptContext.module.exports || scriptContext.exports;
        if (attrs && exportedInterface && attrs.globalName) {
          const t = exportedInterface[attrs.globalName] || exportedInterface;
          cb(void 0, t);
          return;
        }
        cb(void 0, exportedInterface);
      } catch (t) {
        cb(t instanceof Error ? t : new Error(`Script execution error: ${t}`));
      }
    };
    getFetch().then(async (t) => {
      if ((attrs == null ? void 0 : attrs.type) === "esm" || (attrs == null ? void 0 : attrs.type) === "module") return loadModule(urlObj.href, {
        fetch: t,
        vm: await importNodeModule("vm")
      }).then(async (e) => {
        await e.evaluate(), cb(void 0, e.namespace);
      }).catch((e) => {
        cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
      });
      handleScriptFetch(t, urlObj);
    }).catch((t) => {
      cb(t);
    });
  } : (t, e, r, o) => {
    e(new Error("createScriptNode is disabled in non-Node.js environment"));
  }, loadScriptNode = typeof ENV_TARGET > "u" || ENV_TARGET !== "web" ? (t, e) => new Promise((r, o) => {
    createScriptNode(t, (n, a) => {
      var _a, _b;
      if (n) o(n);
      else {
        const s = ((_a = e == null ? void 0 : e.attrs) == null ? void 0 : _a.globalName) || `__FEDERATION_${(_b = e == null ? void 0 : e.attrs) == null ? void 0 : _b.name}:custom__`, i = globalThis[s] = a;
        r(i);
      }
    }, e.attrs, e.loaderHook);
  }) : (t, e) => {
    throw new Error("loadScriptNode is disabled in non-Node.js environment");
  }, esmModuleCache = /* @__PURE__ */ new Map();
  async function loadModule(t, e) {
    if (esmModuleCache.has(t)) return esmModuleCache.get(t);
    const { fetch: r, vm: o } = e, a = await (await r(t)).text(), s = new o.SourceTextModule(a, {
      importModuleDynamically: async (i, c) => {
        const l = new URL(i, t).href;
        return loadModule(l, e);
      }
    });
    return esmModuleCache.set(t, s), await s.link(async (i) => {
      const c = new URL(i, t).href;
      return await loadModule(c, e);
    }), s;
  }
  function normalizeOptions(t, e, r) {
    return function(o) {
      if (o === false) return false;
      if (typeof o > "u") return t ? e : false;
      if (o === true) return e;
      if (o && typeof o == "object") return {
        ...e,
        ...o
      };
      throw new Error(`Unexpected type for \`${r}\`, expect boolean/undefined/object, got: ${typeof o}`);
    };
  }
  const createModuleFederationConfig = (t) => t;
  index_cjs$1.BROWSER_LOG_KEY = BROWSER_LOG_KEY;
  index_cjs$1.ENCODE_NAME_PREFIX = ENCODE_NAME_PREFIX;
  index_cjs$1.EncodedNameTransformMap = EncodedNameTransformMap;
  index_cjs$1.FederationModuleManifest = FederationModuleManifest;
  index_cjs$1.MANIFEST_EXT = MANIFEST_EXT;
  index_cjs$1.MFModuleType = MFModuleType;
  index_cjs$1.MFPrefetchCommon = MFPrefetchCommon;
  index_cjs$1.MODULE_DEVTOOL_IDENTIFIER = MODULE_DEVTOOL_IDENTIFIER;
  index_cjs$1.ManifestFileName = ManifestFileName;
  index_cjs$1.NameTransformMap = NameTransformMap;
  index_cjs$1.NameTransformSymbol = NameTransformSymbol;
  index_cjs$1.SEPARATOR = SEPARATOR;
  index_cjs$1.StatsFileName = StatsFileName;
  index_cjs$1.TEMP_DIR = TEMP_DIR;
  index_cjs$1.assert = assert$1;
  index_cjs$1.bindLoggerToCompiler = bindLoggerToCompiler;
  index_cjs$1.composeKeyWithSeparator = composeKeyWithSeparator;
  index_cjs$1.containerPlugin = ContainerPlugin;
  index_cjs$1.containerReferencePlugin = ContainerReferencePlugin;
  index_cjs$1.createInfrastructureLogger = createInfrastructureLogger;
  index_cjs$1.createLink = createLink;
  index_cjs$1.createLogger = createLogger;
  index_cjs$1.createModuleFederationConfig = createModuleFederationConfig;
  index_cjs$1.createScript = createScript;
  index_cjs$1.createScriptNode = createScriptNode;
  index_cjs$1.decodeName = decodeName;
  index_cjs$1.encodeName = encodeName;
  index_cjs$1.error = error$1;
  index_cjs$1.generateExposeFilename = generateExposeFilename;
  index_cjs$1.generateShareFilename = generateShareFilename;
  index_cjs$1.generateSnapshotFromManifest = generateSnapshotFromManifest;
  index_cjs$1.getManifestFileName = getManifestFileName;
  index_cjs$1.getProcessEnv = getProcessEnv;
  index_cjs$1.getResourceUrl = getResourceUrl;
  index_cjs$1.inferAutoPublicPath = inferAutoPublicPath;
  index_cjs$1.infrastructureLogger = infrastructureLogger;
  index_cjs$1.isBrowserEnv = isBrowserEnv;
  index_cjs$1.isDebugMode = isDebugMode;
  index_cjs$1.isManifestProvider = isManifestProvider;
  index_cjs$1.isReactNativeEnv = isReactNativeEnv;
  index_cjs$1.isRequiredVersion = isRequiredVersion;
  index_cjs$1.isStaticResourcesEqual = isStaticResourcesEqual$1;
  index_cjs$1.loadScript = loadScript;
  index_cjs$1.loadScriptNode = loadScriptNode;
  index_cjs$1.logger = logger$1;
  index_cjs$1.moduleFederationPlugin = ModuleFederationPlugin;
  index_cjs$1.normalizeOptions = normalizeOptions;
  index_cjs$1.parseEntry = parseEntry;
  index_cjs$1.safeToString = safeToString;
  index_cjs$1.safeWrapper = safeWrapper$1;
  index_cjs$1.sharePlugin = SharePlugin;
  index_cjs$1.simpleJoinRemoteEntry = simpleJoinRemoteEntry;
  index_cjs$1.warn = warn$1;
  var index_cjs = {};
  const RUNTIME_001 = "RUNTIME-001", RUNTIME_002 = "RUNTIME-002", RUNTIME_003 = "RUNTIME-003", RUNTIME_004 = "RUNTIME-004", RUNTIME_005 = "RUNTIME-005", RUNTIME_006 = "RUNTIME-006", RUNTIME_007 = "RUNTIME-007", RUNTIME_008 = "RUNTIME-008", RUNTIME_009 = "RUNTIME-009", TYPE_001 = "TYPE-001", BUILD_001 = "BUILD-001", BUILD_002 = "BUILD-002", getDocsUrl = (t) => `View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/${t.split("-")[0].toLowerCase()}/${t}`, getShortErrorMsg = (t, e, r, o) => {
    const n = [
      `${[
        e[t]
      ]} #${t}`
    ];
    return r && n.push(`args: ${JSON.stringify(r)}`), n.push(getDocsUrl(t)), o && n.push(`Original Error Message:
 ${o}`), n.join(`
`);
  }, runtimeDescMap = {
    [RUNTIME_001]: "Failed to get remoteEntry exports.",
    [RUNTIME_002]: 'The remote entry interface does not contain "init"',
    [RUNTIME_003]: "Failed to get manifest.",
    [RUNTIME_004]: "Failed to locate remote.",
    [RUNTIME_005]: "Invalid loadShareSync function call from bundler runtime",
    [RUNTIME_006]: "Invalid loadShareSync function call from runtime",
    [RUNTIME_007]: "Failed to get remote snapshot.",
    [RUNTIME_008]: "Failed to load script resources.",
    [RUNTIME_009]: "Please call createInstance first."
  }, typeDescMap = {
    [TYPE_001]: "Failed to generate type declaration. Execute the below cmd to reproduce and fix the error."
  }, buildDescMap = {
    [BUILD_001]: "Failed to find expose module.",
    [BUILD_002]: "PublicPath is required in prod mode."
  }, errorDescMap = {
    ...runtimeDescMap,
    ...typeDescMap,
    ...buildDescMap
  };
  index_cjs.BUILD_001 = BUILD_001;
  index_cjs.BUILD_002 = BUILD_002;
  index_cjs.RUNTIME_001 = RUNTIME_001;
  index_cjs.RUNTIME_002 = RUNTIME_002;
  index_cjs.RUNTIME_003 = RUNTIME_003;
  index_cjs.RUNTIME_004 = RUNTIME_004;
  index_cjs.RUNTIME_005 = RUNTIME_005;
  index_cjs.RUNTIME_006 = RUNTIME_006;
  index_cjs.RUNTIME_007 = RUNTIME_007;
  index_cjs.RUNTIME_008 = RUNTIME_008;
  index_cjs.RUNTIME_009 = RUNTIME_009;
  index_cjs.TYPE_001 = TYPE_001;
  index_cjs.buildDescMap = buildDescMap;
  index_cjs.errorDescMap = errorDescMap;
  index_cjs.getShortErrorMsg = getShortErrorMsg;
  index_cjs.runtimeDescMap = runtimeDescMap;
  index_cjs.typeDescMap = typeDescMap;
  var sdk = index_cjs$1, errorCodes = index_cjs;
  const LOG_CATEGORY = "[ Federation Runtime ]", logger = sdk.createLogger(LOG_CATEGORY);
  function assert(t, e) {
    t || error(e);
  }
  function error(t) {
    throw t instanceof Error ? (t.message.startsWith(LOG_CATEGORY) || (t.message = `${LOG_CATEGORY}: ${t.message}`), t) : new Error(`${LOG_CATEGORY}: ${t}`);
  }
  function warn(t) {
    t instanceof Error && (t.message.startsWith(LOG_CATEGORY) || (t.message = `${LOG_CATEGORY}: ${t.message}`)), logger.warn(t);
  }
  function addUniqueItem(t, e) {
    return t.findIndex((r) => r === e) === -1 && t.push(e), t;
  }
  function getFMId(t) {
    return "version" in t && t.version ? `${t.name}:${t.version}` : "entry" in t && t.entry ? `${t.name}:${t.entry}` : `${t.name}`;
  }
  function isRemoteInfoWithEntry(t) {
    return typeof t.entry < "u";
  }
  function isPureRemoteEntry(t) {
    return !t.entry.includes(".json");
  }
  async function safeWrapper(t, e) {
    try {
      return await t();
    } catch (r) {
      !e && warn(r);
      return;
    }
  }
  function isObject(t) {
    return t && typeof t == "object";
  }
  const objectToString = Object.prototype.toString;
  function isPlainObject(t) {
    return objectToString.call(t) === "[object Object]";
  }
  function isStaticResourcesEqual(t, e) {
    const r = /^(https?:)?\/\//i, o = t.replace(r, "").replace(/\/$/, ""), n = e.replace(r, "").replace(/\/$/, "");
    return o === n;
  }
  function arrayOptions(t) {
    return Array.isArray(t) ? t : [
      t
    ];
  }
  function getRemoteEntryInfoFromSnapshot(t) {
    const e = {
      url: "",
      type: "global",
      globalName: ""
    };
    return sdk.isBrowserEnv() || sdk.isReactNativeEnv() ? "remoteEntry" in t ? {
      url: t.remoteEntry,
      type: t.remoteEntryType,
      globalName: t.globalName
    } : e : "ssrRemoteEntry" in t ? {
      url: t.ssrRemoteEntry || e.url,
      type: t.ssrRemoteEntryType || e.type,
      globalName: t.globalName
    } : e;
  }
  const processModuleAlias = (t, e) => {
    let r;
    return t.endsWith("/") ? r = t.slice(0, -1) : r = t, e.startsWith(".") && (e = e.slice(1)), r = r + e, r;
  }, CurrentGlobal = typeof globalThis == "object" ? globalThis : window, nativeGlobal = (() => {
    try {
      return document.defaultView;
    } catch {
      return CurrentGlobal;
    }
  })(), Global = nativeGlobal;
  function definePropertyGlobalVal(t, e, r) {
    Object.defineProperty(t, e, {
      value: r,
      configurable: false,
      writable: true
    });
  }
  function includeOwnProperty(t, e) {
    return Object.hasOwnProperty.call(t, e);
  }
  includeOwnProperty(CurrentGlobal, "__GLOBAL_LOADING_REMOTE_ENTRY__") || definePropertyGlobalVal(CurrentGlobal, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
  const globalLoading = CurrentGlobal.__GLOBAL_LOADING_REMOTE_ENTRY__;
  function setGlobalDefaultVal(t) {
    includeOwnProperty(t, "__VMOK__") && !includeOwnProperty(t, "__FEDERATION__") && definePropertyGlobalVal(t, "__FEDERATION__", t.__VMOK__), includeOwnProperty(t, "__FEDERATION__") || (definePropertyGlobalVal(t, "__FEDERATION__", {
      __GLOBAL_PLUGIN__: [],
      __INSTANCES__: [],
      moduleInfo: {},
      __SHARE__: {},
      __MANIFEST_LOADING__: {},
      __PRELOADED_MAP__: /* @__PURE__ */ new Map()
    }), definePropertyGlobalVal(t, "__VMOK__", t.__FEDERATION__)), t.__FEDERATION__.__GLOBAL_PLUGIN__ ??= [], t.__FEDERATION__.__INSTANCES__ ??= [], t.__FEDERATION__.moduleInfo ??= {}, t.__FEDERATION__.__SHARE__ ??= {}, t.__FEDERATION__.__MANIFEST_LOADING__ ??= {}, t.__FEDERATION__.__PRELOADED_MAP__ ??= /* @__PURE__ */ new Map();
  }
  setGlobalDefaultVal(CurrentGlobal);
  setGlobalDefaultVal(nativeGlobal);
  function resetFederationGlobalInfo() {
    CurrentGlobal.__FEDERATION__.__GLOBAL_PLUGIN__ = [], CurrentGlobal.__FEDERATION__.__INSTANCES__ = [], CurrentGlobal.__FEDERATION__.moduleInfo = {}, CurrentGlobal.__FEDERATION__.__SHARE__ = {}, CurrentGlobal.__FEDERATION__.__MANIFEST_LOADING__ = {}, Object.keys(globalLoading).forEach((t) => {
      delete globalLoading[t];
    });
  }
  function setGlobalFederationInstance(t) {
    CurrentGlobal.__FEDERATION__.__INSTANCES__.push(t);
  }
  function getGlobalFederationConstructor() {
    return CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
  }
  function setGlobalFederationConstructor(t, e = sdk.isDebugMode()) {
    e && (CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = t, CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.21.6");
  }
  function getInfoWithoutType(t, e) {
    if (typeof e == "string") {
      if (t[e]) return {
        value: t[e],
        key: e
      };
      {
        const o = Object.keys(t);
        for (const n of o) {
          const [a, s] = n.split(":"), i = `${a}:${e}`, c = t[i];
          if (c) return {
            value: c,
            key: i
          };
        }
        return {
          value: void 0,
          key: e
        };
      }
    } else throw new Error("key must be string");
  }
  const getGlobalSnapshot = () => nativeGlobal.__FEDERATION__.moduleInfo, getTargetSnapshotInfoByModuleInfo = (t, e) => {
    const r = getFMId(t), o = getInfoWithoutType(e, r).value;
    if (o && !o.version && "version" in t && t.version && (o.version = t.version), o) return o;
    if ("version" in t && t.version) {
      const { version: n, ...a } = t, s = getFMId(a), i = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, s).value;
      if ((i == null ? void 0 : i.version) === n) return i;
    }
  }, getGlobalSnapshotInfoByModuleInfo = (t) => getTargetSnapshotInfoByModuleInfo(t, nativeGlobal.__FEDERATION__.moduleInfo), setGlobalSnapshotInfoByModuleInfo = (t, e) => {
    const r = getFMId(t);
    return nativeGlobal.__FEDERATION__.moduleInfo[r] = e, nativeGlobal.__FEDERATION__.moduleInfo;
  }, addGlobalSnapshot = (t) => (nativeGlobal.__FEDERATION__.moduleInfo = {
    ...nativeGlobal.__FEDERATION__.moduleInfo,
    ...t
  }, () => {
    const e = Object.keys(t);
    for (const r of e) delete nativeGlobal.__FEDERATION__.moduleInfo[r];
  }), getRemoteEntryExports = (t, e) => {
    const r = e || `__FEDERATION_${t}:custom__`, o = CurrentGlobal[r];
    return {
      remoteEntryKey: r,
      entryExports: o
    };
  }, registerGlobalPlugins = (t) => {
    const { __GLOBAL_PLUGIN__: e } = nativeGlobal.__FEDERATION__;
    t.forEach((r) => {
      e.findIndex((o) => o.name === r.name) === -1 ? e.push(r) : warn(`The plugin ${r.name} has been registered.`);
    });
  }, getGlobalHostPlugins = () => nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__, getPreloaded = (t) => CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.get(t), setPreloaded = (t) => CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.set(t, true), DEFAULT_SCOPE = "default", DEFAULT_REMOTE_TYPE = "global", buildIdentifier = "[0-9A-Za-z-]+", build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`, numericIdentifier = "0|[1-9]\\d*", numericIdentifierLoose = "[0-9]+", nonNumericIdentifier = "\\d*[a-zA-Z-][a-zA-Z0-9-]*", preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`, preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`, preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`, preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`, xRangeIdentifier = `${numericIdentifier}|x|X|\\*`, xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`, hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`, mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`, loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`, gtlt = "((?:<|>)?=?)", comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`, loneTilde = "(?:~>?)", tildeTrim = `(\\s*)${loneTilde}\\s+`, loneCaret = "(?:\\^)", caretTrim = `(\\s*)${loneCaret}\\s+`, star = "(<|>)?=?\\s*\\*", caret = `^${loneCaret}${xRangePlain}$`, mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`, fullPlain = `v?${mainVersion}${preRelease}?${build}?`, tilde = `^${loneTilde}${xRangePlain}$`, xRange = `^${gtlt}\\s*${xRangePlain}$`, comparator = `^${gtlt}\\s*(${fullPlain})$|^$`, gte0 = "^\\s*>=\\s*0.0.0\\s*$";
  function parseRegex(t) {
    return new RegExp(t);
  }
  function isXVersion(t) {
    return !t || t.toLowerCase() === "x" || t === "*";
  }
  function pipe(...t) {
    return (e) => t.reduce((r, o) => o(r), e);
  }
  function extractComparator(t) {
    return t.match(parseRegex(comparator));
  }
  function combineVersion(t, e, r, o) {
    const n = `${t}.${e}.${r}`;
    return o ? `${n}-${o}` : n;
  }
  function parseHyphen(t) {
    return t.replace(parseRegex(hyphenRange), (e, r, o, n, a, s, i, c, l, d, h, u) => (isXVersion(o) ? r = "" : isXVersion(n) ? r = `>=${o}.0.0` : isXVersion(a) ? r = `>=${o}.${n}.0` : r = `>=${r}`, isXVersion(l) ? c = "" : isXVersion(d) ? c = `<${Number(l) + 1}.0.0-0` : isXVersion(h) ? c = `<${l}.${Number(d) + 1}.0-0` : u ? c = `<=${l}.${d}.${h}-${u}` : c = `<=${c}`, `${r} ${c}`.trim()));
  }
  function parseComparatorTrim(t) {
    return t.replace(parseRegex(comparatorTrim), "$1$2$3");
  }
  function parseTildeTrim(t) {
    return t.replace(parseRegex(tildeTrim), "$1~");
  }
  function parseCaretTrim(t) {
    return t.replace(parseRegex(caretTrim), "$1^");
  }
  function parseCarets(t) {
    return t.trim().split(/\s+/).map((e) => e.replace(parseRegex(caret), (r, o, n, a, s) => isXVersion(o) ? "" : isXVersion(n) ? `>=${o}.0.0 <${Number(o) + 1}.0.0-0` : isXVersion(a) ? o === "0" ? `>=${o}.${n}.0 <${o}.${Number(n) + 1}.0-0` : `>=${o}.${n}.0 <${Number(o) + 1}.0.0-0` : s ? o === "0" ? n === "0" ? `>=${o}.${n}.${a}-${s} <${o}.${n}.${Number(a) + 1}-0` : `>=${o}.${n}.${a}-${s} <${o}.${Number(n) + 1}.0-0` : `>=${o}.${n}.${a}-${s} <${Number(o) + 1}.0.0-0` : o === "0" ? n === "0" ? `>=${o}.${n}.${a} <${o}.${n}.${Number(a) + 1}-0` : `>=${o}.${n}.${a} <${o}.${Number(n) + 1}.0-0` : `>=${o}.${n}.${a} <${Number(o) + 1}.0.0-0`)).join(" ");
  }
  function parseTildes(t) {
    return t.trim().split(/\s+/).map((e) => e.replace(parseRegex(tilde), (r, o, n, a, s) => isXVersion(o) ? "" : isXVersion(n) ? `>=${o}.0.0 <${Number(o) + 1}.0.0-0` : isXVersion(a) ? `>=${o}.${n}.0 <${o}.${Number(n) + 1}.0-0` : s ? `>=${o}.${n}.${a}-${s} <${o}.${Number(n) + 1}.0-0` : `>=${o}.${n}.${a} <${o}.${Number(n) + 1}.0-0`)).join(" ");
  }
  function parseXRanges(t) {
    return t.split(/\s+/).map((e) => e.trim().replace(parseRegex(xRange), (r, o, n, a, s, i) => {
      const c = isXVersion(n), l = c || isXVersion(a), d = l || isXVersion(s);
      return o === "=" && d && (o = ""), i = "", c ? o === ">" || o === "<" ? "<0.0.0-0" : "*" : o && d ? (l && (a = 0), s = 0, o === ">" ? (o = ">=", l ? (n = Number(n) + 1, a = 0, s = 0) : (a = Number(a) + 1, s = 0)) : o === "<=" && (o = "<", l ? n = Number(n) + 1 : a = Number(a) + 1), o === "<" && (i = "-0"), `${o + n}.${a}.${s}${i}`) : l ? `>=${n}.0.0${i} <${Number(n) + 1}.0.0-0` : d ? `>=${n}.${a}.0${i} <${n}.${Number(a) + 1}.0-0` : r;
    })).join(" ");
  }
  function parseStar(t) {
    return t.trim().replace(parseRegex(star), "");
  }
  function parseGTE0(t) {
    return t.trim().replace(parseRegex(gte0), "");
  }
  function compareAtom(t, e) {
    return t = Number(t) || t, e = Number(e) || e, t > e ? 1 : t === e ? 0 : -1;
  }
  function comparePreRelease(t, e) {
    const { preRelease: r } = t, { preRelease: o } = e;
    if (r === void 0 && o) return 1;
    if (r && o === void 0) return -1;
    if (r === void 0 && o === void 0) return 0;
    for (let n = 0, a = r.length; n <= a; n++) {
      const s = r[n], i = o[n];
      if (s !== i) return s === void 0 && i === void 0 ? 0 : s ? i ? compareAtom(s, i) : -1 : 1;
    }
    return 0;
  }
  function compareVersion(t, e) {
    return compareAtom(t.major, e.major) || compareAtom(t.minor, e.minor) || compareAtom(t.patch, e.patch) || comparePreRelease(t, e);
  }
  function eq(t, e) {
    return t.version === e.version;
  }
  function compare(t, e) {
    switch (t.operator) {
      case "":
      case "=":
        return eq(t, e);
      case ">":
        return compareVersion(t, e) < 0;
      case ">=":
        return eq(t, e) || compareVersion(t, e) < 0;
      case "<":
        return compareVersion(t, e) > 0;
      case "<=":
        return eq(t, e) || compareVersion(t, e) > 0;
      case void 0:
        return true;
      default:
        return false;
    }
  }
  function parseComparatorString(t) {
    return pipe(parseCarets, parseTildes, parseXRanges, parseStar)(t);
  }
  function parseRange(t) {
    return pipe(parseHyphen, parseComparatorTrim, parseTildeTrim, parseCaretTrim)(t.trim()).split(/\s+/).join(" ");
  }
  function satisfy(t, e) {
    if (!t) return false;
    const r = extractComparator(t);
    if (!r) return false;
    const [, o, , n, a, s, i] = r, c = {
      operator: o,
      version: combineVersion(n, a, s, i),
      major: n,
      minor: a,
      patch: s,
      preRelease: i == null ? void 0 : i.split(".")
    }, l = e.split("||");
    for (const d of l) {
      const h = d.trim();
      if (!h || h === "*" || h === "x") return true;
      try {
        const u = parseRange(h);
        if (!u.trim()) return true;
        const p = u.split(" ").map((m) => parseComparatorString(m)).join(" ");
        if (!p.trim()) return true;
        const _ = p.split(/\s+/).map((m) => parseGTE0(m)).filter(Boolean);
        if (_.length === 0) continue;
        let g = true;
        for (const m of _) {
          const y = extractComparator(m);
          if (!y) {
            g = false;
            break;
          }
          const [, E, , b, R, S, M] = y, I = {
            operator: E,
            version: combineVersion(b, R, S, M),
            major: b,
            minor: R,
            patch: S,
            preRelease: M == null ? void 0 : M.split(".")
          };
          if (!compare(I, c)) {
            g = false;
            break;
          }
        }
        if (g) return true;
      } catch (u) {
        console.error(`[semver] Error processing range part "${h}":`, u);
        continue;
      }
    }
    return false;
  }
  function formatShare(t, e, r, o) {
    let n;
    return "get" in t ? n = t.get : "lib" in t ? n = () => Promise.resolve(t.lib) : n = () => Promise.resolve(() => {
      throw new Error(`Can not get shared '${r}'!`);
    }), {
      deps: [],
      useIn: [],
      from: e,
      loading: null,
      ...t,
      shareConfig: {
        requiredVersion: `^${t.version}`,
        singleton: false,
        eager: false,
        strictVersion: false,
        ...t.shareConfig
      },
      get: n,
      loaded: (t == null ? void 0 : t.loaded) || "lib" in t ? true : void 0,
      version: t.version ?? "0",
      scope: Array.isArray(t.scope) ? t.scope : [
        t.scope ?? "default"
      ],
      strategy: (t.strategy ?? o) || "version-first"
    };
  }
  function formatShareConfigs(t, e) {
    const r = e.shared || {}, o = e.name, n = Object.keys(r).reduce((s, i) => {
      const c = arrayOptions(r[i]);
      return s[i] = s[i] || [], c.forEach((l) => {
        s[i].push(formatShare(l, o, i, e.shareStrategy));
      }), s;
    }, {}), a = {
      ...t.shared
    };
    return Object.keys(n).forEach((s) => {
      a[s] ? n[s].forEach((i) => {
        a[s].find((l) => l.version === i.version) || a[s].push(i);
      }) : a[s] = n[s];
    }), {
      shared: a,
      shareInfos: n
    };
  }
  function versionLt(t, e) {
    const r = (o) => {
      if (!Number.isNaN(Number(o))) {
        const a = o.split(".");
        let s = o;
        for (let i = 0; i < 3 - a.length; i++) s += ".0";
        return s;
      }
      return o;
    };
    return !!satisfy(r(t), `<=${r(e)}`);
  }
  const findVersion = (t, e) => {
    const r = e || function(o, n) {
      return versionLt(o, n);
    };
    return Object.keys(t).reduce((o, n) => !o || r(o, n) || o === "0" ? n : o, 0);
  }, isLoaded = (t) => !!t.loaded || typeof t.lib == "function", isLoading = (t) => !!t.loading;
  function findSingletonVersionOrderByVersion(t, e, r) {
    const o = t[e][r], n = function(a, s) {
      return !isLoaded(o[a]) && versionLt(a, s);
    };
    return findVersion(t[e][r], n);
  }
  function findSingletonVersionOrderByLoaded(t, e, r) {
    const o = t[e][r], n = function(a, s) {
      const i = (c) => isLoaded(c) || isLoading(c);
      return i(o[s]) ? i(o[a]) ? !!versionLt(a, s) : true : i(o[a]) ? false : versionLt(a, s);
    };
    return findVersion(t[e][r], n);
  }
  function getFindShareFunction(t) {
    return t === "loaded-first" ? findSingletonVersionOrderByLoaded : findSingletonVersionOrderByVersion;
  }
  function getRegisteredShare(t, e, r, o) {
    if (!t) return;
    const { shareConfig: n, scope: a = DEFAULT_SCOPE, strategy: s } = r, i = Array.isArray(a) ? a : [
      a
    ];
    for (const c of i) if (n && t[c] && t[c][e]) {
      const { requiredVersion: l } = n, h = getFindShareFunction(s)(t, c, e), u = () => {
        if (n.singleton) {
          if (typeof l == "string" && !satisfy(h, l)) {
            const g = `Version ${h} from ${h && t[c][e][h].from} of shared singleton module ${e} does not satisfy the requirement of ${r.from} which needs ${l})`;
            n.strictVersion ? error(g) : warn(g);
          }
          return t[c][e][h];
        } else {
          if (l === false || l === "*" || satisfy(h, l)) return t[c][e][h];
          for (const [g, m] of Object.entries(t[c][e])) if (satisfy(g, l)) return m;
        }
      }, p = {
        shareScopeMap: t,
        scope: c,
        pkgName: e,
        version: h,
        GlobalFederation: Global.__FEDERATION__,
        resolver: u
      };
      return (o.emit(p) || p).resolver();
    }
  }
  function getGlobalShareScope() {
    return Global.__FEDERATION__.__SHARE__;
  }
  function getTargetSharedOptions(t) {
    const { pkgName: e, extraOptions: r, shareInfos: o } = t, n = (s) => {
      if (!s) return;
      const i = {};
      s.forEach((d) => {
        i[d.version] = d;
      });
      const l = findVersion(i, function(d, h) {
        return !isLoaded(i[d]) && versionLt(d, h);
      });
      return i[l];
    }, a = (r == null ? void 0 : r.resolver) ?? n;
    return Object.assign({}, a(o[e]), r == null ? void 0 : r.customShareInfo);
  }
  function getBuilderId$1() {
    return typeof FEDERATION_BUILD_IDENTIFIER < "u" ? FEDERATION_BUILD_IDENTIFIER : "";
  }
  function matchRemoteWithNameAndExpose(t, e) {
    for (const r of t) {
      const o = e.startsWith(r.name);
      let n = e.replace(r.name, "");
      if (o) {
        if (n.startsWith("/")) {
          const i = r.name;
          return n = `.${n}`, {
            pkgNameOrAlias: i,
            expose: n,
            remote: r
          };
        } else if (n === "") return {
          pkgNameOrAlias: r.name,
          expose: ".",
          remote: r
        };
      }
      const a = r.alias && e.startsWith(r.alias);
      let s = r.alias && e.replace(r.alias, "");
      if (r.alias && a) {
        if (s && s.startsWith("/")) {
          const i = r.alias;
          return s = `.${s}`, {
            pkgNameOrAlias: i,
            expose: s,
            remote: r
          };
        } else if (s === "") return {
          pkgNameOrAlias: r.alias,
          expose: ".",
          remote: r
        };
      }
    }
  }
  function matchRemote(t, e) {
    for (const r of t) if (e === r.name || r.alias && e === r.alias) return r;
  }
  function registerPlugins(t, e) {
    const r = getGlobalHostPlugins(), o = [
      e.hooks,
      e.remoteHandler.hooks,
      e.sharedHandler.hooks,
      e.snapshotHandler.hooks,
      e.loaderHook,
      e.bridgeHook
    ];
    return r.length > 0 && r.forEach((n) => {
      (t == null ? void 0 : t.find((a) => a.name !== n.name)) && t.push(n);
    }), t && t.length > 0 && t.forEach((n) => {
      o.forEach((a) => {
        a.applyPlugin(n, e);
      });
    }), t;
  }
  const importCallback = ".then(callbacks[0]).catch(callbacks[1])";
  async function loadEsmEntry({ entry: t, remoteEntryExports: e }) {
    return new Promise((r, o) => {
      try {
        e ? r(e) : typeof FEDERATION_ALLOW_NEW_FUNCTION < "u" ? new Function("callbacks", `import("${t}")${importCallback}`)([
          r,
          o
        ]) : import(t).then(async (m) => {
          await m.__tla;
          return m;
        }).then(r).catch(o);
      } catch (n) {
        o(n);
      }
    });
  }
  async function loadSystemJsEntry({ entry: t, remoteEntryExports: e }) {
    return new Promise((r, o) => {
      try {
        e ? r(e) : typeof __system_context__ > "u" ? System.import(t).then(r).catch(o) : new Function("callbacks", `System.import("${t}")${importCallback}`)([
          r,
          o
        ]);
      } catch (n) {
        o(n);
      }
    });
  }
  function handleRemoteEntryLoaded(t, e, r) {
    const { remoteEntryKey: o, entryExports: n } = getRemoteEntryExports(t, e);
    return assert(n, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_001, errorCodes.runtimeDescMap, {
      remoteName: t,
      remoteEntryUrl: r,
      remoteEntryKey: o
    })), n;
  }
  async function loadEntryScript({ name: t, globalName: e, entry: r, loaderHook: o, getEntryUrl: n }) {
    const { entryExports: a } = getRemoteEntryExports(t, e);
    if (a) return a;
    const s = n ? n(r) : r;
    return sdk.loadScript(s, {
      attrs: {},
      createScriptHook: (i, c) => {
        const l = o.lifecycle.createScript.emit({
          url: i,
          attrs: c
        });
        if (l && (l instanceof HTMLScriptElement || "script" in l || "timeout" in l)) return l;
      }
    }).then(() => handleRemoteEntryLoaded(t, e, r)).catch((i) => {
      throw assert(void 0, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_008, errorCodes.runtimeDescMap, {
        remoteName: t,
        resourceUrl: r
      })), i;
    });
  }
  async function loadEntryDom({ remoteInfo: t, remoteEntryExports: e, loaderHook: r, getEntryUrl: o }) {
    const { entry: n, entryGlobalName: a, name: s, type: i } = t;
    switch (i) {
      case "esm":
      case "module":
        return loadEsmEntry({
          entry: n,
          remoteEntryExports: e
        });
      case "system":
        return loadSystemJsEntry({
          entry: n,
          remoteEntryExports: e
        });
      default:
        return loadEntryScript({
          entry: n,
          globalName: a,
          name: s,
          loaderHook: r,
          getEntryUrl: o
        });
    }
  }
  async function loadEntryNode({ remoteInfo: t, loaderHook: e }) {
    const { entry: r, entryGlobalName: o, name: n, type: a } = t, { entryExports: s } = getRemoteEntryExports(n, o);
    return s || sdk.loadScriptNode(r, {
      attrs: {
        name: n,
        globalName: o,
        type: a
      },
      loaderHook: {
        createScriptHook: (i, c = {}) => {
          const l = e.lifecycle.createScript.emit({
            url: i,
            attrs: c
          });
          if (l && "url" in l) return l;
        }
      }
    }).then(() => handleRemoteEntryLoaded(n, o, r)).catch((i) => {
      throw i;
    });
  }
  function getRemoteEntryUniqueKey(t) {
    const { entry: e, name: r } = t;
    return sdk.composeKeyWithSeparator(r, e);
  }
  async function getRemoteEntry(t) {
    const { origin: e, remoteEntryExports: r, remoteInfo: o, getEntryUrl: n, _inErrorHandling: a = false } = t, s = getRemoteEntryUniqueKey(o);
    if (r) return r;
    if (!globalLoading[s]) {
      const i = e.remoteHandler.hooks.lifecycle.loadEntry, c = e.loaderHook;
      globalLoading[s] = i.emit({
        loaderHook: c,
        remoteInfo: o,
        remoteEntryExports: r
      }).then((l) => l || ((typeof ENV_TARGET < "u" ? ENV_TARGET === "web" : sdk.isBrowserEnv()) ? loadEntryDom({
        remoteInfo: o,
        remoteEntryExports: r,
        loaderHook: c,
        getEntryUrl: n
      }) : loadEntryNode({
        remoteInfo: o,
        loaderHook: c
      }))).catch(async (l) => {
        const d = getRemoteEntryUniqueKey(o);
        if (l instanceof Error && l.message.includes(errorCodes.RUNTIME_008) && !a) {
          const u = (_) => getRemoteEntry({
            ..._,
            _inErrorHandling: true
          }), p = await e.loaderHook.lifecycle.loadEntryError.emit({
            getRemoteEntry: u,
            origin: e,
            remoteInfo: o,
            remoteEntryExports: r,
            globalLoading,
            uniqueKey: d
          });
          if (p) return p;
        }
        throw l;
      });
    }
    return globalLoading[s];
  }
  function getRemoteInfo(t) {
    return {
      ...t,
      entry: "entry" in t ? t.entry : "",
      type: t.type || DEFAULT_REMOTE_TYPE,
      entryGlobalName: t.entryGlobalName || t.name,
      shareScope: t.shareScope || DEFAULT_SCOPE
    };
  }
  function defaultPreloadArgs(t) {
    return {
      resourceCategory: "sync",
      share: true,
      depsRemote: true,
      prefetchInterface: false,
      ...t
    };
  }
  function formatPreloadArgs(t, e) {
    return e.map((r) => {
      const o = matchRemote(t, r.nameOrAlias);
      return assert(o, `Unable to preload ${r.nameOrAlias} as it is not included in ${!o && sdk.safeToString({
        remoteInfo: o,
        remotes: t
      })}`), {
        remote: o,
        preloadConfig: defaultPreloadArgs(r)
      };
    });
  }
  function normalizePreloadExposes(t) {
    return t ? t.map((e) => e === "." ? e : e.startsWith("./") ? e.replace("./", "") : e) : [];
  }
  function preloadAssets(t, e, r, o = true) {
    const { cssAssets: n, jsAssetsWithoutEntry: a, entryAssets: s } = r;
    if (e.options.inBrowser) {
      if (s.forEach((i) => {
        const { moduleInfo: c } = i, l = e.moduleCache.get(t.name);
        getRemoteEntry(l ? {
          origin: e,
          remoteInfo: c,
          remoteEntryExports: l.remoteEntryExports
        } : {
          origin: e,
          remoteInfo: c,
          remoteEntryExports: void 0
        });
      }), o) {
        const i = {
          rel: "preload",
          as: "style"
        };
        n.forEach((c) => {
          const { link: l, needAttach: d } = sdk.createLink({
            url: c,
            cb: () => {
            },
            attrs: i,
            createLinkHook: (h, u) => {
              const p = e.loaderHook.lifecycle.createLink.emit({
                url: h,
                attrs: u
              });
              if (p instanceof HTMLLinkElement) return p;
            }
          });
          d && document.head.appendChild(l);
        });
      } else {
        const i = {
          rel: "stylesheet",
          type: "text/css"
        };
        n.forEach((c) => {
          const { link: l, needAttach: d } = sdk.createLink({
            url: c,
            cb: () => {
            },
            attrs: i,
            createLinkHook: (h, u) => {
              const p = e.loaderHook.lifecycle.createLink.emit({
                url: h,
                attrs: u
              });
              if (p instanceof HTMLLinkElement) return p;
            },
            needDeleteLink: false
          });
          d && document.head.appendChild(l);
        });
      }
      if (o) {
        const i = {
          rel: "preload",
          as: "script"
        };
        a.forEach((c) => {
          const { link: l, needAttach: d } = sdk.createLink({
            url: c,
            cb: () => {
            },
            attrs: i,
            createLinkHook: (h, u) => {
              const p = e.loaderHook.lifecycle.createLink.emit({
                url: h,
                attrs: u
              });
              if (p instanceof HTMLLinkElement) return p;
            }
          });
          d && document.head.appendChild(l);
        });
      } else {
        const i = {
          fetchpriority: "high",
          type: (t == null ? void 0 : t.type) === "module" ? "module" : "text/javascript"
        };
        a.forEach((c) => {
          const { script: l, needAttach: d } = sdk.createScript({
            url: c,
            cb: () => {
            },
            attrs: i,
            createScriptHook: (h, u) => {
              const p = e.loaderHook.lifecycle.createScript.emit({
                url: h,
                attrs: u
              });
              if (p instanceof HTMLScriptElement) return p;
            },
            needDeleteScript: true
          });
          d && document.head.appendChild(l);
        });
      }
    }
  }
  const ShareUtils = {
    getRegisteredShare,
    getGlobalShareScope
  }, GlobalUtils = {
    Global,
    nativeGlobal,
    resetFederationGlobalInfo,
    setGlobalFederationInstance,
    getGlobalFederationConstructor,
    setGlobalFederationConstructor,
    getInfoWithoutType,
    getGlobalSnapshot,
    getTargetSnapshotInfoByModuleInfo,
    getGlobalSnapshotInfoByModuleInfo,
    setGlobalSnapshotInfoByModuleInfo,
    addGlobalSnapshot,
    getRemoteEntryExports,
    registerGlobalPlugins,
    getGlobalHostPlugins,
    getPreloaded,
    setPreloaded
  };
  var helpers = {
    global: GlobalUtils,
    share: ShareUtils,
    utils: {
      matchRemoteWithNameAndExpose,
      preloadAssets,
      getRemoteInfo
    }
  };
  class Module {
    constructor({ remoteInfo: e, host: r }) {
      this.inited = false, this.lib = void 0, this.remoteInfo = e, this.host = r;
    }
    async getEntry() {
      if (this.remoteEntryExports) return this.remoteEntryExports;
      let e;
      return e = await getRemoteEntry({
        origin: this.host,
        remoteInfo: this.remoteInfo,
        remoteEntryExports: this.remoteEntryExports
      }), assert(e, `remoteEntryExports is undefined 
 ${sdk.safeToString(this.remoteInfo)}`), this.remoteEntryExports = e, this.remoteEntryExports;
    }
    async get(e, r, o, n) {
      const { loadFactory: a = true } = o || {
        loadFactory: true
      }, s = await this.getEntry();
      if (!this.inited) {
        const h = this.host.shareScopeMap, u = Array.isArray(this.remoteInfo.shareScope) ? this.remoteInfo.shareScope : [
          this.remoteInfo.shareScope
        ];
        u.length || u.push("default"), u.forEach((y) => {
          h[y] || (h[y] = {});
        });
        const p = h[u[0]], _ = [], g = {
          version: this.remoteInfo.version || "",
          shareScopeKeys: Array.isArray(this.remoteInfo.shareScope) ? u : this.remoteInfo.shareScope || "default"
        };
        Object.defineProperty(g, "shareScopeMap", {
          value: h,
          enumerable: false
        });
        const m = await this.host.hooks.lifecycle.beforeInitContainer.emit({
          shareScope: p,
          remoteEntryInitOptions: g,
          initScope: _,
          remoteInfo: this.remoteInfo,
          origin: this.host
        });
        typeof (s == null ? void 0 : s.init) > "u" && error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_002, errorCodes.runtimeDescMap, {
          hostName: this.host.name,
          remoteName: this.remoteInfo.name,
          remoteEntryUrl: this.remoteInfo.entry,
          remoteEntryKey: this.remoteInfo.entryGlobalName
        })), await s.init(m.shareScope, m.initScope, m.remoteEntryInitOptions), await this.host.hooks.lifecycle.initContainer.emit({
          ...m,
          id: e,
          remoteSnapshot: n,
          remoteEntryExports: s
        });
      }
      this.lib = s, this.inited = true;
      let i;
      i = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
        remoteEntryExports: s,
        expose: r,
        moduleInfo: this.remoteInfo
      }), i || (i = await s.get(r)), assert(i, `${getFMId(this.remoteInfo)} remote don't export ${r}.`);
      const c = processModuleAlias(this.remoteInfo.name, r), l = this.wraperFactory(i, c);
      return a ? await l() : l;
    }
    wraperFactory(e, r) {
      function o(n, a) {
        n && typeof n == "object" && Object.isExtensible(n) && !Object.getOwnPropertyDescriptor(n, /* @__PURE__ */ Symbol.for("mf_module_id")) && Object.defineProperty(n, /* @__PURE__ */ Symbol.for("mf_module_id"), {
          value: a,
          enumerable: false
        });
      }
      return e instanceof Promise ? async () => {
        const n = await e();
        return o(n, r), n;
      } : () => {
        const n = e();
        return o(n, r), n;
      };
    }
  }
  class SyncHook {
    constructor(e) {
      this.type = "", this.listeners = /* @__PURE__ */ new Set(), e && (this.type = e);
    }
    on(e) {
      typeof e == "function" && this.listeners.add(e);
    }
    once(e) {
      const r = this;
      this.on(function o(...n) {
        return r.remove(o), e.apply(null, n);
      });
    }
    emit(...e) {
      let r;
      return this.listeners.size > 0 && this.listeners.forEach((o) => {
        r = o(...e);
      }), r;
    }
    remove(e) {
      this.listeners.delete(e);
    }
    removeAll() {
      this.listeners.clear();
    }
  }
  class AsyncHook extends SyncHook {
    emit(...e) {
      let r;
      const o = Array.from(this.listeners);
      if (o.length > 0) {
        let n = 0;
        const a = (s) => s === false ? false : n < o.length ? Promise.resolve(o[n++].apply(null, e)).then(a) : s;
        r = a();
      }
      return Promise.resolve(r);
    }
  }
  function checkReturnData(t, e) {
    if (!isObject(e)) return false;
    if (t !== e) {
      for (const r in t) if (!(r in e)) return false;
    }
    return true;
  }
  class SyncWaterfallHook extends SyncHook {
    constructor(e) {
      super(), this.onerror = error, this.type = e;
    }
    emit(e) {
      isObject(e) || error(`The data for the "${this.type}" hook should be an object.`);
      for (const r of this.listeners) try {
        const o = r(e);
        if (checkReturnData(e, o)) e = o;
        else {
          this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
          break;
        }
      } catch (o) {
        warn(o), this.onerror(o);
      }
      return e;
    }
  }
  class AsyncWaterfallHook extends SyncHook {
    constructor(e) {
      super(), this.onerror = error, this.type = e;
    }
    emit(e) {
      isObject(e) || error(`The response data for the "${this.type}" hook must be an object.`);
      const r = Array.from(this.listeners);
      if (r.length > 0) {
        let o = 0;
        const n = (s) => (warn(s), this.onerror(s), e), a = (s) => {
          if (checkReturnData(e, s)) {
            if (e = s, o < r.length) try {
              return Promise.resolve(r[o++](e)).then(a, n);
            } catch (i) {
              return n(i);
            }
          } else this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
          return e;
        };
        return Promise.resolve(a(e));
      }
      return Promise.resolve(e);
    }
  }
  class PluginSystem {
    constructor(e) {
      this.registerPlugins = {}, this.lifecycle = e, this.lifecycleKeys = Object.keys(e);
    }
    applyPlugin(e, r) {
      var _a;
      assert(isPlainObject(e), "Plugin configuration is invalid.");
      const o = e.name;
      assert(o, "A name must be provided by the plugin."), this.registerPlugins[o] || (this.registerPlugins[o] = e, (_a = e.apply) == null ? void 0 : _a.call(e, r), Object.keys(this.lifecycle).forEach((n) => {
        const a = e[n];
        a && this.lifecycle[n].on(a);
      }));
    }
    removePlugin(e) {
      assert(e, "A name is required.");
      const r = this.registerPlugins[e];
      assert(r, `The plugin "${e}" is not registered.`), Object.keys(r).forEach((o) => {
        o !== "name" && this.lifecycle[o].remove(r[o]);
      });
    }
  }
  function assignRemoteInfo(t, e) {
    const r = getRemoteEntryInfoFromSnapshot(e);
    r.url || error(`The attribute remoteEntry of ${t.name} must not be undefined.`);
    let o = sdk.getResourceUrl(e, r.url);
    !sdk.isBrowserEnv() && !o.startsWith("http") && (o = `https:${o}`), t.type = r.type, t.entryGlobalName = r.globalName, t.entry = o, t.version = e.version, t.buildVersion = e.buildVersion;
  }
  function snapshotPlugin() {
    return {
      name: "snapshot-plugin",
      async afterResolve(t) {
        const { remote: e, pkgNameOrAlias: r, expose: o, origin: n, remoteInfo: a, id: s } = t;
        if (!isRemoteInfoWithEntry(e) || !isPureRemoteEntry(e)) {
          const { remoteSnapshot: i, globalSnapshot: c } = await n.snapshotHandler.loadRemoteSnapshotInfo({
            moduleInfo: e,
            id: s
          });
          assignRemoteInfo(a, i);
          const l = {
            remote: e,
            preloadConfig: {
              nameOrAlias: r,
              exposes: [
                o
              ],
              resourceCategory: "sync",
              share: false,
              depsRemote: false
            }
          }, d = await n.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
            origin: n,
            preloadOptions: l,
            remoteInfo: a,
            remote: e,
            remoteSnapshot: i,
            globalSnapshot: c
          });
          return d && preloadAssets(a, n, d, false), {
            ...t,
            remoteSnapshot: i
          };
        }
        return t;
      }
    };
  }
  function splitId(t) {
    const e = t.split(":");
    return e.length === 1 ? {
      name: e[0],
      version: void 0
    } : e.length === 2 ? {
      name: e[0],
      version: e[1]
    } : {
      name: e[1],
      version: e[2]
    };
  }
  function traverseModuleInfo(t, e, r, o, n = {}, a) {
    const s = getFMId(e), { value: i } = getInfoWithoutType(t, s), c = a || i;
    if (c && !sdk.isManifestProvider(c) && (r(c, e, o), c.remotesInfo)) {
      const l = Object.keys(c.remotesInfo);
      for (const d of l) {
        if (n[d]) continue;
        n[d] = true;
        const h = splitId(d), u = c.remotesInfo[d];
        traverseModuleInfo(t, {
          name: h.name,
          version: u.matchedVersion
        }, r, false, n, void 0);
      }
    }
  }
  const isExisted = (t, e) => document.querySelector(`${t}[${t === "link" ? "href" : "src"}="${e}"]`);
  function generatePreloadAssets(t, e, r, o, n) {
    const a = [], s = [], i = [], c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), { options: d } = t, { preloadConfig: h } = e, { depsRemote: u } = h;
    if (traverseModuleInfo(o, r, (m, y, E) => {
      var _a;
      let b;
      if (E) b = h;
      else if (Array.isArray(u)) {
        const N = u.find((T) => T.nameOrAlias === y.name || T.nameOrAlias === y.alias);
        if (!N) return;
        b = defaultPreloadArgs(N);
      } else if (u === true) b = h;
      else return;
      const R = sdk.getResourceUrl(m, getRemoteEntryInfoFromSnapshot(m).url);
      R && i.push({
        name: y.name,
        moduleInfo: {
          name: y.name,
          entry: R,
          type: "remoteEntryType" in m ? m.remoteEntryType : "global",
          entryGlobalName: "globalName" in m ? m.globalName : y.name,
          shareScope: "",
          version: "version" in m ? m.version : void 0
        },
        url: R
      });
      let S = "modules" in m ? m.modules : [];
      const M = normalizePreloadExposes(b.exposes);
      M.length && "modules" in m && (S = (_a = m == null ? void 0 : m.modules) == null ? void 0 : _a.reduce((N, T) => ((M == null ? void 0 : M.indexOf(T.moduleName)) !== -1 && N.push(T), N), []));
      function I(N) {
        const T = N.map(($) => sdk.getResourceUrl(m, $));
        return b.filter ? T.filter(b.filter) : T;
      }
      if (S) {
        const N = S.length;
        for (let T = 0; T < N; T++) {
          const $ = S[T], A = `${y.name}/${$.moduleName}`;
          t.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
            id: $.moduleName === "." ? y.name : A,
            name: y.name,
            remoteSnapshot: m,
            preloadConfig: b,
            remote: y,
            origin: t
          }), !getPreloaded(A) && (b.resourceCategory === "all" ? (a.push(...I($.assets.css.async)), a.push(...I($.assets.css.sync)), s.push(...I($.assets.js.async)), s.push(...I($.assets.js.sync))) : (b.resourceCategory = "sync") && (a.push(...I($.assets.css.sync)), s.push(...I($.assets.js.sync))), setPreloaded(A));
        }
      }
    }, true, {}, n), n.shared && n.shared.length > 0) {
      const m = (y, E) => {
        const b = getRegisteredShare(t.shareScopeMap, E.sharedName, y, t.sharedHandler.hooks.lifecycle.resolveShare);
        b && typeof b.lib == "function" && (E.assets.js.sync.forEach((R) => {
          c.add(R);
        }), E.assets.css.sync.forEach((R) => {
          l.add(R);
        }));
      };
      n.shared.forEach((y) => {
        var _a;
        const E = (_a = d.shared) == null ? void 0 : _a[y.sharedName];
        if (!E) return;
        const b = y.version ? E.find((S) => S.version === y.version) : E;
        if (!b) return;
        arrayOptions(b).forEach((S) => {
          m(S, y);
        });
      });
    }
    const _ = s.filter((m) => !c.has(m) && !isExisted("script", m));
    return {
      cssAssets: a.filter((m) => !l.has(m) && !isExisted("link", m)),
      jsAssetsWithoutEntry: _,
      entryAssets: i.filter((m) => !isExisted("script", m.url))
    };
  }
  const generatePreloadAssetsPlugin = function() {
    return {
      name: "generate-preload-assets-plugin",
      async generatePreloadAssets(t) {
        const { origin: e, preloadOptions: r, remoteInfo: o, remote: n, globalSnapshot: a, remoteSnapshot: s } = t;
        return sdk.isBrowserEnv() ? isRemoteInfoWithEntry(n) && isPureRemoteEntry(n) ? {
          cssAssets: [],
          jsAssetsWithoutEntry: [],
          entryAssets: [
            {
              name: n.name,
              url: n.entry,
              moduleInfo: {
                name: o.name,
                entry: n.entry,
                type: o.type || "global",
                entryGlobalName: "",
                shareScope: ""
              }
            }
          ]
        } : (assignRemoteInfo(o, s), generatePreloadAssets(e, r, o, a, s)) : {
          cssAssets: [],
          jsAssetsWithoutEntry: [],
          entryAssets: []
        };
      }
    };
  };
  function getGlobalRemoteInfo(t, e) {
    const r = getGlobalSnapshotInfoByModuleInfo({
      name: e.name,
      version: e.options.version
    }), o = r && "remotesInfo" in r && r.remotesInfo && getInfoWithoutType(r.remotesInfo, t.name).value;
    return o && o.matchedVersion ? {
      hostGlobalSnapshot: r,
      globalSnapshot: getGlobalSnapshot(),
      remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
        name: t.name,
        version: o.matchedVersion
      })
    } : {
      hostGlobalSnapshot: void 0,
      globalSnapshot: getGlobalSnapshot(),
      remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
        name: t.name,
        version: "version" in t ? t.version : void 0
      })
    };
  }
  class SnapshotHandler {
    constructor(e) {
      this.loadingHostSnapshot = null, this.manifestCache = /* @__PURE__ */ new Map(), this.hooks = new PluginSystem({
        beforeLoadRemoteSnapshot: new AsyncHook("beforeLoadRemoteSnapshot"),
        loadSnapshot: new AsyncWaterfallHook("loadGlobalSnapshot"),
        loadRemoteSnapshot: new AsyncWaterfallHook("loadRemoteSnapshot"),
        afterLoadSnapshot: new AsyncWaterfallHook("afterLoadSnapshot")
      }), this.manifestLoading = Global.__FEDERATION__.__MANIFEST_LOADING__, this.HostInstance = e, this.loaderHook = e.loaderHook;
    }
    async loadRemoteSnapshotInfo({ moduleInfo: e, id: r, expose: o }) {
      const { options: n } = this.HostInstance;
      await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
        options: n,
        moduleInfo: e
      });
      let a = getGlobalSnapshotInfoByModuleInfo({
        name: this.HostInstance.options.name,
        version: this.HostInstance.options.version
      });
      a || (a = {
        version: this.HostInstance.options.version || "",
        remoteEntry: "",
        remotesInfo: {}
      }, addGlobalSnapshot({
        [this.HostInstance.options.name]: a
      })), a && "remotesInfo" in a && !getInfoWithoutType(a.remotesInfo, e.name).value && ("version" in e || "entry" in e) && (a.remotesInfo = {
        ...a == null ? void 0 : a.remotesInfo,
        [e.name]: {
          matchedVersion: "version" in e ? e.version : e.entry
        }
      });
      const { hostGlobalSnapshot: s, remoteSnapshot: i, globalSnapshot: c } = this.getGlobalRemoteInfo(e), { remoteSnapshot: l, globalSnapshot: d } = await this.hooks.lifecycle.loadSnapshot.emit({
        options: n,
        moduleInfo: e,
        hostGlobalSnapshot: s,
        remoteSnapshot: i,
        globalSnapshot: c
      });
      let h, u;
      if (l) if (sdk.isManifestProvider(l)) {
        const p = sdk.isBrowserEnv() ? l.remoteEntry : l.ssrRemoteEntry || l.remoteEntry || "", _ = await this.getManifestJson(p, e, {}), g = setGlobalSnapshotInfoByModuleInfo({
          ...e,
          entry: p
        }, _);
        h = _, u = g;
      } else {
        const { remoteSnapshot: p } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo: e,
          remoteSnapshot: l,
          from: "global"
        });
        h = p, u = d;
      }
      else if (isRemoteInfoWithEntry(e)) {
        const p = await this.getManifestJson(e.entry, e, {}), _ = setGlobalSnapshotInfoByModuleInfo(e, p), { remoteSnapshot: g } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo: e,
          remoteSnapshot: p,
          from: "global"
        });
        h = g, u = _;
      } else error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_007, errorCodes.runtimeDescMap, {
        hostName: e.name,
        hostVersion: e.version,
        globalSnapshot: JSON.stringify(d)
      }));
      return await this.hooks.lifecycle.afterLoadSnapshot.emit({
        id: r,
        host: this.HostInstance,
        options: n,
        moduleInfo: e,
        remoteSnapshot: h
      }), {
        remoteSnapshot: h,
        globalSnapshot: u
      };
    }
    getGlobalRemoteInfo(e) {
      return getGlobalRemoteInfo(e, this.HostInstance);
    }
    async getManifestJson(e, r, o) {
      const n = async () => {
        let s = this.manifestCache.get(e);
        if (s) return s;
        try {
          let i = await this.loaderHook.lifecycle.fetch.emit(e, {});
          (!i || !(i instanceof Response)) && (i = await fetch(e, {})), s = await i.json();
        } catch (i) {
          s = await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
            id: e,
            error: i,
            from: "runtime",
            lifecycle: "afterResolve",
            origin: this.HostInstance
          }), s || (delete this.manifestLoading[e], error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_003, errorCodes.runtimeDescMap, {
            manifestUrl: e,
            moduleName: r.name,
            hostName: this.HostInstance.options.name
          }, `${i}`)));
        }
        return assert(s.metaData && s.exposes && s.shared, `${e} is not a federation manifest`), this.manifestCache.set(e, s), s;
      }, a = async () => {
        const s = await n(), i = sdk.generateSnapshotFromManifest(s, {
          version: e
        }), { remoteSnapshot: c } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo: r,
          manifestJson: s,
          remoteSnapshot: i,
          manifestUrl: e,
          from: "manifest"
        });
        return c;
      };
      return this.manifestLoading[e] || (this.manifestLoading[e] = a().then((s) => s)), this.manifestLoading[e];
    }
  }
  class SharedHandler {
    constructor(e) {
      this.hooks = new PluginSystem({
        afterResolve: new AsyncWaterfallHook("afterResolve"),
        beforeLoadShare: new AsyncWaterfallHook("beforeLoadShare"),
        loadShare: new AsyncHook(),
        resolveShare: new SyncWaterfallHook("resolveShare"),
        initContainerShareScopeMap: new SyncWaterfallHook("initContainerShareScopeMap")
      }), this.host = e, this.shareScopeMap = {}, this.initTokens = {}, this._setGlobalShareScopeMap(e.options);
    }
    registerShared(e, r) {
      const { shareInfos: o, shared: n } = formatShareConfigs(e, r);
      return Object.keys(o).forEach((s) => {
        o[s].forEach((c) => {
          c.scope.forEach((l) => {
            var _a;
            ((_a = this.shareScopeMap[l]) == null ? void 0 : _a[s]) || this.setShared({
              pkgName: s,
              lib: c.lib,
              get: c.get,
              loaded: c.loaded || !!c.lib,
              shared: c,
              from: r.name
            });
          });
        });
      }), {
        shareInfos: o,
        shared: n
      };
    }
    async loadShare(e, r) {
      const { host: o } = this, n = getTargetSharedOptions({
        pkgName: e,
        extraOptions: r,
        shareInfos: o.options.shared
      });
      (n == null ? void 0 : n.scope) && await Promise.all(n.scope.map(async (l) => {
        await Promise.all(this.initializeSharing(l, {
          strategy: n.strategy
        }));
      }));
      const a = await this.hooks.lifecycle.beforeLoadShare.emit({
        pkgName: e,
        shareInfo: n,
        shared: o.options.shared,
        origin: o
      }), { shareInfo: s } = a;
      assert(s, `Cannot find ${e} Share in the ${o.options.name}. Please ensure that the ${e} Share parameters have been injected`);
      const i = getRegisteredShare(this.shareScopeMap, e, s, this.hooks.lifecycle.resolveShare), c = (l) => {
        l.useIn || (l.useIn = []), addUniqueItem(l.useIn, o.options.name);
      };
      if (i && i.lib) return c(i), i.lib;
      if (i && i.loading && !i.loaded) {
        const l = await i.loading;
        return i.loaded = true, i.lib || (i.lib = l), c(i), l;
      } else if (i) {
        const d = (async () => {
          const h = await i.get();
          return c(i), i.loaded = true, i.lib = h, h;
        })();
        return this.setShared({
          pkgName: e,
          loaded: false,
          shared: i,
          from: o.options.name,
          lib: null,
          loading: d
        }), d;
      } else {
        if (r == null ? void 0 : r.customShareInfo) return false;
        const d = (async () => {
          const h = await s.get();
          s.lib = h, s.loaded = true, c(s);
          const u = getRegisteredShare(this.shareScopeMap, e, s, this.hooks.lifecycle.resolveShare);
          return u && (u.lib = h, u.loaded = true, u.from = s.from), h;
        })();
        return this.setShared({
          pkgName: e,
          loaded: false,
          shared: s,
          from: o.options.name,
          lib: null,
          loading: d
        }), d;
      }
    }
    initializeSharing(e = DEFAULT_SCOPE, r) {
      const { host: o } = this, n = r == null ? void 0 : r.from, a = r == null ? void 0 : r.strategy;
      let s = r == null ? void 0 : r.initScope;
      const i = [];
      if (n !== "build") {
        const { initTokens: _ } = this;
        s || (s = []);
        let g = _[e];
        if (g || (g = _[e] = {
          from: this.host.name
        }), s.indexOf(g) >= 0) return i;
        s.push(g);
      }
      const c = this.shareScopeMap, l = o.options.name;
      c[e] || (c[e] = {});
      const d = c[e], h = (_, g) => {
        var _a;
        const { version: m, eager: y } = g;
        d[_] = d[_] || {};
        const E = d[_], b = E[m], R = !!(b && (b.eager || ((_a = b.shareConfig) == null ? void 0 : _a.eager)));
        (!b || b.strategy !== "loaded-first" && !b.loaded && (!y != !R ? y : l > b.from)) && (E[m] = g);
      }, u = (_) => _ && _.init && _.init(c[e], s), p = async (_) => {
        const { module: g } = await o.remoteHandler.getRemoteModuleAndOptions({
          id: _
        });
        if (g.getEntry) {
          let m;
          try {
            m = await g.getEntry();
          } catch (y) {
            m = await o.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
              id: _,
              error: y,
              from: "runtime",
              lifecycle: "beforeLoadShare",
              origin: o
            });
          }
          g.inited || (await u(m), g.inited = true);
        }
      };
      return Object.keys(o.options.shared).forEach((_) => {
        o.options.shared[_].forEach((m) => {
          m.scope.includes(e) && h(_, m);
        });
      }), (o.options.shareStrategy === "version-first" || a === "version-first") && o.options.remotes.forEach((_) => {
        _.shareScope === e && i.push(p(_.name));
      }), i;
    }
    loadShareSync(e, r) {
      const { host: o } = this, n = getTargetSharedOptions({
        pkgName: e,
        extraOptions: r,
        shareInfos: o.options.shared
      });
      (n == null ? void 0 : n.scope) && n.scope.forEach((i) => {
        this.initializeSharing(i, {
          strategy: n.strategy
        });
      });
      const a = getRegisteredShare(this.shareScopeMap, e, n, this.hooks.lifecycle.resolveShare), s = (i) => {
        i.useIn || (i.useIn = []), addUniqueItem(i.useIn, o.options.name);
      };
      if (a) {
        if (typeof a.lib == "function") return s(a), a.loaded || (a.loaded = true, a.from === o.options.name && (n.loaded = true)), a.lib;
        if (typeof a.get == "function") {
          const i = a.get();
          if (!(i instanceof Promise)) return s(a), this.setShared({
            pkgName: e,
            loaded: true,
            from: o.options.name,
            lib: i,
            shared: a
          }), i;
        }
      }
      if (n.lib) return n.loaded || (n.loaded = true), n.lib;
      if (n.get) {
        const i = n.get();
        if (i instanceof Promise) {
          const c = (r == null ? void 0 : r.from) === "build" ? errorCodes.RUNTIME_005 : errorCodes.RUNTIME_006;
          throw new Error(errorCodes.getShortErrorMsg(c, errorCodes.runtimeDescMap, {
            hostName: o.options.name,
            sharedPkgName: e
          }));
        }
        return n.lib = i, this.setShared({
          pkgName: e,
          loaded: true,
          from: o.options.name,
          lib: n.lib,
          shared: n
        }), n.lib;
      }
      throw new Error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_006, errorCodes.runtimeDescMap, {
        hostName: o.options.name,
        sharedPkgName: e
      }));
    }
    initShareScopeMap(e, r, o = {}) {
      const { host: n } = this;
      this.shareScopeMap[e] = r, this.hooks.lifecycle.initContainerShareScopeMap.emit({
        shareScope: r,
        options: n.options,
        origin: n,
        scopeName: e,
        hostShareScopeMap: o.hostShareScopeMap
      });
    }
    setShared({ pkgName: e, shared: r, from: o, lib: n, loading: a, loaded: s, get: i }) {
      const { version: c, scope: l = "default", ...d } = r;
      (Array.isArray(l) ? l : [
        l
      ]).forEach((u) => {
        if (this.shareScopeMap[u] || (this.shareScopeMap[u] = {}), this.shareScopeMap[u][e] || (this.shareScopeMap[u][e] = {}), !this.shareScopeMap[u][e][c]) {
          this.shareScopeMap[u][e][c] = {
            version: c,
            scope: [
              u
            ],
            ...d,
            lib: n,
            loaded: s,
            loading: a
          }, i && (this.shareScopeMap[u][e][c].get = i);
          return;
        }
        const p = this.shareScopeMap[u][e][c];
        a && !p.loading && (p.loading = a), s && !p.loaded && (p.loaded = s), o && p.from !== o && (p.from = o);
      });
    }
    _setGlobalShareScopeMap(e) {
      const r = getGlobalShareScope(), o = e.id || e.name;
      o && !r[o] && (r[o] = this.shareScopeMap);
    }
  }
  class RemoteHandler {
    constructor(e) {
      this.hooks = new PluginSystem({
        beforeRegisterRemote: new SyncWaterfallHook("beforeRegisterRemote"),
        registerRemote: new SyncWaterfallHook("registerRemote"),
        beforeRequest: new AsyncWaterfallHook("beforeRequest"),
        onLoad: new AsyncHook("onLoad"),
        handlePreloadModule: new SyncHook("handlePreloadModule"),
        errorLoadRemote: new AsyncHook("errorLoadRemote"),
        beforePreloadRemote: new AsyncHook("beforePreloadRemote"),
        generatePreloadAssets: new AsyncHook("generatePreloadAssets"),
        afterPreloadRemote: new AsyncHook(),
        loadEntry: new AsyncHook()
      }), this.host = e, this.idToRemoteMap = {};
    }
    formatAndRegisterRemote(e, r) {
      return (r.remotes || []).reduce((n, a) => (this.registerRemote(a, n, {
        force: false
      }), n), e.remotes);
    }
    setIdToRemoteMap(e, r) {
      const { remote: o, expose: n } = r, { name: a, alias: s } = o;
      if (this.idToRemoteMap[e] = {
        name: o.name,
        expose: n
      }, s && e.startsWith(a)) {
        const i = e.replace(a, s);
        this.idToRemoteMap[i] = {
          name: o.name,
          expose: n
        };
        return;
      }
      if (s && e.startsWith(s)) {
        const i = e.replace(s, a);
        this.idToRemoteMap[i] = {
          name: o.name,
          expose: n
        };
      }
    }
    async loadRemote(e, r) {
      const { host: o } = this;
      try {
        const { loadFactory: n = true } = r || {
          loadFactory: true
        }, { module: a, moduleOptions: s, remoteMatchInfo: i } = await this.getRemoteModuleAndOptions({
          id: e
        }), { pkgNameOrAlias: c, remote: l, expose: d, id: h, remoteSnapshot: u } = i, p = await a.get(h, d, r, u), _ = await this.hooks.lifecycle.onLoad.emit({
          id: h,
          pkgNameOrAlias: c,
          expose: d,
          exposeModule: n ? p : void 0,
          exposeModuleFactory: n ? void 0 : p,
          remote: l,
          options: s,
          moduleInstance: a,
          origin: o
        });
        return this.setIdToRemoteMap(e, i), typeof _ == "function" ? _ : p;
      } catch (n) {
        const { from: a = "runtime" } = r || {
          from: "runtime"
        }, s = await this.hooks.lifecycle.errorLoadRemote.emit({
          id: e,
          error: n,
          from: a,
          lifecycle: "onLoad",
          origin: o
        });
        if (!s) throw n;
        return s;
      }
    }
    async preloadRemote(e) {
      const { host: r } = this;
      await this.hooks.lifecycle.beforePreloadRemote.emit({
        preloadOps: e,
        options: r.options,
        origin: r
      });
      const o = formatPreloadArgs(r.options.remotes, e);
      await Promise.all(o.map(async (n) => {
        const { remote: a } = n, s = getRemoteInfo(a), { globalSnapshot: i, remoteSnapshot: c } = await r.snapshotHandler.loadRemoteSnapshotInfo({
          moduleInfo: a
        }), l = await this.hooks.lifecycle.generatePreloadAssets.emit({
          origin: r,
          preloadOptions: n,
          remote: a,
          remoteInfo: s,
          globalSnapshot: i,
          remoteSnapshot: c
        });
        l && preloadAssets(s, r, l);
      }));
    }
    registerRemotes(e, r) {
      const { host: o } = this;
      e.forEach((n) => {
        this.registerRemote(n, o.options.remotes, {
          force: r == null ? void 0 : r.force
        });
      });
    }
    async getRemoteModuleAndOptions(e) {
      const { host: r } = this, { id: o } = e;
      let n;
      try {
        n = await this.hooks.lifecycle.beforeRequest.emit({
          id: o,
          options: r.options,
          origin: r
        });
      } catch (_) {
        if (n = await this.hooks.lifecycle.errorLoadRemote.emit({
          id: o,
          options: r.options,
          origin: r,
          from: "runtime",
          error: _,
          lifecycle: "beforeRequest"
        }), !n) throw _;
      }
      const { id: a } = n, s = matchRemoteWithNameAndExpose(r.options.remotes, a);
      assert(s, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_004, errorCodes.runtimeDescMap, {
        hostName: r.options.name,
        requestId: a
      }));
      const { remote: i } = s, c = getRemoteInfo(i), l = await r.sharedHandler.hooks.lifecycle.afterResolve.emit({
        id: a,
        ...s,
        options: r.options,
        origin: r,
        remoteInfo: c
      }), { remote: d, expose: h } = l;
      assert(d && h, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${a}.`);
      let u = r.moduleCache.get(d.name);
      const p = {
        host: r,
        remoteInfo: c
      };
      return u || (u = new Module(p), r.moduleCache.set(d.name, u)), {
        module: u,
        moduleOptions: p,
        remoteMatchInfo: l
      };
    }
    registerRemote(e, r, o) {
      const { host: n } = this, a = () => {
        if (e.alias) {
          const i = r.find((c) => {
            var _a;
            return e.alias && (c.name.startsWith(e.alias) || ((_a = c.alias) == null ? void 0 : _a.startsWith(e.alias)));
          });
          assert(!i, `The alias ${e.alias} of remote ${e.name} is not allowed to be the prefix of ${i && i.name} name or alias`);
        }
        "entry" in e && sdk.isBrowserEnv() && !e.entry.startsWith("http") && (e.entry = new URL(e.entry, window.location.origin).href), e.shareScope || (e.shareScope = DEFAULT_SCOPE), e.type || (e.type = DEFAULT_REMOTE_TYPE);
      };
      this.hooks.lifecycle.beforeRegisterRemote.emit({
        remote: e,
        origin: n
      });
      const s = r.find((i) => i.name === e.name);
      if (!s) a(), r.push(e), this.hooks.lifecycle.registerRemote.emit({
        remote: e,
        origin: n
      });
      else {
        const i = [
          `The remote "${e.name}" is already registered.`,
          "Please note that overriding it may cause unexpected errors."
        ];
        (o == null ? void 0 : o.force) && (this.removeRemote(s), a(), r.push(e), this.hooks.lifecycle.registerRemote.emit({
          remote: e,
          origin: n
        }), sdk.warn(i.join(" ")));
      }
    }
    removeRemote(e) {
      var _a;
      try {
        const { host: r } = this, { name: o } = e, n = r.options.remotes.findIndex((s) => s.name === o);
        n !== -1 && r.options.remotes.splice(n, 1);
        const a = r.moduleCache.get(e.name);
        if (a) {
          const s = a.remoteInfo, i = s.entryGlobalName;
          CurrentGlobal[i] && (((_a = Object.getOwnPropertyDescriptor(CurrentGlobal, i)) == null ? void 0 : _a.configurable) ? delete CurrentGlobal[i] : CurrentGlobal[i] = void 0);
          const c = getRemoteEntryUniqueKey(a.remoteInfo);
          globalLoading[c] && delete globalLoading[c], r.snapshotHandler.manifestCache.delete(s.entry);
          let l = s.buildVersion ? sdk.composeKeyWithSeparator(s.name, s.buildVersion) : s.name;
          const d = CurrentGlobal.__FEDERATION__.__INSTANCES__.findIndex((u) => s.buildVersion ? u.options.id === l : u.name === l);
          if (d !== -1) {
            const u = CurrentGlobal.__FEDERATION__.__INSTANCES__[d];
            l = u.options.id || l;
            const p = getGlobalShareScope();
            let _ = true;
            const g = [];
            Object.keys(p).forEach((m) => {
              const y = p[m];
              y && Object.keys(y).forEach((E) => {
                const b = y[E];
                b && Object.keys(b).forEach((R) => {
                  const S = b[R];
                  S && Object.keys(S).forEach((M) => {
                    const I = S[M];
                    I && typeof I == "object" && I.from === s.name && (I.loaded || I.loading ? (I.useIn = I.useIn.filter((N) => N !== s.name), I.useIn.length ? _ = false : g.push([
                      m,
                      E,
                      R,
                      M
                    ])) : g.push([
                      m,
                      E,
                      R,
                      M
                    ]));
                  });
                });
              });
            }), _ && (u.shareScopeMap = {}, delete p[l]), g.forEach(([m, y, E, b]) => {
              var _a2, _b, _c;
              (_c = (_b = (_a2 = p[m]) == null ? void 0 : _a2[y]) == null ? void 0 : _b[E]) == null ? true : delete _c[b];
            }), CurrentGlobal.__FEDERATION__.__INSTANCES__.splice(d, 1);
          }
          const { hostGlobalSnapshot: h } = getGlobalRemoteInfo(e, r);
          if (h) {
            const u = h && "remotesInfo" in h && h.remotesInfo && getInfoWithoutType(h.remotesInfo, e.name).key;
            u && (delete h.remotesInfo[u], Global.__FEDERATION__.__MANIFEST_LOADING__[u] && delete Global.__FEDERATION__.__MANIFEST_LOADING__[u]);
          }
          r.moduleCache.delete(e.name);
        }
      } catch (r) {
        logger.log("removeRemote fail: ", r);
      }
    }
  }
  const USE_SNAPSHOT = typeof FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN == "boolean" ? !FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN : true;
  class ModuleFederation {
    constructor(e) {
      this.hooks = new PluginSystem({
        beforeInit: new SyncWaterfallHook("beforeInit"),
        init: new SyncHook(),
        beforeInitContainer: new AsyncWaterfallHook("beforeInitContainer"),
        initContainer: new AsyncWaterfallHook("initContainer")
      }), this.version = "0.21.6", this.moduleCache = /* @__PURE__ */ new Map(), this.loaderHook = new PluginSystem({
        getModuleInfo: new SyncHook(),
        createScript: new SyncHook(),
        createLink: new SyncHook(),
        fetch: new AsyncHook(),
        loadEntryError: new AsyncHook(),
        getModuleFactory: new AsyncHook()
      }), this.bridgeHook = new PluginSystem({
        beforeBridgeRender: new SyncHook(),
        afterBridgeRender: new SyncHook(),
        beforeBridgeDestroy: new SyncHook(),
        afterBridgeDestroy: new SyncHook()
      });
      const r = USE_SNAPSHOT ? [
        snapshotPlugin(),
        generatePreloadAssetsPlugin()
      ] : [], o = {
        id: getBuilderId$1(),
        name: e.name,
        plugins: r,
        remotes: [],
        shared: {},
        inBrowser: sdk.isBrowserEnv()
      };
      this.name = e.name, this.options = o, this.snapshotHandler = new SnapshotHandler(this), this.sharedHandler = new SharedHandler(this), this.remoteHandler = new RemoteHandler(this), this.shareScopeMap = this.sharedHandler.shareScopeMap, this.registerPlugins([
        ...o.plugins,
        ...e.plugins || []
      ]), this.options = this.formatOptions(o, e);
    }
    initOptions(e) {
      this.registerPlugins(e.plugins);
      const r = this.formatOptions(this.options, e);
      return this.options = r, r;
    }
    async loadShare(e, r) {
      return this.sharedHandler.loadShare(e, r);
    }
    loadShareSync(e, r) {
      return this.sharedHandler.loadShareSync(e, r);
    }
    initializeSharing(e = DEFAULT_SCOPE, r) {
      return this.sharedHandler.initializeSharing(e, r);
    }
    initRawContainer(e, r, o) {
      const n = getRemoteInfo({
        name: e,
        entry: r
      }), a = new Module({
        host: this,
        remoteInfo: n
      });
      return a.remoteEntryExports = o, this.moduleCache.set(e, a), a;
    }
    async loadRemote(e, r) {
      return this.remoteHandler.loadRemote(e, r);
    }
    async preloadRemote(e) {
      return this.remoteHandler.preloadRemote(e);
    }
    initShareScopeMap(e, r, o = {}) {
      this.sharedHandler.initShareScopeMap(e, r, o);
    }
    formatOptions(e, r) {
      const { shared: o } = formatShareConfigs(e, r), { userOptions: n, options: a } = this.hooks.lifecycle.beforeInit.emit({
        origin: this,
        userOptions: r,
        options: e,
        shareInfo: o
      }), s = this.remoteHandler.formatAndRegisterRemote(a, n), { shared: i } = this.sharedHandler.registerShared(a, n), c = [
        ...a.plugins
      ];
      n.plugins && n.plugins.forEach((d) => {
        c.includes(d) || c.push(d);
      });
      const l = {
        ...e,
        ...r,
        plugins: c,
        remotes: s,
        shared: i
      };
      return this.hooks.lifecycle.init.emit({
        origin: this,
        options: l
      }), l;
    }
    registerPlugins(e) {
      const r = registerPlugins(e, this);
      this.options.plugins = this.options.plugins.reduce((o, n) => (n && o && !o.find((a) => a.name === n.name) && o.push(n), o), r || []);
    }
    registerRemotes(e, r) {
      return this.remoteHandler.registerRemotes(e, r);
    }
    registerShared(e) {
      this.sharedHandler.registerShared(this.options, {
        ...this.options,
        shared: e
      });
    }
  }
  var index = Object.freeze({
    __proto__: null
  });
  index_cjs$2.loadScript = sdk.loadScript;
  index_cjs$2.loadScriptNode = sdk.loadScriptNode;
  index_cjs$2.CurrentGlobal = CurrentGlobal;
  index_cjs$2.Global = Global;
  index_cjs$2.Module = Module;
  index_cjs$2.ModuleFederation = ModuleFederation;
  index_cjs$2.addGlobalSnapshot = addGlobalSnapshot;
  index_cjs$2.assert = assert;
  index_cjs$2.getGlobalFederationConstructor = getGlobalFederationConstructor;
  index_cjs$2.getGlobalSnapshot = getGlobalSnapshot;
  index_cjs$2.getInfoWithoutType = getInfoWithoutType;
  index_cjs$2.getRegisteredShare = getRegisteredShare;
  index_cjs$2.getRemoteEntry = getRemoteEntry;
  index_cjs$2.getRemoteInfo = getRemoteInfo;
  index_cjs$2.helpers = helpers;
  index_cjs$2.isStaticResourcesEqual = isStaticResourcesEqual;
  index_cjs$2.matchRemoteWithNameAndExpose = matchRemoteWithNameAndExpose;
  index_cjs$2.registerGlobalPlugins = registerGlobalPlugins;
  index_cjs$2.resetFederationGlobalInfo = resetFederationGlobalInfo;
  index_cjs$2.safeWrapper = safeWrapper;
  index_cjs$2.satisfy = satisfy;
  index_cjs$2.setGlobalFederationConstructor = setGlobalFederationConstructor;
  index_cjs$2.setGlobalFederationInstance = setGlobalFederationInstance;
  index_cjs$2.types = index;
  var utils_cjs = {}, runtimeCore$1 = index_cjs$2;
  function getBuilderId() {
    return typeof FEDERATION_BUILD_IDENTIFIER < "u" ? FEDERATION_BUILD_IDENTIFIER : "";
  }
  function getGlobalFederationInstance(t, e) {
    const r = getBuilderId();
    return runtimeCore$1.CurrentGlobal.__FEDERATION__.__INSTANCES__.find((o) => !!(r && o.options.id === r || o.options.name === t && !o.options.version && !e || o.options.name === t && e && o.options.version === e));
  }
  utils_cjs.getGlobalFederationInstance = getGlobalFederationInstance;
  var runtimeCore = index_cjs$2, utils = utils_cjs;
  function createInstance(t) {
    const e = runtimeCore.getGlobalFederationConstructor() || runtimeCore.ModuleFederation, r = new e(t);
    return runtimeCore.setGlobalFederationInstance(r), r;
  }
  let FederationInstance = null;
  function init$1(t) {
    const e = utils.getGlobalFederationInstance(t.name, t.version);
    return e ? (e.initOptions(t), FederationInstance || (FederationInstance = e), e) : (FederationInstance = createInstance(t), FederationInstance);
  }
  runtimeCore.setGlobalFederationConstructor(runtimeCore.ModuleFederation);
  runtimeCore.Module;
  runtimeCore.ModuleFederation;
  runtimeCore.getRemoteEntry;
  runtimeCore.getRemoteInfo;
  runtimeCore.loadScript;
  runtimeCore.loadScriptNode;
  runtimeCore.registerGlobalPlugins;
  var init_1 = init$1;
  const importMap = {
    react: async () => await __vitePreload(() => import("./assets/index-BEpFHtMA.js").then((e) => e.i), __vite__mapDeps([0,1]), import.meta.url),
    "react-dom": async () => await __vitePreload(() => import("./assets/index-DMBzzD-N.js").then(async (m) => {
      await m.__tla;
      return m;
    }).then((e) => e.i), __vite__mapDeps([2,1,3,4]), import.meta.url)
  }, usedShared = {
    react: {
      name: "react",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2CollectionWidget",
      async get() {
        usedShared.react.loaded = true;
        const { react: t } = importMap, r = {
          ...await t()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "react-dom": {
      name: "react-dom",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2CollectionWidget",
      async get() {
        usedShared["react-dom"].loaded = true;
        const { "react-dom": t } = importMap, r = {
          ...await t()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    }
  }, usedRemotes = [], initTokens = {}, shareScopeName = "default", mfName = "vis2CollectionWidget";
  init = async function(t = {}, e = []) {
    const r = init_1({
      name: mfName,
      remotes: usedRemotes,
      shared: usedShared,
      plugins: [],
      shareStrategy: "version-first"
    });
    var o = initTokens[shareScopeName];
    if (o || (o = initTokens[shareScopeName] = {
      from: mfName
    }), !(e.indexOf(o) >= 0)) {
      e.push(o), r.initShareScopeMap("default", t);
      try {
        await Promise.all(await r.initializeSharing("default", {
          strategy: "version-first",
          from: "build",
          initScope: e
        }));
      } catch (n) {
        console.error(n);
      }
      return vis2CollectionWidget__mf_v__runtimeInit__mf_v__.initResolve(r), r;
    }
  };
  getExposes = function(t) {
    if (!(t in exposesMap)) throw new Error(`Module ${t} does not exist in container.`);
    return exposesMap[t]().then((e) => () => e);
  };
});
export {
  __tla,
  getExposes as get,
  init
};
