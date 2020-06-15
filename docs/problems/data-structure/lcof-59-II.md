---
title: 面试题59 - II. 面试题59 - II. 队列的最大值
sidebarDepth: 0
autoGroup-4: 队列
---
## 简介
-[面试题59 - II. 面试题59 - II. 队列的最大值](https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/)

## 思路
### 解法一 - 双向队列+单调队列
维护两个队列，一个保存原有值，一个是单调递减队列。
单调队列可以在 $O(1)$ 时间获取最大值。

```javascript
var MaxQueue = function() {
    this.arr = [];
    this.origin = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.arr.length) return this.arr[0];
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    while(this.arr.length && value > this.arr[this.arr.length-1]) this.arr.pop();
    this.arr.push(value);
    this.origin.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(!this.origin.length) return -1;

    let elem = this.origin.shift();
    if(elem === this.max_value()) this.arr.shift();

    return elem;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```

**复杂度分析**:
- 时间复杂度：均摊复杂度都为 $O(1)$
- 空间复杂度：$O(N)$