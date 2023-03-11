/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let j =0;

    for(let i of nums){
        if(i==0)
            continue;
        
        nums[j]=i
        j++;
    }
    while(j<nums.length)
    {
        nums[j]=0
        j++;
    }

    
};
