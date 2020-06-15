---
title: 面试题 17.16. 按摩师
sidebarDepth: 0
---
## 简介
- [面试题 17.16. 按摩师](https://leetcode-cn.com/problems/the-masseuse-lcci/)

同[198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)

## 解法一 - 动态规划 - 自顶向下

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    let memo = new Array(nums.length).fill(-1);

    return helper(0);
    
    function helper(i) {
        if( i >= nums.length) return 0;
        if(memo[i] !== -1) return memo[i];

        memo[i] = Math.max(helper(i+1), nums[i] + helper(i+2));

        return memo[i];
    }
};
```

**复杂度分析**:
- 时间复杂度： $O(N)$，$N$ 是数组长度
- 空间复杂度： $O(N)$

## 解法二 - 动态规划-自底向上

```javascript
var massage = function(nums) {
    if(!nums.length) return 0;
    let dp = new Array(nums.length+1).fill(0);

    dp[nums.length-1] = nums[nums.length-1];

    for(let i = nums.length - 2; i >= 0; i--) {
        dp[i] = Math.max(dp[i+1], dp[i+2] + nums[i]);
    }
    
    return dp[0];
};
```


**复杂度分析**:
- 时间复杂度： $O(N)$，$N$ 是数组长度
- 空间复杂度： $O(N)$

**空间优化**：
状态 $dp[i]$ 只依赖于 $dp[i+1]$ 和 $dp[i+2]$
```javascript
var massage = function(nums) {
    let dp_1 = 0;
    let dp_2 = 0;

    for(let i = nums.length - 1; i >= 0; i--) {
        let tmp = dp_1;
        dp_1 = Math.max(dp_1, nums[i] + dp_2);
        dp_2 = tmp;
    }
    
    return dp_1;
};
```
**复杂度分析**:
- 时间复杂度： $O(N)$，$N$ 是数组长度
- 空间复杂度： $O(1)$