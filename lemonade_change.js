/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    
    let five = 0;
    let ten =0;
    let twty = 0;
    
    for(let i of bills){
        let temp = i;
        if(i==5){
            five++;
            continue;
        }
        else if (i == 10){
            ten++;
            if(five<1)
                return false;
            else
                five--;
        }
        else{
            if(ten>0){
                ten--;
                if(five>=1){
                    five--;
                }
                else{
                    return false
                }
            }
            else if(five >=3){
                five = five -3
            }
            else{
                return false;
            }
        }
        console.log('five',five)
        console.log('ten',ten)
        
        
    }
    return true;
    
};
