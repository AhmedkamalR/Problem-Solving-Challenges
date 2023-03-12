// Day 1: Functions

// Problem

// A integer of value n is provided
// 1 ≤ n ≤ 10
// Output the factorial value of n (n!, 4! = 4 x 3 x 2 x 1 = 24)

// solution

function factorial(n) {
    let result = n;
    for (var i = 1; i < n; i++) {
        result = result * (n - i);
    }
    return result;
}