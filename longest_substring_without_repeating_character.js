/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) 
{
    let set = new Set()

    let l =0;
    let r=0;

    let len=0;


    while(r<s.length){
        let val = s[r]
        
        while(set.has(val)){
            let lval = s[l]
            set.delete(lval)
            l++
        }

        set.add(val)
        if(r-l+1 > len)
            len=r-l+1;
        
        r++;

    }

    return len

};
