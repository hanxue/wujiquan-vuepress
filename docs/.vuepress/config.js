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
            text: 'Events & Courses',
            items: [
              { text: 'Courses',
                items: [
                  { text: 'Video: 6 Healing Sounds Qigong (Slovak)', link: '/sk/events/2021_course_six_healing_sounds' },
                  { text: 'Video: Qigong for Office Workers (Slovak)', link: '/sk/events/2021_qigong_for_office_workers' },
                  { text: 'Video: Life Management According to Constitutional Energy (Slovak)', link: '/sk/events/2021_course_constitutional_energy' },
                ],
              },
              { text: 'Past Events',
                items: [
                  { text: 'Brezno Workshop (Sep 2019)', link: '/events/2019_sep_workshop_brezno' },
                  { text: 'Wujiquan Fan Workshop (Dec 2018)', link: '/events/2018_wujiquan_fan_workshop' },
                  { text: 'Special Classes with Master Yu (October 2018)', link: '/events/2018_oct_special_classes_with_master_yu' },
                  { text: 'Special Summer Programme - 2018', link: '/events/2018_special_summer_programmes' },
                ],
              },
            ],
          },
          {
            text: 'Countries & Instructors',
            link: '/about/countries_and_instructors/'
          },
          {
            text: 'About Us',
            items: [
              { text: 'About Wujiquan', link: '/about/about_wujiquan' },
              { text: 'Marian Lassak', link: '/about/marian_lassak' },
              { text: 'Fernanda Wendland', link: '/about/fernanda_wendland' },
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
              { text: '课程',
                items: [
                  { text: '视频：六字诀 气功 (斯洛伐克语)', link: '/sk/events/2021_course_six_healing_sounds' },
                  { text: '视频：上班族气功 (斯洛伐克语)', link: '/sk/events/2021_qigong_for_office_workers' },
                  { text: '视频：宪法能量管理生命 (斯洛伐克语)', link: '/sk/events/2021_course_constitutional_energy' },
                ],
              },
              { text: '往期精彩',
                items: [
                  { text: 'Brezno 课程 (9月2019年)', link: '/zh/events/2019_sep_workshop_brezno' },
                  { text: '无极拳扇子课程 (12月 2018年)', link: '/zh/events/2018_wujiquan_fan_workshop' },
                  { text: '于师父专业课程 (10月 2018年)', link: '/zh/events/2018_oct_special_classes_with_master_yu' },
                  { text: '特别暑期课程 - 2018', link: '/zh/events/2018_special_summer_programmes' },
                ],
              },
            ],
          },
          {
            text: '国家和教练队',
            link: '/zh/about/countries_and_instructors/'
          },
          {
            text: '关于我们',
            items: [
              { text: '关于无极拳', link: '/zh/about/about_wujiquan' },
              { text: '马力安老师', link: '/zh/about/marian_lassak' },
              { text: '芙兰达老师', link: '/zh/about/fernanda_wendland' },
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
              { text: '6 Liečivých zvukov', link: '/sk/resources/wujiquan-6-healing-sounds' },
              { text: 'Čchi kung 5 zvierat', link: '/sk/resources/wujiquan-5-animals-qigong' },
              { text: 'Dlaň dlhovekého', link: '/sk/resources/wujiquan-immortal-palm' },
            ],
          },
          {
            text: 'Najnovšie Udalosti',
            items: [
              { text: 'kurzy',
                items: [
                  { text: 'Čchi-kung 6 liečivých zvukov', link: '/sk/events/2021_course_six_healing_sounds' },
                  { text: 'Čchi-kung pre sedavé zamestnania', link: '/sk/events/2021_qigong_for_office_workers' },
                  { text: 'Životospráva podľa konštitučnej energie', link: '/sk/events/2021_course_constitutional_energy' },
                ],
              },
              { text: 'Minulé Udalosti',
                items: [
                  { text: 'Brezno Seminár (Sep 2019)', link: '/sk/events/2019_sep_workshop_brezno' },
                  { text: 'Wujiquan Sklopný Seminár (Dec 2018)', link: '/sk/events/2018_wujiquan_fan_workshop' },
                  { text: 'Špeciálne triedy s Master Yu (October 2018)', link: '/sk/events/2018_oct_special_classes_with_master_yu' },
                  { text: 'Špeciálny letný program - 2018', link: '/sk/events/2018_special_summer_programmes' },
                ],
              },
            ],
          },
          {
            text: 'Countries & Instructors',
            link: '/sk/about/countries_and_instructors/'
          },
          {
            text: 'O nás',
            items: [
              { text: 'O nás Wujiquan', link: '/sk/about/about_wujiquan' },
              { text: 'Marián Laššák', link: '/sk/about/marian_lassak' },
              { text: 'Fernanda Wendland', link: '/sk/about/fernanda_wendland' },
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
