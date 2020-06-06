  /**
   * 解法二：暴力法改进
   * @param {number[]} prices
   * @return {number}
   */
  var maxProfit = function(prices) {
    let n = prices.length;
    if(n <= 1) return 0;
    let memo = new Array(n).fill(-1);
  
    return helper(prices, 0);
  
    function helper(arr, start) {
      if(start >= n-1) return 0;
      if(memo[start] !== -1) return memo[start];
  
      let profit = 0;
      for(let i = start; i < n-1; i++) {
        for(let j = i+1; j < n; j++) {
          if(arr[j] > arr[i]) {
            profit = Math.max(profit, arr[j] - arr[i] + helper(arr, j+1));
          }
        }
      }
      memo[start] = profit;
      return memo[start];
    }
  }

maxProfit([7,1,5,3,6,4]);