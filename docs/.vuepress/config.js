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
    }
  },
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  serviceWorker: true,
  // theme: 'vue',
  themeConfig: {
    repo: '',
    editLinks: true,
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
          // {
          //   text: 'Resources',
          //   items: [
          //     { text: 'Single posture cyclic palm (12 Sets)', link: '/resources/wujiquan-12-sets-single-posture-cyclic-palm' },
          //   ],
          // },
          {
            text: 'Events',
            items: [
              { text: 'Weekend retreat with Master Yu', link: '/events/2018_oct_weekend_retreat' },
              { text: 'International Kung Fu retreat near Beijing', link: '/events/2018_oct_international_kungu_retreat' },
              { text: 'Special Classes with Master Yu (October 2018)', link: '/events/2018_oct_special_classes_with_master_yu' },
              { text: 'Special Summer Programme - 2018', link: '/events/2018_special_summer_programmes' },
            ],
          },
          {
            text: 'Beijing',
            link: '/beijing/'
          },
          {
            text: 'About Us',
            link: '/about/',
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
            text: '无极拳北京',
            link: '/beijing/'
          },
          {
            text: '关于我们',
            link: '/about/',
          },
        ],
        sidebar: {
          '/zh/articles/': genSidebarConfig('文章')
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
      ]
    }
  ]
}
