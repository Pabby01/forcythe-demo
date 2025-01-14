'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [406],
  {
    703: function (t, e, n) {
      n.d(e, {
        default: function () {
          return r.a;
        },
      });
      var i = n(7447),
        r = n.n(i);
    },
    8792: function (t, e, n) {
      n.d(e, {
        default: function () {
          return r.a;
        },
      });
      var i = n(5250),
        r = n.n(i);
    },
    2956: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'addLocale', {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        n(2139);
      let i = function (t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          n[i - 1] = arguments[i];
        return t;
      };
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    6406: function (t, e, n) {
      function i(t, e, n, i) {
        return !1;
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'getDomainLocale', {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        n(2139),
        ('function' == typeof e.default ||
          ('object' == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, '__esModule', { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    1749: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'Image', {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let i = n(6921),
        r = n(1884),
        s = n(7437),
        o = r._(n(2265)),
        a = i._(n(4887)),
        l = i._(n(2251)),
        u = n(8630),
        h = n(6906),
        c = n(337);
      n(6184);
      let d = n(6993),
        f = i._(n(536)),
        p = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(t, e, n, i, r, s) {
        let o = null == t ? void 0 : t.src;
        t &&
          t['data-loaded-src'] !== o &&
          ((t['data-loaded-src'] = o),
          ('decode' in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (('empty' !== e && r(!0), null == n ? void 0 : n.current)) {
                  let e = new Event('load');
                  Object.defineProperty(e, 'target', {
                    writable: !1,
                    value: t,
                  });
                  let i = !1,
                    r = !1;
                  n.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => i,
                    isPropagationStopped: () => r,
                    persist: () => {},
                    preventDefault: () => {
                      (i = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (r = !0), e.stopPropagation();
                    },
                  });
                }
                (null == i ? void 0 : i.current) && i.current(t);
              }
            }));
      }
      function v(t) {
        let [e, n] = o.version.split('.', 2),
          i = parseInt(e, 10),
          r = parseInt(n, 10);
        return i > 18 || (18 === i && r >= 3)
          ? { fetchPriority: t }
          : { fetchpriority: t };
      }
      'undefined' == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let g = (0, o.forwardRef)((t, e) => {
        let {
          src: n,
          srcSet: i,
          sizes: r,
          height: a,
          width: l,
          decoding: u,
          className: h,
          style: c,
          fetchPriority: d,
          placeholder: f,
          loading: p,
          unoptimized: g,
          fill: y,
          onLoadRef: x,
          onLoadingCompleteRef: b,
          setBlurComplete: P,
          setShowAltText: w,
          onLoad: S,
          onError: T,
          ...A
        } = t;
        return (0, s.jsx)('img', {
          ...A,
          ...v(d),
          loading: p,
          width: l,
          height: a,
          decoding: u,
          'data-nimg': y ? 'fill' : '1',
          className: h,
          style: c,
          sizes: r,
          srcSet: i,
          src: n,
          ref: (0, o.useCallback)(
            (t) => {
              e &&
                ('function' == typeof e
                  ? e(t)
                  : 'object' == typeof e && (e.current = t)),
                t && (T && (t.src = t.src), t.complete && m(t, f, x, b, P, g));
            },
            [n, f, x, b, P, T, g, e],
          ),
          onLoad: (t) => {
            m(t.currentTarget, f, x, b, P, g);
          },
          onError: (t) => {
            w(!0), 'empty' !== f && P(!0), T && T(t);
          },
        });
      });
      function y(t) {
        let { isAppRouter: e, imgAttributes: n } = t,
          i = {
            as: 'image',
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...v(n.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(n.src, i), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                'link',
                { rel: 'preload', href: n.srcSet ? void 0 : n.src, ...i },
                '__nimg-' + n.src + n.srcSet + n.sizes,
              ),
            });
      }
      let x = (0, o.forwardRef)((t, e) => {
        let n = (0, o.useContext)(d.RouterContext),
          i = (0, o.useContext)(c.ImageConfigContext),
          r = (0, o.useMemo)(() => {
            let t = p || i || h.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              n = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: n };
          }, [i]),
          { onLoad: a, onLoadingComplete: l } = t,
          m = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          m.current = a;
        }, [a]);
        let v = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          v.current = l;
        }, [l]);
        let [x, b] = (0, o.useState)(!1),
          [P, w] = (0, o.useState)(!1),
          { props: S, meta: T } = (0, u.getImgProps)(t, {
            defaultLoader: f.default,
            imgConf: r,
            blurComplete: x,
            showAltText: P,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g, {
              ...S,
              unoptimized: T.unoptimized,
              placeholder: T.placeholder,
              fill: T.fill,
              onLoadRef: m,
              onLoadingCompleteRef: v,
              setBlurComplete: b,
              setShowAltText: w,
              ref: e,
            }),
            T.priority
              ? (0, s.jsx)(y, { isAppRouter: !n, imgAttributes: S })
              : null,
          ],
        });
      });
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5250: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let i = n(6921),
        r = n(7437),
        s = i._(n(2265)),
        o = n(4542),
        a = n(7434),
        l = n(1030),
        u = n(6874),
        h = n(2956),
        c = n(6993),
        d = n(8599),
        f = n(5291),
        p = n(6406),
        m = n(5786),
        v = n(1414),
        g = new Set();
      function y(t, e, n, i, r, s) {
        if ('undefined' != typeof window && (s || (0, a.isLocalURL)(e))) {
          if (!i.bypassPrefetchedCheck) {
            let r =
              e +
              '%' +
              n +
              '%' +
              (void 0 !== i.locale
                ? i.locale
                : 'locale' in t
                  ? t.locale
                  : void 0);
            if (g.has(r)) return;
            g.add(r);
          }
          Promise.resolve(s ? t.prefetch(e, r) : t.prefetch(e, n, i)).catch(
            (t) => {},
          );
        }
      }
      function x(t) {
        return 'string' == typeof t ? t : (0, l.formatUrl)(t);
      }
      let b = s.default.forwardRef(function (t, e) {
        let n, i;
        let {
          href: l,
          as: g,
          children: b,
          prefetch: P = null,
          passHref: w,
          replace: S,
          shallow: T,
          scroll: A,
          locale: E,
          onClick: C,
          onMouseEnter: R,
          onTouchStart: M,
          legacyBehavior: j = !1,
          ...O
        } = t;
        (n = b),
          j &&
            ('string' == typeof n || 'number' == typeof n) &&
            (n = (0, r.jsx)('a', { children: n }));
        let V = s.default.useContext(c.RouterContext),
          k = s.default.useContext(d.AppRouterContext),
          D = null != V ? V : k,
          L = !V,
          _ = !1 !== P,
          F = null === P ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
          { href: I, as: B } = s.default.useMemo(() => {
            if (!V) {
              let t = x(l);
              return { href: t, as: g ? x(g) : t };
            }
            let [t, e] = (0, o.resolveHref)(V, l, !0);
            return { href: t, as: g ? (0, o.resolveHref)(V, g) : e || t };
          }, [V, l, g]),
          N = s.default.useRef(I),
          U = s.default.useRef(B);
        j && (i = s.default.Children.only(n));
        let W = j ? i && 'object' == typeof i && i.ref : e,
          [$, z, Y] = (0, f.useIntersection)({ rootMargin: '200px' }),
          X = s.default.useCallback(
            (t) => {
              (U.current !== B || N.current !== I) &&
                (Y(), (U.current = B), (N.current = I)),
                $(t),
                W &&
                  ('function' == typeof W
                    ? W(t)
                    : 'object' == typeof W && (W.current = t));
            },
            [B, W, I, Y, $],
          );
        s.default.useEffect(() => {
          D && z && _ && y(D, I, B, { locale: E }, { kind: F }, L);
        }, [B, I, z, E, _, null == V ? void 0 : V.locale, D, L, F]);
        let H = {
          ref: X,
          onClick(t) {
            j || 'function' != typeof C || C(t),
              j &&
                i.props &&
                'function' == typeof i.props.onClick &&
                i.props.onClick(t),
              D &&
                !t.defaultPrevented &&
                (function (t, e, n, i, r, o, l, u, h) {
                  let { nodeName: c } = t.currentTarget;
                  if (
                    'A' === c.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute('target');
                      return (
                        (e && '_self' !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!h && !(0, a.isLocalURL)(n)))
                  )
                    return;
                  t.preventDefault();
                  let d = () => {
                    let t = null == l || l;
                    'beforePopState' in e
                      ? e[r ? 'replace' : 'push'](n, i, {
                          shallow: o,
                          locale: u,
                          scroll: t,
                        })
                      : e[r ? 'replace' : 'push'](i || n, { scroll: t });
                  };
                  h ? s.default.startTransition(d) : d();
                })(t, D, I, B, S, T, A, E, L);
          },
          onMouseEnter(t) {
            j || 'function' != typeof R || R(t),
              j &&
                i.props &&
                'function' == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(t),
              D &&
                (_ || !L) &&
                y(
                  D,
                  I,
                  B,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  L,
                );
          },
          onTouchStart(t) {
            j || 'function' != typeof M || M(t),
              j &&
                i.props &&
                'function' == typeof i.props.onTouchStart &&
                i.props.onTouchStart(t),
              D &&
                (_ || !L) &&
                y(
                  D,
                  I,
                  B,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  L,
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(B)) H.href = B;
        else if (!j || w || ('a' === i.type && !('href' in i.props))) {
          let t = void 0 !== E ? E : null == V ? void 0 : V.locale,
            e =
              (null == V ? void 0 : V.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                B,
                t,
                null == V ? void 0 : V.locales,
                null == V ? void 0 : V.domainLocales,
              );
          H.href =
            e ||
            (0, m.addBasePath)(
              (0, h.addLocale)(B, t, null == V ? void 0 : V.defaultLocale),
            );
        }
        return j
          ? s.default.cloneElement(i, H)
          : (0, r.jsx)('a', { ...O, ...H, children: n });
      });
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    2185: function (t, e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          requestIdleCallback: function () {
            return n;
          },
          cancelIdleCallback: function () {
            return i;
          },
        });
      let n =
          ('undefined' != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        i =
          ('undefined' != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    4542: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'resolveHref', {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let i = n(5770),
        r = n(1030),
        s = n(4544),
        o = n(6874),
        a = n(2139),
        l = n(7434),
        u = n(2360),
        h = n(6735);
      function c(t, e, n) {
        let c;
        let d = 'string' == typeof e ? e : (0, r.formatWithValidation)(e),
          f = d.match(/^[a-zA-Z]{1,}:\/\//),
          p = f ? d.slice(f[0].length) : d;
        if ((p.split('?', 1)[0] || '').match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              d +
              "' passed to next/router in page: '" +
              t.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.",
          );
          let e = (0, o.normalizeRepeatedSlashes)(p);
          d = (f ? f[0] : '') + e;
        }
        if (!(0, l.isLocalURL)(d)) return n ? [d] : d;
        try {
          c = new URL(d.startsWith('#') ? t.asPath : t.pathname, 'http://n');
        } catch (t) {
          c = new URL('/', 'http://n');
        }
        try {
          let t = new URL(d, c);
          t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
          let e = '';
          if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && n) {
            let n = (0, i.searchParamsToUrlQuery)(t.searchParams),
              { result: o, params: a } = (0, h.interpolateAs)(
                t.pathname,
                t.pathname,
                n,
              );
            o &&
              (e = (0, r.formatWithValidation)({
                pathname: o,
                hash: t.hash,
                query: (0, s.omit)(n, a),
              }));
          }
          let o =
            t.origin === c.origin ? t.href.slice(t.origin.length) : t.href;
          return n ? [o, e || o] : o;
        } catch (t) {
          return n ? [d] : d;
        }
      }
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5291: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'useIntersection', {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let i = n(2265),
        r = n(2185),
        s = 'function' == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      function l(t) {
        let { rootRef: e, rootMargin: n, disabled: l } = t,
          u = l || !s,
          [h, c] = (0, i.useState)(!1),
          d = (0, i.useRef)(null),
          f = (0, i.useCallback)((t) => {
            d.current = t;
          }, []);
        return (
          (0, i.useEffect)(() => {
            if (s) {
              if (u || h) return;
              let t = d.current;
              if (t && t.tagName)
                return (function (t, e, n) {
                  let {
                    id: i,
                    observer: r,
                    elements: s,
                  } = (function (t) {
                    let e;
                    let n = {
                        root: t.root || null,
                        margin: t.rootMargin || '',
                      },
                      i = a.find(
                        (t) => t.root === n.root && t.margin === n.margin,
                      );
                    if (i && (e = o.get(i))) return e;
                    let r = new Map();
                    return (
                      (e = {
                        id: n,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = r.get(t.target),
                              n = t.isIntersecting || t.intersectionRatio > 0;
                            e && n && e(n);
                          });
                        }, t),
                        elements: r,
                      }),
                      a.push(n),
                      o.set(n, e),
                      e
                    );
                  })(n);
                  return (
                    s.set(t, e),
                    r.observe(t),
                    function () {
                      if ((s.delete(t), r.unobserve(t), 0 === s.size)) {
                        r.disconnect(), o.delete(i);
                        let t = a.findIndex(
                          (t) => t.root === i.root && t.margin === i.margin,
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && c(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: n,
                });
            } else if (!h) {
              let t = (0, r.requestIdleCallback)(() => c(!0));
              return () => (0, r.cancelIdleCallback)(t);
            }
          }, [u, n, e, h, d.current]),
          [
            f,
            h,
            (0, i.useCallback)(() => {
              c(!1);
            }, []),
          ]
        );
      }
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5827: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'AmpStateContext', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = n(6921)._(n(2265)).default.createContext({});
    },
    3044: function (t, e) {
      function n(t) {
        let {
          ampFirst: e = !1,
          hybrid: n = !1,
          hasQuery: i = !1,
        } = void 0 === t ? {} : t;
        return e || (n && i);
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'isInAmpMode', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    2202: function (t, e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'escapeStringRegexp', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        i = /[|\\{}()[\]^$+*?.-]/g;
      function r(t) {
        return n.test(t) ? t.replace(i, '\\$&') : t;
      }
    },
    8630: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'getImgProps', {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        n(6184);
      let i = n(7160),
        r = n(6906);
      function s(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : 'number' == typeof t
            ? Number.isFinite(t)
              ? t
              : NaN
            : 'string' == typeof t && /^[0-9]+$/.test(t)
              ? parseInt(t, 10)
              : NaN;
      }
      function a(t, e) {
        var n;
        let a,
          l,
          u,
          {
            src: h,
            sizes: c,
            unoptimized: d = !1,
            priority: f = !1,
            loading: p,
            className: m,
            quality: v,
            width: g,
            height: y,
            fill: x = !1,
            style: b,
            onLoad: P,
            onLoadingComplete: w,
            placeholder: S = 'empty',
            blurDataURL: T,
            fetchPriority: A,
            layout: E,
            objectFit: C,
            objectPosition: R,
            lazyBoundary: M,
            lazyRoot: j,
            ...O
          } = t,
          { imgConf: V, showAltText: k, blurComplete: D, defaultLoader: L } = e,
          _ = V || r.imageConfigDefault;
        if ('allSizes' in _) a = _;
        else {
          let t = [..._.deviceSizes, ..._.imageSizes].sort((t, e) => t - e),
            e = _.deviceSizes.sort((t, e) => t - e);
          a = { ..._, allSizes: t, deviceSizes: e };
        }
        let F = O.loader || L;
        delete O.loader, delete O.srcSet;
        let I = '__next_img_default' in F;
        if (I) {
          if ('custom' === a.loader)
            throw Error(
              'Image with src "' +
                h +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
            );
        } else {
          let t = F;
          F = (e) => {
            let { config: n, ...i } = e;
            return t(i);
          };
        }
        if (E) {
          'fill' === E && (x = !0);
          let t = {
            intrinsic: { maxWidth: '100%', height: 'auto' },
            responsive: { width: '100%', height: 'auto' },
          }[E];
          t && (b = { ...b, ...t });
          let e = { responsive: '100vw', fill: '100vw' }[E];
          e && !c && (c = e);
        }
        let B = '',
          N = o(g),
          U = o(y);
        if ('object' == typeof (n = h) && (s(n) || void 0 !== n.src)) {
          let t = s(h) ? h.default : h;
          if (!t.src)
            throw Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
                JSON.stringify(t),
            );
          if (!t.height || !t.width)
            throw Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
                JSON.stringify(t),
            );
          if (
            ((l = t.blurWidth),
            (u = t.blurHeight),
            (T = T || t.blurDataURL),
            (B = t.src),
            !x)
          ) {
            if (N || U) {
              if (N && !U) {
                let e = N / t.width;
                U = Math.round(t.height * e);
              } else if (!N && U) {
                let e = U / t.height;
                N = Math.round(t.width * e);
              }
            } else (N = t.width), (U = t.height);
          }
        }
        let W = !f && ('lazy' === p || void 0 === p);
        (!(h = 'string' == typeof h ? h : B) ||
          h.startsWith('data:') ||
          h.startsWith('blob:')) &&
          ((d = !0), (W = !1)),
          a.unoptimized && (d = !0),
          I && h.endsWith('.svg') && !a.dangerouslyAllowSVG && (d = !0),
          f && (A = 'high');
        let $ = o(v),
          z = Object.assign(
            x
              ? {
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: C,
                  objectPosition: R,
                }
              : {},
            k ? {} : { color: 'transparent' },
            b,
          ),
          Y =
            D || 'empty' === S
              ? null
              : 'blur' === S
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (0, i.getImageBlurSvg)({
                    widthInt: N,
                    heightInt: U,
                    blurWidth: l,
                    blurHeight: u,
                    blurDataURL: T || '',
                    objectFit: z.objectFit,
                  }) +
                  '")'
                : 'url("' + S + '")',
          X = Y
            ? {
                backgroundSize: z.objectFit || 'cover',
                backgroundPosition: z.objectPosition || '50% 50%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: Y,
              }
            : {},
          H = (function (t) {
            let {
              config: e,
              src: n,
              unoptimized: i,
              width: r,
              quality: s,
              sizes: o,
              loader: a,
            } = t;
            if (i) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, n) {
                let { deviceSizes: i, allSizes: r } = t;
                if (n) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let i; (i = t.exec(n)); i) e.push(parseInt(i[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: r.filter((e) => e >= i[0] * t),
                      kind: 'w',
                    };
                  }
                  return { widths: r, kind: 'w' };
                }
                return 'number' != typeof e
                  ? { widths: i, kind: 'w' }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => r.find((e) => e >= t) || r[r.length - 1],
                          ),
                        ),
                      ],
                      kind: 'x',
                    };
              })(e, r, o),
              h = l.length - 1;
            return {
              sizes: o || 'w' !== u ? o : '100vw',
              srcSet: l
                .map(
                  (t, i) =>
                    a({ config: e, src: n, quality: s, width: t }) +
                    ' ' +
                    ('w' === u ? t : i + 1) +
                    u,
                )
                .join(', '),
              src: a({ config: e, src: n, quality: s, width: l[h] }),
            };
          })({
            config: a,
            src: h,
            unoptimized: d,
            width: N,
            quality: $,
            sizes: c,
            loader: F,
          });
        return {
          props: {
            ...O,
            loading: W ? 'lazy' : p,
            fetchPriority: A,
            width: N,
            height: U,
            decoding: 'async',
            className: m,
            style: { ...z, ...X },
            sizes: H.sizes,
            srcSet: H.srcSet,
            src: H.src,
          },
          meta: { unoptimized: d, priority: f, placeholder: S, fill: x },
        };
      }
    },
    2251: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          defaultHead: function () {
            return c;
          },
          default: function () {
            return m;
          },
        });
      let i = n(6921),
        r = n(1884),
        s = n(7437),
        o = r._(n(2265)),
        a = i._(n(7392)),
        l = n(5827),
        u = n(7484),
        h = n(3044);
      function c(t) {
        void 0 === t && (t = !1);
        let e = [(0, s.jsx)('meta', { charSet: 'utf-8' })];
        return (
          t ||
            e.push(
              (0, s.jsx)('meta', {
                name: 'viewport',
                content: 'width=device-width',
              }),
            ),
          e
        );
      }
      function d(t, e) {
        return 'string' == typeof e || 'number' == typeof e
          ? t
          : e.type === o.default.Fragment
            ? t.concat(
                o.default.Children.toArray(e.props.children).reduce(
                  (t, e) =>
                    'string' == typeof e || 'number' == typeof e
                      ? t
                      : t.concat(e),
                  [],
                ),
              )
            : t.concat(e);
      }
      n(6184);
      let f = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function p(t, e) {
        let { inAmpMode: n } = e;
        return t
          .reduce(d, [])
          .reverse()
          .concat(c(n).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                n = new Set(),
                i = {};
              return (r) => {
                let s = !0,
                  o = !1;
                if (
                  r.key &&
                  'number' != typeof r.key &&
                  r.key.indexOf('$') > 0
                ) {
                  o = !0;
                  let e = r.key.slice(r.key.indexOf('$') + 1);
                  t.has(e) ? (s = !1) : t.add(e);
                }
                switch (r.type) {
                  case 'title':
                  case 'base':
                    e.has(r.type) ? (s = !1) : e.add(r.type);
                    break;
                  case 'meta':
                    for (let t = 0, e = f.length; t < e; t++) {
                      let e = f[t];
                      if (r.props.hasOwnProperty(e)) {
                        if ('charSet' === e) n.has(e) ? (s = !1) : n.add(e);
                        else {
                          let t = r.props[e],
                            n = i[e] || new Set();
                          ('name' !== e || !o) && n.has(t)
                            ? (s = !1)
                            : (n.add(t), (i[e] = n));
                        }
                      }
                    }
                }
                return s;
              };
            })(),
          )
          .reverse()
          .map((t, e) => {
            let i = t.key || e;
            if (
              !n &&
              'link' === t.type &&
              t.props.href &&
              [
                'https://fonts.googleapis.com/css',
                'https://use.typekit.net/',
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e['data-href'] = e.href),
                (e.href = void 0),
                (e['data-optimized-fonts'] = !0),
                o.default.cloneElement(t, e)
              );
            }
            return o.default.cloneElement(t, { key: i });
          });
      }
      let m = function (t) {
        let { children: e } = t,
          n = (0, o.useContext)(l.AmpStateContext),
          i = (0, o.useContext)(u.HeadManagerContext);
        return (0, s.jsx)(a.default, {
          reduceComponentsToState: p,
          headManager: i,
          inAmpMode: (0, h.isInAmpMode)(n),
          children: e,
        });
      };
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    7160: function (t, e) {
      function n(t) {
        let {
            widthInt: e,
            heightInt: n,
            blurWidth: i,
            blurHeight: r,
            blurDataURL: s,
            objectFit: o,
          } = t,
          a = i ? 40 * i : e,
          l = r ? 40 * r : n,
          u = a && l ? "viewBox='0 0 " + a + ' ' + l + "'" : '';
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? 'none'
            : 'contain' === o
              ? 'xMidYMid'
              : 'cover' === o
                ? 'xMidYMid slice'
                : 'none') +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'getImageBlurSvg', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    337: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'ImageConfigContext', {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(6921)._(n(2265)),
        r = n(6906),
        s = i.default.createContext(r.imageConfigDefault);
    },
    6906: function (t, e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return i;
          },
        });
      let n = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
        i = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          loaderFile: '',
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ['image/webp'],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: 'inline',
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    7447: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          getImageProps: function () {
            return a;
          },
          default: function () {
            return l;
          },
        });
      let i = n(6921),
        r = n(8630),
        s = n(1749),
        o = i._(n(536)),
        a = (t) => {
          let { props: e } = (0, r.getImgProps)(t, {
            defaultLoader: o.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: '/_next/image',
              loader: 'default',
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [t, n] of Object.entries(e)) void 0 === n && delete e[t];
          return { props: e };
        },
        l = s.Image;
    },
    536: function (t, e) {
      function n(t) {
        let { config: e, src: n, width: i, quality: r } = t;
        return (
          e.path +
          '?url=' +
          encodeURIComponent(n) +
          '&w=' +
          i +
          '&q=' +
          (r || 75)
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        (n.__next_img_default = !0);
      let i = n;
    },
    6993: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'RouterContext', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = n(6921)._(n(2265)).default.createContext(null);
    },
    1030: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          formatUrl: function () {
            return s;
          },
          urlObjectKeys: function () {
            return o;
          },
          formatWithValidation: function () {
            return a;
          },
        });
      let i = n(1884)._(n(5770)),
        r = /https?|ftp|gopher|file/;
      function s(t) {
        let { auth: e, hostname: n } = t,
          s = t.protocol || '',
          o = t.pathname || '',
          a = t.hash || '',
          l = t.query || '',
          u = !1;
        (e = e ? encodeURIComponent(e).replace(/%3A/i, ':') + '@' : ''),
          t.host
            ? (u = e + t.host)
            : n &&
              ((u = e + (~n.indexOf(':') ? '[' + n + ']' : n)),
              t.port && (u += ':' + t.port)),
          l &&
            'object' == typeof l &&
            (l = String(i.urlQueryToSearchParams(l)));
        let h = t.search || (l && '?' + l) || '';
        return (
          s && !s.endsWith(':') && (s += ':'),
          t.slashes || ((!s || r.test(s)) && !1 !== u)
            ? ((u = '//' + (u || '')), o && '/' !== o[0] && (o = '/' + o))
            : u || (u = ''),
          a && '#' !== a[0] && (a = '#' + a),
          h && '?' !== h[0] && (h = '?' + h),
          '' +
            s +
            u +
            (o = o.replace(/[?#]/g, encodeURIComponent)) +
            (h = h.replace('#', '%23')) +
            a
        );
      }
      let o = [
        'auth',
        'hash',
        'host',
        'hostname',
        'href',
        'path',
        'pathname',
        'port',
        'protocol',
        'query',
        'search',
        'slashes',
      ];
      function a(t) {
        return s(t);
      }
    },
    2360: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          getSortedRoutes: function () {
            return i.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return r.isDynamicRoute;
          },
        });
      let i = n(7409),
        r = n(1305);
    },
    6735: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'interpolateAs', {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(2395),
        r = n(9935);
      function s(t, e, n) {
        let s = '',
          o = (0, r.getRouteRegex)(t),
          a = o.groups,
          l = (e !== t ? (0, i.getRouteMatcher)(o)(e) : '') || n;
        s = t;
        let u = Object.keys(a);
        return (
          u.every((t) => {
            let e = l[t] || '',
              { repeat: n, optional: i } = a[t],
              r = '[' + (n ? '...' : '') + t + ']';
            return (
              i && (r = (e ? '' : '/') + '[' + r + ']'),
              n && !Array.isArray(e) && (e = [e]),
              (i || t in l) &&
                (s =
                  s.replace(
                    r,
                    n
                      ? e.map((t) => encodeURIComponent(t)).join('/')
                      : encodeURIComponent(e),
                  ) || '/')
            );
          }) || (s = ''),
          { params: u, result: s }
        );
      }
    },
    1305: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'isDynamicRoute', {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(4749),
        r = /\/\[[^/]+?\](?=\/|$)/;
      function s(t) {
        return (
          (0, i.isInterceptionRouteAppPath)(t) &&
            (t = (0, i.extractInterceptionRouteInformation)(
              t,
            ).interceptedRoute),
          r.test(t)
        );
      }
    },
    7434: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'isLocalURL', {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(6874),
        r = n(7379);
      function s(t) {
        if (!(0, i.isAbsoluteUrl)(t)) return !0;
        try {
          let e = (0, i.getLocationOrigin)(),
            n = new URL(t, e);
          return n.origin === e && (0, r.hasBasePath)(n.pathname);
        } catch (t) {
          return !1;
        }
      }
    },
    4544: function (t, e) {
      function n(t, e) {
        let n = {};
        return (
          Object.keys(t).forEach((i) => {
            e.includes(i) || (n[i] = t[i]);
          }),
          n
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'omit', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    5770: function (t, e) {
      function n(t) {
        let e = {};
        return (
          t.forEach((t, n) => {
            void 0 === e[n]
              ? (e[n] = t)
              : Array.isArray(e[n])
                ? e[n].push(t)
                : (e[n] = [e[n], t]);
          }),
          e
        );
      }
      function i(t) {
        return 'string' != typeof t &&
          ('number' != typeof t || isNaN(t)) &&
          'boolean' != typeof t
          ? ''
          : String(t);
      }
      function r(t) {
        let e = new URLSearchParams();
        return (
          Object.entries(t).forEach((t) => {
            let [n, r] = t;
            Array.isArray(r)
              ? r.forEach((t) => e.append(n, i(t)))
              : e.set(n, i(r));
          }),
          e
        );
      }
      function s(t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          n[i - 1] = arguments[i];
        return (
          n.forEach((e) => {
            Array.from(e.keys()).forEach((e) => t.delete(e)),
              e.forEach((e, n) => t.append(n, e));
          }),
          t
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return r;
          },
          assign: function () {
            return s;
          },
        });
    },
    2395: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'getRouteMatcher', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let i = n(6874);
      function r(t) {
        let { re: e, groups: n } = t;
        return (t) => {
          let r = e.exec(t);
          if (!r) return !1;
          let s = (t) => {
              try {
                return decodeURIComponent(t);
              } catch (t) {
                throw new i.DecodeError('failed to decode param');
              }
            },
            o = {};
          return (
            Object.keys(n).forEach((t) => {
              let e = n[t],
                i = r[e.pos];
              void 0 !== i &&
                (o[t] = ~i.indexOf('/')
                  ? i.split('/').map((t) => s(t))
                  : e.repeat
                    ? [s(i)]
                    : s(i));
            }),
            o
          );
        };
      }
    },
    9935: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          getRouteRegex: function () {
            return l;
          },
          getNamedRouteRegex: function () {
            return c;
          },
          getNamedMiddlewareRegex: function () {
            return d;
          },
        });
      let i = n(4749),
        r = n(2202),
        s = n(5868);
      function o(t) {
        let e = t.startsWith('[') && t.endsWith(']');
        e && (t = t.slice(1, -1));
        let n = t.startsWith('...');
        return n && (t = t.slice(3)), { key: t, repeat: n, optional: e };
      }
      function a(t) {
        let e = (0, s.removeTrailingSlash)(t).slice(1).split('/'),
          n = {},
          a = 1;
        return {
          parameterizedRoute: e
            .map((t) => {
              let e = i.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e)),
                s = t.match(/\[((?:\[.*\])|.+)\]/);
              if (e && s) {
                let { key: t, optional: i, repeat: l } = o(s[1]);
                return (
                  (n[t] = { pos: a++, repeat: l, optional: i }),
                  '/' + (0, r.escapeStringRegexp)(e) + '([^/]+?)'
                );
              }
              if (!s) return '/' + (0, r.escapeStringRegexp)(t);
              {
                let { key: t, repeat: e, optional: i } = o(s[1]);
                return (
                  (n[t] = { pos: a++, repeat: e, optional: i }),
                  e ? (i ? '(?:/(.+?))?' : '/(.+?)') : '/([^/]+?)'
                );
              }
            })
            .join(''),
          groups: n,
        };
      }
      function l(t) {
        let { parameterizedRoute: e, groups: n } = a(t);
        return { re: RegExp('^' + e + '(?:/)?$'), groups: n };
      }
      function u(t) {
        let {
            interceptionMarker: e,
            getSafeRouteKey: n,
            segment: i,
            routeKeys: s,
            keyPrefix: a,
          } = t,
          { key: l, optional: u, repeat: h } = o(i),
          c = l.replace(/\W/g, '');
        a && (c = '' + a + c);
        let d = !1;
        (0 === c.length || c.length > 30) && (d = !0),
          isNaN(parseInt(c.slice(0, 1))) || (d = !0),
          d && (c = n()),
          a ? (s[c] = '' + a + l) : (s[c] = l);
        let f = e ? (0, r.escapeStringRegexp)(e) : '';
        return h
          ? u
            ? '(?:/' + f + '(?<' + c + '>.+?))?'
            : '/' + f + '(?<' + c + '>.+?)'
          : '/' + f + '(?<' + c + '>[^/]+?)';
      }
      function h(t, e) {
        let n;
        let o = (0, s.removeTrailingSlash)(t).slice(1).split('/'),
          a =
            ((n = 0),
            () => {
              let t = '',
                e = ++n;
              for (; e > 0; )
                (t += String.fromCharCode(97 + ((e - 1) % 26))),
                  (e = Math.floor((e - 1) / 26));
              return t;
            }),
          l = {};
        return {
          namedParameterizedRoute: o
            .map((t) => {
              let n = i.INTERCEPTION_ROUTE_MARKERS.some((e) => t.startsWith(e)),
                s = t.match(/\[((?:\[.*\])|.+)\]/);
              if (n && s) {
                let [n] = t.split(s[0]);
                return u({
                  getSafeRouteKey: a,
                  interceptionMarker: n,
                  segment: s[1],
                  routeKeys: l,
                  keyPrefix: e ? 'nxtI' : void 0,
                });
              }
              return s
                ? u({
                    getSafeRouteKey: a,
                    segment: s[1],
                    routeKeys: l,
                    keyPrefix: e ? 'nxtP' : void 0,
                  })
                : '/' + (0, r.escapeStringRegexp)(t);
            })
            .join(''),
          routeKeys: l,
        };
      }
      function c(t, e) {
        let n = h(t, e);
        return {
          ...l(t),
          namedRegex: '^' + n.namedParameterizedRoute + '(?:/)?$',
          routeKeys: n.routeKeys,
        };
      }
      function d(t, e) {
        let { parameterizedRoute: n } = a(t),
          { catchAll: i = !0 } = e;
        if ('/' === n) return { namedRegex: '^/' + (i ? '.*' : '') + '$' };
        let { namedParameterizedRoute: r } = h(t, !1);
        return { namedRegex: '^' + r + (i ? '(?:(/.*)?)' : '') + '$' };
      }
    },
    7409: function (t, e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'getSortedRoutes', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      class n {
        insert(t) {
          this._insert(t.split('/').filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(t) {
          void 0 === t && (t = '/');
          let e = [...this.children.keys()].sort();
          null !== this.slugName && e.splice(e.indexOf('[]'), 1),
            null !== this.restSlugName && e.splice(e.indexOf('[...]'), 1),
            null !== this.optionalRestSlugName &&
              e.splice(e.indexOf('[[...]]'), 1);
          let n = e
            .map((e) => this.children.get(e)._smoosh('' + t + e + '/'))
            .reduce((t, e) => [...t, ...e], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get('[]')
                  ._smoosh(t + '[' + this.slugName + ']/'),
              ),
            !this.placeholder)
          ) {
            let e = '/' === t ? '/' : t.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  e +
                  '" and "' +
                  e +
                  '[[...' +
                  this.optionalRestSlugName +
                  ']]").',
              );
            n.unshift(e);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get('[...]')
                  ._smoosh(t + '[...' + this.restSlugName + ']/'),
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get('[[...]]')
                  ._smoosh(t + '[[...' + this.optionalRestSlugName + ']]/'),
              ),
            n
          );
        }
        _insert(t, e, i) {
          if (0 === t.length) {
            this.placeholder = !1;
            return;
          }
          if (i) throw Error('Catch-all must be the last part of the URL.');
          let r = t[0];
          if (r.startsWith('[') && r.endsWith(']')) {
            let n = r.slice(1, -1),
              o = !1;
            if (
              (n.startsWith('[') &&
                n.endsWith(']') &&
                ((n = n.slice(1, -1)), (o = !0)),
              n.startsWith('...') && ((n = n.substring(3)), (i = !0)),
              n.startsWith('[') || n.endsWith(']'))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "').",
              );
            if (n.startsWith('.'))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "').",
              );
            function s(t, n) {
              if (null !== t && t !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    t +
                    "' !== '" +
                    n +
                    "').",
                );
              e.forEach((t) => {
                if (t === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path',
                  );
                if (t.replace(/\W/g, '') === r.replace(/\W/g, ''))
                  throw Error(
                    'You cannot have the slug names "' +
                      t +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path',
                  );
              }),
                e.push(n);
            }
            if (i) {
              if (o) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      t[0] +
                      '" ).',
                  );
                s(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (r = '[[...]]');
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      t[0] +
                      '").',
                  );
                s(this.restSlugName, n), (this.restSlugName = n), (r = '[...]');
              }
            } else {
              if (o)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    t[0] +
                    '").',
                );
              s(this.slugName, n), (this.slugName = n), (r = '[]');
            }
          }
          this.children.has(r) || this.children.set(r, new n()),
            this.children.get(r)._insert(t.slice(1), e, i);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function i(t) {
        let e = new n();
        return t.forEach((t) => e.insert(t)), e.smoosh();
      }
    },
    7392: function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let i = n(2265),
        r = 'undefined' == typeof window,
        s = r ? () => {} : i.useLayoutEffect,
        o = r ? () => {} : i.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: n } = t;
        function a() {
          if (e && e.mountedInstances) {
            let r = i.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean),
            );
            e.updateHead(n(r, t));
          }
        }
        if (r) {
          var l;
          null == e || null == (l = e.mountedInstances) || l.add(t.children),
            a();
        }
        return (
          s(() => {
            var n;
            return (
              null == e ||
                null == (n = e.mountedInstances) ||
                n.add(t.children),
              () => {
                var n;
                null == e ||
                  null == (n = e.mountedInstances) ||
                  n.delete(t.children);
              }
            );
          }),
          s(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            ),
          ),
          o(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            ),
          ),
          null
        );
      }
    },
    6874: function (t, e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return i;
          },
          isAbsoluteUrl: function () {
            return s;
          },
          getLocationOrigin: function () {
            return o;
          },
          getURL: function () {
            return a;
          },
          getDisplayName: function () {
            return l;
          },
          isResSent: function () {
            return u;
          },
          normalizeRepeatedSlashes: function () {
            return h;
          },
          loadGetInitialProps: function () {
            return c;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return f;
          },
          DecodeError: function () {
            return p;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return v;
          },
          MissingStaticPage: function () {
            return g;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          stringifyError: function () {
            return x;
          },
        });
      let n = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
      function i(t) {
        let e,
          n = !1;
        return function () {
          for (var i = arguments.length, r = Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
          return n || ((n = !0), (e = t(...r))), e;
        };
      }
      let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = (t) => r.test(t);
      function o() {
        let { protocol: t, hostname: e, port: n } = window.location;
        return t + '//' + e + (n ? ':' + n : '');
      }
      function a() {
        let { href: t } = window.location,
          e = o();
        return t.substring(e.length);
      }
      function l(t) {
        return 'string' == typeof t ? t : t.displayName || t.name || 'Unknown';
      }
      function u(t) {
        return t.finished || t.headersSent;
      }
      function h(t) {
        let e = t.split('?');
        return (
          e[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
          (e[1] ? '?' + e.slice(1).join('?') : '')
        );
      }
      async function c(t, e) {
        let n = e.res || (e.ctx && e.ctx.res);
        if (!t.getInitialProps)
          return e.ctx && e.Component
            ? { pageProps: await c(e.Component, e.ctx) }
            : {};
        let i = await t.getInitialProps(e);
        if (n && u(n)) return i;
        if (!i)
          throw Error(
            '"' +
              l(t) +
              '.getInitialProps()" should resolve to an object. But found "' +
              i +
              '" instead.',
          );
        return i;
      }
      let d = 'undefined' != typeof performance,
        f =
          d &&
          ['mark', 'measure', 'getEntriesByName'].every(
            (t) => 'function' == typeof performance[t],
          );
      class p extends Error {}
      class m extends Error {}
      class v extends Error {
        constructor(t) {
          super(),
            (this.code = 'ENOENT'),
            (this.name = 'PageNotFoundError'),
            (this.message = 'Cannot find module for page: ' + t);
        }
      }
      class g extends Error {
        constructor(t, e) {
          super(),
            (this.message =
              'Failed to load static file for page: ' + t + ' ' + e);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = 'ENOENT'),
            (this.message = 'Cannot find the middleware module');
        }
      }
      function x(t) {
        return JSON.stringify({ message: t.message, stack: t.stack });
      }
    },
    1218: function (t, e, n) {
      var i = n(2265),
        r = n(9341),
        s = n(1053),
        o = function () {
          return (o =
            Object.assign ||
            function (t) {
              for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var r in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }).apply(this, arguments);
        },
        a = function (t, e) {
          var n = {};
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) &&
              0 > e.indexOf(i) &&
              (n[i] = t[i]);
          if (null != t && 'function' == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, i = Object.getOwnPropertySymbols(t);
              r < i.length;
              r++
            )
              0 > e.indexOf(i[r]) &&
                Object.prototype.propertyIsEnumerable.call(t, i[r]) &&
                (n[i[r]] = t[i[r]]);
          return n;
        },
        l = (0, s.i)(
          'ClipLoader',
          '0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}',
          'clip',
        );
      e.Z = function (t) {
        var e = t.loading,
          n = t.color,
          s = void 0 === n ? '#000000' : n,
          u = t.speedMultiplier,
          h = t.cssOverride,
          c = t.size,
          d = void 0 === c ? 35 : c,
          f = a(t, [
            'loading',
            'color',
            'speedMultiplier',
            'cssOverride',
            'size',
          ]),
          p = o(
            {
              background: 'transparent !important',
              width: (0, r.E)(d),
              height: (0, r.E)(d),
              borderRadius: '100%',
              border: '2px solid',
              borderTopColor: s,
              borderBottomColor: 'transparent',
              borderLeftColor: s,
              borderRightColor: s,
              display: 'inline-block',
              animation: ''
                .concat(l, ' ')
                .concat(0.75 / (void 0 === u ? 1 : u), 's 0s infinite linear'),
              animationFillMode: 'both',
            },
            void 0 === h ? {} : h,
          );
        return void 0 === e || e
          ? i.createElement('span', o({ style: p }, f))
          : null;
      };
    },
    1053: function (t, e, n) {
      n.d(e, {
        i: function () {
          return i;
        },
      });
      var i = function (t, e, n) {
        var i = 'react-spinners-'.concat(t, '-').concat(n);
        if ('undefined' == typeof window || !window.document) return i;
        var r = document.createElement('style');
        document.head.appendChild(r);
        var s = r.sheet,
          o = '\n    @keyframes '
            .concat(i, ' {\n      ')
            .concat(e, '\n    }\n  ');
        return s && s.insertRule(o, 0), i;
      };
    },
    9341: function (t, e, n) {
      n.d(e, {
        E: function () {
          return s;
        },
        h: function () {
          return r;
        },
      });
      var i = {
        cm: !0,
        mm: !0,
        in: !0,
        px: !0,
        pt: !0,
        pc: !0,
        em: !0,
        ex: !0,
        ch: !0,
        rem: !0,
        vw: !0,
        vh: !0,
        vmin: !0,
        vmax: !0,
        '%': !0,
      };
      function r(t) {
        if ('number' == typeof t) return { value: t, unit: 'px' };
        var e,
          n = (t.match(/^[0-9.]*/) || '').toString();
        e = n.includes('.') ? parseFloat(n) : parseInt(n, 10);
        var r = (t.match(/[^0-9]*$/) || '').toString();
        return i[r]
          ? { value: e, unit: r }
          : (console.warn(
              'React Spinners: '
                .concat(t, ' is not a valid css value. Defaulting to ')
                .concat(e, 'px.'),
            ),
            { value: e, unit: 'px' });
      }
      function s(t) {
        var e = r(t);
        return ''.concat(e.value).concat(e.unit);
      }
    },
    9735: function (t, e, n) {
      n.d(e, {
        o: function () {
          return l;
        },
      });
      var i,
        r = n(2265);
      function s(t = 'https://app.cal.com/embed/embed.js') {
        var e;
        let n, i;
        /*!  Copying ends here. */ return (
          (e = window),
          (n = function (t, e) {
            t.q.push(e);
          }),
          (i = e.document),
          (e.Cal =
            e.Cal ||
            function () {
              let r = e.Cal,
                s = arguments;
              if (
                (r.loaded ||
                  ((r.ns = {}),
                  (r.q = r.q || []),
                  (i.head.appendChild(i.createElement('script')).src = t),
                  (r.loaded = !0)),
                'init' === s[0])
              ) {
                let t = function () {
                    n(t, arguments);
                  },
                  e = s[1];
                (t.q = t.q || []),
                  'string' == typeof e ? (r.ns[e] = t) && n(t, s) : n(r, s);
                return;
              }
              n(r, s);
            }),
          window.Cal
        );
      }
      s.toString();
      var o = { exports: {} },
        a = {};
      (o.exports = (function () {
        if (i) return a;
        i = 1;
        var t = Symbol.for('react.element'),
          e = Symbol.for('react.fragment'),
          n = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          o = { key: !0, ref: !0, __self: !0, __source: !0 };
        function l(e, i, r) {
          var a,
            l = {},
            u = null,
            h = null;
          for (a in (void 0 !== r && (u = '' + r),
          void 0 !== i.key && (u = '' + i.key),
          void 0 !== i.ref && (h = i.ref),
          i))
            n.call(i, a) && !o.hasOwnProperty(a) && (l[a] = i[a]);
          if (e && e.defaultProps)
            for (a in (i = e.defaultProps)) void 0 === l[a] && (l[a] = i[a]);
          return {
            $$typeof: t,
            type: e,
            key: u,
            ref: h,
            props: l,
            _owner: s.current,
          };
        }
        return (a.Fragment = e), (a.jsx = l), (a.jsxs = l), a;
      })()),
        o.exports.jsx;
      let l = (t) =>
        new Promise(function e(n) {
          s(t);
          let i = window.Cal;
          if (!i) {
            setTimeout(() => {
              e(n);
            }, 50);
            return;
          }
          n(i);
        });
    },
    9806: function (t, e, n) {
      n.d(e, {
        S: function () {
          return c;
        },
      });
      var i = n(3303),
        r = n(7229),
        s = n(9908),
        o = n(2476);
      function a(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let l = ['duration', 'bounce'],
        u = ['stiffness', 'damping', 'mass'];
      function h(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function c({ keyframes: t, restDelta: e, restSpeed: n, ...c }) {
        let d;
        let f = t[0],
          p = t[t.length - 1],
          m = { done: !1, value: f },
          {
            stiffness: v,
            damping: g,
            mass: y,
            duration: x,
            velocity: b,
            isResolvedFromDuration: P,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!h(t, u) && h(t, l)) {
              let n = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: n = 0,
                mass: r = 1,
              }) {
                let l, u;
                (0, s.K)(
                  t <= (0, i.w)(10),
                  'Spring duration must be 10 seconds or less',
                );
                let h = 1 - e;
                (h = (0, o.u)(0.05, 1, h)),
                  (t = (0, o.u)(0.01, 10, (0, i.X)(t))),
                  h < 1
                    ? ((l = (e) => {
                        let i = e * h,
                          r = i * t;
                        return 0.001 - ((i - n) / a(e, h)) * Math.exp(-r);
                      }),
                      (u = (e) => {
                        let i = e * h * t,
                          r = Math.pow(h, 2) * Math.pow(e, 2) * t,
                          s = a(Math.pow(e, 2), h);
                        return (
                          ((i * n + n - r) *
                            Math.exp(-i) *
                            (-l(e) + 0.001 > 0 ? -1 : 1)) /
                          s
                        );
                      }))
                    : ((l = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - n) * t + 1)),
                      (u = (e) => t * t * (n - e) * Math.exp(-e * t)));
                let c = (function (t, e, n) {
                  let i = n;
                  for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                  return i;
                })(l, u, 5 / t);
                if (((t = (0, i.w)(t)), isNaN(c)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(c, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * h * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...n, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...c, velocity: -(0, i.X)(c.velocity || 0) }),
          w = b || 0,
          S = g / (2 * Math.sqrt(v * y)),
          T = p - f,
          A = (0, i.X)(Math.sqrt(v / y)),
          E = 5 > Math.abs(T);
        if ((n || (n = E ? 0.01 : 2), e || (e = E ? 0.005 : 0.5), S < 1)) {
          let t = a(A, S);
          d = (e) =>
            p -
            Math.exp(-S * A * e) *
              (((w + S * A * T) / t) * Math.sin(t * e) + T * Math.cos(t * e));
        } else if (1 === S)
          d = (t) => p - Math.exp(-A * t) * (T + (w + A * T) * t);
        else {
          let t = A * Math.sqrt(S * S - 1);
          d = (e) => {
            let n = Math.exp(-S * A * e),
              i = Math.min(t * e, 300);
            return (
              p -
              (n * ((w + S * A * T) * Math.sinh(i) + t * T * Math.cosh(i))) / t
            );
          };
        }
        return {
          calculatedDuration: (P && x) || null,
          next: (t) => {
            let i = d(t);
            if (P) m.done = t >= x;
            else {
              let s = w;
              0 !== t && (s = S < 1 ? (0, r.P)(d, t, i) : 0);
              let o = Math.abs(s) <= n,
                a = Math.abs(p - i) <= e;
              m.done = o && a;
            }
            return (m.value = m.done ? p : i), m;
          },
        };
      }
    },
    9323: function (t, e, n) {
      n.d(e, {
        E: function () {
          return i;
        },
        i: function () {
          return r;
        },
      });
      let i = 2e4;
      function r(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < i; ) (e += 50), (n = t.next(e));
        return e >= i ? 1 / 0 : e;
      }
    },
    7229: function (t, e, n) {
      n.d(e, {
        P: function () {
          return r;
        },
      });
      var i = n(2181);
      function r(t, e, n) {
        let r = Math.max(e - 5, 0);
        return (0, i.R)(n - t(r), e - r);
      }
    },
    9622: function (t, e, n) {
      n.d(e, {
        v: function () {
          return tp;
        },
      });
      var i = n(3303),
        r = n(618);
      let s = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
        o = (t) => ({
          type: 'spring',
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: 'keyframes', duration: 0.8 },
        l = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (t, { keyframes: e }) =>
          e.length > 2
            ? a
            : r.G.has(t)
              ? t.startsWith('scale')
                ? o(e[1])
                : s
              : l;
      var h = n(5566),
        c = n(6832);
      let d = { current: !1 },
        f = (t) => null !== t;
      function p(t, { repeat: e, repeatType: n = 'loop' }, i) {
        let r = t.filter(f),
          s = e && 'loop' !== n && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== i ? i : r[s];
      }
      var m = n(4205),
        v = n(3791),
        g = n(928),
        y = n(6190),
        x = n(3393),
        b = n(4178),
        P = n(9908),
        w = n(2263);
      let S = (t, e) =>
        'zIndex' !== e &&
        !!(
          'number' == typeof t ||
          Array.isArray(t) ||
          ('string' == typeof t &&
            (w.P.test(t) || '0' === t) &&
            !t.startsWith('url('))
        );
      class T {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: n = 'keyframes',
          repeat: i = 0,
          repeatDelay: r = 0,
          repeatType: s = 'loop',
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: n,
              repeat: i,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, b.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          this.hasAttemptedResolve = !0;
          let {
            name: n,
            type: i,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, n, i) {
              let r = t[0];
              if (null === r) return !1;
              let s = t[t.length - 1],
                o = S(r, e),
                a = S(s, e);
              return (
                (0, P.K)(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`,
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let n = 0; n < t.length; n++)
                      if (t[n] !== e) return !0;
                  })(t) ||
                    ('spring' === n && i))
              );
            })(t, n, i, r)
          ) {
            if (d.current || !s) {
              null == a || a(p(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var A = n(9806),
        E = n(7229);
      function C({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: i = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let f = t[0],
          p = { done: !1, value: f },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
                ? a
                : Math.abs(a - t) < Math.abs(l - t)
                  ? a
                  : l,
          g = n * e,
          y = f + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - f);
        let b = (t) => -g * Math.exp(-t / i),
          P = (t) => x + b(t),
          w = (t) => {
            let e = b(t),
              n = P(t);
            (p.done = Math.abs(e) <= u), (p.value = p.done ? x : n);
          },
          S = (t) => {
            m(p.value) &&
              ((c = t),
              (d = (0, A.S)({
                keyframes: [p.value, v(p.value)],
                velocity: (0, E.P)(P, t, p.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), w(t), S(t)),
              void 0 !== c && t >= c)
                ? d.next(t - c)
                : (e || w(t), p);
            },
          }
        );
      }
      var R = n(9569),
        M = n(113),
        j = n(7544),
        O = n(2476),
        V = n(9280),
        k = n(9049),
        D = n(5312);
      function L(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
            ? e
            : n < 2 / 3
              ? t + (e - t) * (2 / 3 - n) * 6
              : t;
      }
      var _ = n(4184),
        F = n(6352),
        I = n(9808);
      let B = (t, e, n) => {
          let i = t * t,
            r = n * (e * e - i) + i;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        N = [_.$, F.m, I.J],
        U = (t) => N.find((e) => e.test(t));
      function W(t) {
        let e = U(t);
        (0, P.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        );
        let n = e.parse(t);
        return (
          e === I.J &&
            (n = (function ({ hue: t, saturation: e, lightness: n, alpha: i }) {
              (t /= 360), (n /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let i = n < 0.5 ? n * (1 + e) : n + e - n * e,
                  a = 2 * n - i;
                (r = L(a, i, t + 1 / 3)),
                  (s = L(a, i, t)),
                  (o = L(a, i, t - 1 / 3));
              } else r = s = o = n;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: i,
              };
            })(n)),
          n
        );
      }
      let $ = (t, e) => {
        let n = W(t),
          i = W(e),
          r = { ...n };
        return (t) => (
          (r.red = B(n.red, i.red, t)),
          (r.green = B(n.green, i.green, t)),
          (r.blue = B(n.blue, i.blue, t)),
          (r.alpha = (0, D.t)(n.alpha, i.alpha, t)),
          F.m.transform(r)
        );
      };
      var z = n(2809),
        Y = n(7126);
      function X(t, e) {
        return (n) => (n > 0 ? e : t);
      }
      function H(t, e) {
        return (n) => (0, D.t)(t, e, n);
      }
      function K(t) {
        return 'number' == typeof t
          ? H
          : 'string' == typeof t
            ? (0, Y.t)(t)
              ? X
              : z.$.test(t)
                ? $
                : Z
            : Array.isArray(t)
              ? G
              : 'object' == typeof t
                ? z.$.test(t)
                  ? $
                  : q
                : X;
      }
      function G(t, e) {
        let n = [...t],
          i = n.length,
          r = t.map((t, n) => K(t)(t, e[n]));
        return (t) => {
          for (let e = 0; e < i; e++) n[e] = r[e](t);
          return n;
        };
      }
      function q(t, e) {
        let n = { ...t, ...e },
          i = {};
        for (let r in n)
          void 0 !== t[r] && void 0 !== e[r] && (i[r] = K(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in i) n[e] = i[e](t);
          return n;
        };
      }
      let Z = (t, e) => {
        let n = w.P.createTransformer(e),
          i = (0, w.V)(t),
          r = (0, w.V)(e);
        return i.indexes.var.length === r.indexes.var.length &&
          i.indexes.color.length === r.indexes.color.length &&
          i.indexes.number.length >= r.indexes.number.length
          ? (0, V.z)(
              G(
                (function (t, e) {
                  var n;
                  let i = [],
                    r = { color: 0, var: 0, number: 0 };
                  for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s],
                      a = t.indexes[o][r[o]],
                      l = null !== (n = t.values[a]) && void 0 !== n ? n : 0;
                    (i[s] = l), r[o]++;
                  }
                  return i;
                })(i, r),
                r.values,
              ),
              n,
            )
          : ((0, P.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            ),
            X(t, e));
      };
      function J(t, e, n) {
        return 'number' == typeof t &&
          'number' == typeof e &&
          'number' == typeof n
          ? (0, D.t)(t, e, n)
          : K(t)(t, e);
      }
      var Q = n(5865);
      function tt({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = 'easeInOut',
      }) {
        let r = (0, M.N)(i) ? i.map(j.R) : (0, j.R)(i),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: n = !0, ease: i, mixer: r } = {}) {
            let s = t.length;
            if (
              ((0, P.k)(
                s === e.length,
                'Both input and output ranges must be the same length',
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && t[0] === t[1]) return () => e[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, n) {
                let i = [],
                  r = n || J,
                  s = t.length - 1;
                for (let n = 0; n < s; n++) {
                  let s = r(t[n], t[n + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[n] || x.Z : e;
                    s = (0, V.z)(t, s);
                  }
                  i.push(s);
                }
                return i;
              })(e, i, r),
              a = o.length,
              l = (e) => {
                let n = 0;
                if (a > 1) for (; n < t.length - 2 && !(e < t[n + 1]); n++);
                let i = (0, k.Y)(t[n], t[n + 1], e);
                return o[n](i);
              };
            return n ? (e) => l((0, O.u)(t[0], t[s - 1], e)) : l;
          })(
            (n && n.length === e.length ? n : (0, Q.Y)(e)).map((e) => e * t),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || R.mZ).splice(0, e.length - 1),
            },
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      var te = n(9323);
      let tn = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => m.Wi.update(e, !0),
            stop: () => (0, m.Pn)(e),
            now: () =>
              m.frameData.isProcessing ? m.frameData.timestamp : v.X.now(),
          };
        },
        ti = { decay: C, inertia: C, tween: tt, keyframes: tt, spring: A.S },
        tr = (t) => t / 100;
      class ts extends T {
        constructor({ KeyframeResolver: t = b.e, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = 'running'),
            (this.state = 'idle'),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                'idle' === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let { name: n, motionValue: i, keyframes: r } = this.options,
            s = (t, e) => this.onKeyframesResolved(t, e);
          n && i && i.owner
            ? (this.resolver = i.owner.resolveKeyframes(r, s, n, i))
            : (this.resolver = new t(r, s, n, i)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, n;
          let {
              type: i = 'keyframes',
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = ti[i] || tt;
          l !== tt &&
            'number' != typeof t[0] &&
            ((e = (0, V.z)(tr, J(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          'mirror' === o &&
            (n = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (0, te.i)(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: n,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            'paused' !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: n } = this;
          if (!n) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: i,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = n;
          if (null === this.startTime) return r.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: f,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime =
                    Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            'finished' === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let x = this.currentTime,
            b = r;
          if (d) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              n = t % 1;
            !n && t >= 1 && (n = 1),
              1 === n && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ('reverse' === f
                  ? ((n = 1 - n), m && (n -= m / h))
                  : 'mirror' === f && (b = s)),
              (x = (0, O.u)(0, 1, n) * h);
          }
          let P = y ? { done: !1, value: a[0] } : b.next(x);
          o && (P.value = o(P.value));
          let { done: w } = P;
          y ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let S =
            null === this.holdTime &&
            ('finished' === this.state || ('running' === this.state && w));
          return (
            S && void 0 !== i && (P.value = p(a, this.options, i)),
            v && v(P.value),
            S && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, i.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, i.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, i.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, i.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = 'running';
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tn, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : (this.startTime && 'finished' !== this.state) ||
              (this.startTime = n),
            'finished' === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = 'running'),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = 'paused';
            return;
          }
          (this.state = 'paused'),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          'running' !== this.state && this.play(),
            (this.pendingPlayState = this.state = 'finished'),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = 'finished');
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = 'idle'),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let to = (t) => Array.isArray(t) && 'number' == typeof t[0],
        ta = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        tl = {
          linear: 'linear',
          ease: 'ease',
          easeIn: 'ease-in',
          easeOut: 'ease-out',
          easeInOut: 'ease-in-out',
          circIn: ta([0, 0.65, 0.55, 1]),
          circOut: ta([0.55, 0, 1, 0.45]),
          backIn: ta([0.31, 0.01, 0.66, -0.59]),
          backOut: ta([0.33, 1.53, 0.69, 0.99]),
        };
      function tu(t) {
        return th(t) || tl.easeOut;
      }
      function th(t) {
        if (t) return to(t) ? ta(t) : Array.isArray(t) ? t.map(tu) : tl[t];
      }
      let tc = (0, y.X)(() =>
          Object.hasOwnProperty.call(Element.prototype, 'animate'),
        ),
        td = new Set(['opacity', 'clipPath', 'filter', 'transform']);
      class tf extends T {
        constructor(t) {
          super(t);
          let { name: e, motionValue: n, keyframes: i } = this.options;
          (this.resolver = new g.s(
            i,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            n,
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var n, i;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
          } = this.options;
          if (!(null === (n = l.owner) || void 0 === n ? void 0 : n.current))
            return !1;
          if (
            'spring' === (i = this.options).type ||
            'backgroundColor' === i.name ||
            !(function t(e) {
              return !!(
                !e ||
                ('string' == typeof e && e in tl) ||
                to(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(i.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: n,
                motionValue: i,
                ...l
              } = this.options,
              u = (function (t, e) {
                let n = new ts({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  i = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !i.done && s < 2e4; )
                  r.push((i = n.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: 'linear',
                };
              })(t, l);
            1 === (t = u.keyframes).length && (t[1] = t[0]),
              (r = u.duration),
              (s = u.times),
              (o = u.ease),
              (a = 'keyframes');
          }
          let h = (function (
            t,
            e,
            n,
            {
              delay: i = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = 'loop',
              ease: a,
              times: l,
            } = {},
          ) {
            let u = { [e]: n };
            l && (u.offset = l);
            let h = th(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: i,
                duration: r,
                easing: Array.isArray(h) ? 'linear' : h,
                fill: 'both',
                iterations: s + 1,
                direction: 'reverse' === o ? 'alternate' : 'normal',
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (h.startTime = v.X.now()),
            this.pendingTimeline
              ? ((h.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: n } = this.options;
                  l.set(p(t, this.options, e)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, i.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, i.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: n } = e;
          n.currentTime = (0, i.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: n } = e;
          n.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return 'idle';
          let { animation: e } = t;
          return e.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return x.Z;
            let { animation: n } = e;
            (n.timeline = t), (n.onfinish = null);
          } else this.pendingTimeline = t;
          return x.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          'finished' === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            'idle' === this.state)
          )
            return;
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: n,
            duration: r,
            type: s,
            ease: o,
            times: a,
          } = t;
          if ('idle' !== e.playState && 'finished' !== e.playState) {
            if (this.time) {
              let {
                  motionValue: t,
                  onUpdate: e,
                  onComplete: l,
                  ...u
                } = this.options,
                h = new ts({
                  ...u,
                  keyframes: n,
                  duration: r,
                  type: s,
                  ease: o,
                  times: a,
                  isGenerator: !0,
                }),
                c = (0, i.w)(this.time);
              t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: n,
            repeatDelay: i,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            tc() &&
            n &&
            td.has(n) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !i &&
            'mirror' !== r &&
            0 !== s &&
            'inertia' !== o
          );
        }
      }
      let tp =
        (t, e, n, r = {}, s, o) =>
        (a) => {
          let l = (0, h.e)(r, t) || {},
            f = l.delay || r.delay || 0,
            { elapsed: v = 0 } = r;
          v -= (0, i.w)(f);
          let g = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: 'easeOut',
            velocity: e.getVelocity(),
            ...l,
            delay: -v,
            onUpdate: (t) => {
              e.set(t), l.onUpdate && l.onUpdate(t);
            },
            onComplete: () => {
              a(), l.onComplete && l.onComplete();
            },
            name: t,
            motionValue: e,
            element: o ? void 0 : s,
          };
          (0, h.r)(l) || (g = { ...g, ...u(t, g) }),
            g.duration && (g.duration = (0, i.w)(g.duration)),
            g.repeatDelay && (g.repeatDelay = (0, i.w)(g.repeatDelay)),
            void 0 !== g.from && (g.keyframes[0] = g.from);
          let y = !1;
          if (
            ((!1 !== g.type && (0 !== g.duration || g.repeatDelay)) ||
              ((g.duration = 0), 0 !== g.delay || (y = !0)),
            (d.current || c.c.skipAnimations) &&
              ((y = !0), (g.duration = 0), (g.delay = 0)),
            y && !o && void 0 !== e.get())
          ) {
            let t = p(g.keyframes, l);
            if (void 0 !== t) {
              m.Wi.update(() => {
                g.onUpdate(t), g.onComplete();
              });
              return;
            }
          }
          return !o && tf.supports(g) ? new tf(g) : new ts(g);
        };
    },
    2014: function (t, e, n) {
      n.d(e, {
        D: function () {
          return o;
        },
      });
      var i = n(9622),
        r = n(3299),
        s = n(2702);
      function o(t, e, n) {
        let o = (0, s.i)(t) ? t : (0, r.BX)(t);
        return o.start((0, i.v)('', o, e, n)), o.animation;
      }
    },
    1258: function (t, e, n) {
      n.d(e, {
        w: function () {
          return d;
        },
      });
      var i = n(618),
        r = n(9043),
        s = n(9622),
        o = n(2212),
        a = n(698),
        l = n(3299),
        u = n(1148),
        h = n(5566),
        c = n(4205);
      function d(t, e, { delay: n = 0, transitionOverride: d, type: f } = {}) {
        var p;
        let {
            transition: m = t.getDefaultTransition(),
            transitionEnd: v,
            ...g
          } = e,
          y = t.getValue('willChange');
        d && (m = d);
        let x = [],
          b = f && t.animationState && t.animationState.getState()[f];
        for (let e in g) {
          let a = t.getValue(
              e,
              null !== (p = t.latestValues[e]) && void 0 !== p ? p : null,
            ),
            l = g[e];
          if (
            void 0 === l ||
            (b &&
              (function ({ protectedKeys: t, needsAnimating: e }, n) {
                let i = t.hasOwnProperty(n) && !0 !== e[n];
                return (e[n] = !1), i;
              })(b, e))
          )
            continue;
          let u = { delay: n, elapsed: 0, ...(0, h.e)(m || {}, e) },
            c = !1;
          if (window.HandoffAppearAnimations) {
            let n = t.getProps()[r.M];
            if (n) {
              let t = window.HandoffAppearAnimations(n, e);
              null !== t && ((u.elapsed = t), (c = !0));
            }
          }
          a.start(
            (0, s.v)(
              e,
              a,
              l,
              t.shouldReduceMotion && i.G.has(e) ? { type: !1 } : u,
              t,
              c,
            ),
          );
          let d = a.animation;
          d &&
            ((0, o.L)(y) && (y.add(e), d.then(() => y.remove(e))), x.push(d));
        }
        return (
          v &&
            Promise.all(x).then(() => {
              c.Wi.update(() => {
                v &&
                  (function (t, e) {
                    let {
                      transitionEnd: n = {},
                      transition: i = {},
                      ...r
                    } = (0, u.x)(t, e) || {};
                    for (let e in (r = { ...r, ...n })) {
                      let n = (0, a.Y)(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(n)
                        : t.addValue(e, (0, l.BX)(n));
                    }
                  })(t, v);
              });
            }),
          x
        );
      }
    },
    9043: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      });
      let i = 'data-' + (0, n(5998).D)('framerAppearId');
    },
    4633: function (t, e, n) {
      n.d(e, {
        H: function () {
          return i;
        },
      });
      function i(t) {
        return (
          null !== t && 'object' == typeof t && 'function' == typeof t.start
        );
      }
    },
    561: function (t, e, n) {
      n.d(e, {
        C: function () {
          return i;
        },
      });
      let i = (t) => Array.isArray(t);
    },
    5566: function (t, e, n) {
      function i({
        when: t,
        delay: e,
        delayChildren: n,
        staggerChildren: i,
        staggerDirection: r,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      n.d(e, {
        e: function () {
          return r;
        },
        r: function () {
          return i;
        },
      });
    },
    3856: function (t, e, n) {
      n.d(e, {
        p: function () {
          return i;
        },
      });
      let i = (0, n(2265).createContext)({});
    },
    3449: function (t, e, n) {
      n.d(e, {
        _: function () {
          return i;
        },
      });
      let i = (0, n(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: 'never',
      });
    },
    4561: function (t, e, n) {
      n.d(e, {
        O: function () {
          return i;
        },
      });
      let i = (0, n(2265).createContext)(null);
    },
    4354: function (t, e, n) {
      n.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var i = n(7932),
        r = n(8841);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, i.o)(s);
    },
    4718: function (t, e, n) {
      n.d(e, {
        _: function () {
          return s;
        },
      });
      var i = n(3393);
      let r = (t, e, n) =>
        (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      function s(t, e, n, s) {
        if (t === e && n === s) return i.Z;
        let o = (e) =>
          (function (t, e, n, i, s) {
            let o, a;
            let l = 0;
            do (o = r((a = e + (n - e) / 2), i, s) - t) > 0 ? (n = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, n);
        return (t) => (0 === t || 1 === t ? t : r(o(t), e, s));
      }
    },
    9569: function (t, e, n) {
      n.d(e, {
        Vv: function () {
          return s;
        },
        YQ: function () {
          return r;
        },
        mZ: function () {
          return o;
        },
      });
      var i = n(4718);
      let r = (0, i._)(0.42, 0, 1, 1),
        s = (0, i._)(0, 0, 0.58, 1),
        o = (0, i._)(0.42, 0, 0.58, 1);
    },
    7932: function (t, e, n) {
      n.d(e, {
        o: function () {
          return i;
        },
      });
      let i = (t) => (e) =>
        e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    8841: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      });
      let i = (t) => (e) => 1 - t(1 - e);
    },
    113: function (t, e, n) {
      n.d(e, {
        N: function () {
          return i;
        },
      });
      let i = (t) => Array.isArray(t) && 'number' != typeof t[0];
    },
    7544: function (t, e, n) {
      n.d(e, {
        R: function () {
          return p;
        },
      });
      var i = n(9908),
        r = n(4718),
        s = n(3393),
        o = n(9569),
        a = n(4354),
        l = n(7932),
        u = n(8841);
      let h = (0, r._)(0.33, 1.53, 0.69, 0.99),
        c = (0, u.M)(h),
        d = (0, l.o)(c),
        f = {
          linear: s.Z,
          easeIn: o.YQ,
          easeInOut: o.mZ,
          easeOut: o.Vv,
          circIn: a.Z7,
          circInOut: a.X7,
          circOut: a.Bn,
          backIn: c,
          backInOut: d,
          backOut: h,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * c(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        p = (t) => {
          if (Array.isArray(t)) {
            (0, i.k)(
              4 === t.length,
              'Cubic bezier arrays must contain four numerical values.',
            );
            let [e, n, s, o] = t;
            return (0, r._)(e, n, s, o);
          }
          return 'string' == typeof t
            ? ((0, i.k)(void 0 !== f[t], `Invalid easing type '${t}'`), f[t])
            : t;
        };
    },
    7839: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = n(6832);
      class r {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let s = [
        'read',
        'resolveKeyframes',
        'update',
        'preRender',
        'render',
        'postRender',
      ];
      function o(t, e) {
        let n = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = s.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new r(),
                  n = new r(),
                  i = 0,
                  s = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = {
                    schedule: (t, r = !1, o = !1) => {
                      let l = o && s,
                        u = l ? e : n;
                      return (
                        r && a.add(t),
                        u.add(t) && l && s && (i = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      n.remove(t), a.delete(t);
                    },
                    process: (r) => {
                      if (s) {
                        o = !0;
                        return;
                      }
                      if (
                        ((s = !0),
                        ([e, n] = [n, e]),
                        n.clear(),
                        (i = e.order.length))
                      )
                        for (let n = 0; n < i; n++) {
                          let i = e.order[n];
                          a.has(i) && (l.schedule(i), t()), i(r);
                        }
                      (s = !1), o && ((o = !1), l.process(r));
                    },
                  };
                return l;
              })(() => (n = !0))),
              t
            ),
            {},
          ),
          u = (t) => {
            l[t].process(a);
          },
          h = () => {
            let r = i.c.useManualTiming ? a.timestamp : performance.now();
            (n = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(r - a.timestamp, 40), 1)),
              (a.timestamp = r),
              (a.isProcessing = !0),
              s.forEach(u),
              (a.isProcessing = !1),
              n && e && ((o = !1), t(h));
          },
          c = () => {
            (n = !0), (o = !0), a.isProcessing || t(h);
          };
        return {
          schedule: s.reduce((t, e) => {
            let i = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (n || c(), i.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => s.forEach((e) => l[e].cancel(t)),
          state: a,
          steps: l,
        };
      }
    },
    4205: function (t, e, n) {
      n.d(e, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
      });
      var i = n(3393);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, n(7839).Z)(
        'undefined' != typeof requestAnimationFrame
          ? requestAnimationFrame
          : i.Z,
        !0,
      );
    },
    3791: function (t, e, n) {
      let i;
      n.d(e, {
        X: function () {
          return a;
        },
      });
      var r = n(6832),
        s = n(4205);
      function o() {
        i = void 0;
      }
      let a = {
        now: () => (
          void 0 === i &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now(),
            ),
          i
        ),
        set: (t) => {
          (i = t), queueMicrotask(o);
        },
      };
    },
    5223: function (t, e, n) {
      n.d(e, {
        A: function () {
          return r;
        },
      });
      let i = {
          animation: [
            'animate',
            'variants',
            'whileHover',
            'whileTap',
            'exit',
            'whileInView',
            'whileFocus',
            'whileDrag',
          ],
          exit: ['exit'],
          drag: ['drag', 'dragControls'],
          focus: ['whileFocus'],
          hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
          tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
          pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
          inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
          layout: ['layout', 'layoutId'],
        },
        r = {};
      for (let t in i) r[t] = { isEnabled: (e) => i[t].some((t) => !!e[t]) };
    },
    5403: function (t, e, n) {
      n.d(e, {
        j: function () {
          return s;
        },
      });
      var i = n(7381),
        r = n(618);
      function s(t, { layout: e, layoutId: n }) {
        return (
          r.G.has(t) ||
          t.startsWith('origin') ||
          ((e || void 0 !== n) && (!!i.P[t] || 'opacity' === t))
        );
      }
    },
    9068: function (t, e, n) {
      function i({ top: t, left: e, right: n, bottom: i }) {
        return { x: { min: e, max: n }, y: { min: t, max: i } };
      }
      function r({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let n = e({ x: t.left, y: t.top }),
          i = e({ x: t.right, y: t.bottom });
        return { top: n.y, left: n.x, bottom: i.y, right: i.x };
      }
      n.d(e, {
        d7: function () {
          return s;
        },
        i8: function () {
          return i;
        },
        z2: function () {
          return r;
        },
      });
    },
    5015: function (t, e, n) {
      n.d(e, {
        D2: function () {
          return m;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return c;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return s;
        },
      });
      var i = n(5312),
        r = n(4352);
      function s(t, e, n) {
        return n + e * (t - n);
      }
      function o(t, e, n, i, r) {
        return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e;
      }
      function a(t, e = 0, n = 1, i, r) {
        (t.min = o(t.min, e, n, i, r)), (t.max = o(t.max, e, n, i, r));
      }
      function l(t, { x: e, y: n }) {
        a(t.x, e.translate, e.scale, e.originPoint),
          a(t.y, n.translate, n.scale, n.originPoint);
      }
      function u(t, e, n, i = !1) {
        let s, o;
        let a = n.length;
        if (a) {
          e.x = e.y = 1;
          for (let u = 0; u < a; u++) {
            o = (s = n[u]).projectionDelta;
            let a = s.instance;
            (!a || !a.style || 'contents' !== a.style.display) &&
              (i &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                m(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              o && ((e.x *= o.x.scale), (e.y *= o.y.scale), l(t, o)),
              i && (0, r.ud)(s.latestValues) && m(t, s.latestValues));
          }
          (e.x = h(e.x)), (e.y = h(e.y));
        }
      }
      function h(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
            ? t
            : 1;
      }
      function c(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function d(t, e, [n, r, s]) {
        let o = void 0 !== e[s] ? e[s] : 0.5,
          l = (0, i.t)(t.min, t.max, o);
        a(t, e[n], e[r], l, e.scale);
      }
      let f = ['x', 'scaleX', 'originX'],
        p = ['y', 'scaleY', 'originY'];
      function m(t, e) {
        d(t.x, e, f), d(t.y, e, p);
      }
    },
    4884: function (t, e, n) {
      n.d(e, {
        dO: function () {
          return o;
        },
        wc: function () {
          return r;
        },
      });
      let i = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r = () => ({ x: i(), y: i() }),
        s = () => ({ min: 0, max: 0 }),
        o = () => ({ x: s(), y: s() });
    },
    7381: function (t, e, n) {
      n.d(e, {
        B: function () {
          return r;
        },
        P: function () {
          return i;
        },
      });
      let i = {};
      function r(t) {
        Object.assign(i, t);
      }
    },
    4352: function (t, e, n) {
      function i(t) {
        return void 0 === t || 1 === t;
      }
      function r({ scale: t, scaleX: e, scaleY: n }) {
        return !i(t) || !i(e) || !i(n);
      }
      function s(t) {
        return (
          r(t) ||
          o(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function o(t) {
        var e, n;
        return ((e = t.x) && '0%' !== e) || ((n = t.y) && '0%' !== n);
      }
      n.d(e, {
        D_: function () {
          return o;
        },
        Lj: function () {
          return r;
        },
        ud: function () {
          return s;
        },
      });
    },
    411: function (t, e, n) {
      n.d(e, {
        J: function () {
          return s;
        },
        z: function () {
          return o;
        },
      });
      var i = n(9068),
        r = n(5015);
      function s(t, e) {
        return (0, i.i8)((0, i.d7)(t.getBoundingClientRect(), e));
      }
      function o(t, e, n) {
        let i = s(t, n),
          { scroll: o } = e;
        return o && ((0, r.am)(i.x, o.offset.x), (0, r.am)(i.y, o.offset.y)), i;
      }
    },
    928: function (t, e, n) {
      n.d(e, {
        s: function () {
          return d;
        },
      });
      var i = n(6894),
        r = n(9908),
        s = n(4829),
        o = n(7126);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = n(2756),
        u = n(1921),
        h = n(4178),
        c = n(3462);
      class d extends h.e {
        constructor(t, e, n, i) {
          super(t, e, n, i, null == i ? void 0 : i.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: n } = this;
          if (!e.current) return;
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let i = t[n];
            if ('string' == typeof i && (0, o.t)(i)) {
              let l = (function t(e, n, i = 1) {
                (0, r.k)(
                  i <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                );
                let [l, u] = (function (t) {
                  let e = a.exec(t);
                  if (!e) return [,];
                  let [, n, i, r] = e;
                  return [`--${null != n ? n : i}`, r];
                })(e);
                if (!l) return;
                let h = window.getComputedStyle(n).getPropertyValue(l);
                if (h) {
                  let t = h.trim();
                  return (0, s.P)(t) ? parseFloat(t) : t;
                }
                return (0, o.t)(u) ? t(u, n, i + 1) : u;
              })(i, e.current);
              void 0 !== l && (t[n] = l),
                n === t.length - 1 && (this.finalKeyframe = i);
            }
          }
          if (!l.z2.has(n) || 2 !== t.length)
            return this.resolveNoneKeyframes();
          let [i, h] = t,
            c = (0, u.C)(i),
            d = (0, u.C)(h);
          if (c !== d) {
            if ((0, l.mP)(c) && (0, l.mP)(d))
              for (let e = 0; e < t.length; e++) {
                let n = t[e];
                'string' == typeof n && (t[e] = parseFloat(n));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            n = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ('number' == typeof (r = t[e])
              ? 0 === r
              : null === r || 'none' === r || '0' === r || (0, i.W)(r)) &&
              n.push(e);
          }
          n.length &&
            (function (t, e, n) {
              let i,
                r = 0;
              for (; r < t.length && !i; )
                'string' == typeof t[r] &&
                  'none' !== t[r] &&
                  '0' !== t[r] &&
                  (i = t[r]),
                  r++;
              if (i && n) for (let r of e) t[r] = (0, c.T)(n, i);
            })(t, n, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: n } = this;
          if (!t.current) return;
          'height' === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[n](
              t.measureViewportBox(),
              window.getComputedStyle(t.current),
            )),
            (e[0] = this.measuredOrigin);
          let i = e[e.length - 1];
          void 0 !== i && t.getValue(n, i).jump(i, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: n, unresolvedKeyframes: i } = this;
          if (!e.current) return;
          let r = e.getValue(n);
          r && r.jump(this.measuredOrigin, !1);
          let s = i.length - 1,
            o = i[s];
          (i[s] = l.lw[n](
            e.measureViewportBox(),
            window.getComputedStyle(e.current),
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    176: function (t, e, n) {
      n.d(e, {
        J: function () {
          return _;
        },
      });
      var i = n(4884),
        r = n(8285),
        s = n(1702);
      let o = { current: null },
        a = { current: !1 };
      var l = n(2685),
        u = n(3299),
        h = n(2212),
        c = n(2702),
        d = n(618),
        f = n(9739),
        p = n(6930),
        m = n(1422),
        v = n(5223),
        g = n(1867),
        y = n(8854),
        x = n(4178),
        b = n(4829),
        P = n(6894),
        w = n(2809),
        S = n(2263),
        T = n(1921),
        A = n(4707);
      let E = [...T.$, w.$, S.P],
        C = (t) => E.find((0, A.l)(t));
      var R = n(3462),
        M = n(4205);
      let j = Object.keys(v.A),
        O = j.length,
        V = [
          'AnimationStart',
          'AnimationComplete',
          'Update',
          'BeforeLayoutMeasure',
          'LayoutMeasure',
          'LayoutAnimationStart',
          'LayoutAnimationComplete',
        ],
        k = g.V.length;
      class D {
        scrapeMotionValuesFromProps(t, e, n) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: i,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {},
        ) {
          (this.resolveKeyframes = (t, e, n, i) =>
            new this.KeyframeResolver(t, e, n, i, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = x.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify('Update', this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.scheduleRender = () => M.Wi.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = n),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = (0, f.G)(e)),
            (this.isVariantNode = (0, f.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== a[t] &&
              (0, c.i)(e) &&
              (e.set(a[t], !1), (0, h.L)(u) && u.add(t));
          }
        }
        mount(t) {
          (this.current = t),
            y.R.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            a.current ||
              (function () {
                if (((a.current = !0), s.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia('(prefers-reduced-motion)'),
                      e = () => (o.current = t.matches);
                    t.addListener(e), e();
                  } else o.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              'never' !== this.reducedMotionConfig &&
              ('always' === this.reducedMotionConfig || o.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          var t;
          for (let t in (y.R.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, M.Pn)(this.notifyUpdate),
          (0, M.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let e in this.features)
            null === (t = this.features[e]) || void 0 === t || t.unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let n = d.G.has(t),
            i = e.on('change', (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && M.Wi.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on('renderRequest', this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            i(), r(), e.owner && e.stop();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, n, i, s) {
          let o, a;
          for (let t = 0; t < O; t++) {
            let n = j[t],
              {
                isEnabled: i,
                Feature: r,
                ProjectionNode: s,
                MeasureLayout: l,
              } = v.A[n];
            s && (o = s),
              i(e) &&
                (!this.features[n] && r && (this.features[n] = new r(this)),
                l && (a = l));
          }
          if (
            ('html' === this.type || 'svg' === this.type) &&
            !this.projection &&
            o
          ) {
            this.projection = new o(
              this.latestValues,
              (function t(e) {
                if (e)
                  return !1 !== e.options.allowProjection
                    ? e.projection
                    : t(e.parent);
              })(this.parent),
            );
            let {
              layoutId: t,
              layout: n,
              drag: i,
              dragConstraints: a,
              layoutScroll: l,
              layoutRoot: u,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: n,
              alwaysMeasureLayout: !!i || (a && (0, r.I)(a)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: 'string' == typeof n ? n : 'both',
              initialPromotionConfig: s,
              layoutScroll: l,
              layoutRoot: u,
            });
          }
          return a;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props,
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, i.dO)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < V.length; e++) {
            let n = V[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let i = t['on' + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i));
          }
          (this.prevMotionValues = (function (t, e, n) {
            let { willChange: i } = e;
            for (let r in e) {
              let s = e[r],
                o = n[r];
              if ((0, c.i)(s)) t.addValue(r, s), (0, h.L)(i) && i.add(r);
              else if ((0, c.i)(o))
                t.addValue(r, (0, u.BX)(s, { owner: t })),
                  (0, h.L)(i) && i.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, u.BX)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let i in n) void 0 === e[i] && t.removeValue(i);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < k; t++) {
            let n = g.V[t],
              i = this.props[n];
            ((0, p.$)(i) || !1 === i) && (e[n] = i);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let n = this.values.get(t);
          e !== n &&
            (n && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n &&
              void 0 !== e &&
              ((n = (0, u.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, n)),
            n
          );
        }
        readValue(t, e) {
          var n;
          let i =
            void 0 === this.latestValues[t] && this.current
              ? null !== (n = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== n
                ? n
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != i &&
              ('string' == typeof i && ((0, b.P)(i) || (0, P.W)(i))
                ? (i = parseFloat(i))
                : !C(i) && S.P.test(e) && (i = (0, R.T)(t, e)),
              this.setBaseTarget(t, (0, c.i)(i) ? i.get() : i)),
            (0, c.i)(i) ? i.get() : i
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let n;
          let { initial: i } = this.props;
          if ('string' == typeof i || 'object' == typeof i) {
            let r = (0, m.o)(
              this.props,
              i,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom,
            );
            r && (n = r[t]);
          }
          if (i && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, c.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new l.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var L = n(928);
      class _ extends D {
        constructor() {
          super(...arguments), (this.KeyframeResolver = L.s);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
      }
    },
    1715: function (t, e, n) {
      n.d(e, {
        E: function () {
          return nd;
        },
      });
      var i,
        r = n(7437),
        s = n(2265),
        o = n(3449);
      let a = (0, s.createContext)({});
      var l = n(4561),
        u = n(5526);
      let h = (0, s.createContext)({ strict: !1 });
      var c = n(9043);
      let { schedule: d, cancel: f } = (0, n(7839).Z)(queueMicrotask, !1);
      var p = n(8285),
        m = n(6930),
        v = n(9739);
      function g(t) {
        return Array.isArray(t) ? t.join(' ') : t;
      }
      var y = n(5223),
        x = n(1702),
        b = n(3856);
      let P = (0, s.createContext)({}),
        w = Symbol.for('motionComponentSymbol'),
        S = [
          'animate',
          'circle',
          'defs',
          'desc',
          'ellipse',
          'g',
          'image',
          'line',
          'filter',
          'marker',
          'mask',
          'metadata',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'rect',
          'stop',
          'switch',
          'symbol',
          'svg',
          'text',
          'tspan',
          'use',
          'view',
        ];
      function T(t) {
        if ('string' != typeof t || t.includes('-'));
        else if (S.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var A = n(5403),
        E = n(2702),
        C = n(5275);
      let R = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function M(t, e, n) {
        for (let i in e) (0, E.i)(e[i]) || (0, A.j)(i, n) || (t[i] = e[i]);
      }
      let j = new Set([
        'animate',
        'exit',
        'variants',
        'initial',
        'style',
        'values',
        'variants',
        'transition',
        'transformTemplate',
        'custom',
        'inherit',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        '_dragX',
        '_dragY',
        'onHoverStart',
        'onHoverEnd',
        'onViewportEnter',
        'onViewportLeave',
        'globalTapTarget',
        'ignoreStrict',
        'viewport',
      ]);
      function O(t) {
        return (
          t.startsWith('while') ||
          (t.startsWith('drag') && 'draggable' !== t) ||
          t.startsWith('layout') ||
          t.startsWith('onTap') ||
          t.startsWith('onPan') ||
          t.startsWith('onLayout') ||
          j.has(t)
        );
      }
      let V = (t) => !O(t);
      try {
        (i = require('@emotion/is-prop-valid').default) &&
          (V = (t) => (t.startsWith('on') ? !O(t) : i(t)));
      } catch (t) {}
      var k = n(8348);
      let D = () => ({ ...R(), attrs: {} });
      var L = n(7612),
        _ = n(1661),
        F = n(9548),
        I = n(4633),
        B = n(1422),
        N = n(2435),
        U = n(698);
      function W(t) {
        let e = (0, E.i)(t) ? t.get() : t;
        return (0, U.p)(e) ? e.toValue() : e;
      }
      let $ = (t) => (e, n) => {
        let i = (0, s.useContext)(a),
          r = (0, s.useContext)(l.O),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: n,
              },
              i,
              r,
              s,
            ) {
              let o = {
                latestValues: (function (t, e, n, i) {
                  let r = {},
                    s = i(t, {});
                  for (let t in s) r[t] = W(s[t]);
                  let { initial: o, animate: a } = t,
                    l = (0, v.G)(t),
                    u = (0, v.M)(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!n && !1 === n.initial,
                    c = (h = h || !1 === o) ? a : o;
                  return (
                    c &&
                      'boolean' != typeof c &&
                      !(0, I.H)(c) &&
                      (Array.isArray(c) ? c : [c]).forEach((e) => {
                        let n = (0, B.o)(t, e);
                        if (!n) return;
                        let { transitionEnd: i, transition: s, ...o } = n;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (r[t] = e);
                        }
                        for (let t in i) r[t] = i[t];
                      }),
                    r
                  );
                })(i, r, s, t),
                renderState: e(),
              };
              return n && (o.mount = (t) => n(i, t, o)), o;
            })(t, e, i, r);
        return n ? o() : (0, N.h)(o);
      };
      var z = n(4205);
      let Y = {
          useVisualState: $({
            scrapeMotionValuesFromProps: F.U,
            createRenderState: D,
            onMount: (t, e, { renderState: n, latestValues: i }) => {
              z.Wi.read(() => {
                try {
                  n.dimensions =
                    'function' == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                z.Wi.render(() => {
                  (0, k.i)(
                    n,
                    i,
                    { enableHardwareAcceleration: !1 },
                    (0, L.a)(e.tagName),
                    t.transformTemplate,
                  ),
                    (0, _.K)(e, n);
                });
            },
          }),
        },
        X = {
          useVisualState: $({
            scrapeMotionValuesFromProps: n(6235).U,
            createRenderState: R,
          }),
        };
      function H(t, e, n, i = { passive: !0 }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
      }
      let K = (t) =>
        'mouse' === t.pointerType
          ? 'number' != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function G(t, e = 'page') {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let q = (t) => (e) => K(e) && t(e, G(e));
      function Z(t, e, n, i) {
        return H(t, e, q(n), i);
      }
      var J = n(9280);
      function Q(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tt = Q('dragHorizontal'),
        te = Q('dragVertical');
      function tn(t) {
        let e = !1;
        if ('y' === t) e = te();
        else if ('x' === t) e = tt();
        else {
          let t = tt(),
            n = te();
          t && n
            ? (e = () => {
                t(), n();
              })
            : (t && t(), n && n());
        }
        return e;
      }
      function ti() {
        let t = tn(!0);
        return !t || (t(), !1);
      }
      class tr {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function ts(t, e) {
        let n = e ? 'onHoverStart' : 'onHoverEnd';
        return Z(
          t.current,
          e ? 'pointerenter' : 'pointerleave',
          (i, r) => {
            if ('touch' === i.pointerType || ti()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive('whileHover', e);
            let o = s[n];
            o && o(i, r);
          },
          { passive: !t.getProps()[n] },
        );
      }
      class to extends tr {
        mount() {
          this.unmount = (0, J.z)(ts(this.node, !0), ts(this.node, !1));
        }
        unmount() {}
      }
      class ta extends tr {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(':focus-visible');
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive('whileFocus', !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive('whileFocus', !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, J.z)(
            H(this.node.current, 'focus', () => this.onFocus()),
            H(this.node.current, 'blur', () => this.onBlur()),
          );
        }
        unmount() {}
      }
      let tl = (t, e) => !!e && (t === e || tl(t, e.parentElement));
      var tu = n(3393);
      function th(t, e) {
        if (!e) return;
        let n = new PointerEvent('pointer' + t);
        e(n, G(n));
      }
      class tc extends tr {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tu.Z),
            (this.removeEndListeners = tu.Z),
            (this.removeAccessibleListeners = tu.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let n = this.node.getProps(),
                i = Z(
                  window,
                  'pointerup',
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: n,
                      onTapCancel: i,
                      globalTapTarget: r,
                    } = this.node.getProps();
                    r || tl(this.node.current, t.target)
                      ? n && n(t, e)
                      : i && i(t, e);
                  },
                  { passive: !(n.onTap || n.onPointerUp) },
                ),
                r = Z(
                  window,
                  'pointercancel',
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(n.onTapCancel || n.onPointerCancel) },
                );
              (this.removeEndListeners = (0, J.z)(i, r)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = H(this.node.current, 'keydown', (t) => {
                  'Enter' !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = H(
                      this.node.current,
                      'keyup',
                      (t) => {
                        'Enter' === t.key &&
                          this.checkPressEnd() &&
                          th('up', (t, e) => {
                            let { onTap: n } = this.node.getProps();
                            n && n(t, e);
                          });
                      },
                    )),
                    th('down', (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = H(this.node.current, 'blur', () => {
                  this.isPressing &&
                    th('cancel', (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, J.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: n, whileTap: i } = this.node.getProps();
          i &&
            this.node.animationState &&
            this.node.animationState.setActive('whileTap', !0),
            n && n(t, e);
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive('whileTap', !1),
            !ti()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: n } = this.node.getProps();
          n && n(t, e);
        }
        mount() {
          let t = this.node.getProps(),
            e = Z(
              t.globalTapTarget ? window : this.node.current,
              'pointerdown',
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) },
            ),
            n = H(this.node.current, 'focus', this.startAccessiblePress);
          this.removeStartListeners = (0, J.z)(e, n);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let td = new WeakMap(),
        tf = new WeakMap(),
        tp = (t) => {
          let e = td.get(t.target);
          e && e(t);
        },
        tm = (t) => {
          t.forEach(tp);
        },
        tv = { some: 0, all: 1 };
      class tg extends tr {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: n, amount: i = 'some', once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: n,
              threshold: 'number' == typeof i ? i : tv[i],
            };
          return (function (t, e, n) {
            let i = (function ({ root: t, ...e }) {
              let n = t || document;
              tf.has(n) || tf.set(n, {});
              let i = tf.get(n),
                r = JSON.stringify(e);
              return (
                i[r] ||
                  (i[r] = new IntersectionObserver(tm, { root: t, ...e })),
                i[r]
              );
            })(e);
            return (
              td.set(t, n),
              i.observe(t),
              () => {
                td.delete(t), i.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive('whileInView', e);
            let { onViewportEnter: n, onViewportLeave: i } =
                this.node.getProps(),
              s = e ? n : i;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ('undefined' == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ['amount', 'margin', 'root'].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (n) => t[n] !== e[n];
            })(t, e),
          ) && this.startObserver();
        }
        unmount() {}
      }
      var ty = n(561);
      function tx(t, e) {
        if (!Array.isArray(e)) return !1;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      var tb = n(1148),
        tP = n(1867),
        tw = n(1258);
      function tS(t, e, n = {}) {
        var i;
        let r = (0, tb.x)(
            t,
            e,
            'exit' === n.type
              ? null === (i = t.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0,
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        n.transitionOverride && (s = n.transitionOverride);
        let o = r
            ? () => Promise.all((0, tw.w)(t, r, n))
            : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, n = 0, i = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * i,
                      l = 1 === r ? (t = 0) => t * i : (t = 0) => a - t * i;
                    return (
                      Array.from(t.variantChildren)
                        .sort(tT)
                        .forEach((t, i) => {
                          t.notify('AnimationStart', e),
                            o.push(
                              tS(t, e, { ...s, delay: n + l(i) }).then(() =>
                                t.notify('AnimationComplete', e),
                              ),
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + i, o, a, n);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(n.delay)]);
        {
          let [t, e] = 'beforeChildren' === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function tT(t, e) {
        return t.sortNodePosition(e);
      }
      let tA = [...tP.e].reverse(),
        tE = tP.e.length;
      function tC(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class tR extends tr {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: n }) =>
                        (function (t, e, n = {}) {
                          let i;
                          if ((t.notify('AnimationStart', e), Array.isArray(e)))
                            i = Promise.all(e.map((e) => tS(t, e, n)));
                          else if ('string' == typeof e) i = tS(t, e, n);
                          else {
                            let r =
                              'function' == typeof e
                                ? (0, tb.x)(t, e, n.custom)
                                : e;
                            i = Promise.all((0, tw.w)(t, r, n));
                          }
                          return i.then(() => {
                            z.Wi.postRender(() => {
                              t.notify('AnimationComplete', e);
                            });
                          });
                        })(t, e, n),
                      ),
                    ),
                  n = {
                    animate: tC(!0),
                    whileInView: tC(),
                    whileHover: tC(),
                    whileTap: tC(),
                    whileDrag: tC(),
                    whileFocus: tC(),
                    exit: tC(),
                  },
                  i = !0,
                  r = (e) => (n, i) => {
                    var r;
                    let s = (0, tb.x)(
                      t,
                      i,
                      'exit' === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0,
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...i } = s;
                      n = { ...n, ...i, ...e };
                    }
                    return n;
                  };
                function s(s) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    c = 1 / 0;
                  for (let e = 0; e < tE; e++) {
                    var d;
                    let f = tA[e],
                      p = n[f],
                      v = void 0 !== o[f] ? o[f] : a[f],
                      g = (0, m.$)(v),
                      y = f === s ? p.isActive : null;
                    !1 === y && (c = e);
                    let x = v === a[f] && v !== o[f] && g;
                    if (
                      (x && i && t.manuallyAnimateOnMount && (x = !1),
                      (p.protectedKeys = { ...h }),
                      (!p.isActive && null === y) ||
                        (!v && !p.prevProp) ||
                        (0, I.H)(v) ||
                        'boolean' == typeof v)
                    )
                      continue;
                    let b =
                        ((d = p.prevProp),
                        ('string' == typeof v
                          ? v !== d
                          : !!Array.isArray(v) && !tx(v, d)) ||
                          (f === s && p.isActive && !x && g) ||
                          (e > c && g)),
                      P = !1,
                      w = Array.isArray(v) ? v : [v],
                      S = w.reduce(r(f), {});
                    !1 === y && (S = {});
                    let { prevResolvedValues: T = {} } = p,
                      A = { ...T, ...S },
                      E = (e) => {
                        (b = !0),
                          u.has(e) && ((P = !0), u.delete(e)),
                          (p.needsAnimating[e] = !0);
                        let n = t.getValue(e);
                        n && (n.liveStyle = !1);
                      };
                    for (let t in A) {
                      let e = S[t],
                        n = T[t];
                      if (!h.hasOwnProperty(t))
                        ((0, ty.C)(e) && (0, ty.C)(n) ? tx(e, n) : e === n)
                          ? void 0 !== e && u.has(t)
                            ? E(t)
                            : (p.protectedKeys[t] = !0)
                          : null != e
                            ? E(t)
                            : u.add(t);
                    }
                    (p.prevProp = v),
                      (p.prevResolvedValues = S),
                      p.isActive && (h = { ...h, ...S }),
                      i && t.blockInitialAnimation && (b = !1),
                      b &&
                        (!x || P) &&
                        l.push(
                          ...w.map((t) => ({
                            animation: t,
                            options: { type: f },
                          })),
                        );
                  }
                  if (u.size) {
                    let e = {};
                    u.forEach((n) => {
                      let i = t.getBaseTarget(n),
                        r = t.getValue(n);
                      r && (r.liveStyle = !0), (e[n] = null != i ? i : null);
                    }),
                      l.push({ animation: e });
                  }
                  let f = !!l.length;
                  return (
                    i &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (f = !1),
                    (i = !1),
                    f ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, i) {
                    var r;
                    if (n[e].isActive === i) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var n;
                        return null === (n = t.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(e, i);
                      }),
                      (n[e].isActive = i);
                    let o = s(e);
                    for (let t in n) n[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (n) {
                    e = n(t);
                  },
                  getState: () => n,
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(),
            (0, I.H)(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let tM = 0;
      class tj extends tr {
        constructor() {
          super(...arguments), (this.id = tM++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === n) return;
          let i = this.node.animationState.setActive('exit', !t);
          e && !t && i.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      var tO = n(9908),
        tV = n(3303);
      let tk = (t, e) => Math.abs(t - e);
      class tD {
        constructor(
          t,
          e,
          {
            transformPagePoint: n,
            contextWindow: i,
            dragSnapToOrigin: r = !1,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let n = tF(this.lastMoveEventInfo, this.history),
                i = null !== this.startEvent,
                r =
                  ((t = n.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(tk(t.x, e.x) ** 2 + tk(t.y, e.y) ** 2) >= 3);
              if (!i && !r) return;
              let { point: s } = n,
                { timestamp: o } = z.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              i ||
                (a && a(this.lastMoveEvent, n),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, n);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = tL(e, this.transformPagePoint)),
                z.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = tF(
                'pointercancel' === t.type
                  ? this.lastMoveEventInfo
                  : tL(e, this.transformPagePoint),
                this.history,
              );
              this.startEvent && n && n(t, s), i && i(t, s);
            }),
            !K(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = n),
            (this.contextWindow = i || window);
          let s = tL(G(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = z.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, tF(s, this.history)),
            (this.removeListeners = (0, J.z)(
              Z(this.contextWindow, 'pointermove', this.handlePointerMove),
              Z(this.contextWindow, 'pointerup', this.handlePointerUp),
              Z(this.contextWindow, 'pointercancel', this.handlePointerUp),
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, z.Pn)(this.updatePoint);
        }
      }
      function tL(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function t_(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function tF({ point: t }, e) {
        return {
          point: t,
          delta: t_(t, tI(e)),
          offset: t_(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let n = t.length - 1,
              i = null,
              r = tI(t);
            for (
              ;
              n >= 0 &&
              ((i = t[n]), !(r.timestamp - i.timestamp > (0, tV.w)(0.1)));

            )
              n--;
            if (!i) return { x: 0, y: 0 };
            let s = (0, tV.X)(r.timestamp - i.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - i.x) / s, y: (r.y - i.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function tI(t) {
        return t[t.length - 1];
      }
      var tB = n(9049),
        tN = n(5312);
      function tU(t) {
        return t.max - t.min;
      }
      function tW(t, e = 0, n = 0.01) {
        return Math.abs(t - e) <= n;
      }
      function t$(t, e, n, i = 0.5) {
        (t.origin = i),
          (t.originPoint = (0, tN.t)(e.min, e.max, t.origin)),
          (t.scale = tU(n) / tU(e)),
          (tW(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, tN.t)(n.min, n.max, t.origin) - t.originPoint),
          (tW(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function tz(t, e, n, i) {
        t$(t.x, e.x, n.x, i ? i.originX : void 0),
          t$(t.y, e.y, n.y, i ? i.originY : void 0);
      }
      function tY(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + tU(e));
      }
      function tX(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + tU(e));
      }
      function tH(t, e, n) {
        tX(t.x, e.x, n.x), tX(t.y, e.y, n.y);
      }
      var tK = n(2476);
      function tG(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function tq(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i }
        );
      }
      function tZ(t, e, n) {
        return { min: tJ(t, e), max: tJ(t, n) };
      }
      function tJ(t, e) {
        return 'number' == typeof t ? t : t[e] || 0;
      }
      var tQ = n(4884);
      function t0(t) {
        return [t('x'), t('y')];
      }
      var t1 = n(411),
        t2 = n(9068),
        t3 = n(2724),
        t5 = n(9622);
      let t6 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        t4 = new WeakMap();
      class t9 {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, tQ.dO)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new tD(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(G(t, 'page').point);
              },
              onStart: (t, e) => {
                let {
                  drag: n,
                  dragPropagation: i,
                  onDragStart: r,
                } = this.getProps();
                if (
                  n &&
                  !i &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = tn(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  t0((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (t3.aQ.test(e)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let i = n.layout.layoutBox[t];
                        if (i) {
                          let t = tU(i);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && r(t, e);
                let { animationState: s } = this.visualElement;
                s && s.setActive('whileDrag', !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: i,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let n = null;
                    return (
                      Math.abs(t.y) > e
                        ? (n = 'y')
                        : Math.abs(t.x) > e && (n = 'x'),
                      n
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis('x', e.point, o),
                  this.updateAxis('y', e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                t0((t) => {
                  var e;
                  return (
                    'paused' === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: t6(this.visualElement),
            },
          );
        }
        stop(t, e) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: i } = e;
          this.startAnimation(i);
          let { onDragEnd: r } = this.getProps();
          r && r(t, e);
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive('whileDrag', !1);
        }
        updateAxis(t, e, n) {
          let { drag: i } = this.getProps();
          if (!n || !t8(t, i, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + n[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: n }, i) {
              return (
                void 0 !== e && t < e
                  ? (t = i ? (0, tN.t)(e, t, i.min) : Math.max(t, e))
                  : void 0 !== n &&
                    t > n &&
                    (t = i ? (0, tN.t)(n, t, i.max) : Math.min(t, n)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: n } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            r = this.constraints;
          e && (0, p.I)(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && i
              ? (this.constraints = (function (
                  t,
                  { top: e, left: n, bottom: i, right: r },
                ) {
                  return { x: tG(t.x, n, r), y: tG(t.y, e, i) };
                })(i.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: tZ(t, 'left', 'right'), y: tZ(t, 'top', 'bottom') }
              );
            })(n)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              t0((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let n = {};
                    return (
                      void 0 !== e.min && (n.min = e.min - t.min),
                      void 0 !== e.max && (n.max = e.max - t.min),
                      n
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: n } =
            this.getProps();
          if (!e || !(0, p.I)(e)) return !1;
          let i = e.current;
          (0, tO.k)(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (0, t1.z)(
              i,
              r.root,
              this.visualElement.getTransformPagePoint(),
            ),
            o = { x: tq((t = r.layout.layoutBox).x, s.x), y: tq(t.y, s.y) };
          if (n) {
            let t = n((0, t2.z2)(o));
            (this.hasMutatedConstraints = !!t), t && (o = (0, t2.i8)(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: n,
              dragElastic: i,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            t0((o) => {
              if (!t8(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: 'inertia',
                velocity: n ? t[o] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            }),
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let n = this.getAxisMotionValue(t);
          return n.start((0, t5.v)(t, n, 0, e, this.visualElement));
        }
        stopAnimation() {
          t0((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          t0((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            n = this.visualElement.getProps();
          return (
            n[e] ||
            this.visualElement.getValue(
              t,
              (n.initial ? n.initial[t] : void 0) || 0,
            )
          );
        }
        snapToCursor(t) {
          t0((e) => {
            let { drag: n } = this.getProps();
            if (!t8(e, n, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (i && i.layout) {
              let { min: n, max: s } = i.layout.layoutBox[e];
              r.set(t[e] - (0, tN.t)(n, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!(0, p.I)(e) || !n || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          t0((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let n = e.get();
              i[t] = (function (t, e) {
                let n = 0.5,
                  i = tU(t),
                  r = tU(e);
                return (
                  r > i
                    ? (n = (0, tB.Y)(e.min, e.max - i, t.min))
                    : i > r && (n = (0, tB.Y)(t.min, t.max - r, e.min)),
                  (0, tK.u)(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, '') : 'none'),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            t0((e) => {
              if (!t8(e, t, null)) return;
              let n = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              n.set((0, tN.t)(r, s, i[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          t4.set(this.visualElement, this);
          let t = Z(this.visualElement.current, 'pointerdown', (t) => {
              let { drag: e, dragListener: n = !0 } = this.getProps();
              e && n && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              (0, p.I)(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            i = n.addEventListener('measure', e);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            e();
          let r = H(window, 'resize', () =>
              this.scalePositionWithinConstraints(),
            ),
            s = n.addEventListener(
              'didUpdate',
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (t0((e) => {
                    let n = this.getAxisMotionValue(e);
                    n &&
                      ((this.originPoint[e] += t[e].translate),
                      n.set(n.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            r(), t(), i(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function t8(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      class t7 extends tr {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tu.Z),
            (this.removeListeners = tu.Z),
            (this.controls = new t9(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tu.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let et = (t) => (e, n) => {
        t && t(e, n);
      };
      class ee extends tr {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tu.Z);
        }
        onPointerDown(t) {
          this.session = new tD(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: t6(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: n,
            onPanEnd: i,
          } = this.node.getProps();
          return {
            onSessionStart: et(t),
            onStart: et(e),
            onMove: n,
            onEnd: (t, e) => {
              delete this.session, i && i(t, e);
            },
          };
        }
        mount() {
          this.removePointerDownListener = Z(
            this.node.current,
            'pointerdown',
            (t) => this.onPointerDown(t),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let en = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ei(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let er = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ('string' == typeof t) {
            if (!t3.px.test(t)) return t;
            t = parseFloat(t);
          }
          let n = ei(t, e.target.x),
            i = ei(t, e.target.y);
          return `${n}% ${i}%`;
        },
      };
      var es = n(2263),
        eo = n(7381);
      class ea extends s.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
              layoutId: i,
            } = this.props,
            { projection: r } = t;
          (0, eo.B)(eu),
            r &&
              (e.group && e.group.add(r),
              n && n.register && i && n.register(r),
              r.root.didUpdate(),
              r.addEventListener('animationComplete', () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (en.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: n,
              drag: i,
              isPresent: r,
            } = this.props,
            s = n.projection;
          return (
            s &&
              ((s.isPresent = r),
              i || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    z.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            d.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
            } = this.props,
            { projection: i } = t;
          i &&
            (i.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(i),
            n && n.deregister && n.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function el(t) {
        let [e, n] = (function () {
            let t = (0, s.useContext)(l.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: n, register: i } = t,
              r = (0, s.useId)();
            return (
              (0, s.useEffect)(() => i(r), []),
              !e && n ? [!1, () => n && n(r)] : [!0]
            );
          })(),
          i = (0, s.useContext)(b.p);
        return (0, r.jsx)(ea, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, s.useContext)(P),
          isPresent: e,
          safeToRemove: n,
        });
      }
      let eu = {
        borderRadius: {
          ...er,
          applyTo: [
            'borderTopLeftRadius',
            'borderTopRightRadius',
            'borderBottomLeftRadius',
            'borderBottomRightRadius',
          ],
        },
        borderTopLeftRadius: er,
        borderTopRightRadius: er,
        borderBottomLeftRadius: er,
        borderBottomRightRadius: er,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: n }) => {
            let i = es.P.parse(t);
            if (i.length > 5) return t;
            let r = es.P.createTransformer(t),
              s = 'number' != typeof i[0] ? 1 : 0,
              o = n.x.scale * e.x,
              a = n.y.scale * e.y;
            (i[0 + s] /= o), (i[1 + s] /= a);
            let l = (0, tN.t)(o, a, 0.5);
            return (
              'number' == typeof i[2 + s] && (i[2 + s] /= l),
              'number' == typeof i[3 + s] && (i[3 + s] /= l),
              r(i)
            );
          },
        },
      };
      var eh = n(2685),
        ec = n(4354);
      let ed = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        ef = ed.length,
        ep = (t) => ('string' == typeof t ? parseFloat(t) : t),
        em = (t) => 'number' == typeof t || t3.px.test(t);
      function ev(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let eg = ex(0, 0.5, ec.Bn),
        ey = ex(0.5, 0.95, tu.Z);
      function ex(t, e, n) {
        return (i) => (i < t ? 0 : i > e ? 1 : n((0, tB.Y)(t, e, i)));
      }
      function eb(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function eP(t, e) {
        eb(t.x, e.x), eb(t.y, e.y);
      }
      var ew = n(5015);
      function eS(t, e, n, i, r) {
        return (
          (t -= e),
          (t = (0, ew.q2)(t, 1 / n, i)),
          void 0 !== r && (t = (0, ew.q2)(t, 1 / r, i)),
          t
        );
      }
      function eT(t, e, [n, i, r], s, o) {
        !(function (t, e = 0, n = 1, i = 0.5, r, s = t, o = t) {
          if (
            (t3.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, tN.t)(o.min, o.max, e / 100) - o.min)),
            'number' != typeof e)
          )
            return;
          let a = (0, tN.t)(s.min, s.max, i);
          t === s && (a -= e),
            (t.min = eS(t.min, e, n, a, r)),
            (t.max = eS(t.max, e, n, a, r));
        })(t, e[n], e[i], e[r], e.scale, s, o);
      }
      let eA = ['x', 'scaleX', 'originX'],
        eE = ['y', 'scaleY', 'originY'];
      function eC(t, e, n, i) {
        eT(t.x, e, eA, n ? n.x : void 0, i ? i.x : void 0),
          eT(t.y, e, eE, n ? n.y : void 0, i ? i.y : void 0);
      }
      var eR = n(5566);
      function eM(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ej(t) {
        return eM(t.x) && eM(t.y);
      }
      function eO(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function eV(t) {
        return tU(t.x) / tU(t.y);
      }
      var ek = n(406);
      class eD {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, ek.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, ek.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let n = this.members.findIndex((e) => t === e);
          if (0 === n) return !1;
          for (let t = n; t >= 0; t--) {
            let n = this.members[t];
            if (!1 !== n.isPresent) {
              e = n;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let n = this.lead;
          if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
            n.instance && n.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = n),
              e && (t.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((t.snapshot = n.snapshot),
                (t.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: i } = t.options;
            !1 === i && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: n } = t;
            e.onExitComplete && e.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function eL(t, e, n) {
        let i = '',
          r = t.x.translate / e.x,
          s = t.y.translate / e.y,
          o = (null == n ? void 0 : n.z) || 0;
        if (
          ((r || s || o) && (i = `translate3d(${r}px, ${s}px, ${o}px) `),
          (1 !== e.x || 1 !== e.y) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
          n)
        ) {
          let {
            transformPerspective: t,
            rotate: e,
            rotateX: r,
            rotateY: s,
            skewX: o,
            skewY: a,
          } = n;
          t && (i = `perspective(${t}px) ${i}`),
            e && (i += `rotate(${e}deg) `),
            r && (i += `rotateX(${r}deg) `),
            s && (i += `rotateY(${s}deg) `),
            o && (i += `skewX(${o}deg) `),
            a && (i += `skewY(${a}deg) `);
        }
        let a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`), i || 'none';
      }
      var e_ = n(4352);
      let eF = (t, e) => t.depth - e.depth;
      class eI {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, ek.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, ek.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(eF),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var eB = n(3791),
        eN = n(1937),
        eU = n(2014);
      let eW = ['', 'X', 'Y', 'Z'],
        e$ = { visibility: 'hidden' },
        ez = 0,
        eY = {
          type: 'projectionFrame',
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function eX(t, e, n, i) {
        let { latestValues: r } = e;
        r[t] && ((n[t] = r[t]), e.setStaticValue(t, 0), i && (i[t] = 0));
      }
      function eH({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, n = null == e ? void 0 : e()) {
            (this.id = ez++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (eY.totalNodes =
                    eY.resolvedTargetDeltas =
                    eY.recalculatedProjection =
                      0),
                  this.nodes.forEach(eq),
                  this.nodes.forEach(e3),
                  this.nodes.forEach(e5),
                  this.nodes.forEach(eZ),
                  window.MotionDebug && window.MotionDebug.record(eY);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new eI());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new eh.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let n = this.eventHandlers.get(t);
            n && n.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = (0, eN.v)(e)), (this.instance = e);
            let { layoutId: i, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (r || i) && (this.isLayoutDirty = !0),
              t)
            ) {
              let n;
              let i = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (t, e) {
                    let n = eB.X.now(),
                      i = ({ timestamp: r }) => {
                        let s = r - n;
                        s >= e && ((0, z.Pn)(i), t(s - e));
                      };
                    return z.Wi.read(i, !0), () => (0, z.Pn)(i);
                  })(i, 250)),
                  en.hasAnimatedSinceResize &&
                    ((en.hasAnimatedSinceResize = !1), this.nodes.forEach(e2));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || r) &&
                this.addEventListener(
                  'didUpdate',
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: n,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        nt,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !eO(this.targetLayout, i) || n,
                      u = !e && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, eR.e)(r, 'layout'),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || e2(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  },
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, z.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(e6),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll('snapshot'),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: n } = this.options;
            if (void 0 === e && !n) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, '')
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners('willUpdate');
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(eQ);
              return;
            }
            this.isUpdating || this.nodes.forEach(e0),
              (this.isUpdating = !1),
              window.HandoffCancelAllAnimations &&
                window.HandoffCancelAllAnimations(),
              this.nodes.forEach(e1),
              this.nodes.forEach(eK),
              this.nodes.forEach(eG),
              this.clearAllSnapshots();
            let t = eB.X.now();
            (z.frameData.delta = (0, tK.u)(
              0,
              1e3 / 60,
              t - z.frameData.timestamp,
            )),
              (z.frameData.timestamp = t),
              (z.frameData.isProcessing = !0),
              z.S6.update.process(z.frameData),
              z.S6.preRender.process(z.frameData),
              z.S6.render.process(z.frameData),
              (z.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), d.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(eJ), this.sharedNodes.forEach(e4);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              z.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            z.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, tQ.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners('measure', this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                'LayoutMeasure',
                this.layout.layoutBox,
                t ? t.layoutBox : void 0,
              );
          }
          updateScroll(t = 'measure') {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: i(this.instance),
                  offset: n(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !ej(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, '') : void 0,
              s = i !== this.prevTransformTemplateValue;
            t &&
              (e || (0, e_.ud)(this.latestValues) || s) &&
              (r(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let n = this.measurePageBox(),
              i = this.removeElementScroll(n);
            return (
              t && (i = this.removeTransform(i)),
              ni((e = i).x),
              ni(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return (0, tQ.dO)();
            let e = t.measureViewportBox(),
              { scroll: n } = this.root;
            return (
              n && ((0, ew.am)(e.x, n.offset.x), (0, ew.am)(e.y, n.offset.y)), e
            );
          }
          removeElementScroll(t) {
            let e = (0, tQ.dO)();
            eP(e, t);
            for (let n = 0; n < this.path.length; n++) {
              let i = this.path[n],
                { scroll: r, options: s } = i;
              if (i !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  eP(e, t);
                  let { scroll: n } = this.root;
                  n &&
                    ((0, ew.am)(e.x, -n.offset.x),
                    (0, ew.am)(e.y, -n.offset.y));
                }
                (0, ew.am)(e.x, r.offset.x), (0, ew.am)(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let n = (0, tQ.dO)();
            eP(n, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              !e &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                (0, ew.D2)(n, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                (0, e_.ud)(i.latestValues) && (0, ew.D2)(n, i.latestValues);
            }
            return (
              (0, e_.ud)(this.latestValues) && (0, ew.D2)(n, this.latestValues),
              n
            );
          }
          removeTransform(t) {
            let e = (0, tQ.dO)();
            eP(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              if (!n.instance || !(0, e_.ud)(n.latestValues)) continue;
              (0, e_.Lj)(n.latestValues) && n.updateSnapshot();
              let i = (0, tQ.dO)();
              eP(i, n.measurePageBox()),
                eC(
                  e,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  i,
                );
            }
            return (0, e_.ud)(this.latestValues) && eC(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                z.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, n, i, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = z.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, tQ.dO)()),
                    (this.relativeTargetOrigin = (0, tQ.dO)()),
                    tH(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox,
                    ),
                    eP(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, tQ.dO)()),
                    (this.targetWithTransforms = (0, tQ.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (i = this.relativeTarget),
                      (r = this.relativeParent.target),
                      tY(n.x, i.x, r.x),
                      tY(n.y, i.y, r.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox,
                            ))
                          : eP(this.target, this.layout.layoutBox),
                        (0, ew.o2)(this.target, this.targetDelta))
                      : eP(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, tQ.dO)()),
                      (this.relativeTargetOrigin = (0, tQ.dO)()),
                      tH(this.relativeTargetOrigin, this.target, t.target),
                      eP(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                eY.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, e_.Lj)(this.parent.latestValues) ||
              (0, e_.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              n = !!this.resumingFrom || this !== e,
              i = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (i = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === z.frameData.timestamp &&
                (i = !1),
              i)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            eP(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            (0, ew.YY)(this.layoutCorrected, this.treeScale, this.path, n),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = (0, tQ.dO)()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = (0, tQ.wc)()),
                (this.projectionTransform = 'none'),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = (0, tQ.wc)()),
              (this.projectionDeltaWithTransform = (0, tQ.wc)()));
            let u = this.projectionTransform;
            tz(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues,
            ),
              (this.projectionTransform = eL(
                this.projectionDelta,
                this.treeScale,
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners('projectionUpdate', l)),
              eY.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let n;
            let i = this.snapshot,
              r = i ? i.latestValues : {},
              s = { ...this.latestValues },
              o = (0, tQ.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, tQ.dO)(),
              l =
                (i ? i.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(e7)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let i = e / 1e3;
                if (
                  (e9(o.x, t.x, i),
                  e9(o.y, t.y, i),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, f, p;
                  tH(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox,
                  ),
                    (f = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    e8(f.x, p.x, a.x, i),
                    e8(f.y, p.y, a.y, i),
                    n &&
                      ((u = this.relativeTarget),
                      (d = n),
                      u.x.min === d.x.min &&
                        u.x.max === d.x.max &&
                        u.y.min === d.y.min &&
                        u.y.max === d.y.max) &&
                      (this.isProjectionDirty = !1),
                    n || (n = (0, tQ.dO)()),
                    eP(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, n, i, r, s) {
                    r
                      ? ((t.opacity = (0, tN.t)(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          eg(i),
                        )),
                        (t.opacityExit = (0, tN.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          ey(i),
                        )))
                      : s &&
                        (t.opacity = (0, tN.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          i,
                        ));
                    for (let r = 0; r < ef; r++) {
                      let s = `border${ed[r]}Radius`,
                        o = ev(e, s),
                        a = ev(n, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || em(o) === em(a)
                          ? ((t[s] = Math.max((0, tN.t)(ep(o), ep(a), i), 0)),
                            (t3.aQ.test(a) || t3.aQ.test(o)) && (t[s] += '%'))
                          : (t[s] = a));
                    }
                    (e.rotate || n.rotate) &&
                      (t.rotate = (0, tN.t)(e.rotate || 0, n.rotate || 0, i));
                  })(s, r, this.latestValues, i, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners('animationStart'),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, z.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = z.Wi.update(() => {
                (en.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (0, eU.D)(0, 1e3, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners('animationComplete');
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: n,
                layout: i,
                latestValues: r,
              } = t;
            if (e && n && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                nr(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox,
                )
              ) {
                n = this.target || (0, tQ.dO)();
                let e = tU(this.layout.layoutBox.x);
                (n.x.min = t.target.x.min), (n.x.max = n.x.min + e);
                let i = tU(this.layout.layoutBox.y);
                (n.y.min = t.target.y.min), (n.y.max = n.y.min + i);
              }
              eP(e, n),
                (0, ew.D2)(e, r),
                tz(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r,
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new eD()),
              this.sharedNodes.get(t).add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, n),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: n } = t;
            if (
              ((n.z ||
                n.rotate ||
                n.rotateX ||
                n.rotateY ||
                n.rotateZ ||
                n.skewX ||
                n.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let i = {};
            n.z && eX('z', t, i, this.animationValues);
            for (let e = 0; e < eW.length; e++)
              eX(`rotate${eW[e]}`, t, i, this.animationValues),
                eX(`skew${eW[e]}`, t, i, this.animationValues);
            for (let e in (t.render(), i))
              t.setStaticValue(e, i[e]),
                this.animationValues && (this.animationValues[e] = i[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return e$;
            let i = { visibility: '' },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ''),
                (i.pointerEvents =
                  W(null == t ? void 0 : t.pointerEvents) || ''),
                (i.transform = r ? r(this.latestValues, '') : 'none'),
                i
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    W(null == t ? void 0 : t.pointerEvents) || '')),
                this.hasProjected &&
                  !(0, e_.ud)(this.latestValues) &&
                  ((e.transform = r ? r({}, '') : 'none'),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = eL(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o,
              )),
              r && (i.transform = r(o, i.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((i.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            s.animationValues
              ? (i.opacity =
                  s === this
                    ? null !==
                        (n =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : o.opacityExit)
              : (i.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ''
                    : void 0 !== o.opacityExit
                      ? o.opacityExit
                      : 0),
            eo.P)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: n } = eo.P[t],
                r = 'none' === i.transform ? o[t] : e(o[t], s);
              if (n) {
                let t = n.length;
                for (let e = 0; e < t; e++) i[n[e]] = r;
              } else i[t] = r;
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  s === this
                    ? W(null == t ? void 0 : t.pointerEvents) || ''
                    : 'none'),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(eQ),
              this.root.sharedNodes.clear();
          }
        };
      }
      function eK(t) {
        t.updateLayout();
      }
      function eG(t) {
        var e;
        let n =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && n && t.hasListeners('didUpdate')) {
          let { layoutBox: e, measuredBox: i } = t.layout,
            { animationType: r } = t.options,
            s = n.source !== t.layout.source;
          'size' === r
            ? t0((t) => {
                let i = s ? n.measuredBox[t] : n.layoutBox[t],
                  r = tU(i);
                (i.min = e[t].min), (i.max = i.min + r);
              })
            : nr(r, n.layoutBox, e) &&
              t0((i) => {
                let r = s ? n.measuredBox[i] : n.layoutBox[i],
                  o = tU(e[i]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[i].max = t.relativeTarget[i].min + o));
              });
          let o = (0, tQ.wc)();
          tz(o, e, n.layoutBox);
          let a = (0, tQ.wc)();
          s
            ? tz(a, t.applyTransform(i, !0), n.measuredBox)
            : tz(a, e, n.layoutBox);
          let l = !ej(o),
            u = !1;
          if (!t.resumeFrom) {
            let i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: r, layout: s } = i;
              if (r && s) {
                let o = (0, tQ.dO)();
                tH(o, n.layoutBox, r.layoutBox);
                let a = (0, tQ.dO)();
                tH(a, e, s.layoutBox),
                  eO(o, a) || (u = !0),
                  i.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = i));
              }
            }
          }
          t.notifyListeners('didUpdate', {
            layout: e,
            snapshot: n,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function eq(t) {
        eY.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function eZ(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function eJ(t) {
        t.clearSnapshot();
      }
      function eQ(t) {
        t.clearMeasurements();
      }
      function e0(t) {
        t.isLayoutDirty = !1;
      }
      function e1(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify('BeforeLayoutMeasure'),
          t.resetTransform();
      }
      function e2(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function e3(t) {
        t.resolveTargetDelta();
      }
      function e5(t) {
        t.calcProjection();
      }
      function e6(t) {
        t.resetSkewAndRotation();
      }
      function e4(t) {
        t.removeLeadSnapshot();
      }
      function e9(t, e, n) {
        (t.translate = (0, tN.t)(e.translate, 0, n)),
          (t.scale = (0, tN.t)(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function e8(t, e, n, i) {
        (t.min = (0, tN.t)(e.min, n.min, i)),
          (t.max = (0, tN.t)(e.max, n.max, i));
      }
      function e7(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nt = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ne = (t) =>
          'undefined' != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nn = ne('applewebkit/') && !ne('chrome/') ? Math.round : tu.Z;
      function ni(t) {
        (t.min = nn(t.min)), (t.max = nn(t.max));
      }
      function nr(t, e, n) {
        return (
          'position' === t ||
          ('preserve-aspect' === t && !tW(eV(e), eV(n), 0.2))
        );
      }
      let ns = eH({
          attachResizeListener: (t, e) => H(t, 'resize', e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        no = { current: void 0 },
        na = eH({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!no.current) {
              let t = new ns({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (no.current = t);
            }
            return no.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : 'none';
          },
          checkIsScrollRoot: (t) =>
            'fixed' === window.getComputedStyle(t).position,
        });
      var nl = n(6276),
        nu = n(1165);
      let nh = (t, e) =>
          T(t)
            ? new nu.e(e, { enableHardwareAcceleration: !1 })
            : new nl.W(e, {
                allowProjection: t !== s.Fragment,
                enableHardwareAcceleration: !0,
              }),
        nc = {
          animation: { Feature: tR },
          exit: { Feature: tj },
          inView: { Feature: tg },
          tap: { Feature: tc },
          focus: { Feature: ta },
          hover: { Feature: to },
          pan: { Feature: ee },
          drag: { Feature: t7, ProjectionNode: na, MeasureLayout: el },
          layout: { ProjectionNode: na, MeasureLayout: el },
        },
        nd = (function (t) {
          function e(e, n = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: n,
              useVisualState: i,
              Component: f,
            }) {
              t &&
                (function (t) {
                  for (let e in t) y.A[e] = { ...y.A[e], ...t[e] };
                })(t);
              let S = (0, s.forwardRef)(function (y, w) {
                var S;
                let T;
                let A = {
                    ...(0, s.useContext)(o._),
                    ...y,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, s.useContext)(b.p).id;
                      return e && void 0 !== t ? e + '-' + t : t;
                    })(y),
                  },
                  { isStatic: E } = A,
                  C = (function (t) {
                    let { initial: e, animate: n } = (function (t, e) {
                      if ((0, v.G)(t)) {
                        let { initial: e, animate: n } = t;
                        return {
                          initial: !1 === e || (0, m.$)(e) ? e : void 0,
                          animate: (0, m.$)(n) ? n : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, s.useContext)(a));
                    return (0, s.useMemo)(
                      () => ({ initial: e, animate: n }),
                      [g(e), g(n)],
                    );
                  })(y),
                  R = i(y, E);
                if (!E && x.j) {
                  C.visualElement = (function (t, e, n, i) {
                    let { visualElement: r } = (0, s.useContext)(a),
                      f = (0, s.useContext)(h),
                      p = (0, s.useContext)(l.O),
                      m = (0, s.useContext)(o._).reducedMotion,
                      v = (0, s.useRef)();
                    (i = i || f.renderer),
                      !v.current &&
                        i &&
                        (v.current = i(t, {
                          visualState: e,
                          parent: r,
                          props: n,
                          presenceContext: p,
                          blockInitialAnimation: !!p && !1 === p.initial,
                          reducedMotionConfig: m,
                        }));
                    let g = v.current;
                    (0, s.useInsertionEffect)(() => {
                      g && g.update(n, p);
                    });
                    let y = (0, s.useRef)(
                      !!(n[c.M] && !window.HandoffComplete),
                    );
                    return (
                      (0, u.L)(() => {
                        g &&
                          (d.postRender(g.render),
                          y.current &&
                            g.animationState &&
                            g.animationState.animateChanges());
                      }),
                      (0, s.useEffect)(() => {
                        g &&
                          (g.updateFeatures(),
                          !y.current &&
                            g.animationState &&
                            g.animationState.animateChanges(),
                          y.current &&
                            ((y.current = !1), (window.HandoffComplete = !0)));
                      }),
                      g
                    );
                  })(f, R, A, e);
                  let n = (0, s.useContext)(P),
                    i = (0, s.useContext)(h).strict;
                  C.visualElement &&
                    (T = C.visualElement.loadFeatures(A, i, t, n));
                }
                return (0, r.jsxs)(a.Provider, {
                  value: C,
                  children: [
                    T && C.visualElement
                      ? (0, r.jsx)(T, { visualElement: C.visualElement, ...A })
                      : null,
                    n(
                      f,
                      y,
                      ((S = C.visualElement),
                      (0, s.useCallback)(
                        (t) => {
                          t && R.mount && R.mount(t),
                            S && (t ? S.mount(t) : S.unmount()),
                            w &&
                              ('function' == typeof w
                                ? w(t)
                                : (0, p.I)(w) && (w.current = t));
                        },
                        [S],
                      )),
                      R,
                      E,
                      C.visualElement,
                    ),
                  ],
                });
              });
              return (S[w] = f), S;
            })(t(e, n));
          }
          if ('undefined' == typeof Proxy) return e;
          let n = new Map();
          return new Proxy(e, {
            get: (t, i) => (n.has(i) || n.set(i, e(i)), n.get(i)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, n, i) {
            return {
              ...(T(t) ? Y : X),
              preloadedFeatures: n,
              useRender: (function (t = !1) {
                return (e, n, i, { latestValues: r }, o) => {
                  let a = (
                      T(e)
                        ? function (t, e, n, i) {
                            let r = (0, s.useMemo)(() => {
                              let n = D();
                              return (
                                (0, k.i)(
                                  n,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  (0, L.a)(i),
                                  t.transformTemplate,
                                ),
                                { ...n.attrs, style: { ...n.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              M(e, t.style, t),
                                (r.style = { ...e, ...r.style });
                            }
                            return r;
                          }
                        : function (t, e, n) {
                            let i = {},
                              r = (function (t, e, n) {
                                let i = t.style || {},
                                  r = {};
                                return (
                                  M(r, i, t),
                                  Object.assign(
                                    r,
                                    (function ({ transformTemplate: t }, e, n) {
                                      return (0, s.useMemo)(() => {
                                        let i = R();
                                        return (
                                          (0, C.r)(
                                            i,
                                            e,
                                            { enableHardwareAcceleration: !n },
                                            t,
                                          ),
                                          Object.assign({}, i.vars, i.style)
                                        );
                                      }, [e]);
                                    })(t, e, n),
                                  ),
                                  r
                                );
                              })(t, e, n);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((i.draggable = !1),
                                (r.userSelect =
                                  r.WebkitUserSelect =
                                  r.WebkitTouchCallout =
                                    'none'),
                                (r.touchAction =
                                  !0 === t.drag
                                    ? 'none'
                                    : `pan-${'x' === t.drag ? 'y' : 'x'}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (i.tabIndex = 0),
                              (i.style = r),
                              i
                            );
                          }
                    )(n, r, o, e),
                    l = (function (t, e, n) {
                      let i = {};
                      for (let r in t)
                        ('values' !== r || 'object' != typeof t.values) &&
                          (V(r) ||
                            (!0 === n && O(r)) ||
                            (!e && !O(r)) ||
                            (t.draggable && r.startsWith('onDrag'))) &&
                          (i[r] = t[r]);
                      return i;
                    })(n, 'string' == typeof e, t),
                    u = e !== s.Fragment ? { ...l, ...a, ref: i } : {},
                    { children: h } = n,
                    c = (0, s.useMemo)(() => ((0, E.i)(h) ? h.get() : h), [h]);
                  return (0, s.createElement)(e, { ...u, children: c });
                };
              })(e),
              createVisualElement: i,
              Component: t,
            };
          })(t, e, nc, nh),
        );
    },
    5998: function (t, e, n) {
      n.d(e, {
        D: function () {
          return i;
        },
      });
      let i = (t) => t.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase();
    },
    7126: function (t, e, n) {
      n.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let i = (t) => (e) => 'string' == typeof e && e.startsWith(t),
        r = i('--'),
        s = i('var(--'),
        o = (t) => !!s(t) && a.test(t.split('/*')[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    1937: function (t, e, n) {
      n.d(e, {
        v: function () {
          return i;
        },
      });
      function i(t) {
        return t instanceof SVGElement && 'svg' !== t.tagName;
      }
    },
    2756: function (t, e, n) {
      n.d(e, {
        Ei: function () {
          return d;
        },
        lw: function () {
          return f;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return o;
        },
      });
      var i = n(618),
        r = n(5218),
        s = n(2724);
      let o = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
          'translateX',
          'translateY',
        ]),
        a = (t) => t === r.Rx || t === s.px,
        l = (t, e) => parseFloat(t.split(', ')[e]),
        u =
          (t, e) =>
          (n, { transform: i }) => {
            if ('none' === i || !i) return 0;
            let r = i.match(/^matrix3d\((.+)\)$/u);
            if (r) return l(r[1], e);
            {
              let e = i.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        h = new Set(['x', 'y', 'z']),
        c = i._.filter((t) => !h.has(t));
      function d(t) {
        let e = [];
        return (
          c.forEach((n) => {
            let i = t.getValue(n);
            void 0 !== i &&
              (e.push([n, i.get()]), i.set(n.startsWith('scale') ? 1 : 0));
          }),
          e
        );
      }
      let f = {
        width: ({ x: t }, { paddingLeft: e = '0', paddingRight: n = '0' }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        height: ({ y: t }, { paddingTop: e = '0', paddingBottom: n = '0' }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (f.translateX = f.x), (f.translateY = f.y);
    },
    3462: function (t, e, n) {
      n.d(e, {
        T: function () {
          return o;
        },
      });
      var i = n(2263),
        r = n(2915),
        s = n(6217);
      function o(t, e) {
        let n = (0, s.A)(t);
        return (
          n !== r.h && (n = i.P),
          n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        );
      }
    },
    6217: function (t, e, n) {
      n.d(e, {
        A: function () {
          return o;
        },
      });
      var i = n(2809),
        r = n(2915);
      let s = {
          ...n(7346).j,
          color: i.$,
          backgroundColor: i.$,
          outlineColor: i.$,
          fill: i.$,
          stroke: i.$,
          borderColor: i.$,
          borderTopColor: i.$,
          borderRightColor: i.$,
          borderBottomColor: i.$,
          borderLeftColor: i.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (t) => s[t];
    },
    1921: function (t, e, n) {
      n.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var i = n(5218),
        r = n(2724),
        s = n(4707);
      let o = [
          i.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => 'auto' === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    7346: function (t, e, n) {
      n.d(e, {
        j: function () {
          return o;
        },
      });
      var i = n(5218),
        r = n(2724);
      let s = { ...i.Rx, transform: Math.round },
        o = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: i.bA,
          scaleX: i.bA,
          scaleY: i.bA,
          scaleZ: i.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: i.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          backgroundPositionX: r.px,
          backgroundPositionY: r.px,
          fillOpacity: i.Fq,
          strokeOpacity: i.Fq,
          numOctaves: s,
        };
    },
    4707: function (t, e, n) {
      n.d(e, {
        l: function () {
          return i;
        },
      });
      let i = (t) => (e) => e.test(t);
    },
    6276: function (t, e, n) {
      n.d(e, {
        W: function () {
          return d;
        },
      });
      var i = n(5275),
        r = n(7126),
        s = n(618),
        o = n(6235),
        a = n(4269),
        l = n(6217),
        u = n(411),
        h = n(176),
        c = n(2702);
      class d extends h.J {
        constructor() {
          super(...arguments), (this.type = 'html');
        }
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            let t = (0, l.A)(e);
            return (t && t.default) || 0;
          }
          {
            let n = window.getComputedStyle(t),
              i = ((0, r.f)(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return 'string' == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, u.J)(t, e);
        }
        build(t, e, n, r) {
          (0, i.r)(t, e, n, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, o.U)(t, e, n);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, c.i)(t) &&
            (this.childSubscription = t.on('change', (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, n, i) {
          (0, a.N)(t, e, n, i);
        }
      }
    },
    5275: function (t, e, n) {
      n.d(e, {
        r: function () {
          return u;
        },
      });
      var i = n(618);
      let r = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective',
        },
        s = i._.length;
      var o = n(7126);
      let a = (t, e) => (e && 'number' == typeof t ? e.transform(t) : t);
      var l = n(7346);
      function u(t, e, n, u) {
        let { style: h, vars: c, transform: d, transformOrigin: f } = t,
          p = !1,
          m = !1,
          v = !0;
        for (let t in e) {
          let n = e[t];
          if ((0, o.f)(t)) {
            c[t] = n;
            continue;
          }
          let r = l.j[t],
            s = a(n, r);
          if (i.G.has(t)) {
            if (((p = !0), (d[t] = s), !v)) continue;
            n !== (r.default || 0) && (v = !1);
          } else t.startsWith('origin') ? ((m = !0), (f[t] = s)) : (h[t] = s);
        }
        if (
          (!e.transform &&
            (p || u
              ? (h.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: n = !0,
                  },
                  o,
                  a,
                ) {
                  let l = '';
                  for (let e = 0; e < s; e++) {
                    let n = i._[e];
                    if (void 0 !== t[n]) {
                      let e = r[n] || n;
                      l += `${e}(${t[n]}) `;
                    }
                  }
                  return (
                    e && !t.z && (l += 'translateZ(0)'),
                    (l = l.trim()),
                    a ? (l = a(t, o ? '' : l)) : n && o && (l = 'none'),
                    l
                  );
                })(t.transform, n, v, u))
              : h.transform && (h.transform = 'none')),
          m)
        ) {
          let { originX: t = '50%', originY: e = '50%', originZ: n = 0 } = f;
          h.transformOrigin = `${t} ${e} ${n}`;
        }
      }
    },
    4269: function (t, e, n) {
      n.d(e, {
        N: function () {
          return i;
        },
      });
      function i(t, { style: e, vars: n }, i, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(i)),
        n))
          t.style.setProperty(s, n[s]);
      }
    },
    6235: function (t, e, n) {
      n.d(e, {
        U: function () {
          return s;
        },
      });
      var i = n(5403),
        r = n(2702);
      function s(t, e, n) {
        var s;
        let { style: o } = t,
          a = {};
        for (let l in o)
          ((0, r.i)(o[l]) ||
            (e.style && (0, r.i)(e.style[l])) ||
            (0, i.j)(l, t) ||
            (null === (s = null == n ? void 0 : n.getValue(l)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (a[l] = o[l]);
        return a;
      }
    },
    618: function (t, e, n) {
      n.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return i;
        },
      });
      let i = [
          'transformPerspective',
          'x',
          'y',
          'z',
          'translateX',
          'translateY',
          'translateZ',
          'scale',
          'scaleX',
          'scaleY',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'skew',
          'skewX',
          'skewY',
        ],
        r = new Set(i);
    },
    8854: function (t, e, n) {
      n.d(e, {
        R: function () {
          return i;
        },
      });
      let i = new WeakMap();
    },
    1165: function (t, e, n) {
      n.d(e, {
        e: function () {
          return f;
        },
      });
      var i = n(9548),
        r = n(176),
        s = n(8348),
        o = n(5998),
        a = n(8766),
        l = n(618),
        u = n(1661),
        h = n(6217),
        c = n(4884),
        d = n(7612);
      class f extends r.J {
        constructor() {
          super(...arguments), (this.type = 'svg'), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (l.G.has(e)) {
            let t = (0, h.A)(e);
            return (t && t.default) || 0;
          }
          return (e = a.s.has(e) ? e : (0, o.D)(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return (0, c.dO)();
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, i.U)(t, e, n);
        }
        build(t, e, n, i) {
          (0, s.i)(t, e, n, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, n, i) {
          (0, u.K)(t, e, n, i);
        }
        mount(t) {
          (this.isSVGTag = (0, d.a)(t.tagName)), super.mount(t);
        }
      }
    },
    8348: function (t, e, n) {
      n.d(e, {
        i: function () {
          return l;
        },
      });
      var i = n(5275),
        r = n(2724);
      function s(t, e, n) {
        return 'string' == typeof t ? t : r.px.transform(e + n * t);
      }
      let o = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        a = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
      function l(
        t,
        {
          attrX: e,
          attrY: n,
          attrScale: l,
          originX: u,
          originY: h,
          pathLength: c,
          pathSpacing: d = 1,
          pathOffset: f = 0,
          ...p
        },
        m,
        v,
        g,
      ) {
        if (((0, i.r)(t, p, m, g), v)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: y, style: x, dimensions: b } = t;
        y.transform && (b && (x.transform = y.transform), delete y.transform),
          b &&
            (void 0 !== u || void 0 !== h || x.transform) &&
            (x.transformOrigin = (function (t, e, n) {
              let i = s(e, t.x, t.width),
                r = s(n, t.y, t.height);
              return `${i} ${r}`;
            })(b, void 0 !== u ? u : 0.5, void 0 !== h ? h : 0.5)),
          void 0 !== e && (y.x = e),
          void 0 !== n && (y.y = n),
          void 0 !== l && (y.scale = l),
          void 0 !== c &&
            (function (t, e, n = 1, i = 0, s = !0) {
              t.pathLength = 1;
              let l = s ? o : a;
              t[l.offset] = r.px.transform(-i);
              let u = r.px.transform(e),
                h = r.px.transform(n);
              t[l.array] = `${u} ${h}`;
            })(y, c, d, f, !1);
      }
    },
    8766: function (t, e, n) {
      n.d(e, {
        s: function () {
          return i;
        },
      });
      let i = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform',
        'pathLength',
        'startOffset',
        'textLength',
        'lengthAdjust',
      ]);
    },
    7612: function (t, e, n) {
      n.d(e, {
        a: function () {
          return i;
        },
      });
      let i = (t) => 'string' == typeof t && 'svg' === t.toLowerCase();
    },
    1661: function (t, e, n) {
      n.d(e, {
        K: function () {
          return o;
        },
      });
      var i = n(5998),
        r = n(4269),
        s = n(8766);
      function o(t, e, n, o) {
        for (let n in ((0, r.N)(t, e, void 0, o), e.attrs))
          t.setAttribute(s.s.has(n) ? n : (0, i.D)(n), e.attrs[n]);
      }
    },
    9548: function (t, e, n) {
      n.d(e, {
        U: function () {
          return o;
        },
      });
      var i = n(2702),
        r = n(6235),
        s = n(618);
      function o(t, e, n) {
        let o = (0, r.U)(t, e, n);
        for (let n in t)
          ((0, i.i)(t[n]) || (0, i.i)(e[n])) &&
            (o[
              -1 !== s._.indexOf(n)
                ? 'attr' + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = t[n]);
        return o;
      }
    },
    4178: function (t, e, n) {
      n.d(e, {
        e: function () {
          return c;
        },
        m: function () {
          return h;
        },
      });
      var i = n(2756),
        r = n(4205);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            n = new Map();
          e.forEach((t) => {
            let e = (0, i.Ei)(t);
            e.length && (n.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = n.get(t);
              e &&
                e.forEach(([e, n]) => {
                  var i;
                  null === (i = t.getValue(e)) || void 0 === i || i.set(n);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class c {
        constructor(t, e, n, i, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = n),
            (this.motionValue = i),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: i,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == i ? void 0 : i.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (n && e) {
                  let i = n.readValue(e, s);
                  null != i && (t[0] = i);
                }
                void 0 === t[0] && (t[0] = s), i && void 0 === r && i.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    9739: function (t, e, n) {
      n.d(e, {
        G: function () {
          return o;
        },
        M: function () {
          return a;
        },
      });
      var i = n(4633),
        r = n(6930),
        s = n(1867);
      function o(t) {
        return (0, i.H)(t.animate) || s.V.some((e) => (0, r.$)(t[e]));
      }
      function a(t) {
        return !!(o(t) || t.variants);
      }
    },
    6930: function (t, e, n) {
      n.d(e, {
        $: function () {
          return i;
        },
      });
      function i(t) {
        return 'string' == typeof t || Array.isArray(t);
      }
    },
    1148: function (t, e, n) {
      n.d(e, {
        x: function () {
          return r;
        },
      });
      var i = n(1422);
      function r(t, e, n) {
        let r = t.getProps();
        return (0, i.o)(
          r,
          e,
          void 0 !== n ? n : r.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, n) => (e[n] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, n) => (e[n] = t.getVelocity())), e;
          })(t),
        );
      }
    },
    1422: function (t, e, n) {
      n.d(e, {
        o: function () {
          return i;
        },
      });
      function i(t, e, n, i = {}, r = {}) {
        return (
          'function' == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
          'string' == typeof e && (e = t.variants && t.variants[e]),
          'function' == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
          e
        );
      }
    },
    1867: function (t, e, n) {
      n.d(e, {
        V: function () {
          return r;
        },
        e: function () {
          return i;
        },
      });
      let i = [
          'animate',
          'whileInView',
          'whileFocus',
          'whileHover',
          'whileTap',
          'whileDrag',
          'exit',
        ],
        r = ['initial', ...i];
    },
    6832: function (t, e, n) {
      n.d(e, {
        c: function () {
          return i;
        },
      });
      let i = { skipAnimations: !1, useManualTiming: !1 };
    },
    406: function (t, e, n) {
      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      n.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return i;
        },
      });
    },
    2476: function (t, e, n) {
      n.d(e, {
        u: function () {
          return i;
        },
      });
      let i = (t, e, n) => (n > e ? e : n < t ? t : n);
    },
    9908: function (t, e, n) {
      n.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var i = n(3393);
      let r = i.Z,
        s = i.Z;
    },
    1702: function (t, e, n) {
      n.d(e, {
        j: function () {
          return i;
        },
      });
      let i = 'undefined' != typeof document;
    },
    4829: function (t, e, n) {
      n.d(e, {
        P: function () {
          return i;
        },
      });
      let i = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    8285: function (t, e, n) {
      n.d(e, {
        I: function () {
          return i;
        },
      });
      function i(t) {
        return (
          t &&
          'object' == typeof t &&
          Object.prototype.hasOwnProperty.call(t, 'current')
        );
      }
    },
    6894: function (t, e, n) {
      n.d(e, {
        W: function () {
          return i;
        },
      });
      let i = (t) => /^0[^.\s]+$/u.test(t);
    },
    6190: function (t, e, n) {
      n.d(e, {
        X: function () {
          return i;
        },
      });
      function i(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
    },
    5312: function (t, e, n) {
      n.d(e, {
        t: function () {
          return i;
        },
      });
      let i = (t, e, n) => t + (e - t) * n;
    },
    3393: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      let i = (t) => t;
    },
    5865: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return r;
        },
      });
      var i = n(2426);
      function r(t) {
        let e = [0];
        return (0, i.c)(e, t.length - 1), e;
      }
    },
    2426: function (t, e, n) {
      n.d(e, {
        c: function () {
          return s;
        },
      });
      var i = n(5312),
        r = n(9049);
      function s(t, e) {
        let n = t[t.length - 1];
        for (let s = 1; s <= e; s++) {
          let o = (0, r.Y)(0, e, s);
          t.push((0, i.t)(n, 1, o));
        }
      }
    },
    9280: function (t, e, n) {
      n.d(e, {
        z: function () {
          return r;
        },
      });
      let i = (t, e) => (n) => e(t(n)),
        r = (...t) => t.reduce(i);
    },
    9049: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return i;
        },
      });
      let i = (t, e, n) => {
        let i = e - t;
        return 0 === i ? 1 : (n - t) / i;
      };
    },
    698: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var i = n(561);
      let r = (t) => !!(t && 'object' == typeof t && t.mix && t.toValue),
        s = (t) => ((0, i.C)(t) ? t[t.length - 1] || 0 : t);
    },
    2685: function (t, e, n) {
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(406);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, i.y4)(this.subscriptions, t),
            () => (0, i.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, n) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let r = 0; r < i; r++) {
                let i = this.subscriptions[r];
                i && i(t, e, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    3303: function (t, e, n) {
      n.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return i;
        },
      });
      let i = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    2435: function (t, e, n) {
      n.d(e, {
        h: function () {
          return r;
        },
      });
      var i = n(2265);
      function r(t) {
        let e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    5526: function (t, e, n) {
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(2265);
      let r = n(1702).j ? i.useLayoutEffect : i.useEffect;
    },
    2181: function (t, e, n) {
      n.d(e, {
        R: function () {
          return i;
        },
      });
      function i(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    3299: function (t, e, n) {
      n.d(e, {
        BX: function () {
          return h;
        },
      });
      var i = n(2685),
        r = n(2181),
        s = n(3791),
        o = n(4205);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = '11.1.7'),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let n = s.X.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.canTrackVelocity = a(this.current)),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t), (this.updatedAt = s.X.now());
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on('change', t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i.L());
          let n = this.events[t].add(e);
          return 'change' === t
            ? () => {
                n(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, n) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e,
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    4184: function (t, e, n) {
      n.d(e, {
        $: function () {
          return r;
        },
      });
      var i = n(6352);
      let r = {
        test: (0, n(204).i)('#'),
        parse: function (t) {
          let e = '',
            n = '',
            i = '',
            r = '';
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (n = t.substring(3, 5)),
                (i = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (n = t.substring(2, 3)),
                (i = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (n += n),
                (i += i),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: i.m.transform,
      };
    },
    9808: function (t, e, n) {
      n.d(e, {
        J: function () {
          return a;
        },
      });
      var i = n(5218),
        r = n(2724),
        s = n(3922),
        o = n(204);
      let a = {
        test: (0, o.i)('hsl', 'hue'),
        parse: (0, o.d)('hue', 'saturation', 'lightness'),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: o = 1 }) =>
          'hsla(' +
          Math.round(t) +
          ', ' +
          r.aQ.transform((0, s.Nw)(e)) +
          ', ' +
          r.aQ.transform((0, s.Nw)(n)) +
          ', ' +
          (0, s.Nw)(i.Fq.transform(o)) +
          ')',
      };
    },
    2809: function (t, e, n) {
      n.d(e, {
        $: function () {
          return a;
        },
      });
      var i = n(3922),
        r = n(4184),
        s = n(9808),
        o = n(6352);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
              ? s.J.parse(t)
              : r.$.parse(t),
        transform: (t) =>
          (0, i.HD)(t)
            ? t
            : t.hasOwnProperty('red')
              ? o.m.transform(t)
              : s.J.transform(t),
      };
    },
    6352: function (t, e, n) {
      n.d(e, {
        m: function () {
          return u;
        },
      });
      var i = n(2476),
        r = n(5218),
        s = n(3922),
        o = n(204);
      let a = (t) => (0, i.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)('rgb', 'red'),
          parse: (0, o.d)('red', 'green', 'blue'),
          transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) =>
            'rgba(' +
            l.transform(t) +
            ', ' +
            l.transform(e) +
            ', ' +
            l.transform(n) +
            ', ' +
            (0, s.Nw)(r.Fq.transform(i)) +
            ')',
        };
    },
    204: function (t, e, n) {
      n.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var i = n(3922);
      let r = (t, e) => (n) =>
          !!(
            ((0, i.HD)(n) && i.mj.test(n) && n.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        s = (t, e, n) => (r) => {
          if (!(0, i.HD)(r)) return r;
          let [s, o, a, l] = r.match(i.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    2915: function (t, e, n) {
      n.d(e, {
        h: function () {
          return l;
        },
      });
      var i = n(2263),
        r = n(3922);
      let s = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
      function o(t) {
        let [e, n] = t.slice(0, -1).split('(');
        if ('drop-shadow' === e) return t;
        let [i] = n.match(r.KP) || [];
        if (!i) return t;
        let o = n.replace(i, ''),
          a = s.has(e) ? 1 : 0;
        return i !== n && (a *= 100), e + '(' + a + o + ')';
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...i.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(' ') : t;
          },
        };
    },
    2263: function (t, e, n) {
      n.d(e, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var i = n(2809),
        r = n(3922);
      let s = 'number',
        o = 'color',
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          n = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              a,
              (t) => (
                i.$.test(t)
                  ? (r.color.push(u), l.push(o), n.push(i.$.parse(t)))
                  : t.startsWith('var(')
                    ? (r.var.push(u), l.push('var'), n.push(t))
                    : (r.number.push(u), l.push(s), n.push(parseFloat(t))),
                ++u,
                '${}'
              ),
            )
            .split('${}');
        return { values: n, split: h, indexes: r, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: n } = l(t),
          a = e.length;
        return (t) => {
          let l = '';
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = n[u];
              e === s
                ? (l += (0, r.Nw)(t[u]))
                : e === o
                  ? (l += i.$.transform(t[u]))
                  : (l += t[u]);
            }
          return l;
        };
      }
      let c = (t) => ('number' == typeof t ? 0 : t),
        d = {
          test: function (t) {
            var e, n;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (n = t.match(r.dA)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(c));
          },
        };
    },
    5218: function (t, e, n) {
      n.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var i = n(2476);
      let r = {
          test: (t) => 'number' == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, i.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    2724: function (t, e, n) {
      n.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var i = n(3922);
      let r = (t) => ({
          test: (e) =>
            (0, i.HD)(e) && e.endsWith(t) && 1 === e.split(' ').length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r('deg'),
        o = r('%'),
        a = r('px'),
        l = r('vh'),
        u = r('vw'),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    3922: function (t, e, n) {
      n.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return i;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let i = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return 'string' == typeof t;
      }
    },
    2212: function (t, e, n) {
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(2702);
      function r(t) {
        return !!((0, i.i)(t) && t.add);
      }
    },
    2702: function (t, e, n) {
      n.d(e, {
        i: function () {
          return i;
        },
      });
      let i = (t) => !!(t && t.getVelocity);
    },
  },
]);
