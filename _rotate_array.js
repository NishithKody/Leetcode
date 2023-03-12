/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    let reverse = (s,e)=>{

        while(s<e){
            let temp = nums[s]
            nums[s]=nums[e]
            nums[e] = temp

            s++;
            e--;
        }
    }

    if(nums.length==1)
        return nums
    
    k = k % nums.length
    

    reverse(0,nums.length-1)
    reverse(0,k-1)
    reverse(k,nums.length-1)
    // console.log(nums)
    
    return nums
    


};
