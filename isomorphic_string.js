/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    let map = new Map()
    let set = new Set()
    
    if(s.length != t.length)
        return false;
    
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){
            if(map.get(s[i]) != t[i])
                return false;
        }
        else{
            if(set.has(t[i]))
                return false
            map.set(s[i], t[i])
            set.add(t[i])
        }
    }
        
    return true
    
};
