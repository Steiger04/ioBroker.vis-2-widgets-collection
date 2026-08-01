import { j as er, __tla as __tla_0 } from "./tinycolor-B_2EitDy.js";
import { e as tr, C as q, u as nr, __tla as __tla_1 } from "./useData-90UeUAIS.js";
import { v as p, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { _ as O, a as T, b as P, c as S, d as ir, e as H, f as k, g as or, h as sr } from "./tslib.es6-F1e60Aum.js";
import { V as I, __tla as __tla_3 } from "./usePopoverPositioning-CvdKfQR6.js";
let ee, te;
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
  })()
]).then(async () => {
  ee = () => [
    {
      label: "",
      type: "custom",
      component: () => er.jsx(tr, {
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
  function F(e) {
    return !(e == null || String(e).trim() === "" || Number.isNaN(+e));
  }
  function d(e) {
    return typeof e == "function";
  }
  function W(e) {
    var t = function(n) {
      Error.call(n), n.stack = new Error().stack;
    }, r = e(t);
    return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
  }
  var R = W(function(e) {
    return function(r) {
      e(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, i) {
        return i + 1 + ") " + n.toString();
      }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
    };
  });
  function C(e, t) {
    if (e) {
      var r = e.indexOf(t);
      0 <= r && e.splice(r, 1);
    }
  }
  var x = (function() {
    function e(t) {
      this.initialTeardown = t, this.closed = false, this._parentage = null, this._finalizers = null;
    }
    return e.prototype.unsubscribe = function() {
      var t, r, n, i, s;
      if (!this.closed) {
        this.closed = true;
        var o = this._parentage;
        if (o) if (this._parentage = null, Array.isArray(o)) try {
          for (var a = O(o), u = a.next(); !u.done; u = a.next()) {
            var c = u.value;
            c.remove(this);
          }
        } catch (v) {
          t = {
            error: v
          };
        } finally {
          try {
            u && !u.done && (r = a.return) && r.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
        else o.remove(this);
        var f = this.initialTeardown;
        if (d(f)) try {
          f();
        } catch (v) {
          s = v instanceof R ? v.errors : [
            v
          ];
        }
        var l = this._finalizers;
        if (l) {
          this._finalizers = null;
          try {
            for (var h = O(l), y = h.next(); !y.done; y = h.next()) {
              var w = y.value;
              try {
                M(w);
              } catch (v) {
                s = s ?? [], v instanceof R ? s = T(T([], P(s)), P(v.errors)) : s.push(v);
              }
            }
          } catch (v) {
            n = {
              error: v
            };
          } finally {
            try {
              y && !y.done && (i = h.return) && i.call(h);
            } finally {
              if (n) throw n.error;
            }
          }
        }
        if (s) throw new R(s);
      }
    }, e.prototype.add = function(t) {
      var r;
      if (t && t !== this) if (this.closed) M(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
    }, e.prototype._hasParent = function(t) {
      var r = this._parentage;
      return r === t || Array.isArray(r) && r.includes(t);
    }, e.prototype._addParent = function(t) {
      var r = this._parentage;
      this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [
        r,
        t
      ] : t;
    }, e.prototype._removeParent = function(t) {
      var r = this._parentage;
      r === t ? this._parentage = null : Array.isArray(r) && C(r, t);
    }, e.prototype.remove = function(t) {
      var r = this._finalizers;
      r && C(r, t), t instanceof e && t._removeParent(this);
    }, e.EMPTY = (function() {
      var t = new e();
      return t.closed = true, t;
    })(), e;
  })(), z = x.EMPTY;
  function J(e) {
    return e instanceof x || e && "closed" in e && d(e.remove) && d(e.add) && d(e.unsubscribe);
  }
  function M(e) {
    d(e) ? e() : e.unsubscribe();
  }
  var ur = {
    Promise: void 0
  }, ar = {
    setTimeout: function(e, t) {
      for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
      return setTimeout.apply(void 0, T([
        e,
        t
      ], P(r)));
    },
    clearTimeout: function(e) {
      return clearTimeout(e);
    },
    delegate: void 0
  };
  function K(e) {
    ar.setTimeout(function() {
      throw e;
    });
  }
  function N() {
  }
  function A(e) {
    e();
  }
  var U = (function(e) {
    S(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n.isStopped = false, r ? (n.destination = r, J(r) && r.add(n)) : n.destination = fr, n;
    }
    return t.create = function(r, n, i) {
      return new V(r, n, i);
    }, t.prototype.next = function(r) {
      this.isStopped || this._next(r);
    }, t.prototype.error = function(r) {
      this.isStopped || (this.isStopped = true, this._error(r));
    }, t.prototype.complete = function() {
      this.isStopped || (this.isStopped = true, this._complete());
    }, t.prototype.unsubscribe = function() {
      this.closed || (this.isStopped = true, e.prototype.unsubscribe.call(this), this.destination = null);
    }, t.prototype._next = function(r) {
      this.destination.next(r);
    }, t.prototype._error = function(r) {
      try {
        this.destination.error(r);
      } finally {
        this.unsubscribe();
      }
    }, t.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }, t;
  })(x), cr = (function() {
    function e(t) {
      this.partialObserver = t;
    }
    return e.prototype.next = function(t) {
      var r = this.partialObserver;
      if (r.next) try {
        r.next(t);
      } catch (n) {
        E(n);
      }
    }, e.prototype.error = function(t) {
      var r = this.partialObserver;
      if (r.error) try {
        r.error(t);
      } catch (n) {
        E(n);
      }
      else E(t);
    }, e.prototype.complete = function() {
      var t = this.partialObserver;
      if (t.complete) try {
        t.complete();
      } catch (r) {
        E(r);
      }
    }, e;
  })(), V = (function(e) {
    S(t, e);
    function t(r, n, i) {
      var s = e.call(this) || this, o;
      return d(r) || !r ? o = {
        next: r ?? void 0,
        error: n ?? void 0,
        complete: i ?? void 0
      } : o = r, s.destination = new cr(o), s;
    }
    return t;
  })(U);
  function E(e) {
    K(e);
  }
  function lr(e) {
    throw e;
  }
  var fr = {
    closed: true,
    next: N,
    error: lr,
    complete: N
  }, D = (function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable";
  })();
  function dr(e) {
    return e;
  }
  function hr(e) {
    return e.length === 0 ? dr : e.length === 1 ? e[0] : function(r) {
      return e.reduce(function(n, i) {
        return i(n);
      }, r);
    };
  }
  var m = (function() {
    function e(t) {
      t && (this._subscribe = t);
    }
    return e.prototype.lift = function(t) {
      var r = new e();
      return r.source = this, r.operator = t, r;
    }, e.prototype.subscribe = function(t, r, n) {
      var i = this, s = pr(t) ? t : new V(t, r, n);
      return A(function() {
        var o = i, a = o.operator, u = o.source;
        s.add(a ? a.call(s, u) : u ? i._subscribe(s) : i._trySubscribe(s));
      }), s;
    }, e.prototype._trySubscribe = function(t) {
      try {
        return this._subscribe(t);
      } catch (r) {
        t.error(r);
      }
    }, e.prototype.forEach = function(t, r) {
      var n = this;
      return r = $(r), new r(function(i, s) {
        var o = new V({
          next: function(a) {
            try {
              t(a);
            } catch (u) {
              s(u), o.unsubscribe();
            }
          },
          error: s,
          complete: i
        });
        n.subscribe(o);
      });
    }, e.prototype._subscribe = function(t) {
      var r;
      return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t);
    }, e.prototype[D] = function() {
      return this;
    }, e.prototype.pipe = function() {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return hr(t)(this);
    }, e.prototype.toPromise = function(t) {
      var r = this;
      return t = $(t), new t(function(n, i) {
        var s;
        r.subscribe(function(o) {
          return s = o;
        }, function(o) {
          return i(o);
        }, function() {
          return n(s);
        });
      });
    }, e.create = function(t) {
      return new e(t);
    }, e;
  })();
  function $(e) {
    var t;
    return (t = e ?? ur.Promise) !== null && t !== void 0 ? t : Promise;
  }
  function vr(e) {
    return e && d(e.next) && d(e.error) && d(e.complete);
  }
  function pr(e) {
    return e && e instanceof U || vr(e) && J(e);
  }
  function br(e) {
    return d(e == null ? void 0 : e.lift);
  }
  function Q(e) {
    return function(t) {
      if (br(t)) return t.lift(function(r) {
        try {
          return e(r, this);
        } catch (n) {
          this.error(n);
        }
      });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function j(e, t, r, n, i) {
    return new yr(e, t, r, n, i);
  }
  var yr = (function(e) {
    S(t, e);
    function t(r, n, i, s, o, a) {
      var u = e.call(this, r) || this;
      return u.onFinalize = o, u.shouldUnsubscribe = a, u._next = n ? function(c) {
        try {
          n(c);
        } catch (f) {
          r.error(f);
        }
      } : e.prototype._next, u._error = s ? function(c) {
        try {
          s(c);
        } catch (f) {
          r.error(f);
        } finally {
          this.unsubscribe();
        }
      } : e.prototype._error, u._complete = i ? function() {
        try {
          i();
        } catch (c) {
          r.error(c);
        } finally {
          this.unsubscribe();
        }
      } : e.prototype._complete, u;
    }
    return t.prototype.unsubscribe = function() {
      var r;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var n = this.closed;
        e.prototype.unsubscribe.call(this), !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
      }
    }, t;
  })(U), mr = W(function(e) {
    return function() {
      e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
    };
  }), X = (function(e) {
    S(t, e);
    function t() {
      var r = e.call(this) || this;
      return r.closed = false, r.currentObservers = null, r.observers = [], r.isStopped = false, r.hasError = false, r.thrownError = null, r;
    }
    return t.prototype.lift = function(r) {
      var n = new Y(this, this);
      return n.operator = r, n;
    }, t.prototype._throwIfClosed = function() {
      if (this.closed) throw new mr();
    }, t.prototype.next = function(r) {
      var n = this;
      A(function() {
        var i, s;
        if (n._throwIfClosed(), !n.isStopped) {
          n.currentObservers || (n.currentObservers = Array.from(n.observers));
          try {
            for (var o = O(n.currentObservers), a = o.next(); !a.done; a = o.next()) {
              var u = a.value;
              u.next(r);
            }
          } catch (c) {
            i = {
              error: c
            };
          } finally {
            try {
              a && !a.done && (s = o.return) && s.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
        }
      });
    }, t.prototype.error = function(r) {
      var n = this;
      A(function() {
        if (n._throwIfClosed(), !n.isStopped) {
          n.hasError = n.isStopped = true, n.thrownError = r;
          for (var i = n.observers; i.length; ) i.shift().error(r);
        }
      });
    }, t.prototype.complete = function() {
      var r = this;
      A(function() {
        if (r._throwIfClosed(), !r.isStopped) {
          r.isStopped = true;
          for (var n = r.observers; n.length; ) n.shift().complete();
        }
      });
    }, t.prototype.unsubscribe = function() {
      this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
    }, Object.defineProperty(t.prototype, "observed", {
      get: function() {
        var r;
        return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
      },
      enumerable: false,
      configurable: true
    }), t.prototype._trySubscribe = function(r) {
      return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r);
    }, t.prototype._subscribe = function(r) {
      return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
    }, t.prototype._innerSubscribe = function(r) {
      var n = this, i = this, s = i.hasError, o = i.isStopped, a = i.observers;
      return s || o ? z : (this.currentObservers = null, a.push(r), new x(function() {
        n.currentObservers = null, C(a, r);
      }));
    }, t.prototype._checkFinalizedStatuses = function(r) {
      var n = this, i = n.hasError, s = n.thrownError, o = n.isStopped;
      i ? r.error(s) : o && r.complete();
    }, t.prototype.asObservable = function() {
      var r = new m();
      return r.source = this, r;
    }, t.create = function(r, n) {
      return new Y(r, n);
    }, t;
  })(m), Y = (function(e) {
    S(t, e);
    function t(r, n) {
      var i = e.call(this) || this;
      return i.destination = r, i.source = n, i;
    }
    return t.prototype.next = function(r) {
      var n, i;
      (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, r);
    }, t.prototype.error = function(r) {
      var n, i;
      (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, r);
    }, t.prototype.complete = function() {
      var r, n;
      (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
    }, t.prototype._subscribe = function(r) {
      var n, i;
      return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && i !== void 0 ? i : z;
    }, t;
  })(X), Sr = {
    now: function() {
      return Date.now();
    }
  }, wr = (function(e) {
    S(t, e);
    function t(r, n) {
      return e.call(this) || this;
    }
    return t.prototype.schedule = function(r, n) {
      return this;
    }, t;
  })(x), B = {
    setInterval: function(e, t) {
      for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
      return setInterval.apply(void 0, T([
        e,
        t
      ], P(r)));
    },
    clearInterval: function(e) {
      return clearInterval(e);
    },
    delegate: void 0
  }, _r = (function(e) {
    S(t, e);
    function t(r, n) {
      var i = e.call(this, r, n) || this;
      return i.scheduler = r, i.work = n, i.pending = false, i;
    }
    return t.prototype.schedule = function(r, n) {
      var i;
      if (n === void 0 && (n = 0), this.closed) return this;
      this.state = r;
      var s = this.id, o = this.scheduler;
      return s != null && (this.id = this.recycleAsyncId(o, s, n)), this.pending = true, this.delay = n, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(o, this.id, n), this;
    }, t.prototype.requestAsyncId = function(r, n, i) {
      return i === void 0 && (i = 0), B.setInterval(r.flush.bind(r, this), i);
    }, t.prototype.recycleAsyncId = function(r, n, i) {
      if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === false) return n;
      n != null && B.clearInterval(n);
    }, t.prototype.execute = function(r, n) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = false;
      var i = this._execute(r, n);
      if (i) return i;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }, t.prototype._execute = function(r, n) {
      var i = false, s;
      try {
        this.work(r);
      } catch (o) {
        i = true, s = o || new Error("Scheduled action threw falsy error");
      }
      if (i) return this.unsubscribe(), s;
    }, t.prototype.unsubscribe = function() {
      if (!this.closed) {
        var r = this, n = r.id, i = r.scheduler, s = i.actions;
        this.work = this.state = this.scheduler = null, this.pending = false, C(s, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, e.prototype.unsubscribe.call(this);
      }
    }, t;
  })(wr), G = (function() {
    function e(t, r) {
      r === void 0 && (r = e.now), this.schedulerActionCtor = t, this.now = r;
    }
    return e.prototype.schedule = function(t, r, n) {
      return r === void 0 && (r = 0), new this.schedulerActionCtor(this, t).schedule(n, r);
    }, e.now = Sr.now, e;
  })(), gr = (function(e) {
    S(t, e);
    function t(r, n) {
      n === void 0 && (n = G.now);
      var i = e.call(this, r, n) || this;
      return i.actions = [], i._active = false, i;
    }
    return t.prototype.flush = function(r) {
      var n = this.actions;
      if (this._active) {
        n.push(r);
        return;
      }
      var i;
      this._active = true;
      do
        if (i = r.execute(r.state, r.delay)) break;
      while (r = n.shift());
      if (this._active = false, i) {
        for (; r = n.shift(); ) r.unsubscribe();
        throw i;
      }
    }, t;
  })(G), L = new gr(_r), xr = L;
  function Ir(e) {
    return e && d(e.schedule);
  }
  var Er = (function(e) {
    return e && typeof e.length == "number" && typeof e != "function";
  });
  function Ar(e) {
    return d(e == null ? void 0 : e.then);
  }
  function Or(e) {
    return d(e[D]);
  }
  function Tr(e) {
    return Symbol.asyncIterator && d(e == null ? void 0 : e[Symbol.asyncIterator]);
  }
  function Pr(e) {
    return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  function Cr() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var kr = Cr();
  function Rr(e) {
    return d(e == null ? void 0 : e[kr]);
  }
  function Vr(e) {
    return ir(this, arguments, function() {
      var r, n, i, s;
      return H(this, function(o) {
        switch (o.label) {
          case 0:
            r = e.getReader(), o.label = 1;
          case 1:
            o.trys.push([
              1,
              ,
              9,
              10
            ]), o.label = 2;
          case 2:
            return [
              4,
              k(r.read())
            ];
          case 3:
            return n = o.sent(), i = n.value, s = n.done, s ? [
              4,
              k(void 0)
            ] : [
              3,
              5
            ];
          case 4:
            return [
              2,
              o.sent()
            ];
          case 5:
            return [
              4,
              k(i)
            ];
          case 6:
            return [
              4,
              o.sent()
            ];
          case 7:
            return o.sent(), [
              3,
              2
            ];
          case 8:
            return [
              3,
              10
            ];
          case 9:
            return r.releaseLock(), [
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
  function jr(e) {
    return d(e == null ? void 0 : e.getReader);
  }
  function Ur(e) {
    if (e instanceof m) return e;
    if (e != null) {
      if (Or(e)) return Dr(e);
      if (Er(e)) return Lr(e);
      if (Ar(e)) return Fr(e);
      if (Tr(e)) return Z(e);
      if (Rr(e)) return Mr(e);
      if (jr(e)) return Nr(e);
    }
    throw Pr(e);
  }
  function Dr(e) {
    return new m(function(t) {
      var r = e[D]();
      if (d(r.subscribe)) return r.subscribe(t);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function Lr(e) {
    return new m(function(t) {
      for (var r = 0; r < e.length && !t.closed; r++) t.next(e[r]);
      t.complete();
    });
  }
  function Fr(e) {
    return new m(function(t) {
      e.then(function(r) {
        t.closed || (t.next(r), t.complete());
      }, function(r) {
        return t.error(r);
      }).then(null, K);
    });
  }
  function Mr(e) {
    return new m(function(t) {
      var r, n;
      try {
        for (var i = O(e), s = i.next(); !s.done; s = i.next()) {
          var o = s.value;
          if (t.next(o), t.closed) return;
        }
      } catch (a) {
        r = {
          error: a
        };
      } finally {
        try {
          s && !s.done && (n = i.return) && n.call(i);
        } finally {
          if (r) throw r.error;
        }
      }
      t.complete();
    });
  }
  function Z(e) {
    return new m(function(t) {
      $r(e, t).catch(function(r) {
        return t.error(r);
      });
    });
  }
  function Nr(e) {
    return Z(Vr(e));
  }
  function $r(e, t) {
    var r, n, i, s;
    return or(this, void 0, void 0, function() {
      var o, a;
      return H(this, function(u) {
        switch (u.label) {
          case 0:
            u.trys.push([
              0,
              5,
              6,
              11
            ]), r = sr(e), u.label = 1;
          case 1:
            return [
              4,
              r.next()
            ];
          case 2:
            if (n = u.sent(), !!n.done) return [
              3,
              4
            ];
            if (o = n.value, t.next(o), t.closed) return [
              2
            ];
            u.label = 3;
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
            return a = u.sent(), i = {
              error: a
            }, [
              3,
              11
            ];
          case 6:
            return u.trys.push([
              6,
              ,
              9,
              10
            ]), n && !n.done && (s = r.return) ? [
              4,
              s.call(r)
            ] : [
              3,
              8
            ];
          case 7:
            u.sent(), u.label = 8;
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
            return t.complete(), [
              2
            ];
        }
      });
    });
  }
  function Yr(e) {
    return e instanceof Date && !isNaN(e);
  }
  function Br(e, t, r) {
    e === void 0 && (e = 0), r === void 0 && (r = xr);
    var n = -1;
    return t != null && (Ir(t) ? r = t : n = t), new m(function(i) {
      var s = Yr(e) ? +e - r.now() : e;
      s < 0 && (s = 0);
      var o = 0;
      return r.schedule(function() {
        i.closed || (i.next(o++), 0 <= n ? this.schedule(void 0, n) : i.complete());
      }, s);
    });
  }
  function Gr(e, t) {
    return t === void 0 && (t = L), Q(function(r, n) {
      var i = null, s = null, o = null, a = function() {
        if (i) {
          i.unsubscribe(), i = null;
          var c = s;
          s = null, n.next(c);
        }
      };
      function u() {
        var c = o + e, f = t.now();
        if (f < c) {
          i = this.schedule(void 0, c - f), n.add(i);
          return;
        }
        a();
      }
      r.subscribe(j(n, function(c) {
        s = c, o = t.now(), i || (i = t.schedule(u, e), n.add(i));
      }, function() {
        a(), n.complete();
      }, void 0, function() {
        s = i = null;
      }));
    });
  }
  function qr(e, t) {
    return Q(function(r, n) {
      var i = t ?? {}, s = i.leading, o = s === void 0 ? true : s, a = i.trailing, u = a === void 0 ? false : a, c = false, f = null, l = null, h = false, y = function() {
        l == null ? void 0 : l.unsubscribe(), l = null, u && (_(), h && n.complete());
      }, w = function() {
        l = null, h && n.complete();
      }, v = function(b) {
        return l = Ur(e(b)).subscribe(j(n, y, w));
      }, _ = function() {
        if (c) {
          c = false;
          var b = f;
          f = null, n.next(b), !h && v(b);
        }
      };
      r.subscribe(j(n, function(b) {
        c = true, f = b, !(l && !l.closed) && (o ? _() : v(b));
      }, function() {
        h = true, !(u && c && l && !l.closed) && n.complete();
      }));
    });
  }
  function Hr(e, t, r) {
    t === void 0 && (t = L);
    var n = Br(e, t);
    return qr(function() {
      return n;
    }, r);
  }
  function Wr({ oidObject: e, data: { sampleInterval: t, sampleIntervalValue: r, delay: n } }) {
    const { setValue: i } = p.useContext(q), s = p.useRef(), o = p.useRef(null), a = p.useRef(i);
    a.current = i;
    const u = e == null ? void 0 : e._id, c = p.useMemo(() => {
      const f = Number(r), l = Number(n);
      return t ? f : l;
    }, [
      t,
      r,
      n
    ]);
    return p.useEffect(() => {
      if (s.current || (s.current = new X()), !u) return;
      const f = s.current;
      return o.current && o.current.unsubscribe(), o.current = f.pipe(t ? Hr(c, void 0, {
        leading: false,
        trailing: true
      }) : Gr(c)).subscribe((l) => {
        a.current(u, l);
      }), () => {
        o.current && (o.current.unsubscribe(), o.current = null);
      };
    }, [
      t,
      c,
      u
    ]), p.useEffect(() => () => {
      o.current && (o.current.unsubscribe(), o.current = null), s.current && s.current.complete();
    }, []), u ? {
      next: (f) => {
        var _a;
        (_a = s.current) == null ? void 0 : _a.next(f);
      }
    } : null;
  }
  function zr(e, t) {
    switch (t) {
      case "string":
        return String(e);
      case "number":
        return F(e) ? Number(e) : void 0;
      case "mixed":
        return /^true$/i.test(String(e)) ? true : /^false$/i.test(String(e)) ? false : F(e) ? Number(e) : String(e);
      case "boolean":
        return /^true$/i.test(String(e));
      default:
        return e;
    }
  }
  function Jr(e, t) {
    const r = String(e ?? ""), n = String(t ?? "");
    if (r === n) return false;
    const i = Number(e ?? 0), s = Number(t ?? 0);
    return Math.abs(i - s) >= 1;
  }
  te = (e) => {
    const { setState: t, widget: r, getPropertyValue: n, values: i } = p.useContext(q), { data: s } = nr("oid"), o = r.data[`${e}Object`], a = n(e), u = p.useRef({
      lc: void 0,
      value: void 0
    }), c = p.useRef(0), f = Number(s.delay ?? r.data.delay) || 300, l = (o == null ? void 0 : o._id) ? i[`${o._id}.lc`] : void 0, h = (o == null ? void 0 : o._id) ? i[`${o._id}.val`] : void 0, y = p.useMemo(() => {
      if (!(o == null ? void 0 : o._id)) return false;
      if (l === I) return u.current = {
        lc: I,
        value: h
      }, false;
      if (Date.now() < c.current) return u.current = {
        lc: l,
        value: h
      }, false;
      if (u.current.lc === void 0) return u.current = {
        lc: l,
        value: h
      }, false;
      const _ = u.current.lc !== l, b = Jr(u.current.value, h);
      return u.current = {
        lc: l,
        value: h
      }, _ && b;
    }, [
      o == null ? void 0 : o._id,
      l,
      h
    ]), w = Wr({
      oidObject: o,
      data: {
        delay: r.data.delay,
        sampleInterval: r.data.sampleInterval,
        sampleIntervalValue: r.data.sampleIntervalValue
      }
    }), v = p.useCallback((_, b = false) => {
      if (!(o == null ? void 0 : o._id) || (o == null ? void 0 : o.write) === false) return;
      const g = zr(_, o == null ? void 0 : o.type);
      g != null && (t((rr) => ({
        values: {
          ...rr.values,
          [`${o._id}.val`]: g,
          [`${o._id}.lc`]: I
        }
      })), c.current = Date.now() + f + 1500, u.current = {
        lc: I,
        value: g
      }, !b && w && w.next(g));
    }, [
      f,
      w,
      o,
      t
    ]);
    return {
      value: a,
      hasBackendChange: y,
      updateValue: v
    };
  };
});
export {
  __tla,
  ee as d,
  te as u
};
