/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map = new Map()

    let map2 = new Map()

    let mapCheck = (map1,map2)=>{

        for(let i of map1){
            if(map2.get(i[0])!=i[1])
                return false
        }
        return true
    }

    for(let i of s1){
        map.set(i,map.get(i)+1 || 1)
    }

    for(let i = 0; i<s1.length; i++){
        map2.set(s2[i],map2.get(s2[i])+1 || 1)
    }

    if(mapCheck(map,map2)){
        return true
    }

    // console.log('map1',map)
    // console.log('map2',map2)
    
    let len = s1.length

    for(let i = 0; i<s2.length; i++){
        let pv = s2[i]
        let nv = s2[len]

        map2.set(pv, map2.get(pv)-1)
        map2.set(nv, map2.get(nv)+1 || 1)

        if(mapCheck(map,map2)){
            return true
        }

        len++;

       
    }

    return false
    
};
