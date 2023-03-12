// Day 4: Count Objects

// Problem

// n is the number of values given for x and y
// 5 ≤ n ≤ 10
// x equal a coordinate between 1 and 100
// y equal a coordinate between 1 and 100
// Return the index where the two coordinates are the same.

// solution
function getCount(objects) {
    let counts = 0;

    // iterate over array of objects
    objects.map((item) => {
        if (item.x === item.y) {
            counts++;
        }
        return item;
    });
    return counts;
}