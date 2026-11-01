import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
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

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

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
        text: 'Updates',
        items: [
          {
            text: '26 Year',
            collapsed: false,
            items: [
              {
                text: '26-11',
                collapsed: true,
                items: [
                  { text: '26-11-01', link: '/update/26/26-11/26-11-01' }
                ]
              },
              {
                text: '26-10',
                collapsed: true,
                items: [
                  { text: '26-10-06', link: '/update/26/26-10/26-10-06' }
                ]
              },
              {
                text: '26-09',
                collapsed: true,
                items: [
                  { text: '26-09-26', link: '/update/26/26-09/26-09-26' },
                  { text: '26-09-22', link: '/update/26/26-09/26-09-22' }
                ]
              }
            ]
          }
        ]
      },
      {
        text: 'Achievements',
        items: [
          {
            text: '100 Groups!', link: '/achievements/100-groups'
          },
          {
            text: '100 Friends!', link: '/achievements/100-friends'
          }
        ]
      },
      {
        text: '条款与协议',
        items: [
          { text: '用户协议', link: '/user-agreement' },
          { text: '隐私协议', link: '/privacy-policy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FengguaYa/cirno' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 CirnoBot | <a href="/cirno/user-agreement">用户协议</a> | <a href="/cirno/privacy-policy">隐私协议</a>'
    }
  }
})