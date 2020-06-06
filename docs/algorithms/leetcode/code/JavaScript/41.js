/**
 * 题目链接：https://leetcode-cn.com/problems/first-missing-positive/
 */

 /**
  * 解法1：哈希表
  * 假设数组长度为 $n$。 缺失的正整数要么在 $[1, n]$ 之中，要么是 $n+1$ (此时，$1~n$ 都在数组中存在)。
  * 1. 建立数组中元素的哈希表
  * 2. 在 $[1,n]$ 之间遍历查看某正整数是否存在，如果不存在，则返回该正整数；如果都存在，则返回 $n+1$
  * 时间复杂度: O(N)
  * 空间复杂度: O(N)
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
      map[nums[i]] = true;
    }
    for(let i = 1; i <= nums.length; i++) {
      if(!map[i]) return i;
    }
    return nums.length + 1;
};


 /**
  * 解法2：升序排序后处理
  * 
  * 时间复杂度: O(NlogN)
  * 空间复杂度: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive2 = function(nums) {
  nums.sort((a, b) => a-b);

  let helper = 1;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < helper) continue;
    if(nums[i] === helper) {
      helper += 1;
      continue;
    }
    break;
  }
  return helper;
};

 /**
  * 解法3：利用“桶思想”和抽屉原理来处理。
  * 1. 我们期待元素值为i的元素能够放在 i-1这个位置上，i的范围为[1, n]。其他元素无所谓放在哪里。
  * 2. 做完上述的预处理后，我们遍历整个数组，第一个遇到的元素和下标不能对应的下标(下标+1)就是我们想要的答案
  * 3. 如果全部一一对应，则返回n+1.
  * 时间复杂度: O(N)
  * 空间复杂度: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive3 = function(nums) {
  
  for(let i = 0; i < nums.length; i++) {
    while(nums[i] > 0 && nums[i] <= nums.length && nums[i] !== i+1 && nums[nums[i]-1] !== nums[i]) {
      swap(nums, i, nums[i]-1);
    }
  }

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== i+1) return i+1;
  }

  return nums.length + 1;

  function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
};

 /**
  * 解法4：利用 hash 的思想，建立下标和元素之间的存在关系(通过正负)
  * 1. 由于元素存在 <= 0 的元素，因此我们需要将这些元素转换成正整数，比如1.
  * 如果要转换，我们先需要判断1是否存在，如果不存在1就是答案。
  * 2.如果值 > 数组长度，则不需要负数转换。
  * 3. 预处理后，第一个正整数对应的下标则是要的答案
  * 4. 如果全是负数，则返回 n+1
  * 时间复杂度: O(N)
  * 空间复杂度: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive4 = function(nums) {
  let hasOne = false;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 1) hasOne = true;
    if(nums[i] < 1) nums[i] = 1;
  }
  if(!hasOne) return 1;

  for(let i = 0; i < nums.length; i++) {
    let newIndex = Math.abs(nums[i]) - 1;
    if(newIndex < nums.length && nums[newIndex] > 0 ) nums[newIndex] *= -1;
  }

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 0) return i + 1;
  }

  return nums.length + 1;
};