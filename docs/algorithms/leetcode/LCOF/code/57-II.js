var findContinuousSequence = function(target) {

    let left = 1;
    let right = 1;
    let ans = [];
    let count = 0;
    let window = [];

    while(right < target) {
        count += right;
        window.push(right);
        right++;
        
        while(count > target) {
            window.shift();
            count -= left;
            left++;
        }
        if(count === target) ans.push(window.slice());
    }
    return ans;
};

findContinuousSequence(9);