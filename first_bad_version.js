/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    // 1 2 3 4 5 6 6 7 8 8 
    return function(n) {
        
        let start =1;
        let end = n;
        let res = []
        let index =-1
        
        while(start<=end){
            let middle = Math.floor((start+end)/2);
            
            if(isBadVersion(middle)){
                res.push(middle)
                end = middle -1;
            }
            else{
                start = middle +1
            }
        }
        res.sort()
        return res[0];
        
    };
};
