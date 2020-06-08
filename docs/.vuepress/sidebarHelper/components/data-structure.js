
const array = [
  { title: '1160. 拼写单词', path: 'leetcode/main/1160', sidebarDepth: 0 },
]

const linkList = [
  { title: '24. 两两交换链表中的节点', path: 'leetcode/main/24', sidebarDepth: 0 },
  { title: '25. K 个一组翻转链表', path: 'leetcode/main/25', sidebarDepth: 0 },
  { title: '92. 反转链表 II', path: 'leetcode/main/92', sidebarDepth: 0 },
  { title: '890. 查找和替换模式', path: 'leetcode/main/890', sidebarDepth: 0 },
]

const hashTable = [
  { title: '41. 缺失的第一个正数', path: 'leetcode/main/41', sidebarDepth: 0 },
]

const queue = [
  { title: '面试题59 - II. 面试题59 - II. 队列的最大值',
    path: 'leetcode/LCOF/59-II',
    sidebarDepth: 0 },
]

const heap = [
  { title: '1383. 最大的团队表现值', path: 'leetcode/main/1383', sidebarDepth: 0 },
  { title: '1403. 非递增顺序的最小子序列', path: 'leetcode/main/1403', sidebarDepth: 0 },
]

const stack = [
  { title: '394. 字符串解码', path: 'leetcode/main/394', sidebarDepth: 0 },
  { title: '1111. 有效括号的嵌套深度', path: 'leetcode/main/1111', sidebarDepth: 0 },

]

const monotonicStack = [
  { title: '84. 柱状图中最大的矩形', path: 'leetcode/main/84', sidebarDepth: 0 },
  { title: '85. 最大矩形', path: 'leetcode/main/85', sidebarDepth: 0 },
]

const tree = [
  { title: '101. 对称二叉树', path: 'leetcode/main/101', sidebarDepth: 0 },
  { title: '105. 从前序与中序遍历序列构造二叉树', path: 'leetcode/main/105', sidebarDepth: 0 },
  { title: '106. 从中序与后序遍历序列构造二叉树', path: 'leetcode/main/106', sidebarDepth: 0 },
  { title: '110. 平衡二叉树', path: 'leetcode/main/110', sidebarDepth: 0 },
  { title: '538. 把二叉搜索树转换为累加树', path: 'leetcode/main/538', sidebarDepth: 0 },
]

const segmentTree = [
  { title: '307. 区域和检索 - 数组可修改', path: 'leetcode/main/307', sidebarDepth: 0 },
]

const Trie = [
  { title: '820. 单词的压缩编码', path: 'leetcode/main/820', sidebarDepth: 0 } 
]


const dataStructure = {
    title: '基础数据结构',  // 必要的
    path: '/directory/by-tag/data-structure',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    // collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      {    
        title: '数组',  // 必要的
        // path: '/directory/by-tag/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [...array]
      },

      {    
        title: '链表',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [...linkList]
      },
      {    
        title: '哈希表',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
          ...hashTable
        ]
      },
      {    
        title: '队列',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
          ...queue
        ]
      },
      {    
        title: '堆',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [...heap]
      },
      {    
        title: '栈',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
          ...stack,
          {
            title: '单调栈',
            // collapsable: false,
            sidebarDepth: 0,
            children: [
              ...monotonicStack
            ]
          }
        ]
      },
      {    
        title: '树',  // 必要的
        // path: '/directory/by-tag/dp',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
          ...tree,
          {
            title: '线段树',
            // collapsable: false,
            sidebarDepth: 0,
            children: [
              ...segmentTree
            ]
          },
          {
            title: '前缀树',
            // collapsable: false,
            sidebarDepth: 0,
            children: [
              ...Trie
            ]
          }
        ]
      }
  ]
}

module.exports = {
  dataStructure
}

