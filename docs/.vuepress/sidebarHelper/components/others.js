const othersList = [
  { title: '169. 多数元素',
  path: 'leetcode/main/169',
  sidebarDepth: 0 },
  { title: '229. 求众数 II',
  path: 'leetcode/main/229',
  sidebarDepth: 0 },
  { title: '289. 生命游戏',
  path: 'leetcode/main/289',
  sidebarDepth: 0 },
  { title: '807. 保持城市天际线',
  path: 'leetcode/main/807',
  sidebarDepth: 0 },
  { title: '1404. 将二进制表示减到 1 的步骤数',
  path: 'leetcode/main/1404',
  sidebarDepth: 0 },
  { title: '1431. 拥有最多糖果的孩子',
  path: 'leetcode/main/1431',
  sidebarDepth: 0 },
  
]

const prefixAnd = [
  { title: '523. 连续的子数组和',
  path: 'leetcode/main/523',
  sidebarDepth: 0 },
  { title: '560. 和为K的子数组',
  path: 'leetcode/main/560',
  sidebarDepth: 0 },
  { title: '974. 和可被 K 整除的子数组',
  path: 'leetcode/main/974',
  sidebarDepth: 0 },
  { title: '1013. 将数组分成和相等的三个部分',
  path: 'leetcode/main/1013',
  sidebarDepth: 0 },
  { title: '1248. 统计「优美子数组」',
  path: 'leetcode/main/1248',
  sidebarDepth: 0 },
  { title: '1300. 转变数组后最接近目标值的数组和',
  path: 'leetcode/main/1300',
  sidebarDepth: 0 },
  { title: '1371. 每个元音包含偶数次的最长子字符串',
  path: 'leetcode/main/1371',
  sidebarDepth: 0 }
]

const others = {
  title: '其他',  // 必要的
  path: '/directory/by-tag/others',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  // collapsable: false, // 可选的, 默认值是 true,
  sidebarDepth: 0,    // 可选的, 默认值是 1
  children: [
    ...othersList,
    {
      title: '前缀和与差分',
      sidebarDepth: 0,
      children: [
        ...prefixAnd
      ]
    }
  ]
}

module.exports = {
  others
}



