/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    let oc = image[sr][sc]
    let n = image.length
    let m = image[0].length

    if(oc == color)
        return image
    
    let dfs= (r,c)=>{
        if(r>=n || c>=m || r<0 || 
        c<0 || image[r][c]!=oc)
        {
            return
        }

        image[r][c]=color
        dfs(r+1,c)
        dfs(r-1,c)
        dfs(r,c+1)
        dfs(r,c-1)

    }

    dfs(sr,sc)
    return image

};
