import { j as rt, C as nt, v as H, y as it, __tla as __tla_0 } from "./useData-jcT7BVTY.js";
import { v as m, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
let Zt, te;
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
  })()
]).then(async () => {
  Zt = () => [
    {
      label: "",
      type: "custom",
      component: () => rt.jsx(nt, {
        dividerText: "write_value"
      })
    },
    {
      name: "sampleInterval",
      type: "checkbox",
      label: "sample_interval",
      default: false
    },
    {
      name: "sampleIntervalValue",
      type: "number",
      label: "sample_interval_value",
      default: 200,
      min: 0,
      max: 1e4,
      step: 1,
      hidden: "!data.sampleInterval"
    },
    {
      name: "delay",
      type: "number",
      label: "delay",
      default: 300,
      min: 0,
      max: 1e4,
      step: 1,
      hidden: "data.sampleInterval"
    }
  ];
  function M(e) {
    return !(e == null || String(e).trim() === "" || Number.isNaN(+e));
  }
  var R = function(e, r) {
    return R = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, n) {
      t.__proto__ = n;
    } || function(t, n) {
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }, R(e, r);
  };
  function _(e, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    R(e, r);
    function t() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  }
  function ot(e, r, t, n) {
    function i(o) {
      return o instanceof t ? o : new t(function(u) {
        u(o);
      });
    }
    return new (t || (t = Promise))(function(o, u) {
      function a(l) {
        try {
          s(n.next(l));
        } catch (f) {
          u(f);
        }
      }
      function c(l) {
        try {
          s(n.throw(l));
        } catch (f) {
          u(f);
        }
      }
      function s(l) {
        l.done ? o(l.value) : i(l.value).then(a, c);
      }
      s((n = n.apply(e, r || [])).next());
    });
  }
  function W(e, r) {
    var t = {
      label: 0,
      sent: function() {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    }, n, i, o, u = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return u.next = a(0), u.throw = a(1), u.return = a(2), typeof Symbol == "function" && (u[Symbol.iterator] = function() {
      return this;
    }), u;
    function a(s) {
      return function(l) {
        return c([
          s,
          l
        ]);
      };
    }
    function c(s) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; u && (u = 0, s[0] && (t = 0)), t; ) try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done) return o;
        switch (i = 0, o && (s = [
          s[0] & 2,
          o.value
        ]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, {
              value: s[1],
              done: false
            };
          case 5:
            t.label++, i = s[1], s = [
              0
            ];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [
          6,
          l
        ], i = 0;
      } finally {
        n = o = 0;
      }
      if (s[0] & 5) throw s[1];
      return {
        value: s[0] ? s[1] : void 0,
        done: true
      };
    }
  }
  function x(e) {
    var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
    if (t) return t.call(e);
    if (e && typeof e.length == "number") return {
      next: function() {
        return e && n >= e.length && (e = void 0), {
          value: e && e[n++],
          done: !e
        };
      }
    };
    throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function P(e, r) {
    var t = typeof Symbol == "function" && e[Symbol.iterator];
    if (!t) return e;
    var n = t.call(e), i, o = [], u;
    try {
      for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; ) o.push(i.value);
    } catch (a) {
      u = {
        error: a
      };
    } finally {
      try {
        i && !i.done && (t = n.return) && t.call(n);
      } finally {
        if (u) throw u.error;
      }
    }
    return o;
  }
  function j(e, r, t) {
    if (t || arguments.length === 2) for (var n = 0, i = r.length, o; n < i; n++) (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
    return e.concat(o || Array.prototype.slice.call(r));
  }
  function g(e) {
    return this instanceof g ? (this.v = e, this) : new g(e);
  }
  function ut(e, r, t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = t.apply(e, r || []), i, o = [];
    return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", u), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function u(h) {
      return function(y) {
        return Promise.resolve(y).then(h, f);
      };
    }
    function a(h, y) {
      n[h] && (i[h] = function(d) {
        return new Promise(function(S, b) {
          o.push([
            h,
            d,
            S,
            b
          ]) > 1 || c(h, d);
        });
      }, y && (i[h] = y(i[h])));
    }
    function c(h, y) {
      try {
        s(n[h](y));
      } catch (d) {
        v(o[0][3], d);
      }
    }
    function s(h) {
      h.value instanceof g ? Promise.resolve(h.value.v).then(l, f) : v(o[0][2], h);
    }
    function l(h) {
      c("next", h);
    }
    function f(h) {
      c("throw", h);
    }
    function v(h, y) {
      h(y), o.shift(), o.length && c(o[0][0], o[0][1]);
    }
  }
  function st(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = e[Symbol.asyncIterator], t;
    return r ? r.call(e) : (e = typeof x == "function" ? x(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
      return this;
    }, t);
    function n(o) {
      t[o] = e[o] && function(u) {
        return new Promise(function(a, c) {
          u = e[o](u), i(a, c, u.done, u.value);
        });
      };
    }
    function i(o, u, a, c) {
      Promise.resolve(c).then(function(s) {
        o({
          value: s,
          done: a
        });
      }, u);
    }
  }
  function p(e) {
    return typeof e == "function";
  }
  function z(e) {
    var r = function(n) {
      Error.call(n), n.stack = new Error().stack;
    }, t = e(r);
    return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
  }
  var C = z(function(e) {
    return function(t) {
      e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, i) {
        return i + 1 + ") " + n.toString();
      }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
    };
  });
  function k(e, r) {
    if (e) {
      var t = e.indexOf(r);
      0 <= t && e.splice(t, 1);
    }
  }
  var E = (function() {
    function e(r) {
      this.initialTeardown = r, this.closed = false, this._parentage = null, this._finalizers = null;
    }
    return e.prototype.unsubscribe = function() {
      var r, t, n, i, o;
      if (!this.closed) {
        this.closed = true;
        var u = this._parentage;
        if (u) if (this._parentage = null, Array.isArray(u)) try {
          for (var a = x(u), c = a.next(); !c.done; c = a.next()) {
            var s = c.value;
            s.remove(this);
          }
        } catch (d) {
          r = {
            error: d
          };
        } finally {
          try {
            c && !c.done && (t = a.return) && t.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        else u.remove(this);
        var l = this.initialTeardown;
        if (p(l)) try {
          l();
        } catch (d) {
          o = d instanceof C ? d.errors : [
            d
          ];
        }
        var f = this._finalizers;
        if (f) {
          this._finalizers = null;
          try {
            for (var v = x(f), h = v.next(); !h.done; h = v.next()) {
              var y = h.value;
              try {
                N(y);
              } catch (d) {
                o = o ?? [], d instanceof C ? o = j(j([], P(o)), P(d.errors)) : o.push(d);
              }
            }
          } catch (d) {
            n = {
              error: d
            };
          } finally {
            try {
              h && !h.done && (i = v.return) && i.call(v);
            } finally {
              if (n) throw n.error;
            }
          }
        }
        if (o) throw new C(o);
      }
    }, e.prototype.add = function(r) {
      var t;
      if (r && r !== this) if (this.closed) N(r);
      else {
        if (r instanceof e) {
          if (r.closed || r._hasParent(this)) return;
          r._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r);
      }
    }, e.prototype._hasParent = function(r) {
      var t = this._parentage;
      return t === r || Array.isArray(t) && t.includes(r);
    }, e.prototype._addParent = function(r) {
      var t = this._parentage;
      this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [
        t,
        r
      ] : r;
    }, e.prototype._removeParent = function(r) {
      var t = this._parentage;
      t === r ? this._parentage = null : Array.isArray(t) && k(t, r);
    }, e.prototype.remove = function(r) {
      var t = this._finalizers;
      t && k(t, r), r instanceof e && r._removeParent(this);
    }, e.EMPTY = (function() {
      var r = new e();
      return r.closed = true, r;
    })(), e;
  })(), J = E.EMPTY;
  function K(e) {
    return e instanceof E || e && "closed" in e && p(e.remove) && p(e.add) && p(e.unsubscribe);
  }
  function N(e) {
    p(e) ? e() : e.unsubscribe();
  }
  var ct = {
    Promise: void 0
  }, at = {
    setTimeout: function(e, r) {
      for (var t = [], n = 2; n < arguments.length; n++) t[n - 2] = arguments[n];
      return setTimeout.apply(void 0, j([
        e,
        r
      ], P(t)));
    },
    clearTimeout: function(e) {
      return clearTimeout(e);
    },
    delegate: void 0
  };
  function Q(e) {
    at.setTimeout(function() {
      throw e;
    });
  }
  function $() {
  }
  function T(e) {
    e();
  }
  var D = (function(e) {
    _(r, e);
    function r(t) {
      var n = e.call(this) || this;
      return n.isStopped = false, t ? (n.destination = t, K(t) && t.add(n)) : n.destination = ht, n;
    }
    return r.create = function(t, n, i) {
      return new V(t, n, i);
    }, r.prototype.next = function(t) {
      this.isStopped || this._next(t);
    }, r.prototype.error = function(t) {
      this.isStopped || (this.isStopped = true, this._error(t));
    }, r.prototype.complete = function() {
      this.isStopped || (this.isStopped = true, this._complete());
    }, r.prototype.unsubscribe = function() {
      this.closed || (this.isStopped = true, e.prototype.unsubscribe.call(this), this.destination = null);
    }, r.prototype._next = function(t) {
      this.destination.next(t);
    }, r.prototype._error = function(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }, r.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }, r;
  })(E), lt = (function() {
    function e(r) {
      this.partialObserver = r;
    }
    return e.prototype.next = function(r) {
      var t = this.partialObserver;
      if (t.next) try {
        t.next(r);
      } catch (n) {
        A(n);
      }
    }, e.prototype.error = function(r) {
      var t = this.partialObserver;
      if (t.error) try {
        t.error(r);
      } catch (n) {
        A(n);
      }
      else A(r);
    }, e.prototype.complete = function() {
      var r = this.partialObserver;
      if (r.complete) try {
        r.complete();
      } catch (t) {
        A(t);
      }
    }, e;
  })(), V = (function(e) {
    _(r, e);
    function r(t, n, i) {
      var o = e.call(this) || this, u;
      return p(t) || !t ? u = {
        next: t ?? void 0,
        error: n ?? void 0,
        complete: i ?? void 0
      } : u = t, o.destination = new lt(u), o;
    }
    return r;
  })(D);
  function A(e) {
    Q(e);
  }
  function ft(e) {
    throw e;
  }
  var ht = {
    closed: true,
    next: $,
    error: ft,
    complete: $
  }, L = (function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable";
  })();
  function dt(e) {
    return e;
  }
  function vt(e) {
    return e.length === 0 ? dt : e.length === 1 ? e[0] : function(t) {
      return e.reduce(function(n, i) {
        return i(n);
      }, t);
    };
  }
  var w = (function() {
    function e(r) {
      r && (this._subscribe = r);
    }
    return e.prototype.lift = function(r) {
      var t = new e();
      return t.source = this, t.operator = r, t;
    }, e.prototype.subscribe = function(r, t, n) {
      var i = this, o = yt(r) ? r : new V(r, t, n);
      return T(function() {
        var u = i, a = u.operator, c = u.source;
        o.add(a ? a.call(o, c) : c ? i._subscribe(o) : i._trySubscribe(o));
      }), o;
    }, e.prototype._trySubscribe = function(r) {
      try {
        return this._subscribe(r);
      } catch (t) {
        r.error(t);
      }
    }, e.prototype.forEach = function(r, t) {
      var n = this;
      return t = Y(t), new t(function(i, o) {
        var u = new V({
          next: function(a) {
            try {
              r(a);
            } catch (c) {
              o(c), u.unsubscribe();
            }
          },
          error: o,
          complete: i
        });
        n.subscribe(u);
      });
    }, e.prototype._subscribe = function(r) {
      var t;
      return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r);
    }, e.prototype[L] = function() {
      return this;
    }, e.prototype.pipe = function() {
      for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
      return vt(r)(this);
    }, e.prototype.toPromise = function(r) {
      var t = this;
      return r = Y(r), new r(function(n, i) {
        var o;
        t.subscribe(function(u) {
          return o = u;
        }, function(u) {
          return i(u);
        }, function() {
          return n(o);
        });
      });
    }, e.create = function(r) {
      return new e(r);
    }, e;
  })();
  function Y(e) {
    var r;
    return (r = e ?? ct.Promise) !== null && r !== void 0 ? r : Promise;
  }
  function pt(e) {
    return e && p(e.next) && p(e.error) && p(e.complete);
  }
  function yt(e) {
    return e && e instanceof D || pt(e) && K(e);
  }
  function bt(e) {
    return p(e == null ? void 0 : e.lift);
  }
  function X(e) {
    return function(r) {
      if (bt(r)) return r.lift(function(t) {
        try {
          return e(t, this);
        } catch (n) {
          this.error(n);
        }
      });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function U(e, r, t, n, i) {
    return new mt(e, r, t, n, i);
  }
  var mt = (function(e) {
    _(r, e);
    function r(t, n, i, o, u, a) {
      var c = e.call(this, t) || this;
      return c.onFinalize = u, c.shouldUnsubscribe = a, c._next = n ? function(s) {
        try {
          n(s);
        } catch (l) {
          t.error(l);
        }
      } : e.prototype._next, c._error = o ? function(s) {
        try {
          o(s);
        } catch (l) {
          t.error(l);
        } finally {
          this.unsubscribe();
        }
      } : e.prototype._error, c._complete = i ? function() {
        try {
          i();
        } catch (s) {
          t.error(s);
        } finally {
          this.unsubscribe();
        }
      } : e.prototype._complete, c;
    }
    return r.prototype.unsubscribe = function() {
      var t;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var n = this.closed;
        e.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
      }
    }, r;
  })(D), wt = z(function(e) {
    return function() {
      e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
    };
  }), Z = (function(e) {
    _(r, e);
    function r() {
      var t = e.call(this) || this;
      return t.closed = false, t.currentObservers = null, t.observers = [], t.isStopped = false, t.hasError = false, t.thrownError = null, t;
    }
    return r.prototype.lift = function(t) {
      var n = new G(this, this);
      return n.operator = t, n;
    }, r.prototype._throwIfClosed = function() {
      if (this.closed) throw new wt();
    }, r.prototype.next = function(t) {
      var n = this;
      T(function() {
        var i, o;
        if (n._throwIfClosed(), !n.isStopped) {
          n.currentObservers || (n.currentObservers = Array.from(n.observers));
          try {
            for (var u = x(n.currentObservers), a = u.next(); !a.done; a = u.next()) {
              var c = a.value;
              c.next(t);
            }
          } catch (s) {
            i = {
              error: s
            };
          } finally {
            try {
              a && !a.done && (o = u.return) && o.call(u);
            } finally {
              if (i) throw i.error;
            }
          }
        }
      });
    }, r.prototype.error = function(t) {
      var n = this;
      T(function() {
        if (n._throwIfClosed(), !n.isStopped) {
          n.hasError = n.isStopped = true, n.thrownError = t;
          for (var i = n.observers; i.length; ) i.shift().error(t);
        }
      });
    }, r.prototype.complete = function() {
      var t = this;
      T(function() {
        if (t._throwIfClosed(), !t.isStopped) {
          t.isStopped = true;
          for (var n = t.observers; n.length; ) n.shift().complete();
        }
      });
    }, r.prototype.unsubscribe = function() {
      this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
    }, Object.defineProperty(r.prototype, "observed", {
      get: function() {
        var t;
        return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
      },
      enumerable: false,
      configurable: true
    }), r.prototype._trySubscribe = function(t) {
      return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
    }, r.prototype._subscribe = function(t) {
      return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
    }, r.prototype._innerSubscribe = function(t) {
      var n = this, i = this, o = i.hasError, u = i.isStopped, a = i.observers;
      return o || u ? J : (this.currentObservers = null, a.push(t), new E(function() {
        n.currentObservers = null, k(a, t);
      }));
    }, r.prototype._checkFinalizedStatuses = function(t) {
      var n = this, i = n.hasError, o = n.thrownError, u = n.isStopped;
      i ? t.error(o) : u && t.complete();
    }, r.prototype.asObservable = function() {
      var t = new w();
      return t.source = this, t;
    }, r.create = function(t, n) {
      return new G(t, n);
    }, r;
  })(w), G = (function(e) {
    _(r, e);
    function r(t, n) {
      var i = e.call(this) || this;
      return i.destination = t, i.source = n, i;
    }
    return r.prototype.next = function(t) {
      var n, i;
      (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, t);
    }, r.prototype.error = function(t) {
      var n, i;
      (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, t);
    }, r.prototype.complete = function() {
      var t, n;
      (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
    }, r.prototype._subscribe = function(t) {
      var n, i;
      return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && i !== void 0 ? i : J;
    }, r;
  })(Z), St = {
    now: function() {
      return Date.now();
    }
  }, _t = (function(e) {
    _(r, e);
    function r(t, n) {
      return e.call(this) || this;
    }
    return r.prototype.schedule = function(t, n) {
      return this;
    }, r;
  })(E), B = {
    setInterval: function(e, r) {
      for (var t = [], n = 2; n < arguments.length; n++) t[n - 2] = arguments[n];
      return setInterval.apply(void 0, j([
        e,
        r
      ], P(t)));
    },
    clearInterval: function(e) {
      return clearInterval(e);
    },
    delegate: void 0
  }, gt = (function(e) {
    _(r, e);
    function r(t, n) {
      var i = e.call(this, t, n) || this;
      return i.scheduler = t, i.work = n, i.pending = false, i;
    }
    return r.prototype.schedule = function(t, n) {
      var i;
      if (n === void 0 && (n = 0), this.closed) return this;
      this.state = t;
      var o = this.id, u = this.scheduler;
      return o != null && (this.id = this.recycleAsyncId(u, o, n)), this.pending = true, this.delay = n, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(u, this.id, n), this;
    }, r.prototype.requestAsyncId = function(t, n, i) {
      return i === void 0 && (i = 0), B.setInterval(t.flush.bind(t, this), i);
    }, r.prototype.recycleAsyncId = function(t, n, i) {
      if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === false) return n;
      n != null && B.clearInterval(n);
    }, r.prototype.execute = function(t, n) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = false;
      var i = this._execute(t, n);
      if (i) return i;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }, r.prototype._execute = function(t, n) {
      var i = false, o;
      try {
        this.work(t);
      } catch (u) {
        i = true, o = u || new Error("Scheduled action threw falsy error");
      }
      if (i) return this.unsubscribe(), o;
    }, r.prototype.unsubscribe = function() {
      if (!this.closed) {
        var t = this, n = t.id, i = t.scheduler, o = i.actions;
        this.work = this.state = this.scheduler = null, this.pending = false, k(o, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, e.prototype.unsubscribe.call(this);
      }
    }, r;
  })(_t), q = (function() {
    function e(r, t) {
      t === void 0 && (t = e.now), this.schedulerActionCtor = r, this.now = t;
    }
    return e.prototype.schedule = function(r, t, n) {
      return t === void 0 && (t = 0), new this.schedulerActionCtor(this, r).schedule(n, t);
    }, e.now = St.now, e;
  })(), xt = (function(e) {
    _(r, e);
    function r(t, n) {
      n === void 0 && (n = q.now);
      var i = e.call(this, t, n) || this;
      return i.actions = [], i._active = false, i;
    }
    return r.prototype.flush = function(t) {
      var n = this.actions;
      if (this._active) {
        n.push(t);
        return;
      }
      var i;
      this._active = true;
      do
        if (i = t.execute(t.state, t.delay)) break;
      while (t = n.shift());
      if (this._active = false, i) {
        for (; t = n.shift(); ) t.unsubscribe();
        throw i;
      }
    }, r;
  })(q), F = new xt(gt), It = F;
  function Et(e) {
    return e && p(e.schedule);
  }
  var At = (function(e) {
    return e && typeof e.length == "number" && typeof e != "function";
  });
  function Ot(e) {
    return p(e == null ? void 0 : e.then);
  }
  function Tt(e) {
    return p(e[L]);
  }
  function Pt(e) {
    return Symbol.asyncIterator && p(e == null ? void 0 : e[Symbol.asyncIterator]);
  }
  function jt(e) {
    return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  function kt() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var Ct = kt();
  function Rt(e) {
    return p(e == null ? void 0 : e[Ct]);
  }
  function Vt(e) {
    return ut(this, arguments, function() {
      var t, n, i, o;
      return W(this, function(u) {
        switch (u.label) {
          case 0:
            t = e.getReader(), u.label = 1;
          case 1:
            u.trys.push([
              1,
              ,
              9,
              10
            ]), u.label = 2;
          case 2:
            return [
              4,
              g(t.read())
            ];
          case 3:
            return n = u.sent(), i = n.value, o = n.done, o ? [
              4,
              g(void 0)
            ] : [
              3,
              5
            ];
          case 4:
            return [
              2,
              u.sent()
            ];
          case 5:
            return [
              4,
              g(i)
            ];
          case 6:
            return [
              4,
              u.sent()
            ];
          case 7:
            return u.sent(), [
              3,
              2
            ];
          case 8:
            return [
              3,
              10
            ];
          case 9:
            return t.releaseLock(), [
              7
            ];
          case 10:
            return [
              2
            ];
        }
      });
    });
  }
  function Ut(e) {
    return p(e == null ? void 0 : e.getReader);
  }
  function Dt(e) {
    if (e instanceof w) return e;
    if (e != null) {
      if (Tt(e)) return Lt(e);
      if (At(e)) return Ft(e);
      if (Ot(e)) return Mt(e);
      if (Pt(e)) return tt(e);
      if (Rt(e)) return Nt(e);
      if (Ut(e)) return $t(e);
    }
    throw jt(e);
  }
  function Lt(e) {
    return new w(function(r) {
      var t = e[L]();
      if (p(t.subscribe)) return t.subscribe(r);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function Ft(e) {
    return new w(function(r) {
      for (var t = 0; t < e.length && !r.closed; t++) r.next(e[t]);
      r.complete();
    });
  }
  function Mt(e) {
    return new w(function(r) {
      e.then(function(t) {
        r.closed || (r.next(t), r.complete());
      }, function(t) {
        return r.error(t);
      }).then(null, Q);
    });
  }
  function Nt(e) {
    return new w(function(r) {
      var t, n;
      try {
        for (var i = x(e), o = i.next(); !o.done; o = i.next()) {
          var u = o.value;
          if (r.next(u), r.closed) return;
        }
      } catch (a) {
        t = {
          error: a
        };
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      r.complete();
    });
  }
  function tt(e) {
    return new w(function(r) {
      Yt(e, r).catch(function(t) {
        return r.error(t);
      });
    });
  }
  function $t(e) {
    return tt(Vt(e));
  }
  function Yt(e, r) {
    var t, n, i, o;
    return ot(this, void 0, void 0, function() {
      var u, a;
      return W(this, function(c) {
        switch (c.label) {
          case 0:
            c.trys.push([
              0,
              5,
              6,
              11
            ]), t = st(e), c.label = 1;
          case 1:
            return [
              4,
              t.next()
            ];
          case 2:
            if (n = c.sent(), !!n.done) return [
              3,
              4
            ];
            if (u = n.value, r.next(u), r.closed) return [
              2
            ];
            c.label = 3;
          case 3:
            return [
              3,
              1
            ];
          case 4:
            return [
              3,
              11
            ];
          case 5:
            return a = c.sent(), i = {
              error: a
            }, [
              3,
              11
            ];
          case 6:
            return c.trys.push([
              6,
              ,
              9,
              10
            ]), n && !n.done && (o = t.return) ? [
              4,
              o.call(t)
            ] : [
              3,
              8
            ];
          case 7:
            c.sent(), c.label = 8;
          case 8:
            return [
              3,
              10
            ];
          case 9:
            if (i) throw i.error;
            return [
              7
            ];
          case 10:
            return [
              7
            ];
          case 11:
            return r.complete(), [
              2
            ];
        }
      });
    });
  }
  function Gt(e) {
    return e instanceof Date && !isNaN(e);
  }
  function Bt(e, r, t) {
    e === void 0 && (e = 0), t === void 0 && (t = It);
    var n = -1;
    return r != null && (Et(r) ? t = r : n = r), new w(function(i) {
      var o = Gt(e) ? +e - t.now() : e;
      o < 0 && (o = 0);
      var u = 0;
      return t.schedule(function() {
        i.closed || (i.next(u++), 0 <= n ? this.schedule(void 0, n) : i.complete());
      }, o);
    });
  }
  function qt(e, r) {
    return r === void 0 && (r = F), X(function(t, n) {
      var i = null, o = null, u = null, a = function() {
        if (i) {
          i.unsubscribe(), i = null;
          var s = o;
          o = null, n.next(s);
        }
      };
      function c() {
        var s = u + e, l = r.now();
        if (l < s) {
          i = this.schedule(void 0, s - l), n.add(i);
          return;
        }
        a();
      }
      t.subscribe(U(n, function(s) {
        o = s, u = r.now(), i || (i = r.schedule(c, e), n.add(i));
      }, function() {
        a(), n.complete();
      }, void 0, function() {
        o = i = null;
      }));
    });
  }
  function Ht(e, r) {
    return X(function(t, n) {
      var i = r ?? {}, o = i.leading, u = o === void 0 ? true : o, a = i.trailing, c = a === void 0 ? false : a, s = false, l = null, f = null, v = false, h = function() {
        f == null ? void 0 : f.unsubscribe(), f = null, c && (S(), v && n.complete());
      }, y = function() {
        f = null, v && n.complete();
      }, d = function(b) {
        return f = Dt(e(b)).subscribe(U(n, h, y));
      }, S = function() {
        if (s) {
          s = false;
          var b = l;
          l = null, n.next(b), !v && d(b);
        }
      };
      t.subscribe(U(n, function(b) {
        s = true, l = b, !(f && !f.closed) && (u ? S() : d(b));
      }, function() {
        v = true, !(c && s && f && !f.closed) && n.complete();
      }));
    });
  }
  function Wt(e, r, t) {
    r === void 0 && (r = F);
    var n = Bt(e, r);
    return Ht(function() {
      return n;
    }, t);
  }
  function zt({ oidObject: e, data: { sampleInterval: r, sampleIntervalValue: t, delay: n } }) {
    const { setValue: i } = m.useContext(H), o = m.useRef(), u = m.useRef(null), a = m.useRef(i);
    a.current = i;
    const c = e == null ? void 0 : e._id, s = m.useMemo(() => {
      const l = Number(t), f = Number(n);
      return r ? l : f;
    }, [
      r,
      t,
      n
    ]);
    return m.useEffect(() => {
      if (o.current || (o.current = new Z()), !c) return;
      const l = o.current;
      return u.current && u.current.unsubscribe(), u.current = l.pipe(r ? Wt(s, void 0, {
        leading: false,
        trailing: true
      }) : qt(s)).subscribe((f) => {
        a.current(c, f);
      }), () => {
        u.current && (u.current.unsubscribe(), u.current = null);
      };
    }, [
      r,
      s,
      c
    ]), m.useEffect(() => () => {
      u.current && (u.current.unsubscribe(), u.current = null), o.current && o.current.complete();
    }, []), c ? {
      next: (l) => {
        var _a;
        (_a = o.current) == null ? void 0 : _a.next(l);
      }
    } : null;
  }
  const O = 1111111111111;
  function Jt(e, r) {
    switch (r) {
      case "string":
        return String(e);
      case "number":
        return M(e) ? Number(e) : void 0;
      case "mixed":
        return /^true$/i.test(String(e)) ? true : /^false$/i.test(String(e)) ? false : M(e) ? Number(e) : String(e);
      case "boolean":
        return /^true$/i.test(String(e));
      default:
        return e;
    }
  }
  function Kt(e, r) {
    const t = String(e ?? ""), n = String(r ?? "");
    if (t === n) return false;
    const i = Number(e ?? 0), o = Number(r ?? 0);
    return Math.abs(i - o) >= 1;
  }
  te = (e) => {
    const { setState: r, widget: t, getPropertyValue: n, values: i } = m.useContext(H), { data: o } = it("oid"), u = t.data[`${e}Object`], a = n(e), c = m.useRef({
      lc: void 0,
      value: void 0
    }), s = m.useRef(0), l = Number(o.delay ?? t.data.delay) || 300, f = (u == null ? void 0 : u._id) ? i[`${u._id}.lc`] : void 0, v = (u == null ? void 0 : u._id) ? i[`${u._id}.val`] : void 0, h = m.useMemo(() => {
      if (!(u == null ? void 0 : u._id)) return false;
      if (f === O) return c.current = {
        lc: O,
        value: v
      }, false;
      if (Date.now() < s.current) return c.current = {
        lc: f,
        value: v
      }, false;
      if (c.current.lc === void 0) return c.current = {
        lc: f,
        value: v
      }, false;
      const S = c.current.lc !== f, b = Kt(c.current.value, v);
      return c.current = {
        lc: f,
        value: v
      }, S && b;
    }, [
      u == null ? void 0 : u._id,
      f,
      v
    ]), y = zt({
      oidObject: u,
      data: {
        delay: t.data.delay,
        sampleInterval: t.data.sampleInterval,
        sampleIntervalValue: t.data.sampleIntervalValue
      }
    }), d = m.useCallback((S, b = false) => {
      if (!(u == null ? void 0 : u._id)) return;
      const I = Jt(S, u == null ? void 0 : u.type);
      I != null && (r((et) => ({
        values: {
          ...et.values,
          [`${u._id}.val`]: I,
          [`${u._id}.lc`]: O
        }
      })), s.current = Date.now() + l + 1500, c.current = {
        lc: O,
        value: I
      }, !b && y && y.next(I));
    }, [
      l,
      y,
      u,
      r
    ]);
    return {
      value: a,
      hasBackendChange: h,
      updateValue: d
    };
  };
});
export {
  __tla,
  Zt as d,
  te as u
};
