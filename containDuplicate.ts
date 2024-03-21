// 217. Contains Duplicate
// Easy
// Topics
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 
//brute force approch
const containDuplicate = (arr:any)=>{
    for(var i = 0; i<arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                return true;
            }
        }
    }

    return false;
}

console.log(containDuplicate([1,2,3,1]));
console.log(containDuplicate([1,2,3,4]));
console.log(containDuplicate([1,1,1,3,3,4,3,2,4,2]));


//optimized solution with map its O(n)
const containDuplicateOptimized = (arr:any)=>{

    let mappedValue = new Map();
    for(var i = 0; i<arr.length; i++){
        if(mappedValue.has(arr[i])){
            return true;
        }
        mappedValue.set(arr[i], arr[i]);
    }

    console.log(mappedValue);
    return false;
}


console.log(containDuplicateOptimized([1,2,3,1]));
console.log(containDuplicateOptimized([1,2,3,4]));
console.log(containDuplicateOptimized([1,1,1,3,3,4,3,2,4,2]));