**文本更新于 2020年05月29日 12:18:59**
## 线段树
segment tree 是一种 tree data structure，被用于存储 segment 的信息，允许快速查询结构内包含某一点的所有区间。

对于一个包含 $n$ 个区间的线段树，空间复杂度为 $O(n)$，查询的时间复杂度为 $O(logn+ K)$, $K$ 是符合条件的区间数量。

线段树可以推广到高维度。


常见的应用：
1. 区间求和查询
2. 区间最小值或最大值的查询
3. 区间异或值的查询

### 实现原理
我们可以通过一个 **完全二叉树** 来存储每一个区间的数据。同时这个二叉树使用数组来存储（和堆的实现方式相同）。

假设，一个长度 $n$ 的数组 $arr$, 则其对应的线段树 $T$ 的各个节点含义如下：
1. $T$ 的根节点表示整个数组区间信息
2. $T$ 的叶子节点对应数组单个元素代表的区间信息
3. $T$ 的中间节点存储某一区间的 $arr[i..j]$ 的区间信息

通常线段树支持两种操作：
1. update: 更新数组中的元素并更新线段树
2. query: 查询某一区间的对应信息

#### 线段树的初始化
初始化自底向上进行。从每一个叶子节点，向上构建。
**这里需要注意，我们从下标 1 开始，下标 0 舍弃。因此对于数组中任意结点 $i$， 左子结点为 $2i$, 右子节点为 $2i+1$**

```
procedure construction(arr)
  n <- length of arr
  data <- array of length 2 * n
  copy arr to second half of data

  for idx = n-1 ... 1 do
    data[idx] <- min(data[2*idx], data[2*idx+1])
```

#### 线段树的更新
```
procedure update(idx, value) 
  idx <- idx + n
  data[idx] <- value

  while idx > 1 do
    idx <- idx/2
    data[idx] = min(data[2*idx], data[2*idx+1])
```

#### 线段树的查询
区间查询大体上可以分为3种情况讨论：
1. 当前结点所代表的区间完全位于给定需要被查询的区间之外，则不应考虑当前结点
2. 当前结点所代表的区间完全位于给定需要被查询的区间之内，则可以直接查看当前结点的母结点
3. 当前结点所代表的区间部分位于需要被查询的区间之内，部分位于其外，则我们先考虑位于区间外的部分，后考虑区间内的（注意总有可能找到完全位于区间内的结点，因为叶子结点的区间长度为1，因此我们总能组合出合适的区间）

```
procedure minmum(left, right) 
  left <- left + n, right <- right + n
  minmum <- infinity

  while left <= right do
    if left is odd then // left is out of range of parent interval, check value of left node first, then shift it right in the same level
      minimum <- min(minimum, data[left])
      left <- left+1

    if right is even then // right is out of range of current interval, shift it left in the same level and then check the value
      minimum <- min(minimum, data[right])
      right <- right-1

    left <- left/2, right <- right/2

  return minimum
```

#### 数组长度不是 2 的次方怎么办
本解法仍然适用。

## reference
1. [youtube, segment tree](https://www.youtube.com/watch?v=Oq2E2yGadnU)
2. [wiki, segment tree](https://en.wikipedia.org/wiki/Segment_tree)
3. [线段树](https://blog.csdn.net/Yaokai_AssultMaster/article/details/79599809)
4. [Python, segmentTree](https://github.com/jakobkogler/Algorithm-DataStructures/blob/master/RangeQuery/SegmentTree.py)
