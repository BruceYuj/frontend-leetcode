/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  let map = new Map();
  for(let i = 0; i < N; i++) {
      if(map.has(cells.join(''))) {
          cells = map.get(cells);
          continue;
      }
      let helper = [...cells];
      helper[0] = 0;
      helper[helper.length-1] = 0;
      for(let j = 1; j < helper.length-1; j++) {
          if(cells[j-1] === cells[j+1]) helper[j] = 1;
          else helper[j] = 0;
      }
      map.set(cells.join(''), helper.slice(0));
      cells = helper.slice(0);
  }

  return cells;
};

prisonAfterNDays([0,1,0,1,1,0,0,1],1000000000)