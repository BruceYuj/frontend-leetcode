/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let left = 0;
  let right = 0;
  let maxCount = 0;
  let count = new Array(26).fill(0);

  while(right < s.length) {
    count[s.charCodeAt(right) - 65]++;
    maxCount = Math.max(maxCount, count[s.charCodeAt(right) - 65]);
    right++;

    if(right-left-maxCount > k) {
      count[s.charCodeAt(left) - 65]--;
      left++;
    }
  }
  return right-left;
};

console.log(characterReplacement("AABABBA", 0));