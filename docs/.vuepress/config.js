var  {sidebars} =  require('./sidebarHelper/index.js')
// console.log(sidebars.length)

module.exports = {
    title: 'front-end leetcode',
    description: 'a repo about leetcode problems',
    base: '/frontend-leetcode/',
    themeConfig: {
      // displayAllHeaders: true,
      sidebar: [
        ...sidebars
      ],
      repo: 'https://github.com/BruceYuj/frontend-leetcode',
      repoLabel: '亲, Github Star 一下',
      docsDir: 'docs',
      docsBranch: 'master',
      editLinks: true,
      editLinkText: '在 Github 上改善此页面',
      lastUpdated: '最后更新时间'
    },
    plugins: [
      [
        'vuepress-plugin-mathjax',
        {
          targeet: 'svg',
          macros: {
            '*': '\\times',
          }
        }
      ]
    ]
  }