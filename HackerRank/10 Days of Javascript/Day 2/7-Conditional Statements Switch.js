// Day 2: Conditional Statements: Switch

// Problem

// A string is provided where its length is 1 ≤ s ≤ 100
// Given the following legend, return the correct value based on the first letter

// solution 1 

function getLetters(s) {
    if (s.length < 1 || s.length > 100) {
        return null;
    }

    switch (s.charAt(0).toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return "A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            return "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            return "C";
            break;
        default: // everything else
            return "D";
            break;
    }
}

//solution 2 with RegEx
function getLetter(s) {
    if (s.length < 1 || s.length > 100) {
        return null;
    }

    let letter = "D"; // default
    if (s[0].match(/(h|j|k|l|m)/)) {
        letter = "C";
    } else if (s[0].match(/(b|c|d|f|g)/)) {
        letter = "B";
    } else if (s[0].match(/(a|e|i|o|u)/)) {
        letter = "A";
    }

    return letter;
}