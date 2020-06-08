

const sort = {
  title: '排序',  // 必要的
  path: '/directory/by-tag/sort',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  // collapsable: false, // 可选的, 默认值是 true,
  sidebarDepth: 0,    // 可选的, 默认值是 1
  children: [
    { title: '41. 缺失的第一个正数',
    path: 'leetcode/main/41',
    sidebarDepth: 0 },
  { title: '56. 合并区间', path: 'leetcode/main/56', sidebarDepth: 0 },
  { title: '945. 使数组唯一的最小增量',
    path: 'leetcode/main/945',
    sidebarDepth: 0 },
  { title: '1460. 通过翻转子数组使两个数组相等',
    path: 'leetcode/main/1460',
    sidebarDepth: 0 } 
  ]
}

module.exports = {
  sort
}



