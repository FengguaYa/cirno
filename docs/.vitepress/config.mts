import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/cirno/',
  title: "Bot 更新日志 - CirnoBot",
  description: "Bot的更新日志",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/cirno/logo.svg' }],
    ['link', { rel: 'icon', href: '/cirno/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/cirno/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/cirno/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/cirno/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/cirno/site.webmanifest' }]
  ],
  themeConfig: {
    logo: '/logo.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '查看更新', link: '/new-update' },
      { text: '查看成就', link: '/new-achievement' }
    ],

    sidebar: [
      {
        text: '最近内容',
        items: [
          { text: '最新更新', link: '/new-update' },
          { text: '最新成就', link: '/new-achievement' }
        ]
      },
      {
        text: '26 Year',
        items: [
          {
            text: '26-09',
            collapsed: true,
            items: [
              { text: '26-09-26', link: '/update/26/26-09/26-09-26' },
              { text: '26-09-22', link: '/update/26/26-09/26-09-22' }
            ]
          },
          {
            text: '26-10',
            collapsed: true,
            items: [
              { text: '26-10-06', link: '/update/26/26-10/26-10-06' }
            ]
          }
        ]
      },
      {
        text: 'Achievements',
        items: [
          {
            text: '100 Groups!', link: '/achievements/100-groups'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FengguaYa/cirno' }
    ]
  }
})