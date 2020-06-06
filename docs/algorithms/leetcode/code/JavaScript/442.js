/**
 * 题目链接：https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/
 * 相似题： 448、41
 */

/**
 * 解法一： 使用哈希表，统计数组中各个数的个数
 * 时间复杂度：O(N)
 * 空间复杂度: O(N)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let map = {};
    let ans = [];

    for(let i = 0; i < nums.length; i++) {
      if(map[nums[i]]) map[nums[i]]++;
      else map[nums[i]] = 1;
    }

    for(let key in map) {
      if(map[key] === 2) ans.push(key);
    }

    return ans;
};

/**
 * 解法二： 先排序（使用原地排序），然后遍历排序后的数组
 * 时间复杂度：O(NlogN)
 * 空间复杂度: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates2 = function(nums) {
  let ans = [];

  nums.sort((a, b) => a-b);

  for(let i = 0; i < nums.length; i++) {
    if(i+1 < nums.length && nums[i] === nums[i+1]) {
      ans.push(nums[i]);
      i++;
    }
  }

  return ans;
};


/**
 * 解法三：由于数组中元素大小不会超过数组长度，
 * 因此，我们可以借用“hash”的思想，建立下标和元素之间的关系
 * 比如存在，将下标代表的元素加上数组长度 n。那么出现两次的元素对应下标元素 (2n, 3n]; 
 * 出现一次的 (n, 2n]; 未出现的 [1, n]
 * 
 * 时间复杂度：O(N)
 * 空间复杂度: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates3 = function(nums) {
  let ans = [];

  for(let i = 0; i < nums.length; i++) {
    let newIndex = (nums[i]-1) % nums.length; 
    nums[newIndex] += nums.length;
  }

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 2*nums.length) ans.push(i+1);
  }
  return ans;
};

var findDuplicates3_1 = function(nums) {
  let ans = [];

  for(let i = 0; i < nums.length; i++) {
    let newIndex = (nums[i]-1) % nums.length;
    if(nums[newIndex] > nums.length) ans.push(newIndex+1); 
    else nums[newIndex] += nums.length;
  }

  return ans;
};

/**
 * 解法四：由于数组中元素大小不会超过数组长度，
 * 因此，我们可以借用“hash”的思想，建立下标和元素之间的关系
 * 比如存在，将下标代表的元素变成负数。那么出现两次的元素在第二次遍历到元素是已经成为负数; 
 * 出现一次的 只会出现一次负数; 未出现的为正数
 * 
 * 时间复杂度：O(N)
 * 空间复杂度: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates4 = function(nums) {
  let ans = [];

  for(let i = 0; i < nums.length; i++) {
    let newIndex = Math.abs(nums[i]) - 1; 
    if(nums[newIndex] < 0) ans.push(newIndex+1);
    else nums[newIndex] = nums[i] * (-1);
  }

  return ans;
};

/**
 * 解法五：同样的利用“桶思想”和“抽屉原理”，由于数组中的元素只会存在1次和2次，我们
 * 可以通过将元素值i放在下标i-1里面，如果下标i-1里面的值已经是i，则不用交换。一次遍历后
 * 我们重新遍历数组，如果下标i-1里面的元素不是i，那么下标i-1里面的元素出现两次
 * 
 * 时间复杂度：O(N)
 * 空间复杂度: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates5 = function(nums) {
  let ans = [];

  for(let i = 0; i < nums.length; i++) {
    while(nums[i] !== i+1 && nums[i] !== nums[nums[i]-1]) {
      swap(nums, nums[i]-1, i);
    } 

  }
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== i+1) ans.push(nums[i]);
  }

  return ans;

  function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
};