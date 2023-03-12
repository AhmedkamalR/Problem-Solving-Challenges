// Day 0: Data Types

// Problem

// Function receives an integer, a float, and a string
// The function has a constant integer of 4
// The function has a constant float of 4.0
// The function has a constant string of “HackerRank”
// Console log the sum of the constant integer and the integer received
// Console log the sum of the constant float by the float received
// Console lot the constant string following the string received on one line

// solution

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';

    // write code below
    console.log((firstInteger + parseInt(secondInteger, 0)));
    console.log((firstDecimal + parseFloat(secondDecimal, 2)));
    console.log(`${firstString}${secondString}`);
}