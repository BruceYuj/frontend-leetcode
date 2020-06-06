/**
 * 题目链接：https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/
 * 相似题：442、41
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * 方法1： 通过使用哈希表来建立整数的关系
 * 时间复杂度：O(N), N 是 nums 的大小
 * 空间复杂度: O(N), N 是 nums 的大小
 */
var findDisappearedNumbers = function(nums) {
    let map = {};
    let ans = [];
    for(let i = 0; i < nums.length; i++) {
      map[nums[i]] = true;
    }

    for(let i = 1; i <= nums.length; i++) {
      if(!map[i]) ans.push(i);
    }

    return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * 方法2： 先排序，然后再处理
 * 时间复杂度：O(NlogN), N 是 nums 的大小
 * 空间复杂度: O(1), 排序可以是原地排序
 */
var findDisappearedNumbers2 = function(nums) {
  let ans = [];
  
  nums.sort((a,b) => a-b);

  let start = 0;
  let exist = false;
  for(let i = 1; i <= nums.length; i++) {
    while(start < nums.length && nums[start] === i) {
      start++;
      exist = true;
    }
    if(!exist) ans.push(i);
    exist = false;
  }

  return ans;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 * 方法3： 使用“桶思想”和“抽屉原理”
 * 抽屉原理的一般含义为：“如果每个抽屉代表一个集合，每一个苹果就可以
 * 代表一个元素，假如有n+1个元素放到n个集合中去，其中必定有一个集合里
 * 至少有两个元素。”
 * 我们将元素进行交换，达到一个效果是如果存在i, 我们将 i 存放在第i-1个位置；
 * 如果i-1个位置已经有i了，那么就不动。
 * 然后，我们再遍历一遍，来看哪些位置是不符合上述原则的，这些不符合位置就是
 * 我们要的答案。
 * 时间复杂度：O(N), N 是 nums 的大小
 * 空间复杂度: O(1),
 */
var findDisappearedNumbers3 = function(nums) {
  let ans = [];

  for(let i = 0; i < nums.length; i++) {
    while(nums[i] !== i+1 && nums[nums[i]-1] !== nums[i]) {
      swap(nums,nums[i]-1, i);
    }  
  }
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== i+1) ans.push(i+1);
  }
  return ans;

  function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
};


/**
 * @param {number[]} nums
 * @return {number[]}
 * 方法4： 使用“哈希表”的原理来思考，由于题目中的所有元素都是正数，因此我们可以通过数组下标
 * 和负数建立哈希关系，表示元素是否存在
 * 时间复杂度：O(N), N 是 nums 的大小
 * 空间复杂度: O(1)
 */
var findDisappearedNumbers4 = function(nums) {
  let ans = [];

  for(let i = 0; i < nums.length; i++) {
    let newIndex = Math.abs(nums[i]) - 1;
    if(nums[newIndex] > 0) nums[newIndex] = -1 * nums[newIndex];
  }
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 0) ans.push(i+1);
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * 方法5： 同样使用“哈希表”的原理来思考，因此我们可以通过数组下标和下标所指的元素加N来
 * 表示元素是否存在
 * 时间复杂度：O(N), N 是 nums 的大小
 * 空间复杂度: O(1)
 */

var findDisappearedNumbers5 = function(nums) {
  let ans = [];

  for(let i = 0; i < nums.length; i++) {
    let newIndex = (nums[i]- 1) % nums.length;
    nums[newIndex] += nums.length;
  }
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] <= nums.length) ans.push(i+1);
  }
  return ans;
};