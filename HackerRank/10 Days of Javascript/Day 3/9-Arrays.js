// Day 3: Arrays

// Problem

// Receive n length array between 1 ≤ n ≤ 10
// 0 ≤ nums ≤ 100 as integers
// Return the second largest integer of the array

// solution

function getSecondLargest(nums) {
    // get the largest number
    const max = Math.max(...nums);

    // filter out largest number 
    nums = nums.filter(i => i !== max);

    // return new largest number 
    return Math.max(...nums);
}