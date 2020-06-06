var minKBitFlips = function(A, K) {
  let ans = 0;
  let queue = [];
  for(let i = 0; i < A.length; i++) {
    if(queue.length && queue[0] <= i - K) queue.shift();
    let len = queue.length;
    if((len+A[i]) % 2 === 0) {
      if(i+K >= A.length) return -1;
      ans++;
      queue.push(i);
    } 
  }
  return ans;
};

console.log(minKBitFlips([0,0,0,1,0,1,1,0], 3));