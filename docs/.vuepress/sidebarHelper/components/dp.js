
const normalDP = [
  { title: '5. 最长回文子串', path: 'leetcode/main/5', sidebarDepth: 0 },
  { title: '85. 最大矩形', path: 'leetcode/main/85', sidebarDepth: 0 },
  { title: '115. 不同的子序列',
    path: 'leetcode/main/115',
    sidebarDepth: 0 },
  { title: '120. 三角形最小路径和',
    path: 'leetcode/main/120',
    sidebarDepth: 0 },
  { title: '121. 买卖股票的最佳时机',
    path: 'leetcode/main/121',
    sidebarDepth: 0 },
  { title: '122. 买卖股票的最佳时机 II',
    path: 'leetcode/main/122',
    sidebarDepth: 0 },
  { title: '123. 买卖股票的最佳时机 III',
    path: 'leetcode/main/123',
    sidebarDepth: 0 },
  { title: '188. 买卖股票的最佳时机 IV',
    path: 'leetcode/main/188',
    sidebarDepth: 0 },
  { title: '309. 最佳买卖股票时机含冷冻期',
    path: 'leetcode/main/309',
    sidebarDepth: 0 },
  { title: '714. 买卖股票的最佳时机含手续费',
    path: 'leetcode/main/714',
    sidebarDepth: 0 },
  { title: '132. 分割回文串 II',
    path: 'leetcode/main/132',
    sidebarDepth: 0 },
  { title: '139. 单词拆分',
    path: 'leetcode/main/139',
    sidebarDepth: 0 },
  { title: '140. 单词拆分II',
    path: 'leetcode/main/140',
    sidebarDepth: 0 },
  { title: '152. 乘积最大子数组',
    path: 'leetcode/main/152',
    sidebarDepth: 0 },
  { title: '198. 打家劫舍',
    path: 'leetcode/main/198',
    sidebarDepth: 0 },
  { title: '221. 最大正方形',
    path: 'leetcode/main/221',
    sidebarDepth: 0 },
  { title: '300. 最长上升子序列',
    path: 'leetcode/main/300',
    sidebarDepth: 0 },
  { title: '343. 整数拆分',
    path: 'leetcode/main/343',
    sidebarDepth: 0 },
  { title: '377. 组合总和 Ⅳ',
    path: 'leetcode/main/377',
    sidebarDepth: 0 },
  { title: '542. 01 矩阵',
    path: 'leetcode/main/542',
    sidebarDepth: 0 },
  { title: '764. 最大加号标志',
    path: 'leetcode/main/764',
    sidebarDepth: 0 },
  { title: '1048. 最长字符串链',
    path: 'leetcode/main/1048',
    sidebarDepth: 0 },
  { title: '1162. 地图分析',
    path: 'leetcode/main/1162',
    sidebarDepth: 0 },
  { title: '1277. 统计全为 1 的正方形子矩阵',
    path: 'leetcode/main/1227',
    sidebarDepth: 0 },
  { title: '1444. 切披萨的方案数',
    path: 'leetcode/main/1444',
    sidebarDepth: 0 },
  { title: '面试题 17.16. 按摩师',
    path: 'leetcode/LCCI/17.16',
    sidebarDepth: 0 },
  { title: '面试题 08.11. 硬币',
    path: 'leetcode/LCCI/08.11',
    sidebarDepth: 0 },
    { title: '面试题46. 把数字翻译成字符串',
    path: 'leetcode/LCOF/46',
    sidebarDepth: 0 },
]

const compressDP = [
  { title: '1434. 每个人带不同帽子的方案数',
    path: 'leetcode/main/1434',
    sidebarDepth: 0 }
]

const digitDP = [
  { title: '1012. 至少有 1 位重复的数字',
    path: 'leetcode/main/1012',
    sidebarDepth: 0 }
]


const dp = {
    title: '动态规划',  // 必要的
    path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    // collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      {    
        title: '普通 DP',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [...normalDP]
      },

      {    
        title: '背包 DP',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        // children: []
      },
      {    
        title: '状压 DP',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
          ...compressDP
        ]
      },
      {    
        title: '数位 DP',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
          ...digitDP
        ]
      },
      {    
        title: '计数 DP',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: []
      },
      {    
        title: '区间 DP',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: []
      },
      {    
        title: '插头 DP',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: []
      },
      {    
        title: '树形 DP',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: []
      },
      {    
        title: 'DAG DP',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: []
      },
      {    
        title: '动态 DP',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: []
      },
  ]
}

module.exports = {
  dp
}

