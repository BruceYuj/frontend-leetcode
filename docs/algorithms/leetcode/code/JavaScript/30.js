/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if(!words.length || !s.length) return [];
    let ans = [];
    let wordMap = {};
    let len = words.length;
    let wordLen = words[0].length;
    for(let i = 0; i < words.length; i++) {
      if(wordMap[words[i]]) wordMap[words[i]]++;
      else wordMap[words[i]] = 1;
    } 

    let end = s.length - len*wordLen;
    for(let i = 0; i <= end; i++) {
      if(isValid(i)) ans.push(i);
    }
    return ans;

    function isValid(index) {
      let helper = {};
      for(let i = 0; i < len; i++) {
        let start = index + wordLen * i;
        let word = s.slice(start, start+wordLen);
        if(helper[word]) helper[word]++;
        else helper[word] = 1;
        if(!wordMap[word] || helper[word] > wordMap[word]) return false;
      }

      return true;
    }
};

var findSubstring = function(s, words) {
  if(!words.length || !s.length) return [];
  let ans = [];
  let wordMap = {};
  let wordLen = words[0].length;
  let difference = 0;
  for(let i = 0; i < words.length; i++) {
    if(wordMap[words[i]]) wordMap[words[i]]++;
    else{
      difference++;
      wordMap[words[i]] = 1;
    }
  } 

  for(let i = 0; i < wordLen; i++) {
    let left = i;
    let right = i;
    let helper = {};
    let count = 0;
    while (right+wordLen <= s.length) {
      let word = s.slice(right, right+wordLen);
      if(helper[word]) helper[word]++;
      else helper[word] = 1;
      if(helper[word] === wordMap[word]) count++;

      if(!wordMap[word]) {
        right = right+wordLen;
        left = right;
        helper = {};
        count = 0;
        continue;
      }
      while(wordMap[word] < helper[word]) {
        let leftWord = s.slice(left, left+wordLen);
        helper[leftWord]--;
        if(helper[leftWord] === wordMap[leftWord] - 1) count--;
        left = left + wordLen;
      }
      if(count === difference) ans.push(left);
      right = right+wordLen;
    }
  }

  return ans;
};