import { i as ir, e as H, m as g, g as z, l as F, h as or } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { e as sr, C as W, u as ur } from "./useData-Ogol4QJ_.js";
import { _ as O, a as T, b as P, c as m, d as ar, e as J, f as V, g as cr, h as lr } from "./tslib.es6-F1e60Aum.js";
import { V as I } from "./usePopoverPositioning-BUV6laon.js";
const it = () => [{ label: "", type: "custom", component: () => ir(sr, { dividerText: "write_value" }) }, { name: "sampleInterval", type: "checkbox", label: "sample_interval", default: false }, { name: "sampleIntervalValue", type: "number", label: "sample_interval_value", default: 200, min: 0, max: 1e4, step: 1, hidden: "!data.sampleInterval" }, { name: "delay", type: "number", label: "delay", default: 300, min: 0, max: 1e4, step: 1, hidden: "data.sampleInterval" }];
function N(t) {
  return !(t == null || String(t).trim() === "" || Number.isNaN(+t));
}
function h(t) {
  return typeof t == "function";
}
function K(t) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = t(e);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var C = K(function(t) {
  return function(r) {
    t(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function k(t, e) {
  if (t) {
    var r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var x = (function() {
  function t(e) {
    this.initialTeardown = e, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, r, n, i, s;
    if (!this.closed) {
      this.closed = true;
      var o = this._parentage;
      if (o) if (this._parentage = null, Array.isArray(o)) try {
        for (var a = O(o), u = a.next(); !u.done; u = a.next()) {
          var c = u.value;
          c.remove(this);
        }
      } catch (v) {
        e = { error: v };
      } finally {
        try {
          u && !u.done && (r = a.return) && r.call(a);
        } finally {
          if (e) throw e.error;
        }
      }
      else o.remove(this);
      var f = this.initialTeardown;
      if (h(f)) try {
        f();
      } catch (v) {
        s = v instanceof C ? v.errors : [v];
      }
      var l = this._finalizers;
      if (l) {
        this._finalizers = null;
        try {
          for (var d = O(l), b = d.next(); !b.done; b = d.next()) {
            var _ = b.value;
            try {
              $(_);
            } catch (v) {
              s = s ?? [], v instanceof C ? s = T(T([], P(s)), P(v.errors)) : s.push(v);
            }
          }
        } catch (v) {
          n = { error: v };
        } finally {
          try {
            b && !b.done && (i = d.return) && i.call(d);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (s) throw new C(s);
    }
  }, t.prototype.add = function(e) {
    var r;
    if (e && e !== this) if (this.closed) $(e);
    else {
      if (e instanceof t) {
        if (e.closed || e._hasParent(this)) return;
        e._addParent(this);
      }
      (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
    }
  }, t.prototype._hasParent = function(e) {
    var r = this._parentage;
    return r === e || Array.isArray(r) && r.includes(e);
  }, t.prototype._addParent = function(e) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e;
  }, t.prototype._removeParent = function(e) {
    var r = this._parentage;
    r === e ? this._parentage = null : Array.isArray(r) && k(r, e);
  }, t.prototype.remove = function(e) {
    var r = this._finalizers;
    r && k(r, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = (function() {
    var e = new t();
    return e.closed = true, e;
  })(), t;
})(), Q = x.EMPTY;
function X(t) {
  return t instanceof x || t && "closed" in t && h(t.remove) && h(t.add) && h(t.unsubscribe);
}
function $(t) {
  h(t) ? t() : t.unsubscribe();
}
var fr = { Promise: void 0 }, hr = { setTimeout: function(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
  return setTimeout.apply(void 0, T([t, e], P(r)));
}, clearTimeout: function(t) {
  return clearTimeout(t);
}, delegate: void 0 };
function Z(t) {
  hr.setTimeout(function() {
    throw t;
  });
}
function M() {
}
function E(t) {
  t();
}
var R = (function(t) {
  m(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.isStopped = false, r ? (n.destination = r, X(r) && r.add(n)) : n.destination = pr, n;
  }
  return e.create = function(r, n, i) {
    return new U(r, n, i);
  }, e.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, e.prototype.error = function(r) {
    this.isStopped || (this.isStopped = true, this._error(r));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(r) {
    this.destination.next(r);
  }, e.prototype._error = function(r) {
    try {
      this.destination.error(r);
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
})(x), dr = (function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var r = this.partialObserver;
    if (r.next) try {
      r.next(e);
    } catch (n) {
      A(n);
    }
  }, t.prototype.error = function(e) {
    var r = this.partialObserver;
    if (r.error) try {
      r.error(e);
    } catch (n) {
      A(n);
    }
    else A(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete) try {
      e.complete();
    } catch (r) {
      A(r);
    }
  }, t;
})(), U = (function(t) {
  m(e, t);
  function e(r, n, i) {
    var s = t.call(this) || this, o;
    return h(r) || !r ? o = { next: r ?? void 0, error: n ?? void 0, complete: i ?? void 0 } : o = r, s.destination = new dr(o), s;
  }
  return e;
})(R);
function A(t) {
  Z(t);
}
function vr(t) {
  throw t;
}
var pr = { closed: true, next: M, error: vr, complete: M }, D = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function br(t) {
  return t;
}
function yr(t) {
  return t.length === 0 ? br : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(n, i) {
      return i(n);
    }, r);
  };
}
var y = (function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var r = new t();
    return r.source = this, r.operator = e, r;
  }, t.prototype.subscribe = function(e, r, n) {
    var i = this, s = _r(e) ? e : new U(e, r, n);
    return E(function() {
      var o = i, a = o.operator, u = o.source;
      s.add(a ? a.call(s, u) : u ? i._subscribe(s) : i._trySubscribe(s));
    }), s;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (r) {
      e.error(r);
    }
  }, t.prototype.forEach = function(e, r) {
    var n = this;
    return r = Y(r), new r(function(i, s) {
      var o = new U({ next: function(a) {
        try {
          e(a);
        } catch (u) {
          s(u), o.unsubscribe();
        }
      }, error: s, complete: i });
      n.subscribe(o);
    });
  }, t.prototype._subscribe = function(e) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e);
  }, t.prototype[D] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    return yr(e)(this);
  }, t.prototype.toPromise = function(e) {
    var r = this;
    return e = Y(e), new e(function(n, i) {
      var s;
      r.subscribe(function(o) {
        return s = o;
      }, function(o) {
        return i(o);
      }, function() {
        return n(s);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
})();
function Y(t) {
  var e;
  return (e = t ?? fr.Promise) !== null && e !== void 0 ? e : Promise;
}
function mr(t) {
  return t && h(t.next) && h(t.error) && h(t.complete);
}
function _r(t) {
  return t && t instanceof R || mr(t) && X(t);
}
function Sr(t) {
  return h(t == null ? void 0 : t.lift);
}
function rr(t) {
  return function(e) {
    if (Sr(e)) return e.lift(function(r) {
      try {
        return t(r, this);
      } catch (n) {
        this.error(n);
      }
    });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function j(t, e, r, n, i) {
  return new wr(t, e, r, n, i);
}
var wr = (function(t) {
  m(e, t);
  function e(r, n, i, s, o, a) {
    var u = t.call(this, r) || this;
    return u.onFinalize = o, u.shouldUnsubscribe = a, u._next = n ? function(c) {
      try {
        n(c);
      } catch (f) {
        r.error(f);
      }
    } : t.prototype._next, u._error = s ? function(c) {
      try {
        s(c);
      } catch (f) {
        r.error(f);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, u._complete = i ? function() {
      try {
        i();
      } catch (c) {
        r.error(c);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, u;
  }
  return e.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      t.prototype.unsubscribe.call(this), !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, e;
})(R), gr = K(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), tr = (function(t) {
  m(e, t);
  function e() {
    var r = t.call(this) || this;
    return r.closed = false, r.currentObservers = null, r.observers = [], r.isStopped = false, r.hasError = false, r.thrownError = null, r;
  }
  return e.prototype.lift = function(r) {
    var n = new B(this, this);
    return n.operator = r, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed) throw new gr();
  }, e.prototype.next = function(r) {
    var n = this;
    E(function() {
      var i, s;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var o = O(n.currentObservers), a = o.next(); !a.done; a = o.next()) {
            var u = a.value;
            u.next(r);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            a && !a.done && (s = o.return) && s.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(r) {
    var n = this;
    E(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = true, n.thrownError = r;
        for (var i = n.observers; i.length; ) i.shift().error(r);
      }
    });
  }, e.prototype.complete = function() {
    var r = this;
    E(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = true;
        for (var n = r.observers; n.length; ) n.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", { get: function() {
    var r;
    return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
  }, enumerable: false, configurable: true }), e.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, r);
  }, e.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, e.prototype._innerSubscribe = function(r) {
    var n = this, i = this, s = i.hasError, o = i.isStopped, a = i.observers;
    return s || o ? Q : (this.currentObservers = null, a.push(r), new x(function() {
      n.currentObservers = null, k(a, r);
    }));
  }, e.prototype._checkFinalizedStatuses = function(r) {
    var n = this, i = n.hasError, s = n.thrownError, o = n.isStopped;
    i ? r.error(s) : o && r.complete();
  }, e.prototype.asObservable = function() {
    var r = new y();
    return r.source = this, r;
  }, e.create = function(r, n) {
    return new B(r, n);
  }, e;
})(y), B = (function(t) {
  m(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.destination = r, i.source = n, i;
  }
  return e.prototype.next = function(r) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, r);
  }, e.prototype.error = function(r) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, r);
  }, e.prototype.complete = function() {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
  }, e.prototype._subscribe = function(r) {
    var n, i;
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && i !== void 0 ? i : Q;
  }, e;
})(tr), xr = { now: function() {
  return Date.now();
} }, Ir = (function(t) {
  m(e, t);
  function e(r, n) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(r, n) {
    return this;
  }, e;
})(x), G = { setInterval: function(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
  return setInterval.apply(void 0, T([t, e], P(r)));
}, clearInterval: function(t) {
  return clearInterval(t);
}, delegate: void 0 }, Ar = (function(t) {
  m(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i.pending = false, i;
  }
  return e.prototype.schedule = function(r, n) {
    var i;
    if (n === void 0 && (n = 0), this.closed) return this;
    this.state = r;
    var s = this.id, o = this.scheduler;
    return s != null && (this.id = this.recycleAsyncId(o, s, n)), this.pending = true, this.delay = n, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(o, this.id, n), this;
  }, e.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), G.setInterval(r.flush.bind(r, this), i);
  }, e.prototype.recycleAsyncId = function(r, n, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === false) return n;
    n != null && G.clearInterval(n);
  }, e.prototype.execute = function(r, n) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = false;
    var i = this._execute(r, n);
    if (i) return i;
    this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(r, n) {
    var i = false, s;
    try {
      this.work(r);
    } catch (o) {
      i = true, s = o || new Error("Scheduled action threw falsy error");
    }
    if (i) return this.unsubscribe(), s;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var r = this, n = r.id, i = r.scheduler, s = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = false, k(s, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
})(Ir), q = (function() {
  function t(e, r) {
    r === void 0 && (r = t.now), this.schedulerActionCtor = e, this.now = r;
  }
  return t.prototype.schedule = function(e, r, n) {
    return r === void 0 && (r = 0), new this.schedulerActionCtor(this, e).schedule(n, r);
  }, t.now = xr.now, t;
})(), Er = (function(t) {
  m(e, t);
  function e(r, n) {
    n === void 0 && (n = q.now);
    var i = t.call(this, r, n) || this;
    return i.actions = [], i._active = false, i;
  }
  return e.prototype.flush = function(r) {
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
  }, e;
})(q), L = new Er(Ar), Or = L;
function Tr(t) {
  return t && h(t.schedule);
}
var Pr = (function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
});
function kr(t) {
  return h(t == null ? void 0 : t.then);
}
function Vr(t) {
  return h(t[D]);
}
function Cr(t) {
  return Symbol.asyncIterator && h(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Ur(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function jr() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Rr = jr();
function Dr(t) {
  return h(t == null ? void 0 : t[Rr]);
}
function Lr(t) {
  return ar(this, arguments, function() {
    var r, n, i, s;
    return J(this, function(o) {
      switch (o.label) {
        case 0:
          r = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, V(r.read())];
        case 3:
          return n = o.sent(), i = n.value, s = n.done, s ? [4, V(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, V(i)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return r.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Fr(t) {
  return h(t == null ? void 0 : t.getReader);
}
function Nr(t) {
  if (t instanceof y) return t;
  if (t != null) {
    if (Vr(t)) return $r(t);
    if (Pr(t)) return Mr(t);
    if (kr(t)) return Yr(t);
    if (Cr(t)) return er(t);
    if (Dr(t)) return Br(t);
    if (Fr(t)) return Gr(t);
  }
  throw Ur(t);
}
function $r(t) {
  return new y(function(e) {
    var r = t[D]();
    if (h(r.subscribe)) return r.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Mr(t) {
  return new y(function(e) {
    for (var r = 0; r < t.length && !e.closed; r++) e.next(t[r]);
    e.complete();
  });
}
function Yr(t) {
  return new y(function(e) {
    t.then(function(r) {
      e.closed || (e.next(r), e.complete());
    }, function(r) {
      return e.error(r);
    }).then(null, Z);
  });
}
function Br(t) {
  return new y(function(e) {
    var r, n;
    try {
      for (var i = O(t), s = i.next(); !s.done; s = i.next()) {
        var o = s.value;
        if (e.next(o), e.closed) return;
      }
    } catch (a) {
      r = { error: a };
    } finally {
      try {
        s && !s.done && (n = i.return) && n.call(i);
      } finally {
        if (r) throw r.error;
      }
    }
    e.complete();
  });
}
function er(t) {
  return new y(function(e) {
    qr(t, e).catch(function(r) {
      return e.error(r);
    });
  });
}
function Gr(t) {
  return er(Lr(t));
}
function qr(t, e) {
  var r, n, i, s;
  return cr(this, void 0, void 0, function() {
    var o, a;
    return J(this, function(u) {
      switch (u.label) {
        case 0:
          u.trys.push([0, 5, 6, 11]), r = lr(t), u.label = 1;
        case 1:
          return [4, r.next()];
        case 2:
          if (n = u.sent(), !!n.done) return [3, 4];
          if (o = n.value, e.next(o), e.closed) return [2];
          u.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return a = u.sent(), i = { error: a }, [3, 11];
        case 6:
          return u.trys.push([6, , 9, 10]), n && !n.done && (s = r.return) ? [4, s.call(r)] : [3, 8];
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
function Hr(t) {
  return t instanceof Date && !isNaN(t);
}
function zr(t, e, r) {
  t === void 0 && (t = 0), r === void 0 && (r = Or);
  var n = -1;
  return e != null && (Tr(e) ? r = e : n = e), new y(function(i) {
    var s = Hr(t) ? +t - r.now() : t;
    s < 0 && (s = 0);
    var o = 0;
    return r.schedule(function() {
      i.closed || (i.next(o++), 0 <= n ? this.schedule(void 0, n) : i.complete());
    }, s);
  });
}
function Wr(t, e) {
  return e === void 0 && (e = L), rr(function(r, n) {
    var i = null, s = null, o = null, a = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var c = s;
        s = null, n.next(c);
      }
    };
    function u() {
      var c = o + t, f = e.now();
      if (f < c) {
        i = this.schedule(void 0, c - f), n.add(i);
        return;
      }
      a();
    }
    r.subscribe(j(n, function(c) {
      s = c, o = e.now(), i || (i = e.schedule(u, t), n.add(i));
    }, function() {
      a(), n.complete();
    }, void 0, function() {
      s = i = null;
    }));
  });
}
function Jr(t, e) {
  return rr(function(r, n) {
    var i = e ?? {}, s = i.leading, o = s === void 0 ? true : s, a = i.trailing, u = a === void 0 ? false : a, c = false, f = null, l = null, d = false, b = function() {
      l == null ? void 0 : l.unsubscribe(), l = null, u && (S(), d && n.complete());
    }, _ = function() {
      l = null, d && n.complete();
    }, v = function(p) {
      return l = Nr(t(p)).subscribe(j(n, b, _));
    }, S = function() {
      if (c) {
        c = false;
        var p = f;
        f = null, n.next(p), !d && v(p);
      }
    };
    r.subscribe(j(n, function(p) {
      c = true, f = p, !(l && !l.closed) && (o ? S() : v(p));
    }, function() {
      d = true, !(u && c && l && !l.closed) && n.complete();
    }));
  });
}
function Kr(t, e, r) {
  e === void 0 && (e = L);
  var n = zr(t, e);
  return Jr(function() {
    return n;
  }, r);
}
function Qr({ oidObject: t, data: { sampleInterval: e, sampleIntervalValue: r, delay: n } }) {
  const { setValue: i } = H(W), s = g(void 0), o = g(null), a = g(i);
  a.current = i;
  const u = t == null ? void 0 : t._id, c = z(() => {
    const f = Number(r), l = Number(n);
    return e ? f : l;
  }, [e, r, n]);
  return F(() => {
    if (s.current || (s.current = new tr()), !u) return;
    const f = s.current;
    return o.current && o.current.unsubscribe(), o.current = f.pipe(e ? Kr(c, void 0, { leading: false, trailing: true }) : Wr(c)).subscribe((l) => {
      a.current(u, l);
    }), () => {
      o.current && (o.current.unsubscribe(), o.current = null);
    };
  }, [e, c, u]), F(() => () => {
    o.current && (o.current.unsubscribe(), o.current = null), s.current && s.current.complete();
  }, []), u ? { next: (f) => {
    var _a;
    (_a = s.current) == null ? void 0 : _a.next(f);
  } } : null;
}
function Xr(t, e) {
  switch (e) {
    case "string":
      return String(t);
    case "number":
      return N(t) ? Number(t) : void 0;
    case "mixed":
      return /^true$/i.test(String(t)) ? true : /^false$/i.test(String(t)) ? false : N(t) ? Number(t) : String(t);
    case "boolean":
      return /^true$/i.test(String(t));
    default:
      return t;
  }
}
function Zr(t, e) {
  const r = String(t ?? ""), n = String(e ?? "");
  if (r === n) return false;
  const i = Number(t ?? 0), s = Number(e ?? 0);
  return Math.abs(i - s) >= 1;
}
const ot = (t) => {
  const { setState: e, widget: r, getPropertyValue: n, values: i } = H(W), { data: s } = ur("oid"), o = r.data[`${t}Object`], a = n(t), u = g({ lc: void 0, value: void 0 }), c = g(0), f = Number(s.delay ?? r.data.delay) || 300, l = (o == null ? void 0 : o._id) ? i[`${o._id}.lc`] : void 0, d = (o == null ? void 0 : o._id) ? i[`${o._id}.val`] : void 0, b = z(() => {
    if (!(o == null ? void 0 : o._id)) return false;
    if (l === I) return u.current = { lc: I, value: d }, false;
    if (Date.now() < c.current) return u.current = { lc: l, value: d }, false;
    if (u.current.lc === void 0) return u.current = { lc: l, value: d }, false;
    const S = u.current.lc !== l, p = Zr(u.current.value, d);
    return u.current = { lc: l, value: d }, S && p;
  }, [o == null ? void 0 : o._id, l, d]), _ = Qr({ oidObject: o, data: { delay: r.data.delay, sampleInterval: r.data.sampleInterval, sampleIntervalValue: r.data.sampleIntervalValue } }), v = or((S, p = false) => {
    if (!(o == null ? void 0 : o._id) || (o == null ? void 0 : o.write) === false) return;
    const w = Xr(S, o == null ? void 0 : o.type);
    w != null && (e((nr) => ({ values: { ...nr.values, [`${o._id}.val`]: w, [`${o._id}.lc`]: I } })), c.current = Date.now() + f + 1500, u.current = { lc: I, value: w }, !p && _ && _.next(w));
  }, [f, _, o, e]);
  return { value: a, hasBackendChange: b, updateValue: v };
};
export {
  it as d,
  ot as u
};
