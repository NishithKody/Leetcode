/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {

  let map = new Map();
    
    let set = []
    
  for(let i of nums){
      if(!map.has(i) && i%2==0){
          map.set(i,1)
      }
      else{
          map.set(i,map.get(i)+1)
      }
  }
  console.log('map',map)
 
    let freq = 0;

  for(let j of map){
      if(j[1] == freq){
          set.push(parseInt(j[0]))
      }
      if(j[1]>freq){
          freq = j[1];
          set = []
          set.push(parseInt(j[0]));
      }
  }

    set.sort(function(a,b){
        
        return a-b
    })

    let res = set[0]
    if(set.length==0)
        return -1
  
    return res
    
};
