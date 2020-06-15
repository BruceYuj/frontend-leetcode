const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
// var  {sidebars} =  require('./sidebarHelper/index.js')
// console.log(sidebars.length)

module.exports = {
    title: 'front-end leetcode',
    description: 'a repo about leetcode problems',
    base: '/frontend-leetcode/',
    themeConfig: {
      nav: navConf,
      repo: 'https://github.com/BruceYuj/frontend-leetcode',
      repoLabel: '亲, Github Star 一下',
      docsDir: 'docs',
      docsBranch: 'master',
      editLinks: true,
      editLinkText: '在 Github 上改善此页面',
      lastUpdated: '最后更新时间'
    },
    plugins: pluginConf
  }