// Day 7: Regular Expressions II

// Problem

// Receive a string of s which is greater than or equal to the length of 3
// Write a regular expression that validates the string
// String starts with either (Mr., Mrs., Ms., Dr., or Er.)
// String doesn’t contain any spaces
// String contains on the letters a-z or A-Z
// Return a boolean of true or false if the string meets the requirements


// Solution
function regexVar() {
    // (Mr\.|Mrs\.|Ms\.|Dr\.|Er\.) Word must start with either one
    // . Match any characters except line breaks
    // * Match 0 or more after this
    // [a-zA-Z] any letters in the alphabet upper or lowercase
    // $ ends with the preceding arguments [a-zA-Z]
    // /g globally match
    // m multiline match   
    const re = new RegExp(/(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.).*[a-zA-Z]$/gm);
    
    return re;
}
// Given
function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}