import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "牛逼的项目",
  description: "原神，启动！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '点击打开原神', link: 'https://ys.mihoyo.com/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'gitlab', link: 'https://github.com/vuejs/vitepress' }
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
