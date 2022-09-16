/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(s.length==1)
        return 1
    if(s.length==0)
        return 0
    
    let res =0;
    
    let map = new Map()
    
    for(let i of s){
        if(map.has(i)){
            map.set(i, map.get(i)+1)
        }
        else{
            map.set(i,1)          
        }
    }
    
    let flag = 0;
    for(let j of map){
        if(j[1]%2 == 0){
            let factor = j[1]/2;
            res = res + 2 * factor; 
        }
        else{
            flag = 1;

            let factor = Math.floor(j[1]/2);
            res = res + 2 * factor; 
        }
    }
    if(flag==1){
        res=res+1
    }
    return res;
    
};
