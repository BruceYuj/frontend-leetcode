 
 
 
## Quicksort
Quicksort 在所有的排序算法当中，可能是被运用最广泛的。它有以下几个特点：
- 不难实现
- 对于不同的input数据都能够工作的很好
- 在传统的应用的当中，比其他的排序算法都要快

Quicksort的平均时间复杂度$O(NlogN)$, 空间复杂度为常数级别，属于in-place排序算法。

Quicksort属于经典的divide-and-conquer思想应用。它将一个数组partition为两个子数组，然后再分别对两个子数组进行排序。
quicksort和mergesort在思想上是互补的：
对于mergesort，我们先将数组分割为两个子数组，然后分别对两个子数组排序，然后再将两个有序的子数组进行合并操作来达到整个数组的有序。
而对于quicksort来讲，当两个子数组都有序，则整个数组有序。

```javascript
class Quick {
  constructor(data) {
    this.data = data;
    this.length = data.length;
  }
  sort() {
    Array.shuffle(this.data); // 自己hack, 减少由于input导致的不确定性
    this.quickSort(0, this.length-1);
  }
  quickSort(lo, hi) {
    if(hi <= lo) return;
    let j = this.partition(lo, hi);
    this.quickSort(lo, j-1);
    this.quickSort(j+1, hi);
  }
  partition(lo, hi) {
    
  }
}

```
