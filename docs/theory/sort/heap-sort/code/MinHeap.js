
function MinHeap() {
  this.count = 0;
  this.arr = new Array(capacity+1);
}

MinHeap.prototype.add = function(v) {
  this.arr[++this.count] = v;
  this.swim(this.count);
}

MinHeap.prototype.delMin = function() {
  let min = this.arr[1];
  this.exchange(1, this.count--);
  this.arr[this.count+1] = undefined;
  this.sink(1);
  return min;
}

MinHeap.prototype.isEmpty = function() {
  return this.count === 0;
}

MinHeap.prototype.size = function() {
  return this.count;
}

MinHeap.prototype.sink = function (k) {
  while(2*k <= this.count) {
    let left = 2*k;
    if(left < this.count && this.less(left, left+1)) left++;
    if(!this.less(k, left)) break;
    this.exchange(k, left);
    k = left;   
  }
}

MinHeap.prototype.swim = function (k) {
  while(k > 1 && this.less(Math.floor(k/2), k)) {
    this.exchange(Math.floor(k/2), k);
    k = Math.floor(k/2);
  }
}


MinHeap.prototype.exchange = function (i, j) {
  let tmp = this.arr[i];
  this.arr[i] = this.arr[j];
  this.arr[j] = tmp;
}

MinHeap.prototype.less = function ( i, j) {
  return this.arr[i] > this.arr[j];
}