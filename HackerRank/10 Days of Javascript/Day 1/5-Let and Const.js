// Day 1: Let and Const

// Problem

// A float value r is provided for the radius
// 0 < r ≤ 100
// Print (console.log) the area of the circle (π x r²)
// Print (console.log) the perimeter of the circle (2πr)
// Do not overwrite the try and catch but make sure the code still works

// solution
function main() {
    // Write your code here. Read input using 'readLine()'
    // and print output using 'console.log()'.
    let r = parseFloat(readLine());
    const PI = Math.PI;
 
    // Print the area of the circle:
    console.log((PI * Math.pow(r, 2)));
 
    // Print the perimeter of the circle:
    console.log((2 * PI * r));
 
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}