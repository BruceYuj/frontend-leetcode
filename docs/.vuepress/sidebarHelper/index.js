var {dp} = require('./components/dp.js')
var {greedy} = require('./components/greedy.js')
var {backtrack} = require('./components/backtrack.js')
var {bitOperation} = require('./components/bitOperation.js')
var {math} = require('./components/math.js')
var {slidingWindow} = require('./components/sliding-window.js')
var {dataStructure} = require('./components/data-structure.js')
var {search} = require('./components/DFS-BFS.js')
var {divideConquer} = require('./components/divide-and-conquer.js')
var {graph} = require('./components/graph.js')
var {others} = require('./components/others.js')
var {sort} = require('./components/sort.js')
var {twoPointers} = require('./components/two-pointers.js')

module.exports = {
  sidebars: [
    dp,
    greedy,
    divideConquer,
    backtrack,
    bitOperation,
    math,
    slidingWindow,
    dataStructure,
    search,
    sort,
    twoPointers,
    graph,
    others
  ]
}