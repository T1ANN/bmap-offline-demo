window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20211009"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20211009"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20211009"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20211009"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20211009"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20211009"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20211009"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20211009"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20211009"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20211009"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20211009"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "";
(function () {
    function ba(a) {
        throw a;
    }

    var l = void 0,
        p = !0,
        q = null,
        t = !1;

    function u() {
        return function () {
        }
    }

    function ca(a) {
        return function (b) {
            this[a] = b
        }
    }

    function x(a) {
        return function () {
            return this[a]
        }
    }

    function ea(a) {
        return function () {
            return a
        }
    }

    var fa, ga = [];

    function ha(a) {
        return function () {
            return ga[a].apply(this, arguments)
        }
    }

    function ia(a, b) {
        return ga[a] = b
    }

    var ja, A = ja = A || {
        version: "1.3.4"
    };
    A.da = "$BAIDU$";
    window[A.da] = window[A.da] || {};
    A.object = A.object || {};
    A.extend = A.object.extend = function (a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    A.U = A.U || {};
    A.U.fa = function (a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (
            1 == a.nodeType || 9 == a.nodeType) ? a : q
    };
    A.fa = A.Ic = A.U.fa;
    A.U.aa = function (a) {
        a = A.U.fa(a);
        if (a === q) return a;
        a.style.display = "none";
        return a
    };
    A.aa = A.U.aa;
    A.lang = A.lang || {};
    A.lang.Eg = function (a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    A.Eg = A.lang.Eg;
    A.lang.kE = function (a) {
        if ("[object Object]" === Object.prototype.toString.call(a)) {
            for (var b in a) return t;
            return p
        }
        return t
    };
    A.kE = A.lang.kE;
    A.U.Zj = function (a) {
        return A.lang.Eg(a) ? document.getElementById(a) : a
    };
    A.Zj = A.U.Zj;
    A.U.getElementsByClassName = function (a, b) {
        var c;
        if (a.getElementsByClassName) c = a.getElementsByClassName(b);
        else {
            var e = a;
            e == q && (e = document);
            c = [];
            var e = e.getElementsByTagName("*"),
                f = e.length,
                g = RegExp("(^|\\s)" + b + "(\\s|$)"),
                i, k;
            for (k = i = 0; i < f; i++) g.test(e[i].className) && (c[k] = e[i], k++)
        }
        return c
    };
    A.getElementsByClassName = A.U.getElementsByClassName;
    A.U.contains = function (a, b) {
        var c = A.U.Zj,
            a = c(a),
            b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    };
    A.ga = A.ga || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (A.ga.oa = A.oa = document.documentMode || +RegExp.$1);
    var ka = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > A.ga.oa ? (ka["for"] = "htmlFor", ka["class"] = "className") : (ka.htmlFor = "for", ka.className = "class");
    A.U.IG = ka;
    A.U.iF = function (a, b, c) {
        a = A.U.fa(a);
        if (a === q) return a;
        if ("style" == b) a.style.cssText = c;
        else {
            b = A.U.IG[b] || b;
            a.setAttribute(b, c)
        }
        return a
    };
    A.iF = A.U.iF;
    A.U.jF = function (a, b) {
        a = A.U.fa(a);
        if (a === q) return a;
        for (var c in b) A.U.iF(a, c, b[c]);
        return a
    };
    A.jF = A.U.jF;
    A.cl = A.cl || {};
    (function () {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        A.cl.trim = function (b) {
            return ("" + b).replace(a, "")
        }
    })();
    A.trim = A.cl.trim;
    A.cl.hp = function (a, b) {
        var a = "" + a,
            c = Array.prototype.slice.call(arguments, 1),
            e = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== q && /\[object Array\]|\[object Object\]/.test(e.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function (a, b) {
                var i = c[b];
                "[object Function]" == e.call(i) && (i = i(b));
                return "undefined" == typeof i ? "" : i
            })
        }
        return a
    };
    A.hp = A.cl.hp;
    A.U.rc = function (a, b) {
        a = A.U.fa(a);
        if (a === q) return a;
        for (var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0; k < g; ++k) {
            i = 0;
            for (f = c.length; i < f; ++i)
                if (c[i] == e[k]) {
                    c.splice(i, 1);
                    break
                }
        }
        a.className = c.join(" ");
        return a
    };
    A.rc = A.U.rc;
    A.U.Nx = function (a, b, c) {
        a = A.U.fa(a);
        if (a === q) return a;
        var e;
        if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
        else {
            e = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                e.selectNodeContents(a);
                e.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                e[b ? "setStartBefore" : "setEndAfter"](a);
                e.collapse(b)
            }
            e.insertNode(e.createContextualFragment(c))
        }
        return a
    };
    A.Nx = A.U.Nx;
    A.U.show = function (a) {
        a = A.U.fa(a);
        if (a === q) return a;
        a.style.display = "";
        return a
    };
    A.show = A.U.show;
    A.U.ED = function (a) {
        a = A.U.fa(a);
        return a === q ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
    };
    A.U.ib = function (a, b) {
        a = A.U.fa(a);
        if (a === q) return a;
        for (var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length; g < i; g++) f
            .indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
        a.className = e;
        return a
    };
    A.ib = A.U.ib;
    A.U.DB = A.U.DB || {};
    A.U.Wl = A.U.Wl || [];
    A.U.Wl.filter = function (a, b, c) {
        for (var e = 0, f = A.U.Wl, g; g = f[e]; e++)
            if (g = g[c]) b = g(a, b);
        return b
    };
    A.cl.xO = function (a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function (a) {
            return a.charAt(1).toUpperCase()
        })
    };
    A.U.s0 = function (a) {
        A.U.it(a, "expand") ? A.U.rc(a, "expand") : A.U.ib(a, "expand")
    };
    A.U.it = function (a) {
        if (arguments.length <= 0 || typeof a === "function") return this;
        if (this.size() <= 0) return t;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
            b = a.split(" "),
            c;
        A.forEach(this, function (a) {
            for (var a = a.className, f = 0; f < b.length; f++)
                if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) {
                    c = t;
                    return
                }
            c !== t && (c = p)
        });
        return c
    };
    A.U.Dg = function (a, b) {
        var c = A.U,
            a = c.fa(a);
        if (a === q) return a;
        var b = A.cl.xO(b),
            e = a.style[b];
        if (!e) var f = c.DB[b],
            e = a.currentStyle || (A.ga.oa ? a.style : getComputedStyle(a, q)),
            e = f && f.get ? f.get(a, e) : e[f || b];
        if (f = c.Wl) e = f.filter(b, e, "get");
        return e
    };
    A.Dg = A.U.Dg;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (A.ga.opera = +RegExp.$1);
    A.ga.pM = /webkit/i.test(navigator.userAgent);
    A.ga.LY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    A.ga.rE = "CSS1Compat" == document.compatMode;
    A.U.ma = function (a) {
        a = A.U.fa(a);
        if (a === q) return a;
        var b = A.U.ED(a),
            c = A.ga,
            e = A.U.Dg;
        c.LY > 0 && b.getBoxObjectFor && e(a, "position");
        var f = {
                left: 0,
                top: 0
            },
            g;
        if (a == (c.oa && !c.rE ? b.body : b.documentElement)) return f;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            f.left = f.left - b.documentElement.clientLeft;
            f.top = f.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(e(a, "borderLeftWidth"));
            e = parseInt(e(a, "borderTopWidth"));
            if (c.oa && !c.rE) {
                f.left = f.left - (isNaN(b) ? 2 : b);
                f.top = f.top - (isNaN(e) ? 2 : e)
            }
        } else {
            g = a;
            do {
                f.left = f.left + g.offsetLeft;
                f.top = f.top + g.offsetTop;
                if (c.pM > 0 && e(g, "position") == "fixed") {
                    f.left = f.left + b.body.scrollLeft;
                    f.top = f.top + b.body.scrollTop;
                    break
                }
                g = g.offsetParent
            } while (g && g != a);
            if (c.opera > 0 || c.pM > 0 && e(a, "position") == "absolute") f.top = f.top - b.body.offsetTop;
            for (g = a.offsetParent; g && g != b.body;) {
                f.left = f.left - g.scrollLeft;
                if (!c.opera || g.tagName != "TR") f.top = f.top - g.scrollTop;
                g = g.offsetParent
            }
        }
        return f
    };
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (A.ga.Xe = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (A.ga.B2 = p);
    var la = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (A.ga.xy = +(RegExp.$1 ||
        RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (A.ga.Lw = +RegExp.$1);
    A.oc = A.oc || {};
    A.oc.Pb = function (a, b) {
        var c, e, f = a.length;
        if ("function" == typeof b)
            for (e = 0; e < f; e++) {
                c = a[e];
                c = b.call(a, c, e);
                if (c === t) break
            }
        return a
    };
    A.Pb = A.oc.Pb;
    A.lang.da = function () {
        return "TANGRAM__" + (window[A.da]._counter++).toString(36)
    };
    window[A.da]._counter = window[A.da]._counter || 1;
    window[A.da]._instances = window[A.da]._instances || {};
    A.lang.wt = function (a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    };
    A.lang.Ja = function (a) {
        this.da = a || A.lang.da();
        window[A.da]._instances[this.da] = this
    };
    window[A.da]._instances = window[A.da]._instances || {};
    A.lang.Ja.prototype.gi = ha(0);
    A.lang.Ja.prototype.toString = function () {
        return "[object " + (this.zQ || "Object") + "]"
    };
    A.lang.Iu = function (a, b) {
        this.type = a;
        this.returnValue = p;
        this.target = b || q;
        this.currentTarget = q
    };
    A.lang.Ja.prototype.addEventListener = function (a, b, c) {
        if (A.lang.wt(b)) {
            !b.nl && (b.nl = {});
            !this.Li && (this.Li = {});
            var e = this.Li,
                f;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && ba("nonstandard key:" + c);
                f = b.Dx = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof e[a] != "object" && (e[a] = {});
            typeof b.nl[a] != "object" && (b.nl[a] = {});
            f = f || A.lang.da();
            b.nl[a].Dx = f;
            e[a][f] = b
        }
    };
    A.lang.Ja.prototype.removeEventListener = function (a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (A.lang.wt(b)) {
            if (!b.nl || !b.nl[a]) return;
            b = b.nl[a].Dx
        } else if (!A.lang.Eg(b)) return;
        !this.Li && (this.Li = {});
        var c = this.Li;
        c[a] && c[a][b] && delete c[a][b]
    };
    A.lang.Ja.prototype.dispatchEvent = function (a, b) {
        A.lang.Eg(a) && (a = new A.lang.Iu(a));
        !this.Li && (this.Li = {});
        var b = b || {},
            c;
        for (c in b) a[c] = b[c];
        var e = this.Li,
            f = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        f.indexOf("on") != 0 && (f = "on" + f);
        A.lang.wt(this[f]) && this[f].apply(this, arguments);
        if (typeof e[f] == "object")
            for (c in e[f]) e[f][c].apply(this, arguments);
        return a.returnValue
    };
    A.lang.xa = function (a, b, c) {
        var e, f, g = a.prototype;
        f = new Function;
        f.prototype = b.prototype;
        f = a.prototype = new f;
        for (e in g) f[e] = g[e];
        a.prototype.constructor = a;
        a.f0 = b.prototype;
        if ("string" == typeof c) f.zQ = c
    };
    A.xa = A.lang.xa;
    A.lang.Tc = function (a) {
        return window[A.da]._instances[a] || q
    };
    A.platform = A.platform || {};
    A.platform.jM = /macintosh/i.test(navigator.userAgent);
    A.platform.M4 = /MicroMessenger/i.test(navigator.userAgent);
    A.platform.qM = /windows/i.test(navigator.userAgent);
    A.platform.UY = /x11/i.test(navigator.userAgent);
    A.platform.yj = /android/i.test(navigator.userAgent);
    /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (A.platform.$B = A.$B = RegExp.$1);
    A.platform.NY = /ipad/i.test(navigator.userAgent);
    A.platform.nE = /iphone/i.test(navigator.userAgent);

    function ma(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++) a.touches.push({
                clientX: b.touches[c].clientX,
                clientY: b.touches[c].clientY,
                screenX: b.touches[c].screenX,
                screenY: b.touches[c].screenY,
                pageX: b.touches[c].pageX,
                pageY: b.touches[c].pageY,
                target: b.touches[c].target,
                identifier: b.touches[c].identifier
            })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({
                clientX: b.changedTouches[c].clientX,
                clientY: b.changedTouches[c].clientY,
                screenX: b.changedTouches[c].screenX,
                screenY: b.changedTouches[c].screenY,
                pageX: b.changedTouches[c].pageX,
                pageY: b.changedTouches[c].pageY,
                target: b.changedTouches[c].target,
                identifier: b.changedTouches[c].identifier
            })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({
                clientX: b.targetTouches[c].clientX,
                clientY: b.targetTouches[c].clientY,
                screenX: b.targetTouches[c].screenX,
                screenY: b.targetTouches[c].screenY,
                pageX: b.targetTouches[c].pageX,
                pageY: b.targetTouches[c].pageY,
                target: b.targetTouches[c].target,
                identifier: b.targetTouches[c].identifier
            })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }

    A.lang.Yw = function (a) {
        var b = window[A.da];
        b.FS && delete b.FS[a]
    };
    A.event = {};
    A.V = A.event.V = function (a, b, c) {
        if (!(a = A.fa(a))) return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    };
    A.hd = A.event.hd = function (a, b, c) {
        if (!(a = A.fa(a))) return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    };
    A.U.it = function (a, b) {
        if (!a || !a.className || typeof a.className != "string") return t;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (e) {
            return t
        }
        return c > -1
    };
    A.VK = function () {
        function a(a) {
            document.addEventListener && (this.element = a, this.YK = this.Lk ? "touchstart" : "mousedown", this
                .lD = this.Lk ? "touchmove" : "mousemove", this.kD = this.Lk ? "touchend" : "mouseup", this
                .yh = t, this.qu = this.pu = 0, this.element.addEventListener(this.YK, this, t), ja.V(this
                .element, "mousedown", u()), this.handleEvent(q))
        }

        a.prototype = {
            Lk: "ontouchstart" in window || "createTouch" in document,
            start: function (a) {
                na(a);
                this.yh = t;
                this.pu = this.Lk ? a.touches[0].clientX : a.clientX;
                this.qu = this.Lk ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.lD, this, t);
                this.element.addEventListener(this.kD, this, t)
            },
            move: function (a) {
                oa(a);
                var c = this.Lk ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.Lk ? a.touches[0].clientX : a.clientX) - this.pu) || 10 < Math
                    .abs(c - this.qu)) this.yh = p
            },
            end: function (a) {
                oa(a);
                this.yh || (a = document.createEvent("Event"), a.initEvent("tap", t, p), this.element
                    .dispatchEvent(a));
                this.element.removeEventListener(this.lD, this, t);
                this.element.removeEventListener(this.kD, this, t)
            },
            handleEvent: function (a) {
                if (a) switch (a.type) {
                    case this.YK:
                        this.start(a);
                        break;
                    case this.lD:
                        this.move(a);
                        break;
                    case this.kD:
                        this.end(a)
                }
            }
        };
        return function (b) {
            return new a(b)
        }
    }();
    var D = window.BMap || {};
    D.version = "3.0";
    D.s2 = 0.34 > Math.random();
    0 <= D.version.indexOf("#") && (D.version = "3.1");
    D.Gr = [];
    D.df = function (a) {
        this.Gr.push(a)
    };
    D.xr = [];
    D.Rk = function (a) {
        this.xr.push(a)
    };
    D.PU = D.apiLoad || u();
    D.Ty = D.verify || function (a) {
        if (D.version && D.version >= 1.5) {
            var b = D.ud + "?qt=verify&ak=" + pa;
            a && (b = b + "&fromPanorama=" + a);
            qa(b, function (a) {
                if (a && a.error !== 0) {
                    if (typeof map !== "undefined") {
                        map.Ta().innerHTML = "";
                        map.Li = {}
                    }
                    D = q;
                    var b =
                        "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                    switch (a.error) {
                        case 101:
                            b =
                                "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                            break;
                        case 102:
                            b = "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
                    }
                    alert(b)
                }
            })
        }
        window.__abbaidu_2063_cidcb = function (a) {
            var b = new Date;
            b.setTime(b.getTime() + 2592E6);
            document.cookie = "SECKEY_CID=" + a
        };
        window.__abbaidu_2063_cb = function (a) {
            var a = JSON.parse(a),
                b = new Date;
            b.setTime(b.getTime() + 2592E6);
            document.cookie = "BMAP_SECKEY=" + a.data
        };
        var c = H("script", {
            type: "text/javascript",
            async: ""
        });
        c.charset = "utf-8";
        c.src = "https://dlswbr.baidu.com/heicha/mw/abclite-2063-s.js";
        c.addEventListener ? c.addEventListener("load", function (a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, t) : c.attachEvent && c.attachEvent("onreadystatechange", function () {
            var a = window.event.srcElement;
            a && (a.readyState == "loaded" || a.readyState == "complete") && a.parentNode.removeChild(a)
        });
        setTimeout(function () {
            document.getElementsByTagName("head")[0].appendChild(c);
            c = q
        }, 1)
    };
    var pa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = q;
    var ra = window.BMap_loadScriptTime,
        ua = (new Date).getTime(),
        va = q,
        wa = p,
        xa = 5042,
        ya = 5002,
        za = 5003,
        Ba = "load_mapclick",
        Ca = 5038,
        Da = 5041,
        Ea = 5047,
        Fa = 5036,
        Ha = 5039,
        Ia = 5037,
        Ja = 5040,
        Ka = 5011,
        La = 7E3;
    var Ma = 0;

    function Na(a, b) {
        if (a = A.fa(a)) {
            var c = this;
            A.lang.Ja.call(c);
            b = b || {};
            c.M = {
                mC: 200,
                jc: p,
                dx: t,
                aD: p,
                dp: p,
                fp: b.enableWheelZoom || t,
                TK: p,
                cD: p,
                ep: p,
                Ns: p,
                hD: p,
                bp: b.enable3DBuilding || t,
                Nc: 25,
                j1: 240,
                CU: 450,
                Ac: I.Ac,
                Kd: I.Kd,
                xt: !!b.xt,
                kc: Math.round(b.minZoom) || 1,
                qc: Math.round(b.maxZoom) || 19,
                Ua: b.mapType || Oa,
                M5: t,
                QK: b.drawer || Ma,
                bx: p,
                ax: 500,
                JW: b.enableHighResolution !== t,
                um: b.enableMapClick !== t,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                UF: 99,
                De: b.mapStyle || q,
                aZ: b.logoControl === t ? t : p,
                WU: [],
                E2: b.beforeClickIcon || q,
                yg: t,
                yk: t,
                Wo: t,
                ME: p,
                XC: b.enableBizAuthLogo === t ? t : p,
                Ma: b.coordsType || 5,
                r6: b.touchZoomCenter || 0,
                eD: b.enablePinchDragging === t ? t : p
            };
            c.M.De && (this.yY(c.M.De.controls), this.fM(c.M.De.geotableId));
            c.M.De && c.M.De.styleId && c.f4(c.M.De.styleId);
            c.M.pC = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.M.Ns = b.enableAutoResize);
            b.enableStreetEntrance === t && (c.M.hD = b.enableStreetEntrance);
            b.enableDeepZoom === t && (c.M.TK = b.enableDeepZoom);
            var e = c.M.WU;
            if (J())
                for (var f = 0, g = e.length; f < g; f++)
                    if (A.ga[e[f]]) {
                        c.M.devicePixelRatio = 1;
                        break
                    }
            e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || e && f) c.M.UF = 99;
            c.cb = a;
            c.xB(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.Ba());
            b.size && this.He(b.size);
            e = c.Cb();
            c.width = e.width;
            c.height = e.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.Ee = c.platform.firstChild;
            c.Ee.style.width = c.width + "px";
            c.Ee.style.height = c.height + "px";
            c.ce = {};
            c.he = new L(0, 0);
            c.Vb = new L(0, 0);
            c.Za = 3;
            c.Bc = 0;
            c.AC = q;
            c.zC = q;
            c.Ob = "";
            c.Mw = "";
            c.Oh = {};
            c.Oh.custom = {};
            c.Ni = {};
            c.$a = 0;
            b.useWebGL === t && Pa(t);
            c.W = new Qa(a, {
                Ye: "api",
                JS: p
            });
            c.W.aa();
            c.W.pF(c);
            b = b || {};
            e = c.Ua = c.M.Ua;
            c.Fc = e.uj();
            e && e.sF(c.M.Ma);
            e === Ra && Sa(ya);
            e === Ta && Sa(za);
            e = c.M;
            e.QO = Math.round(b.minZoom);
            e.PO = Math.round(b.maxZoom);
            c.av();
            c.ba = {
                Oc: t,
                pc: 0,
                Ct: 0,
                vM: 0,
                Q4: 0,
                eC: t,
                XE: -1,
                xe: []
            };
            c.platform.style.cursor = c.M.Ac;
            for (f = 0; f < D.Gr.length; f++) D.Gr[f](c);
            c.ba.XE = f;
            c.ha();
            Ua.load("map", function () {
                c.ob()
            });
            c.M.um && (setTimeout(function () {
                Sa(Ba)
            }, 1E3), Ua.load("mapclick", function () {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[c.da] = new Wa(c)
            }, p));
            Xa() && Ua.load("oppc", function () {
                c.Qu()
            });
            J() && Ua.load("opmb", function () {
                c.Qu()
            });
            a = q;
            c.LB = []
        }
    }

    A.lang.xa(Na, A.lang.Ja, "Map");
    A.extend(Na.prototype, {
        Ba: function () {
            var a = H("div"),
                b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = H("div", {
                    "class": "BMap_mask"
                }),
                c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        xB: function (a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== Ya(a).position && (b.position = "relative", b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ha: function () {
            var a = this;
            a.Do = function () {
                var b = a.Cb();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new N(a.width, a.height),
                        e = new P("onbeforeresize");
                    e.size = c;
                    a.dispatchEvent(e);
                    a.qk((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.Ee.style.width = (a.width = b.width) + "px";
                    a.Ee.style.height = (a.height = b.height) + "px";
                    c = new P("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            };
            a.M.Ns && (a.ba.hm = setInterval(a.Do, 80))
        },
        qk: function (a, b, c, e) {
            var f = this.ya().$b(this.la()),
                g = this.Fc,
                i = p;
            if (c && (c instanceof Q || c instanceof L)) c = Za(c, this.M.Ma);
            c && Q.mE(c) && (this.he = new L(c.lng, c.lat), i = t);
            if (c = c && e ? g.ri(c, this.Ob) : this.Vb)
                if (this.Vb = new L(c.lng + a * f, c.lat - b * f), (a = g.xh(this.Vb, this.Ob)) && i)
                    this.he = a
        },
        Rg: function (a, b) {
            if ($a(a) && (this.av(), this.dispatchEvent(new P("onzoomstart")), a = this.$n(a).zoom,
            a !== this.Za)) {
                this.Bc = this.Za;
                this.Za = a;
                var c;
                b ? c = b : this.qh() && (c = this.qh().ma());
                c && (c = this.oo(Za(c, this.M.Ma), this.Bc), this.qk(this.width / 2 - c.x, this
                    .height / 2 - c.y, this.pg(c, this.Bc), p));
                this.dispatchEvent(new P("onzoomstartcode"))
            }
        },
        Xc: function (a) {
            this.Rg(a)
        },
        $F: function (a) {
            this.Rg(this.Za + 1, a)
        },
        aG: function (a) {
            this.Rg(this.Za - 1, a)
        },
        zi: function (a) {
            if (a instanceof Q || a instanceof L) a = Za(a, this.M.Ma), this.Vb = this.Fc.ri(a, this
                .Ob), this.he = Q.mE(a) ? new L(a.lng, a.lat) : this.Fc.xh(this.Vb, this.Ob)
        },
        Kg: function (a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.qk(-a, -b)
        },
        ds: function (a) {
            a && ab(a.Me) && (a.Me(this), this.dispatchEvent(new P("onaddcontrol", a)))
        },
        EN: function (a) {
            a && ab(a.remove) && (a.remove(), this.dispatchEvent(new P("onremovecontrol", a)))
        },
        bm: function (a) {
            a && ab(a.za) && (a.za(this), this.dispatchEvent(new P("onaddcontextmenu", a)))
        },
        Pp: function (a) {
            a && ab(a.remove) && (this.dispatchEvent(new P("onremovecontextmenu", a)), a.remove())
        },
        Ra: function (a) {
            a && ab(a.Me) && (a.Me(this), this.dispatchEvent(new P("onaddoverlay", a)))
        },
        Jb: function (a) {
            a && ab(a.remove) && (a.remove(), this.dispatchEvent(new P("onremoveoverlay", a)))
        },
        lK: function () {
            this.dispatchEvent(new P("onclearoverlays"))
        },
        Ue: function (a) {
            a && this.dispatchEvent(new P("onaddtilelayer", a))
        },
        cg: function (a) {
            a && this.dispatchEvent(new P("onremovetilelayer", a))
        },
        Og: function (a) {
            if (this.Ua !== a) {
                this.M.dZ && this.D_(a);
                var b = new P("onsetmaptype");
                b.D5 = this.Ua;
                this.Ua = this.M.Ua = a;
                this.Fc = this.Ua.uj();
                this.qk(0, 0, this.mv(), p);
                this.av();
                var c = this.$n(this.la()).zoom;
                this.Rg(c);
                this.dispatchEvent(b);
                b = new P("onmaptypechange");
                b.Za = c;
                b.Ua = a;
                this.dispatchEvent(b);
                a.sF(this.M.Ma);
                (a === bb || a === Ta) && Sa(za)
            }
        },
        D_: function (a) {
            a === bb || a === Ta ? (this.By(p), this.WN(t), this.M.yg = t, this.M.yk = t) : (this.By(t),
                this.WN(p), this.M.yg = p, this.M.yk = p)
        },
        zf: function (a) {
            var b = this;
            if (a instanceof Q || a instanceof L) b.zi(a, {
                noAnimation: p
            });
            else if (cb(a))
                if (b.Ua === Ra) {
                    var c = I.iC[a];
                    c && (pt = c.o, b.zf(pt))
                } else {
                    var e = this.JH();
                    e.eu(function (c) {
                        0 === e.Fm() && 2 === e.Ka.result.type && (c = c.Ik(0).point, c = new L(
                            c.lng, c.lat), c = db(c, b.M.Ma), b.zf(c), Ra.Ck(a) && b.lF(
                            a))
                    });
                    e.search(a, {
                        log: "center"
                    })
                }
        },
        vd: function (a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            D.Cq("cus.fire", "time", {
                z_loadscripttime: ua - ra
            });
            var c = this;
            if (cb(a))
                if (c.Ua === Ra) {
                    var e = I.iC[a];
                    e && (pt = e.o, c.vd(pt, b))
                } else {
                    var f = c.JH();
                    f.eu(function (e) {
                        if (0 === f.Fm() && (2 === f.Ka.result.type || 11 === f.Ka.result
                            .type)) {
                            var g = e.Ik(0).point,
                                e = b || eb.ix(f.Ka.content.level, c),
                                g = new L(g.lng, g.lat);
                            c.vd(g, e);
                            Ra.Ck(a) && c.lF(a)
                        }
                    });
                    f.search(a, {
                        log: "center"
                    })
                }
            else if ((a instanceof Q || a instanceof L) && b) {
                b = c.$n(b).zoom;
                c.Bc = c.Za || b;
                c.Za = b;
                e = c.he;
                a = Za(a, this.M.Ma);
                c.he = new L(a.lng, a.lat);
                c.Vb = c.Fc.ri(c.he, c.Ob);
                c.AC = c.AC || c.Za;
                c.zC = c.zC || c.he;
                var g = new P("onload"),
                    i = new P("onloadcode");
                g.point = new L(a.lng, a.lat);
                g.pixel = c.oo(c.he, c.Za);
                g.zoom = b;
                c.loaded || (c.loaded = p, c.dispatchEvent(g), va || (va = fb()));
                c.dispatchEvent(i);
                g = new P("onmoveend");
                g.Sz = "centerAndZoom";
                e.Ub(c.he) || c.dispatchEvent(g);
                c.dispatchEvent(new P("onmoveend"));
                c.Bc !== c.Za && (e = new P("onzoomend"), e.Sz = "centerAndZoom", c.dispatchEvent(e));
                c.M.bp && c.bp()
            }
        },
        JH: function () {
            this.ba.GM || (this.ba.GM = new gb(1));
            return this.ba.GM
        },
        reset: function () {
            this.vd(this.zC, this.AC, p)
        },
        enableDragging: function () {
            this.M.jc = p
        },
        disableDragging: function () {
            this.M.jc = t
        },
        enableInertialDragging: function () {
            this.M.bx = p
        },
        disableInertialDragging: function () {
            this.M.bx = t
        },
        enableScrollWheelZoom: function () {
            this.M.fp = p
        },
        disableScrollWheelZoom: function () {
            this.M.fp = t
        },
        enableContinuousZoom: function () {
            this.M.dp = p
        },
        disableContinuousZoom: function () {
            this.M.dp = t
        },
        enableDoubleClickZoom: function () {
            this.M.aD = p
        },
        disableDoubleClickZoom: function () {
            this.M.aD = t
        },
        enableKeyboard: function () {
            this.M.dx = p
        },
        disableKeyboard: function () {
            this.M.dx = t
        },
        enablePinchToZoom: function () {
            this.M.ep = p
        },
        disablePinchToZoom: function () {
            this.M.ep = t
        },
        enableAutoResize: function () {
            this.M.Ns = p;
            this.Do();
            this.ba.hm || (this.ba.hm = setInterval(this.Do, 80))
        },
        disableAutoResize: function () {
            this.M.Ns = t;
            this.ba.hm && (clearInterval(this.ba.hm), this.ba.hm = q)
        },
        enableBizAuthLogo: function () {
            this.M.XC = p;
            this.Lo && this.Lo.show()
        },
        disableBizAuthLogo: function () {
            this.M.XC = t;
            this.Lo && this.Lo.aa()
        },
        enableMapClick: function () {
            this.M.um = p;
            var a = this;
            window.MPC_Mgr && window.MPC_Mgr[a.da] ? window.MPC_Mgr[a.da].open() : (setTimeout(
                function () {
                    Sa(Ba)
                }, 1E3), Ua.load("mapclick", function () {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[a.da] = new Wa(a)
            }, p))
        },
        disableMapClick: function () {
            window.MPC_Mgr && window.MPC_Mgr[this.da] && window.MPC_Mgr[this.da].close();
            this.M.um = t
        },
        bp: function () {
            this.M.bp = p;
            this.Nn || (this.Nn = new BuildingLayer({
                n3: p
            }), this.Ue(this.Nn))
        },
        iW: function () {
            this.M.bp = t;
            this.Nn && (this.cg(this.Nn), this.Nn = q, delete this.Nn)
        },
        Cb: function () {
            return this.As && this.As instanceof N ? new N(this.As.width, this.As.height) : new N(this
                .cb.clientWidth, this.cb.clientHeight)
        },
        He: function (a) {
            a && a instanceof N ? (this.As = a, this.cb.style.width = a.width + "px", this.cb.style
                .height = a.height + "px") : this.As = q
        },
        Qb: function () {
            return db(this.he, this.M.Ma)
        },
        mv: x("he"),
        la: x("Za"),
        vV: function () {
            this.Do()
        },
        $n: function (a) {
            var b = this.M.kc,
                c = this.M.qc,
                e = t,
                a = Math.round(a);
            a < b && (e = p, a = b);
            a > c && (e = p, a = c);
            return {
                zoom: a,
                mD: e
            }
        },
        Ta: x("cb"),
        vc: function (a, b) {
            a = Za(a, this.M.Ma);
            b = b || this.la();
            return this.Fc.vc(a, b, this.Vb, this.Cb(), this.Ob)
        },
        oo: function (a, b) {
            b = b || this.la();
            return this.Fc.vc(a, b, this.Vb, this.Cb(), this.Ob)
        },
        pg: function (a, b) {
            b = b || this.la();
            return this.Fc.bc(a, b, this.Vb, this.Cb(), this.Ob)
        },
        bc: function (a, b) {
            return db(this.pg(a, b), this.M.Ma)
        },
        cf: function (a, b) {
            if (a) {
                var a = Za(a, this.M.Ma),
                    c = this.oo(new L(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        gZ: function (a, b) {
            b = b || this.la();
            return this.Fc.hZ(a, b, this.Vb, this.Cb(), this.Ob)
        },
        fZ: function (a, b) {
            if (a) {
                var c = this.gZ(new L(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        pN: function (a, b) {
            if (a) {
                var c = new R(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.bc(c, b)
            }
        },
        lT: function (a, b) {
            if (a) {
                var c = new R(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.pg(c, b)
            }
        },
        pointToPixelFor3D: function (a, b) {
            var c = map.Ob;
            this.Ua === Ra && c && hb.rK(a, this, b)
        },
        u5: function (a, b) {
            var c = map.Ob;
            this.Ua === Ra && c && hb.qK(a, this, b)
        },
        v5: function (a, b) {
            var c = this,
                e = map.Ob;
            c.Ua === Ra && e && hb.rK(a, c, function (a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        s5: function (a, b) {
            var c = map.Ob;
            this.Ua === Ra && c && (a.x += this.offsetX, a.y += this.offsetY, hb.qK(a, this, b))
        },
        le: function (a) {
            if (!this.Qx()) return new ib;
            var b = a || {},
                a = b.margins || [0, 0, 0, 0],
                c = b.zoom || q,
                b = this.bc({
                    x: a[3],
                    y: this.height - a[2]
                }, c),
                a = this.bc({
                    x: this.width - a[1],
                    y: a[0]
                }, c);
            return new ib(b, a)
        },
        Qx: function () {
            return !!this.loaded
        },
        OR: function (a, b) {
            for (var c = this.ya(), e = b.margins || [10, 10, 10, 10], f = b.zoomFactor || 0, g = e[1] +
                e[3], e = e[0] + e[2], i = c.rf(), k = c = c.Ze(); k >= i; k--) {
                var m = this.ya().$b(k);
                if (a.MF().lng / m < this.width - g && a.MF().lat / m < this.height - e) break
            }
            k += f;
            k < i && (k = i);
            k > c && (k = c);
            return k
        },
        ht: function (a, b) {
            var c = {
                center: this.Qb(),
                zoom: this.la()
            };
            if (!a || !a instanceof ib && 0 === a.length || a instanceof ib && a.Aj()) return c;
            var e = [];
            a instanceof ib ? (e.push(a.sf()), e.push(a.Ae())) : e = a.slice(0);
            for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++) {
                var k = Za(e[g], this.M.Ma);
                f.push(this.Fc.ri(k, this.Ob))
            }
            e = new ib;
            for (g = f.length - 1; 0 <= g; g--) e.extend(f[g]);
            if (e.Aj()) return c;
            c = e.Qb();
            f = this.OR(e, b);
            b.margins && (e = b.margins, g = (e[1] - e[3]) / 2, e = (e[0] - e[2]) / 2, i = this.ya().$b(
                f), b.offset && (g = b.offset.width, e = b.offset.height), c.lng += i * g, c
                .lat += i * e);
            c = this.Fc.xh(c, this.Ob);
            return {
                center: db(new L(c.lng, c.lat), this.M.Ma),
                zoom: f
            }
        },
        Pg: function (a, b) {
            var c;
            c = a && a.center ? a : this.ht(a, b);
            var b = b || {},
                e = b.delay || 200;
            if (c.zoom === this.Za && b.enableAnimation !== t) {
                var f = this;
                setTimeout(function () {
                    f.zi(c.center, {
                        duration: 210
                    })
                }, e)
            } else this.vd(c.center, c.zoom)
        },
        Wf: x("ce"),
        qh: function () {
            return this.ba.wb && this.ba.wb.eb() ? this.ba.wb : q
        },
        getDistance: function (a, b) {
            if (a && b) {
                if (a.Ub(b)) return 0;
                var c = this.M ? this.M.Ma : 5,
                    a = Za(a, c),
                    b = Za(b, c),
                    c = 0,
                    c = T.Ek(a, b);
                if (c === q || c === l) c = 0;
                return c
            }
        },
        vx: function () {
            var a = [],
                b = this.ta,
                c = this.Je;
            if (b)
                for (var e in b) b[e] instanceof jb && a.push(b[e]);
            if (c) {
                e = 0;
                for (b = c.length; e < b; e++) a.push(c[e])
            }
            return a
        },
        ya: function () {
            this.Ua.sF(this.M.Ma);
            return this.Ua
        },
        aY: x("Hd"),
        Qu: function () {
            for (var a = this.ba.XE; a < D.Gr.length; a++) D.Gr[a](this);
            this.ba.XE = a
        },
        lF: function (a) {
            this.Ob = Ra.Ck(a);
            this.Mw = Ra.nL(this.Ob);
            this.Ua === Ra && this.Fc instanceof kb && (this.Fc.lj = this.Ob)
        },
        setDefaultCursor: function (a) {
            this.M.Ac = a;
            this.platform && (this.platform.style.cursor = this.M.Ac)
        },
        getDefaultCursor: function () {
            return this.M.Ac
        },
        setDraggingCursor: function (a) {
            this.M.Kd = a
        },
        getDraggingCursor: function () {
            return this.M.Kd
        },
        Ix: function () {
            return this.M.JW && 1.5 <= this.M.devicePixelRatio
        },
        RB: function (a, b) {
            b ? this.Oh[b] || (this.Oh[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof lb && (this.Oh[b][a.da] = a, a.za(this));
            var c = this;
            Ua.load("hotspot", function () {
                c.Qu()
            }, p)
        },
        a_: function (a, b) {
            b || (b = "custom");
            this.Oh[b][a.da] && delete this.Oh[b][a.da]
        },
        Ow: function (a) {
            a || (a = "custom");
            this.Oh[a] = {}
        },
        av: function () {
            var a = this.Ua.rf(),
                b = this.Ua.Ze(),
                c = this.M;
            c.kc = c.QO || a;
            c.qc = c.PO || b;
            c.kc < a && (c.kc = a);
            c.qc > b && (c.qc = b)
        },
        setMinZoom: function (a) {
            a = Math.round(a);
            a > this.M.qc && (a = this.M.qc);
            this.M.QO = a;
            this.wJ()
        },
        setMaxZoom: function (a) {
            a = Math.round(a);
            a < this.M.kc && (a = this.M.kc);
            this.M.PO = a;
            this.wJ()
        },
        wJ: function () {
            this.av();
            var a = this.M;
            this.Za < a.kc ? this.Xc(a.kc) : this.Za > a.qc && this.Xc(a.qc);
            var b = new P("onzoomspanchange");
            b.kc = a.kc;
            b.qc = a.qc;
            this.dispatchEvent(b)
        },
        j4: x("LB"),
        getKey: function () {
            return pa
        },
        F_: function (a) {
            function b(a) {
                c.b0 = a;
                var b = D.ud + "custom/v2/mapstyle",
                    g = "version=4&ak=" + pa + "&",
                    g = g + "is_all=true&is_new=1&" + ("styles=" + encodeURIComponent(c.FF(a, f)));
                mb(b, g, window[e + "cb"])
            }

            var c = this,
                e = this.da;
            D.Cq("cus.fire", "count", "z_setmapstylev2count");
            this.By(t);
            this.M.dZ = p;
            window.MPC_Mgr && window.MPC_Mgr[c.da] && window.MPC_Mgr[c.da].close();
            c.M.um = t;
            this.addEventListener("hidecopyright", function () {
                c.vk.aa();
                c.M.Wo = !!a.customEditor;
                c.M.Wo === t && c.kF(new N(1, 1))
            });
            c.vk && c.vk.aa();
            this.M.Wo = !!a.customEditor;
            this.M.b6 = !!a.sharing;
            this.M.H5 = !!a.preview;
            this.M.Wo === t && this.kF(new N(1, 1));
            Ua.load("hotspot", function () {
                c.Qu()
            }, p);
            window[e + "zoomRegion"] = {};
            window.M6 = [];
            window[e + "zoomStyleBody"] = [];
            window[e + "zoomFrontStyle"] = {};
            var f = this.la();
            A.extend({}, a);
            window[e + "cb"] = function (a) {
                a = JSON.parse(a);
                0 === a.status && (3 === a.data.style.length ? (window[e + "_bmap_baseFs"] = a.data
                    .style, window[e + "StyleBody"] = a.data.style[2]) : window[e +
                "StyleBody"] = a.data.style, c.LO(), c.FY())
            };
            if (a.styleId) {
                var g = "jsapi";
                a.sharing ? g = "sharing" : a.preview && (g = "preview");
                this.AX(a.styleId, g, b)
            } else b(a.styleJson);
            window.iconSetInfo_high || qa(D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] +
                "/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi")
        },
        AX: function (a, b, c) {
            var e = this,
                f = this.da,
                g = (1E5 * Math.random()).toFixed(0);
            window[f + "_cbk_si_phpui" + g] = function (a) {
                var b = [];
                a.result && (0 === a.result.error && a.content && 0 === a.content.status) && (b = e
                    .ky(a.content.data.json));
                c && c(b)
            };
            window[f + "_cbk_si_api" + g] = function (a) {
                var b = [];
                0 === a.status && (b = a.info ? e.ky(a.info.json) : e.ky(a.data.json));
                c && c(b)
            };
            var i = "/apiconsole/custommap/";
            switch (b) {
                case "jsapi":
                    i = D.ud + "?qt=custom_map&v=3.0";
                    i += "&style_id=" + a + "&type=publish&ak=" + pa;
                    i += "&callback=" + f + "_cbk_si_phpui" + g;
                    break;
                case "sharing":
                    i = i + "getSharingJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f +
                        "_cbk_si_api" + g);
                    break;
                case "preview":
                    i = i + "getJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" +
                        g)
            }
            qa(i)
        },
        bW: function () {
            Array.prototype.map || (Array.prototype.map = function (a, b) {
                var c, e, f;
                this == q && ba(new TypeError(" this is null or not defined"));
                var g = Object(this),
                    i = g.length >>> 0;
                "[object Function]" != Object.prototype.toString.call(a) && ba(new TypeError(a +
                    " is not a function"));
                b && (c = b);
                e = Array(i);
                for (f = 0; f < i;) {
                    var k;
                    f in g && (k = g[f], k = a.call(c, k, f, g), e[f] = k);
                    f++
                }
                return e
            })
        },
        ky: function (a) {
            if (a === q || "" === a) return [];
            this.bW();
            var b = {
                    t: "featureType",
                    e: "elementType",
                    v: "visibility",
                    c: "color",
                    l: "lightness",
                    s: "saturation",
                    w: "weight",
                    z: "level",
                    h: "hue",
                    f: "fontsize",
                    zri: "curZoomRegionId",
                    zr: "curZoomRegion"
                },
                c = {
                    all: "all",
                    g: "geometry",
                    "g.f": "geometry.fill",
                    "g.s": "geometry.stroke",
                    l: "labels",
                    "l.t.f": "labels.text.fill",
                    "l.t.s": "labels.text.stroke",
                    "l.t": "labels.text",
                    "l.i": "labels.icon",
                    "g.tf": "geometry.fill"
                };
            return a.split(",").map(function (a) {
                var a = a.split("|").map(function (a) {
                        var e = b[a.split(":")[0]],
                            a = c[a.split(":")[1]] ? c[a.split(":")[1]] : a.split(":")[1];
                        switch (a) {
                            case "poi":
                                a = "poilabel";
                                break;
                            case "districtlabel":
                                a = "districtlabel"
                        }
                        var f = {};
                        f[e] = a;
                        return f
                    }),
                    f = a[0],
                    g = 1;
                a[1].elementType && (g = 2, A.extend(f, a[1]));
                for (var i = {}; g < a.length; g++) A.extend(i, a[g]);
                return A.extend(f, {
                    stylers: i
                })
            })
        },
        fY: function () {
            return this.ef.lg
        },
        U3: function (a, b) {
            var c = this,
                e = this.da,
                f = (1E5 * Math.random()).toFixed(0);
            window[e + "_cbk" + f] = function (b) {
                b = JSON.parse(b);
                b = 3 === b.data.style.length ? b.data.style[2] : b.data.style;
                c.L0(b, a);
                c.LO(a);
                b = new P("onzoomfeatureload" + a);
                c.dispatchEvent(b);
                delete window[e + "_cbk" + f]
            };
            var g = D.ud + "custom/v2/mapstyle",
                i = "ak=" + pa + "&",
                i = i + "is_all=true&is_new=1&";
            b.styleJson ? i += "styles=" + encodeURIComponent(this.FF(b.styleJson, parseInt(a, 10))) : b
                .styleId && (i += "styles=" + encodeURIComponent(c.FF(c.b0, parseInt(a, 10))));
            mb(g, i, window[e + "_cbk" + f])
        },
        kF: function (a, b) {
            var c = new P("oncopyrightoffsetchange", {
                CE: a,
                QV: b
            });
            this.M.vK = b;
            this.dispatchEvent(c)
        },
        bu: function (a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.da] && window.MPC_Mgr[b.da].close();
            b.M.um = t;
            D.Cq("cus.fire", "count", "z_setmapstylecount");
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.c0(a.styleJson));
                J() && A.ga.xy ? setTimeout(function () {
                    b.M.De = a;
                    b.dispatchEvent(new P("onsetcustomstyles", a))
                }, 50) : (this.M.De = a, this.dispatchEvent(new P("onsetcustomstyles", a)), this.fM(
                    b.M.De.geotableId));
                var c = {
                    style: a.style
                };
                a.features && 0 < a.features.length && (c.features = p);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = p);
                Sa(5050, c);
                a.style && (c = b.M.pC[a.style] ? b.M.pC[a.style].backColor : b.M.pC.normal
                    .backColor) && (this.Ta().style.backgroundColor = c)
            }
        },
        yY: function (a) {
            this.controls || (this.controls = {
                navigationControl: new nb,
                scaleControl: new ob,
                overviewMapControl: new pb,
                mapTypeControl: new qb
            });
            var b = this,
                c;
            for (c in this.controls) b.EN(b.controls[c]);
            a = a || [];
            A.oc.Pb(a, function (a) {
                b.ds(b.controls[a])
            })
        },
        fM: function (a) {
            a ? this.ys && this.ys.If === a || (this.cg(this.ys), this.ys = new rb({
                geotableId: a
            }), this.Ue(this.ys)) : this.cg(this.ys)
        },
        Vd: function () {
            var a = this.la() >= this.M.UF && this.ya() === Oa && 18 >= this.la(),
                b = t;
            try {
                document.createElement("canvas").getContext("2d"), b = p
            } catch (c) {
                b = t
            }
            return a && b
        },
        getCurrentCity: function () {
            return {
                name: this.lh,
                code: this.hs
            }
        },
        bt: function () {
            this.W.fo();
            return this.W
        },
        CY: function (a) {
            Oa.setMaxZoom(a.maxZoom || 19);
            var b = new P("oninitindoorlayer");
            b.af = a;
            this.dispatchEvent(b);
            this.M.yg = t
        },
        FY: function (a) {
            if (this.M.yg) {
                var b = new P("onupdatestyles");
                this.dispatchEvent(b)
            } else b = new P("oninitindoorlayer"), b.af = a, this.dispatchEvent(b), this.M.yg = p, this
                .M.yk = p
        },
        By: function (a) {
            this.M.ME = a;
            this.ef.Kb || (this.ef.Kb = this.ef.Cj[0].Kb);
            this.ef.Kb.parentElement.style.display = a ? "block" : "none"
        },
        WN: function (a) {
            this.ef.lg.style.display = a ? "block" : "none"
        },
        setPanorama: function (a) {
            this.W = a;
            this.W.pF(this)
        },
        FF: function (a, b) {
            for (var c = this.da, e = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                level: "z",
                hue: "h",
                fontsize: "f"
            }, f = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "labels.text": "l.t",
                "labels.icon": "l.i",
                "geometry.topfill": "g.f"
            }, g = [], i = this.Ua.rf(); i <= this.Ua.Ze(); i++) window[c + "zoomFrontStyle"][
                i] = {};
            window[c + "zoomFrontStyle"].main = {};
            for (var i = 0, k; k = a[i]; i++)
                if (!this.OY(k)) {
                    b = this.uX(k, b);
                    if (("land" === k.featureType || "all" === k.featureType || "background" === k
                        .featureType) && "string" === typeof k.elementType && ("geometry" === k
                            .elementType || "geometry.fill" === k.elementType || "all" === k.elementType
                    ) && k.stylers) k.stylers.color && (window[c + "zoomFrontStyle"][b]
                        .bmapLandColor = k.stylers.color), k.stylers.visibility && "off" === k
                        .stylers.visibility && (window[c + "zoomFrontStyle"][b].bmapLandColor =
                        "#00000000");
                    "railway" === k.featureType && ("string" === typeof k.elementType && k.stylers) && (
                        k.stylers.color && ("geometry" === k.elementType && (window[c +
                        "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color,
                            window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers
                                .color), "geometry.fill" === k.elementType && (window[c +
                        "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color),
                        "geometry.stroke" === k.elementType && (window[c + "zoomFrontStyle"][b]
                            .bmapRailwayStrokeColor = k.stylers.color)), k.stylers.visibility &&
                        (window[c + "zoomFrontStyle"][b].bmapRailwayVisibility = k.stylers
                            .visibility));
                    "roadarrow" === k.featureType && ("labels.icon" === k.elementType && k.stylers) && (
                        window[c + "zoomFrontStyle"][b].bmapRoadarrowVisibility = k.stylers
                            .visibility);
                    var m = {};
                    A.extend(m, k);
                    k = m.stylers;
                    delete m.stylers;
                    A.extend(m, k);
                    k = [];
                    for (var n in e)
                        if (m[n] && !this.KY(n))
                            if ("elementType" === n) k.push(e[n] + ":" + f[m[n]]);
                            else {
                                switch (m[n]) {
                                    case "poilabel":
                                        m[n] = "poi";
                                        break;
                                    case "districtlabel":
                                        m[n] = "label"
                                }
                                k.push(e[n] + ":" + m[n])
                            }
                    2 < k.length && g.push(k.join("|"))
                }
            return g.join(",")
        },
        c0: function (a) {
            for (var b = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                zoom: "z",
                hue: "h"
            }, c = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "lables.text": "l.t",
                "labels.icon": "l.i"
            }, e = [], f = 0, g; g = a[f]; f++) {
                var i = g.stylers;
                delete g.stylers;
                A.extend(g, i);
                var i = [],
                    k;
                for (k in b)
                    if (g[k])
                        if ("elementType" === k) i.push(b[k] + ":" + c[g[k]]);
                        else {
                            switch (g[k]) {
                                case "poilabel":
                                    g[k] = "poi";
                                    break;
                                case "districtlabel":
                                    g[k] = "label"
                            }
                            i.push(b[k] + ":" + g[k])
                        }
                2 < i.length && e.push(i.join("|"))
            }
            return e.join(",")
        },
        uX: function (a) {
            a = a.stylers.level;
            return a === l ? "main" : parseInt(a, 10)
        },
        OY: function (a) {
            var b = {};
            A.extend(b, a.stylers);
            delete b.curZoomRegionId;
            delete b.curZoomRegion;
            delete b.level;
            return A.kE(b) ? p : t
        },
        I4: function (a, b) {
            var c = a.stylers.level;
            return c === l ? p : c === b + "" ? p : t
        },
        KY: function (a) {
            return {
                curZoomRegionId: p,
                curZoomRegion: p
            } [a] ? p : t
        },
        k4: function (a, b) {
            var c = a.stylers.level,
                e = {};
            A.extend(e, b);
            c !== l && (e[parseInt(c, 10)] = p);
            return e
        },
        L0: function (a, b) {
            var c = this.da;
            window[c + "zoomStyleBody"][b] = a;
            if (!window[c + "zoomRegion"][b])
                for (var e = this.Ua.rf(), f = this.Ua.Ze(); e <= f; e++) window[c + "zoomRegion"][e] ||
                (window[c + "zoomStyleBody"][e] = a)
        },
        LO: function () {
            var a = this.da;
            if (window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility)
                for (var b = this.Ua.rf(); b <= this.Ua.Ze(); b++) window[a + "zoomFrontStyle"][b]
                    .bmapRoadarrowVisibility || (window[a + "zoomFrontStyle"][b]
                    .bmapRoadarrowVisibility = window[a + "zoomFrontStyle"].main
                    .bmapRoadarrowVisibility);
            if (window[a + "zoomFrontStyle"].main.bmapLandColor)
                for (b = this.Ua.rf(); b <= this.Ua.Ze(); b++) window[a + "zoomFrontStyle"][b]
                    .bmapLandColor || (window[a + "zoomFrontStyle"][b].bmapLandColor = window[a +
                "zoomFrontStyle"].main.bmapLandColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayFillColor)
                for (b = this.Ua.rf(); b <= this.Ua.Ze(); b++) window[a + "zoomFrontStyle"][b]
                    .bmapRailwayFillColor || (window[a + "zoomFrontStyle"][b].bmapRailwayFillColor =
                    window[a + "zoomFrontStyle"].main.bmapRailwayFillColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor)
                for (b = this.Ua.rf(); b <= this.Ua.Ze(); b++) window[a + "zoomFrontStyle"][b]
                    .bmapRailwayStrokeColor || (window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor =
                    window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
                for (b = this.Ua.rf(); b <= this.Ua.Ze(); b++) window[a + "zoomFrontStyle"][b]
                    .bmapRailwayVisibility || (window[a + "zoomFrontStyle"][b].bmapRailwayVisibility =
                    window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
        },
        H2: function (a, b) {
            var c = {};
            A.extend(c, a);
            if (c[b]) {
                for (var e = this.Ua.rf(), f = this.Ua.Ze(); e <= f; e++)
                    if (!c[e]) {
                        c[e] = p;
                        break
                    }
                delete c[b]
            }
            return c
        },
        G4: function (a) {
            return a.vt || "0" === a.uid ? t : p
        },
        zV: function () {
            delete this.Ni.QZ
        },
        M2: function () {
            this.Ni = {}
        },
        Go: function (a, b, c) {
            if (!this.M.Wo) return t;
            a = a || "sp" + this.ba.e6++;
            if (b && 0 !== b.length) return c = c || {}, this.Ni[a] = this.Ni[a] || {
                polygon: [],
                polyline: []
            }, this.Ni = this.Ni || {}, this.Ni[a][c.type].push({
                AF: b,
                Xb: c.Xb,
                type: c.type,
                style: c.style
            }), a
        },
        b1: function (a) {
            return sb / Math.pow(2, 18 - a)
        }
    });
    var sb = 4.007545274461451E7;

    function Sa(a, b) {
        if (a) {
            var b = b || {},
                c = "",
                e;
            for (e in b) c = c + "&" + e + "=" + encodeURIComponent(b[e]);
            var f = function (a) {
                    a && (tb = p, setTimeout(function () {
                        ub.src = D.ud + "images/blank.gif?" + a.src
                    }, 50))
                },
                g = function () {
                    var a = vb.shift();
                    a && f(a)
                };
            e = (1E8 * Math.random()).toFixed(0);
            tb ? vb.push({
                src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version +
                    "&t=" + e + "&code=" + a + "&da_src=" + a + c
            }) : f({
                src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version +
                    "&t=" + e + "&code=" + a + "&da_src=" + a + c
            });
            wb || (A.V(ub, "load", function () {
                tb = t;
                g()
            }), A.V(ub, "error", function () {
                tb = t;
                g()
            }), wb = p)
        }
    }

    var tb, wb, vb = [],
        ub = new Image;
    Sa(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    D.$L = {
        TILE_BASE_URLS: ["maponline0.bdimg.com/starpic/?qt=satepc&", "maponline1.bdimg.com/starpic/?qt=satepc&",
            "maponline2.bdimg.com/starpic/?qt=satepc&", "maponline3.bdimg.com/starpic/?qt=satepc&"
        ],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com",
            "maponline3.bdimg.com"
        ],
        TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a",
            "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a",
            "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"
        ],
        geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy",
            "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy",
            "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"
        ],
        traffic: "its.map.baidu.com",
        iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
        message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
        baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
        wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_",
            "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"
        ],
        main_domain_nocdn: {
            baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
            other: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv",
                "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"
            ],
            other: ["api.map.baidu.com"],
            webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
        },
        map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
    };
    D.pY = {
        TILE_BASE_URLS: ["maponline0.bdimg.com/starpic/?qt=satepc&", "maponline1.bdimg.com/starpic/?qt=satepc&",
            "maponline2.bdimg.com/starpic/?qt=satepc&", "maponline3.bdimg.com/starpic/?qt=satepc&"
        ],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com",
            "maponline3.bdimg.com"
        ],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com",
            "g3.api.map.baidu.com"
        ],
        traffic: "its.map.baidu.com",
        iw_pano: "mapsv0.bdimg.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["mapsv0.bdimg.com", "mapsv1.bdimg.com"],
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
            webmap: ["webmap0.map.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "or.map.bdimg.com"
    };
    D.M0 = {
        "0": {
            proto: "http://",
            domain: D.pY
        },
        1: {
            proto: "https://",
            domain: D.$L
        },
        2: {
            proto: "https://",
            domain: D.$L
        }
    };
    window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
    D.Au = window.HOST_TYPE || "0";
    D.url = D.M0[D.Au];
    D.Gp = D.url.proto + D.url.domain.baidumap + "/";
    D.ud = D.url.proto + ("2" == D.Au ? D.url.domain.main_domain_nocdn.other : D.url.domain.main_domain_nocdn
        .baidu) + "/";
    // D.pa = D.url.proto + ("2" == D.Au ? D.url.domain.main_domain_cdn.other[0] : D.url.domain.main_domain_nocdn
    // 	// 	.baidu) + "/";
    //修改,本地工具资源引用
    D.pa = config.home;
    D.ij = D.url.proto + D.url.domain.main_domain_cdn.webmap[0] + "/";
    D.mi = function (a, b) {
        var c, e, b = b || "";
        switch (a) {
            case "main_domain_nocdn":
                c = D.ud + b;
                break;
            case "main_domain_cdn":
                c = D.pa + b;
                break;
            default:
                e = D.url.domain[a], "[object Array]" == Object.prototype.toString.call(e) ? (c = [], A.oc.Pb(e,
                    function (a, e) {
                        c[e] = D.url.proto + a + "/" + b
                    })) : c = D.url.proto + D.url.domain[a] + "/" + b
        }
        return c
    };

    function xb(a) {
        var b = {
            duration: 1E3,
            Nc: 30,
            Zo: 0,
            dc: yb.DM,
            Nt: u()
        };
        this.fg = [];
        if (a)
            for (var c in a) b[c] = a[c];
        this.m = b;
        if ($a(b.Zo)) {
            var e = this;
            setTimeout(function () {
                e.start()
            }, b.Zo)
        } else b.Zo != zb && this.start()
    }

    var zb = "INFINITE";
    xb.prototype.start = function () {
        this.Su = fb();
        this.Rz = this.Su + this.m.duration;
        Ab(this)
    };
    xb.prototype.add = function (a) {
        this.fg.push(a)
    };

    function Ab(a) {
        var b = fb();
        b >= a.Rz ? (ab(a.m.Ba) && a.m.Ba(a.m.dc(1)), ab(a.m.finish) && a.m.finish(), 0 < a.fg.length && (b = a.fg[
            0], b.fg = [].concat(a.fg.slice(1)), b.start())) : (a.yy = a.m.dc((b - a.Su) / a.m.duration), ab(a.m
            .Ba) && a.m.Ba(a.yy), a.GF || (a.Yr = setTimeout(function () {
            Ab(a)
        }, 1E3 / a.m.Nc)))
    }

    xb.prototype.stop = function (a) {
        this.GF = p;
        for (var b = 0; b < this.fg.length; b++) this.fg[b].stop(), this.fg[b] = q;
        this.fg.length = 0;
        this.Yr && (clearTimeout(this.Yr), this.Yr = q);
        this.m.Nt(this.yy);
        a && (this.Rz = this.Su, Ab(this))
    };
    xb.prototype.cancel = ha(1);
    var yb = {
        DM: function (a) {
            return a
        },
        reverse: function (a) {
            return 1 - a
        },
        VC: function (a) {
            return a * a
        },
        TC: function (a) {
            return Math.pow(a, 3)
        },
        Ls: function (a) {
            return -(a * (a - 2))
        },
        RK: function (a) {
            return Math.pow(a - 1, 3) + 1
        },
        UC: function (a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        },
        d3: function (a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        e3: function (a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    yb["ease-in"] = yb.VC;
    yb["ease-out"] = yb.Ls;
    var I = {
        dG: 34,
        eG: 21,
        fG: new N(21, 32),
        fP: new N(10, 32),
        eP: new N(24, 36),
        dP: new N(12, 36),
        bG: new N(13, 1),
        ua: D.pa + "images/",
        A4: "http://api0.map.bdimg.com/images/",
        cG: D.pa + "images/markers_new.png",
        bP: 24,
        cP: 73,
        iC: {
            "\u5317\u4eac": {
                my: "bj",
                o: new L(116.403874, 39.914889)
            },
            "\u4e0a\u6d77": {
                my: "sh",
                o: new L(121.487899, 31.249162)
            },
            "\u6df1\u5733": {
                my: "sz",
                o: new L(114.025974, 22.546054)
            },
            "\u5e7f\u5dde": {
                my: "gz",
                o: new L(113.30765, 23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    A.ga.Xe ? (A.extend(I, {
        CK: "url(" + I.ua + "ruler.cur),crosshair",
        Ac: "-moz-grab",
        Kd: "-moz-grabbing"
    }), A.platform.qM && (I.fontFamily = "arial,simsun,sans-serif")) : A.ga.Lw || A.ga.xy ? A.extend(I, {
        CK: "url(" + I.ua + "ruler.cur) 2 6,crosshair",
        Ac: "url(" + I.ua + "openhand.cur) 8 8,default",
        Kd: "url(" + I.ua + "closedhand.cur) 8 8,move"
    }) : A.extend(I, {
        CK: "url(" + I.ua + "ruler.cur),crosshair",
        Ac: "url(" + I.ua + "openhand.cur),default",
        Kd: "url(" + I.ua + "closedhand.cur),move"
    });

    function Bb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }

    function Cb(a) {
        0 < A.ga.oa ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }

    function Db(a) {
        return a && a.parentNode && 11 !== a.parentNode.nodeType
    }

    function Eb(a, b) {
        A.U.Nx(a, "beforeEnd", b);
        return a.lastChild
    }

    function Fb(a) {
        for (var b = {
            left: 0,
            top: 0
        }; a && a.offsetParent;) b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent;
        return b
    }

    function na(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = p
    }

    function Gb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = t;
        return t
    }

    function oa(a) {
        na(a);
        return Gb(a)
    }

    function Hb() {
        var a = document.documentElement,
            b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] :
            [0, 0]
    }

    function Ib(a, b) {
        if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }

    function Jb(a, b) {
        var c = [],
            b = b || function (a) {
                return a
            },
            e;
        for (e in a) c.push(e + "=" + b(a[e]));
        return c.join("&")
    }

    function H(a, b, c) {
        var e = document.createElement(a);
        c && (e = document.createElementNS(c, a));
        return A.U.jF(e, b || {})
    }

    function Ya(a) {
        if (a.currentStyle) return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a,
            q)
    }

    function ab(a) {
        return "function" === typeof a
    }

    function $a(a) {
        return "number" === typeof a
    }

    function cb(a) {
        return "string" == typeof a
    }

    function Kb(a) {
        return "undefined" != typeof a
    }

    function Lb(a) {
        return "object" == typeof a
    }

    var Mb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function Nb(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var e = a.charCodeAt(c) << 1,
                f = e = e.toString(2);
            8 > e.length && (f = "00000000" + e, f = f.substr(e.length, 8));
            b += f
        }
        a = 5 - b.length % 5;
        e = [];
        for (c = 0; c < a; c++) e[c] = "0";
        b = e.join("") + b;
        f = [];
        for (c = 0; c < b.length / 5; c++) e = b.substr(5 * c, 5), f.push(String.fromCharCode(parseInt(e, 2) + 50));
        return f.join("") + a.toString()
    }

    function Ob(a) {
        var b = "",
            c, e, f = "",
            g, i = "",
            k = 0;
        g = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || g.exec(a)) return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do c = Mb.indexOf(a.charAt(k++)), e = Mb.indexOf(a.charAt(k++)), g = Mb.indexOf(a.charAt(k++)), i = Mb
            .indexOf(a.charAt(k++)), c = c << 2 | e >> 4, e = (e & 15) << 4 | g >> 2, f = (g & 3) << 6 | i, b +=
            String.fromCharCode(c), 64 != g && (b += String.fromCharCode(e)), 64 != i && (b += String.fromCharCode(
            f)); while (k < a.length);
        return b
    }

    var P = A.lang.Iu;

    function J() {
        return !(!A.platform.nE && !A.platform.NY && !A.platform.yj)
    }

    function Xa() {
        return !(!A.platform.qM && !A.platform.jM && !A.platform.UY)
    }

    function fb() {
        return (new Date).getTime()
    }

    function Pb() {
        var a = document.body.appendChild(H("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style) return t;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj : p;
        a.parentNode.removeChild(a);
        return b
    }

    function Qb() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }

    function Rb() {
        return !!H("canvas").getContext
    }

    function U(a) {
        return a * Math.PI / 180
    }

    D.$Y = function () {
        var a = p,
            b = p,
            c = p,
            e = p,
            f = 0,
            g = 0,
            i = 0,
            k = 0;
        return {
            KQ: function () {
                f += 1;
                a && (a = t, setTimeout(function () {
                    Sa(5054, {
                        pic: f
                    });
                    a = p;
                    f = 0
                }, 1E4))
            },
            F1: function () {
                g += 1;
                b && (b = t, setTimeout(function () {
                    Sa(5055, {
                        move: g
                    });
                    b = p;
                    g = 0
                }, 1E4))
            },
            H1: function () {
                i += 1;
                c && (c = t, setTimeout(function () {
                    Sa(5056, {
                        zoom: i
                    });
                    c = p;
                    i = 0
                }, 1E4))
            },
            G1: function (a) {
                k += a;
                e && (e = t, setTimeout(function () {
                    Sa(5057, {
                        tile: k
                    });
                    e = p;
                    k = 0
                }, 5E3))
            }
        }
    }();
    D.uq = {
        tG: "#83a1ff",
        wq: "#808080"
    };

    function Sb(a, b, c) {
        b.FE || (b.FE = [], b.handle = {});
        b.FE.push({
            filter: c,
            Rs: a
        });
        b.addEventListener || (b.addEventListener = function (a, c) {
            b.attachEvent("on" + a, c)
        });
        b.handle.click || (b.addEventListener("click", function (a) {
            for (var c = a.target || a.srcElement; c != b;) {
                Tb(b.FE, function (b, i) {
                    RegExp(i.filter).test(c.getAttribute("filter")) && i.Rs.call(c, a, c
                        .getAttribute("filter"))
                });
                c = c.parentNode
            }
        }, t), b.handle.click = p)
    }

    function Tb(a, b) {
        for (var c = 0, e = a.length; c < e; c++) b(c, a[c])
    }

    void
        function (a, b, c) {
            void
                function (a, b, c) {
                    function i(a) {
                        if (!a.Yo) {
                            for (var c = p, e = [], g = a.d_, k = 0; g && k < g.length; k++) {
                                var m = g[k],
                                    n = da[m] = da[m] || {};
                                if (n.Yo || n == a) e.push(n.Tc);
                                else {
                                    c = t;
                                    if (!n.cW && (m = (Aa.get("alias") || {})[m] || m + ".js", !K[m])) {
                                        K[m] = p;
                                        var o = b.createElement("script"),
                                            s = b.getElementsByTagName("script")[0];
                                        o.async = p;
                                        o.src = m;
                                        s.parentNode.insertBefore(o, s)
                                    }
                                    n.Uy = n.Uy || {};
                                    n.Uy[a.name] = a
                                }
                            }
                            if (c) {
                                a.Yo = p;
                                a.xK && (a.Tc = a.xK.apply(a, e));
                                for (var v in a.Uy) i(a.Uy[v])
                            }
                        }
                    }

                    function k(a) {
                        return (a || new Date) - E
                    }

                    function m(a, b, c) {
                        if (a) {
                            "string" == typeof a && (c = b, b = a, a = O);
                            try {
                                a == O ? (M[b] = M[b] || [], M[b].unshift(c)) : a.addEventListener ? a.addEventListener(b,
                                    c, t) : a.attachEvent && a.attachEvent("on" + b, c)
                            } catch (e) {
                            }
                        }
                    }

                    function n(a, b, c) {
                        if (a) {
                            "string" == typeof a && (c = b, b = a, a = O);
                            try {
                                if (a == O) {
                                    var e = M[b];
                                    if (e)
                                        for (var f = e.length; f--;) e[f] === c && e.splice(f, 1)
                                } else a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a
                                    .detachEvent("on" + b, c)
                            } catch (g) {
                            }
                        }
                    }

                    function o(a) {
                        var b = M[a],
                            c = 0;
                        if (b) {
                            for (var e = [], f = arguments, g = 1; g < f.length; g++) e.push(f[g]);
                            for (g = b.length; g--;) b[g].apply(this, e) && c++;
                            return c
                        }
                    }

                    function s(a, b) {
                        if (a && b) {
                            var c = new Image(1, 1),
                                e = [],
                                f = "img_" + +new Date,
                                g;
                            for (g in b) b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
                            O[f] = c;
                            c.onload = c.onerror = function () {
                                O[f] = c = c.onload = c.onerror = q;
                                delete O[f]
                            };
                            c.src = a + "?" + e.join("&")
                        }
                    }

                    function v() {
                        var a = arguments,
                            b = a[0];
                        if (this.wK || /^(on|un|set|get|create)$/.test(b)) {
                            for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++) c.push(a[e]);
                            "function" == typeof b && b.apply(this, c)
                        } else this.VJ.push(a)
                    }

                    function w(a, b) {
                        var c = {},
                            e;
                        for (e in a) a.hasOwnProperty(e) && (c[e] = a[e]);
                        for (e in b) b.hasOwnProperty(e) && (c[e] = b[e]);
                        return c
                    }

                    function y(a) {
                        this.name = a;
                        this.Ps = {
                            protocolParameter: {
                                postUrl: q,
                                protocolParameter: q
                            }
                        };
                        this.VJ = [];
                        this.alog = O
                    }

                    function z(a) {
                        a = a || "default";
                        if ("*" == a) {
                            var a = [],
                                b;
                            for (b in S) a.push(S[b]);
                            return a
                        }
                        (b = S[a]) || (b = S[a] = new y(a));
                        return b
                    }

                    var B = c.alog;
                    if (!B || !B.Yo) {
                        var C = b.all && a.attachEvent,
                            E = B && B.vE || +new Date,
                            G = a.T4 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3),
                            F = 0,
                            K = {},
                            O = function (a) {
                                var b = arguments,
                                    c, e, f, g;
                                if ("define" == a || "require" == a) {
                                    for (e = 1; e < b.length; e++) switch (typeof b[e]) {
                                        case "string":
                                            c = b[e];
                                            break;
                                        case "object":
                                            f = b[e];
                                            break;
                                        case "function":
                                            g = b[e]
                                    }
                                    "require" == a && (c && !f && (f = [c]), c = q);
                                    c = !c ? "#" + F++ : c;
                                    e = da[c] = da[c] || {};
                                    e.Yo || (e.name = c, e.d_ = f, e.xK = g, "define" == a && (e.cW = p), i(e))
                                } else "function" == typeof a ? a(O) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function (
                                    a, c, e) {
                                    b[0] = e;
                                    v.apply(O.QF(c), b)
                                })
                            },
                            M = {},
                            S = {},
                            da = {
                                v2: {
                                    name: "alog",
                                    Yo: p,
                                    Tc: O
                                }
                            };
                        y.prototype.start = y.prototype.create = function (a) {
                            if (!this.wK) {
                                "object" == typeof a && this.set(a);
                                this.wK = new Date;
                                for (this.Qs("create", this); a = this.VJ.shift();) v.apply(this, a)
                            }
                        };
                        y.prototype.send = function (a, b) {
                            var c = w({
                                ts: k().toString(36),
                                t: a,
                                sid: G
                            }, this.Ps);
                            if ("object" == typeof b) c = w(c, b);
                            else {
                                var e = arguments;
                                switch (a) {
                                    case "pageview":
                                        e[1] && (c.page = e[1]);
                                        e[2] && (c.title = e[2]);
                                        break;
                                    case "event":
                                        e[1] && (c.eventCategory = e[1]);
                                        e[2] && (c.eventAction = e[2]);
                                        e[3] && (c.eventLabel = e[3]);
                                        e[4] && (c.eventValue = e[4]);
                                        break;
                                    case "timing":
                                        e[1] && (c.timingCategory = e[1]);
                                        e[2] && (c.timingVar = e[2]);
                                        e[3] && (c.timingValue = e[3]);
                                        e[4] && (c.timingLabel = e[4]);
                                        break;
                                    case "exception":
                                        e[1] && (c.exDescription = e[1]);
                                        e[2] && (c.exFatal = e[2]);
                                        break;
                                    default:
                                        return
                                }
                            }
                            this.Qs("send", c);
                            var f;
                            if (e = this.Ps.protocolParameter) {
                                var g = {};
                                for (f in c) e[f] !== q && (g[e[f] || f] = c[f]);
                                f = g
                            } else f = c;
                            s(this.Ps.postUrl, f)
                        };
                        y.prototype.set = function (a, b) {
                            if ("string" == typeof a) "protocolParameter" == a && (b = w({
                                postUrl: q,
                                protocolParameter: q
                            }, b)), this.Ps[a] = b;
                            else if ("object" == typeof a)
                                for (var c in a) this.set(c, a[c])
                        };
                        y.prototype.get = function (a, b) {
                            var c = this.Ps[a];
                            "function" == typeof b && b(c);
                            return c
                        };
                        y.prototype.Qs = function (a, b) {
                            return O.Qs(this.name + "." + a, b)
                        };
                        y.prototype.V = function (a, b) {
                            O.V(this.name + "." + a, b)
                        };
                        y.prototype.hd = function (a, b) {
                            O.hd(this.name + "." + a, b)
                        };
                        O.name = "alog";
                        O.Xb = G;
                        O.Yo = p;
                        O.timestamp = k;
                        O.hd = n;
                        O.V = m;
                        O.Qs = o;
                        O.QF = z;
                        O("init");
                        var aa = y.prototype;
                        V(aa, {
                            start: aa.start,
                            create: aa.create,
                            send: aa.send,
                            set: aa.set,
                            get: aa.get,
                            on: aa.V,
                            un: aa.hd,
                            fire: aa.Qs
                        });
                        var Aa = z();
                        Aa.set("protocolParameter", {
                            u2: q
                        });
                        if (B) {
                            aa = [].concat(B.yb || [], B.Ut || []);
                            B.yb = B.Ut = q;
                            for (var ta in O) O.hasOwnProperty(ta) && (B[ta] = O[ta]);
                            O.yb = O.Ut = {
                                push: function (a) {
                                    O.apply(O, a)
                                }
                            };
                            for (B = 0; B < aa.length; B++) O.apply(O, aa[B])
                        }
                        c.alog = O;
                        C && m(b, "mouseup", function (a) {
                            a = a.target || a.srcElement;
                            1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                        });
                        var Ga = t;
                        a.onerror = function (a, b, e, f) {
                            var i = p;
                            !b && /^script error/i.test(a) && (Ga ? i = t : Ga = p);
                            i && c.alog("exception.send", "exception", {
                                Jt: a,
                                uE: b,
                                Ft: e,
                                nm: f
                            });
                            return t
                        };
                        c.alog("exception.on", "catch", function (a) {
                            c.alog("exception.send", "exception", {
                                Jt: a.Jt,
                                uE: a.path,
                                Ft: a.Ft,
                                method: a.method,
                                bL: "catch"
                            })
                        })
                    }
                }(a, b, c);
            void
                function (a, b, c) {
                    var i = "18_3";
                    J() && (i = "18_4");
                    var k = "http://static.tieba.baidu.com";
                    "https:" === a.location.protocol && (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
                    var m = Math.random,
                        k = k + "/tb/pms/img/st.gif",
                        n = {
                            Ch: "0.1"
                        },
                        o = {
                            Ch: "0.1"
                        },
                        s = {
                            Ch: "0.1"
                        },
                        v = {
                            Ch: "0"
                        };
                    if (n && n.Ch && m() < n.Ch) {
                        var w = c.alog.QF("monkey"),
                            y, n = a.screen,
                            z = b.referrer;
                        w.set("ver", 5);
                        w.set("pid", 241);
                        n && w.set("px", n.width + "*" + n.height);
                        w.set("ref", z);
                        c.alog("monkey.on", "create", function () {
                            y = c.alog.timestamp;
                            w.set("protocolParameter", {
                                reports: q
                            })
                        });
                        c.alog("monkey.on", "send", function (a) {
                            "pageview" == a.t && (a.cmd = "open");
                            a.now && (a.ts = y(a.now).toString(36), a.now = "")
                        });
                        c.alog("monkey.create", {
                            page: i,
                            pid: "241",
                            p: "18",
                            dv: 6,
                            postUrl: k,
                            reports: {
                                refer: 1
                            }
                        });
                        c.alog("monkey.send", "pageview", {
                            now: +new Date
                        })
                    }
                    if (o && o.Ch && m() < o.Ch) {
                        var B = t;
                        a.onerror = function (a, b, e, f) {
                            var i = p;
                            !b && /^script error/i.test(a) && (B ? i = t : B = p);
                            i && c.alog("exception.send", "exception", {
                                Jt: a,
                                uE: b,
                                Ft: e,
                                nm: f
                            });
                            return t
                        };
                        c.alog("exception.on", "catch", function (a) {
                            c.alog("exception.send", "exception", {
                                Jt: a.Jt,
                                uE: a.path,
                                Ft: a.Ft,
                                method: a.method,
                                bL: "catch"
                            })
                        });
                        c.alog("exception.create", {
                            postUrl: k,
                            dv: 7,
                            page: i,
                            pid: "170",
                            p: "18"
                        })
                    }
                    s && (s.Ch && m() < s.Ch) && (c.alog("cus.on", "time", function (a) {
                        var b = {},
                            e = t,
                            f;
                        if ("[object Object]" === a.toString()) {
                            for (var i in a) "page" == i ? b.page = a[i] : (f = parseInt(a[i]), 0 < f && /^z_/
                                .test(i) && (e = p, b[i] = f));
                            e && c.alog("cus.send", "time", b)
                        }
                    }), c.alog("cus.on", "count", function (a) {
                        var b = {},
                            e = t;
                        "string" === typeof a && (a = [a]);
                        if (a instanceof Array)
                            for (var f = 0; f < a.length; f++) /^z_/.test(a[f]) ? (e = p, b[a[f]] = 1) :
                                /^page:/.test(a[f]) && (b.page = a[f].substring(5));
                        e && c.alog("cus.send", "count", b)
                    }), c.alog("cus.create", {
                        dv: 3,
                        postUrl: k,
                        page: i,
                        p: "18"
                    }));
                    if (v && v.Ch && m() < v.Ch) {
                        var C = ["Moz", "O", "ms", "Webkit"],
                            E = ["-webkit-", "-moz-", "-o-", "-ms-"],
                            G = function () {
                                return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b
                                    .createElement.apply(b, arguments)
                            },
                            F = G("dpFeatureTest").style,
                            K = function (a) {
                                return O(a, l, l)
                            },
                            O = function (a, b, c) {
                                var e = a.charAt(0).toUpperCase() + a.slice(1),
                                    f = (a + " " + C.join(e + " ") + e).split(" ");
                                if (typeof b === "string" || typeof b === "undefined") return M(f, b);
                                f = (a + " " + C.join(e + " ") + e).split(" ");
                                a: {
                                    var a = f,
                                        g;
                                    for (g in a)
                                        if (a[g] in b) {
                                            if (c === t) {
                                                b = a[g];
                                                break a
                                            }
                                            g = b[a[g]];
                                            b = typeof g === "function" ? fnBind(g, c || b) : g;
                                            break a
                                        }
                                    b = t
                                }
                                return b
                            },
                            M = function (a, b) {
                                var c, e, f;
                                e = a.length;
                                for (c = 0; c < e; c++) {
                                    f = a[c];
                                    ~("" + f).indexOf("-") && (f = S(f));
                                    if (F[f] !== l) return b == "pfx" ? f : p
                                }
                                return t
                            },
                            S = function (a) {
                                return a.replace(/([a-z])-([a-z])/g, function (a, b, c) {
                                    return b + c.toUpperCase()
                                }).replace(/^-/, "")
                            },
                            da = function (a, b, c) {
                                if (a.indexOf("@") === 0) return atRule(a);
                                a.indexOf("-") != -1 && (a = S(a));
                                return !b ? O(a, "pfx") : O(a, b, c)
                            },
                            aa = function () {
                                var a = G("canvas");
                                return !(!a.getContext || !a.getContext("2d"))
                            },
                            Aa = function () {
                                var a = G("div");
                                return "draggable" in a || "ondragstart" in a && "ondrop" in a
                            },
                            ta = function () {
                                try {
                                    localStorage.setItem("localStorage", "localStorage");
                                    localStorage.removeItem("localStorage");
                                    return p
                                } catch (a) {
                                    return t
                                }
                            },
                            Ga = function () {
                                return "content" in b.createElement("template")
                            },
                            sa = function () {
                                return "createShadowRoot" in b.createElement("a")
                            },
                            Va = function () {
                                return "registerElement" in b
                            },
                            He = function () {
                                return "import" in b.createElement("link")
                            },
                            Yc = function () {
                                return "getItems" in b
                            },
                            oj = function () {
                                return "EventSource" in window
                            },
                            Ie = function (a, b) {
                                var c = new Image;
                                c.onload = function () {
                                    b(a, c.width > 0 && c.height > 0)
                                };
                                c.onerror = function () {
                                    b(a, t)
                                };
                                c.src = "data:image/webp;base64," + {
                                    W4: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                                    V4: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                                    alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                                    tk: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                                } [a]
                            },
                            Je = function (a, b) {
                                return bc.ii["WebP-" + a] = b
                            },
                            pj = function () {
                                return "openDatabase" in a
                            },
                            qj = function () {
                                return "performance" in a && "timing" in a.performance
                            },
                            rj = function () {
                                return "performance" in a && "mark" in a.performance
                            },
                            sj = function () {
                                return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array
                                    .prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !
                                    Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array
                                    .prototype.reduceRight || !Array.isArray)
                            },
                            tj = function () {
                                return "Promise" in a && "cast" in a.xq && "resolve" in a.xq && "reject" in a.xq && "all" in
                                    a.xq && "race" in a.xq && function () {
                                        var b;
                                        new a.xq(function (a) {
                                            b = a
                                        });
                                        return typeof b === "function"
                                    }()
                            },
                            uj = function () {
                                var b = !!a.r1,
                                    c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                                return !!a.v1 && b && c
                            },
                            vj = function () {
                                return "geolocation" in navigator
                            },
                            wj = function () {
                                var b = G("canvas"),
                                    c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
                                return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
                            },
                            xj = function () {
                                return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").S2
                            },
                            yj = function () {
                                return !!a.C1
                            },
                            zj = function () {
                                return "WebSocket" in a && a.z1.n1 === 2
                            },
                            Aj = function () {
                                return !!b.createElement("video").canPlayType
                            },
                            Bj = function () {
                                return !!b.createElement("audio").canPlayType
                            },
                            Cj = function () {
                                return !!(a.history && "pushState" in a.history)
                            },
                            Dj = function () {
                                return !(!a.p1 || !a.q1)
                            },
                            Ej = function () {
                                return "postMessage" in window
                            },
                            Fj = function () {
                                return !!a.webkitNotifications || "Notification" in a && "permission" in a.yP &&
                                    "requestPermission" in a.yP
                            },
                            Gj = function () {
                                for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, f = 0; f < b
                                    .length && !c; ++f) c = a[b[f] + "RequestAnimationFrame"];
                                return !!c
                            },
                            Hj = function () {
                                return "JSON" in a && "parse" in JSON && "stringify" in JSON
                            },
                            Ij = function () {
                                return !(!da("exitFullscreen", b, t) && !da("cancelFullScreen", b, t))
                            },
                            Jj = function () {
                                return !!da("Intl", a)
                            },
                            Kj = function () {
                                return K("flexBasis")
                            },
                            Lj = function () {
                                return !!K("perspective")
                            },
                            Mj = function () {
                                return K("shapeOutside")
                            },
                            Nj = function () {
                                var a = G("div");
                                a.style.cssText = E.join("filter:blur(2px); ");
                                return !!a.style.length && (b.documentMode === l || b.documentMode > 9)
                            },
                            Oj = function () {
                                return "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest
                            },
                            Pj = function () {
                                return G("progress").max !== l
                            },
                            Qj = function () {
                                return G("meter").max !== l
                            },
                            Rj = function () {
                                return "sendBeacon" in navigator
                            },
                            Sj = function () {
                                return K("borderRadius")
                            },
                            Tj = function () {
                                return K("boxShadow")
                            },
                            Uj = function () {
                                var a = G("div").style;
                                a.cssText = E.join("opacity:.55;");
                                return /^0.55$/.test(a.opacity)
                            },
                            Vj = function () {
                                return M(["textShadow"], l)
                            },
                            Wj = function () {
                                return K("animationName")
                            },
                            Xj = function () {
                                return K("transition")
                            },
                            Yj = function () {
                                return navigator.userAgent.indexOf("Android 2.") === -1 && K("transform")
                            },
                            bc = {
                                ii: {},
                                sa: function (a, b, c) {
                                    this.ii[a] = b.apply(this, [].slice.call(arguments, 2))
                                },
                                Id: function (a, b) {
                                    a.apply(this, [].slice.call(arguments, 1))
                                },
                                i_: function () {
                                    this.sa("bdrs", Sj);
                                    this.sa("bxsd", Tj);
                                    this.sa("opat", Uj);
                                    this.sa("txsd", Vj);
                                    this.sa("anim", Wj);
                                    this.sa("trsi", Xj);
                                    this.sa("trfm", Yj);
                                    this.sa("flex", Kj);
                                    this.sa("3dtr", Lj);
                                    this.sa("shpe", Mj);
                                    this.sa("fltr", Nj);
                                    this.sa("cavs", aa);
                                    this.sa("dgdp", Aa);
                                    this.sa("locs", ta);
                                    this.sa("wctem", Ga);
                                    this.sa("wcsdd", sa);
                                    this.sa("wccse", Va);
                                    this.sa("wchti", He);
                                    this.Id(Ie, "lossy", Je);
                                    this.Id(Ie, "lossless", Je);
                                    this.Id(Ie, "alpha", Je);
                                    this.Id(Ie, "animation", Je);
                                    this.sa("wsql", pj);
                                    this.sa("natm", qj);
                                    this.sa("ustm", rj);
                                    this.sa("arra", sj);
                                    this.sa("prms", tj);
                                    this.sa("xhr2", uj);
                                    this.sa("wbgl", wj);
                                    this.sa("geol", vj);
                                    this.sa("svg", xj);
                                    this.sa("work", yj);
                                    this.sa("wbsk", zj);
                                    this.sa("vido", Aj);
                                    this.sa("audo", Bj);
                                    this.sa("hsty", Cj);
                                    this.sa("file", Dj);
                                    this.sa("psmg", Ej);
                                    this.sa("wknf", Fj);
                                    this.sa("rqaf", Gj);
                                    this.sa("json", Hj);
                                    this.sa("flsc", Ij);
                                    this.sa("i18n", Jj);
                                    this.sa("cors", Oj);
                                    this.sa("prog", Pj);
                                    this.sa("metr", Qj);
                                    this.sa("becn", Rj);
                                    this.sa("mcrd", Yc);
                                    this.sa("esrc", oj)
                                }
                            },
                            w = c.alog.QF("feature");
                        w.V("commit", function () {
                            bc.i_();
                            var a = setInterval(function () {
                                if ("WebP-lossy" in bc.ii && "WebP-lossless" in bc.ii && "WebP-alpha" in bc
                                    .ii && "WebP-animation" in bc.ii) {
                                    for (var b in bc.ii) bc.ii[b] = bc.ii[b] ? "y" : "n";
                                    w.send("feature", bc.ii);
                                    clearInterval(a)
                                }
                            }, 500)
                        });
                        c.alog("feature.create", {
                            b3: 4,
                            z5: k,
                            page: i,
                            yb: "18"
                        });
                        c.alog("feature.fire", "commit")
                    }
                }(a, b, c)
        }(window, document, D);
    D.Cq = D.alog || u();
    D.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && D.alog("cus.fire", "count", "z_httpscount");

    function Ub(a) {
        var b = window.TILE_VERSION,
            c = "20190410";
        b && b.ditu && (b = b.ditu, b[a] && b[a].updateDate && (c = b[a].updateDate));
        return c
    }

    var Vb = [72.6892532, 0.1939743381, 136.1168614, 54.392257],
        Wb = [72.69566833, 0.1999420909, 136.1232863, 54.39791217],
        Xb = 158,
        Yb = [98.795985, 122.960792, 107.867379, 118.093451, 119.139658, 128.035888, 79.948212, 99.029524,
            119.923388, 122.094977, 127.918527, 130.94789, 106.50606, 108.076783, 119.8329, 126.382207, 111.803567,
            119.324928, 100.749858, 102.227985, 99.860885, 100.788921, 97.529435, 98.841564, 99.100017, 99.90035,
            122.917416, 123.774367, 123.728314, 125.507211, 123.736065, 124.767299, 125.488463, 126.410675,
            125.484326, 126.07764, 130.830784, 133.620042, 127.912178, 128.668957, 128.658937, 129.638599,
            132.894179, 134.119086, 117.379378, 119.244569, 116.086736, 117.431212, 114.420233, 116.137458,
            116.492775, 119.605527, 110.579401, 111.86488, 74.468228, 80.001908, 82.867432, 91.353788, 85.721075,
            98.976964, 127.664757, 129.546833, 129.476893, 130.22449, 133.730358, 134.745235, 134.381034, 135.1178,
            130.868117, 131.34409, 115.513245, 117.544751, 115.779271, 116.748045, 108.536254, 110.614326,
            121.365534, 124.626434, 126.165992, 127.347013, 91.281869, 95.611754, 79.879648, 82.945041, 76.413314,
            78.345207, 78.275229, 80.002329, 83.956612, 85.734098, 85.510186, 89.356499, 97.997001, 98.948845,
            106.653208, 108.610811, 111.400183, 111.824179, 111.592224, 111.817136, 116.00682, 117.024631,
            116.258574, 116.689291, 119.436876, 119.922961, 120.659806, 121.395479, 120.349116, 120.676014,
            124.59389, 125.787788, 126.221756, 126.788962, 95.572955, 102.046581, 95.583772, 96.165551, 95.564318,
            97.806095, 91.30446, 93.356438, 93.330319, 94.698145, 89.349129, 90.548677, 82.268802, 82.892025,
            78.335615, 80.032266, 76.625755, 78.361413, 73.498248, 74.490992, 74.846872, 76.488771, 91.563521,
            94.878444, 88.768214, 89.244787, 83.247076, 83.974127, 82.29595, 83.256003, 81.885315, 83.26249,
            80.760619, 81.472404, 86.470983, 88.276988, 102.207537, 104.234614, 112.164795, 116.833667, 108.965663,
            113.032246, 111.166575, 117.983363
        ],
        Zb = [22.551183, 42.284787, 17.227969, 22.738314, 41.300981, 50.749638, 30.368087, 42.332701, 21.705055,
            22.696452, 42.426047, 48.944674, 21.432184, 22.651387, 50.657409, 52.92296, 42.212192, 45.206905,
            21.137031, 22.57186, 21.444502, 22.586566, 23.741571, 25.301472, 22.006806, 22.56637, 38.985114,
            41.346531, 40.295617, 41.338581, 39.740021, 40.351012, 40.974644, 41.331562, 40.726852, 41.067192,
            44.877158, 48.018285, 41.344597, 42.451798, 42.016305, 42.443235, 45.880906, 48.214001, 45.140027,
            46.792775, 45.141083, 46.400433, 45.156418, 45.748281, 47.485889, 50.071879, 42.223667, 43.469487,
            37.019867, 40.668675, 42.226823, 47.321605, 27.72944, 30.469853, 48.919002, 49.650614, 48.840188,
            49.443166, 46.949801, 48.382798, 47.660603, 48.472692, 42.859946, 44.913298, 47.605896, 48.445914,
            48.41698, 48.909667, 42.23507, 42.914193, 52.8281, 53.585952, 50.709311, 51.662219, 42.29968, 44.399225,
            42.302746, 45.391958, 34.680866, 37.03377, 30.743515, 37.07228, 28.245649, 30.408935, 47.277693,
            48.504255, 25.241528, 27.780726, 42.223363, 42.548418, 43.435888, 44.696952, 44.693193, 45.00187,
            48.886267, 49.326755, 49.288642, 49.632304, 50.717486, 51.314369, 52.914204, 53.33964, 52.910094,
            53.115926, 52.908382, 53.258095, 51.64533, 52.408305, 42.236825, 42.699126, 43.068466, 43.898632,
            42.670403, 43.082219, 44.379045, 45.187742, 44.382336, 44.981379, 47.310362, 48.06019, 45.359099,
            46.814439, 40.569751, 42.047741, 40.587956, 41.41263, 38.519192, 40.185033, 35.790476, 37.029005,
            26.825605, 27.763896, 27.199658, 27.751649, 29.150192, 30.381073, 29.573886, 30.065162, 30.047775,
            30.384089, 30.001277, 30.388525, 48.494118, 49.173841, 22.398528, 22.601198, 7.441114, 11.505968,
            3.767491, 9.005209, 12.642067, 17.410886
        ],
        $b = 95,
        ac = [110.3961374, 105.0743788, 96.8991824, 95.61810411, 93.82412598, 91.3892353, 91.38931858, 89.08325955,
            87.22469808, 86.26278402, 85.17353, 85.23741211, 82.86627441, 81.90481038, 79.59687147, 80.39829237,
            79.93319363, 77.80279948, 75.2557704, 73.49357829, 73.1892532, 73.87758816, 74.4064738, 74.10215224,
            75.46409695, 76.77739692, 78.28299615, 78.15499485, 78.37920654, 78.89145345, 79.69282199, 81.19938178,
            81.80830295, 83.89093424, 85.94149523, 87.86447266, 89.03414958, 90.05918132, 91.10026937, 92.15733832,
            93.74361735, 95.82597331, 97.95655545, 97.12363037, 98.2129739, 99.2068571, 101.6587874, 102.5239084,
            102.2356106, 105.0249238, 106.0992342, 107.8617093, 111.6439372, 109.591869, 112.284586, 117.7961157,
            118.9495128, 114.2076584, 118.693565, 123.1475225, 122.730705, 120.9361393, 123.4207441, 122.3787782,
            122.1385425, 121.5904281, 121.1773763, 120.6805404, 120.2483355, 122.795807, 122.8759077, 121.3060262,
            122.1392177, 123.7418799, 126.4177599, 128.5647409, 129.7194884, 131.2259136, 131.9950494, 133.6289931,
            135.6168614, 131.3875545, 130.8743365, 128.6303223, 126.0997773, 124.4015375, 122.22161, 119.6586483,
            119.7866827, 118.5685878, 116.5177976, 114.819101, 119.0812964, 116.453265, 111.7431171
        ],
        cc = [43.2190351, 42.38053385, 43.17417589, 44.42226915, 45.09863634, 45.56708116, 47.33599718, 48.68832709,
            49.62448486, 48.9482175, 48.4800472, 47.33564399, 47.43948676, 46.03452067, 45.20221788, 43.34563043,
            42.32965739, 41.39690972, 40.82972331, 39.95567654, 39.25892877, 38.36098768, 38.05441569, 37.16878445,
            36.38899414, 35.36126817, 34.30953451, 32.58503879, 31.56975694, 30.77800266, 30.43559814, 29.7744892,
            30.0931977, 28.71103299, 27.70739665, 27.5775472, 27.01096137, 27.77857883, 27.50707954, 26.50328315,
            26.70387804, 27.95548557, 27.29428901, 23.64685493, 23.62310601, 21.67493381, 20.77751465, 21.32070991,
            22.1824113, 22.31232964, 22.51316054, 16.80037679, 13.19749864, 0.6939743381, 1.541660428, 10.50208252,
            15.58926975, 17.89090007, 19.94928467, 22.18490153, 25.37285292, 25.61456434, 30.62532552, 31.08099284,
            31.89238173, 32.50092692, 32.80325765, 34.25546956, 35.15486138, 36.90170139, 37.8348272, 37.941604,
            38.6480797, 38.96797201, 40.98146918, 41.25573296, 42.07218153, 42.49132813, 44.65259766, 44.69330702,
            48.62286865, 48.09383952, 49.19628499, 50.03402317, 53.27678901, 53.62976345, 53.89420546, 52.98933322,
            52.01872884, 50.23210259, 50.18807048, 47.49769857, 47.34362712, 46.50502143, 45.24770128
        ],
        dc = [98.7895, 122.954182, 107.860913, 118.087007, 119.133165, 128.029533, 79.941749, 99.023087, 119.916883,
            122.08841, 127.912143, 130.941471, 106.499502, 108.070244, 119.826245, 126.375818, 111.797006,
            119.318387, 100.743285, 102.221517, 99.854448, 100.782445, 97.522928, 98.835028, 99.093518, 99.893783,
            122.910927, 123.767769, 123.721954, 125.50077, 123.729657, 124.760724, 125.481902, 126.404079,
            125.477737, 126.071019, 130.824331, 133.613395, 127.905767, 128.662524, 128.652527, 129.6321,
            132.887552, 134.11249, 117.37297, 119.237999, 116.080154, 117.424589, 114.413586, 116.130948,
            116.486264, 119.598927, 110.5728, 111.858437, 74.465162, 79.995337, 82.860821, 91.347291, 85.716024,
            98.970481, 127.658331, 129.540202, 129.470528, 130.21808, 133.723748, 134.738785, 134.374555,
            135.111443, 130.861475, 131.337438, 115.506627, 117.538123, 115.772783, 116.741632, 108.529656,
            110.60782, 121.358945, 124.619773, 126.159424, 127.340582, 91.275275, 95.605228, 79.874427, 82.938601,
            76.413314, 78.338763, 78.275229, 79.995765, 83.956612, 85.727511, 85.503554, 89.349858, 97.990418,
            98.942257, 106.646704, 108.604437, 111.393667, 111.817723, 111.585811, 111.810645, 116.000232,
            117.018216, 116.252108, 116.682705, 119.430384, 119.916417, 120.653168, 121.38883, 120.342727,
            120.669383, 124.587426, 125.781376, 126.215282, 126.782323, 95.566367, 102.040026, 95.577158, 96.159009,
            95.557772, 97.799728, 91.298032, 93.350057, 93.323794, 94.691771, 89.342471, 90.542019, 82.264229,
            82.885485, 78.335615, 80.025844, 76.623947, 78.355027, 73.495149, 74.484473, 74.846872, 76.482208,
            91.560117, 94.871859, 88.761692, 89.23822, 83.240549, 83.967602, 82.292367, 83.2495, 81.878825,
            83.256003, 80.75421, 81.465955, 86.465421, 88.270356, 102.201019, 104.228033, 112.158282, 116.827153,
            108.965663, 113.025767, 111.166575, 117.97687
        ],
        ec = [22.545421, 42.279053, 17.226272, 22.731982, 41.294917, 50.743316, 30.361986, 42.326603, 21.699185,
            22.690751, 42.419757, 48.938435, 21.426505, 22.64567, 50.651745, 52.916705, 42.20641, 45.201064,
            21.131326, 22.565685, 21.438288, 22.580379, 23.735785, 25.295582, 22.001087, 22.560315, 38.979333,
            41.340757, 40.28938, 41.332289, 39.734164, 40.344718, 40.968803, 41.325813, 40.721073, 41.061503,
            44.871533, 48.012179, 41.338366, 42.445601, 42.010343, 42.436934, 45.875217, 48.208327, 45.134237,
            46.786509, 45.135376, 46.394665, 45.150734, 45.742257, 47.480099, 50.065931, 42.217982, 43.46329,
            37.014057, 40.662848, 42.221079, 47.315558, 27.723432, 30.46385, 48.913298, 49.644555, 48.83396,
            49.436824, 46.944059, 48.376613, 47.654503, 48.466331, 42.854333, 44.907682, 47.600253, 48.440245,
            48.410926, 48.903468, 42.229292, 42.908294, 52.822466, 53.58012, 50.703491, 51.656037, 42.29378,
            44.393379, 42.296912, 45.385809, 34.679282, 37.027699, 30.740622, 37.066377, 28.241967, 30.403134,
            47.271949, 48.49848, 25.235818, 27.774976, 42.217425, 42.542102, 43.429763, 44.691016, 44.687044,
            44.995758, 48.880431, 49.320551, 49.282865, 49.626267, 50.711607, 51.308382, 52.908547, 53.333963,
            52.904419, 53.109706, 52.902338, 53.251938, 51.639701, 52.402205, 42.231045, 42.693581, 43.062756,
            43.892771, 42.664519, 43.075927, 44.372942, 45.1815, 44.376327, 44.975476, 47.304623, 48.054453,
            45.353174, 46.808493, 40.563653, 42.041556, 40.582164, 41.4064, 38.51618, 40.179105, 35.789745,
            37.023144, 26.825402, 27.757641, 27.193806, 27.745766, 29.144229, 30.375186, 29.567889, 30.059102,
            30.041938, 30.378006, 29.995047, 30.382338, 48.48834, 49.169021, 22.392816, 22.595333, 7.439914,
            11.500161, 3.766676, 9.000793, 12.640512, 17.406563
        ],
        fc = 3E3,
        gc = 2.0E-5,
        hc = 3.0E-6,
        ic = 0.0174532925194,
        jc = 0.0065,
        kc = 0.0060,
        lc = 4E4,
        mc = 0,
        nc = 3,
        oc = 1.0E-10,
        pc = 6370996.81,
        qc = 1E8;

    function rc(a, b, c) {
        for (var e = Xb, f = 0; f < e; f += 2)
            if (a.lng >= b[f] && a.lng <= b[f + 1] && a.lat >= c[f] && a.lat <= c[f + 1]) return p;
        return t
    }

    function sc(a) {
        var b = a.lng,
            c = a.lat,
            a = Math.sqrt(b * b + c * c) + Math.sin(c * fc * ic) * gc,
            b = Math.atan2(c, b) + Math.cos(b * fc * ic) * hc;
        return {
            lng: a * Math.cos(b) + jc,
            lat: a * Math.sin(b) + kc
        }
    }

    function tc(a) {
        var b = uc,
            c = {},
            e = a.lng,
            f = a.lat,
            g = 1,
            i = a.lng,
            k = a.lat,
            m = e - g,
            n = 0,
            o = f + g,
            s = 0,
            v = e - g,
            w = 0,
            y = f - g,
            z = 0,
            B = e + g,
            C = 0,
            E = f - g,
            G = 0,
            F = e + g,
            K = 0,
            O = f + g,
            M = 0,
            o = m = 0,
            o = vc(b, e, f),
            m = o.lng,
            o = o.lat;
        if (1.0E-6 >= wc(m, o, i, k)) return c.lng = e, c.lat = f, c;
        for (; ;) {
            m = e - g;
            o = f + g;
            v = e - g;
            y = f - g;
            B = e + g;
            E = f - g;
            F = e + g;
            O = f + g;
            e = vc(b, m, o);
            n = e.lng;
            s = e.lat;
            e = vc(b, v, y);
            w = e.lng;
            z = e.lat;
            e = vc(b, B, E);
            C = e.lng;
            G = e.lat;
            e = vc(b, F, O);
            K = e.lng;
            M = e.lat;
            e = wc(n, s, i, k);
            n = wc(w, z, i, k);
            w = wc(C, G, i, k);
            K = wc(K, M, i, k);
            if (1.0E-6 > e) return c.lng = m, c.lat = o, c;
            if (1.0E-6 > n) return c.lng = v, c.lat = y, c;
            if (1.0E-6 > w) return c.lng = B, c.lat = E, c;
            if (1.0E-6 > K) return c.lng = F, c.lat = O, c;
            C = 1 / e;
            n = 1 / n;
            w = 1 / w;
            K = 1 / K;
            e = (m * C + v * n + B * w + F * K) / (C + n + w + K);
            f = (o * C + y * n + E * w + O * K) / (C + n + w + K);
            o = vc(b, e, f);
            m = o.lng;
            o = o.lat;
            if (1.0E-6 >= wc(m, o, i, k)) return c.lng = e, c.lat = f, c;
            g *= 0.6;
            if (1.0E-6 > g) {
                a: {
                    c = (a.lng + 0.03 - (a.lng - 0.03)) / 1.0E-4 + 0.5;
                    g = (a.lat + 0.03 - (a.lat - 0.03)) /
                        1.0E-4 + 0.5;
                    i = a.lng * qc;
                    k = a.lat * qc;
                    y = 1.0E-4 * qc;
                    m = i - y;
                    o = i + y;
                    v = k - y;
                    B = k +
                        y;
                    C = n = w = K = l;
                    F = n = y = E = w = K = 0;
                    b(a);
                    C = l;
                    for (O = 0; O <= c; O++) {
                        for (e = 0; e <= g; e++)
                            if (C = b(l), K = l.lng * qc, w = l.lat * qc, n = C.lng * qc, C = C.lat * qc, !(n < m ||
                                C < v || n > o || C > B)) {
                                K -= n;
                                w -= C;
                                n = Math.sqrt((i - n) * (i - n) + (k - C) * (k - C));
                                if (1 > n) {
                                    c = {};
                                    c.lng = l.lng;
                                    c.lat = l.lat;
                                    break a
                                }
                                E += 1 * K / n;
                                y += 1 * w / n;
                                F += 1 / n
                            }
                        E /= F * qc;
                        y /= F * qc
                    }
                    b = E * qc / qc;
                    g = y * qc / qc;
                    c = {};
                    c.lng = a.lng + b;
                    c.lat = a.lat + g
                }
                return c
            }
        }
    }

    function vc(a, b, c) {
        a = a({
            lng: b,
            lat: c
        });
        b = {};
        b.lng = a.lng;
        b.lat = a.lat;
        return b
    }

    function xc(a, b, c, e) {
        var f = arguments.length;
        this.Gg = {};
        this.Ng = {};
        0 !== f && 4 === f && this.normalize(a, b, c, e)
    }

    xc.prototype.contains = function (a) {
        return a.lng > this.Gg.lng && a.lng < this.Ng.lng && a.lat > this.Gg.lat && a.lat < this.Ng.lat ? nc :
            Math.abs(a.lng - this.Gg.lng) < oc || Math.abs(a.lng - this.Ng.lng) < oc || Math.abs(a.lat - this.Gg
                .lat) < oc || Math.abs(a.y - this.Ng.lat) > oc ? 2 : mc
    };
    xc.prototype.normalize = function (a, b, c, e) {
        a > c ? (this.Gg.lng = c, this.Ng.lng = a) : (this.Gg.lng = a, this.Ng.lng = c);
        b > e ? (this.Gg.lat = e, this.Ng.lat = b) : (this.Gg.lat = b, this.Ng.lat = e)
    };

    function yc(a, b, c, e) {
        this.mu = {
            lng: a,
            lat: b
        };
        this.ex = {
            lng: c,
            lat: e
        };
        this.$x = new xc(a, b, c, e)
    }

    function zc(a, b) {
        var c = a.lat * ic,
            e = b.lat * ic,
            f = c - e,
            g = a.lng * ic - b.lng * ic;
        return 2 * Math.asin(Math.sqrt(Math.sin(f / 2) * Math.sin(f / 2) + Math.cos(c) * Math.cos(e) * Math.sin(g /
            2) * Math.sin(g / 2))) * pc
    }

    function wc(a, b, c, e) {
        return Math.sqrt((a - c) * (a - c) + (b - e) * (b - e))
    }

    function Ac(a, b, c) {
        return (b.lng - a.lng) * (c.lat - a.lat) - (c.lng - a.lng) * (b.lat - a.lat)
    }

    function uc(a) {
        var b = {};
        if (a.lng < Vb[0] - 0.4 || a.lat < Vb[1] - 0.4 || a.lng > Vb[2] + 0.4 || a.lat > Vb[3] + 0.4) return b.lng =
            a.lng, b.lat = a.lat, b;
        if (rc(a, dc, ec)) return b = sc(a);
        for (var b = 0, c = lc, e = 0, f = new xc, g = 0, e = 0; e < $b; ++e) cc[e] <= a.lat ? cc[(e + 1) % $b] > a
            .lat && 0 < Ac({
            lng: ac[e],
            lat: cc[e]
        }, {
            lng: ac[(e + 1) % $b],
            lat: cc[(e + 1) % $b]
        }, a) && ++g : cc[(e + 1) % $b] <= a.lat && 0 > Ac({
            lng: ac[e],
            lat: cc[e]
        }, {
            lng: ac[(e + 1) % $b],
            lat: cc[(e + 1) % $b]
        }, a) && --g;
        if ((0 === g ? mc : nc) === mc) {
            for (g = 0; g < $b; ++g)
                if (e = new yc(ac[g], cc[g], ac[(g + 1) % $b], cc[(g + 1) % $b]), f.Gg.lng = e.$x.Gg.lng - 0.5, f.Gg
                    .lat = e.$x.Gg.lat - 0.5, f.Ng.lng = e.$x.Ng.lng + 0.5, f.Ng.lat = e.$x.Ng.lat + 0.5, f
                    .contains(a) !== mc) {
                    var i;
                    var k = e.mu.lng,
                        m = e.mu.lat,
                        n = e.ex.lng,
                        o = e.ex.lat;
                    i = o - m;
                    var s = k - n;
                    !(Math.abs(i - 0) > oc) && !(Math.abs(s - 0) > oc) ? i = e.mu : (k = n * m - k * o, m = s * a
                        .lng - i * a.lat, n = i * i - s * s, i = {
                        lng: (s * m - i * k) / n,
                        lat: -(i * m + s * k) / n
                    });
                    s = 180;
                    k = 90;
                    m = -180;
                    n = -90;
                    n = e.mu;
                    o = e.ex;
                    s = n.lng < o.lng ? n.lng : o.lng;
                    k = n.lat < o.lat ? n.lat : o.lat;
                    m = n.lng < o.lng ? n.lng : o.lng;
                    n = n.lat < o.lat ? n.lat : o.lat;
                    i.lng <= m && i.lng >= s && i.lng <= n && i.lat >= k ? (e = a.lat * ic, s = a.lng * ic, k = i
                        .lat * ic, i = i.lng * ic, m = Math.cos(e) * Math.cos(k), e = m * Math.cos(s) * Math
                        .cos(i) + m * Math.sin(s) * Math.sin(i) + Math.sin(e) * Math.sin(k), -1 > e ? e = -1 :
                        1 < e && (e = 1), e = Math.acos(e) * pc) : (i = zc(a, e.mu), e = zc(a, e.ex), e = i <
                    e ? i : e);
                    e < c && (c = e)
                }
            c < lc && (b = (lc - c) / lc)
        } else b = 1;
        c = sc(a);
        return b = {
            lng: a.lng + (c.lng - a.lng) * b,
            lat: a.lat + (c.lat - a.lat) * b
        }
    }

    function Bc(a) {
        var b = {};
        if (a.lng < Wb[0] - 0.4 || a.lat < Wb[1] - 0.4 || a.lng > Wb[2] + 0.4 || a.lat > Wb[3] + 0.4) return b.lng =
            a.lng, b.lat = a.lat, b;
        if (rc(a, Yb, Zb)) {
            var b = a.lng - jc,
                c = a.lat - kc,
                a = Math.sqrt(b * b + c * c) - Math.sin(c * fc * ic) * gc,
                b = Math.atan2(c, b) - Math.cos(b * fc * ic) * hc;
            return b = {
                lng: a * Math.cos(b),
                lat: a * Math.sin(b)
            }
        }
        c = uc(a);
        return a.lng === c.lng && a.lat === c.lng ? (b.lng = a.lng, b.lat = a.lat, b) : tc(a)
    }

    function Za(a, b) {
        if (3 === b && a instanceof Q) {
            var c = uc(a);
            return new L(c.lng, c.lat)
        }
        return a
    }

    function db(a, b) {
        if (3 === b && a instanceof L) {
            var c = Bc(a);
            return new Q(c.lng, c.lat)
        }
        return 5 === b && a instanceof L ? new Q(a.lng, a.lat) : a
    };

    function qa(a, b) {
        //修改，屏蔽ak验证
        if (/^http/.test(a)) {
            return;
        }

        function c(a) {
            var b;
            return (b = document.cookie.match(RegExp("(^| )" + a + "=([^;]*)(;|$)"))) ? unescape(b[2]) : -2
        }

        if (b) {
            var e = (1E5 * Math.random()).toFixed(0);
            D._rd["_cbk" + e] = function (a) {
                b && b(a);
                delete D._rd["_cbk" + e]
            };
            a += "&callback=BMap._rd._cbk" + e
        }
        // var f = c("BMAP_SECKEY"),
        // 	g = c("SECKEY_CID"),
        // 	a = a + "&v=3.0&seckey=" + f + "&cid=" + g,
        // 	i = H("script", {
        // 		type: "text/javascript"
        // 	});
        //修改，屏蔽ak验证
        var i = H("script", {type: "text/javascript"});
        i.charset = "utf-8";
        i.src = a;
        i.addEventListener ? i.addEventListener("load", function (a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, t) : i.attachEvent && i.attachEvent("onreadystatechange", function () {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function () {
            document.getElementsByTagName("head")[0].appendChild(i);
            i = q
        }, 1)
    };
    //修改，可能会调用到的模块文件下载到本地modules目录
    //下载模块文件，http://api0.map.bdimg.com/getmodules?v=3.0&mod=mode
    //模块文件mode命名规则=>map_1zqgk3,common_phnqd1
    var Cc = {
        map: "1zqgk3",
        common: "phnqd1",
        style: "e0pfib",
        tile: "4eb2we",
        groundoverlay: "i5ajva",
        pointcollection: "lev2aj",
        marker: "zaia5e",
        symbol: "mgzxtw",
        canvablepath: "kr31i4",
        vmlcontext: "gkou3p",
        markeranimation: "3ksvjs",
        poly: "tk52fj",
        draw: "4lx0r3",
        drawbysvg: "xgcvmo",
        drawbyvml: "jka2tr",
        drawbycanvas: "bkessm",
        infowindow: "e5pyir",
        oppc: "qvhj05",
        opmb: "qj2kgk",
        menu: "g4bjik",
        control: "a4cf4q",
        navictrl: "qlcdrn",
        geoctrl: "35gaaf",
        copyrightctrl: "rfhm4m",
        citylistcontrol: "na5mth",
        scommon: "eepjds",
        local: "oofzb1",
        route: "oms5o2",
        othersearch: "lgvdc4",
        mapclick: "2l1j1f",
        buslinesearch: "p5dauj",
        hotspot: "wzjhe0",
        autocomplete: "mpagom",
        coordtrans: "dvwayj",
        coordtransutils: "ljha5m",
        convertor: "kjl3sw",
        clayer: "jrlm3o",
        pservice: "ofrtdx",
        pcommon: "p0f3iy",
        panorama: "byymz5",
        panoramaflash: "ih2kav"
    };
    A.Ly = function () {
        function a(a) {
            return e && !!c[b + a + "_" + Cc[a]]
        }

        var b = "BMap_",
            c = window.localStorage,
            e = "localStorage" in window && c !== q && c !== l;
        return {
            PY: e,
            set: function (a, g) {
                if (e) {
                    for (var i = b + a + "_", k = c.length, m; k--;) m = c.key(k), -1 < m.indexOf(i) && c
                        .removeItem(m);
                    try {
                        c.setItem(b + a + "_" + Cc[a], g)
                    } catch (n) {
                        c.clear()
                    }
                }
            },
            get: function (f) {
                return e && a(f) ? c.getItem(b + f + "_" + Cc[f]) : t
            },
            iK: a
        }
    }();

    function Ua() {
    }

    A.object.extend(Ua, {
        Mj: {
            uG: -1,
            NP: 0,
            pq: 1
        },
        qL: function () {
            var a = "canvablepath";
            if (!J() || !Rb()) Qb() || (Pb() ? a = "vmlcontext" : Rb());
            return {
                tile: ["style"],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === a ? [] : [a],
                vmlcontext: [],
                style: [],
                poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                citylistcontrol: ["autocomplete"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                convertor: [],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        C5: {},
        lG: {
            ZP: D.pa + "getmodules?v=3.0",
            uU: 5E3
        },
        CC: t,
        Xd: {
            El: {},
            Hn: [],
            bw: []
        },
        load: function (a, b, c) {
            var e = this.qb(a);
            if (e.Se == this.Mj.pq) c && b();
            else {
                if (e.Se == this.Mj.uG) {
                    this.nK(a);
                    this.AN(a);
                    var f = this;
                    f.CC == t && (f.CC = p, setTimeout(function () {
                        for (var a = [], b = 0, c = f.Xd.Hn.length; b < c; b++) {
                            var e = f.Xd.Hn[b],
                                n = "";
                            ja.Ly.iK(e) ? n = ja.Ly.get(e) : (n = "", a.push(e + "_" + Cc[
                                e]));
                            f.Xd.bw.push({
                                SM: e,
                                JE: n
                            })
                        }
                        f.CC = t;
                        f.Xd.Hn.length = 0;
                        // 0 == a.length ? f.XK() : qa(f.lG.ZP + "&mod=" + a.join(","))
                        //修改，加载本地modules下模块文件
                        if (a.length > 0) {
                            for (let i = 0; i < a.length; i++) {
                                mf = config.home + 'modules/' + a[i] + '.js';
                                qa(mf);
                            }
                        } else {
                            f.XK()
                        }
                    }, 1));
                    e.Se = this.Mj.NP
                }
                e.Xu.push(b)
            }
        },
        nK: function (a) {
            if (a && this.qL()[a])
                for (var a = this.qL()[a], b = 0; b < a.length; b++) this.nK(a[b]), this.Xd.El[a[b]] ||
                this.AN(a[b])
        },
        AN: function (a) {
            for (var b = 0; b < this.Xd.Hn.length; b++)
                if (this.Xd.Hn[b] == a) return;
            this.Xd.Hn.push(a)
        },
        h_: function (a, b) {
            var c = this.qb(a);
            try {
                eval(b)
            } catch (e) {
                return
            }
            c.Se = this.Mj.pq;
            for (var f = 0, g = c.Xu.length; f < g; f++) c.Xu[f]();
            c.Xu.length = 0
        },
        iK: function (a, b) {
            var c = this;
            c.timeout = setTimeout(function () {
                c.Xd.El[a].Se != c.Mj.pq ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            }, c.lG.uU)
        },
        qb: function (a) {
            this.Xd.El[a] || (this.Xd.El[a] = {}, this.Xd.El[a].Se = this.Mj.uG, this.Xd.El[a].Xu = []);
            return this.Xd.El[a]
        },
        remove: function (a) {
            delete this.qb(a)
        },
        sV: function (a, b) {
            for (var c = this.Xd.bw, e = p, f = 0, g = c.length; f < g; f++) "" == c[f].JE && (c[f]
                .SM == a ? c[f].JE = b : e = t);
            e && this.XK()
        },
        XK: function () {
            for (var a = this.Xd.bw, b = 0, c = a.length; b < c; b++) this.h_(a[b].SM, a[b].JE);
            this.Xd.bw.length = 0
        }
    });

    function R(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }

    R.prototype.Ub = function (a) {
        return a && a.x == this.x && a.y == this.y
    };

    function N(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }

    N.prototype.Ub = function (a) {
        return a && this.width == a.width && this.height == a.height
    };

    function mb(a, b, c) {
        var e = new XMLHttpRequest;
        e.open("POST", a, p);
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        e.timeout = 1E4;
        e.ontimeout = u();
        e.onreadystatechange = function () {
            4 === this.readyState && 200 === this.status && c && c(e.responseText)
        };
        e.send(b)
    };

    function lb(a, b) {
        a && (this.Mb = a, this.da = "spot" + lb.da++, b = b || {}, this.ih = b.text || "", this.Iv = b.offsets ? b
            .offsets.slice(0) : [5, 5, 5, 5], this.JB = b.userData || q, this.Qh = b.minZoom || q, this.Nf = b
            .maxZoom || q)
    }

    lb.da = 0;
    A.extend(lb.prototype, {
        za: function (a) {
            this.Qh == q && (this.Qh = a.M.kc);
            this.Nf == q && (this.Nf = a.M.qc)
        },
        va: function (a) {
            if (a instanceof Q || a instanceof L) this.Mb = a
        },
        ma: x("Mb"),
        fu: ca("ih"),
        TD: x("ih"),
        setUserData: ca("JB"),
        getUserData: x("JB")
    });

    function Dc() {
        this.P = q;
        this.Nb = "control";
        this.Wa = this.$J = p
    }

    A.lang.xa(Dc, A.lang.Ja, "Control");
    A.extend(Dc.prototype, {
        initialize: function (a) {
            this.P = a;
            if (this.R) return a.cb.appendChild(this.R), this.R
        },
        Me: function (a) {
            !this.R && (this.initialize && ab(this.initialize)) && (this.R = this.initialize(a));
            this.m = this.m || {
                Mg: t
            };
            this.xB();
            this.Or();
            this.R && (this.R.pr = this)
        },
        xB: function () {
            var a = this.R;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.Uu || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.m.Mg || A.U.ib(a, "BMap_noprint");
                J() || A.V(a, "contextmenu", oa)
            }
        },
        remove: function () {
            this.P = q;
            this.R && (this.R.parentNode && this.R.parentNode.removeChild(this.R), this.R = this.R.pr =
                q)
        },
        Ha: function () {
            this.R = Eb(this.P.cb, "<div unselectable='on'></div>");
            this.Wa == t && A.U.aa(this.R);
            return this.R
        },
        Or: function () {
            this.wc(this.m.anchor)
        },
        wc: function (a) {
            if (this.w2 || !$a(a) || isNaN(a) || a < Ec || 3 < a) a = this.defaultAnchor;
            this.m = this.m || {
                Mg: t
            };
            this.m.Ga = this.m.Ga || this.defaultOffset;
            var b = this.m.anchor;
            this.m.anchor = a;
            if (this.R) {
                var c = this.R,
                    e = this.m.Ga.width,
                    f = this.m.Ga.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                    case Ec:
                        c.style.top = f + "px";
                        c.style.left = e + "px";
                        break;
                    case Fc:
                        c.style.top = f + "px";
                        c.style.right = e + "px";
                        break;
                    case Gc:
                        c.style.bottom = f + "px";
                        c.style.left = e + "px";
                        break;
                    case 3:
                        c.style.bottom = f + "px", c.style.right = e + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                A.U.rc(this.R, "anchor" + c[b]);
                A.U.ib(this.R, "anchor" + c[a])
            }
        },
        wD: function () {
            return this.m.anchor
        },
        getContainer: x("R"),
        Rd: function (a) {
            a instanceof N && (this.m = this.m || {
                Mg: t
            }, this.m.Ga = new N(a.width, a.height), this.R && this.wc(this.m.anchor))
        },
        sj: function () {
            return this.m.Ga
        },
        dd: x("R"),
        show: function () {
            this.Wa != p && (this.Wa = p, this.R && A.U.show(this.R))
        },
        aa: function () {
            this.Wa != t && (this.Wa = t, this.R && A.U.aa(this.R))
        },
        isPrintable: function () {
            return !!this.m.Mg
        },
        Uc: function () {
            return !this.R && !this.P ? t : !!this.Wa
        }
    });
    var Ec = 0,
        Fc = 1,
        Gc = 2;

    function nb(a) {
        Dc.call(this);
        a = a || {};
        this.m = {
            Mg: t,
            zF: a.showZoomInfo || p,
            anchor: a.anchor,
            Ga: a.offset,
            type: a.type,
            IW: a.enableGeolocation || t
        };
        this.defaultAnchor = J() ? 3 : Ec;
        this.defaultOffset = new N(10, 10);
        this.wc(a.anchor);
        this.ln(a.type);
        this.Ef()
    }

    A.lang.xa(nb, Dc, "NavigationControl");
    A.extend(nb.prototype, {
        initialize: function (a) {
            this.P = a;
            return this.R
        },
        ln: function (a) {
            this.m.type = $a(a) && 0 <= a && 3 >= a ? a : 0
        },
        up: function () {
            return this.m.type
        },
        Ef: function () {
            var a = this;
            Ua.load("navictrl", function () {
                a.Df()
            })
        }
    });

    function Hc(a) {
        Dc.call(this);
        a = a || {};
        this.m = {
            anchor: a.anchor || Gc,
            Ga: a.offset || new N(10, 30),
            S_: a.showAddressBar !== t,
            g3: a.enableAutoLocation || t,
            KM: a.locationIcon || q
        };
        var b = this;
        this.Uu = 1200;
        b.P0 = [];
        this.ue = [];
        Ua.load("geoctrl", function () {
            (function e() {
                if (0 !== b.ue.length) {
                    var a = b.ue.shift();
                    b[a.method].apply(b, a.arguments);
                    e()
                }
            })();
            b.YP()
        });
        Sa(La)
    }

    A.lang.xa(Hc, Dc, "GeolocationControl");
    A.extend(Hc.prototype, {
        location: function () {
            this.ue.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: ea(q)
    });

    function Ic(a) {
        Dc.call(this);
        a = a || {};
        this.m = {
            Mg: t,
            anchor: a.anchor,
            Ga: a.offset
        };
        this.gc = [];
        this.defaultAnchor = Gc;
        this.defaultOffset = new N(5, 2);
        this.wc(a.anchor);
        this.$J = t;
        this.Ef()
    }

    A.lang.xa(Ic, Dc, "CopyrightControl");
    A.object.extend(Ic.prototype, {
        initialize: function (a) {
            this.P = a;
            return this.R
        },
        Aw: function (a) {
            if (a && $a(a.id) && !isNaN(a.id)) {
                var b = {
                        bounds: q,
                        content: ""
                    },
                    c;
                for (c in a) b[c] = a[c];
                if (a = this.ym(a.id))
                    for (var e in b) a[e] = b[e];
                else this.gc.push(b)
            }
        },
        ym: function (a) {
            for (var b = 0, c = this.gc.length; b < c; b++)
                if (this.gc[b].id == a) return this.gc[b]
        },
        DD: x("gc"),
        YE: function (a) {
            for (var b = 0, c = this.gc.length; b < c; b++) this.gc[b].id == a && (r = this.gc.splice(b,
                1), b--, c = this.gc.length)
        },
        Ef: function () {
            var a = this;
            Ua.load("copyrightctrl", function () {
                a.Df()
            })
        }
    });

    function pb(a) {
        Dc.call(this);
        a = a || {};
        this.m = {
            Mg: t,
            size: a.size || new N(150, 150),
            padding: 5,
            eb: a.isOpen === p ? p : t,
            h1: 4,
            Ga: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new N(0, 0);
        this.Hq = this.Iq = 13;
        this.wc(a.anchor);
        this.He(this.m.size);
        this.Ef()
    }

    A.lang.xa(pb, Dc, "OverviewMapControl");
    A.extend(pb.prototype, {
        initialize: function (a) {
            this.P = a;
            return this.R
        },
        wc: function (a) {
            Dc.prototype.wc.call(this, a)
        },
        ve: function () {
            this.ve.ro = p;
            this.m.eb = !this.m.eb;
            this.R || (this.ve.ro = t)
        },
        He: function (a) {
            a instanceof N || (a = new N(150, 150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.m.size = a
        },
        Cb: function () {
            return this.m.size
        },
        eb: function () {
            return this.m.eb
        },
        Ef: function () {
            var a = this;
            Ua.load("control", function () {
                a.Df()
            })
        }
    });

    function Jc(a) {
        Dc.call(this);
        a = a || {};
        this.defaultAnchor = Ec;
        this.qV = a.canCheckSize === t ? t : p;
        this.lj = "";
        this.defaultOffset = new N(10, 10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.m = {
            Mg: t,
            Ga: a.offset || this.defaultOffset,
            anchor: a.anchor || this.defaultAnchor,
            expand: !!a.expand
        };
        a.onChangeBefore && ab(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && ab(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && ab(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.wc(a.anchor);
        this.Ef()
    }

    A.lang.xa(Jc, Dc, "CityListControl");
    A.object.extend(Jc.prototype, {
        initialize: function (a) {
            this.P = a;
            return this.R
        },
        Ef: function () {
            var a = this;
            Ua.load("citylistcontrol", function () {
                a.Df()
            }, p)
        }
    });

    function ob(a) {
        Dc.call(this);
        a = a || {};
        this.m = {
            Mg: t,
            color: "black",
            jd: "metric",
            Ga: a.offset
        };
        this.defaultAnchor = Gc;
        this.defaultOffset = new N(81, 18);
        this.wc(a.anchor);
        this.Zh = {
            metric: {
                name: "metric",
                pK: 1,
                eM: 1E3,
                JO: "\u7c73",
                KO: "\u516c\u91cc"
            },
            us: {
                name: "us",
                pK: 3.2808,
                eM: 5280,
                JO: "\u82f1\u5c3a",
                KO: "\u82f1\u91cc"
            }
        };
        this.Zh[this.m.jd] || (this.m.jd = "metric");
        this.TI = q;
        this.oI = {};
        this.Ef()
    }

    A.lang.xa(ob, Dc, "ScaleControl");
    A.object.extend(ob.prototype, {
        initialize: function (a) {
            this.P = a;
            return this.R
        },
        Wk: function (a) {
            this.m.color = a + ""
        },
        C3: function () {
            return this.m.color
        },
        vF: function (a) {
            this.m.jd = this.Zh[a] && this.Zh[a].name || this.m.jd
        },
        eY: function () {
            return this.m.jd
        },
        Ef: function () {
            var a = this;
            Ua.load("control", function () {
                a.Df()
            })
        }
    });
    var Kc = 0;

    function qb(a) {
        Dc.call(this);
        a = a || {};
        this.defaultAnchor = Fc;
        this.defaultOffset = new N(10, 10);
        this.m = {
            Mg: t,
            vh: [Oa, bb, Ta, Ra],
            aW: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || Kc,
            Ga: a.offset || this.defaultOffset,
            MW: p
        };
        this.wc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.m.vh = a.mapTypes.slice(0));
        this.Ef()
    }

    A.lang.xa(qb, Dc, "MapTypeControl");
    A.object.extend(qb.prototype, {
        initialize: function (a) {
            this.P = a;
            return this.R
        },
        My: function (a) {
            this.P.co = a
        },
        Ef: function () {
            var a = this;
            Ua.load("control", function () {
                a.Df()
            }, p)
        }
    });

    function Lc(a) {
        Dc.call(this);
        a = a || {};
        this.m = {
            Mg: t,
            Ga: a.offset,
            anchor: a.anchor
        };
        this.Wi = t;
        this.gw = q;
        this.yI = new Mc({
            Ye: "api"
        });
        this.zI = new Nc(q, {
            Ye: "api"
        });
        this.defaultAnchor = Fc;
        this.defaultOffset = new N(10, 10);
        this.wc(a.anchor);
        this.Ef();
        Sa(xa)
    }

    A.lang.xa(Lc, Dc, "PanoramaControl");
    A.extend(Lc.prototype, {
        initialize: function (a) {
            this.P = a;
            return this.R
        },
        Ef: function () {
            var a = this;
            Ua.load("control", function () {
                a.Df()
            })
        }
    });

    function Oc(a) {
        A.lang.Ja.call(this);
        this.m = {
            cb: q,
            cursor: "default"
        };
        this.m = A.extend(this.m, a);
        this.Nb = "contextmenu";
        this.P = q;
        this.Da = [];
        this.Pf = [];
        this.Ke = [];
        this.Vw = this.ss = q;
        this.Ph = t;
        var b = this;
        Ua.load("menu", function () {
            b.ob()
        })
    }

    A.lang.xa(Oc, A.lang.Ja, "ContextMenu");
    A.object.extend(Oc.prototype, {
        za: function (a, b) {
            this.P = a;
            this.Jl = b || q
        },
        remove: function () {
            this.P = this.Jl = q
        },
        es: function (a) {
            if (a && !("menuitem" != a.Nb || "" == a.ih || 0 >= a.fj)) {
                for (var b = 0, c = this.Da.length; b < c; b++)
                    if (this.Da[b] === a) return;
                this.Da.push(a);
                this.Pf.push(a)
            }
        },
        removeItem: function (a) {
            if (a && "menuitem" == a.Nb) {
                for (var b = 0, c = this.Da.length; b < c; b++) this.Da[b] === a && (this.Da[b]
                    .remove(), this.Da.splice(b, 1), c--);
                b = 0;
                for (c = this.Pf.length; b < c; b++) this.Pf[b] === a && (this.Pf[b].remove(), this.Pf
                    .splice(b, 1), c--)
            }
        },
        UB: function () {
            this.Da.push({
                Nb: "divider",
                Uj: this.Ke.length
            });
            this.Ke.push({
                U: q
            })
        },
        aF: function (a) {
            if (this.Ke[a]) {
                for (var b = 0, c = this.Da.length; b < c; b++) this.Da[b] && ("divider" == this.Da[b]
                    .Nb && this.Da[b].Uj == a) && (this.Da.splice(b, 1), c--), this.Da[b] && (
                    "divider" == this.Da[b].Nb && this.Da[b].Uj > a) && this.Da[b].Uj--;
                this.Ke.splice(a, 1)
            }
        },
        dd: x("R"),
        show: function () {
            this.Ph != p && (this.Ph = p)
        },
        aa: function () {
            this.Ph != t && (this.Ph = t)
        },
        w_: function (a) {
            a && (this.m.cursor = a)
        },
        getItem: function (a) {
            return this.Pf[a]
        }
    });
    var Pc = I.ua + "menu_zoom_in.png",
        Qc = I.ua + "menu_zoom_out.png";

    function Rc(a, b, c) {
        if (a && ab(b)) {
            A.lang.Ja.call(this);
            this.m = {
                width: 100,
                id: "",
                Lm: ""
            };
            c = c || {};
            this.m.width = 1 * c.width ? c.width : 100;
            this.m.id = c.id ? c.id : "";
            this.m.Lm = c.iconUrl ? c.iconUrl : "";
            this.ih = a + "";
            this.wz = b;
            this.P = q;
            this.Nb = "menuitem";
            this.Vr = this.yv = this.R = this.Kh = q;
            this.Nh = p;
            var e = this;
            Ua.load("menu", function () {
                e.ob()
            })
        }
    }

    A.lang.xa(Rc, A.lang.Ja, "MenuItem");
    A.object.extend(Rc.prototype, {
        za: function (a, b) {
            this.P = a;
            this.Kh = b
        },
        remove: function () {
            this.P = this.Kh = q
        },
        fu: function (a) {
            a && (this.ih = a + "")
        },
        Wb: function (a) {
            a && (this.m.Lm = a)
        },
        dd: x("R"),
        enable: function () {
            this.Nh = p
        },
        disable: function () {
            this.Nh = t
        }
    });

    function ib(a, b) {
        a && !b && (b = a);
        this.Ne = this.be = this.Te = this.ee = this.Xl = this.Hl = q;
        a && (this.Xl = new Q(a.lng, a.lat), this.Hl = new Q(b.lng, b.lat), this.Te = a.lng, this.ee = a.lat, this
            .Ne = b.lng, this.be = b.lat)
    }

    A.object.extend(ib.prototype, {
        Aj: function () {
            return !this.Xl || !this.Hl
        },
        Ub: function (a) {
            return !(a instanceof ib) || this.Aj() ? t : this.Ae().Ub(a.Ae()) && this.sf().Ub(a.sf())
        },
        Ae: x("Xl"),
        sf: x("Hl"),
        HV: function (a) {
            return !(a instanceof ib) || this.Aj() || a.Aj() ? t : a.Te > this.Te && a.Ne < this.Ne && a
                .ee > this.ee && a.be < this.be
        },
        Qb: function () {
            return this.Aj() ? q : new Q((this.Te + this.Ne) / 2, (this.ee + this.be) / 2)
        },
        ot: function (a) {
            if (!(a instanceof ib) || Math.max(a.Te, a.Ne) < Math.min(this.Te, this.Ne) || Math.min(a
                .Te, a.Ne) > Math.max(this.Te, this.Ne) || Math.max(a.ee, a.be) < Math.min(this.ee,
                this.be) || Math.min(a.ee, a.be) > Math.max(this.ee, this.be)) return q;
            var b = Math.max(this.Te, a.Te),
                c = Math.min(this.Ne, a.Ne),
                e = Math.max(this.ee, a.ee),
                a = Math.min(this.be, a.be);
            return new ib(new Q(b, e), new Q(c, a))
        },
        ns: function (a) {
            return !(a instanceof Q || a instanceof L) || this.Aj() ? t : a.lng >= this.Te && a.lng <=
                this.Ne && a.lat >= this.ee && a.lat <= this.be
        },
        extend: function (a) {
            if (a instanceof Q || a instanceof L) {
                var b = a.lng,
                    a = a.lat;
                this.Xl || (this.Xl = new Q(0, 0));
                this.Hl || (this.Hl = new Q(0, 0));
                if (!this.Te || this.Te > b) this.Xl.lng = this.Te = b;
                if (!this.Ne || this.Ne < b) this.Hl.lng = this.Ne = b;
                if (!this.ee || this.ee > a) this.Xl.lat = this.ee = a;
                if (!this.be || this.be < a) this.Hl.lat = this.be = a
            }
        },
        MF: function () {
            return this.Aj() ? new Q(0, 0) : new Q(Math.abs(this.Ne - this.Te), Math.abs(this.be - this
                .ee))
        }
    });

    function Q(a, b) {
        isNaN(a) && (a = Ob(a), a = isNaN(a) ? 0 : a);
        cb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Ob(b), b = isNaN(b) ? 0 : b);
        cb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }

    Q.mE = function (a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    Q.prototype.Ub = function (a) {
        return a && this.lat == a.lat && this.lng == a.lng
    };

    function L(a, b) {
        isNaN(a) && (a = Ob(a), a = isNaN(a) ? 0 : a);
        cb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Ob(b), b = isNaN(b) ? 0 : b);
        cb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b;
        this.Ye = "inner"
    }

    L.mE = function (a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    L.prototype.Ub = function (a) {
        return a && this.lat == a.lat && this.lng == a.lng
    };

    function Sc() {
    }

    Sc.prototype.Hg = function () {
        ba("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };
    Sc.prototype.Ej = function () {
        ba("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };

    function Tc() {
    };
    var hb = {
        rK: function (a, b, c) {
            Ua.load("coordtransutils", function () {
                hb.SU(a, b, c)
            }, p)
        },
        qK: function (a, b, c) {
            Ua.load("coordtransutils", function () {
                hb.RU(a, b, c)
            }, p)
        }
    };

    function Uc() {
        this.Qa = [];
        var a = this;
        Ua.load("convertor", function () {
            a.WP()
        })
    }

    A.xa(Uc, A.lang.Ja, "Convertor");
    A.extend(Uc.prototype, {
        translate: function (a, b, c, e) {
            this.Qa.push({
                method: "translate",
                arguments: [a, b, c, e]
            })
        }
    });
    V(Uc.prototype, {
        translate: Uc.prototype.translate
    });

    function T() {
    }

    T.prototype = new Sc;
    A.extend(T, {
        pP: 6370996.81,
        yG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Lu: [86, 60, 45, 30, 15, 0],
        vP: [
            [1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -
                187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -
                0.03801003308653, 1.73379812E7
            ],
            [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -
                1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887,
                2.28786674699375, 1.026014486E7
            ],
            [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277,
                7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584,
                0.32710905363475, 6856817.37
            ],
            [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744,
                0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -
                0.04625736007561, 4482777.06
            ],
            [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -
                2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -
                0.00466043876332, 2555164.4
            ],
            [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6,
                -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5
            ]
        ],
        vG: [
            [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340,
                26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240,
                1800819912950474, 82.5
            ],
            [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9,
                1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9,
                9.133119359512032E8, 67.5
            ],
            [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7,
                7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7,
                8477230.501135234, 52.5
            ],
            [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245,
                992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312,
                144416.9293806241, 37.5
            ],
            [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394,
                6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645,
                1405.483844121726, 22.5
            ],
            [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718,
                0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284,
                0.37238884252424, 7.45
            ]
        ],
        I3: function (a, b) {
            if (!a || !b) return 0;
            var c, e, a = this.hc(a);
            if (!a) return 0;
            c = this.el(a.lng);
            e = this.el(a.lat);
            b = this.hc(b);
            return !b ? 0 : this.Md(c, this.el(b.lng), e, this.el(b.lat))
        },
        Ek: function (a, b) {
            if (!a || !b) return 0;
            a.lng = this.KD(a.lng, -180, 180);
            a.lat = this.PD(a.lat, -74, 74);
            b.lng = this.KD(b.lng, -180, 180);
            b.lat = this.PD(b.lat, -74, 74);
            return this.Md(this.el(a.lng), this.el(b.lng), this.el(a.lat), this.el(b.lat))
        },
        hc: function (a) {
            if (a === q || a === l) return new L(0, 0);
            var b, c;
            b = new L(Math.abs(a.lng), Math.abs(a.lat));
            for (var e = 0; e < this.yG.length; e++)
                if (b.lat >= this.yG[e]) {
                    c = this.vP[e];
                    break
                }
            a = this.sK(a, c);
            return a = new L(a.lng, a.lat)
        },
        Ya: function (a) {
            if (a === q || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)
                return new L(0, 0);
            var b, c;
            a.lng = this.KD(a.lng, -180, 180);
            a.lat = this.PD(a.lat, -85, 85);
            b = new L(a.lng, a.lat);
            for (var e = 0; e < this.Lu.length; e++)
                if (b.lat >= this.Lu[e]) {
                    c = this.vG[e];
                    break
                }
            if (!c)
                for (e = 0; e < this.Lu.length; e++)
                    if (b.lat <= -this.Lu[e]) {
                        c = this.vG[e];
                        break
                    }
            a = this.sK(a, c);
            return a = new L(a.lng, a.lat)
        },
        sK: function (a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng),
                    e = Math.abs(a.lat) / b[9],
                    e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[
                        7] * e * e * e * e * e + b[8] * e * e * e * e * e * e,
                    c = c * (0 > a.lng ? -1 : 1),
                    e = e * (0 > a.lat ? -1 : 1);
                return new L(c, e)
            }
        },
        Md: function (a, b, c, e) {
            return this.pP * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(
                b - a))
        },
        el: function (a) {
            return Math.PI * a / 180
        },
        l6: function (a) {
            return 180 * a / Math.PI
        },
        PD: function (a, b, c) {
            b != q && (a = Math.max(a, b));
            c != q && (a = Math.min(a, c));
            return a
        },
        KD: function (a, b, c) {
            for (; a > c;) a -= c - b;
            for (; a < b;) a += c - b;
            return a
        }
    });
    A.extend(T.prototype, {
        ri: function (a) {
            return T.Ya(a)
        },
        Hg: function (a) {
            a = T.Ya(a);
            return new R(a.lng, a.lat)
        },
        xh: function (a) {
            return T.hc(a)
        },
        Ej: function (a) {
            a = new L(a.x, a.y);
            a = T.hc(a);
            return new Q(a.lng, a.lat)
        },
        vc: function (a, b, c, e, f) {
            if (a) return a = this.ri(a, f), b = this.$b(b), new R(Math.round((a.lng - c.lng) / b + e
                .width / 2), Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        hZ: function (a, b, c, e) {
            if (a) return b = this.$b(b), new R(Math.round((a.lng - c.lng) / b + e.width / 2), Math
                .round((c.lat - a.lat) / b + e.height / 2))
        },
        bc: function (a, b, c, e, f) {
            if (a) return b = this.$b(b), this.xh(new L(c.lng + b * (a.x - e.width / 2), c.lat - b * (a
                .y - e.height / 2)), f)
        },
        $b: function (a) {
            return Math.pow(2, 18 - a)
        },
        UN: ca("Ma")
    });

    function kb() {
        this.lj = "bj"
    }

    kb.prototype = new T;
    A.extend(kb.prototype, {
        ri: function (a, b) {
            return this.HQ(b, T.Ya(a))
        },
        xh: function (a, b) {
            return T.hc(this.IQ(b, a))
        },
        lngLatToPointFor3D: function (a, b) {
            var c = this,
                e = T.Ya(a);
            Ua.load("coordtrans", function () {
                var a = Tc.ND(c.lj || "bj", e),
                    a = new R(a.x, a.y);
                b && b(a)
            }, p)
        },
        pointToLngLatFor3D: function (a, b) {
            var c = this,
                e = new Q(a.x, a.y);
            Ua.load("coordtrans", function () {
                var a = Tc.LD(c.lj || "bj", e),
                    a = new Q(a.lng, a.lat),
                    a = T.hc(a);
                b && b(a)
            }, p)
        },
        HQ: function (a, b) {
            if (Ua.qb("coordtrans").Se == Ua.Mj.pq) {
                var c = Tc.ND(a || "bj", b);
                return new Q(c.x, c.y)
            }
            Ua.load("coordtrans", u());
            return new Q(0, 0)
        },
        IQ: function (a, b) {
            if (Ua.qb("coordtrans").Se == Ua.Mj.pq) {
                var c = Tc.LD(a || "bj", b);
                return new Q(c.lng, c.lat)
            }
            Ua.load("coordtrans", u());
            return new Q(0, 0)
        },
        $b: function (a) {
            return Math.pow(2, 20 - a)
        },
        UN: ca("Ma")
    });

    function Vc() {
        this.Nb = "overlay"
    }

    A.lang.xa(Vc, A.lang.Ja, "Overlay");
    Vc.Kk = function (a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    };
    A.extend(Vc.prototype, {
        Me: function (a) {
            if (!this.ca && ab(this.initialize) && (this.ca = this.initialize(a))) this.ca.style
                .WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function () {
            ba("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        draw: function () {
            ba("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function () {
            this.ca && this.ca.parentNode && this.ca.parentNode.removeChild(this.ca);
            this.ca = q;
            this.dispatchEvent(new P("onremove"))
        },
        aa: function () {
            this.ca && A.U.aa(this.ca)
        },
        show: function () {
            this.ca && A.U.show(this.ca)
        },
        Uc: function () {
            return !this.ca || "none" == this.ca.style.display || "hidden" == this.ca.style.visibility ?
                t : p
        }
    });
    D.df(function (a) {
        function b(a, b) {
            var c = H("div"),
                i = c.style;
            i.position = "absolute";
            i.top = i.left = i.width = i.height = "0";
            i.zIndex = b;
            a.appendChild(c);
            return c
        }

        var c = a.ba;
        c.Wc = a.Wc = b(a.platform, 200);
        a.ce.pD = b(c.Wc, 800);
        a.ce.EE = b(c.Wc, 700);
        a.ce.cL = b(c.Wc, 600);
        a.ce.wE = b(c.Wc, 500);
        a.ce.OM = b(c.Wc, 400);
        a.ce.PM = b(c.Wc, 300);
        a.ce.VO = b(c.Wc, 201);
        a.ce.Gt = b(c.Wc, 200)
    });

    function jb() {
        A.lang.Ja.call(this);
        Vc.call(this);
        this.map = q;
        this.Wa = p;
        this.Fb = q;
        this.kH = 0
    }

    A.lang.xa(jb, Vc, "OverlayInternal");
    A.extend(jb.prototype, {
        initialize: function (a) {
            this.map = a;
            A.lang.Ja.call(this, this.da);
            return q
        },
        sx: x("map"),
        draw: u(),
        Oj: u(),
        remove: function () {
            this.map = q;
            A.lang.Yw(this.da);
            Vc.prototype.remove.call(this)
        },
        aa: function () {
            this.Wa !== t && (this.Wa = t)
        },
        show: function () {
            this.Wa !== p && (this.Wa = p)
        },
        Uc: function () {
            return !this.ca ? t : !!this.Wa
        },
        Ta: x("ca"),
        TN: function (a) {
            var a = a || {},
                b;
            for (b in a) this.K[b] = a[b]
        },
        cq: ca("zIndex"),
        qj: function () {
            this.K.qj = p
        },
        kW: function () {
            this.K.qj = t
        },
        bm: ca("og"),
        Pp: function () {
            this.og = q
        }
    });

    function Wc() {
        this.map = q;
        this.ta = {};
        this.Je = []
    }

    D.df(function (a) {
        var b = new Wc;
        b.map = a;
        a.ta = b.ta;
        a.Je = b.Je;
        a.addEventListener("load", function (a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function (a) {
            b.draw(a)
        });
        A.ga.oa && 8 > A.ga.oa || "BackCompat" === document.compatMode ? a.addEventListener("zoomend",
            function (a) {
                setTimeout(function () {
                    b.draw(a)
                }, 20)
            }) : a.addEventListener("zoomend", function (a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function (a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function (a) {
            a = a.target;
            if (a instanceof jb) b.ta[a.da] || (b.ta[a.da] = a);
            else {
                for (var e = t, f = 0, g = b.Je.length; f < g; f++)
                    if (b.Je[f] === a) {
                        e = p;
                        break
                    }
                e || b.Je.push(a)
            }
        });
        a.addEventListener("removeoverlay", function (a) {
            a = a.target;
            if (a instanceof jb) delete b.ta[a.da];
            else
                for (var e = 0, f = b.Je.length; e < f; e++)
                    if (b.Je[e] === a) {
                        b.Je.splice(e, 1);
                        break
                    }
        });
        a.addEventListener("clearoverlays", function () {
            this.Mc();
            for (var a in b.ta) b.ta[a].K.qj && (b.ta[a].remove(), delete b.ta[a]);
            a = 0;
            for (var e = b.Je.length; a < e; a++) b.Je[a].enableMassClear !== t && (b.Je[a]
                .remove(), b.Je[a] = q, b.Je.splice(a, 1), a--, e--)
        });
        a.addEventListener("infowindowopen", function () {
            var a = this.Fb;
            a && (A.U.aa(a.Cc), A.U.aa(a.cc))
        });
        a.addEventListener("movestart", function () {
            this.qh() && this.qh().ZI()
        });
        a.addEventListener("moveend", function () {
            this.qh() && this.qh().NI()
        })
    });
    Wc.prototype.draw = function (a) {
        if (D.tq) {
            var b = D.tq.Xs(this.map);
            "canvas" === b.Nb && b.canvas && b.CQ(b.canvas.getContext("2d"))
        }
        for (var c in this.ta) this.ta[c].draw(a);
        A.oc.Pb(this.Je, function (a) {
            a.draw()
        });
        this.map.ba.wb && this.map.ba.wb.va();
        D.tq && b.rF()
    };

    function Xc(a) {
        jb.call(this);
        a = a || {};
        this.K = {
            strokeColor: a.strokeColor || "#3a6bdb",
            tc: a.strokeWeight || 5,
            zd: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            qj: a.enableMassClear === t ? t : p,
            Hk: q,
            Dm: q,
            pf: a.enableEditing === p ? p : t,
            TM: 5,
            N0: t,
            mf: a.enableClicking === t ? t : p,
            oi: a.icons && 0 < a.icons.length ? a.icons : q,
            fX: a.geodesic === p ? p : t,
            AE: a.linkRight === p ? p : t
        };
        0 >= this.K.tc && (this.K.tc = 5);
        if (0 > this.K.zd || 1 < this.K.zd) this.K.zd = 0.65;
        if (0 > this.K.zg || 1 < this.K.zg) this.K.zg = 0.65;
        "solid" != this.K.strokeStyle && "dashed" != this.K.strokeStyle && (this.K.strokeStyle = "solid");
        this.ca = q;
        this.Tu = new ib(0, 0);
        this.kf = [];
        this.uc = [];
        this.Xa = {}
    }

    A.lang.xa(Xc, jb, "Graph");
    Xc.nx = function (a) {
        var b = [];
        if (!a) return b;
        cb(a) && A.oc.Pb(a.split(";"), function (a) {
            a = a.split(",");
            b.push(new Q(a[0], a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    };
    Xc.PE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    A.extend(Xc.prototype, {
        initialize: function (a) {
            this.map = a;
            return q
        },
        draw: u(),
        Nr: function (a) {
            this.kf.length = 0;
            this.ja = Xc.nx(a).slice(0);
            this.Hh()
        },
        Sd: function (a) {
            this.Nr(a)
        },
        Hh: function () {
            if (this.ja) {
                var a = this;
                a.Tu = new ib;
                A.oc.Pb(this.ja, function (b) {
                    a.Tu.extend(b)
                })
            }
        },
        $e: x("ja"),
        kn: function (a, b) {
            b && this.ja[a] && (this.kf.length = 0, this.ja[a] = new Q(b.lng, b.lat), this.Hh())
        },
        setStrokeColor: function (a) {
            this.K.strokeColor = a
        },
        XX: function () {
            return this.K.strokeColor
        },
        bq: function (a) {
            0 < a && (this.K.tc = a)
        },
        GL: function () {
            return this.K.tc
        },
        $p: function (a) {
            a == l || (1 < a || 0 > a) || (this.K.zd = a)
        },
        YX: function () {
            return this.K.zd
        },
        $t: function (a) {
            1 < a || 0 > a || (this.K.zg = a)
        },
        sX: function () {
            return this.K.zg
        },
        aq: function (a) {
            "solid" != a && "dashed" != a || (this.K.strokeStyle = a)
        },
        FL: function () {
            return this.K.strokeStyle
        },
        setFillColor: function (a) {
            this.K.fillColor = a || ""
        },
        rX: function () {
            return this.K.fillColor
        },
        le: x("Tu"),
        remove: function () {
            this.map && this.map.removeEventListener("onmousemove", this.vv);
            jb.prototype.remove.call(this);
            this.kf.length = 0
        },
        pf: function () {
            if (!(2 > this.ja.length)) {
                this.K.pf = p;
                var a = this;
                Ua.load("poly", function () {
                    a.dm()
                }, p)
            }
        },
        jW: function () {
            this.K.pf = t;
            var a = this;
            Ua.load("poly", function () {
                a.kj()
            }, p)
        },
        oX: function () {
            return this.K.pf
        },
        vX: function () {
            for (var a = [], b = 0; b < this.ja.length - 1; b++) var c = this.lV(this.ja[b], this.ja[b +
                1]),
                a = a.concat(c);
            return a = a.concat(this.ja[this.ja.length - 1])
        },
        lV: function (a, b) {
            if (a.Ub(b)) return [a];
            var c = T.Md(U(a.lng), U(a.lat), U(b.lng), U(b.lat)),
                c = T.Ek(a, b);
            if (25E4 > c) return [a];
            var e = [],
                c = Math.round(c / 15E4),
                f = this.cK(a, b);
            e.push(a);
            for (var g = 0; g < c; g++) {
                var i = this.dK(a, b, g / c, f);
                e.push(i)
            }
            e.push(b);
            return e
        },
        dK: function (a, b, c, e) {
            var f = U(a.lat),
                g = U(b.lat),
                a = U(a.lng),
                i = U(b.lng),
                b = Math.sin((1 - c) * e) / Math.sin(e),
                c = Math.sin(c * e) / Math.sin(e),
                e = b * Math.cos(f) * Math.cos(a) + c * Math.cos(g) * Math.cos(i),
                a = b * Math.cos(f) * Math.sin(a) + c * Math.cos(g) * Math.sin(i);
            return new Q(180 * (Math.atan2(a, e) / Math.PI), 180 * (Math.atan2(b * Math.sin(f) + c *
                Math.sin(g), Math.sqrt(Math.pow(e, 2) + Math.pow(a, 2))) / Math.PI))
        },
        cK: function (a, b) {
            var c = U(a.lat),
                e = U(b.lat);
            return Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(Math.abs(
                U(b.lng) - U(a.lng))))
        }
    });

    function Zc(a) {
        jb.call(this);
        this.ca = this.map = q;
        this.K = {
            width: 0,
            height: 0,
            Ga: new N(0, 0),
            opacity: 1,
            background: "transparent",
            Vx: 1,
            BM: "#000",
            ZY: "solid",
            point: q
        };
        this.TN(a);
        this.point = this.K.point
    }

    A.lang.xa(Zc, jb, "Division");
    A.extend(Zc.prototype, {
        Oj: function () {
            var a = this.K,
                b = this.content,
                c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.Vx + "px " + a.ZY + " " + a.BM + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.ca = Eb(this.map.Wf().EE, c.join(""))
        },
        initialize: function (a) {
            this.map = a;
            this.Oj();
            this.ca && A.V(this.ca, J() ? "touchstart" : "mousedown", function (a) {
                na(a)
            });
            return this.ca
        },
        draw: function () {
            var a = this.map.cf(this.K.point);
            this.K.Ga = new N(-Math.round(this.K.width / 2) - Math.round(this.K.Vx), -Math.round(this.K
                .height / 2) - Math.round(this.K.Vx));
            this.ca.style.left = a.x + this.K.Ga.width + "px";
            this.ca.style.top = a.y + this.K.Ga.height + "px"
        },
        ma: function () {
            return this.K.point
        },
        W1: function () {
            return this.map.oo(this.ma())
        },
        va: function (a) {
            this.K.point = a;
            this.draw()
        },
        x_: function (a, b) {
            this.K.width = Math.round(a);
            this.K.height = Math.round(b);
            this.ca && (this.ca.style.width = this.K.width + "px", this.ca.style.height = this.K
                .height + "px", this.draw())
        }
    });

    function $c(a, b, c) {
        a && b && (this.imageUrl = a, this.size = b, a = new N(Math.floor(b.width / 2), Math.floor(b.height / 2)),
            c = c || {}, a = c.anchor || a, b = c.imageOffset || new N(0, 0), this.imageSize = c.imageSize, this
            .anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this
            .printImageUrl = c.printImageUrl || "")
    }

    A.extend($c.prototype, {
        VN: function (a) {
            a && (this.imageUrl = a)
        },
        O_: function (a) {
            a && (this.printImageUrl = a)
        },
        He: function (a) {
            a && (this.size = new N(a.width, a.height))
        },
        wc: function (a) {
            a && (this.anchor = new N(a.width, a.height))
        },
        au: function (a) {
            a && (this.imageOffset = new N(a.width, a.height))
        },
        C_: function (a) {
            a && (this.infoWindowAnchor = new N(a.width, a.height))
        },
        z_: function (a) {
            a && (this.imageSize = new N(a.width, a.height))
        },
        toString: ea("Icon")
    });

    function ad(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new N(0, 0),
                fillColor: b.fillColor || "#000",
                zg: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                zd: b.strokeOpacity || 1,
                tc: b.strokeWeight
            };
            this.Nb = "number" === typeof a ? a : "UserDefined";
            this.Mi = this.style.anchor;
            this.ur = new N(0, 0);
            this.anchor = q;
            this.jB = a;
            var c = this;
            Ua.load("symbol", function () {
                c.Mn()
            }, p)
        }
    }

    A.extend(ad.prototype, {
        setPath: ca("jB"),
        setAnchor: function (a) {
            this.Mi = this.style.anchor = a
        },
        setRotation: function (a) {
            this.style.rotation = a
        },
        setScale: function (a) {
            this.style.scale = a
        },
        setStrokeWeight: function (a) {
            this.style.tc = a
        },
        setStrokeColor: function (a) {
            a = A.ks.sC(a, this.style.zd);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function (a) {
            this.style.zd = a
        },
        setFillOpacity: function (a) {
            this.style.zg = a
        },
        setFillColor: function (a) {
            this.style.fillColor = a
        }
    });

    function bd(a, b, c, e) {
        a && (this.Nv = {}, this.aL = e ? !!e : t, this.ad = [], this.g0 = a instanceof ad ? a : q, this.EI = b ===
        l ? p : !!(b.indexOf("%") + 1), this.jk = isNaN(parseFloat(b)) ? 1 : this.EI ? parseFloat(b) / 100 :
            parseFloat(b), this.FI = !!(c.indexOf("%") + 1), this.repeat = c != l ? this.FI ? parseFloat(c) /
            100 : parseFloat(c) : 0)
    };

    function cd(a, b) {
        A.lang.Ja.call(this);
        this.content = a;
        this.map = q;
        b = b || {};
        this.K = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            Ga: b.offset || new N(0, 0),
            title: b.title || "",
            GE: b.maxContent || "",
            oh: b.enableMaximize || t,
            Ms: b.enableAutoPan === t ? t : p,
            ZC: b.enableCloseOnClick === t ? t : p,
            margin: b.margin || [10, 10, 40, 10],
            oC: b.collisions || [
                [10, 10],
                [10, 10],
                [10, 10],
                [10, 10]
            ],
            sY: t,
            xZ: b.onClosing || ea(p),
            UK: t,
            dD: b.enableParano === p ? p : t,
            message: b.message,
            gD: b.enableSearchTool === p ? p : t,
            Ex: b.headerContent || "",
            $C: b.enableContentScroll || t
        };
        if (0 != this.K.width && (220 > this.K.width && (this.K.width = 220), 730 < this.K.width)) this.K.width =
            730;
        if (0 != this.K.height && (60 > this.K.height && (this.K.height = 60), 650 < this.K.height)) this.K.height =
            650;
        if (0 != this.K.maxWidth && (220 > this.K.maxWidth && (this.K.maxWidth = 220), 730 < this.K.maxWidth)) this
            .K.maxWidth = 730;
        this.me = t;
        this.Hi = I.ua;
        this.xb = q;
        var c = this;
        Ua.load("infowindow", function () {
            c.ob()
        })
    }

    A.lang.xa(cd, A.lang.Ja, "InfoWindow");
    A.extend(cd.prototype, {
        setWidth: function (a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a =
                730)), this.K.width = a)
        },
        setHeight: function (a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a =
                650)), this.K.height = a)
        },
        ZN: function (a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a =
                730)), this.K.maxWidth = a)
        },
        Hc: function (a) {
            this.K.title = a
        },
        getTitle: function () {
            return this.K.title
        },
        Pc: ca("content"),
        Dk: x("content"),
        cu: function (a) {
            this.K.GE = a + ""
        },
        re: u(),
        Ms: function () {
            this.K.Ms = p
        },
        disableAutoPan: function () {
            this.K.Ms = t
        },
        enableCloseOnClick: function () {
            this.K.ZC = p
        },
        disableCloseOnClick: function () {
            this.K.ZC = t
        },
        oh: function () {
            this.K.oh = p
        },
        $w: function () {
            this.K.oh = t
        },
        show: function () {
            this.Wa = p
        },
        aa: function () {
            this.Wa = t
        },
        close: function () {
            this.aa()
        },
        Zx: function () {
            this.me = p
        },
        restore: function () {
            this.me = t
        },
        Uc: function () {
            return this.eb()
        },
        eb: ea(t),
        ma: function () {
            if (this.xb && this.xb.ma) return this.xb.ma()
        },
        sj: function () {
            return this.K.Ga
        }
    });
    Na.prototype.Vc = function (a, b) {
        if (a instanceof cd && (b instanceof Q || b instanceof L)) {
            var c = this.ba;
            c.Pm ? c.Pm.va(b) : (c.Pm = new W(b, {
                icon: new $c(I.ua + "blank.gif", {
                    width: 1,
                    height: 1
                }),
                offset: new N(0, 0),
                clickable: t
            }), c.Pm.CR = 1);
            this.Ra(c.Pm);
            c.Pm.Vc(a)
        }
    };
    Na.prototype.Mc = function () {
        var a = this.ba.wb || this.ba.yl;
        a && a.xb && a.xb.Mc()
    };
    jb.prototype.Vc = function (a) {
        this.map && (this.map.Mc(), a.Wa = p, this.map.ba.yl = a, a.xb = this, A.lang.Ja.call(a, a.da))
    };
    jb.prototype.Mc = function () {
        this.map && this.map.ba.yl && (this.map.ba.yl.Wa = t, A.lang.Yw(this.map.ba.yl.da), this.map.ba.yl = q)
    };

    function dd(a, b) {
        jb.call(this);
        this.content = a;
        this.ca = this.map = q;
        b = b || {};
        this.K = {
            width: 0,
            Ga: b.offset || new N(0, 0),
            hq: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + I.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || q,
            qj: b.enableMassClear === t ? t : p,
            mf: p
        };
        0 > this.K.width && (this.K.width = 0);
        Kb(b.enableClicking) && (this.K.mf = b.enableClicking);
        this.point = this.K.position;
        var c = this;
        Ua.load("marker", function () {
            c.ob()
        })
    }

    A.lang.xa(dd, jb, "Label");
    A.extend(dd.prototype, {
        ma: function () {
            return this.io ? this.io.ma() : this.map ? db(this.point, this.map.M.Ma) : this.point
        },
        bk: function () {
            return this.io ? this.io.bk() : this.point
        },
        va: function (a) {
            if ((a instanceof Q || a instanceof L) && !this.tx()) this.point = this.K.position = new Q(a
                .lng, a.lat)
        },
        Pc: ca("content"),
        qF: function (a) {
            0 <= a && 1 >= a && (this.K.opacity = a)
        },
        Rd: function (a) {
            a instanceof N && (this.K.Ga = new N(a.width, a.height))
        },
        sj: function () {
            return this.K.Ga
        },
        Td: function (a) {
            a = a || {};
            this.K.hq = A.extend(this.K.hq, a)
        },
        Ci: function (a) {
            return this.Td(a)
        },
        Hc: function (a) {
            this.K.title = a || ""
        },
        getTitle: function () {
            return this.K.title
        },
        YN: function (a) {
            this.point = (this.io = a) ? this.K.position = a.bk() : this.K.position = q
        },
        tx: function () {
            return this.io || q
        },
        Dk: x("content")
    });

    function ed(a, b) {
        if (0 !== arguments.length) {
            jb.apply(this, arguments);
            b = b || {};
            this.K = {
                jb: a,
                opacity: b.opacity || 1,
                yp: b.imageURL || "",
                Ds: b.displayOnMinLevel || 1,
                qj: b.enableMassClear === t ? t : p,
                Cs: b.displayOnMaxLevel || 19,
                a0: b.stretch || t
            };
            0 === b.opacity && (this.K.opacity = 0);
            var c = this;
            Ua.load("groundoverlay", function () {
                c.ob()
            })
        }
    }

    A.lang.xa(ed, jb, "GroundOverlay");
    A.extend(ed.prototype, {
        setBounds: function (a) {
            this.K.jb = a
        },
        getBounds: function () {
            return this.K.jb
        },
        setOpacity: function (a) {
            this.K.opacity = a
        },
        getOpacity: function () {
            return this.K.opacity
        },
        setImageURL: function (a) {
            this.K.yp = a
        },
        getImageURL: function () {
            return this.K.yp
        },
        setDisplayOnMinLevel: function (a) {
            this.K.Ds = a
        },
        getDisplayOnMinLevel: function () {
            return this.K.Ds
        },
        setDisplayOnMaxLevel: function (a) {
            this.K.Cs = a
        },
        getDisplayOnMaxLevel: function () {
            return this.K.Cs
        }
    });
    var fd = 3,
        gd = 4;

    function hd() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }

    function id(a, b) {
        var c = this;
        hd() && (a === l && ba(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")), "[object Array]" !== Object
            .prototype.toString.call(a) && ba(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")), b = b || {},
            jb.apply(c, arguments), c.ia = {
            ja: a
        }, c.K = {
            shape: b.shape || fd,
            size: b.size || gd,
            color: b.color || "#fa937e",
            qj: p
        }, this.gB = [], this.ue = [], Ua.load("pointcollection", function () {
            for (var a = 0, b; b = c.gB[a]; a++) c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.ue[a]; a++) c[b.method].apply(c, b.arguments)
        }))
    }

    A.lang.xa(id, jb, "PointCollection");
    A.extend(id.prototype, {
        initialize: function (a) {
            this.gB && this.gB.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function (a) {
            this.ue && this.ue.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function (a) {
            this.ue && this.ue.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function () {
            this.ue && this.ue.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function () {
            this.ue && this.ue.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var jd = new $c(I.ua + "marker_red_sprite.png", new N(19, 25), {
            anchor: new N(10, 25),
            infoWindowAnchor: new N(10, 0)
        }),
        kd = new $c(I.ua + "marker_red_sprite.png", new N(20, 11), {
            anchor: new N(6, 11),
            imageOffset: new N(-19, -13)
        });

    function W(a, b) {
        jb.call(this);
        b = b || {};
        this.point = a;
        this.Ma = (this.Eq = this.map = q) ? this.map.M.Ma : 5;
        this.K = {
            Ga: b.offset || new N(0, 0),
            Be: b.icon || jd,
            Yk: kd,
            title: b.title || "",
            label: q,
            YJ: b.baseZIndex || 0,
            mf: p,
            L6: t,
            sE: t,
            qj: b.enableMassClear === t ? t : p,
            jc: t,
            CN: b.raiseOnDrag === p ? p : t,
            JN: t,
            Kd: b.draggingCursor || I.Kd,
            rotation: b.rotation || 0
        };
        b.icon && !b.shadow && (this.K.Yk = q);
        b.enableDragging && (this.K.jc = b.enableDragging);
        Kb(b.enableClicking) && (this.K.mf = b.enableClicking);
        var c = this;
        Ua.load("marker", function () {
            c.ob()
        })
    }

    W.Ou = Vc.Kk(-90) + 1E6;
    W.pG = W.Ou + 1E6;
    A.lang.xa(W, jb, "Marker");
    A.extend(W.prototype, {
        Wb: function (a) {
            if (a instanceof $c || a instanceof ad) this.K.Be = a
        },
        lp: function () {
            return this.K.Be
        },
        Ey: function (a) {
            a instanceof $c && (this.K.Yk = a)
        },
        getShadow: function () {
            return this.K.Yk
        },
        Fj: function (a) {
            this.K.label = a || q
        },
        Ys: function () {
            return this.K.label
        },
        jc: function () {
            this.K.jc = p
        },
        Bs: function () {
            this.K.jc = t
        },
        bk: x("point"),
        ma: function () {
            return this.point instanceof Q || this.point instanceof L ? this.map ? db(this.point, this
                .map.M.Ma) : new Q(this.point.lng, this.point.lat) : this.point
        },
        va: function (a) {
            if (a instanceof Q || a instanceof L) this.point = this.map ? Za(a, this.map.M.Ma) : new L(a
                .lng, a.lat)
        },
        Di: function (a, b) {
            this.K.sE = !!a;
            a && (this.NG = b || 0)
        },
        Hc: function (a) {
            this.K.title = a + ""
        },
        getTitle: function () {
            return this.K.title
        },
        Rd: function (a) {
            a instanceof N && (this.K.Ga = a)
        },
        sj: function () {
            return this.K.Ga
        },
        fn: ca("Eq"),
        Zp: function (a) {
            this.K.rotation = a
        },
        DL: function () {
            return this.K.rotation
        }
    });

    function ld(a) {
        this.options = a || {};
        this.BZ = this.options.paneName || "labelPane";
        this.zIndex = this.options.zIndex || 0;
        this.IV = this.options.contextType || "2d"
    }

    ld.prototype = new Vc;
    ld.prototype.initialize = function (a) {
        this.P = a;
        var b = this.canvas = document.createElement("canvas"),
            c = this.canvas.getContext(this.IV);
        b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
        md(this);
        nd(c);
        a.getPanes()[this.BZ].appendChild(b);
        var e = this;
        a.addEventListener("resize", function () {
            md(e);
            nd(c);
            e.ob()
        });
        return this.canvas
    };

    function md(a) {
        var b = a.P.Cb(),
            a = a.canvas;
        a.width = b.width;
        a.height = b.height;
        a.style.width = a.width + "px";
        a.style.height = a.height + "px"
    }

    function nd(a) {
        var b = (window.devicePixelRatio || 1) / (a.VU || a.G6 || a.d5 || a.e5 || a.i5 || a.VU || 1),
            c = a.canvas.width,
            e = a.canvas.height;
        a.canvas.width = c * b;
        a.canvas.height = e * b;
        a.canvas.style.width = c + "px";
        a.canvas.style.height = e + "px";
        a.scale(b, b)
    }

    ld.prototype.draw = function () {
        var a = this,
            b = arguments;
        clearTimeout(a.p0);
        a.p0 = setTimeout(function () {
            a.ob.apply(a, b)
        }, 15)
    };
    fa = ld.prototype;
    fa.ob = function () {
        var a = this.P;
        this.canvas.style.left = -a.offsetX + "px";
        this.canvas.style.top = -a.offsetY + "px";
        this.dispatchEvent("draw");
        this.options.update && this.options.update.apply(this, arguments)
    };
    fa.Ta = x("canvas");
    fa.show = function () {
        this.canvas || this.P.Ra(this);
        this.canvas.style.display = "block"
    };
    fa.aa = function () {
        this.canvas.style.display = "none"
    };
    fa.cq = function (a) {
        this.canvas.style.zIndex = a
    };
    fa.Kk = x("zIndex");

    function od(a, b) {
        Xc.call(this, b);
        b = b || {};
        this.K.zg = b.fillOpacity ? b.fillOpacity : 0.65;
        this.K.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.Sd(a);
        var c = this;
        Ua.load("poly", function () {
            c.ob()
        })
    }

    A.lang.xa(od, Xc, "Polygon");
    A.extend(od.prototype, {
        Sd: function (a, b) {
            this.Bo = Xc.nx(a).slice(0);
            var c = Xc.nx(a).slice(0);
            1 < c.length && c.push(new Q(c[0].lng, c[0].lat));
            Xc.prototype.Sd.call(this, c, b)
        },
        kn: function (a, b) {
            this.Bo[a] && (this.Bo[a] = new Q(b.lng, b.lat), this.ja[a] = new Q(b.lng, b.lat), 0 == a &&
            !this.ja[0].Ub(this.ja[this.ja.length - 1]) && (this.ja[this.ja.length - 1] = new Q(
                b.lng, b.lat)), this.Hh())
        },
        $e: function () {
            var a = this.Bo;
            0 == a.length && (a = this.ja);
            return a
        }
    });

    function pd(a, b) {
        Xc.call(this, b);
        this.Nr(a);
        var c = this;
        Ua.load("poly", function () {
            c.ob()
        })
    }

    A.lang.xa(pd, Xc, "Polyline");

    function qd(a, b, c) {
        this.point = a;
        this.Fa = Math.abs(b);
        od.call(this, [], c)
    }

    qd.PE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    A.lang.xa(qd, od, "Circle");
    A.extend(qd.prototype, {
        initialize: function (a) {
            this.map = a;
            this.ja = this.pv(this.point, this.Fa);
            this.Hh();
            return q
        },
        Qb: function () {
            return this.map ? db(this.point, this.map.M.Ma) : this.point
        },
        mv: x("point"),
        zf: function (a) {
            a && (this.point = a)
        },
        BL: x("Fa"),
        Af: function (a) {
            this.Fa = Math.abs(a)
        },
        pv: function (a, b) {
            if (!a || !b || !this.map) return [];
            for (var c = [], e = b / 6378800, f = Math.PI / 180 * a.lat, g = Math.PI / 180 * a.lng, i =
                0; 360 > i; i += 9) {
                var k = Math.PI / 180 * i,
                    m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k)),
                    k = new Q(((g - Math.atan2(Math.sin(k) * Math.sin(e) * Math.cos(f), Math.cos(e) -
                        Math.sin(f) * Math.sin(m)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 /
                        Math.PI), m * (180 / Math.PI));
                c.push(k)
            }
            e = c[0];
            c.push(new Q(e.lng, e.lat));
            return c
        }
    });
    var rd = {};

    function sd(a) {
        this.map = a;
        this.Cj = [];
        this.dg = [];
        this.Qg = [];
        this.jV = 300;
        this.VE = 0;
        this.Ig = {};
        this.jj = {};
        this.Ok = 0;
        this.lE = p;
        this.YV = {};
        this.ho = this.Oq(1);
        this.tg = this.Oq(2);
        this.Il = this.Oq(3);
        this.lg = this.Oq(4);
        a.platform.appendChild(this.ho);
        a.platform.appendChild(this.tg);
        a.platform.appendChild(this.Il);
        a.platform.appendChild(this.lg);
        var b = 256 * Math.pow(2, 15),
            c = 3 * b,
            a = T.Ya(new L(180, 0)).lng,
            c = c - a,
            b = -3 * b,
            e = T.Ya(new L(-180, 0)).lng;
        this.PA = a;
        this.QA = e;
        this.MA = c + (e - b);
        this.iI = a - e
    }

    D.df(function (a) {
        var b = new sd(a);
        b.za();
        a.ef = b
    });
    A.extend(sd.prototype, {
        za: function () {
            var a = this,
                b = a.map;
            b.addEventListener("loadcode", function () {
                a.Fp()
            });
            b.addEventListener("addtilelayer", function (b) {
                a.Ue(b)
            });
            b.addEventListener("removetilelayer", function (b) {
                a.cg(b)
            });
            b.addEventListener("setmaptype", function (b) {
                a.Og(b)
            });
            b.addEventListener("zoomstartcode", function (b) {
                a.Rc(b)
            });
            b.addEventListener("setcustomstyles", function (b) {
                a.bu(b.target);
                a.ag(p)
            });
            b.addEventListener("initindoorlayer", function (b) {
                a.hE(b)
            })
        },
        Fp: function () {
            var a = this;
            if (A.ga.oa) try {
                document.execCommand("BackgroundImageCache", t, p)
            } catch (b) {
            }
            this.loaded || a.Lx();
            a.ag();
            this.loaded || (this.loaded = p, Ua.load("tile", function () {
                a.XP()
            }))
        },
        hE: function (a) {
            this.Bu = new td(this);
            this.Bu.Ue(new ud(this.map, this.Bu, a.af))
        },
        Lx: function () {
            for (var a = this.map.ya().jf, b = 0; b < a.length; b++) {
                var c = new vd;
                A.extend(c, a[b]);
                this.Cj.push(c);
                c.za(this.map, this.ho)
            }
            this.bu()
        },
        Oq: function (a) {
            var b = H("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        Ff: function () {
            this.Ok--;
            var a = this;
            this.lE && (this.map.dispatchEvent(new P("onfirsttileloaded")), this.lE = t);
            0 == this.Ok && (this.Ri && (clearTimeout(this.Ri), this.Ri = q), this.Ri = setTimeout(
                function () {
                    if (a.Ok == 0) {
                        a.map.dispatchEvent(new P("ontilesloaded"));
                        a.lE = p
                    }
                    a.Ri = q
                }, 80))
        },
        UD: function (a, b) {
            return "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Hx: function (a) {
            var b = a.Hb;
            b && Db(b) && b.parentNode.removeChild(b);
            delete this.Ig[a.name];
            a.loaded || (wd(a), a.Hb = q, a.Qm = q)
        },
        LL: function (a, b, c) {
            var e = this.map,
                f = e.ya(),
                g = e.Za,
                i = e.Vb,
                k = f.$b(g),
                m = this.lX(),
                n = m[0],
                o = m[1],
                s = m[2],
                v = m[3],
                w = m[4],
                c = "undefined" != typeof c ? c : 0,
                f = f.Nd(),
                m = e.da.replace(/^TANGRAM_/, "");
            for (this.Ie ? this.Ie.length = 0 : this.Ie = []; n < s; n++)
                for (var y = o; y < v; y++) {
                    var z = n,
                        B = y;
                    this.Ie.push([z, B]);
                    z = m + "_" + b + "_" + z + "_" + B + "_" + g;
                    this.YV[z] = z
                }
            this.Ie.sort(function (a) {
                return function (b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (
                        0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([w[0] - 1, w[1] - 1]));
            i = [Math.round(-i.lng / k), Math.round(i.lat / k)];
            n = -e.offsetY + e.height / 2;
            a.style.left = -e.offsetX + e.width / 2 + "px";
            a.style.top = n + "px";
            this.Ve ? this.Ve.length = 0 : this.Ve = [];
            n = 0;
            for (e = a.childNodes.length; n < e; n++) y = a.childNodes[n], y.mr = t, this.Ve.push(y);
            if (n = this.Um)
                for (var C in n) delete n[C];
            else this.Um = {};
            this.We ? this.We.length = 0 : this.We = [];
            n = 0;
            for (e = this.Ie.length; n < e; n++) {
                C = this.Ie[n][0];
                k = this.Ie[n][1];
                y = 0;
                for (o = this.Ve.length; y < o; y++)
                    if (s = this.Ve[y], s.id == m + "_" + b + "_" + C + "_" + k + "_" + g) {
                        s.mr = p;
                        this.Um[s.id] = s;
                        break
                    }
            }
            n = 0;
            for (e = this.Ve.length; n < e; n++) s = this.Ve[n], s.mr || this.We.push(s);
            this.JF = [];
            y = (f + c) * this.map.M.devicePixelRatio;
            n = 0;
            for (e = this.Ie.length; n < e; n++) C = this.Ie[n][0], k = this.Ie[n][1], v = C * f + i[
                0] - c / 2, w = (-1 - k) * f + i[1] - c / 2, z = m + "_" + b + "_" + C + "_" + k + "_" +
                g, o = this.Um[z], s = q, o ? (s = o.style, s.left = v + "px", s.top = w + "px", o.Un ||
            this.JF.push([C, k, o])) : (0 < this.We.length ? (o = this.We.shift(), o.getContext(
                "2d").clearRect(-c / 2, -c / 2, y, y), s = o.style) : (o = document
                .createElement("canvas"), s = o.style, s.position = "absolute", s.width = f +
                c + "px", s.height = f + c + "px", this.SY() && (s.WebkitTransform =
                "scale(1.001)"), o.setAttribute("width", y), o.setAttribute("height", y), a
                .appendChild(o)), o.id = z, s.left = v + "px", s.top = w + "px", -1 < z.indexOf(
                "bg") && (v = "#F3F1EC", this.map.M.TU && (v = this.map.M.TU), s.background =
                v ? v : ""), this.JF.push([C, k, o])), o.style.visibility = "";
            n = 0;
            for (e = this.We.length; n < e; n++) this.We[n].style.visibility = "hidden";
            return this.JF
        },
        SY: function () {
            return /M040/i.test(navigator.userAgent)
        },
        lX: function () {
            var a = this.map,
                b = a.ya(),
                c = b.QL(a.Za),
                e = a.Vb,
                f = Math.ceil(e.lng / c),
                g = Math.ceil(e.lat / c),
                b = b.Nd(),
                c = [f, g, (e.lng - f * c) / c * b, (e.lat - g * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) /
                b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 +
                c[3]) / b), c]
        },
        V_: function (a, b, c, e) {
            var f = this;
            f.K2 = b;
            var g = this.map.ya(),
                i = f.UD(a, c),
                k = g.Nd(),
                b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]],
                m = this.Ig[i];
            if (this.map.ya() !== bb && this.map.ya() !== Ta) {
                var n = this.Hw(a[0], a[2]).offsetX;
                b[0] += n;
                b.d2 = n
            }
            m && m.Hb ? (Bb(m.Hb, b), e && (e = new R(a[0], a[1]), g = this.map.M.De ? this.map.M.De
                .style : "normal", e = c.getTilesUrl(e, a[2], g), m.loaded = t, xd(m, e)), m
                .loaded ? this.Ff() : yd(m, function () {
                f.Ff()
            })) : (m = this.jj[i]) && m.Hb ? (c.Kb.insertBefore(m.Hb, c.Kb.lastChild), this.Ig[
                i] = m, Bb(m.Hb, b), e && (e = new R(a[0], a[1]), g = this.map.M.De ? this.map.M
                .De.style : "normal", e = c.getTilesUrl(e, a[2], g), m.loaded = t, xd(m, e)), m
                .loaded ? this.Ff() : yd(m, function () {
                f.Ff()
            })) : (m = k * Math.pow(2, g.Ze() - a[2]), new L(a[0] * m, a[1] * m), e = new R(a[
                0], a[1]), g = this.map.M.De ? this.map.M.De.style : "normal", e = c
                .getTilesUrl(e, a[2], g), m = new zd(this, e, b, a, c), yd(m, function () {
                f.Ff()
            }), m.fo(), this.Ig[i] = m)
        },
        Ff: function () {
            this.Ok--;
            var a = this;
            0 == this.Ok && (this.Ri && (clearTimeout(this.Ri), this.Ri = q), this.Ri = setTimeout(
                function () {
                    if (a.Ok == 0) {
                        a.map.dispatchEvent(new P("ontilesloaded"));
                        if (wa) {
                            if (ra && ua && va) {
                                var b = fb(),
                                    c = a.map.Cb();
                                setTimeout(function () {
                                    Sa(5030, {
                                        load_script_time: ua - ra,
                                        load_tiles_time: b - va,
                                        map_width: c.width,
                                        map_height: c.height,
                                        map_size: c.width * c.height
                                    })
                                }, 1E4);
                                D.Cq("cus.fire", "time", {
                                    z_imgfirstloaded: b - va
                                })
                            }
                            wa = t
                        }
                    }
                    a.Ri = q
                }, 80))
        },
        UD: function (a, b) {
            return this.map.ya() === Ra ? "TILE-" + b.da + "-" + this.map.Mw + "-" + a[0] + "-" + a[1] +
                "-" + a[2] : "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Hx: function (a) {
            var b = a.Hb;
            b && (Ad(b), Db(b) && b.parentNode.removeChild(b));
            delete this.Ig[a.name];
            a.loaded || (Ad(b), wd(a), a.Hb = q, a.Qm = q)
        },
        Hw: function (a, b) {
            for (var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f;) a -= e, c -=
                this.MA;
            for (; a < g;) a += e, c += this.MA;
            c = Math.round(c / Math.pow(2, 18 - b));
            return {
                offsetX: c,
                nm: a
            }
        },
        nV: function (a) {
            for (var b = a.lng; b > this.PA;) b -= this.iI;
            for (; b < this.QA;) b += this.iI;
            a.lng = b;
            return a
        },
        oV: function (a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), e = Math.floor(this.PA / c), f = Math.floor(this
                .QA / c), c = Math.floor(this.MA / c), g = [], i = 0; i < a.length; i++) {
                var k = a[i],
                    m = k[0],
                    k = k[1];
                if (m >= e) {
                    var m = m + c,
                        n = "id_" + m + "_" + k + "_" + b;
                    a[n] || (a[n] = p, g.push([m, k]))
                } else m <= f && (m -= c, n = "id_" + m + "_" + k + "_" + b, a[n] || (a[n] = p, g.push([
                    m, k
                ])))
            }
            for (i = 0; i < g.length; i++) a.push(g[i]);
            return a
        },
        ag: function (a) {
            if (!this.map.M.yg) {
                var b = this;
                if (b.map.ya() == Ra) Ua.load("coordtrans", function () {
                    b.map.Ob || (b.map.Ob = Ra.Ck(b.map.lh), b.map.Mw = Ra.nL(b.map.Ob));
                    b.kI()
                }, p);
                else {
                    if (a && a)
                        for (var c in this.jj) delete this.jj[c];
                    b.kI(a)
                }
            }
        },
        kI: function (a) {
            var b = this.Cj.concat(this.dg),
                c = b.length,
                e = this.map,
                f = e.ya(),
                g = e.Vb,
                i = e.width,
                i = e.ya().$b(e.Za) * i,
                i = this.IY(g.lng - i / 2, g.lng + i / 2);
            this.map.ya() !== bb && this.map.ya() !== Ta && (g = this.nV(g));
            for (var k = 0; k < c; k++) {
                var m = b[k];
                if (m.kc && e.Za < m.kc) break;
                if (m.Gw) {
                    var n = this.Kb = m.Kb;
                    if (a) {
                        var o = n;
                        if (o && o.childNodes)
                            for (var s = o.childNodes.length, v = s - 1; 0 <= v; v--) s = o.childNodes[
                                v], o.removeChild(s), s = q
                    }
                    if (this.map.Vd()) {
                        this.tg.style.display = "block";
                        n.style.display = "none";
                        this.map.dispatchEvent(new P("vectorchanged"), {
                            isvector: p
                        });
                        continue
                    } else n.style.display = "block", this.tg.style.display = "none", this.map
                        .dispatchEvent(new P("vectorchanged"), {
                            isvector: t
                        })
                }
                if (!m.c2 && !(m.Rx && !this.map.Vd() || m.oM && this.map.Vd())) {
                    e = this.map;
                    f = e.ya();
                    n = f.uj();
                    s = e.Za;
                    g = e.Vb;
                    f == Ra && g.Ub(new L(0, 0)) && (g = e.Vb = n.ri(e.he, e.Ob));
                    var w = f.$b(s),
                        n = f.QL(s),
                        o = Math.ceil(g.lng / n),
                        y = Math.ceil(g.lat / n),
                        z = f.Nd(),
                        n = [o, y, (g.lng - o * n) / n * z, (g.lat - y * n) / n * z],
                        y = i ? 1.5 * (e.width / 2) : e.width / 2,
                        v = n[0] - Math.ceil((y - n[2]) / z),
                        o = n[1] - Math.ceil((e.height / 2 - n[3]) / z),
                        y = n[0] + Math.ceil((y + n[2]) / z),
                        B = 0;
                    f === Ra && 15 == e.la() && (B = 1);
                    f = n[1] + Math.ceil((e.height / 2 + n[3]) / z) + B;
                    this.TJ = new L(g.lng, g.lat);
                    var C = this.Ig,
                        z = -this.TJ.lng / w,
                        B = this.TJ.lat / w,
                        g = [Math.ceil(z), Math.ceil(B)],
                        w = e.la(),
                        E;
                    for (E in C) {
                        var G = C[E],
                            F = G.info;
                        (F[2] != w || F[2] == w && (v > F[0] || y <= F[0] || o > F[1] || f <= F[1])) &&
                        this.Hx(G)
                    }
                    C = -e.offsetX + e.width / 2;
                    G = -e.offsetY + e.height / 2;
                    m.Kb && (m.Kb.style.left = Math.ceil(z + C) - g[0] + "px", m.Kb.style.top = Math
                        .ceil(B + G) - g[1] + "px", m.Kb.style.WebkitTransform =
                        "translate3d(0,0,0)");
                    z = [];
                    for (e.LB = []; v < y; v++)
                        for (B = o; B < f; B++) z.push([v, B]), e.LB.push({
                            x: v,
                            y: B
                        });
                    this.map.ya() !== bb && this.map.ya() !== Ta && (z = this.oV(z, s));
                    z.sort(function (a) {
                        return function (b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[
                                1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] -
                                a[1]))
                        }
                    }([n[0] - 1, n[1] - 1]));
                    s = z.length;
                    this.Ok += s;
                    for (v = 0; v < s; v++) this.V_([z[v][0], z[v][1], w], g, m, a)
                }
            }
        },
        IY: function (a, b) {
            return a < this.QA || b > this.PA
        },
        Ue: function (a) {
            var b = this,
                c = a.target;
            b.map.Vd();
            c.wn && this.map.Ue(c.wn);
            if (c.Rx) {
                for (a = 0; a < b.Qg.length; a++)
                    if (b.Qg[a] == c) return;
                Ua.load("vector", function () {
                    c.za(b.map, b.tg);
                    b.Qg.push(c)
                }, p)
            } else {
                for (a = 0; a < b.dg.length; a++)
                    if (b.dg[a] == c) return;
                c.za(this.map, this.Il);
                b.dg.push(c)
            }
        },
        cg: function (a) {
            a = a.target;
            this.map.Vd();
            a.wn && this.map.cg(a.wn);
            if (a.Rx)
                for (var b = 0, c = this.Qg.length; b < c; b++) a == this.Qg[b] && this.Qg.splice(b, 1);
            else {
                b = 0;
                for (c = this.dg.length; b < c; b++) a == this.dg[b] && this.dg.splice(b, 1)
            }
            a.remove()
        },
        Og: function () {
            for (var a = this.Cj, b = 0, c = a.length; b < c; b++) a[b].remove();
            delete this.Kb;
            this.Cj = [];
            this.jj = this.Ig = {};
            this.Lx();
            this.ag()
        },
        Rc: function () {
            var a = this;
            a.Bd && A.U.aa(a.Bd);
            setTimeout(function () {
                a.ag();
                a.map.dispatchEvent(new P("onzoomend"))
            }, 10)
        },
        z6: u(),
        bu: function (a) {
            var b = this.map.ya();
            if (!this.map.Vd() && (a ? this.map.M.d0 = a : a = this.map.M.d0, a))
                for (var c = q, c = "2" == D.Au ? [D.url.proto + D.url.domain.main_domain_cdn.other[0] +
                "/"
                ] : [D.url.proto + D.url.domain.main_domain_cdn.baidu[0] + "/", D.url.proto + D
                    .url.domain.main_domain_cdn.baidu[1] + "/", D.url.proto + D.url.domain
                    .main_domain_cdn.baidu[2] + "/"
                ], e = 0, f; f = this.Cj[e]; e++)
                    if (f.Q_ == p) {
                        b.m.qc = 18;
                        f.getTilesUrl = function (b, e) {
                            var f = b.x,
                                f = this.map.ef.Hw(f, e).nm,
                                m = b.y,
                                n = Ub("normal"),
                                o = 1;
                            this.map.Ix() && (o = 2);
                            n = "customimage/tile?&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n +
                                "&scale=" + o + "&ak=" + pa;
                            n = a.styleStr ? n + ("&styles=" + encodeURIComponent(a.styleStr)) : n +
                                ("&customid=" + a.style);
                            return c[Math.abs(f + m) % c.length] + n
                        };
                        break
                    }
        }
    });

    function zd(a, b, c, e, f) {
        this.Qm = a;
        this.position = c;
        this.Zu = [];
        this.name = a.UD(e, f);
        this.info = e;
        this.vJ = f.At();
        e = H("img");
        Cb(e);
        e.gL = t;
        var g = e.style,
            a = a.map.ya();
        g.position = "absolute";
        g.border = "none";
        g.width = a.Nd() + "px";
        g.height = a.Nd() + "px";
        g.left = c[0] + "px";
        g.top = c[1] + "px";
        g.maxWidth = "none";
        this.Hb = e;
        this.src = b;
        Bd && (this.Hb.style.opacity = 0);
        var i = this;
        this.Hb.onload = function () {
            D.$Y.KQ();
            i.loaded = p;
            if (i.Qm) {
                var a = i.Qm,
                    b = a.jj;
                if (!b[i.name]) {
                    a.VE++;
                    b[i.name] = i
                }
                if (i.Hb && !Db(i.Hb) && f.Kb) {
                    f.Kb.appendChild(i.Hb);
                    if (A.ga.oa <= 6 && A.ga.oa > 0 && i.vJ) i.Hb.style.cssText = i.Hb.style.cssText + (
                        ';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src +
                        '",sizingMethod=scale);')
                }
                var c = a.VE - a.jV,
                    e;
                for (e in b) {
                    if (c <= 0) break;
                    if (!a.Ig[e]) {
                        b[e].Qm = q;
                        var g = b[e].Hb;
                        if (g && g.parentNode) {
                            g.parentNode.removeChild(g);
                            Ad(g)
                        }
                        g = q;
                        b[e].Hb = q;
                        delete b[e];
                        a.VE--;
                        c--
                    }
                }
                Bd && new xb({
                    Nc: 20,
                    duration: 200,
                    Ba: function (a) {
                        if (i.Hb && i.Hb.style) i.Hb.style.opacity = a * 1
                    },
                    finish: function () {
                        i.Hb && i.Hb.style && delete i.Hb.style.opacity
                    }
                });
                wd(i)
            }
        };
        this.Hb.onerror = function () {
            wd(i);
            if (i.Qm) {
                var a = i.Qm.map.ya();
                if (a.m.jD) {
                    i.error = p;
                    i.Hb.src = a.m.jD;
                    i.Hb && !Db(i.Hb) && f.Kb.appendChild(i.Hb)
                }
            }
        };
        e = q
    }

    function yd(a, b) {
        a.Zu.push(b)
    }

    zd.prototype.fo = function () {
        this.Hb.src = 0 < A.ga.oa && 6 >= A.ga.oa && this.vJ ? I.ua + "blank.gif" : "" !== this.src && this.Hb
            .src == this.src ? this.src + "&t = " + Date.now() : this.src
    };

    function wd(a) {
        for (var b = 0; b < a.Zu.length; b++) a.Zu[b]();
        a.Zu.length = 0
    }

    function Ad(a) {
        if (a) {
            a.onload = a.onerror = q;
            var b = a.attributes,
                c, e, f;
            if (b) {
                e = b.length;
                for (c = 0; c < e; c += 1) f = b[c].name, ab(a[f]) && (a[f] = q)
            }
            if (b = a.children) {
                e = b.length;
                for (c = 0; c < e; c += 1) Ad(a.children[c])
            }
        }
    }

    function xd(a, b) {
        a.src = b;
        a.fo()
    }

    var Bd = !A.ga.oa || 8 < A.ga.oa;

    function vd(a) {
        this.af = a || {};
        this.KV = this.af.copyright || q;
        this.H0 = this.af.transparentPng || t;
        this.Gw = this.af.baseLayer || t;
        this.zIndex = this.af.zIndex || 0;
        this.da = vd.tS++
    }

    vd.tS = 0;
    A.lang.xa(vd, A.lang.Ja, "TileLayer");
    A.extend(vd.prototype, {
        za: function (a, b) {
            this.Gw && (this.zIndex = -100);
            this.map = a;
            if (!this.Kb) {
                var c = H("div"),
                    e = c.style;
                e.position = "absolute";
                e.overflow = "visible";
                e.zIndex = this.zIndex;
                e.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                e.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.Kb = c
            }
        },
        remove: function () {
            this.Kb && this.Kb.parentNode && (this.Kb.innerHTML = "", this.Kb.parentNode.removeChild(
                this.Kb));
            delete this.Kb
        },
        At: x("H0"),
        getTilesUrl: function (a, b) {
            if (this.map.ya() !== bb && this.map.ya() !== Ta) var c = this.map.ef.Hw(a.x, b).nm;
            var e = "";
            this.af.tileUrlTemplate && (e = this.af.tileUrlTemplate.replace(/\{X\}/, c), e = e.replace(
                /\{Y\}/, a.y), e = e.replace(/\{Z\}/, b));
            return e
        },
        ym: x("KV"),
        ya: function () {
            return this.Ua || Oa
        }
    });

    function Cd(a) {
        vd.call(this, a);
        this.m = a || {};
        this.oM = p;
        if (this.m.predictDate) {
            if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday) this.m.predictDate = 1;
            if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour) this.m.predictDate.hour = 0
        }
        this.tU = D.url.proto + D.url.domain.traffic + "/traffic/"
    }

    Cd.prototype = new vd;
    Cd.prototype.za = function (a, b) {
        vd.prototype.za.call(this, a, b);
        this.P = a
    };
    Cd.prototype.At = ea(p);
    Cd.prototype.getTilesUrl = function (a, b) {
        var c = "";
        this.m.predictDate ? c = "HistoryService?day=" + (this.m.predictDate.weekday - 1) + "&hour=" + this.m
            .predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (
            new Date).getTime() + "&", c += "label=web2D&v=016&");
        var c = this.tU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y,
            e = 1;
        this.P.Ix() && (e = 2);
        return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1")
    };
    var Dd = [D.url.proto + D.url.domain.TILES_YUN_HOST[0] + "/georender/gss", D.url.proto + D.url.domain
            .TILES_YUN_HOST[1] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[2] + "/georender/gss",
            D.url.proto + D.url.domain.TILES_YUN_HOST[3] + "/georender/gss"
        ],
        Ed = D.url.proto + D.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle",
        Fd = 100;

    function rb(a, b) {
        vd.call(this);
        var c = this;
        this.oM = p;
        try {
            document.createElement("canvas").getContext("2d")
        } catch (e) {
        }
        Lb(a) ? b = a || {} : (c.Sn = a, b = b || {});
        b.geotableId && (c.If = b.geotableId);
        b.databoxId && (c.Sn = b.databoxId);
        var f = D.ud + "geosearch";
        c.fb = {
            wN: b.pointDensity || Fd,
            nY: f + "/detail/",
            oY: f + "/v2/detail/",
            QJ: b.age || 36E5,
            Ut: b.q || "",
            o0: "png",
            x4: [5, 5, 5, 5],
            WY: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            ZB: b.ak || pa,
            sO: b.tags || "",
            filter: b.filter || "",
            jO: b.sortby || "",
            $D: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
            TF: p
        };
        Ua.load("clayer", function () {
            c.Dd()
        })
    }

    rb.prototype = new vd;
    rb.prototype.za = function (a, b) {
        vd.prototype.za.call(this, a, b);
        this.P = a
    };
    rb.prototype.getTilesUrl = function (a, b) {
        var c = a.x,
            e = a.y,
            f = this.fb,
            c = Dd[Math.abs(c + e) % Dd.length] + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.Ut +
                "&tags=" + f.sO + "&filter=" + f.filter + "&sortby=" + f.jO + "&ak=" + this.fb.ZB + "&age=" + f.QJ +
                "&page_size=" + f.wN + "&format=" + f.o0;
        f.TF || (f = (1E5 * Math.random()).toFixed(0), c += "&timeStamp=" + f);
        this.If ? c += "&geotable_id=" + this.If : this.Sn && (c += "&databox_id=" + this.Sn);
        return c
    };
    rb.prototype.enableUseCache = function () {
        this.fb.TF = p
    };
    rb.prototype.disableUseCache = function () {
        this.fb.TF = t
    };
    rb.ST = /^point\(|\)$/ig;
    rb.TT = /\s+/;
    rb.VT = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    var Gd = {};

    function Hd(a, b) {
        this.od = a;
        this.$P = 18;
        this.m = {
            Py: 256,
            Fc: new T
        };
        A.extend(this.m, b || {})
    }

    var Id = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0],
        Jd = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608],
        Kd = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19],
        Ld = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048,
            4096
        ];
    Hd.prototype = {
        getName: x("od"),
        Nd: function (a) {
            return "na" === this.od ? Ld[a] : this.m.Py
        },
        Ws: function (a) {
            return "na" === this.od ? Kd[a] : a
        },
        uj: function () {
            return this.m.Fc
        },
        $b: function (a) {
            return Math.pow(2, this.$P - a)
        },
        MD: function (a) {
            return "na" === this.od ? Jd[Id[a]] : this.$b(a) * this.Nd(a)
        }
    };
    var Md = {
        drawPoly: function (a, b, c, e, f, g) {
            var i = a[1];
            if (i)
                for (var a = a[6], k = 0; k < i.length; k++) {
                    var m = i[k][0],
                        n = f.wj(m, "polygon", c, g);
                    if (n && n.length)
                        for (var o = i[k][1], s = 0; s < o.length; s++) {
                            var v = o[s][1];
                            f.Uc(v[0], c) && (v["cache" + c] || (v["cache" + c] = f.Wm(v[1], c, e, a)), v =
                                v["cache" + c], f.P.Go(b.canvas.id, v, {
                                type: "polygon",
                                Xb: m,
                                style: n
                            }), this.DW(b, v, n, c))
                        }
                }
        },
        DW: function (a, b, c, e) {
            c = c[0];
            if (!c.Xb || !(6 < e && (71013 === c.Xb || 71012 === c.Xb || 71011 === c.Xb) || 6 === e && (
                71011 === c.Xb || 71012 === c.Xb) || 5 === e && (71011 === c.Xb || 71013 === c
                .Xb) || 5 > e && (71012 === c.Xb || 71013 === c.Xb))) {
                a.fillStyle = c.hx;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
                a.closePath();
                c.borderWidth && (a.strokeStyle = c.Mo, a.lineWidth = c.borderWidth / 2, a.stroke());
                a.fill()
            }
        },
        drawGaoqingRoadBorder: function (a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0],
                        m = f.wj(k, "polygon", c);
                    if (m && m.length && m[0].borderWidth)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var s = n[o][1];
                            f.Uc(s[0], c) && (s["cache" + c] || (s["cache" + c] = f.Wm(s[1], c, e, a)), s =
                                s["cache" + c], f.P.Go(b.canvas.id, s, {
                                type: "polygon",
                                Xb: k,
                                style: m
                            }), this.FW(b, s, m))
                        }
                }
        },
        drawGaoqingRoadFill: function (a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0],
                        m = f.wj(k, "polygon", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var s = n[o][1];
                            f.Uc(s[0], c) && (s["cache" + c] || (s["cache" + c] = f.Wm(s[1], c, e, a)), s =
                                s["cache" + c], f.P.Go(b.canvas.id, s, {
                                type: "polygon",
                                Xb: k,
                                style: m
                            }), this.GW(b, s, m))
                        }
                }
        },
        FW: function (a, b, c) {
            c = c[0];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
            a.closePath();
            a.strokeStyle = c.Mo;
            a.lineWidth = c.borderWidth / 2;
            a.stroke()
        },
        GW: function (a, b, c) {
            a.fillStyle = c[0].hx;
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var c = 2, e = b.length; c < e; c += 2) a.lineTo(b[c], b[c + 1]);
            a.closePath();
            a.fill()
        }
    };
    var Nd = {
        drawArrow: function (a, b, c, e, f, g) {
            b.lineWidth = 1.5;
            b.lineCap = "butt";
            b.lineJoin = "miter";
            b.strokeStyle = "rgba(153,153,153,1)";
            var i = a[7];
            if (i) {
                a = i[1];
                e = g.Wm(i[0], c, e);
                for (i = 0; i < a.length; i++)
                    if (g.Uc(a[i], c)) {
                        var k = e[4 * i],
                            m = e[4 * i + 1],
                            n = e[4 * i + 2],
                            o = e[4 * i + 3],
                            s = (k + n) / 2,
                            v = (m + o) / 2,
                            n = (k - n) / f,
                            o = (m - o) / f,
                            k = s + n / 2,
                            n = s - n / 2,
                            m = v + o / 2,
                            o = v - o / 2;
                        this.uW(b, k, m, n, o)
                    }
            }
        },
        uW: function (a, b, c, e, f) {
            a.beginPath();
            a.moveTo(b, c);
            a.lineTo(e, f);
            a.stroke();
            c = this.kV([b, c], [e, f]);
            b = c[0];
            c = c[1];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            a.lineTo(c[0], c[1]);
            a.lineTo(e, f);
            a.closePath();
            a.stroke()
        },
        kV: function (a, b) {
            var c = b[0] - a[0],
                e = b[1] - a[1],
                f = 1.8 * Math.sqrt(c * c + e * e),
                g = b[0] + 4.8410665352790705 * (c / f),
                f = b[1] + 4.8410665352790705 * (e / f),
                c = Math.atan2(e, c) + Math.PI;
            return [
                [g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c -
                    0.3)],
                [g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)]
            ]
        }
    };
    var Od = {
        drawHregion: function (a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0],
                        m = f.wj(k, "polygon3d", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var s = n[o][2];
                            if (f.Uc(s[0], c)) {
                                var v = s[2];
                                s["cache" + c] || (s["cache" + c] = f.Wm(s[1], c, e, a));
                                s = s["cache" + c];
                                f.P.Go(b.canvas.id, s, {
                                    type: "polygon",
                                    Xb: k,
                                    style: m
                                });
                                this.EW(b, s, v, m)
                            }
                        }
                }
        },
        EW: function (a, b, c, e) {
            e = e[0];
            if (!(c < e.filter)) {
                a.fillStyle = e.VW;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
                a.closePath();
                e.borderWidth && (a.strokeStyle = e.Mo, a.lineWidth = e.borderWidth / 2, a.stroke());
                a.fill()
            }
        }
    };
    var Pd = {
        parse: function (a, b, c, e, f) {
            for (var g = e.P, i = g.la(), k = Math.pow(2, 18 - i), m = g.Fc.ri(g.Qb()), n = m.lng, o = m
                .lat, m = g.Cb(), s = m.width, v = m.height, m = [], w = 0; w < a.length; w++) {
                var y = [],
                    z = a[w].m0;
                y.x = z[0];
                y.y = z[1];
                y.K6 = z[2];
                for (var B = (z[0] * c * k - n) / k + s / 2, C = (o - (z[1] + 1) * c * k) / k + v / 2, E =
                    0; E < a[w].length; E++) a[w][E].uM ? this.sN(a[w][E].uM, z, e, b, c, B, C, i, k, s, v,
                    y) : a[w][E].uY ? this.sN(a[w][E].uY, z, e, b, c, B, C, i, k, s, v, y, p, window
                    .B4) : this.HZ(a[w][E].XY, z, e, b, c, B, C, i, k, s, v, y, f);
                m.push(y)
            }
            if (/collision=0/.test(location.search)) {
                a = [];
                for (w = 0; w < m.length; w++)
                    for (E = 0; E < m[w].length; E++) a.push(m[w][E])
            } else a = this.VZ(m, e.P.la());
            g.zV();
            for (w = 0; w < a.length; w++)
                if (c = a[w], !c.vt)
                    if (E = [c.Zf, c.$f, c.Zf, c.vi, c.ui, c.vi, c.ui, c.$f, c.Zf, c.$f], c.style && g.Go(
                        "poi", E, {
                            type: "polygon",
                            Xb: c.style.Xb,
                            style: c.style
                        }), "fixed" === c.type) {
                        E = t;
                        c.Be && (c.style && 4 === c.direction) && (E = p);
                        if (c.Be)
                            if (E) {
                                var G = this;
                                this.Ks(b, c, e, E, function (a) {
                                    for (var c = 0; c < a.Bf.length; c++) G.NK(b, a.Bf[c].ie, a.Bf[
                                        c].je, a.Bf[c].text, a.style, e)
                                })
                            } else this.Ks(b, c, e);
                        if (c.style && !E)
                            for (E = 0; E < c.Bf.length; E++) this.NK(b, c.Bf[E].ie, c.Bf[E].je, c.Bf[E]
                                .text, c.style, e)
                    } else if ("line" === c.type)
                        for (E = 0; E < c.$O.length; E++) f = c.$O[E], Pd.xW(b, f.ie, f.je, f.OU, f.YO, f.width, f
                            .height, c.style, e);
            return m
        },
        sN: function (a, b, c, e, f, g, i, k, m, n, o, s, v, w) {
            if (a = a[1])
                for (b = 0; b < a.length; b++) {
                    var y = a[b],
                        z = y[0],
                        B = c.wj(z, "point", k, w),
                        z = c.wj(z, "pointText", k, w),
                        y = y[1],
                        C = q,
                        E = 100,
                        G = 0,
                        F = 0;
                    B && B[0] && (B = B[0], C = B.Be, E = B.zoom || 100);
                    z = z && z[0] ? z[0] : q;
                    for (B = 0; B < y.length; B++) {
                        var K = y[B][4];
                        if (K && c.Uc(K[2], k)) {
                            var O = Math.round(K[0] / 100) / m + g,
                                M = f - Math.round(K[1] / 100) / m + i;
                            if (v || !(-50 > O || -50 > M || O > n + 50 || M > o + 50)) {
                                var S = K[7] || "",
                                    da = {
                                        type: "fixed",
                                        uid: K[3] || "",
                                        name: S,
                                        uy: K[4],
                                        lt: q,
                                        Bf: [],
                                        gy: [O, M],
                                        style: z
                                    };
                                if (C) {
                                    var aa = window.iconSetInfo_high[C] || window.iconSetInfo_high[
                                    "MapRes/" + C];
                                    if (!aa) {
                                        var Aa = C.charCodeAt(0);
                                        48 <= Aa && 57 >= Aa && (aa = window.iconSetInfo_high["_" + C])
                                    }
                                    aa && (G = aa[2], F = aa[3], G = G / 2 * E / 100, F = F / 2 * E / 100,
                                        da.lt = {
                                            ie: O - G / 2,
                                            je: M - F / 2,
                                            width: G,
                                            height: F
                                        }, da.Be = C)
                                }
                                if (z) {
                                    K = K[5];
                                    "number" !== typeof K && (K = 0);
                                    var ta = aa = 0,
                                        Aa = (z.fontSize || 12) / 2,
                                        Ga = 0.2 * Aa;
                                    e.font = Pd.mx(z, c);
                                    var S = S.split("\\"),
                                        sa = S.length;
                                    da.direction = K;
                                    for (var Va = 0; Va < sa; Va++) {
                                        var He = S[Va],
                                            Yc = e.measureText(He).width;
                                        switch (K) {
                                            case 3:
                                                ta = M - Aa / 2 * sa - Ga * (sa - 1) / 2;
                                                aa = O - Yc - G / 2;
                                                ta = ta + Aa * Va + Ga * Va;
                                                break;
                                            case 1:
                                                ta = M - Aa / 2 * sa - Ga * (sa - 1) / 2;
                                                aa = O + G / 2;
                                                ta = ta + Aa * Va + Ga * Va;
                                                break;
                                            case 2:
                                                ta = M - F / 2 - Aa * sa - Ga * (sa - 1) - Ga;
                                                aa = O - Yc / 2;
                                                ta = ta + Aa * Va + Ga * Va;
                                                break;
                                            case 0:
                                                ta = M + F / 2 + Ga / 2;
                                                aa = O - Yc / 2;
                                                ta = ta + Aa * Va + Ga * Va;
                                                break;
                                            case 4:
                                                ta = M - Aa / 2 * sa - Ga * (sa - 1) / 2, aa = O - Yc / 2,
                                                    ta = ta + Aa * Va + Ga * Va
                                        }
                                        da.Bf.push({
                                            ie: aa,
                                            je: ta,
                                            width: Yc,
                                            height: Aa,
                                            text: He
                                        })
                                    }
                                }
                                s.push(da)
                            }
                        }
                    }
                }
        },
        HZ: function (a, b, c, e, f, g, i, k, m, n, o, s, v) {
            b = a[7].length;
            if ((n = c.wj(a[0], "pointText", k)) && n.length) {
                n = n[0];
                e.font = Pd.mx(n, c);
                var o = n.fontSize / 2,
                    w = a[1],
                    y = a[2];
                if (y) {
                    for (var z = y.split("").length, B = a[4], C = B.slice(0, 2), E = 2; E < B.length; E +=
                        2) C[E] = C[E - 2] + B[E], C[E + 1] = C[E - 1] + B[E + 1];
                    for (E = 2; E < B.length; E += 2) 0 === E % (2 * z) || 1 === E % (2 * z) || (C[E] = C[
                    E - 2] + B[E] / v, C[E + 1] = C[E - 1] + B[E + 1] / v);
                    for (v = 0; v < b; v++)
                        if (c.Uc(a[7][v], k)) {
                            var E = [],
                                G = l,
                                F = l,
                                K = l,
                                O = l,
                                M = y.split("");
                            a[6][v] && M.reverse();
                            for (var B = 2 * v * z, B = C.slice(B, B + 2 * z), S = 0; S < z; S++) {
                                var da = a[5][z * v + S],
                                    aa = B[2 * S] / 100 / m + g,
                                    Aa = f - B[2 * S + 1] / 100 / m + i,
                                    ta = M[S],
                                    Ga = e.measureText(ta).width;
                                if (G === l) G = aa - Ga / 2, F = Aa - o / 2, K = G + Ga, O = F + o;
                                else {
                                    var sa = aa - Ga / 2,
                                        Va = Aa - o / 2;
                                    sa < G && (G = sa);
                                    Va < F && (F = Va);
                                    sa + Ga > K && (K = sa + Ga);
                                    Va + o > O && (O = Va + o)
                                }
                                E.push({
                                    YO: ta,
                                    ie: aa,
                                    je: Aa,
                                    OU: da,
                                    width: Ga,
                                    height: o
                                })
                            }
                            s.push({
                                type: "line",
                                uy: w,
                                style: n,
                                $O: E,
                                Zf: G,
                                $f: F,
                                ui: K,
                                vi: O
                            })
                        }
                }
            }
        },
        Ks: function (a, b, c, e, f) {
            var g = b.Be;
            if ("lanche" !== g)
                if (Pd.Jx[g]) this.KK(a, b, Pd.Jx[g], e, f);
                else if (c = c.uL(g)) {
                    var i = new Image;
                    i.setAttribute("crossOrigin", "anonymous");
                    var k = this;
                    i.onload = function () {
                        Pd.Jx[g] = this;
                        k.KK(a, b, this, e, f);
                        i.onload = q
                    };
                    i.src = c
                }
        },
        KK: function (a, b, c, e, f) {
            var g = b.lt,
                i = g.ie,
                k = g.je,
                m = q,
                n = q,
                o = p,
                s = b.style ? b.style.Xb : q;
            if (b.style && 62203 === s) {
                for (var v = n = m = 0; v < b.Bf.length; v++) m < b.Bf[v].width && (m = b.Bf[v].width), n +=
                    20;
                m = Math.ceil(m) + 10
            }
            e && 519 === s && (o = t);
            m !== q && n !== q ? this.BW(a, b, c, 8, m, n) : e && o ? (m = Math.ceil(b.Bf[0].width) + 6,
                this.tW(a, b, c, 12, m, c.height / 2)) : a.drawImage(c, i, k, g.width, g.height);
            f && f(b)
        },
        BW: function (a, b, c, e, f, g) {
            var i = b.gy[0] - f / 2,
                b = b.gy[1] - g / 2;
            0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
            var k = e / 2;
            a.drawImage(c, 0, 0, e, e, i, b, k, k);
            a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
            a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
            a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
            a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
            a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
            a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
            a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
            a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k)
        },
        tW: function (a, b, c, e, f, g) {
            var i = b.gy[0] - f / 2,
                b = b.gy[1] - g / 2,
                g = e / 2;
            a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
            a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
            a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2)
        },
        xW: function (a, b, c, e, f, g, i, k, m) {
            a.font = Pd.mx(k, m);
            a.fillStyle = k.dL;
            g /= 2;
            i /= 2;
            a.save();
            a.translate(b, c);
            a.rotate(-e / 180 * Math.PI);
            0 < k.Bx && (a.lineWidth = k.Bx, a.strokeStyle = k.VL, a.strokeText(f, -g, -i));
            a.fillText(f, -g, -i);
            a.restore()
        },
        NK: function (a, b, c, e, f, g) {
            a.font = Pd.mx(f, g);
            a.fillStyle = f.dL;
            0 < f.Bx && (a.lineWidth = f.Bx, a.strokeStyle = f.VL, a.strokeText(e, b, c));
            a.fillText(e, b, c)
        },
        mx: function (a, b) {
            var c = a.fontSize / 2,
                e = 10 * a.fontWeight;
            return e = b.nE ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif' : e + (
                " " + c + "px") + " arial, sans-serif"
        },
        VZ: function (a, b) {
            var c = [],
                e = 0;
            5 === b && (e = 1);
            a.sort(function (a, b) {
                return a.x * a.y < b.x * b.y ? -1 : 1
            });
            for (var f = 0, g = a.length; f < g; f++)
                for (var i = a[f], k = 0, m = i.length; k < m; k++) {
                    var n = i[k],
                        o = l,
                        s = l,
                        v = l,
                        w = l;
                    if ("fixed" === n.type) {
                        var y = n.lt,
                            z = n.Bf;
                        y && (o = y.ie, s = y.je, v = y.ie + y.width, w = y.je + y.height);
                        for (y = 0; y < z.length; y++) {
                            var B = z[y];
                            o !== l ? (B.ie < o && (o = B.ie), B.je < s && (s = B.je), B.ie + B.width > v &&
                            (v = B.ie + B.width), B.je + B.height > w && (w = B.je + B.height)) : (
                                o = B.ie, s = B.je, v = B.ie + B.width, w = B.je + B.height)
                        }
                    } else "line" === n.type ? (o = n.Zf, s = n.$f, v = n.ui, w = n.vi) : "biaopai" === n
                        .type && (w = n.y5, o = w.ie, s = w.je, v = w.ie + w.width, w = w.je + w.height);
                    o !== l && (n.Zf = o, n.$f = s, n.ui = v, n.vi = w, c.push(n))
                }
            c.sort(function (a, b) {
                return b.uy - a.uy || b.Zf - a.Zf || b.$f - a.$f
            });
            f = 0;
            for (g = c.length; f < g; f++) {
                m = c[f];
                m.vt = t;
                m.WJ = [];
                for (k = f + 1; k < g; k++) i = c[k], m.ui - e < i.Zf || (m.Zf > i.ui - e || m.vi - e < i
                    .$f || m.$f > i.vi - e) || m.WJ.push(k)
            }
            f = 0;
            for (g = c.length; f < g; f++)
                if (k = c[f], k.vt === t) {
                    e = k.WJ;
                    k = 0;
                    for (m = e.length; k < m; k++) c[e[k]].vt = p
                }
            return c
        },
        Jx: {}
    };
    var Qd = ["round", "butt", "square"],
        Rd = ["miter", "round", "bevel"],
        Sd = {
            daojiao: [{
                stroke: "#FF6600",
                tb: 1,
                rb: "round",
                sb: "round",
                Zc: [4, 3]
            }],
            daojiao_bai: [{
                stroke: "#f5f3f0",
                tb: 1,
                rb: "round",
                sb: "round",
                Zc: [4, 3]
            }],
            junhuoxian: [],
            lundu: [{
                stroke: "#5c91c5",
                tb: 1,
                rb: "round",
                sb: "round",
                Zc: [10, 11]
            }],
            shengjie: [],
            weidingguojie: [{
                stroke: "#aea08a",
                tb: 1,
                rb: "round",
                sb: "round",
                Zc: [4, 3]
            }],
            weidingguojie_guowai: [{
                stroke: "#a29e96",
                tb: 2,
                rb: "round",
                sb: "round",
                Zc: [4, 3]
            }],
            weidingguojie_guonei: [],
            weidingshengjie_guowai: []
        },
        Td = {
            weidingshengjie_guowai: [{
                stroke: "#737373",
                tb: 1,
                rb: "round",
                sb: "round",
                Zc: [4, 3]
            }],
            junhuoxian: [{
                stroke: "#DB7093",
                tb: 1.5,
                rb: "round",
                sb: "round",
                Zc: [4, 3]
            }],
            shengjie: [{
                stroke: "#737373",
                tb: 1,
                rb: "round",
                sb: "round",
                Zc: [10, 4, 5, 4]
            }],
            weidingguojie_guonei: [{
                stroke: "#b2a471",
                tb: 2,
                rb: "round",
                sb: "round",
                Zc: [4, 3]
            }]
        },
        Ud = {};

    function Vd(a, b, c) {
        if (/^tielu|^MapRes\/tielu/.test(a)) {
            if ("off" === window[c + "zoomFrontStyle"][b].bmapRailwayVisibility) return [];
            var e = "#ffffff",
                f = "#949494";
            window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b]
                .bmapRailwayStrokeColor) && (e = window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor);
            window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b]
                .bmapRailwayFillColor) && (f = window[c + "zoomFrontStyle"][b].bmapRailwayFillColor);
            if (4 <= b && 9 >= b || 10 <= b && 16 >= b) return [{
                stroke: e,
                tb: 1.5,
                rb: "butt",
                sb: "round",
                Zc: [10, 11]
            }, {
                stroke: f,
                tb: 2,
                rb: "round",
                sb: "round"
            }];
            if (17 <= b && 18 >= b) return [{
                stroke: e,
                tb: 2.5,
                rb: "butt",
                sb: "round",
                Zc: [15, 16]
            }, {
                stroke: f,
                tb: 5,
                rb: "round",
                sb: "round"
            }];
            if (19 <= b && 20 >= b) return [{
                stroke: e,
                tb: 4.5,
                rb: "butt",
                sb: "round",
                Zc: [25, 26]
            }, {
                stroke: f,
                tb: 5,
                rb: "round",
                sb: "round"
            }]
        } else if (0 === a.indexOf("ditie_zj") || 0 === a.indexOf("MapRes/ditie_zj")) {
            if (12 <= b && 16 >= b) return [{
                stroke: "#868686",
                tb: 1,
                rb: "round",
                sb: "round",
                Zc: [7, 4]
            }];
            if (17 <= b && 18 >= b || 19 <= b && 20 >= b) return [{
                stroke: "#6e6e6e",
                tb: 1,
                rb: "round",
                sb: "round",
                Zc: [7, 4]
            }]
        } else if (/^tongdaomian|^MapRes\/tongdaomian/.test(a)) {
            if (17 === b) return [{
                stroke: "#e5e5e5",
                tb: 4,
                rb: "square",
                sb: "round"
            }, {
                stroke: "#a8a8a8",
                tb: 6,
                rb: "square",
                sb: "round"
            }];
            if (18 === b) return [{
                stroke: "#e5e5e5",
                tb: 6,
                rb: "square",
                sb: "round"
            }, {
                stroke: "#a8a8a8",
                tb: 8,
                rb: "square",
                sb: "round"
            }];
            if (19 <= b && 21 >= b) return [{
                stroke: "#e5e5e5",
                tb: 8,
                rb: "square",
                sb: "round"
            }, {
                stroke: "#a8a8a8",
                tb: 10,
                rb: "square",
                sb: "round"
            }]
        } else if (/^jietizhongduan|^dixiatongdaojieti|^MapRes\/jietizhongduan|^MapRes\/dixiatongdaojieti/.test(
            a)) {
            if (17 === b) return [{
                stroke: "#e5e5e5",
                tb: 4,
                rb: "butt",
                sb: "round",
                Zc: [2, 1]
            }, {
                stroke: "#bebebe",
                tb: 6,
                rb: "butt",
                sb: "round"
            }];
            if (18 === b) return [{
                stroke: "#e5e5e5",
                tb: 6,
                rb: "butt",
                sb: "round",
                Zc: [3, 1]
            }, {
                stroke: "#bebebe",
                tb: 8,
                rb: "butt",
                sb: "round"
            }];
            if (19 <= b && 21 >= b) return [{
                stroke: "#e5e5e5",
                tb: 8,
                rb: "butt",
                sb: "round",
                Zc: [4, 2]
            }, {
                stroke: "#bebebe",
                tb: 10,
                rb: "butt",
                sb: "round"
            }]
        } else if (/^guojietianqiao|^MapRes\/guojietianqiao/.test(a)) return 18 === b ? [{
            stroke: "#ffffff",
            tb: 6,
            rb: "butt",
            sb: "round",
            Zc: [4, 2]
        }, {
            stroke: "#bebebe",
            tb: 8,
            rb: "butt",
            sb: "round"
        }] : [{
            stroke: "#ffffff",
            tb: 8,
            rb: "butt",
            sb: "round",
            Zc: [4, 2]
        }, {
            stroke: "#bebebe",
            tb: 10,
            rb: "butt",
            sb: "round"
        }];
        return Sd[a] || Sd[a.replace("MapRes/", "")]
    }

    var Wd = {
        drawLink: function (a, b, c, e, f) {
            this.da = f.P.da;
            var g = a[1];
            g && (a = a[6], this.IO(g, c, e, b, a, f, p), this.IO(g, c, e, b, a, f, t))
        },
        IO: function (a, b, c, e, f, g, i) {
            for (var k = 0; k < a.length; k++) {
                var m = a[k][0],
                    n = g.wj(m, "line", b);
                if (n && n.length && (!i || n[0].borderWidth))
                    if (!n[0].wm || Vd(n[0].wm, b, this.da))
                        for (var o = a[k][1], s = 0; s < o.length; s++) {
                            var v = o[s][3];
                            g.Uc(v[0], b) && (v["cache" + b] || (v["cache" + b] = g.Wm(v[1], b, c, f)), v =
                                v["cache" + b], g.P.Go(e.canvas.id, v, {
                                type: "polyline",
                                Xb: m,
                                style: n
                            }), this.yW(e, v, n, i, b))
                        }
            }
        },
        drawSingleTexture: function (a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = f.wj(g[i][0], "line", c);
                    if (k && k.length)
                        for (var m = g[i][1], n = 0; n < m.length; n++) {
                            var o = m[n][11];
                            if (f.Uc(o[0], c)) {
                                var s;
                                o["cache" + c] || (o["cache" + c] = f.Wm(o[1], c, e, a));
                                s = o["cache" + c];
                                o = o[3];
                                o *= Math.pow(2, c - f.g1[c].Sc);
                                this.zW(b, s, k, o, f)
                            }
                        }
                }
        },
        zW: function (a, b, c, e, f) {
            var g = c[0].wm,
                i = this;
            if (Ud[g]) i.Ks(b, e, a, Ud[g]);
            else if (c = f.uL(g)) {
                var k = new Image;
                k.onload = function () {
                    Ud[g] = k;
                    i.Ks(b, e, a, k);
                    k.onload = q
                };
                k.src = c
            }
        },
        Ks: function (a, b, c, e) {
            var f = [a[0], a[1]],
                g = [a[2], a[3]],
                a = g[0] - f[0],
                g = g[1] - f[1],
                f = [f[0] + a / 2, f[1] + g / 2],
                i = Math.sqrt(a * a + g * g),
                b = b / 10,
                a = Math.atan2(g, a);
            c.save();
            c.translate(f[0], f[1]);
            c.rotate(Math.PI / 2 + a);
            c.drawImage(e, -b / 2, -i / 2, b, i);
            c.restore()
        },
        yW: function (a, b, c, e, f) {
            c = c[0];
            if (!e && c.wm) {
                var f = Vd(c.wm, f, this.da),
                    g = Td[c.wm] || Td[c.wm.replace("MapRes/", "")];
                if (g) {
                    this.OK(a, b, c, g, p);
                    return
                }
                if (f) {
                    this.OK(a, b, c, f, t);
                    return
                }
            }
            a.beginPath();
            a.moveTo(b[0], b[1]);
            f = 2;
            for (g = b.length; f < g; f += 2) a.lineTo(b[f], b[f + 1]);
            c.borderWidth && e ? (a.strokeStyle = c.Mo, a.lineCap = Qd[c.dV], a.lineJoin = Rd[1], a
                .lineWidth = c.borderWidth / 2, a.stroke()) : e || (a.strokeStyle = c.hx, a.lineCap =
                Qd[c.UW], a.lineJoin = Rd[1], a.lineWidth = c.$K / 2, a.stroke())
        },
        OK: function (a, b, c, e, f) {
            if (c = e[1]) {
                a.strokeStyle = c.stroke;
                a.lineCap = c.rb;
                a.lineJoin = c.sb;
                a.lineWidth = c.tb;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, g = b.length; c < g; c += 2) a.lineTo(b[c], b[c + 1]);
                a.stroke()
            }
            if (e = e[0])
                if (e.Zc) f ? this.AW(a, b, e) : this.wW(a, b, e);
                else {
                    a.strokeStyle = e.stroke;
                    a.lineCap = e.rb;
                    a.lineJoin = e.sb;
                    a.lineWidth = e.tb;
                    a.beginPath();
                    a.moveTo(b[0], b[1]);
                    c = 2;
                    for (g = b.length; c < g; c += 2) a.lineTo(b[c], b[c + 1]);
                    a.stroke()
                }
        },
        AW: function (a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.rb;
            a.lineJoin = c.sb;
            a.lineWidth = c.tb;
            a.setLineDash(c.Zc);
            a.beginPath();
            for (c = 0; c < b.length - 2; c += 2) a.lineTo(b[c], b[c + 1]);
            a.stroke();
            a.setLineDash([])
        },
        wW: function (a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.rb;
            a.lineJoin = c.sb;
            a.lineWidth = c.tb;
            var e = p,
                c = c.Zc[0];
            a.beginPath();
            for (var f = 0; f < b.length - 2; f += 2) {
                var g = b[f],
                    i = b[f + 1],
                    k = b[f + 2] - g,
                    m = b[f + 3] - i,
                    n = 0 !== k ? m / k : 0 < m ? 1E15 : -1E15,
                    m = Math.sqrt(k * k + m * m),
                    o = c;
                for (a.moveTo(g, i); 0.1 <= m;) {
                    o > m && (o = m);
                    var s = Math.sqrt(o * o / (1 + n * n));
                    0 > k && (s = -s);
                    g += s;
                    i += n * s;
                    a[e ? "lineTo" : "moveTo"](g, i);
                    m -= o;
                    e = !e
                }
            }
            a.stroke()
        }
    };
    var Xd = 3,
        Yd = 4,
        Zd = 7,
        $d = 8,
        ae = 15,
        be = 16,
        ce = {},
        de = {},
        ee = {},
        fe, ge = {
            3: {
                start: 3,
                Sc: 3
            },
            4: {
                start: 4,
                Sc: 5
            },
            5: {
                start: 4,
                Sc: 5
            },
            6: {
                start: 6,
                Sc: 7
            },
            7: {
                start: 6,
                Sc: 7
            },
            8: {
                start: 8,
                Sc: 9
            },
            9: {
                start: 8,
                Sc: 9
            },
            10: {
                start: 10,
                Sc: 10
            },
            11: {
                start: 11,
                Sc: 12
            },
            12: {
                start: 11,
                Sc: 12
            },
            13: {
                start: 11,
                Sc: 12
            },
            14: {
                start: 14,
                Sc: 15
            },
            15: {
                start: 14,
                Sc: 15
            },
            16: {
                start: 16,
                Sc: 17
            },
            17: {
                start: 16,
                Sc: 17
            },
            18: {
                start: 18,
                Sc: 19
            },
            19: {
                start: 18,
                Sc: 19
            },
            20: {
                start: 18,
                Sc: 19
            },
            21: {
                start: 18,
                Sc: 19
            }
        };

    function he(a) {
        this.P = a;
        this.Lc = a.M.devicePixelRatio;
        this.g1 = ge
    }

    he.prototype = {
        PC: function (a, b, c, e, f, g, i, k, m) {
            this.P.nO = {};
            var n = this,
                o = n.P.da;
            m || (m = 0);
            if (!window[o + "StyleBody"] && 100 > m) setTimeout(function () {
                n.PC(a, b, c, e, f, g, i, k, m + 1)
            }, 100);
            else {
                fe || (fe = k);
                var s = b.getContext("2d"),
                    v = b.parentNode;
                v.removeChild(b);
                s.clearRect(0, 0, g, g);
                v.appendChild(b);
                v = this.Lc;
                1 < v && !b._scale && (s.scale(v, v), b._scale = p);
                s.fillStyle = this.rN("#F5F3F0");
                window[o + "zoomFrontStyle"][f].bmapLandColor && (s.fillStyle = this.rN(window[o +
                "zoomFrontStyle"][f].bmapLandColor));
                o = b.style.width;
                b.style.width = "0px";
                b.style.width = o;
                s.fillRect(0, 0, g, g);
                if (a[0])
                    for (o = 0; o < a[0].length; o++) v = a[0][o], v[0] === Zd && Md.drawPoly(v, s, f, g,
                        this);
                17 <= this.P.la() ? (n.MK(a, s, f, g, i, c, e), b.Un = p) : setTimeout(function () {
                    if (!b.oH) {
                        n.MK(a, s, f, g, i, c, e);
                        b.Un = p
                    }
                }, 1)
            }
        },
        MK: function (a, b, c, e) {
            var f = this.P.da;
            if (a[0])
                for (var g = 0; g < a[0].length; g++) {
                    var i = a[0][g],
                        k = i[0];
                    k === Yd ? Wd.drawLink(i, b, c, e, this) : k === be ? Wd.drawLink(i, b, c, e, this) :
                        k === ae ? (Md.drawGaoqingRoadBorder(i, b, c, e, this), Md.drawGaoqingRoadFill(i, b,
                            c, e, this)) : 18 === k ? window[f + "zoomFrontStyle"] && (window[f +
                        "zoomFrontStyle"][c] && "off" !== window[f + "zoomFrontStyle"][c]
                            .bmapRoadarrowVisibility) && Nd.drawArrow(i, b, c, e, Math.pow(2, c - ge[c].Sc),
                            this) : k === $d ? Od.drawHregion(i, b, c, e, this) : 19 === k && Wd
                            .drawSingleTexture(i, b, c, e, this)
                }
        },
        LK: function (a, b, c, e, f, g, i) {
            var k = this,
                m = k.P.da;
            i || (i = 0);
            !window[m + "StyleBody"] && 100 > i ? setTimeout(function () {
                k.LK(a, b, c, e, f, g, i + 1)
            }, 100) : (fe || (fe = b), a.OZ = Pd.parse(a, c, e, this, f))
        },
        wj: function (a, b, c, e) {
            var f = a + "-" + b + "-" + c;
            if (e) return ce[f] || (ce[f] = this.Dg(a, b, c, e)), ce[f];
            this.P.nO[f] = this.Dg(a, b, c);
            return this.P.nO[f]
        },
        Dg: function (a, b, c, e) {
            var f = this.P.da,
                g;
            g = e || window[f + "_bmap_baseFs"];
            f = window[f + "StyleBody"];
            e = g[2];
            if ("arrow" === b) return this.DZ(e[2]);
            switch (b) {
                case "point":
                    e = e[0];
                    f = f[0] || {};
                    break;
                case "pointText":
                    e = e[1];
                    f = f[1] || {};
                    break;
                case "line":
                    e = e[3];
                    f = f[3] || {};
                    break;
                case "polygon":
                    e = e[4];
                    f = f[4] || {};
                    break;
                case "polygon3d":
                    e = e[5], f = f[5] || {}
            }
            var i = [],
                c = g[1][c - 1][0][a];
            if (!c) return i;
            for (g = 0; g < c.length; g++) {
                var k = f[c[g]] || e[c[g]];
                if (k) {
                    switch (b) {
                        case "polygon":
                            k = this.MZ(k, a);
                            break;
                        case "line":
                            k = this.IZ(k, a);
                            break;
                        case "pointText":
                            k = this.KZ(k, a);
                            break;
                        case "point":
                            k = this.JZ(k, a);
                            break;
                        case "polygon3d":
                            k = this.LZ(k, a)
                    }
                    k.f6 = c[g];
                    i[i.length] = k
                }
            }
            return i
        },
        KZ: function (a, b) {
            return {
                Xb: b,
                dL: this.Lg(a[0]),
                VL: this.Lg(a[1]),
                A2: this.Lg(a[2]),
                fontSize: a[3],
                Bx: a[4],
                fontWeight: a[5],
                fontStyle: a[6],
                fW: a[7]
            }
        },
        JZ: function (a, b) {
            return {
                Xb: b,
                uy: a[0],
                x6: a[1],
                Be: a[2],
                qY: a[3],
                g5: a[4],
                fW: a[5],
                zoom: a[6]
            }
        },
        IZ: function (a, b) {
            return {
                Xb: b,
                Mo: this.Lg(a[0]),
                hx: this.Lg(a[1]),
                borderWidth: a[2],
                $K: a[3],
                dV: a[4],
                UW: a[5],
                p4: a[6],
                q4: a[7],
                r4: a[8],
                J4: a[9],
                K4: a[10],
                eV: a[11],
                wm: a[12],
                fV: a[13],
                m3: a[14],
                H4: a[15],
                n4: a[16],
                f5: a[17],
                K5: a[18]
            }
        },
        MZ: function (a, b) {
            return {
                Xb: b,
                hx: this.Lg(a[0]),
                Mo: this.Lg(a[1]),
                borderWidth: a[2],
                eV: a[3],
                fV: a[4],
                F6: a[5],
                m4: a[6],
                j6: a[7],
                k6: this.Lg(a[8])
            }
        },
        LZ: function (a, b) {
            return {
                Xb: b,
                filter: a[0],
                DN: a[1],
                o4: a[2],
                borderWidth: a[3],
                Mo: this.Lg(a[4]),
                VW: this.Lg(a[5]),
                l3: this.Lg(a[6]),
                w5: a[7]
            }
        },
        DZ: function (a) {
            for (var b in a) return a = a[b], {
                color: this.Lg(a[0]),
                qY: a[1],
                Be: a[2]
            }
        },
        Lg: function (a) {
            var b = a;
            if (ee[b]) return ee[b];
            a >>>= 0;
            ee[b] = "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 &
                255) / 255 + ")";
            return ee[b]
        },
        rN: function (a) {
            a = a.replace("#", "");
            6 === a.length && (a += "ff");
            for (var b = "rgba(", c = 0; 8 > c; c += 2) b = 6 > c ? b + (parseInt(a.slice(c, c + 2), 16) +
                ",") : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
            return b
        },
        Uc: function (a, b) {
            var c;
            de[a] || (c = a.toString(2), 8 > c.length && (c = Array(8 - c.length + 1).join("0") + c), de[
                a] = c);
            c = de[a];
            return "1" === c[b - ge[b].start]
        },
        Wm: function (a, b, c) {
            var e = [],
                b = Math.pow(2, b - ge[b].Sc) / 100,
                f = a[0] * b,
                g = a[1] * b;
            e[e.length] = f;
            e[e.length] = c - g;
            for (var i = 2; i < a.length; i += 2) f += a[i] * b, g += a[i + 1] * b, e[e.length] = f, e[e
                .length] = c - g;
            return e
        },
        uL: function (a) {
            if (a) {
                var b = a.length % fe.length,
                    c = this.xX();
                return fe[b] + a + ".png?v=" + c.VF + "&udt=" + c.RF
            }
        },
        xX: function () {
            if (this.cE) return this.cE;
            var a = "undefined" !== typeof MSV ? MSV.Y4 : {};
            return this.cE = {
                VF: a.version ? a.version : "001",
                RF: a.I0 ? a.I0 : "20150621"
            }
        }
    };
    P = A.lang.Iu;
    Xd = 3;
    Yd = 4;
    Zd = 7;
    $d = 8;
    ae = 15;
    be = 16;

    function ud(a, b, c) {
        c = c || {};
        this.P = a;
        this.ow = b;
        this.Lc = b.DN;
        this.fb = {
            n0: "na",
            zIndex: 0,
            uO: c.tileUrls || {
                http: ["http://online0.map.bdimg.com/pvd/?qt=vtile",
                    "http://online1.map.bdimg.com/pvd/?qt=vtile",
                    "http://online2.map.bdimg.com/pvd/?qt=vtile",
                    "http://online3.map.bdimg.com/pvd/?qt=vtile",
                    "http://online4.map.bdimg.com/pvd/?qt=vtile"
                ],
                https: ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
                    "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
                    "https://ss2.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
                    "https://ss3.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
                    "https://ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv/pvd/?qt=vtile"
                ]
            },
            bE: c.iconUrls || ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/",
                "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/"
            ],
            xF: p
        };
        this.IB = "";
        this.QS = {};
        var c = c.urlOpts || {
                styles: "pl",
                extdata: 1,
                textimg: 0,
                mesh3d: 0,
                limit: 30
            },
            e;
        for (e in c) c.hasOwnProperty(e) && (this.IB = this.IB + "&" + e + "=" + c[e]);
        this.nh = {};
        this.vs = [];
        this.Bt = 0;
        this.Px = t;
        this.Jx = {};
        a = this.fb.n0;
        Gd[a] ? a = Gd[a] : (b = new Hd(a, l), a = Gd[a] = b);
        this.Hd = a;
        this.P.Hd = this.Hd
    }

    window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
    fa = ud.prototype;
    fa.za = function () {
        var a = this.P,
            b = a.ef;
        if (!this.Co) {
            var c = b.Oq(this.fb.zIndex);
            c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
            this.Co = c
        }
        b.lg.appendChild(this.Co);
        b.C4 = c;
        if (this.fb.xF) {
            ie(this);
            var e = this;
            a.addEventListener("checkvectorclick", function (a) {
                var b;
                a: {
                    b = a.offsetX;
                    var c = a.offsetY,
                        k = e.vs.OZ;
                    if (k)
                        for (var m = 0; m < k.length; m++)
                            for (var n = k[m], o = 0; o < n.length; o++)
                                if (a = n[o], !a.vt && a.lt && b > a.Zf && b < a.ui && c > a.$f &&
                                c < a.vi) {
                                    b = a.lt;
                                    b = {
                                        type: 9,
                                        name: a.name,
                                        uid: a.uid,
                                        point: {
                                            x: b.ie + b.width / 2,
                                            y: b.je + 6
                                        }
                                    };
                                    break a
                                }
                    b = q
                }
                b && (a = new P("onvectorclick"), a.y4 = b, a.Ye = "base", this.dispatchEvent(a))
            })
        }
    };

    function ie(a) {
        var b = a.P,
            c = b.ef,
            e = a.Lc,
            f = b.Cb(),
            g = f.width,
            f = f.height,
            i = H("canvas");
        i.style.cssText = "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
        i.width = g * e;
        i.height = f * e;
        a.Tx = i;
        a.Cp = i.getContext("2d");
        a.Cp.scale(e, e);
        a.Cp.textBaseline = "top";
        c.lg.appendChild(i);
        b.AS = i
    }

    fa.aY = x("Hd");
    fa.update = function (a, b) {
        b = b || {};
        this.SF = b.SF;
        b.vm && (this.J0 = b.vm);
        if (this.fb.xF && (b.lm && this.lm(), b.W_)) {
            var c = this.Lc,
                e = this.P.Cb(),
                f = e.width,
                e = e.height,
                g = this.Tx,
                i = g.style;
            i.width = f + "px";
            i.height = e + "px";
            g.width = f * c;
            g.height = e * c;
            this.Cp.scale(c, c);
            this.Cp.textBaseline = "top"
        }
        if (b.A6) {
            c = this.Co;
            f = 0;
            for (e = c.childNodes.length; f < e; f++) c.childNodes[f].Un = t
        }
        this.Ww = a;
        this.Fp(a)
    };
    fa.Fp = function (a) {
        this.vs = [];
        var b = this.P,
            c = b.la(),
            e = b.Fc.ri(b.he),
            f = this.Hd.$b(c),
            e = [Math.round(-e.lng / f), Math.round(e.lat / f)],
            f = this.Hd.Nd(c),
            g = b.da.replace(/^TANGRAM_/, ""),
            i = this.Hd.Ws(c),
            b = this.P,
            k = -b.offsetY + b.height / 2,
            m = this.Co;
        m.style.left = -b.offsetX + b.width / 2 + "px";
        m.style.top = k + "px";
        this.Ve ? this.Ve.length = 0 : this.Ve = [];
        b = 0;
        for (k = m.childNodes.length; b < k; b++) {
            var n = m.childNodes[b];
            n.mr = t;
            this.Ve.push(n)
        }
        if (b = this.Um)
            for (var o in b) delete b[o];
        else this.Um = {};
        this.We ? this.We.length = 0 : this.We = [];
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0],
                s = a[b][1];
            o = 0;
            for (var v = this.Ve.length; o < v; o++) {
                var w = this.Ve[o];
                if (w.id === g + "_" + n + "_" + s + "_" + i + "_" + c) {
                    w.mr = p;
                    this.Um[w.id] = w;
                    break
                }
            }
        }
        b = 0;
        for (k = this.Ve.length; b < k; b++) w = this.Ve[b], w.mr || (w.MB = q, delete w.MB, w.Un = t, this.We
            .push(w));
        o = [];
        v = f * this.Lc;
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0],
                s = a[b][1],
                w = n * f + e[0],
                y = (-1 - s) * f + e[1],
                z = g + "_" + n + "_" + s + "_" + i + "_" + c,
                B = this.Um[z],
                C = q;
            if (B) C = B.style, C.left = w + "px", C.top = y + "px", C.width = f + "px", C.height = f + "px", B
                .Un ? B.IF && B.IF && this.vs.push(B.IF) : (B.oH = p, B.MB = q, delete B.MB, o.push([n, s, B]));
            else {
                if (0 < this.We.length) {
                    var B = this.We.shift(),
                        E = B.getContext("2d");
                    B.getAttribute("width") !== v && (B._scale = t);
                    B.setAttribute("width", v);
                    B.setAttribute("height", v);
                    C = B.style;
                    C.width = f + "px";
                    C.height = f + "px";
                    E.clearRect(0, 0, v, v)
                } else B = document.createElement("canvas"), C = B.style, C.position = "absolute", this.fb
                    .backgroundColor && (C.background = this.fb.backgroundColor), C.width = f + "px", C.height =
                    f + "px", B.setAttribute("width", v), B.setAttribute("height", v), m.appendChild(B);
                B.id = z;
                C.left = w + "px";
                C.top = y + "px";
                o.push([n, s, B])
            }
            B.style.visibility = ""
        }
        b = 0;
        for (k = this.We.length; b < k; b++) this.We[b].style.visibility = "hidden";
        if (0 === o.length) {
            je(this);
            a = this.P.da.replace(/^TANGRAM_/, "");
            c = this.P.la();
            e = this.Hd.Ws(c);
            f = {};
            for (g = 0; g < this.Ww.length; g++) i = this.Ww[g], i = a + "_" + i[0] + "_" + i[1] + "_" + e +
                "_" + c, this.nh[i] && (f[i] = this.nh[i], this.SF && this.ow.QC.PC(this.nh[i].W0, this.nh[i]
                .l0, this.nh[i].nm, this.nh[i].bn, this.nh[i].DE, this.Hd.Nd(this.nh[i].DE), this.Hd.MD(
                this.nh[i].DE), this.fb.bE));
            this.nh = f
        } else {
            this.Bt = o.length;
            this.Px = t;
            c = this.Hd.Ws(this.P.la());
            for (e = 0; e < a.length; e++) a[e][3] = c;
            for (e = 0; e < o.length; e++) a = o[e][2], f = o[e][0], g = o[e][1], o[e][3] = c, a.Un = t, a.oH =
                t, ke(this, f, g, c, a)
        }
    };

    function ke(a, b, c, e, f) {
        var g = b + "_" + c + "_" + e,
            i = a.QS;
        if (i[g]) {
            if ("loading" === i[g].status) return
        } else i[g] = {
            status: "init",
            KN: 0
        };
        var k = a,
            m = k.P,
            n = [],
            n = "0" === D.Au ? k.fb.uO.http : k.fb.uO.https,
            o = Math.abs(b + c) % n.length,
            s = "x=" + b + "&y=" + c + "&z=" + e,
            v = le(a.ow),
            w = v.VF,
            v = v.RF,
            y = "_" + (0 > b ? "_" : "") + (0 > c ? "$" : "") + parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e,
                10).toString(36),
            s = s + a.IB + "v=" + w + "&udt=" + v + "&fn=window." + y,
            w = n[o] + "&" + s,
            w = n[o] + "&param=" + window.encodeURIComponent(Nb(s));
        window[y] = function (a) {
            clearTimeout(i[g].dl);
            i[g] = q;
            if (a) {
                var n = m.la(),
                    o;
                a: {
                    for (o = 0; o < k.Ww.length; o++) {
                        var s = k.Ww[o];
                        if (s[0] === b && s[1] === c && s[3] === e) {
                            o = p;
                            break a
                        }
                    }
                    o = t
                }
                if (o !== t) {
                    o = new P("updateindoor");
                    o.IndoorCanvas = [];
                    o.IndoorCanvas.push({
                        canvasDom: f,
                        data: a,
                        canvasID: f.id,
                        ratio: k.Lc
                    });
                    m.dispatchEvent(o);
                    if (m.M.yk) {
                        if (k.nh[f.id] = {
                            W0: a,
                            l0: f,
                            nm: b,
                            bn: c,
                            DE: n
                        }, k.ow.QC.PC(a, f, b, c, n, k.Hd.Nd(n), k.Hd.MD(n), k.fb.bE), k.fb.xF) {
                            n = [];
                            n.m0 = [b, c, e];
                            if (a[0])
                                for (o = 0; o < a[0].length; o++) a[0][o][0] === Xd && n.push({
                                    uM: a[0][o]
                                });
                            if (a[2])
                                for (o = 0; o < a[2].length; o++) n.push({
                                    XY: a[2][o]
                                });
                            f.IF = n;
                            k.vs.push(n);
                            k.Px === t && k.Bt--;
                            (0 === k.Bt || k.Px === p) && je(k)
                        }
                    } else k.Bt--, (0 === k.Bt || k.Px === p) && je(k);
                    delete window[y]
                }
            }
        };
        qa(w);
        i[g].status = "loading";
        k = a;
        i[g].dl = setTimeout(function () {
            3 > i[g].KN ? (i[g].KN++, i[g].status = "init", ke(k, b, c, e, f)) : i[g] = q
        }, 4E3)
    }

    function je(a) {
        if (a.Tx) {
            var b = a.P;
            a.Tx.style.left = -b.offsetX + "px";
            a.Tx.style.top = -b.offsetY + "px";
            var c = new P("updateindoorlabel");
            c.labelCanvasDom = b.AS;
            b.dispatchEvent(c);
            if (b.M.yk) {
                a.lm();
                var c = a.Hd,
                    e = b.la(),
                    f = c.Ws(b.la());
                a.ow.QC.LK(a.vs, a.fb.bE, a.Cp, c.Nd(e), Math.pow(2, e - f), e);
                "moving" !== a.J0 && b.dispatchEvent(new P("ontilesloaded"))
            }
        }
    }

    fa.lm = function () {
        var a = this.P.Cb(),
            b = this.Lc;
        this.Cp.clearRect(0, 0, a.width * b, a.height * b)
    };
    fa.remove = function () {
        var a = this.P.ef;
        this.Co && a.lg.removeChild(this.Co)
    };

    function td(a) {
        this.P = a.map;
        this.jf = [];
        this.Xr = {};
        this.DN = this.P.M.devicePixelRatio;
        this.QC = new he(this.P);
        this.za()
    }

    window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
    fa = td.prototype;
    fa.za = function () {
        var a = this,
            b = this.P;
        b.addEventListener("addtilelayer", function (b) {
            a.Ue(b.target)
        });
        b.addEventListener("removetilelayer", function (b) {
            a.cg(b.target)
        });
        setTimeout(function () {
            b.addEventListener("onmoveend", function (b) {
                "centerAndZoom" !== b.Sz && a.update({
                    vm: "moveend"
                })
            });
            b.addEventListener("onmoving", function () {
                a.update({
                    vm: "moving"
                })
            });
            b.addEventListener("onzoomend", function (b) {
                "centerAndZoom" !== b.Sz && a.update({
                    lm: p,
                    vm: "zoomend"
                })
            });
            b.addEventListener("centerandzoom", function () {
                a.update({
                    lm: p,
                    vm: "centerandzoom"
                })
            });
            b.addEventListener("onupdatestyles", function () {
                a.update({
                    lm: p,
                    SF: p,
                    vm: "updatestyles"
                });
                a.P.zf(a.P.Qb());
                setTimeout(function () {
                    a.P.dispatchEvent(new P("onvectordrawend"))
                }, 10)
            });
            b.addEventListener("onmaptypechange", function (b) {
                b.Ua === Oa && a.update({
                    lm: p,
                    vm: "maptypechange"
                })
            })
        }, 1);
        b.addEventListener("indoor_data_refresh", u());
        b.addEventListener("onresize", function () {
            a.update({
                W_: p
            })
        });
        a.update()
    };
    fa.Ue = function (a) {
        if (a instanceof ud) {
            for (var b = 0; b < this.jf.length; b++)
                if (this.jf[b] === a) return;
            this.jf.push(a);
            a.za();
            this.P.loaded && this.update()
        }
    };
    fa.cg = function (a) {
        if (a instanceof ud) {
            for (var b = 0; b < this.jf.length; b++)
                if (this.jf[b] === a) {
                    this.jf.splice(b, 1);
                    break
                }
            a.remove()
        }
    };
    fa.LL = function (a) {
        var b = a.getName();
        if (this.Xr[b]) return this.Xr[b];
        var c = this.P,
            e = c.la(),
            f = c.Vb,
            g = a.MD(e);
        c.da.replace(/^TANGRAM_/, "");
        var i = Math.ceil(f.lng / g),
            k = Math.ceil(f.lat / g),
            a = a.Nd(e),
            m = [i, k, (f.lng / g - i) * a, (f.lat / g - k) * a],
            e = m[0] - Math.ceil((c.width / 2 - m[2]) / a),
            f = m[1] - Math.ceil((c.height / 2 - m[3]) / a),
            g = m[0] + Math.ceil((c.width / 2 + m[2]) / a),
            c = m[1] + Math.ceil((c.height / 2 + m[3]) / a);
        this.Ie ? this.Ie.length = 0 : this.Ie = [];
        for (a = e; a < g; a++)
            for (e = f; e < c; e++) this.Ie.push([a, e]);
        this.Ie.sort(function (a) {
            return function (b, c) {
                return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(
                    c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            }
        }([i, k]));
        this.Xr[b] = this.Ie.slice(0);
        return this.Xr[b]
    };

    function le(a) {
        if (a.WF) return a.WF;
        a.WF = {
            VF: "001",
            RF: Ub("normal")
        };
        return a.WF
    }

    fa.update = function (a) {
        this.Xr = {};
        for (var b = 0; b < this.jf.length; b++) {
            var c = this.jf[b],
                e = this.LL(c.Hd);
            c.update(e, a)
        }
    };

    function ne(a, b, c) {
        this.od = a;
        this.jf = b instanceof vd ? [b] : b.slice(0);
        c = c || {};
        this.m = {
            q0: c.tips || "",
            xE: "",
            kc: c.minZoom || 4,
            qc: c.maxZoom || 18,
            w4: c.minZoom || 4,
            v4: c.maxZoom || 18,
            Py: 256,
            HF: c.textColor || "black",
            jD: c.errorImageUrl || "",
            jb: new ib(new Q(-21364736, -16023552), new Q(23855104, 19431424)),
            Fc: c.projection || new T
        };
        1 <= this.jf.length && (this.jf[0].Gw = p);
        A.extend(this.m, c)
    }

    A.extend(ne.prototype, {
        getName: x("od"),
        ft: function () {
            return this.m.q0
        },
        Q3: function () {
            return this.m.xE
        },
        $X: function () {
            return this.jf[0]
        },
        g4: x("jf"),
        Nd: function () {
            return this.m.Py
        },
        rf: function () {
            return this.m.kc
        },
        Ze: function () {
            return this.m.qc
        },
        setMaxZoom: function (a) {
            this.m.qc = a
        },
        Hm: function () {
            return this.m.HF
        },
        uj: function () {
            return this.m.Fc
        },
        J3: function () {
            return this.m.jD
        },
        Nd: function () {
            return this.m.Py
        },
        $b: function (a) {
            return Math.pow(2, 18 - a)
        },
        QL: function (a) {
            return this.$b(a) * this.Nd()
        },
        sF: function (a) {
            this.uj().UN(a)
        }
    });
    var oe = [D.url.proto + D.url.domain.TILE_BASE_URLS[0], D.url.proto + D.url.domain.TILE_BASE_URLS[1], D.url
            .proto + D.url.domain.TILE_BASE_URLS[2], D.url.proto + D.url.domain.TILE_BASE_URLS[3]
        ],
        pe = [D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/tile/", D.url.proto + D.url.domain
            .TILE_ONLINE_URLS[1] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[2] + "/tile/", D.url
            .proto + D.url.domain.TILE_ONLINE_URLS[3] + "/tile/"
        ],
        qe = {
            dark: "dl",
            light: "ll",
            normal: "pl"
        },
        re = new vd;
    re.Q_ = p;
    re.getTilesUrl = function (a, b, c) {
        var e = a.x,
            a = a.y,
            f = Ub("normal"),
            g = 1,
            c = qe[c];
        // this.map.Ix() && (g = 2);
        // e = this.map.ef.Hw(e, b).nm;
        // return (pe[Math.abs(e + a) % pe.length] + "?qt=vtile&x=" + (e + "").replace(/-/gi, "M") + "&y=" + (a +
        // 	"").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + g + (6 == A.ga.oa ?
        // 	"&color_dep=32&colors=50" : "") + "&udt=" + f + "&from=jsapi3_0").replace(/-(\d+)/gi, "M$1")
        //修改，调用本地瓦片图
        var path = config.tilesPath.length > 0 ? config.tilesPath : config.home + "tiles";
        return path + "/" + b + "/" + e + "/" + a + config.tilesExt;

    };
    var Oa = new ne("\u5730\u56fe", re, {
            tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
            maxZoom: 19
        }),
        se = new vd;
    se.tO = [D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", D.url.proto + D.url.domain
        .TIlE_PERSPECT_URLS[1] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[2] +
    "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"
    ];
    se.getTilesUrl = function (a, b) {
        var c = a.x,
            e = a.y,
            f = 256 * Math.pow(2, 20 - b),
            e = Math.round((9998336 - f * e) / f) - 1;
        // return url = this.tO[Math.abs(c + e) % this.tO.length] + this.map.Ob + "/" + this.map.Mw + "/3/lv" + (
        // 	21 - b) + "/" + c + "," + e + ".jpg"
        //修改，调用本地瓦片图
        var path = config.tilesPath.length > 0 ? config.tilesPath : config.home + "tiles";
        return path + "/" + b + "/" + e + "/" + a + config.tilesExt;
    };
    var Ra = new ne("\u4e09\u7ef4", se, {
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new kb
    });
    Ra.$b = function (a) {
        return Math.pow(2, 20 - a)
    };
    Ra.Ck = function (a) {
        if (!a) return "";
        var b = I.iC,
            c;
        for (c in b)
            if (-1 < a.search(c)) return b[c].my;
        return ""
    };
    Ra.nL = function (a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        } [a]
    };
    var te = new vd({
        Gw: p
    });
    te.getTilesUrl = function (a, b) {
        var c = a.x,
            e = a.y;
        return (oe[Math.abs(c + e) % oe.length] + "u=x=" + c + ";y=" + e + ";z=" + b +
            ";v=009;type=sate&fm=46&udt=" + Ub("satellite")).replace(/-(\d+)/gi, "M$1")
    };
    var bb = new ne("\u536b\u661f", te, {
            tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
            minZoom: 4,
            maxZoom: 19,
            textColor: "white"
        }),
        ue = new vd({
            transparentPng: p
        });
    ue.getTilesUrl = function (a, b) {
        var c = a.x,
            e = a.y,
            f = Ub("satelliteStreet");
        return (pe[Math.abs(c + e) % pe.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (e +
            "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == A.ga.oa ?
            "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
    };
    var Ta = new ne("\u6df7\u5408", [te, ue], {
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    });
    var ve = 1,
        X = {};
    window.k1 = X;

    function Y(a, b) {
        A.lang.Ja.call(this);
        this.nd = {};
        this.gn(a);
        b = b || {};
        b.na = b.renderOptions || {};
        this.m = {
            na: {
                Aa: b.na.panel || q,
                map: b.na.map || q,
                vg: b.na.autoViewport || p,
                Yt: b.na.selectFirstResult,
                Jm: b.na.highlightMode,
                jc: b.na.enableDragging || t
            },
            Mt: b.onSearchComplete || u(),
            hN: b.onMarkersSet || u(),
            gN: b.onInfoHtmlSet || u(),
            jN: b.onResultsHtmlSet || u(),
            fN: b.onGetBusListComplete || u(),
            eN: b.onGetBusLineComplete || u(),
            cN: b.onBusListHtmlSet || u(),
            bN: b.onBusLineHtmlSet || u(),
            NE: b.onPolylinesSet || u(),
            Qp: b.reqFrom || ""
        };
        this.m.na.vg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b
            .renderOptions.autoViewport ? b.renderOptions.autoViewport : p;
        this.m.na.Aa = A.Ic(this.m.na.Aa)
    }

    A.xa(Y, A.lang.Ja);
    A.extend(Y.prototype, {
        getResults: function () {
            return this.Kc ? this.Oi : this.ka
        },
        enableAutoViewport: function () {
            this.m.na.vg = p
        },
        disableAutoViewport: function () {
            this.m.na.vg = t
        },
        gn: function (a) {
            a && (this.nd.src = a)
        },
        eu: function (a) {
            this.m.Mt = a || u()
        },
        setMarkersSetCallback: function (a) {
            this.m.hN = a || u()
        },
        setPolylinesSetCallback: function (a) {
            this.m.NE = a || u()
        },
        setInfoHtmlSetCallback: function (a) {
            this.m.gN = a || u()
        },
        setResultsHtmlSetCallback: function (a) {
            this.m.jN = a || u()
        },
        Fm: x("Se")
    });
    var we = {
        AG: D.ud,
        lb: function (a, b, c, e, f) {
            this.YZ(b);
            var g = (1E5 * Math.random()).toFixed(0);
            D._rd["_cbk" + g] = function (b) {
                b.result && b.result.error && 202 === b.result.error ? alert(
                    "\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01"
                ) : (c = c || {}, a && a(b, c), delete D._rd["_cbk" + g])
            };
            e = e || "";
            b = c && c.O0 ? Jb(b, encodeURI) : Jb(b, encodeURIComponent);
            this.AG = c && c.WK ? c.IN ? c.IN : D.Gp : D.ud;
            e = this.AG + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            f || (e += "&res=api");
            e += "&ak=" + pa;
            qa(e + ("&callback=BMap._rd._cbk" + g))
        },
        YZ: function (a) {
            if (a.qt) {
                var b = "";
                switch (a.qt) {
                    case "bt":
                        b = "z_qt|bt";
                        break;
                    case "nav":
                        b = "z_qt|nav";
                        break;
                    case "walk":
                        b = "z_qt|walk";
                        break;
                    case "bse":
                        b = "z_qt|bse";
                        break;
                    case "nse":
                        b = "z_qt|nse";
                        break;
                    case "drag":
                        b = "z_qt|drag"
                }
                "" !== b && D.alog("cus.fire", "count", b)
            }
        }
    };
    window.y1 = we;
    D._rd = {};
    var eb = {};
    window.x1 = eb;
    eb.ZE = function (a) {
        a = a.replace(/<\/?[^>]*>/g, "");
        return a = a.replace(/[ | ]* /g, " ")
    };
    eb.EZ = function (a) {
        return a.replace(
            /([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g,
            "$1,$2;")
    };
    eb.FZ = function (a, b) {
        return a.replace(RegExp(
            "(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" +
            b + "}", "ig"), "$1")
    };
    var xe = 2,
        ye = 6,
        ze = 8,
        Ae = 2,
        Be = 3,
        Ce = 6,
        De = 0,
        Ee = "bt",
        Fe = "nav",
        Ge = "walk",
        Ke = "bl",
        Le = "bsl",
        Me = "ride",
        Ne = 15,
        Oe = 18;
    D.I = window.Instance = A.lang.Tc;

    function Pe(a, b, c) {
        A.lang.Ja.call(this);
        if (a) {
            this.cb = "object" == typeof a ? a : A.Ic(a);
            this.page = 1;
            this.Od = 100;
            this.UJ = "pg";
            this.bg = 4;
            this.eK = b;
            this.update = p;
            a = {
                page: 1,
                p6: 100,
                Od: 100,
                bg: 4,
                UJ: "pg",
                update: p
            };
            c || (c = a);
            for (var e in c) "undefined" != typeof c[e] && (this[e] = c[e]);
            this.Ba()
        }
    }

    A.extend(Pe.prototype, {
        Ba: function () {
            this.za()
        },
        za: function () {
            this.uV();
            this.cb.innerHTML = this.TV()
        },
        uV: function () {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Od)) && (this.Od = 1);
            1 > this.page && (this.page = 1);
            1 > this.Od && (this.Od = 1);
            this.page > this.Od && (this.page = this.Od);
            this.page = parseInt(this.page);
            this.Od = parseInt(this.Od)
        },
        X3: function () {
            location.search.match(RegExp("[?&]?" + this.UJ + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        TV: function () {
            var a = [],
                b = this.page - 1,
                c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.bg) {
                    var e;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'
                        .replace("{temp1}", "BMap.I('" + this.da + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'
                    .replace("{temp2}", "BMap.I('" + this.da + "').toPage(" + b + ");"))
            }
            if (this.page < this.bg) e = 0 == this.page % this.bg ? this.page - this.bg - 1 : this
                .page - this.page % this.bg + 1, b = e + this.bg - 1;
            else {
                e = Math.floor(this.bg / 2);
                var f = this.bg % 2 - 1,
                    b = this.Od > this.page + e ? this.page + e : this.Od;
                e = this.page - e - f
            }
            this.page > this.Od - this.bg && this.page >= this.bg && (e = this.Od - this.bg + 1, b =
                this.Od);
            for (f = e; f <= b; f++) 0 < f && (f == this.page ? a.push(
                '<span style="margin-right:3px">' + f + "</span>") : 1 <= f && f <= this.Od && (
                e =
                    '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' +
                    f + "]</a></span>", a.push(e.replace("{temp3}", "BMap.I('" + this.da +
                    "').toPage(" + f + ");"))));
            c > this.Od || a.push(
                '<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'
                    .replace("{temp4}", "BMap.I('" + this.da + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function (a) {
            a = a ? a : 1;
            "function" == typeof this.eK && (this.eK(a), this.page = a);
            this.update && this.Ba()
        }
    });

    function gb(a, b) {
        Y.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.hn(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.IC() :
            this.bD();
        this.ta = [];
        this.Cf = [];
        this.La = -1;
        this.Qa = [];
        var c = this;
        Ua.load("local", function () {
            c.zz()
        }, p)
    }

    A.xa(gb, Y, "LocalSearch");
    gb.rq = 10;
    gb.t1 = 1;
    gb.En = 100;
    gb.oG = 2E3;
    gb.xG = 1E5;
    A.extend(gb.prototype, {
        search: function (a, b) {
            this.Qa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        dn: function (a, b, c) {
            this.Qa.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        Wp: function (a, b, c, e) {
            this.Qa.push({
                method: "searchNearby",
                arguments: [a, b, c, e]
            })
        },
        we: function () {
            delete this.Ka;
            delete this.Se;
            delete this.ka;
            delete this.ra;
            this.La = -1;
            this.Va();
            this.m.na.Aa && (this.m.na.Aa.innerHTML = "")
        },
        Im: u(),
        bD: function () {
            this.m.na.Yt = p
        },
        IC: function () {
            this.m.na.Yt = t
        },
        hn: function (a) {
            this.m.Qk = "number" == typeof a && !isNaN(a) ? 1 > a ? gb.rq : a > gb.En ? gb.rq : a : gb
                .rq
        },
        tf: function () {
            return this.m.Qk
        },
        toString: ea("LocalSearch")
    });
    var Qe = gb.prototype;
    V(Qe, {
        clearResults: Qe.we,
        setPageCapacity: Qe.hn,
        getPageCapacity: Qe.tf,
        gotoPage: Qe.Im,
        searchNearby: Qe.Wp,
        searchInBounds: Qe.dn,
        search: Qe.search,
        enableFirstResultSelection: Qe.bD,
        disableFirstResultSelection: Qe.IC
    });

    function Re(a, b) {
        Y.call(this, a, b)
    }

    A.xa(Re, Y, "BaseRoute");
    A.extend(Re.prototype, {
        we: u()
    });

    function Se(a, b) {
        Y.call(this, a, b);
        b = b || {};
        this.jn(b.policy);
        this.oF(b.intercityPolicy);
        this.tF(b.transitTypePolicy);
        this.hn(b.pageCapacity);
        this.Eb = Ee;
        this.Fn = ve;
        this.ta = [];
        this.La = -1;
        this.m.sl = b.enableTraffic || t;
        this.Qa = [];
        var c = this;
        Ua.load("route", function () {
            c.Dd()
        })
    }

    Se.En = 100;
    Se.qP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    Se.rP = [0, 3, 4, 0, 0, 0, 5];
    A.xa(Se, Re, "TransitRoute");
    A.extend(Se.prototype, {
        jn: function (a) {
            this.m.Pd = 0 <= a && 5 >= a ? a : 0
        },
        oF: function (a) {
            this.m.Nm = 0 <= a && 2 >= a ? a : 0
        },
        tF: function (a) {
            this.m.qn = 0 <= a && 2 >= a ? a : 0
        },
        zA: function (a, b) {
            this.Qa.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function (a, b) {
            this.Qa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        hn: function (a) {
            if ("string" === typeof a && (a = parseInt(a, 10), isNaN(a))) {
                this.m.Qk = Se.En;
                return
            }
            this.m.Qk = "number" !== typeof a ? Se.En : 1 <= a && a <= Se.En ? Math.round(a) : Se.En
        },
        toString: ea("TransitRoute"),
        l2: function (a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var Te = Se.prototype;
    V(Te, {
        _internalSearch: Te.zA
    });

    function Ue(a, b) {
        Y.call(this, a, b);
        this.ta = [];
        this.La = -1;
        this.Qa = [];
        var c = this,
            e = this.m.na;
        1 !== e.Jm && 2 !== e.Jm && (e.Jm = 1);
        this.Wn = this.m.na.jc ? p : t;
        Ua.load("route", function () {
            c.Dd()
        });
        this.Mx && this.Mx()
    }

    Ue.GP =
        " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053"
            .split(" ");
    A.xa(Ue, Re, "DWRoute");
    A.extend(Ue.prototype, {
        search: function (a, b, c) {
            this.Qa.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });

    function Ve(a, b) {
        Ue.call(this, a, b);
        b = b || {};
        this.m.sl = b.enableTraffic || t;
        this.jn(b.policy);
        this.Eb = Fe;
        this.Fn = Be
    }

    A.xa(Ve, Ue, "DrivingRoute");
    Ve.prototype.jn = function (a) {
        this.m.Pd = 0 <= a && 5 >= a ? a : 0
    };

    function We(a, b) {
        Ue.call(this, a, b);
        this.Eb = Ge;
        this.Fn = Ae;
        this.Wn = t
    }

    A.xa(We, Ue, "WalkingRoute");

    function Xe(a, b) {
        Ue.call(this, a, b);
        b = b || {};
        this.m.sl = b.enableTraffic || t;
        this.LS = b.renderOptions.lineType || 0;
        this.Eb = Fe;
        this.Fn = Be
    }

    A.xa(Xe, Ue, "TruckRoute");
    Xe.prototype.jn = function (a) {
        this.m.Pd = 0 <= a && 5 >= a ? a : 0
    };

    function Ye(a, b) {
        Ue.call(this, a, b);
        this.Eb = Me;
        this.Fn = Ce;
        this.Wn = t
    }

    A.xa(Ye, Ue, "RidingRoute");

    function Ze(a, b) {
        A.lang.Ja.call(this);
        this.Yf = [];
        this.Sk = [];
        this.m = b;
        this.Bj = a;
        this.map = this.m.na.map || q;
        this.QN = this.m.QN;
        this.Fb = q;
        this.wk = 0;
        this.EF = "";
        this.qf = 1;
        this.iD = "";
        this.Rp = [0, 0, 0, 0, 0, 0, 0];
        this.FM = [];
        this.rs = [1, 1, 1, 1, 1, 1, 1];
        this.BO = [1, 1, 1, 1, 1, 1, 1];
        this.Sp = [0, 0, 0, 0, 0, 0, 0];
        this.an = [0, 0, 0, 0, 0, 0, 0];
        this.Ib = [{
            B: "",
            Id: 0,
            tn: 0,
            x: 0,
            y: 0,
            sa: -1
        }, {
            B: "",
            Id: 0,
            tn: 0,
            x: 0,
            y: 0,
            sa: -1
        }, {
            B: "",
            Id: 0,
            tn: 0,
            x: 0,
            y: 0,
            sa: -1
        }, {
            B: "",
            Id: 0,
            tn: 0,
            x: 0,
            y: 0,
            sa: -1
        }, {
            B: "",
            Id: 0,
            tn: 0,
            x: 0,
            y: 0,
            sa: -1
        }, {
            B: "",
            Id: 0,
            tn: 0,
            x: 0,
            y: 0,
            sa: -1
        }, {
            B: "",
            Id: 0,
            tn: 0,
            x: 0,
            y: 0,
            sa: -1
        }];
        this.fi = -1;
        this.vu = [];
        this.PF = [];
        Ua.load("route", u())
    }

    A.lang.xa(Ze, A.lang.Ja, "RouteAddr");
    var $e = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test($e);
    var af = /android/i.test($e);

    function bf(a) {
        this.af = a || {}
    }

    A.extend(bf.prototype, {
        PN: function (a, b, c) {
            var e = this;
            Ua.load("route", function () {
                e.Dd(a, b, c)
            })
        }
    });

    function cf(a) {
        this.m = {};
        A.extend(this.m, a);
        this.Qa = [];
        var b = this;
        Ua.load("othersearch", function () {
            b.Dd()
        })
    }

    A.xa(cf, A.lang.Ja, "Geocoder");
    A.extend(cf.prototype, {
        Em: function (a, b, c) {
            this.Qa.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        Bm: function (a, b, c) {
            this.Qa.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: ea("Geocoder")
    });
    var df = cf.prototype;
    V(df, {
        getPoint: df.Em,
        getLocation: df.Bm
    });

    function Geolocation(a) {
        a = a || {};
        this.M = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5,
            enableHighAccuracy: a.enableHighAccuracy || t,
            Ii: a.SDKLocation || t
        };
        this.ue = [];
        var b = this;
        Ua.load("othersearch", function () {
            for (var a = 0, e; e = b.ue[a]; a++) b[e.method].apply(b, e.arguments)
        })
    }

    A.extend(Geolocation.prototype, {
        getCurrentPosition: function (a, b) {
            this.ue.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: function () {
            return xe
        },
        enableSDKLocation: function () {
            J() && (this.M.Ii = p)
        },
        disableSDKLocation: function () {
            this.M.Ii = t
        }
    });

    function ef(a) {
        a = a || {};
        a.na = a.renderOptions || {};
        this.m = {
            na: {
                map: a.na.map || q
            }
        };
        this.Qa = [];
        var b = this;
        Ua.load("othersearch", function () {
            b.Dd()
        })
    }

    A.xa(ef, A.lang.Ja, "LocalCity");
    A.extend(ef.prototype, {
        get: function (a) {
            this.Qa.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: ea("LocalCity")
    });

    function ff() {
        this.Qa = [];
        var a = this;
        Ua.load("othersearch", function () {
            a.Dd()
        })
    }

    A.xa(ff, A.lang.Ja, "Boundary");
    A.extend(ff.prototype, {
        get: function (a, b) {
            this.Qa.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: ea("Boundary")
    });

    function gf(a, b) {
        Y.call(this, a, b);
        this.DP = Ke;
        this.FP = Ne;
        this.CP = Le;
        this.EP = Oe;
        this.Qa = [];
        var c = this;
        Ua.load("buslinesearch", function () {
            c.Dd()
        })
    }

    gf.zv = I.ua + "iw_plus.gif";
    gf.zS = I.ua + "iw_minus.gif";
    gf.pU = I.ua + "stop_icon.png";
    A.xa(gf, Y);
    A.extend(gf.prototype, {
        getBusList: function (a) {
            this.Qa.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function (a) {
            this.Qa.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function (a) {
            this.m.fN = a || u()
        },
        setGetBusLineCompleteCallback: function (a) {
            this.m.eN = a || u()
        },
        setBusListHtmlSetCallback: function (a) {
            this.m.cN = a || u()
        },
        setBusLineHtmlSetCallback: function (a) {
            this.m.bN = a || u()
        },
        setPolylinesSetCallback: function (a) {
            this.m.NE = a || u()
        }
    });

    function hf(a) {
        Y.call(this, a);
        a = a || {};
        this.fb = {
            input: a.input || q,
            bC: a.baseDom || q,
            types: a.types || [],
            Mt: a.onSearchComplete || u()
        };
        this.nd.src = a.location || "\u5168\u56fd";
        this.gj = "";
        this.sg = q;
        this.WH = "";
        this.Vi();
        Sa(Ka);
        var b = this;
        Ua.load("autocomplete", function () {
            b.Dd()
        })
    }

    A.xa(hf, Y, "Autocomplete");
    A.extend(hf.prototype, {
        Vi: u(),
        show: u(),
        aa: u(),
        uF: function (a) {
            this.fb.types = a
        },
        gn: function (a) {
            this.nd.src = a
        },
        search: ca("gj"),
        Ay: ca("WH"),
        eu: function (a) {
            this.fb.Mt = a
        }
    });
    var Wa;

    function Qa(a, b) {
        function c() {
            f.m.visible ? ("inter" === f.Pe && Xa() && f.m.haveBreakId && f.m.indoorExitControl === p ? A.U.show(f
                .jr) : A.U.aa(f.jr), this.m.closeControl && this.Gf && this.P && this.P.Ta() === this.R ? A
                .U.show(f.Gf) : A.U.aa(f.Gf), this.m.forceCloseControl && A.U.show(f.Gf)) : (A.U.aa(f.Gf), A.U
                .aa(f.jr))
        }

        this.R = "string" == typeof a ? A.fa(a) : a;
        this.da = jf++;
        this.m = {
            enableScrollWheelZoom: p,
            panoramaRenderer: Pa() ? "javascript" : "flash",
            swfSrc: D.mi("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: p,
            indoorExitControl: p,
            indoorFloorControl: t,
            linksControl: p,
            clickOnRoad: p,
            navigationControl: p,
            closeControl: p,
            indoorSceneSwitchControl: p,
            albumsControl: t,
            albumsControlOptions: {},
            copyrightControlOptions: {},
            forceCloseControl: t,
            haveBreakId: t
        };
        var b = b || {},
            e;
        for (e in b) this.m[e] = b[e];
        b.closeControl === p && (this.m.forceCloseControl = p);
        b.useWebGL === t && Pa(t);
        this.Oa = {
            heading: 0,
            pitch: 0
        };
        this.eo = [];
        this.Mb = this.hb = q;
        this.mk = this.gr();
        this.ta = [];
        this.Rc = 1;
        this.Pe = this.XS = this.Wg = "";
        this.Oe = {};
        this.Sf = q;
        this.eh = [];
        this.yr = [];
        "cvsRender" == this.mk || Pa() ? (this.fk = 90, this.hk = -90) : "cssRender" == this.mk && (this.fk = 45,
            this.hk = -45);
        this.Dr = t;
        var f = this;
        this.fo = function () {
            this.mk === "flashRender" ? Ua.load("panoramaflash", function () {
                f.Vi()
            }, p) : Ua.load("panorama", function () {
                f.ob()
            }, p);
            b.Ye == "api" ? Sa(Fa) : Sa(Ha);
            this.fo = u()
        };
        this.m.JS !== p && (this.fo(), D.Cq("cus.fire", "count", "z_loadpanoramacount"));
        this.CT(this.R);
        this.addEventListener("id_changed", function () {
            Sa(Ea, {
                from: b.Ye
            })
        });
        this.SP();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }

    var kf = 4,
        lf = 1,
        mf = 5,
        jf = 0;
    A.lang.xa(Qa, A.lang.Ja, "Panorama");
    A.extend(Qa.prototype, {
        SP: function () {
            var a = this,
                b = this.Gf = H("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "\u9000\u51fa\u5168\u666f";
            b.onclick = function () {
                a.aa()
            };
            this.R.appendChild(b);
            var c = this.jr = H("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
            c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
            c.onclick = function () {
                a.gp()
            };
            this.R.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor =
                "rgb(37,37,37)", c.style.backgroundColor = "rgb(37,37,37)")
        },
        gp: u(),
        CT: function (a) {
            var b, c;
            b = a.style;
            c = Ya(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = Ya(a).zIndex, !a || "auto" === a) b.zIndex = 0
        },
        CX: x("eo"),
        Zb: x("hb"),
        bY: x("hw"),
        fO: x("hw"),
        ma: x("Mb"),
        Na: x("Oa"),
        la: x("Rc"),
        Bg: x("Wg"),
        Z3: function () {
            return this.h2 || []
        },
        S3: x("XS"),
        dt: x("Pe"),
        Dy: function (a) {
            a !== this.Pe && (this.Pe = a, this.dispatchEvent(new P("onscene_type_changed")))
        },
        eO: function (a) {
            a !== mf && (mf = a)
        },
        $N: function (a) {
            a !== kf && (kf = a)
        },
        Gc: function (a, b, c) {
            "object" === typeof b && (c = b, b = l);
            a != this.hb && (this.Bl = this.hb, this.Cl = this.Mb, this.hb = a, this.Pe = b || "street",
                this.Mb = q, c && c.pov && this.yd(c.pov))
        },
        va: function (a) {
            a.Ub(this.Mb) || (this.Bl = this.hb, this.Cl = this.Mb, this.Mb = a, this.hb = q)
        },
        yd: function (a) {
            if (a) {
                var a = this.Oa.pitch,
                    b = this.Oa.heading,
                    b = this.BC(b);
                a > this.fk ? a = this.fk : a < this.hk && (a = this.hk);
                this.Dr = p;
                this.Oa.pitch = a;
                this.Oa.heading = b
            }
        },
        L_: function (a, b) {
            this.hk = 0 <= a ? 0 : a;
            this.fk = 0 >= b ? 0 : b
        },
        BC: function (a) {
            return a - 360 * Math.floor(a / 360)
        },
        Xc: function (a) {
            a != this.Rc && (a > kf && (a = kf), a < lf && (a = lf), a != this.Rc && (this.Rc = a),
            "cssRender" === this.mk && this.yd(this.Oa))
        },
        vB: function () {
            if (this.P)
                for (var a = this.P.vx(), b = 0; b < a.length; b++) (a[b] instanceof W || a[
                    b] instanceof dd) && a[b].point && this.ta.push(a[b])
        },
        pF: ca("P"),
        du: function (a) {
            this.Sf = a || "none"
        },
        Gj: function (a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b]) this.m[b][c] = a[b][c];
                else this.m[b] = a[b];
                a.closeControl === p && (this.m.forceCloseControl = p);
                a.closeControl === t && (this.m.forceCloseControl = t);
                switch (b) {
                    case "linksControl":
                        this.dispatchEvent(new P("onlinks_visible_changed"));
                        break;
                    case "clickOnRoad":
                        this.dispatchEvent(new P("onclickonroad_changed"));
                        break;
                    case "navigationControl":
                        this.dispatchEvent(new P("onnavigation_visible_changed"));
                        break;
                    case "indoorSceneSwitchControl":
                        this.dispatchEvent(new P("onindoor_default_switch_mode_changed"));
                        break;
                    case "albumsControl":
                        this.dispatchEvent(new P("onalbums_visible_changed"));
                        break;
                    case "albumsControlOptions":
                        this.dispatchEvent(new P("onalbums_options_changed"));
                        break;
                    case "copyrightControlOptions":
                        this.dispatchEvent(new P("oncopyright_options_changed"));
                        break;
                    case "closeControl":
                        this.dispatchEvent(new P("onclose_options_changed"));
                        break;
                    case "indoorExitControl":
                        this.dispatchEvent(new P("onindoorexit_options_changed"));
                        break;
                    case "indoorFloorControl":
                        this.dispatchEvent(new P("onindoorfloor_options_changed"))
                }
            }
        },
        Mk: function () {
            this.Kl.style.visibility = "hidden"
        },
        Hy: function () {
            this.Kl.style.visibility = "visible"
        },
        LW: function () {
            this.m.enableScrollWheelZoom = p
        },
        lW: function () {
            this.m.enableScrollWheelZoom = t
        },
        show: function () {
            this.m.visible = p
        },
        aa: function () {
            this.m.visible = t
        },
        gr: function () {
            return Xa() && !J() && "javascript" != this.m.panoramaRenderer ? "flashRender" : !J() &&
            Rb() ? "cvsRender" : "cssRender"
        },
        Ra: function (a) {
            this.Oe[a.qd] = a
        },
        Jb: function (a) {
            delete this.Oe[a]
        },
        Ax: function () {
            return this.m.visible
        },
        ph: function () {
            return new N(this.R.clientWidth, this.R.clientHeight)
        },
        Ta: x("R"),
        kL: function () {
            var a = D.mi("baidumap", "?"),
                b = this.Zb();
            if (b) {
                var b = {
                        panotype: this.dt(),
                        heading: this.Na().heading,
                        pitch: this.Na().pitch,
                        pid: b,
                        panoid: b,
                        from: "api"
                    },
                    c;
                for (c in b) a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        Fx: function () {
            this.Gj({
                copyrightControlOptions: {
                    logoVisible: t
                }
            })
        },
        yF: function () {
            this.Gj({
                copyrightControlOptions: {
                    logoVisible: p
                }
            })
        },
        TB: function (a) {
            function b(a, b) {
                return function () {
                    a.yr.push({
                        RM: b,
                        QM: arguments
                    })
                }
            }

            for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++) e = c[f], this[
                e] = b(this, e);
            this.eh.push(a)
        },
        $E: function (a) {
            for (var b = this.eh.length; b--;) this.eh[b] === a && this.eh.splice(b, 1)
        },
        nF: u()
    });
    var nf = Qa.prototype;
    V(nf, {
        setId: nf.Gc,
        setPosition: nf.va,
        setPov: nf.yd,
        setZoom: nf.Xc,
        setOptions: nf.Gj,
        getId: nf.Zb,
        getPosition: nf.ma,
        getPov: nf.Na,
        getZoom: nf.la,
        getLinks: nf.CX,
        getBaiduMapUrl: nf.kL,
        hideMapLogo: nf.Fx,
        showMapLogo: nf.yF,
        enableDoubleClickZoom: nf.i3,
        disableDoubleClickZoom: nf.Z2,
        enableScrollWheelZoom: nf.LW,
        disableScrollWheelZoom: nf.lW,
        show: nf.show,
        hide: nf.aa,
        addPlugin: nf.TB,
        removePlugin: nf.$E,
        getVisible: nf.Ax,
        addOverlay: nf.Ra,
        removeOverlay: nf.Jb,
        getSceneType: nf.dt,
        setPanoramaPOIType: nf.du,
        exitInter: nf.gp,
        setInteractiveState: nf.nF
    });
    V(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });

    function of() {
        A.lang.Ja.call(this);
        this.qd = "PanoramaOverlay_" + this.da;
        this.W = q;
        this.Wa = p
    }

    A.lang.xa(of, A.lang.Ja, "PanoramaOverlayBase");
    A.extend(of.prototype, {
        V3: x("qd"),
        za: function () {
            ba("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function () {
            ba("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Rf: function () {
            ba("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });

    function pf(a, b) {
        of.call(this);
        var c = {
                position: q,
                altitude: 2,
                displayDistance: p
            },
            b = b || {},
            e;
        for (e in b) c[e] = b[e];
        this.Mb = c.position;
        this.Sj = a;
        this.Dq = c.altitude;
        this.eR = c.displayDistance;
        this.HF = c.color;
        this.YL = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.XJ = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.aK = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.dE = c.imageUrl;
        this.size = c.size;
        this.Ce = c.image;
        this.width = c.width;
        this.height = c.height;
        this.tY = c.imageData;
        this.borderWidth = c.borderWidth
    }

    A.lang.xa(pf, of, "PanoramaLabel");
    A.extend(pf.prototype, {
        y3: x("borderWidth"),
        getImageData: x("tY"),
        Hm: x("HF"),
        N3: x("YL"),
        u3: x("backgroundColor"),
        v3: x("XJ"),
        w3: x("borderColor"),
        x3: x("aK"),
        L3: x("fontSize"),
        W3: x("padding"),
        O3: x("dE"),
        Cb: x("size"),
        ox: x("Ce"),
        va: function (a) {
            this.Mb = a;
            this.Rf("position", a)
        },
        ma: x("Mb"),
        Pc: function (a) {
            this.Sj = a;
            this.Rf("content", a)
        },
        Dk: x("Sj"),
        hF: function (a) {
            this.Dq = a;
            this.Rf("altitude", a)
        },
        jp: x("Dq"),
        Na: function () {
            var a = this.ma(),
                b = q,
                c = q;
            this.W && (c = this.W.ma());
            if (a && c)
                if (a.Ub(c)) b = this.W.Na();
                else {
                    b = {};
                    b.heading = qf(a.lng - c.lng, a.lat - c.lat) || 0;
                    var a = b,
                        c = this.jp(),
                        e = this.Zn();
                    a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
                }
            return b
        },
        Zn: function () {
            var a = 0,
                b, c;
            this.W && (b = this.W.ma(), (c = this.ma()) && !c.Ub(b) && (a = T.Ek(b, c)));
            return a
        },
        aa: function () {
            ba("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        show: function () {
            ba("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Rf: u()
    });
    var rf = pf.prototype;
    V(rf, {
        setPosition: rf.va,
        getPosition: rf.ma,
        setContent: rf.Pc,
        getContent: rf.Dk,
        setAltitude: rf.hF,
        getAltitude: rf.jp,
        getPov: rf.Na,
        show: rf.show,
        hide: rf.aa
    });

    function sf(a, b) {
        of.call(this);
        var c = {
                icon: "",
                title: "",
                panoInfo: q,
                altitude: 2
            },
            b = b || {},
            e;
        for (e in b) c[e] = b[e];
        this.Mb = a;
        this.TH = c.icon;
        this.qJ = c.title;
        this.Dq = c.altitude;
        this.oT = c.panoInfo;
        this.Oa = {
            heading: 0,
            pitch: 0
        }
    }

    A.lang.xa(sf, of, "PanoramaMarker");
    A.extend(sf.prototype, {
        va: function (a) {
            this.Mb = a;
            this.Rf("position", a)
        },
        ma: x("Mb"),
        Hc: function (a) {
            this.qJ = a;
            this.Rf("title", a)
        },
        rp: x("qJ"),
        Wb: function (a) {
            this.TH = icon;
            this.Rf("icon", a)
        },
        lp: x("TH"),
        hF: function (a) {
            this.Dq = a;
            this.Rf("altitude", a)
        },
        jp: x("Dq"),
        OD: x("oT"),
        Na: function () {
            var a = q;
            if (this.W) {
                var a = this.W.ma(),
                    b = this.ma(),
                    a = qf(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else a = this.Oa;
            return a
        },
        Rf: u()
    });
    var tf = sf.prototype;
    V(tf, {
        setPosition: tf.va,
        getPosition: tf.ma,
        setTitle: tf.Hc,
        getTitle: tf.rp,
        setAltitude: tf.hF,
        getAltitude: tf.jp,
        getPanoInfo: tf.OD,
        getIcon: tf.lp,
        setIcon: tf.Wb,
        getPov: tf.Na
    });

    function qf(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI),
                e = 0;
            0 < a && 0 > b && (e = 90);
            0 > a && 0 > b && (e = 180);
            0 > a && 0 < b && (e = 270);
            c = (c + 90) % 90 + e
        } else 0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }

    function Pa(a) {
        if ("boolean" === typeof uf) return uf;
        if (a === t || !window.WebGLRenderingContext) return uf = t;
        if (A.platform.yj) {
            a = 0;
            try {
                var b = q,
                    c = navigator.userAgent.toLowerCase();
                0 < c.indexOf("android") && (b = (c.match(/android [\d._]+/gi) + "").replace(/[^0-9|_.]/gi, "")
                    .replace(/_/gi, "."), b = parseInt(b.split(".")[0], 10));
                a = b
            } catch (e) {
                console.error("\u83b7\u53d6\u5b89\u5353\u7248\u672c\u5931\u8d25 => " + e)
            }
            if (5 > a) return uf = t
        }
        c = document.createElement("canvas");
        a = q;
        try {
            a = c.getContext("webgl")
        } catch (f) {
            uf = t
        }
        return uf = a === q ? t : p
    }

    var uf;

    function vf() {
        if ("boolean" === typeof wf) return wf;
        wf = p;
        if (A.platform.nE) return p;
        var a = navigator.userAgent;
        return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? p : wf = t
    }

    var wf;

    function Nc(a, b) {
        this.W = a || q;
        var c = this;
        c.W && c.ha();
        Ua.load("pservice", function () {
            c.xQ()
        });
        "api" == (b || {}).Ye ? Sa(Ia) : Sa(Ja);
        this.Cd = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }

    D.Rk(function (a) {
        "flashRender" !== a.gr() && new Nc(a, {
            Ye: "api"
        })
    });
    A.extend(Nc.prototype, {
        ha: function () {
            function a(a) {
                if (a) {
                    if (a.id != b.hw) {
                        b.fO(a.id);
                        b.ia = a;
                        vf() || b.dispatchEvent(new P("onthumbnail_complete"));
                        b.hb != q && (b.Cl = b._position);
                        for (var c in a)
                            if (a.hasOwnProperty(c)) switch (b["_" + c] = a[c], c) {
                                case "position":
                                    b.Mb = a[c];
                                    break;
                                case "id":
                                    b.hb = a[c];
                                    break;
                                case "links":
                                    b.eo = a[c];
                                    break;
                                case "zoom":
                                    b.Rc = a[c]
                            }
                        if (b.Cl) {
                            var g = b.Cl,
                                i = b._position;
                            c = g.lat;
                            var k = i.lat,
                                m = U(k - c),
                                g = U(i.lng - g.lng);
                            c = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(U(c)) * Math.cos(U(k)) *
                                Math.sin(g / 2) * Math.sin(g / 2);
                            b.lH = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new P("ondataload");
                        b.show();
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new P("onposition_changed"));
                        b.dispatchEvent(new P("onlinks_changed"));
                        b.dispatchEvent(new P("oncopyright_changed"), {
                            copyright: a.copyright
                        });
                        a.jm ? (b.Gj({
                            haveBreakId: p
                        }), Xa() && b.m.closeControl && A.U.show(b.jr)) : A.U.aa(b.jr)
                    }
                } else b.hb = b.Bl, b.Mb = b.Cl, b.dispatchEvent(new P("onnoresult"))
            }

            var b = this.W,
                c = this;
            b.addEventListener("id_changed", function () {
                D.Ty("y");
                c.pp(b.Zb(), a)
            });
            b.addEventListener("iid_changed", function () {
                D.Ty("y");
                c.fh(Nc.ml + "qt=idata&iid=" + b.pA + "&fn=", function (b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo,
                            f = {};
                        f.jm = b.BreakID;
                        for (var g = b.Defaultfloor, i = q, k = 0; k < b.Floors
                            .length; k++)
                            if (b.Floors[k].Floor == g) {
                                i = b.Floors[k];
                                break
                            }
                        f.id = i.StartID || i.Points[0].PID;
                        c.pp(f.id, a, f)
                    }
                })
            });
            b.addEventListener("position_changed_inner", function () {
                D.Ty("y");
                c.tj(b.ma(), a)
            })
        },
        pp: function (a, b) {
            this.Cd.getPanoramaById.push(arguments)
        },
        tj: function (a, b, c) {
            this.Cd.getPanoramaByLocation.push(arguments)
        },
        YD: function (a, b, c, e) {
            this.Cd.getVisiblePOIs.push(arguments)
        },
        yx: function (a, b) {
            this.Cd.getRecommendPanosById.push(arguments)
        },
        xx: function (a) {
            this.Cd.getPanoramaVersions.push(arguments)
        },
        gC: function (a, b) {
            this.Cd.checkPanoSupportByCityCode.push(arguments)
        },
        wx: function (a, b) {
            this.Cd.getPanoramaByPOIId.push(arguments)
        },
        oL: function (a) {
            this.Cd.getCopyrightProviders.push(arguments)
        }
    });
    var xf = Nc.prototype;
    V(xf, {
        getPanoramaById: xf.pp,
        getPanoramaByLocation: xf.tj,
        getPanoramaByPOIId: xf.wx
    });

    function Mc(a) {
        vd.call(this);
        "api" == (a || {}).Ye ? Sa(Ca) : Sa(Da)
    }

    Mc.FG = D.mi("pano", "tile/");
    Mc.prototype = new vd;
    Mc.prototype.getTilesUrl = function (a, b) {
        var c = Mc.FG[(a.x + a.y) % Mc.FG.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y +
            "&z=" + b;
        A.ga.oa && 6 >= A.ga.oa && (c += "&color_dep=32");
        return c
    };
    Mc.prototype.At = ea(p);
    yf.ae = new T;

    function yf() {
    }

    A.extend(yf, {
        mW: function (a, b, c) {
            c = A.lang.Tc(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = yf.ae.Ej(new R(b.data.mercatorX, b.data.mercatorY)));
            c.dispatchEvent(new P("on" + a), b)
        }
    });
    var zf = yf;
    V(zf, {
        dispatchFlashEvent: zf.mW
    });
    var Af = {
        tP: 50
    };
    Af.Mu = D.mi("pano")[0];
    Af.Ku = {
        width: 220,
        height: 60
    };
    A.extend(Af, {
        gM: function (a, b, c, e) {
            if (!b || !c || !c.lngLat || !c.panoInstance) e();
            else {
                this.no === l && (this.no = new Nc(q, {
                    Ye: "api"
                }));
                var f = this;
                this.no.gC(b, function (b) {
                    b ? f.no.tj(c.lngLat, Af.tP, function (b) {
                        if (b && b.id) {
                            var g = b.id,
                                m = b.zh,
                                b = b.Ah,
                                n = Nc.ae.Hg(c.lngLat),
                                o = f.bS(n, {
                                    x: m,
                                    y: b
                                }),
                                m = f.zL(g, o, 0, Af.Ku.width, Af.Ku.height);
                            a.content = f.cS(a.content, m, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function () {
                                ja.V(A.Ic("infoWndPano"), "click", function () {
                                    c.panoInstance.Gc(g);
                                    c.panoInstance.show();
                                    c.panoInstance.yd({
                                        heading: o,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        e()
                    }) : e()
                })
            }
        },
        cS: function (a, b, c, e) {
            var c = c || "",
                f;
            !e || !a.split(e)[0] ? (e = a, a = "") : (e = a.split(e)[0], f = e.lastIndexOf("<"), e = a
                .substring(0, f), a = a.substring(f));
            f = [];
            var g = Af.Ku.width,
                i = Af.Ku.height;
            f.push(e);
            f.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + i + "px;width:" + g +
                "px; margin-top: -19px;'>");
            f.push("<img class='pano_thumnail_img' width='" + g + "' height='" + i +
                "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b +
                "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + g + ", " + i +
                ");' />");
            f.push("<div class='panoInfoBoxTitleBg' style='width:" + g +
                "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>"
            );
            f.push("</div>");
            f.push(a);
            return f.join("")
        },
        bS: function (a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        zL: function (a, b, c, e, f) {
            var g = {
                panoId: a,
                panoHeading: b || 0,
                panoPitch: c || 0,
                width: e,
                height: f
            };
            return (Af.Mu +
                "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}"
            ).replace(/\{(.*?)\}/g, function (a, b) {
                return g[b]
            })
        }
    });
    var Bf = document,
        Cf = Math,
        Df = Bf.createElement("div").style,
        Ef;
    a: {
        for (var Ff = ["t", "webkitT", "MozT", "msT", "OT"], Gf, Hf = 0, If = Ff.length; Hf < If; Hf++)
            if (Gf = Ff[Hf] + "ransform", Gf in Df) {
                Ef = Ff[Hf].substr(0, Ff[Hf].length - 1);
                break a
            }
        Ef = t
    }
    var Jf = Ef ? "-" + Ef.toLowerCase() + "-" : "",
        Lf = Kf("transform"),
        Mf = Kf("transitionProperty"),
        Nf = Kf("transitionDuration"),
        Of = Kf("transformOrigin"),
        Pf = Kf("transitionTimingFunction"),
        Qf = Kf("transitionDelay"),
        af = /android/gi.test(navigator.appVersion),
        Rf = /iphone|ipad/gi.test(navigator.appVersion),
        Sf = /hp-tablet/gi.test(navigator.appVersion),
        Tf = Kf("perspective") in Df,
        Uf = "ontouchstart" in window && !Sf,
        Vf = Ef !== t,
        Wf = Kf("transition") in Df,
        Xf = "onorientationchange" in window ? "orientationchange" : "resize",
        Yf = Uf ? "touchstart" : "mousedown",
        Zf = Uf ? "touchmove" : "mousemove",
        $f = Uf ? "touchend" : "mouseup",
        ag = Uf ? "touchcancel" : "mouseup",
        cg = Ef === t ? t : {
            "": "transitionend",
            webkit: "webkitTransitionEnd",
            Moz: "transitionend",
            O: "otransitionend",
            ms: "MSTransitionEnd"
        } [Ef],
        dg = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window
            .mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (
            a) {
            return setTimeout(a, 1)
        },
        eg = window.cancelRequestAnimationFrame || window.H6 || window.webkitCancelRequestAnimationFrame || window
            .mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window
            .msCancelRequestAnimationFrame || clearTimeout,
        fg = Tf ? " translateZ(0)" : "";

    function gg(a, b) {
        var c = this,
            e;
        c.zn = "object" == typeof a ? a : Bf.getElementById(a);
        c.zn.style.overflow = "hidden";
        c.Rb = c.zn.children[0];
        c.options = {
            wp: p,
            vn: p,
            x: 0,
            y: 0,
            No: p,
            gV: t,
            ay: p,
            BE: p,
            fl: p,
            Fi: t,
            v0: 0,
            Kw: t,
            Cx: p,
            ni: p,
            Gi: p,
            oD: af,
            Gx: Rf,
            TW: Rf && Tf,
            eF: "",
            zoom: t,
            hl: 1,
            mq: 4,
            oW: 2,
            ZO: "scroll",
            lu: t,
            Ky: 1,
            iN: q,
            aN: function (a) {
                a.preventDefault()
            },
            lN: q,
            $M: q,
            kN: q,
            ZM: q,
            fy: q,
            mN: q,
            dN: q,
            Lp: q,
            nN: q,
            Kp: q
        };
        for (e in b) c.options[e] = b[e];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.fl = Vf && c.options.fl;
        c.options.ni = c.options.wp && c.options.ni;
        c.options.Gi = c.options.vn && c.options.Gi;
        c.options.zoom = c.options.fl && c.options.zoom;
        c.options.Fi = Wf && c.options.Fi;
        c.options.zoom && af && (fg = "");
        c.Rb.style[Mf] = c.options.fl ? Jf + "transform" : "top left";
        c.Rb.style[Nf] = "0";
        c.Rb.style[Of] = "0 0";
        c.options.Fi && (c.Rb.style[Pf] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.fl ? c.Rb.style[Lf] = "translate(" + c.x + "px," + c.y + "px)" + fg : c.Rb.style.cssText +=
            ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.Fi && (c.options.oD = p);
        c.refresh();
        c.ha(Xf, window);
        c.ha(Yf);
        !Uf && "none" != c.options.ZO && (c.ha("DOMMouseScroll"), c.ha("mousewheel"));
        c.options.Kw && (c.tV = setInterval(function () {
            c.vQ()
        }, 500));
        this.options.Cx && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener =
            function (a, b, c) {
                var e = Node.prototype.removeEventListener;
                a === "click" ? e.call(document.body, a, b.XL || b, c) : e.call(document.body, a, b, c)
            }, document.body.addEventListener = function (a, b, c) {
            var e = Node.prototype.addEventListener;
            a === "click" ? e.call(document.body, a, b.XL || (b.XL = function (a) {
                a.XZ || b(a)
            }), c) : e.call(document.body, a, b, c)
        }), c.ha("click", document.body, p))
    }

    gg.prototype = {
        enabled: p,
        x: 0,
        y: 0,
        Hj: [],
        scale: 1,
        wC: 0,
        xC: 0,
        bf: [],
        xf: [],
        aC: q,
        Vy: 0,
        handleEvent: function (a) {
            switch (a.type) {
                case Yf:
                    if (!Uf && 0 !== a.button) break;
                    this.$v(a);
                    break;
                case Zf:
                    this.ZS(a);
                    break;
                case $f:
                case ag:
                    this.iv(a);
                    break;
                case Xf:
                    this.oB();
                    break;
                case "DOMMouseScroll":
                case "mousewheel":
                    this.AU(a);
                    break;
                case cg:
                    this.xU(a);
                    break;
                case "click":
                    this.FQ(a)
            }
        },
        vQ: function () {
            !this.yh && (!this.il && !(this.gm || this.zy == this.Rb.offsetWidth * this.scale && this.Vp ==
                this.Rb.offsetHeight * this.scale)) && this.refresh()
        },
        Rv: function (a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Bf.createElement("div"), this
                .options.eF ? b.className = this.options.eF + a.toUpperCase() : b.style.cssText =
                "position:absolute;z-index:100;" + ("h" == a ?
                "height:7px;bottom:1px;left:2px;right:" + (this.Gi ? "7" : "2") + "px" :
                "width:7px;bottom:" + (this.ni ? "7" : "2") + "px;top:2px;right:1px"), b.style
                .cssText += ";pointer-events:none;" + Jf + "transition-property:opacity;" + Jf +
                "transition-duration:" + (this.options.TW ? "350ms" : "0") +
                ";overflow:hidden;opacity:" + (this.options.Gx ? "0" : "1"), this.zn.appendChild(b),
                this[a + "ScrollbarWrapper"] = b, b = Bf.createElement("div"), this.options.eF || (b
                .style.cssText =
                "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" +
                Jf + "background-clip:padding-box;" + Jf + "box-sizing:border-box;" + ("h" ==
                a ? "height:100%" : "width:100%") + ";" + Jf +
                "border-radius:3px;border-radius:3px"), b.style.cssText +=
                ";pointer-events:none;" + Jf + "transition-property:" + Jf + "transform;" + Jf +
                "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + Jf +
                "transition-duration:0;" + Jf + "transform: translate(0,0)" + fg, this.options.Fi &&
            (b.style.cssText += ";" + Jf +
                "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[a +
            "ScrollbarWrapper"].appendChild(b), this[a + "ScrollbarIndicator"] = b), "h" ==
            a ? (this.TL = this.UL.clientWidth, this.lY = Cf.max(Cf.round(this.TL * this.TL / this
                .zy), 8), this.kY.style.width = this.lY + "px") : (this.RO = this.SO.clientHeight,
                this.S0 = Cf.max(Cf.round(this.RO * this.RO / this.Vp), 8), this.R0.style.height =
                this.S0 + "px"), this.pB(a, p)) : this[a + "ScrollbarWrapper"] && (Vf && (this[a +
            "ScrollbarIndicator"].style[Lf] = ""), this[a + "ScrollbarWrapper"].parentNode
                .removeChild(this[a + "ScrollbarWrapper"]), this[a + "ScrollbarWrapper"] = q, this[a +
            "ScrollbarIndicator"] = q)
        },
        oB: function () {
            var a = this;
            setTimeout(function () {
                a.refresh()
            }, af ? 200 : 0)
        },
        Cr: function (a, b) {
            this.il || (a = this.wp ? a : 0, b = this.vn ? b : 0, this.options.fl ? this.Rb.style[Lf] =
                "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + fg : (a = Cf.round(a),
                b = Cf.round(b), this.Rb.style.left = a + "px", this.Rb.style.top = b + "px"), this
                .x = a, this.y = b, this.pB("h"), this.pB("v"))
        },
        pB: function (a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"], 0 > c ? (this.options.oD || (c = this[
            a + "ScrollbarIndicatorSize"] + Cf.round(3 * c), 8 > c && (c = 8), this[a +
            "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), c = 0) : c >
                this[a + "ScrollbarMaxScroll"] && (this.options.oD ? c = this[a +
                "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Cf.round(3 * (c -
                    this[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), this[a +
                "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", c =
                    this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))),
                this[a + "ScrollbarWrapper"].style[Qf] = "0", this[a + "ScrollbarWrapper"].style
                .opacity = b && this.options.Gx ? "0" : "1", this[a + "ScrollbarIndicator"].style[Lf] =
                "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + fg)
        },
        FQ: function (a) {
            if (a.xR === p) return this.PB = a.target, this.gx = Date.now(), p;
            if (this.PB && this.gx) {
                if (600 < Date.now() - this.gx) return this.gx = this.PB = q, p
            } else {
                for (var b = a.target; b != this.Rb && b != document.body;) b = b.parentNode;
                if (b == document.body) return p
            }
            for (b = a.target; 1 != b.nodeType;) b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b) return a.stopImmediatePropagation ? a
                .stopImmediatePropagation() : a.XZ = p, a.stopPropagation(), a.preventDefault(), this
                .gx = this.PB = q, t
        },
        $v: function (a) {
            var b = Uf ? a.touches[0] : a,
                c, e;
            if (this.enabled) {
                this.options.aN && this.options.aN.call(this, a);
                (this.options.Fi || this.options.zoom) && this.uJ(0);
                this.il = this.gm = this.yh = t;
                this.GC = this.FC = this.vw = this.uw = this.LC = this.KC = 0;
                this.options.zoom && (Uf && 1 < a.touches.length) && (e = Cf.abs(a.touches[0].pageX - a
                    .touches[1].pageX), c = Cf.abs(a.touches[0].pageY - a.touches[1].pageY), this
                    .x0 = Cf.sqrt(e * e + c * c), this.hy = Cf.abs(a.touches[0].pageX + a.touches[1]
                    .pageX - 2 * this.YF) / 2 - this.x, this.iy = Cf.abs(a.touches[0].pageY + a
                    .touches[1].pageY - 2 * this.ZF) / 2 - this.y, this.options.Lp && this.options
                    .Lp.call(this, a));
                if (this.options.ay && (this.options.fl ? (c = getComputedStyle(this.Rb, q)[Lf].replace(
                    /[^0-9\-.,]/g, "").split(","), e = +(c[12] || c[4]), c = +(c[13] || c[5])) : (
                    e = +getComputedStyle(this.Rb, q).left.replace(/[^0-9-]/g, ""), c = +
                        getComputedStyle(this.Rb, q).top.replace(/[^0-9-]/g, "")), e != this.x || c !=
                this.y)) this.options.Fi ? this.fe(cg) : eg(this.aC), this.Hj = [], this.Cr(e, c),
                this.options.fy && this.options.fy.call(this);
                this.ww = this.x;
                this.xw = this.y;
                this.pu = this.x;
                this.qu = this.y;
                this.zh = b.pageX;
                this.Ah = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.lN && this.options.lN.call(this, a);
                this.ha(Zf, window);
                this.ha($f, window);
                this.ha(ag, window)
            }
        },
        ZS: function (a) {
            var b = Uf ? a.touches[0] : a,
                c = b.pageX - this.zh,
                e = b.pageY - this.Ah,
                f = this.x + c,
                g = this.y + e,
                i = a.timeStamp || Date.now();
            this.options.$M && this.options.$M.call(this, a);
            if (this.options.zoom && Uf && 1 < a.touches.length) f = Cf.abs(a.touches[0].pageX - a.touches[
                1].pageX), g = Cf.abs(a.touches[0].pageY - a.touches[1].pageY), this.w0 = Cf.sqrt(f *
                f + g * g), this.il = p, b = 1 / this.x0 * this.w0 * this.scale, b < this.options.hl ?
                b = 0.5 * this.options.hl * Math.pow(2, b / this.options.hl) : b > this.options.mq && (b =
                2 * this.options.mq * Math.pow(0.5, this.options.mq / b)), this.Dp = b / this.scale, f =
                this.hy - this.hy * this.Dp + this.x, g = this.iy - this.iy * this.Dp + this.y, this.Rb
                .style[Lf] = "translate(" + f + "px," + g + "px) scale(" + b + ")" + fg, this.options.nN &&
            this.options.nN.call(this, a);
            else {
                this.zh = b.pageX;
                this.Ah = b.pageY;
                if (0 < f || f < this.qe) f = this.options.No ? this.x + c / 2 : 0 <= f || 0 <= this.qe ?
                    0 : this.qe;
                if (g > this.vf || g < this.xd) g = this.options.No ? this.y + e / 2 : g >= this.vf || 0 <=
                this.xd ? this.vf : this.xd;
                this.KC += c;
                this.LC += e;
                this.uw = Cf.abs(this.KC);
                this.vw = Cf.abs(this.LC);
                6 > this.uw && 6 > this.vw || (this.options.BE && (this.uw > this.vw + 5 ? (g = this.y, e =
                    0) : this.vw > this.uw + 5 && (f = this.x, c = 0)), this.yh = p, this.Cr(f, g),
                    this.FC = 0 < c ? -1 : 0 > c ? 1 : 0, this.GC = 0 < e ? -1 : 0 > e ? 1 : 0, 300 <
                i - this.startTime && (this.startTime = i, this.pu = this.x, this.qu = this.y), this
                    .options.kN && this.options.kN.call(this, a))
            }
        },
        iv: function (a) {
            if (!(Uf && 0 !== a.touches.length)) {
                var b = this,
                    c = Uf ? a.changedTouches[0] : a,
                    e, f, g = {
                        Ia: 0,
                        time: 0
                    },
                    i = {
                        Ia: 0,
                        time: 0
                    },
                    k = (a.timeStamp || Date.now()) - b.startTime;
                e = b.x;
                f = b.y;
                b.fe(Zf, window);
                b.fe($f, window);
                b.fe(ag, window);
                b.options.ZM && b.options.ZM.call(b, a);
                if (b.il) e = b.scale * b.Dp, e = Math.max(b.options.hl, e), e = Math.min(b.options.mq, e),
                    b.Dp = e / b.scale, b.scale = e, b.x = b.hy - b.hy * b.Dp + b.x, b.y = b.iy - b.iy * b
                    .Dp + b.y, b.Rb.style[Nf] = "200ms", b.Rb.style[Lf] = "translate(" + b.x + "px," + b.y +
                    "px) scale(" + b.scale + ")" + fg, b.il = t, b.refresh(), b.options.Kp && b.options.Kp
                    .call(b, a);
                else {
                    if (b.yh) {
                        if (300 > k && b.options.ay) {
                            g = e ? b.jI(e - b.pu, k, -b.x, b.zy - b.Du + b.x, b.options.No ? b.Du : 0) : g;
                            i = f ? b.jI(f - b.qu, k, -b.y, 0 > b.xd ? b.Vp - b.An + b.y - b.vf : 0, b
                                .options.No ? b.An : 0) : i;
                            e = b.x + g.Ia;
                            f = b.y + i.Ia;
                            if (0 < b.x && 0 < e || b.x < b.qe && e < b.qe) g = {
                                Ia: 0,
                                time: 0
                            };
                            if (b.y > b.vf && f > b.vf || b.y < b.xd && f < b.xd) i = {
                                Ia: 0,
                                time: 0
                            }
                        }
                        g.Ia || i.Ia ? (c = Cf.max(Cf.max(g.time, i.time), 10), b.options.lu && (g = e - b
                            .ww, i = f - b.xw, Cf.abs(g) < b.options.Ky && Cf.abs(i) < b.options
                            .Ky ? b.scrollTo(b.ww, b.xw, 200) : (g = b.hJ(e, f), e = g.x, f = g.y,
                            c = Cf.max(g.time, c))), b.scrollTo(Cf.round(e), Cf.round(f), c)) : b
                            .options.lu ? (g = e - b.ww, i = f - b.xw, Cf.abs(g) < b.options.Ky && Cf.abs(
                            i) < b.options.Ky ? b.scrollTo(b.ww, b.xw, 200) : (g = b.hJ(b.x, b.y), (g
                            .x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time))) : b.qo(200)
                    } else {
                        if (Uf)
                            if (b.EK && b.options.zoom) clearTimeout(b.EK), b.EK = q, b.options.Lp && b
                                .options.Lp.call(b, a), b.zoom(b.zh, b.Ah, 1 == b.scale ? b.options.oW : 1),
                            b.options.Kp && setTimeout(function () {
                                b.options.Kp.call(b, a)
                            }, 200);
                            else if (this.options.Cx) {
                                for (e = c.target; 1 != e.nodeType;) e = e.parentNode;
                                f = e.tagName.toLowerCase();
                                "select" != f && "input" != f && "textarea" != f ? (f = Bf.createEvent(
                                    "MouseEvents"), f.initMouseEvent("click", p, p, a.view, 1, c
                                    .screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a
                                    .shiftKey, a.metaKey, 0, q), f.xR = p, e.dispatchEvent(f)) : e.focus()
                            }
                        b.qo(400)
                    }
                    b.options.mN && b.options.mN.call(b, a)
                }
            }
        },
        qo: function (a) {
            var b = 0 <= this.x ? 0 : this.x < this.qe ? this.qe : this.x,
                c = this.y >= this.vf || 0 < this.xd ? this.vf : this.y < this.xd ? this.xd : this.y;
            if (b == this.x && c == this.y) {
                if (this.yh && (this.yh = t, this.options.fy && this.options.fy.call(this)), this.ni && this
                    .options.Gx && ("webkit" == Ef && (this.UL.style[Qf] = "300ms"), this.UL.style.opacity =
                    "0"), this.Gi && this.options.Gx) "webkit" == Ef && (this.SO.style[Qf] = "300ms"),
                    this.SO.style.opacity = "0"
            } else this.scrollTo(b, c, a || 0)
        },
        AU: function (a) {
            var b = this,
                c, e;
            if ("wheelDeltaX" in a) c = a.wheelDeltaX / 12, e = a.wheelDeltaY / 12;
            else if ("wheelDelta" in a) c = e = a.wheelDelta / 12;
            else if ("detail" in a) c = e = 3 * -a.detail;
            else return;
            if ("zoom" == b.options.ZO) {
                if (e = b.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)), e < b.options.hl && (e = b
                    .options.hl), e > b.options.mq && (e = b.options.mq), e != b.scale) !b.Vy && b
                    .options.Lp && b.options.Lp.call(b, a), b.Vy++, b.zoom(a.pageX, a.pageY, e, 400),
                    setTimeout(function () {
                        b.Vy--;
                        !b.Vy && b.options.Kp && b.options.Kp.call(b, a)
                    }, 400)
            } else c = b.x + c, e = b.y + e, 0 < c ? c = 0 : c < b.qe && (c = b.qe), e > b.vf ? e = b.vf :
                e < b.xd && (e = b.xd), 0 > b.xd && b.scrollTo(c, e, 0)
        },
        xU: function (a) {
            a.target == this.Rb && (this.fe(cg), this.BB())
        },
        BB: function () {
            var a = this,
                b = a.x,
                c = a.y,
                e = Date.now(),
                f, g, i;
            a.gm || (a.Hj.length ? (f = a.Hj.shift(), f.x == b && f.y == c && (f.time = 0), a.gm = p, a.yh =
                p, a.options.Fi) ? (a.uJ(f.time), a.Cr(f.x, f.y), a.gm = t, f.time ? a.ha(cg) : a
                .qo(0)) : (i = function () {
                var k = Date.now(),
                    m;
                if (k >= e + f.time) {
                    a.Cr(f.x, f.y);
                    a.gm = t;
                    a.options.wZ && a.options.wZ.call(a);
                    a.BB()
                } else {
                    k = (k - e) / f.time - 1;
                    g = Cf.sqrt(1 - k * k);
                    k = (f.x - b) * g + b;
                    m = (f.y - c) * g + c;
                    a.Cr(k, m);
                    if (a.gm) a.aC = dg(i)
                }
            }, i()) : a.qo(400))
        },
        uJ: function (a) {
            a += "ms";
            this.Rb.style[Nf] = a;
            this.ni && (this.kY.style[Nf] = a);
            this.Gi && (this.R0.style[Nf] = a)
        },
        jI: function (a, b, c, e, f) {
            var b = Cf.abs(a) / b,
                g = b * b / 0.0012;
            0 < a && g > c ? (c += f / (6 / (6.0E-4 * (g / b))), b = b * c / g, g = c) : 0 > a && g > e && (
                e += f / (6 / (6.0E-4 * (g / b))), b = b * e / g, g = e);
            return {
                Ia: g * (0 > a ? -1 : 1),
                time: Cf.round(b / 6.0E-4)
            }
        },
        jk: function (a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a
                .offsetTop;
            a != this.zn && (b *= this.scale, c *= this.scale);
            return {
                left: b,
                top: c
            }
        },
        hJ: function (a, b) {
            var c, e, f;
            f = this.bf.length - 1;
            c = 0;
            for (e = this.bf.length; c < e; c++)
                if (a >= this.bf[c]) {
                    f = c;
                    break
                }
            f == this.wC && (0 < f && 0 > this.FC) && f--;
            a = this.bf[f];
            e = (e = Cf.abs(a - this.bf[this.wC])) ? 500 * (Cf.abs(this.x - a) / e) : 0;
            this.wC = f;
            f = this.xf.length - 1;
            for (c = 0; c < f; c++)
                if (b >= this.xf[c]) {
                    f = c;
                    break
                }
            f == this.xC && (0 < f && 0 > this.GC) && f--;
            b = this.xf[f];
            c = (c = Cf.abs(b - this.xf[this.xC])) ? 500 * (Cf.abs(this.y - b) / c) : 0;
            this.xC = f;
            f = Cf.round(Cf.max(e, c)) || 200;
            return {
                x: a,
                y: b,
                time: f
            }
        },
        ha: function (a, b, c) {
            (b || this.Rb).addEventListener(a, this, !!c)
        },
        fe: function (a, b, c) {
            (b || this.Rb).removeEventListener(a, this, !!c)
        },
        DC: ha(2),
        refresh: function () {
            var a, b, c, e = 0;
            b = 0;
            this.scale < this.options.hl && (this.scale = this.options.hl);
            this.Du = this.zn.clientWidth || 1;
            this.An = this.zn.clientHeight || 1;
            this.vf = -this.options.v0 || 0;
            this.zy = Cf.round(this.Rb.offsetWidth * this.scale);
            this.Vp = Cf.round((this.Rb.offsetHeight + this.vf) * this.scale);
            this.qe = this.Du - this.zy;
            this.xd = this.An - this.Vp + this.vf;
            this.GC = this.FC = 0;
            this.options.iN && this.options.iN.call(this);
            this.wp = this.options.wp && 0 > this.qe;
            this.vn = this.options.vn && (!this.options.gV && !this.wp || this.Vp > this.An);
            this.ni = this.wp && this.options.ni;
            this.Gi = this.vn && this.options.Gi && this.Vp > this.An;
            a = this.jk(this.zn);
            this.YF = -a.left;
            this.ZF = -a.top;
            if ("string" == typeof this.options.lu) {
                this.bf = [];
                this.xf = [];
                c = this.Rb.querySelectorAll(this.options.lu);
                a = 0;
                for (b = c.length; a < b; a++) e = this.jk(c[a]), e.left += this.YF, e.top += this.ZF, this
                    .bf[a] = e.left < this.qe ? this.qe : e.left * this.scale, this.xf[a] = e.top < this
                    .xd ? this.xd : e.top * this.scale
            } else if (this.options.lu) {
                for (this.bf = []; e >= this.qe;) this.bf[b] = e, e -= this.Du, b++;
                this.qe % this.Du && (this.bf[this.bf.length] = this.qe - this.bf[this.bf.length - 1] + this
                    .bf[this.bf.length - 1]);
                b = e = 0;
                for (this.xf = []; e >= this.xd;) this.xf[b] = e, e -= this.An, b++;
                this.xd % this.An && (this.xf[this.xf.length] = this.xd - this.xf[this.xf.length - 1] + this
                    .xf[this.xf.length - 1])
            }
            this.Rv("h");
            this.Rv("v");
            this.il || (this.Rb.style[Nf] = "0", this.qo(400))
        },
        scrollTo: function (a, b, c, e) {
            var f = a;
            this.stop();
            f.length || (f = [{
                x: a,
                y: b,
                time: c,
                ZZ: e
            }]);
            a = 0;
            for (b = f.length; a < b; a++) f[a].ZZ && (f[a].x = this.x - f[a].x, f[a].y = this.y - f[a].y),
                this.Hj.push({
                    x: f[a].x,
                    y: f[a].y,
                    time: f[a].time || 0
                });
            this.BB()
        },
        disable: function () {
            this.stop();
            this.qo(0);
            this.enabled = t;
            this.fe(Zf, window);
            this.fe($f, window);
            this.fe(ag, window)
        },
        enable: function () {
            this.enabled = p
        },
        stop: function () {
            this.options.Fi ? this.fe(cg) : eg(this.aC);
            this.Hj = [];
            this.gm = this.yh = t
        },
        zoom: function (a, b, c, e) {
            var f = c / this.scale;
            this.options.fl && (this.il = p, e = e === l ? 200 : e, a = a - this.YF - this.x, b = b - this
                .ZF - this.y, this.x = a - a * f + this.x, this.y = b - b * f + this.y, this.scale = c,
                this.refresh(), this.x = 0 < this.x ? 0 : this.x < this.qe ? this.qe : this.x, this.y =
                this.y > this.vf ? this.vf : this.y < this.xd ? this.xd : this.y, this.Rb.style[Nf] =
                e + "ms", this.Rb.style[Lf] = "translate(" + this.x + "px," + this.y + "px) scale(" +
                c + ")" + fg, this.il = t)
        }
    };

    function Kf(a) {
        if ("" === Ef) return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return Ef + a
    }

    Df = q;

    function hg(a) {
        this.m = {
            anchor: Gc,
            offset: new N(0, 0),
            maxWidth: "100%",
            imageHeight: 80
        };
        var a = a || {},
            b;
        for (b in a) this.m[b] = a[b];
        this.Ul = new Nc(q, {
            Ye: "api"
        });
        this.kk = [];
        this.W = q;
        this.kg = {
            height: this.m.imageHeight,
            width: this.m.imageHeight * ig
        };
        this.Yc = this.qB = this.jm = this.cd = q
    }

    var jg = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10],
        kg =
            "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd"
                .split(" ");
    D.Rk(function (a) {
        var b = q;
        a.addEventListener("position_changed", function () {
            a.m.visible && a.m.albumsControl === p && (b ? b.vy(a.Zb()) : (b = new hg(a.m
                .albumsControlOptions), b.za(a)))
        });
        a.addEventListener("albums_visible_changed", function () {
            a.m.albumsControl === p ? (b ? b.vy(a.Zb()) : (b = new hg(a.m.albumsControlOptions), b
                .za(a)), b.show()) : b.aa()
        });
        a.addEventListener("albums_options_changed", function () {
            b && b.Gj(a.m.albumsControlOptions)
        });
        a.addEventListener("visible_changed", function () {
            b && (a.Ax() ? a.m.albumsControl === p && (b.R.style.visibility = "visible") : b.R.style
                .visibility = "hidden")
        })
    });
    var ig = 1.8;
    J() && (ig = 1);
    A.extend(hg.prototype, {
        Gj: function (a) {
            for (var b in a) this.m[b] = a[b];
            a = this.m.imageHeight + "px";
            this.wc(this.m.anchor);
            this.R.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m
                .maxWidth + "px";
            this.R.style.height = a;
            this.ok.style.height = a;
            this.Xh.style.height = a;
            this.kg = {
                height: this.m.imageHeight,
                width: this.m.imageHeight * ig
            };
            this.nk.style.height = this.kg.height - 6 + "px";
            this.nk.style.width = this.kg.width - 6 + "px";
            this.vy(this.W.Zb(), p)
        },
        za: function (a) {
            this.W = a;
            this.qs();
            this.dQ();
            this.BY();
            this.vy(a.Zb())
        },
        qs: function () {
            var a = this.m.imageHeight + "px";
            this.R = H("div");
            var b = this.R.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.ok = H("div");
            b = this.ok.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.Xh = H("div");
            b = this.Xh.style;
            b.height = a;
            this.ok.appendChild(this.Xh);
            this.R.appendChild(this.ok);
            this.W.R.appendChild(this.R);
            this.nk = H("div", {
                "class": "pano_photo_item_seleted"
            });
            this.nk.style.height = this.kg.height - 6 + "px";
            this.nk.style.width = this.kg.width - 6 + "px";
            this.wc(this.m.anchor)
        },
        EH: function (a) {
            for (var b = this.kk, c = b.length - 1; 0 <= c; c--)
                if (b[c].panoId == a) return c;
            return -1
        },
        vy: function (a, b) {
            if (b || !this.kk[this.cd] || !(this.kk[this.cd].panoId == a && 3 !== this.kk[this.cd]
                .recoType)) {
                var c = this,
                    e = this.EH(a);
                !b && -1 !== e && this.kk[e] && 3 !== this.kk[e].recoType ? this.Yp(e) : this.RX(
                    function (a) {
                        for (var b = {}, e, k, m = t, n = [], o = 0, s = a.length; o < s; o++) e =
                            a[o].catlog, k = a[o].floor, l !== e && ("" === e && l !== k ? (m = p,
                        b[k] || (b[k] = []), b[k].push(a[o])) : (b[jg[e]] || (b[jg[
                            e]] = []), b[jg[e]].push(a[o])));
                        for (var v in b) m ? n.push({
                            data: v + "F",
                            index: v
                        }) : n.push({
                            data: kg[v],
                            index: v
                        });
                        c.$G = b;
                        c.Ti = n;
                        c.$i(a);
                        0 == a.length ? c.aa() : c.show()
                    })
            }
        },
        UV: function () {
            if (!this.Qi) {
                var a = this.FX(this.Ti),
                    b = H("div");
                b.style.cssText = ["width:" + 134 * this.Ti.length + "px;",
                    "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"
                ].join("");
                b.innerHTML = a;
                a = H("div");
                a.appendChild(b);
                a.style.cssText =
                    "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new gg(a, {
                    No: t,
                    ay: p,
                    ni: t,
                    Gi: t,
                    vn: t,
                    BE: p,
                    Kw: p,
                    Cx: p
                });
                this.R.appendChild(a);
                for (var c = this, e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++)
                    b = e[f], A.V(b, "click", function () {
                        if (this.getAttribute("dataindex")) {
                            c.$i(c.$G[this.getAttribute("dataindex")]);
                            for (var a = 0, b = e.length; a < b; a++) e[a].style.color = "#FFFFFF";
                            this.style.color = "#3383FF"
                        }
                    });
                this.Qi = a
            }
        },
        RV: function () {
            if (this.Qi) a = this.mL(this.Ti), this.tQ.innerHTML = a;
            else {
                var a = this.mL(this.Ti),
                    b = H("ul"),
                    c = this;
                b.style.cssText =
                    "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                A.V(b, "click", function (a) {
                    if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                        c.$i(c.$G[a]);
                        for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f <
                        g; f++) e[f].childNodes[0].getAttribute("dataindex") === a ? A.U.ib(
                            e[f], "pano_catlogLiActive") : A.U.rc(e[f],
                            "pano_catlogLiActive")
                    }
                });
                var a = H("div"),
                    e = H("a"),
                    f = H("span"),
                    g = H("a"),
                    i = H("span"),
                    k = ["background:url(" + I.ua + "panorama/catlog_icon.png) no-repeat;",
                        "display:block;width:10px;height:7px;margin:0 auto;"
                    ].join("");
                f.style.cssText = k + "background-position:-18px 0;";
                e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                i.style.cssText = k + "background-position:0 0;";
                g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.top = this.m.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                e.appendChild(f);
                g.appendChild(i);
                A.V(e, "mouseover", function () {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (f.style.backgroundPosition = "-27px 0");
                    new xb({
                        Nc: 60,
                        dc: yb.Ls,
                        duration: 300,
                        Ba: function (c) {
                            b.style.top = a + (7 - a) * c + "px"
                        }
                    })
                });
                A.V(e, "mouseout", function () {
                    f.style.backgroundPosition = "-18px 0"
                });
                A.V(g, "mouseover", function () {
                    var a = parseInt(b.style.top, 10),
                        e = c.m.imageHeight - 14;
                    if (!(parseInt(b.offsetHeight, 10) < e)) {
                        var f = e - parseInt(b.offsetHeight, 10) + 7;
                        f !== a && (i.style.backgroundPosition = "-9px 0");
                        new xb({
                            Nc: 60,
                            dc: yb.Ls,
                            duration: 300,
                            Ba: function (c) {
                                b.style.top = a + (f - a) * c + "px"
                            }
                        })
                    }
                });
                A.V(g, "mouseout", function () {
                    i.style.backgroundPosition = "0 0"
                });
                a.appendChild(e);
                a.appendChild(g);
                e = H("div");
                e.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.m
                    .imageHeight + "px;",
                    "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"
                ].join("");
                e.appendChild(b);
                e.appendChild(a);
                this.Qi = e;
                this.tQ = b;
                this.R.appendChild(e)
            }
        },
        SV: function () {
            if (this.Ti && !(0 >= this.Ti.length)) {
                var a = H("div");
                a.innerHTML = this.Tz;
                a.style.cssText = "position:absolute;background:#252525";
                this.R.appendChild(a);
                this.Os = a;
                this.Yc.mg.style.left = this.kg.width + 8 + "px";
                this.Qi && (this.Qi.style.left = parseInt(this.Qi.style.left, 10) + this.kg.width + 8 +
                    "px");
                var b = this;
                A.V(a, "click", function () {
                    b.W.Gc(b.PW)
                })
            }
        },
        $i: function (a) {
            this.kk = a;
            this.m.showCatalog && (0 < this.Ti.length ? (Xa() ? this.RV() : this.UV(), this.Yc
                .offsetLeft = 60) : (this.Os && (this.R.removeChild(this.Os), this.Os = q, this
                .Yc.mg.style.left = "0px"), this.Qi && (this.R.removeChild(this.Qi), this
                .Qi = q), this.Yc.offsetLeft = 0));
            var b = this.zX(a);
            Xa() && (this.Ti && 0 < this.Ti.length && this.m.showExit && this.Tz) && (this.Yc
                .offsetLeft += this.kg.width + 8, this.Os ? this.Os.innerHTML = this.Tz : this.SV());
            this.Xh.innerHTML = b;
            this.Xh.style.width = (this.kg.width + 8) * a.length + 8 + "px";
            a = this.R.offsetWidth;
            b = this.Xh.offsetWidth;
            this.Yc.Vs && (b += this.Yc.Vs());
            b < a - 2 * this.Yc.Ji - this.Yc.offsetLeft ? this.R.style.width = b + this.Yc.offsetLeft +
                "px" : (this.R.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth :
                this.m.maxWidth + "px", b < this.R.offsetWidth - 2 * this.Yc.Ji - this.Yc
                .offsetLeft && (this.R.style.width = b + this.Yc.offsetLeft + "px"));
            this.Yc.refresh();
            this.qB = this.Xh.children;
            this.Xh.appendChild(this.nk);
            this.nk.style.left = "-100000px";
            a = this.EH(this.W.Zb(), this.k2);
            -1 !== a && this.Yp(a)
        },
        FX: function (a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++) c =
                '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' +
                a[e].index + '">' + a[e].data + "</span></div>", b += c;
            return b
        },
        mL: function (a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++) c =
                '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[e]
                    .index + '">' + a[e].data + "</span></li>", b += c;
            return b
        },
        zX: function (a) {
            for (var b, c, e, f, g = [], i = this.kg.height, k = this.kg.width, m = 0; m < a
                .length; m++) b = a[m], recoType = b.recoType, e = b.panoId, f = b.name, c = b.heading,
                b = b.pitch, c = Af.zL(e, c, b, 198, 108), b =
                '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m +
                '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m +
                '" name="' + f + '" src="' + c + '" alt="' + f +
                '"/><span class="pano_photo_decs" data-index="' + m + '" style="width:' + k +
                "px;font-size:" + Math.floor(i / 6) + "px; line-height:" + Math.floor(i / 6) +
                'px;"><em class="pano_poi_' + recoType + '"></em>' + f + "</span></a>", 3 === recoType ?
                Xa() ? (this.Tz = b, this.PW = e, a.splice(m, 1), m--) : (b =
                    '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m +
                    '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' +
                    m + '" name="' + f + '" src="' + c + '" alt="' + f +
                    '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' +
                    this.m.imageHeight + 'px;" data-index="' + m + '"><img src="' + I.ua +
                    'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' +
                    m + '" alt=""/></div></a>', g.push(b)) : g.push(b);
            return g.join("")
        },
        RX: function (a) {
            var b = this,
                c = this.W.Zb();
            c && this.Ul.yx(c, function (e) {
                b.W.Zb() === c && a(e)
            })
        },
        wc: function (a) {
            if (!$a(a) || isNaN(a) || a < Ec || 3 < a) a = this.defaultAnchor;
            var b = this.R,
                c = this.m.offset.width,
                e = this.m.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
                case Ec:
                    b.style.top = e + "px";
                    b.style.left = c + "px";
                    break;
                case Fc:
                    b.style.top = e + "px";
                    b.style.right = c + "px";
                    break;
                case Gc:
                    b.style.bottom = e + "px";
                    b.style.left = c + "px";
                    break;
                case 3:
                    b.style.bottom = e + "px", b.style.right = c + "px"
            }
        },
        dQ: function () {
            this.bQ()
        },
        bQ: function () {
            var a = this;
            A.V(this.R, "touchstart", function (a) {
                a.stopPropagation()
            });
            A.V(this.ok, "click", function (b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.cd) a
                    .Yp(b), a.W.Gc(a.kk[b].panoId)
            });
            A.V(this.Xh, "mouseover", function (b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== q && a.oK(b, p)
            });
            this.W.addEventListener("size_changed", function () {
                isNaN(Number(a.m.maxWidth)) && a.Gj({
                    maxWidth: a.m.maxWidth
                })
            })
        },
        Yp: function (a) {
            this.nk.style.left = this.qB[a].offsetLeft + 8 + "px";
            this.nk.setAttribute("data-index", this.qB[a].getAttribute("data-index"));
            this.cd = a;
            this.oK(a)
        },
        oK: function (a, b) {
            var c = this.kg.width + 8,
                e = 0;
            this.Yc.Vs && (e = this.Yc.Vs() / 2);
            var f = this.ok.offsetWidth - 2 * e,
                g = this.Xh.offsetLeft || this.Yc.x,
                g = g - e,
                i = -a * c;
            i > g && this.Yc.scrollTo(i + e);
            c = i - c;
            g -= f;
            c < g && (!b || b && 8 < i - g) && this.Yc.scrollTo(c + f + e)
        },
        BY: function () {
            this.Yc = J() ? new gg(this.ok, {
                No: t,
                ay: p,
                ni: t,
                Gi: t,
                vn: t,
                BE: p,
                Kw: p,
                Cx: p
            }) : new lg(this.ok)
        },
        aa: function () {
            this.R.style.visibility = "hidden"
        },
        show: function () {
            this.R.style.visibility = "visible"
        }
    });

    function lg(a) {
        this.R = a;
        this.hh = a.children[0];
        this.Qr = q;
        this.Ji = 20;
        this.offsetLeft = 0;
        this.za()
    }

    lg.prototype = {
        za: function () {
            this.hh.style.position = "relative";
            this.refresh();
            this.qs();
            this.cC()
        },
        refresh: function () {
            this.lo = this.R.offsetWidth - this.Vs();
            this.OA = -(this.hh.offsetWidth - this.lo - this.Ji);
            this.Dv = this.Ji + this.offsetLeft;
            this.hh.style.left = this.Dv + "px";
            this.hh.children[0] && (this.Qr = this.hh.children[0].offsetWidth);
            this.mg && (this.mg.children[0].style.marginTop = this.Ir.children[0].style.marginTop = this.mg
                .offsetHeight / 2 - this.mg.children[0].offsetHeight / 2 + "px")
        },
        Vs: function () {
            return 2 * this.Ji
        },
        qs: function () {
            this.Sv = H("div");
            this.Sv.innerHTML =
                '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.mg = this.Sv.children[0];
            this.Ir = this.Sv.children[1];
            this.R.appendChild(this.Sv);
            this.mg.children[0].style.marginTop = this.Ir.children[0].style.marginTop = this.mg
                .offsetHeight / 2 - this.mg.children[0].offsetHeight / 2 + "px"
        },
        cC: function () {
            var a = this;
            A.V(this.mg, "click", function () {
                a.scrollTo(a.hh.offsetLeft + a.lo)
            });
            A.V(this.Ir, "click", function () {
                a.scrollTo(a.hh.offsetLeft - a.lo)
            })
        },
        yU: function () {
            A.U.rc(this.mg, "pano_arrow_disable");
            A.U.rc(this.Ir, "pano_arrow_disable");
            var a = this.hh.offsetLeft;
            a >= this.Dv && A.U.ib(this.mg, "pano_arrow_disable");
            a - this.lo <= this.OA && A.U.ib(this.Ir, "pano_arrow_disable")
        },
        scrollTo: function (a) {
            a = a < this.hh.offsetLeft ? Math.ceil((a - this.Ji - this.lo) / this.Qr) * this.Qr + this.lo +
                this.Ji - 8 : Math.ceil((a - this.Ji) / this.Qr) * this.Qr + this.Ji;
            a < this.OA ? a = this.OA : a > this.Dv && (a = this.Dv);
            var b = this.hh.offsetLeft,
                c = this;
            new xb({
                Nc: 60,
                dc: yb.Ls,
                duration: 300,
                Ba: function (e) {
                    c.hh.style.left = b + (a - b) * e + "px"
                },
                finish: function () {
                    c.yU()
                }
            })
        }
    };
    D.Map = Na;
    D.Hotspot = lb;
    D.MapType = ne;
    D.Point = Q;
    D.Pixel = R;
    D.Size = N;
    D.Bounds = ib;
    D.TileLayer = vd;
    D.Projection = Sc;
    D.MercatorProjection = T;
    D.PerspectiveProjection = kb;
    D.Copyright = function (a, b, c) {
        this.id = a;
        this.jb = b;
        this.content = c
    };
    D.Overlay = Vc;
    D.Label = dd;
    D.GroundOverlay = ed;
    D.PointCollection = id;
    D.Marker = W;
    D.CanvasLayer = ld;
    D.Icon = $c;
    D.IconSequence = bd;
    D.Symbol = ad;
    D.Polyline = pd;
    D.Polygon = od;
    D.InfoWindow = cd;
    D.Circle = qd;
    D.Control = Dc;
    D.NavigationControl = nb;
    D.GeolocationControl = Hc;
    D.OverviewMapControl = pb;
    D.CopyrightControl = Ic;
    D.ScaleControl = ob;
    D.MapTypeControl = qb;
    D.CityListControl = Jc;
    D.PanoramaControl = Lc;
    D.TrafficLayer = Cd;
    D.CustomLayer = rb;
    D.ContextMenu = Oc;
    D.MenuItem = Rc;
    D.LocalSearch = gb;
    D.TransitRoute = Se;
    D.DrivingRoute = Ve;
    D.TruckRoute = Xe;
    D.WalkingRoute = We;
    D.RidingRoute = Ye;
    D.Autocomplete = hf;
    D.RouteSearch = bf;
    D.Geocoder = cf;
    D.LocalCity = ef;
    D.Geolocation = Geolocation;
    D.Convertor = Uc;
    D.BusLineSearch = gf;
    D.Boundary = ff;
    D.Panorama = Qa;
    D.PanoramaLabel = pf;
    D.PanoramaService = Nc;
    D.PanoramaCoverageLayer = Mc;
    D.PanoramaFlashInterface = yf;

    function V(a, b) {
        for (var c in b) a[c] = b[c]
    }

    V(window, {
        BMap: D,
        _jsload2: function (a, b) {
            ja.Ly.PY && ja.Ly.set(a, b);
            Ua.sV(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var mg = Na.prototype;
    V(mg, {
        getBounds: mg.le,
        getCenter: mg.Qb,
        getMapType: mg.ya,
        getSize: mg.Cb,
        setSize: mg.He,
        getViewport: mg.ht,
        getZoom: mg.la,
        centerAndZoom: mg.vd,
        panTo: mg.zi,
        panBy: mg.Kg,
        setCenter: mg.zf,
        setCurrentCity: mg.lF,
        setMapType: mg.Og,
        setViewport: mg.Pg,
        setZoom: mg.Xc,
        highResolutionEnabled: mg.Ix,
        zoomTo: mg.Rg,
        zoomIn: mg.$F,
        zoomOut: mg.aG,
        addHotspot: mg.RB,
        removeHotspot: mg.a_,
        clearHotspots: mg.Ow,
        checkResize: mg.vV,
        addControl: mg.ds,
        removeControl: mg.EN,
        getContainer: mg.Ta,
        addContextMenu: mg.bm,
        removeContextMenu: mg.Pp,
        addOverlay: mg.Ra,
        removeOverlay: mg.Jb,
        clearOverlays: mg.lK,
        openInfoWindow: mg.Vc,
        closeInfoWindow: mg.Mc,
        pointToOverlayPixel: mg.cf,
        overlayPixelToPoint: mg.pN,
        getInfoWindow: mg.qh,
        getOverlays: mg.vx,
        getPanes: function () {
            return {
                floatPane: this.ce.pD,
                markerMouseTarget: this.ce.EE,
                floatShadow: this.ce.cL,
                labelPane: this.ce.wE,
                markerPane: this.ce.OM,
                markerShadow: this.ce.PM,
                mapPane: this.ce.Gt,
                vertexPane: this.ce.VO
            }
        },
        addTileLayer: mg.Ue,
        removeTileLayer: mg.cg,
        pixelToPoint: mg.bc,
        pointToPixel: mg.vc,
        setFeatureStyle: mg.Y5,
        selectBaseElement: mg.R5,
        setMapStyle: mg.bu,
        enable3DBuilding: mg.bp,
        disable3DBuilding: mg.iW,
        getPanorama: mg.bt,
        initIndoorLayer: mg.CY,
        setNormalMapDisplay: mg.By,
        setMapStyleV2: mg.F_,
        setBMapCopyrightOffset: mg.kF,
        getVectorContainer: mg.fY
    });
    V(window, {
        BMAP_COORD_BD09: 5,
        BMAP_COORD_GCJ02: 3
    });
    var ng = ne.prototype;
    V(ng, {
        getTileLayer: ng.$X,
        getMinZoom: ng.rf,
        getMaxZoom: ng.Ze,
        getProjection: ng.uj,
        getTextColor: ng.Hm,
        getTips: ng.ft
    });
    V(window, {
        BMAP_NORMAL_MAP: Oa,
        BMAP_PERSPECTIVE_MAP: Ra,
        BMAP_SATELLITE_MAP: bb,
        BMAP_HYBRID_MAP: Ta
    });
    var og = T.prototype;
    V(og, {
        lngLatToPoint: og.Hg,
        pointToLngLat: og.Ej
    });
    var pg = kb.prototype;
    V(pg, {
        lngLatToPoint: pg.Hg,
        pointToLngLat: pg.Ej
    });
    var qg = ib.prototype;
    V(qg, {
        equals: qg.Ub,
        containsPoint: qg.ns,
        containsBounds: qg.HV,
        intersects: qg.ot,
        extend: qg.extend,
        getCenter: qg.Qb,
        isEmpty: qg.Aj,
        getSouthWest: qg.Ae,
        getNorthEast: qg.sf,
        toSpan: qg.MF
    });
    var rg = Vc.prototype;
    V(rg, {
        isVisible: rg.Uc,
        show: rg.show,
        hide: rg.aa
    });
    Vc.getZIndex = Vc.Kk;
    var sg = jb.prototype;
    V(sg, {
        openInfoWindow: sg.Vc,
        closeInfoWindow: sg.Mc,
        enableMassClear: sg.qj,
        disableMassClear: sg.kW,
        show: sg.show,
        hide: sg.aa,
        getMap: sg.sx,
        addContextMenu: sg.bm,
        removeContextMenu: sg.Pp
    });
    var tg = W.prototype;
    V(tg, {
        setIcon: tg.Wb,
        getIcon: tg.lp,
        setPosition: tg.va,
        getPosition: tg.ma,
        setOffset: tg.Rd,
        getOffset: tg.sj,
        getLabel: tg.Ys,
        setLabel: tg.Fj,
        setTitle: tg.Hc,
        setTop: tg.Di,
        enableDragging: tg.jc,
        disableDragging: tg.Bs,
        setZIndex: tg.cq,
        getMap: tg.sx,
        setAnimation: tg.fn,
        setShadow: tg.Ey,
        hide: tg.aa,
        setRotation: tg.Zp,
        getRotation: tg.DL
    });
    V(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var ug = dd.prototype;
    V(ug, {
        setStyle: ug.Td,
        setStyles: ug.Ci,
        setContent: ug.Pc,
        setPosition: ug.va,
        getPosition: ug.ma,
        setOffset: ug.Rd,
        getOffset: ug.sj,
        setTitle: ug.Hc,
        setZIndex: ug.cq,
        getMap: ug.sx,
        getContent: ug.Dk
    });
    var vg = $c.prototype;
    V(vg, {
        setImageUrl: vg.VN,
        setSize: vg.He,
        setAnchor: vg.wc,
        setImageOffset: vg.au,
        setImageSize: vg.z_,
        setInfoWindowAnchor: vg.C_,
        setPrintImageUrl: vg.O_
    });
    var wg = cd.prototype;
    V(wg, {
        redraw: wg.re,
        setTitle: wg.Hc,
        setContent: wg.Pc,
        getContent: wg.Dk,
        getPosition: wg.ma,
        enableMaximize: wg.oh,
        disableMaximize: wg.$w,
        isOpen: wg.eb,
        setMaxContent: wg.cu,
        maximize: wg.Zx,
        enableAutoPan: wg.Ms
    });
    var xg = Xc.prototype;
    V(xg, {
        getPath: xg.$e,
        setPath: xg.Sd,
        setPositionAt: xg.kn,
        getStrokeColor: xg.XX,
        setStrokeWeight: xg.bq,
        getStrokeWeight: xg.GL,
        setStrokeOpacity: xg.$p,
        getStrokeOpacity: xg.YX,
        setFillOpacity: xg.$t,
        getFillOpacity: xg.sX,
        setStrokeStyle: xg.aq,
        getStrokeStyle: xg.FL,
        getFillColor: xg.rX,
        getBounds: xg.le,
        enableEditing: xg.pf,
        disableEditing: xg.jW,
        getEditing: xg.oX,
        getGeodesicPath: xg.vX
    });
    var yg = qd.prototype;
    V(yg, {
        setCenter: yg.zf,
        getCenter: yg.Qb,
        getRadius: yg.BL,
        setRadius: yg.Af
    });
    var zg = od.prototype;
    V(zg, {
        getPath: zg.$e,
        setPath: zg.Sd,
        setPositionAt: zg.kn
    });
    var Ag = lb.prototype;
    V(Ag, {
        getPosition: Ag.ma,
        setPosition: Ag.va,
        getText: Ag.TD,
        setText: Ag.fu
    });
    Q.prototype.equals = Q.prototype.Ub;
    R.prototype.equals = R.prototype.Ub;
    N.prototype.equals = N.prototype.Ub;
    V(window, {
        BMAP_ANCHOR_TOP_LEFT: Ec,
        BMAP_ANCHOR_TOP_RIGHT: Fc,
        BMAP_ANCHOR_BOTTOM_LEFT: Gc,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var Bg = Dc.prototype;
    V(Bg, {
        setAnchor: Bg.wc,
        getAnchor: Bg.wD,
        setOffset: Bg.Rd,
        getOffset: Bg.sj,
        show: Bg.show,
        hide: Bg.aa,
        isVisible: Bg.Uc,
        toString: Bg.toString
    });
    var Cg = nb.prototype;
    V(Cg, {
        getType: Cg.up,
        setType: Cg.ln
    });
    V(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var Dg = pb.prototype;
    V(Dg, {
        changeView: Dg.ve,
        setSize: Dg.He,
        getSize: Dg.Cb
    });
    var Eg = ob.prototype;
    V(Eg, {
        getUnit: Eg.eY,
        setUnit: Eg.vF
    });
    V(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var Fg = Ic.prototype;
    V(Fg, {
        addCopyright: Fg.Aw,
        removeCopyright: Fg.YE,
        getCopyright: Fg.ym,
        getCopyrightCollection: Fg.DD
    });
    V(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: Kc,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var Gg = vd.prototype;
    V(Gg, {
        getMapType: Gg.ya,
        getCopyright: Gg.ym,
        isTransparentPng: Gg.At
    });
    var Hg = Oc.prototype;
    V(Hg, {
        addItem: Hg.es,
        addSeparator: Hg.UB,
        removeSeparator: Hg.aF
    });
    var Ig = Rc.prototype;
    V(Ig, {
        setText: Ig.fu
    });
    var Jg = Y.prototype;
    V(Jg, {
        getStatus: Jg.Fm,
        setSearchCompleteCallback: Jg.eu,
        getPageCapacity: Jg.tf,
        setPageCapacity: Jg.hn,
        setLocation: Jg.gn,
        disableFirstResultSelection: Jg.IC,
        enableFirstResultSelection: Jg.bD,
        gotoPage: Jg.Im,
        searchNearby: Jg.Wp,
        searchInBounds: Jg.dn,
        search: Jg.search
    });
    V(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: xe,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: ye,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: ze
    });
    V(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    V(window, {
        BMAP_TRANSIT_POLICY_RECOMMEND: 0,
        BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
        BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2,
        BMAP_LINE_TYPE_TRAIN: 3,
        BMAP_LINE_TYPE_AIRPLANE: 4,
        BMAP_LINE_TYPE_COACH: 5
    });
    V(window, {
        BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
        BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
        BMAP_TRANSIT_TYPE_POLICY_COACH: 2
    });
    V(window, {
        BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
        BMAP_INTERCITY_POLICY_EARLY_START: 1,
        BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2
    });
    V(window, {
        BMAP_TRANSIT_TYPE_IN_CITY: 0,
        BMAP_TRANSIT_TYPE_CROSS_CITY: 1
    });
    V(window, {
        BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0,
        BMAP_TRANSIT_PLAN_TYPE_LINE: 1
    });
    var Kg = Re.prototype;
    V(Kg, {
        clearResults: Kg.we
    });
    Te = Se.prototype;
    V(Te, {
        setPolicy: Te.jn,
        toString: Te.toString,
        setPageCapacity: Te.hn,
        setIntercityPolicy: Te.oF,
        setTransitTypePolicy: Te.tF
    });
    V(Xe.prototype, {
        setPolicy: Xe.jn,
        toString: Xe.toString,
        setPageCapacity: Xe.hn,
        setIntercityPolicy: Xe.oF,
        setTransitTypePolicy: Xe.tF
    });
    V(window, {
        BMAP_DRIVING_POLICY_DEFAULT: 0,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
        BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
        BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4
    });
    V(window, {
        BMAP_MODE_DRIVING: "driving",
        BMAP_MODE_TRANSIT: "transit",
        BMAP_MODE_WALKING: "walking",
        BMAP_MODE_NAVIGATION: "navigation"
    });
    var Lg = bf.prototype;
    V(Lg, {
        routeCall: Lg.PN
    });
    V(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    V(window, {
        BMAP_ROUTE_TYPE_DRIVING: Be,
        BMAP_ROUTE_TYPE_WALKING: Ae,
        BMAP_ROUTE_TYPE_RIDING: Ce
    });
    V(window, {
        BMAP_ROUTE_STATUS_NORMAL: De,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var Mg = Ve.prototype;
    V(Mg, {
        setPolicy: Mg.jn
    });
    var Ng = hf.prototype;
    V(Ng, {
        show: Ng.show,
        hide: Ng.aa,
        setTypes: Ng.uF,
        setLocation: Ng.gn,
        search: Ng.search,
        setInputValue: Ng.Ay
    });
    V(rb.prototype, {});
    var Og = ff.prototype;
    V(Og, {
        get: Og.get
    });
    V(Mc.prototype, {});
    V(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: Fd,
        BMAP_POINT_DENSITY_LOW: 50
    });
    V(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: fd,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    V(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: gd,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    V(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    V(window, {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: Pc,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: Qc
    });
    V(window, {
        BMAP_SYS_DRAWER: Ma,
        BMAP_SVG_DRAWER: 1,
        BMAP_VML_DRAWER: 2,
        BMAP_CANVAS_DRAWER: 3,
        BMAP_SVG_DRAWER_FIRST: 4
    });
    D.PU();
    D.Ty();
})()
