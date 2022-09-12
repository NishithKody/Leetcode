//https://leetcode.com/problems/running-sum-of-1d-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res = [];
    let temp = 0;
    for(let i=0 ; i<nums.length; i++) {
        if(i==0){
            res.push(nums[i]);
            temp = temp + nums[i];
        }
        else{
            temp = temp + nums[i];
            res.push(temp)
        }
        
    }
    return res
};
