(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [160],
  {
    743: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 8667));
    },
    8667: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(7437),
        s = n(1128),
        l = n(44),
        r = n(8866),
        i = n(703);
      n(2265);
      var o = n(9549);
      t.default = () =>
        (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(r.default, {}),
            (0, a.jsx)('main', {
              className: 'w-full mt-[6.3rem] md:mt-[6.5rem] pt-5',
              children: (0, a.jsxs)('div', {
                className: 'px-5 md:px-10 lg:px-44 xl:px-[17rem]',
                children: [
                  (0, a.jsx)(i.default, {
                    className: 'w-[350px] mx-auto mb-5',
                    src: '/images/not-found.svg',
                    alt: 'not found',
                    width: 200,
                    height: 200,
                  }),
                  (0, a.jsx)('div', {
                    className: 'min-h-[180px] max-w-2xl mx-auto',
                    children: (0, a.jsx)(o.Z, {
                      typingDelay: 100,
                      children: (0, a.jsxs)('h1', {
                        className:
                          'text-[2.8rem] font-normal leading-[1.2] mb-7 text-center',
                        children: [
                          (0, a.jsxs)('span', {
                            className: 'text-[3.5rem]',
                            children: [
                              (0, a.jsx)('span', {
                                className: 'text-accent',
                                children: 'You',
                              }),
                              ' are a',
                              (0, a.jsx)('span', {
                                className: 'text-accent',
                                children: ' genius! ',
                              }),
                            ],
                          }),
                          ' ',
                          (0, a.jsx)('br', {}),
                          'Looks like you’ve',
                          (0, a.jsx)('span', {
                            className: 'text-accent',
                            children: ' discovered ',
                          }),
                          'an ',
                          (0, a.jsx)('span', {
                            className: 'text-accent',
                            children: 'uncharted',
                          }),
                          ' territory.',
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsx)(l.F, {
                    words:
                      'Don’t worry, we’ll navigate you back to familiar waters. Click below to return to the homepage and continue exploring Forcythe’s digital solutions.',
                    delay: 4.5,
                    className: 'mb-8 max-w-[32rem] mx-auto text-center mt-5',
                  }),
                  (0, a.jsx)('div', {
                    className: 'w-fit mx-auto mb-5',
                    children: (0, a.jsx)(s.Z, {
                      buttonText: 'Go Home',
                      width: 'w-fit',
                      play: !0,
                      book: !0,
                      link: '/',
                      dottedBorder: !1,
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
    },
    8395: function (e, t, n) {
      'use strict';
      n.d(t, {
        C: function () {
          return i;
        },
      });
      var a = n(7437),
        s = n(2265),
        l = n(1715),
        r = n(6135);
      function i(e) {
        let {
            children: t,
            containerClassName: n,
            className: i,
            as: o = 'button',
            duration: c = 1,
            clockwise: d = !0,
            ...u
          } = e,
          [m, x] = (0, s.useState)(!1),
          [f, h] = (0, s.useState)('TOP'),
          p = (e) => {
            let t = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'],
              n = t.indexOf(e),
              a = d ? (n - 1 + t.length) % t.length : (n + 1) % t.length;
            return t[a];
          },
          g = {
            TOP: 'radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
            LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
            BOTTOM:
              'radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
            RIGHT:
              'radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
          };
        return (
          (0, s.useEffect)(() => {
            if (!m) {
              let e = setInterval(() => {
                h((e) => p(e));
              }, 1e3 * c);
              return () => clearInterval(e);
            }
          }, [m]),
          (0, a.jsxs)(o, {
            onMouseEnter: (e) => {
              x(!0);
            },
            onMouseLeave: () => x(!1),
            className: (0, r.cn)(
              'relative flex rounded-full border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit',
              n,
            ),
            ...u,
            children: [
              (0, a.jsx)('div', {
                className: (0, r.cn)(
                  'w-auto text-white z-10 bg-transparent rounded-[inherit]',
                  i,
                ),
                children: t,
              }),
              (0, a.jsx)(l.E.div, {
                className: (0, r.cn)(
                  'flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]',
                ),
                style: {
                  filter: 'blur(2px)',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                },
                initial: { background: g[f] },
                animate: {
                  background: m
                    ? [
                        g[f],
                        'radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)',
                      ]
                    : g[f],
                },
                transition: { ease: 'linear', duration: null != c ? c : 1 },
              }),
              (0, a.jsx)('div', {
                className:
                  'bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]',
              }),
            ],
          })
        );
      }
    },
    44: function (e, t, n) {
      'use strict';
      n.d(t, {
        F: function () {
          return d;
        },
      });
      var a = n(7437),
        s = n(2265),
        l = n(3577),
        r = n(9159),
        i = n(6990),
        o = n(1715),
        c = n(6135);
      let d = (e) => {
        let {
            words: t,
            className: n,
            innerClassName: d,
            delay: u = 0,
            wordStyles: m = [],
          } = e,
          [x, f] = (0, l.H)(),
          [h, p] = (0, s.useState)(!1),
          g = (0, s.useRef)(null),
          b = (0, r.Y)(g);
        (0, s.useEffect)(() => {
          b &&
            !h &&
            'function' == typeof f &&
            (u > 0
              ? setTimeout(() => {
                  j();
                }, 1e3 * u)
              : j());
        }, [b, h, f, u]);
        let j = () => {
            f('span', { opacity: 1 }, { duration: 2, delay: (0, i.E)(0.2) }),
              p(!0);
          },
          v = t.split(' ');
        return (0, a.jsx)('div', {
          className: (0, c.cn)('', n),
          ref: g,
          children: (0, a.jsx)('div', {
            className: '',
            children: (0, a.jsx)('p', {
              className:
                d || 'text-darkGrey text-base md:text-lg mb-8 leading-7',
              children: (0, a.jsx)(o.E.div, {
                ref: x,
                children: v.map((e, t) => {
                  let n = m.find((t) => t.word === e),
                    s = n ? n.classes : '';
                  return (0, a.jsxs)(
                    o.E.span,
                    { className: 'opacity-0 '.concat(s), children: [e, ' '] },
                    e + t,
                  );
                }),
              }),
            }),
          }),
        });
      };
    },
    8866: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n(7437),
        s = n(1128),
        l = n(703),
        r = n(4411),
        i = n(8792),
        o = n(7907),
        c = n(3552),
        d = n(7495),
        u = n(2265),
        m = n(8395),
        x = (e) => {
          let { toggleMenu: t, refObject: n } = e,
            s = (0, o.usePathname)();
          return (0, a.jsx)(m.C, {
            as: 'div',
            containerClassName:
              'z-[999999999] bg-primaryBackground w-60 rounded-[2rem] fixed md:hidden right-5 top-28',
            className: 'w-full',
            children: (0, a.jsx)('div', {
              ref: n,
              style: {
                backgroundColor: 'rgba(3, 5, 22, 1)',
                background:
                  'linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgba(7, 22, 38, 1) 85%)',
              },
              className: 'w-full p-5 py-8 rounded-[2rem]',
              children: (0, a.jsx)('ul', {
                className: 'flex flex-col',
                children: r.zk.map((e, n) =>
                  (0, a.jsx)(
                    'li',
                    {
                      className: 'w-full py-2.5',
                      children: (0, a.jsx)(i.default, {
                        onClick: t,
                        className: 'w-full text-base py-3',
                        href:
                          'Portfolio' === e.title && '/services' === s
                            ? ''
                            : e.link,
                        children: (0, a.jsx)('span', {
                          onClick: () => {
                            'Portfolio' === e.title &&
                              '/services' === s &&
                              (function () {
                                let e = document.getElementById('portfolio');
                                e &&
                                  window.scrollTo({
                                    top: e.offsetTop,
                                    behavior: 'smooth',
                                  });
                              })();
                          },
                          children: e.title,
                        }),
                      }),
                    },
                    'menu ' + n,
                  ),
                ),
              }),
            }),
          });
        },
        f = () => {
          let e = (0, o.usePathname)(),
            t = (0, u.useRef)(null),
            n = (0, u.useRef)(null),
            [m, { toggle: f }] = (0, c.Z)(!1);
          return (
            (0, d.Z)(() => {
              m && f();
            }, [t, n]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)('div', {
                  className:
                    'section-padding navbar w-full fixed top-0 left-0 py-[1.8rem] flex justify-between gap-10 items-center z-30 backdrop-blur-md',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'flex items-center gap-20',
                      children: [
                        (0, a.jsx)('a', {
                          href: '/',
                          children: (0, a.jsx)(l.default, {
                            className: 'w-28 sm:w-32 md:w-auto',
                            src: '/images/forcythe logo.svg',
                            alt: 'Forcythe logo',
                            width: 150,
                            height: 10,
                            priority: !0,
                          }),
                        }),
                        (0, a.jsx)('div', {
                          className:
                            'hidden md:flex items-center gap-4 text-base',
                          children: r.tg.map((t, n) =>
                            (0, a.jsx)(
                              i.default,
                              {
                                href:
                                  'Portfolio' === t.title && '/services' === e
                                    ? ''
                                    : t.link,
                                children: (0, a.jsx)('span', {
                                  onClick: () => {
                                    'Portfolio' === t.title &&
                                      '/services' === e &&
                                      (function () {
                                        let e =
                                          document.getElementById('portfolio');
                                        e &&
                                          window.scrollTo({
                                            top: e.offsetTop,
                                            behavior: 'smooth',
                                          });
                                      })();
                                  },
                                  className: ''.concat(
                                    e === t.link ? 'text-accent' : '',
                                  ),
                                  children: t.title,
                                }),
                              },
                              n,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, a.jsx)('div', {
                      className: 'hidden md:block',
                      children: (0, a.jsx)(s.Z, {
                        buttonText: 'Book a Call',
                        width: 'w-fit',
                        book: !0,
                      }),
                    }),
                    (0, a.jsx)('div', {
                      ref: n,
                      onClick: () => f(),
                      className:
                        'menuBtn bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer',
                      children: (0, a.jsx)(l.default, {
                        src: '/images/menu.svg',
                        alt: 'menu',
                        width: 18,
                        height: 18,
                      }),
                    }),
                    (0, a.jsx)('script', {
                      dangerouslySetInnerHTML: {
                        __html:
                          "\n            window.addEventListener('scroll', function() {\n              const navbar = document.querySelector('.navbar');\n              if (window.scrollY >= 5) {\n                 navbar.classList.add('backdrop-blur-md');\n              } else {\n                navbar.classList.remove('backdrop-blur-md');\n              }\n            });\n          ",
                      },
                    }),
                  ],
                }),
                m && (0, a.jsx)(x, { toggleMenu: f, refObject: t }),
              ],
            })
          );
        };
    },
  },
  function (e) {
    e.O(0, [406, 150, 949, 411, 523, 971, 69, 744], function () {
      return e((e.s = 743));
    }),
      (_N_E = e.O());
  },
]);
