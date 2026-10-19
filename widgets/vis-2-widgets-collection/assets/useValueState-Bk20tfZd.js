import { E as e, _ as t, b as n, o as r, v as i, w as a } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { x as o } from "./usePopoverPositioning-DS2NF3yn.js";
import { C as s, T as c, t as l } from "./useData-fwe13Z_u.js";
var u = () => [{ label: ``, type: `custom`, component: () => r(s, { dividerText: `write_value` }) }, { name: `sampleInterval`, type: `checkbox`, label: `sample_interval`, default: false }, { name: `sampleIntervalValue`, type: `number`, label: `sample_interval_value`, default: 200, min: 0, max: 1e4, step: 1, hidden: `!data.sampleInterval` }, { name: `delay`, type: `number`, label: `delay`, default: 300, min: 0, max: 1e4, step: 1, hidden: `data.sampleInterval` }];
function d(e2) {
  return !(e2 == null || String(e2).trim() === `` || Number.isNaN(+e2));
}
var f = function(e2, t2) {
  return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
    e3.__proto__ = t3;
  } || function(e3, t3) {
    for (var n2 in t3) Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
  }, f(e2, t2);
};
function p(e2, t2) {
  if (typeof t2 != `function` && t2 !== null) throw TypeError(`Class extends value ` + String(t2) + ` is not a constructor or null`);
  f(e2, t2);
  function n2() {
    this.constructor = e2;
  }
  e2.prototype = t2 === null ? Object.create(t2) : (n2.prototype = t2.prototype, new n2());
}
function m(e2, t2, n2, r2) {
  function i2(e3) {
    return e3 instanceof n2 ? e3 : new n2(function(t3) {
      t3(e3);
    });
  }
  return new (n2 ||= Promise)(function(n3, a2) {
    function o2(e3) {
      try {
        c2(r2.next(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function s2(e3) {
      try {
        c2(r2.throw(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function c2(e3) {
      e3.done ? n3(e3.value) : i2(e3.value).then(o2, s2);
    }
    c2((r2 = r2.apply(e2, t2 || [])).next());
  });
}
function h(e2, t2) {
  var n2 = { label: 0, sent: function() {
    if (a2[0] & 1) throw a2[1];
    return a2[1];
  }, trys: [], ops: [] }, r2, i2, a2, o2 = Object.create((typeof Iterator == `function` ? Iterator : Object).prototype);
  return o2.next = s2(0), o2.throw = s2(1), o2.return = s2(2), typeof Symbol == `function` && (o2[Symbol.iterator] = function() {
    return this;
  }), o2;
  function s2(e3) {
    return function(t3) {
      return c2([e3, t3]);
    };
  }
  function c2(s3) {
    if (r2) throw TypeError(`Generator is already executing.`);
    for (; o2 && (o2 = 0, s3[0] && (n2 = 0)), n2; ) try {
      if (r2 = 1, i2 && (a2 = s3[0] & 2 ? i2.return : s3[0] ? i2.throw || ((a2 = i2.return) && a2.call(i2), 0) : i2.next) && !(a2 = a2.call(i2, s3[1])).done) return a2;
      switch (i2 = 0, a2 && (s3 = [s3[0] & 2, a2.value]), s3[0]) {
        case 0:
        case 1:
          a2 = s3;
          break;
        case 4:
          return n2.label++, { value: s3[1], done: false };
        case 5:
          n2.label++, i2 = s3[1], s3 = [0];
          continue;
        case 7:
          s3 = n2.ops.pop(), n2.trys.pop();
          continue;
        default:
          if (a2 = n2.trys, !(a2 = a2.length > 0 && a2[a2.length - 1]) && (s3[0] === 6 || s3[0] === 2)) {
            n2 = 0;
            continue;
          }
          if (s3[0] === 3 && (!a2 || s3[1] > a2[0] && s3[1] < a2[3])) {
            n2.label = s3[1];
            break;
          }
          if (s3[0] === 6 && n2.label < a2[1]) {
            n2.label = a2[1], a2 = s3;
            break;
          }
          if (a2 && n2.label < a2[2]) {
            n2.label = a2[2], n2.ops.push(s3);
            break;
          }
          a2[2] && n2.ops.pop(), n2.trys.pop();
          continue;
      }
      s3 = t2.call(e2, n2);
    } catch (e3) {
      s3 = [6, e3], i2 = 0;
    } finally {
      r2 = a2 = 0;
    }
    if (s3[0] & 5) throw s3[1];
    return { value: s3[0] ? s3[1] : void 0, done: true };
  }
}
function g(e2) {
  var t2 = typeof Symbol == `function` && Symbol.iterator, n2 = t2 && e2[t2], r2 = 0;
  if (n2) return n2.call(e2);
  if (e2 && typeof e2.length == `number`) return { next: function() {
    return e2 && r2 >= e2.length && (e2 = void 0), { value: e2 && e2[r2++], done: !e2 };
  } };
  throw TypeError(t2 ? `Object is not iterable.` : `Symbol.iterator is not defined.`);
}
function _(e2, t2) {
  var n2 = typeof Symbol == `function` && e2[Symbol.iterator];
  if (!n2) return e2;
  var r2 = n2.call(e2), i2, a2 = [], o2;
  try {
    for (; (t2 === void 0 || t2-- > 0) && !(i2 = r2.next()).done; ) a2.push(i2.value);
  } catch (e3) {
    o2 = { error: e3 };
  } finally {
    try {
      i2 && !i2.done && (n2 = r2.return) && n2.call(r2);
    } finally {
      if (o2) throw o2.error;
    }
  }
  return a2;
}
function v(e2, t2, n2) {
  if (n2 || arguments.length === 2) for (var r2 = 0, i2 = t2.length, a2; r2 < i2; r2++) (a2 || !(r2 in t2)) && (a2 ||= Array.prototype.slice.call(t2, 0, r2), a2[r2] = t2[r2]);
  return e2.concat(a2 || Array.prototype.slice.call(t2));
}
function y(e2) {
  return this instanceof y ? (this.v = e2, this) : new y(e2);
}
function b(e2, t2, n2) {
  if (!Symbol.asyncIterator) throw TypeError(`Symbol.asyncIterator is not defined.`);
  var r2 = n2.apply(e2, t2 || []), i2, a2 = [];
  return i2 = Object.create((typeof AsyncIterator == `function` ? AsyncIterator : Object).prototype), s2(`next`), s2(`throw`), s2(`return`, o2), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function o2(e3) {
    return function(t3) {
      return Promise.resolve(t3).then(e3, d2);
    };
  }
  function s2(e3, t3) {
    r2[e3] && (i2[e3] = function(t4) {
      return new Promise(function(n3, r3) {
        a2.push([e3, t4, n3, r3]) > 1 || c2(e3, t4);
      });
    }, t3 && (i2[e3] = t3(i2[e3])));
  }
  function c2(e3, t3) {
    try {
      l2(r2[e3](t3));
    } catch (e4) {
      f2(a2[0][3], e4);
    }
  }
  function l2(e3) {
    e3.value instanceof y ? Promise.resolve(e3.value.v).then(u2, d2) : f2(a2[0][2], e3);
  }
  function u2(e3) {
    c2(`next`, e3);
  }
  function d2(e3) {
    c2(`throw`, e3);
  }
  function f2(e3, t3) {
    e3(t3), a2.shift(), a2.length && c2(a2[0][0], a2[0][1]);
  }
}
function x(e2) {
  if (!Symbol.asyncIterator) throw TypeError(`Symbol.asyncIterator is not defined.`);
  var t2 = e2[Symbol.asyncIterator], n2;
  return t2 ? t2.call(e2) : (e2 = typeof g == `function` ? g(e2) : e2[Symbol.iterator](), n2 = {}, r2(`next`), r2(`throw`), r2(`return`), n2[Symbol.asyncIterator] = function() {
    return this;
  }, n2);
  function r2(t3) {
    n2[t3] = e2[t3] && function(n3) {
      return new Promise(function(r3, a2) {
        n3 = e2[t3](n3), i2(r3, a2, n3.done, n3.value);
      });
    };
  }
  function i2(e3, t3, n3, r3) {
    Promise.resolve(r3).then(function(t4) {
      e3({ value: t4, done: n3 });
    }, t3);
  }
}
function S(e2) {
  return typeof e2 == `function`;
}
function C(e2) {
  var t2 = e2(function(e3) {
    Error.call(e3), e3.stack = Error().stack;
  });
  return t2.prototype = Object.create(Error.prototype), t2.prototype.constructor = t2, t2;
}
var w = C(function(e2) {
  return function(t2) {
    e2(this), this.message = t2 ? t2.length + ` errors occurred during unsubscription:
` + t2.map(function(e3, t3) {
      return t3 + 1 + `) ` + e3.toString();
    }).join(`
  `) : ``, this.name = `UnsubscriptionError`, this.errors = t2;
  };
});
function T(e2, t2) {
  if (e2) {
    var n2 = e2.indexOf(t2);
    0 <= n2 && e2.splice(n2, 1);
  }
}
var E = (function() {
  function e2(e3) {
    this.initialTeardown = e3, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return e2.prototype.unsubscribe = function() {
    var e3, t2, n2, r2, i2;
    if (!this.closed) {
      this.closed = true;
      var a2 = this._parentage;
      if (a2) {
        if (this._parentage = null, Array.isArray(a2)) try {
          for (var o2 = g(a2), s2 = o2.next(); !s2.done; s2 = o2.next()) s2.value.remove(this);
        } catch (t3) {
          e3 = { error: t3 };
        } finally {
          try {
            s2 && !s2.done && (t2 = o2.return) && t2.call(o2);
          } finally {
            if (e3) throw e3.error;
          }
        }
        else a2.remove(this);
      }
      var c2 = this.initialTeardown;
      if (S(c2)) try {
        c2();
      } catch (e4) {
        i2 = e4 instanceof w ? e4.errors : [e4];
      }
      var l2 = this._finalizers;
      if (l2) {
        this._finalizers = null;
        try {
          for (var u2 = g(l2), d2 = u2.next(); !d2.done; d2 = u2.next()) {
            var f2 = d2.value;
            try {
              k(f2);
            } catch (e4) {
              i2 ??= [], e4 instanceof w ? i2 = v(v([], _(i2)), _(e4.errors)) : i2.push(e4);
            }
          }
        } catch (e4) {
          n2 = { error: e4 };
        } finally {
          try {
            d2 && !d2.done && (r2 = u2.return) && r2.call(u2);
          } finally {
            if (n2) throw n2.error;
          }
        }
      }
      if (i2) throw new w(i2);
    }
  }, e2.prototype.add = function(t2) {
    if (t2 && t2 !== this) {
      if (this.closed) k(t2);
      else {
        if (t2 instanceof e2) {
          if (t2.closed || t2._hasParent(this)) return;
          t2._addParent(this);
        }
        (this._finalizers = this._finalizers ?? []).push(t2);
      }
    }
  }, e2.prototype._hasParent = function(e3) {
    var t2 = this._parentage;
    return t2 === e3 || Array.isArray(t2) && t2.includes(e3);
  }, e2.prototype._addParent = function(e3) {
    var t2 = this._parentage;
    this._parentage = Array.isArray(t2) ? (t2.push(e3), t2) : t2 ? [t2, e3] : e3;
  }, e2.prototype._removeParent = function(e3) {
    var t2 = this._parentage;
    t2 === e3 ? this._parentage = null : Array.isArray(t2) && T(t2, e3);
  }, e2.prototype.remove = function(t2) {
    var n2 = this._finalizers;
    n2 && T(n2, t2), t2 instanceof e2 && t2._removeParent(this);
  }, e2.EMPTY = (function() {
    var t2 = new e2();
    return t2.closed = true, t2;
  })(), e2;
})(), D = E.EMPTY;
function O(e2) {
  return e2 instanceof E || e2 && `closed` in e2 && S(e2.remove) && S(e2.add) && S(e2.unsubscribe);
}
function k(e2) {
  S(e2) ? e2() : e2.unsubscribe();
}
var A = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: false, useDeprecatedNextContext: false }, j = { setTimeout: function(e2, t2) {
  var n2 = [...arguments].slice(2), r2 = j.delegate;
  return (r2 == null ? void 0 : r2.setTimeout) ? r2.setTimeout.apply(r2, v([e2, t2], _(n2))) : setTimeout.apply(void 0, v([e2, t2], _(n2)));
}, clearTimeout: function(e2) {
  var _a;
  return (((_a = j.delegate) == null ? void 0 : _a.clearTimeout) || clearTimeout)(e2);
}, delegate: void 0 };
function M(e2) {
  j.setTimeout(function() {
    var t2 = A.onUnhandledError;
    if (t2) t2(e2);
    else throw e2;
  });
}
function N() {
}
var ee = (function() {
  return P(`C`, void 0, void 0);
})();
function te(e2) {
  return P(`E`, void 0, e2);
}
function ne(e2) {
  return P(`N`, e2, void 0);
}
function P(e2, t2, n2) {
  return { kind: e2, value: t2, error: n2 };
}
var F = null;
function I(e2) {
  if (A.useDeprecatedSynchronousErrorHandling) {
    var t2 = !F;
    if (t2 && (F = { errorThrown: false, error: null }), e2(), t2) {
      var n2 = F, r2 = n2.errorThrown, i2 = n2.error;
      if (F = null, r2) throw i2;
    }
  } else e2();
}
function re(e2) {
  A.useDeprecatedSynchronousErrorHandling && F && (F.errorThrown = true, F.error = e2);
}
var L = (function(e2) {
  p(t2, e2);
  function t2(t3) {
    var n2 = e2.call(this) || this;
    return n2.isStopped = false, t3 ? (n2.destination = t3, O(t3) && t3.add(n2)) : n2.destination = se, n2;
  }
  return t2.create = function(e3, t3, n2) {
    return new z(e3, t3, n2);
  }, t2.prototype.next = function(e3) {
    this.isStopped ? V(ne(e3), this) : this._next(e3);
  }, t2.prototype.error = function(e3) {
    this.isStopped ? V(te(e3), this) : (this.isStopped = true, this._error(e3));
  }, t2.prototype.complete = function() {
    this.isStopped ? V(ee, this) : (this.isStopped = true, this._complete());
  }, t2.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e2.prototype.unsubscribe.call(this), this.destination = null);
  }, t2.prototype._next = function(e3) {
    this.destination.next(e3);
  }, t2.prototype._error = function(e3) {
    try {
      this.destination.error(e3);
    } finally {
      this.unsubscribe();
    }
  }, t2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t2;
})(E), ie = Function.prototype.bind;
function R(e2, t2) {
  return ie.call(e2, t2);
}
var ae = (function() {
  function e2(e3) {
    this.partialObserver = e3;
  }
  return e2.prototype.next = function(e3) {
    var t2 = this.partialObserver;
    if (t2.next) try {
      t2.next(e3);
    } catch (e4) {
      B(e4);
    }
  }, e2.prototype.error = function(e3) {
    var t2 = this.partialObserver;
    if (t2.error) try {
      t2.error(e3);
    } catch (e4) {
      B(e4);
    }
    else B(e3);
  }, e2.prototype.complete = function() {
    var e3 = this.partialObserver;
    if (e3.complete) try {
      e3.complete();
    } catch (e4) {
      B(e4);
    }
  }, e2;
})(), z = (function(e2) {
  p(t2, e2);
  function t2(t3, n2, r2) {
    var i2 = e2.call(this) || this, a2;
    if (S(t3) || !t3) a2 = { next: t3 ?? void 0, error: n2 ?? void 0, complete: r2 ?? void 0 };
    else {
      var o2;
      i2 && A.useDeprecatedNextContext ? (o2 = Object.create(t3), o2.unsubscribe = function() {
        return i2.unsubscribe();
      }, a2 = { next: t3.next && R(t3.next, o2), error: t3.error && R(t3.error, o2), complete: t3.complete && R(t3.complete, o2) }) : a2 = t3;
    }
    return i2.destination = new ae(a2), i2;
  }
  return t2;
})(L);
function B(e2) {
  A.useDeprecatedSynchronousErrorHandling ? re(e2) : M(e2);
}
function oe(e2) {
  throw e2;
}
function V(e2, t2) {
  var n2 = A.onStoppedNotification;
  n2 && j.setTimeout(function() {
    return n2(e2, t2);
  });
}
var se = { closed: true, next: N, error: oe, complete: N }, H = (function() {
  return typeof Symbol == `function` && Symbol.observable || `@@observable`;
})();
function ce(e2) {
  return e2;
}
function le(e2) {
  return e2.length === 0 ? ce : e2.length === 1 ? e2[0] : function(t2) {
    return e2.reduce(function(e3, t3) {
      return t3(e3);
    }, t2);
  };
}
var U = (function() {
  function e2(e3) {
    e3 && (this._subscribe = e3);
  }
  return e2.prototype.lift = function(t2) {
    var n2 = new e2();
    return n2.source = this, n2.operator = t2, n2;
  }, e2.prototype.subscribe = function(e3, t2, n2) {
    var r2 = this, i2 = de(e3) ? e3 : new z(e3, t2, n2);
    return I(function() {
      var e4 = r2, t3 = e4.operator, n3 = e4.source;
      i2.add(t3 ? t3.call(i2, n3) : n3 ? r2._subscribe(i2) : r2._trySubscribe(i2));
    }), i2;
  }, e2.prototype._trySubscribe = function(e3) {
    try {
      return this._subscribe(e3);
    } catch (t2) {
      e3.error(t2);
    }
  }, e2.prototype.forEach = function(e3, t2) {
    var n2 = this;
    return t2 = W(t2), new t2(function(t3, r2) {
      var i2 = new z({ next: function(t4) {
        try {
          e3(t4);
        } catch (e4) {
          r2(e4), i2.unsubscribe();
        }
      }, error: r2, complete: t3 });
      n2.subscribe(i2);
    });
  }, e2.prototype._subscribe = function(e3) {
    var _a;
    return (_a = this.source) == null ? void 0 : _a.subscribe(e3);
  }, e2.prototype[H] = function() {
    return this;
  }, e2.prototype.pipe = function() {
    return le([...arguments])(this);
  }, e2.prototype.toPromise = function(e3) {
    var t2 = this;
    return e3 = W(e3), new e3(function(e4, n2) {
      var r2;
      t2.subscribe(function(e5) {
        return r2 = e5;
      }, function(e5) {
        return n2(e5);
      }, function() {
        return e4(r2);
      });
    });
  }, e2.create = function(t2) {
    return new e2(t2);
  }, e2;
})();
function W(e2) {
  return e2 ?? A.Promise ?? Promise;
}
function ue(e2) {
  return e2 && S(e2.next) && S(e2.error) && S(e2.complete);
}
function de(e2) {
  return e2 && e2 instanceof L || ue(e2) && O(e2);
}
function fe(e2) {
  return S(e2 == null ? void 0 : e2.lift);
}
function G(e2) {
  return function(t2) {
    if (fe(t2)) return t2.lift(function(t3) {
      try {
        return e2(t3, this);
      } catch (e3) {
        this.error(e3);
      }
    });
    throw TypeError(`Unable to lift unknown Observable type`);
  };
}
function K(e2, t2, n2, r2, i2) {
  return new pe(e2, t2, n2, r2, i2);
}
var pe = (function(e2) {
  p(t2, e2);
  function t2(t3, n2, r2, i2, a2, o2) {
    var s2 = e2.call(this, t3) || this;
    return s2.onFinalize = a2, s2.shouldUnsubscribe = o2, s2._next = n2 ? function(e3) {
      try {
        n2(e3);
      } catch (e4) {
        t3.error(e4);
      }
    } : e2.prototype._next, s2._error = i2 ? function(e3) {
      try {
        i2(e3);
      } catch (e4) {
        t3.error(e4);
      } finally {
        this.unsubscribe();
      }
    } : e2.prototype._error, s2._complete = r2 ? function() {
      try {
        r2();
      } catch (e3) {
        t3.error(e3);
      } finally {
        this.unsubscribe();
      }
    } : e2.prototype._complete, s2;
  }
  return t2.prototype.unsubscribe = function() {
    var t3;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n2 = this.closed;
      e2.prototype.unsubscribe.call(this), !n2 && ((t3 = this.onFinalize) == null || t3.call(this));
    }
  }, t2;
})(L), me = C(function(e2) {
  return function() {
    e2(this), this.name = `ObjectUnsubscribedError`, this.message = `object unsubscribed`;
  };
}), q = (function(e2) {
  p(t2, e2);
  function t2() {
    var t3 = e2.call(this) || this;
    return t3.closed = false, t3.currentObservers = null, t3.observers = [], t3.isStopped = false, t3.hasError = false, t3.thrownError = null, t3;
  }
  return t2.prototype.lift = function(e3) {
    var t3 = new J(this, this);
    return t3.operator = e3, t3;
  }, t2.prototype._throwIfClosed = function() {
    if (this.closed) throw new me();
  }, t2.prototype.next = function(e3) {
    var t3 = this;
    I(function() {
      var n2, r2;
      if (t3._throwIfClosed(), !t3.isStopped) {
        t3.currentObservers ||= Array.from(t3.observers);
        try {
          for (var i2 = g(t3.currentObservers), a2 = i2.next(); !a2.done; a2 = i2.next()) a2.value.next(e3);
        } catch (e4) {
          n2 = { error: e4 };
        } finally {
          try {
            a2 && !a2.done && (r2 = i2.return) && r2.call(i2);
          } finally {
            if (n2) throw n2.error;
          }
        }
      }
    });
  }, t2.prototype.error = function(e3) {
    var t3 = this;
    I(function() {
      if (t3._throwIfClosed(), !t3.isStopped) {
        t3.hasError = t3.isStopped = true, t3.thrownError = e3;
        for (var n2 = t3.observers; n2.length; ) n2.shift().error(e3);
      }
    });
  }, t2.prototype.complete = function() {
    var e3 = this;
    I(function() {
      if (e3._throwIfClosed(), !e3.isStopped) {
        e3.isStopped = true;
        for (var t3 = e3.observers; t3.length; ) t3.shift().complete();
      }
    });
  }, t2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t2.prototype, "observed", { get: function() {
    var _a;
    return ((_a = this.observers) == null ? void 0 : _a.length) > 0;
  }, enumerable: false, configurable: true }), t2.prototype._trySubscribe = function(t3) {
    return this._throwIfClosed(), e2.prototype._trySubscribe.call(this, t3);
  }, t2.prototype._subscribe = function(e3) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(e3), this._innerSubscribe(e3);
  }, t2.prototype._innerSubscribe = function(e3) {
    var t3 = this, n2 = this, r2 = n2.hasError, i2 = n2.isStopped, a2 = n2.observers;
    return r2 || i2 ? D : (this.currentObservers = null, a2.push(e3), new E(function() {
      t3.currentObservers = null, T(a2, e3);
    }));
  }, t2.prototype._checkFinalizedStatuses = function(e3) {
    var t3 = this, n2 = t3.hasError, r2 = t3.thrownError, i2 = t3.isStopped;
    n2 ? e3.error(r2) : i2 && e3.complete();
  }, t2.prototype.asObservable = function() {
    var e3 = new U();
    return e3.source = this, e3;
  }, t2.create = function(e3, t3) {
    return new J(e3, t3);
  }, t2;
})(U), J = (function(e2) {
  p(t2, e2);
  function t2(t3, n2) {
    var r2 = e2.call(this) || this;
    return r2.destination = t3, r2.source = n2, r2;
  }
  return t2.prototype.next = function(e3) {
    var _a;
    var t3, n2;
    (n2 = (_a = t3 = this.destination) == null ? void 0 : _a.next) == null || n2.call(t3, e3);
  }, t2.prototype.error = function(e3) {
    var _a;
    var t3, n2;
    (n2 = (_a = t3 = this.destination) == null ? void 0 : _a.error) == null || n2.call(t3, e3);
  }, t2.prototype.complete = function() {
    var _a;
    var e3, t3;
    (t3 = (_a = e3 = this.destination) == null ? void 0 : _a.complete) == null || t3.call(e3);
  }, t2.prototype._subscribe = function(e3) {
    var _a;
    return ((_a = this.source) == null ? void 0 : _a.subscribe(e3)) ?? D;
  }, t2;
})(q), Y = { now: function() {
  return (Y.delegate || Date).now();
}, delegate: void 0 }, he = (function(e2) {
  p(t2, e2);
  function t2(t3, n2) {
    return e2.call(this) || this;
  }
  return t2.prototype.schedule = function(e3, t3) {
    return t3 === void 0 && (t3 = 0), this;
  }, t2;
})(E), X = { setInterval: function(e2, t2) {
  var n2 = [...arguments].slice(2), r2 = X.delegate;
  return (r2 == null ? void 0 : r2.setInterval) ? r2.setInterval.apply(r2, v([e2, t2], _(n2))) : setInterval.apply(void 0, v([e2, t2], _(n2)));
}, clearInterval: function(e2) {
  var _a;
  return (((_a = X.delegate) == null ? void 0 : _a.clearInterval) || clearInterval)(e2);
}, delegate: void 0 }, ge = (function(e2) {
  p(t2, e2);
  function t2(t3, n2) {
    var r2 = e2.call(this, t3, n2) || this;
    return r2.scheduler = t3, r2.work = n2, r2.pending = false, r2;
  }
  return t2.prototype.schedule = function(e3, t3) {
    if (t3 === void 0 && (t3 = 0), this.closed) return this;
    this.state = e3;
    var n2 = this.id, r2 = this.scheduler;
    return n2 != null && (this.id = this.recycleAsyncId(r2, n2, t3)), this.pending = true, this.delay = t3, this.id = this.id ?? this.requestAsyncId(r2, this.id, t3), this;
  }, t2.prototype.requestAsyncId = function(e3, t3, n2) {
    return n2 === void 0 && (n2 = 0), X.setInterval(e3.flush.bind(e3, this), n2);
  }, t2.prototype.recycleAsyncId = function(e3, t3, n2) {
    if (n2 === void 0 && (n2 = 0), n2 != null && this.delay === n2 && this.pending === false) return t3;
    t3 != null && X.clearInterval(t3);
  }, t2.prototype.execute = function(e3, t3) {
    if (this.closed) return Error(`executing a cancelled action`);
    this.pending = false;
    var n2 = this._execute(e3, t3);
    if (n2) return n2;
    this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t2.prototype._execute = function(e3, t3) {
    var n2 = false, r2;
    try {
      this.work(e3);
    } catch (e4) {
      n2 = true, r2 = e4 || Error(`Scheduled action threw falsy error`);
    }
    if (n2) return this.unsubscribe(), r2;
  }, t2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t3 = this, n2 = t3.id, r2 = t3.scheduler, i2 = r2.actions;
      this.work = this.state = this.scheduler = null, this.pending = false, T(i2, this), n2 != null && (this.id = this.recycleAsyncId(r2, n2, null)), this.delay = null, e2.prototype.unsubscribe.call(this);
    }
  }, t2;
})(he), Z = (function() {
  function e2(t2, n2) {
    n2 === void 0 && (n2 = e2.now), this.schedulerActionCtor = t2, this.now = n2;
  }
  return e2.prototype.schedule = function(e3, t2, n2) {
    return t2 === void 0 && (t2 = 0), new this.schedulerActionCtor(this, e3).schedule(n2, t2);
  }, e2.now = Y.now, e2;
})(), Q = new ((function(e2) {
  p(t2, e2);
  function t2(t3, n2) {
    n2 === void 0 && (n2 = Z.now);
    var r2 = e2.call(this, t3, n2) || this;
    return r2.actions = [], r2._active = false, r2;
  }
  return t2.prototype.flush = function(e3) {
    var t3 = this.actions;
    if (this._active) t3.push(e3);
    else {
      var n2;
      this._active = true;
      do
        if (n2 = e3.execute(e3.state, e3.delay)) break;
      while (e3 = t3.shift());
      if (this._active = false, n2) {
        for (; e3 = t3.shift(); ) e3.unsubscribe();
        throw n2;
      }
    }
  }, t2;
})(Z))(ge), _e = Q;
function ve(e2) {
  return e2 && S(e2.schedule);
}
var ye = (function(e2) {
  return e2 && typeof e2.length == `number` && typeof e2 != `function`;
});
function be(e2) {
  return S(e2 == null ? void 0 : e2.then);
}
function xe(e2) {
  return S(e2[H]);
}
function Se(e2) {
  return Symbol.asyncIterator && S(e2 == null ? void 0 : e2[Symbol.asyncIterator]);
}
function Ce(e2) {
  return TypeError(`You provided ` + (typeof e2 == `object` && e2 ? `an invalid object` : `'` + e2 + `'`) + ` where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}
function we() {
  return typeof Symbol != `function` || !Symbol.iterator ? `@@iterator` : Symbol.iterator;
}
var Te = we();
function Ee(e2) {
  return S(e2 == null ? void 0 : e2[Te]);
}
function De(e2) {
  return b(this, arguments, function() {
    var t2, n2, r2, i2;
    return h(this, function(a2) {
      switch (a2.label) {
        case 0:
          t2 = e2.getReader(), a2.label = 1;
        case 1:
          a2.trys.push([1, , 9, 10]), a2.label = 2;
        case 2:
          return [4, y(t2.read())];
        case 3:
          return n2 = a2.sent(), r2 = n2.value, i2 = n2.done, i2 ? [4, y(void 0)] : [3, 5];
        case 4:
          return [2, a2.sent()];
        case 5:
          return [4, y(r2)];
        case 6:
          return [4, a2.sent()];
        case 7:
          return a2.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t2.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Oe(e2) {
  return S(e2 == null ? void 0 : e2.getReader);
}
function ke(e2) {
  if (e2 instanceof U) return e2;
  if (e2 != null) {
    if (xe(e2)) return Ae(e2);
    if (ye(e2)) return je(e2);
    if (be(e2)) return Me(e2);
    if (Se(e2)) return $(e2);
    if (Ee(e2)) return Ne(e2);
    if (Oe(e2)) return Pe(e2);
  }
  throw Ce(e2);
}
function Ae(e2) {
  return new U(function(t2) {
    var n2 = e2[H]();
    if (S(n2.subscribe)) return n2.subscribe(t2);
    throw TypeError(`Provided object does not correctly implement Symbol.observable`);
  });
}
function je(e2) {
  return new U(function(t2) {
    for (var n2 = 0; n2 < e2.length && !t2.closed; n2++) t2.next(e2[n2]);
    t2.complete();
  });
}
function Me(e2) {
  return new U(function(t2) {
    e2.then(function(e3) {
      t2.closed || (t2.next(e3), t2.complete());
    }, function(e3) {
      return t2.error(e3);
    }).then(null, M);
  });
}
function Ne(e2) {
  return new U(function(t2) {
    var n2, r2;
    try {
      for (var i2 = g(e2), a2 = i2.next(); !a2.done; a2 = i2.next()) {
        var o2 = a2.value;
        if (t2.next(o2), t2.closed) return;
      }
    } catch (e3) {
      n2 = { error: e3 };
    } finally {
      try {
        a2 && !a2.done && (r2 = i2.return) && r2.call(i2);
      } finally {
        if (n2) throw n2.error;
      }
    }
    t2.complete();
  });
}
function $(e2) {
  return new U(function(t2) {
    Fe(e2, t2).catch(function(e3) {
      return t2.error(e3);
    });
  });
}
function Pe(e2) {
  return $(De(e2));
}
function Fe(e2, t2) {
  var n2, r2, i2, a2;
  return m(this, void 0, void 0, function() {
    var o2, s2;
    return h(this, function(c2) {
      switch (c2.label) {
        case 0:
          c2.trys.push([0, 5, 6, 11]), n2 = x(e2), c2.label = 1;
        case 1:
          return [4, n2.next()];
        case 2:
          if (r2 = c2.sent(), r2.done) return [3, 4];
          if (o2 = r2.value, t2.next(o2), t2.closed) return [2];
          c2.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return s2 = c2.sent(), i2 = { error: s2 }, [3, 11];
        case 6:
          return c2.trys.push([6, , 9, 10]), r2 && !r2.done && (a2 = n2.return) ? [4, a2.call(n2)] : [3, 8];
        case 7:
          c2.sent(), c2.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i2) throw i2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t2.complete(), [2];
      }
    });
  });
}
function Ie(e2) {
  return e2 instanceof Date && !isNaN(e2);
}
function Le(e2, t2, n2) {
  e2 === void 0 && (e2 = 0), n2 === void 0 && (n2 = _e);
  var r2 = -1;
  return t2 != null && (ve(t2) ? n2 = t2 : r2 = t2), new U(function(t3) {
    var i2 = Ie(e2) ? +e2 - n2.now() : e2;
    i2 < 0 && (i2 = 0);
    var a2 = 0;
    return n2.schedule(function() {
      t3.closed || (t3.next(a2++), 0 <= r2 ? this.schedule(void 0, r2) : t3.complete());
    }, i2);
  });
}
function Re(e2, t2) {
  return t2 === void 0 && (t2 = Q), G(function(n2, r2) {
    var i2 = null, a2 = null, o2 = null, s2 = function() {
      if (i2) {
        i2.unsubscribe(), i2 = null;
        var e3 = a2;
        a2 = null, r2.next(e3);
      }
    };
    function c2() {
      var n3 = o2 + e2, a3 = t2.now();
      a3 < n3 ? (i2 = this.schedule(void 0, n3 - a3), r2.add(i2)) : s2();
    }
    n2.subscribe(K(r2, function(n3) {
      a2 = n3, o2 = t2.now(), i2 || (i2 = t2.schedule(c2, e2), r2.add(i2));
    }, function() {
      s2(), r2.complete();
    }, void 0, function() {
      a2 = i2 = null;
    }));
  });
}
function ze(e2, t2) {
  return G(function(n2, r2) {
    var i2 = t2 ?? {}, a2 = i2.leading, o2 = a2 === void 0 || a2, s2 = i2.trailing, c2 = s2 !== void 0 && s2, l2 = false, u2 = null, d2 = null, f2 = false, p2 = function() {
      d2 == null ? void 0 : d2.unsubscribe(), d2 = null, c2 && (g2(), f2 && r2.complete());
    }, m2 = function() {
      d2 = null, f2 && r2.complete();
    }, h2 = function(t3) {
      return d2 = ke(e2(t3)).subscribe(K(r2, p2, m2));
    }, g2 = function() {
      if (l2) {
        l2 = false;
        var e3 = u2;
        u2 = null, r2.next(e3), !f2 && h2(e3);
      }
    };
    n2.subscribe(K(r2, function(e3) {
      l2 = true, u2 = e3, (!d2 || d2.closed) && (o2 ? g2() : h2(e3));
    }, function() {
      f2 = true, !(c2 && l2 && d2 && !d2.closed) && r2.complete();
    }));
  });
}
function Be(e2, t2, n2) {
  t2 === void 0 && (t2 = Q);
  var r2 = Le(e2, t2);
  return ze(function() {
    return r2;
  }, n2);
}
function Ve({ oidObject: t2, data: { sampleInterval: r2, sampleIntervalValue: o2, delay: s2 } }) {
  let { setValue: l2 } = i(c), u2 = e(void 0), d2 = e(null), f2 = e(l2);
  f2.current = l2;
  let p2 = t2 == null ? void 0 : t2._id, m2 = a(() => {
    let e2 = Number(o2), t3 = Number(s2);
    return r2 ? e2 : t3;
  }, [r2, o2, s2]);
  return n(() => {
    if (u2.current ||= new q(), !p2) return;
    let e2 = u2.current;
    return d2.current && d2.current.unsubscribe(), d2.current = e2.pipe(r2 ? Be(m2, void 0, { leading: false, trailing: true }) : Re(m2)).subscribe((e3) => {
      f2.current(p2, e3);
    }), () => {
      d2.current &&= (d2.current.unsubscribe(), null);
    };
  }, [r2, m2, p2]), n(() => () => {
    d2.current &&= (d2.current.unsubscribe(), null), u2.current && u2.current.complete();
  }, []), p2 ? { next: (e2) => {
    var _a;
    (_a = u2.current) == null ? void 0 : _a.next(e2);
  } } : null;
}
function He(e2, t2) {
  switch (t2) {
    case `string`:
      return String(e2);
    case `number`:
      return d(e2) ? Number(e2) : void 0;
    case `mixed`:
      return /^true$/i.test(String(e2)) ? true : /^false$/i.test(String(e2)) ? false : d(e2) ? Number(e2) : String(e2);
    case `boolean`:
      return /^true$/i.test(String(e2));
    default:
      return e2;
  }
}
function Ue(e2, t2) {
  if (String(e2 ?? ``) === String(t2 ?? ``)) return false;
  let n2 = Number(e2 ?? 0), r2 = Number(t2 ?? 0);
  return Math.abs(n2 - r2) >= 1;
}
var We = (n2) => {
  let { setState: r2, widget: s2, getPropertyValue: u2, values: d2 } = i(c), { data: f2 } = l(`oid`), p2 = s2.data[`${n2}Object`], m2 = u2(n2), h2 = e({ lc: void 0, value: void 0 }), g2 = e(0), _2 = Number(f2.delay ?? s2.data.delay) || 300, v2 = (p2 == null ? void 0 : p2._id) ? d2[`${p2._id}.lc`] : void 0, y2 = (p2 == null ? void 0 : p2._id) ? d2[`${p2._id}.val`] : void 0, b2 = a(() => {
    if (!(p2 == null ? void 0 : p2._id)) return false;
    if (v2 === 1111111111111) return h2.current = { lc: o, value: y2 }, false;
    if (Date.now() < g2.current || h2.current.lc === void 0) return h2.current = { lc: v2, value: y2 }, false;
    let e2 = h2.current.lc !== v2, t2 = Ue(h2.current.value, y2);
    return h2.current = { lc: v2, value: y2 }, e2 && t2;
  }, [p2 == null ? void 0 : p2._id, v2, y2]), x2 = Ve({ oidObject: p2, data: { delay: s2.data.delay, sampleInterval: s2.data.sampleInterval, sampleIntervalValue: s2.data.sampleIntervalValue } });
  return { value: m2, hasBackendChange: b2, updateValue: t((e2, t2 = false) => {
    if (!(p2 == null ? void 0 : p2._id)) return;
    let n3 = He(e2, p2 == null ? void 0 : p2.type);
    n3 != null && (r2((e3) => ({ values: { ...e3.values, [`${p2._id}.val`]: n3, [`${p2._id}.lc`]: o } })), g2.current = Date.now() + _2 + 1500, h2.current = { lc: o, value: n3 }, !t2 && x2 && x2.next(n3));
  }, [_2, x2, p2, r2]) };
};
export {
  u as n,
  We as t
};
