// Day 3: Try, Catch, and Finally

// Problem

// Expect a value of s of any type
// If it’s a string take it return the reverse
// If it’s not a string console log “s.split is not a function”
// Console.log the result of reversing or not reversing s

// solution 1 with Try, Catch

function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    } catch (e) {
        console.log("s.split is not a function");
    }
    console.log(s);
}

// solution 2 without Try, Catch

function reverseString(s) {
    if (typeof s !== "string") {
        console.log("s.split is not a function");
    }

    if (typeof s === "string") {
        s = s.split('').reverse().join('');
    }

    console.log(s);
}
