function dp(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Qc = { exports: {} }, wn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nh;
function hp() {
  if (nh) return wn;
  nh = 1;
  var f = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function d(r, v, E) {
    var j = null;
    if (E !== void 0 && (j = "" + E), v.key !== void 0 && (j = "" + v.key), "key" in v) {
      E = {};
      for (var O in v)
        O !== "key" && (E[O] = v[O]);
    } else E = v;
    return v = E.ref, {
      $$typeof: f,
      type: r,
      key: j,
      ref: v !== void 0 ? v : null,
      props: E
    };
  }
  return wn.Fragment = c, wn.jsx = d, wn.jsxs = d, wn;
}
var ih;
function mp() {
  return ih || (ih = 1, Qc.exports = hp()), Qc.exports;
}
var u = mp(), Xc = { exports: {} }, ie = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uh;
function vp() {
  if (uh) return ie;
  uh = 1;
  var f = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), j = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), X = Symbol.iterator;
  function J(y) {
    return y === null || typeof y != "object" ? null : (y = X && y[X] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var B = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, K = Object.assign, T = {};
  function Q(y, m, L) {
    this.props = y, this.context = m, this.refs = T, this.updater = L || B;
  }
  Q.prototype.isReactComponent = {}, Q.prototype.setState = function(y, m) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, m, "setState");
  }, Q.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function $() {
  }
  $.prototype = Q.prototype;
  function w(y, m, L) {
    this.props = y, this.context = m, this.refs = T, this.updater = L || B;
  }
  var re = w.prototype = new $();
  re.constructor = w, K(re, Q.prototype), re.isPureReactComponent = !0;
  var Ke = Array.isArray;
  function be() {
  }
  var ae = { H: null, A: null, T: null, S: null }, De = Object.prototype.hasOwnProperty;
  function Be(y, m, L) {
    var V = L.ref;
    return {
      $$typeof: f,
      type: y,
      key: m,
      ref: V !== void 0 ? V : null,
      props: L
    };
  }
  function Ye(y, m) {
    return Be(y.type, m, y.props);
  }
  function it(y) {
    return typeof y == "object" && y !== null && y.$$typeof === f;
  }
  function Ge(y) {
    var m = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(L) {
      return m[L];
    });
  }
  var ne = /\/+/g;
  function Ie(y, m) {
    return typeof y == "object" && y !== null && y.key != null ? Ge("" + y.key) : m.toString(36);
  }
  function ut(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(be, be) : (y.status = "pending", y.then(
          function(m) {
            y.status === "pending" && (y.status = "fulfilled", y.value = m);
          },
          function(m) {
            y.status === "pending" && (y.status = "rejected", y.reason = m);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function D(y, m, L, V, W) {
    var te = typeof y;
    (te === "undefined" || te === "boolean") && (y = null);
    var fe = !1;
    if (y === null) fe = !0;
    else
      switch (te) {
        case "bigint":
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case f:
            case c:
              fe = !0;
              break;
            case G:
              return fe = y._init, D(
                fe(y._payload),
                m,
                L,
                V,
                W
              );
          }
      }
    if (fe)
      return W = W(y), fe = V === "" ? "." + Ie(y, 0) : V, Ke(W) ? (L = "", fe != null && (L = fe.replace(ne, "$&/") + "/"), D(W, m, L, "", function(h) {
        return h;
      })) : W != null && (it(W) && (W = Ye(
        W,
        L + (W.key == null || y && y.key === W.key ? "" : ("" + W.key).replace(
          ne,
          "$&/"
        ) + "/") + fe
      )), m.push(W)), 1;
    fe = 0;
    var Pe = V === "" ? "." : V + ":";
    if (Ke(y))
      for (var He = 0; He < y.length; He++)
        V = y[He], te = Pe + Ie(V, He), fe += D(
          V,
          m,
          L,
          te,
          W
        );
    else if (He = J(y), typeof He == "function")
      for (y = He.call(y), He = 0; !(V = y.next()).done; )
        V = V.value, te = Pe + Ie(V, He++), fe += D(
          V,
          m,
          L,
          te,
          W
        );
    else if (te === "object") {
      if (typeof y.then == "function")
        return D(
          ut(y),
          m,
          L,
          V,
          W
        );
      throw m = String(y), Error(
        "Objects are not valid as a React child (found: " + (m === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : m) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return fe;
  }
  function C(y, m, L) {
    if (y == null) return y;
    var V = [], W = 0;
    return D(y, V, "", "", function(te) {
      return m.call(L, te, W++);
    }), V;
  }
  function P(y) {
    if (y._status === -1) {
      var m = y._result;
      m = m(), m.then(
        function(L) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = L);
        },
        function(L) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = L);
        }
      ), y._status === -1 && (y._status = 0, y._result = m);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var m = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(m)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, pe = {
    map: C,
    forEach: function(y, m, L) {
      C(
        y,
        function() {
          m.apply(this, arguments);
        },
        L
      );
    },
    count: function(y) {
      var m = 0;
      return C(y, function() {
        m++;
      }), m;
    },
    toArray: function(y) {
      return C(y, function(m) {
        return m;
      }) || [];
    },
    only: function(y) {
      if (!it(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return ie.Activity = U, ie.Children = pe, ie.Component = Q, ie.Fragment = d, ie.Profiler = v, ie.PureComponent = w, ie.StrictMode = r, ie.Suspense = A, ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ae, ie.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return ae.H.useMemoCache(y);
    }
  }, ie.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, ie.cacheSignal = function() {
    return null;
  }, ie.cloneElement = function(y, m, L) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var V = K({}, y.props), W = y.key;
    if (m != null)
      for (te in m.key !== void 0 && (W = "" + m.key), m)
        !De.call(m, te) || te === "key" || te === "__self" || te === "__source" || te === "ref" && m.ref === void 0 || (V[te] = m[te]);
    var te = arguments.length - 2;
    if (te === 1) V.children = L;
    else if (1 < te) {
      for (var fe = Array(te), Pe = 0; Pe < te; Pe++)
        fe[Pe] = arguments[Pe + 2];
      V.children = fe;
    }
    return Be(y.type, W, V);
  }, ie.createContext = function(y) {
    return y = {
      $$typeof: j,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: E,
      _context: y
    }, y;
  }, ie.createElement = function(y, m, L) {
    var V, W = {}, te = null;
    if (m != null)
      for (V in m.key !== void 0 && (te = "" + m.key), m)
        De.call(m, V) && V !== "key" && V !== "__self" && V !== "__source" && (W[V] = m[V]);
    var fe = arguments.length - 2;
    if (fe === 1) W.children = L;
    else if (1 < fe) {
      for (var Pe = Array(fe), He = 0; He < fe; He++)
        Pe[He] = arguments[He + 2];
      W.children = Pe;
    }
    if (y && y.defaultProps)
      for (V in fe = y.defaultProps, fe)
        W[V] === void 0 && (W[V] = fe[V]);
    return Be(y, te, W);
  }, ie.createRef = function() {
    return { current: null };
  }, ie.forwardRef = function(y) {
    return { $$typeof: O, render: y };
  }, ie.isValidElement = it, ie.lazy = function(y) {
    return {
      $$typeof: G,
      _payload: { _status: -1, _result: y },
      _init: P
    };
  }, ie.memo = function(y, m) {
    return {
      $$typeof: g,
      type: y,
      compare: m === void 0 ? null : m
    };
  }, ie.startTransition = function(y) {
    var m = ae.T, L = {};
    ae.T = L;
    try {
      var V = y(), W = ae.S;
      W !== null && W(L, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(be, ce);
    } catch (te) {
      ce(te);
    } finally {
      m !== null && L.types !== null && (m.types = L.types), ae.T = m;
    }
  }, ie.unstable_useCacheRefresh = function() {
    return ae.H.useCacheRefresh();
  }, ie.use = function(y) {
    return ae.H.use(y);
  }, ie.useActionState = function(y, m, L) {
    return ae.H.useActionState(y, m, L);
  }, ie.useCallback = function(y, m) {
    return ae.H.useCallback(y, m);
  }, ie.useContext = function(y) {
    return ae.H.useContext(y);
  }, ie.useDebugValue = function() {
  }, ie.useDeferredValue = function(y, m) {
    return ae.H.useDeferredValue(y, m);
  }, ie.useEffect = function(y, m) {
    return ae.H.useEffect(y, m);
  }, ie.useEffectEvent = function(y) {
    return ae.H.useEffectEvent(y);
  }, ie.useId = function() {
    return ae.H.useId();
  }, ie.useImperativeHandle = function(y, m, L) {
    return ae.H.useImperativeHandle(y, m, L);
  }, ie.useInsertionEffect = function(y, m) {
    return ae.H.useInsertionEffect(y, m);
  }, ie.useLayoutEffect = function(y, m) {
    return ae.H.useLayoutEffect(y, m);
  }, ie.useMemo = function(y, m) {
    return ae.H.useMemo(y, m);
  }, ie.useOptimistic = function(y, m) {
    return ae.H.useOptimistic(y, m);
  }, ie.useReducer = function(y, m, L) {
    return ae.H.useReducer(y, m, L);
  }, ie.useRef = function(y) {
    return ae.H.useRef(y);
  }, ie.useState = function(y) {
    return ae.H.useState(y);
  }, ie.useSyncExternalStore = function(y, m, L) {
    return ae.H.useSyncExternalStore(
      y,
      m,
      L
    );
  }, ie.useTransition = function() {
    return ae.H.useTransition();
  }, ie.version = "19.2.0", ie;
}
var sh;
function Fc() {
  return sh || (sh = 1, Xc.exports = vp()), Xc.exports;
}
var Z = Fc();
const pp = /* @__PURE__ */ dp(Z);
function bu(f) {
  if (!f || /[\s\x00-\x1f]/.test(f)) return "";
  try {
    const c = new URL(f);
    return ["https:", "http:"].includes(c.protocol) && !c.username && !c.password ? c.href : "";
  } catch {
    return "";
  }
}
function gu(f, c, d, r, v) {
  const E = c.trim().toLocaleLowerCase();
  return f.filter((j) => (d === "전체" || j.category === d) && (!r || j.tags.includes(r)) && (!E || [j.title, j.summary, j.description, ...j.tags].join(" ").toLocaleLowerCase().includes(E))).sort((j, O) => v === "name" ? j.title.localeCompare(O.title, "ko") : v === "recent" ? O.updatedAt.localeCompare(j.updatedAt) || j.sortOrder - O.sortOrder : Number(O.featured) - Number(j.featured) || j.sortOrder - O.sortOrder || j.title.localeCompare(O.title, "ko"));
}
function ch() {
  const f = new URLSearchParams(location.search);
  return f.get("app") ? { view: "apps", app: f.get("app"), board: "", post: "" } : f.get("board") ? { view: "board", app: "", board: f.get("board"), post: f.get("post") || "" } : { app: "", view: ["home", "apps", "about", "guestbook"].includes(f.get("view") || "") ? f.get("view") : "home" };
}
function gp(f) {
  const c = new URL(location.href);
  return c.searchParams.delete("app"), c.searchParams.delete("view"), c.searchParams.delete("board"), c.searchParams.delete("post"), f.board ? (c.searchParams.set("board", f.board), f.post && c.searchParams.set("post", f.post)) : f.app ? c.searchParams.set("app", f.app) : f.view !== "home" && c.searchParams.set("view", f.view), c.hash = "", c;
}
const fh = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600"><rect width="960" height="600" fill="#eee9e2"/><rect x="330" y="170" width="300" height="190" rx="24" fill="#d6c5b6"/><path d="m360 320 65-80 55 50 48-65 70 95" fill="none" stroke="#796754" stroke-width="12"/><text x="480" y="420" text-anchor="middle" font-size="28" fill="#65574c" font-family="sans-serif">미리보기 준비 중</text></svg>');
function je({ name: f, size: c = 21 }) {
  const d = {
    home: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("path", { d: "m3 10 9-7 9 7" }),
      /* @__PURE__ */ u.jsx("path", { d: "M5 9v12h14V9M9 21v-7h6v7" })
    ] }),
    grid: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("rect", { x: "3", y: "3", width: "7", height: "7", rx: "2" }),
      /* @__PURE__ */ u.jsx("rect", { x: "14", y: "3", width: "7", height: "7", rx: "2" }),
      /* @__PURE__ */ u.jsx("rect", { x: "3", y: "14", width: "7", height: "7", rx: "2" }),
      /* @__PURE__ */ u.jsx("rect", { x: "14", y: "14", width: "7", height: "7", rx: "2" })
    ] }),
    user: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("circle", { cx: "12", cy: "8", r: "4" }),
      /* @__PURE__ */ u.jsx("path", { d: "M4 21v-2a8 8 0 0 1 16 0v2" })
    ] }),
    chat: /* @__PURE__ */ u.jsx("path", { d: "M21 11a9 9 0 0 1-9 9H4l-2 2V11a9 9 0 0 1 19 0Z" }),
    arrow: /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("path", { d: "M4 12h16m-6-6 6 6-6 6" }) }),
    external: /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("path", { d: "M14 3h7v7m0-7L10 14M10 3H4v17h17v-6" }) }),
    search: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("circle", { cx: "10", cy: "10", r: "6.5" }),
      /* @__PURE__ */ u.jsx("path", { d: "m15 15 6 6" })
    ] }),
    sun: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("circle", { cx: "12", cy: "12", r: "4" }),
      /* @__PURE__ */ u.jsx("path", { d: "M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" })
    ] }),
    moon: /* @__PURE__ */ u.jsx("path", { d: "M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z" }),
    layers: /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("path", { d: "m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" }) }),
    calendar: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("rect", { x: "3", y: "5", width: "18", height: "16", rx: "3" }),
      /* @__PURE__ */ u.jsx("path", { d: "M7 2v6m10-6v6M3 11h18m-12 4h2m4 0h2m-8 3h2" })
    ] }),
    game: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("path", { d: "M7 7h10c3 0 5 9 4 11-2 3-5-2-6-2H9c-1 0-4 5-6 2C2 16 4 7 7 7Z" }),
      /* @__PURE__ */ u.jsx("path", { d: "M8 10v5m-2-2h4m6-1h.1m2 2h.1" })
    ] }),
    spark: /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("path", { d: "m12 3 2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7Z" }) }),
    close: /* @__PURE__ */ u.jsx("path", { d: "m6 6 12 12M6 18 18 6" }),
    share: /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("path", { d: "M12 16V3m-5 5 5-5 5 5M4 13v8h16v-8" }) }),
    back: /* @__PURE__ */ u.jsx("path", { d: "M20 12H4m6-6-6 6 6 6" }),
    check: /* @__PURE__ */ u.jsx("path", { d: "m5 12 4 4L20 5" })
  };
  return /* @__PURE__ */ u.jsx("svg", { "aria-hidden": "true", width: c, height: c, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.65", strokeLinecap: "round", strokeLinejoin: "round", children: d[f] || d.spark });
}
function Gl({ src: f, alt: c, className: d = "" }) {
  return /* @__PURE__ */ u.jsx("img", { className: d, src: f || fh, alt: c, loading: "lazy", width: "960", height: "600", onError: (r) => {
    r.currentTarget.onerror = null, r.currentTarget.src = fh;
  } });
}
function Va({ url: f, children: c, primary: d = !1 }) {
  return bu(f) ? /* @__PURE__ */ u.jsxs("a", { className: `btn ${d ? "primary" : ""}`, href: bu(f), target: "_blank", rel: "noopener noreferrer", children: [
    c,
    /* @__PURE__ */ u.jsx(je, { name: "external", size: 16 })
  ] }) : null;
}
function Rh({ app: f, onOpen: c }) {
  return /* @__PURE__ */ u.jsxs("article", { className: "app-card", children: [
    /* @__PURE__ */ u.jsxs("button", { className: "card-preview", onClick: () => c(f.id), "aria-label": `${f.title} 상세 보기`, children: [
      /* @__PURE__ */ u.jsx(Gl, { src: f.thumbnail, alt: `${f.title} 미리보기` }),
      f.featured && /* @__PURE__ */ u.jsx("span", { className: "pick-label", children: "EDITOR’S PICK" }),
      /* @__PURE__ */ u.jsx("span", { className: "preview-arrow", children: /* @__PURE__ */ u.jsx(je, { name: "arrow", size: 19 }) })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "card-content", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "card-meta", children: [
        /* @__PURE__ */ u.jsx("span", { children: f.category }),
        /* @__PURE__ */ u.jsx("span", { children: f.isExample && f.showExampleBadge !== !1 ? "예시 콘텐츠" : f.status || "소개" })
      ] }),
      /* @__PURE__ */ u.jsx("h3", { children: /* @__PURE__ */ u.jsx("button", { onClick: () => c(f.id), children: f.title }) }),
      /* @__PURE__ */ u.jsx("p", { children: f.summary }),
      /* @__PURE__ */ u.jsxs("div", { className: "card-bottom", children: [
        /* @__PURE__ */ u.jsx("span", { children: f.tags.slice(0, 2).map((d) => "#" + d).join(" ") }),
        /* @__PURE__ */ u.jsx("button", { className: "icon-button", "aria-label": `${f.title} 댓글 보기`, onClick: () => c(f.id), children: /* @__PURE__ */ u.jsx(je, { name: "chat", size: 18 }) })
      ] })
    ] })
  ] });
}
function yp({ board: f, postId: c = "", onPost: d, onBack: r, onHome: v }) {
  const [E, j] = Z.useState(""), [O, A] = Z.useState("order"), [g, G] = Z.useState(""), U = (f?.posts || []).filter((B) => B.visible && !B.deleted), X = Z.useMemo(() => {
    const B = E.trim().toLocaleLowerCase();
    return U.filter((K) => !B || [K.title, K.summary, K.content, ...K.tags].join(" ").toLocaleLowerCase().includes(B)).map((K, T) => ({ p: K, i: T })).sort((K, T) => Number(T.p.pinned) - Number(K.p.pinned) || (O === "recent" ? T.p.updatedAt.localeCompare(K.p.updatedAt) : O === "title" ? K.p.title.localeCompare(T.p.title, "ko") : K.i - T.i)).map((K) => K.p);
  }, [f, E, O]);
  if (!f) return /* @__PURE__ */ u.jsxs("section", { className: "empty", children: [
    /* @__PURE__ */ u.jsx("h1", { children: "게시판을 찾을 수 없어요." }),
    /* @__PURE__ */ u.jsx("p", { children: "게시판이 숨김 처리되었거나 삭제되었을 수 있습니다." }),
    /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: v, children: "공방 홈으로" })
  ] });
  const J = U.find((B) => B.id === c);
  return c && !J ? /* @__PURE__ */ u.jsxs("section", { className: "empty", children: [
    /* @__PURE__ */ u.jsx("h1", { children: "게시글을 찾을 수 없어요." }),
    /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: r, children: "게시판 목록으로" })
  ] }) : J ? /* @__PURE__ */ u.jsxs("article", { className: "board-detail", children: [
    /* @__PURE__ */ u.jsxs("button", { className: "back-link", onClick: r, children: [
      /* @__PURE__ */ u.jsx(je, { name: "back", size: 17 }),
      f.title,
      " 목록으로"
    ] }),
    /* @__PURE__ */ u.jsxs("header", { className: "page-heading", children: [
      /* @__PURE__ */ u.jsxs("span", { className: "eyebrow", children: [
        f.title,
        J.pinned ? " · 공지" : ""
      ] }),
      /* @__PURE__ */ u.jsx("h1", { children: J.title }),
      J.summary && /* @__PURE__ */ u.jsx("p", { children: J.summary }),
      /* @__PURE__ */ u.jsx("time", { children: J.updatedAt || "날짜 미입력" })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "panel", children: [
      /* @__PURE__ */ u.jsx("div", { className: "board-content", children: J.content || "본문을 준비하고 있습니다." }),
      J.tags.length > 0 && /* @__PURE__ */ u.jsx("div", { className: "tag-list", children: J.tags.map((B, K) => /* @__PURE__ */ u.jsxs("span", { children: [
        "#",
        B
      ] }, K)) }),
      J.links.length > 0 && /* @__PURE__ */ u.jsxs("section", { className: "board-resources", children: [
        /* @__PURE__ */ u.jsx("h2", { children: "자료 링크" }),
        /* @__PURE__ */ u.jsx("p", { className: "muted", children: "자료는 새 탭에서 열립니다." }),
        /* @__PURE__ */ u.jsx("div", { className: "link-row", children: J.links.map((B, K) => /* @__PURE__ */ u.jsx(Va, { url: B.url, children: B.label }, K)) })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "panel board-share", children: [
      /* @__PURE__ */ u.jsx("h2", { children: "게시글 공유" }),
      /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: async () => {
        try {
          await navigator.clipboard.writeText(location.href), G("주소를 복사했습니다.");
        } catch {
          G("아래 주소를 직접 복사하세요.");
        }
      }, children: "게시글 주소 복사" }),
      /* @__PURE__ */ u.jsx("input", { "aria-label": "게시글 공유 주소", readOnly: !0, value: location.href }),
      g && /* @__PURE__ */ u.jsx("p", { role: "status", children: g })
    ] })
  ] }) : /* @__PURE__ */ u.jsxs("section", { className: "board-page", children: [
    /* @__PURE__ */ u.jsxs("header", { className: "page-heading", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "WORKSHOP BOARD" }),
      /* @__PURE__ */ u.jsx("h1", { children: f.title }),
      f.description && /* @__PURE__ */ u.jsx("p", { style: { whiteSpace: "pre-line" }, children: f.description })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "filters", children: /* @__PURE__ */ u.jsxs("div", { className: "filter-top", children: [
      /* @__PURE__ */ u.jsxs("label", { className: "search-field", children: [
        /* @__PURE__ */ u.jsx(je, { name: "search" }),
        /* @__PURE__ */ u.jsx("input", { "aria-label": "게시글 검색", placeholder: "제목, 내용, 태그 검색", value: E, onChange: (B) => j(B.target.value) })
      ] }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        "게시글 정렬",
        /* @__PURE__ */ u.jsxs("select", { "aria-label": "게시글 정렬", value: O, onChange: (B) => A(B.target.value), children: [
          /* @__PURE__ */ u.jsx("option", { value: "order", children: "관리자 지정순" }),
          /* @__PURE__ */ u.jsx("option", { value: "recent", children: "최근 업데이트순" }),
          /* @__PURE__ */ u.jsx("option", { value: "title", children: "제목순" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => {
        j(""), A("order");
      }, children: "게시글 검색 초기화" })
    ] }) }),
    /* @__PURE__ */ u.jsxs("p", { className: "result-count", "aria-live": "polite", children: [
      "총 ",
      /* @__PURE__ */ u.jsx("b", { children: X.length }),
      "개의 글"
    ] }),
    X.length ? /* @__PURE__ */ u.jsx("div", { className: `board-posts ${f.layout}`, children: X.map((B) => /* @__PURE__ */ u.jsxs("button", { className: "panel board-post", onClick: () => d(B.id), "aria-label": `${B.title} 게시글 보기`, children: [
      /* @__PURE__ */ u.jsxs("span", { className: "eyebrow", children: [
        B.pinned ? "공지" : "POST",
        B.updatedAt ? " · " + B.updatedAt : ""
      ] }),
      /* @__PURE__ */ u.jsx("h2", { children: B.title }),
      B.summary && /* @__PURE__ */ u.jsx("p", { children: B.summary }),
      /* @__PURE__ */ u.jsx("span", { className: "tag-list", children: B.tags.map((K, T) => /* @__PURE__ */ u.jsxs("span", { children: [
        "#",
        K
      ] }, T)) }),
      /* @__PURE__ */ u.jsx("span", { className: "board-read", children: "자세히 보기 ↗" })
    ] }, B.id)) }) : /* @__PURE__ */ u.jsxs("section", { className: "empty", children: [
      /* @__PURE__ */ u.jsx(je, { name: "layers", size: 32 }),
      /* @__PURE__ */ u.jsx("h2", { children: E ? "검색 결과가 없어요." : "아직 등록된 글이 없어요." }),
      /* @__PURE__ */ u.jsx("p", { children: E ? "다른 검색어로 찾아보세요." : "관리자가 자료를 준비하고 있습니다." })
    ] })
  ] });
}
function bp({ site: f, apps: c, sections: d, onView: r, onApp: v, onCategory: E }) {
  const j = f.hero, O = (g) => {
    const G = gu(c, "", "전체", "", g.type === "featured" ? "featured" : "recent").filter((U) => g.type !== "featured" || U.featured).slice(0, g.count);
    return G.length ? g.layout === "grid" ? /* @__PURE__ */ u.jsx("div", { className: `app-grid columns-${g.columns}`, children: G.map((U) => /* @__PURE__ */ u.jsx(Rh, { app: U, onOpen: v }, U.id)) }) : /* @__PURE__ */ u.jsx("div", { className: "recent-list", children: G.map((U, X) => /* @__PURE__ */ u.jsxs("button", { onClick: () => v(U.id), children: [
      /* @__PURE__ */ u.jsx("span", { className: "recent-num", children: String(X + 1).padStart(2, "0") }),
      /* @__PURE__ */ u.jsx(Gl, { src: U.thumbnail, alt: `${U.title} 미리보기` }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("small", { children: [
          U.category,
          U.isExample && U.showExampleBadge !== !1 ? " · 예시" : ""
        ] }),
        /* @__PURE__ */ u.jsx("b", { children: U.title }),
        /* @__PURE__ */ u.jsx("p", { children: U.summary })
      ] }),
      /* @__PURE__ */ u.jsx("time", { children: U.updatedAt || "날짜 미입력" }),
      /* @__PURE__ */ u.jsx(je, { name: "arrow" })
    ] }, U.id)) }) : /* @__PURE__ */ u.jsx("p", { className: "empty", children: "공개된 앱을 준비하고 있습니다." });
  }, A = f.categoryItems?.filter((g) => g.visible) || f.categories.map((g) => ({ name: g, icon: "spark", visible: !0 }));
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: d.filter((g) => g.visible).map((g) => /* @__PURE__ */ u.jsxs("div", { "data-section-id": g.id, className: "managed-section", children: [
    g.isExample && g.showExampleBadge && /* @__PURE__ */ u.jsx("span", { className: "example-badge", children: "예시 콘텐츠" }),
    g.type === "hero" ? /* @__PURE__ */ u.jsxs("section", { className: `hero ${!(g.image || j?.image) && !j?.illustration ? "no-art" : ""}`, children: [
      /* @__PURE__ */ u.jsxs("div", { className: "hero-copy", children: [
        /* @__PURE__ */ u.jsxs("span", { className: "eyebrow", children: [
          /* @__PURE__ */ u.jsx("i", {}),
          g.eyebrow
        ] }),
        /* @__PURE__ */ u.jsx("h1", { children: (j?.title || g.title).split(`
`).map((G, U) => /* @__PURE__ */ u.jsx("span", { style: { display: "block", color: U ? "var(--accent)" : "var(--ink)" }, children: G }, U)) }),
        /* @__PURE__ */ u.jsx("p", { children: g.body || f.tagline }),
        j?.buttonLabel && /* @__PURE__ */ u.jsxs("button", { className: "btn primary", onClick: () => r(j.buttonView), children: [
          j.buttonLabel,
          /* @__PURE__ */ u.jsx(je, { name: "arrow", size: 17 })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "hero-caption", children: [
          /* @__PURE__ */ u.jsx("span", { className: "tiny-avatar", children: "T" }),
          f.profile.name,
          "의 디지털 작업실"
        ] })
      ] }),
      g.image || j?.image ? /* @__PURE__ */ u.jsx(Gl, { className: "hero-custom-image", src: g.image || j?.image || "", alt: "메인 소개 이미지" }) : j?.illustration ? /* @__PURE__ */ u.jsxs("div", { className: "hero-art", "aria-label": "아이디어를 도구로 만드는 공방 일러스트", role: "img", children: [
        /* @__PURE__ */ u.jsx("div", { className: "art-orbit orbit-one" }),
        /* @__PURE__ */ u.jsx("div", { className: "art-orbit orbit-two" }),
        /* @__PURE__ */ u.jsx("span", { className: "art-star", children: "✳" }),
        /* @__PURE__ */ u.jsxs("div", { className: "mini-note", children: [
          /* @__PURE__ */ u.jsx("span", { children: "IDEA NO. 01" }),
          /* @__PURE__ */ u.jsx("b", { style: { whiteSpace: "pre-line" }, children: j.note }),
          /* @__PURE__ */ u.jsx("div", { className: "sketch-line" }),
          /* @__PURE__ */ u.jsx("small", { children: "made for our classroom ↗" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mini-app", children: [
          /* @__PURE__ */ u.jsx("span", { className: "mini-dots", children: "● ● ●" }),
          /* @__PURE__ */ u.jsxs("div", { className: "mini-app-grid", children: [
            /* @__PURE__ */ u.jsx("span", {}),
            /* @__PURE__ */ u.jsx("span", {}),
            /* @__PURE__ */ u.jsx("span", {}),
            /* @__PURE__ */ u.jsx("span", {})
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "mini-bar" }),
          /* @__PURE__ */ u.jsx("small", { children: j.caption })
        ] }),
        j.sticker && /* @__PURE__ */ u.jsxs("span", { className: "art-sticker", children: [
          "MADE WITH",
          /* @__PURE__ */ u.jsx("br", {}),
          /* @__PURE__ */ u.jsx("b", { children: j.sticker })
        ] })
      ] }) : null
    ] }) : g.type === "categories" ? /* @__PURE__ */ u.jsxs("section", { className: "category-section", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: g.eyebrow }),
        /* @__PURE__ */ u.jsx("h2", { children: g.title })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "category-row", "aria-label": "카테고리 바로가기", children: A.map((G, U) => /* @__PURE__ */ u.jsxs("button", { onClick: () => E(G.name), children: [
        /* @__PURE__ */ u.jsx("span", { className: `category-circle tone-${U % 5}`, children: /* @__PURE__ */ u.jsx(je, { name: G.icon, size: 25 }) }),
        /* @__PURE__ */ u.jsx("span", { children: G.name })
      ] }, G.name)) })
    ] }) : g.type === "featured" || g.type === "recent" ? /* @__PURE__ */ u.jsxs("section", { className: "section", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "section-head", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: g.eyebrow }),
          /* @__PURE__ */ u.jsx("h2", { children: g.title }),
          g.body && /* @__PURE__ */ u.jsx("p", { children: g.body })
        ] }),
        /* @__PURE__ */ u.jsxs("button", { className: "text-button", onClick: () => r("apps"), children: [
          "전체 앱 보기",
          /* @__PURE__ */ u.jsx(je, { name: "arrow", size: 16 })
        ] })
      ] }),
      O(g)
    ] }) : g.type === "invite" ? /* @__PURE__ */ u.jsxs("section", { className: "invite", children: [
      /* @__PURE__ */ u.jsx(je, { name: "chat", size: 35 }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("h2", { children: g.title }),
        /* @__PURE__ */ u.jsx("p", { children: g.body })
      ] }),
      g.buttonLabel && /* @__PURE__ */ u.jsxs("button", { className: "btn", onClick: () => r(g.buttonView), children: [
        g.buttonLabel,
        /* @__PURE__ */ u.jsx(je, { name: "arrow", size: 16 })
      ] })
    ] }) : /* @__PURE__ */ u.jsxs("section", { className: "panel managed-text", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: g.eyebrow }),
      /* @__PURE__ */ u.jsx("h2", { children: g.title }),
      /* @__PURE__ */ u.jsx("p", { children: g.body }),
      g.image && /* @__PURE__ */ u.jsx(Gl, { src: g.image, alt: g.title + " 이미지" }),
      g.buttonLabel && /* @__PURE__ */ u.jsxs("button", { className: "btn", onClick: () => r(g.buttonView), children: [
        g.buttonLabel,
        /* @__PURE__ */ u.jsx(je, { name: "arrow", size: 16 })
      ] })
    ] })
  ] }, g.id)) });
}
const rh = { home: "공방 홈", apps: "앱 모음", about: "제작자 소개", guestbook: "질문게시판" }, oh = (f) => f + "-" + crypto.randomUUID().slice(0, 12);
function Vt({ label: f, value: c, onChange: d, multi: r = !1, readOnly: v = !1, type: E = "text" }) {
  return /* @__PURE__ */ u.jsxs("label", { children: [
    f,
    r ? /* @__PURE__ */ u.jsx("textarea", { "aria-label": f, rows: 8, value: c, readOnly: v, onChange: (j) => d?.(j.target.value) }) : /* @__PURE__ */ u.jsx("input", { "aria-label": f, type: E, value: c, readOnly: v, onChange: (j) => d?.(j.target.value) })
  ] });
}
function wc({ label: f, value: c, onChange: d }) {
  return /* @__PURE__ */ u.jsxs("label", { className: "check-field", children: [
    /* @__PURE__ */ u.jsx("input", { type: "checkbox", checked: c, onChange: (r) => d(r.target.checked) }),
    f
  ] });
}
function xp({ doc: f, edit: c }) {
  const [d, r] = Z.useState(""), [v, E] = Z.useState(""), j = f.boards || [], O = j.find((T) => T.id === d) || j[0], A = O?.posts.find((T) => T.id === v), g = f.menuOrder || ["home", "apps", "about", "guestbook"], G = (T) => {
    O && c((Q) => {
      const $ = Q.boards.find((w) => w.id === O.id);
      $ && T($);
    });
  }, U = (T) => {
    A && G((Q) => {
      const $ = Q.posts.find((w) => w.id === A.id);
      $ && T($);
    });
  }, X = (T) => rh[T] || j.find((Q) => "board:" + Q.id === T)?.title || "게시판", J = (T, Q) => c(($) => {
    const w = T + Q;
    w >= 0 && w < $.menuOrder.length && ([$.menuOrder[T], $.menuOrder[w]] = [$.menuOrder[w], $.menuOrder[T]]);
  }), B = (T, Q) => G(($) => {
    const w = T + Q;
    w >= 0 && w < $.posts.length && ([$.posts[T], $.posts[w]] = [$.posts[w], $.posts[T]]);
  }), K = () => {
    const T = oh("board");
    c((Q) => {
      Q.boards.push({ id: T, title: "새 게시판", description: "", icon: "layers", layout: "list", visible: !0, posts: [] });
      const $ = Q.menuOrder.indexOf("apps");
      Q.menuOrder.splice($ < 0 ? Q.menuOrder.length : $ + 1, 0, "board:" + T);
    }), r(T), E("");
  };
  return /* @__PURE__ */ u.jsxs("section", { className: "board-manager", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("h3", { children: "게시판 신설·메뉴 배치" }),
        /* @__PURE__ */ u.jsx("p", { className: "muted", children: "게시판과 글은 관리자가 작성하고 방문자는 게시된 내용을 읽습니다. 임시 저장 후 미리보기에서 확인하고 게시하세요." })
      ] }),
      /* @__PURE__ */ u.jsx("button", { className: "btn primary", onClick: K, disabled: j.length >= 20, children: "새 게시판 만들기" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "editor-layout", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("h4", { children: "전체 메뉴 순서" }),
        /* @__PURE__ */ u.jsx("div", { className: "item-list", children: g.map((T, Q) => /* @__PURE__ */ u.jsxs("div", { className: "item-row", children: [
          /* @__PURE__ */ u.jsxs("button", { className: O && T === "board:" + O.id ? "selected" : "", onClick: () => {
            T.startsWith("board:") && (r(T.slice(6)), E(""));
          }, children: [
            /* @__PURE__ */ u.jsx("b", { children: X(T) }),
            /* @__PURE__ */ u.jsx("small", { children: rh[T] ? "기본 메뉴 · 삭제 불가" : j.find(($) => "board:" + $.id === T)?.visible ? "게시판 · 표시" : "게시판 · 숨김" })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "order-buttons", children: [
            /* @__PURE__ */ u.jsx("button", { "aria-label": `${X(T)} 메뉴 위로`, disabled: Q === 0, onClick: () => J(Q, -1), children: "↑" }),
            /* @__PURE__ */ u.jsx("button", { "aria-label": `${X(T)} 메뉴 아래로`, disabled: Q === g.length - 1, onClick: () => J(Q, 1), children: "↓" })
          ] })
        ] }, T)) })
      ] }),
      O ? /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
        /* @__PURE__ */ u.jsx("h4", { children: "게시판 설정" }),
        /* @__PURE__ */ u.jsx(Vt, { label: "게시판 영구 ID", value: O.id, readOnly: !0 }),
        /* @__PURE__ */ u.jsx(Vt, { label: "게시판 이름", value: O.title, onChange: (T) => G((Q) => {
          Q.title = T;
        }) }),
        /* @__PURE__ */ u.jsx(Vt, { label: "게시판 설명", value: O.description, multi: !0, onChange: (T) => G((Q) => {
          Q.description = T;
        }) }),
        /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
          /* @__PURE__ */ u.jsxs("label", { children: [
            "게시판 아이콘",
            /* @__PURE__ */ u.jsx("select", { "aria-label": "게시판 아이콘", value: O.icon, onChange: (T) => G((Q) => {
              Q.icon = T.target.value;
            }), children: [["layers", "자료"], ["calendar", "일정"], ["grid", "모음"], ["user", "사람"], ["chat", "대화"], ["spark", "아이디어"]].map(([T, Q]) => /* @__PURE__ */ u.jsx("option", { value: T, children: Q }, T)) })
          ] }),
          /* @__PURE__ */ u.jsxs("label", { children: [
            "게시판 레이아웃",
            /* @__PURE__ */ u.jsxs("select", { "aria-label": "게시판 레이아웃", value: O.layout, onChange: (T) => G((Q) => {
              Q.layout = T.target.value;
            }), children: [
              /* @__PURE__ */ u.jsx("option", { value: "list", children: "목록형" }),
              /* @__PURE__ */ u.jsx("option", { value: "grid", children: "카드형" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx(wc, { label: "게시판 표시", value: O.visible, onChange: (T) => G((Q) => {
          Q.visible = T;
        }) }),
        /* @__PURE__ */ u.jsx("p", { className: "muted", children: "숨긴 게시판은 메뉴와 일반 방문자 데이터에서 제외됩니다. 공개 GitHub 저장소에는 내용이 남으므로 비밀 자료를 올리지 마세요." }),
        /* @__PURE__ */ u.jsx("button", { className: "btn danger", onClick: () => {
          confirm(`‘${O.title}’ 게시판과 글 ${O.posts.filter((T) => !T.deleted).length}개를 휴지통으로 옮길까요?`) && (c((T) => {
            T.boardTrash.push(T.boards.find((Q) => Q.id === O.id)), T.boards = T.boards.filter((Q) => Q.id !== O.id), T.menuOrder = T.menuOrder.filter((Q) => Q !== "board:" + O.id);
          }), r(""), E(""));
        }, children: "게시판 삭제" })
      ] }) : /* @__PURE__ */ u.jsx("p", { className: "notice", children: "새 게시판을 만들어 주세요. 기본 메뉴는 위·아래로 이동할 수 있습니다." })
    ] }),
    O && /* @__PURE__ */ u.jsxs("section", { className: "board-post-editor", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "section-head", children: [
        /* @__PURE__ */ u.jsxs("h3", { children: [
          O.title,
          " · 게시글 관리"
        ] }),
        /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => {
          const T = oh("post");
          G((Q) => Q.posts.unshift({ id: T, title: "새 게시글", summary: "", content: "", tags: [], links: [], updatedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), visible: !0, pinned: !1, deleted: !1 })), E(T);
        }, children: "새 게시글 작성" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "editor-layout", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "item-list", children: [
          O.posts.filter((T) => !T.deleted).map((T) => {
            const Q = O.posts.indexOf(T);
            return /* @__PURE__ */ u.jsxs("div", { className: "item-row", children: [
              /* @__PURE__ */ u.jsxs("button", { "aria-label": `${T.title} 게시글 편집`, className: A?.id === T.id ? "selected" : "", onClick: () => E(T.id), children: [
                /* @__PURE__ */ u.jsx("b", { children: T.title }),
                /* @__PURE__ */ u.jsxs("small", { children: [
                  T.visible ? "표시" : "숨김",
                  T.pinned ? " · 공지" : ""
                ] })
              ] }),
              /* @__PURE__ */ u.jsxs("div", { className: "order-buttons", children: [
                /* @__PURE__ */ u.jsx("button", { "aria-label": `${T.title} 게시글 위로`, disabled: Q === 0, onClick: () => B(Q, -1), children: "↑" }),
                /* @__PURE__ */ u.jsx("button", { "aria-label": `${T.title} 게시글 아래로`, disabled: Q === O.posts.length - 1, onClick: () => B(Q, 1), children: "↓" })
              ] })
            ] }, T.id);
          }),
          !O.posts.some((T) => !T.deleted) && /* @__PURE__ */ u.jsx("p", { className: "notice", children: "새 글을 작성해 주세요." })
        ] }),
        A && !A.deleted ? /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
          /* @__PURE__ */ u.jsx(Vt, { label: "게시글 영구 ID", value: A.id, readOnly: !0 }),
          /* @__PURE__ */ u.jsx(Vt, { label: "게시글 제목", value: A.title, onChange: (T) => U((Q) => {
            Q.title = T;
          }) }),
          /* @__PURE__ */ u.jsx(Vt, { label: "게시글 요약", value: A.summary, onChange: (T) => U((Q) => {
            Q.summary = T;
          }) }),
          /* @__PURE__ */ u.jsx(Vt, { label: "게시글 본문", value: A.content, multi: !0, onChange: (T) => U((Q) => {
            Q.content = T;
          }) }),
          /* @__PURE__ */ u.jsxs("label", { children: [
            "게시글 태그 (쉼표로 구분)",
            /* @__PURE__ */ u.jsx("input", { "aria-label": "게시글 태그 (쉼표로 구분)", defaultValue: A.tags.join(", "), onChange: (T) => {
              const Q = T.target.value;
              U(($) => {
                $.tags = Q.split(",").map((w) => w.trim()).filter(Boolean);
              });
            } }, A.id)
          ] }),
          /* @__PURE__ */ u.jsx(Vt, { label: "게시글 업데이트 날짜", type: "date", value: A.updatedAt, onChange: (T) => U((Q) => {
            Q.updatedAt = T;
          }) }),
          /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
            /* @__PURE__ */ u.jsx(wc, { label: "게시글 표시", value: A.visible, onChange: (T) => U((Q) => {
              Q.visible = T;
            }) }),
            /* @__PURE__ */ u.jsx(wc, { label: "공지로 상단 고정", value: A.pinned, onChange: (T) => U((Q) => {
              Q.pinned = T;
            }) })
          ] }),
          /* @__PURE__ */ u.jsx("h4", { children: "자료 링크" }),
          /* @__PURE__ */ u.jsx("p", { className: "muted", children: "문서·PDF·PPT 등은 Google Drive, GitHub 등의 공유 주소를 등록하세요. 자료 파일 직접 업로드는 지원하지 않습니다." }),
          A.links.map((T, Q) => /* @__PURE__ */ u.jsxs("div", { className: "resource-editor", children: [
            /* @__PURE__ */ u.jsx(Vt, { label: `자료 ${Q + 1} 이름`, value: T.label, onChange: ($) => U((w) => {
              w.links[Q].label = $;
            }) }),
            /* @__PURE__ */ u.jsx(Vt, { label: `자료 ${Q + 1} 주소`, value: T.url, onChange: ($) => U((w) => {
              w.links[Q].url = $;
            }) }),
            /* @__PURE__ */ u.jsxs("button", { className: "btn", onClick: () => U(($) => {
              $.links.splice(Q, 1);
            }), children: [
              "자료 ",
              Q + 1,
              " 링크 삭제"
            ] })
          ] }, Q)),
          /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: A.links.length >= 10, onClick: () => U((T) => {
            T.links.push({ label: "자료 열기", url: "" });
          }), children: "자료 링크 추가" }),
          /* @__PURE__ */ u.jsx("button", { className: "btn danger", onClick: () => {
            confirm(`‘${A.title}’ 글을 휴지통으로 옮길까요?`) && (U((T) => {
              T.deleted = !0;
            }), E(""));
          }, children: "게시글 삭제" })
        ] }) : /* @__PURE__ */ u.jsx("p", { className: "notice", children: "왼쪽에서 글을 선택하거나 새 글을 작성하세요." })
      ] }),
      /* @__PURE__ */ u.jsxs("details", { children: [
        /* @__PURE__ */ u.jsxs("summary", { children: [
          "이 게시판의 삭제한 글 (",
          O.posts.filter((T) => T.deleted).length,
          ")"
        ] }),
        O.posts.filter((T) => T.deleted).map((T) => /* @__PURE__ */ u.jsxs("div", { className: "trash-row", children: [
          /* @__PURE__ */ u.jsx("b", { children: T.title }),
          /* @__PURE__ */ u.jsx("button", { className: "btn", "aria-label": `${T.title} 게시글 복원`, onClick: () => G((Q) => {
            Q.posts.find(($) => $.id === T.id).deleted = !1;
          }), children: "글 복원" })
        ] }, T.id))
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("details", { className: "board-trash", children: [
      /* @__PURE__ */ u.jsxs("summary", { children: [
        "삭제한 게시판 (",
        (f.boardTrash || []).length,
        ")"
      ] }),
      (f.boardTrash || []).map((T) => /* @__PURE__ */ u.jsxs("div", { className: "trash-row", children: [
        /* @__PURE__ */ u.jsxs("b", { children: [
          T.title,
          " · 글 ",
          T.posts.length,
          "개"
        ] }),
        /* @__PURE__ */ u.jsx("button", { className: "btn", "aria-label": `${T.title} 게시판 복원`, onClick: () => {
          c((Q) => {
            Q.boards.push(T), Q.boardTrash = Q.boardTrash.filter(($) => $.id !== T.id), Q.menuOrder.push("board:" + T.id);
          }), r(T.id);
        }, children: "게시판 복원" })
      ] }, T.id))
    ] })
  ] });
}
const qh = Z.createContext(null), Nu = () => Z.useContext(qh);
function jp({ payload: f, emit: c, children: d }) {
  const r = Z.useRef(null), [v, E] = Z.useState(!1), [j, O] = Z.useState(Date.now()), A = f.access, g = !!A?.authenticated && j < A.expiresAt, G = (X, J = {}) => new Promise((B, K) => {
    if (r.current) {
      K(new Error("이전 요청을 처리하고 있습니다."));
      return;
    }
    const T = typeof J.requestId == "string" ? J.requestId : crypto.randomUUID(), Q = window.setTimeout(() => {
      r.current = null, E(!1), K(new Error("응답이 지연됩니다. 입력은 유지됩니다. 저장 여부를 확인한 뒤 다시 시도하세요."));
    }, 45e3);
    r.current = { id: T, resolve: B, reject: K, timer: Q }, E(!0), c("event", { ...J, id: T, action: X });
  });
  Z.useEffect(() => {
    const X = f.response, J = r.current;
    !X || !J || X.id !== J.id || (clearTimeout(J.timer), r.current = null, E(!1), X.ok ? J.resolve(X.result || {}) : J.reject(new Error(X.error || "처리하지 못했습니다.")));
  }, [f.response]), Z.useEffect(() => () => {
    r.current && (clearTimeout(r.current.timer), r.current.reject(new Error("화면 연결이 종료되었습니다.")), r.current = null);
  }, []), Z.useEffect(() => {
    const X = setInterval(() => O(Date.now()), 1e3);
    return () => clearInterval(X);
  }, []);
  const U = Z.useRef(G);
  return U.current = G, Z.useEffect(() => {
    const X = setInterval(() => {
      r.current || U.current("heartbeat").catch(() => {
      });
    }, 15e3);
    return () => clearInterval(X);
  }, []), Z.useEffect(() => {
    A?.authenticated && !g && !r.current && U.current("heartbeat").catch(() => {
    });
  }, [g, A]), Z.useEffect(() => {
    const X = setInterval(() => {
      r.current || U.current("refresh").catch(() => {
      });
    }, 6e4);
    return () => clearInterval(X);
  }, []), /* @__PURE__ */ u.jsx(qh.Provider, { value: { request: G, busy: v, authenticated: g, configured: !!A?.adminConfigured, privateConfigured: !!A?.privateConfigured, expiresAt: A?.expiresAt || 0 }, children: d });
}
const Zn = (f) => structuredClone(f), Sp = (f) => f.split(`
`).map((c) => c.trim()).filter(Boolean);
function Ce({ label: f, value: c, onChange: d, multi: r = !1, disabled: v = !1, type: E = "text" }) {
  return /* @__PURE__ */ u.jsxs("label", { children: [
    f,
    r ? /* @__PURE__ */ u.jsx("textarea", { "aria-label": f, rows: 4, value: c, disabled: v, onChange: (j) => d(j.target.value) }) : /* @__PURE__ */ u.jsx("input", { "aria-label": f, type: E, value: c, disabled: v, onChange: (j) => d(j.target.value) })
  ] });
}
function gt({ label: f, value: c, onChange: d }) {
  return /* @__PURE__ */ u.jsxs("label", { className: "check-field", children: [
    /* @__PURE__ */ u.jsx("input", { type: "checkbox", checked: c, onChange: (r) => d(r.target.checked) }),
    f
  ] });
}
function Ep() {
  const f = Nu(), [c, d] = Z.useState([]), [r, v] = Z.useState(null), [E, j] = Z.useState(""), [O, A] = Z.useState(""), [g, G] = Z.useState(""), [U, X] = Z.useState(""), [J, B] = Z.useState(""), K = async () => {
    X("");
    try {
      const w = await f.request("questions_list");
      d(w.questions), j(w.privateHead);
    } catch (w) {
      X(w.message);
    }
  }, T = async (w) => {
    X("");
    try {
      const re = await f.request("question_detail", { questionId: w });
      v(re.question), j(re.privateHead);
    } catch (re) {
      X(re.message);
    }
  }, Q = async (w) => {
    if (r && !(w === "delete" && !confirm("이 비밀 글을 삭제할까요? GitHub 과거 커밋에서는 별도 삭제가 필요합니다.")))
      try {
        await f.request("question_save", { questionId: r.id, privateHead: E, operation: w, status: r.status, reply: r.adminReply || "" }), v(null), B("저장했습니다."), await K();
      } catch (re) {
        X(re.message);
      }
  }, $ = c.filter((w) => (!g || w.appId === g) && [w.title, w.content].join(" ").toLowerCase().includes(O.toLowerCase()));
  return /* @__PURE__ */ u.jsxs("section", { className: "inbox", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ u.jsx("h2", { children: "관리자 전용 비밀 질문" }),
      /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: f.busy, onClick: K, children: "질문 불러오기" })
    ] }),
    /* @__PURE__ */ u.jsx("p", { className: "muted", children: "인증된 현재 세션에만 표시됩니다. 이메일 답변은 아래 주소로 직접 보내세요. 이 화면의 답변·메모 저장은 이메일을 발송하지 않습니다." }),
    U && /* @__PURE__ */ u.jsx("p", { role: "alert", className: "error-note", children: U }),
    J && /* @__PURE__ */ u.jsx("p", { role: "status", children: J }),
    /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
      /* @__PURE__ */ u.jsx(Ce, { label: "질문 제목·내용 검색", value: O, onChange: A }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        "관련 앱 필터",
        /* @__PURE__ */ u.jsxs("select", { "aria-label": "관련 앱 필터", value: g, onChange: (w) => G(w.target.value), children: [
          /* @__PURE__ */ u.jsx("option", { value: "", children: "전체" }),
          [...new Map(c.map((w) => [w.appId, w.appTitle])).entries()].map(([w, re]) => /* @__PURE__ */ u.jsx("option", { value: w, children: re }, w))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "inbox-layout", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        $.length === 0 && /* @__PURE__ */ u.jsx("p", { className: "notice", children: "질문을 불러오거나 검색 조건을 확인해 주세요." }),
        $.map((w) => /* @__PURE__ */ u.jsxs("button", { className: "question-row", onClick: () => T(w.id), disabled: f.busy, children: [
          /* @__PURE__ */ u.jsx("b", { children: w.title }),
          /* @__PURE__ */ u.jsxs("small", { children: [
            w.appTitle,
            " · ",
            w.status,
            " · ",
            w.createdAt
          ] })
        ] }, w.id))
      ] }),
      r && /* @__PURE__ */ u.jsxs("section", { className: "panel", children: [
        /* @__PURE__ */ u.jsx("h3", { children: r.title }),
        /* @__PURE__ */ u.jsxs("p", { className: "muted", children: [
          r.authorNickname || "익명",
          " · ",
          r.appTitle
        ] }),
        /* @__PURE__ */ u.jsx("p", { className: "private-body", children: r.content }),
        /* @__PURE__ */ u.jsxs("label", { children: [
          "답변 받을 이메일",
          /* @__PURE__ */ u.jsx("input", { "aria-label": "답변 받을 이메일", readOnly: !0, value: r.email || "이메일이 등록되지 않은 이전 글입니다." })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
          /* @__PURE__ */ u.jsxs("label", { children: [
            "질문 상태",
            /* @__PURE__ */ u.jsx("select", { "aria-label": "질문 상태", value: r.status, onChange: (w) => v({ ...r, status: w.target.value }), children: ["미확인", "확인", "답변 완료"].map((w) => /* @__PURE__ */ u.jsx("option", { children: w }, w)) })
          ] }),
          /* @__PURE__ */ u.jsx(Ce, { multi: !0, label: "비공개 관리자 답변·메모", value: r.adminReply || "", onChange: (w) => v({ ...r, adminReply: w }) }),
          /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
            /* @__PURE__ */ u.jsx("button", { className: "btn primary", disabled: f.busy, onClick: () => Q("update"), children: "답변·상태 저장" }),
            /* @__PURE__ */ u.jsx("button", { className: "btn danger", disabled: f.busy, onClick: () => Q("delete"), children: "비밀 글 삭제" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Np({ open: f, onClose: c, onPreview: d, payload: r }) {
  const v = Nu(), E = Z.useRef(null), [j, O] = Z.useState(""), [A, g] = Z.useState(""), [G, U] = Z.useState(""), [X, J] = Z.useState(null), [B, K] = Z.useState(null), [T, Q] = Z.useState([]), [$, w] = Z.useState("apps"), [re, Ke] = Z.useState(0), [be, ae] = Z.useState(0), [De, Be] = Z.useState(!1), Ye = !!B && !!X && (JSON.stringify(B) !== JSON.stringify(X.document) || T.length > 0), it = Z.useRef(0), Ge = Z.useRef(!1), ne = () => {
    v.authenticated && Date.now() - it.current > 3e4 && !v.busy && (it.current = Date.now(), v.request("activity").catch(() => {
    }));
  };
  Z.useEffect(() => {
    f && !E.current?.open && E.current?.showModal(), !f && E.current?.open && E.current.close();
  }, [f]), Z.useEffect(() => {
    v.authenticated || (J(null), K(null), Q([]), O(""), w("apps"), Ge.current = !1);
  }, [v.authenticated]);
  const Ie = (h) => {
    J(h), K(Zn(h.document)), Q([]);
  }, ut = async () => {
    Be(!0), g("");
    try {
      const h = await v.request("admin_load");
      Ie(h.admin);
    } catch (h) {
      g(h.message);
    } finally {
      Be(!1);
    }
  };
  Z.useEffect(() => {
    f && v.authenticated && !X && !De && !v.busy && !Ge.current && (Ge.current = !0, ut());
  }, [f, v.authenticated, X, De, v.busy]);
  const D = () => {
    v.busy || Ye && !confirm("저장하지 않은 편집을 취소하고 닫을까요?") || (X && (K(Zn(X.document)), Q([])), g(""), c());
  }, C = (h) => {
    K((x) => {
      if (!x) return x;
      const Y = Zn(x);
      return h(Y), Y;
    }), ne();
  }, P = async (h) => {
    h.preventDefault(), g("");
    const x = j;
    O(""), Be(!0);
    try {
      const Y = await v.request("login", { password: x });
      Ie(Y.admin);
    } catch (Y) {
      g(Y.message);
    } finally {
      Be(!1);
    }
  }, ce = async (h, x) => {
    if (!(!X || !B) && !(h === "publish" && !confirm("현재 편집 내용을 홈페이지에 게시할까요?")) && !(h === "discard" && !confirm("초안을 마지막 게시 내용으로 되돌릴까요?")) && !(h === "restore" && !confirm("이전 게시 버전을 초안으로 불러올까요? 현재 초안은 교체됩니다."))) {
      g(""), U("");
      try {
        const Y = await v.request("cms_save", { operation: h, version: x, head: X.head, document: B, uploads: T.map(({ id: I, data: Te }) => ({ id: I, data: Te })) });
        Ie(Y.admin), U(`${Y.message} ${Y.commit ? "커밋 " + Y.commit.slice(0, 9) : ""}`);
      } catch (Y) {
        g(Y.message);
      }
    }
  }, pe = async (h, x) => {
    if (g(""), h.size > 3 * 1024 * 1024 || !["image/png", "image/jpeg", "image/webp"].includes(h.type)) {
      g("PNG/JPG/WebP 이미지를 3MiB 이내로 올리세요.");
      return;
    }
    if (T.length >= 10) {
      g("이미지는 한 번에 10개까지 올릴 수 있습니다. 먼저 임시 저장하세요.");
      return;
    }
    const Y = crypto.randomUUID(), I = await new Promise((Te, ol) => {
      const dl = new FileReader();
      dl.onload = () => Te(String(dl.result)), dl.onerror = ol, dl.readAsDataURL(h);
    });
    Q((Te) => [...Te, { id: Y, data: I.split(",")[1], preview: I }]), C((Te) => x(Te, "upload:" + Y));
  }, y = (h) => T.find((x) => "upload:" + x.id === h)?.preview || X?.images[h] || "", m = (h, x, Y) => /* @__PURE__ */ u.jsxs("div", { className: "image-editor", children: [
    /* @__PURE__ */ u.jsx(Ce, { label: h + " 경로", value: x, onChange: (I) => C((Te) => Y(Te, I)) }),
    y(x) && /* @__PURE__ */ u.jsx("img", { src: y(x), alt: h + " 미리보기" }),
    /* @__PURE__ */ u.jsxs("label", { className: "file-label", children: [
      h,
      " 업로드",
      /* @__PURE__ */ u.jsx("input", { type: "file", accept: "image/png,image/jpeg,image/webp", onChange: (I) => {
        I.target.files?.[0] && pe(I.target.files[0], Y), I.target.value = "";
      } })
    ] }),
    /* @__PURE__ */ u.jsxs("button", { className: "text-button", onClick: () => C((I) => Y(I, "")), children: [
      h,
      " 제거"
    ] })
  ] }), L = (h, x, Y) => {
    const I = x + Y;
    I < 0 || I >= h.length || ([h[x], h[I]] = [h[I], h[x]]);
  }, V = () => {
    if (!B) return;
    const h = Zn(B);
    h.apps = h.apps.filter((x) => x.visible !== !1).map((x) => ({ ...x, thumbnail: y(x.thumbnail), screenshots: x.screenshots.map(y) })), h.sections = h.sections.filter((x) => x.visible).map((x) => ({ ...x, image: y(x.image) })), h.site.hero.image = y(h.site.hero.image), h.site.profile.image = y(h.site.profile.image || ""), h.site.categories = (h.site.categoryItems || []).filter((x) => x.visible).map((x) => x.name), d({ ...r, site: h.site, apps: h.apps, sections: h.sections, boards: (h.boards || []).filter((x) => x.visible).map((x) => ({ ...x, posts: x.posts.filter((Y) => Y.visible && !Y.deleted) })), menuOrder: h.menuOrder }), c();
  }, W = B?.apps[re], te = B?.sections[be], fe = (h, x) => C((Y) => {
    Y.apps[re][h] = x;
  }), Pe = [["title", "앱 이름"], ["summary", "한 줄 소개"], ["description", "상세 소개", !0], ["appUrl", "앱 실행 주소"], ["githubUrl", "GitHub 주소"], ["guideUrl", "사용 설명서 주소"], ["status", "서비스 상태"], ["updatedAt", "업데이트 날짜"]], He = [["tags", "태그"], ["features", "주요 기능"], ["targetUsers", "추천 사용자"], ["supportedDevices", "지원 기기"], ["useCases", "활용 예시"], ["instructions", "사용 방법"], ["changelog", "변경 내역"]];
  return /* @__PURE__ */ u.jsx("dialog", { ref: E, className: "admin-dialog", "aria-label": "홈페이지 관리자", onCancel: (h) => {
    h.preventDefault(), D();
  }, onClick: (h) => {
    h.target === h.currentTarget && D();
  }, children: /* @__PURE__ */ u.jsxs("div", { className: "admin-shell", onInput: ne, children: [
    /* @__PURE__ */ u.jsxs("header", { className: "admin-header", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "WORKSHOP MANAGER" }),
        /* @__PURE__ */ u.jsx("h2", { children: "홈페이지 관리자" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
        v.authenticated && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx("span", { className: "admin-status", children: "관리자 인증됨" }),
          /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: v.busy, onClick: async () => {
            Ye && !confirm("편집을 취소하고 로그아웃할까요?") || (await v.request("logout"), J(null), K(null), Q([]), c());
          }, children: "로그아웃" })
        ] }),
        /* @__PURE__ */ u.jsx("button", { className: "icon-button", "aria-label": "관리자 닫기", disabled: v.busy, onClick: D, children: "✕" })
      ] })
    ] }),
    v.authenticated ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("nav", { className: "admin-tabs", "aria-label": "관리자 도구", children: [["apps", "앱 관리"], ["boards", "게시판·메뉴"], ["site", "사이트 문구"], ["sections", "홈 배치"], ["categories", "카테고리"], ["profile", "제작자·링크"], ["trash", "휴지통"], ["history", "게시 버전"], ["inbox", "비밀 질문"]].map(([h, x]) => /* @__PURE__ */ u.jsx("button", { className: $ === h ? "active" : "", onClick: () => w(h), children: x }, h)) }),
      A && /* @__PURE__ */ u.jsx("p", { role: "alert", className: "error-note sticky-error", children: A }),
      G && /* @__PURE__ */ u.jsx("p", { role: "status", className: "notice", children: G }),
      !B || !X ? /* @__PURE__ */ u.jsx("p", { className: "notice", children: "관리 데이터를 불러오는 중입니다." }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        $ !== "inbox" && /* @__PURE__ */ u.jsxs("div", { className: "publish-toolbar", children: [
          /* @__PURE__ */ u.jsxs("span", { children: [
            Ye ? "저장하지 않은 변경 있음" : "초안과 동기화됨",
            " ",
            /* @__PURE__ */ u.jsx("small", { children: "공개 초안은 GitHub에서 보일 수 있습니다." })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
            /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: v.busy, onClick: V, children: "저장 전 미리보기" }),
            /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: v.busy, onClick: () => ce("draft"), children: "임시 저장" }),
            /* @__PURE__ */ u.jsx("button", { className: "btn primary", disabled: v.busy, onClick: () => ce("publish"), children: "게시하기" }),
            /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: v.busy, onClick: () => ce("discard"), children: "초안 되돌리기" }),
            /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: v.busy, onClick: () => {
              Ye && !confirm("로컬 편집을 취소하고 최신본을 불러올까요?") || ut();
            }, children: "최신본 불러오기" })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("fieldset", { className: "admin-fieldset", disabled: v.busy, children: [
          $ === "boards" && /* @__PURE__ */ u.jsx(xp, { doc: B, edit: C }),
          $ === "apps" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsxs("div", { className: "section-head", children: [
              /* @__PURE__ */ u.jsx("h3", { children: "앱 작성·배치" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => {
                const h = B.apps.length;
                C((x) => x.apps.push({ id: "app-" + crypto.randomUUID().slice(0, 8), title: "새 앱", summary: "", description: "", category: x.site.categories[0] || "기타", tags: [], thumbnail: "", screenshots: [], appUrl: "", githubUrl: "", guideUrl: "", features: [], targetUsers: [], supportedDevices: [], status: "준비 중", featured: !1, sortOrder: h + 1, updatedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), isExample: !1, useCases: [], instructions: [], changelog: [], visible: !0, showExampleBadge: !0 })), Ke(h);
              }, children: "새 앱 작성" })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "editor-layout", children: [
              /* @__PURE__ */ u.jsx("div", { className: "item-list", children: B.apps.map((h, x) => /* @__PURE__ */ u.jsxs("div", { className: "item-row", children: [
                /* @__PURE__ */ u.jsxs("button", { className: x === re ? "selected" : "", onClick: () => Ke(x), children: [
                  /* @__PURE__ */ u.jsx("b", { children: h.title }),
                  /* @__PURE__ */ u.jsxs("small", { children: [
                    h.visible === !1 ? "숨김" : "표시",
                    " ",
                    h.isExample ? "· 예시" : ""
                  ] })
                ] }),
                /* @__PURE__ */ u.jsxs("div", { className: "order-buttons", children: [
                  /* @__PURE__ */ u.jsx("button", { "aria-label": `${h.title} 위로`, onClick: () => {
                    C((Y) => {
                      L(Y.apps, x, -1), Y.apps.forEach((I, Te) => I.sortOrder = Te + 1);
                    }), Ke(Math.max(0, x - 1));
                  }, children: "↑" }),
                  /* @__PURE__ */ u.jsx("button", { "aria-label": `${h.title} 아래로`, onClick: () => {
                    C((Y) => {
                      L(Y.apps, x, 1), Y.apps.forEach((I, Te) => I.sortOrder = Te + 1);
                    }), Ke(Math.min(B.apps.length - 1, x + 1));
                  }, children: "↓" })
                ] })
              ] }, h.id)) }),
              W && /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
                /* @__PURE__ */ u.jsx(Ce, { label: "앱 영구 ID", value: W.id, disabled: X.document.apps.some((h) => h.id === W.id), onChange: (h) => fe("id", h) }),
                /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
                  Pe.map(([h, x, Y]) => /* @__PURE__ */ u.jsx(Ce, { label: x, value: String(W[h] || ""), multi: Y, onChange: (I) => fe(h, I) }, h)),
                  /* @__PURE__ */ u.jsxs("label", { children: [
                    "카테고리",
                    /* @__PURE__ */ u.jsx("select", { "aria-label": "앱 카테고리", value: W.category, onChange: (h) => fe("category", h.target.value), children: B.site.categoryItems?.map((h) => /* @__PURE__ */ u.jsx("option", { children: h.name }, h.name)) })
                  ] }),
                  /* @__PURE__ */ u.jsx(Ce, { label: "표시 순서", type: "number", value: W.sortOrder, onChange: (h) => fe("sortOrder", Number(h)) })
                ] }),
                /* @__PURE__ */ u.jsxs("div", { className: "check-row", children: [
                  /* @__PURE__ */ u.jsx(gt, { label: "공개 화면에 표시", value: W.visible !== !1, onChange: (h) => fe("visible", h) }),
                  /* @__PURE__ */ u.jsx(gt, { label: "대표 앱", value: W.featured, onChange: (h) => fe("featured", h) }),
                  /* @__PURE__ */ u.jsx(gt, { label: "예시 콘텐츠", value: W.isExample, onChange: (h) => fe("isExample", h) }),
                  /* @__PURE__ */ u.jsx(gt, { label: "예시 배지 표시", value: W.showExampleBadge !== !1, onChange: (h) => fe("showExampleBadge", h) })
                ] }),
                m("썸네일", W.thumbnail, (h, x) => h.apps[re].thumbnail = x),
                /* @__PURE__ */ u.jsx("h4", { children: "미리보기 이미지" }),
                W.screenshots.map((h, x) => /* @__PURE__ */ u.jsxs("div", { children: [
                  m(`미리보기 ${x + 1}`, h, (Y, I) => Y.apps[re].screenshots[x] = I),
                  /* @__PURE__ */ u.jsxs("button", { className: "text-button danger", onClick: () => C((Y) => Y.apps[re].screenshots.splice(x, 1)), children: [
                    "미리보기 ",
                    x + 1,
                    " 삭제"
                  ] })
                ] }, x)),
                /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: W.screenshots.length >= 8, onClick: () => C((h) => h.apps[re].screenshots.push("")), children: "미리보기 추가" }),
                /* @__PURE__ */ u.jsx("div", { className: "editor-grid", children: He.map(([h, x]) => /* @__PURE__ */ u.jsx(Ce, { multi: !0, label: x + " (한 줄에 하나)", value: W[h].join(`
`), onChange: (Y) => fe(h, Sp(Y)) }, h)) }),
                /* @__PURE__ */ u.jsx("button", { className: "btn danger", onClick: () => {
                  confirm(`‘${W.title}’ 앱 소개를 휴지통으로 이동할까요? 댓글은 유지됩니다.`) && (C((h) => {
                    h.trash.push({ kind: "app", value: h.apps.splice(re, 1)[0] });
                  }), Ke(0));
                }, children: "앱 삭제" })
              ] })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "button-row bulk-actions", children: [
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((h) => {
                h.apps.filter((x) => x.isExample).forEach((x) => x.visible = !1), h.sections.filter((x) => x.isExample).forEach((x) => x.visible = !1);
              }), children: "예시 콘텐츠 전체 숨기기" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn danger", onClick: () => {
                const h = [...B.apps.filter((x) => x.isExample).map((x) => x.title), ...B.sections.filter((x) => x.isExample).map((x) => x.title)];
                confirm(`다음 예시 항목을 휴지통으로 이동할까요?
` + h.join(`
`)) && (C((x) => {
                  x.trash.push(...x.apps.filter((Y) => Y.isExample).map((Y) => ({ kind: "app", value: Y })), ...x.sections.filter((Y) => Y.isExample).map((Y) => ({ kind: "section", value: Y }))), x.apps = x.apps.filter((Y) => !Y.isExample), x.sections = x.sections.filter((Y) => !Y.isExample);
                }), Ke(0), ae(0));
              }, children: "예시 콘텐츠 정리" })
            ] })
          ] }),
          $ === "site" && /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
            /* @__PURE__ */ u.jsx("h3", { children: "사이트 문구와 장식" }),
            /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
              [["title", "사이트 이름"], ["brand", "영문 브랜드"], ["brandMark", "로고 문자"], ["tagline", "소개 문구"], ["topNote", "상단 안내"], ["footer", "하단 문구"]].map(([h, x]) => /* @__PURE__ */ u.jsx(Ce, { label: x, value: String(B.site[h] || ""), onChange: (Y) => C((I) => I.site[h] = Y) }, h)),
              /* @__PURE__ */ u.jsx(gt, { label: "푸터 표시", value: B.site.footerVisible !== !1, onChange: (h) => C((x) => x.site.footerVisible = h) })
            ] }),
            /* @__PURE__ */ u.jsx("h4", { children: "메인 소개" }),
            B.site.hero && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(Ce, { label: "메인 제목 (줄바꿈 가능)", multi: !0, value: B.site.hero.title, onChange: (h) => C((x) => x.site.hero.title = h) }),
              /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
                /* @__PURE__ */ u.jsx(Ce, { label: "메인 버튼 문구", value: B.site.hero.buttonLabel, onChange: (h) => C((x) => x.site.hero.buttonLabel = h) }),
                /* @__PURE__ */ u.jsxs("label", { children: [
                  "메인 버튼 연결",
                  /* @__PURE__ */ u.jsxs("select", { "aria-label": "메인 버튼 연결", value: B.site.hero.buttonView, onChange: (h) => C((x) => x.site.hero.buttonView = h.target.value), children: [
                    /* @__PURE__ */ u.jsx("option", { value: "apps", children: "앱 모음" }),
                    /* @__PURE__ */ u.jsx("option", { value: "about", children: "제작자 소개" }),
                    /* @__PURE__ */ u.jsx("option", { value: "guestbook", children: "질문게시판" })
                  ] })
                ] })
              ] }),
              m("메인 이미지", B.site.hero.image, (h, x) => h.site.hero.image = x),
              /* @__PURE__ */ u.jsx(gt, { label: "이미지가 없을 때 기본 일러스트 표시", value: B.site.hero.illustration, onChange: (h) => C((x) => x.site.hero.illustration = h) }),
              /* @__PURE__ */ u.jsx(Ce, { label: "일러스트 메모 문구", multi: !0, value: B.site.hero.note, onChange: (h) => C((x) => x.site.hero.note = h) }),
              /* @__PURE__ */ u.jsx(Ce, { label: "일러스트 앱 문구", value: B.site.hero.caption, onChange: (h) => C((x) => x.site.hero.caption = h) }),
              /* @__PURE__ */ u.jsx(Ce, { label: "일러스트 스티커 문구", value: B.site.hero.sticker, onChange: (h) => C((x) => x.site.hero.sticker = h) })
            ] }),
            /* @__PURE__ */ u.jsx("h4", { children: "왼쪽 장식 안내" }),
            B.site.sidebar && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(gt, { label: "왼쪽 안내 표시", value: B.site.sidebar.visible, onChange: (h) => C((x) => x.site.sidebar.visible = h) }),
              /* @__PURE__ */ u.jsx(Ce, { label: "왼쪽 안내 제목", value: B.site.sidebar.title, onChange: (h) => C((x) => x.site.sidebar.title = h) }),
              /* @__PURE__ */ u.jsx(Ce, { multi: !0, label: "왼쪽 안내 내용", value: B.site.sidebar.body, onChange: (h) => C((x) => x.site.sidebar.body = h) })
            ] })
          ] }),
          $ === "sections" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsxs("div", { className: "section-head", children: [
              /* @__PURE__ */ u.jsx("h3", { children: "홈 섹션 추가·배치" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => {
                const h = B.sections.length;
                C((x) => x.sections.push({ id: "section-" + crypto.randomUUID().slice(0, 8), type: "text", title: "새 안내", eyebrow: "FROM THE WORKSHOP", body: "안내 내용을 입력하세요.", visible: !0, isExample: !1, showExampleBadge: !0, layout: "grid", columns: 3, count: 3, image: "", buttonLabel: "", buttonView: "apps" })), ae(h);
              }, children: "새 섹션 추가" })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "editor-layout", children: [
              /* @__PURE__ */ u.jsx("div", { className: "item-list", children: B.sections.map((h, x) => /* @__PURE__ */ u.jsxs("div", { className: "item-row", children: [
                /* @__PURE__ */ u.jsxs("button", { className: x === be ? "selected" : "", onClick: () => ae(x), children: [
                  /* @__PURE__ */ u.jsx("b", { children: h.title }),
                  /* @__PURE__ */ u.jsxs("small", { children: [
                    h.type,
                    " · ",
                    h.visible ? "표시" : "숨김",
                    " ",
                    h.isExample ? "· 예시" : ""
                  ] })
                ] }),
                /* @__PURE__ */ u.jsxs("div", { className: "order-buttons", children: [
                  /* @__PURE__ */ u.jsx("button", { "aria-label": `${h.title} 위로`, onClick: () => {
                    C((Y) => L(Y.sections, x, -1)), ae(Math.max(0, x - 1));
                  }, children: "↑" }),
                  /* @__PURE__ */ u.jsx("button", { "aria-label": `${h.title} 아래로`, onClick: () => {
                    C((Y) => L(Y.sections, x, 1)), ae(Math.min(B.sections.length - 1, x + 1));
                  }, children: "↓" })
                ] })
              ] }, h.id)) }),
              te && /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
                /* @__PURE__ */ u.jsxs("label", { children: [
                  "섹션 종류",
                  /* @__PURE__ */ u.jsx("select", { "aria-label": "섹션 종류", value: te.type, onChange: (h) => C((x) => x.sections[be].type = h.target.value), children: [["hero", "메인 소개"], ["categories", "카테고리"], ["featured", "대표 앱"], ["recent", "최근 앱"], ["invite", "질문 안내"], ["text", "자유 안내"]].map(([h, x]) => /* @__PURE__ */ u.jsx("option", { value: h, children: x }, h)) })
                ] }),
                ["title", "eyebrow", "body", "buttonLabel"].map((h, x) => /* @__PURE__ */ u.jsx(Ce, { label: ["섹션 제목", "작은 제목", "섹션 내용", "섹션 버튼 문구"][x], value: te[h], multi: h === "body", onChange: (Y) => C((I) => I.sections[be][h] = Y) }, h)),
                /* @__PURE__ */ u.jsxs("div", { className: "check-row", children: [
                  /* @__PURE__ */ u.jsx(gt, { label: "섹션 표시", value: te.visible, onChange: (h) => C((x) => x.sections[be].visible = h) }),
                  /* @__PURE__ */ u.jsx(gt, { label: "예시 섹션", value: te.isExample, onChange: (h) => C((x) => x.sections[be].isExample = h) }),
                  /* @__PURE__ */ u.jsx(gt, { label: "예시 배지 표시", value: te.showExampleBadge, onChange: (h) => C((x) => x.sections[be].showExampleBadge = h) })
                ] }),
                /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
                  /* @__PURE__ */ u.jsxs("label", { children: [
                    "앱 표시 방식",
                    /* @__PURE__ */ u.jsxs("select", { "aria-label": "앱 표시 방식", value: te.layout, onChange: (h) => C((x) => x.sections[be].layout = h.target.value), children: [
                      /* @__PURE__ */ u.jsx("option", { value: "grid", children: "카드형" }),
                      /* @__PURE__ */ u.jsx("option", { value: "list", children: "목록형" })
                    ] })
                  ] }),
                  /* @__PURE__ */ u.jsx(Ce, { label: "표시 개수", type: "number", value: te.count, onChange: (h) => C((x) => x.sections[be].count = Number(h)) }),
                  /* @__PURE__ */ u.jsx(Ce, { label: "데스크톱 열 수 (2~4)", type: "number", value: te.columns, onChange: (h) => C((x) => x.sections[be].columns = Number(h)) }),
                  /* @__PURE__ */ u.jsxs("label", { children: [
                    "섹션 버튼 연결",
                    /* @__PURE__ */ u.jsxs("select", { "aria-label": "섹션 버튼 연결", value: te.buttonView, onChange: (h) => C((x) => x.sections[be].buttonView = h.target.value), children: [
                      /* @__PURE__ */ u.jsx("option", { value: "apps", children: "앱 모음" }),
                      /* @__PURE__ */ u.jsx("option", { value: "about", children: "제작자 소개" }),
                      /* @__PURE__ */ u.jsx("option", { value: "guestbook", children: "질문게시판" })
                    ] })
                  ] })
                ] }),
                m("섹션 이미지", te.image, (h, x) => h.sections[be].image = x),
                /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
                  /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((h) => h.sections.push({ ...Zn(te), id: "section-" + crypto.randomUUID().slice(0, 8), title: te.title + " 사본" })), children: "섹션 복제" }),
                  /* @__PURE__ */ u.jsx("button", { className: "btn danger", onClick: () => {
                    confirm(`‘${te.title}’ 섹션을 휴지통으로 이동할까요?`) && (C((h) => h.trash.push({ kind: "section", value: h.sections.splice(be, 1)[0] })), ae(0));
                  }, children: "섹션 삭제" })
                ] })
              ] })
            ] })
          ] }),
          $ === "categories" && /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
            /* @__PURE__ */ u.jsx("h3", { children: "카테고리 이름·아이콘·순서" }),
            B.site.categoryItems?.map((h, x) => /* @__PURE__ */ u.jsxs("section", { className: "panel", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
                /* @__PURE__ */ u.jsx(Ce, { label: `카테고리 ${x + 1} 이름`, value: h.name, onChange: (Y) => C((I) => {
                  const Te = I.site.categoryItems[x].name;
                  I.site.categoryItems[x].name = Y, I.apps.forEach((ol) => {
                    ol.category === Te && (ol.category = Y);
                  });
                }) }),
                /* @__PURE__ */ u.jsxs("label", { children: [
                  "아이콘",
                  /* @__PURE__ */ u.jsx("select", { "aria-label": "카테고리 아이콘", value: h.icon, onChange: (Y) => C((I) => I.site.categoryItems[x].icon = Y.target.value), children: ["layers", "calendar", "game", "sun", "spark", "grid", "user"].map((Y) => /* @__PURE__ */ u.jsx("option", { children: Y }, Y)) })
                ] })
              ] }),
              /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
                /* @__PURE__ */ u.jsx(gt, { label: "카테고리 표시", value: h.visible, onChange: (Y) => C((I) => I.site.categoryItems[x].visible = Y) }),
                /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((Y) => L(Y.site.categoryItems, x, -1)), children: "위로" }),
                /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((Y) => L(Y.site.categoryItems, x, 1)), children: "아래로" }),
                /* @__PURE__ */ u.jsx("button", { className: "btn danger", disabled: h.name === "기타", onClick: () => {
                  confirm("카테고리를 삭제하고 연결된 앱을 기타로 옮길까요?") && C((Y) => {
                    Y.apps.forEach((I) => {
                      I.category === h.name && (I.category = "기타");
                    }), Y.site.categoryItems.splice(x, 1);
                  });
                }, children: "삭제" })
              ] })
            ] }, x)),
            /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((h) => h.site.categoryItems.push({ name: "새 카테고리 " + h.site.categoryItems.length, icon: "spark", visible: !0 })), children: "카테고리 추가" })
          ] }),
          $ === "profile" && /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
            /* @__PURE__ */ u.jsx("h3", { children: "제작자 소개" }),
            /* @__PURE__ */ u.jsx(Ce, { multi: !0, label: "제작자 페이지 제목", value: B.site.profile.heading || "", onChange: (h) => C((x) => x.site.profile.heading = h) }),
            /* @__PURE__ */ u.jsx(gt, { label: "제작자 소개 본문 표시", value: B.site.profile.visible !== !1, onChange: (h) => C((x) => x.site.profile.visible = h) }),
            ["name", "role", "bio"].map((h, x) => /* @__PURE__ */ u.jsx(Ce, { label: ["제작자 이름", "제작자 한 줄 소개", "제작자 상세 소개"][x], value: B.site.profile[h], multi: h === "bio", onChange: (Y) => C((I) => I.site.profile[h] = Y) }, h)),
            m("프로필 이미지", B.site.profile.image || "", (h, x) => h.site.profile.image = x),
            /* @__PURE__ */ u.jsx("h4", { children: "제작 방향 카드" }),
            /* @__PURE__ */ u.jsx(gt, { label: "제작 방향 카드 표시", value: B.site.profile.showPrinciples !== !1, onChange: (h) => C((x) => x.site.profile.showPrinciples = h) }),
            /* @__PURE__ */ u.jsx(gt, { label: "제작자 페이지 질문 안내 표시", value: B.site.profile.showInvite !== !1, onChange: (h) => C((x) => x.site.profile.showInvite = h) }),
            /* @__PURE__ */ u.jsx(Ce, { label: "제작자 질문 안내 제목", value: B.site.profile.inviteTitle || "", onChange: (h) => C((x) => x.site.profile.inviteTitle = h) }),
            /* @__PURE__ */ u.jsx(Ce, { label: "제작자 질문 안내 문구", value: B.site.profile.inviteBody || "", onChange: (h) => C((x) => x.site.profile.inviteBody = h) }),
            /* @__PURE__ */ u.jsx(Ce, { label: "제작자 질문 안내 버튼", value: B.site.profile.buttonLabel || "", onChange: (h) => C((x) => x.site.profile.buttonLabel = h) }),
            B.site.profile.principles.map((h, x) => /* @__PURE__ */ u.jsxs("div", { className: "ordered-field", children: [
              /* @__PURE__ */ u.jsx(Ce, { label: `제작 방향 ${x + 1}`, value: h, onChange: (Y) => C((I) => I.site.profile.principles[x] = Y) }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((Y) => L(Y.site.profile.principles, x, -1)), children: "위로" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((Y) => L(Y.site.profile.principles, x, 1)), children: "아래로" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((Y) => Y.site.profile.principles.splice(x, 1)), children: "삭제" })
            ] }, x)),
            /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((h) => h.site.profile.principles.push("새 제작 방향")), children: "제작 방향 추가" }),
            /* @__PURE__ */ u.jsx("h4", { children: "외부 채널 링크" }),
            B.site.profile.links.map((h, x) => /* @__PURE__ */ u.jsxs("section", { className: "panel", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
                /* @__PURE__ */ u.jsx(Ce, { label: `외부 링크 ${x + 1} 이름`, value: h.label, onChange: (Y) => C((I) => I.site.profile.links[x].label = Y) }),
                /* @__PURE__ */ u.jsx(Ce, { label: `외부 링크 ${x + 1} 주소`, value: h.url, onChange: (Y) => C((I) => I.site.profile.links[x].url = Y) })
              ] }),
              /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
                /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((Y) => L(Y.site.profile.links, x, -1)), children: "위로" }),
                /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((Y) => L(Y.site.profile.links, x, 1)), children: "아래로" }),
                /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((Y) => Y.site.profile.links.splice(x, 1)), children: "링크 삭제" })
              ] })
            ] }, x)),
            /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((h) => h.site.profile.links.push({ label: "새 링크", url: "" })), children: "외부 링크 추가" })
          ] }),
          $ === "trash" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx("h3", { children: "휴지통" }),
            /* @__PURE__ */ u.jsx("p", { className: "muted", children: "복원 후 게시해야 일반 화면에 반영됩니다. 완전 정리도 GitHub 과거 커밋에서의 삭제는 아닙니다." }),
            B.trash.map((h, x) => /* @__PURE__ */ u.jsxs("div", { className: "trash-row", children: [
              /* @__PURE__ */ u.jsx("b", { children: h.value.title }),
              /* @__PURE__ */ u.jsx("span", { children: h.kind === "app" ? "앱" : "섹션" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => C((Y) => {
                const I = Y.trash[x];
                if (I.kind === "app") {
                  if (Y.apps.some((Te) => Te.id === I.value.id)) {
                    g("같은 ID의 앱이 있습니다. 기존 앱을 먼저 확인하세요.");
                    return;
                  }
                  Y.apps.push(I.value);
                } else {
                  if (Y.sections.some((Te) => Te.id === I.value.id)) {
                    g("같은 ID의 섹션이 있습니다.");
                    return;
                  }
                  Y.sections.push(I.value);
                }
                Y.trash.splice(x, 1);
              }), children: "복원" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn danger", onClick: () => {
                confirm("휴지통에서 제거할까요?") && C((Y) => Y.trash.splice(x, 1));
              }, children: "완전 정리" })
            ] }, x))
          ] }),
          $ === "history" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx("h3", { children: "이전 게시 버전" }),
            /* @__PURE__ */ u.jsx("p", { className: "muted", children: "이전 버전을 초안으로 불러온 뒤 미리보기하고 게시하세요. 최근 20회 게시 전 상태를 제공합니다." }),
            X.history.map((h) => /* @__PURE__ */ u.jsxs("div", { className: "trash-row", children: [
              /* @__PURE__ */ u.jsx("span", { children: h.createdAt }),
              /* @__PURE__ */ u.jsx("code", { children: h.id.slice(0, 8) }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => ce("restore", h.id), children: "이 버전을 초안으로 복구" })
            ] }, h.id))
          ] })
        ] }),
        $ === "inbox" && /* @__PURE__ */ u.jsx(Ep, {})
      ] })
    ] }) : /* @__PURE__ */ u.jsxs("form", { className: "admin-login editor-fields", onSubmit: P, children: [
      /* @__PURE__ */ u.jsx("h3", { children: "관리자 코드로 로그인" }),
      /* @__PURE__ */ u.jsx("p", { className: "muted", children: "앱과 홈페이지를 편집하고 비밀 질문을 관리합니다." }),
      !v.configured && /* @__PURE__ */ u.jsx("p", { className: "notice", children: "관리자 기능을 사용하려면 Streamlit Secrets 설정이 필요합니다. 기본 관리자 코드는 없습니다." }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        "관리자 코드",
        /* @__PURE__ */ u.jsx("input", { type: "password", value: j, onChange: (h) => O(h.target.value), autoComplete: "current-password", maxLength: 512 })
      ] }),
      A && /* @__PURE__ */ u.jsx("p", { role: "alert", className: "error-note", children: A }),
      /* @__PURE__ */ u.jsx("button", { className: "btn primary", disabled: v.busy || !v.configured || !j, children: "관리자 로그인" })
    ] })
  ] }) });
}
function dh({ appId: f = "" }) {
  const c = Nu(), [d, r] = Z.useState(!1), [v, E] = Z.useState(""), [j, O] = Z.useState(""), [A, g] = Z.useState(""), [G, U] = Z.useState(""), [X, J] = Z.useState(""), [B, K] = Z.useState(""), T = Z.useRef(crypto.randomUUID()), Q = async ($) => {
    $.preventDefault(), J("");
    try {
      const w = await c.request("question_submit", { requestId: T.current, appId: f, nickname: v, email: j, title: A, content: G });
      K(w.receipt), O(""), E(""), g(""), U(""), T.current = crypto.randomUUID();
    } catch (w) {
      J(w.message);
    }
  };
  return /* @__PURE__ */ u.jsxs("section", { className: "panel private-form", children: [
    /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "ONLY FOR THE ADMINISTRATOR" }),
    /* @__PURE__ */ u.jsx("h2", { children: f ? "이 앱에 대해 비밀댓글 남기기" : "관리자에게 비밀 질문 보내기" }),
    /* @__PURE__ */ u.jsx("p", { children: "비밀 글은 홈페이지 관리자에게만 전달됩니다. 제출 후 일반 방문자 화면에서는 내용을 조회할 수 없습니다." }),
    /* @__PURE__ */ u.jsx("p", { className: "muted", children: "이메일은 관리자의 수동 답변 연락용으로 비공개 보관됩니다. 자동 이메일은 발송되지 않습니다." }),
    c.privateConfigured ? B ? /* @__PURE__ */ u.jsxs("div", { role: "status", className: "notice", children: [
      "접수되었습니다. 접수번호: ",
      /* @__PURE__ */ u.jsx("b", { children: B }),
      /* @__PURE__ */ u.jsx("p", { children: "이 번호로 글의 내용을 조회할 수는 없습니다." }),
      /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => {
        K(""), r(!1);
      }, children: "확인" })
    ] }) : d ? /* @__PURE__ */ u.jsxs("form", { onSubmit: Q, className: "editor-fields", children: [
      /* @__PURE__ */ u.jsxs("label", { children: [
        "닉네임 (선택)",
        /* @__PURE__ */ u.jsx("input", { maxLength: 60, value: v, onChange: ($) => E($.target.value) })
      ] }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        "답변 받을 이메일 (필수)",
        /* @__PURE__ */ u.jsx("input", { required: !0, type: "email", autoComplete: "email", maxLength: 254, value: j, onChange: ($) => O($.target.value) })
      ] }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        "비밀 글 제목",
        /* @__PURE__ */ u.jsx("input", { required: !0, maxLength: 150, value: A, onChange: ($) => g($.target.value) })
      ] }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        "비밀 글 내용",
        /* @__PURE__ */ u.jsx("textarea", { required: !0, maxLength: 5e3, rows: 7, value: G, onChange: ($) => U($.target.value) })
      ] }),
      X && /* @__PURE__ */ u.jsx("div", { role: "alert", className: "error-note", children: X }),
      /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
        /* @__PURE__ */ u.jsx("button", { className: "btn primary", disabled: c.busy, children: "비밀 글 접수" }),
        /* @__PURE__ */ u.jsx("button", { type: "button", className: "btn", disabled: c.busy, onClick: () => {
          (A || G || j) && !confirm("작성 중인 비밀 글을 취소할까요?") || (r(!1), O(""), g(""), U(""), E(""), T.current = crypto.randomUUID());
        }, children: "작성 취소" })
      ] })
    ] }) : /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => r(!0), children: "비밀 글 작성" }) : /* @__PURE__ */ u.jsx("p", { className: "notice", children: "비밀 질문 기능을 준비하고 있습니다." })
  ] });
}
var Zc = { exports: {} }, $n = {}, $c = { exports: {} }, Vc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hh;
function _p() {
  return hh || (hh = 1, (function(f) {
    function c(D, C) {
      var P = D.length;
      D.push(C);
      e: for (; 0 < P; ) {
        var ce = P - 1 >>> 1, pe = D[ce];
        if (0 < v(pe, C))
          D[ce] = C, D[P] = pe, P = ce;
        else break e;
      }
    }
    function d(D) {
      return D.length === 0 ? null : D[0];
    }
    function r(D) {
      if (D.length === 0) return null;
      var C = D[0], P = D.pop();
      if (P !== C) {
        D[0] = P;
        e: for (var ce = 0, pe = D.length, y = pe >>> 1; ce < y; ) {
          var m = 2 * (ce + 1) - 1, L = D[m], V = m + 1, W = D[V];
          if (0 > v(L, P))
            V < pe && 0 > v(W, L) ? (D[ce] = W, D[V] = P, ce = V) : (D[ce] = L, D[m] = P, ce = m);
          else if (V < pe && 0 > v(W, P))
            D[ce] = W, D[V] = P, ce = V;
          else break e;
        }
      }
      return C;
    }
    function v(D, C) {
      var P = D.sortIndex - C.sortIndex;
      return P !== 0 ? P : D.id - C.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      f.unstable_now = function() {
        return E.now();
      };
    } else {
      var j = Date, O = j.now();
      f.unstable_now = function() {
        return j.now() - O;
      };
    }
    var A = [], g = [], G = 1, U = null, X = 3, J = !1, B = !1, K = !1, T = !1, Q = typeof setTimeout == "function" ? setTimeout : null, $ = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
    function re(D) {
      for (var C = d(g); C !== null; ) {
        if (C.callback === null) r(g);
        else if (C.startTime <= D)
          r(g), C.sortIndex = C.expirationTime, c(A, C);
        else break;
        C = d(g);
      }
    }
    function Ke(D) {
      if (K = !1, re(D), !B)
        if (d(A) !== null)
          B = !0, be || (be = !0, Ge());
        else {
          var C = d(g);
          C !== null && ut(Ke, C.startTime - D);
        }
    }
    var be = !1, ae = -1, De = 5, Be = -1;
    function Ye() {
      return T ? !0 : !(f.unstable_now() - Be < De);
    }
    function it() {
      if (T = !1, be) {
        var D = f.unstable_now();
        Be = D;
        var C = !0;
        try {
          e: {
            B = !1, K && (K = !1, $(ae), ae = -1), J = !0;
            var P = X;
            try {
              t: {
                for (re(D), U = d(A); U !== null && !(U.expirationTime > D && Ye()); ) {
                  var ce = U.callback;
                  if (typeof ce == "function") {
                    U.callback = null, X = U.priorityLevel;
                    var pe = ce(
                      U.expirationTime <= D
                    );
                    if (D = f.unstable_now(), typeof pe == "function") {
                      U.callback = pe, re(D), C = !0;
                      break t;
                    }
                    U === d(A) && r(A), re(D);
                  } else r(A);
                  U = d(A);
                }
                if (U !== null) C = !0;
                else {
                  var y = d(g);
                  y !== null && ut(
                    Ke,
                    y.startTime - D
                  ), C = !1;
                }
              }
              break e;
            } finally {
              U = null, X = P, J = !1;
            }
            C = void 0;
          }
        } finally {
          C ? Ge() : be = !1;
        }
      }
    }
    var Ge;
    if (typeof w == "function")
      Ge = function() {
        w(it);
      };
    else if (typeof MessageChannel < "u") {
      var ne = new MessageChannel(), Ie = ne.port2;
      ne.port1.onmessage = it, Ge = function() {
        Ie.postMessage(null);
      };
    } else
      Ge = function() {
        Q(it, 0);
      };
    function ut(D, C) {
      ae = Q(function() {
        D(f.unstable_now());
      }, C);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, f.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : De = 0 < D ? Math.floor(1e3 / D) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, f.unstable_next = function(D) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var C = 3;
          break;
        default:
          C = X;
      }
      var P = X;
      X = C;
      try {
        return D();
      } finally {
        X = P;
      }
    }, f.unstable_requestPaint = function() {
      T = !0;
    }, f.unstable_runWithPriority = function(D, C) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var P = X;
      X = D;
      try {
        return C();
      } finally {
        X = P;
      }
    }, f.unstable_scheduleCallback = function(D, C, P) {
      var ce = f.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? ce + P : ce) : P = ce, D) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return pe = P + pe, D = {
        id: G++,
        callback: C,
        priorityLevel: D,
        startTime: P,
        expirationTime: pe,
        sortIndex: -1
      }, P > ce ? (D.sortIndex = P, c(g, D), d(A) === null && D === d(g) && (K ? ($(ae), ae = -1) : K = !0, ut(Ke, P - ce))) : (D.sortIndex = pe, c(A, D), B || J || (B = !0, be || (be = !0, Ge()))), D;
    }, f.unstable_shouldYield = Ye, f.unstable_wrapCallback = function(D) {
      var C = X;
      return function() {
        var P = X;
        X = C;
        try {
          return D.apply(this, arguments);
        } finally {
          X = P;
        }
      };
    };
  })(Vc)), Vc;
}
var mh;
function Ap() {
  return mh || (mh = 1, $c.exports = _p()), $c.exports;
}
var Kc = { exports: {} }, st = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vh;
function Tp() {
  if (vh) return st;
  vh = 1;
  var f = Fc();
  function c(A) {
    var g = "https://react.dev/errors/" + A;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var G = 2; G < arguments.length; G++)
        g += "&args[]=" + encodeURIComponent(arguments[G]);
    }
    return "Minified React error #" + A + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var r = {
    d: {
      f: d,
      r: function() {
        throw Error(c(522));
      },
      D: d,
      C: d,
      L: d,
      m: d,
      X: d,
      S: d,
      M: d
    },
    p: 0,
    findDOMNode: null
  }, v = Symbol.for("react.portal");
  function E(A, g, G) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: v,
      key: U == null ? null : "" + U,
      children: A,
      containerInfo: g,
      implementation: G
    };
  }
  var j = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function O(A, g) {
    if (A === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, st.createPortal = function(A, g) {
    var G = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(c(299));
    return E(A, g, null, G);
  }, st.flushSync = function(A) {
    var g = j.T, G = r.p;
    try {
      if (j.T = null, r.p = 2, A) return A();
    } finally {
      j.T = g, r.p = G, r.d.f();
    }
  }, st.preconnect = function(A, g) {
    typeof A == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, r.d.C(A, g));
  }, st.prefetchDNS = function(A) {
    typeof A == "string" && r.d.D(A);
  }, st.preinit = function(A, g) {
    if (typeof A == "string" && g && typeof g.as == "string") {
      var G = g.as, U = O(G, g.crossOrigin), X = typeof g.integrity == "string" ? g.integrity : void 0, J = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      G === "style" ? r.d.S(
        A,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: U,
          integrity: X,
          fetchPriority: J
        }
      ) : G === "script" && r.d.X(A, {
        crossOrigin: U,
        integrity: X,
        fetchPriority: J,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, st.preinitModule = function(A, g) {
    if (typeof A == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var G = O(
            g.as,
            g.crossOrigin
          );
          r.d.M(A, {
            crossOrigin: G,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && r.d.M(A);
  }, st.preload = function(A, g) {
    if (typeof A == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var G = g.as, U = O(G, g.crossOrigin);
      r.d.L(A, G, {
        crossOrigin: U,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, st.preloadModule = function(A, g) {
    if (typeof A == "string")
      if (g) {
        var G = O(g.as, g.crossOrigin);
        r.d.m(A, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: G,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else r.d.m(A);
  }, st.requestFormReset = function(A) {
    r.d.r(A);
  }, st.unstable_batchedUpdates = function(A, g) {
    return A(g);
  }, st.useFormState = function(A, g, G) {
    return j.H.useFormState(A, g, G);
  }, st.useFormStatus = function() {
    return j.H.useHostTransitionStatus();
  }, st.version = "19.2.0", st;
}
var ph;
function zp() {
  if (ph) return Kc.exports;
  ph = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (c) {
        console.error(c);
      }
  }
  return f(), Kc.exports = Tp(), Kc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gh;
function Cp() {
  if (gh) return $n;
  gh = 1;
  var f = Ap(), c = Fc(), d = zp();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function v(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function E(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function j(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function O(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function A(e) {
    if (E(e) !== e)
      throw Error(r(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = E(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return A(n), e;
          if (i === a) return A(n), t;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) l = n, a = i;
      else {
        for (var s = !1, o = n.child; o; ) {
          if (o === l) {
            s = !0, l = n, a = i;
            break;
          }
          if (o === a) {
            s = !0, a = n, l = i;
            break;
          }
          o = o.sibling;
        }
        if (!s) {
          for (o = i.child; o; ) {
            if (o === l) {
              s = !0, l = i, a = n;
              break;
            }
            if (o === a) {
              s = !0, a = i, l = n;
              break;
            }
            o = o.sibling;
          }
          if (!s) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? e : t;
  }
  function G(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = G(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var U = Object.assign, X = Symbol.for("react.element"), J = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), w = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), Ke = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), Be = Symbol.for("react.activity"), Ye = Symbol.for("react.memo_cache_sentinel"), it = Symbol.iterator;
  function Ge(e) {
    return e === null || typeof e != "object" ? null : (e = it && e[it] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ne = Symbol.for("react.client.reference");
  function Ie(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ne ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case K:
        return "Fragment";
      case Q:
        return "Profiler";
      case T:
        return "StrictMode";
      case Ke:
        return "Suspense";
      case be:
        return "SuspenseList";
      case Be:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case B:
          return "Portal";
        case w:
          return e.displayName || "Context";
        case $:
          return (e._context.displayName || "Context") + ".Consumer";
        case re:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ae:
          return t = e.displayName || null, t !== null ? t : Ie(e.type) || "Memo";
        case De:
          t = e._payload, e = e._init;
          try {
            return Ie(e(t));
          } catch {
          }
      }
    return null;
  }
  var ut = Array.isArray, D = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ce = [], pe = -1;
  function y(e) {
    return { current: e };
  }
  function m(e) {
    0 > pe || (e.current = ce[pe], ce[pe] = null, pe--);
  }
  function L(e, t) {
    pe++, ce[pe] = e.current, e.current = t;
  }
  var V = y(null), W = y(null), te = y(null), fe = y(null);
  function Pe(e, t) {
    switch (L(te, t), L(W, e), L(V, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Td(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Td(t), e = zd(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    m(V), L(V, e);
  }
  function He() {
    m(V), m(W), m(te);
  }
  function h(e) {
    e.memoizedState !== null && L(fe, e);
    var t = V.current, l = zd(t, e.type);
    t !== l && (L(W, e), L(V, l));
  }
  function x(e) {
    W.current === e && (m(V), m(W)), fe.current === e && (m(fe), Gn._currentValue = P);
  }
  var Y, I;
  function Te(e) {
    if (Y === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Y = t && t[1] || "", I = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Y + e + I;
  }
  var ol = !1;
  function dl(e, t) {
    if (!e || ol) return "";
    ol = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var q = function() {
                throw Error();
              };
              if (Object.defineProperty(q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(q, []);
                } catch (M) {
                  var z = M;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (M) {
                  z = M;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                z = M;
              }
              (q = e()) && typeof q.catch == "function" && q.catch(function() {
              });
            }
          } catch (M) {
            if (M && z && typeof M.stack == "string")
              return [M.stack, z.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = a.DetermineComponentFrameRoot(), s = i[0], o = i[1];
      if (s && o) {
        var p = s.split(`
`), _ = o.split(`
`);
        for (n = a = 0; a < p.length && !p[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < _.length && !_[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === p.length || n === _.length)
          for (a = p.length - 1, n = _.length - 1; 1 <= a && 0 <= n && p[a] !== _[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (p[a] !== _[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || p[a] !== _[n]) {
                  var H = `
` + p[a].replace(" at new ", " at ");
                  return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ol = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Te(l) : "";
  }
  function wh(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Te(e.type);
      case 16:
        return Te("Lazy");
      case 13:
        return e.child !== t && t !== null ? Te("Suspense Fallback") : Te("Suspense");
      case 19:
        return Te("SuspenseList");
      case 0:
      case 15:
        return dl(e.type, !1);
      case 11:
        return dl(e.type.render, !1);
      case 1:
        return dl(e.type, !0);
      case 31:
        return Te("Activity");
      default:
        return "";
    }
  }
  function lf(e) {
    try {
      var t = "", l = null;
      do
        t += wh(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Au = Object.prototype.hasOwnProperty, Tu = f.unstable_scheduleCallback, zu = f.unstable_cancelCallback, Zh = f.unstable_shouldYield, $h = f.unstable_requestPaint, bt = f.unstable_now, Vh = f.unstable_getCurrentPriorityLevel, af = f.unstable_ImmediatePriority, nf = f.unstable_UserBlockingPriority, ei = f.unstable_NormalPriority, Kh = f.unstable_LowPriority, uf = f.unstable_IdlePriority, Jh = f.log, kh = f.unstable_setDisableYieldValue, Wa = null, xt = null;
  function hl(e) {
    if (typeof Jh == "function" && kh(e), xt && typeof xt.setStrictMode == "function")
      try {
        xt.setStrictMode(Wa, e);
      } catch {
      }
  }
  var jt = Math.clz32 ? Math.clz32 : Ih, Wh = Math.log, Fh = Math.LN2;
  function Ih(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Wh(e) / Fh | 0) | 0;
  }
  var ti = 256, li = 262144, ai = 4194304;
  function Ll(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ni(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, i = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var o = a & 134217727;
    return o !== 0 ? (a = o & ~i, a !== 0 ? n = Ll(a) : (s &= o, s !== 0 ? n = Ll(s) : l || (l = o & ~e, l !== 0 && (n = Ll(l))))) : (o = a & ~i, o !== 0 ? n = Ll(o) : s !== 0 ? n = Ll(s) : l || (l = a & ~e, l !== 0 && (n = Ll(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function Fa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ph(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function sf() {
    var e = ai;
    return ai <<= 1, (ai & 62914560) === 0 && (ai = 4194304), e;
  }
  function Cu(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Ia(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function em(e, t, l, a, n, i) {
    var s = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var o = e.entanglements, p = e.expirationTimes, _ = e.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var H = 31 - jt(l), q = 1 << H;
      o[H] = 0, p[H] = -1;
      var z = _[H];
      if (z !== null)
        for (_[H] = null, H = 0; H < z.length; H++) {
          var M = z[H];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~q;
    }
    a !== 0 && cf(e, a, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
  }
  function cf(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - jt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function ff(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - jt(l), n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n;
    }
  }
  function rf(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Ou(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Ou(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Mu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function of() {
    var e = C.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Fd(e.type));
  }
  function df(e, t) {
    var l = C.p;
    try {
      return C.p = e, t();
    } finally {
      C.p = l;
    }
  }
  var ml = Math.random().toString(36).slice(2), et = "__reactFiber$" + ml, rt = "__reactProps$" + ml, sa = "__reactContainer$" + ml, Uu = "__reactEvents$" + ml, tm = "__reactListeners$" + ml, lm = "__reactHandles$" + ml, hf = "__reactResources$" + ml, Pa = "__reactMarker$" + ml;
  function Du(e) {
    delete e[et], delete e[rt], delete e[Uu], delete e[tm], delete e[lm];
  }
  function ca(e) {
    var t = e[et];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[sa] || l[et]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Rd(e); e !== null; ) {
            if (l = e[et]) return l;
            e = Rd(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function fa(e) {
    if (e = e[et] || e[sa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function en(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function ra(e) {
    var t = e[hf];
    return t || (t = e[hf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ke(e) {
    e[Pa] = !0;
  }
  var mf = /* @__PURE__ */ new Set(), vf = {};
  function Ql(e, t) {
    oa(e, t), oa(e + "Capture", t);
  }
  function oa(e, t) {
    for (vf[e] = t, e = 0; e < t.length; e++)
      mf.add(t[e]);
  }
  var am = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), pf = {}, gf = {};
  function nm(e) {
    return Au.call(gf, e) ? !0 : Au.call(pf, e) ? !1 : am.test(e) ? gf[e] = !0 : (pf[e] = !0, !1);
  }
  function ii(e, t, l) {
    if (nm(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function ui(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Kt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function Ct(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function yf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function im(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, i = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(s) {
          l = "" + s, i.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(s) {
          l = "" + s;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Hu(e) {
    if (!e._valueTracker) {
      var t = yf(e) ? "checked" : "value";
      e._valueTracker = im(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function bf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = yf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function si(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var um = /[\n"\\]/g;
  function Ot(e) {
    return e.replace(
      um,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ru(e, t, l, a, n, i, s, o) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ct(t)) : e.value !== "" + Ct(t) && (e.value = "" + Ct(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? qu(e, s, Ct(t)) : l != null ? qu(e, s, Ct(l)) : a != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + Ct(o) : e.removeAttribute("name");
  }
  function xf(e, t, l, a, n, i, s, o) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Hu(e);
        return;
      }
      l = l != null ? "" + Ct(l) : "", t = t != null ? "" + Ct(t) : l, o || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = o ? e.checked : !!a, e.defaultChecked = !!a, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Hu(e);
  }
  function qu(e, t, l) {
    t === "number" && si(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function da(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < l.length; n++)
        t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Ct(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          e[n].selected = !0, a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function jf(e, t, l) {
    if (t != null && (t = "" + Ct(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Ct(l) : "";
  }
  function Sf(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (ut(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = Ct(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), Hu(e);
  }
  function ha(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var sm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ef(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || sm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Nf(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && l[n] !== a && Ef(e, n, a);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && Ef(e, i, t[i]);
  }
  function Bu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var cm = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), fm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ci(e) {
    return fm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Jt() {
  }
  var Yu = null;
  function Gu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ma = null, va = null;
  function _f(e) {
    var t = fa(e);
    if (t && (e = t.stateNode)) {
      var l = e[rt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ru(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Ot(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[rt] || null;
                if (!n) throw Error(r(90));
                Ru(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              a = l[t], a.form === e.form && bf(a);
          }
          break e;
        case "textarea":
          jf(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && da(e, !!l.multiple, t, !1);
      }
    }
  }
  var Lu = !1;
  function Af(e, t, l) {
    if (Lu) return e(t, l);
    Lu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Lu = !1, (ma !== null || va !== null) && (ki(), ma && (t = ma, e = va, va = ma = null, _f(t), e)))
        for (t = 0; t < e.length; t++) _f(e[t]);
    }
  }
  function tn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[rt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        r(231, t, typeof l)
      );
    return l;
  }
  var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qu = !1;
  if (kt)
    try {
      var ln = {};
      Object.defineProperty(ln, "passive", {
        get: function() {
          Qu = !0;
        }
      }), window.addEventListener("test", ln, ln), window.removeEventListener("test", ln, ln);
    } catch {
      Qu = !1;
    }
  var vl = null, Xu = null, fi = null;
  function Tf() {
    if (fi) return fi;
    var e, t = Xu, l = t.length, a, n = "value" in vl ? vl.value : vl.textContent, i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++) ;
    var s = l - e;
    for (a = 1; a <= s && t[l - a] === n[i - a]; a++) ;
    return fi = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function ri(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function oi() {
    return !0;
  }
  function zf() {
    return !1;
  }
  function ot(e) {
    function t(l, a, n, i, s) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var o in e)
        e.hasOwnProperty(o) && (l = e[o], this[o] = l ? l(i) : i[o]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? oi : zf, this.isPropagationStopped = zf, this;
    }
    return U(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = oi);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = oi);
      },
      persist: function() {
      },
      isPersistent: oi
    }), t;
  }
  var Xl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, di = ot(Xl), an = U({}, Xl, { view: 0, detail: 0 }), rm = ot(an), wu, Zu, nn, hi = U({}, an, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Vu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== nn && (nn && e.type === "mousemove" ? (wu = e.screenX - nn.screenX, Zu = e.screenY - nn.screenY) : Zu = wu = 0, nn = e), wu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Zu;
    }
  }), Cf = ot(hi), om = U({}, hi, { dataTransfer: 0 }), dm = ot(om), hm = U({}, an, { relatedTarget: 0 }), $u = ot(hm), mm = U({}, Xl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vm = ot(mm), pm = U({}, Xl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), gm = ot(pm), ym = U({}, Xl, { data: 0 }), Of = ot(ym), bm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, xm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, jm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Sm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = jm[e]) ? !!t[e] : !1;
  }
  function Vu() {
    return Sm;
  }
  var Em = U({}, an, {
    key: function(e) {
      if (e.key) {
        var t = bm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ri(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vu,
    charCode: function(e) {
      return e.type === "keypress" ? ri(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ri(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Nm = ot(Em), _m = U({}, hi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Mf = ot(_m), Am = U({}, an, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vu
  }), Tm = ot(Am), zm = U({}, Xl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Cm = ot(zm), Om = U({}, hi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mm = ot(Om), Um = U({}, Xl, {
    newState: 0,
    oldState: 0
  }), Dm = ot(Um), Hm = [9, 13, 27, 32], Ku = kt && "CompositionEvent" in window, un = null;
  kt && "documentMode" in document && (un = document.documentMode);
  var Rm = kt && "TextEvent" in window && !un, Uf = kt && (!Ku || un && 8 < un && 11 >= un), Df = " ", Hf = !1;
  function Rf(e, t) {
    switch (e) {
      case "keyup":
        return Hm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pa = !1;
  function qm(e, t) {
    switch (e) {
      case "compositionend":
        return qf(t);
      case "keypress":
        return t.which !== 32 ? null : (Hf = !0, Df);
      case "textInput":
        return e = t.data, e === Df && Hf ? null : e;
      default:
        return null;
    }
  }
  function Bm(e, t) {
    if (pa)
      return e === "compositionend" || !Ku && Rf(e, t) ? (e = Tf(), fi = Xu = vl = null, pa = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Uf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ym = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Bf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ym[e.type] : t === "textarea";
  }
  function Yf(e, t, l, a) {
    ma ? va ? va.push(a) : va = [a] : ma = a, t = lu(t, "onChange"), 0 < t.length && (l = new di(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var sn = null, cn = null;
  function Gm(e) {
    jd(e, 0);
  }
  function mi(e) {
    var t = en(e);
    if (bf(t)) return e;
  }
  function Gf(e, t) {
    if (e === "change") return t;
  }
  var Lf = !1;
  if (kt) {
    var Ju;
    if (kt) {
      var ku = "oninput" in document;
      if (!ku) {
        var Qf = document.createElement("div");
        Qf.setAttribute("oninput", "return;"), ku = typeof Qf.oninput == "function";
      }
      Ju = ku;
    } else Ju = !1;
    Lf = Ju && (!document.documentMode || 9 < document.documentMode);
  }
  function Xf() {
    sn && (sn.detachEvent("onpropertychange", wf), cn = sn = null);
  }
  function wf(e) {
    if (e.propertyName === "value" && mi(cn)) {
      var t = [];
      Yf(
        t,
        cn,
        e,
        Gu(e)
      ), Af(Gm, t);
    }
  }
  function Lm(e, t, l) {
    e === "focusin" ? (Xf(), sn = t, cn = l, sn.attachEvent("onpropertychange", wf)) : e === "focusout" && Xf();
  }
  function Qm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return mi(cn);
  }
  function Xm(e, t) {
    if (e === "click") return mi(t);
  }
  function wm(e, t) {
    if (e === "input" || e === "change")
      return mi(t);
  }
  function Zm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var St = typeof Object.is == "function" ? Object.is : Zm;
  function fn(e, t) {
    if (St(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Au.call(t, n) || !St(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function Zf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $f(e, t) {
    var l = Zf(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = e + l.textContent.length, e <= t && a >= t)
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Zf(l);
    }
  }
  function Vf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Kf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = si(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = si(e.document);
    }
    return t;
  }
  function Wu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var $m = kt && "documentMode" in document && 11 >= document.documentMode, ga = null, Fu = null, rn = null, Iu = !1;
  function Jf(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Iu || ga == null || ga !== si(a) || (a = ga, "selectionStart" in a && Wu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), rn && fn(rn, a) || (rn = a, a = lu(Fu, "onSelect"), 0 < a.length && (t = new di(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = ga)));
  }
  function wl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var ya = {
    animationend: wl("Animation", "AnimationEnd"),
    animationiteration: wl("Animation", "AnimationIteration"),
    animationstart: wl("Animation", "AnimationStart"),
    transitionrun: wl("Transition", "TransitionRun"),
    transitionstart: wl("Transition", "TransitionStart"),
    transitioncancel: wl("Transition", "TransitionCancel"),
    transitionend: wl("Transition", "TransitionEnd")
  }, Pu = {}, kf = {};
  kt && (kf = document.createElement("div").style, "AnimationEvent" in window || (delete ya.animationend.animation, delete ya.animationiteration.animation, delete ya.animationstart.animation), "TransitionEvent" in window || delete ya.transitionend.transition);
  function Zl(e) {
    if (Pu[e]) return Pu[e];
    if (!ya[e]) return e;
    var t = ya[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in kf)
        return Pu[e] = t[l];
    return e;
  }
  var Wf = Zl("animationend"), Ff = Zl("animationiteration"), If = Zl("animationstart"), Vm = Zl("transitionrun"), Km = Zl("transitionstart"), Jm = Zl("transitioncancel"), Pf = Zl("transitionend"), er = /* @__PURE__ */ new Map(), es = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  es.push("scrollEnd");
  function Gt(e, t) {
    er.set(e, t), Ql(t, [e]);
  }
  var vi = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Mt = [], ba = 0, ts = 0;
  function pi() {
    for (var e = ba, t = ts = ba = 0; t < e; ) {
      var l = Mt[t];
      Mt[t++] = null;
      var a = Mt[t];
      Mt[t++] = null;
      var n = Mt[t];
      Mt[t++] = null;
      var i = Mt[t];
      if (Mt[t++] = null, a !== null && n !== null) {
        var s = a.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), a.pending = n;
      }
      i !== 0 && tr(l, n, i);
    }
  }
  function gi(e, t, l, a) {
    Mt[ba++] = e, Mt[ba++] = t, Mt[ba++] = l, Mt[ba++] = a, ts |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function ls(e, t, l, a) {
    return gi(e, t, l, a), yi(e);
  }
  function $l(e, t) {
    return gi(e, null, null, t), yi(e);
  }
  function tr(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null; )
      i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - jt(l), e = i.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), i) : null;
  }
  function yi(e) {
    if (50 < Un)
      throw Un = 0, oc = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var xa = {};
  function km(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Et(e, t, l, a) {
    return new km(e, t, l, a);
  }
  function as(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Wt(e, t) {
    var l = e.alternate;
    return l === null ? (l = Et(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function lr(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function bi(e, t, l, a, n, i) {
    var s = 0;
    if (a = e, typeof e == "function") as(e) && (s = 1);
    else if (typeof e == "string")
      s = ep(
        e,
        l,
        V.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Be:
          return e = Et(31, l, t, n), e.elementType = Be, e.lanes = i, e;
        case K:
          return Vl(l.children, n, i, t);
        case T:
          s = 8, n |= 24;
          break;
        case Q:
          return e = Et(12, l, t, n | 2), e.elementType = Q, e.lanes = i, e;
        case Ke:
          return e = Et(13, l, t, n), e.elementType = Ke, e.lanes = i, e;
        case be:
          return e = Et(19, l, t, n), e.elementType = be, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case w:
                s = 10;
                break e;
              case $:
                s = 9;
                break e;
              case re:
                s = 11;
                break e;
              case ae:
                s = 14;
                break e;
              case De:
                s = 16, a = null;
                break e;
            }
          s = 29, l = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Et(s, l, t, n), t.elementType = e, t.type = a, t.lanes = i, t;
  }
  function Vl(e, t, l, a) {
    return e = Et(7, e, a, t), e.lanes = l, e;
  }
  function ns(e, t, l) {
    return e = Et(6, e, null, t), e.lanes = l, e;
  }
  function ar(e) {
    var t = Et(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function is(e, t, l) {
    return t = Et(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var nr = /* @__PURE__ */ new WeakMap();
  function Ut(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = nr.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: lf(t)
      }, nr.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: lf(t)
    };
  }
  var ja = [], Sa = 0, xi = null, on = 0, Dt = [], Ht = 0, pl = null, Xt = 1, wt = "";
  function Ft(e, t) {
    ja[Sa++] = on, ja[Sa++] = xi, xi = e, on = t;
  }
  function ir(e, t, l) {
    Dt[Ht++] = Xt, Dt[Ht++] = wt, Dt[Ht++] = pl, pl = e;
    var a = Xt;
    e = wt;
    var n = 32 - jt(a) - 1;
    a &= ~(1 << n), l += 1;
    var i = 32 - jt(t) + n;
    if (30 < i) {
      var s = n - n % 5;
      i = (a & (1 << s) - 1).toString(32), a >>= s, n -= s, Xt = 1 << 32 - jt(t) + n | l << n | a, wt = i + e;
    } else
      Xt = 1 << i | l << n | a, wt = e;
  }
  function us(e) {
    e.return !== null && (Ft(e, 1), ir(e, 1, 0));
  }
  function ss(e) {
    for (; e === xi; )
      xi = ja[--Sa], ja[Sa] = null, on = ja[--Sa], ja[Sa] = null;
    for (; e === pl; )
      pl = Dt[--Ht], Dt[Ht] = null, wt = Dt[--Ht], Dt[Ht] = null, Xt = Dt[--Ht], Dt[Ht] = null;
  }
  function ur(e, t) {
    Dt[Ht++] = Xt, Dt[Ht++] = wt, Dt[Ht++] = pl, Xt = t.id, wt = t.overflow, pl = e;
  }
  var tt = null, Oe = null, ve = !1, gl = null, Rt = !1, cs = Error(r(519));
  function yl(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw dn(Ut(t, e)), cs;
  }
  function sr(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[et] = e, t[rt] = a, l) {
      case "dialog":
        de("cancel", t), de("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        de("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Hn.length; l++)
          de(Hn[l], t);
        break;
      case "source":
        de("error", t);
        break;
      case "img":
      case "image":
      case "link":
        de("error", t), de("load", t);
        break;
      case "details":
        de("toggle", t);
        break;
      case "input":
        de("invalid", t), xf(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), Sf(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || _d(t.textContent, l) ? (a.popover != null && (de("beforetoggle", t), de("toggle", t)), a.onScroll != null && de("scroll", t), a.onScrollEnd != null && de("scrollend", t), a.onClick != null && (t.onclick = Jt), t = !0) : t = !1, t || yl(e, !0);
  }
  function cr(e) {
    for (tt = e.return; tt; )
      switch (tt.tag) {
        case 5:
        case 31:
        case 13:
          Rt = !1;
          return;
        case 27:
        case 3:
          Rt = !0;
          return;
        default:
          tt = tt.return;
      }
  }
  function Ea(e) {
    if (e !== tt) return !1;
    if (!ve) return cr(e), ve = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Ac(e.type, e.memoizedProps)), l = !l), l && Oe && yl(e), cr(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Oe = Hd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Oe = Hd(e);
    } else
      t === 27 ? (t = Oe, Ul(e.type) ? (e = Mc, Mc = null, Oe = e) : Oe = t) : Oe = tt ? Bt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Kl() {
    Oe = tt = null, ve = !1;
  }
  function fs() {
    var e = gl;
    return e !== null && (vt === null ? vt = e : vt.push.apply(
      vt,
      e
    ), gl = null), e;
  }
  function dn(e) {
    gl === null ? gl = [e] : gl.push(e);
  }
  var rs = y(null), Jl = null, It = null;
  function bl(e, t, l) {
    L(rs, t._currentValue), t._currentValue = l;
  }
  function Pt(e) {
    e._currentValue = rs.current, m(rs);
  }
  function os(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function ds(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var s = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var o = i;
          i = n;
          for (var p = 0; p < t.length; p++)
            if (o.context === t[p]) {
              i.lanes |= l, o = i.alternate, o !== null && (o.lanes |= l), os(
                i.return,
                l,
                e
              ), a || (s = null);
              break e;
            }
          i = o.next;
        }
      } else if (n.tag === 18) {
        if (s = n.return, s === null) throw Error(r(341));
        s.lanes |= l, i = s.alternate, i !== null && (i.lanes |= l), os(s, l, e), s = null;
      } else s = n.child;
      if (s !== null) s.return = n;
      else
        for (s = n; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (n = s.sibling, n !== null) {
            n.return = s.return, s = n;
            break;
          }
          s = s.return;
        }
      n = s;
    }
  }
  function Na(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var s = n.alternate;
        if (s === null) throw Error(r(387));
        if (s = s.memoizedProps, s !== null) {
          var o = n.type;
          St(n.pendingProps.value, s.value) || (e !== null ? e.push(o) : e = [o]);
        }
      } else if (n === fe.current) {
        if (s = n.alternate, s === null) throw Error(r(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Gn) : e = [Gn]);
      }
      n = n.return;
    }
    e !== null && ds(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function ji(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!St(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function kl(e) {
    Jl = e, It = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function lt(e) {
    return fr(Jl, e);
  }
  function Si(e, t) {
    return Jl === null && kl(e), fr(e, t);
  }
  function fr(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, It === null) {
      if (e === null) throw Error(r(308));
      It = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else It = It.next = t;
    return l;
  }
  var Wm = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, Fm = f.unstable_scheduleCallback, Im = f.unstable_NormalPriority, Xe = {
    $$typeof: w,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function hs() {
    return {
      controller: new Wm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hn(e) {
    e.refCount--, e.refCount === 0 && Fm(Im, function() {
      e.controller.abort();
    });
  }
  var mn = null, ms = 0, _a = 0, Aa = null;
  function Pm(e, t) {
    if (mn === null) {
      var l = mn = [];
      ms = 0, _a = gc(), Aa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return ms++, t.then(rr, rr), t;
  }
  function rr() {
    if (--ms === 0 && mn !== null) {
      Aa !== null && (Aa.status = "fulfilled");
      var e = mn;
      mn = null, _a = 0, Aa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ev(e, t) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < l.length; n++) (0, l[n])(t);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var or = D.S;
  D.S = function(e, t) {
    ko = bt(), typeof t == "object" && t !== null && typeof t.then == "function" && Pm(e, t), or !== null && or(e, t);
  };
  var Wl = y(null);
  function vs() {
    var e = Wl.current;
    return e !== null ? e : ze.pooledCache;
  }
  function Ei(e, t) {
    t === null ? L(Wl, Wl.current) : L(Wl, t.pool);
  }
  function dr() {
    var e = vs();
    return e === null ? null : { parent: Xe._currentValue, pool: e };
  }
  var Ta = Error(r(460)), ps = Error(r(474)), Ni = Error(r(542)), _i = { then: function() {
  } };
  function hr(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function mr(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Jt, Jt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, pr(e), e;
      default:
        if (typeof t.status == "string") t.then(Jt, Jt);
        else {
          if (e = ze, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, pr(e), e;
        }
        throw Il = t, Ta;
    }
  }
  function Fl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Il = l, Ta) : l;
    }
  }
  var Il = null;
  function vr() {
    if (Il === null) throw Error(r(459));
    var e = Il;
    return Il = null, e;
  }
  function pr(e) {
    if (e === Ta || e === Ni)
      throw Error(r(483));
  }
  var za = null, vn = 0;
  function Ai(e) {
    var t = vn;
    return vn += 1, za === null && (za = []), mr(za, e, t);
  }
  function pn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ti(e, t) {
    throw t.$$typeof === X ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function gr(e) {
    function t(S, b) {
      if (e) {
        var N = S.deletions;
        N === null ? (S.deletions = [b], S.flags |= 16) : N.push(b);
      }
    }
    function l(S, b) {
      if (!e) return null;
      for (; b !== null; )
        t(S, b), b = b.sibling;
      return null;
    }
    function a(S) {
      for (var b = /* @__PURE__ */ new Map(); S !== null; )
        S.key !== null ? b.set(S.key, S) : b.set(S.index, S), S = S.sibling;
      return b;
    }
    function n(S, b) {
      return S = Wt(S, b), S.index = 0, S.sibling = null, S;
    }
    function i(S, b, N) {
      return S.index = N, e ? (N = S.alternate, N !== null ? (N = N.index, N < b ? (S.flags |= 67108866, b) : N) : (S.flags |= 67108866, b)) : (S.flags |= 1048576, b);
    }
    function s(S) {
      return e && S.alternate === null && (S.flags |= 67108866), S;
    }
    function o(S, b, N, R) {
      return b === null || b.tag !== 6 ? (b = ns(N, S.mode, R), b.return = S, b) : (b = n(b, N), b.return = S, b);
    }
    function p(S, b, N, R) {
      var ee = N.type;
      return ee === K ? H(
        S,
        b,
        N.props.children,
        R,
        N.key
      ) : b !== null && (b.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === De && Fl(ee) === b.type) ? (b = n(b, N.props), pn(b, N), b.return = S, b) : (b = bi(
        N.type,
        N.key,
        N.props,
        null,
        S.mode,
        R
      ), pn(b, N), b.return = S, b);
    }
    function _(S, b, N, R) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== N.containerInfo || b.stateNode.implementation !== N.implementation ? (b = is(N, S.mode, R), b.return = S, b) : (b = n(b, N.children || []), b.return = S, b);
    }
    function H(S, b, N, R, ee) {
      return b === null || b.tag !== 7 ? (b = Vl(
        N,
        S.mode,
        R,
        ee
      ), b.return = S, b) : (b = n(b, N), b.return = S, b);
    }
    function q(S, b, N) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return b = ns(
          "" + b,
          S.mode,
          N
        ), b.return = S, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case J:
            return N = bi(
              b.type,
              b.key,
              b.props,
              null,
              S.mode,
              N
            ), pn(N, b), N.return = S, N;
          case B:
            return b = is(
              b,
              S.mode,
              N
            ), b.return = S, b;
          case De:
            return b = Fl(b), q(S, b, N);
        }
        if (ut(b) || Ge(b))
          return b = Vl(
            b,
            S.mode,
            N,
            null
          ), b.return = S, b;
        if (typeof b.then == "function")
          return q(S, Ai(b), N);
        if (b.$$typeof === w)
          return q(
            S,
            Si(S, b),
            N
          );
        Ti(S, b);
      }
      return null;
    }
    function z(S, b, N, R) {
      var ee = b !== null ? b.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return ee !== null ? null : o(S, b, "" + N, R);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case J:
            return N.key === ee ? p(S, b, N, R) : null;
          case B:
            return N.key === ee ? _(S, b, N, R) : null;
          case De:
            return N = Fl(N), z(S, b, N, R);
        }
        if (ut(N) || Ge(N))
          return ee !== null ? null : H(S, b, N, R, null);
        if (typeof N.then == "function")
          return z(
            S,
            b,
            Ai(N),
            R
          );
        if (N.$$typeof === w)
          return z(
            S,
            b,
            Si(S, N),
            R
          );
        Ti(S, N);
      }
      return null;
    }
    function M(S, b, N, R, ee) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return S = S.get(N) || null, o(b, S, "" + R, ee);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case J:
            return S = S.get(
              R.key === null ? N : R.key
            ) || null, p(b, S, R, ee);
          case B:
            return S = S.get(
              R.key === null ? N : R.key
            ) || null, _(b, S, R, ee);
          case De:
            return R = Fl(R), M(
              S,
              b,
              N,
              R,
              ee
            );
        }
        if (ut(R) || Ge(R))
          return S = S.get(N) || null, H(b, S, R, ee, null);
        if (typeof R.then == "function")
          return M(
            S,
            b,
            N,
            Ai(R),
            ee
          );
        if (R.$$typeof === w)
          return M(
            S,
            b,
            N,
            Si(b, R),
            ee
          );
        Ti(b, R);
      }
      return null;
    }
    function k(S, b, N, R) {
      for (var ee = null, ge = null, F = b, se = b = 0, me = null; F !== null && se < N.length; se++) {
        F.index > se ? (me = F, F = null) : me = F.sibling;
        var ye = z(
          S,
          F,
          N[se],
          R
        );
        if (ye === null) {
          F === null && (F = me);
          break;
        }
        e && F && ye.alternate === null && t(S, F), b = i(ye, b, se), ge === null ? ee = ye : ge.sibling = ye, ge = ye, F = me;
      }
      if (se === N.length)
        return l(S, F), ve && Ft(S, se), ee;
      if (F === null) {
        for (; se < N.length; se++)
          F = q(S, N[se], R), F !== null && (b = i(
            F,
            b,
            se
          ), ge === null ? ee = F : ge.sibling = F, ge = F);
        return ve && Ft(S, se), ee;
      }
      for (F = a(F); se < N.length; se++)
        me = M(
          F,
          S,
          se,
          N[se],
          R
        ), me !== null && (e && me.alternate !== null && F.delete(
          me.key === null ? se : me.key
        ), b = i(
          me,
          b,
          se
        ), ge === null ? ee = me : ge.sibling = me, ge = me);
      return e && F.forEach(function(Bl) {
        return t(S, Bl);
      }), ve && Ft(S, se), ee;
    }
    function le(S, b, N, R) {
      if (N == null) throw Error(r(151));
      for (var ee = null, ge = null, F = b, se = b = 0, me = null, ye = N.next(); F !== null && !ye.done; se++, ye = N.next()) {
        F.index > se ? (me = F, F = null) : me = F.sibling;
        var Bl = z(S, F, ye.value, R);
        if (Bl === null) {
          F === null && (F = me);
          break;
        }
        e && F && Bl.alternate === null && t(S, F), b = i(Bl, b, se), ge === null ? ee = Bl : ge.sibling = Bl, ge = Bl, F = me;
      }
      if (ye.done)
        return l(S, F), ve && Ft(S, se), ee;
      if (F === null) {
        for (; !ye.done; se++, ye = N.next())
          ye = q(S, ye.value, R), ye !== null && (b = i(ye, b, se), ge === null ? ee = ye : ge.sibling = ye, ge = ye);
        return ve && Ft(S, se), ee;
      }
      for (F = a(F); !ye.done; se++, ye = N.next())
        ye = M(F, S, se, ye.value, R), ye !== null && (e && ye.alternate !== null && F.delete(ye.key === null ? se : ye.key), b = i(ye, b, se), ge === null ? ee = ye : ge.sibling = ye, ge = ye);
      return e && F.forEach(function(op) {
        return t(S, op);
      }), ve && Ft(S, se), ee;
    }
    function Ae(S, b, N, R) {
      if (typeof N == "object" && N !== null && N.type === K && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case J:
            e: {
              for (var ee = N.key; b !== null; ) {
                if (b.key === ee) {
                  if (ee = N.type, ee === K) {
                    if (b.tag === 7) {
                      l(
                        S,
                        b.sibling
                      ), R = n(
                        b,
                        N.props.children
                      ), R.return = S, S = R;
                      break e;
                    }
                  } else if (b.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === De && Fl(ee) === b.type) {
                    l(
                      S,
                      b.sibling
                    ), R = n(b, N.props), pn(R, N), R.return = S, S = R;
                    break e;
                  }
                  l(S, b);
                  break;
                } else t(S, b);
                b = b.sibling;
              }
              N.type === K ? (R = Vl(
                N.props.children,
                S.mode,
                R,
                N.key
              ), R.return = S, S = R) : (R = bi(
                N.type,
                N.key,
                N.props,
                null,
                S.mode,
                R
              ), pn(R, N), R.return = S, S = R);
            }
            return s(S);
          case B:
            e: {
              for (ee = N.key; b !== null; ) {
                if (b.key === ee)
                  if (b.tag === 4 && b.stateNode.containerInfo === N.containerInfo && b.stateNode.implementation === N.implementation) {
                    l(
                      S,
                      b.sibling
                    ), R = n(b, N.children || []), R.return = S, S = R;
                    break e;
                  } else {
                    l(S, b);
                    break;
                  }
                else t(S, b);
                b = b.sibling;
              }
              R = is(N, S.mode, R), R.return = S, S = R;
            }
            return s(S);
          case De:
            return N = Fl(N), Ae(
              S,
              b,
              N,
              R
            );
        }
        if (ut(N))
          return k(
            S,
            b,
            N,
            R
          );
        if (Ge(N)) {
          if (ee = Ge(N), typeof ee != "function") throw Error(r(150));
          return N = ee.call(N), le(
            S,
            b,
            N,
            R
          );
        }
        if (typeof N.then == "function")
          return Ae(
            S,
            b,
            Ai(N),
            R
          );
        if (N.$$typeof === w)
          return Ae(
            S,
            b,
            Si(S, N),
            R
          );
        Ti(S, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, b !== null && b.tag === 6 ? (l(S, b.sibling), R = n(b, N), R.return = S, S = R) : (l(S, b), R = ns(N, S.mode, R), R.return = S, S = R), s(S)) : l(S, b);
    }
    return function(S, b, N, R) {
      try {
        vn = 0;
        var ee = Ae(
          S,
          b,
          N,
          R
        );
        return za = null, ee;
      } catch (F) {
        if (F === Ta || F === Ni) throw F;
        var ge = Et(29, F, null, S.mode);
        return ge.lanes = R, ge.return = S, ge;
      } finally {
      }
    };
  }
  var Pl = gr(!0), yr = gr(!1), xl = !1;
  function gs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ys(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function jl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Sl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (xe & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = yi(e), tr(e, null, l), t;
    }
    return gi(e, a, t, l), yi(e);
  }
  function gn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, ff(e, l);
    }
  }
  function bs(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var s = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = s : i = i.next = s, l = l.next;
        } while (l !== null);
        i === null ? n = i = t : i = i.next = t;
      } else n = i = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var xs = !1;
  function yn() {
    if (xs) {
      var e = Aa;
      if (e !== null) throw e;
    }
  }
  function bn(e, t, l, a) {
    xs = !1;
    var n = e.updateQueue;
    xl = !1;
    var i = n.firstBaseUpdate, s = n.lastBaseUpdate, o = n.shared.pending;
    if (o !== null) {
      n.shared.pending = null;
      var p = o, _ = p.next;
      p.next = null, s === null ? i = _ : s.next = _, s = p;
      var H = e.alternate;
      H !== null && (H = H.updateQueue, o = H.lastBaseUpdate, o !== s && (o === null ? H.firstBaseUpdate = _ : o.next = _, H.lastBaseUpdate = p));
    }
    if (i !== null) {
      var q = n.baseState;
      s = 0, H = _ = p = null, o = i;
      do {
        var z = o.lane & -536870913, M = z !== o.lane;
        if (M ? (he & z) === z : (a & z) === z) {
          z !== 0 && z === _a && (xs = !0), H !== null && (H = H.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          e: {
            var k = e, le = o;
            z = t;
            var Ae = l;
            switch (le.tag) {
              case 1:
                if (k = le.payload, typeof k == "function") {
                  q = k.call(Ae, q, z);
                  break e;
                }
                q = k;
                break e;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = le.payload, z = typeof k == "function" ? k.call(Ae, q, z) : k, z == null) break e;
                q = U({}, q, z);
                break e;
              case 2:
                xl = !0;
            }
          }
          z = o.callback, z !== null && (e.flags |= 64, M && (e.flags |= 8192), M = n.callbacks, M === null ? n.callbacks = [z] : M.push(z));
        } else
          M = {
            lane: z,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, H === null ? (_ = H = M, p = q) : H = H.next = M, s |= z;
        if (o = o.next, o === null) {
          if (o = n.shared.pending, o === null)
            break;
          M = o, o = M.next, M.next = null, n.lastBaseUpdate = M, n.shared.pending = null;
        }
      } while (!0);
      H === null && (p = q), n.baseState = p, n.firstBaseUpdate = _, n.lastBaseUpdate = H, i === null && (n.shared.lanes = 0), Tl |= s, e.lanes = s, e.memoizedState = q;
    }
  }
  function br(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function xr(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        br(l[e], t);
  }
  var Ca = y(null), zi = y(0);
  function jr(e, t) {
    e = cl, L(zi, e), L(Ca, t), cl = e | t.baseLanes;
  }
  function js() {
    L(zi, cl), L(Ca, Ca.current);
  }
  function Ss() {
    cl = zi.current, m(Ca), m(zi);
  }
  var Nt = y(null), qt = null;
  function El(e) {
    var t = e.alternate;
    L(Le, Le.current & 1), L(Nt, e), qt === null && (t === null || Ca.current !== null || t.memoizedState !== null) && (qt = e);
  }
  function Es(e) {
    L(Le, Le.current), L(Nt, e), qt === null && (qt = e);
  }
  function Sr(e) {
    e.tag === 22 ? (L(Le, Le.current), L(Nt, e), qt === null && (qt = e)) : Nl();
  }
  function Nl() {
    L(Le, Le.current), L(Nt, Nt.current);
  }
  function _t(e) {
    m(Nt), qt === e && (qt = null), m(Le);
  }
  var Le = y(0);
  function Ci(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Cc(l) || Oc(l)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var el = 0, ue = null, Ne = null, we = null, Oi = !1, Oa = !1, ea = !1, Mi = 0, xn = 0, Ma = null, tv = 0;
  function Re() {
    throw Error(r(321));
  }
  function Ns(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!St(e[l], t[l])) return !1;
    return !0;
  }
  function _s(e, t, l, a, n, i) {
    return el = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? io : Ls, ea = !1, i = l(a, n), ea = !1, Oa && (i = Nr(
      t,
      l,
      a,
      n
    )), Er(e), i;
  }
  function Er(e) {
    D.H = En;
    var t = Ne !== null && Ne.next !== null;
    if (el = 0, we = Ne = ue = null, Oi = !1, xn = 0, Ma = null, t) throw Error(r(300));
    e === null || Ze || (e = e.dependencies, e !== null && ji(e) && (Ze = !0));
  }
  function Nr(e, t, l, a) {
    ue = e;
    var n = 0;
    do {
      if (Oa && (Ma = null), xn = 0, Oa = !1, 25 <= n) throw Error(r(301));
      if (n += 1, we = Ne = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      D.H = uo, i = t(l, a);
    } while (Oa);
    return i;
  }
  function lv() {
    var e = D.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? jn(t) : t, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function As() {
    var e = Mi !== 0;
    return Mi = 0, e;
  }
  function Ts(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function zs(e) {
    if (Oi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Oi = !1;
    }
    el = 0, we = Ne = ue = null, Oa = !1, xn = Mi = 0, Ma = null;
  }
  function ct() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return we === null ? ue.memoizedState = we = e : we = we.next = e, we;
  }
  function Qe() {
    if (Ne === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = we === null ? ue.memoizedState : we.next;
    if (t !== null)
      we = t, Ne = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(r(467)) : Error(r(310));
      Ne = e, e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null
      }, we === null ? ue.memoizedState = we = e : we = we.next = e;
    }
    return we;
  }
  function Ui() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function jn(e) {
    var t = xn;
    return xn += 1, Ma === null && (Ma = []), e = mr(Ma, e, t), t = ue, (we === null ? t.memoizedState : we.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? io : Ls), e;
  }
  function Di(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return jn(e);
      if (e.$$typeof === w) return lt(e);
    }
    throw Error(r(438, String(e)));
  }
  function Cs(e) {
    var t = null, l = ue.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = ue.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Ui(), ue.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = Ye;
    return t.index++, l;
  }
  function tl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Hi(e) {
    var t = Qe();
    return Os(t, Ne, e);
  }
  function Os(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue, i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var s = n.next;
        n.next = i.next, i.next = s;
      }
      t.baseQueue = n = i, a.pending = null;
    }
    if (i = e.baseState, n === null) e.memoizedState = i;
    else {
      t = n.next;
      var o = s = null, p = null, _ = t, H = !1;
      do {
        var q = _.lane & -536870913;
        if (q !== _.lane ? (he & q) === q : (el & q) === q) {
          var z = _.revertLane;
          if (z === 0)
            p !== null && (p = p.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), q === _a && (H = !0);
          else if ((el & z) === z) {
            _ = _.next, z === _a && (H = !0);
            continue;
          } else
            q = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, p === null ? (o = p = q, s = i) : p = p.next = q, ue.lanes |= z, Tl |= z;
          q = _.action, ea && l(i, q), i = _.hasEagerState ? _.eagerState : l(i, q);
        } else
          z = {
            lane: q,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, p === null ? (o = p = z, s = i) : p = p.next = z, ue.lanes |= q, Tl |= q;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (p === null ? s = i : p.next = o, !St(i, e.memoizedState) && (Ze = !0, H && (l = Aa, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = s, e.baseQueue = p, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Ms(e) {
    var t = Qe(), l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, n = l.pending, i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var s = n = n.next;
      do
        i = e(i, s.action), s = s.next;
      while (s !== n);
      St(i, t.memoizedState) || (Ze = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
    }
    return [i, a];
  }
  function _r(e, t, l) {
    var a = ue, n = Qe(), i = ve;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = t();
    var s = !St(
      (Ne || n).memoizedState,
      l
    );
    if (s && (n.memoizedState = l, Ze = !0), n = n.queue, Hs(zr.bind(null, a, n, e), [
      e
    ]), n.getSnapshot !== t || s || we !== null && we.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ua(
        9,
        { destroy: void 0 },
        Tr.bind(
          null,
          a,
          n,
          l,
          t
        ),
        null
      ), ze === null) throw Error(r(349));
      i || (el & 127) !== 0 || Ar(a, t, l);
    }
    return l;
  }
  function Ar(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ue.updateQueue, t === null ? (t = Ui(), ue.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Tr(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Cr(t) && Or(e);
  }
  function zr(e, t, l) {
    return l(function() {
      Cr(t) && Or(e);
    });
  }
  function Cr(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !St(e, l);
    } catch {
      return !0;
    }
  }
  function Or(e) {
    var t = $l(e, 2);
    t !== null && pt(t, e, 2);
  }
  function Us(e) {
    var t = ct();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), ea) {
        hl(!0);
        try {
          l();
        } finally {
          hl(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tl,
      lastRenderedState: e
    }, t;
  }
  function Mr(e, t, l, a) {
    return e.baseState = l, Os(
      e,
      Ne,
      typeof a == "function" ? a : tl
    );
  }
  function av(e, t, l, a, n) {
    if (Bi(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          i.listeners.push(s);
        }
      };
      D.T !== null ? l(!0) : i.isTransition = !1, a(i), l = t.pending, l === null ? (i.next = t.pending = i, Ur(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function Ur(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var i = D.T, s = {};
      D.T = s;
      try {
        var o = l(n, a), p = D.S;
        p !== null && p(s, o), Dr(e, t, o);
      } catch (_) {
        Ds(e, t, _);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), D.T = i;
      }
    } else
      try {
        i = l(n, a), Dr(e, t, i);
      } catch (_) {
        Ds(e, t, _);
      }
  }
  function Dr(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Hr(e, t, a);
      },
      function(a) {
        return Ds(e, t, a);
      }
    ) : Hr(e, t, l);
  }
  function Hr(e, t, l) {
    t.status = "fulfilled", t.value = l, Rr(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Ur(e, l)));
  }
  function Ds(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, Rr(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Rr(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function qr(e, t) {
    return t;
  }
  function Br(e, t) {
    if (ve) {
      var l = ze.formState;
      if (l !== null) {
        e: {
          var a = ue;
          if (ve) {
            if (Oe) {
              t: {
                for (var n = Oe, i = Rt; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (n = Bt(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Oe = Bt(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            yl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return l = ct(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qr,
      lastRenderedState: t
    }, l.queue = a, l = lo.bind(
      null,
      ue,
      a
    ), a.dispatch = l, a = Us(!1), i = Gs.bind(
      null,
      ue,
      !1,
      a.queue
    ), a = ct(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = av.bind(
      null,
      ue,
      n,
      i,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function Yr(e) {
    var t = Qe();
    return Gr(t, Ne, e);
  }
  function Gr(e, t, l) {
    if (t = Os(
      e,
      t,
      qr
    )[0], e = Hi(tl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = jn(t);
      } catch (s) {
        throw s === Ta ? Ni : s;
      }
    else a = t;
    t = Qe();
    var n = t.queue, i = n.dispatch;
    return l !== t.memoizedState && (ue.flags |= 2048, Ua(
      9,
      { destroy: void 0 },
      nv.bind(null, n, l),
      null
    )), [a, i, e];
  }
  function nv(e, t) {
    e.action = t;
  }
  function Lr(e) {
    var t = Qe(), l = Ne;
    if (l !== null)
      return Gr(t, l, e);
    Qe(), t = t.memoizedState, l = Qe();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function Ua(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ue.updateQueue, t === null && (t = Ui(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Qr() {
    return Qe().memoizedState;
  }
  function Ri(e, t, l, a) {
    var n = ct();
    ue.flags |= e, n.memoizedState = Ua(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function qi(e, t, l, a) {
    var n = Qe();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    Ne !== null && a !== null && Ns(a, Ne.memoizedState.deps) ? n.memoizedState = Ua(t, i, l, a) : (ue.flags |= e, n.memoizedState = Ua(
      1 | t,
      i,
      l,
      a
    ));
  }
  function Xr(e, t) {
    Ri(8390656, 8, e, t);
  }
  function Hs(e, t) {
    qi(2048, 8, e, t);
  }
  function iv(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = Ui(), ue.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function wr(e) {
    var t = Qe().memoizedState;
    return iv({ ref: t, nextImpl: e }), function() {
      if ((xe & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Zr(e, t) {
    return qi(4, 2, e, t);
  }
  function $r(e, t) {
    return qi(4, 4, e, t);
  }
  function Vr(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Kr(e, t, l) {
    l = l != null ? l.concat([e]) : null, qi(4, 4, Vr.bind(null, t, e), l);
  }
  function Rs() {
  }
  function Jr(e, t) {
    var l = Qe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Ns(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function kr(e, t) {
    var l = Qe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Ns(t, a[1]))
      return a[0];
    if (a = e(), ea) {
      hl(!0);
      try {
        e();
      } finally {
        hl(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function qs(e, t, l) {
    return l === void 0 || (el & 1073741824) !== 0 && (he & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Fo(), ue.lanes |= e, Tl |= e, l);
  }
  function Wr(e, t, l, a) {
    return St(l, t) ? l : Ca.current !== null ? (e = qs(e, l, a), St(e, t) || (Ze = !0), e) : (el & 42) === 0 || (el & 1073741824) !== 0 && (he & 261930) === 0 ? (Ze = !0, e.memoizedState = l) : (e = Fo(), ue.lanes |= e, Tl |= e, t);
  }
  function Fr(e, t, l, a, n) {
    var i = C.p;
    C.p = i !== 0 && 8 > i ? i : 8;
    var s = D.T, o = {};
    D.T = o, Gs(e, !1, t, l);
    try {
      var p = n(), _ = D.S;
      if (_ !== null && _(o, p), p !== null && typeof p == "object" && typeof p.then == "function") {
        var H = ev(
          p,
          a
        );
        Sn(
          e,
          t,
          H,
          zt(e)
        );
      } else
        Sn(
          e,
          t,
          a,
          zt(e)
        );
    } catch (q) {
      Sn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: q },
        zt()
      );
    } finally {
      C.p = i, s !== null && o.types !== null && (s.types = o.types), D.T = s;
    }
  }
  function uv() {
  }
  function Bs(e, t, l, a) {
    if (e.tag !== 5) throw Error(r(476));
    var n = Ir(e).queue;
    Fr(
      e,
      n,
      t,
      P,
      l === null ? uv : function() {
        return Pr(e), l(a);
      }
    );
  }
  function Ir(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: P
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Pr(e) {
    var t = Ir(e);
    t.next === null && (t = e.alternate.memoizedState), Sn(
      e,
      t.next.queue,
      {},
      zt()
    );
  }
  function Ys() {
    return lt(Gn);
  }
  function eo() {
    return Qe().memoizedState;
  }
  function to() {
    return Qe().memoizedState;
  }
  function sv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = zt();
          e = jl(l);
          var a = Sl(t, e, l);
          a !== null && (pt(a, t, l), gn(a, t, l)), t = { cache: hs() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function cv(e, t, l) {
    var a = zt();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bi(e) ? ao(t, l) : (l = ls(e, t, l, a), l !== null && (pt(l, e, a), no(l, t, a)));
  }
  function lo(e, t, l) {
    var a = zt();
    Sn(e, t, l, a);
  }
  function Sn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Bi(e)) ao(t, n);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var s = t.lastRenderedState, o = i(s, l);
          if (n.hasEagerState = !0, n.eagerState = o, St(o, s))
            return gi(e, t, n, 0), ze === null && pi(), !1;
        } catch {
        } finally {
        }
      if (l = ls(e, t, n, a), l !== null)
        return pt(l, e, a), no(l, t, a), !0;
    }
    return !1;
  }
  function Gs(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: gc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bi(e)) {
      if (t) throw Error(r(479));
    } else
      t = ls(
        e,
        l,
        a,
        2
      ), t !== null && pt(t, e, 2);
  }
  function Bi(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function ao(e, t) {
    Oa = Oi = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function no(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, ff(e, l);
    }
  }
  var En = {
    readContext: lt,
    use: Di,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useLayoutEffect: Re,
    useInsertionEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useSyncExternalStore: Re,
    useId: Re,
    useHostTransitionStatus: Re,
    useFormState: Re,
    useActionState: Re,
    useOptimistic: Re,
    useMemoCache: Re,
    useCacheRefresh: Re
  };
  En.useEffectEvent = Re;
  var io = {
    readContext: lt,
    use: Di,
    useCallback: function(e, t) {
      return ct().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: lt,
    useEffect: Xr,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Ri(
        4194308,
        4,
        Vr.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Ri(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ri(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = ct();
      t = t === void 0 ? null : t;
      var a = e();
      if (ea) {
        hl(!0);
        try {
          e();
        } finally {
          hl(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = ct();
      if (l !== void 0) {
        var n = l(t);
        if (ea) {
          hl(!0);
          try {
            l(t);
          } finally {
            hl(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = cv.bind(
        null,
        ue,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = ct();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Us(e);
      var t = e.queue, l = lo.bind(null, ue, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Rs,
    useDeferredValue: function(e, t) {
      var l = ct();
      return qs(l, e, t);
    },
    useTransition: function() {
      var e = Us(!1);
      return e = Fr.bind(
        null,
        ue,
        e.queue,
        !0,
        !1
      ), ct().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = ue, n = ct();
      if (ve) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = t(), ze === null)
          throw Error(r(349));
        (he & 127) !== 0 || Ar(a, t, l);
      }
      n.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return n.queue = i, Xr(zr.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, Ua(
        9,
        { destroy: void 0 },
        Tr.bind(
          null,
          a,
          i,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = ct(), t = ze.identifierPrefix;
      if (ve) {
        var l = wt, a = Xt;
        l = (a & ~(1 << 32 - jt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Mi++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = tv++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ys,
    useFormState: Br,
    useActionState: Br,
    useOptimistic: function(e) {
      var t = ct();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = Gs.bind(
        null,
        ue,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Cs,
    useCacheRefresh: function() {
      return ct().memoizedState = sv.bind(
        null,
        ue
      );
    },
    useEffectEvent: function(e) {
      var t = ct(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((xe & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Ls = {
    readContext: lt,
    use: Di,
    useCallback: Jr,
    useContext: lt,
    useEffect: Hs,
    useImperativeHandle: Kr,
    useInsertionEffect: Zr,
    useLayoutEffect: $r,
    useMemo: kr,
    useReducer: Hi,
    useRef: Qr,
    useState: function() {
      return Hi(tl);
    },
    useDebugValue: Rs,
    useDeferredValue: function(e, t) {
      var l = Qe();
      return Wr(
        l,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Hi(tl)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : jn(e),
        t
      ];
    },
    useSyncExternalStore: _r,
    useId: eo,
    useHostTransitionStatus: Ys,
    useFormState: Yr,
    useActionState: Yr,
    useOptimistic: function(e, t) {
      var l = Qe();
      return Mr(l, Ne, e, t);
    },
    useMemoCache: Cs,
    useCacheRefresh: to
  };
  Ls.useEffectEvent = wr;
  var uo = {
    readContext: lt,
    use: Di,
    useCallback: Jr,
    useContext: lt,
    useEffect: Hs,
    useImperativeHandle: Kr,
    useInsertionEffect: Zr,
    useLayoutEffect: $r,
    useMemo: kr,
    useReducer: Ms,
    useRef: Qr,
    useState: function() {
      return Ms(tl);
    },
    useDebugValue: Rs,
    useDeferredValue: function(e, t) {
      var l = Qe();
      return Ne === null ? qs(l, e, t) : Wr(
        l,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ms(tl)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : jn(e),
        t
      ];
    },
    useSyncExternalStore: _r,
    useId: eo,
    useHostTransitionStatus: Ys,
    useFormState: Lr,
    useActionState: Lr,
    useOptimistic: function(e, t) {
      var l = Qe();
      return Ne !== null ? Mr(l, Ne, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Cs,
    useCacheRefresh: to
  };
  uo.useEffectEvent = wr;
  function Qs(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : U({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Xs = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = zt(), n = jl(a);
      n.payload = t, l != null && (n.callback = l), t = Sl(e, n, a), t !== null && (pt(t, e, a), gn(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = zt(), n = jl(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = Sl(e, n, a), t !== null && (pt(t, e, a), gn(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = zt(), a = jl(l);
      a.tag = 2, t != null && (a.callback = t), t = Sl(e, a, l), t !== null && (pt(t, e, l), gn(t, e, l));
    }
  };
  function so(e, t, l, a, n, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, s) : t.prototype && t.prototype.isPureReactComponent ? !fn(l, a) || !fn(n, i) : !0;
  }
  function co(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Xs.enqueueReplaceState(t, t.state, null);
  }
  function ta(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t)
        a !== "ref" && (l[a] = t[a]);
    }
    if (e = e.defaultProps) {
      l === t && (l = U({}, l));
      for (var n in e)
        l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function fo(e) {
    vi(e);
  }
  function ro(e) {
    console.error(e);
  }
  function oo(e) {
    vi(e);
  }
  function Yi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function ho(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function ws(e, t, l) {
    return l = jl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Yi(e, t);
    }, l;
  }
  function mo(e) {
    return e = jl(e), e.tag = 3, e;
  }
  function vo(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      e.payload = function() {
        return n(i);
      }, e.callback = function() {
        ho(t, l, a);
      };
    }
    var s = l.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      ho(t, l, a), typeof n != "function" && (zl === null ? zl = /* @__PURE__ */ new Set([this]) : zl.add(this));
      var o = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function fv(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Na(
        t,
        l,
        n,
        !0
      ), l = Nt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return qt === null ? Wi() : l.alternate === null && qe === 0 && (qe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === _i ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), mc(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === _i ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), mc(e, a, n)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return mc(e, a, n), Wi(), !1;
    }
    if (ve)
      return t = Nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== cs && (e = Error(r(422), { cause: a }), dn(Ut(e, l)))) : (a !== cs && (t = Error(r(423), {
        cause: a
      }), dn(
        Ut(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Ut(a, l), n = ws(
        e.stateNode,
        a,
        n
      ), bs(e, n), qe !== 4 && (qe = 2)), !1;
    var i = Error(r(520), { cause: a });
    if (i = Ut(i, l), Mn === null ? Mn = [i] : Mn.push(i), qe !== 4 && (qe = 2), t === null) return !0;
    a = Ut(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = ws(l.stateNode, a, e), bs(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (zl === null || !zl.has(i))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = mo(n), vo(
              n,
              e,
              l,
              a
            ), bs(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Zs = Error(r(461)), Ze = !1;
  function at(e, t, l, a) {
    t.child = e === null ? yr(t, null, l, a) : Pl(
      t,
      e.child,
      l,
      a
    );
  }
  function po(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ("ref" in a) {
      var s = {};
      for (var o in a)
        o !== "ref" && (s[o] = a[o]);
    } else s = a;
    return kl(t), a = _s(
      e,
      t,
      l,
      s,
      i,
      n
    ), o = As(), e !== null && !Ze ? (Ts(e, t, n), ll(e, t, n)) : (ve && o && us(t), t.flags |= 1, at(e, t, a, n), t.child);
  }
  function go(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !as(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, yo(
        e,
        t,
        i,
        a,
        n
      )) : (e = bi(
        l.type,
        null,
        a,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !Is(e, n)) {
      var s = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : fn, l(s, a) && e.ref === t.ref)
        return ll(e, t, n);
    }
    return t.flags |= 1, e = Wt(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function yo(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (fn(i, a) && e.ref === t.ref)
        if (Ze = !1, t.pendingProps = a = i, Is(e, n))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else
          return t.lanes = e.lanes, ll(e, t, n);
    }
    return $s(
      e,
      t,
      l,
      a,
      n
    );
  }
  function bo(e, t, l, a) {
    var n = a.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~i;
        } else a = 0, t.child = null;
        return xo(
          e,
          t,
          i,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ei(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? jr(t, i) : js(), Sr(t);
      else
        return a = t.lanes = 536870912, xo(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          a
        );
    } else
      i !== null ? (Ei(t, i.cachePool), jr(t, i), Nl(), t.memoizedState = null) : (e !== null && Ei(t, null), js(), Nl());
    return at(e, t, n, l), t.child;
  }
  function Nn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function xo(e, t, l, a, n) {
    var i = vs();
    return i = i === null ? null : { parent: Xe._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && Ei(t, null), js(), Sr(t), e !== null && Na(e, t, a, !0), t.childLanes = n, null;
  }
  function Gi(e, t) {
    return t = Qi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function jo(e, t, l) {
    return Pl(t, e.child, null, l), e = Gi(t, t.pendingProps), e.flags |= 2, _t(t), t.memoizedState = null, e;
  }
  function rv(e, t, l) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ve) {
        if (a.mode === "hidden")
          return e = Gi(t, a), t.lanes = 536870912, Nn(null, e);
        if (Es(t), (e = Oe) ? (e = Dd(
          e,
          Rt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: pl !== null ? { id: Xt, overflow: wt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = ar(e), l.return = t, t.child = l, tt = t, Oe = null)) : e = null, e === null) throw yl(t);
        return t.lanes = 536870912, null;
      }
      return Gi(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var s = i.dehydrated;
      if (Es(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = jo(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Ze || Na(e, t, l, !1), n = (l & e.childLanes) !== 0, Ze || n) {
        if (a = ze, a !== null && (s = rf(a, l), s !== 0 && s !== i.retryLane))
          throw i.retryLane = s, $l(e, s), pt(a, e, s), Zs;
        Wi(), t = jo(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, Oe = Bt(s.nextSibling), tt = t, ve = !0, gl = null, Rt = !1, e !== null && ur(t, e), t = Gi(t, a), t.flags |= 4096;
      return t;
    }
    return e = Wt(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Li(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function $s(e, t, l, a, n) {
    return kl(t), l = _s(
      e,
      t,
      l,
      a,
      void 0,
      n
    ), a = As(), e !== null && !Ze ? (Ts(e, t, n), ll(e, t, n)) : (ve && a && us(t), t.flags |= 1, at(e, t, l, n), t.child);
  }
  function So(e, t, l, a, n, i) {
    return kl(t), t.updateQueue = null, l = Nr(
      t,
      a,
      l,
      n
    ), Er(e), a = As(), e !== null && !Ze ? (Ts(e, t, i), ll(e, t, i)) : (ve && a && us(t), t.flags |= 1, at(e, t, l, i), t.child);
  }
  function Eo(e, t, l, a, n) {
    if (kl(t), t.stateNode === null) {
      var i = xa, s = l.contextType;
      typeof s == "object" && s !== null && (i = lt(s)), i = new l(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Xs, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, gs(t), s = l.contextType, i.context = typeof s == "object" && s !== null ? lt(s) : xa, i.state = t.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (Qs(
        t,
        l,
        s,
        a
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && Xs.enqueueReplaceState(i, i.state, null), bn(t, a, i, n), yn(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var o = t.memoizedProps, p = ta(l, o);
      i.props = p;
      var _ = i.context, H = l.contextType;
      s = xa, typeof H == "object" && H !== null && (s = lt(H));
      var q = l.getDerivedStateFromProps;
      H = typeof q == "function" || typeof i.getSnapshotBeforeUpdate == "function", o = t.pendingProps !== o, H || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o || _ !== s) && co(
        t,
        i,
        a,
        s
      ), xl = !1;
      var z = t.memoizedState;
      i.state = z, bn(t, a, i, n), yn(), _ = t.memoizedState, o || z !== _ || xl ? (typeof q == "function" && (Qs(
        t,
        l,
        q,
        a
      ), _ = t.memoizedState), (p = xl || so(
        t,
        l,
        p,
        a,
        z,
        _,
        s
      )) ? (H || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), i.props = a, i.state = _, i.context = s, a = p) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, ys(e, t), s = t.memoizedProps, H = ta(l, s), i.props = H, q = t.pendingProps, z = i.context, _ = l.contextType, p = xa, typeof _ == "object" && _ !== null && (p = lt(_)), o = l.getDerivedStateFromProps, (_ = typeof o == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== q || z !== p) && co(
        t,
        i,
        a,
        p
      ), xl = !1, z = t.memoizedState, i.state = z, bn(t, a, i, n), yn();
      var M = t.memoizedState;
      s !== q || z !== M || xl || e !== null && e.dependencies !== null && ji(e.dependencies) ? (typeof o == "function" && (Qs(
        t,
        l,
        o,
        a
      ), M = t.memoizedState), (H = xl || so(
        t,
        l,
        H,
        a,
        z,
        M,
        p
      ) || e !== null && e.dependencies !== null && ji(e.dependencies)) ? (_ || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, M, p), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        M,
        p
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), i.props = a, i.state = M, i.context = p, a = H) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return i = a, Li(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = Pl(
      t,
      e.child,
      null,
      n
    ), t.child = Pl(
      t,
      null,
      l,
      n
    )) : at(e, t, l, n), t.memoizedState = i.state, e = t.child) : e = ll(
      e,
      t,
      n
    ), e;
  }
  function No(e, t, l, a) {
    return Kl(), t.flags |= 256, at(e, t, l, a), t.child;
  }
  var Vs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ks(e) {
    return { baseLanes: e, cachePool: dr() };
  }
  function Js(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Tt), e;
  }
  function _o(e, t, l) {
    var a = t.pendingProps, n = !1, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (Le.current & 2) !== 0), s && (n = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ve) {
        if (n ? El(t) : Nl(), (e = Oe) ? (e = Dd(
          e,
          Rt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: pl !== null ? { id: Xt, overflow: wt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = ar(e), l.return = t, t.child = l, tt = t, Oe = null)) : e = null, e === null) throw yl(t);
        return Oc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var o = a.children;
      return a = a.fallback, n ? (Nl(), n = t.mode, o = Qi(
        { mode: "hidden", children: o },
        n
      ), a = Vl(
        a,
        n,
        l,
        null
      ), o.return = t, a.return = t, o.sibling = a, t.child = o, a = t.child, a.memoizedState = Ks(l), a.childLanes = Js(
        e,
        s,
        l
      ), t.memoizedState = Vs, Nn(null, a)) : (El(t), ks(t, o));
    }
    var p = e.memoizedState;
    if (p !== null && (o = p.dehydrated, o !== null)) {
      if (i)
        t.flags & 256 ? (El(t), t.flags &= -257, t = Ws(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Nl(), t.child = e.child, t.flags |= 128, t = null) : (Nl(), o = a.fallback, n = t.mode, a = Qi(
          { mode: "visible", children: a.children },
          n
        ), o = Vl(
          o,
          n,
          l,
          null
        ), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, Pl(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = Ks(l), a.childLanes = Js(
          e,
          s,
          l
        ), t.memoizedState = Vs, t = Nn(null, a));
      else if (El(t), Oc(o)) {
        if (s = o.nextSibling && o.nextSibling.dataset, s) var _ = s.dgst;
        s = _, a = Error(r(419)), a.stack = "", a.digest = s, dn({ value: a, source: null, stack: null }), t = Ws(
          e,
          t,
          l
        );
      } else if (Ze || Na(e, t, l, !1), s = (l & e.childLanes) !== 0, Ze || s) {
        if (s = ze, s !== null && (a = rf(s, l), a !== 0 && a !== p.retryLane))
          throw p.retryLane = a, $l(e, a), pt(s, e, a), Zs;
        Cc(o) || Wi(), t = Ws(
          e,
          t,
          l
        );
      } else
        Cc(o) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, Oe = Bt(
          o.nextSibling
        ), tt = t, ve = !0, gl = null, Rt = !1, e !== null && ur(t, e), t = ks(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Nl(), o = a.fallback, n = t.mode, p = e.child, _ = p.sibling, a = Wt(p, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = p.subtreeFlags & 65011712, _ !== null ? o = Wt(
      _,
      o
    ) : (o = Vl(
      o,
      n,
      l,
      null
    ), o.flags |= 2), o.return = t, a.return = t, a.sibling = o, t.child = a, Nn(null, a), a = t.child, o = e.child.memoizedState, o === null ? o = Ks(l) : (n = o.cachePool, n !== null ? (p = Xe._currentValue, n = n.parent !== p ? { parent: p, pool: p } : n) : n = dr(), o = {
      baseLanes: o.baseLanes | l,
      cachePool: n
    }), a.memoizedState = o, a.childLanes = Js(
      e,
      s,
      l
    ), t.memoizedState = Vs, Nn(e.child, a)) : (El(t), l = e.child, e = l.sibling, l = Wt(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function ks(e, t) {
    return t = Qi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Qi(e, t) {
    return e = Et(22, e, null, t), e.lanes = 0, e;
  }
  function Ws(e, t, l) {
    return Pl(t, e.child, null, l), e = ks(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ao(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), os(e.return, t, l);
  }
  function Fs(e, t, l, a, n, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = a, s.tail = l, s.tailMode = n, s.treeForkCount = i);
  }
  function To(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var s = Le.current, o = (s & 2) !== 0;
    if (o ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, L(Le, s), at(e, t, a, l), a = ve ? on : 0, !o && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Ao(e, l, t);
        else if (e.tag === 19)
          Ao(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (n) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          e = l.alternate, e !== null && Ci(e) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), Fs(
          t,
          !1,
          n,
          l,
          i,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && Ci(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = l, l = n, n = e;
        }
        Fs(
          t,
          !0,
          l,
          null,
          i,
          a
        );
        break;
      case "together":
        Fs(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ll(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Tl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Na(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, l = Wt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Wt(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Is(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ji(e)));
  }
  function ov(e, t, l) {
    switch (t.tag) {
      case 3:
        Pe(t, t.stateNode.containerInfo), bl(t, Xe, e.memoizedState.cache), Kl();
        break;
      case 27:
      case 5:
        h(t);
        break;
      case 4:
        Pe(t, t.stateNode.containerInfo);
        break;
      case 10:
        bl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Es(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (El(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? _o(e, t, l) : (El(t), e = ll(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        El(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (Na(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), n) {
          if (a)
            return To(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), L(Le, Le.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, bo(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        bl(t, Xe, e.memoizedState.cache);
    }
    return ll(e, t, l);
  }
  function zo(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ze = !0;
      else {
        if (!Is(e, l) && (t.flags & 128) === 0)
          return Ze = !1, ov(
            e,
            t,
            l
          );
        Ze = (e.flags & 131072) !== 0;
      }
    else
      Ze = !1, ve && (t.flags & 1048576) !== 0 && ir(t, on, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Fl(t.elementType), t.type = e, typeof e == "function")
            as(e) ? (a = ta(e, a), t.tag = 1, t = Eo(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = $s(
              null,
              t,
              e,
              a,
              l
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === re) {
                t.tag = 11, t = po(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (n === ae) {
                t.tag = 14, t = go(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              }
            }
            throw t = Ie(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return $s(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, n = ta(
          a,
          t.pendingProps
        ), Eo(
          e,
          t,
          a,
          n,
          l
        );
      case 3:
        e: {
          if (Pe(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          n = i.element, ys(e, t), bn(t, a, null, l);
          var s = t.memoizedState;
          if (a = s.cache, bl(t, Xe, a), a !== i.cache && ds(
            t,
            [Xe],
            l,
            !0
          ), yn(), a = s.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = No(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== n) {
              n = Ut(
                Error(r(424)),
                t
              ), dn(n), t = No(
                e,
                t,
                a,
                l
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Oe = Bt(e.firstChild), tt = t, ve = !0, gl = null, Rt = !0, l = yr(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Kl(), a === n) {
              t = ll(
                e,
                t,
                l
              );
              break e;
            }
            at(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Li(e, t), e === null ? (l = Gd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ve || (l = t.type, e = t.pendingProps, a = au(
          te.current
        ).createElement(l), a[et] = t, a[rt] = e, nt(a, l, e), ke(a), t.stateNode = a) : t.memoizedState = Gd(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return h(t), e === null && ve && (a = t.stateNode = qd(
          t.type,
          t.pendingProps,
          te.current
        ), tt = t, Rt = !0, n = Oe, Ul(t.type) ? (Mc = n, Oe = Bt(a.firstChild)) : Oe = n), at(
          e,
          t,
          t.pendingProps.children,
          l
        ), Li(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ve && ((n = a = Oe) && (a = Qv(
          a,
          t.type,
          t.pendingProps,
          Rt
        ), a !== null ? (t.stateNode = a, tt = t, Oe = Bt(a.firstChild), Rt = !1, n = !0) : n = !1), n || yl(t)), h(t), n = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = i.children, Ac(n, i) ? a = null : s !== null && Ac(n, s) && (t.flags |= 32), t.memoizedState !== null && (n = _s(
          e,
          t,
          lv,
          null,
          null,
          l
        ), Gn._currentValue = n), Li(e, t), at(e, t, a, l), t.child;
      case 6:
        return e === null && ve && ((e = l = Oe) && (l = Xv(
          l,
          t.pendingProps,
          Rt
        ), l !== null ? (t.stateNode = l, tt = t, Oe = null, e = !0) : e = !1), e || yl(t)), null;
      case 13:
        return _o(e, t, l);
      case 4:
        return Pe(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Pl(
          t,
          null,
          a,
          l
        ) : at(e, t, a, l), t.child;
      case 11:
        return po(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return at(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return at(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return at(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, bl(t, t.type, a.value), at(e, t, a.children, l), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, kl(t), n = lt(n), a = a(n), t.flags |= 1, at(e, t, a, l), t.child;
      case 14:
        return go(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return yo(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return To(e, t, l);
      case 31:
        return rv(e, t, l);
      case 22:
        return bo(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return kl(t), a = lt(Xe), e === null ? (n = vs(), n === null && (n = ze, i = hs(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), t.memoizedState = { parent: a, cache: n }, gs(t), bl(t, Xe, n)) : ((e.lanes & l) !== 0 && (ys(e, t), bn(t, null, null, l), yn()), n = e.memoizedState, i = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), bl(t, Xe, a)) : (a = i.cache, bl(t, Xe, a), a !== n.cache && ds(
          t,
          [Xe],
          l,
          !0
        ))), at(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function al(e) {
    e.flags |= 4;
  }
  function Ps(e, t, l, a, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (td()) e.flags |= 8192;
        else
          throw Il = _i, ps;
    } else e.flags &= -16777217;
  }
  function Co(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Zd(t))
      if (td()) e.flags |= 8192;
      else
        throw Il = _i, ps;
  }
  function Xi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? sf() : 536870912, e.lanes |= t, qa |= t);
  }
  function _n(e, t) {
    if (!ve)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function Me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function dv(e, t, l) {
    var a = t.pendingProps;
    switch (ss(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Me(t), null;
      case 1:
        return Me(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Pt(Xe), He(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Ea(t) ? al(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, fs())), Me(t), null;
      case 26:
        var n = t.type, i = t.memoizedState;
        return e === null ? (al(t), i !== null ? (Me(t), Co(t, i)) : (Me(t), Ps(
          t,
          n,
          null,
          a,
          l
        ))) : i ? i !== e.memoizedState ? (al(t), Me(t), Co(t, i)) : (Me(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && al(t), Me(t), Ps(
          t,
          n,
          e,
          a,
          l
        )), null;
      case 27:
        if (x(t), l = te.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && al(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Me(t), null;
          }
          e = V.current, Ea(t) ? sr(t) : (e = qd(n, a, l), t.stateNode = e, al(t));
        }
        return Me(t), null;
      case 5:
        if (x(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && al(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Me(t), null;
          }
          if (i = V.current, Ea(t))
            sr(t);
          else {
            var s = au(
              te.current
            );
            switch (i) {
              case 1:
                i = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = s.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? s.createElement("select", {
                      is: a.is
                    }) : s.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? s.createElement(n, { is: a.is }) : s.createElement(n);
                }
            }
            i[et] = t, i[rt] = a;
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                i.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === t) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === t)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            t.stateNode = i;
            e: switch (nt(i, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && al(t);
          }
        }
        return Me(t), Ps(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && al(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = te.current, Ea(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = tt, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[et] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || _d(e.nodeValue, l)), e || yl(t, !0);
          } else
            e = au(e).createTextNode(
              a
            ), e[et] = t, t.stateNode = e;
        }
        return Me(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Ea(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[et] = t;
            } else
              Kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Me(t), e = !1;
          } else
            l = fs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (_t(t), t) : (_t(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Me(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = Ea(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[et] = t;
            } else
              Kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Me(t), n = !1;
          } else
            n = fs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (_t(t), t) : (_t(t), null);
        }
        return _t(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Xi(t, t.updateQueue), Me(t), null);
      case 4:
        return He(), e === null && jc(t.stateNode.containerInfo), Me(t), null;
      case 10:
        return Pt(t.type), Me(t), null;
      case 19:
        if (m(Le), a = t.memoizedState, a === null) return Me(t), null;
        if (n = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) _n(a, !1);
          else {
            if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Ci(e), i !== null) {
                  for (t.flags |= 128, _n(a, !1), e = i.updateQueue, t.updateQueue = e, Xi(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    lr(l, e), l = l.sibling;
                  return L(
                    Le,
                    Le.current & 1 | 2
                  ), ve && Ft(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && bt() > Ki && (t.flags |= 128, n = !0, _n(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = Ci(i), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Xi(t, e), _n(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ve)
                return Me(t), null;
            } else
              2 * bt() - a.renderingStartTime > Ki && l !== 536870912 && (t.flags |= 128, n = !0, _n(a, !1), t.lanes = 4194304);
          a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = bt(), e.sibling = null, l = Le.current, L(
          Le,
          n ? l & 1 | 2 : l & 1
        ), ve && Ft(t, a.treeForkCount), e) : (Me(t), null);
      case 22:
      case 23:
        return _t(t), Ss(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), l = t.updateQueue, l !== null && Xi(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && m(Wl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Pt(Xe), Me(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function hv(e, t) {
    switch (ss(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Pt(Xe), He(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return x(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (_t(t), t.alternate === null)
            throw Error(r(340));
          Kl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (_t(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Kl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return m(Le), null;
      case 4:
        return He(), null;
      case 10:
        return Pt(t.type), null;
      case 22:
      case 23:
        return _t(t), Ss(), e !== null && m(Wl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Pt(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Oo(e, t) {
    switch (ss(t), t.tag) {
      case 3:
        Pt(Xe), He();
        break;
      case 26:
      case 27:
      case 5:
        x(t);
        break;
      case 4:
        He();
        break;
      case 31:
        t.memoizedState !== null && _t(t);
        break;
      case 13:
        _t(t);
        break;
      case 19:
        m(Le);
        break;
      case 10:
        Pt(t.type);
        break;
      case 22:
      case 23:
        _t(t), Ss(), e !== null && m(Wl);
        break;
      case 24:
        Pt(Xe);
    }
  }
  function An(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create, s = l.inst;
            a = i(), s.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (o) {
      Ee(t, t.return, o);
    }
  }
  function _l(e, t, l) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var s = a.inst, o = s.destroy;
            if (o !== void 0) {
              s.destroy = void 0, n = t;
              var p = l, _ = o;
              try {
                _();
              } catch (H) {
                Ee(
                  n,
                  p,
                  H
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (H) {
      Ee(t, t.return, H);
    }
  }
  function Mo(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        xr(t, l);
      } catch (a) {
        Ee(e, e.return, a);
      }
    }
  }
  function Uo(e, t, l) {
    l.props = ta(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Ee(e, t, a);
    }
  }
  function Tn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      Ee(e, t, n);
    }
  }
  function Zt(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Ee(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Ee(e, t, n);
        }
      else l.current = null;
  }
  function Do(e) {
    var t = e.type, l = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Ee(e, e.return, n);
    }
  }
  function ec(e, t, l) {
    try {
      var a = e.stateNode;
      Rv(a, e.type, l, t), a[rt] = t;
    } catch (n) {
      Ee(e, e.return, n);
    }
  }
  function Ho(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ul(e.type) || e.tag === 4;
  }
  function tc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ho(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ul(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Jt));
    else if (a !== 4 && (a === 27 && Ul(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (lc(e, t, l), e = e.sibling; e !== null; )
        lc(e, t, l), e = e.sibling;
  }
  function wi(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Ul(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (wi(e, t, l), e = e.sibling; e !== null; )
        wi(e, t, l), e = e.sibling;
  }
  function Ro(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      nt(t, a, l), t[et] = e, t[rt] = l;
    } catch (i) {
      Ee(e, e.return, i);
    }
  }
  var nl = !1, $e = !1, ac = !1, qo = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function mv(e, t) {
    if (e = e.containerInfo, Nc = ru, e = Kf(e), Wu(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var s = 0, o = -1, p = -1, _ = 0, H = 0, q = e, z = null;
            t: for (; ; ) {
              for (var M; q !== l || n !== 0 && q.nodeType !== 3 || (o = s + n), q !== i || a !== 0 && q.nodeType !== 3 || (p = s + a), q.nodeType === 3 && (s += q.nodeValue.length), (M = q.firstChild) !== null; )
                z = q, q = M;
              for (; ; ) {
                if (q === e) break t;
                if (z === l && ++_ === n && (o = s), z === i && ++H === a && (p = s), (M = q.nextSibling) !== null) break;
                q = z, z = q.parentNode;
              }
              q = M;
            }
            l = o === -1 || p === -1 ? null : { start: o, end: p };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (_c = { focusedElem: e, selectionRange: l }, ru = !1, We = t; We !== null; )
      if (t = We, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, We = e;
      else
        for (; We !== null; ) {
          switch (t = We, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  n = e[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, l = t, n = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
                try {
                  var k = ta(
                    l.type,
                    n
                  );
                  e = a.getSnapshotBeforeUpdate(
                    k,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (le) {
                  Ee(
                    l,
                    l.return,
                    le
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  zc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      zc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, We = e;
            break;
          }
          We = t.return;
        }
  }
  function Bo(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ul(e, l), a & 4 && An(5, l);
        break;
      case 1:
        if (ul(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              Ee(l, l.return, s);
            }
          else {
            var n = ta(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                n,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (s) {
              Ee(
                l,
                l.return,
                s
              );
            }
          }
        a & 64 && Mo(l), a & 512 && Tn(l, l.return);
        break;
      case 3:
        if (ul(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            xr(e, t);
          } catch (s) {
            Ee(l, l.return, s);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Ro(l);
      case 26:
      case 5:
        ul(e, l), t === null && a & 4 && Do(l), a & 512 && Tn(l, l.return);
        break;
      case 12:
        ul(e, l);
        break;
      case 31:
        ul(e, l), a & 4 && Lo(e, l);
        break;
      case 13:
        ul(e, l), a & 4 && Qo(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Ev.bind(
          null,
          l
        ), wv(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || nl, !a) {
          t = t !== null && t.memoizedState !== null || $e, n = nl;
          var i = $e;
          nl = a, ($e = t) && !i ? sl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : ul(e, l), nl = n, $e = i;
        }
        break;
      case 30:
        break;
      default:
        ul(e, l);
    }
  }
  function Yo(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Yo(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Du(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ue = null, dt = !1;
  function il(e, t, l) {
    for (l = l.child; l !== null; )
      Go(e, t, l), l = l.sibling;
  }
  function Go(e, t, l) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(Wa, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        $e || Zt(l, t), il(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        $e || Zt(l, t);
        var a = Ue, n = dt;
        Ul(l.type) && (Ue = l.stateNode, dt = !1), il(
          e,
          t,
          l
        ), qn(l.stateNode), Ue = a, dt = n;
        break;
      case 5:
        $e || Zt(l, t);
      case 6:
        if (a = Ue, n = dt, Ue = null, il(
          e,
          t,
          l
        ), Ue = a, dt = n, Ue !== null)
          if (dt)
            try {
              (Ue.nodeType === 9 ? Ue.body : Ue.nodeName === "HTML" ? Ue.ownerDocument.body : Ue).removeChild(l.stateNode);
            } catch (i) {
              Ee(
                l,
                t,
                i
              );
            }
          else
            try {
              Ue.removeChild(l.stateNode);
            } catch (i) {
              Ee(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        Ue !== null && (dt ? (e = Ue, Md(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Za(e)) : Md(Ue, l.stateNode));
        break;
      case 4:
        a = Ue, n = dt, Ue = l.stateNode.containerInfo, dt = !0, il(
          e,
          t,
          l
        ), Ue = a, dt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _l(2, l, t), $e || _l(4, l, t), il(
          e,
          t,
          l
        );
        break;
      case 1:
        $e || (Zt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Uo(
          l,
          t,
          a
        )), il(
          e,
          t,
          l
        );
        break;
      case 21:
        il(
          e,
          t,
          l
        );
        break;
      case 22:
        $e = (a = $e) || l.memoizedState !== null, il(
          e,
          t,
          l
        ), $e = a;
        break;
      default:
        il(
          e,
          t,
          l
        );
    }
  }
  function Lo(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Za(e);
      } catch (l) {
        Ee(t, t.return, l);
      }
    }
  }
  function Qo(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Za(e);
      } catch (l) {
        Ee(t, t.return, l);
      }
  }
  function vv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new qo()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new qo()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Zi(e, t) {
    var l = vv(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Nv.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function ht(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], i = e, s = t, o = s;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Ul(o.type)) {
                Ue = o.stateNode, dt = !1;
                break e;
              }
              break;
            case 5:
              Ue = o.stateNode, dt = !1;
              break e;
            case 3:
            case 4:
              Ue = o.stateNode.containerInfo, dt = !0;
              break e;
          }
          o = o.return;
        }
        if (Ue === null) throw Error(r(160));
        Go(i, s, n), Ue = null, dt = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Xo(t, e), t = t.sibling;
  }
  var Lt = null;
  function Xo(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ht(t, e), mt(e), a & 4 && (_l(3, e, e.return), An(3, e), _l(5, e, e.return));
        break;
      case 1:
        ht(t, e), mt(e), a & 512 && ($e || l === null || Zt(l, l.return)), a & 64 && nl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = Lt;
        if (ht(t, e), mt(e), a & 512 && ($e || l === null || Zt(l, l.return)), a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[Pa] || i[et] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), nt(i, a, l), i[et] = e, ke(i), a = i;
                      break e;
                    case "link":
                      var s = Xd(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (s) {
                        for (var o = 0; o < s.length; o++)
                          if (i = s[o], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            s.splice(o, 1);
                            break t;
                          }
                      }
                      i = n.createElement(a), nt(i, a, l), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (s = Xd(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (o = 0; o < s.length; o++)
                          if (i = s[o], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            s.splice(o, 1);
                            break t;
                          }
                      }
                      i = n.createElement(a), nt(i, a, l), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  i[et] = e, ke(i), a = i;
                }
                e.stateNode = a;
              } else
                wd(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Qd(
                n,
                a,
                e.memoizedProps
              );
          else
            i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? wd(
              n,
              e.type,
              e.stateNode
            ) : Qd(
              n,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && ec(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ht(t, e), mt(e), a & 512 && ($e || l === null || Zt(l, l.return)), l !== null && a & 4 && ec(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ht(t, e), mt(e), a & 512 && ($e || l === null || Zt(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            ha(n, "");
          } catch (k) {
            Ee(e, e.return, k);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, ec(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (ac = !0);
        break;
      case 6:
        if (ht(t, e), mt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch (k) {
            Ee(e, e.return, k);
          }
        }
        break;
      case 3:
        if (uu = null, n = Lt, Lt = nu(t.containerInfo), ht(t, e), Lt = n, mt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Za(t.containerInfo);
          } catch (k) {
            Ee(e, e.return, k);
          }
        ac && (ac = !1, wo(e));
        break;
      case 4:
        a = Lt, Lt = nu(
          e.stateNode.containerInfo
        ), ht(t, e), mt(e), Lt = a;
        break;
      case 12:
        ht(t, e), mt(e);
        break;
      case 31:
        ht(t, e), mt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Zi(e, a)));
        break;
      case 13:
        ht(t, e), mt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Vi = bt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Zi(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var p = l !== null && l.memoizedState !== null, _ = nl, H = $e;
        if (nl = _ || n, $e = H || p, ht(t, e), $e = H, nl = _, mt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || p || nl || $e || la(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                p = l = t;
                try {
                  if (i = p.stateNode, n)
                    s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    o = p.stateNode;
                    var q = p.memoizedProps.style, z = q != null && q.hasOwnProperty("display") ? q.display : null;
                    o.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (k) {
                  Ee(p, p.return, k);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                p = t;
                try {
                  p.stateNode.nodeValue = n ? "" : p.memoizedProps;
                } catch (k) {
                  Ee(p, p.return, k);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                p = t;
                try {
                  var M = p.stateNode;
                  n ? Ud(M, !0) : Ud(p.stateNode, !1);
                } catch (k) {
                  Ee(p, p.return, k);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Zi(e, l))));
        break;
      case 19:
        ht(t, e), mt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Zi(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ht(t, e), mt(e);
    }
  }
  function mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Ho(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, i = tc(e);
            wi(e, i, n);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (ha(s, ""), l.flags &= -33);
            var o = tc(e);
            wi(e, o, s);
            break;
          case 3:
          case 4:
            var p = l.stateNode.containerInfo, _ = tc(e);
            lc(
              e,
              _,
              p
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (H) {
        Ee(e, e.return, H);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function wo(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        wo(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ul(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Bo(e, t.alternate, t), t = t.sibling;
  }
  function la(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _l(4, t, t.return), la(t);
          break;
        case 1:
          Zt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Uo(
            t,
            t.return,
            l
          ), la(t);
          break;
        case 27:
          qn(t.stateNode);
        case 26:
        case 5:
          Zt(t, t.return), la(t);
          break;
        case 22:
          t.memoizedState === null && la(t);
          break;
        case 30:
          la(t);
          break;
        default:
          la(t);
      }
      e = e.sibling;
    }
  }
  function sl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = e, i = t, s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          sl(
            n,
            i,
            l
          ), An(4, i);
          break;
        case 1:
          if (sl(
            n,
            i,
            l
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (_) {
              Ee(a, a.return, _);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var o = a.stateNode;
            try {
              var p = n.shared.hiddenCallbacks;
              if (p !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < p.length; n++)
                  br(p[n], o);
            } catch (_) {
              Ee(a, a.return, _);
            }
          }
          l && s & 64 && Mo(i), Tn(i, i.return);
          break;
        case 27:
          Ro(i);
        case 26:
        case 5:
          sl(
            n,
            i,
            l
          ), l && a === null && s & 4 && Do(i), Tn(i, i.return);
          break;
        case 12:
          sl(
            n,
            i,
            l
          );
          break;
        case 31:
          sl(
            n,
            i,
            l
          ), l && s & 4 && Lo(n, i);
          break;
        case 13:
          sl(
            n,
            i,
            l
          ), l && s & 4 && Qo(n, i);
          break;
        case 22:
          i.memoizedState === null && sl(
            n,
            i,
            l
          ), Tn(i, i.return);
          break;
        case 30:
          break;
        default:
          sl(
            n,
            i,
            l
          );
      }
      t = t.sibling;
    }
  }
  function nc(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && hn(l));
  }
  function ic(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hn(e));
  }
  function Qt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Zo(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function Zo(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Qt(
          e,
          t,
          l,
          a
        ), n & 2048 && An(9, t);
        break;
      case 1:
        Qt(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        Qt(
          e,
          t,
          l,
          a
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hn(e)));
        break;
      case 12:
        if (n & 2048) {
          Qt(
            e,
            t,
            l,
            a
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, s = i.id, o = i.onPostCommit;
            typeof o == "function" && o(
              s,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (p) {
            Ee(t, t.return, p);
          }
        } else
          Qt(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        Qt(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        Qt(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, s = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Qt(
          e,
          t,
          l,
          a
        ) : zn(e, t) : i._visibility & 2 ? Qt(
          e,
          t,
          l,
          a
        ) : (i._visibility |= 2, Da(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && nc(s, t);
        break;
      case 24:
        Qt(
          e,
          t,
          l,
          a
        ), n & 2048 && ic(t.alternate, t);
        break;
      default:
        Qt(
          e,
          t,
          l,
          a
        );
    }
  }
  function Da(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, s = t, o = l, p = a, _ = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Da(
            i,
            s,
            o,
            p,
            n
          ), An(8, s);
          break;
        case 23:
          break;
        case 22:
          var H = s.stateNode;
          s.memoizedState !== null ? H._visibility & 2 ? Da(
            i,
            s,
            o,
            p,
            n
          ) : zn(
            i,
            s
          ) : (H._visibility |= 2, Da(
            i,
            s,
            o,
            p,
            n
          )), n && _ & 2048 && nc(
            s.alternate,
            s
          );
          break;
        case 24:
          Da(
            i,
            s,
            o,
            p,
            n
          ), n && _ & 2048 && ic(s.alternate, s);
          break;
        default:
          Da(
            i,
            s,
            o,
            p,
            n
          );
      }
      t = t.sibling;
    }
  }
  function zn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            zn(l, a), n & 2048 && nc(
              a.alternate,
              a
            );
            break;
          case 24:
            zn(l, a), n & 2048 && ic(a.alternate, a);
            break;
          default:
            zn(l, a);
        }
        t = t.sibling;
      }
  }
  var Cn = 8192;
  function Ha(e, t, l) {
    if (e.subtreeFlags & Cn)
      for (e = e.child; e !== null; )
        $o(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function $o(e, t, l) {
    switch (e.tag) {
      case 26:
        Ha(
          e,
          t,
          l
        ), e.flags & Cn && e.memoizedState !== null && tp(
          l,
          Lt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Ha(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = Lt;
        Lt = nu(e.stateNode.containerInfo), Ha(
          e,
          t,
          l
        ), Lt = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Cn, Cn = 16777216, Ha(
          e,
          t,
          l
        ), Cn = a) : Ha(
          e,
          t,
          l
        ));
        break;
      default:
        Ha(
          e,
          t,
          l
        );
    }
  }
  function Vo(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function On(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          We = a, Jo(
            a,
            e
          );
        }
      Vo(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ko(e), e = e.sibling;
  }
  function Ko(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        On(e), e.flags & 2048 && _l(9, e, e.return);
        break;
      case 3:
        On(e);
        break;
      case 12:
        On(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, $i(e)) : On(e);
        break;
      default:
        On(e);
    }
  }
  function $i(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          We = a, Jo(
            a,
            e
          );
        }
      Vo(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          _l(8, t, t.return), $i(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, $i(t));
          break;
        default:
          $i(t);
      }
      e = e.sibling;
    }
  }
  function Jo(e, t) {
    for (; We !== null; ) {
      var l = We;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          _l(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          hn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, We = a;
      else
        e: for (l = e; We !== null; ) {
          a = We;
          var n = a.sibling, i = a.return;
          if (Yo(a), a === l) {
            We = null;
            break e;
          }
          if (n !== null) {
            n.return = i, We = n;
            break e;
          }
          We = i;
        }
    }
  }
  var pv = {
    getCacheForType: function(e) {
      var t = lt(Xe), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return lt(Xe).controller.signal;
    }
  }, gv = typeof WeakMap == "function" ? WeakMap : Map, xe = 0, ze = null, oe = null, he = 0, Se = 0, At = null, Al = !1, Ra = !1, uc = !1, cl = 0, qe = 0, Tl = 0, aa = 0, sc = 0, Tt = 0, qa = 0, Mn = null, vt = null, cc = !1, Vi = 0, ko = 0, Ki = 1 / 0, Ji = null, zl = null, Je = 0, Cl = null, Ba = null, fl = 0, fc = 0, rc = null, Wo = null, Un = 0, oc = null;
  function zt() {
    return (xe & 2) !== 0 && he !== 0 ? he & -he : D.T !== null ? gc() : of();
  }
  function Fo() {
    if (Tt === 0)
      if ((he & 536870912) === 0 || ve) {
        var e = li;
        li <<= 1, (li & 3932160) === 0 && (li = 262144), Tt = e;
      } else Tt = 536870912;
    return e = Nt.current, e !== null && (e.flags |= 32), Tt;
  }
  function pt(e, t, l) {
    (e === ze && (Se === 2 || Se === 9) || e.cancelPendingCommit !== null) && (Ya(e, 0), Ol(
      e,
      he,
      Tt,
      !1
    )), Ia(e, l), ((xe & 2) === 0 || e !== ze) && (e === ze && ((xe & 2) === 0 && (aa |= l), qe === 4 && Ol(
      e,
      he,
      Tt,
      !1
    )), $t(e));
  }
  function Io(e, t, l) {
    if ((xe & 6) !== 0) throw Error(r(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Fa(e, t), n = a ? xv(e, t) : hc(e, t, !0), i = a;
    do {
      if (n === 0) {
        Ra && !a && Ol(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !yv(l)) {
          n = hc(e, t, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var s = 0;
          else
            s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            t = s;
            e: {
              var o = e;
              n = Mn;
              var p = o.current.memoizedState.isDehydrated;
              if (p && (Ya(o, s).flags |= 256), s = hc(
                o,
                s,
                !1
              ), s !== 2) {
                if (uc && !p) {
                  o.errorRecoveryDisabledLanes |= i, aa |= i, n = 4;
                  break e;
                }
                i = vt, vt = n, i !== null && (vt === null ? vt = i : vt.push.apply(
                  vt,
                  i
                ));
              }
              n = s;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ya(e, 0), Ol(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, i = n, i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ol(
                a,
                t,
                Tt,
                !Al
              );
              break e;
            case 2:
              vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (n = Vi + 300 - bt(), 10 < n)) {
            if (Ol(
              a,
              t,
              Tt,
              !Al
            ), ni(a, 0, !0) !== 0) break e;
            fl = t, a.timeoutHandle = Cd(
              Po.bind(
                null,
                a,
                l,
                vt,
                Ji,
                cc,
                t,
                Tt,
                aa,
                qa,
                Al,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          Po(
            a,
            l,
            vt,
            Ji,
            cc,
            t,
            Tt,
            aa,
            qa,
            Al,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    $t(e);
  }
  function Po(e, t, l, a, n, i, s, o, p, _, H, q, z, M) {
    if (e.timeoutHandle = -1, q = t.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
      q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Jt
      }, $o(
        t,
        i,
        q
      );
      var k = (i & 62914560) === i ? Vi - bt() : (i & 4194048) === i ? ko - bt() : 0;
      if (k = lp(
        q,
        k
      ), k !== null) {
        fl = i, e.cancelPendingCommit = k(
          sd.bind(
            null,
            e,
            t,
            i,
            l,
            a,
            n,
            s,
            o,
            p,
            H,
            q,
            null,
            z,
            M
          )
        ), Ol(e, i, s, !_);
        return;
      }
    }
    sd(
      e,
      t,
      i,
      l,
      a,
      n,
      s,
      o,
      p
    );
  }
  function yv(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!St(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ol(e, t, l, a) {
    t &= ~sc, t &= ~aa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var i = 31 - jt(n), s = 1 << i;
      a[i] = -1, n &= ~s;
    }
    l !== 0 && cf(e, l, t);
  }
  function ki() {
    return (xe & 6) === 0 ? (Dn(0), !1) : !0;
  }
  function dc() {
    if (oe !== null) {
      if (Se === 0)
        var e = oe.return;
      else
        e = oe, It = Jl = null, zs(e), za = null, vn = 0, e = oe;
      for (; e !== null; )
        Oo(e.alternate, e), e = e.return;
      oe = null;
    }
  }
  function Ya(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, Yv(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), fl = 0, dc(), ze = e, oe = l = Wt(e.current, null), he = t, Se = 0, At = null, Al = !1, Ra = Fa(e, t), uc = !1, qa = Tt = sc = aa = Tl = qe = 0, vt = Mn = null, cc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - jt(a), i = 1 << n;
        t |= e[n], a &= ~i;
      }
    return cl = t, pi(), l;
  }
  function ed(e, t) {
    ue = null, D.H = En, t === Ta || t === Ni ? (t = vr(), Se = 3) : t === ps ? (t = vr(), Se = 4) : Se = t === Zs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, At = t, oe === null && (qe = 1, Yi(
      e,
      Ut(t, e.current)
    ));
  }
  function td() {
    var e = Nt.current;
    return e === null ? !0 : (he & 4194048) === he ? qt === null : (he & 62914560) === he || (he & 536870912) !== 0 ? e === qt : !1;
  }
  function ld() {
    var e = D.H;
    return D.H = En, e === null ? En : e;
  }
  function ad() {
    var e = D.A;
    return D.A = pv, e;
  }
  function Wi() {
    qe = 4, Al || (he & 4194048) !== he && Nt.current !== null || (Ra = !0), (Tl & 134217727) === 0 && (aa & 134217727) === 0 || ze === null || Ol(
      ze,
      he,
      Tt,
      !1
    );
  }
  function hc(e, t, l) {
    var a = xe;
    xe |= 2;
    var n = ld(), i = ad();
    (ze !== e || he !== t) && (Ji = null, Ya(e, t)), t = !1;
    var s = qe;
    e: do
      try {
        if (Se !== 0 && oe !== null) {
          var o = oe, p = At;
          switch (Se) {
            case 8:
              dc(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Nt.current === null && (t = !0);
              var _ = Se;
              if (Se = 0, At = null, Ga(e, o, p, _), l && Ra) {
                s = 0;
                break e;
              }
              break;
            default:
              _ = Se, Se = 0, At = null, Ga(e, o, p, _);
          }
        }
        bv(), s = qe;
        break;
      } catch (H) {
        ed(e, H);
      }
    while (!0);
    return t && e.shellSuspendCounter++, It = Jl = null, xe = a, D.H = n, D.A = i, oe === null && (ze = null, he = 0, pi()), s;
  }
  function bv() {
    for (; oe !== null; ) nd(oe);
  }
  function xv(e, t) {
    var l = xe;
    xe |= 2;
    var a = ld(), n = ad();
    ze !== e || he !== t ? (Ji = null, Ki = bt() + 500, Ya(e, t)) : Ra = Fa(
      e,
      t
    );
    e: do
      try {
        if (Se !== 0 && oe !== null) {
          t = oe;
          var i = At;
          t: switch (Se) {
            case 1:
              Se = 0, At = null, Ga(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (hr(i)) {
                Se = 0, At = null, id(t);
                break;
              }
              t = function() {
                Se !== 2 && Se !== 9 || ze !== e || (Se = 7), $t(e);
              }, i.then(t, t);
              break e;
            case 3:
              Se = 7;
              break e;
            case 4:
              Se = 5;
              break e;
            case 7:
              hr(i) ? (Se = 0, At = null, id(t)) : (Se = 0, At = null, Ga(e, t, i, 7));
              break;
            case 5:
              var s = null;
              switch (oe.tag) {
                case 26:
                  s = oe.memoizedState;
                case 5:
                case 27:
                  var o = oe;
                  if (s ? Zd(s) : o.stateNode.complete) {
                    Se = 0, At = null;
                    var p = o.sibling;
                    if (p !== null) oe = p;
                    else {
                      var _ = o.return;
                      _ !== null ? (oe = _, Fi(_)) : oe = null;
                    }
                    break t;
                  }
              }
              Se = 0, At = null, Ga(e, t, i, 5);
              break;
            case 6:
              Se = 0, At = null, Ga(e, t, i, 6);
              break;
            case 8:
              dc(), qe = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        jv();
        break;
      } catch (H) {
        ed(e, H);
      }
    while (!0);
    return It = Jl = null, D.H = a, D.A = n, xe = l, oe !== null ? 0 : (ze = null, he = 0, pi(), qe);
  }
  function jv() {
    for (; oe !== null && !Zh(); )
      nd(oe);
  }
  function nd(e) {
    var t = zo(e.alternate, e, cl);
    e.memoizedProps = e.pendingProps, t === null ? Fi(e) : oe = t;
  }
  function id(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = So(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          he
        );
        break;
      case 11:
        t = So(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          he
        );
        break;
      case 5:
        zs(t);
      default:
        Oo(l, t), t = oe = lr(t, cl), t = zo(l, t, cl);
    }
    e.memoizedProps = e.pendingProps, t === null ? Fi(e) : oe = t;
  }
  function Ga(e, t, l, a) {
    It = Jl = null, zs(t), za = null, vn = 0;
    var n = t.return;
    try {
      if (fv(
        e,
        n,
        t,
        l,
        he
      )) {
        qe = 1, Yi(
          e,
          Ut(l, e.current)
        ), oe = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw oe = n, i;
      qe = 1, Yi(
        e,
        Ut(l, e.current)
      ), oe = null;
      return;
    }
    t.flags & 32768 ? (ve || a === 1 ? e = !0 : Ra || (he & 536870912) !== 0 ? e = !1 : (Al = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Nt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), ud(t, e)) : Fi(t);
  }
  function Fi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        ud(
          t,
          Al
        );
        return;
      }
      e = t.return;
      var l = dv(
        t.alternate,
        t,
        cl
      );
      if (l !== null) {
        oe = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        oe = t;
        return;
      }
      oe = t = e;
    } while (t !== null);
    qe === 0 && (qe = 5);
  }
  function ud(e, t) {
    do {
      var l = hv(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, oe = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        oe = e;
        return;
      }
      oe = e = l;
    } while (e !== null);
    qe = 6, oe = null;
  }
  function sd(e, t, l, a, n, i, s, o, p) {
    e.cancelPendingCommit = null;
    do
      Ii();
    while (Je !== 0);
    if ((xe & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (i = t.lanes | t.childLanes, i |= ts, em(
        e,
        l,
        i,
        s,
        o,
        p
      ), e === ze && (oe = ze = null, he = 0), Ba = t, Cl = e, fl = l, fc = i, rc = n, Wo = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, _v(ei, function() {
        return dd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = D.T, D.T = null, n = C.p, C.p = 2, s = xe, xe |= 4;
        try {
          mv(e, t, l);
        } finally {
          xe = s, C.p = n, D.T = a;
        }
      }
      Je = 1, cd(), fd(), rd();
    }
  }
  function cd() {
    if (Je === 1) {
      Je = 0;
      var e = Cl, t = Ba, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = D.T, D.T = null;
        var a = C.p;
        C.p = 2;
        var n = xe;
        xe |= 4;
        try {
          Xo(t, e);
          var i = _c, s = Kf(e.containerInfo), o = i.focusedElem, p = i.selectionRange;
          if (s !== o && o && o.ownerDocument && Vf(
            o.ownerDocument.documentElement,
            o
          )) {
            if (p !== null && Wu(o)) {
              var _ = p.start, H = p.end;
              if (H === void 0 && (H = _), "selectionStart" in o)
                o.selectionStart = _, o.selectionEnd = Math.min(
                  H,
                  o.value.length
                );
              else {
                var q = o.ownerDocument || document, z = q && q.defaultView || window;
                if (z.getSelection) {
                  var M = z.getSelection(), k = o.textContent.length, le = Math.min(p.start, k), Ae = p.end === void 0 ? le : Math.min(p.end, k);
                  !M.extend && le > Ae && (s = Ae, Ae = le, le = s);
                  var S = $f(
                    o,
                    le
                  ), b = $f(
                    o,
                    Ae
                  );
                  if (S && b && (M.rangeCount !== 1 || M.anchorNode !== S.node || M.anchorOffset !== S.offset || M.focusNode !== b.node || M.focusOffset !== b.offset)) {
                    var N = q.createRange();
                    N.setStart(S.node, S.offset), M.removeAllRanges(), le > Ae ? (M.addRange(N), M.extend(b.node, b.offset)) : (N.setEnd(b.node, b.offset), M.addRange(N));
                  }
                }
              }
            }
            for (q = [], M = o; M = M.parentNode; )
              M.nodeType === 1 && q.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < q.length; o++) {
              var R = q[o];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          ru = !!Nc, _c = Nc = null;
        } finally {
          xe = n, C.p = a, D.T = l;
        }
      }
      e.current = t, Je = 2;
    }
  }
  function fd() {
    if (Je === 2) {
      Je = 0;
      var e = Cl, t = Ba, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = D.T, D.T = null;
        var a = C.p;
        C.p = 2;
        var n = xe;
        xe |= 4;
        try {
          Bo(e, t.alternate, t);
        } finally {
          xe = n, C.p = a, D.T = l;
        }
      }
      Je = 3;
    }
  }
  function rd() {
    if (Je === 4 || Je === 3) {
      Je = 0, $h();
      var e = Cl, t = Ba, l = fl, a = Wo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Je = 5 : (Je = 0, Ba = Cl = null, od(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (zl = null), Mu(l), t = t.stateNode, xt && typeof xt.onCommitFiberRoot == "function")
        try {
          xt.onCommitFiberRoot(
            Wa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = D.T, n = C.p, C.p = 2, D.T = null;
        try {
          for (var i = e.onRecoverableError, s = 0; s < a.length; s++) {
            var o = a[s];
            i(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          D.T = t, C.p = n;
        }
      }
      (fl & 3) !== 0 && Ii(), $t(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === oc ? Un++ : (Un = 0, oc = e) : Un = 0, Dn(0);
    }
  }
  function od(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, hn(t)));
  }
  function Ii() {
    return cd(), fd(), rd(), dd();
  }
  function dd() {
    if (Je !== 5) return !1;
    var e = Cl, t = fc;
    fc = 0;
    var l = Mu(fl), a = D.T, n = C.p;
    try {
      C.p = 32 > l ? 32 : l, D.T = null, l = rc, rc = null;
      var i = Cl, s = fl;
      if (Je = 0, Ba = Cl = null, fl = 0, (xe & 6) !== 0) throw Error(r(331));
      var o = xe;
      if (xe |= 4, Ko(i.current), Zo(
        i,
        i.current,
        s,
        l
      ), xe = o, Dn(0, !1), xt && typeof xt.onPostCommitFiberRoot == "function")
        try {
          xt.onPostCommitFiberRoot(Wa, i);
        } catch {
        }
      return !0;
    } finally {
      C.p = n, D.T = a, od(e, t);
    }
  }
  function hd(e, t, l) {
    t = Ut(l, t), t = ws(e.stateNode, t, 2), e = Sl(e, t, 2), e !== null && (Ia(e, 2), $t(e));
  }
  function Ee(e, t, l) {
    if (e.tag === 3)
      hd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          hd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (zl === null || !zl.has(a))) {
            e = Ut(l, e), l = mo(2), a = Sl(t, l, 2), a !== null && (vo(
              l,
              a,
              t,
              e
            ), Ia(a, 2), $t(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function mc(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new gv();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(l) || (uc = !0, n.add(l), e = Sv.bind(null, e, t, l), t.then(e, e));
  }
  function Sv(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, ze === e && (he & l) === l && (qe === 4 || qe === 3 && (he & 62914560) === he && 300 > bt() - Vi ? (xe & 2) === 0 && Ya(e, 0) : sc |= l, qa === he && (qa = 0)), $t(e);
  }
  function md(e, t) {
    t === 0 && (t = sf()), e = $l(e, t), e !== null && (Ia(e, t), $t(e));
  }
  function Ev(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), md(e, l);
  }
  function Nv(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(t), md(e, l);
  }
  function _v(e, t) {
    return Tu(e, t);
  }
  var Pi = null, La = null, vc = !1, eu = !1, pc = !1, Ml = 0;
  function $t(e) {
    e !== La && e.next === null && (La === null ? Pi = La = e : La = La.next = e), eu = !0, vc || (vc = !0, Tv());
  }
  function Dn(e, t) {
    if (!pc && eu) {
      pc = !0;
      do
        for (var l = !1, a = Pi; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var s = a.suspendedLanes, o = a.pingedLanes;
              i = (1 << 31 - jt(42 | e) + 1) - 1, i &= n & ~(s & ~o), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, yd(a, i));
          } else
            i = he, i = ni(
              a,
              a === ze ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || Fa(a, i) || (l = !0, yd(a, i));
          a = a.next;
        }
      while (l);
      pc = !1;
    }
  }
  function Av() {
    vd();
  }
  function vd() {
    eu = vc = !1;
    var e = 0;
    Ml !== 0 && Bv() && (e = Ml);
    for (var t = bt(), l = null, a = Pi; a !== null; ) {
      var n = a.next, i = pd(a, t);
      i === 0 ? (a.next = null, l === null ? Pi = n : l.next = n, n === null && (La = l)) : (l = a, (e !== 0 || (i & 3) !== 0) && (eu = !0)), a = n;
    }
    Je !== 0 && Je !== 5 || Dn(e), Ml !== 0 && (Ml = 0);
  }
  function pd(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var s = 31 - jt(i), o = 1 << s, p = n[s];
      p === -1 ? ((o & l) === 0 || (o & a) !== 0) && (n[s] = Ph(o, t)) : p <= t && (e.expiredLanes |= o), i &= ~o;
    }
    if (t = ze, l = he, l = ni(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (Se === 2 || Se === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && zu(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Fa(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && zu(a), Mu(l)) {
        case 2:
        case 8:
          l = nf;
          break;
        case 32:
          l = ei;
          break;
        case 268435456:
          l = uf;
          break;
        default:
          l = ei;
      }
      return a = gd.bind(null, e), l = Tu(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && zu(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function gd(e, t) {
    if (Je !== 0 && Je !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Ii() && e.callbackNode !== l)
      return null;
    var a = he;
    return a = ni(
      e,
      e === ze ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Io(e, a, t), pd(e, bt()), e.callbackNode != null && e.callbackNode === l ? gd.bind(null, e) : null);
  }
  function yd(e, t) {
    if (Ii()) return null;
    Io(e, t, !0);
  }
  function Tv() {
    Gv(function() {
      (xe & 6) !== 0 ? Tu(
        af,
        Av
      ) : vd();
    });
  }
  function gc() {
    if (Ml === 0) {
      var e = _a;
      e === 0 && (e = ti, ti <<= 1, (ti & 261888) === 0 && (ti = 256)), Ml = e;
    }
    return Ml;
  }
  function bd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ci("" + e);
  }
  function xd(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function zv(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var i = bd(
        (n[rt] || null).action
      ), s = a.submitter;
      s && (t = (t = s[rt] || null) ? bd(t.formAction) : s.getAttribute("formAction"), t !== null && (i = t, s = null));
      var o = new di(
        "action",
        "action",
        null,
        a,
        n
      );
      e.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ml !== 0) {
                  var p = s ? xd(n, s) : new FormData(n);
                  Bs(
                    l,
                    {
                      pending: !0,
                      data: p,
                      method: n.method,
                      action: i
                    },
                    null,
                    p
                  );
                }
              } else
                typeof i == "function" && (o.preventDefault(), p = s ? xd(n, s) : new FormData(n), Bs(
                  l,
                  {
                    pending: !0,
                    data: p,
                    method: n.method,
                    action: i
                  },
                  i,
                  p
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var yc = 0; yc < es.length; yc++) {
    var bc = es[yc], Cv = bc.toLowerCase(), Ov = bc[0].toUpperCase() + bc.slice(1);
    Gt(
      Cv,
      "on" + Ov
    );
  }
  Gt(Wf, "onAnimationEnd"), Gt(Ff, "onAnimationIteration"), Gt(If, "onAnimationStart"), Gt("dblclick", "onDoubleClick"), Gt("focusin", "onFocus"), Gt("focusout", "onBlur"), Gt(Vm, "onTransitionRun"), Gt(Km, "onTransitionStart"), Gt(Jm, "onTransitionCancel"), Gt(Pf, "onTransitionEnd"), oa("onMouseEnter", ["mouseout", "mouseover"]), oa("onMouseLeave", ["mouseout", "mouseover"]), oa("onPointerEnter", ["pointerout", "pointerover"]), oa("onPointerLeave", ["pointerout", "pointerover"]), Ql(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ql(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ql("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ql(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ql(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ql(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Mv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hn)
  );
  function jd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var s = a.length - 1; 0 <= s; s--) {
            var o = a[s], p = o.instance, _ = o.currentTarget;
            if (o = o.listener, p !== i && n.isPropagationStopped())
              break e;
            i = o, n.currentTarget = _;
            try {
              i(n);
            } catch (H) {
              vi(H);
            }
            n.currentTarget = null, i = p;
          }
        else
          for (s = 0; s < a.length; s++) {
            if (o = a[s], p = o.instance, _ = o.currentTarget, o = o.listener, p !== i && n.isPropagationStopped())
              break e;
            i = o, n.currentTarget = _;
            try {
              i(n);
            } catch (H) {
              vi(H);
            }
            n.currentTarget = null, i = p;
          }
      }
    }
  }
  function de(e, t) {
    var l = t[Uu];
    l === void 0 && (l = t[Uu] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (Sd(t, e, 2, !1), l.add(a));
  }
  function xc(e, t, l) {
    var a = 0;
    t && (a |= 4), Sd(
      l,
      e,
      a,
      t
    );
  }
  var tu = "_reactListening" + Math.random().toString(36).slice(2);
  function jc(e) {
    if (!e[tu]) {
      e[tu] = !0, mf.forEach(function(l) {
        l !== "selectionchange" && (Mv.has(l) || xc(l, !1, e), xc(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[tu] || (t[tu] = !0, xc("selectionchange", !1, t));
    }
  }
  function Sd(e, t, l, a) {
    switch (Fd(t)) {
      case 2:
        var n = ip;
        break;
      case 8:
        n = up;
        break;
      default:
        n = qc;
    }
    l = n.bind(
      null,
      t,
      l,
      e
    ), n = void 0, !Qu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1);
  }
  function Sc(e, t, l, a, n) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var s = a.tag;
        if (s === 3 || s === 4) {
          var o = a.stateNode.containerInfo;
          if (o === n) break;
          if (s === 4)
            for (s = a.return; s !== null; ) {
              var p = s.tag;
              if ((p === 3 || p === 4) && s.stateNode.containerInfo === n)
                return;
              s = s.return;
            }
          for (; o !== null; ) {
            if (s = ca(o), s === null) return;
            if (p = s.tag, p === 5 || p === 6 || p === 26 || p === 27) {
              a = i = s;
              continue e;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
    Af(function() {
      var _ = i, H = Gu(l), q = [];
      e: {
        var z = er.get(e);
        if (z !== void 0) {
          var M = di, k = e;
          switch (e) {
            case "keypress":
              if (ri(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = Nm;
              break;
            case "focusin":
              k = "focus", M = $u;
              break;
            case "focusout":
              k = "blur", M = $u;
              break;
            case "beforeblur":
            case "afterblur":
              M = $u;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              M = Cf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = dm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = Tm;
              break;
            case Wf:
            case Ff:
            case If:
              M = vm;
              break;
            case Pf:
              M = Cm;
              break;
            case "scroll":
            case "scrollend":
              M = rm;
              break;
            case "wheel":
              M = Mm;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = gm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = Mf;
              break;
            case "toggle":
            case "beforetoggle":
              M = Dm;
          }
          var le = (t & 4) !== 0, Ae = !le && (e === "scroll" || e === "scrollend"), S = le ? z !== null ? z + "Capture" : null : z;
          le = [];
          for (var b = _, N; b !== null; ) {
            var R = b;
            if (N = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || N === null || S === null || (R = tn(b, S), R != null && le.push(
              Rn(b, R, N)
            )), Ae) break;
            b = b.return;
          }
          0 < le.length && (z = new M(
            z,
            k,
            null,
            l,
            H
          ), q.push({ event: z, listeners: le }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", z && l !== Yu && (k = l.relatedTarget || l.fromElement) && (ca(k) || k[sa]))
            break e;
          if ((M || z) && (z = H.window === H ? H : (z = H.ownerDocument) ? z.defaultView || z.parentWindow : window, M ? (k = l.relatedTarget || l.toElement, M = _, k = k ? ca(k) : null, k !== null && (Ae = E(k), le = k.tag, k !== Ae || le !== 5 && le !== 27 && le !== 6) && (k = null)) : (M = null, k = _), M !== k)) {
            if (le = Cf, R = "onMouseLeave", S = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (le = Mf, R = "onPointerLeave", S = "onPointerEnter", b = "pointer"), Ae = M == null ? z : en(M), N = k == null ? z : en(k), z = new le(
              R,
              b + "leave",
              M,
              l,
              H
            ), z.target = Ae, z.relatedTarget = N, R = null, ca(H) === _ && (le = new le(
              S,
              b + "enter",
              k,
              l,
              H
            ), le.target = N, le.relatedTarget = Ae, R = le), Ae = R, M && k)
              t: {
                for (le = Uv, S = M, b = k, N = 0, R = S; R; R = le(R))
                  N++;
                R = 0;
                for (var ee = b; ee; ee = le(ee))
                  R++;
                for (; 0 < N - R; )
                  S = le(S), N--;
                for (; 0 < R - N; )
                  b = le(b), R--;
                for (; N--; ) {
                  if (S === b || b !== null && S === b.alternate) {
                    le = S;
                    break t;
                  }
                  S = le(S), b = le(b);
                }
                le = null;
              }
            else le = null;
            M !== null && Ed(
              q,
              z,
              M,
              le,
              !1
            ), k !== null && Ae !== null && Ed(
              q,
              Ae,
              k,
              le,
              !0
            );
          }
        }
        e: {
          if (z = _ ? en(_) : window, M = z.nodeName && z.nodeName.toLowerCase(), M === "select" || M === "input" && z.type === "file")
            var ge = Gf;
          else if (Bf(z))
            if (Lf)
              ge = wm;
            else {
              ge = Qm;
              var F = Lm;
            }
          else
            M = z.nodeName, !M || M.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? _ && Bu(_.elementType) && (ge = Gf) : ge = Xm;
          if (ge && (ge = ge(e, _))) {
            Yf(
              q,
              ge,
              l,
              H
            );
            break e;
          }
          F && F(e, z, _), e === "focusout" && _ && z.type === "number" && _.memoizedProps.value != null && qu(z, "number", z.value);
        }
        switch (F = _ ? en(_) : window, e) {
          case "focusin":
            (Bf(F) || F.contentEditable === "true") && (ga = F, Fu = _, rn = null);
            break;
          case "focusout":
            rn = Fu = ga = null;
            break;
          case "mousedown":
            Iu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Iu = !1, Jf(q, l, H);
            break;
          case "selectionchange":
            if ($m) break;
          case "keydown":
          case "keyup":
            Jf(q, l, H);
        }
        var se;
        if (Ku)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          pa ? Rf(e, l) && (me = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (me = "onCompositionStart");
        me && (Uf && l.locale !== "ko" && (pa || me !== "onCompositionStart" ? me === "onCompositionEnd" && pa && (se = Tf()) : (vl = H, Xu = "value" in vl ? vl.value : vl.textContent, pa = !0)), F = lu(_, me), 0 < F.length && (me = new Of(
          me,
          e,
          null,
          l,
          H
        ), q.push({ event: me, listeners: F }), se ? me.data = se : (se = qf(l), se !== null && (me.data = se)))), (se = Rm ? qm(e, l) : Bm(e, l)) && (me = lu(_, "onBeforeInput"), 0 < me.length && (F = new Of(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          H
        ), q.push({
          event: F,
          listeners: me
        }), F.data = se)), zv(
          q,
          e,
          _,
          l,
          H
        );
      }
      jd(q, t);
    });
  }
  function Rn(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function lu(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = tn(e, l), n != null && a.unshift(
        Rn(e, n, i)
      ), n = tn(e, t), n != null && a.push(
        Rn(e, n, i)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function Uv(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ed(e, t, l, a, n) {
    for (var i = t._reactName, s = []; l !== null && l !== a; ) {
      var o = l, p = o.alternate, _ = o.stateNode;
      if (o = o.tag, p !== null && p === a) break;
      o !== 5 && o !== 26 && o !== 27 || _ === null || (p = _, n ? (_ = tn(l, i), _ != null && s.unshift(
        Rn(l, _, p)
      )) : n || (_ = tn(l, i), _ != null && s.push(
        Rn(l, _, p)
      ))), l = l.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Dv = /\r\n?/g, Hv = /\u0000|\uFFFD/g;
  function Nd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Dv, `
`).replace(Hv, "");
  }
  function _d(e, t) {
    return t = Nd(t), Nd(e) === t;
  }
  function _e(e, t, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ha(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ha(e, "" + a);
        break;
      case "className":
        ui(e, "class", a);
        break;
      case "tabIndex":
        ui(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ui(e, l, a);
        break;
      case "style":
        Nf(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          ui(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = ci("" + a), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (t !== "input" && _e(e, t, "name", n.name, n, null), _e(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), _e(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), _e(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (_e(e, t, "encType", n.encType, n, null), _e(e, t, "method", n.method, n, null), _e(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = ci("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Jt);
        break;
      case "onScroll":
        a != null && de("scroll", e);
        break;
      case "onScrollEnd":
        a != null && de("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = ci("" + a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
        break;
      case "popover":
        de("beforetoggle", e), de("toggle", e), ii(e, "popover", a);
        break;
      case "xlinkActuate":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Kt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Kt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Kt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        ii(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = cm.get(l) || l, ii(e, l, a));
    }
  }
  function Ec(e, t, l, a, n, i) {
    switch (l) {
      case "style":
        Nf(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ha(e, a) : (typeof a == "number" || typeof a == "bigint") && ha(e, "" + a);
        break;
      case "onScroll":
        a != null && de("scroll", e);
        break;
      case "onScrollEnd":
        a != null && de("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Jt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!vf.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), i = e[rt] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof a == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : ii(e, l, a);
          }
    }
  }
  function nt(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        de("error", e), de("load", e);
        var a = !1, n = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var s = l[i];
            if (s != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  _e(e, t, i, s, l, null);
              }
          }
        n && _e(e, t, "srcSet", l.srcSet, l, null), a && _e(e, t, "src", l.src, l, null);
        return;
      case "input":
        de("invalid", e);
        var o = i = s = n = null, p = null, _ = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var H = l[a];
            if (H != null)
              switch (a) {
                case "name":
                  n = H;
                  break;
                case "type":
                  s = H;
                  break;
                case "checked":
                  p = H;
                  break;
                case "defaultChecked":
                  _ = H;
                  break;
                case "value":
                  i = H;
                  break;
                case "defaultValue":
                  o = H;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null)
                    throw Error(r(137, t));
                  break;
                default:
                  _e(e, t, a, H, l, null);
              }
          }
        xf(
          e,
          i,
          o,
          p,
          _,
          s,
          n,
          !1
        );
        return;
      case "select":
        de("invalid", e), a = s = i = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (o = l[n], o != null))
            switch (n) {
              case "value":
                i = o;
                break;
              case "defaultValue":
                s = o;
                break;
              case "multiple":
                a = o;
              default:
                _e(e, t, n, o, l, null);
            }
        t = i, l = s, e.multiple = !!a, t != null ? da(e, !!a, t, !1) : l != null && da(e, !!a, l, !0);
        return;
      case "textarea":
        de("invalid", e), i = n = a = null;
        for (s in l)
          if (l.hasOwnProperty(s) && (o = l[s], o != null))
            switch (s) {
              case "value":
                a = o;
                break;
              case "defaultValue":
                n = o;
                break;
              case "children":
                i = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                _e(e, t, s, o, l, null);
            }
        Sf(e, a, n, i);
        return;
      case "option":
        for (p in l)
          if (l.hasOwnProperty(p) && (a = l[p], a != null))
            switch (p) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                _e(e, t, p, a, l, null);
            }
        return;
      case "dialog":
        de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
        break;
      case "iframe":
      case "object":
        de("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Hn.length; a++)
          de(Hn[a], e);
        break;
      case "image":
        de("error", e), de("load", e);
        break;
      case "details":
        de("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        de("error", e), de("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in l)
          if (l.hasOwnProperty(_) && (a = l[_], a != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                _e(e, t, _, a, l, null);
            }
        return;
      default:
        if (Bu(t)) {
          for (H in l)
            l.hasOwnProperty(H) && (a = l[H], a !== void 0 && Ec(
              e,
              t,
              H,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (o in l)
      l.hasOwnProperty(o) && (a = l[o], a != null && _e(e, t, o, a, l, null));
  }
  function Rv(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, i = null, s = null, o = null, p = null, _ = null, H = null;
        for (M in l) {
          var q = l[M];
          if (l.hasOwnProperty(M) && q != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                p = q;
              default:
                a.hasOwnProperty(M) || _e(e, t, M, null, a, q);
            }
        }
        for (var z in a) {
          var M = a[z];
          if (q = l[z], a.hasOwnProperty(z) && (M != null || q != null))
            switch (z) {
              case "type":
                i = M;
                break;
              case "name":
                n = M;
                break;
              case "checked":
                _ = M;
                break;
              case "defaultChecked":
                H = M;
                break;
              case "value":
                s = M;
                break;
              case "defaultValue":
                o = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(r(137, t));
                break;
              default:
                M !== q && _e(
                  e,
                  t,
                  z,
                  M,
                  a,
                  q
                );
            }
        }
        Ru(
          e,
          s,
          o,
          p,
          _,
          H,
          i,
          n
        );
        return;
      case "select":
        M = s = o = z = null;
        for (i in l)
          if (p = l[i], l.hasOwnProperty(i) && p != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                M = p;
              default:
                a.hasOwnProperty(i) || _e(
                  e,
                  t,
                  i,
                  null,
                  a,
                  p
                );
            }
        for (n in a)
          if (i = a[n], p = l[n], a.hasOwnProperty(n) && (i != null || p != null))
            switch (n) {
              case "value":
                z = i;
                break;
              case "defaultValue":
                o = i;
                break;
              case "multiple":
                s = i;
              default:
                i !== p && _e(
                  e,
                  t,
                  n,
                  i,
                  a,
                  p
                );
            }
        t = o, l = s, a = M, z != null ? da(e, !!l, z, !1) : !!a != !!l && (t != null ? da(e, !!l, t, !0) : da(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        M = z = null;
        for (o in l)
          if (n = l[o], l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o))
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                _e(e, t, o, null, a, n);
            }
        for (s in a)
          if (n = a[s], i = l[s], a.hasOwnProperty(s) && (n != null || i != null))
            switch (s) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                M = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== i && _e(e, t, s, n, a, i);
            }
        jf(e, z, M);
        return;
      case "option":
        for (var k in l)
          if (z = l[k], l.hasOwnProperty(k) && z != null && !a.hasOwnProperty(k))
            switch (k) {
              case "selected":
                e.selected = !1;
                break;
              default:
                _e(
                  e,
                  t,
                  k,
                  null,
                  a,
                  z
                );
            }
        for (p in a)
          if (z = a[p], M = l[p], a.hasOwnProperty(p) && z !== M && (z != null || M != null))
            switch (p) {
              case "selected":
                e.selected = z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                _e(
                  e,
                  t,
                  p,
                  z,
                  a,
                  M
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var le in l)
          z = l[le], l.hasOwnProperty(le) && z != null && !a.hasOwnProperty(le) && _e(e, t, le, null, a, z);
        for (_ in a)
          if (z = a[_], M = l[_], a.hasOwnProperty(_) && z !== M && (z != null || M != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(r(137, t));
                break;
              default:
                _e(
                  e,
                  t,
                  _,
                  z,
                  a,
                  M
                );
            }
        return;
      default:
        if (Bu(t)) {
          for (var Ae in l)
            z = l[Ae], l.hasOwnProperty(Ae) && z !== void 0 && !a.hasOwnProperty(Ae) && Ec(
              e,
              t,
              Ae,
              void 0,
              a,
              z
            );
          for (H in a)
            z = a[H], M = l[H], !a.hasOwnProperty(H) || z === M || z === void 0 && M === void 0 || Ec(
              e,
              t,
              H,
              z,
              a,
              M
            );
          return;
        }
    }
    for (var S in l)
      z = l[S], l.hasOwnProperty(S) && z != null && !a.hasOwnProperty(S) && _e(e, t, S, null, a, z);
    for (q in a)
      z = a[q], M = l[q], !a.hasOwnProperty(q) || z === M || z == null && M == null || _e(e, t, q, z, a, M);
  }
  function Ad(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function qv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], i = n.transferSize, s = n.initiatorType, o = n.duration;
        if (i && o && Ad(s)) {
          for (s = 0, o = n.responseEnd, a += 1; a < l.length; a++) {
            var p = l[a], _ = p.startTime;
            if (_ > o) break;
            var H = p.transferSize, q = p.initiatorType;
            H && Ad(q) && (p = p.responseEnd, s += H * (p < o ? 1 : (o - _) / (p - _)));
          }
          if (--a, t += 8 * (i + s) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Nc = null, _c = null;
  function au(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Td(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Ac(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Tc = null;
  function Bv() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Tc ? !1 : (Tc = e, !0) : (Tc = null, !1);
  }
  var Cd = typeof setTimeout == "function" ? setTimeout : void 0, Yv = typeof clearTimeout == "function" ? clearTimeout : void 0, Od = typeof Promise == "function" ? Promise : void 0, Gv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Od < "u" ? function(e) {
    return Od.resolve(null).then(e).catch(Lv);
  } : Cd;
  function Lv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ul(e) {
    return e === "head";
  }
  function Md(e, t) {
    var l = t, a = 0;
    do {
      var n = l.nextSibling;
      if (e.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), Za(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          qn(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, qn(l);
          for (var i = l.firstChild; i; ) {
            var s = i.nextSibling, o = i.nodeName;
            i[Pa] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = s;
          }
        } else
          l === "body" && qn(e.ownerDocument.body);
      l = n;
    } while (l);
    Za(t);
  }
  function Ud(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = a;
    } while (l);
  }
  function zc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          zc(l), Du(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Qv(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Pa])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = Bt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Xv(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Dd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Cc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Oc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function wv(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function Bt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Mc = null;
  function Hd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Bt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Rd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function qd(e, t, l) {
    switch (t = au(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function qn(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Du(e);
  }
  var Yt = /* @__PURE__ */ new Map(), Bd = /* @__PURE__ */ new Set();
  function nu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var rl = C.d;
  C.d = {
    f: Zv,
    r: $v,
    D: Vv,
    C: Kv,
    L: Jv,
    m: kv,
    X: Fv,
    S: Wv,
    M: Iv
  };
  function Zv() {
    var e = rl.f(), t = ki();
    return e || t;
  }
  function $v(e) {
    var t = fa(e);
    t !== null && t.tag === 5 && t.type === "form" ? Pr(t) : rl.r(e);
  }
  var Qa = typeof document > "u" ? null : document;
  function Yd(e, t, l) {
    var a = Qa;
    if (a && typeof t == "string" && t) {
      var n = Ot(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Bd.has(n) || (Bd.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), nt(t, "link", e), ke(t), a.head.appendChild(t)));
    }
  }
  function Vv(e) {
    rl.D(e), Yd("dns-prefetch", e, null);
  }
  function Kv(e, t) {
    rl.C(e, t), Yd("preconnect", e, t);
  }
  function Jv(e, t, l) {
    rl.L(e, t, l);
    var a = Qa;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Ot(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Ot(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Ot(
        l.imageSizes
      ) + '"]')) : n += '[href="' + Ot(e) + '"]';
      var i = n;
      switch (t) {
        case "style":
          i = Xa(e);
          break;
        case "script":
          i = wa(e);
      }
      Yt.has(i) || (e = U(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Yt.set(i, e), a.querySelector(n) !== null || t === "style" && a.querySelector(Bn(i)) || t === "script" && a.querySelector(Yn(i)) || (t = a.createElement("link"), nt(t, "link", e), ke(t), a.head.appendChild(t)));
    }
  }
  function kv(e, t) {
    rl.m(e, t);
    var l = Qa;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Ot(a) + '"][href="' + Ot(e) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = wa(e);
      }
      if (!Yt.has(i) && (e = U({ rel: "modulepreload", href: e }, t), Yt.set(i, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Yn(i)))
              return;
        }
        a = l.createElement("link"), nt(a, "link", e), ke(a), l.head.appendChild(a);
      }
    }
  }
  function Wv(e, t, l) {
    rl.S(e, t, l);
    var a = Qa;
    if (a && e) {
      var n = ra(a).hoistableStyles, i = Xa(e);
      t = t || "default";
      var s = n.get(i);
      if (!s) {
        var o = { loading: 0, preload: null };
        if (s = a.querySelector(
          Bn(i)
        ))
          o.loading = 5;
        else {
          e = U(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Yt.get(i)) && Uc(e, l);
          var p = s = a.createElement("link");
          ke(p), nt(p, "link", e), p._p = new Promise(function(_, H) {
            p.onload = _, p.onerror = H;
          }), p.addEventListener("load", function() {
            o.loading |= 1;
          }), p.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, iu(s, t, a);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: o
        }, n.set(i, s);
      }
    }
  }
  function Fv(e, t) {
    rl.X(e, t);
    var l = Qa;
    if (l && e) {
      var a = ra(l).hoistableScripts, n = wa(e), i = a.get(n);
      i || (i = l.querySelector(Yn(n)), i || (e = U({ src: e, async: !0 }, t), (t = Yt.get(n)) && Dc(e, t), i = l.createElement("script"), ke(i), nt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Iv(e, t) {
    rl.M(e, t);
    var l = Qa;
    if (l && e) {
      var a = ra(l).hoistableScripts, n = wa(e), i = a.get(n);
      i || (i = l.querySelector(Yn(n)), i || (e = U({ src: e, async: !0, type: "module" }, t), (t = Yt.get(n)) && Dc(e, t), i = l.createElement("script"), ke(i), nt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Gd(e, t, l, a) {
    var n = (n = te.current) ? nu(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Xa(l.href), l = ra(
          n
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Xa(l.href);
          var i = ra(
            n
          ).hoistableStyles, s = i.get(e);
          if (s || (n = n.ownerDocument || n, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, s), (i = n.querySelector(
            Bn(e)
          )) && !i._p && (s.instance = i, s.state.loading = 5), Yt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Yt.set(e, l), i || Pv(
            n,
            e,
            l,
            s.state
          ))), t && a === null)
            throw Error(r(528, ""));
          return s;
        }
        if (t && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = wa(l), l = ra(
          n
        ).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function Xa(e) {
    return 'href="' + Ot(e) + '"';
  }
  function Bn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ld(e) {
    return U({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Pv(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), nt(t, "link", l), ke(t), e.head.appendChild(t));
  }
  function wa(e) {
    return '[src="' + Ot(e) + '"]';
  }
  function Yn(e) {
    return "script[async]" + e;
  }
  function Qd(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Ot(l.href) + '"]'
          );
          if (a)
            return t.instance = a, ke(a), a;
          var n = U({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), ke(a), nt(a, "style", n), iu(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = Xa(l.href);
          var i = e.querySelector(
            Bn(n)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, ke(i), i;
          a = Ld(l), (n = Yt.get(n)) && Uc(a, n), i = (e.ownerDocument || e).createElement("link"), ke(i);
          var s = i;
          return s._p = new Promise(function(o, p) {
            s.onload = o, s.onerror = p;
          }), nt(i, "link", a), t.state.loading |= 4, iu(i, l.precedence, e), t.instance = i;
        case "script":
          return i = wa(l.src), (n = e.querySelector(
            Yn(i)
          )) ? (t.instance = n, ke(n), n) : (a = l, (n = Yt.get(i)) && (a = U({}, l), Dc(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), ke(n), nt(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, iu(a, l.precedence, e));
    return t.instance;
  }
  function iu(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, s = 0; s < a.length; s++) {
      var o = a[s];
      if (o.dataset.precedence === t) i = o;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Uc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Dc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var uu = null;
  function Xd(e, t, l) {
    if (uu === null) {
      var a = /* @__PURE__ */ new Map(), n = uu = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = uu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var i = l[n];
      if (!(i[Pa] || i[et] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = i.getAttribute(t) || "";
        s = e + s;
        var o = a.get(s);
        o ? o.push(i) : a.set(s, [i]);
      }
    }
    return a;
  }
  function wd(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function ep(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Zd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function tp(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Xa(a.href), i = t.querySelector(
          Bn(n)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = su.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, ke(i);
          return;
        }
        i = t.ownerDocument || t, a = Ld(a), (n = Yt.get(n)) && Uc(a, n), i = i.createElement("link"), ke(i);
        var s = i;
        s._p = new Promise(function(o, p) {
          s.onload = o, s.onerror = p;
        }), nt(i, "link", a), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = su.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Hc = 0;
  function lp(e, t) {
    return e.stylesheets && e.count === 0 && fu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && fu(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Hc === 0 && (Hc = 62500 * qv());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && fu(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > Hc ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function su() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) fu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var cu = null;
  function fu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, cu = /* @__PURE__ */ new Map(), t.forEach(ap, e), cu = null, su.call(e));
  }
  function ap(e, t) {
    if (!(t.state.loading & 4)) {
      var l = cu.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), cu.set(e, l);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var s = n[i];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), a = s);
        }
        a && l.set(null, a);
      }
      n = t.instance, s = n.getAttribute("data-precedence"), i = l.get(s) || a, i === a && l.set(null, n), l.set(s, n), this.count++, a = su.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Gn = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function np(e, t, l, a, n, i, s, o, p) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Cu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cu(0), this.hiddenUpdates = Cu(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $d(e, t, l, a, n, i, s, o, p, _, H, q) {
    return e = new np(
      e,
      t,
      l,
      s,
      p,
      _,
      H,
      q,
      o
    ), t = 1, i === !0 && (t |= 24), i = Et(3, null, null, t), e.current = i, i.stateNode = e, t = hs(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, gs(i), e;
  }
  function Vd(e) {
    return e ? (e = xa, e) : xa;
  }
  function Kd(e, t, l, a, n, i) {
    n = Vd(n), a.context === null ? a.context = n : a.pendingContext = n, a = jl(t), a.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = Sl(e, a, t), l !== null && (pt(l, e, t), gn(l, e, t));
  }
  function Jd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Rc(e, t) {
    Jd(e, t), (e = e.alternate) && Jd(e, t);
  }
  function kd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = $l(e, 67108864);
      t !== null && pt(t, e, 67108864), Rc(e, 67108864);
    }
  }
  function Wd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = zt();
      t = Ou(t);
      var l = $l(e, t);
      l !== null && pt(l, e, t), Rc(e, t);
    }
  }
  var ru = !0;
  function ip(e, t, l, a) {
    var n = D.T;
    D.T = null;
    var i = C.p;
    try {
      C.p = 2, qc(e, t, l, a);
    } finally {
      C.p = i, D.T = n;
    }
  }
  function up(e, t, l, a) {
    var n = D.T;
    D.T = null;
    var i = C.p;
    try {
      C.p = 8, qc(e, t, l, a);
    } finally {
      C.p = i, D.T = n;
    }
  }
  function qc(e, t, l, a) {
    if (ru) {
      var n = Bc(a);
      if (n === null)
        Sc(
          e,
          t,
          a,
          ou,
          l
        ), Id(e, a);
      else if (cp(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (Id(e, a), t & 4 && -1 < sp.indexOf(e)) {
        for (; n !== null; ) {
          var i = fa(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var s = Ll(i.pendingLanes);
                  if (s !== 0) {
                    var o = i;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; s; ) {
                      var p = 1 << 31 - jt(s);
                      o.entanglements[1] |= p, s &= ~p;
                    }
                    $t(i), (xe & 6) === 0 && (Ki = bt() + 500, Dn(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = $l(i, 2), o !== null && pt(o, i, 2), ki(), Rc(i, 2);
            }
          if (i = Bc(a), i === null && Sc(
            e,
            t,
            a,
            ou,
            l
          ), i === n) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else
        Sc(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function Bc(e) {
    return e = Gu(e), Yc(e);
  }
  var ou = null;
  function Yc(e) {
    if (ou = null, e = ca(e), e !== null) {
      var t = E(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = j(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = O(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ou = e, null;
  }
  function Fd(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Vh()) {
          case af:
            return 2;
          case nf:
            return 8;
          case ei:
          case Kh:
            return 32;
          case uf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Gc = !1, Dl = null, Hl = null, Rl = null, Ln = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), ql = [], sp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Id(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dl = null;
        break;
      case "dragenter":
      case "dragleave":
        Hl = null;
        break;
      case "mouseover":
      case "mouseout":
        Rl = null;
        break;
      case "pointerover":
      case "pointerout":
        Ln.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qn.delete(t.pointerId);
    }
  }
  function Xn(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, t !== null && (t = fa(t), t !== null && kd(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function cp(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return Dl = Xn(
          Dl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Hl = Xn(
          Hl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Rl = Xn(
          Rl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return Ln.set(
          i,
          Xn(
            Ln.get(i) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, Qn.set(
          i,
          Xn(
            Qn.get(i) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Pd(e) {
    var t = ca(e.target);
    if (t !== null) {
      var l = E(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = j(l), t !== null) {
            e.blockedOn = t, df(e.priority, function() {
              Wd(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = O(l), t !== null) {
            e.blockedOn = t, df(e.priority, function() {
              Wd(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function du(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Bc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Yu = a, l.target.dispatchEvent(a), Yu = null;
      } else
        return t = fa(l), t !== null && kd(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function eh(e, t, l) {
    du(e) && l.delete(t);
  }
  function fp() {
    Gc = !1, Dl !== null && du(Dl) && (Dl = null), Hl !== null && du(Hl) && (Hl = null), Rl !== null && du(Rl) && (Rl = null), Ln.forEach(eh), Qn.forEach(eh);
  }
  function hu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Gc || (Gc = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      fp
    )));
  }
  var mu = null;
  function th(e) {
    mu !== e && (mu = e, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        mu === e && (mu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (Yc(a || l) === null)
              continue;
            break;
          }
          var i = fa(l);
          i !== null && (e.splice(t, 3), t -= 3, Bs(
            i,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Za(e) {
    function t(p) {
      return hu(p, e);
    }
    Dl !== null && hu(Dl, e), Hl !== null && hu(Hl, e), Rl !== null && hu(Rl, e), Ln.forEach(t), Qn.forEach(t);
    for (var l = 0; l < ql.length; l++) {
      var a = ql[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ql.length && (l = ql[0], l.blockedOn === null); )
      Pd(l), l.blockedOn === null && ql.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], i = l[a + 1], s = n[rt] || null;
        if (typeof i == "function")
          s || th(l);
        else if (s) {
          var o = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, s = i[rt] || null)
              o = s.formAction;
            else if (Yc(n) !== null) continue;
          } else o = s.action;
          typeof o == "function" ? l[a + 1] = o : (l.splice(a, 3), a -= 3), th(l);
        }
      }
  }
  function lh() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(s) {
            return n = s;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function Lc(e) {
    this._internalRoot = e;
  }
  vu.prototype.render = Lc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var l = t.current, a = zt();
    Kd(l, a, e, t, null, null);
  }, vu.prototype.unmount = Lc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Kd(e.current, 2, null, e, null, null), ki(), t[sa] = null;
    }
  };
  function vu(e) {
    this._internalRoot = e;
  }
  vu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = of();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ql.length && t !== 0 && t < ql[l].priority; l++) ;
      ql.splice(l, 0, e), l === 0 && Pd(e);
    }
  };
  var ah = c.version;
  if (ah !== "19.2.0")
    throw Error(
      r(
        527,
        ah,
        "19.2.0"
      )
    );
  C.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = g(t), e = e !== null ? G(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var rp = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var pu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!pu.isDisabled && pu.supportsFiber)
      try {
        Wa = pu.inject(
          rp
        ), xt = pu;
      } catch {
      }
  }
  return $n.createRoot = function(e, t) {
    if (!v(e)) throw Error(r(299));
    var l = !1, a = "", n = fo, i = ro, s = oo;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = $d(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      i,
      s,
      lh
    ), e[sa] = t.current, jc(e), new Lc(t);
  }, $n.hydrateRoot = function(e, t, l) {
    if (!v(e)) throw Error(r(299));
    var a = !1, n = "", i = fo, s = ro, o = oo, p = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (p = l.formState)), t = $d(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      n,
      p,
      i,
      s,
      o,
      lh
    ), t.context = Vd(null), l = t.current, a = zt(), a = Ou(a), n = jl(a), n.callback = null, Sl(l, n, a), l = a, t.current.lanes = l, Ia(t, l), $t(t), e[sa] = t.current, jc(e), new vu(t);
  }, $n.version = "19.2.0", $n;
}
var yh;
function Op() {
  if (yh) return Zc.exports;
  yh = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (c) {
        console.error(c);
      }
  }
  return f(), Zc.exports = Cp(), Zc.exports;
}
var Mp = Op();
function Up({ id: f, host: c, repo: d, repoId: r, category: v, categoryId: E, mapping: j, term: O, strict: A, reactionsEnabled: g, emitMetadata: G, inputPosition: U, theme: X, lang: J, loading: B }) {
  const [K, T] = Z.useState(!1);
  return Z.useEffect(() => {
    K || Promise.resolve().then(() => xg).then(() => T(!0));
  }, []), K ? u.jsx("giscus-widget", { id: f, host: c, repo: d, repoid: r, category: v, categoryid: E, mapping: j, term: O, strict: A, reactionsenabled: g, emitmetadata: G, inputposition: U, theme: X, lang: J, loading: B }) : null;
}
const bh = ["layers", "calendar", "game", "sun", "spark"];
function xh({ config: f, term: c, theme: d }) {
  const r = Z.useRef(null), [v, E] = Z.useState("loading"), [j, O] = Z.useState(f.discussionUrls[c] || ""), [A, g] = Z.useState(0);
  return Z.useEffect(() => {
    if (E("loading"), O(f.discussionUrls[c] || ""), !f.enabled) return;
    const G = window.setTimeout(() => E((X) => X === "loading" ? "slow" : X), 1e4), U = (X) => {
      const B = r.current?.querySelector("giscus-widget")?.shadowRoot?.querySelector("iframe");
      if (X.origin !== "https://giscus.app" || !B || X.source !== B.contentWindow || !X.data?.giscus) return;
      const K = X.data.giscus;
      (K.resizeHeight || K.discussion) && E("ready"), K.error && E(String(K.error).includes("Discussion not found") ? "ready" : "error");
      const T = bu(K.discussion?.url || "");
      T.startsWith(`https://github.com/${f.repo}/discussions/`) && O(T);
    };
    return window.addEventListener("message", U), () => {
      clearTimeout(G), window.removeEventListener("message", U);
    };
  }, [c, f, A]), /* @__PURE__ */ u.jsxs("section", { className: "comments panel", "aria-label": "댓글", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "LET’S TALK" }),
        /* @__PURE__ */ u.jsx("h2", { children: c === "guestbook" ? "공개 질문" : "사용해 본 이야기를 들려주세요" })
      ] }),
      /* @__PURE__ */ u.jsx(je, { name: "chat" })
    ] }),
    /* @__PURE__ */ u.jsx("p", { className: "muted", children: "댓글과 반응을 남기려면 GitHub 로그인이 필요합니다." }),
    f.enabled ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("div", { ref: r, className: "giscus-host", children: /* @__PURE__ */ u.jsx(Up, { id: "workshop-comments", repo: f.repo, repoId: f.repoId, category: f.category, categoryId: f.categoryId, mapping: "specific", term: c, strict: "1", reactionsEnabled: "1", emitMetadata: "1", inputPosition: "top", theme: d === "dark" ? "dark" : "light", lang: "ko", loading: "eager" }, `${c}:${A}`) }),
      (v === "slow" || v === "error") && /* @__PURE__ */ u.jsxs("div", { className: "comment-error", role: "status", children: [
        "댓글을 불러오지 못했거나 연결이 지연되고 있습니다. 앱 소개는 계속 이용하실 수 있습니다. ",
        /* @__PURE__ */ u.jsx("button", { onClick: () => g((G) => G + 1), children: "다시 시도" })
      ] })
    ] }) : /* @__PURE__ */ u.jsxs("div", { className: "comment-placeholder", children: [
      /* @__PURE__ */ u.jsx(je, { name: "chat", size: 30 }),
      /* @__PURE__ */ u.jsx("b", { children: "댓글 공간을 준비하고 있어요." }),
      /* @__PURE__ */ u.jsx("p", { children: "지금은 앱 소개를 둘러보실 수 있습니다." })
    ] }),
    j && /* @__PURE__ */ u.jsx(Va, { url: j, children: "GitHub에서 댓글 보기" })
  ] });
}
function Dp({ app: f }) {
  const c = f.screenshots.length ? f.screenshots : [f.thumbnail], [d, r] = Z.useState(0), [v, E] = Z.useState(!1), j = Z.useRef(null);
  return Z.useEffect(() => {
    v && !j.current?.open ? j.current?.showModal() : !v && j.current?.open && j.current.close();
  }, [v]), /* @__PURE__ */ u.jsxs("section", { className: "gallery", children: [
    /* @__PURE__ */ u.jsxs("button", { className: "gallery-main", onClick: () => E(!0), "aria-label": "미리보기 이미지 확대", children: [
      /* @__PURE__ */ u.jsx(Gl, { src: c[d], alt: `${f.title} 미리보기 ${d + 1}` }),
      /* @__PURE__ */ u.jsx("span", { children: "크게 보기 ↗" })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "gallery-thumbs", children: c.map((O, A) => /* @__PURE__ */ u.jsx("button", { onClick: () => r(A), "aria-label": `미리보기 ${A + 1} 선택`, "aria-pressed": d === A, children: /* @__PURE__ */ u.jsx(Gl, { src: O, alt: `${A + 1}번 이미지` }) }, A)) }),
    /* @__PURE__ */ u.jsx("dialog", { ref: j, onClose: () => E(!1), onClick: (O) => {
      O.target === O.currentTarget && E(!1);
    }, "aria-label": `${f.title} 확대 미리보기`, children: /* @__PURE__ */ u.jsxs("div", { className: "lightbox", children: [
      /* @__PURE__ */ u.jsx("button", { autoFocus: !0, className: "icon-button close", "aria-label": "확대 이미지 닫기", onClick: () => E(!1), children: /* @__PURE__ */ u.jsx(je, { name: "close" }) }),
      /* @__PURE__ */ u.jsx(Gl, { src: c[d], alt: `${f.title} 확대 미리보기` }),
      /* @__PURE__ */ u.jsxs("div", { className: "lightbox-controls", children: [
        /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => r((d + c.length - 1) % c.length), children: "이전" }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          d + 1,
          " / ",
          c.length
        ] }),
        /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => r((d + 1) % c.length), children: "다음" })
      ] })
    ] }) })
  ] });
}
function Hp({ payload: f }) {
  const c = Nu(), [d, r] = Z.useState(null), [v, E] = Z.useState(!1), j = c.authenticated && d ? d : f, { site: O, apps: A, giscus: g } = j;
  Z.useEffect(() => {
    c.authenticated || r(null);
  }, [c.authenticated]);
  const [G, U] = Z.useState(ch), [X, J] = Z.useState("전체"), [B, K] = Z.useState(""), [T, Q] = Z.useState(""), [$, w] = Z.useState("featured"), [re, Ke] = Z.useState(() => {
    try {
      return localStorage.getItem("workshop-theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  }), [be, ae] = Z.useState(""), De = Z.useRef(null);
  Z.useEffect(() => {
    const m = () => U(ch());
    return window.addEventListener("popstate", m), () => window.removeEventListener("popstate", m);
  }, []), Z.useEffect(() => {
    try {
      localStorage.setItem("workshop-theme", re);
    } catch {
    }
  }, [re]), Z.useEffect(() => {
    const m = A.find((W) => W.id === G.app), L = j.boards?.find((W) => W.id === G.board), V = L?.posts.find((W) => W.id === G.post);
    document.title = `${V?.title || L?.title || m?.title || O.title} · ${O.brand}`, ae("");
  }, [G, A, O, j.boards]);
  const Be = (m) => {
    history.pushState({}, "", gp(m)), U(m), De.current?.scrollIntoView({ block: "start" }), requestAnimationFrame(() => De.current?.focus({ preventScroll: !0 }));
  }, Ye = (m) => m.startsWith("board:") ? Be({ view: "board", app: "", board: m.slice(6), post: "" }) : Be({ view: m, app: "", board: "", post: "" }), it = (m) => Be({ view: "apps", app: m }), Ge = (m) => {
    J(m), Q(""), K(""), Ye("apps");
  }, ne = A.find((m) => m.id === G.app), Ie = Z.useMemo(() => gu(A, B, X, T, $), [A, B, X, T, $]), ut = [...new Set(A.flatMap((m) => m.tags))];
  gu(A, "", "전체", "", "featured").filter((m) => m.featured).slice(0, 3), gu(A, "", "전체", "", "recent").slice(0, 3);
  const D = [["home", "home", "공방 홈"], ["apps", "grid", "앱 모음"], ["about", "user", "제작자 소개"], ["guestbook", "chat", "질문게시판"], ...(j.boards || []).filter((m) => m.visible).map((m) => ["board:" + m.id, m.icon, m.title])], C = j.menuOrder || D.map((m) => m[0]), P = [...C, ...D.map((m) => m[0]).filter((m) => !C.includes(m))].map((m) => D.find((L) => L[0] === m)).filter((m) => !!m), ce = G.board ? "board:" + G.board : G.app ? "apps" : G.view;
  O.categories.map((m, L) => /* @__PURE__ */ u.jsxs("button", { onClick: () => Ge(m), children: [
    /* @__PURE__ */ u.jsx("span", { className: `category-circle tone-${L}`, children: /* @__PURE__ */ u.jsx(je, { name: bh[L % 5], size: 25 }) }),
    /* @__PURE__ */ u.jsx("span", { children: m })
  ] }, m));
  const pe = (m) => m.length ? /* @__PURE__ */ u.jsx("div", { className: "app-grid", children: m.map((L) => /* @__PURE__ */ u.jsx(Rh, { app: L, onOpen: it }, L.id)) }) : /* @__PURE__ */ u.jsxs("div", { className: "empty", children: [
    /* @__PURE__ */ u.jsx(je, { name: "search", size: 30 }),
    /* @__PURE__ */ u.jsx("h3", { children: "아직 등록된 앱이 없어요." })
  ] }), y = async () => {
    try {
      await navigator.clipboard.writeText(location.href), ae("링크를 복사했습니다.");
    } catch {
      ae("아래 주소를 복사해 주세요.");
    }
  };
  return /* @__PURE__ */ u.jsxs("div", { className: `workshop ${re}`, children: [
    /* @__PURE__ */ u.jsx("a", { className: "skip-link", href: "#main-content", onClick: (m) => {
      m.preventDefault(), De.current?.scrollIntoView({ block: "start" }), De.current?.focus({ preventScroll: !0 });
    }, children: "본문으로 이동" }),
    /* @__PURE__ */ u.jsxs("aside", { className: "side-rail", children: [
      /* @__PURE__ */ u.jsxs("button", { className: "brand", onClick: () => Ye("home"), children: [
        /* @__PURE__ */ u.jsxs("span", { className: "brand-mark", children: [
          O.brandMark || "a",
          /* @__PURE__ */ u.jsx("span", { children: "✳" })
        ] }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          O.brand,
          /* @__PURE__ */ u.jsx("small", { children: "TEACHER’S WORKSHOP" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "rail-label", children: "EXPLORE THE ATELIER" }),
      /* @__PURE__ */ u.jsx("nav", { "aria-label": "주 메뉴", children: P.map(([m, L, V]) => /* @__PURE__ */ u.jsxs("button", { className: ce === m ? "active" : "", "aria-current": ce === m ? "page" : void 0, onClick: () => Ye(m), children: [
        /* @__PURE__ */ u.jsx(je, { name: L }),
        V,
        ce === m && /* @__PURE__ */ u.jsx("i", {})
      ] }, m)) }),
      O.sidebar?.visible !== !1 && /* @__PURE__ */ u.jsxs("div", { className: "rail-note", children: [
        /* @__PURE__ */ u.jsx(je, { name: "spark", size: 26 }),
        /* @__PURE__ */ u.jsx("b", { children: O.sidebar?.title }),
        /* @__PURE__ */ u.jsx("p", { style: { whiteSpace: "pre-line" }, children: O.sidebar?.body })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "rail-profile", children: [
        /* @__PURE__ */ u.jsx("span", { className: "avatar", children: "T" }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("b", { children: O.profile.name }),
          /* @__PURE__ */ u.jsx("small", { children: "만드는 사람" })
        ] }),
        /* @__PURE__ */ u.jsx(je, { name: "check", size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "main-canvas", children: [
      /* @__PURE__ */ u.jsxs("header", { className: "topbar", children: [
        /* @__PURE__ */ u.jsxs("span", { className: "mobile-brand", children: [
          "✳ ",
          O.brand
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "breadcrumb", children: [
          "THE ATELIER ",
          /* @__PURE__ */ u.jsx("span", { children: "/" }),
          " ",
          /* @__PURE__ */ u.jsx("b", { children: P.find((m) => m[0] === ce)?.[2] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "top-actions", children: [
          /* @__PURE__ */ u.jsxs("span", { className: "top-note", children: [
            /* @__PURE__ */ u.jsx("i", {}),
            O.topNote
          ] }),
          /* @__PURE__ */ u.jsx("button", { className: "btn admin-entry", onClick: () => E(!0), children: c.authenticated ? "관리 도구" : "관리자 모드" }),
          /* @__PURE__ */ u.jsx("button", { className: "icon-button", "aria-label": re === "light" ? "어두운 테마" : "밝은 테마", onClick: () => Ke((m) => m === "light" ? "dark" : "light"), children: /* @__PURE__ */ u.jsx(je, { name: re === "light" ? "moon" : "sun" }) })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx(Np, { open: v, onClose: () => E(!1), onPreview: r, payload: f }),
      /* @__PURE__ */ u.jsxs("main", { id: "main-content", className: "content", ref: De, tabIndex: -1, children: [
        d && c.authenticated && /* @__PURE__ */ u.jsxs("div", { className: "preview-banner", children: [
          /* @__PURE__ */ u.jsx("b", { children: "관리자 전용 미리보기 · 아직 게시되지 않았습니다." }),
          /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
            /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => E(!0), children: "편집으로 돌아가기" }),
            /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => r(null), children: "미리보기 종료" })
          ] })
        ] }),
        j.warnings.length > 0 && /* @__PURE__ */ u.jsxs("details", { className: "data-warning", children: [
          /* @__PURE__ */ u.jsxs("summary", { children: [
            "일부 소개 정보를 표시하지 못했습니다 (",
            j.warnings.length,
            ")"
          ] }),
          /* @__PURE__ */ u.jsx("ul", { children: j.warnings.map((m, L) => /* @__PURE__ */ u.jsx("li", { children: m }, L)) })
        ] }),
        G.board ? /* @__PURE__ */ u.jsx(yp, { board: (j.boards || []).find((m) => m.id === G.board && m.visible), postId: G.post, onPost: (m) => Be({ view: "board", app: "", board: G.board, post: m }), onBack: () => Be({ view: "board", app: "", board: G.board, post: "" }), onHome: () => Ye("home") }, G.board) : G.app && !ne ? /* @__PURE__ */ u.jsxs("section", { className: "empty", children: [
          /* @__PURE__ */ u.jsx("h1", { children: "앱을 찾을 수 없어요." }),
          /* @__PURE__ */ u.jsx("p", { children: "주소가 변경되었거나 소개가 내려갔을 수 있습니다." }),
          /* @__PURE__ */ u.jsx("button", { className: "btn primary", onClick: () => Ye("apps"), children: "앱 모음으로" })
        ] }) : ne ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsxs("button", { className: "back-link", onClick: () => Ye("apps"), children: [
            /* @__PURE__ */ u.jsx(je, { name: "back", size: 17 }),
            " 앱 모음으로"
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "detail-heading", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsxs("span", { className: "eyebrow", children: [
                ne.category,
                " / ",
                ne.isExample ? "EXAMPLE" : "APP STORY"
              ] }),
              /* @__PURE__ */ u.jsx("h1", { children: ne.title }),
              /* @__PURE__ */ u.jsx("p", { children: ne.summary })
            ] }),
            /* @__PURE__ */ u.jsxs("button", { className: "btn", onClick: y, children: [
              /* @__PURE__ */ u.jsx(je, { name: "share", size: 17 }),
              " 공유"
            ] })
          ] }),
          be && /* @__PURE__ */ u.jsxs("div", { className: "share-result", role: "status", children: [
            be,
            /* @__PURE__ */ u.jsx("input", { "aria-label": "공유 주소", value: location.href, readOnly: !0, onFocus: (m) => m.target.select() })
          ] }),
          ne.isExample && ne.showExampleBadge !== !1 && /* @__PURE__ */ u.jsx("div", { className: "example-note", children: "예시 콘텐츠입니다. 미리보기는 소개용 일러스트이며 실제 서비스 화면이 아닙니다. 운영할 앱 정보와 이미지로 교체해 주세요." }),
          /* @__PURE__ */ u.jsxs("div", { className: "detail-layout", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx(Dp, { app: ne }, ne.id),
              /* @__PURE__ */ u.jsxs("section", { className: "panel prose", children: [
                /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "ABOUT THIS APP" }),
                /* @__PURE__ */ u.jsx("h2", { children: "이런 도구를 만들고 싶었어요." }),
                /* @__PURE__ */ u.jsx("p", { children: ne.description || "상세 소개를 준비하고 있습니다." }),
                /* @__PURE__ */ u.jsx("h3", { children: "주요 기능" }),
                /* @__PURE__ */ u.jsx("ul", { children: ne.features.map((m) => /* @__PURE__ */ u.jsx("li", { children: m }, m)) }),
                /* @__PURE__ */ u.jsx("h3", { children: "이렇게 활용해 보세요" }),
                /* @__PURE__ */ u.jsx("ul", { children: ne.useCases.map((m) => /* @__PURE__ */ u.jsx("li", { children: m }, m)) }),
                /* @__PURE__ */ u.jsx("h3", { children: "사용 방법" }),
                ne.instructions.length ? /* @__PURE__ */ u.jsx("ol", { children: ne.instructions.map((m) => /* @__PURE__ */ u.jsx("li", { children: m }, m)) }) : /* @__PURE__ */ u.jsx("p", { children: "사용 안내를 준비하고 있습니다." })
              ] })
            ] }),
            /* @__PURE__ */ u.jsxs("aside", { className: "detail-aside panel", children: [
              /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "APP INFORMATION" }),
              /* @__PURE__ */ u.jsx("h2", { children: "앱 한눈에 보기" }),
              /* @__PURE__ */ u.jsxs("dl", { children: [
                /* @__PURE__ */ u.jsx("dt", { children: "상태" }),
                /* @__PURE__ */ u.jsx("dd", { children: ne.isExample ? "예시 콘텐츠" : ne.status || "안내 준비 중" }),
                /* @__PURE__ */ u.jsx("dt", { children: "추천 사용자" }),
                /* @__PURE__ */ u.jsx("dd", { children: ne.targetUsers.join(" · ") || "누구나" }),
                /* @__PURE__ */ u.jsx("dt", { children: "지원 기기" }),
                /* @__PURE__ */ u.jsx("dd", { children: ne.supportedDevices.join(" · ") || "안내 준비 중" }),
                /* @__PURE__ */ u.jsx("dt", { children: "업데이트" }),
                /* @__PURE__ */ u.jsx("dd", { children: ne.updatedAt || "미입력" })
              ] }),
              /* @__PURE__ */ u.jsxs("div", { className: "stack", children: [
                bu(ne.appUrl) ? /* @__PURE__ */ u.jsx(Va, { url: ne.appUrl, primary: !0, children: "앱 실행하기" }) : /* @__PURE__ */ u.jsx("span", { className: "pending", children: "앱 주소 준비 중" }),
                /* @__PURE__ */ u.jsx(Va, { url: ne.githubUrl, children: "GitHub 소스" }),
                /* @__PURE__ */ u.jsx(Va, { url: ne.guideUrl, children: "사용 설명서" })
              ] }),
              /* @__PURE__ */ u.jsx("div", { className: "tags", children: ne.tags.map((m) => /* @__PURE__ */ u.jsxs("span", { children: [
                "#",
                m
              ] }, m)) }),
              /* @__PURE__ */ u.jsx("h3", { children: "변경 내역" }),
              ne.changelog.length ? /* @__PURE__ */ u.jsx("ul", { children: ne.changelog.map((m, L) => /* @__PURE__ */ u.jsx("li", { children: m }, L)) }) : /* @__PURE__ */ u.jsx("p", { className: "muted", children: "등록된 변경 내역이 없습니다." })
            ] })
          ] }),
          /* @__PURE__ */ u.jsx(xh, { config: g, term: `app:${ne.id}`, theme: re }, ne.id),
          /* @__PURE__ */ u.jsx(dh, { appId: ne.id }, "secret:" + ne.id),
          /* @__PURE__ */ u.jsxs("section", { className: "section", children: [
            /* @__PURE__ */ u.jsx("div", { className: "section-head", children: /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "YOU MIGHT ALSO LIKE" }),
              /* @__PURE__ */ u.jsx("h2", { children: "함께 둘러볼 앱" })
            ] }) }),
            pe(A.filter((m) => m.id !== ne.id).sort((m, L) => +(L.category === ne.category) - +(m.category === ne.category) || m.sortOrder - L.sortOrder).slice(0, 3))
          ] })
        ] }) : G.view === "home" ? /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(bp, { site: O, apps: A, sections: j.sections || [], onView: Ye, onApp: it, onCategory: Ge }) }) : G.view === "apps" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx("div", { className: "collection-tools", children: /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => E(!0), children: c.authenticated ? "앱 편집·작성" : "관리자 모드로 앱 편집" }) }),
          /* @__PURE__ */ u.jsxs("div", { className: "page-heading", children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "THE APP COLLECTION" }),
            /* @__PURE__ */ u.jsxs("h1", { children: [
              "필요한 순간에,",
              /* @__PURE__ */ u.jsx("br", {}),
              "딱 맞는 도구."
            ] }),
            /* @__PURE__ */ u.jsx("p", { children: "수업부터 학교의 일상까지, 하나씩 만들어 가는 앱 모음입니다." })
          ] }),
          /* @__PURE__ */ u.jsxs("section", { className: "filters", "aria-label": "앱 검색과 필터", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "filter-top", children: [
              /* @__PURE__ */ u.jsxs("label", { className: "search-field", children: [
                /* @__PURE__ */ u.jsx(je, { name: "search" }),
                /* @__PURE__ */ u.jsx("input", { "aria-label": "앱 검색", placeholder: "앱 이름, 기능, 태그 검색", value: B, onChange: (m) => K(m.target.value) })
              ] }),
              /* @__PURE__ */ u.jsxs("label", { className: "sort-field", children: [
                /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "앱 정렬" }),
                /* @__PURE__ */ u.jsxs("select", { "aria-label": "앱 정렬", value: $, onChange: (m) => w(m.target.value), children: [
                  /* @__PURE__ */ u.jsx("option", { value: "featured", children: "추천순" }),
                  /* @__PURE__ */ u.jsx("option", { value: "recent", children: "최근 업데이트순" }),
                  /* @__PURE__ */ u.jsx("option", { value: "name", children: "이름순" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "filter-chips", "aria-label": "카테고리 필터", children: ["전체", ...O.categories].map((m) => /* @__PURE__ */ u.jsx("button", { className: X === m ? "selected" : "", "aria-pressed": X === m, onClick: () => J(m), children: m }, m)) }),
            /* @__PURE__ */ u.jsxs("div", { className: "filter-bottom", children: [
              /* @__PURE__ */ u.jsxs("label", { children: [
                "태그 ",
                /* @__PURE__ */ u.jsxs("select", { "aria-label": "태그 필터", value: T, onChange: (m) => Q(m.target.value), children: [
                  /* @__PURE__ */ u.jsx("option", { value: "", children: "전체 태그" }),
                  ut.map((m) => /* @__PURE__ */ u.jsx("option", { children: m }, m))
                ] })
              ] }),
              /* @__PURE__ */ u.jsx("button", { className: "text-button", onClick: () => {
                K(""), J("전체"), Q(""), w("featured");
              }, children: "필터 초기화" })
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("p", { className: "result-count", "aria-live": "polite", children: [
            "총 ",
            /* @__PURE__ */ u.jsx("b", { children: Ie.length }),
            "개의 앱"
          ] }),
          Ie.length ? pe(Ie) : /* @__PURE__ */ u.jsxs("section", { className: "empty", children: [
            /* @__PURE__ */ u.jsx(je, { name: "search", size: 35 }),
            /* @__PURE__ */ u.jsx("h2", { children: "검색 결과가 없어요." }),
            /* @__PURE__ */ u.jsx("p", { children: "다른 검색어나 카테고리로 찾아보세요." }),
            /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => {
              K(""), J("전체"), Q("");
            }, children: "검색 조건 지우기" })
          ] })
        ] }) : G.view === "about" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsxs("div", { className: "page-heading", children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "BEHIND THE TOOLS" }),
            /* @__PURE__ */ u.jsx("h1", { style: { whiteSpace: "pre-line" }, children: O.profile.heading })
          ] }),
          O.profile.visible !== !1 && /* @__PURE__ */ u.jsxs("section", { className: "about-panel panel", children: [
            /* @__PURE__ */ u.jsx("div", { className: "profile-portrait", children: O.profile.image ? /* @__PURE__ */ u.jsx(Gl, { src: O.profile.image, alt: O.profile.name + " 프로필" }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              "T",
              /* @__PURE__ */ u.jsx("span", { children: "✳" })
            ] }) }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "THE MAKER" }),
              /* @__PURE__ */ u.jsx("h2", { children: O.profile.name }),
              /* @__PURE__ */ u.jsx("p", { className: "intro", children: O.profile.role }),
              /* @__PURE__ */ u.jsx("p", { children: O.profile.bio }),
              /* @__PURE__ */ u.jsx("div", { className: "link-row", children: O.profile.links.map((m) => /* @__PURE__ */ u.jsx(Va, { url: m.url, children: m.label }, m.url)) })
            ] })
          ] }),
          O.profile.showPrinciples !== !1 && /* @__PURE__ */ u.jsx("div", { className: "principles", children: O.profile.principles.map((m, L) => /* @__PURE__ */ u.jsxs("section", { className: "panel", children: [
            /* @__PURE__ */ u.jsxs("span", { className: "eyebrow", children: [
              "0",
              L + 1
            ] }),
            /* @__PURE__ */ u.jsx("h3", { children: m }),
            /* @__PURE__ */ u.jsx(je, { name: bh[L], size: 32 })
          ] }, m)) }),
          O.profile.showInvite !== !1 && /* @__PURE__ */ u.jsxs("section", { className: "invite", children: [
            /* @__PURE__ */ u.jsx(je, { name: "spark", size: 30 }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("h2", { children: O.profile.inviteTitle }),
              /* @__PURE__ */ u.jsx("p", { children: O.profile.inviteBody })
            ] }),
            /* @__PURE__ */ u.jsxs("button", { className: "btn", onClick: () => Ye("guestbook"), children: [
              O.profile.buttonLabel,
              " ",
              /* @__PURE__ */ u.jsx(je, { name: "arrow", size: 16 })
            ] })
          ] })
        ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsxs("div", { className: "page-heading", children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "NOTES FROM YOU" }),
            /* @__PURE__ */ u.jsxs("h1", { children: [
              "반가워요.",
              /* @__PURE__ */ u.jsx("br", {}),
              "이야기를 남겨주세요."
            ] }),
            /* @__PURE__ */ u.jsx("p", { children: "앱 사용 중 궁금한 점이나 개선 아이디어를 남겨주세요." })
          ] }),
          /* @__PURE__ */ u.jsx(xh, { config: g, term: "guestbook", theme: re }),
          /* @__PURE__ */ u.jsx(dh, {})
        ] }),
        O.footerVisible !== !1 && /* @__PURE__ */ u.jsxs("footer", { children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsxs("b", { children: [
              "✳ ",
              O.brand
            ] }),
            /* @__PURE__ */ u.jsx("p", { children: O.footer })
          ] }),
          /* @__PURE__ */ u.jsx("span", { children: O.title })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("nav", { className: `mobile-nav ${P.length > 4 ? "many-menus" : ""}`, "aria-label": "모바일 메뉴", children: P.map(([m, L, V]) => /* @__PURE__ */ u.jsxs("button", { className: ce === m ? "active" : "", "aria-current": ce === m ? "page" : void 0, onClick: () => Ye(m), children: [
      /* @__PURE__ */ u.jsx(je, { name: L, size: 21 }),
      /* @__PURE__ */ u.jsx("span", { children: V })
    ] }, m)) })
  ] });
}
class Rp extends pp.Component {
  state = { failed: !1 };
  static getDerivedStateFromError() {
    return { failed: !0 };
  }
  render() {
    return this.state.failed ? /* @__PURE__ */ u.jsxs("div", { style: { padding: 40 }, children: [
      /* @__PURE__ */ u.jsx("h1", { children: "화면을 불러오지 못했습니다." }),
      /* @__PURE__ */ u.jsx("p", { children: "새로고침 후 다시 시도해 주세요." }),
      /* @__PURE__ */ u.jsx("button", { onClick: () => location.reload(), children: "새로고침" })
    ] }) : this.props.children;
  }
}
const Jc = /* @__PURE__ */ new Map();
function jg({ parentElement: f, data: c, setTriggerValue: d, key: r }) {
  let v = Jc.get(r);
  if (v)
    clearTimeout(v.timer), v.mount.parentNode !== f && f.appendChild(v.mount);
  else {
    const j = document.createElement("div");
    j.id = "workshop-root", f.appendChild(j), v = { mount: j, root: Mp.createRoot(j), timer: 0 }, Jc.set(r, v);
  }
  v.root.render(/* @__PURE__ */ u.jsx(Rp, { children: /* @__PURE__ */ u.jsx(jp, { payload: c, emit: d, children: /* @__PURE__ */ u.jsx(Hp, { payload: c }) }) }));
  const E = v;
  return () => {
    E.timer = window.setTimeout(() => {
      E.mount.isConnected || (E.root.unmount(), Jc.delete(r));
    }, 1e3);
  };
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yu = globalThis, Ic = yu.ShadowRoot && (yu.ShadyCSS === void 0 || yu.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Pc = Symbol(), jh = /* @__PURE__ */ new WeakMap();
let Bh = class {
  constructor(f, c, d) {
    if (this._$cssResult$ = !0, d !== Pc) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = f, this.t = c;
  }
  get styleSheet() {
    let f = this.o;
    const c = this.t;
    if (Ic && f === void 0) {
      const d = c !== void 0 && c.length === 1;
      d && (f = jh.get(c)), f === void 0 && ((this.o = f = new CSSStyleSheet()).replaceSync(this.cssText), d && jh.set(c, f));
    }
    return f;
  }
  toString() {
    return this.cssText;
  }
};
const qp = (f) => new Bh(typeof f == "string" ? f : f + "", void 0, Pc), Bp = (f, ...c) => {
  const d = f.length === 1 ? f[0] : c.reduce((r, v, E) => r + ((j) => {
    if (j._$cssResult$ === !0) return j.cssText;
    if (typeof j == "number") return j;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + j + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(v) + f[E + 1], f[0]);
  return new Bh(d, f, Pc);
}, Yp = (f, c) => {
  if (Ic) f.adoptedStyleSheets = c.map((d) => d instanceof CSSStyleSheet ? d : d.styleSheet);
  else for (const d of c) {
    const r = document.createElement("style"), v = yu.litNonce;
    v !== void 0 && r.setAttribute("nonce", v), r.textContent = d.cssText, f.appendChild(r);
  }
}, Sh = Ic ? (f) => f : (f) => f instanceof CSSStyleSheet ? ((c) => {
  let d = "";
  for (const r of c.cssRules) d += r.cssText;
  return qp(d);
})(f) : f;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gp, defineProperty: Lp, getOwnPropertyDescriptor: Qp, getOwnPropertyNames: Xp, getOwnPropertySymbols: wp, getPrototypeOf: Zp } = Object, Ka = globalThis, Eh = Ka.trustedTypes, $p = Eh ? Eh.emptyScript : "", Nh = Ka.reactiveElementPolyfillSupport, Kn = (f, c) => f, xu = { toAttribute(f, c) {
  switch (c) {
    case Boolean:
      f = f ? $p : null;
      break;
    case Object:
    case Array:
      f = f == null ? f : JSON.stringify(f);
  }
  return f;
}, fromAttribute(f, c) {
  let d = f;
  switch (c) {
    case Boolean:
      d = f !== null;
      break;
    case Number:
      d = f === null ? null : Number(f);
      break;
    case Object:
    case Array:
      try {
        d = JSON.parse(f);
      } catch {
        d = null;
      }
  }
  return d;
} }, ef = (f, c) => !Gp(f, c), _h = { attribute: !0, type: String, converter: xu, reflect: !1, hasChanged: ef };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Ka.litPropertyMetadata ?? (Ka.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class $a extends HTMLElement {
  static addInitializer(c) {
    this._$Ei(), (this.l ?? (this.l = [])).push(c);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(c, d = _h) {
    if (d.state && (d.attribute = !1), this._$Ei(), this.elementProperties.set(c, d), !d.noAccessor) {
      const r = Symbol(), v = this.getPropertyDescriptor(c, r, d);
      v !== void 0 && Lp(this.prototype, c, v);
    }
  }
  static getPropertyDescriptor(c, d, r) {
    const { get: v, set: E } = Qp(this.prototype, c) ?? { get() {
      return this[d];
    }, set(j) {
      this[d] = j;
    } };
    return { get() {
      return v?.call(this);
    }, set(j) {
      const O = v?.call(this);
      E.call(this, j), this.requestUpdate(c, O, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(c) {
    return this.elementProperties.get(c) ?? _h;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Kn("elementProperties"))) return;
    const c = Zp(this);
    c.finalize(), c.l !== void 0 && (this.l = [...c.l]), this.elementProperties = new Map(c.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Kn("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Kn("properties"))) {
      const d = this.properties, r = [...Xp(d), ...wp(d)];
      for (const v of r) this.createProperty(v, d[v]);
    }
    const c = this[Symbol.metadata];
    if (c !== null) {
      const d = litPropertyMetadata.get(c);
      if (d !== void 0) for (const [r, v] of d) this.elementProperties.set(r, v);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [d, r] of this.elementProperties) {
      const v = this._$Eu(d, r);
      v !== void 0 && this._$Eh.set(v, d);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(c) {
    const d = [];
    if (Array.isArray(c)) {
      const r = new Set(c.flat(1 / 0).reverse());
      for (const v of r) d.unshift(Sh(v));
    } else c !== void 0 && d.push(Sh(c));
    return d;
  }
  static _$Eu(c, d) {
    const r = d.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof c == "string" ? c.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var c;
    this._$ES = new Promise((d) => this.enableUpdating = d), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (c = this.constructor.l) == null || c.forEach((d) => d(this));
  }
  addController(c) {
    var d;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(c), this.renderRoot !== void 0 && this.isConnected && ((d = c.hostConnected) == null || d.call(c));
  }
  removeController(c) {
    var d;
    (d = this._$EO) == null || d.delete(c);
  }
  _$E_() {
    const c = /* @__PURE__ */ new Map(), d = this.constructor.elementProperties;
    for (const r of d.keys()) this.hasOwnProperty(r) && (c.set(r, this[r]), delete this[r]);
    c.size > 0 && (this._$Ep = c);
  }
  createRenderRoot() {
    const c = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Yp(c, this.constructor.elementStyles), c;
  }
  connectedCallback() {
    var c;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (c = this._$EO) == null || c.forEach((d) => {
      var r;
      return (r = d.hostConnected) == null ? void 0 : r.call(d);
    });
  }
  enableUpdating(c) {
  }
  disconnectedCallback() {
    var c;
    (c = this._$EO) == null || c.forEach((d) => {
      var r;
      return (r = d.hostDisconnected) == null ? void 0 : r.call(d);
    });
  }
  attributeChangedCallback(c, d, r) {
    this._$AK(c, r);
  }
  _$EC(c, d) {
    var r;
    const v = this.constructor.elementProperties.get(c), E = this.constructor._$Eu(c, v);
    if (E !== void 0 && v.reflect === !0) {
      const j = (((r = v.converter) == null ? void 0 : r.toAttribute) !== void 0 ? v.converter : xu).toAttribute(d, v.type);
      this._$Em = c, j == null ? this.removeAttribute(E) : this.setAttribute(E, j), this._$Em = null;
    }
  }
  _$AK(c, d) {
    var r;
    const v = this.constructor, E = v._$Eh.get(c);
    if (E !== void 0 && this._$Em !== E) {
      const j = v.getPropertyOptions(E), O = typeof j.converter == "function" ? { fromAttribute: j.converter } : ((r = j.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? j.converter : xu;
      this._$Em = E, this[E] = O.fromAttribute(d, j.type), this._$Em = null;
    }
  }
  requestUpdate(c, d, r) {
    if (c !== void 0) {
      if (r ?? (r = this.constructor.getPropertyOptions(c)), !(r.hasChanged ?? ef)(this[c], d)) return;
      this.P(c, d, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(c, d, r) {
    this._$AL.has(c) || this._$AL.set(c, d), r.reflect === !0 && this._$Em !== c && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(c);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (d) {
      Promise.reject(d);
    }
    const c = this.scheduleUpdate();
    return c != null && await c, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var c;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [E, j] of this._$Ep) this[E] = j;
        this._$Ep = void 0;
      }
      const v = this.constructor.elementProperties;
      if (v.size > 0) for (const [E, j] of v) j.wrapped !== !0 || this._$AL.has(E) || this[E] === void 0 || this.P(E, this[E], j);
    }
    let d = !1;
    const r = this._$AL;
    try {
      d = this.shouldUpdate(r), d ? (this.willUpdate(r), (c = this._$EO) == null || c.forEach((v) => {
        var E;
        return (E = v.hostUpdate) == null ? void 0 : E.call(v);
      }), this.update(r)) : this._$EU();
    } catch (v) {
      throw d = !1, this._$EU(), v;
    }
    d && this._$AE(r);
  }
  willUpdate(c) {
  }
  _$AE(c) {
    var d;
    (d = this._$EO) == null || d.forEach((r) => {
      var v;
      return (v = r.hostUpdated) == null ? void 0 : v.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(c)), this.updated(c);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(c) {
    return !0;
  }
  update(c) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((d) => this._$EC(d, this[d]))), this._$EU();
  }
  updated(c) {
  }
  firstUpdated(c) {
  }
}
$a.elementStyles = [], $a.shadowRootOptions = { mode: "open" }, $a[Kn("elementProperties")] = /* @__PURE__ */ new Map(), $a[Kn("finalized")] = /* @__PURE__ */ new Map(), Nh?.({ ReactiveElement: $a }), (Ka.reactiveElementVersions ?? (Ka.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ju = globalThis, Su = ju.trustedTypes, Ah = Su ? Su.createPolicy("lit-html", { createHTML: (f) => f }) : void 0, Yh = "$lit$", Yl = `lit$${Math.random().toFixed(9).slice(2)}$`, Gh = "?" + Yl, Vp = `<${Gh}>`, ua = document, Wn = () => ua.createComment(""), Fn = (f) => f === null || typeof f != "object" && typeof f != "function", tf = Array.isArray, Kp = (f) => tf(f) || typeof f?.[Symbol.iterator] == "function", kc = `[ 	
\f\r]`, Vn = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Th = /-->/g, zh = />/g, na = RegExp(`>|${kc}(?:([^\\s"'>=/]+)(${kc}*=${kc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ch = /'/g, Oh = /"/g, Lh = /^(?:script|style|textarea|title)$/i, Jp = (f) => (c, ...d) => ({ _$litType$: f, strings: c, values: d }), kp = Jp(1), Ja = Symbol.for("lit-noChange"), Ve = Symbol.for("lit-nothing"), Mh = /* @__PURE__ */ new WeakMap(), ia = ua.createTreeWalker(ua, 129);
function Qh(f, c) {
  if (!tf(f) || !f.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ah !== void 0 ? Ah.createHTML(c) : c;
}
const Wp = (f, c) => {
  const d = f.length - 1, r = [];
  let v, E = c === 2 ? "<svg>" : c === 3 ? "<math>" : "", j = Vn;
  for (let O = 0; O < d; O++) {
    const A = f[O];
    let g, G, U = -1, X = 0;
    for (; X < A.length && (j.lastIndex = X, G = j.exec(A), G !== null); ) X = j.lastIndex, j === Vn ? G[1] === "!--" ? j = Th : G[1] !== void 0 ? j = zh : G[2] !== void 0 ? (Lh.test(G[2]) && (v = RegExp("</" + G[2], "g")), j = na) : G[3] !== void 0 && (j = na) : j === na ? G[0] === ">" ? (j = v ?? Vn, U = -1) : G[1] === void 0 ? U = -2 : (U = j.lastIndex - G[2].length, g = G[1], j = G[3] === void 0 ? na : G[3] === '"' ? Oh : Ch) : j === Oh || j === Ch ? j = na : j === Th || j === zh ? j = Vn : (j = na, v = void 0);
    const J = j === na && f[O + 1].startsWith("/>") ? " " : "";
    E += j === Vn ? A + Vp : U >= 0 ? (r.push(g), A.slice(0, U) + Yh + A.slice(U) + Yl + J) : A + Yl + (U === -2 ? O : J);
  }
  return [Qh(f, E + (f[d] || "<?>") + (c === 2 ? "</svg>" : c === 3 ? "</math>" : "")), r];
};
class In {
  constructor({ strings: c, _$litType$: d }, r) {
    let v;
    this.parts = [];
    let E = 0, j = 0;
    const O = c.length - 1, A = this.parts, [g, G] = Wp(c, d);
    if (this.el = In.createElement(g, r), ia.currentNode = this.el.content, d === 2 || d === 3) {
      const U = this.el.content.firstChild;
      U.replaceWith(...U.childNodes);
    }
    for (; (v = ia.nextNode()) !== null && A.length < O; ) {
      if (v.nodeType === 1) {
        if (v.hasAttributes()) for (const U of v.getAttributeNames()) if (U.endsWith(Yh)) {
          const X = G[j++], J = v.getAttribute(U).split(Yl), B = /([.?@])?(.*)/.exec(X);
          A.push({ type: 1, index: E, name: B[2], strings: J, ctor: B[1] === "." ? Ip : B[1] === "?" ? Pp : B[1] === "@" ? eg : _u }), v.removeAttribute(U);
        } else U.startsWith(Yl) && (A.push({ type: 6, index: E }), v.removeAttribute(U));
        if (Lh.test(v.tagName)) {
          const U = v.textContent.split(Yl), X = U.length - 1;
          if (X > 0) {
            v.textContent = Su ? Su.emptyScript : "";
            for (let J = 0; J < X; J++) v.append(U[J], Wn()), ia.nextNode(), A.push({ type: 2, index: ++E });
            v.append(U[X], Wn());
          }
        }
      } else if (v.nodeType === 8) if (v.data === Gh) A.push({ type: 2, index: E });
      else {
        let U = -1;
        for (; (U = v.data.indexOf(Yl, U + 1)) !== -1; ) A.push({ type: 7, index: E }), U += Yl.length - 1;
      }
      E++;
    }
  }
  static createElement(c, d) {
    const r = ua.createElement("template");
    return r.innerHTML = c, r;
  }
}
function ka(f, c, d = f, r) {
  var v, E;
  if (c === Ja) return c;
  let j = r !== void 0 ? (v = d._$Co) == null ? void 0 : v[r] : d._$Cl;
  const O = Fn(c) ? void 0 : c._$litDirective$;
  return j?.constructor !== O && ((E = j?._$AO) == null || E.call(j, !1), O === void 0 ? j = void 0 : (j = new O(f), j._$AT(f, d, r)), r !== void 0 ? (d._$Co ?? (d._$Co = []))[r] = j : d._$Cl = j), j !== void 0 && (c = ka(f, j._$AS(f, c.values), j, r)), c;
}
class Fp {
  constructor(c, d) {
    this._$AV = [], this._$AN = void 0, this._$AD = c, this._$AM = d;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(c) {
    const { el: { content: d }, parts: r } = this._$AD, v = (c?.creationScope ?? ua).importNode(d, !0);
    ia.currentNode = v;
    let E = ia.nextNode(), j = 0, O = 0, A = r[0];
    for (; A !== void 0; ) {
      if (j === A.index) {
        let g;
        A.type === 2 ? g = new Pn(E, E.nextSibling, this, c) : A.type === 1 ? g = new A.ctor(E, A.name, A.strings, this, c) : A.type === 6 && (g = new tg(E, this, c)), this._$AV.push(g), A = r[++O];
      }
      j !== A?.index && (E = ia.nextNode(), j++);
    }
    return ia.currentNode = ua, v;
  }
  p(c) {
    let d = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(c, r, d), d += r.strings.length - 2) : r._$AI(c[d])), d++;
  }
}
class Pn {
  get _$AU() {
    var c;
    return ((c = this._$AM) == null ? void 0 : c._$AU) ?? this._$Cv;
  }
  constructor(c, d, r, v) {
    this.type = 2, this._$AH = Ve, this._$AN = void 0, this._$AA = c, this._$AB = d, this._$AM = r, this.options = v, this._$Cv = v?.isConnected ?? !0;
  }
  get parentNode() {
    let c = this._$AA.parentNode;
    const d = this._$AM;
    return d !== void 0 && c?.nodeType === 11 && (c = d.parentNode), c;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(c, d = this) {
    c = ka(this, c, d), Fn(c) ? c === Ve || c == null || c === "" ? (this._$AH !== Ve && this._$AR(), this._$AH = Ve) : c !== this._$AH && c !== Ja && this._(c) : c._$litType$ !== void 0 ? this.$(c) : c.nodeType !== void 0 ? this.T(c) : Kp(c) ? this.k(c) : this._(c);
  }
  O(c) {
    return this._$AA.parentNode.insertBefore(c, this._$AB);
  }
  T(c) {
    this._$AH !== c && (this._$AR(), this._$AH = this.O(c));
  }
  _(c) {
    this._$AH !== Ve && Fn(this._$AH) ? this._$AA.nextSibling.data = c : this.T(ua.createTextNode(c)), this._$AH = c;
  }
  $(c) {
    var d;
    const { values: r, _$litType$: v } = c, E = typeof v == "number" ? this._$AC(c) : (v.el === void 0 && (v.el = In.createElement(Qh(v.h, v.h[0]), this.options)), v);
    if (((d = this._$AH) == null ? void 0 : d._$AD) === E) this._$AH.p(r);
    else {
      const j = new Fp(E, this), O = j.u(this.options);
      j.p(r), this.T(O), this._$AH = j;
    }
  }
  _$AC(c) {
    let d = Mh.get(c.strings);
    return d === void 0 && Mh.set(c.strings, d = new In(c)), d;
  }
  k(c) {
    tf(this._$AH) || (this._$AH = [], this._$AR());
    const d = this._$AH;
    let r, v = 0;
    for (const E of c) v === d.length ? d.push(r = new Pn(this.O(Wn()), this.O(Wn()), this, this.options)) : r = d[v], r._$AI(E), v++;
    v < d.length && (this._$AR(r && r._$AB.nextSibling, v), d.length = v);
  }
  _$AR(c = this._$AA.nextSibling, d) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, d); c && c !== this._$AB; ) {
      const v = c.nextSibling;
      c.remove(), c = v;
    }
  }
  setConnected(c) {
    var d;
    this._$AM === void 0 && (this._$Cv = c, (d = this._$AP) == null || d.call(this, c));
  }
}
class _u {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(c, d, r, v, E) {
    this.type = 1, this._$AH = Ve, this._$AN = void 0, this.element = c, this.name = d, this._$AM = v, this.options = E, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = Ve;
  }
  _$AI(c, d = this, r, v) {
    const E = this.strings;
    let j = !1;
    if (E === void 0) c = ka(this, c, d, 0), j = !Fn(c) || c !== this._$AH && c !== Ja, j && (this._$AH = c);
    else {
      const O = c;
      let A, g;
      for (c = E[0], A = 0; A < E.length - 1; A++) g = ka(this, O[r + A], d, A), g === Ja && (g = this._$AH[A]), j || (j = !Fn(g) || g !== this._$AH[A]), g === Ve ? c = Ve : c !== Ve && (c += (g ?? "") + E[A + 1]), this._$AH[A] = g;
    }
    j && !v && this.j(c);
  }
  j(c) {
    c === Ve ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, c ?? "");
  }
}
class Ip extends _u {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(c) {
    this.element[this.name] = c === Ve ? void 0 : c;
  }
}
class Pp extends _u {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(c) {
    this.element.toggleAttribute(this.name, !!c && c !== Ve);
  }
}
class eg extends _u {
  constructor(c, d, r, v, E) {
    super(c, d, r, v, E), this.type = 5;
  }
  _$AI(c, d = this) {
    if ((c = ka(this, c, d, 0) ?? Ve) === Ja) return;
    const r = this._$AH, v = c === Ve && r !== Ve || c.capture !== r.capture || c.once !== r.once || c.passive !== r.passive, E = c !== Ve && (r === Ve || v);
    v && this.element.removeEventListener(this.name, this, r), E && this.element.addEventListener(this.name, this, c), this._$AH = c;
  }
  handleEvent(c) {
    var d;
    typeof this._$AH == "function" ? this._$AH.call(((d = this.options) == null ? void 0 : d.host) ?? this.element, c) : this._$AH.handleEvent(c);
  }
}
class tg {
  constructor(c, d, r) {
    this.element = c, this.type = 6, this._$AN = void 0, this._$AM = d, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(c) {
    ka(this, c);
  }
}
const Uh = ju.litHtmlPolyfillSupport;
Uh?.(In, Pn), (ju.litHtmlVersions ?? (ju.litHtmlVersions = [])).push("3.2.1");
const lg = (f, c, d) => {
  const r = d?.renderBefore ?? c;
  let v = r._$litPart$;
  if (v === void 0) {
    const E = d?.renderBefore ?? null;
    r._$litPart$ = v = new Pn(c.insertBefore(Wn(), E), E, void 0, d ?? {});
  }
  return v._$AI(f), v;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Jn = class extends $a {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var f;
    const c = super.createRenderRoot();
    return (f = this.renderOptions).renderBefore ?? (f.renderBefore = c.firstChild), c;
  }
  update(f) {
    const c = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(f), this._$Do = lg(c, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var f;
    super.connectedCallback(), (f = this._$Do) == null || f.setConnected(!0);
  }
  disconnectedCallback() {
    var f;
    super.disconnectedCallback(), (f = this._$Do) == null || f.setConnected(!1);
  }
  render() {
    return Ja;
  }
};
var Dh;
Jn._$litElement$ = !0, Jn.finalized = !0, (Dh = globalThis.litElementHydrateSupport) == null || Dh.call(globalThis, { LitElement: Jn });
const Hh = globalThis.litElementPolyfillSupport;
Hh?.({ LitElement: Jn });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ag = (f) => (c, d) => {
  d !== void 0 ? d.addInitializer(() => {
    customElements.define(f, c);
  }) : customElements.define(f, c);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ng = { attribute: !0, type: String, converter: xu, reflect: !1, hasChanged: ef }, ig = (f = ng, c, d) => {
  const { kind: r, metadata: v } = d;
  let E = globalThis.litPropertyMetadata.get(v);
  if (E === void 0 && globalThis.litPropertyMetadata.set(v, E = /* @__PURE__ */ new Map()), E.set(d.name, f), r === "accessor") {
    const { name: j } = d;
    return { set(O) {
      const A = c.get.call(this);
      c.set.call(this, O), this.requestUpdate(j, A, f);
    }, init(O) {
      return O !== void 0 && this.P(j, void 0, f), O;
    } };
  }
  if (r === "setter") {
    const { name: j } = d;
    return function(O) {
      const A = this[j];
      c.call(this, O), this.requestUpdate(j, A, f);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function yt(f) {
  return (c, d) => typeof d == "object" ? ig(f, c, d) : ((r, v, E) => {
    const j = v.hasOwnProperty(E);
    return v.constructor.createProperty(E, j ? { ...r, wrapped: !0 } : r), j ? Object.getOwnPropertyDescriptor(v, E) : void 0;
  })(f, c, d);
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ug = (f) => f.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const sg = { CHILD: 2 }, cg = (f) => (...c) => ({ _$litDirective$: f, values: c });
let fg = class {
  constructor(f) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(f, c, d) {
    this._$Ct = f, this._$AM = c, this._$Ci = d;
  }
  _$AS(f, c) {
    return this.update(f, c);
  }
  update(f, c) {
    return this.render(...c);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kn = (f, c) => {
  var d;
  const r = f._$AN;
  if (r === void 0) return !1;
  for (const v of r) (d = v._$AO) == null || d.call(v, c, !1), kn(v, c);
  return !0;
}, Eu = (f) => {
  let c, d;
  do {
    if ((c = f._$AM) === void 0) break;
    d = c._$AN, d.delete(f), f = c;
  } while (d?.size === 0);
}, Xh = (f) => {
  for (let c; c = f._$AM; f = c) {
    let d = c._$AN;
    if (d === void 0) c._$AN = d = /* @__PURE__ */ new Set();
    else if (d.has(f)) break;
    d.add(f), dg(c);
  }
};
function rg(f) {
  this._$AN !== void 0 ? (Eu(this), this._$AM = f, Xh(this)) : this._$AM = f;
}
function og(f, c = !1, d = 0) {
  const r = this._$AH, v = this._$AN;
  if (v !== void 0 && v.size !== 0) if (c) if (Array.isArray(r)) for (let E = d; E < r.length; E++) kn(r[E], !1), Eu(r[E]);
  else r != null && (kn(r, !1), Eu(r));
  else kn(this, f);
}
const dg = (f) => {
  f.type == sg.CHILD && (f._$AP ?? (f._$AP = og), f._$AQ ?? (f._$AQ = rg));
};
class hg extends fg {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(c, d, r) {
    super._$AT(c, d, r), Xh(this), this.isConnected = c._$AU;
  }
  _$AO(c, d = !0) {
    var r, v;
    c !== this.isConnected && (this.isConnected = c, c ? (r = this.reconnected) == null || r.call(this) : (v = this.disconnected) == null || v.call(this)), d && (kn(this, c), Eu(this));
  }
  setValue(c) {
    if (ug(this._$Ct)) this._$Ct._$AI(c, this);
    else {
      const d = [...this._$Ct._$AH];
      d[this._$Ci] = c, this._$Ct._$AI(d, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mg = () => new vg();
class vg {
}
const Wc = /* @__PURE__ */ new WeakMap(), pg = cg(class extends hg {
  render(f) {
    return Ve;
  }
  update(f, [c]) {
    var d;
    const r = c !== this.Y;
    return r && this.Y !== void 0 && this.rt(void 0), (r || this.lt !== this.ct) && (this.Y = c, this.ht = (d = f.options) == null ? void 0 : d.host, this.rt(this.ct = f.element)), Ve;
  }
  rt(f) {
    if (this.isConnected || (f = void 0), typeof this.Y == "function") {
      const c = this.ht ?? globalThis;
      let d = Wc.get(c);
      d === void 0 && (d = /* @__PURE__ */ new WeakMap(), Wc.set(c, d)), d.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0), d.set(this.Y, f), f !== void 0 && this.Y.call(this.ht, f);
    } else this.Y.value = f;
  }
  get lt() {
    var f, c;
    return typeof this.Y == "function" ? (f = Wc.get(this.ht ?? globalThis)) == null ? void 0 : f.get(this.Y) : (c = this.Y) == null ? void 0 : c.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
var gg = Object.defineProperty, yg = Object.getOwnPropertyDescriptor, ft = (f, c, d, r) => {
  for (var v = r > 1 ? void 0 : r ? yg(c, d) : c, E = f.length - 1, j; E >= 0; E--)
    (j = f[E]) && (v = (r ? j(c, d, v) : j(v)) || v);
  return r && v && gg(c, d, v), v;
};
function bg(f) {
  return customElements.get(f) ? (c) => c : ag(f);
}
let Fe = class extends Jn {
  constructor() {
    super(), this.GISCUS_SESSION_KEY = "giscus-session", this.GISCUS_DEFAULT_HOST = "https://giscus.app", this.ERROR_SUGGESTION = "Please consider reporting this error at https://github.com/giscus/giscus/issues/new.", this.__session = "", this._iframeRef = mg(), this.messageEventHandler = this.handleMessageEvent.bind(this), this.hasLoaded = !1, this.host = this.GISCUS_DEFAULT_HOST, this.strict = "0", this.reactionsEnabled = "1", this.emitMetadata = "0", this.inputPosition = "bottom", this.theme = "light", this.lang = "en", this.loading = "eager", this.setupSession(), window.addEventListener("message", this.messageEventHandler);
  }
  get iframeRef() {
    var f;
    return (f = this._iframeRef) == null ? void 0 : f.value;
  }
  get _host() {
    try {
      return new URL(this.host), this.host;
    } catch {
      return this.GISCUS_DEFAULT_HOST;
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("message", this.messageEventHandler);
  }
  _formatError(f) {
    return `[giscus] An error occurred. Error message: "${f}".`;
  }
  setupSession() {
    const f = location.href, c = new URL(f), d = localStorage.getItem(this.GISCUS_SESSION_KEY), r = c.searchParams.get("giscus") ?? "";
    if (this.__session = "", r) {
      localStorage.setItem(this.GISCUS_SESSION_KEY, JSON.stringify(r)), this.__session = r, c.searchParams.delete("giscus"), c.hash = "", history.replaceState(void 0, document.title, c.toString());
      return;
    }
    if (d)
      try {
        this.__session = JSON.parse(d);
      } catch (v) {
        localStorage.removeItem(this.GISCUS_SESSION_KEY), console.warn(
          `${this._formatError(
            v?.message
          )} Session has been cleared.`
        );
      }
  }
  signOut() {
    localStorage.removeItem(this.GISCUS_SESSION_KEY), this.__session = "", this.update(/* @__PURE__ */ new Map());
  }
  handleMessageEvent(f) {
    if (f.origin !== this._host) return;
    const { data: c } = f;
    if (!(typeof c == "object" && c.giscus)) return;
    if (this.iframeRef && c.giscus.resizeHeight && (this.iframeRef.style.height = `${c.giscus.resizeHeight}px`), c.giscus.signOut) {
      console.info("[giscus] User has logged out. Session has been cleared."), this.signOut();
      return;
    }
    if (!c.giscus.error) return;
    const d = c.giscus.error;
    if (d.includes("Bad credentials") || d.includes("Invalid state value") || d.includes("State has expired")) {
      if (localStorage.getItem(this.GISCUS_SESSION_KEY) !== null) {
        console.warn(`${this._formatError(d)} Session has been cleared.`), this.signOut();
        return;
      }
      console.error(
        `${this._formatError(d)} No session is stored initially. ${this.ERROR_SUGGESTION}`
      );
    }
    if (d.includes("Discussion not found")) {
      console.warn(
        `[giscus] ${d}. A new discussion will be created if a comment/reaction is submitted.`
      );
      return;
    }
    console.error(`${this._formatError(d)} ${this.ERROR_SUGGESTION}`);
  }
  sendMessage(f) {
    var c;
    !((c = this.iframeRef) != null && c.contentWindow) || !this.hasLoaded || this.iframeRef.contentWindow.postMessage({ giscus: f }, this._host);
  }
  updateConfig() {
    const f = {
      setConfig: {
        repo: this.repo,
        repoId: this.repoId,
        category: this.category,
        categoryId: this.categoryId,
        term: this.getTerm(),
        number: +this.getNumber(),
        strict: this.strict === "1",
        reactionsEnabled: this.reactionsEnabled === "1",
        emitMetadata: this.emitMetadata === "1",
        inputPosition: this.inputPosition,
        theme: this.theme,
        lang: this.lang
      }
    };
    this.sendMessage(f);
  }
  firstUpdated() {
    var f;
    (f = this.iframeRef) == null || f.addEventListener("load", () => {
      var c;
      (c = this.iframeRef) == null || c.classList.remove("loading"), this.hasLoaded = !0, this.updateConfig();
    });
  }
  requestUpdate(f, c, d) {
    if (!this.hasUpdated || f === "host") {
      super.requestUpdate(f, c, d);
      return;
    }
    this.updateConfig();
  }
  getMetaContent(f, c = !1) {
    const d = c ? `meta[property='og:${f}'],` : "", r = document.querySelector(
      d + `meta[name='${f}']`
    );
    return r ? r.content : "";
  }
  _getCleanedUrl() {
    const f = new URL(location.href);
    return f.searchParams.delete("giscus"), f.hash = "", f;
  }
  getTerm() {
    switch (this.mapping) {
      case "url":
        return this._getCleanedUrl().toString();
      case "title":
        return document.title;
      case "og:title":
        return this.getMetaContent("title", !0);
      case "specific":
        return this.term ?? "";
      case "number":
        return "";
      case "pathname":
      default:
        return location.pathname.length < 2 ? "index" : location.pathname.substring(1).replace(/\.\w+$/, "");
    }
  }
  getNumber() {
    return this.mapping === "number" ? this.term ?? "" : "";
  }
  getIframeSrc() {
    const f = this._getCleanedUrl().toString(), c = `${f}${this.id ? "#" + this.id : ""}`, d = this.getMetaContent("description", !0), r = this.getMetaContent("giscus:backlink") || f, v = {
      origin: c,
      session: this.__session,
      repo: this.repo,
      repoId: this.repoId ?? "",
      category: this.category ?? "",
      categoryId: this.categoryId ?? "",
      term: this.getTerm(),
      number: this.getNumber(),
      strict: this.strict,
      reactionsEnabled: this.reactionsEnabled,
      emitMetadata: this.emitMetadata,
      inputPosition: this.inputPosition,
      theme: this.theme,
      description: d,
      backLink: r
    }, E = this._host, j = this.lang ? `/${this.lang}` : "", O = new URLSearchParams(v);
    return `${E}${j}/widget?${O.toString()}`;
  }
  render() {
    return kp`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${pg(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `;
  }
};
Fe.styles = Bp`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `;
ft([
  yt({ reflect: !0 })
], Fe.prototype, "host", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "repo", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "repoId", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "category", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "categoryId", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "mapping", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "term", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "strict", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "reactionsEnabled", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "emitMetadata", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "inputPosition", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "theme", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "lang", 2);
ft([
  yt({ reflect: !0 })
], Fe.prototype, "loading", 2);
Fe = ft([
  bg("giscus-widget")
], Fe);
const xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get GiscusWidget() {
    return Fe;
  }
}, Symbol.toStringTag, { value: "Module" }));
export {
  jg as default
};
