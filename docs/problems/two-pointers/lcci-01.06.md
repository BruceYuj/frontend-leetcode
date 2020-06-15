---
title: 面试题 01.06. 字符串压缩
sidebarDepth: 0
--- 
 
 
## 简介
- [面试题 01.06. 字符串压缩](https://leetcode-cn.com/problems/compress-string-lcci/)


## 解法一 - 双指针
统计相邻字符的重复，我们可以使用双指针技巧。
1. 假设两个指针 slow, fast，初始时都指向位置 0。
2. 如果 $S[fast+1] = S[fast]$，那么 $fast = fast+1$，重复第 2 步；如果不等，进入第三步
3. $[slow, fast]$ 区间里面就是相邻重复字符，将该区间拼接到答案上。
4. 比较答案和原始长度返回

```javascript
/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    if(!S.length) return S;
    let slow = 0;
    let fast = 0;
    let ans = '';
    while(fast < S.length) {
        if(fast < S.length-1 && S[fast+1] == S[fast]) {
            fast++;
            continue;
        }
        ans += S[slow] + (fast-slow+1);
        fast++;
        slow = fast;
    }
    if(ans.length >= S.length) return S;

    return ans;
};
```

**复杂度分析**:
- 时间复杂度： $O(N)$, $N$ 是字符串长度
- 空间复杂度： $O(N)$， 答案的空间