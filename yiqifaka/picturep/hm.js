(function () {
    var h = {}, mt = {}, c = {
        id: "c0ca6a9c79714f473b63766b002bc576",
        dm: ["ezfaka.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: ["%7b%22*%22%3a%5b%22%23newemail%22%5d%7d"],
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
    var s = void 0, u = !0, v = null, x = !1;
    mt.cookie = {};
    mt.cookie.set = function (b, d, a) {
        var n;
        a.U && (n = new Date, n.setTime(n.getTime() + a.U));
        document.cookie = b + "=" + d + (a.domain ? "; domain=" + a.domain : "") + (a.path ? "; path=" + a.path : "") + (n ? "; expires=" + n.toGMTString() : "") + (a.Tc ? "; secure" : "")
    };
    mt.cookie.get = function (b) {
        return (b = RegExp("(^| )" + b + "=([^;]*)(;|$)").exec(document.cookie)) ? b[2] : v
    };
    mt.cookie.vc = function (b, d) {
        try {
            var a = "Hm_ck_" + +new Date;
            mt.cookie.set(a, "is-cookie-enabled", {domain: b, path: d, U: s});
            var n = "is-cookie-enabled" === mt.cookie.get(a) ? "1" : "0";
            mt.cookie.set(a, "", {domain: b, path: d, U: -1});
            return n
        } catch (e) {
            return "0"
        }
    };
    mt.lang = {};
    mt.lang.e = function (b, d) {
        return "[object " + d + "]" === {}.toString.call(b)
    };
    mt.lang.fb = function (b) {
        return mt.lang.e(b, "Number") && isFinite(b)
    };
    mt.lang.C = function (b) {
        return mt.lang.e(b, "String")
    };
    mt.lang.isArray = function (b) {
        return mt.lang.e(b, "Array")
    };
    mt.lang.h = function (b) {
        return b.replace ? b.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : b
    };
    mt.lang.trim = function (b) {
        return b.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.J = function (b, d) {
        var a = x;
        if (b == v || !mt.lang.e(b, "Array") || d === s) return a;
        if (Array.prototype.indexOf) a = -1 !== b.indexOf(d); else for (var n = 0; n < b.length; n++) if (b[n] === d) {
            a = u;
            break
        }
        return a
    };
    mt.lang.Ea = function (b, d) {
        return isNaN(parseFloat(b)) ? 0 : parseFloat(parseFloat(b).toFixed(d))
    };
    mt.url = {};
    mt.url.m = function (b, d) {
        var a = b.match(RegExp("(^|&|\\?|#)(" + d + ")=([^&#]*)(&|$|#)", ""));
        return a ? a[3] : v
    };
    mt.url.Pc = function (b) {
        return (b = b.match(/^(https?:)\/\//)) ? b[1] : v
    };
    mt.url.Xb = function (b) {
        return (b = b.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? b[2].replace(/.*@/, "") : v
    };
    mt.url.P = function (b) {
        return (b = mt.url.Xb(b)) ? b.replace(/:\d+$/, "") : b
    };
    mt.url.Ia = function (b) {
        return (b = b.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? b[2].replace(/[\?#].*/, "").replace(/^$/, "/") : v
    };
    (function () {
        var b = mt.lang, d = mt.url;
        mt.f = {};
        mt.f.Fa = function (a) {
            return document.getElementById(a)
        };
        mt.f.Ga = function (a) {
            if (!a) return v;
            try {
                a = String(a);
                if (0 === a.indexOf("!HMCQ!")) return a;
                if (0 === a.indexOf("!HMCC!")) return document.querySelector(a.substring(6, a.length));
                for (var b = a.split(">"), e = document.body, d = b.length - 1; 0 <= d; d--) if (-1 < b[d].indexOf("#")) {
                    var f = b[d].split("#")[1];
                    (e = document.getElementById(f)) || (e = document.getElementById(decodeURIComponent(f)));
                    b = b.splice(d + 1, b.length - (d + 1));
                    break
                }
                for (a =
                         0; e && a < b.length;) {
                    var g = String(b[a]).toLowerCase();
                    if (!("html" === g || "body" === g)) {
                        var d = 0, q = b[a].match(/\[(\d+)\]/i), f = [];
                        if (q) d = q[1] - 1, g = g.split("[")[0]; else if (1 !== e.childNodes.length) {
                            for (var r = 0, t = 0, p = e.childNodes.length; t < p; t++) {
                                var k = e.childNodes[t];
                                1 === k.nodeType && k.nodeName.toLowerCase() === g && r++;
                                if (1 < r) return v
                            }
                            if (1 !== r) return v
                        }
                        for (r = 0; r < e.childNodes.length; r++) 1 === e.childNodes[r].nodeType && e.childNodes[r].nodeName.toLowerCase() === g && f.push(e.childNodes[r]);
                        if (!f[d]) return v;
                        e = f[d]
                    }
                    a++
                }
                return e
            } catch (m) {
                return v
            }
        };
        mt.f.Ia = function (a, b) {
            var e = [], d = [];
            if (!a) return d;
            for (; a.parentNode != v;) {
                for (var f = 0, g = 0, q = a.parentNode.childNodes.length, r = 0; r < q; r++) {
                    var t = a.parentNode.childNodes[r];
                    if (t.nodeName === a.nodeName && (f++, t === a && (g = f), 0 < g && 1 < f)) break
                }
                if ((q = "" !== a.id) && b) {
                    e.unshift("#" + encodeURIComponent(a.id));
                    break
                } else q && (q = "#" + encodeURIComponent(a.id), q = 0 < e.length ? q + ">" + e.join(">") : q, d.push(q)), e.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < f ? "[" + g + "]" : ""));
                a = a.parentNode
            }
            d.push(e.join(">"));
            return d
        };
        mt.f.na = function (a) {
            return (a = mt.f.Ia(a, u)) && a.length ? String(a[0]) : ""
        };
        mt.f.ac = function (a) {
            return mt.f.Ia(a, x)
        };
        mt.f.Xa = function (a) {
            var b;
            for (b = "A"; (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == b) return a;
            return v
        };
        mt.f.Tb = function (a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.f.Ya = function (a) {
            var b = {top: 0, left: 0};
            if (!a) return b;
            var e = mt.f.Tb(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
            return {
                top: b.top + (window.pageYOffset || e.scrollTop) -
                    (e.clientTop || 0), left: b.left + (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }
        };
        mt.f.getAttribute = function (a, b) {
            var e = a.getAttribute && a.getAttribute(b) || v;
            if (!e && a.attributes && a.attributes.length) for (var d = a.attributes, f = d.length, g = 0; g < f; g++) d[g].nodeName === b && (e = d[g].nodeValue);
            return e
        };
        mt.f.X = function (a) {
            var b = "document";
            a.tagName !== s && (b = a.tagName);
            return b.toLowerCase()
        };
        mt.f.fc = function (a) {
            var d = "";
            a.textContent ? d = b.trim(a.textContent) : a.innerText && (d = b.trim(a.innerText));
            d && (d = d.replace(/\s+/g,
                " ").substring(0, 255));
            return d
        };
        mt.f.W = function (a, n) {
            var e;
            b.C(a) && 0 === String(a).indexOf("!HMCQ!") ? (e = String(a), e = d.m(document.location.href, e.substring(6, e.length))) : b.C(a) || (e = mt.f.X(a), "input" === e && n && ("button" === a.type || "submit" === a.type) ? e = b.trim(a.value) || "" : "input" === e && !n && "password" !== a.type ? e = b.trim(a.value) || "" : "img" === e ? (e = mt.f.getAttribute, e = e(a, "alt") || e(a, "title") || e(a, "src")) : e = "body" === e || "html" === e ? ["(hm-default-content-for-", e, ")"].join("") : mt.f.fc(a));
            return String(e || "").substring(0,
                255)
        };
        (function () {
            (mt.f.mb = function () {
                function a() {
                    if (!a.qa) {
                        a.qa = u;
                        for (var b = 0, e = d.length; b < e; b++) d[b]()
                    }
                }

                function b() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (e) {
                        setTimeout(b, 1);
                        return
                    }
                    a()
                }

                var e = x, d = [], f;
                document.addEventListener ? f = function () {
                    document.removeEventListener("DOMContentLoaded", f, x);
                    a()
                } : document.attachEvent && (f = function () {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", f), a())
                });
                (function () {
                    if (!e) if (e = u, "complete" === document.readyState) a.qa = u;
                    else if (document.addEventListener) document.addEventListener("DOMContentLoaded", f, x), window.addEventListener("load", a, x); else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange", f);
                        window.attachEvent("onload", a);
                        var d = x;
                        try {
                            d = window.frameElement == v
                        } catch (q) {
                        }
                        document.documentElement.doScroll && d && b()
                    }
                })();
                return function (b) {
                    a.qa ? b() : d.push(b)
                }
            }()).qa = x
        })();
        return mt.f
    })();
    mt.event = {};
    mt.event.d = function (b, d, a) {
        b.attachEvent ? b.attachEvent("on" + d, function (d) {
            a.call(b, d)
        }) : b.addEventListener && b.addEventListener(d, a, x)
    };
    mt.event.preventDefault = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = x
    };
    (function () {
        var b = mt.event;
        mt.g = {};
        mt.g.oa = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.g.Yb = function () {
            if (document.documentMode) return document.documentMode;
            var b = /msie (\d+\.\d+)/i.exec(navigator.userAgent);
            return b ? +b[1] || 0 : 0
        };
        mt.g.Qc = function () {
            try {
                return !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && "undefined" !== typeof document.body.style.webkitFilter && !window.chrome
            } catch (b) {
                return x
            }
        };
        mt.g.cookieEnabled = navigator.cookieEnabled;
        mt.g.javaEnabled = navigator.javaEnabled();
        mt.g.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.g.zc = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.g.colorDepth = window.screen.colorDepth || 0;
        mt.g.dc = function () {
            var b;
            b = b || document;
            return parseInt(window.pageYOffset || b.documentElement.scrollTop || b.body && b.body.scrollTop || 0, 10)
        };
        mt.g.bb = function () {
            var b = document;
            return parseInt(window.innerHeight || b.documentElement.clientHeight || b.body && b.body.clientHeight || 0, 10)
        };
        mt.g.I =
            function () {
                return mt.g.dc() + mt.g.bb()
            };
        mt.g.wb = 0;
        mt.g.hc = function () {
            var b = document;
            return parseInt(window.innerWidth || b.documentElement.clientWidth || b.body.offsetWidth || 0, 10)
        };
        mt.g.orientation = 0;
        (function () {
            function d() {
                var b = 0;
                window.orientation !== s && (b = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== s) && (b = screen.orientation.angle);
                mt.g.orientation = b;
                mt.g.wb = mt.g.hc()
            }

            d();
            b.d(window, "orientationchange", d)
        })();
        return mt.g
    })();
    mt.B = {};
    mt.B.parse = function (b) {
        return (new Function("return (" + b + ")"))()
    };
    mt.B.stringify = function () {
        function b(b) {
            /["\\\x00-\x1f]/.test(b) && (b = b.replace(/["\\\x00-\x1f]/g, function (b) {
                var d = a[b];
                if (d) return d;
                d = b.charCodeAt();
                return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16)
            }));
            return '"' + b + '"'
        }

        function d(b) {
            return 10 > b ? "0" + b : b
        }

        var a = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (a) {
            switch (typeof a) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(a) ? String(a) : "null";
                case "string":
                    return b(a);
                case "boolean":
                    return String(a);
                default:
                    if (a === v) return "null";
                    if (a instanceof Array) {
                        var e = ["["], l = a.length, f, g, q;
                        for (g = 0; g < l; g++) switch (q = a[g], typeof q) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                f && e.push(","), e.push(mt.B.stringify(q)), f = 1
                        }
                        e.push("]");
                        return e.join("")
                    }
                    if (a instanceof Date) return '"' + a.getFullYear() + "-" + d(a.getMonth() + 1) + "-" + d(a.getDate()) + "T" + d(a.getHours()) + ":" + d(a.getMinutes()) + ":" + d(a.getSeconds()) + '"';
                    f = ["{"];
                    g = mt.B.stringify;
                    for (l in a) if (Object.prototype.hasOwnProperty.call(a, l)) switch (q =
                        a[l], typeof q) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            e && f.push(","), e = 1, f.push(g(l) + ":" + g(q))
                    }
                    f.push("}");
                    return f.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.xa = function () {
        if (!mt.localStorage.j) try {
            mt.localStorage.j = document.createElement("input"), mt.localStorage.j.type = "hidden", mt.localStorage.j.style.display = "none", mt.localStorage.j.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.j)
        } catch (b) {
            return x
        }
        return u
    };
    mt.localStorage.set = function (b, d, a) {
        var n = new Date;
        n.setTime(n.getTime() + a || 31536E6);
        try {
            window.localStorage ? (d = n.getTime() + "|" + d, window.localStorage.setItem(b, d)) : mt.localStorage.xa() && (mt.localStorage.j.expires = n.toUTCString(), mt.localStorage.j.load(document.location.hostname), mt.localStorage.j.setAttribute(b, d), mt.localStorage.j.save(document.location.hostname))
        } catch (e) {
        }
    };
    mt.localStorage.get = function (b) {
        if (window.localStorage) {
            if (b = window.localStorage.getItem(b)) {
                var d = b.indexOf("|"), a = b.substring(0, d) - 0;
                if (a && a > (new Date).getTime()) return b.substring(d + 1)
            }
        } else if (mt.localStorage.xa()) try {
            return mt.localStorage.j.load(document.location.hostname), mt.localStorage.j.getAttribute(b)
        } catch (n) {
        }
        return v
    };
    mt.localStorage.remove = function (b) {
        if (window.localStorage) window.localStorage.removeItem(b); else if (mt.localStorage.xa()) try {
            mt.localStorage.j.load(document.location.hostname), mt.localStorage.j.removeAttribute(b), mt.localStorage.j.save(document.location.hostname)
        } catch (d) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (b, d) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(b, d)
        } catch (a) {
        }
    };
    mt.sessionStorage.get = function (b) {
        try {
            return window.sessionStorage ? window.sessionStorage.getItem(b) : v
        } catch (d) {
            return v
        }
    };
    mt.sessionStorage.remove = function (b) {
        try {
            window.sessionStorage && window.sessionStorage.removeItem(b)
        } catch (d) {
        }
    };
    mt.tb = {};
    mt.tb.log = function (b, d) {
        var a = new Image, n = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[n] = a;
        a.onload = function () {
            a.onload = v;
            a = window[n] = v;
            d && d(b)
        };
        a.src = b
    };
    mt.Pa = {};
    mt.Pa.gc = function () {
        var b = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var d = navigator.plugins["Shockwave Flash"];
            d && d.description && (b = d.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (b = d.GetVariable("$version")) && (b = b.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (a) {
        }
        return b
    };
    mt.Pa.Nc = function (b, d, a, n, e) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + b + '" width="' + a + '" height="' + n + '"><param name="movie" value="' + d + '" /><param name="flashvars" value="' + (e || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + b + '" width="' + a + '" height="' + n + '" src="' + d + '" flashvars="' + (e || "") + '" allowscriptaccess="always" /></object>'
    };
    h.z = {
        pc: "http://tongji.baidu.com/hm-web/welcome/ico",
        Oa: "hm.baidu.com/hm.gif",
        Cb: /^(tongji|hmcdn).baidu.com$/,
        vb: "tongji.baidu.com",
        lc: "hmmd",
        mc: "hmpl",
        Kc: "utm_medium",
        kc: "hmkw",
        Mc: "utm_term",
        ic: "hmci",
        Jc: "utm_content",
        nc: "hmsr",
        Lc: "utm_source",
        jc: "hmcu",
        Ic: "utm_campaign",
        Q: 0,
        M: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        sa: "https:",
        Rc: 0,
        Ib: 6E5,
        Sc: 6E5,
        Ac: 5E3,
        Jb: 5,
        R: 1024,
        Hb: 1,
        da: 2147483647,
        ub: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
        Z: u,
        Va: ["a", "input", "button"],
        Sa: {
            id: "data-hm-id",
            ka: "data-hm-class",
            ha: "data-hm-xpath",
            content: "data-hm-content",
            va: "data-hm-tag",
            link: "data-hm-link"
        },
        Ua: "data-hm-enabled",
        Ta: "data-hm-disabled",
        xc: "https://hmcdn.baidu.com/static/tongji/plugins/",
        lb: ["UrlChangeTracker", "OcpcCbHm"]
    };
    (function () {
        var b = {
            G: {}, d: function (b, a) {
                this.G[b] = this.G[b] || [];
                this.G[b].push(a)
            }, N: function (b, a) {
                this.G[b] = this.G[b] || [];
                for (var n = this.G[b].length, e = 0; e < n; e++) this.G[b][e](a)
            }
        };
        return h.w = b
    })();
    (function () {
        var b = mt.lang, d = /^https?:\/\//, a = {
            Sb: function (b) {
                var a;
                try {
                    a = JSON.parse(decodeURIComponent(b[0]))
                } catch (d) {
                }
                return a
            }, gb: function (b, a) {
                var l = h.c && h.c.b && h.c.b.u || document.location.href;
                d.test(b) || (l = l.replace(d, ""));
                b = b.replace(/\/$/, "");
                l = l.replace(/\/$/, "");
                a && (l = l.replace(/^(https?:\/\/)?www\./, "$1"));
                return RegExp("^" + b.replace(/[?.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$").test(l)
            }, H: function (d, e) {
                var l = a.Sb(d);
                if (!b.e(l, "Undefined")) {
                    if (b.e(l, "Array")) {
                        for (var f = 0; f < l.length; f++) if (a.gb(l[f],
                            e)) return u;
                        return x
                    }
                    if (b.e(l, "Object")) {
                        var f = [], g;
                        for (g in l) l.hasOwnProperty(g) && a.gb(g, e) && (f = f.concat(l[g]));
                        return f
                    }
                }
            }
        };
        return h.S = a
    })();
    (function () {
        function b(b, n) {
            var e = document.createElement("script");
            e.charset = "utf-8";
            d.e(n, "Function") && (e.readyState ? e.onreadystatechange = function () {
                if ("loaded" === e.readyState || "complete" === e.readyState) e.onreadystatechange = v, n()
            } : e.onload = function () {
                n()
            });
            e.src = b;
            var l = document.getElementsByTagName("script")[0];
            l.parentNode.insertBefore(e, l)
        }

        var d = mt.lang;
        return h.load = b
    })();
    (function () {
        function b() {
            var b = "";
            if (h.c.b.nv) {
                b = encodeURIComponent(document.referrer);
                try {
                    window.sessionStorage ? a.set("Hm_from_" + c.id, b) : d.set("Hm_from_" + c.id, b, 864E5)
                } catch (e) {
                }
            } else try {
                b = (window.sessionStorage ? a.get("Hm_from_" + c.id) : d.get("Hm_from_" + c.id)) || ""
            } catch (l) {
            }
            return b
        }

        var d = mt.localStorage, a = mt.sessionStorage;
        return h.Oc = b
    })();
    (function () {
        var b = h.z, d = {
            init: function () {
                if ("" !== c.icon) {
                    var a = c.icon.split("|"), d = b.pc + "?s=" + c.id,
                        e = "https://hmcdn.baidu.com/static" + a[0] + ".gif";
                    document.write("swf" === a[1] || "gif" === a[1] ? '<a href="' + d + '" target="_blank"><img border="0" src="' + e + '" width="' + a[2] + '" height="' + a[3] + '"></a>' : '<a href="' + d + '" target="_blank">' + a[0] + "</a>")
                }
            }
        };
        h.w.d("pv-b", d.init);
        return d
    })();
    (function () {
        var b = mt.cookie, d = mt.localStorage, a = mt.sessionStorage, n = {
            getData: function (e) {
                try {
                    return b.get(e) || a.get(e) || d.get(e)
                } catch (l) {
                }
            }, setData: function (e, l, f) {
                try {
                    b.set(e, l, {domain: n.V(), path: n.ma(), U: f}), f ? d.set(e, l, f) : a.set(e, l)
                } catch (g) {
                }
            }, removeData: function (e) {
                try {
                    b.set(e, "", {domain: n.V(), path: n.ma(), U: -1}), a.remove(e), d.remove(e)
                } catch (l) {
                }
            }, $: function (b, a) {
                b = "." + b.replace(/:\d+/, "");
                a = "." + a.replace(/:\d+/, "");
                var d = b.indexOf(a);
                return -1 < d && d + a.length === b.length
            }, ra: function (b, a) {
                b = b.replace(/^https?:\/\//,
                    "");
                return 0 === b.indexOf(a)
            }, V: function () {
                for (var b = document.location.hostname, a = 0, d = c.dm.length; a < d; a++) if (n.$(b, c.dm[a])) return c.dm[a].replace(/(:\d+)?[/?#].*/, "");
                return b
            }, ma: function () {
                for (var b = 0, a = c.dm.length; b < a; b++) {
                    var d = c.dm[b];
                    if (-1 < d.indexOf("/") && n.ra(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }
        };
        return h.Ca = n
    })();
    (function () {
        var b = mt.lang, d = mt.B, a = h.Ca,
            n = {pageview: {}, session: {}, autoEventTracking: {}, customEvent: {}, user: {}},
            e = {user: 1, session: 2, pageview: 3, autoEventTracking: 3, customEvent: 3, others: 3},
            l = ["session", "user"], f = "Hm_up_" + c.id, g = {
                init: function () {
                    g.sc()
                }, sc: function () {
                    try {
                        var e = d.parse(decodeURIComponent(a.getData(f)));
                        b.e(e, "Object") && (n.user = e)
                    } catch (r) {
                    }
                }, A: function (b) {
                    var a = {};
                    n[b] !== s && (a = n[b]);
                    b = this.ab();
                    for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d]);
                    return b
                }, ab: function () {
                    for (var b = {}, a, d = l.length -
                        1; 0 <= d; d--) {
                        a = n[l[d]];
                        for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e])
                    }
                    return b
                }, setProperty: function (a, e, f) {
                    var p = n[a];
                    if (b.e(p, "Object") && b.e(e, "Object")) {
                        for (var k in e) if (e.hasOwnProperty(k)) {
                            var m = b.h(String(k));
                            if (f || !/^_/.test(m) && !/_$/.test(m) || /^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(m)) {
                                var y = e[k];
                                if (y == v) delete p[m]; else {
                                    if (b.e(y, "Object") || b.e(y, "Array")) y = d.stringify(y);
                                    y = b.h(String(y));
                                    g.uc(a, m, y) && (p[m] = {value: y, scope: g.$a(a)})
                                }
                            }
                        }
                        "user" === a && g.Ma()
                    }
                }, o: function (a) {
                    a !== s && ("userId" ===
                    a && b.e(n.user, "Object") ? (delete n.user.uid_, g.Ma()) : "user" === a && b.e(n.user, "Object") ? (a = n.user.uid_, n.user = a === s ? {} : {uid_: a}, g.Ma()) : n[a] !== s && (n[a] = {}))
                }, Ma: function () {
                    try {
                        a.setData(f, encodeURIComponent(d.stringify(n.user)), c.age)
                    } catch (b) {
                    }
                }, uc: function (b, a, d) {
                    var e = u, k = n[b];
                    if (256 < encodeURIComponent(String(a)).length || 256 < encodeURIComponent(String(d)).length) e = x; else {
                        var m = k[a];
                        k[a] = {value: d, scope: g.$a(b)};
                        b = g.L(g.A(b));
                        2048 < encodeURIComponent(b).length && (m !== s ? k[a] = m : delete k[a], e = x)
                    }
                    return e
                },
                L: function (b) {
                    var a = [], d, e;
                    for (e in b) b.hasOwnProperty(e) && (d = [e, b[e].value], (1 === b[e].scope || 2 === b[e].scope) && d.push(b[e].scope), a.push(d.join("*")));
                    return a.join("!")
                }, $a: function (b) {
                    b = e[b];
                    return b !== s ? b : e.others
                }
            };
        return h.O = g
    })();
    (function () {
        var b = mt.f, d = mt.lang, a = h.w, n = h.S, e = h.O, l = e.L;
        if (d.isArray(c.cptrk) && 0 < c.cptrk.length) {
            var f = {
                jb: {}, wa: {}, init: function () {
                    for (var b, a = n.H(c.cptrk) || [], e = 0; e < a.length; e++) if (b = a[e], b.a !== s && d.e(b.a, "Object")) {
                        b = b.a;
                        for (var l in b) b.hasOwnProperty(l) && (f.wa[l] = String(b[l]))
                    }
                }, ib: function () {
                    var a, d, e;
                    for (e in f.wa) if (f.wa.hasOwnProperty(e) && f.jb[e] === s && (a = f.wa[e], a = b.Ga(a))) d = d === s ? {} : d, d[e] = b.W(a, x), f.jb[e] = u;
                    return d
                }, Ja: function () {
                    var b = f.ib();
                    b && f.Cc(b)
                }, rc: function () {
                    "MutationObserver" in
                    window && document.body ? (new MutationObserver(f.Ja)).observe(document.body, {
                        childList: u,
                        subtree: u
                    }) : window.setInterval(f.Ja, 15E3)
                }, Cc: function (b) {
                    if (d.e(b, "Object")) {
                        e.setProperty("pageview", b);
                        b = h.c.b.p;
                        var a = h.c.b.ep;
                        h.c.b.et = 9;
                        h.c.b.ep = "";
                        h.c.b.p = l(e.A("pageview"));
                        h.c.i();
                        h.c.b.p = b;
                        h.c.b.ep = a;
                        e.o("pageview")
                    }
                }
            };
            f.init();
            a.d("pv-b", function () {
                var b = f.ib();
                b && e.setProperty("pageview", b)
            });
            f.rc();
            b.mb(f.Ja)
        }
    })();
    (function () {
        var b = mt.lang, d = mt.f, a = h.S, n = {
            T: function (b, l) {
                return function (f) {
                    var g = f.target || f.srcElement;
                    if (g) {
                        var q = a.H(l) || [], r = g.getAttribute(b.ia);
                        f = f.clientX + ":" + f.clientY;
                        if (r && r === f) g.removeAttribute(b.ia); else if (0 < q.length && (g = d.ac(g)) && g.length) if (q = g.length, r = g[g.length - 1], 1E4 > q * r.split(">").length) for (r = 0; r < q; r++) n.rb(b, g[r]); else n.rb(b, r)
                    }
                }
            }, rb: function (a, d) {
                for (var f = {}, g = String(d).split(">").length, q = 0; q < g; q++) f[d] = "", d = d.substring(0, d.lastIndexOf(">"));
                a && (b.e(a, "Object") && a.Ba) &&
                a.Ba(f)
            }, nb: function (b, a) {
                return function (d) {
                    (d.target || d.srcElement).setAttribute(b.ia, d.clientX + ":" + d.clientY);
                    b && b.s && (a ? b.s(a) : b.s("#" + encodeURIComponent(this.id), d.type))
                }
            }
        };
        return h.la = n
    })();
    (function () {
        var b = mt.f, d = mt.event, a = h.S, n = h.la, e = {
            ia: "HM_fix", Aa: function () {
                d.d(document, "click", n.T(e, c.etrk));
                for (var l = a.H(c.etrk) || [], f = 0; f < l.length; f++) {
                    var g = l[f];
                    -1 === g.indexOf(">") && (0 === g.indexOf("#") && (g = g.substring(1)), (g = b.Fa(g)) && d.d(g, "click", n.nb(e)))
                }
            }, Ba: function (b) {
                for (var d = a.H(c.etrk) || [], g = 0; g < d.length; g++) {
                    var q = d[g];
                    b.hasOwnProperty(q) && e.s(q)
                }
            }, s: function (b, a) {
                h.c.b.et = 1;
                h.c.b.ep = "{id:" + b + ",eventType:" + (a || "click") + "}";
                h.c.i()
            }
        };
        h.w.d("pv-b", e.Aa);
        return e
    })();
    (function () {
        var b = mt.f, d = mt.event, a = mt.lang, n = h.z, e = h.S, l = h.la, f = h.O, g = f.L, q = {
            ia: "HM_ce", Aa: function () {
                if (c.cetrk && 0 < c.cetrk.length) {
                    d.d(document, "click", l.T(q, c.cetrk));
                    for (var a = e.H(c.cetrk) || [], f = 0, p = a.length; f < p; f++) {
                        var k = a[f], m = k.p || "";
                        -1 === m.indexOf(">") && (0 === m.indexOf("#") && (m = m.substring(1)), (m = b.Fa(m)) && d.d(m, "click", l.nb(q, k)))
                    }
                }
            }, Ba: function (b) {
                for (var a = e.H(c.cetrk) || [], d = 0; d < a.length; d++) {
                    var k = a[d], m = q.Vb(k.p, b);
                    m && q.s(k, m)
                }
            }, Vb: function (b, a) {
                b = String(b);
                if (0 < b.indexOf("*")) {
                    var d =
                        RegExp("^" + b.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\*/, "\\d+") + "$"), k;
                    for (k in a) if (a.hasOwnProperty(k) && d.test(k)) return k;
                    return v
                }
                return a.hasOwnProperty(b) ? b : v
            }, s: function (d, e) {
                h.c.b.et = 7;
                var p = d && d.k || "", p = a.h(p), k = {};
                if (d && d.a && a.e(d.a, "Object")) {
                    var m = d.a, y;
                    for (y in m) if (m.hasOwnProperty(y)) {
                        var w = q.bc(m[y] || "", e), w = w ? b.W(w, x) : "";
                        k[y] = w
                    }
                }
                k = q.Qb(k, e || d && d.p);
                k._iden = p;
                f.setProperty("customEvent", k);
                h.c.b.ep = "";
                h.c.b.p = g(f.A("customEvent"));
                h.c.i();
                h.c.b.p = "";
                f.o("customEvent")
            },
            Qb: function (a, d) {
                var e = b.Ga(d), k = n.Sa;
                e && (c.aet && c.aet.length ? (a.ei_ = b.getAttribute(e, k.id) || b.getAttribute(e, "id") || "", a.ec_ = b.getAttribute(e, k.ka) || b.getAttribute(e, "class") || "", a.ex_ = b.getAttribute(e, k.ha) || b.na(e), a.en_ = b.getAttribute(e, k.content) || b.W(e, u), a.et_ = b.getAttribute(e, k.va) || b.X(e), a.el_ = b.getAttribute(e, k.link) || b.getAttribute(e, "href") || "") : (a.ex_ = b.getAttribute(e, k.ha) || b.na(e), a.en_ = b.getAttribute(e, k.content) || b.W(e, u)));
                return a
            }, bc: function (a, d) {
                a = String(a);
                d = String(d);
                if (0 <
                    a.indexOf("*")) {
                    var e = /.*\[(\d+)\]$/.exec(d);
                    a = a.replace("*", e ? e[1] : "1")
                }
                return b.Ga(a)
            }
        };
        h.w.d("pv-b", q.Aa);
        return q
    })();
    (function () {
        var b = mt.f, d = mt.lang, a = mt.event, n = mt.g, e = h.z, l = h.S, f = [], g = {
            xb: function () {
                c.ctrk && 0 < c.ctrk.length && (a.d(document, "mouseup", g.Gb()), a.d(window, "unload", function () {
                    g.ta()
                }), setInterval(function () {
                    g.ta()
                }, e.Ib))
            }, Gb: function () {
                return function (b) {
                    if (l.H(c.ctrk, u) && (b = g.Rb(b), "" !== b)) {
                        var a = (e.sa + "//" + e.Oa + "?" + h.c.qb().replace(/ep=[^&]*/, "ep=" + encodeURIComponent(b))).length;
                        a + (e.da + "").length > e.R || (a + encodeURIComponent(f.join("!") + (f.length ? "!" : "")).length + (e.da + "").length > e.R && g.ta(), f.push(b),
                        (f.length >= e.Jb || /\*a\*/.test(b)) && g.ta())
                    }
                }
            }, Rb: function (a) {
                var f = a.target || a.srcElement;
                if (0 === e.Hb) {
                    var l = (f.tagName || "").toLowerCase();
                    if ("embed" == l || "object" == l) return ""
                }
                var p;
                n.oa ? (p = Math.max(document.documentElement.scrollTop, document.body.scrollTop), l = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), l = a.clientX + l, p = a.clientY + p) : (l = a.pageX, p = a.pageY);
                a = g.Zb(a, f, l, p);
                var k = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
                switch (c.align) {
                    case 1:
                        l -=
                            k / 2;
                        break;
                    case 2:
                        l -= k
                }
                k = [];
                k.push(l);
                k.push(p);
                k.push(a.ca);
                k.push(a.ea);
                k.push(a.yc);
                k.push(d.h(a.wc));
                k.push(a.ga);
                k.push(a.Y);
                (f = "a" === (f.tagName || "").toLowerCase() ? f : b.Xa(f)) ? (k.push("a"), k.push(d.h(encodeURIComponent(f.href)))) : k.push("b");
                return k.join("*")
            }, Zb: function (a, e, f, p) {
                a = b.na(e);
                var k = 0, m = 0, y = 0, w = 0;
                if (e && (k = e.offsetWidth || e.clientWidth, m = e.offsetHeight || e.clientHeight, w = b.Ya(e), y = w.left, w = w.top, d.e(e.getBBox, "Function") && (m = e.getBBox(), k = m.width, m = m.height), "html" === (e.tagName || "").toLowerCase())) k =
                    Math.max(k, e.clientWidth), m = Math.max(m, e.clientHeight);
                return {
                    ca: Math.round(100 * ((f - y) / k)),
                    ea: Math.round(100 * ((p - w) / m)),
                    yc: n.orientation,
                    wc: a,
                    ga: k,
                    Y: m
                }
            }, ta: function () {
                0 !== f.length && (h.c.b.et = 2, h.c.b.ep = f.join("!"), h.c.i(), f = [])
            }
        };
        h.w.d("pv-b", g.xb);
        return g
    })();
    (function () {
        var b = mt.lang, d = mt.f, a = mt.event, n = mt.g, e = h.z, l = h.w, f = h.O, g = f.L, q = +new Date, r = [],
            t = {
                T: function () {
                    return function (a) {
                        if (h.c && h.c.Z && c.aet && c.aet.length) {
                            var k = a.target || a.srcElement;
                            if (k) {
                                var m = h.c.Va, f = d.getAttribute(k, e.Ua) != v ? u : x;
                                if (d.getAttribute(k, e.Ta) == v) if (f) t.ya(t.Ha(k, a)); else {
                                    var w = d.X(k);
                                    if (b.J(m, "*") || b.J(m, w)) t.ya(t.Ha(k, a)); else for (; k.parentNode != v;) {
                                        var f = k.parentNode, w = d.X(f), z = "a" === w && b.J(m, "a") ? u : x,
                                            w = "button" === w && b.J(m, "button") ? u : x,
                                            A = d.getAttribute(f, e.Ua) != v ? u : x;
                                        if (d.getAttribute(f, e.Ta) == v && (z || w || A)) {
                                            t.ya(t.Ha(f, a));
                                            break
                                        }
                                        k = k.parentNode
                                    }
                                }
                            }
                        }
                    }
                }, Ha: function (a, k) {
                    var m = {}, f = e.Sa;
                    m.id = d.getAttribute(a, f.id) || d.getAttribute(a, "id") || "";
                    m.ka = d.getAttribute(a, f.ka) || d.getAttribute(a, "class") || "";
                    m.ha = d.getAttribute(a, f.ha) || d.na(a);
                    m.content = d.getAttribute(a, f.content) || d.W(a, u);
                    m.va = d.getAttribute(a, f.va) || d.X(a);
                    m.link = d.getAttribute(a, f.link) || d.getAttribute(a, "href") || "";
                    m.type = k.type || "click";
                    f = b.fb(a.offsetTop) ? a.offsetTop : 0;
                    "click" === k.type ? f = n.oa ? k.clientY +
                        Math.max(document.documentElement.scrollTop, document.body.scrollTop) : k.pageY : "touchend" === k.type && (k.hb && k.hb.changedTouches) && (f = k.hb.changedTouches[0].pageY);
                    m.Hc = f;
                    f = this.Ub(k);
                    m.ca = f.ca || 0;
                    m.ea = f.ea || 0;
                    m.ga = f.ga || 0;
                    m.Y = f.Y || 0;
                    m.Qa = f.Qa || "b";
                    return m
                }, Ub: function (a) {
                    var k = a.target || a.srcElement, e;
                    if (n.oa) {
                        var f = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                        e = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
                        e = a.clientX + e;
                        a = a.clientY + f
                    } else e = a.pageX,
                        a = a.pageY;
                    var w = f = 0, z = 0, A = 0;
                    if (k && (f = k.offsetWidth || k.clientWidth, w = k.offsetHeight || k.clientHeight, A = d.Ya(k), z = A.left, A = A.top, b.e(k.getBBox, "Function") && (w = k.getBBox(), f = w.width, w = w.height), "html" === (k.tagName || "").toLowerCase())) f = Math.max(f, k.clientWidth), w = Math.max(w, k.clientHeight);
                    return {
                        ca: Math.round(100 * ((e - z) / f)),
                        ea: Math.round(100 * ((a - A) / w)),
                        ga: f,
                        Y: w,
                        Qa: ("a" === (k.tagName || "").toLowerCase() ? k : d.Xa(k)) ? "a" : "b"
                    }
                }, ya: function (a) {
                    var k = b.h;
                    a = [+new Date - (h.c.aa !== s ? h.c.aa : q), k(a.id), k(a.ka), k(a.va),
                        k(a.ha), k(a.link), k(a.content), a.type, a.Hc, a.ca, a.ea, a.ga, a.Y, a.Qa].join("*");
                    t.za(a);
                    b.e(this.fa(), "Function") && this.fa()()
                }, za: function (a) {
                    a.length > e.R || (encodeURIComponent(r.join("!") + a).length > e.R && (t.s(r.join("!")), r = []), r.push(a))
                }, s: function (a) {
                    h.c.b.et = 5;
                    h.c.b.ep = a;
                    f.setProperty("autoEventTracking", {view_h_: n.I()}, u);
                    h.c.b.p = g(f.A("autoEventTracking"));
                    h.c.i();
                    h.c.b.p = "";
                    f.setProperty("autoEventTracking", {view_h_: v}, u)
                }, fa: function () {
                    return function () {
                        r && r.length && (t.s(r.join("!")), r = [])
                    }
                }
            };
        b.C(c.aet) && "" !== c.aet && l.d("pv-b", function () {
            a.d(document, "click", t.T());
            "ontouchend" in document && a.d(window, "touchend", t.T());
            a.d(window, "unload", t.fa())
        });
        return t
    })();
    (function () {
        var b = mt.lang, d = mt.event, a = mt.g, n = h.z, e = h.w, l = h.O, f = l.L, g = +new Date, q = [], r = v, t = {
            Ab: function () {
                b.C(c.aet) && "" !== c.aet && setInterval(t.pb, n.Ac)
            }, pb: function () {
                var b = a.I();
                0 < b - h.c.b.vl && (h.c.b.vl = b)
            }
        }, p = {
            Mb: function () {
                return function () {
                    h.c && (h.c.Z && c.aet && c.aet.length) && (window.clearTimeout(r), r = window.setTimeout(function () {
                        p.zb(a.I())
                    }, 150))
                }
            }, zb: function (a) {
                p.za([+new Date - (h.c.aa !== s ? h.c.aa : g), a].join("*"))
            }, za: function (a) {
                if (encodeURIComponent(q.join("!") + a).length > n.R || 3 < q.length) p.s(q.join("!")),
                    q = [];
                q.push(a)
            }, s: function (b) {
                t.pb();
                h.c.b.et = 6;
                h.c.b.vh = a.bb();
                h.c.b.ep = b;
                l.setProperty("autoEventTracking", {view_h_: a.I()}, u);
                h.c.b.p = f(l.A("autoEventTracking"));
                h.c.i();
                h.c.b.p = "";
                l.setProperty("autoEventTracking", {view_h_: v}, u)
            }, fa: function () {
                return function () {
                    q && q.length && (p.s(q.join("!")), q = [])
                }
            }
        };
        b.C(c.aet) && "" !== c.aet && e.d("pv-b", function () {
            d.d(window, "scroll", p.Mb());
            d.d(window, "unload", p.fa());
            t.Ab()
        });
        return p
    })();
    (function () {
        function b() {
            return function () {
                h.c.b.nv = 0;
                h.c.b.st = 4;
                h.c.b.et = 3;
                h.c.b.ep = h.Da.$b() + "," + h.Da.Wb();
                h.c.b.hca = c.hca;
                h.c.i()
            }
        }

        function d() {
            clearTimeout(z);
            var a;
            y && (a = "visible" == document[y]);
            w && (a = !document[w]);
            g = "undefined" == typeof a ? u : a;
            if ((!f || !q) && g && r) m = u, p = +new Date; else if (f && q && (!g || !r)) m = x, k += +new Date - p;
            f = g;
            q = r;
            z = setTimeout(d, 100)
        }

        function a(a) {
            var b = document, k = "";
            if (a in b) k = a; else for (var d = ["webkit", "ms", "moz", "o"], e = 0; e < d.length; e++) {
                var m = d[e] + a.charAt(0).toUpperCase() + a.slice(1);
                if (m in b) {
                    k = m;
                    break
                }
            }
            return k
        }

        function n(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) r = "focus" == a.type || "focusin" == a.type ? u : x, d()
        }

        var e = mt.event, l = h.w, f = u, g = u, q = u, r = u, t = +new Date, p = t, k = 0, m = u,
            y = a("visibilityState"), w = a("hidden"), z;
        d();
        (function () {
            var a = y.replace(/[vV]isibilityState/, "visibilitychange");
            e.d(document, a, d);
            e.d(window, "pageshow", d);
            e.d(window, "pagehide", d);
            "object" == typeof document.onfocusin ? (e.d(document, "focusin", n), e.d(document, "focusout", n)) : (e.d(window,
                "focus", n), e.d(window, "blur", n))
        })();
        h.Da = {
            $b: function () {
                return +new Date - t
            }, Wb: function () {
                return m ? +new Date - p + k : k
            }
        };
        l.d("pv-b", function () {
            e.d(window, "unload", b())
        });
        l.d("duration-send", b());
        l.d("duration-done", function () {
            p = t = +new Date;
            k = 0
        });
        return h.Da
    })();
    (function () {
        var b = mt.lang, d = h.z, a = h.load, n = {
            qc: function (e) {
                if ((window._dxt === s || b.e(window._dxt, "Array")) && "undefined" !== typeof h.c) {
                    var l = h.c.V();
                    a([d.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(l)].join(""), e)
                }
            }, Gc: function (a) {
                if (b.e(a, "String") || b.e(a, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", a])
            }
        };
        return h.Kb = n
    })();
    (function () {
        function b(a, b, d, e) {
            if (!(a === s || b === s || e === s)) {
                if ("" === a) return [b, d, e].join("*");
                a = String(a).split("!");
                for (var f, A = x, g = 0; g < a.length; g++) if (f = a[g].split("*"), String(b) === f[0]) {
                    f[1] = d;
                    f[2] = e;
                    a[g] = f.join("*");
                    A = u;
                    break
                }
                A || a.push([b, d, e].join("*"));
                return a.join("!")
            }
        }

        var d = mt.url, a = mt.lang, n = mt.g, e = h.z, l = h.w, f = h.Kb, g = h.load, q = h.Ca, r = h.O, t = r.L, p = {
            ba: [], ua: 0, La: x, F: {Ra: "", page: ""}, init: function () {
                p.l = 0;
                r.init();
                l.d("pv-b", function () {
                    p.Lb();
                    p.Nb()
                });
                l.d("pv-d", function () {
                    p.Ob();
                    p.F.page = ""
                });
                l.d("stag-b", function () {
                    h.c.b.api = p.l || p.ua ? p.l + "_" + p.ua : "";
                    h.c.b.ct = [decodeURIComponent(q.getData("Hm_ct_" + c.id) || ""), p.F.Ra, p.F.page].join("!")
                });
                l.d("stag-d", function () {
                    h.c.b.api = 0;
                    p.l = 0;
                    p.ua = 0
                })
            }, Lb: function () {
                var b = window._hmt || [];
                if (!b || a.e(b, "Array")) window._hmt = {
                    id: c.id, cmd: {}, push: function () {
                        for (var b = window._hmt, k = 0; k < arguments.length; k++) {
                            var d = arguments[k];
                            a.e(d, "Array") && (b.cmd[b.id].push(d), "_setAccount" === d[0] && (1 < d.length && /^[0-9a-f]{31,32}$/.test(d[1])) && (d = d[1], b.id = d, b.cmd[d] = b.cmd[d] ||
                                []))
                        }
                    }
                }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, b)
            }, Nb: function () {
                var a = window._hmt;
                if (a && a.cmd && a.cmd[c.id]) for (var b = a.cmd[c.id], d = /^_track(Event|MobConv|Order)$/, e = 0, f = b.length; e < f; e++) {
                    var g = b[e];
                    d.test(g[0]) ? p.ba.push(g) : p.Na(g)
                }
                a.cmd[c.id] = {push: p.Na}
            }, Ob: function () {
                if (0 < p.ba.length) for (var a = 0, b = p.ba.length; a < b; a++) p.Na(p.ba[a]);
                p.ba = v
            }, Na: function (b) {
                var d = b[0];
                if (p.hasOwnProperty(d) && a.e(p[d], "Function")) p[d](b)
            }, _setAccount: function (a) {
                1 < a.length && /^[0-9a-f]{31,32}$/.test(a[1]) &&
                (p.l |= 1)
            }, _setAutoPageview: function (a) {
                if (1 < a.length && (a = a[1], x === a || u === a)) p.l |= 2, h.c.cb = a
            }, _trackPageview: function (a) {
                1 < a.length && (a[1].charAt && "/" === a[1].charAt(0)) && (p.l |= 4, h.c.b.sn = h.c.Za(), h.c.b.et = 0, h.c.b.ep = "", h.c.b.vl = n.I(), h.c.b.kb = 0, h.c.Ka ? (h.c.b.nv = 0, h.c.b.st = 4) : h.c.Ka = u, p.La || (h.c.b.su = h.c.b.u || document.location.href), h.c.b.u = e.protocol + "//" + document.location.host + a[1], h.c.b.p = t(r.A("pageview")), h.c.i(), h.c.b.p = "", h.c.aa = +new Date, r.o("pageview"))
            }, _trackEvent: function (b) {
                2 < b.length &&
                (p.l |= 8, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 4, h.c.b.ep = a.h(b[1]) + "*" + a.h(b[2]) + (b[3] ? "*" + a.h(b[3]) : "") + (b[4] ? "*" + a.h(b[4]) : ""), h.c.b.p = t(r.ab()), h.c.i(), h.c.b.p = "")
            }, _setCustomVar: function (b) {
                if (!(4 > b.length)) {
                    var d = b[1], e = b[4] || 3;
                    if (0 < d && 6 > d && 0 < e && 4 > e) {
                        p.ua++;
                        for (var f = (h.c.b.cv || "*").split("!"), z = f.length; z < d - 1; z++) f.push("*");
                        f[d - 1] = e + "*" + a.h(b[2]) + "*" + a.h(b[3]);
                        h.c.b.cv = f.join("!");
                        b = h.c.b.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                        "" !== b ? q.setData("Hm_cv_" + c.id, encodeURIComponent(b),
                            c.age) : q.removeData("Hm_cv_" + c.id)
                    }
                }
            }, _setUserTag: function (d) {
                if (!(3 > d.length)) {
                    var e = a.h(d[1]);
                    d = a.h(d[2]);
                    if (e !== s && d !== s) {
                        var f = decodeURIComponent(q.getData("Hm_ct_" + c.id) || ""), f = b(f, e, 1, d);
                        q.setData("Hm_ct_" + c.id, encodeURIComponent(f), c.age)
                    }
                }
            }, _setVisitTag: function (d) {
                if (!(3 > d.length)) {
                    var e = a.h(d[1]);
                    d = a.h(d[2]);
                    if (e !== s && d !== s) {
                        var f = p.F.Ra, f = b(f, e, 2, d);
                        p.F.Ra = f
                    }
                }
            }, _setPageTag: function (d) {
                if (!(3 > d.length)) {
                    var e = a.h(d[1]);
                    d = a.h(d[2]);
                    if (e !== s && d !== s) {
                        var f = p.F.page, f = b(f, e, 3, d);
                        p.F.page = f
                    }
                }
            },
            _setReferrerOverride: function (b) {
                1 < b.length && (b = b[1], a.e(b, "String") ? (h.c.b.su = "/" === b.charAt(0) ? e.protocol + "//" + window.location.host + b : b, p.La = u) : p.La = x)
            }, _trackOrder: function (b) {
                var d = b[1];
                if (a.e(d, "Object") && a.C(d.orderId)) {
                    window._hmt = window._hmt || [];
                    b = d.orderId;
                    var e = a.Ea(d.orderTotal, 2);
                    r.setProperty("customEvent", {order_id_: b, order_total_: e}, u);
                    window._hmt.push(["_trackCustomEvent", "order_", {}]);
                    r.o("customEvent");
                    for (var d = d.item || [], f, z, g, l = 0; l < d.length; l++) f = d[l], z = a.Ea(f.Price, 2), g = a.Ea(f.Quantity,
                        0), r.setProperty("customEvent", {
                        order_id_: b,
                        order_total_: e,
                        product_id_: f.skuId || "",
                        product_name_: f.skuName || "",
                        product_category_: f.category || "",
                        product_price_: z,
                        product_quantity_: g,
                        product_amount_: z * g
                    }, u), window._hmt.push(["_trackCustomEvent", "product_", {}]), r.o("customEvent")
                }
            }, _trackMobConv: function (a) {
                if (a = {
                    webim: 1,
                    tel: 2,
                    map: 3,
                    sms: 4,
                    callback: 5,
                    share: 6
                }[a[1]]) p.l |= 32, h.c.b.et = 93, h.c.b.ep = a, h.c.i()
            }, _setDataxId: function (a) {
                a = a[1];
                f.qc();
                f.Gc(a)
            }, _setUserId: function (b) {
                b = b[1];
                if (b !== s && (a.C(b) || a.fb(b))) {
                    var d =
                        r.A("user").uid_;
                    if (!(d && d.value === a.h(String(b)))) {
                        var d = h.c.b.p, e = h.c.b.ep;
                        h.c.b.et = 8;
                        h.c.b.ep = "";
                        h.c.b.p = "uid_*" + a.h(String(b));
                        h.c.i();
                        var f = {};
                        f.uid_ = b;
                        r.setProperty("user", f, u);
                        h.c.b.p = d;
                        h.c.b.ep = e
                    }
                }
            }, _clearUserId: function (a) {
                1 < a.length && u === a[1] && r.o("userId")
            }, _setUserProperty: function (b) {
                b = b[1];
                a.e(b, "Object") && r.setProperty("user", b)
            }, _clearUserProperty: function (a) {
                1 < a.length && u === a[1] && r.o("user")
            }, _setSessionProperty: function (b) {
                b = b[1];
                a.e(b, "Object") && r.setProperty("session", b)
            }, _clearSessionProperty: function (a) {
                1 <
                a.length && u === a[1] && r.o("session")
            }, _setPageviewProperty: function (b) {
                b = b[1];
                a.e(b, "Object") && r.setProperty("pageview", b)
            }, _clearPageviewProperty: function (a) {
                1 < a.length && u === a[1] && r.o("pageview")
            }, _setAutoEventTrackingProperty: function (b) {
                b = b[1];
                a.e(b, "Object") && r.setProperty("autoEventTracking", b)
            }, _clearAutoEventTrackingProperty: function (a) {
                1 < a.length && u === a[1] && r.o("autoEventTracking")
            }, _setAutoTracking: function (a) {
                if (1 < a.length && (a = a[1], x === a || u === a)) h.c.eb = a
            }, _setAutoEventTracking: function (a) {
                if (1 <
                    a.length && (a = a[1], x === a || u === a)) h.c.Z = a
            }, _trackPageDuration: function (a) {
                1 < a.length ? (a = a[1], 2 === String(a).split(",").length && (h.c.b.et = 3, h.c.b.ep = a, h.c.i())) : l.N("duration-send");
                l.N("duration-done")
            }, _require: function (a) {
                1 < a.length && (a = a[1], e.Cb.test(d.P(a)) && g(a))
            }, _providePlugin: function (b) {
                if (1 < b.length) {
                    var d = window._hmt, f = b[1];
                    b = b[2];
                    if (a.J(e.lb, f) && a.e(b, "Function") && (d.plugins = d.plugins || {}, d.K = d.K || {}, d.plugins[f] = b, d.D = d.D || [], b = d.D.slice(), f && b.length && b[0][1] === f)) for (var g = 0, z = b.length; g <
                    z; g++) {
                        var l = b[g][2] || {};
                        if (d.plugins[f] && !d.K[f]) d.K[f] = new d.plugins[f](l), d.D.shift(); else break
                    }
                }
            }, _requirePlugin: function (b) {
                if (1 < b.length) {
                    var d = window._hmt, f = b[1], g = b[2] || {};
                    if (a.J(e.lb, f)) if (d.plugins = d.plugins || {}, d.K = d.K || {}, d.plugins[f] && !d.K[f]) d.K[f] = new d.plugins[f](g); else {
                        d.D = d.D || [];
                        for (var g = 0, z = d.D.length; g < z; g++) if (d.D[g][1] === f) return;
                        d.D.push(b);
                        p._require([v, e.xc + f + ".js"])
                    }
                }
            }, _trackCustomEvent: function (b) {
                if (1 < b.length) {
                    var d = b[1];
                    b = b[2];
                    a.e(b, "Object") || (b = {});
                    b._iden = d;
                    r.setProperty("customEvent",
                        b);
                    h.c.b.et = 7;
                    h.c.b.ep = "";
                    h.c.b.p = t(r.A("customEvent"));
                    h.c.i();
                    h.c.b.p = "";
                    r.o("customEvent")
                }
            }
        };
        p.init();
        h.Db = p;
        return h.Db
    })();
    (function () {
        var b = h.w;
        c.spa !== s && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]), b.d("pv-b", function () {
            "" !== window.location.hash && (h.c.b.u = window.location.href)
        }))
    })();
    (function () {
        function b() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = u, this.b = {}, this.eb = this.cb = u, this.Z = m.Z, this.Va = e.C(c.aet) && 0 < c.aet.length ? c.aet.split(",") : "", this.Ka = x, this.init())
        }

        var d = mt.url, a = mt.tb, n = mt.Pa, e = mt.lang, l = mt.cookie, f = mt.g, g = mt.sessionStorage, q = mt.B,
            r = mt.event, t = h.Ca, p = h.O, k = p.L, m = h.z, y = h.load, w = h.w;
        b.prototype = {
            $: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            }, ra: function (a,
                             b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, pa: function (a) {
                for (var b = 0; b < c.dm.length; b++) if (-1 < c.dm[b].indexOf("/")) {
                    if (this.ra(a, c.dm[b])) return u
                } else {
                    var e = d.P(a);
                    if (e && this.$(e, c.dm[b])) return u
                }
                return x
            }, V: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (this.$(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, ma: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.ra(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/,
                        "$1") + "/"
                }
                return "/"
            }, ec: function () {
                if (!document.referrer) return m.M - m.Q > c.vdur ? 1 : 4;
                var a = x;
                this.pa(document.referrer) && this.pa(document.location.href) ? a = u : (a = d.P(document.referrer), a = this.$(a || "", document.location.hostname));
                return a ? m.M - m.Q > c.vdur ? 1 : 4 : 3
            }, Ec: function () {
                var a, b, d, e, f, g;
                m.Q = t.getData("Hm_lpvt_" + c.id) || 0;
                13 === m.Q.length && (m.Q = Math.round(m.Q / 1E3));
                b = this.ec();
                a = 4 !== b ? 1 : 0;
                if (g = t.getData("Hm_lvt_" + c.id)) {
                    e = g.split(",");
                    for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] /
                        1E3));
                    for (; 2592E3 < m.M - e[0];) e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(m.M); 4 < e.length;) e.shift();
                    g = e.join(",");
                    e = e[e.length - 1]
                } else g = m.M, e = "", f = 1;
                this.tc() ? (t.setData("Hm_lvt_" + c.id, g, c.age), t.setData("Hm_lpvt_" + c.id, m.M), d = l.vc(this.V(), this.ma())) : this.Pb();
                if (0 === c.nv && this.pa(document.location.href) && ("" === document.referrer || this.pa(document.referrer))) a = 0, b = 4;
                this.b.nv = a;
                this.b.st = b;
                this.b.cc = d;
                this.b.lt = e;
                this.b.lv = f
            }, tc: function () {
                var a = d.P(document.location.href);
                return !e.J("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),
                    a)
            }, Pb: function () {
                for (var a = document.cookie.split(";"), b = 0; b < a.length; b++) {
                    var d = a[b].split("=");
                    d.length && /Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0])) && t.removeData(d[0]);
                    d.length && /Hm_ck_[0-9]{13}/.test(String(d[0])) && t.removeData(d[0])
                }
            }, qb: function () {
                for (var a = [], b = this.b.et, d = 0, e = m.ub.length; d < e; d++) {
                    var f = m.ub[d], g = this.b[f];
                    "undefined" !== typeof g && "" !== g && ("tt" !== f || "tt" === f && 0 === b) && ("ct" !== f || "ct" === f && 0 === b) && a.push(f + "=" + encodeURIComponent(g))
                }
                return a.join("&")
            }, Fc: function () {
                this.Ec();
                this.b.si = c.id;
                this.b.sn = this.Za();
                this.b.su = document.referrer;
                this.b.ds = f.zc;
                this.b.cl = f.colorDepth + "-bit";
                this.b.ln = String(f.language).toLowerCase();
                this.b.ja = f.javaEnabled ? 1 : 0;
                this.b.ck = f.cookieEnabled ? 1 : 0;
                this.b.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.b.fl = n.gc();
                this.b.v = "1.2.82";
                this.b.cv = decodeURIComponent(t.getData("Hm_cv_" + c.id) || "");
                this.b.tt = document.title || "";
                this.b.vl = f.I();
                var a = document.location.href;
                this.b.cm = d.m(a, m.lc) || "";
                this.b.cp = d.m(a, m.mc) || d.m(a, m.Kc) || "";
                this.b.cw = d.m(a, m.kc) ||
                    d.m(a, m.Mc) || "";
                this.b.ci = d.m(a, m.ic) || d.m(a, m.Jc) || "";
                this.b.cf = d.m(a, m.nc) || d.m(a, m.Lc) || "";
                this.b.cu = d.m(a, m.jc) || d.m(a, m.Ic) || "";
                /https?:/.test(document.location.protocol) && (this.b.u = a)
            }, init: function () {
                try {
                    this.Fc(), 0 === this.b.nv ? this.Dc() : this.Wa(), h.c = this, this.Fb(), this.Eb(), w.N("pv-b"), this.Bc()
                } catch (b) {
                    var d = [];
                    d.push("si=" + c.id);
                    d.push("n=" + encodeURIComponent(b.name));
                    d.push("m=" + encodeURIComponent(b.message));
                    d.push("r=" + encodeURIComponent(document.referrer));
                    a.log(m.sa + "//" + m.Oa + "?" +
                        d.join("&"))
                }
            }, Bc: function () {
                function a() {
                    w.N("pv-d")
                }

                this.cb ? (this.Ka = u, this.b.et = 0, this.b.ep = "", this.b.p = k(p.A("pageview")), this.b.vl = f.I(), this.i(a), this.b.p = "") : a();
                this.aa = +new Date;
                p.o("pageview")
            }, i: function (b) {
                if (this.eb) {
                    var d = this;
                    d.b.rnd = Math.round(Math.random() * m.da);
                    d.b.r = f.orientation;
                    d.b.ww = f.wb;
                    w.N("stag-b");
                    var g = m.sa + "//" + m.Oa + "?" + d.qb();
                    w.N("stag-d");
                    d.Bb(g);
                    a.log(g, function (a) {
                        d.ob(a);
                        e.e(b, "Function") && b.call(d)
                    })
                }
            }, Fb: function () {
                var a = document.location.hash.substring(1), b = RegExp(c.id),
                    e = d.P(document.referrer) === m.vb ? 1 : 0, f = d.m(a, "jn"), g = /^select$/.test(f);
                a && (b.test(a) && e && g) && (this.b.rnd = Math.round(Math.random() * m.da), a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", m.protocol + "//" + c.js + f + ".js?" + this.b.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a, f))
            }, Eb: function () {
                try {
                    if (window.postMessage && window.self !== window.parent) {
                        var a = this;
                        r.d(window, "message", function (b) {
                            if (d.P(b.origin) ===
                                m.vb) {
                                b = b.data || {};
                                var e = b.jn || "", f = /^customevent$|^heatmap$|^pageclick$/.test(e);
                                if (RegExp(c.id).test(b.sd || "") && f) a.b.rnd = Math.round(Math.random() * m.da), y(m.protocol + "//" + c.js + e + ".js?" + a.b.rnd)
                            }
                        });
                        window.parent.postMessage({
                            id: c.id,
                            url: document.location.href,
                            status: "__Messenger__hmLoaded"
                        }, "*")
                    }
                } catch (b) {
                }
            }, Bb: function (a) {
                var b;
                try {
                    b = q.parse(g.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e = this.b.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//, "") + e);
                g.set("Hm_unsent_" +
                    c.id, q.stringify(b))
            }, ob: function (a) {
                var b;
                try {
                    b = q.parse(g.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a = a.replace(/^https?:\/\//, "");
                    for (var e = 0; e < b.length; e++) if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) {
                        b.splice(e, 1);
                        break
                    }
                    b.length ? g.set("Hm_unsent_" + c.id, q.stringify(b)) : this.Wa()
                }
            }, Wa: function () {
                g.remove("Hm_unsent_" + c.id)
            }, Dc: function () {
                var b = this, d;
                try {
                    d = q.parse(g.get("Hm_unsent_" + c.id) || "[]")
                } catch (e) {
                    d = []
                }
                if (d.length) for (var f = function (d) {
                        a.log(m.sa + "//" + d, function (a) {
                            b.ob(a)
                        })
                    },
                                       k = 0; k < d.length; k++) f(d[k])
            }, Za: function () {
                return Math.round(+new Date / 1E3) % 65535
            }
        };
        return new b
    })();
    var B = h.z, C = h.load;
    if (c.apps) {
        var D = [B.protocol, "//ers.baidu.com/app/s.js?"];
        D.push(c.apps);
        C(D.join(""))
    }
    var E = h.z, F = h.load;
    c.pt && F([E.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
    var G = h.load;
    if (c.qiao) {
        for (var H = ["https://goutong.baidu.com/site/"], I = c.id, J = 5381, K = I.length, L = 0; L < K; L++) J = (33 * J + Number(I.charCodeAt(L))) % 4294967296;
        2147483648 < J && (J -= 2147483648);
        H.push(J % 1E3 + "/");
        H.push(c.id + "/b.js");
        H.push("?siteId=" + c.qiao);
        G(H.join(""))
    }
    (function () {
        var b = mt.g, d = mt.lang, a = mt.event, n = mt.B;
        if ("undefined" !== typeof h.c && (c.med || (!b.oa || 7 < b.Yb()) && c.cvcc)) {
            var e, l, f, g, q = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, r = function (a, b) {
                for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === x) return x
            }, t = function (a, b) {
                var g = {};
                g.n = e;
                g.t = "clk";
                g.v = a;
                if (b) {
                    var k = b.getAttribute("href"), l = b.getAttribute("onclick") ? "" + b.getAttribute("onclick") : v,
                        m = b.getAttribute("id") || "";
                    f.test(k) ? (g.sn =
                        "mediate", g.snv = k) : d.e(l, "String") && f.test(l) && (g.sn = "wrap", g.snv = l);
                    g.id = m
                }
                h.c.b.et = 86;
                h.c.b.ep = n.stringify(g);
                h.c.i();
                for (g = +new Date; 400 >= +new Date - g;) ;
            };
            if (c.med) l = "/zoosnet", e = "swt", f = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, g = {
                click: function () {
                    for (var a = [], b = q(document.getElementsByTagName("a")), b = [].concat.apply(b, q(document.getElementsByTagName("area"))), b = [].concat.apply(b, q(document.getElementsByTagName("img"))), d, e, g = 0, k = b.length; g < k; g++) d = b[g], e =
                        d.getAttribute("onclick"), d = d.getAttribute("href"), (f.test(e) || f.test(d)) && a.push(b[g]);
                    return a
                }
            }; else if (c.cvcc) {
                l = "/other-comm";
                e = "other";
                f = c.cvcc.q || s;
                var p = c.cvcc.id || s;
                g = {
                    click: function () {
                        for (var a = [], b = q(document.getElementsByTagName("a")), b = [].concat.apply(b, q(document.getElementsByTagName("area"))), b = [].concat.apply(b, q(document.getElementsByTagName("img"))), d, e, g, k = 0, l = b.length; k < l; k++) d = b[k], f !== s ? (e = d.getAttribute("onclick"), g = d.getAttribute("href"), p ? (d = d.getAttribute("id"), (f.test(e) ||
                            f.test(g) || p.test(d)) && a.push(b[k])) : (f.test(e) || f.test(g)) && a.push(b[k])) : p !== s && (d = d.getAttribute("id"), p.test(d) && a.push(b[k]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof g && "undefined" !== typeof f) {
                var k;
                l += /\/$/.test(l) ? "" : "/";
                var m = function (a, b) {
                    if (k === b) return t(l + a, b), x;
                    if (d.e(b, "Array") || d.e(b, "NodeList")) for (var e = 0, f = b.length; e < f; e++) if (k === b[e]) return t(l + a + "/" + (e + 1), b[e]), x
                };
                a.d(document, "mousedown", function (a) {
                    a = a || window.event;
                    k = a.target || a.srcElement;
                    var b = {};
                    for (r(g, function (a, e) {
                        b[a] = d.e(e,
                            "Function") ? e() : document.getElementById(e)
                    }); k && k !== document && r(b, m) !== x;) k = k.parentNode
                })
            }
        }
    })();
    (function () {
        var b = mt.f, d = mt.lang, a = mt.event, n = mt.B;
        if ("undefined" !== typeof h.c && d.e(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var e = {
                yb: function () {
                    for (var d = c.cvcf.length, f, g = 0; g < d; g++) (f = b.Fa(decodeURIComponent(c.cvcf[g]))) && a.d(f, "click", e.la())
                }, la: function () {
                    return function () {
                        h.c.b.et = 86;
                        var a = {n: "form", t: "clk"};
                        a.id = this.id;
                        h.c.b.ep = n.stringify(a);
                        h.c.i()
                    }
                }
            };
            b.mb(function () {
                e.yb()
            })
        }
    })();
    (function () {
        var b = mt.event, d = mt.B;
        if (c.med && "undefined" !== typeof h.c) {
            var a = {n: "anti", sb: 0, kb: 0, clk: 0}, n = function () {
                h.c.b.et = 86;
                h.c.b.ep = d.stringify(a);
                h.c.i()
            };
            b.d(document, "click", function () {
                a.clk++
            });
            b.d(document, "keyup", function () {
                a.kb = 1
            });
            b.d(window, "scroll", function () {
                a.sb++
            });
            b.d(window, "load", function () {
                setTimeout(n, 5E3)
            })
        }
    })();
    c.oc !== s && "1" === String(c.oc) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "OcpcCbHm"]));
})();
