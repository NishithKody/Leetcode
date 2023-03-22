function letterCasePermutation(s: string): string[] {
    let res = []
    let arr = []
    
    let charCheck=(val)=>{
        return (/[a-zA-Z]/).test(val)
    }

    let backtrack=(i)=>{
        if(i==s.length){
            res.push(arr.join(''))
            return
        }

        if(charCheck(s[i])){
            arr[i] = s[i].toUpperCase()
            backtrack(i+1)
            arr[i] = s[i].toLowerCase()
            backtrack(i+1)
        }
        else{
            arr[i] = s[i]
            backtrack(i+1)
        }

    }
    
    backtrack(0)

    return res

};
