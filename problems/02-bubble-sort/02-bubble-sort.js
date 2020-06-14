/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

/* Bubble sort is a sorting algorithm, that works by repeatedly,
swapping the adjacent elements if hey are in the worng order */
let arr = [1,3,8,7,2,5];
function bubbleSort(numArray) {
   for(let i=0; i<numArray.length; i++){
       for(let j=0;j < numArray.length - i - 1;j++){
         if(numArray[j] > numArray[j+1]){
            let a = numArray[j];
            let b = numArray[j+1];
            numArray[j] = b;
            numArray[j+1] = a;
        }
    }
}
   return numArray;
}

console.log(bubbleSort(arr));