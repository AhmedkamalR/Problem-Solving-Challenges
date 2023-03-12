// Day 2: Loops

// Problem

// Given a string of s of any length
// Output, in order, the vowels of that string on each new line
// Right after, output, in order, the consonants of that string on each new line

// solution 1
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    // output vowels    
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s.charAt(i)) > -1) {
            console.log(s.charAt(i));
        }
    }
    // output consonants
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s.charAt(i)) < 0) {
            console.log(s.charAt(i));
        }
    }
}

// solution 2 we can use Map
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    s = s.split(''); // convert to array 
    // output vowels    
    s.map((i) => {
        if (vowels.indexOf(i) > -1) {
            console.log(i);
        }
        return i;
    });
    // output consonants
    s.map((i) => {
        if (vowels.indexOf(i) < 0) {
            console.log(i);
        }
        return i;
    });
}