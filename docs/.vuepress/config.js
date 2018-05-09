module.exports = {
  title: 'Wujiquan',
  description: 'Traditional martial arts',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  serviceWorker: true,
  // theme: 'vue',
  themeConfig: {
    repo: 'hanxue/wujiquan-vuepress',
    editLinks: true,
    docsDir: 'docs',
    sidebar: [
      'articles/class-video',
      'articles/short-term-course-for-health',
    ],
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'About Us',
            link: '/about/',
          },
          {
            text: 'Beijing',
            link: '/beijing/'
          },
        ],
        // sidebar: {
        //   '/articles/': genSidebarConfig('Articles')
        // }
      },
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'class-video',
        'short-term-course-for-health',
      ]
    }
  ]
}
