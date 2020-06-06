/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(!s.length) return 0;  
  let window = {};
  let right = 0;
  let left = 0;
  let max = 1;

  while(right < s.length) {
    if(window[s[right]]) {
        while(left < right) {
            if(s[left] === s[right]){
              left++;
              break;
            } 
            else window[s[left++]]--;
        }
        right++;
    } else {
        window[s[right++]] = 1;
        max = Math.max(max, right-left);
    }

  }
  return max;
};
lengthOfLongestSubstring("pwwkew");