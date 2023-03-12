// Day 2: Conditional Statements: If-Else

// Problem

// An integer value score is provided for a students test
// 0 ≤ score ≤ 30
// Given the following legend, return the respective grade
// Legend

// solution
function getGrade(score) {
    let grade = "F";
    // Write your code here
    if (score > 5 && score <= 10) {
        grade = "E";
    } else if (score > 10 && score <= 15) {
        grade = "D";
    } else if (score > 15 && score <= 20) {
        grade = "C";
    } else if (score > 20 && score <= 25) {
        grade = "B";
    } else if (score > 25 && score <= 30) {
        grade = "A";
    }
    
    return grade;
}