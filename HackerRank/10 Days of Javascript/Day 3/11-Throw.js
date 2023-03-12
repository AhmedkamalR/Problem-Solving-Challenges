// Day 3: Throw

// Problem

// n number of values of a sent
// 1 ≤ n ≤ 5
// a number between -100 and 100
// a = 0, throw error “Zero Error”
// a < 0, throw error “Negative Error”
// a > 0, console log “YES”

// solution
function isPositive(a) {
    let result = "YES";
    if (a < 0) {
        throw ({ message: "Negative Error" });
    } else if (a === 0) {
        throw ({ message: "Zero Error" });
    }
    return result;
}