/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let res = 0;
    for (let i of accounts){
        let sum =0;
        for(let j of i){
            sum = sum + j
        }
        if(sum>res)
            res=sum
    }
    return res
};
