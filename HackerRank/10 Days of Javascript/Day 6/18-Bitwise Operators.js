// Day 6: Bitwise Operators

// Problem

// Given an integer of n between 2 and 1000
// Given an integer of k between 2 and n
// q is just the number of lines we read from the input
// n is the max number of sequential numbers as a non-repeating pattern that can exist

// solution

function getMaxLessThanK(n, k) {
    let largest = 0;
    for (let a = 1; a <= n; a++) {
         for (let b = a + 1; b<= n; b++) {
              let ab = (a&b); // get the value of a&b
              
              // confirm that ab < k
              // if greater than the largest, redefine largest
              if (ab < k && ab > largest) {
                   largest = ab;
              }    
         }  
    } 
    return largest;
}