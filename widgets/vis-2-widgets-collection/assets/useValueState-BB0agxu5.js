import { h as st, j as W, m as S, g as z, l as N, f as ut } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { e as at } from "./useData-jkOw5Oj_.js";
import { D as J, h as j, C as K, V as E } from "./usePopoverPositioning-C1_MhytU.js";
import { _ as I, a as O, b as T, c as m, d as ct, e as Q, f as k, g as lt, h as ft } from "./tslib.es6-F1e60Aum.js";
const sr = () => [{ label: "", type: "custom", component: () => st(at, { dividerText: "write_value" }) }, { name: "sampleInterval", type: "checkbox", label: "sample_interval", default: false }, { name: "sampleIntervalValue", type: "number", label: "sample_interval_value", default: J, min: 0, max: 1e4, step: 1, hidden: "!data.sampleInterval" }, { name: "delay", type: "number", label: "delay", default: j, min: 0, max: 1e4, step: 1, hidden: "data.sampleInterval" }];
function V(r) {
  return !(r == null || String(r).trim() === "" || Number.isNaN(+r));
}
function d(r) {
  return typeof r == "function";
}
function X(r) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = r(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var U = X(function(r) {
  return function(t) {
    r(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function P(r, e) {
  if (r) {
    var t = r.indexOf(e);
    0 <= t && r.splice(t, 1);
  }
}
var w = (function() {
  function r(e) {
    this.initialTeardown = e, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return r.prototype.unsubscribe = function() {
    var e, t, n, i, o;
    if (!this.closed) {
      this.closed = true;
      var s = this._parentage;
      if (s) if (this._parentage = null, Array.isArray(s)) try {
        for (var a = I(s), u = a.next(); !u.done; u = a.next()) {
          var c = u.value;
          c.remove(this);
        }
      } catch (f) {
        e = { error: f };
      } finally {
        try {
          u && !u.done && (t = a.return) && t.call(a);
        } finally {
          if (e) throw e.error;
        }
      }
      else s.remove(this);
      var l = this.initialTeardown;
      if (d(l)) try {
        l();
      } catch (f) {
        o = f instanceof U ? f.errors : [f];
      }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var p = I(h), b = p.next(); !b.done; b = p.next()) {
            var _ = b.value;
            try {
              M(_);
            } catch (f) {
              o = o ?? [], f instanceof U ? o = O(O([], T(o)), T(f.errors)) : o.push(f);
            }
          }
        } catch (f) {
          n = { error: f };
        } finally {
          try {
            b && !b.done && (i = p.return) && i.call(p);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (o) throw new U(o);
    }
  }, r.prototype.add = function(e) {
    var t;
    if (e && e !== this) if (this.closed) M(e);
    else {
      if (e instanceof r) {
        if (e.closed || e._hasParent(this)) return;
        e._addParent(this);
      }
      (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
    }
  }, r.prototype._hasParent = function(e) {
    var t = this._parentage;
    return t === e || Array.isArray(t) && t.includes(e);
  }, r.prototype._addParent = function(e) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
  }, r.prototype._removeParent = function(e) {
    var t = this._parentage;
    t === e ? this._parentage = null : Array.isArray(t) && P(t, e);
  }, r.prototype.remove = function(e) {
    var t = this._finalizers;
    t && P(t, e), e instanceof r && e._removeParent(this);
  }, r.EMPTY = (function() {
    var e = new r();
    return e.closed = true, e;
  })(), r;
})(), Z = w.EMPTY;
function tt(r) {
  return r instanceof w || r && "closed" in r && d(r.remove) && d(r.add) && d(r.unsubscribe);
}
function M(r) {
  d(r) ? r() : r.unsubscribe();
}
var ht = { Promise: void 0 }, dt = { setTimeout: function(r, e) {
  for (var t = [], n = 2; n < arguments.length; n++) t[n - 2] = arguments[n];
  return setTimeout.apply(void 0, O([r, e], T(t)));
}, clearTimeout: function(r) {
  return clearTimeout(r);
}, delegate: void 0 };
function rt(r) {
  dt.setTimeout(function() {
    throw r;
  });
}
function $() {
}
function A(r) {
  r();
}
var L = (function(r) {
  m(e, r);
  function e(t) {
    var n = r.call(this) || this;
    return n.isStopped = false, t ? (n.destination = t, tt(t) && t.add(n)) : n.destination = bt, n;
  }
  return e.create = function(t, n, i) {
    return new C(t, n, i);
  }, e.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, e.prototype.error = function(t) {
    this.isStopped || (this.isStopped = true, this._error(t));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, r.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(t) {
    this.destination.next(t);
  }, e.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
})(w), vt = (function() {
  function r(e) {
    this.partialObserver = e;
  }
  return r.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next) try {
      t.next(e);
    } catch (n) {
      x(n);
    }
  }, r.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error) try {
      t.error(e);
    } catch (n) {
      x(n);
    }
    else x(e);
  }, r.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete) try {
      e.complete();
    } catch (t) {
      x(t);
    }
  }, r;
})(), C = (function(r) {
  m(e, r);
  function e(t, n, i) {
    var o = r.call(this) || this, s;
    return d(t) || !t ? s = { next: t ?? void 0, error: n ?? void 0, complete: i ?? void 0 } : s = t, o.destination = new vt(s), o;
  }
  return e;
})(L);
function x(r) {
  rt(r);
}
function pt(r) {
  throw r;
}
var bt = { closed: true, next: $, error: pt, complete: $ }, F = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function yt(r) {
  return r;
}
function mt(r) {
  return r.length === 0 ? yt : r.length === 1 ? r[0] : function(t) {
    return r.reduce(function(n, i) {
      return i(n);
    }, t);
  };
}
var y = (function() {
  function r(e) {
    e && (this._subscribe = e);
  }
  return r.prototype.lift = function(e) {
    var t = new r();
    return t.source = this, t.operator = e, t;
  }, r.prototype.subscribe = function(e, t, n) {
    var i = this, o = St(e) ? e : new C(e, t, n);
    return A(function() {
      var s = i, a = s.operator, u = s.source;
      o.add(a ? a.call(o, u) : u ? i._subscribe(o) : i._trySubscribe(o));
    }), o;
  }, r.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, r.prototype.forEach = function(e, t) {
    var n = this;
    return t = Y(t), new t(function(i, o) {
      var s = new C({ next: function(a) {
        try {
          e(a);
        } catch (u) {
          o(u), s.unsubscribe();
        }
      }, error: o, complete: i });
      n.subscribe(s);
    });
  }, r.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, r.prototype[F] = function() {
    return this;
  }, r.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return mt(e)(this);
  }, r.prototype.toPromise = function(e) {
    var t = this;
    return e = Y(e), new e(function(n, i) {
      var o;
      t.subscribe(function(s) {
        return o = s;
      }, function(s) {
        return i(s);
      }, function() {
        return n(o);
      });
    });
  }, r.create = function(e) {
    return new r(e);
  }, r;
})();
function Y(r) {
  var e;
  return (e = r ?? ht.Promise) !== null && e !== void 0 ? e : Promise;
}
function _t(r) {
  return r && d(r.next) && d(r.error) && d(r.complete);
}
function St(r) {
  return r && r instanceof L || _t(r) && tt(r);
}
function wt(r) {
  return d(r == null ? void 0 : r.lift);
}
function et(r) {
  return function(e) {
    if (wt(e)) return e.lift(function(t) {
      try {
        return r(t, this);
      } catch (n) {
        this.error(n);
      }
    });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function R(r, e, t, n, i) {
  return new gt(r, e, t, n, i);
}
var gt = (function(r) {
  m(e, r);
  function e(t, n, i, o, s, a) {
    var u = r.call(this, t) || this;
    return u.onFinalize = s, u.shouldUnsubscribe = a, u._next = n ? function(c) {
      try {
        n(c);
      } catch (l) {
        t.error(l);
      }
    } : r.prototype._next, u._error = o ? function(c) {
      try {
        o(c);
      } catch (l) {
        t.error(l);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._error, u._complete = i ? function() {
      try {
        i();
      } catch (c) {
        t.error(c);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._complete, u;
  }
  return e.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      r.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, e;
})(L), xt = X(function(r) {
  return function() {
    r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), nt = (function(r) {
  m(e, r);
  function e() {
    var t = r.call(this) || this;
    return t.closed = false, t.currentObservers = null, t.observers = [], t.isStopped = false, t.hasError = false, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var n = new B(this, this);
    return n.operator = t, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed) throw new xt();
  }, e.prototype.next = function(t) {
    var n = this;
    A(function() {
      var i, o;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var s = I(n.currentObservers), a = s.next(); !a.done; a = s.next()) {
            var u = a.value;
            u.next(t);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            a && !a.done && (o = s.return) && o.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var n = this;
    A(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = true, n.thrownError = t;
        for (var i = n.observers; i.length; ) i.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    A(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = true;
        for (var n = t.observers; n.length; ) n.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", { get: function() {
    var t;
    return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
  }, enumerable: false, configurable: true }), e.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), r.prototype._trySubscribe.call(this, t);
  }, e.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, e.prototype._innerSubscribe = function(t) {
    var n = this, i = this, o = i.hasError, s = i.isStopped, a = i.observers;
    return o || s ? Z : (this.currentObservers = null, a.push(t), new w(function() {
      n.currentObservers = null, P(a, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var n = this, i = n.hasError, o = n.thrownError, s = n.isStopped;
    i ? t.error(o) : s && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new y();
    return t.source = this, t;
  }, e.create = function(t, n) {
    return new B(t, n);
  }, e;
})(y), B = (function(r) {
  m(e, r);
  function e(t, n) {
    var i = r.call(this) || this;
    return i.destination = t, i.source = n, i;
  }
  return e.prototype.next = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, t);
  }, e.prototype.error = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, t);
  }, e.prototype.complete = function() {
    var t, n;
    (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
  }, e.prototype._subscribe = function(t) {
    var n, i;
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && i !== void 0 ? i : Z;
  }, e;
})(nt), At = { now: function() {
  return Date.now();
} }, Et = (function(r) {
  m(e, r);
  function e(t, n) {
    return r.call(this) || this;
  }
  return e.prototype.schedule = function(t, n) {
    return this;
  }, e;
})(w), G = { setInterval: function(r, e) {
  for (var t = [], n = 2; n < arguments.length; n++) t[n - 2] = arguments[n];
  return setInterval.apply(void 0, O([r, e], T(t)));
}, clearInterval: function(r) {
  return clearInterval(r);
}, delegate: void 0 }, It = (function(r) {
  m(e, r);
  function e(t, n) {
    var i = r.call(this, t, n) || this;
    return i.scheduler = t, i.work = n, i.pending = false, i;
  }
  return e.prototype.schedule = function(t, n) {
    var i;
    if (n === void 0 && (n = 0), this.closed) return this;
    this.state = t;
    var o = this.id, s = this.scheduler;
    return o != null && (this.id = this.recycleAsyncId(s, o, n)), this.pending = true, this.delay = n, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(s, this.id, n), this;
  }, e.prototype.requestAsyncId = function(t, n, i) {
    return i === void 0 && (i = 0), G.setInterval(t.flush.bind(t, this), i);
  }, e.prototype.recycleAsyncId = function(t, n, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === false) return n;
    n != null && G.clearInterval(n);
  }, e.prototype.execute = function(t, n) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = false;
    var i = this._execute(t, n);
    if (i) return i;
    this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(t, n) {
    var i = false, o;
    try {
      this.work(t);
    } catch (s) {
      i = true, o = s || new Error("Scheduled action threw falsy error");
    }
    if (i) return this.unsubscribe(), o;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t = this, n = t.id, i = t.scheduler, o = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = false, P(o, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, r.prototype.unsubscribe.call(this);
    }
  }, e;
})(Et), q = (function() {
  function r(e, t) {
    t === void 0 && (t = r.now), this.schedulerActionCtor = e, this.now = t;
  }
  return r.prototype.schedule = function(e, t, n) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(n, t);
  }, r.now = At.now, r;
})(), Ot = (function(r) {
  m(e, r);
  function e(t, n) {
    n === void 0 && (n = q.now);
    var i = r.call(this, t, n) || this;
    return i.actions = [], i._active = false, i;
  }
  return e.prototype.flush = function(t) {
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
  }, e;
})(q), D = new Ot(It), Tt = D;
function Pt(r) {
  return r && d(r.schedule);
}
var kt = (function(r) {
  return r && typeof r.length == "number" && typeof r != "function";
});
function Ut(r) {
  return d(r == null ? void 0 : r.then);
}
function Vt(r) {
  return d(r[F]);
}
function Ct(r) {
  return Symbol.asyncIterator && d(r == null ? void 0 : r[Symbol.asyncIterator]);
}
function Rt(r) {
  return new TypeError("You provided " + (r !== null && typeof r == "object" ? "an invalid object" : "'" + r + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function jt() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Lt = jt();
function Ft(r) {
  return d(r == null ? void 0 : r[Lt]);
}
function Dt(r) {
  return ct(this, arguments, function() {
    var t, n, i, o;
    return Q(this, function(s) {
      switch (s.label) {
        case 0:
          t = r.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, k(t.read())];
        case 3:
          return n = s.sent(), i = n.value, o = n.done, o ? [4, k(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, k(i)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Nt(r) {
  return d(r == null ? void 0 : r.getReader);
}
function Mt(r) {
  if (r instanceof y) return r;
  if (r != null) {
    if (Vt(r)) return $t(r);
    if (kt(r)) return Yt(r);
    if (Ut(r)) return Bt(r);
    if (Ct(r)) return it(r);
    if (Ft(r)) return Gt(r);
    if (Nt(r)) return qt(r);
  }
  throw Rt(r);
}
function $t(r) {
  return new y(function(e) {
    var t = r[F]();
    if (d(t.subscribe)) return t.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Yt(r) {
  return new y(function(e) {
    for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
    e.complete();
  });
}
function Bt(r) {
  return new y(function(e) {
    r.then(function(t) {
      e.closed || (e.next(t), e.complete());
    }, function(t) {
      return e.error(t);
    }).then(null, rt);
  });
}
function Gt(r) {
  return new y(function(e) {
    var t, n;
    try {
      for (var i = I(r), o = i.next(); !o.done; o = i.next()) {
        var s = o.value;
        if (e.next(s), e.closed) return;
      }
    } catch (a) {
      t = { error: a };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
    e.complete();
  });
}
function it(r) {
  return new y(function(e) {
    Ht(r, e).catch(function(t) {
      return e.error(t);
    });
  });
}
function qt(r) {
  return it(Dt(r));
}
function Ht(r, e) {
  var t, n, i, o;
  return lt(this, void 0, void 0, function() {
    var s, a;
    return Q(this, function(u) {
      switch (u.label) {
        case 0:
          u.trys.push([0, 5, 6, 11]), t = ft(r), u.label = 1;
        case 1:
          return [4, t.next()];
        case 2:
          if (n = u.sent(), !!n.done) return [3, 4];
          if (s = n.value, e.next(s), e.closed) return [2];
          u.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return a = u.sent(), i = { error: a }, [3, 11];
        case 6:
          return u.trys.push([6, , 9, 10]), n && !n.done && (o = t.return) ? [4, o.call(t)] : [3, 8];
        case 7:
          u.sent(), u.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i) throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function Wt(r) {
  return r instanceof Date && !isNaN(r);
}
function zt(r, e, t) {
  r === void 0 && (r = 0), t === void 0 && (t = Tt);
  var n = -1;
  return e != null && (Pt(e) ? t = e : n = e), new y(function(i) {
    var o = Wt(r) ? +r - t.now() : r;
    o < 0 && (o = 0);
    var s = 0;
    return t.schedule(function() {
      i.closed || (i.next(s++), 0 <= n ? this.schedule(void 0, n) : i.complete());
    }, o);
  });
}
function Jt(r, e) {
  return e === void 0 && (e = D), et(function(t, n) {
    var i = null, o = null, s = null, a = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var c = o;
        o = null, n.next(c);
      }
    };
    function u() {
      var c = s + r, l = e.now();
      if (l < c) {
        i = this.schedule(void 0, c - l), n.add(i);
        return;
      }
      a();
    }
    t.subscribe(R(n, function(c) {
      o = c, s = e.now(), i || (i = e.schedule(u, r), n.add(i));
    }, function() {
      a(), n.complete();
    }, void 0, function() {
      o = i = null;
    }));
  });
}
function Kt(r, e) {
  return et(function(t, n) {
    var i = e ?? {}, o = i.leading, s = o === void 0 ? true : o, a = i.trailing, u = a === void 0 ? false : a, c = false, l = null, h = null, p = false, b = function() {
      h == null ? void 0 : h.unsubscribe(), h = null, u && (g(), p && n.complete());
    }, _ = function() {
      h = null, p && n.complete();
    }, f = function(v) {
      return h = Mt(r(v)).subscribe(R(n, b, _));
    }, g = function() {
      if (c) {
        c = false;
        var v = l;
        l = null, n.next(v), !p && f(v);
      }
    };
    t.subscribe(R(n, function(v) {
      c = true, l = v, !(h && !h.closed) && (s ? g() : f(v));
    }, function() {
      p = true, !(u && c && h && !h.closed) && n.complete();
    }));
  });
}
function Qt(r, e, t) {
  e === void 0 && (e = D);
  var n = zt(r, e);
  return Kt(function() {
    return n;
  }, t);
}
const H = (r, e) => {
  const t = Number(r);
  return V(r) && Number.isFinite(t) ? t : e;
};
function Xt({ oidObject: r, data: { sampleInterval: e, sampleIntervalValue: t, delay: n } }) {
  const { setValue: i } = W(K), o = S(void 0), s = S(null), a = S(i);
  a.current = i;
  const u = r == null ? void 0 : r._id, c = z(() => e ? H(t, J) : H(n, j), [e, t, n]);
  return N(() => {
    if (o.current || (o.current = new nt()), !u) return;
    const l = o.current;
    return s.current && s.current.unsubscribe(), s.current = l.pipe(e ? Qt(c, void 0, { leading: false, trailing: true }) : Jt(c)).subscribe((h) => {
      a.current(u, h);
    }), () => {
      s.current && (s.current.unsubscribe(), s.current = null);
    };
  }, [e, c, u]), N(() => () => {
    s.current && (s.current.unsubscribe(), s.current = null), o.current && o.current.complete();
  }, []), u ? { next: (l) => {
    var _a;
    (_a = o.current) == null ? void 0 : _a.next(l);
  } } : null;
}
function Zt(r, e) {
  switch (e) {
    case "string":
      return String(r);
    case "number":
      return V(r) ? Number(r) : void 0;
    case "mixed":
      return /^true$/i.test(String(r)) ? true : /^false$/i.test(String(r)) ? false : V(r) ? Number(r) : String(r);
    case "boolean":
      return /^true$/i.test(String(r));
    default:
      return r;
  }
}
function tr(r, e) {
  const t = String(r ?? ""), n = String(e ?? "");
  if (t === n) return false;
  const i = Number(r ?? 0), o = Number(e ?? 0);
  return !Number.isFinite(i) || !Number.isFinite(o) ? true : Math.abs(i - o) >= 1;
}
function rr(r, e, t, n) {
  if (e.lc === E) return { significant: false, next: { lc: E, value: e.value } };
  const i = { lc: e.lc, value: e.value };
  return n < t ? { significant: false, next: i } : r.lc === void 0 ? { significant: false, next: i } : { significant: r.lc !== e.lc && tr(r.value, e.value), next: i };
}
const ur = (r) => {
  const { setState: e, widget: t, getPropertyValue: n, values: i } = W(K), o = t.data[`${r}Object`], s = n(r), a = S({ lc: void 0, value: void 0 }), u = S(0), c = Number(t.data.delay) || j, l = (o == null ? void 0 : o._id) ? i[`${o._id}.lc`] : void 0, h = (o == null ? void 0 : o._id) ? i[`${o._id}.val`] : void 0, p = z(() => {
    if (!(o == null ? void 0 : o._id)) return false;
    const f = rr(a.current, { lc: l, value: h }, u.current, Date.now());
    return a.current = f.next, f.significant;
  }, [o == null ? void 0 : o._id, l, h]), b = Xt({ oidObject: o, data: { delay: t.data.delay, sampleInterval: t.data.sampleInterval, sampleIntervalValue: t.data.sampleIntervalValue } }), _ = ut((f, g = false) => {
    if (!(o == null ? void 0 : o._id) || (o == null ? void 0 : o.write) === false) return;
    const v = Zt(f, o == null ? void 0 : o.type);
    v != null && (e((ot) => ({ values: { ...ot.values, [`${o._id}.val`]: v, [`${o._id}.lc`]: E } })), u.current = Date.now() + c + 1500, a.current = { lc: E, value: v }, !g && b && b.next(v));
  }, [c, b, o, e]);
  return { value: s, hasBackendChange: p, updateValue: _ };
};
export {
  sr as d,
  ur as u
};
