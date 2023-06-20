//对加密参数token参数还原 时间戳以及鼠标事件参数是否必须待验证
class Base{
    constructor(rc, enc_type, cur_ts0, sms_number) {
    this.request_code = rc;
    this.encrypt_type = enc_type;
    this.cur_timestamp = cur_ts0;
    this.sms = sms_number;
  }
    get_token(rc, enc_type, cur_ts0, sms_number, enc_c){
    var e = "https://verify.meituan.com/v2/ext_api/loginverification/info?id=4";
    var t = "request_code=" + rc + "&mobile=&moduleEnable=true&mobileInterCode=86&listIndex=0";
// var rc = '398730f067d3422c815cfc04e99b4f38'
    var cur_ts = (new Date).getTime();
    var window = {
        location:{
            href:'https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode=349a62b92fc8413eb46c7dd65bf9c6e4&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist'
        }
    }
    var babelHelpers = {
        interopRequireDefault:function(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            }}
    }
    var i = {
        _a:'_token',
         reload: function() {
            var o = function(e) {
            var r = [];
            for(var index=0;index<20;index++){
                r.push({})
            }
            r[11] = function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        function n() {
            var e = window.navigator.userAgent.indexOf("iPhone")
              , t = window.navigator.userAgent.indexOf("TitansX");
            if (0 < e || 0 < t)
                return "";
            var r = document.createElement("canvas")
              , n = null;
            try {
                n = r.getContext("webgl") || r.getContext("experimental-webgl")
            } catch (e) {}
            return n = n || null
        }
        var g = r(12)
          , r = {
            getCanvasFp: function() {
                var e = []
                  , t = document.createElement("canvas");
                t.width = 200,
                t.height = 200,
                t.style.display = "inline";
                var r = t.getContext("2d");
                r.globalCompositeOperation = "multiply",
                r.font = "30px serif",
                r.textAlign = "center",
                r.textBaseline = "middle",
                r.fillText("😜😂😍", 160, 90),
                r.fillStyle = "#dd403b",
                r.beginPath(),
                r.arc(12, 15, 10, 0, 2 * Math.PI, !0),
                r.closePath(),
                r.fill(),
                r.fillStyle = "#d66500",
                r.beginPath(),
                r.arc(50, 30, 30, 0, 2 * Math.PI, !0),
                r.closePath(),
                r.fill();
                var n = r.createLinearGradient(0, 0, 200, 0);
                n.addColorStop(0, "#F4F4F2"),
                n.addColorStop(1, "#F5E905"),
                r.fillStyle = n,
                r.beginPath(),
                r.arc(120, 35, 35, 0, 2 * Math.PI, !0),
                r.closePath(),
                r.fill();
                n = r.createRadialGradient(30, 100, 35, 140, 110, 25);
                n.addColorStop(.1, "#490F44"),
                n.addColorStop(.5, "white"),
                n.addColorStop(1, "#FFFFFF"),
                r.fillStyle = n,
                r.beginPath(),
                r.arc(50, 100, 35, 0, 2 * Math.PI, !0),
                r.fill();
                n = r.createLinearGradient(0, 0, 200, 0);
                return n.addColorStop(0, "#A4A3A3"),
                n.addColorStop(1, "#E10909"),
                r.fillStyle = n,
                r.beginPath(),
                r.arc(145, 145, 50, 0, 2 * Math.PI, !0),
                r.fill(),
                r.shadowColor = "#FFD161",
                r.shadowOffsetX = 3,
                r.shadowOffsetY = 3,
                r.shadowBlur = 0,
                r.fillStyle = "#FFBD00",
                r.font = "16px xxx",
                r.strokeText("EAT BETTER LIVE BETTER", 103, 170),
                r.beginPath(),
                r.moveTo(10, 10),
                r.bezierCurveTo(40, 280, 410, 50, 20, 10),
                r.stroke(),
                r.beginPath(),
                r.moveTo(20, 110),
                r.quadraticCurveTo(180, 120, 170, 10),
                r.stroke(),
                t.toDataURL && e.push(t.toDataURL()),
                e.join("~")
            },
            getWebglVendor: function() {
                var e = n();
                return e ? e.getParameter(e.VENDOR) : ""
            },
            getWebglRenderer: function() {
                var e = n();
                return e ? e.getParameter(e.RENDERER) : ""
            },
            getFonts: function(e) {
                var l = ["monospace", "sans-serif", "serif"]
                  , c = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                c = (c = c.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])).filter(function(e, t) {
                    return c.indexOf(e) === t
                });
                function f() {
                    var e = document.createElement("span");
                    return e.style.position = "absolute",
                    e.style.left = "-9999px",
                    e.style.fontSize = "72px",
                    e.style.fontStyle = "normal",
                    e.style.fontWeight = "normal",
                    e.style.letterSpacing = "normal",
                    e.style.lineBreak = "auto",
                    e.style.lineHeight = "normal",
                    e.style.textTransform = "none",
                    e.style.textAlign = "left",
                    e.style.textDecoration = "none",
                    e.style.textShadow = "none",
                    e.style.whiteSpace = "normal",
                    e.style.wordBreak = "normal",
                    e.style.wordSpacing = "normal",
                    e.textContent = "Eat Better, Live Better",
                    e
                }
                var t = document.getElementsByTagName("body")[0]
                  , o = document.createElement("div")
                  , d = document.createElement("div")
                  , n = {}
                  , i = {}
                  , r = function() {
                    for (var e = [], t = 0, r = l.length; t < r; t++) {
                        var n = f();
                        n.style.fontFamily = l[t],
                        o.appendChild(n),
                        e.push(n)
                    }
                    return e
                }();
                t.appendChild(o);
                for (var a = 0, u = l.length; a < u; a++)
                    n[l[a]] = r[a].offsetWidth,
                    i[l[a]] = r[a].offsetHeight;
                var s = function() {
                    for (var e, t, r = {}, n = 0, o = c.length; n < o; n++) {
                        for (var i = [], a = 0, u = l.length; a < u; a++) {
                            var s = (e = c[n],
                            t = l[a],
                            s = void 0,
                            (s = f()).style.fontFamily = "'" + e + "'," + t,
                            s);
                            d.appendChild(s),
                            i.push(s)
                        }
                        r[c[n]] = i
                    }
                    return r
                }();
                t.appendChild(d);
                for (var h = [], p = 0, y = c.length; p < y; p++)
                    !function(e) {
                        for (var t = !1, r = 0; r < l.length; r++)
                            if (t = e[r].offsetWidth !== n[l[r]] || e[r].offsetHeight !== i[l[r]])
                                return t;
                        return t
                    }(s[c[p]]) || h.push(c[p]);
                t.removeChild(d),
                t.removeChild(o),
                e.fL = 0 < h.length ? (0,
                g.hex_md5)(h.join(",")) : ""
            },
            getWebglRendererUnmasked: function() {
                var e = n();
                if (e) {
                    var t = e.getExtension("WEBGL_debug_renderer_info");
                    if (t)
                        return e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                }
                return ""
            },
            getWebglVendorUnmasked: function() {
                var e = n();
                if (e) {
                    var t = e.getExtension("WEBGL_debug_renderer_info");
                    if (t)
                        return e.getParameter(t.UNMASKED_VENDOR_WEBGL)
                }
                return ""
            }
        };
        t.default = r
    };
            r[12] = function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.hex_md5 = r,
        t.b64_md5 = function(e) {
            return b(u(l(e), e.length * a))
        }
        ,
        t.str_md5 = function(e) {
            return c(u(l(e), e.length * a))
        }
        ,
        t.hex_hmac_md5 = function(e, t) {
            return g(n(e, t))
        }
        ,
        t.b64_hmac_md5 = function(e, t) {
            return b(n(e, t))
        }
        ,
        t.str_hmac_md5 = function(e, t) {
            return c(n(e, t))
        }
        ;
        var o = 0
          , i = ""
          , a = 8;
        function r(e) {
            return g(u(l(e), e.length * a))
        }
        function u(e, t) {
            e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var r = 1732584193, n = -271733879, o = -1732584194, i = 271733878, a = 0; a < e.length; a += 16) {
                var u = r
                  , s = n
                  , l = o
                  , c = i
                  , r = f(r, n, o, i, e[a + 0], 7, -680876936)
                  , i = f(i, r, n, o, e[a + 1], 12, -389564586)
                  , o = f(o, i, r, n, e[a + 2], 17, 606105819)
                  , n = f(n, o, i, r, e[a + 3], 22, -1044525330);
                r = f(r, n, o, i, e[a + 4], 7, -176418897),
                i = f(i, r, n, o, e[a + 5], 12, 1200080426),
                o = f(o, i, r, n, e[a + 6], 17, -1473231341),
                n = f(n, o, i, r, e[a + 7], 22, -45705983),
                r = f(r, n, o, i, e[a + 8], 7, 1770035416),
                i = f(i, r, n, o, e[a + 9], 12, -1958414417),
                o = f(o, i, r, n, e[a + 10], 17, -42063),
                n = f(n, o, i, r, e[a + 11], 22, -1990404162),
                r = f(r, n, o, i, e[a + 12], 7, 1804603682),
                i = f(i, r, n, o, e[a + 13], 12, -40341101),
                o = f(o, i, r, n, e[a + 14], 17, -1502002290),
                r = d(r, n = f(n, o, i, r, e[a + 15], 22, 1236535329), o, i, e[a + 1], 5, -165796510),
                i = d(i, r, n, o, e[a + 6], 9, -1069501632),
                o = d(o, i, r, n, e[a + 11], 14, 643717713),
                n = d(n, o, i, r, e[a + 0], 20, -373897302),
                r = d(r, n, o, i, e[a + 5], 5, -701558691),
                i = d(i, r, n, o, e[a + 10], 9, 38016083),
                o = d(o, i, r, n, e[a + 15], 14, -660478335),
                n = d(n, o, i, r, e[a + 4], 20, -405537848),
                r = d(r, n, o, i, e[a + 9], 5, 568446438),
                i = d(i, r, n, o, e[a + 14], 9, -1019803690),
                o = d(o, i, r, n, e[a + 3], 14, -187363961),
                n = d(n, o, i, r, e[a + 8], 20, 1163531501),
                r = d(r, n, o, i, e[a + 13], 5, -1444681467),
                i = d(i, r, n, o, e[a + 2], 9, -51403784),
                o = d(o, i, r, n, e[a + 7], 14, 1735328473),
                r = h(r, n = d(n, o, i, r, e[a + 12], 20, -1926607734), o, i, e[a + 5], 4, -378558),
                i = h(i, r, n, o, e[a + 8], 11, -2022574463),
                o = h(o, i, r, n, e[a + 11], 16, 1839030562),
                n = h(n, o, i, r, e[a + 14], 23, -35309556),
                r = h(r, n, o, i, e[a + 1], 4, -1530992060),
                i = h(i, r, n, o, e[a + 4], 11, 1272893353),
                o = h(o, i, r, n, e[a + 7], 16, -155497632),
                n = h(n, o, i, r, e[a + 10], 23, -1094730640),
                r = h(r, n, o, i, e[a + 13], 4, 681279174),
                i = h(i, r, n, o, e[a + 0], 11, -358537222),
                o = h(o, i, r, n, e[a + 3], 16, -722521979),
                n = h(n, o, i, r, e[a + 6], 23, 76029189),
                r = h(r, n, o, i, e[a + 9], 4, -640364487),
                i = h(i, r, n, o, e[a + 12], 11, -421815835),
                o = h(o, i, r, n, e[a + 15], 16, 530742520),
                r = p(r, n = h(n, o, i, r, e[a + 2], 23, -995338651), o, i, e[a + 0], 6, -198630844),
                i = p(i, r, n, o, e[a + 7], 10, 1126891415),
                o = p(o, i, r, n, e[a + 14], 15, -1416354905),
                n = p(n, o, i, r, e[a + 5], 21, -57434055),
                r = p(r, n, o, i, e[a + 12], 6, 1700485571),
                i = p(i, r, n, o, e[a + 3], 10, -1894986606),
                o = p(o, i, r, n, e[a + 10], 15, -1051523),
                n = p(n, o, i, r, e[a + 1], 21, -2054922799),
                r = p(r, n, o, i, e[a + 8], 6, 1873313359),
                i = p(i, r, n, o, e[a + 15], 10, -30611744),
                o = p(o, i, r, n, e[a + 6], 15, -1560198380),
                n = p(n, o, i, r, e[a + 13], 21, 1309151649),
                r = p(r, n, o, i, e[a + 4], 6, -145523070),
                i = p(i, r, n, o, e[a + 11], 10, -1120210379),
                o = p(o, i, r, n, e[a + 2], 15, 718787259),
                n = p(n, o, i, r, e[a + 9], 21, -343485551),
                r = y(r, u),
                n = y(n, s),
                o = y(o, l),
                i = y(i, c)
            }
            return Array(r, n, o, i)
        }
        function s(e, t, r, n, o, i) {
            return y((i = y(y(t, e), y(n, i))) << (o = o) | i >>> 32 - o, r)
        }
        function f(e, t, r, n, o, i, a) {
            return s(t & r | ~t & n, e, t, o, i, a)
        }
        function d(e, t, r, n, o, i, a) {
            return s(t & n | r & ~n, e, t, o, i, a)
        }
        function h(e, t, r, n, o, i, a) {
            return s(t ^ r ^ n, e, t, o, i, a)
        }
        function p(e, t, r, n, o, i, a) {
            return s(r ^ (t | ~n), e, t, o, i, a)
        }
        function n(e, t) {
            var r = l(e);
            16 < r.length && (r = u(r, e.length * a));
            for (var n = Array(16), o = Array(16), i = 0; i < 16; i++)
                n[i] = 909522486 ^ r[i],
                o[i] = 1549556828 ^ r[i];
            t = u(n.concat(l(t)), 512 + t.length * a);
            return u(o.concat(t), 640)
        }
        function y(e, t) {
            var r = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
        }
        function l(e) {
            for (var t = Array(), r = (1 << a) - 1, n = 0; n < e.length * a; n += a)
                t[n >> 5] |= (e.charCodeAt(n / a) & r) << n % 32;
            return t
        }
        function c(e) {
            for (var t = "", r = (1 << a) - 1, n = 0; n < 32 * e.length; n += a)
                t += String.fromCharCode(e[n >> 5] >>> n % 32 & r);
            return t
        }
        function g(e) {
            for (var t = o ? "0123456789ABCDEF" : "0123456789abcdef", r = "", n = 0; n < 4 * e.length; n++)
                r += t.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(e[n >> 2] >> n % 4 * 8 & 15);
            return r
        }
        function b(e) {
            for (var t = "", r = 0; r < 4 * e.length; r += 3)
                for (var n = (e[r >> 2] >> r % 4 * 8 & 255) << 16 | (e[r + 1 >> 2] >> (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >> 2] >> (r + 2) % 4 * 8 & 255, o = 0; o < 4; o++)
                    8 * r + 6 * o > 32 * e.length ? t += i : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 6 * (3 - o) & 63);
            return t
        }
    };
            r[13] = function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d = {
            ts: (new Date).getTime(),
            fT: [],
            mT: [],
            kT: [],
            aT: [],
            tT: [],
            dT: [],
            sT: [],
            inputs: [],
            buttons: []
        };
        d.event = function() {
            var e = function(e) {
                e = e || window.event;
                var t = Date.now() - this.ts;
                this.mT.unshift([e.pageX.toFixed(3), e.pageY.toFixed(3), t].join(",")),
                60 <= d.mT.length && 0 === d.fT.length && (d.fT = d.mT.splice(0)),
                60 < this.mT.length && (this.mT = this.mT.slice(0, 60))
            }
            .bind(this)
              , t = function(e) {
                var t = (e = e || window.event).target || e.srcElement
                  , r = "number" == typeof e.which ? e.which : e.keyCode;
                r && (e = Date.now() - this.ts,
                this.kT.unshift([String.fromCharCode(r), t.nodeName, e].join(","))),
                30 < this.kT.length && (this.kT = this.kT.slice(0, 30))
            }
            .bind(this)
              , r = function(e) {
                var t = e.touches[0]
                  , r = Date.now() - this.ts;
                this.tT.unshift([t.pageX.toFixed(3), t.pageY.toFixed(3), e.touches.length, r].join(",")),
                60 < this.tT.length && (this.tT = this.tT.slice(0, 60))
            }
            .bind(this)
              , n = function(e) {
                var t = (e = e || window.event).target || e.srcElement
                  , r = Date.now() - this.ts;
                this.aT.unshift([e.clientX.toFixed(3), e.clientY.toFixed(3), t.nodeName, r].join(",")),
                30 < this.aT.length && (this.aT = this.aT.slice(0, 30))
            }
            .bind(this)
              , o = function(e) {
                e = (e = e || window.event).target || e.srcElement;
                if (e.nodeName && "INPUT" === e.nodeName) {
                    for (var t = (t = e.name || e.id) || (e.id = "rohr_" + parseInt(1e6 * Math.random())), r = this.inputs.length, n = 0; n < r; n++)
                        t === this.inputs[0].inputName && (this.inputs.splice(0, 1),
                        n = 0,
                        --r);
                    this.inputs.unshift({
                        inputName: t,
                        editStartedTimeStamp: Date.now(),
                        keyboardEvent: "0-0-0-0"
                    })
                }
            }
            .bind(this)
              , i = function(e) {
                var t = (e = e || window.event).target || e.srcElement;
                !t.nodeName || "INPUT" !== t.nodeName || (e = this.inputs[0]) && e.keyboardEvent && ((t = e.keyboardEvent.split("-"))[2] = 1,
                e.keyboardEvent = t.join("-"))
            }
            .bind(this)
              , a = function(e) {
                var t, r, n = (e = e || window.event).target || e.srcElement;
                !n.nodeName || "INPUT" !== n.nodeName || (t = this.inputs[0]) && t.keyboardEvent && (r = t.keyboardEvent.split("-"),
                9 === ("number" == typeof e.which ? e.which : e.keyCode) && (r[0] = parseInt(r[0]) + 1),
                r[1] = parseInt(r[1]) + 1,
                n = Date.now(),
                t.lastTime && (e = t.lastTime,
                r[3] = r[3] + "|" + parseInt(n - e, 36)),
                t.lastTime = n,
                t.keyboardEvent = r.join("-"))
            }
            .bind(this)
              , u = function(e) {
                var t = (e = e || window.event).target || e.srcElement;
                !t.nodeName || "INPUT" !== t.nodeName || (e = this.inputs[0]) && e.keyboardEvent && (e.editFinishedTimeStamp = Date.now(),
                0 != (t = e.keyboardEvent.split("-"))[3] && (t[3] = t[3].substr(2)),
                delete e.lastTime,
                e.keyboardEvent = t.join("-"))
            }
            .bind(this)
              , s = function(e) {
                var t = (e = e || window.event).target || e.srcElement;
                if (t.nodeName && "BUTTON" === t.nodeName) {
                    for (var r = (r = t.name || t.id) || (t.id = "rohr_" + parseInt(1e6 * Math.random())), n = this.buttons.length, o = 0; o < n; o++)
                        r === this.buttons[o].buttonName && (this.buttons.splice(o, 1),
                        o = 0,
                        --n);
                    var i = {
                        x: (a = (a = e) || window.event).pageX || a.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft),
                        y: a.pageY || a.clientY + (document.documentElement.scrollTop || document.body.scrollTop)
                    }
                      , a = t.clientWidth
                      , t = t.clientHeight
                      , a = e.offsetX / a * 1e3
                      , t = (t - e.offsetY) / t * 1e3;
                    this.buttons.unshift({
                        buttonName: r,
                        touchPoint: "{" + i.x + "," + i.y + "}",
                        touchPosition: "{" + Math.floor(a) / 10 + "," + Math.floor(t) / 10 + "}",
                        touchTimeStamp: Date.now()
                    })
                }
            }
            .bind(this)
              , l = function(e) {
                var t = (e = e || window.event).target || e.srcElement
                  , r = Date.now() - this.ts;
                this.dT.unshift([e.clientX.toFixed(3), e.clientY.toFixed(3), t.nodeName, r].join(",")),
                60 < this.dT.length && (this.dT = this.dT.slice(0, 60))
            }
            .bind(this)
              , c = function(e) {
                var t = e.touches[0]
                  , r = e.target || e.srcElement
                  , e = Date.now() - this.ts;
                this.sT.unshift([t.pageX.toFixed(3), t.pageY.toFixed(3), r.nodeName, e].join(",")),
                60 < this.sT.length && (this.sT = this.sT.slice(0, 60))
            }
            .bind(this);
            function f(e, t, r, n) {
                t.addEventListener ? t.addEventListener(e, r, n || !1) : t.attachEvent ? t.attachEvent("on" + e, r) : t[e] = r
            }
            f("mousemove", document, e, !0),
            f("keydown", document, t, !0),
            f("click", document, n, !0),
            "ontouchmove"in document && f("touchmove", document, r, !0),
            f("focus", document, o, !0),
            f("mouseout", document, i, !0),
            f("keydown", document, a, !0),
            f("blur", document, u, !0),
            "ontouchstart"in document ? f("touchstart", document, s, !0) : f("click", document, s, !0),
            f("mousedown", document, l, !0),
            f("touchstart", document, c, !0)
        }
        ,
        d.data = function() {
            return d
        }
        ,
        t.default = d
    };
            r[14] = function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = {};
        function u() {
            try {
                var e = new (window.AudioContext || window.webkitAudioContext)
                  , t = e.createAnalyser();
                t.maxDecibels = 100,
                function(n) {
                    n.fftSize = 256;
                    try {
                        var o, i = new window.Float32Array(n.frequencyBinCount);
                        i && (o = 0,
                        function e() {
                            o++;
                            var t = requestAnimationFrame(e);
                            o < 200 && window.cancelAnimationFrame(t),
                            n.getFloatFrequencyData(i);
                            var r = i.join(",");
                            -1 === r.indexOf("-Infinity") && (a.data = r,
                            window.cancelAnimationFrame(t),
                            document.removeEventListener("mousedown", u, !1),
                            document.removeEventListener("touchstart", u, !1))
                        }())
                    } catch (e) {
                        a.data = ""
                    }
                }(t);
                var r = e.createOscillator()
                  , n = e.createGain();
                n.gain.value = .5,
                r.connect(n),
                n.connect(t),
                r.type = "square",
                r.frequency.value = 520,
                n.gain.setValueAtTime(0, e.currentTime),
                n.gain.linearRampToValueAtTime(1, e.currentTime + .01),
                r.start(),
                n.gain.exponentialRampToValueAtTime(.001, e.currentTime + 1),
                r.stop(e.currentTime + 1)
            } catch (e) {
                a.data = ""
            }
        }
        a.start = function() {
            document.addEventListener("touchstart", u, !1),
            document.addEventListener("mousedown", u, !1)
        }
        ,
        a.audioData = function() {
            return a
        }
        ,
        t.default = a
    };
            r[15] = function(e, t) {
        "use strict";
        function i(e, t, r) {
            t = e.createShader(t);
            if (e.shaderSource(t, r),
            e.compileShader(t),
            e.getShaderParameter(t, e.COMPILE_STATUS))
                return t;
            e.deleteShader(t)
        }
        function a(e, t, r) {
            var n = e.createProgram();
            if (e.attachShader(n, t),
            e.attachShader(n, r),
            e.linkProgram(n),
            e.getProgramParameter(n, e.LINK_STATUS))
                return e.detachShader(n, t),
                e.detachShader(n, r),
                e.deleteShader(t),
                e.deleteShader(r),
                n;
            e.deleteProgram(n)
        }
        function u(e, t) {
            for (var r, n = void 0, o = void 0, i = void 0, a = 3 & e.length, u = e.length - a, n = t, s = 3432918353, l = 461845907, i = 0; i < u; )
                o = 255 & e.charCodeAt(i) | (255 & e.charCodeAt(++i)) << 8 | (255 & e.charCodeAt(++i)) << 16 | (255 & e.charCodeAt(++i)) << 24,
                ++i,
                n = 27492 + (65535 & (r = 5 * (65535 & (n = (n ^= o = (65535 & (o = (o = (65535 & o) * s + (((o >>> 16) * s & 65535) << 16) & 4294967295) << 15 | o >>> 17)) * l + (((o >>> 16) * l & 65535) << 16) & 4294967295) << 13 | n >>> 19)) + ((5 * (n >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (r >>> 16) & 65535) << 16);
            switch (o = 0,
            a) {
            case 3:
                o ^= (255 & e.charCodeAt(i + 2)) << 16;
            case 2:
                o ^= (255 & e.charCodeAt(i + 1)) << 8;
            case 1:
                n ^= o = (65535 & (o = (o = (65535 & (o ^= 255 & e.charCodeAt(i))) * s + (((o >>> 16) * s & 65535) << 16) & 4294967295) << 15 | o >>> 17)) * l + (((o >>> 16) * l & 65535) << 16) & 4294967295
            }
            return n ^= e.length,
            n = 2246822507 * (65535 & (n ^= n >>> 16)) + ((2246822507 * (n >>> 16) & 65535) << 16) & 4294967295,
            n = 3266489909 * (65535 & (n ^= n >>> 13)) + ((3266489909 * (n >>> 16) & 65535) << 16) & 4294967295,
            (n ^= n >>> 16) >>> 0
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createShader = i,
        t.createProgram = a,
        t.murmurhash332gc = u,
        t.webglToHash = function() {
            var e = {
                vendor: "",
                renderer: "",
                hash: ""
            };
            try {
                var t = l();
                if (null === t)
                    throw Error("不支持webgl");
                var r = i(t, t.VERTEX_SHADER, "\n                attribute vec4 a_position;\n                uniform mat4 u_matrix;\n                varying vec4 v_color;\n                void main() {\n                    gl_Position = a_position;\n                    v_color = gl_Position * 0.5 + 0.5;\n                }\n            ")
                  , n = i(t, t.FRAGMENT_SHADER, "\n                precision mediump float;\n                varying vec4 v_color;\n                void main() {\n                    gl_FragColor = v_color; // return reddish-purple\n                }\n            ")
                  , o = a(t, r, n)
                  , r = t.getAttribLocation(o, "a_position")
                  , n = t.createBuffer();
                t.bindBuffer(t.ARRAY_BUFFER, n);
                t.bufferData(t.ARRAY_BUFFER, new Float32Array([0, 0, 0, .5, .7, 0]), t.STATIC_DRAW),
                t.viewport(0, 0, t.canvas.width, t.canvas.height),
                t.clearColor(0, 0, 0, 0),
                t.clear(t.COLOR_BUFFER_BIT),
                t.useProgram(o),
                t.enableVertexAttribArray(r),
                t.bindBuffer(t.ARRAY_BUFFER, n);
                n = t.FLOAT;
                t.vertexAttribPointer(r, 2, n, !1, 0, 0);
                n = t.TRIANGLES;
                0;
                t.drawArrays(n, 0, 3);
                n = t.getExtension("WEBGL_debug_renderer_info");
                e.vendor = t.getParameter(n.UNMASKED_VENDOR_WEBGL) || "",
                e.renderer = t.getParameter(n.UNMASKED_RENDERER_WEBGL) || "",
                s && (n = u(s.toDataURL(), 0),
                e.hash = n || ""),
                s = null
            } catch (e) {
                s = null
            }
            return e
        }
        ;
        var s = void 0
          , l = t.getWebglCanvas = function() {
            (s = document.createElement("canvas")).width = 400,
            s.height = 400;
            var e = null;
            try {
                e = s.getContext("webgl") || s.getContext("experimental-webgl")
            } catch (e) {}
            return e = e || null
        }
    };
            // if (n[e])
            //     return n[e].exports;
            //var t = n[e] = {
            var t = {
                exports: {},
                id: e,
                loaded: !1
            };
            return r[e].call(t.exports, t, t.exports, o),
            t.loaded = !0,
            t.exports
        }
            var n = o(13),
            f = babelHelpers.interopRequireDefault(n);
            var n = o(14),
            h = babelHelpers.interopRequireDefault(n),
            d = o(12);
            var n = o(11),
            i = babelHelpers.interopRequireDefault(n);
             var r = o(15);
             var a =(0, r.webglToHash)();
            // e.exports = function() {
            var e, c = enc_c[0];
            // var e, c = {
            //     v: "2.2.2",
            //     ts: (new Date).getTime(),
            //     cts: (new Date).getTime(),
            //     brVD: [Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0)],
            //     brR: [[screen.width, screen.height], [screen.availWidth, screen.availHeight], screen.colorDepth, screen.pixelDepth],
            //     bI: (e = document.referrer,
            //     [window.location.href, e]),
            //     aM: (window._phantom || window.phantom || window.callPhantom ? "ps" : function() {
            //         try {
            //             var e = Function("return this")()
            //               , t = function() {
            //                 var t = (e.constructor + "").match(/ (\w+)|$/)[1];
            //                 if (!t)
            //                     try {
            //                         "[object]" === e && (t = "Window")
            //                     } catch (e) {
            //                         t = "WSH"
            //                     }
            //                 return t
            //             }()
            //               , r = "";
            //             switch (t) {
            //             case "Window":
            //                 break;
            //             case "DedicatedWorkerGlobalScope":
            //                 r = "ww";
            //                 break;
            //             case "WSH":
            //                 r = "wsh";
            //                 break;
            //             case "Object":
            //                 r = "nj";
            //                 break;
            //             default:
            //                 r = "ot"
            //             }
            //             return r
            //         } catch (e) {
            //             return "abnormal"
            //         }
            //     }() || o.default.getwd()) || "",
            //     broP: function() {
            //         var e, t = window.navigator.plugins, r = [], n = void 0;
            //         for (n in t)
            //             t.hasOwnProperty(n) && (e = t[n].name || "",
            //             r.push(e));
            //         return r
            //     }(),
            //     cV: (0,
            //     d.hex_md5)(i.default.getCanvasFp()),
            //     wV: i.default.getWebglVendor(),
            //     wR: i.default.getWebglRenderer(),
            //     wVU: i.default.getWebglVendorUnmasked(),
            //     wRU: i.default.getWebglRendererUnmasked(),
            //     aF: "",
            //     wI: a.hash
            // };
//             var e,c = {
//         "v": "2.2.2",
//         ts: (new Date).getTime(),
//                 cts: (new Date).getTime(),
//         "brVD": [
//             1366,
//             625
//         ],
//         "brR": [
//             [
//                 1366,
//                 768
//             ],
//             [
//                 1366,
//                 728
//             ],
//             24,
//             24
//         ],
//         "bI": [
//             "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode="+rc+"&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
//             "https://account.dianping.com/"
//         ],
//         "aM": "",
//         "broP": [
//             "PDF Viewer",
//             "Chrome PDF Viewer",
//             "Chromium PDF Viewer",
//             "Microsoft Edge PDF Viewer",
//             "WebKit built-in PDF"
//         ],
//     //c890550f51d11894720deb344e0990bf
//         "cV": "c890550f51d11894720deb344e0990bf",
//         "wV": "WebKit",
//         "wR": "WebKit WebGL",
//         "wVU": "Google Inc. (Intel)",
//         "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
//         "aF": "",
//         "wI": a.hash,//1272331532
//         "fL": "a48c29a4460cc3eaa21055966ee72a4f",
//         "mT": [
//             "614.000,277.000,44675",
//             "615.000,277.000,44644",
//             "615.000,279.000,44635",
//             "615.000,280.000,44629",
//             "616.000,281.000,44619",
//             "616.000,282.000,44611",
//             "616.000,283.000,44595",
//             "617.000,283.000,44501",
//             "618.000,283.000,44485",
//             "620.000,282.000,44478",
//             "624.000,280.000,44469",
//             "629.000,277.000,44461",
//             "634.000,273.000,44453",
//             "642.000,268.000,44446",
//             "650.000,263.000,44437",
//             "657.000,259.000,44431",
//             "663.000,256.000,44423",
//             "668.000,253.000,44415",
//             "671.000,251.000,44408",
//             "448.000,238.000,42593",
//             "447.000,238.000,42561",
//             "447.000,239.000,42545",
//             "446.000,239.000,42529",
//             "445.000,239.000,42523",
//             "445.000,240.000,42515",
//             "444.000,240.000,42507",
//             "443.000,241.000,42499"
//         ],
//         "kT": [
//             "{,BODY,2562"
//         ],
//         "aT": [
//             "614.000,277.000,BUTTON,44912"
//         ],
//         "tT": [],
//         "dT": [
//             "614.000,277.000,BUTTON,44806"
//         ],
//         "sT": [],
//         "fT": [
//             "442.000,241.000,42491",
//             "442.000,242.000,42483",
//             "441.000,242.000,42467",
//             "440.000,243.000,42443",
//             "439.000,244.000,42435",
//             "438.000,244.000,42411",
//             "437.000,244.000,42403",
//             "436.000,244.000,42333",
//             "436.000,245.000,42309",
//             "435.000,245.000,42277",
//             "435.000,246.000,42261",
//             "434.000,247.000,42239",
//             "434.000,248.000,42231",
//             "433.000,248.000,42223",
//             "432.000,248.000,42215",
//             "432.000,249.000,42207",
//             "431.000,250.000,42191",
//             "430.000,251.000,42175",
//             "429.000,251.000,42167",
//             "429.000,252.000,42151",
//             "428.000,252.000,42143",
//             "428.000,253.000,42121",
//             "428.000,254.000,42105",
//             "427.000,254.000,42090",
//             "427.000,255.000,42073",
//             "426.000,255.000,42058",
//             "425.000,256.000,42049",
//             "424.000,257.000,42041",
//             "421.000,259.000,42033",
//             "418.000,261.000,42025",
//             "416.000,264.000,42017",
//             "413.000,266.000,42009",
//             "411.000,268.000,42001",
//             "409.000,270.000,41993",
//             "408.000,271.000,41987",
//             "407.000,272.000,41979",
//             "407.000,274.000,41971",
//             "407.000,275.000,41963",
//             "407.000,276.000,41955",
//             "408.000,277.000,41939",
//             "408.000,278.000,41931",
//             "409.000,279.000,41875",
//             "410.000,279.000,41860",
//             "410.000,280.000,41851",
//             "411.000,280.000,41789",
//             "414.000,280.000,41781",
//             "420.000,278.000,41773",
//             "430.000,277.000,41765",
//             "445.000,273.000,41758",
//             "847.000,158.000,19527",
//             "847.000,159.000,19479",
//             "847.000,160.000,19449",
//             "847.000,161.000,19401",
//             "847.000,162.000,19283",
//             "847.000,163.000,19142",
//             "847.000,163.000,19141",
//             "1035.000,353.000,2431",
//             "1230.000,388.000,1030",
//             "1232.000,388.000,959",
//             "1238.000,388.000,800"
//         ],
//         "inputs": [],
//         "buttons": [
//             {
//                 "buttonName": "yodaSmsCodeBtn",
//                 "touchPoint": "{614,277}",
//                 "touchPosition": "{58.2,43.7}",
//                 "touchTimeStamp": cur_ts
//             }
//         ]
//     };
//             var c0 = {
//         "v": "2.2.2",
//         ts: (new Date).getTime(),
//                 cts: (new Date).getTime(),
//         "brVD": [
//             1366,
//             625
//         ],
//         "brR": [
//             [
//                 1366,
//                 768
//             ],
//             [
//                 1366,
//                 728
//             ],
//             24,
//             24
//         ],
//         "bI": [
//             "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode="+rc+"&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
//             "https://account.dianping.com/"
//         ],
//         "aM": "",
//         "broP": [
//             "PDF Viewer",
//             "Chrome PDF Viewer",
//             "Chromium PDF Viewer",
//             "Microsoft Edge PDF Viewer",
//             "WebKit built-in PDF"
//         ],
//     //c890550f51d11894720deb344e0990bf
//         "cV": "c890550f51d11894720deb344e0990bf",
//         "wV": "WebKit",
//         "wR": "WebKit WebGL",
//         "wVU": "Google Inc. (Intel)",
//         "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
//         "aF": "",
//         "wI": a.hash,//1272331532
//         "fL": "a48c29a4460cc3eaa21055966ee72a4f",
//         "mT": [
//             "614.000,277.000,44675",
//             "615.000,277.000,44644",
//             "615.000,279.000,44635",
//             "615.000,280.000,44629",
//             "616.000,281.000,44619",
//             "616.000,282.000,44611",
//             "616.000,283.000,44595",
//             "617.000,283.000,44501",
//             "618.000,283.000,44485",
//             "620.000,282.000,44478",
//             "624.000,280.000,44469",
//             "629.000,277.000,44461",
//             "634.000,273.000,44453",
//             "642.000,268.000,44446",
//             "650.000,263.000,44437",
//             "657.000,259.000,44431",
//             "663.000,256.000,44423",
//             "668.000,253.000,44415",
//             "671.000,251.000,44408",
//             "448.000,238.000,42593",
//             "447.000,238.000,42561",
//             "447.000,239.000,42545",
//             "446.000,239.000,42529",
//             "445.000,239.000,42523",
//             "445.000,240.000,42515",
//             "444.000,240.000,42507",
//             "443.000,241.000,42499"
//         ],
//         "kT": [
//             "{,BODY,2562"
//         ],
//         "aT": [
//             "614.000,277.000,BUTTON,44912"
//         ],
//         "tT": [],
//         "dT": [
//             "614.000,277.000,BUTTON,44806"
//         ],
//         "sT": [],
//         "fT": [
//             "442.000,241.000,42491",
//             "442.000,242.000,42483",
//             "441.000,242.000,42467",
//             "440.000,243.000,42443",
//             "439.000,244.000,42435",
//             "438.000,244.000,42411",
//             "437.000,244.000,42403",
//             "436.000,244.000,42333",
//             "436.000,245.000,42309",
//             "435.000,245.000,42277",
//             "435.000,246.000,42261",
//             "434.000,247.000,42239",
//             "434.000,248.000,42231",
//             "433.000,248.000,42223",
//             "432.000,248.000,42215",
//             "432.000,249.000,42207",
//             "431.000,250.000,42191",
//             "430.000,251.000,42175",
//             "429.000,251.000,42167",
//             "429.000,252.000,42151",
//             "428.000,252.000,42143",
//             "428.000,253.000,42121",
//             "428.000,254.000,42105",
//             "427.000,254.000,42090",
//             "427.000,255.000,42073",
//             "426.000,255.000,42058",
//             "425.000,256.000,42049",
//             "424.000,257.000,42041",
//             "421.000,259.000,42033",
//             "418.000,261.000,42025",
//             "416.000,264.000,42017",
//             "413.000,266.000,42009",
//             "411.000,268.000,42001",
//             "409.000,270.000,41993",
//             "408.000,271.000,41987",
//             "407.000,272.000,41979",
//             "407.000,274.000,41971",
//             "407.000,275.000,41963",
//             "407.000,276.000,41955",
//             "408.000,277.000,41939",
//             "408.000,278.000,41931",
//             "409.000,279.000,41875",
//             "410.000,279.000,41860",
//             "410.000,280.000,41851",
//             "411.000,280.000,41789",
//             "414.000,280.000,41781",
//             "420.000,278.000,41773",
//             "430.000,277.000,41765",
//             "445.000,273.000,41758",
//             "847.000,158.000,19527",
//             "847.000,159.000,19479",
//             "847.000,160.000,19449",
//             "847.000,161.000,19401",
//             "847.000,162.000,19283",
//             "847.000,163.000,19142",
//             "847.000,163.000,19141",
//             "1035.000,353.000,2431",
//             "1230.000,388.000,1030",
//             "1232.000,388.000,959",
//             "1238.000,388.000,800"
//         ],
//         "inputs": [],
//         "buttons": [
//             {
//                 "buttonName": "yodaSmsCodeBtn",
//                 "touchPoint": "{614,277}",
//                 "touchPosition": "{58.2,43.7}",
//                 "touchTimeStamp": cur_ts
//             }
//         ]
//     },
//             c1 = {
//     "v": "2.2.2",
//     "ts": cur_ts,
//     "cts": cur_ts,
//     "brVD": [
//         1366,
//         625
//     ],
//     "brR": [
//         [
//             1366,
//             768
//         ],
//         [
//             1366,
//             728
//         ],
//         24,
//         24
//     ],
//     "bI": [
//         "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode="+rc+"&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
//         "https://account.dianping.com/"
//     ],
//     "aM": "",
//     "broP": [
//         "PDF Viewer",
//         "Chrome PDF Viewer",
//         "Chromium PDF Viewer",
//         "Microsoft Edge PDF Viewer",
//         "WebKit built-in PDF"
//     ],
//     "cV": "c890550f51d11894720deb344e0990bf",
//     "wV": "WebKit",
//     "wR": "WebKit WebGL",
//     "wVU": "Google Inc. (Intel)",
//     "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
//     "aF": "",
//     "wI": 1272331532,
//     "fL": "a48c29a4460cc3eaa21055966ee72a4f",
//     "mT": [
//         "531.000,320.000,38383",
//         "531.000,319.000,38359",
//         "532.000,319.000,38343",
//         "532.000,318.000,38249",
//         "532.000,317.000,38241",
//         "532.000,316.000,38233",
//         "532.000,315.000,38225",
//         "532.000,313.000,38217",
//         "533.000,310.000,38209",
//         "533.000,307.000,38201",
//         "535.000,304.000,38193",
//         "535.000,301.000,38185",
//         "537.000,297.000,38177",
//         "538.000,294.000,38169",
//         "538.000,289.000,38162",
//         "539.000,287.000,38153",
//         "539.000,284.000,38145",
//         "539.000,282.000,38137",
//         "539.000,280.000,38129",
//         "539.000,278.000,38121",
//         "539.000,277.000,38099",
//         "539.000,276.000,34061",
//         "540.000,277.000,34021",
//         "541.000,278.000,34013",
//         "542.000,278.000,33997",
//         "543.000,279.000,33989",
//         "544.000,279.000,33981",
//         "545.000,280.000,33965",
//         "546.000,280.000,33957",
//         "547.000,281.000,33941",
//         "548.000,281.000,33935",
//         "549.000,282.000,33919",
//         "550.000,282.000,33912",
//         "550.000,283.000,33903",
//         "551.000,283.000,33887",
//         "552.000,284.000,33879",
//         "603.000,293.000,33807",
//         "617.000,296.000,33799",
//         "628.000,298.000,33795",
//         "636.000,301.000,33785",
//         "640.000,302.000,33779",
//         "391.000,240.000,22573",
//         "390.000,240.000,22565",
//         "390.000,239.000,22557",
//         "390.000,238.000,22543",
//         "390.000,237.000,22533",
//         "391.000,237.000,22523",
//         "392.000,237.000,22510",
//         "392.000,236.000,22494",
//         "1114.000,156.000,21539",
//         "1113.000,156.000,21523",
//         "1112.000,156.000,21445",
//         "1111.000,156.000,21421",
//         "1110.000,156.000,21405",
//         "1109.000,156.000,21397",
//         "1108.000,156.000,21383",
//         "1107.000,156.000,21368",
//         "1106.000,156.000,21351",
//         "1105.000,156.000,21327",
//         "1105.000,155.000,21319"
//     ],
//     "kT": [
//         "1,INPUT,37415",
//         "6,INPUT,37270",
//         "3,INPUT,36667",
//         "4,INPUT,36134",
//         "1,INPUT,35378",
//         "5,INPUT,35213",
//         "{,INPUT,16700",
//         "{,INPUT,3990"
//     ],
//     "aT": [
//         "531.000,320.000,BUTTON,38689",
//         "539.000,276.000,INPUT,34212",
//         "499.000,274.000,INPUT,18412",
//         "685.000,274.000,INPUT,10735",
//         "784.000,276.000,BUTTON,8891",
//         "637.000,272.000,INPUT,1391"
//     ],
//     "tT": [],
//     "dT": [
//         "531.000,320.000,BUTTON,38620",
//         "539.000,276.000,INPUT,34105",
//         "499.000,274.000,INPUT,18310",
//         "685.000,274.000,INPUT,10642",
//         "784.000,276.000,BUTTON,8820",
//         "637.000,272.000,INPUT,1314"
//     ],
//     "sT": [],
//     "fT": [
//         "794.000,273.000,2843",
//         "792.000,274.000,2827",
//         "790.000,276.000,2819",
//         "789.000,277.000,1743",
//         "789.000,276.000,1726",
//         "790.000,276.000,1710",
//         "790.000,275.000,1693",
//         "792.000,272.000,1677",
//         "794.000,270.000,1660",
//         "795.000,268.000,1560",
//         "794.000,268.000,1543",
//         "793.000,268.000,1526",
//         "789.000,268.000,1510",
//         "776.000,270.000,1493",
//         "761.000,270.000,1476",
//         "740.000,270.000,1460",
//         "709.000,270.000,1443",
//         "670.000,270.000,1426",
//         "643.000,271.000,1410",
//         "637.000,272.000,1260",
//         "637.000,271.000,1243",
//         "639.000,270.000,1226",
//         "640.000,269.000,1210",
//         "640.000,268.000,1193",
//         "641.000,268.000,1171",
//         "641.000,267.000,1059",
//         "642.000,267.000,1029",
//         "642.000,266.000,1010",
//         "643.000,265.000,993",
//         "643.000,264.000,977",
//         "644.000,262.000,960",
//         "645.000,259.000,943",
//         "646.000,254.000,926",
//         "646.000,251.000,910",
//         "646.000,250.000,893",
//         "646.000,249.000,877",
//         "646.000,247.000,860",
//         "646.000,245.000,843",
//         "645.000,244.000,826",
//         "645.000,243.000,810",
//         "644.000,241.000,793",
//         "643.000,240.000,776",
//         "641.000,239.000,760",
//         "639.000,238.000,743",
//         "637.000,237.000,726",
//         "636.000,236.000,710",
//         "634.000,235.000,693",
//         "631.000,235.000,676",
//         "626.000,234.000,660",
//         "618.000,233.000,643",
//         "613.000,232.000,626",
//         "610.000,231.000,610",
//         "609.000,231.000,596",
//         "608.000,230.000,576",
//         "607.000,230.000,560",
//         "606.000,229.000,543",
//         "605.000,229.000,531",
//         "605.000,228.000,523",
//         "604.000,228.000,501",
//         "603.000,227.000,484"
//     ],
//     "inputs": [
//         {
//             "inputName": "yodaVerification",
//             "editStartedTimeStamp": cur_ts - 3493,
//             "keyboardEvent": "0-6-1-1517|9258|6591|7779|1445",
//             "editFinishedTimeStamp": cur_ts
//         }
//     ],
//     "buttons": [
//         {
//             "buttonName": "yodaSubmit",
//             "touchPoint": "{531,320}",
//             "touchPosition": "{57.7,60}",
//             "touchTimeStamp": cur_ts
//         },
//         {
//                 "buttonName": "yodaSmsCodeBtn",
//                 "touchPoint": "{614,277}",
//                 "touchPosition": "{58.2,43.7}",
//                 "touchTimeStamp": cur_ts0
//             }
//     ]
// };
//             if(enc_type == 0){
//                 c = c0;
//             }else if(enc_type == 1){
//                 c = c1;
//             }
            // return window.OscillatorNode && window.Float32Array && h.default.start(),
            // setTimeout(function() {
            //     i.default.getFonts(c)
            // }, 0),
            // c.aM || (o.default.listenwd(function(e) {
            //     e && 0 < e.length && (c.aM = e)
            // }),
            // c.aM || (c.aM = "")),
            Object.defineProperty(c, "_a", {
                get: function() {
                    for (var e = "", t = 0, r = 3; t < 6; ) {
                        var n = "";
                        switch (r) {
                        case 47:
                            n = "e",
                            r = 78;
                            break;
                        case 3:
                            n = "_",
                            r = 9;
                            break;
                        case 78:
                            n = "n";
                            break;
                        case 9:
                            n = "t",
                            r = 36;
                            break;
                        case 36:
                            n = "o",
                            r = 5;
                            break;
                        default:
                            r = 47,
                            n = "k"
                        }
                        t++,
                        e += n
                    }
                    return e
                }
            })
            var res = function() {
                c.cts = Date.now();
    //             {
    //     "ts": cur_ts,
    //     "fT": [
    //         "657.000,242.000,521161",
    //         "659.000,240.000,521153",
    //         "662.000,238.000,521147",
    //         "665.000,235.000,521142",
    //         "678.000,227.000,521119",
    //         "683.000,223.000,521107",
    //         "690.000,220.000,521102",
    //         "697.000,215.000,521091",
    //         "704.000,211.000,521083",
    //         "712.000,206.000,521075",
    //         "718.000,202.000,521067",
    //         "724.000,198.000,521059",
    //         "728.000,195.000,521051",
    //         "732.000,192.000,521046",
    //         "414.000,163.000,519209",
    //         "413.000,163.000,519177",
    //         "412.000,163.000,519161",
    //         "411.000,163.000,519137",
    //         "410.000,163.000,519097",
    //         "409.000,163.000,518941",
    //         "410.000,163.000,518909",
    //         "410.000,164.000,518901",
    //         "411.000,164.000,518877",
    //         "412.000,164.000,518869",
    //         "412.000,165.000,518861",
    //         "413.000,165.000,518853",
    //         "414.000,165.000,518848",
    //         "414.000,165.000,518848",
    //         "414.000,117.000,518215",
    //         "411.000,115.000,518207",
    //         "406.000,112.000,518199",
    //         "401.000,110.000,518193",
    //         "396.000,108.000,518185",
    //         "390.000,105.000,518177",
    //         "384.000,102.000,518169",
    //         "378.000,98.000,518161",
    //         "372.000,95.000,518153",
    //         "368.000,93.000,518145",
    //         "363.000,90.000,518137",
    //         "359.000,87.000,518129",
    //         "356.000,85.000,518121",
    //         "354.000,84.000,518113",
    //         "351.000,83.000,518105",
    //         "349.000,81.000,518097",
    //         "347.000,80.000,518089",
    //         "343.000,79.000,518081",
    //         "338.000,76.000,518075",
    //         "334.000,74.000,518067",
    //         "329.000,72.000,518059",
    //         "322.000,68.000,518051",
    //         "315.000,65.000,518043",
    //         "308.000,61.000,518037",
    //         "301.000,56.000,518027",
    //         "294.000,52.000,518020",
    //         "272.000,38.000,517988",
    //         "267.000,33.000,517972",
    //         "262.000,30.000,517962",
    //         "260.000,27.000,517943",
    //         "259.000,26.000,517942",
    //         "252.000,19.000,517830"
    //     ],
    //     "mT": [
    //         "631.000,265.000,521531",
    //         "632.000,265.000,521493",
    //         "633.000,265.000,521453",
    //         "634.000,264.000,521391",
    //         "635.000,264.000,521383",
    //         "635.000,263.000,521367",
    //         "636.000,262.000,521351",
    //         "637.000,261.000,521343",
    //         "637.000,260.000,521335",
    //         "637.000,259.000,521327",
    //         "638.000,259.000,521319",
    //         "638.000,258.000,521311",
    //         "639.000,258.000,521280",
    //         "639.000,257.000,521273",
    //         "640.000,257.000,521257",
    //         "640.000,256.000,521249",
    //         "641.000,256.000,521241",
    //         "641.000,255.000,521233",
    //         "642.000,254.000,521225",
    //         "643.000,253.000,521217",
    //         "645.000,252.000,521209",
    //         "646.000,251.000,521201",
    //         "648.000,250.000,521193",
    //         "650.000,249.000,521185",
    //         "652.000,247.000,521177",
    //         "654.000,245.000,521169"
    //     ],
    //     "kT": [],
    //     "aT": [
    //         "631.000,265.000,BUTTON,522125"
    //     ],
    //     "tT": [],
    //     "dT": [
    //         "631.000,265.000,BUTTON,521950"
    //     ],
    //     "sT": [],
    //     "inputs": [],
    //     "buttons": [
    //         {
    //             "buttonName": "yodaSmsCodeBtn",
    //             "touchPoint": "{631,265}",
    //             "touchPosition": "{74.7,81.2}",
    //             "touchTimeStamp": cur_ts
    //         }
    //     ]
    // }
                var e = enc_c[1]//f.default.data()
                  , t = e.mT
                  , r = e.kT
                  , n = e.aT
                  , o = e.tT
                  , i = e.dT
                  , a = e.sT
                  , u = e.fT
                  , s = e.inputs
                  , l = e.buttons
                  , e = undefined;//h.default.audioData().data;
                return c.mT = t,
                c.kT = r,
                c.aT = n,
                c.tT = o,
                c.dT = i,
                c.sT = a,
                c.fT = u,
                c.inputs = s,
                c.buttons = l,
                c.aF = void 0 !== e ? (0,
                d.hex_md5)(e) : "",
                function(e) {
                    try {
                        return btoa(encodeURIComponent(JSON.stringify(e)))
                    } catch (e) {
                        throw new Error("btoa 异常")
                    }
                }(c)
            }
            return res();
            
        //     {
        //         reload: c.reload,
        //         _a: c._a
        //     }
        // }
            // f.default.event();
               // return "JTdCJTIydiUyMiUzQSUyMjIuMi4yJTIyJTJDJTIydHMlMjIlM0ExNjgxODg1MzYyOTk5JTJDJTIyY3RzJTIyJTNBMTY4MTg4NzYyMDM4MyUyQyUyMmJyVkQlMjIlM0ElNUIxMzY2JTJDNjI1JTVEJTJDJTIyYnJSJTIyJTNBJTVCJTVCMTM2NiUyQzc2OCU1RCUyQyU1QjEzNjYlMkM3MjglNUQlMkMyNCUyQzI0JTVEJTJDJTIyYkklMjIlM0ElNUIlMjJodHRwcyUzQSUyRiUyRnZlcmlmeS5tZWl0dWFuLmNvbSUyRnYyJTJGd2ViJTJGZ2VuZXJhbF9wYWdlJTNGYWN0aW9uJTNEbG9naW52ZXJpZmljYXRpb24lMjZyZXF1ZXN0Q29kZSUzRDM5ODczMGYwNjdkMzQyMmM4MTVjZmMwNGU5OWI0ZjM4JTI2c3VjY0NhbGxiYWNrVXJsJTNEaHR0cHMlMjUzQSUyNTJGJTI1MkZhY2NvdW50LmRpYW5waW5nLmNvbSUyNTJGcGNsb2dpbiUyNTNGcmVkaXIlMjUzRGh0dHBzJTI1MjUzQSUyNTI1MkYlMjUyNTJGd3d3LmRpYW5waW5nLmNvbSUyNTI1MkZjaXR5bGlzdCUyMiUyQyUyMmh0dHBzJTNBJTJGJTJGYWNjb3VudC5kaWFucGluZy5jb20lMkYlMjIlNUQlMkMlMjJhTSUyMiUzQSUyMiUyMiUyQyUyMmJyb1AlMjIlM0ElNUIlMjJQREYlMjBWaWV3ZXIlMjIlMkMlMjJDaHJvbWUlMjBQREYlMjBWaWV3ZXIlMjIlMkMlMjJDaHJvbWl1bSUyMFBERiUyMFZpZXdlciUyMiUyQyUyMk1pY3Jvc29mdCUyMEVkZ2UlMjBQREYlMjBWaWV3ZXIlMjIlMkMlMjJXZWJLaXQlMjBidWlsdC1pbiUyMFBERiUyMiU1RCUyQyUyMmNWJTIyJTNBJTIyYzg5MDU1MGY1MWQxMTg5NDcyMGRlYjM0NGUwOTkwYmYlMjIlMkMlMjJ3ViUyMiUzQSUyMldlYktpdCUyMiUyQyUyMndSJTIyJTNBJTIyV2ViS2l0JTIwV2ViR0wlMjIlMkMlMjJ3VlUlMjIlM0ElMjJHb29nbGUlMjBJbmMuJTIwKEludGVsKSUyMiUyQyUyMndSVSUyMiUzQSUyMkFOR0xFJTIwKEludGVsJTJDJTIwSW50ZWwoUiklMjBIRCUyMEdyYXBoaWNzJTIwNjIwJTIwRGlyZWN0M0QxMSUyMHZzXzVfMCUyMHBzXzVfMCUyQyUyMEQzRDExKSUyMiUyQyUyMmFGJTIyJTNBJTIyJTIyJTJDJTIyd0klMjIlM0ExMjcyMzMxNTMyJTJDJTIyZkwlMjIlM0ElMjJhNDhjMjlhNDQ2MGNjM2VhYTIxMDU1OTY2ZWU3MmE0ZiUyMiUyQyUyMm1UJTIyJTNBJTVCJTIyNjQ3LjAwMCUyQzI3Ni4wMDAlMkMxNzU0NzElMjIlMkMlMjI2NDguMDAwJTJDMjc3LjAwMCUyQzE3NTQ0OCUyMiUyQyUyMjY0OS4wMDAlMkMyNzcuMDAwJTJDMTc1NDMxJTIyJTJDJTIyNjQ5LjAwMCUyQzI3OC4wMDAlMkMxNzU0MDclMjIlMkMlMjI2NTAuMDAwJTJDMjc4LjAwMCUyQzE3NTM5MSUyMiUyQyUyMjY1MC4wMDAlMkMyNzkuMDAwJTJDMTc1Mzc1JTIyJTJDJTIyNjUxLjAwMCUyQzI3OS4wMDAlMkMxNzUzNjglMjIlMkMlMjI2NTEuMDAwJTJDMjgwLjAwMCUyQzE3NTM2MCUyMiUyQyUyMjY1Mi4wMDAlMkMyODAuMDAwJTJDMTc1MzUzJTIyJTJDJTIyNjUzLjAwMCUyQzI4MS4wMDAlMkMxNzUzMzclMjIlMkMlMjI2NTQuMDAwJTJDMjgyLjAwMCUyQzE3NTMwNSUyMiUyQyUyMjY1NS4wMDAlMkMyODIuMDAwJTJDMTc1Mjk4JTIyJTJDJTIyNjU2LjAwMCUyQzI4My4wMDAlMkMxNzUyODIlMjIlMkMlMjI2NTcuMDAwJTJDMjg1LjAwMCUyQzE3NTI3MyUyMiUyQyUyMjY1OS4wMDAlMkMyODYuMDAwJTJDMTc1MjY1JTIyJTJDJTIyNjYwLjAwMCUyQzI4OC4wMDAlMkMxNzUyNTglMjIlMkMlMjI2NjIuMDAwJTJDMjg5LjAwMCUyQzE3NTI0OSUyMiUyQyUyMjY2NC4wMDAlMkMyOTEuMDAwJTJDMTc1MjQyJTIyJTJDJTIyNjY1LjAwMCUyQzI5My4wMDAlMkMxNzUyMzMlMjIlMkMlMjI2NjYuMDAwJTJDMjk0LjAwMCUyQzE3NTIyNSUyMiUyQyUyMjY2Ny4wMDAlMkMyOTUuMDAwJTJDMTc1MjE5JTIyJTJDJTIyNjY3LjAwMCUyQzI5Ni4wMDAlMkMxNzUyMTQlMjIlMkMlMjI2NjguMDAwJTJDMjk3LjAwMCUyQzE3NTIwMyUyMiUyQyUyMjY2OS4wMDAlMkMyOTguMDAwJTJDMTc1MTg3JTIyJTJDJTIyNjcxLjAwMCUyQzI5OS4wMDAlMkMxNzUxODElMjIlMkMlMjI2NzIuMDAwJTJDMzAxLjAwMCUyQzE3NTE3MSUyMiUyQyUyMjY3NS4wMDAlMkMzMDIuMDAwJTJDMTc1MTY0JTIyJTJDJTIyNjgyLjAwMCUyQzMwNS4wMDAlMkMxNzUxNTUlMjIlMkMlMjI2OTMuMDAwJTJDMzA5LjAwMCUyQzE3NTE0OCUyMiUyQyUyMjcwNi4wMDAlMkMzMTIuMDAwJTJDMTc1MTM5JTIyJTJDJTIyNzI3LjAwMCUyQzMxNy4wMDAlMkMxNzUxMzIlMjIlMkMlMjI3NTAuMDAwJTJDMzIwLjAwMCUyQzE3NTEyMyUyMiUyQyUyMjc3NC4wMDAlMkMzMjAuMDAwJTJDMTc1MTE2JTIyJTJDJTIyNzk2LjAwMCUyQzMyMC4wMDAlMkMxNzUxMDclMjIlMkMlMjI4MTguMDAwJTJDMzIwLjAwMCUyQzE3NTA5OSUyMiUyQyUyMjgzOC4wMDAlMkMzMjAuMDAwJTJDMTc1MDk3JTIyJTJDJTIyODUxLjAwMCUyQzMxOS4wMDAlMkMxNzUwODYlMjIlMkMlMjI4NjMuMDAwJTJDMzE3LjAwMCUyQzE3NTA4MSUyMiUyQyUyMjg3My4wMDAlMkMzMTYuMDAwJTJDMTc1MDY5JTIyJTJDJTIyODc5LjAwMCUyQzMxNS4wMDAlMkMxNzUwNjElMjIlMkMlMjI4ODEuMDAwJTJDMzE1LjAwMCUyQzE3NTA1NSUyMiUyQyUyMjg4MS4wMDAlMkMzMTUuMDAwJTJDMTc1MDU1JTIyJTJDJTIyMjk0LjAwMCUyQzI4MC4wMDAlMkMxNzMyMDElMjIlMkMlMjIyOTQuMDAwJTJDMjgxLjAwMCUyQzE3MzE5NCUyMiUyQyUyMjI5My4wMDAlMkMyODEuMDAwJTJDMTczMTg1JTIyJTJDJTIyMjkyLjAwMCUyQzI4MS4wMDAlMkMxNzMxNzklMjIlMkMlMjIyOTEuMDAwJTJDMjgxLjAwMCUyQzE3MzE3MCUyMiUyQyUyMjI5MC4wMDAlMkMyODEuMDAwJTJDMTczMTU0JTIyJTJDJTIyMjg5LjAwMCUyQzI4MS4wMDAlMkMxNzMwOTElMjIlMkMlMjIyODkuMDAwJTJDMjgyLjAwMCUyQzE3MzA4MyUyMiUyQyUyMjI4OC4wMDAlMkMyODIuMDAwJTJDMTczMDc1JTIyJTJDJTIyMjg3LjAwMCUyQzI4NC4wMDAlMkMxNzMwNTklMjIlMkMlMjIyODcuMDAwJTJDMjg1LjAwMCUyQzE3MzAwNSUyMiUyQyUyMjI4OC4wMDAlMkMyODUuMDAwJTJDMTcyOTgxJTIyJTJDJTIyMjg5LjAwMCUyQzI4Ni4wMDAlMkMxNzI5NzMlMjIlMkMlMjIyOTAuMDAwJTJDMjg2LjAwMCUyQzE3Mjk2NSUyMiUyQyUyMjI5Mi4wMDAlMkMyODcuMDAwJTJDMTcyOTU3JTIyJTJDJTIyMjkzLjAwMCUyQzI4Ny4wMDAlMkMxNzI5NTAlMjIlMkMlMjIyOTMuMDAwJTJDMjg3LjAwMCUyQzE3Mjk1MCUyMiUyQyUyMjU1Ny4wMDAlMkMzNDYuMDAwJTJDMTM1NTElMjIlNUQlMkMlMjJrVCUyMiUzQSU1QiUyMiU3QiUyQ0JPRFklMkMxOTExJTIyJTVEJTJDJTIyYVQlMjIlM0ElNUIlMjI2NDcuMDAwJTJDMjc2LjAwMCUyQ0JVVFRPTiUyQzE3NTYyMCUyMiUyQyUyMjYxMC4wMDAlMkMyNzguMDAwJTJDQlVUVE9OJTJDNzUwOCUyMiU1RCUyQyUyMnRUJTIyJTNBJTVCJTVEJTJDJTIyZFQlMjIlM0ElNUIlMjI2NDcuMDAwJTJDMjc2LjAwMCUyQ0JVVFRPTiUyQzE3NTUzMyUyMiUyQyUyMjYxMC4wMDAlMkMyNzguMDAwJTJDQlVUVE9OJTJDNzQyNCUyMiU1RCUyQyUyMnNUJTIyJTNBJTVCJTVEJTJDJTIyZlQlMjIlM0ElNUIlMjI2NDEuMDAwJTJDMjkwLjAwMCUyQzU4NTUlMjIlMkMlMjI2NDQuMDAwJTJDMjkxLjAwMCUyQzU4NDQlMjIlMkMlMjI2NDcuMDAwJTJDMjkzLjAwMCUyQzU4MzglMjIlMkMlMjI2NTEuMDAwJTJDMjkzLjAwMCUyQzU4MzAlMjIlMkMlMjI2NTQuMDAwJTJDMjk1LjAwMCUyQzU4MjIlMjIlMkMlMjI2NTcuMDAwJTJDMjk2LjAwMCUyQzU4MTQlMjIlMkMlMjI2NjEuMDAwJTJDMjk3LjAwMCUyQzU4MDYlMjIlMkMlMjI2NjMuMDAwJTJDMjk4LjAwMCUyQzU3OTglMjIlMkMlMjI2NjUuMDAwJTJDMjk5LjAwMCUyQzU3OTAlMjIlMkMlMjI2NjcuMDAwJTJDMjk5LjAwMCUyQzU3ODIlMjIlMkMlMjI2NjguMDAwJTJDMjk5LjAwMCUyQzU3NzQlMjIlMkMlMjI2NjkuMDAwJTJDMjk5LjAwMCUyQzU3NjYlMjIlMkMlMjI2NzAuMDAwJTJDMjk5LjAwMCUyQzU3NTglMjIlMkMlMjI2NzEuMDAwJTJDMjk5LjAwMCUyQzU3NTAlMjIlMkMlMjI2NzIuMDAwJTJDMjk5LjAwMCUyQzU3NDIlMjIlMkMlMjI2NzMuMDAwJTJDMjk5LjAwMCUyQzU3MTIlMjIlMkMlMjI2NzQuMDAwJTJDMjk5LjAwMCUyQzU2ODAlMjIlMkMlMjI2NzUuMDAwJTJDMjk5LjAwMCUyQzU2NzIlMjIlMkMlMjI2NzguMDAwJTJDMjk5LjAwMCUyQzU2NjQlMjIlMkMlMjI2ODMuMDAwJTJDMjk5LjAwMCUyQzU2NTYlMjIlMkMlMjI2OTQuMDAwJTJDMjk3LjAwMCUyQzU2NDglMjIlMkMlMjI3MTIuMDAwJTJDMjk1LjAwMCUyQzU2NDAlMjIlMkMlMjI3NDAuMDAwJTJDMjkwLjAwMCUyQzU2MzIlMjIlMkMlMjI3NjkuMDAwJTJDMjg4LjAwMCUyQzU2MjQlMjIlMkMlMjI3OTguMDAwJTJDMjg0LjAwMCUyQzU2MTYlMjIlMkMlMjI4MjcuMDAwJTJDMjc5LjAwMCUyQzU2MDglMjIlMkMlMjI4NTIuMDAwJTJDMjc1LjAwMCUyQzU2MDAlMjIlMkMlMjI4NzguMDAwJTJDMjcxLjAwMCUyQzU1OTIlMjIlMkMlMjI5MDcuMDAwJTJDMjY3LjAwMCUyQzU1ODglMjIlMkMlMjI5MjcuMDAwJTJDMjYyLjAwMCUyQzU1NzglMjIlMkMlMjI5MzYuMDAwJTJDMjU2LjAwMCUyQzU1NzIlMjIlMkMlMjI5MzYuMDAwJTJDMjU2LjAwMCUyQzU1NzIlMjIlMkMlMjIxMDc2LjAwMCUyQzM1MC4wMDAlMkM5MTglMjIlMkMlMjIxMDc4LjAwMCUyQzM1MS4wMDAlMkM5MDElMjIlMkMlMjIxMDgxLjAwMCUyQzM1NC4wMDAlMkM4ODUlMjIlMkMlMjIxMDg3LjAwMCUyQzM1OC4wMDAlMkM4NjglMjIlMkMlMjIxMDk4LjAwMCUyQzM2My4wMDAlMkM4NTElMjIlMkMlMjIxMTA5LjAwMCUyQzM2Ny4wMDAlMkM4MzUlMjIlMkMlMjIxMTE4LjAwMCUyQzM3MS4wMDAlMkM4MTglMjIlMkMlMjIxMTM1LjAwMCUyQzM3Ni4wMDAlMkM4MDElMjIlMkMlMjIxMTQ3LjAwMCUyQzM4MS4wMDAlMkM3ODUlMjIlMkMlMjIxMTU3LjAwMCUyQzM4NS4wMDAlMkM3NjglMjIlMkMlMjIxMTY2LjAwMCUyQzM4OS4wMDAlMkM3NTElMjIlMkMlMjIxMTc1LjAwMCUyQzM5MS4wMDAlMkM3MzUlMjIlMkMlMjIxMTgxLjAwMCUyQzM5My4wMDAlMkM3MTglMjIlMkMlMjIxMTg1LjAwMCUyQzM5NC4wMDAlMkM3MDElMjIlMkMlMjIxMTg3LjAwMCUyQzM5Ny4wMDAlMkM2ODUlMjIlMkMlMjIxMTg4LjAwMCUyQzM5OS4wMDAlMkM2NjglMjIlMkMlMjIxMTg5LjAwMCUyQzQwMi4wMDAlMkM2NTElMjIlMkMlMjIxMTg5LjAwMCUyQzQwNC4wMDAlMkM2MzUlMjIlMkMlMjIxMTg5LjAwMCUyQzQwNi4wMDAlMkM2MTglMjIlMkMlMjIxMTg4LjAwMCUyQzQwNi4wMDAlMkM2MDElMjIlMkMlMjIxMTg3LjAwMCUyQzQwNy4wMDAlMkM1ODUlMjIlMkMlMjIxMTgzLjAwMCUyQzQwOS4wMDAlMkM1NjglMjIlMkMlMjIxMTc4LjAwMCUyQzQxMi4wMDAlMkM1NTElMjIlMkMlMjIxMTcyLjAwMCUyQzQxNS4wMDAlMkM1MzUlMjIlMkMlMjIxMTY4LjAwMCUyQzQxOS4wMDAlMkM1MjQlMjIlMkMlMjIxMTYxLjAwMCUyQzQyNy4wMDAlMkM0MTUlMjIlMkMlMjIxMTQ4LjAwMCUyQzQwNC4wMDAlMkMzMjIlMjIlMkMlMjIxMTQ5LjAwMCUyQzQwMi4wMDAlMkMyNjclMjIlNUQlMkMlMjJpbnB1dHMlMjIlM0ElNUIlN0IlMjJpbnB1dE5hbWUlMjIlM0ElMjJ5b2RhVmVyaWZpY2F0aW9uJTIyJTJDJTIyZWRpdFN0YXJ0ZWRUaW1lU3RhbXAlMjIlM0ExNjgxODg1NTM4NDkyJTJDJTIya2V5Ym9hcmRFdmVudCUyMiUzQSUyMjAtMC0wLTAlMjIlMkMlMjJlZGl0RmluaXNoZWRUaW1lU3RhbXAlMjIlM0ExNjgxODg1NTM4NTU5JTdEJTVEJTJDJTIyYnV0dG9ucyUyMiUzQSU1QiU3QiUyMmJ1dHRvbk5hbWUlMjIlM0ElMjJ5b2RhU21zQ29kZUJ0biUyMiUyQyUyMnRvdWNoUG9pbnQlMjIlM0ElMjIlN0I2NDclMkMyNzYlN0QlMjIlMkMlMjJ0b3VjaFBvc2l0aW9uJTIyJTNBJTIyJTdCOTAuMiUyQzQ2LjglN0QlMjIlMkMlMjJ0b3VjaFRpbWVTdGFtcCUyMiUzQTE2ODE4ODU1Mzg1ODYlN0QlNUQlN0Q=";
            }
    };
    
    // c.reload = function() {
    //             c.cts = Date.now();
    //             var e = f.default.data()
    //               , t = e.mT
    //               , r = e.kT
    //               , n = e.aT
    //               , o = e.tT
    //               , i = e.dT
    //               , a = e.sT
    //               , u = e.fT
    //               , s = e.inputs
    //               , l = e.buttons
    //               , e = h.default.audioData().data;
    //             return c.mT = t,
    //             c.kT = r,
    //             c.aT = n,
    //             c.tT = o,
    //             c.dT = i,
    //             c.sT = a,
    //             c.fT = u,
    //             c.inputs = s,
    //             c.buttons = l,
    //             c.aF = void 0 !== e ? (0,
    //             d.hex_md5)(e) : "",
    //             function(e) {
    //                 try {
    //                     return window.btoa(encodeURIComponent(JSON.stringify(e)))
    //                 } catch (e) {
    //                     throw new Error("btoa 异常")
    //                 }
    //             }(c)
    //         }
    var o = {
        default:{
            
            Kaito: function(e, t) {
                function o(e, t) {
            var r, n = e.length, o = n >> 2;
            0 != (3 & n) && ++o,
            t ? (r = new Array(o + 1))[o] = n : r = new Array(o);
            for (var i = 0; i < n; ++i)
                r[i >> 2] |= e.charCodeAt(i) << ((3 & i) << 3);
            return r
        }
                function n(e) {
            if (/^[\x00-\x7f]*$/.test(e))
                return e;
            for (var t = [], r = e.length, n = 0, o = 0; n < r; ++n,
            ++o) {
                var i, a = e.charCodeAt(n);
                a < 128 ? t[o] = e.charAt(n) : a < 2048 ? t[o] = String.fromCharCode(192 | a >> 6, 128 | 63 & a) : a < 55296 || 57343 < a ? t[o] = String.fromCharCode(224 | a >> 12, 128 | a >> 6 & 63, 128 | 63 & a) : n + 1 < r && (i = e.charCodeAt(n + 1),
                a < 56320 && 56320 <= i && i <= 57343 && (i = 65536 + ((1023 & a) << 10 | 1023 & i),
                t[o] = String.fromCharCode(240 | i >> 18 & 63, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i),
                ++n))
            }
            return t.join("")
        }
                function r(e, t) {
            return null == e || 0 === e.length ? e : (e = n(e),
            t = n(t),
            function(e, t) {
                var r = e.length
                  , n = r << 2;
                if (t) {
                    var o = e[r - 1];
                    if (o < (n -= 4) - 3 || n < o)
                        return null;
                    n = o
                }
                for (var i = 0; i < r; i++)
                    e[i] = String.fromCharCode(255 & e[i], e[i] >>> 8 & 255, e[i] >>> 16 & 255, e[i] >>> 24 & 255);
                o = e.join("");
                if (t)
                    return o.substring(0, n);
                return o
            }(function(e, t) {
                var r, n, o, i, a, u, s = e.length, l = s - 1;
                for (n = e[l],
                o = 0,
                u = 0 | Math.floor(6 + 52 / s); 0 < u; --u) {
                    for (i = (o = o + 2654435769 & 4294967295) >>> 2 & 3,
                    a = 0; a < l; ++a)
                        r = e[a + 1],
                        n = e[a] = e[a] + ((n >>> 5 ^ r << 2) + (r >>> 3 ^ n << 4) ^ (o ^ r) + (t[3 & a ^ i] ^ n)) & 4294967295;
                    r = e[0],
                    n = e[l] = e[l] + ((n >>> 5 ^ r << 2) + (r >>> 3 ^ n << 4) ^ (o ^ r) + (t[3 & l ^ i] ^ n)) & 4294967295
                }
                return e
            }(o(e, !0), function(e) {
                e.length < 4 && (e.length = 4);
                return e
            }(o(t, !1))), !1))
        }
        var s, i = (s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
        function(e) {
            var t, r, n, o = r = 0, i = e.length, a = i % 3, u = (i -= a) / 3 << 2;
            for (0 < a && (u += 4),
            t = new Array(u); o < i; )
                n = e.charCodeAt(o++) << 16 | e.charCodeAt(o++) << 8 | e.charCodeAt(o++),
                t[r++] = s[n >> 18] + s[n >> 12 & 63] + s[n >> 6 & 63] + s[63 & n];
            return 1 == a ? (n = e.charCodeAt(o++),
            t[r++] = s[n >> 2] + s[(3 & n) << 4] + "==") : 2 == a && (n = e.charCodeAt(o++) << 8 | e.charCodeAt(o++),
            t[r++] = s[n >> 10] + s[n >> 4 & 63] + s[(15 & n) << 2] + "="),
            t.join("")
        }
        );
                var a = {
                Kaito: function(e, t) {
                return i(r(e, t))
                }
        };
                return a.Kaito(e,t)
            }
        }
    };
    function u(t, e) {
            
                if (-1 !== t.indexOf(i._a) || 0 < e.length && -1 !== e.indexOf(i._a))
                    return "";
                var r = i.reload();
                r || window.Yoda.CAT.sendLog(t, "jsError", "【url参数处理异常】", "t 为空");
                var n = rc;
                // var n = function(e) {
                //     if (!e)
                //         return "";
                //     var t, r = e.split("&"), n = "";
                //     for (t in r) {
                //         var o = r[t];
                //         -1 === o.indexOf("request_code") && -1 === o.indexOf("requestCode") || (n = o.substr(o.indexOf("=") + 1))
                //     }
                //     return n
                // }(e);
                if (!n)
                    return "";
                n = o.default.Kaito(decodeURIComponent(atob(r)), n);
                //n = o.default.Kaito(decodeURIComponent(window.atob(r)), n);
                return encodeURIComponent(n)
            
        }
    return u(e,t)
}
}
class Base0 extends Base{
    constructor(rc, enc_type, cur_ts0, sms_number,base) {
    super(rc, enc_type, cur_ts0, sms_number);
    this.base_next = base;
  }
    get_res(){
        if(this.encrypt_type == 0){
            return super.get_token(this.request_code,this.encrypt_type,this.cur_timestamp,this.sms, this.get_enc_c());
        }
        else {
            return this.base_next.get_res();
        }
        
    }
    get_enc_c(){
        var ans = [{},{}];
//         var e, c = {
//                 v: "2.2.2",
//                 ts: (new Date).getTime(),
//                 cts: (new Date).getTime(),
//                 brVD: [Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0)],
//                 brR: [[screen.width, screen.height], [screen.availWidth, screen.availHeight], screen.colorDepth, screen.pixelDepth],
//                 bI: (e = document.referrer,
//                 [window.location.href, e]),
//                 aM: (window._phantom || window.phantom || window.callPhantom ? "ps" : function() {
//                     try {
//                         var e = Function("return this")()
//                           , t = function() {
//                             var t = (e.constructor + "").match(/ (\w+)|$/)[1];
//                             if (!t)
//                                 try {
//                                     "[object]" === e && (t = "Window")
//                                 } catch (e) {
//                                     t = "WSH"
//                                 }
//                             return t
//                         }()
//                           , r = "";
//                         switch (t) {
//                         case "Window":
//                             break;
//                         case "DedicatedWorkerGlobalScope":
//                             r = "ww";
//                             break;
//                         case "WSH":
//                             r = "wsh";
//                             break;
//                         case "Object":
//                             r = "nj";
//                             break;
//                         default:
//                             r = "ot"
//                         }
//                         return r
//                     } catch (e) {
//                         return "abnormal"
//                     }
//                 }() || o.default.getwd()) || "",
//                 broP: function() {
//                     var e, t = window.navigator.plugins, r = [], n = void 0;
//                     for (n in t)
//                         t.hasOwnProperty(n) && (e = t[n].name || "",
//                         r.push(e));
//                     return r
//                 }(),
//                 cV: (0,
//                 d.hex_md5)(i.default.getCanvasFp()),
//                 wV: i.default.getWebglVendor(),
//                 wR: i.default.getWebglRenderer(),
//                 wVU: i.default.getWebglVendorUnmasked(),
//                 wRU: i.default.getWebglRendererUnmasked(),
//                 aF: "",
//                 wI: a.hash
//             };
//             var e,c = {
//         "v": "2.2.2",
//         ts: (new Date).getTime(),
//                 cts: (new Date).getTime(),
//         "brVD": [
//             1366,
//             625
//         ],
//         "brR": [
//             [
//                 1366,
//                 768
//             ],
//             [
//                 1366,
//                 728
//             ],
//             24,
//             24
//         ],
//         "bI": [
//             "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode="+rc+"&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
//             "https://account.dianping.com/"
//         ],
//         "aM": "",
//         "broP": [
//             "PDF Viewer",
//             "Chrome PDF Viewer",
//             "Chromium PDF Viewer",
//             "Microsoft Edge PDF Viewer",
//             "WebKit built-in PDF"
//         ],
//     //c890550f51d11894720deb344e0990bf
//         "cV": "c890550f51d11894720deb344e0990bf",
//         "wV": "WebKit",
//         "wR": "WebKit WebGL",
//         "wVU": "Google Inc. (Intel)",
//         "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
//         "aF": "",
//         "wI": a.hash,//1272331532
//         "fL": "a48c29a4460cc3eaa21055966ee72a4f",
//         "mT": [
//             "614.000,277.000,44675",
//             "615.000,277.000,44644",
//             "615.000,279.000,44635",
//             "615.000,280.000,44629",
//             "616.000,281.000,44619",
//             "616.000,282.000,44611",
//             "616.000,283.000,44595",
//             "617.000,283.000,44501",
//             "618.000,283.000,44485",
//             "620.000,282.000,44478",
//             "624.000,280.000,44469",
//             "629.000,277.000,44461",
//             "634.000,273.000,44453",
//             "642.000,268.000,44446",
//             "650.000,263.000,44437",
//             "657.000,259.000,44431",
//             "663.000,256.000,44423",
//             "668.000,253.000,44415",
//             "671.000,251.000,44408",
//             "448.000,238.000,42593",
//             "447.000,238.000,42561",
//             "447.000,239.000,42545",
//             "446.000,239.000,42529",
//             "445.000,239.000,42523",
//             "445.000,240.000,42515",
//             "444.000,240.000,42507",
//             "443.000,241.000,42499"
//         ],
//         "kT": [
//             "{,BODY,2562"
//         ],
//         "aT": [
//             "614.000,277.000,BUTTON,44912"
//         ],
//         "tT": [],
//         "dT": [
//             "614.000,277.000,BUTTON,44806"
//         ],
//         "sT": [],
//         "fT": [
//             "442.000,241.000,42491",
//             "442.000,242.000,42483",
//             "441.000,242.000,42467",
//             "440.000,243.000,42443",
//             "439.000,244.000,42435",
//             "438.000,244.000,42411",
//             "437.000,244.000,42403",
//             "436.000,244.000,42333",
//             "436.000,245.000,42309",
//             "435.000,245.000,42277",
//             "435.000,246.000,42261",
//             "434.000,247.000,42239",
//             "434.000,248.000,42231",
//             "433.000,248.000,42223",
//             "432.000,248.000,42215",
//             "432.000,249.000,42207",
//             "431.000,250.000,42191",
//             "430.000,251.000,42175",
//             "429.000,251.000,42167",
//             "429.000,252.000,42151",
//             "428.000,252.000,42143",
//             "428.000,253.000,42121",
//             "428.000,254.000,42105",
//             "427.000,254.000,42090",
//             "427.000,255.000,42073",
//             "426.000,255.000,42058",
//             "425.000,256.000,42049",
//             "424.000,257.000,42041",
//             "421.000,259.000,42033",
//             "418.000,261.000,42025",
//             "416.000,264.000,42017",
//             "413.000,266.000,42009",
//             "411.000,268.000,42001",
//             "409.000,270.000,41993",
//             "408.000,271.000,41987",
//             "407.000,272.000,41979",
//             "407.000,274.000,41971",
//             "407.000,275.000,41963",
//             "407.000,276.000,41955",
//             "408.000,277.000,41939",
//             "408.000,278.000,41931",
//             "409.000,279.000,41875",
//             "410.000,279.000,41860",
//             "410.000,280.000,41851",
//             "411.000,280.000,41789",
//             "414.000,280.000,41781",
//             "420.000,278.000,41773",
//             "430.000,277.000,41765",
//             "445.000,273.000,41758",
//             "847.000,158.000,19527",
//             "847.000,159.000,19479",
//             "847.000,160.000,19449",
//             "847.000,161.000,19401",
//             "847.000,162.000,19283",
//             "847.000,163.000,19142",
//             "847.000,163.000,19141",
//             "1035.000,353.000,2431",
//             "1230.000,388.000,1030",
//             "1232.000,388.000,959",
//             "1238.000,388.000,800"
//         ],
//         "inputs": [],
//         "buttons": [
//             {
//                 "buttonName": "yodaSmsCodeBtn",
//                 "touchPoint": "{614,277}",
//                 "touchPosition": "{58.2,43.7}",
//                 "touchTimeStamp": cur_ts
//             }
//         ]
//     };
//             var c0 = {
//         "v": "2.2.2",
//         ts: (new Date).getTime(),
//                 cts: (new Date).getTime(),
//         "brVD": [
//             1366,
//             625
//         ],
//         "brR": [
//             [
//                 1366,
//                 768
//             ],
//             [
//                 1366,
//                 728
//             ],
//             24,
//             24
//         ],
//         "bI": [
//             "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode="+rc+"&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
//             "https://account.dianping.com/"
//         ],
//         "aM": "",
//         "broP": [
//             "PDF Viewer",
//             "Chrome PDF Viewer",
//             "Chromium PDF Viewer",
//             "Microsoft Edge PDF Viewer",
//             "WebKit built-in PDF"
//         ],
//     //c890550f51d11894720deb344e0990bf
//         "cV": "c890550f51d11894720deb344e0990bf",
//         "wV": "WebKit",
//         "wR": "WebKit WebGL",
//         "wVU": "Google Inc. (Intel)",
//         "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
//         "aF": "",
//         "wI": a.hash,//1272331532
//         "fL": "a48c29a4460cc3eaa21055966ee72a4f",
//         "mT": [
//             "614.000,277.000,44675",
//             "615.000,277.000,44644",
//             "615.000,279.000,44635",
//             "615.000,280.000,44629",
//             "616.000,281.000,44619",
//             "616.000,282.000,44611",
//             "616.000,283.000,44595",
//             "617.000,283.000,44501",
//             "618.000,283.000,44485",
//             "620.000,282.000,44478",
//             "624.000,280.000,44469",
//             "629.000,277.000,44461",
//             "634.000,273.000,44453",
//             "642.000,268.000,44446",
//             "650.000,263.000,44437",
//             "657.000,259.000,44431",
//             "663.000,256.000,44423",
//             "668.000,253.000,44415",
//             "671.000,251.000,44408",
//             "448.000,238.000,42593",
//             "447.000,238.000,42561",
//             "447.000,239.000,42545",
//             "446.000,239.000,42529",
//             "445.000,239.000,42523",
//             "445.000,240.000,42515",
//             "444.000,240.000,42507",
//             "443.000,241.000,42499"
//         ],
//         "kT": [
//             "{,BODY,2562"
//         ],
//         "aT": [
//             "614.000,277.000,BUTTON,44912"
//         ],
//         "tT": [],
//         "dT": [
//             "614.000,277.000,BUTTON,44806"
//         ],
//         "sT": [],
//         "fT": [
//             "442.000,241.000,42491",
//             "442.000,242.000,42483",
//             "441.000,242.000,42467",
//             "440.000,243.000,42443",
//             "439.000,244.000,42435",
//             "438.000,244.000,42411",
//             "437.000,244.000,42403",
//             "436.000,244.000,42333",
//             "436.000,245.000,42309",
//             "435.000,245.000,42277",
//             "435.000,246.000,42261",
//             "434.000,247.000,42239",
//             "434.000,248.000,42231",
//             "433.000,248.000,42223",
//             "432.000,248.000,42215",
//             "432.000,249.000,42207",
//             "431.000,250.000,42191",
//             "430.000,251.000,42175",
//             "429.000,251.000,42167",
//             "429.000,252.000,42151",
//             "428.000,252.000,42143",
//             "428.000,253.000,42121",
//             "428.000,254.000,42105",
//             "427.000,254.000,42090",
//             "427.000,255.000,42073",
//             "426.000,255.000,42058",
//             "425.000,256.000,42049",
//             "424.000,257.000,42041",
//             "421.000,259.000,42033",
//             "418.000,261.000,42025",
//             "416.000,264.000,42017",
//             "413.000,266.000,42009",
//             "411.000,268.000,42001",
//             "409.000,270.000,41993",
//             "408.000,271.000,41987",
//             "407.000,272.000,41979",
//             "407.000,274.000,41971",
//             "407.000,275.000,41963",
//             "407.000,276.000,41955",
//             "408.000,277.000,41939",
//             "408.000,278.000,41931",
//             "409.000,279.000,41875",
//             "410.000,279.000,41860",
//             "410.000,280.000,41851",
//             "411.000,280.000,41789",
//             "414.000,280.000,41781",
//             "420.000,278.000,41773",
//             "430.000,277.000,41765",
//             "445.000,273.000,41758",
//             "847.000,158.000,19527",
//             "847.000,159.000,19479",
//             "847.000,160.000,19449",
//             "847.000,161.000,19401",
//             "847.000,162.000,19283",
//             "847.000,163.000,19142",
//             "847.000,163.000,19141",
//             "1035.000,353.000,2431",
//             "1230.000,388.000,1030",
//             "1232.000,388.000,959",
//             "1238.000,388.000,800"
//         ],
//         "inputs": [],
//         "buttons": [
//             {
//                 "buttonName": "yodaSmsCodeBtn",
//                 "touchPoint": "{614,277}",
//                 "touchPosition": "{58.2,43.7}",
//                 "touchTimeStamp": cur_ts
//             }
//         ]
//     },
//             c1 = {
//     "v": "2.2.2",
//     "ts": cur_ts,
//     "cts": cur_ts,
//     "brVD": [
//         1366,
//         625
//     ],
//     "brR": [
//         [
//             1366,
//             768
//         ],
//         [
//             1366,
//             728
//         ],
//         24,
//         24
//     ],
//     "bI": [
//         "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode="+rc+"&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
//         "https://account.dianping.com/"
//     ],
//     "aM": "",
//     "broP": [
//         "PDF Viewer",
//         "Chrome PDF Viewer",
//         "Chromium PDF Viewer",
//         "Microsoft Edge PDF Viewer",
//         "WebKit built-in PDF"
//     ],
//     "cV": "c890550f51d11894720deb344e0990bf",
//     "wV": "WebKit",
//     "wR": "WebKit WebGL",
//     "wVU": "Google Inc. (Intel)",
//     "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
//     "aF": "",
//     "wI": 1272331532,
//     "fL": "a48c29a4460cc3eaa21055966ee72a4f",
//     "mT": [
//         "531.000,320.000,38383",
//         "531.000,319.000,38359",
//         "532.000,319.000,38343",
//         "532.000,318.000,38249",
//         "532.000,317.000,38241",
//         "532.000,316.000,38233",
//         "532.000,315.000,38225",
//         "532.000,313.000,38217",
//         "533.000,310.000,38209",
//         "533.000,307.000,38201",
//         "535.000,304.000,38193",
//         "535.000,301.000,38185",
//         "537.000,297.000,38177",
//         "538.000,294.000,38169",
//         "538.000,289.000,38162",
//         "539.000,287.000,38153",
//         "539.000,284.000,38145",
//         "539.000,282.000,38137",
//         "539.000,280.000,38129",
//         "539.000,278.000,38121",
//         "539.000,277.000,38099",
//         "539.000,276.000,34061",
//         "540.000,277.000,34021",
//         "541.000,278.000,34013",
//         "542.000,278.000,33997",
//         "543.000,279.000,33989",
//         "544.000,279.000,33981",
//         "545.000,280.000,33965",
//         "546.000,280.000,33957",
//         "547.000,281.000,33941",
//         "548.000,281.000,33935",
//         "549.000,282.000,33919",
//         "550.000,282.000,33912",
//         "550.000,283.000,33903",
//         "551.000,283.000,33887",
//         "552.000,284.000,33879",
//         "603.000,293.000,33807",
//         "617.000,296.000,33799",
//         "628.000,298.000,33795",
//         "636.000,301.000,33785",
//         "640.000,302.000,33779",
//         "391.000,240.000,22573",
//         "390.000,240.000,22565",
//         "390.000,239.000,22557",
//         "390.000,238.000,22543",
//         "390.000,237.000,22533",
//         "391.000,237.000,22523",
//         "392.000,237.000,22510",
//         "392.000,236.000,22494",
//         "1114.000,156.000,21539",
//         "1113.000,156.000,21523",
//         "1112.000,156.000,21445",
//         "1111.000,156.000,21421",
//         "1110.000,156.000,21405",
//         "1109.000,156.000,21397",
//         "1108.000,156.000,21383",
//         "1107.000,156.000,21368",
//         "1106.000,156.000,21351",
//         "1105.000,156.000,21327",
//         "1105.000,155.000,21319"
//     ],
//     "kT": [
//         "1,INPUT,37415",
//         "6,INPUT,37270",
//         "3,INPUT,36667",
//         "4,INPUT,36134",
//         "1,INPUT,35378",
//         "5,INPUT,35213",
//         "{,INPUT,16700",
//         "{,INPUT,3990"
//     ],
//     "aT": [
//         "531.000,320.000,BUTTON,38689",
//         "539.000,276.000,INPUT,34212",
//         "499.000,274.000,INPUT,18412",
//         "685.000,274.000,INPUT,10735",
//         "784.000,276.000,BUTTON,8891",
//         "637.000,272.000,INPUT,1391"
//     ],
//     "tT": [],
//     "dT": [
//         "531.000,320.000,BUTTON,38620",
//         "539.000,276.000,INPUT,34105",
//         "499.000,274.000,INPUT,18310",
//         "685.000,274.000,INPUT,10642",
//         "784.000,276.000,BUTTON,8820",
//         "637.000,272.000,INPUT,1314"
//     ],
//     "sT": [],
//     "fT": [
//         "794.000,273.000,2843",
//         "792.000,274.000,2827",
//         "790.000,276.000,2819",
//         "789.000,277.000,1743",
//         "789.000,276.000,1726",
//         "790.000,276.000,1710",
//         "790.000,275.000,1693",
//         "792.000,272.000,1677",
//         "794.000,270.000,1660",
//         "795.000,268.000,1560",
//         "794.000,268.000,1543",
//         "793.000,268.000,1526",
//         "789.000,268.000,1510",
//         "776.000,270.000,1493",
//         "761.000,270.000,1476",
//         "740.000,270.000,1460",
//         "709.000,270.000,1443",
//         "670.000,270.000,1426",
//         "643.000,271.000,1410",
//         "637.000,272.000,1260",
//         "637.000,271.000,1243",
//         "639.000,270.000,1226",
//         "640.000,269.000,1210",
//         "640.000,268.000,1193",
//         "641.000,268.000,1171",
//         "641.000,267.000,1059",
//         "642.000,267.000,1029",
//         "642.000,266.000,1010",
//         "643.000,265.000,993",
//         "643.000,264.000,977",
//         "644.000,262.000,960",
//         "645.000,259.000,943",
//         "646.000,254.000,926",
//         "646.000,251.000,910",
//         "646.000,250.000,893",
//         "646.000,249.000,877",
//         "646.000,247.000,860",
//         "646.000,245.000,843",
//         "645.000,244.000,826",
//         "645.000,243.000,810",
//         "644.000,241.000,793",
//         "643.000,240.000,776",
//         "641.000,239.000,760",
//         "639.000,238.000,743",
//         "637.000,237.000,726",
//         "636.000,236.000,710",
//         "634.000,235.000,693",
//         "631.000,235.000,676",
//         "626.000,234.000,660",
//         "618.000,233.000,643",
//         "613.000,232.000,626",
//         "610.000,231.000,610",
//         "609.000,231.000,596",
//         "608.000,230.000,576",
//         "607.000,230.000,560",
//         "606.000,229.000,543",
//         "605.000,229.000,531",
//         "605.000,228.000,523",
//         "604.000,228.000,501",
//         "603.000,227.000,484"
//     ],
//     "inputs": [
//         {
//             "inputName": "yodaVerification",
//             "editStartedTimeStamp": cur_ts - 3493,
//             "keyboardEvent": "0-6-1-1517|9258|6591|7779|1445",
//             "editFinishedTimeStamp": cur_ts
//         }
//     ],
//     "buttons": [
//         {
//             "buttonName": "yodaSubmit",
//             "touchPoint": "{531,320}",
//             "touchPosition": "{57.7,60}",
//             "touchTimeStamp": cur_ts
//         },
//         {
//                 "buttonName": "yodaSmsCodeBtn",
//                 "touchPoint": "{614,277}",
//                 "touchPosition": "{58.2,43.7}",
//                 "touchTimeStamp": cur_ts0
//             }
//     ]
// };
//             if(enc_type == 0){
//                 c = c0;
//             }else if(enc_type == 1){
//                 c = c1;
//             }
        var this_ts =  (new Date).getTime();
        ans[0] = {
        "v": "2.2.2",
        ts: this.cur_timestamp[0],
            cts: this.cur_timestamp[0],
        "brVD": [
            1366,
            625
        ],
        "brR": [
            [
                1366,
                768
            ],
            [
                1366,
                728
            ],
            24,
            24
        ],
        "bI": [
            "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode="+this.request_code+"&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
            "https://account.dianping.com/"
        ],
        "aM": "",
        "broP": [
            "PDF Viewer",
            "Chrome PDF Viewer",
            "Chromium PDF Viewer",
            "Microsoft Edge PDF Viewer",
            "WebKit built-in PDF"
        ],
    //c890550f51d11894720deb344e0990bf
        "cV": "c890550f51d11894720deb344e0990bf",
        "wV": "WebKit",
        "wR": "WebKit WebGL",
        "wVU": "Google Inc. (Intel)",
        "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
        "aF": "",
        "wI": 1272331532,//a.hash
        "fL": "a48c29a4460cc3eaa21055966ee72a4f",
        "mT": [
            "614.000,277.000,44675",
            "615.000,277.000,44644",
            "615.000,279.000,44635",
            "615.000,280.000,44629",
            "616.000,281.000,44619",
            "616.000,282.000,44611",
            "616.000,283.000,44595",
            "617.000,283.000,44501",
            "618.000,283.000,44485",
            "620.000,282.000,44478",
            "624.000,280.000,44469",
            "629.000,277.000,44461",
            "634.000,273.000,44453",
            "642.000,268.000,44446",
            "650.000,263.000,44437",
            "657.000,259.000,44431",
            "663.000,256.000,44423",
            "668.000,253.000,44415",
            "671.000,251.000,44408",
            "448.000,238.000,42593",
            "447.000,238.000,42561",
            "447.000,239.000,42545",
            "446.000,239.000,42529",
            "445.000,239.000,42523",
            "445.000,240.000,42515",
            "444.000,240.000,42507",
            "443.000,241.000,42499"
        ],
        "kT": [
            "{,BODY,2562"
        ],
        "aT": [
            "614.000,277.000,BUTTON,44912"
        ],
        "tT": [],
        "dT": [
            "614.000,277.000,BUTTON,44806"
        ],
        "sT": [],
        "fT": [
            "442.000,241.000,42491",
            "442.000,242.000,42483",
            "441.000,242.000,42467",
            "440.000,243.000,42443",
            "439.000,244.000,42435",
            "438.000,244.000,42411",
            "437.000,244.000,42403",
            "436.000,244.000,42333",
            "436.000,245.000,42309",
            "435.000,245.000,42277",
            "435.000,246.000,42261",
            "434.000,247.000,42239",
            "434.000,248.000,42231",
            "433.000,248.000,42223",
            "432.000,248.000,42215",
            "432.000,249.000,42207",
            "431.000,250.000,42191",
            "430.000,251.000,42175",
            "429.000,251.000,42167",
            "429.000,252.000,42151",
            "428.000,252.000,42143",
            "428.000,253.000,42121",
            "428.000,254.000,42105",
            "427.000,254.000,42090",
            "427.000,255.000,42073",
            "426.000,255.000,42058",
            "425.000,256.000,42049",
            "424.000,257.000,42041",
            "421.000,259.000,42033",
            "418.000,261.000,42025",
            "416.000,264.000,42017",
            "413.000,266.000,42009",
            "411.000,268.000,42001",
            "409.000,270.000,41993",
            "408.000,271.000,41987",
            "407.000,272.000,41979",
            "407.000,274.000,41971",
            "407.000,275.000,41963",
            "407.000,276.000,41955",
            "408.000,277.000,41939",
            "408.000,278.000,41931",
            "409.000,279.000,41875",
            "410.000,279.000,41860",
            "410.000,280.000,41851",
            "411.000,280.000,41789",
            "414.000,280.000,41781",
            "420.000,278.000,41773",
            "430.000,277.000,41765",
            "445.000,273.000,41758",
            "847.000,158.000,19527",
            "847.000,159.000,19479",
            "847.000,160.000,19449",
            "847.000,161.000,19401",
            "847.000,162.000,19283",
            "847.000,163.000,19142",
            "847.000,163.000,19141",
            "1035.000,353.000,2431",
            "1230.000,388.000,1030",
            "1232.000,388.000,959",
            "1238.000,388.000,800"
        ],
        "inputs": [],
        "buttons": [
            {
                "buttonName": "yodaSmsCodeBtn",
                "touchPoint": "{614,277}",
                "touchPosition": "{58.2,43.7}",
                "touchTimeStamp": this.cur_timestamp[1]
            }
        ]
    };
        
        ans[1] = {
        "ts": this.cur_timestamp[0],
        "fT": [
            "657.000,242.000,521161",
            "659.000,240.000,521153",
            "662.000,238.000,521147",
            "665.000,235.000,521142",
            "678.000,227.000,521119",
            "683.000,223.000,521107",
            "690.000,220.000,521102",
            "697.000,215.000,521091",
            "704.000,211.000,521083",
            "712.000,206.000,521075",
            "718.000,202.000,521067",
            "724.000,198.000,521059",
            "728.000,195.000,521051",
            "732.000,192.000,521046",
            "414.000,163.000,519209",
            "413.000,163.000,519177",
            "412.000,163.000,519161",
            "411.000,163.000,519137",
            "410.000,163.000,519097",
            "409.000,163.000,518941",
            "410.000,163.000,518909",
            "410.000,164.000,518901",
            "411.000,164.000,518877",
            "412.000,164.000,518869",
            "412.000,165.000,518861",
            "413.000,165.000,518853",
            "414.000,165.000,518848",
            "414.000,165.000,518848",
            "414.000,117.000,518215",
            "411.000,115.000,518207",
            "406.000,112.000,518199",
            "401.000,110.000,518193",
            "396.000,108.000,518185",
            "390.000,105.000,518177",
            "384.000,102.000,518169",
            "378.000,98.000,518161",
            "372.000,95.000,518153",
            "368.000,93.000,518145",
            "363.000,90.000,518137",
            "359.000,87.000,518129",
            "356.000,85.000,518121",
            "354.000,84.000,518113",
            "351.000,83.000,518105",
            "349.000,81.000,518097",
            "347.000,80.000,518089",
            "343.000,79.000,518081",
            "338.000,76.000,518075",
            "334.000,74.000,518067",
            "329.000,72.000,518059",
            "322.000,68.000,518051",
            "315.000,65.000,518043",
            "308.000,61.000,518037",
            "301.000,56.000,518027",
            "294.000,52.000,518020",
            "272.000,38.000,517988",
            "267.000,33.000,517972",
            "262.000,30.000,517962",
            "260.000,27.000,517943",
            "259.000,26.000,517942",
            "252.000,19.000,517830"
        ],
        "mT": [
            "631.000,265.000,521531",
            "632.000,265.000,521493",
            "633.000,265.000,521453",
            "634.000,264.000,521391",
            "635.000,264.000,521383",
            "635.000,263.000,521367",
            "636.000,262.000,521351",
            "637.000,261.000,521343",
            "637.000,260.000,521335",
            "637.000,259.000,521327",
            "638.000,259.000,521319",
            "638.000,258.000,521311",
            "639.000,258.000,521280",
            "639.000,257.000,521273",
            "640.000,257.000,521257",
            "640.000,256.000,521249",
            "641.000,256.000,521241",
            "641.000,255.000,521233",
            "642.000,254.000,521225",
            "643.000,253.000,521217",
            "645.000,252.000,521209",
            "646.000,251.000,521201",
            "648.000,250.000,521193",
            "650.000,249.000,521185",
            "652.000,247.000,521177",
            "654.000,245.000,521169"
        ],
        "kT": [],
        "aT": [
            "631.000,265.000,BUTTON,522125"
        ],
        "tT": [],
        "dT": [
            "631.000,265.000,BUTTON,521950"
        ],
        "sT": [],
        "inputs": [],
        "buttons": [
            {
                "buttonName": "yodaSmsCodeBtn",
                "touchPoint": "{631,265}",
                "touchPosition": "{74.7,81.2}",
                "touchTimeStamp": this.cur_timestamp[1]
            }
        ]
    };
        return ans;
    }
}
class Base1 extends Base{
    constructor(rc, enc_type, cur_ts0, sms_number) {
    super(rc, enc_type, cur_ts0, sms_number)
        // this.base_next = base
  }
    get_res(){
        if(this.encrypt_type == 1){
            return super.get_token(this.request_code,this.encrypt_type,this.cur_timestamp,this.sms, this.get_enc_c());
        }
        else {
            return "abcdefg"
        }
        
    }
    get_enc_c(){
        var ans = [{},{}];
        //760 625px
        //1360 625px
        var c1 = {
    "v": "2.2.2",
    "ts": 1683193925206,
    "cts": 1683193925206,
    "brVD": [
        1366,
        625
    ],
    "brR": [
        [
            1366,
            768
        ],
        [
            1366,
            728
        ],
        24,
        24
    ],
    "bI": [
        "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode=f7287b16ab5b41afb5d9e4b87aa622e6&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
        "https://account.dianping.com/"
    ],
    "aM": "",
    "broP": [
        "PDF Viewer",
        "Chrome PDF Viewer",
        "Chromium PDF Viewer",
        "Microsoft Edge PDF Viewer",
        "WebKit built-in PDF"
    ],
    "cV": "c890550f51d11894720deb344e0990bf",
    "wV": "WebKit",
    "wR": "WebKit WebGL",
    "wVU": "Google Inc. (Intel)",
    "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
    "aF": "",
    "wI": 1272331532,
    "fL": "a48c29a4460cc3eaa21055966ee72a4f"
};
        var c2 = {
    "v": "2.2.2",
    "ts": this.cur_timestamp[0],
    "cts": this.cur_timestamp[1],
    "brVD": [
        1366,
        625
    ],
    "brR": [
        [
            1366,
            768
        ],
        [
            1366,
            728
        ],
        24,
        24
    ],
    "bI": [
        "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode="+this.request_code+"&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
        "https://account.dianping.com/"
    ],
    "aM": "",
    "broP": [
        "PDF Viewer",
        "Chrome PDF Viewer",
        "Chromium PDF Viewer",
        "Microsoft Edge PDF Viewer",
        "WebKit built-in PDF"
    ],
    "cV": "c890550f51d11894720deb344e0990bf",
    "wV": "WebKit",
    "wR": "WebKit WebGL",
    "wVU": "Google Inc. (Intel)",
    "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
    "aF": "",
    "wI": 1272331532,
    "fL": "a48c29a4460cc3eaa21055966ee72a4f",
    "mT": [
        "423.000,23.000,85302",
        "593.000,272.000,12131",
        "593.000,273.000,12077",
        "592.000,273.000,12053",
        "592.000,274.000,12021",
        "592.000,275.000,11991",
        "592.000,276.000,11793",
        "593.000,276.000,11691",
        "593.000,275.000,11619",
        "593.000,274.000,11595",
        "593.000,273.000,11573",
        "593.000,272.000,10730",
        "592.000,272.000,10713",
        "591.000,272.000,10705",
        "590.000,272.000,10697",
        "588.000,272.000,10689",
        "586.000,272.000,10681",
        "583.000,272.000,10673",
        "581.000,272.000,10665",
        "579.000,271.000,10657",
        "577.000,271.000,10654",
        "576.000,271.000,10643",
        "574.000,270.000,10637",
        "573.000,270.000,10627",
        "573.000,269.000,10620",
        "572.000,269.000,10604",
        "571.000,269.000,10587",
        "570.000,269.000,10571",
        "570.000,270.000,10563",
        "569.000,270.000,10525",
        "568.000,270.000,10504",
        "568.000,271.000,10493",
        "567.000,272.000,10487",
        "567.000,273.000,10477",
        "566.000,274.000,10470",
        "564.000,277.000,10461",
        "563.000,278.000,10454",
        "562.000,280.000,10445",
        "561.000,283.000,10437",
        "560.000,286.000,10429",
        "559.000,289.000,10422",
        "558.000,291.000,10414",
        "558.000,294.000,10406",
        "559.000,301.000,10352",
        "560.000,301.000,10321",
        "561.000,301.000,10311",
        "562.000,301.000,10304",
        "564.000,300.000,10295",
        "567.000,300.000,10288",
        "570.000,299.000,10279",
        "574.000,299.000,10272",
        "578.000,298.000,10265",
        "582.000,297.000,10257",
        "588.000,296.000,10249",
        "592.000,296.000,10241",
        "598.000,295.000,10233",
        "603.000,294.000,10225",
        "609.000,293.000,10218",
        "615.000,292.000,10209",
        "620.000,291.000,10202",
        "627.000,289.000,10193"
    ],
    "kT": this.calc_kT(),
    "aT": [
        "539.000,325.000,BUTTON,97611",
        "472.000,281.000,INPUT,87304",
        "423.000,20.000,DIV,83341",
        "593.000,272.000,BUTTON,12605"
    ],
    "tT": [],
    "dT": [
        "539.000,325.000,BUTTON,97517",
        "472.000,280.000,INPUT,87203",
        "593.000,272.000,BUTTON,12505"
    ],
    "sT": [],
    "fT": [
        "1049.000,261.000,2470",
        "1050.000,261.000,2375",
        "1051.000,261.000,2317",
        "1052.000,262.000,2301",
        "1052.000,263.000,2284",
        "1053.000,263.000,2267",
        "1054.000,263.000,2258",
        "1055.000,263.000,2234",
        "1055.000,264.000,2217",
        "1055.000,266.000,2201",
        "1055.000,267.000,2184",
        "1055.000,268.000,2169",
        "1055.000,269.000,2153",
        "1055.000,270.000,2136",
        "1055.000,272.000,2118",
        "1055.000,273.000,2100",
        "1055.000,275.000,1867",
        "1056.000,275.000,1851",
        "1059.000,275.000,1834",
        "1061.000,276.000,1817",
        "1064.000,276.000,1801",
        "1068.000,276.000,1784",
        "1070.000,276.000,1767",
        "1074.000,276.000,1751",
        "1075.000,276.000,1737",
        "1076.000,276.000,1721",
        "1077.000,276.000,1710",
        "1078.000,276.000,1694",
        "1079.000,277.000,1668",
        "1080.000,277.000,1651",
        "1081.000,277.000,1641",
        "1082.000,277.000,1617",
        "1084.000,277.000,1601",
        "1086.000,277.000,1584",
        "1089.000,277.000,1567",
        "1093.000,277.000,1551",
        "1097.000,278.000,1534",
        "1104.000,278.000,1517",
        "1113.000,278.000,1501",
        "1129.000,279.000,1484",
        "1140.000,279.000,1467",
        "1153.000,282.000,1451",
        "1167.000,284.000,1434",
        "1182.000,286.000,1417",
        "1200.000,287.000,1401",
        "1217.000,290.000,1384",
        "1231.000,293.000,1367",
        "1246.000,295.000,1351",
        "1249.000,296.000,1334",
        "1252.000,296.000,1317",
        "1254.000,296.000,1301",
        "1256.000,297.000,1284",
        "1257.000,297.000,1271",
        "1258.000,297.000,1264",
        "1259.000,297.000,1248",
        "1260.000,297.000,1147",
        "1260.000,298.000,1041",
        "1262.000,312.000,580",
        "1262.000,313.000,524",
        "1276.000,308.000,393"
    ],
    "inputs": [
        {
            "inputName": "yodaVerification",
            "editStartedTimeStamp": this.cur_timestamp[2],
            "keyboardEvent": this.calc_keyborad(),
            "editFinishedTimeStamp": this.cur_timestamp[7]
        }
    ],
    "buttons": [
        {
            "buttonName": "yodaSubmit",
            "touchPoint": "{539,325}",
            "touchPosition": "{60.3,47.5}",
            "touchTimeStamp": this.cur_timestamp[1]
        },//1
        {
            "buttonName": "yodaSmsCodeBtn",
            "touchPoint": "{593,272}",
            "touchPosition": "{37.8,59.3}",
            "touchTimeStamp": this.cur_timestamp[8]
        }//2
    ]
};
        var c22 = {
    "ts": c2['ts'],
    "fT": c2['fT'],
    "mT": c2['mT'],
    "kT": c2['kT'],
    "aT": c2['aT'],
    "tT": [],
    "dT": c2['dT'],
    "sT": [],
    "inputs": c2['inputs'],
    "buttons": c2['buttons']
}
        ans[0] = c2;
        ans[1] = c22;
        return ans;
    }
    calc_keyborad(){
        var res = "0-6-1-"
        var temp = this.cur_timestamp[2];
        for(var i = 3;i < 8; i++)
        {
            temp = this.cur_timestamp[i];
            var cur_num = parseInt(this.cur_timestamp[i] - temp, 36)
            res += toString(cur_num)
        }
        return res;
    }
    calc_kT(){
        var num_str = this.sms.toString();
        var num_arr = num_str.split('');
        var kt = ["{,BODY,258"];
        var start_num = 2;
        for(var i = 0;i<num_arr.length; i++){
            var e = this.cur_timestamp[start_num] - this.cur_timestamp[0];
            kt.unshift([num_arr[i], 'INPUT', e].join(","));
            start_num++;
        }
        return kt;
    }
}

