// problem
// Given a sorted array nums, 
// remove the duplicates in-place such that each element appears 
// only once and returns the new length.
// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.


// solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // Length of the updated array
    let count = 0;
    // Loop for all the elements in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is equal to the next element, we skip
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        // We will update the array in place
        nums[count] = nums[i];
        count++;
    }
    return count;
};