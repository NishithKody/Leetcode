/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    let res = []
    if(root == null)
        return []
    
    util(root, res)
    
    return res
};

let util = (node, res) =>{
    
    
    res.push(node.val)
    
    if(node.children.lenght==0)
        return
    else{
        for(let i of node.children){
            util(i,res)
        }
    }
}
