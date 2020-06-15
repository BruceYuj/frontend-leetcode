---
title: 面试题40. 最小的k个数
sidebarDepth: 0
---
## 简介
- [面试题40. 最小的k个数](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)


## 解法一 - 暴力法
找最小的 K 个数就是寻找数组中的有序性，因此我们可以将数组先排序然后再输出。

```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    let ans = [];
    arr.sort((a,b) => a-b);

    for(let i = 0; i < k; i++) {
        ans.push(arr[i]);
    }

    return ans;
};
```
**复杂度分析**:
- 时间复杂度：$O(NlogN)$
- 空间复杂度：看库函数实际实现

## 解法二 - 堆
1. 先将数组前 k 个数建立大顶堆
2. 从第 k+1 个元素开始遍历，设为 elem
   - 如果 elem 大于等于堆顶元素，跳过该元素
   - 否则，抛出堆顶元素，然后将 elem 加入到堆中
3. 遍历结束后，大顶堆中的所有元素即是答案

```python
class Solution:
    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
        # heapq 内部实现是最小堆，因此我们将数组乘以-1，由最小 k 个变成求最大 k 个
        import heapq
        if k <= 0: return []
        heap =[-arr[i] for i in range(k)]
        heapq.heapify(heap)
        for i in range(k, len(arr)):
            if -arr[i] >= heap[0]:
                heapq.heappop(heap)
                heapq.heappush(heap, -arr[i])
        
        return [-heap[i] for i in range(k)]
```

## 解法三 - 快速选择
使用 hoare quick select 算法，在实际中性能非常好。使用 quick select 算法获得第 k+1 小元素的位置，该位置的右边就是答案。

partition 子过程：
1. lomuto partition
```javascript
function randomRange(min, max) {
    return Math.floor(Math.random()*(max-min)) + min;
}

function partition(arr, lo, hi) {
    randomPos = randomRange(lo, hi);
    pivot = arr[randomPos];
    [arr[randomPos], arr[hi]] = [arr[hi], arr[randomPos]];

    let i = lo;
    for(let j = lo; j < hi; j++) {
        if(arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[hi]] = [arr[hi], arr[i]];
    return i;
}
```

```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    select(0, arr.length-1, k);
    return arr.slice(0, k);

    function select(left, right, k) {
        if(left === right) return left;
        randomPos = partition(arr, left, right);
        if (k === randomPos) return k;
        else if (k < randomPos) return select(left, randomPos-1, k);
        else return select(randomPos+1, right, k); 
    }
    function randomRange(min, max) {
        return Math.floor(Math.random()*(max-min)) + min;
    }

    function partition(arr, lo, hi) {
        randomPos = randomRange(lo, hi+1);
        pivot = arr[randomPos];
        [arr[randomPos], arr[hi]] = [arr[hi], arr[randomPos]];

        let i = lo;
        for(let j = lo; j < hi; j++) {
            if(arr[j] < pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }
        [arr[i], arr[hi]] = [arr[hi], arr[i]];
        return i;
    }
};

```

这里的 lomuto partition 可以换成 hoare partition，性能更好：
```javascript
    function partition(arr, lo, hi) {
        randomPos = randomRange(lo, hi+1);
        pivot = arr[randomPos];
        [arr[lo], arr[randomPos]] = [arr[randomPos], arr[lo]];
        let i = lo;
        let j = hi+1;
        while(true) {
            while(arr[++i] < pivot) {
                if(i === hi) break;
            }
            while(arr[--j] > pivot) {
                if( j === lo) break;
            }
            
            if (i >= j) break;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        [arr[lo], arr[j]] = [arr[j], arr[lo]];
        return j;
    }
```
**复杂度分析**:
- 时间复杂度：最好情况为 $O(N)$，最坏情况为 $O(N^2)$
- 空间复杂度：最好是 $O(logN)$，最坏是 $O(N)$

## 解法四 - 计数排序
因为数组元素值的范围在 $[0, 10000]$，因此我们可以申请一个大小为 10001 的数组用来统计数组 arr 中元素出现的次数。

```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if(k <= 0) return [];

    let count = new Array(10001).fill(0);
    let ans = [];
    for(let i = 0; i < arr.length; i++) count[arr[i]]++;
    
    let i = 0;
    let j = 0;
    while(j < 10001) {
        while(count[j] > 0) {
            ans.push(j);
            count[j]--;
            i++;
            if(i === k) return ans;
        }
        j++;
    }
};
```
