// Day 5: Arrow Functions

// Problem

// an array of n length between 1 and 10 is received
// nums is the array with values between 1 and 100
// if a value of nums is even multiply it by 2
// if a value of nums is odd multiply it by 3
// return the modified array

// solution

function modifyArray(nums) {
    return nums.map((i) => (i % 2 === 0) ? i * 2 : i * 3);
}