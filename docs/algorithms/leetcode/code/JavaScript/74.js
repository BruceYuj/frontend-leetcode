/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length || !matrix[0].length) return false;

    let m = matrix.length;
    let n = matrix[0].length;

    let left = 0;
    let right = m * n;

    while(left < right) {
        let mid = left + Math.floor((right-left)/2);
        let row = Math.floor(mid/n);
        let col = mid % n;
        if(matrix[row][col] < target) left = mid+1;
        else right = mid;
    }
    return left !== m*n && matrix[Math.floor(left/n)][left % n] === target;
};