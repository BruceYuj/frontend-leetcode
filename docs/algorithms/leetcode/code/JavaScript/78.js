/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let needs = {};
  let window = {};
  let left = 0;
  let right = 0;
  let count = 0;
  let needCount = 0;
  let min = s.length+1;
  let ans = -1;

  for(let i = 0; i < t.length; i++) {
    if(needs[t[i]]) needs[t[i]]++;
    else {
      needs[t[i]] = 1;
      needCount++;
    }
  }

  while(right < s.length) {
    if(window[s[right]]) {
      window[s[right]]++;
    } else {
      window[s[right]] = 1;
    }

    if(window[s[right]] === needs[s[right]]) {
      count++;
    }

    while(count === needCount) {
      if(right-left+1 < min) {
        min = right-left+1;
        ans = left;
      }
      window[s[left]]--;
      if(window[s[left]] === needs[s[left]]-1) count--;
      left++;
    }
    right++;
  }

  return ans === -1 ? '' : s.slice(ans, ans+min);
};

