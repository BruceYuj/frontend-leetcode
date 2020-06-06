var maxAreaOfIsland = function(grid) {

    if(!grid.length || !grid[0].length) return 0;

    let m = grid.length;
    let n = grid[0].length;
    let max = 0;
    let count = 0;

    for(let i = 0; i < m; i++)
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                count = 0;
                dfs(i, j);
                max = Math.max(max, count);
            }
        }
    
    return max;
    
    function dfs(i, j) {
        grid[i][j] = 0;
        count++;

        if(i+1 < m && grid[i+1][j] === 1)dfs(i+1, j);      
        if(i-1 >= 0 && grid[i-1][j] === 1)dfs(i-1, j);      
        if(j+1 < n && grid[i][j+1] === 1)dfs(i, j+1);        
        if(j-1 >= 0 && grid[i][j-1] === 1)dfs(i, j-1);

    }
};

console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]));