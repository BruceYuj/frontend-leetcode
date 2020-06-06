/**
 * 题目：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

 /** 解法1：双指针法
  * 本题的前提是数组已经是有序的。
  * 1. 逻辑上，我们将数组里面相同的元素都归入一个组合（只有一个元素也算一个组合），假定两个指针 i 和 j，j 指向每个组合的尾部元素， i 指向下一个可以被替换的位置。
  * 2. 遍历处理整个数组，不断将每个组合的元素替换到指针 i 指向的位置。
  * 时间复杂度：O(N)
  * 空间复杂度：O(1)
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let j = 0;
  let i = 0;
  while(j < nums.length) {
    while(j < nums.length-1 && nums[j] === nums[j+1]) {
      j++;
    }
    i++;
    j++;
    if(i < nums.length) nums[i] = nums[j]
  }
  return i; 
};

var removeDuplicates2 = function(nums) {
  let slow = 0;
  let fast = 0;
  for(; fast < nums.length; fast++) {
    if(nums[slow] !== nums[fast]) nums[++slow] = nums[fast];
  }
  return slow+1;
}

removeDuplicates([1,2,1,2,4])