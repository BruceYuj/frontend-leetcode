const greedy = {
  title: '贪心算法',  // 必要的
  path: '/directory/by-tag/greedy',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  // collapsable: false, // 可选的, 默认值是 true,
  sidebarDepth: 0,    // 可选的, 默认值是 1
  children: [
    { title: '55. 跳跃游戏', path: 'leetcode/main/55', sidebarDepth: 0 },
    { title: '870. 优势洗牌',
      path: 'leetcode/main/870',
      sidebarDepth: 0 },
    { title: '1405. 最长快乐字符串',
      path: 'leetcode/main/1405',
      sidebarDepth: 0 } 
  ]
}

module.exports = {
  greedy
}