(function () {
    var h = {}, mt = {}, c = {
        id: "f994c358e198821f84f42b52b37967c1",
        dm: ["ysfaka.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [],
        cetrk: [],
        cptrk: [],
        icon: '',
        ctrk: [],
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 0,
        vcard: 0,
        qiao: 0,
        lxb: 0,
        kbtrk: 0,
        pt: 0,
        spa: 0,
        oc: 0,
        aet: '',
        hca: '21A411E80A2A6DCB',
        conv: 0,
        med: 0,
        cvcc: '',
        cvcf: [],
        apps: ''
    };
    var r = void 0, u = !0, v = null, w = !1;
    mt.cookie = {};
    mt.cookie.set = function (a, b, d) {
        var e;
        d.N && (e = new Date, e.setTime(e.getTime() + d.N));
        document.cookie = a + "=" + b + (d.domain ? "; domain=" + d.domain : "") + (d.path ? "; path=" + d.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (d.Fc ? "; secure" : "")
    };
    mt.cookie.get = function (a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : v
    };
    mt.cookie.ac = function (a, b) {
        try {
            var d = "Hm_ck_" + +new Date;
            mt.cookie.set(d, "is-cookie-enabled", {domain: a, path: b, N: r});
            var e = "is-cookie-enabled" === mt.cookie.get(d) ? "1" : "0";
            mt.cookie.set(d, "", {domain: a, path: b, N: -1});
            return e
        } catch (f) {
            return "0"
        }
    };
    mt.lang = {};
    mt.lang.d = function (a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    mt.lang.Ta = function (a) {
        return mt.lang.d(a, "Number") && isFinite(a)
    };
    mt.lang.F = function (a) {
        return mt.lang.d(a, "String")
    };
    mt.lang.isArray = function (a) {
        return mt.lang.d(a, "Array")
    };
    mt.lang.h = function (a) {
        return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
    };
    mt.lang.trim = function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.D = function (a, b) {
        var d = w;
        if (a == v || !mt.lang.d(a, "Array") || b === r) return d;
        if (Array.prototype.indexOf) d = -1 !== a.indexOf(b); else for (var e = 0; e < a.length; e++) if (a[e] === b) {
            d = u;
            break
        }
        return d
    };
    mt.url = {};
    mt.url.m = function (a, b) {
        var d = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return d ? d[3] : v
    };
    mt.url.Ac = function (a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : v
    };
    mt.url.Gb = function (a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : v
    };
    mt.url.R = function (a) {
        return (a = mt.url.Gb(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.ra = function (a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : v
    };
    (function () {
        var a = mt.lang, b = mt.url;
        mt.g = {};
        mt.g.yb = function (d) {
            return document.getElementById(d)
        };
        mt.g.pa = function (d) {
            if (!d) return v;
            try {
                d = String(d);
                if (0 === d.indexOf("!HMCQ!")) return d;
                if (0 === d.indexOf("!HMCC!")) return document.querySelector(d.substring(6, d.length));
                for (var e = d.split(">"), a = document.body, b = e.length - 1; 0 <= b; b--) if (-1 < e[b].indexOf("#")) {
                    var g = e[b].split("#")[1];
                    (a = document.getElementById(g)) || (a = document.getElementById(decodeURIComponent(g)));
                    e = e.splice(b + 1, e.length - (b + 1));
                    break
                }
                for (d =
                         0; a && d < e.length;) {
                    var l = String(e[d]).toLowerCase();
                    if (!("html" === l || "body" === l)) {
                        var b = 0, p = e[d].match(/\[(\d+)\]/i), g = [];
                        if (p) b = p[1] - 1, l = l.split("[")[0]; else if (1 !== a.childNodes.length) {
                            for (var s = 0, t = 0, m = a.childNodes.length; t < m; t++) {
                                var x = a.childNodes[t];
                                1 === x.nodeType && x.nodeName.toLowerCase() === l && s++;
                                if (1 < s) return v
                            }
                            if (1 !== s) return v
                        }
                        for (s = 0; s < a.childNodes.length; s++) 1 === a.childNodes[s].nodeType && a.childNodes[s].nodeName.toLowerCase() === l && g.push(a.childNodes[s]);
                        if (!g[b]) return v;
                        a = g[b]
                    }
                    d++
                }
                return a
            } catch (k) {
                return v
            }
        };
        mt.g.ra = function (a, e) {
            var f = [], b = [];
            if (!a) return b;
            for (; a.parentNode != v;) {
                for (var g = 0, l = 0, p = a.parentNode.childNodes.length, s = 0; s < p; s++) {
                    var t = a.parentNode.childNodes[s];
                    if (t.nodeName === a.nodeName && (g++, t === a && (l = g), 0 < l && 1 < g)) break
                }
                if ((p = "" !== a.id) && e) {
                    f.unshift("#" + encodeURIComponent(a.id));
                    break
                } else p && (p = "#" + encodeURIComponent(a.id), p = 0 < f.length ? p + ">" + f.join(">") : p, b.push(p)), f.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < g ? "[" + l + "]" : ""));
                a = a.parentNode
            }
            b.push(f.join(">"));
            return b
        };
        mt.g.sa = function (a) {
            return (a = mt.g.ra(a, u)) && a.length ? String(a[0]) : ""
        };
        mt.g.Jb = function (a) {
            return mt.g.ra(a, w)
        };
        mt.g.zb = function (a) {
            var e;
            for (e = "A"; (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == e) return a;
            return v
        };
        mt.g.Cb = function (a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.g.Hb = function (a) {
            var e = {top: 0, left: 0};
            if (!a) return e;
            var b = mt.g.Cb(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (e = a.getBoundingClientRect());
            return {
                top: e.top + (window.pageYOffset || b.scrollTop) -
                    (b.clientTop || 0), left: e.left + (window.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }
        };
        mt.g.getAttribute = function (a, e) {
            var b = a.getAttribute && a.getAttribute(e) || v;
            if (!b && a.attributes && a.attributes.length) for (var q = a.attributes, g = q.length, l = 0; l < g; l++) q[l].nodeName === e && (b = q[l].nodeValue);
            return b
        };
        mt.g.Q = function (a) {
            var e = "document";
            a.tagName !== r && (e = a.tagName);
            return e.toLowerCase()
        };
        mt.g.Nb = function (b) {
            var e = "";
            b.textContent ? e = a.trim(b.textContent) : b.innerText && (e = a.trim(b.innerText));
            e && (e = e.replace(/\s+/g,
                " ").substring(0, 255));
            return e
        };
        mt.g.P = function (d, e) {
            var f;
            a.F(d) && 0 === String(d).indexOf("!HMCQ!") ? (f = String(d), f = b.m(document.location.href, f.substring(6, f.length))) : a.F(d) || (f = mt.g.Q(d), "input" === f && e && ("button" === d.type || "submit" === d.type) ? f = a.trim(d.value) || "" : "input" === f && !e && "password" !== d.type ? f = a.trim(d.value) || "" : "img" === f ? (f = mt.g.getAttribute, f = f(d, "alt") || f(d, "title") || f(d, "src")) : f = "body" === f || "html" === f ? ["(hm-default-content-for-", f, ")"].join("") : mt.g.Nb(d));
            return String(f || "").substring(0,
                255)
        };
        (function () {
            (mt.g.dc = function () {
                function a() {
                    if (!a.ca) {
                        a.ca = u;
                        for (var e = 0, b = q.length; e < b; e++) q[e]()
                    }
                }

                function e() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (b) {
                        setTimeout(e, 1);
                        return
                    }
                    a()
                }

                var b = w, q = [], g;
                document.addEventListener ? g = function () {
                    document.removeEventListener("DOMContentLoaded", g, w);
                    a()
                } : document.attachEvent && (g = function () {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", g), a())
                });
                (function () {
                    if (!b) if (b = u, "complete" === document.readyState) a.ca = u;
                    else if (document.addEventListener) document.addEventListener("DOMContentLoaded", g, w), window.addEventListener("load", a, w); else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange", g);
                        window.attachEvent("onload", a);
                        var l = w;
                        try {
                            l = window.frameElement == v
                        } catch (p) {
                        }
                        document.documentElement.doScroll && l && e()
                    }
                })();
                return function (e) {
                    a.ca ? e() : q.push(e)
                }
            }()).ca = w
        })();
        return mt.g
    })();
    mt.event = {};
    mt.event.e = function (a, b, d) {
        a.attachEvent ? a.attachEvent("on" + b, function (e) {
            d.call(a, e)
        }) : a.addEventListener && a.addEventListener(b, d, w)
    };
    mt.event.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = w
    };
    (function () {
        var a = mt.event;
        mt.f = {};
        mt.f.Sa = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.f.zc = function () {
            if (document.documentMode) return document.documentMode;
            var a = /msie (\d+\.\d+)/i.exec(navigator.userAgent);
            return a ? +a[1] || 0 : 0
        };
        mt.f.Cc = function () {
            try {
                return !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && "undefined" !== typeof document.body.style.webkitFilter && !window.chrome
            } catch (a) {
                return w
            }
        };
        mt.f.cookieEnabled = navigator.cookieEnabled;
        mt.f.javaEnabled = navigator.javaEnabled();
        mt.f.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.f.fc = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.f.colorDepth = window.screen.colorDepth || 0;
        mt.f.Lb = function () {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.f.Pa = function () {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.f.C =
            function () {
                return mt.f.Lb() + mt.f.Pa()
            };
        mt.f.ib = 0;
        mt.f.Pb = function () {
            var a = document;
            return parseInt(window.innerWidth || a.documentElement.clientWidth || a.body.offsetWidth || 0, 10)
        };
        mt.f.orientation = 0;
        (function () {
            function b() {
                var a = 0;
                window.orientation !== r && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== r) && (a = screen.orientation.angle);
                mt.f.orientation = a;
                mt.f.ib = mt.f.Pb()
            }

            b();
            a.e(window, "orientationchange", b)
        })();
        return mt.f
    })();
    mt.G = {};
    mt.G.parse = function (a) {
        return (new Function("return (" + a + ")"))()
    };
    mt.G.stringify = function () {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var e = d[a];
                if (e) return e;
                e = a.charCodeAt();
                return "\\u00" + Math.floor(e / 16).toString(16) + (e % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function b(a) {
            return 10 > a ? "0" + a : a
        }

        var d = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (e) {
            switch (typeof e) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "string":
                    return a(e);
                case "boolean":
                    return String(e);
                default:
                    if (e === v) return "null";
                    if (e instanceof Array) {
                        var f = ["["], d = e.length, g, l, p;
                        for (l = 0; l < d; l++) switch (p = e[l], typeof p) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                g && f.push(","), f.push(mt.G.stringify(p)), g = 1
                        }
                        f.push("]");
                        return f.join("")
                    }
                    if (e instanceof Date) return '"' + e.getFullYear() + "-" + b(e.getMonth() + 1) + "-" + b(e.getDate()) + "T" + b(e.getHours()) + ":" + b(e.getMinutes()) + ":" + b(e.getSeconds()) + '"';
                    g = ["{"];
                    l = mt.G.stringify;
                    for (d in e) if (Object.prototype.hasOwnProperty.call(e, d)) switch (p =
                        e[d], typeof p) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            f && g.push(","), f = 1, g.push(l(d) + ":" + l(p))
                    }
                    g.push("}");
                    return g.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.ia = function () {
        if (!mt.localStorage.j) try {
            mt.localStorage.j = document.createElement("input"), mt.localStorage.j.type = "hidden", mt.localStorage.j.style.display = "none", mt.localStorage.j.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.j)
        } catch (a) {
            return w
        }
        return u
    };
    mt.localStorage.set = function (a, b, d) {
        var e = new Date;
        e.setTime(e.getTime() + d || 31536E6);
        try {
            window.localStorage ? (b = e.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.ia() && (mt.localStorage.j.expires = e.toUTCString(), mt.localStorage.j.load(document.location.hostname), mt.localStorage.j.setAttribute(a, b), mt.localStorage.j.save(document.location.hostname))
        } catch (f) {
        }
    };
    mt.localStorage.get = function (a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"), d = a.substring(0, b) - 0;
                if (d && d > (new Date).getTime()) return a.substring(b + 1)
            }
        } else if (mt.localStorage.ia()) try {
            return mt.localStorage.j.load(document.location.hostname), mt.localStorage.j.getAttribute(a)
        } catch (e) {
        }
        return v
    };
    mt.localStorage.remove = function (a) {
        if (window.localStorage) window.localStorage.removeItem(a); else if (mt.localStorage.ia()) try {
            mt.localStorage.j.load(document.location.hostname), mt.localStorage.j.removeAttribute(a), mt.localStorage.j.save(document.location.hostname)
        } catch (b) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (a, b) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(a, b)
        } catch (d) {
        }
    };
    mt.sessionStorage.get = function (a) {
        try {
            return window.sessionStorage ? window.sessionStorage.getItem(a) : v
        } catch (b) {
            return v
        }
    };
    mt.sessionStorage.remove = function (a) {
        try {
            window.sessionStorage && window.sessionStorage.removeItem(a)
        } catch (b) {
        }
    };
    mt.fb = {};
    mt.fb.log = function (a, b) {
        var d = new Image, e = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[e] = d;
        d.onload = function () {
            d.onload = v;
            d = window[e] = v;
            b && b(a)
        };
        d.src = a
    };
    mt.gb = {};
    mt.gb.Ob = function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var b = navigator.plugins["Shockwave Flash"];
            b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (d) {
        }
        return a
    };
    h.A = {
        Bc: "http://tongji.baidu.com/hm-web/welcome/ico",
        ab: "hm.baidu.com/hm.gif",
        ob: /^(tongji|hmcdn).baidu.com$/,
        qc: "tongji.baidu.com",
        Tb: "hmmd",
        Ub: "hmpl",
        tc: "utm_medium",
        Sb: "hmkw",
        vc: "utm_term",
        Qb: "hmci",
        sc: "utm_content",
        Vb: "hmsr",
        uc: "utm_source",
        Rb: "hmcu",
        rc: "utm_campaign",
        M: 0,
        J: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        ya: "https:",
        Dc: 0,
        xc: 6E5,
        Ec: 6E5,
        gc: 5E3,
        yc: 5,
        Ma: 1024,
        wc: 1,
        Wa: 2147483647,
        hb: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
        S: u,
        Ja: ["a", "input", "button"],
        Ga: {
            id: "data-hm-id",
            Y: "data-hm-class",
            X: "data-hm-xpath",
            content: "data-hm-content",
            fa: "data-hm-tag",
            link: "data-hm-link"
        },
        Ia: "data-hm-enabled",
        Ha: "data-hm-disabled",
        bc: "https://hmcdn.baidu.com/static/tongji/plugins/",
        $a: ["UrlChangeTracker", "OcpcCbHm"]
    };
    (function () {
        var a = {
            B: {}, e: function (a, d) {
                this.B[a] = this.B[a] || [];
                this.B[a].push(d)
            }, K: function (a, d) {
                this.B[a] = this.B[a] || [];
                for (var e = this.B[a].length, f = 0; f < e; f++) this.B[a][f](d)
            }
        };
        return h.t = a
    })();
    (function () {
        var a = mt.lang, b = /^https?:\/\//, d = {
            Bb: function (a) {
                var b;
                try {
                    b = JSON.parse(decodeURIComponent(a[0]))
                } catch (d) {
                }
                return b
            }, Ua: function (a, b) {
                return d.Va(h.c && h.c.b && h.c.b.u, a, b) || d.Va(document.location.href, a, b)
            }, Va: function (a, f, d) {
                if (a === r) return w;
                b.test(f) || (a = a.replace(b, ""));
                f = f.replace(/\/$/, "");
                a = a.replace(/\/$/, "");
                d && (a = a.replace(/^(https?:\/\/)?www\./, "$1"));
                return RegExp("^" + f.replace(/[?.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$").test(a)
            }, $: function (e, b) {
                var q = d.Bb(e);
                if (!a.d(q,
                    "Undefined")) {
                    if (a.d(q, "Array")) {
                        for (var g = 0; g < q.length; g++) if (d.Ua(q[g], b)) return u;
                        return w
                    }
                    if (a.d(q, "Object")) {
                        var g = [], l;
                        for (l in q) q.hasOwnProperty(l) && d.Ua(l, b) && (g = g.concat(q[l]));
                        return g
                    }
                }
            }
        };
        return h.na = d
    })();
    (function () {
        function a(a, e) {
            var f = document.createElement("script");
            f.charset = "utf-8";
            b.d(e, "Function") && (f.readyState ? f.onreadystatechange = function () {
                if ("loaded" === f.readyState || "complete" === f.readyState) f.onreadystatechange = v, e()
            } : f.onload = function () {
                e()
            });
            f.src = a;
            var q = document.getElementsByTagName("script")[0];
            q.parentNode.insertBefore(f, q)
        }

        var b = mt.lang;
        return h.load = a
    })();
    (function () {
        var a = mt.cookie, b = mt.localStorage, d = mt.sessionStorage, e = {
            getData: function (e) {
                try {
                    return a.get(e) || d.get(e) || b.get(e)
                } catch (q) {
                }
            }, setData: function (f, q, g) {
                try {
                    a.set(f, q, {domain: e.O(), path: e.aa(), N: g}), g ? b.set(f, q, g) : d.set(f, q)
                } catch (l) {
                }
            }, removeData: function (f) {
                try {
                    a.set(f, "", {domain: e.O(), path: e.aa(), N: -1}), d.remove(f), b.remove(f)
                } catch (q) {
                }
            }, T: function (a, e) {
                a = "." + a.replace(/:\d+/, "");
                e = "." + e.replace(/:\d+/, "");
                var b = a.indexOf(e);
                return -1 < b && b + e.length === a.length
            }, da: function (a, e) {
                a = a.replace(/^https?:\/\//,
                    "");
                return 0 === a.indexOf(e)
            }, O: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (e.T(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, aa: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && e.da(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }
        };
        return h.ma = e
    })();
    (function () {
        var a = mt.lang, b = mt.G, d = h.ma,
            e = {pageview: {}, session: {}, autoEventTracking: {}, customEvent: {}, user: {}},
            f = {user: 1, session: 2, pageview: 3, autoEventTracking: 3, customEvent: 3, others: 3},
            q = ["session", "user"], g = "Hm_up_" + c.id, l = {
                init: function () {
                    l.Yb()
                }, Yb: function () {
                    try {
                        var f = b.parse(decodeURIComponent(d.getData(g)));
                        a.d(f, "Object") && (e.user = f)
                    } catch (s) {
                    }
                }, s: function (a) {
                    var b = {};
                    e[a] !== r && (b = e[a]);
                    a = this.ta();
                    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
                    return a
                }, ta: function () {
                    for (var a = {}, b, d = q.length -
                        1; 0 <= d; d--) {
                        b = e[q[d]];
                        for (var m in b) b.hasOwnProperty(m) && (a[m] = b[m])
                    }
                    return a
                }, setProperty: function (d, f, g) {
                    var m = e[d];
                    if (a.d(m, "Object") && a.d(f, "Object")) {
                        for (var x in f) if (f.hasOwnProperty(x)) {
                            var k = a.h(String(x));
                            if (g || !/^_/.test(k) && !/_$/.test(k) || /^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(k)) {
                                var n = f[x];
                                if (n == v) delete m[k]; else {
                                    if (a.d(n, "Object") || a.d(n, "Array")) n = b.stringify(n);
                                    n = a.h(String(n));
                                    l.$b(d, k, n) && (m[k] = {value: n, scope: l.Oa(d)})
                                }
                            }
                        }
                        "user" === d && l.Ba()
                    }
                }, n: function (b) {
                    b !== r && ("userId" ===
                    b && a.d(e.user, "Object") ? (delete e.user.uid_, l.Ba()) : "user" === b && a.d(e.user, "Object") ? (b = e.user.uid_, e.user = b === r ? {} : {uid_: b}, l.Ba()) : e[b] !== r && (e[b] = {}))
                }, Ba: function () {
                    try {
                        d.setData(g, encodeURIComponent(b.stringify(e.user)), c.age)
                    } catch (a) {
                    }
                }, $b: function (a, b, d) {
                    var m = u, f = e[a];
                    if (256 < encodeURIComponent(String(b)).length || 256 < encodeURIComponent(String(d)).length) m = w; else {
                        var k = f[b];
                        f[b] = {value: d, scope: l.Oa(a)};
                        a = l.I(l.s(a));
                        2048 < encodeURIComponent(a).length && (k !== r ? f[b] = k : delete f[b], m = w)
                    }
                    return m
                },
                I: function (a) {
                    var b = [], e, d;
                    for (d in a) a.hasOwnProperty(d) && (e = [d, a[d].value], (1 === a[d].scope || 2 === a[d].scope) && e.push(a[d].scope), b.push(e.join("*")));
                    return b.join("!")
                }, Oa: function (a) {
                    a = f[a];
                    return a !== r ? a : f.others
                }
            };
        return h.L = l
    })();
    (function () {
        var a = mt.g, b = mt.lang, d = h.t, e = h.na, f = h.L, q = f.I;
        if (b.isArray(c.cptrk) && 0 < c.cptrk.length) {
            var g = {
                Za: {}, ga: {}, init: function () {
                    for (var a, d = e.$(c.cptrk) || [], f = 0; f < d.length; f++) if (a = d[f], a.a !== r && b.d(a.a, "Object")) {
                        a = a.a;
                        for (var t in a) a.hasOwnProperty(t) && (g.ga[t] = String(a[t]))
                    }
                }, Ya: function () {
                    var b, e, d;
                    for (d in g.ga) if (g.ga.hasOwnProperty(d) && g.Za[d] === r && (b = g.ga[d], b = a.pa(b))) e = e === r ? {} : e, e[d] = a.P(b, w), g.Za[d] = u;
                    return e
                }, va: function () {
                    var a = g.Ya();
                    a && g.ic(a)
                }, Xb: function () {
                    "MutationObserver" in
                    window && document.body ? (new MutationObserver(g.va)).observe(document.body, {
                        childList: u,
                        subtree: u
                    }) : window.setInterval(g.va, 15E3)
                }, ic: function (a) {
                    if (b.d(a, "Object")) {
                        f.setProperty("pageview", a);
                        a = h.c.b.p;
                        var e = h.c.b.ep;
                        h.c.b.et = 9;
                        h.c.b.ep = "";
                        h.c.b.p = q(f.s("pageview"));
                        h.c.l();
                        h.c.b.p = a;
                        h.c.b.ep = e;
                        f.n("pageview")
                    }
                }
            };
            g.init();
            d.e("pv-b", function () {
                var a = g.Ya();
                a && f.setProperty("pageview", a)
            });
            g.Xb();
            a.dc(g.va)
        }
    })();
    (function () {
        var a = mt.lang, b = mt.g, d = h.na, e = {
            Z: function (a, q) {
                return function (g) {
                    var l = g.target || g.srcElement;
                    if (l) {
                        var p = d.$(q) || [], s = l.getAttribute(a.ha);
                        g = g.clientX + ":" + g.clientY;
                        if (s && s === g) l.removeAttribute(a.ha); else if (0 < p.length && (l = b.Jb(l)) && l.length) if (p = l.length, s = l[l.length - 1], 1E4 > p * s.split(">").length) for (s = 0; s < p; s++) e.eb(a, l[s]); else e.eb(a, s)
                    }
                }
            }, eb: function (b, e) {
                for (var d = {}, l = String(e).split(">").length, p = 0; p < l; p++) d[e] = "", e = e.substring(0, e.lastIndexOf(">"));
                b && (a.d(b, "Object") && b.Ka) &&
                b.Ka(d)
            }, ec: function (a, b) {
                return function (e) {
                    (e.target || e.srcElement).setAttribute(a.ha, e.clientX + ":" + e.clientY);
                    a && a.o && (b ? a.o(b) : a.o("#" + encodeURIComponent(this.id), e.type))
                }
            }
        };
        return h.ub = e
    })();
    (function () {
        var a = mt.g, b = mt.event, d = mt.lang, e = h.A, f = h.na, q = h.ub, g = h.L, l = g.I, p = {
            ha: "HM_ce", jb: function () {
                if (c.cetrk && 0 < c.cetrk.length) {
                    b.e(document, "click", q.Z(p, c.cetrk));
                    for (var e = f.$(c.cetrk) || [], d = 0, m = e.length; d < m; d++) {
                        var x = e[d], k = x.p || "";
                        -1 === k.indexOf(">") && (0 === k.indexOf("#") && (k = k.substring(1)), (k = a.yb(k)) && b.e(k, "click", q.ec(p, x)))
                    }
                }
            }, Ka: function (a) {
                for (var e = f.$(c.cetrk) || [], b = 0; b < e.length; b++) {
                    var d = e[b], k = p.Eb(d.p, a);
                    k && p.o(d, k)
                }
            }, Eb: function (a, b) {
                a = String(a);
                if (0 < a.indexOf("*")) {
                    var e =
                        RegExp("^" + a.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\*/, "\\d+") + "$"), d;
                    for (d in b) if (b.hasOwnProperty(d) && e.test(d)) return d;
                    return v
                }
                return b.hasOwnProperty(a) ? a : v
            }, o: function (b, e) {
                h.c.b.et = 7;
                var m = b && b.k || "", m = d.h(m), f = {};
                if (b && b.a && d.d(b.a, "Object")) {
                    var k = b.a, n;
                    for (n in k) if (k.hasOwnProperty(n)) {
                        var y = p.Kb(k[n] || "", e), y = y ? a.P(y, w) : "";
                        f[n] = y
                    }
                }
                f = p.Ab(f, e || b && b.p);
                f._iden = m;
                g.setProperty("customEvent", f);
                h.c.b.ep = "";
                h.c.b.p = l(g.s("customEvent"));
                h.c.l();
                h.c.b.p = "";
                g.n("customEvent")
            },
            Ab: function (b, d) {
                var m = a.pa(d), f = e.Ga;
                m && (c.aet && c.aet.length ? (b.ei_ = a.getAttribute(m, f.id) || a.getAttribute(m, "id") || "", b.ec_ = a.getAttribute(m, f.Y) || a.getAttribute(m, "class") || "", b.ex_ = a.getAttribute(m, f.X) || a.sa(m), b.en_ = a.getAttribute(m, f.content) || a.P(m, u), b.et_ = a.getAttribute(m, f.fa) || a.Q(m), b.el_ = a.getAttribute(m, f.link) || a.getAttribute(m, "href") || "") : (b.ex_ = a.getAttribute(m, f.X) || a.sa(m), b.en_ = a.getAttribute(m, f.content) || a.P(m, u)));
                return b
            }, Kb: function (b, e) {
                b = String(b);
                e = String(e);
                if (0 < b.indexOf("*")) {
                    var d =
                        /.*\[(\d+)\]$/.exec(e);
                    b = b.replace("*", d ? d[1] : "1")
                }
                return a.pa(b)
            }
        };
        h.t.e("pv-b", p.jb);
        return p
    })();
    (function () {
        var a = mt.lang, b = mt.g, d = mt.event, e = mt.f, f = h.A, q = h.t, g = h.L, l = g.I, p = +new Date, s = [],
            t = {
                Z: function () {
                    return function (e) {
                        if (h.c && h.c.S && c.aet && c.aet.length) {
                            var d = e.target || e.srcElement;
                            if (d) {
                                var k = h.c.Ja, n = b.getAttribute(d, f.Ia) != v ? u : w;
                                if (b.getAttribute(d, f.Ha) == v) if (n) t.ka(t.qa(d, e)); else {
                                    var y = b.Q(d);
                                    if (a.D(k, "*") || a.D(k, y)) t.ka(t.qa(d, e)); else for (; d.parentNode != v;) {
                                        var n = d.parentNode, y = b.Q(n), z = "a" === y && a.D(k, "a") ? u : w,
                                            y = "button" === y && a.D(k, "button") ? u : w,
                                            A = b.getAttribute(n, f.Ia) != v ? u : w;
                                        if (b.getAttribute(n, f.Ha) == v && (z || y || A)) {
                                            t.ka(t.qa(n, e));
                                            break
                                        }
                                        d = d.parentNode
                                    }
                                }
                            }
                        }
                    }
                }, qa: function (d, g) {
                    var k = {}, n = f.Ga;
                    k.id = b.getAttribute(d, n.id) || b.getAttribute(d, "id") || "";
                    k.Y = b.getAttribute(d, n.Y) || b.getAttribute(d, "class") || "";
                    k.X = b.getAttribute(d, n.X) || b.sa(d);
                    k.content = b.getAttribute(d, n.content) || b.P(d, u);
                    k.fa = b.getAttribute(d, n.fa) || b.Q(d);
                    k.link = b.getAttribute(d, n.link) || b.getAttribute(d, "href") || "";
                    k.type = g.type || "click";
                    n = a.Ta(d.offsetTop) ? d.offsetTop : 0;
                    "click" === g.type ? n = e.Sa ? g.clientY +
                        Math.max(document.documentElement.scrollTop, document.body.scrollTop) : g.pageY : "touchend" === g.type && (g.Xa && g.Xa.changedTouches) && (n = g.Xa.changedTouches[0].pageY);
                    k.pc = n;
                    n = this.Db(g);
                    k.za = n.za || 0;
                    k.Aa = n.Aa || 0;
                    k.Fa = n.Fa || 0;
                    k.ua = n.ua || 0;
                    k.Da = n.Da || "b";
                    return k
                }, Db: function (d) {
                    var f = d.target || d.srcElement, k;
                    if (e.Sa) {
                        var n = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                        k = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
                        k = d.clientX + k;
                        d = d.clientY + n
                    } else k = d.pageX,
                        d = d.pageY;
                    var g = n = 0, z = 0, A = 0;
                    if (f && (n = f.offsetWidth || f.clientWidth, g = f.offsetHeight || f.clientHeight, A = b.Hb(f), z = A.left, A = A.top, a.d(f.getBBox, "Function") && (g = f.getBBox(), n = g.width, g = g.height), "html" === (f.tagName || "").toLowerCase())) n = Math.max(n, f.clientWidth), g = Math.max(g, f.clientHeight);
                    return {
                        za: Math.round(100 * ((k - z) / n)),
                        Aa: Math.round(100 * ((d - A) / g)),
                        Fa: n,
                        ua: g,
                        Da: ("a" === (f.tagName || "").toLowerCase() ? f : b.zb(f)) ? "a" : "b"
                    }
                }, ka: function (b) {
                    var e = a.h;
                    b = [+new Date - (h.c.U !== r ? h.c.U : p), e(b.id), e(b.Y), e(b.fa),
                        e(b.X), e(b.link), e(b.content), b.type, b.pc, b.za, b.Aa, b.Fa, b.ua, b.Da].join("*");
                    t.la(b);
                    a.d(this.W(), "Function") && this.W()()
                }, la: function (a) {
                    var b = f.Ma;
                    a.length > b || (encodeURIComponent(s.join("!") + a).length > b && 0 < s.length && (t.o(s.join("!")), s = []), s.push(a))
                }, o: function (a) {
                    h.c.b.et = 5;
                    h.c.b.ep = a;
                    g.setProperty("autoEventTracking", {view_h_: e.C()}, u);
                    h.c.b.p = l(g.s("autoEventTracking"));
                    h.c.l();
                    h.c.b.p = "";
                    g.setProperty("autoEventTracking", {view_h_: v}, u)
                }, W: function () {
                    return function () {
                        s && s.length && (t.o(s.join("!")),
                            s = [])
                    }
                }
            };
        a.F(c.aet) && "" !== c.aet && q.e("pv-b", function () {
            d.e(document, "click", t.Z());
            "ontouchend" in document && d.e(window, "touchend", t.Z());
            d.e(window, "unload", t.W())
        });
        return t
    })();
    (function () {
        var a = mt.lang, b = mt.event, d = mt.f, e = h.A, f = h.t, q = h.L, g = q.I, l = +new Date, p = [], s = v, t = {
            mb: function () {
                a.F(c.aet) && "" !== c.aet && setInterval(t.cb, e.gc)
            }, cb: function () {
                var a = d.C();
                0 < a - h.c.b.vl && (h.c.b.vl = a)
            }
        }, m = {
            tb: function () {
                return function () {
                    h.c && (h.c.S && c.aet && c.aet.length) && (window.clearTimeout(s), s = window.setTimeout(function () {
                        m.lb(d.C())
                    }, 150))
                }
            }, lb: function (a) {
                m.la([+new Date - (h.c.U !== r ? h.c.U : l), a].join("*"))
            }, la: function (a) {
                if (encodeURIComponent(p.join("!") + a).length > e.Ma || 3 < p.length) m.o(p.join("!")),
                    p = [];
                p.push(a)
            }, o: function (a) {
                t.cb();
                h.c.b.et = 6;
                h.c.b.vh = d.Pa();
                h.c.b.ep = a;
                q.setProperty("autoEventTracking", {view_h_: d.C()}, u);
                h.c.b.p = g(q.s("autoEventTracking"));
                h.c.l();
                h.c.b.p = "";
                q.setProperty("autoEventTracking", {view_h_: v}, u)
            }, W: function () {
                return function () {
                    p && p.length && (m.o(p.join("!")), p = [])
                }
            }
        };
        a.F(c.aet) && "" !== c.aet && f.e("pv-b", function () {
            b.e(window, "scroll", m.tb());
            b.e(window, "unload", m.W());
            t.mb()
        });
        return m
    })();
    (function () {
        function a() {
            return function () {
                h.c.b.nv = 0;
                h.c.b.st = 4;
                h.c.b.et = 3;
                h.c.b.ep = h.oa.Ib() + "," + h.oa.Fb();
                h.c.b.hca = c.hca;
                h.c.l()
            }
        }

        function b() {
            clearTimeout(z);
            var a;
            n && (a = "visible" == document[n]);
            y && (a = !document[y]);
            l = "undefined" == typeof a ? u : a;
            if ((!g || !p) && l && s) k = u, m = +new Date; else if (g && p && (!l || !s)) k = w, x += +new Date - m;
            g = l;
            p = s;
            z = setTimeout(b, 100)
        }

        function d(a) {
            var b = document, n = "";
            if (a in b) n = a; else for (var e = ["webkit", "ms", "moz", "o"], d = 0; d < e.length; d++) {
                var f = e[d] + a.charAt(0).toUpperCase() + a.slice(1);
                if (f in b) {
                    n = f;
                    break
                }
            }
            return n
        }

        function e(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) s = "focus" == a.type || "focusin" == a.type ? u : w, b()
        }

        var f = mt.event, q = h.t, g = u, l = u, p = u, s = u, t = +new Date, m = t, x = 0, k = u,
            n = d("visibilityState"), y = d("hidden"), z;
        b();
        (function () {
            var a = n.replace(/[vV]isibilityState/, "visibilitychange");
            f.e(document, a, b);
            f.e(window, "pageshow", b);
            f.e(window, "pagehide", b);
            "object" == typeof document.onfocusin ? (f.e(document, "focusin", e), f.e(document, "focusout", e)) : (f.e(window,
                "focus", e), f.e(window, "blur", e))
        })();
        h.oa = {
            Ib: function () {
                return +new Date - t
            }, Fb: function () {
                return k ? +new Date - m + x : x
            }
        };
        q.e("pv-b", function () {
            f.e(window, "unload", a())
        });
        q.e("duration-send", a());
        q.e("duration-done", function () {
            m = t = +new Date;
            x = 0
        });
        return h.oa
    })();
    (function () {
        var a = mt.lang, b = h.A, d = h.load, e = {
            Wb: function (e) {
                if ((window._dxt === r || a.d(window._dxt, "Array")) && "undefined" !== typeof h.c) {
                    var q = h.c.O();
                    d([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(q)].join(""), e)
                }
            }, nc: function (b) {
                if (a.d(b, "String") || a.d(b, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", b])
            }
        };
        return h.rb = e
    })();
    (function () {
        function a(a, b, e, d) {
            if (!(a === r || b === r || d === r)) {
                if ("" === a) return [b, e, d].join("*");
                a = String(a).split("!");
                for (var f, k = w, g = 0; g < a.length; g++) if (f = a[g].split("*"), String(b) === f[0]) {
                    f[1] = e;
                    f[2] = d;
                    a[g] = f.join("*");
                    k = u;
                    break
                }
                k || a.push([b, e, d].join("*"));
                return a.join("!")
            }
        }

        function b(a) {
            for (var d in a) if ({}.hasOwnProperty.call(a, d)) {
                var f = a[d];
                e.d(f, "Object") || e.d(f, "Array") ? b(f) : a[d] = String(f)
            }
        }

        var d = mt.url, e = mt.lang, f = mt.G, q = mt.f, g = h.A, l = h.t, p = h.rb, s = h.load, t = h.ma, m = h.L,
            x = m.I, k = {
                V: [], ea: 0, xa: w,
                z: {Ea: "", page: ""}, init: function () {
                    k.i = 0;
                    m.init();
                    l.e("pv-b", function () {
                        k.sb();
                        k.vb()
                    });
                    l.e("pv-d", function () {
                        k.wb();
                        k.z.page = ""
                    });
                    l.e("stag-b", function () {
                        h.c.b.api = k.i || k.ea ? k.i + "_" + k.ea : "";
                        h.c.b.ct = [decodeURIComponent(t.getData("Hm_ct_" + c.id) || ""), k.z.Ea, k.z.page].join("!")
                    });
                    l.e("stag-d", function () {
                        h.c.b.api = 0;
                        k.i = 0;
                        k.ea = 0
                    })
                }, sb: function () {
                    var a = window._hmt || [];
                    if (!a || e.d(a, "Array")) window._hmt = {
                        id: c.id, cmd: {}, push: function () {
                            for (var a = window._hmt, b = 0; b < arguments.length; b++) {
                                var n = arguments[b];
                                e.d(n, "Array") && (a.cmd[a.id].push(n), "_setAccount" === n[0] && (1 < n.length && /^[0-9a-f]{31,32}$/.test(n[1])) && (n = n[1], a.id = n, a.cmd[n] = a.cmd[n] || []))
                            }
                        }
                    }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
                }, vb: function () {
                    var a = window._hmt;
                    if (a && a.cmd && a.cmd[c.id]) for (var b = a.cmd[c.id], e = /^_track(Event|MobConv|Order)$/, d = 0, f = b.length; d < f; d++) {
                        var g = b[d];
                        e.test(g[0]) ? k.V.push(g) : k.Ca(g)
                    }
                    a.cmd[c.id] = {push: k.Ca}
                }, wb: function () {
                    if (0 < k.V.length) for (var a = 0, b = k.V.length; a < b; a++) k.Ca(k.V[a]);
                    k.V = v
                }, Ca: function (a) {
                    var b =
                        a[0];
                    if (k.hasOwnProperty(b) && e.d(k[b], "Function")) k[b](a)
                }, _setAccount: function (a) {
                    1 < a.length && /^[0-9a-f]{31,32}$/.test(a[1]) && (k.i |= 1)
                }, _setAutoPageview: function (a) {
                    if (1 < a.length && (a = a[1], w === a || u === a)) k.i |= 2, h.c.Qa = a
                }, _trackPageview: function (a) {
                    1 < a.length && (a[1].charAt && "/" === a[1].charAt(0)) && (k.i |= 4, h.c.b.sn = h.c.Na(), h.c.b.et = 0, h.c.b.ep = "", h.c.b.vl = q.C(), h.c.b.kb = 0, h.c.wa ? (h.c.b.nv = 0, h.c.b.st = 4) : h.c.wa = u, k.xa || (h.c.b.su = h.c.b.u || document.location.href), h.c.b.u = g.protocol + "//" + document.location.host +
                        a[1], h.c.b.p = x(m.s("pageview")), h.c.l(), h.c.b.p = "", h.c.U = +new Date, m.n("pageview"))
                }, _trackEvent: function (a) {
                    2 < a.length && (k.i |= 8, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 4, h.c.b.ep = e.h(a[1]) + "*" + e.h(a[2]) + (a[3] ? "*" + e.h(a[3]) : "") + (a[4] ? "*" + e.h(a[4]) : ""), h.c.b.p = x(m.ta()), h.c.l(), h.c.b.p = "")
                }, _setCustomVar: function (a) {
                    if (!(4 > a.length)) {
                        var b = a[1], d = a[4] || 3;
                        if (0 < b && 6 > b && 0 < d && 4 > d) {
                            k.ea++;
                            for (var f = (h.c.b.cv || "*").split("!"), g = f.length; g < b - 1; g++) f.push("*");
                            f[b - 1] = d + "*" + e.h(a[2]) + "*" + e.h(a[3]);
                            h.c.b.cv = f.join("!");
                            a = h.c.b.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                            "" !== a ? t.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : t.removeData("Hm_cv_" + c.id)
                        }
                    }
                }, _setUserTag: function (b) {
                    if (!(3 > b.length)) {
                        var d = e.h(b[1]);
                        b = e.h(b[2]);
                        if (d !== r && b !== r) {
                            var f = decodeURIComponent(t.getData("Hm_ct_" + c.id) || ""), f = a(f, d, 1, b);
                            t.setData("Hm_ct_" + c.id, encodeURIComponent(f), c.age)
                        }
                    }
                }, _setVisitTag: function (b) {
                    if (!(3 > b.length)) {
                        var d = e.h(b[1]);
                        b = e.h(b[2]);
                        if (d !== r && b !== r) {
                            var f = k.z.Ea, f = a(f, d, 2, b);
                            k.z.Ea = f
                        }
                    }
                }, _setPageTag: function (b) {
                    if (!(3 >
                        b.length)) {
                        var d = e.h(b[1]);
                        b = e.h(b[2]);
                        if (d !== r && b !== r) {
                            var f = k.z.page, f = a(f, d, 3, b);
                            k.z.page = f
                        }
                    }
                }, _setReferrerOverride: function (a) {
                    1 < a.length && (a = a[1], e.d(a, "String") ? (h.c.b.su = "/" === a.charAt(0) ? g.protocol + "//" + window.location.host + a : a, k.xa = u) : k.xa = w)
                }, _trackOrder: function (a) {
                    a = a[1];
                    e.d(a, "Object") && (b(a), k.i |= 16, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 94, h.c.b.ep = f.stringify(a), h.c.b.p = x(m.ta()), h.c.l(), h.c.b.p = "")
                }, _trackMobConv: function (a) {
                    if (a = {webim: 1, tel: 2, map: 3, sms: 4, callback: 5, share: 6}[a[1]]) k.i |=
                        32, h.c.b.et = 93, h.c.b.ep = a, h.c.l()
                }, _setDataxId: function (a) {
                    a = a[1];
                    p.Wb();
                    p.nc(a)
                }, _setUserId: function (a) {
                    a = a[1];
                    if (a !== r && (e.F(a) || e.Ta(a))) {
                        var b = m.s("user").uid_;
                        if (!(b && b.value === e.h(String(a)))) {
                            var b = h.c.b.p, d = h.c.b.ep;
                            h.c.b.et = 8;
                            h.c.b.ep = "";
                            h.c.b.p = "uid_*" + e.h(String(a));
                            h.c.l();
                            var f = {};
                            f.uid_ = a;
                            m.setProperty("user", f, u);
                            h.c.b.p = b;
                            h.c.b.ep = d
                        }
                    }
                }, _clearUserId: function (a) {
                    1 < a.length && u === a[1] && m.n("userId")
                }, _setUserProperty: function (a) {
                    a = a[1];
                    e.d(a, "Object") && m.setProperty("user", a)
                }, _clearUserProperty: function (a) {
                    1 <
                    a.length && u === a[1] && m.n("user")
                }, _setSessionProperty: function (a) {
                    a = a[1];
                    e.d(a, "Object") && m.setProperty("session", a)
                }, _clearSessionProperty: function (a) {
                    1 < a.length && u === a[1] && m.n("session")
                }, _setPageviewProperty: function (a) {
                    a = a[1];
                    e.d(a, "Object") && m.setProperty("pageview", a)
                }, _clearPageviewProperty: function (a) {
                    1 < a.length && u === a[1] && m.n("pageview")
                }, _setAutoEventTrackingProperty: function (a) {
                    a = a[1];
                    e.d(a, "Object") && m.setProperty("autoEventTracking", a)
                }, _clearAutoEventTrackingProperty: function (a) {
                    1 < a.length &&
                    u === a[1] && m.n("autoEventTracking")
                }, _setAutoTracking: function (a) {
                    if (1 < a.length && (a = a[1], w === a || u === a)) h.c.Ra = a
                }, _setAutoEventTracking: function (a) {
                    if (1 < a.length && (a = a[1], w === a || u === a)) h.c.S = a
                }, _trackPageDuration: function (a) {
                    1 < a.length ? (a = a[1], 2 === String(a).split(",").length && (h.c.b.et = 3, h.c.b.ep = a, h.c.l())) : l.K("duration-send");
                    l.K("duration-done")
                }, _require: function (a) {
                    1 < a.length && (a = a[1], g.ob.test(d.R(a)) && s(a))
                }, _providePlugin: function (a) {
                    if (1 < a.length) {
                        var b = window._hmt, d = a[1];
                        a = a[2];
                        if (e.D(g.$a,
                            d) && e.d(a, "Function") && (b.plugins = b.plugins || {}, b.H = b.H || {}, b.plugins[d] = a, b.w = b.w || [], a = b.w.slice(), d && a.length && a[0][1] === d)) for (var f = 0, k = a.length; f < k; f++) {
                            var l = a[f][2] || {};
                            if (b.plugins[d] && !b.H[d]) b.H[d] = new b.plugins[d](l), b.w.shift(); else break
                        }
                    }
                }, _requirePlugin: function (a) {
                    if (1 < a.length) {
                        var b = window._hmt, d = a[1], f = a[2] || {};
                        if (e.D(g.$a, d)) if (b.plugins = b.plugins || {}, b.H = b.H || {}, b.plugins[d] && !b.H[d]) b.H[d] = new b.plugins[d](f); else {
                            b.w = b.w || [];
                            for (var f = 0, l = b.w.length; f < l; f++) if (b.w[f][1] ===
                                d) return;
                            b.w.push(a);
                            k._require([v, g.bc + d + ".js"])
                        }
                    }
                }, _trackCustomEvent: function (a) {
                    if (1 < a.length) {
                        var b = a[1];
                        a = a[2];
                        e.d(a, "Object") || (a = {});
                        a._iden = b;
                        m.setProperty("customEvent", a);
                        h.c.b.et = 7;
                        h.c.b.ep = "";
                        h.c.b.p = x(m.s("customEvent"));
                        h.c.l();
                        h.c.b.p = "";
                        m.n("customEvent")
                    }
                }
            };
        k.init();
        h.pb = k;
        return h.pb
    })();
    (function () {
        var a = h.t;
        c.spa !== r && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]), a.e("pv-b", function () {
            "" !== window.location.hash && (h.c.b.u = window.location.href)
        }))
    })();
    (function () {
        function a() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = u, this.b = {}, this.Ra = this.Qa = u, this.S = k.S, this.Ja = f.F(c.aet) && 0 < c.aet.length ? c.aet.split(",") : "", this.wa = w, this.init())
        }

        var b = mt.url, d = mt.fb, e = mt.gb, f = mt.lang, q = mt.cookie, g = mt.f, l = mt.sessionStorage, p = mt.G,
            s = mt.event, t = h.ma, m = h.L, x = m.I, k = h.A, n = h.load, y = h.t;
        a.prototype = {
            T: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            }, da: function (a,
                             b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, ba: function (a) {
                for (var d = 0; d < c.dm.length; d++) if (-1 < c.dm[d].indexOf("/")) {
                    if (this.da(a, c.dm[d])) return u
                } else {
                    var e = b.R(a);
                    if (e && this.T(e, c.dm[d])) return u
                }
                return w
            }, O: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (this.T(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, aa: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.da(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/,
                        "$1") + "/"
                }
                return "/"
            }, Mb: function () {
                if (!document.referrer) return k.J - k.M > c.vdur ? 1 : 4;
                var a = w;
                this.ba(document.referrer) && this.ba(document.location.href) ? a = u : (a = b.R(document.referrer), a = this.T(a || "", document.location.hostname));
                return a ? k.J - k.M > c.vdur ? 1 : 4 : 3
            }, lc: function () {
                var a, b, d, e, f, g;
                k.M = t.getData("Hm_lpvt_" + c.id) || 0;
                13 === k.M.length && (k.M = Math.round(k.M / 1E3));
                b = this.Mb();
                a = 4 !== b ? 1 : 0;
                if (g = t.getData("Hm_lvt_" + c.id)) {
                    e = g.split(",");
                    for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] /
                        1E3));
                    for (; 2592E3 < k.J - e[0];) e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(k.J); 4 < e.length;) e.shift();
                    g = e.join(",");
                    e = e[e.length - 1]
                } else g = k.J, e = "", f = 1;
                this.Zb() ? (t.setData("Hm_lvt_" + c.id, g, c.age), t.setData("Hm_lpvt_" + c.id, k.J), d = q.ac(this.O(), this.aa())) : this.xb();
                if (0 === c.nv && this.ba(document.location.href) && ("" === document.referrer || this.ba(document.referrer))) a = 0, b = 4;
                this.b.nv = a;
                this.b.st = b;
                this.b.cc = d;
                this.b.lt = e;
                this.b.lv = f
            }, Zb: function () {
                var a = b.R(document.location.href);
                return !f.D("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),
                    a)
            }, xb: function () {
                for (var a = document.cookie.split(";"), b = 0; b < a.length; b++) {
                    var d = a[b].split("=");
                    d.length && /Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0])) && t.removeData(d[0]);
                    d.length && /Hm_ck_[0-9]{13}/.test(String(d[0])) && t.removeData(d[0])
                }
            }, kc: function () {
                for (var a = [], b = this.b.et, d = 0, e = k.hb.length; d < e; d++) {
                    var f = k.hb[d], g = this.b[f];
                    "undefined" !== typeof g && "" !== g && ("tt" !== f || "tt" === f && 0 === b) && ("ct" !== f || "ct" === f && 0 === b) && a.push(f + "=" + encodeURIComponent(g))
                }
                return a.join("&")
            }, mc: function () {
                this.lc();
                this.b.si = c.id;
                this.b.sn = this.Na();
                this.b.su = document.referrer;
                this.b.ds = g.fc;
                this.b.cl = g.colorDepth + "-bit";
                this.b.ln = String(g.language).toLowerCase();
                this.b.ja = g.javaEnabled ? 1 : 0;
                this.b.ck = g.cookieEnabled ? 1 : 0;
                this.b.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.b.fl = e.Ob();
                this.b.v = "1.2.88";
                this.b.cv = decodeURIComponent(t.getData("Hm_cv_" + c.id) || "");
                this.b.tt = document.title || "";
                this.b.vl = g.C();
                var a = document.location.href;
                this.b.cm = b.m(a, k.Tb) || "";
                this.b.cp = b.m(a, k.Ub) || b.m(a, k.tc) || "";
                this.b.cw = b.m(a, k.Sb) ||
                    b.m(a, k.vc) || "";
                this.b.ci = b.m(a, k.Qb) || b.m(a, k.sc) || "";
                this.b.cf = b.m(a, k.Vb) || b.m(a, k.uc) || "";
                this.b.cu = b.m(a, k.Rb) || b.m(a, k.rc) || "";
                /https?:/.test(document.location.protocol) && (this.b.u = a)
            }, init: function () {
                try {
                    this.mc(), 0 === this.b.nv ? this.jc() : this.La(), h.c = this, this.qb(), y.K("pv-b"), this.hc()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    d.log(k.ya + "//" + k.ab + "?" + b.join("&"))
                }
            },
            hc: function () {
                function a() {
                    y.K("pv-d")
                }

                this.Qa ? (this.wa = u, this.b.et = 0, this.b.ep = "", this.b.p = x(m.s("pageview")), this.b.vl = g.C(), this.l(a), this.b.p = "") : a();
                this.U = +new Date;
                m.n("pageview")
            }, l: function (a) {
                if (this.Ra) {
                    var b = this;
                    b.b.rnd = Math.round(Math.random() * k.Wa);
                    b.b.r = g.orientation;
                    b.b.ww = g.ib;
                    y.K("stag-b");
                    var e = k.ya + "//" + k.ab + "?" + b.kc();
                    y.K("stag-d");
                    b.nb(e);
                    d.log(e, function (d) {
                        b.bb(d);
                        f.d(a, "Function") && a.call(b)
                    })
                }
            }, qb: function () {
                try {
                    if (window.postMessage && window.self !== window.parent) {
                        var a =
                            this;
                        s.e(window, "message", function (d) {
                            if (b.R(d.origin) === k.qc) {
                                d = d.data || {};
                                var e = d.jn || "", f = /^customevent$|^heatmap$|^pageclick$|^select$/.test(e);
                                if (RegExp(c.id).test(d.sd || "") && f) a.b.rnd = Math.round(Math.random() * k.Wa), n(k.protocol + "//" + c.js + e + ".js?" + a.b.rnd)
                            }
                        });
                        window.parent.postMessage({
                            id: c.id,
                            url: document.location.href,
                            status: "__Messenger__hmLoaded"
                        }, "*")
                    }
                } catch (d) {
                }
            }, nb: function (a) {
                var b;
                try {
                    b = p.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e = this.b.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//, "") + e);
                l.set("Hm_unsent_" + c.id, p.stringify(b))
            }, bb: function (a) {
                var b;
                try {
                    b = p.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a = a.replace(/^https?:\/\//, "");
                    for (var e = 0; e < b.length; e++) if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) {
                        b.splice(e, 1);
                        break
                    }
                    b.length ? l.set("Hm_unsent_" + c.id, p.stringify(b)) : this.La()
                }
            }, La: function () {
                l.remove("Hm_unsent_" + c.id)
            }, jc: function () {
                var a = this, b;
                try {
                    b = p.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (e) {
                    b = []
                }
                if (b.length) for (var f =
                    function (b) {
                        d.log(k.ya + "//" + b, function (b) {
                            a.bb(b)
                        })
                    }, g = 0; g < b.length; g++) f(b[g])
            }, Na: function () {
                return Math.round(+new Date / 1E3) % 65535
            }
        };
        return new a
    })();
    var B = h.A, C = h.load;
    c.pt && C([B.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
})();
