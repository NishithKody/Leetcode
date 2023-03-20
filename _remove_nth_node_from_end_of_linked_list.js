/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let fst = head
    let slw = head
    for(let i=0;i<n;i++)
        fst = fst.next;

    if(!fst)
        return head.next

    
    while(fst.next){
        fst = fst.next
        slw = slw.next

    }
    slw.next= slw.next.next
    return head
    
};
