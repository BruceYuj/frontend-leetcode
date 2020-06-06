/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    let ans = false;
    let headStr = "";

    while(head){
        headStr = headStr +  head.val;
        head = head.next;
    }

    dfs(root, [root]);

    return ans;

    function isValid(path) {
        let pathStr = path.map(elem => elem.val).join("");
        return pathStr.indexOf(headStr) !== -1;
    }

    function dfs(root, path) {
        if(!root) return false;
        if(!root.left && !root.right) {
            let tmp = isValid(path);
            if(tmp) ans = tmp;
            return;
        }

        if(root.left) dfs(root.left, [...path, root.left]);
        if(root.right) dfs(root.right, [...path, root.right]);
        path.pop();
    }

};