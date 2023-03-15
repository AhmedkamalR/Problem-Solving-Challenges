// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.


// solution

var runningSum = function (nums) {
    let acc = 0;
    for (let i = 0; i < nums.length; i++) {
        acc = acc + nums[i];
        nums[i] = acc;
    }
    return nums;
};

