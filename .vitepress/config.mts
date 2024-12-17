import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小满の墨水瓶",
  description: "小满の墨水瓶",
  base:"/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '点击打开博客', link: 'https://www.manjiuqi.com/' },
      { text: '关于我', link: '/about'}
    ],

    sidebar: [
      {
        text: '小满の墨水瓶',
        items: [
          { text: '首页', link: '/' },
          { text: '点击打开博客', link: 'https://www.manjiuqi.com/' },
          { text: '关于我', link: '/about'}
        ]
      }
    ],

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
