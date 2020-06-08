const math = {
  title: '数学',  // 必要的
  path: '/directory/by-tag/math',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  // collapsable: false, // 可选的, 默认值是 true,
  sidebarDepth: 0,    // 可选的, 默认值是 1
  children: [
    { title: '50. Pow(x, n)', path: 'leetcode/main/50', sidebarDepth: 0 },
    { title: '202. 快乐数', path: 'leetcode/main/202', sidebarDepth: 0 },
    { title: '268. 缺失数字',
      path: 'leetcode/main/268',
      sidebarDepth: 0 },
    { title: '892. 三维形体的表面积',
      path: 'leetcode/main/892',
      sidebarDepth: 0 },
    { title: '914. 卡牌分组',
      path: 'leetcode/main/914',
      sidebarDepth: 0 },
    { title: '1071. 字符串的最大公因子',
      path: 'leetcode/main/1071',
      sidebarDepth: 0 },
    { title: '1103. 分糖果 II',
      path: 'leetcode/main/1103',
      sidebarDepth: 0 },
    { title: '面试题57 - II. 和为s的连续正数序列',
      path: 'leetcode/LCOF/57-II',
      sidebarDepth: 0 }
  ]
}

module.exports = {
  math
}