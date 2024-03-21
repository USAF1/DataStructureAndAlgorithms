// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.


// this solution is only to return the sum. 

const maximumSubArray = (arr:any)=>{

    if(arr.length < 0){
        return undefined;
    }

    if(arr.length == 0){
        return arr;
    }

    let maxValue = 0;
    let currentSum = 0
    for(var i = 0; i < arr.length; i ++){
        currentSum = currentSum + arr[i];
        if(maxValue < currentSum){
            maxValue = currentSum;
        }

        if(currentSum < 0){
            currentSum = 0;
        }
    }
    return maxValue;
}

// console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]));

//this soultion is to return the sub array with its sum. this method is O(n^3).

const arrayWithSum = (arr:any)=>{

    if(arr.length < 0){
        return undefined;
    }
    if(arr.length == 1){
        return arr[0];
    }

    let subArraysObject = new Map();
    let countLength = 1;
    let length = 1;
    let maxSum = 0
    while(arr[countLength]){
        for(var i = 0; i < arr.length; i ++){
            let sum = arr.slice(i, length + countLength).reduce((acc:any, curr:any) => acc + curr, 0);
            subArraysObject.set(sum,arr.slice(i, length + countLength))
            maxSum = maxSum > sum ? maxSum : sum;
            length++
        }
        length = 1;
        countLength++;
    }

    console.log(maxSum)
    return subArraysObject.get(maxSum);
}

console.log(arrayWithSum([-2,1,-3,4,-1,2,1,-5,4])); 
console.log(arrayWithSum([1])); 
console.log(arrayWithSum([5,4,-1,7,8])); 

//this soultion is to return the sub array with its sum. This method is O(n) optimized.

const arrayWithSumOptomized = (arr) => {
    if (arr.length === 0) {
      return undefined;
    }
    
    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > currentSum + arr[i]) {
        currentSum = arr[i];
        tempStart = i;
      } else {
        currentSum += arr[i];
      }
      
      if (currentSum > maxSum) {
        maxSum = currentSum;
        start = tempStart;
        end = i;
      }
    }
  
    console.log(maxSum);
    return arr.slice(start, end + 1);
  };
  
  console.log(arrayWithSumOptomized([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  console.log(arrayWithSumOptomized([1]));
  console.log(arrayWithSumOptomized([5, 4, -1, 7, 8]));