module.exports = {
  ga: 'UA-118979937-1',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Wujiquan',
      description: 'Traditional Chinese Martial Arts Wujiquan',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '无极拳',
      description: '传统武术无极拳',
    },
    '/sk/': {
      lang: 'sk',
      title: 'Wujiquan',
      description: 'Tradičné čínske bojové umenie Wujiquan',
    },
  },
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'icon', href: '/wujiquan-16x16.png' }],
  ],
  serviceWorker: true,
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-html5-embed'), {
        html5embed: {
          useImageSyntax: true,
          useLinkSyntax: false
        }
      })
    }
  },
  // theme: 'vue',
  themeConfig: {
    repo: '',
    editLinks: true,
    sidebarDepth: 2,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Articles',
            link: '/articles/'
          },
          {
            text: 'Resources',
            items: [
              { text: 'Single posture cyclic palm (12 Sets)', link: '/resources/wujiquan-12-sets-single-posture-cyclic-palm' },
              { text: '8 Pieces of Brocade', link: '/resources/wujiquan-8-pieces-of-brocade' },
              { text: '6 Healing Sounds', link: '/resources/wujiquan-6-healing-sounds' },
              { text: '5 Animals Qigong', link: '/resources/wujiquan-5-animals-qigong' },
              { text: 'Immortal Palm', link: '/resources/wujiquan-immortal-palm' },
            ],
          },
          {
            text: 'Events',
            items: [
              { text: 'Brezno Workshop (Sep 2019)', link: '/events/2019_sep_workshop_brezno' },
              { text: 'Past Events',
                items: [
                  { text: 'Wujiquan Fan Workshop (Dec 2018)', link: '/events/2018_wujiquan_fan_workshop' },
                  { text: 'Special Classes with Master Yu (October 2018)', link: '/events/2018_oct_special_classes_with_master_yu' },
                  { text: 'Special Summer Programme - 2018', link: '/events/2018_special_summer_programmes' },
                ],
              },
            ],
          },
          {
            text: 'Beijing',
            link: '/beijing/'
          },
          {
            text: 'About Us',
            items: [
              { text: 'About Wujiquan', link: '/about/about_wujiquan' },
              { text: 'Marian Lassak', link: '/about/marian_lassak' },
            ],
          },
        ],
        sidebar: {
          '/articles/': genSidebarConfig('Articles'),
          '/resources/': genResourcesConfig('Resources')
        }
      },
      '/zh/': {
        lang: 'zh-CN',
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '文章与信息',
            link: '/zh/articles/'
          },
          {
            text: '参考资料',
            items: [
              { text: '单式连环掌', link: '/zh/resources/wujiquan-12-sets-single-posture-cyclic-palm' },
              { text: '八段锦', link: '/zh/resources/wujiquan-8-pieces-of-brocade' },
              { text: '六字诀', link: '/zh/resources/wujiquan-6-healing-sounds' },
              { text: '无极拳五禽功', link: '/zh/resources/wujiquan-5-animals-qigong' },
              { text: 'Immortal Palm', link: '/zh/resources/wujiquan-immortal-palm' }, 
            ],
          },
          {
            text: '活动',
            items: [
              { text: 'Brezno 课程 (9月2019年)', link: '/zh/events/2019_sep_workshop_brezno' },
              { text: '往期精彩',
                items: [
                  { text: '无极拳扇子课程 (12月 2018年)', link: '/zh/events/2018_wujiquan_fan_workshop' },
                  { text: '于师父专业课程 (10月 2018年)', link: '/zh/events/2018_oct_special_classes_with_master_yu' },
                  { text: '特别暑期课程 - 2018', link: '/zh/events/2018_special_summer_programmes' },
                ],
              },
            ],
          },
          {
            text: '无极拳北京',
            link: '/beijing/'
          },
          {
            text: '关于我们',
            items: [
              { text: '关于无极拳', link: '/zh/about/about_wujiquan' },
              { text: '马力安老师', link: '/zh/about/marian_lassak' },
            ],
          },
        ],
        sidebar: {
          '/zh/articles/': genSidebarConfig('文章'),
          '/zh/resources/': genResourcesConfig('参考资料')
        }
      },
      '/sk/': {
        lang: 'sk',
        selectText: 'Zvoľ jazyk',
        label: 'Slovenský',
        editLinkText: 'Upravte túto stránku v službe Github',
        nav: [
          {
            text: 'Články',
            link: '/sk/articles/'
          },
          {
            text: 'Zdroje',
            items: [
              { text: 'Jedno pohybová cyklická dlaň', link: '/sk/resources/wujiquan-12-sets-single-posture-cyclic-palm' },
              { text: '8 Kusov Brokátu', link: '/sk/resources/wujiquan-8-pieces-of-brocade' },
              { text: '6 Hojivých Zvukov', link: '/sk/resources/wujiquan-6-healing-sounds' },
              { text: 'Čchi kung 5 zvierat', link: '/sk/resources/wujiquan-5-animals-qigong' },
              { text: 'Dlaň dlhovekého', link: '/sk/resources/wujiquan-immortal-palm' },
            ],
          },
          {
            text: 'Najnovšie Udalosti',
            items: [
              { text: 'Brezno Seminár (Sep 2019)', link: '/sk/events/2019_sep_workshop_brezno' },
              { text: 'Minulé Udalosti',
                items: [
                  { text: 'Wujiquan Sklopný Seminár (Dec 2018)', link: '/sk/events/2018_wujiquan_fan_workshop' },
                  { text: 'Špeciálne triedy s Master Yu (October 2018)', link: '/sk/events/2018_oct_special_classes_with_master_yu' },
                  { text: 'Špeciálny letný program - 2018', link: '/sk/events/2018_special_summer_programmes' },
                ],
              },
            ],
          },
          {
            text: 'O nás',
            items: [
              { text: 'O nás Wujiquan', link: '/sk/about/about_wujiquan' },
              { text: 'Marián Laššák', link: '/sk/about/marian_lassak' },
            ],
          },
        ],
        sidebar: {
          '/sk/articles/': genSlovakArticles('Články'),
          '/sk/resources/': genResourcesConfig('Zdroje')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'regular-classes-in-beijing',
        'master-yu-accepting-disciples-april-2018',
        'class-video',
        'short-term-course-for-health',
        'westerner-teaches-health-cultivation'
      ]
    }
  ]
}

function genResourcesConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'wujiquan-12-sets-single-posture-cyclic-palm',
        'wujiquan-8-pieces-of-brocade',
        'wujiquan-6-healing-sounds',
        'wujiquan-5-animals-qigong',
        'wujiquan-immortal-palm'
      ]
    }
  ]
}

function genSlovakArticles (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'chinese-martial-arts-education-method',
        'healing-in-wujiquan',
        'class-video',
      ]
    }
  ]
}
