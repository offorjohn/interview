function onYouTubePlayerAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0,
    jQuery(document).trigger("YTAPIReady"))
}
if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(h, t) {
    function m(e) {
        var t = "length"in e && e.length
          , n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }
    function u(e, n, i) {
        if (oe.isFunction(n))
            return oe.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i
            });
        if (n.nodeType)
            return oe.grep(e, function(e) {
                return e === n !== i
            });
        if ("string" == typeof n) {
            if (de.test(n))
                return oe.filter(n, e, i);
            n = oe.filter(n, e)
        }
        return oe.grep(e, function(e) {
            return 0 <= oe.inArray(e, n) !== i
        })
    }
    function n(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function e(e) {
        var n = we[e] = {};
        return oe.each(e.match(be) || [], function(e, t) {
            n[t] = !0
        }),
        n
    }
    function i() {
        he.addEventListener ? (he.removeEventListener("DOMContentLoaded", o, !1),
        h.removeEventListener("load", o, !1)) : (he.detachEvent("onreadystatechange", o),
        h.detachEvent("onload", o))
    }
    function o() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (i(),
        oe.ready())
    }
    function s(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Pe, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? oe.parseJSON(n) : n)
                } catch (Z) {}
                oe.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function r(e, t, n, i) {
        if (oe.acceptData(e)) {
            var o, r, a = oe.expando, s = e.nodeType, l = s ? oe.cache : e, u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t)
                return u || (u = s ? e[a] = U.pop() || oe.guid++ : a),
                l[u] || (l[u] = s ? {} : {
                    toJSON: oe.noop
                }),
                ("object" == typeof t || "function" == typeof t) && (i ? l[u] = oe.extend(l[u], t) : l[u].data = oe.extend(l[u].data, t)),
                r = l[u],
                i || (r.data || (r.data = {}),
                r = r.data),
                void 0 !== n && (r[oe.camelCase(t)] = n),
                "string" == typeof t ? null == (o = r[t]) && (o = r[oe.camelCase(t)]) : o = r,
                o
        }
    }
    function a(e, t, n) {
        if (oe.acceptData(e)) {
            var i, o, r = e.nodeType, a = r ? oe.cache : e, s = r ? e[oe.expando] : oe.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in i ? t = [t] : t = (t = oe.camelCase(t))in i ? [t] : t.split(" "),
                    o = t.length;
                    for (; o--; )
                        delete i[t[o]];
                    if (n ? !l(i) : !oe.isEmptyObject(i))
                        return
                }
                (n || (delete a[s].data,
                l(a[s]))) && (r ? oe.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    function c() {
        return !0
    }
    function p() {
        return !1
    }
    function d() {
        try {
            return he.activeElement
        } catch (h) {}
    }
    function y(e) {
        var t = Qe.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function g(e, t) {
        var n, i, o = 0, r = typeof e.getElementsByTagName !== xe ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== xe ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [],
            n = e.childNodes || e; null != (i = n[o]); o++)
                !t || oe.nodeName(i, t) ? r.push(i) : oe.merge(r, g(i, t));
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], r) : r
    }
    function v(e) {
        Ee.test(e.type) && (e.defaultChecked = e.checked)
    }
    function f(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function b(e) {
        return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function w(e) {
        var t = Ve.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function T(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)
            oe._data(n, "globalEval", !t || oe._data(t[i], "globalEval"))
    }
    function x(e, t) {
        if (1 === t.nodeType && oe.hasData(e)) {
            var n, i, o, r = oe._data(e), a = oe._data(t, r), s = r.events;
            if (s)
                for (n in delete a.handle,
                a.events = {},
                s)
                    for (i = 0,
                    o = s[n].length; i < o; i++)
                        oe.event.add(t, n, s[n][i]);
            a.data && (a.data = oe.extend({}, a.data))
        }
    }
    function C(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !ne.noCloneEvent && t[oe.expando]) {
                for (i in (o = oe._data(t)).events)
                    oe.removeEvent(t, i, o.handle);
                t.removeAttribute(oe.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text,
            w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            ne.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ee.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function P(e, t) {
        var n, i = oe(t.createElement(e)).appendTo(t.body), o = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(i[0])) ? n.display : oe.css(i[0], "display");
        return i.detach(),
        o
    }
    function S(e) {
        var t = he
          , n = Je[e];
        return n || ("none" !== (n = P(e, t)) && n || ((t = ((Ze = (Ze || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ze[0].contentDocument).document).write(),
        t.close(),
        n = P(e, t),
        Ze.detach()),
        Je[e] = n),
        n
    }
    function I(t, n) {
        return {
            get: function() {
                var e = t();
                if (null != e)
                    return e ? void delete this.get : (this.get = n).apply(this, arguments)
            }
        }
    }
    function j(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = pt.length; o--; )
            if ((t = pt[o] + n)in e)
                return t;
        return i
    }
    function k(e, t) {
        for (var n, i, o, r = [], a = 0, s = e.length; a < s; a++)
            (i = e[a]).style && (r[a] = oe._data(i, "olddisplay"),
            n = i.style.display,
            t ? (r[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && je(i) && (r[a] = oe._data(i, "olddisplay", S(i.nodeName)))) : (o = je(i),
            (n && "none" !== n || !o) && oe._data(i, "olddisplay", o ? n : oe.css(i, "display"))));
        for (a = 0; a < s; a++)
            (i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
        return e
    }
    function E(e, t, n) {
        var i = st.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function $(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2)
            "margin" === n && (a += oe.css(e, n + Ie[r], !0, o)),
            i ? ("content" === n && (a -= oe.css(e, "padding" + Ie[r], !0, o)),
            "margin" !== n && (a -= oe.css(e, "border" + Ie[r] + "Width", !0, o))) : (a += oe.css(e, "padding" + Ie[r], !0, o),
            "padding" !== n && (a += oe.css(e, "border" + Ie[r] + "Width", !0, o)));
        return a
    }
    function Y(e, t, n) {
        var i = !0
          , o = "width" === t ? e.offsetWidth : e.offsetHeight
          , r = Ke(e)
          , a = ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (((o = et(e, t, r)) < 0 || null == o) && (o = e.style[t]),
            nt.test(o))
                return o;
            i = a && (ne.boxSizingReliable() || o === e.style[t]),
            o = parseFloat(o) || 0
        }
        return o + $(e, t, n || (a ? "border" : "content"), i, r) + "px"
    }
    function A(e, t, n, i, o) {
        return new A.prototype.init(e,t,n,i,o)
    }
    function N() {
        return setTimeout(function() {
            dt = void 0
        }),
        dt = oe.now()
    }
    function D(e, t) {
        var n, i = {
            height: e
        }, o = 0;
        for (t = t ? 1 : 0; o < 4; o += 2 - t)
            i["margin" + (n = Ie[o])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function Q(e, t, n) {
        for (var i, o = (Ct[t] || []).concat(Ct["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, t, e))
                return i
    }
    function O(t, e, n) {
        var i, o, r, a, s, l, u, c = this, p = {}, d = t.style, f = t.nodeType && je(t), h = oe._data(t, "fxshow");
        for (i in n.queue || (null == (s = oe._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        c.always(function() {
            c.always(function() {
                s.unqueued--,
                oe.queue(t, "fx").length || s.empty.fire()
            })
        })),
        1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
        "inline" === ("none" === (u = oe.css(t, "display")) ? oe._data(t, "olddisplay") || S(t.nodeName) : u) && "none" === oe.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden",
        ne.shrinkWrapBlocks() || c.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        })),
        e)
            if (o = e[i],
            bt.exec(o)) {
                if (delete e[i],
                r = r || "toggle" === o,
                o === (f ? "hide" : "show")) {
                    if ("show" !== o || !h || void 0 === h[i])
                        continue;
                    f = !0
                }
                p[i] = h && h[i] || oe.style(t, i)
            } else
                u = void 0;
        if (oe.isEmptyObject(p))
            "inline" === ("none" === u ? S(t.nodeName) : u) && (d.display = u);
        else
            for (i in h ? "hidden"in h && (f = h.hidden) : h = oe._data(t, "fxshow", {}),
            r && (h.hidden = !f),
            f ? oe(t).show() : c.done(function() {
                oe(t).hide()
            }),
            c.done(function() {
                var e;
                for (e in oe._removeData(t, "fxshow"),
                p)
                    oe.style(t, e, p[e])
            }),
            p)
                a = Q(f ? h[i] : 0, i, c),
                i in h || (h[i] = a.start,
                f && (a.end = a.start,
                a.start = "width" === i || "height" === i ? 1 : 0))
    }
    function L(e, t) {
        var n, i, o, r, a;
        for (n in e)
            if (o = t[i = oe.camelCase(n)],
            r = e[n],
            oe.isArray(r) && (o = r[1],
            r = e[n] = r[0]),
            n !== i && (e[i] = r,
            delete e[n]),
            (a = oe.cssHooks[i]) && "expand"in a)
                for (n in r = a.expand(r),
                delete e[i],
                r)
                    n in e || (e[n] = r[n],
                    t[n] = o);
            else
                t[i] = o
    }
    function M(r, e, t) {
        var n, a, i = 0, o = xt.length, s = oe.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (a)
                return !1;
            for (var e = dt || N(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, o = u.tweens.length; i < o; i++)
                u.tweens[i].run(n);
            return s.notifyWith(r, [u, n, t]),
            n < 1 && o ? t : (s.resolveWith(r, [u]),
            !1)
        }, u = s.promise({
            elem: r,
            props: oe.extend({}, e),
            opts: oe.extend(!0, {
                specialEasing: {}
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: dt || N(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = oe.Tween(r, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? u.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    u.tweens[t].run(1);
                return e ? s.resolveWith(r, [u, e]) : s.rejectWith(r, [u, e]),
                this
            }
        }), c = u.props;
        for (L(c, u.opts.specialEasing); i < o; i++)
            if (n = xt[i].call(u, r, c, u.opts))
                return n;
        return oe.map(c, Q, u),
        oe.isFunction(u.opts.start) && u.opts.start.call(r, u),
        oe.fx.timer(oe.extend(l, {
            elem: r,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function _(r) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, i = 0, o = e.toLowerCase().match(be) || [];
            if (oe.isFunction(t))
                for (; n = o[i++]; )
                    "+" === n.charAt(0) ? (n = n.slice(1) || "*",
                    (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }
    function B(t, o, r, a) {
        function s(e) {
            var i;
            return l[e] = !0,
            oe.each(t[e] || [], function(e, t) {
                var n = t(o, r, a);
                return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (o.dataTypes.unshift(n),
                s(n),
                !1)
            }),
            i
        }
        var l = {}
          , u = t === qt;
        return s(o.dataTypes[0]) || !l["*"] && s("*")
    }
    function R(e, t) {
        var n, i, o = oe.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && oe.extend(!0, e, n),
        e
    }
    function F(e, t, n) {
        for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) {
                    l.unshift(a);
                    break
                }
        if (l[0]in n)
            r = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                i || (i = a)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r),
        n[r]) : void 0
    }
    function z(e, t, n, i) {
        var o, r, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (r = c.shift(); r; )
            if (e.responseFields[r] && (n[e.responseFields[r]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = r,
            r = c.shift())
                if ("*" === r)
                    r = l;
                else if ("*" !== l && l !== r) {
                    if (!(a = u[l + " " + r] || u["* " + r]))
                        for (o in u)
                            if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (ie) {
                                return {
                                    state: "parsererror",
                                    error: a ? ie : "No conversion from " + l + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function H(n, e, i, o) {
        var t;
        if (oe.isArray(e))
            oe.each(e, function(e, t) {
                i || Zt.test(n) ? o(n, t) : H(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, o)
            });
        else if (i || "object" !== oe.type(e))
            o(n, e);
        else
            for (t in e)
                H(n + "[" + t + "]", e[t], i, o)
    }
    function W() {
        try {
            return new h.XMLHttpRequest
        } catch (t) {}
    }
    function V() {
        try {
            return new h.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function q(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var U = []
      , X = U.slice
      , Z = U.concat
      , G = U.push
      , J = U.indexOf
      , K = {}
      , ee = K.toString
      , te = K.hasOwnProperty
      , ne = {}
      , ie = "1.11.3"
      , oe = function(e, t) {
        return new oe.fn.init(e,t)
    }
      , re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ae = /^-ms-/
      , se = /-([\da-z])/gi
      , le = function(e, t) {
        return t.toUpperCase()
    };
    oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : X.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return oe.each(this, e, t)
        },
        map: function(n) {
            return this.pushStack(oe.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: U.sort,
        splice: U.splice
    },
    oe.extend = oe.fn.extend = function(e) {
        var t, n, i, o, r, a, s = e || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[l] || {},
        l++),
        "object" == typeof s || oe.isFunction(s) || (s = {}),
        l === u && (s = this,
        l--); l < u; l++)
            if (null != (r = arguments[l]))
                for (o in r)
                    t = s[o],
                    s !== (i = r[o]) && (c && i && (oe.isPlainObject(i) || (n = oe.isArray(i))) ? (n ? (n = !1,
                    a = t && oe.isArray(t) ? t : []) : a = t && oe.isPlainObject(t) ? t : {},
                    s[o] = oe.extend(c, a, i)) : void 0 !== i && (s[o] = i));
        return s
    }
    ,
    oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === oe.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !oe.isArray(e) && 0 <= e - parseFloat(e) + 1
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e))
                return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (U) {
                return !1
            }
            if (ne.ownLast)
                for (t in e)
                    return te.call(e, t);
            for (t in e)
                ;
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            e && oe.trim(e) && (h.execScript || function(e) {
                h.eval.call(h, e)
            }
            )(e)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(se, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var i = 0
              , o = e.length
              , r = m(e);
            if (n) {
                if (r)
                    for (; i < o && !1 !== t.apply(e[i], n); i++)
                        ;
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], n))
                            break
            } else if (r)
                for (; i < o && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(re, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (m(Object(e)) ? oe.merge(n, "string" == typeof e ? [e] : e) : G.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (J)
                    return J.call(t, e, n);
                for (i = t.length,
                n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; )
                e[o++] = t[i++];
            if (n != n)
                for (; void 0 !== t[i]; )
                    e[o++] = t[i++];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; o < r; o++)
                !t(e[o], o) !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o = 0, r = e.length, a = [];
            if (m(e))
                for (; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return Z.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t],
            t = e,
            e = o),
            oe.isFunction(e) ? (n = X.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, n.concat(X.call(arguments)))
            }
            ).guid = e.guid = e.guid || oe.guid++,
            i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }),
    oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(n) {
        function w(e, t, n, i) {
            var o, r, a, s, l, u, c, p, d, f;
            if ((t ? t.ownerDocument || t : B) !== A && Y(t),
            n = n || [],
            s = (t = t || A).nodeType,
            "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s)
                return n;
            if (!i && D) {
                if (11 !== s && (o = ve.exec(e)))
                    if (a = o[1]) {
                        if (9 === s) {
                            if (!(r = t.getElementById(a)) || !r.parentNode)
                                return n;
                            if (r.id === a)
                                return n.push(r),
                                n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && M(t, r) && r.id === a)
                            return n.push(r),
                            n
                    } else {
                        if (o[2])
                            return J.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((a = o[3]) && g.getElementsByClassName)
                            return J.apply(n, t.getElementsByClassName(a)),
                            n
                    }
                if (g.qsa && (!Q || !Q.test(e))) {
                    if (p = c = _,
                    d = t,
                    f = 1 !== s && e,
                    1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = S(e),
                        (c = t.getAttribute("id")) ? p = c.replace(we, "\\$&") : t.setAttribute("id", p),
                        p = "[id='" + p + "'] ",
                        l = u.length; l--; )
                            u[l] = p + m(u[l]);
                        d = be.test(e) && h(t.parentNode) || t,
                        f = u.join(",")
                    }
                    if (f)
                        try {
                            return J.apply(n, d.querySelectorAll(f)),
                            n
                        } catch (z) {} finally {
                            c || t.removeAttribute("id")
                        }
                }
            }
            return j(e.replace(le, "$1"), t, n, i)
        }
        function e() {
            function n(e, t) {
                return i.push(e + " ") > x.cacheLength && delete n[i.shift()],
                n[e + " "] = t
            }
            var i = [];
            return n
        }
        function l(e) {
            return e[_] = !0,
            e
        }
        function i(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (g) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function t(e, t) {
            for (var n = e.split("|"), i = e.length; i--; )
                x.attrHandle[n[i]] = t
        }
        function u(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || q) - (~e.sourceIndex || q);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function o(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function r(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function a(a) {
            return l(function(r) {
                return r = +r,
                l(function(e, t) {
                    for (var n, i = a([], e.length, r), o = i.length; o--; )
                        e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function h(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function s() {}
        function m(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function p(a, e, t) {
            var s = e.dir
              , l = t && "parentNode" === s
              , u = F++;
            return e.first ? function(e, t, n) {
                for (; e = e[s]; )
                    if (1 === e.nodeType || l)
                        return a(e, t, n)
            }
            : function(e, t, n) {
                var i, o, r = [R, u];
                if (n) {
                    for (; e = e[s]; )
                        if ((1 === e.nodeType || l) && a(e, t, n))
                            return !0
                } else
                    for (; e = e[s]; )
                        if (1 === e.nodeType || l) {
                            if ((i = (o = e[_] || (e[_] = {}))[s]) && i[0] === R && i[1] === u)
                                return r[2] = i[2];
                            if ((o[s] = r)[2] = a(e, t, n))
                                return !0
                        }
            }
        }
        function d(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--; )
                    if (!o[i](e, t, n))
                        return !1;
                return !0
            }
            : o[0]
        }
        function v(e, t, n) {
            for (var i = 0, o = t.length; i < o; i++)
                w(e, t[i], n);
            return n
        }
        function T(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
                (r = e[s]) && (!n || n(r, i, o)) && (a.push(r),
                u && t.push(s));
            return a
        }
        function b(f, h, m, y, g, e) {
            return y && !y[_] && (y = b(y)),
            g && !g[_] && (g = b(g, e)),
            l(function(e, t, n, i) {
                var o, r, a, s = [], l = [], u = t.length, c = e || v(h || "*", n.nodeType ? [n] : n, []), p = !f || !e && h ? c : T(c, s, f, n, i), d = m ? g || (e ? f : u || y) ? [] : t : p;
                if (m && m(p, d, n, i),
                y)
                    for (o = T(d, l),
                    y(o, [], n, i),
                    r = o.length; r--; )
                        (a = o[r]) && (d[l[r]] = !(p[l[r]] = a));
                if (e) {
                    if (g || f) {
                        if (g) {
                            for (o = [],
                            r = d.length; r--; )
                                (a = d[r]) && o.push(p[r] = a);
                            g(null, d = [], o, i)
                        }
                        for (r = d.length; r--; )
                            (a = d[r]) && -1 < (o = g ? ee(e, a) : s[r]) && (e[o] = !(t[o] = a))
                    }
                } else
                    d = T(d === t ? d.splice(u, d.length) : d),
                    g ? g(null, t, d, i) : J.apply(t, d)
            })
        }
        function f(e) {
            for (var o, t, n, i = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = p(function(e) {
                return e === o
            }, a, !0), u = p(function(e) {
                return -1 < ee(o, e)
            }, a, !0), c = [function(e, t, n) {
                var i = !r && (n || t !== k) || ((o = t).nodeType ? l(e, t, n) : u(e, t, n));
                return o = null,
                i
            }
            ]; s < i; s++)
                if (t = x.relative[e[s].type])
                    c = [p(d(c), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[_]) {
                        for (n = ++s; n < i && !x.relative[e[n].type]; n++)
                            ;
                        return b(1 < s && d(c), 1 < s && m(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), t, s < n && f(e.slice(s, n)), n < i && f(e = e.slice(n)), n < i && m(e))
                    }
                    c.push(t)
                }
            return d(c)
        }
        function c(y, g) {
            var v = 0 < g.length
              , b = 0 < y.length
              , e = function(e, t, n, i, o) {
                var r, a, s, l = 0, u = "0", c = e && [], p = [], d = k, f = e || b && x.find.TAG("*", o), h = R += null == d ? 1 : Math.random() || .1, m = f.length;
                for (o && (k = t !== A && t); u !== m && null != (r = f[u]); u++) {
                    if (b && r) {
                        for (a = 0; s = y[a++]; )
                            if (s(r, t, n)) {
                                i.push(r);
                                break
                            }
                        o && (R = h)
                    }
                    v && ((r = !s && r) && l--,
                    e && c.push(r))
                }
                if (l += u,
                v && u !== l) {
                    for (a = 0; s = g[a++]; )
                        s(c, p, t, n);
                    if (e) {
                        if (0 < l)
                            for (; u--; )
                                c[u] || p[u] || (p[u] = Z.call(i));
                        p = T(p)
                    }
                    J.apply(i, p),
                    o && !e && 0 < p.length && 1 < l + g.length && w.uniqueSort(i)
                }
                return o && (R = h,
                k = d),
                c
            };
            return v ? l(e) : e
        }
        var y, g, x, C, P, S, I, j, k, E, $, Y, A, N, D, Q, O, L, M, _ = "sizzle" + 1 * new Date, B = n.document, R = 0, F = 0, z = e(), H = e(), W = e(), V = function(e, t) {
            return e === t && ($ = !0),
            0
        }, q = 1 << 31, U = {}.hasOwnProperty, X = [], Z = X.pop, G = X.push, J = X.push, K = X.slice, ee = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"), re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]", ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", se = new RegExp(ne + "+","g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ue = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(ae), fe = new RegExp("^" + oe + "$"), he = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + re),
            PSEUDO: new RegExp("^" + ae),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, me = /^(?:input|select|textarea|button)$/i, ye = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, we = /'|\\/g, Te = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), xe = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, Ce = function() {
            Y()
        };
        try {
            J.apply(X = K.call(B.childNodes), B.childNodes),
            X[B.childNodes.length].nodeType
        } catch (Oe) {
            J = {
                apply: X.length ? function(e, t) {
                    G.apply(e, K.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        for (y in g = w.support = {},
        P = w.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        Y = w.setDocument = function(e) {
            var t, n, l = e ? e.ownerDocument || e : B;
            return l !== A && 9 === l.nodeType && l.documentElement ? (N = (A = l).documentElement,
            (n = l.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
            D = !P(l),
            g.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            g.getElementsByTagName = i(function(e) {
                return e.appendChild(l.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            g.getElementsByClassName = ge.test(l.getElementsByClassName),
            g.getById = i(function(e) {
                return N.appendChild(e).id = _,
                !l.getElementsByName || !l.getElementsByName(_).length
            }),
            g.getById ? (x.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && D) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            x.filter.ID = function(e) {
                var t = e.replace(Te, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete x.find.ID,
            x.filter.ID = function(e) {
                var n = e.replace(Te, xe);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ),
            x.find.TAG = g.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : g.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" !== e)
                    return r;
                for (; n = r[o++]; )
                    1 === n.nodeType && i.push(n);
                return i
            }
            ,
            x.find.CLASS = g.getElementsByClassName && function(e, t) {
                return D ? t.getElementsByClassName(e) : void 0
            }
            ,
            O = [],
            Q = [],
            (g.qsa = ge.test(l.querySelectorAll)) && (i(function(e) {
                N.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\f]' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && Q.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || Q.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + _ + "-]").length || Q.push("~="),
                e.querySelectorAll(":checked").length || Q.push(":checked"),
                e.querySelectorAll("a#" + _ + "+*").length || Q.push(".#.+[+~]")
            }),
            i(function(e) {
                var t = l.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && Q.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || Q.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                Q.push(",.*:")
            })),
            (g.matchesSelector = ge.test(L = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function(e) {
                g.disconnectedMatch = L.call(e, "div"),
                L.call(e, "[s!='']:x"),
                O.push("!=", ae)
            }),
            Q = Q.length && new RegExp(Q.join("|")),
            O = O.length && new RegExp(O.join("|")),
            t = ge.test(N.compareDocumentPosition),
            M = t || ge.test(N.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            V = t ? function(e, t) {
                if (e === t)
                    return $ = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === B && M(B, e) ? -1 : t === l || t.ownerDocument === B && M(B, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return $ = !0,
                    0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], s = [t];
                if (!o || !r)
                    return e === l ? -1 : t === l ? 1 : o ? -1 : r ? 1 : E ? ee(E, e) - ee(E, t) : 0;
                if (o === r)
                    return u(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[i] === s[i]; )
                    i++;
                return i ? u(a[i], s[i]) : a[i] === B ? -1 : s[i] === B ? 1 : 0
            }
            ,
            l) : A
        }
        ,
        w.matches = function(e, t) {
            return w(e, null, null, t)
        }
        ,
        w.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== A && Y(e),
            t = t.replace(pe, "='$1']"),
            !(!g.matchesSelector || !D || O && O.test(t) || Q && Q.test(t)))
                try {
                    var n = L.call(e, t);
                    if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (C) {}
            return 0 < w(t, A, null, [e]).length
        }
        ,
        w.contains = function(e, t) {
            return (e.ownerDocument || e) !== A && Y(e),
            M(e, t)
        }
        ,
        w.attr = function(e, t) {
            (e.ownerDocument || e) !== A && Y(e);
            var n = x.attrHandle[t.toLowerCase()]
              , i = n && U.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
            return void 0 !== i ? i : g.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        w.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        w.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if ($ = !g.detectDuplicates,
            E = !g.sortStable && e.slice(0),
            e.sort(V),
            $) {
                for (; t = e[o++]; )
                    t === e[o] && (i = n.push(o));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return E = null,
            e
        }
        ,
        C = w.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += C(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += C(t);
            return n
        }
        ,
        (x = w.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Te, xe),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Te, xe),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || w.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && w.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Te, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, i, o) {
                    return function(e) {
                        var t = w.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "",
                        "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(se, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function(f, e, t, h, m) {
                    var y = "nth" !== f.slice(0, 3)
                      , g = "last" !== f.slice(-4)
                      , v = "of-type" === e;
                    return 1 === h && 0 === m ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var i, o, r, a, s, l, u = y !== g ? "nextSibling" : "previousSibling", c = e.parentNode, p = v && e.nodeName.toLowerCase(), d = !n && !v;
                        if (c) {
                            if (y) {
                                for (; u; ) {
                                    for (r = e; r = r[u]; )
                                        if (v ? r.nodeName.toLowerCase() === p : 1 === r.nodeType)
                                            return !1;
                                    l = u = "only" === f && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [g ? c.firstChild : c.lastChild],
                            g && d) {
                                for (s = (i = (o = c[_] || (c[_] = {}))[f] || [])[0] === R && i[1],
                                a = i[0] === R && i[2],
                                r = s && c.childNodes[s]; r = ++s && r && r[u] || (a = s = 0) || l.pop(); )
                                    if (1 === r.nodeType && ++a && r === e) {
                                        o[f] = [R, s, a];
                                        break
                                    }
                            } else if (d && (i = (e[_] || (e[_] = {}))[f]) && i[0] === R)
                                a = i[1];
                            else
                                for (; (r = ++s && r && r[u] || (a = s = 0) || l.pop()) && ((v ? r.nodeName.toLowerCase() !== p : 1 !== r.nodeType) || !++a || (d && ((r[_] || (r[_] = {}))[f] = [R, a]),
                                r !== e)); )
                                    ;
                            return (a -= m) === h || a % h == 0 && 0 <= a / h
                        }
                    }
                },
                PSEUDO: function(e, r) {
                    var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || w.error("unsupported pseudo: " + e);
                    return a[_] ? a(r) : 1 < a.length ? (t = [e, e, "", r],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                        for (var n, i = a(e, r), o = i.length; o--; )
                            e[n = ee(e, i[o])] = !(t[n] = i[o])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: l(function(e) {
                    var i = []
                      , o = []
                      , s = I(e.replace(le, "$1"));
                    return s[_] ? l(function(e, t, n, i) {
                        for (var o, r = s(e, null, i, []), a = e.length; a--; )
                            (o = r[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, t, n) {
                        return i[0] = e,
                        s(i, null, n, o),
                        i[0] = null,
                        !o.pop()
                    }
                }),
                has: l(function(t) {
                    return function(e) {
                        return 0 < w(t, e).length
                    }
                }),
                contains: l(function(t) {
                    return t = t.replace(Te, xe),
                    function(e) {
                        return -1 < (e.textContent || e.innerText || C(e)).indexOf(t)
                    }
                }),
                lang: l(function(n) {
                    return fe.test(n || "") || w.error("unsupported lang: " + n),
                    n = n.replace(Te, xe).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === N
                },
                focus: function(e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return ye.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(e, t) {
                    return [t - 1]
                }),
                eq: a(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: a(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: a(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: a(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: a(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[y] = o(y);
        for (y in {
            submit: !0,
            reset: !0
        })
            x.pseudos[y] = r(y);
        return s.prototype = x.filters = x.pseudos,
        x.setFilters = new s,
        S = w.tokenize = function(e, t) {
            var n, i, o, r, a, s, l, u = H[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (a = e,
            s = [],
            l = x.preFilter; a; ) {
                for (r in (!n || (i = ue.exec(a))) && (i && (a = a.slice(i[0].length) || a),
                s.push(o = [])),
                n = !1,
                (i = ce.exec(a)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace(le, " ")
                }),
                a = a.slice(n.length)),
                x.filter)
                    !(i = he[r].exec(a)) || l[r] && !(i = l[r](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: r,
                        matches: i
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? w.error(e) : H(e, s).slice(0)
        }
        ,
        I = w.compile = function(e, t) {
            var n, i = [], o = [], r = W[e + " "];
            if (!r) {
                for (t || (t = S(e)),
                n = t.length; n--; )
                    (r = f(t[n]))[_] ? i.push(r) : o.push(r);
                (r = W(e, c(o, i))).selector = e
            }
            return r
        }
        ,
        j = w.select = function(e, t, n, i) {
            var o, r, a, s, l, u = "function" == typeof e && e, c = !i && S(e = u.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (a = r[0]).type && g.getById && 9 === t.nodeType && D && x.relative[r[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(Te, xe), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o],
                !x.relative[s = a.type]); )
                    if ((l = x.find[s]) && (i = l(a.matches[0].replace(Te, xe), be.test(r[0].type) && h(t.parentNode) || t))) {
                        if (r.splice(o, 1),
                        !(e = i.length && m(r)))
                            return J.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || I(e, c))(i, t, !D, n, be.test(e) && h(t.parentNode) || t),
            n
        }
        ,
        g.sortStable = _.split("").sort(V).join("") === _,
        g.detectDuplicates = !!$,
        Y(),
        g.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        g.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || t("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || t(te, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        w
    }(h);
    oe.find = ue,
    oe.expr = ue.selectors,
    oe.expr[":"] = oe.expr.pseudos,
    oe.unique = ue.uniqueSort,
    oe.text = ue.getText,
    oe.isXMLDoc = ue.isXML,
    oe.contains = ue.contains;
    var ce = oe.expr.match.needsContext
      , pe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , de = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    oe.fn.extend({
        find: function(e) {
            var t, n = [], i = this, o = i.length;
            if ("string" != typeof e)
                return this.pushStack(oe(e).filter(function() {
                    for (t = 0; t < o; t++)
                        if (oe.contains(i[t], this))
                            return !0
                }));
            for (t = 0; t < o; t++)
                oe.find(e, i[t], n);
            return (n = this.pushStack(1 < o ? oe.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(u(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(u(this, e || [], !0))
        },
        is: function(e) {
            return !!u(this, "string" == typeof e && ce.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var fe, he = h.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (oe.fn.init = function(e, t) {
        var n, i;
        if (!e)
            return this;
        if ("string" != typeof e)
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : oe.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector,
            this.context = e.context),
            oe.makeArray(e, this));
        if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : me.exec(e)) || !n[1] && t)
            return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof oe ? t[0] : t,
            oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)),
            pe.test(n[1]) && oe.isPlainObject(t))
                for (n in t)
                    oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        if ((i = he.getElementById(n[2])) && i.parentNode) {
            if (i.id !== n[2])
                return fe.find(e);
            this.length = 1,
            this[0] = i
        }
        return this.context = he,
        this.selector = e,
        this
    }
    ).prototype = oe.fn,
    fe = oe(he);
    var ye = /^(?:parents|prev(?:Until|All))/
      , ge = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    oe.extend({
        dir: function(e, t, n) {
            for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n)); )
                1 === o.nodeType && i.push(o),
                o = o[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    oe.fn.extend({
        has: function(e) {
            var t, n = oe(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++)
                    if (oe.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], a = ce.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(1 < r.length ? oe.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return oe.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return oe.dir(e, "parentNode", n)
        },
        next: function(e) {
            return n(e, "nextSibling")
        },
        prev: function(e) {
            return n(e, "previousSibling")
        },
        nextAll: function(e) {
            return oe.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return oe.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return oe.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return oe.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return oe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return oe.sibling(e.firstChild)
        },
        contents: function(e) {
            return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
        }
    }, function(i, o) {
        oe.fn[i] = function(e, t) {
            var n = oe.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e),
            t && "string" == typeof t && (n = oe.filter(t, n)),
            1 < this.length && (ge[i] || (n = oe.unique(n)),
            ye.test(i) && (n = n.reverse())),
            this.pushStack(n)
        }
    });
    var ve, be = /\S+/g, we = {};
    oe.Callbacks = function(o) {
        o = "string" == typeof o ? we[o] || e(o) : oe.extend({}, o);
        var r, t, n, a, i, s, l = [], u = !o.once && [], c = function(e) {
            for (t = o.memory && e,
            n = !0,
            i = s || 0,
            s = 0,
            a = l.length,
            r = !0; l && i < a; i++)
                if (!1 === l[i].apply(e[0], e[1]) && o.stopOnFalse) {
                    t = !1;
                    break
                }
            r = !1,
            l && (u ? u.length && c(u.shift()) : t ? l = [] : p.disable())
        }, p = {
            add: function() {
                if (l) {
                    var e = l.length;
                    !function i(e) {
                        oe.each(e, function(e, t) {
                            var n = oe.type(t);
                            "function" === n ? o.unique && p.has(t) || l.push(t) : t && t.length && "string" !== n && i(t)
                        })
                    }(arguments),
                    r ? a = l.length : t && (s = e,
                    c(t))
                }
                return this
            },
            remove: function() {
                return l && oe.each(arguments, function(e, t) {
                    for (var n; -1 < (n = oe.inArray(t, l, n)); )
                        l.splice(n, 1),
                        r && (n <= a && a--,
                        n <= i && i--)
                }),
                this
            },
            has: function(e) {
                return e ? -1 < oe.inArray(e, l) : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                a = 0,
                this
            },
            disable: function() {
                return l = u = t = void 0,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return u = void 0,
                t || p.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(e, t) {
                return !l || n && !u || (t = [e, (t = t || []).slice ? t.slice() : t],
                r ? u.push(t) : c(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return p
    }
    ,
    oe.extend({
        Deferred: function(e) {
            var r = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]]
              , o = "pending"
              , a = {
                state: function() {
                    return o
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var o = arguments;
                    return oe.Deferred(function(i) {
                        oe.each(r, function(e, t) {
                            var n = oe.isFunction(o[e]) && o[e];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && oe.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                            })
                        }),
                        o = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? oe.extend(e, a) : a
                }
            }
              , s = {};
            return a.pipe = a.then,
            oe.each(r, function(e, t) {
                var n = t[2]
                  , i = t[3];
                a[t[1]] = n.add,
                i && n.add(function() {
                    o = i
                }, r[1 ^ e][2].disable, r[2][2].lock),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? a : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var o, t, n, i = 0, r = X.call(arguments), a = r.length, s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0, l = 1 === s ? e : oe.Deferred(), u = function(t, n, i) {
                return function(e) {
                    n[t] = this,
                    i[t] = 1 < arguments.length ? X.call(arguments) : e,
                    i === o ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (1 < a)
                for (o = new Array(a),
                t = new Array(a),
                n = new Array(a); i < a; i++)
                    r[i] && oe.isFunction(r[i].promise) ? r[i].promise().done(u(i, n, r)).fail(l.reject).progress(u(i, t, o)) : --s;
            return s || l.resolveWith(n, r),
            l.promise()
        }
    }),
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e),
        this
    }
    ,
    oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            if (!0 === e ? !--oe.readyWait : !oe.isReady) {
                if (!he.body)
                    return setTimeout(oe.ready);
                (oe.isReady = !0) !== e && 0 < --oe.readyWait || (ve.resolveWith(he, [oe]),
                oe.fn.triggerHandler && (oe(he).triggerHandler("ready"),
                oe(he).off("ready")))
            }
        }
    }),
    oe.ready.promise = function(e) {
        if (!ve)
            if (ve = oe.Deferred(),
            "complete" === he.readyState)
                setTimeout(oe.ready);
            else if (he.addEventListener)
                he.addEventListener("DOMContentLoaded", o, !1),
                h.addEventListener("load", o, !1);
            else {
                he.attachEvent("onreadystatechange", o),
                h.attachEvent("onload", o);
                var t = !1;
                try {
                    t = null == h.frameElement && he.documentElement
                } catch (X) {}
                t && t.doScroll && function Z() {
                    if (!oe.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (h) {
                            return setTimeout(Z, 50)
                        }
                        i(),
                        oe.ready()
                    }
                }()
            }
        return ve.promise(e)
    }
    ;
    var Te, xe = "undefined";
    for (Te in oe(ne))
        break;
    ne.ownLast = "0" !== Te,
    ne.inlineBlockNeedsLayout = !1,
    oe(function() {
        var e, t, n, i;
        (n = he.getElementsByTagName("body")[0]) && n.style && (t = he.createElement("div"),
        (i = he.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(t),
        typeof t.style.zoom !== xe && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var e = he.createElement("div");
        if (null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                ne.deleteExpando = !1
            }
        }
        e = null
    }(),
    oe.acceptData = function(e) {
        var t = oe.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }
    ;
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Pe = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando]) && !l(e)
        },
        data: function(e, t, n) {
            return r(e, t, n)
        },
        removeData: function(e, t) {
            return a(e, t)
        },
        _data: function(e, t, n) {
            return r(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return a(e, t, !0)
        }
    }),
    oe.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0], a = r && r.attributes;
            if (void 0 !== e)
                return "object" == typeof e ? this.each(function() {
                    oe.data(this, e)
                }) : 1 < arguments.length ? this.each(function() {
                    oe.data(this, e, t)
                }) : r ? s(r, e, oe.data(r, e)) : void 0;
            if (this.length && (o = oe.data(r),
            1 === r.nodeType && !oe._data(r, "parsedAttrs"))) {
                for (n = a.length; n--; )
                    a[n] && (0 === (i = a[n].name).indexOf("data-") && s(r, i = oe.camelCase(i.slice(5)), o[i]));
                oe._data(r, "parsedAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                oe.removeData(this, e)
            })
        }
    }),
    oe.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue",
            i = oe._data(e, t),
            n && (!i || oe.isArray(n) ? i = oe._data(e, t, oe.makeArray(n)) : i.push(n)),
            i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t)
              , i = n.length
              , o = n.shift()
              , r = oe._queueHooks(e, t)
              , a = function() {
                oe.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, a, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return oe._data(e, n) || oe._data(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    oe._removeData(e, t + "queue"),
                    oe._removeData(e, n)
                })
            })
        }
    }),
    oe.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? oe.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = oe.queue(this, t, n);
                oe._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && oe.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, o = oe.Deferred(), r = this, a = this.length, s = function() {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = oe._data(r[a], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(s));
            return s(),
            o.promise(t)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Ie = ["Top", "Right", "Bottom", "Left"]
      , je = function(e, t) {
        return e = t || e,
        "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
    }
      , ke = oe.access = function(e, t, n, i, o, r, a) {
        var s = 0
          , l = e.length
          , u = null == n;
        if ("object" === oe.type(n))
            for (s in o = !0,
            n)
                oe.access(e, t, s, n[s], !0, r, a);
        else if (void 0 !== i && (o = !0,
        oe.isFunction(i) || (a = !0),
        u && (a ? (t.call(e, i),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(oe(e), n)
        }
        )),
        t))
            for (; s < l; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
    }
      , Ee = /^(?:checkbox|radio)$/i;
    !function() {
        var e = he.createElement("input")
          , t = he.createElement("div")
          , n = he.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        ne.leadingWhitespace = 3 === t.firstChild.nodeType,
        ne.tbody = !t.getElementsByTagName("tbody").length,
        ne.htmlSerialize = !!t.getElementsByTagName("link").length,
        ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML,
        e.type = "checkbox",
        e.checked = !0,
        n.appendChild(e),
        ne.appendChecked = e.checked,
        t.innerHTML = "<textarea>x</textarea>",
        ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        n.appendChild(t),
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ne.noCloneEvent = !0,
        t.attachEvent && (t.attachEvent("onclick", function() {
            ne.noCloneEvent = !1
        }),
        t.cloneNode(!0).click()),
        null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (X) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, t, n = he.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            t = "on" + e,
            (ne[e + "Bubbles"] = t in h) || (n.setAttribute(t, "t"),
            ne[e + "Bubbles"] = !1 === n.attributes[t].expando);
        n = null
    }();
    var $e = /^(?:input|select|textarea)$/i
      , Ye = /^key/
      , Ae = /^(?:mouse|pointer|contextmenu)|click/
      , Ne = /^(?:focusinfocus|focusoutblur)$/
      , De = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, a, s, l, u, c, p, d, f, h, m, y = oe._data(e);
            if (y) {
                for (n.handler && (n = (l = n).handler,
                o = l.selector),
                n.guid || (n.guid = oe.guid++),
                (a = y.events) || (a = y.events = {}),
                (c = y.handle) || ((c = y.handle = function(e) {
                    return typeof oe === xe || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
                }
                ).elem = e),
                s = (t = (t || "").match(be) || [""]).length; s--; )
                    f = m = (r = De.exec(t[s]) || [])[1],
                    h = (r[2] || "").split(".").sort(),
                    f && (u = oe.event.special[f] || {},
                    f = (o ? u.delegateType : u.bindType) || f,
                    u = oe.event.special[f] || {},
                    p = oe.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && oe.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, l),
                    (d = a[f]) || ((d = a[f] = []).delegateCount = 0,
                    u.setup && !1 !== u.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))),
                    u.add && (u.add.call(e, p),
                    p.handler.guid || (p.handler.guid = n.guid)),
                    o ? d.splice(d.delegateCount++, 0, p) : d.push(p),
                    oe.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var r, a, s, l, u, c, p, d, f, h, m, y = oe.hasData(e) && oe._data(e);
            if (y && (c = y.events)) {
                for (u = (t = (t || "").match(be) || [""]).length; u--; )
                    if (f = m = (s = De.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    f) {
                        for (p = oe.event.special[f] || {},
                        d = c[f = (i ? p.delegateType : p.bindType) || f] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = r = d.length; r--; )
                            a = d[r],
                            !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (d.splice(r, 1),
                            a.selector && d.delegateCount--,
                            p.remove && p.remove.call(e, a));
                        l && !d.length && (p.teardown && !1 !== p.teardown.call(e, h, y.handle) || oe.removeEvent(e, f, y.handle),
                        delete c[f])
                    } else
                        for (f in c)
                            oe.event.remove(e, f + t[u], n, i, !0);
                oe.isEmptyObject(c) && (delete y.handle,
                oe._removeData(e, "events"))
            }
        },
        trigger: function(e, t, n, i) {
            var o, r, a, s, l, u, c, p = [n || he], d = te.call(e, "type") ? e.type : e, f = te.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = n = n || he,
            3 !== n.nodeType && 8 !== n.nodeType && !Ne.test(d + oe.event.triggered) && (0 <= d.indexOf(".") && (d = (f = d.split(".")).shift(),
            f.sort()),
            r = d.indexOf(":") < 0 && "on" + d,
            (e = e[oe.expando] ? e : new oe.Event(d,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
            e.namespace = f.join("."),
            e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : oe.makeArray(t, [e]),
            l = oe.event.special[d] || {},
            i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !oe.isWindow(n)) {
                    for (s = l.delegateType || d,
                    Ne.test(s + d) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a),
                        u = a;
                    u === (n.ownerDocument || he) && p.push(u.defaultView || u.parentWindow || h)
                }
                for (c = 0; (a = p[c++]) && !e.isPropagationStopped(); )
                    e.type = 1 < c ? s : l.bindType || d,
                    (o = (oe._data(a, "events") || {})[e.type] && oe._data(a, "handle")) && o.apply(a, t),
                    (o = r && a[r]) && o.apply && oe.acceptData(a) && (e.result = o.apply(a, t),
                    !1 === e.result && e.preventDefault());
                if (e.type = d,
                !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), t)) && oe.acceptData(n) && r && n[d] && !oe.isWindow(n)) {
                    (u = n[r]) && (n[r] = null),
                    oe.event.triggered = d;
                    try {
                        n[d]()
                    } catch (m) {}
                    oe.event.triggered = void 0,
                    u && (n[r] = u)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, i, o, r, a = [], s = X.call(arguments), l = (oe._data(this, "events") || {})[e.type] || [], u = oe.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (a = oe.event.handlers.call(this, e, l),
                t = 0; (o = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = o.elem,
                    r = 0; (i = o.handlers[r++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                        e.data = i.data,
                        void 0 !== (n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (e.result = n) && (e.preventDefault(),
                        e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (o = [],
                        r = 0; r < s; r++)
                            void 0 === o[n = (i = t[r]).selector + " "] && (o[n] = i.needsContext ? 0 <= oe(n, this).index(l) : oe.find(n, this, null, [l]).length),
                            o[n] && o.push(i);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        fix: function(e) {
            if (e[oe.expando])
                return e;
            var t, n, i, o = e.type, r = e, a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Ae.test(o) ? this.mouseHooks : Ye.test(o) ? this.keyHooks : {}),
            i = a.props ? this.props.concat(a.props) : this.props,
            e = new oe.Event(r),
            t = i.length; t--; )
                e[n = i[t]] = r[n];
            return e.target || (e.target = r.srcElement || he),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (o = (i = e.target.ownerDocument || he).documentElement,
                n = i.body,
                e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== d() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (h) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === d() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? oe.event.trigger(o, null, t) : oe.event.dispatch.call(t, o),
            o.isDefaultPrevented() && n.preventDefault()
        }
    },
    oe.removeEvent = he.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === xe && (e[i] = null),
        e.detachEvent(i, n))
    }
    ,
    oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? c : p) : this.type = e,
        t && oe.extend(this, t),
        this.timeStamp = e && e.timeStamp || oe.now(),
        void (this[oe.expando] = !0)) : new oe.Event(e,t)
    }
    ,
    oe.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        oe.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== n && !oe.contains(n, i)) && (e.type = o.origType,
                t = o.handler.apply(this, arguments),
                e.type = r),
                t
            }
        }
    }),
    ne.submitBubbles || (oe.event.special.submit = {
        setup: function() {
            return !oe.nodeName(this, "form") && void oe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                oe._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !oe.nodeName(this, "form") && void oe.event.remove(this, "._submit")
        }
    }),
    ne.changeBubbles || (oe.event.special.change = {
        setup: function() {
            return $e.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            oe.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                oe.event.simulate("change", this, e, !0)
            })),
            !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                $e.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                }),
                oe._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return oe.event.remove(this, "._change"),
            !$e.test(this.nodeName)
        }
    }),
    ne.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var o = function(e) {
            oe.event.simulate(i, e.target, oe.event.fix(e), !0)
        };
        oe.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = oe._data(e, i);
                t || e.addEventListener(n, o, !0),
                oe._data(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = oe._data(e, i) - 1;
                t ? oe._data(e, i, t) : (e.removeEventListener(n, o, !0),
                oe._removeData(e, i))
            }
        }
    }),
    oe.fn.extend({
        on: function(e, t, n, i, o) {
            var r, a;
            if ("object" == typeof e) {
                for (r in "string" != typeof t && (n = n || t,
                t = void 0),
                e)
                    this.on(r, t, n, e[r], o);
                return this
            }
            if (null == n && null == i ? (i = t,
            n = t = void 0) : null == i && ("string" == typeof t ? (i = n,
            n = void 0) : (i = n,
            n = t,
            t = void 0)),
            !1 === i)
                i = p;
            else if (!i)
                return this;
            return 1 === o && (a = i,
            (i = function(e) {
                return oe().off(e),
                a.apply(this, arguments)
            }
            ).guid = a.guid || (a.guid = oe.guid++)),
            this.each(function() {
                oe.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" != typeof e)
                return (!1 === t || "function" == typeof t) && (n = t,
                t = void 0),
                !1 === n && (n = p),
                this.each(function() {
                    oe.event.remove(this, e, n, t)
                });
            for (o in e)
                this.off(o, t, e[o]);
            return this
        },
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Oe = / jQuery\d+="(?:null|\d+)"/g
      , Le = new RegExp("<(?:" + Qe + ")[\\s/>]","i")
      , Me = /^\s+/
      , _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Be = /<([\w:]+)/
      , Re = /<tbody/i
      , Fe = /<|&#?\w+;/
      , ze = /<(?:script|style|link)/i
      , He = /checked\s*(?:[^=]|=\s*.checked.)/i
      , We = /^$|\/(?:java|ecma)script/i
      , Ve = /^true\/(.*)/
      , qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Ue = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , Xe = y(he).appendChild(he.createElement("div"));
    Ue.optgroup = Ue.option,
    Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead,
    Ue.th = Ue.td,
    oe.extend({
        clone: function(e, t, n) {
            var i, o, r, a, s, l = oe.contains(e.ownerDocument, e);
            if (ne.html5Clone || oe.isXMLDoc(e) || !Le.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Xe.innerHTML = e.outerHTML,
            Xe.removeChild(r = Xe.firstChild)),
            !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (i = g(r),
                s = g(e),
                a = 0; null != (o = s[a]); ++a)
                    i[a] && C(o, i[a]);
            if (t)
                if (n)
                    for (s = s || g(e),
                    i = i || g(r),
                    a = 0; null != (o = s[a]); a++)
                        x(o, i[a]);
                else
                    x(e, r);
            return 0 < (i = g(r, "script")).length && T(i, !l && g(e, "script")),
            i = s = o = null,
            r
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, a, s, l, u, c, p = e.length, d = y(t), f = [], h = 0; h < p; h++)
                if ((r = e[h]) || 0 === r)
                    if ("object" === oe.type(r))
                        oe.merge(f, r.nodeType ? [r] : r);
                    else if (Fe.test(r)) {
                        for (s = s || d.appendChild(t.createElement("div")),
                        l = (Be.exec(r) || ["", ""])[1].toLowerCase(),
                        c = Ue[l] || Ue._default,
                        s.innerHTML = c[1] + r.replace(_e, "<$1></$2>") + c[2],
                        o = c[0]; o--; )
                            s = s.lastChild;
                        if (!ne.leadingWhitespace && Me.test(r) && f.push(t.createTextNode(Me.exec(r)[0])),
                        !ne.tbody)
                            for (o = (r = "table" !== l || Re.test(r) ? "<table>" !== c[1] || Re.test(r) ? 0 : s : s.firstChild) && r.childNodes.length; o--; )
                                oe.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                        for (oe.merge(f, s.childNodes),
                        s.textContent = ""; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s = d.lastChild
                    } else
                        f.push(t.createTextNode(r));
            for (s && d.removeChild(s),
            ne.appendChecked || oe.grep(g(f, "input"), v),
            h = 0; r = f[h++]; )
                if ((!i || -1 === oe.inArray(r, i)) && (a = oe.contains(r.ownerDocument, r),
                s = g(d.appendChild(r), "script"),
                a && T(s),
                n))
                    for (o = 0; r = s[o++]; )
                        We.test(r.type || "") && n.push(r);
            return s = null,
            d
        },
        cleanData: function(e, t) {
            for (var n, i, o, r, a = 0, s = oe.expando, l = oe.cache, u = ne.deleteExpando, c = oe.event.special; null != (n = e[a]); a++)
                if ((t || oe.acceptData(n)) && (r = (o = n[s]) && l[o])) {
                    if (r.events)
                        for (i in r.events)
                            c[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o],
                    u ? delete n[s] : typeof n.removeAttribute !== xe ? n.removeAttribute(s) : n[s] = null,
                    U.push(o))
                }
        }
    }),
    oe.fn.extend({
        text: function(e) {
            return ke(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || f(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? oe.filter(e, this) : this, o = 0; null != (n = i[o]); o++)
                t || 1 !== n.nodeType || oe.cleanData(g(n)),
                n.parentNode && (t && oe.contains(n.ownerDocument, n) && T(g(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && oe.cleanData(g(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && oe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return ke(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") : void 0;
                if (!("string" != typeof e || ze.test(e) || !ne.htmlSerialize && Le.test(e) || !ne.leadingWhitespace && Me.test(e) || Ue[(Be.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(_e, "<$1></$2>");
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (oe.cleanData(g(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (Z) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = e;
            return this.domManip(arguments, function(e) {
                t = this.parentNode,
                oe.cleanData(g(this)),
                t && t.replaceChild(e, this)
            }),
            t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, i) {
            n = Z.apply([], n);
            var e, t, o, r, a, s, l = 0, u = this.length, c = this, p = u - 1, d = n[0], f = oe.isFunction(d);
            if (f || 1 < u && "string" == typeof d && !ne.checkClone && He.test(d))
                return this.each(function(e) {
                    var t = c.eq(e);
                    f && (n[0] = d.call(this, e, t.html())),
                    t.domManip(n, i)
                });
            if (u && (e = (s = oe.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild,
            1 === s.childNodes.length && (s = e),
            e)) {
                for (o = (r = oe.map(g(s, "script"), b)).length; l < u; l++)
                    t = s,
                    l !== p && (t = oe.clone(t, !0, !0),
                    o && oe.merge(r, g(t, "script"))),
                    i.call(this[l], t, l);
                if (o)
                    for (a = r[r.length - 1].ownerDocument,
                    oe.map(r, w),
                    l = 0; l < o; l++)
                        t = r[l],
                        We.test(t.type || "") && !oe._data(t, "globalEval") && oe.contains(a, t) && (t.src ? oe._evalUrl && oe._evalUrl(t.src) : oe.globalEval((t.text || t.textContent || t.innerHTML || "").replace(qe, "")));
                s = e = null
            }
            return this
        }
    }),
    oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        oe.fn[e] = function(e) {
            for (var t, n = 0, i = [], o = oe(e), r = o.length - 1; n <= r; n++)
                t = n === r ? this : this.clone(!0),
                oe(o[n])[a](t),
                G.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var Ze, Ge, Je = {};
    ne.shrinkWrapBlocks = function() {
        return null != Ge ? Ge : (Ge = !1,
        (t = he.getElementsByTagName("body")[0]) && t.style ? (e = he.createElement("div"),
        (n = he.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        t.appendChild(n).appendChild(e),
        typeof e.style.zoom !== xe && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
        e.appendChild(he.createElement("div")).style.width = "5px",
        Ge = 3 !== e.offsetWidth),
        t.removeChild(n),
        Ge) : void 0);
        var e, t, n
    }
    ;
    var Ke, et, tt = /^margin/, nt = new RegExp("^(" + Se + ")(?!px)[a-z%]+$","i"), it = /^(top|right|bottom|left)$/;
    h.getComputedStyle ? (Ke = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : h.getComputedStyle(e, null)
    }
    ,
    et = function(e, t, n) {
        var i, o, r, a, s = e.style;
        return a = (n = n || Ke(e)) ? n.getPropertyValue(t) || n[t] : void 0,
        n && ("" !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)),
        nt.test(a) && tt.test(t) && (i = s.width,
        o = s.minWidth,
        r = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = i,
        s.minWidth = o,
        s.maxWidth = r)),
        void 0 === a ? a : a + ""
    }
    ) : he.documentElement.currentStyle && (Ke = function(e) {
        return e.currentStyle
    }
    ,
    et = function(e, t, n) {
        var i, o, r, a, s = e.style;
        return null == (a = (n = n || Ke(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]),
        nt.test(a) && !it.test(t) && (i = s.left,
        (r = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left),
        s.left = "fontSize" === t ? "1em" : a,
        a = s.pixelLeft + "px",
        s.left = i,
        r && (o.left = r)),
        void 0 === a ? a : a + "" || "auto"
    }
    ),
    function() {
        function e() {
            var e, t, n, i;
            (t = he.getElementsByTagName("body")[0]) && t.style && (e = he.createElement("div"),
            (n = he.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            t.appendChild(n).appendChild(e),
            e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            o = r = !1,
            s = !0,
            h.getComputedStyle && (o = "1%" !== (h.getComputedStyle(e, null) || {}).top,
            r = "4px" === (h.getComputedStyle(e, null) || {
                width: "4px"
            }).width,
            (i = e.appendChild(he.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            i.style.marginRight = i.style.width = "0",
            e.style.width = "1px",
            s = !parseFloat((h.getComputedStyle(i, null) || {}).marginRight),
            e.removeChild(i)),
            e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            (i = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            (a = 0 === i[0].offsetHeight) && (i[0].style.display = "",
            i[1].style.display = "none",
            a = 0 === i[0].offsetHeight),
            t.removeChild(n))
        }
        var t, n, i, o, r, a, s;
        (t = he.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        (n = (i = t.getElementsByTagName("a")[0]) && i.style) && (n.cssText = "float:left;opacity:.5",
        ne.opacity = "0.5" === n.opacity,
        ne.cssFloat = !!n.cssFloat,
        t.style.backgroundClip = "content-box",
        t.cloneNode(!0).style.backgroundClip = "",
        ne.clearCloneStyle = "content-box" === t.style.backgroundClip,
        ne.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing,
        oe.extend(ne, {
            reliableHiddenOffsets: function() {
                return null == a && e(),
                a
            },
            boxSizingReliable: function() {
                return null == r && e(),
                r
            },
            pixelPosition: function() {
                return null == o && e(),
                o
            },
            reliableMarginRight: function() {
                return null == s && e(),
                s
            }
        }))
    }(),
    oe.swap = function(e, t, n, i) {
        var o, r, a = {};
        for (r in t)
            a[r] = e.style[r],
            e.style[r] = t[r];
        for (r in o = n.apply(e, i || []),
        t)
            e.style[r] = a[r];
        return o
    }
    ;
    var ot = /alpha\([^)]*\)/i
      , rt = /opacity\s*=\s*([^)]*)/
      , at = /^(none|table(?!-c[ea]).+)/
      , st = new RegExp("^(" + Se + ")(.*)$","i")
      , lt = new RegExp("^([+-])=(" + Se + ")","i")
      , ut = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ct = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , pt = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = et(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = oe.camelCase(t), l = e.style;
                if (t = oe.cssProps[s] || (oe.cssProps[s] = j(l, s)),
                a = oe.cssHooks[t] || oe.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
                if ("string" === (r = typeof n) && (o = lt.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)),
                r = "number"),
                null != n && n == n && ("number" !== r || oe.cssNumber[s] || (n += "px"),
                ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                !(a && "set"in a && void 0 === (n = a.set(e, n, i)))))
                    try {
                        l[t] = n
                    } catch (te) {}
            }
        },
        css: function(e, t, n, i) {
            var o, r, a, s = oe.camelCase(t);
            return t = oe.cssProps[s] || (oe.cssProps[s] = j(e.style, s)),
            (a = oe.cssHooks[t] || oe.cssHooks[s]) && "get"in a && (r = a.get(e, !0, n)),
            void 0 === r && (r = et(e, t, i)),
            "normal" === r && t in ct && (r = ct[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || oe.isNumeric(o) ? o || 0 : r) : r
        }
    }),
    oe.each(["height", "width"], function(e, o) {
        oe.cssHooks[o] = {
            get: function(e, t, n) {
                return t ? at.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, ut, function() {
                    return Y(e, o, n)
                }) : Y(e, o, n) : void 0
            },
            set: function(e, t, n) {
                var i = n && Ke(e);
                return E(e, t, n ? $(e, o, n, ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    ne.opacity || (oe.cssHooks.opacity = {
        get: function(e, t) {
            return rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , i = e.currentStyle
              , o = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , r = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === oe.trim(r.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || i && !i.filter) || (n.filter = ot.test(r) ? r.replace(ot, o) : r + " " + o)
        }
    }),
    oe.cssHooks.marginRight = I(ne.reliableMarginRight, function(e, t) {
        return t ? oe.swap(e, {
            display: "inline-block"
        }, et, [e, "marginRight"]) : void 0
    }),
    oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        oe.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[o + Ie[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        tt.test(o) || (oe.cssHooks[o + r].set = E)
    }),
    oe.fn.extend({
        css: function(e, t) {
            return ke(this, function(e, t, n) {
                var i, o, r = {}, a = 0;
                if (oe.isArray(t)) {
                    for (i = Ke(e),
                    o = t.length; a < o; a++)
                        r[t[a]] = oe.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return k(this, !0)
        },
        hide: function() {
            return k(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                je(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }),
    (oe.Tween = A).prototype = {
        constructor: A,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = A.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : A.propHooks._default.set(this),
            this
        }
    },
    A.prototype.init.prototype = A.prototype,
    A.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    oe.fx = A.prototype.init,
    oe.fx.step = {};
    var dt, ft, ht, mt, yt, gt, vt, bt = /^(?:toggle|show|hide)$/, wt = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$","i"), Tt = /queueHooks$/, xt = [O], Ct = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , i = n.cur()
              , o = wt.exec(t)
              , r = o && o[3] || (oe.cssNumber[e] ? "" : "px")
              , a = (oe.cssNumber[e] || "px" !== r && +i) && wt.exec(oe.css(n.elem, e))
              , s = 1
              , l = 20;
            if (a && a[3] !== r)
                for (r = r || a[3],
                o = o || [],
                a = +i || 1; a /= s = s || ".5",
                oe.style(n.elem, e, a + r),
                s !== (s = n.cur() / i) && 1 !== s && --l; )
                    ;
            return o && (a = n.start = +a || +i || 0,
            n.unit = r,
            n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]),
            n
        }
        ]
    };
    oe.Animation = oe.extend(M, {
        tweener: function(e, t) {
            oe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, o = e.length; i < o; i++)
                n = e[i],
                Ct[n] = Ct[n] || [],
                Ct[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? xt.unshift(e) : xt.push(e)
        }
    }),
    oe.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default,
        (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            oe.isFunction(i.old) && i.old.call(this),
            i.queue && oe.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    oe.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(je).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var o = oe.isEmptyObject(t)
              , r = oe.speed(e, n, i)
              , a = function() {
                var e = M(this, oe.extend({}, t), r);
                (o || oe._data(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(o, e, r) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof o && (r = e,
            e = o,
            o = void 0),
            e && !1 !== o && this.queue(o || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != o && o + "queueHooks"
                  , n = oe.timers
                  , i = oe._data(this);
                if (t)
                    i[t] && i[t].stop && a(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && Tt.test(t) && a(i[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r),
                    e = !1,
                    n.splice(t, 1));
                (e || !r) && oe.dequeue(this, o)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = oe._data(this), n = t[a + "queue"], i = t[a + "queueHooks"], o = oe.timers, r = n ? n.length : 0;
                for (t.finish = !0,
                oe.queue(this, a, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length; e--; )
                    o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0),
                    o.splice(e, 1));
                for (e = 0; e < r; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    oe.each(["toggle", "show", "hide"], function(e, i) {
        var o = oe.fn[i];
        oe.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(D(i, !0), e, t, n)
        }
    }),
    oe.each({
        slideDown: D("show"),
        slideUp: D("hide"),
        slideToggle: D("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        oe.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    oe.timers = [],
    oe.fx.tick = function() {
        var e, t = oe.timers, n = 0;
        for (dt = oe.now(); n < t.length; n++)
            (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || oe.fx.stop(),
        dt = void 0
    }
    ,
    oe.fx.timer = function(e) {
        oe.timers.push(e),
        e() ? oe.fx.start() : oe.timers.pop()
    }
    ,
    oe.fx.interval = 13,
    oe.fx.start = function() {
        ft || (ft = setInterval(oe.fx.tick, oe.fx.interval))
    }
    ,
    oe.fx.stop = function() {
        clearInterval(ft),
        ft = null
    }
    ,
    oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    oe.fn.delay = function(i, e) {
        return i = oe.fx && oe.fx.speeds[i] || i,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = setTimeout(e, i);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    }
    ,
    (mt = he.createElement("div")).setAttribute("className", "t"),
    mt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    gt = mt.getElementsByTagName("a")[0],
    vt = (yt = he.createElement("select")).appendChild(he.createElement("option")),
    ht = mt.getElementsByTagName("input")[0],
    gt.style.cssText = "top:1px",
    ne.getSetAttribute = "t" !== mt.className,
    ne.style = /top/.test(gt.getAttribute("style")),
    ne.hrefNormalized = "/a" === gt.getAttribute("href"),
    ne.checkOn = !!ht.value,
    ne.optSelected = vt.selected,
    ne.enctype = !!he.createElement("form").enctype,
    yt.disabled = !0,
    ne.optDisabled = !vt.disabled,
    (ht = he.createElement("input")).setAttribute("value", ""),
    ne.input = "" === ht.getAttribute("value"),
    ht.value = "t",
    ht.setAttribute("type", "radio"),
    ne.radioValue = "t" === ht.value;
    var Pt = /\r/g;
    oe.fn.extend({
        val: function(n) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = oe.isFunction(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, oe(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : oe.isArray(t) && (t = oe.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (i = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]) && "set"in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = oe.valHooks[t.type] || oe.valHooks[t.nodeName.toLowerCase()]) && "get"in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(Pt, "") : null == e ? "" : e : void 0
        }
    }),
    oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++)
                        if (!(!(n = i[l]).selected && l !== o || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(),
                            r)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = oe.makeArray(t), a = o.length; a--; )
                        if (i = o[a],
                        0 <= oe.inArray(oe.valHooks.option.get(i), r))
                            try {
                                i.selected = n = !0
                            } catch (K) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = 0 <= oe.inArray(oe(e).val(), t) : void 0
            }
        },
        ne.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var St, It, jt = oe.expr.attrHandle, kt = /^(?:checked|selected)$/i, Et = ne.getSetAttribute, $t = ne.input;
    oe.fn.extend({
        attr: function(e, t) {
            return ke(this, oe.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }),
    oe.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r)
                return typeof e.getAttribute === xe ? oe.prop(e, t, n) : (1 === r && oe.isXMLDoc(e) || (t = t.toLowerCase(),
                i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? It : St)),
                void 0 === n ? i && "get"in i && null !== (o = i.get(e, t)) ? o : null == (o = oe.find.attr(e, t)) ? void 0 : o : null !== n ? i && "set"in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""),
                n) : void oe.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0, r = t && t.match(be);
            if (r && 1 === e.nodeType)
                for (; n = r[o++]; )
                    i = oe.propFix[n] || n,
                    oe.expr.match.bool.test(n) ? $t && Et || !kt.test(n) ? e[i] = !1 : e[oe.camelCase("default-" + n)] = e[i] = !1 : oe.attr(e, n, ""),
                    e.removeAttribute(Et ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    It = {
        set: function(e, t, n) {
            return !1 === t ? oe.removeAttr(e, n) : $t && Et || !kt.test(n) ? e.setAttribute(!Et && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = jt[t] || oe.find.attr;
        jt[t] = $t && Et || !kt.test(t) ? function(e, t, n) {
            var i, o;
            return n || (o = jt[t],
            jt[t] = i,
            i = null != r(e, t, n) ? t.toLowerCase() : null,
            jt[t] = o),
            i
        }
        : function(e, t, n) {
            return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    $t && Et || (oe.attrHooks.value = {
        set: function(e, t, n) {
            return oe.nodeName(e, "input") ? void (e.defaultValue = t) : St && St.set(e, t, n)
        }
    }),
    Et || (St = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
            i.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
    jt.id = jt.name = jt.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }
    ,
    oe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: St.set
    },
    oe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            St.set(e, "" !== t && t, n)
        }
    },
    oe.each(["width", "height"], function(e, n) {
        oe.attrHooks[n] = {
            set: function(e, t) {
                return "" === t ? (e.setAttribute(n, "auto"),
                t) : void 0
            }
        }
    })),
    ne.style || (oe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Yt = /^(?:input|select|textarea|button|object)$/i
      , At = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return ke(this, oe.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = oe.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (t) {}
            })
        }
    }),
    oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r)
                return (1 !== r || !oe.isXMLDoc(e)) && (t = oe.propFix[t] || t,
                o = oe.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Yt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    ne.hrefNormalized || oe.each(["href", "src"], function(e, t) {
        oe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    ne.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    }),
    ne.enctype || (oe.propFix.enctype = "encoding");
    var Nt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, a, s = 0, l = this.length, u = "string" == typeof t && t;
            if (oe.isFunction(t))
                return this.each(function(e) {
                    oe(this).addClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(be) || []; s < l; s++)
                    if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(Nt, " ") : " ")) {
                        for (r = 0; o = e[r++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = oe.trim(i),
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, a, s = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
            if (oe.isFunction(t))
                return this.each(function(e) {
                    oe(this).removeClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(be) || []; s < l; s++)
                    if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(Nt, " ") : "")) {
                        for (r = 0; o = e[r++]; )
                            for (; 0 <= i.indexOf(" " + o + " "); )
                                i = i.replace(" " + o + " ", " ");
                        a = t ? oe.trim(i) : "",
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var r = typeof o;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(o) : this.removeClass(o) : this.each(oe.isFunction(o) ? function(e) {
                oe(this).toggleClass(o.call(this, e, this.className, t), t)
            }
            : function() {
                if ("string" === r)
                    for (var e, t = 0, n = oe(this), i = o.match(be) || []; e = i[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    (r === xe || "boolean" === r) && (this.className && oe._data(this, "__className__", this.className),
                    this.className = this.className || !1 === o ? "" : oe._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(Nt, " ").indexOf(t))
                    return !0;
            return !1
        }
    }),
    oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        oe.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Dt = oe.now()
      , Qt = /\?/
      , Ot = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function(e) {
        if (h.JSON && h.JSON.parse)
            return h.JSON.parse(e + "");
        var o, r = null, t = oe.trim(e + "");
        return t && !oe.trim(t.replace(Ot, function(e, t, n, i) {
            return o && t && (r = 0),
            0 === r ? e : (o = n || t,
            r += !i - !n,
            "")
        })) ? Function("return " + t)() : oe.error("Invalid JSON: " + e)
    }
    ,
    oe.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            h.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
            t.loadXML(e))
        } catch (Z) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + e),
        t
    }
    ;
    var Lt, Mt, _t = /#.*$/, Bt = /([?&])_=[^&]*/, Rt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, zt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Vt = {}, qt = {}, Ut = "*/".concat("*");
    try {
        Mt = location.href
    } catch (cn) {
        (Mt = he.createElement("a")).href = "",
        Mt = Mt.href
    }
    Lt = Wt.exec(Mt.toLowerCase()) || [],
    oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mt,
            type: "GET",
            isLocal: Ft.test(Lt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ut,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, oe.ajaxSettings), t) : R(oe.ajaxSettings, e)
        },
        ajaxPrefilter: _(Vt),
        ajaxTransport: _(qt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var o, r, a, s, l, u = t;
                2 !== T && (T = 2,
                d && clearTimeout(d),
                h = void 0,
                p = i || "",
                x.readyState = 0 < e ? 4 : 0,
                o = 200 <= e && e < 300 || 304 === e,
                n && (s = F(m, x, n)),
                s = z(m, s, x, o),
                o ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (oe.lastModified[c] = l),
                (l = x.getResponseHeader("etag")) && (oe.etag[c] = l)),
                204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state,
                r = s.data,
                o = !(a = s.error))) : (a = u,
                (e || !u) && (u = "error",
                e < 0 && (e = 0))),
                x.status = e,
                x.statusText = (t || u) + "",
                o ? v.resolveWith(y, [r, u, x]) : v.rejectWith(y, [x, u, a]),
                x.statusCode(w),
                w = void 0,
                f && g.trigger(o ? "ajaxSuccess" : "ajaxError", [x, m, o ? r : a]),
                b.fireWith(y, [x, u]),
                f && (g.trigger("ajaxComplete", [x, m]),
                --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var i, o, c, p, d, f, h, r, m = oe.ajaxSetup({}, t), y = m.context || m, g = m.context && (y.nodeType || y.jquery) ? oe(y) : oe.event, v = oe.Deferred(), b = oe.Callbacks("once memory"), w = m.statusCode || {}, a = {}, s = {}, T = 0, l = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === T) {
                        if (!r)
                            for (r = {}; t = Rt.exec(p); )
                                r[t[1].toLowerCase()] = t[2];
                        t = r[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === T ? p : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return T || (e = s[n] = s[n] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return T || (m.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (T < 2)
                            for (t in e)
                                w[t] = [w[t], e[t]];
                        else
                            x.always(e[x.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || l;
                    return h && h.abort(t),
                    n(0, t),
                    this
                }
            };
            if (v.promise(x).complete = b.add,
            x.success = x.done,
            x.error = x.fail,
            m.url = ((e || m.url || Mt) + "").replace(_t, "").replace(Ht, Lt[1] + "//"),
            m.type = t.method || t.type || m.method || m.type,
            m.dataTypes = oe.trim(m.dataType || "*").toLowerCase().match(be) || [""],
            null == m.crossDomain && (i = Wt.exec(m.url.toLowerCase()),
            m.crossDomain = !(!i || i[1] === Lt[1] && i[2] === Lt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Lt[3] || ("http:" === Lt[1] ? "80" : "443")))),
            m.data && m.processData && "string" != typeof m.data && (m.data = oe.param(m.data, m.traditional)),
            B(Vt, m, t, x),
            2 === T)
                return x;
            for (o in (f = oe.event && m.global) && 0 == oe.active++ && oe.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !zt.test(m.type),
            c = m.url,
            m.hasContent || (m.data && (c = m.url += (Qt.test(c) ? "&" : "?") + m.data,
            delete m.data),
            !1 === m.cache && (m.url = Bt.test(c) ? c.replace(Bt, "$1_=" + Dt++) : c + (Qt.test(c) ? "&" : "?") + "_=" + Dt++)),
            m.ifModified && (oe.lastModified[c] && x.setRequestHeader("If-Modified-Since", oe.lastModified[c]),
            oe.etag[c] && x.setRequestHeader("If-None-Match", oe.etag[c])),
            (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && x.setRequestHeader("Content-Type", m.contentType),
            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : m.accepts["*"]),
            m.headers)
                x.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (!1 === m.beforeSend.call(y, x, m) || 2 === T))
                return x.abort();
            for (o in l = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                x[o](m[o]);
            if (h = B(qt, m, t, x)) {
                x.readyState = 1,
                f && g.trigger("ajaxSend", [x, m]),
                m.async && 0 < m.timeout && (d = setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    T = 1,
                    h.send(a, n)
                } catch (u) {
                    if (!(T < 2))
                        throw u;
                    n(-1, u)
                }
            } else
                n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }),
    oe.each(["get", "post"], function(e, o) {
        oe[o] = function(e, t, n, i) {
            return oe.isFunction(t) && (i = i || n,
            n = t,
            t = void 0),
            oe.ajax({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            })
        }
    }),
    oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    oe.fn.extend({
        wrapAll: function(t) {
            if (oe.isFunction(t))
                return this.each(function(e) {
                    oe(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = oe(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return this.each(oe.isFunction(n) ? function(e) {
                oe(this).wrapInner(n.call(this, e))
            }
            : function() {
                var e = oe(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            }
            )
        },
        wrap: function(t) {
            var n = oe.isFunction(t);
            return this.each(function(e) {
                oe(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    oe.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
    }
    ,
    oe.expr.filters.visible = function(e) {
        return !oe.expr.filters.hidden(e)
    }
    ;
    var Xt = /%20/g
      , Zt = /\[\]$/
      , Gt = /\r?\n/g
      , Jt = /^(?:submit|button|image|reset|file)$/i
      , Kt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, i = [], o = function(e, t) {
            t = oe.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional),
        oe.isArray(e) || e.jquery && !oe.isPlainObject(e))
            oe.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                H(n, e[n], t, o);
        return i.join("&").replace(Xt, "+")
    }
    ,
    oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Kt.test(this.nodeName) && !Jt.test(e) && (this.checked || !Ee.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Gt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Gt, "\r\n")
                }
            }).get()
        }
    }),
    oe.ajaxSettings.xhr = void 0 !== h.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || V()
    }
    : W;
    var en = 0
      , tn = {}
      , nn = oe.ajaxSettings.xhr();
    h.attachEvent && h.attachEvent("onunload", function() {
        for (var e in tn)
            tn[e](void 0, !0)
    }),
    ne.cors = !!nn && "withCredentials"in nn,
    (nn = ne.ajax = !!nn) && oe.ajaxTransport(function(l) {
        var u;
        if (!l.crossDomain || ne.cors)
            return {
                send: function(e, r) {
                    var t, a = l.xhr(), s = ++en;
                    if (a.open(l.type, l.url, l.async, l.username, l.password),
                    l.xhrFields)
                        for (t in l.xhrFields)
                            a[t] = l.xhrFields[t];
                    for (t in l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType),
                    l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                    a.send(l.hasContent && l.data || null),
                    u = function(e, t) {
                        var n, i, o;
                        if (u && (t || 4 === a.readyState))
                            if (delete tn[s],
                            u = void 0,
                            a.onreadystatechange = oe.noop,
                            t)
                                4 !== a.readyState && a.abort();
                            else {
                                o = {},
                                n = a.status,
                                "string" == typeof a.responseText && (o.text = a.responseText);
                                try {
                                    i = a.statusText
                                } catch (ne) {
                                    i = ""
                                }
                                n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                            }
                        o && r(n, i, o, a.getAllResponseHeaders())
                    }
                    ,
                    l.async ? 4 === a.readyState ? setTimeout(u) : a.onreadystatechange = tn[s] = u : u()
                },
                abort: function() {
                    u && u(void 0, !0)
                }
            }
    }),
    oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e),
                e
            }
        }
    }),
    oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    oe.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, o = he.head || oe("head")[0] || he.documentElement;
            return {
                send: function(e, n) {
                    (i = he.createElement("script")).async = !0,
                    t.scriptCharset && (i.charset = t.scriptCharset),
                    i.src = t.url,
                    i.onload = i.onreadystatechange = function(e, t) {
                        (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null,
                        i.parentNode && i.parentNode.removeChild(i),
                        i = null,
                        t || n(200, "success"))
                    }
                    ,
                    o.insertBefore(i, o.firstChild)
                },
                abort: function() {
                    i && i.onload(void 0, !0)
                }
            }
        }
    });
    var on = []
      , rn = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = on.pop() || oe.expando + "_" + Dt++;
            return this[e] = !0,
            e
        }
    }),
    oe.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, r, a = !1 !== e.jsonp && (rn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && rn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        a ? e[a] = e[a].replace(rn, "$1" + i) : !1 !== e.jsonp && (e.url += (Qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
        e.converters["script json"] = function() {
            return r || oe.error(i + " was not called"),
            r[0]
        }
        ,
        e.dataTypes[0] = "json",
        o = h[i],
        h[i] = function() {
            r = arguments
        }
        ,
        n.always(function() {
            h[i] = o,
            e[i] && (e.jsonpCallback = t.jsonpCallback,
            on.push(i)),
            r && oe.isFunction(o) && o(r[0]),
            r = o = void 0
        }),
        "script") : void 0
    }),
    oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || he;
        var i = pe.exec(e)
          , o = !n && [];
        return i ? [t.createElement(i[1])] : (i = oe.buildFragment([e], t, o),
        o && o.length && oe(o).remove(),
        oe.merge([], i.childNodes))
    }
    ;
    var an = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && an)
            return an.apply(this, arguments);
        var i, o, r, a = this, s = e.indexOf(" ");
        return 0 <= s && (i = oe.trim(e.slice(s, e.length)),
        e = e.slice(0, s)),
        oe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        0 < a.length && oe.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    oe.expr.filters.animated = function(t) {
        return oe.grep(oe.timers, function(e) {
            return t === e.elem
        }).length
    }
    ;
    var sn = h.document.documentElement;
    oe.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, a, s, l, u = oe.css(e, "position"), c = oe(e), p = {};
            "static" === u && (e.style.position = "relative"),
            s = c.offset(),
            r = oe.css(e, "top"),
            l = oe.css(e, "left"),
            ("absolute" === u || "fixed" === u) && -1 < oe.inArray("auto", [r, l]) ? (a = (i = c.position()).top,
            o = i.left) : (a = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            oe.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (p.top = t.top - s.top + a),
            null != t.left && (p.left = t.left - s.left + o),
            "using"in t ? t.using.call(e, p) : c.css(p)
        }
    },
    oe.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    oe.offset.setOffset(this, t, e)
                });
            var e, n, i = {
                top: 0,
                left: 0
            }, o = this[0], r = o && o.ownerDocument;
            return r ? (e = r.documentElement,
            oe.contains(e, o) ? (typeof o.getBoundingClientRect !== xe && (i = o.getBoundingClientRect()),
            n = q(r),
            {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                oe.nodeName(e[0], "html") || (n = e.offset()),
                n.top += oe.css(e[0], "borderTopWidth", !0),
                n.left += oe.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - oe.css(i, "marginTop", !0),
                    left: t.left - n.left - oe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || sn; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position"); )
                    e = e.offsetParent;
                return e || sn
            })
        }
    }),
    oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = /Y/.test(o);
        oe.fn[t] = function(e) {
            return ke(this, function(e, t, n) {
                var i = q(e);
                return void 0 === n ? i ? o in i ? i[o] : i.document.documentElement[t] : e[t] : void (i ? i.scrollTo(r ? oe(i).scrollLeft() : n, r ? n : oe(i).scrollTop()) : e[t] = n)
            }, t, e, arguments.length, null)
        }
    }),
    oe.each(["top", "left"], function(e, n) {
        oe.cssHooks[n] = I(ne.pixelPosition, function(e, t) {
            return t ? (t = et(e, n),
            nt.test(t) ? oe(e).position()[n] + "px" : t) : void 0
        })
    }),
    oe.each({
        Height: "height",
        Width: "width"
    }, function(r, a) {
        oe.each({
            padding: "inner" + r,
            content: a,
            "": "outer" + r
        }, function(i, e) {
            oe.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e)
                  , o = i || (!0 === e || !0 === t ? "margin" : "border");
                return ke(this, function(e, t, n) {
                    var i;
                    return oe.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + r], i["scroll" + r], e.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? oe.css(e, t, o) : oe.style(e, t, n, o)
                }, a, n ? e : void 0, n, null)
            }
        })
    }),
    oe.fn.size = function() {
        return this.length
    }
    ,
    oe.fn.andSelf = oe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var ln = h.jQuery
      , un = h.$;
    return oe.noConflict = function(e) {
        return h.$ === oe && (h.$ = un),
        e && h.jQuery === oe && (h.jQuery = ln),
        oe
    }
    ,
    typeof t === xe && (h.jQuery = h.$ = oe),
    oe
}),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
!function() {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 2 < e[0])
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(),
function(i) {
    "use strict";
    function e() {
        var e = document.createElement("bootstrap")
          , t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)
            if (void 0 !== e.style[n])
                return {
                    end: t[n]
                };
        return !1
    }
    i.fn.emulateTransitionEnd = function(e) {
        var t = !1
          , n = this;
        return i(this).one("bsTransitionEnd", function() {
            t = !0
        }),
        setTimeout(function() {
            t || i(n).trigger(i.support.transition.end)
        }, e),
        this
    }
    ,
    i(function() {
        i.support.transition = e(),
        i.support.transition && (i.event.special.bsTransitionEnd = {
            bindType: i.support.transition.end,
            delegateType: i.support.transition.end,
            handle: function(e) {
                return i(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function(r) {
    "use strict";
    function e(n) {
        return this.each(function() {
            var e = r(this)
              , t = e.data("bs.alert");
            t || e.data("bs.alert", t = new a(this)),
            "string" == typeof n && t[n].call(e)
        })
    }
    var t = '[data-dismiss="alert"]'
      , a = function(e) {
        r(e).on("click", t, this.close)
    };
    a.VERSION = "3.3.6",
    a.TRANSITION_DURATION = 150,
    a.prototype.close = function(e) {
        function t() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var n = r(this)
          , i = n.attr("data-target");
        i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = r(i);
        e && e.preventDefault(),
        o.length || (o = n.closest(".alert")),
        o.trigger(e = r.Event("close.bs.alert")),
        e.isDefaultPrevented() || (o.removeClass("in"),
        r.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", t).emulateTransitionEnd(a.TRANSITION_DURATION) : t())
    }
    ;
    var n = r.fn.alert;
    r.fn.alert = e,
    r.fn.alert.Constructor = a,
    r.fn.alert.noConflict = function() {
        return r.fn.alert = n,
        this
    }
    ,
    r(document).on("click.bs.alert.data-api", t, a.prototype.close)
}(jQuery),
function(r) {
    "use strict";
    function n(i) {
        return this.each(function() {
            var e = r(this)
              , t = e.data("bs.button")
              , n = "object" == typeof i && i;
            t || e.data("bs.button", t = new o(this,n)),
            "toggle" == i ? t.toggle() : i && t.setState(i)
        })
    }
    var o = function(e, t) {
        this.$element = r(e),
        this.options = r.extend({}, o.DEFAULTS, t),
        this.isLoading = !1
    };
    o.VERSION = "3.3.6",
    o.DEFAULTS = {
        loadingText: "loading..."
    },
    o.prototype.setState = function(e) {
        var t = "disabled"
          , n = this.$element
          , i = n.is("input") ? "val" : "html"
          , o = n.data();
        e += "Text",
        null == o.resetText && n.data("resetText", n[i]()),
        setTimeout(r.proxy(function() {
            n[i](null == o[e] ? this.options[e] : o[e]),
            "loadingText" == e ? (this.isLoading = !0,
            n.addClass(t).attr(t, t)) : this.isLoading && (this.isLoading = !1,
            n.removeClass(t).removeAttr(t))
        }, this), 0)
    }
    ,
    o.prototype.toggle = function() {
        var e = !0
          , t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1),
            t.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1),
            this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            e && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var e = r.fn.button;
    r.fn.button = n,
    r.fn.button.Constructor = o,
    r.fn.button.noConflict = function() {
        return r.fn.button = e,
        this
    }
    ,
    r(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = r(e.target);
        t.hasClass("btn") || (t = t.closest(".btn")),
        n.call(t, "toggle"),
        r(e.target).is('input[type="radio"]') || r(e.target).is('input[type="checkbox"]') || e.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        r(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(p) {
    "use strict";
    function a(o) {
        return this.each(function() {
            var e = p(this)
              , t = e.data("bs.carousel")
              , n = p.extend({}, d.DEFAULTS, e.data(), "object" == typeof o && o)
              , i = "string" == typeof o ? o : n.slide;
            t || e.data("bs.carousel", t = new d(this,n)),
            "number" == typeof o ? t.to(o) : i ? t[i]() : n.interval && t.pause().cycle()
        })
    }
    var d = function(e, t) {
        this.$element = p(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = t,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", p.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", p.proxy(this.pause, this)).on("mouseleave.bs.carousel", p.proxy(this.cycle, this))
    };
    d.VERSION = "3.3.6",
    d.TRANSITION_DURATION = 600,
    d.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    d.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            e.preventDefault()
        }
    }
    ,
    d.prototype.cycle = function(e) {
        return e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(p.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    d.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"),
        this.$items.index(e || this.$active)
    }
    ,
    d.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap)
            return t;
        var i = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i)
    }
    ,
    d.prototype.to = function(e) {
        var t = this
          , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || e < 0 ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(n < e ? "next" : "prev", this.$items.eq(e))
    }
    ,
    d.prototype.pause = function(e) {
        return e || (this.paused = !0),
        this.$element.find(".next, .prev").length && p.support.transition && (this.$element.trigger(p.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    d.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }
    ,
    d.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }
    ,
    d.prototype.slide = function(e, t) {
        var n = this.$element.find(".item.active")
          , i = t || this.getItemForDirection(e, n)
          , o = this.interval
          , r = "next" == e ? "left" : "right"
          , a = this;
        if (i.hasClass("active"))
            return this.sliding = !1;
        var s = i[0]
          , l = p.Event("slide.bs.carousel", {
            relatedTarget: s,
            direction: r
        });
        if (this.$element.trigger(l),
        !l.isDefaultPrevented()) {
            if (this.sliding = !0,
            o && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = p(this.$indicators.children()[this.getItemIndex(i)]);
                u && u.addClass("active")
            }
            var c = p.Event("slid.bs.carousel", {
                relatedTarget: s,
                direction: r
            });
            return p.support.transition && this.$element.hasClass("slide") ? (i.addClass(e),
            i[0].offsetWidth,
            n.addClass(r),
            i.addClass(r),
            n.one("bsTransitionEnd", function() {
                i.removeClass([e, r].join(" ")).addClass("active"),
                n.removeClass(["active", r].join(" ")),
                a.sliding = !1,
                setTimeout(function() {
                    a.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(d.TRANSITION_DURATION)) : (n.removeClass("active"),
            i.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(c)),
            o && this.cycle(),
            this
        }
    }
    ;
    var e = p.fn.carousel;
    p.fn.carousel = a,
    p.fn.carousel.Constructor = d,
    p.fn.carousel.noConflict = function() {
        return p.fn.carousel = e,
        this
    }
    ;
    var t = function(e) {
        var t, n = p(this), i = p(n.attr("data-target") || (t = n.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""));
        if (i.hasClass("carousel")) {
            var o = p.extend({}, i.data(), n.data())
              , r = n.attr("data-slide-to");
            r && (o.interval = !1),
            a.call(i, o),
            r && i.data("bs.carousel").to(r),
            e.preventDefault()
        }
    };
    p(document).on("click.bs.carousel.data-api", "[data-slide]", t).on("click.bs.carousel.data-api", "[data-slide-to]", t),
    p(window).on("load", function() {
        p('[data-ride="carousel"]').each(function() {
            var e = p(this);
            a.call(e, e.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";
    function o(e) {
        var t, n = e.attr("data-target") || (t = e.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, "");
        return a(n)
    }
    function s(i) {
        return this.each(function() {
            var e = a(this)
              , t = e.data("bs.collapse")
              , n = a.extend({}, l.DEFAULTS, e.data(), "object" == typeof i && i);
            !t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
            t || e.data("bs.collapse", t = new l(this,n)),
            "string" == typeof i && t[i]()
        })
    }
    var l = function(e, t) {
        this.$element = a(e),
        this.options = a.extend({}, l.DEFAULTS, t),
        this.$trigger = a('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    l.VERSION = "3.3.6",
    l.TRANSITION_DURATION = 350,
    l.DEFAULTS = {
        toggle: !0
    },
    l.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }
    ,
    l.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, t = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(t && t.length && ((e = t.data("bs.collapse")) && e.transitioning))) {
                var n = a.Event("show.bs.collapse");
                if (this.$element.trigger(n),
                !n.isDefaultPrevented()) {
                    t && t.length && (s.call(t, "hide"),
                    e || t.data("bs.collapse", null));
                    var i = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var o = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[i](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)
                        return o.call(this);
                    var r = a.camelCase(["scroll", i].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(o, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[i](this.$element[0][r])
                }
            }
        }
    }
    ,
    l.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = a.Event("hide.bs.collapse");
            if (this.$element.trigger(e),
            !e.isDefaultPrevented()) {
                var t = this.dimension();
                this.$element[t](this.$element[t]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[t](0).one("bsTransitionEnd", a.proxy(n, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : n.call(this)
            }
        }
    }
    ,
    l.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    l.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(e, t) {
            var n = a(t);
            this.addAriaAndCollapsedClass(o(n), n)
        }, this)).end()
    }
    ,
    l.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
        t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    }
    ;
    var e = a.fn.collapse;
    a.fn.collapse = s,
    a.fn.collapse.Constructor = l,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e,
        this
    }
    ,
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var t = a(this);
        t.attr("data-target") || e.preventDefault();
        var n = o(t)
          , i = n.data("bs.collapse") ? "toggle" : t.data();
        s.call(n, i)
    })
}(jQuery),
function(s) {
    "use strict";
    function l(e) {
        var t = e.attr("data-target");
        t || (t = (t = e.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
        var n = t && s(t);
        return n && n.length ? n : e.parent()
    }
    function r(i) {
        i && 3 === i.which || (s(t).remove(),
        s(u).each(function() {
            var e = s(this)
              , t = l(e)
              , n = {
                relatedTarget: this
            };
            t.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && s.contains(t[0], i.target) || (t.trigger(i = s.Event("hide.bs.dropdown", n)),
            i.isDefaultPrevented() || (e.attr("aria-expanded", "false"),
            t.removeClass("open").trigger(s.Event("hidden.bs.dropdown", n)))))
        }))
    }
    function e(n) {
        return this.each(function() {
            var e = s(this)
              , t = e.data("bs.dropdown");
            t || e.data("bs.dropdown", t = new i(this)),
            "string" == typeof n && t[n].call(e)
        })
    }
    var t = ".dropdown-backdrop"
      , u = '[data-toggle="dropdown"]'
      , i = function(e) {
        s(e).on("click.bs.dropdown", this.toggle)
    };
    i.VERSION = "3.3.6",
    i.prototype.toggle = function(e) {
        var t = s(this);
        if (!t.is(".disabled, :disabled")) {
            var n = l(t)
              , i = n.hasClass("open");
            if (r(),
            !i) {
                "ontouchstart"in document.documentElement && !n.closest(".navbar-nav").length && s(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(s(this)).on("click", r);
                var o = {
                    relatedTarget: this
                };
                if (n.trigger(e = s.Event("show.bs.dropdown", o)),
                e.isDefaultPrevented())
                    return;
                t.trigger("focus").attr("aria-expanded", "true"),
                n.toggleClass("open").trigger(s.Event("shown.bs.dropdown", o))
            }
            return !1
        }
    }
    ,
    i.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var t = s(this);
            if (e.preventDefault(),
            e.stopPropagation(),
            !t.is(".disabled, :disabled")) {
                var n = l(t)
                  , i = n.hasClass("open");
                if (!i && 27 != e.which || i && 27 == e.which)
                    return 27 == e.which && n.find(u).trigger("focus"),
                    t.trigger("click");
                var o = " li:not(.disabled):visible a"
                  , r = n.find(".dropdown-menu" + o);
                if (r.length) {
                    var a = r.index(e.target);
                    38 == e.which && 0 < a && a--,
                    40 == e.which && a < r.length - 1 && a++,
                    ~a || (a = 0),
                    r.eq(a).trigger("focus")
                }
            }
        }
    }
    ;
    var n = s.fn.dropdown;
    s.fn.dropdown = e,
    s.fn.dropdown.Constructor = i,
    s.fn.dropdown.noConflict = function() {
        return s.fn.dropdown = n,
        this
    }
    ,
    s(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", u, i.prototype.toggle).on("keydown.bs.dropdown.data-api", u, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
}(jQuery),
function(r) {
    "use strict";
    function a(i, o) {
        return this.each(function() {
            var e = r(this)
              , t = e.data("bs.modal")
              , n = r.extend({}, s.DEFAULTS, e.data(), "object" == typeof i && i);
            t || e.data("bs.modal", t = new s(this,n)),
            "string" == typeof i ? t[i](o) : n.show && t.show(o)
        })
    }
    var s = function(e, t) {
        this.options = t,
        this.$body = r(document.body),
        this.$element = r(e),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, r.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    s.VERSION = "3.3.6",
    s.TRANSITION_DURATION = 300,
    s.BACKDROP_TRANSITION_DURATION = 150,
    s.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    s.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }
    ,
    s.prototype.show = function(n) {
        var i = this
          , e = r.Event("show.bs.modal", {
            relatedTarget: n
        });
        this.$element.trigger(e),
        this.isShown || e.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', r.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                r(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var e = r.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body),
            i.$element.show().scrollTop(0),
            i.adjustDialog(),
            e && i.$element[0].offsetWidth,
            i.$element.addClass("in"),
            i.enforceFocus();
            var t = r.Event("shown.bs.modal", {
                relatedTarget: n
            });
            e ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(t)
            }).emulateTransitionEnd(s.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(t)
        }))
    }
    ,
    s.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = r.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        r(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        r.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", r.proxy(this.hideModal, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    s.prototype.enforceFocus = function() {
        r(document).off("focusin.bs.modal").on("focusin.bs.modal", r.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    s.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", r.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    s.prototype.resize = function() {
        this.isShown ? r(window).on("resize.bs.modal", r.proxy(this.handleUpdate, this)) : r(window).off("resize.bs.modal")
    }
    ,
    s.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(),
        this.backdrop(function() {
            e.$body.removeClass("modal-open"),
            e.resetAdjustments(),
            e.resetScrollbar(),
            e.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    s.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    s.prototype.backdrop = function(e) {
        var t = this
          , n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = r.support.transition && n;
            if (this.$backdrop = r(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", r.proxy(function(e) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)),
            i && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
                return;
            i ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                t.removeBackdrop(),
                e && e()
            };
            r.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : o()
        } else
            e && e()
    }
    ,
    s.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    s.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }
    ,
    s.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    s.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    s.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }
    ,
    s.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    s.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure",
        this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e),
        t
    }
    ;
    var e = r.fn.modal;
    r.fn.modal = a,
    r.fn.modal.Constructor = s,
    r.fn.modal.noConflict = function() {
        return r.fn.modal = e,
        this
    }
    ,
    r(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t = r(this)
          , n = t.attr("href")
          , i = r(t.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, ""))
          , o = i.data("bs.modal") ? "toggle" : r.extend({
            remote: !/#/.test(n) && n
        }, i.data(), t.data());
        t.is("a") && e.preventDefault(),
        i.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || i.one("hidden.bs.modal", function() {
                t.is(":visible") && t.trigger("focus")
            })
        }),
        a.call(i, o, this)
    })
}(jQuery),
function(m) {
    "use strict";
    function e(i) {
        return this.each(function() {
            var e = m(this)
              , t = e.data("bs.tooltip")
              , n = "object" == typeof i && i;
            (t || !/destroy|hide/.test(i)) && (t || e.data("bs.tooltip", t = new y(this,n)),
            "string" == typeof i && t[i]())
        })
    }
    var y = function(e, t) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", e, t)
    };
    y.VERSION = "3.3.6",
    y.TRANSITION_DURATION = 150,
    y.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    y.prototype.init = function(e, t, n) {
        if (this.enabled = !0,
        this.type = e,
        this.$element = m(t),
        this.options = this.getOptions(n),
        this.$viewport = this.options.viewport && m(m.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), o = i.length; o--; ) {
            var r = i[o];
            if ("click" == r)
                this.$element.on("click." + this.type, this.options.selector, m.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin"
                  , s = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, m.proxy(this.enter, this)),
                this.$element.on(s + "." + this.type, this.options.selector, m.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = m.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    y.prototype.getDefaults = function() {
        return y.DEFAULTS
    }
    ,
    y.prototype.getOptions = function(e) {
        return (e = m.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        e
    }
    ,
    y.prototype.getDelegateOptions = function() {
        var n = {}
          , i = this.getDefaults();
        return this._options && m.each(this._options, function(e, t) {
            i[e] != t && (n[e] = t)
        }),
        n
    }
    ,
    y.prototype.enter = function(e) {
        var t = e instanceof this.constructor ? e : m(e.currentTarget).data("bs." + this.type);
        return t || (t = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        m(e.currentTarget).data("bs." + this.type, t)),
        e instanceof m.Event && (t.inState["focusin" == e.type ? "focus" : "hover"] = !0),
        t.tip().hasClass("in") || "in" == t.hoverState ? void (t.hoverState = "in") : (clearTimeout(t.timeout),
        t.hoverState = "in",
        t.options.delay && t.options.delay.show ? void (t.timeout = setTimeout(function() {
            "in" == t.hoverState && t.show()
        }, t.options.delay.show)) : t.show())
    }
    ,
    y.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e])
                return !0;
        return !1
    }
    ,
    y.prototype.leave = function(e) {
        var t = e instanceof this.constructor ? e : m(e.currentTarget).data("bs." + this.type);
        return t || (t = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        m(e.currentTarget).data("bs." + this.type, t)),
        e instanceof m.Event && (t.inState["focusout" == e.type ? "focus" : "hover"] = !1),
        t.isInStateTrue() ? void 0 : (clearTimeout(t.timeout),
        t.hoverState = "out",
        t.options.delay && t.options.delay.hide ? void (t.timeout = setTimeout(function() {
            "out" == t.hoverState && t.hide()
        }, t.options.delay.hide)) : t.hide())
    }
    ,
    y.prototype.show = function() {
        var e = m.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var t = m.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !t)
                return;
            var n = this
              , i = this.tip()
              , o = this.getUID(this.type);
            this.setContent(),
            i.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && i.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement
              , a = /\s?auto?\s?/i
              , s = a.test(r);
            s && (r = r.replace(a, "") || "top"),
            i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this),
            this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var l = this.getPosition()
              , u = i[0].offsetWidth
              , c = i[0].offsetHeight;
            if (s) {
                var p = r
                  , d = this.getPosition(this.$viewport);
                r = "bottom" == r && l.bottom + c > d.bottom ? "top" : "top" == r && l.top - c < d.top ? "bottom" : "right" == r && l.right + u > d.width ? "left" : "left" == r && l.left - u < d.left ? "right" : r,
                i.removeClass(p).addClass(r)
            }
            var f = this.getCalculatedOffset(r, l, u, c);
            this.applyPlacement(f, r);
            var h = function() {
                var e = n.hoverState;
                n.$element.trigger("shown.bs." + n.type),
                n.hoverState = null,
                "out" == e && n.leave(n)
            };
            m.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", h).emulateTransitionEnd(y.TRANSITION_DURATION) : h()
        }
    }
    ,
    y.prototype.applyPlacement = function(e, t) {
        var n = this.tip()
          , i = n[0].offsetWidth
          , o = n[0].offsetHeight
          , r = parseInt(n.css("margin-top"), 10)
          , a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0),
        isNaN(a) && (a = 0),
        e.top += r,
        e.left += a,
        m.offset.setOffset(n[0], m.extend({
            using: function(e) {
                n.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, e), 0),
        n.addClass("in");
        var s = n[0].offsetWidth
          , l = n[0].offsetHeight;
        "top" == t && l != o && (e.top = e.top + o - l);
        var u = this.getViewportAdjustedDelta(t, e, s, l);
        u.left ? e.left += u.left : e.top += u.top;
        var c = /top|bottom/.test(t)
          , p = c ? 2 * u.left - i + s : 2 * u.top - o + l
          , d = c ? "offsetWidth" : "offsetHeight";
        n.offset(e),
        this.replaceArrow(p, n[0][d], c)
    }
    ,
    y.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }
    ,
    y.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
        e.removeClass("fade in top bottom left right")
    }
    ,
    y.prototype.hide = function(e) {
        function t() {
            "in" != n.hoverState && i.detach(),
            n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type),
            e && e()
        }
        var n = this
          , i = m(this.$tip)
          , o = m.Event("hide.bs." + this.type);
        return this.$element.trigger(o),
        o.isDefaultPrevented() ? void 0 : (i.removeClass("in"),
        m.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(y.TRANSITION_DURATION) : t(),
        this.hoverState = null,
        this)
    }
    ,
    y.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }
    ,
    y.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    y.prototype.getPosition = function(e) {
        var t = (e = e || this.$element)[0]
          , n = "BODY" == t.tagName
          , i = t.getBoundingClientRect();
        null == i.width && (i = m.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var o = n ? {
            top: 0,
            left: 0
        } : e.offset()
          , r = {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        }
          , a = n ? {
            width: m(window).width(),
            height: m(window).height()
        } : null;
        return m.extend({}, i, r, a, o)
    }
    ,
    y.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }
    ,
    y.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return o;
        var r = this.options.viewport && this.options.viewport.padding || 0
          , a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - r - a.scroll
              , l = t.top + r - a.scroll + i;
            s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
        } else {
            var u = t.left - r
              , c = t.left + r + n;
            u < a.left ? o.left = a.left - u : c > a.right && (o.left = a.left + a.width - c)
        }
        return o
    }
    ,
    y.prototype.getTitle = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }
    ,
    y.prototype.getUID = function(e) {
        for (; e += ~~(1e6 * Math.random()),
        document.getElementById(e); )
            ;
        return e
    }
    ,
    y.prototype.tip = function() {
        if (!this.$tip && (this.$tip = m(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    y.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    y.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    y.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    y.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    y.prototype.toggle = function(e) {
        var t = this;
        e && ((t = m(e.currentTarget).data("bs." + this.type)) || (t = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        m(e.currentTarget).data("bs." + this.type, t))),
        e ? (t.inState.click = !t.inState.click,
        t.isInStateTrue() ? t.enter(t) : t.leave(t)) : t.tip().hasClass("in") ? t.leave(t) : t.enter(t)
    }
    ,
    y.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type),
            e.$tip && e.$tip.detach(),
            e.$tip = null,
            e.$arrow = null,
            e.$viewport = null
        })
    }
    ;
    var t = m.fn.tooltip;
    m.fn.tooltip = e,
    m.fn.tooltip.Constructor = y,
    m.fn.tooltip.noConflict = function() {
        return m.fn.tooltip = t,
        this
    }
}(jQuery),
function(o) {
    "use strict";
    function e(i) {
        return this.each(function() {
            var e = o(this)
              , t = e.data("bs.popover")
              , n = "object" == typeof i && i;
            (t || !/destroy|hide/.test(i)) && (t || e.data("bs.popover", t = new r(this,n)),
            "string" == typeof i && t[i]())
        })
    }
    var r = function(e, t) {
        this.init("popover", e, t)
    };
    if (!o.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    r.VERSION = "3.3.6",
    r.DEFAULTS = o.extend({}, o.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    r.prototype = o.extend({}, o.fn.tooltip.Constructor.prototype),
    (r.prototype.constructor = r).prototype.getDefaults = function() {
        return r.DEFAULTS
    }
    ,
    r.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle()
          , n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t),
        e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
        e.removeClass("fade top bottom left right in"),
        e.find(".popover-title").html() || e.find(".popover-title").hide()
    }
    ,
    r.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    r.prototype.getContent = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }
    ,
    r.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var t = o.fn.popover;
    o.fn.popover = e,
    o.fn.popover.Constructor = r,
    o.fn.popover.noConflict = function() {
        return o.fn.popover = t,
        this
    }
}(jQuery),
function(r) {
    "use strict";
    function o(e, t) {
        this.$body = r(document.body),
        this.$scrollElement = r(r(e).is(document.body) ? window : e),
        this.options = r.extend({}, o.DEFAULTS, t),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", r.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function t(i) {
        return this.each(function() {
            var e = r(this)
              , t = e.data("bs.scrollspy")
              , n = "object" == typeof i && i;
            t || e.data("bs.scrollspy", t = new o(this,n)),
            "string" == typeof i && t[i]()
        })
    }
    o.VERSION = "3.3.6",
    o.DEFAULTS = {
        offset: 10
    },
    o.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    o.prototype.refresh = function() {
        var e = this
          , i = "offset"
          , o = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        r.isWindow(this.$scrollElement[0]) || (i = "position",
        o = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var e = r(this)
              , t = e.data("target") || e.attr("href")
              , n = /^#./.test(t) && r(t);
            return n && n.length && n.is(":visible") && [[n[i]().top + o, t]] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            e.offsets.push(this[0]),
            e.targets.push(this[1])
        })
    }
    ,
    o.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets, a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(),
        i <= t)
            return a != (e = r[r.length - 1]) && this.activate(e);
        if (a && t < o[0])
            return this.activeTarget = null,
            this.clear();
        for (e = o.length; e--; )
            a != r[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(r[e])
    }
    ,
    o.prototype.activate = function(e) {
        this.activeTarget = e,
        this.clear();
        var t = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
          , n = r(t).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")),
        n.trigger("activate.bs.scrollspy")
    }
    ,
    o.prototype.clear = function() {
        r(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var e = r.fn.scrollspy;
    r.fn.scrollspy = t,
    r.fn.scrollspy.Constructor = o,
    r.fn.scrollspy.noConflict = function() {
        return r.fn.scrollspy = e,
        this
    }
    ,
    r(window).on("load.bs.scrollspy.data-api", function() {
        r('[data-spy="scroll"]').each(function() {
            var e = r(this);
            t.call(e, e.data())
        })
    })
}(jQuery),
function(s) {
    "use strict";
    function t(n) {
        return this.each(function() {
            var e = s(this)
              , t = e.data("bs.tab");
            t || e.data("bs.tab", t = new a(this)),
            "string" == typeof n && t[n]()
        })
    }
    var a = function(e) {
        this.element = s(e)
    };
    a.VERSION = "3.3.6",
    a.TRANSITION_DURATION = 150,
    a.prototype.show = function() {
        var e = this.element
          , t = e.closest("ul:not(.dropdown-menu)")
          , n = e.data("target");
        if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")),
        !e.parent("li").hasClass("active")) {
            var i = t.find(".active:last a")
              , o = s.Event("hide.bs.tab", {
                relatedTarget: e[0]
            })
              , r = s.Event("show.bs.tab", {
                relatedTarget: i[0]
            });
            if (i.trigger(o),
            e.trigger(r),
            !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = s(n);
                this.activate(e.closest("li"), t),
                this.activate(a, a.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }),
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }
    ,
    a.prototype.activate = function(e, t, n) {
        function i() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            r ? (e[0].offsetWidth,
            e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            n && n()
        }
        var o = t.find("> .active")
          , r = n && s.support.transition && (o.length && o.hasClass("fade") || !!t.find("> .fade").length);
        o.length && r ? o.one("bsTransitionEnd", i).emulateTransitionEnd(a.TRANSITION_DURATION) : i(),
        o.removeClass("in")
    }
    ;
    var e = s.fn.tab;
    s.fn.tab = t,
    s.fn.tab.Constructor = a,
    s.fn.tab.noConflict = function() {
        return s.fn.tab = e,
        this
    }
    ;
    var n = function(e) {
        e.preventDefault(),
        t.call(s(this), "show")
    };
    s(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function(l) {
    "use strict";
    function n(i) {
        return this.each(function() {
            var e = l(this)
              , t = e.data("bs.affix")
              , n = "object" == typeof i && i;
            t || e.data("bs.affix", t = new u(this,n)),
            "string" == typeof i && t[i]()
        })
    }
    var u = function(e, t) {
        this.options = l.extend({}, u.DEFAULTS, t),
        this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = l(e),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    u.VERSION = "3.3.6",
    u.RESET = "affix affix-top affix-bottom",
    u.DEFAULTS = {
        offset: 0,
        target: window
    },
    u.prototype.getState = function(e, t, n, i) {
        var o = this.$target.scrollTop()
          , r = this.$element.offset()
          , a = this.$target.height();
        if (null != n && "top" == this.affixed)
            return o < n && "top";
        if ("bottom" == this.affixed)
            return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= e - i) && "bottom";
        var s = null == this.affixed
          , l = s ? o : r.top;
        return null != n && o <= n ? "top" : null != i && e - i <= l + (s ? a : t) && "bottom"
    }
    ,
    u.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(u.RESET).addClass("affix");
        var e = this.$target.scrollTop()
          , t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }
    ,
    u.prototype.checkPositionWithEventLoop = function() {
        setTimeout(l.proxy(this.checkPosition, this), 1)
    }
    ,
    u.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height()
              , t = this.options.offset
              , n = t.top
              , i = t.bottom
              , o = Math.max(l(document).height(), l(document.body).height());
            "object" != typeof t && (i = n = t),
            "function" == typeof n && (n = t.top(this.$element)),
            "function" == typeof i && (i = t.bottom(this.$element));
            var r = this.getState(o, e, n, i);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var a = "affix" + (r ? "-" + r : "")
                  , s = l.Event(a + ".bs.affix");
                if (this.$element.trigger(s),
                s.isDefaultPrevented())
                    return;
                this.affixed = r,
                this.unpin = "bottom" == r ? this.getPinnedOffset() : null,
                this.$element.removeClass(u.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: o - e - i
            })
        }
    }
    ;
    var e = l.fn.affix;
    l.fn.affix = n,
    l.fn.affix.Constructor = u,
    l.fn.affix.noConflict = function() {
        return l.fn.affix = e,
        this
    }
    ,
    l(window).on("load", function() {
        l('[data-spy="affix"]').each(function() {
            var e = l(this)
              , t = e.data();
            t.offset = t.offset || {},
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom),
            null != t.offsetTop && (t.offset.top = t.offsetTop),
            n.call(e, t)
        })
    })
}(jQuery),
$("#subscribeform").submit(function() {
    var e = $(this).attr("action");
    return $("#mesaj").slideUp(750, function() {
        $("#mesaj").hide(),
        $("#subsubmit").after("").attr("disabled", "disabled"),
        $.post(e, {
            email: $("#subemail").val()
        }, function(e) {
            document.getElementById("mesaj").innerHTML = e,
            $("#mesaj").slideDown("slow"),
            $("#subscribeform img.subscribe-loader").fadeOut("slow", function() {
                $(this).remove()
            }),
            $("#subsubmit").removeAttr("disabled"),
            null != e.match("success") && $("#subscribeform").slideUp("slow")
        })
    }),
    !1
}),
function(e, a) {
    function n(e, t) {
        var n = e.createElement("p")
          , i = e.getElementsByTagName("head")[0] || e.documentElement;
        return n.innerHTML = "x<style>" + t + "</style>",
        i.insertBefore(n.lastChild, i.firstChild)
    }
    function s() {
        var e = b.elements;
        return "string" == typeof e ? e.split(" ") : e
    }
    function t(e, t) {
        var n = b.elements;
        "string" != typeof n && (n = n.join(" ")),
        "string" != typeof e && (e = e.join(" ")),
        b.elements = n + " " + e,
        u(t)
    }
    function l(e) {
        var t = v[e[y]];
        return t || (t = {},
        g++,
        e[y] = g,
        v[g] = t),
        t
    }
    function i(e, t, n) {
        return t || (t = a),
        p ? t.createElement(e) : (n || (n = l(t)),
        !(i = n.cache[e] ? n.cache[e].cloneNode() : m.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e)).canHaveChildren || h.test(e) || i.tagUrn ? i : n.frag.appendChild(i));
        var i
    }
    function o(e, t) {
        if (e || (e = a),
        p)
            return e.createDocumentFragment();
        for (var n = (t = t || l(e)).frag.cloneNode(), i = 0, o = s(), r = o.length; i < r; i++)
            n.createElement(o[i]);
        return n
    }
    function r(t, n) {
        n.cache || (n.cache = {},
        n.createElem = t.createElement,
        n.createFrag = t.createDocumentFragment,
        n.frag = n.createFrag()),
        t.createElement = function(e) {
            return b.shivMethods ? i(e, t, n) : n.createElem(e)
        }
        ,
        t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + s().join().replace(/[\w\-:]+/g, function(e) {
            return n.createElem(e),
            n.frag.createElement(e),
            'c("' + e + '")'
        }) + ");return n}")(b, n.frag)
    }
    function u(e) {
        e || (e = a);
        var t = l(e);
        return !b.shivCSS || c || t.hasCSS || (t.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
        p || r(e, t),
        e
    }
    var c, p, d = "3.7.2", f = e.html5 || {}, h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, y = "_html5shiv", g = 0, v = {};
    !function() {
        try {
            var e = a.createElement("a");
            e.innerHTML = "<xyz></xyz>",
            c = "hidden"in e,
            p = 1 == e.childNodes.length || function() {
                a.createElement("a");
                var e = a.createDocumentFragment();
                return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
            }()
        } catch (n) {
            p = c = !0
        }
    }();
    var b = {
        elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: d,
        shivCSS: !1 !== f.shivCSS,
        supportsUnknownElements: p,
        shivMethods: !1 !== f.shivMethods,
        type: "default",
        shivDocument: u,
        createElement: i,
        createDocumentFragment: o,
        addElements: t
    };
    e.html5 = b,
    u(a)
}(this, document),
function(t) {
    "use strict";
    jQuery(document).ready(function() {
        t("#cform").on("submit", function() {
            var e = t(this).attr("action");
            return t("#message").slideUp(750, function() {
                t("#message").hide(),
                t("#submit").before('<div class="text-center"><img src="images/ajax-loader.gif" class="contact-loader" /></div>').attr("disabled", "disabled"),
                t.post(e, {
                    name: t("#name").val(),
                    companyname: t("#companyname").val(),
                    email: t("#email").val(),
                    tel: t("#tel").val(),
                    comments: t("#comments").val()
                }, function(e) {
                    document.getElementById("message").innerHTML = e,
                    t("#message").slideDown("slow"),
                    t("#cform img.contact-loader").fadeOut("slow", function() {
                        t(this).remove()
                    }),
                    t("#submit").removeAttr("disabled"),
                    null != e.match("success") && t("#cform").slideUp("slow")
                })
            }),
            !1
        })
    })
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(c) {
    var p, i, d, o, f, t, l = "Close", u = "BeforeClose", n = "AfterClose", r = "BeforeAppend", h = "MarkupParse", m = "Open", a = "Change", s = "mfp", y = "." + s, g = "mfp-ready", v = "mfp-removing", b = "mfp-prevent-close", e = function() {}, w = !!window.jQuery, T = c(window), x = function(e, t) {
        p.ev.on(s + e + y, t)
    }, C = function(e, t, n, i) {
        var o = document.createElement("div");
        return o.className = "mfp-" + e,
        n && (o.innerHTML = n),
        i ? t && t.appendChild(o) : (o = c(o),
        t && o.appendTo(t)),
        o
    }, P = function(e, t) {
        p.ev.triggerHandler(s + e, t),
        p.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1),
        p.st.callbacks[e] && p.st.callbacks[e].apply(p, c.isArray(t) ? t : [t]))
    }, S = function(e) {
        return e === t && p.currTemplate.closeBtn || (p.currTemplate.closeBtn = c(p.st.closeMarkup.replace("%title%", p.st.tClose)),
        t = e),
        p.currTemplate.closeBtn
    }, I = function() {
        c.magnificPopup.instance || ((p = new e).init(),
        c.magnificPopup.instance = p)
    }, j = function() {
        var e = document.createElement("p").style
          , t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition)
            return !0;
        for (; t.length; )
            if (t.pop() + "Transition"in e)
                return !0;
        return !1
    };
    e.prototype = {
        constructor: e,
        init: function() {
            var e = navigator.appVersion;
            p.isIE7 = -1 !== e.indexOf("MSIE 7."),
            p.isIE8 = -1 !== e.indexOf("MSIE 8."),
            p.isLowIE = p.isIE7 || p.isIE8,
            p.isAndroid = /android/gi.test(e),
            p.isIOS = /iphone|ipad|ipod/gi.test(e),
            p.supportsTransition = j(),
            p.probablyMobile = p.isAndroid || p.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            d = c(document),
            p.popupsCache = {}
        },
        open: function(e) {
            var t;
            if (!1 === e.isObj) {
                p.items = e.items.toArray(),
                p.index = 0;
                var n, i = e.items;
                for (t = 0; t < i.length; t++)
                    if ((n = i[t]).parsed && (n = n.el[0]),
                    n === e.el[0]) {
                        p.index = t;
                        break
                    }
            } else
                p.items = c.isArray(e.items) ? e.items : [e.items],
                p.index = e.index || 0;
            if (!p.isOpen) {
                p.types = [],
                f = "",
                p.ev = e.mainEl && e.mainEl.length ? e.mainEl.eq(0) : d,
                e.key ? (p.popupsCache[e.key] || (p.popupsCache[e.key] = {}),
                p.currTemplate = p.popupsCache[e.key]) : p.currTemplate = {},
                p.st = c.extend(!0, {}, c.magnificPopup.defaults, e),
                p.fixedContentPos = "auto" === p.st.fixedContentPos ? !p.probablyMobile : p.st.fixedContentPos,
                p.st.modal && (p.st.closeOnContentClick = !1,
                p.st.closeOnBgClick = !1,
                p.st.showCloseBtn = !1,
                p.st.enableEscapeKey = !1),
                p.bgOverlay || (p.bgOverlay = C("bg").on("click" + y, function() {
                    p.close()
                }),
                p.wrap = C("wrap").attr("tabindex", -1).on("click" + y, function(e) {
                    p._checkIfClose(e.target) && p.close()
                }),
                p.container = C("container", p.wrap)),
                p.contentContainer = C("content"),
                p.st.preloader && (p.preloader = C("preloader", p.container, p.st.tLoading));
                var o = c.magnificPopup.modules;
                for (t = 0; t < o.length; t++) {
                    var r = o[t];
                    r = r.charAt(0).toUpperCase() + r.slice(1),
                    p["init" + r].call(p)
                }
                P("BeforeOpen"),
                p.st.showCloseBtn && (p.st.closeBtnInside ? (x(h, function(e, t, n, i) {
                    n.close_replaceWith = S(i.type)
                }),
                f += " mfp-close-btn-in") : p.wrap.append(S())),
                p.st.alignTop && (f += " mfp-align-top"),
                p.wrap.css(p.fixedContentPos ? {
                    overflow: p.st.overflowY,
                    overflowX: "hidden",
                    overflowY: p.st.overflowY
                } : {
                    top: T.scrollTop(),
                    position: "absolute"
                }),
                (!1 === p.st.fixedBgPos || "auto" === p.st.fixedBgPos && !p.fixedContentPos) && p.bgOverlay.css({
                    height: d.height(),
                    position: "absolute"
                }),
                p.st.enableEscapeKey && d.on("keyup" + y, function(e) {
                    27 === e.keyCode && p.close()
                }),
                T.on("resize" + y, function() {
                    p.updateSize()
                }),
                p.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && p.wrap.addClass(f);
                var a = p.wH = T.height()
                  , s = {};
                if (p.fixedContentPos && p._hasScrollBar(a)) {
                    var l = p._getScrollbarSize();
                    l && (s.marginRight = l)
                }
                p.fixedContentPos && (p.isIE7 ? c("body, html").css("overflow", "hidden") : s.overflow = "hidden");
                var u = p.st.mainClass;
                return p.isIE7 && (u += " mfp-ie7"),
                u && p._addClassToMFP(u),
                p.updateItemHTML(),
                P("BuildControls"),
                c("html").css(s),
                p.bgOverlay.add(p.wrap).prependTo(p.st.prependTo || c(document.body)),
                p._lastFocusedEl = document.activeElement,
                setTimeout(function() {
                    p.content ? (p._addClassToMFP(g),
                    p._setFocus()) : p.bgOverlay.addClass(g),
                    d.on("focusin" + y, p._onFocusIn)
                }, 16),
                p.isOpen = !0,
                p.updateSize(a),
                P(m),
                e
            }
            p.updateItemHTML()
        },
        close: function() {
            p.isOpen && (P(u),
            p.isOpen = !1,
            p.st.removalDelay && !p.isLowIE && p.supportsTransition ? (p._addClassToMFP(v),
            setTimeout(function() {
                p._close()
            }, p.st.removalDelay)) : p._close())
        },
        _close: function() {
            P(l);
            var e = v + " " + g + " ";
            if (p.bgOverlay.detach(),
            p.wrap.detach(),
            p.container.empty(),
            p.st.mainClass && (e += p.st.mainClass + " "),
            p._removeClassFromMFP(e),
            p.fixedContentPos) {
                var t = {
                    marginRight: ""
                };
                p.isIE7 ? c("body, html").css("overflow", "") : t.overflow = "",
                c("html").css(t)
            }
            d.off("keyup" + y + " focusin" + y),
            p.ev.off(y),
            p.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            p.bgOverlay.attr("class", "mfp-bg"),
            p.container.attr("class", "mfp-container"),
            !p.st.showCloseBtn || p.st.closeBtnInside && !0 !== p.currTemplate[p.currItem.type] || p.currTemplate.closeBtn && p.currTemplate.closeBtn.detach(),
            p._lastFocusedEl && c(p._lastFocusedEl).focus(),
            p.currItem = null,
            p.content = null,
            p.currTemplate = null,
            p.prevHeight = 0,
            P(n)
        },
        updateSize: function(e) {
            if (p.isIOS) {
                var t = document.documentElement.clientWidth / window.innerWidth
                  , n = window.innerHeight * t;
                p.wrap.css("height", n),
                p.wH = n
            } else
                p.wH = e || T.height();
            p.fixedContentPos || p.wrap.css("height", p.wH),
            P("Resize")
        },
        updateItemHTML: function() {
            var e = p.items[p.index];
            p.contentContainer.detach(),
            p.content && p.content.detach(),
            e.parsed || (e = p.parseEl(p.index));
            var t = e.type;
            if (P("BeforeChange", [p.currItem ? p.currItem.type : "", t]),
            p.currItem = e,
            !p.currTemplate[t]) {
                var n = !!p.st[t] && p.st[t].markup;
                P("FirstMarkupParse", n),
                p.currTemplate[t] = !n || c(n)
            }
            o && o !== e.type && p.container.removeClass("mfp-" + o + "-holder");
            var i = p["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, p.currTemplate[t]);
            p.appendContent(i, t),
            e.preloaded = !0,
            P(a, e),
            o = e.type,
            p.container.prepend(p.contentContainer),
            P("AfterChange")
        },
        appendContent: function(e, t) {
            (p.content = e) ? p.st.showCloseBtn && p.st.closeBtnInside && !0 === p.currTemplate[t] ? p.content.find(".mfp-close").length || p.content.append(S()) : p.content = e : p.content = "",
            P(r),
            p.container.addClass("mfp-" + t + "-holder"),
            p.contentContainer.append(p.content)
        },
        parseEl: function(e) {
            var t, n = p.items[e];
            if (n.tagName ? n = {
                el: c(n)
            } : (t = n.type,
            n = {
                data: n,
                src: n.src
            }),
            n.el) {
                for (var i = p.types, o = 0; o < i.length; o++)
                    if (n.el.hasClass("mfp-" + i[o])) {
                        t = i[o];
                        break
                    }
                n.src = n.el.attr("data-mfp-src"),
                n.src || (n.src = n.el.attr("href"))
            }
            return n.type = t || p.st.type || "inline",
            n.index = e,
            n.parsed = !0,
            p.items[e] = n,
            P("ElementParse", n),
            p.items[e]
        },
        addGroup: function(t, n) {
            var e = function(e) {
                e.mfpEl = this,
                p._openClick(e, t, n)
            };
            n || (n = {});
            var i = "click.magnificPopup";
            n.mainEl = t,
            n.items ? (n.isObj = !0,
            t.off(i).on(i, e)) : (n.isObj = !1,
            n.delegate ? t.off(i).on(i, n.delegate, e) : (n.items = t).off(i).on(i, e))
        },
        _openClick: function(e, t, n) {
            if ((void 0 !== n.midClick ? n.midClick : c.magnificPopup.defaults.midClick) || 2 !== e.which && !e.ctrlKey && !e.metaKey) {
                var i = void 0 !== n.disableOn ? n.disableOn : c.magnificPopup.defaults.disableOn;
                if (i)
                    if (c.isFunction(i)) {
                        if (!i.call(p))
                            return !0
                    } else if (T.width() < i)
                        return !0;
                e.type && (e.preventDefault(),
                p.isOpen && e.stopPropagation()),
                n.el = c(e.mfpEl),
                n.delegate && (n.items = t.find(n.delegate)),
                p.open(n)
            }
        },
        updateStatus: function(e, t) {
            if (p.preloader) {
                i !== e && p.container.removeClass("mfp-s-" + i),
                t || "loading" !== e || (t = p.st.tLoading);
                var n = {
                    status: e,
                    text: t
                };
                P("UpdateStatus", n),
                e = n.status,
                t = n.text,
                p.preloader.html(t),
                p.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }),
                p.container.addClass("mfp-s-" + e),
                i = e
            }
        },
        _checkIfClose: function(e) {
            if (!c(e).hasClass(b)) {
                var t = p.st.closeOnContentClick
                  , n = p.st.closeOnBgClick;
                if (t && n)
                    return !0;
                if (!p.content || c(e).hasClass("mfp-close") || p.preloader && e === p.preloader[0])
                    return !0;
                if (e === p.content[0] || c.contains(p.content[0], e)) {
                    if (t)
                        return !0
                } else if (n && c.contains(document, e))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            p.bgOverlay.addClass(e),
            p.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
            p.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (p.isIE7 ? d.height() : document.body.scrollHeight) > (e || T.height())
        },
        _setFocus: function() {
            (p.st.focus ? p.content.find(p.st.focus).eq(0) : p.wrap).focus()
        },
        _onFocusIn: function(e) {
            return e.target === p.wrap[0] || c.contains(p.wrap[0], e.target) ? void 0 : (p._setFocus(),
            !1)
        },
        _parseMarkup: function(o, e, t) {
            var r;
            t.data && (e = c.extend(t.data, e)),
            P(h, [o, e, t]),
            c.each(e, function(e, t) {
                if (void 0 === t || !1 === t)
                    return !0;
                if (1 < (r = e.split("_")).length) {
                    var n = o.find(y + "-" + r[0]);
                    if (0 < n.length) {
                        var i = r[1];
                        "replaceWith" === i ? n[0] !== t[0] && n.replaceWith(t) : "img" === i ? n.is("img") ? n.attr("src", t) : n.replaceWith('<img src="' + t + '" class="' + n.attr("class") + '" />') : n.attr(r[1], t)
                    }
                } else
                    o.find(y + "-" + e).html(t)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === p.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(e),
                p.scrollbarSize = e.offsetWidth - e.clientWidth,
                document.body.removeChild(e)
            }
            return p.scrollbarSize
        }
    },
    c.magnificPopup = {
        instance: null,
        proto: e.prototype,
        modules: [],
        open: function(e, t) {
            return I(),
            (e = e ? c.extend(!0, {}, e) : {}).isObj = !0,
            e.index = t || 0,
            this.instance.open(e)
        },
        close: function() {
            return c.magnificPopup.instance && c.magnificPopup.instance.close()
        },
        registerModule: function(e, t) {
            t.options && (c.magnificPopup.defaults[e] = t.options),
            c.extend(this.proto, t.proto),
            this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    },
    c.fn.magnificPopup = function(e, t) {
        I();
        var n = c(this);
        if ("string" == typeof e)
            if ("open" === e) {
                var i, o = w ? n.data("magnificPopup") : n[0].magnificPopup, r = parseInt(t, 10) || 0;
                o.items ? i = o.items[r] : (i = n,
                o.delegate && (i = i.find(o.delegate)),
                i = i.eq(r)),
                p._openClick({
                    mfpEl: i
                }, n, o)
            } else
                p.isOpen && p[e].apply(p, Array.prototype.slice.call(arguments, 1));
        else
            e = c.extend(!0, {}, e),
            w ? n.data("magnificPopup", e) : n[0].magnificPopup = e,
            p.addGroup(n, e);
        return n
    }
    ;
    var k, E, $, Y = "inline", A = function() {
        $ && (E.after($.addClass(k)).detach(),
        $ = null)
    };
    c.magnificPopup.registerModule(Y, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                p.types.push(Y),
                x(l + "." + Y, function() {
                    A()
                })
            },
            getInline: function(e, t) {
                if (A(),
                e.src) {
                    var n = p.st.inline
                      , i = c(e.src);
                    if (i.length) {
                        var o = i[0].parentNode;
                        o && o.tagName && (E || (k = n.hiddenClass,
                        E = C(k),
                        k = "mfp-" + k),
                        $ = i.after(E).detach().removeClass(k)),
                        p.updateStatus("ready")
                    } else
                        p.updateStatus("error", n.tNotFound),
                        i = c("<div>");
                    return e.inlineElement = i
                }
                return p.updateStatus("ready"),
                p._parseMarkup(t, {}, e),
                t
            }
        }
    });
    var N, D = "ajax", Q = function() {
        N && c(document.body).removeClass(N)
    }, O = function() {
        Q(),
        p.req && p.req.abort()
    };
    c.magnificPopup.registerModule(D, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                p.types.push(D),
                N = p.st.ajax.cursor,
                x(l + "." + D, O),
                x("BeforeChange." + D, O)
            },
            getAjax: function(o) {
                N && c(document.body).addClass(N),
                p.updateStatus("loading");
                var e = c.extend({
                    url: o.src,
                    success: function(e, t, n) {
                        var i = {
                            data: e,
                            xhr: n
                        };
                        P("ParseAjax", i),
                        p.appendContent(c(i.data), D),
                        o.finished = !0,
                        Q(),
                        p._setFocus(),
                        setTimeout(function() {
                            p.wrap.addClass(g)
                        }, 16),
                        p.updateStatus("ready"),
                        P("AjaxContentAdded")
                    },
                    error: function() {
                        Q(),
                        o.finished = o.loadError = !0,
                        p.updateStatus("error", p.st.ajax.tError.replace("%url%", o.src))
                    }
                }, p.st.ajax.settings);
                return p.req = c.ajax(e),
                ""
            }
        }
    });
    var L, M = function(e) {
        if (e.data && void 0 !== e.data.title)
            return e.data.title;
        var t = p.st.image.titleSrc;
        if (t) {
            if (c.isFunction(t))
                return t.call(p, e);
            if (e.el)
                return e.el.attr(t) || ""
        }
        return ""
    };
    c.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = p.st.image
                  , t = ".image";
                p.types.push("image"),
                x(m + t, function() {
                    "image" === p.currItem.type && e.cursor && c(document.body).addClass(e.cursor)
                }),
                x(l + t, function() {
                    e.cursor && c(document.body).removeClass(e.cursor),
                    T.off("resize" + y)
                }),
                x("Resize" + t, p.resizeImage),
                p.isLowIE && x("AfterChange", p.resizeImage)
            },
            resizeImage: function() {
                var e = p.currItem;
                if (e && e.img && p.st.image.verticalFit) {
                    var t = 0;
                    p.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
                    e.img.css("max-height", p.wH - t)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                L && clearInterval(L),
                e.isCheckingImgSize = !1,
                P("ImageHasSize", e),
                e.imgHidden && (p.content && p.content.removeClass("mfp-loading"),
                e.imgHidden = !1))
            },
            findImageSize: function(t) {
                var n = 0
                  , i = t.img[0]
                  , o = function(e) {
                    L && clearInterval(L),
                    L = setInterval(function() {
                        return 0 < i.naturalWidth ? void p._onImageHasSize(t) : (200 < n && clearInterval(L),
                        void (3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                    }, e)
                };
                o(1)
            },
            getImage: function(e, t) {
                var n = 0
                  , i = function() {
                    e && (e.img[0].complete ? (e.img.off(".mfploader"),
                    e === p.currItem && (p._onImageHasSize(e),
                    p.updateStatus("ready")),
                    e.hasSize = !0,
                    e.loaded = !0,
                    P("ImageLoadComplete")) : ++n < 200 ? setTimeout(i, 100) : o())
                }
                  , o = function() {
                    e && (e.img.off(".mfploader"),
                    e === p.currItem && (p._onImageHasSize(e),
                    p.updateStatus("error", r.tError.replace("%url%", e.src))),
                    e.hasSize = !0,
                    e.loaded = !0,
                    e.loadError = !0)
                }
                  , r = p.st.image
                  , a = t.find(".mfp-img");
                if (a.length) {
                    var s = document.createElement("img");
                    s.className = "mfp-img",
                    e.el && e.el.find("img").length && (s.alt = e.el.find("img").attr("alt")),
                    e.img = c(s).on("load.mfploader", i).on("error.mfploader", o),
                    s.src = e.src,
                    a.is("img") && (e.img = e.img.clone()),
                    0 < (s = e.img[0]).naturalWidth ? e.hasSize = !0 : s.width || (e.hasSize = !1)
                }
                return p._parseMarkup(t, {
                    title: M(e),
                    img_replaceWith: e.img
                }, e),
                p.resizeImage(),
                e.hasSize ? (L && clearInterval(L),
                e.loadError ? (t.addClass("mfp-loading"),
                p.updateStatus("error", r.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"),
                p.updateStatus("ready"))) : (p.updateStatus("loading"),
                e.loading = !0,
                e.hasSize || (e.imgHidden = !0,
                t.addClass("mfp-loading"),
                p.findImageSize(e))),
                t
            }
        }
    });
    var _, B = function() {
        return void 0 === _ && (_ = void 0 !== document.createElement("p").style.MozTransform),
        _
    };
    c.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, r = p.st.zoom, t = ".zoom";
                if (r.enabled && p.supportsTransition) {
                    var n, i, o = r.duration, a = function(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , n = "all " + r.duration / 1e3 + "s " + r.easing
                          , i = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , o = "transition";
                        return i["-webkit-" + o] = i["-moz-" + o] = i["-o-" + o] = i[o] = n,
                        t.css(i),
                        t
                    }, s = function() {
                        p.content.css("visibility", "visible")
                    };
                    x("BuildControls" + t, function() {
                        if (p._allowZoom()) {
                            if (clearTimeout(n),
                            p.content.css("visibility", "hidden"),
                            !(e = p._getItemToZoom()))
                                return void s();
                            (i = a(e)).css(p._getOffset()),
                            p.wrap.append(i),
                            n = setTimeout(function() {
                                i.css(p._getOffset(!0)),
                                n = setTimeout(function() {
                                    s(),
                                    setTimeout(function() {
                                        i.remove(),
                                        e = i = null,
                                        P("ZoomAnimationEnded")
                                    }, 16)
                                }, o)
                            }, 16)
                        }
                    }),
                    x(u + t, function() {
                        if (p._allowZoom()) {
                            if (clearTimeout(n),
                            p.st.removalDelay = o,
                            !e) {
                                if (!(e = p._getItemToZoom()))
                                    return;
                                i = a(e)
                            }
                            i.css(p._getOffset(!0)),
                            p.wrap.append(i),
                            p.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                i.css(p._getOffset())
                            }, 16)
                        }
                    }),
                    x(l + t, function() {
                        p._allowZoom() && (s(),
                        i && i.remove(),
                        e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === p.currItem.type
            },
            _getItemToZoom: function() {
                return !!p.currItem.hasSize && p.currItem.img
            },
            _getOffset: function(e) {
                var t, n = (t = e ? p.currItem.img : p.st.zoom.opener(p.currItem.el || p.currItem)).offset(), i = parseInt(t.css("padding-top"), 10), o = parseInt(t.css("padding-bottom"), 10);
                n.top -= c(window).scrollTop() - i;
                var r = {
                    width: t.width(),
                    height: (w ? t.innerHeight() : t[0].offsetHeight) - o - i
                };
                return B() ? r["-moz-transform"] = r.transform = "translate(" + n.left + "px," + n.top + "px)" : (r.left = n.left,
                r.top = n.top),
                r
            }
        }
    });
    var R = "iframe"
      , F = "//about:blank"
      , z = function(e) {
        if (p.currTemplate[R]) {
            var t = p.currTemplate[R].find("iframe");
            t.length && (e || (t[0].src = F),
            p.isIE8 && t.css("display", e ? "block" : "none"))
        }
    };
    c.magnificPopup.registerModule(R, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                p.types.push(R),
                x("BeforeChange", function(e, t, n) {
                    t !== n && (t === R ? z() : n === R && z(!0))
                }),
                x(l + "." + R, function() {
                    z()
                })
            },
            getIframe: function(e, t) {
                var n = e.src
                  , i = p.st.iframe;
                c.each(i.patterns, function() {
                    return -1 < n.indexOf(this.index) ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)),
                    n = this.src.replace("%id%", n),
                    !1) : void 0
                });
                var o = {};
                return i.srcAction && (o[i.srcAction] = n),
                p._parseMarkup(t, o, e),
                p.updateStatus("ready"),
                t
            }
        }
    });
    var H = function(e) {
        var t = p.items.length;
        return t - 1 < e ? e - t : e < 0 ? t + e : e
    }
      , W = function(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    };
    c.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var r = p.st.gallery
                  , e = ".mfp-gallery"
                  , o = Boolean(c.fn.mfpFastClick);
                return p.direction = !0,
                !(!r || !r.enabled) && (f += " mfp-gallery",
                x(m + e, function() {
                    r.navigateByImgClick && p.wrap.on("click" + e, ".mfp-img", function() {
                        return 1 < p.items.length ? (p.next(),
                        !1) : void 0
                    }),
                    d.on("keydown" + e, function(e) {
                        37 === e.keyCode ? p.prev() : 39 === e.keyCode && p.next()
                    })
                }),
                x("UpdateStatus" + e, function(e, t) {
                    t.text && (t.text = W(t.text, p.currItem.index, p.items.length))
                }),
                x(h + e, function(e, t, n, i) {
                    var o = p.items.length;
                    n.counter = 1 < o ? W(r.tCounter, i.index, o) : ""
                }),
                x("BuildControls" + e, function() {
                    if (1 < p.items.length && r.arrows && !p.arrowLeft) {
                        var e = r.arrowMarkup
                          , t = p.arrowLeft = c(e.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(b)
                          , n = p.arrowRight = c(e.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(b)
                          , i = o ? "mfpFastClick" : "click";
                        t[i](function() {
                            p.prev()
                        }),
                        n[i](function() {
                            p.next()
                        }),
                        p.isIE7 && (C("b", t[0], !1, !0),
                        C("a", t[0], !1, !0),
                        C("b", n[0], !1, !0),
                        C("a", n[0], !1, !0)),
                        p.container.append(t.add(n))
                    }
                }),
                x(a + e, function() {
                    p._preloadTimeout && clearTimeout(p._preloadTimeout),
                    p._preloadTimeout = setTimeout(function() {
                        p.preloadNearbyImages(),
                        p._preloadTimeout = null
                    }, 16)
                }),
                void x(l + e, function() {
                    d.off(e),
                    p.wrap.off("click" + e),
                    p.arrowLeft && o && p.arrowLeft.add(p.arrowRight).destroyMfpFastClick(),
                    p.arrowRight = p.arrowLeft = null
                }))
            },
            next: function() {
                p.direction = !0,
                p.index = H(p.index + 1),
                p.updateItemHTML()
            },
            prev: function() {
                p.direction = !1,
                p.index = H(p.index - 1),
                p.updateItemHTML()
            },
            goTo: function(e) {
                p.direction = e >= p.index,
                p.index = e,
                p.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, t = p.st.gallery.preload, n = Math.min(t[0], p.items.length), i = Math.min(t[1], p.items.length);
                for (e = 1; e <= (p.direction ? i : n); e++)
                    p._preloadItem(p.index + e);
                for (e = 1; e <= (p.direction ? n : i); e++)
                    p._preloadItem(p.index - e)
            },
            _preloadItem: function(e) {
                if (e = H(e),
                !p.items[e].preloaded) {
                    var t = p.items[e];
                    t.parsed || (t = p.parseEl(e)),
                    P("LazyLoad", t),
                    "image" === t.type && (t.img = c('<img class="mfp-img" />').on("load.mfploader", function() {
                        t.hasSize = !0
                    }).on("error.mfploader", function() {
                        t.hasSize = !0,
                        t.loadError = !0,
                        P("LazyLoadError", t)
                    }).attr("src", t.src)),
                    t.preloaded = !0
                }
            }
        }
    });
    var V, q, U, X, Z = "retina";
    c.magnificPopup.registerModule(Z, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (1 < window.devicePixelRatio) {
                    var n = p.st.retina
                      , i = n.ratio;
                    1 < (i = isNaN(i) ? i() : i) && (x("ImageHasSize." + Z, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    }),
                    x("ElementParse." + Z, function(e, t) {
                        t.src = n.replaceSrc(t, i)
                    }))
                }
            }
        }
    }),
    V = 1e3,
    q = "ontouchstart"in window,
    U = function() {
        T.off("touchmove" + X + " touchend" + X)
    }
    ,
    X = "." + "mfpFastClick",
    c.fn.mfpFastClick = function(l) {
        return c(this).each(function() {
            var t, n, i, o, r, a, s, e = c(this);
            q && e.on("touchstart" + X, function(e) {
                r = !1,
                s = 1,
                a = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0],
                i = a.clientX,
                o = a.clientY,
                T.on("touchmove" + X, function(e) {
                    a = e.originalEvent ? e.originalEvent.touches : e.touches,
                    s = a.length,
                    a = a[0],
                    (10 < Math.abs(a.clientX - i) || 10 < Math.abs(a.clientY - o)) && (r = !0,
                    U())
                }).on("touchend" + X, function(e) {
                    U(),
                    r || 1 < s || (t = !0,
                    e.preventDefault(),
                    clearTimeout(n),
                    n = setTimeout(function() {
                        t = !1
                    }, V),
                    l())
                })
            }),
            e.on("click" + X, function() {
                t || l()
            })
        })
    }
    ,
    c.fn.destroyMfpFastClick = function() {
        c(this).off("touchstart" + X + " click" + X),
        q && T.off("touchmove" + X + " touchend" + X)
    }
    ,
    I()
});
var ytp = ytp || {};
!function(jQuery, ytp) {
    var nAgt = navigator.userAgent;
    if (!jQuery.browser) {
        var nameOffset, verOffset, ix;
        if (jQuery.browser = {},
        jQuery.browser.mozilla = !1,
        jQuery.browser.webkit = !1,
        jQuery.browser.opera = !1,
        jQuery.browser.safari = !1,
        jQuery.browser.chrome = !1,
        jQuery.browser.msie = !1,
        jQuery.browser.ua = nAgt,
        jQuery.browser.name = navigator.appName,
        jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
        jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10),
        -1 != (verOffset = nAgt.indexOf("Opera")))
            jQuery.browser.opera = !0,
            jQuery.browser.name = "Opera",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 6),
            -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
        else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
            jQuery.browser.msie = !0,
            jQuery.browser.name = "Microsoft Internet Explorer",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
        else if (-1 != nAgt.indexOf("Trident")) {
            jQuery.browser.msie = !0,
            jQuery.browser.name = "Microsoft Internet Explorer";
            var start = nAgt.indexOf("rv:") + 3
              , end = start + 4;
            jQuery.browser.fullVersion = nAgt.substring(start, end)
        } else
            -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0,
            jQuery.browser.chrome = !0,
            jQuery.browser.name = "Chrome",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0,
            jQuery.browser.safari = !0,
            jQuery.browser.name = "Safari",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
            -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0,
            jQuery.browser.name = "Safari",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
            -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0,
            jQuery.browser.name = "Firefox",
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset),
            jQuery.browser.fullVersion = nAgt.substring(verOffset + 1),
            jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
        -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
        -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
        jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10),
        isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
        jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
        jQuery.browser.version = jQuery.browser.majorVersion
    }
    jQuery.browser.android = /Android/i.test(nAgt),
    jQuery.browser.blackberry = /BlackBerry/i.test(nAgt),
    jQuery.browser.ios = /iPhone|iPad|iPod/i.test(nAgt),
    jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt),
    jQuery.browser.windowsMobile = /IEMobile/i.test(nAgt),
    jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile,
    ytp.isDevice = jQuery.browser.mobile,
    jQuery.fn.CSSAnimate = function(u, c, p, d, f) {
        function h(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }
        function m(e, t) {
            return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
        }
        var e;
        return jQuery.support.CSStransition = void 0 !== (e = (document.body || document.documentElement).style).transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition,
        this.each(function() {
            var e = this
              , t = jQuery(this);
            e.id = e.id || "CSSA_" + (new Date).getTime();
            var n = n || {
                type: "noEvent"
            };
            if (e.CSSAIsRunning && e.eventType == n.type)
                e.CSSqueue = function() {
                    t.CSSAnimate(u, c, p, d, f)
                }
                ;
            else if (e.CSSqueue = null,
            e.eventType = n.type,
            0 !== t.length && u) {
                if (e.CSSAIsRunning = !0,
                "function" == typeof c && (f = c,
                c = jQuery.fx.speeds._default),
                "function" == typeof p && (f = p,
                p = 0),
                "function" == typeof d && (f = d,
                d = "cubic-bezier(0.65,0.03,0.36,0.72)"),
                "string" == typeof c)
                    for (var i in jQuery.fx.speeds) {
                        if (c == i) {
                            c = jQuery.fx.speeds[i];
                            break
                        }
                        c = jQuery.fx.speeds._default
                    }
                if (c || (c = jQuery.fx.speeds._default),
                jQuery.support.CSStransition) {
                    (n = {
                        "default": "ease",
                        "in": "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    })[d] && (d = n[d]);
                    var o = ""
                      , r = "transitionEnd";
                    for (a in jQuery.browser.webkit ? (o = "-webkit-",
                    r = "webkitTransitionEnd") : jQuery.browser.mozilla ? (o = "-moz-",
                    r = "transitionend") : jQuery.browser.opera ? (o = "-o-",
                    r = "otransitionend") : jQuery.browser.msie && (o = "-ms-",
                    r = "msTransitionEnd"),
                    n = [],
                    u)
                        "transform" === (i = a) && (u[i = o + "transform"] = u[a],
                        delete u[a]),
                        "filter" === i && (u[i = o + "filter"] = u[a],
                        delete u[a]),
                        "transform-origin" !== i && "origin" !== i || (u[i = o + "transform-origin"] = u[a],
                        delete u[a]),
                        "x" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " translateX(" + m(u[a], "px") + ")",
                        delete u[a]),
                        "y" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " translateY(" + m(u[a], "px") + ")",
                        delete u[a]),
                        "z" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " translateZ(" + m(u[a], "px") + ")",
                        delete u[a]),
                        "rotate" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " rotate(" + m(u[a], "deg") + ")",
                        delete u[a]),
                        "rotateX" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " rotateX(" + m(u[a], "deg") + ")",
                        delete u[a]),
                        "rotateY" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " rotateY(" + m(u[a], "deg") + ")",
                        delete u[a]),
                        "rotateZ" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " rotateZ(" + m(u[a], "deg") + ")",
                        delete u[a]),
                        "scale" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " scale(" + m(u[a], "") + ")",
                        delete u[a]),
                        "scaleX" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " scaleX(" + m(u[a], "") + ")",
                        delete u[a]),
                        "scaleY" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " scaleY(" + m(u[a], "") + ")",
                        delete u[a]),
                        "scaleZ" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " scaleZ(" + m(u[a], "") + ")",
                        delete u[a]),
                        "skew" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " skew(" + m(u[a], "deg") + ")",
                        delete u[a]),
                        "skewX" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " skewX(" + m(u[a], "deg") + ")",
                        delete u[a]),
                        "skewY" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " skewY(" + m(u[a], "deg") + ")",
                        delete u[a]),
                        "perspective" === i && (u[i = o + "transform"] = u[i] || "",
                        u[i] += " perspective(" + m(u[a], "px") + ")",
                        delete u[a]),
                        n.indexOf(i) < 0 && n.push(h(i));
                    var a = n.join(",")
                      , s = function() {
                        t.off(r + "." + e.id),
                        clearTimeout(e.timeout),
                        t.css(o + "transition", ""),
                        "function" == typeof f && f(t),
                        e.called = !0,
                        e.CSSAIsRunning = !1,
                        "function" == typeof e.CSSqueue && (e.CSSqueue(),
                        e.CSSqueue = null)
                    }
                      , l = {};
                    jQuery.extend(l, u),
                    l[o + "transition-property"] = a,
                    l[o + "transition-duration"] = c + "ms",
                    l[o + "transition-delay"] = p + "ms",
                    l[o + "transition-style"] = "preserve-3d",
                    l[o + "transition-timing-function"] = d,
                    setTimeout(function() {
                        t.one(r + "." + e.id, s),
                        t.css(l)
                    }, 1),
                    e.timeout = setTimeout(function() {
                        t.called || !f ? (t.called = !1,
                        e.CSSAIsRunning = !1) : (t.css(o + "transition", ""),
                        f(t),
                        e.CSSAIsRunning = !1,
                        "function" == typeof e.CSSqueue && (e.CSSqueue(),
                        e.CSSqueue = null))
                    }, c + p + 100)
                } else {
                    for (var a in u)
                        "transform" === a && delete u[a],
                        "filter" === a && delete u[a],
                        "transform-origin" === a && delete u[a],
                        "auto" === u[a] && delete u[a];
                    f && "string" != typeof f || (f = "linear"),
                    t.animate(u, c, f)
                }
            }
        })
    }
    ;
    var getYTPVideoID = function(e) {
        return "http://youtu.be/" == e.substr(0, 16) ? e.replace("http://youtu.be/", "") : "https://youtu.be/" == e.substr(0, 17) ? e.replace("https://youtu.be/", "") : -1 < e.indexOf("http") ? e.match(/[\\?&]v=([^&#]*)/)[1] : e
    };
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.7.2",
        author: "Matteo Bicocchi",
        defaults: {
            containment: "body",
            ratio: "16/9",
            videoURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 100,
            addRaster: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnClick: !1,
            realfullscreen: !0,
            gaTrack: !0,
            onReady: function() {},
            onStateChange: function() {},
            onPlaybackQualityChange: function() {},
            onError: function() {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        rasterImg: "images/raster.png",
        rasterImgRetina: "images/raster@2x.png",
        locationProtocol: "https:",
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this
                  , $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0,
                YTPlayer.opt = {},
                $YTPlayer.addClass("mb_YTVPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                void 0 !== property && "undefined" != typeof property.vol && (property.vol = 0 == property.vol ? property.vol = 1 : property.vol),
                jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);
                var canGoFullscreen = !(jQuery.browser.msie || jQuery.browser.opera || self.location.href != top.location.href);
                canGoFullscreen || (YTPlayer.opt.realfullscreen = !1),
                $YTPlayer.attr("id") || $YTPlayer.attr("id", "YTP_" + (new Date).getTime()),
                YTPlayer.opt.id = YTPlayer.id,
                YTPlayer.isAlone = !1;
                var playerID = "mbYTP_" + YTPlayer.id
                  , videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL) : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href"));
                YTPlayer.videoID = videoID,
                YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    autoplay: 0,
                    modestbranding: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                }
                  , canPlayHTML5 = !1
                  , v = document.createElement("video");
                v.canPlayType && (canPlayHTML5 = !0),
                canPlayHTML5 && jQuery.extend(playerVars, {
                    html5: 1
                }),
                jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox")
                  , overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay");
                if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment,
                YTPlayer.opt.containment = "self" == YTPlayer.opt.containment ? jQuery(this) : jQuery(YTPlayer.opt.containment),
                YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(),
                !YTPlayer.isBackground || !ytp.backgroundIsInited)
                    if (YTPlayer.opt.containment.is(jQuery(this)) ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(),
                    ytp.isDevice && YTPlayer.isBackground)
                        $YTPlayer.remove();
                    else {
                        if (YTPlayer.opt.addRaster) {
                            var classN = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster"
                              , retina = window.retina || 1 < window.devicePixelRatio;
                            overlay.addClass(retina ? classN + " retina" : classN)
                        } else
                            overlay.removeClass(function(e, t) {
                                var n = t.split(" ")
                                  , i = [];
                                return $.each(n, function(e, t) {
                                    /raster-.*/.test(t) && i.push(t)
                                }),
                                i.push("retina"),
                                i.join(" ")
                            });
                        var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                        if (wrapper.css({
                            position: "absolute",
                            zIndex: 0,
                            minWidth: "100%",
                            minHeight: "100%",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            opacity: 0
                        }),
                        playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden",
                            opacity: this.opt.opacity
                        }),
                        wrapper.append(playerBox),
                        YTPlayer.opt.containment.children().not("script, style").each(function() {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }),
                        YTPlayer.isBackground ? (jQuery("body").css({
                            position: "relative",
                            minWidth: "100%",
                            minHeight: "100%",
                            zIndex: 1,
                            boxSizing: "border-box"
                        }),
                        wrapper.css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 0,
                            webkitTransform: "translateZ(0)"
                        }),
                        $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                            position: "relative"
                        }),
                        YTPlayer.opt.containment.prepend(wrapper),
                        YTPlayer.wrapper = wrapper,
                        playerBox.css({
                            opacity: 1
                        }),
                        ytp.isDevice || (playerBox.after(overlay),
                        YTPlayer.overlay = overlay),
                        YTPlayer.isBackground || overlay.on("mouseenter", function() {
                            $YTPlayer.find(".mb_YTVPBar").addClass("visible")
                        }).on("mouseleave", function() {
                            $YTPlayer.find(".mb_YTVPBar").removeClass("visible")
                        }),
                        ytp.YTAPIReady)
                            setTimeout(function() {
                                jQuery(document).trigger("YTAPIReady")
                            }, 100);
                        else {
                            jQuery("#YTAPI").remove();
                            var tag = jQuery("<script></script>").attr({
                                src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/player_api?v=" + jQuery.mbYTPlayer.version,
                                id: "YTAPI"
                            });
                            jQuery("head title").after(tag)
                        }
                        jQuery(document).on("YTAPIReady", function() {
                            YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick && jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer", function(e) {
                                var t = jQuery(e.target);
                                (t.is("a") || t.parents().is("a")) && $YTPlayer.pauseYTP()
                            }),
                            YTPlayer.isBackground && (ytp.backgroundIsInited = !0),
                            YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? !!YTPlayer.isBackground : YTPlayer.opt.autoPlay,
                            YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100,
                            jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer),
                            jQuery(YTPlayer).on("YTPChanged", function() {
                                YTPlayer.isInit || (YTPlayer.isInit = !0,
                                !ytp.isDevice || YTPlayer.isBackground ? new YT.Player(playerID,{
                                    videoId: YTPlayer.videoID.toString(),
                                    playerVars: playerVars,
                                    events: {
                                        onReady: function(e) {
                                            if (YTPlayer.player = e.target,
                                            !YTPlayer.isReady) {
                                                YTPlayer.isReady = !0,
                                                YTPlayer.playerEl = YTPlayer.player.getIframe(),
                                                $YTPlayer.optimizeDisplay(),
                                                YTPlayer.videoID = videoID,
                                                jQuery(window).on("resize.YTP", function() {
                                                    $YTPlayer.optimizeDisplay()
                                                }),
                                                YTPlayer.opt.showControls && jQuery(YTPlayer).buildYTPControls();
                                                var t = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                                YTPlayer.player.setVolume(0),
                                                jQuery(YTPlayer).muteYTPVolume(),
                                                jQuery.mbYTPlayer.checkForState(YTPlayer),
                                                YTPlayer.checkForStartAt = setInterval(function() {
                                                    var e = YTPlayer.player.getVideoLoadedFraction() > t / YTPlayer.player.getDuration();
                                                    0 < YTPlayer.player.getDuration() && YTPlayer.player.getCurrentTime() >= t && e ? (clearInterval(YTPlayer.checkForStartAt),
                                                    YTPlayer.player.setVolume(0),
                                                    jQuery(YTPlayer).muteYTPVolume(),
                                                    "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady($YTPlayer),
                                                    YTPlayer.opt.mute || jQuery(YTPlayer).unmuteYTPVolume(),
                                                    jQuery.mbYTPlayer.checkForState(YTPlayer),
                                                    YTPlayer.player.pauseVideo(),
                                                    setTimeout(function() {
                                                        YTPlayer.opt.autoPlay ? ($YTPlayer.playYTP(),
                                                        $YTPlayer.css("background-image", "none")) : YTPlayer.player.pauseVideo(),
                                                        YTPlayer.wrapper.CSSAnimate({
                                                            opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                                        }, 2e3)
                                                    }, 100)) : (YTPlayer.player.playVideo(),
                                                    YTPlayer.player.seekTo(t, !0))
                                                }, jQuery.browser.chrome ? 1e3 : 1)
                                            }
                                        },
                                        onStateChange: function(event) {
                                            if ("function" == typeof event.target.getPlayerState) {
                                                var state = event.target.getPlayerState();
                                                "function" == typeof YTPlayer.opt.onStateChange && YTPlayer.opt.onStateChange($YTPlayer, state);
                                                var controls = jQuery("#controlBar_" + YTPlayer.id)
                                                  , data = YTPlayer.opt;
                                                if (0 == state) {
                                                    if (YTPlayer.state == state)
                                                        return;
                                                    YTPlayer.state = state,
                                                    YTPlayer.player.pauseVideo();
                                                    var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                                    data.loop ? (YTPlayer.wrapper.css({
                                                        opacity: 0
                                                    }),
                                                    $YTPlayer.playYTP(),
                                                    YTPlayer.player.seekTo(startAt, !0)) : YTPlayer.isBackground || (YTPlayer.player.seekTo(startAt, !0),
                                                    $YTPlayer.playYTP(),
                                                    setTimeout(function() {
                                                        $YTPlayer.pauseYTP()
                                                    }, 10)),
                                                    !data.loop && YTPlayer.isBackground ? YTPlayer.wrapper.CSSAnimate({
                                                        opacity: 0
                                                    }, 2e3) : data.loop && (YTPlayer.wrapper.css({
                                                        opacity: 0
                                                    }),
                                                    YTPlayer.loop++),
                                                    controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play),
                                                    jQuery(YTPlayer).trigger("YTPEnd")
                                                }
                                                if (3 == state) {
                                                    if (YTPlayer.state == state)
                                                        return;
                                                    YTPlayer.state = state,
                                                    jQuery.browser.chrome || YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),
                                                    controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play),
                                                    jQuery(YTPlayer).trigger("YTPBuffering")
                                                }
                                                if (-1 == state) {
                                                    if (YTPlayer.state == state)
                                                        return;
                                                    YTPlayer.state = state,
                                                    jQuery(YTPlayer).trigger("YTPUnstarted")
                                                }
                                                if (1 == state) {
                                                    if (YTPlayer.state == state)
                                                        return;
                                                    YTPlayer.state = state,
                                                    jQuery.browser.chrome || YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),
                                                    controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause),
                                                    jQuery(YTPlayer).trigger("YTPStart"),
                                                    "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.title || YTPlayer.videoID.toString()]),
                                                    "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.title || YTPlayer.videoID.toString())
                                                }
                                                if (2 == state) {
                                                    if (YTPlayer.state == state)
                                                        return;
                                                    YTPlayer.state = state,
                                                    controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play),
                                                    jQuery(YTPlayer).trigger("YTPPause")
                                                }
                                            }
                                        },
                                        onPlaybackQualityChange: function() {
                                            "function" == typeof YTPlayer.opt.onPlaybackQualityChange && YTPlayer.opt.onPlaybackQualityChange($YTPlayer)
                                        },
                                        onError: function(e) {
                                            150 == e.data && (console.log("Embedding this video is restricted by Youtube."),
                                            YTPlayer.isPlayList && jQuery(YTPlayer).playNext()),
                                            2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(),
                                            "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                        }
                                    }
                                }) : new YT.Player(playerID,{
                                    videoId: YTPlayer.videoID.toString(),
                                    height: "100%",
                                    width: "100%",
                                    videoId: YTPlayer.videoID,
                                    events: {
                                        onReady: function(e) {
                                            YTPlayer.player = e.target,
                                            playerBox.css({
                                                opacity: 1
                                            }),
                                            YTPlayer.wrapper.css({
                                                opacity: YTPlayer.opt.opacity
                                            }),
                                            $YTPlayer.optimizeDisplay()
                                        },
                                        onStateChange: function() {}
                                    }
                                }))
                            }))
                        })
                    }
            })
        },
        getDataFromFeed: function(e, i) {
            i.videoID = e,
            jQuery.browser.msie ? ("auto" == i.opt.ratio ? i.opt.ratio = "16/9" : i.opt.ratio,
            i.hasData || (i.hasData = !0,
            setTimeout(function() {
                jQuery(i).trigger("YTPChanged")
            }, 100))) : (jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//gdata.youtube.com/feeds/api/videos/" + e + "?v=2&alt=jsonc", function(e) {
                i.dataReceived = !0;
                var t = e.data;
                if (i.title = t.title,
                i.videoData = t,
                "auto" == i.opt.ratio && (t.aspectRatio && "widescreen" === t.aspectRatio ? i.opt.ratio = "16/9" : i.opt.ratio = "4/3"),
                !i.hasData && (i.hasData = !0,
                i.isPlayer)) {
                    var n = i.videoData.thumbnail.hqDefault;
                    i.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + n + ") center center",
                        backgroundSize: "cover"
                    })
                }
                jQuery(i).trigger("YTPChanged")
            }),
            setTimeout(function() {
                i.dataReceived || i.hasData || (i.hasData = !0,
                jQuery(i).trigger("YTPChanged"))
            }, 1500))
        },
        getVideoID: function() {
            return this.get(0).videoID || !1
        },
        setVideoQuality: function(e) {
            var t = this.get(0);
            jQuery.browser.chrome || t.player.setPlaybackQuality(e)
        },
        YTPlaylist: function(e, t, n) {
            var i = this.get(0);
            i.isPlayList = !0,
            t && (e = jQuery.shuffle(e)),
            i.videoID || (i.videos = e,
            i.videoCounter = 0,
            i.videoLength = e.length,
            jQuery(i).data("property", e[0]),
            jQuery(i).mb_YTPlayer()),
            "function" == typeof n && jQuery(i).on("YTPChanged", function() {
                n(i)
            }),
            jQuery(i).on("YTPEnd", function() {
                jQuery(i).playNext()
            })
        },
        playNext: function() {
            var e = this.get(0);
            e.videoCounter++,
            e.videoCounter >= e.videoLength && (e.videoCounter = 0),
            jQuery(e.playerEl).css({
                opacity: 0
            }),
            jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        playPrev: function() {
            var e = this.get(0);
            e.videoCounter--,
            e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1),
            jQuery(e.playerEl).css({
                opacity: 0
            }),
            jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        changeMovie: function(e) {
            var t = this.get(0);
            t.opt.startAt = 0,
            t.opt.stopAt = 0,
            t.opt.mute = !0,
            e && jQuery.extend(t.opt, e),
            t.videoID = getYTPVideoID(t.opt.videoURL),
            jQuery(t).pauseYTP();
            var n = jQuery.browser.msie ? 1e3 : 0;
            if (jQuery(t.playerEl).CSSAnimate({
                opacity: 0
            }, n),
            setTimeout(function() {
                var e = jQuery.browser.chrome ? "default" : t.opt.quality;
                jQuery(t).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID), 1, e),
                jQuery(t).playYTP(),
                jQuery(t).one("YTPStart", function() {
                    t.wrapper.CSSAnimate({
                        opacity: t.isAlone ? 1 : t.opt.opacity
                    }, 1e3),
                    jQuery(t.playerEl).CSSAnimate({
                        opacity: 1
                    }, n),
                    t.opt.startAt && t.player.seekTo(t.opt.startAt),
                    jQuery.mbYTPlayer.checkForState(t),
                    t.opt.autoPlay || jQuery(t).pauseYTP()
                }),
                t.opt.mute ? jQuery(t).muteYTPVolume() : jQuery(t).unmuteYTPVolume()
            }, n),
            t.opt.addRaster) {
                var i = window.retina || 1 < window.devicePixelRatio;
                t.overlay.addClass(i ? "raster retina" : "raster")
            } else
                t.overlay.removeClass("raster"),
                t.overlay.removeClass("retina");
            jQuery("#controlBar_" + t.id).remove(),
            t.opt.showControls && jQuery(t).buildYTPControls(),
            jQuery.mbYTPlayer.getDataFromFeed(t.videoID, t),
            jQuery(t).optimizeDisplay()
        },
        getPlayer: function() {
            return jQuery(this).get(0).player
        },
        playerDestroy: function() {
            var e = this.get(0);
            ytp.YTAPIReady = !1,
            ytp.backgroundIsInited = !1,
            e.isInit = !1,
            e.videoID = null,
            e.wrapper.remove(),
            jQuery("#controlBar_" + e.id).remove()
        },
        fullscreen: function(real) {
            function RunPrefixMethod(e, t) {
                for (var n, i, o = ["webkit", "moz", "ms", "o", ""], r = 0; r < o.length && !e[n]; ) {
                    if (n = t,
                    "" == o[r] && (n = n.substr(0, 1).toLowerCase() + n.substr(1)),
                    "undefined" != (i = typeof e[n = o[r] + n]))
                        return o = [o[r]],
                        "function" == i ? e[n]() : e[n];
                    r++
                }
            }
            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }
            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            void 0 === real && (real = YTPlayer.opt.realfullscreen),
            real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id)
              , fullScreenBtn = controls.find(".mb_OnlyYT")
              , videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? (jQuery(YTPlayer).setVideoQuality("default"),
                    jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1,
                    fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                    jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality),
                    videoWrapper.removeClass("fullscreen"),
                    videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, 500),
                    videoWrapper.css({
                        zIndex: 0
                    }),
                    YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls),
                    jQuery(window).resize(),
                    jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            if (YTPlayer.isAlone)
                real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                    opacity: YTPlayer.opt.opacity
                }, 500),
                videoWrapper.css({
                    zIndex: 0
                })),
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                YTPlayer.isAlone = !1;
            else {
                if (real) {
                    var playerState = YTPlayer.player.getPlayerState();
                    videoWrapper.css({
                        opacity: 0
                    }),
                    videoWrapper.addClass("fullscreen"),
                    launchFullscreen(videoWrapper.get(0)),
                    setTimeout(function() {
                        videoWrapper.CSSAnimate({
                            opacity: 1
                        }, 1e3),
                        YTPlayer.wrapper.append(controls),
                        jQuery(YTPlayer).optimizeDisplay(),
                        YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
                    }, 500)
                } else
                    videoWrapper.css({
                        zIndex: 1e4
                    }).CSSAnimate({
                        opacity: 1
                    }, 1e3);
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),
                YTPlayer.isAlone = !0
            }
        },
        playYTP: function() {
            var e = this.get(0);
            "undefined" != typeof e.player && (jQuery("#controlBar_" + e.id).find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause),
            e.player.playVideo(),
            e.wrapper.CSSAnimate({
                opacity: e.isAlone ? 1 : e.opt.opacity
            }, 2e3),
            jQuery(e).on("YTPStart", function() {
                jQuery(e).css("background-image", "none")
            }))
        },
        toggleLoops: function() {
            var e = this.get(0)
              , t = e.opt;
            1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(),
            t.loop = 1)
        },
        stopYTP: function() {
            var e = this.get(0);
            jQuery("#controlBar_" + e.id).find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play),
            e.player.stopVideo()
        },
        pauseYTP: function() {
            var e = this.get(0);
            e.opt;
            jQuery("#controlBar_" + e.id).find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play),
            e.player.pauseVideo()
        },
        seekToYTP: function(e) {
            this.get(0).player.seekTo(e, !0)
        },
        setYTPVolume: function(e) {
            var t = this.get(0);
            e || t.opt.vol || 0 != t.player.getVolume() ? !e && 0 < t.player.getVolume() || e && t.player.getVolume() == e ? jQuery(t).muteYTPVolume() : t.opt.vol = e : jQuery(t).unmuteYTPVolume(),
            t.player.setVolume(t.opt.vol)
        },
        muteYTPVolume: function() {
            var e = this.get(0);
            e.player.mute(),
            e.player.setVolume(0),
            jQuery("#controlBar_" + e.id).find(".mb_YTVPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute),
            jQuery(e).addClass("isMuted"),
            jQuery(e).trigger("YTPMuted")
        },
        unmuteYTPVolume: function() {
            var e = this.get(0);
            e.player.unMute(),
            e.player.setVolume(e.opt.vol),
            jQuery("#controlBar_" + e.id).find(".mb_YTVPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute),
            jQuery(e).removeClass("isMuted"),
            jQuery(e).trigger("YTPUnmuted")
        },
        manageYTPProgress: function() {
            var e = this.get(0)
              , t = jQuery("#controlBar_" + e.id)
              , n = t.find(".mb_YTVPProgress")
              , i = t.find(".mb_YTVPLoaded")
              , o = t.find(".mb_YTVTime")
              , r = n.outerWidth()
              , a = Math.floor(e.player.getCurrentTime())
              , s = Math.floor(e.player.getDuration())
              , l = a * r / s
              , u = 0
              , c = 100 * e.player.getVideoLoadedFraction();
            return i.css({
                left: u,
                width: c + "%"
            }),
            o.css({
                left: 0,
                width: l
            }),
            {
                totalTime: s,
                currentTime: a
            }
        },
        buildYTPControls: function() {
            var YTPlayer = this.get(0)
              , data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl,
            !jQuery("#controlBar_" + YTPlayer.id).length) {
                var controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTVPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide()
                  , buttonBar = jQuery("<div/>").addClass("buttonBar")
                  , playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTVPPlaypause ytpicon").click(function() {
                    1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).pauseYTP() : jQuery(YTPlayer).playYTP()
                })
                  , MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function() {
                    0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).unmuteYTPVolume() : jQuery(YTPlayer).muteYTPVolume()
                })
                  , idx = jQuery("<span/>").addClass("mb_YTVPTime")
                  , vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                    window.open(vURL, "viewOnYT")
                })
                  , onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                    jQuery(YTPlayer).fullscreen(data.realfullscreen)
                })
                  , progressBar = jQuery("<div/>").addClass("mb_YTVPProgress").css("position", "absolute").click(function(e) {
                    timeBar.css({
                        width: e.clientX - timeBar.offset().left
                    }),
                    YTPlayer.timeW = e.clientX - timeBar.offset().left,
                    controlBar.find(".mb_YTVPLoaded").css({
                        width: 0
                    });
                    var t = Math.floor(YTPlayer.player.getDuration());
                    YTPlayer["goto"] = timeBar.outerWidth() * t / progressBar.outerWidth(),
                    YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0),
                    controlBar.find(".mb_YTVPLoaded").css({
                        width: 0
                    })
                })
                  , loadedBar = jQuery("<div/>").addClass("mb_YTVPLoaded").css("position", "absolute")
                  , timeBar = jQuery("<div/>").addClass("mb_YTVTime").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar),
                buttonBar.append(playpause).append(MuteUnmute).append(idx),
                data.showYTLogo && buttonBar.append(movieUrl),
                (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo),
                controlBar.append(buttonBar).append(progressBar),
                YTPlayer.isBackground ? jQuery("body").after(controlBar) : (controlBar.addClass("inlinePlayer"),
                YTPlayer.wrapper.before(controlBar)),
                controlBar.fadeIn()
            }
        },
        checkForState: function(a) {
            clearInterval(a.getState),
            a.getState = setInterval(function() {
                var e = jQuery(a).manageYTPProgress()
                  , t = jQuery(a)
                  , n = jQuery("#controlBar_" + a.id)
                  , i = a.opt
                  , o = a.opt.startAt ? a.opt.startAt : 1
                  , r = a.opt.stopAt > a.opt.startAt ? a.opt.stopAt : 0;
                if (r = r < a.player.getDuration() ? r : 0,
                0 == a.player.getVolume() ? t.addClass("isMuted") : t.removeClass("isMuted"),
                e.totalTime ? n.find(".mb_YTVPTime").html(jQuery.mbYTPlayer.formatTime(e.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(e.totalTime)) : n.find(".mb_YTVPTime").html("-- : -- / -- : --"),
                1 == a.player.getPlayerState() && (parseFloat(a.player.getDuration() - 3) < a.player.getCurrentTime() || 0 < r && parseFloat(a.player.getCurrentTime()) > r)) {
                    if (a.isEnded)
                        return;
                    if (a.isEnded = !0,
                    setTimeout(function() {
                        a.isEnded = !1
                    }, 2e3),
                    a.isPlayList)
                        return clearInterval(a.getState),
                        void jQuery(a).trigger("YTPEnd");
                    i.loop ? a.player.seekTo(o, !0) : (a.player.pauseVideo(),
                    a.wrapper.CSSAnimate({
                        opacity: 0
                    }, 1e3, function() {
                        if (jQuery(a).trigger("YTPEnd"),
                        a.player.seekTo(o, !0),
                        !a.isBackground) {
                            var e = a.videoData.thumbnail.hqDefault;
                            jQuery(a).css({
                                background: "rgba(0,0,0,0.5) url(" + e + ") center center",
                                backgroundSize: "cover"
                            })
                        }
                    }))
                }
            }, 1)
        },
        formatTime: function(e) {
            var t = Math.floor(e / 60)
              , n = Math.floor(e - 60 * t);
            return (t <= 9 ? "0" + t : t) + " : " + (n <= 9 ? "0" + n : n)
        }
    },
    jQuery.fn.toggleVolume = function() {
        var e = this.get(0);
        if (e)
            return e.player.isMuted() ? (jQuery(e).unmuteYTPVolume(),
            !0) : (jQuery(e).muteYTPVolume(),
            !1)
    }
    ,
    jQuery.fn.optimizeDisplay = function() {
        var e = this.get(0)
          , t = e.opt
          , n = jQuery(e.playerEl)
          , i = {}
          , o = e.wrapper;
        i.width = o.outerWidth(),
        i.height = o.outerHeight();
        var r = 24
          , a = 100
          , s = {};
        s.width = i.width + i.width * r / 100,
        s.height = "16/9" == t.ratio ? Math.ceil(9 * i.width / 16) : Math.ceil(3 * i.width / 4),
        s.marginTop = -(s.height - i.height) / 2,
        s.marginLeft = -i.width * (r / 2) / 100,
        s.height < i.height && (s.height = i.height + i.height * r / 100,
        s.width = "16/9" == t.ratio ? Math.floor(16 * i.height / 9) : Math.floor(4 * i.height / 3),
        s.marginTop = -i.height * (r / 2) / 100,
        s.marginLeft = -(s.width - i.width) / 2),
        s.width += a,
        s.height += a,
        s.marginTop -= a / 2,
        s.marginLeft -= a / 2,
        n.css({
            width: s.width,
            height: s.height,
            marginTop: s.marginTop,
            marginLeft: s.marginLeft
        })
    }
    ,
    jQuery.shuffle = function(e) {
        for (var t = e.slice(), n = t.length, i = n; i--; ) {
            var o = parseInt(Math.random() * n)
              , r = t[i];
            t[i] = t[o],
            t[o] = r
        }
        return t
    }
    ,
    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer,
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.YTPlaylist,
    jQuery.fn.playNext = jQuery.mbYTPlayer.playNext,
    jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev,
    jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie,
    jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID,
    jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer,
    jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy,
    jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen,
    jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildYTPControls,
    jQuery.fn.playYTP = jQuery.mbYTPlayer.playYTP,
    jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops,
    jQuery.fn.stopYTP = jQuery.mbYTPlayer.stopYTP,
    jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pauseYTP,
    jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekToYTP,
    jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.muteYTPVolume,
    jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmuteYTPVolume,
    jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setYTPVolume,
    jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
    jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageYTPProgress
}(jQuery, ytp),
$(document).ready(function() {
    function e() {
        var t = []
          , e = []
          , n = $(window).scrollTop()
          , i = 200;
        $(".navbar-collapse").find(".scroll a").each(function() {
            t.push($($(this).attr("href")).offset().top),
            e.push($($(this).attr("href")).offset().top + $($(this).attr("href")).height())
        }),
        $.each(t, function(e) {
            n > t[e] - i && $(".navbar-collapse li.scroll").removeClass("active").eq(e).addClass("active")
        })
    }
    var t = $(window).height();
    $("#headere-top figure .item").css("height", t),
    $(window).resize(function() {
        $("#headere-top figure .item").css("height", t)
    }),
    $(window).on("scroll", function() {
        600 < $(window).scrollTop() ? $(".header-top .header-fixed-wrapper").addClass("navbar-fixed-top animated fadeInDown") : $(".header-top .header-fixed-wrapper").removeClass("navbar-fixed-top animated fadeInDown")
    }),
    $(window).scroll(function() {
        200 < $(this).scrollTop() ? $("#menu").fadeIn(500) : $("#menu").fadeOut(500)
    }),
    $(window).scroll(function() {
        e()
    }),
    $(".navbar-collapse ul li a").on("click", function() {
        return $("html, body").animate({
            scrollTop: $(this.hash).offset().top - 1
        }, 1e3),
        !1
    });
    $(window).width();
    var n = 0 == $(".tp-banner-container").length ? -1 : $(".section-one").offset().top - 2 * $(".navbar").height();
    $(".navbar").affix({
        offset: {
            top: n,
            bottom: function() {
                return this.bottom = $(".footer").outerHeight(!0)
            }
        }
    }),
    $("#owl-demo").owlCarousel({
        itemsCustom: [[0, 1], [450, 1], [600, 1], [700, 1], [1e3, 1], [1200, 1], [1400, 1], [1600, 1]],
        navigation: !0,
        autoPlay: 3e3
    }),
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    })
}),
window.onload = function() {
    var e = [{
        featureType: "water",
        elementType: "geometry",
        stylers: [{
            color: "#ffdf5f"
        }, {
            lightness: 17
        }]
    }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{
            color: "#f7f1df"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 17
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 29
        }, {
            weight: .2
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
            color: "#bde6ab"
        }, {
            lightness: 18
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 16
        }]
    }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
            color: "#f5f5f5"
        }, {
            lightness: 21
        }]
    }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
            color: "#dedede"
        }, {
            lightness: 21
        }]
    }, {
        elementType: "labels.text.stroke",
        stylers: [{
            visibility: "on"
        }, {
            color: "#ffffff"
        }, {
            lightness: 16
        }]
    }, {
        elementType: "labels.text.fill",
        stylers: [{
            saturation: 36
        }, {
            color: "#333333"
        }, {
            lightness: 40
        }]
    }, {
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
            color: "#f2f2f2"
        }, {
            lightness: 19
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{
            color: "#fefefe"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#fefefe"
        }, {
            lightness: 17
        }, {
            weight: 1.2
        }]
    }]
      , t = {
        mapTypeControlOptions: {
            mapTypeIds: ["Styled"]
        },
        center: new google.maps.LatLng(-7.245217594087794,112.74455556869509),
        zoom: 16,
        disableDefaultUI: !0,
        scrollwheel: !1,
        mapTypeId: "Styled"
    }
      , n = document.getElementById("surabaya")
      , i = new google.maps.Map(n,t)
      , o = new google.maps.StyledMapType(e,{
        name: "Styled"
    });
    i.mapTypes.set("Styled", o)
}
,
"function" != typeof Object.create && (Object.create = function(e) {
    function t() {}
    return t.prototype = e,
    new t
}
),
function(l, u, c) {
    var n = {
        init: function(e, t) {
            var n = this;
            n.$elem = l(t),
            n.options = l.extend({}, l.fn.owlCarousel.options, n.$elem.data(), e),
            n.userOptions = e,
            n.loadContent()
        },
        loadContent: function() {
            function e(e) {
                var t, n = "";
                if ("function" == typeof i.options.jsonSuccess)
                    i.options.jsonSuccess.apply(this, [e]);
                else {
                    for (t in e.owl)
                        e.owl.hasOwnProperty(t) && (n += e.owl[t].item);
                    i.$elem.html(n)
                }
                i.logIn()
            }
            var t, i = this;
            "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]),
            "string" == typeof i.options.jsonPath ? (t = i.options.jsonPath,
            l.getJSON(t, e)) : i.logIn()
        },
        logIn: function() {
            var e = this;
            e.$elem.data("owl-originalStyles", e.$elem.attr("style")),
            e.$elem.data("owl-originalClasses", e.$elem.attr("class")),
            e.$elem.css({
                opacity: 0
            }),
            e.orignalItems = e.options.items,
            e.checkBrowser(),
            e.wrapperWidth = 0,
            e.checkVisible = null,
            e.setVars()
        },
        setVars: function() {
            var e = this;
            if (0 === e.$elem.children().length)
                return !1;
            e.baseClass(),
            e.eventTypes(),
            e.$userItems = e.$elem.children(),
            e.itemsAmount = e.$userItems.length,
            e.wrapItems(),
            e.$owlItems = e.$elem.find(".owl-item"),
            e.$owlWrapper = e.$elem.find(".owl-wrapper"),
            e.playDirection = "next",
            e.prevItem = 0,
            e.prevArr = [0],
            e.currentItem = 0,
            e.customEvents(),
            e.onStartup()
        },
        onStartup: function() {
            var e = this;
            e.updateItems(),
            e.calculateAll(),
            e.buildControls(),
            e.updateControls(),
            e.response(),
            e.moveEvents(),
            e.stopOnHover(),
            e.owlStatus(),
            !1 !== e.options.transitionStyle && e.transitionTypes(e.options.transitionStyle),
            !0 === e.options.autoPlay && (e.options.autoPlay = 5e3),
            e.play(),
            e.$elem.find(".owl-wrapper").css("display", "block"),
            e.$elem.is(":visible") ? e.$elem.css("opacity", 1) : e.watchVisibility(),
            e.onstartup = !1,
            e.eachMoveUpdate(),
            "function" == typeof e.options.afterInit && e.options.afterInit.apply(this, [e.$elem])
        },
        eachMoveUpdate: function() {
            var e = this;
            !0 === e.options.lazyLoad && e.lazyLoad(),
            !0 === e.options.autoHeight && e.autoHeight(),
            e.onVisibleItems(),
            "function" == typeof e.options.afterAction && e.options.afterAction.apply(this, [e.$elem])
        },
        updateVars: function() {
            var e = this;
            "function" == typeof e.options.beforeUpdate && e.options.beforeUpdate.apply(this, [e.$elem]),
            e.watchVisibility(),
            e.updateItems(),
            e.calculateAll(),
            e.updatePosition(),
            e.updateControls(),
            e.eachMoveUpdate(),
            "function" == typeof e.options.afterUpdate && e.options.afterUpdate.apply(this, [e.$elem])
        },
        reload: function() {
            var e = this;
            u.setTimeout(function() {
                e.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var e = this;
            if (!1 !== e.$elem.is(":visible"))
                return !1;
            e.$elem.css({
                opacity: 0
            }),
            u.clearInterval(e.autoPlayInterval),
            u.clearInterval(e.checkVisible),
            e.checkVisible = u.setInterval(function() {
                e.$elem.is(":visible") && (e.reload(),
                e.$elem.animate({
                    opacity: 1
                }, 200),
                u.clearInterval(e.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            var e = this;
            e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),
            e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),
            e.wrapperOuter = e.$elem.find(".owl-wrapper-outer"),
            e.$elem.css("display", "block")
        },
        baseClass: function() {
            var e = this
              , t = e.$elem.hasClass(e.options.baseClass)
              , n = e.$elem.hasClass(e.options.theme);
            t || e.$elem.addClass(e.options.baseClass),
            n || e.$elem.addClass(e.options.theme)
        },
        updateItems: function() {
            var e, t, n = this;
            if (!1 === n.options.responsive)
                return !1;
            if (!0 === n.options.singleItem)
                return n.options.items = n.orignalItems = 1,
                n.options.itemsCustom = !1,
                n.options.itemsDesktop = !1,
                n.options.itemsDesktopSmall = !1,
                n.options.itemsTablet = !1,
                n.options.itemsTabletSmall = !1,
                n.options.itemsMobile = !1;
            if ((e = l(n.options.responsiveBaseWidth).width()) > (n.options.itemsDesktop[0] || n.orignalItems) && (n.options.items = n.orignalItems),
            !1 !== n.options.itemsCustom)
                for (n.options.itemsCustom.sort(function(e, t) {
                    return e[0] - t[0]
                }),
                t = 0; t < n.options.itemsCustom.length; t += 1)
                    n.options.itemsCustom[t][0] <= e && (n.options.items = n.options.itemsCustom[t][1]);
            else
                e <= n.options.itemsDesktop[0] && !1 !== n.options.itemsDesktop && (n.options.items = n.options.itemsDesktop[1]),
                e <= n.options.itemsDesktopSmall[0] && !1 !== n.options.itemsDesktopSmall && (n.options.items = n.options.itemsDesktopSmall[1]),
                e <= n.options.itemsTablet[0] && !1 !== n.options.itemsTablet && (n.options.items = n.options.itemsTablet[1]),
                e <= n.options.itemsTabletSmall[0] && !1 !== n.options.itemsTabletSmall && (n.options.items = n.options.itemsTabletSmall[1]),
                e <= n.options.itemsMobile[0] && !1 !== n.options.itemsMobile && (n.options.items = n.options.itemsMobile[1]);
            n.options.items > n.itemsAmount && !0 === n.options.itemsScaleUp && (n.options.items = n.itemsAmount)
        },
        response: function() {
            var e, t, n = this;
            if (!0 !== n.options.responsive)
                return !1;
            t = l(u).width(),
            n.resizer = function() {
                l(u).width() !== t && (!1 !== n.options.autoPlay && u.clearInterval(n.autoPlayInterval),
                u.clearTimeout(e),
                e = u.setTimeout(function() {
                    t = l(u).width(),
                    n.updateVars()
                }, n.options.responsiveRefreshRate))
            }
            ,
            l(u).resize(n.resizer)
        },
        updatePosition: function() {
            var e = this;
            e.jumpTo(e.currentItem),
            !1 !== e.options.autoPlay && e.checkAp()
        },
        appendItemsSizes: function() {
            var n = this
              , i = 0
              , o = n.itemsAmount - n.options.items;
            n.$owlItems.each(function(e) {
                var t = l(this);
                t.css({
                    width: n.itemWidth
                }).data("owl-item", Number(e)),
                e % n.options.items != 0 && e !== o || o < e || (i += 1),
                t.data("owl-roundPages", i)
            })
        },
        appendWrapperSizes: function() {
            var e = this
              , t = e.$owlItems.length * e.itemWidth;
            e.$owlWrapper.css({
                width: 2 * t,
                left: 0
            }),
            e.appendItemsSizes()
        },
        calculateAll: function() {
            var e = this;
            e.calculateWidth(),
            e.appendWrapperSizes(),
            e.loops(),
            e.max()
        },
        calculateWidth: function() {
            var e = this;
            e.itemWidth = Math.round(e.$elem.width() / e.options.items)
        },
        max: function() {
            var e = this
              , t = -1 * (e.itemsAmount * e.itemWidth - e.options.items * e.itemWidth);
            return e.options.items > e.itemsAmount ? (t = e.maximumItem = 0,
            e.maximumPixels = 0) : (e.maximumItem = e.itemsAmount - e.options.items,
            e.maximumPixels = t),
            t
        },
        min: function() {
            return 0
        },
        loops: function() {
            var e, t, n = this, i = 0, o = 0;
            for (n.positionsInArray = [0],
            n.pagesInArray = [],
            e = 0; e < n.itemsAmount; e += 1)
                o += n.itemWidth,
                n.positionsInArray.push(-o),
                !0 === n.options.scrollPerPage && (t = l(n.$owlItems[e]).data("owl-roundPages")) !== i && (n.pagesInArray[i] = n.positionsInArray[e],
                i = t)
        },
        buildControls: function() {
            var e = this;
            !0 !== e.options.navigation && !0 !== e.options.pagination || (e.owlControls = l('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)),
            !0 === e.options.pagination && e.buildPagination(),
            !0 === e.options.navigation && e.buildButtons()
        },
        buildButtons: function() {
            var t = this
              , e = l('<div class="owl-buttons"/>');
            t.owlControls.append(e),
            t.buttonPrev = l("<div/>", {
                "class": "owl-prev",
                html: t.options.navigationText[0] || ""
            }),
            t.buttonNext = l("<div/>", {
                "class": "owl-next",
                html: t.options.navigationText[1] || ""
            }),
            e.append(t.buttonPrev).append(t.buttonNext),
            e.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(e) {
                e.preventDefault()
            }),
            e.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(e) {
                e.preventDefault(),
                l(this).hasClass("owl-next") ? t.next() : t.prev()
            })
        },
        buildPagination: function() {
            var t = this;
            t.paginationWrapper = l('<div class="owl-pagination"/>'),
            t.owlControls.append(t.paginationWrapper),
            t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(e) {
                e.preventDefault(),
                Number(l(this).data("owl-page")) !== t.currentItem && t.goTo(Number(l(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var e, t, n, i, o, r, a = this;
            if (!1 === a.options.pagination)
                return !1;
            for (a.paginationWrapper.html(""),
            e = 0,
            t = a.itemsAmount - a.itemsAmount % a.options.items,
            i = 0; i < a.itemsAmount; i += 1)
                i % a.options.items == 0 && (e += 1,
                t === i && (n = a.itemsAmount - a.options.items),
                o = l("<div/>", {
                    "class": "owl-page"
                }),
                r = l("<span></span>", {
                    text: !0 === a.options.paginationNumbers ? e : "",
                    "class": !0 === a.options.paginationNumbers ? "owl-numbers" : ""
                }),
                o.append(r),
                o.data("owl-page", t === i ? n : i),
                o.data("owl-roundPages", e),
                a.paginationWrapper.append(o));
            a.checkPagination()
        },
        checkPagination: function() {
            var e = this;
            if (!1 === e.options.pagination)
                return !1;
            e.paginationWrapper.find(".owl-page").each(function() {
                l(this).data("owl-roundPages") === l(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"),
                l(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            var e = this;
            if (!1 === e.options.navigation)
                return !1;
            !1 === e.options.rewindNav && (0 === e.currentItem && 0 === e.maximumItem ? (e.buttonPrev.addClass("disabled"),
            e.buttonNext.addClass("disabled")) : 0 === e.currentItem && 0 !== e.maximumItem ? (e.buttonPrev.addClass("disabled"),
            e.buttonNext.removeClass("disabled")) : e.currentItem === e.maximumItem ? (e.buttonPrev.removeClass("disabled"),
            e.buttonNext.addClass("disabled")) : 0 !== e.currentItem && e.currentItem !== e.maximumItem && (e.buttonPrev.removeClass("disabled"),
            e.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            var e = this;
            e.updatePagination(),
            e.checkNavigation(),
            e.owlControls && (e.options.items >= e.itemsAmount ? e.owlControls.hide() : e.owlControls.show())
        },
        destroyControls: function() {
            var e = this;
            e.owlControls && e.owlControls.remove()
        },
        next: function(e) {
            var t = this;
            if (t.isTransition)
                return !1;
            if (t.currentItem += !0 === t.options.scrollPerPage ? t.options.items : 1,
            t.currentItem > t.maximumItem + (!0 === t.options.scrollPerPage ? t.options.items - 1 : 0)) {
                if (!0 !== t.options.rewindNav)
                    return t.currentItem = t.maximumItem,
                    !1;
                t.currentItem = 0,
                e = "rewind"
            }
            t.goTo(t.currentItem, e)
        },
        prev: function(e) {
            var t = this;
            if (t.isTransition)
                return !1;
            if (!0 === t.options.scrollPerPage && 0 < t.currentItem && t.currentItem < t.options.items ? t.currentItem = 0 : t.currentItem -= !0 === t.options.scrollPerPage ? t.options.items : 1,
            t.currentItem < 0) {
                if (!0 !== t.options.rewindNav)
                    return t.currentItem = 0,
                    !1;
                t.currentItem = t.maximumItem,
                e = "rewind"
            }
            t.goTo(t.currentItem, e)
        },
        goTo: function(e, t, n) {
            var i, o = this;
            return !o.isTransition && ("function" == typeof o.options.beforeMove && o.options.beforeMove.apply(this, [o.$elem]),
            e >= o.maximumItem ? e = o.maximumItem : e <= 0 && (e = 0),
            o.currentItem = o.owl.currentItem = e,
            !1 !== o.options.transitionStyle && "drag" !== n && 1 === o.options.items && !0 === o.browser.support3d ? (o.swapSpeed(0),
            !0 === o.browser.support3d ? o.transition3d(o.positionsInArray[e]) : o.css2slide(o.positionsInArray[e], 1),
            o.afterGo(),
            o.singleItemTransition(),
            !1) : (i = o.positionsInArray[e],
            !0 === o.browser.support3d ? (!(o.isCss3Finish = !1) === t ? (o.swapSpeed("paginationSpeed"),
            u.setTimeout(function() {
                o.isCss3Finish = !0
            }, o.options.paginationSpeed)) : "rewind" === t ? (o.swapSpeed(o.options.rewindSpeed),
            u.setTimeout(function() {
                o.isCss3Finish = !0
            }, o.options.rewindSpeed)) : (o.swapSpeed("slideSpeed"),
            u.setTimeout(function() {
                o.isCss3Finish = !0
            }, o.options.slideSpeed)),
            o.transition3d(i)) : !0 === t ? o.css2slide(i, o.options.paginationSpeed) : "rewind" === t ? o.css2slide(i, o.options.rewindSpeed) : o.css2slide(i, o.options.slideSpeed),
            void o.afterGo()))
        },
        jumpTo: function(e) {
            var t = this;
            "function" == typeof t.options.beforeMove && t.options.beforeMove.apply(this, [t.$elem]),
            e >= t.maximumItem || -1 === e ? e = t.maximumItem : e <= 0 && (e = 0),
            t.swapSpeed(0),
            !0 === t.browser.support3d ? t.transition3d(t.positionsInArray[e]) : t.css2slide(t.positionsInArray[e], 1),
            t.currentItem = t.owl.currentItem = e,
            t.afterGo()
        },
        afterGo: function() {
            var e = this;
            e.prevArr.push(e.currentItem),
            e.prevItem = e.owl.prevItem = e.prevArr[e.prevArr.length - 2],
            e.prevArr.shift(0),
            e.prevItem !== e.currentItem && (e.checkPagination(),
            e.checkNavigation(),
            e.eachMoveUpdate(),
            !1 !== e.options.autoPlay && e.checkAp()),
            "function" == typeof e.options.afterMove && e.prevItem !== e.currentItem && e.options.afterMove.apply(this, [e.$elem])
        },
        stop: function() {
            var e = this;
            e.apStatus = "stop",
            u.clearInterval(e.autoPlayInterval)
        },
        checkAp: function() {
            var e = this;
            "stop" !== e.apStatus && e.play()
        },
        play: function() {
            var e = this;
            if (!(e.apStatus = "play") === e.options.autoPlay)
                return !1;
            u.clearInterval(e.autoPlayInterval),
            e.autoPlayInterval = u.setInterval(function() {
                e.next(!0)
            }, e.options.autoPlay)
        },
        swapSpeed: function(e) {
            var t = this;
            "slideSpeed" === e ? t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)) : "paginationSpeed" === e ? t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)) : "string" != typeof e && t.$owlWrapper.css(t.addCssSpeed(e))
        },
        addCssSpeed: function(e) {
            return {
                "-webkit-transition": "all " + e + "ms ease",
                "-moz-transition": "all " + e + "ms ease",
                "-o-transition": "all " + e + "ms ease",
                transition: "all " + e + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(e) {
            return {
                "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
                transform: "translate3d(" + e + "px, 0px,0px)"
            }
        },
        transition3d: function(e) {
            var t = this;
            t.$owlWrapper.css(t.doTranslate(e))
        },
        css2move: function(e) {
            this.$owlWrapper.css({
                left: e
            })
        },
        css2slide: function(e, t) {
            var n = this;
            n.isCssFinish = !1,
            n.$owlWrapper.stop(!0, !0).animate({
                left: e
            }, {
                duration: t || n.options.slideSpeed,
                complete: function() {
                    n.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var e, t, n, i, o = this, r = "translate3d(0px, 0px, 0px)", a = c.createElement("div");
            a.style.cssText = "  -moz-transform:" + r + "; -ms-transform:" + r + "; -o-transform:" + r + "; -webkit-transform:" + r + "; transform:" + r,
            e = /translate3d\(0px, 0px, 0px\)/g,
            n = null !== (t = a.style.cssText.match(e)) && 1 === t.length,
            i = "ontouchstart"in u || u.navigator.msMaxTouchPoints,
            o.browser = {
                support3d: n,
                isTouch: i
            }
        },
        moveEvents: function() {
            var e = this;
            !1 === e.options.mouseDrag && !1 === e.options.touchDrag || (e.gestures(),
            e.disabledEvents())
        },
        eventTypes: function() {
            var e = this
              , t = ["s", "e", "x"];
            e.ev_types = {},
            !0 === e.options.mouseDrag && !0 === e.options.touchDrag ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === e.options.mouseDrag && !0 === e.options.touchDrag ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === e.options.mouseDrag && !1 === e.options.touchDrag && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]),
            e.ev_types.start = t[0],
            e.ev_types.move = t[1],
            e.ev_types.end = t[2]
        },
        disabledEvents: function() {
            var e = this;
            e.$elem.on("dragstart.owl", function(e) {
                e.preventDefault()
            }),
            e.$elem.on("mousedown.disableTextSelect", function(e) {
                return l(e.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function o(e) {
                if (e.touches !== undefined)
                    return {
                        x: e.touches[0].pageX,
                        y: e.touches[0].pageY
                    };
                if (e.touches === undefined) {
                    if (e.pageX !== undefined)
                        return {
                            x: e.pageX,
                            y: e.pageY
                        };
                    if (e.pageX === undefined)
                        return {
                            x: e.clientX,
                            y: e.clientY
                        }
                }
            }
            function r(e) {
                "on" === e ? (l(c).on(a.ev_types.move, t),
                l(c).on(a.ev_types.end, n)) : "off" === e && (l(c).off(a.ev_types.move),
                l(c).off(a.ev_types.end))
            }
            function e(e) {
                var t, n = e.originalEvent || e || u.event;
                if (3 === n.which)
                    return !1;
                if (!(a.itemsAmount <= a.options.items)) {
                    if (!1 === a.isCssFinish && !a.options.dragBeforeAnimFinish)
                        return !1;
                    if (!1 === a.isCss3Finish && !a.options.dragBeforeAnimFinish)
                        return !1;
                    !1 !== a.options.autoPlay && u.clearInterval(a.autoPlayInterval),
                    !0 === a.browser.isTouch || a.$owlWrapper.hasClass("grabbing") || a.$owlWrapper.addClass("grabbing"),
                    a.newPosX = 0,
                    a.newRelativeX = 0,
                    l(this).css(a.removeTransition()),
                    t = l(this).position(),
                    s.relativePos = t.left,
                    s.offsetX = o(n).x - t.left,
                    s.offsetY = o(n).y - t.top,
                    r("on"),
                    s.sliding = !1,
                    s.targetElement = n.target || n.srcElement
                }
            }
            function t(e) {
                var t, n, i = e.originalEvent || e || u.event;
                a.newPosX = o(i).x - s.offsetX,
                a.newPosY = o(i).y - s.offsetY,
                a.newRelativeX = a.newPosX - s.relativePos,
                "function" == typeof a.options.startDragging && !0 !== s.dragging && 0 !== a.newRelativeX && (s.dragging = !0,
                a.options.startDragging.apply(a, [a.$elem])),
                (8 < a.newRelativeX || a.newRelativeX < -8) && !0 === a.browser.isTouch && (i.preventDefault !== undefined ? i.preventDefault() : i.returnValue = !1,
                s.sliding = !0),
                (10 < a.newPosY || a.newPosY < -10) && !1 === s.sliding && l(c).off("touchmove.owl"),
                t = function() {
                    return a.newRelativeX / 5
                }
                ,
                n = function() {
                    return a.maximumPixels + a.newRelativeX / 5
                }
                ,
                a.newPosX = Math.max(Math.min(a.newPosX, t()), n()),
                !0 === a.browser.support3d ? a.transition3d(a.newPosX) : a.css2move(a.newPosX)
            }
            function n(e) {
                var t, n, i, o = e.originalEvent || e || u.event;
                o.target = o.target || o.srcElement,
                !(s.dragging = !1) !== a.browser.isTouch && a.$owlWrapper.removeClass("grabbing"),
                a.newRelativeX < 0 ? a.dragDirection = a.owl.dragDirection = "left" : a.dragDirection = a.owl.dragDirection = "right",
                0 !== a.newRelativeX && (t = a.getNewPosition(),
                a.goTo(t, !1, "drag"),
                s.targetElement === o.target && !0 !== a.browser.isTouch && (l(o.target).on("click.disable", function(e) {
                    e.stopImmediatePropagation(),
                    e.stopPropagation(),
                    e.preventDefault(),
                    l(e.target).off("click.disable")
                }),
                i = (n = l._data(o.target, "events").click).pop(),
                n.splice(0, 0, i))),
                r("off")
            }
            var a = this
              , s = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
            };
            a.isCssFinish = !0,
            a.$elem.on(a.ev_types.start, ".owl-wrapper", e)
        },
        getNewPosition: function() {
            var e = this
              , t = e.closestItem();
            return t > e.maximumItem ? (e.currentItem = e.maximumItem,
            t = e.maximumItem) : 0 <= e.newPosX && (t = 0,
            e.currentItem = 0),
            t
        },
        closestItem: function() {
            var n = this
              , i = !0 === n.options.scrollPerPage ? n.pagesInArray : n.positionsInArray
              , o = n.newPosX
              , r = null;
            return l.each(i, function(e, t) {
                o - n.itemWidth / 20 > i[e + 1] && o - n.itemWidth / 20 < t && "left" === n.moveDirection() ? (r = t,
                !0 === n.options.scrollPerPage ? n.currentItem = l.inArray(r, n.positionsInArray) : n.currentItem = e) : o + n.itemWidth / 20 < t && o + n.itemWidth / 20 > (i[e + 1] || i[e] - n.itemWidth) && "right" === n.moveDirection() && (!0 === n.options.scrollPerPage ? (r = i[e + 1] || i[i.length - 1],
                n.currentItem = l.inArray(r, n.positionsInArray)) : (r = i[e + 1],
                n.currentItem = e + 1))
            }),
            n.currentItem
        },
        moveDirection: function() {
            var e, t = this;
            return t.newRelativeX < 0 ? (e = "right",
            t.playDirection = "next") : (e = "left",
            t.playDirection = "prev"),
            e
        },
        customEvents: function() {
            var n = this;
            n.$elem.on("owl.next", function() {
                n.next()
            }),
            n.$elem.on("owl.prev", function() {
                n.prev()
            }),
            n.$elem.on("owl.play", function(e, t) {
                n.options.autoPlay = t,
                n.play(),
                n.hoverStatus = "play"
            }),
            n.$elem.on("owl.stop", function() {
                n.stop(),
                n.hoverStatus = "stop"
            }),
            n.$elem.on("owl.goTo", function(e, t) {
                n.goTo(t)
            }),
            n.$elem.on("owl.jumpTo", function(e, t) {
                n.jumpTo(t)
            })
        },
        stopOnHover: function() {
            var e = this;
            !0 === e.options.stopOnHover && !0 !== e.browser.isTouch && !1 !== e.options.autoPlay && (e.$elem.on("mouseover", function() {
                e.stop()
            }),
            e.$elem.on("mouseout", function() {
                "stop" !== e.hoverStatus && e.play()
            }))
        },
        lazyLoad: function() {
            var e, t, n, i, o = this;
            if (!1 === o.options.lazyLoad)
                return !1;
            for (e = 0; e < o.itemsAmount; e += 1)
                "loaded" !== (t = l(o.$owlItems[e])).data("owl-loaded") && (n = t.data("owl-item"),
                "string" == typeof (i = t.find(".lazyOwl")).data("src") ? (t.data("owl-loaded") === undefined && (i.hide(),
                t.addClass("loading").data("owl-loaded", "checked")),
                (!0 !== o.options.lazyFollow || n >= o.currentItem) && n < o.currentItem + o.options.items && i.length && o.lazyPreload(t, i)) : t.data("owl-loaded", "loaded"))
        },
        lazyPreload: function(e, t) {
            function n() {
                e.data("owl-loaded", "loaded").removeClass("loading"),
                t.removeAttr("data-src"),
                "fade" === r.options.lazyEffect ? t.fadeIn(400) : t.show(),
                "function" == typeof r.options.afterLazyLoad && r.options.afterLazyLoad.apply(this, [r.$elem])
            }
            function i() {
                a += 1,
                r.completeImg(t.get(0)) || !0 === o ? n() : a <= 100 ? u.setTimeout(i, 100) : n()
            }
            var o, r = this, a = 0;
            "DIV" === t.prop("tagName") ? (t.css("background-image", "url(" + t.data("src") + ")"),
            o = !0) : t[0].src = t.data("src"),
            i()
        },
        autoHeight: function() {
            function e() {
                var e = l(i.$owlItems[i.currentItem]).height();
                i.wrapperOuter.css("height", e + "px"),
                i.wrapperOuter.hasClass("autoHeight") || u.setTimeout(function() {
                    i.wrapperOuter.addClass("autoHeight")
                }, 0)
            }
            function t() {
                n += 1,
                i.completeImg(o.get(0)) ? e() : n <= 100 ? u.setTimeout(t, 100) : i.wrapperOuter.css("height", "")
            }
            var n, i = this, o = l(i.$owlItems[i.currentItem]).find("img");
            o.get(0) !== undefined ? (n = 0,
            t()) : e()
        },
        completeImg: function(e) {
            return !!e.complete && ("undefined" === typeof e.naturalWidth || 0 !== e.naturalWidth)
        },
        onVisibleItems: function() {
            var e, t = this;
            for (!0 === t.options.addClassActive && t.$owlItems.removeClass("active"),
            t.visibleItems = [],
            e = t.currentItem; e < t.currentItem + t.options.items; e += 1)
                t.visibleItems.push(e),
                !0 === t.options.addClassActive && l(t.$owlItems[e]).addClass("active");
            t.owl.visibleItems = t.visibleItems
        },
        transitionTypes: function(e) {
            var t = this;
            t.outClass = "owl-" + e + "-out",
            t.inClass = "owl-" + e + "-in"
        },
        singleItemTransition: function() {
            function e(e) {
                return {
                    position: "relative",
                    left: e + "px"
                }
            }
            var t = this
              , n = t.outClass
              , i = t.inClass
              , o = t.$owlItems.eq(t.currentItem)
              , r = t.$owlItems.eq(t.prevItem)
              , a = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem]
              , s = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2
              , l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
            t.isTransition = !0,
            t.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": s + "px",
                "-moz-perspective-origin": s + "px",
                "perspective-origin": s + "px"
            }),
            r.css(e(a, 10)).addClass(n).on(l, function() {
                t.endPrev = !0,
                r.off(l),
                t.clearTransStyle(r, n)
            }),
            o.addClass(i).on(l, function() {
                t.endCurrent = !0,
                o.off(l),
                t.clearTransStyle(o, i)
            })
        },
        clearTransStyle: function(e, t) {
            var n = this;
            e.css({
                position: "",
                left: ""
            }).removeClass(t),
            n.endPrev && n.endCurrent && (n.$owlWrapper.removeClass("owl-origin"),
            n.endPrev = !1,
            n.endCurrent = !1,
            n.isTransition = !1)
        },
        owlStatus: function() {
            var e = this;
            e.owl = {
                userOptions: e.userOptions,
                baseElement: e.$elem,
                userItems: e.$userItems,
                owlItems: e.$owlItems,
                currentItem: e.currentItem,
                prevItem: e.prevItem,
                visibleItems: e.visibleItems,
                isTouch: e.browser.isTouch,
                browser: e.browser,
                dragDirection: e.dragDirection
            }
        },
        clearEvents: function() {
            var e = this;
            e.$elem.off(".owl owl mousedown.disableTextSelect"),
            l(c).off(".owl owl"),
            l(u).off("resize", e.resizer)
        },
        unWrap: function() {
            var e = this;
            0 !== e.$elem.children().length && (e.$owlWrapper.unwrap(),
            e.$userItems.unwrap().unwrap(),
            e.owlControls && e.owlControls.remove()),
            e.clearEvents(),
            e.$elem.attr("style", e.$elem.data("owl-originalStyles") || "").attr("class", e.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            var e = this;
            e.stop(),
            u.clearInterval(e.checkVisible),
            e.unWrap(),
            e.$elem.removeData()
        },
        reinit: function(e) {
            var t = this
              , n = l.extend({}, t.userOptions, e);
            t.unWrap(),
            t.init(n, t.$elem)
        },
        addItem: function(e, t) {
            var n, i = this;
            return !!e && (0 === i.$elem.children().length ? (i.$elem.append(e),
            i.setVars(),
            !1) : (i.unWrap(),
            (n = t === undefined || -1 === t ? -1 : t) >= i.$userItems.length || -1 === n ? i.$userItems.eq(-1).after(e) : i.$userItems.eq(n).before(e),
            void i.setVars()))
        },
        removeItem: function(e) {
            var t, n = this;
            if (0 === n.$elem.children().length)
                return !1;
            t = e === undefined || -1 === e ? -1 : e,
            n.unWrap(),
            n.$userItems.eq(t).remove(),
            n.setVars()
        }
    };
    l.fn.owlCarousel = function(t) {
        return this.each(function() {
            if (!0 === l(this).data("owl-init"))
                return !1;
            l(this).data("owl-init", !0);
            var e = Object.create(n);
            e.init(t, this),
            l.data(this, "owlCarousel", e)
        })
    }
    ,
    l.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: u,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
}(jQuery, window, document),
function(o, r, i, a) {
    function s(e, t) {
        var n = this;
        "object" == typeof t && (delete t.refresh,
        delete t.render,
        o.extend(this, t)),
        this.$element = o(e),
        !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
        var i = (this.position + "").toLowerCase().match(/\S+/g) || [];
        return i.length < 1 && i.push("center"),
        1 == i.length && i.push(i[0]),
        ("top" == i[0] || "bottom" == i[0] || "left" == i[1] || "right" == i[1]) && (i = [i[1], i[0]]),
        this.positionX != a && (i[0] = this.positionX.toLowerCase()),
        this.positionY != a && (i[1] = this.positionY.toLowerCase()),
        n.positionX = i[0],
        n.positionY = i[1],
        "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)),
        "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)),
        this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"),
        navigator.userAgent.match(/(iPod|iPhone|iPad)/) ? (this.iosFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
        }),
        this) : navigator.userAgent.match(/(Android)/) ? (this.androidFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
        }),
        this) : (this.$mirror = o("<div />").prependTo("body"),
        this.$slider = o("<img />").prependTo(this.$mirror),
        this.$mirror.addClass("parallax-mirror").css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden"
        }),
        this.$slider.addClass("parallax-slider").one("load", function() {
            n.naturalHeight && n.naturalWidth || (n.naturalHeight = this.naturalHeight || this.height || 1,
            n.naturalWidth = this.naturalWidth || this.width || 1),
            n.aspectRatio = n.naturalWidth / n.naturalHeight,
            s.isSetup || s.setup(),
            s.sliders.push(n),
            s.isFresh = !1,
            s.requestRender()
        }),
        this.$slider[0].src = this.imageSrc,
        void ((this.naturalHeight && this.naturalWidth || this.$slider[0].complete) && this.$slider.trigger("load")))
    }
    function e(n) {
        return this.each(function() {
            var e = o(this)
              , t = "object" == typeof n && n;
            this == r || this == i || e.is("body") ? s.configure(t) : e.data("px.parallax") || (t = o.extend({}, e.data(), t),
            e.data("px.parallax", new s(this,t))),
            "string" == typeof n && s[n]()
        })
    }
    !function() {
        for (var o = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !r.requestAnimationFrame; ++t)
            r.requestAnimationFrame = r[e[t] + "RequestAnimationFrame"],
            r.cancelAnimationFrame = r[e[t] + "CancelAnimationFrame"] || r[e[t] + "CancelRequestAnimationFrame"];
        r.requestAnimationFrame || (r.requestAnimationFrame = function(e) {
            var t = (new Date).getTime()
              , n = Math.max(0, 16 - (t - o))
              , i = r.setTimeout(function() {
                e(t + n)
            }, n);
            return o = t + n,
            i
        }
        ),
        r.cancelAnimationFrame || (r.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        }
        )
    }(),
    o.extend(s.prototype, {
        speed: .1,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        refresh: function() {
            this.boxWidth = this.$element.outerWidth(),
            this.boxHeight = this.$element.outerHeight() + 2 * this.bleed,
            this.boxOffsetTop = this.$element.offset().top - this.bleed,
            this.boxOffsetLeft = this.$element.offset().left,
            this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var e = s.winHeight
              , t = s.docHeight
              , n = Math.min(this.boxOffsetTop, t - e)
              , i = Math.max(this.boxOffsetTop + this.boxHeight - e, 0)
              , o = this.boxHeight + (n - i) * (1 - this.speed) | 0
              , r = (this.boxOffsetTop - n) * (1 - this.speed) | 0;
            if (o * this.aspectRatio >= this.boxWidth) {
                this.imageWidth = o * this.aspectRatio | 0,
                this.imageHeight = o,
                this.offsetBaseTop = r;
                var a = this.imageWidth - this.boxWidth;
                this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -a : isNaN(this.positionX) ? -a / 2 | 0 : Math.max(this.positionX, -a)
            } else {
                this.imageWidth = this.boxWidth,
                this.imageHeight = this.boxWidth / this.aspectRatio | 0,
                this.offsetLeft = 0;
                a = this.imageHeight - o;
                this.offsetBaseTop = "top" == this.positionY ? r : "bottom" == this.positionY ? r - a : isNaN(this.positionY) ? r - a / 2 | 0 : r + Math.max(this.positionY, -a)
            }
        },
        render: function() {
            var e = s.scrollTop
              , t = s.scrollLeft
              , n = this.overScrollFix ? s.overScroll : 0
              , i = e + s.winHeight;
            this.visibility = this.boxOffsetBottom > e && this.boxOffsetTop < i ? "visible" : "hidden",
            this.mirrorTop = this.boxOffsetTop - e,
            this.mirrorLeft = this.boxOffsetLeft - t,
            this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed),
            this.$mirror.css({
                transform: "translate3d(0px, 0px, 0px)",
                visibility: this.visibility,
                top: this.mirrorTop - n,
                left: this.mirrorLeft,
                height: this.boxHeight,
                width: this.boxWidth
            }),
            this.$slider.css({
                transform: "translate3d(0px, 0px, 0px)",
                position: "absolute",
                top: this.offsetTop,
                left: this.offsetLeft,
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: "none"
            })
        }
    }),
    o.extend(s, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function() {
            if (!this.isReady) {
                var e = o(i)
                  , n = o(r);
                n.on("scroll.px.parallax load.px.parallax", function() {
                    var e = s.docHeight - s.winHeight
                      , t = s.docWidth - s.winWidth;
                    s.scrollTop = Math.max(0, Math.min(e, n.scrollTop())),
                    s.scrollLeft = Math.max(0, Math.min(t, n.scrollLeft())),
                    s.overScroll = Math.max(n.scrollTop() - e, Math.min(n.scrollTop(), 0)),
                    s.requestRender()
                }).on("resize.px.parallax load.px.parallax", function() {
                    s.winHeight = n.height(),
                    s.winWidth = n.width(),
                    s.docHeight = e.height(),
                    s.docWidth = e.width(),
                    s.isFresh = !1,
                    s.requestRender()
                }),
                this.isReady = !0
            }
        },
        configure: function(e) {
            "object" == typeof e && (delete e.refresh,
            delete e.render,
            o.extend(this.prototype, e))
        },
        refresh: function() {
            o.each(this.sliders, function() {
                this.refresh()
            }),
            this.isFresh = !0
        },
        render: function() {
            this.isFresh || this.refresh(),
            o.each(this.sliders, function() {
                this.render()
            })
        },
        requestRender: function() {
            var e = this;
            this.isBusy || (this.isBusy = !0,
            r.requestAnimationFrame(function() {
                e.render(),
                e.isBusy = !1
            }))
        }
    });
    var t = o.fn.parallax;
    o.fn.parallax = e,
    o.fn.parallax.Constructor = s,
    o.fn.parallax.noConflict = function() {
        return o.fn.parallax = t,
        this
    }
    ,
    o(i).on("ready.px.parallax.data-api", function() {
        o('[data-parallax="scroll"]').parallax()
    })
}(jQuery, window, document),
function(e) {
    "use strict";
    var t, n, i, o, r, a;
    e.matchMedia = e.matchMedia || (t = e.document,
    i = t.documentElement,
    o = i.firstElementChild || i.firstChild,
    r = t.createElement("body"),
    (a = t.createElement("div")).id = "mq-test-1",
    a.style.cssText = "position:absolute;top:-100em",
    r.style.background = "none",
    r.appendChild(a),
    function(e) {
        return a.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>',
        i.insertBefore(r, o),
        n = 42 === a.offsetWidth,
        i.removeChild(r),
        {
            matches: n,
            media: e
        }
    }
    )
}(this),
function(v) {
    "use strict";
    function e() {
        Y(!0)
    }
    var f = {};
    (v.respond = f).update = function() {}
    ;
    var r = []
      , i = function() {
        var e = !1;
        try {
            e = new v.XMLHttpRequest
        } catch (f) {
            e = new v.ActiveXObject("Microsoft.XMLHTTP")
        }
        return function() {
            return e
        }
    }()
      , n = function(e, t) {
        var n = i();
        n && (n.open("GET", e, !0),
        n.onreadystatechange = function() {
            4 !== n.readyState || 200 !== n.status && 304 !== n.status || t(n.responseText)
        }
        ,
        4 !== n.readyState && n.send(null))
    };
    if (f.ajax = n,
    f.queue = r,
    f.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
        maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/
    },
    f.mediaQueriesSupported = v.matchMedia && null !== v.matchMedia("only all") && v.matchMedia("only all").matches,
    !f.mediaQueriesSupported) {
        var b, w, T, x = v.document, C = x.documentElement, P = [], S = [], I = [], a = {}, j = 30, k = x.getElementsByTagName("head")[0] || C, s = x.getElementsByTagName("base")[0], E = k.getElementsByTagName("link"), $ = function() {
            var e, t = x.createElement("div"), n = x.body, i = C.style.fontSize, o = n && n.style.fontSize, r = !1;
            return t.style.cssText = "position:absolute;font-size:1em;width:1em",
            n || ((n = r = x.createElement("body")).style.background = "none"),
            C.style.fontSize = "100%",
            n.style.fontSize = "100%",
            n.appendChild(t),
            r && C.insertBefore(n, C.firstChild),
            e = t.offsetWidth,
            r ? C.removeChild(n) : n.removeChild(t),
            C.style.fontSize = i,
            o && (n.style.fontSize = o),
            T = parseFloat(e)
        }, Y = function(e) {
            var t = "clientWidth"
              , n = C[t]
              , i = "CSS1Compat" === x.compatMode && n || x.body[t] || n
              , o = {}
              , r = E[E.length - 1]
              , a = (new Date).getTime();
            if (e && b && a - b < j)
                return v.clearTimeout(w),
                void (w = v.setTimeout(Y, j));
            for (var s in b = a,
            P)
                if (P.hasOwnProperty(s)) {
                    var l = P[s]
                      , u = l.minw
                      , c = l.maxw
                      , p = null === u
                      , d = null === c
                      , f = "em";
                    u && (u = parseFloat(u) * (-1 < u.indexOf(f) ? T || $() : 1)),
                    c && (c = parseFloat(c) * (-1 < c.indexOf(f) ? T || $() : 1)),
                    l.hasquery && (p && d || !(p || u <= i) || !(d || i <= c)) || (o[l.media] || (o[l.media] = []),
                    o[l.media].push(S[l.rules]))
                }
            for (var h in I)
                I.hasOwnProperty(h) && I[h] && I[h].parentNode === k && k.removeChild(I[h]);
            for (var m in I.length = 0,
            o)
                if (o.hasOwnProperty(m)) {
                    var y = x.createElement("style")
                      , g = o[m].join("\n");
                    y.type = "text/css",
                    y.media = m,
                    k.insertBefore(y, r.nextSibling),
                    y.styleSheet ? y.styleSheet.cssText = g : y.appendChild(x.createTextNode(g)),
                    I.push(y)
                }
        }, l = function(e, t, n) {
            var i = e.replace(f.regex.keyframes, "").match(f.regex.media)
              , o = i && i.length || 0
              , r = function(e) {
                return e.replace(f.regex.urls, "$1" + t + "$2$3")
            }
              , a = !o && n;
            (t = t.substring(0, t.lastIndexOf("/"))).length && (t += "/"),
            a && (o = 1);
            for (var s = 0; s < o; s++) {
                var l, u, c, p;
                a ? (l = n,
                S.push(r(e))) : (l = i[s].match(f.regex.findStyles) && RegExp.$1,
                S.push(RegExp.$2 && r(RegExp.$2))),
                p = (c = l.split(",")).length;
                for (var d = 0; d < p; d++)
                    u = c[d],
                    P.push({
                        media: u.split("(")[0].match(f.regex.only) && RegExp.$2 || "all",
                        rules: S.length - 1,
                        hasquery: -1 < u.indexOf("("),
                        minw: u.match(f.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: u.match(f.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    })
            }
            Y()
        }, u = function() {
            if (r.length) {
                var t = r.shift();
                n(t.href, function(e) {
                    l(e, t.href, t.media),
                    a[t.href] = !0,
                    v.setTimeout(function() {
                        u()
                    }, 0)
                })
            }
        }, t = function() {
            for (var e = 0; e < E.length; e++) {
                var t = E[e]
                  , n = t.href
                  , i = t.media
                  , o = t.rel && "stylesheet" === t.rel.toLowerCase();
                n && o && !a[n] && (t.styleSheet && t.styleSheet.rawCssText ? (l(t.styleSheet.rawCssText, n, i),
                a[n] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(n) && !s || n.replace(RegExp.$1, "").split("/")[0] === v.location.host) && ("//" === n.substring(0, 2) && (n = v.location.protocol + n),
                r.push({
                    href: n,
                    media: i
                })))
            }
            u()
        };
        t(),
        f.update = t,
        f.getEmValue = $,
        v.addEventListener ? v.addEventListener("resize", e, !1) : v.attachEvent && v.attachEvent("onresize", e)
    }
}(this),
$(".bg-container-youtube").is(":visible") && (1200 <= $(window).width() ? $(".player").mb_YTPlayer() : $(".bg-container-youtube").backstretch(["img/slideshow/sample.jpg", "img/slideshow/sample2.jpg"], {
    duration: 6e3,
    fade: "normal"
})),
$("#play-video").on("click", function(e) {
    $("#video")[0].src += "&autoplay=1",
    e.preventDefault()
});
