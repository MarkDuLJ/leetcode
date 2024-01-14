const string = "AABAACAADAABAABA"
const pattern = "AABA"

/**
 * Output: Pattern found at index 0
              Pattern found at index 9
              Pattern found at index 12
 */


const search = (string, pattern)=>{
    const res=[]
  
    for(let i=0;i<string.length-pattern.length+1;i++){

        let compare=true
        for (let j = 0; j < pattern.length; j++) {
            if(string[i+j]!==pattern[j]){
                compare=false
                break
            }
            
        }
        if(compare) res.push(i)
        }
    return res
}

console.log(

    search(string,pattern)
);