import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小满の墨水瓶",
  description: "小满の墨水瓶",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lang: 'zh_CN',
    nav: [
      { text: '首页', link: '/' },
      { text: '点击打开博客', link: 'https://www.manjiuqi.com/' },
      { text: '关于我', link: '/about'},
      { text: '日记',link:'/diarys/lists'}
    ],
    lastUpdated: true,
    sidebar: [
      {
        text: '小满の墨水瓶',
        items: [
          { text: '首页', link: '/' },
          { text: '点击打开博客', link: 'https://www.manjiuqi.com/' },
          { text: '关于我', link: '/about'},
          {
            text: "日记",
            items: [
              {text: "首页", link: "/diarys/lists"},
              {text: "2025年4月11日",link:"/diarys/2025-04-11"}
            ]
          },
        ]
      }
    ],
    footer: {
      message: 'Powered By VitePress & 小满1221',
      copyright: 'Copyright © 2017  -2025'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaoman1221' }
    ]


  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'cn'
    },
    en: {
      label: 'English',
      lang: 'en'
  }
}
})
