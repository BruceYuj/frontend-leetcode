/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let map = {};
    let map1 = {};

    for(let i = 0; i < connections.length; i++) {
        let direction = connections[i];

        if(map[direction[0]]) map[direction[0]].push(direction[1]);
        else map[direction[0]] = [direction[1]];

        if(map1[direction[1]]) map1[direction[1]].push(direction[0]);
        else map1[direction[1]] = [direction[0]];
    }

    let helper = new Array(n).fill(false);
    helper[0] = true;

    let queue = [];

    for(let i = 0; i < map[0].length; i++) {
        queue.push([map[0][i], true]);
    }

    let ans = 0;
    
    bfs(queue);

    function bfs(queue) {
        while(queue.length) {
            let len = queue.length;
    
            for(let i = 0; i < len; i++) {
                let top = queue.shift();
                if(helper[top[0]]) continue;

                if([top][1]) {
                    ans++;
                    helper[top[0]] = true;
                    for(let i = 0; i < map2[top[0]].length; i++) {
                        helper[map2[top[0]][i]] = true;
                        queue.push([map2[top[0]][i], false]);
                    }
                }
            }
        }

        return ans;
    }

};