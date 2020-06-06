/**
 * 题目链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/
 */

/** 解法1： 三指针法
 * 1. 假定有三个指针: start, i, j 。 start 表示 start 之前都是已经符合题意的子数组。i表示集合的头，j表示集合的尾
 *    集合则是数组相同元素的集合。
 * 2. 循环一遍，不断替换。
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let start = 0;
    let i = 0;
    let j = 0;
    while(j < nums.length) {
      while(j < nums.length-1 && nums[j] === nums[j+1]) j++;
      nums[start++] = nums[i];
      if(j-i > 0) nums[start++] = nums[i];
      j++;
      i = j;
    }
    return start;
};

// 泛化到 K（K 为允许重复的个数）
var removeDuplicates = function(nums, k) {
  if( k <= 0) return 0;

  let start = 0;
  let i = 0;
  let j = 0;
  while(j < nums.length) {
    while(j < nums.length-1 && nums[j] === nums[j+1]) j++;
    
    let min = Math.min(k, j-i+1);
    while(min-- > 0) nums[start++] = nums[i];
    j++;
    i = j;
  }
  return start;
};

// 更简单写法
var removeDuplicates = function(nums, k) {
  if(k <= 0) return 0;
  let i = 0;
  for(let j = 0; j < nums.length; j++) {
    if(i < k || nums[j] !== nums[i-k]) {
      nums[i++] = nums[j]
    }
  }
  return i;
}