// problem
// Given two strings ransomNote and magazine, 
// return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// solution
var canConstruct = function (ransomNote, magazine) {
    let dicObj = {};
    for (let i = 0; i < magazine.length; ++i) {
        if (dicObj[magazine[i]]) ++dicObj[magazine[i]];
        else dicObj[magazine[i]] = 1;
    }
    for (let i = 0; i < ransomNote.length; ++i) {
        if (dicObj[ransomNote[i]] === undefined || dicObj[ransomNote[i]] <= 0) return false;
        --dicObj[ransomNote[i]];
    }
    return true;
};

