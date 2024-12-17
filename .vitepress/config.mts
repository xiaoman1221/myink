import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "牛逼的项目",
  description: "原神，启动！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '点击打开原神', link: 'https://ys.mihoyo.com/' },
      { text: '友情链接', link: '/links'}
    ],

    sidebar: [
      {
        text: '牛逼的项目',
        items: [
          { text: '首页', link: '/' },
          { text: '点击打开原神', link: 'https://ys.mihoyo.com/' },
          { text: '友情链接', link: '/links'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'gitlab', link: '/' }
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
