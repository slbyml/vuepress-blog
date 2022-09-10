import { getDirname, path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'

const __dirname = getDirname(import.meta.url)

const jsslTheme = (options) => {
  // 返回一个主题函数
  return (app) => {
    return {
      name: 'vuepress-theme-jssl',
      extends: defaultTheme(),
      clientConfigFile: path.resolve(__dirname, 'client.js'),
      plugins: [

      ]
    }
  }
}

export default jsslTheme