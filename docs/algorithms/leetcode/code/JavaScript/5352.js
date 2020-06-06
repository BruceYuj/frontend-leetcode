var numberOfSubstrings = function(s) {
  let window = {};
  let needs = {
      a: 1,
      b: 1,
      c: 1
  }

  let end = 0;
  let start = 0;
  let count = 0;
  let ans = 0;

  while(end < s.length) {
      if(count < 3) {
          if(window[s[end]]) window[s[end++]]++;
          else {
              window[s[end++]] = 1;
              count++;
          }
          continue;
      }

      while(start < end) {
          ans += s.length - end+1;
          window[s[start]]--;
          if(window[s[start++]] === 0) {
              count--;
              break;
          }
      }
  }
  if(count === 3) ans++;

  return ans;
};

numberOfSubstrings('aaacb');