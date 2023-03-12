// Day 4: Classes

// Problem

// A class called Polygon is initialized with an array with share sizes
// Create a JavaScript class that returns the perimeter of the shape, when .perimeter() is called

// Solution
class Polygon {
    constructor(arr) {
        this.arr = arr;
    }
    perimeter() {
        return this.arr.reduce((prev, next) => prev + next);
    }
}
// Given
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);
console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());