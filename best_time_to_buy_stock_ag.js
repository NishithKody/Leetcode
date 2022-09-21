/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    let index =0
    
    for(let i =1; i<prices.length; i++){
        let temp = prices[i] - prices[index]
        if(temp > profit )
            profit = temp;
        
        if(prices[i] < prices[index])
            index = i
    }
    return profit
};
