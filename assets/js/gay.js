"use strict";
(() => { var ur = Object.create; var Ge = Object.defineProperty,
    dr = Object.defineProperties,
    fr = Object.getOwnPropertyDescriptor,
    pr = Object.getOwnPropertyDescriptors,
    mr = Object.getOwnPropertyNames,
    Yt = Object.getOwnPropertySymbols,
    hr = Object.getPrototypeOf,
    Ut = Object.prototype.hasOwnProperty,
    gr = Object.prototype.propertyIsEnumerable; var Kt = (e, t, n) => t in e ? Ge(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n,
    te = (e, t) => { for (var n in t || (t = {})) Ut.call(t, n) && Kt(e, n, t[n]); if (Yt)
        for (var n of Yt(t)) gr.call(t, n) && Kt(e, n, t[n]); return e },
    zt = (e, t) => dr(e, pr(t)); var j = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports); var vr = (e, t, n, o) => { if (t && typeof t == "object" || typeof t == "function")
      for (let r of mr(t)) !Ut.call(e, r) && r !== n && Ge(e, r, { get: () => t[r], enumerable: !(o = fr(t, r)) || o.enumerable }); return e }; var Je = (e, t, n) => (n = e != null ? ur(hr(e)) : {}, vr(t || !e || !e.__esModule ? Ge(n, "default", { value: e, enumerable: !0 }) : n, e)); var Gt = j((Qe, Xe) => {
    (function(e, t) { typeof Qe == "object" && typeof Xe < "u" ? Xe.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.Data = t()) })(Qe, function() { "use strict"; let e = new Map; return { set(n, o, r) { e.has(n) || e.set(n, new Map); let i = e.get(n); if (!i.has(o) && i.size !== 0) { console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(i.keys())[0], ".")); return } i.set(o, r) }, get(n, o) { return e.has(n) && e.get(n).get(o) || null }, remove(n, o) { if (!e.has(n)) return; let r = e.get(n);
          r.delete(o), r.size === 0 && e.delete(n) } } }) }); var ne = j((Pe, Jt) => {
    (function(e, t) { typeof Pe == "object" && typeof Jt < "u" ? t(Pe) : typeof define == "function" && define.amd ? define(["exports"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, t(e.Index = {})) })(Pe, function(e) { "use strict"; let o = "transitionend",
        r = u => (u && window.CSS && window.CSS.escape && (u = u.replace(/#([^\s"#']+)/g, (p, h) => "#".concat(CSS.escape(h)))), u),
        i = u => u == null ? "".concat(u) : Object.prototype.toString.call(u).match(/\s([a-z]+)/i)[1].toLowerCase(),
        a = u => { do u += Math.floor(Math.random() * 1e6); while (document.getElementById(u)); return u },
        s = u => { if (!u) return 0; let { transitionDuration: p, transitionDelay: h } = window.getComputedStyle(u), A = Number.parseFloat(p), x = Number.parseFloat(h); return !A && !x ? 0 : (p = p.split(",")[0], h = h.split(",")[0], (Number.parseFloat(p) + Number.parseFloat(h)) * 1e3) },
        c = u => { u.dispatchEvent(new Event(o)) },
        d = u => !u || typeof u != "object" ? !1 : (typeof u.jquery < "u" && (u = u[0]), typeof u.nodeType < "u"),
        l = u => d(u) ? u.jquery ? u[0] : u : typeof u == "string" && u.length > 0 ? document.querySelector(r(u)) : null,
        f = u => { if (!d(u) || u.getClientRects().length === 0) return !1; let p = getComputedStyle(u).getPropertyValue("visibility") === "visible",
            h = u.closest("details:not([open])"); if (!h) return p; if (h !== u) { let A = u.closest("summary"); if (A && A.parentNode !== h || A === null) return !1 } return p },
        v = u => !u || u.nodeType !== Node.ELEMENT_NODE || u.classList.contains("disabled") ? !0 : typeof u.disabled < "u" ? u.disabled : u.hasAttribute("disabled") && u.getAttribute("disabled") !== "false",
        y = u => { if (!document.documentElement.attachShadow) return null; if (typeof u.getRootNode == "function") { let p = u.getRootNode(); return p instanceof ShadowRoot ? p : null } return u instanceof ShadowRoot ? u : u.parentNode ? y(u.parentNode) : null },
        T = () => {},
        E = u => { u.offsetHeight },
        _ = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
        S = [],
        O = u => { document.readyState === "loading" ? (S.length || document.addEventListener("DOMContentLoaded", () => { for (let p of S) p() }), S.push(u)) : u() },
        D = () => document.documentElement.dir === "rtl",
        m = u => { O(() => { let p = _(); if (p) { let h = u.NAME,
                A = p.fn[h];
              p.fn[h] = u.jQueryInterface, p.fn[h].Constructor = u, p.fn[h].noConflict = () => (p.fn[h] = A, u.jQueryInterface) } }) },
        g = (u, p = [], h = u) => typeof u == "function" ? u(...p) : h,
        b = (u, p, h = !0) => { if (!h) { g(u); return } let x = s(p) + 5,
            M = !1,
            k = ({ target: I }) => { I === p && (M = !0, p.removeEventListener(o, k), g(u)) };
          p.addEventListener(o, k), setTimeout(() => { M || c(p) }, x) },
        w = (u, p, h, A) => { let x = u.length,
            M = u.indexOf(p); return M === -1 ? !h && A ? u[x - 1] : u[0] : (M += h ? 1 : -1, A && (M = (M + x) % x), u[Math.max(0, Math.min(M, x - 1))]) };
      e.defineJQueryPlugin = m, e.execute = g, e.executeAfterTransition = b, e.findShadowRoot = y, e.getElement = l, e.getNextActiveElement = w, e.getTransitionDurationFromElement = s, e.getUID = a, e.getjQuery = _, e.isDisabled = v, e.isElement = d, e.isRTL = D, e.isVisible = f, e.noop = T, e.onDOMContentLoaded = O, e.parseSelector = r, e.reflow = E, e.toType = i, e.triggerTransitionEnd = c, Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }) }) }); var me = j((Ze, et) => {
    (function(e, t) { typeof Ze == "object" && typeof et < "u" ? et.exports = t(ne()) : typeof define == "function" && define.amd ? define(["../util/index"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.EventHandler = t(e.Index)) })(Ze, function(e) { "use strict"; let t = /[^.]*(?=\..*)\.|.*/,
        n = /\..*/,
        o = /::\d+$/,
        r = {},
        i = 1,
        a = { mouseenter: "mouseover", mouseleave: "mouseout" },
        s = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

      function c(m, g) { return g && "".concat(g, "::").concat(i++) || m.uidEvent || i++ }

      function d(m) { let g = c(m); return m.uidEvent = g, r[g] = r[g] || {}, r[g] }

      function l(m, g) { return function b(w) { return D(w, { delegateTarget: m }), b.oneOff && O.off(m, w.type, g), g.apply(m, [w]) } }

      function f(m, g, b) { return function w(u) { let p = m.querySelectorAll(g); for (let { target: h } = u; h && h !== this; h = h.parentNode)
            for (let A of p)
              if (A === h) return D(u, { delegateTarget: h }), w.oneOff && O.off(m, u.type, g, b), b.apply(h, [u]) } }

      function v(m, g, b = null) { return Object.values(m).find(w => w.callable === g && w.delegationSelector === b) }

      function y(m, g, b) { let w = typeof g == "string",
          u = w ? b : g || b,
          p = S(m); return s.has(p) || (p = m), [w, u, p] }

      function T(m, g, b, w, u) { if (typeof g != "string" || !m) return; let [p, h, A] = y(g, b, w);
        g in a && (h = (Y => function(C) { if (!C.relatedTarget || C.relatedTarget !== C.delegateTarget && !C.delegateTarget.contains(C.relatedTarget)) return Y.call(this, C) })(h)); let x = d(m),
          M = x[A] || (x[A] = {}),
          k = v(M, h, p ? b : null); if (k) { k.oneOff = k.oneOff && u; return } let I = c(h, g.replace(t, "")),
          N = p ? f(m, b, h) : l(m, h);
        N.delegationSelector = p ? b : null, N.callable = h, N.oneOff = u, N.uidEvent = I, M[I] = N, m.addEventListener(A, N, p) }

      function E(m, g, b, w, u) { let p = v(g[b], w, u);
        p && (m.removeEventListener(b, p, !!u), delete g[b][p.uidEvent]) }

      function _(m, g, b, w) { let u = g[b] || {}; for (let [p, h] of Object.entries(u)) p.includes(w) && E(m, g, b, h.callable, h.delegationSelector) }

      function S(m) { return m = m.replace(n, ""), a[m] || m } let O = { on(m, g, b, w) { T(m, g, b, w, !1) }, one(m, g, b, w) { T(m, g, b, w, !0) }, off(m, g, b, w) { if (typeof g != "string" || !m) return; let [u, p, h] = y(g, b, w), A = h !== g, x = d(m), M = x[h] || {}, k = g.startsWith("."); if (typeof p < "u") { if (!Object.keys(M).length) return;
            E(m, x, h, p, u ? b : null); return } if (k)
            for (let I of Object.keys(x)) _(m, x, I, g.slice(1)); for (let [I, N] of Object.entries(M)) { let H = I.replace(o, "");
            (!A || g.includes(H)) && E(m, x, h, N.callable, N.delegationSelector) } }, trigger(m, g, b) { if (typeof g != "string" || !m) return null; let w = e.getjQuery(),
            u = S(g),
            p = g !== u,
            h = null,
            A = !0,
            x = !0,
            M = !1;
          p && w && (h = w.Event(g, b), w(m).trigger(h), A = !h.isPropagationStopped(), x = !h.isImmediatePropagationStopped(), M = h.isDefaultPrevented()); let k = D(new Event(g, { bubbles: A, cancelable: !0 }), b); return M && k.preventDefault(), x && m.dispatchEvent(k), k.defaultPrevented && h && h.preventDefault(), k } };

      function D(m, g = {}) { for (let [b, w] of Object.entries(g)) try { m[b] = w } catch (u) { Object.defineProperty(m, b, { configurable: !0, get() { return w } }) }
        return m } return O }) }); var Ie = j((tt, nt) => {
    (function(e, t) { typeof tt == "object" && typeof nt < "u" ? nt.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.Manipulator = t()) })(tt, function() { "use strict";

      function e(o) { if (o === "true") return !0; if (o === "false") return !1; if (o === Number(o).toString()) return Number(o); if (o === "" || o === "null") return null; if (typeof o != "string") return o; try { return JSON.parse(decodeURIComponent(o)) } catch (r) { return o } }

      function t(o) { return o.replace(/[A-Z]/g, r => "-".concat(r.toLowerCase())) } return { setDataAttribute(o, r, i) { o.setAttribute("data-bs-".concat(t(r)), i) }, removeDataAttribute(o, r) { o.removeAttribute("data-bs-".concat(t(r))) }, getDataAttributes(o) { if (!o) return {}; let r = {},
            i = Object.keys(o.dataset).filter(a => a.startsWith("bs") && !a.startsWith("bsConfig")); for (let a of i) { let s = a.replace(/^bs/, "");
            s = s.charAt(0).toLowerCase() + s.slice(1, s.length), r[s] = e(o.dataset[a]) } return r }, getDataAttribute(o, r) { return e(o.getAttribute("data-bs-".concat(t(r)))) } } }) }); var Re = j((rt, ot) => {
    (function(e, t) { typeof rt == "object" && typeof ot < "u" ? ot.exports = t(Ie(), ne()) : typeof define == "function" && define.amd ? define(["../dom/manipulator", "./index"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.Config = t(e.Manipulator, e.Index)) })(rt, function(e, t) { "use strict";
      class n { static get Default() { return {} } static get DefaultType() { return {} } static get NAME() { throw new Error('You have to implement the static method "NAME", for each component!') } _getConfig(r) { return r = this._mergeConfigObj(r), r = this._configAfterMerge(r), this._typeCheckConfig(r), r } _configAfterMerge(r) { return r } _mergeConfigObj(r, i) { let a = t.isElement(i) ? e.getDataAttribute(i, "config") : {}; return te(te(te(te({}, this.constructor.Default), typeof a == "object" ? a : {}), t.isElement(i) ? e.getDataAttributes(i) : {}), typeof r == "object" ? r : {}) } _typeCheckConfig(r, i = this.constructor.DefaultType) { for (let [a, s] of Object.entries(i)) { let c = r[a],
              d = t.isElement(c) ? "element" : t.toType(c); if (!new RegExp(s).test(d)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ': Option "').concat(a, '" provided type "').concat(d, '" but expected type "').concat(s, '".')) } } } return n }) }); var at = j((it, st) => {
    (function(e, t) { typeof it == "object" && typeof st < "u" ? st.exports = t(Gt(), me(), Re(), ne()) : typeof define == "function" && define.amd ? define(["./dom/data", "./dom/event-handler", "./util/config", "./util/index"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.BaseComponent = t(e.Data, e.EventHandler, e.Config, e.Index)) })(it, function(e, t, n, o) { "use strict"; let r = "5.3.3";
      class i extends n { constructor(s, c) { super(), s = o.getElement(s), s && (this._element = s, this._config = this._getConfig(c), e.set(this._element, this.constructor.DATA_KEY, this)) } dispose() { e.remove(this._element, this.constructor.DATA_KEY), t.off(this._element, this.constructor.EVENT_KEY); for (let s of Object.getOwnPropertyNames(this)) this[s] = null } _queueCallback(s, c, d = !0) { o.executeAfterTransition(s, c, d) } _getConfig(s) { return s = this._mergeConfigObj(s, this._element), s = this._configAfterMerge(s), this._typeCheckConfig(s), s } static getInstance(s) { return e.get(o.getElement(s), this.DATA_KEY) } static getOrCreateInstance(s, c = {}) { return this.getInstance(s) || new this(s, typeof c == "object" ? c : null) } static get VERSION() { return r } static get DATA_KEY() { return "bs.".concat(this.NAME) } static get EVENT_KEY() { return ".".concat(this.DATA_KEY) } static eventName(s) { return "".concat(s).concat(this.EVENT_KEY) } } return i }) }); var be = j((ct, lt) => {
    (function(e, t) { typeof ct == "object" && typeof lt < "u" ? lt.exports = t(ne()) : typeof define == "function" && define.amd ? define(["../util/index"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.SelectorEngine = t(e.Index)) })(ct, function(e) { "use strict"; let t = o => { let r = o.getAttribute("data-bs-target"); if (!r || r === "#") { let i = o.getAttribute("href"); if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = "#".concat(i.split("#")[1])), r = i && i !== "#" ? i.trim() : null } return r ? r.split(",").map(i => e.parseSelector(i)).join(",") : null },
        n = { find(o, r = document.documentElement) { return [].concat(...Element.prototype.querySelectorAll.call(r, o)) }, findOne(o, r = document.documentElement) { return Element.prototype.querySelector.call(r, o) }, children(o, r) { return [].concat(...o.children).filter(i => i.matches(r)) }, parents(o, r) { let i = [],
              a = o.parentNode.closest(r); for (; a;) i.push(a), a = a.parentNode.closest(r); return i }, prev(o, r) { let i = o.previousElementSibling; for (; i;) { if (i.matches(r)) return [i];
              i = i.previousElementSibling } return [] }, next(o, r) { let i = o.nextElementSibling; for (; i;) { if (i.matches(r)) return [i];
              i = i.nextElementSibling } return [] }, focusableChildren(o) { let r = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(i => "".concat(i, ':not([tabindex^="-"])')).join(","); return this.find(r, o).filter(i => !e.isDisabled(i) && e.isVisible(i)) }, getSelectorFromElement(o) { let r = t(o); return r && n.findOne(r) ? r : null }, getElementFromSelector(o) { let r = t(o); return r ? n.findOne(r) : null }, getMultipleElementsFromSelector(o) { let r = t(o); return r ? n.find(r) : [] } }; return n }) }); var Qt = j((ut, dt) => {
    (function(e, t) { typeof ut == "object" && typeof dt < "u" ? dt.exports = t(me(), Re(), ne()) : typeof define == "function" && define.amd ? define(["../dom/event-handler", "./config", "./index"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.Backdrop = t(e.EventHandler, e.Config, e.Index)) })(ut, function(e, t, n) { "use strict"; let o = "backdrop",
        r = "fade",
        i = "show",
        a = "mousedown.bs.".concat(o),
        s = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" },
        c = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
      class d extends t { constructor(f) { super(), this._config = this._getConfig(f), this._isAppended = !1, this._element = null } static get Default() { return s } static get DefaultType() { return c } static get NAME() { return o } show(f) { if (!this._config.isVisible) { n.execute(f); return } this._append(); let v = this._getElement();
          this._config.isAnimated && n.reflow(v), v.classList.add(i), this._emulateAnimation(() => { n.execute(f) }) } hide(f) { if (!this._config.isVisible) { n.execute(f); return } this._getElement().classList.remove(i), this._emulateAnimation(() => { this.dispose(), n.execute(f) }) } dispose() { this._isAppended && (e.off(this._element, a), this._element.remove(), this._isAppended = !1) } _getElement() { if (!this._element) { let f = document.createElement("div");
            f.className = this._config.className, this._config.isAnimated && f.classList.add(r), this._element = f } return this._element } _configAfterMerge(f) { return f.rootElement = n.getElement(f.rootElement), f } _append() { if (this._isAppended) return; let f = this._getElement();
          this._config.rootElement.append(f), e.on(f, a, () => { n.execute(this._config.clickCallback) }), this._isAppended = !0 } _emulateAnimation(f) { n.executeAfterTransition(f, this._getElement(), this._config.isAnimated) } } return d }) }); var Zt = j((Be, Xt) => {
    (function(e, t) { typeof Be == "object" && typeof Xt < "u" ? t(Be, me(), be(), ne()) : typeof define == "function" && define.amd ? define(["exports", "../dom/event-handler", "../dom/selector-engine", "./index"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, t(e.ComponentFunctions = {}, e.EventHandler, e.SelectorEngine, e.Index)) })(Be, function(e, t, n, o) { "use strict"; let r = (i, a = "hide") => { let s = "click.dismiss".concat(i.EVENT_KEY),
          c = i.NAME;
        t.on(document, s, '[data-bs-dismiss="'.concat(c, '"]'), function(d) { if (["A", "AREA"].includes(this.tagName) && d.preventDefault(), o.isDisabled(this)) return; let l = n.getElementFromSelector(this) || this.closest(".".concat(c));
          i.getOrCreateInstance(l)[a]() }) };
      e.enableDismissTrigger = r, Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }) }) }); var en = j((ft, pt) => {
    (function(e, t) { typeof ft == "object" && typeof pt < "u" ? pt.exports = t(me(), be(), Re()) : typeof define == "function" && define.amd ? define(["../dom/event-handler", "../dom/selector-engine", "./config"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.Focustrap = t(e.EventHandler, e.SelectorEngine, e.Config)) })(ft, function(e, t, n) { "use strict"; let o = "focustrap",
        i = ".".concat("bs.focustrap"),
        a = "focusin".concat(i),
        s = "keydown.tab".concat(i),
        c = "Tab",
        d = "forward",
        l = "backward",
        f = { autofocus: !0, trapElement: null },
        v = { autofocus: "boolean", trapElement: "element" };
      class y extends n { constructor(E) { super(), this._config = this._getConfig(E), this._isActive = !1, this._lastTabNavDirection = null } static get Default() { return f } static get DefaultType() { return v } static get NAME() { return o } activate() { this._isActive || (this._config.autofocus && this._config.trapElement.focus(), e.off(document, i), e.on(document, a, E => this._handleFocusin(E)), e.on(document, s, E => this._handleKeydown(E)), this._isActive = !0) } deactivate() { this._isActive && (this._isActive = !1, e.off(document, i)) } _handleFocusin(E) { let { trapElement: _ } = this._config; if (E.target === document || E.target === _ || _.contains(E.target)) return; let S = t.focusableChildren(_);
          S.length === 0 ? _.focus() : this._lastTabNavDirection === l ? S[S.length - 1].focus() : S[0].focus() } _handleKeydown(E) { E.key === c && (this._lastTabNavDirection = E.shiftKey ? l : d) } } return y }) }); var tn = j((mt, ht) => {
    (function(e, t) { typeof mt == "object" && typeof ht < "u" ? ht.exports = t(Ie(), be(), ne()) : typeof define == "function" && define.amd ? define(["../dom/manipulator", "../dom/selector-engine", "./index"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.Scrollbar = t(e.Manipulator, e.SelectorEngine, e.Index)) })(mt, function(e, t, n) { "use strict"; let o = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        r = ".sticky-top",
        i = "padding-right",
        a = "margin-right";
      class s { constructor() { this._element = document.body } getWidth() { let d = document.documentElement.clientWidth; return Math.abs(window.innerWidth - d) } hide() { let d = this.getWidth();
          this._disableOverFlow(), this._setElementAttributes(this._element, i, l => l + d), this._setElementAttributes(o, i, l => l + d), this._setElementAttributes(r, a, l => l - d) } reset() { this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, i), this._resetElementAttributes(o, i), this._resetElementAttributes(r, a) } isOverflowing() { return this.getWidth() > 0 } _disableOverFlow() { this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden" } _setElementAttributes(d, l, f) { let v = this.getWidth(),
            y = T => { if (T !== this._element && window.innerWidth > T.clientWidth + v) return;
              this._saveInitialAttribute(T, l); let E = window.getComputedStyle(T).getPropertyValue(l);
              T.style.setProperty(l, "".concat(f(Number.parseFloat(E)), "px")) };
          this._applyManipulationCallback(d, y) } _saveInitialAttribute(d, l) { let f = d.style.getPropertyValue(l);
          f && e.setDataAttribute(d, l, f) } _resetElementAttributes(d, l) { let f = v => { let y = e.getDataAttribute(v, l); if (y === null) { v.style.removeProperty(l); return } e.removeDataAttribute(v, l), v.style.setProperty(l, y) };
          this._applyManipulationCallback(d, f) } _applyManipulationCallback(d, l) { if (n.isElement(d)) { l(d); return } for (let f of t.find(d, this._element)) l(f) } } return s }) }); var yt = j((gt, vt) => {
    (function(e, t) { typeof gt == "object" && typeof vt < "u" ? vt.exports = t(at(), me(), be(), Qt(), Zt(), en(), ne(), tn()) : typeof define == "function" && define.amd ? define(["./base-component", "./dom/event-handler", "./dom/selector-engine", "./util/backdrop", "./util/component-functions", "./util/focustrap", "./util/index", "./util/scrollbar"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.Modal = t(e.BaseComponent, e.EventHandler, e.SelectorEngine, e.Backdrop, e.ComponentFunctions, e.Focustrap, e.Index, e.Scrollbar)) })(gt, function(e, t, n, o, r, i, a, s) { "use strict"; let c = "modal",
        l = ".".concat("bs.modal"),
        f = ".data-api",
        v = "Escape",
        y = "hide".concat(l),
        T = "hidePrevented".concat(l),
        E = "hidden".concat(l),
        _ = "show".concat(l),
        S = "shown".concat(l),
        O = "resize".concat(l),
        D = "click.dismiss".concat(l),
        m = "mousedown.dismiss".concat(l),
        g = "keydown.dismiss".concat(l),
        b = "click".concat(l).concat(f),
        w = "modal-open",
        u = "fade",
        p = "show",
        h = "modal-static",
        A = ".modal.show",
        x = ".modal-dialog",
        M = ".modal-body",
        k = '[data-bs-toggle="modal"]',
        I = { backdrop: !0, focus: !0, keyboard: !0 },
        N = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
      class H extends e { constructor(C, P) { super(C, P), this._dialog = n.findOne(x, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new s, this._addEventListeners() } static get Default() { return I } static get DefaultType() { return N } static get NAME() { return c } toggle(C) { return this._isShown ? this.hide() : this.show(C) } show(C) { this._isShown || this._isTransitioning || t.trigger(this._element, _, { relatedTarget: C }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(w), this._adjustDialog(), this._backdrop.show(() => this._showElement(C))) } hide() {!this._isShown || this._isTransitioning || t.trigger(this._element, y).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(p), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())) } dispose() { t.off(window, l), t.off(this._dialog, l), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() } handleUpdate() { this._adjustDialog() } _initializeBackDrop() { return new o({ isVisible: !!this._config.backdrop, isAnimated: this._isAnimated() }) } _initializeFocusTrap() { return new i({ trapElement: this._element }) } _showElement(C) { document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0; let P = n.findOne(M, this._dialog);
          P && (P.scrollTop = 0), a.reflow(this._element), this._element.classList.add(p); let R = () => { this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, t.trigger(this._element, S, { relatedTarget: C }) };
          this._queueCallback(R, this._dialog, this._isAnimated()) } _addEventListeners() { t.on(this._element, g, C => { if (C.key === v) { if (this._config.keyboard) { this.hide(); return } this._triggerBackdropTransition() } }), t.on(window, O, () => { this._isShown && !this._isTransitioning && this._adjustDialog() }), t.on(this._element, m, C => { t.one(this._element, D, P => { if (!(this._element !== C.target || this._element !== P.target)) { if (this._config.backdrop === "static") { this._triggerBackdropTransition(); return } this._config.backdrop && this.hide() } }) }) } _hideModal() { this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => { document.body.classList.remove(w), this._resetAdjustments(), this._scrollBar.reset(), t.trigger(this._element, E) }) } _isAnimated() { return this._element.classList.contains(u) } _triggerBackdropTransition() { if (t.trigger(this._element, T).defaultPrevented) return; let P = this._element.scrollHeight > document.documentElement.clientHeight,
            R = this._element.style.overflowY;
          R === "hidden" || this._element.classList.contains(h) || (P || (this._element.style.overflowY = "hidden"), this._element.classList.add(h), this._queueCallback(() => { this._element.classList.remove(h), this._queueCallback(() => { this._element.style.overflowY = R }, this._dialog) }, this._dialog), this._element.focus()) } _adjustDialog() { let C = this._element.scrollHeight > document.documentElement.clientHeight,
            P = this._scrollBar.getWidth(),
            R = P > 0; if (R && !C) { let K = a.isRTL() ? "paddingLeft" : "paddingRight";
            this._element.style[K] = "".concat(P, "px") } if (!R && C) { let K = a.isRTL() ? "paddingRight" : "paddingLeft";
            this._element.style[K] = "".concat(P, "px") } } _resetAdjustments() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" } static jQueryInterface(C, P) { return this.each(function() { let R = H.getOrCreateInstance(this, C); if (typeof C == "string") { if (typeof R[C] > "u") throw new TypeError('No method named "'.concat(C, '"'));
              R[C](P) } }) } } return t.on(document, b, k, function(Y) { let C = n.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && Y.preventDefault(), t.one(C, _, K => { K.defaultPrevented || t.one(C, E, () => { a.isVisible(this) && this.focus() }) }); let P = n.findOne(A);
        P && H.getInstance(P).hide(), H.getOrCreateInstance(C).toggle(this) }), r.enableDismissTrigger(H), a.defineJQueryPlugin(H), H }) }); var Zn = j(V => { "use strict";
    Object.defineProperty(V, "__esModule", { value: !0 });

    function z(e) { if (e == null) return window; if (e.toString() !== "[object Window]") { var t = e.ownerDocument; return t && t.defaultView || window } return e }

    function ve(e) { var t = z(e).Element; return e instanceof t || e instanceof Element }

    function G(e) { var t = z(e).HTMLElement; return e instanceof t || e instanceof HTMLElement }

    function Tt(e) { if (typeof ShadowRoot > "u") return !1; var t = z(e).ShadowRoot; return e instanceof t || e instanceof ShadowRoot } var ge = Math.max,
      Ye = Math.min,
      Le = Math.round;

    function Lt() { var e = navigator.userAgentData; return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) { return t.brand + "/" + t.version }).join(" ") : navigator.userAgent }

    function Rn() { return !/^((?!chrome|android).)*safari/i.test(Lt()) }

    function _e(e, t, n) { t === void 0 && (t = !1), n === void 0 && (n = !1); var o = e.getBoundingClientRect(),
        r = 1,
        i = 1;
      t && G(e) && (r = e.offsetWidth > 0 && Le(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Le(o.height) / e.offsetHeight || 1); var a = ve(e) ? z(e) : window,
        s = a.visualViewport,
        c = !Rn() && n,
        d = (o.left + (c && s ? s.offsetLeft : 0)) / r,
        l = (o.top + (c && s ? s.offsetTop : 0)) / i,
        f = o.width / r,
        v = o.height / i; return { width: f, height: v, top: l, right: d + f, bottom: l + v, left: d, x: d, y: l } }

    function wt(e) { var t = z(e),
        n = t.pageXOffset,
        o = t.pageYOffset; return { scrollLeft: n, scrollTop: o } }

    function br(e) { return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } }

    function Lr(e) { return e === z(e) || !G(e) ? wt(e) : br(e) }

    function ie(e) { return e ? (e.nodeName || "").toLowerCase() : null }

    function de(e) { return ((ve(e) ? e.ownerDocument : e.document) || window.document).documentElement }

    function At(e) { return _e(de(e)).left + wt(e).scrollLeft }

    function ce(e) { return z(e).getComputedStyle(e) }

    function St(e) { var t = ce(e),
        n = t.overflow,
        o = t.overflowX,
        r = t.overflowY; return /auto|scroll|overlay|hidden/.test(n + r + o) }

    function _r(e) { var t = e.getBoundingClientRect(),
        n = Le(t.width) / e.offsetWidth || 1,
        o = Le(t.height) / e.offsetHeight || 1; return n !== 1 || o !== 1 }

    function Tr(e, t, n) { n === void 0 && (n = !1); var o = G(t),
        r = G(t) && _r(t),
        i = de(t),
        a = _e(e, r, n),
        s = { scrollLeft: 0, scrollTop: 0 },
        c = { x: 0, y: 0 }; return (o || !o && !n) && ((ie(t) !== "body" || St(i)) && (s = Lr(t)), G(t) ? (c = _e(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = At(i))), { x: a.left + s.scrollLeft - c.x, y: a.top + s.scrollTop - c.y, width: a.width, height: a.height } }

    function Mt(e) { var t = _e(e),
        n = e.offsetWidth,
        o = e.offsetHeight; return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o } }

    function Ke(e) { return ie(e) === "html" ? e : e.assignedSlot || e.parentNode || (Tt(e) ? e.host : null) || de(e) }

    function Bn(e) { return ["html", "body", "#document"].indexOf(ie(e)) >= 0 ? e.ownerDocument.body : G(e) && St(e) ? e : Bn(Ke(e)) }

    function Ce(e, t) { var n;
      t === void 0 && (t = []); var o = Bn(e),
        r = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
        i = z(o),
        a = r ? [i].concat(i.visualViewport || [], St(o) ? o : []) : o,
        s = t.concat(a); return r ? s : s.concat(Ce(Ke(a))) }

    function wr(e) { return ["table", "td", "th"].indexOf(ie(e)) >= 0 }

    function Cn(e) { return !G(e) || ce(e).position === "fixed" ? null : e.offsetParent }

    function Ar(e) { var t = /firefox/i.test(Lt()),
        n = /Trident/i.test(Lt()); if (n && G(e)) { var o = ce(e); if (o.position === "fixed") return null } var r = Ke(e); for (Tt(r) && (r = r.host); G(r) && ["html", "body"].indexOf(ie(r)) < 0;) { var i = ce(r); if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return r;
        r = r.parentNode } return null }

    function ke(e) { for (var t = z(e), n = Cn(e); n && wr(n) && ce(n).position === "static";) n = Cn(n); return n && (ie(n) === "html" || ie(n) === "body" && ce(n).position === "static") ? t : n || Ar(e) || t } var F = "top",
      J = "bottom",
      Q = "right",
      W = "left",
      Ot = "auto",
      Ne = [F, J, Q, W],
      Te = "start",
      De = "end",
      Sr = "clippingParents",
      $n = "viewport",
      Oe = "popper",
      Mr = "reference",
      xn = Ne.reduce(function(e, t) { return e.concat([t + "-" + Te, t + "-" + De]) }, []),
      Vn = [].concat(Ne, [Ot]).reduce(function(e, t) { return e.concat([t, t + "-" + Te, t + "-" + De]) }, []),
      Or = "beforeRead",
      Cr = "read",
      xr = "afterRead",
      Dr = "beforeMain",
      kr = "main",
      Nr = "afterMain",
      qr = "beforeWrite",
      Hr = "write",
      Pr = "afterWrite",
      Ir = [Or, Cr, xr, Dr, kr, Nr, qr, Hr, Pr];

    function Rr(e) { var t = new Map,
        n = new Set,
        o = [];
      e.forEach(function(i) { t.set(i.name, i) });

      function r(i) { n.add(i.name); var a = [].concat(i.requires || [], i.requiresIfExists || []);
        a.forEach(function(s) { if (!n.has(s)) { var c = t.get(s);
            c && r(c) } }), o.push(i) } return e.forEach(function(i) { n.has(i.name) || r(i) }), o }

    function Br(e) { var t = Rr(e); return Ir.reduce(function(n, o) { return n.concat(t.filter(function(r) { return r.phase === o })) }, []) }

    function $r(e) { var t; return function() { return t || (t = new Promise(function(n) { Promise.resolve().then(function() { t = void 0, n(e()) }) })), t } }

    function Vr(e) { var t = e.reduce(function(n, o) { var r = n[o.name]; return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n }, {}); return Object.keys(t).map(function(n) { return t[n] }) }

    function jr(e, t) { var n = z(e),
        o = de(e),
        r = n.visualViewport,
        i = o.clientWidth,
        a = o.clientHeight,
        s = 0,
        c = 0; if (r) { i = r.width, a = r.height; var d = Rn();
        (d || !d && t === "fixed") && (s = r.offsetLeft, c = r.offsetTop) } return { width: i, height: a, x: s + At(e), y: c } }

    function Fr(e) { var t, n = de(e),
        o = wt(e),
        r = (t = e.ownerDocument) == null ? void 0 : t.body,
        i = ge(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
        a = ge(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
        s = -o.scrollLeft + At(e),
        c = -o.scrollTop; return ce(r || n).direction === "rtl" && (s += ge(n.clientWidth, r ? r.clientWidth : 0) - i), { width: i, height: a, x: s, y: c } }

    function jn(e, t) { var n = t.getRootNode && t.getRootNode(); if (e.contains(t)) return !0; if (n && Tt(n)) { var o = t;
        do { if (o && e.isSameNode(o)) return !0;
          o = o.parentNode || o.host } while (o) } return !1 }

    function _t(e) { return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }) }

    function Wr(e, t) { var n = _e(e, !1, t === "fixed"); return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n }

    function Dn(e, t, n) { return t === $n ? _t(jr(e, n)) : ve(t) ? Wr(t, n) : _t(Fr(de(e))) }

    function Yr(e) { var t = Ce(Ke(e)),
        n = ["absolute", "fixed"].indexOf(ce(e).position) >= 0,
        o = n && G(e) ? ke(e) : e; return ve(o) ? t.filter(function(r) { return ve(r) && jn(r, o) && ie(r) !== "body" }) : [] }

    function Kr(e, t, n, o) { var r = t === "clippingParents" ? Yr(e) : [].concat(t),
        i = [].concat(r, [n]),
        a = i[0],
        s = i.reduce(function(c, d) { var l = Dn(e, d, o); return c.top = ge(l.top, c.top), c.right = Ye(l.right, c.right), c.bottom = Ye(l.bottom, c.bottom), c.left = ge(l.left, c.left), c }, Dn(e, a, o)); return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s }

    function oe(e) { return e.split("-")[0] }

    function we(e) { return e.split("-")[1] }

    function Ct(e) { return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y" }

    function Fn(e) { var t = e.reference,
        n = e.element,
        o = e.placement,
        r = o ? oe(o) : null,
        i = o ? we(o) : null,
        a = t.x + t.width / 2 - n.width / 2,
        s = t.y + t.height / 2 - n.height / 2,
        c; switch (r) {
        case F:
          c = { x: a, y: t.y - n.height }; break;
        case J:
          c = { x: a, y: t.y + t.height }; break;
        case Q:
          c = { x: t.x + t.width, y: s }; break;
        case W:
          c = { x: t.x - n.width, y: s }; break;
        default:
          c = { x: t.x, y: t.y } } var d = r ? Ct(r) : null; if (d != null) { var l = d === "y" ? "height" : "width"; switch (i) {
          case Te:
            c[d] = c[d] - (t[l] / 2 - n[l] / 2); break;
          case De:
            c[d] = c[d] + (t[l] / 2 - n[l] / 2); break } } return c }

    function Wn() { return { top: 0, right: 0, bottom: 0, left: 0 } }

    function Yn(e) { return Object.assign({}, Wn(), e) }

    function Kn(e, t) { return t.reduce(function(n, o) { return n[o] = e, n }, {}) }

    function Ae(e, t) { t === void 0 && (t = {}); var n = t,
        o = n.placement,
        r = o === void 0 ? e.placement : o,
        i = n.strategy,
        a = i === void 0 ? e.strategy : i,
        s = n.boundary,
        c = s === void 0 ? Sr : s,
        d = n.rootBoundary,
        l = d === void 0 ? $n : d,
        f = n.elementContext,
        v = f === void 0 ? Oe : f,
        y = n.altBoundary,
        T = y === void 0 ? !1 : y,
        E = n.padding,
        _ = E === void 0 ? 0 : E,
        S = Yn(typeof _ != "number" ? _ : Kn(_, Ne)),
        O = v === Oe ? Mr : Oe,
        D = e.rects.popper,
        m = e.elements[T ? O : v],
        g = Kr(ve(m) ? m : m.contextElement || de(e.elements.popper), c, l, a),
        b = _e(e.elements.reference),
        w = Fn({ reference: b, element: D, strategy: "absolute", placement: r }),
        u = _t(Object.assign({}, D, w)),
        p = v === Oe ? u : b,
        h = { top: g.top - p.top + S.top, bottom: p.bottom - g.bottom + S.bottom, left: g.left - p.left + S.left, right: p.right - g.right + S.right },
        A = e.modifiersData.offset; if (v === Oe && A) { var x = A[r];
        Object.keys(h).forEach(function(M) { var k = [Q, J].indexOf(M) >= 0 ? 1 : -1,
            I = [F, J].indexOf(M) >= 0 ? "y" : "x";
          h[M] += x[I] * k }) } return h } var kn = { placement: "bottom", modifiers: [], strategy: "absolute" };

    function Nn() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return !t.some(function(o) { return !(o && typeof o.getBoundingClientRect == "function") }) }

    function xt(e) { e === void 0 && (e = {}); var t = e,
        n = t.defaultModifiers,
        o = n === void 0 ? [] : n,
        r = t.defaultOptions,
        i = r === void 0 ? kn : r; return function(s, c, d) { d === void 0 && (d = i); var l = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, kn, i), modifiersData: {}, elements: { reference: s, popper: c }, attributes: {}, styles: {} },
          f = [],
          v = !1,
          y = { state: l, setOptions: function(S) { var O = typeof S == "function" ? S(l.options) : S;
              E(), l.options = Object.assign({}, i, l.options, O), l.scrollParents = { reference: ve(s) ? Ce(s) : s.contextElement ? Ce(s.contextElement) : [], popper: Ce(c) }; var D = Br(Vr([].concat(o, l.options.modifiers))); return l.orderedModifiers = D.filter(function(m) { return m.enabled }), T(), y.update() }, forceUpdate: function() { if (!v) { var S = l.elements,
                  O = S.reference,
                  D = S.popper; if (Nn(O, D)) { l.rects = { reference: Tr(O, ke(D), l.options.strategy === "fixed"), popper: Mt(D) }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(h) { return l.modifiersData[h.name] = Object.assign({}, h.data) }); for (var m = 0; m < l.orderedModifiers.length; m++) { if (l.reset === !0) { l.reset = !1, m = -1; continue } var g = l.orderedModifiers[m],
                      b = g.fn,
                      w = g.options,
                      u = w === void 0 ? {} : w,
                      p = g.name;
                    typeof b == "function" && (l = b({ state: l, options: u, name: p, instance: y }) || l) } } } }, update: $r(function() { return new Promise(function(_) { y.forceUpdate(), _(l) }) }), destroy: function() { E(), v = !0 } }; if (!Nn(s, c)) return y;
        y.setOptions(d).then(function(_) {!v && d.onFirstUpdate && d.onFirstUpdate(_) });

        function T() { l.orderedModifiers.forEach(function(_) { var S = _.name,
              O = _.options,
              D = O === void 0 ? {} : O,
              m = _.effect; if (typeof m == "function") { var g = m({ state: l, name: S, instance: y, options: D }),
                b = function() {};
              f.push(g || b) } }) }

        function E() { f.forEach(function(_) { return _() }), f = [] } return y } } var Fe = { passive: !0 };

    function Ur(e) { var t = e.state,
        n = e.instance,
        o = e.options,
        r = o.scroll,
        i = r === void 0 ? !0 : r,
        a = o.resize,
        s = a === void 0 ? !0 : a,
        c = z(t.elements.popper),
        d = [].concat(t.scrollParents.reference, t.scrollParents.popper); return i && d.forEach(function(l) { l.addEventListener("scroll", n.update, Fe) }), s && c.addEventListener("resize", n.update, Fe),
        function() { i && d.forEach(function(l) { l.removeEventListener("scroll", n.update, Fe) }), s && c.removeEventListener("resize", n.update, Fe) } } var Dt = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {}, effect: Ur, data: {} };

    function zr(e) { var t = e.state,
        n = e.name;
      t.modifiersData[n] = Fn({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement }) } var kt = { name: "popperOffsets", enabled: !0, phase: "read", fn: zr, data: {} },
      Gr = { top: "auto", right: "auto", bottom: "auto", left: "auto" };

    function Jr(e, t) { var n = e.x,
        o = e.y,
        r = t.devicePixelRatio || 1; return { x: Le(n * r) / r || 0, y: Le(o * r) / r || 0 } }

    function qn(e) { var t, n = e.popper,
        o = e.popperRect,
        r = e.placement,
        i = e.variation,
        a = e.offsets,
        s = e.position,
        c = e.gpuAcceleration,
        d = e.adaptive,
        l = e.roundOffsets,
        f = e.isFixed,
        v = a.x,
        y = v === void 0 ? 0 : v,
        T = a.y,
        E = T === void 0 ? 0 : T,
        _ = typeof l == "function" ? l({ x: y, y: E }) : { x: y, y: E };
      y = _.x, E = _.y; var S = a.hasOwnProperty("x"),
        O = a.hasOwnProperty("y"),
        D = W,
        m = F,
        g = window; if (d) { var b = ke(n),
          w = "clientHeight",
          u = "clientWidth"; if (b === z(n) && (b = de(n), ce(b).position !== "static" && s === "absolute" && (w = "scrollHeight", u = "scrollWidth")), b = b, r === F || (r === W || r === Q) && i === De) { m = J; var p = f && b === g && g.visualViewport ? g.visualViewport.height : b[w];
          E -= p - o.height, E *= c ? 1 : -1 } if (r === W || (r === F || r === J) && i === De) { D = Q; var h = f && b === g && g.visualViewport ? g.visualViewport.width : b[u];
          y -= h - o.width, y *= c ? 1 : -1 } } var A = Object.assign({ position: s }, d && Gr),
        x = l === !0 ? Jr({ x: y, y: E }, z(n)) : { x: y, y: E }; if (y = x.x, E = x.y, c) { var M; return Object.assign({}, A, (M = {}, M[m] = O ? "0" : "", M[D] = S ? "0" : "", M.transform = (g.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + E + "px)" : "translate3d(" + y + "px, " + E + "px, 0)", M)) } return Object.assign({}, A, (t = {}, t[m] = O ? E + "px" : "", t[D] = S ? y + "px" : "", t.transform = "", t)) }

    function Qr(e) { var t = e.state,
        n = e.options,
        o = n.gpuAcceleration,
        r = o === void 0 ? !0 : o,
        i = n.adaptive,
        a = i === void 0 ? !0 : i,
        s = n.roundOffsets,
        c = s === void 0 ? !0 : s,
        d = { placement: oe(t.placement), variation: we(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
      t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, qn(Object.assign({}, d, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: c })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, qn(Object.assign({}, d, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }) } var Nt = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Qr, data: {} };

    function Xr(e) { var t = e.state;
      Object.keys(t.elements).forEach(function(n) { var o = t.styles[n] || {},
          r = t.attributes[n] || {},
          i = t.elements[n];!G(i) || !ie(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(a) { var s = r[a];
          s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s) })) }) }

    function Zr(e) { var t = e.state,
        n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function() { Object.keys(t.elements).forEach(function(o) { var r = t.elements[o],
              i = t.attributes[o] || {},
              a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
              s = a.reduce(function(c, d) { return c[d] = "", c }, {});!G(r) || !ie(r) || (Object.assign(r.style, s), Object.keys(i).forEach(function(c) { r.removeAttribute(c) })) }) } } var qt = { name: "applyStyles", enabled: !0, phase: "write", fn: Xr, effect: Zr, requires: ["computeStyles"] };

    function eo(e, t, n) { var o = oe(e),
        r = [W, F].indexOf(o) >= 0 ? -1 : 1,
        i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
        a = i[0],
        s = i[1]; return a = a || 0, s = (s || 0) * r, [W, Q].indexOf(o) >= 0 ? { x: s, y: a } : { x: a, y: s } }

    function to(e) { var t = e.state,
        n = e.options,
        o = e.name,
        r = n.offset,
        i = r === void 0 ? [0, 0] : r,
        a = Vn.reduce(function(l, f) { return l[f] = eo(f, t.rects, i), l }, {}),
        s = a[t.placement],
        c = s.x,
        d = s.y;
      t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = a } var Un = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: to },
      no = { left: "right", right: "left", bottom: "top", top: "bottom" };

    function We(e) { return e.replace(/left|right|bottom|top/g, function(t) { return no[t] }) } var ro = { start: "end", end: "start" };

    function Hn(e) { return e.replace(/start|end/g, function(t) { return ro[t] }) }

    function oo(e, t) { t === void 0 && (t = {}); var n = t,
        o = n.placement,
        r = n.boundary,
        i = n.rootBoundary,
        a = n.padding,
        s = n.flipVariations,
        c = n.allowedAutoPlacements,
        d = c === void 0 ? Vn : c,
        l = we(o),
        f = l ? s ? xn : xn.filter(function(T) { return we(T) === l }) : Ne,
        v = f.filter(function(T) { return d.indexOf(T) >= 0 });
      v.length === 0 && (v = f); var y = v.reduce(function(T, E) { return T[E] = Ae(e, { placement: E, boundary: r, rootBoundary: i, padding: a })[oe(E)], T }, {}); return Object.keys(y).sort(function(T, E) { return y[T] - y[E] }) }

    function io(e) { if (oe(e) === Ot) return []; var t = We(e); return [Hn(e), t, Hn(t)] }

    function so(e) { var t = e.state,
        n = e.options,
        o = e.name; if (!t.modifiersData[o]._skip) { for (var r = n.mainAxis, i = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !0 : a, c = n.fallbackPlacements, d = n.padding, l = n.boundary, f = n.rootBoundary, v = n.altBoundary, y = n.flipVariations, T = y === void 0 ? !0 : y, E = n.allowedAutoPlacements, _ = t.options.placement, S = oe(_), O = S === _, D = c || (O || !T ? [We(_)] : io(_)), m = [_].concat(D).reduce(function(le, Z) { return le.concat(oe(Z) === Ot ? oo(t, { placement: Z, boundary: l, rootBoundary: f, padding: d, flipVariations: T, allowedAutoPlacements: E }) : Z) }, []), g = t.rects.reference, b = t.rects.popper, w = new Map, u = !0, p = m[0], h = 0; h < m.length; h++) { var A = m[h],
            x = oe(A),
            M = we(A) === Te,
            k = [F, J].indexOf(x) >= 0,
            I = k ? "width" : "height",
            N = Ae(t, { placement: A, boundary: l, rootBoundary: f, altBoundary: v, padding: d }),
            H = k ? M ? Q : W : M ? J : F;
          g[I] > b[I] && (H = We(H)); var Y = We(H),
            C = []; if (i && C.push(N[x] <= 0), s && C.push(N[H] <= 0, N[Y] <= 0), C.every(function(le) { return le })) { p = A, u = !1; break } w.set(A, C) } if (u)
          for (var P = T ? 3 : 1, R = function(Z) { var fe = m.find(function(Ee) { var se = w.get(Ee); if (se) return se.slice(0, Z).every(function(Se) { return Se }) }); if (fe) return p = fe, "break" }, K = P; K > 0; K--) { var ye = R(K); if (ye === "break") break } t.placement !== p && (t.modifiersData[o]._skip = !0, t.placement = p, t.reset = !0) } } var zn = { name: "flip", enabled: !0, phase: "main", fn: so, requiresIfExists: ["offset"], data: { _skip: !1 } };

    function ao(e) { return e === "x" ? "y" : "x" }

    function xe(e, t, n) { return ge(e, Ye(t, n)) }

    function co(e, t, n) { var o = xe(e, t, n); return o > n ? n : o }

    function lo(e) { var t = e.state,
        n = e.options,
        o = e.name,
        r = n.mainAxis,
        i = r === void 0 ? !0 : r,
        a = n.altAxis,
        s = a === void 0 ? !1 : a,
        c = n.boundary,
        d = n.rootBoundary,
        l = n.altBoundary,
        f = n.padding,
        v = n.tether,
        y = v === void 0 ? !0 : v,
        T = n.tetherOffset,
        E = T === void 0 ? 0 : T,
        _ = Ae(t, { boundary: c, rootBoundary: d, padding: f, altBoundary: l }),
        S = oe(t.placement),
        O = we(t.placement),
        D = !O,
        m = Ct(S),
        g = ao(m),
        b = t.modifiersData.popperOffsets,
        w = t.rects.reference,
        u = t.rects.popper,
        p = typeof E == "function" ? E(Object.assign({}, t.rects, { placement: t.placement })) : E,
        h = typeof p == "number" ? { mainAxis: p, altAxis: p } : Object.assign({ mainAxis: 0, altAxis: 0 }, p),
        A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        x = { x: 0, y: 0 }; if (b) { if (i) { var M, k = m === "y" ? F : W,
            I = m === "y" ? J : Q,
            N = m === "y" ? "height" : "width",
            H = b[m],
            Y = H + _[k],
            C = H - _[I],
            P = y ? -u[N] / 2 : 0,
            R = O === Te ? w[N] : u[N],
            K = O === Te ? -u[N] : -w[N],
            ye = t.elements.arrow,
            le = y && ye ? Mt(ye) : { width: 0, height: 0 },
            Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Wn(),
            fe = Z[k],
            Ee = Z[I],
            se = xe(0, w[N], le[N]),
            Se = D ? w[N] / 2 - P - se - fe - h.mainAxis : R - se - fe - h.mainAxis,
            U = D ? -w[N] / 2 + P + se + Ee + h.mainAxis : K + se + Ee + h.mainAxis,
            X = t.elements.arrow && ke(t.elements.arrow),
            L = X ? m === "y" ? X.clientTop || 0 : X.clientLeft || 0 : 0,
            q = (M = A == null ? void 0 : A[m]) != null ? M : 0,
            B = H + Se - q - L,
            $ = H + U - q,
            ue = xe(y ? Ye(Y, B) : Y, H, y ? ge(C, $) : C);
          b[m] = ue, x[m] = ue - H } if (s) { var ee, qe = m === "x" ? F : W,
            lr = m === "x" ? J : Q,
            pe = b[g],
            He = g === "y" ? "height" : "width",
            Bt = pe + _[qe],
            $t = pe - _[lr],
            ze = [F, W].indexOf(S) !== -1,
            Vt = (ee = A == null ? void 0 : A[g]) != null ? ee : 0,
            jt = ze ? Bt : pe - w[He] - u[He] - Vt + h.altAxis,
            Ft = ze ? pe + w[He] + u[He] - Vt - h.altAxis : $t,
            Wt = y && ze ? co(jt, pe, Ft) : xe(y ? jt : Bt, pe, y ? Ft : $t);
          b[g] = Wt, x[g] = Wt - pe } t.modifiersData[o] = x } } var Gn = { name: "preventOverflow", enabled: !0, phase: "main", fn: lo, requiresIfExists: ["offset"] },
      uo = function(t, n) { return t = typeof t == "function" ? t(Object.assign({}, n.rects, { placement: n.placement })) : t, Yn(typeof t != "number" ? t : Kn(t, Ne)) };

    function fo(e) { var t, n = e.state,
        o = e.name,
        r = e.options,
        i = n.elements.arrow,
        a = n.modifiersData.popperOffsets,
        s = oe(n.placement),
        c = Ct(s),
        d = [W, Q].indexOf(s) >= 0,
        l = d ? "height" : "width"; if (!(!i || !a)) { var f = uo(r.padding, n),
          v = Mt(i),
          y = c === "y" ? F : W,
          T = c === "y" ? J : Q,
          E = n.rects.reference[l] + n.rects.reference[c] - a[c] - n.rects.popper[l],
          _ = a[c] - n.rects.reference[c],
          S = ke(i),
          O = S ? c === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0,
          D = E / 2 - _ / 2,
          m = f[y],
          g = O - v[l] - f[T],
          b = O / 2 - v[l] / 2 + D,
          w = xe(m, b, g),
          u = c;
        n.modifiersData[o] = (t = {}, t[u] = w, t.centerOffset = w - b, t) } }

    function po(e) { var t = e.state,
        n = e.options,
        o = n.element,
        r = o === void 0 ? "[data-popper-arrow]" : o;
      r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || jn(t.elements.popper, r) && (t.elements.arrow = r)) } var Jn = { name: "arrow", enabled: !0, phase: "main", fn: fo, effect: po, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };

    function Pn(e, t, n) { return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x } }

    function In(e) { return [F, Q, J, W].some(function(t) { return e[t] >= 0 }) }

    function mo(e) { var t = e.state,
        n = e.name,
        o = t.rects.reference,
        r = t.rects.popper,
        i = t.modifiersData.preventOverflow,
        a = Ae(t, { elementContext: "reference" }),
        s = Ae(t, { altBoundary: !0 }),
        c = Pn(a, o),
        d = Pn(s, r, i),
        l = In(c),
        f = In(d);
      t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: d, isReferenceHidden: l, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": l, "data-popper-escaped": f }) } var Qn = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: mo },
      ho = [Dt, kt, Nt, qt],
      go = xt({ defaultModifiers: ho }),
      Xn = [Dt, kt, Nt, qt, Un, zn, Gn, Jn, Qn],
      vo = xt({ defaultModifiers: Xn });
    V.applyStyles = qt;
    V.arrow = Jn;
    V.computeStyles = Nt;
    V.createPopper = vo;
    V.createPopperLite = go;
    V.defaultModifiers = Xn;
    V.detectOverflow = Ae;
    V.eventListeners = Dt;
    V.flip = zn;
    V.hide = Qn;
    V.offset = Un;
    V.popperGenerator = xt;
    V.popperOffsets = kt;
    V.preventOverflow = Gn }); var er = j((Ht, Pt) => {
    (function(e, t) { typeof Ht == "object" && typeof Pt < "u" ? Pt.exports = t(Zn(), at(), me(), Ie(), be(), ne()) : typeof define == "function" && define.amd ? define(["@popperjs/core", "./base-component", "./dom/event-handler", "./dom/manipulator", "./dom/selector-engine", "./util/index"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.Dropdown = t(e["@popperjs/core"], e.BaseComponent, e.EventHandler, e.Manipulator, e.SelectorEngine, e.Index)) })(Ht, function(e, t, n, o, r, i) { "use strict";

      function a(X) { let L = Object.create(null, {
          [Symbol.toStringTag]: { value: "Module" } }); if (X) { for (let q in X)
            if (q !== "default") { let B = Object.getOwnPropertyDescriptor(X, q);
              Object.defineProperty(L, q, B.get ? B : { enumerable: !0, get: () => X[q] }) } } return L.default = X, Object.freeze(L) } let s = a(e),
        c = "dropdown",
        l = ".".concat("bs.dropdown"),
        f = ".data-api",
        v = "Escape",
        y = "Tab",
        T = "ArrowUp",
        E = "ArrowDown",
        _ = 2,
        S = "hide".concat(l),
        O = "hidden".concat(l),
        D = "show".concat(l),
        m = "shown".concat(l),
        g = "click".concat(l).concat(f),
        b = "keydown".concat(l).concat(f),
        w = "keyup".concat(l).concat(f),
        u = "show",
        p = "dropup",
        h = "dropend",
        A = "dropstart",
        x = "dropup-center",
        M = "dropdown-center",
        k = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        I = "".concat(k, ".").concat(u),
        N = ".dropdown-menu",
        H = ".navbar",
        Y = ".navbar-nav",
        C = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        P = i.isRTL() ? "top-end" : "top-start",
        R = i.isRTL() ? "top-start" : "top-end",
        K = i.isRTL() ? "bottom-end" : "bottom-start",
        ye = i.isRTL() ? "bottom-start" : "bottom-end",
        le = i.isRTL() ? "left-start" : "right-start",
        Z = i.isRTL() ? "right-start" : "left-start",
        fe = "top",
        Ee = "bottom",
        se = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" },
        Se = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
      class U extends t { constructor(L, q) { super(L, q), this._popper = null, this._parent = this._element.parentNode, this._menu = r.next(this._element, N)[0] || r.prev(this._element, N)[0] || r.findOne(N, this._parent), this._inNavbar = this._detectNavbar() } static get Default() { return se } static get DefaultType() { return Se } static get NAME() { return c } toggle() { return this._isShown() ? this.hide() : this.show() } show() { if (i.isDisabled(this._element) || this._isShown()) return; let L = { relatedTarget: this._element }; if (!n.trigger(this._element, D, L).defaultPrevented) { if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(Y))
              for (let B of [].concat(...document.body.children)) n.on(B, "mouseover", i.noop);
            this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(u), this._element.classList.add(u), n.trigger(this._element, m, L) } } hide() { if (i.isDisabled(this._element) || !this._isShown()) return; let L = { relatedTarget: this._element };
          this._completeHide(L) } dispose() { this._popper && this._popper.destroy(), super.dispose() } update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update() } _completeHide(L) { if (!n.trigger(this._element, S, L).defaultPrevented) { if ("ontouchstart" in document.documentElement)
              for (let B of [].concat(...document.body.children)) n.off(B, "mouseover", i.noop);
            this._popper && this._popper.destroy(), this._menu.classList.remove(u), this._element.classList.remove(u), this._element.setAttribute("aria-expanded", "false"), o.removeDataAttribute(this._menu, "popper"), n.trigger(this._element, O, L) } } _getConfig(L) { if (L = super._getConfig(L), typeof L.reference == "object" && !i.isElement(L.reference) && typeof L.reference.getBoundingClientRect != "function") throw new TypeError("".concat(c.toUpperCase(), ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.')); return L } _createPopper() { if (typeof s > "u") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)"); let L = this._element;
          this._config.reference === "parent" ? L = this._parent : i.isElement(this._config.reference) ? L = i.getElement(this._config.reference) : typeof this._config.reference == "object" && (L = this._config.reference); let q = this._getPopperConfig();
          this._popper = s.createPopper(L, this._menu, q) } _isShown() { return this._menu.classList.contains(u) } _getPlacement() { let L = this._parent; if (L.classList.contains(h)) return le; if (L.classList.contains(A)) return Z; if (L.classList.contains(x)) return fe; if (L.classList.contains(M)) return Ee; let q = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end"; return L.classList.contains(p) ? q ? R : P : q ? ye : K } _detectNavbar() { return this._element.closest(H) !== null } _getOffset() { let { offset: L } = this._config; return typeof L == "string" ? L.split(",").map(q => Number.parseInt(q, 10)) : typeof L == "function" ? q => L(q, this._element) : L } _getPopperConfig() { let L = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] }; return (this._inNavbar || this._config.display === "static") && (o.setDataAttribute(this._menu, "popper", "static"), L.modifiers = [{ name: "applyStyles", enabled: !1 }]), te(te({}, L), i.execute(this._config.popperConfig, [L])) } _selectMenuItem({ key: L, target: q }) { let B = r.find(C, this._menu).filter($ => i.isVisible($));
          B.length && i.getNextActiveElement(B, q, L === E, !B.includes(q)).focus() } static jQueryInterface(L) { return this.each(function() { let q = U.getOrCreateInstance(this, L); if (typeof L == "string") { if (typeof q[L] > "u") throw new TypeError('No method named "'.concat(L, '"'));
              q[L]() } }) } static clearMenus(L) { if (L.button === _ || L.type === "keyup" && L.key !== y) return; let q = r.find(I); for (let B of q) { let $ = U.getInstance(B); if (!$ || $._config.autoClose === !1) continue; let ue = L.composedPath(),
              ee = ue.includes($._menu); if (ue.includes($._element) || $._config.autoClose === "inside" && !ee || $._config.autoClose === "outside" && ee || $._menu.contains(L.target) && (L.type === "keyup" && L.key === y || /input|select|option|textarea|form/i.test(L.target.tagName))) continue; let qe = { relatedTarget: $._element };
            L.type === "click" && (qe.clickEvent = L), $._completeHide(qe) } } static dataApiKeydownHandler(L) { let q = /input|textarea/i.test(L.target.tagName),
            B = L.key === v,
            $ = [T, E].includes(L.key); if (!$ && !B || q && !B) return;
          L.preventDefault(); let ue = this.matches(k) ? this : r.prev(this, k)[0] || r.next(this, k)[0] || r.findOne(k, L.delegateTarget.parentNode),
            ee = U.getOrCreateInstance(ue); if ($) { L.stopPropagation(), ee.show(), ee._selectMenuItem(L); return } ee._isShown() && (L.stopPropagation(), ee.hide(), ue.focus()) } } return n.on(document, b, k, U.dataApiKeydownHandler), n.on(document, b, N, U.dataApiKeydownHandler), n.on(document, g, U.clearMenus), n.on(document, w, U.clearMenus), n.on(document, g, k, function(X) { X.preventDefault(), U.getOrCreateInstance(this).toggle() }), i.defineJQueryPlugin(U), U }) }); var hi = Je(yt()); var nn = e => { for (let t of document.querySelectorAll(e)) setTimeout(() => { t.focus() }, 200), t.click(), t.dispatchEvent(new Event("trigger")) }; var rn = () => { let e = document.querySelectorAll('[data-flyout="toggle"]'),
      t = document.querySelectorAll('[data-flyout="menu"]'),
      n = document.querySelector(".flyout-overlay"),
      o = document.querySelectorAll(".flyout-close"),
      r = 0,
      i = f => { if (!f) return;
        f.classList.contains("flyout-menu-open") ? s() : a(f) },
      a = f => { d(), f.classList.add("flyout-menu-open"), f.classList.contains("flyout-fade") && nn('.flyout-search input[type="search"]'), c(!0) },
      s = () => { l(), t.forEach(f => { f.classList.remove("flyout-menu-open") }), c(!1) },
      c = f => { let v = document.querySelector(".flyout-overlay");
        v == null || v.classList.toggle("flyout-overlay-active", f) },
      d = () => { r = window.scrollY, document.body.style.top = "-".concat(r, "px"), document.body.classList.add("fixed", "body-locked") },
      l = () => { document.body.style.top = "", document.body.classList.remove("fixed", "body-locked"), window.scrollTo(0, r) };
    e.forEach(f => { f.addEventListener("click", () => { let v = f.getAttribute("data-target"); if (!v) return; let y = document.getElementById(v);
        i(y) }) }), n == null || n.addEventListener("click", s), o.forEach(f => { f.addEventListener("click", s) }) }; var on = () => { let e = document.querySelectorAll(".panel-container"),
      t = n => { let o = 0,
          r = n.querySelectorAll(".panel-next"),
          i = n.querySelectorAll(".panel-previous"),
          a = n.querySelector(".main-panel"),
          s = document.querySelector(".flyout-overlay"),
          c = document.querySelectorAll(".flyout-close"),
          d = document.querySelectorAll(".dropdown");
        s == null || s.addEventListener("click", () => l()), c.forEach(y => { y.addEventListener("click", () => l()) }), d.forEach(y => { y.addEventListener("hide.bs.dropdown", () => l()) }); let l = () => { o = 0, v(), n.style.transform = "translateX(0)", f() },
          f = () => { var T; let y = n.querySelectorAll(".stacked-panels > .panel");
            (T = n.querySelector(".dummy-panel")) == null || T.classList.add("active"); for (let E of y) E.classList.remove("active") },
          v = () => { o > 0 ? a == null || a.classList.add("inactive-main") : a == null || a.classList.remove("inactive-main") }; for (let y of i) y.addEventListener("click", () => { o -= 1, v(); let E = getComputedStyle(document.documentElement).direction === "rtl" ? o * 100 : -o * 100;
          n.style.transform = "translateX(".concat(E, "%)"), f() }); for (let y of r) y.addEventListener("click", T => { var D; let E = T.currentTarget.dataset.panelTarget,
            _ = n.querySelector(".panel.".concat(E)); if (!_) return; if (o += 1, v(), _ && ((D = _.parentElement) != null && D.className.includes("stacked-panels"))) { let m = n.querySelectorAll(".stacked-panels .panel"); for (let g of m) g === _ ? _.classList.add("active") : g.classList.remove("active") } let O = getComputedStyle(document.documentElement).direction === "rtl" ? o * 100 : -o * 100;
          n.style.transform = "translateX(".concat(O, "%)") }) }; for (let n of e) t(n) }; var sn = () => { var o, r; let e = (r = (o = document.querySelector("#header .header-container")) == null ? void 0 : o.offsetHeight) != null ? r : 100,
      t = 10,
      n = 0;
    document.addEventListener("scroll", () => { window.requestAnimationFrame(() => { let i = window.scrollY,
          a = i - n;
        Math.abs(a) <= t || (n <= e ? document.body.classList.remove("nav-up", "nav-down") : a > 0 ? (document.body.classList.add("nav-up"), document.body.classList.remove("nav-down")) : (document.body.classList.add("nav-down"), document.body.classList.remove("nav-up")), n = i) }) }) }; var an = (e, t, n, o = null, r = null) => { let i = document.querySelector(e),
      a = document.querySelector(t); if (!i || !a) return; let s = a.querySelectorAll(n),
      c = () => o ? Array.from(document.querySelectorAll(o)) : [],
      d = () => { let v = i.value || "",
          y = new RegExp(v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"); for (let T of s) T.classList.toggle("hidden", (T.textContent || "").search(y) === -1); for (let T of c()) { let E = T.querySelectorAll(n + ":not(.hidden)").length === 0;
          T.classList.toggle("hidden", E); let _ = (r || "") + (T.dataset.anchor || ""); if (_ === "") continue; let S = document.querySelector(_);
          S && S.classList.toggle("hidden", E) } },
      l = () => { d(), a.scrollTop = 0 },
      f = () => { for (let v of s) v.classList.remove("hidden"); for (let v of c()) { v.classList.remove("hidden"); let y = r || "" + v.dataset.anchor || ""; if (y === "") continue; let T = document.querySelector(y + v.dataset.anchor);
          T && T.classList.remove("hidden") } };
    i.addEventListener("keyup", l), i.addEventListener("search", l), i.addEventListener("clear", f) };

  function $e(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) e[o] = n[o] } return e } var yr = { read: function(e) { return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent) }, write: function(e) { return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) } };

  function Et(e, t) {
    function n(r, i, a) { if (!(typeof document > "u")) { a = $e({}, t, a), typeof a.expires == "number" && (a.expires = new Date(Date.now() + a.expires * 864e5)), a.expires && (a.expires = a.expires.toUTCString()), r = encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape); var s = ""; for (var c in a) a[c] && (s += "; " + c, a[c] !== !0 && (s += "=" + a[c].split(";")[0])); return document.cookie = r + "=" + e.write(i, r) + s } }

    function o(r) { if (!(typeof document > "u" || arguments.length && !r)) { for (var i = document.cookie ? document.cookie.split("; ") : [], a = {}, s = 0; s < i.length; s++) { var c = i[s].split("="),
            d = c.slice(1).join("="); try { var l = decodeURIComponent(c[0]); if (a[l] = e.read(d, l), r === l) break } catch (f) {} } return r ? a[r] : a } } return Object.create({ set: n, get: o, remove: function(r, i) { n(r, "", $e({}, i, { expires: -1 })) }, withAttributes: function(r) { return Et(this.converter, $e({}, this.attributes, r)) }, withConverter: function(r) { return Et($e({}, this.converter, r), this.attributes) } }, { attributes: { value: Object.freeze(t) }, converter: { value: Object.freeze(e) } }) } var Ve = Et(yr, { path: "/" }); var re = e => { let t = Ve.withAttributes({ expires: e, secure: document.location.protocol === "https:", sameSite: "Lax" }); return { set: t.set, get: t.get, remove: t.remove, setJSON: (n, o, r) => { try { o = JSON.stringify(o) } catch (i) {} return t.set(n, o, r) }, getJSON: n => { let o = t.get(n); if (o) { try { o = JSON.parse(o) } catch (r) {} return o } } } }; var cn = e => { let t = document.querySelectorAll(e); if (!t.length) return; let n = re(30); for (let o of t) { let r = o.querySelectorAll(".tag-data"); if (r.length <= 0) return; let i = r[0]; for (let a of i.querySelectorAll("a")) a.addEventListener("click", () => { let s = n.getJSON("tag") || {},
          c = i.dataset.tagName || ""; if (s[c] = a.dataset.tagValue, i.dataset.persistent === "0" && (delete s[c], Object.keys(s).length === 0)) { n.remove("tag"); return } n.setJSON("tag", s) }) } }; var ln = e => { for (let t of document.querySelectorAll(e)) t.addEventListener("change", () => { let n = t.closest("form");
      n && n.submit() }) }; var un = e => { let t = document.querySelector(e); if (!t) return; let n = t.querySelector(".filter-button-container"),
      o = t.querySelector(".filter-button"); if (!n) return; let r = i => { let a = 'input[name="filter[' + i + ']"]',
        s = t.querySelectorAll(a); if (s.length === 0) return; let c = s[0].closest(".content-filter-container"),
        d = t.querySelector(a + ":checked"); if (!c || !d || d.value.length === 0) return;
      o && o.classList.add("is-set"), n.querySelectorAll("." + i + "-set").forEach(v => v.classList.add("show")); let l = c.querySelector('label[for="' + d.id + '"]'),
        f = (l == null ? void 0 : l.textContent) || "";
      c.querySelectorAll(".content-filter-reset-button").forEach(v => v.classList.add("show")), c.classList.add("is-set"), c.querySelectorAll(".content-filter-header").forEach(v => v.innerHTML = f) };
    r("advertiser_publish_date"), r("duration"), r("quality"), r("virtual_reality"), r("pricing"), r("advertiser_site") }; var he = (e, t) => { let n = document.querySelector(e); if (!n) return; let o = 'input[name="filter[' + t + ']"]',
      r = n.querySelectorAll(o); if (r.length === 0) return; let i = r[0].closest(".content-filter-container"); if (!i) return; let a = i.querySelector(".content-filter-reset-button"),
      s = r[0];!a || !s || a.addEventListener("click", () => { s.checked = !0, s.dispatchEvent(new Event("change", { bubbles: !0, cancelable: !1 })), i.querySelectorAll("button.dropdown-toggle").forEach(c => c.classList.remove("is-set")), a.classList.remove("show") }) }; var Er = (e, t, n, o, r) => { let i = document.createElement("div");
    i.innerHTML = e; let a = i.querySelector("input"),
      s = i.querySelector("label"); return !a || !s ? null : (a.id = a.id.replace(/_0$/, "_" + t), a.value = n, a.checked = r, s.htmlFor = s.htmlFor.replace(/_0$/, "_" + t), s.innerHTML = o, i.firstElementChild) }; var dn = e => { var n, o; let t = document.querySelector(e); if (t)
      for (let r of t.querySelectorAll(".filter-options-partial")) { let i = r.querySelector("input"),
          a = r.querySelector(".filter-options-partial-options"),
          s = r.querySelector("button.filter-options-partial-more"),
          c = r.querySelector("template"),
          d = (n = r.dataset.selected) != null ? n : "",
          l = JSON.parse((o = r.dataset.options) != null ? o : "{}"); if (!i || !a || !s || !c || !l) continue; let f = Object.keys(l),
          v = 0,
          y = () => { a.innerHTML = "", s.classList.remove("hidden") },
          T = () => { let _ = Math.min(v + 12, f.length); for (let S = v; S < _; S++) { let O = f[S],
                D = Er(c.innerHTML, S, O, l[O], O === d);
              D && a.append(D) } v = _, v >= f.length && s.classList.add("hidden") },
          E = () => { let _ = i.value || "",
              S = new RegExp(_.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
            f = Object.keys(l).filter(O => O === "" || O === d || (l[O] || "").search(S) !== -1).sort((O, D) => O === "" ? -1 : D === "" ? 1 : O === d ? -1 : D === d ? 1 : l[O].localeCompare(l[D])), v = 0, y(), T() };
        y(), E(), r.addEventListener("scroll", _ => { let S = _.target;
          S.scrollTop + S.clientHeight * window.devicePixelRatio >= S.scrollHeight && T() }), i.addEventListener("keyup", E), i.addEventListener("search", E), i.addEventListener("clear", E), s.addEventListener("click", _ => { _.preventDefault(), T() }) } }; var fn = (e, t = !0) => { var a, s; let n = document.querySelector(e),
      o = (s = (a = document.querySelector("#header .header-container")) == null ? void 0 : a.offsetHeight) != null ? s : 100,
      r = document.querySelector(".filter-button"); if (!n) return;
    n.addEventListener("change", c => { var f; let d = c.target,
        l = d.closest("form");!d.name || !d.name.startsWith("filter") || !l || ((t || d.name === "filter[order_by]") && l.submit(), (f = l.querySelector(".submit-button-form")) == null || f.classList.add("show")) }); let i = 0;
    document.addEventListener("scroll", () => { i = window.scrollY, r == null || r.classList.toggle("fixed-bottom", i > o - 24) }), dn(e), un(e), he(e, "advertiser_publish_date"), he(e, "duration"), he(e, "virtual_reality"), he(e, "quality"), he(e, "pricing"), he(e, "advertiser_site") }; var pn = e => { var r, i; let t = (i = (r = document.querySelector("#header .header-container")) == null ? void 0 : r.offsetHeight) != null ? i : 100,
      n = document.querySelector(e); if (!n) return; let o = 0;
    document.addEventListener("scroll", () => { o = window.scrollY, n.classList.toggle("hidden", o <= t - 24) }), n.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }) }) }; var mn = e => { document.addEventListener("click", t => { let n = t.target,
        o = n == null ? void 0 : n.closest(".rate-link"),
        r = n == null ? void 0 : n.closest(e);!o || !r || r.classList.add("rating-active") }), document.addEventListener("click", t => { let n = t.target; if (!n.classList.contains("item-rating-none") && !n.closest(".item-rating-none")) return; let o = n.closest(".item-rating-container");
      o && (t.preventDefault(), o.classList.add("item-rating-disabled")) }), document.addEventListener("click", t => { let n = t.target,
        o = n.closest(".item-rating-container"); if (!o) return; let r = n.classList.contains("item-rating-option") ? n : n.closest(".item-rating-option"),
        i = r == null ? void 0 : r.dataset.postUrl;!r || !i || (t.preventDefault(), o.classList.add("item-rating-disabled"), r.classList.add("item-rating-clicked"), fetch(i, { method: "post" }).then(a => { if (a.status !== 200) throw a.statusText }).catch(() => { o.classList.remove("item-rating-disabled"), r.classList.remove("item-rating-clicked") })) }) }; var hn = e => { var n; let t = e.closest(".card");
      t && ((n = t.querySelector(".no-image")) == null || n.classList.remove("hidden"), t.classList.add("no-click")) },
    gn = e => { e.addEventListener("error", () => { hn(e) }), e.complete && e.naturalWidth === 0 && hn(e) },
    vn = e => { for (let n of document.querySelectorAll(e)) gn(n);
      new MutationObserver((n, o) => { for (let r of n)
          for (let i of r.addedNodes)
            if (i instanceof HTMLElement && i.classList.contains("card"))
              for (let a of i.querySelectorAll(e)) gn(a) }).observe(document.body, { childList: !0, subtree: !0 }) }; var En = () => { var t; let e = (n, o, r) => { for (let i of document.querySelectorAll(o)) i.addEventListener("click", a => { let s = a.target; if (!(s.classList.contains(r) || s.closest("." + r))) return; let c = s.dataset.tagValue;
          typeof window.gtag == "function" && ae(n, { value: c }) }) };
      e("orientation-new", ".orientation-panel .menu-item", "orientation-panel"), e("pricing-new", ".pricing-panel .menu-item", "pricing-panel"), e("locale-new", ".language-panel .menu-item", "language-panel"), e("locale-button-new", ".language-panel-dropdown .menu-item", "language-panel-dropdown"), yn(".button.filter-button", "filter_button_press_new"), yn("#filter-flyout .submit-button-form", "filter_button_apply_new"), (t = document.forms.namedItem("filter")) == null || t.addEventListener("change", function(n) { var o;
        n.target.type === "radio" && ae("sort-new", { value: n.target.value, locale: (o = document.querySelector("html")) == null ? void 0 : o.lang }) }) },
    yn = (e, t) => { for (let n of document.querySelectorAll(e)) n.addEventListener("click", o => { ae(t, {}) }) },
    ae = (e, t) => { let o = re(30).get("variation");
      typeof window.gtag == "function" && (o ? window.gtag("event", e, zt(te({}, t), { variation: o })) : window.gtag("event", e, t)) }; var bn = e => e.value.trimStart().trimEnd().toLowerCase().replace(/\s+/g, " "),
    Ln = (e, t) => t === "" ? e : e.startsWith(t) ? "".concat(t, "<strong>").concat(e.substring(t.length), "</strong>") : "<strong>".concat(e, "</strong>"),
    _n = (e, t = "search-submitted-old") => { let n = document.querySelector(e),
        o = n == null ? void 0 : n.querySelector("input[type=search]"),
        r = n == null ? void 0 : n.querySelector(".autocomplete"),
        i = n == null ? void 0 : n.querySelector("template.search-ul-template"),
        a = n == null ? void 0 : n.querySelector(".no-results"); if (!n || !o || !r || !i || !a) return; let s = n.dataset.url || "",
        c = -1,
        d, l = 0,
        f = 0,
        v = "";
      n.addEventListener("submit", () => { ae(t, {}) }); let y = u => s.replace("__queryString__", encodeURIComponent(u)),
        T = () => { if (c === -1) return; let u = r.querySelector(".autocomplete-list .autocomplete-result.active");
          u && (o.value = (u == null ? void 0 : u.dataset.suggestion) || "", r.innerHTML = "", c = -1) },
        E = u => { let p = bn(o),
            h = y(p);
          fetch(h).then(A => A.json()).then(A => { u > f && (d = A || [], O(), _(), f = u) }) },
        _ = () => { var u;
          r.classList.contains("show") || ((u = r.closest(".form.search")) == null || u.classList.add("autocomplete-show"), r.classList.add("show"), r.classList.remove("hidden")) },
        S = () => { a.classList.add("show"), a.querySelector("span strong").innerHTML = o.value.trimStart(), a.addEventListener("click", () => { n.submit() }) },
        O = () => { a.classList.remove("show"); let u = bn(o).trim(); if ((d == null ? void 0 : d.results) === void 0) { d = void 0; return } c = -1; let p = r.querySelector("ul"); if (!p) return; let h = u.split(" "); if (p.innerHTML = "", Object.values(d.results).flat().length === 0) { S(); return } for (let [A, x] of Object.entries(d.results)) { if (x.length === 0) continue; let M = D(i, x, h, d, A);
            p.appendChild(M) } },
        D = (u, p, h, A, x) => { var N, H, Y; let M = u.content.cloneNode(!0),
            k = M.querySelector("template.search-li-template"); if (!k) return M;
          A.labels[x] ? M.querySelector(".title").textContent = A.labels[x] : (N = M.querySelector(".group-header")) == null || N.classList.add("hidden"), (H = M.querySelector(".group-header")) == null || H.addEventListener("click", C => { C.stopPropagation() }); for (let C of p) { let P = m(k, C, h);
            (Y = M.querySelector(".autocomplete-group-container")) == null || Y.appendChild(P) } return k == null || k.remove(), M },
        m = (u, p, h) => { var M; let A = u.content.cloneNode(!0);
          A.querySelector("li").dataset.suggestion = p.name; let x = ""; for (let k of p.prefix_list) x += "".concat(Ln(k.name, h[k.index] || ""), " ");
          x += Ln(p.suggestion, h[h.length - 1]), A.querySelector("span.suggestion-value").innerHTML = x; for (let k of p.tag_list) k === "show_18_plus_indicator" && ((M = A.querySelector(".badge")) == null || M.classList.remove("hidden")); return A.querySelector("li").addEventListener("click", () => { o.value = p.name, r.innerHTML = "", r.classList.remove("show"), ae(t, {}), n.submit() }), A },
        g = () => { l += 1, E(l), O() },
        b = () => { o.value !== v && (v = o.value, l += 1, E(l)) },
        w = u => { if (u.key === "Enter") { T(); return } if (u.key !== "ArrowUp" && u.key !== "ArrowDown") return;
          u.preventDefault(); let p = r.querySelectorAll(".autocomplete-list .autocomplete-result"); if (p.length === 0) return; let h = u.key === "ArrowDown" ? 1 : -1;
          c = (c + h) % p.length, c < 0 && (c = p.length - 1), p.forEach(A => A.classList.remove("active")), p[c].classList.add("active"), _() };
      o.addEventListener("keyup", b), o.addEventListener("keydown", w), o.addEventListener("focus", g), o.addEventListener("trigger", g), document.addEventListener("click", u => { var h; let p = u.target; if (!(!p || r.innerHTML == "")) { if (!p.classList.contains("autocomplete") && p.name !== "search_query[query]") {
            (h = r.closest(".form.search")) == null || h.classList.remove("autocomplete-show"), r.classList.remove("show"); return } b(), _() } }) }; var Tn = e => { for (let t of document.querySelectorAll(e)) t.href.substring(0, 7) === "mailto:" && (t.href = t.href.replace("%20[at]%20", "@").replace("%20[dot]%20", "."), t.innerHTML = t.innerHTML.replace(" [at] ", "@").replace(" [dot] ", ".")) }; var je = e => { let t = e.querySelector('input[type="checkbox"]');
      t && (t.checked = !t.checked, t.dispatchEvent(new Event("change")), Me(t.checked, e)) },
    Me = (e, t) => { let n = t.querySelector(".toggle-on-label"),
        o = t.querySelector(".toggle-off-label");
      n == null || n.classList.toggle("hidden", !e), o == null || o.classList.toggle("hidden", e) }; var bt = "thumbWidth",
    wn = e => { let t = re(30),
        n = r => { r ? (document.body.classList.add("large-thumbs"), t.set(bt, "large")) : (document.body.classList.remove("large-thumbs"), t.remove(bt)) },
        o = t.get(bt) === "large" || e; for (let r of document.querySelectorAll(".width-toggle")) { let i = r.querySelector('input[type="checkbox"]'); if (!i) return;
        r.addEventListener("click", () => { je(r) }), i.addEventListener("change", () => { n(i.checked) }), i.checked = o, n(o), Me(o, r) } }; var An = Je(yt()); var Sn = () => { let e = document.getElementById("splash-page"); if (!e) return; let t = new An.default(e, { keyboard: !1 }),
      n = !!Ve.get("splashPageAccepted"),
      o = new URLSearchParams(window.location.search).get("t"); if (n) { document.documentElement.classList.remove("blurred"); return } if (ae("18_plus_presented_new", {}), !o) e.addEventListener("hidden.bs.modal", () => { document.documentElement.classList.remove("blurred"); let r = new FormData;
      r.append("splash-page-accepted", "1"), fetch("/set-splash-page-accepted", { method: "post", body: r }), ae("18_plus_accepted_new", {}) }), t.toggle();
    else { document.documentElement.classList.remove("blurred"); let r = new FormData;
      r.append("splash-page-accepted", "1"), r.append("expire-session", "1"), fetch("/set-splash-page-accepted", { method: "post", body: r }) } }; var Mn = () => { var o; if (document.querySelectorAll(".site-suggestion").length === 0) return; let t = re(365),
      n = "suggestion-alert-closed"; if (!t.get(n))
      for (let r of document.querySelectorAll(".site-suggestion"))(o = r.querySelector(".btn-close")) == null || o.addEventListener("click", () => { r.remove(), t.set(n, "true") }), r.classList.remove("hidden") }; var On = e => { let t = document.querySelectorAll(e); for (let n of t) { let o = n.querySelector("input"),
        r = n.querySelector(".clear-search-icon"); if (!o || !r) return;
      r.addEventListener("click", () => { o.value = "", o.focus(), o.dispatchEvent(new Event("clear")) }) } }; var tr = Je(er()),
    nr = () => { for (let o of document.querySelectorAll(".dropdown-menu")) o.addEventListener("click", r => r.stopPropagation()); let e = null,
        t = null,
        n = document.querySelectorAll(".dropdown"); for (let o of n) { let r = o.querySelector('[data-bs-toggle="dropdown"]'),
          i = o.querySelector(".dropdown-menu"); if (r && i) { let a = document.documentElement.getAttribute("dir"),
            s = new tr.default(r, { popperConfig: { placement: a === "rtl" ? "bottom-end" : "bottom-start" } }),
            c = !1;
          o.addEventListener("mouseenter", async () => { t && (clearTimeout(t), e && e.hide()), t = setTimeout(() => { for (let d of n) d !== o && d.classList.remove("show");
              s.show(), e = s, i.classList.add("show"), c = !0 }, 200) }), o.addEventListener("mouseleave", () => { t && clearTimeout(t), s.hide(), r.classList.remove("show"), i.classList.remove("show"), e === s && (e = null), c = !1 }), o.addEventListener("hide.bs.dropdown", function(d) { c && d.preventDefault() }), o.addEventListener("shown.bs.dropdown", function() { i.style.cssText = "" }) } } }; var rr = e => { document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e) }; var or = () => { let e = document.querySelectorAll(".accordion-button"),
      t = [];
    e.forEach(n => { let o = n.nextElementSibling;
      n.hasAttribute("data-default-open") && (o.classList.add("open"), n.classList.add("active"), t.push(o)), n.addEventListener("click", () => { o.classList.contains("open") ? (o.classList.remove("open"), n.classList.remove("active"), t = t.filter(r => r !== o)) : (t.forEach(r => { r.classList.remove("open"); let i = r.previousElementSibling;
          i && i.classList.remove("active") }), o.classList.add("open"), n.classList.add("active"), t = [o]) }) }) }; var ir = () => { let e = document.querySelectorAll(".panel"); for (let t of e) { if (!t.hasAttribute("data-setting")) continue; let n = t.getAttribute("data-setting"),
        o = document.querySelector(".".concat(n, "-panel")); if (!o) continue; let r = o.querySelector(".selected");
      document.querySelectorAll('[data-panel-target="'.concat(n, '-panel"] .setting-text')).forEach(a => { var s;
        a.innerHTML = (s = r == null ? void 0 : r.getAttribute("data-label")) != null ? s : "" }) } }; var It = "colorScheme",
    sr = () => { let e = re(365),
        t = r => { document.documentElement.classList.toggle("dark", r === "dark"), document.documentElement.classList.toggle("light", r === "light"), e.set(It, r); let i = new FormData;
          i.append("color-scheme", r), fetch("/set-color-scheme", { method: "post", body: i }).then(a => a.text()) }; if (document.querySelectorAll(".color-scheme-toggle").length === 0) { e.remove(It); return } let n = e.get(It),
        o = n || "light";
      n || window.matchMedia("(prefers-color-scheme: dark)").matches && (o = "dark"); for (let r of document.querySelectorAll(".color-scheme-toggle")) { let i = r.querySelector('input[type="checkbox"]'); if (!i) return;
        r.addEventListener("click", () => { je(r) }), i.addEventListener("change", () => { t(i.checked ? "dark" : "light") }), i.checked = o === "dark", t(o), Me(o === "dark", r) } }; var cr = () => { let e = document.querySelectorAll(".pill-group.scrollable .pill-container");
      e.length !== 0 && e.forEach(t => { var s, c; let n = (s = t.parentNode) == null ? void 0 : s.querySelector(".pill-scroll-left"),
          o = (c = t.parentNode) == null ? void 0 : c.querySelector(".pill-scroll-right"); if (!n || !o) return; let r, i = (d, l) => { ar(d, l), r || (r = setInterval(() => ar(d, l), 100)) },
          a = () => { r && (clearInterval(r), r = void 0) };
        ["mouseup", "mouseleave"].forEach(d => { n.addEventListener(d, a), o.addEventListener(d, a) }), n.addEventListener("mousedown", () => i(t, -1)), o.addEventListener("mousedown", () => i(t, 1)), n.addEventListener("touchend", a), o.addEventListener("touchend", a), t.addEventListener("scroll", () => Rt(t)), Rt(t) }) },
    Ue = (e, t) => { let n = e.getBoundingClientRect(),
        o = t.getBoundingClientRect(); return o.left >= n.left && o.right <= n.right },
    ar = (e, t) => { let n = e.querySelectorAll(".pill"),
        o = Array.from(n),
        r = 8,
        i = 56,
        a; if (t > 0 ? a = o.findIndex(s => !Ue(e, s) && s.getBoundingClientRect().left > e.getBoundingClientRect().left) : (a = o.slice().reverse().findIndex(s => !Ue(e, s) && s.getBoundingClientRect().right < e.getBoundingClientRect().right), a !== -1 && (a = o.length - 1 - a)), a !== void 0 && a !== -1) { let s = o[a],
          c = t > 0 ? s.offsetLeft + s.offsetWidth - e.clientWidth + i + r : s.offsetLeft - i - r;
        e.scrollTo({ left: c, behavior: "smooth" }) } Rt(e) },
    Rt = e => { var l, f; let t = e.querySelectorAll(".pill"),
        n = (l = e.parentNode) == null ? void 0 : l.querySelector(".pill-scroll-left"),
        o = (f = e.parentNode) == null ? void 0 : f.querySelector(".pill-scroll-right"),
        r = t[0],
        i = t[t.length - 1],
        a = Ue(e, r),
        s = Ue(e, i),
        c = e.scrollLeft <= 2,
        d = Math.ceil(e.scrollLeft + e.clientWidth) >= Math.floor(e.scrollWidth);
      n.classList.toggle("hidden", c || a), o.classList.toggle("hidden", d || s) };
  rr(() => { var o; let e = navigator.userAgent.toLowerCase(),
      t = document.querySelector("[name=viewport]"); /iphone|ipad/.test(e) && t && t.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1"), _n('form[name="search_query"]'), sn(), fn(".content-filter", !((o = document.querySelector(".filter-button")) != null && o.offsetParent)), cn(".tag-filter"), ln("form[name^=tag-] input"), Tn(".email-link"), an(".filter_advertiser_site_widget:not(.filter-options-partial) .filter-input-container input", ".filter_advertiser_site_widget", ".filter-setting"), pn(".scroll-top-btn"), mn(".card:not(.paid)"), rn(), on(), vn(".item-link img"), wn(!1), sr(), Sn(), Mn(), cr(), On(".input-container"), nr(), or(), ir(), En() }); })();
/*! Bundled license information:

bootstrap/js/dist/dom/data.js:
  (*!
    * Bootstrap data.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/index.js:
  (*!
    * Bootstrap index.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/event-handler.js:
  (*!
    * Bootstrap event-handler.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/manipulator.js:
  (*!
    * Bootstrap manipulator.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/config.js:
  (*!
    * Bootstrap config.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/base-component.js:
  (*!
    * Bootstrap base-component.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/selector-engine.js:
  (*!
    * Bootstrap selector-engine.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/backdrop.js:
  (*!
    * Bootstrap backdrop.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/component-functions.js:
  (*!
    * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/focustrap.js:
  (*!
    * Bootstrap focustrap.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/scrollbar.js:
  (*!
    * Bootstrap scrollbar.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/modal.js:
  (*!
    * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dropdown.js:
  (*!
    * Bootstrap dropdown.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/
