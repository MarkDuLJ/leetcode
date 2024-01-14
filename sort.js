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

// console.log(selectionSort(arr))

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

// singleNumber2(nums)

/**
 * 
 * @param {*} arr 
 * @param {*} size 
 * @returns arr
 *                  bestcase        Average         worstcase
 * insertion sort       n           n^2             n^2
 *     quick sort       nlog(n)     nlog(n)         n^2
 * merge     sort       nlog(n)     nlog(n)         nlog(n)
 *        timsort       n           nlog(n)         nlog(n)
 */
// insertion sort bestcase: n, Average: n\^2, worstcase:n2
const insertionSort=( arr,size)=>{
    let curr;
    let i,j;
    for(i=0;i<size;i++){
        curr=arr[i];
        for(j=i;j>0 && arr[j-1] > curr;j--){
            arr[j]=arr[j-1];
        }
        arr[j]=curr; 
    }
    return arr
}

// console.log(
//     insertionSort(arr,arr.length)
// );

/**
 * QuickSort works like this:
    Pick a value from the array as the pivot
    Let i=front, j= back
    advance i until you find a value arr[i] > pivot
    move j towards front of array until arr[j] < pivot
    swap these arr[i] and arr[j].
    repeat step 3 to 5 until i and j meet
    The meeting point is used to break the array up into two pieces
    QuickSort these two new arrays
 */


const quickSort=(arr, low, high)=>{
     
    if(high-low<=3){
        const temp=arr[low]
        arr[low]=arr[high]
        arr[high]=temp
        
    }else{
        const pivotpt=high
        const i=low
        const j=high-1
        const pivot=arr[pivotpt]

        while (i<j) {
            while (arr[i]<pivot) {
                i++
            }
            while (arr[j]>pivot) {
                j--
            }
            if(i<j){
                
            }
        }
    }


    return arr

}

console.log(
    quickSort(arr,0,arr.length-1)
);