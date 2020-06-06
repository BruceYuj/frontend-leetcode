/**
 * 题目链接：https://leetcode-cn.com/problems/count-complete-tree-nodes/
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 解法1： 层次遍历
 * 时间复杂度: O(N)
 * 空间复杂度: O(N) , 迭代写法，因为最后一层最多有 (N+1)/2 个元素
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(!root) return 0;

    let queue = [root];
    let ans = 0;
    while(queue.length) {
      let len = queue.length;

      for(let i = 0; i < len; i++) {
        let top = queue.shift();
        ans++;
        if(top.left) queue.push(top.left);
        if(top.right) queue.push(top.right);
      }
    }
    return ans;
};

/**
 * 解法2：DFS+完全二叉树的定义+分治法
 * 根据完全二叉树的定义，我们知道root的左子树高度 H_left
 * 等于右子树高度 H_right 或者 等于 H_right+1 
 * 1. 如果 H_left = H_right, 那么左子树是满二叉树，则
 *    f(root) = f(root.left) + 1 + f(root.right) = 2^(H_left+1) + f(root.right);
 * 时间复杂度: O(logN * logN)
 * 空间复杂度: O(logN)
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if(!root) return 0;
  let ans = 0;
  let leftHeight = treeHeight(root.left);
  let rightHeight = treeHeight(root.right);
  if(leftHeight === rightHeight) {
    ans = Math.pow(2, leftHeight+1) + countNodes(root.right);
  } else {
    ans = Math.pow(2, rightHeight+1) + countNodes(root.left);
  }
  return ans;

  function treeHeight(root) {
    if(!root) return -1;
    let height = 0;
    while(root && root.left){
      root = root.left;
      height++;
    }
    return height;
  }  
};