/**
 * 题目链接：https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 */

 /**
  * 解法一： 暴力法（超时）
  * 模拟删除的动作，每次删除迭代 m 次，删除后在 deleted 数组标记，直到只剩最后一个
  * 时间复杂度：O(N*M)
  * 空间复杂度: O(N)
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    
  let deleted = new Array(n).fill(false);
  let hasDelete = 0;
  let start = 0;
  let k = m;
  while(hasDelete < n-1) {
      while(k > 0) {
          if(deleted[start]) {
              start = (start + 1) % n;
              continue;
          } else {
              k--;
              if(k === 0) deleted[start] = true;
              start = (start + 1) % n;
          }
      }
      k = m;
      hasDelete++;
  }
  for(let i = 0; i < n; i++) {
      if(!deleted[i]) return i;
  }
};


/**
 * 解法2： 数学法 - 约瑟夫环问题 
 * 给 n 个人，每次删除第 m 个， 删除完重新编号，最后只剩一个，并会被编号为0
 * 假设函数 f(x) 是最后存活的在数组总数为 x 时的编号
 * f(1) = 0;
 * f(2) = (f(1) + m) % 2;
 * f(3) = (f(2) + m) % 3;
 * ...
 * f(n) = (f(n-1) + m) % n;
 */

 var lastRemaining = function (n, m) {
  let last = 0;
  for(let i = 2; i <= n; i++) {
    last = (last + m) % i;
  }
  return last;
 }