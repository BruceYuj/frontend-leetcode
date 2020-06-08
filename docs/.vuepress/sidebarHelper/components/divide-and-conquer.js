const binarySearch = [
  { title: '84. 柱状图中最大的矩形',
  path: 'leetcode/main/84',
  sidebarDepth: 0 },
{ title: '300. 最长上升子序列',
  path: 'leetcode/main/300',
  sidebarDepth: 0 },
{ title: '面试题40. 最小的k个数',
  path: 'leetcode/LCOF/40',
  sidebarDepth: 0 },
{ title: '面试题 10.01. 合并排序的数组',
  path: 'leetcode/LCCI/10.01',
  sidebarDepth: 0 },
]

const divide = [
  { title: '33. 搜索旋转排序数组',
  path: 'leetcode/main/33',
  sidebarDepth: 0 },
{ title: '74. 搜索二维矩阵',
  path: 'leetcode/main/74',
  sidebarDepth: 0 },
{ title: '240. 搜索二维矩阵 II',
  path: 'leetcode/main/240',
  sidebarDepth: 0 },
{ title: '870. 优势洗牌',
  path: 'leetcode/main/870',
  sidebarDepth: 0 },
{ title: '1095. 山脉数组中查找目标值',
  path: 'leetcode/main/1095',
  sidebarDepth: 0 } 
]

const divideConquer = {
  title: '分治',  // 必要的
  path: '/directory/by-tag/divide-and-conquer',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  // collapsable: false, // 可选的, 默认值是 true,
  sidebarDepth: 0,    // 可选的, 默认值是 1
  children: [
    ...divide,
    {
      title: '二分法',
      sidebarDepth: 0,
      children: [
        ...binarySearch
      ]
    }
  ]
}

module.exports = {
  divideConquer
}

