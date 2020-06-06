/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let map = {};
    let ans = '';
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]]) map[s[i]]++;
        else map[s[i]] = 1;
    }

    let helper = s.split("").sort();
    let helper2 = new Set(helper);
    let i = 0;
    let count = 0;

    while(count < s.length) {
        let tmp = '';
        for(let elem of helper2) {
            
            if(i%2 === 0) {
                if(map[elem]) {
                    tmp = tmp + elem;
                }
            } else {
                if(map[elem]) {
                    tmp = elem + tmp;
                }
            }
            map[elem]--;
            count++;
        }

        ans = ans + tmp;
        i++;
    }

    return ans;
};

sortString("leetcode");