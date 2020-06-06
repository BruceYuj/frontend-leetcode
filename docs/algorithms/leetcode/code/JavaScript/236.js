var lowestCommonAncestor = function(root, p, q) {
  var pathP = [];
  var pathQ = [];
  dfs(root, p, [], pathP);
  dfs(root, q, [], pathQ);

  let len = Math.min(pathP.length, pathQ.length);
  for(let i = 0; i < len; i++) {
      if(pathP[i].val === pathQ[i].val) continue;
      else {
          return pathP[i-1];
      }
  }
  function dfs(root, node, path, record) {
    if(!root) return false;
    if(root.val === node.val) {
        path.push(root);
        for(let i = 0; i < path.length; i++) record.push(path[i]);
        return true;
    }
    path.push(root);

    let left = dfs(root.left, node, path, record);
    if(left) return true;
    let right = dfs(root.right, node, path, record);
    if(right) return true;
    path.pop();
    return false;
  }
};

let root = buildTreeFromArr([3,5,1,6,2,0,8,null,null,7,4]);

let ans = lowestCommonAncestor(root, new TreeNode(5), new TreeNode(1));
console.log(ans);