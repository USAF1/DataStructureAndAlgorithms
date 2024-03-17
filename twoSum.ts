//this is a simple typescript arrays concept used insted of hash maps or other techniques.....


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9,

// 


 

var twoSum = function(nums:any, target:number) {
    
    let sum = 0;
    let result:any = [];
    let index = 0;
    while(sum != target){
        sum = nums[index] + nums[index + 1];
        index ++
    }
    result.push(index-1);
    result.push(index);
    return result;
};

console.log(twoSum([2,7,11,15],9))

console.log(twoSum([3,2,4],6))

console.log(twoSum([3,3],6))