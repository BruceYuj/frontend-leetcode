var closestDivisors = function(num) {
  let ans = num+1;
  let helper = num+1;
  let n = Math.floor(Math.sqrt(helper));
  for(let i = 2; i <= n; i++) {
      if(helper % i === 0) ans = Math.min(ans, Math.abs(helper/i - i));
  }
  helper++;
  n = Math.floor(Math.sqrt(helper));
  for(let i = 2; i <= n; i++) {
      if(helper % i === 0) ans = Math.min(ans, Math.abs(helper/i - i));
  } 
  return ans;
};

closestDivisors(8);