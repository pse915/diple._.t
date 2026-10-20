function sy(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ls = { exports: {} }, Qn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lh;
function fy() {
  if (lh) return Qn;
  lh = 1;
  var r = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function d(f, y, N) {
    var S = null;
    if (N !== void 0 && (S = "" + N), y.key !== void 0 && (S = "" + y.key), "key" in y) {
      N = {};
      for (var q in y)
        q !== "key" && (N[q] = y[q]);
    } else N = y;
    return y = N.ref, {
      $$typeof: r,
      type: f,
      key: S,
      ref: y !== void 0 ? y : null,
      props: N
    };
  }
  return Qn.Fragment = s, Qn.jsx = d, Qn.jsxs = d, Qn;
}
var ah;
function ry() {
  return ah || (ah = 1, Ls.exports = fy()), Ls.exports;
}
var u = ry();
function pu(r) {
  if (!r || /[\s\x00-\x1f]/.test(r)) return "";
  try {
    const s = new URL(r);
    return ["https:", "http:"].includes(s.protocol) && !s.username && !s.password ? s.href : "";
  } catch {
    return "";
  }
}
function yu(r, s, d, f, y) {
  const N = s.trim().toLocaleLowerCase();
  return r.filter((S) => (d === "전체" || S.category === d) && (!f || S.tags.includes(f)) && (!N || [S.title, S.summary, S.description, ...S.tags].join(" ").toLocaleLowerCase().includes(N))).sort((S, q) => y === "name" ? S.title.localeCompare(q.title, "ko") : y === "recent" ? q.updatedAt.localeCompare(S.updatedAt) || S.sortOrder - q.sortOrder : Number(q.featured) - Number(S.featured) || S.sortOrder - q.sortOrder || S.title.localeCompare(q.title, "ko"));
}
function nh() {
  const r = new URLSearchParams(location.search);
  return { app: r.get("app") || "", view: ["home", "apps", "about", "guestbook"].includes(r.get("view") || "") ? r.get("view") : "home" };
}
function oy(r) {
  const s = new URL(location.href);
  return s.searchParams.delete("app"), s.searchParams.delete("view"), r.app ? s.searchParams.set("app", r.app) : r.view !== "home" && s.searchParams.set("view", r.view), s.hash = "", s;
}
const ih = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600"><rect width="960" height="600" fill="#eee9e2"/><rect x="330" y="170" width="300" height="190" rx="24" fill="#d6c5b6"/><path d="m360 320 65-80 55 50 48-65 70 95" fill="none" stroke="#796754" stroke-width="12"/><text x="480" y="420" text-anchor="middle" font-size="28" fill="#65574c" font-family="sans-serif">미리보기 준비 중</text></svg>');
function Ct({ name: r, size: s = 21 }) {
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
  return /* @__PURE__ */ u.jsx("svg", { "aria-hidden": "true", width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.65", strokeLinecap: "round", strokeLinejoin: "round", children: d[r] || d.spark });
}
function Yl({ src: r, alt: s, className: d = "" }) {
  return /* @__PURE__ */ u.jsx("img", { className: d, src: r || ih, alt: s, loading: "lazy", width: "960", height: "600", onError: (f) => {
    f.currentTarget.onerror = null, f.currentTarget.src = ih;
  } });
}
function wn({ url: r, children: s, primary: d = !1 }) {
  return pu(r) ? /* @__PURE__ */ u.jsxs("a", { className: `btn ${d ? "primary" : ""}`, href: pu(r), target: "_blank", rel: "noopener noreferrer", children: [
    s,
    /* @__PURE__ */ u.jsx(Ct, { name: "external", size: 16 })
  ] }) : null;
}
function Mh({ app: r, onOpen: s }) {
  return /* @__PURE__ */ u.jsxs("article", { className: "app-card", children: [
    /* @__PURE__ */ u.jsxs("button", { className: "card-preview", onClick: () => s(r.id), "aria-label": `${r.title} 상세 보기`, children: [
      /* @__PURE__ */ u.jsx(Yl, { src: r.thumbnail, alt: `${r.title} 미리보기` }),
      r.featured && /* @__PURE__ */ u.jsx("span", { className: "pick-label", children: "EDITOR’S PICK" }),
      /* @__PURE__ */ u.jsx("span", { className: "preview-arrow", children: /* @__PURE__ */ u.jsx(Ct, { name: "arrow", size: 19 }) })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "card-content", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "card-meta", children: [
        /* @__PURE__ */ u.jsx("span", { children: r.category }),
        /* @__PURE__ */ u.jsx("span", { children: r.isExample && r.showExampleBadge !== !1 ? "예시 콘텐츠" : r.status || "소개" })
      ] }),
      /* @__PURE__ */ u.jsx("h3", { children: /* @__PURE__ */ u.jsx("button", { onClick: () => s(r.id), children: r.title }) }),
      /* @__PURE__ */ u.jsx("p", { children: r.summary }),
      /* @__PURE__ */ u.jsxs("div", { className: "card-bottom", children: [
        /* @__PURE__ */ u.jsx("span", { children: r.tags.slice(0, 2).map((d) => "#" + d).join(" ") }),
        /* @__PURE__ */ u.jsx("button", { className: "icon-button", "aria-label": `${r.title} 댓글 보기`, onClick: () => s(r.id), children: /* @__PURE__ */ u.jsx(Ct, { name: "chat", size: 18 }) })
      ] })
    ] })
  ] });
}
function dy({ site: r, apps: s, sections: d, onView: f, onApp: y, onCategory: N }) {
  const S = r.hero, q = (p) => {
    const Y = yu(s, "", "전체", "", p.type === "featured" ? "featured" : "recent").filter((H) => p.type !== "featured" || H.featured).slice(0, p.count);
    return Y.length ? p.layout === "grid" ? /* @__PURE__ */ u.jsx("div", { className: `app-grid columns-${p.columns}`, children: Y.map((H) => /* @__PURE__ */ u.jsx(Mh, { app: H, onOpen: y }, H.id)) }) : /* @__PURE__ */ u.jsx("div", { className: "recent-list", children: Y.map((H, G) => /* @__PURE__ */ u.jsxs("button", { onClick: () => y(H.id), children: [
      /* @__PURE__ */ u.jsx("span", { className: "recent-num", children: String(G + 1).padStart(2, "0") }),
      /* @__PURE__ */ u.jsx(Yl, { src: H.thumbnail, alt: `${H.title} 미리보기` }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsxs("small", { children: [
          H.category,
          H.isExample && H.showExampleBadge !== !1 ? " · 예시" : ""
        ] }),
        /* @__PURE__ */ u.jsx("b", { children: H.title }),
        /* @__PURE__ */ u.jsx("p", { children: H.summary })
      ] }),
      /* @__PURE__ */ u.jsx("time", { children: H.updatedAt || "날짜 미입력" }),
      /* @__PURE__ */ u.jsx(Ct, { name: "arrow" })
    ] }, H.id)) }) : /* @__PURE__ */ u.jsx("p", { className: "empty", children: "공개된 앱을 준비하고 있습니다." });
  }, z = r.categoryItems?.filter((p) => p.visible) || r.categories.map((p) => ({ name: p, icon: "spark", visible: !0 }));
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: d.filter((p) => p.visible).map((p) => /* @__PURE__ */ u.jsxs("div", { "data-section-id": p.id, className: "managed-section", children: [
    p.isExample && p.showExampleBadge && /* @__PURE__ */ u.jsx("span", { className: "example-badge", children: "예시 콘텐츠" }),
    p.type === "hero" ? /* @__PURE__ */ u.jsxs("section", { className: `hero ${!(p.image || S?.image) && !S?.illustration ? "no-art" : ""}`, children: [
      /* @__PURE__ */ u.jsxs("div", { className: "hero-copy", children: [
        /* @__PURE__ */ u.jsxs("span", { className: "eyebrow", children: [
          /* @__PURE__ */ u.jsx("i", {}),
          p.eyebrow
        ] }),
        /* @__PURE__ */ u.jsx("h1", { children: (S?.title || p.title).split(`
`).map((Y, H) => /* @__PURE__ */ u.jsx("span", { style: { display: "block", color: H ? "var(--accent)" : "var(--ink)" }, children: Y }, H)) }),
        /* @__PURE__ */ u.jsx("p", { children: p.body || r.tagline }),
        S?.buttonLabel && /* @__PURE__ */ u.jsxs("button", { className: "btn primary", onClick: () => f(S.buttonView), children: [
          S.buttonLabel,
          /* @__PURE__ */ u.jsx(Ct, { name: "arrow", size: 17 })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "hero-caption", children: [
          /* @__PURE__ */ u.jsx("span", { className: "tiny-avatar", children: "T" }),
          r.profile.name,
          "의 디지털 작업실"
        ] })
      ] }),
      p.image || S?.image ? /* @__PURE__ */ u.jsx(Yl, { className: "hero-custom-image", src: p.image || S?.image || "", alt: "메인 소개 이미지" }) : S?.illustration ? /* @__PURE__ */ u.jsxs("div", { className: "hero-art", "aria-label": "아이디어를 도구로 만드는 공방 일러스트", role: "img", children: [
        /* @__PURE__ */ u.jsx("div", { className: "art-orbit orbit-one" }),
        /* @__PURE__ */ u.jsx("div", { className: "art-orbit orbit-two" }),
        /* @__PURE__ */ u.jsx("span", { className: "art-star", children: "✳" }),
        /* @__PURE__ */ u.jsxs("div", { className: "mini-note", children: [
          /* @__PURE__ */ u.jsx("span", { children: "IDEA NO. 01" }),
          /* @__PURE__ */ u.jsx("b", { style: { whiteSpace: "pre-line" }, children: S.note }),
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
          /* @__PURE__ */ u.jsx("small", { children: S.caption })
        ] }),
        S.sticker && /* @__PURE__ */ u.jsxs("span", { className: "art-sticker", children: [
          "MADE WITH",
          /* @__PURE__ */ u.jsx("br", {}),
          /* @__PURE__ */ u.jsx("b", { children: S.sticker })
        ] })
      ] }) : null
    ] }) : p.type === "categories" ? /* @__PURE__ */ u.jsxs("section", { className: "category-section", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: p.eyebrow }),
        /* @__PURE__ */ u.jsx("h2", { children: p.title })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "category-row", "aria-label": "카테고리 바로가기", children: z.map((Y, H) => /* @__PURE__ */ u.jsxs("button", { onClick: () => N(Y.name), children: [
        /* @__PURE__ */ u.jsx("span", { className: `category-circle tone-${H % 5}`, children: /* @__PURE__ */ u.jsx(Ct, { name: Y.icon, size: 25 }) }),
        /* @__PURE__ */ u.jsx("span", { children: Y.name })
      ] }, Y.name)) })
    ] }) : p.type === "featured" || p.type === "recent" ? /* @__PURE__ */ u.jsxs("section", { className: "section", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "section-head", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: p.eyebrow }),
          /* @__PURE__ */ u.jsx("h2", { children: p.title }),
          p.body && /* @__PURE__ */ u.jsx("p", { children: p.body })
        ] }),
        /* @__PURE__ */ u.jsxs("button", { className: "text-button", onClick: () => f("apps"), children: [
          "전체 앱 보기",
          /* @__PURE__ */ u.jsx(Ct, { name: "arrow", size: 16 })
        ] })
      ] }),
      q(p)
    ] }) : p.type === "invite" ? /* @__PURE__ */ u.jsxs("section", { className: "invite", children: [
      /* @__PURE__ */ u.jsx(Ct, { name: "chat", size: 35 }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("h2", { children: p.title }),
        /* @__PURE__ */ u.jsx("p", { children: p.body })
      ] }),
      p.buttonLabel && /* @__PURE__ */ u.jsxs("button", { className: "btn", onClick: () => f(p.buttonView), children: [
        p.buttonLabel,
        /* @__PURE__ */ u.jsx(Ct, { name: "arrow", size: 16 })
      ] })
    ] }) : /* @__PURE__ */ u.jsxs("section", { className: "panel managed-text", children: [
      /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: p.eyebrow }),
      /* @__PURE__ */ u.jsx("h2", { children: p.title }),
      /* @__PURE__ */ u.jsx("p", { children: p.body }),
      p.image && /* @__PURE__ */ u.jsx(Yl, { src: p.image, alt: p.title + " 이미지" }),
      p.buttonLabel && /* @__PURE__ */ u.jsxs("button", { className: "btn", onClick: () => f(p.buttonView), children: [
        p.buttonLabel,
        /* @__PURE__ */ u.jsx(Ct, { name: "arrow", size: 16 })
      ] })
    ] })
  ] }, p.id)) });
}
var Qs = { exports: {} }, at = {};
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
function hy() {
  if (uh) return at;
  uh = 1;
  var r = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), S = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), G = Symbol.iterator;
  function P(v) {
    return v === null || typeof v != "object" ? null : (v = G && v[G] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var Q = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, et = Object.assign, vt = {};
  function pt(v, M, L) {
    this.props = v, this.context = M, this.refs = vt, this.updater = L || Q;
  }
  pt.prototype.isReactComponent = {}, pt.prototype.setState = function(v, M) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, M, "setState");
  }, pt.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function rt() {
  }
  rt.prototype = pt.prototype;
  function w(v, M, L) {
    this.props = v, this.context = M, this.refs = vt, this.updater = L || Q;
  }
  var ct = w.prototype = new rt();
  ct.constructor = w, et(ct, pt.prototype), ct.isPureReactComponent = !0;
  var $t = Array.isArray;
  function bt() {
  }
  var tt = { H: null, A: null, T: null, S: null }, Dt = Object.prototype.hasOwnProperty;
  function Jt(v, M, L) {
    var V = L.ref;
    return {
      $$typeof: r,
      type: v,
      key: M,
      ref: V !== void 0 ? V : null,
      props: L
    };
  }
  function Lt(v, M) {
    return Jt(v.type, M, v.props);
  }
  function ie(v) {
    return typeof v == "object" && v !== null && v.$$typeof === r;
  }
  function Bt(v) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(L) {
      return M[L];
    });
  }
  var lt = /\/+/g;
  function It(v, M) {
    return typeof v == "object" && v !== null && v.key != null ? Bt("" + v.key) : M.toString(36);
  }
  function ue(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(bt, bt) : (v.status = "pending", v.then(
          function(M) {
            v.status === "pending" && (v.status = "fulfilled", v.value = M);
          },
          function(M) {
            v.status === "pending" && (v.status = "rejected", v.reason = M);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function C(v, M, L, V, K) {
    var F = typeof v;
    (F === "undefined" || F === "boolean") && (v = null);
    var ut = !1;
    if (v === null) ut = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          ut = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case r:
            case s:
              ut = !0;
              break;
            case Y:
              return ut = v._init, C(
                ut(v._payload),
                M,
                L,
                V,
                K
              );
          }
      }
    if (ut)
      return K = K(v), ut = V === "" ? "." + It(v, 0) : V, $t(K) ? (L = "", ut != null && (L = ut.replace(lt, "$&/") + "/"), C(K, M, L, "", function(h) {
        return h;
      })) : K != null && (ie(K) && (K = Lt(
        K,
        L + (K.key == null || v && v.key === K.key ? "" : ("" + K.key).replace(
          lt,
          "$&/"
        ) + "/") + ut
      )), M.push(K)), 1;
    ut = 0;
    var Pt = V === "" ? "." : V + ":";
    if ($t(v))
      for (var Ht = 0; Ht < v.length; Ht++)
        V = v[Ht], F = Pt + It(V, Ht), ut += C(
          V,
          M,
          L,
          F,
          K
        );
    else if (Ht = P(v), typeof Ht == "function")
      for (v = Ht.call(v), Ht = 0; !(V = v.next()).done; )
        V = V.value, F = Pt + It(V, Ht++), ut += C(
          V,
          M,
          L,
          F,
          K
        );
    else if (F === "object") {
      if (typeof v.then == "function")
        return C(
          ue(v),
          M,
          L,
          V,
          K
        );
      throw M = String(v), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ut;
  }
  function A(v, M, L) {
    if (v == null) return v;
    var V = [], K = 0;
    return C(v, V, "", "", function(F) {
      return M.call(L, F, K++);
    }), V;
  }
  function W(v) {
    if (v._status === -1) {
      var M = v._result;
      M = M(), M.then(
        function(L) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = L);
        },
        function(L) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = L);
        }
      ), v._status === -1 && (v._status = 0, v._result = M);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var ht = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  }, D = {
    map: A,
    forEach: function(v, M, L) {
      A(
        v,
        function() {
          M.apply(this, arguments);
        },
        L
      );
    },
    count: function(v) {
      var M = 0;
      return A(v, function() {
        M++;
      }), M;
    },
    toArray: function(v) {
      return A(v, function(M) {
        return M;
      }) || [];
    },
    only: function(v) {
      if (!ie(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  };
  return at.Activity = H, at.Children = D, at.Component = pt, at.Fragment = d, at.Profiler = y, at.PureComponent = w, at.StrictMode = f, at.Suspense = z, at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tt, at.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return tt.H.useMemoCache(v);
    }
  }, at.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, at.cacheSignal = function() {
    return null;
  }, at.cloneElement = function(v, M, L) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var V = et({}, v.props), K = v.key;
    if (M != null)
      for (F in M.key !== void 0 && (K = "" + M.key), M)
        !Dt.call(M, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && M.ref === void 0 || (V[F] = M[F]);
    var F = arguments.length - 2;
    if (F === 1) V.children = L;
    else if (1 < F) {
      for (var ut = Array(F), Pt = 0; Pt < F; Pt++)
        ut[Pt] = arguments[Pt + 2];
      V.children = ut;
    }
    return Jt(v.type, K, V);
  }, at.createContext = function(v) {
    return v = {
      $$typeof: S,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: N,
      _context: v
    }, v;
  }, at.createElement = function(v, M, L) {
    var V, K = {}, F = null;
    if (M != null)
      for (V in M.key !== void 0 && (F = "" + M.key), M)
        Dt.call(M, V) && V !== "key" && V !== "__self" && V !== "__source" && (K[V] = M[V]);
    var ut = arguments.length - 2;
    if (ut === 1) K.children = L;
    else if (1 < ut) {
      for (var Pt = Array(ut), Ht = 0; Ht < ut; Ht++)
        Pt[Ht] = arguments[Ht + 2];
      K.children = Pt;
    }
    if (v && v.defaultProps)
      for (V in ut = v.defaultProps, ut)
        K[V] === void 0 && (K[V] = ut[V]);
    return Jt(v, F, K);
  }, at.createRef = function() {
    return { current: null };
  }, at.forwardRef = function(v) {
    return { $$typeof: q, render: v };
  }, at.isValidElement = ie, at.lazy = function(v) {
    return {
      $$typeof: Y,
      _payload: { _status: -1, _result: v },
      _init: W
    };
  }, at.memo = function(v, M) {
    return {
      $$typeof: p,
      type: v,
      compare: M === void 0 ? null : M
    };
  }, at.startTransition = function(v) {
    var M = tt.T, L = {};
    tt.T = L;
    try {
      var V = v(), K = tt.S;
      K !== null && K(L, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(bt, ht);
    } catch (F) {
      ht(F);
    } finally {
      M !== null && L.types !== null && (M.types = L.types), tt.T = M;
    }
  }, at.unstable_useCacheRefresh = function() {
    return tt.H.useCacheRefresh();
  }, at.use = function(v) {
    return tt.H.use(v);
  }, at.useActionState = function(v, M, L) {
    return tt.H.useActionState(v, M, L);
  }, at.useCallback = function(v, M) {
    return tt.H.useCallback(v, M);
  }, at.useContext = function(v) {
    return tt.H.useContext(v);
  }, at.useDebugValue = function() {
  }, at.useDeferredValue = function(v, M) {
    return tt.H.useDeferredValue(v, M);
  }, at.useEffect = function(v, M) {
    return tt.H.useEffect(v, M);
  }, at.useEffectEvent = function(v) {
    return tt.H.useEffectEvent(v);
  }, at.useId = function() {
    return tt.H.useId();
  }, at.useImperativeHandle = function(v, M, L) {
    return tt.H.useImperativeHandle(v, M, L);
  }, at.useInsertionEffect = function(v, M) {
    return tt.H.useInsertionEffect(v, M);
  }, at.useLayoutEffect = function(v, M) {
    return tt.H.useLayoutEffect(v, M);
  }, at.useMemo = function(v, M) {
    return tt.H.useMemo(v, M);
  }, at.useOptimistic = function(v, M) {
    return tt.H.useOptimistic(v, M);
  }, at.useReducer = function(v, M, L) {
    return tt.H.useReducer(v, M, L);
  }, at.useRef = function(v) {
    return tt.H.useRef(v);
  }, at.useState = function(v) {
    return tt.H.useState(v);
  }, at.useSyncExternalStore = function(v, M, L) {
    return tt.H.useSyncExternalStore(
      v,
      M,
      L
    );
  }, at.useTransition = function() {
    return tt.H.useTransition();
  }, at.version = "19.2.0", at;
}
var ch;
function ks() {
  return ch || (ch = 1, Qs.exports = hy()), Qs.exports;
}
var X = ks();
const my = /* @__PURE__ */ sy(X), Uh = X.createContext(null), Eu = () => X.useContext(Uh);
function vy({ payload: r, emit: s, children: d }) {
  const f = X.useRef(null), [y, N] = X.useState(!1), [S, q] = X.useState(Date.now()), z = r.access, p = !!z?.authenticated && S < z.expiresAt, Y = (G, P = {}) => new Promise((Q, et) => {
    if (f.current) {
      et(new Error("이전 요청을 처리하고 있습니다."));
      return;
    }
    const vt = typeof P.requestId == "string" ? P.requestId : crypto.randomUUID(), pt = window.setTimeout(() => {
      f.current = null, N(!1), et(new Error("응답이 지연됩니다. 입력은 유지됩니다. 저장 여부를 확인한 뒤 다시 시도하세요."));
    }, 45e3);
    f.current = { id: vt, resolve: Q, reject: et, timer: pt }, N(!0), s("event", { ...P, id: vt, action: G });
  });
  X.useEffect(() => {
    const G = r.response, P = f.current;
    !G || !P || G.id !== P.id || (clearTimeout(P.timer), f.current = null, N(!1), G.ok ? P.resolve(G.result || {}) : P.reject(new Error(G.error || "처리하지 못했습니다.")));
  }, [r.response]), X.useEffect(() => () => {
    f.current && (clearTimeout(f.current.timer), f.current.reject(new Error("화면 연결이 종료되었습니다.")), f.current = null);
  }, []), X.useEffect(() => {
    const G = setInterval(() => q(Date.now()), 1e3);
    return () => clearInterval(G);
  }, []);
  const H = X.useRef(Y);
  return H.current = Y, X.useEffect(() => {
    const G = setInterval(() => {
      f.current || H.current("heartbeat").catch(() => {
      });
    }, 15e3);
    return () => clearInterval(G);
  }, []), X.useEffect(() => {
    z?.authenticated && !p && !f.current && H.current("heartbeat").catch(() => {
    });
  }, [p, z]), X.useEffect(() => {
    const G = setInterval(() => {
      f.current || H.current("refresh").catch(() => {
      });
    }, 6e4);
    return () => clearInterval(G);
  }, []), /* @__PURE__ */ u.jsx(Uh.Provider, { value: { request: Y, busy: y, authenticated: p, configured: !!z?.adminConfigured, privateConfigured: !!z?.privateConfigured, expiresAt: z?.expiresAt || 0 }, children: d });
}
const Xn = (r) => structuredClone(r), yy = (r) => r.split(`
`).map((s) => s.trim()).filter(Boolean);
function zt({ label: r, value: s, onChange: d, multi: f = !1, disabled: y = !1, type: N = "text" }) {
  return /* @__PURE__ */ u.jsxs("label", { children: [
    r,
    f ? /* @__PURE__ */ u.jsx("textarea", { "aria-label": r, rows: 4, value: s, disabled: y, onChange: (S) => d(S.target.value) }) : /* @__PURE__ */ u.jsx("input", { "aria-label": r, type: N, value: s, disabled: y, onChange: (S) => d(S.target.value) })
  ] });
}
function ge({ label: r, value: s, onChange: d }) {
  return /* @__PURE__ */ u.jsxs("label", { className: "check-field", children: [
    /* @__PURE__ */ u.jsx("input", { type: "checkbox", checked: s, onChange: (f) => d(f.target.checked) }),
    r
  ] });
}
function gy() {
  const r = Eu(), [s, d] = X.useState([]), [f, y] = X.useState(null), [N, S] = X.useState(""), [q, z] = X.useState(""), [p, Y] = X.useState(""), [H, G] = X.useState(""), [P, Q] = X.useState(""), et = async () => {
    G("");
    try {
      const w = await r.request("questions_list");
      d(w.questions), S(w.privateHead);
    } catch (w) {
      G(w.message);
    }
  }, vt = async (w) => {
    G("");
    try {
      const ct = await r.request("question_detail", { questionId: w });
      y(ct.question), S(ct.privateHead);
    } catch (ct) {
      G(ct.message);
    }
  }, pt = async (w) => {
    if (f && !(w === "delete" && !confirm("이 비밀 글을 삭제할까요? GitHub 과거 커밋에서는 별도 삭제가 필요합니다.")))
      try {
        await r.request("question_save", { questionId: f.id, privateHead: N, operation: w, status: f.status, reply: f.adminReply || "" }), y(null), Q("저장했습니다."), await et();
      } catch (ct) {
        G(ct.message);
      }
  }, rt = s.filter((w) => (!p || w.appId === p) && [w.title, w.content].join(" ").toLowerCase().includes(q.toLowerCase()));
  return /* @__PURE__ */ u.jsxs("section", { className: "inbox", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ u.jsx("h2", { children: "관리자 전용 비밀 질문" }),
      /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: r.busy, onClick: et, children: "질문 불러오기" })
    ] }),
    /* @__PURE__ */ u.jsx("p", { className: "muted", children: "인증된 현재 세션에만 표시됩니다. 이메일 답변은 아래 주소로 직접 보내세요. 이 화면의 답변·메모 저장은 이메일을 발송하지 않습니다." }),
    H && /* @__PURE__ */ u.jsx("p", { role: "alert", className: "error-note", children: H }),
    P && /* @__PURE__ */ u.jsx("p", { role: "status", children: P }),
    /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
      /* @__PURE__ */ u.jsx(zt, { label: "질문 제목·내용 검색", value: q, onChange: z }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        "관련 앱 필터",
        /* @__PURE__ */ u.jsxs("select", { "aria-label": "관련 앱 필터", value: p, onChange: (w) => Y(w.target.value), children: [
          /* @__PURE__ */ u.jsx("option", { value: "", children: "전체" }),
          [...new Map(s.map((w) => [w.appId, w.appTitle])).entries()].map(([w, ct]) => /* @__PURE__ */ u.jsx("option", { value: w, children: ct }, w))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "inbox-layout", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        rt.length === 0 && /* @__PURE__ */ u.jsx("p", { className: "notice", children: "질문을 불러오거나 검색 조건을 확인해 주세요." }),
        rt.map((w) => /* @__PURE__ */ u.jsxs("button", { className: "question-row", onClick: () => vt(w.id), disabled: r.busy, children: [
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
      f && /* @__PURE__ */ u.jsxs("section", { className: "panel", children: [
        /* @__PURE__ */ u.jsx("h3", { children: f.title }),
        /* @__PURE__ */ u.jsxs("p", { className: "muted", children: [
          f.authorNickname || "익명",
          " · ",
          f.appTitle
        ] }),
        /* @__PURE__ */ u.jsx("p", { className: "private-body", children: f.content }),
        /* @__PURE__ */ u.jsxs("label", { children: [
          "답변 받을 이메일",
          /* @__PURE__ */ u.jsx("input", { "aria-label": "답변 받을 이메일", readOnly: !0, value: f.email || "이메일이 등록되지 않은 이전 글입니다." })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
          /* @__PURE__ */ u.jsxs("label", { children: [
            "질문 상태",
            /* @__PURE__ */ u.jsx("select", { "aria-label": "질문 상태", value: f.status, onChange: (w) => y({ ...f, status: w.target.value }), children: ["미확인", "확인", "답변 완료"].map((w) => /* @__PURE__ */ u.jsx("option", { children: w }, w)) })
          ] }),
          /* @__PURE__ */ u.jsx(zt, { multi: !0, label: "비공개 관리자 답변·메모", value: f.adminReply || "", onChange: (w) => y({ ...f, adminReply: w }) }),
          /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
            /* @__PURE__ */ u.jsx("button", { className: "btn primary", disabled: r.busy, onClick: () => pt("update"), children: "답변·상태 저장" }),
            /* @__PURE__ */ u.jsx("button", { className: "btn danger", disabled: r.busy, onClick: () => pt("delete"), children: "비밀 글 삭제" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function py({ open: r, onClose: s, onPreview: d, payload: f }) {
  const y = Eu(), N = X.useRef(null), [S, q] = X.useState(""), [z, p] = X.useState(""), [Y, H] = X.useState(""), [G, P] = X.useState(null), [Q, et] = X.useState(null), [vt, pt] = X.useState([]), [rt, w] = X.useState("apps"), [ct, $t] = X.useState(0), [bt, tt] = X.useState(0), [Dt, Jt] = X.useState(!1), Lt = !!Q && !!G && (JSON.stringify(Q) !== JSON.stringify(G.document) || vt.length > 0), ie = X.useRef(0), Bt = X.useRef(!1), lt = () => {
    y.authenticated && Date.now() - ie.current > 3e4 && !y.busy && (ie.current = Date.now(), y.request("activity").catch(() => {
    }));
  };
  X.useEffect(() => {
    r && !N.current?.open && N.current?.showModal(), !r && N.current?.open && N.current.close();
  }, [r]), X.useEffect(() => {
    y.authenticated || (P(null), et(null), pt([]), q(""), w("apps"), Bt.current = !1);
  }, [y.authenticated]);
  const It = (h) => {
    P(h), et(Xn(h.document)), pt([]);
  }, ue = async () => {
    Jt(!0), p("");
    try {
      const h = await y.request("admin_load");
      It(h.admin);
    } catch (h) {
      p(h.message);
    } finally {
      Jt(!1);
    }
  };
  X.useEffect(() => {
    r && y.authenticated && !G && !Dt && !y.busy && !Bt.current && (Bt.current = !0, ue());
  }, [r, y.authenticated, G, Dt, y.busy]);
  const C = () => {
    y.busy || Lt && !confirm("저장하지 않은 편집을 취소하고 닫을까요?") || (G && (et(Xn(G.document)), pt([])), p(""), s());
  }, A = (h) => {
    et((b) => {
      if (!b) return b;
      const B = Xn(b);
      return h(B), B;
    }), lt();
  }, W = async (h) => {
    h.preventDefault(), p("");
    const b = S;
    q(""), Jt(!0);
    try {
      const B = await y.request("login", { password: b });
      It(B.admin);
    } catch (B) {
      p(B.message);
    } finally {
      Jt(!1);
    }
  }, ht = async (h, b) => {
    if (!(!G || !Q) && !(h === "publish" && !confirm("현재 편집 내용을 홈페이지에 게시할까요?")) && !(h === "discard" && !confirm("초안을 마지막 게시 내용으로 되돌릴까요?")) && !(h === "restore" && !confirm("이전 게시 버전을 초안으로 불러올까요? 현재 초안은 교체됩니다."))) {
      p(""), H("");
      try {
        const B = await y.request("cms_save", { operation: h, version: b, head: G.head, document: Q, uploads: vt.map(({ id: J, data: Nt }) => ({ id: J, data: Nt })) });
        It(B.admin), H(`${B.message} ${B.commit ? "커밋 " + B.commit.slice(0, 9) : ""}`);
      } catch (B) {
        p(B.message);
      }
    }
  }, D = async (h, b) => {
    if (p(""), h.size > 3 * 1024 * 1024 || !["image/png", "image/jpeg", "image/webp"].includes(h.type)) {
      p("PNG/JPG/WebP 이미지를 3MiB 이내로 올리세요.");
      return;
    }
    if (vt.length >= 10) {
      p("이미지는 한 번에 10개까지 올릴 수 있습니다. 먼저 임시 저장하세요.");
      return;
    }
    const B = crypto.randomUUID(), J = await new Promise((Nt, rl) => {
      const ol = new FileReader();
      ol.onload = () => Nt(String(ol.result)), ol.onerror = rl, ol.readAsDataURL(h);
    });
    pt((Nt) => [...Nt, { id: B, data: J.split(",")[1], preview: J }]), A((Nt) => b(Nt, "upload:" + B));
  }, v = (h) => vt.find((b) => "upload:" + b.id === h)?.preview || G?.images[h] || "", M = (h, b, B) => /* @__PURE__ */ u.jsxs("div", { className: "image-editor", children: [
    /* @__PURE__ */ u.jsx(zt, { label: h + " 경로", value: b, onChange: (J) => A((Nt) => B(Nt, J)) }),
    v(b) && /* @__PURE__ */ u.jsx("img", { src: v(b), alt: h + " 미리보기" }),
    /* @__PURE__ */ u.jsxs("label", { className: "file-label", children: [
      h,
      " 업로드",
      /* @__PURE__ */ u.jsx("input", { type: "file", accept: "image/png,image/jpeg,image/webp", onChange: (J) => {
        J.target.files?.[0] && D(J.target.files[0], B), J.target.value = "";
      } })
    ] }),
    /* @__PURE__ */ u.jsxs("button", { className: "text-button", onClick: () => A((J) => B(J, "")), children: [
      h,
      " 제거"
    ] })
  ] }), L = (h, b, B) => {
    const J = b + B;
    J < 0 || J >= h.length || ([h[b], h[J]] = [h[J], h[b]]);
  }, V = () => {
    if (!Q) return;
    const h = Xn(Q);
    h.apps = h.apps.filter((b) => b.visible !== !1).map((b) => ({ ...b, thumbnail: v(b.thumbnail), screenshots: b.screenshots.map(v) })), h.sections = h.sections.filter((b) => b.visible).map((b) => ({ ...b, image: v(b.image) })), h.site.hero.image = v(h.site.hero.image), h.site.profile.image = v(h.site.profile.image || ""), h.site.categories = (h.site.categoryItems || []).filter((b) => b.visible).map((b) => b.name), d({ ...f, site: h.site, apps: h.apps, sections: h.sections }), s();
  }, K = Q?.apps[ct], F = Q?.sections[bt], ut = (h, b) => A((B) => {
    B.apps[ct][h] = b;
  }), Pt = [["title", "앱 이름"], ["summary", "한 줄 소개"], ["description", "상세 소개", !0], ["appUrl", "앱 실행 주소"], ["githubUrl", "GitHub 주소"], ["guideUrl", "사용 설명서 주소"], ["status", "서비스 상태"], ["updatedAt", "업데이트 날짜"]], Ht = [["tags", "태그"], ["features", "주요 기능"], ["targetUsers", "추천 사용자"], ["supportedDevices", "지원 기기"], ["useCases", "활용 예시"], ["instructions", "사용 방법"], ["changelog", "변경 내역"]];
  return /* @__PURE__ */ u.jsx("dialog", { ref: N, className: "admin-dialog", "aria-label": "홈페이지 관리자", onCancel: (h) => {
    h.preventDefault(), C();
  }, onClick: (h) => {
    h.target === h.currentTarget && C();
  }, children: /* @__PURE__ */ u.jsxs("div", { className: "admin-shell", onInput: lt, children: [
    /* @__PURE__ */ u.jsxs("header", { className: "admin-header", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "WORKSHOP MANAGER" }),
        /* @__PURE__ */ u.jsx("h2", { children: "홈페이지 관리자" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
        y.authenticated && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx("span", { className: "admin-status", children: "관리자 인증됨" }),
          /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: y.busy, onClick: async () => {
            Lt && !confirm("편집을 취소하고 로그아웃할까요?") || (await y.request("logout"), P(null), et(null), pt([]), s());
          }, children: "로그아웃" })
        ] }),
        /* @__PURE__ */ u.jsx("button", { className: "icon-button", "aria-label": "관리자 닫기", disabled: y.busy, onClick: C, children: "✕" })
      ] })
    ] }),
    y.authenticated ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("nav", { className: "admin-tabs", "aria-label": "관리자 도구", children: [["apps", "앱 관리"], ["site", "사이트 문구"], ["sections", "홈 배치"], ["categories", "카테고리"], ["profile", "제작자·링크"], ["trash", "휴지통"], ["history", "게시 버전"], ["inbox", "비밀 질문"]].map(([h, b]) => /* @__PURE__ */ u.jsx("button", { className: rt === h ? "active" : "", onClick: () => w(h), children: b }, h)) }),
      z && /* @__PURE__ */ u.jsx("p", { role: "alert", className: "error-note sticky-error", children: z }),
      Y && /* @__PURE__ */ u.jsx("p", { role: "status", className: "notice", children: Y }),
      !Q || !G ? /* @__PURE__ */ u.jsx("p", { className: "notice", children: "관리 데이터를 불러오는 중입니다." }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        rt !== "inbox" && /* @__PURE__ */ u.jsxs("div", { className: "publish-toolbar", children: [
          /* @__PURE__ */ u.jsxs("span", { children: [
            Lt ? "저장하지 않은 변경 있음" : "초안과 동기화됨",
            " ",
            /* @__PURE__ */ u.jsx("small", { children: "공개 초안은 GitHub에서 보일 수 있습니다." })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
            /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: y.busy, onClick: V, children: "저장 전 미리보기" }),
            /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: y.busy, onClick: () => ht("draft"), children: "임시 저장" }),
            /* @__PURE__ */ u.jsx("button", { className: "btn primary", disabled: y.busy, onClick: () => ht("publish"), children: "게시하기" }),
            /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: y.busy, onClick: () => ht("discard"), children: "초안 되돌리기" }),
            /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: y.busy, onClick: () => {
              Lt && !confirm("로컬 편집을 취소하고 최신본을 불러올까요?") || ue();
            }, children: "최신본 불러오기" })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("fieldset", { className: "admin-fieldset", disabled: y.busy, children: [
          rt === "apps" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsxs("div", { className: "section-head", children: [
              /* @__PURE__ */ u.jsx("h3", { children: "앱 작성·배치" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => {
                const h = Q.apps.length;
                A((b) => b.apps.push({ id: "app-" + crypto.randomUUID().slice(0, 8), title: "새 앱", summary: "", description: "", category: b.site.categories[0] || "기타", tags: [], thumbnail: "", screenshots: [], appUrl: "", githubUrl: "", guideUrl: "", features: [], targetUsers: [], supportedDevices: [], status: "준비 중", featured: !1, sortOrder: h + 1, updatedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), isExample: !1, useCases: [], instructions: [], changelog: [], visible: !0, showExampleBadge: !0 })), $t(h);
              }, children: "새 앱 작성" })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "editor-layout", children: [
              /* @__PURE__ */ u.jsx("div", { className: "item-list", children: Q.apps.map((h, b) => /* @__PURE__ */ u.jsxs("div", { className: "item-row", children: [
                /* @__PURE__ */ u.jsxs("button", { className: b === ct ? "selected" : "", onClick: () => $t(b), children: [
                  /* @__PURE__ */ u.jsx("b", { children: h.title }),
                  /* @__PURE__ */ u.jsxs("small", { children: [
                    h.visible === !1 ? "숨김" : "표시",
                    " ",
                    h.isExample ? "· 예시" : ""
                  ] })
                ] }),
                /* @__PURE__ */ u.jsxs("div", { className: "order-buttons", children: [
                  /* @__PURE__ */ u.jsx("button", { "aria-label": `${h.title} 위로`, onClick: () => {
                    A((B) => {
                      L(B.apps, b, -1), B.apps.forEach((J, Nt) => J.sortOrder = Nt + 1);
                    }), $t(Math.max(0, b - 1));
                  }, children: "↑" }),
                  /* @__PURE__ */ u.jsx("button", { "aria-label": `${h.title} 아래로`, onClick: () => {
                    A((B) => {
                      L(B.apps, b, 1), B.apps.forEach((J, Nt) => J.sortOrder = Nt + 1);
                    }), $t(Math.min(Q.apps.length - 1, b + 1));
                  }, children: "↓" })
                ] })
              ] }, h.id)) }),
              K && /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
                /* @__PURE__ */ u.jsx(zt, { label: "앱 영구 ID", value: K.id, disabled: G.document.apps.some((h) => h.id === K.id), onChange: (h) => ut("id", h) }),
                /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
                  Pt.map(([h, b, B]) => /* @__PURE__ */ u.jsx(zt, { label: b, value: String(K[h] || ""), multi: B, onChange: (J) => ut(h, J) }, h)),
                  /* @__PURE__ */ u.jsxs("label", { children: [
                    "카테고리",
                    /* @__PURE__ */ u.jsx("select", { "aria-label": "앱 카테고리", value: K.category, onChange: (h) => ut("category", h.target.value), children: Q.site.categoryItems?.map((h) => /* @__PURE__ */ u.jsx("option", { children: h.name }, h.name)) })
                  ] }),
                  /* @__PURE__ */ u.jsx(zt, { label: "표시 순서", type: "number", value: K.sortOrder, onChange: (h) => ut("sortOrder", Number(h)) })
                ] }),
                /* @__PURE__ */ u.jsxs("div", { className: "check-row", children: [
                  /* @__PURE__ */ u.jsx(ge, { label: "공개 화면에 표시", value: K.visible !== !1, onChange: (h) => ut("visible", h) }),
                  /* @__PURE__ */ u.jsx(ge, { label: "대표 앱", value: K.featured, onChange: (h) => ut("featured", h) }),
                  /* @__PURE__ */ u.jsx(ge, { label: "예시 콘텐츠", value: K.isExample, onChange: (h) => ut("isExample", h) }),
                  /* @__PURE__ */ u.jsx(ge, { label: "예시 배지 표시", value: K.showExampleBadge !== !1, onChange: (h) => ut("showExampleBadge", h) })
                ] }),
                M("썸네일", K.thumbnail, (h, b) => h.apps[ct].thumbnail = b),
                /* @__PURE__ */ u.jsx("h4", { children: "미리보기 이미지" }),
                K.screenshots.map((h, b) => /* @__PURE__ */ u.jsxs("div", { children: [
                  M(`미리보기 ${b + 1}`, h, (B, J) => B.apps[ct].screenshots[b] = J),
                  /* @__PURE__ */ u.jsxs("button", { className: "text-button danger", onClick: () => A((B) => B.apps[ct].screenshots.splice(b, 1)), children: [
                    "미리보기 ",
                    b + 1,
                    " 삭제"
                  ] })
                ] }, b)),
                /* @__PURE__ */ u.jsx("button", { className: "btn", disabled: K.screenshots.length >= 8, onClick: () => A((h) => h.apps[ct].screenshots.push("")), children: "미리보기 추가" }),
                /* @__PURE__ */ u.jsx("div", { className: "editor-grid", children: Ht.map(([h, b]) => /* @__PURE__ */ u.jsx(zt, { multi: !0, label: b + " (한 줄에 하나)", value: K[h].join(`
`), onChange: (B) => ut(h, yy(B)) }, h)) }),
                /* @__PURE__ */ u.jsx("button", { className: "btn danger", onClick: () => {
                  confirm(`‘${K.title}’ 앱 소개를 휴지통으로 이동할까요? 댓글은 유지됩니다.`) && (A((h) => {
                    h.trash.push({ kind: "app", value: h.apps.splice(ct, 1)[0] });
                  }), $t(0));
                }, children: "앱 삭제" })
              ] })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "button-row bulk-actions", children: [
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((h) => {
                h.apps.filter((b) => b.isExample).forEach((b) => b.visible = !1), h.sections.filter((b) => b.isExample).forEach((b) => b.visible = !1);
              }), children: "예시 콘텐츠 전체 숨기기" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn danger", onClick: () => {
                const h = [...Q.apps.filter((b) => b.isExample).map((b) => b.title), ...Q.sections.filter((b) => b.isExample).map((b) => b.title)];
                confirm(`다음 예시 항목을 휴지통으로 이동할까요?
` + h.join(`
`)) && (A((b) => {
                  b.trash.push(...b.apps.filter((B) => B.isExample).map((B) => ({ kind: "app", value: B })), ...b.sections.filter((B) => B.isExample).map((B) => ({ kind: "section", value: B }))), b.apps = b.apps.filter((B) => !B.isExample), b.sections = b.sections.filter((B) => !B.isExample);
                }), $t(0), tt(0));
              }, children: "예시 콘텐츠 정리" })
            ] })
          ] }),
          rt === "site" && /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
            /* @__PURE__ */ u.jsx("h3", { children: "사이트 문구와 장식" }),
            /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
              [["title", "사이트 이름"], ["brand", "영문 브랜드"], ["brandMark", "로고 문자"], ["tagline", "소개 문구"], ["topNote", "상단 안내"], ["footer", "하단 문구"]].map(([h, b]) => /* @__PURE__ */ u.jsx(zt, { label: b, value: String(Q.site[h] || ""), onChange: (B) => A((J) => J.site[h] = B) }, h)),
              /* @__PURE__ */ u.jsx(ge, { label: "푸터 표시", value: Q.site.footerVisible !== !1, onChange: (h) => A((b) => b.site.footerVisible = h) })
            ] }),
            /* @__PURE__ */ u.jsx("h4", { children: "메인 소개" }),
            Q.site.hero && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(zt, { label: "메인 제목 (줄바꿈 가능)", multi: !0, value: Q.site.hero.title, onChange: (h) => A((b) => b.site.hero.title = h) }),
              /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
                /* @__PURE__ */ u.jsx(zt, { label: "메인 버튼 문구", value: Q.site.hero.buttonLabel, onChange: (h) => A((b) => b.site.hero.buttonLabel = h) }),
                /* @__PURE__ */ u.jsxs("label", { children: [
                  "메인 버튼 연결",
                  /* @__PURE__ */ u.jsxs("select", { "aria-label": "메인 버튼 연결", value: Q.site.hero.buttonView, onChange: (h) => A((b) => b.site.hero.buttonView = h.target.value), children: [
                    /* @__PURE__ */ u.jsx("option", { value: "apps", children: "앱 모음" }),
                    /* @__PURE__ */ u.jsx("option", { value: "about", children: "제작자 소개" }),
                    /* @__PURE__ */ u.jsx("option", { value: "guestbook", children: "질문게시판" })
                  ] })
                ] })
              ] }),
              M("메인 이미지", Q.site.hero.image, (h, b) => h.site.hero.image = b),
              /* @__PURE__ */ u.jsx(ge, { label: "이미지가 없을 때 기본 일러스트 표시", value: Q.site.hero.illustration, onChange: (h) => A((b) => b.site.hero.illustration = h) }),
              /* @__PURE__ */ u.jsx(zt, { label: "일러스트 메모 문구", multi: !0, value: Q.site.hero.note, onChange: (h) => A((b) => b.site.hero.note = h) }),
              /* @__PURE__ */ u.jsx(zt, { label: "일러스트 앱 문구", value: Q.site.hero.caption, onChange: (h) => A((b) => b.site.hero.caption = h) }),
              /* @__PURE__ */ u.jsx(zt, { label: "일러스트 스티커 문구", value: Q.site.hero.sticker, onChange: (h) => A((b) => b.site.hero.sticker = h) })
            ] }),
            /* @__PURE__ */ u.jsx("h4", { children: "왼쪽 장식 안내" }),
            Q.site.sidebar && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(ge, { label: "왼쪽 안내 표시", value: Q.site.sidebar.visible, onChange: (h) => A((b) => b.site.sidebar.visible = h) }),
              /* @__PURE__ */ u.jsx(zt, { label: "왼쪽 안내 제목", value: Q.site.sidebar.title, onChange: (h) => A((b) => b.site.sidebar.title = h) }),
              /* @__PURE__ */ u.jsx(zt, { multi: !0, label: "왼쪽 안내 내용", value: Q.site.sidebar.body, onChange: (h) => A((b) => b.site.sidebar.body = h) })
            ] })
          ] }),
          rt === "sections" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsxs("div", { className: "section-head", children: [
              /* @__PURE__ */ u.jsx("h3", { children: "홈 섹션 추가·배치" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => {
                const h = Q.sections.length;
                A((b) => b.sections.push({ id: "section-" + crypto.randomUUID().slice(0, 8), type: "text", title: "새 안내", eyebrow: "FROM THE WORKSHOP", body: "안내 내용을 입력하세요.", visible: !0, isExample: !1, showExampleBadge: !0, layout: "grid", columns: 3, count: 3, image: "", buttonLabel: "", buttonView: "apps" })), tt(h);
              }, children: "새 섹션 추가" })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "editor-layout", children: [
              /* @__PURE__ */ u.jsx("div", { className: "item-list", children: Q.sections.map((h, b) => /* @__PURE__ */ u.jsxs("div", { className: "item-row", children: [
                /* @__PURE__ */ u.jsxs("button", { className: b === bt ? "selected" : "", onClick: () => tt(b), children: [
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
                    A((B) => L(B.sections, b, -1)), tt(Math.max(0, b - 1));
                  }, children: "↑" }),
                  /* @__PURE__ */ u.jsx("button", { "aria-label": `${h.title} 아래로`, onClick: () => {
                    A((B) => L(B.sections, b, 1)), tt(Math.min(Q.sections.length - 1, b + 1));
                  }, children: "↓" })
                ] })
              ] }, h.id)) }),
              F && /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
                /* @__PURE__ */ u.jsxs("label", { children: [
                  "섹션 종류",
                  /* @__PURE__ */ u.jsx("select", { "aria-label": "섹션 종류", value: F.type, onChange: (h) => A((b) => b.sections[bt].type = h.target.value), children: [["hero", "메인 소개"], ["categories", "카테고리"], ["featured", "대표 앱"], ["recent", "최근 앱"], ["invite", "질문 안내"], ["text", "자유 안내"]].map(([h, b]) => /* @__PURE__ */ u.jsx("option", { value: h, children: b }, h)) })
                ] }),
                ["title", "eyebrow", "body", "buttonLabel"].map((h, b) => /* @__PURE__ */ u.jsx(zt, { label: ["섹션 제목", "작은 제목", "섹션 내용", "섹션 버튼 문구"][b], value: F[h], multi: h === "body", onChange: (B) => A((J) => J.sections[bt][h] = B) }, h)),
                /* @__PURE__ */ u.jsxs("div", { className: "check-row", children: [
                  /* @__PURE__ */ u.jsx(ge, { label: "섹션 표시", value: F.visible, onChange: (h) => A((b) => b.sections[bt].visible = h) }),
                  /* @__PURE__ */ u.jsx(ge, { label: "예시 섹션", value: F.isExample, onChange: (h) => A((b) => b.sections[bt].isExample = h) }),
                  /* @__PURE__ */ u.jsx(ge, { label: "예시 배지 표시", value: F.showExampleBadge, onChange: (h) => A((b) => b.sections[bt].showExampleBadge = h) })
                ] }),
                /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
                  /* @__PURE__ */ u.jsxs("label", { children: [
                    "앱 표시 방식",
                    /* @__PURE__ */ u.jsxs("select", { "aria-label": "앱 표시 방식", value: F.layout, onChange: (h) => A((b) => b.sections[bt].layout = h.target.value), children: [
                      /* @__PURE__ */ u.jsx("option", { value: "grid", children: "카드형" }),
                      /* @__PURE__ */ u.jsx("option", { value: "list", children: "목록형" })
                    ] })
                  ] }),
                  /* @__PURE__ */ u.jsx(zt, { label: "표시 개수", type: "number", value: F.count, onChange: (h) => A((b) => b.sections[bt].count = Number(h)) }),
                  /* @__PURE__ */ u.jsx(zt, { label: "데스크톱 열 수 (2~4)", type: "number", value: F.columns, onChange: (h) => A((b) => b.sections[bt].columns = Number(h)) }),
                  /* @__PURE__ */ u.jsxs("label", { children: [
                    "섹션 버튼 연결",
                    /* @__PURE__ */ u.jsxs("select", { "aria-label": "섹션 버튼 연결", value: F.buttonView, onChange: (h) => A((b) => b.sections[bt].buttonView = h.target.value), children: [
                      /* @__PURE__ */ u.jsx("option", { value: "apps", children: "앱 모음" }),
                      /* @__PURE__ */ u.jsx("option", { value: "about", children: "제작자 소개" }),
                      /* @__PURE__ */ u.jsx("option", { value: "guestbook", children: "질문게시판" })
                    ] })
                  ] })
                ] }),
                M("섹션 이미지", F.image, (h, b) => h.sections[bt].image = b),
                /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
                  /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((h) => h.sections.push({ ...Xn(F), id: "section-" + crypto.randomUUID().slice(0, 8), title: F.title + " 사본" })), children: "섹션 복제" }),
                  /* @__PURE__ */ u.jsx("button", { className: "btn danger", onClick: () => {
                    confirm(`‘${F.title}’ 섹션을 휴지통으로 이동할까요?`) && (A((h) => h.trash.push({ kind: "section", value: h.sections.splice(bt, 1)[0] })), tt(0));
                  }, children: "섹션 삭제" })
                ] })
              ] })
            ] })
          ] }),
          rt === "categories" && /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
            /* @__PURE__ */ u.jsx("h3", { children: "카테고리 이름·아이콘·순서" }),
            Q.site.categoryItems?.map((h, b) => /* @__PURE__ */ u.jsxs("section", { className: "panel", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
                /* @__PURE__ */ u.jsx(zt, { label: `카테고리 ${b + 1} 이름`, value: h.name, onChange: (B) => A((J) => {
                  const Nt = J.site.categoryItems[b].name;
                  J.site.categoryItems[b].name = B, J.apps.forEach((rl) => {
                    rl.category === Nt && (rl.category = B);
                  });
                }) }),
                /* @__PURE__ */ u.jsxs("label", { children: [
                  "아이콘",
                  /* @__PURE__ */ u.jsx("select", { "aria-label": "카테고리 아이콘", value: h.icon, onChange: (B) => A((J) => J.site.categoryItems[b].icon = B.target.value), children: ["layers", "calendar", "game", "sun", "spark", "grid", "user"].map((B) => /* @__PURE__ */ u.jsx("option", { children: B }, B)) })
                ] })
              ] }),
              /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
                /* @__PURE__ */ u.jsx(ge, { label: "카테고리 표시", value: h.visible, onChange: (B) => A((J) => J.site.categoryItems[b].visible = B) }),
                /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((B) => L(B.site.categoryItems, b, -1)), children: "위로" }),
                /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((B) => L(B.site.categoryItems, b, 1)), children: "아래로" }),
                /* @__PURE__ */ u.jsx("button", { className: "btn danger", disabled: h.name === "기타", onClick: () => {
                  confirm("카테고리를 삭제하고 연결된 앱을 기타로 옮길까요?") && A((B) => {
                    B.apps.forEach((J) => {
                      J.category === h.name && (J.category = "기타");
                    }), B.site.categoryItems.splice(b, 1);
                  });
                }, children: "삭제" })
              ] })
            ] }, b)),
            /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((h) => h.site.categoryItems.push({ name: "새 카테고리 " + h.site.categoryItems.length, icon: "spark", visible: !0 })), children: "카테고리 추가" })
          ] }),
          rt === "profile" && /* @__PURE__ */ u.jsxs("div", { className: "editor-fields", children: [
            /* @__PURE__ */ u.jsx("h3", { children: "제작자 소개" }),
            /* @__PURE__ */ u.jsx(zt, { multi: !0, label: "제작자 페이지 제목", value: Q.site.profile.heading || "", onChange: (h) => A((b) => b.site.profile.heading = h) }),
            /* @__PURE__ */ u.jsx(ge, { label: "제작자 소개 본문 표시", value: Q.site.profile.visible !== !1, onChange: (h) => A((b) => b.site.profile.visible = h) }),
            ["name", "role", "bio"].map((h, b) => /* @__PURE__ */ u.jsx(zt, { label: ["제작자 이름", "제작자 한 줄 소개", "제작자 상세 소개"][b], value: Q.site.profile[h], multi: h === "bio", onChange: (B) => A((J) => J.site.profile[h] = B) }, h)),
            M("프로필 이미지", Q.site.profile.image || "", (h, b) => h.site.profile.image = b),
            /* @__PURE__ */ u.jsx("h4", { children: "제작 방향 카드" }),
            /* @__PURE__ */ u.jsx(ge, { label: "제작 방향 카드 표시", value: Q.site.profile.showPrinciples !== !1, onChange: (h) => A((b) => b.site.profile.showPrinciples = h) }),
            /* @__PURE__ */ u.jsx(ge, { label: "제작자 페이지 질문 안내 표시", value: Q.site.profile.showInvite !== !1, onChange: (h) => A((b) => b.site.profile.showInvite = h) }),
            /* @__PURE__ */ u.jsx(zt, { label: "제작자 질문 안내 제목", value: Q.site.profile.inviteTitle || "", onChange: (h) => A((b) => b.site.profile.inviteTitle = h) }),
            /* @__PURE__ */ u.jsx(zt, { label: "제작자 질문 안내 문구", value: Q.site.profile.inviteBody || "", onChange: (h) => A((b) => b.site.profile.inviteBody = h) }),
            /* @__PURE__ */ u.jsx(zt, { label: "제작자 질문 안내 버튼", value: Q.site.profile.buttonLabel || "", onChange: (h) => A((b) => b.site.profile.buttonLabel = h) }),
            Q.site.profile.principles.map((h, b) => /* @__PURE__ */ u.jsxs("div", { className: "ordered-field", children: [
              /* @__PURE__ */ u.jsx(zt, { label: `제작 방향 ${b + 1}`, value: h, onChange: (B) => A((J) => J.site.profile.principles[b] = B) }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((B) => L(B.site.profile.principles, b, -1)), children: "위로" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((B) => L(B.site.profile.principles, b, 1)), children: "아래로" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((B) => B.site.profile.principles.splice(b, 1)), children: "삭제" })
            ] }, b)),
            /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((h) => h.site.profile.principles.push("새 제작 방향")), children: "제작 방향 추가" }),
            /* @__PURE__ */ u.jsx("h4", { children: "외부 채널 링크" }),
            Q.site.profile.links.map((h, b) => /* @__PURE__ */ u.jsxs("section", { className: "panel", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "editor-grid", children: [
                /* @__PURE__ */ u.jsx(zt, { label: `외부 링크 ${b + 1} 이름`, value: h.label, onChange: (B) => A((J) => J.site.profile.links[b].label = B) }),
                /* @__PURE__ */ u.jsx(zt, { label: `외부 링크 ${b + 1} 주소`, value: h.url, onChange: (B) => A((J) => J.site.profile.links[b].url = B) })
              ] }),
              /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
                /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((B) => L(B.site.profile.links, b, -1)), children: "위로" }),
                /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((B) => L(B.site.profile.links, b, 1)), children: "아래로" }),
                /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((B) => B.site.profile.links.splice(b, 1)), children: "링크 삭제" })
              ] })
            ] }, b)),
            /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((h) => h.site.profile.links.push({ label: "새 링크", url: "" })), children: "외부 링크 추가" })
          ] }),
          rt === "trash" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx("h3", { children: "휴지통" }),
            /* @__PURE__ */ u.jsx("p", { className: "muted", children: "복원 후 게시해야 일반 화면에 반영됩니다. 완전 정리도 GitHub 과거 커밋에서의 삭제는 아닙니다." }),
            Q.trash.map((h, b) => /* @__PURE__ */ u.jsxs("div", { className: "trash-row", children: [
              /* @__PURE__ */ u.jsx("b", { children: h.value.title }),
              /* @__PURE__ */ u.jsx("span", { children: h.kind === "app" ? "앱" : "섹션" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => A((B) => {
                const J = B.trash[b];
                if (J.kind === "app") {
                  if (B.apps.some((Nt) => Nt.id === J.value.id)) {
                    p("같은 ID의 앱이 있습니다. 기존 앱을 먼저 확인하세요.");
                    return;
                  }
                  B.apps.push(J.value);
                } else {
                  if (B.sections.some((Nt) => Nt.id === J.value.id)) {
                    p("같은 ID의 섹션이 있습니다.");
                    return;
                  }
                  B.sections.push(J.value);
                }
                B.trash.splice(b, 1);
              }), children: "복원" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn danger", onClick: () => {
                confirm("휴지통에서 제거할까요?") && A((B) => B.trash.splice(b, 1));
              }, children: "완전 정리" })
            ] }, b))
          ] }),
          rt === "history" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx("h3", { children: "이전 게시 버전" }),
            /* @__PURE__ */ u.jsx("p", { className: "muted", children: "이전 버전을 초안으로 불러온 뒤 미리보기하고 게시하세요. 최근 20회 게시 전 상태를 제공합니다." }),
            G.history.map((h) => /* @__PURE__ */ u.jsxs("div", { className: "trash-row", children: [
              /* @__PURE__ */ u.jsx("span", { children: h.createdAt }),
              /* @__PURE__ */ u.jsx("code", { children: h.id.slice(0, 8) }),
              /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => ht("restore", h.id), children: "이 버전을 초안으로 복구" })
            ] }, h.id))
          ] })
        ] }),
        rt === "inbox" && /* @__PURE__ */ u.jsx(gy, {})
      ] })
    ] }) : /* @__PURE__ */ u.jsxs("form", { className: "admin-login editor-fields", onSubmit: W, children: [
      /* @__PURE__ */ u.jsx("h3", { children: "관리자 코드로 로그인" }),
      /* @__PURE__ */ u.jsx("p", { className: "muted", children: "앱과 홈페이지를 편집하고 비밀 질문을 관리합니다." }),
      !y.configured && /* @__PURE__ */ u.jsx("p", { className: "notice", children: "관리자 기능을 사용하려면 Streamlit Secrets 설정이 필요합니다. 기본 관리자 코드는 없습니다." }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        "관리자 코드",
        /* @__PURE__ */ u.jsx("input", { type: "password", value: S, onChange: (h) => q(h.target.value), autoComplete: "current-password", maxLength: 512 })
      ] }),
      z && /* @__PURE__ */ u.jsx("p", { role: "alert", className: "error-note", children: z }),
      /* @__PURE__ */ u.jsx("button", { className: "btn primary", disabled: y.busy || !y.configured || !S, children: "관리자 로그인" })
    ] })
  ] }) });
}
function sh({ appId: r = "" }) {
  const s = Eu(), [d, f] = X.useState(!1), [y, N] = X.useState(""), [S, q] = X.useState(""), [z, p] = X.useState(""), [Y, H] = X.useState(""), [G, P] = X.useState(""), [Q, et] = X.useState(""), vt = X.useRef(crypto.randomUUID()), pt = async (rt) => {
    rt.preventDefault(), P("");
    try {
      const w = await s.request("question_submit", { requestId: vt.current, appId: r, nickname: y, email: S, title: z, content: Y });
      et(w.receipt), q(""), N(""), p(""), H(""), vt.current = crypto.randomUUID();
    } catch (w) {
      P(w.message);
    }
  };
  return /* @__PURE__ */ u.jsxs("section", { className: "panel private-form", children: [
    /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "ONLY FOR THE ADMINISTRATOR" }),
    /* @__PURE__ */ u.jsx("h2", { children: r ? "이 앱에 대해 비밀댓글 남기기" : "관리자에게 비밀 질문 보내기" }),
    /* @__PURE__ */ u.jsx("p", { children: "비밀 글은 홈페이지 관리자에게만 전달됩니다. 제출 후 일반 방문자 화면에서는 내용을 조회할 수 없습니다." }),
    /* @__PURE__ */ u.jsx("p", { className: "muted", children: "이메일은 관리자의 수동 답변 연락용으로 비공개 보관됩니다. 자동 이메일은 발송되지 않습니다." }),
    s.privateConfigured ? Q ? /* @__PURE__ */ u.jsxs("div", { role: "status", className: "notice", children: [
      "접수되었습니다. 접수번호: ",
      /* @__PURE__ */ u.jsx("b", { children: Q }),
      /* @__PURE__ */ u.jsx("p", { children: "이 번호로 글의 내용을 조회할 수는 없습니다." }),
      /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => {
        et(""), f(!1);
      }, children: "확인" })
    ] }) : d ? /* @__PURE__ */ u.jsxs("form", { onSubmit: pt, className: "editor-fields", children: [
      /* @__PURE__ */ u.jsxs("label", { children: [
        "닉네임 (선택)",
        /* @__PURE__ */ u.jsx("input", { maxLength: 60, value: y, onChange: (rt) => N(rt.target.value) })
      ] }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        "답변 받을 이메일 (필수)",
        /* @__PURE__ */ u.jsx("input", { required: !0, type: "email", autoComplete: "email", maxLength: 254, value: S, onChange: (rt) => q(rt.target.value) })
      ] }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        "비밀 글 제목",
        /* @__PURE__ */ u.jsx("input", { required: !0, maxLength: 150, value: z, onChange: (rt) => p(rt.target.value) })
      ] }),
      /* @__PURE__ */ u.jsxs("label", { children: [
        "비밀 글 내용",
        /* @__PURE__ */ u.jsx("textarea", { required: !0, maxLength: 5e3, rows: 7, value: Y, onChange: (rt) => H(rt.target.value) })
      ] }),
      G && /* @__PURE__ */ u.jsx("div", { role: "alert", className: "error-note", children: G }),
      /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
        /* @__PURE__ */ u.jsx("button", { className: "btn primary", disabled: s.busy, children: "비밀 글 접수" }),
        /* @__PURE__ */ u.jsx("button", { type: "button", className: "btn", disabled: s.busy, onClick: () => {
          (z || Y || S) && !confirm("작성 중인 비밀 글을 취소할까요?") || (f(!1), q(""), p(""), H(""), N(""), vt.current = crypto.randomUUID());
        }, children: "작성 취소" })
      ] })
    ] }) : /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => f(!0), children: "비밀 글 작성" }) : /* @__PURE__ */ u.jsx("p", { className: "notice", children: "비밀 질문 기능을 준비하고 있습니다." })
  ] });
}
var Xs = { exports: {} }, Zn = {}, Zs = { exports: {} }, Vs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fh;
function by() {
  return fh || (fh = 1, (function(r) {
    function s(C, A) {
      var W = C.length;
      C.push(A);
      t: for (; 0 < W; ) {
        var ht = W - 1 >>> 1, D = C[ht];
        if (0 < y(D, A))
          C[ht] = A, C[W] = D, W = ht;
        else break t;
      }
    }
    function d(C) {
      return C.length === 0 ? null : C[0];
    }
    function f(C) {
      if (C.length === 0) return null;
      var A = C[0], W = C.pop();
      if (W !== A) {
        C[0] = W;
        t: for (var ht = 0, D = C.length, v = D >>> 1; ht < v; ) {
          var M = 2 * (ht + 1) - 1, L = C[M], V = M + 1, K = C[V];
          if (0 > y(L, W))
            V < D && 0 > y(K, L) ? (C[ht] = K, C[V] = W, ht = V) : (C[ht] = L, C[M] = W, ht = M);
          else if (V < D && 0 > y(K, W))
            C[ht] = K, C[V] = W, ht = V;
          else break t;
        }
      }
      return A;
    }
    function y(C, A) {
      var W = C.sortIndex - A.sortIndex;
      return W !== 0 ? W : C.id - A.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var N = performance;
      r.unstable_now = function() {
        return N.now();
      };
    } else {
      var S = Date, q = S.now();
      r.unstable_now = function() {
        return S.now() - q;
      };
    }
    var z = [], p = [], Y = 1, H = null, G = 3, P = !1, Q = !1, et = !1, vt = !1, pt = typeof setTimeout == "function" ? setTimeout : null, rt = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
    function ct(C) {
      for (var A = d(p); A !== null; ) {
        if (A.callback === null) f(p);
        else if (A.startTime <= C)
          f(p), A.sortIndex = A.expirationTime, s(z, A);
        else break;
        A = d(p);
      }
    }
    function $t(C) {
      if (et = !1, ct(C), !Q)
        if (d(z) !== null)
          Q = !0, bt || (bt = !0, Bt());
        else {
          var A = d(p);
          A !== null && ue($t, A.startTime - C);
        }
    }
    var bt = !1, tt = -1, Dt = 5, Jt = -1;
    function Lt() {
      return vt ? !0 : !(r.unstable_now() - Jt < Dt);
    }
    function ie() {
      if (vt = !1, bt) {
        var C = r.unstable_now();
        Jt = C;
        var A = !0;
        try {
          t: {
            Q = !1, et && (et = !1, rt(tt), tt = -1), P = !0;
            var W = G;
            try {
              e: {
                for (ct(C), H = d(z); H !== null && !(H.expirationTime > C && Lt()); ) {
                  var ht = H.callback;
                  if (typeof ht == "function") {
                    H.callback = null, G = H.priorityLevel;
                    var D = ht(
                      H.expirationTime <= C
                    );
                    if (C = r.unstable_now(), typeof D == "function") {
                      H.callback = D, ct(C), A = !0;
                      break e;
                    }
                    H === d(z) && f(z), ct(C);
                  } else f(z);
                  H = d(z);
                }
                if (H !== null) A = !0;
                else {
                  var v = d(p);
                  v !== null && ue(
                    $t,
                    v.startTime - C
                  ), A = !1;
                }
              }
              break t;
            } finally {
              H = null, G = W, P = !1;
            }
            A = void 0;
          }
        } finally {
          A ? Bt() : bt = !1;
        }
      }
    }
    var Bt;
    if (typeof w == "function")
      Bt = function() {
        w(ie);
      };
    else if (typeof MessageChannel < "u") {
      var lt = new MessageChannel(), It = lt.port2;
      lt.port1.onmessage = ie, Bt = function() {
        It.postMessage(null);
      };
    } else
      Bt = function() {
        pt(ie, 0);
      };
    function ue(C, A) {
      tt = pt(function() {
        C(r.unstable_now());
      }, A);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, r.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Dt = 0 < C ? Math.floor(1e3 / C) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, r.unstable_next = function(C) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = G;
      }
      var W = G;
      G = A;
      try {
        return C();
      } finally {
        G = W;
      }
    }, r.unstable_requestPaint = function() {
      vt = !0;
    }, r.unstable_runWithPriority = function(C, A) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var W = G;
      G = C;
      try {
        return A();
      } finally {
        G = W;
      }
    }, r.unstable_scheduleCallback = function(C, A, W) {
      var ht = r.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? ht + W : ht) : W = ht, C) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return D = W + D, C = {
        id: Y++,
        callback: A,
        priorityLevel: C,
        startTime: W,
        expirationTime: D,
        sortIndex: -1
      }, W > ht ? (C.sortIndex = W, s(p, C), d(z) === null && C === d(p) && (et ? (rt(tt), tt = -1) : et = !0, ue($t, W - ht))) : (C.sortIndex = D, s(z, C), Q || P || (Q = !0, bt || (bt = !0, Bt()))), C;
    }, r.unstable_shouldYield = Lt, r.unstable_wrapCallback = function(C) {
      var A = G;
      return function() {
        var W = G;
        G = A;
        try {
          return C.apply(this, arguments);
        } finally {
          G = W;
        }
      };
    };
  })(Vs)), Vs;
}
var rh;
function xy() {
  return rh || (rh = 1, Zs.exports = by()), Zs.exports;
}
var ws = { exports: {} }, ce = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oh;
function Sy() {
  if (oh) return ce;
  oh = 1;
  var r = ks();
  function s(z) {
    var p = "https://react.dev/errors/" + z;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Y = 2; Y < arguments.length; Y++)
        p += "&args[]=" + encodeURIComponent(arguments[Y]);
    }
    return "Minified React error #" + z + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var f = {
    d: {
      f: d,
      r: function() {
        throw Error(s(522));
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
  }, y = Symbol.for("react.portal");
  function N(z, p, Y) {
    var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: y,
      key: H == null ? null : "" + H,
      children: z,
      containerInfo: p,
      implementation: Y
    };
  }
  var S = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function q(z, p) {
    if (z === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, ce.createPortal = function(z, p) {
    var Y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(s(299));
    return N(z, p, null, Y);
  }, ce.flushSync = function(z) {
    var p = S.T, Y = f.p;
    try {
      if (S.T = null, f.p = 2, z) return z();
    } finally {
      S.T = p, f.p = Y, f.d.f();
    }
  }, ce.preconnect = function(z, p) {
    typeof z == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, f.d.C(z, p));
  }, ce.prefetchDNS = function(z) {
    typeof z == "string" && f.d.D(z);
  }, ce.preinit = function(z, p) {
    if (typeof z == "string" && p && typeof p.as == "string") {
      var Y = p.as, H = q(Y, p.crossOrigin), G = typeof p.integrity == "string" ? p.integrity : void 0, P = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      Y === "style" ? f.d.S(
        z,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: H,
          integrity: G,
          fetchPriority: P
        }
      ) : Y === "script" && f.d.X(z, {
        crossOrigin: H,
        integrity: G,
        fetchPriority: P,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, ce.preinitModule = function(z, p) {
    if (typeof z == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var Y = q(
            p.as,
            p.crossOrigin
          );
          f.d.M(z, {
            crossOrigin: Y,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && f.d.M(z);
  }, ce.preload = function(z, p) {
    if (typeof z == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var Y = p.as, H = q(Y, p.crossOrigin);
      f.d.L(z, Y, {
        crossOrigin: H,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, ce.preloadModule = function(z, p) {
    if (typeof z == "string")
      if (p) {
        var Y = q(p.as, p.crossOrigin);
        f.d.m(z, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: Y,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else f.d.m(z);
  }, ce.requestFormReset = function(z) {
    f.d.r(z);
  }, ce.unstable_batchedUpdates = function(z, p) {
    return z(p);
  }, ce.useFormState = function(z, p, Y) {
    return S.H.useFormState(z, p, Y);
  }, ce.useFormStatus = function() {
    return S.H.useHostTransitionStatus();
  }, ce.version = "19.2.0", ce;
}
var dh;
function jy() {
  if (dh) return ws.exports;
  dh = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (s) {
        console.error(s);
      }
  }
  return r(), ws.exports = Sy(), ws.exports;
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
var hh;
function Ey() {
  if (hh) return Zn;
  hh = 1;
  var r = xy(), s = ks(), d = jy();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function y(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function N(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function S(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function q(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function z(t) {
    if (N(t) !== t)
      throw Error(f(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (e = N(t), e === null) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
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
          if (i === l) return z(n), t;
          if (i === a) return z(n), e;
          i = i.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) l = n, a = i;
      else {
        for (var c = !1, o = n.child; o; ) {
          if (o === l) {
            c = !0, l = n, a = i;
            break;
          }
          if (o === a) {
            c = !0, a = n, l = i;
            break;
          }
          o = o.sibling;
        }
        if (!c) {
          for (o = i.child; o; ) {
            if (o === l) {
              c = !0, l = i, a = n;
              break;
            }
            if (o === a) {
              c = !0, a = i, l = n;
              break;
            }
            o = o.sibling;
          }
          if (!c) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function Y(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = Y(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var H = Object.assign, G = Symbol.for("react.element"), P = Symbol.for("react.transitional.element"), Q = Symbol.for("react.portal"), et = Symbol.for("react.fragment"), vt = Symbol.for("react.strict_mode"), pt = Symbol.for("react.profiler"), rt = Symbol.for("react.consumer"), w = Symbol.for("react.context"), ct = Symbol.for("react.forward_ref"), $t = Symbol.for("react.suspense"), bt = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Jt = Symbol.for("react.activity"), Lt = Symbol.for("react.memo_cache_sentinel"), ie = Symbol.iterator;
  function Bt(t) {
    return t === null || typeof t != "object" ? null : (t = ie && t[ie] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var lt = Symbol.for("react.client.reference");
  function It(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === lt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case et:
        return "Fragment";
      case pt:
        return "Profiler";
      case vt:
        return "StrictMode";
      case $t:
        return "Suspense";
      case bt:
        return "SuspenseList";
      case Jt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Q:
          return "Portal";
        case w:
          return t.displayName || "Context";
        case rt:
          return (t._context.displayName || "Context") + ".Consumer";
        case ct:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case tt:
          return e = t.displayName || null, e !== null ? e : It(t.type) || "Memo";
        case Dt:
          e = t._payload, t = t._init;
          try {
            return It(t(e));
          } catch {
          }
      }
    return null;
  }
  var ue = Array.isArray, C = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ht = [], D = -1;
  function v(t) {
    return { current: t };
  }
  function M(t) {
    0 > D || (t.current = ht[D], ht[D] = null, D--);
  }
  function L(t, e) {
    D++, ht[D] = t.current, t.current = e;
  }
  var V = v(null), K = v(null), F = v(null), ut = v(null);
  function Pt(t, e) {
    switch (L(F, e), L(K, t), L(V, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ad(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Ad(e), t = Nd(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    M(V), L(V, t);
  }
  function Ht() {
    M(V), M(K), M(F);
  }
  function h(t) {
    t.memoizedState !== null && L(ut, t);
    var e = V.current, l = Nd(e, t.type);
    e !== l && (L(K, t), L(V, l));
  }
  function b(t) {
    K.current === t && (M(V), M(K)), ut.current === t && (M(ut), Bn._currentValue = W);
  }
  var B, J;
  function Nt(t) {
    if (B === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        B = e && e[1] || "", J = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + B + t + J;
  }
  var rl = !1;
  function ol(t, e) {
    if (!t || rl) return "";
    rl = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var R = function() {
                throw Error();
              };
              if (Object.defineProperty(R.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(R, []);
                } catch (T) {
                  var _ = T;
                }
                Reflect.construct(t, [], R);
              } else {
                try {
                  R.call();
                } catch (T) {
                  _ = T;
                }
                t.call(R.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                _ = T;
              }
              (R = t()) && typeof R.catch == "function" && R.catch(function() {
              });
            }
          } catch (T) {
            if (T && _ && typeof T.stack == "string")
              return [T.stack, _.stack];
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
      var i = a.DetermineComponentFrameRoot(), c = i[0], o = i[1];
      if (c && o) {
        var m = c.split(`
`), E = o.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < E.length && !E[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === m.length || n === E.length)
          for (a = m.length - 1, n = E.length - 1; 1 <= a && 0 <= n && m[a] !== E[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== E[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || m[a] !== E[n]) {
                  var O = `
` + m[a].replace(" at new ", " at ");
                  return t.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", t.displayName)), O;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      rl = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Nt(l) : "";
  }
  function Gh(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Nt(t.type);
      case 16:
        return Nt("Lazy");
      case 13:
        return t.child !== e && e !== null ? Nt("Suspense Fallback") : Nt("Suspense");
      case 19:
        return Nt("SuspenseList");
      case 0:
      case 15:
        return ol(t.type, !1);
      case 11:
        return ol(t.type.render, !1);
      case 1:
        return ol(t.type, !0);
      case 31:
        return Nt("Activity");
      default:
        return "";
    }
  }
  function tf(t) {
    try {
      var e = "", l = null;
      do
        e += Gh(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Au = Object.prototype.hasOwnProperty, Nu = r.unstable_scheduleCallback, Tu = r.unstable_cancelCallback, Lh = r.unstable_shouldYield, Qh = r.unstable_requestPaint, be = r.unstable_now, Xh = r.unstable_getCurrentPriorityLevel, ef = r.unstable_ImmediatePriority, lf = r.unstable_UserBlockingPriority, Pn = r.unstable_NormalPriority, Zh = r.unstable_LowPriority, af = r.unstable_IdlePriority, Vh = r.log, wh = r.unstable_setDisableYieldValue, Ja = null, xe = null;
  function dl(t) {
    if (typeof Vh == "function" && wh(t), xe && typeof xe.setStrictMode == "function")
      try {
        xe.setStrictMode(Ja, t);
      } catch {
      }
  }
  var Se = Math.clz32 ? Math.clz32 : Jh, $h = Math.log, Kh = Math.LN2;
  function Jh(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - ($h(t) / Kh | 0) | 0;
  }
  var ti = 256, ei = 262144, li = 4194304;
  function Gl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function ai(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, i = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var o = a & 134217727;
    return o !== 0 ? (a = o & ~i, a !== 0 ? n = Gl(a) : (c &= o, c !== 0 ? n = Gl(c) : l || (l = o & ~t, l !== 0 && (n = Gl(l))))) : (o = a & ~i, o !== 0 ? n = Gl(o) : c !== 0 ? n = Gl(c) : l || (l = a & ~t, l !== 0 && (n = Gl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & i) === 0 && (i = n & -n, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function ka(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function kh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function nf() {
    var t = li;
    return li <<= 1, (li & 62914560) === 0 && (li = 4194304), t;
  }
  function zu(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Wa(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Wh(t, e, l, a, n, i) {
    var c = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var o = t.entanglements, m = t.expirationTimes, E = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var O = 31 - Se(l), R = 1 << O;
      o[O] = 0, m[O] = -1;
      var _ = E[O];
      if (_ !== null)
        for (E[O] = null, O = 0; O < _.length; O++) {
          var T = _[O];
          T !== null && (T.lane &= -536870913);
        }
      l &= ~R;
    }
    a !== 0 && uf(t, a, 0), i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(c & ~e));
  }
  function uf(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - Se(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function cf(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - Se(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function sf(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Cu(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Cu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ou(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ff() {
    var t = A.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : kd(t.type));
  }
  function rf(t, e) {
    var l = A.p;
    try {
      return A.p = t, e();
    } finally {
      A.p = l;
    }
  }
  var hl = Math.random().toString(36).slice(2), te = "__reactFiber$" + hl, re = "__reactProps$" + hl, ua = "__reactContainer$" + hl, Mu = "__reactEvents$" + hl, Fh = "__reactListeners$" + hl, Ih = "__reactHandles$" + hl, of = "__reactResources$" + hl, Fa = "__reactMarker$" + hl;
  function Uu(t) {
    delete t[te], delete t[re], delete t[Mu], delete t[Fh], delete t[Ih];
  }
  function ca(t) {
    var e = t[te];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[ua] || l[te]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = Dd(t); t !== null; ) {
            if (l = t[te]) return l;
            t = Dd(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function sa(t) {
    if (t = t[te] || t[ua]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ia(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function fa(t) {
    var e = t[of];
    return e || (e = t[of] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function kt(t) {
    t[Fa] = !0;
  }
  var df = /* @__PURE__ */ new Set(), hf = {};
  function Ll(t, e) {
    ra(t, e), ra(t + "Capture", e);
  }
  function ra(t, e) {
    for (hf[t] = e, t = 0; t < e.length; t++)
      df.add(e[t]);
  }
  var Ph = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), mf = {}, vf = {};
  function tm(t) {
    return Au.call(vf, t) ? !0 : Au.call(mf, t) ? !1 : Ph.test(t) ? vf[t] = !0 : (mf[t] = !0, !1);
  }
  function ni(t, e, l) {
    if (tm(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function ii(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function $e(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function Ce(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function yf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function em(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, i = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(c) {
          l = "" + c, i.call(this, c);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(c) {
          l = "" + c;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Du(t) {
    if (!t._valueTracker) {
      var e = yf(t) ? "checked" : "value";
      t._valueTracker = em(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function gf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = yf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function ui(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var lm = /[\n"\\]/g;
  function Oe(t) {
    return t.replace(
      lm,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Hu(t, e, l, a, n, i, c, o) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ce(e)) : t.value !== "" + Ce(e) && (t.value = "" + Ce(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? Ru(t, c, Ce(e)) : l != null ? Ru(t, c, Ce(l)) : a != null && t.removeAttribute("value"), n == null && i != null && (t.defaultChecked = !!i), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + Ce(o) : t.removeAttribute("name");
  }
  function pf(t, e, l, a, n, i, c, o) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        Du(t);
        return;
      }
      l = l != null ? "" + Ce(l) : "", e = e != null ? "" + Ce(e) : l, o || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = o ? t.checked : !!a, t.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), Du(t);
  }
  function Ru(t, e, l) {
    e === "number" && ui(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function oa(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++)
        e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Ce(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function bf(t, e, l) {
    if (e != null && (e = "" + Ce(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Ce(l) : "";
  }
  function xf(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (ue(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = Ce(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), Du(t);
  }
  function da(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var am = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Sf(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || am.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function jf(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && Sf(t, n, a);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && Sf(t, i, e[i]);
  }
  function qu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var nm = /* @__PURE__ */ new Map([
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
  ]), im = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ci(t) {
    return im.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ke() {
  }
  var Bu = null;
  function Yu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ha = null, ma = null;
  function Ef(t) {
    var e = sa(t);
    if (e && (t = e.stateNode)) {
      var l = t[re] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Hu(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Oe(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[re] || null;
                if (!n) throw Error(f(90));
                Hu(
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
            for (e = 0; e < l.length; e++)
              a = l[e], a.form === t.form && gf(a);
          }
          break t;
        case "textarea":
          bf(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && oa(t, !!l.multiple, e, !1);
      }
    }
  }
  var Gu = !1;
  function _f(t, e, l) {
    if (Gu) return t(e, l);
    Gu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Gu = !1, (ha !== null || ma !== null) && (Ji(), ha && (e = ha, t = ma, ma = ha = null, Ef(e), t)))
        for (e = 0; e < t.length; e++) Ef(t[e]);
    }
  }
  function Pa(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[re] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        f(231, e, typeof l)
      );
    return l;
  }
  var Je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Lu = !1;
  if (Je)
    try {
      var tn = {};
      Object.defineProperty(tn, "passive", {
        get: function() {
          Lu = !0;
        }
      }), window.addEventListener("test", tn, tn), window.removeEventListener("test", tn, tn);
    } catch {
      Lu = !1;
    }
  var ml = null, Qu = null, si = null;
  function Af() {
    if (si) return si;
    var t, e = Qu, l = e.length, a, n = "value" in ml ? ml.value : ml.textContent, i = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var c = l - t;
    for (a = 1; a <= c && e[l - a] === n[i - a]; a++) ;
    return si = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function fi(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function ri() {
    return !0;
  }
  function Nf() {
    return !1;
  }
  function oe(t) {
    function e(l, a, n, i, c) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
      for (var o in t)
        t.hasOwnProperty(o) && (l = t[o], this[o] = l ? l(i) : i[o]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ri : Nf, this.isPropagationStopped = Nf, this;
    }
    return H(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ri);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ri);
      },
      persist: function() {
      },
      isPersistent: ri
    }), e;
  }
  var Ql = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, oi = oe(Ql), en = H({}, Ql, { view: 0, detail: 0 }), um = oe(en), Xu, Zu, ln, di = H({}, en, {
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
    getModifierState: wu,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ln && (ln && t.type === "mousemove" ? (Xu = t.screenX - ln.screenX, Zu = t.screenY - ln.screenY) : Zu = Xu = 0, ln = t), Xu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Zu;
    }
  }), Tf = oe(di), cm = H({}, di, { dataTransfer: 0 }), sm = oe(cm), fm = H({}, en, { relatedTarget: 0 }), Vu = oe(fm), rm = H({}, Ql, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), om = oe(rm), dm = H({}, Ql, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), hm = oe(dm), mm = H({}, Ql, { data: 0 }), zf = oe(mm), vm = {
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
  }, ym = {
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
  }, gm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function pm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = gm[t]) ? !!e[t] : !1;
  }
  function wu() {
    return pm;
  }
  var bm = H({}, en, {
    key: function(t) {
      if (t.key) {
        var e = vm[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = fi(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? ym[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wu,
    charCode: function(t) {
      return t.type === "keypress" ? fi(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? fi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), xm = oe(bm), Sm = H({}, di, {
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
  }), Cf = oe(Sm), jm = H({}, en, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wu
  }), Em = oe(jm), _m = H({}, Ql, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Am = oe(_m), Nm = H({}, di, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Tm = oe(Nm), zm = H({}, Ql, {
    newState: 0,
    oldState: 0
  }), Cm = oe(zm), Om = [9, 13, 27, 32], $u = Je && "CompositionEvent" in window, an = null;
  Je && "documentMode" in document && (an = document.documentMode);
  var Mm = Je && "TextEvent" in window && !an, Of = Je && (!$u || an && 8 < an && 11 >= an), Mf = " ", Uf = !1;
  function Df(t, e) {
    switch (t) {
      case "keyup":
        return Om.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Hf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var va = !1;
  function Um(t, e) {
    switch (t) {
      case "compositionend":
        return Hf(e);
      case "keypress":
        return e.which !== 32 ? null : (Uf = !0, Mf);
      case "textInput":
        return t = e.data, t === Mf && Uf ? null : t;
      default:
        return null;
    }
  }
  function Dm(t, e) {
    if (va)
      return t === "compositionend" || !$u && Df(t, e) ? (t = Af(), si = Qu = ml = null, va = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Of && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Hm = {
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
  function Rf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Hm[t.type] : e === "textarea";
  }
  function qf(t, e, l, a) {
    ha ? ma ? ma.push(a) : ma = [a] : ha = a, e = eu(e, "onChange"), 0 < e.length && (l = new oi(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var nn = null, un = null;
  function Rm(t) {
    bd(t, 0);
  }
  function hi(t) {
    var e = Ia(t);
    if (gf(e)) return t;
  }
  function Bf(t, e) {
    if (t === "change") return e;
  }
  var Yf = !1;
  if (Je) {
    var Ku;
    if (Je) {
      var Ju = "oninput" in document;
      if (!Ju) {
        var Gf = document.createElement("div");
        Gf.setAttribute("oninput", "return;"), Ju = typeof Gf.oninput == "function";
      }
      Ku = Ju;
    } else Ku = !1;
    Yf = Ku && (!document.documentMode || 9 < document.documentMode);
  }
  function Lf() {
    nn && (nn.detachEvent("onpropertychange", Qf), un = nn = null);
  }
  function Qf(t) {
    if (t.propertyName === "value" && hi(un)) {
      var e = [];
      qf(
        e,
        un,
        t,
        Yu(t)
      ), _f(Rm, e);
    }
  }
  function qm(t, e, l) {
    t === "focusin" ? (Lf(), nn = e, un = l, nn.attachEvent("onpropertychange", Qf)) : t === "focusout" && Lf();
  }
  function Bm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return hi(un);
  }
  function Ym(t, e) {
    if (t === "click") return hi(e);
  }
  function Gm(t, e) {
    if (t === "input" || t === "change")
      return hi(e);
  }
  function Lm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var je = typeof Object.is == "function" ? Object.is : Lm;
  function cn(t, e) {
    if (je(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Au.call(e, n) || !je(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Xf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Zf(t, e) {
    var l = Xf(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e)
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Xf(l);
    }
  }
  function Vf(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Vf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function wf(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = ui(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = ui(t.document);
    }
    return e;
  }
  function ku(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Qm = Je && "documentMode" in document && 11 >= document.documentMode, ya = null, Wu = null, sn = null, Fu = !1;
  function $f(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Fu || ya == null || ya !== ui(a) || (a = ya, "selectionStart" in a && ku(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), sn && cn(sn, a) || (sn = a, a = eu(Wu, "onSelect"), 0 < a.length && (e = new oi(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = ya)));
  }
  function Xl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var ga = {
    animationend: Xl("Animation", "AnimationEnd"),
    animationiteration: Xl("Animation", "AnimationIteration"),
    animationstart: Xl("Animation", "AnimationStart"),
    transitionrun: Xl("Transition", "TransitionRun"),
    transitionstart: Xl("Transition", "TransitionStart"),
    transitioncancel: Xl("Transition", "TransitionCancel"),
    transitionend: Xl("Transition", "TransitionEnd")
  }, Iu = {}, Kf = {};
  Je && (Kf = document.createElement("div").style, "AnimationEvent" in window || (delete ga.animationend.animation, delete ga.animationiteration.animation, delete ga.animationstart.animation), "TransitionEvent" in window || delete ga.transitionend.transition);
  function Zl(t) {
    if (Iu[t]) return Iu[t];
    if (!ga[t]) return t;
    var e = ga[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Kf)
        return Iu[t] = e[l];
    return t;
  }
  var Jf = Zl("animationend"), kf = Zl("animationiteration"), Wf = Zl("animationstart"), Xm = Zl("transitionrun"), Zm = Zl("transitionstart"), Vm = Zl("transitioncancel"), Ff = Zl("transitionend"), If = /* @__PURE__ */ new Map(), Pu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Pu.push("scrollEnd");
  function Ge(t, e) {
    If.set(t, e), Ll(e, [t]);
  }
  var mi = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Me = [], pa = 0, tc = 0;
  function vi() {
    for (var t = pa, e = tc = pa = 0; e < t; ) {
      var l = Me[e];
      Me[e++] = null;
      var a = Me[e];
      Me[e++] = null;
      var n = Me[e];
      Me[e++] = null;
      var i = Me[e];
      if (Me[e++] = null, a !== null && n !== null) {
        var c = a.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
      }
      i !== 0 && Pf(l, n, i);
    }
  }
  function yi(t, e, l, a) {
    Me[pa++] = t, Me[pa++] = e, Me[pa++] = l, Me[pa++] = a, tc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function ec(t, e, l, a) {
    return yi(t, e, l, a), gi(t);
  }
  function Vl(t, e) {
    return yi(t, null, null, e), gi(t);
  }
  function Pf(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = t.return; i !== null; )
      i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (n = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, n && e !== null && (n = 31 - Se(l), t = i.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), i) : null;
  }
  function gi(t) {
    if (50 < On)
      throw On = 0, rs = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ba = {};
  function wm(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ee(t, e, l, a) {
    return new wm(t, e, l, a);
  }
  function lc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ke(t, e) {
    var l = t.alternate;
    return l === null ? (l = Ee(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function tr(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function pi(t, e, l, a, n, i) {
    var c = 0;
    if (a = t, typeof t == "function") lc(t) && (c = 1);
    else if (typeof t == "string")
      c = Wv(
        t,
        l,
        V.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Jt:
          return t = Ee(31, l, e, n), t.elementType = Jt, t.lanes = i, t;
        case et:
          return wl(l.children, n, i, e);
        case vt:
          c = 8, n |= 24;
          break;
        case pt:
          return t = Ee(12, l, e, n | 2), t.elementType = pt, t.lanes = i, t;
        case $t:
          return t = Ee(13, l, e, n), t.elementType = $t, t.lanes = i, t;
        case bt:
          return t = Ee(19, l, e, n), t.elementType = bt, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case w:
                c = 10;
                break t;
              case rt:
                c = 9;
                break t;
              case ct:
                c = 11;
                break t;
              case tt:
                c = 14;
                break t;
              case Dt:
                c = 16, a = null;
                break t;
            }
          c = 29, l = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = Ee(c, l, e, n), e.elementType = t, e.type = a, e.lanes = i, e;
  }
  function wl(t, e, l, a) {
    return t = Ee(7, t, a, e), t.lanes = l, t;
  }
  function ac(t, e, l) {
    return t = Ee(6, t, null, e), t.lanes = l, t;
  }
  function er(t) {
    var e = Ee(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function nc(t, e, l) {
    return e = Ee(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var lr = /* @__PURE__ */ new WeakMap();
  function Ue(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = lr.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: tf(e)
      }, lr.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: tf(e)
    };
  }
  var xa = [], Sa = 0, bi = null, fn = 0, De = [], He = 0, vl = null, Xe = 1, Ze = "";
  function We(t, e) {
    xa[Sa++] = fn, xa[Sa++] = bi, bi = t, fn = e;
  }
  function ar(t, e, l) {
    De[He++] = Xe, De[He++] = Ze, De[He++] = vl, vl = t;
    var a = Xe;
    t = Ze;
    var n = 32 - Se(a) - 1;
    a &= ~(1 << n), l += 1;
    var i = 32 - Se(e) + n;
    if (30 < i) {
      var c = n - n % 5;
      i = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, Xe = 1 << 32 - Se(e) + n | l << n | a, Ze = i + t;
    } else
      Xe = 1 << i | l << n | a, Ze = t;
  }
  function ic(t) {
    t.return !== null && (We(t, 1), ar(t, 1, 0));
  }
  function uc(t) {
    for (; t === bi; )
      bi = xa[--Sa], xa[Sa] = null, fn = xa[--Sa], xa[Sa] = null;
    for (; t === vl; )
      vl = De[--He], De[He] = null, Ze = De[--He], De[He] = null, Xe = De[--He], De[He] = null;
  }
  function nr(t, e) {
    De[He++] = Xe, De[He++] = Ze, De[He++] = vl, Xe = e.id, Ze = e.overflow, vl = t;
  }
  var ee = null, Ot = null, mt = !1, yl = null, Re = !1, cc = Error(f(519));
  function gl(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw rn(Ue(e, t)), cc;
  }
  function ir(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[te] = t, e[re] = a, l) {
      case "dialog":
        ft("cancel", e), ft("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ft("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Un.length; l++)
          ft(Un[l], e);
        break;
      case "source":
        ft("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ft("error", e), ft("load", e);
        break;
      case "details":
        ft("toggle", e);
        break;
      case "input":
        ft("invalid", e), pf(
          e,
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
        ft("invalid", e);
        break;
      case "textarea":
        ft("invalid", e), xf(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || Ed(e.textContent, l) ? (a.popover != null && (ft("beforetoggle", e), ft("toggle", e)), a.onScroll != null && ft("scroll", e), a.onScrollEnd != null && ft("scrollend", e), a.onClick != null && (e.onclick = Ke), e = !0) : e = !1, e || gl(t, !0);
  }
  function ur(t) {
    for (ee = t.return; ee; )
      switch (ee.tag) {
        case 5:
        case 31:
        case 13:
          Re = !1;
          return;
        case 27:
        case 3:
          Re = !0;
          return;
        default:
          ee = ee.return;
      }
  }
  function ja(t) {
    if (t !== ee) return !1;
    if (!mt) return ur(t), mt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || As(t.type, t.memoizedProps)), l = !l), l && Ot && gl(t), ur(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Ot = Ud(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Ot = Ud(t);
    } else
      e === 27 ? (e = Ot, Ml(t.type) ? (t = Os, Os = null, Ot = t) : Ot = e) : Ot = ee ? Be(t.stateNode.nextSibling) : null;
    return !0;
  }
  function $l() {
    Ot = ee = null, mt = !1;
  }
  function sc() {
    var t = yl;
    return t !== null && (ve === null ? ve = t : ve.push.apply(
      ve,
      t
    ), yl = null), t;
  }
  function rn(t) {
    yl === null ? yl = [t] : yl.push(t);
  }
  var fc = v(null), Kl = null, Fe = null;
  function pl(t, e, l) {
    L(fc, e._currentValue), e._currentValue = l;
  }
  function Ie(t) {
    t._currentValue = fc.current, M(fc);
  }
  function rc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function oc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var c = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var o = i;
          i = n;
          for (var m = 0; m < e.length; m++)
            if (o.context === e[m]) {
              i.lanes |= l, o = i.alternate, o !== null && (o.lanes |= l), rc(
                i.return,
                l,
                t
              ), a || (c = null);
              break t;
            }
          i = o.next;
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(f(341));
        c.lanes |= l, i = c.alternate, i !== null && (i.lanes |= l), rc(c, l, t), c = null;
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (n = c.sibling, n !== null) {
            n.return = c.return, c = n;
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function Ea(t, e, l, a) {
    t = null;
    for (var n = e, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(f(387));
        if (c = c.memoizedProps, c !== null) {
          var o = n.type;
          je(n.pendingProps.value, c.value) || (t !== null ? t.push(o) : t = [o]);
        }
      } else if (n === ut.current) {
        if (c = n.alternate, c === null) throw Error(f(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Bn) : t = [Bn]);
      }
      n = n.return;
    }
    t !== null && oc(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function xi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!je(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Jl(t) {
    Kl = t, Fe = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function le(t) {
    return cr(Kl, t);
  }
  function Si(t, e) {
    return Kl === null && Jl(t), cr(t, e);
  }
  function cr(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Fe === null) {
      if (t === null) throw Error(f(308));
      Fe = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Fe = Fe.next = e;
    return l;
  }
  var $m = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, Km = r.unstable_scheduleCallback, Jm = r.unstable_NormalPriority, Qt = {
    $$typeof: w,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function dc() {
    return {
      controller: new $m(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function on(t) {
    t.refCount--, t.refCount === 0 && Km(Jm, function() {
      t.controller.abort();
    });
  }
  var dn = null, hc = 0, _a = 0, Aa = null;
  function km(t, e) {
    if (dn === null) {
      var l = dn = [];
      hc = 0, _a = ys(), Aa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return hc++, e.then(sr, sr), e;
  }
  function sr() {
    if (--hc === 0 && dn !== null) {
      Aa !== null && (Aa.status = "fulfilled");
      var t = dn;
      dn = null, _a = 0, Aa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Wm(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < l.length; n++) (0, l[n])(e);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var fr = C.S;
  C.S = function(t, e) {
    Ko = be(), typeof e == "object" && e !== null && typeof e.then == "function" && km(t, e), fr !== null && fr(t, e);
  };
  var kl = v(null);
  function mc() {
    var t = kl.current;
    return t !== null ? t : Tt.pooledCache;
  }
  function ji(t, e) {
    e === null ? L(kl, kl.current) : L(kl, e.pool);
  }
  function rr() {
    var t = mc();
    return t === null ? null : { parent: Qt._currentValue, pool: t };
  }
  var Na = Error(f(460)), vc = Error(f(474)), Ei = Error(f(542)), _i = { then: function() {
  } };
  function or(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function dr(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Ke, Ke), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, mr(t), t;
      default:
        if (typeof e.status == "string") e.then(Ke, Ke);
        else {
          if (t = Tt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(f(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, mr(t), t;
        }
        throw Fl = e, Na;
    }
  }
  function Wl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Fl = l, Na) : l;
    }
  }
  var Fl = null;
  function hr() {
    if (Fl === null) throw Error(f(459));
    var t = Fl;
    return Fl = null, t;
  }
  function mr(t) {
    if (t === Na || t === Ei)
      throw Error(f(483));
  }
  var Ta = null, hn = 0;
  function Ai(t) {
    var e = hn;
    return hn += 1, Ta === null && (Ta = []), dr(Ta, t, e);
  }
  function mn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ni(t, e) {
    throw e.$$typeof === G ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function vr(t) {
    function e(x, g) {
      if (t) {
        var j = x.deletions;
        j === null ? (x.deletions = [g], x.flags |= 16) : j.push(g);
      }
    }
    function l(x, g) {
      if (!t) return null;
      for (; g !== null; )
        e(x, g), g = g.sibling;
      return null;
    }
    function a(x) {
      for (var g = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? g.set(x.key, x) : g.set(x.index, x), x = x.sibling;
      return g;
    }
    function n(x, g) {
      return x = ke(x, g), x.index = 0, x.sibling = null, x;
    }
    function i(x, g, j) {
      return x.index = j, t ? (j = x.alternate, j !== null ? (j = j.index, j < g ? (x.flags |= 67108866, g) : j) : (x.flags |= 67108866, g)) : (x.flags |= 1048576, g);
    }
    function c(x) {
      return t && x.alternate === null && (x.flags |= 67108866), x;
    }
    function o(x, g, j, U) {
      return g === null || g.tag !== 6 ? (g = ac(j, x.mode, U), g.return = x, g) : (g = n(g, j), g.return = x, g);
    }
    function m(x, g, j, U) {
      var k = j.type;
      return k === et ? O(
        x,
        g,
        j.props.children,
        U,
        j.key
      ) : g !== null && (g.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Dt && Wl(k) === g.type) ? (g = n(g, j.props), mn(g, j), g.return = x, g) : (g = pi(
        j.type,
        j.key,
        j.props,
        null,
        x.mode,
        U
      ), mn(g, j), g.return = x, g);
    }
    function E(x, g, j, U) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== j.containerInfo || g.stateNode.implementation !== j.implementation ? (g = nc(j, x.mode, U), g.return = x, g) : (g = n(g, j.children || []), g.return = x, g);
    }
    function O(x, g, j, U, k) {
      return g === null || g.tag !== 7 ? (g = wl(
        j,
        x.mode,
        U,
        k
      ), g.return = x, g) : (g = n(g, j), g.return = x, g);
    }
    function R(x, g, j) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = ac(
          "" + g,
          x.mode,
          j
        ), g.return = x, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case P:
            return j = pi(
              g.type,
              g.key,
              g.props,
              null,
              x.mode,
              j
            ), mn(j, g), j.return = x, j;
          case Q:
            return g = nc(
              g,
              x.mode,
              j
            ), g.return = x, g;
          case Dt:
            return g = Wl(g), R(x, g, j);
        }
        if (ue(g) || Bt(g))
          return g = wl(
            g,
            x.mode,
            j,
            null
          ), g.return = x, g;
        if (typeof g.then == "function")
          return R(x, Ai(g), j);
        if (g.$$typeof === w)
          return R(
            x,
            Si(x, g),
            j
          );
        Ni(x, g);
      }
      return null;
    }
    function _(x, g, j, U) {
      var k = g !== null ? g.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return k !== null ? null : o(x, g, "" + j, U);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case P:
            return j.key === k ? m(x, g, j, U) : null;
          case Q:
            return j.key === k ? E(x, g, j, U) : null;
          case Dt:
            return j = Wl(j), _(x, g, j, U);
        }
        if (ue(j) || Bt(j))
          return k !== null ? null : O(x, g, j, U, null);
        if (typeof j.then == "function")
          return _(
            x,
            g,
            Ai(j),
            U
          );
        if (j.$$typeof === w)
          return _(
            x,
            g,
            Si(x, j),
            U
          );
        Ni(x, j);
      }
      return null;
    }
    function T(x, g, j, U, k) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return x = x.get(j) || null, o(g, x, "" + U, k);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case P:
            return x = x.get(
              U.key === null ? j : U.key
            ) || null, m(g, x, U, k);
          case Q:
            return x = x.get(
              U.key === null ? j : U.key
            ) || null, E(g, x, U, k);
          case Dt:
            return U = Wl(U), T(
              x,
              g,
              j,
              U,
              k
            );
        }
        if (ue(U) || Bt(U))
          return x = x.get(j) || null, O(g, x, U, k, null);
        if (typeof U.then == "function")
          return T(
            x,
            g,
            j,
            Ai(U),
            k
          );
        if (U.$$typeof === w)
          return T(
            x,
            g,
            j,
            Si(g, U),
            k
          );
        Ni(g, U);
      }
      return null;
    }
    function Z(x, g, j, U) {
      for (var k = null, yt = null, $ = g, it = g = 0, dt = null; $ !== null && it < j.length; it++) {
        $.index > it ? (dt = $, $ = null) : dt = $.sibling;
        var gt = _(
          x,
          $,
          j[it],
          U
        );
        if (gt === null) {
          $ === null && ($ = dt);
          break;
        }
        t && $ && gt.alternate === null && e(x, $), g = i(gt, g, it), yt === null ? k = gt : yt.sibling = gt, yt = gt, $ = dt;
      }
      if (it === j.length)
        return l(x, $), mt && We(x, it), k;
      if ($ === null) {
        for (; it < j.length; it++)
          $ = R(x, j[it], U), $ !== null && (g = i(
            $,
            g,
            it
          ), yt === null ? k = $ : yt.sibling = $, yt = $);
        return mt && We(x, it), k;
      }
      for ($ = a($); it < j.length; it++)
        dt = T(
          $,
          x,
          it,
          j[it],
          U
        ), dt !== null && (t && dt.alternate !== null && $.delete(
          dt.key === null ? it : dt.key
        ), g = i(
          dt,
          g,
          it
        ), yt === null ? k = dt : yt.sibling = dt, yt = dt);
      return t && $.forEach(function(ql) {
        return e(x, ql);
      }), mt && We(x, it), k;
    }
    function I(x, g, j, U) {
      if (j == null) throw Error(f(151));
      for (var k = null, yt = null, $ = g, it = g = 0, dt = null, gt = j.next(); $ !== null && !gt.done; it++, gt = j.next()) {
        $.index > it ? (dt = $, $ = null) : dt = $.sibling;
        var ql = _(x, $, gt.value, U);
        if (ql === null) {
          $ === null && ($ = dt);
          break;
        }
        t && $ && ql.alternate === null && e(x, $), g = i(ql, g, it), yt === null ? k = ql : yt.sibling = ql, yt = ql, $ = dt;
      }
      if (gt.done)
        return l(x, $), mt && We(x, it), k;
      if ($ === null) {
        for (; !gt.done; it++, gt = j.next())
          gt = R(x, gt.value, U), gt !== null && (g = i(gt, g, it), yt === null ? k = gt : yt.sibling = gt, yt = gt);
        return mt && We(x, it), k;
      }
      for ($ = a($); !gt.done; it++, gt = j.next())
        gt = T($, x, it, gt.value, U), gt !== null && (t && gt.alternate !== null && $.delete(gt.key === null ? it : gt.key), g = i(gt, g, it), yt === null ? k = gt : yt.sibling = gt, yt = gt);
      return t && $.forEach(function(cy) {
        return e(x, cy);
      }), mt && We(x, it), k;
    }
    function At(x, g, j, U) {
      if (typeof j == "object" && j !== null && j.type === et && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case P:
            t: {
              for (var k = j.key; g !== null; ) {
                if (g.key === k) {
                  if (k = j.type, k === et) {
                    if (g.tag === 7) {
                      l(
                        x,
                        g.sibling
                      ), U = n(
                        g,
                        j.props.children
                      ), U.return = x, x = U;
                      break t;
                    }
                  } else if (g.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Dt && Wl(k) === g.type) {
                    l(
                      x,
                      g.sibling
                    ), U = n(g, j.props), mn(U, j), U.return = x, x = U;
                    break t;
                  }
                  l(x, g);
                  break;
                } else e(x, g);
                g = g.sibling;
              }
              j.type === et ? (U = wl(
                j.props.children,
                x.mode,
                U,
                j.key
              ), U.return = x, x = U) : (U = pi(
                j.type,
                j.key,
                j.props,
                null,
                x.mode,
                U
              ), mn(U, j), U.return = x, x = U);
            }
            return c(x);
          case Q:
            t: {
              for (k = j.key; g !== null; ) {
                if (g.key === k)
                  if (g.tag === 4 && g.stateNode.containerInfo === j.containerInfo && g.stateNode.implementation === j.implementation) {
                    l(
                      x,
                      g.sibling
                    ), U = n(g, j.children || []), U.return = x, x = U;
                    break t;
                  } else {
                    l(x, g);
                    break;
                  }
                else e(x, g);
                g = g.sibling;
              }
              U = nc(j, x.mode, U), U.return = x, x = U;
            }
            return c(x);
          case Dt:
            return j = Wl(j), At(
              x,
              g,
              j,
              U
            );
        }
        if (ue(j))
          return Z(
            x,
            g,
            j,
            U
          );
        if (Bt(j)) {
          if (k = Bt(j), typeof k != "function") throw Error(f(150));
          return j = k.call(j), I(
            x,
            g,
            j,
            U
          );
        }
        if (typeof j.then == "function")
          return At(
            x,
            g,
            Ai(j),
            U
          );
        if (j.$$typeof === w)
          return At(
            x,
            g,
            Si(x, j),
            U
          );
        Ni(x, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, g !== null && g.tag === 6 ? (l(x, g.sibling), U = n(g, j), U.return = x, x = U) : (l(x, g), U = ac(j, x.mode, U), U.return = x, x = U), c(x)) : l(x, g);
    }
    return function(x, g, j, U) {
      try {
        hn = 0;
        var k = At(
          x,
          g,
          j,
          U
        );
        return Ta = null, k;
      } catch ($) {
        if ($ === Na || $ === Ei) throw $;
        var yt = Ee(29, $, null, x.mode);
        return yt.lanes = U, yt.return = x, yt;
      } finally {
      }
    };
  }
  var Il = vr(!0), yr = vr(!1), bl = !1;
  function yc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function gc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function xl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Sl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (xt & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = gi(t), Pf(t, null, l), e;
    }
    return yi(t, a, e, l), gi(t);
  }
  function vn(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, cf(t, l);
    }
  }
  function pc(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = c : i = i.next = c, l = l.next;
        } while (l !== null);
        i === null ? n = i = e : i = i.next = e;
      } else n = i = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var bc = !1;
  function yn() {
    if (bc) {
      var t = Aa;
      if (t !== null) throw t;
    }
  }
  function gn(t, e, l, a) {
    bc = !1;
    var n = t.updateQueue;
    bl = !1;
    var i = n.firstBaseUpdate, c = n.lastBaseUpdate, o = n.shared.pending;
    if (o !== null) {
      n.shared.pending = null;
      var m = o, E = m.next;
      m.next = null, c === null ? i = E : c.next = E, c = m;
      var O = t.alternate;
      O !== null && (O = O.updateQueue, o = O.lastBaseUpdate, o !== c && (o === null ? O.firstBaseUpdate = E : o.next = E, O.lastBaseUpdate = m));
    }
    if (i !== null) {
      var R = n.baseState;
      c = 0, O = E = m = null, o = i;
      do {
        var _ = o.lane & -536870913, T = _ !== o.lane;
        if (T ? (ot & _) === _ : (a & _) === _) {
          _ !== 0 && _ === _a && (bc = !0), O !== null && (O = O.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          t: {
            var Z = t, I = o;
            _ = e;
            var At = l;
            switch (I.tag) {
              case 1:
                if (Z = I.payload, typeof Z == "function") {
                  R = Z.call(At, R, _);
                  break t;
                }
                R = Z;
                break t;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = I.payload, _ = typeof Z == "function" ? Z.call(At, R, _) : Z, _ == null) break t;
                R = H({}, R, _);
                break t;
              case 2:
                bl = !0;
            }
          }
          _ = o.callback, _ !== null && (t.flags |= 64, T && (t.flags |= 8192), T = n.callbacks, T === null ? n.callbacks = [_] : T.push(_));
        } else
          T = {
            lane: _,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, O === null ? (E = O = T, m = R) : O = O.next = T, c |= _;
        if (o = o.next, o === null) {
          if (o = n.shared.pending, o === null)
            break;
          T = o, o = T.next, T.next = null, n.lastBaseUpdate = T, n.shared.pending = null;
        }
      } while (!0);
      O === null && (m = R), n.baseState = m, n.firstBaseUpdate = E, n.lastBaseUpdate = O, i === null && (n.shared.lanes = 0), Nl |= c, t.lanes = c, t.memoizedState = R;
    }
  }
  function gr(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function pr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        gr(l[t], e);
  }
  var za = v(null), Ti = v(0);
  function br(t, e) {
    t = cl, L(Ti, t), L(za, e), cl = t | e.baseLanes;
  }
  function xc() {
    L(Ti, cl), L(za, za.current);
  }
  function Sc() {
    cl = Ti.current, M(za), M(Ti);
  }
  var _e = v(null), qe = null;
  function jl(t) {
    var e = t.alternate;
    L(Yt, Yt.current & 1), L(_e, t), qe === null && (e === null || za.current !== null || e.memoizedState !== null) && (qe = t);
  }
  function jc(t) {
    L(Yt, Yt.current), L(_e, t), qe === null && (qe = t);
  }
  function xr(t) {
    t.tag === 22 ? (L(Yt, Yt.current), L(_e, t), qe === null && (qe = t)) : El();
  }
  function El() {
    L(Yt, Yt.current), L(_e, _e.current);
  }
  function Ae(t) {
    M(_e), qe === t && (qe = null), M(Yt);
  }
  var Yt = v(0);
  function zi(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || zs(l) || Cs(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Pe = 0, nt = null, Et = null, Xt = null, Ci = !1, Ca = !1, Pl = !1, Oi = 0, pn = 0, Oa = null, Fm = 0;
  function Rt() {
    throw Error(f(321));
  }
  function Ec(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!je(t[l], e[l])) return !1;
    return !0;
  }
  function _c(t, e, l, a, n, i) {
    return Pe = i, nt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, C.H = t === null || t.memoizedState === null ? ao : Gc, Pl = !1, i = l(a, n), Pl = !1, Ca && (i = jr(
      e,
      l,
      a,
      n
    )), Sr(t), i;
  }
  function Sr(t) {
    C.H = Sn;
    var e = Et !== null && Et.next !== null;
    if (Pe = 0, Xt = Et = nt = null, Ci = !1, pn = 0, Oa = null, e) throw Error(f(300));
    t === null || Zt || (t = t.dependencies, t !== null && xi(t) && (Zt = !0));
  }
  function jr(t, e, l, a) {
    nt = t;
    var n = 0;
    do {
      if (Ca && (Oa = null), pn = 0, Ca = !1, 25 <= n) throw Error(f(301));
      if (n += 1, Xt = Et = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      C.H = no, i = e(l, a);
    } while (Ca);
    return i;
  }
  function Im() {
    var t = C.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? bn(e) : e, t = t.useState()[0], (Et !== null ? Et.memoizedState : null) !== t && (nt.flags |= 1024), e;
  }
  function Ac() {
    var t = Oi !== 0;
    return Oi = 0, t;
  }
  function Nc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Tc(t) {
    if (Ci) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Ci = !1;
    }
    Pe = 0, Xt = Et = nt = null, Ca = !1, pn = Oi = 0, Oa = null;
  }
  function se() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Xt === null ? nt.memoizedState = Xt = t : Xt = Xt.next = t, Xt;
  }
  function Gt() {
    if (Et === null) {
      var t = nt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Et.next;
    var e = Xt === null ? nt.memoizedState : Xt.next;
    if (e !== null)
      Xt = e, Et = t;
    else {
      if (t === null)
        throw nt.alternate === null ? Error(f(467)) : Error(f(310));
      Et = t, t = {
        memoizedState: Et.memoizedState,
        baseState: Et.baseState,
        baseQueue: Et.baseQueue,
        queue: Et.queue,
        next: null
      }, Xt === null ? nt.memoizedState = Xt = t : Xt = Xt.next = t;
    }
    return Xt;
  }
  function Mi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function bn(t) {
    var e = pn;
    return pn += 1, Oa === null && (Oa = []), t = dr(Oa, t, e), e = nt, (Xt === null ? e.memoizedState : Xt.next) === null && (e = e.alternate, C.H = e === null || e.memoizedState === null ? ao : Gc), t;
  }
  function Ui(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return bn(t);
      if (t.$$typeof === w) return le(t);
    }
    throw Error(f(438, String(t)));
  }
  function zc(t) {
    var e = null, l = nt.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = nt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Mi(), nt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = Lt;
    return e.index++, l;
  }
  function tl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Di(t) {
    var e = Gt();
    return Cc(e, Et, t);
  }
  function Cc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue, i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = i.next, i.next = c;
      }
      e.baseQueue = n = i, a.pending = null;
    }
    if (i = t.baseState, n === null) t.memoizedState = i;
    else {
      e = n.next;
      var o = c = null, m = null, E = e, O = !1;
      do {
        var R = E.lane & -536870913;
        if (R !== E.lane ? (ot & R) === R : (Pe & R) === R) {
          var _ = E.revertLane;
          if (_ === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), R === _a && (O = !0);
          else if ((Pe & _) === _) {
            E = E.next, _ === _a && (O = !0);
            continue;
          } else
            R = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, m === null ? (o = m = R, c = i) : m = m.next = R, nt.lanes |= _, Nl |= _;
          R = E.action, Pl && l(i, R), i = E.hasEagerState ? E.eagerState : l(i, R);
        } else
          _ = {
            lane: R,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, m === null ? (o = m = _, c = i) : m = m.next = _, nt.lanes |= R, Nl |= R;
        E = E.next;
      } while (E !== null && E !== e);
      if (m === null ? c = i : m.next = o, !je(i, t.memoizedState) && (Zt = !0, O && (l = Aa, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = c, t.baseQueue = m, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Oc(t) {
    var e = Gt(), l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, i = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = n = n.next;
      do
        i = t(i, c.action), c = c.next;
      while (c !== n);
      je(i, e.memoizedState) || (Zt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, a];
  }
  function Er(t, e, l) {
    var a = nt, n = Gt(), i = mt;
    if (i) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var c = !je(
      (Et || n).memoizedState,
      l
    );
    if (c && (n.memoizedState = l, Zt = !0), n = n.queue, Dc(Nr.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || c || Xt !== null && Xt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ma(
        9,
        { destroy: void 0 },
        Ar.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), Tt === null) throw Error(f(349));
      i || (Pe & 127) !== 0 || _r(a, e, l);
    }
    return l;
  }
  function _r(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = nt.updateQueue, e === null ? (e = Mi(), nt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Ar(t, e, l, a) {
    e.value = l, e.getSnapshot = a, Tr(e) && zr(t);
  }
  function Nr(t, e, l) {
    return l(function() {
      Tr(e) && zr(t);
    });
  }
  function Tr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !je(t, l);
    } catch {
      return !0;
    }
  }
  function zr(t) {
    var e = Vl(t, 2);
    e !== null && ye(e, t, 2);
  }
  function Mc(t) {
    var e = se();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Pl) {
        dl(!0);
        try {
          l();
        } finally {
          dl(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tl,
      lastRenderedState: t
    }, e;
  }
  function Cr(t, e, l, a) {
    return t.baseState = l, Cc(
      t,
      Et,
      typeof a == "function" ? a : tl
    );
  }
  function Pm(t, e, l, a, n) {
    if (qi(t)) throw Error(f(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          i.listeners.push(c);
        }
      };
      C.T !== null ? l(!0) : i.isTransition = !1, a(i), l = e.pending, l === null ? (i.next = e.pending = i, Or(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function Or(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var i = C.T, c = {};
      C.T = c;
      try {
        var o = l(n, a), m = C.S;
        m !== null && m(c, o), Mr(t, e, o);
      } catch (E) {
        Uc(t, e, E);
      } finally {
        i !== null && c.types !== null && (i.types = c.types), C.T = i;
      }
    } else
      try {
        i = l(n, a), Mr(t, e, i);
      } catch (E) {
        Uc(t, e, E);
      }
  }
  function Mr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Ur(t, e, a);
      },
      function(a) {
        return Uc(t, e, a);
      }
    ) : Ur(t, e, l);
  }
  function Ur(t, e, l) {
    e.status = "fulfilled", e.value = l, Dr(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Or(t, l)));
  }
  function Uc(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, Dr(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Dr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Hr(t, e) {
    return e;
  }
  function Rr(t, e) {
    if (mt) {
      var l = Tt.formState;
      if (l !== null) {
        t: {
          var a = nt;
          if (mt) {
            if (Ot) {
              e: {
                for (var n = Ot, i = Re; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break e;
                  }
                  if (n = Be(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Ot = Be(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            gl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = se(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hr,
      lastRenderedState: e
    }, l.queue = a, l = to.bind(
      null,
      nt,
      a
    ), a.dispatch = l, a = Mc(!1), i = Yc.bind(
      null,
      nt,
      !1,
      a.queue
    ), a = se(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = Pm.bind(
      null,
      nt,
      n,
      i,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function qr(t) {
    var e = Gt();
    return Br(e, Et, t);
  }
  function Br(t, e, l) {
    if (e = Cc(
      t,
      e,
      Hr
    )[0], t = Di(tl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = bn(e);
      } catch (c) {
        throw c === Na ? Ei : c;
      }
    else a = e;
    e = Gt();
    var n = e.queue, i = n.dispatch;
    return l !== e.memoizedState && (nt.flags |= 2048, Ma(
      9,
      { destroy: void 0 },
      tv.bind(null, n, l),
      null
    )), [a, i, t];
  }
  function tv(t, e) {
    t.action = e;
  }
  function Yr(t) {
    var e = Gt(), l = Et;
    if (l !== null)
      return Br(e, l, t);
    Gt(), e = e.memoizedState, l = Gt();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function Ma(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = nt.updateQueue, e === null && (e = Mi(), nt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Gr() {
    return Gt().memoizedState;
  }
  function Hi(t, e, l, a) {
    var n = se();
    nt.flags |= t, n.memoizedState = Ma(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Ri(t, e, l, a) {
    var n = Gt();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    Et !== null && a !== null && Ec(a, Et.memoizedState.deps) ? n.memoizedState = Ma(e, i, l, a) : (nt.flags |= t, n.memoizedState = Ma(
      1 | e,
      i,
      l,
      a
    ));
  }
  function Lr(t, e) {
    Hi(8390656, 8, t, e);
  }
  function Dc(t, e) {
    Ri(2048, 8, t, e);
  }
  function ev(t) {
    nt.flags |= 4;
    var e = nt.updateQueue;
    if (e === null)
      e = Mi(), nt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Qr(t) {
    var e = Gt().memoizedState;
    return ev({ ref: e, nextImpl: t }), function() {
      if ((xt & 2) !== 0) throw Error(f(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Xr(t, e) {
    return Ri(4, 2, t, e);
  }
  function Zr(t, e) {
    return Ri(4, 4, t, e);
  }
  function Vr(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function wr(t, e, l) {
    l = l != null ? l.concat([t]) : null, Ri(4, 4, Vr.bind(null, e, t), l);
  }
  function Hc() {
  }
  function $r(t, e) {
    var l = Gt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Ec(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function Kr(t, e) {
    var l = Gt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Ec(e, a[1]))
      return a[0];
    if (a = t(), Pl) {
      dl(!0);
      try {
        t();
      } finally {
        dl(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function Rc(t, e, l) {
    return l === void 0 || (Pe & 1073741824) !== 0 && (ot & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = ko(), nt.lanes |= t, Nl |= t, l);
  }
  function Jr(t, e, l, a) {
    return je(l, e) ? l : za.current !== null ? (t = Rc(t, l, a), je(t, e) || (Zt = !0), t) : (Pe & 42) === 0 || (Pe & 1073741824) !== 0 && (ot & 261930) === 0 ? (Zt = !0, t.memoizedState = l) : (t = ko(), nt.lanes |= t, Nl |= t, e);
  }
  function kr(t, e, l, a, n) {
    var i = A.p;
    A.p = i !== 0 && 8 > i ? i : 8;
    var c = C.T, o = {};
    C.T = o, Yc(t, !1, e, l);
    try {
      var m = n(), E = C.S;
      if (E !== null && E(o, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var O = Wm(
          m,
          a
        );
        xn(
          t,
          e,
          O,
          ze(t)
        );
      } else
        xn(
          t,
          e,
          a,
          ze(t)
        );
    } catch (R) {
      xn(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: R },
        ze()
      );
    } finally {
      A.p = i, c !== null && o.types !== null && (c.types = o.types), C.T = c;
    }
  }
  function lv() {
  }
  function qc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = Wr(t).queue;
    kr(
      t,
      n,
      e,
      W,
      l === null ? lv : function() {
        return Fr(t), l(a);
      }
    );
  }
  function Wr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: W
      },
      next: null
    };
    var l = {};
    return e.next = {
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
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Fr(t) {
    var e = Wr(t);
    e.next === null && (e = t.alternate.memoizedState), xn(
      t,
      e.next.queue,
      {},
      ze()
    );
  }
  function Bc() {
    return le(Bn);
  }
  function Ir() {
    return Gt().memoizedState;
  }
  function Pr() {
    return Gt().memoizedState;
  }
  function av(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ze();
          t = xl(l);
          var a = Sl(e, t, l);
          a !== null && (ye(a, e, l), vn(a, e, l)), e = { cache: dc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function nv(t, e, l) {
    var a = ze();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, qi(t) ? eo(e, l) : (l = ec(t, e, l, a), l !== null && (ye(l, t, a), lo(l, e, a)));
  }
  function to(t, e, l) {
    var a = ze();
    xn(t, e, l, a);
  }
  function xn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (qi(t)) eo(e, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var c = e.lastRenderedState, o = i(c, l);
          if (n.hasEagerState = !0, n.eagerState = o, je(o, c))
            return yi(t, e, n, 0), Tt === null && vi(), !1;
        } catch {
        } finally {
        }
      if (l = ec(t, e, n, a), l !== null)
        return ye(l, t, a), lo(l, e, a), !0;
    }
    return !1;
  }
  function Yc(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: ys(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, qi(t)) {
      if (e) throw Error(f(479));
    } else
      e = ec(
        t,
        l,
        a,
        2
      ), e !== null && ye(e, t, 2);
  }
  function qi(t) {
    var e = t.alternate;
    return t === nt || e !== null && e === nt;
  }
  function eo(t, e) {
    Ca = Ci = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function lo(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, cf(t, l);
    }
  }
  var Sn = {
    readContext: le,
    use: Ui,
    useCallback: Rt,
    useContext: Rt,
    useEffect: Rt,
    useImperativeHandle: Rt,
    useLayoutEffect: Rt,
    useInsertionEffect: Rt,
    useMemo: Rt,
    useReducer: Rt,
    useRef: Rt,
    useState: Rt,
    useDebugValue: Rt,
    useDeferredValue: Rt,
    useTransition: Rt,
    useSyncExternalStore: Rt,
    useId: Rt,
    useHostTransitionStatus: Rt,
    useFormState: Rt,
    useActionState: Rt,
    useOptimistic: Rt,
    useMemoCache: Rt,
    useCacheRefresh: Rt
  };
  Sn.useEffectEvent = Rt;
  var ao = {
    readContext: le,
    use: Ui,
    useCallback: function(t, e) {
      return se().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: le,
    useEffect: Lr,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Hi(
        4194308,
        4,
        Vr.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Hi(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Hi(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = se();
      e = e === void 0 ? null : e;
      var a = t();
      if (Pl) {
        dl(!0);
        try {
          t();
        } finally {
          dl(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = se();
      if (l !== void 0) {
        var n = l(e);
        if (Pl) {
          dl(!0);
          try {
            l(e);
          } finally {
            dl(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = nv.bind(
        null,
        nt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = se();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Mc(t);
      var e = t.queue, l = to.bind(null, nt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: Hc,
    useDeferredValue: function(t, e) {
      var l = se();
      return Rc(l, t, e);
    },
    useTransition: function() {
      var t = Mc(!1);
      return t = kr.bind(
        null,
        nt,
        t.queue,
        !0,
        !1
      ), se().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = nt, n = se();
      if (mt) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = e(), Tt === null)
          throw Error(f(349));
        (ot & 127) !== 0 || _r(a, e, l);
      }
      n.memoizedState = l;
      var i = { value: l, getSnapshot: e };
      return n.queue = i, Lr(Nr.bind(null, a, i, t), [
        t
      ]), a.flags |= 2048, Ma(
        9,
        { destroy: void 0 },
        Ar.bind(
          null,
          a,
          i,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = se(), e = Tt.identifierPrefix;
      if (mt) {
        var l = Ze, a = Xe;
        l = (a & ~(1 << 32 - Se(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Oi++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = Fm++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Bc,
    useFormState: Rr,
    useActionState: Rr,
    useOptimistic: function(t) {
      var e = se();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Yc.bind(
        null,
        nt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: zc,
    useCacheRefresh: function() {
      return se().memoizedState = av.bind(
        null,
        nt
      );
    },
    useEffectEvent: function(t) {
      var e = se(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((xt & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Gc = {
    readContext: le,
    use: Ui,
    useCallback: $r,
    useContext: le,
    useEffect: Dc,
    useImperativeHandle: wr,
    useInsertionEffect: Xr,
    useLayoutEffect: Zr,
    useMemo: Kr,
    useReducer: Di,
    useRef: Gr,
    useState: function() {
      return Di(tl);
    },
    useDebugValue: Hc,
    useDeferredValue: function(t, e) {
      var l = Gt();
      return Jr(
        l,
        Et.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Di(tl)[0], e = Gt().memoizedState;
      return [
        typeof t == "boolean" ? t : bn(t),
        e
      ];
    },
    useSyncExternalStore: Er,
    useId: Ir,
    useHostTransitionStatus: Bc,
    useFormState: qr,
    useActionState: qr,
    useOptimistic: function(t, e) {
      var l = Gt();
      return Cr(l, Et, t, e);
    },
    useMemoCache: zc,
    useCacheRefresh: Pr
  };
  Gc.useEffectEvent = Qr;
  var no = {
    readContext: le,
    use: Ui,
    useCallback: $r,
    useContext: le,
    useEffect: Dc,
    useImperativeHandle: wr,
    useInsertionEffect: Xr,
    useLayoutEffect: Zr,
    useMemo: Kr,
    useReducer: Oc,
    useRef: Gr,
    useState: function() {
      return Oc(tl);
    },
    useDebugValue: Hc,
    useDeferredValue: function(t, e) {
      var l = Gt();
      return Et === null ? Rc(l, t, e) : Jr(
        l,
        Et.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Oc(tl)[0], e = Gt().memoizedState;
      return [
        typeof t == "boolean" ? t : bn(t),
        e
      ];
    },
    useSyncExternalStore: Er,
    useId: Ir,
    useHostTransitionStatus: Bc,
    useFormState: Yr,
    useActionState: Yr,
    useOptimistic: function(t, e) {
      var l = Gt();
      return Et !== null ? Cr(l, Et, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: zc,
    useCacheRefresh: Pr
  };
  no.useEffectEvent = Qr;
  function Lc(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : H({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Qc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = ze(), n = xl(a);
      n.payload = e, l != null && (n.callback = l), e = Sl(t, n, a), e !== null && (ye(e, t, a), vn(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = ze(), n = xl(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = Sl(t, n, a), e !== null && (ye(e, t, a), vn(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = ze(), a = xl(l);
      a.tag = 2, e != null && (a.callback = e), e = Sl(t, a, l), e !== null && (ye(e, t, l), vn(e, t, l));
    }
  };
  function io(t, e, l, a, n, i, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, i, c) : e.prototype && e.prototype.isPureReactComponent ? !cn(l, a) || !cn(n, i) : !0;
  }
  function uo(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Qc.enqueueReplaceState(e, e.state, null);
  }
  function ta(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = H({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function co(t) {
    mi(t);
  }
  function so(t) {
    console.error(t);
  }
  function fo(t) {
    mi(t);
  }
  function Bi(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function ro(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Xc(t, e, l) {
    return l = xl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Bi(t, e);
    }, l;
  }
  function oo(t) {
    return t = xl(t), t.tag = 3, t;
  }
  function ho(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      t.payload = function() {
        return n(i);
      }, t.callback = function() {
        ro(e, l, a);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      ro(e, l, a), typeof n != "function" && (Tl === null ? Tl = /* @__PURE__ */ new Set([this]) : Tl.add(this));
      var o = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function iv(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && Ea(
        e,
        l,
        n,
        !0
      ), l = _e.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return qe === null ? ki() : l.alternate === null && qt === 0 && (qt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === _i ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), hs(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === _i ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), hs(t, a, n)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return hs(t, a, n), ki(), !1;
    }
    if (mt)
      return e = _e.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== cc && (t = Error(f(422), { cause: a }), rn(Ue(t, l)))) : (a !== cc && (e = Error(f(423), {
        cause: a
      }), rn(
        Ue(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Ue(a, l), n = Xc(
        t.stateNode,
        a,
        n
      ), pc(t, n), qt !== 4 && (qt = 2)), !1;
    var i = Error(f(520), { cause: a });
    if (i = Ue(i, l), Cn === null ? Cn = [i] : Cn.push(i), qt !== 4 && (qt = 2), e === null) return !0;
    a = Ue(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Xc(l.stateNode, a, t), pc(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Tl === null || !Tl.has(i))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = oo(n), ho(
              n,
              t,
              l,
              a
            ), pc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Zc = Error(f(461)), Zt = !1;
  function ae(t, e, l, a) {
    e.child = t === null ? yr(e, null, l, a) : Il(
      e,
      t.child,
      l,
      a
    );
  }
  function mo(t, e, l, a, n) {
    l = l.render;
    var i = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var o in a)
        o !== "ref" && (c[o] = a[o]);
    } else c = a;
    return Jl(e), a = _c(
      t,
      e,
      l,
      c,
      i,
      n
    ), o = Ac(), t !== null && !Zt ? (Nc(t, e, n), el(t, e, n)) : (mt && o && ic(e), e.flags |= 1, ae(t, e, a, n), e.child);
  }
  function vo(t, e, l, a, n) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !lc(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, yo(
        t,
        e,
        i,
        a,
        n
      )) : (t = pi(
        l.type,
        null,
        a,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !Fc(t, n)) {
      var c = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : cn, l(c, a) && t.ref === e.ref)
        return el(t, e, n);
    }
    return e.flags |= 1, t = ke(i, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function yo(t, e, l, a, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (cn(i, a) && t.ref === e.ref)
        if (Zt = !1, e.pendingProps = a = i, Fc(t, n))
          (t.flags & 131072) !== 0 && (Zt = !0);
        else
          return e.lanes = t.lanes, el(t, e, n);
    }
    return Vc(
      t,
      e,
      l,
      a,
      n
    );
  }
  function go(t, e, l, a) {
    var n = a.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, t !== null) {
          for (a = e.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~i;
        } else a = 0, e.child = null;
        return po(
          t,
          e,
          i,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && ji(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? br(e, i) : xc(), xr(e);
      else
        return a = e.lanes = 536870912, po(
          t,
          e,
          i !== null ? i.baseLanes | l : l,
          l,
          a
        );
    } else
      i !== null ? (ji(e, i.cachePool), br(e, i), El(), e.memoizedState = null) : (t !== null && ji(e, null), xc(), El());
    return ae(t, e, n, l), e.child;
  }
  function jn(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function po(t, e, l, a, n) {
    var i = mc();
    return i = i === null ? null : { parent: Qt._currentValue, pool: i }, e.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, t !== null && ji(e, null), xc(), xr(e), t !== null && Ea(t, e, a, !0), e.childLanes = n, null;
  }
  function Yi(t, e) {
    return e = Li(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function bo(t, e, l) {
    return Il(e, t.child, null, l), t = Yi(e, e.pendingProps), t.flags |= 2, Ae(e), e.memoizedState = null, t;
  }
  function uv(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (mt) {
        if (a.mode === "hidden")
          return t = Yi(e, a), e.lanes = 536870912, jn(null, t);
        if (jc(e), (t = Ot) ? (t = Md(
          t,
          Re
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: vl !== null ? { id: Xe, overflow: Ze } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = er(t), l.return = e, e.child = l, ee = e, Ot = null)) : t = null, t === null) throw gl(e);
        return e.lanes = 536870912, null;
      }
      return Yi(e, a);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (jc(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = bo(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(f(558));
      else if (Zt || Ea(t, e, l, !1), n = (l & t.childLanes) !== 0, Zt || n) {
        if (a = Tt, a !== null && (c = sf(a, l), c !== 0 && c !== i.retryLane))
          throw i.retryLane = c, Vl(t, c), ye(a, t, c), Zc;
        ki(), e = bo(
          t,
          e,
          l
        );
      } else
        t = i.treeContext, Ot = Be(c.nextSibling), ee = e, mt = !0, yl = null, Re = !1, t !== null && nr(e, t), e = Yi(e, a), e.flags |= 4096;
      return e;
    }
    return t = ke(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Gi(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Vc(t, e, l, a, n) {
    return Jl(e), l = _c(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = Ac(), t !== null && !Zt ? (Nc(t, e, n), el(t, e, n)) : (mt && a && ic(e), e.flags |= 1, ae(t, e, l, n), e.child);
  }
  function xo(t, e, l, a, n, i) {
    return Jl(e), e.updateQueue = null, l = jr(
      e,
      a,
      l,
      n
    ), Sr(t), a = Ac(), t !== null && !Zt ? (Nc(t, e, i), el(t, e, i)) : (mt && a && ic(e), e.flags |= 1, ae(t, e, l, i), e.child);
  }
  function So(t, e, l, a, n) {
    if (Jl(e), e.stateNode === null) {
      var i = ba, c = l.contextType;
      typeof c == "object" && c !== null && (i = le(c)), i = new l(a, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Qc, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = a, i.state = e.memoizedState, i.refs = {}, yc(e), c = l.contextType, i.context = typeof c == "object" && c !== null ? le(c) : ba, i.state = e.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (Lc(
        e,
        l,
        c,
        a
      ), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && Qc.enqueueReplaceState(i, i.state, null), gn(e, a, i, n), yn(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      i = e.stateNode;
      var o = e.memoizedProps, m = ta(l, o);
      i.props = m;
      var E = i.context, O = l.contextType;
      c = ba, typeof O == "object" && O !== null && (c = le(O));
      var R = l.getDerivedStateFromProps;
      O = typeof R == "function" || typeof i.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, O || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o || E !== c) && uo(
        e,
        i,
        a,
        c
      ), bl = !1;
      var _ = e.memoizedState;
      i.state = _, gn(e, a, i, n), yn(), E = e.memoizedState, o || _ !== E || bl ? (typeof R == "function" && (Lc(
        e,
        l,
        R,
        a
      ), E = e.memoizedState), (m = bl || io(
        e,
        l,
        m,
        a,
        _,
        E,
        c
      )) ? (O || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = E), i.props = a, i.state = E, i.context = c, a = m) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      i = e.stateNode, gc(t, e), c = e.memoizedProps, O = ta(l, c), i.props = O, R = e.pendingProps, _ = i.context, E = l.contextType, m = ba, typeof E == "object" && E !== null && (m = le(E)), o = l.getDerivedStateFromProps, (E = typeof o == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== R || _ !== m) && uo(
        e,
        i,
        a,
        m
      ), bl = !1, _ = e.memoizedState, i.state = _, gn(e, a, i, n), yn();
      var T = e.memoizedState;
      c !== R || _ !== T || bl || t !== null && t.dependencies !== null && xi(t.dependencies) ? (typeof o == "function" && (Lc(
        e,
        l,
        o,
        a
      ), T = e.memoizedState), (O = bl || io(
        e,
        l,
        O,
        a,
        _,
        T,
        m
      ) || t !== null && t.dependencies !== null && xi(t.dependencies)) ? (E || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, T, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        T,
        m
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = T), i.props = a, i.state = T, i.context = m, a = O) : (typeof i.componentDidUpdate != "function" || c === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return i = a, Gi(t, e), a = (e.flags & 128) !== 0, i || a ? (i = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && a ? (e.child = Il(
      e,
      t.child,
      null,
      n
    ), e.child = Il(
      e,
      null,
      l,
      n
    )) : ae(t, e, l, n), e.memoizedState = i.state, t = e.child) : t = el(
      t,
      e,
      n
    ), t;
  }
  function jo(t, e, l, a) {
    return $l(), e.flags |= 256, ae(t, e, l, a), e.child;
  }
  var wc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $c(t) {
    return { baseLanes: t, cachePool: rr() };
  }
  function Kc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Te), t;
  }
  function Eo(t, e, l) {
    var a = e.pendingProps, n = !1, i = (e.flags & 128) !== 0, c;
    if ((c = i) || (c = t !== null && t.memoizedState === null ? !1 : (Yt.current & 2) !== 0), c && (n = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (mt) {
        if (n ? jl(e) : El(), (t = Ot) ? (t = Md(
          t,
          Re
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: vl !== null ? { id: Xe, overflow: Ze } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = er(t), l.return = e, e.child = l, ee = e, Ot = null)) : t = null, t === null) throw gl(e);
        return Cs(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var o = a.children;
      return a = a.fallback, n ? (El(), n = e.mode, o = Li(
        { mode: "hidden", children: o },
        n
      ), a = wl(
        a,
        n,
        l,
        null
      ), o.return = e, a.return = e, o.sibling = a, e.child = o, a = e.child, a.memoizedState = $c(l), a.childLanes = Kc(
        t,
        c,
        l
      ), e.memoizedState = wc, jn(null, a)) : (jl(e), Jc(e, o));
    }
    var m = t.memoizedState;
    if (m !== null && (o = m.dehydrated, o !== null)) {
      if (i)
        e.flags & 256 ? (jl(e), e.flags &= -257, e = kc(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (El(), e.child = t.child, e.flags |= 128, e = null) : (El(), o = a.fallback, n = e.mode, a = Li(
          { mode: "visible", children: a.children },
          n
        ), o = wl(
          o,
          n,
          l,
          null
        ), o.flags |= 2, a.return = e, o.return = e, a.sibling = o, e.child = a, Il(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = $c(l), a.childLanes = Kc(
          t,
          c,
          l
        ), e.memoizedState = wc, e = jn(null, a));
      else if (jl(e), Cs(o)) {
        if (c = o.nextSibling && o.nextSibling.dataset, c) var E = c.dgst;
        c = E, a = Error(f(419)), a.stack = "", a.digest = c, rn({ value: a, source: null, stack: null }), e = kc(
          t,
          e,
          l
        );
      } else if (Zt || Ea(t, e, l, !1), c = (l & t.childLanes) !== 0, Zt || c) {
        if (c = Tt, c !== null && (a = sf(c, l), a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, Vl(t, a), ye(c, t, a), Zc;
        zs(o) || ki(), e = kc(
          t,
          e,
          l
        );
      } else
        zs(o) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, Ot = Be(
          o.nextSibling
        ), ee = e, mt = !0, yl = null, Re = !1, t !== null && nr(e, t), e = Jc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (El(), o = a.fallback, n = e.mode, m = t.child, E = m.sibling, a = ke(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, E !== null ? o = ke(
      E,
      o
    ) : (o = wl(
      o,
      n,
      l,
      null
    ), o.flags |= 2), o.return = e, a.return = e, a.sibling = o, e.child = a, jn(null, a), a = e.child, o = t.child.memoizedState, o === null ? o = $c(l) : (n = o.cachePool, n !== null ? (m = Qt._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = rr(), o = {
      baseLanes: o.baseLanes | l,
      cachePool: n
    }), a.memoizedState = o, a.childLanes = Kc(
      t,
      c,
      l
    ), e.memoizedState = wc, jn(t.child, a)) : (jl(e), l = t.child, t = l.sibling, l = ke(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function Jc(t, e) {
    return e = Li(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Li(t, e) {
    return t = Ee(22, t, null, e), t.lanes = 0, t;
  }
  function kc(t, e, l) {
    return Il(e, t.child, null, l), t = Jc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function _o(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), rc(t.return, e, l);
  }
  function Wc(t, e, l, a, n, i) {
    var c = t.memoizedState;
    c === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: i
    } : (c.isBackwards = e, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = l, c.tailMode = n, c.treeForkCount = i);
  }
  function Ao(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var c = Yt.current, o = (c & 2) !== 0;
    if (o ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, L(Yt, c), ae(t, e, a, l), a = mt ? fn : 0, !o && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && _o(t, l, e);
        else if (t.tag === 19)
          _o(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          t = l.alternate, t !== null && zi(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Wc(
          e,
          !1,
          n,
          l,
          i,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && zi(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        Wc(
          e,
          !0,
          l,
          null,
          i,
          a
        );
        break;
      case "together":
        Wc(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function el(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Nl |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (Ea(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, l = ke(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = ke(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function Fc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && xi(t)));
  }
  function cv(t, e, l) {
    switch (e.tag) {
      case 3:
        Pt(e, e.stateNode.containerInfo), pl(e, Qt, t.memoizedState.cache), $l();
        break;
      case 27:
      case 5:
        h(e);
        break;
      case 4:
        Pt(e, e.stateNode.containerInfo);
        break;
      case 10:
        pl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, jc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (jl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Eo(t, e, l) : (jl(e), t = el(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        jl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (Ea(
          t,
          e,
          l,
          !1
        ), a = (l & e.childLanes) !== 0), n) {
          if (a)
            return Ao(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), L(Yt, Yt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, go(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        pl(e, Qt, t.memoizedState.cache);
    }
    return el(t, e, l);
  }
  function No(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Zt = !0;
      else {
        if (!Fc(t, l) && (e.flags & 128) === 0)
          return Zt = !1, cv(
            t,
            e,
            l
          );
        Zt = (t.flags & 131072) !== 0;
      }
    else
      Zt = !1, mt && (e.flags & 1048576) !== 0 && ar(e, fn, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Wl(e.elementType), e.type = t, typeof t == "function")
            lc(t) ? (a = ta(t, a), e.tag = 1, e = So(
              null,
              e,
              t,
              a,
              l
            )) : (e.tag = 0, e = Vc(
              null,
              e,
              t,
              a,
              l
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === ct) {
                e.tag = 11, e = mo(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              } else if (n === tt) {
                e.tag = 14, e = vo(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              }
            }
            throw e = It(t) || t, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return Vc(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return a = e.type, n = ta(
          a,
          e.pendingProps
        ), So(
          t,
          e,
          a,
          n,
          l
        );
      case 3:
        t: {
          if (Pt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          n = i.element, gc(t, e), gn(e, a, null, l);
          var c = e.memoizedState;
          if (a = c.cache, pl(e, Qt, a), a !== i.cache && oc(
            e,
            [Qt],
            l,
            !0
          ), yn(), a = c.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = jo(
                t,
                e,
                a,
                l
              );
              break t;
            } else if (a !== n) {
              n = Ue(
                Error(f(424)),
                e
              ), rn(n), e = jo(
                t,
                e,
                a,
                l
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Ot = Be(t.firstChild), ee = e, mt = !0, yl = null, Re = !0, l = yr(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if ($l(), a === n) {
              e = el(
                t,
                e,
                l
              );
              break t;
            }
            ae(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Gi(t, e), t === null ? (l = Bd(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : mt || (l = e.type, t = e.pendingProps, a = lu(
          F.current
        ).createElement(l), a[te] = e, a[re] = t, ne(a, l, t), kt(a), e.stateNode = a) : e.memoizedState = Bd(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return h(e), t === null && mt && (a = e.stateNode = Hd(
          e.type,
          e.pendingProps,
          F.current
        ), ee = e, Re = !0, n = Ot, Ml(e.type) ? (Os = n, Ot = Be(a.firstChild)) : Ot = n), ae(
          t,
          e,
          e.pendingProps.children,
          l
        ), Gi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && mt && ((n = a = Ot) && (a = Bv(
          a,
          e.type,
          e.pendingProps,
          Re
        ), a !== null ? (e.stateNode = a, ee = e, Ot = Be(a.firstChild), Re = !1, n = !0) : n = !1), n || gl(e)), h(e), n = e.type, i = e.pendingProps, c = t !== null ? t.memoizedProps : null, a = i.children, As(n, i) ? a = null : c !== null && As(n, c) && (e.flags |= 32), e.memoizedState !== null && (n = _c(
          t,
          e,
          Im,
          null,
          null,
          l
        ), Bn._currentValue = n), Gi(t, e), ae(t, e, a, l), e.child;
      case 6:
        return t === null && mt && ((t = l = Ot) && (l = Yv(
          l,
          e.pendingProps,
          Re
        ), l !== null ? (e.stateNode = l, ee = e, Ot = null, t = !0) : t = !1), t || gl(e)), null;
      case 13:
        return Eo(t, e, l);
      case 4:
        return Pt(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = Il(
          e,
          null,
          a,
          l
        ) : ae(t, e, a, l), e.child;
      case 11:
        return mo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return ae(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return ae(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return ae(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, pl(e, e.type, a.value), ae(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Jl(e), n = le(n), a = a(n), e.flags |= 1, ae(t, e, a, l), e.child;
      case 14:
        return vo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return yo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return Ao(t, e, l);
      case 31:
        return uv(t, e, l);
      case 22:
        return go(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return Jl(e), a = le(Qt), t === null ? (n = mc(), n === null && (n = Tt, i = dc(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), e.memoizedState = { parent: a, cache: n }, yc(e), pl(e, Qt, n)) : ((t.lanes & l) !== 0 && (gc(t, e), gn(e, null, null, l), yn()), n = t.memoizedState, i = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), pl(e, Qt, a)) : (a = i.cache, pl(e, Qt, a), a !== n.cache && oc(
          e,
          [Qt],
          l,
          !0
        ))), ae(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function ll(t) {
    t.flags |= 4;
  }
  function Ic(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Po()) t.flags |= 8192;
        else
          throw Fl = _i, vc;
    } else t.flags &= -16777217;
  }
  function To(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Xd(e))
      if (Po()) t.flags |= 8192;
      else
        throw Fl = _i, vc;
  }
  function Qi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? nf() : 536870912, t.lanes |= e, Ra |= e);
  }
  function En(t, e) {
    if (!mt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function Mt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function sv(t, e, l) {
    var a = e.pendingProps;
    switch (uc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Mt(e), null;
      case 1:
        return Mt(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ie(Qt), Ht(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ja(e) ? ll(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, sc())), Mt(e), null;
      case 26:
        var n = e.type, i = e.memoizedState;
        return t === null ? (ll(e), i !== null ? (Mt(e), To(e, i)) : (Mt(e), Ic(
          e,
          n,
          null,
          a,
          l
        ))) : i ? i !== t.memoizedState ? (ll(e), Mt(e), To(e, i)) : (Mt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && ll(e), Mt(e), Ic(
          e,
          n,
          t,
          a,
          l
        )), null;
      case 27:
        if (b(e), l = F.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ll(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return Mt(e), null;
          }
          t = V.current, ja(e) ? ir(e) : (t = Hd(n, a, l), e.stateNode = t, ll(e));
        }
        return Mt(e), null;
      case 5:
        if (b(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ll(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return Mt(e), null;
          }
          if (i = V.current, ja(e))
            ir(e);
          else {
            var c = lu(
              F.current
            );
            switch (i) {
              case 1:
                i = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = c.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? c.createElement("select", {
                      is: a.is
                    }) : c.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? c.createElement(n, { is: a.is }) : c.createElement(n);
                }
            }
            i[te] = e, i[re] = a;
            t: for (c = e.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                i.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === e) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === e)
                  break t;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            e.stateNode = i;
            t: switch (ne(i, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && ll(e);
          }
        }
        return Mt(e), Ic(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && ll(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = F.current, ja(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = ee, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[te] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Ed(t.nodeValue, l)), t || gl(e, !0);
          } else
            t = lu(t).createTextNode(
              a
            ), t[te] = e, e.stateNode = t;
        }
        return Mt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = ja(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[te] = e;
            } else
              $l(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Mt(e), t = !1;
          } else
            l = sc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Ae(e), e) : (Ae(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Mt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = ja(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
              n[te] = e;
            } else
              $l(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Mt(e), n = !1;
          } else
            n = sc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (Ae(e), e) : (Ae(e), null);
        }
        return Ae(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Qi(e, e.updateQueue), Mt(e), null);
      case 4:
        return Ht(), t === null && xs(e.stateNode.containerInfo), Mt(e), null;
      case 10:
        return Ie(e.type), Mt(e), null;
      case 19:
        if (M(Yt), a = e.memoizedState, a === null) return Mt(e), null;
        if (n = (e.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) En(a, !1);
          else {
            if (qt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = zi(t), i !== null) {
                  for (e.flags |= 128, En(a, !1), t = i.updateQueue, e.updateQueue = t, Qi(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    tr(l, t), l = l.sibling;
                  return L(
                    Yt,
                    Yt.current & 1 | 2
                  ), mt && We(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && be() > $i && (e.flags |= 128, n = !0, En(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = zi(i), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, Qi(e, t), En(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !mt)
                return Mt(e), null;
            } else
              2 * be() - a.renderingStartTime > $i && l !== 536870912 && (e.flags |= 128, n = !0, En(a, !1), e.lanes = 4194304);
          a.isBackwards ? (i.sibling = e.child, e.child = i) : (t = a.last, t !== null ? t.sibling = i : e.child = i, a.last = i);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = be(), t.sibling = null, l = Yt.current, L(
          Yt,
          n ? l & 1 | 2 : l & 1
        ), mt && We(e, a.treeForkCount), t) : (Mt(e), null);
      case 22:
      case 23:
        return Ae(e), Sc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Mt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Mt(e), l = e.updateQueue, l !== null && Qi(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && M(kl), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ie(Qt), Mt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function fv(t, e) {
    switch (uc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Ie(Qt), Ht(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return b(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ae(e), e.alternate === null)
            throw Error(f(340));
          $l();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ae(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          $l();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return M(Yt), null;
      case 4:
        return Ht(), null;
      case 10:
        return Ie(e.type), null;
      case 22:
      case 23:
        return Ae(e), Sc(), t !== null && M(kl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Ie(Qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zo(t, e) {
    switch (uc(e), e.tag) {
      case 3:
        Ie(Qt), Ht();
        break;
      case 26:
      case 27:
      case 5:
        b(e);
        break;
      case 4:
        Ht();
        break;
      case 31:
        e.memoizedState !== null && Ae(e);
        break;
      case 13:
        Ae(e);
        break;
      case 19:
        M(Yt);
        break;
      case 10:
        Ie(e.type);
        break;
      case 22:
      case 23:
        Ae(e), Sc(), t !== null && M(kl);
        break;
      case 24:
        Ie(Qt);
    }
  }
  function _n(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var i = l.create, c = l.inst;
            a = i(), c.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (o) {
      jt(e, e.return, o);
    }
  }
  function _l(t, e, l) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst, o = c.destroy;
            if (o !== void 0) {
              c.destroy = void 0, n = e;
              var m = l, E = o;
              try {
                E();
              } catch (O) {
                jt(
                  n,
                  m,
                  O
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (O) {
      jt(e, e.return, O);
    }
  }
  function Co(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        pr(e, l);
      } catch (a) {
        jt(t, t.return, a);
      }
    }
  }
  function Oo(t, e, l) {
    l.props = ta(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      jt(t, e, a);
    }
  }
  function An(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      jt(t, e, n);
    }
  }
  function Ve(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          jt(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          jt(t, e, n);
        }
      else l.current = null;
  }
  function Mo(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      jt(t, t.return, n);
    }
  }
  function Pc(t, e, l) {
    try {
      var a = t.stateNode;
      Mv(a, t.type, l, e), a[re] = e;
    } catch (n) {
      jt(t, t.return, n);
    }
  }
  function Uo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ml(t.type) || t.tag === 4;
  }
  function ts(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Uo(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ml(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function es(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Ke));
    else if (a !== 4 && (a === 27 && Ml(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (es(t, e, l), t = t.sibling; t !== null; )
        es(t, e, l), t = t.sibling;
  }
  function Xi(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && Ml(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Xi(t, e, l), t = t.sibling; t !== null; )
        Xi(t, e, l), t = t.sibling;
  }
  function Do(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      ne(e, a, l), e[te] = t, e[re] = l;
    } catch (i) {
      jt(t, t.return, i);
    }
  }
  var al = !1, Vt = !1, ls = !1, Ho = typeof WeakSet == "function" ? WeakSet : Set, Wt = null;
  function rv(t, e) {
    if (t = t.containerInfo, Es = fu, t = wf(t), ku(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var c = 0, o = -1, m = -1, E = 0, O = 0, R = t, _ = null;
            e: for (; ; ) {
              for (var T; R !== l || n !== 0 && R.nodeType !== 3 || (o = c + n), R !== i || a !== 0 && R.nodeType !== 3 || (m = c + a), R.nodeType === 3 && (c += R.nodeValue.length), (T = R.firstChild) !== null; )
                _ = R, R = T;
              for (; ; ) {
                if (R === t) break e;
                if (_ === l && ++E === n && (o = c), _ === i && ++O === a && (m = c), (T = R.nextSibling) !== null) break;
                R = _, _ = R.parentNode;
              }
              R = T;
            }
            l = o === -1 || m === -1 ? null : { start: o, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (_s = { focusedElem: t, selectionRange: l }, fu = !1, Wt = e; Wt !== null; )
      if (e = Wt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Wt = t;
      else
        for (; Wt !== null; ) {
          switch (e = Wt, i = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  n = t[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                t = void 0, l = e, n = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
                try {
                  var Z = ta(
                    l.type,
                    n
                  );
                  t = a.getSnapshotBeforeUpdate(
                    Z,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (I) {
                  jt(
                    l,
                    l.return,
                    I
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  Ts(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ts(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, Wt = t;
            break;
          }
          Wt = e.return;
        }
  }
  function Ro(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        il(t, l), a & 4 && _n(5, l);
        break;
      case 1:
        if (il(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (c) {
              jt(l, l.return, c);
            }
          else {
            var n = ta(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              jt(
                l,
                l.return,
                c
              );
            }
          }
        a & 64 && Co(l), a & 512 && An(l, l.return);
        break;
      case 3:
        if (il(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            pr(t, e);
          } catch (c) {
            jt(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Do(l);
      case 26:
      case 5:
        il(t, l), e === null && a & 4 && Mo(l), a & 512 && An(l, l.return);
        break;
      case 12:
        il(t, l);
        break;
      case 31:
        il(t, l), a & 4 && Yo(t, l);
        break;
      case 13:
        il(t, l), a & 4 && Go(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = bv.bind(
          null,
          l
        ), Gv(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || al, !a) {
          e = e !== null && e.memoizedState !== null || Vt, n = al;
          var i = Vt;
          al = a, (Vt = e) && !i ? ul(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : il(t, l), al = n, Vt = i;
        }
        break;
      case 30:
        break;
      default:
        il(t, l);
    }
  }
  function qo(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, qo(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Uu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ut = null, de = !1;
  function nl(t, e, l) {
    for (l = l.child; l !== null; )
      Bo(t, e, l), l = l.sibling;
  }
  function Bo(t, e, l) {
    if (xe && typeof xe.onCommitFiberUnmount == "function")
      try {
        xe.onCommitFiberUnmount(Ja, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Vt || Ve(l, e), nl(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Vt || Ve(l, e);
        var a = Ut, n = de;
        Ml(l.type) && (Ut = l.stateNode, de = !1), nl(
          t,
          e,
          l
        ), Hn(l.stateNode), Ut = a, de = n;
        break;
      case 5:
        Vt || Ve(l, e);
      case 6:
        if (a = Ut, n = de, Ut = null, nl(
          t,
          e,
          l
        ), Ut = a, de = n, Ut !== null)
          if (de)
            try {
              (Ut.nodeType === 9 ? Ut.body : Ut.nodeName === "HTML" ? Ut.ownerDocument.body : Ut).removeChild(l.stateNode);
            } catch (i) {
              jt(
                l,
                e,
                i
              );
            }
          else
            try {
              Ut.removeChild(l.stateNode);
            } catch (i) {
              jt(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        Ut !== null && (de ? (t = Ut, Cd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Za(t)) : Cd(Ut, l.stateNode));
        break;
      case 4:
        a = Ut, n = de, Ut = l.stateNode.containerInfo, de = !0, nl(
          t,
          e,
          l
        ), Ut = a, de = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _l(2, l, e), Vt || _l(4, l, e), nl(
          t,
          e,
          l
        );
        break;
      case 1:
        Vt || (Ve(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Oo(
          l,
          e,
          a
        )), nl(
          t,
          e,
          l
        );
        break;
      case 21:
        nl(
          t,
          e,
          l
        );
        break;
      case 22:
        Vt = (a = Vt) || l.memoizedState !== null, nl(
          t,
          e,
          l
        ), Vt = a;
        break;
      default:
        nl(
          t,
          e,
          l
        );
    }
  }
  function Yo(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Za(t);
      } catch (l) {
        jt(e, e.return, l);
      }
    }
  }
  function Go(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Za(t);
      } catch (l) {
        jt(e, e.return, l);
      }
  }
  function ov(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ho()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Ho()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Zi(t, e) {
    var l = ov(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = xv.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function he(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], i = t, c = e, o = c;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Ml(o.type)) {
                Ut = o.stateNode, de = !1;
                break t;
              }
              break;
            case 5:
              Ut = o.stateNode, de = !1;
              break t;
            case 3:
            case 4:
              Ut = o.stateNode.containerInfo, de = !0;
              break t;
          }
          o = o.return;
        }
        if (Ut === null) throw Error(f(160));
        Bo(i, c, n), Ut = null, de = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Lo(e, t), e = e.sibling;
  }
  var Le = null;
  function Lo(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        he(e, t), me(t), a & 4 && (_l(3, t, t.return), _n(3, t), _l(5, t, t.return));
        break;
      case 1:
        he(e, t), me(t), a & 512 && (Vt || l === null || Ve(l, l.return)), a & 64 && al && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = Le;
        if (he(e, t), me(t), a & 512 && (Vt || l === null || Ve(l, l.return)), a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[Fa] || i[te] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), ne(i, a, l), i[te] = t, kt(i), a = i;
                      break t;
                    case "link":
                      var c = Ld(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (c) {
                        for (var o = 0; o < c.length; o++)
                          if (i = c[o], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            c.splice(o, 1);
                            break e;
                          }
                      }
                      i = n.createElement(a), ne(i, a, l), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (c = Ld(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (o = 0; o < c.length; o++)
                          if (i = c[o], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            c.splice(o, 1);
                            break e;
                          }
                      }
                      i = n.createElement(a), ne(i, a, l), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  i[te] = t, kt(i), a = i;
                }
                t.stateNode = a;
              } else
                Qd(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Gd(
                n,
                a,
                t.memoizedProps
              );
          else
            i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? Qd(
              n,
              t.type,
              t.stateNode
            ) : Gd(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Pc(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        he(e, t), me(t), a & 512 && (Vt || l === null || Ve(l, l.return)), l !== null && a & 4 && Pc(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (he(e, t), me(t), a & 512 && (Vt || l === null || Ve(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            da(n, "");
          } catch (Z) {
            jt(t, t.return, Z);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Pc(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (ls = !0);
        break;
      case 6:
        if (he(e, t), me(t), a & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (Z) {
            jt(t, t.return, Z);
          }
        }
        break;
      case 3:
        if (iu = null, n = Le, Le = au(e.containerInfo), he(e, t), Le = n, me(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Za(e.containerInfo);
          } catch (Z) {
            jt(t, t.return, Z);
          }
        ls && (ls = !1, Qo(t));
        break;
      case 4:
        a = Le, Le = au(
          t.stateNode.containerInfo
        ), he(e, t), me(t), Le = a;
        break;
      case 12:
        he(e, t), me(t);
        break;
      case 31:
        he(e, t), me(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Zi(t, a)));
        break;
      case 13:
        he(e, t), me(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (wi = be()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Zi(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null, E = al, O = Vt;
        if (al = E || n, Vt = O || m, he(e, t), Vt = O, al = E, me(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || al || Vt || ea(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (i = m.stateNode, n)
                    c = i.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    o = m.stateNode;
                    var R = m.memoizedProps.style, _ = R != null && R.hasOwnProperty("display") ? R.display : null;
                    o.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (Z) {
                  jt(m, m.return, Z);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (Z) {
                  jt(m, m.return, Z);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var T = m.stateNode;
                  n ? Od(T, !0) : Od(m.stateNode, !1);
                } catch (Z) {
                  jt(m, m.return, Z);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Zi(t, l))));
        break;
      case 19:
        he(e, t), me(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Zi(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        he(e, t), me(t);
    }
  }
  function me(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Uo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, i = ts(t);
            Xi(t, i, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (da(c, ""), l.flags &= -33);
            var o = ts(t);
            Xi(t, o, c);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, E = ts(t);
            es(
              t,
              E,
              m
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (O) {
        jt(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Qo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Qo(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function il(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Ro(t, e.alternate, e), e = e.sibling;
  }
  function ea(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _l(4, e, e.return), ea(e);
          break;
        case 1:
          Ve(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Oo(
            e,
            e.return,
            l
          ), ea(e);
          break;
        case 27:
          Hn(e.stateNode);
        case 26:
        case 5:
          Ve(e, e.return), ea(e);
          break;
        case 22:
          e.memoizedState === null && ea(e);
          break;
        case 30:
          ea(e);
          break;
        default:
          ea(e);
      }
      t = t.sibling;
    }
  }
  function ul(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, i = e, c = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ul(
            n,
            i,
            l
          ), _n(4, i);
          break;
        case 1:
          if (ul(
            n,
            i,
            l
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (E) {
              jt(a, a.return, E);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var o = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  gr(m[n], o);
            } catch (E) {
              jt(a, a.return, E);
            }
          }
          l && c & 64 && Co(i), An(i, i.return);
          break;
        case 27:
          Do(i);
        case 26:
        case 5:
          ul(
            n,
            i,
            l
          ), l && a === null && c & 4 && Mo(i), An(i, i.return);
          break;
        case 12:
          ul(
            n,
            i,
            l
          );
          break;
        case 31:
          ul(
            n,
            i,
            l
          ), l && c & 4 && Yo(n, i);
          break;
        case 13:
          ul(
            n,
            i,
            l
          ), l && c & 4 && Go(n, i);
          break;
        case 22:
          i.memoizedState === null && ul(
            n,
            i,
            l
          ), An(i, i.return);
          break;
        case 30:
          break;
        default:
          ul(
            n,
            i,
            l
          );
      }
      e = e.sibling;
    }
  }
  function as(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && on(l));
  }
  function ns(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && on(t));
  }
  function Qe(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Xo(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function Xo(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Qe(
          t,
          e,
          l,
          a
        ), n & 2048 && _n(9, e);
        break;
      case 1:
        Qe(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        Qe(
          t,
          e,
          l,
          a
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && on(t)));
        break;
      case 12:
        if (n & 2048) {
          Qe(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, c = i.id, o = i.onPostCommit;
            typeof o == "function" && o(
              c,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (m) {
            jt(e, e.return, m);
          }
        } else
          Qe(
            t,
            e,
            l,
            a
          );
        break;
      case 31:
        Qe(
          t,
          e,
          l,
          a
        );
        break;
      case 13:
        Qe(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, c = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Qe(
          t,
          e,
          l,
          a
        ) : Nn(t, e) : i._visibility & 2 ? Qe(
          t,
          e,
          l,
          a
        ) : (i._visibility |= 2, Ua(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && as(c, e);
        break;
      case 24:
        Qe(
          t,
          e,
          l,
          a
        ), n & 2048 && ns(e.alternate, e);
        break;
      default:
        Qe(
          t,
          e,
          l,
          a
        );
    }
  }
  function Ua(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, c = e, o = l, m = a, E = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Ua(
            i,
            c,
            o,
            m,
            n
          ), _n(8, c);
          break;
        case 23:
          break;
        case 22:
          var O = c.stateNode;
          c.memoizedState !== null ? O._visibility & 2 ? Ua(
            i,
            c,
            o,
            m,
            n
          ) : Nn(
            i,
            c
          ) : (O._visibility |= 2, Ua(
            i,
            c,
            o,
            m,
            n
          )), n && E & 2048 && as(
            c.alternate,
            c
          );
          break;
        case 24:
          Ua(
            i,
            c,
            o,
            m,
            n
          ), n && E & 2048 && ns(c.alternate, c);
          break;
        default:
          Ua(
            i,
            c,
            o,
            m,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Nn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            Nn(l, a), n & 2048 && as(
              a.alternate,
              a
            );
            break;
          case 24:
            Nn(l, a), n & 2048 && ns(a.alternate, a);
            break;
          default:
            Nn(l, a);
        }
        e = e.sibling;
      }
  }
  var Tn = 8192;
  function Da(t, e, l) {
    if (t.subtreeFlags & Tn)
      for (t = t.child; t !== null; )
        Zo(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function Zo(t, e, l) {
    switch (t.tag) {
      case 26:
        Da(
          t,
          e,
          l
        ), t.flags & Tn && t.memoizedState !== null && Fv(
          l,
          Le,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Da(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var a = Le;
        Le = au(t.stateNode.containerInfo), Da(
          t,
          e,
          l
        ), Le = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Tn, Tn = 16777216, Da(
          t,
          e,
          l
        ), Tn = a) : Da(
          t,
          e,
          l
        ));
        break;
      default:
        Da(
          t,
          e,
          l
        );
    }
  }
  function Vo(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function zn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Wt = a, $o(
            a,
            t
          );
        }
      Vo(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        wo(t), t = t.sibling;
  }
  function wo(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zn(t), t.flags & 2048 && _l(9, t, t.return);
        break;
      case 3:
        zn(t);
        break;
      case 12:
        zn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Vi(t)) : zn(t);
        break;
      default:
        zn(t);
    }
  }
  function Vi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Wt = a, $o(
            a,
            t
          );
        }
      Vo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          _l(8, e, e.return), Vi(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Vi(e));
          break;
        default:
          Vi(e);
      }
      t = t.sibling;
    }
  }
  function $o(t, e) {
    for (; Wt !== null; ) {
      var l = Wt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          _l(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          on(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Wt = a;
      else
        t: for (l = t; Wt !== null; ) {
          a = Wt;
          var n = a.sibling, i = a.return;
          if (qo(a), a === l) {
            Wt = null;
            break t;
          }
          if (n !== null) {
            n.return = i, Wt = n;
            break t;
          }
          Wt = i;
        }
    }
  }
  var dv = {
    getCacheForType: function(t) {
      var e = le(Qt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return le(Qt).controller.signal;
    }
  }, hv = typeof WeakMap == "function" ? WeakMap : Map, xt = 0, Tt = null, st = null, ot = 0, St = 0, Ne = null, Al = !1, Ha = !1, is = !1, cl = 0, qt = 0, Nl = 0, la = 0, us = 0, Te = 0, Ra = 0, Cn = null, ve = null, cs = !1, wi = 0, Ko = 0, $i = 1 / 0, Ki = null, Tl = null, Kt = 0, zl = null, qa = null, sl = 0, ss = 0, fs = null, Jo = null, On = 0, rs = null;
  function ze() {
    return (xt & 2) !== 0 && ot !== 0 ? ot & -ot : C.T !== null ? ys() : ff();
  }
  function ko() {
    if (Te === 0)
      if ((ot & 536870912) === 0 || mt) {
        var t = ei;
        ei <<= 1, (ei & 3932160) === 0 && (ei = 262144), Te = t;
      } else Te = 536870912;
    return t = _e.current, t !== null && (t.flags |= 32), Te;
  }
  function ye(t, e, l) {
    (t === Tt && (St === 2 || St === 9) || t.cancelPendingCommit !== null) && (Ba(t, 0), Cl(
      t,
      ot,
      Te,
      !1
    )), Wa(t, l), ((xt & 2) === 0 || t !== Tt) && (t === Tt && ((xt & 2) === 0 && (la |= l), qt === 4 && Cl(
      t,
      ot,
      Te,
      !1
    )), we(t));
  }
  function Wo(t, e, l) {
    if ((xt & 6) !== 0) throw Error(f(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ka(t, e), n = a ? yv(t, e) : ds(t, e, !0), i = a;
    do {
      if (n === 0) {
        Ha && !a && Cl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !mv(l)) {
          n = ds(t, e, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var c = 0;
          else
            c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            e = c;
            t: {
              var o = t;
              n = Cn;
              var m = o.current.memoizedState.isDehydrated;
              if (m && (Ba(o, c).flags |= 256), c = ds(
                o,
                c,
                !1
              ), c !== 2) {
                if (is && !m) {
                  o.errorRecoveryDisabledLanes |= i, la |= i, n = 4;
                  break t;
                }
                i = ve, ve = n, i !== null && (ve === null ? ve = i : ve.push.apply(
                  ve,
                  i
                ));
              }
              n = c;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ba(t, 0), Cl(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, i = n, i) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Cl(
                a,
                e,
                Te,
                !Al
              );
              break t;
            case 2:
              ve = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (n = wi + 300 - be(), 10 < n)) {
            if (Cl(
              a,
              e,
              Te,
              !Al
            ), ai(a, 0, !0) !== 0) break t;
            sl = e, a.timeoutHandle = Td(
              Fo.bind(
                null,
                a,
                l,
                ve,
                Ki,
                cs,
                e,
                Te,
                la,
                Ra,
                Al,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Fo(
            a,
            l,
            ve,
            Ki,
            cs,
            e,
            Te,
            la,
            Ra,
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
    we(t);
  }
  function Fo(t, e, l, a, n, i, c, o, m, E, O, R, _, T) {
    if (t.timeoutHandle = -1, R = e.subtreeFlags, R & 8192 || (R & 16785408) === 16785408) {
      R = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ke
      }, Zo(
        e,
        i,
        R
      );
      var Z = (i & 62914560) === i ? wi - be() : (i & 4194048) === i ? Ko - be() : 0;
      if (Z = Iv(
        R,
        Z
      ), Z !== null) {
        sl = i, t.cancelPendingCommit = Z(
          id.bind(
            null,
            t,
            e,
            i,
            l,
            a,
            n,
            c,
            o,
            m,
            O,
            R,
            null,
            _,
            T
          )
        ), Cl(t, i, c, !E);
        return;
      }
    }
    id(
      t,
      e,
      i,
      l,
      a,
      n,
      c,
      o,
      m
    );
  }
  function mv(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!je(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Cl(t, e, l, a) {
    e &= ~us, e &= ~la, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var i = 31 - Se(n), c = 1 << i;
      a[i] = -1, n &= ~c;
    }
    l !== 0 && uf(t, l, e);
  }
  function Ji() {
    return (xt & 6) === 0 ? (Mn(0), !1) : !0;
  }
  function os() {
    if (st !== null) {
      if (St === 0)
        var t = st.return;
      else
        t = st, Fe = Kl = null, Tc(t), Ta = null, hn = 0, t = st;
      for (; t !== null; )
        zo(t.alternate, t), t = t.return;
      st = null;
    }
  }
  function Ba(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Hv(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), sl = 0, os(), Tt = t, st = l = ke(t.current, null), ot = e, St = 0, Ne = null, Al = !1, Ha = ka(t, e), is = !1, Ra = Te = us = la = Nl = qt = 0, ve = Cn = null, cs = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - Se(a), i = 1 << n;
        e |= t[n], a &= ~i;
      }
    return cl = e, vi(), l;
  }
  function Io(t, e) {
    nt = null, C.H = Sn, e === Na || e === Ei ? (e = hr(), St = 3) : e === vc ? (e = hr(), St = 4) : St = e === Zc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ne = e, st === null && (qt = 1, Bi(
      t,
      Ue(e, t.current)
    ));
  }
  function Po() {
    var t = _e.current;
    return t === null ? !0 : (ot & 4194048) === ot ? qe === null : (ot & 62914560) === ot || (ot & 536870912) !== 0 ? t === qe : !1;
  }
  function td() {
    var t = C.H;
    return C.H = Sn, t === null ? Sn : t;
  }
  function ed() {
    var t = C.A;
    return C.A = dv, t;
  }
  function ki() {
    qt = 4, Al || (ot & 4194048) !== ot && _e.current !== null || (Ha = !0), (Nl & 134217727) === 0 && (la & 134217727) === 0 || Tt === null || Cl(
      Tt,
      ot,
      Te,
      !1
    );
  }
  function ds(t, e, l) {
    var a = xt;
    xt |= 2;
    var n = td(), i = ed();
    (Tt !== t || ot !== e) && (Ki = null, Ba(t, e)), e = !1;
    var c = qt;
    t: do
      try {
        if (St !== 0 && st !== null) {
          var o = st, m = Ne;
          switch (St) {
            case 8:
              os(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              _e.current === null && (e = !0);
              var E = St;
              if (St = 0, Ne = null, Ya(t, o, m, E), l && Ha) {
                c = 0;
                break t;
              }
              break;
            default:
              E = St, St = 0, Ne = null, Ya(t, o, m, E);
          }
        }
        vv(), c = qt;
        break;
      } catch (O) {
        Io(t, O);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Fe = Kl = null, xt = a, C.H = n, C.A = i, st === null && (Tt = null, ot = 0, vi()), c;
  }
  function vv() {
    for (; st !== null; ) ld(st);
  }
  function yv(t, e) {
    var l = xt;
    xt |= 2;
    var a = td(), n = ed();
    Tt !== t || ot !== e ? (Ki = null, $i = be() + 500, Ba(t, e)) : Ha = ka(
      t,
      e
    );
    t: do
      try {
        if (St !== 0 && st !== null) {
          e = st;
          var i = Ne;
          e: switch (St) {
            case 1:
              St = 0, Ne = null, Ya(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (or(i)) {
                St = 0, Ne = null, ad(e);
                break;
              }
              e = function() {
                St !== 2 && St !== 9 || Tt !== t || (St = 7), we(t);
              }, i.then(e, e);
              break t;
            case 3:
              St = 7;
              break t;
            case 4:
              St = 5;
              break t;
            case 7:
              or(i) ? (St = 0, Ne = null, ad(e)) : (St = 0, Ne = null, Ya(t, e, i, 7));
              break;
            case 5:
              var c = null;
              switch (st.tag) {
                case 26:
                  c = st.memoizedState;
                case 5:
                case 27:
                  var o = st;
                  if (c ? Xd(c) : o.stateNode.complete) {
                    St = 0, Ne = null;
                    var m = o.sibling;
                    if (m !== null) st = m;
                    else {
                      var E = o.return;
                      E !== null ? (st = E, Wi(E)) : st = null;
                    }
                    break e;
                  }
              }
              St = 0, Ne = null, Ya(t, e, i, 5);
              break;
            case 6:
              St = 0, Ne = null, Ya(t, e, i, 6);
              break;
            case 8:
              os(), qt = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        gv();
        break;
      } catch (O) {
        Io(t, O);
      }
    while (!0);
    return Fe = Kl = null, C.H = a, C.A = n, xt = l, st !== null ? 0 : (Tt = null, ot = 0, vi(), qt);
  }
  function gv() {
    for (; st !== null && !Lh(); )
      ld(st);
  }
  function ld(t) {
    var e = No(t.alternate, t, cl);
    t.memoizedProps = t.pendingProps, e === null ? Wi(t) : st = e;
  }
  function ad(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = xo(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ot
        );
        break;
      case 11:
        e = xo(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ot
        );
        break;
      case 5:
        Tc(e);
      default:
        zo(l, e), e = st = tr(e, cl), e = No(l, e, cl);
    }
    t.memoizedProps = t.pendingProps, e === null ? Wi(t) : st = e;
  }
  function Ya(t, e, l, a) {
    Fe = Kl = null, Tc(e), Ta = null, hn = 0;
    var n = e.return;
    try {
      if (iv(
        t,
        n,
        e,
        l,
        ot
      )) {
        qt = 1, Bi(
          t,
          Ue(l, t.current)
        ), st = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw st = n, i;
      qt = 1, Bi(
        t,
        Ue(l, t.current)
      ), st = null;
      return;
    }
    e.flags & 32768 ? (mt || a === 1 ? t = !0 : Ha || (ot & 536870912) !== 0 ? t = !1 : (Al = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = _e.current, a !== null && a.tag === 13 && (a.flags |= 16384))), nd(e, t)) : Wi(e);
  }
  function Wi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        nd(
          e,
          Al
        );
        return;
      }
      t = e.return;
      var l = sv(
        e.alternate,
        e,
        cl
      );
      if (l !== null) {
        st = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        st = e;
        return;
      }
      st = e = t;
    } while (e !== null);
    qt === 0 && (qt = 5);
  }
  function nd(t, e) {
    do {
      var l = fv(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, st = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        st = t;
        return;
      }
      st = t = l;
    } while (t !== null);
    qt = 6, st = null;
  }
  function id(t, e, l, a, n, i, c, o, m) {
    t.cancelPendingCommit = null;
    do
      Fi();
    while (Kt !== 0);
    if ((xt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (i = e.lanes | e.childLanes, i |= tc, Wh(
        t,
        l,
        i,
        c,
        o,
        m
      ), t === Tt && (st = Tt = null, ot = 0), qa = e, zl = t, sl = l, ss = i, fs = n, Jo = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Sv(Pn, function() {
        return rd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = C.T, C.T = null, n = A.p, A.p = 2, c = xt, xt |= 4;
        try {
          rv(t, e, l);
        } finally {
          xt = c, A.p = n, C.T = a;
        }
      }
      Kt = 1, ud(), cd(), sd();
    }
  }
  function ud() {
    if (Kt === 1) {
      Kt = 0;
      var t = zl, e = qa, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = C.T, C.T = null;
        var a = A.p;
        A.p = 2;
        var n = xt;
        xt |= 4;
        try {
          Lo(e, t);
          var i = _s, c = wf(t.containerInfo), o = i.focusedElem, m = i.selectionRange;
          if (c !== o && o && o.ownerDocument && Vf(
            o.ownerDocument.documentElement,
            o
          )) {
            if (m !== null && ku(o)) {
              var E = m.start, O = m.end;
              if (O === void 0 && (O = E), "selectionStart" in o)
                o.selectionStart = E, o.selectionEnd = Math.min(
                  O,
                  o.value.length
                );
              else {
                var R = o.ownerDocument || document, _ = R && R.defaultView || window;
                if (_.getSelection) {
                  var T = _.getSelection(), Z = o.textContent.length, I = Math.min(m.start, Z), At = m.end === void 0 ? I : Math.min(m.end, Z);
                  !T.extend && I > At && (c = At, At = I, I = c);
                  var x = Zf(
                    o,
                    I
                  ), g = Zf(
                    o,
                    At
                  );
                  if (x && g && (T.rangeCount !== 1 || T.anchorNode !== x.node || T.anchorOffset !== x.offset || T.focusNode !== g.node || T.focusOffset !== g.offset)) {
                    var j = R.createRange();
                    j.setStart(x.node, x.offset), T.removeAllRanges(), I > At ? (T.addRange(j), T.extend(g.node, g.offset)) : (j.setEnd(g.node, g.offset), T.addRange(j));
                  }
                }
              }
            }
            for (R = [], T = o; T = T.parentNode; )
              T.nodeType === 1 && R.push({
                element: T,
                left: T.scrollLeft,
                top: T.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < R.length; o++) {
              var U = R[o];
              U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
            }
          }
          fu = !!Es, _s = Es = null;
        } finally {
          xt = n, A.p = a, C.T = l;
        }
      }
      t.current = e, Kt = 2;
    }
  }
  function cd() {
    if (Kt === 2) {
      Kt = 0;
      var t = zl, e = qa, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = C.T, C.T = null;
        var a = A.p;
        A.p = 2;
        var n = xt;
        xt |= 4;
        try {
          Ro(t, e.alternate, e);
        } finally {
          xt = n, A.p = a, C.T = l;
        }
      }
      Kt = 3;
    }
  }
  function sd() {
    if (Kt === 4 || Kt === 3) {
      Kt = 0, Qh();
      var t = zl, e = qa, l = sl, a = Jo;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Kt = 5 : (Kt = 0, qa = zl = null, fd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (Tl = null), Ou(l), e = e.stateNode, xe && typeof xe.onCommitFiberRoot == "function")
        try {
          xe.onCommitFiberRoot(
            Ja,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = C.T, n = A.p, A.p = 2, C.T = null;
        try {
          for (var i = t.onRecoverableError, c = 0; c < a.length; c++) {
            var o = a[c];
            i(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          C.T = e, A.p = n;
        }
      }
      (sl & 3) !== 0 && Fi(), we(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === rs ? On++ : (On = 0, rs = t) : On = 0, Mn(0);
    }
  }
  function fd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, on(e)));
  }
  function Fi() {
    return ud(), cd(), sd(), rd();
  }
  function rd() {
    if (Kt !== 5) return !1;
    var t = zl, e = ss;
    ss = 0;
    var l = Ou(sl), a = C.T, n = A.p;
    try {
      A.p = 32 > l ? 32 : l, C.T = null, l = fs, fs = null;
      var i = zl, c = sl;
      if (Kt = 0, qa = zl = null, sl = 0, (xt & 6) !== 0) throw Error(f(331));
      var o = xt;
      if (xt |= 4, wo(i.current), Xo(
        i,
        i.current,
        c,
        l
      ), xt = o, Mn(0, !1), xe && typeof xe.onPostCommitFiberRoot == "function")
        try {
          xe.onPostCommitFiberRoot(Ja, i);
        } catch {
        }
      return !0;
    } finally {
      A.p = n, C.T = a, fd(t, e);
    }
  }
  function od(t, e, l) {
    e = Ue(l, e), e = Xc(t.stateNode, e, 2), t = Sl(t, e, 2), t !== null && (Wa(t, 2), we(t));
  }
  function jt(t, e, l) {
    if (t.tag === 3)
      od(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          od(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Tl === null || !Tl.has(a))) {
            t = Ue(l, t), l = oo(2), a = Sl(e, l, 2), a !== null && (ho(
              l,
              a,
              e,
              t
            ), Wa(a, 2), we(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function hs(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new hv();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (is = !0, n.add(l), t = pv.bind(null, t, e, l), e.then(t, t));
  }
  function pv(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Tt === t && (ot & l) === l && (qt === 4 || qt === 3 && (ot & 62914560) === ot && 300 > be() - wi ? (xt & 2) === 0 && Ba(t, 0) : us |= l, Ra === ot && (Ra = 0)), we(t);
  }
  function dd(t, e) {
    e === 0 && (e = nf()), t = Vl(t, e), t !== null && (Wa(t, e), we(t));
  }
  function bv(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), dd(t, l);
  }
  function xv(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), dd(t, l);
  }
  function Sv(t, e) {
    return Nu(t, e);
  }
  var Ii = null, Ga = null, ms = !1, Pi = !1, vs = !1, Ol = 0;
  function we(t) {
    t !== Ga && t.next === null && (Ga === null ? Ii = Ga = t : Ga = Ga.next = t), Pi = !0, ms || (ms = !0, Ev());
  }
  function Mn(t, e) {
    if (!vs && Pi) {
      vs = !0;
      do
        for (var l = !1, a = Ii; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var c = a.suspendedLanes, o = a.pingedLanes;
              i = (1 << 31 - Se(42 | t) + 1) - 1, i &= n & ~(c & ~o), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, yd(a, i));
          } else
            i = ot, i = ai(
              a,
              a === Tt ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || ka(a, i) || (l = !0, yd(a, i));
          a = a.next;
        }
      while (l);
      vs = !1;
    }
  }
  function jv() {
    hd();
  }
  function hd() {
    Pi = ms = !1;
    var t = 0;
    Ol !== 0 && Dv() && (t = Ol);
    for (var e = be(), l = null, a = Ii; a !== null; ) {
      var n = a.next, i = md(a, e);
      i === 0 ? (a.next = null, l === null ? Ii = n : l.next = n, n === null && (Ga = l)) : (l = a, (t !== 0 || (i & 3) !== 0) && (Pi = !0)), a = n;
    }
    Kt !== 0 && Kt !== 5 || Mn(t), Ol !== 0 && (Ol = 0);
  }
  function md(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var c = 31 - Se(i), o = 1 << c, m = n[c];
      m === -1 ? ((o & l) === 0 || (o & a) !== 0) && (n[c] = kh(o, e)) : m <= e && (t.expiredLanes |= o), i &= ~o;
    }
    if (e = Tt, l = ot, l = ai(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (St === 2 || St === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Tu(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || ka(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && Tu(a), Ou(l)) {
        case 2:
        case 8:
          l = lf;
          break;
        case 32:
          l = Pn;
          break;
        case 268435456:
          l = af;
          break;
        default:
          l = Pn;
      }
      return a = vd.bind(null, t), l = Nu(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && Tu(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function vd(t, e) {
    if (Kt !== 0 && Kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Fi() && t.callbackNode !== l)
      return null;
    var a = ot;
    return a = ai(
      t,
      t === Tt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Wo(t, a, e), md(t, be()), t.callbackNode != null && t.callbackNode === l ? vd.bind(null, t) : null);
  }
  function yd(t, e) {
    if (Fi()) return null;
    Wo(t, e, !0);
  }
  function Ev() {
    Rv(function() {
      (xt & 6) !== 0 ? Nu(
        ef,
        jv
      ) : hd();
    });
  }
  function ys() {
    if (Ol === 0) {
      var t = _a;
      t === 0 && (t = ti, ti <<= 1, (ti & 261888) === 0 && (ti = 256)), Ol = t;
    }
    return Ol;
  }
  function gd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : ci("" + t);
  }
  function pd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function _v(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var i = gd(
        (n[re] || null).action
      ), c = a.submitter;
      c && (e = (e = c[re] || null) ? gd(e.formAction) : c.getAttribute("formAction"), e !== null && (i = e, c = null));
      var o = new oi(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ol !== 0) {
                  var m = c ? pd(n, c) : new FormData(n);
                  qc(
                    l,
                    {
                      pending: !0,
                      data: m,
                      method: n.method,
                      action: i
                    },
                    null,
                    m
                  );
                }
              } else
                typeof i == "function" && (o.preventDefault(), m = c ? pd(n, c) : new FormData(n), qc(
                  l,
                  {
                    pending: !0,
                    data: m,
                    method: n.method,
                    action: i
                  },
                  i,
                  m
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var gs = 0; gs < Pu.length; gs++) {
    var ps = Pu[gs], Av = ps.toLowerCase(), Nv = ps[0].toUpperCase() + ps.slice(1);
    Ge(
      Av,
      "on" + Nv
    );
  }
  Ge(Jf, "onAnimationEnd"), Ge(kf, "onAnimationIteration"), Ge(Wf, "onAnimationStart"), Ge("dblclick", "onDoubleClick"), Ge("focusin", "onFocus"), Ge("focusout", "onBlur"), Ge(Xm, "onTransitionRun"), Ge(Zm, "onTransitionStart"), Ge(Vm, "onTransitionCancel"), Ge(Ff, "onTransitionEnd"), ra("onMouseEnter", ["mouseout", "mouseover"]), ra("onMouseLeave", ["mouseout", "mouseover"]), ra("onPointerEnter", ["pointerout", "pointerover"]), ra("onPointerLeave", ["pointerout", "pointerover"]), Ll(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ll(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ll("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ll(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ll(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ll(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Un = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Tv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Un)
  );
  function bd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var o = a[c], m = o.instance, E = o.currentTarget;
            if (o = o.listener, m !== i && n.isPropagationStopped())
              break t;
            i = o, n.currentTarget = E;
            try {
              i(n);
            } catch (O) {
              mi(O);
            }
            n.currentTarget = null, i = m;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (o = a[c], m = o.instance, E = o.currentTarget, o = o.listener, m !== i && n.isPropagationStopped())
              break t;
            i = o, n.currentTarget = E;
            try {
              i(n);
            } catch (O) {
              mi(O);
            }
            n.currentTarget = null, i = m;
          }
      }
    }
  }
  function ft(t, e) {
    var l = e[Mu];
    l === void 0 && (l = e[Mu] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (xd(e, t, 2, !1), l.add(a));
  }
  function bs(t, e, l) {
    var a = 0;
    e && (a |= 4), xd(
      l,
      t,
      a,
      e
    );
  }
  var tu = "_reactListening" + Math.random().toString(36).slice(2);
  function xs(t) {
    if (!t[tu]) {
      t[tu] = !0, df.forEach(function(l) {
        l !== "selectionchange" && (Tv.has(l) || bs(l, !1, t), bs(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[tu] || (e[tu] = !0, bs("selectionchange", !1, e));
    }
  }
  function xd(t, e, l, a) {
    switch (kd(e)) {
      case 2:
        var n = ey;
        break;
      case 8:
        n = ly;
        break;
      default:
        n = Rs;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !Lu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function Ss(t, e, l, a, n) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var o = a.stateNode.containerInfo;
          if (o === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var m = c.tag;
              if ((m === 3 || m === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; o !== null; ) {
            if (c = ca(o), c === null) return;
            if (m = c.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = i = c;
              continue t;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
    _f(function() {
      var E = i, O = Yu(l), R = [];
      t: {
        var _ = If.get(t);
        if (_ !== void 0) {
          var T = oi, Z = t;
          switch (t) {
            case "keypress":
              if (fi(l) === 0) break t;
            case "keydown":
            case "keyup":
              T = xm;
              break;
            case "focusin":
              Z = "focus", T = Vu;
              break;
            case "focusout":
              Z = "blur", T = Vu;
              break;
            case "beforeblur":
            case "afterblur":
              T = Vu;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = Tf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = sm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = Em;
              break;
            case Jf:
            case kf:
            case Wf:
              T = om;
              break;
            case Ff:
              T = Am;
              break;
            case "scroll":
            case "scrollend":
              T = um;
              break;
            case "wheel":
              T = Tm;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = Cf;
              break;
            case "toggle":
            case "beforetoggle":
              T = Cm;
          }
          var I = (e & 4) !== 0, At = !I && (t === "scroll" || t === "scrollend"), x = I ? _ !== null ? _ + "Capture" : null : _;
          I = [];
          for (var g = E, j; g !== null; ) {
            var U = g;
            if (j = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || j === null || x === null || (U = Pa(g, x), U != null && I.push(
              Dn(g, U, j)
            )), At) break;
            g = g.return;
          }
          0 < I.length && (_ = new T(
            _,
            Z,
            null,
            l,
            O
          ), R.push({ event: _, listeners: I }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (_ = t === "mouseover" || t === "pointerover", T = t === "mouseout" || t === "pointerout", _ && l !== Bu && (Z = l.relatedTarget || l.fromElement) && (ca(Z) || Z[ua]))
            break t;
          if ((T || _) && (_ = O.window === O ? O : (_ = O.ownerDocument) ? _.defaultView || _.parentWindow : window, T ? (Z = l.relatedTarget || l.toElement, T = E, Z = Z ? ca(Z) : null, Z !== null && (At = N(Z), I = Z.tag, Z !== At || I !== 5 && I !== 27 && I !== 6) && (Z = null)) : (T = null, Z = E), T !== Z)) {
            if (I = Tf, U = "onMouseLeave", x = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && (I = Cf, U = "onPointerLeave", x = "onPointerEnter", g = "pointer"), At = T == null ? _ : Ia(T), j = Z == null ? _ : Ia(Z), _ = new I(
              U,
              g + "leave",
              T,
              l,
              O
            ), _.target = At, _.relatedTarget = j, U = null, ca(O) === E && (I = new I(
              x,
              g + "enter",
              Z,
              l,
              O
            ), I.target = j, I.relatedTarget = At, U = I), At = U, T && Z)
              e: {
                for (I = zv, x = T, g = Z, j = 0, U = x; U; U = I(U))
                  j++;
                U = 0;
                for (var k = g; k; k = I(k))
                  U++;
                for (; 0 < j - U; )
                  x = I(x), j--;
                for (; 0 < U - j; )
                  g = I(g), U--;
                for (; j--; ) {
                  if (x === g || g !== null && x === g.alternate) {
                    I = x;
                    break e;
                  }
                  x = I(x), g = I(g);
                }
                I = null;
              }
            else I = null;
            T !== null && Sd(
              R,
              _,
              T,
              I,
              !1
            ), Z !== null && At !== null && Sd(
              R,
              At,
              Z,
              I,
              !0
            );
          }
        }
        t: {
          if (_ = E ? Ia(E) : window, T = _.nodeName && _.nodeName.toLowerCase(), T === "select" || T === "input" && _.type === "file")
            var yt = Bf;
          else if (Rf(_))
            if (Yf)
              yt = Gm;
            else {
              yt = Bm;
              var $ = qm;
            }
          else
            T = _.nodeName, !T || T.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? E && qu(E.elementType) && (yt = Bf) : yt = Ym;
          if (yt && (yt = yt(t, E))) {
            qf(
              R,
              yt,
              l,
              O
            );
            break t;
          }
          $ && $(t, _, E), t === "focusout" && E && _.type === "number" && E.memoizedProps.value != null && Ru(_, "number", _.value);
        }
        switch ($ = E ? Ia(E) : window, t) {
          case "focusin":
            (Rf($) || $.contentEditable === "true") && (ya = $, Wu = E, sn = null);
            break;
          case "focusout":
            sn = Wu = ya = null;
            break;
          case "mousedown":
            Fu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Fu = !1, $f(R, l, O);
            break;
          case "selectionchange":
            if (Qm) break;
          case "keydown":
          case "keyup":
            $f(R, l, O);
        }
        var it;
        if ($u)
          t: {
            switch (t) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break t;
              case "compositionend":
                dt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break t;
            }
            dt = void 0;
          }
        else
          va ? Df(t, l) && (dt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (dt = "onCompositionStart");
        dt && (Of && l.locale !== "ko" && (va || dt !== "onCompositionStart" ? dt === "onCompositionEnd" && va && (it = Af()) : (ml = O, Qu = "value" in ml ? ml.value : ml.textContent, va = !0)), $ = eu(E, dt), 0 < $.length && (dt = new zf(
          dt,
          t,
          null,
          l,
          O
        ), R.push({ event: dt, listeners: $ }), it ? dt.data = it : (it = Hf(l), it !== null && (dt.data = it)))), (it = Mm ? Um(t, l) : Dm(t, l)) && (dt = eu(E, "onBeforeInput"), 0 < dt.length && ($ = new zf(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          O
        ), R.push({
          event: $,
          listeners: dt
        }), $.data = it)), _v(
          R,
          t,
          E,
          l,
          O
        );
      }
      bd(R, e);
    });
  }
  function Dn(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function eu(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = Pa(t, l), n != null && a.unshift(
        Dn(t, n, i)
      ), n = Pa(t, e), n != null && a.push(
        Dn(t, n, i)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function zv(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Sd(t, e, l, a, n) {
    for (var i = e._reactName, c = []; l !== null && l !== a; ) {
      var o = l, m = o.alternate, E = o.stateNode;
      if (o = o.tag, m !== null && m === a) break;
      o !== 5 && o !== 26 && o !== 27 || E === null || (m = E, n ? (E = Pa(l, i), E != null && c.unshift(
        Dn(l, E, m)
      )) : n || (E = Pa(l, i), E != null && c.push(
        Dn(l, E, m)
      ))), l = l.return;
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var Cv = /\r\n?/g, Ov = /\u0000|\uFFFD/g;
  function jd(t) {
    return (typeof t == "string" ? t : "" + t).replace(Cv, `
`).replace(Ov, "");
  }
  function Ed(t, e) {
    return e = jd(e), jd(t) === e;
  }
  function _t(t, e, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || da(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && da(t, "" + a);
        break;
      case "className":
        ii(t, "class", a);
        break;
      case "tabIndex":
        ii(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ii(t, l, a);
        break;
      case "style":
        jf(t, a, i);
        break;
      case "data":
        if (e !== "object") {
          ii(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = ci("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (e !== "input" && _t(t, e, "name", n.name, n, null), _t(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), _t(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), _t(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (_t(t, e, "encType", n.encType, n, null), _t(t, e, "method", n.method, n, null), _t(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = ci("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Ke);
        break;
      case "onScroll":
        a != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ft("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
          t.removeAttribute("xlink:href");
          break;
        }
        l = ci("" + a), t.setAttributeNS(
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        ft("beforetoggle", t), ft("toggle", t), ni(t, "popover", a);
        break;
      case "xlinkActuate":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        ni(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = nm.get(l) || l, ni(t, l, a));
    }
  }
  function js(t, e, l, a, n, i) {
    switch (l) {
      case "style":
        jf(t, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? da(t, a) : (typeof a == "number" || typeof a == "bigint") && da(t, "" + a);
        break;
      case "onScroll":
        a != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ft("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ke);
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
        if (!hf.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), i = t[re] || null, i = i != null ? i[l] : null, typeof i == "function" && t.removeEventListener(e, i, n), typeof a == "function")) {
              typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : ni(t, l, a);
          }
    }
  }
  function ne(t, e, l) {
    switch (e) {
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
        ft("error", t), ft("load", t);
        var a = !1, n = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var c = l[i];
            if (c != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  _t(t, e, i, c, l, null);
              }
          }
        n && _t(t, e, "srcSet", l.srcSet, l, null), a && _t(t, e, "src", l.src, l, null);
        return;
      case "input":
        ft("invalid", t);
        var o = i = c = n = null, m = null, E = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var O = l[a];
            if (O != null)
              switch (a) {
                case "name":
                  n = O;
                  break;
                case "type":
                  c = O;
                  break;
                case "checked":
                  m = O;
                  break;
                case "defaultChecked":
                  E = O;
                  break;
                case "value":
                  i = O;
                  break;
                case "defaultValue":
                  o = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(f(137, e));
                  break;
                default:
                  _t(t, e, a, O, l, null);
              }
          }
        pf(
          t,
          i,
          o,
          m,
          E,
          c,
          n,
          !1
        );
        return;
      case "select":
        ft("invalid", t), a = c = i = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (o = l[n], o != null))
            switch (n) {
              case "value":
                i = o;
                break;
              case "defaultValue":
                c = o;
                break;
              case "multiple":
                a = o;
              default:
                _t(t, e, n, o, l, null);
            }
        e = i, l = c, t.multiple = !!a, e != null ? oa(t, !!a, e, !1) : l != null && oa(t, !!a, l, !0);
        return;
      case "textarea":
        ft("invalid", t), i = n = a = null;
        for (c in l)
          if (l.hasOwnProperty(c) && (o = l[c], o != null))
            switch (c) {
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
                if (o != null) throw Error(f(91));
                break;
              default:
                _t(t, e, c, o, l, null);
            }
        xf(t, a, n, i);
        return;
      case "option":
        for (m in l)
          if (l.hasOwnProperty(m) && (a = l[m], a != null))
            switch (m) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                _t(t, e, m, a, l, null);
            }
        return;
      case "dialog":
        ft("beforetoggle", t), ft("toggle", t), ft("cancel", t), ft("close", t);
        break;
      case "iframe":
      case "object":
        ft("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Un.length; a++)
          ft(Un[a], t);
        break;
      case "image":
        ft("error", t), ft("load", t);
        break;
      case "details":
        ft("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ft("error", t), ft("load", t);
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
        for (E in l)
          if (l.hasOwnProperty(E) && (a = l[E], a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                _t(t, e, E, a, l, null);
            }
        return;
      default:
        if (qu(e)) {
          for (O in l)
            l.hasOwnProperty(O) && (a = l[O], a !== void 0 && js(
              t,
              e,
              O,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (o in l)
      l.hasOwnProperty(o) && (a = l[o], a != null && _t(t, e, o, a, l, null));
  }
  function Mv(t, e, l, a) {
    switch (e) {
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
        var n = null, i = null, c = null, o = null, m = null, E = null, O = null;
        for (T in l) {
          var R = l[T];
          if (l.hasOwnProperty(T) && R != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = R;
              default:
                a.hasOwnProperty(T) || _t(t, e, T, null, a, R);
            }
        }
        for (var _ in a) {
          var T = a[_];
          if (R = l[_], a.hasOwnProperty(_) && (T != null || R != null))
            switch (_) {
              case "type":
                i = T;
                break;
              case "name":
                n = T;
                break;
              case "checked":
                E = T;
                break;
              case "defaultChecked":
                O = T;
                break;
              case "value":
                c = T;
                break;
              case "defaultValue":
                o = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(f(137, e));
                break;
              default:
                T !== R && _t(
                  t,
                  e,
                  _,
                  T,
                  a,
                  R
                );
            }
        }
        Hu(
          t,
          c,
          o,
          m,
          E,
          O,
          i,
          n
        );
        return;
      case "select":
        T = c = o = _ = null;
        for (i in l)
          if (m = l[i], l.hasOwnProperty(i) && m != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                T = m;
              default:
                a.hasOwnProperty(i) || _t(
                  t,
                  e,
                  i,
                  null,
                  a,
                  m
                );
            }
        for (n in a)
          if (i = a[n], m = l[n], a.hasOwnProperty(n) && (i != null || m != null))
            switch (n) {
              case "value":
                _ = i;
                break;
              case "defaultValue":
                o = i;
                break;
              case "multiple":
                c = i;
              default:
                i !== m && _t(
                  t,
                  e,
                  n,
                  i,
                  a,
                  m
                );
            }
        e = o, l = c, a = T, _ != null ? oa(t, !!l, _, !1) : !!a != !!l && (e != null ? oa(t, !!l, e, !0) : oa(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        T = _ = null;
        for (o in l)
          if (n = l[o], l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o))
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                _t(t, e, o, null, a, n);
            }
        for (c in a)
          if (n = a[c], i = l[c], a.hasOwnProperty(c) && (n != null || i != null))
            switch (c) {
              case "value":
                _ = n;
                break;
              case "defaultValue":
                T = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== i && _t(t, e, c, n, a, i);
            }
        bf(t, _, T);
        return;
      case "option":
        for (var Z in l)
          if (_ = l[Z], l.hasOwnProperty(Z) && _ != null && !a.hasOwnProperty(Z))
            switch (Z) {
              case "selected":
                t.selected = !1;
                break;
              default:
                _t(
                  t,
                  e,
                  Z,
                  null,
                  a,
                  _
                );
            }
        for (m in a)
          if (_ = a[m], T = l[m], a.hasOwnProperty(m) && _ !== T && (_ != null || T != null))
            switch (m) {
              case "selected":
                t.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                _t(
                  t,
                  e,
                  m,
                  _,
                  a,
                  T
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
        for (var I in l)
          _ = l[I], l.hasOwnProperty(I) && _ != null && !a.hasOwnProperty(I) && _t(t, e, I, null, a, _);
        for (E in a)
          if (_ = a[E], T = l[E], a.hasOwnProperty(E) && _ !== T && (_ != null || T != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(f(137, e));
                break;
              default:
                _t(
                  t,
                  e,
                  E,
                  _,
                  a,
                  T
                );
            }
        return;
      default:
        if (qu(e)) {
          for (var At in l)
            _ = l[At], l.hasOwnProperty(At) && _ !== void 0 && !a.hasOwnProperty(At) && js(
              t,
              e,
              At,
              void 0,
              a,
              _
            );
          for (O in a)
            _ = a[O], T = l[O], !a.hasOwnProperty(O) || _ === T || _ === void 0 && T === void 0 || js(
              t,
              e,
              O,
              _,
              a,
              T
            );
          return;
        }
    }
    for (var x in l)
      _ = l[x], l.hasOwnProperty(x) && _ != null && !a.hasOwnProperty(x) && _t(t, e, x, null, a, _);
    for (R in a)
      _ = a[R], T = l[R], !a.hasOwnProperty(R) || _ === T || _ == null && T == null || _t(t, e, R, _, a, T);
  }
  function _d(t) {
    switch (t) {
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
  function Uv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], i = n.transferSize, c = n.initiatorType, o = n.duration;
        if (i && o && _d(c)) {
          for (c = 0, o = n.responseEnd, a += 1; a < l.length; a++) {
            var m = l[a], E = m.startTime;
            if (E > o) break;
            var O = m.transferSize, R = m.initiatorType;
            O && _d(R) && (m = m.responseEnd, c += O * (m < o ? 1 : (o - E) / (m - E)));
          }
          if (--a, e += 8 * (i + c) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Es = null, _s = null;
  function lu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ad(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Nd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function As(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Ns = null;
  function Dv() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Ns ? !1 : (Ns = t, !0) : (Ns = null, !1);
  }
  var Td = typeof setTimeout == "function" ? setTimeout : void 0, Hv = typeof clearTimeout == "function" ? clearTimeout : void 0, zd = typeof Promise == "function" ? Promise : void 0, Rv = typeof queueMicrotask == "function" ? queueMicrotask : typeof zd < "u" ? function(t) {
    return zd.resolve(null).then(t).catch(qv);
  } : Td;
  function qv(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ml(t) {
    return t === "head";
  }
  function Cd(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), Za(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          Hn(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, Hn(l);
          for (var i = l.firstChild; i; ) {
            var c = i.nextSibling, o = i.nodeName;
            i[Fa] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = c;
          }
        } else
          l === "body" && Hn(t.ownerDocument.body);
      l = n;
    } while (l);
    Za(e);
  }
  function Od(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = a;
    } while (l);
  }
  function Ts(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ts(l), Uu(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Bv(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Fa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = Be(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Yv(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Be(t.nextSibling), t === null)) return null;
    return t;
  }
  function Md(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Be(t.nextSibling), t === null)) return null;
    return t;
  }
  function zs(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Cs(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Gv(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Be(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Os = null;
  function Ud(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Be(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Dd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Hd(t, e, l) {
    switch (e = lu(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function Hn(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Uu(t);
  }
  var Ye = /* @__PURE__ */ new Map(), Rd = /* @__PURE__ */ new Set();
  function au(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var fl = A.d;
  A.d = {
    f: Lv,
    r: Qv,
    D: Xv,
    C: Zv,
    L: Vv,
    m: wv,
    X: Kv,
    S: $v,
    M: Jv
  };
  function Lv() {
    var t = fl.f(), e = Ji();
    return t || e;
  }
  function Qv(t) {
    var e = sa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Fr(e) : fl.r(t);
  }
  var La = typeof document > "u" ? null : document;
  function qd(t, e, l) {
    var a = La;
    if (a && typeof e == "string" && e) {
      var n = Oe(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Rd.has(n) || (Rd.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), ne(e, "link", t), kt(e), a.head.appendChild(e)));
    }
  }
  function Xv(t) {
    fl.D(t), qd("dns-prefetch", t, null);
  }
  function Zv(t, e) {
    fl.C(t, e), qd("preconnect", t, e);
  }
  function Vv(t, e, l) {
    fl.L(t, e, l);
    var a = La;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + Oe(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Oe(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Oe(
        l.imageSizes
      ) + '"]')) : n += '[href="' + Oe(t) + '"]';
      var i = n;
      switch (e) {
        case "style":
          i = Qa(t);
          break;
        case "script":
          i = Xa(t);
      }
      Ye.has(i) || (t = H(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Ye.set(i, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Rn(i)) || e === "script" && a.querySelector(qn(i)) || (e = a.createElement("link"), ne(e, "link", t), kt(e), a.head.appendChild(e)));
    }
  }
  function wv(t, e) {
    fl.m(t, e);
    var l = La;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + Oe(a) + '"][href="' + Oe(t) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Xa(t);
      }
      if (!Ye.has(i) && (t = H({ rel: "modulepreload", href: t }, e), Ye.set(i, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(qn(i)))
              return;
        }
        a = l.createElement("link"), ne(a, "link", t), kt(a), l.head.appendChild(a);
      }
    }
  }
  function $v(t, e, l) {
    fl.S(t, e, l);
    var a = La;
    if (a && t) {
      var n = fa(a).hoistableStyles, i = Qa(t);
      e = e || "default";
      var c = n.get(i);
      if (!c) {
        var o = { loading: 0, preload: null };
        if (c = a.querySelector(
          Rn(i)
        ))
          o.loading = 5;
        else {
          t = H(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Ye.get(i)) && Ms(t, l);
          var m = c = a.createElement("link");
          kt(m), ne(m, "link", t), m._p = new Promise(function(E, O) {
            m.onload = E, m.onerror = O;
          }), m.addEventListener("load", function() {
            o.loading |= 1;
          }), m.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, nu(c, e, a);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: o
        }, n.set(i, c);
      }
    }
  }
  function Kv(t, e) {
    fl.X(t, e);
    var l = La;
    if (l && t) {
      var a = fa(l).hoistableScripts, n = Xa(t), i = a.get(n);
      i || (i = l.querySelector(qn(n)), i || (t = H({ src: t, async: !0 }, e), (e = Ye.get(n)) && Us(t, e), i = l.createElement("script"), kt(i), ne(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Jv(t, e) {
    fl.M(t, e);
    var l = La;
    if (l && t) {
      var a = fa(l).hoistableScripts, n = Xa(t), i = a.get(n);
      i || (i = l.querySelector(qn(n)), i || (t = H({ src: t, async: !0, type: "module" }, e), (e = Ye.get(n)) && Us(t, e), i = l.createElement("script"), kt(i), ne(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Bd(t, e, l, a) {
    var n = (n = F.current) ? au(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Qa(l.href), l = fa(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Qa(l.href);
          var i = fa(
            n
          ).hoistableStyles, c = i.get(t);
          if (c || (n = n.ownerDocument || n, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, c), (i = n.querySelector(
            Rn(t)
          )) && !i._p && (c.instance = i, c.state.loading = 5), Ye.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ye.set(t, l), i || kv(
            n,
            t,
            l,
            c.state
          ))), e && a === null)
            throw Error(f(528, ""));
          return c;
        }
        if (e && a !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Xa(l), l = fa(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function Qa(t) {
    return 'href="' + Oe(t) + '"';
  }
  function Rn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Yd(t) {
    return H({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function kv(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), ne(e, "link", l), kt(e), t.head.appendChild(e));
  }
  function Xa(t) {
    return '[src="' + Oe(t) + '"]';
  }
  function qn(t) {
    return "script[async]" + t;
  }
  function Gd(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Oe(l.href) + '"]'
          );
          if (a)
            return e.instance = a, kt(a), a;
          var n = H({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), kt(a), ne(a, "style", n), nu(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Qa(l.href);
          var i = t.querySelector(
            Rn(n)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, kt(i), i;
          a = Yd(l), (n = Ye.get(n)) && Ms(a, n), i = (t.ownerDocument || t).createElement("link"), kt(i);
          var c = i;
          return c._p = new Promise(function(o, m) {
            c.onload = o, c.onerror = m;
          }), ne(i, "link", a), e.state.loading |= 4, nu(i, l.precedence, t), e.instance = i;
        case "script":
          return i = Xa(l.src), (n = t.querySelector(
            qn(i)
          )) ? (e.instance = n, kt(n), n) : (a = l, (n = Ye.get(i)) && (a = H({}, l), Us(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), kt(n), ne(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, nu(a, l.precedence, t));
    return e.instance;
  }
  function nu(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, c = 0; c < a.length; c++) {
      var o = a[c];
      if (o.dataset.precedence === e) i = o;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Ms(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Us(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var iu = null;
  function Ld(t, e, l) {
    if (iu === null) {
      var a = /* @__PURE__ */ new Map(), n = iu = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = iu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var i = l[n];
      if (!(i[Fa] || i[te] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = i.getAttribute(e) || "";
        c = t + c;
        var o = a.get(c);
        o ? o.push(i) : a.set(c, [i]);
      }
    }
    return a;
  }
  function Qd(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Wv(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Xd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Fv(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Qa(a.href), i = e.querySelector(
          Rn(n)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = uu.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, kt(i);
          return;
        }
        i = e.ownerDocument || e, a = Yd(a), (n = Ye.get(n)) && Ms(a, n), i = i.createElement("link"), kt(i);
        var c = i;
        c._p = new Promise(function(o, m) {
          c.onload = o, c.onerror = m;
        }), ne(i, "link", a), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = uu.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Ds = 0;
  function Iv(t, e) {
    return t.stylesheets && t.count === 0 && su(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && su(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Ds === 0 && (Ds = 62500 * Uv());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && su(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > Ds ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function uu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) su(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var cu = null;
  function su(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, cu = /* @__PURE__ */ new Map(), e.forEach(Pv, t), cu = null, uu.call(t));
  }
  function Pv(t, e) {
    if (!(e.state.loading & 4)) {
      var l = cu.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), cu.set(t, l);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var c = n[i];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c);
        }
        a && l.set(null, a);
      }
      n = e.instance, c = n.getAttribute("data-precedence"), i = l.get(c) || a, i === a && l.set(null, n), l.set(c, n), this.count++, a = uu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Bn = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0
  };
  function ty(t, e, l, a, n, i, c, o, m) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = zu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zu(0), this.hiddenUpdates = zu(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Zd(t, e, l, a, n, i, c, o, m, E, O, R) {
    return t = new ty(
      t,
      e,
      l,
      c,
      m,
      E,
      O,
      R,
      o
    ), e = 1, i === !0 && (e |= 24), i = Ee(3, null, null, e), t.current = i, i.stateNode = t, e = dc(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, yc(i), t;
  }
  function Vd(t) {
    return t ? (t = ba, t) : ba;
  }
  function wd(t, e, l, a, n, i) {
    n = Vd(n), a.context === null ? a.context = n : a.pendingContext = n, a = xl(e), a.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = Sl(t, a, e), l !== null && (ye(l, t, e), vn(l, t, e));
  }
  function $d(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Hs(t, e) {
    $d(t, e), (t = t.alternate) && $d(t, e);
  }
  function Kd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Vl(t, 67108864);
      e !== null && ye(e, t, 67108864), Hs(t, 67108864);
    }
  }
  function Jd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ze();
      e = Cu(e);
      var l = Vl(t, e);
      l !== null && ye(l, t, e), Hs(t, e);
    }
  }
  var fu = !0;
  function ey(t, e, l, a) {
    var n = C.T;
    C.T = null;
    var i = A.p;
    try {
      A.p = 2, Rs(t, e, l, a);
    } finally {
      A.p = i, C.T = n;
    }
  }
  function ly(t, e, l, a) {
    var n = C.T;
    C.T = null;
    var i = A.p;
    try {
      A.p = 8, Rs(t, e, l, a);
    } finally {
      A.p = i, C.T = n;
    }
  }
  function Rs(t, e, l, a) {
    if (fu) {
      var n = qs(a);
      if (n === null)
        Ss(
          t,
          e,
          a,
          ru,
          l
        ), Wd(t, a);
      else if (ny(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (Wd(t, a), e & 4 && -1 < ay.indexOf(t)) {
        for (; n !== null; ) {
          var i = sa(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var c = Gl(i.pendingLanes);
                  if (c !== 0) {
                    var o = i;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var m = 1 << 31 - Se(c);
                      o.entanglements[1] |= m, c &= ~m;
                    }
                    we(i), (xt & 6) === 0 && ($i = be() + 500, Mn(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = Vl(i, 2), o !== null && ye(o, i, 2), Ji(), Hs(i, 2);
            }
          if (i = qs(a), i === null && Ss(
            t,
            e,
            a,
            ru,
            l
          ), i === n) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else
        Ss(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function qs(t) {
    return t = Yu(t), Bs(t);
  }
  var ru = null;
  function Bs(t) {
    if (ru = null, t = ca(t), t !== null) {
      var e = N(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = S(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = q(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ru = t, null;
  }
  function kd(t) {
    switch (t) {
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
        switch (Xh()) {
          case ef:
            return 2;
          case lf:
            return 8;
          case Pn:
          case Zh:
            return 32;
          case af:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ys = !1, Ul = null, Dl = null, Hl = null, Yn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map(), Rl = [], ay = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Wd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ul = null;
        break;
      case "dragenter":
      case "dragleave":
        Dl = null;
        break;
      case "mouseover":
      case "mouseout":
        Hl = null;
        break;
      case "pointerover":
      case "pointerout":
        Yn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gn.delete(e.pointerId);
    }
  }
  function Ln(t, e, l, a, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, e !== null && (e = sa(e), e !== null && Kd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function ny(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return Ul = Ln(
          Ul,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Dl = Ln(
          Dl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Hl = Ln(
          Hl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return Yn.set(
          i,
          Ln(
            Yn.get(i) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, Gn.set(
          i,
          Ln(
            Gn.get(i) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Fd(t) {
    var e = ca(t.target);
    if (e !== null) {
      var l = N(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = S(l), e !== null) {
            t.blockedOn = e, rf(t.priority, function() {
              Jd(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = q(l), e !== null) {
            t.blockedOn = e, rf(t.priority, function() {
              Jd(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ou(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = qs(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Bu = a, l.target.dispatchEvent(a), Bu = null;
      } else
        return e = sa(l), e !== null && Kd(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Id(t, e, l) {
    ou(t) && l.delete(e);
  }
  function iy() {
    Ys = !1, Ul !== null && ou(Ul) && (Ul = null), Dl !== null && ou(Dl) && (Dl = null), Hl !== null && ou(Hl) && (Hl = null), Yn.forEach(Id), Gn.forEach(Id);
  }
  function du(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Ys || (Ys = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      iy
    )));
  }
  var hu = null;
  function Pd(t) {
    hu !== t && (hu = t, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        hu === t && (hu = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (Bs(a || l) === null)
              continue;
            break;
          }
          var i = sa(l);
          i !== null && (t.splice(e, 3), e -= 3, qc(
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
  function Za(t) {
    function e(m) {
      return du(m, t);
    }
    Ul !== null && du(Ul, t), Dl !== null && du(Dl, t), Hl !== null && du(Hl, t), Yn.forEach(e), Gn.forEach(e);
    for (var l = 0; l < Rl.length; l++) {
      var a = Rl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Rl.length && (l = Rl[0], l.blockedOn === null); )
      Fd(l), l.blockedOn === null && Rl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], i = l[a + 1], c = n[re] || null;
        if (typeof i == "function")
          c || Pd(l);
        else if (c) {
          var o = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, c = i[re] || null)
              o = c.formAction;
            else if (Bs(n) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? l[a + 1] = o : (l.splice(a, 3), a -= 3), Pd(l);
        }
      }
  }
  function th() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(c) {
            return n = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
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
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function Gs(t) {
    this._internalRoot = t;
  }
  mu.prototype.render = Gs.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var l = e.current, a = ze();
    wd(l, a, t, e, null, null);
  }, mu.prototype.unmount = Gs.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      wd(t.current, 2, null, t, null, null), Ji(), e[ua] = null;
    }
  };
  function mu(t) {
    this._internalRoot = t;
  }
  mu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = ff();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Rl.length && e !== 0 && e < Rl[l].priority; l++) ;
      Rl.splice(l, 0, t), l === 0 && Fd(t);
    }
  };
  var eh = s.version;
  if (eh !== "19.2.0")
    throw Error(
      f(
        527,
        eh,
        "19.2.0"
      )
    );
  A.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = p(e), t = t !== null ? Y(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var uy = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vu.isDisabled && vu.supportsFiber)
      try {
        Ja = vu.inject(
          uy
        ), xe = vu;
      } catch {
      }
  }
  return Zn.createRoot = function(t, e) {
    if (!y(t)) throw Error(f(299));
    var l = !1, a = "", n = co, i = so, c = fo;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = Zd(
      t,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      i,
      c,
      th
    ), t[ua] = e.current, xs(t), new Gs(e);
  }, Zn.hydrateRoot = function(t, e, l) {
    if (!y(t)) throw Error(f(299));
    var a = !1, n = "", i = co, c = so, o = fo, m = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = Zd(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      m,
      i,
      c,
      o,
      th
    ), e.context = Vd(null), l = e.current, a = ze(), a = Cu(a), n = xl(a), n.callback = null, Sl(l, n, a), l = a, e.current.lanes = l, Wa(e, l), we(e), t[ua] = e.current, xs(t), new mu(e);
  }, Zn.version = "19.2.0", Zn;
}
var mh;
function _y() {
  if (mh) return Xs.exports;
  mh = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (s) {
        console.error(s);
      }
  }
  return r(), Xs.exports = Ey(), Xs.exports;
}
var Ay = _y();
function Ny({ id: r, host: s, repo: d, repoId: f, category: y, categoryId: N, mapping: S, term: q, strict: z, reactionsEnabled: p, emitMetadata: Y, inputPosition: H, theme: G, lang: P, loading: Q }) {
  const [et, vt] = X.useState(!1);
  return X.useEffect(() => {
    et || Promise.resolve().then(() => mg).then(() => vt(!0));
  }, []), et ? u.jsx("giscus-widget", { id: r, host: s, repo: d, repoid: f, category: y, categoryid: N, mapping: S, term: q, strict: z, reactionsenabled: p, emitmetadata: Y, inputposition: H, theme: G, lang: P, loading: Q }) : null;
}
const vh = ["layers", "calendar", "game", "sun", "spark"];
function yh({ config: r, term: s, theme: d }) {
  const f = X.useRef(null), [y, N] = X.useState("loading"), [S, q] = X.useState(r.discussionUrls[s] || ""), [z, p] = X.useState(0);
  return X.useEffect(() => {
    if (N("loading"), q(r.discussionUrls[s] || ""), !r.enabled) return;
    const Y = window.setTimeout(() => N((G) => G === "loading" ? "slow" : G), 1e4), H = (G) => {
      const Q = f.current?.querySelector("giscus-widget")?.shadowRoot?.querySelector("iframe");
      if (G.origin !== "https://giscus.app" || !Q || G.source !== Q.contentWindow || !G.data?.giscus) return;
      const et = G.data.giscus;
      (et.resizeHeight || et.discussion) && N("ready"), et.error && N(String(et.error).includes("Discussion not found") ? "ready" : "error");
      const vt = pu(et.discussion?.url || "");
      vt.startsWith(`https://github.com/${r.repo}/discussions/`) && q(vt);
    };
    return window.addEventListener("message", H), () => {
      clearTimeout(Y), window.removeEventListener("message", H);
    };
  }, [s, r, z]), /* @__PURE__ */ u.jsxs("section", { className: "comments panel", "aria-label": "댓글", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "LET’S TALK" }),
        /* @__PURE__ */ u.jsx("h2", { children: s === "guestbook" ? "공개 질문" : "사용해 본 이야기를 들려주세요" })
      ] }),
      /* @__PURE__ */ u.jsx(Ct, { name: "chat" })
    ] }),
    /* @__PURE__ */ u.jsx("p", { className: "muted", children: "댓글과 반응을 남기려면 GitHub 로그인이 필요합니다." }),
    r.enabled ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("div", { ref: f, className: "giscus-host", children: /* @__PURE__ */ u.jsx(Ny, { id: "workshop-comments", repo: r.repo, repoId: r.repoId, category: r.category, categoryId: r.categoryId, mapping: "specific", term: s, strict: "1", reactionsEnabled: "1", emitMetadata: "1", inputPosition: "top", theme: d === "dark" ? "dark" : "light", lang: "ko", loading: "eager" }, `${s}:${z}`) }),
      (y === "slow" || y === "error") && /* @__PURE__ */ u.jsxs("div", { className: "comment-error", role: "status", children: [
        "댓글을 불러오지 못했거나 연결이 지연되고 있습니다. 앱 소개는 계속 이용하실 수 있습니다. ",
        /* @__PURE__ */ u.jsx("button", { onClick: () => p((Y) => Y + 1), children: "다시 시도" })
      ] })
    ] }) : /* @__PURE__ */ u.jsxs("div", { className: "comment-placeholder", children: [
      /* @__PURE__ */ u.jsx(Ct, { name: "chat", size: 30 }),
      /* @__PURE__ */ u.jsx("b", { children: "댓글 공간을 준비하고 있어요." }),
      /* @__PURE__ */ u.jsx("p", { children: "지금은 앱 소개를 둘러보실 수 있습니다." })
    ] }),
    S && /* @__PURE__ */ u.jsx(wn, { url: S, children: "GitHub에서 댓글 보기" })
  ] });
}
function Ty({ app: r }) {
  const s = r.screenshots.length ? r.screenshots : [r.thumbnail], [d, f] = X.useState(0), [y, N] = X.useState(!1), S = X.useRef(null);
  return X.useEffect(() => {
    y && !S.current?.open ? S.current?.showModal() : !y && S.current?.open && S.current.close();
  }, [y]), /* @__PURE__ */ u.jsxs("section", { className: "gallery", children: [
    /* @__PURE__ */ u.jsxs("button", { className: "gallery-main", onClick: () => N(!0), "aria-label": "미리보기 이미지 확대", children: [
      /* @__PURE__ */ u.jsx(Yl, { src: s[d], alt: `${r.title} 미리보기 ${d + 1}` }),
      /* @__PURE__ */ u.jsx("span", { children: "크게 보기 ↗" })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "gallery-thumbs", children: s.map((q, z) => /* @__PURE__ */ u.jsx("button", { onClick: () => f(z), "aria-label": `미리보기 ${z + 1} 선택`, "aria-pressed": d === z, children: /* @__PURE__ */ u.jsx(Yl, { src: q, alt: `${z + 1}번 이미지` }) }, z)) }),
    /* @__PURE__ */ u.jsx("dialog", { ref: S, onClose: () => N(!1), onClick: (q) => {
      q.target === q.currentTarget && N(!1);
    }, "aria-label": `${r.title} 확대 미리보기`, children: /* @__PURE__ */ u.jsxs("div", { className: "lightbox", children: [
      /* @__PURE__ */ u.jsx("button", { autoFocus: !0, className: "icon-button close", "aria-label": "확대 이미지 닫기", onClick: () => N(!1), children: /* @__PURE__ */ u.jsx(Ct, { name: "close" }) }),
      /* @__PURE__ */ u.jsx(Yl, { src: s[d], alt: `${r.title} 확대 미리보기` }),
      /* @__PURE__ */ u.jsxs("div", { className: "lightbox-controls", children: [
        /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => f((d + s.length - 1) % s.length), children: "이전" }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          d + 1,
          " / ",
          s.length
        ] }),
        /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => f((d + 1) % s.length), children: "다음" })
      ] })
    ] }) })
  ] });
}
function zy({ payload: r }) {
  const s = Eu(), [d, f] = X.useState(null), [y, N] = X.useState(!1), S = s.authenticated && d ? d : r, { site: q, apps: z, giscus: p } = S;
  X.useEffect(() => {
    s.authenticated || f(null);
  }, [s.authenticated]);
  const [Y, H] = X.useState(nh), [G, P] = X.useState("전체"), [Q, et] = X.useState(""), [vt, pt] = X.useState(""), [rt, w] = X.useState("featured"), [ct, $t] = X.useState(() => {
    try {
      return localStorage.getItem("workshop-theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  }), [bt, tt] = X.useState(""), Dt = X.useRef(null);
  X.useEffect(() => {
    const D = () => H(nh());
    return window.addEventListener("popstate", D), () => window.removeEventListener("popstate", D);
  }, []), X.useEffect(() => {
    try {
      localStorage.setItem("workshop-theme", ct);
    } catch {
    }
  }, [ct]), X.useEffect(() => {
    const D = z.find((v) => v.id === Y.app);
    document.title = `${D?.title || q.title} · ${q.brand}`, tt("");
  }, [Y, z, q]);
  const Jt = (D) => {
    history.pushState({}, "", oy(D)), H(D), Dt.current?.scrollIntoView({ block: "start" }), requestAnimationFrame(() => Dt.current?.focus({ preventScroll: !0 }));
  }, Lt = (D) => Jt({ view: D, app: "" }), ie = (D) => Jt({ view: "apps", app: D }), Bt = (D) => {
    P(D), pt(""), et(""), Lt("apps");
  }, lt = z.find((D) => D.id === Y.app), It = X.useMemo(() => yu(z, Q, G, vt, rt), [z, Q, G, vt, rt]), ue = [...new Set(z.flatMap((D) => D.tags))];
  yu(z, "", "전체", "", "featured").filter((D) => D.featured).slice(0, 3), yu(z, "", "전체", "", "recent").slice(0, 3);
  const C = [["home", "home", "공방 홈"], ["apps", "grid", "앱 모음"], ["about", "user", "제작자 소개"], ["guestbook", "chat", "질문게시판"]], A = Y.app ? "apps" : Y.view;
  q.categories.map((D, v) => /* @__PURE__ */ u.jsxs("button", { onClick: () => Bt(D), children: [
    /* @__PURE__ */ u.jsx("span", { className: `category-circle tone-${v}`, children: /* @__PURE__ */ u.jsx(Ct, { name: vh[v % 5], size: 25 }) }),
    /* @__PURE__ */ u.jsx("span", { children: D })
  ] }, D));
  const W = (D) => D.length ? /* @__PURE__ */ u.jsx("div", { className: "app-grid", children: D.map((v) => /* @__PURE__ */ u.jsx(Mh, { app: v, onOpen: ie }, v.id)) }) : /* @__PURE__ */ u.jsxs("div", { className: "empty", children: [
    /* @__PURE__ */ u.jsx(Ct, { name: "search", size: 30 }),
    /* @__PURE__ */ u.jsx("h3", { children: "아직 등록된 앱이 없어요." })
  ] }), ht = async () => {
    try {
      await navigator.clipboard.writeText(location.href), tt("링크를 복사했습니다.");
    } catch {
      tt("아래 주소를 복사해 주세요.");
    }
  };
  return /* @__PURE__ */ u.jsxs("div", { className: `workshop ${ct}`, children: [
    /* @__PURE__ */ u.jsx("a", { className: "skip-link", href: "#main-content", onClick: (D) => {
      D.preventDefault(), Dt.current?.scrollIntoView({ block: "start" }), Dt.current?.focus({ preventScroll: !0 });
    }, children: "본문으로 이동" }),
    /* @__PURE__ */ u.jsxs("aside", { className: "side-rail", children: [
      /* @__PURE__ */ u.jsxs("button", { className: "brand", onClick: () => Lt("home"), children: [
        /* @__PURE__ */ u.jsxs("span", { className: "brand-mark", children: [
          q.brandMark || "a",
          /* @__PURE__ */ u.jsx("span", { children: "✳" })
        ] }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          q.brand,
          /* @__PURE__ */ u.jsx("small", { children: "TEACHER’S WORKSHOP" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "rail-label", children: "EXPLORE THE ATELIER" }),
      /* @__PURE__ */ u.jsx("nav", { "aria-label": "주 메뉴", children: C.map(([D, v, M]) => /* @__PURE__ */ u.jsxs("button", { className: A === D ? "active" : "", "aria-current": A === D ? "page" : void 0, onClick: () => Lt(D), children: [
        /* @__PURE__ */ u.jsx(Ct, { name: v }),
        M,
        A === D && /* @__PURE__ */ u.jsx("i", {})
      ] }, D)) }),
      q.sidebar?.visible !== !1 && /* @__PURE__ */ u.jsxs("div", { className: "rail-note", children: [
        /* @__PURE__ */ u.jsx(Ct, { name: "spark", size: 26 }),
        /* @__PURE__ */ u.jsx("b", { children: q.sidebar?.title }),
        /* @__PURE__ */ u.jsx("p", { style: { whiteSpace: "pre-line" }, children: q.sidebar?.body })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "rail-profile", children: [
        /* @__PURE__ */ u.jsx("span", { className: "avatar", children: "T" }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("b", { children: q.profile.name }),
          /* @__PURE__ */ u.jsx("small", { children: "만드는 사람" })
        ] }),
        /* @__PURE__ */ u.jsx(Ct, { name: "check", size: 17 })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "main-canvas", children: [
      /* @__PURE__ */ u.jsxs("header", { className: "topbar", children: [
        /* @__PURE__ */ u.jsxs("span", { className: "mobile-brand", children: [
          "✳ ",
          q.brand
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "breadcrumb", children: [
          "THE ATELIER ",
          /* @__PURE__ */ u.jsx("span", { children: "/" }),
          " ",
          /* @__PURE__ */ u.jsx("b", { children: C.find((D) => D[0] === A)?.[2] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "top-actions", children: [
          /* @__PURE__ */ u.jsxs("span", { className: "top-note", children: [
            /* @__PURE__ */ u.jsx("i", {}),
            q.topNote
          ] }),
          /* @__PURE__ */ u.jsx("button", { className: "btn admin-entry", onClick: () => N(!0), children: s.authenticated ? "관리 도구" : "관리자 모드" }),
          /* @__PURE__ */ u.jsx("button", { className: "icon-button", "aria-label": ct === "light" ? "어두운 테마" : "밝은 테마", onClick: () => $t((D) => D === "light" ? "dark" : "light"), children: /* @__PURE__ */ u.jsx(Ct, { name: ct === "light" ? "moon" : "sun" }) })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx(py, { open: y, onClose: () => N(!1), onPreview: f, payload: r }),
      /* @__PURE__ */ u.jsxs("main", { id: "main-content", className: "content", ref: Dt, tabIndex: -1, children: [
        d && s.authenticated && /* @__PURE__ */ u.jsxs("div", { className: "preview-banner", children: [
          /* @__PURE__ */ u.jsx("b", { children: "관리자 전용 미리보기 · 아직 게시되지 않았습니다." }),
          /* @__PURE__ */ u.jsxs("div", { className: "button-row", children: [
            /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => N(!0), children: "편집으로 돌아가기" }),
            /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => f(null), children: "미리보기 종료" })
          ] })
        ] }),
        S.warnings.length > 0 && /* @__PURE__ */ u.jsxs("details", { className: "data-warning", children: [
          /* @__PURE__ */ u.jsxs("summary", { children: [
            "일부 소개 정보를 표시하지 못했습니다 (",
            S.warnings.length,
            ")"
          ] }),
          /* @__PURE__ */ u.jsx("ul", { children: S.warnings.map((D, v) => /* @__PURE__ */ u.jsx("li", { children: D }, v)) })
        ] }),
        Y.app && !lt ? /* @__PURE__ */ u.jsxs("section", { className: "empty", children: [
          /* @__PURE__ */ u.jsx("h1", { children: "앱을 찾을 수 없어요." }),
          /* @__PURE__ */ u.jsx("p", { children: "주소가 변경되었거나 소개가 내려갔을 수 있습니다." }),
          /* @__PURE__ */ u.jsx("button", { className: "btn primary", onClick: () => Lt("apps"), children: "앱 모음으로" })
        ] }) : lt ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsxs("button", { className: "back-link", onClick: () => Lt("apps"), children: [
            /* @__PURE__ */ u.jsx(Ct, { name: "back", size: 17 }),
            " 앱 모음으로"
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "detail-heading", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsxs("span", { className: "eyebrow", children: [
                lt.category,
                " / ",
                lt.isExample ? "EXAMPLE" : "APP STORY"
              ] }),
              /* @__PURE__ */ u.jsx("h1", { children: lt.title }),
              /* @__PURE__ */ u.jsx("p", { children: lt.summary })
            ] }),
            /* @__PURE__ */ u.jsxs("button", { className: "btn", onClick: ht, children: [
              /* @__PURE__ */ u.jsx(Ct, { name: "share", size: 17 }),
              " 공유"
            ] })
          ] }),
          bt && /* @__PURE__ */ u.jsxs("div", { className: "share-result", role: "status", children: [
            bt,
            /* @__PURE__ */ u.jsx("input", { "aria-label": "공유 주소", value: location.href, readOnly: !0, onFocus: (D) => D.target.select() })
          ] }),
          lt.isExample && lt.showExampleBadge !== !1 && /* @__PURE__ */ u.jsx("div", { className: "example-note", children: "예시 콘텐츠입니다. 미리보기는 소개용 일러스트이며 실제 서비스 화면이 아닙니다. 운영할 앱 정보와 이미지로 교체해 주세요." }),
          /* @__PURE__ */ u.jsxs("div", { className: "detail-layout", children: [
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx(Ty, { app: lt }, lt.id),
              /* @__PURE__ */ u.jsxs("section", { className: "panel prose", children: [
                /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "ABOUT THIS APP" }),
                /* @__PURE__ */ u.jsx("h2", { children: "이런 도구를 만들고 싶었어요." }),
                /* @__PURE__ */ u.jsx("p", { children: lt.description || "상세 소개를 준비하고 있습니다." }),
                /* @__PURE__ */ u.jsx("h3", { children: "주요 기능" }),
                /* @__PURE__ */ u.jsx("ul", { children: lt.features.map((D) => /* @__PURE__ */ u.jsx("li", { children: D }, D)) }),
                /* @__PURE__ */ u.jsx("h3", { children: "이렇게 활용해 보세요" }),
                /* @__PURE__ */ u.jsx("ul", { children: lt.useCases.map((D) => /* @__PURE__ */ u.jsx("li", { children: D }, D)) }),
                /* @__PURE__ */ u.jsx("h3", { children: "사용 방법" }),
                lt.instructions.length ? /* @__PURE__ */ u.jsx("ol", { children: lt.instructions.map((D) => /* @__PURE__ */ u.jsx("li", { children: D }, D)) }) : /* @__PURE__ */ u.jsx("p", { children: "사용 안내를 준비하고 있습니다." })
              ] })
            ] }),
            /* @__PURE__ */ u.jsxs("aside", { className: "detail-aside panel", children: [
              /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "APP INFORMATION" }),
              /* @__PURE__ */ u.jsx("h2", { children: "앱 한눈에 보기" }),
              /* @__PURE__ */ u.jsxs("dl", { children: [
                /* @__PURE__ */ u.jsx("dt", { children: "상태" }),
                /* @__PURE__ */ u.jsx("dd", { children: lt.isExample ? "예시 콘텐츠" : lt.status || "안내 준비 중" }),
                /* @__PURE__ */ u.jsx("dt", { children: "추천 사용자" }),
                /* @__PURE__ */ u.jsx("dd", { children: lt.targetUsers.join(" · ") || "누구나" }),
                /* @__PURE__ */ u.jsx("dt", { children: "지원 기기" }),
                /* @__PURE__ */ u.jsx("dd", { children: lt.supportedDevices.join(" · ") || "안내 준비 중" }),
                /* @__PURE__ */ u.jsx("dt", { children: "업데이트" }),
                /* @__PURE__ */ u.jsx("dd", { children: lt.updatedAt || "미입력" })
              ] }),
              /* @__PURE__ */ u.jsxs("div", { className: "stack", children: [
                pu(lt.appUrl) ? /* @__PURE__ */ u.jsx(wn, { url: lt.appUrl, primary: !0, children: "앱 실행하기" }) : /* @__PURE__ */ u.jsx("span", { className: "pending", children: "앱 주소 준비 중" }),
                /* @__PURE__ */ u.jsx(wn, { url: lt.githubUrl, children: "GitHub 소스" }),
                /* @__PURE__ */ u.jsx(wn, { url: lt.guideUrl, children: "사용 설명서" })
              ] }),
              /* @__PURE__ */ u.jsx("div", { className: "tags", children: lt.tags.map((D) => /* @__PURE__ */ u.jsxs("span", { children: [
                "#",
                D
              ] }, D)) }),
              /* @__PURE__ */ u.jsx("h3", { children: "변경 내역" }),
              lt.changelog.length ? /* @__PURE__ */ u.jsx("ul", { children: lt.changelog.map((D, v) => /* @__PURE__ */ u.jsx("li", { children: D }, v)) }) : /* @__PURE__ */ u.jsx("p", { className: "muted", children: "등록된 변경 내역이 없습니다." })
            ] })
          ] }),
          /* @__PURE__ */ u.jsx(yh, { config: p, term: `app:${lt.id}`, theme: ct }, lt.id),
          /* @__PURE__ */ u.jsx(sh, { appId: lt.id }, "secret:" + lt.id),
          /* @__PURE__ */ u.jsxs("section", { className: "section", children: [
            /* @__PURE__ */ u.jsx("div", { className: "section-head", children: /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "YOU MIGHT ALSO LIKE" }),
              /* @__PURE__ */ u.jsx("h2", { children: "함께 둘러볼 앱" })
            ] }) }),
            W(z.filter((D) => D.id !== lt.id).sort((D, v) => +(v.category === lt.category) - +(D.category === lt.category) || D.sortOrder - v.sortOrder).slice(0, 3))
          ] })
        ] }) : Y.view === "home" ? /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(dy, { site: q, apps: z, sections: S.sections || [], onView: Lt, onApp: ie, onCategory: Bt }) }) : Y.view === "apps" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx("div", { className: "collection-tools", children: /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => N(!0), children: s.authenticated ? "앱 편집·작성" : "관리자 모드로 앱 편집" }) }),
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
                /* @__PURE__ */ u.jsx(Ct, { name: "search" }),
                /* @__PURE__ */ u.jsx("input", { "aria-label": "앱 검색", placeholder: "앱 이름, 기능, 태그 검색", value: Q, onChange: (D) => et(D.target.value) })
              ] }),
              /* @__PURE__ */ u.jsxs("label", { className: "sort-field", children: [
                /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "앱 정렬" }),
                /* @__PURE__ */ u.jsxs("select", { "aria-label": "앱 정렬", value: rt, onChange: (D) => w(D.target.value), children: [
                  /* @__PURE__ */ u.jsx("option", { value: "featured", children: "추천순" }),
                  /* @__PURE__ */ u.jsx("option", { value: "recent", children: "최근 업데이트순" }),
                  /* @__PURE__ */ u.jsx("option", { value: "name", children: "이름순" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "filter-chips", "aria-label": "카테고리 필터", children: ["전체", ...q.categories].map((D) => /* @__PURE__ */ u.jsx("button", { className: G === D ? "selected" : "", "aria-pressed": G === D, onClick: () => P(D), children: D }, D)) }),
            /* @__PURE__ */ u.jsxs("div", { className: "filter-bottom", children: [
              /* @__PURE__ */ u.jsxs("label", { children: [
                "태그 ",
                /* @__PURE__ */ u.jsxs("select", { "aria-label": "태그 필터", value: vt, onChange: (D) => pt(D.target.value), children: [
                  /* @__PURE__ */ u.jsx("option", { value: "", children: "전체 태그" }),
                  ue.map((D) => /* @__PURE__ */ u.jsx("option", { children: D }, D))
                ] })
              ] }),
              /* @__PURE__ */ u.jsx("button", { className: "text-button", onClick: () => {
                et(""), P("전체"), pt(""), w("featured");
              }, children: "필터 초기화" })
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("p", { className: "result-count", "aria-live": "polite", children: [
            "총 ",
            /* @__PURE__ */ u.jsx("b", { children: It.length }),
            "개의 앱"
          ] }),
          It.length ? W(It) : /* @__PURE__ */ u.jsxs("section", { className: "empty", children: [
            /* @__PURE__ */ u.jsx(Ct, { name: "search", size: 35 }),
            /* @__PURE__ */ u.jsx("h2", { children: "검색 결과가 없어요." }),
            /* @__PURE__ */ u.jsx("p", { children: "다른 검색어나 카테고리로 찾아보세요." }),
            /* @__PURE__ */ u.jsx("button", { className: "btn", onClick: () => {
              et(""), P("전체"), pt("");
            }, children: "검색 조건 지우기" })
          ] })
        ] }) : Y.view === "about" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsxs("div", { className: "page-heading", children: [
            /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "BEHIND THE TOOLS" }),
            /* @__PURE__ */ u.jsx("h1", { style: { whiteSpace: "pre-line" }, children: q.profile.heading })
          ] }),
          q.profile.visible !== !1 && /* @__PURE__ */ u.jsxs("section", { className: "about-panel panel", children: [
            /* @__PURE__ */ u.jsx("div", { className: "profile-portrait", children: q.profile.image ? /* @__PURE__ */ u.jsx(Yl, { src: q.profile.image, alt: q.profile.name + " 프로필" }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              "T",
              /* @__PURE__ */ u.jsx("span", { children: "✳" })
            ] }) }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("span", { className: "eyebrow", children: "THE MAKER" }),
              /* @__PURE__ */ u.jsx("h2", { children: q.profile.name }),
              /* @__PURE__ */ u.jsx("p", { className: "intro", children: q.profile.role }),
              /* @__PURE__ */ u.jsx("p", { children: q.profile.bio }),
              /* @__PURE__ */ u.jsx("div", { className: "link-row", children: q.profile.links.map((D) => /* @__PURE__ */ u.jsx(wn, { url: D.url, children: D.label }, D.url)) })
            ] })
          ] }),
          q.profile.showPrinciples !== !1 && /* @__PURE__ */ u.jsx("div", { className: "principles", children: q.profile.principles.map((D, v) => /* @__PURE__ */ u.jsxs("section", { className: "panel", children: [
            /* @__PURE__ */ u.jsxs("span", { className: "eyebrow", children: [
              "0",
              v + 1
            ] }),
            /* @__PURE__ */ u.jsx("h3", { children: D }),
            /* @__PURE__ */ u.jsx(Ct, { name: vh[v], size: 32 })
          ] }, D)) }),
          q.profile.showInvite !== !1 && /* @__PURE__ */ u.jsxs("section", { className: "invite", children: [
            /* @__PURE__ */ u.jsx(Ct, { name: "spark", size: 30 }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("h2", { children: q.profile.inviteTitle }),
              /* @__PURE__ */ u.jsx("p", { children: q.profile.inviteBody })
            ] }),
            /* @__PURE__ */ u.jsxs("button", { className: "btn", onClick: () => Lt("guestbook"), children: [
              q.profile.buttonLabel,
              " ",
              /* @__PURE__ */ u.jsx(Ct, { name: "arrow", size: 16 })
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
          /* @__PURE__ */ u.jsx(yh, { config: p, term: "guestbook", theme: ct }),
          /* @__PURE__ */ u.jsx(sh, {})
        ] }),
        q.footerVisible !== !1 && /* @__PURE__ */ u.jsxs("footer", { children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsxs("b", { children: [
              "✳ ",
              q.brand
            ] }),
            /* @__PURE__ */ u.jsx("p", { children: q.footer })
          ] }),
          /* @__PURE__ */ u.jsx("span", { children: q.title })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("nav", { className: "mobile-nav", "aria-label": "모바일 메뉴", children: C.map(([D, v, M]) => /* @__PURE__ */ u.jsxs("button", { className: A === D ? "active" : "", "aria-current": A === D ? "page" : void 0, onClick: () => Lt(D), children: [
      /* @__PURE__ */ u.jsx(Ct, { name: v, size: 21 }),
      /* @__PURE__ */ u.jsx("span", { children: M })
    ] }, D)) })
  ] });
}
class Cy extends my.Component {
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
const $s = /* @__PURE__ */ new Map();
function vg({ parentElement: r, data: s, setTriggerValue: d, key: f }) {
  let y = $s.get(f);
  if (y)
    clearTimeout(y.timer), y.mount.parentNode !== r && r.appendChild(y.mount);
  else {
    const S = document.createElement("div");
    S.id = "workshop-root", r.appendChild(S), y = { mount: S, root: Ay.createRoot(S), timer: 0 }, $s.set(f, y);
  }
  y.root.render(/* @__PURE__ */ u.jsx(Cy, { children: /* @__PURE__ */ u.jsx(vy, { payload: s, emit: d, children: /* @__PURE__ */ u.jsx(zy, { payload: s }) }) }));
  const N = y;
  return () => {
    N.timer = window.setTimeout(() => {
      N.mount.isConnected || (N.root.unmount(), $s.delete(f));
    }, 1e3);
  };
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gu = globalThis, Ws = gu.ShadowRoot && (gu.ShadyCSS === void 0 || gu.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Fs = Symbol(), gh = /* @__PURE__ */ new WeakMap();
let Dh = class {
  constructor(r, s, d) {
    if (this._$cssResult$ = !0, d !== Fs) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = r, this.t = s;
  }
  get styleSheet() {
    let r = this.o;
    const s = this.t;
    if (Ws && r === void 0) {
      const d = s !== void 0 && s.length === 1;
      d && (r = gh.get(s)), r === void 0 && ((this.o = r = new CSSStyleSheet()).replaceSync(this.cssText), d && gh.set(s, r));
    }
    return r;
  }
  toString() {
    return this.cssText;
  }
};
const Oy = (r) => new Dh(typeof r == "string" ? r : r + "", void 0, Fs), My = (r, ...s) => {
  const d = r.length === 1 ? r[0] : s.reduce((f, y, N) => f + ((S) => {
    if (S._$cssResult$ === !0) return S.cssText;
    if (typeof S == "number") return S;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + S + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(y) + r[N + 1], r[0]);
  return new Dh(d, r, Fs);
}, Uy = (r, s) => {
  if (Ws) r.adoptedStyleSheets = s.map((d) => d instanceof CSSStyleSheet ? d : d.styleSheet);
  else for (const d of s) {
    const f = document.createElement("style"), y = gu.litNonce;
    y !== void 0 && f.setAttribute("nonce", y), f.textContent = d.cssText, r.appendChild(f);
  }
}, ph = Ws ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((s) => {
  let d = "";
  for (const f of s.cssRules) d += f.cssText;
  return Oy(d);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Dy, defineProperty: Hy, getOwnPropertyDescriptor: Ry, getOwnPropertyNames: qy, getOwnPropertySymbols: By, getPrototypeOf: Yy } = Object, wa = globalThis, bh = wa.trustedTypes, Gy = bh ? bh.emptyScript : "", xh = wa.reactiveElementPolyfillSupport, $n = (r, s) => r, bu = { toAttribute(r, s) {
  switch (s) {
    case Boolean:
      r = r ? Gy : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, s) {
  let d = r;
  switch (s) {
    case Boolean:
      d = r !== null;
      break;
    case Number:
      d = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        d = JSON.parse(r);
      } catch {
        d = null;
      }
  }
  return d;
} }, Is = (r, s) => !Dy(r, s), Sh = { attribute: !0, type: String, converter: bu, reflect: !1, hasChanged: Is };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), wa.litPropertyMetadata ?? (wa.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class Va extends HTMLElement {
  static addInitializer(s) {
    this._$Ei(), (this.l ?? (this.l = [])).push(s);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(s, d = Sh) {
    if (d.state && (d.attribute = !1), this._$Ei(), this.elementProperties.set(s, d), !d.noAccessor) {
      const f = Symbol(), y = this.getPropertyDescriptor(s, f, d);
      y !== void 0 && Hy(this.prototype, s, y);
    }
  }
  static getPropertyDescriptor(s, d, f) {
    const { get: y, set: N } = Ry(this.prototype, s) ?? { get() {
      return this[d];
    }, set(S) {
      this[d] = S;
    } };
    return { get() {
      return y?.call(this);
    }, set(S) {
      const q = y?.call(this);
      N.call(this, S), this.requestUpdate(s, q, f);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(s) {
    return this.elementProperties.get(s) ?? Sh;
  }
  static _$Ei() {
    if (this.hasOwnProperty($n("elementProperties"))) return;
    const s = Yy(this);
    s.finalize(), s.l !== void 0 && (this.l = [...s.l]), this.elementProperties = new Map(s.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty($n("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($n("properties"))) {
      const d = this.properties, f = [...qy(d), ...By(d)];
      for (const y of f) this.createProperty(y, d[y]);
    }
    const s = this[Symbol.metadata];
    if (s !== null) {
      const d = litPropertyMetadata.get(s);
      if (d !== void 0) for (const [f, y] of d) this.elementProperties.set(f, y);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [d, f] of this.elementProperties) {
      const y = this._$Eu(d, f);
      y !== void 0 && this._$Eh.set(y, d);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s) {
    const d = [];
    if (Array.isArray(s)) {
      const f = new Set(s.flat(1 / 0).reverse());
      for (const y of f) d.unshift(ph(y));
    } else s !== void 0 && d.push(ph(s));
    return d;
  }
  static _$Eu(s, d) {
    const f = d.attribute;
    return f === !1 ? void 0 : typeof f == "string" ? f : typeof s == "string" ? s.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var s;
    this._$ES = new Promise((d) => this.enableUpdating = d), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (s = this.constructor.l) == null || s.forEach((d) => d(this));
  }
  addController(s) {
    var d;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(s), this.renderRoot !== void 0 && this.isConnected && ((d = s.hostConnected) == null || d.call(s));
  }
  removeController(s) {
    var d;
    (d = this._$EO) == null || d.delete(s);
  }
  _$E_() {
    const s = /* @__PURE__ */ new Map(), d = this.constructor.elementProperties;
    for (const f of d.keys()) this.hasOwnProperty(f) && (s.set(f, this[f]), delete this[f]);
    s.size > 0 && (this._$Ep = s);
  }
  createRenderRoot() {
    const s = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Uy(s, this.constructor.elementStyles), s;
  }
  connectedCallback() {
    var s;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (s = this._$EO) == null || s.forEach((d) => {
      var f;
      return (f = d.hostConnected) == null ? void 0 : f.call(d);
    });
  }
  enableUpdating(s) {
  }
  disconnectedCallback() {
    var s;
    (s = this._$EO) == null || s.forEach((d) => {
      var f;
      return (f = d.hostDisconnected) == null ? void 0 : f.call(d);
    });
  }
  attributeChangedCallback(s, d, f) {
    this._$AK(s, f);
  }
  _$EC(s, d) {
    var f;
    const y = this.constructor.elementProperties.get(s), N = this.constructor._$Eu(s, y);
    if (N !== void 0 && y.reflect === !0) {
      const S = (((f = y.converter) == null ? void 0 : f.toAttribute) !== void 0 ? y.converter : bu).toAttribute(d, y.type);
      this._$Em = s, S == null ? this.removeAttribute(N) : this.setAttribute(N, S), this._$Em = null;
    }
  }
  _$AK(s, d) {
    var f;
    const y = this.constructor, N = y._$Eh.get(s);
    if (N !== void 0 && this._$Em !== N) {
      const S = y.getPropertyOptions(N), q = typeof S.converter == "function" ? { fromAttribute: S.converter } : ((f = S.converter) == null ? void 0 : f.fromAttribute) !== void 0 ? S.converter : bu;
      this._$Em = N, this[N] = q.fromAttribute(d, S.type), this._$Em = null;
    }
  }
  requestUpdate(s, d, f) {
    if (s !== void 0) {
      if (f ?? (f = this.constructor.getPropertyOptions(s)), !(f.hasChanged ?? Is)(this[s], d)) return;
      this.P(s, d, f);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(s, d, f) {
    this._$AL.has(s) || this._$AL.set(s, d), f.reflect === !0 && this._$Em !== s && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(s);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (d) {
      Promise.reject(d);
    }
    const s = this.scheduleUpdate();
    return s != null && await s, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [N, S] of this._$Ep) this[N] = S;
        this._$Ep = void 0;
      }
      const y = this.constructor.elementProperties;
      if (y.size > 0) for (const [N, S] of y) S.wrapped !== !0 || this._$AL.has(N) || this[N] === void 0 || this.P(N, this[N], S);
    }
    let d = !1;
    const f = this._$AL;
    try {
      d = this.shouldUpdate(f), d ? (this.willUpdate(f), (s = this._$EO) == null || s.forEach((y) => {
        var N;
        return (N = y.hostUpdate) == null ? void 0 : N.call(y);
      }), this.update(f)) : this._$EU();
    } catch (y) {
      throw d = !1, this._$EU(), y;
    }
    d && this._$AE(f);
  }
  willUpdate(s) {
  }
  _$AE(s) {
    var d;
    (d = this._$EO) == null || d.forEach((f) => {
      var y;
      return (y = f.hostUpdated) == null ? void 0 : y.call(f);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(s)), this.updated(s);
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
  shouldUpdate(s) {
    return !0;
  }
  update(s) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((d) => this._$EC(d, this[d]))), this._$EU();
  }
  updated(s) {
  }
  firstUpdated(s) {
  }
}
Va.elementStyles = [], Va.shadowRootOptions = { mode: "open" }, Va[$n("elementProperties")] = /* @__PURE__ */ new Map(), Va[$n("finalized")] = /* @__PURE__ */ new Map(), xh?.({ ReactiveElement: Va }), (wa.reactiveElementVersions ?? (wa.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xu = globalThis, Su = xu.trustedTypes, jh = Su ? Su.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, Hh = "$lit$", Bl = `lit$${Math.random().toFixed(9).slice(2)}$`, Rh = "?" + Bl, Ly = `<${Rh}>`, ia = document, kn = () => ia.createComment(""), Wn = (r) => r === null || typeof r != "object" && typeof r != "function", Ps = Array.isArray, Qy = (r) => Ps(r) || typeof r?.[Symbol.iterator] == "function", Ks = `[ 	
\f\r]`, Vn = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Eh = /-->/g, _h = />/g, aa = RegExp(`>|${Ks}(?:([^\\s"'>=/]+)(${Ks}*=${Ks}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ah = /'/g, Nh = /"/g, qh = /^(?:script|style|textarea|title)$/i, Xy = (r) => (s, ...d) => ({ _$litType$: r, strings: s, values: d }), Zy = Xy(1), $a = Symbol.for("lit-noChange"), wt = Symbol.for("lit-nothing"), Th = /* @__PURE__ */ new WeakMap(), na = ia.createTreeWalker(ia, 129);
function Bh(r, s) {
  if (!Ps(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return jh !== void 0 ? jh.createHTML(s) : s;
}
const Vy = (r, s) => {
  const d = r.length - 1, f = [];
  let y, N = s === 2 ? "<svg>" : s === 3 ? "<math>" : "", S = Vn;
  for (let q = 0; q < d; q++) {
    const z = r[q];
    let p, Y, H = -1, G = 0;
    for (; G < z.length && (S.lastIndex = G, Y = S.exec(z), Y !== null); ) G = S.lastIndex, S === Vn ? Y[1] === "!--" ? S = Eh : Y[1] !== void 0 ? S = _h : Y[2] !== void 0 ? (qh.test(Y[2]) && (y = RegExp("</" + Y[2], "g")), S = aa) : Y[3] !== void 0 && (S = aa) : S === aa ? Y[0] === ">" ? (S = y ?? Vn, H = -1) : Y[1] === void 0 ? H = -2 : (H = S.lastIndex - Y[2].length, p = Y[1], S = Y[3] === void 0 ? aa : Y[3] === '"' ? Nh : Ah) : S === Nh || S === Ah ? S = aa : S === Eh || S === _h ? S = Vn : (S = aa, y = void 0);
    const P = S === aa && r[q + 1].startsWith("/>") ? " " : "";
    N += S === Vn ? z + Ly : H >= 0 ? (f.push(p), z.slice(0, H) + Hh + z.slice(H) + Bl + P) : z + Bl + (H === -2 ? q : P);
  }
  return [Bh(r, N + (r[d] || "<?>") + (s === 2 ? "</svg>" : s === 3 ? "</math>" : "")), f];
};
class Fn {
  constructor({ strings: s, _$litType$: d }, f) {
    let y;
    this.parts = [];
    let N = 0, S = 0;
    const q = s.length - 1, z = this.parts, [p, Y] = Vy(s, d);
    if (this.el = Fn.createElement(p, f), na.currentNode = this.el.content, d === 2 || d === 3) {
      const H = this.el.content.firstChild;
      H.replaceWith(...H.childNodes);
    }
    for (; (y = na.nextNode()) !== null && z.length < q; ) {
      if (y.nodeType === 1) {
        if (y.hasAttributes()) for (const H of y.getAttributeNames()) if (H.endsWith(Hh)) {
          const G = Y[S++], P = y.getAttribute(H).split(Bl), Q = /([.?@])?(.*)/.exec(G);
          z.push({ type: 1, index: N, name: Q[2], strings: P, ctor: Q[1] === "." ? $y : Q[1] === "?" ? Ky : Q[1] === "@" ? Jy : _u }), y.removeAttribute(H);
        } else H.startsWith(Bl) && (z.push({ type: 6, index: N }), y.removeAttribute(H));
        if (qh.test(y.tagName)) {
          const H = y.textContent.split(Bl), G = H.length - 1;
          if (G > 0) {
            y.textContent = Su ? Su.emptyScript : "";
            for (let P = 0; P < G; P++) y.append(H[P], kn()), na.nextNode(), z.push({ type: 2, index: ++N });
            y.append(H[G], kn());
          }
        }
      } else if (y.nodeType === 8) if (y.data === Rh) z.push({ type: 2, index: N });
      else {
        let H = -1;
        for (; (H = y.data.indexOf(Bl, H + 1)) !== -1; ) z.push({ type: 7, index: N }), H += Bl.length - 1;
      }
      N++;
    }
  }
  static createElement(s, d) {
    const f = ia.createElement("template");
    return f.innerHTML = s, f;
  }
}
function Ka(r, s, d = r, f) {
  var y, N;
  if (s === $a) return s;
  let S = f !== void 0 ? (y = d._$Co) == null ? void 0 : y[f] : d._$Cl;
  const q = Wn(s) ? void 0 : s._$litDirective$;
  return S?.constructor !== q && ((N = S?._$AO) == null || N.call(S, !1), q === void 0 ? S = void 0 : (S = new q(r), S._$AT(r, d, f)), f !== void 0 ? (d._$Co ?? (d._$Co = []))[f] = S : d._$Cl = S), S !== void 0 && (s = Ka(r, S._$AS(r, s.values), S, f)), s;
}
class wy {
  constructor(s, d) {
    this._$AV = [], this._$AN = void 0, this._$AD = s, this._$AM = d;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(s) {
    const { el: { content: d }, parts: f } = this._$AD, y = (s?.creationScope ?? ia).importNode(d, !0);
    na.currentNode = y;
    let N = na.nextNode(), S = 0, q = 0, z = f[0];
    for (; z !== void 0; ) {
      if (S === z.index) {
        let p;
        z.type === 2 ? p = new In(N, N.nextSibling, this, s) : z.type === 1 ? p = new z.ctor(N, z.name, z.strings, this, s) : z.type === 6 && (p = new ky(N, this, s)), this._$AV.push(p), z = f[++q];
      }
      S !== z?.index && (N = na.nextNode(), S++);
    }
    return na.currentNode = ia, y;
  }
  p(s) {
    let d = 0;
    for (const f of this._$AV) f !== void 0 && (f.strings !== void 0 ? (f._$AI(s, f, d), d += f.strings.length - 2) : f._$AI(s[d])), d++;
  }
}
class In {
  get _$AU() {
    var s;
    return ((s = this._$AM) == null ? void 0 : s._$AU) ?? this._$Cv;
  }
  constructor(s, d, f, y) {
    this.type = 2, this._$AH = wt, this._$AN = void 0, this._$AA = s, this._$AB = d, this._$AM = f, this.options = y, this._$Cv = y?.isConnected ?? !0;
  }
  get parentNode() {
    let s = this._$AA.parentNode;
    const d = this._$AM;
    return d !== void 0 && s?.nodeType === 11 && (s = d.parentNode), s;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(s, d = this) {
    s = Ka(this, s, d), Wn(s) ? s === wt || s == null || s === "" ? (this._$AH !== wt && this._$AR(), this._$AH = wt) : s !== this._$AH && s !== $a && this._(s) : s._$litType$ !== void 0 ? this.$(s) : s.nodeType !== void 0 ? this.T(s) : Qy(s) ? this.k(s) : this._(s);
  }
  O(s) {
    return this._$AA.parentNode.insertBefore(s, this._$AB);
  }
  T(s) {
    this._$AH !== s && (this._$AR(), this._$AH = this.O(s));
  }
  _(s) {
    this._$AH !== wt && Wn(this._$AH) ? this._$AA.nextSibling.data = s : this.T(ia.createTextNode(s)), this._$AH = s;
  }
  $(s) {
    var d;
    const { values: f, _$litType$: y } = s, N = typeof y == "number" ? this._$AC(s) : (y.el === void 0 && (y.el = Fn.createElement(Bh(y.h, y.h[0]), this.options)), y);
    if (((d = this._$AH) == null ? void 0 : d._$AD) === N) this._$AH.p(f);
    else {
      const S = new wy(N, this), q = S.u(this.options);
      S.p(f), this.T(q), this._$AH = S;
    }
  }
  _$AC(s) {
    let d = Th.get(s.strings);
    return d === void 0 && Th.set(s.strings, d = new Fn(s)), d;
  }
  k(s) {
    Ps(this._$AH) || (this._$AH = [], this._$AR());
    const d = this._$AH;
    let f, y = 0;
    for (const N of s) y === d.length ? d.push(f = new In(this.O(kn()), this.O(kn()), this, this.options)) : f = d[y], f._$AI(N), y++;
    y < d.length && (this._$AR(f && f._$AB.nextSibling, y), d.length = y);
  }
  _$AR(s = this._$AA.nextSibling, d) {
    var f;
    for ((f = this._$AP) == null ? void 0 : f.call(this, !1, !0, d); s && s !== this._$AB; ) {
      const y = s.nextSibling;
      s.remove(), s = y;
    }
  }
  setConnected(s) {
    var d;
    this._$AM === void 0 && (this._$Cv = s, (d = this._$AP) == null || d.call(this, s));
  }
}
class _u {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(s, d, f, y, N) {
    this.type = 1, this._$AH = wt, this._$AN = void 0, this.element = s, this.name = d, this._$AM = y, this.options = N, f.length > 2 || f[0] !== "" || f[1] !== "" ? (this._$AH = Array(f.length - 1).fill(new String()), this.strings = f) : this._$AH = wt;
  }
  _$AI(s, d = this, f, y) {
    const N = this.strings;
    let S = !1;
    if (N === void 0) s = Ka(this, s, d, 0), S = !Wn(s) || s !== this._$AH && s !== $a, S && (this._$AH = s);
    else {
      const q = s;
      let z, p;
      for (s = N[0], z = 0; z < N.length - 1; z++) p = Ka(this, q[f + z], d, z), p === $a && (p = this._$AH[z]), S || (S = !Wn(p) || p !== this._$AH[z]), p === wt ? s = wt : s !== wt && (s += (p ?? "") + N[z + 1]), this._$AH[z] = p;
    }
    S && !y && this.j(s);
  }
  j(s) {
    s === wt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, s ?? "");
  }
}
class $y extends _u {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(s) {
    this.element[this.name] = s === wt ? void 0 : s;
  }
}
class Ky extends _u {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(s) {
    this.element.toggleAttribute(this.name, !!s && s !== wt);
  }
}
class Jy extends _u {
  constructor(s, d, f, y, N) {
    super(s, d, f, y, N), this.type = 5;
  }
  _$AI(s, d = this) {
    if ((s = Ka(this, s, d, 0) ?? wt) === $a) return;
    const f = this._$AH, y = s === wt && f !== wt || s.capture !== f.capture || s.once !== f.once || s.passive !== f.passive, N = s !== wt && (f === wt || y);
    y && this.element.removeEventListener(this.name, this, f), N && this.element.addEventListener(this.name, this, s), this._$AH = s;
  }
  handleEvent(s) {
    var d;
    typeof this._$AH == "function" ? this._$AH.call(((d = this.options) == null ? void 0 : d.host) ?? this.element, s) : this._$AH.handleEvent(s);
  }
}
class ky {
  constructor(s, d, f) {
    this.element = s, this.type = 6, this._$AN = void 0, this._$AM = d, this.options = f;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(s) {
    Ka(this, s);
  }
}
const zh = xu.litHtmlPolyfillSupport;
zh?.(Fn, In), (xu.litHtmlVersions ?? (xu.litHtmlVersions = [])).push("3.2.1");
const Wy = (r, s, d) => {
  const f = d?.renderBefore ?? s;
  let y = f._$litPart$;
  if (y === void 0) {
    const N = d?.renderBefore ?? null;
    f._$litPart$ = y = new In(s.insertBefore(kn(), N), N, void 0, d ?? {});
  }
  return y._$AI(r), y;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Kn = class extends Va {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const s = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = s.firstChild), s;
  }
  update(r) {
    const s = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(r), this._$Do = Wy(s, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = this._$Do) == null || r.setConnected(!0);
  }
  disconnectedCallback() {
    var r;
    super.disconnectedCallback(), (r = this._$Do) == null || r.setConnected(!1);
  }
  render() {
    return $a;
  }
};
var Ch;
Kn._$litElement$ = !0, Kn.finalized = !0, (Ch = globalThis.litElementHydrateSupport) == null || Ch.call(globalThis, { LitElement: Kn });
const Oh = globalThis.litElementPolyfillSupport;
Oh?.({ LitElement: Kn });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Fy = (r) => (s, d) => {
  d !== void 0 ? d.addInitializer(() => {
    customElements.define(r, s);
  }) : customElements.define(r, s);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Iy = { attribute: !0, type: String, converter: bu, reflect: !1, hasChanged: Is }, Py = (r = Iy, s, d) => {
  const { kind: f, metadata: y } = d;
  let N = globalThis.litPropertyMetadata.get(y);
  if (N === void 0 && globalThis.litPropertyMetadata.set(y, N = /* @__PURE__ */ new Map()), N.set(d.name, r), f === "accessor") {
    const { name: S } = d;
    return { set(q) {
      const z = s.get.call(this);
      s.set.call(this, q), this.requestUpdate(S, z, r);
    }, init(q) {
      return q !== void 0 && this.P(S, void 0, r), q;
    } };
  }
  if (f === "setter") {
    const { name: S } = d;
    return function(q) {
      const z = this[S];
      s.call(this, q), this.requestUpdate(S, z, r);
    };
  }
  throw Error("Unsupported decorator location: " + f);
};
function pe(r) {
  return (s, d) => typeof d == "object" ? Py(r, s, d) : ((f, y, N) => {
    const S = y.hasOwnProperty(N);
    return y.constructor.createProperty(N, S ? { ...f, wrapped: !0 } : f), S ? Object.getOwnPropertyDescriptor(y, N) : void 0;
  })(r, s, d);
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tg = (r) => r.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const eg = { CHILD: 2 }, lg = (r) => (...s) => ({ _$litDirective$: r, values: s });
let ag = class {
  constructor(r) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(r, s, d) {
    this._$Ct = r, this._$AM = s, this._$Ci = d;
  }
  _$AS(r, s) {
    return this.update(r, s);
  }
  update(r, s) {
    return this.render(...s);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jn = (r, s) => {
  var d;
  const f = r._$AN;
  if (f === void 0) return !1;
  for (const y of f) (d = y._$AO) == null || d.call(y, s, !1), Jn(y, s);
  return !0;
}, ju = (r) => {
  let s, d;
  do {
    if ((s = r._$AM) === void 0) break;
    d = s._$AN, d.delete(r), r = s;
  } while (d?.size === 0);
}, Yh = (r) => {
  for (let s; s = r._$AM; r = s) {
    let d = s._$AN;
    if (d === void 0) s._$AN = d = /* @__PURE__ */ new Set();
    else if (d.has(r)) break;
    d.add(r), ug(s);
  }
};
function ng(r) {
  this._$AN !== void 0 ? (ju(this), this._$AM = r, Yh(this)) : this._$AM = r;
}
function ig(r, s = !1, d = 0) {
  const f = this._$AH, y = this._$AN;
  if (y !== void 0 && y.size !== 0) if (s) if (Array.isArray(f)) for (let N = d; N < f.length; N++) Jn(f[N], !1), ju(f[N]);
  else f != null && (Jn(f, !1), ju(f));
  else Jn(this, r);
}
const ug = (r) => {
  r.type == eg.CHILD && (r._$AP ?? (r._$AP = ig), r._$AQ ?? (r._$AQ = ng));
};
class cg extends ag {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(s, d, f) {
    super._$AT(s, d, f), Yh(this), this.isConnected = s._$AU;
  }
  _$AO(s, d = !0) {
    var f, y;
    s !== this.isConnected && (this.isConnected = s, s ? (f = this.reconnected) == null || f.call(this) : (y = this.disconnected) == null || y.call(this)), d && (Jn(this, s), ju(this));
  }
  setValue(s) {
    if (tg(this._$Ct)) this._$Ct._$AI(s, this);
    else {
      const d = [...this._$Ct._$AH];
      d[this._$Ci] = s, this._$Ct._$AI(d, this, 0);
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
const sg = () => new fg();
class fg {
}
const Js = /* @__PURE__ */ new WeakMap(), rg = lg(class extends cg {
  render(r) {
    return wt;
  }
  update(r, [s]) {
    var d;
    const f = s !== this.Y;
    return f && this.Y !== void 0 && this.rt(void 0), (f || this.lt !== this.ct) && (this.Y = s, this.ht = (d = r.options) == null ? void 0 : d.host, this.rt(this.ct = r.element)), wt;
  }
  rt(r) {
    if (this.isConnected || (r = void 0), typeof this.Y == "function") {
      const s = this.ht ?? globalThis;
      let d = Js.get(s);
      d === void 0 && (d = /* @__PURE__ */ new WeakMap(), Js.set(s, d)), d.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0), d.set(this.Y, r), r !== void 0 && this.Y.call(this.ht, r);
    } else this.Y.value = r;
  }
  get lt() {
    var r, s;
    return typeof this.Y == "function" ? (r = Js.get(this.ht ?? globalThis)) == null ? void 0 : r.get(this.Y) : (s = this.Y) == null ? void 0 : s.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
var og = Object.defineProperty, dg = Object.getOwnPropertyDescriptor, fe = (r, s, d, f) => {
  for (var y = f > 1 ? void 0 : f ? dg(s, d) : s, N = r.length - 1, S; N >= 0; N--)
    (S = r[N]) && (y = (f ? S(s, d, y) : S(y)) || y);
  return f && y && og(s, d, y), y;
};
function hg(r) {
  return customElements.get(r) ? (s) => s : Fy(r);
}
let Ft = class extends Kn {
  constructor() {
    super(), this.GISCUS_SESSION_KEY = "giscus-session", this.GISCUS_DEFAULT_HOST = "https://giscus.app", this.ERROR_SUGGESTION = "Please consider reporting this error at https://github.com/giscus/giscus/issues/new.", this.__session = "", this._iframeRef = sg(), this.messageEventHandler = this.handleMessageEvent.bind(this), this.hasLoaded = !1, this.host = this.GISCUS_DEFAULT_HOST, this.strict = "0", this.reactionsEnabled = "1", this.emitMetadata = "0", this.inputPosition = "bottom", this.theme = "light", this.lang = "en", this.loading = "eager", this.setupSession(), window.addEventListener("message", this.messageEventHandler);
  }
  get iframeRef() {
    var r;
    return (r = this._iframeRef) == null ? void 0 : r.value;
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
  _formatError(r) {
    return `[giscus] An error occurred. Error message: "${r}".`;
  }
  setupSession() {
    const r = location.href, s = new URL(r), d = localStorage.getItem(this.GISCUS_SESSION_KEY), f = s.searchParams.get("giscus") ?? "";
    if (this.__session = "", f) {
      localStorage.setItem(this.GISCUS_SESSION_KEY, JSON.stringify(f)), this.__session = f, s.searchParams.delete("giscus"), s.hash = "", history.replaceState(void 0, document.title, s.toString());
      return;
    }
    if (d)
      try {
        this.__session = JSON.parse(d);
      } catch (y) {
        localStorage.removeItem(this.GISCUS_SESSION_KEY), console.warn(
          `${this._formatError(
            y?.message
          )} Session has been cleared.`
        );
      }
  }
  signOut() {
    localStorage.removeItem(this.GISCUS_SESSION_KEY), this.__session = "", this.update(/* @__PURE__ */ new Map());
  }
  handleMessageEvent(r) {
    if (r.origin !== this._host) return;
    const { data: s } = r;
    if (!(typeof s == "object" && s.giscus)) return;
    if (this.iframeRef && s.giscus.resizeHeight && (this.iframeRef.style.height = `${s.giscus.resizeHeight}px`), s.giscus.signOut) {
      console.info("[giscus] User has logged out. Session has been cleared."), this.signOut();
      return;
    }
    if (!s.giscus.error) return;
    const d = s.giscus.error;
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
  sendMessage(r) {
    var s;
    !((s = this.iframeRef) != null && s.contentWindow) || !this.hasLoaded || this.iframeRef.contentWindow.postMessage({ giscus: r }, this._host);
  }
  updateConfig() {
    const r = {
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
    this.sendMessage(r);
  }
  firstUpdated() {
    var r;
    (r = this.iframeRef) == null || r.addEventListener("load", () => {
      var s;
      (s = this.iframeRef) == null || s.classList.remove("loading"), this.hasLoaded = !0, this.updateConfig();
    });
  }
  requestUpdate(r, s, d) {
    if (!this.hasUpdated || r === "host") {
      super.requestUpdate(r, s, d);
      return;
    }
    this.updateConfig();
  }
  getMetaContent(r, s = !1) {
    const d = s ? `meta[property='og:${r}'],` : "", f = document.querySelector(
      d + `meta[name='${r}']`
    );
    return f ? f.content : "";
  }
  _getCleanedUrl() {
    const r = new URL(location.href);
    return r.searchParams.delete("giscus"), r.hash = "", r;
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
    const r = this._getCleanedUrl().toString(), s = `${r}${this.id ? "#" + this.id : ""}`, d = this.getMetaContent("description", !0), f = this.getMetaContent("giscus:backlink") || r, y = {
      origin: s,
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
      backLink: f
    }, N = this._host, S = this.lang ? `/${this.lang}` : "", q = new URLSearchParams(y);
    return `${N}${S}/widget?${q.toString()}`;
  }
  render() {
    return Zy`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${rg(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `;
  }
};
Ft.styles = My`
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
fe([
  pe({ reflect: !0 })
], Ft.prototype, "host", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "repo", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "repoId", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "category", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "categoryId", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "mapping", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "term", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "strict", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "reactionsEnabled", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "emitMetadata", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "inputPosition", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "theme", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "lang", 2);
fe([
  pe({ reflect: !0 })
], Ft.prototype, "loading", 2);
Ft = fe([
  hg("giscus-widget")
], Ft);
const mg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get GiscusWidget() {
    return Ft;
  }
}, Symbol.toStringTag, { value: "Module" }));
export {
  vg as default
};
