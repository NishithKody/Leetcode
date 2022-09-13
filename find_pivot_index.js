/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  
    let rsum = 0;
    for (let i of nums){
        rsum = rsum + i;
    }
    rsum = rsum - nums[0];
    let index = -1;
    let lsum = 0;
    if(lsum != rsum){
        for (let i = 1; i<=nums.length; i++){
        lsum = lsum + nums[i-1];
        rsum = rsum - nums[i];
        if(lsum == rsum ){
            index = i;
            break;
        }
    }
    }
    else{
        index = 0
    }
    
    return index
};
