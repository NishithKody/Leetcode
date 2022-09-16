/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slw = head;
    let fst = head;
    while( fst.next!= null ){
        slw = slw.next;
        fst = fst.next;
        if(fst.next != null)
            fst = fst.next;
    }
    
    return slw;
};
