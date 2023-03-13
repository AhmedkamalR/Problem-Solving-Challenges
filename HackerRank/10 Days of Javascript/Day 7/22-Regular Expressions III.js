// Day 7: Regular Expressions III

// Problem

// Receive a string of s
// length of s ≥ 3
// s is a string that contains numbers and letters
// Write a regular expression that validates the string
// The expression must only output integer numbers


// Solution
function regexVar() {
    // [0-9] accept only number
    // + must be the same of 1 or more of [0-9]
    // /g globally match
    // m multiline match
    const re = new RegExp(/[0-9]+/gm);
    
    return re;
}
// Given 
function main() {
    const re = regexVar();
    const s = readLine();
    
    const r = s.match(re);
    
    for (const e of r) {
        console.log(e);
    }
}