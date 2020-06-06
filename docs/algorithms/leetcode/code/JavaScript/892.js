/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    if(!grid.length || !grid[0].length) return 0;
    let sum = 0;
    let n = grid.length;
    let m = grid[0].length;

    sum += 2*n*m;

    for(let i = 0; i < n; i++)
        for(let j = 0; j < m; j++) {
            let front = 0;
            let back = 0;
            let left = 0;
            let right = 0;
            if(i - 1 < 0) front  = grid[i][j];
            else if(grid[i][j] > grid[i-1][j]) front = grid[i][j] - grid[i-1][j];

            if(i+1 >= n) back = grid[i][j];
            else if(grid[i][j] > grid[i+1][j]) back = grid[i][j] - grid[i+1][j];

            if(j - 1 < 0) left = grid[i][j];
            else if(grid[i][j] > grid[i][j-1]) left = grid[i][j] - grid[i][j-1];

            if(j + 1 >= m) right = grid[i][j];
            else if(grid[i][j] - grid[i][j+1]) right = grid[i][j] - grid[i][j+1];

            sum += front + back + left + right;
        }
    
    return sum;
};

console.log(surfaceArea([[1,2],[3,4]]));