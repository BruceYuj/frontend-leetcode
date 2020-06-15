const secretKeyConf = require('./secretKeyConf.js');

module.exports = {
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: '发现新内容',
      buttonText: '刷新'
    }
  },
  '@vuepress/back-to-top': true,
  '@vuepress/google-analytics': {
    'ga': secretKeyConf.ga
  },
  '@vuepress/medium-zoom': {
    selector: 'img'
  },
  'vuepress-plugin-auto-sidebar': {
    titleMode: 'uppercase',
    collapsable: true
  },
  'vuepress-plugin-mathjax': {
    targeet: 'svg',
    macros: {
      '*': '\\times',
    }
  }
}