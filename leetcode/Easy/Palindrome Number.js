// problem
// Determine whether an integer is a palindrome. 
// An integer is a palindrome when it reads the same backward as forward.


// solution

var isPalindrome = function(x) {
    // Base condition
    if (x < 0) {
        return false;
    }
    // Store the number in a variable
    let number = x;
    // This will store the reverse of the number
    let reverse = 0;
    while (number > 0) {
        reverse = reverse * 10 + number % 10;
        number = parseInt(number / 10);
    }
    return x === reverse;
};