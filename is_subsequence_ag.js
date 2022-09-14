/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let ptr1 = 0;
    let ptr2 = 0;
    
    if(t.length == 0 && s.length!=0){
        return false
    }
    if(s.length ==0){
        return true
    }
    
    while(ptr1<s.length && ptr2<t.length){
        if(s[ptr1] == t[ptr2]){
            ptr1 = ptr1 + 1;
            ptr2 = ptr2 + 1;
        }
        else{
            while(ptr2<t.length){
                console.log('ptr2 '+ptr2)
                ptr2 = ptr2 + 1
                if(s[ptr1]==t[ptr2]){
                    ptr1 = ptr1 + 1;
                    ptr2 = ptr2 + 1;
                    break;
                }
            }

        }
        
    }
    console.log('ptr1 '+ptr1)
    console.log('ptr2 '+ptr2)
        if(ptr1<=s.length-1 && ptr2==t.length){
            return false
        }
    return true
};
