// Day 5: Template Literals

// Problem

// A function will receive literals and remaning expressions
// Convert the expressing into values a and p
// Return an array
// Index 0 = ((p — Math.sqrt((Math.pow(p, 2) — (16 * a)))) / 4)
// Index 1 = ((p + Math.sqrt((Math.pow(p, 2) — (16 * a)))) / 4)


// Solution
function sides(literals, ...expressions) {
    const [a, p] = expressions;
return [
        ((p - Math.sqrt((Math.pow(p, 2) - (16 * a)))) / 4),
        ((p + Math.sqrt((Math.pow(p, 2) - (16 * a)))) / 4)
    ];
}
// Given
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;