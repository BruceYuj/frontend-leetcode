/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    let map = {};
    let ans = votes[0].split("");
    let len = votes[0].length;
    for(let i = 0; i < votes.length; i++) {
        for(let j = 0; j < len; j++) {
            let team =votes[i][j];
            if(map[team]) map[team][j]++;
            else  {
                map[team] = new Array(len).fill(0);
                map[team][j]++;
            }
        }
    }

    ans.sort((a, b) => {
        for(let i = 0; i < len; i++) {
            if(map[a][i] > map[b][i]) return -1;
            else if(map[a][i] < map[b][i]) return 1;
        }
        if(a < b) return -1;
        else return 1;
    })

    return ans.join("");
};

rankTeams(["WXYZ","XYZW"]);