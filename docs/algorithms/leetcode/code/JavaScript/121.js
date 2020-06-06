/**
 * 题目链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * 股票系列问题 1
 */


/**
 * 解法1： 暴力法
 * @param {*} prices 
 */
var maxProfit = function(prices) {
  let max = 0;
  for(let i = 0; i < prices.length-1; i++) {
    for(let j = i+1; j < prices.length; j++) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }

  return max;
};

 /**
  * 解法2： 改进解法1.
  * 先来看一个思路：
  * 1. 已知一个集合和该集合的最大值，然后我们从集合中取走一个值，那么我们需要重新遍历该集合寻找最大值来更新。
  * 2. 已知一个集合和该集合的最大值，然后我们往集合中添加一个值，如何更新最大值？只需要添加的值和当前最大值比较即可，无需重新遍历。（最小值亦然）
  * 
  * 应用到程序：
  * 1. 解法 1 就是抽象出来就是寻找每次从集合中取出一个元素后寻找可以卖出的最大值。
  * 2. 因此，我们反过来，维护买入的最小值，自变量就是卖出的时间。
  * 程序步骤：
  * 1. 假设我们在第 i 天卖出(i 在 [1, n-1] 之间)，维护一个最小值的买入变量 min
  * 2. 循环更新 min 和 答案
  * 
  * 时间复杂度：O(N)
  * 空间复杂度：O(1)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length <= 0) return 0;
  let max = 0;
  let min = prices[0];
  for(let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  return max;
};

// 解法3： 动态规划思路一
/**
 * 区间和和求差是两个可以相互转化的问题。为什么两者之间可以进行转化？
 * 微积分里面的牛顿-莱布尼茨公式表示：
 * 
 */
var maxProfit = function(prices) {
  if(prices.length <= 1) return 0;
  let diff = new Array(prices.length-1);
  let dp = new Array(prices.length).fill(0);
  let max;
  for(let i = 0; i < prices.length-1; i++) {
    diff[i] = prices[i+1] - prices[i];
  }
  dp[0] = diff[0] > 0 ? diff[0] : 0;
  max = dp[0];
  for(let i = 1; i < prices.length - 1; i++) {
    dp[i] = dp[i-1] + diff[i] > 0 ? dp[i-1] + diff[i] : 0;
    max = Math.max(dp[i], max);
  }

  return max;
}

// 改进1
var maxProfit = function(prices) {
  if(prices.length <= 1) return 0;
  let diff = new Array(prices.length-1);
  let dp = 0;
  let max;
  for(let i = 0; i < prices.length-1; i++) {
    diff[i] = prices[i+1] - prices[i];
  }
  dp = diff[0] > 0 ? diff[0] : 0;
  max = dp;
  for(let i = 1; i < prices.length - 1; i++) {
    dp = dp + diff[i] > 0 ? dp + diff[i] : 0;
    max = Math.max(dp, max);
  }

  return max;
}

// 改进2
var maxProfit = function(prices) {
  if(prices.length <= 1) return 0;
  let dp = 0;
  let max = 0;
  for(let i = 0; i < prices.length-1; i++) {
    let diff = prices[i+1] - prices[i];
    dp = dp + diff > 0 ? dp + diff : 0;
    max = Math.max(dp, max);
  }
  return max;
}



