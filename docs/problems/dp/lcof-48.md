---
title: 面试题48. 最长不含重复字符的子字符串
sidebarDepth: 0
---
## 简介
- [面试题48. 最长不含重复字符的子字符串](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)

## 思路
### 解法一 - 暴力法
1. 枚举所有可能的子字符串
2. 判断每个字符串是否有重复字符，并且根据返回更新最大长度

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(!s) return 0;  
  let ans = 1;
  for(let i = 0; i < s.length; i++) 
    for(let j = i+1; j < s.length; j++) {
      if(isValid(i,j)) ans = Math.max(ans, j-i+1);
    }
  
  return ans;

  function isValid(i, j) {
    let map = {};
    for(let k = i; k <= j; k++) {
      if(map[s[k]]) return false;
      else map[s[k]] = true;
    }
    return true;
  }

};
```

**复杂度分析**:
- 时间复杂度：$O(N^3)$
- 空间复杂度：$O(N)$

### 解法二 - 滑动窗口
滑动窗口可以用来解决这一系列寻找不重复字符的子串问题。
1. 我们不断更新窗口的大小（也就是右边界），不满足条件。在此过程中，不断更新最大值。
2. 不断更新左边界，直到再次满足条件。返回步骤1。

```javascript
var lengthOfLongestSubstring = function(s) {
  if(!s.length) return 0;  
  let window = {};
  let right = 0;
  let left = 0;
  let max = 1;

  while(right < s.length) {
    if(window[s[right]]) {
        while(left < right) {
            if(s[left] === s[right]){
              left++;
              break;
            } 
            else window[s[left++]]--;
        }
        right++;
    } else {
        window[s[right++]] = 1;
        max = Math.max(max, right-left);
    }

  }
  return max;
};
```

**复杂度分析**：
- 时间复杂度： $O(N)$
- 空间复杂度： $O(N)$