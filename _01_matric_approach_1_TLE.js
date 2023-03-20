function updateMatrix(mat: number[][]): number[][] {


    let n = mat.length
    let m = mat[0].length

    let dir = [[0,1],[1,0],[-1,0],[0,-1]]

    let temp = new Array(n)
    for(let i=0; i<n; i++)
        temp[i]=new Array(m).fill(0)
    
    // console.log('temp',temp)

    let bfs = (i,j)=>{
        let q = []

        let cost = 0;
        q.push([i,j])

        while(q.length!=0){
            let len = q.length
            cost++;
            // console.log('q',q)

            for(let i=0; i<len; i++){
                let val = q.shift()
                let r = val[0]
                let c = val[1]
                

                for(let d of dir){
                    let nr = r + d[0]
                    let nc = c + d[1]

                    if(nr>=n || nc>=m || nr<0 || nc<0  ){
                        continue
                    }

                    if( mat[nr][nc]==0)
                        return cost
                    else
                        q.push([nr,nc])
                }
            }

        }

        return cost

        
    }

    for(let i=0; i<n; i++)
    {
        for(let j=0; j<m; j++){
            if(mat[i][j]==0)
                temp[i][j]=0
            else{
                let val = bfs(i,j)
                console.log('val',val)
                temp[i][j]=val
            }
        }
    }

    return temp

};


// tle for 
// [[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[0,0,0]]
