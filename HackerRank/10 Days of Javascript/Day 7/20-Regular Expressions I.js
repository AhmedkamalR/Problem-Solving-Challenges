// Day 7: Regular Expressions I

// Problem

// Receive a string of s which is greater than or equal to the length of 3
// Write a regular expression that validates the string
// The string must be in all lowercase with characters from a-z
// The string must start and end with a vowel
// Return a boolean of true or false if the string meets the requirements

// Solution
function regexVar() {
    // \b validate as a word
    // (a|e|i|o|u) validate vowels
    // [a-z] validate lowercase letters
    // {2,} validate minimal length of 2 plus the first letter
    // \1 validate the first letter is the same at the end
    // \b end word validation
    let re = new RegExp(/\b(a|e|i|o|u)[a-z]{2,}\1\b/);

    return re;
}
// Given
function main() {
    const re = regexVar();
    const s = readLine();

    console.log(re.test(s));
}