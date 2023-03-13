// Day 5: Inheritance

// Problem

// Create a class called Square that extends an existing class of Rectangle
// Add functionality to Rectangle to return the shapes area

// Solution

Rectangle.prototype.area = function () {
    return (this.w * this.h);
}
class Square extends Rectangle {
    constructor(w) {
        super(w, w);
    }
}
// Given
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}