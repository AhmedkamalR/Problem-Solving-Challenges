// Day 1: Arithmetic Operators

// Problem

// A length and width are sent to two different functions
// getArea must return the area of the shape dimensions sent
// getPerimeter must return the perimeter of the shape dimensions sent
// Complete the functions

// solution

function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width; 
    return area;
}
 
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width);
    return perimeter;
}