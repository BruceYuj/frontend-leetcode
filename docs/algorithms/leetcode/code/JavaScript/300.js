/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(!nums.length) return 0;

    let d = new Array(nums.length+1);
    let len = 1;
    d[1] = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > d[len]) {
            len = len+1;
            d[len] = nums[i];
        } else {
            d[binarySearch(d, 1, len, nums[i])] = nums[i];
        }
    }
    return len;

    function binarySearch(arr, lo, hi, target) {
        let left = lo;
        let right = hi+1;

        while(left < right) {
            let mid = left + Math.floor((right-left)/2);
            if(arr[mid] < target) left = mid + 1;
            else right = mid;
        }
        return left;
    }
};