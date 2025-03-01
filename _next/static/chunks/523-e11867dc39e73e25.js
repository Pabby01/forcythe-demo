'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [523],
  {
    1128: function (e, t, i) {
      var n = i(7437),
        a = i(703),
        o = i(8792),
        r = i(1218),
        s = i(9735),
        c = i(2265);
      t.Z = (e) => {
        let {
          buttonText: t,
          buttonType: i,
          link: u,
          width: d,
          attributes: l,
          loading: h = !1,
          play: p,
          outline: g = !1,
          book: m = !1,
          dottedBorder: v = !0,
        } = e;
        return (
          (0, c.useEffect)(() => {
            !(async function () {
              m &&
                (await (0, s.o)())('ui', {
                  styles: { branding: { brandColor: '#1f3449' } },
                  hideEventTypeDetails: !1,
                  layout: 'month_view',
                });
            })();
          }, []),
          (0, n.jsxs)('div', {
            className: 'relative w-fit group',
            children: [
              u
                ? (0, n.jsx)(o.default, {
                    href: u || '',
                    children: (0, n.jsxs)('span', {
                      className: 'action-button custom-animate '
                        .concat(
                          d ? 'w-'.concat(d) : 'w-full',
                          ' py-[12px] px-5 flex gap-2 items-center justify-center rounded-full \n                     ',
                        )
                        .concat(
                          g
                            ? 'bg-[#030516] border-white border-[1px]'
                            : 'bg-white text-black',
                          ' text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md \n                     ',
                        ),
                      children: [
                        t,
                        p &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(a.default, {
                                className: 'group-hover:hidden',
                                src: '/images/play.svg',
                                width: 10,
                                height: 10,
                                alt: 'play',
                              }),
                              (0, n.jsx)(a.default, {
                                className: 'hidden group-hover:block',
                                src: '/images/play-white.svg',
                                width: 10,
                                height: 10,
                                alt: 'play',
                              }),
                            ],
                          }),
                      ],
                    }),
                  })
                : m
                  ? (0, n.jsxs)('button', {
                      'data-cal-namespace': '',
                      'data-cal-link': 'forcythe/discovery',
                      'data-cal-config': '{"layout":"month_view"}',
                      className: 'action-button custom-animate '
                        .concat(
                          d ? 'w-'.concat(d) : 'w-full',
                          ' py-[12px] px-5 flex gap-2 items-center justify-center rounded-full \n                     ',
                        )
                        .concat(
                          g
                            ? 'bg-[#030516] border-white border-[1px]'
                            : 'bg-white text-black',
                          ' text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md \n                     ',
                        ),
                      children: [
                        t,
                        p &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(a.default, {
                                className: 'group-hover:hidden',
                                src: '/images/play.svg',
                                width: 10,
                                height: 10,
                                alt: 'play',
                              }),
                              (0, n.jsx)(a.default, {
                                className: 'hidden group-hover:block',
                                src: '/images/play-white.svg',
                                width: 10,
                                height: 10,
                                alt: 'play',
                              }),
                            ],
                          }),
                      ],
                    })
                  : (0, n.jsx)('button', {
                      ...l,
                      type: i || 'button',
                      className: 'action-button custom-animate '
                        .concat(
                          d ? 'w-'.concat(d) : 'w-full',
                          ' py-[12px] px-5 flex gap-2 items-center justify-center rounded-full \n                     ',
                        )
                        .concat(
                          g
                            ? 'bg-[#030516] border-white border-[1px]'
                            : 'bg-white text-black',
                          ' text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md \n                     ',
                        ),
                      children: h
                        ? (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(r.Z, { size: 14, color: 'white' }),
                              ' ',
                              (0, n.jsx)('span', {
                                className: 'ml-2',
                                children: t,
                              }),
                            ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              t,
                              p &&
                                (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)(a.default, {
                                      className: 'group-hover:hidden',
                                      src: '/images/play.svg',
                                      width: 10,
                                      height: 10,
                                      alt: 'play',
                                    }),
                                    (0, n.jsx)(a.default, {
                                      className: 'hidden group-hover:block',
                                      src: '/images/play-white.svg',
                                      width: 10,
                                      height: 10,
                                      alt: 'play',
                                    }),
                                  ],
                                }),
                            ],
                          }),
                    }),
              v &&
                (0, n.jsx)('div', {
                  className:
                    'w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]',
                }),
            ],
          })
        );
      };
    },
    4411: function (e, t, i) {
      i.d(t, {
        DL: function () {
          return h;
        },
        I0: function () {
          return y;
        },
        Pp: function () {
          return r;
        },
        SX: function () {
          return u;
        },
        UY: function () {
          return s;
        },
        VO: function () {
          return d;
        },
        _u: function () {
          return b;
        },
        bM: function () {
          return g;
        },
        cz: function () {
          return v;
        },
        dk: function () {
          return a;
        },
        e3: function () {
          return l;
        },
        lp: function () {
          return k;
        },
        nb: function () {
          return f;
        },
        o6: function () {
          return G;
        },
        ot: function () {
          return w;
        },
        pt: function () {
          return c;
        },
        tg: function () {
          return n;
        },
        vZ: function () {
          return x;
        },
        z5: function () {
          return p;
        },
        zF: function () {
          return m;
        },
        zk: function () {
          return o;
        },
      });
      let n = [
          { title: 'About', link: '/about' },
          { title: 'Services', link: '/services' },
          { title: 'Portfolio', link: '/services#portfolio' },
          { title: 'Studio', link: '/studio' },
          { title: 'Foundation', link: '/foundation' },
        ],
        a = [
          { title: 'About', link: '/about' },
          { title: 'Services', link: '/services' },
          { title: 'Portfolio', link: '/services#portfolio' },
          { title: 'Studio', link: '/studio' },
          { title: 'Foundation', link: '/foundation' },
          { title: 'Careers', link: '/career' },
          { title: 'Blog', link: '/blog' },
        ],
        o = [
          { title: 'About', link: '/about' },
          { title: 'Services', link: '/services' },
          { title: 'Portfolio', link: '/services#portfolio' },
          { title: 'Studio', link: '/studio' },
          { title: 'Foundation', link: '/foundation' },
          { title: 'Careers', link: '/career' },
          { title: 'Blog', link: '/blog' },
        ],
        r = [
          {
            logo: 'starks.svg',
            name: 'Starks',
            companyName: 'Starks Associate',
            story:
              'Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.',
            author: 'John, Management',
            dp: 'john.svg',
          },
          {
            logo: 'ExecutivePros Logo.svg',
            name: '',
            companyName: 'ExecutivePros',
            story:
              'The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!',
            author: 'Testimony, Co-founder',
            dp: 'executive-pro-ceo.svg',
          },
          {
            logo: 'stacai.svg',
            name: '',
            companyName: 'Stac AI',
            story:
              'Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.',
            author: 'Edwin, Former CTO',
            dp: 'edwin.svg',
          },
          {
            logo: 'iwaria.svg',
            name: '',
            companyName: 'Iwaria',
            story:
              'The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.',
            author: 'Iwaria, Founder',
            dp: 'iwaria-founder.svg',
            width: 20,
          },
          {
            logo: 'Beaupreneur.svg',
            name: '',
            companyName: 'Beaupreneur',
            story:
              'I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.',
            author: 'Christiana, Founder',
            dp: 'christina.svg',
            width: 36,
          },
        ],
        s = [
          {
            img: '/images/facebook.svg',
            link: 'https://www.facebook.com/forcythe/',
          },
          {
            img: '/images/instagram.svg',
            link: 'https://www.instagram.com/forcythe',
          },
          { img: '/images/x.svg', link: 'https://twitter.com/forcythe_' },
          {
            img: '/images/linkedin.svg',
            link: 'https://www.linkedin.com/company/forcythe/',
          },
          {
            img: '/images/youtube.svg',
            link: 'https://www.youtube.com/@forcythe',
          },
          {
            img: '/images/Icon.svg',
            link: 'https://podcasters.spotify.com/pod/show/the-future-insight',
          },
        ],
        c = [
          {
            title: 'Experience',
            text: 'Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.',
          },
          {
            title: 'Quick Support',
            text: 'We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.',
          },
          {
            title: 'Cost Savings',
            text: 'Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.',
          },
        ],
        u = [
          {
            title: 'Leadership Development',
            text: 'Developing the leaders of tomorrow through workshops, seminars, and hands-on experiences that instil the essential skills of effective leadership.',
          },
          {
            title: 'Entrepreneurship Training',
            text: 'Equipping aspiring entrepreneurs with the knowledge and tools to build successful ventures, fostering innovation and business acumen.',
          },
          {
            title: 'Mentorship Program',
            text: 'Connecting participants with seasoned professionals for guidance, support, and inspiration, creating a robust network of mentors and mentees.',
          },
          {
            title: 'Networking Events',
            text: 'Hosting events that bring together diverse individuals to share ideas, collaborate, and form lasting professional relationships.',
          },
        ],
        d = [
          {
            title: 'Future-Minded',
            text: 'We are not just keeping pace with technology; we’re anticipating the trends of tomorrow. Our future-minded approach ensures that we’re always ahead of the curve, delivering innovative solutions that redefine industries and pave the way for a smarter, more connected world.',
            svgBackground: 'bg-[#60A6E799]',
            background: 'rgba(7, 22, 38, 1)',
          },
          {
            title: 'Orthogonal Thinking',
            text: 'Thinking outside the box is just the beginning. We challenge the status quo, approaching problems from unique angles to uncover breakthrough solutions. This creative mindset fuels our ability to see beyond the obvious and discover untapped opportunities.',
            svgBackground: 'bg-[#3A8C8799]',
            background: 'rgba(7, 38, 36, 1)',
          },
          {
            title: 'Resilience',
            text: 'The path to success is paved with challenges, but at Forcythe, resilience is part of our DNA. We embrace adversity, learning from setbacks and emerging stronger. Our tenacity ensures that no obstacle is insurmountable, and our clients’ visions become reality.',
            svgBackground: 'bg-[#66452599]',
            background: 'rgba(38, 22, 7, 1)',
          },
          {
            title: 'Commitment',
            text: 'Our commitment to excellence is unwavering. From the smallest task to the grandest vision, we dedicate ourselves fully to achieving outstanding results. This steadfast dedication is the cornerstone of our work, driving us to exceed expectations at every turn.',
            svgBackground: 'bg-[#711E5399]',
            background: 'rgba(38, 7, 27, 1)',
          },
          {
            title: 'Enthusiasm',
            text: 'Passion is the spark that ignites innovation. At Forcythe, our enthusiasm for what we do is infectious. We bring energy and excitement to every project, inspiring our team and clients alike. It’s this vibrant spirit that makes Forcythe a dynamic and inspiring place to work and grow.',
            svgBackground: 'bg-[#676B2899]',
            background: 'rgba(36, 38, 7, 1)',
          },
        ],
        l = [
          {
            title: 'Innovation',
            text: 'We foster a culture of creativity and exploration, encouraging bold ideas and breakthrough innovations.',
            svgBackground: 'bg-[#60A6E799]',
            background: 'rgba(7, 22, 38, 1)',
          },
          {
            title: 'Collaboration',
            text: 'We believe in the power of collaboration, leveraging diverse perspectives and expertise to create impactful ventures.',
            svgBackground: 'bg-[#3A8C8799]',
            background: 'rgba(7, 38, 36, 1)',
          },
          {
            title: 'Excellence',
            text: "We strive for excellence in everything we do, setting high standards and continuously pushing the boundaries of what's possible.",
            svgBackground: 'bg-[#66452599]',
            background: 'rgba(38, 22, 7, 1)',
          },
          {
            title: 'Integrity',
            text: 'We uphold the highest ethical standards, prioritizing honesty, transparency, and trust in all our interactions.',
            svgBackground: 'bg-[#711E5399]',
            background: 'rgba(38, 7, 27, 1)',
          },
          {
            title: 'Impact',
            text: 'We are committed to making a positive impact on society and the world, driving meaningful change through our ventures and initiatives.',
            svgBackground: 'bg-[#676B2899]',
            background: 'rgba(36, 38, 7, 1)',
          },
        ],
        h = [
          {
            title: 'Breakfast with Experts',
            text: 'Breakfast with Experts is a unique initiative that brings together young professionals and recent school leavers with industry leaders. This program provides an intimate setting for knowledge exchange, mentorship, and networking over breakfast. It’s an opportunity to gain insights from those who’ve paved the way and to connect with peers who are also at the start of their professional journeys.',
            background: 'rgba(7, 38, 36, 1)',
          },
          {
            title: 'FLEAP',
            text: 'The Forcythe Leadership and Entrepreneurship Acceleration Program (FLEAP) is tailored for university students in their second year and above. FLEAP offers a comprehensive curriculum that includes Leadership Development, Entrepreneurship Training, Mentorship Programs, and Networking Events. Our goal is to equip participants with the skills and connections needed to become the next generation of innovators and leaders.',
            background: 'rgba(7, 22, 38, 1)',
          },
        ],
        p = [
          { name: 'Idea' },
          { name: 'Design' },
          { name: 'Develop' },
          { name: 'Launch' },
        ],
        g = [
          { name: 'Idea', active: !0 },
          { name: 'Validate' },
          { name: 'Develop' },
          { name: 'Launch' },
        ],
        m = [
          {
            title: 'Client Engagement',
            text: 'At the heart of what we do, is our unwavering dedication to you. We delve deep into your aspirations and challenges, forging a partnership that’s built on understanding and tailored to your unique needs.',
            active: !0,
          },
          {
            title: 'Project Development',
            text: 'With agility and innovation at our core, we leap into action, transforming your vision into reality. Our process is a blend of cutting-edge methods and creative execution, all designed to exceed your expectations.',
          },
          {
            title: 'Continued Support',
            text: 'Our commitment to your success is relentless. We stand by your side, ensuring a seamless experience with our services, so you can thrive without pause or interruption until you hit you business goals. Your success is our success.',
          },
        ],
        v = [
          {
            name: 'Ephraim Dafiaghor',
            role: 'CEO/Chief Product Officer',
            picture: 'ephraim.svg',
            about: [
              'An MBA graduate and seasoned entrepreneur, Ephraim excels in steering companies to new heights with his expertise in product management and marketing. His strategic vision and 8+ years of experience have been pivotal in transforming business ideas into successful realities.',
            ],
          },
          {
            name: 'Francis Babalola',
            role: 'Chief Technology Officer',
            picture: 'francis.svg',
            about: [
              'Francis Babalola is a Software Engineer with over 6 years of experience. He specializes in solving the world’s problems with technology and that’s where his heart lies.',
            ],
          },
          {
            name: 'Room at the Top',
            role: 'Management',
            picture: 'team-member-3.svg',
            about: [
              'Reserved for visionaries, this seat awaits a future leader who’s as passionate about innovation as we are. At Forcythe, we believe in nurturing talent from within, offering a path to management where your ideas can shape the future of our company.',
            ],
          },
          {
            name: 'Room at the Top',
            role: 'Management',
            picture: 'team-member-4.svg',
            about: [
              'This spot is dedicated to the next game-changer in our team. If you have the drive and the creativity to lead, Forcythe provides the growth environment to ascend into management, where your contributions will make a lasting impact.',
            ],
          },
        ],
        f = [
          { icon: '⚙️', text: 'Web Development' },
          { icon: '⚒️', text: 'UI/UX Design' },
          { icon: '\uD83D\uDCF1', text: 'Mobile Development' },
          { icon: '\uD83C\uDFAB', text: 'Marketing' },
          { icon: '\uD83D\uDCDC', text: 'Pitch Decks' },
          { icon: '\uD83D\uDDBC️', text: 'Landing Pages' },
          { icon: '\uD83D\uDDA5️', text: 'Website Design' },
          { icon: '\uD83C\uDFA8', text: 'Branding' },
          { icon: '\uD83D\uDCBB', text: 'Enterprise Solution' },
        ],
        b = [
          'stac.svg',
          'activity.svg',
          'africaFund.svg',
          'starks.svg',
          'exec-pro.svg',
          'phone.svg',
        ],
        y = [
          '_DSC0121.JPG',
          '_DSC0432.JPG',
          '_DSC0434.JPG',
          '_DSC0448.JPG',
          '_DSC0464.JPG',
          '_DSC0501.JPG',
          '_DSC0552.JPG',
          '_DSC0561.JPG',
          '_DSC0592.JPG',
          '_DSC0594.JPG',
          '_DSC0603.JPG',
          '_DSC0626.JPG',
          '_DSC0627.JPG',
          '_DSC0629.JPG',
          '_DSC0632.JPG',
          '_DSC0635.JPG',
          '_DSC0638.JPG',
          '_DSC0641.JPG',
          '_DSC0642.JPG',
          '_DSC0644.JPG',
          '_DSC0645.JPG',
          '_DSC0647.JPG',
          '_DSC0650.JPG',
          '_DSC0651.JPG',
          '20190220_124348.jpg',
          '20190220_125927.jpg',
          '20190220_130000.jpg',
          '20190220_132439.jpg',
          '20190220_132441.jpg',
          '20190220_132443.jpg',
          'BAD_8548.jpg',
          'CRQD2710.jpg',
          'DSC_1540.JPG',
          'DSC_1548.JPG',
          'DSC_2233.JPG',
          'DSC_2250.JPG',
          'DSC_2365.JPG',
          'DSC_2444.JPG',
          'DSC_2484.JPG',
          'from Augustus.jpeg',
          'IMG_0030.JPG',
          'IMG_0041.JPG',
          'IMG_0058.JPG',
          'IMG_0074.JPG',
          'IMG_0085.JPG',
          'IMG_0086.JPG',
          'IMG_0092.JPG',
          'IMG_0093.JPG',
          'IMG_0098.JPG',
          'IMG_0099.JPG',
          'IMG_0101.JPG',
          'IMG_0105.JPG',
          'IMG_0106.JPG',
          'IMG_0107.JPG',
          'IMG_0108.JPG',
          'IMG_0111.JPG',
          'IMG_0112.JPG',
          'IMG_0126.JPG',
          'IMG_0127.JPG',
          'IMG_0138.JPG',
          'IMG_0149.JPG',
          'IMG_0152.JPG',
          'IMG_0155.JPG',
          'IMG_0173.JPG',
          'IMG_0175.JPG',
          'IMG_0176.JPG',
          'IMG_0185.JPG',
          'IMG_0189.JPG',
          'IMG_0190.JPG',
          'IMG_0194.JPG',
          'IMG_0198.JPG',
          'IMG_0207.JPG',
          'IMG_0607.JPG',
          'IMG_0614.JPG',
          'IMG_0617.JPG',
          'IMG_1771.JPG',
          'IMG_8457.JPG',
          'IMG_8458.JPG',
          'IMG_8459.JPG',
          'IMG_8460.JPG',
          'IMG_8461.JPG',
          'IMG_8538.JPG',
          'IMG_8541.JPG',
          'LMIZ1147.jpg',
          'MGIE6883.jpg',
          'PXL_20230210_151540134.jpg',
        ],
        w = [
          { title: 'Clients', stat: 50 },
          { title: 'Projects', stat: 120 },
          { title: 'Team Leads', stat: 10 },
          { title: 'Glorious Years', stat: 10 },
        ],
        k = [
          { title: 'People', stat: 3e3 },
          { title: 'Events', stat: 120 },
          { title: 'Trainings', stat: 10 },
          { title: 'Mentors', stat: 10 },
        ],
        x = [
          {
            id: 1,
            attributes: {
              projectName: 'UBA REDTV',
              projectDesc:
                'REDTV, a dynamic lifestyle channel by the United Bank for Africa (UBA), brings Africa to the global stage with vibrant content spanning entertainment, fashion, and culture.We partnered with REDTV to drive the digital marketing campaign for "13 Kinds of Women: Stories That Connect Us", a captivating drama series celebrating diversity, relatability, and the transformative power of storytelling. Our efforts contributed to amplifying its reach and engagement across digital platforms.',
              projectLink: 'https://www.youtube.com/@itsredtv',
              projectTags: { data: ['Digital Marketing'] },
              columnSpan: 2,
              createdAt: '2025-01-02T00:00:00.000Z',
              updatedAt: '2025-01-02T00:00:00.000Z',
              publishedAt: '2025-01-02T00:00:00.000Z',
              projectCover: {
                data: {
                  attributes: {
                    url: 'https://res.cloudinary.com/dhahjsrtn/image/upload/v1735851887/forcythe/images/Project%20Images/UBA_REDTV_l3vewa.png',
                  },
                },
              },
            },
          },
          {
            id: 2,
            attributes: {
              projectName: 'Ewe & Willford',
              projectDesc:
                'Ewe & Wilford is a premier investment and advisory company dedicated to empowering businesses with tailored solutions and strategic insights.We had the privilege of designing their complete branding, crafting a user-centric UI/UX design, and developing their modern, professional website, ensuring their digital presence reflects their leadership in the business advisory space.',
              projectLink: 'https://eweandwilford.com/',
              projectTags: {
                data: ['Branding', 'UI/UX', 'Website Development'],
              },
              columnSpan: 2,
              createdAt: '2025-01-02T00:00:00.000Z',
              updatedAt: '2025-01-02T00:00:00.000Z',
              publishedAt: '2025-01-02T00:00:00.000Z',
              projectCover: {
                data: {
                  attributes: {
                    url: 'https://res.cloudinary.com/dhahjsrtn/image/upload/v1735851887/forcythe/images/Project%20Images/Ewe_-_Wilford_zm6z3u.png',
                  },
                },
              },
            },
          },
          {
            id: 3,
            attributes: {
              projectName: 'HiPower',
              projectDesc:
                'HiPower is a thriving network of accomplished leaders dedicated to amplifying one another’s growth and transitioning from success to significance.We collaborated with HiPower to upgrade their website, ensuring a modern and seamless user experience that reflects their values. Additionally, we implemented comprehensive business automation solutions to streamline their operations and enhance efficiency, allowing them to focus on empowering their community of visionary leaders.',
              projectLink: 'https://hipower.org/',
              projectTags: { data: ['Website Upgrade', 'Business Automation'] },
              columnSpan: 2,
              createdAt: '2025-01-02T00:00:00.000Z',
              updatedAt: '2025-01-02T00:00:00.000Z',
              publishedAt: '2025-01-02T00:00:00.000Z',
              projectCover: {
                data: {
                  attributes: {
                    url: 'https://res.cloudinary.com/dhahjsrtn/image/upload/v1735851054/forcythe/images/Project%20Images/Hipower_dahpth.png',
                  },
                },
              },
            },
          },
          {
            id: 4,
            attributes: {
              projectName: 'Stac AI',
              projectDesc:
                'Unlocking the future of Financial Trust Infrastructure in Africa. Empower your business with AI-driven risk assessment, and let financial institutions confidently underwrite products with the most comprehensive suite of tools available. Driven by powerful AI and the most extensive data landscape, we ensure businesses and individuals amplify their digital worth.',
              projectLink: 'https://stac.ai/',
              projectTags: {
                data: ['Branding', 'UI/UX', 'Website Development'],
              },
              columnSpan: 2,
              createdAt: '2023-01-01T00:00:00.000Z',
              updatedAt: '2023-01-02T00:00:00.000Z',
              publishedAt: '2023-01-03T00:00:00.000Z',
              projectCover: {
                data: {
                  attributes: {
                    url: 'https://res.cloudinary.com/dhahjsrtn/image/upload/v1714488206/Stac_AI_58126da14d.png',
                  },
                },
              },
            },
          },
          {
            id: 5,
            attributes: {
              projectName: 'Vanboss',
              projectDesc:
                'Vanboss empowers you to take charge of your shipments with ease. Our app allows you to request deliveries anytime, select the perfect service provider, and track your shipment every step of the way. Experience seamless, reliable logistics tailored to your schedule and preferences. With Vanboss, shipping has never been more convenient or stress-free.',
              projectLink: 'https://vanboss-web.vercel.app/',
              projectTags: {
                data: [
                  'Branding',
                  'UI/UX',
                  'Mobile App',
                  'Web Development',
                  'Landing Page',
                ],
              },
              columnSpan: 2,
              createdAt: '2023-02-01T00:00:00.000Z',
              updatedAt: '2023-02-02T00:00:00.000Z',
              publishedAt: '2023-02-03T00:00:00.000Z',
              projectCover: {
                data: {
                  attributes: {
                    url: 'https://res.cloudinary.com/dhahjsrtn/image/upload/v1714488423/Vanboss_c321e28e6c.png',
                  },
                },
              },
            },
          },
          {
            id: 6,
            attributes: {
              projectName: 'ExecutivePros',
              projectDesc:
                'ExecutivePros is on a mission to help ambitious founders be efficient at business and spend more time with their family without the risks! With pre-vetted Assistants handling key operations of your business, you can breathe and make that difference in your business and life.',
              projectLink: 'https://executivepros.co/',
              projectTags: {
                data: ['UI/UX', 'Landing Page', 'Website Development'],
              },
              columnSpan: 2,
              createdAt: '2023-03-01T00:00:00.000Z',
              updatedAt: '2023-03-02T00:00:00.000Z',
              publishedAt: '2023-03-03T00:00:00.000Z',
              projectCover: {
                data: {
                  attributes: {
                    url: 'https://res.cloudinary.com/dhahjsrtn/image/upload/v1714491478/Executive_Pros_ead760da1e.png',
                  },
                },
              },
            },
          },
          {
            id: 7,
            attributes: {
              projectName: 'Starks Associate',
              projectDesc:
                'Starks is a liquidity and treasury management company leveraging technology to empower businesses across emerging markets through liquidity provision, multi-currency settlements, and borderless banking services. With Starks, the possibilities are endless for businesses across Africa and beyond, who want to trade on a global scale.',
              projectLink: 'https://starksassociate.com/',
              projectTags: {
                data: ['UI/UX', 'Landing Page', 'Website Development'],
              },
              columnSpan: 2,
              createdAt: '2023-04-01T00:00:00.000Z',
              updatedAt: '2023-04-02T00:00:00.000Z',
              publishedAt: '2023-04-03T00:00:00.000Z',
              projectCover: {
                data: {
                  attributes: {
                    url: 'https://res.cloudinary.com/dhahjsrtn/image/upload/v1714491477/Starks_Associate_2e88ae7f32.png',
                  },
                },
              },
            },
          },
          {
            id: 8,
            attributes: {
              projectName: 'Rendezvous',
              projectDesc:
                'Rendezvous is the cutting-edge dating app designed for singles across the US. Its smart algorithms and intuitive design make finding meaningful connections effortless. Users enjoy a safe, diverse, and inclusive platform that prioritizes their experience. With Rendezvous, genuine relationships are just a tap away.',
              projectLink: 'https://forcythe.com/studio',
              projectTags: { data: ['UI/UX', 'Landing Page', 'Mobile App'] },
              columnSpan: 2,
              createdAt: '2023-04-01T00:00:00.000Z',
              updatedAt: '2023-04-02T00:00:00.000Z',
              publishedAt: '2023-04-03T00:00:00.000Z',
              projectCover: {
                data: {
                  attributes: {
                    url: 'https://res.cloudinary.com/dhahjsrtn/image/upload/v1714490014/Rendezvous_0ccf4cce9b.png',
                  },
                },
              },
            },
          },
          {
            id: 9,
            attributes: {
              projectName: 'African Funding Channel',
              projectDesc:
                'African Funding Channel is dedicated to ensuring African businesses have unrestricted access to global resources, helping to scale the continent and reposition it as a leading global force. This mission drives our efforts and fuels our journey. AFC aims to bridge the funding gap in Africa through an innovative fund arrangement approach, connecting those in need of capital with surplus resources to create impactful solutions.',
              projectLink: 'https://forcythe.com/studio',
              projectTags: { data: ['UI/UX', 'Landing Page', 'Branding'] },
              columnSpan: 2,
              createdAt: '2023-04-01T00:00:00.000Z',
              updatedAt: '2023-04-02T00:00:00.000Z',
              publishedAt: '2023-04-03T00:00:00.000Z',
              projectCover: {
                data: {
                  attributes: {
                    url: 'https://res.cloudinary.com/dhahjsrtn/image/upload/v1713839975/ffund_bdc7778dee.png',
                  },
                },
              },
            },
          },
        ],
        G = [
          {
            id: 1,
            attributes: {
              projectName: 'Perime',
              projectDesc:
                'Transforming the way people discover, attend, and enjoy experiences around them. Perime is a social hospitality platform that seamlessly connect users with a diverse array of experiences based on their interest. Perime enhances live experiences through intuitive event discovery, places discovery, and rich social networking features connecting users to the hiddens gems of their city.',
              projectLink: 'https://perime.co/',
              projectTags: {
                data: [
                  'Experience Discovery',
                  'Travel',
                  'Social Calendar',
                  'Events',
                  'Locations',
                ],
              },
              columnSpan: 3,
              createdAt: '2023-01-01T00:00:00.000Z',
              updatedAt: '2023-01-02T00:00:00.000Z',
              publishedAt: '2023-01-03T00:00:00.000Z',
              sectorText: 'Tourism, Hospitality',
              venturesTags: [
                'Experience Discovery',
                'Travel',
                'Social Calendar',
                'Events',
                'Locations',
              ],
              usecaseText:
                'Social Discovery, Travel, Event Booking and Management, Location Booking and Management, Ticketing, Social Networking',
              projectCover: {
                data: {
                  attributes: {
                    url: 'https://res.cloudinary.com/dhahjsrtn/image/upload/v1714493852/Perime_e80ad29fca.png',
                  },
                },
              },
            },
          },
        ];
    },
    6135: function (e, t, i) {
      i.d(t, {
        cn: function () {
          return o;
        },
      });
      var n = i(3167),
        a = i(1367);
      function o() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return (0, a.m6)((0, n.W)(t));
      }
    },
  },
]);
