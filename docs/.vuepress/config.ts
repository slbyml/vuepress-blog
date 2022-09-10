import { defineUserConfig, HeadConfig, defaultTheme } from 'vuepress'
import jsslTheme from './theme'

let head:HeadConfig[] = [
  ['meta', { name: 'keywords', content: '官方网址：https://slbyml.github.io' }],
  ['link', { rel: 'apple-touch-icon', href: '/images/link.jpg' }],
  ['link', { rel: 'mask-icon', href: '/images/link.jpg', color: '#1e90ff' }],
]

export default defineUserConfig({
  title: '静水深流',
  description: '这是我的第一个 VuePress 站点',
  head,
  shouldPrefetch: true, // 页面多的时候，为了性能可以讲prefetch关掉
  theme: defaultTheme({
    // 如果你按照 `organization/repository` 的格式设置它
    // 你也可以直接将它设置为一个 URL
    repo: 'https://gitlab.com/foo/bar',
    editLink: false
  }),
  plugins: [
    jsslTheme()
  ]
})