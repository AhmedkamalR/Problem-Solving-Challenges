// Day 4: Create a Rectangle Object

// Problem

// a = length of rectangle
// b = width of rectangle
// Complete Rectangle function to be instantiated
// when length called return a
// when width called return b
// when perimeter called, return the result
// when area called, return the result

// solution 
class Rectangle {
    constructor(a, b) {
        this.length = a;
        this.width = b;
        this.perimeter = ((a * 2) + (b * 2));
        this.area = a * b;
    }
}
// Given
function main() {
    const a = +(readLine());
    const b = +(readLine());

    const rec = new Rectangle(a, b);

    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}
