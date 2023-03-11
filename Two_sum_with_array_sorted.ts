function twoSum(numbers: number[], target: number): number[] {

    let i=0
    let j=numbers.length-1

    while(i<j){
        if(numbers[j] + numbers[i] == target){
            return [i+1,j+1]
            break
        }
        else if(numbers[j] + numbers[i] < target){
            i++
        }
        else{
            j--
        }
    }
    

};