function process(rc, et, ta, sn) {
    // var base2 = new Base2(arguments)
    
    var base1 = new Base1(rc, et, ta, sn);
    var base0 = new Base0(rc, et, ta, sn, base1);
    var t = base0.get_res();
    return t;
}
var cur_ts = (new Date).getTime();
var ts_arr = [];
var temp = cur_ts;
for(var i = 0;i<9;i++){
    var e = temp - parseInt(1e3 * Math.random());
    ts_arr.unshift(e)
    temp = e;
}
console.log(process('f7287b16ab5b41afb5d9e4b87aa622e6',1,ts_arr,526384))



// var obj0 extends base_obj;
// var obj1 extends base_obj;

// function get_token(rc, enc_type, cur_ts0, sms_number){
//     var e = "https://verify.meituan.com/v2/ext_api/loginverification/info?id=4";
//     var t = "request_code=" + rc + "&mobile=&moduleEnable=true&mobileInterCode=86&listIndex=0";
// // var rc = '398730f067d3422c815cfc04e99b4f38'
//     var cur_ts = (new Date).getTime();
//     var window = {
//         location:{
//             href:'https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode=349a62b92fc8413eb46c7dd65bf9c6e4&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist'
//         }
//     }
//     var babelHelpers = {
//         interopRequireDefault:function(obj) {
//             return obj && obj.__esModule ? obj : {
//                 "default": obj
//             }}
//     }
//     var i = {
//         _a:'_token',
//          reload: function() {
//             var o = function(e) {
//             var r = [];
//             for(var index=0;index<20;index++){
//                 r.push({})
//             }
//             r[11] = function(e, t, r) {
//         "use strict";
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         });
//         function n() {
//             var e = window.navigator.userAgent.indexOf("iPhone")
//               , t = window.navigator.userAgent.indexOf("TitansX");
//             if (0 < e || 0 < t)
//                 return "";
//             var r = document.createElement("canvas")
//               , n = null;
//             try {
//                 n = r.getContext("webgl") || r.getContext("experimental-webgl")
//             } catch (e) {}
//             return n = n || null
//         }
//         var g = r(12)
//           , r = {
//             getCanvasFp: function() {
//                 var e = []
//                   , t = document.createElement("canvas");
//                 t.width = 200,
//                 t.height = 200,
//                 t.style.display = "inline";
//                 var r = t.getContext("2d");
//                 r.globalCompositeOperation = "multiply",
//                 r.font = "30px serif",
//                 r.textAlign = "center",
//                 r.textBaseline = "middle",
//                 r.fillText("😜😂😍", 160, 90),
//                 r.fillStyle = "#dd403b",
//                 r.beginPath(),
//                 r.arc(12, 15, 10, 0, 2 * Math.PI, !0),
//                 r.closePath(),
//                 r.fill(),
//                 r.fillStyle = "#d66500",
//                 r.beginPath(),
//                 r.arc(50, 30, 30, 0, 2 * Math.PI, !0),
//                 r.closePath(),
//                 r.fill();
//                 var n = r.createLinearGradient(0, 0, 200, 0);
//                 n.addColorStop(0, "#F4F4F2"),
//                 n.addColorStop(1, "#F5E905"),
//                 r.fillStyle = n,
//                 r.beginPath(),
//                 r.arc(120, 35, 35, 0, 2 * Math.PI, !0),
//                 r.closePath(),
//                 r.fill();
//                 n = r.createRadialGradient(30, 100, 35, 140, 110, 25);
//                 n.addColorStop(.1, "#490F44"),
//                 n.addColorStop(.5, "white"),
//                 n.addColorStop(1, "#FFFFFF"),
//                 r.fillStyle = n,
//                 r.beginPath(),
//                 r.arc(50, 100, 35, 0, 2 * Math.PI, !0),
//                 r.fill();
//                 n = r.createLinearGradient(0, 0, 200, 0);
//                 return n.addColorStop(0, "#A4A3A3"),
//                 n.addColorStop(1, "#E10909"),
//                 r.fillStyle = n,
//                 r.beginPath(),
//                 r.arc(145, 145, 50, 0, 2 * Math.PI, !0),
//                 r.fill(),
//                 r.shadowColor = "#FFD161",
//                 r.shadowOffsetX = 3,
//                 r.shadowOffsetY = 3,
//                 r.shadowBlur = 0,
//                 r.fillStyle = "#FFBD00",
//                 r.font = "16px xxx",
//                 r.strokeText("EAT BETTER LIVE BETTER", 103, 170),
//                 r.beginPath(),
//                 r.moveTo(10, 10),
//                 r.bezierCurveTo(40, 280, 410, 50, 20, 10),
//                 r.stroke(),
//                 r.beginPath(),
//                 r.moveTo(20, 110),
//                 r.quadraticCurveTo(180, 120, 170, 10),
//                 r.stroke(),
//                 t.toDataURL && e.push(t.toDataURL()),
//                 e.join("~")
//             },
//             getWebglVendor: function() {
//                 var e = n();
//                 return e ? e.getParameter(e.VENDOR) : ""
//             },
//             getWebglRenderer: function() {
//                 var e = n();
//                 return e ? e.getParameter(e.RENDERER) : ""
//             },
//             getFonts: function(e) {
//                 var l = ["monospace", "sans-serif", "serif"]
//                   , c = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
//                 c = (c = c.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])).filter(function(e, t) {
//                     return c.indexOf(e) === t
//                 });
//                 function f() {
//                     var e = document.createElement("span");
//                     return e.style.position = "absolute",
//                     e.style.left = "-9999px",
//                     e.style.fontSize = "72px",
//                     e.style.fontStyle = "normal",
//                     e.style.fontWeight = "normal",
//                     e.style.letterSpacing = "normal",
//                     e.style.lineBreak = "auto",
//                     e.style.lineHeight = "normal",
//                     e.style.textTransform = "none",
//                     e.style.textAlign = "left",
//                     e.style.textDecoration = "none",
//                     e.style.textShadow = "none",
//                     e.style.whiteSpace = "normal",
//                     e.style.wordBreak = "normal",
//                     e.style.wordSpacing = "normal",
//                     e.textContent = "Eat Better, Live Better",
//                     e
//                 }
//                 var t = document.getElementsByTagName("body")[0]
//                   , o = document.createElement("div")
//                   , d = document.createElement("div")
//                   , n = {}
//                   , i = {}
//                   , r = function() {
//                     for (var e = [], t = 0, r = l.length; t < r; t++) {
//                         var n = f();
//                         n.style.fontFamily = l[t],
//                         o.appendChild(n),
//                         e.push(n)
//                     }
//                     return e
//                 }();
//                 t.appendChild(o);
//                 for (var a = 0, u = l.length; a < u; a++)
//                     n[l[a]] = r[a].offsetWidth,
//                     i[l[a]] = r[a].offsetHeight;
//                 var s = function() {
//                     for (var e, t, r = {}, n = 0, o = c.length; n < o; n++) {
//                         for (var i = [], a = 0, u = l.length; a < u; a++) {
//                             var s = (e = c[n],
//                             t = l[a],
//                             s = void 0,
//                             (s = f()).style.fontFamily = "'" + e + "'," + t,
//                             s);
//                             d.appendChild(s),
//                             i.push(s)
//                         }
//                         r[c[n]] = i
//                     }
//                     return r
//                 }();
//                 t.appendChild(d);
//                 for (var h = [], p = 0, y = c.length; p < y; p++)
//                     !function(e) {
//                         for (var t = !1, r = 0; r < l.length; r++)
//                             if (t = e[r].offsetWidth !== n[l[r]] || e[r].offsetHeight !== i[l[r]])
//                                 return t;
//                         return t
//                     }(s[c[p]]) || h.push(c[p]);
//                 t.removeChild(d),
//                 t.removeChild(o),
//                 e.fL = 0 < h.length ? (0,
//                 g.hex_md5)(h.join(",")) : ""
//             },
//             getWebglRendererUnmasked: function() {
//                 var e = n();
//                 if (e) {
//                     var t = e.getExtension("WEBGL_debug_renderer_info");
//                     if (t)
//                         return e.getParameter(t.UNMASKED_RENDERER_WEBGL)
//                 }
//                 return ""
//             },
//             getWebglVendorUnmasked: function() {
//                 var e = n();
//                 if (e) {
//                     var t = e.getExtension("WEBGL_debug_renderer_info");
//                     if (t)
//                         return e.getParameter(t.UNMASKED_VENDOR_WEBGL)
//                 }
//                 return ""
//             }
//         };
//         t.default = r
//     };
//             r[12] = function(e, t) {
//         "use strict";
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         }),
//         t.hex_md5 = r,
//         t.b64_md5 = function(e) {
//             return b(u(l(e), e.length * a))
//         }
//         ,
//         t.str_md5 = function(e) {
//             return c(u(l(e), e.length * a))
//         }
//         ,
//         t.hex_hmac_md5 = function(e, t) {
//             return g(n(e, t))
//         }
//         ,
//         t.b64_hmac_md5 = function(e, t) {
//             return b(n(e, t))
//         }
//         ,
//         t.str_hmac_md5 = function(e, t) {
//             return c(n(e, t))
//         }
//         ;
//         var o = 0
//           , i = ""
//           , a = 8;
//         function r(e) {
//             return g(u(l(e), e.length * a))
//         }
//         function u(e, t) {
//             e[t >> 5] |= 128 << t % 32,
//             e[14 + (t + 64 >>> 9 << 4)] = t;
//             for (var r = 1732584193, n = -271733879, o = -1732584194, i = 271733878, a = 0; a < e.length; a += 16) {
//                 var u = r
//                   , s = n
//                   , l = o
//                   , c = i
//                   , r = f(r, n, o, i, e[a + 0], 7, -680876936)
//                   , i = f(i, r, n, o, e[a + 1], 12, -389564586)
//                   , o = f(o, i, r, n, e[a + 2], 17, 606105819)
//                   , n = f(n, o, i, r, e[a + 3], 22, -1044525330);
//                 r = f(r, n, o, i, e[a + 4], 7, -176418897),
//                 i = f(i, r, n, o, e[a + 5], 12, 1200080426),
//                 o = f(o, i, r, n, e[a + 6], 17, -1473231341),
//                 n = f(n, o, i, r, e[a + 7], 22, -45705983),
//                 r = f(r, n, o, i, e[a + 8], 7, 1770035416),
//                 i = f(i, r, n, o, e[a + 9], 12, -1958414417),
//                 o = f(o, i, r, n, e[a + 10], 17, -42063),
//                 n = f(n, o, i, r, e[a + 11], 22, -1990404162),
//                 r = f(r, n, o, i, e[a + 12], 7, 1804603682),
//                 i = f(i, r, n, o, e[a + 13], 12, -40341101),
//                 o = f(o, i, r, n, e[a + 14], 17, -1502002290),
//                 r = d(r, n = f(n, o, i, r, e[a + 15], 22, 1236535329), o, i, e[a + 1], 5, -165796510),
//                 i = d(i, r, n, o, e[a + 6], 9, -1069501632),
//                 o = d(o, i, r, n, e[a + 11], 14, 643717713),
//                 n = d(n, o, i, r, e[a + 0], 20, -373897302),
//                 r = d(r, n, o, i, e[a + 5], 5, -701558691),
//                 i = d(i, r, n, o, e[a + 10], 9, 38016083),
//                 o = d(o, i, r, n, e[a + 15], 14, -660478335),
//                 n = d(n, o, i, r, e[a + 4], 20, -405537848),
//                 r = d(r, n, o, i, e[a + 9], 5, 568446438),
//                 i = d(i, r, n, o, e[a + 14], 9, -1019803690),
//                 o = d(o, i, r, n, e[a + 3], 14, -187363961),
//                 n = d(n, o, i, r, e[a + 8], 20, 1163531501),
//                 r = d(r, n, o, i, e[a + 13], 5, -1444681467),
//                 i = d(i, r, n, o, e[a + 2], 9, -51403784),
//                 o = d(o, i, r, n, e[a + 7], 14, 1735328473),
//                 r = h(r, n = d(n, o, i, r, e[a + 12], 20, -1926607734), o, i, e[a + 5], 4, -378558),
//                 i = h(i, r, n, o, e[a + 8], 11, -2022574463),
//                 o = h(o, i, r, n, e[a + 11], 16, 1839030562),
//                 n = h(n, o, i, r, e[a + 14], 23, -35309556),
//                 r = h(r, n, o, i, e[a + 1], 4, -1530992060),
//                 i = h(i, r, n, o, e[a + 4], 11, 1272893353),
//                 o = h(o, i, r, n, e[a + 7], 16, -155497632),
//                 n = h(n, o, i, r, e[a + 10], 23, -1094730640),
//                 r = h(r, n, o, i, e[a + 13], 4, 681279174),
//                 i = h(i, r, n, o, e[a + 0], 11, -358537222),
//                 o = h(o, i, r, n, e[a + 3], 16, -722521979),
//                 n = h(n, o, i, r, e[a + 6], 23, 76029189),
//                 r = h(r, n, o, i, e[a + 9], 4, -640364487),
//                 i = h(i, r, n, o, e[a + 12], 11, -421815835),
//                 o = h(o, i, r, n, e[a + 15], 16, 530742520),
//                 r = p(r, n = h(n, o, i, r, e[a + 2], 23, -995338651), o, i, e[a + 0], 6, -198630844),
//                 i = p(i, r, n, o, e[a + 7], 10, 1126891415),
//                 o = p(o, i, r, n, e[a + 14], 15, -1416354905),
//                 n = p(n, o, i, r, e[a + 5], 21, -57434055),
//                 r = p(r, n, o, i, e[a + 12], 6, 1700485571),
//                 i = p(i, r, n, o, e[a + 3], 10, -1894986606),
//                 o = p(o, i, r, n, e[a + 10], 15, -1051523),
//                 n = p(n, o, i, r, e[a + 1], 21, -2054922799),
//                 r = p(r, n, o, i, e[a + 8], 6, 1873313359),
//                 i = p(i, r, n, o, e[a + 15], 10, -30611744),
//                 o = p(o, i, r, n, e[a + 6], 15, -1560198380),
//                 n = p(n, o, i, r, e[a + 13], 21, 1309151649),
//                 r = p(r, n, o, i, e[a + 4], 6, -145523070),
//                 i = p(i, r, n, o, e[a + 11], 10, -1120210379),
//                 o = p(o, i, r, n, e[a + 2], 15, 718787259),
//                 n = p(n, o, i, r, e[a + 9], 21, -343485551),
//                 r = y(r, u),
//                 n = y(n, s),
//                 o = y(o, l),
//                 i = y(i, c)
//             }
//             return Array(r, n, o, i)
//         }
//         function s(e, t, r, n, o, i) {
//             return y((i = y(y(t, e), y(n, i))) << (o = o) | i >>> 32 - o, r)
//         }
//         function f(e, t, r, n, o, i, a) {
//             return s(t & r | ~t & n, e, t, o, i, a)
//         }
//         function d(e, t, r, n, o, i, a) {
//             return s(t & n | r & ~n, e, t, o, i, a)
//         }
//         function h(e, t, r, n, o, i, a) {
//             return s(t ^ r ^ n, e, t, o, i, a)
//         }
//         function p(e, t, r, n, o, i, a) {
//             return s(r ^ (t | ~n), e, t, o, i, a)
//         }
//         function n(e, t) {
//             var r = l(e);
//             16 < r.length && (r = u(r, e.length * a));
//             for (var n = Array(16), o = Array(16), i = 0; i < 16; i++)
//                 n[i] = 909522486 ^ r[i],
//                 o[i] = 1549556828 ^ r[i];
//             t = u(n.concat(l(t)), 512 + t.length * a);
//             return u(o.concat(t), 640)
//         }
//         function y(e, t) {
//             var r = (65535 & e) + (65535 & t);
//             return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
//         }
//         function l(e) {
//             for (var t = Array(), r = (1 << a) - 1, n = 0; n < e.length * a; n += a)
//                 t[n >> 5] |= (e.charCodeAt(n / a) & r) << n % 32;
//             return t
//         }
//         function c(e) {
//             for (var t = "", r = (1 << a) - 1, n = 0; n < 32 * e.length; n += a)
//                 t += String.fromCharCode(e[n >> 5] >>> n % 32 & r);
//             return t
//         }
//         function g(e) {
//             for (var t = o ? "0123456789ABCDEF" : "0123456789abcdef", r = "", n = 0; n < 4 * e.length; n++)
//                 r += t.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(e[n >> 2] >> n % 4 * 8 & 15);
//             return r
//         }
//         function b(e) {
//             for (var t = "", r = 0; r < 4 * e.length; r += 3)
//                 for (var n = (e[r >> 2] >> r % 4 * 8 & 255) << 16 | (e[r + 1 >> 2] >> (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >> 2] >> (r + 2) % 4 * 8 & 255, o = 0; o < 4; o++)
//                     8 * r + 6 * o > 32 * e.length ? t += i : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 6 * (3 - o) & 63);
//             return t
//         }
//     };
//             r[13] = function(e, t) {
//         "use strict";
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         });
//         var d = {
//             ts: (new Date).getTime(),
//             fT: [],
//             mT: [],
//             kT: [],
//             aT: [],
//             tT: [],
//             dT: [],
//             sT: [],
//             inputs: [],
//             buttons: []
//         };
//         d.event = function() {
//             var e = function(e) {
//                 e = e || window.event;
//                 var t = Date.now() - this.ts;
//                 this.mT.unshift([e.pageX.toFixed(3), e.pageY.toFixed(3), t].join(",")),
//                 60 <= d.mT.length && 0 === d.fT.length && (d.fT = d.mT.splice(0)),
//                 60 < this.mT.length && (this.mT = this.mT.slice(0, 60))
//             }
//             .bind(this)
//               , t = function(e) {
//                 var t = (e = e || window.event).target || e.srcElement
//                   , r = "number" == typeof e.which ? e.which : e.keyCode;
//                 r && (e = Date.now() - this.ts,
//                 this.kT.unshift([String.fromCharCode(r), t.nodeName, e].join(","))),
//                 30 < this.kT.length && (this.kT = this.kT.slice(0, 30))
//             }
//             .bind(this)
//               , r = function(e) {
//                 var t = e.touches[0]
//                   , r = Date.now() - this.ts;
//                 this.tT.unshift([t.pageX.toFixed(3), t.pageY.toFixed(3), e.touches.length, r].join(",")),
//                 60 < this.tT.length && (this.tT = this.tT.slice(0, 60))
//             }
//             .bind(this)
//               , n = function(e) {
//                 var t = (e = e || window.event).target || e.srcElement
//                   , r = Date.now() - this.ts;
//                 this.aT.unshift([e.clientX.toFixed(3), e.clientY.toFixed(3), t.nodeName, r].join(",")),
//                 30 < this.aT.length && (this.aT = this.aT.slice(0, 30))
//             }
//             .bind(this)
//               , o = function(e) {
//                 e = (e = e || window.event).target || e.srcElement;
//                 if (e.nodeName && "INPUT" === e.nodeName) {
//                     for (var t = (t = e.name || e.id) || (e.id = "rohr_" + parseInt(1e6 * Math.random())), r = this.inputs.length, n = 0; n < r; n++)
//                         t === this.inputs[0].inputName && (this.inputs.splice(0, 1),
//                         n = 0,
//                         --r);
//                     this.inputs.unshift({
//                         inputName: t,
//                         editStartedTimeStamp: Date.now(),
//                         keyboardEvent: "0-0-0-0"
//                     })
//                 }
//             }
//             .bind(this)
//               , i = function(e) {
//                 var t = (e = e || window.event).target || e.srcElement;
//                 !t.nodeName || "INPUT" !== t.nodeName || (e = this.inputs[0]) && e.keyboardEvent && ((t = e.keyboardEvent.split("-"))[2] = 1,
//                 e.keyboardEvent = t.join("-"))
//             }
//             .bind(this)
//               , a = function(e) {
//                 var t, r, n = (e = e || window.event).target || e.srcElement;
//                 !n.nodeName || "INPUT" !== n.nodeName || (t = this.inputs[0]) && t.keyboardEvent && (r = t.keyboardEvent.split("-"),
//                 9 === ("number" == typeof e.which ? e.which : e.keyCode) && (r[0] = parseInt(r[0]) + 1),
//                 r[1] = parseInt(r[1]) + 1,
//                 n = Date.now(),
//                 t.lastTime && (e = t.lastTime,
//                 r[3] = r[3] + "|" + parseInt(n - e, 36)),
//                 t.lastTime = n,
//                 t.keyboardEvent = r.join("-"))
//             }
//             .bind(this)
//               , u = function(e) {
//                 var t = (e = e || window.event).target || e.srcElement;
//                 !t.nodeName || "INPUT" !== t.nodeName || (e = this.inputs[0]) && e.keyboardEvent && (e.editFinishedTimeStamp = Date.now(),
//                 0 != (t = e.keyboardEvent.split("-"))[3] && (t[3] = t[3].substr(2)),
//                 delete e.lastTime,
//                 e.keyboardEvent = t.join("-"))
//             }
//             .bind(this)
//               , s = function(e) {
//                 var t = (e = e || window.event).target || e.srcElement;
//                 if (t.nodeName && "BUTTON" === t.nodeName) {
//                     for (var r = (r = t.name || t.id) || (t.id = "rohr_" + parseInt(1e6 * Math.random())), n = this.buttons.length, o = 0; o < n; o++)
//                         r === this.buttons[o].buttonName && (this.buttons.splice(o, 1),
//                         o = 0,
//                         --n);
//                     var i = {
//                         x: (a = (a = e) || window.event).pageX || a.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft),
//                         y: a.pageY || a.clientY + (document.documentElement.scrollTop || document.body.scrollTop)
//                     }
//                       , a = t.clientWidth
//                       , t = t.clientHeight
//                       , a = e.offsetX / a * 1e3
//                       , t = (t - e.offsetY) / t * 1e3;
//                     this.buttons.unshift({
//                         buttonName: r,
//                         touchPoint: "{" + i.x + "," + i.y + "}",
//                         touchPosition: "{" + Math.floor(a) / 10 + "," + Math.floor(t) / 10 + "}",
//                         touchTimeStamp: Date.now()
//                     })
//                 }
//             }
//             .bind(this)
//               , l = function(e) {
//                 var t = (e = e || window.event).target || e.srcElement
//                   , r = Date.now() - this.ts;
//                 this.dT.unshift([e.clientX.toFixed(3), e.clientY.toFixed(3), t.nodeName, r].join(",")),
//                 60 < this.dT.length && (this.dT = this.dT.slice(0, 60))
//             }
//             .bind(this)
//               , c = function(e) {
//                 var t = e.touches[0]
//                   , r = e.target || e.srcElement
//                   , e = Date.now() - this.ts;
//                 this.sT.unshift([t.pageX.toFixed(3), t.pageY.toFixed(3), r.nodeName, e].join(",")),
//                 60 < this.sT.length && (this.sT = this.sT.slice(0, 60))
//             }
//             .bind(this);
//             function f(e, t, r, n) {
//                 t.addEventListener ? t.addEventListener(e, r, n || !1) : t.attachEvent ? t.attachEvent("on" + e, r) : t[e] = r
//             }
//             f("mousemove", document, e, !0),
//             f("keydown", document, t, !0),
//             f("click", document, n, !0),
//             "ontouchmove"in document && f("touchmove", document, r, !0),
//             f("focus", document, o, !0),
//             f("mouseout", document, i, !0),
//             f("keydown", document, a, !0),
//             f("blur", document, u, !0),
//             "ontouchstart"in document ? f("touchstart", document, s, !0) : f("click", document, s, !0),
//             f("mousedown", document, l, !0),
//             f("touchstart", document, c, !0)
//         }
//         ,
//         d.data = function() {
//             return d
//         }
//         ,
//         t.default = d
//     };
//             r[14] = function(e, t) {
//         "use strict";
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         });
//         var a = {};
//         function u() {
//             try {
//                 var e = new (window.AudioContext || window.webkitAudioContext)
//                   , t = e.createAnalyser();
//                 t.maxDecibels = 100,
//                 function(n) {
//                     n.fftSize = 256;
//                     try {
//                         var o, i = new window.Float32Array(n.frequencyBinCount);
//                         i && (o = 0,
//                         function e() {
//                             o++;
//                             var t = requestAnimationFrame(e);
//                             o < 200 && window.cancelAnimationFrame(t),
//                             n.getFloatFrequencyData(i);
//                             var r = i.join(",");
//                             -1 === r.indexOf("-Infinity") && (a.data = r,
//                             window.cancelAnimationFrame(t),
//                             document.removeEventListener("mousedown", u, !1),
//                             document.removeEventListener("touchstart", u, !1))
//                         }())
//                     } catch (e) {
//                         a.data = ""
//                     }
//                 }(t);
//                 var r = e.createOscillator()
//                   , n = e.createGain();
//                 n.gain.value = .5,
//                 r.connect(n),
//                 n.connect(t),
//                 r.type = "square",
//                 r.frequency.value = 520,
//                 n.gain.setValueAtTime(0, e.currentTime),
//                 n.gain.linearRampToValueAtTime(1, e.currentTime + .01),
//                 r.start(),
//                 n.gain.exponentialRampToValueAtTime(.001, e.currentTime + 1),
//                 r.stop(e.currentTime + 1)
//             } catch (e) {
//                 a.data = ""
//             }
//         }
//         a.start = function() {
//             document.addEventListener("touchstart", u, !1),
//             document.addEventListener("mousedown", u, !1)
//         }
//         ,
//         a.audioData = function() {
//             return a
//         }
//         ,
//         t.default = a
//     };
//             r[15] = function(e, t) {
//         "use strict";
//         function i(e, t, r) {
//             t = e.createShader(t);
//             if (e.shaderSource(t, r),
//             e.compileShader(t),
//             e.getShaderParameter(t, e.COMPILE_STATUS))
//                 return t;
//             e.deleteShader(t)
//         }
//         function a(e, t, r) {
//             var n = e.createProgram();
//             if (e.attachShader(n, t),
//             e.attachShader(n, r),
//             e.linkProgram(n),
//             e.getProgramParameter(n, e.LINK_STATUS))
//                 return e.detachShader(n, t),
//                 e.detachShader(n, r),
//                 e.deleteShader(t),
//                 e.deleteShader(r),
//                 n;
//             e.deleteProgram(n)
//         }
//         function u(e, t) {
//             for (var r, n = void 0, o = void 0, i = void 0, a = 3 & e.length, u = e.length - a, n = t, s = 3432918353, l = 461845907, i = 0; i < u; )
//                 o = 255 & e.charCodeAt(i) | (255 & e.charCodeAt(++i)) << 8 | (255 & e.charCodeAt(++i)) << 16 | (255 & e.charCodeAt(++i)) << 24,
//                 ++i,
//                 n = 27492 + (65535 & (r = 5 * (65535 & (n = (n ^= o = (65535 & (o = (o = (65535 & o) * s + (((o >>> 16) * s & 65535) << 16) & 4294967295) << 15 | o >>> 17)) * l + (((o >>> 16) * l & 65535) << 16) & 4294967295) << 13 | n >>> 19)) + ((5 * (n >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (r >>> 16) & 65535) << 16);
//             switch (o = 0,
//             a) {
//             case 3:
//                 o ^= (255 & e.charCodeAt(i + 2)) << 16;
//             case 2:
//                 o ^= (255 & e.charCodeAt(i + 1)) << 8;
//             case 1:
//                 n ^= o = (65535 & (o = (o = (65535 & (o ^= 255 & e.charCodeAt(i))) * s + (((o >>> 16) * s & 65535) << 16) & 4294967295) << 15 | o >>> 17)) * l + (((o >>> 16) * l & 65535) << 16) & 4294967295
//             }
//             return n ^= e.length,
//             n = 2246822507 * (65535 & (n ^= n >>> 16)) + ((2246822507 * (n >>> 16) & 65535) << 16) & 4294967295,
//             n = 3266489909 * (65535 & (n ^= n >>> 13)) + ((3266489909 * (n >>> 16) & 65535) << 16) & 4294967295,
//             (n ^= n >>> 16) >>> 0
//         }
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         }),
//         t.createShader = i,
//         t.createProgram = a,
//         t.murmurhash332gc = u,
//         t.webglToHash = function() {
//             var e = {
//                 vendor: "",
//                 renderer: "",
//                 hash: ""
//             };
//             try {
//                 var t = l();
//                 if (null === t)
//                     throw Error("不支持webgl");
//                 var r = i(t, t.VERTEX_SHADER, "\n                attribute vec4 a_position;\n                uniform mat4 u_matrix;\n                varying vec4 v_color;\n                void main() {\n                    gl_Position = a_position;\n                    v_color = gl_Position * 0.5 + 0.5;\n                }\n            ")
//                   , n = i(t, t.FRAGMENT_SHADER, "\n                precision mediump float;\n                varying vec4 v_color;\n                void main() {\n                    gl_FragColor = v_color; // return reddish-purple\n                }\n            ")
//                   , o = a(t, r, n)
//                   , r = t.getAttribLocation(o, "a_position")
//                   , n = t.createBuffer();
//                 t.bindBuffer(t.ARRAY_BUFFER, n);
//                 t.bufferData(t.ARRAY_BUFFER, new Float32Array([0, 0, 0, .5, .7, 0]), t.STATIC_DRAW),
//                 t.viewport(0, 0, t.canvas.width, t.canvas.height),
//                 t.clearColor(0, 0, 0, 0),
//                 t.clear(t.COLOR_BUFFER_BIT),
//                 t.useProgram(o),
//                 t.enableVertexAttribArray(r),
//                 t.bindBuffer(t.ARRAY_BUFFER, n);
//                 n = t.FLOAT;
//                 t.vertexAttribPointer(r, 2, n, !1, 0, 0);
//                 n = t.TRIANGLES;
//                 0;
//                 t.drawArrays(n, 0, 3);
//                 n = t.getExtension("WEBGL_debug_renderer_info");
//                 e.vendor = t.getParameter(n.UNMASKED_VENDOR_WEBGL) || "",
//                 e.renderer = t.getParameter(n.UNMASKED_RENDERER_WEBGL) || "",
//                 s && (n = u(s.toDataURL(), 0),
//                 e.hash = n || ""),
//                 s = null
//             } catch (e) {
//                 s = null
//             }
//             return e
//         }
//         ;
//         var s = void 0
//           , l = t.getWebglCanvas = function() {
//             (s = document.createElement("canvas")).width = 400,
//             s.height = 400;
//             var e = null;
//             try {
//                 e = s.getContext("webgl") || s.getContext("experimental-webgl")
//             } catch (e) {}
//             return e = e || null
//         }
//     };
//             // if (n[e])
//             //     return n[e].exports;
//             //var t = n[e] = {
//             var t = {
//                 exports: {},
//                 id: e,
//                 loaded: !1
//             };
//             return r[e].call(t.exports, t, t.exports, o),
//             t.loaded = !0,
//             t.exports
//         }
//             var n = o(13),
//             f = babelHelpers.interopRequireDefault(n);
//             var n = o(14),
//             h = babelHelpers.interopRequireDefault(n),
//             d = o(12);
//             var n = o(11),
//             i = babelHelpers.interopRequireDefault(n);
//              var r = o(15);
//              var a =(0, r.webglToHash)();
//             // e.exports = function() {
//
//             // var e, c = {
//             //     v: "2.2.2",
//             //     ts: (new Date).getTime(),
//             //     cts: (new Date).getTime(),
//             //     brVD: [Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0)],
//             //     brR: [[screen.width, screen.height], [screen.availWidth, screen.availHeight], screen.colorDepth, screen.pixelDepth],
//             //     bI: (e = document.referrer,
//             //     [window.location.href, e]),
//             //     aM: (window._phantom || window.phantom || window.callPhantom ? "ps" : function() {
//             //         try {
//             //             var e = Function("return this")()
//             //               , t = function() {
//             //                 var t = (e.constructor + "").match(/ (\w+)|$/)[1];
//             //                 if (!t)
//             //                     try {
//             //                         "[object]" === e && (t = "Window")
//             //                     } catch (e) {
//             //                         t = "WSH"
//             //                     }
//             //                 return t
//             //             }()
//             //               , r = "";
//             //             switch (t) {
//             //             case "Window":
//             //                 break;
//             //             case "DedicatedWorkerGlobalScope":
//             //                 r = "ww";
//             //                 break;
//             //             case "WSH":
//             //                 r = "wsh";
//             //                 break;
//             //             case "Object":
//             //                 r = "nj";
//             //                 break;
//             //             default:
//             //                 r = "ot"
//             //             }
//             //             return r
//             //         } catch (e) {
//             //             return "abnormal"
//             //         }
//             //     }() || o.default.getwd()) || "",
//             //     broP: function() {
//             //         var e, t = window.navigator.plugins, r = [], n = void 0;
//             //         for (n in t)
//             //             t.hasOwnProperty(n) && (e = t[n].name || "",
//             //             r.push(e));
//             //         return r
//             //     }(),
//             //     cV: (0,
//             //     d.hex_md5)(i.default.getCanvasFp()),
//             //     wV: i.default.getWebglVendor(),
//             //     wR: i.default.getWebglRenderer(),
//             //     wVU: i.default.getWebglVendorUnmasked(),
//             //     wRU: i.default.getWebglRendererUnmasked(),
//             //     aF: "",
//             //     wI: a.hash
//             // };
//             var e,c = {
//         "v": "2.2.2",
//         ts: (new Date).getTime(),
//                 cts: (new Date).getTime(),
//         "brVD": [
//             1366,
//             625
//         ],
//         "brR": [
//             [
//                 1366,
//                 768
//             ],
//             [
//                 1366,
//                 728
//             ],
//             24,
//             24
//         ],
//         "bI": [
//             "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode="+rc+"&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
//             "https://account.dianping.com/"
//         ],
//         "aM": "",
//         "broP": [
//             "PDF Viewer",
//             "Chrome PDF Viewer",
//             "Chromium PDF Viewer",
//             "Microsoft Edge PDF Viewer",
//             "WebKit built-in PDF"
//         ],
//     //c890550f51d11894720deb344e0990bf
//         "cV": "c890550f51d11894720deb344e0990bf",
//         "wV": "WebKit",
//         "wR": "WebKit WebGL",
//         "wVU": "Google Inc. (Intel)",
//         "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
//         "aF": "",
//         "wI": a.hash,//1272331532
//         "fL": "a48c29a4460cc3eaa21055966ee72a4f",
//         "mT": [
//             "614.000,277.000,44675",
//             "615.000,277.000,44644",
//             "615.000,279.000,44635",
//             "615.000,280.000,44629",
//             "616.000,281.000,44619",
//             "616.000,282.000,44611",
//             "616.000,283.000,44595",
//             "617.000,283.000,44501",
//             "618.000,283.000,44485",
//             "620.000,282.000,44478",
//             "624.000,280.000,44469",
//             "629.000,277.000,44461",
//             "634.000,273.000,44453",
//             "642.000,268.000,44446",
//             "650.000,263.000,44437",
//             "657.000,259.000,44431",
//             "663.000,256.000,44423",
//             "668.000,253.000,44415",
//             "671.000,251.000,44408",
//             "448.000,238.000,42593",
//             "447.000,238.000,42561",
//             "447.000,239.000,42545",
//             "446.000,239.000,42529",
//             "445.000,239.000,42523",
//             "445.000,240.000,42515",
//             "444.000,240.000,42507",
//             "443.000,241.000,42499"
//         ],
//         "kT": [
//             "{,BODY,2562"
//         ],
//         "aT": [
//             "614.000,277.000,BUTTON,44912"
//         ],
//         "tT": [],
//         "dT": [
//             "614.000,277.000,BUTTON,44806"
//         ],
//         "sT": [],
//         "fT": [
//             "442.000,241.000,42491",
//             "442.000,242.000,42483",
//             "441.000,242.000,42467",
//             "440.000,243.000,42443",
//             "439.000,244.000,42435",
//             "438.000,244.000,42411",
//             "437.000,244.000,42403",
//             "436.000,244.000,42333",
//             "436.000,245.000,42309",
//             "435.000,245.000,42277",
//             "435.000,246.000,42261",
//             "434.000,247.000,42239",
//             "434.000,248.000,42231",
//             "433.000,248.000,42223",
//             "432.000,248.000,42215",
//             "432.000,249.000,42207",
//             "431.000,250.000,42191",
//             "430.000,251.000,42175",
//             "429.000,251.000,42167",
//             "429.000,252.000,42151",
//             "428.000,252.000,42143",
//             "428.000,253.000,42121",
//             "428.000,254.000,42105",
//             "427.000,254.000,42090",
//             "427.000,255.000,42073",
//             "426.000,255.000,42058",
//             "425.000,256.000,42049",
//             "424.000,257.000,42041",
//             "421.000,259.000,42033",
//             "418.000,261.000,42025",
//             "416.000,264.000,42017",
//             "413.000,266.000,42009",
//             "411.000,268.000,42001",
//             "409.000,270.000,41993",
//             "408.000,271.000,41987",
//             "407.000,272.000,41979",
//             "407.000,274.000,41971",
//             "407.000,275.000,41963",
//             "407.000,276.000,41955",
//             "408.000,277.000,41939",
//             "408.000,278.000,41931",
//             "409.000,279.000,41875",
//             "410.000,279.000,41860",
//             "410.000,280.000,41851",
//             "411.000,280.000,41789",
//             "414.000,280.000,41781",
//             "420.000,278.000,41773",
//             "430.000,277.000,41765",
//             "445.000,273.000,41758",
//             "847.000,158.000,19527",
//             "847.000,159.000,19479",
//             "847.000,160.000,19449",
//             "847.000,161.000,19401",
//             "847.000,162.000,19283",
//             "847.000,163.000,19142",
//             "847.000,163.000,19141",
//             "1035.000,353.000,2431",
//             "1230.000,388.000,1030",
//             "1232.000,388.000,959",
//             "1238.000,388.000,800"
//         ],
//         "inputs": [],
//         "buttons": [
//             {
//                 "buttonName": "yodaSmsCodeBtn",
//                 "touchPoint": "{614,277}",
//                 "touchPosition": "{58.2,43.7}",
//                 "touchTimeStamp": cur_ts
//             }
//         ]
//     };
//             var c0 = {
//         "v": "2.2.2",
//         ts: (new Date).getTime(),
//                 cts: (new Date).getTime(),
//         "brVD": [
//             1366,
//             625
//         ],
//         "brR": [
//             [
//                 1366,
//                 768
//             ],
//             [
//                 1366,
//                 728
//             ],
//             24,
//             24
//         ],
//         "bI": [
//             "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode="+rc+"&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
//             "https://account.dianping.com/"
//         ],
//         "aM": "",
//         "broP": [
//             "PDF Viewer",
//             "Chrome PDF Viewer",
//             "Chromium PDF Viewer",
//             "Microsoft Edge PDF Viewer",
//             "WebKit built-in PDF"
//         ],
//     //c890550f51d11894720deb344e0990bf
//         "cV": "c890550f51d11894720deb344e0990bf",
//         "wV": "WebKit",
//         "wR": "WebKit WebGL",
//         "wVU": "Google Inc. (Intel)",
//         "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
//         "aF": "",
//         "wI": a.hash,//1272331532
//         "fL": "a48c29a4460cc3eaa21055966ee72a4f",
//         "mT": [
//             "614.000,277.000,44675",
//             "615.000,277.000,44644",
//             "615.000,279.000,44635",
//             "615.000,280.000,44629",
//             "616.000,281.000,44619",
//             "616.000,282.000,44611",
//             "616.000,283.000,44595",
//             "617.000,283.000,44501",
//             "618.000,283.000,44485",
//             "620.000,282.000,44478",
//             "624.000,280.000,44469",
//             "629.000,277.000,44461",
//             "634.000,273.000,44453",
//             "642.000,268.000,44446",
//             "650.000,263.000,44437",
//             "657.000,259.000,44431",
//             "663.000,256.000,44423",
//             "668.000,253.000,44415",
//             "671.000,251.000,44408",
//             "448.000,238.000,42593",
//             "447.000,238.000,42561",
//             "447.000,239.000,42545",
//             "446.000,239.000,42529",
//             "445.000,239.000,42523",
//             "445.000,240.000,42515",
//             "444.000,240.000,42507",
//             "443.000,241.000,42499"
//         ],
//         "kT": [
//             "{,BODY,2562"
//         ],
//         "aT": [
//             "614.000,277.000,BUTTON,44912"
//         ],
//         "tT": [],
//         "dT": [
//             "614.000,277.000,BUTTON,44806"
//         ],
//         "sT": [],
//         "fT": [
//             "442.000,241.000,42491",
//             "442.000,242.000,42483",
//             "441.000,242.000,42467",
//             "440.000,243.000,42443",
//             "439.000,244.000,42435",
//             "438.000,244.000,42411",
//             "437.000,244.000,42403",
//             "436.000,244.000,42333",
//             "436.000,245.000,42309",
//             "435.000,245.000,42277",
//             "435.000,246.000,42261",
//             "434.000,247.000,42239",
//             "434.000,248.000,42231",
//             "433.000,248.000,42223",
//             "432.000,248.000,42215",
//             "432.000,249.000,42207",
//             "431.000,250.000,42191",
//             "430.000,251.000,42175",
//             "429.000,251.000,42167",
//             "429.000,252.000,42151",
//             "428.000,252.000,42143",
//             "428.000,253.000,42121",
//             "428.000,254.000,42105",
//             "427.000,254.000,42090",
//             "427.000,255.000,42073",
//             "426.000,255.000,42058",
//             "425.000,256.000,42049",
//             "424.000,257.000,42041",
//             "421.000,259.000,42033",
//             "418.000,261.000,42025",
//             "416.000,264.000,42017",
//             "413.000,266.000,42009",
//             "411.000,268.000,42001",
//             "409.000,270.000,41993",
//             "408.000,271.000,41987",
//             "407.000,272.000,41979",
//             "407.000,274.000,41971",
//             "407.000,275.000,41963",
//             "407.000,276.000,41955",
//             "408.000,277.000,41939",
//             "408.000,278.000,41931",
//             "409.000,279.000,41875",
//             "410.000,279.000,41860",
//             "410.000,280.000,41851",
//             "411.000,280.000,41789",
//             "414.000,280.000,41781",
//             "420.000,278.000,41773",
//             "430.000,277.000,41765",
//             "445.000,273.000,41758",
//             "847.000,158.000,19527",
//             "847.000,159.000,19479",
//             "847.000,160.000,19449",
//             "847.000,161.000,19401",
//             "847.000,162.000,19283",
//             "847.000,163.000,19142",
//             "847.000,163.000,19141",
//             "1035.000,353.000,2431",
//             "1230.000,388.000,1030",
//             "1232.000,388.000,959",
//             "1238.000,388.000,800"
//         ],
//         "inputs": [],
//         "buttons": [
//             {
//                 "buttonName": "yodaSmsCodeBtn",
//                 "touchPoint": "{614,277}",
//                 "touchPosition": "{58.2,43.7}",
//                 "touchTimeStamp": cur_ts
//             }
//         ]
//     },
//             c1 = {
//     "v": "2.2.2",
//     "ts": cur_ts,
//     "cts": cur_ts,
//     "brVD": [
//         1366,
//         625
//     ],
//     "brR": [
//         [
//             1366,
//             768
//         ],
//         [
//             1366,
//             728
//         ],
//         24,
//         24
//     ],
//     "bI": [
//         "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode="+rc+"&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
//         "https://account.dianping.com/"
//     ],
//     "aM": "",
//     "broP": [
//         "PDF Viewer",
//         "Chrome PDF Viewer",
//         "Chromium PDF Viewer",
//         "Microsoft Edge PDF Viewer",
//         "WebKit built-in PDF"
//     ],
//     "cV": "c890550f51d11894720deb344e0990bf",
//     "wV": "WebKit",
//     "wR": "WebKit WebGL",
//     "wVU": "Google Inc. (Intel)",
//     "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
//     "aF": "",
//     "wI": 1272331532,
//     "fL": "a48c29a4460cc3eaa21055966ee72a4f",
//     "mT": [
//         "531.000,320.000,38383",
//         "531.000,319.000,38359",
//         "532.000,319.000,38343",
//         "532.000,318.000,38249",
//         "532.000,317.000,38241",
//         "532.000,316.000,38233",
//         "532.000,315.000,38225",
//         "532.000,313.000,38217",
//         "533.000,310.000,38209",
//         "533.000,307.000,38201",
//         "535.000,304.000,38193",
//         "535.000,301.000,38185",
//         "537.000,297.000,38177",
//         "538.000,294.000,38169",
//         "538.000,289.000,38162",
//         "539.000,287.000,38153",
//         "539.000,284.000,38145",
//         "539.000,282.000,38137",
//         "539.000,280.000,38129",
//         "539.000,278.000,38121",
//         "539.000,277.000,38099",
//         "539.000,276.000,34061",
//         "540.000,277.000,34021",
//         "541.000,278.000,34013",
//         "542.000,278.000,33997",
//         "543.000,279.000,33989",
//         "544.000,279.000,33981",
//         "545.000,280.000,33965",
//         "546.000,280.000,33957",
//         "547.000,281.000,33941",
//         "548.000,281.000,33935",
//         "549.000,282.000,33919",
//         "550.000,282.000,33912",
//         "550.000,283.000,33903",
//         "551.000,283.000,33887",
//         "552.000,284.000,33879",
//         "603.000,293.000,33807",
//         "617.000,296.000,33799",
//         "628.000,298.000,33795",
//         "636.000,301.000,33785",
//         "640.000,302.000,33779",
//         "391.000,240.000,22573",
//         "390.000,240.000,22565",
//         "390.000,239.000,22557",
//         "390.000,238.000,22543",
//         "390.000,237.000,22533",
//         "391.000,237.000,22523",
//         "392.000,237.000,22510",
//         "392.000,236.000,22494",
//         "1114.000,156.000,21539",
//         "1113.000,156.000,21523",
//         "1112.000,156.000,21445",
//         "1111.000,156.000,21421",
//         "1110.000,156.000,21405",
//         "1109.000,156.000,21397",
//         "1108.000,156.000,21383",
//         "1107.000,156.000,21368",
//         "1106.000,156.000,21351",
//         "1105.000,156.000,21327",
//         "1105.000,155.000,21319"
//     ],
//     "kT": [
//         "1,INPUT,37415",
//         "6,INPUT,37270",
//         "3,INPUT,36667",
//         "4,INPUT,36134",
//         "1,INPUT,35378",
//         "5,INPUT,35213",
//         "{,INPUT,16700",
//         "{,INPUT,3990"
//     ],
//     "aT": [
//         "531.000,320.000,BUTTON,38689",
//         "539.000,276.000,INPUT,34212",
//         "499.000,274.000,INPUT,18412",
//         "685.000,274.000,INPUT,10735",
//         "784.000,276.000,BUTTON,8891",
//         "637.000,272.000,INPUT,1391"
//     ],
//     "tT": [],
//     "dT": [
//         "531.000,320.000,BUTTON,38620",
//         "539.000,276.000,INPUT,34105",
//         "499.000,274.000,INPUT,18310",
//         "685.000,274.000,INPUT,10642",
//         "784.000,276.000,BUTTON,8820",
//         "637.000,272.000,INPUT,1314"
//     ],
//     "sT": [],
//     "fT": [
//         "794.000,273.000,2843",
//         "792.000,274.000,2827",
//         "790.000,276.000,2819",
//         "789.000,277.000,1743",
//         "789.000,276.000,1726",
//         "790.000,276.000,1710",
//         "790.000,275.000,1693",
//         "792.000,272.000,1677",
//         "794.000,270.000,1660",
//         "795.000,268.000,1560",
//         "794.000,268.000,1543",
//         "793.000,268.000,1526",
//         "789.000,268.000,1510",
//         "776.000,270.000,1493",
//         "761.000,270.000,1476",
//         "740.000,270.000,1460",
//         "709.000,270.000,1443",
//         "670.000,270.000,1426",
//         "643.000,271.000,1410",
//         "637.000,272.000,1260",
//         "637.000,271.000,1243",
//         "639.000,270.000,1226",
//         "640.000,269.000,1210",
//         "640.000,268.000,1193",
//         "641.000,268.000,1171",
//         "641.000,267.000,1059",
//         "642.000,267.000,1029",
//         "642.000,266.000,1010",
//         "643.000,265.000,993",
//         "643.000,264.000,977",
//         "644.000,262.000,960",
//         "645.000,259.000,943",
//         "646.000,254.000,926",
//         "646.000,251.000,910",
//         "646.000,250.000,893",
//         "646.000,249.000,877",
//         "646.000,247.000,860",
//         "646.000,245.000,843",
//         "645.000,244.000,826",
//         "645.000,243.000,810",
//         "644.000,241.000,793",
//         "643.000,240.000,776",
//         "641.000,239.000,760",
//         "639.000,238.000,743",
//         "637.000,237.000,726",
//         "636.000,236.000,710",
//         "634.000,235.000,693",
//         "631.000,235.000,676",
//         "626.000,234.000,660",
//         "618.000,233.000,643",
//         "613.000,232.000,626",
//         "610.000,231.000,610",
//         "609.000,231.000,596",
//         "608.000,230.000,576",
//         "607.000,230.000,560",
//         "606.000,229.000,543",
//         "605.000,229.000,531",
//         "605.000,228.000,523",
//         "604.000,228.000,501",
//         "603.000,227.000,484"
//     ],
//     "inputs": [
//         {
//             "inputName": "yodaVerification",
//             "editStartedTimeStamp": cur_ts - 3493,
//             "keyboardEvent": "0-6-1-1517|9258|6591|7779|1445",
//             "editFinishedTimeStamp": cur_ts
//         }
//     ],
//     "buttons": [
//         {
//             "buttonName": "yodaSubmit",
//             "touchPoint": "{531,320}",
//             "touchPosition": "{57.7,60}",
//             "touchTimeStamp": cur_ts
//         },
//         {
//                 "buttonName": "yodaSmsCodeBtn",
//                 "touchPoint": "{614,277}",
//                 "touchPosition": "{58.2,43.7}",
//                 "touchTimeStamp": cur_ts0
//             }
//     ]
// };
//             if(enc_type == 0){
//                 c = c0;
//             }else if(enc_type == 1){
//                 c = c1;
//             }
//             // return window.OscillatorNode && window.Float32Array && h.default.start(),
//             // setTimeout(function() {
//             //     i.default.getFonts(c)
//             // }, 0),
//             // c.aM || (o.default.listenwd(function(e) {
//             //     e && 0 < e.length && (c.aM = e)
//             // }),
//             // c.aM || (c.aM = "")),
//             Object.defineProperty(c, "_a", {
//                 get: function() {
//                     for (var e = "", t = 0, r = 3; t < 6; ) {
//                         var n = "";
//                         switch (r) {
//                         case 47:
//                             n = "e",
//                             r = 78;
//                             break;
//                         case 3:
//                             n = "_",
//                             r = 9;
//                             break;
//                         case 78:
//                             n = "n";
//                             break;
//                         case 9:
//                             n = "t",
//                             r = 36;
//                             break;
//                         case 36:
//                             n = "o",
//                             r = 5;
//                             break;
//                         default:
//                             r = 47,
//                             n = "k"
//                         }
//                         t++,
//                         e += n
//                     }
//                     return e
//                 }
//             })
//             var res = function() {
//                 c.cts = Date.now();
//                 var e = {
//         "ts": cur_ts,
//         "fT": [
//             "657.000,242.000,521161",
//             "659.000,240.000,521153",
//             "662.000,238.000,521147",
//             "665.000,235.000,521142",
//             "678.000,227.000,521119",
//             "683.000,223.000,521107",
//             "690.000,220.000,521102",
//             "697.000,215.000,521091",
//             "704.000,211.000,521083",
//             "712.000,206.000,521075",
//             "718.000,202.000,521067",
//             "724.000,198.000,521059",
//             "728.000,195.000,521051",
//             "732.000,192.000,521046",
//             "414.000,163.000,519209",
//             "413.000,163.000,519177",
//             "412.000,163.000,519161",
//             "411.000,163.000,519137",
//             "410.000,163.000,519097",
//             "409.000,163.000,518941",
//             "410.000,163.000,518909",
//             "410.000,164.000,518901",
//             "411.000,164.000,518877",
//             "412.000,164.000,518869",
//             "412.000,165.000,518861",
//             "413.000,165.000,518853",
//             "414.000,165.000,518848",
//             "414.000,165.000,518848",
//             "414.000,117.000,518215",
//             "411.000,115.000,518207",
//             "406.000,112.000,518199",
//             "401.000,110.000,518193",
//             "396.000,108.000,518185",
//             "390.000,105.000,518177",
//             "384.000,102.000,518169",
//             "378.000,98.000,518161",
//             "372.000,95.000,518153",
//             "368.000,93.000,518145",
//             "363.000,90.000,518137",
//             "359.000,87.000,518129",
//             "356.000,85.000,518121",
//             "354.000,84.000,518113",
//             "351.000,83.000,518105",
//             "349.000,81.000,518097",
//             "347.000,80.000,518089",
//             "343.000,79.000,518081",
//             "338.000,76.000,518075",
//             "334.000,74.000,518067",
//             "329.000,72.000,518059",
//             "322.000,68.000,518051",
//             "315.000,65.000,518043",
//             "308.000,61.000,518037",
//             "301.000,56.000,518027",
//             "294.000,52.000,518020",
//             "272.000,38.000,517988",
//             "267.000,33.000,517972",
//             "262.000,30.000,517962",
//             "260.000,27.000,517943",
//             "259.000,26.000,517942",
//             "252.000,19.000,517830"
//         ],
//         "mT": [
//             "631.000,265.000,521531",
//             "632.000,265.000,521493",
//             "633.000,265.000,521453",
//             "634.000,264.000,521391",
//             "635.000,264.000,521383",
//             "635.000,263.000,521367",
//             "636.000,262.000,521351",
//             "637.000,261.000,521343",
//             "637.000,260.000,521335",
//             "637.000,259.000,521327",
//             "638.000,259.000,521319",
//             "638.000,258.000,521311",
//             "639.000,258.000,521280",
//             "639.000,257.000,521273",
//             "640.000,257.000,521257",
//             "640.000,256.000,521249",
//             "641.000,256.000,521241",
//             "641.000,255.000,521233",
//             "642.000,254.000,521225",
//             "643.000,253.000,521217",
//             "645.000,252.000,521209",
//             "646.000,251.000,521201",
//             "648.000,250.000,521193",
//             "650.000,249.000,521185",
//             "652.000,247.000,521177",
//             "654.000,245.000,521169"
//         ],
//         "kT": [],
//         "aT": [
//             "631.000,265.000,BUTTON,522125"
//         ],
//         "tT": [],
//         "dT": [
//             "631.000,265.000,BUTTON,521950"
//         ],
//         "sT": [],
//         "inputs": [],
//         "buttons": [
//             {
//                 "buttonName": "yodaSmsCodeBtn",
//                 "touchPoint": "{631,265}",
//                 "touchPosition": "{74.7,81.2}",
//                 "touchTimeStamp": cur_ts
//             }
//         ]
//     }//f.default.data()
//                   , t = e.mT
//                   , r = e.kT
//                   , n = e.aT
//                   , o = e.tT
//                   , i = e.dT
//                   , a = e.sT
//                   , u = e.fT
//                   , s = e.inputs
//                   , l = e.buttons
//                   , e = undefined;//h.default.audioData().data;
//                 return c.mT = t,
//                 c.kT = r,
//                 c.aT = n,
//                 c.tT = o,
//                 c.dT = i,
//                 c.sT = a,
//                 c.fT = u,
//                 c.inputs = s,
//                 c.buttons = l,
//                 c.aF = void 0 !== e ? (0,
//                 d.hex_md5)(e) : "",
//                 function(e) {
//                     try {
//                         return btoa(encodeURIComponent(JSON.stringify(e)))
//                     } catch (e) {
//                         throw new Error("btoa 异常")
//                     }
//                 }(c)
//             }
//             return res();
//
//         //     {
//         //         reload: c.reload,
//         //         _a: c._a
//         //     }
//         // }
//             // f.default.event();
//                // return "JTdCJTIydiUyMiUzQSUyMjIuMi4yJTIyJTJDJTIydHMlMjIlM0ExNjgxODg1MzYyOTk5JTJDJTIyY3RzJTIyJTNBMTY4MTg4NzYyMDM4MyUyQyUyMmJyVkQlMjIlM0ElNUIxMzY2JTJDNjI1JTVEJTJDJTIyYnJSJTIyJTNBJTVCJTVCMTM2NiUyQzc2OCU1RCUyQyU1QjEzNjYlMkM3MjglNUQlMkMyNCUyQzI0JTVEJTJDJTIyYkklMjIlM0ElNUIlMjJodHRwcyUzQSUyRiUyRnZlcmlmeS5tZWl0dWFuLmNvbSUyRnYyJTJGd2ViJTJGZ2VuZXJhbF9wYWdlJTNGYWN0aW9uJTNEbG9naW52ZXJpZmljYXRpb24lMjZyZXF1ZXN0Q29kZSUzRDM5ODczMGYwNjdkMzQyMmM4MTVjZmMwNGU5OWI0ZjM4JTI2c3VjY0NhbGxiYWNrVXJsJTNEaHR0cHMlMjUzQSUyNTJGJTI1MkZhY2NvdW50LmRpYW5waW5nLmNvbSUyNTJGcGNsb2dpbiUyNTNGcmVkaXIlMjUzRGh0dHBzJTI1MjUzQSUyNTI1MkYlMjUyNTJGd3d3LmRpYW5waW5nLmNvbSUyNTI1MkZjaXR5bGlzdCUyMiUyQyUyMmh0dHBzJTNBJTJGJTJGYWNjb3VudC5kaWFucGluZy5jb20lMkYlMjIlNUQlMkMlMjJhTSUyMiUzQSUyMiUyMiUyQyUyMmJyb1AlMjIlM0ElNUIlMjJQREYlMjBWaWV3ZXIlMjIlMkMlMjJDaHJvbWUlMjBQREYlMjBWaWV3ZXIlMjIlMkMlMjJDaHJvbWl1bSUyMFBERiUyMFZpZXdlciUyMiUyQyUyMk1pY3Jvc29mdCUyMEVkZ2UlMjBQREYlMjBWaWV3ZXIlMjIlMkMlMjJXZWJLaXQlMjBidWlsdC1pbiUyMFBERiUyMiU1RCUyQyUyMmNWJTIyJTNBJTIyYzg5MDU1MGY1MWQxMTg5NDcyMGRlYjM0NGUwOTkwYmYlMjIlMkMlMjJ3ViUyMiUzQSUyMldlYktpdCUyMiUyQyUyMndSJTIyJTNBJTIyV2ViS2l0JTIwV2ViR0wlMjIlMkMlMjJ3VlUlMjIlM0ElMjJHb29nbGUlMjBJbmMuJTIwKEludGVsKSUyMiUyQyUyMndSVSUyMiUzQSUyMkFOR0xFJTIwKEludGVsJTJDJTIwSW50ZWwoUiklMjBIRCUyMEdyYXBoaWNzJTIwNjIwJTIwRGlyZWN0M0QxMSUyMHZzXzVfMCUyMHBzXzVfMCUyQyUyMEQzRDExKSUyMiUyQyUyMmFGJTIyJTNBJTIyJTIyJTJDJTIyd0klMjIlM0ExMjcyMzMxNTMyJTJDJTIyZkwlMjIlM0ElMjJhNDhjMjlhNDQ2MGNjM2VhYTIxMDU1OTY2ZWU3MmE0ZiUyMiUyQyUyMm1UJTIyJTNBJTVCJTIyNjQ3LjAwMCUyQzI3Ni4wMDAlMkMxNzU0NzElMjIlMkMlMjI2NDguMDAwJTJDMjc3LjAwMCUyQzE3NTQ0OCUyMiUyQyUyMjY0OS4wMDAlMkMyNzcuMDAwJTJDMTc1NDMxJTIyJTJDJTIyNjQ5LjAwMCUyQzI3OC4wMDAlMkMxNzU0MDclMjIlMkMlMjI2NTAuMDAwJTJDMjc4LjAwMCUyQzE3NTM5MSUyMiUyQyUyMjY1MC4wMDAlMkMyNzkuMDAwJTJDMTc1Mzc1JTIyJTJDJTIyNjUxLjAwMCUyQzI3OS4wMDAlMkMxNzUzNjglMjIlMkMlMjI2NTEuMDAwJTJDMjgwLjAwMCUyQzE3NTM2MCUyMiUyQyUyMjY1Mi4wMDAlMkMyODAuMDAwJTJDMTc1MzUzJTIyJTJDJTIyNjUzLjAwMCUyQzI4MS4wMDAlMkMxNzUzMzclMjIlMkMlMjI2NTQuMDAwJTJDMjgyLjAwMCUyQzE3NTMwNSUyMiUyQyUyMjY1NS4wMDAlMkMyODIuMDAwJTJDMTc1Mjk4JTIyJTJDJTIyNjU2LjAwMCUyQzI4My4wMDAlMkMxNzUyODIlMjIlMkMlMjI2NTcuMDAwJTJDMjg1LjAwMCUyQzE3NTI3MyUyMiUyQyUyMjY1OS4wMDAlMkMyODYuMDAwJTJDMTc1MjY1JTIyJTJDJTIyNjYwLjAwMCUyQzI4OC4wMDAlMkMxNzUyNTglMjIlMkMlMjI2NjIuMDAwJTJDMjg5LjAwMCUyQzE3NTI0OSUyMiUyQyUyMjY2NC4wMDAlMkMyOTEuMDAwJTJDMTc1MjQyJTIyJTJDJTIyNjY1LjAwMCUyQzI5My4wMDAlMkMxNzUyMzMlMjIlMkMlMjI2NjYuMDAwJTJDMjk0LjAwMCUyQzE3NTIyNSUyMiUyQyUyMjY2Ny4wMDAlMkMyOTUuMDAwJTJDMTc1MjE5JTIyJTJDJTIyNjY3LjAwMCUyQzI5Ni4wMDAlMkMxNzUyMTQlMjIlMkMlMjI2NjguMDAwJTJDMjk3LjAwMCUyQzE3NTIwMyUyMiUyQyUyMjY2OS4wMDAlMkMyOTguMDAwJTJDMTc1MTg3JTIyJTJDJTIyNjcxLjAwMCUyQzI5OS4wMDAlMkMxNzUxODElMjIlMkMlMjI2NzIuMDAwJTJDMzAxLjAwMCUyQzE3NTE3MSUyMiUyQyUyMjY3NS4wMDAlMkMzMDIuMDAwJTJDMTc1MTY0JTIyJTJDJTIyNjgyLjAwMCUyQzMwNS4wMDAlMkMxNzUxNTUlMjIlMkMlMjI2OTMuMDAwJTJDMzA5LjAwMCUyQzE3NTE0OCUyMiUyQyUyMjcwNi4wMDAlMkMzMTIuMDAwJTJDMTc1MTM5JTIyJTJDJTIyNzI3LjAwMCUyQzMxNy4wMDAlMkMxNzUxMzIlMjIlMkMlMjI3NTAuMDAwJTJDMzIwLjAwMCUyQzE3NTEyMyUyMiUyQyUyMjc3NC4wMDAlMkMzMjAuMDAwJTJDMTc1MTE2JTIyJTJDJTIyNzk2LjAwMCUyQzMyMC4wMDAlMkMxNzUxMDclMjIlMkMlMjI4MTguMDAwJTJDMzIwLjAwMCUyQzE3NTA5OSUyMiUyQyUyMjgzOC4wMDAlMkMzMjAuMDAwJTJDMTc1MDk3JTIyJTJDJTIyODUxLjAwMCUyQzMxOS4wMDAlMkMxNzUwODYlMjIlMkMlMjI4NjMuMDAwJTJDMzE3LjAwMCUyQzE3NTA4MSUyMiUyQyUyMjg3My4wMDAlMkMzMTYuMDAwJTJDMTc1MDY5JTIyJTJDJTIyODc5LjAwMCUyQzMxNS4wMDAlMkMxNzUwNjElMjIlMkMlMjI4ODEuMDAwJTJDMzE1LjAwMCUyQzE3NTA1NSUyMiUyQyUyMjg4MS4wMDAlMkMzMTUuMDAwJTJDMTc1MDU1JTIyJTJDJTIyMjk0LjAwMCUyQzI4MC4wMDAlMkMxNzMyMDElMjIlMkMlMjIyOTQuMDAwJTJDMjgxLjAwMCUyQzE3MzE5NCUyMiUyQyUyMjI5My4wMDAlMkMyODEuMDAwJTJDMTczMTg1JTIyJTJDJTIyMjkyLjAwMCUyQzI4MS4wMDAlMkMxNzMxNzklMjIlMkMlMjIyOTEuMDAwJTJDMjgxLjAwMCUyQzE3MzE3MCUyMiUyQyUyMjI5MC4wMDAlMkMyODEuMDAwJTJDMTczMTU0JTIyJTJDJTIyMjg5LjAwMCUyQzI4MS4wMDAlMkMxNzMwOTElMjIlMkMlMjIyODkuMDAwJTJDMjgyLjAwMCUyQzE3MzA4MyUyMiUyQyUyMjI4OC4wMDAlMkMyODIuMDAwJTJDMTczMDc1JTIyJTJDJTIyMjg3LjAwMCUyQzI4NC4wMDAlMkMxNzMwNTklMjIlMkMlMjIyODcuMDAwJTJDMjg1LjAwMCUyQzE3MzAwNSUyMiUyQyUyMjI4OC4wMDAlMkMyODUuMDAwJTJDMTcyOTgxJTIyJTJDJTIyMjg5LjAwMCUyQzI4Ni4wMDAlMkMxNzI5NzMlMjIlMkMlMjIyOTAuMDAwJTJDMjg2LjAwMCUyQzE3Mjk2NSUyMiUyQyUyMjI5Mi4wMDAlMkMyODcuMDAwJTJDMTcyOTU3JTIyJTJDJTIyMjkzLjAwMCUyQzI4Ny4wMDAlMkMxNzI5NTAlMjIlMkMlMjIyOTMuMDAwJTJDMjg3LjAwMCUyQzE3Mjk1MCUyMiUyQyUyMjU1Ny4wMDAlMkMzNDYuMDAwJTJDMTM1NTElMjIlNUQlMkMlMjJrVCUyMiUzQSU1QiUyMiU3QiUyQ0JPRFklMkMxOTExJTIyJTVEJTJDJTIyYVQlMjIlM0ElNUIlMjI2NDcuMDAwJTJDMjc2LjAwMCUyQ0JVVFRPTiUyQzE3NTYyMCUyMiUyQyUyMjYxMC4wMDAlMkMyNzguMDAwJTJDQlVUVE9OJTJDNzUwOCUyMiU1RCUyQyUyMnRUJTIyJTNBJTVCJTVEJTJDJTIyZFQlMjIlM0ElNUIlMjI2NDcuMDAwJTJDMjc2LjAwMCUyQ0JVVFRPTiUyQzE3NTUzMyUyMiUyQyUyMjYxMC4wMDAlMkMyNzguMDAwJTJDQlVUVE9OJTJDNzQyNCUyMiU1RCUyQyUyMnNUJTIyJTNBJTVCJTVEJTJDJTIyZlQlMjIlM0ElNUIlMjI2NDEuMDAwJTJDMjkwLjAwMCUyQzU4NTUlMjIlMkMlMjI2NDQuMDAwJTJDMjkxLjAwMCUyQzU4NDQlMjIlMkMlMjI2NDcuMDAwJTJDMjkzLjAwMCUyQzU4MzglMjIlMkMlMjI2NTEuMDAwJTJDMjkzLjAwMCUyQzU4MzAlMjIlMkMlMjI2NTQuMDAwJTJDMjk1LjAwMCUyQzU4MjIlMjIlMkMlMjI2NTcuMDAwJTJDMjk2LjAwMCUyQzU4MTQlMjIlMkMlMjI2NjEuMDAwJTJDMjk3LjAwMCUyQzU4MDYlMjIlMkMlMjI2NjMuMDAwJTJDMjk4LjAwMCUyQzU3OTglMjIlMkMlMjI2NjUuMDAwJTJDMjk5LjAwMCUyQzU3OTAlMjIlMkMlMjI2NjcuMDAwJTJDMjk5LjAwMCUyQzU3ODIlMjIlMkMlMjI2NjguMDAwJTJDMjk5LjAwMCUyQzU3NzQlMjIlMkMlMjI2NjkuMDAwJTJDMjk5LjAwMCUyQzU3NjYlMjIlMkMlMjI2NzAuMDAwJTJDMjk5LjAwMCUyQzU3NTglMjIlMkMlMjI2NzEuMDAwJTJDMjk5LjAwMCUyQzU3NTAlMjIlMkMlMjI2NzIuMDAwJTJDMjk5LjAwMCUyQzU3NDIlMjIlMkMlMjI2NzMuMDAwJTJDMjk5LjAwMCUyQzU3MTIlMjIlMkMlMjI2NzQuMDAwJTJDMjk5LjAwMCUyQzU2ODAlMjIlMkMlMjI2NzUuMDAwJTJDMjk5LjAwMCUyQzU2NzIlMjIlMkMlMjI2NzguMDAwJTJDMjk5LjAwMCUyQzU2NjQlMjIlMkMlMjI2ODMuMDAwJTJDMjk5LjAwMCUyQzU2NTYlMjIlMkMlMjI2OTQuMDAwJTJDMjk3LjAwMCUyQzU2NDglMjIlMkMlMjI3MTIuMDAwJTJDMjk1LjAwMCUyQzU2NDAlMjIlMkMlMjI3NDAuMDAwJTJDMjkwLjAwMCUyQzU2MzIlMjIlMkMlMjI3NjkuMDAwJTJDMjg4LjAwMCUyQzU2MjQlMjIlMkMlMjI3OTguMDAwJTJDMjg0LjAwMCUyQzU2MTYlMjIlMkMlMjI4MjcuMDAwJTJDMjc5LjAwMCUyQzU2MDglMjIlMkMlMjI4NTIuMDAwJTJDMjc1LjAwMCUyQzU2MDAlMjIlMkMlMjI4NzguMDAwJTJDMjcxLjAwMCUyQzU1OTIlMjIlMkMlMjI5MDcuMDAwJTJDMjY3LjAwMCUyQzU1ODglMjIlMkMlMjI5MjcuMDAwJTJDMjYyLjAwMCUyQzU1NzglMjIlMkMlMjI5MzYuMDAwJTJDMjU2LjAwMCUyQzU1NzIlMjIlMkMlMjI5MzYuMDAwJTJDMjU2LjAwMCUyQzU1NzIlMjIlMkMlMjIxMDc2LjAwMCUyQzM1MC4wMDAlMkM5MTglMjIlMkMlMjIxMDc4LjAwMCUyQzM1MS4wMDAlMkM5MDElMjIlMkMlMjIxMDgxLjAwMCUyQzM1NC4wMDAlMkM4ODUlMjIlMkMlMjIxMDg3LjAwMCUyQzM1OC4wMDAlMkM4NjglMjIlMkMlMjIxMDk4LjAwMCUyQzM2My4wMDAlMkM4NTElMjIlMkMlMjIxMTA5LjAwMCUyQzM2Ny4wMDAlMkM4MzUlMjIlMkMlMjIxMTE4LjAwMCUyQzM3MS4wMDAlMkM4MTglMjIlMkMlMjIxMTM1LjAwMCUyQzM3Ni4wMDAlMkM4MDElMjIlMkMlMjIxMTQ3LjAwMCUyQzM4MS4wMDAlMkM3ODUlMjIlMkMlMjIxMTU3LjAwMCUyQzM4NS4wMDAlMkM3NjglMjIlMkMlMjIxMTY2LjAwMCUyQzM4OS4wMDAlMkM3NTElMjIlMkMlMjIxMTc1LjAwMCUyQzM5MS4wMDAlMkM3MzUlMjIlMkMlMjIxMTgxLjAwMCUyQzM5My4wMDAlMkM3MTglMjIlMkMlMjIxMTg1LjAwMCUyQzM5NC4wMDAlMkM3MDElMjIlMkMlMjIxMTg3LjAwMCUyQzM5Ny4wMDAlMkM2ODUlMjIlMkMlMjIxMTg4LjAwMCUyQzM5OS4wMDAlMkM2NjglMjIlMkMlMjIxMTg5LjAwMCUyQzQwMi4wMDAlMkM2NTElMjIlMkMlMjIxMTg5LjAwMCUyQzQwNC4wMDAlMkM2MzUlMjIlMkMlMjIxMTg5LjAwMCUyQzQwNi4wMDAlMkM2MTglMjIlMkMlMjIxMTg4LjAwMCUyQzQwNi4wMDAlMkM2MDElMjIlMkMlMjIxMTg3LjAwMCUyQzQwNy4wMDAlMkM1ODUlMjIlMkMlMjIxMTgzLjAwMCUyQzQwOS4wMDAlMkM1NjglMjIlMkMlMjIxMTc4LjAwMCUyQzQxMi4wMDAlMkM1NTElMjIlMkMlMjIxMTcyLjAwMCUyQzQxNS4wMDAlMkM1MzUlMjIlMkMlMjIxMTY4LjAwMCUyQzQxOS4wMDAlMkM1MjQlMjIlMkMlMjIxMTYxLjAwMCUyQzQyNy4wMDAlMkM0MTUlMjIlMkMlMjIxMTQ4LjAwMCUyQzQwNC4wMDAlMkMzMjIlMjIlMkMlMjIxMTQ5LjAwMCUyQzQwMi4wMDAlMkMyNjclMjIlNUQlMkMlMjJpbnB1dHMlMjIlM0ElNUIlN0IlMjJpbnB1dE5hbWUlMjIlM0ElMjJ5b2RhVmVyaWZpY2F0aW9uJTIyJTJDJTIyZWRpdFN0YXJ0ZWRUaW1lU3RhbXAlMjIlM0ExNjgxODg1NTM4NDkyJTJDJTIya2V5Ym9hcmRFdmVudCUyMiUzQSUyMjAtMC0wLTAlMjIlMkMlMjJlZGl0RmluaXNoZWRUaW1lU3RhbXAlMjIlM0ExNjgxODg1NTM4NTU5JTdEJTVEJTJDJTIyYnV0dG9ucyUyMiUzQSU1QiU3QiUyMmJ1dHRvbk5hbWUlMjIlM0ElMjJ5b2RhU21zQ29kZUJ0biUyMiUyQyUyMnRvdWNoUG9pbnQlMjIlM0ElMjIlN0I2NDclMkMyNzYlN0QlMjIlMkMlMjJ0b3VjaFBvc2l0aW9uJTIyJTNBJTIyJTdCOTAuMiUyQzQ2LjglN0QlMjIlMkMlMjJ0b3VjaFRpbWVTdGFtcCUyMiUzQTE2ODE4ODU1Mzg1ODYlN0QlNUQlN0Q=";
//             }
//     };
//
//     // c.reload = function() {
//     //             c.cts = Date.now();
//     //             var e = f.default.data()
//     //               , t = e.mT
//     //               , r = e.kT
//     //               , n = e.aT
//     //               , o = e.tT
//     //               , i = e.dT
//     //               , a = e.sT
//     //               , u = e.fT
//     //               , s = e.inputs
//     //               , l = e.buttons
//     //               , e = h.default.audioData().data;
//     //             return c.mT = t,
//     //             c.kT = r,
//     //             c.aT = n,
//     //             c.tT = o,
//     //             c.dT = i,
//     //             c.sT = a,
//     //             c.fT = u,
//     //             c.inputs = s,
//     //             c.buttons = l,
//     //             c.aF = void 0 !== e ? (0,
//     //             d.hex_md5)(e) : "",
//     //             function(e) {
//     //                 try {
//     //                     return window.btoa(encodeURIComponent(JSON.stringify(e)))
//     //                 } catch (e) {
//     //                     throw new Error("btoa 异常")
//     //                 }
//     //             }(c)
//     //         }
//     var o = {
//         default:{
//
//             Kaito: function(e, t) {
//                 function o(e, t) {
//             var r, n = e.length, o = n >> 2;
//             0 != (3 & n) && ++o,
//             t ? (r = new Array(o + 1))[o] = n : r = new Array(o);
//             for (var i = 0; i < n; ++i)
//                 r[i >> 2] |= e.charCodeAt(i) << ((3 & i) << 3);
//             return r
//         }
//                 function n(e) {
//             if (/^[\x00-\x7f]*$/.test(e))
//                 return e;
//             for (var t = [], r = e.length, n = 0, o = 0; n < r; ++n,
//             ++o) {
//                 var i, a = e.charCodeAt(n);
//                 a < 128 ? t[o] = e.charAt(n) : a < 2048 ? t[o] = String.fromCharCode(192 | a >> 6, 128 | 63 & a) : a < 55296 || 57343 < a ? t[o] = String.fromCharCode(224 | a >> 12, 128 | a >> 6 & 63, 128 | 63 & a) : n + 1 < r && (i = e.charCodeAt(n + 1),
//                 a < 56320 && 56320 <= i && i <= 57343 && (i = 65536 + ((1023 & a) << 10 | 1023 & i),
//                 t[o] = String.fromCharCode(240 | i >> 18 & 63, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i),
//                 ++n))
//             }
//             return t.join("")
//         }
//                 function r(e, t) {
//             return null == e || 0 === e.length ? e : (e = n(e),
//             t = n(t),
//             function(e, t) {
//                 var r = e.length
//                   , n = r << 2;
//                 if (t) {
//                     var o = e[r - 1];
//                     if (o < (n -= 4) - 3 || n < o)
//                         return null;
//                     n = o
//                 }
//                 for (var i = 0; i < r; i++)
//                     e[i] = String.fromCharCode(255 & e[i], e[i] >>> 8 & 255, e[i] >>> 16 & 255, e[i] >>> 24 & 255);
//                 o = e.join("");
//                 if (t)
//                     return o.substring(0, n);
//                 return o
//             }(function(e, t) {
//                 var r, n, o, i, a, u, s = e.length, l = s - 1;
//                 for (n = e[l],
//                 o = 0,
//                 u = 0 | Math.floor(6 + 52 / s); 0 < u; --u) {
//                     for (i = (o = o + 2654435769 & 4294967295) >>> 2 & 3,
//                     a = 0; a < l; ++a)
//                         r = e[a + 1],
//                         n = e[a] = e[a] + ((n >>> 5 ^ r << 2) + (r >>> 3 ^ n << 4) ^ (o ^ r) + (t[3 & a ^ i] ^ n)) & 4294967295;
//                     r = e[0],
//                     n = e[l] = e[l] + ((n >>> 5 ^ r << 2) + (r >>> 3 ^ n << 4) ^ (o ^ r) + (t[3 & l ^ i] ^ n)) & 4294967295
//                 }
//                 return e
//             }(o(e, !0), function(e) {
//                 e.length < 4 && (e.length = 4);
//                 return e
//             }(o(t, !1))), !1))
//         }
//         var s, i = (s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
//         function(e) {
//             var t, r, n, o = r = 0, i = e.length, a = i % 3, u = (i -= a) / 3 << 2;
//             for (0 < a && (u += 4),
//             t = new Array(u); o < i; )
//                 n = e.charCodeAt(o++) << 16 | e.charCodeAt(o++) << 8 | e.charCodeAt(o++),
//                 t[r++] = s[n >> 18] + s[n >> 12 & 63] + s[n >> 6 & 63] + s[63 & n];
//             return 1 == a ? (n = e.charCodeAt(o++),
//             t[r++] = s[n >> 2] + s[(3 & n) << 4] + "==") : 2 == a && (n = e.charCodeAt(o++) << 8 | e.charCodeAt(o++),
//             t[r++] = s[n >> 10] + s[n >> 4 & 63] + s[(15 & n) << 2] + "="),
//             t.join("")
//         }
//         );
//                 var a = {
//                 Kaito: function(e, t) {
//                 return i(r(e, t))
//                 }
//         };
//                 return a.Kaito(e,t)
//             }
//         }
//     };
//     function u(t, e) {
//
//                 if (-1 !== t.indexOf(i._a) || 0 < e.length && -1 !== e.indexOf(i._a))
//                     return "";
//                 var r = i.reload();
//                 r || window.Yoda.CAT.sendLog(t, "jsError", "【url参数处理异常】", "t 为空");
//                 var n = rc;
//                 // var n = function(e) {
//                 //     if (!e)
//                 //         return "";
//                 //     var t, r = e.split("&"), n = "";
//                 //     for (t in r) {
//                 //         var o = r[t];
//                 //         -1 === o.indexOf("request_code") && -1 === o.indexOf("requestCode") || (n = o.substr(o.indexOf("=") + 1))
//                 //     }
//                 //     return n
//                 // }(e);
//                 if (!n)
//                     return "";
//                 n = o.default.Kaito(decodeURIComponent(atob(r)), n);
//                 //n = o.default.Kaito(decodeURIComponent(window.atob(r)), n);
//                 return encodeURIComponent(i._a) + "=" + encodeURIComponent(n)
//
//         }
//     return u(e,t)
// }
// var e = "https://verify.meituan.com/v2/ext_api/loginverification/info?id=4"
// var t = "request_code=398730f067d3422c815cfc04e99b4f38&mobile=&moduleEnable=true&mobileInterCode=86&listIndex=0"
// var rc = '398730f067d3422c815cfc04e99b4f38'
// var cur_ts = (new Date).getTime();
// var window = {
//     location:{
//         href:'https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode=349a62b92fc8413eb46c7dd65bf9c6e4&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist'
//     }
// }
// var babelHelpers = {
//     interopRequireDefault:function(obj) {
//         return obj && obj.__esModule ? obj : {
//             "default": obj
//         }}
// }
// var i = {
//     _a:'_token',
//      reload: function() {
//         var o = function(e) {
//         var r = [];
//         for(var index=0;index<20;index++){
//             r.push({})
//         }
//         r[11] = function(e, t, r) {
//     "use strict";
//     Object.defineProperty(t, "__esModule", {
//         value: !0
//     });
//     function n() {
//         var e = window.navigator.userAgent.indexOf("iPhone")
//           , t = window.navigator.userAgent.indexOf("TitansX");
//         if (0 < e || 0 < t)
//             return "";
//         var r = document.createElement("canvas")
//           , n = null;
//         try {
//             n = r.getContext("webgl") || r.getContext("experimental-webgl")
//         } catch (e) {}
//         return n = n || null
//     }
//     var g = r(12)
//       , r = {
//         getCanvasFp: function() {
//             var e = []
//               , t = document.createElement("canvas");
//             t.width = 200,
//             t.height = 200,
//             t.style.display = "inline";
//             var r = t.getContext("2d");
//             r.globalCompositeOperation = "multiply",
//             r.font = "30px serif",
//             r.textAlign = "center",
//             r.textBaseline = "middle",
//             r.fillText("😜😂😍", 160, 90),
//             r.fillStyle = "#dd403b",
//             r.beginPath(),
//             r.arc(12, 15, 10, 0, 2 * Math.PI, !0),
//             r.closePath(),
//             r.fill(),
//             r.fillStyle = "#d66500",
//             r.beginPath(),
//             r.arc(50, 30, 30, 0, 2 * Math.PI, !0),
//             r.closePath(),
//             r.fill();
//             var n = r.createLinearGradient(0, 0, 200, 0);
//             n.addColorStop(0, "#F4F4F2"),
//             n.addColorStop(1, "#F5E905"),
//             r.fillStyle = n,
//             r.beginPath(),
//             r.arc(120, 35, 35, 0, 2 * Math.PI, !0),
//             r.closePath(),
//             r.fill();
//             n = r.createRadialGradient(30, 100, 35, 140, 110, 25);
//             n.addColorStop(.1, "#490F44"),
//             n.addColorStop(.5, "white"),
//             n.addColorStop(1, "#FFFFFF"),
//             r.fillStyle = n,
//             r.beginPath(),
//             r.arc(50, 100, 35, 0, 2 * Math.PI, !0),
//             r.fill();
//             n = r.createLinearGradient(0, 0, 200, 0);
//             return n.addColorStop(0, "#A4A3A3"),
//             n.addColorStop(1, "#E10909"),
//             r.fillStyle = n,
//             r.beginPath(),
//             r.arc(145, 145, 50, 0, 2 * Math.PI, !0),
//             r.fill(),
//             r.shadowColor = "#FFD161",
//             r.shadowOffsetX = 3,
//             r.shadowOffsetY = 3,
//             r.shadowBlur = 0,
//             r.fillStyle = "#FFBD00",
//             r.font = "16px xxx",
//             r.strokeText("EAT BETTER LIVE BETTER", 103, 170),
//             r.beginPath(),
//             r.moveTo(10, 10),
//             r.bezierCurveTo(40, 280, 410, 50, 20, 10),
//             r.stroke(),
//             r.beginPath(),
//             r.moveTo(20, 110),
//             r.quadraticCurveTo(180, 120, 170, 10),
//             r.stroke(),
//             t.toDataURL && e.push(t.toDataURL()),
//             e.join("~")
//         },
//         getWebglVendor: function() {
//             var e = n();
//             return e ? e.getParameter(e.VENDOR) : ""
//         },
//         getWebglRenderer: function() {
//             var e = n();
//             return e ? e.getParameter(e.RENDERER) : ""
//         },
//         getFonts: function(e) {
//             var l = ["monospace", "sans-serif", "serif"]
//               , c = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
//             c = (c = c.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])).filter(function(e, t) {
//                 return c.indexOf(e) === t
//             });
//             function f() {
//                 var e = document.createElement("span");
//                 return e.style.position = "absolute",
//                 e.style.left = "-9999px",
//                 e.style.fontSize = "72px",
//                 e.style.fontStyle = "normal",
//                 e.style.fontWeight = "normal",
//                 e.style.letterSpacing = "normal",
//                 e.style.lineBreak = "auto",
//                 e.style.lineHeight = "normal",
//                 e.style.textTransform = "none",
//                 e.style.textAlign = "left",
//                 e.style.textDecoration = "none",
//                 e.style.textShadow = "none",
//                 e.style.whiteSpace = "normal",
//                 e.style.wordBreak = "normal",
//                 e.style.wordSpacing = "normal",
//                 e.textContent = "Eat Better, Live Better",
//                 e
//             }
//             var t = document.getElementsByTagName("body")[0]
//               , o = document.createElement("div")
//               , d = document.createElement("div")
//               , n = {}
//               , i = {}
//               , r = function() {
//                 for (var e = [], t = 0, r = l.length; t < r; t++) {
//                     var n = f();
//                     n.style.fontFamily = l[t],
//                     o.appendChild(n),
//                     e.push(n)
//                 }
//                 return e
//             }();
//             t.appendChild(o);
//             for (var a = 0, u = l.length; a < u; a++)
//                 n[l[a]] = r[a].offsetWidth,
//                 i[l[a]] = r[a].offsetHeight;
//             var s = function() {
//                 for (var e, t, r = {}, n = 0, o = c.length; n < o; n++) {
//                     for (var i = [], a = 0, u = l.length; a < u; a++) {
//                         var s = (e = c[n],
//                         t = l[a],
//                         s = void 0,
//                         (s = f()).style.fontFamily = "'" + e + "'," + t,
//                         s);
//                         d.appendChild(s),
//                         i.push(s)
//                     }
//                     r[c[n]] = i
//                 }
//                 return r
//             }();
//             t.appendChild(d);
//             for (var h = [], p = 0, y = c.length; p < y; p++)
//                 !function(e) {
//                     for (var t = !1, r = 0; r < l.length; r++)
//                         if (t = e[r].offsetWidth !== n[l[r]] || e[r].offsetHeight !== i[l[r]])
//                             return t;
//                     return t
//                 }(s[c[p]]) || h.push(c[p]);
//             t.removeChild(d),
//             t.removeChild(o),
//             e.fL = 0 < h.length ? (0,
//             g.hex_md5)(h.join(",")) : ""
//         },
//         getWebglRendererUnmasked: function() {
//             var e = n();
//             if (e) {
//                 var t = e.getExtension("WEBGL_debug_renderer_info");
//                 if (t)
//                     return e.getParameter(t.UNMASKED_RENDERER_WEBGL)
//             }
//             return ""
//         },
//         getWebglVendorUnmasked: function() {
//             var e = n();
//             if (e) {
//                 var t = e.getExtension("WEBGL_debug_renderer_info");
//                 if (t)
//                     return e.getParameter(t.UNMASKED_VENDOR_WEBGL)
//             }
//             return ""
//         }
//     };
//     t.default = r
// };
//         r[12] = function(e, t) {
//     "use strict";
//     Object.defineProperty(t, "__esModule", {
//         value: !0
//     }),
//     t.hex_md5 = r,
//     t.b64_md5 = function(e) {
//         return b(u(l(e), e.length * a))
//     }
//     ,
//     t.str_md5 = function(e) {
//         return c(u(l(e), e.length * a))
//     }
//     ,
//     t.hex_hmac_md5 = function(e, t) {
//         return g(n(e, t))
//     }
//     ,
//     t.b64_hmac_md5 = function(e, t) {
//         return b(n(e, t))
//     }
//     ,
//     t.str_hmac_md5 = function(e, t) {
//         return c(n(e, t))
//     }
//     ;
//     var o = 0
//       , i = ""
//       , a = 8;
//     function r(e) {
//         return g(u(l(e), e.length * a))
//     }
//     function u(e, t) {
//         e[t >> 5] |= 128 << t % 32,
//         e[14 + (t + 64 >>> 9 << 4)] = t;
//         for (var r = 1732584193, n = -271733879, o = -1732584194, i = 271733878, a = 0; a < e.length; a += 16) {
//             var u = r
//               , s = n
//               , l = o
//               , c = i
//               , r = f(r, n, o, i, e[a + 0], 7, -680876936)
//               , i = f(i, r, n, o, e[a + 1], 12, -389564586)
//               , o = f(o, i, r, n, e[a + 2], 17, 606105819)
//               , n = f(n, o, i, r, e[a + 3], 22, -1044525330);
//             r = f(r, n, o, i, e[a + 4], 7, -176418897),
//             i = f(i, r, n, o, e[a + 5], 12, 1200080426),
//             o = f(o, i, r, n, e[a + 6], 17, -1473231341),
//             n = f(n, o, i, r, e[a + 7], 22, -45705983),
//             r = f(r, n, o, i, e[a + 8], 7, 1770035416),
//             i = f(i, r, n, o, e[a + 9], 12, -1958414417),
//             o = f(o, i, r, n, e[a + 10], 17, -42063),
//             n = f(n, o, i, r, e[a + 11], 22, -1990404162),
//             r = f(r, n, o, i, e[a + 12], 7, 1804603682),
//             i = f(i, r, n, o, e[a + 13], 12, -40341101),
//             o = f(o, i, r, n, e[a + 14], 17, -1502002290),
//             r = d(r, n = f(n, o, i, r, e[a + 15], 22, 1236535329), o, i, e[a + 1], 5, -165796510),
//             i = d(i, r, n, o, e[a + 6], 9, -1069501632),
//             o = d(o, i, r, n, e[a + 11], 14, 643717713),
//             n = d(n, o, i, r, e[a + 0], 20, -373897302),
//             r = d(r, n, o, i, e[a + 5], 5, -701558691),
//             i = d(i, r, n, o, e[a + 10], 9, 38016083),
//             o = d(o, i, r, n, e[a + 15], 14, -660478335),
//             n = d(n, o, i, r, e[a + 4], 20, -405537848),
//             r = d(r, n, o, i, e[a + 9], 5, 568446438),
//             i = d(i, r, n, o, e[a + 14], 9, -1019803690),
//             o = d(o, i, r, n, e[a + 3], 14, -187363961),
//             n = d(n, o, i, r, e[a + 8], 20, 1163531501),
//             r = d(r, n, o, i, e[a + 13], 5, -1444681467),
//             i = d(i, r, n, o, e[a + 2], 9, -51403784),
//             o = d(o, i, r, n, e[a + 7], 14, 1735328473),
//             r = h(r, n = d(n, o, i, r, e[a + 12], 20, -1926607734), o, i, e[a + 5], 4, -378558),
//             i = h(i, r, n, o, e[a + 8], 11, -2022574463),
//             o = h(o, i, r, n, e[a + 11], 16, 1839030562),
//             n = h(n, o, i, r, e[a + 14], 23, -35309556),
//             r = h(r, n, o, i, e[a + 1], 4, -1530992060),
//             i = h(i, r, n, o, e[a + 4], 11, 1272893353),
//             o = h(o, i, r, n, e[a + 7], 16, -155497632),
//             n = h(n, o, i, r, e[a + 10], 23, -1094730640),
//             r = h(r, n, o, i, e[a + 13], 4, 681279174),
//             i = h(i, r, n, o, e[a + 0], 11, -358537222),
//             o = h(o, i, r, n, e[a + 3], 16, -722521979),
//             n = h(n, o, i, r, e[a + 6], 23, 76029189),
//             r = h(r, n, o, i, e[a + 9], 4, -640364487),
//             i = h(i, r, n, o, e[a + 12], 11, -421815835),
//             o = h(o, i, r, n, e[a + 15], 16, 530742520),
//             r = p(r, n = h(n, o, i, r, e[a + 2], 23, -995338651), o, i, e[a + 0], 6, -198630844),
//             i = p(i, r, n, o, e[a + 7], 10, 1126891415),
//             o = p(o, i, r, n, e[a + 14], 15, -1416354905),
//             n = p(n, o, i, r, e[a + 5], 21, -57434055),
//             r = p(r, n, o, i, e[a + 12], 6, 1700485571),
//             i = p(i, r, n, o, e[a + 3], 10, -1894986606),
//             o = p(o, i, r, n, e[a + 10], 15, -1051523),
//             n = p(n, o, i, r, e[a + 1], 21, -2054922799),
//             r = p(r, n, o, i, e[a + 8], 6, 1873313359),
//             i = p(i, r, n, o, e[a + 15], 10, -30611744),
//             o = p(o, i, r, n, e[a + 6], 15, -1560198380),
//             n = p(n, o, i, r, e[a + 13], 21, 1309151649),
//             r = p(r, n, o, i, e[a + 4], 6, -145523070),
//             i = p(i, r, n, o, e[a + 11], 10, -1120210379),
//             o = p(o, i, r, n, e[a + 2], 15, 718787259),
//             n = p(n, o, i, r, e[a + 9], 21, -343485551),
//             r = y(r, u),
//             n = y(n, s),
//             o = y(o, l),
//             i = y(i, c)
//         }
//         return Array(r, n, o, i)
//     }
//     function s(e, t, r, n, o, i) {
//         return y((i = y(y(t, e), y(n, i))) << (o = o) | i >>> 32 - o, r)
//     }
//     function f(e, t, r, n, o, i, a) {
//         return s(t & r | ~t & n, e, t, o, i, a)
//     }
//     function d(e, t, r, n, o, i, a) {
//         return s(t & n | r & ~n, e, t, o, i, a)
//     }
//     function h(e, t, r, n, o, i, a) {
//         return s(t ^ r ^ n, e, t, o, i, a)
//     }
//     function p(e, t, r, n, o, i, a) {
//         return s(r ^ (t | ~n), e, t, o, i, a)
//     }
//     function n(e, t) {
//         var r = l(e);
//         16 < r.length && (r = u(r, e.length * a));
//         for (var n = Array(16), o = Array(16), i = 0; i < 16; i++)
//             n[i] = 909522486 ^ r[i],
//             o[i] = 1549556828 ^ r[i];
//         t = u(n.concat(l(t)), 512 + t.length * a);
//         return u(o.concat(t), 640)
//     }
//     function y(e, t) {
//         var r = (65535 & e) + (65535 & t);
//         return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
//     }
//     function l(e) {
//         for (var t = Array(), r = (1 << a) - 1, n = 0; n < e.length * a; n += a)
//             t[n >> 5] |= (e.charCodeAt(n / a) & r) << n % 32;
//         return t
//     }
//     function c(e) {
//         for (var t = "", r = (1 << a) - 1, n = 0; n < 32 * e.length; n += a)
//             t += String.fromCharCode(e[n >> 5] >>> n % 32 & r);
//         return t
//     }
//     function g(e) {
//         for (var t = o ? "0123456789ABCDEF" : "0123456789abcdef", r = "", n = 0; n < 4 * e.length; n++)
//             r += t.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(e[n >> 2] >> n % 4 * 8 & 15);
//         return r
//     }
//     function b(e) {
//         for (var t = "", r = 0; r < 4 * e.length; r += 3)
//             for (var n = (e[r >> 2] >> r % 4 * 8 & 255) << 16 | (e[r + 1 >> 2] >> (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >> 2] >> (r + 2) % 4 * 8 & 255, o = 0; o < 4; o++)
//                 8 * r + 6 * o > 32 * e.length ? t += i : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 6 * (3 - o) & 63);
//         return t
//     }
// };
//         r[13] = function(e, t) {
//     "use strict";
//     Object.defineProperty(t, "__esModule", {
//         value: !0
//     });
//     var d = {
//         ts: (new Date).getTime(),
//         fT: [],
//         mT: [],
//         kT: [],
//         aT: [],
//         tT: [],
//         dT: [],
//         sT: [],
//         inputs: [],
//         buttons: []
//     };
//     d.event = function() {
//         var e = function(e) {
//             e = e || window.event;
//             var t = Date.now() - this.ts;
//             this.mT.unshift([e.pageX.toFixed(3), e.pageY.toFixed(3), t].join(",")),
//             60 <= d.mT.length && 0 === d.fT.length && (d.fT = d.mT.splice(0)),
//             60 < this.mT.length && (this.mT = this.mT.slice(0, 60))
//         }
//         .bind(this)
//           , t = function(e) {
//             var t = (e = e || window.event).target || e.srcElement
//               , r = "number" == typeof e.which ? e.which : e.keyCode;
//             r && (e = Date.now() - this.ts,
//             this.kT.unshift([String.fromCharCode(r), t.nodeName, e].join(","))),
//             30 < this.kT.length && (this.kT = this.kT.slice(0, 30))
//         }
//         .bind(this)
//           , r = function(e) {
//             var t = e.touches[0]
//               , r = Date.now() - this.ts;
//             this.tT.unshift([t.pageX.toFixed(3), t.pageY.toFixed(3), e.touches.length, r].join(",")),
//             60 < this.tT.length && (this.tT = this.tT.slice(0, 60))
//         }
//         .bind(this)
//           , n = function(e) {
//             var t = (e = e || window.event).target || e.srcElement
//               , r = Date.now() - this.ts;
//             this.aT.unshift([e.clientX.toFixed(3), e.clientY.toFixed(3), t.nodeName, r].join(",")),
//             30 < this.aT.length && (this.aT = this.aT.slice(0, 30))
//         }
//         .bind(this)
//           , o = function(e) {
//             e = (e = e || window.event).target || e.srcElement;
//             if (e.nodeName && "INPUT" === e.nodeName) {
//                 for (var t = (t = e.name || e.id) || (e.id = "rohr_" + parseInt(1e6 * Math.random())), r = this.inputs.length, n = 0; n < r; n++)
//                     t === this.inputs[0].inputName && (this.inputs.splice(0, 1),
//                     n = 0,
//                     --r);
//                 this.inputs.unshift({
//                     inputName: t,
//                     editStartedTimeStamp: Date.now(),
//                     keyboardEvent: "0-0-0-0"
//                 })
//             }
//         }
//         .bind(this)
//           , i = function(e) {
//             var t = (e = e || window.event).target || e.srcElement;
//             !t.nodeName || "INPUT" !== t.nodeName || (e = this.inputs[0]) && e.keyboardEvent && ((t = e.keyboardEvent.split("-"))[2] = 1,
//             e.keyboardEvent = t.join("-"))
//         }
//         .bind(this)
//           , a = function(e) {
//             var t, r, n = (e = e || window.event).target || e.srcElement;
//             !n.nodeName || "INPUT" !== n.nodeName || (t = this.inputs[0]) && t.keyboardEvent && (r = t.keyboardEvent.split("-"),
//             9 === ("number" == typeof e.which ? e.which : e.keyCode) && (r[0] = parseInt(r[0]) + 1),
//             r[1] = parseInt(r[1]) + 1,
//             n = Date.now(),
//             t.lastTime && (e = t.lastTime,
//             r[3] = r[3] + "|" + parseInt(n - e, 36)),
//             t.lastTime = n,
//             t.keyboardEvent = r.join("-"))
//         }
//         .bind(this)
//           , u = function(e) {
//             var t = (e = e || window.event).target || e.srcElement;
//             !t.nodeName || "INPUT" !== t.nodeName || (e = this.inputs[0]) && e.keyboardEvent && (e.editFinishedTimeStamp = Date.now(),
//             0 != (t = e.keyboardEvent.split("-"))[3] && (t[3] = t[3].substr(2)),
//             delete e.lastTime,
//             e.keyboardEvent = t.join("-"))
//         }
//         .bind(this)
//           , s = function(e) {
//             var t = (e = e || window.event).target || e.srcElement;
//             if (t.nodeName && "BUTTON" === t.nodeName) {
//                 for (var r = (r = t.name || t.id) || (t.id = "rohr_" + parseInt(1e6 * Math.random())), n = this.buttons.length, o = 0; o < n; o++)
//                     r === this.buttons[o].buttonName && (this.buttons.splice(o, 1),
//                     o = 0,
//                     --n);
//                 var i = {
//                     x: (a = (a = e) || window.event).pageX || a.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft),
//                     y: a.pageY || a.clientY + (document.documentElement.scrollTop || document.body.scrollTop)
//                 }
//                   , a = t.clientWidth
//                   , t = t.clientHeight
//                   , a = e.offsetX / a * 1e3
//                   , t = (t - e.offsetY) / t * 1e3;
//                 this.buttons.unshift({
//                     buttonName: r,
//                     touchPoint: "{" + i.x + "," + i.y + "}",
//                     touchPosition: "{" + Math.floor(a) / 10 + "," + Math.floor(t) / 10 + "}",
//                     touchTimeStamp: Date.now()
//                 })
//             }
//         }
//         .bind(this)
//           , l = function(e) {
//             var t = (e = e || window.event).target || e.srcElement
//               , r = Date.now() - this.ts;
//             this.dT.unshift([e.clientX.toFixed(3), e.clientY.toFixed(3), t.nodeName, r].join(",")),
//             60 < this.dT.length && (this.dT = this.dT.slice(0, 60))
//         }
//         .bind(this)
//           , c = function(e) {
//             var t = e.touches[0]
//               , r = e.target || e.srcElement
//               , e = Date.now() - this.ts;
//             this.sT.unshift([t.pageX.toFixed(3), t.pageY.toFixed(3), r.nodeName, e].join(",")),
//             60 < this.sT.length && (this.sT = this.sT.slice(0, 60))
//         }
//         .bind(this);
//         function f(e, t, r, n) {
//             t.addEventListener ? t.addEventListener(e, r, n || !1) : t.attachEvent ? t.attachEvent("on" + e, r) : t[e] = r
//         }
//         f("mousemove", document, e, !0),
//         f("keydown", document, t, !0),
//         f("click", document, n, !0),
//         "ontouchmove"in document && f("touchmove", document, r, !0),
//         f("focus", document, o, !0),
//         f("mouseout", document, i, !0),
//         f("keydown", document, a, !0),
//         f("blur", document, u, !0),
//         "ontouchstart"in document ? f("touchstart", document, s, !0) : f("click", document, s, !0),
//         f("mousedown", document, l, !0),
//         f("touchstart", document, c, !0)
//     }
//     ,
//     d.data = function() {
//         return d
//     }
//     ,
//     t.default = d
// };
//         r[14] = function(e, t) {
//     "use strict";
//     Object.defineProperty(t, "__esModule", {
//         value: !0
//     });
//     var a = {};
//     function u() {
//         try {
//             var e = new (window.AudioContext || window.webkitAudioContext)
//               , t = e.createAnalyser();
//             t.maxDecibels = 100,
//             function(n) {
//                 n.fftSize = 256;
//                 try {
//                     var o, i = new window.Float32Array(n.frequencyBinCount);
//                     i && (o = 0,
//                     function e() {
//                         o++;
//                         var t = requestAnimationFrame(e);
//                         o < 200 && window.cancelAnimationFrame(t),
//                         n.getFloatFrequencyData(i);
//                         var r = i.join(",");
//                         -1 === r.indexOf("-Infinity") && (a.data = r,
//                         window.cancelAnimationFrame(t),
//                         document.removeEventListener("mousedown", u, !1),
//                         document.removeEventListener("touchstart", u, !1))
//                     }())
//                 } catch (e) {
//                     a.data = ""
//                 }
//             }(t);
//             var r = e.createOscillator()
//               , n = e.createGain();
//             n.gain.value = .5,
//             r.connect(n),
//             n.connect(t),
//             r.type = "square",
//             r.frequency.value = 520,
//             n.gain.setValueAtTime(0, e.currentTime),
//             n.gain.linearRampToValueAtTime(1, e.currentTime + .01),
//             r.start(),
//             n.gain.exponentialRampToValueAtTime(.001, e.currentTime + 1),
//             r.stop(e.currentTime + 1)
//         } catch (e) {
//             a.data = ""
//         }
//     }
//     a.start = function() {
//         document.addEventListener("touchstart", u, !1),
//         document.addEventListener("mousedown", u, !1)
//     }
//     ,
//     a.audioData = function() {
//         return a
//     }
//     ,
//     t.default = a
// };
//         r[15] = function(e, t) {
//     "use strict";
//     function i(e, t, r) {
//         t = e.createShader(t);
//         if (e.shaderSource(t, r),
//         e.compileShader(t),
//         e.getShaderParameter(t, e.COMPILE_STATUS))
//             return t;
//         e.deleteShader(t)
//     }
//     function a(e, t, r) {
//         var n = e.createProgram();
//         if (e.attachShader(n, t),
//         e.attachShader(n, r),
//         e.linkProgram(n),
//         e.getProgramParameter(n, e.LINK_STATUS))
//             return e.detachShader(n, t),
//             e.detachShader(n, r),
//             e.deleteShader(t),
//             e.deleteShader(r),
//             n;
//         e.deleteProgram(n)
//     }
//     function u(e, t) {
//         for (var r, n = void 0, o = void 0, i = void 0, a = 3 & e.length, u = e.length - a, n = t, s = 3432918353, l = 461845907, i = 0; i < u; )
//             o = 255 & e.charCodeAt(i) | (255 & e.charCodeAt(++i)) << 8 | (255 & e.charCodeAt(++i)) << 16 | (255 & e.charCodeAt(++i)) << 24,
//             ++i,
//             n = 27492 + (65535 & (r = 5 * (65535 & (n = (n ^= o = (65535 & (o = (o = (65535 & o) * s + (((o >>> 16) * s & 65535) << 16) & 4294967295) << 15 | o >>> 17)) * l + (((o >>> 16) * l & 65535) << 16) & 4294967295) << 13 | n >>> 19)) + ((5 * (n >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (r >>> 16) & 65535) << 16);
//         switch (o = 0,
//         a) {
//         case 3:
//             o ^= (255 & e.charCodeAt(i + 2)) << 16;
//         case 2:
//             o ^= (255 & e.charCodeAt(i + 1)) << 8;
//         case 1:
//             n ^= o = (65535 & (o = (o = (65535 & (o ^= 255 & e.charCodeAt(i))) * s + (((o >>> 16) * s & 65535) << 16) & 4294967295) << 15 | o >>> 17)) * l + (((o >>> 16) * l & 65535) << 16) & 4294967295
//         }
//         return n ^= e.length,
//         n = 2246822507 * (65535 & (n ^= n >>> 16)) + ((2246822507 * (n >>> 16) & 65535) << 16) & 4294967295,
//         n = 3266489909 * (65535 & (n ^= n >>> 13)) + ((3266489909 * (n >>> 16) & 65535) << 16) & 4294967295,
//         (n ^= n >>> 16) >>> 0
//     }
//     Object.defineProperty(t, "__esModule", {
//         value: !0
//     }),
//     t.createShader = i,
//     t.createProgram = a,
//     t.murmurhash332gc = u,
//     t.webglToHash = function() {
//         var e = {
//             vendor: "",
//             renderer: "",
//             hash: ""
//         };
//         try {
//             var t = l();
//             if (null === t)
//                 throw Error("不支持webgl");
//             var r = i(t, t.VERTEX_SHADER, "\n                attribute vec4 a_position;\n                uniform mat4 u_matrix;\n                varying vec4 v_color;\n                void main() {\n                    gl_Position = a_position;\n                    v_color = gl_Position * 0.5 + 0.5;\n                }\n            ")
//               , n = i(t, t.FRAGMENT_SHADER, "\n                precision mediump float;\n                varying vec4 v_color;\n                void main() {\n                    gl_FragColor = v_color; // return reddish-purple\n                }\n            ")
//               , o = a(t, r, n)
//               , r = t.getAttribLocation(o, "a_position")
//               , n = t.createBuffer();
//             t.bindBuffer(t.ARRAY_BUFFER, n);
//             t.bufferData(t.ARRAY_BUFFER, new Float32Array([0, 0, 0, .5, .7, 0]), t.STATIC_DRAW),
//             t.viewport(0, 0, t.canvas.width, t.canvas.height),
//             t.clearColor(0, 0, 0, 0),
//             t.clear(t.COLOR_BUFFER_BIT),
//             t.useProgram(o),
//             t.enableVertexAttribArray(r),
//             t.bindBuffer(t.ARRAY_BUFFER, n);
//             n = t.FLOAT;
//             t.vertexAttribPointer(r, 2, n, !1, 0, 0);
//             n = t.TRIANGLES;
//             0;
//             t.drawArrays(n, 0, 3);
//             n = t.getExtension("WEBGL_debug_renderer_info");
//             e.vendor = t.getParameter(n.UNMASKED_VENDOR_WEBGL) || "",
//             e.renderer = t.getParameter(n.UNMASKED_RENDERER_WEBGL) || "",
//             s && (n = u(s.toDataURL(), 0),
//             e.hash = n || ""),
//             s = null
//         } catch (e) {
//             s = null
//         }
//         return e
//     }
//     ;
//     var s = void 0
//       , l = t.getWebglCanvas = function() {
//         (s = document.createElement("canvas")).width = 400,
//         s.height = 400;
//         var e = null;
//         try {
//             e = s.getContext("webgl") || s.getContext("experimental-webgl")
//         } catch (e) {}
//         return e = e || null
//     }
// };
//         // if (n[e])
//         //     return n[e].exports;
//         //var t = n[e] = {
//         var t = {
//             exports: {},
//             id: e,
//             loaded: !1
//         };
//         return r[e].call(t.exports, t, t.exports, o),
//         t.loaded = !0,
//         t.exports
//     }
//         var n = o(13),
//         f = babelHelpers.interopRequireDefault(n);
//         var n = o(14),
//         h = babelHelpers.interopRequireDefault(n),
//         d = o(12);
//         var n = o(11),
//         i = babelHelpers.interopRequireDefault(n);
//          var r = o(15);
//          var a =(0, r.webglToHash)();
//         // e.exports = function() {
//
//         // var e, c = {
//         //     v: "2.2.2",
//         //     ts: (new Date).getTime(),
//         //     cts: (new Date).getTime(),
//         //     brVD: [Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0)],
//         //     brR: [[screen.width, screen.height], [screen.availWidth, screen.availHeight], screen.colorDepth, screen.pixelDepth],
//         //     bI: (e = document.referrer,
//         //     [window.location.href, e]),
//         //     aM: (window._phantom || window.phantom || window.callPhantom ? "ps" : function() {
//         //         try {
//         //             var e = Function("return this")()
//         //               , t = function() {
//         //                 var t = (e.constructor + "").match(/ (\w+)|$/)[1];
//         //                 if (!t)
//         //                     try {
//         //                         "[object]" === e && (t = "Window")
//         //                     } catch (e) {
//         //                         t = "WSH"
//         //                     }
//         //                 return t
//         //             }()
//         //               , r = "";
//         //             switch (t) {
//         //             case "Window":
//         //                 break;
//         //             case "DedicatedWorkerGlobalScope":
//         //                 r = "ww";
//         //                 break;
//         //             case "WSH":
//         //                 r = "wsh";
//         //                 break;
//         //             case "Object":
//         //                 r = "nj";
//         //                 break;
//         //             default:
//         //                 r = "ot"
//         //             }
//         //             return r
//         //         } catch (e) {
//         //             return "abnormal"
//         //         }
//         //     }() || o.default.getwd()) || "",
//         //     broP: function() {
//         //         var e, t = window.navigator.plugins, r = [], n = void 0;
//         //         for (n in t)
//         //             t.hasOwnProperty(n) && (e = t[n].name || "",
//         //             r.push(e));
//         //         return r
//         //     }(),
//         //     cV: (0,
//         //     d.hex_md5)(i.default.getCanvasFp()),
//         //     wV: i.default.getWebglVendor(),
//         //     wR: i.default.getWebglRenderer(),
//         //     wVU: i.default.getWebglVendorUnmasked(),
//         //     wRU: i.default.getWebglRendererUnmasked(),
//         //     aF: "",
//         //     wI: a.hash
//         // };
//         var e,c = {
//     "v": "2.2.2",
//     ts: (new Date).getTime(),
//             cts: (new Date).getTime(),
//     "brVD": [
//         1366,
//         625
//     ],
//     "brR": [
//         [
//             1366,
//             768
//         ],
//         [
//             1366,
//             728
//         ],
//         24,
//         24
//     ],
//     "bI": [
//         "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode="+rc+"&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
//         "https://account.dianping.com/"
//     ],
//     "aM": "",
//     "broP": [
//         "PDF Viewer",
//         "Chrome PDF Viewer",
//         "Chromium PDF Viewer",
//         "Microsoft Edge PDF Viewer",
//         "WebKit built-in PDF"
//     ],
// //c890550f51d11894720deb344e0990bf
//     "cV": "c890550f51d11894720deb344e0990bf",
//     "wV": "WebKit",
//     "wR": "WebKit WebGL",
//     "wVU": "Google Inc. (Intel)",
//     "wRU": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
//     "aF": "",
//     "wI": a.hash,//1272331532
//     "fL": "a48c29a4460cc3eaa21055966ee72a4f",
//     "mT": [
//         "614.000,277.000,44675",
//         "615.000,277.000,44644",
//         "615.000,279.000,44635",
//         "615.000,280.000,44629",
//         "616.000,281.000,44619",
//         "616.000,282.000,44611",
//         "616.000,283.000,44595",
//         "617.000,283.000,44501",
//         "618.000,283.000,44485",
//         "620.000,282.000,44478",
//         "624.000,280.000,44469",
//         "629.000,277.000,44461",
//         "634.000,273.000,44453",
//         "642.000,268.000,44446",
//         "650.000,263.000,44437",
//         "657.000,259.000,44431",
//         "663.000,256.000,44423",
//         "668.000,253.000,44415",
//         "671.000,251.000,44408",
//         "448.000,238.000,42593",
//         "447.000,238.000,42561",
//         "447.000,239.000,42545",
//         "446.000,239.000,42529",
//         "445.000,239.000,42523",
//         "445.000,240.000,42515",
//         "444.000,240.000,42507",
//         "443.000,241.000,42499"
//     ],
//     "kT": [
//         "{,BODY,2562"
//     ],
//     "aT": [
//         "614.000,277.000,BUTTON,44912"
//     ],
//     "tT": [],
//     "dT": [
//         "614.000,277.000,BUTTON,44806"
//     ],
//     "sT": [],
//     "fT": [
//         "442.000,241.000,42491",
//         "442.000,242.000,42483",
//         "441.000,242.000,42467",
//         "440.000,243.000,42443",
//         "439.000,244.000,42435",
//         "438.000,244.000,42411",
//         "437.000,244.000,42403",
//         "436.000,244.000,42333",
//         "436.000,245.000,42309",
//         "435.000,245.000,42277",
//         "435.000,246.000,42261",
//         "434.000,247.000,42239",
//         "434.000,248.000,42231",
//         "433.000,248.000,42223",
//         "432.000,248.000,42215",
//         "432.000,249.000,42207",
//         "431.000,250.000,42191",
//         "430.000,251.000,42175",
//         "429.000,251.000,42167",
//         "429.000,252.000,42151",
//         "428.000,252.000,42143",
//         "428.000,253.000,42121",
//         "428.000,254.000,42105",
//         "427.000,254.000,42090",
//         "427.000,255.000,42073",
//         "426.000,255.000,42058",
//         "425.000,256.000,42049",
//         "424.000,257.000,42041",
//         "421.000,259.000,42033",
//         "418.000,261.000,42025",
//         "416.000,264.000,42017",
//         "413.000,266.000,42009",
//         "411.000,268.000,42001",
//         "409.000,270.000,41993",
//         "408.000,271.000,41987",
//         "407.000,272.000,41979",
//         "407.000,274.000,41971",
//         "407.000,275.000,41963",
//         "407.000,276.000,41955",
//         "408.000,277.000,41939",
//         "408.000,278.000,41931",
//         "409.000,279.000,41875",
//         "410.000,279.000,41860",
//         "410.000,280.000,41851",
//         "411.000,280.000,41789",
//         "414.000,280.000,41781",
//         "420.000,278.000,41773",
//         "430.000,277.000,41765",
//         "445.000,273.000,41758",
//         "847.000,158.000,19527",
//         "847.000,159.000,19479",
//         "847.000,160.000,19449",
//         "847.000,161.000,19401",
//         "847.000,162.000,19283",
//         "847.000,163.000,19142",
//         "847.000,163.000,19141",
//         "1035.000,353.000,2431",
//         "1230.000,388.000,1030",
//         "1232.000,388.000,959",
//         "1238.000,388.000,800"
//     ],
//     "inputs": [],
//     "buttons": [
//         {
//             "buttonName": "yodaSmsCodeBtn",
//             "touchPoint": "{614,277}",
//             "touchPosition": "{58.2,43.7}",
//             "touchTimeStamp": 1682060536582
//         }
//     ]
// };
//         // return window.OscillatorNode && window.Float32Array && h.default.start(),
//         // setTimeout(function() {
//         //     i.default.getFonts(c)
//         // }, 0),
//         // c.aM || (o.default.listenwd(function(e) {
//         //     e && 0 < e.length && (c.aM = e)
//         // }),
//         // c.aM || (c.aM = "")),
//         Object.defineProperty(c, "_a", {
//             get: function() {
//                 for (var e = "", t = 0, r = 3; t < 6; ) {
//                     var n = "";
//                     switch (r) {
//                     case 47:
//                         n = "e",
//                         r = 78;
//                         break;
//                     case 3:
//                         n = "_",
//                         r = 9;
//                         break;
//                     case 78:
//                         n = "n";
//                         break;
//                     case 9:
//                         n = "t",
//                         r = 36;
//                         break;
//                     case 36:
//                         n = "o",
//                         r = 5;
//                         break;
//                     default:
//                         r = 47,
//                         n = "k"
//                     }
//                     t++,
//                     e += n
//                 }
//                 return e
//             }
//         })
//         var res = function() {
//             c.cts = Date.now();
//             var e = {
//     "ts": cur_ts,
//     "fT": [
//         "657.000,242.000,521161",
//         "659.000,240.000,521153",
//         "662.000,238.000,521147",
//         "665.000,235.000,521142",
//         "678.000,227.000,521119",
//         "683.000,223.000,521107",
//         "690.000,220.000,521102",
//         "697.000,215.000,521091",
//         "704.000,211.000,521083",
//         "712.000,206.000,521075",
//         "718.000,202.000,521067",
//         "724.000,198.000,521059",
//         "728.000,195.000,521051",
//         "732.000,192.000,521046",
//         "414.000,163.000,519209",
//         "413.000,163.000,519177",
//         "412.000,163.000,519161",
//         "411.000,163.000,519137",
//         "410.000,163.000,519097",
//         "409.000,163.000,518941",
//         "410.000,163.000,518909",
//         "410.000,164.000,518901",
//         "411.000,164.000,518877",
//         "412.000,164.000,518869",
//         "412.000,165.000,518861",
//         "413.000,165.000,518853",
//         "414.000,165.000,518848",
//         "414.000,165.000,518848",
//         "414.000,117.000,518215",
//         "411.000,115.000,518207",
//         "406.000,112.000,518199",
//         "401.000,110.000,518193",
//         "396.000,108.000,518185",
//         "390.000,105.000,518177",
//         "384.000,102.000,518169",
//         "378.000,98.000,518161",
//         "372.000,95.000,518153",
//         "368.000,93.000,518145",
//         "363.000,90.000,518137",
//         "359.000,87.000,518129",
//         "356.000,85.000,518121",
//         "354.000,84.000,518113",
//         "351.000,83.000,518105",
//         "349.000,81.000,518097",
//         "347.000,80.000,518089",
//         "343.000,79.000,518081",
//         "338.000,76.000,518075",
//         "334.000,74.000,518067",
//         "329.000,72.000,518059",
//         "322.000,68.000,518051",
//         "315.000,65.000,518043",
//         "308.000,61.000,518037",
//         "301.000,56.000,518027",
//         "294.000,52.000,518020",
//         "272.000,38.000,517988",
//         "267.000,33.000,517972",
//         "262.000,30.000,517962",
//         "260.000,27.000,517943",
//         "259.000,26.000,517942",
//         "252.000,19.000,517830"
//     ],
//     "mT": [
//         "631.000,265.000,521531",
//         "632.000,265.000,521493",
//         "633.000,265.000,521453",
//         "634.000,264.000,521391",
//         "635.000,264.000,521383",
//         "635.000,263.000,521367",
//         "636.000,262.000,521351",
//         "637.000,261.000,521343",
//         "637.000,260.000,521335",
//         "637.000,259.000,521327",
//         "638.000,259.000,521319",
//         "638.000,258.000,521311",
//         "639.000,258.000,521280",
//         "639.000,257.000,521273",
//         "640.000,257.000,521257",
//         "640.000,256.000,521249",
//         "641.000,256.000,521241",
//         "641.000,255.000,521233",
//         "642.000,254.000,521225",
//         "643.000,253.000,521217",
//         "645.000,252.000,521209",
//         "646.000,251.000,521201",
//         "648.000,250.000,521193",
//         "650.000,249.000,521185",
//         "652.000,247.000,521177",
//         "654.000,245.000,521169"
//     ],
//     "kT": [],
//     "aT": [
//         "631.000,265.000,BUTTON,522125"
//     ],
//     "tT": [],
//     "dT": [
//         "631.000,265.000,BUTTON,521950"
//     ],
//     "sT": [],
//     "inputs": [],
//     "buttons": [
//         {
//             "buttonName": "yodaSmsCodeBtn",
//             "touchPoint": "{631,265}",
//             "touchPosition": "{74.7,81.2}",
//             "touchTimeStamp": cur_ts
//         }
//     ]
// }//f.default.data()
//               , t = e.mT
//               , r = e.kT
//               , n = e.aT
//               , o = e.tT
//               , i = e.dT
//               , a = e.sT
//               , u = e.fT
//               , s = e.inputs
//               , l = e.buttons
//               , e = undefined;//h.default.audioData().data;
//             return c.mT = t,
//             c.kT = r,
//             c.aT = n,
//             c.tT = o,
//             c.dT = i,
//             c.sT = a,
//             c.fT = u,
//             c.inputs = s,
//             c.buttons = l,
//             c.aF = void 0 !== e ? (0,
//             d.hex_md5)(e) : "",
//             function(e) {
//                 try {
//                     return btoa(encodeURIComponent(JSON.stringify(e)))
//                 } catch (e) {
//                     throw new Error("btoa 异常")
//                 }
//             }(c)
//         }
//         return res();
//
//     //     {
//     //         reload: c.reload,
//     //         _a: c._a
//     //     }
//     // }
//         // f.default.event();
//            // return "JTdCJTIydiUyMiUzQSUyMjIuMi4yJTIyJTJDJTIydHMlMjIlM0ExNjgxODg1MzYyOTk5JTJDJTIyY3RzJTIyJTNBMTY4MTg4NzYyMDM4MyUyQyUyMmJyVkQlMjIlM0ElNUIxMzY2JTJDNjI1JTVEJTJDJTIyYnJSJTIyJTNBJTVCJTVCMTM2NiUyQzc2OCU1RCUyQyU1QjEzNjYlMkM3MjglNUQlMkMyNCUyQzI0JTVEJTJDJTIyYkklMjIlM0ElNUIlMjJodHRwcyUzQSUyRiUyRnZlcmlmeS5tZWl0dWFuLmNvbSUyRnYyJTJGd2ViJTJGZ2VuZXJhbF9wYWdlJTNGYWN0aW9uJTNEbG9naW52ZXJpZmljYXRpb24lMjZyZXF1ZXN0Q29kZSUzRDM5ODczMGYwNjdkMzQyMmM4MTVjZmMwNGU5OWI0ZjM4JTI2c3VjY0NhbGxiYWNrVXJsJTNEaHR0cHMlMjUzQSUyNTJGJTI1MkZhY2NvdW50LmRpYW5waW5nLmNvbSUyNTJGcGNsb2dpbiUyNTNGcmVkaXIlMjUzRGh0dHBzJTI1MjUzQSUyNTI1MkYlMjUyNTJGd3d3LmRpYW5waW5nLmNvbSUyNTI1MkZjaXR5bGlzdCUyMiUyQyUyMmh0dHBzJTNBJTJGJTJGYWNjb3VudC5kaWFucGluZy5jb20lMkYlMjIlNUQlMkMlMjJhTSUyMiUzQSUyMiUyMiUyQyUyMmJyb1AlMjIlM0ElNUIlMjJQREYlMjBWaWV3ZXIlMjIlMkMlMjJDaHJvbWUlMjBQREYlMjBWaWV3ZXIlMjIlMkMlMjJDaHJvbWl1bSUyMFBERiUyMFZpZXdlciUyMiUyQyUyMk1pY3Jvc29mdCUyMEVkZ2UlMjBQREYlMjBWaWV3ZXIlMjIlMkMlMjJXZWJLaXQlMjBidWlsdC1pbiUyMFBERiUyMiU1RCUyQyUyMmNWJTIyJTNBJTIyYzg5MDU1MGY1MWQxMTg5NDcyMGRlYjM0NGUwOTkwYmYlMjIlMkMlMjJ3ViUyMiUzQSUyMldlYktpdCUyMiUyQyUyMndSJTIyJTNBJTIyV2ViS2l0JTIwV2ViR0wlMjIlMkMlMjJ3VlUlMjIlM0ElMjJHb29nbGUlMjBJbmMuJTIwKEludGVsKSUyMiUyQyUyMndSVSUyMiUzQSUyMkFOR0xFJTIwKEludGVsJTJDJTIwSW50ZWwoUiklMjBIRCUyMEdyYXBoaWNzJTIwNjIwJTIwRGlyZWN0M0QxMSUyMHZzXzVfMCUyMHBzXzVfMCUyQyUyMEQzRDExKSUyMiUyQyUyMmFGJTIyJTNBJTIyJTIyJTJDJTIyd0klMjIlM0ExMjcyMzMxNTMyJTJDJTIyZkwlMjIlM0ElMjJhNDhjMjlhNDQ2MGNjM2VhYTIxMDU1OTY2ZWU3MmE0ZiUyMiUyQyUyMm1UJTIyJTNBJTVCJTIyNjQ3LjAwMCUyQzI3Ni4wMDAlMkMxNzU0NzElMjIlMkMlMjI2NDguMDAwJTJDMjc3LjAwMCUyQzE3NTQ0OCUyMiUyQyUyMjY0OS4wMDAlMkMyNzcuMDAwJTJDMTc1NDMxJTIyJTJDJTIyNjQ5LjAwMCUyQzI3OC4wMDAlMkMxNzU0MDclMjIlMkMlMjI2NTAuMDAwJTJDMjc4LjAwMCUyQzE3NTM5MSUyMiUyQyUyMjY1MC4wMDAlMkMyNzkuMDAwJTJDMTc1Mzc1JTIyJTJDJTIyNjUxLjAwMCUyQzI3OS4wMDAlMkMxNzUzNjglMjIlMkMlMjI2NTEuMDAwJTJDMjgwLjAwMCUyQzE3NTM2MCUyMiUyQyUyMjY1Mi4wMDAlMkMyODAuMDAwJTJDMTc1MzUzJTIyJTJDJTIyNjUzLjAwMCUyQzI4MS4wMDAlMkMxNzUzMzclMjIlMkMlMjI2NTQuMDAwJTJDMjgyLjAwMCUyQzE3NTMwNSUyMiUyQyUyMjY1NS4wMDAlMkMyODIuMDAwJTJDMTc1Mjk4JTIyJTJDJTIyNjU2LjAwMCUyQzI4My4wMDAlMkMxNzUyODIlMjIlMkMlMjI2NTcuMDAwJTJDMjg1LjAwMCUyQzE3NTI3MyUyMiUyQyUyMjY1OS4wMDAlMkMyODYuMDAwJTJDMTc1MjY1JTIyJTJDJTIyNjYwLjAwMCUyQzI4OC4wMDAlMkMxNzUyNTglMjIlMkMlMjI2NjIuMDAwJTJDMjg5LjAwMCUyQzE3NTI0OSUyMiUyQyUyMjY2NC4wMDAlMkMyOTEuMDAwJTJDMTc1MjQyJTIyJTJDJTIyNjY1LjAwMCUyQzI5My4wMDAlMkMxNzUyMzMlMjIlMkMlMjI2NjYuMDAwJTJDMjk0LjAwMCUyQzE3NTIyNSUyMiUyQyUyMjY2Ny4wMDAlMkMyOTUuMDAwJTJDMTc1MjE5JTIyJTJDJTIyNjY3LjAwMCUyQzI5Ni4wMDAlMkMxNzUyMTQlMjIlMkMlMjI2NjguMDAwJTJDMjk3LjAwMCUyQzE3NTIwMyUyMiUyQyUyMjY2OS4wMDAlMkMyOTguMDAwJTJDMTc1MTg3JTIyJTJDJTIyNjcxLjAwMCUyQzI5OS4wMDAlMkMxNzUxODElMjIlMkMlMjI2NzIuMDAwJTJDMzAxLjAwMCUyQzE3NTE3MSUyMiUyQyUyMjY3NS4wMDAlMkMzMDIuMDAwJTJDMTc1MTY0JTIyJTJDJTIyNjgyLjAwMCUyQzMwNS4wMDAlMkMxNzUxNTUlMjIlMkMlMjI2OTMuMDAwJTJDMzA5LjAwMCUyQzE3NTE0OCUyMiUyQyUyMjcwNi4wMDAlMkMzMTIuMDAwJTJDMTc1MTM5JTIyJTJDJTIyNzI3LjAwMCUyQzMxNy4wMDAlMkMxNzUxMzIlMjIlMkMlMjI3NTAuMDAwJTJDMzIwLjAwMCUyQzE3NTEyMyUyMiUyQyUyMjc3NC4wMDAlMkMzMjAuMDAwJTJDMTc1MTE2JTIyJTJDJTIyNzk2LjAwMCUyQzMyMC4wMDAlMkMxNzUxMDclMjIlMkMlMjI4MTguMDAwJTJDMzIwLjAwMCUyQzE3NTA5OSUyMiUyQyUyMjgzOC4wMDAlMkMzMjAuMDAwJTJDMTc1MDk3JTIyJTJDJTIyODUxLjAwMCUyQzMxOS4wMDAlMkMxNzUwODYlMjIlMkMlMjI4NjMuMDAwJTJDMzE3LjAwMCUyQzE3NTA4MSUyMiUyQyUyMjg3My4wMDAlMkMzMTYuMDAwJTJDMTc1MDY5JTIyJTJDJTIyODc5LjAwMCUyQzMxNS4wMDAlMkMxNzUwNjElMjIlMkMlMjI4ODEuMDAwJTJDMzE1LjAwMCUyQzE3NTA1NSUyMiUyQyUyMjg4MS4wMDAlMkMzMTUuMDAwJTJDMTc1MDU1JTIyJTJDJTIyMjk0LjAwMCUyQzI4MC4wMDAlMkMxNzMyMDElMjIlMkMlMjIyOTQuMDAwJTJDMjgxLjAwMCUyQzE3MzE5NCUyMiUyQyUyMjI5My4wMDAlMkMyODEuMDAwJTJDMTczMTg1JTIyJTJDJTIyMjkyLjAwMCUyQzI4MS4wMDAlMkMxNzMxNzklMjIlMkMlMjIyOTEuMDAwJTJDMjgxLjAwMCUyQzE3MzE3MCUyMiUyQyUyMjI5MC4wMDAlMkMyODEuMDAwJTJDMTczMTU0JTIyJTJDJTIyMjg5LjAwMCUyQzI4MS4wMDAlMkMxNzMwOTElMjIlMkMlMjIyODkuMDAwJTJDMjgyLjAwMCUyQzE3MzA4MyUyMiUyQyUyMjI4OC4wMDAlMkMyODIuMDAwJTJDMTczMDc1JTIyJTJDJTIyMjg3LjAwMCUyQzI4NC4wMDAlMkMxNzMwNTklMjIlMkMlMjIyODcuMDAwJTJDMjg1LjAwMCUyQzE3MzAwNSUyMiUyQyUyMjI4OC4wMDAlMkMyODUuMDAwJTJDMTcyOTgxJTIyJTJDJTIyMjg5LjAwMCUyQzI4Ni4wMDAlMkMxNzI5NzMlMjIlMkMlMjIyOTAuMDAwJTJDMjg2LjAwMCUyQzE3Mjk2NSUyMiUyQyUyMjI5Mi4wMDAlMkMyODcuMDAwJTJDMTcyOTU3JTIyJTJDJTIyMjkzLjAwMCUyQzI4Ny4wMDAlMkMxNzI5NTAlMjIlMkMlMjIyOTMuMDAwJTJDMjg3LjAwMCUyQzE3Mjk1MCUyMiUyQyUyMjU1Ny4wMDAlMkMzNDYuMDAwJTJDMTM1NTElMjIlNUQlMkMlMjJrVCUyMiUzQSU1QiUyMiU3QiUyQ0JPRFklMkMxOTExJTIyJTVEJTJDJTIyYVQlMjIlM0ElNUIlMjI2NDcuMDAwJTJDMjc2LjAwMCUyQ0JVVFRPTiUyQzE3NTYyMCUyMiUyQyUyMjYxMC4wMDAlMkMyNzguMDAwJTJDQlVUVE9OJTJDNzUwOCUyMiU1RCUyQyUyMnRUJTIyJTNBJTVCJTVEJTJDJTIyZFQlMjIlM0ElNUIlMjI2NDcuMDAwJTJDMjc2LjAwMCUyQ0JVVFRPTiUyQzE3NTUzMyUyMiUyQyUyMjYxMC4wMDAlMkMyNzguMDAwJTJDQlVUVE9OJTJDNzQyNCUyMiU1RCUyQyUyMnNUJTIyJTNBJTVCJTVEJTJDJTIyZlQlMjIlM0ElNUIlMjI2NDEuMDAwJTJDMjkwLjAwMCUyQzU4NTUlMjIlMkMlMjI2NDQuMDAwJTJDMjkxLjAwMCUyQzU4NDQlMjIlMkMlMjI2NDcuMDAwJTJDMjkzLjAwMCUyQzU4MzglMjIlMkMlMjI2NTEuMDAwJTJDMjkzLjAwMCUyQzU4MzAlMjIlMkMlMjI2NTQuMDAwJTJDMjk1LjAwMCUyQzU4MjIlMjIlMkMlMjI2NTcuMDAwJTJDMjk2LjAwMCUyQzU4MTQlMjIlMkMlMjI2NjEuMDAwJTJDMjk3LjAwMCUyQzU4MDYlMjIlMkMlMjI2NjMuMDAwJTJDMjk4LjAwMCUyQzU3OTglMjIlMkMlMjI2NjUuMDAwJTJDMjk5LjAwMCUyQzU3OTAlMjIlMkMlMjI2NjcuMDAwJTJDMjk5LjAwMCUyQzU3ODIlMjIlMkMlMjI2NjguMDAwJTJDMjk5LjAwMCUyQzU3NzQlMjIlMkMlMjI2NjkuMDAwJTJDMjk5LjAwMCUyQzU3NjYlMjIlMkMlMjI2NzAuMDAwJTJDMjk5LjAwMCUyQzU3NTglMjIlMkMlMjI2NzEuMDAwJTJDMjk5LjAwMCUyQzU3NTAlMjIlMkMlMjI2NzIuMDAwJTJDMjk5LjAwMCUyQzU3NDIlMjIlMkMlMjI2NzMuMDAwJTJDMjk5LjAwMCUyQzU3MTIlMjIlMkMlMjI2NzQuMDAwJTJDMjk5LjAwMCUyQzU2ODAlMjIlMkMlMjI2NzUuMDAwJTJDMjk5LjAwMCUyQzU2NzIlMjIlMkMlMjI2NzguMDAwJTJDMjk5LjAwMCUyQzU2NjQlMjIlMkMlMjI2ODMuMDAwJTJDMjk5LjAwMCUyQzU2NTYlMjIlMkMlMjI2OTQuMDAwJTJDMjk3LjAwMCUyQzU2NDglMjIlMkMlMjI3MTIuMDAwJTJDMjk1LjAwMCUyQzU2NDAlMjIlMkMlMjI3NDAuMDAwJTJDMjkwLjAwMCUyQzU2MzIlMjIlMkMlMjI3NjkuMDAwJTJDMjg4LjAwMCUyQzU2MjQlMjIlMkMlMjI3OTguMDAwJTJDMjg0LjAwMCUyQzU2MTYlMjIlMkMlMjI4MjcuMDAwJTJDMjc5LjAwMCUyQzU2MDglMjIlMkMlMjI4NTIuMDAwJTJDMjc1LjAwMCUyQzU2MDAlMjIlMkMlMjI4NzguMDAwJTJDMjcxLjAwMCUyQzU1OTIlMjIlMkMlMjI5MDcuMDAwJTJDMjY3LjAwMCUyQzU1ODglMjIlMkMlMjI5MjcuMDAwJTJDMjYyLjAwMCUyQzU1NzglMjIlMkMlMjI5MzYuMDAwJTJDMjU2LjAwMCUyQzU1NzIlMjIlMkMlMjI5MzYuMDAwJTJDMjU2LjAwMCUyQzU1NzIlMjIlMkMlMjIxMDc2LjAwMCUyQzM1MC4wMDAlMkM5MTglMjIlMkMlMjIxMDc4LjAwMCUyQzM1MS4wMDAlMkM5MDElMjIlMkMlMjIxMDgxLjAwMCUyQzM1NC4wMDAlMkM4ODUlMjIlMkMlMjIxMDg3LjAwMCUyQzM1OC4wMDAlMkM4NjglMjIlMkMlMjIxMDk4LjAwMCUyQzM2My4wMDAlMkM4NTElMjIlMkMlMjIxMTA5LjAwMCUyQzM2Ny4wMDAlMkM4MzUlMjIlMkMlMjIxMTE4LjAwMCUyQzM3MS4wMDAlMkM4MTglMjIlMkMlMjIxMTM1LjAwMCUyQzM3Ni4wMDAlMkM4MDElMjIlMkMlMjIxMTQ3LjAwMCUyQzM4MS4wMDAlMkM3ODUlMjIlMkMlMjIxMTU3LjAwMCUyQzM4NS4wMDAlMkM3NjglMjIlMkMlMjIxMTY2LjAwMCUyQzM4OS4wMDAlMkM3NTElMjIlMkMlMjIxMTc1LjAwMCUyQzM5MS4wMDAlMkM3MzUlMjIlMkMlMjIxMTgxLjAwMCUyQzM5My4wMDAlMkM3MTglMjIlMkMlMjIxMTg1LjAwMCUyQzM5NC4wMDAlMkM3MDElMjIlMkMlMjIxMTg3LjAwMCUyQzM5Ny4wMDAlMkM2ODUlMjIlMkMlMjIxMTg4LjAwMCUyQzM5OS4wMDAlMkM2NjglMjIlMkMlMjIxMTg5LjAwMCUyQzQwMi4wMDAlMkM2NTElMjIlMkMlMjIxMTg5LjAwMCUyQzQwNC4wMDAlMkM2MzUlMjIlMkMlMjIxMTg5LjAwMCUyQzQwNi4wMDAlMkM2MTglMjIlMkMlMjIxMTg4LjAwMCUyQzQwNi4wMDAlMkM2MDElMjIlMkMlMjIxMTg3LjAwMCUyQzQwNy4wMDAlMkM1ODUlMjIlMkMlMjIxMTgzLjAwMCUyQzQwOS4wMDAlMkM1NjglMjIlMkMlMjIxMTc4LjAwMCUyQzQxMi4wMDAlMkM1NTElMjIlMkMlMjIxMTcyLjAwMCUyQzQxNS4wMDAlMkM1MzUlMjIlMkMlMjIxMTY4LjAwMCUyQzQxOS4wMDAlMkM1MjQlMjIlMkMlMjIxMTYxLjAwMCUyQzQyNy4wMDAlMkM0MTUlMjIlMkMlMjIxMTQ4LjAwMCUyQzQwNC4wMDAlMkMzMjIlMjIlMkMlMjIxMTQ5LjAwMCUyQzQwMi4wMDAlMkMyNjclMjIlNUQlMkMlMjJpbnB1dHMlMjIlM0ElNUIlN0IlMjJpbnB1dE5hbWUlMjIlM0ElMjJ5b2RhVmVyaWZpY2F0aW9uJTIyJTJDJTIyZWRpdFN0YXJ0ZWRUaW1lU3RhbXAlMjIlM0ExNjgxODg1NTM4NDkyJTJDJTIya2V5Ym9hcmRFdmVudCUyMiUzQSUyMjAtMC0wLTAlMjIlMkMlMjJlZGl0RmluaXNoZWRUaW1lU3RhbXAlMjIlM0ExNjgxODg1NTM4NTU5JTdEJTVEJTJDJTIyYnV0dG9ucyUyMiUzQSU1QiU3QiUyMmJ1dHRvbk5hbWUlMjIlM0ElMjJ5b2RhU21zQ29kZUJ0biUyMiUyQyUyMnRvdWNoUG9pbnQlMjIlM0ElMjIlN0I2NDclMkMyNzYlN0QlMjIlMkMlMjJ0b3VjaFBvc2l0aW9uJTIyJTNBJTIyJTdCOTAuMiUyQzQ2LjglN0QlMjIlMkMlMjJ0b3VjaFRpbWVTdGFtcCUyMiUzQTE2ODE4ODU1Mzg1ODYlN0QlNUQlN0Q=";
//         }
// };
//
// // c.reload = function() {
// //             c.cts = Date.now();
// //             var e = f.default.data()
// //               , t = e.mT
// //               , r = e.kT
// //               , n = e.aT
// //               , o = e.tT
// //               , i = e.dT
// //               , a = e.sT
// //               , u = e.fT
// //               , s = e.inputs
// //               , l = e.buttons
// //               , e = h.default.audioData().data;
// //             return c.mT = t,
// //             c.kT = r,
// //             c.aT = n,
// //             c.tT = o,
// //             c.dT = i,
// //             c.sT = a,
// //             c.fT = u,
// //             c.inputs = s,
// //             c.buttons = l,
// //             c.aF = void 0 !== e ? (0,
// //             d.hex_md5)(e) : "",
// //             function(e) {
// //                 try {
// //                     return window.btoa(encodeURIComponent(JSON.stringify(e)))
// //                 } catch (e) {
// //                     throw new Error("btoa 异常")
// //                 }
// //             }(c)
// //         }
// var o = {
//     default:{
//
//         Kaito: function(e, t) {
//             function o(e, t) {
//         var r, n = e.length, o = n >> 2;
//         0 != (3 & n) && ++o,
//         t ? (r = new Array(o + 1))[o] = n : r = new Array(o);
//         for (var i = 0; i < n; ++i)
//             r[i >> 2] |= e.charCodeAt(i) << ((3 & i) << 3);
//         return r
//     }
//             function n(e) {
//         if (/^[\x00-\x7f]*$/.test(e))
//             return e;
//         for (var t = [], r = e.length, n = 0, o = 0; n < r; ++n,
//         ++o) {
//             var i, a = e.charCodeAt(n);
//             a < 128 ? t[o] = e.charAt(n) : a < 2048 ? t[o] = String.fromCharCode(192 | a >> 6, 128 | 63 & a) : a < 55296 || 57343 < a ? t[o] = String.fromCharCode(224 | a >> 12, 128 | a >> 6 & 63, 128 | 63 & a) : n + 1 < r && (i = e.charCodeAt(n + 1),
//             a < 56320 && 56320 <= i && i <= 57343 && (i = 65536 + ((1023 & a) << 10 | 1023 & i),
//             t[o] = String.fromCharCode(240 | i >> 18 & 63, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i),
//             ++n))
//         }
//         return t.join("")
//     }
//             function r(e, t) {
//         return null == e || 0 === e.length ? e : (e = n(e),
//         t = n(t),
//         function(e, t) {
//             var r = e.length
//               , n = r << 2;
//             if (t) {
//                 var o = e[r - 1];
//                 if (o < (n -= 4) - 3 || n < o)
//                     return null;
//                 n = o
//             }
//             for (var i = 0; i < r; i++)
//                 e[i] = String.fromCharCode(255 & e[i], e[i] >>> 8 & 255, e[i] >>> 16 & 255, e[i] >>> 24 & 255);
//             o = e.join("");
//             if (t)
//                 return o.substring(0, n);
//             return o
//         }(function(e, t) {
//             var r, n, o, i, a, u, s = e.length, l = s - 1;
//             for (n = e[l],
//             o = 0,
//             u = 0 | Math.floor(6 + 52 / s); 0 < u; --u) {
//                 for (i = (o = o + 2654435769 & 4294967295) >>> 2 & 3,
//                 a = 0; a < l; ++a)
//                     r = e[a + 1],
//                     n = e[a] = e[a] + ((n >>> 5 ^ r << 2) + (r >>> 3 ^ n << 4) ^ (o ^ r) + (t[3 & a ^ i] ^ n)) & 4294967295;
//                 r = e[0],
//                 n = e[l] = e[l] + ((n >>> 5 ^ r << 2) + (r >>> 3 ^ n << 4) ^ (o ^ r) + (t[3 & l ^ i] ^ n)) & 4294967295
//             }
//             return e
//         }(o(e, !0), function(e) {
//             e.length < 4 && (e.length = 4);
//             return e
//         }(o(t, !1))), !1))
//     }
//     var s, i = (s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
//     function(e) {
//         var t, r, n, o = r = 0, i = e.length, a = i % 3, u = (i -= a) / 3 << 2;
//         for (0 < a && (u += 4),
//         t = new Array(u); o < i; )
//             n = e.charCodeAt(o++) << 16 | e.charCodeAt(o++) << 8 | e.charCodeAt(o++),
//             t[r++] = s[n >> 18] + s[n >> 12 & 63] + s[n >> 6 & 63] + s[63 & n];
//         return 1 == a ? (n = e.charCodeAt(o++),
//         t[r++] = s[n >> 2] + s[(3 & n) << 4] + "==") : 2 == a && (n = e.charCodeAt(o++) << 8 | e.charCodeAt(o++),
//         t[r++] = s[n >> 10] + s[n >> 4 & 63] + s[(15 & n) << 2] + "="),
//         t.join("")
//     }
//     );
//             var a = {
//             Kaito: function(e, t) {
//             return i(r(e, t))
//             }
//     };
//             return a.Kaito(e,t)
//         }
//     }
// };
// function u(t, e) {
//
//             if (-1 !== t.indexOf(i._a) || 0 < e.length && -1 !== e.indexOf(i._a))
//                 return "";
//             var r = i.reload();
//             r || window.Yoda.CAT.sendLog(t, "jsError", "【url参数处理异常】", "t 为空");
//             var n = rc;
//             // var n = function(e) {
//             //     if (!e)
//             //         return "";
//             //     var t, r = e.split("&"), n = "";
//             //     for (t in r) {
//             //         var o = r[t];
//             //         -1 === o.indexOf("request_code") && -1 === o.indexOf("requestCode") || (n = o.substr(o.indexOf("=") + 1))
//             //     }
//             //     return n
//             // }(e);
//             if (!n)
//                 return "";
//             n = o.default.Kaito(decodeURIComponent(atob(r)), n);
//             //n = o.default.Kaito(decodeURIComponent(window.atob(r)), n);
//             return encodeURIComponent(i._a) + "=" + encodeURIComponent(n)
//
//     }
// var rc = '398730f067d3422c815cfc04e99b4f38'
// console.log(get_token(rc))