module.exports = {
    title: 'front-end leetcode',
    description: 'a repo about leetcode problems',
    base: '/frontend-leetcode/',
    themeConfig: {
      displayAllHeaders: true,
      sidebar: [
        '/leetcode/'
      ],
      repo: 'https://github.com/BruceYuj/frontend-leetcode',
      repoLabel: '在 github 上编辑此页',
      docsDir: 'docs',
      docsBranch: 'master',
      editLinks: true,
      editLinkText: '帮助我改善此页面'
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