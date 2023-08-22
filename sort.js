const arr=[4,9,3,5,8,10,1]
const swap=(arr,a,b)=>{
let temp=arr[a]
arr[a]=arr[b]
arr[b]=temp
return arr
}

const selectionSort=(arr,i)=>{
 if (i===undefined) i=arr.length-1
 if(i>0){

     const j=premax(arr, i)
     console.log(arr[j], arr[i])
     if(arr[j]>arr[i]){

         swap(arr,i,j)
     }
     selectionSort(arr,i-1)
     
 }
   return arr 
 } 


const premax=(arr,i)=>{
    if(i>0){
       return arr.indexOf( Math.max(...arr.slice(0,i+1)))
    }
}

console.log(selectionSort(arr))

const nums=[4,1,2,1,2]

const singleNumber=(nums)=>{
    const obj={};
    for(let i=0;i<nums.length;i++){
        if (!obj[nums[i]]){
            obj[nums[i]] = 0; 
        }
        
        obj[nums[i]]++
        
    }
    console.log(obj)
}

const singleNumber2 = (nums) => {
    const s = new Set();
    for (let i = 0; i < nums.length; i++) {
        const current=nums[i];
        if (s.has(current)) {
           s.delete(current)
        }else{
            s.add(current)
        }

     
    }
    console.log(...s)
}

singleNumber2(nums)